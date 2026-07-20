// Role: the Paper 0 section manifest (landing-1 Track 5), a coarse per-section binding of
//   docs/research/paper0_v414.md's own headings to the claim refs that render their content in
//   corpora/dg/dg-data.js. Hand-authored, per this session's own read of the paper's text against
//   the corpus (not inferred, not guessed): a binding below is entered only where a specific
//   textual match was confirmed by reading both the paper section and the claim's own statement
//   side by side. Every section the paper's own headings name is listed; an entry with an empty
//   `claim_refs` array is explicitly unbound, not omitted, so the staleness read (Track 5's second
//   script) never silently skips a section for lack of a row.
// Contract: `node analysis/paper-manifest.mjs` writes docs/paper0-manifest.json and exits 0. Every
//   claim_ref named is verified to resolve to a real claim in the built corpus before the manifest
//   is written; an unresolved ref throws loudly rather than emitting a manifest naming a claim that
//   does not exist. Pure read otherwise: no claim, link, or record is created or mutated.
// Invariant: this file touches only the plain data api/dg-provider.mjs exposes (periphery, per
//   build/check-imports.mjs's layer table), never vendor/kernel directly.
"use strict";
import { writeFileSync } from "node:fs";
import { buildKernel } from "../build/dg-build.mjs";
import { createDgProvider } from "../api/dg-provider.mjs";

const provider = createDgProvider(buildKernel());
const refs = new Set(provider.claims.map((c) => c.ref));

// [section_id, title, claim_refs, note]. claim_refs: [] means confirmed unbound this pass, not
// evaluated as "no match found" by omission. note: why bound, or why left unbound where that is
// itself worth stating (a section this session's own mandate did not ask it to bind).
const SECTIONS = [
  ["I", "Introduction", [], "not evaluated this pass"],
  ["I.A", "Geometric Stabilization and the Dark Dimension", [], "not evaluated this pass"],
  ["I.B", "Gauge Gravity from Boundary Induction", [], "not evaluated this pass"],
  ["I.C", "The One-Loop Coupling", [], "not evaluated this pass"],
  ["I.D", "Structure of the Paper", [], "not evaluated this pass"],
  ["II.A", "The AdS5 Chern-Simons Action", [], "not evaluated this pass"],
  ["II.B", "The End-of-the-World Brane", ["k3", "k3-prime", "im.israel-1966-junction", "im.rs1999-critical-tension", "im.karch-randall-2001-tension-position", "im.goldberger-wise-effective-tension"],
    "confirmed by direct read: eq. (2) is the flat-sliced Poincare metric (operator ruling R1's 'stated background'), eq. (4) the Israel junction condition, eq. (5) T3 = 6/(kappa5^2 L) stated 'independent of z0', word for word the claim K3-prime's part (i) reads correctly and K3's own flat text states without the KR/dS distinction. Bound to both K3 (superseded, historical) and K3-prime (successor) plus the four Track 2 imports whose locators cite the audit artifacts that rederive this same eq. (4)/(5) pair."],
  ["II.C", "Boundary Induction of the MacDowell-Mansouri Action", [], "not evaluated this pass"],
  ["II.D", "The Unified Brane Action", [], "not evaluated this pass"],
  ["III.A", "The SO(1,4) Higgs Mechanism", [], "not evaluated this pass"],
  ["III.A-bis", "Topological Quantization of the Vacuum via the Addazi-Meluccio Potential", [], "not evaluated this pass"],
  ["III.B", "The Effective Action in the Broken Phase", [], "not evaluated this pass"],
  ["III.C", "The Two-Channel Decomposition", ["k1"],
    "confirmed by direct read: Theorem III.1 states the trace/traceless-antisymmetric decomposition near-verbatim to K1's own statement."],
  ["III.D", "Constraint Analysis", ["p3", "p8", "p11"],
    "III.D's own text (90-dim phase space, 20 first-class + 44 second-class, DOF = 3) matches p3 exactly; bound to the P-claims as a group per this track's own instruction, though p8 (KSS) and p11 (diffeomorphism) are not individually discussed in III.D's own text (they recur in VI.D and are not independently confirmed here for III.D specifically)."],
  ["IV.A", "One-Loop Effective Action on a Curved Background", [], "not evaluated this pass"],
  ["IV.B", "The a4 Coefficient and the Stress-Energy Contact Term", [], "not evaluated this pass"],
  ["IV.C", "Identification as the Quantum Fisher Information Density", [], "not evaluated this pass"],
  ["IV.D", "Operator Content of the One-Loop Effective Action", [], "not evaluated this pass"],
  ["IV.E", "Thermodynamic Selection of the Variance Coupling", [], "not evaluated this pass"],
  ["IV.F", "Species Enhancement and the Dimensional Structure of gamma", [], "not evaluated this pass"],
  ["IV.G", "The Effective VEV as a Function of F_Q", [], "not evaluated this pass"],
  ["V.A", "The KK Spectrum", [], "not evaluated this pass"],
  ["V.B", "The Species Scale and the Coupling Threshold", [], "not evaluated this pass"],
  ["V.C", "KK Tower as Dark Matter", [], "not evaluated this pass"],
  ["V.D", "KK Tower Load Map", [], "not evaluated this pass"],
  ["VI.A", "General Relativity Recovery", [], "no confident single-claim match found this pass; touches K1/K2 content thematically but not a direct textual match, left unbound rather than guessed"],
  ["VI.B", "Einstein-Cartan-Sciama-Kibble Limit", [], "no confident match found this pass"],
  ["VI.C", "Boulware-Deser Ghost Freedom", ["p3"], "confirmed by direct read: same 90-dim/20-first-class/44-second-class/DOF=3 content as III.D, both citing p3's own result."],
  ["VI.D", "The KSS Viscosity Bound", ["p8"], "confirmed by direct read: eta/s = 1/(4 pi), G_eff cancellation, matches p8's statement exactly."],
  ["VI.E", "Weinberg-Witten Consistency", [], "no confident match found this pass"],
  ["VI.F", "Energy Conditions", [], "no confident match found this pass"],
  ["VI.G", "Radiative Stability", [], "no confident match found this pass; k8/k18 touch 'radiative stability' as a keyword but were not confirmed to state this section's own specific content (the two parametric mechanisms) on direct read"],
  ["VI.H", "Semiclassical Causality", ["t2.9"], "confirmed by direct read: t2.9's own statement (no-signaling, Gisin-Polchinski, semiclassical backreaction, reduced density matrix) matches this section closely."],
  ["VI.I", "Topological Defect Freedom", ["c20b"], "confirmed by direct read: pi_0 = pi_1 = pi_2 = 0, monopoles/strings/domain walls, matches c20b's own statement exactly."],
  ["VII.A", "Cosmological Constant Sector", [], "not evaluated this pass"],
  ["VII.B", "Species Scale Running", [], "not evaluated this pass"],
  ["VII.C", "Key Parameter Identifications", [], "not evaluated this pass"],
  ["VIII.A", "What the Paper Does", [], "not evaluated this pass"],
  ["VIII.B", "What the Paper Does Not Do", [], "not evaluated this pass"],
  ["VIII.C", "Open Problems", "SORRY_LEDGER", "bound to the sorry ledger as a class (every derivation-kind claim carrying a closing_condition, per vendor/kernel/analysis/characterized-gaps.mjs), per this track's own instruction; the section's five specific numbered items do not individually name existing s-* refs by title, so the binding is at the class level, not item-by-item."],
  ["VIII.D", "Falsifiability", "PREDICTIONS", "bound to the predictions as a class (every prediction-kind claim), per this track's own instruction."],
  ["VIII.E", "Loop-Level Gauge Sector Coupling", [], "not evaluated this pass"],
  ["VIII.F", "Categorical Exclusions", [], "not evaluated this pass"],
  ["IX", "Conclusion", [], "not evaluated this pass"],
  ["Appendix A", "Notation and Conventions", [], "not evaluated this pass"],
  ["Appendix B", "Explicit Effective Action", [], "not evaluated this pass"],
  ["Appendix C", "Heat Kernel Coefficients and Operator Content", [], "not evaluated this pass"],
  ["Appendix D", "KK Tower Load Map", [], "not evaluated this pass"],
  ["Appendix E", "Lean 4 Formalization Status", [], "not evaluated this pass"],
  ["Appendix F", "Reference Usage and Verification", [], "not evaluated this pass"],
];

// class-bound sections resolve to every claim of the named kind, computed fresh against the real
// corpus rather than hand-listed (so the manifest never silently drifts as claims are added).
// buildKernel() already ran once to construct `provider`; re-run once more here (cheap, pure) to
// get at spec.closing_condition, which the provider's grounding-only read surface does not carry.
const built = buildKernel();
const builtSpecByRef = new Map(built.claims.map((c) => [c.spec.ref, c.spec]));
const sorryRefs = provider.claims
  .filter((c) => c.kind === "derivation" && builtSpecByRef.get(c.ref)?.closing_condition !== undefined)
  .map((c) => c.ref);
const predictionRefs = provider.claims.filter((c) => c.kind === "prediction").map((c) => c.ref);

const entries = SECTIONS.map(([section_id, title, claim_refs, note]) => {
  let resolved;
  if (claim_refs === "SORRY_LEDGER") resolved = sorryRefs.slice().sort();
  else if (claim_refs === "PREDICTIONS") resolved = predictionRefs.slice().sort();
  else resolved = claim_refs;
  for (const ref of resolved) {
    if (!refs.has(ref)) throw new Error(`paper manifest: section ${section_id} names unknown claim ref ${ref}`);
  }
  return { section_id, title, claim_refs: resolved, bound: resolved.length > 0, note };
});

const manifest = {
  paper: "docs/research/paper0_v414.md",
  paper_version: "v4.14",
  generated_by: "analysis/paper-manifest.mjs",
  sections: entries,
};

writeFileSync("docs/paper0-manifest.json", JSON.stringify(manifest, null, 2) + "\n");
const boundCount = entries.filter((e) => e.bound).length;
console.log(`wrote docs/paper0-manifest.json: ${entries.length} sections, ${boundCount} bound, ${entries.length - boundCount} unbound.`);
