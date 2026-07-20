// Role: the dg kernel store: Stage 1 tier commitments (Tier 0 axioms, Tier 1-2 standard results, Tier 2.5 observations, Tier 3 adopted conjectures), atomized one commitment per claim from trellis/4_16_main.md Section 1. Hand-filled from the generated empty skeleton; the DG region proper (CC-1, K-constraints, functions, contracts, sorries, the exclusion reservoir) is Stage 2, not entered here.
// Contract: exports STORE = { store_id, claims, links }. Pure data; imports nothing.
// Invariant: every claim is declared at or below what it earns with no support links or checking records yet: axioms self-ground to constitutive by their kind ceiling, every other Stage 1 claim floors at asserted. B-NU-1 and the Tier 3 branch-commitment apparatus are deliberately not entered here; they belong to Stage 2 alongside the Path A / Path B branch-commitment structure they are entangled with.
"use strict";

const STORE = { store_id: "dg", claims: [
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
  }
], links: [] };

module.exports = { STORE };
