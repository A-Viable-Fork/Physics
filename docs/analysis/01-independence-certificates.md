# Read 1: Independence Certificates

**Frame, stated before running.** Expected: every Stage 3b lift holds, since 3b's own policy was already conservative. Surprising: any lift whose two audit environments intersect through the support structure in a way the lineage closure missed, or a currently-capped claim whose two records turn out genuinely disjoint under the deeper computation.

## What happened

0 claims currently declared `independently-rechecked` in the whole corpus.

**Vacuous by the numbers, reported honestly, not padded.** Stage 3b lifted zero claims to `independently-rechecked`; its one candidate (P3) was explicitly capped at `checked` instead, the correct and conservative reading given a shared ancestor. There is no existing lift for this read to recompute or overturn. This is the calibration the prompt anticipates for an empty-output read: the corpus's current shape has produced no independence lifts at all, at any stage through 3c, so "recompute every lift" is vacuously satisfied by there being none.

## The substantive check: every candidate for such a lift, re-verified against full environment intersection

2 claims in the whole corpus carry 2 or more distinct-party checking records, the only shape from which an own-basis independently-rechecked lift could ever be earned. Both are re-verified here against the deeper computation (support structure and provenance together via `analysis/environments.mjs`), not merely re-read from `build/check-independence.mjs`'s own shallower per-record footprint closure.

### `p3` (declared `checked`)

2 distinct-party checking records: checker:gemini-dr, checker:deepseek.

Computed environment(s), full support-and-provenance closure: 1
- { corpus.dirac-constraint-report }

**Result: not disjoint, capped correctly.** Shared ancestor(s) named: corpus.dirac-constraint-report. The deeper support-and-provenance computation agrees with the shallower rests_on-only check: this pair does not justify an independently-rechecked lift. Held at `checked`, which matches.

### `ev.mk5` (declared `checked`)

2 distinct-party checking records: checker:pk-dr, checker:pk-dr.

Computed environment(s), full support-and-provenance closure: 2
- { corpus.pk-dr-research-session, corpus.pk-dr-001-shore-pack-evidence }
- { corpus.pk-dr-research-session, corpus.pk-dr-003-grounded-generation }

**Result: not disjoint, capped correctly.** Shared ancestor(s) named: corpus.pk-dr-research-session. The deeper support-and-provenance computation agrees with the shallower rests_on-only check: this pair does not justify an independently-rechecked lift. Held at `checked`, which matches.

## What the operator should look at first

Nothing from this read demands action. Both re-checked cases (`p3`, `ev.mk5`) agree exactly with their existing declared grades under the deeper computation; zero claims are currently at `independently-rechecked` corpus-wide, so there is nothing to overturn. The expected outcome held; nothing surprising was found. This read is worth re-running whenever a new checking record is added with 2 or more distinct-party records on one claim, since that is the only shape it has anything to say about.
