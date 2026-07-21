// Role: the dg kernel store: Stage 1 tier commitments, Stage 2 DG structure bare, Stage 2.5 patch and lineage, Stage 3a supports, Stage 3b source-table completion, checking records, and independence lifts, and Stage 3c the exclusion reservoir. Tier 0 axioms, Tier 1-2 standard results, Tier 2.5 observations, Tier 3 adopted conjectures (Stage 1); CC-1, K-constraints, structural proofs, functions, contracts, predictions, the branch fork, and the sorry ledger (Stage 2); the dispositioned stub rows, K18, the GUT Box occupant and structural-findings material, and source-table lineage/reclassification (Stage 2.5); supports links (Stage 3a); mechanism source_id corrections, checking records in three bands (tier claims, audited derivations, floored otherwise), and independence lifts (Stage 3b). Every reservoir entry (THE DEAD table, ER entries, STRUCK contracts, dead functions, the KBC-void row), 21 class-level exclusion (block) claims, and the 5 synthesis-backlog methods kills, each as evidence claim, killed claim, and withdrawal record with a typed reinstatement condition (Stage 3c).
// Contract: exports STORE = { store_id, claims, links, supersessions, withdrawals }. Pure data; imports nothing.
// Invariant: every claim is declared at or below what it earns, via the real earnedGrade() computation over the real gate. A supports link's own declared_grade is an honest snapshot of its source claim's earned grade at wire time. A claim's source_id names the specific document its content actually comes from where determinable, the generic trellis.v4-16 otherwise. A checking record cites a real source-table row whose document actually performs the check named in its method text; its independence is computed externally against footprintClosure over rests_on (attached as this record's own footprint field, read from the pre-schema spec, never trusted from the vendored checkingRecord() builder, which drops this field from its returned object into canonical.extensions; see docs/governing-conventions.md Section 5). depends-on links wire provenance brackets and parent relations to already-entered claims only. Contract/mechanism verdicts ride in extensions.verdict, read by periphery, never the gate. Sorry status, priority, and gating ride in extensions per the same rule.
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
      "declared_grade": "checked",
      "statement": "T1.1: Energy Conservation. Energy is conserved in every closed system. Energy can change form but cannot be created or destroyed. Any calculation producing energy from nothing is wrong.",
      "checking_records": [
        {
          "checker_id": "checker:literature",
          "method_class": "replication",
          "method": "established, independently replicated result in the standard physics literature this claim's source_id catalogs",
          "checked_at_state": "dg@stage-3b",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "lit.standard-physics-t1t2"
          ]
        }
      ]
    },
    {
      "ref": "t1.2",
      "kind": "standard-result",
      "source_id": "lit.standard-physics-t1t2",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "T1.2: Second Law. Entropy of an isolated system never decreases. Macroscopic processes are irreversible. Time has a thermodynamic arrow.",
      "checking_records": [
        {
          "checker_id": "checker:literature",
          "method_class": "replication",
          "method": "established, independently replicated result in the standard physics literature this claim's source_id catalogs",
          "checked_at_state": "dg@stage-3b",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "lit.standard-physics-t1t2"
          ]
        }
      ]
    },
    {
      "ref": "t1.3",
      "kind": "standard-result",
      "source_id": "lit.standard-physics-t1t2",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "T1.3: Finite Energy Budgets. Physical processes cannot produce trans-Planckian energy outputs from sub-Planckian inputs. Any E = rho x V calculation yielding energies exceeding the rest mass of the progenitor system is automatically suspect. This is the Volume Bug filter: it catches errors of the form \"multiply a Planck-scale energy density by a macroscopic volume.\"",
      "checking_records": [
        {
          "checker_id": "checker:literature",
          "method_class": "replication",
          "method": "established, independently replicated result in the standard physics literature this claim's source_id catalogs",
          "checked_at_state": "dg@stage-3b",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "lit.standard-physics-t1t2"
          ]
        }
      ]
    },
    {
      "ref": "t1.4",
      "kind": "standard-result",
      "source_id": "lit.standard-physics-t1t2",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "T1.4: Information Processing Costs Energy. Landauer's principle: erasing one bit of information dissipates at least kT ln 2 of energy. Information processing is a physical process subject to T1.1 and T1.2. The vacuum, if it processes information, pays these costs.",
      "checking_records": [
        {
          "checker_id": "checker:literature",
          "method_class": "replication",
          "method": "established, independently replicated result in the standard physics literature this claim's source_id catalogs",
          "checked_at_state": "dg@stage-3b",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "lit.standard-physics-t1t2"
          ]
        }
      ]
    },
    {
      "ref": "t1.5",
      "kind": "standard-result",
      "source_id": "lit.standard-physics-t1t2",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "T1.5: Null Energy Condition. For any null vector k^mu, T_{mu nu} k^mu k^nu >= 0 for all physically realizable matter. Violations signal ghost instabilities (kinetic term sign flip), vacuum decay, or missing physics.",
      "checking_records": [
        {
          "checker_id": "checker:literature",
          "method_class": "replication",
          "method": "established, independently replicated result in the standard physics literature this claim's source_id catalogs",
          "checked_at_state": "dg@stage-3b",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "lit.standard-physics-t1t2"
          ]
        }
      ]
    },
    {
      "ref": "t1.6",
      "kind": "standard-result",
      "source_id": "lit.standard-physics-t1t2",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "T1.6: Causal Locality. Information propagates at most at c. No instantaneous global effects. A theory that requires a macroscopic spatially extended system to respond as a single monolithic quantum gate violates this. This is the filter that catches naive Margolus-Levitin applications.",
      "checking_records": [
        {
          "checker_id": "checker:literature",
          "method_class": "replication",
          "method": "established, independently replicated result in the standard physics literature this claim's source_id catalogs",
          "checked_at_state": "dg@stage-3b",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "lit.standard-physics-t1t2"
          ]
        }
      ]
    },
    {
      "ref": "t2.1",
      "kind": "standard-result",
      "source_id": "lit.standard-physics-t1t2",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "T2.1: Unitarity. The S-matrix is unitary. Probability is conserved. No information is destroyed in principle (though it may become practically inaccessible).",
      "checking_records": [
        {
          "checker_id": "checker:literature",
          "method_class": "replication",
          "method": "established, independently replicated result in the standard physics literature this claim's source_id catalogs",
          "checked_at_state": "dg@stage-3b",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "lit.standard-physics-t1t2"
          ]
        }
      ]
    },
    {
      "ref": "t2.2",
      "kind": "standard-result",
      "source_id": "lit.standard-physics-t1t2",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "T2.2: Ghost Freedom. All propagating degrees of freedom have positive-definite kinetic terms. Negative kinetic energy (ghosts) renders the vacuum unstable to runaway pair production. Any construction must demonstrate ghost freedom through explicit DOF counting.",
      "checking_records": [
        {
          "checker_id": "checker:literature",
          "method_class": "replication",
          "method": "established, independently replicated result in the standard physics literature this claim's source_id catalogs",
          "checked_at_state": "dg@stage-3b",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "lit.standard-physics-t1t2"
          ]
        }
      ]
    },
    {
      "ref": "t2.3",
      "kind": "standard-result",
      "source_id": "lit.standard-physics-t1t2",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "T2.3: Correct DOF Counting. The number of propagating degrees of freedom must be established by rigorous Hamiltonian constraint analysis (Dirac-Bergmann algorithm), not by counting fields. Constrained systems (gauge theories, gravity) always have fewer DOF than naive field counting suggests.",
      "checking_records": [
        {
          "checker_id": "checker:literature",
          "method_class": "replication",
          "method": "established, independently replicated result in the standard physics literature this claim's source_id catalogs",
          "checked_at_state": "dg@stage-3b",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "lit.standard-physics-t1t2"
          ]
        }
      ]
    },
    {
      "ref": "t2.4",
      "kind": "standard-result",
      "source_id": "lit.standard-physics-t1t2",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "T2.4: Diffeomorphism Invariance. The laws of physics take the same form in all coordinate systems. Any coupling to the gravitational sector must be expressible in a generally covariant form. State-dependent couplings (such as v = v(F_Q)) require explicit demonstration that F_Q transforms as a scalar under diffeomorphisms.",
      "checking_records": [
        {
          "checker_id": "checker:literature",
          "method_class": "replication",
          "method": "established, independently replicated result in the standard physics literature this claim's source_id catalogs",
          "checked_at_state": "dg@stage-3b",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "lit.standard-physics-t1t2"
          ]
        }
      ]
    },
    {
      "ref": "t2.5",
      "kind": "standard-result",
      "source_id": "lit.standard-physics-t1t2",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "T2.5: GR Recovery. Any modification of gravity must reduce exactly to General Relativity in the appropriate limit (weak field, incoherent matter, low density). The gravitational constant G_N must be constant and universal in this limit.",
      "checking_records": [
        {
          "checker_id": "checker:literature",
          "method_class": "replication",
          "method": "established, independently replicated result in the standard physics literature this claim's source_id catalogs",
          "checked_at_state": "dg@stage-3b",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "lit.standard-physics-t1t2"
          ]
        }
      ]
    },
    {
      "ref": "t2.6",
      "kind": "standard-result",
      "source_id": "lit.precision-gravity-tests-t2-6",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "T2.6: Observational Compatibility. Existing precision measurements (NICER radii, LIGO tidal deformability, GW170817, Shapiro delay masses, Cas A cooling, RHIC viscosity, short-range gravity tests, atomic clock constraints) must be respected. Predictions contradicting established observations at the relevant precision constitute kills.",
      "checking_records": [
        {
          "checker_id": "checker:literature",
          "method_class": "replication",
          "method": "established, independently replicated result in the standard physics literature this claim's source_id catalogs",
          "checked_at_state": "dg@stage-3b",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "lit.precision-gravity-tests-t2-6"
          ]
        }
      ]
    },
    {
      "ref": "t2.7",
      "kind": "standard-result",
      "source_id": "lit.standard-physics-t1t2",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "T2.7: Conformal Invariance of Gauge Kinetic Terms. The Maxwell action sqrt(-g) F^{mu nu} F_{mu nu} is conformally invariant in 4D. This is a theorem of 4D field theory, independent of any specific model. Any gauge field localized on a 3-brane in AdS_5 has a tree-level coupling constant independent of brane position, because the AdS_5 warp factor is a conformal rescaling of the 4D induced metric. This structural boundary establishes that the framework cannot modify electromagnetic couplings through any tree-level geometric channel.",
      "checking_records": [
        {
          "checker_id": "checker:literature",
          "method_class": "replication",
          "method": "established, independently replicated result in the standard physics literature this claim's source_id catalogs",
          "checked_at_state": "dg@stage-3b",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "lit.standard-physics-t1t2"
          ]
        }
      ]
    },
    {
      "ref": "t2.8",
      "kind": "standard-result",
      "source_id": "lit.standard-physics-t1t2",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "T2.8: Higgs Identity. Different Higgs fields in different sectors of the theory must not be conflated. The SO(1,4) gravitational Higgs (which sets M_{Pl,eff}) is the gravitational symmetry-breaking scale. It couples to the electron mass, Bohr radius, and pycnonuclear screening at zero strength at tree level. This filter catches the most common error in external analyses of the framework.",
      "checking_records": [
        {
          "checker_id": "checker:literature",
          "method_class": "replication",
          "method": "established, independently replicated result in the standard physics literature this claim's source_id catalogs",
          "checked_at_state": "dg@stage-3b",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "lit.standard-physics-t1t2"
          ]
        }
      ]
    },
    {
      "ref": "t2.9",
      "kind": "standard-result",
      "source_id": "lit.standard-physics-t1t2",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "T2.9: Semiclassical Causality. The state-dependent coupling v = v(F_Q) must preserve the causal structure of spacetime. The matter sector evolves via standard linear quantum mechanics. The gravitational background responds to the quantum state through semiclassical backreaction, analogous to G_{mu nu} = 8 pi <T_{mu nu}>_ren. The no-signaling theorem for linear QM guarantees that F_Q evaluated from the local reduced density matrix is invariant under spacelike-separated operations. Any construction where the metric depends on the un-traced global density matrix violates special relativity via the Gisin-Polchinski theorem and is rejected. The coupling v(F_Q) is evaluated from the local reduced state on the causal diamond; Donnelly-Freidel edge modes ensure this evaluation is foliation-independent but do not independently enforce causality. All effective action computations deriving the state-dependent coupling must employ the Schwinger-Keldysh Closed Time Path (CTP) formalism, which natively enforces retarded boundary conditions (G_R(x,y) = 0 for spacelike separations) through the forward/backward time-branch structure. The coincidence-limit reduction of the heat kernel to the a_4(x) contact term renders the coupling strictly local. This is a theorem of the construction, not an additional assumption.",
      "checking_records": [
        {
          "checker_id": "checker:literature",
          "method_class": "replication",
          "method": "established, independently replicated result in the standard physics literature this claim's source_id catalogs",
          "checked_at_state": "dg@stage-3b",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "lit.standard-physics-t1t2"
          ]
        }
      ]
    },
    {
      "ref": "b1",
      "kind": "observation",
      "source_id": "lit.standard-open-problems-physics",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "B1: Singularities. GR predicts geodesic incompleteness at black hole interiors and the Big Bang. Physical quantities (density, curvature) diverge. This signals the breakdown of the classical theory.",
      "checking_records": [
        {
          "checker_id": "checker:literature",
          "method_class": "data-audit",
          "method": "the specific measurement or detection record this claim's source_id catalogs",
          "checked_at_state": "dg@stage-3b",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "lit.standard-open-problems-physics"
          ]
        }
      ]
    },
    {
      "ref": "b2",
      "kind": "observation",
      "source_id": "lit.desi-dr1-dr2-bao",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "B2: Dark Energy. The cosmological constant Lambda exists and drives accelerating expansion. Its value (~10^-122 in Planck units) is unexplained. DESI 2024-2025 BAO data (DR1 + DR2) prefers evolving dark energy (w0 ~ -0.7, wa ~ -1.0) at 2.8-sigma to 4.2-sigma over static Lambda-CDM, depending on the supernovae compilation utilized (2.8-sigma floor from DESI + CMB + Pantheon+; 4.2-sigma ceiling from DESI + CMB + DESY5), suggesting Lambda may evolve.",
      "checking_records": [
        {
          "checker_id": "checker:literature",
          "method_class": "data-audit",
          "method": "the specific measurement or detection record this claim's source_id catalogs",
          "checked_at_state": "dg@stage-3b",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "lit.desi-dr1-dr2-bao"
          ]
        }
      ]
    },
    {
      "ref": "b3",
      "kind": "observation",
      "source_id": "lit.standard-open-problems-physics",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "B3: Dark Matter. 85% of the gravitational mass of the universe is unaccounted for by the Standard Model. Rotation curves, lensing, CMB anisotropy, and large-scale structure all require it. Its particle identity is unknown.",
      "checking_records": [
        {
          "checker_id": "checker:literature",
          "method_class": "data-audit",
          "method": "the specific measurement or detection record this claim's source_id catalogs",
          "checked_at_state": "dg@stage-3b",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "lit.standard-open-problems-physics"
          ]
        }
      ]
    },
    {
      "ref": "b4",
      "kind": "observation",
      "source_id": "lit.standard-open-problems-physics",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "B4: Black Hole Information Paradox. Hawking radiation appears to destroy information (violating T2.1), yet the horizon is locally smooth. Resolution requires understanding the microstructure of horizons.",
      "checking_records": [
        {
          "checker_id": "checker:literature",
          "method_class": "data-audit",
          "method": "the specific measurement or detection record this claim's source_id catalogs",
          "checked_at_state": "dg@stage-3b",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "lit.standard-open-problems-physics"
          ]
        }
      ]
    },
    {
      "ref": "b5",
      "kind": "observation",
      "source_id": "lit.standard-open-problems-physics",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "B5: Cosmological Constant Problem. Quantum field theory predicts a vacuum energy ~10^120 times larger than observed. The cancellation mechanism is unknown.",
      "checking_records": [
        {
          "checker_id": "checker:literature",
          "method_class": "data-audit",
          "method": "the specific measurement or detection record this claim's source_id catalogs",
          "checked_at_state": "dg@stage-3b",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "lit.standard-open-problems-physics"
          ]
        }
      ]
    },
    {
      "ref": "b6",
      "kind": "observation",
      "source_id": "lit.standard-open-problems-physics",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "B6: Hierarchy Problem. The electroweak scale (M_EW ~ 10^2 GeV) is 10^16 times smaller than the Planck scale (M_Pl ~ 10^19 GeV). No mechanism within the SM protects this hierarchy from radiative corrections.",
      "checking_records": [
        {
          "checker_id": "checker:literature",
          "method_class": "data-audit",
          "method": "the specific measurement or detection record this claim's source_id catalogs",
          "checked_at_state": "dg@stage-3b",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "lit.standard-open-problems-physics"
          ]
        }
      ]
    },
    {
      "ref": "b7",
      "kind": "observation",
      "source_id": "lit.standard-open-problems-physics",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "B7: No Quantum Gravity. The Standard Model and General Relativity are mutually incompatible at energies approaching M_Pl. Perturbative quantization of GR is non-renormalizable.",
      "checking_records": [
        {
          "checker_id": "checker:literature",
          "method_class": "data-audit",
          "method": "the specific measurement or detection record this claim's source_id catalogs",
          "checked_at_state": "dg@stage-3b",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "lit.standard-open-problems-physics"
          ]
        }
      ]
    },
    {
      "ref": "b8",
      "kind": "observation",
      "source_id": "lit.standard-open-problems-physics",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "B8: Neutrino Masses. Neutrinos have mass (oscillation experiments), but the SM does not predict this. The mass generation mechanism is unknown.",
      "checking_records": [
        {
          "checker_id": "checker:literature",
          "method_class": "data-audit",
          "method": "the specific measurement or detection record this claim's source_id catalogs",
          "checked_at_state": "dg@stage-3b",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "lit.standard-open-problems-physics"
          ]
        }
      ]
    },
    {
      "ref": "b9",
      "kind": "observation",
      "source_id": "lit.standard-open-problems-physics",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "B9: Matter-Antimatter Asymmetry. The universe is matter-dominated. The SM does not contain sufficient CP violation to produce the observed baryon asymmetry.",
      "checking_records": [
        {
          "checker_id": "checker:literature",
          "method_class": "data-audit",
          "method": "the specific measurement or detection record this claim's source_id catalogs",
          "checked_at_state": "dg@stage-3b",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "lit.standard-open-problems-physics"
          ]
        }
      ]
    },
    {
      "ref": "b10",
      "kind": "observation",
      "source_id": "lit.standard-open-problems-physics",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "B10: Hubble Tension. Local H0 measurements (~73 km/s/Mpc from distance ladder) disagree with CMB-inferred H0 (~67 km/s/Mpc from Planck) at ~5-sigma.",
      "checking_records": [
        {
          "checker_id": "checker:literature",
          "method_class": "data-audit",
          "method": "the specific measurement or detection record this claim's source_id catalogs",
          "checked_at_state": "dg@stage-3b",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "lit.standard-open-problems-physics"
          ]
        }
      ]
    },
    {
      "ref": "b11",
      "kind": "observation",
      "source_id": "lit.standard-open-problems-physics",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "B11: sigma8 Tension. Weak lensing surveys measure less matter clustering than Planck CMB predicts, at ~2 to 3-sigma.",
      "checking_records": [
        {
          "checker_id": "checker:literature",
          "method_class": "data-audit",
          "method": "the specific measurement or detection record this claim's source_id catalogs",
          "checked_at_state": "dg@stage-3b",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "lit.standard-open-problems-physics"
          ]
        }
      ]
    },
    {
      "ref": "b12",
      "kind": "observation",
      "source_id": "corpus.nuclear-astrophysics-anomalies",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "B12: LUNA Screening Anomaly. Enhanced electron screening in d+d fusion in metallic targets exceeds linear Thomas-Fermi predictions by 10 to 30x. Anomaly correlates with conductor/insulator status, not lattice coherence. On-resonance laser stimulation amplifies the effect at specific phonon frequencies.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "data-audit",
          "method": "audited the measurement data (LUNA collaboration screening energies) this AI investigation report compiles",
          "checked_at_state": "dg@stage-3b",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.nuclear-astrophysics-anomalies"
          ]
        }
      ]
    },
    {
      "ref": "b13",
      "kind": "observation",
      "source_id": "lit.psr-j0740-6620-j0952-0607",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "B13: Hyperon Puzzle. Standard nuclear physics predicts that hyperons appear in neutron star cores at ~2 rho_0, softening the EOS and limiting M_max to ~1.6 to 1.8 M_sun. Yet pulsars exist at 2.08 M_sun (PSR J0740+6620) and 2.35 M_sun (PSR J0952-0607). Additional stiffness is required.",
      "checking_records": [
        {
          "checker_id": "checker:literature",
          "method_class": "data-audit",
          "method": "the specific measurement or detection record this claim's source_id catalogs",
          "checked_at_state": "dg@stage-3b",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "lit.psr-j0740-6620-j0952-0607"
          ]
        }
      ]
    },
    {
      "ref": "b14",
      "kind": "observation",
      "source_id": "lit.gw190814-gw230529-ligo-p2300352",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "B14: Lower Mass Gap. Compact objects in the 2.5 to 5 M_sun range are anomalously rare. The gap separates the heaviest neutron stars from the lightest black holes. LIGO O3/O4 detections (GW190814, GW230529) are beginning to populate this region, preferentially from binary/merger channels.",
      "checking_records": [
        {
          "checker_id": "checker:literature",
          "method_class": "data-audit",
          "method": "the specific measurement or detection record this claim's source_id catalogs",
          "checked_at_state": "dg@stage-3b",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "lit.gw190814-gw230529-ligo-p2300352"
          ]
        }
      ]
    },
    {
      "ref": "b15",
      "kind": "observation",
      "source_id": "lit.standard-open-problems-physics",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "B15: Failed Supernovae. Some massive stars (~17+ M_sun) appear to vanish without explosion. N6946-BH1 (25 M_sun RSG) produced only a faint ~10^47 erg transient and disappeared, confirmed by JWST. Standard neutrino-driven explosion mechanisms fail for high-compactness cores.",
      "checking_records": [
        {
          "checker_id": "checker:literature",
          "method_class": "data-audit",
          "method": "the specific measurement or detection record this claim's source_id catalogs",
          "checked_at_state": "dg@stage-3b",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "lit.standard-open-problems-physics"
          ]
        }
      ]
    },
    {
      "ref": "b16",
      "kind": "observation",
      "source_id": "lit.des-y3-cmb-cold-spot",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "B16: CMB Cold Spot. The Eridanus supervoid (20% underdense) aligns with an anomalous CMB cold spot. Standard Lambda-CDM ISW predictions undershoot the observed temperature deficit. DES Y3 data shows 30% weaker lensing from this void.",
      "checking_records": [
        {
          "checker_id": "checker:literature",
          "method_class": "data-audit",
          "method": "the specific measurement or detection record this claim's source_id catalogs",
          "checked_at_state": "dg@stage-3b",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "lit.des-y3-cmb-cold-spot"
          ]
        }
      ]
    },
    {
      "ref": "b17",
      "kind": "observation",
      "source_id": "lit.donadi-et-al-2021-nature-physics",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "B17: The Measurement Problem and the Gran Sasso Falsification. Quantum mechanics lacks a physical criterion separating the unitary regime of superposition from the classical regime of macroscopic definiteness. The Penrose-Diosi (DP) model provides the most physically motivated objective collapse theory, attributing wavefunction reduction to gravitational self-energy of the superposed mass distribution: tau_DP ~ hbar/Delta E_G. However, the standard DP collapse dynamics generate continuous stochastic momentum diffusion on charged particles, producing a calculable spectrum of spontaneous X-ray bremsstrahlung (dGamma/dE ~ 1/E, scaling as R0^-3). In 2021, a dedicated experiment at the Laboratori Nazionali del Gran Sasso (Donadi et al., Nature Physics 2021) using a high-purity germanium detector in the 10 to 100 keV range detected zero anomalous radiation, establishing a lower bound R0 >~ 0.54e-10 m. This is three orders of magnitude above the natural nuclear-scale cutoff (R0 ~ 10^-15 m) required for macroscopic localization, falsifying the parameter-free DP model as formulated in 4D. If gravity induces objective collapse, the energy of state reduction must dissipate through a channel invisible to 4D electromagnetism.",
      "checking_records": [
        {
          "checker_id": "checker:literature",
          "method_class": "data-audit",
          "method": "the specific measurement or detection record this claim's source_id catalogs",
          "checked_at_state": "dg@stage-3b",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "lit.donadi-et-al-2021-nature-physics"
          ]
        }
      ]
    },
    {
      "ref": "b18",
      "kind": "observation",
      "source_id": "lit.farah-et-al-2026-nature",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "B18: SN 2024afav Chirp Anomaly. The superluminous supernova SN 2024afav (z = 0.0724, Mc ~ -20.7) exhibits a quasi-periodic, accelerating chirp in its post-peak electromagnetic light curve, attributed by Farah et al. (Nature 2026) to Lense-Thirring precession of a misaligned accretion disk around a newborn magnetar (P = 4.2 +/- 0.2 ms, B = 1.6 +/- 0.1e14 G). Seven distinct brightness bumps span 175 days. The temporal intervals between bumps accelerate from 42.4 days to 16.1 days (Phase 0 to +109), consistent with a contracting accretion disk. At Phase +109, the interval abruptly doubles to 32.1 days, producing a >5.8-sigma deviation from the smooth viscous power-law baseline predicted by standard alpha-disk models. This deceleration is coincident with the spectroscopic emergence of lower-ionization [O II] + [Ca II] 7300 A emission and a weakening of early [O III] features. The standard LT model accommodates the gross periodicity but the discontinuous deceleration and the correlated ionization shift remain unexplained. The anomaly is open.",
      "checking_records": [
        {
          "checker_id": "checker:literature",
          "method_class": "data-audit",
          "method": "the specific measurement or detection record this claim's source_id catalogs",
          "checked_at_state": "dg@stage-3b",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "lit.farah-et-al-2026-nature"
          ]
        }
      ]
    },
    {
      "ref": "b19",
      "kind": "observation",
      "source_id": "lit.g117-b15a-cas-a-cooling",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "B19: Exotic Stellar Cooling Anomaly. The pulsating white dwarf G117-B15A exhibits a secular period drift P_dot_obs = (5.12 +/- 0.82)e-15 s/s for its 215.2 s fundamental mode, measured over a 50-year baseline. Standard gravothermal models predict P_dot_th ~ 1.25e-15 s/s. The discrepancy corresponds to an anomalous missing luminosity of ~10^32 erg/s. The neutron star in Cassiopeia A exhibits a ~2% to 4% surface temperature decline over a 10 to 18 year Chandra baseline, exceeding modified Urca predictions (~0.2% to 0.3% per decade). Mainstream attributions invoke DFSZ axion emission (m_a cos^2(beta) ~ 17.4 meV) or enhanced Cooper-pair breaking neutrinos. The axion parameter space required for these attributions (g_a-gamma-gamma ~ 1e-11 GeV^-1, g_aee ~ 1e-13) is under severe multi-modal observational pressure.",
      "checking_records": [
        {
          "checker_id": "checker:literature",
          "method_class": "data-audit",
          "method": "the specific measurement or detection record this claim's source_id catalogs",
          "checked_at_state": "dg@stage-3b",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "lit.g117-b15a-cas-a-cooling"
          ]
        }
      ]
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
      "declared_grade": "checked",
      "statement": "K1: Two-Channel Decomposition [from Tier 4.4 + positivity of T_3]. The brane stress-energy decomposes exactly into: (i) Trace channel (radial/curvature), which scales as N, sources Ricci curvature, and IS gravity; (ii) Traceless antisymmetric channel (angular/torsion), which scales as f^2 N^2 for coherent matter and sources torsion via the Cartan equation. This decomposition is an algebraic theorem of the SO(1,4) to SO(1,3) breaking pattern. Lifted to checked (landing-1 Track 3): its own conjunctive co-premise K3 (now K3-prime, independently-rechecked) no longer caps this claim's support delivery below the corroborated threshold the two-row rule needs to let K1's own Stage 3b checking record (checker:gemini-dr) stand on its own.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "reproduced the two-channel decomposition (trace channel sourcing Ricci curvature, traceless antisymmetric channel sourcing torsion) and its modified TOV consequence",
          "checked_at_state": "dg@stage-3b",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.half-sphere-report"
          ],
          "cited_source": "corpus.half-sphere-report"
        }
      ]
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
      "ref": "im.israel-1966-junction",
      "kind": "standard-result",
      "source_id": "lit.israel-1966",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "The Israel junction condition, trace-reversed form, Z2-orbifold-reduced (Israel 1966): across a codimension-one brane with unit normal n^M and induced metric gamma_mu_nu, [K_mu_nu] - [K] gamma_mu_nu = kappa_5^2 S_mu_nu, where [X] = X+ - X- across the brane and S_mu_nu is the brane's own stress tensor. Under a Z2 orbifold symmetry (K-_mu_nu = -K+_mu_nu) this reduces to the one-sided, trace-reversed form K+_mu_nu = -(kappa_5^2/2)(S_mu_nu - (1/3) S gamma_mu_nu). This is the master junction relation both K3 audit artifacts (PK-AUD-K3-001, PK-AUD-K3-002) independently rederive before applying it to a pure-tension brane (S_mu_nu = -T_3 gamma_mu_nu) to obtain every tension-position relation the imports below carry.",
      "checking_records": [
        {
          "checker_id": "checker:deepseek-expert",
          "method_class": "derivation-audit",
          "method": "independent rederivation of the Israel junction condition, trace-reversed and Z2-orbifold-reduced, stated in the audit's own Conventions Block before being applied to both the flat and AdS4-sliced cases",
          "checked_at_state": "dg@landing-1",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": ["corpus.pk-aud-k3-001", "lit.israel-1966", "lit.randall-sundrum-1999", "lit.karch-randall-2001"]
        },
        {
          "checker_id": "checker:kimi-k3",
          "method_class": "derivation-audit",
          "method": "independent rederivation of the same trace-reversed, Z2-orbifold-reduced junction condition in the audit's own Conventions block (Section 2), applied identically to the flat, AdS4-sliced, and dS4-sliced cases",
          "checked_at_state": "dg@landing-1",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": ["corpus.pk-aud-k3-002", "lit.israel-1966", "lit.randall-sundrum-1999", "lit.karch-randall-2001", "lit.goldberger-wise-1999", "lit.dewolfe-et-al-2000"]
        }
      ],
      "extensions": {
        "locator": "PK-AUD-K3-001: Conventions Block (unlabeled Israel-condition statement) and eq. (C1). PK-AUD-K3-002: Section 2, Conventions block (trace-reversed form given directly, unlabeled)."
      }
    },
    {
      "ref": "im.rs1999-critical-tension",
      "kind": "standard-result",
      "source_id": "lit.randall-sundrum-1999",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "The Randall-Sundrum critical brane tension, flat-sliced case (Randall, Sundrum 1999): for a Z2-orbifold brane at the boundary of a flat-sliced (Poincare/Minkowski-sliced) AdS5 bulk of curvature radius L, the Israel junction condition forces the tension to the critical value T_3 = 6/(kappa_5^2 L), exactly, with no dependence on the brane's own position (a pure gauge freedom in the flat-sliced case, since translating the brane along the warped direction changes nothing). Both K3 audit artifacts independently rederive this as the ε=0 boundary case of their own more general warped-product treatment.",
      "checking_records": [
        {
          "checker_id": "checker:deepseek-expert",
          "method_class": "derivation-audit",
          "method": "independent rederivation from the RS flat-brane metric ansatz and the Israel junction condition, Q1(a), reaching the boxed result T_3^(RS) = 6k/kappa_5^2 = 6/(kappa_5^2 L)",
          "checked_at_state": "dg@landing-1",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": ["corpus.pk-aud-k3-001", "lit.israel-1966", "lit.randall-sundrum-1999", "lit.karch-randall-2001"]
        },
        {
          "checker_id": "checker:kimi-k3",
          "method_class": "derivation-audit",
          "method": "independent rederivation from the ε=0 specialization of the audit's own general warped-product master equation, Section 3.1, reaching T_3 = 6/(kappa_5^2 L) and flagging it [RESULT], reproduced with algebra shown",
          "checked_at_state": "dg@landing-1",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": ["corpus.pk-aud-k3-002", "lit.israel-1966", "lit.randall-sundrum-1999", "lit.karch-randall-2001", "lit.goldberger-wise-1999", "lit.dewolfe-et-al-2000"]
        }
      ],
      "extensions": {
        "locator": "PK-AUD-K3-001: Q1(a), boxed result. PK-AUD-K3-002: Section 3.1, eq. following specialization of (*) to ε=0."
      }
    },
    {
      "ref": "im.karch-randall-2001-tension-position",
      "kind": "standard-result",
      "source_id": "lit.karch-randall-2001",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "The Karch-Randall AdS4-sliced tension-position relation and its dS4-sliced mirror (Karch, Randall 2001): for a Z2-orbifold brane at position z_0 (equivalently u_b = z_0/L) in an AdS4-sliced AdS5 bulk of curvature radius L, the Israel junction condition gives T_3 = (6/kappa_5^2 L) tanh(z_0/L), strictly below the RS critical value, recovering it only in the flat-slicing limit z_0/L to infinity. Continuing the same construction to a dS4-sliced bulk (supercritical tension, no static AdS4-sliced solution) gives the mirror relation T_3 = (6/kappa_5^2 L) coth(z_0/L). Both relations are one continuous family in the slicing-curvature sign, not two separate literature results; both K3 audit artifacts derive them independently from the Israel junction condition above, applied to the Karch-Randall brane.",
      "checking_records": [
        {
          "checker_id": "checker:deepseek-expert",
          "method_class": "derivation-audit",
          "method": "independent rederivation of the AdS4-sliced case from the Karch-Randall warp-factor solution and the Israel junction condition, Q1(b), reaching the boxed result T_3^(KR) = (6/kappa_5^2) sqrt(1/L^2 - 1/L_4^2)",
          "checked_at_state": "dg@landing-1",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": ["corpus.pk-aud-k3-001", "lit.israel-1966", "lit.randall-sundrum-1999", "lit.karch-randall-2001"]
        },
        {
          "checker_id": "checker:kimi-k3",
          "method_class": "derivation-audit",
          "method": "independent rederivation of both the AdS4-sliced (Section 3.2, eq. KR-1/KR-2) and dS4-sliced continuation (Section 3.2, Properties list) from the same master warped-product equation, one-line check for the dS4 case flagged [RESULT, same derivation]",
          "checked_at_state": "dg@landing-1",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": ["corpus.pk-aud-k3-002", "lit.israel-1966", "lit.randall-sundrum-1999", "lit.karch-randall-2001", "lit.goldberger-wise-1999", "lit.dewolfe-et-al-2000"]
        }
      ],
      "extensions": {
        "locator": "PK-AUD-K3-001: Q1(b), boxed result (AdS4-sliced case only; the dS4 mirror is not separately derived in this artifact). PK-AUD-K3-002: Section 3.2, eq. (KR-1)/(KR-2) for the AdS4-sliced case, Properties list for the dS4-sliced continuation."
      }
    },
    {
      "ref": "im.goldberger-wise-effective-tension",
      "kind": "standard-result",
      "source_id": "lit.goldberger-wise-1999",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Brane-localized vacuum energy gravitates as tension (Goldberger, Wise 1999; DeWolfe, Freedman, Gubser, Karch 2000): for a brane hosting a scalar field with a homogeneous vacuum expectation value v, the scalar's own potential energy V(v) enters the Israel junction condition indistinguishably from the bare tension T_3, so the junction condition constrains only the effective tension T_eff = T_3 + V(v), never the bare T_3 alone. Any state-dependence of v therefore backreacts on the brane's own position and induced geometry through T_eff, not through T_3 in isolation. Both K3 audit artifacts derive this by adding the scalar's stress tensor to the brane action and re-deriving the junction condition.",
      "checking_records": [
        {
          "checker_id": "checker:deepseek-expert",
          "method_class": "derivation-audit",
          "method": "independent rederivation from the total brane stress tensor with a scalar potential added, Q4, reaching T_eff = T3 + V(v) and the self-consistency regime |V(v)| << T3",
          "checked_at_state": "dg@landing-1",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": ["corpus.pk-aud-k3-001", "lit.israel-1966", "lit.randall-sundrum-1999", "lit.karch-randall-2001"]
        },
        {
          "checker_id": "checker:kimi-k3",
          "method_class": "derivation-audit",
          "method": "independent rederivation from the brane-localized scalar stress tensor, Section 6, eq. (EFF), citing Goldberger-Wise 1999 and DeWolfe et al. 2000 directly as the standard root for brane vacuum energy gravitating as tension, and deriving the position-sensitivity enhancement cosh^2(z_0/L) beyond what (EFF) alone states",
          "checked_at_state": "dg@landing-1",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": ["corpus.pk-aud-k3-002", "lit.israel-1966", "lit.randall-sundrum-1999", "lit.karch-randall-2001", "lit.goldberger-wise-1999", "lit.dewolfe-et-al-2000"]
        }
      ],
      "extensions": {
        "locator": "PK-AUD-K3-001: Q4, first bullet (T_eff = T3 + V(v), derived without naming Goldberger-Wise/DeWolfe directly). PK-AUD-K3-002: Section 6, eq. (EFF), citing [6] Goldberger-Wise 1999 and [7] DeWolfe et al. 2000 by name."
      }
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
      "ref": "k3-prime",
      "kind": "derivation",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "independently-rechecked",
      "statement": "K3-prime: brane tension, criticality, and the modulus. (i) In the flat-sliced Poincare background of Paper 0 eq. 2, the Israel junction conditions pin the tension to the critical value T3 = 6/(kappa5^2 L), independent of z0; the content of that independence is that z0 is a modulus, a flat direction the junction conditions do not lift, which is why the radion exists and is stabilized by other sectors of the framework. (ii) In the physical dS-sliced background (static positive Lambda^(k)), the effective tension is locked to the position as T_eff = (6/kappa5^2 L) coth(z0/L), supercritical, with relative deviation from critical of order (L/l_dS)^2, approximately 10^-64; z0's flat direction is tilted at that scale. (iii) The bare T3 is a fixed parameter of the brane action and no dynamical field varies it; state-dependence enters the embedding only through T_eff = T3 + V(v(F_Q)), with position sensitivity enhanced by cosh^2(z0/L), significant at the vacuum-energy scale |V| ~ 3L/(kappa5^2 l^2). Supersedes K3 (landing-1 Track 3): K3's own text elided the flat-versus-KR-versus-dS distinction (i)-(iii) now makes explicit, and elided the state-dependence channel (iii) that (i) alone does not foreclose.",
      "checking_records": [
        {
          "checker_id": "checker:deepseek-expert",
          "method_class": "derivation-audit",
          "method": "adversarial audit of K3 as stated (PK-AUD-K3-001): rederives the flat-sliced (Q1a) and Karch-Randall (Q1b) junction-condition tension relations, the position-independence assessment (Q2), the corollary-kill assessment (Q3), and the state-dependence partition (Q4); verdict NEEDS REFINEMENT, surviving reformulation supplied",
          "checked_at_state": "dg@landing-1",
          "outcome": "confirms-with-noted-limits: K3 as stated NEEDS REFINEMENT (verdict), K3-prime is the audit's own surviving reformulation, not K3 unchanged",
          "independence": "distinct-party",
          "footprint": ["corpus.pk-aud-k3-001", "lit.israel-1966", "lit.randall-sundrum-1999", "lit.karch-randall-2001"]
        },
        {
          "checker_id": "checker:kimi-k3",
          "method_class": "derivation-audit",
          "method": "adversarial audit of K3 as stated (PK-AUD-K3-002): rederives the flat, AdS4-sliced, and dS4-sliced junction-condition tension relations from one master warped-product equation (Q1), the position-independence assessment (Q2), the corollary-kill assessment (Q3), and the state-dependence partition with the cosh^2(z0/L) enhancement (Q4); verdict NEEDS REFINEMENT leaning DEAD for K3 as literally stated, surviving reformulation supplied",
          "checked_at_state": "dg@landing-1",
          "outcome": "confirms-with-noted-limits: K3 as stated NEEDS REFINEMENT leaning DEAD in the genuinely-KR regime (verdict), K3-prime is the audit's own surviving reformulation, not K3 unchanged",
          "independence": "distinct-party",
          "footprint": ["corpus.pk-aud-k3-002", "lit.israel-1966", "lit.randall-sundrum-1999", "lit.karch-randall-2001", "lit.goldberger-wise-1999", "lit.dewolfe-et-al-2000"]
        }
      ],
      "extensions": {
        "locator": "PK-AUD-K3-001 Sections Q1-Q4 and the surviving reformulation; PK-AUD-K3-002 Sections 3-7 and the surviving reformulation (K3')."
      }
    },
    {
      "ref": "k3-prime2",
      "kind": "derivation",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "independently-rechecked",
      "statement": "K3-prime2: brane tension, criticality, and the modulus, part (iii) corrected (landing-2 Track B). (i) In the flat-sliced Poincare background of Paper 0 eq. 2, the Israel junction conditions pin the tension to the critical value T3 = 6/(kappa5^2 L), independent of z0; the content of that independence is that z0 is a modulus, a flat direction the junction conditions do not lift, which is why the radion exists and is stabilized by other sectors of the framework. (ii) In the physical dS-sliced background (static positive Lambda^(k)), the effective tension is locked to the position as T_eff = (6/kappa5^2 L) coth(z0/L), supercritical, with relative deviation from critical of order (L/l_dS)^2, approximately 10^-64; z0's flat direction is tilted at that scale. (iii, corrected) The bare T3 is a fixed parameter of the brane action and no dynamical field varies it; state-dependence enters the embedding only through T_eff = T3 + V(v(F_Q)). The response coefficient is sinh^2(u_b), the arccoth derivative, with sign delta u_b = -(kappa_5^2 L / 6) sinh^2(u_b) delta V for delta V added to the brane tension: the identically equal form (kappa_5^2 L / 6)(T_c / T_eff)^2 cosh^2(u_b) shows the bare cosh^2 label was a 10^-64 relative discrepancy with an untracked sign. Significant at the vacuum-energy scale |V| ~ 3L/(kappa5^2 l^2). Supersedes K3-prime (landing-2 Track B, three convergent adversarial audits, docs/audits/PK-AUD-K3B-001.md, PK-AUD-K3B-002.pdf, PK-AUD-K3B-003.md): K3-prime's own part (iii) used cosh^2(z0/L) with an unstated sign; the correct coefficient for the supercritical dS-sliced branch (part ii's own coth junction law) is sinh^2(u_b), not cosh^2(u_b), a 10^-64 relative discrepancy at the framework's own working point but an untracked sign, not a rounding matter. Parts (i) and (ii) are unchanged from K3-prime; their own checking records carry forward.",
      "checking_records": [
        {
          "checker_id": "checker:deepseek-expert",
          "method_class": "derivation-audit",
          "method": "adversarial audit of K3 as stated (PK-AUD-K3-001): rederives the flat-sliced (Q1a) and Karch-Randall (Q1b) junction-condition tension relations, the position-independence assessment (Q2), the corollary-kill assessment (Q3), and the state-dependence partition (Q4); verdict NEEDS REFINEMENT, surviving reformulation supplied",
          "checked_at_state": "dg@landing-1",
          "outcome": "confirms-with-noted-limits: K3 as stated NEEDS REFINEMENT (verdict), K3-prime is the audit's own surviving reformulation, not K3 unchanged",
          "independence": "distinct-party",
          "footprint": ["corpus.pk-aud-k3-001", "lit.israel-1966", "lit.randall-sundrum-1999", "lit.karch-randall-2001"]
        },
        {
          "checker_id": "checker:kimi-k3",
          "method_class": "derivation-audit",
          "method": "adversarial audit of K3 as stated (PK-AUD-K3-002): rederives the flat, AdS4-sliced, and dS4-sliced junction-condition tension relations from one master warped-product equation (Q1), the position-independence assessment (Q2), the corollary-kill assessment (Q3), and the state-dependence partition with the cosh^2(z0/L) enhancement (Q4); verdict NEEDS REFINEMENT leaning DEAD for K3 as literally stated, surviving reformulation supplied",
          "checked_at_state": "dg@landing-1",
          "outcome": "confirms-with-noted-limits: K3 as stated NEEDS REFINEMENT leaning DEAD in the genuinely-KR regime (verdict), K3-prime is the audit's own surviving reformulation, not K3 unchanged",
          "independence": "distinct-party",
          "footprint": ["corpus.pk-aud-k3-002", "lit.israel-1966", "lit.randall-sundrum-1999", "lit.karch-randall-2001", "lit.goldberger-wise-1999", "lit.dewolfe-et-al-2000"]
        },
        {
          "checker_id": "checker:deepseek-expert",
          "method_class": "derivation-audit",
          "method": "adversarial audit of the backreaction reconciliation SF-K3B-001 (PK-AUD-K3B-001, run 001, Q1): differentiates the stated coth u_b junction law directly, finds delta u_b = -(kappa_5^2 L/6) sinh^2(u_b) delta V, and finds the shore's stated cosh^2(u_b) coefficient algebraically incompatible with the coth junction law as an internal inconsistency",
          "checked_at_state": "dg@landing-2",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": ["corpus.pk-aud-k3b-001", "lit.randall-sundrum-1999", "lit.shiromizu-maeda-sasaki-2000", "lit.goldberger-wise-1999"]
        },
        {
          "checker_id": "checker:gpt-5.6-thinking",
          "method_class": "derivation-audit",
          "method": "adversarial audit of the backreaction reconciliation SF-K3B-001 (PK-AUD-K3B-002, run 002, Q1.4): derives the standard dS-brane relations q = coth u_b, differentiates T_eff = T_c coth u_b directly to delta u_b = -(kappa_5^2 L/6) sinh^2(u_b) delta V (eq. 20), and shows the claimed cosh^2(u_b) form is mathematically associated with q = tanh u_b, the subcritical AdS4-brane form, not the stated supercritical dS4 relation",
          "checked_at_state": "dg@landing-2",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": ["corpus.pk-aud-k3b-002", "lit.shiromizu-maeda-sasaki-2000", "lit.goldberger-wise-1999"]
        },
        {
          "checker_id": "checker:kimi-k3",
          "method_class": "derivation-audit",
          "method": "adversarial audit of the backreaction reconciliation SF-K3B-001 (PK-AUD-K3B-003, run 003, S0.3): re-derives the response law from T = T_c coth u_b, obtains du_b/dT = -(kappa_5^2 L/6) sinh^2 u_b, and exhibits the identically equal form -(kappa_5^2 L/6)(T_c/T)^2 cosh^2 u_b, showing the bare cosh^2 label is a 10^-64 relative discrepancy with an untracked sign, not a magnitude error",
          "checked_at_state": "dg@landing-2",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": ["corpus.pk-aud-k3b-003", "lit.shiromizu-maeda-sasaki-2000", "lit.karch-randall-2001", "lit.randall-sundrum-1999", "lit.goldberger-wise-1999"]
        }
      ],
      "extensions": {
        "locator": "PK-AUD-K3-001/002 Sections Q1-Q4 for parts (i)-(ii); PK-AUD-K3B-001 Q1, PK-AUD-K3B-002 Q1.4, PK-AUD-K3B-003 S0.3 for the corrected part (iii)."
      }
    },
    {
      "ref": "departure.k3-prime-idealization",
      "kind": "departure",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "corroborated",
      "statement": "The framework's working idealization uses the flat-sliced Poincare background (Paper 0 eq. 2, K3-prime part (i)) throughout its derivations, exactly critical brane tension, an exact modulus z0. The physical background is dS-sliced (K3-prime part (ii)): supercritical effective tension locked to z0 via T_eff = (6/kappa5^2 L) coth(z0/L), the modulus tilted rather than exactly flat. The departure is quantitative and small at the framework's working point: relative deviation from critical of order (L/l_dS)^2, approximately 10^-64, per K3-prime part (ii). Residue: whether this tilt is negligible everywhere the framework relies on z0's flat-direction behavior, or whether it matters for a specific downstream mechanism, is not settled by K3-prime alone; carried by S-K3-KILL-REARG and S-K3-BACKREACT (landing-1 Track 4).",
      "closing_condition": {
        "condition_kind": "proof",
        "target": "quantify whether the O((L/l_dS)^2) tilt of z0's flat direction propagates to any framework mechanism that assumes an exactly flat modulus, and if so at what scale it first matters; the two Track 4 sorries are the specific instances already identified",
        "system": "the z0 modulus direction under the dS-sliced physical background, K3-prime part (ii)"
      }
    },
    {
      "ref": "k4",
      "kind": "derivation",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "corroborated",
      "statement": "K4: The Framework is Purely Gravitational [from T2.7 + T2.8]. Torsion enters through Einstein-Cartan gravity at coupling G/c^4 (hierarchy of 10^40 below electromagnetic). The conformal invariance of F^2 in 4D prevents any tree-level geometric channel from modifying electromagnetic couplings. The SO(1,4) Higgs is the gravitational Higgs, fully distinct from the electroweak Higgs. The framework cannot modify fermion masses, Bohr radii, or pycnonuclear screening through its own geometry. Clarificatory clause (tree-level vs one-loop): K4 prohibits direct tree-level couplings between the radion/torsion sector and the Standard Model gauge fields in the fundamental Lagrangian. It does not prohibit, and cannot prevent, loop-induced couplings arising from the quantum conformal trace anomaly. The heat kernel integration that derives the state-dependent coupling gamma (phi^A phi_A) f_Q necessarily generates terms proportional to beta(g) F_mu_nu F^mu_nu through the a_4(x) coefficient. These are manifestations of dimensional transmutation and constitute mathematically inevitable one-loop anomaly couplings rather than fundamental force modifications."
    },
    {
      "ref": "k5",
      "kind": "derivation",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "corroborated",
      "statement": "K5: Torsion is Non-Propagating [from Tier 4.7, P3]. Torsion carries zero independent propagating degrees of freedom. The Cartan equation is algebraic (no Box T kinetic operator). Torsion vanishes instantaneously when sources vanish."
    },
    {
      "ref": "k6",
      "kind": "derivation",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "corroborated",
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
      "declared_grade": "corroborated",
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
      "declared_grade": "corroborated",
      "statement": "K11: Trace Anomaly Dependence and Beta Function Non-Vanishing [from T2.7 + K4 + F13]. The conformal invariance of the 4D gauge kinetic terms (T2.7) forbids the massive scalar radion from coupling to the gauge sector at tree level. General covariance requires the radion to couple universally to T^mu_mu of the matter sector. For classically massless gauge bosons, T^mu_mu = 0 at tree level. The interaction proceeds exclusively through the quantum conformal trace anomaly: T^mu_mu = sum_i beta(g_i)/(2 g_i) F^(i)_mu_nu F^(i)mu_nu. This coupling is a phenomenological requirement: resolution of the LUNA screening anomaly demands that the radion export chaotic thermal noise from driven lattice states into the bulk via the KK tower. Any viable GUT must be strictly non-conformal: beta(g_i) != 0 across all physical energy scales relevant to macroscopic coherence and structure formation."
    },
    {
      "ref": "k12",
      "kind": "derivation",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "corroborated",
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
      "declared_grade": "corroborated",
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
      "declared_grade": "checked",
      "statement": "P3: DOF count [Structural Proof, Tier 4.7]. Result: 3 (2 graviton + 1 scalar). Method: Dirac-Bergmann. 90-dim phase space, 20 first-class, 44 second-class. Source: Dirac Constraint Report.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "reproduced the Dirac-Bergmann constraint count: 90-dimensional phase space, 20 first-class, 44 second-class constraints, yielding 3 physical DOF",
          "checked_at_state": "dg@stage-3b",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.dirac-constraint-report"
          ],
          "cited_source": "corpus.dirac-constraint-report"
        },
        {
          "checker_id": "checker:deepseek",
          "method_class": "derivation-audit",
          "method": "independent audit of the Gemini Dirac matrix report's constraint-count derivation",
          "checked_at_state": "dg@stage-3b",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.deepseek-cross-examination-april-2026",
            "corpus.dirac-constraint-report"
          ],
          "cited_source": "corpus.deepseek-cross-examination-april-2026"
        }
      ]
    },
    {
      "ref": "p8",
      "kind": "derivation",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "P8: KSS bound [Structural Proof, Tier 4.7]. Result: eta/s = 1/(4 pi) exactly. Method: Graviton-radion decoupling, G_eff cancellation, 4D GB topological. Source: P11/P8 Report.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "verified the KSS bound is preserved exactly: eta/s = 1/(4 pi) via graviton-radion decoupling and G_eff cancellation",
          "checked_at_state": "dg@stage-3b",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.p11-p8-report"
          ],
          "cited_source": "corpus.p11-p8-report"
        }
      ]
    },
    {
      "ref": "p11",
      "kind": "derivation",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "P11: Diffeomorphism invariance [Structural Proof, Tier 4.7]. Result: Perturbatively covariant. Method: QFI scalar via <TT>. Edge modes for foliation independence. Source: P11/P8 Report.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "verified perturbative diffeomorphism covariance",
          "checked_at_state": "dg@stage-3b",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.p11-p8-report"
          ],
          "cited_source": "corpus.p11-p8-report"
        }
      ]
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
      "declared_grade": "corroborated",
      "statement": "F06: Stellar Death is Rate-Dependent. Addresses: B14 (mass gap), B15 (failed supernovae). Statement: Geometric failure occurs when the free-fall rate exceeds the scrambling rate (t_ff < t_s). The mode of failure depends on which channel dominates: tear (thermal, radial) or puncture (coherent, angular)."
    },
    {
      "ref": "f07",
      "kind": "function",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "corroborated",
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
      "declared_grade": "corroborated",
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
      "declared_grade": "corroborated",
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
      "declared_grade": "corroborated",
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
      "source_id": "corpus.paper-0",
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
      "source_id": "corpus.half-sphere-report",
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
      "source_id": "corpus.occam-s-razor-audit",
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
      "source_id": "corpus.resolution",
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
      "declared_grade": "corroborated",
      "statement": "C06a: Tear: thermal matter, dome failure, recruits envelope. Satisfies F06 (regime). Evidence: N6946-BH1.",
      "extensions": {
        "verdict": "Confirmed"
      }
    },
    {
      "ref": "c06b",
      "kind": "mechanism",
      "source_id": "lit.grb-060614",
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
      "source_id": "lit.sukhbold-et-al-2016",
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
      "declared_grade": "corroborated",
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
      "declared_grade": "corroborated",
      "statement": "C09: Thermal cores carry no coherence domains, yielding Delta r atomic and silent implosion. Satisfies F09 (sole mechanism). Evidence: N6946-BH1.",
      "extensions": {
        "verdict": "Confirmed"
      }
    },
    {
      "ref": "c10",
      "kind": "mechanism",
      "source_id": "lit.sukhbold-et-al-2016",
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
      "source_id": "lit.rhic-lhc-kss-bound",
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
      "source_id": "lit.donnelly-freidel-2016",
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
      "declared_grade": "corroborated",
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
      "source_id": "corpus.graceful-exit-report",
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
      "source_id": "corpus.hsb-karch-randall-moduli-geometry-as-l-surrogate-scout-may-1",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "C23-SDC [REFORMULATED v4.13, CONDITIONAL]: SDC compliance via Karch-Randall moduli geometry. The DBI-induced metric on the radial modulus z_0 gives geodesic distance d ~ M_Pl ln(z_0/L), yielding the SDC exponential decay m_KK ~ exp(-d/M_Pl). Conditional on S-CC-002 closure (b > 1/(4 pi^2) for the X_F13 Pati-Salam KK tower on dP_3). Satisfies F23 (sole, SDC). Evidence: Paper -1; HSB Karch-Randall Moduli Geometry Scout (May 12, 2026).",
      "extensions": {
        "verdict": "Confirmed, conditional"
      }
    },
    {
      "ref": "k3b-reconciliation",
      "kind": "derivation",
      "source_id": "corpus.sf-k3b-001",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "K3B-RECONCILIATION: the Israel-junction backreaction channel and C23-SDC's geodesic-distance channel are the same u_b = z_0/L, composed by the chain rule: delta d = (M_Pl / u_b) (kappa_5^2 L / 6) cosh^2(u_b) delta V, where delta d is C23-SDC's own geodesic distance shift and delta V is the brane-localized vacuum-energy perturbation (Goldberger-Wise) entering T_eff = T_3 + V(v(F_Q)) per K3-prime part (iii). At the framework's own physical dS-sliced working point (K3-prime part (ii), deviation from critical approximately 10^-64), u_b is approximately 74 and cosh^2(u_b) is approximately 5x10^63, order-of-magnitude figures consistent with K3-prime part (iii)'s own independently-stated significance threshold |V| ~ 3L/(kappa_5^2 l^2) = 3/(kappa_5^2 L cosh^2(u_b)). The cosh^2(u_b) enhancement is a rate change on the SDC trigger, not a new activation threshold: it amplifies how much a given delta V converts into a geodesic-distance shift, not when the channel switches on. Cosmological inertness follows from K7's own Fluctuation-Dissipation-Theorem argument (operators (i)-(iii) locked to extensive O(N) scaling; only operator (iv), the variance coupling, accesses the super-extensive ODLRO scaling this channel's delta V requires), read here as V(v(F_Q)) being a structural, background-geometry consequence of operator (iv) rather than a fresh, independent channel; Path A's own static commitment (classical structure formation produces DLRO, not ODLRO) then keeps delta V, and hence this channel, cosmologically negligible for the same reason CC-1's own pole stays dormant cosmologically. Consequence for S-CC-002: sharpened, not restructured; S-CC-002's own beta-function computation is untouched, but C23-SDC's own trigger threshold is now derived rather than merely stated. This reading of V(v(F_Q)) as operator (iv)'s structural consequence, rather than an independently verified fact, is the residual question s-k3b-vev-double-count carries forward. Derived in docs/shores/SF-K3B-001.md; no checking record exists for this derivation.",
      "closing_condition": {
        "condition_kind": "direct-study",
        "target": "an independent adversarial check of the chain-rule composition (section 2 of SF-K3B-001), the near-critical asymptotics, and the operator-(iv) reading of V(v(F_Q)) that grounds the cosmological-inertness argument",
        "system": "the composed delta d formula and its near-critical asymptotics, against the K3 audit artifacts and K3-prime directly"
      }
    },
    {
      "ref": "c23-sdc-prime",
      "kind": "mechanism",
      "source_id": "corpus.hsb-karch-randall-moduli-geometry-as-l-surrogate-scout-may-1",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "C23-SDC-prime: SDC compliance via Karch-Randall moduli geometry, with the trigger law. The DBI-induced metric on the radial modulus z_0 gives geodesic distance d ~ M_Pl ln(z_0/L), yielding the SDC exponential decay m_KK ~ exp(-d/M_Pl) (C23-SDC's own original content, unchanged). The trigger law (shore-k3b, k3b-reconciliation): a brane-localized vacuum-energy perturbation delta V (Goldberger-Wise, entering T_eff = T_3 + V(v(F_Q)) per K3-prime part (iii)) drives z_0 via delta u_b = (kappa_5^2 L/6) cosh^2(u_b) delta V (the K3 audits' own backreaction relation), which composes with the geodesic-distance formula above by the chain rule to give delta d directly in terms of delta V, with the cosh^2(u_b) enhancement acting as a rate change, not a new threshold. Conditional on S-CC-002 closure (b > 1/(4 pi^2) for the X_F13 Pati-Salam KK tower on dP_3); this conditionality is sharpened by the trigger law, not restructured by it. Satisfies F23 (sole, SDC). Evidence: Paper -1; HSB Karch-Randall Moduli Geometry Scout (May 12, 2026); this session's own derivation, docs/shores/SF-K3B-001.md.",
      "extensions": {
        "verdict": "Confirmed, conditional; trigger law added, shore-k3b"
      }
    },
    {
      "ref": "s-k3b-vev-double-count",
      "kind": "derivation",
      "source_id": "corpus.sf-k3b-001",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "S-K3B-VEV-DOUBLE-COUNT: whether V(v(F_Q))'s role as a brane-localized vacuum-energy term (Goldberger-Wise, entering T_eff in K3-prime part (iii) and k3b-reconciliation) is genuinely independent of K1's own two-channel matter-stress-energy decomposition, or risks double-counting the same v(F_Q) dependence K1 already attributes to the torsion/angular channel. Opened shore-k3b, surfaced by k3b-reconciliation's own cosmological-inertness argument (section 5 of docs/shores/SF-K3B-001.md), which reads V(v(F_Q)) as a structural consequence of K7's operator (iv) rather than an independently checked fact. A brane-localized scalar potential term in the action (Goldberger-Wise's own construction) is not, on its face, the same object as the matter stress-energy K1 decomposes, but this distinction is asserted here, not proven against K1's own derivation.",
      "closing_condition": {
        "condition_kind": "proof",
        "target": "the composite criterion (landing-2 Track C-4, verbatim from the artifacts, replacing the prior closing condition): Kimi's K1 through K4 (PK-AUD-K3B-003, run 003, Q3) plus GPT's stress-character condition and equality-of-equations condition (PK-AUD-K3B-002, run 002, Q3.4, conditions 5 and 6). (K1) Partition or redundancy: exhibit either an explicit split V(v) = V_geo + V_stress with V_geo + V_stress = V(v) on the nose (complementary projectors on the space of constant brane-localized potentials), or a proof that the geometric channel and the stress channel are related by a field redefinition and are never summed. (K2, DECISIVE) Gravitates-once test: under v to v + delta v, the summed prediction must satisfy delta H^2 / delta V(v) = (kappa_4^2 / 3) x (c_geo + c_stress) with c_geo + c_stress = 1, i.e. the vacuum energy gravitates with strength 8 pi G exactly once; c_geo + c_stress = 2 is the double count, c_geo + c_stress = 0 is the inertness error; reduces to the BDL square (T + V(v) + rho)^2, both channels must be terms in the expansion of the same square. (K3) Cross-term consistency: whatever part of V(v) is assigned to the tension must enter Lambda_4, kappa_4^2, and the quadratic/cross structure (pi_mu_nu, or the 2T rho term of the BDL square) evaluated on the total source. (K4) Radion consistency: if the modulus is stabilized, the geometric channel's entry for V(v) must equal the stationary value of the radion potential as built from the junction conditions, not an independent copy added to it. GPT condition 5, stress-character test: treating a coherent state's energy as a tension shift requires T_coh_mu_nu approximately equal to -V h_mu_nu, homogeneous isotropic vacuum-like stress with p approximately equal to -rho on the relevant timescale; a transient, localized, gradient-dominated, or anisotropic state must enter through its full stress tensor and associated bulk/Weyl response. GPT condition 6, equality check: the framework must explicitly show its four-dimensional equations obtained after channel decomposition equal those obtained by varying the original five-dimensional action once; equality of the resulting equations, not verbal separation into geometric and ordinary channels, is the decisive test alongside K2.",
        "system": "V(v(F_Q))'s Goldberger-Wise brane-potential role versus K1's two-channel matter-stress-energy decomposition, per the SMS effective 4D Einstein equations (lit.shiromizu-maeda-sasaki-2000)"
      },
      "extensions": {
        "status": "OPEN, shore-k3b, closing condition sharpened landing-2 Track C-4",
        "priority": "conditions k3b-reconciliation's cosmological-inertness argument beyond order-of-magnitude plausibility"
      }
    },
    {
      "ref": "k3b-coordinate-dictionary",
      "kind": "derivation",
      "source_id": "corpus.pk-aud-k3b-003",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "independently-rechecked",
      "statement": "K3B-COORDINATE-DICTIONARY (landing-2 Track C-3, OPERATOR-RULED): the exact relation between the dS-sliced brane position u_b and the Poincare-patch coordinate z_0 that k3b-reconciliation's chain-rule composition requires. The constant-u_b brane is not a constant-z Poincare surface; its depth satisfies z^2 + L^2 + s = 2 L z cosh(u_b). At the outer axis crossing, s = 0, the depth is z_0 = L e^(u_b), so ln(z_0 / L) = u_b exactly, sign positive. All brane-intrinsic conventions agree on variations to relative precision (L / l_dS)^2, approximately 10^-64: delta ln z_0 = delta u_b. The absolute distance d carries a convention constant of order ln 2 times M_Pl, roughly 0.7 M_Pl, which must be fixed once and held fixed if any law depends on absolute d rather than differences. The earlier finding ln(z / L) = ln 2 - u describes fixed-asymptotic-chart tracking, not the brane-intrinsic dictionary. Supersession, not a kill (OPERATOR-RULED): this revises the earlier sign-inversion finding (PK-AUD-K3B-001's own initial large-u asymptotic analysis at a generic, non-axis-crossing trajectory, arbitrated in PK-XEXAM-K3B-001), which is a correct description of a different quantity, not an error in the brane-intrinsic dictionary itself.",
      "checking_records": [
        {
          "checker_id": "checker:kimi-k3",
          "method_class": "derivation-audit",
          "method": "adversarial audit of the backreaction reconciliation SF-K3B-001 (PK-AUD-K3B-003, run 003, Q1.1): embeds AdS5 in R(2,4), derives the exact brane-surface equation z^2 + L^2 + s = 2Lz cosh(u_b), and identifies the outer axis-crossing depth z_0 = Le^(u_b) as the exact dictionary, ln(z_0/L) = u_b exactly",
          "checked_at_state": "dg@landing-2",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": ["corpus.pk-aud-k3b-003", "lit.goldberger-wise-1999", "lit.randall-sundrum-1999", "lit.karch-randall-2001", "lit.shiromizu-maeda-sasaki-2000"]
        },
        {
          "checker_id": "checker:gpt-5.6-thinking",
          "method_class": "derivation-audit",
          "method": "adversarial audit of the backreaction reconciliation SF-K3B-001 (PK-AUD-K3B-002, run 002, Q1.1/Q1.2): derives the exact embedding relation z/L = 1/(cosh u + sinh u Y4) from the AdS5 hyperboloid and the dS-sliced coordinates, and identifies the two special-endpoint depths z/L = e^(-u) and z/L = e^(+u), the latter matching the outer axis-crossing dictionary",
          "checked_at_state": "dg@landing-2",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": ["corpus.pk-aud-k3b-002", "lit.goldberger-wise-1999", "lit.shiromizu-maeda-sasaki-2000"]
        }
      ],
      "extensions": {
        "locator": "PK-AUD-K3B-003 Q1.1; PK-AUD-K3B-002 Q1.1 and Q1.2; PK-XEXAM-K3B-001 C3 arbitration."
      }
    },
    {
      "ref": "k3b-reconciliation2",
      "kind": "derivation",
      "source_id": "corpus.sf-k3b-001",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "independently-rechecked",
      "statement": "K3B-RECONCILIATION2 (landing-2 Track C-1, supersedes k3b-reconciliation): the corrected composition. Linear: with d = M_Pl u_b + c_0, c_0 a convention constant fixed once, a homogeneous quasi-static shift delta V of brane-localized vacuum energy moves the moduli-space distance by delta d = M_Pl delta u_b = -(M_Pl kappa_5^2 L / 6) sinh^2(u_b) delta V, valid for |delta V| much less than rho_tilde. Exact: delta d(V) = -(M_Pl / 2) ln(1 + V / rho_tilde) [1 + O(V / T_c)], with rho_tilde = 3 M_Pl^2 / l_dS^2, equal to rho_Lambda in the stated conventions. Equivalently H^2(V) = H^2 + (kappa_4^2 / 3) V + (kappa_5^4 / 36) V^2: brane vacuum energy gravitates with exactly standard 4D strength, and the cosh^2 enhancement is the Jacobian to the logarithmic modulus, present in u_b and d, absent in H^2. The law diverges as V approaches -rho_tilde, where u_b runs to infinity, the flat-brane limit; no dS solution exists beyond, and the continuation is the subcritical AdS branch. Corrects k3b-reconciliation's own 1/u_b chain-rule error (via k3-prime2's corrected sinh^2 coefficient and k3b-coordinate-dictionary's exact u_b = ln(z_0/L) identity) and its cosh^2 coefficient.",
      "checking_records": [
        {
          "checker_id": "checker:deepseek-expert",
          "method_class": "derivation-audit",
          "method": "adversarial audit of the backreaction reconciliation SF-K3B-001 (PK-AUD-K3B-001, run 001, Q1): finds the shore's stated 1/u_b chain-rule factor algebraically incorrect given d = M_Pl u_b, confirming the linear composed response delta d = M_Pl delta u_b (sign per the audit's own orientation convention)",
          "checked_at_state": "dg@landing-2",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": ["corpus.pk-aud-k3b-001", "lit.goldberger-wise-1999", "lit.shiromizu-maeda-sasaki-2000", "lit.randall-sundrum-1999"]
        },
        {
          "checker_id": "checker:gpt-5.6-thinking",
          "method_class": "derivation-audit",
          "method": "adversarial audit of the backreaction reconciliation SF-K3B-001 (PK-AUD-K3B-002, run 002, Q1.3, Q2.5, Q4.2): confirms delta d = M_Pl delta u_b (no 1/u_b factor) using the exact map, and derives the exact point value |Delta d_+| = 0.3466 M_Pl at the vacuum scale (eq. 45-46) and the negative-shift branch-boundary behavior",
          "checked_at_state": "dg@landing-2",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": ["corpus.pk-aud-k3b-002", "lit.goldberger-wise-1999", "lit.shiromizu-maeda-sasaki-2000"]
        },
        {
          "checker_id": "checker:kimi-k3",
          "method_class": "derivation-audit",
          "method": "adversarial audit of the backreaction reconciliation SF-K3B-001 (PK-AUD-K3B-003, run 003, Q1.2, Q4.1): confirms delta d = M_Pl delta u_b via the corrected chain rule, and derives the exact response law delta d(V) = -(M_Pl/2) ln(1 + V/rho_tilde) with rho_tilde = 3M_Pl^2/l_dS^2 = 3L/(kappa_5^2 l_dS^2), the equivalent Friedmann identity H^2(V) = H^2 + kappa_4^2 V/3 + kappa_5^4 V^2/36, and the exact numerical value delta d(rho_Lambda) = (M_Pl/2) ln 2 = 0.347 M_Pl",
          "checked_at_state": "dg@landing-2",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": ["corpus.pk-aud-k3b-003", "lit.goldberger-wise-1999", "lit.randall-sundrum-1999", "lit.karch-randall-2001", "lit.shiromizu-maeda-sasaki-2000"]
        }
      ],
      "extensions": {
        "locator": "PK-AUD-K3B-001 Q1; PK-AUD-K3B-002 Q1.3/Q2.5/Q4.2; PK-AUD-K3B-003 Q1.2/Q4.1."
      }
    },
    {
      "ref": "dead.c23b-trigger-rate-not-threshold",
      "kind": "mechanism",
      "source_id": "corpus.sf-k3b-001",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Proposed characterization: the cosh^2(u_b) backreaction enhancement is a rate amplification on an existing SDC trigger, not a new activation threshold, with cosmological inertness preserved, evaluated using the linearized delta u_b response at the claimed matching scale |V| = rho_Lambda (shore-k3b, k3b-reconciliation and c23-sdc-prime's own trigger-law framing)."
    },
    {
      "ref": "ev.dead.c23b-trigger-rate-not-threshold",
      "kind": "computation",
      "source_id": "corpus.sf-k3b-001",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"dead.c23b-trigger-rate-not-threshold\": the three K3B audit artifacts converge, independently, that the linearized delta u_b framing carries a 44 percent error at its own claimed matching scale (|V| = rho_Lambda, linear delta u_b = 1/2 versus exact delta u_b = (1/2) ln 2 discrepancy) and is parametrically invalid above it (astrophysical, QCD-scale, electroweak-scale, and inflationary delta V all exceed the modulus range u_b by tens to over a hundred orders of magnitude). A linearization that exits its own validity range at the claimed operating conditions refutes the rate-not-threshold framing as stated, even though the underlying algebra (once corrected, per k3-prime2 and k3b-reconciliation2) is right.",
      "checking_records": [
        {
          "checker_id": "checker:deepseek-expert",
          "method_class": "derivation-audit",
          "method": "adversarial audit of the backreaction reconciliation SF-K3B-001 (PK-AUD-K3B-001, run 001, Q2/Q4): shows the linearized threshold scale coincides with the dark-energy density and that realistic vacuum-energy shifts (electroweak scale and above) exceed it by ~50 orders of magnitude, self-invalidating the linear treatment",
          "checked_at_state": "dg@landing-2",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": ["corpus.pk-aud-k3b-001", "lit.goldberger-wise-1999", "lit.shiromizu-maeda-sasaki-2000", "lit.randall-sundrum-1999"]
        },
        {
          "checker_id": "checker:gpt-5.6-thinking",
          "method_class": "derivation-audit",
          "method": "adversarial audit of the backreaction reconciliation SF-K3B-001 (PK-AUD-K3B-002, run 002, Q4): shows the linear calculation is not parametrically controlled at V = V_star (alpha|Delta V| = 1, comparable to the original critical detuning), and that a negative shift of the same magnitude reaches or crosses the dS/Minkowski branch boundary, refuting the rate-change-not-threshold-change framing",
          "checked_at_state": "dg@landing-2",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": ["corpus.pk-aud-k3b-002", "lit.goldberger-wise-1999", "lit.shiromizu-maeda-sasaki-2000"]
        },
        {
          "checker_id": "checker:kimi-k3",
          "method_class": "derivation-audit",
          "method": "adversarial audit of the backreaction reconciliation SF-K3B-001 (PK-AUD-K3B-003, run 003, Q4.2): tabulates the linear-versus-exact response at V = rho_tilde (44 percent error) and at QCD, EW, and inflationary scales (linear response exceeds the entire modulus range u_b by tens to over a hundred orders of magnitude), concluding the linearization exits its own validity range at the claimed operating conditions",
          "checked_at_state": "dg@landing-2",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": ["corpus.pk-aud-k3b-003", "lit.goldberger-wise-1999", "lit.randall-sundrum-1999", "lit.karch-randall-2001", "lit.shiromizu-maeda-sasaki-2000"]
        }
      ]
    },
    {
      "ref": "c23-sdc-prime2",
      "kind": "mechanism",
      "source_id": "corpus.hsb-karch-randall-moduli-geometry-as-l-surrogate-scout-may-1",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "C23-SDC-prime2 (landing-2 Track C-2, supersedes c23-sdc-prime): SDC compliance via Karch-Randall moduli geometry, exact trigger law. The DBI-induced metric on the radial modulus z_0 gives geodesic distance d ~ M_Pl ln(z_0/L), yielding the SDC exponential decay m_KK ~ exp(-d/M_Pl) (C23-SDC's own original content, unchanged). Trigger law, corrected: in exact variables the response to positive shifts is smooth and logarithmic with no threshold below T_c, approximately 10^64 rho_Lambda, where H approaches 1/L and the 4D description ends. Negative shifts reach a logarithmic divergence of the modulus at V = -rho_Lambda, an infinite-distance point in moduli space. The quantitative input to any trigger law written in d is delta d = 0.347 M_Pl at |V| = rho_Lambda, exact, against 0.5 M_Pl linearized and 6.7 x 10^-3 M_Pl as the shore stated. Cosmological inertness holds as absence of anomalous gravitational response, delta H^2 = (kappa_4^2 / 3) delta V, and rests for its cosmological force on the framework's no-ODLRO-source argument, which is external to this composition; it does not hold as a claim that vacuum shifts leave H unmoved. The rate-amplification-not-threshold framing (dead.c23b-trigger-rate-not-threshold) is withdrawn; the residual regime gap is s-k3b-exact-regime-gap. Conditional on S-CC-002 closure (b > 1/(4 pi^2) for the X_F13 Pati-Salam KK tower on dP_3); this conditionality is sharpened by the exact trigger law, not restructured by it. Satisfies F23 (sole, SDC). Evidence: Paper -1; HSB Karch-Randall Moduli Geometry Scout (May 12, 2026); docs/shores/SF-K3B-001.md; the three PK-AUD-K3B audits.",
      "extensions": {
        "verdict": "Confirmed, conditional; exact trigger law, landing-2"
      }
    },
    {
      "ref": "s-k3b-exact-regime-gap",
      "kind": "derivation",
      "source_id": "corpus.sf-k3b-001",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "S-K3B-EXACT-REGIME-GAP: the exact response law (k3b-reconciliation2, c23-sdc-prime2) covers homogeneous quasi-static tension shifts only; localized, transient, gradient-dominated, or anisotropic sources require the full Israel tensor with projected bulk Weyl response, and stabilized-modulus dynamics require the radion mass, wavefunction, and backreaction. Opened landing-2 Track C-2, per the three K3B audits' own convergent finding (PK-AUD-K3B-002 Q4.3-Q4.4; PK-AUD-K3B-003 Q4.4).",
      "closing_condition": {
        "condition_kind": "direct-study",
        "target": "an artifact-backed treatment of either regime: localized/transient/gradient-dominated/anisotropic sources via the full Israel tensor and projected bulk Weyl response, or stabilized-modulus dynamics via the radion mass, wavefunction, and backreaction",
        "system": "the exact junction-condition response law outside the homogeneous quasi-static tension-shift regime"
      },
      "extensions": {
        "status": "OPEN, landing-2"
      }
    },
    {
      "ref": "s-k3b-esnap-shape",
      "kind": "comment",
      "source_id": "corpus.sf-k3b-001",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "ungraded",
      "statement": "The negative-shift boundary at V = -rho_Lambda, where the modulus diverges logarithmically toward the infinite-distance flat-brane limit and the dS branch ends, is shaped like the framework's E_snap tear-versus-puncture sector, and infinite distance is the regime of the framework's C23-SDC mechanism. Whether the corrected channel is the snap mechanism's origin is undetermined; promotion to a sorry awaits an operator ruling. Attached to c23-sdc-prime2's superseding trigger statement (landing-2 Track D, OPERATOR-RULED at charter default: speculation tier, not a sorry). Entered as a comment per the quarantine rule, mechanically non-citable. Source: docs/shores/SF-K3B-001.md; docs/audits/PK-AUD-K3B-002.pdf, PK-AUD-K3B-003.md."
    },
    {
      "ref": "c23-wgc",
      "kind": "mechanism",
      "source_id": "corpus.gut-population-survey-v1-7",
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
      "source_id": "corpus.graceful-exit-report",
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
      "source_id": "corpus.graceful-exit-report",
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
      "source_id": "corpus.graceful-exit-report",
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
      "declared_grade": "corroborated",
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
      "declared_grade": "corroborated",
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
      "declared_grade": "checked",
      "statement": "B-NU-1 (new, v4.13): Neutrino Mass Sector Friction. By rejecting DESI DR2 thawing, the framework commits to the Lambda-CDM upper bound sum(m_nu) < 0.064 eV (95% from DESI DR2 + CMB). Terrestrial oscillation experiments require sum(m_nu) >= 0.059 eV (normal hierarchy). Net friction ~0.005 eV with the terrestrial neutrino sector. Tracking for resolution via inverted hierarchy possibility, future neutrino mass measurements (KATRIN, Project 8, cosmological surveys), or future shifts in the cosmological mass bound. No structural resolution from the framework current axiomatic core; tracking as an external observational tension.",
      "checking_records": [
        {
          "checker_id": "checker:literature",
          "method_class": "data-audit",
          "method": "the specific measurement or detection record this claim's source_id catalogs",
          "checked_at_state": "dg@stage-3b",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "lit.desi-dr1-dr2-bao"
          ]
        }
      ]
    },
    {
      "ref": "s-cumulant-derive",
      "kind": "derivation",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "S-CUMULANT-DERIVE: Derive the Generator Cumulant Expansion from the DG Coupling. Opened June 2026 by SF-DG-013. The detector argument showed the three anchors force unit cumulant weights if the DG coupling has the modular free-energy form W(epsilon) = log<e^(-epsilon K)>. It did not derive W(epsilon) from DG own matter-geometry coupling. This is upstream of everything: it is the gate S-GEN, S-NOISE, and the entire matter/biology/exhaust arc wait behind.",
      "closing_condition": {
        "condition_kind": "proof",
        "target": "expand the actual DG coupling in the deformation parameter epsilon and verify: the first cumulant <K> is stress-energy-coupled (closing the generator gate), the second cumulant <delta K^2> is the SLD-Fisher pole (preserving the carve, keeping C-RD-1 intact), and the fluctuation-dissipation theorem relates the first and second cumulants at the de Sitter temperature T_dS = H/2pi",
        "system": "the DG matter-geometry coupling, modular free energy expansion"
      },
      "extensions": {
        "status": "OPEN",
        "priority": "HIGHEST in the corpus, Frontier difficulty"
      }
    },
    {
      "ref": "s-exhaust-coherence",
      "kind": "derivation",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "S-EXHAUST-COHERENCE: Coherent Bulk Coupling of a Fusion Product. Opened June 2026 by SF-DG-013. The question: does a fusion product at a high-F_Q lattice site couple to the N_eff species/KK channels coherently (superradiantly) within the ~1e-15 s de-excitation window? If coherent, bulk branching is order-one and the missing-radiation problem of LENR dissolves; if incoherent, the channel is dead.",
      "closing_condition": {
        "condition_kind": "proof",
        "target": "determine the phase structure of how a localized nuclear transition couples to the degenerate KK/species tower; computable in the F-theory pipeline / heat-kernel machinery",
        "system": "a fusion product at a high-F_Q lattice site"
      },
      "extensions": {
        "status": "OPEN, ACTIVE",
        "priority": "HIGH, gates the LENR-via-DG target; MARGINAL-AND-ALIVE, not a result"
      }
    },
    {
      "ref": "s-exhaust-colocation",
      "kind": "derivation",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "S-EXHAUST-COLOCATION: Co-Location of Screening and Coherence Conditions. Opened June 2026 by SF-DG-013. Even if coherence holds: do the in-channel condition (screening, high electron density and a specific lattice) and the out-channel condition (high local F_Q) co-locate at a single site, or does the susceptibility exclusion (SL-SUSC-1) separate them?",
      "closing_condition": {
        "condition_kind": "direct-study",
        "target": "check after S-EXHAUST-COHERENCE returns whether the in-channel and out-channel conditions co-locate at a single site",
        "system": "the same lattice site as S-EXHAUST-COHERENCE"
      },
      "extensions": {
        "status": "OPEN, ACTIVE",
        "priority": "HIGH, second gate behind S-EXHAUST-COHERENCE",
        "gated_behind": "s-exhaust-coherence"
      }
    },
    {
      "ref": "s-second-light-scalar",
      "kind": "derivation",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "S-SECOND-LIGHT-SCALAR: Symmetry-Protected Second Light Scalar near the Radion. Opened June 2026 by SF-DG-013. The catastrophe count closed the trans-sector fold as a cusp (codimension 2); a trans-sector pleat would require a codimension >= 3 umbilic, requiring a second light scalar degenerate with the radion carrying a mutual quartic coupling. Question: does the dP_3 Pati-Salam construction force such a scalar near the radion (MeV) mass?",
      "closing_condition": {
        "condition_kind": "proof",
        "target": "a light-spectrum calculation in the existing F-theory model determining whether the dP_3 Pati-Salam construction forces a symmetry-protected second light scalar near the radion mass",
        "system": "the dP_3 Pati-Salam F-theory model light spectrum"
      },
      "extensions": {
        "status": "OPEN, ACTIVE",
        "priority": "MEDIUM, decides whether the trans-sector fold lives inside DG"
      }
    },
    {
      "ref": "s-noise",
      "kind": "derivation",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "S-NOISE: Parameter-Free Radion-Mediated Decoherence Spectrum. Carried forward and reclassified June 2026 by SF-DG-013. The generator identity the decoherence spectrum relies on is exactly what S-CUMULANT-DERIVE establishes, so S-NOISE now sits behind it. The highest-value item after the cumulant gate, deciding whether DG has a laboratory signature or remains purely cosmological.",
      "closing_condition": {
        "condition_kind": "proof",
        "target": "derive the parameter-free radion-mediated decoherence spectrum once S-CUMULANT-DERIVE establishes the generator identity",
        "system": "radion-mediated decoherence in a laboratory-accessible system"
      },
      "extensions": {
        "status": "OPEN, ACTIVE",
        "priority": "HIGH, downstream of S-CUMULANT-DERIVE"
      }
    },
    {
      "ref": "s-frame",
      "kind": "derivation",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "S-FRAME: Einstein versus Jordan Frame Assignment under the Refresh Duality. Opened June 2026 by SF-DG-011. The Einstein-versus-Jordan frame assignment of matter and gravity under the Weyl factor is open: the equivalence-principle and force-structure checks were run in one frame only.",
      "closing_condition": {
        "condition_kind": "proof",
        "target": "redo the EP and force-structure analysis in the conjugate frame and confirm the refresh-duality dictionary (G_eff = G/(1-u), v_eff to 0 as queue overflow/symmetry restoration) is frame-consistent",
        "system": "the refresh-duality dictionary under Einstein versus Jordan frame"
      },
      "extensions": {
        "status": "OPEN, ACTIVE",
        "priority": "MODERATE, resolvable"
      }
    },
    {
      "ref": "s-e1-audit",
      "kind": "derivation",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "S-E1-AUDIT: Audit of Stale 4D Species-Scale Citations. Opened June 2026 by SF-DG-011 erratum E-1. The appendix species-scale line used stale 4D geometric-mean counting, off by five orders in Lambda_s and ten in N. The corrected 5D values are already used by the gamma derivation and all v4.7+ quantitative results; the erratum is confined to the appendix line and its echoes.",
      "closing_condition": {
        "condition_kind": "direct-study",
        "target": "audit any downstream document citing the appendix numbers directly, which is off by 10^10 in gamma; scattered phenomenological passages (F19, F20, GUT-running, C20f-ii) still carry the legacy figure and are flagged but not silently rewritten",
        "system": "downstream citations of the appendix species-scale line"
      },
      "extensions": {
        "status": "OPEN, ACTIVE",
        "priority": "LOW"
      }
    },
    {
      "ref": "s-cc-007",
      "kind": "derivation",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "S-CC-007: Hairon-Vacuum Entropic Consistency. Opened May 2026, SF-DG-011 shore. Required: verification that the hairon BEC accounting (Addazi-Meluccio arXiv:2604.26982) reproduces the de Sitter horizon entropy S_dS at the required precision when matched against the AM topological selection k_phys ~ S_dS. Would become moot if Path B activates.",
      "closing_condition": {
        "condition_kind": "proof",
        "target": "explicit computation of the entropic contribution from the hairon BEC, comparison against the AM selection criterion, verification the matching is consistent to leading order",
        "system": "hairon BEC entropic accounting versus AM topological sector selection"
      },
      "extensions": {
        "status": "OPEN, ACTIVE, Path A specific"
      }
    },
    {
      "ref": "s-dd-001",
      "kind": "derivation",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "S-DD-001: Light Modulus Identification for Path B. Opened May 2026, SF-DG-011 shore. Required: identify which modulus parameterizes R(t) in the framework specific F-theory geometry. Candidates: Kahler moduli of the dP_3 base, axion-like fields from complex structure deformations, or a new modulus added phenomenologically.",
      "closing_condition": {
        "condition_kind": "direct-study",
        "target": "survey the moduli of the framework F-theory dP_3 + X_F13 Pati-Salam geometry, identify candidates compatible with Bedroya-Obied-Vafa-Wu arXiv:2507.03090, check whether the candidates support a slow-roll trajectory matching DESI DR2 thawing",
        "system": "the dP_3 + X_F13 Pati-Salam F-theory moduli space"
      },
      "extensions": {
        "status": "OPEN, DORMANT unless Path B activates",
        "gating": "triggered by Path A falsification (DESI Y5 / Euclid >= 5-sigma evolving w(z))"
      }
    },
    {
      "ref": "s-dd-002",
      "kind": "derivation",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "S-DD-002: Modulus Mass Derivation for Path B. Opened May 2026, SF-DG-011 shore. Required: derive m_chi ~ H0 ~ 1e-33 eV from first principles, where chi is the modulus identified by S-DD-001. Without a structural reason, the mechanism is phenomenologically tuned, unacceptable as a load-bearing Path B commitment.",
      "closing_condition": {
        "condition_kind": "proof",
        "target": "identify the structural origin of the H0 mass scale within the framework F-theory geometry and the Karch-Randall braneworld (candidates: residual symmetry protection, Dark Dimension radius suppression, instanton-generated potential, KKLT-like moduli stabilization)",
        "system": "the Path B light modulus chi"
      },
      "extensions": {
        "status": "OPEN, DORMANT unless Path B activates",
        "gating": "triggered by Path B activation; closure of S-DD-001 prerequisite"
      }
    },
    {
      "ref": "s-dd-003",
      "kind": "derivation",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "S-DD-003: DM Mass Evolution Constraints for Path B. Opened May 2026, SF-DG-011 shore. Required: verify that the evolving m_KK(t) ~ 1/R(t) predicted by Path B (F11-prime) is consistent with BBN, CMB, and structure-formation constraints. The DM mass variation is the primary falsifiable structural prediction of Path B; if incompatible with current bounds, Path B is falsified independently of the static-vs-evolving DE question.",
      "closing_condition": {
        "condition_kind": "direct-study",
        "target": "compute the m_KK(t) trajectory implied by the R(t) evolution under candidate V(chi) shapes, cross-check against BBN (m_KK at T ~ MeV), CMB (m_KK at z ~ 1100), and LSS (m_KK at z <~ 1)",
        "system": "the evolving KK graviton mass m_KK(t) under Path B"
      },
      "extensions": {
        "status": "OPEN, DORMANT unless Path B activates",
        "gating": "triggered by Path B activation"
      }
    },
    {
      "ref": "s-dd-004",
      "kind": "derivation",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "S-DD-004: Hairon Role Compatibility under Evolving Background. Opened May 2026, SF-DG-011 shore. Required: verify whether the hairon BCS neutrino DM mechanism (verified under static-vacuum identification) survives in the evolving-background context where the static-vacuum identification is dropped.",
      "closing_condition": {
        "condition_kind": "proof",
        "target": "trace the hairon condensation dynamics under a slowly evolving R(t) background, check whether the BCS-like neutrino superfluid persists or destabilizes; if it persists, derive the modified T_c and density",
        "system": "hairon BCS neutrino condensation under evolving R(t)"
      },
      "extensions": {
        "status": "OPEN, DORMANT unless Path B activates",
        "gating": "triggered by Path B activation"
      }
    },
    {
      "ref": "s-cc-002prime",
      "kind": "derivation",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "S-CC-002prime: z0 Stabilization without AM Instanton Potential. Opened May 2026, SF-DG-011 shore. Required: identify a z0 stabilization mechanism for the Karch-Randall brane that does not rely on the AM instanton potential, since Path B drops the AM topological structure. Candidates: KKLT-style flux stabilization, brane-localized superpotential, Casimir backreaction, generalized Running Coupling Rescue Theorem.",
      "closing_condition": {
        "condition_kind": "proof",
        "target": "survey the candidate z0 stabilization mechanisms against the structural constraints of the Path B branch, identify the cleanest mechanism, develop to discharge-ready state",
        "system": "Karch-Randall brane radial position z0 under Path B"
      },
      "extensions": {
        "status": "OPEN, DORMANT unless Path B activates",
        "gating": "triggered by Path B activation"
      }
    },
    {
      "ref": "s-am-008",
      "kind": "derivation",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "S-AM-008: Anomaly Cancellation Compatibility. Opened May 2026, v4.14 Addendum A (Baykara-Chen-Vafa repositioning). Required: verify whether the hairon construction S^4/Z_N orbifold (Addazi-Meluccio arXiv:2604.26982) satisfies the duality-covariant anomaly cancellation condition introduced in Baykara-Chen-Vafa arXiv:2605.16484.",
      "closing_condition": {
        "condition_kind": "proof",
        "target": "apply the quadratic equations from arXiv:2605.16484 Appendix A.3 to the hairon Z_N phase shift acting on the M-theory charge lattice, determine whether the hairon configuration satisfies the conditions",
        "system": "the hairon S^4/Z_N orbifold construction versus the Baykara-Chen-Vafa anomaly condition"
      },
      "extensions": {
        "status": "OPEN, ACTIVE, Path A specific",
        "priority": "MEDIUM, not blocking but informative for Path A credibility"
      }
    },
    {
      "ref": "s-am-009",
      "kind": "derivation",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "S-AM-009: Sign of V at AM Minimum. Opened May 2026, v4.14 Addendum A. Required: document the framework argument for V > 0 at the AM minimum, since Baykara-Chen-Vafa note their critical-point construction cannot determine the sign of V. Path A currently relies on V > 0 to match observation; this should be established structurally rather than left implicit.",
      "closing_condition": {
        "condition_kind": "proof",
        "target": "trace through the AM construction (Addazi-Meluccio arXiv:2602.16840) and establish whether the topologically selected sector has V > 0 by structural argument or by additional assumption; if by assumption, flag as a Path-A-specific commitment",
        "system": "the sign of V at the Addazi-Meluccio topological minimum"
      },
      "extensions": {
        "status": "OPEN, ACTIVE, Path A specific",
        "priority": "MEDIUM"
      }
    },
    {
      "ref": "s-am-010",
      "kind": "derivation",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "S-AM-010: d=4 Critical Point Comparison. Opened May 2026, v4.14 Addendum A. Required: determine the structural relationship between the Baykara-Chen-Vafa d=4 isolated critical point (A^7_1 lattice point) and the framework d=4 effective theory critical point selected by the AM mechanism: same point in different language, different points, or structurally incompatible setups.",
      "closing_condition": {
        "condition_kind": "direct-study",
        "target": "identify the moduli of the Karch-Randall plus AM construction in M-theory-on-T^7 language, compare to the (A^7_1, v_1) critical point of Baykara-Chen-Vafa",
        "system": "the framework AM-selected critical point versus the Baykara-Chen-Vafa d=4 critical point"
      },
      "extensions": {
        "status": "OPEN, ACTIVE, comparative analysis task",
        "priority": "MEDIUM"
      }
    },
    {
      "ref": "s-hsb-002b",
      "kind": "derivation",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "S-HSB-002b: Geometric SDC route via Karch-Randall moduli geometry. Opened May 12, 2026, HSB Karch-Randall Moduli Geometry Scout. The DBI-induced metric on the radial modulus z0 gives geodesic distance d ~ M_Pl ln(z0/L) via Einstein-frame Weyl rescaling, yielding the SDC exponential decay m_KK ~ exp(-d/M_Pl). An external scout claimed alpha = 1/4 but the value failed internal arithmetic check against the sharpened SDC bound alpha >= 1/sqrt(d-2) (alpha >= 1/sqrt(2) in d=4).",
      "closing_condition": {
        "condition_kind": "proof",
        "target": "closure of S-CC-002 (via RCRT, b > 1/(4 pi^2) for X_F13 PS on dP_3) plus explicit alpha-value computation for the sharpened SDC bound, recomputation queued as Priority 2",
        "system": "the SDC exponent alpha for the Karch-Randall moduli geometry route"
      },
      "extensions": {
        "status": "ACTIVE, conditional",
        "priority": "BIFURCATED (sibling S-HSB-002a discharged as dead via ER-WGC-001)"
      }
    },
    {
      "ref": "s-cc-001",
      "kind": "derivation",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "S-CC-001: Stable Equilibrium z0 for Karch-Randall Brane. Reformulated v4.8 to: stable equilibrium z0 for the brane radial position from a mechanism beyond the killed gamma(z0) inheritance. The Lambda_initial portion is discharged through F-CC; the brane radial position question is now decoupled from cosmological constant derivation.",
      "closing_condition": {
        "condition_kind": "proof",
        "target": "identify a stabilization mechanism that produces a finite z0, given that the coupled saddle-point alone runs to the IR horizon; candidate mechanisms live in S-CC-002 and S-CC-004",
        "system": "Karch-Randall brane radial position z0"
      },
      "extensions": {
        "status": "REFORMULATED, still open",
        "priority": "HIGH"
      }
    },
    {
      "ref": "s-cc-002",
      "kind": "derivation",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "S-CC-002: Instanton-Generated z0 Stabilization for the Karch-Randall Brane. Status updated OPEN to ACTIVE at v4.13. If gauge instanton tunneling couples to the radion rho through KK threshold corrections, an exponentially suppressed potential V_inst(rho) could balance the polynomial z0^-2 runaway. Sharpened sub-tag (Running Coupling Rescue Theorem, SL-RC-1): stabilization requires the one-loop beta function coefficient b for the X_F13 Pati-Salam KK tower on the dP_3 Laplacian to satisfy b > 1/(4 pi^2) ~ 0.0253.",
      "closing_condition": {
        "condition_kind": "proof",
        "target": "compute b for X_F13 Pati-Salam KK tower on dP_3 Laplacian via ftheory-pipeline / OSCAR / FTheoryTools; if b > 1/(4 pi^2), S-CC-002 closes unconditionally and C23-SDC discharges unconditionally; if b <= 1/(4 pi^2), S-CC-002 closes as DEAD with a number",
        "system": "the one-loop beta function coefficient b for the X_F13 Pati-Salam KK tower on dP_3"
      },
      "extensions": {
        "status": "ACTIVE, sharpened v4.13",
        "priority": "HIGH, load-bearing for C23-SDC"
      }
    },
    {
      "ref": "s-cc-004",
      "kind": "derivation",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "S-CC-004: Holographic Casimir Backreaction of KK Graviton Tower on Brane Potential. Gemini CC Derivation Run 2 raised this as the leading rescue candidate after the gamma(z0) kill. Compatible with the topological Chern-Simons bulk requirement (Casimir energy is a quantum vacuum effect, not new propagating bulk DOF).",
      "closing_condition": {
        "condition_kind": "proof",
        "target": "compute holographic Casimir energy of the KK graviton tower as a function of z0, check whether its scaling provides a competing force halting the z0 to infinity runaway; run only if S-CC-002 returns DEAD, otherwise held open at lower priority",
        "system": "holographic Casimir energy of the KK graviton tower versus z0"
      },
      "extensions": {
        "status": "OPEN, deferred v4.13",
        "priority": "MEDIUM, Priority 4 deferred per v4.13 next-action queue"
      }
    },
    {
      "ref": "s-cc-005",
      "kind": "derivation",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "S-CC-005: Identification of Bulk Chern-Simons Level k_bulk with Boundary AM Topological Sector k_phys. If the descent equations from the bulk SO(2,4) Chern-Simons theory to the boundary MM action naturally identify k_bulk with the AM topological sector integer k_phys ~ S_dS, the AM topological selection comes free from existing framework structure. Governs inter-sector tunneling protection at the e^(-S_dS) suppression scale, distinct from S-CC-002 radial moduli stabilization.",
      "closing_condition": {
        "condition_kind": "proof",
        "target": "explicit computation of the descent map from bulk CS quantization to boundary MM topological winding, using CS-WZW descent equations as in the original boundary induction (Paper 0 Section 2.3)",
        "system": "bulk SO(2,4) Chern-Simons level versus boundary AM topological sector"
      },
      "extensions": {
        "status": "OPEN, role clarified v4.13",
        "priority": "HIGH, strategic"
      }
    },
    {
      "ref": "s-mm-cr",
      "kind": "derivation",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "S-MM-CR: Configuration-Robustness Theorem for Multiplier Left Null Space Rank Lift. Spawned from the S-MM-002 chain closure. The framework central architectural prediction (DOF = 3, two graviton plus one radion) is conditional on this theorem. Statement: for all nondegenerate broken-vacuum configurations of the v4.11 MMSW auxiliary-field formulation satisfying standard regularity assumptions, the rank of the frozen-background full multiplier matrix at xi != 0 equals the physical secondary count required for DOF = 3.",
      "closing_condition": {
        "condition_kind": "proof",
        "target": "one of three discharge paths: (1) configuration-independent proof via SO(1,4) representation theory of the MMSW constraint algebra with auxiliary scalars; (2) explicit verification on physically relevant configurations with characterized robustness boundary; (3) proof of the redundancy identity through explicit derivation of the missing input F_i from the sign-fixed canonical Hamiltonian",
        "system": "the MMSW multiplier matrix rank at nondegenerate broken-vacuum configurations"
      },
      "extensions": {
        "status": "NEW, OPEN, v4.12",
        "priority": "HIGH, load-bearing"
      }
    },
    {
      "ref": "s-mm-003",
      "kind": "derivation",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "S-MM-003: Ghost-Freedom via Symbol-Level Positivity of the Reduced Symplectic Form. Required: ghost-freedom argument upgraded to the pseudo-differential operator framing. The classification of constraints as first-class or second-class is independent of the operator character of the Dirac matrix; the topological protection of the Hamiltonian constraint inside the SO(1,4) Gauss algebra survives unchanged.",
      "closing_condition": {
        "condition_kind": "proof",
        "target": "compute the reduced symplectic symbol from the full 44x44 symbol via symbol-level symplectic reduction, verify positive-definite signature on the physical subspace",
        "system": "the reduced symplectic form at symbol level"
      },
      "extensions": {
        "status": "OPEN, v4.9",
        "priority": "MEDIUM, contingent on S-MM-002"
      }
    },
    {
      "ref": "s-ns-018",
      "kind": "derivation",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "S-NS-018: Locality of Boundary Composite Observables Under Non-Local Dirac Brackets. Required: verification that non-local Dirac brackets in the reduced MM phase space integrate out at macroscopic scales for hydrodynamic composite observables on the boundary fluid. With v trans-Planckian per K18, the scaling check is almost certainly satisfied but should be confirmed.",
      "closing_condition": {
        "condition_kind": "proof",
        "target": "explicit computation of the boundary stress-energy Dirac bracket using the non-local kernel, verify locality emerges at scales much larger than 1/v",
        "system": "boundary stress-energy Dirac bracket locality at hydrodynamic scales"
      },
      "extensions": {
        "status": "OPEN, v4.9",
        "priority": "LOW"
      }
    },
    {
      "ref": "s-mix-006",
      "kind": "derivation",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "S-MIX-006: Verify Section VI No-Go Lemma Survives Auxiliary-Field Structure. Required: explicit verification that the Section VI No-Go Lemma (concerning the 30x30 primary-primary block, sourced by the gauge-momentum sector, not the Higgs) survives auxiliary-field structure. Estimated 2 to 3 days.",
      "closing_condition": {
        "condition_kind": "proof",
        "target": "compute the relevant brackets in the extended Lagrangian, confirm the principal coefficient C^ijk_ab,cd is unchanged",
        "system": "the Section VI No-Go Lemma under the auxiliary-field formulation"
      },
      "extensions": {
        "status": "OPEN, v4.10",
        "priority": "MEDIUM"
      }
    },
    {
      "ref": "s-mix-007",
      "kind": "derivation",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "S-MIX-007: Verify Section VIII BD-Ghost Theorem Survives Auxiliary-Field Structure. Required: explicit verification that the BD-ghost theorem (Theorem 1), resting on Hamiltonian constraint protection in the SO(1,4) Gauss algebra, survives auxiliary-field structure. Auxiliary fields enter the Gauss constraint as phi_[A Pi_B]; the algebra closure should still hold via Bianchi identities. Estimated 3 to 5 days.",
      "closing_condition": {
        "condition_kind": "proof",
        "target": "verify the Gauss algebra closure with auxiliary-field momenta included",
        "system": "the BD-ghost theorem under the auxiliary-field formulation"
      },
      "extensions": {
        "status": "OPEN, v4.10",
        "priority": "MEDIUM"
      }
    },
    {
      "ref": "s-mix-008",
      "kind": "derivation",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "S-MIX-008: Linear vs Quadratic Non-Minimal Coupling in Bare MM Expansion. Required: determine whether the bare broken MM expansion gives F proportional to (v+rho) (linear) or (v+rho)^2 (quadratic) as the non-minimal Jordan-frame coupling. Three candidate sources for the quadratic form identified. Cosmetic; does not affect framework substance.",
      "closing_condition": {
        "condition_kind": "proof",
        "target": "explicit derivation in the broken phase with all candidate mechanisms tested (state-dependent tetrad scaling, Stelle-West compensator term, auxiliary-field reduction); either outcome is acceptable",
        "system": "the non-minimal Jordan-frame coupling power in the bare MM expansion"
      },
      "extensions": {
        "status": "OPEN, v4.10",
        "priority": "LOW, cosmetic"
      }
    },
    {
      "ref": "op-ck",
      "kind": "derivation",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "OP-CK: Computation of the c_KK Prefactor. The variance coupling coefficient gamma = c_KK/(128 pi^2 Lambda_s^2) carries a dimensionless O(1) prefactor c_KK from the massive Fierz-Pauli trace anomaly in the a_4 Seeley-DeWitt coefficient on a Karch-Randall brane with full 5D gauge fixing and Faddeev-Popov ghost subtractions. F_Q,crit depends inversely on c_KK; all precision predictions carry an overall O(1) uncertainty from c_KK variation. OP-0 resolves unconditionally without this computation; only precision predictions depend on it. v4.15 soft prediction: the refresh-duality queue-capacity identity reproduces the heat-kernel threshold at c_KK ~ 5 with zero fitted parameters.",
      "closing_condition": {
        "condition_kind": "proof",
        "target": "(1) identify the gauge-fixed 5D spin-2 operator on AdS_5 with Karch-Randall boundary conditions, (2) compute the Fierz-Pauli fluctuation operator for each KK mode, (3) compute Faddeev-Popov ghost determinants for the chosen gauge, (4) extract the Ricci-squared coefficient in the brane-localized a_4, (5) sum over the KK spectrum with explicit wavefunction overlap factors at the brane",
        "system": "the c_KK prefactor in the variance coupling coefficient gamma"
      },
      "extensions": {
        "status": "OPEN",
        "priority": "MEDIUM, can be deferred behind higher-impact computations"
      }
    },
    {
      "ref": "s-lam-if-up",
      "kind": "comment",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "ungraded",
      "statement": "S-LAM-IF-UP (speculation tier, non-citable, SF-DG-012, June 2026): The laminar cognition-interface conjecture, up-reading direction. Whether a quantum-to-classical reading interface can be modeled as a laminar (low-Peclet) layer. Fires the susceptibility exclusion (reading the fast quantum layer decoheres it); dissolvable only by a continuous pleat (fold), available only if S-SECOND-LIGHT-SCALAR returns an umbilic. Carries no structural weight in the parent."
    },
    {
      "ref": "s-lam-if-down",
      "kind": "comment",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "ungraded",
      "statement": "S-LAM-IF-DOWN (speculation tier, non-citable, SF-DG-012, June 2026): The laminar cognition-interface conjecture, down-reading direction. Same laminar-layer structure as S-LAM-IF-UP, applied to the down-reading direction. Tractability inherits S-SECOND-LIGHT-SCALAR. Carries no structural weight in the parent."
    },
    {
      "ref": "s-qfi-death",
      "kind": "comment",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "ungraded",
      "statement": "S-QFI-DEATH (speculation tier, non-citable, SF-DG-012, June 2026): Conjecture connecting loss of quantum Fisher information (vacuum stiffness collapse) to a death/decoherence transition in a coherent biological substrate. Speculation tier."
    },
    {
      "ref": "s-dna-dfs",
      "kind": "comment",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "ungraded",
      "statement": "S-DNA-DFS (speculation tier, non-citable, SF-DG-012, June 2026): Conjecture that a decoherence-free subspace structure could be hosted in a biomolecular (DNA) register coupled to the radion channel. Speculation tier."
    },
    {
      "ref": "s-proton-mag",
      "kind": "comment",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "ungraded",
      "statement": "S-PROTON-MAG (speculation tier, non-citable, SF-DG-012, June 2026): Conjecture relating a proton-magnetic-moment anomaly to the species/KK coupling. Speculation tier."
    },
    {
      "ref": "mech.hemispheric-power-asymmetry",
      "kind": "mechanism",
      "source_id": "corpus.displacement-geometry-report",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Hemispherical power asymmetry from frozen SO(1,4) VEV gradient. Parent: (cosmological, no numbered function). Source: Displacement Geometry Report.",
      "extensions": {
        "verdict": "Plausible"
      },
      "closing_condition": {
        "condition_kind": "proof",
        "target": "calculation needed",
        "system": "hemispherical CMB power asymmetry from a frozen SO(1,4) VEV gradient"
      }
    },
    {
      "ref": "mech.cusp-core-resolution",
      "kind": "mechanism",
      "source_id": "corpus.displacement-geometry-report",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Cusp-core resolution from rigidity floor (Lambda_min density maximum). Satisfies F11. Source: Displacement Geometry Report.",
      "extensions": {
        "verdict": "Plausible"
      },
      "closing_condition": {
        "condition_kind": "proof",
        "target": "N-body simulations",
        "system": "dark matter halo density profile cusp-core transition from the Lambda_min rigidity floor"
      }
    },
    {
      "ref": "mech.tear-puncture-afterglow",
      "kind": "mechanism",
      "source_id": "corpus.half-sphere-report",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Tear vs puncture afterglow decay indices. Satisfies F06. Source: Half-Sphere Report.",
      "extensions": {
        "verdict": "Plausible"
      },
      "closing_condition": {
        "condition_kind": "direct-study",
        "target": "GRB catalog analysis",
        "system": "GRB afterglow decay index catalog, tear versus puncture channel"
      }
    },
    {
      "ref": "mech.e-snap-chain",
      "kind": "mechanism",
      "source_id": "corpus.dark-dimension-shear-zone",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Lambda_cc to R_Dark to m_KK to lambda_KK to Delta r to E_GRB chain. Satisfies F08. Source: DD Shear Zone.",
      "extensions": {
        "verdict": "Plausible"
      },
      "closing_condition": {
        "condition_kind": "proof",
        "target": "propagation-drainage PDE",
        "system": "the E_GRB derivation chain from Lambda_cc through the Dark Dimension radius to the KK Compton wavelength"
      }
    },
    {
      "ref": "mech.e-snap-universality",
      "kind": "mechanism",
      "source_id": "corpus.shear-zone-report",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Universality of E_snap across progenitors: same energy regardless of mass, rotation, EOS. Satisfies F08. Source: Shear Zone Reports.",
      "extensions": {
        "verdict": "Plausible"
      },
      "closing_condition": {
        "condition_kind": "direct-study",
        "target": "same energy regardless of progenitor mass, rotation, EOS, checked across the GRB catalog",
        "system": "E_snap universality across supernova progenitors"
      }
    },
    {
      "ref": "mech.pycnonuclear-fusion-rates",
      "kind": "mechanism",
      "source_id": "corpus.vacuum-energy-source",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Pycnonuclear fusion rates underestimated in NS crusts and WD cores. Parent: (std. phys., no DG function; this is a conjecture about standard physics rather than a DG mechanism). Source: LUNA + Vacuum Energy Source.",
      "extensions": {
        "verdict": "Plausible",
        "kind_call": "entered without a function parent since its own parent column reads (std. phys.), not a DG function; flagged per Stage 2.5 Track 1 instruction."
      },
      "closing_condition": {
        "condition_kind": "proof",
        "target": "TDDFT computation needed",
        "system": "pycnonuclear fusion rates in neutron star crusts and white dwarf cores"
      }
    },
    {
      "ref": "mech.mond-a0-leakage",
      "kind": "mechanism",
      "source_id": "corpus.kk-graviton-dm-report",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "MOND a_0 from 4D to 5D gravitational leakage. Satisfies F11. Low priority. Source: KK Graviton DM.",
      "extensions": {
        "verdict": "Plausible"
      },
      "closing_condition": {
        "condition_kind": "proof",
        "target": "formal mu(x) derivation, low priority",
        "system": "the MOND interpolation function a_0 from 4D-to-5D gravitational leakage"
      }
    },
    {
      "ref": "mech.loop-kk-threshold-alpha",
      "kind": "mechanism",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Loop-level KK threshold corrections to the fine-structure constant alpha. Parent: F13, which is itself reservoired (v4.15 matter-sector exclusion record; see Stage 2). No live depends-on link to F13 since it is not a claim in this graph; the parent relation is stated in text only. ~10^12 KK modes, z0-dependent spectrum. Source: warp-factor calculation.",
      "extensions": {
        "verdict": "Plausible",
        "note": "parent F13 is reservoired and absent from the graph; entered per explicit Stage 2.5 Track 1 disposition despite the dead parent, unlike Stage 2 which excluded F13-parented rows outright"
      },
      "closing_condition": {
        "condition_kind": "proof",
        "target": "surviving EM route, calculation not performed",
        "system": "loop-level KK threshold corrections to the fine-structure constant alpha"
      }
    },
    {
      "ref": "s-torsional-hair",
      "kind": "comment",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "ungraded",
      "statement": "Torsional hair preserves coherence information on horizon. Satisfies F17 (as speculative). The trellis marks this row Speculative; entered as a comment per the quarantine rule, mechanically non-citable. Source: Trellising."
    },
    {
      "ref": "s-k3-kill-rearg",
      "kind": "derivation",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "S-K3-KILL-REARG: re-argue the T3-variation kill (dead.t3-variation-alpha) on the corrected basis. Opened landing-1 Track 4, following the K3-prime supersession. The kill's evidence (ev.dead.t3-variation-alpha) justifies excluding any alpha proportional to T3^-1 mechanism on the premise that T3 cannot vary; both K3 audit artifacts confirm this for the bare action parameter T3 (Q3 reading (a): true, but a property of every Lagrangian parameter, not a consequence specific to the Israel junction conditions) while finding the junction-condition argument does not close a detuning-routed or T_eff-routed version of the same mechanism (PK-AUD-K3-002 Q3 reading (b): 'any mechanism whose functional dependence is alpha proportional to [T3(u_b)]^-1 across [the KR solution space], or alpha routed through l(z0), is not excluded by the junction-condition analysis'). The kill's own stated justification is therefore superseded in its general form; the specific quantitative question the kill needs re-argued on is whether the physical T_eff/detuning variation actually available to this framework's own z0 dynamics is bounded far enough below the alpha proportional to T3^-1 mechanism's own requirement (the original kill's target, F13's radion stabilization) to still exclude it in practice, not merely in principle.",
      "closing_condition": {
        "condition_kind": "proof",
        "target": "derive the quantitative bound on physical T_eff variation at this framework's own detuning scale (per K3-prime part (iii), |V(v(F_Q))| against the enhancement cosh^2(z0/L)), compare it against the alpha proportional to T3^-1 mechanism's own required variation scale (originally targeting F13 per dead.t3-variation-alpha), and have the comparison independently audited before entering it as superseding evidence for the withdrawal",
        "system": "the detuning-routed / T_eff-routed alpha proportional to T3^-1 channel the K3 audits found still open, against dead.t3-variation-alpha's original F13 target"
      },
      "extensions": {
        "status": "OPEN, landing-1",
        "priority": "conditions the reservoir's own dead.t3-variation-alpha withdrawal record, which stands unchanged pending this closure"
      }
    },
    {
      "ref": "s-k3-backreact",
      "kind": "derivation",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "S-K3-BACKREACT: reconcile the Israel-junction backreaction channel the K3 audits derive (PK-AUD-K3-002 Section 6: delta u_b = (kappa5^2 L/6) cosh^2(u_b) delta V, the position-sensitivity enhancement K3-prime part (iii) carries) with C23-SDC (the operator's own 'gamma-activation moduli mechanism' label for it), the framework's existing SDC-compliance claim built on the same z0 modulus's Karch-Randall geometry (c23-sdc: 'the DBI-induced metric on the radial modulus z0 gives geodesic distance d ~ M_Pl ln(z0/L)'). Opened landing-1 Track 4. Both mechanisms are built on the same underlying object, the z0 modulus's own geometric behavior under the Karch-Randall construction; whether they are the same channel under two different descriptions, two coupled channels, or genuinely independent is not determined by K3-prime alone.",
      "closing_condition": {
        "condition_kind": "proof",
        "target": "determine whether the K3-prime backreaction relation (delta u_b in terms of delta V) and C23-SDC's geodesic-distance SDC mechanism (d in terms of z0) describe the same z0-modulus channel under two parameterizations or two distinct channels, and state what the cosh^2(z0/L) position-sensitivity enhancement implies for C23-SDC's own SDC exponential-decay trigger if they are the same channel",
        "system": "the z0 modulus, K3-prime's junction-condition backreaction relation versus c23-sdc's geodesic-distance SDC mechanism"
      },
      "extensions": {
        "status": "OPEN, landing-1",
        "priority": "conditions c23-sdc (already conditional on S-CC-002 closure per its own extensions.verdict); a second, independent condition if the channels are shown to be the same"
      }
    },
    {
      "ref": "pred.muonic-atom-discrimination",
      "kind": "prediction",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Muonic atom discrimination test. Parent: F13, itself reservoired (see mech.loop-kk-threshold-alpha); no live depends-on link. Source: DBI Tension Report.",
      "closing_condition": {
        "condition_kind": "measurement-on-the-system",
        "target": "loop-level calculation needed to fix the predicted discrimination signal, then a muonic-atom measurement to test it",
        "system": "muonic atom spectroscopy discriminating the DG radion coupling"
      }
    },
    {
      "ref": "mech.bh-area-law-edge-modes",
      "kind": "mechanism",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Bekenstein-Hawking entropy sub-result (4.2). Area law from edge mode counting. Strongly Supported. Multiple independent proofs in first-order gauge gravity literature.",
      "extensions": {
        "verdict": "Strongly Supported"
      }
    },
    {
      "ref": "mech.bh-rt-surface-anchor",
      "kind": "mechanism",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Bekenstein-Hawking entropy sub-result (4.2). RT surface anchors to ETW defect. Confirmed. Defect Extremal Surface prescription.",
      "extensions": {
        "verdict": "Confirmed"
      }
    },
    {
      "ref": "mech.bh-so14-phase-space-protected",
      "kind": "mechanism",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Bekenstein-Hawking entropy sub-result (4.2). SO(1,4) phase space protected through SSB. Confirmed. 20 first-class constraints preserved.",
      "extensions": {
        "verdict": "Confirmed"
      }
    },
    {
      "ref": "mech.bh-radion-frozen-boundary",
      "kind": "mechanism",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Bekenstein-Hawking entropy sub-result (4.2). Radion frozen out of boundary phase space. Confirmed. 44 second-class constraints.",
      "extensions": {
        "verdict": "Confirmed"
      }
    },
    {
      "ref": "mech.bh-quarter-prefactor-invariance",
      "kind": "mechanism",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Bekenstein-Hawking entropy sub-result (4.2). v(F_Q) dynamic invariance of the 1/4 prefactor. Plausible. Scaling analysis: c ~ v^4, L_0 ~ v^4, Cardy square-root gives v^4.",
      "extensions": {
        "verdict": "Plausible"
      }
    },
    {
      "ref": "mech.bh-quarter-prefactor-microcanonical",
      "kind": "mechanism",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Bekenstein-Hawking entropy sub-result (4.2). Exact 1/4 prefactor from microcanonical counting. Open.",
      "extensions": {
        "verdict": "Open"
      },
      "closing_condition": {
        "condition_kind": "proof",
        "target": "the k-to-c descent cascade (path-integral derivation pushing the SO(2,4) CS level through the SO(1,4) defect to the 2D Virasoro central charge) plus the non-commutative modular bootstrap (extending the Cardy formula to quantum group algebras on the sl(2,R) corner)",
        "system": "the exact 1/4 Bekenstein-Hawking prefactor from microcanonical edge-mode counting"
      }
    },
    {
      "ref": "k18",
      "kind": "derivation",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "K18: Trans-Planckian VEV Suppresses Aperiodic Tilts [v4.8, from T3.6 + Tier 4 Section 4.4 reformulation]. Adoption of the Addazi-Meluccio periodic SSB potential (Section 4.4) forces the bare VEV to be vastly trans-Planckian: v ~ M_P * S_dS / (Y_MM M_P) ~ 10^139 GeV under standard EFT scaling Y_MM ~ M_P^-1. The 4D Planck mass is generated through M_P^2 = 32 Y_MM v m^2 (Addazi-Meluccio eq. 4) rather than identified with the bare VEV. This trans-Planckian hierarchy provides geometric suppression of all aperiodic radiative corrections to the periodic potential: the field-space distance between adjacent topological vacua remains Delta rho ~ 1/(c Y_MM) ~ 10^19 GeV (Planck-scale), and the topological barrier height V_barrier ~ mu_rho^2 Delta rho^2 ~ 10^32 GeV^4 at MeV radion mass overwhelmingly dominates aperiodic Coleman-Weinberg slopes (~10^-3 GeV^3 at the cell boundary) by 16 orders of magnitude. The protection mechanism is kinematic, overwhelming barrier height, rather than symmetric: the discrete shift symmetry is broken by the framework's gamma(phi^2) F_Q coupling and is not protective. Reference: Gemini CC Radiative Stability Report (April 2026), Addazi-Meluccio 2026. Constrains: F20, F-CC, Tier 4 SSB potential structure. Constrained by: T3.6.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "established the trans-Planckian VEV kinematic suppression mechanism (16 orders of magnitude margin) and the mass window [1 meV, 100 GeV], discharging S-CC-003",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.gemini-cc-radiative-stability-april-2026",
            "corpus.gemini-cc-run-2-april-2026",
            "corpus.gemini-cc-run-1-april-2026"
          ],
          "cited_source": "corpus.gemini-cc-radiative-stability-april-2026"
        }
      ]
    },
    {
      "ref": "gut-box-occupant",
      "kind": "derivation",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "GUT Box occupant (v4.0): the GUT Box, previously an empty search space bounded by K10, K11, K12, acquires its first confirmed occupant: F-theory X_F13 Pati-Salam on B_3 = P(O_dP3 (+) O(-H)) -> dP_3. A systematic survey (GUT Box Population Survey v1.7, seven adversarial Shore cycles, ten architectures evaluated) identified one confirmed viable resident: three killed (minimal SU(5), SUSY SU(5), orbifold GUTs), three flagged (SO(10), flipped SU(5), semi-simple/quiver), three plausible (trinification, E6, SUSY SO(10)), one confirmed viable (Pati-Salam). Three realization pathways were investigated for Pati-Salam in the Dark Dimension: intersecting D6-branes on factorizable tori (blocked by SF-G1, BPS-Chirality Tension), magnetized D-branes with Landau gapping (killed parametrically by SF-G3), and F-theory 7-branes on fibered bases (successful via SF-G2, Divisor Transversality). F-theory is the sole surviving realization pathway. The confirmed model passes all eight S-G20 constraints: gauge group, three families, Dark Dimension localization, tadpole, SUSY, proton decay, neutrino mass structure, rank-3 Yukawa.",
      "closing_condition": {
        "condition_kind": "proof",
        "target": "compute fiber-specific Euler characteristics chi(Y_4) and matter curve classes for the seven indeterminate toric fibers (X_F5, X_F6, X_F8, X_F9, X_F10, X_F11, X_F16) on each of the three surviving del Pezzo bases, 21 fiber-base pairs total, via FTheoryTools (Julia/OSCAR, arXiv:2506.13849), which implements the Batyrev-Borisov machinery; weeks-scale with software, intractable by hand",
        "system": "the toric fiber landscape of the F-theory GUT Box construction"
      },
      "extensions": {
        "trellis_context": "Base landscape (GUT Box Base Landscape, v4.1): the confirmed F-theory Pati-Salam model is viable on three del Pezzo base surfaces. dP_3 (N_geom 227, N_D3 95, N_Y 87 Yukawa loci, flux isotropy perfect at 15/3 = 5) is the geometric global optimum, the v4.0 specification and optimal baseline. dP_5 (N_geom 208, N_D3 136, N_Y 81, flux isotropy perfect at 15/5 = 3) is a viable alternative with identical D-flat relation t_H = 5 t_E. dP_7 (N_geom 189, N_D3 141, N_Y 75, flux isotropy broken at 15/7, not an integer) survives marginally with structural disadvantages: forced flux asymmetry breaks the S_n permutation symmetry of exceptional divisors. The gauge group is identical across all three bases (SF-D2); base selection among dP_3, dP_5, dP_7 is a secondary moduli landscape problem. Complete Base Exclusion Table (v4.1): P^2 (dP_0) killed by C3, no exceptional divisors; F_0 and F_2 killed by C3, Diophantine impossibility; dP_1 killed by C2, tadpole catastrophe (N_D3 = -186); dP_2, dP_4, dP_6, dP_8 killed by C2/C4, SF-D1 parity kill, half-integer N_D3; dP_3, dP_5, dP_7 survive. Toric Fiber Exclusion Status (v4.1): of the sixteen Klevers et al. (arXiv:1503.02068) toric hypersurface fibrations evaluated against the pre-filter stack (K10, K11, SM-embedding), eight are killed at the pre-filter (X_F1, X_F2, X_F3, X_F4, X_F7, X_F12, X_F14, X_F15), one is confirmed (X_F13, gauge algebra (SU(4) x SU(2)^2)/Z_2, fully mapped, survives), and seven are indeterminate pending computational resolution (X_F5, X_F6, X_F8, X_F9, X_F10, X_F11, X_F16, all pass the pre-filter but are missing fiber-specific Euler characteristic and matter curve data). If any indeterminate fiber survives its computation, it produces a different gauge group (SU(5), direct SM, or Trinification) and the gauge group selection fractures into a discrete landscape (SF-D2 structural note)."
      }
    },
    {
      "ref": "sf-g1",
      "kind": "derivation",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "SF-G1: BPS-Chirality Tension on Factorizable Tori in the Dark Dimension. On factorizable T^6/(Z_2 x Z_2') orientifolds with standard N=1 BPS conditions, the requirements of Dark Dimension brane localization (all observable brane stacks trivially wrapped on the large torus), three chiral generations (nonzero per-torus intersection numbers), and supersymmetry (brane angle sum equal to zero with positive-definite complex structure moduli) admit no simultaneous solution. The Pigeonhole argument establishes that three stacks with only two allowed orientations on the large torus force at least one pair into parallel alignment, zeroing their intersection number. Demonstrated on all 33 Sabir et al. (2024) intersecting D6-brane models via exhaustive permutation analysis. Scope: blocks D6-brane factorizable torus constructions for any gauge group in the Dark Dimension. Non-factorizable Calabi-Yau compactifications, magnetized brane constructions, and F-theory 7-brane models remain open. Source: Torus Permutation Check report.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "exhaustive 3x2 permutation matrix over all 33 Sabir et al. intersecting D6-brane models, demonstrating every cell fails, establishing the BPS-Chirality Tension",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.torus-permutation-check"
          ],
          "cited_source": "corpus.torus-permutation-check"
        }
      ]
    },
    {
      "ref": "sf-g2",
      "kind": "derivation",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "SF-G2: Divisor Transversality Escape from BPS-Chirality Tension. F-theory gauge localization via horizontal divisors on P^1-fibered base threefolds provides a structural escape from SF-G1. The gauge divisor S_GUT is engineered as a horizontal section of the P^1 fibration, transverse to the macroscopic Dark Dimension fiber. The mechanism operates because: holomorphic divisors in F-theory enforce N=1 SUSY via holomorphicity of the divisor, a condition that does not couple fiber and base directions; the gauge KK tower is determined by the Laplacian on S_GUT, independent of the fiber volume; matter curves are geometrically contained within S_GUT; gauge couplings depend only on Vol(S_GUT), decoupled from Vol(P^1 fiber) at tree level with K14-suppressed one-loop corrections. Sen limit check confirms the BPS-Chirality Tension does not reappear in the Type IIB weak-coupling limit. Scope: applies to any F-theory construction where the GUT divisor can be placed on a horizontal section of a fibered base. The finding is independent of fiber type or gauge group. This is the mechanism by which the GUT Box is occupied. Source: F-Theory X_F13 Base Geometry Adaptation report.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "verified divisor transversality on the P^1-fibered base (K10/K11/K12 compliance, Sen limit check) as the structural escape from the BPS-Chirality Tension",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.f-theory-base-adaptation",
            "corpus.torus-permutation-check"
          ],
          "cited_source": "corpus.f-theory-base-adaptation"
        }
      ]
    },
    {
      "ref": "sf-g3",
      "kind": "derivation",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "SF-G3: Avenue B Parametric Kill (Magnetized Brane Landau Gapping). The magnetized D-brane Landau gapping mechanism is parametrically unable to achieve Dark Dimension gauge localization on T^6/(Z_2 x Z_2') orientifolds. Closed-form bound: m_LL^max = M_s * sqrt(Q_max/(2 pi N_c A M_s^2)) ~ 710 MeV for Dark Dimension parameters, below the required 1 TeV threshold. The obstruction is an irreconcilable conflict between kinematics (mass gap scales linearly with flux N) and topology (induced RR charge scales linearly with N, bounded by the fixed orientifold budget Q_max ~ 32). Required flux N ~ 3.2e7 induces charge Q ~ 6.4e7 against a budget of 32; the deficit factor is ~ 2e6. Scope: parametric, applies to any magnetized D-brane model on any factorizable torus orientifold in the Dark Dimension. This eliminates an entire class of potential GUT realizations. Source: Avenue B Flux/Tadpole Budget report.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "computed the closed-form magnetized-brane Landau gapping bound against the orientifold flux/tadpole budget, showing a ~2e6 deficit factor",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.avenue-b-kill"
          ],
          "cited_source": "corpus.avenue-b-kill"
        }
      ]
    },
    {
      "ref": "sf-d0",
      "kind": "derivation",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "SF-D0: Species-Enhanced One-Loop Coefficients in Brane Heat Kernels. When a bulk Kaluza-Klein tower of N_species fields runs in a one-loop effective action on a brane worldvolume, the local operator coefficients generated by the a_4 Seeley-DeWitt expansion inherit a polynomial N_species enhancement. This is a UV enhancement of the Wilsonian coefficient through additive spectral summation, distinct from thermodynamic O(N) FDT-constrained enhancement of the matter observable. The enhancement applies specifically to dimension-6 and higher operators whose coefficients are generated locally by the a_4 or higher-order heat kernel terms. The enhancement applies to local Wilsonian coefficients in the effective action, to diagonal spectral traces of the form Tr e^(-s Delta), and to operator coefficients at coincidence limits x -> y. The enhancement does not apply to operator evaluations subject to FDT, which remain O(N), to coherent scattering amplitudes with external KK states, which carry sum rules that can produce cancellations, or to propagators between separated points, governed by Sturm-Liouville orthogonality of the KK wavefunctions. This structural finding generalizes beyond the specific (phi^2) f_Q operator: any framework with bulk KK towers generating brane-localized effective operators should check whether the species enhancement applies to the specific operator coefficient under consideration. The operational test: identify whether the object being summed is a spectral trace, enhanced, or a coherent amplitude, cancellation-prone. This distinction underlies LINT-12. Applied to gamma, SF-D0 yields gamma = c_KK/(128 pi^2 Lambda_s^2), replacing the prior gamma ~ 1/(16 pi^2 M_Pl^2) estimate and resolving OP-0 unconditionally. Scope: applies to any braneworld construction with a bulk KK tower and brane-localized heat kernel effective action. Source: Georgi-Grant-Hailu (2001), von Gersdorff-Irges-Quiros (2002), Fabinger-Horava (2000), Adjudication Document (April 2026), Paper 0 v10 Section IV.D.",
      "checking_records": [
        {
          "checker_id": "checker:chatgpt-arb",
          "method_class": "derivation-audit",
          "method": "adjudicated between two competing candidate formulas for the species-enhanced coupling gamma via heat-kernel spectral trace analysis, resolving to gamma = c_KK/(128 pi^2 Lambda_s^2), the formula SF-D0 states",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.dg-cft-053",
            "corpus.dg-cft-052",
            "corpus.dg-cft-051"
          ],
          "cited_source": "corpus.dg-cft-053"
        }
      ]
    },
    {
      "ref": "sf-d1",
      "kind": "derivation",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "SF-D1: Even-Degree Parity Kill. The geometric tadpole budget for X_F13 over any dP_n base evaluates to N_geom = (6132 - 228n)/24 = 255.5 - 9.5n. For even blow-up index n = 2k, this expression reduces to 255.5 - 19k, a strict half-integer. The flux penalty (1/2) Integral G_4 wedge G_4 for integer flux satisfying the three-family Diophantine lock (a = 3, sum b_i = 15) evaluates to an even integer (2 |F|^2, with |F|^2 = 9 - sum b_i^2 an integer). The difference between a half-integer budget and an even-integer penalty is inescapably half-integer: N_D3 is not an integer. This absolute algebraic parity contradiction eliminates dP_2, dP_4, dP_6, and dP_8 unconditionally under the X_F13 architecture with L = O(-H) twist. Half-integer flux shifts that could in principle restore parity shatter the a = 3 Diophantine lock required for three chiral families. Scope: applies to X_F13 on all even-degree del Pezzo surfaces under the standard twist; parity behavior under other fibers remains indeterminate. Source: Del Pezzo Exclusion Sweep report."
    },
    {
      "ref": "sf-d2",
      "kind": "derivation",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "SF-D2: Gauge Group Fiber-Locking. The Pati-Salam gauge symmetry (SU(4) x SU(2)_L x SU(2)_R)/Z_2 is determined entirely by the X_F13 toric fiber and is invariant under variation of the base surface within the surviving family {dP_3, dP_5, dP_7}. The base geometry affects the chiral spectrum details, flux distribution, tadpole margin, Yukawa multiplicity, moduli stabilization landscape, but leaves the gauge group unchanged. The derivation chain for gauge group selection is: framework constraints (K10, K11, K12) leads to Dark Dimension boundary conditions (SF-G2 divisor transversality) leads to X_F13 fiber selection leads to Pati-Salam. The base choice is a secondary vacuum selection problem within a three-element discrete landscape. Source: Del Pezzo Exclusion Sweep report, Fiber Exclusion Sweep report."
    },
    {
      "ref": "sf-mix-001",
      "kind": "derivation",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "SF-MIX-001: Auxiliary-field structure required for Higgs sector kinetic term in MMSW gravity. Scalar kinetic terms in MacDowell-Mansouri-Stelle-West (MMSW) gravity cannot be written as direct (D phi)^dagger (D phi) constructions because the Hodge dual on the gauge-fiber side of the MMSW action produces an antisymmetric mu-nu structure that vanishes as a Klein-Gordon kinetic term (Langenscheidt 2019, Section 4.2). The principled resolution is a first-order auxiliary action with the scalar promoted to a 5-vector phi^A; the radial mode phi^5 propagates and the four Lorentz components phi^a are auxiliary, eliminated by algebraic equations of motion. This structure is forced by SO(1,4) covariance and is the standard treatment in the MMSW literature (Stelle-West 1980, Langenscheidt 2019). The framework's earlier implicit treatment of -(partial rho)^2 as a directly-displayable Jordan-frame kinetic term was a documentation gap inherited from the terse compensator handling in Stelle-West. Generalization: any pre-geometric gauge-theoretic gravity construction with internal gauge symmetry larger than SO(1,3) and a scalar Higgs sector breaking to SO(1,3) faces the same obstruction; the resolution is universally an auxiliary-field formulation forced by the gauge-fiber Hodge dual structure. Scope: applies to any MMSW or related broken gauge-theoretic gravity construction with propagating scalar mode. Source: Langenscheidt 2019 (arXiv:1907.10440), ChatGPT S-MIX-002 Path B Survey (April 2026), ChatGPT S-MIX-004 Weyl Rescaling Verification (April 2026), Path B Resolution Synthesis (April 2026)."
    },
    {
      "ref": "sf-mix-002",
      "kind": "derivation",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "SF-MIX-002 (v4.11): First-order matter Lagrangian primary blocks have rank 2 with secondary promotion of null primaries. Primary-primary Dirac sub-blocks for first-order matter Lagrangians, where canonical momenta are linear in fields rather than velocities, generically have rank 2 in a 5-dimensional auxiliary sector, not full rank. The Darboux structure decomposes the primary constraints into one second-class pair plus null combinations orthogonal to the kinetic projection vector f_a. The null primary combinations are not gauge generators; they are promoted to second-class via brackets with the secondary constraints generated by their own preservation under the Hamiltonian. The promotion mechanism depends on the algebraic structure of the auxiliary EOM, specifically the identity coefficient on the auxiliary fields. Operational test: given a first-order Lagrangian for fields (phi^A) = (phi^5, phi^a) with one component propagating and the rest auxiliary, count primary constraints via Pi_A - partial L/partial(dot phi^A) = 0, compute the primary-primary Dirac block, and identify null directions orthogonal to the kinetic projection. The expected rank is 2k where k is the number of velocity-coupling kinematic projections. Promotion of null primaries proceeds through secondary constraints with brackets M_rs = -G_rs delta^3 on the orthogonal subspace. Scope: applies to MMSW gravity with auxiliary scalars (Langenscheidt 2019), BF theory with matter, Stelle-West compensators, Dirac fermions in canonical analysis, and any first-order matter Lagrangian where auxiliary fields are eliminated via algebraic EOMs. Distinct from the standard Dirac-Bergmann pattern for second-order Lagrangians, where primary blocks are typically full rank. Source: ChatGPT S-MIX-005a Report (April 2026), ChatGPT S-MIX-005b Report (April 2026), Langenscheidt 2019 (arXiv:1907.10440)."
    },
    {
      "ref": "sf-mix-003",
      "kind": "derivation",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "SF-MIX-003 (v4.11): Orthogonal projection of algebraic auxiliary EOM produces primary-secondary bracket rank determined by orthogonal subspace dimension. When secondary constraints from preservation of null primaries take the form S_r = s^(r)a A_a with A_a = eta_ab phi^b + B_a(lower-order), the bracket matrix with the original null primaries is M_rs = -s^(r)a s^(s)b eta_ab delta^3 + Delta_rs, the Gram matrix of basis vectors s^(r) in the internal metric restricted to the orthogonal complement H_f = {u^a : u^a f_a = 0}. Generic rank equals dim H_f. Lower-order covariantization terms shift the inhomogeneous part of A_a but do not affect the identity coefficient on phi^a, hence do not threaten rank generically. Degeneracy conditions: f_a = 0, kinetic projection vanishes; f_a f^a = 0, null kinetic projection in Lorentzian internal metric; or accidental tuning of lower-order background. None of these are generic broken-vacuum configurations. Constant-volume simplifications (D_mu e^mu_a = 0) are convenience for the reduced scalar equation, not structural requirements for rank. Scope: applies wherever first-order matter Lagrangians produce algebraic auxiliary EOMs with identity coefficient on auxiliary fields. Operational test: identify the kinetic projection vector f_a, compute the orthogonal complement, verify the Gram matrix is invertible on a basis of the complement. Source: ChatGPT S-MIX-005b Report (April 2026), Langenscheidt 2019 (arXiv:1907.10440)."
    },
    {
      "ref": "sf-mm-002",
      "kind": "derivation",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "SF-MM-002 (v4.12): Isolated 30x30 spatial connection symbol has rank 12 with 18-dimensional kernel. In the broken phase <phi^A> = v delta^A_4, the principal symbol of the multiplier preservation operator restricted to the 30 spatial connection primary constraints Z^i_AB has the explicit form sigma_ZZ^(i,ab;l,cd)(xi) = 8i alpha (v+rho) epsilon_abcd epsilon^(0ikl) xi_k with sigma_ZZ^(i,a4;l,CD)(xi) = 0. Factorization: sigma_ZZ = 8i alpha (v+rho) star_int tensor curl_xi. For xi not equal to 0, rank is 12 with 18-dimensional left kernel decomposing as 6 longitudinal Lorentz modes plus 12 broken-sector a4 modes. The 6 longitudinal directions are R^(i,ab)_Lambda = xi^i Lambda^ab for antisymmetric Lambda^ab. The 12 broken-row directions are R^(i,a4)_X = X^ia for arbitrary X^ia. Full ellipticity therefore requires cross-block contributions: torsion cross-block sigma_TZ^(a,jk;b4,l)(xi) = (i/m) delta^a_b (delta^l_k xi_j - delta^l_j xi_k) structurally lifts the 12 broken-row directions; the 6 longitudinal Lorentz directions require the scalar-gradient cross-block whose form depends on the explicit F_i. Source: S-MM-002 Preliminary Report (April 2026), S-MM-002-alpha/beta reports."
    },
    {
      "ref": "sf-mm-003",
      "kind": "derivation",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "SF-MM-003 (v4.12): Subprincipal entries in MMSW multiplier matrix are lower differential order than the principal curl symbol. The connection-dependent subprincipal contribution U_M from the SO(1,4) covariant derivative D_j in the Frechet variation of Z^i_AB is ultra-local, order zero in spatial derivatives, while the principal curl symbol sigma_M is order one. Therefore U_M does not upgrade the principal-symbol rank used in the ellipticity problem. It can affect frozen-background multiplier solving as an algebraic lower-order term, but the principal rank stays at the curl-driven value, 12 in the 30-component spatial connection block. Tetrad-derivative entries in the Higgs-primary multiplier columns (delta f_a / delta A_i^b4) are similarly ultra-local. The DOF reduction beyond the principal rank therefore requires a configuration-robustness theorem (S-MM-CR) that the standard MM literature does not derive; the rank lift from 18 to the physical secondary count is generically background-sensitive. This is a generic feature of MMSW canonical analyses with auxiliary scalars, not specific to the Langenscheidt formulation. The standard MM literature on Hamiltonian constraint analysis presupposes the configuration-robustness condition without explicit derivation. Source: S-MM-002-gamma Report (April 2026)."
    },
    {
      "ref": "ev.dead.geff-amplification",
      "kind": "computation",
      "source_id": "corpus.half-sphere-report",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"dead.geff-amplification\": G_eff amplification is absurd at ~10^40 G_N. The coherent-matter coupling enters the angular (torsion) channel, not the radial channel that sources G_eff; K2 forbids any channel from amplifying, modifying, or state-dependently varying the gravitational constant itself.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.geff-amplification\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.half-sphere-report"
          ],
          "cited_source": "corpus.half-sphere-report"
        }
      ]
    },
    {
      "ref": "dead.geff-amplification",
      "kind": "mechanism",
      "source_id": "corpus.half-sphere-report",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Proposed mechanism: state-dependent VEV suppression amplifies the effective gravitational coupling G_eff, producing an observable local-gravity enhancement (targeting F02, F05)."
    },
    {
      "ref": "ev.dead.higgs-conflation",
      "kind": "computation",
      "source_id": "corpus.physics-literature-recon",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"dead.higgs-conflation\": The SO(1,4) Higgs is distinct from the electroweak Higgs (K4, T2.8). Conflating them produces white-dwarf mass-radius cliffs, spurious G_eff spikes, and premature pycnonuclear detonation not seen in any real degenerate star.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.higgs-conflation\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.physics-literature-recon"
          ],
          "cited_source": "corpus.physics-literature-recon"
        }
      ]
    },
    {
      "ref": "dead.higgs-conflation",
      "kind": "mechanism",
      "source_id": "corpus.physics-literature-recon",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Proposed identification: m_e = y_e v_eff, treating the framework's SO(1,4) symmetry-breaking Higgs as the same field as the electroweak Higgs (targeting F13)."
    },
    {
      "ref": "ev.dead.warp-factor-alpha",
      "kind": "computation",
      "source_id": "corpus.warp-factor-calc",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"dead.warp-factor-alpha\": The Omega^4 factor from sqrt(-g) exactly cancels the Omega^-4 factor from F^{mu nu}F_{mu nu}; the tree-level warp-factor dependence vanishes identically, leaving no physical z_0-dependent coupling at this order.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.warp-factor-alpha\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.warp-factor-calc"
          ],
          "cited_source": "corpus.warp-factor-calc"
        }
      ]
    },
    {
      "ref": "dead.warp-factor-alpha",
      "kind": "mechanism",
      "source_id": "corpus.warp-factor-calc",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Proposed mechanism: a tree-level warp-factor alpha(z_0) dependence provides a physical z_0-dependent coupling for radion stabilization (targeting F13)."
    },
    {
      "ref": "ev.dead.dbi-radius-inflation",
      "kind": "computation",
      "source_id": "corpus.dbi-tension-report",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"dead.dbi-radius-inflation\": r_BI is proportional to T_3^{-1/4}; inflating r_BI from 10^-33 to 10^-11 cm would require a T_3 suppression of 10^88, which is not physically available from any mechanism in the construction.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.dbi-radius-inflation\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.dbi-tension-report"
          ],
          "cited_source": "corpus.dbi-tension-report"
        }
      ]
    },
    {
      "ref": "dead.dbi-radius-inflation",
      "kind": "mechanism",
      "source_id": "corpus.dbi-tension-report",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Proposed mechanism: Born-Infeld radius inflation from a small brane tension shift provides the geometric scale needed for radion stabilization (targeting F13)."
    },
    {
      "ref": "ev.dead.t3-variation-alpha",
      "kind": "computation",
      "source_id": "corpus.dbi-tension-report",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"dead.t3-variation-alpha\": T_3 is held constant by the Israel junction conditions at the brane; there is no dynamical T_3 variation available to drive alpha proportional to T_3^{-1}.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.t3-variation-alpha\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.dbi-tension-report"
          ],
          "cited_source": "corpus.dbi-tension-report"
        }
      ]
    },
    {
      "ref": "dead.t3-variation-alpha",
      "kind": "mechanism",
      "source_id": "corpus.dbi-tension-report",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Proposed mechanism: T_3 variation produces alpha proportional to T_3^{-1}, giving a dynamical channel for the warp factor (targeting F13)."
    },
    {
      "ref": "ev.dead.luna-geometric-truncation",
      "kind": "computation",
      "source_id": "corpus.luna-geometric-dimple",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"dead.luna-geometric-truncation\": The geometric-truncation model overshoots the observed LUNA screening enhancement by a factor of 10^9, a Volume Bug class failure (a volumetric rather than surface/angular scaling was used where the mechanism requires the latter).",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.luna-geometric-truncation\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.luna-geometric-dimple"
          ],
          "cited_source": "corpus.luna-geometric-dimple"
        }
      ]
    },
    {
      "ref": "dead.luna-geometric-truncation",
      "kind": "mechanism",
      "source_id": "corpus.luna-geometric-dimple",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Proposed mechanism: geometric truncation of the LUNA screening potential reproduces the observed electron screening enhancement (targeting F13)."
    },
    {
      "ref": "ev.dead.luna-perturbative-torsion",
      "kind": "computation",
      "source_id": "corpus.luna-torsion-screening",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"dead.luna-perturbative-torsion\": The perturbative torsion channel is G/c^4 suppressed, 10^40 times too weak to reproduce the observed LUNA screening enhancement.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.luna-perturbative-torsion\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.luna-torsion-screening"
          ],
          "cited_source": "corpus.luna-torsion-screening"
        }
      ]
    },
    {
      "ref": "dead.luna-perturbative-torsion",
      "kind": "mechanism",
      "source_id": "corpus.luna-torsion-screening",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Proposed mechanism: perturbative torsion screening at tree level reproduces the LUNA electron-screening anomaly (targeting F13)."
    },
    {
      "ref": "ev.dead.luna-debye-coherence",
      "kind": "computation",
      "source_id": "corpus.luna-debye-coherence",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"dead.luna-debye-coherence\": No correlation between the Debye temperature and the screening enhancement U_e is found in the data; diamond, which the mechanism predicts should show strong coherence, gives zero enhancement.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.luna-debye-coherence\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.luna-debye-coherence"
          ],
          "cited_source": "corpus.luna-debye-coherence"
        }
      ]
    },
    {
      "ref": "dead.luna-debye-coherence",
      "kind": "mechanism",
      "source_id": "corpus.luna-debye-coherence",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Proposed mechanism: a Debye-temperature-correlated coherence channel explains the target-material dependence of the LUNA screening anomaly (targeting F13)."
    },
    {
      "ref": "ev.dead.torsion-dark-matter",
      "kind": "computation",
      "source_id": "corpus.torsion-dm-diagnostic",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"dead.torsion-dark-matter\": The torsion-as-dark-matter hypothesis is killed on five separate axes documented in the Torsion DM Diagnostic report (galactic rotation curve normalization, cluster lensing profile, structure-formation timing, torsion-sign consistency, and CMB power-spectrum compatibility all independently fail).",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.torsion-dark-matter\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.torsion-dm-diagnostic"
          ],
          "cited_source": "corpus.torsion-dm-diagnostic"
        }
      ]
    },
    {
      "ref": "dead.torsion-dark-matter",
      "kind": "mechanism",
      "source_id": "corpus.torsion-dm-diagnostic",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Proposed mechanism: framework-generated torsion sources the dark-matter phenomenology directly, without a separate dark-matter particle (targeting F11)."
    },
    {
      "ref": "ev.dead.torsion-mond-a0",
      "kind": "computation",
      "source_id": "corpus.torsion-dm-diagnostic",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"dead.torsion-mond-a0\": The torsion-derived acceleration scale comes out at ~7e-23 cm/s^2, 14 orders of magnitude below the empirical MOND a_0 ~ 1.2e-8 cm/s^2.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.torsion-mond-a0\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.torsion-dm-diagnostic"
          ],
          "cited_source": "corpus.torsion-dm-diagnostic"
        }
      ]
    },
    {
      "ref": "dead.torsion-mond-a0",
      "kind": "mechanism",
      "source_id": "corpus.torsion-dm-diagnostic",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Proposed mechanism: torsion generated by the framework derives the MOND acceleration scale a_0 from first principles (targeting F11)."
    },
    {
      "ref": "ev.dead.zero-point-cancellation",
      "kind": "computation",
      "source_id": "corpus.displacement-geometry-report",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"dead.zero-point-cancellation\": The proposed pairwise cancellation violates the Reeh-Schlieder theorem's cluster/entanglement structure and would additionally require unbroken supersymmetry, which the framework does not have.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.zero-point-cancellation\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.displacement-geometry-report"
          ],
          "cited_source": "corpus.displacement-geometry-report"
        }
      ]
    },
    {
      "ref": "dead.zero-point-cancellation",
      "kind": "mechanism",
      "source_id": "corpus.displacement-geometry-report",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Proposed mechanism: zero-point mode pairs cancel across the brane membrane, providing a natural cosmological-constant cancellation without invoking a separate CC mechanism (targeting F16/CC)."
    },
    {
      "ref": "ev.dead.dbi-mond",
      "kind": "computation",
      "source_id": "corpus.displacement-geometry-report",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"dead.dbi-mond\": The DBI action is linear precisely in the low-acceleration-gradient regime where MOND requires nonlinearity; the DBI nonlinear regime activates at high field strength, the exact inverse of the MOND transition's location.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.dbi-mond\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.displacement-geometry-report"
          ],
          "cited_source": "corpus.displacement-geometry-report"
        }
      ]
    },
    {
      "ref": "dead.dbi-mond",
      "kind": "mechanism",
      "source_id": "corpus.displacement-geometry-report",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Proposed mechanism: DBI (Born-Infeld) nonlinearity in the brane action reproduces the MOND force-law transition (targeting F11)."
    },
    {
      "ref": "ev.dead.esnap-3d-volume",
      "kind": "computation",
      "source_id": "corpus.transient-energetics-failure",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"dead.esnap-3d-volume\": 3D volume scaling gives E_snap ~ 10^57 to 10^63 erg, a trans-Planckian energy scale with no physical referent.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.esnap-3d-volume\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.transient-energetics-failure"
          ],
          "cited_source": "corpus.transient-energetics-failure"
        }
      ]
    },
    {
      "ref": "dead.esnap-3d-volume",
      "kind": "mechanism",
      "source_id": "corpus.transient-energetics-failure",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Proposed mechanism: the snapback energy E_snap scales with the coherence domain's 3D volume (targeting F08)."
    },
    {
      "ref": "ev.dead.esnap-atomic-area-law",
      "kind": "computation",
      "source_id": "corpus.transient-energetics-failure",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"dead.esnap-atomic-area-law\": Atomic area-law scaling gives E_snap ~ 10^38 erg, undershooting the observed transient energetics by 13 orders of magnitude.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.esnap-atomic-area-law\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.transient-energetics-failure"
          ],
          "cited_source": "corpus.transient-energetics-failure"
        }
      ]
    },
    {
      "ref": "dead.esnap-atomic-area-law",
      "kind": "mechanism",
      "source_id": "corpus.transient-energetics-failure",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Proposed mechanism: the snapback energy E_snap follows an atomic-scale area-law scaling (targeting F08)."
    },
    {
      "ref": "ev.dead.theal-naive-ml",
      "kind": "computation",
      "source_id": "corpus.resolution",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"dead.theal-naive-ml\": The naive M-L scaling is a category error, giving t_heal ~ 10^-81 s, many orders removed from any physically meaningful timescale.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.theal-naive-ml\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.resolution",
            "corpus.task-2-3-results"
          ],
          "cited_source": "corpus.resolution"
        }
      ]
    },
    {
      "ref": "dead.theal-naive-ml",
      "kind": "mechanism",
      "source_id": "corpus.resolution",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Proposed mechanism: t_heal follows a naive mass-luminosity scaling relation (targeting F04)."
    },
    {
      "ref": "ev.dead.theal-pixel-counting",
      "kind": "computation",
      "source_id": "corpus.resolution",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"dead.theal-pixel-counting\": The pixel-counting estimate gives t_heal ~ 10^4 s, both numerically wrong and running in the wrong direction relative to the resolved t_heal = t_scrambling identification.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.theal-pixel-counting\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.resolution",
            "corpus.task-2-3-results"
          ],
          "cited_source": "corpus.resolution"
        }
      ]
    },
    {
      "ref": "dead.theal-pixel-counting",
      "kind": "mechanism",
      "source_id": "corpus.resolution",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Proposed mechanism: t_heal is set by a pixel-counting (areal-resolution) estimate of the healing front (targeting F04)."
    },
    {
      "ref": "ev.dead.transient-scrambling-identity",
      "kind": "computation",
      "source_id": "corpus.transient-energetics-failure",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"dead.transient-scrambling-identity\": The KK scrambling time (~4 ms) is distinct by many orders of magnitude from the observed transient timescales (seconds to months); the two cannot be identified.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.transient-scrambling-identity\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.transient-energetics-failure"
          ],
          "cited_source": "corpus.transient-energetics-failure"
        }
      ]
    },
    {
      "ref": "dead.transient-scrambling-identity",
      "kind": "mechanism",
      "source_id": "corpus.transient-energetics-failure",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Proposed identification: the observed astrophysical transient timescale equals the KK scrambling time t_scrambling directly (targeting F06)."
    },
    {
      "ref": "ev.dead.lambda4min-universal",
      "kind": "computation",
      "source_id": "corpus.vacuum-energy-source",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"dead.lambda4min-universal\": A universal scaling requires an independent coupling-constant input at each physical scale; no such universal law is available from dimensional analysis alone.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.lambda4min-universal\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.vacuum-energy-source"
          ],
          "cited_source": "corpus.vacuum-energy-source"
        }
      ]
    },
    {
      "ref": "dead.lambda4min-universal",
      "kind": "mechanism",
      "source_id": "corpus.vacuum-energy-source",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Proposed mechanism: a single universal scaling law for Lambda^4_min applies across all coherent-matter substrates without a per-substrate coupling constant (targeting F08)."
    },
    {
      "ref": "ev.dead.bosenova-all-variants",
      "kind": "computation",
      "source_id": "corpus.bosenova-falsification",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"dead.bosenova-all-variants\": Every examined bosenova variant gives F_Q = 2.56e8 against the required activation threshold of 10^32, a Volume Bug class deficit of 24 orders of magnitude.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.bosenova-all-variants\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.bosenova-falsification"
          ],
          "cited_source": "corpus.bosenova-falsification"
        }
      ]
    },
    {
      "ref": "dead.bosenova-all-variants",
      "kind": "mechanism",
      "source_id": "corpus.bosenova-falsification",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Proposed mechanism: coherent-matter bosenova collapse (in any of its examined variants) provides an observable tabletop or astrophysical signature (targeting F14)."
    },
    {
      "ref": "ev.dead.missing-bec-bulk-escape",
      "kind": "computation",
      "source_id": "corpus.bosenova-density-spike",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"dead.missing-bec-bulk-escape\": The proposed bulk-escape channel requires baryon-number violation, which is not available anywhere in the construction.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.missing-bec-bulk-escape\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.bosenova-density-spike",
            "corpus.bosenova-falsification"
          ],
          "cited_source": "corpus.bosenova-density-spike"
        }
      ]
    },
    {
      "ref": "dead.missing-bec-bulk-escape",
      "kind": "mechanism",
      "source_id": "corpus.bosenova-density-spike",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Proposed mechanism: a missing-BEC signature escapes detection by radiating into the 5D bulk (an auxiliary bosenova-family escape route)."
    },
    {
      "ref": "ev.dead.kr-brane-reeh-schlieder",
      "kind": "computation",
      "source_id": "corpus.occam-s-razor-audit",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"dead.kr-brane-reeh-schlieder\": Donnelly-Freidel 4D edge modes replicate the same Reeh-Schlieder-preserving structure without requiring the KR brane; Occam's razor rules the brane not mandatory for this purpose.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.kr-brane-reeh-schlieder\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.occam-s-razor-audit"
          ],
          "cited_source": "corpus.occam-s-razor-audit"
        }
      ]
    },
    {
      "ref": "dead.kr-brane-reeh-schlieder",
      "kind": "mechanism",
      "source_id": "corpus.occam-s-razor-audit",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Proposed necessity: the Karch-Randall brane itself is mandatory to preserve the Reeh-Schlieder property of the boundary theory (targeting F18)."
    },
    {
      "ref": "ev.dead.route3-fixed-brane",
      "kind": "computation",
      "source_id": "corpus.route-1-report",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"dead.route3-fixed-brane\": Fixing the brane position severs the T^(5)_mu flux channel that the construction otherwise requires, an unacceptable structural cost.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.route3-fixed-brane\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.route-1-report",
            "corpus.kk-propagator-report"
          ],
          "cited_source": "corpus.route-1-report"
        }
      ]
    },
    {
      "ref": "dead.route3-fixed-brane",
      "kind": "mechanism",
      "source_id": "corpus.route-1-report",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Proposed mechanism: fixing the brane position by hand (Route 3) provides a stable resolution route for brane stability, avoiding the running-coupling analysis (targeting radion/brane stability)."
    },
    {
      "ref": "ev.dead.conjugate-baryogenesis-all",
      "kind": "computation",
      "source_id": "corpus.baryogenesis-kill",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Evidence for the withdrawal of \"dead.conjugate-baryogenesis-all\": Five-axis kill. (1) Coset connectivity: pi_0 = pi_1 = pi_2 = 0 for the S^3 vacuum manifold, so no stable topological defect exists for the needed spatial isolation. (2) BD ghost resurrection: forcing CP-violating couplings degrades the Hamiltonian constraint to second-class, reviving the Boulware-Deser ghost. (3) Rank mismatch: SO(1,4) and SU(2)_L x U(1)_Y act on different internal spaces with no anomaly-free translation of torsion into electroweak Chern-Simons diffusion. (4) The QFI (Bures metric) is strictly positive-definite and cannot serve as a CP-odd source. (5) EWPT variant: a 100 GeV plasma thermalizes at ~1e-22 s, ten orders faster than the KK scrambling time, pinning the coherence fraction at f~0 so the VEV coupling never activates, and T2.8 forbids the gravitational VEV from modifying the electroweak sphaleron barrier in any case; even granting the conflation, VEV suppression drives E_sph toward zero, causing total baryon washout. B9 remains outside the framework's explanatory domain.",
      "checking_records": [
        {
          "checker_id": "checker:self",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.conjugate-baryogenesis-all\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "self",
          "footprint": [
            "corpus.baryogenesis-kill"
          ],
          "cited_source": "corpus.baryogenesis-kill"
        }
      ]
    },
    {
      "ref": "dead.conjugate-baryogenesis-all",
      "kind": "mechanism",
      "source_id": "corpus.baryogenesis-kill",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Proposed mechanism: a conjugate-orientation baryogenesis channel (including the electroweak-phase-transition bubble-wall variant) sources the observed matter-antimatter asymmetry via the framework's SO(1,4) torsion sector (targeting B9)."
    },
    {
      "ref": "ev.dead.wkb-metric-deformation",
      "kind": "computation",
      "source_id": "corpus.luna-screening-v1",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"dead.wkb-metric-deformation\": The conformal factor in the proposed WKB deformation cancels identically, leaving no stable intermediate state.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.wkb-metric-deformation\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.luna-screening-v1"
          ],
          "cited_source": "corpus.luna-screening-v1"
        }
      ]
    },
    {
      "ref": "dead.wkb-metric-deformation",
      "kind": "mechanism",
      "source_id": "corpus.luna-screening-v1",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Proposed mechanism: a WKB-computed metric deformation supplies a stable intermediate screening state for LUNA phenomenology (targeting F13)."
    },
    {
      "ref": "ev.dead.quintessence-scalar-de",
      "kind": "computation",
      "source_id": "corpus.braneworld-cosmology",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"dead.quintessence-scalar-de\": A genuine fourth propagating scalar DOF violates the Dirac-Bergmann constraint counting the construction establishes (P3); the quintessence-scalar route is structurally redundant with the framework's existing content.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.quintessence-scalar-de\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.braneworld-cosmology"
          ],
          "cited_source": "corpus.braneworld-cosmology"
        }
      ]
    },
    {
      "ref": "dead.quintessence-scalar-de",
      "kind": "mechanism",
      "source_id": "corpus.braneworld-cosmology",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Proposed mechanism: an explicit quintessence scalar field is added to source the framework's dark-energy evolution (targeting F12)."
    },
    {
      "ref": "ev.dead.so14-higgs-inflaton",
      "kind": "computation",
      "source_id": "corpus.pre-geometric-inflation",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"dead.so14-higgs-inflaton\": The slow-roll parameters come out at eta ~ -4 and n_s ~ -7; v ~ M_Pl forces catastrophic fast-roll, incompatible with any viable inflationary trajectory.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.so14-higgs-inflaton\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.pre-geometric-inflation"
          ],
          "cited_source": "corpus.pre-geometric-inflation"
        }
      ]
    },
    {
      "ref": "dead.so14-higgs-inflaton",
      "kind": "mechanism",
      "source_id": "corpus.pre-geometric-inflation",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Proposed mechanism: the SO(1,4) symmetry-breaking Higgs itself serves as the slow-roll inflaton for primordial inflation (targeting F20)."
    },
    {
      "ref": "ev.dead.cdl-bubble-nucleation",
      "kind": "computation",
      "source_id": "corpus.pre-geometric-inflation",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"dead.cdl-bubble-nucleation\": The CDL bounce action comes out at ~10^44 (infinite suppression); CDL assumes a canonical kinetic term that is absent in the BF (topological) phase the framework actually uses.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.cdl-bubble-nucleation\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.pre-geometric-inflation"
          ],
          "cited_source": "corpus.pre-geometric-inflation"
        }
      ]
    },
    {
      "ref": "dead.cdl-bubble-nucleation",
      "kind": "mechanism",
      "source_id": "corpus.pre-geometric-inflation",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Proposed mechanism: Coleman-De Luccia bubble nucleation drives the geometric phase transition at the start of inflation (targeting F20)."
    },
    {
      "ref": "ev.dead.thooft-naturalness-lambda",
      "kind": "computation",
      "source_id": "corpus.peer-review-cross-exam",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Evidence for the withdrawal of \"dead.thooft-naturalness-lambda\": The shift symmetry rho -> rho + c is explicitly broken by the trace-anomaly coupling that K11 requires; the actual protection mechanism is gravitational-coupling suppression (K14), not 't Hooft naturalness via shift symmetry.",
      "checking_records": [
        {
          "checker_id": "checker:self",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.thooft-naturalness-lambda\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "self",
          "footprint": [
            "corpus.peer-review-cross-exam",
            "corpus.radion-stability-audit",
            "corpus.peer-review"
          ],
          "cited_source": "corpus.peer-review-cross-exam"
        }
      ]
    },
    {
      "ref": "dead.thooft-naturalness-lambda",
      "kind": "mechanism",
      "source_id": "corpus.peer-review-cross-exam",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Proposed protection: 't Hooft technical naturalness for the tiny coupling lambda ~ 10^-44 via an approximate shift symmetry rho -> rho + c protects the radion mass against the trace-anomaly coupling."
    },
    {
      "ref": "ev.dead.gisin-polchinski-signaling",
      "kind": "computation",
      "source_id": "corpus.peer-review-cross-exam",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Evidence for the withdrawal of \"dead.gisin-polchinski-signaling\": Gisin-Polchinski applies to nonlinear modifications of the Schrodinger evolution itself; matter in the framework evolves under standard linear quantum mechanics, so the no-signaling theorem guarantees the locally-defined F_Q is invariant under distant operations. No causality violation arises.",
      "checking_records": [
        {
          "checker_id": "checker:self",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.gisin-polchinski-signaling\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "self",
          "footprint": [
            "corpus.peer-review-cross-exam",
            "corpus.radion-stability-audit",
            "corpus.peer-review"
          ],
          "cited_source": "corpus.peer-review-cross-exam"
        }
      ]
    },
    {
      "ref": "dead.gisin-polchinski-signaling",
      "kind": "mechanism",
      "source_id": "corpus.peer-review-cross-exam",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Proposed failure mode: the state-dependent coupling v(F_Q) permits Gisin-Polchinski-type superluminal signaling, threatening causality (raised against the construction)."
    },
    {
      "ref": "ev.dead.naive-kk-tower-sum",
      "kind": "computation",
      "source_id": "corpus.radion-stability-audit",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"dead.naive-kk-tower-sum\": The rigid-cutoff sum is an artifact of omitting holographic counterterms; the correctly holographically-regularized Casimir computation instead yields delta-lambda ~ 10^-60.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.naive-kk-tower-sum\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.radion-stability-audit"
          ],
          "cited_source": "corpus.radion-stability-audit"
        }
      ]
    },
    {
      "ref": "dead.naive-kk-tower-sum",
      "kind": "mechanism",
      "source_id": "corpus.radion-stability-audit",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Proposed computation: a naive additive sum over the KK tower with a rigid momentum cutoff gives the radiative correction delta-lambda ~ 10^-35 to the radion self-coupling."
    },
    {
      "ref": "ev.dead.gzk-species-scale",
      "kind": "computation",
      "source_id": "corpus.anomaly-audit",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"dead.gzk-species-scale\": The Species Scale modifies only the gravitational UV cutoff; photopion production is a Standard Model QCD process. K4 (purely gravitational framework) and T2.7 (conformal invariance) jointly forbid any geometric channel from modifying gauge-sector cross sections. The anomaly is outside the framework's domain.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.gzk-species-scale\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.anomaly-audit"
          ],
          "cited_source": "corpus.anomaly-audit"
        }
      ]
    },
    {
      "ref": "dead.gzk-species-scale",
      "kind": "mechanism",
      "source_id": "corpus.anomaly-audit",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Proposed mechanism: sliding of the framework's Species Scale explains the observed GZK-violating ultra-high-energy cosmic ray events (e.g. the Amaterasu particle)."
    },
    {
      "ref": "ev.dead.ams02-kk-exhaust",
      "kind": "computation",
      "source_id": "corpus.anomaly-audit",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"dead.ams02-kk-exhaust\": The KK exhaust channel exports energy from the brane into the bulk as massive spin-2 dark radiation; the exhaust direction is strictly away from the brane, so no brane-localized positron source is generated.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.ams02-kk-exhaust\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.anomaly-audit"
          ],
          "cited_source": "corpus.anomaly-audit"
        }
      ]
    },
    {
      "ref": "dead.ams02-kk-exhaust",
      "kind": "mechanism",
      "source_id": "corpus.anomaly-audit",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Proposed mechanism: the framework's KK thermal-exhaust channel sources the AMS-02 cosmic-ray positron excess."
    },
    {
      "ref": "ev.dead.nanograv-geometric-condensation",
      "kind": "computation",
      "source_id": "corpus.anomaly-audit",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"dead.nanograv-geometric-condensation\": The peak GW frequency from a first-order transition at T_* ~ 10^7 GeV falls at f_0 ~ 1 Hz (the LIGO/ET band), while the nanohertz band corresponds to transitions at T ~ MeV to GeV; additionally, the framework's own topological-phase percolation is instantaneous, suppressing bubble-collision GW production.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.nanograv-geometric-condensation\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.anomaly-audit"
          ],
          "cited_source": "corpus.anomaly-audit"
        }
      ]
    },
    {
      "ref": "dead.nanograv-geometric-condensation",
      "kind": "mechanism",
      "source_id": "corpus.anomaly-audit",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Proposed mechanism: a first-order geometric condensation phase transition at T_RH ~ 10^7 GeV sources the NANOGrav nanohertz stochastic gravitational-wave background."
    },
    {
      "ref": "ev.dead.fqhe-so14-topology",
      "kind": "computation",
      "source_id": "corpus.anomaly-audit",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"dead.fqhe-so14-topology\": No mechanism is specified for the claimed mapping; the assertion contains no derivation connecting FQHE topological invariants to the geometric-condensation construction.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.fqhe-so14-topology\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.anomaly-audit"
          ],
          "cited_source": "corpus.anomaly-audit"
        }
      ]
    },
    {
      "ref": "dead.fqhe-so14-topology",
      "kind": "mechanism",
      "source_id": "corpus.anomaly-audit",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Proposed identification: fractional topological invariants observed in the fractional quantum Hall effect map directly to the framework's SO(1,4) geometric-condensation process."
    },
    {
      "ref": "ev.dead.planckian-dissipation-vev",
      "kind": "computation",
      "source_id": "corpus.anomaly-audit",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"dead.planckian-dissipation-vev\": The framework preserves the KSS viscosity bound (F15), which is related to Planckian dissipation, but no derivation connects v(F_Q) to the universal scattering rate 1/tau = k_B T/hbar; the claim is suggestive at most and unwarranted as a contract without a derivation.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.planckian-dissipation-vev\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.anomaly-audit"
          ],
          "cited_source": "corpus.anomaly-audit"
        }
      ]
    },
    {
      "ref": "dead.planckian-dissipation-vev",
      "kind": "mechanism",
      "source_id": "corpus.anomaly-audit",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Proposed mechanism: the state-dependent VEV v(F_Q) directly sources the universal Planckian-dissipation scattering rate observed in strange metals."
    },
    {
      "ref": "ev.dead.hehl-datta-nuclear",
      "kind": "computation",
      "source_id": "corpus.gemini-deep-research-report-1-gravitational-tunneling-enhanc",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"dead.hehl-datta-nuclear\": G_N^2 ~ 10^-76 GeV^-4 suppression is too brutal; even with M_Pl,eff = 10^14 GeV and N^2 coherent amplification at nuclear density, U_T ~ 10^-3 eV, 8 orders of magnitude below the 100 keV target.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.hehl-datta-nuclear\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.gemini-deep-research-report-1-gravitational-tunneling-enhanc"
          ],
          "cited_source": "corpus.gemini-deep-research-report-1-gravitational-tunneling-enhanc"
        }
      ]
    },
    {
      "ref": "dead.hehl-datta-nuclear",
      "kind": "mechanism",
      "source_id": "corpus.gemini-deep-research-report-1-gravitational-tunneling-enhanc",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Proposed mechanism: a Hehl-Datta four-fermion contact interaction, amplified by the framework's coherent-matter coupling, produces the nuclear-scale Gamow screening enhancement needed for F21."
    },
    {
      "ref": "ev.dead.radion-yukawa-nuclear",
      "kind": "computation",
      "source_id": "corpus.gemini-deep-research-report-1-gravitational-tunneling-enhanc",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"dead.radion-yukawa-nuclear\": Tree-level scalar exchange gives V(1 fm) ~ 10^-8 MeV at M_Pl,eff = 10^14 GeV; reaching the 100 keV target would require M_Pl,eff ~ 12.6 GeV (electroweak scale), 13 orders of magnitude from the physical value.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.radion-yukawa-nuclear\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.gemini-deep-research-report-1-gravitational-tunneling-enhanc"
          ],
          "cited_source": "corpus.gemini-deep-research-report-1-gravitational-tunneling-enhanc"
        }
      ]
    },
    {
      "ref": "dead.radion-yukawa-nuclear",
      "kind": "mechanism",
      "source_id": "corpus.gemini-deep-research-report-1-gravitational-tunneling-enhanc",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Proposed mechanism: tree-level radion-mediated Yukawa exchange produces the nuclear-scale Gamow screening enhancement needed for F21."
    },
    {
      "ref": "ev.dead.add-kk-graviton-coulomb",
      "kind": "computation",
      "source_id": "corpus.gemini-deep-research-report-1-gravitational-tunneling-enhanc",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"dead.add-kk-graviton-coulomb\": Summed KK-tower exchange at r = 1 fm with R_Dark = 10 micron gives V_KK ~ 2e-16 MeV, 15 orders of magnitude below the 100 keV target.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.add-kk-graviton-coulomb\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.gemini-deep-research-report-1-gravitational-tunneling-enhanc"
          ],
          "cited_source": "corpus.gemini-deep-research-report-1-gravitational-tunneling-enhanc"
        }
      ]
    },
    {
      "ref": "dead.add-kk-graviton-coulomb",
      "kind": "mechanism",
      "source_id": "corpus.gemini-deep-research-report-1-gravitational-tunneling-enhanc",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Proposed mechanism: an ADD-style summed extra-dimensional KK-graviton Coulomb modification produces the nuclear-scale Gamow screening enhancement needed for F21."
    },
    {
      "ref": "ev.dead.torsion-dirac-axial",
      "kind": "computation",
      "source_id": "corpus.gemini-deep-research-report-1-gravitational-tunneling-enhanc",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"dead.torsion-dirac-axial\": The mechanism is mathematically homologous to the Hehl-Datta channel with the same G_N scaling, and comes out 8 orders of magnitude below the target.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.torsion-dirac-axial\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.gemini-deep-research-report-1-gravitational-tunneling-enhanc"
          ],
          "cited_source": "corpus.gemini-deep-research-report-1-gravitational-tunneling-enhanc"
        }
      ]
    },
    {
      "ref": "dead.torsion-dirac-axial",
      "kind": "mechanism",
      "source_id": "corpus.gemini-deep-research-report-1-gravitational-tunneling-enhanc",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Proposed mechanism: a torsion-induced axial potential in the Dirac equation produces the nuclear-scale Gamow screening enhancement needed for F21."
    },
    {
      "ref": "ev.dead.radion-bcs-pairing",
      "kind": "computation",
      "source_id": "corpus.gemini-deep-research-report-2-geometric-phases-ponderomotive",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"dead.radion-bcs-pairing\": N(E_F) V_pair ~ 10^-38; the resulting gap is proportional to exp(-10^38), indistinguishable from zero, a 38-order-of-magnitude failure in the exponent.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.radion-bcs-pairing\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.gemini-deep-research-report-2-geometric-phases-ponderomotive"
          ],
          "cited_source": "corpus.gemini-deep-research-report-2-geometric-phases-ponderomotive"
        }
      ]
    },
    {
      "ref": "dead.radion-bcs-pairing",
      "kind": "mechanism",
      "source_id": "corpus.gemini-deep-research-report-2-geometric-phases-ponderomotive",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Proposed mechanism: a radion-mediated BCS-style pairing gap produces the nuclear-scale Gamow screening enhancement needed for F21."
    },
    {
      "ref": "ev.dead.dicke-superradiant-gap",
      "kind": "computation",
      "source_id": "corpus.gemini-deep-research-report-2-geometric-phases-ponderomotive",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"dead.dicke-superradiant-gap\": The single-mode Dicke condition requires all N particles to couple symmetrically to one bosonic mode; the radion Compton wavelength (~197 fm) gives a coherence volume containing only N_lambda ~ 10^6 nucleons, and the gap at that physical N_lambda is ~1e-20 eV, violating the single-mode condition by 51 orders of magnitude.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.dicke-superradiant-gap\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.gemini-deep-research-report-2-geometric-phases-ponderomotive"
          ],
          "cited_source": "corpus.gemini-deep-research-report-2-geometric-phases-ponderomotive"
        }
      ]
    },
    {
      "ref": "dead.dicke-superradiant-gap",
      "kind": "mechanism",
      "source_id": "corpus.gemini-deep-research-report-2-geometric-phases-ponderomotive",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Proposed mechanism: a Dicke superradiant enhancement across N ~ 10^57 nucleons produces the nuclear-scale Gamow screening enhancement needed for F21."
    },
    {
      "ref": "ev.dead.species-scale-qcd",
      "kind": "computation",
      "source_id": "corpus.gemini-deep-research-report-1-gravitational-tunneling-enhanc",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"dead.species-scale-qcd\": The radion couples to the trace anomaly via <T^mu_mu> proportional to beta(alpha_s) G^a_{mu nu}G^{a mu nu}, requiring 0.2% precision tuning of alpha_s; a uniform modification at that precision would unbind nuclear matter via photodisintegration, and no mathematical protection against this runaway exists.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.species-scale-qcd\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.gemini-deep-research-report-1-gravitational-tunneling-enhanc"
          ],
          "cited_source": "corpus.gemini-deep-research-report-1-gravitational-tunneling-enhanc"
        }
      ]
    },
    {
      "ref": "dead.species-scale-qcd",
      "kind": "mechanism",
      "source_id": "corpus.gemini-deep-research-report-1-gravitational-tunneling-enhanc",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Proposed mechanism: Species-Scale modification of the running QCD coupling produces the nuclear-scale Gamow screening enhancement needed for F21."
    },
    {
      "ref": "ev.dead.li7-coherence-pump",
      "kind": "computation",
      "source_id": "corpus.li-7-red-team",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"dead.li7-coherence-pump\": Triple-axis kill. (1) Thermal incoherence: the BBN plasma at T ~ 50 keV is maximally mixed (f~0); 8.65 MeV alpha particles undergo immediate broadband Coulomb scattering, saturating the ~0.2 ps KK scrambling time and pinning the QFI at the standard quantum limit. (2) Abundance starvation: during the active BBN window, ~97% of mass-7 is locked as undecayed ^7Be (half-life ~53 days), leaving in-situ ^7Li fuel too scarce for the required reaction density. (3) The primordial plasma has no crystalline lattice, no acoustic deformation potential, and no interstitial sublattice; the radion catalysis mechanism has no mechanical substrate.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.li7-coherence-pump\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.li-7-red-team",
            "corpus.nuclear-astrophysics-anomalies"
          ],
          "cited_source": "corpus.li-7-red-team"
        }
      ]
    },
    {
      "ref": "dead.li7-coherence-pump",
      "kind": "mechanism",
      "source_id": "corpus.li-7-red-team",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Proposed mechanism: a cosmological lithium coherence pump via ^7Li(p,alpha)^4He resolves the primordial Li-7 abundance anomaly (targeting the Li-7 deficit)."
    },
    {
      "ref": "ev.dead.be7-coherence-pump",
      "kind": "computation",
      "source_id": "corpus.li-7-red-team",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"dead.be7-coherence-pump\": The (n,p) reaction produces a two-body final state of distinguishable fermions (spin-1/2 proton, spin-3/2 ^7Li) with extreme mass asymmetry; Bose enhancement, required for a coherent standing wave, is forbidden for fermions, and the mismatched kinetic-energy partition (~1.43 MeV proton vs ~0.21 MeV ^7Li) produces drastically mismatched de Broglie wavelengths, so chaotic thermalization saturates the KK scrambling time and the QFI remains at the standard quantum limit.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.be7-coherence-pump\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.li-7-red-team",
            "corpus.nuclear-astrophysics-anomalies"
          ],
          "cited_source": "corpus.li-7-red-team"
        }
      ]
    },
    {
      "ref": "dead.be7-coherence-pump",
      "kind": "mechanism",
      "source_id": "corpus.li-7-red-team",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Proposed mechanism: a cosmological beryllium coherence pump pivoting on ^7Be(n,p)^7Li resolves the primordial Li-7 abundance anomaly (targeting the Li-7 deficit)."
    },
    {
      "ref": "ev.dead.radion-be7-electron-capture",
      "kind": "computation",
      "source_id": "corpus.li-7-red-team",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"dead.radion-be7-electron-capture\": The ^7Be electron-capture rate is governed by the weak interaction and electromagnetic Coulomb attraction; K4 (purely gravitational framework) and T2.7 (conformal invariance of the 4D Maxwell action) structurally forbid the radion from modifying tree-level electroweak cross sections. The trace-anomaly coupling provides thermodynamic exhaust, not a fundamental force modification.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.radion-be7-electron-capture\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.li-7-red-team",
            "corpus.nuclear-astrophysics-anomalies"
          ],
          "cited_source": "corpus.li-7-red-team"
        }
      ]
    },
    {
      "ref": "dead.radion-be7-electron-capture",
      "kind": "mechanism",
      "source_id": "corpus.li-7-red-team",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Proposed mechanism: radion-mediated modification of the ^7Be electron-capture rate resolves the primordial Li-7 abundance anomaly (targeting the Li-7 deficit)."
    },
    {
      "ref": "ev.dead.sn2024afav-geff",
      "kind": "computation",
      "source_id": "corpus.hydrodynamic-swampland-bounds-v3",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Evidence for the withdrawal of \"dead.sn2024afav-geff\": This is the already-killed G_eff amplification mechanism applied to a new observational context; K2 (the gravitational constant is never amplified, modified, or state-dependent) and K16 (G_N is fixed, only Lambda_s runs) both forbid it. The torsion-mediated traceless-channel torque on the accretion disk from coherent nuclear pasta survives as a live mechanism; the trace-channel G_eff runaway feedback loop specifically is dead, and derivative documents describing it must be corrected.",
      "checking_records": [
        {
          "checker_id": "checker:self",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.sn2024afav-geff\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "self",
          "footprint": [
            "corpus.hydrodynamic-swampland-bounds-v3"
          ],
          "cited_source": "corpus.hydrodynamic-swampland-bounds-v3"
        }
      ]
    },
    {
      "ref": "dead.sn2024afav-geff",
      "kind": "mechanism",
      "source_id": "corpus.hydrodynamic-swampland-bounds-v3",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Proposed mechanism: dynamically amplified local gravity (a G_eff amplification) in the SN 2024afav accretion disk explains its anomalous chirp signature."
    },
    {
      "ref": "ev.dead.hyper-kondo-superconductivity",
      "kind": "computation",
      "source_id": "corpus.heavy-fermion-stress-test",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"dead.hyper-kondo-superconductivity\": Superfluid stiffness collapse: rho_s(0) = hbar^2 n_s/(4 m*); at the effective mass m* ~ 1000 m_e required for radion activation per C13d, the BKT transition temperature approaches zero. Phase stiffness and radion activation are structurally antagonistic in this channel.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.hyper-kondo-superconductivity\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.heavy-fermion-stress-test"
          ],
          "cited_source": "corpus.heavy-fermion-stress-test"
        }
      ]
    },
    {
      "ref": "dead.hyper-kondo-superconductivity",
      "kind": "mechanism",
      "source_id": "corpus.heavy-fermion-stress-test",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Proposed mechanism: a Hyper-Kondo heavy-fermion pathway (via lanthanide doping) enables radion-assisted room-temperature superconductivity."
    },
    {
      "ref": "ev.dead.light-carrier-qfi-superconductivity",
      "kind": "computation",
      "source_id": "corpus.gemini-cc-radiative-stability-april-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"dead.light-carrier-qfi-superconductivity\": The QFI of the BCS ground state with respect to T^mu_mu scales O(N) by Wick factorization across k-modes; for YBCO, f_Q^BCS ~ 3.1e-28 GeV^8, a 57-order-of-magnitude deficit against the K7 activation threshold. The trace-anomaly coupling channel is K4-compliant but numerically negligible.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.light-carrier-qfi-superconductivity\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.gemini-cc-radiative-stability-april-2026",
            "corpus.gemini-cc-run-2-april-2026",
            "corpus.gemini-cc-run-1-april-2026"
          ],
          "cited_source": "corpus.gemini-cc-radiative-stability-april-2026"
        }
      ]
    },
    {
      "ref": "dead.light-carrier-qfi-superconductivity",
      "kind": "mechanism",
      "source_id": "corpus.gemini-cc-radiative-stability-april-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Proposed mechanism: a light-carrier QFI pathway enables radion-assisted room-temperature superconductivity."
    },
    {
      "ref": "ev.dead.dynamic-ts-elevation",
      "kind": "computation",
      "source_id": "corpus.gemini-cc-radiative-stability-april-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"dead.dynamic-ts-elevation\": m_KK is a global bulk parameter set by R_Dark (K16); local VEV suppression changes the brane geometry but not R_Dark, so t_s = hbar/m_KK is fixed. If local VEV suppression affected brane geometry at all, it would lengthen t_s (the brane descends to larger z_0, giving smaller m_KK), the opposite of the intended effect.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.dynamic-ts-elevation\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.gemini-cc-radiative-stability-april-2026",
            "corpus.gemini-cc-run-2-april-2026",
            "corpus.gemini-cc-run-1-april-2026"
          ],
          "cited_source": "corpus.gemini-cc-radiative-stability-april-2026"
        }
      ]
    },
    {
      "ref": "dead.dynamic-ts-elevation",
      "kind": "mechanism",
      "source_id": "corpus.gemini-cc-radiative-stability-april-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Proposed mechanism: dynamic elevation of the KK scrambling time t_s via local VEV suppression enables radion-assisted room-temperature superconductivity."
    },
    {
      "ref": "ev.dead.self-bootstrap-superconductivity",
      "kind": "computation",
      "source_id": "corpus.gemini-cc-radiative-stability-april-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"dead.self-bootstrap-superconductivity\": Near T_c the coherent fraction f approaches zero; the two-fluid QFI F_Q = f^2 N^2 + (1-f)N collapses to O(N). A fluctuating condensate cannot satisfy the requirements of a coherent driver or a zero-entropy exhaust pathway.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.self-bootstrap-superconductivity\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.gemini-cc-radiative-stability-april-2026",
            "corpus.gemini-cc-run-2-april-2026",
            "corpus.gemini-cc-run-1-april-2026"
          ],
          "cited_source": "corpus.gemini-cc-radiative-stability-april-2026"
        }
      ]
    },
    {
      "ref": "dead.self-bootstrap-superconductivity",
      "kind": "mechanism",
      "source_id": "corpus.gemini-cc-radiative-stability-april-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Proposed mechanism: a self-driven coherence bootstrap enables radion-assisted room-temperature superconductivity near T_c."
    },
    {
      "ref": "ev.dead.radion-superconductivity-summary",
      "kind": "computation",
      "source_id": "corpus.heavy-fermion-stress-test",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"dead.radion-superconductivity-summary\": Summary kill across all pathways: (1) Hyper-Kondo kills phase stiffness. (2) Light carriers lack QFI by 57 orders of magnitude. (3) Dynamic t_s elevation runs inverted. (4) Self-bootstrap fails near T_c. (5) At 300 K, Planckian dissipation (~0.025 ps) outpaces the fixed exhaust time (~0.2 ps).",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.radion-superconductivity-summary\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.heavy-fermion-stress-test"
          ],
          "cited_source": "corpus.heavy-fermion-stress-test"
        }
      ]
    },
    {
      "ref": "dead.radion-superconductivity-summary",
      "kind": "mechanism",
      "source_id": "corpus.heavy-fermion-stress-test",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Proposed mechanism: radion-mediated room-temperature superconductivity, taken across all examined pathways collectively."
    },
    {
      "ref": "ev.dead.vev-amplification-coherence",
      "kind": "computation",
      "source_id": "corpus.gemini-cc-radiative-stability-april-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"dead.vev-amplification-coherence\": F_Q is positive-definite (Bures metric); the VEV shift v^2_eff = v_0^2 - (gamma/lambda) F_Q is strictly subtractive. No physical state amplifies the VEV above v_0.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.vev-amplification-coherence\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.gemini-cc-radiative-stability-april-2026",
            "corpus.gemini-cc-run-2-april-2026",
            "corpus.gemini-cc-run-1-april-2026"
          ],
          "cited_source": "corpus.gemini-cc-radiative-stability-april-2026"
        }
      ]
    },
    {
      "ref": "dead.vev-amplification-coherence",
      "kind": "mechanism",
      "source_id": "corpus.gemini-cc-radiative-stability-april-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Proposed mechanism: quantum coherence amplifies the vacuum expectation value above its bare value v_0 via the F_Q coupling."
    },
    {
      "ref": "ev.dead.cdw-bosonic-gateway",
      "kind": "computation",
      "source_id": "corpus.cdw-qfi-audit-march-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"dead.cdw-bosonic-gateway\": The CDW ground state is an equilibrium symmetry-broken state with Poissonian/binomial number statistics; Var(T^mu_mu) scales O(N) by the fluctuation-dissipation theorem and area-law entanglement. CDW QFI density ~3.25e-40 GeV^8, a 69-order-of-magnitude deficit against K7. This kill applies to all equilibrium bosonic orders (CDW, SDW, structural distortion) proposed as gateways; the barrier is thermodynamic extensivity itself.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.cdw-bosonic-gateway\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.cdw-qfi-audit-march-2026"
          ],
          "cited_source": "corpus.cdw-qfi-audit-march-2026"
        }
      ]
    },
    {
      "ref": "dead.cdw-bosonic-gateway",
      "kind": "mechanism",
      "source_id": "corpus.cdw-qfi-audit-march-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Proposed mechanism: a charge-density-wave bosonic gateway provides sufficient VEV suppression to enable coherent-matter geometric effects."
    },
    {
      "ref": "ev.dead.f24-kagome-athe",
      "kind": "computation",
      "source_id": "corpus.bosonic-gateway-audit-march-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"dead.f24-kagome-athe\": Two-stage kill. (1) Ambient-VEV torsion from chiral Cooper-pair hypermomentum is 49 orders of magnitude too weak (Planck suppression). (2) The VEV suppression required to amplify torsion has no equilibrium condensed-matter state achieving the K7 threshold (69-order-of-magnitude deficit, per the CDW gateway kill). The chiral-hypermomentum selection rule (SO-SC2) survives as a qualitative structural observation only.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.f24-kagome-athe\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.bosonic-gateway-audit-march-2026"
          ],
          "cited_source": "corpus.bosonic-gateway-audit-march-2026"
        }
      ]
    },
    {
      "ref": "dead.f24-kagome-athe",
      "kind": "mechanism",
      "source_id": "corpus.bosonic-gateway-audit-march-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Proposed mechanism: geometric torsion in a Kagome-lattice system produces the F24 anomalous thermal Hall effect (ATHE)."
    },
    {
      "ref": "ev.dead.coherent-state-n2-variance",
      "kind": "computation",
      "source_id": "corpus.cdw-qfi-audit-march-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"dead.coherent-state-n2-variance\": A Glauber coherent state |alpha> with <n> = N has Var(n_hat) = N (Poissonian): a general result of quantum statistics. N^2 scaling requires phase estimation with maximally entangled states (GHZ/NOON), not number/energy estimation with coherent states; the claim conflates the two.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.coherent-state-n2-variance\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.cdw-qfi-audit-march-2026"
          ],
          "cited_source": "corpus.cdw-qfi-audit-march-2026"
        }
      ]
    },
    {
      "ref": "dead.coherent-state-n2-variance",
      "kind": "mechanism",
      "source_id": "corpus.cdw-qfi-audit-march-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Proposed mechanism: N bosons occupying a single coherent mode produce O(N^2) variance for number/energy-like operators, supplying the super-extensive QFI scaling the framework's activation threshold requires."
    },
    {
      "ref": "ev.dead.edge-mode-l4-scaling",
      "kind": "computation",
      "source_id": "corpus.edge-mode-numerics-march-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Evidence for the withdrawal of \"dead.edge-mode-l4-scaling\": 2D lattice BdG and free-boson computations both give C_E ~ L^1.0 to L^1.3 (an area law). Phase rigidity correlates the mean phase across the boundary but fluctuations at different boundary points remain independent; GHZ-like N^2 scaling requires all edge modes to fluctuate in lockstep, which ODLRO's correlated means do not provide.",
      "checking_records": [
        {
          "checker_id": "checker:self",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.edge-mode-l4-scaling\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "self",
          "footprint": [
            "corpus.edge-mode-numerics-march-2026"
          ],
          "cited_source": "corpus.edge-mode-numerics-march-2026"
        }
      ]
    },
    {
      "ref": "dead.edge-mode-l4-scaling",
      "kind": "mechanism",
      "source_id": "corpus.edge-mode-numerics-march-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Proposed mechanism: collective edge-mode phase rigidity from off-diagonal long-range order (ODLRO) produces (L/epsilon)^4 super-extensive scaling of the boundary correlation C_E."
    },
    {
      "ref": "ev.dead.lagrangian-uniqueness",
      "kind": "computation",
      "source_id": "corpus.gemini-coupling-uniqueness-audit-april-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"dead.lagrangian-uniqueness\": The a_4 Seeley-DeWitt coefficient generates three independent competing operators at the same effective mass dimension 6 (eta_AB phi^A phi^B T^mu_mu; eta_AB phi^A phi^B C_{mu nu rho sigma}C^{mu nu rho sigma}; eta_AB phi^A phi^B Tr(F_{mu nu}F^{mu nu})); Lagrangian uniqueness is false as a matter of standard heat-kernel theory for any matter content, and the thermodynamic-dominance formulation replaces the uniqueness claim entirely.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.lagrangian-uniqueness\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.gemini-coupling-uniqueness-audit-april-2026"
          ],
          "cited_source": "corpus.gemini-coupling-uniqueness-audit-april-2026"
        }
      ]
    },
    {
      "ref": "dead.lagrangian-uniqueness",
      "kind": "mechanism",
      "source_id": "corpus.gemini-coupling-uniqueness-audit-april-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Proposed uniqueness claim: gamma(eta_AB phi^A phi^B) f_Q is the unique lowest-dimension SO(1,4)-invariant operator generated at one loop by the coherent-matter coupling."
    },
    {
      "ref": "ev.dead.er-q01-gauge-kk-species-lowering",
      "kind": "computation",
      "source_id": "corpus.dg-cft-053",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"dead.er-q01-gauge-kk-species-lowering\": The correct gamma derivation (Paper 0 v10 Section IV.D, SF-D0) shows gamma already carries the 1/Lambda_s^2 suppression via the KK heat-kernel spectral trace; the 'two species counts' of v4.5 (one in gamma, one in f_Q,crit) collapse to one count double-counted. The v4.7 gamma derivation reaches phenomenological survival with a better margin (f_Q,crit at 10^12-10^13, 15 orders better) without an independent species-lowering step. The gauge KK tower on dP_3 remains relevant for GUT precision physics (K8, K10, K11, K14) but does not provide an independent species-lowering mechanism for f_Q,crit as v4.5 claimed.",
      "checking_records": [
        {
          "checker_id": "checker:chatgpt-arb",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.er-q01-gauge-kk-species-lowering\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.dg-cft-053",
            "corpus.dg-cft-052",
            "corpus.dg-cft-051"
          ],
          "cited_source": "corpus.dg-cft-053"
        }
      ]
    },
    {
      "ref": "dead.er-q01-gauge-kk-species-lowering",
      "kind": "mechanism",
      "source_id": "corpus.dg-cft-053",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "ER-Q-01: proposed mechanism that the Pati-Salam gauge KK tower on dP_3 provides an independent species count (10^2 to 10^4 brane-localized vector-boson species) lowering f_Q,crit from 10^32 to 10^28-10^30 GeV^4 at the pole threshold, resolving OP-0."
    },
    {
      "ref": "ev.dead.er-cc001-gamma-z0-stabilization",
      "kind": "computation",
      "source_id": "corpus.gemini-cc-run-1-april-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"dead.er-cc001-gamma-z0-stabilization\": Two independent algebraic computations (Gemini CC Derivation Reports Run 1 and Run 2) show the (L/z_0)^4 measure factor combined with gamma(z_0) proportional to z_0^2 gives V_eff^phys proportional to z_0^-2 after phi-extremization; the z_0-gradient is strictly negative for all physical states, so the brane runs to the IR horizon (m_KK -> 0, Lambda_s -> 0, decompactification) rather than stabilizing. Block scope: any mechanism relying on the gamma(z_0) inheritance alone to stabilize the Karch-Randall radion is dead; combined mechanisms remain open as separate sorries.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.er-cc001-gamma-z0-stabilization\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.gemini-cc-run-1-april-2026"
          ],
          "cited_source": "corpus.gemini-cc-run-1-april-2026"
        }
      ]
    },
    {
      "ref": "dead.er-cc001-gamma-z0-stabilization",
      "kind": "mechanism",
      "source_id": "corpus.gemini-cc-run-1-april-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "ER-CC-001: proposed mechanism that species-enhanced gamma(z_0) inheritance stabilizes the Karch-Randall brane radial position at a well, deriving the brane position and Dark Dimension scale from first principles."
    },
    {
      "ref": "ev.dead.er-cc002-goldberger-wise",
      "kind": "computation",
      "source_id": "corpus.gemini-cc-run-1-april-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"dead.er-cc002-goldberger-wise\": Killed by both Gemini CC Derivation reports and by independent structural argument: a propagating bulk scalar with kinetic terms violates the framework's Tier 4 commitment to a topological SO(2,4) Chern-Simons bulk with zero local degrees of freedom, destroying the topological purity that underwrites Israel junction protections, boundary induction, and ghost exclusion. Block scope: any mechanism relying on a propagating bulk scalar field with kinetic terms is forbidden by the topological-bulk axiom.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.er-cc002-goldberger-wise\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.gemini-cc-run-1-april-2026"
          ],
          "cited_source": "corpus.gemini-cc-run-1-april-2026"
        }
      ]
    },
    {
      "ref": "dead.er-cc002-goldberger-wise",
      "kind": "mechanism",
      "source_id": "corpus.gemini-cc-run-1-april-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "ER-CC-002: proposed mechanism that a Goldberger-Wise bulk scalar stabilizes the Karch-Randall brane radial position, the canonical Randall-Sundrum-style radion-stabilization mechanism."
    },
    {
      "ref": "ev.dead.er-cc003-shift-symmetry-protection",
      "kind": "computation",
      "source_id": "corpus.gemini-cc-radiative-stability-april-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"dead.er-cc003-shift-symmetry-protection\": The gamma(phi^A phi_A) F_Q coupling is polynomial in phi = v + rho and explicitly breaks the discrete shift symmetry at tree level; the framework cannot rely on shift-symmetry protection. The kill is offset by a stronger surviving result: kinematic suppression via the trans-Planckian VEV (K18) provides protection without requiring the shift symmetry, with the barrier height overwhelming the aperiodic CW slope by 16 orders of magnitude. The kill of symmetry-protection is not a kill of the AM mechanism itself.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.er-cc003-shift-symmetry-protection\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.gemini-cc-radiative-stability-april-2026",
            "corpus.gemini-cc-run-2-april-2026",
            "corpus.gemini-cc-run-1-april-2026"
          ],
          "cited_source": "corpus.gemini-cc-radiative-stability-april-2026"
        }
      ]
    },
    {
      "ref": "dead.er-cc003-shift-symmetry-protection",
      "kind": "mechanism",
      "source_id": "corpus.gemini-cc-radiative-stability-april-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "ER-CC-003: proposed protection mechanism that a discrete shift symmetry rho -> rho + 2pi/(c Y_MM) protects the AM potential's periodic structure against radiative degradation, analogous to Peccei-Quinn axion protection."
    },
    {
      "ref": "ev.dead.er-mm001-antisymmetry-vanishing",
      "kind": "computation",
      "source_id": "corpus.gemini-dr-vi-rewrite-route-april-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"dead.er-mm001-antisymmetry-vanishing\": Two independent explicit algebraic computations (Gemini DR Section VI Rewrite Route and DeepSeek Cross-Examination) reproduce the same nonvanishing leading term in the bracket, driven by v and spatial curvature through the BF-type pre-symplectic structure. The cancellation argument conflates antisymmetry of the full bracket (automatic under simultaneous coordinate-plus-index swap) with a symmetric-index cancellation, which is not forced. Block scope (Point Block): the specific cancellation argument is dead; the 44x44 block structure must be treated as pseudo-differential, not ultra-local. Structural origin: the argument was imported from pure BF theory where the analogous bracket vanishes because B is an independent configuration variable; in MM, B is replaced by F(A), which activates the bracket through connection dependence.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.er-mm001-antisymmetry-vanishing\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.gemini-dr-vi-rewrite-route-april-2026",
            "corpus.addazi-capozziello-marciano-meluccio-2025b",
            "corpus.dirac-constraint-report"
          ],
          "cited_source": "corpus.gemini-dr-vi-rewrite-route-april-2026"
        }
      ]
    },
    {
      "ref": "dead.er-mm001-antisymmetry-vanishing",
      "kind": "mechanism",
      "source_id": "corpus.gemini-dr-vi-rewrite-route-april-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "ER-MM-001: proposed argument that antisymmetry of the Poisson bracket combined with index symmetry of Z^i_AB Z^j_CD forces {Z^i_AB(x), Z^j_CD(y)} to vanish identically, delivering an ultra-local 44x44 Dirac matrix amenable to pointwise Schur-complement factorization (Paper -1 Section VI D)."
    },
    {
      "ref": "ev.dead.er-mm002-local-algebraic-redefinition",
      "kind": "computation",
      "source_id": "corpus.chatgpt-track-a-no-go-april-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"dead.er-mm002-local-algebraic-redefinition\": The No-Go Lemma (ChatGPT Track A Construction, formalized in the Section VI obstruction lemma) shows that for local algebraic k, the four-term expansion reduces on the constraint surface to m{Z,Z}m^T with m = I + k; at the principal-symbol level local conjugation preserves operator order, so cancelling the derivative block would require m C^k m^T = 0, which for invertible m forces C^k = 0, contradicting ER-MM-001's established nonvanishing result. The only escapes are a singular m (not an admissible redefinition) or a non-local k (relocating rather than eliminating the non-locality). Structural origin (DeepSeek): the derivative index pattern is a spatial curl operator whose inverse is the non-local Biot-Savart kernel. Block scope (Class Block): any mechanism relying on local algebraic canonical transformations to achieve ultra-locality in the MM Dirac matrix is structurally obstructed.",
      "checking_records": [
        {
          "checker_id": "checker:chatgpt-arb",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.er-mm002-local-algebraic-redefinition\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.chatgpt-track-a-no-go-april-2026",
            "corpus.deepseek-track-a-construction-april-2026"
          ],
          "cited_source": "corpus.chatgpt-track-a-no-go-april-2026"
        }
      ]
    },
    {
      "ref": "dead.er-mm002-local-algebraic-redefinition",
      "kind": "mechanism",
      "source_id": "corpus.chatgpt-track-a-no-go-april-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "ER-MM-002: proposed rescue that an invertible local algebraic field redefinition Z-tilde = Z + k*Z (k a pointwise polynomial function of A, phi, F) absorbs the derivative block established by ER-MM-001, restoring the Dirac matrix to ultra-local form."
    },
    {
      "ref": "ev.dead.er-mm003-pointwise-schur",
      "kind": "computation",
      "source_id": "corpus.chatgpt-track-a-no-go-april-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"dead.er-mm003-pointwise-schur\": When the upper-left 30x30 block A is a first-order differential operator with A^-1 a non-local Green's function (the Biot-Savart kernel per ER-MM-002's structural origin), the Schur complement D - C A^-1 B is an integro-differential operator in coordinate space; its determinant is not a pointwise algebraic function of the fields, so the clean factorization cannot be recovered in coordinate space, only at the principal-symbol level in Fourier space. Block scope (Point Block): the pointwise determinant route specifically is obstructed; the operator-theoretic reformulation via principal symbol survives as a separate sorry.",
      "checking_records": [
        {
          "checker_id": "checker:chatgpt-arb",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.er-mm003-pointwise-schur\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.chatgpt-track-a-no-go-april-2026",
            "corpus.deepseek-track-a-construction-april-2026"
          ],
          "cited_source": "corpus.chatgpt-track-a-no-go-april-2026"
        }
      ]
    },
    {
      "ref": "dead.er-mm003-pointwise-schur",
      "kind": "mechanism",
      "source_id": "corpus.chatgpt-track-a-no-go-april-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "ER-MM-003: proposed rescue that a pointwise Schur-complement inversion of the full 44x44 Dirac matrix recovers the clean coordinate-space determinant factorization det Delta proportional to (det e)^k (v+rho)^m lambda^n, even with the derivative block treated honestly."
    },
    {
      "ref": "ev.dead.er-mix001-dbi-pi-chi-mixing",
      "kind": "computation",
      "source_id": "corpus.chatgpt-s-mix-001-computation-report-april-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"dead.er-mix001-dbi-pi-chi-mixing\": An explicit quadratic-action computation (ChatGPT S-MIX-001) shows sqrt(-g_ind) V_SSB(chi) generates chi^2, pi chi^2, pi^2 chi^2 terms but never a pi-chi bilinear; the DBI sector depends only on pi and the F_Q coupling only on chi, and the induced-metric matching is a kinematic identification, not a bilinear potential operator. Result: the tree-level mixing mass vanishes and the mixing angle is zero, so the effective F_Q-coupling threshold diverges. Block scope: any rescue requiring the radion's F_Q coupling to flow through the DBI brane-bending mode without an additional bilinear mixing source.",
      "checking_records": [
        {
          "checker_id": "checker:chatgpt-arb",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.er-mix001-dbi-pi-chi-mixing\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.chatgpt-s-mix-001-computation-report-april-2026",
            "corpus.chat-dirac-rescue-pdf-april-2026"
          ],
          "cited_source": "corpus.chatgpt-s-mix-001-computation-report-april-2026"
        }
      ]
    },
    {
      "ref": "dead.er-mix001-dbi-pi-chi-mixing",
      "kind": "mechanism",
      "source_id": "corpus.chatgpt-s-mix-001-computation-report-april-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "ER-MIX-001: proposed tree-level rescue that the DBI brane-bending mode pi mixes with the MM Higgs radial mode chi via the induced-metric matching condition, producing a physical radion inheriting both a healthy kinetic term from DBI and an F_Q coupling from chi."
    },
    {
      "ref": "ev.dead.er-mix002-einstein-cartan-torsion",
      "kind": "computation",
      "source_id": "corpus.chatgpt-s-mix-003-torsion-elimination-computation-april-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"dead.er-mix002-einstein-cartan-torsion\": An explicit Levi-Civita contraction (ChatGPT S-MIX-003) gives beta' a_1 = -(4/3) alpha m^2/(v+rho), negative under standard sign conventions, failing the criterion by sign; cross-checked by an independent contraction route with a consistent result. The pure F R(omega) Palatini/Einstein-Cartan elimination produces a ghost-like kinetic term in mostly-plus signature, the well-known Palatini scalar-tensor ghost. Block scope: any rescue asserting the radion kinetic term in MMSW gravity emerges from torsion-induced Einstein-Cartan reduction of pure F R(omega) coupling; the Weyl-rescaling route to the Einstein frame gives the correct healthy sign and is the proper mechanism.",
      "checking_records": [
        {
          "checker_id": "checker:chatgpt-arb",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.er-mix002-einstein-cartan-torsion\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.chatgpt-s-mix-003-torsion-elimination-computation-april-2026"
          ],
          "cited_source": "corpus.chatgpt-s-mix-003-torsion-elimination-computation-april-2026"
        }
      ]
    },
    {
      "ref": "dead.er-mix002-einstein-cartan-torsion",
      "kind": "mechanism",
      "source_id": "corpus.chatgpt-s-mix-003-torsion-elimination-computation-april-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "ER-MIX-002: proposed rescue that algebraic elimination of the contortion in the broken-phase MM action with non-minimal coupling F(rho)R(omega) and a torsion-squared term produces a healthy radion kinetic term via the standard scalar-tensor mechanism, satisfying beta' a_1 > 2/3."
    },
    {
      "ref": "ev.dead.er-mix003-naive-scalar-kinetic",
      "kind": "computation",
      "source_id": "corpus.langenscheidt-2019-arxiv-1907-10440",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"dead.er-mix003-naive-scalar-kinetic\": The construction (D phi)^dagger(D phi) wedge star_int(D tau wedge D tau) in MMSW evaluates, in standard gauge, to an expression antisymmetric in mu nu, so it vanishes identically as a symmetric Klein-Gordon kinetic term (Langenscheidt 2019 Section 4.2). The principled resolution is the first-order auxiliary-field formulation. Block scope: any MMSW or related gauge-theoretic gravity construction asserting a propagating scalar via a direct (D phi)^2 operator without auxiliary-field structure or an alternative principled mechanism.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.er-mix003-naive-scalar-kinetic\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.langenscheidt-2019-arxiv-1907-10440"
          ],
          "cited_source": "corpus.langenscheidt-2019-arxiv-1907-10440"
        }
      ]
    },
    {
      "ref": "dead.er-mix003-naive-scalar-kinetic",
      "kind": "mechanism",
      "source_id": "corpus.langenscheidt-2019-arxiv-1907-10440",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "ER-MIX-003: proposed construction that scalar kinetic terms in MMSW gravity can be written as standard Klein-Gordon operators (D phi)^dagger(D phi), with the absence of such a term in the original construction treated as mere notational convenience."
    },
    {
      "ref": "ev.dead.er-wd001-sub-chandra-wd-detonation",
      "kind": "computation",
      "source_id": "corpus.framework-scout-sub-chandrasekhar-type-ia-may-12-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"dead.er-wd001-sub-chandra-wd-detonation\": Two-crux kill. Crux A (FDT ceiling): white-dwarf interiors are DLRO Coulomb crystals and hydrodynamic shocks, not ODLRO substrates; F_Q is pinned to the O(N) baseline by the fluctuation-dissipation theorem, 15 orders of magnitude below the activation threshold. Crux B (pole-binary locality): even if microscopic ODLRO patches formed, antinodal activation at the C13c standing-wave geometry produces only a ~7e-5 active volume fraction per unit cell and cannot bootstrap to macroscopic detonation in the surrounding non-activated bulk. Block scope: any sub-Chandrasekhar Type Ia trigger mechanism routing through framework-internal geometric catalysis; sub-Chandra phenomenology remains handled by standard double-detonation astrophysics.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.er-wd001-sub-chandra-wd-detonation\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.framework-scout-sub-chandrasekhar-type-ia-may-12-2026",
            "corpus.quantum-crystal-ext"
          ],
          "cited_source": "corpus.framework-scout-sub-chandrasekhar-type-ia-may-12-2026"
        }
      ]
    },
    {
      "ref": "dead.er-wd001-sub-chandra-wd-detonation",
      "kind": "mechanism",
      "source_id": "corpus.framework-scout-sub-chandrasekhar-type-ia-may-12-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "ER-WD-001: proposed mechanism that the framework's coherent-matter geometric coupling triggers sub-Chandrasekhar Type Ia supernova detonation (helium-shell or analogous), supplementing or replacing the standard double-detonation channel."
    },
    {
      "ref": "ev.dead.er-cosm001-integrated-f-buildup",
      "kind": "computation",
      "source_id": "corpus.framework-scout-sub-chandrasekhar-type-ia-may-12-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"dead.er-cosm001-integrated-f-buildup\": Categorical error: classical structure formation produces DLRO density gradients and Bragg-peak ordering, not ODLRO long-range phase coherence of a complex order parameter. The coherence fraction f remains approximately zero at cosmological scales regardless of structure formation, so F_Q stays pinned to the extensive O(N) baseline by the fluctuation-dissipation theorem. Block scope: any cosmological mechanism conflating classical clustering with macroscopic ODLRO; codified into LINT-DLR-1.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.er-cosm001-integrated-f-buildup\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.framework-scout-sub-chandrasekhar-type-ia-may-12-2026",
            "corpus.quantum-crystal-ext"
          ],
          "cited_source": "corpus.framework-scout-sub-chandrasekhar-type-ia-may-12-2026"
        }
      ]
    },
    {
      "ref": "dead.er-cosm001-integrated-f-buildup",
      "kind": "mechanism",
      "source_id": "corpus.f12-reconciliation-scout-may-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "ER-COSM-001: proposed mechanism that the integrated coherence fraction f increases monotonically as cosmic structure forms, driving F_Q above the pole threshold and producing the F12 dark-energy thawing trajectory."
    },
    {
      "ref": "ev.dead.er-cosm002-trace-channel-gradient",
      "kind": "computation",
      "source_id": "corpus.framework-scout-sub-chandrasekhar-type-ia-may-12-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"dead.er-cosm002-trace-channel-gradient\": The AM kinematic-dominance bound (SL-AM-1) shows the trace channel, suppressed by the gravitational coupling (m/M_Pl)^2 ~ 10^-67, is dominated by the AM potential barrier height (~10^32 GeV^4) by ~10^99; the trace gradient cannot displace the radion from its discrete minimum. Block scope: any cosmological mechanism using an extensively-scaling O(N) operator to bridge AM topological barriers; only super-extensive O(N^2) operators sourced by ODLRO can engage the pole structure.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.er-cosm002-trace-channel-gradient\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.framework-scout-sub-chandrasekhar-type-ia-may-12-2026",
            "corpus.quantum-crystal-ext"
          ],
          "cited_source": "corpus.framework-scout-sub-chandrasekhar-type-ia-may-12-2026"
        }
      ]
    },
    {
      "ref": "dead.er-cosm002-trace-channel-gradient",
      "kind": "mechanism",
      "source_id": "corpus.f12-reconciliation-scout-may-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "ER-COSM-002: proposed mechanism that even with f approximately zero at cosmological scales, the O(N) trace channel produces a slow cosmological gradient sufficient to displace the radion from its discrete Lambda^(k) minimum, sourcing the F12 thawing trajectory."
    },
    {
      "ref": "ev.dead.er-cosm003-cosmological-averaging",
      "kind": "computation",
      "source_id": "corpus.framework-scout-sub-chandrasekhar-type-ia-may-12-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"dead.er-cosm003-cosmological-averaging\": ODLRO-supporting systems occupy ~10^-46 of the Hubble volume; macroscopic FLRW backreaction from such patches is identically zero to all practical orders. Predicted spatial inhomogeneities in w(z) correlated with structure environments are inconsistent with observational bounds, and F16 (Void Physics) already explains ISW-type local variations without invoking ODLRO patches. Block scope: any cosmological-averaging mechanism aggregating rare ODLRO domains into a cosmological-scale equation-of-state contribution.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.er-cosm003-cosmological-averaging\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.framework-scout-sub-chandrasekhar-type-ia-may-12-2026",
            "corpus.quantum-crystal-ext"
          ],
          "cited_source": "corpus.framework-scout-sub-chandrasekhar-type-ia-may-12-2026"
        }
      ]
    },
    {
      "ref": "dead.er-cosm003-cosmological-averaging",
      "kind": "mechanism",
      "source_id": "corpus.f12-reconciliation-scout-may-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "ER-COSM-003: proposed mechanism that cosmological averaging of rare ODLRO patch activations (e.g. in neutron-star superfluid cores) produces a non-trivial dark-energy w(z) trajectory via FLRW backreaction."
    },
    {
      "ref": "ev.dead.er-cosm004-intra-sector-slow-roll",
      "kind": "computation",
      "source_id": "corpus.framework-scout-sub-chandrasekhar-type-ia-may-12-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"dead.er-cosm004-intra-sector-slow-roll\": Slow-roll quintessence requires m ~ H_0 ~ 10^-33 eV; the framework's radion is bounded m_rho in [1 meV, 100 GeV] by F13.2 (LUNA phenomenology requires MeV-scale mass) and K8 (adiabatic stability against matter loops), with the framework selecting m_rho ~ 1 MeV. The ratio is at least 10^30, falsifying slow-roll by 30 orders of magnitude; an ad-hoc additional scalar field is forbidden by the S-MM-CR DOF count (conditional). Block scope: any cosmological mechanism introducing or repurposing a slow-rolling scalar at m ~ H_0.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.er-cosm004-intra-sector-slow-roll\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.framework-scout-sub-chandrasekhar-type-ia-may-12-2026",
            "corpus.quantum-crystal-ext"
          ],
          "cited_source": "corpus.framework-scout-sub-chandrasekhar-type-ia-may-12-2026"
        }
      ]
    },
    {
      "ref": "dead.er-cosm004-intra-sector-slow-roll",
      "kind": "mechanism",
      "source_id": "corpus.f12-reconciliation-scout-may-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "ER-COSM-004: proposed mechanism that the radion executes a slow-roll trajectory within a single AM topological sector, producing the F12 dark-energy thawing signature without inter-sector tunneling."
    },
    {
      "ref": "ev.dead.er-wgc001-hydrodynamic-bkm",
      "kind": "computation",
      "source_id": "corpus.hsb-karch-randall-moduli-geometry-as-l-surrogate-scout-may-1",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"dead.er-wgc001-hydrodynamic-bkm\": Substituting the L2 variance bound for the killed L^infinity amplitude bound fails by the same regularity obstruction that produced ER-NS-001: the Sobolev embedding H^1 does not embed in L^infinity in 3D is a structural fact, and L2 bounds cannot constrain pointwise suprema (SL-VC-1, LINT-L2-1). Block scope: any framework-internal mechanism proposing to recover the hydrodynamic C23-WGC derivation by substituting an L2 variance bound for the killed L^infinity amplitude bound; WGC compliance is preserved instead via the static F-theory dP_3 Pati-Salam spectrum (reformulated C23-WGC).",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.er-wgc001-hydrodynamic-bkm\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.hsb-karch-randall-moduli-geometry-as-l-surrogate-scout-may-1"
          ],
          "cited_source": "corpus.hsb-karch-randall-moduli-geometry-as-l-surrogate-scout-may-1"
        }
      ]
    },
    {
      "ref": "dead.er-wgc001-hydrodynamic-bkm",
      "kind": "mechanism",
      "source_id": "corpus.hsb-karch-randall-moduli-geometry-as-l-surrogate-scout-may-1",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "ER-WGC-001: proposed rescue that the gamma-activation mechanism's L2 variance bound on the modular Hamiltonian (built from Donnelly-Freidel edge modes) recovers the hydrodynamic C23-WGC derivation after its original BKM L^infinity amplitude-bound route was killed (cascading from the Navier-Stokes program's ER-NS-001)."
    },
    {
      "ref": "ev.dead.er-de001-bh-mechanism-evolving-de",
      "kind": "computation",
      "source_id": "corpus.framework-scout-sub-chandrasekhar-type-ia-may-12-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Evidence for the withdrawal of \"dead.er-de001-bh-mechanism-evolving-de\": Black-hole bulk-routing is structurally cooling and stabilizing (SL-BR-1), not a source of cosmological-scale energy injection or radion displacement; per SL-AM-1 any O(N) channel's cosmological-scale gradient is suppressed against the AM topological barrier by ~10^99, and the BH population's effective contribution is O(N) in the cosmologically averaged sense. Block scope: any cosmological-evolution mechanism aggregating framework-internal degenerate-object bulk-exhaust channels into an effective Lambda(t).",
      "checking_records": [
        {
          "checker_id": "checker:self",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.er-de001-bh-mechanism-evolving-de\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "self",
          "footprint": [
            "corpus.framework-scout-sub-chandrasekhar-type-ia-may-12-2026",
            "corpus.quantum-crystal-ext"
          ],
          "cited_source": "corpus.framework-scout-sub-chandrasekhar-type-ia-may-12-2026"
        }
      ]
    },
    {
      "ref": "dead.er-de001-bh-mechanism-evolving-de",
      "kind": "mechanism",
      "source_id": "corpus.framework-scout-1-bh-mechanism-may-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "ER-DE-001: proposed mechanism that the framework's bulk-routing channel (F09, F19, B19), summed cosmologically over the black-hole population, sources an evolving cosmological term mimicking the DESI DR2 thawing signature without abandoning T3.6."
    },
    {
      "ref": "ev.dead.er-ht001-nede-thermal-de",
      "kind": "computation",
      "source_id": "corpus.framework-scout-sub-chandrasekhar-type-ia-may-12-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Evidence for the withdrawal of \"dead.er-ht001-nede-thermal-de\": The v3.9 generalized cosmological plasma-exclusion structural lesson shows all unbound relativistic plasma environments thermalize at tau_th much less than t_s by 3 to 10 orders of magnitude, pinning the coherence fraction f approximately zero and rendering the gamma F_Q coupling dormant; the NEDE mechanism requires sustained thermal coherence in a regime the framework's own thermodynamics structurally excludes. Block scope: any cosmological-evolution mechanism requiring coherent thermal pumping of a hot sector at T >= MeV.",
      "checking_records": [
        {
          "checker_id": "checker:self",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.er-ht001-nede-thermal-de\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "self",
          "footprint": [
            "corpus.framework-scout-sub-chandrasekhar-type-ia-may-12-2026",
            "corpus.quantum-crystal-ext"
          ],
          "cited_source": "corpus.framework-scout-sub-chandrasekhar-type-ia-may-12-2026"
        }
      ]
    },
    {
      "ref": "dead.er-ht001-nede-thermal-de",
      "kind": "mechanism",
      "source_id": "corpus.framework-scout-3-nede-thermal-may-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "ER-HT-001: proposed mechanism that a New-Early-Dark-Energy-style thermal coupling to a hidden hot sector during recombination engineers an effective evolving-w trajectory at late times while retaining T3.6 statically."
    },
    {
      "ref": "ev.dead.er-de002-vacuum-driven-reheating",
      "kind": "computation",
      "source_id": "corpus.framework-scout-sub-chandrasekhar-type-ia-may-12-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Evidence for the withdrawal of \"dead.er-de002-vacuum-driven-reheating\": Any mechanism reversing the brane-to-bulk exhaust direction violates the framework's mandatory topological-bulk K1/K6 structure and contradicts SL-BR-1 (bulk-routing is exhaust, not injection). Block scope: any cosmological mechanism operating by reversing the framework's brane-to-bulk exhaust direction.",
      "checking_records": [
        {
          "checker_id": "checker:self",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.er-de002-vacuum-driven-reheating\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "self",
          "footprint": [
            "corpus.framework-scout-sub-chandrasekhar-type-ia-may-12-2026",
            "corpus.quantum-crystal-ext"
          ],
          "cited_source": "corpus.framework-scout-sub-chandrasekhar-type-ia-may-12-2026"
        }
      ]
    },
    {
      "ref": "dead.er-de002-vacuum-driven-reheating",
      "kind": "mechanism",
      "source_id": "corpus.framework-scout-1-bh-mechanism-may-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "ER-DE-002: proposed mechanism that reversing the bulk-routing direction (bulk back to brane) sources cosmological vacuum-driven reheating as an internal evolving dark-energy channel."
    },
    {
      "ref": "ev.dead.er-de003-quantum-foam-de",
      "kind": "computation",
      "source_id": "corpus.framework-scout-sub-chandrasekhar-type-ia-may-12-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Evidence for the withdrawal of \"dead.er-de003-quantum-foam-de\": Trans-Planckian vacuum modes are kinematically protected per K18 (the trans-Planckian VEV v ~ 10^139 GeV produces a 16-order-of-magnitude kinematic suppression of aperiodic corrections); the proposal also violates T1.3 (no trans-Planckian energy from sub-Planckian inputs at the cosmological scale). Block scope: any cosmological evolving-DE mechanism deriving energy from trans-Planckian vacuum-mode dynamics.",
      "checking_records": [
        {
          "checker_id": "checker:self",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.er-de003-quantum-foam-de\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "self",
          "footprint": [
            "corpus.framework-scout-sub-chandrasekhar-type-ia-may-12-2026",
            "corpus.quantum-crystal-ext"
          ],
          "cited_source": "corpus.framework-scout-sub-chandrasekhar-type-ia-may-12-2026"
        }
      ]
    },
    {
      "ref": "dead.er-de003-quantum-foam-de",
      "kind": "mechanism",
      "source_id": "corpus.framework-scout-1-bh-mechanism-may-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "ER-DE-003: proposed mechanism that trans-Planckian vacuum-mode dynamics sources an evolving dark-energy trajectory as an internal cosmological channel."
    },
    {
      "ref": "ev.dead.er-de004-multi-modulus-slow-roll",
      "kind": "computation",
      "source_id": "corpus.framework-scout-sub-chandrasekhar-type-ia-may-12-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Evidence for the withdrawal of \"dead.er-de004-multi-modulus-slow-roll\": Distance-Conjecture confinement: with N ~ 10^120 light scalars, individual modulus excursions are confined to Delta-phi <~ M_P/sqrt(N) ~ 10^-60 M_P, far below the trans-Planckian field range slow-roll quintessence requires for observable w(z) not equal -1 at percent level; classical slow-roll quintessence is structurally impossible in the AM-locked branch's moduli space. Codified into LINT-DE-2. Block scope: any multi-field slow-roll proposal within the AM-locked branch on moduli spaces with N much greater than 1; the obstruction does not apply on Path B, where the active modulus is a single light scalar parametrically separated from the hairon condensate.",
      "checking_records": [
        {
          "checker_id": "checker:self",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.er-de004-multi-modulus-slow-roll\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "self",
          "footprint": [
            "corpus.framework-scout-sub-chandrasekhar-type-ia-may-12-2026",
            "corpus.quantum-crystal-ext"
          ],
          "cited_source": "corpus.framework-scout-sub-chandrasekhar-type-ia-may-12-2026"
        }
      ]
    },
    {
      "ref": "dead.er-de004-multi-modulus-slow-roll",
      "kind": "mechanism",
      "source_id": "corpus.framework-scout-4-multi-field-destabilization-may-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "ER-DE-004: proposed mechanism that slow-roll across N much greater than 1 light moduli in the hairon construction (N ~ 10^120) within the AM-locked branch sources an evolving dark-energy trajectory."
    },
    {
      "ref": "ev.dead.er-de005-hairon-quintessence",
      "kind": "computation",
      "source_id": "corpus.framework-scout-sub-chandrasekhar-type-ia-may-12-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Evidence for the withdrawal of \"dead.er-de005-hairon-quintessence\": Hairons are identified as the microscopic constituents of the topological vacuum substrate mediating the BCS-like neutrino superfluid condensation and the entropic accounting selecting k_phys ~ S_dS; promoting them to rolling fields mobilizes the same constituents that define the static vacuum identification, producing a structural conflict between serving as the BEC ground state of the de Sitter vacuum and as dynamical matter rolling under a quintessence potential. Codified into LINT-DE-3. Block scope: any mechanism promoting the microscopic constituents of a topological vacuum to additive dynamical matter while retaining the same vacuum identification.",
      "checking_records": [
        {
          "checker_id": "checker:self",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.er-de005-hairon-quintessence\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "self",
          "footprint": [
            "corpus.framework-scout-sub-chandrasekhar-type-ia-may-12-2026",
            "corpus.quantum-crystal-ext"
          ],
          "cited_source": "corpus.framework-scout-sub-chandrasekhar-type-ia-may-12-2026"
        }
      ]
    },
    {
      "ref": "dead.er-de005-hairon-quintessence",
      "kind": "mechanism",
      "source_id": "corpus.framework-scout-4-multi-field-destabilization-may-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "ER-DE-005: proposed mechanism that promoting the hairon moduli (the microscopic constituents of the topological de Sitter vacuum substrate) to additive rolling fields sources dark-energy quintessence."
    },
    {
      "ref": "ev.dead.er-de006-hairon-multi-field",
      "kind": "computation",
      "source_id": "corpus.framework-scout-sub-chandrasekhar-type-ia-may-12-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Evidence for the withdrawal of \"dead.er-de006-hairon-multi-field\": Killed for the same categorical reason as ER-DE-005, sharpened by multi-field destabilization analysis: cross-couplings between rolling hairons and the static-vacuum condensate produce non-perturbative destabilization of the topological substrate itself, falsifying the AM-locked k_phys selection on the same cosmic timescales the quintessence trajectory is supposed to drive. Block scope: any multi-field framework-internal hairon-quintessence proposal.",
      "checking_records": [
        {
          "checker_id": "checker:self",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.er-de006-hairon-multi-field\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "self",
          "footprint": [
            "corpus.framework-scout-sub-chandrasekhar-type-ia-may-12-2026",
            "corpus.quantum-crystal-ext"
          ],
          "cited_source": "corpus.framework-scout-sub-chandrasekhar-type-ia-may-12-2026"
        }
      ]
    },
    {
      "ref": "dead.er-de006-hairon-multi-field",
      "kind": "mechanism",
      "source_id": "corpus.framework-scout-4-multi-field-destabilization-may-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "ER-DE-006: proposed mechanism that a multi-field generalization of hairon-quintessence (ER-DE-005), with cross-couplings between rolling hairons and the static-vacuum condensate, produces a viable dark-energy evolution."
    },
    {
      "ref": "ev.dead.pasta-inter-equilibrium-switching",
      "kind": "computation",
      "source_id": "corpus.gemini-inter-equilibrium-march-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"dead.pasta-inter-equilibrium-switching\": Free-energy degeneracy (Delta F ~ keV) required for near-equal two-state occupation probabilities constrains the energy-density jump to ~1e-9 GeV^4, giving a variance ~1e-19 GeV^8; after proper-time reconciliation, the required scale is ~10^1 GeV^4, a 34-order-of-magnitude deficit. Large energy jumps and free-energy degeneracy are thermodynamically conjugate, so the mechanism cannot simultaneously satisfy both.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.pasta-inter-equilibrium-switching\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.gemini-inter-equilibrium-march-2026"
          ],
          "cited_source": "corpus.gemini-inter-equilibrium-march-2026"
        }
      ]
    },
    {
      "ref": "dead.pasta-inter-equilibrium-switching",
      "kind": "mechanism",
      "source_id": "corpus.gemini-inter-equilibrium-march-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Proposed mechanism: thermodynamically driven two-state switching between coexisting nuclear-pasta phases provides a coherent oscillator for radion activation (targeting OP-0)."
    },
    {
      "ref": "ev.dead.pasta-parametric-driving",
      "kind": "computation",
      "source_id": "corpus.gemini-escape-routes-march-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"dead.pasta-parametric-driving\": No candidate driver is coherent: neutrino flux is broadband thermal; magnetar fields show a 12-order-of-magnitude frequency mismatch with pasta phonons; vortex unpinning thermalizes stochastically; accretion heating is incoherent; and electron-phonon scattering (tau_ep ~ 1 ps) prevents coherence accumulation on any relevant timescale.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.pasta-parametric-driving\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.gemini-escape-routes-march-2026"
          ],
          "cited_source": "corpus.gemini-escape-routes-march-2026"
        }
      ]
    },
    {
      "ref": "dead.pasta-parametric-driving",
      "kind": "mechanism",
      "source_id": "corpus.gemini-escape-routes-march-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Proposed mechanism: a coherent parametric driver within the neutron-star interior (neutrino flux, magnetar field, vortex unpinning, accretion heating, or electron-phonon scattering) maintains phase-locked pasta-phonon oscillation for radion activation (targeting OP-0)."
    },
    {
      "ref": "ev.dead.pasta-1s0-qcp",
      "kind": "computation",
      "source_id": "corpus.gemini-escape-routes-march-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"dead.pasta-1s0-qcp\": Pasta structures dissolve at rho ~ 0.085 fm^-3 while the ^1S0 gap closes at rho ~ 0.16 fm^-3, a factor-of-2 density separation with no physical spatial overlap between the two phenomena.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.pasta-1s0-qcp\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.gemini-escape-routes-march-2026"
          ],
          "cited_source": "corpus.gemini-escape-routes-march-2026"
        }
      ]
    },
    {
      "ref": "dead.pasta-1s0-qcp",
      "kind": "mechanism",
      "source_id": "corpus.gemini-escape-routes-march-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Proposed mechanism: the ^1S0 neutron pairing quantum critical point spatially enhances pasta torsion for radion activation (targeting OP-0)."
    },
    {
      "ref": "ev.dead.pasta-3p2-pairing",
      "kind": "computation",
      "source_id": "corpus.gemini-escape-routes-march-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"dead.pasta-3p2-pairing\": ^3P2 pairing onset occurs at the crust-core boundary, exclusively in uniform core matter, which is mutually exclusive with the pasta structures the mechanism requires.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.pasta-3p2-pairing\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.gemini-escape-routes-march-2026"
          ],
          "cited_source": "corpus.gemini-escape-routes-march-2026"
        }
      ]
    },
    {
      "ref": "dead.pasta-3p2-pairing",
      "kind": "mechanism",
      "source_id": "corpus.gemini-escape-routes-march-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Proposed mechanism: the ^3P2 neutron pairing channel enhances pasta torsion for radion activation (targeting OP-0)."
    },
    {
      "ref": "ev.dead.pasta-vortex-lattice-qfi",
      "kind": "computation",
      "source_id": "corpus.gemini-escape-routes-march-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"dead.pasta-vortex-lattice-qfi\": The equilibrium vortex-core volume fraction is ~1e-17 in a millisecond pulsar, and Tkachenko modes are critically damped at high rotation rates; the resulting QFI scales O(N_vortices), extensively, not super-extensively.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.pasta-vortex-lattice-qfi\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.gemini-escape-routes-march-2026"
          ],
          "cited_source": "corpus.gemini-escape-routes-march-2026"
        }
      ]
    },
    {
      "ref": "dead.pasta-vortex-lattice-qfi",
      "kind": "mechanism",
      "source_id": "corpus.gemini-escape-routes-march-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Proposed mechanism: quantum Fisher information enhancement from the neutron-star vortex lattice provides the coherence needed for radion activation (targeting OP-0)."
    },
    {
      "ref": "ev.dead.pasta-topological-entanglement",
      "kind": "computation",
      "source_id": "corpus.gemini-escape-routes-march-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"dead.pasta-topological-entanglement\": The topological entanglement entropy gamma_topo is an O(1) correction to the entropy and does not alter the volumetric scaling of local operator variance; the global topological degeneracy is invisible to local T_{mu nu} measurement.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.pasta-topological-entanglement\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.gemini-escape-routes-march-2026"
          ],
          "cited_source": "corpus.gemini-escape-routes-march-2026"
        }
      ]
    },
    {
      "ref": "dead.pasta-topological-entanglement",
      "kind": "mechanism",
      "source_id": "corpus.gemini-escape-routes-march-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Proposed mechanism: topological entanglement entropy from the multiply-connected pasta geometry provides super-extensive QFI scaling for radion activation (targeting OP-0)."
    },
    {
      "ref": "ev.dead.pasta-spinodal-compressibility",
      "kind": "computation",
      "source_id": "corpus.compressibility-calculation-march-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Evidence for the withdrawal of \"dead.pasta-spinodal-compressibility\": Neutron-rich matter (Y_p ~ 0.04) carries ~27 MeV of positive stiffness from the symmetry energy, removing the spinodal instability; the effective dP/dn is 1 to 22 MeV across the pasta region, within a factor of 3 of the dimensional estimate, not divergent.",
      "checking_records": [
        {
          "checker_id": "checker:self",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.pasta-spinodal-compressibility\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "self",
          "footprint": [
            "corpus.compressibility-calculation-march-2026"
          ],
          "cited_source": "corpus.compressibility-calculation-march-2026"
        }
      ]
    },
    {
      "ref": "dead.pasta-spinodal-compressibility",
      "kind": "mechanism",
      "source_id": "corpus.compressibility-calculation-march-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Proposed mechanism: spinodal compressibility divergence in the pasta phase provides the enhanced susceptibility needed for radion activation (targeting OP-0)."
    },
    {
      "ref": "ev.dead.kbc-void-hubble-tension",
      "kind": "computation",
      "source_id": "corpus.displacement-geometry-report",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"dead.kbc-void-hubble-tension\": The KBC void mechanism overshoots: it produces a Hubble-constant enhancement of 11.8 to 25%, against the ~8.3% enhancement the tension actually requires; the mechanism fails quantitatively as computed.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.kbc-void-hubble-tension\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.displacement-geometry-report"
          ],
          "cited_source": "corpus.displacement-geometry-report"
        }
      ]
    },
    {
      "ref": "dead.kbc-void-hubble-tension",
      "kind": "mechanism",
      "source_id": "corpus.displacement-geometry-report",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Proposed mechanism: the KBC (Keenan-Barger-Cowie) local void's density profile resolves the Hubble tension via a local-underdensity Hubble-flow enhancement (targeting B10)."
    },
    {
      "ref": "ev.c12a",
      "kind": "computation",
      "source_id": "corpus.paper-0",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Evidence for the withdrawal of \"c12a\": Struck with the F12 retraction (v4.13): the cosmological-sector contraction shore (SF-DG-010) retracts F12 after three failed reconciliation hypotheses (ER-COSM-001/002/003) and a mass-window falsification (ER-COSM-004) exhaust the intra-sector evolution routes; the static Lambda^(k) tower (LINT-16) replaces the continuous-modulus reading the Bianchi-mandate argument required.",
      "checking_records": [
        {
          "checker_id": "checker:self",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"c12a\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "self",
          "footprint": [
            "corpus.paper-0"
          ],
          "cited_source": "corpus.paper-0"
        }
      ]
    },
    {
      "ref": "c12a",
      "kind": "mechanism",
      "source_id": "corpus.paper-0",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "C12a: Bianchi identity mandates dark-energy w(z) evolution, derived from the framework's mandatory NEC-preserving KK exhaust (parent: F12)."
    },
    {
      "ref": "ev.c12b",
      "kind": "computation",
      "source_id": "corpus.braneworld-cosmology",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Evidence for the withdrawal of \"c12b\": Struck with the F12 retraction: C12b's thawing-sign match depended on the C12a Bianchi-mandate derivation, which is struck; with F12 retracted the framework carries no thawing-trajectory prediction to compare against DESI.",
      "checking_records": [
        {
          "checker_id": "checker:self",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"c12b\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "self",
          "footprint": [
            "corpus.braneworld-cosmology"
          ],
          "cited_source": "corpus.braneworld-cosmology"
        }
      ]
    },
    {
      "ref": "c12b",
      "kind": "mechanism",
      "source_id": "corpus.braneworld-cosmology",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "C12b: the framework's thawing dark-energy prediction (dw/dt > 0) matches the DESI 2024 CPL sign and class (parent: F12, derived from C12a)."
    },
    {
      "ref": "ev.c12c",
      "kind": "computation",
      "source_id": "corpus.braneworld-cosmology",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Evidence for the withdrawal of \"c12c\": Struck with the F12 retraction: the modified-H(z) prediction relied on the thawing trajectory; with a static Lambda^(k) the optical-depth integral reduces to standard LambdaCDM, so the JWST early-reionization tension returns to standard astrophysics unaddressed by this channel.",
      "checking_records": [
        {
          "checker_id": "checker:self",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"c12c\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "self",
          "footprint": [
            "corpus.braneworld-cosmology"
          ],
          "cited_source": "corpus.braneworld-cosmology"
        }
      ]
    },
    {
      "ref": "c12c",
      "kind": "mechanism",
      "source_id": "corpus.braneworld-cosmology",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "C12c: modified H(z) from the F12 thawing trajectory suppresses the integrated optical depth tau during reionization, addressing the JWST early-reionization tension (parent: F12)."
    },
    {
      "ref": "ev.c13a",
      "kind": "computation",
      "source_id": "corpus.luna-nonlinear-electron",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Evidence for the withdrawal of \"c13a\": Struck (v4.15): the matter-sector exclusion record moves F13.2's entire contract chain to the exclusion reservoir; OP-0-ACTIVATION is dead per the Susceptibility Exclusion (SL-SUSC-1): a substrate cannot be rigid against the environment (to survive) and soft against itself (to activate) through the same response channel.",
      "checking_records": [
        {
          "checker_id": "checker:self",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"c13a\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "self",
          "footprint": [
            "corpus.luna-nonlinear-electron"
          ],
          "cited_source": "corpus.luna-nonlinear-electron"
        }
      ]
    },
    {
      "ref": "c13a",
      "kind": "mechanism",
      "source_id": "corpus.luna-nonlinear-electron",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "C13a: ponderomotive bunching and chi^(2) optical rectification provide the leading candidate mechanism for coherent radion activation in the LUNA screening context (parent: F13)."
    },
    {
      "ref": "ev.c13b",
      "kind": "computation",
      "source_id": "corpus.luna-screening-v2",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Evidence for the withdrawal of \"c13b\": Struck (v4.15) with the F13.2 reservoir: it composed with C13a's activation channel, which is dead per the matter-sector exclusion record and SL-SUSC-1.",
      "checking_records": [
        {
          "checker_id": "checker:self",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"c13b\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "self",
          "footprint": [
            "corpus.luna-screening-v2"
          ],
          "cited_source": "corpus.luna-screening-v2"
        }
      ]
    },
    {
      "ref": "c13b",
      "kind": "mechanism",
      "source_id": "corpus.luna-screening-v2",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "C13b: tree-level radion coupling to T^mu_mu stabilizes the driven lattice, composing with C13a's activation channel (parent: F13)."
    },
    {
      "ref": "ev.c13c",
      "kind": "computation",
      "source_id": "corpus.resonant-localization-report",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Evidence for the withdrawal of \"c13c\": Struck (v4.15): the matter-sector exclusion record moves F13.2 to the exclusion reservoir; OP-0-ACTIVATION is dead per SL-SUSC-1, since the standing-wave substrate cannot be simultaneously rigid enough to survive ambient decoherence and soft enough to respond to the driving field through the same coupling.",
      "checking_records": [
        {
          "checker_id": "checker:self",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"c13c\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "self",
          "footprint": [
            "corpus.resonant-localization-report"
          ],
          "cited_source": "corpus.resonant-localization-report"
        }
      ]
    },
    {
      "ref": "c13c",
      "kind": "mechanism",
      "source_id": "corpus.resonant-localization-report",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "C13c: resonant mode localization via a dual-laser THz standing wave produces geometric antinode VEV suppression at a localized site, the leading candidate mechanism for laboratory-scale coherent radion activation (parent: F13)."
    },
    {
      "ref": "ev.c13d",
      "kind": "computation",
      "source_id": "corpus.heavy-fermion-stress-test",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Evidence for the withdrawal of \"c13d\": Struck (v4.15) with the F13.2 reservoir: the Hyper-Kondo route is independently dead on its own terms (superfluid stiffness collapse at the required effective mass, see the Hyper-Kondo pathway kill above) and is further subsumed by OP-0-ACTIVATION's categorical exclusion.",
      "checking_records": [
        {
          "checker_id": "checker:self",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"c13d\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "self",
          "footprint": [
            "corpus.heavy-fermion-stress-test"
          ],
          "cited_source": "corpus.heavy-fermion-stress-test"
        }
      ]
    },
    {
      "ref": "c13d",
      "kind": "mechanism",
      "source_id": "corpus.heavy-fermion-stress-test",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "C13d: heavy-fermion scaling via lanthanide doping (a Hyper-Kondo state) amplifies the effective mass and enhances radion activation susceptibility (parent: F13)."
    },
    {
      "ref": "ev.c13e",
      "kind": "computation",
      "source_id": "corpus.ni-h-li-stress-test",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Evidence for the withdrawal of \"c13e\": Struck (v4.15) with the F13.2 reservoir: the aneutronic pumping route is independently dead on its own terms (thermodynamic-substrate absence, see the Li-7/Be-7 coherence pump kills above) and is further subsumed by OP-0-ACTIVATION's categorical exclusion.",
      "checking_records": [
        {
          "checker_id": "checker:self",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"c13e\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "self",
          "footprint": [
            "corpus.ni-h-li-stress-test"
          ],
          "cited_source": "corpus.ni-h-li-stress-test"
        }
      ]
    },
    {
      "ref": "c13e",
      "kind": "mechanism",
      "source_id": "corpus.ni-h-li-stress-test",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "C13e: aneutronic coherence pumping via ^7Li(p,alpha)^4He provides a nuclear-reaction-driven coherent activation channel (parent: F13)."
    },
    {
      "ref": "ev.c13sub",
      "kind": "computation",
      "source_id": "corpus.luna-screening-v2",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Evidence for the withdrawal of \"c13sub\": Struck (v4.15) with the F13.2 reservoir: as a sub-leading term within the reservoired F13.2 chain, it carries no independent standing once the leading activation mechanisms it corrects are themselves dead.",
      "checking_records": [
        {
          "checker_id": "checker:self",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"c13sub\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "self",
          "footprint": [
            "corpus.luna-screening-v2"
          ],
          "cited_source": "corpus.luna-screening-v2"
        }
      ]
    },
    {
      "ref": "c13sub",
      "kind": "mechanism",
      "source_id": "corpus.luna-screening-v2",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "C13sub: a sub-leading KK-tower vacuum-polarization correction (~0.3 eV) contributes an auxiliary term to the LUNA screening computation (parent: F13)."
    },
    {
      "ref": "ev.c21a",
      "kind": "computation",
      "source_id": "corpus.gemini-deep-research-report-2-geometric-phases-ponderomotive",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"c21a\": Struck (v4.15): F21 moves to the exclusion reservoir under the matter-sector exclusion record; OP-0-ACTIVATION is dead per SL-SUSC-1, and every examined force-carrier channel for F21 independently fails by 8 to 51 orders of magnitude (see the nuclear force-carrier kills above).",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"c21a\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.gemini-deep-research-report-2-geometric-phases-ponderomotive"
          ],
          "cited_source": "corpus.gemini-deep-research-report-2-geometric-phases-ponderomotive"
        }
      ]
    },
    {
      "ref": "c21a",
      "kind": "mechanism",
      "source_id": "corpus.gemini-deep-research-report-2-geometric-phases-ponderomotive",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "C21a: topological torsion flux Phi_T ~ 0.05 rad from a coherent nuclear-pasta domain (via the Katanaev-Volovich / Bakke-Furtado formalism) provides the geometric channel for F21's nuclear-scale Gamow enhancement (parent: F21)."
    },
    {
      "ref": "ev.c21b",
      "kind": "computation",
      "source_id": "corpus.gemini-deep-research-report-2-geometric-phases-ponderomotive",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"c21b\": Struck (v4.15) with the F21 reservoir: it is multiplicative with C21a, which is dead; the composed channel inherits the same categorical exclusion.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"c21b\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.gemini-deep-research-report-2-geometric-phases-ponderomotive"
          ],
          "cited_source": "corpus.gemini-deep-research-report-2-geometric-phases-ponderomotive"
        }
      ]
    },
    {
      "ref": "c21b",
      "kind": "mechanism",
      "source_id": "corpus.gemini-deep-research-report-2-geometric-phases-ponderomotive",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "C21b: ponderomotive electron screening in the degenerate stellar plasma, multiplicative with C21a's torsion-flux channel, completes the F21 Gamow-enhancement mechanism (parent: F21)."
    },
    {
      "ref": "ev.c21c",
      "kind": "computation",
      "source_id": "corpus.gemini-deep-research-report-1-gravitational-tunneling-enhanc",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"c21c\": Struck (v4.15) alongside the rest of the F21 chain: this row was itself a pass (the solar non-activation it verified holds), but with the parent F21 mechanism reservoired everywhere, the check it performed is rendered moot rather than falsified; it is entered into the reservoir as part of the F21 cascade rather than left as a standing verification of an active mechanism.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"c21c\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.gemini-deep-research-report-1-gravitational-tunneling-enhanc"
          ],
          "cited_source": "corpus.gemini-deep-research-report-1-gravitational-tunneling-enhanc"
        }
      ]
    },
    {
      "ref": "c21c",
      "kind": "mechanism",
      "source_id": "corpus.gemini-deep-research-report-1-gravitational-tunneling-enhanc",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "C21c: the solar constraint check confirms solar neutrino flux is completely unaffected by the F21 mechanism (Phi_T = 0 in the solar environment; standard Salpeter screening governs), verifying the mechanism does not overreach into observed solar phenomenology (parent: F21)."
    },
    {
      "ref": "ev.c23-ds",
      "kind": "computation",
      "source_id": "corpus.braneworld-cosmology",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Evidence for the withdrawal of \"c23-ds\": Retracted with the F12 retraction (v4.13): C23-dS's exclusion of w = -1 depended on the thawing trajectory that F12 asserted; with F12 retracted, the construction is replaced by the F-CC posture and the T3.6 static-Lambda(k) reading, under which inter-sector tunneling at e^{-S_dS} provides the dS-compliant decay channel instead.",
      "checking_records": [
        {
          "checker_id": "checker:self",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"c23-ds\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "self",
          "footprint": [
            "corpus.braneworld-cosmology"
          ],
          "cited_source": "corpus.braneworld-cosmology"
        }
      ]
    },
    {
      "ref": "c23-ds",
      "kind": "mechanism",
      "source_id": "corpus.braneworld-cosmology",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "C23-dS: thawing dark energy (dw/dt > 0) from the framework's mandatory NEC-preserving KK exhaust structurally excludes a de Sitter (w = -1) vacuum (parent: F12 cosmology, the original C23-WGC discharge route)."
    },
    {
      "ref": "ev.f05",
      "kind": "computation",
      "source_id": "corpus.torsion-dm-diagnostic",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Evidence for the withdrawal of \"f05\": Moved to the exclusion reservoir (v4.15 matter-sector exclusion record) as part of the nuclear-pasta activation chain: OP-0-ACTIVATION is dead. Var(T) for equilibrium and driven laboratory/astrophysical substrates is volume-law O(N) by the fluctuation-dissipation theorem; super-extensive variance would require GHZ-class coherence that no warm substrate sustains, and the compound activation budget (10^27 to 10^29 GeV^4) is retracted, sitting 12 to 25 orders of magnitude above what any audited substrate supplies.",
      "checking_records": [
        {
          "checker_id": "checker:self",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"f05\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "self",
          "footprint": [
            "corpus.torsion-dm-diagnostic"
          ],
          "cited_source": "corpus.torsion-dm-diagnostic"
        }
      ]
    },
    {
      "ref": "f05",
      "kind": "function",
      "source_id": "corpus.torsion-dm-diagnostic",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "F05: Massive Neutron Stars Are Supported. Proposed that coherent nuclear-pasta domains in the neutron-star crust provide a torsion-mediated pressure contribution supporting neutron-star masses above the standard degeneracy-pressure ceiling."
    },
    {
      "ref": "ev.f12",
      "kind": "computation",
      "source_id": "corpus.framework-scout-sub-chandrasekhar-type-ia-may-12-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Evidence for the withdrawal of \"f12\": Struck from Tier 3 as of v4.13 (Cosmological-Sector Contraction Shore, SF-DG-010): three reconciliation hypotheses independently fail (ER-COSM-001 categorical DLRO/ODLRO conflation, ER-COSM-002 kinematic dominance at ~10^99, ER-COSM-003 volume-fraction suppression at ~10^-46) and the intra-sector slow-roll alternative fails the radion mass window by at least 30 orders of magnitude (ER-COSM-004); SL-AM-1 and LINT-DLR-1 codify the underlying obstruction.",
      "checking_records": [
        {
          "checker_id": "checker:self",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"f12\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "self",
          "footprint": [
            "corpus.framework-scout-sub-chandrasekhar-type-ia-may-12-2026",
            "corpus.quantum-crystal-ext"
          ],
          "cited_source": "corpus.framework-scout-sub-chandrasekhar-type-ia-may-12-2026"
        }
      ]
    },
    {
      "ref": "f12",
      "kind": "function",
      "source_id": "corpus.f12-reconciliation-scout-may-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "F12: Dark Energy Evolves. Proposed that the framework's mandatory NEC-preserving KK exhaust channel produces a thawing dark-energy equation-of-state trajectory (dw/dt > 0), matching the DESI 2024 CPL-parameterized signature."
    },
    {
      "ref": "ev.f13",
      "kind": "computation",
      "source_id": "corpus.luna-screening-v1",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Evidence for the withdrawal of \"f13\": Superseded reading (v4.15 matter-sector exclusion record): every tree-level and perturbative mechanism examined for F13 independently fails (Higgs conflation, warp-factor cancellation, DBI radius inflation, T_3 rigidity, geometric truncation, perturbative torsion screening, Debye-coherence absence, WKB metric deformation; see the individual DEAD-table entries), and the remaining resonant-activation candidates move to the exclusion reservoir with F13.2 under OP-0-ACTIVATION's categorical exclusion (SL-SUSC-1).",
      "checking_records": [
        {
          "checker_id": "checker:self",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"f13\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "self",
          "footprint": [
            "corpus.luna-screening-v1"
          ],
          "cited_source": "corpus.luna-screening-v1"
        }
      ]
    },
    {
      "ref": "f13",
      "kind": "function",
      "source_id": "corpus.luna-screening-v1",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "F13: LUNA Screening. Proposed that the framework's coherent-matter geometric coupling produces the anomalous electron-screening enhancement observed in the LUNA underground nuclear-astrophysics experiment."
    },
    {
      "ref": "ev.f13-2",
      "kind": "computation",
      "source_id": "corpus.resonant-localization-report",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Evidence for the withdrawal of \"f13-2\": Moved to the exclusion reservoir (v4.15, supersedes the earlier v4.7 reading): the matter-sector exclusion record and SL-SUSC-1 (the Susceptibility Exclusion) show the standing-wave substrate cannot be simultaneously rigid enough to survive ambient decoherence and soft enough to respond to the driving field through the same coupling channel; the entire C13a-e/C13sub contract chain is struck with it.",
      "checking_records": [
        {
          "checker_id": "checker:self",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"f13-2\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "self",
          "footprint": [
            "corpus.resonant-localization-report"
          ],
          "cited_source": "corpus.resonant-localization-report"
        }
      ]
    },
    {
      "ref": "f13-2",
      "kind": "function",
      "source_id": "corpus.resonant-localization-report",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "F13.2: Resonant Radion Catalysis. Proposed that a dual-laser THz standing-wave field drives resonant, laboratory-observable coherent radion activation (the C13 contract chain: ponderomotive bunching, lattice stabilization, resonant localization, Hyper-Kondo enhancement, aneutronic pumping, and the vacuum-polarization sub-correction)."
    },
    {
      "ref": "ev.f19",
      "kind": "computation",
      "source_id": "corpus.displacement-geometry-report",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Evidence for the withdrawal of \"f19\": Moved to the exclusion reservoir (v4.15 matter-sector exclusion record, supersedes the v4.7 reading): OP-0-ACTIVATION is dead per the FDT volume-law argument and the Susceptibility Exclusion (SL-SUSC-1); the stated surviving empirical face is a distinct gravitational-noise/stochastic-G channel (S-NOISE), not a reinstatement of the geometric-collapse mechanism itself.",
      "checking_records": [
        {
          "checker_id": "checker:self",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"f19\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "self",
          "footprint": [
            "corpus.displacement-geometry-report"
          ],
          "cited_source": "corpus.displacement-geometry-report"
        }
      ]
    },
    {
      "ref": "f19",
      "kind": "function",
      "source_id": "corpus.displacement-geometry-report",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "F19: Geometric Wavefunction Collapse. Proposed that the framework's coherent-matter coupling to gravity provides a physical mechanism for objective quantum-state collapse at a mass/coherence threshold set by the geometric construction."
    },
    {
      "ref": "ev.f21",
      "kind": "computation",
      "source_id": "corpus.gemini-deep-research-report-1-gravitational-tunneling-enhanc",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Evidence for the withdrawal of \"f21\": Reservoired (v4.15, contracts C21a/b/c struck) under the matter-sector exclusion record: every examined force-carrier channel independently fails by 8 to 51 orders of magnitude (Hehl-Datta, radion Yukawa, ADD KK graviton, torsion-Dirac, radion BCS, Dicke superradiant, Species-Scale QCD; see the individual DEAD-table entries), and OP-0-ACTIVATION's categorical exclusion (SL-SUSC-1) subsumes the surviving proposed channels as well.",
      "checking_records": [
        {
          "checker_id": "checker:self",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"f21\" against its cited source artifact",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "self",
          "footprint": [
            "corpus.gemini-deep-research-report-1-gravitational-tunneling-enhanc"
          ],
          "cited_source": "corpus.gemini-deep-research-report-1-gravitational-tunneling-enhanc"
        }
      ]
    },
    {
      "ref": "f21",
      "kind": "function",
      "source_id": "corpus.gemini-deep-research-report-1-gravitational-tunneling-enhanc",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "F21: Dual-Channel Gamow Enhancement. Proposed that the framework's coherent-matter geometric coupling enhances the nuclear Gamow tunneling factor through a torsion-flux channel (C21a) composed with ponderomotive electron screening (C21b), enhancing fusion/screening rates at nuclear scales."
    },
    {
      "ref": "block.er-cc001",
      "kind": "block",
      "source_id": "corpus.gemini-cc-run-1-april-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "corroborated",
      "statement": "Class-level exclusion (gamma(z_0)-inheritance-alone stabilization block, from the withdrawal of \"dead.er-cc001-gamma-z0-stabilization\"): any mechanism relying on the gamma(z_0) inheritance alone to stabilize the Karch-Randall radion is dead; combined mechanisms (gamma plus Casimir backreaction, gamma plus instanton, gamma plus flux quantization) remain open as separate sorries."
    },
    {
      "ref": "block.er-cc002",
      "kind": "block",
      "source_id": "corpus.gemini-cc-run-1-april-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "corroborated",
      "statement": "Class-level exclusion (propagating-bulk-scalar block, from the withdrawal of \"dead.er-cc002-goldberger-wise\"): any mechanism relying on a propagating bulk scalar field with kinetic terms is forbidden by the topological-bulk axiom (the framework's Tier 4 commitment to a topological SO(2,4) Chern-Simons bulk with zero local degrees of freedom)."
    },
    {
      "ref": "block.er-mm001",
      "kind": "block",
      "source_id": "corpus.gemini-dr-vi-rewrite-route-april-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "corroborated",
      "statement": "Class-level exclusion (MM antisymmetry-cancellation block (point block), from the withdrawal of \"dead.er-mm001-antisymmetry-vanishing\"): the specific antisymmetry-plus-index-symmetry cancellation argument for the MM Dirac matrix's 30x30 primary-primary block is dead; the block structure must be treated as pseudo-differential, not ultra-local, for any future MM Section VI analysis."
    },
    {
      "ref": "block.er-mm002-local-algebraic-ultralocality",
      "kind": "block",
      "source_id": "corpus.chatgpt-track-a-no-go-april-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "corroborated",
      "statement": "Class-level exclusion (local-algebraic-ultralocality block, from the withdrawal of \"dead.er-mm002-local-algebraic-redefinition\"): any mechanism relying on local algebraic canonical transformations to achieve ultra-locality in the MM Dirac matrix is structurally obstructed (the No-Go Lemma: local conjugation preserves principal-symbol operator order, and the required cancellation forces a contradiction with ER-MM-001's nonvanishing result for any invertible transformation)."
    },
    {
      "ref": "block.er-mm003",
      "kind": "block",
      "source_id": "corpus.chatgpt-track-a-no-go-april-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "corroborated",
      "statement": "Class-level exclusion (pointwise-Schur-determinant block (point block), from the withdrawal of \"dead.er-mm003-pointwise-schur\"): the pointwise coordinate-space determinant-factorization route for the MM Dirac matrix is obstructed; only the operator-theoretic principal-symbol reformulation survives as a live route."
    },
    {
      "ref": "block.er-mix001",
      "kind": "block",
      "source_id": "corpus.chatgpt-s-mix-001-computation-report-april-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "corroborated",
      "statement": "Class-level exclusion (DBI-pi-chi tree-level-mixing block, from the withdrawal of \"dead.er-mix001-dbi-pi-chi-mixing\"): any rescue requiring the radion's F_Q coupling to flow through the DBI brane-bending mode without an additional bilinear mixing source (beyond the induced-metric kinematic identification alone) is dead."
    },
    {
      "ref": "block.er-mix002",
      "kind": "block",
      "source_id": "corpus.chatgpt-s-mix-003-torsion-elimination-computation-april-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "corroborated",
      "statement": "Class-level exclusion (pure-F-R(omega)-torsion-elimination block, from the withdrawal of \"dead.er-mix002-einstein-cartan-torsion\"): any rescue asserting the radion kinetic term in MMSW gravity emerges from torsion-induced Einstein-Cartan reduction of a pure F(rho)R(omega) coupling is dead (the Palatini scalar-tensor ghost); the Weyl-rescaling route to the Einstein frame is the correct mechanism."
    },
    {
      "ref": "block.er-mix003",
      "kind": "block",
      "source_id": "corpus.langenscheidt-2019-arxiv-1907-10440",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "corroborated",
      "statement": "Class-level exclusion (naive-(D-phi)-squared-kinetic-term block, from the withdrawal of \"dead.er-mix003-naive-scalar-kinetic\"): any MMSW or related gauge-theoretic gravity construction asserting a propagating scalar via a direct (D phi)^dagger(D phi) operator, without auxiliary-field structure or an alternative principled mechanism, is dead (the operator vanishes identically by gauge-fiber Hodge antisymmetry)."
    },
    {
      "ref": "block.er-wd001",
      "kind": "block",
      "source_id": "corpus.framework-scout-sub-chandrasekhar-type-ia-may-12-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "corroborated",
      "statement": "Class-level exclusion (sub-Chandrasekhar-detonation-via-framework-catalysis block, from the withdrawal of \"dead.er-wd001-sub-chandra-wd-detonation\"): any sub-Chandrasekhar Type Ia supernova trigger mechanism routing through framework-internal geometric catalysis is dead; sub-Chandra phenomenology remains handled by standard double-detonation astrophysics, outside the framework's explanatory domain."
    },
    {
      "ref": "block.er-cosm001",
      "kind": "block",
      "source_id": "corpus.framework-scout-sub-chandrasekhar-type-ia-may-12-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "corroborated",
      "statement": "Class-level exclusion (DLRO-vs-ODLRO-conflation block (LINT-DLR-1), from the withdrawal of \"dead.er-cosm001-integrated-f-buildup\"): any cosmological mechanism conflating classical clustering (DLRO density gradients, Bragg-peak ordering) with macroscopic ODLRO long-range phase coherence is dead; codified into LINT-DLR-1."
    },
    {
      "ref": "block.er-cosm002",
      "kind": "block",
      "source_id": "corpus.framework-scout-sub-chandrasekhar-type-ia-may-12-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "corroborated",
      "statement": "Class-level exclusion (O(N)-trace-channel-vs-AM-barrier block (SL-AM-1), from the withdrawal of \"dead.er-cosm002-trace-channel-gradient\"): any cosmological mechanism using an extensively-scaling O(N) operator to bridge AM topological barriers is dead; only super-extensive O(N^2) operators sourced by ODLRO can engage the pole structure. Codified into SL-AM-1."
    },
    {
      "ref": "block.er-cosm003",
      "kind": "block",
      "source_id": "corpus.framework-scout-sub-chandrasekhar-type-ia-may-12-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "corroborated",
      "statement": "Class-level exclusion (rare-ODLRO-domain-averaging block, from the withdrawal of \"dead.er-cosm003-cosmological-averaging\"): any cosmological-averaging mechanism aggregating rare ODLRO domains (e.g. neutron-star superfluid cores at ~1e-46 of the Hubble volume) into a cosmological-scale equation-of-state contribution is dead."
    },
    {
      "ref": "block.er-cosm004",
      "kind": "block",
      "source_id": "corpus.framework-scout-sub-chandrasekhar-type-ia-may-12-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "corroborated",
      "statement": "Class-level exclusion (slow-roll-at-m-sim-H0 block, from the withdrawal of \"dead.er-cosm004-intra-sector-slow-roll\"): any cosmological mechanism introducing or repurposing a slow-rolling scalar at m ~ H_0 within the framework's radion mass window ([1 meV, 100 GeV], per F13.2 and K8) is dead, falsified by at least 30 orders of magnitude."
    },
    {
      "ref": "block.er-wgc001-l2-vs-linfinity",
      "kind": "block",
      "source_id": "corpus.hsb-karch-randall-moduli-geometry-as-l-surrogate-scout-may-1",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "corroborated",
      "statement": "Class-level exclusion (L2-vs-Linfinity Sobolev block (LINT-L2-1), from the withdrawal of \"dead.er-wgc001-hydrodynamic-bkm\"): any framework-internal mechanism proposing to recover a killed pointwise L^infinity amplitude-bound derivation by substituting an L2 variance bound is dead (the Sobolev embedding H^1 does not embed in L^infinity in 3D; L2 bounds cannot constrain pointwise suprema). Codified into LINT-L2-1, SL-VC-1."
    },
    {
      "ref": "block.er-de001",
      "kind": "block",
      "source_id": "corpus.framework-scout-sub-chandrasekhar-type-ia-may-12-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Class-level exclusion (BH-bulk-exhaust-as-DE-source block (SL-BR-1), from the withdrawal of \"dead.er-de001-bh-mechanism-evolving-de\"): any cosmological-evolution mechanism aggregating framework-internal degenerate-object bulk-exhaust channels (black holes, failed supernovae, geometric collapse) into an effective Lambda(t) is dead; bulk-routing is structurally cooling and stabilizing, not an energy-injection source. Codified into SL-BR-1."
    },
    {
      "ref": "block.er-ht001",
      "kind": "block",
      "source_id": "corpus.framework-scout-sub-chandrasekhar-type-ia-may-12-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Class-level exclusion (coherent-thermal-pumping-above-MeV block, from the withdrawal of \"dead.er-ht001-nede-thermal-de\"): any cosmological-evolution mechanism requiring coherent thermal pumping of a hot sector at T >= MeV is dead; the v3.9 generalized cosmological plasma-exclusion structural lesson pins the coherence fraction at f approximately zero in every unbound relativistic plasma environment."
    },
    {
      "ref": "block.er-de002",
      "kind": "block",
      "source_id": "corpus.framework-scout-sub-chandrasekhar-type-ia-may-12-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Class-level exclusion (reversed-bulk-routing-direction block, from the withdrawal of \"dead.er-de002-vacuum-driven-reheating\"): any cosmological mechanism operating by reversing the framework's mandatory brane-to-bulk exhaust direction is dead; bulk-routing is exhaust, never injection (SL-BR-1), and reversal violates the mandatory topological-bulk K1/K6 structure."
    },
    {
      "ref": "block.er-de003",
      "kind": "block",
      "source_id": "corpus.framework-scout-sub-chandrasekhar-type-ia-may-12-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Class-level exclusion (trans-Planckian-vacuum-mode-energy-extraction block, from the withdrawal of \"dead.er-de003-quantum-foam-de\"): any cosmological evolving-dark-energy mechanism deriving energy from trans-Planckian vacuum-mode dynamics is dead; trans-Planckian modes are kinematically protected per K18, and the proposal separately violates T1.3."
    },
    {
      "ref": "block.er-de004",
      "kind": "block",
      "source_id": "corpus.framework-scout-sub-chandrasekhar-type-ia-may-12-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Class-level exclusion (multi-modulus-slow-roll-in-AM-locked-branch block (LINT-DE-2), from the withdrawal of \"dead.er-de004-multi-modulus-slow-roll\"): any multi-field slow-roll proposal within the AM-locked branch, on moduli spaces with N much greater than 1 light scalars, is dead by Distance-Conjecture confinement. Codified into LINT-DE-2. Does not apply on Path B, where the active modulus is a single light scalar parametrically separated from the hairon condensate."
    },
    {
      "ref": "block.er-de005",
      "kind": "block",
      "source_id": "corpus.framework-scout-sub-chandrasekhar-type-ia-may-12-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Class-level exclusion (hairon-dual-role block (LINT-DE-3), from the withdrawal of \"dead.er-de005-hairon-quintessence\"): any mechanism promoting the microscopic constituents of a topological vacuum substrate (hairons) to additive dynamical matter, while retaining the same static vacuum identification, is dead. Codified into LINT-DE-3."
    },
    {
      "ref": "block.er-de006",
      "kind": "block",
      "source_id": "corpus.framework-scout-sub-chandrasekhar-type-ia-may-12-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Class-level exclusion (multi-field-hairon-quintessence block, from the withdrawal of \"dead.er-de006-hairon-multi-field\"): any multi-field framework-internal hairon-quintessence proposal is dead for the same categorical reason as the single-field case (LINT-DE-3), sharpened by cross-coupling destabilization of the topological substrate itself."
    },
    {
      "ref": "ev.mk1",
      "kind": "computation",
      "source_id": "corpus.pk-dr-005-physics-synthesis",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"mk1\": Killed by error correlation across LLM-generated content: the Birge-ratio machinery Particle-Data-Group-style averaging depends on assumes independent inter-laboratory errors, an assumption this kernel's own AI-audit-heavy corpus does not satisfy (docs/governing-conventions.md Section 1: two audits tracing to the same upstream report share a footprint and are not independent). This is the kill governing-conventions Section 7 already cites: 'accepted-with-disagreement' stands as the gate's own reading of a held contradiction, never smoothed by a numeric average.",
      "checking_records": [
        {
          "checker_id": "checker:pk-dr",
          "method_class": "derivation-audit",
          "method": "audits the methods-kill claim \"mk1\" against the PK-DR report it cites",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.pk-dr-005-physics-synthesis",
            "corpus.pk-dr-research-session"
          ],
          "cited_source": "corpus.pk-dr-005-physics-synthesis"
        }
      ]
    },
    {
      "ref": "mk1",
      "kind": "mechanism",
      "source_id": "corpus.pk-dr-005-physics-synthesis",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Proposed method (synthesis backlog K1): adopt PDG-style scale-factor / statistical averaging over contradictory claims as this kernel's own reconciliation machinery for a held contradiction, treating disagreeing sources the way particle-data-group averaging treats disagreeing measurements."
    },
    {
      "ref": "ev.mk2",
      "kind": "computation",
      "source_id": "corpus.pk-dr-006-graph-mathematics",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"mk2\": Killed by thermodynamic-limit preconditions vacuous at n in the hundreds, this corpus's actual claim count (398 claims at Stage 3c Track 1 close); exact fixpoint recomputation (the fixed-point refresh pattern this build already runs for supports-link declared_grade propagation) supersedes any asymptotic approximation at a scale this small.",
      "checking_records": [
        {
          "checker_id": "checker:pk-dr",
          "method_class": "derivation-audit",
          "method": "audits the methods-kill claim \"mk2\" against the PK-DR report it cites",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.pk-dr-006-graph-mathematics",
            "corpus.pk-dr-research-session"
          ],
          "cited_source": "corpus.pk-dr-006-graph-mathematics"
        }
      ]
    },
    {
      "ref": "mk2",
      "kind": "mechanism",
      "source_id": "corpus.pk-dr-006-graph-mathematics",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Proposed method (synthesis backlog K2): a percolation / asymptotic robustness analysis of withdrawal cascades through this kernel's claim graph, treating cascade behavior in the thermodynamic (n approaching infinity) limit."
    },
    {
      "ref": "ev.mk3",
      "kind": "computation",
      "source_id": "corpus.pk-dr-006-graph-mathematics",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"mk3\": Killed by the ordinal lattice with incomparable modes this kernel actually uses (docs/governing-conventions.md Section 6, amended Stage 3b): continuous-limit convergence proofs for gradual-argumentation semantics are invalid over a lattice whose settled tier's two modes (empirical, constitutive) are structurally incomparable, not points on one continuous scale a cardinal weight could interpolate across.",
      "checking_records": [
        {
          "checker_id": "checker:pk-dr",
          "method_class": "derivation-audit",
          "method": "audits the methods-kill claim \"mk3\" against the PK-DR report it cites",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.pk-dr-006-graph-mathematics",
            "corpus.pk-dr-research-session"
          ],
          "cited_source": "corpus.pk-dr-006-graph-mathematics"
        }
      ]
    },
    {
      "ref": "mk3",
      "kind": "mechanism",
      "source_id": "corpus.pk-dr-006-graph-mathematics",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Proposed method (synthesis backlog K3): a cardinal gradual-argumentation semantics over the grade lattice, with compensation and [0,1]-weighted propagation of standing across supports and contradictions, in place of the kernel's ordinal meet/join machinery."
    },
    {
      "ref": "ev.mk4",
      "kind": "computation",
      "source_id": "corpus.pk-dr-004-affordance-survey",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"mk4\": Killed by settlement latency: staking mechanisms degenerate under slow or ambiguous settlement (replication markets required funded guaranteed settlement; bug bounties require 24 to 48 hour resolution), a timescale this kernel's own audit cycles (derivation-audit and data-audit checking records, entered per stage over weeks) do not meet.",
      "checking_records": [
        {
          "checker_id": "checker:pk-dr",
          "method_class": "derivation-audit",
          "method": "audits the methods-kill claim \"mk4\" against the PK-DR report it cites",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.pk-dr-004-affordance-survey",
            "corpus.pk-dr-research-session"
          ],
          "cited_source": "corpus.pk-dr-004-affordance-survey"
        }
      ]
    },
    {
      "ref": "mk4",
      "kind": "mechanism",
      "source_id": "corpus.pk-dr-004-affordance-survey",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Proposed method (synthesis backlog K4): market-style staked verification of claims, with calibration track records for checkers, as a grounding mechanism feeding this kernel's own checking-record discipline."
    },
    {
      "ref": "ev.mk5",
      "kind": "computation",
      "source_id": "corpus.pk-dr-001-shore-pack-evidence",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"mk5\": Killed by negative-constraint activation (head-placed prohibition lists measurably increase the activation of what they prohibit) and the structured-format capacity tax (schema-native generation without a scratchpad phase measurably degrades reasoning capacity, since format compliance and reasoning compete for the same generation budget). Unlike K1 through K4, this kill's remedy is already applied in practice, not merely reinstatement-conditioned: the emitter spec (docs/synthesis-backlog.md Section 3) is already amended toward positive constraint geometry, kills entered as mid-context historical data rather than head-placed prohibitions, think-first-format-later ordering, and verbalized sampling, the same discipline this stage's own reservoir entries (Track 1) and this file's own entries follow.",
      "checking_records": [
        {
          "checker_id": "checker:pk-dr",
          "method_class": "derivation-audit",
          "method": "audits the methods-kill claim \"mk5\" against the PK-DR report it cites",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.pk-dr-001-shore-pack-evidence",
            "corpus.pk-dr-research-session"
          ],
          "cited_source": "corpus.pk-dr-001-shore-pack-evidence"
        },
        {
          "checker_id": "checker:pk-dr",
          "method_class": "derivation-audit",
          "method": "audits the methods-kill claim \"mk5\" against the PK-DR report it cites",
          "checked_at_state": "dg@stage-3c",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.pk-dr-003-grounded-generation",
            "corpus.pk-dr-research-session"
          ],
          "cited_source": "corpus.pk-dr-003-grounded-generation"
        }
      ]
    },
    {
      "ref": "mk5",
      "kind": "mechanism",
      "source_id": "corpus.pk-dr-001-shore-pack-evidence",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Proposed method (synthesis backlog K5, design-level, already applied): head-placed prohibition lists in generation context ('do not do X' instructions placed at the head of a prompt), and schema-native generation without a scratchpad phase, as this kernel's own future generation-time discipline for authoring claims and checking records."
    },
    {
      "ref": "ev.dead.er-cosm001-integrated-f-buildup.recited",
      "kind": "computation",
      "source_id": "corpus.f12-reconciliation-scout-may-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"dead.er-cosm001-integrated-f-buildup\": Categorical error: classical structure formation produces DLRO density gradients and Bragg-peak ordering, not ODLRO long-range phase coherence of a complex order parameter. The coherence fraction f remains approximately zero at cosmological scales regardless of structure formation, so F_Q stays pinned to the extensive O(N) baseline by the fluctuation-dissipation theorem. Block scope: any cosmological mechanism conflating classical clustering with macroscopic ODLRO; codified into LINT-DLR-1. Re-cited (audit-prep Track 1) to corpus.f12-reconciliation-scout-may-2026, the specific Framework Scout report the trellis's own Section 5 \"Source\" column names for this kill; the original citation at Stage 3c Track 1 mapped it to the generic sub-Chandrasekhar Type Ia scout row for lack of a catalogued source row of its own.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.er-cosm001-integrated-f-buildup\" against its cited source artifact (re-cited to the specific Scout report the trellis names, audit-prep Track 1)",
          "checked_at_state": "dg@audit-prep",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.f12-reconciliation-scout-may-2026"
          ],
          "cited_source": "corpus.f12-reconciliation-scout-may-2026"
        }
      ]
    },
    {
      "ref": "ev.dead.er-cosm002-trace-channel-gradient.recited",
      "kind": "computation",
      "source_id": "corpus.f12-reconciliation-scout-may-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"dead.er-cosm002-trace-channel-gradient\": The AM kinematic-dominance bound (SL-AM-1) shows the trace channel, suppressed by the gravitational coupling (m/M_Pl)^2 ~ 10^-67, is dominated by the AM potential barrier height (~10^32 GeV^4) by ~10^99; the trace gradient cannot displace the radion from its discrete minimum. Block scope: any cosmological mechanism using an extensively-scaling O(N) operator to bridge AM topological barriers; only super-extensive O(N^2) operators sourced by ODLRO can engage the pole structure. Re-cited (audit-prep Track 1) to corpus.f12-reconciliation-scout-may-2026, the specific Framework Scout report the trellis's own Section 5 \"Source\" column names for this kill; the original citation at Stage 3c Track 1 mapped it to the generic sub-Chandrasekhar Type Ia scout row for lack of a catalogued source row of its own.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.er-cosm002-trace-channel-gradient\" against its cited source artifact (re-cited to the specific Scout report the trellis names, audit-prep Track 1)",
          "checked_at_state": "dg@audit-prep",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.f12-reconciliation-scout-may-2026"
          ],
          "cited_source": "corpus.f12-reconciliation-scout-may-2026"
        }
      ]
    },
    {
      "ref": "ev.dead.er-cosm003-cosmological-averaging.recited",
      "kind": "computation",
      "source_id": "corpus.f12-reconciliation-scout-may-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"dead.er-cosm003-cosmological-averaging\": ODLRO-supporting systems occupy ~10^-46 of the Hubble volume; macroscopic FLRW backreaction from such patches is identically zero to all practical orders. Predicted spatial inhomogeneities in w(z) correlated with structure environments are inconsistent with observational bounds, and F16 (Void Physics) already explains ISW-type local variations without invoking ODLRO patches. Block scope: any cosmological-averaging mechanism aggregating rare ODLRO domains into a cosmological-scale equation-of-state contribution. Re-cited (audit-prep Track 1) to corpus.f12-reconciliation-scout-may-2026, the specific Framework Scout report the trellis's own Section 5 \"Source\" column names for this kill; the original citation at Stage 3c Track 1 mapped it to the generic sub-Chandrasekhar Type Ia scout row for lack of a catalogued source row of its own.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.er-cosm003-cosmological-averaging\" against its cited source artifact (re-cited to the specific Scout report the trellis names, audit-prep Track 1)",
          "checked_at_state": "dg@audit-prep",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.f12-reconciliation-scout-may-2026"
          ],
          "cited_source": "corpus.f12-reconciliation-scout-may-2026"
        }
      ]
    },
    {
      "ref": "ev.dead.er-cosm004-intra-sector-slow-roll.recited",
      "kind": "computation",
      "source_id": "corpus.f12-reconciliation-scout-may-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked",
      "statement": "Evidence for the withdrawal of \"dead.er-cosm004-intra-sector-slow-roll\": Slow-roll quintessence requires m ~ H_0 ~ 10^-33 eV; the framework's radion is bounded m_rho in [1 meV, 100 GeV] by F13.2 (LUNA phenomenology requires MeV-scale mass) and K8 (adiabatic stability against matter loops), with the framework selecting m_rho ~ 1 MeV. The ratio is at least 10^30, falsifying slow-roll by 30 orders of magnitude; an ad-hoc additional scalar field is forbidden by the S-MM-CR DOF count (conditional). Block scope: any cosmological mechanism introducing or repurposing a slow-rolling scalar at m ~ H_0. Re-cited (audit-prep Track 1) to corpus.f12-reconciliation-scout-may-2026, the specific Framework Scout report the trellis's own Section 5 \"Source\" column names for this kill; the original citation at Stage 3c Track 1 mapped it to the generic sub-Chandrasekhar Type Ia scout row for lack of a catalogued source row of its own.",
      "checking_records": [
        {
          "checker_id": "checker:gemini-dr",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.er-cosm004-intra-sector-slow-roll\" against its cited source artifact (re-cited to the specific Scout report the trellis names, audit-prep Track 1)",
          "checked_at_state": "dg@audit-prep",
          "outcome": "confirms",
          "independence": "distinct-party",
          "footprint": [
            "corpus.f12-reconciliation-scout-may-2026"
          ],
          "cited_source": "corpus.f12-reconciliation-scout-may-2026"
        }
      ]
    },
    {
      "ref": "ev.f12.recited",
      "kind": "computation",
      "source_id": "corpus.f12-reconciliation-scout-may-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Evidence for the withdrawal of \"f12\": Struck from Tier 3 as of v4.13 (Cosmological-Sector Contraction Shore, SF-DG-010): three reconciliation hypotheses independently fail (ER-COSM-001 categorical DLRO/ODLRO conflation, ER-COSM-002 kinematic dominance at ~10^99, ER-COSM-003 volume-fraction suppression at ~10^-46) and the intra-sector slow-roll alternative fails the radion mass window by at least 30 orders of magnitude (ER-COSM-004); SL-AM-1 and LINT-DLR-1 codify the underlying obstruction. Re-cited (audit-prep Track 1) to corpus.f12-reconciliation-scout-may-2026, the specific Framework Scout report the trellis's own Section 5 \"Source\" column names for this kill; the original citation at Stage 3c Track 1 mapped it to the generic sub-Chandrasekhar Type Ia scout row for lack of a catalogued source row of its own.",
      "checking_records": [
        {
          "checker_id": "checker:self",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"f12\" against its cited source artifact (re-cited to the specific Scout report the trellis names, audit-prep Track 1)",
          "checked_at_state": "dg@audit-prep",
          "outcome": "confirms",
          "independence": "self",
          "footprint": [
            "corpus.f12-reconciliation-scout-may-2026"
          ],
          "cited_source": "corpus.f12-reconciliation-scout-may-2026"
        }
      ]
    },
    {
      "ref": "ev.dead.er-de001-bh-mechanism-evolving-de.recited",
      "kind": "computation",
      "source_id": "corpus.framework-scout-1-bh-mechanism-may-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Evidence for the withdrawal of \"dead.er-de001-bh-mechanism-evolving-de\": Black-hole bulk-routing is structurally cooling and stabilizing (SL-BR-1), not a source of cosmological-scale energy injection or radion displacement; per SL-AM-1 any O(N) channel's cosmological-scale gradient is suppressed against the AM topological barrier by ~10^99, and the BH population's effective contribution is O(N) in the cosmologically averaged sense. Block scope: any cosmological-evolution mechanism aggregating framework-internal degenerate-object bulk-exhaust channels into an effective Lambda(t). Re-cited (audit-prep Track 1) to corpus.framework-scout-1-bh-mechanism-may-2026, the specific Framework Scout report the trellis's own Section 5 \"Source\" column names for this kill; the original citation at Stage 3c Track 1 mapped it to the generic sub-Chandrasekhar Type Ia scout row for lack of a catalogued source row of its own.",
      "checking_records": [
        {
          "checker_id": "checker:self",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.er-de001-bh-mechanism-evolving-de\" against its cited source artifact (re-cited to the specific Scout report the trellis names, audit-prep Track 1)",
          "checked_at_state": "dg@audit-prep",
          "outcome": "confirms",
          "independence": "self",
          "footprint": [
            "corpus.framework-scout-1-bh-mechanism-may-2026"
          ],
          "cited_source": "corpus.framework-scout-1-bh-mechanism-may-2026"
        }
      ]
    },
    {
      "ref": "ev.dead.er-de002-vacuum-driven-reheating.recited",
      "kind": "computation",
      "source_id": "corpus.framework-scout-1-bh-mechanism-may-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Evidence for the withdrawal of \"dead.er-de002-vacuum-driven-reheating\": Any mechanism reversing the brane-to-bulk exhaust direction violates the framework's mandatory topological-bulk K1/K6 structure and contradicts SL-BR-1 (bulk-routing is exhaust, not injection). Block scope: any cosmological mechanism operating by reversing the framework's brane-to-bulk exhaust direction. Re-cited (audit-prep Track 1) to corpus.framework-scout-1-bh-mechanism-may-2026, the specific Framework Scout report the trellis's own Section 5 \"Source\" column names for this kill; the original citation at Stage 3c Track 1 mapped it to the generic sub-Chandrasekhar Type Ia scout row for lack of a catalogued source row of its own.",
      "checking_records": [
        {
          "checker_id": "checker:self",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.er-de002-vacuum-driven-reheating\" against its cited source artifact (re-cited to the specific Scout report the trellis names, audit-prep Track 1)",
          "checked_at_state": "dg@audit-prep",
          "outcome": "confirms",
          "independence": "self",
          "footprint": [
            "corpus.framework-scout-1-bh-mechanism-may-2026"
          ],
          "cited_source": "corpus.framework-scout-1-bh-mechanism-may-2026"
        }
      ]
    },
    {
      "ref": "ev.dead.er-de003-quantum-foam-de.recited",
      "kind": "computation",
      "source_id": "corpus.framework-scout-1-bh-mechanism-may-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Evidence for the withdrawal of \"dead.er-de003-quantum-foam-de\": Trans-Planckian vacuum modes are kinematically protected per K18 (the trans-Planckian VEV v ~ 10^139 GeV produces a 16-order-of-magnitude kinematic suppression of aperiodic corrections); the proposal also violates T1.3 (no trans-Planckian energy from sub-Planckian inputs at the cosmological scale). Block scope: any cosmological evolving-DE mechanism deriving energy from trans-Planckian vacuum-mode dynamics. Re-cited (audit-prep Track 1) to corpus.framework-scout-1-bh-mechanism-may-2026, the specific Framework Scout report the trellis's own Section 5 \"Source\" column names for this kill; the original citation at Stage 3c Track 1 mapped it to the generic sub-Chandrasekhar Type Ia scout row for lack of a catalogued source row of its own.",
      "checking_records": [
        {
          "checker_id": "checker:self",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.er-de003-quantum-foam-de\" against its cited source artifact (re-cited to the specific Scout report the trellis names, audit-prep Track 1)",
          "checked_at_state": "dg@audit-prep",
          "outcome": "confirms",
          "independence": "self",
          "footprint": [
            "corpus.framework-scout-1-bh-mechanism-may-2026"
          ],
          "cited_source": "corpus.framework-scout-1-bh-mechanism-may-2026"
        }
      ]
    },
    {
      "ref": "ev.dead.er-ht001-nede-thermal-de.recited",
      "kind": "computation",
      "source_id": "corpus.framework-scout-3-nede-thermal-may-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Evidence for the withdrawal of \"dead.er-ht001-nede-thermal-de\": The v3.9 generalized cosmological plasma-exclusion structural lesson shows all unbound relativistic plasma environments thermalize at tau_th much less than t_s by 3 to 10 orders of magnitude, pinning the coherence fraction f approximately zero and rendering the gamma F_Q coupling dormant; the NEDE mechanism requires sustained thermal coherence in a regime the framework's own thermodynamics structurally excludes. Block scope: any cosmological-evolution mechanism requiring coherent thermal pumping of a hot sector at T >= MeV. Re-cited (audit-prep Track 1) to corpus.framework-scout-3-nede-thermal-may-2026, the specific Framework Scout report the trellis's own Section 5 \"Source\" column names for this kill; the original citation at Stage 3c Track 1 mapped it to the generic sub-Chandrasekhar Type Ia scout row for lack of a catalogued source row of its own.",
      "checking_records": [
        {
          "checker_id": "checker:self",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.er-ht001-nede-thermal-de\" against its cited source artifact (re-cited to the specific Scout report the trellis names, audit-prep Track 1)",
          "checked_at_state": "dg@audit-prep",
          "outcome": "confirms",
          "independence": "self",
          "footprint": [
            "corpus.framework-scout-3-nede-thermal-may-2026"
          ],
          "cited_source": "corpus.framework-scout-3-nede-thermal-may-2026"
        }
      ]
    },
    {
      "ref": "ev.dead.er-de004-multi-modulus-slow-roll.recited",
      "kind": "computation",
      "source_id": "corpus.framework-scout-4-multi-field-destabilization-may-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Evidence for the withdrawal of \"dead.er-de004-multi-modulus-slow-roll\": Distance-Conjecture confinement: with N ~ 10^120 light scalars, individual modulus excursions are confined to Delta-phi <~ M_P/sqrt(N) ~ 10^-60 M_P, far below the trans-Planckian field range slow-roll quintessence requires for observable w(z) not equal -1 at percent level; classical slow-roll quintessence is structurally impossible in the AM-locked branch's moduli space. Codified into LINT-DE-2. Block scope: any multi-field slow-roll proposal within the AM-locked branch on moduli spaces with N much greater than 1; the obstruction does not apply on Path B, where the active modulus is a single light scalar parametrically separated from the hairon condensate. Re-cited (audit-prep Track 1) to corpus.framework-scout-4-multi-field-destabilization-may-2026, the specific Framework Scout report the trellis's own Section 5 \"Source\" column names for this kill; the original citation at Stage 3c Track 1 mapped it to the generic sub-Chandrasekhar Type Ia scout row for lack of a catalogued source row of its own.",
      "checking_records": [
        {
          "checker_id": "checker:self",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.er-de004-multi-modulus-slow-roll\" against its cited source artifact (re-cited to the specific Scout report the trellis names, audit-prep Track 1)",
          "checked_at_state": "dg@audit-prep",
          "outcome": "confirms",
          "independence": "self",
          "footprint": [
            "corpus.framework-scout-4-multi-field-destabilization-may-2026"
          ],
          "cited_source": "corpus.framework-scout-4-multi-field-destabilization-may-2026"
        }
      ]
    },
    {
      "ref": "ev.dead.er-de005-hairon-quintessence.recited",
      "kind": "computation",
      "source_id": "corpus.framework-scout-4-multi-field-destabilization-may-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Evidence for the withdrawal of \"dead.er-de005-hairon-quintessence\": Hairons are identified as the microscopic constituents of the topological vacuum substrate mediating the BCS-like neutrino superfluid condensation and the entropic accounting selecting k_phys ~ S_dS; promoting them to rolling fields mobilizes the same constituents that define the static vacuum identification, producing a structural conflict between serving as the BEC ground state of the de Sitter vacuum and as dynamical matter rolling under a quintessence potential. Codified into LINT-DE-3. Block scope: any mechanism promoting the microscopic constituents of a topological vacuum to additive dynamical matter while retaining the same vacuum identification. Re-cited (audit-prep Track 1) to corpus.framework-scout-4-multi-field-destabilization-may-2026, the specific Framework Scout report the trellis's own Section 5 \"Source\" column names for this kill; the original citation at Stage 3c Track 1 mapped it to the generic sub-Chandrasekhar Type Ia scout row for lack of a catalogued source row of its own.",
      "checking_records": [
        {
          "checker_id": "checker:self",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.er-de005-hairon-quintessence\" against its cited source artifact (re-cited to the specific Scout report the trellis names, audit-prep Track 1)",
          "checked_at_state": "dg@audit-prep",
          "outcome": "confirms",
          "independence": "self",
          "footprint": [
            "corpus.framework-scout-4-multi-field-destabilization-may-2026"
          ],
          "cited_source": "corpus.framework-scout-4-multi-field-destabilization-may-2026"
        }
      ]
    },
    {
      "ref": "ev.dead.er-de006-hairon-multi-field.recited",
      "kind": "computation",
      "source_id": "corpus.framework-scout-4-multi-field-destabilization-may-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted",
      "statement": "Evidence for the withdrawal of \"dead.er-de006-hairon-multi-field\": Killed for the same categorical reason as ER-DE-005, sharpened by multi-field destabilization analysis: cross-couplings between rolling hairons and the static-vacuum condensate produce non-perturbative destabilization of the topological substrate itself, falsifying the AM-locked k_phys selection on the same cosmic timescales the quintessence trajectory is supposed to drive. Block scope: any multi-field framework-internal hairon-quintessence proposal. Re-cited (audit-prep Track 1) to corpus.framework-scout-4-multi-field-destabilization-may-2026, the specific Framework Scout report the trellis's own Section 5 \"Source\" column names for this kill; the original citation at Stage 3c Track 1 mapped it to the generic sub-Chandrasekhar Type Ia scout row for lack of a catalogued source row of its own.",
      "checking_records": [
        {
          "checker_id": "checker:self",
          "method_class": "derivation-audit",
          "method": "audits the killed claim \"dead.er-de006-hairon-multi-field\" against its cited source artifact (re-cited to the specific Scout report the trellis names, audit-prep Track 1)",
          "checked_at_state": "dg@audit-prep",
          "outcome": "confirms",
          "independence": "self",
          "footprint": [
            "corpus.framework-scout-4-multi-field-destabilization-may-2026"
          ],
          "cited_source": "corpus.framework-scout-4-multi-field-destabilization-may-2026"
        }
      ]
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
      "from": "c23-sdc-prime2",
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
    },
    {
      "link_kind": "depends-on",
      "from": "s-exhaust-colocation",
      "to": "s-exhaust-coherence",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "s-noise",
      "to": "s-cumulant-derive",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "s-cc-007",
      "to": "path-a",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "s-dd-001",
      "to": "path-b",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "s-dd-002",
      "to": "path-b",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "s-dd-002",
      "to": "s-dd-001",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "s-dd-003",
      "to": "path-b",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "s-dd-004",
      "to": "path-b",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "s-cc-002prime",
      "to": "path-b",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "s-am-008",
      "to": "path-a",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "s-am-009",
      "to": "path-a",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "s-am-010",
      "to": "path-a",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "s-hsb-002b",
      "to": "s-cc-002",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "s-cc-001",
      "to": "s-cc-002",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "s-cc-001",
      "to": "s-cc-004",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "op-ck",
      "to": "k7",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "mech.cusp-core-resolution",
      "to": "f11",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "mech.tear-puncture-afterglow",
      "to": "f06",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "mech.e-snap-chain",
      "to": "f08",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "mech.e-snap-universality",
      "to": "f08",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "mech.mond-a0-leakage",
      "to": "f11",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "mech.bh-area-law-edge-modes",
      "to": "mech.bh-entropy",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "mech.bh-rt-surface-anchor",
      "to": "mech.bh-entropy",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "mech.bh-so14-phase-space-protected",
      "to": "mech.bh-entropy",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "mech.bh-radion-frozen-boundary",
      "to": "mech.bh-entropy",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "mech.bh-quarter-prefactor-invariance",
      "to": "mech.bh-entropy",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "mech.bh-quarter-prefactor-microcanonical",
      "to": "mech.bh-entropy",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "sf-g2",
      "to": "sf-g1",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "k7",
      "to": "sf-d0",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "sf-d1",
      "to": "gut-box-occupant",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "sf-d2",
      "to": "gut-box-occupant",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "sf-mix-002",
      "to": "sf-mix-001",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "sf-mix-003",
      "to": "sf-mix-002",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "sf-mm-003",
      "to": "sf-mm-002",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "depends-on",
      "from": "sf-mm-003",
      "to": "s-mm-cr",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "supports",
      "from": "t2.7",
      "to": "k4",
      "support_group": "k4-basis",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked"
    },
    {
      "link_kind": "supports",
      "from": "t2.8",
      "to": "k4",
      "support_group": "k4-basis",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked"
    },
    {
      "link_kind": "supports",
      "from": "t1.5",
      "to": "k6",
      "support_group": "k6-basis",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked"
    },
    {
      "link_kind": "supports",
      "from": "t1.3",
      "to": "k9",
      "support_group": "k9-basis",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked"
    },
    {
      "link_kind": "supports",
      "from": "t3.6",
      "to": "k18",
      "support_group": "k18-basis",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "supports",
      "from": "k3-prime2",
      "to": "k1",
      "support_group": "k1-basis",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "independently-rechecked"
    },
    {
      "link_kind": "supports",
      "from": "im.israel-1966-junction",
      "to": "k3-prime2",
      "support_group": "k3-prime2-basis",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked"
    },
    {
      "link_kind": "supports",
      "from": "im.rs1999-critical-tension",
      "to": "k3-prime2",
      "support_group": "k3-prime2-basis",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked"
    },
    {
      "link_kind": "supports",
      "from": "im.karch-randall-2001-tension-position",
      "to": "k3-prime2",
      "support_group": "k3-prime2-basis",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked"
    },
    {
      "link_kind": "supports",
      "from": "im.goldberger-wise-effective-tension",
      "to": "k3-prime2",
      "support_group": "k3-prime2-basis",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked"
    },
    {
      "link_kind": "supports",
      "from": "k3-prime2",
      "to": "departure.k3-prime-idealization",
      "support_group": "departure-basis",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "independently-rechecked"
    },
    {
      "link_kind": "supports",
      "from": "im.karch-randall-2001-tension-position",
      "to": "departure.k3-prime-idealization",
      "support_group": "departure-basis",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked"
    },
    {
      "link_kind": "supports",
      "from": "p3",
      "to": "k5",
      "support_group": "k5-basis",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked"
    },
    {
      "link_kind": "supports",
      "from": "t3.4",
      "to": "k10",
      "support_group": "k10-basis",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "supports",
      "from": "k6",
      "to": "k10",
      "support_group": "k10-basis",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "corroborated"
    },
    {
      "link_kind": "supports",
      "from": "k6",
      "to": "k12",
      "support_group": "k12-basis",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "corroborated"
    },
    {
      "link_kind": "supports",
      "from": "t2.2",
      "to": "k12",
      "support_group": "k12-basis",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked"
    },
    {
      "link_kind": "supports",
      "from": "k6",
      "to": "k13",
      "support_group": "k13-basis",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "corroborated"
    },
    {
      "link_kind": "supports",
      "from": "t3.4",
      "to": "k13",
      "support_group": "k13-basis",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "supports",
      "from": "t1.1",
      "to": "k13",
      "support_group": "k13-basis",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked"
    },
    {
      "link_kind": "supports",
      "from": "k4",
      "to": "k14",
      "support_group": "k14-basis",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "corroborated"
    },
    {
      "link_kind": "supports",
      "from": "t2.8",
      "to": "k14",
      "support_group": "k14-basis",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked"
    },
    {
      "link_kind": "supports",
      "from": "t2.7",
      "to": "k11",
      "support_group": "k11-basis",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked"
    },
    {
      "link_kind": "supports",
      "from": "k4",
      "to": "k11",
      "support_group": "k11-basis",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "corroborated"
    },
    {
      "link_kind": "supports",
      "from": "f20",
      "to": "k15",
      "support_group": "k15-basis",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "supports",
      "from": "k1",
      "to": "k2",
      "support_group": "k2-basis",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "supports",
      "from": "t2.5",
      "to": "k2",
      "support_group": "k2-basis",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked"
    },
    {
      "link_kind": "supports",
      "from": "k1",
      "to": "k7",
      "support_group": "k7-basis",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "supports",
      "from": "t3.4",
      "to": "k7",
      "support_group": "k7-basis",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "supports",
      "from": "sf-d0",
      "to": "k7",
      "support_group": "k7-basis",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked"
    },
    {
      "link_kind": "supports",
      "from": "k2",
      "to": "k16",
      "support_group": "k16-basis",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "supports",
      "from": "k7",
      "to": "k17",
      "support_group": "k17-basis",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "supports",
      "from": "k4",
      "to": "k17",
      "support_group": "k17-basis",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "corroborated"
    },
    {
      "link_kind": "supports",
      "from": "t2.7",
      "to": "k17",
      "support_group": "k17-basis",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked"
    },
    {
      "link_kind": "supports",
      "from": "b15",
      "to": "c06a",
      "support_group": "c06a-basis",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked"
    },
    {
      "link_kind": "supports",
      "from": "b15",
      "to": "c09",
      "support_group": "c09-basis",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked"
    },
    {
      "link_kind": "supports",
      "from": "b14",
      "to": "c07b",
      "support_group": "c07b-basis",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked"
    },
    {
      "link_kind": "supports",
      "from": "p3",
      "to": "c20a",
      "support_group": "c20a-basis",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked"
    },
    {
      "link_kind": "supports",
      "from": "b16",
      "to": "mech.cold-spot-isw",
      "support_group": "mech.cold-spot-isw-basis",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked"
    },
    {
      "link_kind": "supports",
      "from": "b19",
      "to": "mech.stellar-cooling-kk",
      "support_group": "mech.stellar-cooling-kk-basis",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked"
    },
    {
      "link_kind": "supports",
      "from": "mech.bh-area-law-edge-modes",
      "to": "mech.bh-entropy",
      "support_group": "mech.bh-entropy-basis",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "supports",
      "from": "mech.bh-rt-surface-anchor",
      "to": "mech.bh-entropy",
      "support_group": "mech.bh-entropy-basis",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "supports",
      "from": "mech.bh-so14-phase-space-protected",
      "to": "mech.bh-entropy",
      "support_group": "mech.bh-entropy-basis",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "supports",
      "from": "mech.bh-radion-frozen-boundary",
      "to": "mech.bh-entropy",
      "support_group": "mech.bh-entropy-basis",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "supports",
      "from": "mech.bh-quarter-prefactor-invariance",
      "to": "mech.bh-entropy",
      "support_group": "mech.bh-entropy-basis",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "supports",
      "from": "mech.bh-quarter-prefactor-microcanonical",
      "to": "mech.bh-entropy",
      "support_group": "mech.bh-entropy-basis",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "supports",
      "from": "c01",
      "to": "f01",
      "support_group": "f01-g0",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "supports",
      "from": "c02",
      "to": "f02",
      "support_group": "f02-g0",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "supports",
      "from": "c03",
      "to": "f03",
      "support_group": "f03-g0",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "supports",
      "from": "c04",
      "to": "f04",
      "support_group": "f04-g0",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "supports",
      "from": "c06a",
      "to": "f06",
      "support_group": "f06-g0",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "corroborated"
    },
    {
      "link_kind": "supports",
      "from": "c06b",
      "to": "f06",
      "support_group": "f06-g1",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "supports",
      "from": "mech.tear-puncture-afterglow",
      "to": "f06",
      "support_group": "f06-g2",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "supports",
      "from": "c07a",
      "to": "f07",
      "support_group": "f07-g0",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "supports",
      "from": "c07b",
      "to": "f07",
      "support_group": "f07-g1",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "corroborated"
    },
    {
      "link_kind": "supports",
      "from": "c08",
      "to": "f08",
      "support_group": "f08-g0",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "supports",
      "from": "mech.e-snap-chain",
      "to": "f08",
      "support_group": "f08-g0",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "supports",
      "from": "mech.e-snap-universality",
      "to": "f08",
      "support_group": "f08-g0",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "supports",
      "from": "c09",
      "to": "f09",
      "support_group": "f09-g0",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "corroborated"
    },
    {
      "link_kind": "supports",
      "from": "c10",
      "to": "f10",
      "support_group": "f10-g0",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "supports",
      "from": "c11",
      "to": "f11",
      "support_group": "f11-g0",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "supports",
      "from": "mech.stellar-cooling-kk",
      "to": "f11",
      "support_group": "f11-g1",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "corroborated"
    },
    {
      "link_kind": "supports",
      "from": "mech.cusp-core-resolution",
      "to": "f11",
      "support_group": "f11-g2",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "supports",
      "from": "mech.mond-a0-leakage",
      "to": "f11",
      "support_group": "f11-g3",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "supports",
      "from": "c15",
      "to": "f15",
      "support_group": "f15-g0",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "supports",
      "from": "mech.cold-spot-isw",
      "to": "f16",
      "support_group": "f16-g0",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "corroborated"
    },
    {
      "link_kind": "supports",
      "from": "mech.bh-entropy",
      "to": "f17",
      "support_group": "f17-g0",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "supports",
      "from": "c18a",
      "to": "f18",
      "support_group": "f18-g0",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "supports",
      "from": "c18b",
      "to": "f18",
      "support_group": "f18-g0",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "supports",
      "from": "mech.bh-entropy",
      "to": "f18",
      "support_group": "f18-g1",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "supports",
      "from": "c20a",
      "to": "f20",
      "support_group": "f20-g0",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "corroborated"
    },
    {
      "link_kind": "supports",
      "from": "c20b",
      "to": "f20",
      "support_group": "f20-g0",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "supports",
      "from": "c20c",
      "to": "f20",
      "support_group": "f20-g0",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "supports",
      "from": "c20d",
      "to": "f20",
      "support_group": "f20-g0",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "supports",
      "from": "c20e",
      "to": "f20",
      "support_group": "f20-g0",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "supports",
      "from": "c20g",
      "to": "f20",
      "support_group": "f20-g0",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "supports",
      "from": "c20f-i",
      "to": "f20",
      "support_group": "f20-g0",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "supports",
      "from": "c20f-ii",
      "to": "f20",
      "support_group": "f20-g0",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "supports",
      "from": "c20f-iii",
      "to": "f20",
      "support_group": "f20-g0",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "supports",
      "from": "c23-sdc-prime2",
      "to": "f23",
      "support_group": "f23-g0",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "supports",
      "from": "k3-prime2",
      "to": "k3b-reconciliation2",
      "support_group": "k3b-reconciliation2-basis",
      "source_id": "corpus.sf-k3b-001",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "independently-rechecked"
    },
    {
      "link_kind": "supports",
      "from": "im.karch-randall-2001-tension-position",
      "to": "k3b-reconciliation2",
      "support_group": "k3b-reconciliation2-basis",
      "source_id": "corpus.sf-k3b-001",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked"
    },
    {
      "link_kind": "supports",
      "from": "im.goldberger-wise-effective-tension",
      "to": "k3b-reconciliation2",
      "support_group": "k3b-reconciliation2-basis",
      "source_id": "corpus.sf-k3b-001",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked"
    },
    {
      "link_kind": "supports",
      "from": "k3b-coordinate-dictionary",
      "to": "k3b-reconciliation2",
      "support_group": "k3b-reconciliation2-basis",
      "source_id": "corpus.sf-k3b-001",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "independently-rechecked"
    },
    {
      "link_kind": "supports",
      "from": "k3b-reconciliation2",
      "to": "c23-sdc-prime2",
      "support_group": "c23-sdc-prime2-basis",
      "source_id": "corpus.sf-k3b-001",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "supports",
      "from": "im.karch-randall-2001-tension-position",
      "to": "c23-sdc-prime2",
      "support_group": "c23-sdc-prime2-basis",
      "source_id": "corpus.sf-k3b-001",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked"
    },
    {
      "link_kind": "supports",
      "from": "c23-wgc",
      "to": "f23",
      "support_group": "f23-g0",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "supports",
      "from": "k7",
      "to": "pred.c-rd-1",
      "support_group": "pred.c-rd-1-g0",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "supports",
      "from": "c02",
      "to": "pred.lambda-1-4",
      "support_group": "pred.lambda-1-4-g0",
      "source_id": "trellis.v4-16",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "supports",
      "from": "ev.dead.er-cc001-gamma-z0-stabilization",
      "to": "block.er-cc001",
      "support_group": "block.er-cc001-g0",
      "source_id": "corpus.gemini-cc-run-1-april-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked"
    },
    {
      "link_kind": "supports",
      "from": "ev.dead.er-cc002-goldberger-wise",
      "to": "block.er-cc002",
      "support_group": "block.er-cc002-g0",
      "source_id": "corpus.gemini-cc-run-1-april-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked"
    },
    {
      "link_kind": "supports",
      "from": "ev.dead.er-mm001-antisymmetry-vanishing",
      "to": "block.er-mm001",
      "support_group": "block.er-mm001-g0",
      "source_id": "corpus.gemini-dr-vi-rewrite-route-april-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked"
    },
    {
      "link_kind": "supports",
      "from": "ev.dead.er-mm002-local-algebraic-redefinition",
      "to": "block.er-mm002-local-algebraic-ultralocality",
      "support_group": "block.er-mm002-local-algebraic-ultralocality-g0",
      "source_id": "corpus.chatgpt-track-a-no-go-april-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked"
    },
    {
      "link_kind": "supports",
      "from": "ev.dead.er-mm003-pointwise-schur",
      "to": "block.er-mm003",
      "support_group": "block.er-mm003-g0",
      "source_id": "corpus.chatgpt-track-a-no-go-april-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked"
    },
    {
      "link_kind": "supports",
      "from": "ev.dead.er-mix001-dbi-pi-chi-mixing",
      "to": "block.er-mix001",
      "support_group": "block.er-mix001-g0",
      "source_id": "corpus.chatgpt-s-mix-001-computation-report-april-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked"
    },
    {
      "link_kind": "supports",
      "from": "ev.dead.er-mix002-einstein-cartan-torsion",
      "to": "block.er-mix002",
      "support_group": "block.er-mix002-g0",
      "source_id": "corpus.chatgpt-s-mix-003-torsion-elimination-computation-april-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked"
    },
    {
      "link_kind": "supports",
      "from": "ev.dead.er-mix003-naive-scalar-kinetic",
      "to": "block.er-mix003",
      "support_group": "block.er-mix003-g0",
      "source_id": "corpus.langenscheidt-2019-arxiv-1907-10440",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked"
    },
    {
      "link_kind": "supports",
      "from": "ev.dead.er-wd001-sub-chandra-wd-detonation",
      "to": "block.er-wd001",
      "support_group": "block.er-wd001-g0",
      "source_id": "corpus.framework-scout-sub-chandrasekhar-type-ia-may-12-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked"
    },
    {
      "link_kind": "supports",
      "from": "ev.dead.er-cosm001-integrated-f-buildup.recited",
      "to": "block.er-cosm001",
      "support_group": "block.er-cosm001-g0",
      "source_id": "corpus.f12-reconciliation-scout-may-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked"
    },
    {
      "link_kind": "supports",
      "from": "ev.dead.er-cosm002-trace-channel-gradient.recited",
      "to": "block.er-cosm002",
      "support_group": "block.er-cosm002-g0",
      "source_id": "corpus.f12-reconciliation-scout-may-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked"
    },
    {
      "link_kind": "supports",
      "from": "ev.dead.er-cosm003-cosmological-averaging.recited",
      "to": "block.er-cosm003",
      "support_group": "block.er-cosm003-g0",
      "source_id": "corpus.f12-reconciliation-scout-may-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked"
    },
    {
      "link_kind": "supports",
      "from": "ev.dead.er-cosm004-intra-sector-slow-roll.recited",
      "to": "block.er-cosm004",
      "support_group": "block.er-cosm004-g0",
      "source_id": "corpus.f12-reconciliation-scout-may-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked"
    },
    {
      "link_kind": "supports",
      "from": "ev.dead.er-wgc001-hydrodynamic-bkm",
      "to": "block.er-wgc001-l2-vs-linfinity",
      "support_group": "block.er-wgc001-l2-vs-linfinity-g0",
      "source_id": "corpus.hsb-karch-randall-moduli-geometry-as-l-surrogate-scout-may-1",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "checked"
    },
    {
      "link_kind": "supports",
      "from": "ev.dead.er-de001-bh-mechanism-evolving-de.recited",
      "to": "block.er-de001",
      "support_group": "block.er-de001-g0",
      "source_id": "corpus.framework-scout-1-bh-mechanism-may-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "supports",
      "from": "ev.dead.er-ht001-nede-thermal-de.recited",
      "to": "block.er-ht001",
      "support_group": "block.er-ht001-g0",
      "source_id": "corpus.framework-scout-3-nede-thermal-may-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "supports",
      "from": "ev.dead.er-de002-vacuum-driven-reheating.recited",
      "to": "block.er-de002",
      "support_group": "block.er-de002-g0",
      "source_id": "corpus.framework-scout-1-bh-mechanism-may-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "supports",
      "from": "ev.dead.er-de003-quantum-foam-de.recited",
      "to": "block.er-de003",
      "support_group": "block.er-de003-g0",
      "source_id": "corpus.framework-scout-1-bh-mechanism-may-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "supports",
      "from": "ev.dead.er-de004-multi-modulus-slow-roll.recited",
      "to": "block.er-de004",
      "support_group": "block.er-de004-g0",
      "source_id": "corpus.framework-scout-4-multi-field-destabilization-may-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "supports",
      "from": "ev.dead.er-de005-hairon-quintessence.recited",
      "to": "block.er-de005",
      "support_group": "block.er-de005-g0",
      "source_id": "corpus.framework-scout-4-multi-field-destabilization-may-2026",
      "contributor_id": "author:dg-trellis",
      "declared_grade": "asserted"
    },
    {
      "link_kind": "supports",
      "from": "ev.dead.er-de006-hairon-multi-field.recited",
      "to": "block.er-de006",
      "support_group": "block.er-de006-g0",
      "source_id": "corpus.framework-scout-4-multi-field-destabilization-may-2026",
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
    },
    {
      "superseded_ref": "ev.dead.er-cosm001-integrated-f-buildup",
      "successor_ref": "ev.dead.er-cosm001-integrated-f-buildup.recited",
      "at_state": "dg@audit-prep",
      "reason": "Citation granularity correction (audit-prep Track 1, following analysis-1 Read 2's contamination finding): the trellis's own \"Source\" column names a specific Framework Scout report (corpus.f12-reconciliation-scout-may-2026), not the generic sub-Chandrasekhar Type Ia scout this claim was originally mapped to at Stage 3c Track 1 for lack of a catalogued source row. Re-cited to the honest, specific artifact; the superseded claim's mis-citation stays in history, not deleted."
    },
    {
      "superseded_ref": "ev.dead.er-cosm002-trace-channel-gradient",
      "successor_ref": "ev.dead.er-cosm002-trace-channel-gradient.recited",
      "at_state": "dg@audit-prep",
      "reason": "Citation granularity correction (audit-prep Track 1, following analysis-1 Read 2's contamination finding): the trellis's own \"Source\" column names a specific Framework Scout report (corpus.f12-reconciliation-scout-may-2026), not the generic sub-Chandrasekhar Type Ia scout this claim was originally mapped to at Stage 3c Track 1 for lack of a catalogued source row. Re-cited to the honest, specific artifact; the superseded claim's mis-citation stays in history, not deleted."
    },
    {
      "superseded_ref": "ev.dead.er-cosm003-cosmological-averaging",
      "successor_ref": "ev.dead.er-cosm003-cosmological-averaging.recited",
      "at_state": "dg@audit-prep",
      "reason": "Citation granularity correction (audit-prep Track 1, following analysis-1 Read 2's contamination finding): the trellis's own \"Source\" column names a specific Framework Scout report (corpus.f12-reconciliation-scout-may-2026), not the generic sub-Chandrasekhar Type Ia scout this claim was originally mapped to at Stage 3c Track 1 for lack of a catalogued source row. Re-cited to the honest, specific artifact; the superseded claim's mis-citation stays in history, not deleted."
    },
    {
      "superseded_ref": "ev.dead.er-cosm004-intra-sector-slow-roll",
      "successor_ref": "ev.dead.er-cosm004-intra-sector-slow-roll.recited",
      "at_state": "dg@audit-prep",
      "reason": "Citation granularity correction (audit-prep Track 1, following analysis-1 Read 2's contamination finding): the trellis's own \"Source\" column names a specific Framework Scout report (corpus.f12-reconciliation-scout-may-2026), not the generic sub-Chandrasekhar Type Ia scout this claim was originally mapped to at Stage 3c Track 1 for lack of a catalogued source row. Re-cited to the honest, specific artifact; the superseded claim's mis-citation stays in history, not deleted."
    },
    {
      "superseded_ref": "ev.f12",
      "successor_ref": "ev.f12.recited",
      "at_state": "dg@audit-prep",
      "reason": "Citation granularity correction (audit-prep Track 1, following analysis-1 Read 2's contamination finding): the trellis's own \"Source\" column names a specific Framework Scout report (corpus.f12-reconciliation-scout-may-2026), not the generic sub-Chandrasekhar Type Ia scout this claim was originally mapped to at Stage 3c Track 1 for lack of a catalogued source row. Re-cited to the honest, specific artifact; the superseded claim's mis-citation stays in history, not deleted."
    },
    {
      "superseded_ref": "ev.dead.er-de001-bh-mechanism-evolving-de",
      "successor_ref": "ev.dead.er-de001-bh-mechanism-evolving-de.recited",
      "at_state": "dg@audit-prep",
      "reason": "Citation granularity correction (audit-prep Track 1, following analysis-1 Read 2's contamination finding): the trellis's own \"Source\" column names a specific Framework Scout report (corpus.framework-scout-1-bh-mechanism-may-2026), not the generic sub-Chandrasekhar Type Ia scout this claim was originally mapped to at Stage 3c Track 1 for lack of a catalogued source row. Re-cited to the honest, specific artifact; the superseded claim's mis-citation stays in history, not deleted."
    },
    {
      "superseded_ref": "ev.dead.er-de002-vacuum-driven-reheating",
      "successor_ref": "ev.dead.er-de002-vacuum-driven-reheating.recited",
      "at_state": "dg@audit-prep",
      "reason": "Citation granularity correction (audit-prep Track 1, following analysis-1 Read 2's contamination finding): the trellis's own \"Source\" column names a specific Framework Scout report (corpus.framework-scout-1-bh-mechanism-may-2026), not the generic sub-Chandrasekhar Type Ia scout this claim was originally mapped to at Stage 3c Track 1 for lack of a catalogued source row. Re-cited to the honest, specific artifact; the superseded claim's mis-citation stays in history, not deleted."
    },
    {
      "superseded_ref": "ev.dead.er-de003-quantum-foam-de",
      "successor_ref": "ev.dead.er-de003-quantum-foam-de.recited",
      "at_state": "dg@audit-prep",
      "reason": "Citation granularity correction (audit-prep Track 1, following analysis-1 Read 2's contamination finding): the trellis's own \"Source\" column names a specific Framework Scout report (corpus.framework-scout-1-bh-mechanism-may-2026), not the generic sub-Chandrasekhar Type Ia scout this claim was originally mapped to at Stage 3c Track 1 for lack of a catalogued source row. Re-cited to the honest, specific artifact; the superseded claim's mis-citation stays in history, not deleted."
    },
    {
      "superseded_ref": "ev.dead.er-ht001-nede-thermal-de",
      "successor_ref": "ev.dead.er-ht001-nede-thermal-de.recited",
      "at_state": "dg@audit-prep",
      "reason": "Citation granularity correction (audit-prep Track 1, following analysis-1 Read 2's contamination finding): the trellis's own \"Source\" column names a specific Framework Scout report (corpus.framework-scout-3-nede-thermal-may-2026), not the generic sub-Chandrasekhar Type Ia scout this claim was originally mapped to at Stage 3c Track 1 for lack of a catalogued source row. Re-cited to the honest, specific artifact; the superseded claim's mis-citation stays in history, not deleted."
    },
    {
      "superseded_ref": "ev.dead.er-de004-multi-modulus-slow-roll",
      "successor_ref": "ev.dead.er-de004-multi-modulus-slow-roll.recited",
      "at_state": "dg@audit-prep",
      "reason": "Citation granularity correction (audit-prep Track 1, following analysis-1 Read 2's contamination finding): the trellis's own \"Source\" column names a specific Framework Scout report (corpus.framework-scout-4-multi-field-destabilization-may-2026), not the generic sub-Chandrasekhar Type Ia scout this claim was originally mapped to at Stage 3c Track 1 for lack of a catalogued source row. Re-cited to the honest, specific artifact; the superseded claim's mis-citation stays in history, not deleted."
    },
    {
      "superseded_ref": "ev.dead.er-de005-hairon-quintessence",
      "successor_ref": "ev.dead.er-de005-hairon-quintessence.recited",
      "at_state": "dg@audit-prep",
      "reason": "Citation granularity correction (audit-prep Track 1, following analysis-1 Read 2's contamination finding): the trellis's own \"Source\" column names a specific Framework Scout report (corpus.framework-scout-4-multi-field-destabilization-may-2026), not the generic sub-Chandrasekhar Type Ia scout this claim was originally mapped to at Stage 3c Track 1 for lack of a catalogued source row. Re-cited to the honest, specific artifact; the superseded claim's mis-citation stays in history, not deleted."
    },
    {
      "superseded_ref": "ev.dead.er-de006-hairon-multi-field",
      "successor_ref": "ev.dead.er-de006-hairon-multi-field.recited",
      "at_state": "dg@audit-prep",
      "reason": "Citation granularity correction (audit-prep Track 1, following analysis-1 Read 2's contamination finding): the trellis's own \"Source\" column names a specific Framework Scout report (corpus.framework-scout-4-multi-field-destabilization-may-2026), not the generic sub-Chandrasekhar Type Ia scout this claim was originally mapped to at Stage 3c Track 1 for lack of a catalogued source row. Re-cited to the honest, specific artifact; the superseded claim's mis-citation stays in history, not deleted."
    },
    {
      "superseded_ref": "k3",
      "successor_ref": "k3-prime",
      "at_state": "dg@landing-1",
      "reason": "K3 superseded by the operator's ruling R2 (landing-1), following two independent adversarial audits (PK-AUD-K3-001, PK-AUD-K3-002; docs/audits/). K3's flat text (T3 = 6/(kappa5^2 L), independent of z0) conflates the RS flat-sliced case (true, exactly) with the framework's actual Karch-Randall-type declared setting (false as a fixed number; the KR junction condition fixes a relation among T3, z0, and the induced AdS4 radius, not a single number) and elides the physical dS-sliced background entirely. K3-prime states all three cases explicitly (flat, KR/AdS4, physical dS), reads the z0-independence claim correctly as moduli-flatness rather than a numerical constant, and carries the state-dependence channel (T_eff = T3 + V(v)) K3's own text foreclosed too broadly. The superseded claim's original text stays in history, not deleted; every link previously citing it is rewired to K3-prime (the k1-basis supports link), per the CC-1 v4.14/v4.16 zero-dangling-links precedent."
    },
    {
      "superseded_ref": "c23-sdc",
      "successor_ref": "c23-sdc-prime",
      "at_state": "dg@shore-k3b",
      "reason": "C23-SDC refined by this shore's reconciliation of the characterized gap s-k3-backreact (docs/shores/SF-K3B-001.md). C23-SDC's own geodesic-distance/SDC-decay content stands unchanged; c23-sdc-prime adds the trigger law this shore derives (a brane-localized vacuum-energy perturbation delta V drives z0 via the K3 audits' own backreaction relation, composing with the geodesic-distance formula by the chain rule to give delta d directly in terms of delta V), sharpening C23-SDC's own S-CC-002 conditionality without restructuring it. The superseded claim's original text stays in history, not deleted; both links previously citing it (the depends-on and supports links into F23) are rewired to c23-sdc-prime, per the K3/K3-prime zero-dangling-links precedent."
    },
    {
      "superseded_ref": "k3-prime",
      "successor_ref": "k3-prime2",
      "at_state": "dg@landing-2",
      "reason": "K3-prime's part (iii) textually corrected (landing-2 Track B), following three convergent adversarial audits of the shore derivation SF-K3B-001 that independently re-derived K3-prime's own response coefficient while checking the shore's composition (PK-AUD-K3B-001, PK-AUD-K3B-002, PK-AUD-K3B-003; docs/audits/). K3-prime's part (iii) stated the position-sensitivity enhancement as cosh^2(z0/L); the correct coefficient, differentiating the same part (ii) coth junction law K3-prime itself states, is sinh^2(u_b), with an explicit sign for delta V added to the brane tension: delta u_b = -(kappa_5^2 L/6) sinh^2(u_b) delta V. All three audits converge on this correction independently; Kimi's run (PK-AUD-K3B-003, S0.3) additionally exhibits the identically-equal form (kappa_5^2 L/6)(T_c/T_eff)^2 cosh^2(u_b), showing the original cosh^2 label was a 10^-64 relative discrepancy at the framework's own working point with an untracked sign, not a rounding matter. Parts (i) and (ii) are unchanged; k3-prime2 carries forward the same checking records for those parts and adds three new ones for the corrected part (iii). The superseded claim's original text stays in history, not deleted; every link previously citing it (the k1-basis supports link, the k3-prime-basis group of four supports links now k3-prime2-basis, the departure-basis and k3b-reconciliation-basis supports links) rewired to k3-prime2, per the K3/K3-prime zero-dangling-links precedent."
    },
    {
      "superseded_ref": "k3b-reconciliation",
      "successor_ref": "k3b-reconciliation2",
      "at_state": "dg@landing-2",
      "reason": "K3B-RECONCILIATION superseded by the corrected composition (landing-2 Track C-1), following three convergent adversarial audits (PK-AUD-K3B-001, PK-AUD-K3B-002, PK-AUD-K3B-003) that independently found the shore's own chain-rule step (delta ln(z_0/L) to delta u_b/u_b) algebraically illegitimate: the correct composition, given d = M_Pl u_b (k3b-coordinate-dictionary's exact identity) and the corrected sinh^2(u_b) response (k3-prime2), is delta d = M_Pl delta u_b, not delta d = (M_Pl/u_b) delta u_b, an underestimate by a factor of u_b, approximately 74. K3B-RECONCILIATION2 carries the corrected linear and exact forms verbatim from the audits. The superseded claim's original text stays in history, not deleted; every link previously citing it (the four-link k3b-reconciliation-basis group now k3b-reconciliation2-basis, the c23-sdc-prime-basis supports link) rewired to k3b-reconciliation2, per the K3/K3-prime zero-dangling-links precedent."
    },
    {
      "superseded_ref": "c23-sdc-prime",
      "successor_ref": "c23-sdc-prime2",
      "at_state": "dg@landing-2",
      "reason": "C23-SDC-prime superseded by the exact trigger law (landing-2 Track C-2). C23-SDC-prime's own original geodesic-distance/SDC-decay content (C23-SDC's, unchanged since Stage 3 or 3.5) stands; its own added trigger-law framing (rate amplification on an existing trigger, not a new activation threshold, evaluated at the linearized scale) is superseded, following the three K3B audits' convergent finding that the linearization carries a 44 percent error at its own claimed matching scale and is parametrically invalid above it (the rate-not-threshold framing itself withdrawn separately as dead.c23b-trigger-rate-not-threshold). C23-SDC-prime2 carries the corrected exact-law trigger statement verbatim from the audits, plus the residual regime gap (s-k3b-exact-regime-gap) the exact law does not cover. The superseded claim's original text stays in history, not deleted; both links previously citing it (the depends-on and supports links into F23, and the c23-sdc-prime-basis supports links from k3b-reconciliation2 and the Karch-Randall import) rewired to c23-sdc-prime2, per the K3/K3-prime zero-dangling-links precedent."
    }
  ],
  "withdrawals": [
    {
      "claim_ref": "dead.geff-amplification",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "G_eff amplification is absurd at ~10^40 G_N. The coherent-matter coupling enters the angular (torsion) channel, not the radial channel that sources G_eff; K2 forbids any channel from amplifying, modifying, or state-dependently varying the gravitational constant itself.",
      "reinstatement_condition": {
        "condition_kind": "entry-at-grade",
        "target_ref": "dead.geff-amplification",
        "minimum_grade": "checked"
      }
    },
    {
      "claim_ref": "dead.higgs-conflation",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "The SO(1,4) Higgs is distinct from the electroweak Higgs (K4, T2.8). Conflating them produces white-dwarf mass-radius cliffs, spurious G_eff spikes, and premature pycnonuclear detonation not seen in any real degenerate star.",
      "reinstatement_condition": {
        "condition_kind": "entry-at-grade",
        "target_ref": "dead.higgs-conflation",
        "minimum_grade": "checked"
      }
    },
    {
      "claim_ref": "dead.warp-factor-alpha",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "The Omega^4 factor from sqrt(-g) exactly cancels the Omega^-4 factor from F^{mu nu}F_{mu nu}; the tree-level warp-factor dependence vanishes identically, leaving no physical z_0-dependent coupling at this order.",
      "reinstatement_condition": {
        "condition_kind": "entry-at-grade",
        "target_ref": "dead.warp-factor-alpha",
        "minimum_grade": "checked"
      }
    },
    {
      "claim_ref": "dead.dbi-radius-inflation",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "r_BI is proportional to T_3^{-1/4}; inflating r_BI from 10^-33 to 10^-11 cm would require a T_3 suppression of 10^88, which is not physically available from any mechanism in the construction.",
      "reinstatement_condition": {
        "condition_kind": "entry-at-grade",
        "target_ref": "dead.dbi-radius-inflation",
        "minimum_grade": "checked"
      }
    },
    {
      "claim_ref": "dead.t3-variation-alpha",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "T_3 is held constant by the Israel junction conditions at the brane; there is no dynamical T_3 variation available to drive alpha proportional to T_3^{-1}.",
      "reinstatement_condition": {
        "condition_kind": "entry-at-grade",
        "target_ref": "dead.t3-variation-alpha",
        "minimum_grade": "checked"
      }
    },
    {
      "claim_ref": "dead.luna-geometric-truncation",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "The geometric-truncation model overshoots the observed LUNA screening enhancement by a factor of 10^9, a Volume Bug class failure (a volumetric rather than surface/angular scaling was used where the mechanism requires the latter).",
      "reinstatement_condition": {
        "condition_kind": "entry-at-grade",
        "target_ref": "dead.luna-geometric-truncation",
        "minimum_grade": "checked"
      }
    },
    {
      "claim_ref": "dead.luna-perturbative-torsion",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "The perturbative torsion channel is G/c^4 suppressed, 10^40 times too weak to reproduce the observed LUNA screening enhancement.",
      "reinstatement_condition": {
        "condition_kind": "entry-at-grade",
        "target_ref": "dead.luna-perturbative-torsion",
        "minimum_grade": "checked"
      }
    },
    {
      "claim_ref": "dead.luna-debye-coherence",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "No correlation between the Debye temperature and the screening enhancement U_e is found in the data; diamond, which the mechanism predicts should show strong coherence, gives zero enhancement.",
      "reinstatement_condition": {
        "condition_kind": "entry-at-grade",
        "target_ref": "dead.luna-debye-coherence",
        "minimum_grade": "checked"
      }
    },
    {
      "claim_ref": "dead.torsion-dark-matter",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "The torsion-as-dark-matter hypothesis is killed on five separate axes documented in the Torsion DM Diagnostic report (galactic rotation curve normalization, cluster lensing profile, structure-formation timing, torsion-sign consistency, and CMB power-spectrum compatibility all independently fail).",
      "reinstatement_condition": {
        "condition_kind": "entry-at-grade",
        "target_ref": "dead.torsion-dark-matter",
        "minimum_grade": "checked"
      }
    },
    {
      "claim_ref": "dead.torsion-mond-a0",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "The torsion-derived acceleration scale comes out at ~7e-23 cm/s^2, 14 orders of magnitude below the empirical MOND a_0 ~ 1.2e-8 cm/s^2.",
      "reinstatement_condition": {
        "condition_kind": "entry-at-grade",
        "target_ref": "dead.torsion-mond-a0",
        "minimum_grade": "checked"
      }
    },
    {
      "claim_ref": "dead.zero-point-cancellation",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "The proposed pairwise cancellation violates the Reeh-Schlieder theorem's cluster/entanglement structure and would additionally require unbroken supersymmetry, which the framework does not have.",
      "reinstatement_condition": {
        "condition_kind": "entry-at-grade",
        "target_ref": "dead.zero-point-cancellation",
        "minimum_grade": "checked"
      }
    },
    {
      "claim_ref": "dead.dbi-mond",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "The DBI action is linear precisely in the low-acceleration-gradient regime where MOND requires nonlinearity; the DBI nonlinear regime activates at high field strength, the exact inverse of the MOND transition's location.",
      "reinstatement_condition": {
        "condition_kind": "entry-at-grade",
        "target_ref": "dead.dbi-mond",
        "minimum_grade": "checked"
      }
    },
    {
      "claim_ref": "dead.esnap-3d-volume",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "3D volume scaling gives E_snap ~ 10^57 to 10^63 erg, a trans-Planckian energy scale with no physical referent.",
      "reinstatement_condition": {
        "condition_kind": "entry-at-grade",
        "target_ref": "dead.esnap-3d-volume",
        "minimum_grade": "checked"
      }
    },
    {
      "claim_ref": "dead.esnap-atomic-area-law",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "Atomic area-law scaling gives E_snap ~ 10^38 erg, undershooting the observed transient energetics by 13 orders of magnitude.",
      "reinstatement_condition": {
        "condition_kind": "entry-at-grade",
        "target_ref": "dead.esnap-atomic-area-law",
        "minimum_grade": "checked"
      }
    },
    {
      "claim_ref": "dead.theal-naive-ml",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "The naive M-L scaling is a category error, giving t_heal ~ 10^-81 s, many orders removed from any physically meaningful timescale.",
      "reinstatement_condition": {
        "condition_kind": "entry-at-grade",
        "target_ref": "dead.theal-naive-ml",
        "minimum_grade": "checked"
      }
    },
    {
      "claim_ref": "dead.theal-pixel-counting",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "The pixel-counting estimate gives t_heal ~ 10^4 s, both numerically wrong and running in the wrong direction relative to the resolved t_heal = t_scrambling identification.",
      "reinstatement_condition": {
        "condition_kind": "entry-at-grade",
        "target_ref": "dead.theal-pixel-counting",
        "minimum_grade": "checked"
      }
    },
    {
      "claim_ref": "dead.transient-scrambling-identity",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "The KK scrambling time (~4 ms) is distinct by many orders of magnitude from the observed transient timescales (seconds to months); the two cannot be identified.",
      "reinstatement_condition": {
        "condition_kind": "entry-at-grade",
        "target_ref": "dead.transient-scrambling-identity",
        "minimum_grade": "checked"
      }
    },
    {
      "claim_ref": "dead.lambda4min-universal",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "A universal scaling requires an independent coupling-constant input at each physical scale; no such universal law is available from dimensional analysis alone.",
      "reinstatement_condition": {
        "condition_kind": "entry-at-grade",
        "target_ref": "dead.lambda4min-universal",
        "minimum_grade": "checked"
      }
    },
    {
      "claim_ref": "dead.bosenova-all-variants",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "Every examined bosenova variant gives F_Q = 2.56e8 against the required activation threshold of 10^32, a Volume Bug class deficit of 24 orders of magnitude.",
      "reinstatement_condition": {
        "condition_kind": "entry-at-grade",
        "target_ref": "dead.bosenova-all-variants",
        "minimum_grade": "checked"
      }
    },
    {
      "claim_ref": "dead.missing-bec-bulk-escape",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "The proposed bulk-escape channel requires baryon-number violation, which is not available anywhere in the construction.",
      "reinstatement_condition": {
        "condition_kind": "entry-at-grade",
        "target_ref": "dead.missing-bec-bulk-escape",
        "minimum_grade": "checked"
      }
    },
    {
      "claim_ref": "dead.kr-brane-reeh-schlieder",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "Donnelly-Freidel 4D edge modes replicate the same Reeh-Schlieder-preserving structure without requiring the KR brane; Occam's razor rules the brane not mandatory for this purpose.",
      "reinstatement_condition": {
        "condition_kind": "entry-at-grade",
        "target_ref": "dead.kr-brane-reeh-schlieder",
        "minimum_grade": "checked"
      }
    },
    {
      "claim_ref": "dead.route3-fixed-brane",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "Fixing the brane position severs the T^(5)_mu flux channel that the construction otherwise requires, an unacceptable structural cost.",
      "reinstatement_condition": {
        "condition_kind": "entry-at-grade",
        "target_ref": "dead.route3-fixed-brane",
        "minimum_grade": "checked"
      }
    },
    {
      "claim_ref": "dead.conjugate-baryogenesis-all",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "Five-axis kill. (1) Coset connectivity: pi_0 = pi_1 = pi_2 = 0 for the S^3 vacuum manifold, so no stable topological defect exists for the needed spatial isolation. (2) BD ghost resurrection: forcing CP-violating couplings degrades the Hamiltonian constraint to second-class, reviving the Boulware-Deser ghost. (3) Rank mismatch: SO(1,4) and SU(2)_L x U(1)_Y act on different internal spaces with no anomaly-free translation of torsion into electroweak Chern-Simons diffusion. (4) The QFI (Bures metric) is strictly positive-definite and cannot serve as a CP-odd source. (5) EWPT variant: a 100 GeV plasma thermalizes at ~1e-22 s, ten orders faster than the KK scrambling time, pinning the coherence fraction at f~0 so the VEV coupling never activates, and T2.8 forbids the gravitational VEV from modifying the electroweak sphaleron barrier in any case; even granting the conflation, VEV suppression drives E_sph toward zero, causing total baryon washout. B9 remains outside the framework's explanatory domain.",
      "reinstatement_condition": {
        "condition_kind": "entry-at-grade",
        "target_ref": "dead.conjugate-baryogenesis-all",
        "minimum_grade": "checked"
      }
    },
    {
      "claim_ref": "dead.wkb-metric-deformation",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "The conformal factor in the proposed WKB deformation cancels identically, leaving no stable intermediate state.",
      "reinstatement_condition": {
        "condition_kind": "entry-at-grade",
        "target_ref": "dead.wkb-metric-deformation",
        "minimum_grade": "checked"
      }
    },
    {
      "claim_ref": "dead.quintessence-scalar-de",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "A genuine fourth propagating scalar DOF violates the Dirac-Bergmann constraint counting the construction establishes (P3); the quintessence-scalar route is structurally redundant with the framework's existing content. conditioned on the S-MM-CR DOF bound loosening to admit a fourth propagating scalar; ledgered, not typed with that specific content.",
      "reinstatement_condition": {
        "condition_kind": "entry-of-kind",
        "required_kind": "derivation"
      }
    },
    {
      "claim_ref": "dead.so14-higgs-inflaton",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "The slow-roll parameters come out at eta ~ -4 and n_s ~ -7; v ~ M_Pl forces catastrophic fast-roll, incompatible with any viable inflationary trajectory.",
      "reinstatement_condition": {
        "condition_kind": "entry-at-grade",
        "target_ref": "dead.so14-higgs-inflaton",
        "minimum_grade": "checked"
      }
    },
    {
      "claim_ref": "dead.cdl-bubble-nucleation",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "The CDL bounce action comes out at ~10^44 (infinite suppression); CDL assumes a canonical kinetic term that is absent in the BF (topological) phase the framework actually uses.",
      "reinstatement_condition": {
        "condition_kind": "entry-at-grade",
        "target_ref": "dead.cdl-bubble-nucleation",
        "minimum_grade": "checked"
      }
    },
    {
      "claim_ref": "dead.thooft-naturalness-lambda",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "The shift symmetry rho -> rho + c is explicitly broken by the trace-anomaly coupling that K11 requires; the actual protection mechanism is gravitational-coupling suppression (K14), not 't Hooft naturalness via shift symmetry.",
      "reinstatement_condition": {
        "condition_kind": "entry-at-grade",
        "target_ref": "dead.thooft-naturalness-lambda",
        "minimum_grade": "checked"
      }
    },
    {
      "claim_ref": "dead.gisin-polchinski-signaling",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "Gisin-Polchinski applies to nonlinear modifications of the Schrodinger evolution itself; matter in the framework evolves under standard linear quantum mechanics, so the no-signaling theorem guarantees the locally-defined F_Q is invariant under distant operations. No causality violation arises.",
      "reinstatement_condition": {
        "condition_kind": "entry-at-grade",
        "target_ref": "dead.gisin-polchinski-signaling",
        "minimum_grade": "checked"
      }
    },
    {
      "claim_ref": "dead.naive-kk-tower-sum",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "The rigid-cutoff sum is an artifact of omitting holographic counterterms; the correctly holographically-regularized Casimir computation instead yields delta-lambda ~ 10^-60.",
      "reinstatement_condition": {
        "condition_kind": "entry-at-grade",
        "target_ref": "dead.naive-kk-tower-sum",
        "minimum_grade": "checked"
      }
    },
    {
      "claim_ref": "dead.gzk-species-scale",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "The Species Scale modifies only the gravitational UV cutoff; photopion production is a Standard Model QCD process. K4 (purely gravitational framework) and T2.7 (conformal invariance) jointly forbid any geometric channel from modifying gauge-sector cross sections. The anomaly is outside the framework's domain.",
      "reinstatement_condition": {
        "condition_kind": "entry-at-grade",
        "target_ref": "dead.gzk-species-scale",
        "minimum_grade": "checked"
      }
    },
    {
      "claim_ref": "dead.ams02-kk-exhaust",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "The KK exhaust channel exports energy from the brane into the bulk as massive spin-2 dark radiation; the exhaust direction is strictly away from the brane, so no brane-localized positron source is generated.",
      "reinstatement_condition": {
        "condition_kind": "entry-at-grade",
        "target_ref": "dead.ams02-kk-exhaust",
        "minimum_grade": "checked"
      }
    },
    {
      "claim_ref": "dead.nanograv-geometric-condensation",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "The peak GW frequency from a first-order transition at T_* ~ 10^7 GeV falls at f_0 ~ 1 Hz (the LIGO/ET band), while the nanohertz band corresponds to transitions at T ~ MeV to GeV; additionally, the framework's own topological-phase percolation is instantaneous, suppressing bubble-collision GW production.",
      "reinstatement_condition": {
        "condition_kind": "entry-at-grade",
        "target_ref": "dead.nanograv-geometric-condensation",
        "minimum_grade": "checked"
      }
    },
    {
      "claim_ref": "dead.fqhe-so14-topology",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "No mechanism is specified for the claimed mapping; the assertion contains no derivation connecting FQHE topological invariants to the geometric-condensation construction.",
      "reinstatement_condition": {
        "condition_kind": "entry-at-grade",
        "target_ref": "dead.fqhe-so14-topology",
        "minimum_grade": "checked"
      }
    },
    {
      "claim_ref": "dead.planckian-dissipation-vev",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "The framework preserves the KSS viscosity bound (F15), which is related to Planckian dissipation, but no derivation connects v(F_Q) to the universal scattering rate 1/tau = k_B T/hbar; the claim is suggestive at most and unwarranted as a contract without a derivation. an explicit derivation connecting v(F_Q) to the universal Planckian scattering rate is the named missing step; content not captured by the typed condition.",
      "reinstatement_condition": {
        "condition_kind": "entry-of-kind",
        "required_kind": "derivation"
      }
    },
    {
      "claim_ref": "dead.hehl-datta-nuclear",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "G_N^2 ~ 10^-76 GeV^-4 suppression is too brutal; even with M_Pl,eff = 10^14 GeV and N^2 coherent amplification at nuclear density, U_T ~ 10^-3 eV, 8 orders of magnitude below the 100 keV target.",
      "reinstatement_condition": {
        "condition_kind": "entry-at-grade",
        "target_ref": "dead.hehl-datta-nuclear",
        "minimum_grade": "checked"
      }
    },
    {
      "claim_ref": "dead.radion-yukawa-nuclear",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "Tree-level scalar exchange gives V(1 fm) ~ 10^-8 MeV at M_Pl,eff = 10^14 GeV; reaching the 100 keV target would require M_Pl,eff ~ 12.6 GeV (electroweak scale), 13 orders of magnitude from the physical value.",
      "reinstatement_condition": {
        "condition_kind": "entry-at-grade",
        "target_ref": "dead.radion-yukawa-nuclear",
        "minimum_grade": "checked"
      }
    },
    {
      "claim_ref": "dead.add-kk-graviton-coulomb",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "Summed KK-tower exchange at r = 1 fm with R_Dark = 10 micron gives V_KK ~ 2e-16 MeV, 15 orders of magnitude below the 100 keV target.",
      "reinstatement_condition": {
        "condition_kind": "entry-at-grade",
        "target_ref": "dead.add-kk-graviton-coulomb",
        "minimum_grade": "checked"
      }
    },
    {
      "claim_ref": "dead.torsion-dirac-axial",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "The mechanism is mathematically homologous to the Hehl-Datta channel with the same G_N scaling, and comes out 8 orders of magnitude below the target.",
      "reinstatement_condition": {
        "condition_kind": "entry-at-grade",
        "target_ref": "dead.torsion-dirac-axial",
        "minimum_grade": "checked"
      }
    },
    {
      "claim_ref": "dead.radion-bcs-pairing",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "N(E_F) V_pair ~ 10^-38; the resulting gap is proportional to exp(-10^38), indistinguishable from zero, a 38-order-of-magnitude failure in the exponent.",
      "reinstatement_condition": {
        "condition_kind": "entry-at-grade",
        "target_ref": "dead.radion-bcs-pairing",
        "minimum_grade": "checked"
      }
    },
    {
      "claim_ref": "dead.dicke-superradiant-gap",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "The single-mode Dicke condition requires all N particles to couple symmetrically to one bosonic mode; the radion Compton wavelength (~197 fm) gives a coherence volume containing only N_lambda ~ 10^6 nucleons, and the gap at that physical N_lambda is ~1e-20 eV, violating the single-mode condition by 51 orders of magnitude.",
      "reinstatement_condition": {
        "condition_kind": "entry-at-grade",
        "target_ref": "dead.dicke-superradiant-gap",
        "minimum_grade": "checked"
      }
    },
    {
      "claim_ref": "dead.species-scale-qcd",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "The radion couples to the trace anomaly via <T^mu_mu> proportional to beta(alpha_s) G^a_{mu nu}G^{a mu nu}, requiring 0.2% precision tuning of alpha_s; a uniform modification at that precision would unbind nuclear matter via photodisintegration, and no mathematical protection against this runaway exists.",
      "reinstatement_condition": {
        "condition_kind": "entry-at-grade",
        "target_ref": "dead.species-scale-qcd",
        "minimum_grade": "checked"
      }
    },
    {
      "claim_ref": "dead.li7-coherence-pump",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "Triple-axis kill. (1) Thermal incoherence: the BBN plasma at T ~ 50 keV is maximally mixed (f~0); 8.65 MeV alpha particles undergo immediate broadband Coulomb scattering, saturating the ~0.2 ps KK scrambling time and pinning the QFI at the standard quantum limit. (2) Abundance starvation: during the active BBN window, ~97% of mass-7 is locked as undecayed ^7Be (half-life ~53 days), leaving in-situ ^7Li fuel too scarce for the required reaction density. (3) The primordial plasma has no crystalline lattice, no acoustic deformation potential, and no interstitial sublattice; the radion catalysis mechanism has no mechanical substrate.",
      "reinstatement_condition": {
        "condition_kind": "entry-at-grade",
        "target_ref": "dead.li7-coherence-pump",
        "minimum_grade": "checked"
      }
    },
    {
      "claim_ref": "dead.be7-coherence-pump",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "The (n,p) reaction produces a two-body final state of distinguishable fermions (spin-1/2 proton, spin-3/2 ^7Li) with extreme mass asymmetry; Bose enhancement, required for a coherent standing wave, is forbidden for fermions, and the mismatched kinetic-energy partition (~1.43 MeV proton vs ~0.21 MeV ^7Li) produces drastically mismatched de Broglie wavelengths, so chaotic thermalization saturates the KK scrambling time and the QFI remains at the standard quantum limit.",
      "reinstatement_condition": {
        "condition_kind": "entry-at-grade",
        "target_ref": "dead.be7-coherence-pump",
        "minimum_grade": "checked"
      }
    },
    {
      "claim_ref": "dead.radion-be7-electron-capture",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "The ^7Be electron-capture rate is governed by the weak interaction and electromagnetic Coulomb attraction; K4 (purely gravitational framework) and T2.7 (conformal invariance of the 4D Maxwell action) structurally forbid the radion from modifying tree-level electroweak cross sections. The trace-anomaly coupling provides thermodynamic exhaust, not a fundamental force modification.",
      "reinstatement_condition": {
        "condition_kind": "entry-at-grade",
        "target_ref": "dead.radion-be7-electron-capture",
        "minimum_grade": "checked"
      }
    },
    {
      "claim_ref": "dead.sn2024afav-geff",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "This is the already-killed G_eff amplification mechanism applied to a new observational context; K2 (the gravitational constant is never amplified, modified, or state-dependent) and K16 (G_N is fixed, only Lambda_s runs) both forbid it. The torsion-mediated traceless-channel torque on the accretion disk from coherent nuclear pasta survives as a live mechanism; the trace-channel G_eff runaway feedback loop specifically is dead, and derivative documents describing it must be corrected.",
      "reinstatement_condition": {
        "condition_kind": "entry-at-grade",
        "target_ref": "dead.sn2024afav-geff",
        "minimum_grade": "checked"
      }
    },
    {
      "claim_ref": "dead.hyper-kondo-superconductivity",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "Superfluid stiffness collapse: rho_s(0) = hbar^2 n_s/(4 m*); at the effective mass m* ~ 1000 m_e required for radion activation per C13d, the BKT transition temperature approaches zero. Phase stiffness and radion activation are structurally antagonistic in this channel.",
      "reinstatement_condition": {
        "condition_kind": "entry-at-grade",
        "target_ref": "dead.hyper-kondo-superconductivity",
        "minimum_grade": "checked"
      }
    },
    {
      "claim_ref": "dead.light-carrier-qfi-superconductivity",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "The QFI of the BCS ground state with respect to T^mu_mu scales O(N) by Wick factorization across k-modes; for YBCO, f_Q^BCS ~ 3.1e-28 GeV^8, a 57-order-of-magnitude deficit against the K7 activation threshold. The trace-anomaly coupling channel is K4-compliant but numerically negligible.",
      "reinstatement_condition": {
        "condition_kind": "entry-at-grade",
        "target_ref": "dead.light-carrier-qfi-superconductivity",
        "minimum_grade": "checked"
      }
    },
    {
      "claim_ref": "dead.dynamic-ts-elevation",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "m_KK is a global bulk parameter set by R_Dark (K16); local VEV suppression changes the brane geometry but not R_Dark, so t_s = hbar/m_KK is fixed. If local VEV suppression affected brane geometry at all, it would lengthen t_s (the brane descends to larger z_0, giving smaller m_KK), the opposite of the intended effect.",
      "reinstatement_condition": {
        "condition_kind": "entry-at-grade",
        "target_ref": "dead.dynamic-ts-elevation",
        "minimum_grade": "checked"
      }
    },
    {
      "claim_ref": "dead.self-bootstrap-superconductivity",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "Near T_c the coherent fraction f approaches zero; the two-fluid QFI F_Q = f^2 N^2 + (1-f)N collapses to O(N). A fluctuating condensate cannot satisfy the requirements of a coherent driver or a zero-entropy exhaust pathway.",
      "reinstatement_condition": {
        "condition_kind": "entry-at-grade",
        "target_ref": "dead.self-bootstrap-superconductivity",
        "minimum_grade": "checked"
      }
    },
    {
      "claim_ref": "dead.radion-superconductivity-summary",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "Summary kill across all pathways: (1) Hyper-Kondo kills phase stiffness. (2) Light carriers lack QFI by 57 orders of magnitude. (3) Dynamic t_s elevation runs inverted. (4) Self-bootstrap fails near T_c. (5) At 300 K, Planckian dissipation (~0.025 ps) outpaces the fixed exhaust time (~0.2 ps).",
      "reinstatement_condition": {
        "condition_kind": "entry-at-grade",
        "target_ref": "dead.radion-superconductivity-summary",
        "minimum_grade": "checked"
      }
    },
    {
      "claim_ref": "dead.vev-amplification-coherence",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "F_Q is positive-definite (Bures metric); the VEV shift v^2_eff = v_0^2 - (gamma/lambda) F_Q is strictly subtractive. No physical state amplifies the VEV above v_0.",
      "reinstatement_condition": {
        "condition_kind": "entry-at-grade",
        "target_ref": "dead.vev-amplification-coherence",
        "minimum_grade": "checked"
      }
    },
    {
      "claim_ref": "dead.cdw-bosonic-gateway",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "The CDW ground state is an equilibrium symmetry-broken state with Poissonian/binomial number statistics; Var(T^mu_mu) scales O(N) by the fluctuation-dissipation theorem and area-law entanglement. CDW QFI density ~3.25e-40 GeV^8, a 69-order-of-magnitude deficit against K7. This kill applies to all equilibrium bosonic orders (CDW, SDW, structural distortion) proposed as gateways; the barrier is thermodynamic extensivity itself.",
      "reinstatement_condition": {
        "condition_kind": "entry-at-grade",
        "target_ref": "dead.cdw-bosonic-gateway",
        "minimum_grade": "checked"
      }
    },
    {
      "claim_ref": "dead.f24-kagome-athe",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "Two-stage kill. (1) Ambient-VEV torsion from chiral Cooper-pair hypermomentum is 49 orders of magnitude too weak (Planck suppression). (2) The VEV suppression required to amplify torsion has no equilibrium condensed-matter state achieving the K7 threshold (69-order-of-magnitude deficit, per the CDW gateway kill). The chiral-hypermomentum selection rule (SO-SC2) survives as a qualitative structural observation only.",
      "reinstatement_condition": {
        "condition_kind": "entry-at-grade",
        "target_ref": "dead.f24-kagome-athe",
        "minimum_grade": "checked"
      }
    },
    {
      "claim_ref": "dead.coherent-state-n2-variance",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "A Glauber coherent state |alpha> with <n> = N has Var(n_hat) = N (Poissonian): a general result of quantum statistics. N^2 scaling requires phase estimation with maximally entangled states (GHZ/NOON), not number/energy estimation with coherent states; the claim conflates the two.",
      "reinstatement_condition": {
        "condition_kind": "entry-at-grade",
        "target_ref": "dead.coherent-state-n2-variance",
        "minimum_grade": "checked"
      }
    },
    {
      "claim_ref": "dead.edge-mode-l4-scaling",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "2D lattice BdG and free-boson computations both give C_E ~ L^1.0 to L^1.3 (an area law). Phase rigidity correlates the mean phase across the boundary but fluctuations at different boundary points remain independent; GHZ-like N^2 scaling requires all edge modes to fluctuate in lockstep, which ODLRO's correlated means do not provide.",
      "reinstatement_condition": {
        "condition_kind": "entry-at-grade",
        "target_ref": "dead.edge-mode-l4-scaling",
        "minimum_grade": "checked"
      }
    },
    {
      "claim_ref": "dead.lagrangian-uniqueness",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "The a_4 Seeley-DeWitt coefficient generates three independent competing operators at the same effective mass dimension 6 (eta_AB phi^A phi^B T^mu_mu; eta_AB phi^A phi^B C_{mu nu rho sigma}C^{mu nu rho sigma}; eta_AB phi^A phi^B Tr(F_{mu nu}F^{mu nu})); Lagrangian uniqueness is false as a matter of standard heat-kernel theory for any matter content, and the thermodynamic-dominance formulation replaces the uniqueness claim entirely.",
      "reinstatement_condition": {
        "condition_kind": "entry-at-grade",
        "target_ref": "dead.lagrangian-uniqueness",
        "minimum_grade": "checked"
      }
    },
    {
      "claim_ref": "dead.er-q01-gauge-kk-species-lowering",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "The correct gamma derivation (Paper 0 v10 Section IV.D, SF-D0) shows gamma already carries the 1/Lambda_s^2 suppression via the KK heat-kernel spectral trace; the 'two species counts' of v4.5 (one in gamma, one in f_Q,crit) collapse to one count double-counted. The v4.7 gamma derivation reaches phenomenological survival with a better margin (f_Q,crit at 10^12-10^13, 15 orders better) without an independent species-lowering step. The gauge KK tower on dP_3 remains relevant for GUT precision physics (K8, K10, K11, K14) but does not provide an independent species-lowering mechanism for f_Q,crit as v4.5 claimed. the trellis states the inverse condition (reactivation if the SF-D0 gamma derivation is shown wrong), which entry-at-grade cannot express forward; ledgered rather than force-typed.",
      "reinstatement_condition": {
        "condition_kind": "entry-at-grade",
        "target_ref": "dead.er-q01-gauge-kk-species-lowering",
        "minimum_grade": "checked"
      }
    },
    {
      "claim_ref": "dead.er-cc001-gamma-z0-stabilization",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "Two independent algebraic computations (Gemini CC Derivation Reports Run 1 and Run 2) show the (L/z_0)^4 measure factor combined with gamma(z_0) proportional to z_0^2 gives V_eff^phys proportional to z_0^-2 after phi-extremization; the z_0-gradient is strictly negative for all physical states, so the brane runs to the IR horizon (m_KK -> 0, Lambda_s -> 0, decompactification) rather than stabilizing. Block scope: any mechanism relying on the gamma(z_0) inheritance alone to stabilize the Karch-Randall radion is dead; combined mechanisms remain open as separate sorries. discovery that the (L/z_0)^4 measure factor is incorrect, or an additional z_0-dependent bare-DBI contribution; both stated as unlikely on current evidence.",
      "reinstatement_condition": {
        "condition_kind": "entry-of-kind",
        "required_kind": "derivation"
      }
    },
    {
      "claim_ref": "dead.er-cc002-goldberger-wise",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "Killed by both Gemini CC Derivation reports and by independent structural argument: a propagating bulk scalar with kinetic terms violates the framework's Tier 4 commitment to a topological SO(2,4) Chern-Simons bulk with zero local degrees of freedom, destroying the topological purity that underwrites Israel junction protections, boundary induction, and ghost exclusion. Block scope: any mechanism relying on a propagating bulk scalar field with kinetic terms is forbidden by the topological-bulk axiom.",
      "reinstatement_condition": {
        "condition_kind": "entry-at-grade",
        "target_ref": "dead.er-cc002-goldberger-wise",
        "minimum_grade": "checked"
      }
    },
    {
      "claim_ref": "dead.er-cc003-shift-symmetry-protection",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "The gamma(phi^A phi_A) F_Q coupling is polynomial in phi = v + rho and explicitly breaks the discrete shift symmetry at tree level; the framework cannot rely on shift-symmetry protection. The kill is offset by a stronger surviving result: kinematic suppression via the trans-Planckian VEV (K18) provides protection without requiring the shift symmetry, with the barrier height overwhelming the aperiodic CW slope by 16 orders of magnitude. The kill of symmetry-protection is not a kill of the AM mechanism itself. a reformulated coupling simultaneously polynomial in phi and shift-symmetric is stated as appearing structurally near-impossible; ledgered as such rather than typed permanent, since the document does not foreclose it categorically.",
      "reinstatement_condition": {
        "condition_kind": "entry-of-kind",
        "required_kind": "derivation"
      }
    },
    {
      "claim_ref": "dead.er-mm001-antisymmetry-vanishing",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "Two independent explicit algebraic computations (Gemini DR Section VI Rewrite Route and DeepSeek Cross-Examination) reproduce the same nonvanishing leading term in the bracket, driven by v and spatial curvature through the BF-type pre-symplectic structure. The cancellation argument conflates antisymmetry of the full bracket (automatic under simultaneous coordinate-plus-index swap) with a symmetric-index cancellation, which is not forced. Block scope (Point Block): the specific cancellation argument is dead; the 44x44 block structure must be treated as pseudo-differential, not ultra-local. Structural origin: the argument was imported from pure BF theory where the analogous bracket vanishes because B is an independent configuration variable; in MM, B is replaced by F(A), which activates the bracket through connection dependence. a different symmetry of the MM action (not present in pure BF theory) forcing the bracket to vanish is named as the only reactivation path and stated as unlikely on current evidence.",
      "reinstatement_condition": {
        "condition_kind": "entry-of-kind",
        "required_kind": "derivation"
      }
    },
    {
      "claim_ref": "dead.er-mm002-local-algebraic-redefinition",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "The No-Go Lemma (ChatGPT Track A Construction, formalized in the Section VI obstruction lemma) shows that for local algebraic k, the four-term expansion reduces on the constraint surface to m{Z,Z}m^T with m = I + k; at the principal-symbol level local conjugation preserves operator order, so cancelling the derivative block would require m C^k m^T = 0, which for invertible m forces C^k = 0, contradicting ER-MM-001's established nonvanishing result. The only escapes are a singular m (not an admissible redefinition) or a non-local k (relocating rather than eliminating the non-locality). Structural origin (DeepSeek): the derivative index pattern is a spatial curl operator whose inverse is the non-local Biot-Savart kernel. Block scope (Class Block): any mechanism relying on local algebraic canonical transformations to achieve ultra-locality in the MM Dirac matrix is structurally obstructed. a non-algebraic canonical transformation framework avoiding the curl-operator obstruction, or a reformulation replacing the BF-type kinetic structure, are named as the only paths and stated as speculative and unlikely.",
      "reinstatement_condition": {
        "condition_kind": "entry-of-kind",
        "required_kind": "derivation"
      }
    },
    {
      "claim_ref": "dead.er-mm003-pointwise-schur",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "When the upper-left 30x30 block A is a first-order differential operator with A^-1 a non-local Green's function (the Biot-Savart kernel per ER-MM-002's structural origin), the Schur complement D - C A^-1 B is an integro-differential operator in coordinate space; its determinant is not a pointwise algebraic function of the fields, so the clean factorization cannot be recovered in coordinate space, only at the principal-symbol level in Fourier space. Block scope (Point Block): the pointwise determinant route specifically is obstructed; the operator-theoretic reformulation via principal symbol survives as a separate sorry. a coordinate-space regularization scheme rendering A^-1 effectively local is named as the only path, and none is currently known.",
      "reinstatement_condition": {
        "condition_kind": "entry-of-kind",
        "required_kind": "derivation"
      }
    },
    {
      "claim_ref": "dead.er-mix001-dbi-pi-chi-mixing",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "An explicit quadratic-action computation (ChatGPT S-MIX-001) shows sqrt(-g_ind) V_SSB(chi) generates chi^2, pi chi^2, pi^2 chi^2 terms but never a pi-chi bilinear; the DBI sector depends only on pi and the F_Q coupling only on chi, and the induced-metric matching is a kinematic identification, not a bilinear potential operator. Result: the tree-level mixing mass vanishes and the mixing angle is zero, so the effective F_Q-coupling threshold diverges. Block scope: any rescue requiring the radion's F_Q coupling to flow through the DBI brane-bending mode without an additional bilinear mixing source. an explicit non-vanishing d^2U_eff/dz dchi operator from a stabilization mechanism not present in the bare MM+DBI action is the named concrete condition.",
      "reinstatement_condition": {
        "condition_kind": "entry-of-kind",
        "required_kind": "derivation"
      }
    },
    {
      "claim_ref": "dead.er-mix002-einstein-cartan-torsion",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "An explicit Levi-Civita contraction (ChatGPT S-MIX-003) gives beta' a_1 = -(4/3) alpha m^2/(v+rho), negative under standard sign conventions, failing the criterion by sign; cross-checked by an independent contraction route with a consistent result. The pure F R(omega) Palatini/Einstein-Cartan elimination produces a ghost-like kinetic term in mostly-plus signature, the well-known Palatini scalar-tensor ghost. Block scope: any rescue asserting the radion kinetic term in MMSW gravity emerges from torsion-induced Einstein-Cartan reduction of pure F R(omega) coupling; the Weyl-rescaling route to the Einstein frame gives the correct healthy sign and is the proper mechanism. a non-pure-F R(omega) torsion mechanism producing the healthy sign is named as the only path.",
      "reinstatement_condition": {
        "condition_kind": "entry-of-kind",
        "required_kind": "derivation"
      }
    },
    {
      "claim_ref": "dead.er-mix003-naive-scalar-kinetic",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "The construction (D phi)^dagger(D phi) wedge star_int(D tau wedge D tau) in MMSW evaluates, in standard gauge, to an expression antisymmetric in mu nu, so it vanishes identically as a symmetric Klein-Gordon kinetic term (Langenscheidt 2019 Section 4.2). The principled resolution is the first-order auxiliary-field formulation. Block scope: any MMSW or related gauge-theoretic gravity construction asserting a propagating scalar via a direct (D phi)^2 operator without auxiliary-field structure or an alternative principled mechanism. identification of a non-trivial Hodge structure on the MMSW gauge fiber converting the operator into a symmetric kinetic term is the named path, stated as highly speculative with no such structure known in the cited analysis.",
      "reinstatement_condition": {
        "condition_kind": "entry-of-kind",
        "required_kind": "derivation"
      }
    },
    {
      "claim_ref": "dead.er-wd001-sub-chandra-wd-detonation",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "Two-crux kill. Crux A (FDT ceiling): white-dwarf interiors are DLRO Coulomb crystals and hydrodynamic shocks, not ODLRO substrates; F_Q is pinned to the O(N) baseline by the fluctuation-dissipation theorem, 15 orders of magnitude below the activation threshold. Crux B (pole-binary locality): even if microscopic ODLRO patches formed, antinodal activation at the C13c standing-wave geometry produces only a ~7e-5 active volume fraction per unit cell and cannot bootstrap to macroscopic detonation in the surrounding non-activated bulk. Block scope: any sub-Chandrasekhar Type Ia trigger mechanism routing through framework-internal geometric catalysis; sub-Chandra phenomenology remains handled by standard double-detonation astrophysics. a cosmologically or astrophysically accessible ODLRO substrate in WD interiors surviving thermal decoherence, plus resolution of the local-to-global propagation problem, are the two named conditions.",
      "reinstatement_condition": {
        "condition_kind": "entry-of-kind",
        "required_kind": "derivation"
      }
    },
    {
      "claim_ref": "dead.er-cosm001-integrated-f-buildup",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "Categorical error: classical structure formation produces DLRO density gradients and Bragg-peak ordering, not ODLRO long-range phase coherence of a complex order parameter. The coherence fraction f remains approximately zero at cosmological scales regardless of structure formation, so F_Q stays pinned to the extensive O(N) baseline by the fluctuation-dissipation theorem. Block scope: any cosmological mechanism conflating classical clustering with macroscopic ODLRO; codified into LINT-DLR-1. identification of a cosmologically distributed ODLRO substrate (axion misalignment condensate, primordial BEC remnant, dark-sector superfluid) with the right density and cosmic-time evolution is the named condition.",
      "reinstatement_condition": {
        "condition_kind": "entry-of-kind",
        "required_kind": "derivation"
      }
    },
    {
      "claim_ref": "dead.er-cosm002-trace-channel-gradient",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "The AM kinematic-dominance bound (SL-AM-1) shows the trace channel, suppressed by the gravitational coupling (m/M_Pl)^2 ~ 10^-67, is dominated by the AM potential barrier height (~10^32 GeV^4) by ~10^99; the trace gradient cannot displace the radion from its discrete minimum. Block scope: any cosmological mechanism using an extensively-scaling O(N) operator to bridge AM topological barriers; only super-extensive O(N^2) operators sourced by ODLRO can engage the pole structure.",
      "reinstatement_condition": {
        "condition_kind": "entry-at-grade",
        "target_ref": "dead.er-cosm002-trace-channel-gradient",
        "minimum_grade": "checked"
      }
    },
    {
      "claim_ref": "dead.er-cosm003-cosmological-averaging",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "ODLRO-supporting systems occupy ~10^-46 of the Hubble volume; macroscopic FLRW backreaction from such patches is identically zero to all practical orders. Predicted spatial inhomogeneities in w(z) correlated with structure environments are inconsistent with observational bounds, and F16 (Void Physics) already explains ISW-type local variations without invoking ODLRO patches. Block scope: any cosmological-averaging mechanism aggregating rare ODLRO domains into a cosmological-scale equation-of-state contribution. a cosmologically distributed ODLRO substrate occupying at least ~1e-4 of the Hubble volume, or a different averaging mechanism bypassing the volume-fraction obstruction, are the named conditions.",
      "reinstatement_condition": {
        "condition_kind": "entry-of-kind",
        "required_kind": "derivation"
      }
    },
    {
      "claim_ref": "dead.er-cosm004-intra-sector-slow-roll",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "Slow-roll quintessence requires m ~ H_0 ~ 10^-33 eV; the framework's radion is bounded m_rho in [1 meV, 100 GeV] by F13.2 (LUNA phenomenology requires MeV-scale mass) and K8 (adiabatic stability against matter loops), with the framework selecting m_rho ~ 1 MeV. The ratio is at least 10^30, falsifying slow-roll by 30 orders of magnitude; an ad-hoc additional scalar field is forbidden by the S-MM-CR DOF count (conditional). Block scope: any cosmological mechanism introducing or repurposing a slow-rolling scalar at m ~ H_0. loosening the S-MM-CR DOF bound to admit a fourth propagating DOF, or extending the radion mass window below 1 meV, are the named conditions.",
      "reinstatement_condition": {
        "condition_kind": "entry-of-kind",
        "required_kind": "derivation"
      }
    },
    {
      "claim_ref": "dead.er-wgc001-hydrodynamic-bkm",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "Substituting the L2 variance bound for the killed L^infinity amplitude bound fails by the same regularity obstruction that produced ER-NS-001: the Sobolev embedding H^1 does not embed in L^infinity in 3D is a structural fact, and L2 bounds cannot constrain pointwise suprema (SL-VC-1, LINT-L2-1). Block scope: any framework-internal mechanism proposing to recover the hydrodynamic C23-WGC derivation by substituting an L2 variance bound for the killed L^infinity amplitude bound; WGC compliance is preserved instead via the static F-theory dP_3 Pati-Salam spectrum (reformulated C23-WGC). cascades from ER-NS-001 (an external Navier-Stokes program kill, not itself entered in this corpus); the cascade dependency is named rather than modeled as a claim link since ER-NS-001 has no claim identity here.",
      "reinstatement_condition": {
        "condition_kind": "entry-at-grade",
        "target_ref": "dead.er-wgc001-hydrodynamic-bkm",
        "minimum_grade": "checked"
      }
    },
    {
      "claim_ref": "dead.er-de001-bh-mechanism-evolving-de",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "Black-hole bulk-routing is structurally cooling and stabilizing (SL-BR-1), not a source of cosmological-scale energy injection or radion displacement; per SL-AM-1 any O(N) channel's cosmological-scale gradient is suppressed against the AM topological barrier by ~10^99, and the BH population's effective contribution is O(N) in the cosmologically averaged sense. Block scope: any cosmological-evolution mechanism aggregating framework-internal degenerate-object bulk-exhaust channels into an effective Lambda(t). identification of an ODLRO-active cosmologically distributed substrate connected to BH populations (no candidate known), or a non-kinematic mechanism circumventing SL-AM-1, are the named conditions.",
      "reinstatement_condition": {
        "condition_kind": "entry-of-kind",
        "required_kind": "derivation"
      }
    },
    {
      "claim_ref": "dead.er-ht001-nede-thermal-de",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "The v3.9 generalized cosmological plasma-exclusion structural lesson shows all unbound relativistic plasma environments thermalize at tau_th much less than t_s by 3 to 10 orders of magnitude, pinning the coherence fraction f approximately zero and rendering the gamma F_Q coupling dormant; the NEDE mechanism requires sustained thermal coherence in a regime the framework's own thermodynamics structurally excludes. Block scope: any cosmological-evolution mechanism requiring coherent thermal pumping of a hot sector at T >= MeV.",
      "reinstatement_condition": {
        "condition_kind": "entry-at-grade",
        "target_ref": "dead.er-ht001-nede-thermal-de",
        "minimum_grade": "checked"
      }
    },
    {
      "claim_ref": "dead.er-de002-vacuum-driven-reheating",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "Any mechanism reversing the brane-to-bulk exhaust direction violates the framework's mandatory topological-bulk K1/K6 structure and contradicts SL-BR-1 (bulk-routing is exhaust, not injection). Block scope: any cosmological mechanism operating by reversing the framework's brane-to-bulk exhaust direction.",
      "reinstatement_condition": {
        "condition_kind": "entry-at-grade",
        "target_ref": "dead.er-de002-vacuum-driven-reheating",
        "minimum_grade": "checked"
      }
    },
    {
      "claim_ref": "dead.er-de003-quantum-foam-de",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "Trans-Planckian vacuum modes are kinematically protected per K18 (the trans-Planckian VEV v ~ 10^139 GeV produces a 16-order-of-magnitude kinematic suppression of aperiodic corrections); the proposal also violates T1.3 (no trans-Planckian energy from sub-Planckian inputs at the cosmological scale). Block scope: any cosmological evolving-DE mechanism deriving energy from trans-Planckian vacuum-mode dynamics.",
      "reinstatement_condition": {
        "condition_kind": "entry-at-grade",
        "target_ref": "dead.er-de003-quantum-foam-de",
        "minimum_grade": "checked"
      }
    },
    {
      "claim_ref": "dead.er-de004-multi-modulus-slow-roll",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "Distance-Conjecture confinement: with N ~ 10^120 light scalars, individual modulus excursions are confined to Delta-phi <~ M_P/sqrt(N) ~ 10^-60 M_P, far below the trans-Planckian field range slow-roll quintessence requires for observable w(z) not equal -1 at percent level; classical slow-roll quintessence is structurally impossible in the AM-locked branch's moduli space. Codified into LINT-DE-2. Block scope: any multi-field slow-roll proposal within the AM-locked branch on moduli spaces with N much greater than 1; the obstruction does not apply on Path B, where the active modulus is a single light scalar parametrically separated from the hairon condensate. the obstruction is scoped to the AM-locked branch; Path B is explicitly carved out as not subject to this specific kill.",
      "reinstatement_condition": {
        "condition_kind": "entry-at-grade",
        "target_ref": "dead.er-de004-multi-modulus-slow-roll",
        "minimum_grade": "checked"
      }
    },
    {
      "claim_ref": "dead.er-de005-hairon-quintessence",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "Hairons are identified as the microscopic constituents of the topological vacuum substrate mediating the BCS-like neutrino superfluid condensation and the entropic accounting selecting k_phys ~ S_dS; promoting them to rolling fields mobilizes the same constituents that define the static vacuum identification, producing a structural conflict between serving as the BEC ground state of the de Sitter vacuum and as dynamical matter rolling under a quintessence potential. Codified into LINT-DE-3. Block scope: any mechanism promoting the microscopic constituents of a topological vacuum to additive dynamical matter while retaining the same vacuum identification.",
      "reinstatement_condition": {
        "condition_kind": "entry-at-grade",
        "target_ref": "dead.er-de005-hairon-quintessence",
        "minimum_grade": "checked"
      }
    },
    {
      "claim_ref": "dead.er-de006-hairon-multi-field",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "Killed for the same categorical reason as ER-DE-005, sharpened by multi-field destabilization analysis: cross-couplings between rolling hairons and the static-vacuum condensate produce non-perturbative destabilization of the topological substrate itself, falsifying the AM-locked k_phys selection on the same cosmic timescales the quintessence trajectory is supposed to drive. Block scope: any multi-field framework-internal hairon-quintessence proposal.",
      "reinstatement_condition": {
        "condition_kind": "entry-at-grade",
        "target_ref": "dead.er-de006-hairon-multi-field",
        "minimum_grade": "checked"
      }
    },
    {
      "claim_ref": "dead.pasta-inter-equilibrium-switching",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "Free-energy degeneracy (Delta F ~ keV) required for near-equal two-state occupation probabilities constrains the energy-density jump to ~1e-9 GeV^4, giving a variance ~1e-19 GeV^8; after proper-time reconciliation, the required scale is ~10^1 GeV^4, a 34-order-of-magnitude deficit. Large energy jumps and free-energy degeneracy are thermodynamically conjugate, so the mechanism cannot simultaneously satisfy both.",
      "reinstatement_condition": {
        "condition_kind": "entry-at-grade",
        "target_ref": "dead.pasta-inter-equilibrium-switching",
        "minimum_grade": "checked"
      }
    },
    {
      "claim_ref": "dead.pasta-parametric-driving",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "No candidate driver is coherent: neutrino flux is broadband thermal; magnetar fields show a 12-order-of-magnitude frequency mismatch with pasta phonons; vortex unpinning thermalizes stochastically; accretion heating is incoherent; and electron-phonon scattering (tau_ep ~ 1 ps) prevents coherence accumulation on any relevant timescale.",
      "reinstatement_condition": {
        "condition_kind": "entry-at-grade",
        "target_ref": "dead.pasta-parametric-driving",
        "minimum_grade": "checked"
      }
    },
    {
      "claim_ref": "dead.pasta-1s0-qcp",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "Pasta structures dissolve at rho ~ 0.085 fm^-3 while the ^1S0 gap closes at rho ~ 0.16 fm^-3, a factor-of-2 density separation with no physical spatial overlap between the two phenomena.",
      "reinstatement_condition": {
        "condition_kind": "entry-at-grade",
        "target_ref": "dead.pasta-1s0-qcp",
        "minimum_grade": "checked"
      }
    },
    {
      "claim_ref": "dead.pasta-3p2-pairing",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "^3P2 pairing onset occurs at the crust-core boundary, exclusively in uniform core matter, which is mutually exclusive with the pasta structures the mechanism requires.",
      "reinstatement_condition": {
        "condition_kind": "entry-at-grade",
        "target_ref": "dead.pasta-3p2-pairing",
        "minimum_grade": "checked"
      }
    },
    {
      "claim_ref": "dead.pasta-vortex-lattice-qfi",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "The equilibrium vortex-core volume fraction is ~1e-17 in a millisecond pulsar, and Tkachenko modes are critically damped at high rotation rates; the resulting QFI scales O(N_vortices), extensively, not super-extensively.",
      "reinstatement_condition": {
        "condition_kind": "entry-at-grade",
        "target_ref": "dead.pasta-vortex-lattice-qfi",
        "minimum_grade": "checked"
      }
    },
    {
      "claim_ref": "dead.pasta-topological-entanglement",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "The topological entanglement entropy gamma_topo is an O(1) correction to the entropy and does not alter the volumetric scaling of local operator variance; the global topological degeneracy is invisible to local T_{mu nu} measurement.",
      "reinstatement_condition": {
        "condition_kind": "entry-at-grade",
        "target_ref": "dead.pasta-topological-entanglement",
        "minimum_grade": "checked"
      }
    },
    {
      "claim_ref": "dead.pasta-spinodal-compressibility",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "Neutron-rich matter (Y_p ~ 0.04) carries ~27 MeV of positive stiffness from the symmetry energy, removing the spinodal instability; the effective dP/dn is 1 to 22 MeV across the pasta region, within a factor of 3 of the dimensional estimate, not divergent.",
      "reinstatement_condition": {
        "condition_kind": "entry-at-grade",
        "target_ref": "dead.pasta-spinodal-compressibility",
        "minimum_grade": "checked"
      }
    },
    {
      "claim_ref": "dead.kbc-void-hubble-tension",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "The KBC void mechanism overshoots: it produces a Hubble-constant enhancement of 11.8 to 25%, against the ~8.3% enhancement the tension actually requires; the mechanism fails quantitatively as computed.",
      "reinstatement_condition": {
        "condition_kind": "entry-at-grade",
        "target_ref": "dead.kbc-void-hubble-tension",
        "minimum_grade": "checked"
      }
    },
    {
      "claim_ref": "c12a",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "Struck with the F12 retraction (v4.13): the cosmological-sector contraction shore (SF-DG-010) retracts F12 after three failed reconciliation hypotheses (ER-COSM-001/002/003) and a mass-window falsification (ER-COSM-004) exhaust the intra-sector evolution routes; the static Lambda^(k) tower (LINT-16) replaces the continuous-modulus reading the Bianchi-mandate argument required. identification of a cosmologically distributed ODLRO substrate with sufficient F_Q density and the right cosmic-time evolution, or loosening of the S-MM-CR DOF bound (Paper -1 patch v4 or later) permitting a fourth propagating scalar with m ~ H_0, per the F12 cascade's stated reinstatement text.",
      "reinstatement_condition": {
        "condition_kind": "entry-of-kind",
        "required_kind": "derivation"
      }
    },
    {
      "claim_ref": "c12b",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "Struck with the F12 retraction: C12b's thawing-sign match depended on the C12a Bianchi-mandate derivation, which is struck; with F12 retracted the framework carries no thawing-trajectory prediction to compare against DESI. same cascade condition as C12a; ledgered once rather than duplicated per entry.",
      "reinstatement_condition": {
        "condition_kind": "entry-of-kind",
        "required_kind": "derivation"
      }
    },
    {
      "claim_ref": "c12c",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "Struck with the F12 retraction: the modified-H(z) prediction relied on the thawing trajectory; with a static Lambda^(k) the optical-depth integral reduces to standard LambdaCDM, so the JWST early-reionization tension returns to standard astrophysics unaddressed by this channel. same cascade condition as C12a; ledgered once rather than duplicated per entry.",
      "reinstatement_condition": {
        "condition_kind": "entry-of-kind",
        "required_kind": "derivation"
      }
    },
    {
      "claim_ref": "c13a",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "Struck (v4.15): the matter-sector exclusion record moves F13.2's entire contract chain to the exclusion reservoir; OP-0-ACTIVATION is dead per the Susceptibility Exclusion (SL-SUSC-1): a substrate cannot be rigid against the environment (to survive) and soft against itself (to activate) through the same response channel. the three-gate reactivation test: a coupling other than species-summed G_N, a real-observable vehicle, and substrate survival of the required coherence.",
      "reinstatement_condition": {
        "condition_kind": "entry-of-kind",
        "required_kind": "derivation"
      }
    },
    {
      "claim_ref": "c13b",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "Struck (v4.15) with the F13.2 reservoir: it composed with C13a's activation channel, which is dead per the matter-sector exclusion record and SL-SUSC-1. the three-gate reactivation test (shared with C13a).",
      "reinstatement_condition": {
        "condition_kind": "entry-of-kind",
        "required_kind": "derivation"
      }
    },
    {
      "claim_ref": "c13c",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "Struck (v4.15): the matter-sector exclusion record moves F13.2 to the exclusion reservoir; OP-0-ACTIVATION is dead per SL-SUSC-1, since the standing-wave substrate cannot be simultaneously rigid enough to survive ambient decoherence and soft enough to respond to the driving field through the same coupling. the three-gate reactivation test (shared with C13a/b).",
      "reinstatement_condition": {
        "condition_kind": "entry-of-kind",
        "required_kind": "derivation"
      }
    },
    {
      "claim_ref": "c13d",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "Struck (v4.15) with the F13.2 reservoir: the Hyper-Kondo route is independently dead on its own terms (superfluid stiffness collapse at the required effective mass, see the Hyper-Kondo pathway kill above) and is further subsumed by OP-0-ACTIVATION's categorical exclusion. the three-gate reactivation test (shared with C13a/b/c).",
      "reinstatement_condition": {
        "condition_kind": "entry-of-kind",
        "required_kind": "derivation"
      }
    },
    {
      "claim_ref": "c13e",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "Struck (v4.15) with the F13.2 reservoir: the aneutronic pumping route is independently dead on its own terms (thermodynamic-substrate absence, see the Li-7/Be-7 coherence pump kills above) and is further subsumed by OP-0-ACTIVATION's categorical exclusion. the three-gate reactivation test (shared with C13a/b/c/d).",
      "reinstatement_condition": {
        "condition_kind": "entry-of-kind",
        "required_kind": "derivation"
      }
    },
    {
      "claim_ref": "c13sub",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "Struck (v4.15) with the F13.2 reservoir: as a sub-leading term within the reservoired F13.2 chain, it carries no independent standing once the leading activation mechanisms it corrects are themselves dead. the three-gate reactivation test (shared with the C13 family).",
      "reinstatement_condition": {
        "condition_kind": "entry-of-kind",
        "required_kind": "derivation"
      }
    },
    {
      "claim_ref": "c21a",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "Struck (v4.15): F21 moves to the exclusion reservoir under the matter-sector exclusion record; OP-0-ACTIVATION is dead per SL-SUSC-1, and every examined force-carrier channel for F21 independently fails by 8 to 51 orders of magnitude (see the nuclear force-carrier kills above). the three-gate reactivation test.",
      "reinstatement_condition": {
        "condition_kind": "entry-of-kind",
        "required_kind": "derivation"
      }
    },
    {
      "claim_ref": "c21b",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "Struck (v4.15) with the F21 reservoir: it is multiplicative with C21a, which is dead; the composed channel inherits the same categorical exclusion. the three-gate reactivation test (shared with C21a).",
      "reinstatement_condition": {
        "condition_kind": "entry-of-kind",
        "required_kind": "derivation"
      }
    },
    {
      "claim_ref": "c21c",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "Struck (v4.15) alongside the rest of the F21 chain: this row was itself a pass (the solar non-activation it verified holds), but with the parent F21 mechanism reservoired everywhere, the check it performed is rendered moot rather than falsified; it is entered into the reservoir as part of the F21 cascade rather than left as a standing verification of an active mechanism. the three-gate reactivation test (shared with C21a/b); note this entry's own content was never falsified, only rendered moot by its parent's reservoir status.",
      "reinstatement_condition": {
        "condition_kind": "entry-of-kind",
        "required_kind": "derivation"
      }
    },
    {
      "claim_ref": "c23-ds",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "Retracted with the F12 retraction (v4.13): C23-dS's exclusion of w = -1 depended on the thawing trajectory that F12 asserted; with F12 retracted, the construction is replaced by the F-CC posture and the T3.6 static-Lambda(k) reading, under which inter-sector tunneling at e^{-S_dS} provides the dS-compliant decay channel instead. same cascade condition as C12a: an ODLRO substrate with the right density and evolution, or a loosened S-MM-CR DOF bound.",
      "reinstatement_condition": {
        "condition_kind": "entry-of-kind",
        "required_kind": "derivation"
      }
    },
    {
      "claim_ref": "f05",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "Moved to the exclusion reservoir (v4.15 matter-sector exclusion record) as part of the nuclear-pasta activation chain: OP-0-ACTIVATION is dead. Var(T) for equilibrium and driven laboratory/astrophysical substrates is volume-law O(N) by the fluctuation-dissipation theorem; super-extensive variance would require GHZ-class coherence that no warm substrate sustains, and the compound activation budget (10^27 to 10^29 GeV^4) is retracted, sitting 12 to 25 orders of magnitude above what any audited substrate supplies. the three-gate reactivation test (a coupling other than species-summed G_N, a real-observable vehicle, substrate survival of the required coherence); the stated surviving live route for the matter sector is the separate rescue-trellis torsion-Lagrangian calculation, not equilibrium superfluid activation, and is out of this corpus's scope.",
      "reinstatement_condition": {
        "condition_kind": "entry-of-kind",
        "required_kind": "derivation"
      }
    },
    {
      "claim_ref": "f12",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "Struck from Tier 3 as of v4.13 (Cosmological-Sector Contraction Shore, SF-DG-010): three reconciliation hypotheses independently fail (ER-COSM-001 categorical DLRO/ODLRO conflation, ER-COSM-002 kinematic dominance at ~10^99, ER-COSM-003 volume-fraction suppression at ~10^-46) and the intra-sector slow-roll alternative fails the radion mass window by at least 30 orders of magnitude (ER-COSM-004); SL-AM-1 and LINT-DLR-1 codify the underlying obstruction. identification of a cosmologically distributed ODLRO substrate with sufficient F_Q density and the right cosmic-time evolution, or loosening of the S-MM-CR DOF bound (Paper -1 patch v4 or later) permitting an additional propagating scalar with m ~ H_0.",
      "reinstatement_condition": {
        "condition_kind": "entry-of-kind",
        "required_kind": "derivation"
      }
    },
    {
      "claim_ref": "f13",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "Superseded reading (v4.15 matter-sector exclusion record): every tree-level and perturbative mechanism examined for F13 independently fails (Higgs conflation, warp-factor cancellation, DBI radius inflation, T_3 rigidity, geometric truncation, perturbative torsion screening, Debye-coherence absence, WKB metric deformation; see the individual DEAD-table entries), and the remaining resonant-activation candidates move to the exclusion reservoir with F13.2 under OP-0-ACTIVATION's categorical exclusion (SL-SUSC-1). the three-gate reactivation test.",
      "reinstatement_condition": {
        "condition_kind": "entry-of-kind",
        "required_kind": "derivation"
      }
    },
    {
      "claim_ref": "f13-2",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "Moved to the exclusion reservoir (v4.15, supersedes the earlier v4.7 reading): the matter-sector exclusion record and SL-SUSC-1 (the Susceptibility Exclusion) show the standing-wave substrate cannot be simultaneously rigid enough to survive ambient decoherence and soft enough to respond to the driving field through the same coupling channel; the entire C13a-e/C13sub contract chain is struck with it. the three-gate reactivation test; a transient nuclear-de-excitation exhaust channel is left open as a distinct, non-reinstating possibility gated on S-EXHAUST-COHERENCE (v4.16, SF-DG-013), named here but out of this entry's own reinstatement condition.",
      "reinstatement_condition": {
        "condition_kind": "entry-of-kind",
        "required_kind": "derivation"
      }
    },
    {
      "claim_ref": "f19",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "Moved to the exclusion reservoir (v4.15 matter-sector exclusion record, supersedes the v4.7 reading): OP-0-ACTIVATION is dead per the FDT volume-law argument and the Susceptibility Exclusion (SL-SUSC-1); the stated surviving empirical face is a distinct gravitational-noise/stochastic-G channel (S-NOISE), not a reinstatement of the geometric-collapse mechanism itself. no F19-specific reinstatement clause beyond the generic three-gate test is stated in the document; the surviving S-NOISE channel is named as a distinct mechanism, not a condition reinstating F19.",
      "reinstatement_condition": {
        "condition_kind": "entry-at-grade",
        "target_ref": "f19",
        "minimum_grade": "checked"
      }
    },
    {
      "claim_ref": "f21",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "Reservoired (v4.15, contracts C21a/b/c struck) under the matter-sector exclusion record: every examined force-carrier channel independently fails by 8 to 51 orders of magnitude (Hehl-Datta, radion Yukawa, ADD KK graviton, torsion-Dirac, radion BCS, Dicke superradiant, Species-Scale QCD; see the individual DEAD-table entries), and OP-0-ACTIVATION's categorical exclusion (SL-SUSC-1) subsumes the surviving proposed channels as well. the three-gate reactivation test; no F21-specific reinstatement clause beyond the generic test is stated.",
      "reinstatement_condition": {
        "condition_kind": "entry-of-kind",
        "required_kind": "derivation"
      }
    },
    {
      "claim_ref": "mk1",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "Killed by error correlation across LLM-generated content: the Birge-ratio machinery Particle-Data-Group-style averaging depends on assumes independent inter-laboratory errors, an assumption this kernel's own AI-audit-heavy corpus does not satisfy (docs/governing-conventions.md Section 1: two audits tracing to the same upstream report share a footprint and are not independent). This is the kill governing-conventions Section 7 already cites: 'accepted-with-disagreement' stands as the gate's own reading of a held contradiction, never smoothed by a numeric average. demonstration that the relevant error sources are independent (e.g. genuinely independent human-community inputs, not multiple AI systems auditing the same underlying report).",
      "reinstatement_condition": {
        "condition_kind": "entry-of-kind",
        "required_kind": "derivation"
      }
    },
    {
      "claim_ref": "mk2",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "Killed by thermodynamic-limit preconditions vacuous at n in the hundreds, this corpus's actual claim count (398 claims at Stage 3c Track 1 close); exact fixpoint recomputation (the fixed-point refresh pattern this build already runs for supports-link declared_grade propagation) supersedes any asymptotic approximation at a scale this small. corpus scale where exact computation is infeasible (the exact fixed-point approach remains tractable at every scale this kernel has reached or is likely to reach soon).",
      "reinstatement_condition": {
        "condition_kind": "entry-of-kind",
        "required_kind": "derivation"
      }
    },
    {
      "claim_ref": "mk3",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "Killed by the ordinal lattice with incomparable modes this kernel actually uses (docs/governing-conventions.md Section 6, amended Stage 3b): continuous-limit convergence proofs for gradual-argumentation semantics are invalid over a lattice whose settled tier's two modes (empirical, constitutive) are structurally incomparable, not points on one continuous scale a cardinal weight could interpolate across. a principled cardinal refinement of standing (e.g. a future probabilistic extension), adopted deliberately at substrate level, not smuggled in as a convenience for one computation.",
      "reinstatement_condition": {
        "condition_kind": "entry-of-kind",
        "required_kind": "derivation"
      }
    },
    {
      "claim_ref": "mk4",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "Killed by settlement latency: staking mechanisms degenerate under slow or ambiguous settlement (replication markets required funded guaranteed settlement; bug bounties require 24 to 48 hour resolution), a timescale this kernel's own audit cycles (derivation-audit and data-audit checking records, entered per stage over weeks) do not meet. a claim class with fast unambiguous settlement carrying enough volume to matter (recomputations and formalizations qualify individually, as this kernel's own theorem-kind claims already show, but not yet at the volume a staking market would need).",
      "reinstatement_condition": {
        "condition_kind": "entry-of-kind",
        "required_kind": "theorem"
      }
    },
    {
      "claim_ref": "mk5",
      "withdrawn_at_state": "dg@stage-3c",
      "withdrawn_by": "author:dg-trellis",
      "reason": "Killed by negative-constraint activation (head-placed prohibition lists measurably increase the activation of what they prohibit) and the structured-format capacity tax (schema-native generation without a scratchpad phase measurably degrades reasoning capacity, since format compliance and reasoning compete for the same generation budget). Unlike K1 through K4, this kill's remedy is already applied in practice, not merely reinstatement-conditioned: the emitter spec (docs/synthesis-backlog.md Section 3) is already amended toward positive constraint geometry, kills entered as mid-context historical data rather than head-placed prohibitions, think-first-format-later ordering, and verbalized sampling, the same discipline this stage's own reservoir entries (Track 1) and this file's own entries follow. model-generation evidence that these effects no longer hold for the generation process this kernel's own build discipline depends on.",
      "reinstatement_condition": {
        "condition_kind": "entry-of-kind",
        "required_kind": "derivation"
      }
    },
    {
      "claim_ref": "dead.c23b-trigger-rate-not-threshold",
      "withdrawn_at_state": "dg@landing-2",
      "withdrawn_by": "author:dg-trellis",
      "reason": "Killed as one of three typed acts disposing the trigger-law claim (landing-2 Track C-2), by the three K3B audit artifacts' convergent finding: the linearized delta u_b framing carries a 44 percent error at its own claimed matching scale and is parametrically invalid above it (ev.dead.c23b-trigger-rate-not-threshold). Superseding statement entered separately as c23-sdc-prime2 (the exact, smooth logarithmic response law replaces the rate-not-threshold framing); residual regime gap entered separately as s-k3b-exact-regime-gap. Typed reinstatement condition (entry-of-kind derivation is the nearest available typed approximation; the schema's three typed kinds cannot express a source-class-and-magnitude condition, so the elided content is carried verbatim here per docs/governing-conventions.md Section 8's own precedent): reinstated only on an external artifact establishing a physical source class with |V| much less than rho_Lambda for which the linearized framing is the operative statement.",
      "reinstatement_condition": {
        "condition_kind": "entry-of-kind",
        "required_kind": "derivation"
      }
    }
  ]
};

module.exports = { STORE };
