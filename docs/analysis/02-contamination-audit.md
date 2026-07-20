# Read 2: The Shared-Assumption Audit (Contamination Read)

**Frame, stated before running.** Expected: the tier commitments and CC-1 dominate, since everything legitimately rests on them. Surprising, and the real target: a non-tier, non-obvious node, a single audit document or mid-graph derivation, that many otherwise-unrelated claims quietly share.

## Top convergence points

Ranked by plain count of distinct claims whose minimal environments touch the node (an ordinal count, never a weighted score, per docs/governing-conventions.md Section 6).

| Rank | Node | Claims touching it | Classification |
|---|---|---|---|
| 1 | `trellis.v4-16` | 41 | the generic authoring-source citation |
| 2 | `lit.standard-physics-t1t2` | 25 | a source-table document |
| 3 | `lit.standard-open-problems-physics` | 15 | a source-table document |
| 4 | `corpus.gemini-cc-run-1-april-2026` | 10 | a source-table document |
| 5 | `corpus.f12-reconciliation-scout-may-2026` | 9 | a source-table document |
| 6 | `corpus.half-sphere-report` | 7 | a source-table document |
| 7 | `k3` | 7 | a mid-graph claim (derivation) |
| 8 | `corpus.dirac-constraint-report` | 7 | a source-table document |
| 9 | `corpus.gemini-deep-research-report-1-gravitational-tunneling-enhanc` | 7 | a source-table document |
| 10 | `t3.4` | 6 | a Tier 0-3 commitment (conjecture-adopted) |
| 11 | `corpus.gemini-cc-run-2-april-2026` | 6 | a source-table document |
| 12 | `corpus.gemini-cc-radiative-stability-april-2026` | 6 | a source-table document |
| 13 | `corpus.framework-scout-1-bh-mechanism-may-2026` | 6 | a source-table document |
| 14 | `corpus.framework-scout-4-multi-field-destabilization-may-2026` | 6 | a source-table document |
| 15 | `corpus.dg-cft-051` | 5 | a source-table document |
| 16 | `corpus.dg-cft-052` | 5 | a source-table document |
| 17 | `corpus.dg-cft-053` | 5 | a source-table document |
| 18 | `corpus.anomaly-audit` | 5 | a source-table document |
| 19 | `corpus.gemini-escape-routes-march-2026` | 5 | a source-table document |
| 20 | `corpus.pk-dr-research-session` | 5 | a source-table document |

## What happened: the expected part held

`trellis.v4-16` (41 claims) and `lit.standard-physics-t1t2` (25 claims) dominate the top of the ranking, exactly as expected: the generic authoring-source citation and the broad standard-physics literature citation are legitimately load-bearing for a large fraction of the corpus's K-constraints and functions, not a hidden correlation.

## Re-run after audit-prep Track 1's re-citation: the 25-claim convergence, before and after

**Before (analysis-1, first run of this read):** `corpus.framework-scout-sub-chandrasekhar-type-ia-may-12-2026` was touched by 25 live claims (13 evidence claims and 12 class-level exclusion blocks), the single largest non-tier convergence this read found. The trellis's own Section 5 (THE DEAD) names a *different* Framework Scout report per kill in this family ('F12 Reconciliation Scout' for ER-COSM-001 through 004, 'Framework Scout 1 BH Mechanism' for ER-DE-001/002/003, 'Framework Scout 3 NEDE Thermal' for ER-HT-001, 'Framework Scout 4 Multi-Field Destabilization' for ER-DE-004/005/006), but none of these specific scout reports was ever catalogued as its own source row at Stage 3c Track 1; all twelve were mapped onto the one nearest-matching existing row, entered for the unrelated ER-WD-001 kill. Read 2's own text at the time named this "a citation-granularity gap ... rather than a defect to silently patch," since analysis-1's mandate changed nothing in the corpus.

**Track 1's correction:** for each of the 12 evidence claims, the trellis's own "Source" column names a specific, locatable artifact distinct from the sub-Chandrasekhar scout. Four new source rows were entered, one per named scout report (`corpus.f12-reconciliation-scout-may-2026`, `corpus.framework-scout-1-bh-mechanism-may-2026`, `corpus.framework-scout-3-nede-thermal-may-2026`, `corpus.framework-scout-4-multi-field-destabilization-may-2026`), and each evidence claim was re-cited to its honest source via supersession (a new claim superseding the old, per the CC-1 v4.14/v4.16 record-replacement precedent, never an in-place edit), with the corresponding block claim's supports link rewired to the successor. The superseded claims stay in the store, in history, still correctly citing the coarse scout row they were originally (mis)mapped to; they are simply no longer in force, so a live-graph read like this one no longer counts them.

**After:** `corpus.framework-scout-sub-chandrasekhar-type-ia-may-12-2026` is now touched by 2 live claims: `ev.dead.er-wd001-sub-chandra-wd-detonation` and `block.er-wd001`, its own original, always-honest ER-WD-001 citation. The 25-claim convergence dissolved entirely as granularity debt; none of it was a genuine shared-evidence risk, all of it was Stage 3c Track 1's citation coarseness, exactly as attributed.

## The residual is the real finding: three genuine single points of failure

Re-citing to the honest, specific artifact did not make convergence disappear; it relocated it to where the trellis's own text actually puts it, and most of the relocated convergence is real. Three of the four new source rows are still nontrivial convergence points, each a single scout document underlying multiple otherwise-separately-presented kills:

- `corpus.f12-reconciliation-scout-may-2026`: 9 live claims (ER-COSM-001 through 004, all four evidence claims and all four class blocks, plus `ev.f12`'s own withdrawal evidence). One scout report genuinely underlies the entire F12 reconciliation-hypothesis family; the trellis presents these as four independently-failed reconciliation attempts, but they share one audit document's footprint.
- `corpus.framework-scout-1-bh-mechanism-may-2026`: 6 live claims (ER-DE-001, ER-DE-002, ER-DE-003 and their class blocks). One scout report underlies all three candidate mechanisms it evaluated within the AM-locked branch.
- `corpus.framework-scout-4-multi-field-destabilization-may-2026`: 6 live claims (ER-DE-004, ER-DE-005, ER-DE-006 and their class blocks). Same pattern: one scout report, three candidates evaluated together, presented separately.

`corpus.framework-scout-3-nede-thermal-may-2026` (2 live claims: ER-HT-001's own evidence and its one block) is not a convergence in this sense; it is a single derivation citing a single source directly, the same one-to-one pattern as the ER-WD-001 citation above. It is named here for completeness, not flagged as an audit target.

This residual is genuine, not migration debt: each of the three flagged documents really is, per the trellis's own text, the one audit artifact a whole family of kills rests on. Any future attempt to treat two or more claims within one of these families as independently confirming would be structurally wrong under this corpus's own data. Named here plainly as single points of failure in the reservoir's evidence base, all three (`corpus.f12-reconciliation-scout-may-2026`, `corpus.framework-scout-1-bh-mechanism-may-2026`, `corpus.framework-scout-4-multi-field-destabilization-may-2026`) are flagged as audit targets for the operator's external pipeline and ranked into the materiality queue (`docs/analysis/audit-queue.md`, audit-prep Track 2).

## What the operator should look at first

If any future stage wants to cite two or more claims within the F12, BH-mechanism, or multi-field-destabilization families as independent evidence for anything (a corroboration finding, a future block claim, an external report), it must not: within each family they share one scout document's footprint and would be capped at `checked` at best under `docs/governing-conventions.md` Section 5's amended independence policy, never `independently-rechecked`, regardless of how the citing claim's own checking records are declared. This is not a defect to patch in this session; it is the honest shape of the evidence base until the operator's external pipeline produces an independent audit artifact for one of these scout reports.
