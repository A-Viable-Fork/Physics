// Role: the dg kernel store: Stage 1 tier commitments plus Stage 2 structure, bare. Tier 0 axioms, Tier 1-2 standard results, Tier 2.5 observations, Tier 3 adopted conjectures (Stage 1); CC-1 with its v4.14-to-v4.16 supersession, K-constraints, structural proofs, functions, contracts, predictions, the branch fork, and the sorry ledger (Stage 2), atomized one commitment per claim from the trellis. The exclusion reservoir, all grounding supports, and all checking records are Stage 3, not entered here.
// Contract: exports STORE = { store_id, claims, links, supersessions }. Pure data; imports nothing.
// Invariant: every claim is declared at or below what it earns with no support links or checking records: everything floors at asserted, including the two branch commitments (their kind ceiling is corroborated, not constitutive; a bare corroborated declaration was planted and confirmed declined by the real gate with GM-ABOVE, per the session notes, so both declare asserted honestly rather than the ceiling the Stage 2 prompt anticipated). Statement text is the trellis own prose, atomized to one commitment per claim; where atomization forced a judgment call the full trellis context is quoted in extensions.trellis_context. depends-on links wire provenance brackets, parent relations, and branch entanglement to already-entered claims only. Contract/mechanism verdicts (Confirmed through Plausible) ride in extensions.verdict, read by periphery, never the gate, per docs/governing-conventions.md.
"use strict";

const STORE = {
  "store_id": "dg",
  "claims": [
    {
      "ref": "t0.1",
      "kind": "axiom",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "constitutive",
      "statement": "T0.1: External Realism. An external world exists independent of observation. Physical systems have definite properties whether or not they are measured. The measurement problem in quantum mechanics is a problem of description, not of ontology."
    },
    {
      "ref": "t0.2",
      "kind": "axiom",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "constitutive",
      "statement": "T0.2: Consistency. The external world behaves consistently. Identical initial conditions produce identical outcomes (up to quantum indeterminacy, which is itself consistent). The laws of physics do not change with location, time, or observer."
    },
    {
      "ref": "t0.3",
      "kind": "axiom",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "constitutive",
      "statement": "T0.3: Describability. The structure of the external world can be captured by mathematical formalism. Physical theories are maps; the territory exists independently of the map. The effectiveness of mathematics in physics reflects genuine structural correspondence."
    },
    {
      "ref": "t0.4",
      "kind": "axiom",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "constitutive",
      "statement": "T0.4: Materialism. All physical phenomena have physical causes. Causal closure is complete. \"Spooky\" correlations (entanglement, nonlocality) are real but do not transmit information superluminally and do not violate T0.2."
    },
    {
      "ref": "t1.1",
      "kind": "standard-result",
      "source_id": "lit.standard-physics-t1t2",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "T1.1: Energy Conservation. Energy is conserved in every closed system. Energy can change form but cannot be created or destroyed. Any calculation producing energy from nothing is wrong."
    },
    {
      "ref": "t1.2",
      "kind": "standard-result",
      "source_id": "lit.standard-physics-t1t2",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "T1.2: Second Law. Entropy of an isolated system never decreases. Macroscopic processes are irreversible. Time has a thermodynamic arrow."
    },
    {
      "ref": "t1.3",
      "kind": "standard-result",
      "source_id": "lit.standard-physics-t1t2",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "T1.3: Finite Energy Budgets. Physical processes cannot produce trans-Planckian energy outputs from sub-Planckian inputs. Any E = rho x V calculation yielding energies exceeding the rest mass of the progenitor system is automatically suspect. This is the Volume Bug filter: it catches errors of the form \"multiply a Planck-scale energy density by a macroscopic volume.\""
    },
    {
      "ref": "t1.4",
      "kind": "standard-result",
      "source_id": "lit.standard-physics-t1t2",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "T1.4: Information Processing Costs Energy. Landauer's principle: erasing one bit of information dissipates at least kT ln 2 of energy. Information processing is a physical process subject to T1.1 and T1.2. The vacuum, if it processes information, pays these costs."
    },
    {
      "ref": "t1.5",
      "kind": "standard-result",
      "source_id": "lit.standard-physics-t1t2",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "T1.5: Null Energy Condition. For any null vector k^mu, T_{mu nu} k^mu k^nu >= 0 for all physically realizable matter. Violations signal ghost instabilities (kinetic term sign flip), vacuum decay, or missing physics."
    },
    {
      "ref": "t1.6",
      "kind": "standard-result",
      "source_id": "lit.standard-physics-t1t2",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "T1.6: Causal Locality. Information propagates at most at c. No instantaneous global effects. A theory that requires a macroscopic spatially extended system to respond as a single monolithic quantum gate violates this. This is the filter that catches naive Margolus-Levitin applications."
    },
    {
      "ref": "t2.1",
      "kind": "standard-result",
      "source_id": "lit.standard-physics-t1t2",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "T2.1: Unitarity. The S-matrix is unitary. Probability is conserved. No information is destroyed in principle (though it may become practically inaccessible)."
    },
    {
      "ref": "t2.2",
      "kind": "standard-result",
      "source_id": "lit.standard-physics-t1t2",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "T2.2: Ghost Freedom. All propagating degrees of freedom have positive-definite kinetic terms. Negative kinetic energy (ghosts) renders the vacuum unstable to runaway pair production. Any construction must demonstrate ghost freedom through explicit DOF counting."
    },
    {
      "ref": "t2.3",
      "kind": "standard-result",
      "source_id": "lit.standard-physics-t1t2",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "T2.3: Correct DOF Counting. The number of propagating degrees of freedom must be established by rigorous Hamiltonian constraint analysis (Dirac-Bergmann algorithm), not by counting fields. Constrained systems (gauge theories, gravity) always have fewer DOF than naive field counting suggests."
    },
    {
      "ref": "t2.4",
      "kind": "standard-result",
      "source_id": "lit.standard-physics-t1t2",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "T2.4: Diffeomorphism Invariance. The laws of physics take the same form in all coordinate systems. Any coupling to the gravitational sector must be expressible in a generally covariant form. State-dependent couplings (such as v = v(F_Q)) require explicit demonstration that F_Q transforms as a scalar under diffeomorphisms."
    },
    {
      "ref": "t2.5",
      "kind": "standard-result",
      "source_id": "lit.standard-physics-t1t2",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "T2.5: GR Recovery. Any modification of gravity must reduce exactly to General Relativity in the appropriate limit (weak field, incoherent matter, low density). The gravitational constant G_N must be constant and universal in this limit."
    },
    {
      "ref": "t2.6",
      "kind": "standard-result",
      "source_id": "lit.precision-gravity-tests-t2-6",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "T2.6: Observational Compatibility. Existing precision measurements (NICER radii, LIGO tidal deformability, GW170817, Shapiro delay masses, Cas A cooling, RHIC viscosity, short-range gravity tests, atomic clock constraints) must be respected. Predictions contradicting established observations at the relevant precision constitute kills."
    },
    {
      "ref": "t2.7",
      "kind": "standard-result",
      "source_id": "lit.standard-physics-t1t2",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "T2.7: Conformal Invariance of Gauge Kinetic Terms. The Maxwell action sqrt(-g) F^{mu nu} F_{mu nu} is conformally invariant in 4D. This is a theorem of 4D field theory, independent of any specific model. Any gauge field localized on a 3-brane in AdS_5 has a tree-level coupling constant independent of brane position, because the AdS_5 warp factor is a conformal rescaling of the 4D induced metric. This structural boundary establishes that the framework cannot modify electromagnetic couplings through any tree-level geometric channel."
    },
    {
      "ref": "t2.8",
      "kind": "standard-result",
      "source_id": "lit.standard-physics-t1t2",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "T2.8: Higgs Identity. Different Higgs fields in different sectors of the theory must not be conflated. The SO(1,4) gravitational Higgs (which sets M_{Pl,eff}) is the gravitational symmetry-breaking scale. It couples to the electron mass, Bohr radius, and pycnonuclear screening at zero strength at tree level. This filter catches the most common error in external analyses of the framework."
    },
    {
      "ref": "t2.9",
      "kind": "standard-result",
      "source_id": "lit.standard-physics-t1t2",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "T2.9: Semiclassical Causality. The state-dependent coupling v = v(F_Q) must preserve the causal structure of spacetime. The matter sector evolves via standard linear quantum mechanics. The gravitational background responds to the quantum state through semiclassical backreaction, analogous to G_{mu nu} = 8 pi <T_{mu nu}>_ren. The no-signaling theorem for linear QM guarantees that F_Q evaluated from the local reduced density matrix is invariant under spacelike-separated operations. Any construction where the metric depends on the un-traced global density matrix violates special relativity via the Gisin-Polchinski theorem and is rejected. The coupling v(F_Q) is evaluated from the local reduced state on the causal diamond; Donnelly-Freidel edge modes ensure this evaluation is foliation-independent but do not independently enforce causality. All effective action computations deriving the state-dependent coupling must employ the Schwinger-Keldysh Closed Time Path (CTP) formalism, which natively enforces retarded boundary conditions (G_R(x,y) = 0 for spacelike separations) through the forward/backward time-branch structure. The coincidence-limit reduction of the heat kernel to the a_4(x) contact term renders the coupling strictly local. This is a theorem of the construction, not an additional assumption."
    },
    {
      "ref": "b1",
      "kind": "observation",
      "source_id": "lit.standard-open-problems-physics",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "B1: Singularities. GR predicts geodesic incompleteness at black hole interiors and the Big Bang. Physical quantities (density, curvature) diverge. This signals the breakdown of the classical theory."
    },
    {
      "ref": "b2",
      "kind": "observation",
      "source_id": "lit.desi-dr1-dr2-bao",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "B2: Dark Energy. The cosmological constant Lambda exists and drives accelerating expansion. Its value (~10^-122 in Planck units) is unexplained. DESI 2024-2025 BAO data (DR1 + DR2) prefers evolving dark energy (w0 ~ -0.7, wa ~ -1.0) at 2.8-sigma to 4.2-sigma over static Lambda-CDM, depending on the supernovae compilation utilized (2.8-sigma floor from DESI + CMB + Pantheon+; 4.2-sigma ceiling from DESI + CMB + DESY5), suggesting Lambda may evolve."
    },
    {
      "ref": "b3",
      "kind": "observation",
      "source_id": "lit.standard-open-problems-physics",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "B3: Dark Matter. 85% of the gravitational mass of the universe is unaccounted for by the Standard Model. Rotation curves, lensing, CMB anisotropy, and large-scale structure all require it. Its particle identity is unknown."
    },
    {
      "ref": "b4",
      "kind": "observation",
      "source_id": "lit.standard-open-problems-physics",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "B4: Black Hole Information Paradox. Hawking radiation appears to destroy information (violating T2.1), yet the horizon is locally smooth. Resolution requires understanding the microstructure of horizons."
    },
    {
      "ref": "b5",
      "kind": "observation",
      "source_id": "lit.standard-open-problems-physics",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "B5: Cosmological Constant Problem. Quantum field theory predicts a vacuum energy ~10^120 times larger than observed. The cancellation mechanism is unknown."
    },
    {
      "ref": "b6",
      "kind": "observation",
      "source_id": "lit.standard-open-problems-physics",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "B6: Hierarchy Problem. The electroweak scale (M_EW ~ 10^2 GeV) is 10^16 times smaller than the Planck scale (M_Pl ~ 10^19 GeV). No mechanism within the SM protects this hierarchy from radiative corrections."
    },
    {
      "ref": "b7",
      "kind": "observation",
      "source_id": "lit.standard-open-problems-physics",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "B7: No Quantum Gravity. The Standard Model and General Relativity are mutually incompatible at energies approaching M_Pl. Perturbative quantization of GR is non-renormalizable."
    },
    {
      "ref": "b8",
      "kind": "observation",
      "source_id": "lit.standard-open-problems-physics",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "B8: Neutrino Masses. Neutrinos have mass (oscillation experiments), but the SM does not predict this. The mass generation mechanism is unknown."
    },
    {
      "ref": "b9",
      "kind": "observation",
      "source_id": "lit.standard-open-problems-physics",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "B9: Matter-Antimatter Asymmetry. The universe is matter-dominated. The SM does not contain sufficient CP violation to produce the observed baryon asymmetry."
    },
    {
      "ref": "b10",
      "kind": "observation",
      "source_id": "lit.standard-open-problems-physics",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "B10: Hubble Tension. Local H0 measurements (~73 km/s/Mpc from distance ladder) disagree with CMB-inferred H0 (~67 km/s/Mpc from Planck) at ~5-sigma."
    },
    {
      "ref": "b11",
      "kind": "observation",
      "source_id": "lit.standard-open-problems-physics",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "B11: sigma8 Tension. Weak lensing surveys measure less matter clustering than Planck CMB predicts, at ~2 to 3-sigma."
    },
    {
      "ref": "b12",
      "kind": "observation",
      "source_id": "corpus.nuclear-astrophysics-anomalies",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "B12: LUNA Screening Anomaly. Enhanced electron screening in d+d fusion in metallic targets exceeds linear Thomas-Fermi predictions by 10 to 30x. Anomaly correlates with conductor/insulator status, not lattice coherence. On-resonance laser stimulation amplifies the effect at specific phonon frequencies."
    },
    {
      "ref": "b13",
      "kind": "observation",
      "source_id": "lit.psr-j0740-6620-j0952-0607",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "B13: Hyperon Puzzle. Standard nuclear physics predicts that hyperons appear in neutron star cores at ~2 rho_0, softening the EOS and limiting M_max to ~1.6 to 1.8 M_sun. Yet pulsars exist at 2.08 M_sun (PSR J0740+6620) and 2.35 M_sun (PSR J0952-0607). Additional stiffness is required."
    },
    {
      "ref": "b14",
      "kind": "observation",
      "source_id": "lit.gw190814-gw230529-ligo-p2300352",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "B14: Lower Mass Gap. Compact objects in the 2.5 to 5 M_sun range are anomalously rare. The gap separates the heaviest neutron stars from the lightest black holes. LIGO O3/O4 detections (GW190814, GW230529) are beginning to populate this region, preferentially from binary/merger channels."
    },
    {
      "ref": "b15",
      "kind": "observation",
      "source_id": "lit.standard-open-problems-physics",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "B15: Failed Supernovae. Some massive stars (~17+ M_sun) appear to vanish without explosion. N6946-BH1 (25 M_sun RSG) produced only a faint ~10^47 erg transient and disappeared, confirmed by JWST. Standard neutrino-driven explosion mechanisms fail for high-compactness cores."
    },
    {
      "ref": "b16",
      "kind": "observation",
      "source_id": "lit.des-y3-cmb-cold-spot",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "B16: CMB Cold Spot. The Eridanus supervoid (20% underdense) aligns with an anomalous CMB cold spot. Standard Lambda-CDM ISW predictions undershoot the observed temperature deficit. DES Y3 data shows 30% weaker lensing from this void."
    },
    {
      "ref": "b17",
      "kind": "observation",
      "source_id": "lit.donadi-et-al-2021-nature-physics",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "B17: The Measurement Problem and the Gran Sasso Falsification. Quantum mechanics lacks a physical criterion separating the unitary regime of superposition from the classical regime of macroscopic definiteness. The Penrose-Diosi (DP) model provides the most physically motivated objective collapse theory, attributing wavefunction reduction to gravitational self-energy of the superposed mass distribution: tau_DP ~ hbar/Delta E_G. However, the standard DP collapse dynamics generate continuous stochastic momentum diffusion on charged particles, producing a calculable spectrum of spontaneous X-ray bremsstrahlung (dGamma/dE ~ 1/E, scaling as R0^-3). In 2021, a dedicated experiment at the Laboratori Nazionali del Gran Sasso (Donadi et al., Nature Physics 2021) using a high-purity germanium detector in the 10 to 100 keV range detected zero anomalous radiation, establishing a lower bound R0 >~ 0.54e-10 m. This is three orders of magnitude above the natural nuclear-scale cutoff (R0 ~ 10^-15 m) required for macroscopic localization, falsifying the parameter-free DP model as formulated in 4D. If gravity induces objective collapse, the energy of state reduction must dissipate through a channel invisible to 4D electromagnetism."
    },
    {
      "ref": "b18",
      "kind": "observation",
      "source_id": "lit.farah-et-al-2026-nature",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "B18: SN 2024afav Chirp Anomaly. The superluminous supernova SN 2024afav (z = 0.0724, Mc ~ -20.7) exhibits a quasi-periodic, accelerating chirp in its post-peak electromagnetic light curve, attributed by Farah et al. (Nature 2026) to Lense-Thirring precession of a misaligned accretion disk around a newborn magnetar (P = 4.2 +/- 0.2 ms, B = 1.6 +/- 0.1e14 G). Seven distinct brightness bumps span 175 days. The temporal intervals between bumps accelerate from 42.4 days to 16.1 days (Phase 0 to +109), consistent with a contracting accretion disk. At Phase +109, the interval abruptly doubles to 32.1 days, producing a >5.8-sigma deviation from the smooth viscous power-law baseline predicted by standard alpha-disk models. This deceleration is coincident with the spectroscopic emergence of lower-ionization [O II] + [Ca II] 7300 A emission and a weakening of early [O III] features. The standard LT model accommodates the gross periodicity but the discontinuous deceleration and the correlated ionization shift remain unexplained. The anomaly is open."
    },
    {
      "ref": "b19",
      "kind": "observation",
      "source_id": "lit.g117-b15a-cas-a-cooling",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "B19: Exotic Stellar Cooling Anomaly. The pulsating white dwarf G117-B15A exhibits a secular period drift P_dot_obs = (5.12 +/- 0.82)e-15 s/s for its 215.2 s fundamental mode, measured over a 50-year baseline. Standard gravothermal models predict P_dot_th ~ 1.25e-15 s/s. The discrepancy corresponds to an anomalous missing luminosity of ~10^32 erg/s. The neutron star in Cassiopeia A exhibits a ~2% to 4% surface temperature decline over a 10 to 18 year Chandra baseline, exceeding modified Urca predictions (~0.2% to 0.3% per decade). Mainstream attributions invoke DFSZ axion emission (m_a cos^2(beta) ~ 17.4 meV) or enhanced Cooper-pair breaking neutrinos. The axion parameter space required for these attributions (g_a-gamma-gamma ~ 1e-11 GeV^-1, g_aee ~ 1e-13) is under severe multi-modal observational pressure."
    },
    {
      "ref": "t3.1",
      "kind": "conjecture-adopted",
      "source_id": "lit.foundational-qg-theory",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "T3.1: String/M-Theory as Consistent UV Completion. String theory provides a mathematically consistent framework for quantum gravity. Its landscape of solutions may or may not describe our universe, but its internal consistency is well-established."
    },
    {
      "ref": "t3.2",
      "kind": "conjecture-adopted",
      "source_id": "lit.vafa-2005-swampland",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "T3.2: Swampland Constraints. Not all effective field theories can be UV-completed into quantum gravity. The Swampland program (Vafa 2005, Ooguri-Vafa 2007) identifies constraints that separate the \"landscape\" (consistent) from the \"swampland\" (inconsistent). Key conjectures: Distance Conjecture (traversing infinite distances in moduli space produces infinite towers of exponentially light states), TCC (cosmological fluctuations cannot be trans-Planckian), dS Conjecture (stable de Sitter vacua may not exist in quantum gravity)."
    },
    {
      "ref": "t3.3",
      "kind": "conjecture-adopted",
      "source_id": "lit.foundational-qg-theory",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "T3.3: Holographic Principle. The degrees of freedom of a region of space scale with its boundary area, not its volume (Bekenstein bound, Ryu-Takayanagi formula). The AdS/CFT correspondence provides the most rigorously established non-perturbative formulation of quantum gravity."
    },
    {
      "ref": "t3.4",
      "kind": "conjecture-adopted",
      "source_id": "lit.dvali-2010-species-scale",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "T3.4: Species Scale is Dynamical. The effective UV cutoff of quantum gravity depends on the spectrum of light states accessible at a given point in moduli space (Dvali 2010, van de Heisteeg-Vafa-Wiesner-Wu 2023). The Species Scale responds to the state of the matter sector through the spectrum it counts."
    },
    {
      "ref": "t3.5",
      "kind": "conjecture-adopted",
      "source_id": "lit.montero-vafa-valenzuela-2023-arxiv-2205-12293",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "T3.5: Dark Dimension Scenario. One mesoscopic extra dimension with radius R_Dark ~ micron produces a KK tower beginning at m_KK ~ 1e-3 eV (Montero, Vafa, Valenzuela 2023). The fundamental 5D Planck mass is M_5 ~ 2.6e8 GeV. This scenario connects the cosmological constant to the size of the extra dimension via R_Dark ~ Lambda^(-1/4)."
    },
    {
      "ref": "t3.6",
      "kind": "conjecture-adopted",
      "source_id": "corpus.addazi-meluccio-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "T3.6: Pre-Geometric Topological Quantization of Lambda [v4.8, branch-conditional v4.14]. The MacDowell-Mansouri SSB action generates a Gauss-Bonnet term whose coupling alpha_GB = -4 Y_MM v acts as a gravitational theta-angle in the path integral. Periodicity of theta mod 2pi forces the cosmological constant into discrete topological sectors Lambda^(k) labeled by integer k, with the master relation 3 c M_P^2/(32 Lambda^(k)) = -theta^(0) + 2 pi k where c = 128 pi^2. The observed hierarchy M_P^2/Lambda ~ 10^120 corresponds to k ~ S_dS, the de Sitter entropy. Inter-sector tunneling is suppressed by e^(-S_dS). Reference: Addazi-Meluccio 2026 (arXiv:2602.16840). The framework's adoption of this mechanism is conditional on T4 reformulation of the SSB potential to the periodic Addazi-Meluccio form. T3.6 is the framework's Path A commitment: current working hypothesis, retained as long as DESI thawing remains below 5-sigma."
    },
    {
      "ref": "t3.6prime",
      "kind": "conjecture-adopted",
      "source_id": "corpus.bedroya-obied-vafa-wu-2025-arxiv-2507-03090",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "T3.6' (Path B, prepared contingency, v4.14): Evolving Dark Dimension Cosmology. Lambda is set geometrically by the Dark Dimension radius: Lambda ~ R^-4 with R ~ micron. The smallness of Lambda derives from R being mesoscopic rather than from topological quantization. R(t) evolves cosmologically, driven by slow-roll of a separate light modulus chi with m_chi ~ H0 ~ 1e-33 eV. Equation of state w(z) != -1 with thawing or freezing behavior matching the DESI DR2 signature in the Bedroya-Vafa class. T3.6' is dormant under v4.14 (Path A is the current working hypothesis) but discharge-ready per LINT-PATH-1. Reference: Bedroya-Obied-Vafa-Wu arXiv:2507.03090."
    },
    {
      "ref": "cc1.v4-14",
      "kind": "derivation",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "CC-1 (Core Claim, v4.14): Gravity couples to the modular-Hamiltonian Fisher information of the matter sector via the state-dependent VEV v(F_Q) of the SO(1,4) gravitational Higgs, with super-extensive O(N^2) scaling for ODLRO matter states. The coupling exhibits a pole structure at F_Q,crit that produces qualitatively distinct gravitational responses below and above threshold. This is the framework central theoretical claim and its most distinctive structural contribution.",
      "extensions": {
        "trellis_context": "Scope: CC-1 generates the framework matter-sector predictions: F09 (failed supernovae via bulk-routing), F11 (KK gravitons as dark matter), F13/F13.2 (LUNA screening anomaly via resonant radion catalysis), F19 (geometric wavefunction collapse), F21 (GRB compact-object phenomenology). These predictions are branch-independent: they do not depend on whether the cosmological constant is static (Path A) or evolving (Path B). Constituent commitments: CC-1 is supported by K1-K6, K7-K17, Formulation B, Dark Dimension structural import, and F-theory dP_3 + X_F13 Pati-Salam matter sector. Superseded by the v4.16 cumulant-form statement; see the supersession record.",
        "trellis_version": "v4.14"
      }
    },
    {
      "ref": "cc1.v4-16",
      "kind": "derivation",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "CC-1 annotation (v4.16, supersedes the v4.14 statement). CC-1 is demoted from foregrounded core to conditional structure: the pole is real and dormant in every known matter environment, with its confirmed activation domain being horizon-scale physics. The coupling functional is reidentified: geometry does not read F_Q as a first-order source; it reads the modular free energy W(epsilon) = log<e^(-epsilon K)>, whose first cumulant <K> (modular energy, an integral of T_mu_nu by Bisognano-Wichmann) is the source and whose second cumulant <delta K^2> = F_Q is the stiffness controlling the pole. The corrected one-line identity: gravity couples to the modular free energy of the matter sector through the state-dependent SO(1,4) Higgs VEV; the source is modular energy, the stiffness is the modular variance (equal to QFI), and the pole at F_Q,crit marks local symmetry restoration to the pre-geometric phase.",
      "extensions": {
        "trellis_context": "Two shores changed what CC-1 asserts. First (v4.15, SF-DG-011): OP-0 splits into OP-0-COUPLING (stands) and OP-0-ACTIVATION (dies, matter-sector exclusion record). The matter-sector predictions F13/F13.2, F19, F21, F05 move to the exclusion reservoir (Stage 3 scope); F09 and F11 are not moved by the shore but inherit the OP-0 split by reference. Second (v4.16, SF-DG-013): F_Q was mis-ranked, not wrong: it sits at second order, not first. This dissolves the generator question into an order error (S-GEN becomes the output of S-CUMULANT-DERIVE) and adds a one-signed convexity rule (matter softens geometry, only the vacuum stiffens; LINT-CONVEX-1). The assembly of W(epsilon) from DG own coupling is consistency-checked against three standard anchors but not yet derived (S-CUMULANT-DERIVE, the gate sorry for the matter sector).",
        "trellis_version": "v4.16",
        "supersedes": "cc1.v4-14"
      }
    },
    {
      "ref": "k1",
      "kind": "derivation",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "K1: Two-Channel Decomposition [from Tier 4.4 + positivity of T_3]. The brane stress-energy decomposes exactly into: (i) Trace channel (radial/curvature), which scales as N, sources Ricci curvature, and IS gravity; (ii) Traceless antisymmetric channel (angular/torsion), which scales as f^2 N^2 for coherent matter and sources torsion via the Cartan equation. This decomposition is an algebraic theorem of the SO(1,4) to SO(1,3) breaking pattern."
    },
    {
      "ref": "k2",
      "kind": "derivation",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "K2: G = G_N Always [from K1 + T2.5]. The radial channel couples to all mass-energy with constant G = G_N = 1/(8 pi v^2). Coherence (F_Q ~ N^2) enters only the angular channel, sourcing torsion. The gravitational constant is never amplified, modified, or state-dependent. Any analysis routing F_Q through G_eff is using the wrong channel."
    },
    {
      "ref": "k3",
      "kind": "derivation",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "K3: T_3 is Constant [from Tier 4.2]. The DBI brane tension T_3 = 6/(kappa_5^2 L) is fixed by the Israel junction conditions, independent of brane position z_0. State-dependence lives in the Higgs VEV v(F_Q), not in T_3."
    },
    {
      "ref": "k4",
      "kind": "derivation",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "K4: The Framework is Purely Gravitational [from T2.7 + T2.8]. Torsion enters through Einstein-Cartan gravity at coupling G/c^4 (hierarchy of 10^40 below electromagnetic). The conformal invariance of F^2 in 4D prevents any tree-level geometric channel from modifying electromagnetic couplings. The SO(1,4) Higgs is the gravitational Higgs, fully distinct from the electroweak Higgs. The framework cannot modify fermion masses, Bohr radii, or pycnonuclear screening through its own geometry. Clarificatory clause (tree-level vs one-loop): K4 prohibits direct tree-level couplings between the radion/torsion sector and the Standard Model gauge fields in the fundamental Lagrangian. It does not prohibit, and cannot prevent, loop-induced couplings arising from the quantum conformal trace anomaly. The heat kernel integration that derives the state-dependent coupling gamma (phi^A phi_A) f_Q necessarily generates terms proportional to beta(g) F_mu_nu F^mu_nu through the a_4(x) coefficient. These are manifestations of dimensional transmutation and constitute mathematically inevitable one-loop anomaly couplings rather than fundamental force modifications."
    },
    {
      "ref": "k5",
      "kind": "derivation",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "K5: Torsion is Non-Propagating [from Tier 4.7, P3]. Torsion carries zero independent propagating degrees of freedom. The Cartan equation is algebraic (no Box T kinetic operator). Torsion vanishes instantaneously when sources vanish."
    },
    {
      "ref": "k6",
      "kind": "derivation",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "K6: Bulk is Mandatory [from T1.5 + Tier 4]. The 5D bulk is mathematically required on three independent axes: Pillar 1 (NEC): 4D cannot balance steep QFI gradients without driving w < -1. The bulk absorbs gradients via T^(5)_M_nu n^M flux. Pillar 2 (Scrambling): 4D has no intrinsic geometric spectrum to derive t_s. The KK tower provides it. Pillar 3 (KSS): The viscosity bound eta/s = 1/(4 pi) requires the (d+1)-dimensional fluid-gravity dictionary."
    },
    {
      "ref": "k7",
      "kind": "derivation",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "K7: Activation Threshold [from K1 + T3.4 + SF-D0]. The angular channel activates when the matter quantum Fisher information density f_Q approaches the critical value F_Q,crit derived from the pole condition of the one-loop effective potential: F_Q,crit = m_rho^2/(8 gamma), where gamma = c_KK/(128 pi^2 Lambda_s^2) is the variance coupling coefficient. For the Dark Dimension parameters (m_rho ~ 1 MeV, Lambda_s ~ 2.6e8 GeV), the threshold evaluates to F_Q,crit ~ (10^12 to 10^13 GeV^4)/c_KK, where c_KK is an O(1) dimensionless prefactor from the massive Fierz-Pauli trace anomaly (open problem OP-CK). The threshold discriminates between extensive and super-extensive scaling regimes. Operators (i), (ii), (iii) are locked to extensive O(N) scaling by the Fluctuation-Dissipation Theorem; only operator (iv), the variance coupling, accesses super-extensive scaling through Donnelly-Freidel edge modes in ODLRO states."
    },
    {
      "ref": "k8",
      "kind": "derivation",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "K8: Adiabatic Tracking [from Tier 4.7]. The radion tracks the moving Higgs minimum adiabatically: |dv/dt| << m_rho v. Satisfied by >= 24 orders for neutron star formation, ~10^4 for QGP. Requires m_rho >~ MeV (lambda >~ 10^-44). Radiative stability is quantified by the one-loop Coleman-Weinberg mass shift: the dominant top-loop contribution yields delta m^2_1-loop ~ 10^-18 GeV^2, suppressed by geometric Planck-scale Yukawa scaling. Against the bare radion mass m^2_rho ~ 10^-6 GeV^2, the ratio is delta m^2/m^2_rho ~ 10^-12: twelve orders of magnitude of margin, without fine-tuning."
    },
    {
      "ref": "k9",
      "kind": "derivation",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "K9: Lambda^4_min is Dimensional Analysis [from T1.3]. The saturation floor Lambda_min = hbar c/a correctly sets the UV cutoff scale. It does not set the energy budget independently of the coupling constant at each scale (alpha_s, alpha_EM, alpha_G). Works at nuclear scale (alpha_s ~ 1), fails at atomic (off by 274 = 2/alpha_EM), fails at gravitational (off by ~10^47)."
    },
    {
      "ref": "k10",
      "kind": "derivation",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "K10: Sliding Unification Bound [from T3.4 + Tier 4.5 + K6 (Pillar 2)]. The effective UV cutoff of quantum gravity on the brane is the dynamical Species Scale Lambda_s ~ (L/z_0) M_5. Under macroscopic quantum coherence (F_Q ~ N^2), the suppressed VEV displaces the brane deeper into the AdS_5 bulk, driving Lambda_s below the conventional GUT energy of 10^16 GeV. When Lambda_s(F_Q) < M_GUT, the Wilsonian energy domain in which gauge couplings are to unify ceases to exist within the physical geometry. A GUT that insists on a static unification scale above the local cutoff predicts physics in a trans-cutoff regime and is placed in the Swampland by T3.2. A viable GUT must possess a dynamically sliding unification scale M_GUT(F_Q): M_GUT(F_Q) <= Lambda_s(F_Q) for all physically realizable macroscopic coherent states."
    },
    {
      "ref": "k11",
      "kind": "derivation",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "K11: Trace Anomaly Dependence and Beta Function Non-Vanishing [from T2.7 + K4 + F13]. The conformal invariance of the 4D gauge kinetic terms (T2.7) forbids the massive scalar radion from coupling to the gauge sector at tree level. General covariance requires the radion to couple universally to T^mu_mu of the matter sector. For classically massless gauge bosons, T^mu_mu = 0 at tree level. The interaction proceeds exclusively through the quantum conformal trace anomaly: T^mu_mu = sum_i beta(g_i)/(2 g_i) F^(i)_mu_nu F^(i)mu_nu. This coupling is a phenomenological requirement: resolution of the LUNA screening anomaly demands that the radion export chaotic thermal noise from driven lattice states into the bulk via the KK tower. Any viable GUT must be strictly non-conformal: beta(g_i) != 0 across all physical energy scales relevant to macroscopic coherence and structure formation."
    },
    {
      "ref": "k12",
      "kind": "derivation",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "K12: Topological Dirichlet Confinement [from Tier 4.1 + K6 + T2.2]. The 5D bulk is governed by a topological Chern-Simons action for SO(2,4) with zero local propagating degrees of freedom. This topological purity eliminates Ostrogradsky ghosts from the bulk interior (T2.2) and preserves the Israel junction conditions governing the bulk-brane energy exchange (K6, Pillar 1). A GUT constructed from closed strings carries gauge degrees of freedom on strings that propagate freely through the bulk, converting the topological bulk into a dynamically active gauge manifold and destroying the thermodynamic isolation NEC protection, scrambling, and the KSS bound depend on. A viable GUT must be topologically confined to the 4D ETW brane via Dirichlet boundary conditions."
    },
    {
      "ref": "k13",
      "kind": "derivation",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "K13: Holographic Casimir Regularization [from K6 + T3.4 + T1.1]. The cumulative one-loop correction from the ~10^32 KK graviton modes to the radion quartic coupling must be computed via holographic renormalization, not naive additive summation. Under standard additive EFT, the KK tower generates delta lambda ~ 10^-35, which violates the required lambda >= 10^-44. Hamilton-Jacobi boundary counterterms constructed from intrinsic and extrinsic curvatures of the brane absorb power-law divergences into renormalization of T_3. The finite Casimir remainder, computed via zeta-function regularization, scales as delta lambda_finite ~ m^4_KK/M^2_Pl,eff ~ 10^-60 under maximal QFI loading."
    },
    {
      "ref": "k14",
      "kind": "derivation",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "K14: Gravitational Coupling Suppression [from K4 + T2.8]. The radion couples to all Standard Model fields with gravitational strength: y_rho ~ m/M_Pl. For the top quark, y_rho_tt ~ 7e-17. One-loop corrections to lambda from boundary matter fields are delta lambda ~ y^4/(16 pi^2) ~ 10^-67, negligible against 10^-44. The gravitational gauge sector contributes zero at one loop (first-order BF structure, 44 second-class constraints freeze propagating gauge DOF). The hierarchy lambda ~ 10^-44 is radiatively stable in the Dirac sense: corrections are smaller than the parameter. The protection mechanism is gravitational coupling suppression (K14)."
    },
    {
      "ref": "k15",
      "kind": "derivation",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "K15: Pre-Geometric Phase Constraint [from Tier 4.7 + F20]. The radion rho(x) exists only in the broken SO(1,3) phase. In the unbroken SO(1,4) phase, the Higgs momentum satisfies Pi_A ~ 0 (primary constraint), and no scalar mode propagates. Analyses that assume the radion propagates during inflation or during the pre-geometric epoch are applying the broken-phase field content to the unbroken-phase dynamics. The adiabatic tracking condition |dv/dt| << m_rho v applies only post-SSB."
    },
    {
      "ref": "k16",
      "kind": "derivation",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "K16: Species Scale Running Clarification [from K2 + Hydrodynamic Swampland Bounds v3]. The fundamental Planck mass M_Pl and Newton constant G_N = 1/(8 pi M_Pl^2) are fixed throughout. The quantity that runs is the effective Species Scale Lambda_s = M_Pl/sqrt(N_eff), where N_eff counts the Kaluza-Klein species accessible at a given point in the fluid thermodynamic phase space. The VEV shift v_eff^2 = v_0^2 - (gamma/lambda) f_Q is standard EFT threshold bookkeeping. Newton constant G_N = 1/(8 pi v_0^2) is untouched throughout. Any analysis describing local G_eff amplification via VEV suppression from coherence loading is routing f_Q through the wrong channel and applying the killed mechanism."
    },
    {
      "ref": "k17",
      "kind": "derivation",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "K17: BBN Structural Immunity [from K7 + K4 + T2.7 + C13e (domain restriction)]. The framework preserves standard Big Bang Nucleosynthesis. During the BBN epoch (T ~ 30 to 100 keV, t ~ 1 to 20 minutes), the primordial plasma is a maximally incoherent, radiation-dominated thermal fluid (f ~ 0, f_Q ~ N). Three structural barriers prevent radion activation: (i) the plasma is unbound, possessing no crystalline lattice or interstitial sublattice to support coherent phonon modes; (ii) the coherence fraction is zero, pinning the VEV at ambient Planck-scale values; (iii) K4 and T2.7 prohibit the radion from modifying tree-level electroweak cross-sections. The Cosmological Lithium-7 deficit is outside the framework explanatory domain."
    },
    {
      "ref": "p3",
      "kind": "derivation",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "P3: DOF count [Structural Proof, Tier 4.7]. Result: 3 (2 graviton + 1 scalar). Method: Dirac-Bergmann. 90-dim phase space, 20 first-class, 44 second-class. Source: Dirac Constraint Report."
    },
    {
      "ref": "p8",
      "kind": "derivation",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "P8: KSS bound [Structural Proof, Tier 4.7]. Result: eta/s = 1/(4 pi) exactly. Method: Graviton-radion decoupling, G_eff cancellation, 4D GB topological. Source: P11/P8 Report."
    },
    {
      "ref": "p11",
      "kind": "derivation",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "P11: Diffeomorphism invariance [Structural Proof, Tier 4.7]. Result: Perturbatively covariant. Method: QFI scalar via <TT>. Edge modes for foliation independence. Source: P11/P8 Report."
    },
    {
      "ref": "f01",
      "kind": "function",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "F01: Gravity Emerges from Symmetry Breaking. Addresses: B7 (no quantum gravity). Statement: SO(1,4) to SO(1,3) SSB produces Einstein-Cartan gravity with a massive scalar radion and algebraically determined torsion. Three propagating DOF: two graviton polarizations plus one scalar."
    },
    {
      "ref": "f02",
      "kind": "function",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "F02: Coherent Matter Couples to Geometry. Addresses: B13 (hyperon puzzle), B15 (failed supernovae). Statement: Phase-locked matter generates additional angular stress proportional to f^2 N^2 through the hypermomentum tensor. This stress sources torsion via the Cartan equation, suppresses the local effective Planck mass, and provides structural support beyond nuclear degeneracy pressure. G remains G_N. OP-0 conditionality (v4.4, updated v4.5): the quantitative torsion amplitude depends on f_Q achieving super-extensive scaling via the modular Hamiltonian formulation."
    },
    {
      "ref": "f03",
      "kind": "function",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "F03: The Geometry Stays Thermodynamically Stable. Addresses: B1 (singularities, partial), B4 (information paradox, partial). Statement: Under steep QFI gradients, the geometry maintains NEC compliance on the brane. The bulk provides the thermodynamic reservoir."
    },
    {
      "ref": "f04",
      "kind": "function",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "F04: Scrambling Has a Timescale. Addresses: B15 (failed supernovae), B14 (mass gap). Statement: The vacuum processes dumped O(N^2) correlations over a finite scrambling time t_s, derived from the KK tower mass spectrum. t_s = (R_s/c) ln(S_BH) for macroscopic systems. The naive Margolus-Levitin application is a category error (T1.6)."
    },
    {
      "ref": "f06",
      "kind": "function",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "F06: Stellar Death is Rate-Dependent. Addresses: B14 (mass gap), B15 (failed supernovae). Statement: Geometric failure occurs when the free-fall rate exceeds the scrambling rate (t_ff < t_s). The mode of failure depends on which channel dominates: tear (thermal, radial) or puncture (coherent, angular)."
    },
    {
      "ref": "f07",
      "kind": "function",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "F07: The Mass Gap Exists. Addresses: B14 (lower mass gap). Statement: The 2.5 to 5 M_sun mass gap arises from the tear/puncture dichotomy. Tears from isolated collapse recruit envelope mass, jumping to >= 5 M_sun. Punctures from mergers carry no envelope, landing at ~2.5 to 3 M_sun."
    },
    {
      "ref": "f08",
      "kind": "function",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "F08: GRB Energetics Are Set by the Bulk. Addresses: GRB energy scale (~10^50 erg). Statement: Puncture snapback energy is E_snap = u x 4 pi R^2 x Delta r, where Delta r is set by the KK Compton wavelength lambda_KK ~ 0.02 cm. Open: exact prefactor (factor ~8 between lambda_KK-bar and required 0.16 cm). Potential chain: Lambda_cc to R_Dark to m_KK to lambda_KK to Delta r to E_GRB. Zero free parameters."
    },
    {
      "ref": "f09",
      "kind": "function",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "F09: Failed Supernovae Are Dark. Addresses: B15 (N6946-BH1). Statement: Thermal iron cores carry no macroscopic coherence domains. Shear zone collapses to atomic scale. Snapback energy is negligible. The star implodes silently. Observed transient energy is envelope fallback."
    },
    {
      "ref": "f10",
      "kind": "function",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "F10: The Smartt Limit. Addresses: B15 (failed supernovae). Statement: Stars above ~17 M_sun develop cores where the tear condition (t_ff < t_s) is sustained across the entire inner envelope. The tear propagates without stalling. Supernova fails."
    },
    {
      "ref": "f11",
      "kind": "function",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "F11: Dark Matter Is a Geometric Consequence. Addresses: B3 (dark matter). Statement: The KK graviton tower required by K6 (Pillar 2) simultaneously serves as the dark matter candidate. Thermally produced from the SM brane, the massive spin-2 KK modes form collisionless halos."
    },
    {
      "ref": "f14",
      "kind": "function",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "F14: Short-Range Gravity Is Modified. Addresses: B6 (hierarchy problem, partial), Dark Dimension phenomenology. Statement: The radion mediates a Yukawa fifth force at 1 to 10 micron, the Dark Dimension compactification scale. Testable by CANNEX and similar experiments."
    },
    {
      "ref": "f15",
      "kind": "function",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "F15: The Viscosity Bound Is Universal. Addresses: QGP phenomenology (RHIC/LHC). Statement: eta/s = 1/(4 pi) is preserved exactly under the state-dependent VEV. The bound requires the (d+1)-dimensional fluid-gravity dictionary."
    },
    {
      "ref": "f16",
      "kind": "function",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "F16: Void Physics Amplifies ISW. Addresses: B16 (CMB Cold Spot). Statement: Cosmic voids carry less matter, resulting in less radial loading, which produces higher local effective tension, which drives faster expansion, which delivers enhanced ISW effect."
    },
    {
      "ref": "f17",
      "kind": "function",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "F17: Horizons Are Zero-Resolution Surfaces. Addresses: B1 (singularities), B4 (information paradox). Statement: At R_s, radial suppression drives Lambda_s to 0. The geometry carries zero resolution. Gravitational time dilation = Lambda_s(r)/Lambda_s(infinity). Clocks stop at the horizon because the vacuum has zero processing bandwidth. The excision creates a codimension-2 termination surface whose area is a Casimir invariant of the corner symmetry algebra. The 4D description (Donnelly-Freidel edge modes) and 5D description (ETW defect) are dual representations of the same boundary."
    },
    {
      "ref": "f18",
      "kind": "function",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "F18: The Linter Censors Insolvent Geometry. Addresses: B1 (singularities), B4 (information paradox). Statement: When a system information-theoretic maintenance cost exceeds its available energy flux, the local geometry is excised from the causal manifold. The 4D mechanism operates via Donnelly-Freidel edge modes (local Hilbert space factorization). The 5D dual is the Karch-Randall ETW defect. F17 provides the LOCATION of the termination surface, F18 provides the MECHANISM that creates it."
    },
    {
      "ref": "f20",
      "kind": "function",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "F20: Geometry Condenses from a Topological Phase With Quantized Lambda Selection [revised v4.8]. Addresses: Stochastic radion destabilization, monopole problem, initial conditions for F12, cosmological constant initialization, MM intrinsic Lambda catastrophe (formerly OP-CC, now discharged). Statement: The SO(1,4) to SO(1,3) symmetry breaking replaces standard slow-roll inflation with instantaneous geometric condensation, simultaneously selecting a topological sector k from the Addazi-Meluccio tower of degenerate vacua. Prior to SSB, the theory is a topological BF gauge theory with zero local propagating degrees of freedom. The vacuum manifold SO(1,4)/SO(1,3) is congruent to S^3, with pi_0 = pi_1 = pi_2 = 0: no domain walls, cosmic strings, or magnetic monopoles are produced. The latent heat thermalizes at T_RH ~ 4e7 GeV."
    },
    {
      "ref": "f22",
      "kind": "function",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "F22: Channel Orthogonality Decoherence Protection. Addresses: Coherence survival at T ~ 10 MeV in collapsar cores and MAD disks. Statement: The macroscopic quantum coherent state (F_Q ~ N^2) receives protection against thermal decoherence and MRI turbulence through a parity selection rule. Torsion couples to the parity-odd axial vector current J_5^mu. Thermal and hydrodynamic perturbations are parity-even and couple to the trace of T_mu_nu (Ricci channel). The two channels are algebraically orthogonal representations of the SO(1,4) to SO(1,3) breaking. Caveat: higher-loop mixing angle epsilon between trace and traceless sectors requires bounding from above (open problem)."
    },
    {
      "ref": "f23",
      "kind": "function",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "F23: Swampland Conjectures as Hydrodynamic Theorems. Addresses: T3.2 (Swampland constraints), providing non-perturbative proofs conditional on the construction. Statement: The Swampland Distance Conjecture and the Weak Gravity Conjecture are derivable as theorems of the hydrodynamic limit of continuous conformal fluids on the ETW brane, under three explicit assumptions (A1: Karch-Randall braneworld with constant DBI tension; A2: the heat kernel coupling gamma (phi^A phi_A) f_Q with gamma > 0; A3: BKM regularity of the boundary fluid). Scope: conditional on A1, A2, A3."
    },
    {
      "ref": "f-cc",
      "kind": "function",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "F-CC: Cosmological Constant Quantization and Initial Sector Selection [v4.8]. Addresses: B2 (dark energy initial value), B5 (cosmological constant problem, formerly OP-CC). Statement: The cosmological constant Lambda is not a continuous parameter but is quantized into the discrete tower Lambda^(k) via the Addazi-Meluccio topological mechanism (T3.6). The bulk SO(2,4) Chern-Simons construction descending to the boundary MM action mandates this quantization through the gravitational theta-angle. The dynamical SSB process selects the sector k_phys ~ S_dS matching the de Sitter entropy, providing the initial condition for F12 evolution."
    },
    {
      "ref": "c01",
      "kind": "mechanism",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "C01: MM action from CS/WZW boundary induction. Satisfies F01 (sole mechanism). Evidence: Paper 0, Section 2.3.",
      "extensions": {
        "verdict": "Confirmed"
      }
    },
    {
      "ref": "c02",
      "kind": "mechanism",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "C02: Algebraic decomposition via Scalar Cartan Equation. Satisfies F02 (sole mechanism). Evidence: Half-Sphere Report.",
      "extensions": {
        "verdict": "Confirmed"
      }
    },
    {
      "ref": "c03",
      "kind": "mechanism",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "C03: Bulk-brane energy exchange (T^(5)_mu flux). Satisfies F03 (sole mechanism). Evidence: Occam Audit.",
      "extensions": {
        "verdict": "Confirmed"
      }
    },
    {
      "ref": "c04",
      "kind": "mechanism",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "C04: KK tower mass spectrum provides t_s. Satisfies F04 (sole mechanism). Evidence: t_heal Resolution Report.",
      "extensions": {
        "verdict": "Confirmed"
      }
    },
    {
      "ref": "c06a",
      "kind": "mechanism",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "C06a: Tear: thermal matter, dome failure, recruits envelope. Satisfies F06 (regime). Evidence: N6946-BH1.",
      "extensions": {
        "verdict": "Confirmed"
      }
    },
    {
      "ref": "c06b",
      "kind": "mechanism",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "C06b: Puncture: coherent matter, needle failure, arrests at domain walls. Satisfies F06 (regime). Evidence: GRB 060614.",
      "extensions": {
        "verdict": "Confirmed"
      }
    },
    {
      "ref": "c07a",
      "kind": "mechanism",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "C07a: Tears produce BH >= 5 M_sun (envelope recruitment). Satisfies F07 (regime). Evidence: Sukhbold 2016.",
      "extensions": {
        "verdict": "Confirmed"
      }
    },
    {
      "ref": "c07b",
      "kind": "mechanism",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "C07b: Punctures produce BH ~2.5 to 3 M_sun (no envelope). Satisfies F07 (regime). Evidence: GW190814.",
      "extensions": {
        "verdict": "Confirmed"
      }
    },
    {
      "ref": "c09",
      "kind": "mechanism",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "C09: Thermal cores carry no coherence domains, yielding Delta r atomic and silent implosion. Satisfies F09 (sole mechanism). Evidence: N6946-BH1.",
      "extensions": {
        "verdict": "Confirmed"
      }
    },
    {
      "ref": "c10",
      "kind": "mechanism",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "C10: Stall condition maps to compactness xi_2.5. Satisfies F10 (sole mechanism). Evidence: Sukhbold profiles.",
      "extensions": {
        "verdict": "Confirmed"
      }
    },
    {
      "ref": "c15",
      "kind": "mechanism",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "C15: eta/s = 1/(4 pi) via fluid-gravity dictionary. Satisfies F15 (sole mechanism). Evidence: RHIC/LHC data.",
      "extensions": {
        "verdict": "Confirmed"
      }
    },
    {
      "ref": "c18a",
      "kind": "mechanism",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "C18a: 4D: Donnelly-Freidel edge modes for factorization and entropy. Satisfies F18 (sole, 4D description). Evidence: Donnelly and Freidel 2016.",
      "extensions": {
        "verdict": "Confirmed"
      }
    },
    {
      "ref": "c18b",
      "kind": "mechanism",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "C18b: 5D dual: Karch-Randall ETW defect, RT surface anchoring. Satisfies F18 (dual description). Evidence: Defect Extremal Surface prescription.",
      "extensions": {
        "verdict": "Confirmed"
      }
    },
    {
      "ref": "c20a",
      "kind": "mechanism",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "C20a: Pre-SSB phase has zero propagating scalar DOF. Satisfies F20 (sole). Evidence: Dirac-Bergmann: Pi_A ~ 0.",
      "extensions": {
        "verdict": "Confirmed"
      }
    },
    {
      "ref": "c20b",
      "kind": "mechanism",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "C20b: SO(1,4)/SO(1,3) congruent to S^3 forbids monopoles, strings, domain walls. Satisfies F20 (composing). Evidence: homotopy pi_0 = pi_1 = pi_2 = 0.",
      "extensions": {
        "verdict": "Confirmed"
      }
    },
    {
      "ref": "c20c",
      "kind": "mechanism",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "C20c: Reheating: T_RH ~ 4e7 GeV from latent heat lambda v^4. Satisfies F20 (composing). Evidence: standard radiation density relation.",
      "extensions": {
        "verdict": "Confirmed"
      }
    },
    {
      "ref": "c20d",
      "kind": "mechanism",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "C20d: Stochastic dissolution: H_RH ~ 160 keV, far below m_rho ~ MeV. Satisfies F20 (composing). Evidence: post-SSB Hubble from T_RH.",
      "extensions": {
        "verdict": "Confirmed"
      }
    },
    {
      "ref": "c20e",
      "kind": "mechanism",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "C20e: Smooth handoff: f ~ 0 post-SSB gives v(F_Q) ~ M_Pl. Satisfies F20 (composing). Evidence: two-fluid reading, thermal plasma is incoherent.",
      "extensions": {
        "verdict": "Confirmed"
      }
    },
    {
      "ref": "c20g",
      "kind": "mechanism",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "C20g: Percolation dissolution. In the unbroken BF phase, the metric g_mu_nu identically vanishes: no spatial volume, no scale factor a(t), no geometric Hubble expansion rate H. The standard graceful-exit percolation problem is dissolved at the root, since the expansion that separates bubbles begins only after the metric condenses. Satisfies F20 (composing). Evidence: Graceful Exit Report; structural argument from BF theory gauge equivalence.",
      "extensions": {
        "verdict": "Confirmed"
      }
    },
    {
      "ref": "c23",
      "kind": "mechanism",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "C23: Pure-state non-degeneracy of the QFI coupling. For any pure state, the QFI density reduces to the Fubini-Study metric on the state manifold, strictly positive for any state that is not an eigenstate of T_mu_nu. The von Neumann entropy vanishes but the QFI remains finite and positive, because the QFI measures parameter estimation sensitivity, not thermodynamic entropy. Structural (sole). Evidence: Braunstein-Caves (1994), Paper 0 Appendix 14, Braneworld Higgs Coupling Derivation and Audit.",
      "extensions": {
        "verdict": "Confirmed"
      }
    },
    {
      "ref": "c23-sdc",
      "kind": "mechanism",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "C23-SDC [REFORMULATED v4.13, CONDITIONAL]: SDC compliance via Karch-Randall moduli geometry. The DBI-induced metric on the radial modulus z_0 gives geodesic distance d ~ M_Pl ln(z_0/L), yielding the SDC exponential decay m_KK ~ exp(-d/M_Pl). Conditional on S-CC-002 closure (b > 1/(4 pi^2) for the X_F13 Pati-Salam KK tower on dP_3). Satisfies F23 (sole, SDC). Evidence: Paper -1; HSB Karch-Randall Moduli Geometry Scout (May 12, 2026).",
      "extensions": {
        "verdict": "Confirmed, conditional"
      }
    },
    {
      "ref": "c23-wgc",
      "kind": "mechanism",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "C23-WGC [REFORMULATED v4.13]: WGC compliance is satisfied statically by the dP_3 Pati-Salam F-theory content. The 87 codimension-3 Yukawa enhancement loci and the matter curves guarantee a superlattice of fractional confined monopole charges populating the species polytope. WGC is a property of the F-theory compactification, not a derived hydrodynamic theorem. Satisfies F23 (sole, WGC). Evidence: GUT Population Survey v1.8; HSB Karch-Randall Moduli Geometry Scout.",
      "extensions": {
        "verdict": "Confirmed"
      }
    },
    {
      "ref": "mech.bh-entropy",
      "kind": "mechanism",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Bekenstein-Hawking Entropy from Edge Mode Counting (F17, F18). The termination surface created by Linter excision (F18) at the zero-resolution horizon (F17) carries Donnelly-Freidel edge modes whose quantization reproduces the Bekenstein-Hawking area law. Sub-results: area law from edge mode counting (Strongly Supported, multiple independent proofs in first-order gauge gravity literature); RT surface anchors to ETW defect (Confirmed, Defect Extremal Surface prescription); SO(1,4) phase space protected through SSB (Confirmed, 20 first-class constraints preserved); radion frozen out of boundary phase space (Confirmed, 44 second-class constraints); v(F_Q) dynamic invariance of 1/4 prefactor (Plausible, scaling analysis); exact 1/4 prefactor from microcanonical counting (Open, requires the 5D-to-2D central charge descent cascade plus non-commutative modular bootstrap).",
      "extensions": {
        "verdict": "Strongly Supported"
      }
    },
    {
      "ref": "c08",
      "kind": "mechanism",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "C08: E_snap = u x 4 pi R^2 x lambda_KK ~ 10^50 erg. Satisfies F08. Evidence: within 1 to 2 OoM of GRBs. Open issue: prefactor, factor ~8.",
      "extensions": {
        "verdict": "Suggestive"
      }
    },
    {
      "ref": "c11",
      "kind": "mechanism",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "C11: KK graviton thermal emission (Vafa et al. 2022). Satisfies F11. Evidence: Omega_DM h^2 ~ 0.12 from T_i ~ 1 GeV. Open issue: depends on Swampland conjectures.",
      "extensions": {
        "verdict": "Suggestive"
      }
    },
    {
      "ref": "c20f-i",
      "kind": "mechanism",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "C20f-i: Gauge instanton nucleation. S_inst = 4 pi^2/g^2, lambda-independent. SO(5) Euclidean instanton embedded in SU(2) subgroup via branching 5 to 4 plus 1; Dynkin index doubles trace. Action O(10^1 to 10^2) for g ~ O(1). Bypasses the 10^44 CDL suppression entirely. Satisfies F20. Open: explicit derivation of the effective gauge coupling g from MM parameters. Source: Graceful Exit Report.",
      "extensions": {
        "verdict": "Plausible"
      }
    },
    {
      "ref": "c20f-ii",
      "kind": "mechanism",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "C20f-ii: Thermal KK activation via daisy resummation. N_species ~ 10^32 bosonic KK modes generate a massive cubic term in the one-loop thermal effective potential, driving a violently first-order transition. Satisfies F20. Open: definition of temperature in the pre-geometric BF phase. Source: Graceful Exit Report.",
      "extensions": {
        "verdict": "Plausible"
      }
    },
    {
      "ref": "c20f-iii",
      "kind": "mechanism",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "C20f-iii: Dynamical cobordism (Bubble of Something). The McNamara-Vafa Cobordism Conjecture mandates nucleation of a cobordism defect to trivialize the topological charge of the unbroken SO(1,4) phase. Satisfies F20. Open: explicit rate computation from ETW brane tension and M_5. Source: Graceful Exit Report.",
      "extensions": {
        "verdict": "Plausible"
      }
    },
    {
      "ref": "mech.cold-spot-isw",
      "kind": "mechanism",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Cold Spot ISW amplification from the Eridanus supervoid. Satisfies F16. Needs: quantitative ISW prediction. Source: Displacement Geometry Report.",
      "extensions": {
        "verdict": "Plausible"
      }
    },
    {
      "ref": "mech.stellar-cooling-kk",
      "kind": "mechanism",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Stellar cooling via KK graviton bulk emission. Satisfies F11, addresses B19. Degenerate stellar interiors (WD crystallized cores, NS superfluid cores) operate at f_Q ~ N^2, driving Lambda_s below the local thermal energy scale; KK graviton modes become thermally accessible, providing an additional cooling channel beyond standard neutrino pathways. For G117-B15A, the missing luminosity of ~10^32 erg/s is sourced by T^(5)_M_nu n^M flux into the AdS_5 bulk. For Cas A, the onset of ^3P_2 neutron superfluidity marks the transition from f_Q ~ N to f_Q ~ N^2, activating the KK exhaust channel. Needs: emission rate from (m_KK, M_5, z_0); must satisfy arXiv 2510.18975. Source: Stellar Cooling Audit, Anomaly Audit.",
      "extensions": {
        "verdict": "Plausible"
      }
    },
    {
      "ref": "pred.c-rd-1",
      "kind": "prediction",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "C-RD-1: Radion mass equality (conditional on refresh duality, SF-DG-012). m_rho = sqrt(c_KK) Lambda_s^2 / (4 pi M_Pl), evaluating to 0.44 to 1.4 MeV across c_KK in [1,10], landing at the bottom edge of the v4.8 adiabaticity window where the framework already sits. Derived by equating the refresh-duality queue-capacity threshold Lambda_s^4/N_eff = Lambda_s^6/M_Pl^2 = 2.1e12 GeV^4 to F_Q,crit (match at c_KK ~ 5). Parent: F-CC / T3.5. Source: Refresh-duality consistency computation (SF-DG-012, CE-DG-011-c).",
      "closing_condition": {
        "condition_kind": "measurement-on-the-system",
        "target": "any independent pin of m_rho outside [0.3, 3] MeV kills the dual reading only, leaving CC-1 intact; a pin inside the band is corroboration",
        "system": "the radion mass m_rho"
      }
    },
    {
      "ref": "pred.lambda-1-4",
      "kind": "prediction",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Lambda_1.4 (tidal deformability), Marginal Pass. Predicted 534 (SLy + rho_sf = 2 rho_0). Constraint: < 580 (90% upper), > 70 (90% lower). Source: TOV Solver.",
      "closing_condition": {
        "condition_kind": "measurement-on-the-system",
        "target": "the measured tidal deformability Lambda_1.4 must fall inside (70, 580) at 90% confidence",
        "system": "binary neutron star inspiral tidal deformability, GW170817-class measurement"
      }
    },
    {
      "ref": "pred.f14-cannex",
      "kind": "prediction",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "F14 CANNEX prediction: a radion-mediated fifth force at 1 to 10 micron, set by R_Dark ~ 1 micron. The exact Yukawa coupling strength alpha from the state-dependent VEV is an open calculation; CANNEX projections should be overlaid with the framework predicted alpha range once computed. Reference: Fischer, Kading, and Pitschmann (arXiv:2603.22413, March 2026). Parent: F14.",
      "closing_condition": {
        "condition_kind": "measurement-on-the-system",
        "target": "CANNEX (or a similar short-range gravity experiment) detects or excludes a Yukawa deviation from Newtonian gravity at 1 to 10 micron at the framework predicted alpha, once alpha is computed",
        "system": "CANNEX short-range gravity experiment"
      }
    },
    {
      "ref": "path-a",
      "kind": "branch-commitment",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Path A: Static-Lambda (AM-Locked) Cosmology Branch [v4.14]. Status as of v4.14: current working hypothesis, selected as long as DESI thawing remains below 5-sigma and the Addazi-Meluccio program continues to develop. Commitments: T3.6 (AM topological quantization, Lambda quantized into a discrete tower Lambda^(k)); F-CC (entropic SSB selection, k_phys ~ S_dS ~ 10^122); S-CC-005 (inter-sector tunneling protection, suppressed by e^(-S_dS)); hairon-as-vacuum-substrate (the de Sitter vacuum identified with a BEC of N ~ 10^120 hairon moduli). Cosmological prediction: static Lambda^(k_phys) within the current cosmic epoch, w = -1 to within experimental precision. Default posture: in the absence of decisive triggers, Path A is the current working hypothesis.",
      "closing_condition": {
        "condition_kind": "measurement-on-the-system",
        "target": "DESI Y5 confirms evolving w(z) at >= 5-sigma with CPL parameters inconsistent with w ~ -1, or Euclid confirms time-evolving w(z) at independent significance, or independent gravitational-wave or large-scale-structure analyses confirm a dynamical dark sector at high significance. Any trigger transitions to Path B.",
        "system": "DESI Y5 final w(z) analysis; Euclid dark energy constraints"
      },
      "extensions": {
        "bayesian_credence_per_addendum_a": "roughly 25-40%"
      }
    },
    {
      "ref": "path-b",
      "kind": "branch-commitment",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Path B: Variable-Lambda (Bedroya-Vafa-Aligned) Cosmology Branch [v4.14]. Status as of v4.14: prepared contingency, activated if Path A falsification criteria trigger. Commitments: T3.6prime (replacement for T3.6, Lambda set geometrically by the Dark Dimension radius, Lambda ~ R^-4 with R ~ micron); F-DD-Evolve (replacement for F-CC, R evolves cosmologically driven by slow-roll of a light modulus chi with m_chi ~ H0 ~ 1e-33 eV); drops S-CC-005 (no inter-sector tunneling protection needed, R is continuous). Cosmological prediction: evolving Lambda(t) ~ R(t)^-4, w(z) != -1 with thawing or freezing behavior matching DESI DR2 thawing within the Bedroya-Vafa class.",
      "closing_condition": {
        "condition_kind": "measurement-on-the-system",
        "target": "DESI Y5 confirms static Lambda within experimental precision (reverts to Path A), or specific Bedroya-Vafa predictions (DM mass evolution at percent level, R-evolution rate) are inconsistent with structure-formation observations, or failure to identify a structurally natural m_chi ~ H0 modulus (S-DD-002).",
        "system": "DESI Y5 final w(z) analysis; structure-formation observations; S-DD-001/S-DD-002 discharge"
      },
      "extensions": {
        "bayesian_credence_per_addendum_a": "roughly 25-40%"
      }
    },
    {
      "ref": "b-nu-1",
      "kind": "observation",
      "source_id": "lit.desi-dr1-dr2-bao",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "B-NU-1 (new, v4.13): Neutrino Mass Sector Friction. By rejecting DESI DR2 thawing, the framework commits to the Lambda-CDM upper bound sum(m_nu) < 0.064 eV (95% from DESI DR2 + CMB). Terrestrial oscillation experiments require sum(m_nu) >= 0.059 eV (normal hierarchy). Net friction ~0.005 eV with the terrestrial neutrino sector. Tracking for resolution via inverted hierarchy possibility, future neutrino mass measurements (KATRIN, Project 8, cosmological surveys), or future shifts in the cosmological mass bound. No structural resolution from the framework current axiomatic core; tracking as an external observational tension."
    }
  ],
  "links": [
    {
      "link_kind": "depends-on",
      "from": "k2",
      "to": "k1",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "k2",
      "to": "t2.5",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "k4",
      "to": "t2.7",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "k4",
      "to": "t2.8",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "k5",
      "to": "p3",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "k6",
      "to": "t1.5",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "k7",
      "to": "k1",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "k7",
      "to": "t3.4",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "k9",
      "to": "t1.3",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "k10",
      "to": "t3.4",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "k10",
      "to": "k6",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "k11",
      "to": "t2.7",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "k11",
      "to": "k4",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "k12",
      "to": "k6",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "k12",
      "to": "t2.2",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "k13",
      "to": "k6",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "k13",
      "to": "t3.4",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "k13",
      "to": "t1.1",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "k14",
      "to": "k4",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "k14",
      "to": "t2.8",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "k16",
      "to": "k2",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "k17",
      "to": "k7",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "k17",
      "to": "k4",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "k17",
      "to": "t2.7",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "f01",
      "to": "k1",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "f01",
      "to": "k2",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "f01",
      "to": "k5",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "f02",
      "to": "k1",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "f02",
      "to": "k2",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "f02",
      "to": "k7",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "f03",
      "to": "k6",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "f04",
      "to": "k6",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "f04",
      "to": "t1.6",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "f06",
      "to": "k1",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "f06",
      "to": "f04",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "f07",
      "to": "f06",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "f08",
      "to": "k6",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "f08",
      "to": "k9",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "f09",
      "to": "f06",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "f10",
      "to": "f06",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "f11",
      "to": "k6",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "f11",
      "to": "t3.2",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "f11",
      "to": "t3.5",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "f14",
      "to": "t3.5",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "f15",
      "to": "k6",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "f16",
      "to": "k1",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "f18",
      "to": "k6",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "f18",
      "to": "f17",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "f20",
      "to": "k5",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "f20",
      "to": "k6",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "f20",
      "to": "t3.6",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "f22",
      "to": "k1",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "f23",
      "to": "k1",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "f23",
      "to": "k2",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "f23",
      "to": "k6",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "f23",
      "to": "t3.2",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "f-cc",
      "to": "t3.6",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "f-cc",
      "to": "f20",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "c01",
      "to": "f01",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "c02",
      "to": "f02",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "c03",
      "to": "f03",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "c04",
      "to": "f04",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "c06a",
      "to": "f06",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "c06b",
      "to": "f06",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "c07a",
      "to": "f07",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "c07b",
      "to": "f07",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "c09",
      "to": "f09",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "c10",
      "to": "f10",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "c15",
      "to": "f15",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "c18a",
      "to": "f18",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "c18b",
      "to": "f18",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "c20a",
      "to": "f20",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "c20b",
      "to": "f20",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "c20c",
      "to": "f20",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "c20d",
      "to": "f20",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "c20e",
      "to": "f20",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "c20g",
      "to": "f20",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "c23-sdc",
      "to": "f23",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "c23-wgc",
      "to": "f23",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "mech.bh-entropy",
      "to": "f17",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "mech.bh-entropy",
      "to": "f18",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "c08",
      "to": "f08",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "c11",
      "to": "f11",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "c20f-i",
      "to": "f20",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "c20f-ii",
      "to": "f20",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "c20f-iii",
      "to": "f20",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "mech.cold-spot-isw",
      "to": "f16",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "mech.stellar-cooling-kk",
      "to": "f11",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "pred.c-rd-1",
      "to": "f-cc",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "pred.lambda-1-4",
      "to": "f02",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "pred.f14-cannex",
      "to": "f14",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "contradicts",
      "from": "path-a",
      "to": "path-b",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "path-a",
      "to": "t3.6",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "path-a",
      "to": "cc1.v4-16",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "path-a",
      "to": "f-cc",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "path-b",
      "to": "t3.6prime",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "path-b",
      "to": "cc1.v4-16",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "f-cc",
      "to": "path-a",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "b-nu-1",
      "to": "path-a",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    }
  ],
  "supersessions": [
    {
      "superseded_ref": "cc1.v4-14",
      "successor_ref": "cc1.v4-16",
      "at_state": "dg@stage-2-cc1",
      "reason": "CC-1 reidentified: geometry couples to the modular free energy W(epsilon), not to F_Q at first order. F_Q is the second cumulant (stiffness), not the source; the source is the first cumulant, modular energy. SF-DG-013 (June 2026), v4.16 cumulant reorganization."
    }
  ]
};

module.exports = { STORE };
