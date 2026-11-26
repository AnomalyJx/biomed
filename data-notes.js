// Foundation of Biology — summarised notes, one entry per topic.
window.TOPICS = [
{
id: "cells", title: "Cells, cell theory & organelles", short: "Cells",
notes: `
<h3>What is a cell?</h3>
<ul>
<li>The <b>structural and functional unit of life</b>, and the smallest independent unit of life. All the chemical reactions needed for life happen inside cells.</li>
<li>Two basic types: <b>prokaryotic</b> and <b>eukaryotic</b>.</li>
</ul>
<h3>Cell theory</h3>
<ol>
<li>All living things are made of cells (or cell products).</li>
<li>The cell is the smallest unit of life.</li>
<li>Cells only arise from <b>pre-existing cells</b>.</li>
</ol>
<h3>Functions of life: "MR H GREN"</h3>
<p><b>M</b>etabolism · <b>R</b>esponse · <b>H</b>omeostasis · <b>G</b>rowth · <b>R</b>eproduction · <b>E</b>xcretion · <b>N</b>utrition. A unicellular organism (e.g. <i>Paramecium</i>, <i>Chlorella</i>) carries out all of them in one cell. For example, a contractile vacuole handles homeostasis (water), cilia handle response and movement, and chloroplasts handle nutrition.</p>
<h3>Unicellular vs multicellular</h3>
<ul>
<li><b>Unicellular:</b> one cell does everything (bacteria, amoeba, yeast). Usually microscopic.</li>
<li><b>Multicellular:</b> cells are organised into tissues, organs and systems, and cells specialise (plants, animals, fungi). They show <b>emergent properties</b>: the whole is greater than the sum of its parts.</li>
</ul>
<h3>Why are cells small? Surface area : volume</h3>
<ul>
<li>As a cell grows, <b>volume increases faster than surface area</b>, so the SA:V ratio falls.</li>
<li>Nutrient needs and waste production depend on volume, but exchange happens across the surface (the membrane). If SA:V is too small, exchange can't keep up, so the cell divides.</li>
<li>The nucleus can only control a limited volume of cytoplasm.</li>
<li>Exchange cells increase their surface area, e.g. <b>microvilli</b> in the small intestine.</li>
</ul>
<h3>Differentiation & stem cells</h3>
<ul>
<li>All of an organism's cells have the same genome, but each cell type <b>expresses only some genes</b>. Humans have about 220 specialised cell types.</li>
<li>Stem cells can divide continuously and differentiate. <b>Totipotent</b> cells can become any cell type. <b>Pluripotent</b> cells can become many types. <b>Multipotent</b> cells can become a few related types. <b>Unipotent</b> cells only make their own type (e.g. liver stem cells make liver cells).</li>
</ul>
<h3>Prokaryotic vs eukaryotic</h3>
<table><tr><th></th><th>Prokaryote</th><th>Eukaryote</th></tr>
<tr><td>Nucleus</td><td>None (DNA in the nucleoid)</td><td>Membrane-bound nucleus</td></tr>
<tr><td>DNA</td><td>Naked, circular, usually no introns, plus plasmids</td><td>Linear, bound to histone proteins, contains introns</td></tr>
<tr><td>Ribosomes</td><td><b>70S</b></td><td><b>80S</b></td></tr>
<tr><td>Organelles</td><td>No membrane-bound organelles</td><td>Mitochondria, ER, Golgi, etc.</td></tr>
<tr><td>Division</td><td>Binary fission</td><td>Mitosis and meiosis</td></tr>
<tr><td>Size</td><td>~1–5 µm</td><td>~10–100 µm</td></tr>
<tr><td>Examples</td><td>Bacteria</td><td>Plants, animals, fungi, protists</td></tr></table>
<p>Prokaryote structures: cell wall (peptidoglycan), plasma membrane, cytoplasm, 70S ribosomes, nucleoid (genophore). Some also have pili (attachment and conjugation), flagella (movement), plasmids and a glycocalyx/capsule.</p>
<h3>Organelles: structure → function</h3>
<table><tr><th>Organelle</th><th>Key features</th><th>Function</th></tr>
<tr><td>Nucleus</td><td>Double membrane with pores; chromatin</td><td>Holds DNA and controls the cell. mRNA is made here and leaves through the pores.</td></tr>
<tr><td>Mitochondrion</td><td>Double membrane; inner membrane folded into <b>cristae</b></td><td>ATP production by aerobic respiration</td></tr>
<tr><td>Ribosome (80S)</td><td>No membrane; rRNA + protein; ~20 nm</td><td>Protein synthesis</td></tr>
<tr><td>Rough ER</td><td>Flattened sacs (cisternae) with ribosomes attached</td><td>Makes proteins for secretion and sends them to the Golgi in vesicles</td></tr>
<tr><td>Smooth ER</td><td>No ribosomes</td><td>Lipid synthesis, detoxification</td></tr>
<tr><td>Golgi apparatus</td><td>Curved cisternae, no ribosomes, near the plasma membrane</td><td>Modifies, sorts and packages proteins for secretion</td></tr>
<tr><td>Lysosome</td><td>Single membrane; formed from Golgi vesicles</td><td>Digestive (hydrolytic) enzymes break down food, old organelles or the whole cell</td></tr>
<tr><td>Vesicle</td><td>Small, single membrane</td><td>Transports materials within the cell</td></tr>
<tr><td>Vacuole</td><td>Single membrane (tonoplast)</td><td>Large and permanent in plants (cell sap, turgor pressure). Small and temporary in animals.</td></tr>
<tr><td>Chloroplast</td><td>Double membrane; thylakoid stacks</td><td>Photosynthesis (makes glucose). Plants and algae only.</td></tr>
<tr><td>Cell wall</td><td>Cellulose in plants (not an organelle)</td><td>Strength and support; stops the cell bursting. It is permeable.</td></tr>
<tr><td>Centrioles</td><td>Two groups of 9 triple microtubules</td><td>Organise the spindle. Found in animal cells.</td></tr>
<tr><td>Cilia / flagella</td><td>Contain microtubules</td><td>Movement of the cell or of the fluid around it</td></tr></table>
<h3>Plant vs animal cells</h3>
<p><b>Only in plants:</b> cell wall, chloroplasts, a large permanent vacuole. <b>Mainly in animals:</b> centrioles, lysosomes, small temporary vacuoles. <b>Both:</b> plasma membrane, nucleus, cytoplasm, mitochondria, ribosomes, ER and Golgi.</p>
`,
figs: [["cells-animal-plant","Animal cell and plant cell"],["cells-prokaryote","Prokaryotic cell structure"],["cells-eukaryote","Animal and plant (eukaryotic) cells"],["cells-prok-euk-table","Prokaryote vs eukaryote comparison"],["cells-sav","Surface area : volume ratio"]]
},
{
id: "membrane", title: "Plasma membrane & transport", short: "Membranes",
notes: `
<h3>Phospholipids</h3>
<ul>
<li>A phospholipid is <b>amphipathic</b>: it has a polar, <b>hydrophilic</b> phosphate head and two non-polar, <b>hydrophobic</b> fatty acid tails.</li>
<li>In water, phospholipids self-organise so the heads stay "wet" and the tails stay "dry". They form a <b>bilayer</b> (or micelles and liposomes).</li>
<li>Phospholipids can move <b>sideways</b> (laterally) but not flip vertically.</li>
</ul>
<h3>Fluid mosaic model (Singer–Nicolson)</h3>
<ul>
<li>A fluid phospholipid bilayer with proteins scattered through it, like a mosaic. The proteins can move laterally.</li>
<li><b>Integral proteins</b> are embedded permanently, and many span the whole membrane (channels, carriers). <b>Peripheral proteins</b> attach temporarily to the surface.</li>
<li><b>Glycoproteins</b> are proteins with a short sugar chain (oligosaccharide). They are used in cell recognition (immune system) and as hormone receptors.</li>
<li><b>Cholesterol</b> (animal cells) is a steroid. Its polar –OH head sits by the phosphate heads and its non-polar tail sits among the fatty acid tails. It <b>regulates fluidity</b>: it restricts phospholipid movement but stops the tails packing into a solid. It also <b>reduces permeability</b> to ions such as Na⁺ and H⁺.</li>
<li>The membrane is <b>selectively (partially) permeable</b>.</li>
</ul>
<h3>Passive transport (no ATP; moves down the gradient)</h3>
<ul>
<li><b>Simple diffusion:</b> net movement of particles from <b>high → low concentration</b> caused by random motion. Small or non-polar molecules (O₂, CO₂) pass straight through the bilayer. Movement continues until <b>equilibrium</b>, so organisms keep gradients steep.</li>
<li><b>Facilitated diffusion:</b> large or polar molecules and ions cross through <b>channel or carrier proteins</b>. Still high → low.</li>
<li><b>Osmosis:</b> movement of <b>water</b> from high water concentration (low solute) to low water concentration (high solute) across a partially permeable membrane. <b>Aquaporins</b> are channel proteins that speed this up.</li>
</ul>
<h3>Tonicity</h3>
<ul>
<li><b>Hypertonic</b> solution (more solute outside): water leaves the cell. Animal cells shrink (crenate); plant cells become plasmolysed.</li>
<li><b>Hypotonic</b> solution (less solute outside): water enters the cell. Animal cells swell and may burst (lyse); plant cells become turgid because the wall stops them bursting.</li>
<li><b>Isotonic</b>: no net movement. Medical uses of isotonic saline include IV drips, rinsing wounds, eye drops, keeping skin moist before grafts, and packing donor organs.</li>
</ul>
<h3>Active transport (needs ATP; moves against the gradient)</h3>
<ul>
<li>Moves substances from <b>low → high concentration</b> using <b>protein pumps</b> and energy from <b>ATP</b>. Example: the Na⁺/K⁺ pump.</li>
<li>Transport protein types: <b>uniport</b> (one molecule), <b>symport</b> (two molecules in the same direction, e.g. Na⁺ + glucose), <b>antiport</b> (two molecules in opposite directions, e.g. Na⁺/K⁺).</li>
<li>Examples: root hair cells taking up mineral ions, and glucose absorption in the small intestine.</li>
</ul>
<h3>Bulk transport with vesicles (needs energy)</h3>
<ul>
<li><b>Endocytosis</b> takes material in: the membrane folds inwards to form a vesicle. <b>Phagocytosis</b> is "cell eating" (solids) and <b>pinocytosis</b> is "cell drinking" (liquids). Receptor-mediated endocytosis uses receptors to pick up specific ligands.</li>
<li><b>Exocytosis</b> releases material (secretion): a vesicle fuses with the plasma membrane. This works because the membrane is <b>fluid</b>.</li>
<li>Vesicles carry proteins from the rough ER to the Golgi, then on to the membrane for export.</li>
</ul>
<table><tr><th>Transport</th><th>ATP?</th><th>Direction</th><th>Protein?</th></tr>
<tr><td>Simple diffusion</td><td>No</td><td>High → low</td><td>No</td></tr>
<tr><td>Facilitated diffusion</td><td>No</td><td>High → low</td><td>Channel or carrier</td></tr>
<tr><td>Osmosis (water)</td><td>No</td><td>High → low water concentration</td><td>Aquaporins help</td></tr>
<tr><td>Active transport</td><td>Yes</td><td>Low → high</td><td>Pump</td></tr>
<tr><td>Endo/exocytosis</td><td>Yes</td><td>Bulk</td><td>Vesicles</td></tr></table>
`,
figs: [["mem-fluid-mosaic","Fluid mosaic model"],["mem-transport-types","Three forms of transport"],["mem-hypertonic","Hypertonic solution"],["mem-hypotonic","Hypotonic solution"],["mem-active","Active transport"],["mem-endocytosis","Types of endocytosis"]]
},
{
id: "water", title: "Water", short: "Water",
notes: `
<h3>Structure and polarity</h3>
<ul>
<li>H₂O has two H atoms covalently bonded to O. Oxygen has more protons (8 vs 1), so it pulls the shared electrons more strongly.</li>
<li>This makes O <b>slightly negative (δ−)</b> and the H atoms <b>slightly positive (δ+)</b>, so water is <b>polar</b> (a dipole).</li>
<li>Neighbouring molecules attract through weak <b>hydrogen bonds</b>, which constantly form, break and re-form. They are weak individually, but there are a great many of them; each molecule can bond to 4 others.</li>
</ul>
<h3>Properties explained by hydrogen bonding</h3>
<ul>
<li><b>Cohesion</b> (water sticking to water) gives <b>surface tension</b>, which lets pond skaters walk on water, and makes droplets form spheres.</li>
<li><b>Adhesion</b> (water sticking to other polar or charged surfaces) together with cohesion gives <b>capillary action</b>, e.g. water moving up xylem during transpiration, or up a straw.</li>
<li><b>Solvent:</b> water dissolves polar and charged substances. Na⁺ is surrounded by the δ− O ends and Cl⁻ by the δ+ H ends. Metabolic reactions happen in solution, and substances are transported dissolved, e.g. sucrose in phloem and O₂ dissolving in the moist alveolar lining. Water is a very good solvent, not a truly "universal" one.</li>
<li><b>Thermal properties:</b> water has a <b>high specific heat capacity</b> (4.2 J raises 1 g by 1 °C), a <b>high latent heat of vaporisation</b> (2257 J g⁻¹) and a high heat of fusion. This keeps water temperatures stable, and makes water a good coolant in <b>sweat</b> and in leaves through evaporation.</li>
</ul>
<h3>Hydrophilic vs hydrophobic</h3>
<ul>
<li><b>Hydrophilic</b> ("water loving") substances are polar or charged and dissolve in or attract water: glucose, Na⁺, Cl⁻, cellulose.</li>
<li><b>Hydrophobic</b> ("water fearing") substances are non-polar and uncharged and are insoluble in water: lipids, fats and oils. They dissolve in solvents such as propanone.</li>
</ul>
<h3>Transport in blood (plasma is ~95% water)</h3>
<table><tr><th>Substance</th><th>Solubility</th><th>How it is carried</th></tr>
<tr><td>Glucose, amino acids</td><td>Polar, so soluble</td><td>Dissolved in plasma</td></tr>
<tr><td>NaCl</td><td>Ionic, so soluble (Na⁺ + Cl⁻)</td><td>Dissolved in plasma</td></tr>
<tr><td>Oxygen</td><td>Non-polar, only slightly soluble, and less soluble at higher temperature</td><td>Mostly bound to <b>haemoglobin</b> in red blood cells (4 binding sites)</td></tr>
<tr><td>Fats, cholesterol</td><td>Hydrophobic, so insoluble</td><td>Inside <b>lipoprotein complexes</b>: a phospholipid monolayer (heads facing out) with proteins and cholesterol, and fats in the core</td></tr></table>
<h3>Water vs methane</h3>
<table><tr><th></th><th>Methane CH₄</th><th>Water H₂O</th></tr>
<tr><td>Polarity</td><td>Non-polar</td><td>Polar (hydrogen bonds)</td></tr>
<tr><td>Molecular mass</td><td>16</td><td>18</td></tr>
<tr><td>Specific heat (J g⁻¹ °C⁻¹)</td><td>2.2</td><td>4.2</td></tr>
<tr><td>Latent heat of vap. (J g⁻¹)</td><td>760</td><td>2257</td></tr>
<tr><td>Melting / boiling point (°C)</td><td>−182 / −160</td><td>0 / 100</td></tr></table>
<p>The molecules are a similar size, but <b>hydrogen bonding</b> makes water's values much higher. Methane is made by methanogenic prokaryotes (in swamps, animal guts and landfill) and is a greenhouse gas.</p>
`,
figs: [["q-lipoprotein","Lipoprotein complex: how fats and cholesterol travel in blood"]]
},
{
id: "biomolecules", title: "Biomolecules: carbohydrates, lipids, proteins", short: "Biomolecules",
notes: `
<h3>Carbohydrates</h3>
<ul>
<li><b>Monosaccharides</b> are the monomers and mainly an energy source, e.g. <b>glucose</b> (hexose) and <b>ribose</b> (pentose).</li>
<li><b>Condensation</b> joins monosaccharides with a <b>glycosidic bond</b> and removes a molecule of <b>water</b>. <b>Hydrolysis</b> (adding water) breaks the bond.</li>
<li><b>Disaccharides</b> (handy for transport): <b>maltose</b> = glucose + glucose; <b>sucrose</b> = glucose + fructose; <b>lactose</b> = glucose + galactose.</li>
<li><b>Polysaccharides</b> are used for energy storage, structure and recognition (glycoproteins):
<ul><li><b>Cellulose</b>: β-glucose, linear, 1–4 bonds; forms plant cell walls.</li>
<li><b>Starch</b> (plant storage) is made of α-glucose in two forms. <b>Amylose</b> is unbranched and helical (1–4 bonds). <b>Amylopectin</b> is branched (1–4 and 1–6 bonds).</li>
<li><b>Glycogen</b> (animal storage): α-glucose, like amylopectin but <b>more branched</b> (more 1–6 bonds).</li></ul></li>
</ul>
<h3>Lipids</h3>
<ul>
<li>Lipids are non-polar organic molecules. They include triglycerides (adipose tissue), phospholipids (membranes), cholesterol and steroids (hormones).</li>
<li>Functions, "SHIPS": <b>S</b>torage of energy, <b>H</b>ormones, <b>I</b>nsulation, <b>P</b>rotection of organs, <b>S</b>tructure.</li>
<li><b>Triglyceride</b> = <b>1 glycerol + 3 fatty acids</b>, joined by condensation (ester bonds). Used for long-term energy storage.</li>
<li><b>Saturated</b> fatty acids have no C=C double bonds and are solid at room temperature (animal fat). <b>Unsaturated</b> fatty acids have double bonds (mono = 1, poly = many) and are liquid (plant oils).</li>
<li><b>Cis</b> isomers have H atoms on the same side of the double bond, giving a kink, loose packing and a liquid. They are common in nature and generally healthier. <b>Trans</b> isomers have H atoms on opposite sides, giving a straight chain, tight packing and a solid. They are found in processed food and are bad for health.</li>
<li><b>Lipoproteins:</b> <b>LDL</b> ("bad") carries cholesterol from the liver to the body. <b>HDL</b> ("good") returns excess cholesterol to the liver. Saturated and trans fats raise LDL, which can lead to atherosclerosis and coronary heart disease (CHD).</li>
</ul>
<table><tr><th></th><th>Carbohydrate</th><th>Lipid</th></tr>
<tr><td>Storage</td><td>Short term</td><td>Long term</td></tr>
<tr><td>Osmotic effect</td><td>More</td><td>Less</td></tr>
<tr><td>Digestion</td><td>Easier</td><td>Harder</td></tr>
<tr><td>Energy per gram</td><td>Less</td><td>About 2× more</td></tr>
<tr><td>Solubility</td><td>Soluble (mono/di)</td><td>Insoluble</td></tr></table>
<p><b>BMI</b> = mass (kg) ÷ height (m)².</p>
<h3>Proteins</h3>
<ul>
<li>The monomer is the <b>amino acid</b>: an amine group (–NH₂), a carboxyl group (–COOH), H and a variable <b>R group</b>, all around a central carbon. There are <b>20</b> amino acids.</li>
<li>Amino acids are joined by <b>peptide bonds</b> through <b>condensation</b> (releasing water) at ribosomes. The sequence is coded by genes.</li>
<li>Functions, "SHITSME": <b>S</b>tructure (collagen), <b>H</b>ormonal (insulin), <b>I</b>mmunity (antibodies), <b>T</b>ransport (haemoglobin), <b>S</b>ensation (rhodopsin), <b>M</b>ovement (actin, myosin), <b>E</b>nzymes (catalase, Rubisco).</li>
</ul>
<h3>Protein structure levels</h3>
<ol>
<li><b>Primary:</b> the sequence of amino acids, held by peptide (covalent) bonds.</li>
<li><b>Secondary:</b> <b>α-helix</b> or <b>β-pleated sheet</b>, held by <b>hydrogen bonds</b> between –CO and –NH groups.</li>
<li><b>Tertiary:</b> the precise 3D folding, held by interactions between R groups: <b>hydrogen bonds</b>, <b>ionic bonds</b> (broken by pH change), <b>disulphide bonds</b> between cysteines (covalent, broken by reducing agents) and <b>hydrophobic interactions / van der Waals forces</b> (broken by heat).</li>
<li><b>Quaternary:</b> more than one polypeptide chain, sometimes with <b>prosthetic groups</b>. Example: <b>haemoglobin</b> has 4 chains (2α + 2β) and 4 haem groups.</li>
</ol>
<ul>
<li><b>Globular</b> proteins are spherical and soluble, with hydrophilic R groups outside and hydrophobic ones inside (e.g. haemoglobin, enzymes).</li>
<li><b>Fibrous</b> proteins form long chains, are insoluble and are used for structure and support. Example: <b>collagen</b> is a triple helix held by hydrogen bonds, found in skin, bones and tendons.</li>
<li><b>Denaturation</b> is a change in 3D shape caused by heat or pH, which leads to loss of function. It is usually permanent (e.g. a cooked egg).</li>
</ul>
`,
figs: [["bio-condensation","Condensation forms a glycosidic bond"],["bio-disaccharides","Disaccharides"],["bio-polysaccharides","Polysaccharide types"],["bio-triglyceride","Triglyceride structure"],["bio-cis-trans","Cis vs trans fatty acids"],["bio-energy","Carbs vs lipids for energy storage, and BMI"],["bio-protein-summary","Protein structure summary"]]
},
{
id: "enzymes", title: "Enzymes & activation energy", short: "Enzymes",
notes: `
<h3>What enzymes are</h3>
<ul>
<li>An enzyme is a <b>globular protein</b> that acts as a <b>biological catalyst</b>. It speeds up reactions by <b>lowering the activation energy (Eₐ)</b> and is <b>not used up</b>, so it can be reused.</li>
<li>The <b>substrate</b> binds to the <b>active site</b>, which is complementary in shape and chemistry. This forms an <b>enzyme–substrate complex</b>; the reaction happens, the products are released and the enzyme is free again.</li>
</ul>
<h3>Models</h3>
<ul>
<li><b>Lock-and-key:</b> the active site is a rigid, exact fit for the substrate, both structurally and chemically. This explains specificity.</li>
<li><b>Induced fit</b> (the better model): the active site changes shape slightly as the substrate binds (a conformational change). This stresses the substrate's bonds and lowers Eₐ, and it explains why some enzymes act on several similar substrates.</li>
</ul>
<h3>Collisions</h3>
<p>Substrates and enzymes move randomly in solution. A reaction needs a <b>successful collision</b>, where the substrate meets the active site at the right orientation. Anything that increases collision frequency increases the rate.</p>
<h3>Factors affecting rate</h3>
<ul>
<li><b>Temperature:</b> as temperature rises, kinetic energy rises, giving more collisions and a faster rate, up to the <b>optimum</b>. Above it, vibrations break hydrogen bonds, the active site changes shape and the enzyme is <b>denatured</b>, so the rate drops steeply. At low temperatures the rate is slow but the enzyme is not denatured.</li>
<li><b>pH:</b> each enzyme has an <b>optimum pH</b>. Moving away from it changes the charges on R groups, which breaks ionic and hydrogen bonds, changes the active site and lowers activity. Examples: <b>pepsin</b> (stomach) has an optimum around <b>pH 2</b>; <b>salivary amylase</b> around <b>pH 7</b>.</li>
<li><b>Substrate concentration:</b> the rate increases at first because there are more collisions. Then it <b>plateaus</b> once all active sites are occupied (saturated). At that point <b>enzyme concentration is the limiting factor</b>.</li>
</ul>
<h3>Denaturation</h3>
<p>Heat or extreme pH breaks the bonds that hold the 3D shape. The active site changes shape so the substrate can no longer bind. This is usually <b>permanent</b>, which is why a very high fever is dangerous: body enzymes start to denature.</p>
<h3>Activation energy & reaction types</h3>
<ul>
<li><b>Exergonic</b> reactions: the reactants have more energy than the products, so energy is <b>released</b> (ΔG &lt; 0). Usually <b>catabolic</b> (breaking down).</li>
<li><b>Endergonic</b> reactions: the products have more energy than the reactants, so energy is <b>absorbed</b> (ΔG &gt; 0). Usually <b>anabolic</b> (building up).</li>
<li>An enzyme lowers the activation energy peak in both cases. It does <b>not</b> change the overall ΔG.</li>
</ul>
<h3>Enzymes in sequence & industry</h3>
<ul>
<li>Starch breaks down in two steps: <b>amylase</b> turns starch/glycogen into maltose, then <b>maltase</b> turns maltose into glucose.</li>
<li><b>Lactose-free milk:</b> <b>lactase</b> (usually from yeast) is <b>immobilised</b> on <b>alginate beads</b>. Milk is passed over the beads and lactose is broken into glucose + galactose. The enzyme is reused and doesn't contaminate the milk.</li>
<li>Benefits: it suits people with lactose intolerance, makes milk sweeter (no added sweetener needed), makes ice cream smoother (glucose and galactose are more soluble, so there are fewer crystals) and speeds up yoghurt and cheese production.</li>
</ul>
`,
figs: [["enz-active-site","Enzymes, substrates and active sites"],["enz-induced-fit","Induced-fit model"],["ae-exergonic","Exergonic reaction: enzyme lowers Eₐ"],["ae-endergonic","Endergonic reaction"],["enz-factors","Factors affecting enzyme activity"],["enz-lactose","Production of lactose-free milk"]]
},
{
id: "dna", title: "DNA & RNA structure", short: "DNA & RNA",
notes: `
<h3>Nucleotides</h3>
<ul>
<li>DNA and RNA are <b>polymers of nucleotides</b>.</li>
<li>A nucleotide = a <b>phosphate</b> group (acidic, negative) + a <b>pentose sugar</b> + a <b>nitrogenous base</b>.</li>
<li>DNA bases are <b>adenine (A), guanine (G), thymine (T), cytosine (C)</b>. RNA has <b>uracil (U) instead of thymine</b>.</li>
<li>Purines (A, G) have 2 rings; pyrimidines (C, T, U) have 1 ring.</li>
</ul>
<h3>Making a strand</h3>
<p>Nucleotides join by <b>condensation</b>: the phosphate on the <b>5′ carbon</b> of one sugar bonds to the <b>3′ –OH</b> of the next, forming a <b>phosphodiester bond</b> and releasing water. This builds the <b>sugar–phosphate backbone</b>.</p>
<h3>The double helix</h3>
<ul>
<li>Two strands are held together by <b>hydrogen bonds between complementary bases</b>: <b>A = T (2 H-bonds)</b> and <b>G ≡ C (3 H-bonds)</b>.</li>
<li>The strands are <b>antiparallel</b>: one runs 5′→3′ and the other 3′→5′. This is needed for the bases to face each other and pair.</li>
<li>The backbone is on the outside (hydrophilic) and the bases are on the inside. The molecule twists into a <b>double helix</b> with about 10 bases per turn.</li>
<li>There is about 2 m of DNA in each human cell, packed by coiling around <b>histone proteins</b>.</li>
</ul>
<table><tr><th></th><th>DNA</th><th>RNA</th></tr>
<tr><td>Sugar</td><td>Deoxyribose</td><td>Ribose</td></tr>
<tr><td>Bases</td><td>A, T, G, C</td><td>A, <b>U</b>, G, C</td></tr>
<tr><td>Strands</td><td>Two, antiparallel, double helix</td><td>Single, often linear</td></tr></table>
<h3>Discovery</h3>
<p><b>Watson & Crick</b> used <b>model building</b>. Their first model, a triple helix, was rejected because it didn't fit Chargaff's 1:1 A:T ratio and needed too much magnesium (Franklin's data). Their final model relied heavily on <b>Rosalind Franklin</b> and Maurice Wilkins' <b>X-ray diffraction</b> images. The correct model immediately suggested how DNA could replicate and that information is coded in base triplets.</p>
<h3>Complementary sequences & palindromes (riddles)</h3>
<ul>
<li>Template <code>ATGC</code> pairs with <code>TACG</code> (complementary base pairing: A–T, G–C).</li>
<li>DNA <code>ATGCCA</code> is transcribed to mRNA <code>UACGGU</code>, because <b>T is replaced by U</b> in RNA.</li>
<li>A <b>palindromic sequence</b> reads the same 5′→3′ on both strands, e.g. <code>5′ GAATTC 3′ / 3′ CTTAAG 5′</code> and <code>5′ AAGCTT 3′ / 3′ TTCGAA 5′</code>.</li>
</ul>
`,
figs: [["dna-vs-rna","DNA vs RNA"],["dna-antiparallel","Antiparallel strands and base pairing"]]
},
{
id: "replication", title: "DNA replication", short: "Replication",
notes: `
<h3>Overview</h3>
<ul>
<li>A cell copies its DNA to make <b>two identical molecules</b>. Each one has <b>one original (parental) strand and one new strand</b>, so replication is <b>semi-conservative</b>.</li>
<li>Why it matters: it keeps genetic information accurate, and it is needed for cell division, growth and tissue repair. In eukaryotes it happens in the <b>S phase</b> of interphase.</li>
<li>Key features: semi-conservative, <b>complementary base pairing</b> (A–T, C–G) and <b>bidirectional</b> (it spreads both ways from the origin).</li>
</ul>
<h3>Enzymes & their jobs</h3>
<table><tr><th>Enzyme / protein</th><th>Job</th></tr>
<tr><td>Topoisomerase</td><td>Relieves the twisting strain ahead of the fork</td></tr>
<tr><td><b>Helicase</b></td><td>Unwinds the helix and breaks the <b>hydrogen bonds</b> between bases, forming the replication fork</td></tr>
<tr><td>Single-strand binding proteins (SSBs)</td><td>Keep the separated strands apart</td></tr>
<tr><td><b>Primase</b></td><td>Makes a short <b>RNA primer</b>, giving a free 3′ end to build from</td></tr>
<tr><td><b>DNA polymerase III</b></td><td>Adds nucleotides complementary to the template, <b>only 5′→3′</b></td></tr>
<tr><td>DNA polymerase I</td><td>Removes RNA primers and replaces them with DNA</td></tr>
<tr><td><b>DNA ligase</b></td><td>Joins Okazaki fragments by sealing the sugar–phosphate backbone</td></tr></table>
<h3>Stages</h3>
<ol>
<li><b>Initiation:</b> replication starts at <b>origins of replication</b> (OriC in <i>E. coli</i>). Helicase (DnaB) unwinds the DNA, forming two forks; SSBs stabilise the strands; primase lays down RNA primers.</li>
<li><b>Elongation:</b> DNA polymerase III builds new strands 5′→3′.
<ul><li><b>Leading strand:</b> made <b>continuously</b> towards the fork, usually from one primer.</li>
<li><b>Lagging strand:</b> made <b>discontinuously</b> away from the fork in short <b>Okazaki fragments</b>. Each fragment needs its own primer.</li>
<li>DNA polymerase I swaps primers for DNA, and <b>ligase</b> joins the fragments.</li></ul></li>
<li><b>Termination:</b> replication ends when the forks meet or reach termination sequences (e.g. Tus protein). The new molecules rewind into double helices.</li>
</ol>
<h3>Critical-thinking answers</h3>
<ul>
<li><b>Why only 5′→3′?</b> Polymerase can only add nucleotides to the <b>3′ –OH</b> end of a growing strand.</li>
<li><b>Why is a primer needed?</b> Polymerase can't start a chain from nothing; it can only extend an existing strand.</li>
<li><b>Why Okazaki fragments only on the lagging strand?</b> The strands are antiparallel and polymerase only works 5′→3′, so on the lagging strand it has to keep restarting as more template is exposed.</li>
<li><b>If helicase stopped:</b> the fork stops opening, so the template stays double-stranded and replication <b>stalls</b>.</li>
<li><b>If ligase failed:</b> nicks remain between fragments. The lagging strand is incomplete and unstable, causing DNA damage.</li>
</ul>
`,
figs: [["rep-diagram","DNA replication overview"],["rep-fork","Leading vs lagging strand at the fork"]]
},
{
id: "protein-synthesis", title: "Transcription & translation", short: "Protein synthesis",
notes: `
<h3>Central dogma</h3>
<p><b>DNA → (transcription) → mRNA → (translation) → protein.</b> Roughly, one gene codes for one polypeptide. Genes are switched on and off, so not every gene is expressed in every cell. A cell that needs lots of one protein (e.g. pancreatic β cells making insulin) makes many copies of that mRNA.</p>
<h3>Types of RNA</h3>
<ul>
<li><b>mRNA</b> (messenger): a copy of a gene that carries the code to the ribosome.</li>
<li><b>tRNA</b> (transfer): clover-leaf shaped. It carries a specific amino acid and has an <b>anticodon</b>.</li>
<li><b>rRNA</b> (ribosomal): the main component of ribosomes.</li>
</ul>
<h3>Transcription (in the nucleus)</h3>
<ol>
<li><b>RNA polymerase</b> binds at the start of a gene (the promoter) and separates the DNA strands.</li>
<li>It builds mRNA complementary to the <b>template (antisense) strand</b>, joining free RNA nucleotides with covalent bonds, 5′→3′. A pairs with <b>U</b>, T with A, G with C and C with G.</li>
<li>When it is finished, RNA polymerase and the mRNA detach and the DNA rewinds.</li>
<li>The mRNA leaves through the <b>nuclear pores</b> to the cytoplasm. The mRNA has the same sequence as the <b>coding (sense) strand</b>, but with U instead of T.</li>
</ol>
<h3>The genetic code</h3>
<ul>
<li>A <b>codon</b> is <b>3 bases</b> on mRNA that code for 1 amino acid. 4 × 4 × 4 = <b>64 codons</b> code for <b>20 amino acids</b>.</li>
<li>The code is <b>degenerate</b>: several codons can code for the same amino acid (e.g. GAU and GAC both code for aspartate).</li>
<li>The <b>start codon AUG</b> codes for <b>methionine</b>, so it is always the first amino acid. <b>Stop codons</b> (UAA, UAG, UGA) add no amino acid; they release the polypeptide.</li>
<li>The code is universal: the same codons are used by nearly all organisms.</li>
</ul>
<h3>Translation (at ribosomes in the cytoplasm)</h3>
<ol>
<li>The mRNA binds to the <b>small ribosomal subunit</b>, then the <b>large subunit</b> joins. The large subunit has 3 tRNA sites, but only 2 hold tRNA at a time.</li>
<li>A tRNA whose <b>anticodon</b> is complementary to the codon binds (hydrogen bonds between bases). It brings the matching amino acid.</li>
<li>A second tRNA binds and the ribosome forms a <b>peptide bond</b> between the two amino acids.</li>
<li>The ribosome moves along the mRNA by one codon. The empty tRNA moves to the third site and leaves, and a new tRNA arrives. This repeats.</li>
<li>At a <b>stop codon</b>, the polypeptide is released.</li>
</ol>
<p><b>Worked example:</b> DNA template <code>TAC GGA TTT</code> → mRNA <code>AUG CCU AAA</code> → Met – Pro – Lys. Use a codon table; you don't need to memorise it.</p>
<p><b>Counting:</b> number of amino acids = number of codons − 1 (the stop codon) = (bases ÷ 3) − 1.</p>
`,
figs: [["ps-central-dogma","Central dogma"],["ps-translation","Key components of translation"],["ps-genetic-code","Genetic code table: use it to decode codons"]]
},
{
id: "cell-division", title: "Cell cycle & mitosis", short: "Cell division",
notes: `
<h3>Why mitosis?</h3>
<p>Mitosis is used for <b>growth</b>, <b>tissue repair</b>, <b>embryonic development</b> and <b>asexual reproduction</b>. It produces <b>two genetically identical daughter cells</b>. Uncontrolled division leads to <b>tumours</b> (cancer).</p>
<h3>The cell cycle</h3>
<ul>
<li><b>Interphase</b> is where the cell spends most of its time. It is very active, not "resting".
<ul><li><b>G1:</b> the cell grows, makes organelles and synthesises proteins.</li>
<li><b>S:</b> <b>DNA is replicated</b>.</li>
<li><b>G2:</b> more growth, organelles and proteins; the cell prepares to divide.</li></ul></li>
<li><b>M phase:</b> mitosis (division of the nucleus) followed by cytokinesis (division of the cytoplasm).</li>
<li><b>G0</b> is when a cell leaves the cycle and stops dividing, but keeps carrying out its normal functions.</li>
</ul>
<h3>Terminology</h3>
<ul>
<li><b>Sister chromatids</b> are the two identical copies of a chromosome, joined at the <b>centromere</b>. After they separate in anaphase, each is called a <b>chromosome</b>.</li>
<li><b>Centrioles</b> organise the spindle microtubules. In animal cells, two centrioles together form a <b>centrosome</b>. Don't mix up centromere, centriole and centrosome.</li>
<li><b>Supercoiling:</b> chromosomes are 15–85 mm long but the nucleus is under 5 µm across, so DNA coils around <b>histones</b> and supercoils to become short and compact enough to separate.</li>
</ul>
<h3>Stages of mitosis: "PMAT" (People Meet And Talk)</h3>
<ol>
<li><b>Prophase:</b> chromatin supercoils into visible sister chromatids. Centrosomes move to opposite poles and spindle fibres form. The <b>nuclear membrane breaks down</b>.</li>
<li><b>Metaphase:</b> spindle fibres attach to the centromeres, and the chromatids <b>line up along the middle</b> (equator) of the cell.</li>
<li><b>Anaphase:</b> spindle fibres contract and <b>pull the sister chromatids apart</b>. They are now chromosomes and move to opposite poles.</li>
<li><b>Telophase:</b> chromosomes arrive at the poles and uncoil back to chromatin. <b>New nuclear membranes form</b> and the spindle disappears. Cytokinesis begins at the same time.</li>
</ol>
<h3>Cytokinesis</h3>
<table><tr><th>Animal cells</th><th>Plant cells</th></tr>
<tr><td>A ring of contractile protein (microfilaments) at the equator pulls the membrane inwards, forming a <b>cleavage furrow</b>, which pinches the cell in two.</td><td>Golgi vesicles gather at the centre and fuse to form a <b>cell plate</b>, which grows out to the membrane. Pectins form the middle lamella, and each cell then lays down a <b>cellulose</b> wall.</td></tr></table>
`,
figs: [["div-cell-cycle","The cell cycle"],["q-mitosis-1","Prophase"],["q-mitosis-2","Metaphase"],["q-mitosis-3","Anaphase"],["q-mitosis-4","Telophase"],["div-cytokinesis","Cytokinesis in animal vs plant cells"]]
},
{
id: "genetics", title: "Genes, chromosomes & Mendel's laws", short: "Genetics",
notes: `
<h3>Genes</h3>
<ul>
<li><b>Genetics</b> is the study of how biological information is passed from one generation to the next.</li>
<li>A <b>gene</b> is a hereditary unit: a sequence of DNA at a specific location (<b>locus</b>) on a chromosome. It is transcribed into RNA that may be translated into a polypeptide, which controls a trait.</li>
<li><b>Gene expression</b> happens in 2 steps: <b>transcription</b> (in the nucleus, DNA → mRNA) and <b>translation</b> (in the cytoplasm, mRNA → protein). All cells carry the same genes, but different genes are switched on, so expression is tightly controlled.</li>
<li><b>Alleles</b> are different versions of the same gene.</li>
</ul>
<h3>Chromosomes</h3>
<ul>
<li>Chromosomes are rod-shaped structures of <b>DNA + proteins</b>. The DNA wraps around <b>histones</b> for tight packing. Humans have <b>23 pairs</b>.</li>
<li>A replicated chromosome has two identical <b>chromatids</b> joined at the <b>centromere</b>. It has a short arm (<b>p</b>) and a long arm (<b>q</b>), with <b>telomeres</b> at the ends.</li>
<li>Chromosomes are classified by centromere position:
<ul><li><b>Metacentric:</b> centromere in the exact middle; p = q.</li>
<li><b>Submetacentric:</b> centromere slightly off-centre; p a little shorter than q.</li>
<li><b>Acrocentric:</b> centromere very near the end; very small p arm.</li>
<li><b>Telocentric:</b> centromere at the end; no p arm.</li></ul></li>
</ul>
<h3>Key vocabulary</h3>
<ul>
<li><b>Genotype:</b> the alleles present (e.g. Tt). <b>Phenotype:</b> the observable trait (e.g. tall).</li>
<li><b>Homozygous:</b> two identical alleles (TT or tt). <b>Heterozygous:</b> two different alleles (Tt).</li>
<li><b>Dominant</b> (capital letter): shows whenever it is present. <b>Recessive</b> (lower case): only shows when homozygous.</li>
</ul>
<h3>Mendel's three laws</h3>
<ol>
<li><b>Law of dominance:</b> in a heterozygote, one allele (dominant) is expressed and the other (recessive) is hidden.</li>
<li><b>Law of segregation:</b> the two alleles of each gene <b>separate during gamete formation</b>, so each gamete carries one allele and offspring inherit one allele from each parent.</li>
<li><b>Law of independent assortment:</b> alleles of <b>different genes</b> separate independently of each other during gamete formation.</li>
</ol>
<h3>Monohybrid cross (one gene)</h3>
<p>Purple PP × white pp → F1 all <b>Pp</b> (purple). Then F1 × F1 (Pp × Pp) → <b>1 PP : 2 Pp : 1 pp</b>, giving a phenotype ratio of <b>3 purple : 1 white</b>. Mendel's actual counts were 705 purple : 224 white, which is about 3:1.</p>
<h3>Dihybrid cross (two genes)</h3>
<p>RRYY (round yellow) × rryy (wrinkled green) → F1 all RrYy. F1 × F1 gives 4 gamete types (RY, Ry, rY, ry) and a <b>9 : 3 : 3 : 1</b> ratio: 9 round yellow, 3 round green, 3 wrinkled yellow, 1 wrinkled green.</p>
<h3>Types of dominance</h3>
<ul>
<li><b>Complete dominance:</b> the heterozygote looks like the dominant parent, so F2 is <b>3:1</b>.</li>
<li><b>Incomplete dominance:</b> the heterozygote is a blend, e.g. red CᴿCᴿ × white CᵂCᵂ gives pink CᴿCᵂ. F2 is <b>1 red : 2 pink : 1 white</b>.</li>
</ul>
`,
figs: [["gen-chromosome-types","Chromosome types by centromere position"],["gen-mendel-laws","Mendel's laws"],["gen-segregation","Applying the law of segregation (Tt × Tt)"],["gen-dominance","Complete vs incomplete dominance"],["gen-dihybrid","Dihybrid cross: 9:3:3:1"]]
},
{
id: "pedigree", title: "Pedigree analysis", short: "Pedigrees",
notes: `
<h3>What is a pedigree?</h3>
<p>A pedigree is a diagram, like a family tree, that shows the genotypes and phenotypes of individuals across generations. It is used to work out how a trait is inherited and who might be a carrier.</p>
<h3>Symbols</h3>
<ul>
<li><b>Square</b> = male; <b>circle</b> = female.</li>
<li><b>Shaded</b> = affected (shows the trait). <b>Unshaded</b> = unaffected.</li>
<li><b>Half-shaded</b> or a dot in the middle = <b>carrier</b> (heterozygous).</li>
<li>A horizontal line between a male and a female = <b>mating</b>. A vertical line down to a horizontal bar = their <b>offspring</b>.</li>
<li>Generations are numbered with <b>Roman numerals</b> (I, II, III), and individuals within a generation with numbers (II-1, II-2…).</li>
</ul>
<h3>Reading the pattern</h3>
<ul>
<li><b>Autosomal recessive</b> (e.g. cystic fibrosis): it can <b>skip generations</b>. Two unaffected (carrier) parents can have an affected child, and males and females are affected about equally. Carrier × carrier (Aa × Aa) gives a <b>25%</b> chance of an affected child.</li>
<li><b>Autosomal dominant:</b> it doesn't skip generations, and every affected child has at least one affected parent.</li>
<li><b>X-linked recessive</b> (e.g. haemophilia, colour blindness): <b>mostly males</b> are affected. It is passed through <b>carrier mothers</b>, and an affected father can't pass it to his sons (he gives them his Y).</li>
</ul>
<h3>Worked tips</h3>
<ul>
<li>If two unaffected parents have an affected child, the trait is <b>recessive</b> and both parents must be <b>carriers</b>.</li>
<li>For an X-linked cross, write the alleles on the X: e.g. carrier mother XᴴXʰ × normal father XᴴY gives XᴴXᴴ, XᴴXʰ (carrier daughter), XᴴY and <b>XʰY (affected son)</b>.</li>
</ul>
`,
figs: [["ped-symbols","Pedigree symbols"],["ped-cf","Sample pedigree: cystic fibrosis"]]
},
{
id: "mutations", title: "Mutations", short: "Mutations",
notes: `
<h3>What is a mutation?</h3>
<p>A <b>mutation</b> is a change in the DNA sequence. It can be small (one nucleotide) or large (whole chromosomes).</p>
<ul>
<li><b>Spontaneous</b> mutations occur naturally, e.g. errors in DNA replication or non-disjunction in meiosis.</li>
<li><b>Induced</b> mutations are caused by <b>mutagens</b>: radiation, chemicals or viruses.</li>
</ul>
<h3>Gene (point) mutations: change in one gene or nucleotide</h3>
<ul>
<li><b>Substitution:</b> one base is swapped for another, which changes one codon. It might give the wrong amino acid (missense), no change (silent, because the code is degenerate) or an early stop codon. Example: <b>sickle cell</b>, where glutamic acid is replaced by valine.</li>
<li><b>Insertion:</b> an extra base is added.</li>
<li><b>Deletion:</b> a base is removed.</li>
<li>Insertions and deletions cause a <b>frameshift</b>: every codon after the change is read differently, so they are usually more harmful than a substitution.</li>
</ul>
<h3>Chromosomal mutations: change in chromosome structure or number</h3>
<p>Changes in <b>structure</b> (the four types):</p>
<ul>
<li><b>Deletion:</b> part of a chromosome is lost (ABCDEF → ACDEF).</li>
<li><b>Duplication:</b> part of a chromosome is copied, giving extra copies of a gene (ABCDEF → ABBCDEF).</li>
<li><b>Inversion:</b> a piece breaks off and reattaches in <b>reverse order</b> (ABCDEF → AEDCBF).</li>
<li><b>Translocation:</b> pieces are exchanged between <b>non-homologous</b> (different) chromosomes.</li>
</ul>
<p>Changes in <b>number</b>: <b>aneuploidy</b> (one extra or missing chromosome, e.g. Down syndrome, Turner syndrome) and <b>polyploidy</b> (whole extra sets).</p>
`,
figs: [["mut-chart","Classification of mutations"],["mut-point","Point mutations: substitution, insertion, deletion"],["mut-chromosomal","Chromosomal mutations"]]
},
{
id: "diseases", title: "Genetic diseases", short: "Genetic diseases",
notes: `
<h3>Four types of genetic disease</h3>
<ol>
<li><b>Single gene:</b> a mutation in one gene (haemophilia, sickle cell, CF, PKU).</li>
<li><b>Chromosomal:</b> abnormal chromosome structure or number (Down, Turner).</li>
<li><b>Multifactorial:</b> several genes plus environmental factors.</li>
<li><b>Mitochondrial:</b> a mutation in mitochondrial (non-chromosomal) DNA.</li>
</ol>
<h3>Haemophilia (X-linked recessive)</h3>
<ul>
<li>An inherited bleeding disorder caused by a lack of clotting factors. <b>Haemophilia A</b> (classic, 80–85% of cases) involves <b>factor VIII</b>. <b>Haemophilia B</b> (Christmas disease) involves <b>factor IX</b>.</li>
<li>It mainly affects <b>males</b> and is passed on by <b>female carriers</b>. About 80% of cases are hereditary; about 20% are acquired (autoimmune or spontaneous mutation).</li>
<li>Carrier XᴴXʰ × normal XᴴY gives a <b>50% chance each son is affected</b> and a 50% chance each daughter is a carrier.</li>
<li>Affected XʰY × carrier XᴴXʰ gives 25% each of: carrier female, affected female, normal male, affected male.</li>
</ul>
<h3>Sickle cell anaemia (autosomal recessive)</h3>
<ul>
<li>Caused by a mutation in the <b>β-globin gene on chromosome 11</b> that produces haemoglobin S.</li>
<li>A <b>single base substitution</b> causes a single amino acid change: <b>glutamic acid → valine</b>.</li>
<li>Red blood cells become <b>rigid, sticky and sickle-shaped</b>. They get stuck in small vessels (causing pain and blocking oxygen supply) and die early (causing anaemia).</li>
</ul>
<h3>Cystic fibrosis (autosomal recessive)</h3>
<ul>
<li>Caused by a mutation in the <b>CFTR gene</b>. The most common allele is missing 3 bases, so the amino acid <b>phenylalanine is missing</b>.</li>
<li>CFTR normally works as a <b>chloride ion channel</b>. The faulty protein can't reach the membrane, so chloride isn't transported, causing <b>thick, sticky mucus</b>.</li>
<li>The mucus blocks the airways (frequent lung infections), clogs the pancreas (stopping digestive enzymes reaching the gut) and affects the liver, sinuses and reproductive system.</li>
</ul>
<h3>Phenylketonuria (PKU) (autosomal recessive)</h3>
<ul>
<li>Caused by a deficiency of the enzyme <b>phenylalanine hydroxylase</b>, so <b>phenylalanine can't be converted to tyrosine</b>.</li>
<li>Phenylalanine builds up and is diverted into making <b>phenylketones</b> (found in urine, with a "mousy" odour). Less tyrosine means less melanin (pale skin, hypopigmentation) and less dopamine.</li>
<li>Untreated, it can cause intellectual disability, seizures and eczema. <b>Early diagnosis and a low-phenylalanine diet</b> prevent severe neurological damage.</li>
</ul>
<h3>Down syndrome (chromosomal, trisomy 21)</h3>
<ul>
<li>An <b>extra copy of chromosome 21</b>, which may be full or partial, coming from either parent.</li>
<li>Usually caused by <b>non-disjunction</b> (chromosomes failing to separate). Risk is linked to maternal age, but about 80% of children with Down syndrome are born to mothers under 35, because younger women have more babies. Translocation Down syndrome shows <b>no</b> link with maternal age.</li>
<li>Occurs in all races and income levels.</li>
</ul>
<h3>Turner syndrome (chromosomal, 45,X)</h3>
<ul>
<li>A female is <b>missing one X chromosome</b>.</li>
<li>Usually caused by <b>non-disjunction</b>, where the sex chromosomes fail to separate during sperm or egg formation.</li>
<li>Features can include a webbed neck, low hairline, wide-set nipples, swollen hands and feet, and short stature.</li>
</ul>
`,
figs: [["dis-haemophilia","Haemophilia carrier Punnett square"],["dis-sickle","Sickle cell: amino acid change"],["q-sickle","Sickle vs normal red blood cells"],["dis-cf","Cause of cystic fibrosis"],["dis-pku","PKU: blocked phenylalanine → tyrosine"]]
},
{
id: "practicals", title: "Practicals: DNA model, calibration curve, microscopy", short: "Practicals",
notes: `
<h3>Practical 1: Building a DNA model</h3>
<ul>
<li>Built with a model kit and paper origami to explore DNA structure.</li>
<li>Check: base pairs are correct (<b>A–T, C–G</b>), there are two strands with a sugar–phosphate backbone, and the strands are antiparallel and twist into a double helix.</li>
</ul>
<h3>Practical 2: Starch calibration curve</h3>
<ul>
<li><b>Aim:</b> find the concentration of an unknown starch solution using a spectrophotometer (colorimeter).</li>
<li><b>Principle:</b> iodine (dissolved in potassium iodide, I₂/KI) slips inside the <b>helix of amylose</b> to form a <b>blue-black complex</b> that absorbs light at about <b>600 nm</b>. More starch means a darker colour and a higher absorbance.</li>
<li><b>Calibration (standard) curve:</b> measure solutions of <b>known</b> concentration, then plot <b>concentration on the x-axis</b> (independent variable) and <b>absorbance on the y-axis</b> (no units). <b>Beer's law</b> says this should be a <b>straight line</b>.</li>
<li><b>Reading the unknown:</b> measure its absorbance, draw a horizontal line from the y-axis to the curve, then drop a vertical line to the x-axis and read off the concentration.</li>
<li><b>Method points:</b> make a dilution series; tube 1 is the <b>blank</b> (0% starch + iodine), used to <b>zero / calibrate</b> the machine. Add one drop of I₂/KI to each tube and mix. Load 3 ml into a cuvette, <b>don't touch the clear sides</b> and wipe it with a lint-free cloth. Set the wavelength to 600 nm.</li>
<li><b>Safety:</b> wear eye protection when dispensing iodine.</li>
</ul>
<table><tr><th>Tube</th><th>Starch added (cm³)</th><th>Concentration</th></tr>
<tr><td>1 (blank)</td><td>0</td><td>0%</td></tr><tr><td>2</td><td>0.5</td><td>0.05%</td></tr><tr><td>3</td><td>1</td><td>0.10%</td></tr><tr><td>4</td><td>2</td><td>0.20%</td></tr><tr><td>5</td><td>3</td><td>0.30%</td></tr><tr><td>6</td><td>7</td><td>0.70%</td></tr><tr><td>7</td><td>10</td><td>1.00%</td></tr><tr><td>8</td><td>Unknown</td><td>?</td></tr></table>
<h3>Practical 3: Microscopy & biological drawing</h3>
<ol>
<li>Start on the <b>lowest-power objective</b> and centre the specimen.</li>
<li>Use the <b>coarse focus</b> to bring the lens just above the slide, then the <b>fine focus</b> until the image is sharp.</li>
<li>Move up to higher magnifications. If you lose focus, go back down, re-centre and refocus.</li>
</ol>
<p><b>Biological drawing rules</b> (general guidance; open the drawing skills handbook on Moodle for your module's exact rules): use a <b>sharp pencil</b>; draw clear, <b>continuous lines with no shading or sketchy lines</b>; keep the drawing large and in proportion; use <b>ruled label lines</b> that don't cross or have arrowheads, with labels to the side; add a <b>title</b> and the <b>magnification</b>.</p>
<p><b>Worksheet example: red blood cells (cell level, circulatory system).</b> They are biconcave (more surface area for gas exchange), have no nucleus (more room for haemoglobin), have a thin membrane (faster diffusion) and are small and flexible (to fit through capillaries).</p>
`,
figs: []
}
];
