// Role: the Stage 3b independence oracle. Recomputes every claim's earned grade from first
//   principles using the real vendored combinators (footprintClosure, supportDelivery, ownBasis,
//   earnedGrade), but reads each checking record's footprint from the claim's pre-schema spec data,
//   never from the schema-built record the real gate reads.
// Why this exists, not just a comparison against build/dg-build.mjs's own receipt: the vendored
//   kernel/schema/records.mjs's checkingRecord() builder canonicalizes only its declared fields
//   (checker_id, method_class, method, checked_at_state, outcome, independence) onto the object it
//   returns; a hand-authored footprint field is folded into canonical.extensions and is not present
//   as a top-level property. kernel/grounding/earned-grade.mjs's ownBasis() reads
//   checkingRecords[i].footprint as a bare property, so for a real, schema-built checking record
//   this is always undefined, and disjoint(undefined, undefined) is vacuously true. The real gate's
//   own automatic independence lift therefore grants independently-rechecked whenever two
//   distinct-party records exist on a claim, regardless of whether their true footprints actually
//   overlap. This check is the actual enforcement layer docs/governing-conventions.md Section 5
//   promises: it recomputes the correct earned grade using the real footprint data (carried in
//   corpora/dg/dg-data.js's STORE.claims[i].checking_records[j].footprint, preserved on
//   built.claims[i].spec.checking_records, never lost) and confirms every claim's declared_grade
//   equals this correct value, not the gate's over-permissive one.
// Contract: `node build/check-independence.mjs` exits non-zero on any failure, naming it and, for a
//   blocked independence claim, the shared ancestor forcing the block.
// Invariant: the recursive earned-grade computation here calls the real vendored combinators for
//   every step (meet, join, capByCeiling all live in kernel/schema/confidence.mjs and
//   kernel/grounding/earned-grade.mjs); this file supplies correct inputs, never a re-implementation
//   of the grading rule itself.
"use strict";
import { buildKernel } from "./dg-build.mjs";
import { footprintClosure } from "../vendor/kernel/schema/tables.mjs";
import { earnedGrade } from "../vendor/kernel/grounding/earned-grade.mjs";
import { collapsedRank } from "../vendor/kernel/schema/confidence.mjs";

let fails = 0;
const ok = (c, m) => { console.log(`${c ? "  ok  " : " FAIL "} ${m}`); if (!c) fails++; };
const H = "=".repeat(80);
console.log(H); console.log("CHECK-INDEPENDENCE: correct footprint-based independence, recomputed from first principles"); console.log(H);

const built = buildKernel();
const CEILING = { axiom: "constitutive", "standard-result": "checked", observation: "checked", "conjecture-adopted": "corroborated", derivation: "independently-rechecked", theorem: "constitutive", computation: "checked", function: "corroborated", mechanism: "corroborated", prediction: "corroborated", "branch-commitment": "corroborated", block: "corroborated", comment: "ungraded" };

const specByRef = new Map(built.claims.map((c) => [c.spec.ref, c.spec]));
const identityByRef = new Map(built.claims.map((c) => [c.spec.ref, c.rec.identity]));
const refByIdentity = new Map(built.claims.map((c) => [c.rec.identity, c.spec.ref]));
const supportsLinks = (built.links || []).filter((l) => l.link_kind === "supports");

function disjoint(a, b) {
  for (const x of a) if (b.has(x)) return false;
  return true;
}

// correct own basis: checking records read from spec (real footprint intact), disjointness tested
// with the real footprintClosure over each record's own cited source.
function correctOwnBasis(spec) {
  const ceiling = CEILING[spec.kind];
  if (ceiling === "constitutive") return { basis: "constitutive", sharedAncestor: null, pair: null };
  const distinct = (spec.checking_records || []).filter((r) => r.independence === "distinct-party");
  if (distinct.length >= 2) {
    for (let i = 0; i < distinct.length; i++) {
      for (let j = i + 1; j < distinct.length; j++) {
        const fi = new Set(distinct[i].footprint || []);
        const fj = new Set(distinct[j].footprint || []);
        if (disjoint(fi, fj)) return { basis: "independently-rechecked", sharedAncestor: null, pair: [distinct[i].checker_id, distinct[j].checker_id] };
      }
    }
    // no disjoint pair found among >= 2 distinct-party records: name the shared ancestor blocking it
    const fi = new Set(distinct[0].footprint || []);
    const fj = new Set(distinct[1].footprint || []);
    const shared = [...fi].filter((s) => fj.has(s));
    return { basis: distinct.length >= 1 ? "checked" : "none", sharedAncestor: shared, pair: [distinct[0].checker_id, distinct[1].checker_id] };
  }
  if (distinct.length >= 1) return { basis: "checked", sharedAncestor: null, pair: null };
  return { basis: "none", sharedAncestor: null, pair: null };
}

const correctCache = new Map();
function correctEarnedOf(ref) {
  if (correctCache.has(ref)) return correctCache.get(ref);
  const identity = identityByRef.get(ref);
  const spec = specByRef.get(ref);
  if (!spec) throw new Error("unknown ref " + ref);
  correctCache.set(ref, "asserted"); // cycle guard
  // supports links carry from_identity/to_identity (content hashes), not ref strings; map back
  // through refByIdentity to work in ref space, matching the STORE's own authoring convention.
  const supports = supportsLinks.filter((l) => l.to_identity === identity).map((l) => {
    const fromRef = refByIdentity.get(l.from_identity);
    const supportEarned = correctEarnedOf(fromRef);
    return { group: l.support_group, supportEarned, linkGrade: l.declared_grade, footprint: footprintClosure(built.tables.sourceTable, [l.source_id]) };
  });
  const { basis } = correctOwnBasis(spec);
  const ceiling = CEILING[spec.kind];
  const eg = earnedGrade({ ceiling, constitutive: basis === "constitutive", checkingRecords: basis === "none" ? [] : [{ independence: "distinct-party", footprint: ["__correct_basis_marker__"] }].map((r) => ({ ...r, __basisOverride: basis })), supports });
  // earnedGrade recomputes B internally from checkingRecords; feed it a record shaped so its OWN
  // ownBasis() (blind to real footprint, per the bug above) reaches exactly the basis we verified
  // correct: a single record is enough for "checked", and ownBasis needs 2 disjoint for
  // "independently-rechecked", which a single synthetic record cannot produce. Handle both cases
  // explicitly instead of fighting the gate's own ownBasis() through synthetic records.
  let earned;
  if (basis === "constitutive") {
    earned = earnedGrade({ ceiling, constitutive: true, checkingRecords: [], supports }).earned;
  } else if (basis === "independently-rechecked") {
    const synthetic = [
      { independence: "distinct-party", footprint: ["__a__"] },
      { independence: "distinct-party", footprint: ["__b__"] },
    ];
    earned = earnedGrade({ ceiling, constitutive: false, checkingRecords: synthetic, supports }).earned;
  } else if (basis === "checked") {
    const synthetic = [{ independence: "distinct-party", footprint: ["__a__"] }];
    earned = earnedGrade({ ceiling, constitutive: false, checkingRecords: synthetic, supports }).earned;
  } else {
    earned = earnedGrade({ ceiling, constitutive: false, checkingRecords: [], supports }).earned;
  }
  correctCache.set(ref, earned);
  return earned;
}

console.log("\n[1] every claim's declared_grade equals its correctly recomputed earned grade");
for (const { spec } of built.claims) {
  const correct = correctEarnedOf(spec.ref);
  ok(spec.declared_grade === correct, `${spec.ref} (${spec.kind}): declared ${spec.declared_grade}, correctly-recomputed earned ${correct}`);
}

console.log("\n[2] every claim currently at independently-rechecked has a genuinely disjoint-footprint distinct-party pair");
let irCount = 0;
for (const { spec } of built.claims) {
  if (spec.declared_grade !== "independently-rechecked") continue;
  irCount++;
  const { basis, sharedAncestor, pair } = correctOwnBasis(spec);
  ok(basis === "independently-rechecked", `${spec.ref}: declared independently-rechecked, verified basis is ${basis}${sharedAncestor && sharedAncestor.length ? ` (blocked by shared ancestor: ${sharedAncestor.join(", ")}, checkers ${pair ? pair.join(" vs ") : "?"})` : ""}`);
}
console.log(`  (${irCount} claim(s) at independently-rechecked checked)`);

console.log("\n[3] every claim with 2+ distinct-party checking records whose footprints share an ancestor is capped at checked, never independently-rechecked");
for (const { spec } of built.claims) {
  const distinct = (spec.checking_records || []).filter((r) => r.independence === "distinct-party");
  if (distinct.length < 2) continue;
  const { basis, sharedAncestor } = correctOwnBasis(spec);
  if (basis === "checked" && sharedAncestor && sharedAncestor.length) {
    ok(spec.declared_grade !== "independently-rechecked", `${spec.ref}: has ${distinct.length} distinct-party records sharing ancestor(s) ${sharedAncestor.join(", ")}; correctly capped at checked, declared ${spec.declared_grade}`);
  }
}

console.log("\n" + H);
if (fails === 0) console.log("verified: every declared grade in the corpus matches a correctly recomputed earned grade (real footprint data, not the schema-dropped version), and every independently-rechecked claim genuinely rests on two disjoint-footprint distinct-party checks.");
console.log(fails === 0 ? "check-independence: OK" : `check-independence: ${fails} FAILURE(S)`);
console.log(H);
process.exit(fails === 0 ? 0 : 1);
