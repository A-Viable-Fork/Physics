# Status ledger

The single source of build truth from this commit forward. A stage is done when its ledger line moves, not before. Graded honestly: `built and verified` (with the check that verified it named), or `specified, not built` (named, never implied done).

Stages 0 through 3a. Stage 3 is split into three sessions (3a supports, 3b checking records and independence lifts, 3c the reservoir), each with one cause of grade movement so the distribution reviews stay legible. Stages 3b onward, and Stages 4 through 6, are specified in `docs/physics-kernel-recon-report.md` Section 6 and are not yet begun.

## Stage 0: the seat

| Item | Status | Verified by |
|---|---|---|
| Recon report landed byte-identical at `docs/physics-kernel-recon-report.md` | built and verified | `md5sum` against the source upload, matched |
| Trellis pair landed byte-identical at `trellis/4_16_main.md`, `trellis/4_16_appendices.md` | built and verified | `md5sum` against the source upload, matched |
| `trellis/README.md`, stating the trellis is read-only authoring source | built and verified | manual read |
| Epistack substrate vendored: `upstream/epistack` pinned submodule, `vendor/` extraction, `upstream/lock.json` | built and verified | `node build/check-substrate.mjs` |
| Two deliberate divergences applied and recorded (`ai-audit` source class, `computation` pack) | built and verified | `node build/check-substrate.mjs` section 5; `node build/check-compute-invariants.mjs` (Stage 1) exercises the computation-pack divergence's runtime behavior directly |
| `docs/governing-conventions.md` (checker-identity, Lean, verdict-ladder policy) | built and verified | manual read against recon report Sections 1, 2, 4 |
| Trust-boundary check wired into CI | built and verified | `node build/check-imports.mjs`; a synthetic violation was planted and confirmed to fail the check before being discarded |
| CI workflow (`check-substrate`, `check-imports` on every push) | built and verified | green run on this repository's Actions tab at the `stage-0` tag |
| `README.md` | unchanged | Stage 0 did not force a change |
| `docs/status-ledger.md` | built and verified | this file |

## Stage 1: the kernel root

| Item | Status | Verified by |
|---|---|---|
| Scaffolder config `corpora/dg-config.json`: kernel id `dg`, 4 adopted shared kinds, 12 local kinds with ceilings | built and verified | `node build/check-dg.mjs` section 1 (every adopted hash matches the vendored shared subtree; every local kind's ceiling is a valid confidence-order position) |
| Source table: 225 rows, seeded from the trellis Appendix E corpus index (195 rows, mechanically extracted) plus the external literature Tier 0-3 cites (27 rows, hand-curated) plus 3 bundled/self-grounding rows the corpus index and tier text left open | built and verified | `node build/check-dg.mjs` section 2 (the source table builds; `makeSourceTable` throws on a bad `source_class`, and it did not) |
| `build/new-kernel.mjs`, adapted from `vendor/scaffolder/new-kernel.mjs` for the vendored layout | built and verified | ran it against the config; it emitted `corpora/dg/tables.js`, `corpora/dg/dg-data.js`, `build/dg-build.mjs`, `build/check-dg.mjs` and reported the generated check green |
| The empty `dg` kernel, generated and gate-verified | built and verified | `node build/check-dg.mjs` (committed on its own before any claim was entered, per the Stage 1 milestone discipline) |
| 45 Tier 0-3 claims entered (4 axiom, 15 standard-result, 19 observation, 7 conjecture-adopted) | built and verified | `node build/check-dg-tier1.mjs`: exact per-kind counts, the whole contribution accepted by the real gate, and every claim's `declared_grade` recomputed against `kernel/grounding/earned-grade.mjs` and confirmed equal, not merely `<=` |
| Grading discipline: axioms self-ground to `constitutive` by their kind's ceiling; every other Stage 1 claim declares `asserted`, the honest floor with no support links or checking records yet | built and verified | `node build/check-dg-tier1.mjs` section 4; a synthetic claim declared above its earned grade (`standard-result` at `checked` with no support) was planted at build time and confirmed to be declined by the real gate with `GM-ABOVE`, then discarded |
| `check-imports.mjs` exercised against real Stage 1 code (`corpora/dg/`, `build/dg-build.mjs`, `build/new-kernel.mjs`) | built and verified | `node build/check-imports.mjs`; a synthetic `periphery/` file importing `vendor/kernel/` directly was planted and confirmed to fail before being discarded (this is a second, independent plant from the Stage 0 one, run against the now-real corpus tree) |
| The oracle policy (below), naming which vendored oracles run in CI and why | built and verified | this section |
| `build/check-gate.mjs`, `build/check-type-hash.mjs`, `build/check-compute-invariants.mjs`: the three substrate-behavior oracles the policy names | built and verified | each runs green; `check-gate.mjs` and `check-type-hash.mjs` are adapted, path-only, from the vendored originals (diffable against `upstream/epistack/build/` at the pinned commit to confirm no assertion changed); `check-compute-invariants.mjs` is hand-written locally since the vendored `check-compute.mjs` is corpus-bound (see the oracle policy) |
| CI workflow extended to run all Stage 1 checks on every push | built and verified | green run on this repository's Actions tab at the `stage-1` tag |
| `docs/status-ledger.md` | built and verified | this file |

### A bug the Stage 1 build caught in Stage 0's own work

`build/check-gate.mjs` (added this stage) failed once before it passed: its D.4 assertion scans each vendored v3 kernel file's source text for anything that looks like a non-relative, non-`node:` import (`from "..."`). The Stage 0 divergence comment in `vendor/kernel/schema/tables.mjs` read "...a grounding source distinct from "testimony", per..." which contains the literal substring `from "testimony"` and false-positived the scanner. The comment was reworded (`distinct in kind from the "testimony" class`) to remove the accidental match; `upstream/lock.json`'s hash for that file was recomputed and updated; `check-substrate.mjs` and `check-gate.mjs` both re-verified green. Named here because it is exactly the kind of interaction a later oracle can catch in an earlier stage's prose, and pretending Stage 0 was untouched by Stage 1 would misstate the history.

## Oracle policy

Standing policy on which of the vendored substrate's own oracles run in this repository's CI, and why:

- **Substrate-behavior oracles run in CI permanently.** `build/check-gate.mjs` (canonical form, records, the confidence order, the earned-grade rule, the gate's accept/decline computation, apply/chain/supersession/decay, the verifier), `build/check-type-hash.mjs` (canonical-form content-addressing of a shared type bundle), and `build/check-compute-invariants.mjs` (the compute register's no-standing rule and mandatory assumptions manifest, including the `computation` pack divergence) are what substrate non-drift means beyond hash matching: `check-substrate.mjs` proves the vendored bytes match the lock, these three prove the vendored *behavior* still holds. The first two are adapted, path-only, from `upstream/epistack/build/`; the third is written locally because `check-compute.mjs` is corpus-bound (it imports `corpora/compute/stats-pack.js` and `build/covid-build.mjs`, neither vendored here) and so is not portable to a seat with no corpus yet.
- **`check-translate.mjs` is not adopted.** It tests the case-graph dialect the vendored `build/translate-trellis.mjs` consumes, not the DG trellis dialect this repository authors from. A DG-dialect translator, if Stage 2 builds one, carries its own acceptance oracle; running the vendored translator's oracle here would verify a pipeline this repository does not use.
- **Corpus-level checks over the DG graph are this repository's own and arrive with the corpus.** `build/check-dg.mjs` (substrate coherence over whatever `corpora/dg/dg-data.js` currently holds) and `build/check-dg-tier1.mjs` (the Stage 1 tier-commitment content, exactly specified) are the first of these; Stage 2 onward will add more as CC-1, the K-constraints, the functions and contracts, the sorry ledger, and the exclusion reservoir enter the graph.

## Stage 2: DG bare

The DG region entered structurally, bare: faithful statements, structural links only (`depends-on`, `contradicts`), no supports, no checking records. LLM-assisted manual entry under generate-and-verify, no translator built (per the Stage 2 prompt's own pre-made decision).

| Item | Status | Verified by |
|---|---|---|
| CC-1 v4.14 form, v4.16 cumulant-form restatement, and the supersession record between them | built and verified | `node build/check-dg.mjs`; the supersession's live effect was exercised (below) |
| `WF-SUPERSEDED` exercised | built and verified | a draft claim with a `depends-on` link citing the superseded v4.14 identity was planted against the real built state and `decide()` confirmed to return `declined` with `["WF-SUPERSEDED", "WF-DEPENDS"]`, then discarded |
| K1 through K17 (20 derivation claims: 17 constraints plus P3, P8, P11, the only structural proofs that actually carry a P-number in the trellis) | built and verified | `node build/check-dg-coverage.mjs`; every provenance bracket resolvable to an already-entered claim is a real `depends-on` link (24 links) |
| 19 live function claims, 30 surviving mechanism claims (contracts), 3 prediction claims with falsification conditions | built and verified | `node build/check-dg-coverage.mjs`; 91 `depends-on` links wire function to constraint, mechanism to parent function, prediction to parent |
| The branch fork: Path A, Path B, their `contradicts` link, DESI Y5 / Euclid selection criteria as `closing_condition` on each; `B-NU-1` entered depending on Path A | built and verified | `node build/check-dg-coverage.mjs`; the `contradicts` link moves the gate's decision to `accepted-with-disagreement`, verified as the honest non-decline reading, not a failure |
| Branch-commitment ceiling cap exercised | built and verified | a bare `branch-commitment` claim declared at its ceiling (`corroborated`) with no support was planted and confirmed `declined` with `GM-ABOVE`; both real branch commitments declare `asserted` instead, the grade the gate actually computes, not the ceiling the Stage 2 prompt anticipated (see the divergence note below) |
| 28 live sorries as `derivation` claims with `closing_condition` and status/priority/gating in `extensions`; 5 speculation-tier entries as `comment` claims | built and verified | `node build/check-dg-coverage.mjs` |
| Comment non-citability exercised | built and verified | a `supports` link from a comment claim was planted and `rejectCommentSupport()` confirmed to throw `comment-support-barred` naming both identities, then discarded |
| `build/check-dg-coverage.mjs` and its manifest (110 entries: every K, P, F, live mechanism, prediction, branch, `B-NU-1`, live sorry, and speculation comment Stage 2 claims to have entered) | built and verified | verified non-vacuous: one manifest entry was deleted, the check confirmed to fail and name it, restored, re-confirmed green; joined to CI |
| `docs/status-ledger.md`, this section, and the grade-distribution table below | built and verified | this file |

### Earned-grade distribution, whole corpus, Stage 2 close

Recomputed live from `kernel/grounding/earned-grade.mjs` via each claim's real `earnedGrade()` call, not asserted by hand. 155 claims total; every `declared_grade` equals its earned grade (0 mismatches). The gate's decision over the whole corpus is `accepted-with-disagreement`, basis `SEC-6-contradiction` (the Path A / Path B `contradicts` link), never a decline.

| Kind | Earned grade | Count |
|---|---|---|
| axiom | constitutive | 4 |
| standard-result | asserted | 15 |
| observation | asserted | 20 |
| conjecture-adopted | asserted | 7 |
| derivation | asserted | 50 |
| function | asserted | 19 |
| mechanism | asserted | 30 |
| prediction | asserted | 3 |
| branch-commitment | asserted | 2 |
| comment | ungraded | 5 |
| **Total** | | **155** |

`derivation` (50) is CC-1 (2 claims) + K1-K17 (17) + P3/P8/P11 (3) + the 28 live sorries. Every non-axiom, non-comment claim in the corpus sits at `asserted`, the honest bare floor: nothing but a constitutive-mode kind can earn above it without a support link or a checking record, and this stage adds neither. The single `constitutive` cluster is the 4 Tier 0 axioms, self-grounding by their kind's ceiling since Stage 1. No claim anywhere in the corpus is `checked`, `independently-rechecked`, or `corroborated`: that lift is Stage 3's job.

### Divergences from the Stage 2 prompt, corrected against the trellis or the kernel

- **"P1 through P3" names structural proofs that do not exist under those labels.** The trellis's own "Structural Proofs" table carries exactly three P-numbered rows: P3 (DOF count), P8 (KSS bound), P11 (diffeomorphism invariance). There is no P1 or P2. Entered the three real labels; the count (three) matches what the prompt asked for even though the labels do not.
- **The branch commitments do not earn above `asserted` under Stage 2's own constraints.** The prompt names them a structural exception, self-grounding through their entry act. Under the real gate, a `branch-commitment` claim's kind ceiling is `corroborated`, not `constitutive`; without a `constitutive`-mode kind, a support link, or a checking record (all excluded by Stage 2's own "structure, bare" rule), nothing lifts a claim above `asserted`. Verified by planting a bare claim declared at `corroborated` and watching the real gate decline it with `GM-ABOVE`. Declared both branch commitments `asserted`, trusting the decline over the prompt's expectation, the same discipline Stage 1 already established.

## Stage 2.5: patch and lineage

An interstitial session, four tracks, no grounding work (no supports, no checking records, no withdrawal records, no reservoir entries; those stay Stage 3). Same bare discipline as Stage 2 throughout.

| Item | Status | Verified by |
|---|---|---|
| Track 1: 16 dispositioned stub rows entered (8 default-shaped `mechanism` claims, torsional hair as `comment`, pycnonuclear fusion rates as a parentless `mechanism`, the muonic atom test as `prediction`, 6 Bekenstein-Hawking (4.2) sub-result `mechanism` claims) | built and verified | `node build/check-dg-tier1.mjs` (each earns exactly its declared `asserted`, or `ungraded` for the comment); a `supports` link from the torsional-hair comment was planted and `rejectCommentSupport()` confirmed to throw `comment-support-barred`, then discarded |
| Track 2: K18 and 12 GUT Box occupant/structural-finding `derivation` claims (`gut-box-occupant`, SF-G1/G2/G3, SF-D0/D1/D2, SF-MIX-001/002/003, SF-MM-002/003); base-landscape and toric-fiber-exclusion tables folded into `gut-box-occupant`'s `extensions.trellis_context`; the 7 indeterminate toric fibers carried as an explicit `closing_condition` | built and verified | `node build/check-dg.mjs`, `node build/check-dg-tier1.mjs` |
| Coverage manifest extended to 139 entries (110 at Stage 2 close, plus the 16 Track 1 and 13 Track 2 refs) | built and verified | `node build/check-dg-coverage.mjs`; a manifest entry (`sf-mm-003`) was deleted, the check confirmed to fail and name exactly that ref, restored, re-confirmed green |
| Track 3: `rests_on` populated for 37 of the 182 previously-unlinked Appendix E source rows (50 of 195 total, up from 13) | built and verified | `node build/check-dg.mjs` (source table still builds); `footprintClosure()` computed over two now-linked documents (`cy4-euler-and-flux`, `yukawa-rank-analysis`) that both trace to the same Torus Permutation Check / F-Theory Base Adaptation ancestry, confirmed to share a non-disjoint footprint (3 common ancestors) where each was previously a disjoint singleton |
| Track 4: 29 of the 49 testimony-default source rows reclassified (18 to `ai-audit`, 10 to `preprint`, 1 to `peer-reviewed`); 8 confirmed as genuinely `testimony`; 12 left undetermined, retained `testimony` | built and verified | `node build/check-dg.mjs` (source table still builds under the revised classes); evidence per row in the Track 4 commit message |
| `docs/status-ledger.md`, this section, the grade-distribution table below, the lineage gap list, and the reclassification summary | built and verified | this file |

### Earned-grade distribution, whole corpus, Stage 2.5 close

Recomputed live from `kernel/grounding/earned-grade.mjs` via each claim's real `earnedGrade()` call. 184 claims total (155 at Stage 2 close, plus 16 Track 1 and 13 Track 2); every `declared_grade` equals its earned grade (0 mismatches). The gate's decision over the whole corpus is still `accepted-with-disagreement`, same basis as Stage 2 (the Path A / Path B `contradicts` link); nothing in Stage 2.5 changed the gate's basis for that reading.

| Kind | Earned grade | Count | Change from Stage 2 |
|---|---|---|---|
| axiom | constitutive | 4 | unchanged |
| standard-result | asserted | 15 | unchanged |
| observation | asserted | 20 | unchanged |
| conjecture-adopted | asserted | 7 | unchanged |
| derivation | asserted | 63 | +13 (Track 2: K18 + 12 structural findings) |
| function | asserted | 19 | unchanged |
| mechanism | asserted | 44 | +14 (Track 1: 8 stub rows + 6 Bekenstein-Hawking sub-results) |
| prediction | asserted | 4 | +1 (Track 1: muonic atom discrimination test) |
| branch-commitment | asserted | 2 | unchanged |
| comment | ungraded | 6 | +1 (Track 1: torsional hair) |
| **Total** | | **184** | +29 |

Matches the stop condition's expectation exactly: new entries land at `asserted`, one new `comment` (`ungraded`), nothing else moves. No claim anywhere in the corpus is `checked`, `independently-rechecked`, or `corroborated`: still Stage 3's job.

### Track 3: the lineage gap list

145 of the 195 Appendix E source rows have no determinable `rests_on` lineage from the corpus index text or the main trellis body. Listed here, not defaulted, per the hard constraint that a visible gap beats a guessed link. Grouped by why the gap exists:

**Root documents** (no earlier corpus document to rest on; the start of an investigation chain): `corpus.paper-0`, `corpus.paper-1`, `corpus.torsion-steps-1-5`, `corpus.stellar-death-paper`, `corpus.trellising`, `corpus.dirac-constraint-report`, `corpus.p11-p8-report`, `corpus.qfi-scaling-derivation`, `corpus.torus-permutation-check`, `corpus.chat-dirac-rescue-pdf-april-2026`, `corpus.chatgpt-s-mm-002-preliminary-report-april-2026`, `corpus.gemini-cc-run-1-april-2026`, `corpus.dg-cft-055`, `corpus.dg-cft-056`, `corpus.dg-cft-057`, `corpus.bedroya-obied-vafa-wu-2025-arxiv-2507-03090`, `corpus.paper-0-extraction-march-2026`, `corpus.dg-cft-050`, `corpus.dg-cft-058`, `corpus.gemini-coupling-uniqueness-audit-april-2026`, and the standalone external literature rows (`corpus.elvang-et-al-2026-arxiv-2601-11705`, `corpus.montero-et-al-2026-arxiv-2512-09052`, `corpus.soker-2026-arxiv-2601-05774`, `corpus.romani-et-al-2026-arxiv-2512-05099`, `corpus.vip-collaboration-2026-arxiv-2601-00651`, `corpus.beasor-et-al-2026-arxiv-2601-05317`, `corpus.sakamura-2025-arxiv-2510-26367`, `corpus.antonini-et-al-2026-arxiv-2602-02670`, `corpus.meluccio-2025`).

**Parallel/independent investigations, not sequential** (same topic, different pathway, no citation of each other): the five LUNA mechanism-test reports (`corpus.luna-geometric-dimple`, `corpus.luna-torsion-screening`, `corpus.luna-debye-coherence`, `corpus.luna-laser-stimulation`, `corpus.luna-nonlinear-electron`) and their two synthesis reports (`corpus.luna-screening-v1`, `corpus.luna-screening-v2`); the GUT Box survey family (`corpus.gut-architectures-survey`, `corpus.gut-structural-audit`, `corpus.ps-red-team`, `corpus.gut-bottleneck-investigation`); the three Framework Scout evolving-DE kills (`corpus.dg-cft-055`, `corpus.dg-cft-056`, `corpus.dg-cft-057`); `corpus.fiber-exclusion-sweep` relative to `corpus.del-pezzo-exclusion-sweep` (companion analyses in the same survey, not one built on the other's output).

**Broad syntheses touching most of the corpus** (linking to a single predecessor would be an arbitrary selection among dozens): `corpus.research-roadmap-synthesis`, `corpus.literature-reconnaissance-march-2026`, `corpus.empirical-anomaly-survey-march-2026`, `corpus.qg-funnel-analysis`, `corpus.gauge-sector-derivation-report`.

**No named predecessor in the available text** (the remaining rows; content reads as new investigation or independent analysis with no explicit citation of another cataloged document): the full remaining list is reproducible by running `node -e "const cfg=require('./corpora/dg-config.json'); cfg.sources.forEach((s,i)=>{if(i<195 && !(s.rests_on||[]).length) console.log(s.source_id)})"` against this commit; 145 rows total across all three categories above plus this one. Stage 3 should not assume any of these are independent for footprint-closure purposes; it should treat the absence of a link as "unknown," not "zero."

### Track 4: undetermined source classes

12 rows read closely but left `testimony` because no evidence either way was found in the available text (the corpus index; no fuller underlying document is accessible from this repository): `corpus.qfi-scaling-derivation`, `corpus.objective-collapse-report`, `corpus.peer-review` (explicitly considered for `peer-reviewed`; no journal or venue named anywhere in the text, so not reclassified rather than risk mistaking a simulated or internal review for an actual submission), `corpus.sn-2024afav-chirp-audit`, `corpus.sn-2024afav-empirical-falsification`, `corpus.stellar-cooling-audit`, `corpus.axion-hypothesis-review`, `corpus.lean-4-formalization`, `corpus.lean-4-dirac-bergmann-feasibility`, `corpus.lean-4-phase-space-architecture`, `corpus.lean-4-ns-interface`, `corpus.lean-4-qfi-trellis-modules`. The five Lean rows share one recurring problem: formal-verification code artifacts do not clean-match any of the four positive classes (`ai-audit`, `preprint`, `peer-reviewed`, `dataset`) and have no explicitly-tagged twin elsewhere in the corpus to reason from by analogy. Worth a dedicated look if Stage 3 needs their independence status.

### Divergences from the Stage 2.5 prompt

None. Track 1 through Track 4 were executed as specified; the only judgment calls (the reclassification evidence per row, the lineage-link evidence per row, the exact statement text for the GUT Box occupant and structural findings) are documented inline in the Track 2, 3, and 4 commit messages rather than as divergences from the prompt's own instructions.

## Stage 3a: supports

The first of three Stage 3 sessions. Wires the dependency structure the trellis already encodes as `supports` links: K-constraints and structural proofs from tier commitments and each other, mechanisms from the derivations/observations/tier claims their Evidence columns cite, functions from the mechanisms that satisfy them, predictions from the mechanisms that produce them. No checking records, no independence lifts, no withdrawal records: those are Stage 3b and 3c.

| Item | Status | Verified by |
|---|---|---|
| Track 0: third substrate divergence (`formal-artifact` source class), the 5 Lean rows and `corpus.peer-review` reclassified, `corpus.white-et-al-2026-phys-rev-research-8-013264` audited and confirmed external literature, `docs/governing-conventions.md` Sections 4 (peer-reviewed is external literature only) and 5 (the independence-lift lineage-group policy) | built and verified | `node build/check-substrate.mjs` |
| Track 1a: 28 supports links across K1-K18, P3, P8, P11, topologically ordered | built and verified | `node build/check-dg-tier1.mjs` section 3 (declared equals earned via the real gate `grade_table`, 0 mismatches) |
| Track 1b: 12 supports links across 7 mechanisms | built and verified | same |
| Track 1c: 37 supports links across 16 functions and 2 predictions | built and verified | same |
| `build/dg-build.mjs` extended to return `links` and `supersessions` (previously computed but not exposed) | built and verified | `node build/check-dg-tier1.mjs` section 5 (supports-link count read from the real build) |
| `build/check-dg-tier1.mjs` updated: section 3 reads the real gate `grade_table` instead of reimplementing `earnedGrade()` with supports forced to `[]`; section 5 drops the "no supports anywhere" assertion (retired by this stage) and keeps "no checking record anywhere" | built and verified | this file, run green |
| `docs/status-ledger.md`, this section, the attributed distribution table, the unwireable-provenance gap list | built and verified | this file |

### Earned-grade distribution, whole corpus, Stage 3a close

77 new `supports` links (28 + 12 + 37), 0 new claims (Track 1 adds edges, never nodes, per its own scope). 184 claims total, unchanged from Stage 2.5 close.

| Kind grade | Before Stage 3a | After Stage 3a | Change |
|---|---|---|---|
| constitutive | 4 | 4 | unchanged |
| asserted | 174 | 174 | unchanged |
| ungraded | 6 | 6 | unchanged |

**No claim moved.** This is the honest middle the stage prompt itself anticipates, not a wiring failure. Every real supports link this stage wired resolves, directly or through a chain, into a Tier 1-3 claim (a standard-result, observation, or conjecture) that is itself still bare `asserted`: no checking record exists anywhere in the corpus until Stage 3b. `supportDelivery`'s weakest-of-within-group, strongest-of-across-groups fold cannot lift a claim past what its weakest co-necessary premise delivers, and every premise available to cite in this corpus currently delivers `asserted`. The two verification exercises below confirm this mechanically rather than by assertion: real edges now carry real weight, and that weight is honestly `asserted` today, `asserted` tomorrow until Stage 3b changes what the tier claims themselves earn.

### Verification exercises, planted and observed

**Contamination.** K7's real conjunctive group is `{K1, T3.4, SF-D0}`. In a scratch, in-memory scenario (the real corpus untouched), T3.4 and SF-D0 were hypothetically lifted to `checked`, K1 left at its real `asserted` value: K7's earned grade, recomputed via the real `earnedGrade()`, stayed `asserted`, confirming the weakest member (K1, itself bottoming out at K3, which has no supports) caps the whole conjunctive group regardless of how strong the other two members are. For contrast, lifting all three (including K1) let the group deliver `corroborated`, confirming the cap is real and not a permanent ceiling.

**Conjunctive-group member removal.** K9's real support is a singleton group, `{T1.3}`. In the same scratch scenario, T1.3 was hypothetically lifted to `checked` (K9 would earn `corroborated`), then that one member was removed (K9's supports list emptied): K9's earned grade dropped back to `asserted` (support from nothing is nothing), exactly reversing the elevation.

Both exercises ran entirely in a standalone script's memory against the real vendored `earnedGrade()`; no corpus file was read for writing or modified.

### Unwireable provenance: the gap list

Named per the hard constraint that a bracket citing something not in the graph and not in the source table is a gap, never a guessed edge. Full detail and reasoning live in the Track 1a/1b/1c commit messages; summarized here.

**K-constraints and structural proofs (Track 1a):** 13 of 21 K/P claims cite at least one "Tier 4.X" trellis construction section (K1, K3, K5, K6, K8, K10, K12, K15, K18, P3, P8, P11 all cite one; K6 also cites a bare "Tier 4" with no section number), which is trellis prose describing the physical construction, not a claim or a source-table row, and does not resolve. K11 additionally cites the dead function F13; K17 the dead contract sub-item C13e; K16 the source-table document "Hydrodynamic Swampland Bounds v3" (out of scope for K-constraint supports, which draw only from tier commitments and each other per the Track 1 instruction). K3, K8, P3, P8, and P11 have no resolvable citation at all and so get no supports link.

**Mechanisms (Track 1b):** 37 of 44 mechanisms get no new supports link. This is not the same kind of gap: each one's Evidence or Source column names a source-table document (Paper 0, Half-Sphere Report, Occam Audit, Graceful Exit Report, and others), an external citation never cataloged as a source row (Sukhbold 2016, GRB 060614, Donnelly and Freidel 2016), or a generic technique or derived quantity with no standalone claim (homotopy computations, the Defect Extremal Surface prescription). None of these is a bracket citing something unresolvable; each is evidence that was never atomized into a graph claim, which a `supports` link, requiring two real claim identities, mechanically cannot represent. Two tempting but declined matches, on the record: `mech.pycnonuclear-fusion-rates`'s "LUNA" citation is laboratory d+d screening (B12), a different physical context from crust pycnonuclear rates despite the shared word; `mech.cusp-core-resolution` and `mech.mond-a0-leakage`'s topical proximity to B3 (Dark Matter) was judged too generic to cite without guessing.

**Functions and predictions (Track 1c):** F14, F22, and F-CC have no mechanism in this graph to draw from; their content lives inside a K-constraint's own text (K14, K18/T3.6) or was never atomized into a separate C-numbered contract. The F14 CANNEX prediction and the muonic atom discrimination test get no support for the same reason (F14 has no mechanism; F13, the muonic atom test's parent, is dead).

### Divergences from the Stage 3a prompt

None in substance. Two interpretive choices, documented as judgment calls rather than divergences since the prompt explicitly invites them ("where a genuine judgment call arises... the call and its trellis evidence go in the session notes"):

- **A supports link's own `declared_grade`.** The substrate does not police a link's declared grade against anything (only a claim's `declared_grade` is checked against its earned grade, via `GM-MODE`/`GM-ABOVE`); nothing stops a link from being declared arbitrarily high. This build declares every supports link at an honest snapshot of its source claim's real earned grade at the moment the link is wired (computed via the real `earnedGrade()`, in topological order within each region), never invented or inflated. Mechanically this is equivalent to declaring every link at a uniform high ceiling and letting `meet()` floor it to the truth regardless, but the chosen convention keeps the raw data self-explanatory without requiring a reader to trust that the floor operation saves an overclaim.
- **Two predictions' producing claims are K-constraints, not C-numbered mechanisms.** C-RD-1 and Lambda_1.4 name no mechanism directly; C-RD-1's own text derives its result by equating a threshold to F_Q,crit (K7's own quantity), and Lambda_1.4's parent function F02 has exactly one mechanism, C02, whose two-channel physics the modified TOV solver runs on. Read "the mechanisms that produce them" to include the K-constraint or the parent function's sole mechanism where the prediction's own text names no C-numbered contract directly.

## Not built at Stage 1 (named, not implied done)

- No `api/` (our own membrane) or `periphery/` client code. Stage 5.
- No transformation entries registered in the `computation` pack against real physics data (the pole-condition arithmetic, the exhaust race, the OoM-deficit calculator); `check-compute-invariants.mjs` exercises the register's rules with synthetic fixtures, not a real transform. Stage 4.
- The source table's `rests_on` chains were populated only for 13 corpus-index entries at Stage 1 close. **Partially closed at Stage 2.5**: Track 3 brought this to 50 of 195; 145 rows remain an explicit gap, listed in the Stage 2.5 section above, not defaulted.
- 49 of the 195 Appendix-E-derived source rows defaulted to `source_class: "testimony"` at Stage 1 close. **Partially closed at Stage 2.5**: Track 4 reclassified 29, confirmed 8 as genuinely testimony, and left 12 undetermined (listed in the Stage 2.5 section above).

## Not built at Stage 2 (named, not implied done)

- ~~**K18** is in the trellis... but out of scope~~. **Entered at Stage 2.5** (Track 2).
- ~~**The GUT Box occupant model**... and **the compute-layer structural findings**... Not entered.~~ **Entered at Stage 2.5** (Track 2), as `derivation` claims.
- ~~**Ten thin one-line stub rows**... are not entered as separate `mechanism` claims~~. **Entered at Stage 2.5** (Track 1), per the operator's stub-row disposition.
- **The exclusion reservoir**: no kills, withdrawal records, or reinstatement conditions. Every dead function (F05, F12, F13, F13.2, F19, F21) and every struck contract that depended on them is named as excluded in the relevant commit, never entered as a claim. Still Stage 3; Stage 2.5 explicitly did not touch this (the KBC-void row and every STRUCK row stayed out, per the Stage 2.5 prompt).
- **No `supports` links or checking records anywhere in the corpus.** Every Stage 2 and Stage 2.5 claim sits at its bare floor; `check-dg-tier1.mjs` section 5 asserts this holds across the whole corpus. Stage 3 attaches the dependency structure and the derivation-audit checking records, per the checker-identity policy in `docs/governing-conventions.md`.
- ~~**The `rests_on` lineage session**... remains unbuilt~~. **Partially built at Stage 2.5** (Track 3: 50 of 195 rows now linked; 145 remain an explicit gap) and **partially built** (Track 4: 29 of 49 testimony rows reclassified; 12 remain undetermined). See the Stage 2.5 section above for both gap lists. Stage 3's `independently-rechecked` lifts should read the footprint closure as it now stands, treating the 145 unlinked rows as unknown, not independent.
