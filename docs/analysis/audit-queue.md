# Audit Queue: the operator's work order for the external adversarial audit pass

**What this document is.** Audit-prep Track 2 does not run audits. No checking record is entered
here for any target below: no real external audit artifact exists yet for any of them, and
entering one without an artifact would violate the fabrication rule that governs every session
touching this store. This document is the landing site for that work: one entry per target,
naming the claim or document, its current grade and ceiling, its downstream mass, what an audit
artifact must actually contain to be enterable as a checking record, and the checker-identity and
footprint fields the landing session will need to fill in once a real artifact exists.

**Source.** Read 5's materiality queue (`docs/analysis/05-materiality-queue.md`), top fifteen by
downstream mass, plus the three genuine residual convergence points Track 1's re-citation
surfaced (`docs/analysis/02-contamination-audit.md`): the F12 Reconciliation Scout, Framework
Scout 1 BH Mechanism, and Framework Scout 4 Multi-Field Destabilization documents, each a single
source underlying a whole family of separately-presented kills. 18 entries total.

**Ordering.** By downstream mass (the same ordinal statistic Read 2 and Read 5 both use: a plain
count of distinct claims whose minimal environments touch the target, never a weighted score),
with one named exception: K3 leads regardless of raw mass, per Read 5's own K3 check. K1's own
checking record is real but permanently capped at `asserted` because its conjunctive co-premise
K3 is itself unaudited; auditing K3 is the one action in this queue that clears a stuck grade on a
second claim as a side effect, not just its own.

**Status (this regeneration).** That exception is now spent. K3 (item 1) was audited at Landing-1
and refined through the K3B shore; `k3-prime2` earned `independently-rechecked` on five
distinct-party adversarial records (`corpus.pk-aud-k3-001`, `corpus.pk-aud-k3-002`,
`corpus.pk-aud-k3b-001`, `corpus.pk-aud-k3b-002`, `corpus.pk-aud-k3b-003`), and K1's `asserted`
cap lifted as the predicted side effect. Item 1 is discharged. With its raw-mass exception removed
the queue reverts to pure downstream-mass order, so item 2 (`corpus.f12-reconciliation-scout-may-2026`,
9 claims) is the effective lead. Items 2 through 18 stand unchanged: no external adversarial audit
was run against any of them in the intervening sessions, verified against the built corpus (only the
K3 family carries adversarial-pipeline checking records). This is a factual discharge, not a
re-prioritization: the numbering below is left as-is, item 1's original work-order text kept as
historical record, and nothing beyond the queue's own downstream-mass ranking is applied. The
feeding contamination read (`docs/analysis/02-contamination-audit.md`) was regenerated in the same
pass and its ranking is current.

## 1. `k3`: DISCHARGED (audited Landing-1, refined K3B; see the Status note above)

- **Claim.** "T_3 is Constant [from Tier 4.2]. The DBI brane tension T_3 = 6/(kappa_5^2 L) is
  fixed by the Israel junction conditions, independent of brane position z_0. State-dependence
  lives in the Higgs VEV v(F_Q), not in T_3."
- **Current grade / ceiling.** declared `asserted`, earned `asserted` (no checking records at
  all), ceiling `independently-rechecked`.
- **Downstream mass.** 7 (rank 1 of 262 candidates, Read 5). K1's own checking record stays capped
  at `asserted` while K3 is unaudited (Stage 3b's finding, generalized by Read 5).
- **What the audit artifact must contain.** An independent, adversarial reproduction of the Israel
  junction-condition derivation itself: starting from the brane's stress-energy and the bulk
  metric, re-derive T_3 = 6/(kappa_5^2 L) (or find where it fails to follow) and independently
  check the claim that T_3 carries no z_0-dependence. A restatement of the trellis's own reasoning,
  or a literature citation confirming the formula's plausibility, does not satisfy the fabrication
  rule; the artifact must be a reproduction or an adversarial check of this specific derivation.
- **Fields the landing session will need.** `checker_id` naming the real party who performed the
  reproduction (never `checker:self`; governing-conventions Section 1's independence semantics
  require a distinct party for the check to contribute to K3's own basis); `independence` set
  honestly against whatever party performed the check; `footprint` naming the specific artifact
  (the reproduction write-up, its own source row) the new checking record cites, not `trellis.v4-16`
  again.

## 2. `corpus.f12-reconciliation-scout-may-2026`

- **Target.** A document, not a single claim: underlies ER-COSM-001 through 004 (all four
  evidence claims and all four class blocks) and `ev.f12`'s own withdrawal evidence, nine live
  claims sharing one footprint (Track 1, `docs/analysis/02-contamination-audit.md`).
- **Current grade / ceiling.** All nine claims declared `asserted`; the withdrawal/exclusion
  claims this family supports carry the family's shared footprint into every downstream block.
- **Downstream mass.** 9.
- **What the audit artifact must contain.** An independent, adversarial check of each of the four
  reconciliation-hypothesis derivations the scout report evaluates (the categorical DLRO/ODLRO
  conflation, the SL-AM-1 kinematic-dominance argument, the volume-fraction suppression argument,
  the radion mass-window mismatch), not a single blanket review of the scout document as a whole.
  Because all four kills currently rest on one document, a checking record entered against any one
  of them, citing only this scout report, would still be capped at `checked` under
  `docs/governing-conventions.md` Section 5 unless the audit itself is disjoint per-hypothesis: an
  artifact that only re-reads the scout's summary does not clear this family's shared-footprint
  cap.
- **Fields the landing session will need.** `checker_id` per hypothesis, honestly distinct if the
  four are checked separately; `footprint` naming the specific audit artifact per claim (four
  distinct artifacts would give four distinct footprints; one artifact re-cited four times would
  not lift the shared-footprint cap and should not be entered as though it does).

## 3. `t3.4`

- **Claim.** "Species Scale is Dynamical. The effective UV cutoff of quantum gravity depends on
  the spectrum of light states accessible at a given point in moduli space (Dvali 2010, van de
  Heisteeg-Vafa-Wiesner-Wu 2023). The Species Scale responds to the state of the matter sector
  through the spectrum it counts."
- **Current grade / ceiling.** declared `asserted`, earned `asserted` (no checking records),
  ceiling `corroborated`.
- **Downstream mass.** 6.
- **What the audit artifact must contain.** An independent check of the species-scale argument
  against the cited literature (Dvali 2010; van de Heisteeg-Vafa-Wiesner-Wu 2023): specifically,
  whether the dependence on the matter-sector spectrum this claim asserts actually follows from
  those sources' own derivations, not a restatement of the citation as though citing it were
  checking it.
- **Fields the landing session will need.** `checker_id` for a party independent of
  `lit.dvali-2010-species-scale`'s own authorship chain; `footprint` naming the audit artifact,
  disjoint from `lit.dvali-2010-species-scale` itself if the check is to ever support
  `independently-rechecked` rather than `checked`.

## 4. `corpus.framework-scout-1-bh-mechanism-may-2026`

- **Target.** A document underlying ER-DE-001, ER-DE-002, ER-DE-003 and their three class blocks,
  six live claims sharing one footprint (Track 1).
- **Current grade / ceiling.** All six declared `asserted`.
- **Downstream mass.** 6.
- **What the audit artifact must contain.** An independent, adversarial check of each of the three
  candidate mechanisms this scout evaluates within the AM-locked branch (black-hole bulk-routing
  energy injection, vacuum-driven reheating, trans-Planckian quantum-foam evolving-DE), per
  candidate, for the same reason named under entry 2: one blanket read of the scout does not clear
  the shared-footprint cap for more than one of the three at once.
- **Fields the landing session will need.** Same shape as entry 2: `checker_id` and `footprint`
  per candidate, not one artifact re-cited three times.

## 5. `corpus.framework-scout-4-multi-field-destabilization-may-2026`

- **Target.** A document underlying ER-DE-004, ER-DE-005, ER-DE-006 and their three class blocks,
  six live claims sharing one footprint (Track 1).
- **Current grade / ceiling.** All six declared `asserted`.
- **Downstream mass.** 6.
- **What the audit artifact must contain.** An independent, adversarial check of each of the three
  candidates this scout evaluates (multi-modulus slow-roll, hairon-sourced quintessence,
  multi-field hairon-quintessence destabilization), per candidate, for the same reason named under
  entries 2 and 4.
- **Fields the landing session will need.** Same shape as entries 2 and 4: `checker_id` and
  `footprint` per candidate.

## 6-11. The Bekenstein-Hawking sub-result mechanisms (4.2)

Six mechanism claims, all declared `asserted` with no checking records, all ceiling
`corroborated`, all downstream mass 4, all currently citing only `trellis.v4-16`:

| Rank | Claim | Statement (truncated) |
|---|---|---|
| 6 | `mech.bh-area-law-edge-modes` | Area law from edge mode counting. Multiple independent proofs in first-order form. |
| 7 | `mech.bh-rt-surface-anchor` | RT surface anchors to ETW defect via the Defect Extremal Surface prescription. |
| 8 | `mech.bh-so14-phase-space-protected` | SO(1,4) phase space protected through SSB; 20 first-class constraints preserved. |
| 9 | `mech.bh-radion-frozen-boundary` | Radion frozen out of boundary phase space; 44 second-class constraints. |
| 10 | `mech.bh-quarter-prefactor-invariance` | v(F_Q) dynamic invariance of the 1/4 prefactor; scaling analysis only, marked "Plausible" in the trellis. |
| 11 | `mech.bh-quarter-prefactor-microcanonical` | Exact 1/4 prefactor from microcanonical counting; marked "Open" in the trellis. |

- **What the audit artifact must contain, per claim.** An independent, adversarial reproduction of
  the specific sub-derivation named (the edge-mode count, the RT-to-ETW anchoring argument, the
  first-class/second-class constraint count, the prefactor scaling or microcanonical argument),
  not a discussion of Bekenstein-Hawking entropy in general. `mech.bh-quarter-prefactor-invariance`
  and `mech.bh-quarter-prefactor-microcanonical` are already marked "Plausible" and "Open" in the
  trellis's own text; an audit artifact for either must engage that open status directly, not
  assume the trellis's own optimistic framing.
- **Fields the landing session will need, per claim.** `checker_id` distinct per claim if checked
  separately (all six currently share `trellis.v4-16` as their only citation, so a shared-artifact
  check across more than one would face the same shared-footprint cap named under entries 2, 4,
  and 5); `footprint` naming each specific reproduction.

## 12-18. The composing-mechanism claims (F02, F20)

Seven claims, all declared `asserted` with no checking records, all ceiling `corroborated`, all
downstream mass 3:

| Rank | Claim | Statement (truncated) | Current source |
|---|---|---|---|
| 12 | `c02` | Algebraic decomposition via Scalar Cartan Equation, satisfies F02 (sole mechanism). | `corpus.half-sphere-report` |
| 13 | `c20b` | SO(1,4)/SO(1,3) congruent to S^3 forbids monopoles, strings, domain walls. | `trellis.v4-16` |
| 14 | `c20c` | Reheating: T_RH ~ 4e7 GeV from latent heat lambda v^4. | `trellis.v4-16` |
| 15 | `c20d` | Stochastic dissolution: H_RH ~ 160 keV, far below m_rho ~ MeV. | `trellis.v4-16` |
| 16 | `c20e` | Smooth handoff: f ~ 0 post-SSB gives v(F_Q) ~ M_Pl. | `trellis.v4-16` |
| 17 | `c20g` | Percolation dissolution: in the unbroken BF phase, g_mu_nu identically vanishes. | `corpus.graceful-exit-report` |
| 18 | `c20f-i` | Gauge instanton nucleation: S_inst = 4 pi^2/g^2, lambda-independent. | `corpus.graceful-exit-report` |

- **What the audit artifact must contain, per claim.** An independent, adversarial check of the
  specific calculation named (the Cartan-equation decomposition, the homotopy-group argument, the
  reheating temperature calculation, the Hubble-rate comparison, the two-fluid handoff argument,
  the BF-phase vanishing-metric argument, the instanton action calculation), not a general review
  of the F02/F20 composing-mechanism framework.
- **Fields the landing session will need, per claim.** `checker_id` and `footprint` per claim;
  `c02`, `c20g`, and `c20f-i` already cite a source other than `trellis.v4-16`
  (`corpus.half-sphere-report`, `corpus.graceful-exit-report`), so an audit of those three should
  check against that specific report's own reasoning, not the generic trellis citation.

## Constraints on every future landing session using this queue

Inherited unchanged from audit-prep: the fabrication rule applies to every entry above exactly as
it applied to this session. No checking record may be entered for any target in this queue until a
real audit artifact exists for it. An artifact that merely discusses, summarizes, or re-affirms
confidence in a derivation does not satisfy the rule; it must be a reproduction or an adversarial
check of the specific derivation named. Where a target shares a footprint with siblings (every
document-type entry, and every group of mechanism/composing claims still citing only
`trellis.v4-16`), a single shared artifact does not lift the shared-footprint cap for more than one
member at a time; entering it as though it does would misdeclare independence.
