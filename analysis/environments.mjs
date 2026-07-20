// Role: the minimal-environments engine (docs/synthesis-backlog.md Section 4.1; docs/research/
//   PK-DR-006-graph-mathematics.pdf, "Independence as Disjointness", "The Free Experiments"
//   Experiment 3). For every claim, computes its minimal environments: the minimal sufficient sets
//   of base nodes (source rows and floor claims) under which the claim's grounding holds. This is
//   ATMS-style label propagation (de Kleer 1986) over the real support structure, minimized by
//   Boolean absorption (a + ab = a), never plain reachability.
// Contract: computeEnvironments(built) -> { environmentsOf(identity) -> [Set<string>], ... }.
//   `built` is buildKernel()'s return value (build/dg-build.mjs). Pure read: no claim, link, or
//   record is created or mutated. `environmentsOf` is memoized per identity.
// Invariant: respects the gate's own AND-OR grouping exactly. Within one `support_group`, all
//   members are jointly required (AND: the group's environments are the cross-product union of
//   each member's own environments). Across distinct groups (and across a claim's own basis path,
//   if it has checking records), any one path suffices (OR: environments simply accumulate, then
//   minimize). A `depends-on`, `contradicts`, or `restatement` link never contributes an
//   environment; only `supports` links do (restatement links still enter the restatement closure,
//   exactly as `kernel/gate/gate.mjs`'s own `restatementClosure` uses them, so a merged claim's
//   supports are read the same way the real gate reads them). A checking record's footprint and a
//   supports link's own citation both expand through `rests_on` via `footprintClosure`
//   (`kernel/schema/tables.mjs`), so every environment bottoms out at true roots, never at an
//   intermediate document that itself rests on something earlier.
// A claim with neither a checking record nor any supports link is a floor claim: its own identity
//   is a base node, exactly as a source row is. A constitutive-kind claim (axiom, theorem) is
//   always its own single base node: its ceiling's mode makes it foundational by kind, not by
//   basis or support, so it does not recurse into either.
"use strict";
import { footprintClosure } from "../vendor/kernel/schema/tables.mjs";
import { restatementClosure } from "../vendor/kernel/gate/gate.mjs";
import { ceilingFor } from "../vendor/kernel/schema/tables.mjs";

function isSubsetOf(small, big) {
  for (const x of small) if (!big.has(x)) return false;
  return true;
}
function unionSets(a, b) {
  const out = new Set(a);
  for (const x of b) out.add(x);
  return out;
}
function keyOf(env) {
  return [...env].sort().join("|");
}
// Boolean absorption: a + ab = a. Drop any environment that is a strict or non-strict superset of
// another kept environment; among exact duplicates, keep one.
function absorb(envs) {
  const seen = new Set();
  const uniq = [];
  for (const e of envs) {
    const k = keyOf(e);
    if (!seen.has(k)) { seen.add(k); uniq.push(e); }
  }
  uniq.sort((a, b) => a.size - b.size);
  const kept = [];
  outer: for (const e of uniq) {
    for (const k of kept) if (isSubsetOf(k, e)) continue outer;
    kept.push(e);
  }
  return kept;
}
// AND across a support_group's members: the cross-product union of each member's own alternative
// environments (every member's presence, under some one of its own alternatives, is required).
function crossUnion(perMemberAlternatives) {
  let acc = [new Set()];
  for (const alts of perMemberAlternatives) {
    const next = [];
    for (const partial of acc) for (const alt of alts) next.push(unionSets(partial, alt));
    acc = next;
  }
  return acc;
}

export function computeEnvironments(built) {
  const { claims, links, tables } = built;
  const specByIdentity = new Map(claims.map((c) => [c.rec.identity, c.spec]));
  const refByIdentity = new Map(claims.map((c) => [c.rec.identity, c.spec.ref]));
  const identityByRef = new Map(claims.map((c) => [c.spec.ref, c.rec.identity]));

  const supportsLinks = (links || []).filter((l) => l.link_kind === "supports");
  const restPairs = (links || [])
    .filter((l) => l.link_kind === "restatement")
    .map((l) => ({ from_identity: l.from_identity, to_identity: l.to_identity }));
  const closureOf = restatementClosure(restPairs);

  const cache = new Map();

  function environmentsOf(identity) {
    if (cache.has(identity)) return cache.get(identity);
    // cycle guard, mirroring gate.mjs's earnedOf: an in-progress node resolves to "no further
    // requirement" so recursion terminates; the real support graph is a DAG (Stage 3a wired it in
    // topological order), so this guard is defensive, not load-bearing in practice.
    cache.set(identity, [new Set()]);

    const spec = specByIdentity.get(identity);
    if (!spec) {
      // an identity the built claim set does not resolve (should not occur: the gate's own
      // WF-UNRESOLVED check would have declined any link naming it); treat conservatively as its
      // own base node rather than silently vanishing from the environment.
      const trivial = [new Set([identity])];
      cache.set(identity, trivial);
      return trivial;
    }

    const ceiling = ceilingFor(tables.kindTable, spec.kind);
    const isConstitutive = !!(ceiling && ceiling.mode === "constitutive");

    let envs;
    if (isConstitutive) {
      envs = [new Set([identity])];
    } else {
      const basisEnvs = (spec.checking_records || []).map((rec) => {
        const fp = footprintClosure(tables.sourceTable, rec.footprint || []);
        return new Set(fp);
      });

      const members = closureOf(identity);
      const grouped = new Map();
      for (const l of supportsLinks) {
        if (!members.has(l.to_identity)) continue;
        const g = l.support_group || l.identity;
        if (!grouped.has(g)) grouped.set(g, []);
        grouped.get(g).push(l);
      }
      const groupEnvs = [];
      for (const groupLinks of grouped.values()) {
        const perMemberAlternatives = groupLinks.map((l) => {
          const fromEnvs = environmentsOf(l.from_identity);
          const linkFp = footprintClosure(tables.sourceTable, [l.source_id]);
          return fromEnvs.map((e) => unionSets(e, linkFp));
        });
        groupEnvs.push(...crossUnion(perMemberAlternatives));
      }

      envs = [...basisEnvs, ...groupEnvs];
      if (envs.length === 0) envs = [new Set([identity])]; // floor claim: no basis, no support
    }

    const minimized = absorb(envs);
    cache.set(identity, minimized);
    return minimized;
  }

  return { environmentsOf, identityByRef, refByIdentity, specByIdentity, closureOf };
}
