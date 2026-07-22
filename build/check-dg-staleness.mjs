// Role: the staleness discipline. Flags any in-force claim that carries a depends-on edge into an
//   out-of-force (superseded or withdrawn) claim, i.e. a dependent still standing on a dead input.
//   A depends-on edge is documentary and does not enter the gate's grade fold, so a dead input does
//   not fail the gate; this check is the separate guarantee that such an edge is never silent. It
//   verifies build/dg-staleness-manifest.json against the live graph both ways: every acknowledged
//   stale edge is still stale (no obsolete acknowledgments left lying around), and every stale edge
//   in the graph is acknowledged (no unreviewed staleness). Parking a stale edge with a reason is
//   allowed; leaving one unnamed is not. It also guards the degenerate case: a depends-on edge into
//   a claim that does not exist at all.
// Contract: `node build/check-dg-staleness.mjs` exits non-zero on any failure, naming the edge.
// Invariant: out-of-force status is read from the same supersession and withdrawal records the gate
//   reads (STORE.supersessions, claim extensions.supersedes, STORE.withdrawals), and the claim set
//   from buildKernel()'s own ref resolution, not a re-implementation of either.
"use strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { buildKernel } from "./dg-build.mjs";
import { STORE } from "../corpora/dg/dg-data.js";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
let fails = 0;
const ok = (c, m) => { console.log(`${c ? "  ok  " : " FAIL "} ${m}`); if (!c) fails++; };
const H = "=".repeat(80);
console.log(H); console.log("CHECK-DG-STALENESS: in-force dependents standing on dead inputs, both ways"); console.log(H);

const manifest = JSON.parse(readFileSync(join(ROOT, "build", "dg-staleness-manifest.json"), "utf8"));
const built = buildKernel();
const refSet = new Set(built.claims.map((c) => c.spec.ref));

// out-of-force = superseded (by a supersession record or a successor's extensions.supersedes) or withdrawn
const outOfForce = new Set([
  ...STORE.supersessions.map((s) => s.superseded_ref),
  ...STORE.claims.filter((c) => c.extensions && c.extensions.supersedes).map((c) => c.extensions.supersedes),
  ...STORE.withdrawals.map((w) => w.claim_ref),
]);

const dependsOn = STORE.links.filter((l) => l.link_kind === "depends-on");
const key = (from, to) => `${from} -> ${to}`;

// [1] no depends-on edge points at a claim that does not exist (the degenerate stale case)
console.log(`\n[1] every depends-on edge (${dependsOn.length}) resolves to a real claim on both ends`);
{
  const dangling = dependsOn.filter((l) => !refSet.has(l.from) || !refSet.has(l.to));
  for (const l of dangling) ok(false, `${key(l.from, l.to)} points at a nonexistent claim`);
  ok(dangling.length === 0, `all ${dependsOn.length} depends-on edges resolve on both ends`);
}

// live stale set: an in-force FROM depends-on an out-of-force TO
const staleEdges = dependsOn.filter((l) => !outOfForce.has(l.from) && outOfForce.has(l.to));
const staleKeys = new Set(staleEdges.map((l) => key(l.from, l.to)));
const ackKeys = new Set(manifest.acknowledged_stale_edges.map((e) => key(e.from, e.to)));

// [2] every acknowledged edge is still genuinely stale (manifest -> graph): the edge exists, its
//     from is in force, its to is out of force. An acknowledgment that no longer describes a stale
//     edge (input reinstated, dependent withdrawn, edge rewired) is obsolete and must be removed.
console.log(`\n[2] every acknowledged stale edge (${manifest.acknowledged_stale_edges.length}) is still stale in the live graph (no obsolete acknowledgments)`);
for (const e of manifest.acknowledged_stale_edges) {
  const edgeExists = dependsOn.some((l) => l.from === e.from && l.to === e.to);
  const stillStale = edgeExists && !outOfForce.has(e.from) && outOfForce.has(e.to);
  const why = !edgeExists ? "edge no longer present" : outOfForce.has(e.from) ? "dependent itself now out of force" : !outOfForce.has(e.to) ? "input back in force" : "stale";
  ok(stillStale, `${key(e.from, e.to)} still stale (${why})`);
}

// [3] every live stale edge is acknowledged (graph -> manifest): a dead input never silently leaves
//     a dependent standing without a named reason.
console.log(`\n[3] every live stale edge (${staleEdges.length}) is acknowledged in the manifest (no silent staleness)`);
for (const k of staleKeys) {
  ok(ackKeys.has(k), `${k} is acknowledged`);
}
if (staleEdges.length === 0) ok(true, "no in-force claim depends on an out-of-force claim");

console.log("\n" + H);
if (fails === 0) console.log(`verified: every depends-on edge resolves, and every in-force dependent standing on a dead input is acknowledged with a reason (${staleEdges.length} stale edge(s), all parked).`);
console.log(fails === 0 ? "check-dg-staleness: OK" : `check-dg-staleness: ${fails} FAILURE(S)`);
console.log(H);
process.exit(fails === 0 ? 0 : 1);
