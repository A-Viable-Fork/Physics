# PK-AUD-K3B-002: Adversarial Audit of the Backreaction Reconciliation (SF-K3B-001)

**Corpus ID:** PK-AUD-K3B-002 (independent-system run; no shared drafts with any other run. If this artifact lands first, relabel to PK-AUD-K3B-001; content is unaffected.)
**System / checker identity:** Kimi K3 (Moonshot AI), model version Kimi K3
**Date:** 2026-07-21
**Target:** shore derivation SF-K3B-001 (status: asserted) — claims C1 (reconciliation channel), C2 (working point, rate-amplification framing), C3 (coordinate identification), and the double-count sub-sorry's framing
**Audit type:** independent verification of a composed derivation; a reproduction, not a review

---

## Conventions (stated once, used throughout)

- Signature $(-,+,+,+,+)$; $\hbar = c = 1$.
- $L$: AdS$_5$ curvature radius. $\Lambda_5 = -6/L^2$.
- 5D coupling: $\kappa_5^2 \equiv M_5^{-3}$ (action $\frac{M_5^3}{2}\int\sqrt{g}\,R$). Critical (Randall–Sundrum) brane tension $T_c = 6/(\kappa_5^2 L) = 6M_5^3/L$.
- 4D reduced Planck mass $M_{\rm Pl} = 2.435\times10^{18}$ GeV; $\kappa_4^2 \equiv 8\pi G = M_{\rm Pl}^{-2}$.
- End-of-world brane with $Z_2$ symmetry (Karch–Randall). Junction condition: $2(K_{\mu\nu} - K g_{\mu\nu}) = -\kappa_5^2 S_{\mu\nu}$, $S_{\mu\nu} = -T g_{\mu\nu}$ for pure tension.
- $u_b \equiv y_b/L$: brane position in the dS slicing, in units of $L$. $\ell \equiv \ell_{\rm dS} = H^{-1}$: induced dS radius on the brane.
- Derived below and used throughout: $\sinh u_b = \ell/L$; $T = T_c \coth u_b$; $M_{\rm Pl}^2 = M_5^3 L\coth u_b$, i.e. $\kappa_4^2 = \kappa_5^2 \tanh u_b / L$.
- Numerical inputs: $H_0 = 70\ {\rm km\,s^{-1}Mpc^{-1}} = 1.493\times10^{-42}$ GeV; $\ell = c/H_0 = 1.322\times10^{26}$ m $= 6.697\times10^{41}$ GeV$^{-1}$; $L = 1\,\mu{\rm m} = 5.068\times10^{9}$ GeV$^{-1}$ unless stated. Input-dependence is exhibited where it matters.
- Factor-2 traceability: with the alternative convention $\kappa_5^2 = (2M_5^3)^{-1}$ or $M_{\rm Pl}^2 = M_5^3 L$ without the $\coth u_b$ factor, selected factors of 2 move between equations. Where a factor differs from the target document by a convention-traceable amount, it is flagged as CONVENTION and not counted as a refutation.

**Evidence labels:** THEOREM (derived exactly in this artifact), RESULT (standard literature, cited), NUMERICAL (arithmetic shown), HEURISTIC (order-of-magnitude/structural argument), FOLKLORE (community-standard but imprecise statement).

---

## S0. Setup re-derived (the audit ground)

**S0.1 dS slicing of AdS$_5$.** [THEOREM] Take the warped ansatz
$$ds^2 = dy^2 + f^2(y)\,\gamma_{\mu\nu}dx^\mu dx^\nu,\qquad R_{\mu\nu}(\gamma) = 3k\,\gamma_{\mu\nu}.$$
The 5D Einstein equations $R_{MN} = -(4/L^2)g_{MN}$ give, from the $yy$ component, $f'' = f/L^2$, and from the $\mu\nu$ components,
$$k = f'^2 - f^2/L^2.$$
The three branches: $f = e^{y/L} \Rightarrow k=0$ (Poincaré/Minkowski slicing); $f = \cosh(y/L) \Rightarrow k=-1/L^2$ (AdS$_4$ slicing); $f = \sinh(y/L) \Rightarrow k = +1/L^2$ (dS$_4$ slicing). Hence the dS slicing
$$ds^2 = dy^2 + L^2\sinh^2(y/L)\,ds^2_{{\rm dS}_4,\,{\rm unit}} = dy^2 + \frac{L^2}{\ell^2}\sinh^2(y/L)\,ds^2_{{\rm dS}_4,\,\ell},\qquad y\in(0,\infty),$$
with warp factor $a(y) = (L/\ell)\sinh(y/L)$ in the second form. A brane at $y = y_b$ with $a(y_b)=1$ carries induced dS$_4$ of radius
$$\boxed{\ \ell = L\sinh u_b\ },\qquad u_b \equiv y_b/L .$$

**S0.2 Junction condition and $T_{\rm eff}$.** [THEOREM] For a $Z_2$-symmetric brane at $y=y_b$ with outward normal $\partial_y$: $K_{\mu\nu} = \frac12\partial_y g_{\mu\nu} = \frac{1}{L}\coth u_b\, g_{\mu\nu}$, $K = \frac{4}{L}\coth u_b$. Israel: $2(K_{\mu\nu} - K g_{\mu\nu}) = -\kappa_5^2(-T g_{\mu\nu})$ gives $-6\frac{1}{L}\coth u_b = \kappa_5^2 T$ up to the orientation sign, i.e.
$$T_{\rm eff} = \frac{6}{\kappa_5^2 L}\coth u_b = T_c\coth u_b .\ \checkmark\quad\text{(matches SF-K3B-001's stated form)}$$
Consistency (brane Friedmann, RESULT [BDL]): $H^2 = \frac{\kappa_5^4 T^2}{36} - \frac{1}{L^2} = \frac{1}{L^2}(\coth^2 u_b - 1) = \frac{1}{L^2\sinh^2 u_b} = \frac{1}{\ell^2}$. ✓ Supercritical ($T>T_c$, $H^2>0$) $\Leftrightarrow$ $u_b$ finite; criticality deviation
$$\frac{T - T_c}{T_c} = \coth u_b - 1 = \frac{2e^{-2u_b}}{1-e^{-2u_b}} \simeq \frac{L^2}{2\ell^2}\ \ \text{[THEOREM, large }u_b\text{]}$$
— of order $(L/\ell_{\rm dS})^2$, as stated in the target. ✓

**S0.3 The response law, re-derived (prior audit's established input is checked, not merely accepted).** [THEOREM] From $T = T_c\coth u_b$:
$$\frac{du_b}{dT} = \frac{\kappa_5^2 L}{6}\,\frac{d}{dx}\operatorname{arccoth} x\Big|_{x=\coth u_b} = -\frac{\kappa_5^2 L}{6}\,\frac{1}{\coth^2 u_b - 1} = -\frac{\kappa_5^2 L}{6}\sinh^2 u_b .$$
Equivalently, writing $u_b = \operatorname{arctanh}(T_c/T)$: $du_b/dT = -\frac{6}{\kappa_5^2 L T^2}\cosh^2 u_b = -\frac{\kappa_5^2 L}{6}\Big(\frac{T_c}{T}\Big)^2\cosh^2 u_b$ — the two forms agree identically since $(T_c/T)^2\cosh^2 u_b = \sinh^2 u_b$.

*Discrepancy register vs. the prior audit's stated $\delta u_b = +(\kappa_5^2 L/6)\cosh^2 u_b\,\delta V$:*
1. **Sign.** With $\delta V$ *adding* to the brane tension, $u_b$ must *decrease* (tension $\uparrow\ \Rightarrow\ H^2\uparrow\ \Rightarrow\ \ell\downarrow\ \Rightarrow\ \sinh u_b\downarrow$). The prior audit's $+$ sign is consistent only if $\delta V$ is measured along the *sub-critical* direction ($\delta V \equiv -\delta T$) or $u_b$ is oppositely oriented. CONVENTION — flagged, immaterial to magnitudes, material only to the direction of approach to any moduli-space boundary. This audit keeps the prior audit's sign convention where comparison requires it and states signs explicitly otherwise.
2. **$\cosh^2$ vs. $\sinh^2$.** Exact coefficient: $\sinh^2 u_b$ (or $(T_c/T)^2\cosh^2 u_b$). Since $\cosh^2 u_b - \sinh^2 u_b = 1$ and $\sinh^2 u_b = (\ell/L)^2 \sim 10^{64}$, the relative discrepancy is $(L/\ell)^2 \sim 10^{-64}$. CONVENTION/rounding at the working point — flagged, not a refutation.
3. Magnitude: $|\delta u_b| = \frac{\kappa_5^2 L}{6}\cosh^2 u_b\,|\delta V|\,[1 + O((L/\ell)^2)]$. Accepted as the established linearized response. ✓

**S0.4 4D Planck mass.** [THEOREM] Tensor zero mode with $Z_2$ doubling, normalized to unit warp factor on the brane:
$$M_{\rm Pl}^2 = 2M_5^3\int_0^{y_b}\!dy\,\frac{\sinh^2(y/L)}{\sinh^2 u_b} = \frac{2M_5^3 L}{\sinh^2 u_b}\Big[\tfrac14\sinh 2u_b - \tfrac{u_b}{2}\Big] = M_5^3 L\coth u_b\,\big[1 + O(u_b e^{-2u_b})\big].$$
Hence $\kappa_4^2 = \kappa_5^2\tanh u_b/L$, matching the SMS/BDL identification $\kappa_4^2 = \kappa_5^4 T/6$ (RESULT [SMS, BDL]). ✓

---

## Q1. The chain rule and its legitimacy (C3 first, then C1)

### Q1.1 Poincaré ↔ dS-slicing coordinate relation [THEOREM]

Embed AdS$_5$ in $\mathbb{R}^{2,4}$: $-T_1^2 - T_2^2 + \sum_{i=1}^{4}X_i^2 = -L^2$.

*Poincaré patch* (verify: the constraint reduces to $-L^2$ identically):
$$T_1 = \frac{L}{z}t,\quad X_i = \frac{L}{z}x_i\ (i=1,2,3),\quad T_2 + X_4 = \frac{L^2}{z},\quad T_2 - X_4 = z + \frac{s}{z},\qquad s \equiv -t^2 + \vec x^{\,2},$$
metric $ds^2 = (L^2/z^2)(dz^2 + \eta_{\mu\nu}dx^\mu dx^\nu)$, patch $z>0$.

*dS slicing*: $T_2 = L\cosh(y/L)$; each slice is the dS$_4$ hyperboloid $-T_1^2 + \sum X_i^2 = L^2\sinh^2(y/L)$ of radius $L\sinh(y/L)$. ✓ (agrees with S0.1).

*The brane* $T_2 = L\cosh u_b$ expressed in Poincaré coordinates: eliminating $T_2, X_4$,
$$\boxed{\ z^2 + L^2 + s = 2Lz\cosh u_b\ }\qquad\Longleftrightarrow\qquad z(s) = L\cosh u_b \pm \sqrt{L^2\sinh^2 u_b - s}.$$

**The brane is not a constant-$z$ surface.** Its Poincaré depth varies with the brane worldvolume coordinate $s$:

| reference point on brane | $s$ | $z$ | $\ln(z/L)$ |
|---|---|---|---|
| outer axis crossing | $0$ | $L(\cosh u_b + \sinh u_b) = Le^{u_b}$ | $u_b$ **exactly** |
| waist (maximal $s$) | $\ell^2$ | $L\cosh u_b \simeq \ell$ | $\ln\cosh u_b = u_b - \ln 2 + O(e^{-2u_b})$ |
| inner axis crossing | $0$ | $Le^{-u_b}$ | $-u_b$ |

So:
- **(i)** With $z_0 \equiv$ the outer axis-crossing depth, $z_0 = Le^{u_b} = \ell + \sqrt{\ell^2 + L^2} \approx 2\ell$, and
$$\ln(z_0/L) = u_b\quad\text{EXACTLY. [THEOREM]}$$
- **(ii)** The FOLKLORE statement "the dS brane sits at $z\sim\ell$" is the waist depth and carries an additive $\ln 2$ offset in the log. Any convention for "the" Poincaré position inherits an $O(1)$ additive ambiguity in $\ln z_0$, i.e. an $O(\ln 2)\times M_{\rm Pl} \approx 0.7\,M_{\rm Pl}$ *constant* ambiguity in the absolute $d = M_{\rm Pl}\ln(z_0/L)$ — a ~0.9% relative effect at $u_b \approx 74.65$.
- **(iii)** For the *response*, all conventions agree: $\delta\ln z_0 = \delta u_b$ (axis), $\delta\ln z_w = \tanh u_b\,\delta u_b = \delta u_b[1 + O(e^{-2u_b})]$ (waist). Relative precision of the identification for variations: $O((L/\ell)^2) \sim 10^{-64}$.

**C3 verdict: CONFIRMED, qualified.** The identification $\ln(z_0/L) = y_b/L = u_b$ is exact for the axis-crossing depth and holds to relative precision $(L/\ell)^2\sim10^{-64}$ for any convention — far better than the composition needs, since the composition uses only variations $\delta\ln z_0 = \delta u_b$. The absolute distance $d$ inherits a convention-constant of order $\pm\ln 2 \times M_{\rm Pl}$; if the framework's trigger law depends on the *absolute* $d$ rather than on $\Delta d$ from a fixed reference, this $O(M_{\rm Pl})$ convention constant must be fixed once and held fixed.

### Q1.2 C1's algebra, given C3 [THEOREM]

The framework's own inputs: $d = M_{\rm Pl}\ln(z_0/L)$ and (C3) $u_b = \ln(z_0/L)$. Hence
$$d = M_{\rm Pl}\, u_b\qquad\Longrightarrow\qquad \delta d = M_{\rm Pl}\,\delta u_b = M_{\rm Pl}\,\frac{\kappa_5^2 L}{6}\cosh^2 u_b\;\delta V .$$

The claimed C1 reads instead
$$\delta d \stackrel{?}{=} \frac{M_{\rm Pl}}{u_b}\frac{\kappa_5^2 L}{6}\cosh^2 u_b\;\delta V .$$

The factor $1/u_b$ is legitimate iff $\delta\ln(z_0/L) = \delta u_b/u_b$, i.e. iff $z_0/L = u_b$ — which *contradicts* C3's $u_b = \ln(z_0/L)$. Equivalently: the chain rule was executed as $\frac{d}{du_b}[M_{\rm Pl}\ln u_b] = M_{\rm Pl}/u_b$ — differentiating $\ln(z_0/L) = u_b$ as though it were $\ln u_b$ (a nested-log slip). Cross-checks that the clean composition is the correct one: (a) bulk proper radial distance to the brane is $L\ln(z_0/L)$, so $d = (M_{\rm Pl}/L)\times[\text{proper distance}]$ and $\delta d = M_{\rm Pl}\delta\ln z_0 = M_{\rm Pl}\delta u_b$; (b) in the dS slicing the geodesic distance from the throat is $y_b = Lu_b$, again $d = M_{\rm Pl}u_b$ up to the $(M_{\rm Pl}/L)$ normalization. No route yields $1/u_b$.

**C1 verdict: NEEDS REFINEMENT.** Earliest failing step: the chain-rule substitution $\delta\ln(z_0/L)\to \delta u_b/u_b$. Corrected C1:
$$\boxed{\ \delta d = M_{\rm Pl}\,\delta u_b = M_{\rm Pl}\,\frac{\kappa_5^2 L}{6}\cosh^2 u_b\;\delta V\ }$$
The stated C1 *underestimates* the legitimate composed response by $u_b \approx 74.65$. Direction of the error: the framework's reconciliation is *stronger* than its own algebra states — see Q2.4 for the quantitative consequence (claimed $\delta d \sim 6.7\times10^{-3}M_{\rm Pl}$ vs. corrected $0.35$–$0.5\,M_{\rm Pl}$ at the vacuum scale).

**Q1 verdict: C3 CONFIRMED (qualified); C1 NEEDS REFINEMENT.**

---

## Q2. The working point (C2's numerics and the threshold consistency)

### Q2.1 $u_b$ and $\cosh^2 u_b$ [NUMERICAL]

Criticality deviation $\sim (L/\ell_{\rm dS})^2$ with $L = 1\,\mu{\rm m} = 10^{-6}$ m, $\ell_{\rm dS} = c/H_0 = 1.322\times10^{26}$ m:
$$L/\ell_{\rm dS} = 7.57\times10^{-33}\ \ (\ell/L = 1.322\times10^{32}),\qquad (L/\ell_{\rm dS})^2 = 5.73\times10^{-65}\ \sim\ 10^{-64}.\ \checkmark$$
$$u_b = \operatorname{arcsinh}(\ell/L) = \ln\!\big(\tfrac{\ell}{L} + \sqrt{1 + \tfrac{\ell^2}{L^2}}\big) = \ln(2\ell/L) + O\big((L/\ell)^2\big) = \ln 2 + \ln 1.322 + 32\ln 10 = 0.693 + 0.279 + 73.683 = \mathbf{74.65}.\ \checkmark\ (\approx 74)$$
$$\cosh^2 u_b = 1 + \sinh^2 u_b = 1 + (\ell/L)^2 = 1 + 1.746\times10^{64} = \mathbf{1.75\times10^{64}}.$$

The claimed $\cosh^2 u_b \approx 5\times10^{63}$ is a factor $\approx 3.5$ below the $L = 1\,\mu$m, $\ell = c/H_0$ value. It is recovered for $L \approx 2\,\mu$m ($\cosh^2 u_b = 4.4\times10^{63}$, $u_b = 73.96$) or with $\ell = \ell_\Lambda = c/(H_0\sqrt{\Omega_\Lambda})$ at $L \approx 1.6\,\mu$m. **Order-of-magnitude confirmed; the specific figure $5\times10^{63}$ is input-convention-dependent, not an error.** [NUMERICAL]

### Q2.2 The breakdown scale $|V| \sim 3L/(\kappa_5^2\ell^2)$ [THEOREM + NUMERICAL]

Linear response saturates, $|\delta u_b| = 1$, at $\delta V = 6L/(\kappa_5^2\ell^2)$ (using $\cosh^2 u_b \simeq \ell^2/L^2$). The audit-quoted scale is half this; the factor 2 is convention-traceable ($\kappa_5^2$ normalization / whether $|\delta u_b| = \tfrac12$ or $1$ counts as saturation): CONVENTION, not a refutation.

Dimensions: $[L/(\kappa_5^2\ell^2)] = [{\rm mass}^{-1}]/[{\rm mass}^{-3}{\rm mass}^{-2}] = {\rm mass}^4$ ✓ (brane vacuum energy density).

Magnitude, in the conventions of the Conventions block ($\kappa_4^2 = \kappa_5^2\tanh u_b/L$):
$$|V| = \frac{3L}{\kappa_5^2\ell^2} = \frac{3M_5^3 L}{\ell^2} = \frac{3M_{\rm Pl}^2}{\ell^2}\tanh u_b = \rho_{\rm dS}(\ell)\times\big(1 - 2\times10^{-64}\big),$$
where $\rho_{\rm dS}(\ell) \equiv 3M_{\rm Pl}^2/\ell^2$ is the vacuum energy that sources $H^2 = 1/\ell^2$ by ordinary 4D Friedmann. Numerically ($M_5 = (M_{\rm Pl}^2/L)^{1/3} = 1.05\times10^{9}$ GeV at $L=1\,\mu$m):
$$|V| = 3.966\times10^{-47}\ {\rm GeV}^4,\qquad \rho_\Lambda \equiv 3M_{\rm Pl}^2 H_0^2 = 3.966\times10^{-47}\ {\rm GeV}^4,\qquad |V|/\rho_\Lambda = 1.000.$$
**The threshold consistency holds — exactly, not approximately: the breakdown scale is the observed dark-energy density.** And $\delta u_b$(linear) at $\delta V = |V|$: $(\kappa_5^2\ell^2/6L)\times 3L/(\kappa_5^2\ell^2) = 1/2$ — "of order unity" ✓.

*Audit note (material for C2's framing):* this "coincidence" is near-tautological once $\kappa_4^2$ is fixed. Since $u_b = \operatorname{arcsinh}(1/HL) \simeq \ln(2/HL)$, one has $\delta u_b = -\delta\ln H$ identically, so $\delta u_b \sim O(1) \Leftrightarrow \delta H \sim H \Leftrightarrow \delta V \sim 3M_{\rm Pl}^2H^2$. The factor $\cosh^2 u_b \sim (\ell/L)^2$ is precisely the Jacobian between the vacuum energy and the *logarithmic* modulus $u_b$. The "rate amplification" is therefore a property of the coordinate the trigger law is written in — which is exactly what the reconciliation claims, but it must be stated as a Jacobian identity, not as new dynamics. [RESULT]

### Q2.3 Dimensional and magnitude consistency of $\delta d$

$[\delta d] = [M_{\rm Pl}]\times[\kappa_5^2 L]\times[\cosh^2 u_b]\times[\delta V] = {\rm mass}\times{\rm mass}^{-4}\times 1\times{\rm mass}^4 = {\rm mass}$ ✓ (field-space distance in Planck units).

### Q2.4 $\delta d$ at the vacuum scale — three evaluations [NUMERICAL]

At $\delta V = \rho_\Lambda$ (equivalently $|V|$), $\delta u_b = \tfrac12$ (linear; sign per S0.3 convention):

| evaluation | $\delta d$ | status |
|---|---|---|
| C1 as stated ($M_{\rm Pl}\delta u_b/u_b$) | $0.5/74.65 = 6.70\times10^{-3}\,M_{\rm Pl}$ | algebraically illegitimate (Q1.2) |
| corrected C1, linear ($M_{\rm Pl}\delta u_b$) | $0.500\,M_{\rm Pl}$ | linearized, see Q4 |
| corrected C1, exact (Q4.1) | $\frac{M_{\rm Pl}}{2}\ln 2 = 0.347\,M_{\rm Pl}$ | THEOREM |

**Q2 verdict: CONFIRMED on numerics** ($(L/\ell)^2 \sim 10^{-64}$, $u_b \approx 74$, $\cosh^2 u_b \sim 10^{63\text{–}64}$ input-dependent, $|V| = \rho_\Lambda$ exact in stated conventions), **with the material note that the claimed $\delta d$ is wrong by $u_b \approx 74$ (Q1.2) and the linear evaluation at the matching scale carries a 44% error (Q4.1).**

---

## Q3. The double-count question — the closure criterion

Standard structure (RESULT, [SMS; BDL; Maartens]): the effective 4D Einstein equations on a $Z_2$ brane are
$$G_{\mu\nu} = -\Lambda_4\, g_{\mu\nu} + \kappa_4^2\, \tau_{\mu\nu} + \kappa_5^4\,\pi_{\mu\nu} - E_{\mu\nu},$$
$$\Lambda_4 = \tfrac12\big(\Lambda_5 + \tfrac{\kappa_5^4}{6}T^2\big) = \frac{\kappa_5^4 T^2}{12} - \frac{3}{L^2},\qquad \kappa_4^2 = \frac{\kappa_5^4 T}{6},\qquad \pi_{\mu\nu} = -\tfrac14\tau_{\mu}{}^\alpha\tau_{\nu\alpha} + \tfrac{1}{12}\tau\tau_{\mu\nu} + \tfrac18 g_{\mu\nu}\tau_{\alpha\beta}\tau^{\alpha\beta} - \tfrac{1}{24}g_{\mu\nu}\tau^2,$$
with $\tau_{\mu\nu}$ the brane *matter* stress and $E_{\mu\nu}$ the bulk Weyl imprint. The cosmological form (BDL) makes the single-bookkeeping structure manifest:
$$H^2 = \frac{\kappa_5^4}{36}\big(T + \rho\big)^2 - \frac{1}{L^2} + \frac{\mathcal{C}}{a^4}.$$
The tension and every brane-localized energy density enter as **one sum inside one square**. The effective equations and the junction condition are not two descriptions — they are one derivation. The SMS split (tension into $\Lambda_4$ and $\kappa_4^2$; matter into $\tau_{\mu\nu}$ and $\pi_{\mu\nu}$) is a *chosen* linear split of the single source $\tau^{\rm tot}_{\mu\nu} = -(T)g_{\mu\nu} + \tau_{\mu\nu}$, and the split can be moved (shift a constant between $T$ and $\tau$) only if $\Lambda_4$, $\kappa_4^2$, and $\pi_{\mu\nu}$ are all recomputed on the shifted source.

**When may brane-localized potential energy legitimately appear in both a 4D stress decomposition and the junction tension?** [RESULT/HEURISTIC]
- (a) When the "two channels" are the SMS-type expansion of the *same* junction-condition source — then it is one bookkeeping in two views, and the views must **not be summed** as independent sources. The vacuum energy gravitates once: through $\Lambda_4(T)$ if it is assigned to the tension, through $\kappa_4^2\tau_{\mu\nu}$ if assigned to matter, with the $\pi_{\mu\nu}$ cross terms fixed by the total.
- (b) When the decomposition is an explicit orthogonal partition of the source (e.g. multipole/angular projectors $P_1 + P_2 = \mathbb{1}$ on the space of brane-localized vacuum energies) — then summing the channels returns the total *once*, by construction.
- It is a **double-count** iff the same constant component of the Hamiltonian constraint is carried with full weight in both channels *and the channels are summed*: the summed response of $H^2$ to $\delta V(v)$ is then $2\kappa_4^2\delta V/3$ instead of $\kappa_4^2\delta V/3$.
- Radion form (RESULT, [GW; Garriga–Pujolàs–Tanaka; Csáki–Graesser–Randall–Terning]): the radion effective potential $V_{\rm rad}(\psi; T, V(v))$ is built from the junction conditions, and its stationary *value* is the 4D vacuum energy — once. A decomposition that adds $V(v)$ again as a separate 4D vacuum term on top of the stabilized $V_{\rm rad}$ double-counts unless the radion potential was defined with that term subtracted.

**The criterion the sub-sorry must satisfy to close** (sharp, checkable, stated verbatim):

> **(K1) Partition or redundancy.** For the coherent state's $V(v)$, exhibit either an explicit split $V(v) = V_{\rm geo} + V_{\rm stress}$ with $V_{\rm geo} + V_{\rm stress} = V(v)$ on the nose — complementary projectors on the space of constant brane-localized potentials — or a proof that the geometric channel and the stress channel are related by a field redefinition and are never summed.
>
> **(K2) Gravitates-once test.** Under $v \to v + \delta v$, the framework's *summed* prediction must satisfy
> $$\frac{\delta H^2}{\delta V(v)} = \frac{\kappa_4^2}{3}\times\big(c_{\rm geo} + c_{\rm stress}\big)\quad\text{with}\quad c_{\rm geo} + c_{\rm stress} = 1,$$
> i.e. the vacuum energy gravitates with strength $8\pi G$ exactly once. $c_{\rm geo} + c_{\rm stress} = 2$ is the double-count; $= 0$ is the inertness error. This reduces to the BDL square $(T + V(v) + \rho)^2$: both channels must be terms in the expansion of the *same* square.
>
> **(K3) Cross-term consistency.** Whatever part of $V(v)$ is assigned to the tension must enter $\Lambda_4$, $\kappa_4^2$, *and* the quadratic/cross structure ($\pi_{\mu\nu}$, or the $2T\rho$ term of the BDL square) evaluated on the total source; a channel that reproduces the tension's imprint on $G_{\mu\nu}$ without these cross terms is not the SMS expansion and fails (a).
>
> **(K4) Radion consistency.** If the modulus is stabilized, the geometric channel's entry for $V(v)$ must equal the stationary value of the radion potential as built from the junction conditions — not an independent copy added to it.

A framework that routes coherence effects through one geometric channel and ordinary stress-energy through another, "with the total constrained," closes the sub-sorry iff the constraint *is* (K1) and the channel responses satisfy (K2)–(K4).

**Q3 verdict: criterion DELIVERED (K1–K4). The framework's compliance is UNVERIFIED** — the full framework text was not available to this audit; the worry is structurally live whenever (K1) is not exhibited, because $V(v)$ entering both an angular decomposition and $T_{\rm eff}$ is precisely the configuration that fails (K2) with $c_{\rm geo} = c_{\rm stress} = 1$.

---

## Q4. Stability of the conclusion

### Q4.1 The exact response law [THEOREM]

The junction condition is algebraic, not perturbative: $T + V = T_c\coth u_b'$, i.e.
$$u_b(V) = \operatorname{arccoth}\!\big(\coth u_b + \kappa_5^2 L V/6\big),$$
equivalently the BDL/SMS Friedmann identity (exact in the 4D regime, dark radiation neglected):
$$H^2(V) = H^2 + \frac{\kappa_4^2}{3}V + \frac{\kappa_5^4}{36}V^2,\qquad \text{quadratic term relative size} = \frac{V}{2T_c},$$
so $H^2$ is *exactly linear* in $V$ for all $V \ll T_c$. Inverting $u_b = \operatorname{arcsinh}(1/HL)$:
$$\delta u_b(V) = -\tfrac12\ln\!\big(1 + V/\tilde\rho\,\big)\,\big[1 + O(V/T_c)\big],\qquad \tilde\rho \equiv \frac{3L}{\kappa_5^2\ell^2} = \frac{3M_{\rm Pl}^2}{\ell^2},$$
and with the corrected C1 ($d = M_{\rm Pl}u_b$):
$$\boxed{\ \delta d(V) = -\frac{M_{\rm Pl}}{2}\ln\!\big(1 + V/\tilde\rho\,\big)\ }$$
The linearized law is the tangent of this logarithm at $V=0$: $\delta u_b^{\rm lin} = V/(2\tilde\rho)$, $\delta d^{\rm lin} = M_{\rm Pl}V/(2\tilde\rho)$.

### Q4.2 Where the linearization exits its validity range [NUMERICAL]

| $V$ | $\delta u_b^{\rm lin}$ | $\delta u_b^{\rm exact}$ | linear/exact | verdict on linear |
|---|---|---|---|---|
| $0.1\,\tilde\rho$ | $0.050$ | $0.0476$ | $1.05$ | sound |
| $\tilde\rho = |V| = \rho_\Lambda$ (the claimed matching scale) | $0.500$ | $0.347$ | $1.44$ | **44% error, at the claimed operating point** |
| QCD-scale coherence, $V \sim 4\times10^{43}\tilde\rho$ | $2\times10^{43}$ | $50.2$ | $\sim 10^{41}$ | absurd (exceeds the entire modulus range $u_b = 74.65$ by 41 orders of magnitude) |
| EW-scale, $V \sim 2.5\times10^{54}\tilde\rho$ | $10^{54}$ | $62.6$ | — | absurd |
| inflationary, $V \sim 10^{110}\tilde\rho$ | $10^{110}$ | $127$ | — | absurd |

The linear law does not merely degrade for astrophysical $\delta V$; it extrapolates through the end of the moduli space. The exact law replaces it smoothly: the response is **logarithmic** in $V$ (equivalently, exactly linear in $H^2$ — ordinary 4D gravity), with **no threshold** anywhere below $V \sim T_c$.

### Q4.3 The genuine breakdown [RESULT]

The modulus range is finite: $u_b \in (0,\, 74.65]$. Full traversal requires $1 + V/\tilde\rho \sim (\ell/L)^2 \sim 10^{64}$, i.e. $V \sim T_c = 6M_5^3/L \sim 10^{64}\rho_\Lambda$ — where $H \to 1/L$, the dS radius hits the AdS radius, the KK tower at $1/L$ becomes light, and the 4D effective description itself ends (consistently, the traversed distance is $|\delta d| \approx u_b M_{\rm Pl} \approx 75\,M_{\rm Pl}$, a Planck-scale excursion — the regime the SDC-type trigger law, RESULT [Ooguri–Vafa], is about). This — not $\delta u_b \sim 1$ — is the only real breakdown, and it lies $64$ orders of magnitude above the vacuum scale.

### Q4.4 Assessment of C2's framing

- **"Rate amplification on an existing trigger, not a new activation threshold."** In exact variables this is *true*: $\delta d(V)$ is a smooth logarithm through $V = \rho_\Lambda$; no threshold exists below $V \sim T_c$. But the framework's *stated evidence* for the framing — the linearized law evaluated at the claimed matching scale $|V|$, where it yields $\delta u_b = 1/2$ with a 44% error — is a linearization evaluated at the edge of (and beyond, for any larger $V$) its own validity. Per the audit standard stated in the question: a linearization that exits its validity range at the claimed operating conditions refutes the *framing as stated*, even though the algebra is right.
- **"Cosmological inertness preserved."** Ambiguous, and the disambiguation is fatal to one reading. Brane-localized vacuum energy is *not* inert: it gravitates with exactly standard 4D strength, $\delta H^2 = \kappa_4^2 V/3$ (it *is* the dark-energy response). If "inertness" means "no anomalous gravitational response below the 4D cutoff," it survives; if it means "vacuum shifts do not move $H$," it is dead.
- The $\cosh^2 u_b$ enhancement is the Jacobian of the logarithmic modulus (Q2.2 note): present in $u_b$ and $d$, absent in $H^2$. Whether the trigger "amplifies" is a statement about the trigger variable. For a trigger law written in $d$ — which is the reconciliation's claim — the amplification is real but must be quoted from the *exact* law: $\delta d(\rho_\Lambda) = 0.347\,M_{\rm Pl}$ (exact) rather than $0.500\,M_{\rm Pl}$ (linear) or $6.7\times10^{-3}\,M_{\rm Pl}$ (C1 as stated).

**Q4 verdict: NEEDS REFINEMENT.** The linearized treatment self-invalidates at and above the claimed matching scale; the exact law (Q4.1) replaces it and *rescues the spirit* of C2 (no threshold; smooth logarithmic response; genuine breakdown only at $V\sim T_c$ where the 4D description ends). Earliest failing step: evaluation of the linear response at $\delta u_b = O(1)$ as the claimed threshold-consistency evidence.

---

## Verdicts

| item | verdict | earliest failing / narrowing step |
|---|---|---|
| C3 (coordinate identification) | **CONFIRMED** (qualified) | exact for the axis-crossing depth $z_0 = Le^{u_b}$; brane is not a constant-$z$ surface, so $d$ carries a $\pm\ln 2\times M_{\rm Pl}$ convention constant; variations clean to $O(10^{-64})$ |
| C1 (composition) | **NEEDS REFINEMENT** | chain-rule step $\delta\ln(z_0/L)\to\delta u_b/u_b$ contradicts C3; correction $\times u_b \approx 74.65$ upward: $\delta d = M_{\rm Pl}\delta u_b$ |
| C2 numerics | **CONFIRMED** (order) | $u_b = 74.65$, $\cosh^2 u_b = 1.7\times10^{64}$ at $L=1\mu$m, $\ell=c/H_0$; claimed $5\times10^{63}$ recovered at $L\approx2\mu$m; $|V| = \rho_\Lambda$ exact |
| C2 framing (rate, not threshold; inertness) | **NEEDS REFINEMENT** | linear law is 44% off at its own claimed matching scale and parametrically invalid above it; exact law supplied; "inertness" survives only as "no anomalous response" |
| Double-count sub-sorry | criterion **DELIVERED** (K1–K4); framework compliance **UNVERIFIED** | full framework text not available to this audit |
| C23-SDC-prime trigger law | **UNVERIFIED** (framework-internal) | its quantitative input improves: $\delta d(\rho_\Lambda) = 0.347\,M_{\rm Pl}$ exact ($0.5\,M_{\rm Pl}$ linear), vs. $6.7\times10^{-3}\,M_{\rm Pl}$ from C1 as stated |

**Overall verdict: NEEDS REFINEMENT.** Earliest failing step in the composed derivation: **C1's chain rule** ($\delta\ln(z_0/L)\to\delta u_b/u_b$). The reconciliation *survives its correction and is quantitatively strengthened by it*: the vacuum scale displaces the modulus by an order-unity fraction of the Planck distance ($0.35$–$0.5\,M_{\rm Pl}$), not by $M_{\rm Pl}/148$; but the trigger framing must be restated in the exact variables, and the double-count sub-sorry must be closed against K1–K4.

**Surviving reformulation (verbatim):**

> **C1′.** With $u_b = \ln(z_0/L)$ (brane axis-crossing depth) and $d = M_{\rm Pl}\ln(z_0/L)$, a brane-localized vacuum-energy shift moves the moduli-space geodesic distance by $\delta d = M_{\rm Pl}\,\delta u_b = M_{\rm Pl}(\kappa_5^2 L/6)\cosh^2(u_b)\,\delta V$ in the linearized regime, and exactly by $\delta d(V) = -\tfrac{M_{\rm Pl}}{2}\ln\!\big(1 + V/\tilde\rho\,\big)$ with $\tilde\rho \equiv 3L/(\kappa_5^2\ell^2) = 3M_{\rm Pl}^2/\ell^2$, for $V \ll T_c$.
>
> **C2′.** The working point is $u_b \simeq 74.6$, $\cosh^2 u_b \simeq ( \ell/L)^2 \sim 10^{63\text{–}64}$ (input-dependent). The enhancement is the Jacobian of the logarithmic modulus, not a new activation threshold: $\delta d(V)$ is smooth and logarithmic through the vacuum scale, where $\delta d(\rho_\Lambda) \approx 0.35\,M_{\rm Pl}$; the gravitational response is exactly the standard 4D one, $\delta H^2 = \kappa_4^2 V/3$, up to $V \sim T_c \sim 10^{64}\rho_\Lambda$, where $H \to 1/L$ and the 4D description ends. "Rate amplification, not threshold" is thereby preserved in exact variables; "cosmological inertness" is preserved only in the sense of no anomalous response.
>
> **Sub-sorry closure.** The decomposition closes iff it exhibits (K1) a partition $V_{\rm geo} + V_{\rm stress} = V(v)$ (or a no-summing redundancy proof), (K2) the gravitates-once response $c_{\rm geo} + c_{\rm stress} = 1$ in units of $\kappa_4^2/3$, (K3) SMS cross-term consistency on the total source, and (K4) radion-potential consistency à la Goldberger–Wise.

---

## Bibliography

Verification route disclosure: the session's scholar datasource was attempted first and returned backend errors (EMPTY_DATA / connection failure); all entries below were then verified against arXiv abstract pages, publisher listings, or multiple independent published reference lists via web search on 2026-07-21. Entries are cited in the text by the bracketed tags.

- [SMS] T. Shiromizu, K. Maeda, M. Sasaki, *The Einstein Equations on the 3-Brane World*, Phys. Rev. D **62** (2000) 024012, arXiv:gr-qc/9910076. *(Verified: arXiv listing.)*
- [BDL] P. Binétruy, C. Deffayet, D. Langlois, *Non-conventional cosmology from a brane-universe*, Nucl. Phys. B **565** (2000) 269–287, arXiv:hep-th/9905012. *(Verified: multiple independent reference lists.)*
- [Karch–Randall] A. Karch, L. Randall, *Locally Localized Gravity*, JHEP **0105** (2001) 008, arXiv:hep-th/0011156. *(Verified: publisher/arXiv listings.)*
- [RS1] L. Randall, R. Sundrum, *A Large Mass Hierarchy from a Small Extra Dimension*, Phys. Rev. Lett. **83** (1999) 3370–3373, arXiv:hep-ph/9905221. *(Verified.)*
- [RS2] L. Randall, R. Sundrum, *An Alternative to Compactification*, Phys. Rev. Lett. **83** (1999) 4690–4693, arXiv:hep-th/9906064. *(Verified.)*
- [GW] W. D. Goldberger, M. B. Wise, *Modulus Stabilization with Bulk Fields*, Phys. Rev. Lett. **83** (1999) 4922–4925, arXiv:hep-ph/9907447. *(Verified: arXiv listing.)*
- [Garriga–Pujolàs–Tanaka] J. Garriga, O. Pujolàs, T. Tanaka, *Radion effective potential in the brane world*, Nucl. Phys. B **605** (2001) 192–214, arXiv:hep-th/0004109. *(Verified: multiple independent reference lists.)*
- [Csáki–Graesser–Randall–Terning] C. Csáki, M. Graesser, L. Randall, J. Terning, *Cosmology of brane models with radion stabilization*, Phys. Rev. D **62** (2000) 045015, arXiv:hep-ph/9911406. *(Verified: independent reference lists.)*
- [Garriga–Tanaka] J. Garriga, T. Tanaka, *Gravity in the Randall-Sundrum Brane World*, Phys. Rev. Lett. **84** (2000) 2778–2781, arXiv:hep-th/9911055. *(Verified: arXiv listing.)*
- [Maartens] R. Maartens, *Brane-world gravity*, Living Rev. Rel. **7** (2004) 7, arXiv:gr-qc/0312059. *(Verified: arXiv listing.)*
- [Ooguri–Vafa] H. Ooguri, C. Vafa, *On the Geometry of the String Landscape and the Swampland*, Nucl. Phys. B **766** (2007) 21–33, arXiv:hep-th/0605264. *(Verified: publisher listing.)*

Items not verified because they are internal to the framework under audit: SF-K3B-001 itself, the C23-SDC-prime trigger law, the prior audit establishing the response law, and the angular-channel decomposition. All statements about them are labeled as target claims.

*End of artifact PK-AUD-K3B-002.*
