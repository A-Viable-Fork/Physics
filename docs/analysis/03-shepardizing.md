# Read 3: The Shepardizing Pre-Check

**Frame, stated before running.** Expected: empty. The gate already declines any direct reference to an out-of-force identity (`WF-SUPERSEDED`) and a restatement onto a withdrawn claim (`WD-UNSATISFIED`); no live claim was ever wired to depend on a reservoir entry. Surprising: any hit at all, which would mean contamination entered through a path the gate's per-edge checks cannot see; report the full chain if found.

## What happened

316 live (in-force) claims checked; 113 withdrawn or superseded claims exist in the corpus (112 withdrawn, 1 superseded) as the dead set to check against.

**Withdrawn/superseded-member hits: 0.**

Empty, exactly as expected. Every live claim's minimal environments were checked against every withdrawn and every superseded identity in the corpus; none intersect. This confirms, over the full support-and-provenance structure rather than only the gate's own per-edge checks, that no live claim's grounding passes through a killed or superseded claim at any depth.

**Class-block-scope hits (an environment member's statement pattern-matches a block's trigger phrase): 1.**
- `s-mix-006` (via environment member `s-mix-006`) pattern-matches block `block.er-mm001` (MM antisymmetry-cancellation block (point block)) on trigger "30x30 primary-primary"

This one hit is a floor claim's self-environment (a claim with no supports and no checking records is its own base node, so it trivially 'passes through itself'), not a live claim resting on something dead several hops away through the support structure. It is the same benign vocabulary overlap `build/check-reservoir.mjs`'s own corpus-wide scan already surfaces (`s-mix-006`, a sorry-ledger claim asking whether a related No-Go Lemma survives a different structural extension, sharing the phrase '30x30 primary-primary' with `block.er-mm001`'s trigger without proposing the excluded mechanism itself), confirmed here through a second, independently-built lens rather than newly discovered.

## What the operator should look at first

Nothing urgent. The part this read exists specifically to catch, a live claim's grounding resting, several support hops deep, on something withdrawn or superseded with no single edge naming the dead identity directly, is clean: zero hits. The one class-block-scope hit is the same already-reviewed benign vocabulary overlap `build/check-reservoir.mjs` already surfaces, not a new contamination path; no action needed beyond what that check's own advisory review already covers.
