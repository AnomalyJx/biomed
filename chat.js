// Dev-only "Ask Claude" tab: talks straight from this browser to the Claude API with the owner's own key.
// The key is kept only in this browser's localStorage and is sent only to api.anthropic.com.
(function(){
const MODEL = "claude-opus-5-5", EFFORT = "medium", MAX_TOKENS = 16000;
const PRICE_IN = 4, PRICE_OUT = 20; // USD per million tokens (Claude Opus 5.5)
const API = "https://api.anthropic.com/v1/messages";
const SYSTEM = `You are a patient, expert tutor helping a UK Foundation Year student at London South Bank University (LSBU). Their modules are Foundation of Biology (cells, membranes, biomolecules, enzymes, DNA/RNA, replication, protein synthesis, mitosis, genetics, pedigrees, mutations, genetic diseases, practicals) and Foundation Maths for Science (fractions, standard form, accuracy and precision, units and conversions, ratios and percentages, logarithms and pH, moles/molarity/dilutions, measurements in biology).
When helping with homework: work through problems step by step, show every line of working with units, explain *why* each step is done, and finish with a clear final answer and a quick sanity check. Use UK spelling. Write maths with LaTeX between $...$ (inline) or $$...$$ (display). Keep answers focused and readable on a phone; use short headings or lists only when they help. If a photo or file is unclear, say what you can't read rather than guessing.`;

let store, esc, convo = null, busy = false, ctrl = null, pending = [];
const libs = {loaded:false, loading:null};

/* ---------- optional libraries (markdown + maths); the chat still works without them ---------- */
function loadScript(src){ return new Promise((res, rej) => { const s = document.createElement("script"); s.src = src; s.onload = res; s.onerror = rej; document.head.appendChild(s); }); }
function loadCss(href){ const l = document.createElement("link"); l.rel = "stylesheet"; l.href = href; document.head.appendChild(l); }
function loadLibs(){
  if(libs.loading) return libs.loading;
  const cdn = "https://cdnjs.cloudflare.com/ajax/libs/";
  loadCss(cdn + "KaTeX/0.16.9/katex.min.css");
  libs.loading = Promise.all([loadScript(cdn + "marked/12.0.2/marked.min.js"), loadScript(cdn + "dompurify/3.1.6/purify.min.js"), loadScript(cdn + "KaTeX/0.16.9/katex.min.js")])
    .then(() => loadScript(cdn + "KaTeX/0.16.9/contrib/auto-render.min.js"))
    .then(() => { libs.loaded = true; rerenderAll(); })
    .catch(() => { libs.loaded = false; });
  return libs.loading;
}
function mdToHtml(text){
  if(libs.loaded && window.marked && window.DOMPurify){
    // protect maths from the markdown parser, then restore it
    const maths = [];
    const t = text.replace(/\$\$[\s\S]+?\$\$|\$[^$\n]+?\$|\\\([\s\S]+?\\\)|\\\[[\s\S]+?\\\]/g, m => { maths.push(m); return "@@M" + (maths.length-1) + "@@"; });
    let html = window.DOMPurify.sanitize(window.marked.parse(t, {breaks:true}));
    html = html.replace(/@@M(\d+)@@/g, (m,i) => esc(maths[+i]));
    return html;
  }
  return esc(text).replace(/\n/g, "<br>");
}
function typeset(el){
  if(libs.loaded && window.renderMathInElement){
    try{ window.renderMathInElement(el, {delimiters:[{left:"$$",right:"$$",display:true},{left:"$",right:"$",display:false},{left:"\\(",right:"\\)",display:false},{left:"\\[",right:"\\]",display:true}], throwOnError:false}); }catch(e){}
  }
}

/* ---------- storage ---------- */
const getKey = () => store.get("apiKey", "");
function loadConvo(){ convo = store.get("chat", null) || {msgs:[], cost:0}; }
function saveConvo(){
  // attachments live only in memory for this visit; the saved copy keeps the text so it fits in browser storage
  const slim = {cost: convo.cost, msgs: convo.msgs.map(m => ({role:m.role, text:m.text, files:m.files ? m.files.map(f => ({name:f.name, kind:f.kind})) : undefined}))};
  if(!store.set("chat", slim)) store.set("chat", {cost:convo.cost, msgs:slim.msgs.slice(-20)});
}

/* ---------- attachments ---------- */
function readAs(file, how){ return new Promise((res, rej) => { const r = new FileReader(); r.onload = () => res(r.result); r.onerror = rej; r[how](file); }); }
async function shrinkImage(file){
  const url = await readAs(file, "readAsDataURL");
  const img = await new Promise((res, rej) => { const i = new Image(); i.onload = () => res(i); i.onerror = rej; i.src = url; });
  const max = 1568, scale = Math.min(1, max / Math.max(img.width, img.height));
  if(scale === 1 && file.size < 3.5e6 && /^image\/(jpeg|png|gif|webp)$/.test(file.type)) return {media: file.type, data: url.split(",")[1], preview: url};
  const c = document.createElement("canvas"); c.width = Math.round(img.width * scale); c.height = Math.round(img.height * scale);
  c.getContext("2d").drawImage(img, 0, 0, c.width, c.height);
  const out = c.toDataURL("image/jpeg", 0.85);
  return {media: "image/jpeg", data: out.split(",")[1], preview: out};
}
async function addFiles(list){
  for(const f of list){
    try{
      if(f.type.startsWith("image/")){ const im = await shrinkImage(f); pending.push({kind:"image", name:f.name || "image", ...im}); }
      else if(f.type === "application/pdf" || /\.pdf$/i.test(f.name)){
        if(f.size > 30e6){ note("“" + f.name + "” is over 30 MB, which is too big to send."); continue; }
        const url = await readAs(f, "readAsDataURL"); pending.push({kind:"pdf", name:f.name, data:url.split(",")[1]});
      }
      else if(/^text\//.test(f.type) || /\.(txt|md|csv|tsv|json|py|js|html|css)$/i.test(f.name)){
        const t = await readAs(f, "readAsText"); pending.push({kind:"text", name:f.name, text:t.slice(0, 200000)});
      }
      else note("“" + f.name + "” can't be read here. Send images, PDFs or text files (save Word or PowerPoint files as PDF first).");
    }catch(e){ note("Couldn't read “" + f.name + "”."); }
  }
  drawPending();
}
function blocksFor(m){
  const b = [];
  for(const f of m.files || []){
    if(f.kind === "image" && f.data) b.push({type:"image", source:{type:"base64", media_type:f.media, data:f.data}});
    else if(f.kind === "pdf" && f.data) b.push({type:"document", source:{type:"base64", media_type:"application/pdf", data:f.data}, title:f.name});
    else if(f.kind === "text" && f.text) b.push({type:"text", text:"Attached file “" + f.name + "”:\n\n" + f.text});
    else if(f.kind) b.push({type:"text", text:"(Earlier attachment “" + f.name + "” is no longer available.)"});
  }
  if(m.text) b.push({type:"text", text:m.text});
  return b.length ? b : [{type:"text", text:"(empty)"}];
}

function buildMessages(list){
  // skip failed replies, and merge back-to-back user turns so roles always alternate
  const out = [];
  for(const m of list){
    if(m.role === "assistant" && (m.err || !m.text)) continue;
    const content = m.role === "user" ? blocksFor(m) : [{type:"text", text:m.text}];
    const last = out[out.length-1];
    if(last && last.role === m.role) last.content = last.content.concat(content); else out.push({role:m.role, content});
  }
  return out;
}
/* ---------- API call (streaming) ---------- */
async function send(){
  const box = document.getElementById("chIn"); const text = box.value.trim();
  if(busy || (!text && !pending.length)) return;
  if(!getKey()){ note("Add your API key in Settings first."); openSettings(true); return; }
  const um = {role:"user", text, files: pending.slice()};
  convo.msgs.push(um); pending = []; box.value = ""; autoGrow(box); drawPending();
  const am = {role:"assistant", text:""}; convo.msgs.push(am);
  drawMsgs(); busy = true; setBusy(true);
  const bubble = document.querySelector("#chMsgs .msg:last-child .body");
  const status = document.querySelector("#chMsgs .msg:last-child .st");
  ctrl = new AbortController();
  let usageIn = 0, usageOut = 0;
  try{
    const res = await fetch(API, {method:"POST", signal: ctrl.signal, headers:{
      "content-type":"application/json", "x-api-key": getKey(), "anthropic-version":"2026-10-21",
      "anthropic-dangerous-direct-browser-access":"true"},
      body: JSON.stringify({model:MODEL, max_tokens:MAX_TOKENS, stream:true, system:SYSTEM, output_config:{effort:EFFORT},
        messages: buildMessages(convo.msgs.slice(0,-1))})});
    if(!res.ok){ throw new Error(await apiError(res)); }
    const reader = res.body.getReader(), dec = new TextDecoder(); let buf = "", lastDraw = 0;
    status.textContent = "Thinking…";
    while(true){
      const {value, done} = await reader.read(); if(done) break;
      buf += dec.decode(value, {stream:true});
      let i;
      while((i = buf.indexOf("\n\n")) >= 0){
        const chunk = buf.slice(0, i); buf = buf.slice(i + 2);
        const line = chunk.split("\n").find(l => l.startsWith("data:")); if(!line) continue;
        let ev; try{ ev = JSON.parse(line.slice(5)); }catch(e){ continue; }
        if(ev.type === "message_start") usageIn = (ev.message.usage && (ev.message.usage.input_tokens + (ev.message.usage.cache_read_input_tokens||0) + (ev.message.usage.cache_creation_input_tokens||0))) || 0;
        else if(ev.type === "content_block_start" && ev.content_block.type === "thinking") status.textContent = "Thinking…";
        else if(ev.type === "content_block_delta" && ev.delta.type === "text_delta"){
          am.text += ev.delta.text; status.textContent = "";
          const now = performance.now(); if(now - lastDraw > 60){ bubble.innerHTML = mdToHtml(am.text); lastDraw = now; scrollDown(); }
        }
        else if(ev.type === "message_delta"){ if(ev.usage) usageOut = ev.usage.output_tokens || usageOut; if(ev.delta && ev.delta.stop_reason === "max_tokens") am.text += "\n\n*(Reply cut off at the length limit. Ask me to continue.)*"; }
        else if(ev.type === "error") throw new Error((ev.error && ev.error.message) || "The API returned an error.");
      }
    }
    if(!am.text) am.text = "*(No text in the reply. Try asking again.)*";
  }catch(e){
    if(e.name === "AbortError") am.text += (am.text ? "\n\n" : "") + "*(Stopped.)*";
    else {
      const m = e instanceof TypeError ? "Couldn't reach the Claude API. Check your internet connection. (This tab only works on the GitHub version of the site: the Claude artifact link blocks outside connections.)" : e.message;
      am.text += (am.text ? "\n\n" : "") + "**Error:** " + m; am.err = true;
    }
  }
  const cost = (usageIn * PRICE_IN + usageOut * PRICE_OUT) / 1e6;
  convo.cost += cost; am.meta = usageIn || usageOut ? `${usageIn.toLocaleString()} in · ${usageOut.toLocaleString()} out · ≈ $${cost.toFixed(3)}` : "";
  busy = false; ctrl = null; setBusy(false); saveConvo(); drawMsgs();
}
async function apiError(res){
  let msg = "";
  try{ const j = await res.json(); msg = (j.error && j.error.message) || ""; }catch(e){}
  if(res.status === 401) return "Your API key was rejected (401). Check it in Settings.";
  if(res.status === 403) return "This key isn't allowed to do that (403). " + msg;
  if(res.status === 429) return "Rate limit or credit limit reached (429). Wait a moment, or check your credit balance in the Claude Console.";
  if(res.status === 529 || res.status === 503) return "Claude is busy right now (" + res.status + "). Try again in a minute.";
  if(res.status === 413) return "That message is too large (413). Try fewer or smaller attachments.";
  return "Request failed (" + res.status + "). " + msg;
}

/* ---------- UI ---------- */
function render(app, _store, _esc){
  store = _store; esc = _esc; if(!convo) loadConvo(); loadLibs();
  app.innerHTML = `<section class="card chat">
    <div class="chhead">
      <div><h2 style="font-size:22px;margin:0">Ask Claude</h2><p class="muted" style="margin:0">Claude Opus 5.5 · medium effort · only on this device</p></div>
      <div class="chbtns"><button class="btn" id="chNew">New chat</button><button class="btn" id="chSet" aria-expanded="false">Settings</button></div>
    </div>
    <div id="chSettings" class="chset" hidden>
      <label class="lbl" for="chKey">Claude API key</label>
      <div class="chkey"><input id="chKey" type="password" autocomplete="off" spellcheck="false" placeholder="sk-ant-…" value="${esc(getKey())}"><button class="btn solid" id="chSave">Save</button></div>
      <p class="muted">Stored only in this browser and sent only to Anthropic's API. Make a key at <a href="https://platform.claude.com/settings/keys" target="_blank" rel="noopener">platform.claude.com</a>; usage is billed to that account (about $4 per million input tokens and $20 per million output tokens). Set a monthly spend limit there.</p>
      <p class="muted" id="chSpent">This chat so far: ≈ $${convo.cost.toFixed(3)}</p>
      <div class="bar"><button class="btn" id="chForget">Forget key</button><button class="btn" id="chLock">Hide this tab</button></div>
    </div>
    <div id="chMsgs" class="msgs" aria-live="polite"></div>
    <div id="chPend" class="pend"></div>
    <div class="composer" id="chDrop">
      <input type="file" id="chFile" multiple accept="image/*,application/pdf,.pdf,.txt,.md,.csv" hidden>
      <button class="btn att" id="chAtt" aria-label="Attach files or photos">+</button>
      <textarea id="chIn" rows="1" placeholder="Ask about your homework…"></textarea>
      <button class="btn solid" id="chGo">Send</button>
    </div>
    <p class="muted" id="chNote" aria-live="polite" style="min-height:20px;margin:6px 2px 0"></p>
  </section>`;
  wire(); drawMsgs(); drawPending();
  if(!getKey()) openSettings(true);
}
function wire(){
  const inp = document.getElementById("chIn");
  inp.addEventListener("input", () => autoGrow(inp));
  inp.addEventListener("keydown", e => { if(e.key === "Enter" && !e.shiftKey && !matchMedia("(pointer:coarse)").matches){ e.preventDefault(); send(); } });
  inp.addEventListener("paste", e => { const fs = [...(e.clipboardData ? e.clipboardData.files : [])]; if(fs.length){ e.preventDefault(); addFiles(fs); } });
  document.getElementById("chGo").onclick = () => busy ? (ctrl && ctrl.abort()) : send();
  document.getElementById("chAtt").onclick = () => document.getElementById("chFile").click();
  document.getElementById("chFile").onchange = e => { addFiles([...e.target.files]); e.target.value = ""; };
  const drop = document.getElementById("chDrop");
  drop.addEventListener("dragover", e => { e.preventDefault(); drop.classList.add("over"); });
  drop.addEventListener("dragleave", () => drop.classList.remove("over"));
  drop.addEventListener("drop", e => { e.preventDefault(); drop.classList.remove("over"); addFiles([...e.dataTransfer.files]); });
  document.getElementById("chSet").onclick = () => openSettings(document.getElementById("chSettings").hidden);
  document.getElementById("chSave").onclick = () => { const k = document.getElementById("chKey").value.trim(); store.set("apiKey", k); note(k ? "Key saved on this device." : "Key cleared."); if(k) openSettings(false); };
  document.getElementById("chForget").onclick = () => { store.del("apiKey"); document.getElementById("chKey").value = ""; note("Key removed from this browser."); };
  document.getElementById("chLock").onclick = () => { store.set("dev", false); location.hash = "notes"; window.dispatchEvent(new Event("devchange")); };
  document.getElementById("chNew").onclick = (e) => {
    const b = e.currentTarget;
    if(convo.msgs.length && b.dataset.c !== "1"){ b.dataset.c = "1"; b.textContent = "Tap again to clear"; setTimeout(() => { b.dataset.c = ""; b.textContent = "New chat"; }, 3000); return; }
    if(ctrl) ctrl.abort(); convo = {msgs:[], cost:0}; pending = []; saveConvo(); drawMsgs(); drawPending(); b.dataset.c = ""; b.textContent = "New chat";
  };
}
function openSettings(on){ const s = document.getElementById("chSettings"); s.hidden = !on; document.getElementById("chSet").setAttribute("aria-expanded", on); }
function autoGrow(t){ t.style.height = "auto"; t.style.height = Math.min(t.scrollHeight, 200) + "px"; }
function note(t){ const n = document.getElementById("chNote"); if(n){ n.textContent = t; clearTimeout(note.t); note.t = setTimeout(() => { n.textContent = ""; }, 5000); } }
function setBusy(on){ const g = document.getElementById("chGo"); if(g){ g.textContent = on ? "Stop" : "Send"; g.classList.toggle("stop", on); } }
function scrollDown(){ const m = document.getElementById("chMsgs"); if(m) m.scrollTop = m.scrollHeight; }
function fileChips(files){ return (files || []).map(f => f.kind === "image" && f.preview ? `<img class="thumb" src="${f.preview}" alt="${esc(f.name)}">` : `<span class="fchip">${f.kind === "pdf" ? "PDF" : f.kind === "image" ? "Image" : "File"} · ${esc(f.name)}</span>`).join(""); }
function drawMsgs(){
  const box = document.getElementById("chMsgs"); if(!box) return;
  if(!convo.msgs.length){ box.innerHTML = `<div class="empty">Ask anything from your modules: paste a question, snap a photo of a worksheet, or attach lecture PDFs.<br><br><b>Try:</b> “Explain c₁V₁ = c₂V₂ with an example” or “Check my working on this photo”.</div>`; return; }
  box.innerHTML = convo.msgs.map((m,i) => `<div class="msg ${m.role}${m.err ? " err" : ""}">
    ${m.files && m.files.length ? `<div class="files">${fileChips(m.files)}</div>` : ""}
    <div class="body">${m.role === "assistant" ? mdToHtml(m.text) : esc(m.text).replace(/\n/g,"<br>")}</div>
    ${m.role === "assistant" ? `<div class="st">${busy && i === convo.msgs.length-1 && !m.text ? "Thinking…" : ""}</div>${m.meta ? `<div class="meta2">${esc(m.meta)}</div>` : ""}${m.text && !(busy && i === convo.msgs.length-1) ? `<button class="copy" data-i="${i}">Copy</button>` : ""}` : ""}
  </div>`).join("");
  box.querySelectorAll(".msg.assistant .body").forEach(typeset);
  box.querySelectorAll(".copy").forEach(b => b.onclick = async () => { try{ await navigator.clipboard.writeText(convo.msgs[+b.dataset.i].text); b.textContent = "Copied"; }catch(e){ b.textContent = "Copy not allowed"; } });
  scrollDown();
  const sp = document.getElementById("chSpent"); if(sp) sp.textContent = "This chat so far: ≈ $" + convo.cost.toFixed(3);
}
function rerenderAll(){ if(document.getElementById("chMsgs") && !busy) drawMsgs(); }
function drawPending(){
  const p = document.getElementById("chPend"); if(!p) return;
  p.innerHTML = pending.map((f,i) => `<span class="pchip">${f.kind === "image" ? `<img src="${f.preview}" alt="">` : ""}${esc(f.name)}<button aria-label="Remove ${esc(f.name)}" data-rm="${i}">×</button></span>`).join("");
  p.querySelectorAll("[data-rm]").forEach(b => b.onclick = () => { pending.splice(+b.dataset.rm, 1); drawPending(); });
}
window.CHAT = { render };
})();
