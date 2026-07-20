# PK-AUD-K3-002: Adversarial Derivation Audit of K3 — Brane Tension Constancy from Israel Junction Conditions

## 1. Header

- **System:** Kimi (Moonshot AI)
- **Model version:** Kimi K3
- **Date of run:** 2026-07-21
- **Independence statement:** This report was produced from the audit prompt and the published braneworld literature alone; no drafts, data, or communication from any other audit run were used.

---

## 2. Conventions block (stated once, used throughout)

- **Signature:** (−,+,+,+,+). Bulk indices M,N = 0,1,2,3,5; brane indices μ,ν = 0,1,2,3; the fifth coordinate is y.
- **Gravitational normalization:** the bulk Einstein equation is G_MN = κ_5² T_MN, with bulk stress tensor T_MN = −Λ_b g_MN. Pure AdS_5 of curvature radius L (R_MN = −(4/L²) g_MN) requires **κ_5² Λ_b = −6/L²**. This is the bulk fine-tuning, distinct from the brane tension tuning below.
- **Brane matter:** S_brane = ∫ d⁴x √−γ [ −T_3 + L_matter ], with S_μν ≡ (2/√−γ) δS_brane/δγ^μν. A pure tension gives S_μν = −T_3 γ_μν, S ≡ γ^μν S_μν = −4T_3.
- **Extrinsic curvature:** K_μν = γ_μ^M γ_ν^N ∇_(M n_N) = (1/2) £_n γ_μν, with n the unit spacelike normal pointing from the "−" side into the "+" side; the "+" side is the kept bulk region; [X] ≡ X⁺ − X⁻.
- **Israel junction condition** (Israel 1966, [1]):
  [K_μν] − [K] γ_μν = −κ_5² S_μν.
  Taking the trace in 4D ([K] − 4[K] = −κ_5² S ⇒ [K] = κ_5² S/3) and substituting back gives the trace-reversed form
  **[K_μν] = −κ_5² (S_μν − (1/3) S γ_μν)**.
- **Z_2 orbifold:** K⁻_μν = −K⁺_μν, hence [K_μν] = 2K⁺_μν. All tension formulas below assume Z_2. A single-sided (non-orbifold) brane halves every tension result (T_3 = 3/(κ_5²L) in the flat case); the claimed formula T_3 = 6/(κ_5²L) is a Z_2-normalized statement. Flagged per protocol 2; the claim is translated into these conventions before comparison.
- **Normalization translation (protocol 2):** RS write the bulk action as 2M³∫√g R, i.e. κ_5² = 1/(4M_5³) in the present convention. Their critical tension V = 24 M_5³ k (k ≡ 1/L) then equals 24 M_5³/L = 6/(κ_5² L) exactly. No factor-level convention mismatch arises in this audit; had one appeared, it would have been reported as a convention artifact, not a refutation.

---

## 3. Q1 — Junction-condition rederivation, both cases

### 3.0 Curvature of the warped ansatz (common to both cases)

Take ds² = dy² + a²(y) ŷ_μν(x) dx^μ dx^ν, where ŷ is a 4D maximally symmetric metric with R̃_μν = −3ε ŷ_μν, R̃ = −12ε (ε = 0: flat/Minkowski slicing, case (a); ε = +1: unit-radius AdS_4 slicing, case (b)).

Standard warped-product curvature formulas (derivation: direct Christoffel contraction; same conventions as [5]):

- R_yy = −4 a″/a
- R_μν = R̃_μν − (a a″ + 3 a′²) ŷ_μν
- R = R̃/a² − 8 a″/a − 12 (a′/a)²

yy-component of the Einstein tensor:

G_yy = R_yy − (1/2) g_yy R = −4a″/a − (1/2)(R̃/a² − 8a″/a − 12(a′/a)²) = −R̃/(2a²) + 6(a′/a)².

The bulk Einstein equation G_yy = κ_5² T_yy = −κ_5² Λ_b = +6/L² then gives the master equation

**(a′)² = a²/L² + R̃/(12 a⁰) ... written explicitly: 6(a′/a)² + 6ε/a² = 6/L², i.e.**

**(a′)² = a²/L² − ε.** (∗)

### 3.1 Case (a): flat brane (Randall–Sundrum), ε = 0

**(a′)² = a²/L²**, so a(y) = e^{−|y|/L} (RS2 form; the sign choice selects the decaying branch). Substitution into the curvature formulas gives R_MN = −(4/L²) g_MN: exact AdS_5, as required. [RESULT — Randall & Sundrum 1999 [2,3]; reproduced.]

**Extrinsic curvature.** Brane at y = 0; on the + side (y > 0), K⁺_μν = (1/2) ∂_y γ_μν |_{0⁺} = a a′ ŷ_μν = (a′/a) γ_μν = **−(1/L) γ_μν**; K⁺ = −4/L.

**Junction condition.** With Z_2, [K_μν] = 2K⁺_μν = −(2/L)γ_μν, [K] = −8/L. Then

[K_μν] − [K]γ_μν = (−2/L + 8/L) γ_μν = (6/L) γ_μν = −κ_5² S_μν = κ_5² T_3 γ_μν,

hence

**T_3 = 6/(κ_5² L)** (critical tension, flat case). [RESULT — [2,3]; reproduced with algebra shown.]

Equivalently from the trace-reversed form: 2K⁺_μν = −κ_5²(S_μν − Sγ_μν/3) = −κ_5²(−T_3 + 4T_3/3)γ_μν = −(κ_5²T_3/3)γ_μν, so K⁺_μν = −(κ_5²T_3/6)γ_μν, and matching K⁺ = −(1/L)γ gives the same result. ✓ (internal consistency check)

Two remarks, both [RESULT]:

- **(R1)** The condition is exact and position-independent in a trivial double sense: (i) shifting the brane to any y_0 changes nothing (the |y| profile is translation-covariant); (ii) no value of T_3 other than the critical one is compatible with a *flat* induced metric — any other tension curves the brane, which is precisely case (b).
- **(R2)** The flat-case result is the boundary case ε = 0 of the master equation (∗), not an independent theorem.

### 3.2 Case (b): AdS_4-sliced brane (Karch–Randall), ε = +1

**(a′)² = a²/L² − 1.** General solution:

**a(y) = L cosh[(y − y_0)/L].** Check: a′ = sinh[(y−y_0)/L], (a′)² = sinh² = cosh² − 1 = a²/L² − 1. ✓

Consistency of the remaining Einstein equation: the μν component gives G^μ_ν = (3/a² + 3a″/a + 3(a′/a)²)δ^μ_ν. Differentiating (∗) gives a″ = a/L²; substituting both: 3/a² + 3/L² + (3/a²)(a²/L² − 1) = 3/a² + 3/L² + 3/L² − 3/a² = 6/L² = κ_5²T^μ_ν ✓ identically. The system closes; no further constraint. (Substitution of the cosh solution into the full curvature tensor gives R_MN = −(4/L²)g_MN ✓ — this is AdS_5 in AdS_4 slicing.)

**Geometry of the slicing.** The warp factor has a minimum ("throat") at y = y_0 where a = L, and grows on both sides. The AdS_4 radius induced on the slice at y is

**ℓ(y) = a(y) ≥ L.**

The flat slicing of case (a) is recovered only as the boundary limit u → ∞ (with an origin shift, L cosh u → (L/2) e^{u}, ℓ → ∞). [RESULT — Karch & Randall 2001 [4]; same AdS_4 slicing in the brane-world black-hole literature [9]; reproduced from (∗).]

**Junction condition.** Place a Z_2 brane at y = y_b > y_0, define u_b ≡ (y_b − y_0)/L, and keep the throat side (y ≤ y_b) so that the warp factor decreases into the bulk from the brane (the RS-like, gravity-localizing side; the opposite side of the throat gives the negative-tension companion, |T_3| identical — noted for completeness). The outward normal into the kept bulk is n = −∂_y, so

K⁺_μν = (1/2)(−∂_y) γ_μν = −(a′/a)|_{y_b} γ_μν = **−(1/L) tanh(u_b) γ_μν**.

Trace-reversed junction condition with Z_2 (derived in §2): K⁺_μν = −(κ_5² T_3/6) γ_μν. Matching:

**(KR-1)  T_3 = (6/κ_5² L) tanh(u_b),   u_b = z_0/L**,

where z_0 ≡ y_b − y_0 is the brane's proper displacement from the throat. Using tanh² + sech² = 1 and ℓ = L cosh(u_b):

**(KR-2)  T_3 = (6/κ_5² L) √(1 − L²/ℓ²).**

[RESULT — Karch & Randall 2001 [4]; the same tension–angle relation appears in AdS/BCFT as T ∝ tanh(ρ*/L), Takayanagi 2011 [8]; here derived independently from (∗) plus the junction condition.]

**Properties (all algebraic consequences of (KR-1/2)):**
- 0 < T_3 < 6/(κ_5²L): the KR brane is necessarily **detuned below critical**.
- T_3 → 6/(κ_5²L) only as u_b → ∞ ⇔ ℓ → ∞: the critical value is the flat-slicing limit, never attained at finite ℓ.
- T_3 → 0 as u_b → 0 ⇔ ℓ → L⁺.
- Supercritical effective tension (T > 6/(κ_5²L)) has **no** static AdS_4-sliced solution; the continuation is the dS_4 slicing (ε = −1 in the sense R̃ = +12: (a′)² = a²/L² + 1, a = L sinh(y/L), giving T_3 = (6/κ_5²L) coth(u_b) > critical — one-line check, same machinery). [RESULT, same derivation.]

### 3.3 Answer to Q1's closing question

T_3 = 6/(κ_5²L) is exact **only in case (a)** (flat/RS slicing). In the framework's declared case (b) (Karch–Randall, AdS_4-sliced), the junction conditions yield (KR-1)/(KR-2) instead, which approach the claimed formula only in the limit ℓ/L → ∞ (equivalently z_0/L → ∞), with relative error

ΔT_3/T_3 = 1 − tanh(u_b) = 2e^{−2u_b}/(1 + e^{−2u_b}) ≈ 2e^{−2z_0/L} ≈ L²/(2ℓ²).

**Q1 verdict: case (a) CONFIRMED; case (b) DEAD as stated** (the exact critical tension is incompatible with AdS_4 slicing at any finite ℓ). Earliest failing step: the first sentence of K3 — the flat-slicing junction result is asserted for a framework declared to be KR-type. Per protocol 3, no RS/KR conflation is made in this report; the failure is located in the claim, not in convention translation (κ_5² normalization was checked in §2).

---

## 4. Q2 — Position independence, assessed in the KR case

**Derived, not asserted:** at fixed (κ_5, L), the static KR solution space is a one-parameter family. (KR-1) and (KR-2) are invertible:

u_b = artanh(κ_5² L T_3/6),   ℓ = L / √(1 − (κ_5² L T_3/6)²).

Hence T_3, z_0, and ℓ are three labels of a single parameter. Now the three candidate statements from the audit question:

1. **"T_3 is a fixed parameter of the action, with z_0 determined by it."** — This is the statement the junction conditions actually support. Given the action parameter T_3, a static Z_2 KR brane exists at exactly one position (modulo the Z_2 mirror): z_0 = L·artanh(κ_5²LT_3/6). "T_3 independent of z_0" is then true only in the trivial sense in which any Lagrangian parameter is independent of any coordinate — and the converse fails: **z_0 is not independently specifiable**. A brane displaced from its junction-fixed position is not a static solution; the induced geometry becomes time-dependent (brane cosmology, ℓ = ℓ(t)). [RESULT — consequence of (KR-1); the time-dependent generalization is standard brane cosmology [5] and is not re-derived here.]
2. **"T_3 and z_0 are independently specifiable."** — Refuted by (KR-1): the map is one-to-one. [DEAD.]
3. **"The claimed independence conflates the RS critical case with the KR detuned case."** — Confirmed. In case (a), position independence is real but degenerate (R1 of §3.1: the position is pure gauge *and* the tension is pinned to critical). K3 imports that degenerate statement into case (b), where position ↔ detuning and nothing is gauge. [CONFIRMED as the diagnosis.]

**The framework's internal contradiction, stated precisely:** K3's package {KR slicing; T_3 = 6/(κ_5²L) exactly; z_0 dynamical elsewhere in the framework; T_3 independent of z_0} is jointly consistent only where the KR geometry degenerates to the flat slicing, ℓ/L → ∞ — i.e., only where the framework ceases to be genuinely KR. If z_0 is to have a dynamical role in a static KR background, the tension must track it via (KR-1), contradicting exact constancy.

**Limit in which K3 approximately holds, and its size:** near-critical regime u_b ≳ 1. ΔT_3/T_3 ≈ 2e^{−2u_b} ≈ L²/(2ℓ²). Numerically: ΔT_3/T_3 ≲ 10⁻² requires u_b ≳ 2.6, i.e. ℓ ≳ 7L; ΔT_3/T_3 ≲ 10⁻⁴ requires u_b ≳ 4.3, i.e. ℓ ≳ 37L. [NUMERICAL evaluation of the exact RESULT.]

**Q2 verdict: NEEDS REFINEMENT.** The true statement: "T_3 is a fixed parameter of the brane action; the Israel junction conditions then fix the static brane position, z_0 = L·artanh(κ_5²LT_3/6) (equivalently ℓ). T_3 and z_0 are not independent; exact constancy of T_3 at the critical value is compatible with KR slicing only in the flat limit ℓ/L → ∞."

---

## 5. Q3 — The corollary kill

The downstream exclusion argues: α ∝ T_3^{−1} is dead because T_3 cannot vary. Assess by distinguishing the three readings the audit question requires:

**(a) T_3 as a fixed action parameter (variation forbidden by construction).** True and sufficient by itself — but it is a property of every Lagrangian parameter (κ_5, L, masses), not a consequence of the Israel junction conditions. The kill's *stated premise* — "the junction conditions fix T_3 = 6/(κ_5²L)" — is the RS fine-tuning statement and does not extend to KR, where the junction conditions fix a *relation* among (T_3, z_0, ℓ), not a number. In KR, T_3 parameterizes a one-parameter family of solutions, and cross-solution comparison of any observable against T_3 is physically well-defined. The premise as literally argued is false in the framework's own case. [RESULT.]

**(b) T_3 as effectively position-linked (variation forbidden dynamically).** This is where KR reopens a version of the channel. What 4D physics responds to in the KR background is the pair (T_3, ℓ) locked by (KR-2). If z_0 is dynamical elsewhere in the framework (as stated), then what varies across the framework's own solution/state space is the detuning — equivalently ℓ, equivalently the position-linked combination (KR-1). Any mechanism whose functional dependence is α ∝ [T_3(u_b)]^{−1} across that space, or α routed through ℓ(z_0), is **not** excluded by the junction-condition analysis. The bare-T_3 channel is dead (reading (a)); the detuning/ℓ channel — the same invariant content dressed in KR variables — is open. [RESULT, from §4.]

**(c) Neither.** Not applicable: reading (a) does hold, so something of the kill survives.

**Net assessment:** the kill survives only in the narrow tautological form "the bare action parameter T_3 is not a dynamical field," which excludes only mechanisms that vary the bare tension within a fixed action. Its stated justification (junction conditions pin T_3 to the critical value) is invalid in KR, and any version of the α ∝ T_3^{−1} mechanism that couples to the detuning — including simply evaluating T_3^{−1} across the framework's own state space if its states differ in z_0/ℓ — must be re-examined, because the junction-condition argument does not close it.

**Q3 verdict: NEEDS REFINEMENT.** Earliest failing step: the kill's first premise, which is the Q1(b) failure inherited downstream.

---

## 6. Q4 — The state-dependence partition

Add the brane-localized scalar: S_φ = ∫ d⁴x √−γ [ −½ γ^μν ∂_μφ ∂_νφ − V(φ) ], φ → v(F_Q) in the framework's states.

**Stress tensor:** S^φ_μν = ∂_μφ ∂_νφ − γ_μν(½(∂φ)² + V(φ)). For a homogeneous, adiabatically varying VEV (gradients negligible on junction scales), S^φ_μν = −V(v) γ_μν — pure vacuum energy, indistinguishable from tension by the junction conditions. The junction conditions therefore constrain

**(EFF)  T_eff ≡ T_3 + V(v(F_Q)),**

i.e. (KR-1) reads T_eff = (6/κ_5²L) tanh(u_b). [RESULT — brane vacuum energy gravitates as tension; standard: Goldberger & Wise 1999 [6] backreaction analysis; DeWolfe et al. 2000 [7]; the RS fine-tuning itself is the ε = 0 instance.]

**Consequences for the partition "T_3 constant; v carries all state-dependence":**

- The object fixed by the junction conditions is T_eff, not the bare T_3. With bare T_3 held constant, any state-dependence of the VEV's vacuum energy makes u_b and ℓ state-dependent:
  δu_b = (κ_5²L/6) cosh²(u_b) δV = (κ_5² ℓ²/6L) δV.
  State-dependence does **not** stay inside the scalar sector; it leaks into the geometric sector (position, induced curvature) through the junction conditions. Note the enhancement factor cosh²(u_b) = ℓ²/L²: a near-critical brane is parametrically *more* sensitive to brane vacuum energy, not less. [RESULT, from (EFF) + (KR-1).]
- **Regime of self-consistency:** the geometry is effectively state-independent (δu_b ≪ 1) iff |δV(v)| ≪ 6L/(κ_5²ℓ²) across the state space; the KR identity of the brane is preserved (V smaller than the detuning itself) iff |V| ≪ (6/κ_5²L)(1 − tanh u_b) ≈ 3L/(κ_5²ℓ²). Both give the same scale up to the O(1) factor: the partition holds for **|V(v)| ≪ 3L/(κ_5²ℓ²)** and breaks at **|V(v)| ~ 3L/(κ_5²ℓ²)**, i.e. when the state-dependent vacuum energy is a fraction ~L²/(2ℓ²) of T_3 — far below T_3 itself for a near-critical KR brane. [RESULT.]
- **Sharp corollary under the exact-critical reading:** if the framework maintains the flat-case formula for the *effective* tension, T_eff = 6/(κ_5²L) exactly, then any state-dependence of V at its minima destroys the static AdS_4 slicing: δV > 0 has no AdS_4-sliced solution at all (tanh u_b would exceed 1; the continuation is dS_4 slicing, §3.2), δV < 0 forces finite u_b. This is the RS cosmological-constant fine-tuning problem restated inside the framework — the partition and the exact-critical claim cannot both be maintained once V(v) varies. [RESULT; the fine-tuning problem itself is FOLKLORE-standard since [2,3].]

**Q4 verdict: MARGINAL.** The partition is self-consistent only as an approximation, in the regime |V(v(F_Q))| ≪ 3L/(κ_5²ℓ²) over the whole state space; it breaks at the scale |V| ~ 3L/(κ_5²ℓ²), parametrically below T_3 for ℓ ≫ L.

---

## 7. Verdicts

| Question | Verdict | Basis |
|---|---|---|
| Q1(a) — RS flat case | **CONFIRMED** | Full derivation reproduced (§3.1); conventions reconciled with RS's 24M³k at κ_5² = 1/(4M³) (§2) |
| Q1(b) — KR case | **DEAD as stated** | Exact critical tension incompatible with AdS_4 slicing at finite ℓ; true relations (KR-1)/(KR-2) derived (§3.2) |
| Q2 — position independence | **NEEDS REFINEMENT** | Junction conditions lock T_3 ↔ z_0 ↔ ℓ one-to-one; independence is the RS degenerate case imported into KR; holds approximately for ℓ ≳ 7L (§4) |
| Q3 — corollary kill | **NEEDS REFINEMENT** | Survives only as the fixed-action-parameter tautology; stated junction-condition justification invalid in KR; detuning/ℓ-routed versions of the mechanism not excluded (§5) |
| Q4 — state-dependence partition | **MARGINAL** | Junction conditions see T_eff = T_3 + V(v); partition holds only for |V| ≪ 3L/(κ_5²ℓ²), breaks at that scale (§6) |

**Earliest failing step (overall):** the first sentence of K3 — "T_3 = 6/(κ_5²L), fixed by the Israel junction conditions, independent of the brane position z_0" — asserted for a framework declared Karch–Randall-type. That sentence is the flat-slicing (RS) result; in the AdS_4-sliced case the junction conditions give T_3 = (6/κ_5²L)tanh(z_0/L), which is position-dependent by construction and reaches the claimed value only as ℓ → ∞. Every downstream failure (Q2, Q3) inherits from this step.

**Overall verdict: NEEDS REFINEMENT** — leaning DEAD for the claim as literally written in any regime where the framework is genuinely KR (ℓ/L finite and order-unity).

**Surviving reformulation (verbatim, for the operator's decision on superseding K3):**

> **K3′:** The brane tension T_3 is a fixed parameter of the brane action. In the Karch–Randall (AdS_4-sliced) case the Israel junction conditions do not fix it to 6/(κ_5²L); they impose T_3 = (6/κ_5²L) tanh(z_0/L), equivalently T_3 = (6/κ_5²L) √(1 − L²/ℓ²), locking the static brane position z_0 and the induced AdS_4 radius ℓ to T_3 one-to-one. The critical value 6/(κ_5²L) is recovered only in the flat-slicing limit ℓ → ∞. No dynamical field varies the bare T_3; however, brane-localized vacuum energy enters the junction conditions through T_eff = T_3 + V(v), so state-dependence in the scalar sector backreacts on z_0 and ℓ unless |V(v)| ≪ 3L/(κ_5²ℓ²).

**Consequence for the downstream kill:** it must be re-argued on the basis "T_3 is a bare action parameter" (which excludes only bare-tension dynamics within a fixed action) and re-examined for detuning/ℓ-routed versions of the α ∝ T_3^{−1} mechanism, which the junction-condition analysis does not exclude. Whether that re-examination resurrects the mechanism is outside this audit's scope.

---

## 8. Bibliography (identifiers verified against arXiv/publisher records during this run, except where flagged)

[1] W. Israel, "Singular hypersurfaces and thin shells in general relativity," Nuovo Cim. B **44** (1966) 1–14; erratum Nuovo Cim. B **48** (1967) 463. — THEOREM source for the junction conditions.

[2] L. Randall, R. Sundrum, "A Large Mass Hierarchy from a Small Extra Dimension," Phys. Rev. Lett. **83** (1999) 3370–3373; arXiv:hep-ph/9905221.

[3] L. Randall, R. Sundrum, "An Alternative to Compactification," Phys. Rev. Lett. **83** (1999) 4690–4693; arXiv:hep-th/9906064.

[4] A. Karch, L. Randall, "Locally Localized Gravity," JHEP **0105** (2001) 008; arXiv:hep-th/0011156.

[5] T. Shiromizu, K. Maeda, M. Sasaki, "The Einstein equations on the 3-brane world," Phys. Rev. D **62** (2000) 024012; arXiv:gr-qc/9910076.

[6] W. D. Goldberger, M. B. Wise, "Modulus stabilization with bulk fields," Phys. Rev. Lett. **83** (1999) 4922–4925; arXiv:hep-ph/9907447.

[7] O. DeWolfe, D. Z. Freedman, S. S. Gubser, A. Karch, "Modeling the fifth dimension with scalars and gravity," Phys. Rev. D **62** (2000) 046008; arXiv:hep-th/9909134.

[8] T. Takayanagi, "Holographic Dual of a Boundary Conformal Field Theory," Phys. Rev. Lett. **107** (2011) 101602; arXiv:1105.5165. — supporting: tension–angle relation T ∝ tanh(ρ*/L) in AdS/BCFT.

[9] J. Garriga, M. Sasaki, "Brane-world creation and black holes," Phys. Rev. D **62** (2000) 043523; arXiv:hep-th/9912118. — **flagged per protocol 1:** cited from memory; the identifier was not independently re-verified during this run. No result in this report depends on it; the AdS_4-sliced geometry is derived in §3 from the Einstein equations and is independently supported by [4].

---

*End of report. Evidence-label summary: junction-condition formalism [THEOREM, 1]; all tension relations in both cases [RESULT, 2–5, 8, reproduced with algebra shown]; backreaction statements [RESULT, 6–7]; the numerical regime estimates of §4 [NUMERICAL]; the restatement of the RS fine-tuning problem [FOLKLORE-standard]. No motivational language used; every step either carries its algebra or is flagged.*
