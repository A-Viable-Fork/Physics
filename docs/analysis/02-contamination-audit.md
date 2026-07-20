# Read 2: The Shared-Assumption Audit (Contamination Read)

**Frame, stated before running.** Expected: the tier commitments and CC-1 dominate, since everything legitimately rests on them. Surprising, and the real target: a non-tier, non-obvious node, a single audit document or mid-graph derivation, that many otherwise-unrelated claims quietly share.

## Top convergence points

Ranked by plain count of distinct claims whose minimal environments touch the node (an ordinal count, never a weighted score, per docs/governing-conventions.md Section 6).

| Rank | Node | Claims touching it | Classification |
|---|---|---|---|
| 1 | `trellis.v4-16` | 41 | the generic authoring-source citation |
| 2 | `lit.standard-physics-t1t2` | 25 | a source-table document |
| 3 | `corpus.quantum-crystal-ext` | 25 | a source-table document |
| 4 | `corpus.framework-scout-sub-chandrasekhar-type-ia-may-12-2026` | 25 | a source-table document |
| 5 | `lit.standard-open-problems-physics` | 15 | a source-table document |
| 6 | `corpus.gemini-cc-run-1-april-2026` | 10 | a source-table document |
| 7 | `corpus.half-sphere-report` | 7 | a source-table document |
| 8 | `k3` | 7 | a mid-graph claim (derivation) |
| 9 | `corpus.dirac-constraint-report` | 7 | a source-table document |
| 10 | `corpus.gemini-deep-research-report-1-gravitational-tunneling-enhanc` | 7 | a source-table document |
| 11 | `t3.4` | 6 | a Tier 0-3 commitment (conjecture-adopted) |
| 12 | `corpus.gemini-cc-run-2-april-2026` | 6 | a source-table document |
| 13 | `corpus.gemini-cc-radiative-stability-april-2026` | 6 | a source-table document |
| 14 | `corpus.dg-cft-051` | 5 | a source-table document |
| 15 | `corpus.dg-cft-052` | 5 | a source-table document |
| 16 | `corpus.dg-cft-053` | 5 | a source-table document |
| 17 | `corpus.anomaly-audit` | 5 | a source-table document |
| 18 | `corpus.gemini-escape-routes-march-2026` | 5 | a source-table document |
| 19 | `corpus.pk-dr-research-session` | 5 | a source-table document |
| 20 | `corpus.nuclear-astrophysics-anomalies` | 4 | a source-table document |

## What happened: the expected part held

`trellis.v4-16` (41 claims) and `lit.standard-physics-t1t2` (25 claims) dominate the top of the ranking, exactly as expected: the generic authoring-source citation and the broad standard-physics literature citation are legitimately load-bearing for a large fraction of the corpus's K-constraints and functions, not a hidden correlation.

## The surprising finding: a single Framework Scout report shared across the DE/HT reservoir family

`corpus.framework-scout-sub-chandrasekhar-type-ia-may-12-2026` is touched by 25 claims; its own root ancestor `corpus.quantum-crystal-ext` inherits the identical 25-claim count through the same chain (`corpus.quantum-crystal-ext` has exactly one document resting on it, this same report, per its own `rests_on` entry). This is exactly the shared-assumption pattern the read is built to find: not a tier commitment, not CC-1, a single Stage 3c Track 1 evidence citation quietly underlying dozens of claims the trellis itself presents as separately-derived kills.

The trellis's own Section 5 (THE DEAD) names a *different* Framework Scout report per kill in this family: 'F12 Reconciliation Scout' for ER-COSM-001 through 004, 'Framework Scout 1 BH Mechanism' for ER-DE-001, 'Framework Scout 3 NEDE Thermal' for ER-HT-001, 'Framework Scout 4 Multi-Field Destabilization' for ER-DE-004 and ER-DE-006, and so on. None of these specific scout numbers were ever catalogued as their own source-table row; Stage 3c Track 1 mapped all of them to the one nearest-matching existing row (`corpus.framework-scout-sub-chandrasekhar-type-ia-may-12-2026`, entered for the unrelated ER-WD-001 kill) rather than leaving the citation generic (`trellis.v4-16`) or adding a source row per scout report.

The practical consequence, named here for the first time: 25 claims genuinely environment-touch this one document (13 evidence claims and 12 class-level exclusion blocks). 13 further claims (the killed `dead.er-*` and `f12` claims themselves, plus their own citation of this source) do NOT environment-touch it, a subtlety worth stating plainly: a bare claim's `source_id` field is documentation metadata read by no grounding computation; only a checking record's own footprint, or a supports link's own citation, actually enters an environment. The 25 that do touch it (every evidence claim in this family, and every block claim built on top of one) share one footprint through this single document. Any future attempt to treat two of them as independently confirming would be structurally wrong under this corpus's own data, exactly the contamination this read exists to catch before it is relied on.

This is not itself a grading error: none of these claims is currently declared above `asserted` (the evidence claims) or the honest computed value (the class blocks), and none claims independence from any of the others. It is a citation-granularity gap in how Stage 3c Track 1 was built, named here as an honest finding rather than a defect to silently patch (this session changes nothing in the corpus).

## What the operator should look at first

If any future stage wants to cite two or more of these 25 claims as independent evidence for anything (a corroboration finding, a future block claim, an external report), it must not: they share the `corpus.framework-scout-sub-chandrasekhar-type-ia-may-12-2026` footprint and would be capped at `checked` at best under `docs/governing-conventions.md` Section 5's amended independence policy, never `independently-rechecked`, regardless of how the citing claim's own checking records are declared. Entering the individual Framework Scout report numbers (1, 3, 4, and the F12 Reconciliation Scout) as their own distinct source rows, each resting on `corpus.quantum-crystal-ext` only where the trellis's own text actually supports that lineage, would resolve the granularity gap; not attempted here, since this session changes nothing in the corpus.
