// Role: the departures emitter (landing-1 Track 0.2), sibling to build/emit-nogo-registry.mjs. A
//   pure read over the real built kernel: no claim, link, or record is created here, only a
//   markdown rendering of every `departure`-kind claim already entered in corpora/dg/dg-data.js.
//   A departure claim states where the framework's working idealization uses but departs from an
//   imported result (docs/governing-conventions.md Section 10), supported by the imported claim and
//   the framework's own replacement, with the residue carried as a `closing_condition` where one
//   exists.
// Contract: `node build/emit-departures.mjs [outfile]` writes the rendering to `outfile` (default
//   `docs/departures.md`) and exits 0. Never exits non-zero on content; a departure claim whose
//   supports links do not resolve to a real imported claim and a real replacement claim is the only
//   failure mode, and it throws loudly rather than emitting a silently incomplete rendering.
// Invariant: reads only; `built.state`/`built.claims`/`built.links` as buildKernel() returns them,
//   never re-derives grading logic already owned by kernel/gate/gate.mjs and
//   kernel/grounding/earned-grade.mjs.
"use strict";
import { writeFileSync } from "node:fs";
import { buildKernel } from "./dg-build.mjs";

const OUTFILE = process.argv[2] || "docs/departures.md";
const built = buildKernel();

const specByRef = new Map(built.claims.map((c) => [c.spec.ref, c.spec]));
const refByIdentity = new Map(built.claims.map((c) => [c.rec.identity, c.spec.ref]));
const declaredByIdentity = new Map(built.claims.map((c) => [c.rec.identity, c.spec.declared_grade]));
const supportsLinks = (built.links || []).filter((l) => l.link_kind === "supports");

const departureRefs = built.claims.filter((c) => c.spec.kind === "departure").map((c) => c.spec.ref).sort();

function supportsOf(ref) {
  const identity = built.refId.get(ref);
  return supportsLinks
    .filter((l) => l.to_identity === identity)
    .map((l) => ({ fromRef: refByIdentity.get(l.from_identity), group: l.support_group }));
}

function renderClosing(cond) {
  if (!cond) return "(none: no residue named)";
  const sys = cond.system ? `, on \`${cond.system}\`` : "";
  return `\`${cond.condition_kind}\`${sys}: ${cond.target}`;
}

const md = [];
md.push("# Departures");
md.push("");
md.push("Emitted by `build/emit-departures.mjs`, a pure read over the built kernel (`node build/dg-build.mjs`'s `buildKernel()`). Every entry below already exists in `corpora/dg/dg-data.js` as a `departure`-kind claim (docs/governing-conventions.md Section 10); this file adds no claim of its own, only a rendering.");
md.push("");
md.push(`${departureRefs.length} departure claim(s) entered.`);
md.push("");

if (departureRefs.length === 0) {
  md.push("None entered yet.");
} else {
  for (const ref of departureRefs) {
    const spec = specByRef.get(ref);
    const supports = supportsOf(ref);
    md.push(`## \`${ref}\``);
    md.push("");
    md.push(`**Declared / earned:** ${spec.declared_grade}`);
    md.push("");
    md.push(`**Statement:** ${spec.statement}`);
    md.push("");
    md.push("**Supports (the imported claim departed from, and the framework's replacement):**");
    md.push("");
    if (supports.length === 0) {
      throw new Error(`departure claim ${ref} carries no supports links; a departure must cite the imported claim and the replacement`);
    }
    for (const { fromRef, group } of supports) md.push(`- \`${fromRef}\` (group \`${group}\`, declared ${declaredByIdentity.get(built.refId.get(fromRef))})`);
    md.push("");
    md.push(`**Residue (closing condition):** ${renderClosing(spec.closing_condition)}`);
    md.push("");
  }
}

writeFileSync(OUTFILE, md.join("\n") + "\n");
console.log(`wrote ${OUTFILE}: ${departureRefs.length} departure claim(s) rendered.`);
process.exit(0);
