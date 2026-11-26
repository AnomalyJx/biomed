// Foundation Mathematics for Science — notes + quiz (Weeks 1–8). Appended to the biology data.
(function(){
const targets = `<figure class="inl"><svg viewBox="0 0 440 130" role="img" aria-label="Four targets: precise and accurate; precise but biased; accurate on average but imprecise; biased and imprecise">
${[["Accurate, precise",[[0,0],[4,-3],[-3,4],[2,3]]],["Precise, biased",[[22,-20],[26,-23],[19,-17],[24,-16]]],["Accurate, imprecise",[[-20,12],[18,-16],[14,20],[-12,-18]]],["Biased, imprecise",[[24,-2],[6,-26],[30,-24],[12,-8]]]].map(([lab,pts],i)=>{const cx=55+i*110;return `<g><circle cx="${cx}" cy="55" r="42" fill="none" stroke="currentColor" opacity=".35"/><circle cx="${cx}" cy="55" r="27" fill="none" stroke="currentColor" opacity=".35"/><circle cx="${cx}" cy="55" r="11" fill="none" stroke="currentColor" opacity=".55"/>${pts.map(([x,y])=>`<circle cx="${cx+x}" cy="${55+y}" r="4.5" fill="#0a84ff"/>`).join("")}<text x="${cx}" y="120" font-size="10" text-anchor="middle" fill="currentColor">${lab}</text></g>`}).join("")}</svg><figcaption>Centre = reference value; dots = repeated measurements.</figcaption></figure>`;
const serial = `<figure class="inl"><svg viewBox="0 0 440 120" role="img" aria-label="Serial dilution: stock 1.0 M, then tubes of 0.10, 0.010 and 0.0010 M, each a tenfold dilution">
${["1.0 M","0.10 M","0.010 M","0.0010 M"].map((c,i)=>{const x=40+i*115;const o=[0.95,0.6,0.35,0.15][i];return `<g><rect x="${x}" y="15" width="34" height="70" rx="12" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="${x+2}" y="40" width="30" height="43" rx="10" fill="#1456c0" opacity="${o}"/><text x="${x+17}" y="105" font-size="11" text-anchor="middle" fill="currentColor">${c}</text>${i<3?`<path d="M${x+42} 50 h52" stroke="#0a84ff" stroke-width="2" marker-end="url(#ah)"/><text x="${x+68}" y="42" font-size="10.5" text-anchor="middle" fill="currentColor">÷10</text>`:""}</g>`}).join("")}
<defs><marker id="ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#0a84ff"/></marker></defs></svg><figcaption>1 mL into 9 mL diluent each step. Three ×10 steps = 1,000-fold overall.</figcaption></figure>`;

const MT = [
{id:"m-numbers", subject:"maths", title:"Number skills: fractions, decimals & standard form", short:"Numbers & fractions", week:"Weeks 1–2", notes:`
<h3>Week 1 recap: calculating carefully</h3>
<ul>
<li><b>Place value:</b> in 6,407 the 4 is worth 400; in 0.408 the 4 is worth 4 tenths (0.4).</li>
<li><b>BIDMAS</b> (Brackets, Indices, Division and Multiplication, Addition and Subtraction): 7 + 3 × 4 = 19, but (7 + 3) × 4 = 40. Division and multiplication have equal priority and are worked left to right, so 24 ÷ 6 × 2 = 8.</li>
<li><b>Method:</b> read → choose a method → <b>estimate</b> → calculate → check → <b>attach units</b>. For example, 19 × 21 ≈ 20 × 20 = 400, so a display of 3,900 must be wrong.</li>
</ul>
<h3>Factors & primes</h3>
<ul>
<li>A <b>prime</b> is a whole number greater than 1 with exactly two factors, 1 and itself. <b>1 is not prime</b>, and <b>2 is the only even prime</b>. The primes from 10 to 25 are 11, 13, 17, 19 and 23.</li>
<li><b>Prime factorisation:</b> 36 = 2 × 2 × 3 × 3; 48 = 2 × 2 × 2 × 2 × 3.</li>
<li><b>Highest common factor (HCF)</b> = the product of the shared prime factors. HCF(36, 48) = 2 × 2 × 3 = 12; HCF(18, 24) = 6.</li>
</ul>
<h3>Fractions</h3>
<ul>
<li>In 3/8, the <b>numerator</b> (3) is the number of parts chosen and the <b>denominator</b> (8) is the number of equal parts in the whole.</li>
<li><b>Simplify</b> by dividing the top and bottom by the HCF: 18/24 = 3/4.</li>
<li><b>Compare</b> using a common denominator: 3/4 = 6/8 > 5/8; 2/3 = 10/15 > 3/5 = 9/15.</li>
<li><b>Add or subtract:</b> use a common denominator first. 1/3 + 1/4 = 4/12 + 3/12 = <b>7/12</b>, <i>not</i> 2/7. Never add the denominators.</li>
<li><b>Multiply:</b> multiply the tops and the bottoms, then simplify: 2/3 × 3/5 = 6/15 = 2/5.</li>
<li><b>Divide:</b> multiply by the reciprocal: 3/4 ÷ 1/2 = 3/4 × 2/1 = 3/2 = 1.5.</li>
<li><b>Fraction of an amount:</b> 3/8 of 64 mL: 64 ÷ 8 = 8, then × 3 = <b>24 mL</b>. A fraction has no unit, but a fraction of a volume does.</li>
</ul>
<h3>Decimals</h3>
<ul>
<li>Fraction → decimal: divide the top by the bottom. 3/8 = 0.375; 7/20 = 0.35. And 0.125 = 125/1000 = 1/8.</li>
<li>Line up place values: 0.600 + 0.075 = 0.675. 0.6 is bigger than 0.58.</li>
<li>Terminating decimals end (0.125); recurring decimals repeat (1/3 = 0.333…).</li>
</ul>
<h3>Rounding</h3>
<ul>
<li><b>Decimal places (d.p.)</b> count digits after the point: 3.746 → 3.75 (2 d.p.).</li>
<li><b>Significant figures (s.f.)</b> start at the <b>first non-zero digit</b>: 0.00486 → 0.0049 (2 s.f.). Leading zeros are not significant.</li>
<li>2.40 has 3 s.f.; 2.4 has 2 s.f. Keep extra digits in the middle of a calculation and <b>round only at the end</b>.</li>
</ul>
<h3>Scientific notation (standard form)</h3>
<ul>
<li>Written <b>a × 10ⁿ</b>, where <b>1 ≤ a &lt; 10</b> and n is a whole number. 65,000 = 6.5 × 10⁴; 0.00042 = 4.2 × 10⁻⁴.</li>
<li>Large numbers have a positive power; small numbers have a negative power.</li>
<li><b>Multiplying:</b> multiply the numbers and add the powers. (2.5 × 10³) × (4 × 10⁻²) = 10 × 10¹ = <b>1 × 10²</b>. Always finish in correct standard form.</li>
</ul>
<p><b>Worked example:</b> 3/8 of a 240 mL solution is used on day 1 and 1/4 on day 2. The fraction used is 3/8 + 2/8 = 5/8, which is 5/8 × 240 = 150 mL, so <b>90 mL remains</b>.</p>`, figs:[]},

{id:"m-precision", subject:"maths", title:"Accuracy & precision", short:"Accuracy & precision", week:"Week 3", notes:`
<h3>The difference</h3>
<ul>
<li><b>Accuracy:</b> how close a result is to the accepted <b>reference value</b>.</li>
<li><b>Precision (repeatability):</b> how close <b>repeated</b> results are to each other. A narrow spread means good precision.</li>
<li>A set of results can be <b>precise but inaccurate</b> (clustered but shifted), or <b>accurate on average but imprecise</b> (centred but spread out).</li>
</ul>
${targets}
<h3>Types of error</h3>
<ul>
<li><b>Systematic error</b> shifts every result in the <b>same direction</b>, e.g. a balance that reads 0.5 g too high or has a wrong zero setting. It affects accuracy.</li>
<li><b>Random variation</b> makes results fluctuate from trial to trial, e.g. small differences when reading a meniscus. It affects precision.</li>
</ul>
<h3>Comparing sets of readings (reference = 10.0 mL)</h3>
<table><tr><th>Set</th><th>Readings (mL)</th><th>Mean</th><th>Range</th><th>Verdict</th></tr>
<tr><td>A</td><td>9.9, 10.0, 10.1</td><td>10.0</td><td>0.2</td><td>Accurate and precise</td></tr>
<tr><td>B</td><td>9.0, 9.1, 9.2</td><td>9.1</td><td>0.2</td><td>Precise, shifted low</td></tr>
<tr><td>C</td><td>9.2, 10.0, 10.8</td><td>10.0</td><td>1.6</td><td>Accurate mean, imprecise</td></tr>
<tr><td>D</td><td>8.0, 9.1, 10.2</td><td>9.1</td><td>2.2</td><td>Biased and imprecise</td></tr></table>
<p><b>Mean</b> = sum ÷ number of readings. <b>Range</b> = largest − smallest; a smaller range means more consistent results.</p>
<h3>Quantifying error</h3>
<ul>
<li><b>Absolute error</b> = |measured − reference|. It has the same unit as the measurement.</li>
<li><b>Percentage error</b> = (absolute error ÷ reference) × 100%.</li>
<li>Example: the reference is 50.0 g and the reading is 49.2 g. Absolute error = 0.8 g (low); percentage error = 0.8 ÷ 50.0 × 100 = <b>1.6%</b>.</li>
</ul>
<h3>Digits are not accuracy</h3>
<ul>
<li><b>Resolution</b> is the smallest increment an instrument shows (e.g. 0.1 g). It limits the detail you can report, but doesn't prove accuracy. A poorly calibrated device can still show lots of digits.</li>
<li>3.700 mL has <b>4 s.f.</b>, but extra digits don't make a measurement more accurate. Converting 2.5 cm to 25 mm doesn't make it more precise either.</li>
<li><b>Improve measurements</b> by calibrating against a reference, using the same method each time, repeating and checking the spread, and recording units and conditions.</li>
</ul>`, figs:[]},

{id:"m-units", subject:"maths", title:"Units & unit conversions", short:"Units", week:"Week 4", notes:`
<h3>A number needs a unit</h3>
<p>"25" means nothing on its own; "25 mL" is a measurement. <b>Always write the unit with your final answer.</b></p>
<h3>The seven SI base units</h3>
<table><tr><th>Quantity</th><th>Unit</th><th>Symbol</th></tr>
<tr><td>Length</td><td>metre</td><td>m</td></tr><tr><td>Mass</td><td>kilogram</td><td>kg</td></tr><tr><td>Time</td><td>second</td><td>s</td></tr><tr><td>Temperature</td><td>kelvin</td><td>K</td></tr><tr><td>Amount of substance</td><td>mole</td><td>mol</td></tr><tr><td>Electric current</td><td>ampere</td><td>A</td></tr><tr><td>Luminous intensity</td><td>candela</td><td>cd</td></tr></table>
<p>The litre (L) is accepted for use with SI. Case matters: m = metre or milli, but M = mega.</p>
<h3>Metric prefixes</h3>
<table><tr><th>Prefix</th><th>Factor</th><th>Example</th></tr>
<tr><td>kilo (k)</td><td>10³ = 1,000</td><td>2 km = 2,000 m</td></tr>
<tr><td>centi (c)</td><td>10⁻² = 1/100</td><td>3 cm = 0.03 m</td></tr>
<tr><td>milli (m)</td><td>10⁻³ = 1/1,000</td><td>8 mg = 0.008 g</td></tr>
<tr><td>micro (µ)</td><td>10⁻⁶</td><td>4 µL = 4 × 10⁻⁶ L</td></tr>
<tr><td>nano (n)</td><td>10⁻⁹</td><td>5 nm = 5 × 10⁻⁹ m</td></tr></table>
<p><b>Intuitive rule:</b> going to a <b>smaller unit</b> means the number gets <b>bigger</b> (1 L = 1,000 mL). Going to a <b>larger unit</b> means the number gets <b>smaller</b> (750 mg = 0.750 g).</p>
<h3>Unit cancellation (dimensional analysis)</h3>
<ol><li>Write the value <b>with</b> its unit.</li><li>Write a known equivalence (e.g. 1 g = 1,000 mg).</li><li>Multiply by the fraction that puts the old unit on the <b>opposite</b> side, so it cancels.</li><li>Calculate, then check the unit and the size of the answer.</li></ol>
<ul>
<li>3,500 mg × (1 g / 1,000 mg) = <b>3.5 g</b></li>
<li>2.5 h × 60 min/h × 60 s/min = <b>9,000 s</b></li>
<li>72 km/h × (1,000 m / 1 km) × (1 h / 3,600 s) = <b>20 m/s</b></li>
</ul>
<h3>Area and volume: square or cube the factor</h3>
<ul>
<li>1 m = 100 cm, so <b>1 m² = 100² = 10,000 cm²</b> (not 100), and <b>1 m³ = 100³ = 1,000,000 cm³</b>.</li>
<li>2.5 cm² × (10 mm/1 cm)² = <b>250 mm²</b>; 0.8 cm³ × (10 mm/1 cm)³ = <b>800 mm³</b>.</li>
<li><b>1 mL = 1 cm³</b> exactly; 1 L = 1,000 cm³; <b>1 m³ = 1,000 L</b>. So 0.002 m³ = 2 L = 2,000 mL.</li>
</ul>
<h3>Quick reference</h3>
<table><tr><th>Length</th><th>Mass</th><th>Volume</th><th>Time</th></tr>
<tr><td>1 m = 100 cm</td><td>1 kg = 1,000 g</td><td>1 L = 1,000 mL</td><td>1 min = 60 s</td></tr>
<tr><td>1 cm = 10 mm</td><td>1 g = 1,000 mg</td><td>1 mL = 1,000 µL</td><td>1 h = 3,600 s</td></tr>
<tr><td>1 mm = 1,000 µm</td><td>1 mg = 1,000 µg</td><td>1 mL = 1 cm³</td><td>1 day = 24 h</td></tr></table>
<h3>Common errors</h3>
<ul>
<li>1 mg = 10⁻⁶ kg, <i>not</i> 0.001 kg. Use grams as the bridge.</li>
<li>1 min = 60 s, not 100 s. Time isn't decimal.</li>
<li>1 mL = 1 cm³ = 1,000 mm³, not 1 mm³.</li>
<li>Temperature: K = °C + 273.15. It's an addition, not a multiplication.</li>
<li><b>Rates</b> keep both units: 90 m in 30 s = 3 m/s; 12 mg in 3 mL = 4 mg/mL; 15 mL/min = 0.25 mL/s.</li>
</ul>
<p><b>Five checks:</b> What is being measured? What are the start and target units? Does the unwanted unit cancel? Do I need to square or cube the factor? Is the size of the answer sensible?</p>`, figs:[]},

{id:"m-ratios", subject:"maths", title:"Ratios, proportion & percentages", short:"Ratios & %", week:"Week 5", notes:`
<h3>Ratios compare parts</h3>
<ul>
<li>2 red : 3 blue is written <b>2:3</b>. <b>Order matters</b>: blue to red is 3:2.</li>
<li><b>Part : part is not part : whole.</b> If red:blue = 2:3, red is 2/5 of the total (40%), not 2/3.</li>
<li><b>Equivalent ratios:</b> multiply or divide both parts by the same number: 6:9 = 2:3; 8:12 = 2:3.</li>
<li>A syrup:water ratio of 1:4 means syrup is 1 of 5 parts, so it makes up <b>20%</b> of the mixture, not 25%.</li>
</ul>
<h3>Sharing in a ratio</h3>
<ol><li>Count the total parts.</li><li>Find the value of one part (total ÷ number of parts).</li><li>Multiply by each share.</li><li>Check that the shares add up to the total.</li></ol>
<p>480 g in the ratio 3:5 → 8 parts → 60 g per part → <b>180 g and 300 g</b>. 360 g in the ratio 1:2:3 → 6 parts → <b>60, 120, 180 g</b>.</p>
<h3>Direct proportion</h3>
<ul>
<li>Both quantities scale by the same factor. The graph is a <b>straight line through zero</b> (y = kx).</li>
<li><b>Unitary method:</b> find one, then find many. If 3 trays need 450 g, 1 tray needs 150 g, so 8 trays need <b>1,200 g</b>.</li>
<li><b>Scale factor method:</b> 250 g makes 5 portions; for 8 portions, 8 ÷ 5 = 1.6, and 250 × 1.6 = 400 g.</li>
<li>To solve a proportion such as 3:5 = x:40: 5 × 8 = 40, so x = 3 × 8 = <b>24</b>.</li>
<li><b>Trap:</b> a fixed starting cost breaks direct proportion. For example, 2 km costs £7 but 4 km costs £11, so the ratio isn't constant.</li>
<li><b>Inverse proportion</b> (extension): one goes up as the other goes down. 6 workers × 4 h = 12 workers × 2 h.</li>
</ul>
<h3>Percentages: "out of 100"</h3>
<table><tr><th>Fraction</th><th>Decimal</th><th>Percentage</th></tr>
<tr><td>1/2</td><td>0.5</td><td>50%</td></tr><tr><td>1/4</td><td>0.25</td><td>25%</td></tr><tr><td>3/4</td><td>0.75</td><td>75%</td></tr><tr><td>1/10</td><td>0.1</td><td>10%</td></tr><tr><td>1/8</td><td>0.125</td><td>12.5%</td></tr><tr><td>2/5</td><td>0.4</td><td>40%</td></tr></table>
<ul>
<li>Decimal → % multiply by 100 (0.085 = 8.5%). % → decimal divide by 100.</li>
<li><b>Percentage of an amount:</b> 15% of 240 = 0.15 × 240 = <b>36</b>. Mental method: 10% + 5% = 24 + 12 = 36.</li>
<li><b>One quantity as a percentage of another:</b> 18 out of 24 = 18 ÷ 24 × 100 = <b>75%</b>.</li>
<li><b>Increase by a percentage:</b> 80 mL + 15% = 80 + 12 = 92 mL.</li>
</ul>
<h3>Percentage change: divide by the ORIGINAL</h3>
<p><b>% change = (new − original) ÷ original × 100%</b></p>
<ul>
<li>60 → 72: 12 ÷ 60 = <b>+20%</b> (not 12/72). 50 → 42: 8 ÷ 50 = <b>−16%</b>.</li>
<li>Going up 25% then down 25% doesn't get you back: 80 → 100 is +25%, but 100 → 80 is −20%.</li>
<li><b>Percentage points vs percentage change:</b> 20% → 30% is +10 <b>percentage points</b>, but a +50% <b>relative</b> increase.</li>
</ul>`, figs:[]},

{id:"m-logs", subject:"maths", title:"Logarithms & pH", short:"Logarithms", week:"Week 6", notes:`
<h3>Powers of ten</h3>
<table><tr><th>Power</th><th>Value</th><th>log₁₀</th></tr>
<tr><td>10³</td><td>1,000</td><td>3</td></tr><tr><td>10²</td><td>100</td><td>2</td></tr><tr><td>10¹</td><td>10</td><td>1</td></tr><tr><td>10⁰</td><td>1</td><td>0</td></tr><tr><td>10⁻¹</td><td>0.1</td><td>−1</td></tr><tr><td>10⁻²</td><td>0.01</td><td>−2</td></tr><tr><td>10⁻³</td><td>0.001</td><td>−3</td></tr></table>
<p>A negative power is a reciprocal: 10⁻³ = 1/1,000. Any non-zero number to the power 0 is 1.</p>
<h3>A logarithm is an exponent</h3>
<ul>
<li><b>log_b(a) = c means bᶜ = a.</b> A log answers "what power do I need?". So 10³ = 1,000 ⇔ log₁₀(1,000) = 3.</li>
<li>Other bases work the same way: 2⁴ = 16 ⇔ log₂(16) = 4; 3⁴ = 81 ⇔ log₃(81) = 4.</li>
<li>If 0 &lt; x &lt; 1, log₁₀(x) is <b>negative</b>: log₁₀(0.01) = −2.</li>
<li><b>log of 0 or of a negative number is not defined</b>, because 10ˣ can never be 0 or negative.</li>
</ul>
<h3>Estimate first</h3>
<p>100 &lt; 500 &lt; 1,000, so 2 &lt; log₁₀(500) &lt; 3 (the calculator gives ≈ 2.699). Similarly, log₁₀(0.2) ≈ −0.699, which lies between −1 and 0.</p>
<p><b>Calculator keys:</b> <code>log</code> = base 10; <code>ln</code> = base e (≈ 2.718); <code>10ˣ</code> undoes log; <code>eˣ</code> undoes ln.</p>
<h3>Three rules (same base, positive arguments)</h3>
<table><tr><th>Rule</th><th>Formula</th><th>Example</th></tr>
<tr><td>Product</td><td>log(xy) = log x + log y</td><td>log 2 + log 5 = log 10 = 1</td></tr>
<tr><td>Quotient</td><td>log(x/y) = log x − log y</td><td>log 50 − log 5 = log 10 = 1</td></tr>
<tr><td>Power</td><td>log(xⁿ) = n log x</td><td>log(100³) = 3 × 2 = 6</td></tr></table>
<p><b>No addition rule:</b> log(10 + 100) = log 110 ≈ 2.041, which is not 1 + 2 = 3.</p>
<h3>Solving 10ˣ = number</h3>
<p>Take log₁₀ of both sides: 10ˣ = 300 gives x = log₁₀(300) ≈ <b>2.477</b> (check: it's between 2 and 3). 10ˣ = 0.05 gives x ≈ <b>−1.301</b>, which is negative because 0.05 &lt; 1.</p>
<h3>pH: a log scale in biology</h3>
<ul>
<li><b>pH ≈ −log₁₀[H⁺]</b>, with [H⁺] in mol/L. This is an introductory approximation; formal pH uses activity.</li>
<li>[H⁺] = 10⁻⁴ mol/L gives pH = −(−4) = <b>4</b>.</li>
<li><b>Lower pH means more H⁺</b> (more acidic). Each pH unit is a <b>10× change</b>, so pH 3 has <b>100×</b> the H⁺ of pH 5.</li>
</ul>
<h3>Growth by doubling</h3>
<p>N = 50 × 2ᵗ. After 3 doublings, N = 50 × 8 = 400 cells. Logs let you work backwards to find t.</p>`, figs:[]},

{id:"m-solutions", subject:"maths", title:"Moles, molarity & dilutions", short:"Solutions & dilutions", week:"Week 7", notes:`
<h3>Moles</h3>
<ul>
<li>A <b>mole</b> is a counting unit for particles: 6.022 × 10²³ of them, like a very large "dozen".</li>
<li><b>Molar mass M</b> (g/mol) is the mass of one mole (e.g. NaCl = 58.44 g/mol; glucose = 180.16 g/mol).</li>
<li><b>n = m ÷ M</b> and <b>m = n × M</b>. Example: 5.844 g ÷ 58.44 g/mol = 0.100 mol. The grams cancel, leaving mol.</li>
</ul>
<h3>Molarity (concentration)</h3>
<ul>
<li><b>c = n ÷ V</b>, with V in <b>litres</b> and the answer in mol/L (also written M). <b>Convert mL to L first.</b></li>
<li>0.050 mol in 250 mL: 0.050 ÷ 0.250 = <b>0.20 M</b>. Don't divide by 250.</li>
<li>V is the <b>final solution volume</b>, not the volume of water added.</li>
<li>Also n = c × V.</li>
</ul>
<h3>Making a solution from a solid: m = c × V × M</h3>
<p>For 250 mL of 0.10 M glucose: 0.250 L × 0.10 = 0.025 mol, and 0.025 × 180.16 = <b>4.504 g</b>. Weigh it, dissolve it in less than 250 mL, then <b>make up to</b> 250 mL.</p>
<h3>Other concentration units</h3>
<ul>
<li><b>g/L</b>: 8 g in 400 mL = 8 ÷ 0.400 = 20 g/L.</li>
<li><b>% (w/v)</b> = grams per 100 mL: 5 g in 100 mL = 5%. A 3% solution needs 6 g for 200 mL.</li>
</ul>
<h3>Dilution: c₁V₁ = c₂V₂</h3>
<ul>
<li>The amount of solute stays the same; the volume goes up, so the concentration goes down.</li>
<li>c₁ = stock concentration, V₁ = volume of stock used, c₂ = final concentration, V₂ = <b>final total volume</b>.</li>
<li>Example: 100 mL of 0.50 M from 2.0 M stock: V₁ = 0.50 × 100 ÷ 2.0 = <b>25 mL</b> of stock, <b>made up to</b> 100 mL.</li>
<li>"Make up to 100 mL" is <b>not</b> the same as "add 100 mL". A 1-in-10 dilution is 1 mL stock + 9 mL diluent (10 mL total), not + 10 mL.</li>
<li><b>Dilution factor</b> DF = c₁/c₂ = V₂/V₁. Going from 0.80 M to 0.20 M is a 4-fold dilution.</li>
</ul>
<h3>Serial dilutions</h3>
${serial}
<ul>
<li>Each tube is made from the one before it. <b>Dilution factors multiply</b>: two tenfold steps give 10 × 10 = 100 (not 20); three give 10³ = 1,000.</li>
<li>0.80 M after two fivefold dilutions: 0.80 ÷ 25 = <b>0.032 M</b>.</li>
<li>1.0 M diluted tenfold three times = 0.001 M, and log₁₀(0.001) = −3. This links weeks 6 and 7.</li>
</ul>
<p><b>Memory prompt:</b> moles = mass ÷ molar mass. Molarity = moles ÷ litres. Dilution: c₁V₁ = c₂V₂.</p>`, figs:[]},

{id:"m-measure", subject:"maths", title:"Measurements in biology", short:"Bio measurements", week:"Week 8", notes:`
<h3>Small units</h3>
<ul>
<li><b>1 mm = 1,000 µm</b> and <b>1 µm = 1,000 nm</b>; <b>1 mL = 1,000 µL</b>.</li>
<li>0.25 mm × (1,000 µm/1 mm) = 250 µm; 8 µm = 0.008 mm; 2,500 nm = 2.5 µm; 0.04 mL = 40 µL.</li>
</ul>
<h3>Magnification</h3>
<p><b>Magnification = image size ÷ actual size</b>, with both in the <b>same unit</b>. Magnification has no unit; it is written as ×.</p>
<ul>
<li>Rearranged: actual size = image size ÷ magnification; image size = actual size × magnification.</li>
<li>Image 20 mm, actual 40 µm = 0.040 mm: 20 ÷ 0.040 = <b>500×</b>.</li>
<li>Image 1.2 cm = 12 mm, actual 15 µm = 0.015 mm: <b>800×</b>.</li>
<li>Image 36 mm at 600×: actual = 0.06 mm = <b>60 µm</b>.</li>
<li><b>Common error:</b> putting it upside down (actual ÷ image). The image must be on top.</li>
</ul>
<h3>Counting cells: concentration = count ÷ volume</h3>
<ul>
<li>120 cells in 0.04 mL = <b>3,000 cells/mL</b>.</li>
<li><b>After a dilution, multiply back up:</b> original = diluted concentration × dilution factor. If that sample had been diluted tenfold, the original was ≈ 30,000 cells/mL.</li>
<li>Number of cells in a volume = concentration × volume: 6 × 10⁵ cells/mL × 0.050 mL (50 µL) = 30,000 cells.</li>
<li><b>Plate counts:</b> 160 colonies from 0.2 mL of a 1-in-100 dilution: 160 ÷ 0.2 = 800 CFU/mL, × 100 = <b>80,000 CFU/mL</b>. CFU (colony-forming units) aren't necessarily individual cells.</li>
</ul>
<h3>Physiology & pharmacology arithmetic (fictional practice numbers)</h3>
<ul>
<li><b>Amount = rate (mg/kg) × body mass (kg)</b>: 2 mg/kg × 60 kg = 120 mg. The kg cancels.</li>
<li><b>Volume = amount ÷ concentration</b>: 120 mg ÷ 20 mg/mL = 6 mL. The mg cancels.</li>
<li><b>Concentration</b> = amount ÷ volume: 45 mg in 3 mL = 15 mg/mL.</li>
</ul>
<h3>Rates</h3>
<p>Rate = quantity ÷ time: 240 mL over 4 h = <b>60 mL/h</b>. Always state the time unit (per minute or per hour).</p>`, figs:[]}
];

const MQ = [
// numbers
{t:"m-numbers",q:"Calculate 7 + 3 × 4.",o:["19","40","28","14"],a:0,e:"BIDMAS: multiply first: 3 × 4 = 12, then 7 + 12 = 19."},
{t:"m-numbers",q:"Calculate 24 ÷ 6 × 2.",o:["8","2","12","4"],a:0,e:"Division and multiplication have equal priority, so work left to right: 24 ÷ 6 = 4, then × 2 = 8."},
{t:"m-numbers",q:"Which of these is a prime number?",o:["23","21","1","27"],a:0,e:"23 has only the factors 1 and 23. 21 = 3 × 7, 27 = 3³, and 1 is not prime."},
{t:"m-numbers",q:"What is the highest common factor of 18 and 30?",o:["6","3","9","90"],a:0,e:"18 = 2 × 3 × 3 and 30 = 2 × 3 × 5. They share 2 × 3 = 6, so 18/30 simplifies to 3/5."},
{t:"m-numbers",q:"Calculate 1/3 + 1/4.",o:["7/12","2/7","1/7","2/12"],a:0,e:"Use twelfths: 4/12 + 3/12 = 7/12. Never add the denominators."},
{t:"m-numbers",q:"Calculate 5/6 − 1/3.",o:["1/2","4/3","4/6 = 2/3","1/6"],a:0,e:"1/3 = 2/6, so 5/6 − 2/6 = 3/6 = 1/2."},
{t:"m-numbers",q:"Calculate 3/4 ÷ 1/2.",o:["3/2 (1.5)","3/8","2/3","6"],a:0,e:"Multiply by the reciprocal: 3/4 × 2/1 = 6/4 = 3/2."},
{t:"m-numbers",q:"Find 3/8 of 160 mL.",o:["60 mL","48 mL","53.3 mL","120 mL"],a:0,e:"One eighth = 160 ÷ 8 = 20 mL, and 3 × 20 = 60 mL."},
{t:"m-numbers",q:"Which is greater, 2/3 or 3/5?",o:["2/3 (10/15 > 9/15)","3/5","They are equal","Can't compare without a calculator"],a:0,e:"Convert to fifteenths: 2/3 = 10/15 and 3/5 = 9/15."},
{t:"m-numbers",q:"Round 0.004862 to 2 significant figures.",o:["0.0049","0.00","0.0048","0.005"],a:0,e:"Significant figures start at the first non-zero digit (4). The next digit is 6, so round 48 up to 49."},
{t:"m-numbers",q:"Round 6.4872 to 3 significant figures.",o:["6.49","6.48","6.487","6.5"],a:0,e:"6.48|72: the next digit is 7, so round up to 6.49."},
{t:"m-numbers",q:"Write 0.00056 in standard form.",o:["5.6 × 10⁻⁴","5.6 × 10⁴","56 × 10⁻⁵","0.56 × 10⁻³"],a:0,e:"Move the point 4 places right to get 5.6 (between 1 and 10). A small number has a negative power."},
{t:"m-numbers",q:"Evaluate (2 × 10³) × (3 × 10⁻²) in standard form.",o:["6 × 10¹","6 × 10⁵","5 × 10¹","6 × 10⁻⁶"],a:0,e:"2 × 3 = 6, and 10³ × 10⁻² = 10¹. That makes 60."},
{t:"m-numbers",q:"0.75 L is shared equally among 6 containers. How much is in each?",o:["125 mL","12.5 mL","0.45 L","450 mL"],a:0,e:"0.75 ÷ 6 = 0.125 L, and × 1,000 = 125 mL."},
{t:"m-numbers",q:"How many significant figures does 2.40 have?",o:["3","2","1","4"],a:0,e:"The trailing zero after the decimal point is significant: 2, 4 and 0."},
// precision
{t:"m-precision",q:"Precision describes:",o:["How close repeated measurements are to each other","How close a result is to the reference value","How many decimal places are written","The size of the instrument"],a:0,e:"Precision means repeatability (a small spread). Accuracy means closeness to the reference."},
{t:"m-precision",q:"Reference = 10.0 mL. Readings: 9.0, 9.1, 9.2 mL. These are:",o:["Precise but not accurate","Accurate but not precise","Accurate and precise","Neither"],a:0,e:"The range is only 0.2 (consistent), but the mean of 9.1 is shifted low from 10.0."},
{t:"m-precision",q:"Readings 9.2, 10.0, 10.8 mL (reference 10.0 mL) are:",o:["Accurate on average but imprecise","Precise and accurate","Precise but biased","Biased and imprecise"],a:0,e:"The mean is 10.0, matching the reference, but the range is 1.6, which is a large spread."},
{t:"m-precision",q:"A balance consistently reads 0.5 g too high. This is a:",o:["Systematic error","Random variation","Resolution","Percentage error"],a:0,e:"A systematic error shifts all readings in the same direction and affects accuracy."},
{t:"m-precision",q:"Reference 50.0 g, measured 49.2 g. What is the percentage error?",o:["1.6%","0.8%","1.63%","16%"],a:0,e:"Absolute error = 0.8 g. Then 0.8 ÷ 50.0 × 100 = 1.6%."},
{t:"m-precision",q:"Reference 20.0 g, measured 19.6 g. What is the absolute error?",o:["0.4 g","2%","−0.4%","19.6 g"],a:0,e:"|19.6 − 20.0| = 0.4 g. Absolute error has the measurement's unit; the percentage error is 2%."},
{t:"m-precision",q:"Reference 25.0 mm, measured 24.5 mm. What is the percentage error?",o:["2.0%","0.5%","2.04%","5%"],a:0,e:"0.5 ÷ 25.0 × 100 = 2.0%. Divide by the reference value."},
{t:"m-precision",q:"A result is written as 4.500 g. Which statement is TRUE?",o:["It has 4 significant figures, but that alone doesn't prove it is accurate","It must be accurate because it has many digits","It has 2 significant figures","Trailing zeros are never significant"],a:0,e:"Significant figures show the reported detail, not whether the instrument was calibrated correctly."},
{t:"m-precision",q:"What is the range of 15.2, 15.2 and 15.3 g?",o:["0.1 g","15.23 g","0.2 g","45.7 g"],a:0,e:"Range = largest − smallest = 15.3 − 15.2 = 0.1 g. A small range shows good repeatability."},
{t:"m-precision",q:"Which is an example of random variation?",o:["Slight differences in reading the meniscus each time","A scale with the wrong zero setting","A ruler that is printed 2% too long","A thermometer that always reads 1 °C high"],a:0,e:"Random variation changes unpredictably between trials. The other options are systematic errors."},
// units
{t:"m-units",q:"Convert 0.6 L to mL.",o:["600 mL","6 mL","0.0006 mL","60 mL"],a:0,e:"0.6 × 1,000 = 600 mL. A smaller unit means a bigger number."},
{t:"m-units",q:"Convert 3,600 µL to mL.",o:["3.6 mL","360 mL","0.0036 mL","36 mL"],a:0,e:"1 mL = 1,000 µL, so 3,600 ÷ 1,000 = 3.6 mL."},
{t:"m-units",q:"Convert 485 mg to g.",o:["0.485 g","4.85 g","485,000 g","48.5 g"],a:0,e:"485 mg × (1 g / 1,000 mg) = 0.485 g."},
{t:"m-units",q:"Convert 2.5 h to seconds.",o:["9,000 s","150 s","250 s","15,000 s"],a:0,e:"2.5 × 60 = 150 min, and 150 × 60 = 9,000 s."},
{t:"m-units",q:"How many cm² are in 1 m²?",o:["10,000 cm²","100 cm²","1,000 cm²","1,000,000 cm²"],a:0,e:"(100 cm)² = 10,000 cm². The conversion factor must be squared."},
{t:"m-units",q:"Convert 2.5 cm² to mm².",o:["250 mm²","25 mm²","2,500 mm²","0.25 mm²"],a:0,e:"2.5 × (10)² = 2.5 × 100 = 250 mm²."},
{t:"m-units",q:"Convert 0.002 m³ to litres.",o:["2 L","0.2 L","20 L","2,000 L"],a:0,e:"1 m³ = 1,000 L, so 0.002 × 1,000 = 2 L (= 2,000 mL)."},
{t:"m-units",q:"Convert 350 cm³ to litres.",o:["0.35 L","3.5 L","350 L","0.035 L"],a:0,e:"350 cm³ = 350 mL (1 cm³ = 1 mL), and 350 ÷ 1,000 = 0.35 L."},
{t:"m-units",q:"Convert 72 km/h to m/s.",o:["20 m/s","72,000 m/s","1.2 m/s","259.2 m/s"],a:0,e:"72 × 1,000 ÷ 3,600 = 20 m/s. Both km and h cancel."},
{t:"m-units",q:"Convert 15 mL/min to mL/s.",o:["0.25 mL/s","900 mL/s","0.15 mL/s","4 mL/s"],a:0,e:"15 ÷ 60 = 0.25 mL/s."},
{t:"m-units",q:"1 mg is equal to:",o:["10⁻⁶ kg","10⁻³ kg","10⁻⁹ kg","10³ kg"],a:0,e:"1 mg = 10⁻³ g and 1 g = 10⁻³ kg, so 1 mg = 10⁻⁶ kg. Use grams as the bridge."},
{t:"m-units",q:"Which is the SI base unit of mass?",o:["kilogram (kg)","gram (g)","milligram (mg)","newton (N)"],a:0,e:"The kilogram is the SI base unit, even though labs often use g and mg."},
{t:"m-units",q:"Which reaction time is shorter, 340 ms or 0.38 s, and by how much?",o:["340 ms, shorter by 40 ms","0.38 s, shorter by 40 ms","340 ms, shorter by 0.04 ms","They are equal"],a:0,e:"0.38 s = 380 ms, and 380 − 340 = 40 ms."},
{t:"m-units",q:"A runner covers 1.8 km in 9 minutes. What is the average speed?",o:["3.33 m/s","0.2 km/s","200 m/s","12 m/s"],a:0,e:"1,800 m ÷ 540 s = 3.33… m/s."},
{t:"m-units",q:"Density: 27 g in 9 mL. What is this in kg/L?",o:["3 kg/L","0.003 kg/L","3,000 kg/L","0.3 kg/L"],a:0,e:"27 ÷ 9 = 3 g/mL. 1 g/mL = 1 kg/L (× 1,000 ÷ 1,000), so the answer is 3 kg/L."},
// ratios
{t:"m-ratios",q:"Simplify 8:12.",o:["2:3","4:6","3:2","1:1.5"],a:0,e:"Divide both parts by the HCF, 4."},
{t:"m-ratios",q:"Share 50 mL in the ratio 2:3.",o:["20 mL and 30 mL","25 mL and 25 mL","10 mL and 40 mL","2 mL and 3 mL"],a:0,e:"5 parts → 10 mL each → 2 × 10 = 20 and 3 × 10 = 30."},
{t:"m-ratios",q:"A:B = 2:3. What fraction of the whole mixture is A?",o:["2/5","2/3","3/5","1/2"],a:0,e:"Part-to-whole: 2 ÷ (2 + 3) = 2/5. The ratio 2:3 compares part to part."},
{t:"m-ratios",q:"Divide 480 g in the ratio 3:5.",o:["180 g and 300 g","160 g and 320 g","96 g and 384 g","288 g and 192 g"],a:0,e:"8 parts → 60 g each → 180 g and 300 g. Check: 180 + 300 = 480."},
{t:"m-ratios",q:"Divide 360 g in the ratio 1:2:3.",o:["60, 120, 180 g","120, 120, 120 g","36, 72, 108 g","60, 180, 120 g"],a:0,e:"6 parts → 60 g each."},
{t:"m-ratios",q:"Syrup:water = 1:4. What percentage of the mixture is syrup?",o:["20%","25%","40%","80%"],a:0,e:"Syrup is 1 of 5 parts: 1/5 = 20%. It's not a quarter."},
{t:"m-ratios",q:"3 trays use 450 g of flour. How much is needed for 8 trays?",o:["1,200 g","1,350 g","600 g","3,600 g"],a:0,e:"Unitary method: 450 ÷ 3 = 150 g per tray, and × 8 = 1,200 g (1.2 kg)."},
{t:"m-ratios",q:"Solve 3:5 = x:40.",o:["x = 24","x = 38","x = 15","x = 120"],a:0,e:"5 × 8 = 40, so x = 3 × 8 = 24."},
{t:"m-ratios",q:"What is 15% of 240?",o:["36","16","24","360"],a:0,e:"0.15 × 240 = 36 (10% = 24, plus 5% = 12)."},
{t:"m-ratios",q:"18 out of 60 samples are labelled. What percentage is that?",o:["30%","18%","42%","3.3%"],a:0,e:"18 ÷ 60 × 100 = 30%."},
{t:"m-ratios",q:"A value rises from 60 to 72. What is the percentage increase?",o:["20%","16.7%","12%","120%"],a:0,e:"Change 12 ÷ ORIGINAL 60 × 100 = 20%. Dividing by 72 is the classic mistake."},
{t:"m-ratios",q:"A value falls from 125 to 100. What is the percentage change?",o:["−20%","−25%","−125%","+25%"],a:0,e:"(100 − 125) ÷ 125 × 100 = −20%."},
{t:"m-ratios",q:"Increase 80 mL by 15%.",o:["92 mL","95 mL","12 mL","68 mL"],a:0,e:"15% of 80 = 12, and 80 + 12 = 92 mL."},
{t:"m-ratios",q:"A rate goes from 20% to 30%. Which statement is correct?",o:["+10 percentage points, which is a 50% relative increase","+10% relative increase","+50 percentage points","+30% relative increase"],a:0,e:"30 − 20 = 10 percentage points, and 10 ÷ 20 = 50% relative change."},
{t:"m-ratios",q:"2 km costs £7 and 4 km costs £11. Is this direct proportion?",o:["No: the ratio isn't constant (there's a fixed charge)","Yes, both go up","Yes, the cost doubles","No, it's inverse proportion"],a:0,e:"In direct proportion, doubling the distance would double the cost (£14), and zero input would give zero output."},
{t:"m-ratios",q:"A time falls from 0.40 s to 0.34 s. What is the percentage decrease?",o:["15%","6%","17.6%","0.06%"],a:0,e:"0.06 ÷ 0.40 × 100 = 15%."},
// logs
{t:"m-logs",q:"What is log₁₀(1,000)?",o:["3","100","1,000","0.001"],a:0,e:"10³ = 1,000. A log gives the exponent."},
{t:"m-logs",q:"What is log₁₀(0.01)?",o:["−2","2","0.01","−0.01"],a:0,e:"10⁻² = 0.01. Numbers between 0 and 1 have negative logs."},
{t:"m-logs",q:"Write 10⁴ = 10,000 in logarithmic form.",o:["log₁₀(10,000) = 4","log₄(10,000) = 10","log₁₀(4) = 10,000","log₁₀(10) = 4"],a:0,e:"log_b(a) = c means bᶜ = a. Here b = 10, c = 4 and a = 10,000."},
{t:"m-logs",q:"What is log₂(32)?",o:["5","16","4","6"],a:0,e:"2⁵ = 32."},
{t:"m-logs",q:"log₁₀(500) lies between:",o:["2 and 3","5 and 6","50 and 100","0 and 1"],a:0,e:"100 < 500 < 1,000, so the exponent is between 2 and 3 (≈ 2.699)."},
{t:"m-logs",q:"What is log₁₀(1)?",o:["0","1","10","Undefined"],a:0,e:"10⁰ = 1."},
{t:"m-logs",q:"Is log₁₀(0) defined (in real numbers)?",o:["No: 10ˣ can never equal 0","Yes, it equals 0","Yes, it equals 1","Yes, it equals −1"],a:0,e:"No power of 10 gives 0 or a negative number, so the log is undefined."},
{t:"m-logs",q:"Simplify log₁₀(2) + log₁₀(5).",o:["1","log₁₀(7)","10","0.7"],a:0,e:"Product rule: log(2 × 5) = log(10) = 1."},
{t:"m-logs",q:"Simplify log₁₀(4) + log₁₀(25).",o:["2","log₁₀(29)","100","1"],a:0,e:"log(4 × 25) = log(100) = 2."},
{t:"m-logs",q:"Simplify log₁₀(80) − log₁₀(8).",o:["1","log₁₀(72)","10","0.1"],a:0,e:"Quotient rule: log(80/8) = log(10) = 1."},
{t:"m-logs",q:"What is log₁₀(100³)?",o:["6","3","300","5"],a:0,e:"Power rule: 3 × log(100) = 3 × 2 = 6. Check: 100³ = 10⁶."},
{t:"m-logs",q:"Which statement is FALSE?",o:["log(x + y) = log x + log y","log(xy) = log x + log y","log(x/y) = log x − log y","log(xⁿ) = n log x"],a:0,e:"There's no addition rule: log(10 + 100) ≈ 2.041, not 3."},
{t:"m-logs",q:"Solve 10ˣ = 300.",o:["x ≈ 2.477","x = 30","x ≈ 3.477","x = 2"],a:0,e:"x = log₁₀(300) ≈ 2.477, which is between 2 and 3, as expected."},
{t:"m-logs",q:"Solve 10ˣ = 0.05.",o:["x ≈ −1.301","x ≈ 1.301","x = −5","x ≈ −0.05"],a:0,e:"x = log₁₀(0.05) ≈ −1.301. It's negative because 0.05 < 1."},
{t:"m-logs",q:"[H⁺] = 10⁻⁴ mol/L. What is the pH?",o:["4","−4","10⁴","0.0001"],a:0,e:"pH ≈ −log₁₀(10⁻⁴) = −(−4) = 4."},
{t:"m-logs",q:"How many times more H⁺ does pH 3 have than pH 5?",o:["100 times","2 times","20 times","1,000 times"],a:0,e:"Each pH unit is ×10: 10⁻³ ÷ 10⁻⁵ = 10² = 100."},
{t:"m-logs",q:"Which has the greater hydrogen-ion concentration, pH 2 or pH 5?",o:["pH 2 (1,000 times more)","pH 5","They are the same","pH 5 (3 times more)"],a:0,e:"A lower pH means more H⁺, and 3 units means 10³ = 1,000×."},
{t:"m-logs",q:"50 cells double every hour. How many are there after 3 hours (N = 50 × 2ᵗ)?",o:["400","300","150","800"],a:0,e:"2³ = 8, and 50 × 8 = 400."},
// solutions
{t:"m-solutions",q:"How many moles are in 18 g of glucose (M = 180 g/mol)?",o:["0.10 mol","10 mol","3,240 mol","0.01 mol"],a:0,e:"n = m ÷ M = 18 ÷ 180 = 0.10 mol."},
{t:"m-solutions",q:"What is the mass of 0.25 mol of a substance with M = 40 g/mol?",o:["10 g","160 g","0.00625 g","40.25 g"],a:0,e:"m = n × M = 0.25 × 40 = 10 g."},
{t:"m-solutions",q:"What is the molarity of 0.050 mol in 250 mL of solution?",o:["0.20 M","0.0002 M","12.5 M","5.0 M"],a:0,e:"Convert to litres first: 0.050 ÷ 0.250 = 0.20 mol/L."},
{t:"m-solutions",q:"What is the molarity of 0.30 mol in 600 mL?",o:["0.50 M","0.0005 M","2.0 M","180 M"],a:0,e:"0.30 ÷ 0.600 = 0.50 M."},
{t:"m-solutions",q:"How much NaCl is needed for 100 mL of 0.20 M (M = 58.44 g/mol)?",o:["1.17 g","11.7 g","1,168.8 g","0.02 g"],a:0,e:"m = cVM = 0.20 × 0.100 × 58.44 = 1.1688 g ≈ 1.17 g."},
{t:"m-solutions",q:"How much is needed for 200 mL of a 0.050 M solution (M = 100 g/mol)?",o:["1.0 g","10 g","0.01 g","1,000 g"],a:0,e:"0.050 × 0.200 = 0.010 mol, and × 100 = 1.0 g."},
{t:"m-solutions",q:"How many grams of solute are in 200 mL of a 3% (w/v) solution?",o:["6 g","3 g","60 g","0.6 g"],a:0,e:"% (w/v) = g per 100 mL, so 3 g per 100 mL × 2 = 6 g."},
{t:"m-solutions",q:"8 g of solute in 400 mL. What is the concentration in g/L?",o:["20 g/L","3.2 g/L","0.02 g/L","50 g/L"],a:0,e:"8 g ÷ 0.400 L = 20 g/L."},
{t:"m-solutions",q:"From a 2.0 M stock, make 100 mL of 0.50 M. What volume of stock do you need?",o:["25 mL","400 mL","4 mL","75 mL"],a:0,e:"V₁ = c₂V₂ ÷ c₁ = 0.50 × 100 ÷ 2.0 = 25 mL, then make up to 100 mL."},
{t:"m-solutions",q:"From a 1.5 M stock, make 50 mL at 0.30 M. What volume of stock do you need?",o:["10 mL","250 mL","2.5 mL","40 mL"],a:0,e:"0.30 × 50 ÷ 1.5 = 10 mL."},
{t:"m-solutions",q:"10 mL of 1.0 M is made up to 100 mL. What is the final concentration?",o:["0.10 M","10 M","0.01 M","0.11 M"],a:0,e:"c₂ = c₁V₁ ÷ V₂ = 1.0 × 10 ÷ 100 = 0.10 M."},
{t:"m-solutions",q:"0.80 M is diluted to 0.20 M. What is the dilution factor?",o:["4-fold","0.25-fold","0.6-fold","16-fold"],a:0,e:"DF = c₁ ÷ c₂ = 0.80 ÷ 0.20 = 4."},
{t:"m-solutions",q:"0.80 M undergoes two successive fivefold dilutions. What is the final concentration?",o:["0.032 M","0.08 M","0.16 M","0.0064 M"],a:0,e:"The overall factor is 5 × 5 = 25, and 0.80 ÷ 25 = 0.032 M."},
{t:"m-solutions",q:"Three successive tenfold dilutions give an overall dilution of:",o:["1,000-fold","30-fold","300-fold","100-fold"],a:0,e:"Dilution factors multiply: 10 × 10 × 10 = 10³."},
{t:"m-solutions",svg:"serial-q",q:"In this serial dilution, what is the concentration in tube 3?",o:["0.002 M","0.02 M","0.0002 M","0.06 M"],a:0,e:"Divide by 10 three times: 2.0 → 0.2 → 0.02 → 0.002 M."},
{t:"m-solutions",q:"How do you make a 1-in-10 dilution correctly?",o:["1 mL stock + 9 mL diluent (10 mL total)","1 mL stock + 10 mL diluent","10 mL stock + 1 mL diluent","1 mL stock + 100 mL diluent"],a:0,e:"The FINAL volume must be 10× the stock volume. Adding 10 mL would give 11 mL in total, which is a 1-in-11 dilution."},
{t:"m-solutions",q:"The amount of solute stays the same but the volume doubles. What happens to the concentration?",o:["It halves","It doubles","It stays the same","It quarters"],a:0,e:"c = n ÷ V. With n constant and V × 2, c ÷ 2."},
// measure
{t:"m-measure",q:"Convert 0.45 mm to µm.",o:["450 µm","45 µm","4,500 µm","0.00045 µm"],a:0,e:"1 mm = 1,000 µm, so 0.45 × 1,000 = 450 µm."},
{t:"m-measure",q:"Convert 2,500 nm to µm.",o:["2.5 µm","25 µm","2,500,000 µm","0.25 µm"],a:0,e:"1 µm = 1,000 nm, so 2,500 ÷ 1,000 = 2.5 µm."},
{t:"m-measure",q:"An image is 12 mm long and the actual object is 0.03 mm. What is the magnification?",o:["400×","0.0025×","36×","40×"],a:0,e:"Image ÷ actual = 12 ÷ 0.03 = 400. Both are in mm, so the units cancel."},
{t:"m-measure",q:"An image is 18 mm and the actual cell is 60 µm. What is the magnification?",o:["300×","0.3×","3×","1,080×"],a:0,e:"Convert first: 60 µm = 0.060 mm. Then 18 ÷ 0.060 = 300×."},
{t:"m-measure",q:"A cell is 40 µm long at 500× magnification. What is the image length?",o:["20 mm","2 mm","0.08 mm","200 mm"],a:0,e:"40 × 500 = 20,000 µm = 20 mm."},
{t:"m-measure",q:"An image measures 36 mm at 600× magnification. What is the actual size?",o:["60 µm","6 µm","0.6 µm","21,600 µm"],a:0,e:"36 ÷ 600 = 0.06 mm = 60 µm."},
{t:"m-measure",q:"A student calculates magnification as 0.05 ÷ 30 for an object 0.05 mm wide shown as 30 mm. What went wrong?",o:["They reversed it; it should be 30 ÷ 0.05 = 600×","Nothing","They should add the values","They should convert to nm"],a:0,e:"Magnification = image ÷ actual, so the image size must be on top."},
{t:"m-measure",q:"150 cells are counted in 0.05 mL. What is the concentration?",o:["3,000 cells/mL","7.5 cells/mL","750 cells/mL","30,000 cells/mL"],a:0,e:"150 ÷ 0.05 = 3,000 cells/mL."},
{t:"m-measure",q:"A tenfold diluted sample has 120 cells in 0.03 mL. What was the original concentration?",o:["40,000 cells/mL","4,000 cells/mL","400 cells/mL","3.6 cells/mL"],a:0,e:"Diluted: 120 ÷ 0.03 = 4,000/mL. Multiply by 10 for the original: 40,000/mL."},
{t:"m-measure",q:"A culture has 6 × 10⁵ cells/mL. How many cells are in 50 µL?",o:["30,000","3 × 10⁷","12,000","300"],a:0,e:"50 µL = 0.050 mL, and 6 × 10⁵ × 0.050 = 3 × 10⁴ = 30,000."},
{t:"m-measure",q:"160 colonies grow from 0.2 mL of a 1-in-100 dilution. What is the CFU/mL in the original?",o:["80,000 CFU/mL","800 CFU/mL","3,200 CFU/mL","32 CFU/mL"],a:0,e:"160 ÷ 0.2 = 800 CFU/mL in the dilution, and × 100 = 80,000 CFU/mL."},
{t:"m-measure",q:"Fictional example: 0.5 mg/kg for an 80 kg body mass, from a 10 mg/mL solution. What volume is calculated?",o:["4 mL","40 mL","400 mL","0.4 mL"],a:0,e:"Amount = 0.5 × 80 = 40 mg, and volume = 40 ÷ 10 = 4 mL."},
{t:"m-measure",q:"45 mg of substance in 3 mL. What is the concentration?",o:["15 mg/mL","135 mg/mL","0.067 mg/mL","48 mg/mL"],a:0,e:"45 ÷ 3 = 15 mg/mL."},
{t:"m-measure",q:"A pump transfers 240 mL in 4 hours. What is the average rate?",o:["60 mL/h","960 mL/h","1 mL/min","4 mL/h"],a:0,e:"240 ÷ 4 = 60 mL/h. (That's also 1 mL/min, but always state the time unit you were asked for.)"}
];
// The 1 mL/min distractor is also numerically correct, so replace it to keep exactly one right answer.
MQ.find(q=>q.q.startsWith("A pump transfers")).o[2] = "6 mL/h";
MQ.find(q=>q.q.startsWith("A pump transfers")).e = "240 ÷ 4 = 60 mL/h. Always state the time unit.";

MT.forEach(t => window.TOPICS.push(t));
MQ.forEach(q => window.QUESTIONS.push(q));
window.SVGS["serial-q"] = `<svg viewBox="0 0 440 120" role="img" aria-label="Serial dilution: stock 2.0 M, then three tubes each diluted tenfold, labelled tube 1, 2 and 3">${["Stock 2.0 M","Tube 1","Tube 2","Tube 3"].map((c,i)=>{const x=40+i*115;return `<g><rect x="${x}" y="15" width="34" height="70" rx="12" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="${x+2}" y="40" width="30" height="43" rx="10" fill="#1456c0" opacity="${[0.95,0.6,0.35,0.15][i]}"/><text x="${x+17}" y="105" font-size="11" text-anchor="middle" fill="currentColor">${c}</text>${i<3?`<path d="M${x+42} 50 h52" stroke="#0a84ff" stroke-width="2"/><path d="M${x+94} 50 l-7 -4 v8 z" fill="#0a84ff"/><text x="${x+68}" y="42" font-size="10.5" text-anchor="middle" fill="currentColor">1 in 10</text>`:""}</g>`}).join("")}</svg>`;
})();
