// Role: the dg kernel's local read-surface provider (audit-prep Track 0.1). The one api-layer
//   module the analysis/ scripts read through, following the exact shape
//   vendor/api/providers/local-provider.mjs already establishes: a factory over a pre-built
//   snapshot, never importing corpora or build itself (api may import kernel, api, or other, never
//   build or corpora, per build/check-imports.mjs's own trust-boundary table). Every kernel-
//   touching computation an analysis script would otherwise need (footprintClosure over rests_on,
//   ceilingFor's constitutive-mode check, restatementClosure, collapsedRank, inForce) is resolved
//   here, once, so a periphery script downstream never needs vendor/kernel directly.
// Contract: createDgProvider(built) -> { claims, supports, closureOf, withdrawnIdentities,
//   supersededIdentities, refByIdentity, identityByRef, collapsedRankOf }. `built` is
//   build/dg-build.mjs's buildKernel() return value, supplied by the caller (a periphery or build
//   script), never constructed here. Pure function of its input; no read of any file, no mutation.
// Invariant: this file is the only analysis-facing surface allowed to import vendor/kernel
//   directly, per build/check-imports.mjs's layer table (api may import kernel). Every field this
//   factory returns is plain data (identities, refs, strings, arrays, Sets), never a live kernel
//   function or a reference back into the kernel's own record objects.
"use strict";
import { footprintClosure, ceilingFor } from "../vendor/kernel/schema/tables.mjs";
import { restatementClosure } from "../vendor/kernel/gate/gate.mjs";
import { collapsedRank } from "../vendor/kernel/schema/confidence.mjs";
import { inForce } from "../vendor/kernel/store/apply.mjs";

export function createDgProvider(built) {
  const { claims, links, tables, state } = built;

  const claimsOut = claims.map((c) => {
    const ceiling = ceilingFor(tables.kindTable, c.spec.kind);
    return {
      identity: c.rec.identity,
      ref: c.spec.ref,
      kind: c.spec.kind,
      statement: c.spec.statement,
      declared_grade: c.spec.declared_grade,
      source_id: c.spec.source_id,
      ceiling: ceiling ? ceiling.position : null,
      is_constitutive: !!(ceiling && ceiling.mode === "constitutive"),
      checking_records: (c.spec.checking_records || []).map((r) => ({
        checker_id: r.checker_id,
        independence: r.independence,
        footprint: [...footprintClosure(tables.sourceTable, r.footprint || [])],
      })),
      in_force: inForce(state, c.rec.identity),
    };
  });

  const supportsOut = (links || [])
    .filter((l) => l.link_kind === "supports")
    .map((l) => ({
      from_identity: l.from_identity,
      to_identity: l.to_identity,
      support_group: l.support_group || l.identity,
      citation_footprint: [...footprintClosure(tables.sourceTable, [l.source_id])],
    }));

  const restatementPairs = (links || [])
    .filter((l) => l.link_kind === "restatement")
    .map((l) => ({ from_identity: l.from_identity, to_identity: l.to_identity }));
  const closureOf = restatementClosure(restatementPairs);

  const withdrawnIdentities = new Set((state.withdrawn_records || []).map((w) => w.claim_identity));
  const supersededIdentities = new Set((state.supersession_records || []).map((s) => s.superseded_identity));

  const refByIdentity = new Map(claimsOut.map((c) => [c.identity, c.ref]));
  const identityByRef = new Map(claimsOut.map((c) => [c.ref, c.identity]));

  return {
    claims: claimsOut,
    supports: supportsOut,
    closureOf,
    withdrawnIdentities,
    supersededIdentities,
    refByIdentity,
    identityByRef,
    collapsedRankOf: (grade) => collapsedRank(grade),
  };
}
