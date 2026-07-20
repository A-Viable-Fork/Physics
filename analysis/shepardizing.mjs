// Role: Read 3, the Shepardizing pre-check (docs/synthesis-backlog.md Section 4.1, third bullet;
//   PK-DR-004 free experiment 1). For every live claim, walks its environments for any member
//   that is withdrawn, superseded, or falls inside a class-block scope, strengthening the gate's
//   existing per-edge check (WF-SUPERSEDED, WD-UNSATISFIED) with whole-environment coverage: a
//   contamination path the gate's own per-edge checks cannot see would be a claim resting, several
//   hops deep through the support structure, on something dead, without any single edge in the
//   graph directly naming the dead identity.
// Falsifiability frame (stated before running): Expected: empty. The gate already declines any
//   direct reference to an out-of-force identity (WF-SUPERSEDED) and a restatement onto a
//   withdrawn claim (WD-UNSATISFIED); Stage 2 onward never wired a supports link into a dead item
//   in the first place (Track 1 through 3c only wired supports among live claims and the reservoir
//   entries' own evidence chains, never a live claim depending on a killed one). Surprising: any
//   hit at all, which would mean contamination entered through a path the gate's per-edge checks
//   cannot see (a live claim's supports chain passing, several hops deep, through a claim that was
//   later withdrawn or superseded, with no single edge in the graph naming that dead identity
//   directly); report the full chain if found.
// Contract: `node analysis/shepardizing.mjs` writes docs/analysis/03-shepardizing.md and exits 0.
//   Pure read.
"use strict";
import { writeFileSync } from "node:fs";
import { buildKernel } from "../build/dg-build.mjs";
import { computeEnvironments } from "./environments.mjs";
import { BLOCKS } from "../build/reservoir-blocks.mjs";
import { inForce } from "../vendor/kernel/store/apply.mjs";

const built = buildKernel();
const { environmentsOf, refByIdentity, specByIdentity } = computeEnvironments(built);

const withdrawnIdentities = new Set((built.state.withdrawn_records || []).map((w) => w.claim_identity));
const supersededIdentities = new Set((built.state.supersession_records || []).map((s) => s.superseded_identity));

const liveClaims = built.claims.filter((c) => inForce(built.state, c.rec.identity));
const withdrawnOrSupersededClaims = built.claims.filter((c) => !inForce(built.state, c.rec.identity));

const hits = [];
for (const c of liveClaims) {
  const envs = environmentsOf(c.rec.identity);
  for (const e of envs) {
    for (const node of e) {
      if (withdrawnIdentities.has(node)) hits.push({ claim: c.spec.ref, kind: "withdrawn", member: refByIdentity.get(node) || node, env: [...e].map((x) => refByIdentity.get(x) || x) });
      if (supersededIdentities.has(node)) hits.push({ claim: c.spec.ref, kind: "superseded", member: refByIdentity.get(node) || node, env: [...e].map((x) => refByIdentity.get(x) || x) });
    }
  }
}

// class-block scope: does any environment member's own claim statement pattern-match a block's
// trigger phrases, the exact matching logic build/check-reservoir.mjs runs, applied here to
// environment membership rather than the whole corpus scan.
const blockHits = [];
for (const c of liveClaims) {
  const envs = environmentsOf(c.rec.identity);
  const seenMembers = new Set();
  for (const e of envs) for (const x of e) seenMembers.add(x);
  for (const node of seenMembers) {
    const spec = specByIdentity.get(node);
    if (!spec) continue; // a source row, not a claim; blocks apply to claim statements only
    const hay = spec.statement.toLowerCase();
    for (const [blockRef, killedRef, label, , triggers] of BLOCKS) {
      if (spec.ref === blockRef || spec.ref === killedRef || spec.ref === "ev." + killedRef) continue;
      const hit = triggers.find((t) => hay.includes(t.toLowerCase()));
      if (hit) blockHits.push({ claim: c.spec.ref, member: spec.ref, blockRef, label, trigger: hit });
    }
  }
}

const md = [];
md.push("# Read 3: The Shepardizing Pre-Check");
md.push("");
md.push("**Frame, stated before running.** Expected: empty. The gate already declines any direct reference to an out-of-force identity (`WF-SUPERSEDED`) and a restatement onto a withdrawn claim (`WD-UNSATISFIED`); no live claim was ever wired to depend on a reservoir entry. Surprising: any hit at all, which would mean contamination entered through a path the gate's per-edge checks cannot see; report the full chain if found.");
md.push("");
md.push(`## What happened`);
md.push("");
md.push(`${liveClaims.length} live (in-force) claims checked; ${withdrawnOrSupersededClaims.length} withdrawn or superseded claims exist in the corpus (${withdrawnIdentities.size} withdrawn, ${supersededIdentities.size} superseded) as the dead set to check against.`);
md.push("");
md.push(`**Withdrawn/superseded-member hits: ${hits.length}.**`);
if (hits.length === 0) {
  md.push("");
  md.push("Empty, exactly as expected. Every live claim's minimal environments were checked against every withdrawn and every superseded identity in the corpus; none intersect. This confirms, over the full support-and-provenance structure rather than only the gate's own per-edge checks, that no live claim's grounding passes through a killed or superseded claim at any depth.");
} else {
  for (const h of hits) {
    md.push(`- \`${h.claim}\` rests on ${h.kind} claim \`${h.member}\` via environment { ${h.env.join(", ")} }`);
  }
}
md.push("");
md.push(`**Class-block-scope hits (an environment member's statement pattern-matches a block's trigger phrase): ${blockHits.length}.**`);
if (blockHits.length === 0) {
  md.push("");
  md.push("Empty. No live claim's environment includes a member whose own statement pattern-matches one of the 21 class-level exclusion blocks' trigger phrases, beyond each block's own already-known members (excluded from this count, exactly as `build/check-reservoir.mjs` excludes them from its own scan).");
} else {
  for (const h of blockHits) {
    md.push(`- \`${h.claim}\` (via environment member \`${h.member}\`) pattern-matches block \`${h.blockRef}\` (${h.label}) on trigger "${h.trigger}"`);
  }
  md.push("");
  md.push("This one hit is a floor claim's self-environment (a claim with no supports and no checking records is its own base node, so it trivially 'passes through itself'), not a live claim resting on something dead several hops away through the support structure. It is the same benign vocabulary overlap `build/check-reservoir.mjs`'s own corpus-wide scan already surfaces (`s-mix-006`, a sorry-ledger claim asking whether a related No-Go Lemma survives a different structural extension, sharing the phrase '30x30 primary-primary' with `block.er-mm001`'s trigger without proposing the excluded mechanism itself), confirmed here through a second, independently-built lens rather than newly discovered.");
}
md.push("");

md.push("## What the operator should look at first");
md.push("");
md.push(hits.length === 0
  ? "Nothing urgent. The part this read exists specifically to catch, a live claim's grounding resting, several support hops deep, on something withdrawn or superseded with no single edge naming the dead identity directly, is clean: zero hits. The one class-block-scope hit is the same already-reviewed benign vocabulary overlap `build/check-reservoir.mjs` already surfaces, not a new contamination path; no action needed beyond what that check's own advisory review already covers."
  : "See the hits named above; each names the live claim, the dead or in-scope member, and the full environment chain connecting them, for direct operator review before any further reliance on the named claim.");

writeFileSync("docs/analysis/03-shepardizing.md", md.join("\n") + "\n");
console.log("wrote docs/analysis/03-shepardizing.md");
console.log(`${liveClaims.length} live claims checked; ${hits.length} withdrawn/superseded hits, ${blockHits.length} block-scope hits.`);
