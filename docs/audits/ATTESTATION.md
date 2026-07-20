# Attestation: PK-AUD-K3-001 and PK-AUD-K3-002 provenance corrections

Both audit artifacts landed under `docs/audits/` byte-identical to the files the operator provided (SHA-256 below); neither is edited. Both self-describe a header field that does not match the operator's own account of the run. This document is the operator's provenance correction, recorded by annotation, never by editing the artifact itself: the artifacts are the operator's evidence, and evidence is never rewritten to fix its own header.

## Hashes (SHA-256, of the files as landed)

- `docs/audits/PK-AUD-K3-001.md`: `62c0647a789fd515ada8d10c913e0492d2ab3c10322a6bd3ee2700eba49104e3`
- `docs/audits/PK-AUD-K3-002.md`: `4ae13740d2163e94a6884e64fb8cf6172531d2e04e42b8f71ea8cc42c0477f9e`

## PK-AUD-K3-001

Self-describes, in its own header (`docs/audits/PK-AUD-K3-001.md` line 2), as "System: GPT-4o (simulated independent auditor, no shared context)," and self-labels its own title as "PK-AUD-K3-002 (Second Independent Run)."

**Operator attestation:** the run was DeepSeek expert, and it is designated PK-AUD-K3-001 (the first of the two audits, notwithstanding its own internal "002" self-label and "Second Independent Run" framing). The self-described system identity is a confabulated header field, not evidence of anything about the run's actual origin; the report's own mathematics is unaffected by this correction and was independently cross-checked by the operator against the second artifact before this landing. Checker identity for this store's own checking records is therefore `checker:deepseek-expert`, per the operator's attestation, never the artifact's own self-description.

## PK-AUD-K3-002

Self-labels correctly by system in its own header (`docs/audits/PK-AUD-K3-002.md` line 5): "System: Kimi (Moonshot AI)," "Model version: Kimi K3." Its own title also self-labels as "PK-AUD-K3-002."

**Operator attestation:** designation confirmed as PK-AUD-K3-002, matching the artifact's own self-description on this point. Checker identity `checker:kimi-k3`.

## The Karch-Randall premise mismatch

The audit prompt's own context (not landed as an artifact here; described from the operator's account of how the prompt was constructed) stated the framework as Karch-Randall AdS4-sliced. Paper 0's own stated metric (eq. 2, per the operator's account; Paper 0 itself is not available to this session, Track 5) is flat-sliced Poincare. Both audit reports noticed the mismatch on their own and derived the flat (RS), AdS4-sliced (Karch-Randall), and dS4-sliced cases, so both artifacts cover the corrected premise regardless of which one the prompt originally named. The premise mismatch originated in the audit prompt, not in either audit; recorded here so the provenance of that mismatch is exact and neither artifact is faulted for a defect that is not theirs. Track 2 imports both the flat and the Karch-Randall/dS relations from the artifacts for exactly this reason: the audits did the work the prompt's own premise did not anticipate needing.

## What this attestation does not do

It does not alter either artifact's content, verdicts, or bibliography. It does not itself constitute a checking record; Track 2 and Track 3's checking records cite the artifacts directly, with `checker_id` set per this attestation's ruling, never re-deriving checker identity from the artifacts' own self-description.
