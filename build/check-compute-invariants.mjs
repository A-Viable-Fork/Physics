// Role: the compute-invariants oracle, the third substrate-behavior check named in
//   docs/status-ledger.md's oracle policy alongside build/check-gate.mjs and
//   build/check-type-hash.mjs. Exercises kernel/compute/transforms.mjs directly with synthetic
//   fixtures (no corpus): the no-standing rule, the mandatory assumptions manifest, and the
//   physics-kernel computation-pack divergence, both at validate time and at run time. Written
//   locally because upstream/epistack's own build/check-compute.mjs is corpus-bound (it imports
//   corpora/compute/stats-pack.js and build/covid-build.mjs, neither vendored here per
//   docs/status-ledger.md's Stage 0 note), so it is not portable to an empty seat.
// Contract: `node build/check-compute-invariants.mjs` exits non-zero on any failure, naming it.
// Invariant: every assertion here was planted and confirmed to fail before being fixed or accepted,
//   the same discipline build/check-substrate.mjs and build/check-imports.mjs already hold to.
"use strict";
import { validateTransform, makeRegister } from "../vendor/kernel/compute/transforms.mjs";
import { CANONICAL_ENTRIES, registerCanonicalPacks } from "../vendor/kernel/compute/canonical-packs.mjs";

let fails = 0;
const ok = (c, m) => { console.log(`${c ? "  ok  " : " FAIL "} ${m}`); if (!c) fails++; };
const throws = (fn, m) => { try { fn(); ok(false, `${m} (did not throw)`); } catch (e) { ok(true, `${m} (threw: ${e.message.slice(0, 60)}...)`); } };
const H = "=".repeat(80);
console.log(H); console.log("CHECK-COMPUTE-INVARIANTS: the transform register, exercised with synthetic fixtures"); console.log(H);

const goodComputation = { id: "physics.test-oom", pack: "computation", consumes: "values", emits: "value", reversibility: "lossy",
  assumptions: [{ id: "regime", statement: "test regularization scheme" }], run: (v) => ({ value: v[0] * 2 }) };

console.log("\n[1] the computation pack divergence: a well-formed computation entry validates and runs");
ok(validateTransform(goodComputation) === goodComputation, "a well-formed computation entry passes validateTransform");
{
  const reg = makeRegister();
  reg.register(goodComputation);
  const out = reg.run("physics.test-oom", [21]);
  ok(out.value === 42, `a computation entry runs through the register (got ${JSON.stringify(out)})`);
}

console.log("\n[2] the no-standing rule holds for computation exactly as it holds for statistics");
throws(() => validateTransform(Object.assign({}, goodComputation, { emits: "kernel" })), "a computation entry emitting \"kernel\" is refused at validate time");
throws(() => validateTransform(Object.assign({}, goodComputation, { consumes: "kernel" })), "a computation entry not consuming \"values\" is refused at validate time");
throws(() => validateTransform(Object.assign({}, goodComputation, { assumptions: [] })), "a computation entry with an empty assumptions manifest is refused at validate time");
{
  const reg = makeRegister();
  reg.register(Object.assign({}, goodComputation, { id: "physics.test-graded", run: () => ({ value: 1, grade: "checked" }) }));
  throws(() => reg.run("physics.test-graded"), "a computation entry whose output carries a grade field is refused at run time");
}

console.log("\n[3] regression: statistics-pack behavior is unchanged by the divergence");
const goodStats = { id: "test.stat", pack: "statistics", consumes: "values", emits: "value", reversibility: "lossy",
  assumptions: [{ id: "independence", statement: "test independence assumption" }], run: (v) => ({ value: v[0] + v[1] }) };
ok(validateTransform(goodStats) === goodStats, "a well-formed statistics entry still passes validateTransform");
throws(() => validateTransform(Object.assign({}, goodStats, { emits: "kernel" })), "a statistics entry emitting \"kernel\" is still refused");

console.log("\n[4] the canonical graph/algebra packs are untouched by the divergence");
{
  const reg = makeRegister();
  registerCanonicalPacks(reg);
  ok(reg.list("graph").length === 3, `the graph pack still carries 3 entries (got ${reg.list("graph").length})`);
  ok(reg.list("algebra").length === 1, `the algebra pack still carries 1 entry (got ${reg.list("algebra").length})`);
  ok(CANONICAL_ENTRIES.every((e) => e.pack === "graph" || e.pack === "algebra"), "no canonical entry was reassigned to the computation or statistics pack");
}

console.log("\n" + H);
if (fails === 0) console.log("verified: the computation pack obeys the statistics-pack no-standing constraints verbatim, statistics is unaffected, and the canonical packs are untouched.");
console.log(fails === 0 ? "check-compute-invariants: OK" : `check-compute-invariants: ${fails} FAILURE(S)`);
console.log(H);
process.exit(fails === 0 ? 0 : 1);
