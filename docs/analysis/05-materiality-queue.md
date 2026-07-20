# Read 5: The Materiality Queue

**Frame, stated before running.** Expected: tier-adjacent and conjunctive-group members rank highest. Surprising, and the one this read is built to catch: K3 surfacing near the top, generalizing Stage 3b's K1 finding, if a heavily-depended-upon claim remains unaudited the same way.

**Monotone function used for ranking, stated here per docs/governing-conventions.md Section 6.** Downstream mass is a plain count of distinct claims whose minimal environments touch the candidate (identical to Read 2's statistic). Ceiling gap is `collapsedRank(ceiling) - collapsedRank(declared)`, an integer difference of ordinal rank positions used only as a sorting key, never combined across claims or treated as a grade value in its own right.

## Candidate pool

20 named claims from Stage 3b's under-claim ledger, plus 262 claims whose ceiling gap equals the maximum possible for their own kind (a genuinely large gap, not merely nonzero), pooled and deduplicated to 262 candidates, ranked by downstream mass.

## Top fifteen, by downstream mass

| Rank | Claim | Downstream mass | Ceiling gap | Kind | Declared | Ceiling | Downstream grade mix |
|---|---|---|---|---|---|---|---|
| 1 | `k3` | 7 | 3 | derivation | asserted | independently-rechecked | 6 asserted |
| 2 | `t3.4` | 6 | 2 | conjecture-adopted | asserted | corroborated | 5 asserted |
| 3 | `mech.bh-area-law-edge-modes` | 4 | 2 | mechanism | asserted | corroborated | 3 asserted |
| 4 | `mech.bh-rt-surface-anchor` | 4 | 2 | mechanism | asserted | corroborated | 3 asserted |
| 5 | `mech.bh-so14-phase-space-protected` | 4 | 2 | mechanism | asserted | corroborated | 3 asserted |
| 6 | `mech.bh-radion-frozen-boundary` | 4 | 2 | mechanism | asserted | corroborated | 3 asserted |
| 7 | `mech.bh-quarter-prefactor-invariance` | 4 | 2 | mechanism | asserted | corroborated | 3 asserted |
| 8 | `mech.bh-quarter-prefactor-microcanonical` | 4 | 2 | mechanism | asserted | corroborated | 3 asserted |
| 9 | `c02` | 3 | 2 | mechanism | asserted | corroborated | 2 asserted |
| 10 | `c20b` | 3 | 2 | mechanism | asserted | corroborated | 2 asserted |
| 11 | `c20c` | 3 | 2 | mechanism | asserted | corroborated | 2 asserted |
| 12 | `c20d` | 3 | 2 | mechanism | asserted | corroborated | 2 asserted |
| 13 | `c20e` | 3 | 2 | mechanism | asserted | corroborated | 2 asserted |
| 14 | `c20g` | 3 | 2 | mechanism | asserted | corroborated | 2 asserted |
| 15 | `c20f-i` | 3 | 2 | mechanism | asserted | corroborated | 2 asserted |

## The K3 check

`k3` carries a downstream mass of 7, ranking #1 of 262 in this queue. K1's own Stage 3b finding (a real checking record, still capped at `asserted` because its conjunctive co-premise K3 is itself unaudited) generalizes here: K3 does surface near the top, exactly the surprising pattern this read is built to catch: an audit of K3 would not just lift K3 itself, it would clear the weak-link drag on every claim conjunctively depending on it, K1 foremost among them.

## What the operator should look at first

`k3` (downstream mass 7) is the single highest-leverage audit target in the corpus: auditing it moves the most other claims' grades at once, more than any other candidate in this queue. K3 sits in the top five and deserves specific attention for the reason named above: it is both heavily depended upon and the direct cause of K1's own stuck grade.
