// Role: authored data backing the Stage 3c Track 2 class-level exclusion ("block") claims entered in
//   corpora/dg/dg-data.js, and the trigger phrases build/check-reservoir.mjs scans other claims'
//   statements against. Pure data; imports nothing.
// Contract: BLOCKS is a fixed array of [blockRef, killedRef, label, scopeStatement, triggers]
//   tuples, one per reservoir entry that carries an explicit "Block scope:" sentence in its Stage 3c
//   Track 1 evidence statement.
"use strict";
// Stage 3c Track 2: class-level exclusion ("block") claims, one per reservoir entry that carries an
// explicit "Block scope:" sentence in its evidence statement (21 of the 107 Track 1 entries). Each
// block claim is supported by its corresponding evidence claim (ev.<killedRef>), an honest snapshot
// of that evidence claim's own earned grade, so the block's own earned grade is computed, not
// declared blind.
// `triggers`: short substrings (case-insensitive) build/check-reservoir.mjs scans other claims'
// statements for, as its advisory scope-pattern match. Hand-picked from each block's own scope
// sentence, the same transparent-substring approach the rest of this build already uses (no NLP, no
// scoring, just a deterministic literal-substring check, matching the "pattern matching" the prompt
// names rather than a semantic classifier this kernel has no basis to claim).
// [blockRef, killedRef, label, scopeStatement, triggers]
export const BLOCKS = [
["block.er-cc001", "dead.er-cc001-gamma-z0-stabilization", "gamma(z_0)-inheritance-alone stabilization block",
 "any mechanism relying on the gamma(z_0) inheritance alone to stabilize the Karch-Randall radion is dead; combined mechanisms (gamma plus Casimir backreaction, gamma plus instanton, gamma plus flux quantization) remain open as separate sorries.",
 ["gamma(z_0)", "karch-randall radion"]],

["block.er-cc002", "dead.er-cc002-goldberger-wise", "propagating-bulk-scalar block",
 "any mechanism relying on a propagating bulk scalar field with kinetic terms is forbidden by the topological-bulk axiom (the framework's Tier 4 commitment to a topological SO(2,4) Chern-Simons bulk with zero local degrees of freedom).",
 ["propagating bulk scalar"]],

["block.er-mm001", "dead.er-mm001-antisymmetry-vanishing", "MM antisymmetry-cancellation block (point block)",
 "the specific antisymmetry-plus-index-symmetry cancellation argument for the MM Dirac matrix's 30x30 primary-primary block is dead; the block structure must be treated as pseudo-differential, not ultra-local, for any future MM Section VI analysis.",
 ["antisymmetry-plus-index-symmetry", "30x30 primary-primary"]],

["block.er-mm002-local-algebraic-ultralocality", "dead.er-mm002-local-algebraic-redefinition", "local-algebraic-ultralocality block",
 "any mechanism relying on local algebraic canonical transformations to achieve ultra-locality in the MM Dirac matrix is structurally obstructed (the No-Go Lemma: local conjugation preserves principal-symbol operator order, and the required cancellation forces a contradiction with ER-MM-001's nonvanishing result for any invertible transformation).",
 ["local algebraic canonical transformation", "local algebraic redefinition"]],

["block.er-mm003", "dead.er-mm003-pointwise-schur", "pointwise-Schur-determinant block (point block)",
 "the pointwise coordinate-space determinant-factorization route for the MM Dirac matrix is obstructed; only the operator-theoretic principal-symbol reformulation survives as a live route.",
 ["pointwise schur", "coordinate-space determinant"]],

["block.er-mix001", "dead.er-mix001-dbi-pi-chi-mixing", "DBI-pi-chi tree-level-mixing block",
 "any rescue requiring the radion's F_Q coupling to flow through the DBI brane-bending mode without an additional bilinear mixing source (beyond the induced-metric kinematic identification alone) is dead.",
 ["dbi brane-bending mode", "pi-chi"]],

["block.er-mix002", "dead.er-mix002-einstein-cartan-torsion", "pure-F-R(omega)-torsion-elimination block",
 "any rescue asserting the radion kinetic term in MMSW gravity emerges from torsion-induced Einstein-Cartan reduction of a pure F(rho)R(omega) coupling is dead (the Palatini scalar-tensor ghost); the Weyl-rescaling route to the Einstein frame is the correct mechanism.",
 ["einstein-cartan reduction", "pure f r(omega)"]],

["block.er-mix003", "dead.er-mix003-naive-scalar-kinetic", "naive-(D-phi)-squared-kinetic-term block",
 "any MMSW or related gauge-theoretic gravity construction asserting a propagating scalar via a direct (D phi)^2 operator, without auxiliary-field structure or an alternative principled mechanism, is dead (the operator vanishes identically by gauge-fiber Hodge antisymmetry).",
 ["(d phi)^dagger(d phi)", "(d phi)^2 operator"]],

["block.er-wd001", "dead.er-wd001-sub-chandra-wd-detonation", "sub-Chandrasekhar-detonation-via-framework-catalysis block",
 "any sub-Chandrasekhar Type Ia supernova trigger mechanism routing through framework-internal geometric catalysis is dead; sub-Chandra phenomenology remains handled by standard double-detonation astrophysics, outside the framework's explanatory domain.",
 ["sub-chandrasekhar", "geometric catalysis"]],

["block.er-cosm001", "dead.er-cosm001-integrated-f-buildup", "DLRO-vs-ODLRO-conflation block (LINT-DLR-1)",
 "any cosmological mechanism conflating classical clustering (DLRO density gradients, Bragg-peak ordering) with macroscopic ODLRO long-range phase coherence is dead; codified into LINT-DLR-1.",
 ["dlro", "classical structure formation"]],

["block.er-cosm002", "dead.er-cosm002-trace-channel-gradient", "O(N)-trace-channel-vs-AM-barrier block (SL-AM-1)",
 "any cosmological mechanism using an extensively-scaling O(N) operator to bridge AM topological barriers is dead; only super-extensive O(N^2) operators sourced by ODLRO can engage the pole structure. Codified into SL-AM-1.",
 ["trace channel", "am topological barrier"]],

["block.er-cosm003", "dead.er-cosm003-cosmological-averaging", "rare-ODLRO-domain-averaging block",
 "any cosmological-averaging mechanism aggregating rare ODLRO domains (e.g. neutron-star superfluid cores at ~1e-46 of the Hubble volume) into a cosmological-scale equation-of-state contribution is dead.",
 ["cosmological averaging", "rare odlro"]],

["block.er-cosm004", "dead.er-cosm004-intra-sector-slow-roll", "slow-roll-at-m-sim-H0 block",
 "any cosmological mechanism introducing or repurposing a slow-rolling scalar at m ~ H_0 within the framework's radion mass window ([1 meV, 100 GeV], per F13.2 and K8) is dead, falsified by at least 30 orders of magnitude.",
 ["slow-rolling scalar at m ~ h_0", "slow-roll quintessence"]],

["block.er-wgc001-l2-vs-linfinity", "dead.er-wgc001-hydrodynamic-bkm", "L2-vs-Linfinity Sobolev block (LINT-L2-1)",
 "any framework-internal mechanism proposing to recover a killed pointwise L^infinity amplitude-bound derivation by substituting an L2 variance bound is dead (the Sobolev embedding H^1 does not embed in L^infinity in 3D; L2 bounds cannot constrain pointwise suprema). Codified into LINT-L2-1, SL-VC-1.",
 ["l2 variance bound", "l^infinity amplitude"]],

["block.er-de001", "dead.er-de001-bh-mechanism-evolving-de", "BH-bulk-exhaust-as-DE-source block (SL-BR-1)",
 "any cosmological-evolution mechanism aggregating framework-internal degenerate-object bulk-exhaust channels (black holes, failed supernovae, geometric collapse) into an effective Lambda(t) is dead; bulk-routing is structurally cooling and stabilizing, not an energy-injection source. Codified into SL-BR-1.",
 ["bulk-exhaust channel", "effective lambda(t)"]],

["block.er-ht001", "dead.er-ht001-nede-thermal-de", "coherent-thermal-pumping-above-MeV block",
 "any cosmological-evolution mechanism requiring coherent thermal pumping of a hot sector at T >= MeV is dead; the v3.9 generalized cosmological plasma-exclusion structural lesson pins the coherence fraction at f approximately zero in every unbound relativistic plasma environment.",
 ["coherent thermal pumping", "hot sector at t"]],

["block.er-de002", "dead.er-de002-vacuum-driven-reheating", "reversed-bulk-routing-direction block",
 "any cosmological mechanism operating by reversing the framework's mandatory brane-to-bulk exhaust direction is dead; bulk-routing is exhaust, never injection (SL-BR-1), and reversal violates the mandatory topological-bulk K1/K6 structure.",
 ["reversing the framework's", "brane-to-bulk exhaust direction"]],

["block.er-de003", "dead.er-de003-quantum-foam-de", "trans-Planckian-vacuum-mode-energy-extraction block",
 "any cosmological evolving-dark-energy mechanism deriving energy from trans-Planckian vacuum-mode dynamics is dead; trans-Planckian modes are kinematically protected per K18, and the proposal separately violates T1.3.",
 ["trans-planckian vacuum mode", "trans-planckian vacuum-mode dynamics"]],

["block.er-de004", "dead.er-de004-multi-modulus-slow-roll", "multi-modulus-slow-roll-in-AM-locked-branch block (LINT-DE-2)",
 "any multi-field slow-roll proposal within the AM-locked branch, on moduli spaces with N much greater than 1 light scalars, is dead by Distance-Conjecture confinement. Codified into LINT-DE-2. Does not apply on Path B, where the active modulus is a single light scalar parametrically separated from the hairon condensate.",
 ["multi-modulus slow-roll", "am-locked branch"]],

["block.er-de005", "dead.er-de005-hairon-quintessence", "hairon-dual-role block (LINT-DE-3)",
 "any mechanism promoting the microscopic constituents of a topological vacuum substrate (hairons) to additive dynamical matter, while retaining the same static vacuum identification, is dead. Codified into LINT-DE-3.",
 ["hairon-quintessence", "hairons to additive"]],

["block.er-de006", "dead.er-de006-hairon-multi-field", "multi-field-hairon-quintessence block",
 "any multi-field framework-internal hairon-quintessence proposal is dead for the same categorical reason as the single-field case (LINT-DE-3), sharpened by cross-coupling destabilization of the topological substrate itself.",
 ["multi-field hairon-quintessence", "multi-field hairon"]],
];
