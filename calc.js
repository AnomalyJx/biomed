// Calculator (iOS-style, with order of operations + scientific keys) and unit converter.
(function(){
const OPS = {"+":1,"−":1,"×":2,"÷":2};
const isOp = t => typeof t === "string" && t in OPS;
const C = { tokens:[], entry:null, result:0, justEval:false, fresh:false, err:false, lastOp:null, expr:"" };
const SUP = {"0":"⁰","1":"¹","2":"²","3":"³","4":"⁴","5":"⁵","6":"⁶","7":"⁷","8":"⁸","9":"⁹","-":"⁻"};
const sup = s => String(s).split("").map(c => SUP[c] || c).join("");
const clean = x => (Object.is(x,-0) ? 0 : parseFloat(x.toPrecision(15)));

/* ---------- formatting ---------- */
function fmt(n){
  if(!isFinite(n)) return "Error";
  n = clean(n); const a = Math.abs(n);
  if(a !== 0 && (a >= 1e15 || a < 1e-9)){ const [m,e] = n.toExponential(8).split("e"); return parseFloat(m) + "e" + Number(e); }
  return parseFloat(n.toPrecision(12)).toLocaleString("en-GB",{maximumFractionDigits:11});
}
function fmtEntry(s){
  if(s.includes("e")){ const [m,e] = s.split("e"); return fmtEntry(m) + "e" + e; }
  const neg = s.startsWith("-"); if(neg) s = s.slice(1);
  let [i,d] = s.split("."); i = Number(i || "0").toLocaleString("en-GB");
  return (neg?"-":"") + i + (d !== undefined ? "." + d : "");
}
const tokStr = t => typeof t === "number" ? fmt(t) : t;

/* ---------- evaluation (shunting-yard, so × and ÷ happen before + and −) ---------- */
function evaluate(toks){
  const out = [], st = [];
  for(const t of toks){
    if(typeof t === "number") out.push(t);
    else if(isOp(t)){ while(st.length && isOp(st[st.length-1]) && OPS[st[st.length-1]] >= OPS[t]) out.push(st.pop()); st.push(t); }
    else if(t === "(") st.push(t);
    else if(t === ")"){ while(st.length && st[st.length-1] !== "(") out.push(st.pop()); st.pop(); }
  }
  while(st.length) out.push(st.pop());
  const s = [];
  for(const t of out){
    if(typeof t === "number"){ s.push(t); continue; }
    if(t === "(") continue;
    const b = s.pop(), a = s.pop();
    if(a === undefined || b === undefined) return NaN;
    s.push(apply(a,t,b));
  }
  return s.length ? s[s.length-1] : 0;
}
function apply(a,op,b){ return op==="+" ? a+b : op==="−" ? a-b : op==="×" ? a*b : b===0 ? NaN : a/b; }
function openParens(){ return C.tokens.filter(t=>t==="(").length - C.tokens.filter(t=>t===")").length; }
function curVal(){ return C.entry !== null ? Number(C.entry.replace(/e-?$/,"")) : C.result; }
function pushEntry(){ if(C.entry !== null){ C.tokens.push(Number(C.entry.replace(/e-?$/,"")) || 0); C.entry = null; C.fresh = false; } }
function partial(){
  // what the big display shows while an operator is waiting: the value so far
  let t = C.tokens.slice();
  while(t.length && (isOp(t[t.length-1]) || t[t.length-1] === "(")) t.pop();
  if(!t.length) return 0;
  let o = t.filter(x=>x==="(").length - t.filter(x=>x===")").length; while(o-- > 0) t.push(")");
  // iOS shows the last operand for a pending × or ÷, and the running total for + or −
  const last = C.tokens[C.tokens.length-1];
  if((last==="×"||last==="÷") && typeof t[t.length-1]==="number") return t[t.length-1];
  return evaluate(t);
}
function setErr(){ C.err = true; C.entry = null; C.tokens = []; C.justEval = true; C.result = NaN; }
function startFromResult(){ if(C.justEval){ C.tokens = []; C.justEval = false; C.expr = ""; } }

/* ---------- key handlers ---------- */
const K = {
  digit(d){
    if(C.err) K.ac();
    if(C.justEval){ C.tokens = []; C.justEval = false; C.expr = ""; }
    if(C.fresh){ C.entry = null; C.fresh = false; }
    if(C.tokens[C.tokens.length-1] === ")") C.tokens.push("×");
    if(C.entry === null || C.entry === "0") C.entry = d;
    else if(C.entry === "-0") C.entry = "-" + d;
    else { if(C.entry.replace(/[^0-9]/g,"").length >= 15) return; C.entry += d; }
  },
  dot(){
    if(C.err) K.ac();
    if(C.justEval){ C.tokens = []; C.justEval = false; C.expr = ""; }
    if(C.fresh){ C.entry = null; C.fresh = false; }
    if(C.entry === null) C.entry = "0.";
    else if(!C.entry.includes(".") && !C.entry.includes("e")) C.entry += ".";
  },
  op(o){
    if(C.err) return;
    if(C.justEval){ C.tokens = [C.result]; C.justEval = false; C.expr = ""; }
    pushEntry();
    const lt = C.tokens[C.tokens.length-1];
    if(!C.tokens.length) C.tokens.push(0);
    else if(isOp(lt)){ C.tokens[C.tokens.length-1] = o; return; }
    else if(lt === "(") return;
    C.tokens.push(o);
  },
  open(){
    if(C.err) K.ac();
    startFromResult();
    const lt = C.tokens[C.tokens.length-1];
    if(C.entry !== null){ pushEntry(); C.tokens.push("×"); }
    else if(lt === ")" || typeof lt === "number") C.tokens.push("×");
    C.tokens.push("(");
  },
  close(){
    if(C.err || openParens() <= 0) return;
    const lt = C.tokens[C.tokens.length-1];
    if(C.entry === null && (isOp(lt) || lt === "(")) return;
    pushEntry(); C.tokens.push(")");
  },
  eq(){
    if(C.err) return;
    if(C.justEval){
      if(C.lastOp){ const prev = C.result; C.result = clean(apply(prev, C.lastOp.op, C.lastOp.v)); C.expr = fmt(prev) + " " + C.lastOp.op + " " + fmt(C.lastOp.v); if(!isFinite(C.result)) setErr(); }
      return;
    }
    if(C.entry === null && isOp(C.tokens[C.tokens.length-1])) C.tokens.push(partial()); // iOS: "5 + =" uses the shown value → 10
    pushEntry();
    while(C.tokens.length && (isOp(C.tokens[C.tokens.length-1]) || C.tokens[C.tokens.length-1] === "(")) C.tokens.pop();
    if(!C.tokens.length){ C.tokens = []; return; }
    let o = openParens(); while(o-- > 0) C.tokens.push(")");
    const n = C.tokens.length;
    C.lastOp = (n >= 3 && typeof C.tokens[n-1] === "number" && isOp(C.tokens[n-2])) ? {op:C.tokens[n-2], v:C.tokens[n-1]} : null;
    C.expr = C.tokens.map(tokStr).join(" ").replace(/\( /g,"(").replace(/ \)/g,")");
    const v = evaluate(C.tokens);
    C.tokens = []; C.justEval = true;
    if(!isFinite(v)) setErr(); else C.result = clean(v);
  },
  ac(){ Object.assign(C, {tokens:[], entry:null, result:0, justEval:false, fresh:false, err:false, lastOp:null, expr:""}); },
  back(){
    if(C.entry === null || C.fresh) return;
    C.entry = C.entry.slice(0,-1);
    if(C.entry === "" || C.entry === "-") C.entry = null;
  },
  neg(){
    if(C.err) return;
    if(C.entry !== null && !C.fresh){
      if(C.entry.includes("e")) C.entry = C.entry.replace(/e(-?)/, (m,s) => s ? "e" : "e-");
      else C.entry = C.entry.startsWith("-") ? C.entry.slice(1) : "-" + C.entry;
    } else if(C.justEval){ setValue(-C.result); }
    else if(C.entry !== null){ setValue(-curVal()); }
    else C.entry = "-0";
  },
  pct(){
    if(C.err) return;
    const v = curVal(), n = C.tokens.length, lt = C.tokens[n-1];
    if(!C.justEval && C.entry !== null && (lt === "+" || lt === "−") && typeof C.tokens[n-2] === "number") setValue(C.tokens[n-2] * v / 100);
    else setValue(v / 100);
  },
  fn(name){
    if(C.err) return;
    const v = curVal();
    const f = {sq:x=>x*x, sqrt:x=>x<0?NaN:Math.sqrt(x), inv:x=>x===0?NaN:1/x, log:x=>x<=0?NaN:Math.log10(x), ln:x=>x<=0?NaN:Math.log(x), p10:x=>Math.pow(10,x), exp:x=>Math.exp(x)}[name];
    const r = f(v);
    if(!isFinite(r)){ setErr(); return; }
    setValue(r);
  },
  pi(){ if(C.err) K.ac(); startFromResult(); if(C.tokens[C.tokens.length-1]===")") C.tokens.push("×"); setValue(Math.PI); },
  ee(){
    if(C.err) K.ac();
    if(C.justEval){ setValue(C.result); }
    if(C.entry === null) C.entry = "1";
    C.fresh = false;
    if(!C.entry.includes("e")) C.entry += "e";
  }
};
function setValue(x){
  if(C.justEval){ C.tokens = []; C.justEval = false; C.expr = ""; }
  C.entry = String(clean(x)); C.fresh = true;
}

/* ---------- unit converter ---------- */
const CATS = {
  volume:{label:"Volume", units:[["L","litre",1],["mL","millilitre",1e-3],["µL","microlitre",1e-6],["nL","nanolitre",1e-9],["dL","decilitre",0.1],["cL","centilitre",0.01],["m³","cubic metre",1000],["dm³","cubic decimetre",1],["cm³","cubic centimetre",1e-3],["mm³","cubic millimetre",1e-6]]},
  mass:{label:"Mass", units:[["kg","kilogram",1000],["g","gram",1],["mg","milligram",1e-3],["µg","microgram",1e-6],["ng","nanogram",1e-9],["t","tonne",1e6]]},
  length:{label:"Length", units:[["km","kilometre",1000],["m","metre",1],["cm","centimetre",0.01],["mm","millimetre",1e-3],["µm","micrometre",1e-6],["nm","nanometre",1e-9],["pm","picometre",1e-12]]},
  time:{label:"Time", units:[["s","second",1],["ms","millisecond",1e-3],["µs","microsecond",1e-6],["min","minute",60],["h","hour",3600],["day","day",86400],["week","week",604800]]},
  temp:{label:"Temperature", units:[["°C","Celsius"],["K","kelvin"],["°F","Fahrenheit"]]},
  area:{label:"Area", units:[["m²","square metre",1],["cm²","square centimetre",1e-4],["mm²","square millimetre",1e-6],["µm²","square micrometre",1e-12],["km²","square kilometre",1e6],["ha","hectare",1e4]]},
  molar:{label:"Molarity", units:[["M","mol/L",1],["mM","mmol/L",1e-3],["µM","µmol/L",1e-6],["nM","nmol/L",1e-9],["mol/m³","mol per m³",1e-3]]},
  amount:{label:"Amount", units:[["mol","mole",1],["mmol","millimole",1e-3],["µmol","micromole",1e-6],["nmol","nanomole",1e-9],["particles","particles (÷ Avogadro)",1/6.02214076e23]]},
  masscon:{label:"Mass conc.", units:[["g/L","grams per litre",1],["mg/mL","milligrams per mL",1],["mg/L","milligrams per litre",1e-3],["µg/mL","micrograms per mL",1e-3],["g/mL","grams per mL",1000],["% w/v","g per 100 mL",10],["ppm","mg/L (water)",1e-3]]},
  energy:{label:"Energy", units:[["J","joule",1],["kJ","kilojoule",1000],["cal","calorie",4.184],["kcal","kilocalorie",4184]]},
  pressure:{label:"Pressure", units:[["Pa","pascal",1],["kPa","kilopascal",1000],["bar","bar",1e5],["atm","atmosphere",101325],["mmHg","millimetres of mercury",133.322]]},
  speed:{label:"Speed", units:[["m/s","metres per second",1],["km/h","kilometres per hour",1/3.6],["mph","miles per hour",0.44704],["µm/s","micrometres per second",1e-6]]}
};
function toBase(cat, v, u){
  if(cat === "temp") return u==="°C" ? v : u==="K" ? v - 273.15 : (v - 32) * 5/9;
  return v * CATS[cat].units.find(x=>x[0]===u)[2];
}
function fromBase(cat, v, u){
  if(cat === "temp") return u==="°C" ? v : u==="K" ? v + 273.15 : v * 9/5 + 32;
  return v / CATS[cat].units.find(x=>x[0]===u)[2];
}
function convert(cat, v, from, to){ return fromBase(cat, toBase(cat, v, from), to); }
function fmtSci(n){
  if(!isFinite(n)) return "—";
  if(n === 0) return "0";
  const a = Math.abs(n);
  if(a >= 1e9 || a < 1e-5){ const [m,e] = n.toExponential(4).split("e"); return parseFloat(m) + " × 10" + sup(Number(e)); }
  return parseFloat(n.toPrecision(8)).toLocaleString("en-GB",{maximumFractionDigits:8});
}
const plain = n => String(clean(n));

/* ---------- rendering ---------- */
let store, esc, conv;
const KEYS = [
  ["kt","ac"],["fn","neg","±"],["fn","pct","%"],["op","÷","÷"],
  ["num","7"],["num","8"],["num","9"],["op","×","×"],
  ["num","4"],["num","5"],["num","6"],["op","−","−"],
  ["num","1"],["num","2"],["num","3"],["op","+","+"],
  ["num zero","0"],["num","dot","."],["op eq","eq","="]
];
const SCI = [["open","("],["close",")"],["sq","x²"],["sqrt","√x"],["inv","1/x"],["log","log"],["ln","ln"],["p10","10ˣ"],["exp","eˣ"],["ee","EE"],["pi","π"]];

function render(app, _store, _esc){
  store = _store; esc = _esc;
  conv = store.get("conv", {cat:"volume", from:"L", to:"mL", v:"1"});
  if(!CATS[conv.cat]) conv = {cat:"volume", from:"L", to:"mL", v:"1"};
  const sci = store.get("sci", false);
  app.innerHTML = `<div class="calcwrap">
  <section class="card calc" aria-label="Calculator">
    <div class="disp">
      <div class="expr" id="cExpr" aria-live="polite"></div>
      <div class="cbig" id="cBig" aria-live="polite">0</div>
    </div>
    <div class="sci" id="cSci" ${sci?"":"hidden"}>${SCI.map(([k,l])=>`<button class="k s" data-k="${k}">${l}</button>`).join("")}<button class="k s sciclose" data-k="hidesci" aria-label="Hide scientific keys">▾</button></div>
    ${sci ? "" : `<button class="scitoggle" data-k="showsci">Scientific keys ▸ ( ) x² √ log ln 10ˣ EE π</button>`}
    <div class="keys">${KEYS.map(([cls,k,l])=>`<button class="k ${cls}" data-k="${k}" ${k==="ac"?'id="cAC" aria-label="All clear"':""}>${k==="ac"?"AC":esc(l||k)}</button>`).join("")}</div>
  </section>
  <section class="card conv" aria-label="Unit converter">
    <h2 style="font-size:24px">Unit converter</h2>
    <div class="chips" role="toolbar" aria-label="Quantity">${Object.entries(CATS).map(([k,c])=>`<button class="chip" data-cat="${k}" aria-pressed="${k===conv.cat}">${c.label}</button>`).join("")}</div>
    <div class="cv-row">
      <label class="sr" for="cvIn">Value</label>
      <input id="cvIn" inputmode="decimal" autocomplete="off" value="${esc(conv.v)}">
      <select id="cvFrom" aria-label="From unit">${unitOpts(conv.from)}</select>
    </div>
    <div class="cv-mid"><button class="btn" id="cvSwap" aria-label="Swap units">⇅ Swap</button><button class="btn" id="cvUseCalc">Use calculator value</button></div>
    <div class="cv-row out">
      <output id="cvOut" for="cvIn cvFrom cvTo">0</output>
      <select id="cvTo" aria-label="To unit">${unitOpts(conv.to)}</select>
    </div>
    <div class="bar"><button class="btn solid" id="cvToCalc">Send result to calculator</button><button class="btn" id="cvCopy">Copy</button><span class="saved" id="cvMsg" aria-live="polite"></span></div>
    <details class="cv-all" open><summary>All ${esc(CATS[conv.cat].label.toLowerCase())} units</summary><div id="cvAll" class="rows"></div></details>
  </section></div>`;
  wire(app); draw(); drawConv();
}
function unitOpts(sel){ return CATS[conv.cat].units.map(([u,n])=>`<option value="${esc(u)}" ${u===sel?"selected":""}>${esc(u)} · ${esc(n)}</option>`).join(""); }

function draw(){
  const big = document.getElementById("cBig"); if(!big) return;
  let txt;
  if(C.err) txt = "Error";
  else if(C.entry !== null) txt = fmtEntry(C.entry);
  else if(C.justEval) txt = fmt(C.result);
  else txt = fmt(partial());
  big.textContent = txt;
  const len = txt.length;
  big.style.fontSize = len <= 7 ? "" : len <= 9 ? "clamp(40px,11vw,62px)" : len <= 12 ? "clamp(32px,8.5vw,50px)" : "clamp(24px,6.5vw,38px)";
  const live = C.tokens.map(tokStr).join(" ").replace(/\( /g,"(").replace(/ \)/g,")") + (C.entry !== null && C.tokens.length ? " " + fmtEntry(C.entry) : "");
  document.getElementById("cExpr").textContent = C.justEval ? (C.expr ? C.expr + " =" : "") : live;
  const typing = C.entry !== null && !C.fresh && C.entry !== "0";
  const ac = document.getElementById("cAC");
  ac.textContent = typing ? "⌫" : "AC"; ac.setAttribute("aria-label", typing ? "Delete last digit" : "All clear");
  const lt = C.tokens[C.tokens.length-1];
  document.querySelectorAll(".k.op").forEach(b => b.classList.toggle("on", C.entry === null && !C.justEval && b.dataset.k === lt));
}
function press(k){
  if(/^[0-9]$/.test(k)) K.digit(k);
  else if(k === "dot") K.dot();
  else if(k in OPS) K.op(k);
  else if(k === "eq") K.eq();
  else if(k === "ac"){ const typing = C.entry !== null && !C.fresh && C.entry !== "0"; typing ? K.back() : K.ac(); }
  else if(k === "back") K.back();
  else if(k === "clear") K.ac();
  else if(k === "neg") K.neg();
  else if(k === "pct") K.pct();
  else if(k === "open") K.open();
  else if(k === "close") K.close();
  else if(k === "pi") K.pi();
  else if(k === "ee") K.ee();
  else if(["sq","sqrt","inv","log","ln","p10","exp"].includes(k)) K.fn(k);
  draw();
}
function wire(app){
  app.querySelector(".calc").addEventListener("click", e => {
    const b = e.target.closest("[data-k]"); if(!b) return;
    if(b.dataset.k === "showsci" || b.dataset.k === "hidesci"){ store.set("sci", b.dataset.k === "showsci"); render(app, store, esc); return; }
    press(b.dataset.k);
  });
  app.querySelectorAll("[data-cat]").forEach(b => b.onclick = () => {
    const cat = b.dataset.cat, u = CATS[cat].units;
    conv = {cat, from:u[0][0], to:u[1][0], v:conv.v}; saveConv(); render(app, store, esc);
  });
  const inp = document.getElementById("cvIn");
  inp.addEventListener("input", () => { conv.v = inp.value; saveConv(); drawConv(); });
  document.getElementById("cvFrom").onchange = e => { conv.from = e.target.value; saveConv(); drawConv(); };
  document.getElementById("cvTo").onchange = e => { conv.to = e.target.value; saveConv(); drawConv(); };
  document.getElementById("cvSwap").onclick = () => { [conv.from, conv.to] = [conv.to, conv.from]; saveConv(); render(app, store, esc); };
  document.getElementById("cvUseCalc").onclick = () => {
    const v = C.err ? 0 : (C.entry !== null ? curVal() : (C.justEval ? C.result : partial()));
    conv.v = plain(v); inp.value = conv.v; saveConv(); drawConv(); msg("Calculator value loaded");
  };
  document.getElementById("cvToCalc").onclick = () => {
    const r = convResult(); if(!isFinite(r)) return;
    K.ac(); C.entry = plain(r); C.fresh = true; draw(); msg("Sent to calculator ↑");
    document.querySelector(".calc").scrollIntoView({behavior:"smooth", block:"start"});
  };
  document.getElementById("cvCopy").onclick = async () => {
    const t = `${conv.v} ${conv.from} = ${fmtSci(convResult())} ${conv.to}`;
    try{ await navigator.clipboard.writeText(t); msg("Copied"); }catch(e){ msg("Copy not allowed here"); }
  };
}
function msg(t){ const m = document.getElementById("cvMsg"); if(m){ m.textContent = t; clearTimeout(msg.t); msg.t = setTimeout(()=>{ m.textContent = ""; }, 2200); } }
function saveConv(){ store.set("conv", conv); }
function parseIn(s){ s = String(s).trim().replace(/,/g,"").replace(/×\s*10\^?/,"e").replace(/\s/g,""); return s === "" ? NaN : Number(s); }
function convResult(){ return convert(conv.cat, parseIn(conv.v), conv.from, conv.to); }
function drawConv(){
  const v = parseIn(conv.v), out = document.getElementById("cvOut"); if(!out) return;
  const inp = document.getElementById("cvIn");
  inp.setAttribute("aria-invalid", conv.v.trim() !== "" && !isFinite(v) ? "true" : "false");
  out.textContent = isFinite(v) ? fmtSci(convResult()) : "—";
  const all = document.getElementById("cvAll");
  all.innerHTML = isFinite(v) ? CATS[conv.cat].units.map(([u,n]) => `<div class="cv-line ${u===conv.to?"hl":""}"><span>${esc(n)}</span><b>${esc(fmtSci(convert(conv.cat, v, conv.from, u)))} ${esc(u)}</b></div>`).join("") : `<p class="muted">Type a number above.</p>`;
}
function key(e){
  if(e.target.closest("input,select,textarea,[contenteditable=true]")) return false;
  const m = {"Enter":"eq","=":"eq","+":"+","-":"−","*":"×","x":"×","/":"÷",".":"dot",",":"dot","%":"pct","(":"open",")":"close","Backspace":"back","Escape":"clear","Delete":"clear"};
  const k = /^[0-9]$/.test(e.key) ? e.key : m[e.key];
  if(!k) return false;
  e.preventDefault(); press(k); return true;
}
window.CALC = { render, key, _test:{K, C, press, convert, fmt} };
})();
