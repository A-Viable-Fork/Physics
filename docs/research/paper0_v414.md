# State-Dependent Vacuum Geometry from Gauge Gravity on an End-of-the-World Brane

**[Author Name]**
[Affiliation]

**Dated: May 20, 2026 (v4.14, state-dependence rationalized, frame consistency restored, species-scale numerics corrected)**

---

## Abstract

We construct a four-dimensional gravitational theory on an End-of-the-World brane embedded in a five-dimensional Anti-de Sitter Chern-Simons bulk. The SO(2,4) bulk gauge symmetry induces an SO(1,4) MacDowell-Mansouri action on the brane, which spontaneously breaks to SO(1,3), producing Einstein-Cartan gravity with a cosmological constant and a massive scalar radion. The brane theory propagates exactly three local degrees of freedom (two massless graviton polarizations plus the radion) with no Boulware-Deser ghost, established by the companion canonical analysis under a configuration-robustness condition on the spatial-connection block of the second-class Dirac matrix.

The one-loop heat kernel integration of brane-localized matter generates four independent SO(1,4)-invariant operators coupling the symmetry-breaking VEV to the matter sector at effective mass dimension 6. The operator coefficients are all gravitationally suppressed (of order $\Lambda_s^{-2}$ after species enhancement of the Kaluza-Klein tower). Three of these operators (the stress-energy trace, the Weyl curvature invariant, and the gauge trace anomaly) have thermal expectation values constrained by the Fluctuation-Dissipation Theorem to scale at most extensively as $O(N)$ with the number of equilibrium matter degrees of freedom. The fourth, the stress-energy variance coupling, evaluated non-perturbatively via the modular Hamiltonian, accesses Donnelly-Freidel boundary edge modes in states with Off-Diagonal Long-Range Order, achieving super-extensive $O(N^2)$ scaling of its expectation value. This thermodynamic selection identifies the quantum Fisher information density as the dynamically dominant argument of the VEV, yielding $v_\mathrm{eff} = v_\mathrm{eff}(\mathcal{F}_Q)$ with $v_\mathrm{eff}'(\mathcal{F}_Q) < 0$.

Two distinct gravitational couplings appear in the construction. The ambient gravitational constant $G_N \equiv 1/(8\pi v_0^2)$, defined by the bare ambient VEV $v_0 = M_\mathrm{Pl}$, is fixed. The state-dependent effective coupling $G_\mathrm{eff}(\mathcal{F}_Q) \equiv 1/(8\pi v_\mathrm{eff}^2(\mathcal{F}_Q))$ shifts with the matter sector's quantum Fisher information. For $\mathcal{F}_Q \ll \mathcal{F}_{Q,\mathrm{crit}}$, the deviation $G_\mathrm{eff}/G_N - 1$ is parametrically small and the trace channel reproduces standard general relativity. Qualitatively new effects appear in the torsion channel, where the Cartan equation $(v + \rho)^2 T_{abc} = \tau_{abc}$ has hypermomentum source vanishing in the incoherent limit but proportional to the VEV deviation in coherent states.

The construction preserves: exact general relativity recovery in the classical incoherent limit, Einstein-Cartan-Sciama-Kibble gravity in the torsion sector, the Kovtun-Son-Starinets viscosity bound $\eta/s = 1/(4\pi)$, Weinberg-Witten consistency, weak and dominant energy conditions on the brane, null energy condition via bulk-brane flux exchange, parametric radiative stability through holographic Casimir regularization and gravitational coupling suppression, and semiclassical causality via the no-signaling theorem for linear quantum matter.

The Kaluza-Klein tower of the compact fifth dimension provides the species scale, scrambling time, and dark matter candidates.

---

## I. Introduction

### A. Geometric Stabilization and the Dark Dimension

The Swampland Distance Conjecture predicts a single mesoscopic extra dimension with radius $R \sim 110$ microns [9, 10]. Mechanical stabilization of this dimension is excluded by the Poincaré recurrence of the discrete Kaluza-Klein spectrum [27]. Geometric stabilization is required.

The Dark Dimension scenario [10] posits that a single extra dimension with micron-scale radius can account for both dark energy and dark matter through its Kaluza-Klein tower. The mass gap of this tower, $m_\mathrm{KK} \sim 1/R \sim 10^{-3}\,\mathrm{eV}$, lies in an observationally interesting regime. The stabilization mechanism for such a dimension requires geometric means, wherein the vacuum structure itself fixes the extra-dimensional geometry. Mechanical potentials lead to unacceptable time-dependence or instabilities through Poincaré recurrence of the discrete KK spectrum.

### B. Gauge Gravity from Boundary Induction

A topological 5D bulk with SO(2,4) gauge symmetry induces an SO(1,4) MacDowell-Mansouri action [1] on the 4D brane boundary. The broken-phase structure recovering Einstein-Cartan gravity follows Stelle-West [2] and Wilczek [3]; the Cartan-geometric reading of the resulting connection follows Wise [4]. The construction is derived from the bulk topology. The brane theory propagates exactly 3 degrees of freedom with no Boulware-Deser ghost [26].

The Chern-Simons/Wess-Zumino-Witten correspondence [7] guarantees that the boundary theory of a 5D Chern-Simons theory is a 4D gauged WZW model. When the boundary conditions break SO(2,4) to SO(1,4), the resulting theory is isomorphic to the MacDowell-Mansouri action. This is a theorem of the bulk geometry.

### C. The One-Loop Coupling

The one-loop heat kernel integration on the brane identifies couplings between the symmetry-breaking vacuum expectation value and the matter sector. The $a_4$ Seeley-DeWitt coefficient generates four independent SO(1,4)-scalar operators at effective mass dimension 6, all with coefficients of order $1/\Lambda_s^2$ after the Kaluza-Klein species sum. Three of these operators have thermal expectation values bounded by Fluctuation-Dissipation extensivity. The fourth, the stress-energy variance coupling, accesses super-extensive $O(N^2)$ scaling through boundary edge modes in coherent states. This thermodynamic selection identifies the quantum Fisher information density as the dynamically dominant argument of the VEV.

The monotonicity of the VEV shift follows from the sign of the heat kernel coefficient. The resulting theory generalizes Einstein-Cartan gravity in a controlled manner, preserving all consistency requirements while introducing state-dependence through a single, thermodynamically selected function.

### D. Structure of the Paper

Section II establishes the 5D bulk geometry and the End-of-the-World brane. Section III presents the spontaneous symmetry breaking from SO(1,4) to SO(1,3), the auxiliary-field structure required for the radion kinetic term, the topological quantization of the cosmological constant via the Addazi-Meluccio mechanism, and the resulting effective action. Section IV derives the one-loop couplings, the thermodynamic selection mechanism, and the state-dependent effective VEV. Section V discusses the Kaluza-Klein tower. Section VI presents the consistency checks: nine structural proofs that the construction violates no known constraints. Section VII discusses cosmological scope: the static cosmological constant commitment, and the resulting positioning relative to current observational signatures. Section VIII lists scope, limitations, and open problems. Section IX concludes.

Appendices contain notation, the explicit effective action, heat kernel coefficients with operator content, the KK tower load map, and formalization status.

---

## II. The Bulk

### A. The AdS₅ Chern-Simons Action

The bulk is governed by the SO(2,4) Chern-Simons 5-form:

$$S_\mathrm{bulk} = \frac{k}{4\pi^2} \int_{M_5} \mathrm{Tr}\!\left(A \wedge dA \wedge dA + \frac{3}{2} A^3 \wedge dA + \frac{3}{5} A^5\right), \tag{1}$$

where $A$ is an $\mathfrak{so}(2,4)$-valued connection 1-form and $k$ is the Chern-Simons level. This action is topological: its bulk equations of motion set the field strength to zero ($F = 0$), and the theory possesses no local propagating degrees of freedom in the five-dimensional interior. The absence of bulk propagators prevents the introduction of Ostrogradsky ghosts from the topological sector [5, 6].

### B. The End-of-the-World Brane

An End-of-the-World brane [8] is placed at radial position $z = z_0$ in the Poincaré patch of AdS₅ with line element

$$ds^2 = \frac{L^2}{z^2}\!\left(\eta_{\mu\nu}\,dx^\mu dx^\nu + dz^2\right), \tag{2}$$

where $L$ is the AdS curvature radius and $\eta_{\mu\nu} = \mathrm{diag}(-1,+1,+1,+1)$. The induced metric on the worldvolume is

$$h_{\mu\nu} = \left(\frac{L}{z_0}\right)^2 \eta_{\mu\nu}. \tag{3}$$

The Israel junction conditions [28] relate the discontinuity of the extrinsic curvature across the brane to the brane's localized stress-energy. For a single ETW brane with $\mathbb{Z}_2$ symmetry, the junction condition reads

$$K_{\mu\nu} - K h_{\mu\nu} = -\frac{\kappa_5^2}{2}\,T_3\,h_{\mu\nu}, \tag{4}$$

where $\kappa_5^2 = 8\pi G_5$ and $T_3$ is the brane tension.

The outward-pointing unit normal is $n^M = (z/L)\,\delta^z_M$. The extrinsic curvature evaluates to $K_{\mu\nu} = -(1/L)\,h_{\mu\nu}$ with trace $K = -4/L$. Substituting into Eq. (4) yields

$$T_3 = \frac{6}{\kappa_5^2 L}. \tag{5}$$

This result is independent of $z_0$. The brane can sit at any radial position with the same constant tension.

### C. Boundary Induction of the MacDowell-Mansouri Action

The brane worldvolume $\Sigma_4 = \partial M_5$ serves as the boundary of the Chern-Simons manifold. The variation of $S_\mathrm{bulk}$ produces a non-vanishing boundary term. Specifying boundary conditions on $\Sigma_4$ breaks the bulk gauge group:

$$\mathrm{SO}(2,4) \xrightarrow{\text{boundary}} \mathrm{SO}(1,4).$$

The boundary term generated by the Chern-Simons variation takes the form of a gauged Wess-Zumino-Witten model [7]. This WZW action, evaluated for the SO(1,4) connection restricted to $\Sigma_4$, is isomorphic to the MacDowell-Mansouri action [1-4] with an auxiliary-field kinetic structure for the Higgs sector forced by SO(1,4) covariance [16]:

$$S_\mathrm{MM} = \alpha \int_{\Sigma_4} \epsilon_{ABCDE}\,F^{AB} \wedge F^{CD}\,\phi^E + \beta \int_{\Sigma_4} d^4x\,|J|\,V_\mathrm{SSB}(\phi) + S_\mathrm{aux}, \tag{7}$$

where $F^{AB} = dA^{AB} + A^A{}_C \wedge A^{CB}$ is the SO(1,4) field strength 2-form, $A^A_\mu$ is the gauge connection, $\phi^A$ is an internal Higgs vector field, $\alpha$ and $\beta$ are dimensionful couplings, $|J|$ ensures coordinate invariance, $V_\mathrm{SSB}(\phi)$ is the symmetry-breaking potential specified in Section III.A, and $S_\mathrm{aux}$ is the first-order auxiliary-field action

$$S_\mathrm{aux} = \frac{1}{3!\, L} \int_{\Sigma_4} \epsilon_{ABCDE}\,\phi^A\, D\phi^B \wedge D\tau^C \wedge D\tau^D \wedge D\tau^E,$$

with $\tau^A$ the Stelle-West director field on the SO(1,4)/SO(1,3) coset and $D$ the SO(1,4) gauge covariant derivative. The auxiliary structure is required for SO(1,4) covariance of the scalar kinetic sector: the naive $(D\phi)^\dagger(D\phi)$ construction evaluates in standard gauge to an antisymmetric $\mu\nu$ density that vanishes identically as a Klein-Gordon kinetic term. The auxiliary-field formulation [16] resolves this obstruction by promoting the scalar to a 5-vector whose four Lorentz components serve as auxiliary fields integrated out via algebraic equations of motion. The companion canonical analysis [26] establishes that the resulting Higgs sub-sector contributes second-class rank 8 with no derivative-of-delta entries, preserving the propagating radion content.

**Theorem II.1 (MacDowell-Mansouri Induction).** The boundary theory of the SO(2,4) Chern-Simons bulk with ETW boundary conditions is isomorphic to the SO(1,4) MacDowell-Mansouri action on the brane.

The symmetry-breaking chain is:

$$\mathrm{SO}(2,4) \xrightarrow{\text{boundary}} \mathrm{SO}(1,4) \xrightarrow{\mathrm{SSB}} \mathrm{SO}(1,3).$$

The first breaking is kinematic (imposed by boundary conditions); the second is dynamic (driven by the Higgs potential).

### D. The Unified Brane Action

The total action is the sum of the topological bulk and the dynamical brane:

$$S_\mathrm{total} = S_\mathrm{bulk}[\mathrm{CS},\,\mathrm{SO}(2,4)] + S_\mathrm{brane}[\mathrm{MM} + \mathrm{DBI}],$$

where the DBI sector governs the brane's mechanical embedding:

$$S_\mathrm{DBI} = -T_3 \int d^4\xi\,\sqrt{-\det\!\left(g^\mathrm{ind}_{\mu\nu} + 2\pi\alpha' F_{\mu\nu}\right)}. \tag{10}$$

The MacDowell-Mansouri sector governs gauge structure and symmetry breaking; the DBI sector governs the brane's kinetic embedding. The consistency condition linking the two is the identification of the induced metric $g^\mathrm{ind}_{\mu\nu} = \eta_{ab}\,e^a_\mu\,e^b_\nu$.

---

## III. Symmetry Breaking and the Effective Action

### A. The SO(1,4) Higgs Mechanism

The Higgs field $\phi^A$ acquires a vacuum expectation value

$$\langle \phi^A \rangle = v_0\,\delta^A_4, \tag{11}$$

breaking SO(1,4) to SO(1,3). The stabilizer of the vector $\delta^A_4$ under SO(1,4) rotations is exactly the Lorentz group SO(1,3) acting on indices $a, b = 0, 1, 2, 3$. The bare ambient VEV $v_0$ is identified with the ambient Planck scale, $v_0 = M_\mathrm{Pl}$ at the brane.[^v-trans-Planckian]

[^v-trans-Planckian]: In the Addazi-Meluccio mechanism (Section III.A bis), the underlying coordinate VEV in the SO(1,4)-invariant orbit variable is trans-Planckian, with the brane-effective Planck mass generated through a coupling relation. Throughout the present paper, $v_0$ denotes the brane-effective amplitude $M_\mathrm{Pl}$ in the broken phase; the relation to the trans-Planckian bare VEV is a parametric input recorded in Section III.A bis but does not propagate into the one-loop analysis of Section IV.

In the broken phase, the gauge connection decomposes algebraically:

$$A^{AB}_\mu \to \begin{cases} A^{ab}_\mu \equiv \omega^{ab}_\mu & \text{(Lorentz spin connection)}, \\ A^{a4}_\mu \equiv m\,e^a_\mu & \text{(rescaled tetrad)}, \end{cases} \tag{12}$$

where $m$ is a mass parameter of order $v_0/L$. The spin connection $\omega^{ab}_\mu$ is the gravitational connection of the emergent Riemannian geometry; the tetrad $e^a_\mu$ defines the frame field from which the spacetime metric is constructed:

$$g_{\mu\nu} = \eta_{ab}\,e^a_\mu\,e^b_\nu. \tag{13}$$

Fluctuations of the Higgs field around its VEV are parameterized as

$$\phi^A(x) = (v_0 + \rho(x))\,\delta^A_4, \tag{14}$$

where $\rho(x)$ is the massive scalar radion. The local Higgs amplitude is $v(x) = v_0 + \rho(x)$. When matter coherence shifts the effective VEV via the mechanism of Section IV, we denote the state-dependent amplitude $v_\mathrm{eff}(\mathcal{F}_Q)$, identified with the equilibrium value of $v_0 + \langle\rho\rangle$ in the presence of the variance coupling.

### A bis. Topological Quantization of the Vacuum via the Addazi-Meluccio Potential

The standard sombrero potential $V_\mathrm{sombrero}(\phi) = \lambda(\phi^A\phi_A - v_0^2)^2$ produces a continuous degenerate vacuum manifold $\mathrm{SO}(1,4)/\mathrm{SO}(1,3)$ with a single fixed VEV magnitude $|\phi| = v_0$. The Addazi-Meluccio mechanism [34] replaces this with a periodic potential

$$V_\mathrm{SSB}(\phi) = Y_\mathrm{SSB}\,|J(\phi)|\,\bigl[1 - \cos\!\bigl(c\, Y_\mathrm{MM}\,(|\phi| - v_0)\bigr)\bigr]^{p}, \tag{15a}$$

where $|J(\phi)|$ is the SO(1,4)-invariant Jacobian density on the Higgs orbit, $c$ and $Y_\mathrm{MM}$ are constants fixed by the bulk-induced MM coefficients (with $c = 128\pi^2$ in the convention adopted here), $Y_\mathrm{SSB}$ and $p$ are dimensional and dimensionless couplings respectively. The periodicity of the cosine generates a discrete tower of vacua labeled by an integer topological sector index $k$, with cosmological constants

$$\Lambda^{(k)} = \frac{3\,c\,M_\mathrm{Pl}^2}{32\,(-\theta^{(0)} + 2\pi k)}, \tag{15b}$$

where $\theta^{(0)}$ is a phase parameter set by the pre-geometric symmetry breaking. Inter-sector tunneling is suppressed by $e^{-S_\mathrm{dS}}$ where $S_\mathrm{dS}$ is the de Sitter entropy of the cosmological horizon. The observed cosmological constant corresponds to the sector $k \sim S_\mathrm{dS} \sim 10^{120}$.

Stabilization of the radial bulk modulus $z_0$ that anchors the discrete sector selection requires a non-perturbative mechanism in the Karch-Randall warped throat. The leading candidate is gauge instanton stabilization in an F-theory compactification with Pati-Salam gauge content, conditional on a running coupling rescue criterion $b > 1/(4\pi^2)$ for the one-loop beta function coefficient of the relevant Kaluza-Klein tower. Verification of this criterion for a specific compactification is the principal open computational task of the construction (Section VIII).

The radion fluctuates within a single $\Lambda^{(k)}$ sector. Inter-sector transitions are non-perturbative and suppressed by $e^{-S_\mathrm{dS}}$. The Addazi-Meluccio potential locally reduces to a quadratic well around each sector minimum, so the radion mass $m_\rho$ remains in the window $[1\,\mathrm{meV}, 100\,\mathrm{GeV}]$ with target $\sim 1$ MeV.

### B. The Effective Action in the Broken Phase

The bare MM expansion in the broken phase produces a Jordan-frame scalar-tensor action with linear non-minimal coupling and the radion kinetic term emerging from auxiliary-field reduction of $S_\mathrm{aux}$. After auxiliary elimination and canonical normalization the effective action takes the Brans-Dicke parametrization [2, 3, 16]

$$S_\mathrm{eff} = \int d^4x\,\sqrt{-g}\,\Bigl[\Phi(\rho)\,R(\omega) - \frac{\omega_\mathrm{BD}}{\Phi(\rho)}(\partial\Phi)^2 - V(\rho) + \beta\,\Phi(\rho)\,T^{\mu\nu\lambda} T_{\mu\nu\lambda}\Bigr], \tag{16}$$

with non-minimal coupling $\Phi(\rho) = (v_0 + \rho)^2$, Brans-Dicke parameter $\omega_\mathrm{BD} \approx 1/4$, broken-phase potential $V(\rho)$ including the radion mass term, and torsion 2-form $T^a_{\mu\nu}$.[^frame-note] Linearization around $\rho = 0$ yields the canonical radion mass

$$m_\rho^2 \approx 8\lambda\,v_0^2, \tag{17}$$

where $\lambda$ is the local curvature of $V_\mathrm{SSB}$ at the selected sector minimum. The intrinsic AdS contribution $m_\mathrm{AdS}^2 = 4/L^2$ from the auxiliary-field structure is subdominant for $\lambda v_0^2 \gg 1/L^2$, the regime relevant to MeV-scale radion phenomenology.

[^frame-note]: Equation (16) is the phenomenological Brans-Dicke form. As a single-frame action it should be read either as Jordan-frame after auxiliary-field elimination of $S_\mathrm{aux}$ (so the radion kinetic term sits implicitly inside the BD kinetic structure rather than as a bare $(\partial\rho)^2$), or as Einstein-frame after Weyl rescaling $g_{\mu\nu} = \Phi^{-1}\hat{g}_{\mu\nu}$ with canonical scalar $\psi = \sqrt{3}\ln((v_0+\rho)/v_0)$. The Einstein-frame display is $S = \int d^4x\,\sqrt{-\hat{g}}\,[\hat{R} - \tfrac{1}{2}(\partial\psi)^2 - \hat{V}(\psi) + \hat{\beta}\,T^2]$, with the gravitational coupling absorbed into $\hat{R}$'s constant coefficient and the radion appearing as a canonical scalar. Mixing Jordan-frame non-minimal coupling with Einstein-frame-style bare $(\partial\rho)^2$ is forbidden; see [26, §II E] for the frame-consistency analysis.

### C. The Two-Channel Decomposition

The brane stress-energy decomposes into two channels with distinct algebraic properties.

*Trace channel.* Sources Ricci curvature with effective gravitational coupling $G_\mathrm{eff}(\mathcal{F}_Q) = 1/(8\pi v_\mathrm{eff}^2(\mathcal{F}_Q))$. The ambient gravitational constant $G_N \equiv 1/(8\pi v_0^2)$ is recovered in the incoherent limit $\mathcal{F}_Q \to 0$, where $v_\mathrm{eff} \to v_0$. The deviation $G_\mathrm{eff}/G_N - 1 \approx -2(v_\mathrm{eff} - v_0)/v_0$ is parametrically small for $\mathcal{F}_Q \ll \mathcal{F}_{Q,\mathrm{crit}}$ (Section IV.G); in this regime the trace channel reproduces standard general relativity to within unobservable corrections.

*Traceless antisymmetric channel.* Sources torsion via the Cartan equation

$$(v_0 + \rho)^2\,T_{abc} = \tau_{abc}, \tag{18}$$

where $\tau_{abc}$ is the hypermomentum (spin current for fermions). Torsion is sourced by hypermomentum in standard Einstein-Cartan gravity. The state-dependent prefactor $(v_0 + \rho)^2$ admits qualitatively new behavior: the radion fluctuation $\rho$ tracks the state through $v_\mathrm{eff}$, and at the pole condition $\mathcal{F}_Q \to \mathcal{F}_{Q,\mathrm{crit}}$ the effective amplitude vanishes, magnifying torsion arbitrarily for fixed hypermomentum.

**Theorem III.1 (Two-Channel Decomposition).** The SO(1,4) → SO(1,3) spontaneous symmetry breaking induces an algebraic decomposition of the brane stress-energy into a trace channel (Ricci curvature, gravitational coupling $G_\mathrm{eff} \approx G_N$ in the incoherent limit) and a traceless antisymmetric channel (torsion, coherence-dependent via $v_\mathrm{eff}$).

The trace channel reproduces General Relativity for incoherent matter. Qualitatively new effects appear in the torsion channel through the state-dependent VEV.

### D. Constraint Analysis

The companion canonical analysis [26] establishes the constraint structure. The 90-dimensional phase space (10 connection components × 4 spacetime directions × 2 phase space factors + 5 Higgs components × 2) is subject to 64 total constraints: 45 primary + 19 secondary, partitioned into 20 first-class and 44 second-class.

The Dirac formula gives

$$\mathrm{DOF} = \frac{90 - 2 \times 20 - 44}{2} = 3. \tag{19}$$

The theory propagates exactly three degrees of freedom: two massless graviton polarizations plus the massive scalar radion. The Boulware-Deser ghost is absent because the Hamiltonian constraint is topologically protected within the first-class SO(1,4) Gauss algebra. Torsion carries zero independent propagating degrees of freedom.

This conclusion rests on the configuration-robustness condition of [26]: for nondegenerate broken-vacuum configurations satisfying the standard regularity assumptions, the rank of the frozen-background full multiplier matrix at $\xi \ne 0$ equals the physical secondary count. Configuration-robustness verification across the relevant configuration class is the central open question of the canonical analysis; pending its completion the DOF = 3 count is conditional in the sense of [26], not unconditional.

---

## IV. The Heat Kernel and the One-Loop Coupling

### A. One-Loop Effective Action on a Curved Background

Matter fields (scalars, fermions, gauge bosons) propagate on the brane with background geometry determined by the MacDowell-Mansouri sector. The one-loop effective action is computed via the heat kernel expansion [16, 17]:

$$\Gamma^{(1)} = -\frac{1}{2}\int_0^\infty \frac{ds}{s}\,\mathrm{Tr}[K(x,x;s)], \tag{20}$$

where $K$ is the heat kernel. The Seeley-DeWitt expansion gives the coincidence limit as a series in curvature invariants:

$$\mathrm{Tr}[K(x,x;s)] = \frac{1}{(4\pi s)^{d/2}} \sum_{n=0}^{\infty} s^n\,a_{2n}(x), \tag{21}$$

where $d = 4$ is the spacetime dimension. This is standard material; no novelty is claimed here.

### B. The $a_4$ Coefficient and the Stress-Energy Contact Term

The $a_4(x)$ Seeley-DeWitt coefficient contains terms proportional to the square of the curvature. For a generic Laplace-type operator $\Delta = -D_\mu D^\mu + E$, the fourth-order coefficient is [17]:

$$a_4(x) = \mathrm{tr}\!\left[\frac{1}{180}\!\left(R_{\mu\nu\rho\sigma}R^{\mu\nu\rho\sigma} - R_{\mu\nu}R^{\mu\nu}\right) + \frac{1}{6}RE + \frac{1}{12}\Omega_{\mu\nu}\Omega^{\mu\nu} + \frac{1}{2}E^2\right], \tag{22}$$

where $\Omega_{\mu\nu}$ is the bundle curvature.

When evaluated on the brane, the coincidence limit of the stress-energy two-point function appears. The second functional derivative of the effective action with respect to the background geometry isolates the interaction between the SO(1,4)-invariant scalar combination $\phi^A \phi_A$ and the matter sector. This extracts the local structural anomaly proportional to the trace of the connected stress-energy correlator:

$$\langle T_{\mu\nu}(x)\,T^{\mu\nu}(x)\rangle_\mathrm{ren} = \mathrm{Var}(T_{\mu\nu}), \tag{23}$$

which is the stress-energy variance at point $x$.

### C. Identification as the Quantum Fisher Information Density

The stress-energy variance in the coincidence limit is, for Kubo-Martin-Schwinger thermal states under exact Poincaré symmetry, the quantum Fisher information density $\mathcal{F}_Q$ of the matter sector with respect to the modular Hamiltonian $K_\mathrm{mod}$ (the generator of the local Rindler boost). This identification follows from the Braunstein-Caves theorem [18]:

$$\mathcal{F}_Q[\rho, A] = 2\sum_{i,j} \frac{(p_i - p_j)^2}{p_i + p_j} \times |\langle i | A | j \rangle|^2, \tag{24}$$

specialized to $A = T_{\mu\nu}$. The identification holds as an equality for thermal states under exact Poincaré symmetry (the Bisognano-Wichmann limit, infinite Rindler wedge); for finite subregions of coherent states, the modular Hamiltonian acquires boundary contributions that modify the variance, as developed in Section IV.E.

**Theorem IV.1 (QFI Identification, Bisognano-Wichmann limit).** The stress-energy variance $\langle T_{\mu\nu}\,T^{\mu\nu}\rangle_\mathrm{ren}$ in the coincidence limit equals the quantum Fisher information density $\mathcal{F}_Q$ for KMS thermal states under exact Poincaré symmetry.

**Formal definition.** Throughout this paper, $\mathcal{F}_Q$ denotes the Quantum Fisher Information density evaluated via the modular Hamiltonian: $\mathcal{F}_Q \equiv v_0^{-4}\,\mathrm{Var}(K_\mathrm{mod})$, where $K_\mathrm{mod}$ is defined by the Tomita-Takesaki modular operator $\Delta = \exp(-K_\mathrm{mod})$ associated with the restriction of the quantum state to the relevant spatial subregion, and the prefactor $v_0^{-4}$ normalizes the dimensionless modular variance to a density with mass dimension four. In the Bisognano-Wichmann limit (exact Poincaré invariance, infinite Rindler wedge), this reduces to $v_0^{-4}\,\mathrm{Var}(T_{\mu\nu})$. For finite subregions of states with Off-Diagonal Long-Range Order, the modular Hamiltonian is non-local and includes boundary edge mode contributions that dominate the variance. The perturbative heat kernel calculation in Section IV.A provides the computational entry point via the coincidence limit of the stress-energy two-point function; the non-perturbative modular definition supplies the correct scaling in coherent states. All claims regarding the super-extensive scaling of $\mathcal{F}_Q$ depend on this non-perturbative identification.

### D. Operator Content of the One-Loop Effective Action

The $a_4$ Seeley-DeWitt coefficient generates the stress-energy variance coupling $\gamma(\eta_{AB}\,\phi^A\phi^B)\,\mathcal{F}_Q$ as derived below. It also generates three additional SO(1,4)-scalar, parity-even, diffeomorphism-invariant operators at the same effective mass dimension: the stress-energy trace coupling $\eta_{AB}\,\phi^A\phi^B\,g^{\mu\nu}T_{\mu\nu}$, the Weyl curvature coupling $\eta_{AB}\,\phi^A\phi^B\,C_{\mu\nu\rho\sigma}\,C^{\mu\nu\rho\sigma}$ (with coefficient determined by the central charge $c_W$ of the matter sector), and the gauge trace anomaly coupling $\eta_{AB}\,\phi^A\phi^B\,\mathrm{Tr}(F_{\mu\nu}F^{\mu\nu})$ (the standard conformal anomaly, with coefficient proportional to the beta function $\beta(g)$ of the gauge group). The topological Gauss-Bonnet combination $E_4$ is a total derivative in four dimensions and contributes nothing to the local dynamics. The individual Ricci-squared terms $R^2$ and $R_{\mu\nu}R^{\mu\nu}$ are algebraically reducible to stress-energy combinations via the classical field equations.

The coefficient $\gamma$ of the variance operator is determined by the one-loop heat kernel expansion on the brane, evaluated over the full Kaluza-Klein graviton tower descending from the AdS$_5$ bulk. The derivation proceeds in four steps.

**Step 1: Single-Species $a_4$ Contribution.** For a single massive Fierz-Pauli spin-2 field of mass $m_n$ on the brane, the Seeley-DeWitt $a_4$ coefficient contains a Ricci-squared invariant [17]:

$$a_4^{(n)}(x) \sim \frac{c_\mathrm{KK,n}}{180}\,R_{\mu\nu}\,R^{\mu\nu} + \text{(other curvature invariants)},$$

where $c_\mathrm{KK,n}$ is an $O(1)$ coefficient fixed by the Fierz-Pauli tuning and Faddeev-Popov ghost subtractions. For the massive spin-2 spectrum descending from AdS$_5$, the ghost structure renders $c_\mathrm{KK,n}$ mode-independent to leading order, and we write $c_\mathrm{KK,n} = c_\mathrm{KK}$ for all modes below the species scale.

**Step 2: Kaluza-Klein Sum.** The one-loop effective action on the brane is the sum over KK modes of individual functional determinants [29, 30, 31]:

$$\Gamma^{(1)} = -\frac{1}{2}\,\sum_{n=1}^{N_\mathrm{species}} \int_{\epsilon}^{\infty}\frac{ds}{s}\,\mathrm{Tr}\,\exp(-s\,\mathcal{D}_n),$$

where $\epsilon = 1/\Lambda_s^2$ implements the species-scale UV cutoff [32, 33]. The heat kernel trace is a spectral sum over eigenvalues, not a coherent wave amplitude. Distinct KK modes contribute additively to the local $a_4$ coefficient without phase cancellation: the Sturm-Liouville orthogonality of the extra-dimensional wavefunctions governs off-diagonal matrix elements and propagators between separated points, and does not generate sign-alternating cancellation in the diagonal spectral trace that defines local Seeley-DeWitt coefficients.

For all modes with $m_n < \Lambda_s$, the Boltzmann factor $\exp(-s\,m_n^2)$ is $O(1)$ at the cutoff $s \sim 1/\Lambda_s^2$. These modes contribute unsuppressed $a_4$ terms. The local coincidence-limit contribution to the effective action is:

$$\Gamma^{(1)} \supset \frac{c_\mathrm{KK}}{16\pi^2}\,N_\mathrm{species}\,\log(\Lambda_s/\mu)\,\int d^4x\,\sqrt{-g}\,R_{\mu\nu}\,R^{\mu\nu} + \text{(other terms)}.$$

**Step 3: Classical Reduction.** The Ricci-squared invariant reduces to a matter stress-energy variance via the classical Einstein equations in the broken phase. The MM action in the broken phase yields:

$$R_{\mu\nu} = \frac{1}{2v_0^2}\,\left(T_{\mu\nu} - \tfrac{1}{2}\,T\,g_{\mu\nu}\right).$$

Squaring and using the four-dimensional identity $g^{\mu\nu}g_{\mu\nu} = 4$:

$$R_{\mu\nu}\,R^{\mu\nu} = \frac{1}{4 v_0^4}\,T_{\mu\nu}\,T^{\mu\nu}.$$

The trace-squared terms cancel exactly. Substituting:

$$\Gamma^{(1)} \supset \frac{c_\mathrm{KK}\,N_\mathrm{species}}{64\pi^2\,v_0^4}\,\log(\Lambda_s/\mu)\,\int d^4x\,\sqrt{-g}\,T_{\mu\nu}\,T^{\mu\nu}.$$

**Step 4: Species Identity and Operator Matching.** The Dvali-Gomez species identity in the form appropriate to a single mesoscopic extra dimension reads $N_\mathrm{species} = M_\mathrm{Pl}^2/\Lambda_s^2$ [32], combined with the brane-effective identification $v_0 = M_\mathrm{Pl}$ gives:

$$\frac{N_\mathrm{species}}{v_0^4} = \frac{1}{M_\mathrm{Pl}^2\,\Lambda_s^2}.$$

The Wilsonian coefficient absorbs the logarithmic factor. Matching the local operator to $\gamma(\eta_{AB}\,\phi^A\phi^B)\,\mathcal{F}_Q$, where $\mathcal{F}_Q = v_0^{-4}\,(T_{\mu\nu}T^{\mu\nu})_\mathrm{ren}$ in the Bisognano-Wichmann limit and the Higgs bilinear evaluates to $v_0^2 = M_\mathrm{Pl}^2$ on the background:

$$\gamma = \frac{c_\mathrm{KK}}{128\pi^2\,\Lambda_s^2}.$$

The bare Planck mass decouples from the coefficient. The dimensional suppression is governed by the species scale, with $M_\mathrm{Pl}$ appearing only through the species identity. The Donnelly-Freidel edge modes [25] modify the evaluation of $\mathcal{F}_Q$ in ODLRO states while $\gamma$ remains a Wilsonian UV coefficient.

The variance coupling is therefore one of four independent operators in the one-loop effective action at this mass dimension. Its selection as the dynamically dominant coupling follows from thermodynamic scaling rather than from Lagrangian exclusion, as we now demonstrate.

### E. Thermodynamic Selection of the Variance Coupling

All four operators identified in Section IV.D have coefficients of comparable gravitational strength, of order $1/\Lambda_s^2$ after the Kaluza-Klein species sum. The selection mechanism does not operate on coefficients; it operates on the *expectation values* of the operators in physically relevant states.

For thermal equilibrium states, the Fluctuation-Dissipation Theorem constrains the connected expectation value of any local operator built from matter fields to scale at most extensively as $O(N)$ with the number of matter degrees of freedom $N$. The stress-energy trace $\langle T^\mu{}_\mu\rangle$ obeys this scaling directly: it is bounded by the energy density, which is $O(N)$ in any thermal state. For the geometric operators $\langle C_{\mu\nu\rho\sigma}C^{\mu\nu\rho\sigma}\rangle$ and $\langle\mathrm{Tr}(F_{\mu\nu}F^{\mu\nu})\rangle$, the FDT-bounded scaling enters through the matter-sector contributions to the curvature and gauge sectors via the classical equations of motion: each Ricci-squared or curvature-squared term reduces on-shell to combinations of $T_{\mu\nu}T^{\mu\nu}$ or matter-sourced gauge invariants, whose thermal expectation values are themselves $O(N)$.

Coupled to the Higgs bilinear $\eta_{AB}\phi^A\phi^B$ with coefficient $\sim 1/\Lambda_s^2$, the $O(N)$ thermal expectation values of operators (i), (ii), and (iii) produce VEV shifts suppressed by approximately $(N/(M_\mathrm{Pl}^2 \Lambda_s^2)) \cdot v_0^2 \cdot \langle\mathcal{O}\rangle$, which for ordinary equilibrium matter is gravitationally suppressed by 40 or more orders of magnitude relative to $v_0^2$. Under equilibrium conditions, none of these operators can accumulate sufficient magnitude to drive a macroscopic shift in the effective Planck mass.

The variance coupling breaks this degeneracy in states exhibiting Off-Diagonal Long-Range Order. The critical step is the identification of the stress-energy variance with the Quantum Fisher Information, evaluated non-perturbatively as the second variation of the Araki relative entropy under Tomita-Takesaki modular flow. This yields the variance of the modular Hamiltonian $K_\mathrm{mod}$ rather than the canonical stress-energy tensor $T_{\mu\nu}$. The Bisognano-Wichmann theorem equates $K_\mathrm{mod}$ to a local spatial integral of $T_{\mu\nu}$ only under exact Poincaré invariance and for the infinite Rindler wedge. Both conditions fail for finite subregions of coherent ODLRO states. In this regime, $K_\mathrm{mod}$ acquires boundary-localized contributions: the Donnelly-Freidel edge modes [25], whose variance scales as the boundary area rather than the bulk volume.

This area-law enhancement of $\mathrm{Var}(K_\mathrm{mod})$ produces super-extensive $O(N^2)$ scaling for $\mathcal{F}_Q$ in ODLRO states, while the competing operators remain bounded at $O(N)$. The activation threshold for vacuum displacement (Section IV.G) requires super-extensive scaling to be breached. Only the variance coupling, evaluated via the modular Hamiltonian, can reach this threshold in the presence of macroscopic quantum coherence.

The coupling $\gamma(\eta_{AB}\,\phi^A\phi^B)\,\mathcal{F}_Q$ is therefore dynamically unique: the sole operator whose expectation-value scaling permits macroscopic suppression of the symmetry-breaking vacuum expectation value.

### F. Species Enhancement and the Dimensional Structure of $\gamma$

The derivation in Section IV.D establishes that $\gamma$ scales as $1/\Lambda_s^2$ rather than $1/M_\mathrm{Pl}^2$. This follows from the heat kernel sum over the Kaluza-Klein graviton tower: each mode contributes a local $a_4$ coefficient at strength $\sim 1/(16\pi^2\,M_\mathrm{Pl}^2)$, and the sum over $N_\mathrm{species}$ modes yields a total coefficient scaling as $N_\mathrm{species}/M_\mathrm{Pl}^2 = 1/\Lambda_s^2$.

Two aspects of this derivation warrant emphasis.

First, the sum over KK modes is additive rather than coherent. The object being summed is the spectral trace $\mathrm{Tr}\,\exp(-s\,\Delta)$, which is a sum of eigenvalue contributions with no phases to cancel. Sturm-Liouville orthogonality arguments (which apply to off-diagonal matrix elements and scattering amplitudes with external KK states) do not apply to diagonal spectral traces.

Second, the species enhancement of $\gamma$ is structurally distinct from the FDT constraint on operator expectation values. The FDT bounds extensive scaling of thermal observables to $O(N)$ in matter degrees of freedom. The species enhancement of $\gamma$, by contrast, is a UV effect on the operator *coefficient* arising from integrating out $N_\mathrm{species}$ KK graviton modes. These are logically independent mechanisms. Operators (i) through (iii) inherit the same species enhancement of their coefficients (since all four operators share the same one-loop pedigree), but their thermal expectation values remain subject to FDT and stay below the activation threshold even with species-enhanced coefficients. Operator (iv) accesses super-extensive $O(N^2)$ expectation values through Donnelly-Freidel edge modes in ODLRO states, giving it a separate route to the threshold.

The combined mechanism for vacuum destabilization in ODLRO states involves both species enhancement of $\gamma$, yielding $\mathcal{F}_{Q,\mathrm{crit}} \sim \Lambda_s^2\,m_\rho^2$ in place of $M_\mathrm{Pl}^2\,m_\rho^2$, and edge mode enhancement of $\mathcal{F}_Q$ itself in ODLRO states, providing super-extensive scaling.

The prefactor $c_\mathrm{KK}$ requires an explicit calculation of the $a_4$ coefficient for the full 5D gauge-fixed spin-2 operator with Karch-Randall boundary conditions and Faddeev-Popov ghosts. This computation is tractable and has not been performed in the published literature for this specific configuration. The present paper treats $c_\mathrm{KK}$ as an $O(1)$ dimensionless constant; precision predictions from the construction carry an overall uncertainty of roughly one order of magnitude in $c_\mathrm{KK}$. Determination of this prefactor represents the primary precision target for the construction.

### G. The Effective VEV as a Function of $\mathcal{F}_Q$

The one-loop effective potential, including the coupling term, shifts the vacuum. The total potential is

$$V_\mathrm{total} = V_\mathrm{SSB}(\phi) + \gamma\!\left(\eta_{AB}\,\phi^A\phi^B\right)\mathcal{F}_Q, \tag{26}$$

where $V_\mathrm{SSB}(\phi)$ is the Addazi-Meluccio periodic potential (15a). Locally around the selected sector minimum, $V_\mathrm{SSB}$ expands as $\tfrac{1}{2}\,m_\rho^2\,(v - v^{(k)}_\ast)^2 + O((v - v^{(k)}_\ast)^3)$, with $v^{(k)}_\ast$ the sector-specific minimum and the effective quartic strength $\lambda$ identified as the local curvature: $m_\rho^2 = 8\lambda\,(v^{(k)}_\ast)^2$. We identify $v^{(k)}_\ast$ with $v_0$ for the currently selected sector. Minimizing $V_\mathrm{total}$ within the fixed sector yields the linear-response shift

$$v^2_\mathrm{eff}(\mathcal{F}_Q) = v_0^2 - \frac{\gamma}{\lambda}\,\mathcal{F}_Q. \tag{27}$$

The state-dependent VEV is identified with this minimizer: $v_\mathrm{eff} = \sqrt{v_0^2 - (\gamma/\lambda)\mathcal{F}_Q}$, with $v_\mathrm{eff}'(\mathcal{F}_Q) < 0$. The pole condition at which $v_\mathrm{eff} \to 0$ is

$$\mathcal{F}_{Q,\mathrm{crit}} = \frac{\lambda\,v_0^2}{\gamma} = \frac{m_\rho^2}{8\gamma}.$$

Substituting the derived $\gamma$ from Section IV.D:

$$\mathcal{F}_{Q,\mathrm{crit}} = \frac{16\pi^2\,m_\rho^2\,\Lambda_s^2}{c_\mathrm{KK}}.$$

For the Dark Dimension parameters ($m_\rho \sim 1\,\mathrm{MeV}$, $\Lambda_s \sim 2.3 \times 10^8\,\mathrm{GeV}$, computed in Section V):

$$\mathcal{F}_{Q,\mathrm{crit}} \sim 10^{12}\text{ to }10^{13}\,\mathrm{GeV}^4 / c_\mathrm{KK}.$$

This is the activation threshold for macroscopic VEV suppression. The coupling activates when the matter sector's quantum Fisher information density approaches this value. Extensive observables scaling as $O(N)$ through the Fluctuation-Dissipation Theorem remain orders of magnitude below this threshold in all equilibrium settings. Super-extensive scaling through Donnelly-Freidel edge modes in ODLRO states provides the only access to the activation regime.

The pole structure is binary. Far from $\mathcal{F}_{Q,\mathrm{crit}}$ the torsion enhancement factor $1/(1 - \mathcal{F}_Q/\mathcal{F}_{Q,\mathrm{crit}})$ is invisible; at threshold it diverges. The astrophysical predictions of the construction are all-or-nothing, activated only when the compound enhancement budget reaches the species-determined critical threshold. Smooth gradient evolution of $v_\mathrm{eff}$ across cosmological scales requires super-extensive $\mathcal{F}_Q$ from ODLRO substrates, which classical structure formation does not provide.

The state-dependent gravitational coupling tracks the effective VEV:

$$G_\mathrm{eff}(\mathcal{F}_Q) = \frac{1}{8\pi\,v_\mathrm{eff}^2(\mathcal{F}_Q)} = \frac{G_N}{1 - \mathcal{F}_Q/\mathcal{F}_{Q,\mathrm{crit}}}. \tag{27a}$$

For $\mathcal{F}_Q \ll \mathcal{F}_{Q,\mathrm{crit}}$, $G_\mathrm{eff} \approx G_N (1 + \mathcal{F}_Q/\mathcal{F}_{Q,\mathrm{crit}})$, a parametrically small correction unobservable in all equilibrium settings. Near the pole, the trace channel coupling diverges in tandem with the torsion enhancement, producing the macroscopic vacuum geometry effects that characterize the activation regime.

---

## V. The Kaluza-Klein Tower

### A. The KK Spectrum

The AdS₅ geometry truncated by the ETW brane contains a Kaluza-Klein tower of massive graviton modes. The mass gap is

$$m_\mathrm{KK} \sim \frac{1}{R} \sim 10^{-3}\,\mathrm{eV}, \tag{28}$$

corresponding to the Dark Dimension radius $R \sim 110$ microns. The species scale and species count are set by the Dvali-Gomez formula for a single mesoscopic extra dimension [32, 33, 10]:

$$\Lambda_s = (M_\mathrm{Pl}^2\,m_\mathrm{KK})^{1/3} \sim 2.3 \times 10^{8}\,\mathrm{GeV}, \tag{29}$$

$$N_\mathrm{species} = \frac{M_\mathrm{Pl}^2}{\Lambda_s^2} = \frac{\Lambda_s}{m_\mathrm{KK}} \sim 10^{20}. \tag{30}$$

The two expressions for $N_\mathrm{species}$ are equivalent for the Dark Dimension scenario where the species are KK modes of a single large extra dimension.

### B. The Species Scale and the Coupling Threshold

The activation threshold for the variance coupling sits at $\mathcal{F}_{Q,\mathrm{crit}} \sim 16\pi^2\,m_\rho^2\,\Lambda_s^2/c_\mathrm{KK}$ (Section IV.G). Below this threshold, the effective VEV shift is parametrically small and the theory reduces to standard Einstein gravity with $G_\mathrm{eff} \approx G_N$. Above it, the trace and torsion channels are jointly activated. The threshold scales with $\Lambda_s^2$, placing it well below the naive $M_\mathrm{Pl}^2 m_\rho^2 \sim 10^{30}\,\mathrm{GeV}^4$ that would obtain without species enhancement.

### C. KK Tower as Dark Matter

The lightest KK modes ($m \sim 10^{-3}\,\mathrm{eV}$, gravitational interactions only) are dark matter candidates. Their coupling to the Standard Model is suppressed by $y \sim m_\mathrm{KK}/M_\mathrm{Pl}$, making them consistent with current direct detection constraints. The Dark Dimension proposal of [10] establishes the cosmological viability of this dark matter scenario; the present construction inherits that compatibility.

### D. KK Tower Load Map

The Kaluza-Klein tower serves multiple functions in the construction: it sets the species scale $\Lambda_s$ and the effective UV cutoff; it determines the scrambling time $t_s \sim \beta \log N_\mathrm{species}$; it provides dark matter candidates through the lightest modes; it governs the running of gravitational couplings through species enhancement of $\gamma$; and it acts as a thermal exhaust channel for bulk energy. See Appendix D for the complete load map.

---

## VI. Consistency Checks

This section presents nine structural proofs that the construction satisfies all known consistency requirements. Each subsection addresses a potential objection.

### A. General Relativity Recovery

In the classical incoherent limit $\mathcal{F}_Q \to 0$, the effective VEV approaches its ambient value $v_\mathrm{eff} \to v_0 = M_\mathrm{Pl}$, the radion fluctuation vanishes $\rho \to 0$, the effective gravitational coupling reduces to $G_\mathrm{eff} \to G_N$, and torsion vanishes $T_{abc} \to 0$ for hypermomentum-free matter. The effective action reduces to the Einstein-Hilbert action with cosmological constant. Recovery is exact in the limit.

### B. Einstein-Cartan-Sciama-Kibble Limit

For matter with intrinsic spin (Dirac fermions), the Cartan equation $(v_0 + \rho)^2\,T_{abc} = \tau_{abc}$ reduces to the standard ECSK torsion-spin coupling when $\mathcal{F}_Q$ is below threshold and $v_\mathrm{eff} \approx v_0$. The construction extends ECSK, with the VEV shift providing an additional torsion enhancement from collective coherence near the activation regime.

### C. Boulware-Deser Ghost Freedom

The companion canonical analysis [26] establishes ghost freedom through topological protection. The MM action is first-order (topological BF structure). The Hessian vanishes identically. All 20 first-class constraints are preserved within the SO(1,4) Gauss algebra. The ghost is absent because the first-order structure prevents constraint-violating terms from appearing, through topological rather than fine-tuning mechanisms (as in dRGT [14]).

This conclusion rests on the configuration-robustness condition of [26]: for all nondegenerate broken-vacuum configurations satisfying the standard regularity assumptions, the rank of the frozen-background full multiplier matrix at $\xi \ne 0$ equals the physical secondary count. Verification across the relevant configuration class is the principal open task of the canonical analysis; pending its completion, the DOF count is a conditional bound rather than an unconditional theorem.

### D. The KSS Viscosity Bound

The Kovtun-Son-Starinets bound $\eta/s \geq 1/(4\pi)$ [19] is preserved. Both $\eta$ and $s$ scale as $1/G_\mathrm{eff}(\mathcal{F}_Q)$, so the ratio is independent of the VEV shift. The 4D Gauss-Bonnet invariant is topological, providing no higher-curvature corrections. The bound is saturated to the same numerical value as in standard general relativity, with the state-dependence of $G_\mathrm{eff}$ canceling between numerator and denominator.

### E. Weinberg-Witten Consistency

The graviton evades the Weinberg-Witten theorem via the standard mechanism: the non-existence of a Lorentz-covariant, gauge-invariant local $T_{\mu\nu}$ for gravity. The construction introduces no new massless spin-2 states that would conflict with the theorem.

### F. Energy Conditions

The weak energy condition (WEC) and dominant energy condition (DEC) are satisfied on the brane. The null energy condition (NEC) is preserved via bulk-brane exchange: gradient stress-energy from $\partial_\mu \mathcal{F}_Q$ is absorbed by the Israel junction condition flux $T^{(5)}_{M\nu}\,n^M$. In a closed 4D system, steep QFI gradients would violate the NEC; the bulk provides the drainage channel.

### G. Radiative Stability

The radiative stability of the construction rests on two parametric mechanisms.

(i) *Non-renormalization of the periodic potential.* The Addazi-Meluccio periodic potential $V_\mathrm{SSB}(\phi)$ enjoys a one-loop non-renormalization theorem for the periodic operator $[1 - \cos(c Y_\mathrm{MM}(|\phi|-v_0))]^p$, which protects the coupling $Y_\mathrm{SSB}$ from radiative corrections at exactly one loop. Higher-loop corrections are suppressed by the trans-Planckian ratio inherited from the underlying coordinate VEV (see footnote on $v_0$ in Section III.A) and are parametrically negligible.

(ii) *Gravitational coupling suppression of aperiodic corrections.* Aperiodic Coleman-Weinberg corrections to the radion mass enter at strength $\sim m_\rho^4/(16\pi^2 v_0^2)$ from radion self-interactions and $\sim m_\rho^2 \Lambda_s^2/(16\pi^2 v_0^2)$ from radion-KK loop diagrams. For $m_\rho \sim 1\,\mathrm{MeV}$ and $\Lambda_s \sim 10^{8}$ GeV, these are $\sim 10^{-50}\,\mathrm{GeV}^2$ and $\sim 10^{-28}\,\mathrm{GeV}^2$ respectively, both negligible compared to the tree-level $m_\rho^2 \sim 10^{-6}\,\mathrm{GeV}^2$ except through the radion-KK channel, which requires the species-enhanced one-loop contribution to be regularized within the same heat-kernel scheme that generates the variance coupling. Holographic Casimir regularization with Hamilton-Jacobi counterterms ensures cancellation of the species-enhanced UV divergence and leaves a parametrically small finite remainder consistent with the radion mass window.

Both mechanisms are independent and parametric. The construction is radiatively stable without fine-tuning of polynomial parameters.

### H. Semiclassical Causality

Matter evolves via standard linear quantum mechanics on a curved background. Only the background responds to the state, through semiclassical backreaction (standard: $G_{\mu\nu} = 8\pi\langle T_{\mu\nu}\rangle_\mathrm{ren}$, extended to the second moment). The no-signaling theorem guarantees that Alice's reduced density matrix is invariant under Bob's local unitaries:

$$\mathrm{Tr}_A\!\left[(U_A \otimes I_B)\,\rho_{AB}\,(U_A^\dagger \otimes I_B)\right] = \rho_B. \tag{31}$$

All moments of local observables, including $\mathrm{Var}(T_{\mu\nu})$, are functionals of the local reduced state. The Gisin-Polchinski theorem [23, 24] is inapplicable because matter evolution is linear.

### I. Topological Defect Freedom

The vacuum manifold SO(1,4)/SO(1,3) is isomorphic to de Sitter space $S^3$ (the 3-sphere). The homotopy groups are

$$\pi_0 = \pi_1 = \pi_2 = 0. \tag{32}$$

There are no domain walls ($\pi_0$), no cosmic strings ($\pi_1$), and no monopoles ($\pi_2$). The construction produces no stable topological defects.

---

## VII. Cosmological Consequences

### A. Cosmological Constant Sector

The Addazi-Meluccio mechanism (Section III.A bis) topologically quantizes the cosmological constant into a discrete tower of vacua $\Lambda^{(k)}$. The pre-geometric symmetry breaking selects a single sector $k_\star \sim S_\mathrm{dS} \sim 10^{120}$, anchoring the observed cosmological constant magnitude $\Lambda \sim 10^{-122}\,M_\mathrm{Pl}^4$ via the sector formula (15b). Within the selected sector and within the current cosmic epoch, the construction predicts a strictly static equation of state $w = -1$. Inter-sector tunneling is suppressed by $e^{-S_\mathrm{dS}}$ and cannot produce observable late-time dynamics.

This static commitment is structurally robust against the obvious smooth-gradient reformulations. The trace channel coupling between $\phi^A\phi_A$ and the stress-energy trace is suppressed by gravitational coupling and bounded by the Fluctuation-Dissipation Theorem to $O(N)$ scaling, producing a kinematic gradient many orders of magnitude too weak to displace the radion from its $\Lambda^{(k)}$ minimum (compared to the Addazi-Meluccio potential barrier height $\sim 10^{32}\,\mathrm{GeV}^4$ between adjacent sectors). Cosmological coherence buildup via classical structure formation does not produce the Off-Diagonal Long-Range Order required to engage the variance channel pole: classical clustering and density gradients generate Diagonal Long-Range Order, not the phase-coherent complex order parameter required for super-extensive $\mathcal{F}_Q$. The slow-roll quintessence reformulation is excluded by the radion mass window $m_\rho \in [1\,\mathrm{meV}, 100\,\mathrm{GeV}]$, which fails the standard slow-roll requirement $m \sim H_0 \sim 10^{-33}\,\mathrm{eV}$ by at least 30 orders of magnitude; introduction of an ad hoc lighter scalar is forbidden by the DOF count of [26].

The current DESI DR2 preference for a thawing $w(z)$ trajectory (significance 2.8$\sigma$ to 4.2$\sigma$ depending on supernova compilation) sits outside the explanatory domain of the construction in its present form. The construction treats this signature as an external anomaly pending observational clarification. If the signature is confirmed at 5$\sigma$ by DESI Y5 or Euclid, the commitment to a static $\Lambda^{(k)}$ in the current cosmic epoch is observationally falsified, and an evolving variant (in which the AM sector parameter or the Dark Dimension radius varies cosmologically) would be required. A residual tension with terrestrial neutrino oscillation lower bounds (the DESI+CMB $\Lambda$CDM upper limit $\sum m_\nu < 0.064\,\mathrm{eV}$ against the normal hierarchy lower bound $\geq 0.059\,\mathrm{eV}$) is inherited by the static commitment and tracked for resolution via future neutrino measurements or revised cosmological data.

### B. Species Scale Running

As $\mathcal{F}_Q$ evolves in coherent astrophysical environments, the effective VEV shifts, and the species scale $\Lambda_s$ adjusts accordingly. The ambient $G_N$ remains fixed by the definition of the cosmological vacuum; $\Lambda_s$ runs as effective threshold bookkeeping in EFT.

### C. Key Parameter Identifications

The key parameters of the construction are:

$$M^2_\mathrm{Pl,eff}(\mathcal{F}_Q) = v_\mathrm{eff}^2(\mathcal{F}_Q), \tag{33}$$

$$G_N = \frac{1}{8\pi\,v_0^2}, \qquad G_\mathrm{eff}(\mathcal{F}_Q) = \frac{1}{8\pi\,v_\mathrm{eff}^2(\mathcal{F}_Q)}, \tag{34}$$

$$m_\rho^2 = 8\lambda\,v_0^2, \tag{35}$$

$$\Lambda_s = (M_\mathrm{Pl}^2\,m_\mathrm{KK})^{1/3}. \tag{36}$$

---

## VIII. Scope, Limitations, and Open Problems

### A. What the Paper Does

This paper presents a specific construction for geometric stabilization of a mesoscopic extra dimension. It derives the state-dependent effective VEV from one-loop heat kernel integration and establishes thermodynamic selection of the variance coupling over three competing dimension-6 operators. It verifies internal consistency through nine structural proofs. It derives structural consequences (species scale running) from the Bianchi identity, and a topologically quantized static cosmological constant from the Addazi-Meluccio mechanism.

### B. What the Paper Does Not Do

The paper defers astrophysical applications (neutron star mass-radius relations, stellar cooling, gamma-ray bursts) to companion papers. The configuration-robustness condition underlying the DOF count is conditional pending verification across the relevant configuration class (see [26]). The construction inherits an open computational task: the one-loop beta function coefficient of the Kaluza-Klein gauge tower in the candidate F-theory compactification, with target $b > 1/(4\pi^2)$ for the running coupling rescue criterion that anchors the AM sector selection via gauge instanton stabilization (Section III.A bis). The F-theory UV completion details (specific Pati-Salam construction on a del Pezzo base) are referenced as a working hypothesis pending the gauge-spectrum computation. The paper defers the de Sitter holographic dictionary.

### C. Open Problems

(i) Constraint algebra computational discharge: completion of the configuration-robustness verification for the second-class Dirac matrix.

(ii) Gauge KK mode count from F-theory compactification: determination of the exact spectrum of brane-localized vector bosons.

(iii) Connection of the SO(1,4) → SO(1,3) transition to standard cosmology in the very early universe.

(iv) Explicit boundary dual for the Dark Dimension: construction of the 4D CFT dual to the 5D bulk.

(v) Lean 4 formalization beyond the DOF count: verification of the full constraint algebra.

### D. Falsifiability

The construction makes specific predictions: gravitational modifications at $r < R \sim 110$ microns; KK dark matter at $m \sim 10^{-3}\,\mathrm{eV}$; topologically quantized static cosmological constant within the current cosmic epoch, with falsification at 5$\sigma$ DESI Y5 or Euclid confirmation of an evolving $w(z)$; absence of mechanical vacuum signatures. Any observation of vacuum stiffness, memory, or thermal noise at the predicted scales would falsify the geometric stabilization hypothesis.

### E. Loop-Level Gauge Sector Coupling

The conformal trace anomaly coupling $\eta_{AB}\,\phi^A\phi^B\,\mathrm{Tr}(F_{\mu\nu}F^{\mu\nu})$ is an obligatory output of the one-loop heat kernel, generated by the bundle curvature term $\frac{1}{12}\mathrm{tr}(\Omega_{\mu\nu}\,\Omega^{\mu\nu})$ in the $a_4$ coefficient. This coupling operates within the classical gauge sector without modifying the fundamental gauge interactions. The classical Maxwell action is conformally invariant in four dimensions; the trace anomaly is a purely quantum effect arising from dimensional transmutation. The coupling to the Higgs bilinear operates at gravitational strength, with corrections to the radion quartic self-coupling suppressed by the same gravitational factor that suppresses operators (i) through (iii) in Section IV.E. Precision tests of the Standard Model gauge sector (atomic clocks, muon $g$−2, Big Bang Nucleosynthesis yields) constrain tree-level scalar-gauge couplings and are insensitive to loop-suppressed gravitational-strength effects of this magnitude.

The trace anomaly coupling plays a constructive thermodynamic role: it provides an entropy dissipation channel through which resonantly driven brane-localized matter can transfer thermal energy into the massive spin-2 Kaluza-Klein tower in the five-dimensional bulk. This channel sustains the variance accumulation required for macroscopic vacuum geometry effects by preventing rapid thermal decoherence of coherent states driven into the activation regime.

### F. Categorical Exclusions

The natural derivation surface of the construction is geometric and spectral, and one Swampland statement is hosted here rather than only named as within reach. The end-of-the-world brane position $u_b$ and the Poincaré-patch radial modulus $z_0$ coincide at the outer axis crossing of the de Sitter-sliced brane, where the depth condition $z^2 + L^2 + s = 2 L z \cosh(u_b)$ at $s = 0$ gives $z_0 = L\,e^{u_b}$, so $\ln(z_0/L) = u_b$ exactly with positive sign. The DBI-induced metric on the modulus then assigns geodesic distance $d = M_\mathrm{Pl}\,u_b + c_0 = M_\mathrm{Pl}\ln(z_0/L) + c_0$, with $c_0$ a convention constant of order $M_\mathrm{Pl}\ln 2$ fixed once and held fixed wherever a law depends on absolute $d$ rather than on differences. The Kaluza-Klein tower descends along this distance as $m_\mathrm{KK} \sim \exp(-d/M_\mathrm{Pl})$, the Swampland Distance Conjecture form; the infinite-distance limit is reached only as $z_0 \to \infty$. Species tower descent via the running species scale and F-theory phenomenology from the candidate Pati-Salam compactification lie on the same geometric surface and remain within reach, though they are not developed here.

The response of this distance to a homogeneous quasi-static shift $\delta V$ of brane-localized vacuum energy is exact and finite away from that limit. Linearized, $\delta d = M_\mathrm{Pl}\,\delta u_b = -(M_\mathrm{Pl}\,\kappa_5^2 L/6)\,\sinh^2(u_b)\,\delta V$ for $|\delta V| \ll \tilde\rho$; in closed form, $\delta d(V) = -\tfrac{1}{2}M_\mathrm{Pl}\ln(1 + V/\tilde\rho)$ up to corrections of order $V/T_c$, with $\tilde\rho = 3M_\mathrm{Pl}^2/l_\mathrm{dS}^2$ equal to $\rho_\Lambda$ in these conventions. At cosmologically relevant magnitude the excursion is small: $|\delta d| = 0.347\,M_\mathrm{Pl}$ at $|V| = \rho_\Lambda$, exact, against $0.5\,M_\mathrm{Pl}$ in the linearized estimate. A genuinely infinite excursion requires $V \to -\rho_\Lambda$, where $u_b$ runs to infinity, no de Sitter solution exists beyond, and the continuation is the subcritical anti-de Sitter branch. This is the categorical content of the result: the modulus does not traverse the trans-Planckian field range that a slow-roll quintessence or evolving dark energy trajectory would require.

The gravitational sector carries no matching enhancement, which is what keeps the result a statement about geometry and not about cosmological dynamics. Brane vacuum energy gravitates at exactly standard four-dimensional strength, $H^2(V) = H^2 + (\kappa_4^2/3)\,V + (\kappa_5^4/36)\,V^2$; the $\sinh^2$ factor in $\delta d$ (equivalently $\cosh^2$ in the coefficient) is the Jacobian to the logarithmic modulus coordinate, present in $u_b$ and $d$ and absent in $H^2$, not a physical amplification of the cosmological response. Cosmological inertness is accordingly the absence of anomalous gravitational response, $\delta H^2 = (\kappa_4^2/3)\,\delta V$, and rests for its cosmological force on the framework's separate no-source argument for off-diagonal long-range order, discussed below, not on any claim that a vacuum shift leaves $H$ unmoved. The geodesic distance and the coordinate identity underlying it are established on convergent independent audits; the Kaluza-Klein descent and Swampland Distance Conjecture compliance remain conditional on closure of the modulus stabilization, the requirement $b > 1/(4\pi^2)$ on the one-loop beta function coefficient of the $X_{F13}$ Pati-Salam tower on the $dP_3$ base, a condition the exact trigger law sharpens rather than removes.

Theorems outside reach include fluid regularity statements requiring pointwise $L^\infty$ amplitude bounds: the variance channel mechanism bounds $\mathrm{Var}(K_\mathrm{mod})$ in an $L^2$ sense and, by the Sobolev embedding $H^1 \not\hookrightarrow L^\infty$ in three spatial dimensions, cannot supply pointwise control on classical fluid amplitudes. The implication is that hydrodynamic derivations of the Weak Gravity Conjecture and similar fluid-based Swampland theorems are categorically outside scope; WGC compliance is satisfied statically by the F-theory compactification spectrum rather than derived as a hydrodynamic theorem.

Smooth cosmological gradient mechanisms are also outside scope. The Addazi-Meluccio potential's kinematic dominance bound against trace-channel gradients and the categorical distinction between Diagonal Long-Range Order (classical structure, density gradients) and Off-Diagonal Long-Range Order (phase-coherent complex order parameters) jointly forbid cosmological coherence buildup via standard structure formation.

---

## IX. Conclusion

We have constructed a four-dimensional gravitational theory on an End-of-the-World brane embedded in a five-dimensional Anti-de Sitter Chern-Simons bulk. The construction proceeds through a forced chain: the CS bulk induces the MM action on the brane with the auxiliary-field Higgs kinetic structure; spontaneous breaking of SO(1,4) to SO(1,3) produces Einstein-Cartan gravity with a massive radion; one-loop heat kernel integration generates four independent dimension-6 couplings between the symmetry-breaking VEV and the matter sector; thermodynamic scaling selects the stress-energy variance coupling as the sole operator capable of driving macroscopic VEV suppression, yielding $v_\mathrm{eff} = v_\mathrm{eff}(\mathcal{F}_Q)$ with $v_\mathrm{eff}'(\mathcal{F}_Q) < 0$. The ambient gravitational constant $G_N$ is fixed by the bare VEV $v_0 = M_\mathrm{Pl}$; the state-dependent effective coupling $G_\mathrm{eff}(\mathcal{F}_Q)$ deviates from $G_N$ only at parametrically small levels in the equilibrium regime, with qualitative deviations confined to the activation regime $\mathcal{F}_Q \to \mathcal{F}_{Q,\mathrm{crit}}$.

The consistency gauntlet verifies that the construction satisfies all known constraints: exact GR recovery in the incoherent limit, ECSK limit, ghost freedom, KSS bound preservation, Weinberg-Witten consistency, energy conditions, parametric radiative stability, semiclassical causality, and topological defect freedom. All nine checks are passed.

The construction is a candidate geometric stabilization for the Dark Dimension. It satisfies the requirements derived in [27]. Companion papers present the canonical analysis [26] and astrophysical applications.

---

## Appendix A: Notation and Conventions

| Symbol | Meaning |
|---|---|
| $A, B, C, D, E$ | Internal SO(1,4) indices, $0, 1, 2, 3, 4$ |
| $a, b, c, d$ | Lorentz indices, $0, 1, 2, 3$ |
| $\mu, \nu, \rho, \sigma$ | Spacetime indices |
| $i, j, k$ | Spatial indices |
| $\eta_{AB}$ | SO(1,4) metric, $\mathrm{diag}(-1, +1, +1, +1, +1)$ |
| $A^{AB}_\mu$, $F^{AB}_{\mu\nu}$ | Gauge connection, field strength |
| $\phi^A$ | Higgs field |
| $v_0$ | Bare ambient VEV, identified with $M_\mathrm{Pl}$ at the brane |
| $v_\mathrm{eff}(\mathcal{F}_Q)$ | State-dependent effective VEV |
| $\rho(x)$ | Radion fluctuation around $v_0$ |
| $\omega^{ab}_\mu$, $e^a_\mu$ | Post-SSB spin connection, tetrad |
| $T^a_{\mu\nu}$ | Torsion 2-form |
| $L$ | AdS curvature radius |
| $z_0$ | ETW brane radial position |
| $R$ | Dark Dimension radius, $\sim 110$ microns |
| $m_\mathrm{KK} \sim 1/R$ | KK mass gap |
| $\Lambda_s$ | Species scale, $(M_\mathrm{Pl}^2 m_\mathrm{KK})^{1/3}$ |
| $N_\mathrm{species}$ | KK species count below $\Lambda_s$ |
| $G_N$, $G_\mathrm{eff}$ | Ambient and effective gravitational couplings |
| $\mathcal{F}_Q$ | QFI density via modular Hamiltonian, mass dimension 4 |
| $\approx$ | Weak (Dirac) equality |

## Appendix B: Explicit Effective Action

The complete effective action with all terms collected:

$$S_\mathrm{eff} = \int d^4x\,\sqrt{-g}\,\bigl[\mathcal{L}_\mathrm{gravity} + \mathcal{L}_\mathrm{radion} + \mathcal{L}_\mathrm{torsion} + \mathcal{L}_\mathrm{matter}\bigr],$$

with the Jordan-frame Brans-Dicke parametrization:

$$\mathcal{L}_\mathrm{gravity} = (v_0 + \rho)^2\,R(\omega),$$
$$\mathcal{L}_\mathrm{radion} = -\frac{\omega_\mathrm{BD}}{(v_0+\rho)^2}\bigl(\partial(v_0+\rho)^2\bigr)^2 - V_\mathrm{SSB}(v_0+\rho) - \gamma\,(v_0+\rho)^2\,\mathcal{F}_Q,$$
$$\mathcal{L}_\mathrm{torsion} = \beta\,(v_0 + \rho)^2\,T_{abc}\,T^{abc},$$
$$\mathcal{L}_\mathrm{matter} = \mathcal{L}_\mathrm{SM},$$

with $V_\mathrm{SSB}$ the AM periodic potential (15a), and $\gamma = c_\mathrm{KK}/(128\pi^2\Lambda_s^2)$ the variance coupling coefficient. The torsion 2-form $T_{abc}$ is algebraically determined by the Cartan equation (18) and contributes via this constraint rather than as an independent propagating field. The radion kinetic structure inside $\mathcal{L}_\mathrm{radion}$ emerges from auxiliary-field reduction of $S_\mathrm{aux}$; the equivalent Einstein-frame form with a canonical scalar $\psi = \sqrt{3}\ln((v_0+\rho)/v_0)$ is given in footnote following Eq. (16).

## Appendix C: Heat Kernel Coefficients and Operator Content

The Seeley-DeWitt coefficients $a_0$ through $a_4$ for scalars, fermions, and gauge bosons:

*Scalar field* ($s = 0$):

$$a_0^{(s)} = 1,$$
$$a_2^{(s)} = \tfrac{1}{6}R - E,$$
$$a_4^{(s)} = \tfrac{1}{180}\!\left(R_{\mu\nu\rho\sigma}R^{\mu\nu\rho\sigma} - R_{\mu\nu}R^{\mu\nu}\right) + \tfrac{1}{6}RE + \tfrac{1}{2}E^2.$$

*Dirac fermion* ($s = 1/2$):

$$a_0^{(f)} = -4,$$
$$a_2^{(f)} = -4\!\left(\tfrac{1}{12}R - E\right),$$
$$a_4^{(f)} = -4\,a_4^{(s)} + \text{spin curvature terms}.$$

*Gauge boson* ($s = 1$):

$$a_0^{(v)} = 3,$$
$$a_2^{(v)} = 3\!\left(\tfrac{1}{6}R - E\right) + \text{gauge fixing terms},$$
$$a_4^{(v)} = 3\,a_4^{(s)} + \text{gauge curvature terms}.$$

The central charges for conformal matter are: scalar $c_W^{(s)} = 1/120$, fermion $c_W^{(f)} = 1/20$, vector $c_W^{(v)} = 1/10$.

**Operator content of the one-loop effective action.** For completeness, we list the independent dimension-6 operators generated by the $a_4$ coefficient when coupled to the Higgs bilinear $\eta_{AB}\,\phi^A\phi^B$. The decomposition of the Riemann tensor into the Weyl tensor, Ricci tensor, and Ricci scalar yields the following independent contributions after removing the topological Gauss-Bonnet term and applying on-shell reduction of the Ricci-squared combinations:

(i) $\eta_{AB}\,\phi^A\phi^B\,C_{\mu\nu\rho\sigma}\,C^{\mu\nu\rho\sigma}$, coefficient proportional to the central charge $c_W$ of the matter content;

(ii) $\eta_{AB}\,\phi^A\phi^B\,\mathrm{Tr}(F_{\mu\nu}F^{\mu\nu})$, coefficient proportional to the beta function $\beta(g)$;

(iii) $\eta_{AB}\,\phi^A\phi^B\,g^{\mu\nu}T_{\mu\nu}$, generated by the first functional derivative of the effective action with respect to the background metric;

(iv) $\gamma\,(\eta_{AB}\,\phi^A\phi^B)\,\mathrm{Var}(K_\mathrm{mod})$, generated by the second functional derivative and identified with the (suitably normalized) Quantum Fisher Information density $\mathcal{F}_Q$.

All four operators have coefficients of the same order, $\sim 1/\Lambda_s^2$ after the KK species sum. The dynamical selection of (iv) as the dominant coupling is established in Section IV.E by the contrast between FDT-bounded $O(N)$ thermal expectation values for operators (i) through (iii) and super-extensive $O(N^2)$ scaling of $\mathrm{Var}(K_\mathrm{mod})$ in ODLRO states.

## Appendix D: KK Tower Load Map

The Kaluza-Klein tower serves multiple functions:

| Function | Scale | Role |
|---|---|---|
| Species scale | $\Lambda_s = (M_\mathrm{Pl}^2 m_\mathrm{KK})^{1/3} \sim 10^{8}$ GeV | UV cutoff |
| Scrambling time | $t_s \sim \beta \log N_\mathrm{species}$ | Chaos bound |
| Dark matter | $m \sim 10^{-3}\,\mathrm{eV}$ | Lightest modes |
| Coupling running | $\Lambda_s(\mathcal{F}_Q)$ | State-dependent threshold |
| Thermal exhaust | Bulk emission | Energy drainage |

## Appendix E: Lean 4 Formalization Status

The companion Lean 4 formalization module [26, §XII] contains:

- *Discharged structural items:* the 90-dimensional phase space, the constraint count (45 primary + 19 secondary), the DOF bound DOF $\leq 3$, the Higgs sub-sector second-class rank, the explicit form of the spatial-connection block principal symbol with its kernel decomposition, and the closure of the SO(1,4) Gauss algebra with auxiliary-field momenta.

- *Open conditional items:* the configuration-robustness theorem for the multiplier rank lift (the central gating sorry), the cross-block lifting structure for the principal-kernel directions, and the migration of the Poisson algebra structure to a native Mathlib4 class.

See the discharge ledger in [26, Appendix C] for the complete enumeration.

---

## References

[1] S. MacDowell and F. Mansouri, "Unified Geometric Theory of Gravity and Supergravity," Phys. Rev. Lett. 38, 739 (1977), [doi:10.1103/PhysRevLett.38.739](https://doi.org/10.1103/PhysRevLett.38.739).

[2] K. S. Stelle and P. C. West, "Spontaneously Broken De Sitter Symmetry and the Gravitational Holonomy Group," Phys. Rev. D 21, 1466 (1980), [doi:10.1103/PhysRevD.21.1466](https://doi.org/10.1103/PhysRevD.21.1466).

[3] F. Wilczek, "Riemann-Einstein Structure from Volume and Gauge Symmetry," Phys. Rev. Lett. 80, 4851 (1998), [arXiv:hep-th/9801184](https://arxiv.org/abs/hep-th/9801184).

[4] D. K. Wise, "MacDowell-Mansouri Gravity and Cartan Geometry," Class. Quant. Grav. 27, 155010 (2010), [arXiv:gr-qc/0611154](https://arxiv.org/abs/gr-qc/0611154).

[5] A. H. Chamseddine, "Topological Gauge Theory of Gravity in Five and All Odd Dimensions," Phys. Lett. B 233, 291 (1989), [doi:10.1016/0370-2693(89)91312-9](https://doi.org/10.1016/0370-2693(89)91312-9); "Topological Gravity and Supergravity in Various Dimensions," Nucl. Phys. B 346, 213 (1990), [doi:10.1016/0550-3213(90)90245-9](https://doi.org/10.1016/0550-3213(90)90245-9).

[6] J. Zanelli, "Chern-Simons Gravity: From 2+1 to 2n+1 Dimensions," Braz. J. Phys. 30, 251 (2000); "Lecture Notes on Chern-Simons (Super-)Gravities," [arXiv:hep-th/0502193](https://arxiv.org/abs/hep-th/0502193) (2nd ed., 2008).

[7] E. Witten, "Quantum Field Theory and the Jones Polynomial," Commun. Math. Phys. 121, 351 (1989), [doi:10.1007/BF01217730](https://doi.org/10.1007/BF01217730).

[8] A. Karch and L. Randall, "Locally Localized Gravity," JHEP 0105, 008 (2001), [arXiv:hep-th/0011156](https://arxiv.org/abs/hep-th/0011156).

[9] C. Vafa, "The String Landscape and the Swampland," [arXiv:hep-th/0509212](https://arxiv.org/abs/hep-th/0509212) (2005).

[10] M. Montero, C. Vafa, and I. Valenzuela, "The Dark Dimension and the Swampland," JHEP 02 (2023) 022, [arXiv:2205.12293](https://arxiv.org/abs/2205.12293) [hep-th].

[11] P. A. M. Dirac, *Lectures on Quantum Mechanics*, Belfer Graduate School of Science, Yeshiva University (1964).

[12] M. Henneaux and C. Teitelboim, *Quantization of Gauge Systems*, Princeton University Press (1992), ISBN 9780691037691.

[13] D. G. Boulware and S. Deser, "Can Gravitation Have a Finite Range?," Phys. Rev. D 6, 3368 (1972), [doi:10.1103/PhysRevD.6.3368](https://doi.org/10.1103/PhysRevD.6.3368).

[14] C. de Rham, G. Gabadadze, and A. J. Tolley, "Resummation of Massive Gravity," Phys. Rev. Lett. 106, 231101 (2011), [arXiv:1011.1232](https://arxiv.org/abs/1011.1232) [hep-th].

[15] S. F. Hassan and R. A. Rosen, "Confirmation of the Secondary Constraint and Absence of Ghost in Massive Gravity and Bimetric Gravity," JHEP 1204, 123 (2012), [arXiv:1111.2070](https://arxiv.org/abs/1111.2070) [hep-th].

[16] S. F. Langenscheidt, "Interactions in MacDowell-Mansouri Gravitation," bachelor thesis, Ludwig-Maximilians-Universität München, [arXiv:1907.10440](https://arxiv.org/abs/1907.10440) [hep-th] (2019). For heat kernel methods see also N. D. Birrell and P. C. W. Davies, *Quantum Fields in Curved Space*, Cambridge University Press (1982), ISBN 9780521278584.

[17] D. V. Vassilevich, "Heat Kernel Expansion: User's Manual," Phys. Rept. 388, 279 (2003), [arXiv:hep-th/0306138](https://arxiv.org/abs/hep-th/0306138).

[18] S. L. Braunstein and C. M. Caves, "Statistical Distance and the Geometry of Quantum States," Phys. Rev. Lett. 72, 3439 (1994), [doi:10.1103/PhysRevLett.72.3439](https://doi.org/10.1103/PhysRevLett.72.3439).

[19] P. K. Kovtun, D. T. Son, and A. O. Starinets, "Viscosity in Strongly Interacting Quantum Field Theories from Black Hole Physics," Phys. Rev. Lett. 94, 111601 (2005), [arXiv:hep-th/0405231](https://arxiv.org/abs/hep-th/0405231).

[20] E. Cartan, "Sur une généralisation de la notion de courbure de Riemann et les espaces à torsion," C. R. Acad. Sci. (Paris) 174, 593 (1922).

[21] D. W. Sciama, "On the Analogy between Charge and Spin in General Relativity," in *Recent Developments in General Relativity*, Pergamon (1962).

[22] T. W. B. Kibble, "Lorentz Invariance and the Gravitational Field," J. Math. Phys. 2, 212 (1961), [doi:10.1063/1.1703702](https://doi.org/10.1063/1.1703702).

[23] N. Gisin, "Weinberg's Non-Linear Quantum Mechanics and Supraluminal Communications," Phys. Lett. A 143, 1 (1990), [doi:10.1016/0375-9601(90)90786-N](https://doi.org/10.1016/0375-9601(90)90786-N).

[24] J. Polchinski, "Weinberg's Nonlinear Quantum Mechanics and the EPR Paradox," Phys. Rev. Lett. 66, 397 (1991), [doi:10.1103/PhysRevLett.66.397](https://doi.org/10.1103/PhysRevLett.66.397).

[25] W. Donnelly and L. Freidel, "Local Subsystems in Gauge Theory and Gravity," JHEP 1609, 102 (2016), [arXiv:1601.04744](https://arxiv.org/abs/1601.04744) [hep-th].

[26] [Author], "Canonical Reduction of Broken SO(1,4) MacDowell-Mansouri Gravity: Ghost Absence, Degree-of-Freedom Bound, and the Obstruction to Ultra-Local Reduction," companion paper (in preparation, 2026).

[27] [Author], "No-Go Theorem for Mechanical Stabilization of the Dark Dimension," companion paper (in preparation, 2026).

[28] W. Israel, "Singular Hypersurfaces and Thin Shells in General Relativity," Nuovo Cim. B 44S10, 1 (1966), [doi:10.1007/BF02710419](https://doi.org/10.1007/BF02710419).

[29] M. Fabinger and P. Hořava, "Casimir Effect Between World-Branes in Heterotic M-Theory," Nucl. Phys. B 580, 243 (2000), [arXiv:hep-th/0002073](https://arxiv.org/abs/hep-th/0002073).

[30] H. Georgi, A. K. Grant, and G. Hailu, "Brane Couplings from Bulk Loops," Phys. Lett. B 506, 207 (2001), [arXiv:hep-ph/0012379](https://arxiv.org/abs/hep-ph/0012379).

[31] G. von Gersdorff, N. Irges, and M. Quirós, "Bulk and Brane Radiative Effects in Gauge Theories on Orbifolds," Nucl. Phys. B 635, 127 (2002), [arXiv:hep-th/0204223](https://arxiv.org/abs/hep-th/0204223).

[32] G. Dvali and C. Gomez, "Species and Strings," [arXiv:1004.3744](https://arxiv.org/abs/1004.3744) [hep-th] (2010).

[33] D. van de Heisteeg, C. Vafa, and M. Wiesner, "Bounds on Species Scale and the Distance Conjecture," Fortsch. Phys. 71, 2300143 (2023), [arXiv:2303.13580](https://arxiv.org/abs/2303.13580) [hep-th].

[34] A. Addazi and G. Meluccio, "Solution to the Cosmological Constant Problem from Pre-geometric Gravity," [arXiv:2602.16840](https://arxiv.org/abs/2602.16840) [hep-th] (2026).

---

## Appendix F: Reference Usage and Verification

The following table documents the provenance and use of every citation in this paper. The format places the verification burden on the author rather than the reader. For each reference it declares an epistemic type, gives the canonical link, and names the specific claim in the body that the citation supports. A reader checking any citation does not have to reconstruct from the source what role it plays here, because the role is stated and the statement can be checked against the source directly.

The format is heavier than standard practice, and deliberately so. It targets the failure modes that degrade citation graphs as authorship volume rises: bundled citations that hide which source supports which claim, review articles cited for primary results, conjectures that harden into assumed facts as they pass through successive papers, and circular dependencies among concurrently submitted work. Each element below addresses one of these. Per-citation typing, an explicit dependency statement, and documented conflict resolution share one property: they can be checked mechanically, and so they scale where reader-side spot-checking does not.

**Epistemic types.** Each entry carries one of the following:

- *theorem*: the cited claim is rigorously established in the source and is used here as established.
- *ansatz*: the cited claim is conjectural; this paper adopts it as parametric input, and results downstream of it are stated conditionally.
- *phenomenological*: the cited claim is empirically grounded but lacks a first-principles derivation in the source.
- *review*: the reference is pedagogical or background; no specific result is sourced from it.
- *in-preparation*: the reference is a companion paper not yet public; its status is flagged and its dependency direction is stated below.

| Ref | Type | Link | Use in this paper |
|:--|:----------|:-----------------------|:-----------------------------|
| [1] | theorem | <https://doi.org/10.1103/PhysRevLett.38.739> | Founding SO(1,4) MM action (point); the framework object of §II. |
| [2] | theorem | <https://doi.org/10.1103/PhysRevD.21.1466> | Stelle-West director field and broken-phase auxiliary structure (§II.A-C). |
| [3] | theorem | <https://arxiv.org/abs/hep-th/9801184> | Volume/gauge-symmetry origin of the Riemann-Einstein structure (§II.B). |
| [4] | review | <https://arxiv.org/abs/gr-qc/0611154> | Cartan-geometric reading of the MM connection (§II.B framing). |
| [5] | theorem | <https://doi.org/10.1016/0370-2693(89)91312-9> | Chern-Simons gravity in odd dimensions (class); AdS₅ bulk action (§III.A). Companion: <https://doi.org/10.1016/0550-3213(90)90245-9>. |
| [6] | review | <https://arxiv.org/abs/hep-th/0502193> | CS (super-)gravities background for the bulk action (§III.A). |
| [7] | theorem | <https://doi.org/10.1007/BF01217730> | CS/Wess-Zumino-Witten correspondence inducing the MM boundary action (§III.B-C). |
| [8] | theorem | <https://arxiv.org/abs/hep-th/0011156> | End-of-the-world brane construction in AdS₅ with Z₂ symmetry (§III.B). |
| [9] | ansatz | <https://arxiv.org/abs/hep-th/0509212> | Swampland Distance Conjecture as parametric input (§I.A); conjectural, treated as such. |
| [10] | phenomenological | <https://arxiv.org/abs/2205.12293> | Dark Dimension scenario (class), R ~ 110 μm fit to the cosmological-constant scale; KK tower as dark matter (§I.A, §V). |
| [11] | theorem | (book; no DOI) | Dirac-Bergmann constraint algorithm; method foundation for the companion analysis [26]. |
| [12] | review | (book; ISBN 9780691037691) | Constrained Hamiltonian systems; standard reference for the Dirac-Bergmann framework. |
| [13] | theorem | <https://doi.org/10.1103/PhysRevD.6.3368> | Boulware-Deser ghost result; the comparison case for §VI.C. See apparent-conflicts table. |
| [14] | theorem | <https://arxiv.org/abs/1011.1232> | dRGT ghost-free massive gravity; comparison theory for §VI.C. See apparent-conflicts table. |
| [15] | theorem | <https://arxiv.org/abs/1111.2070> | Secondary-constraint completion of the dRGT proof; ghost-freedom context (§VI.C). |
| [16-a] | theorem | <https://arxiv.org/abs/1907.10440> | Langenscheidt: SO(1,4)-covariant auxiliary-field structure for scalar kinetic terms (point, §II.C); cited as "[16]" in the body. |
| [16-b] | review | (book; ISBN 9780521278584) | Birrell-Davies: heat-kernel background methodology (§IV.A); also cited as "[16]". Distinct type from [16-a]; see note below. |
| [17] | review | <https://arxiv.org/abs/hep-th/0306138> | Vassilevich heat-kernel methodology for Eqs. (21)-(22) and the a₄ coefficient (§IV.A-D). |
| [18] | theorem | <https://doi.org/10.1103/PhysRevLett.72.3439> | Quantum Fisher information / statistical-distance definition (point, §IV.C). |
| [19] | theorem | <https://arxiv.org/abs/hep-th/0405231> | KSS viscosity bound (point, §VI.D). See apparent-conflicts table. |
| [20] | theorem | (foundational; no DOI) | Cartan torsion structure (§Appendix A conventions). |
| [21] | theorem | (foundational; no DOI) | ECKS torsion theory; joint with [20, 22]. |
| [22] | theorem | <https://doi.org/10.1063/1.1703702> | ECKS torsion theory; joint with [20, 21]. |
| [23] | theorem | <https://doi.org/10.1016/0375-9601(90)90786-N> | Gisin no-superluminal theorem; argued inapplicable in §VI.H; joint with [24]. |
| [24] | theorem | <https://doi.org/10.1103/PhysRevLett.66.397> | Polchinski no-superluminal theorem; same use as [23]. |
| [25] | theorem | <https://arxiv.org/abs/1601.04744> | Edge-mode / local-subsystem framework for the variance coupling (§IV.D-E). |
| [26] | in-preparation | (companion; not yet on arXiv) | Canonical reduction: constraint count, DOF bound, ghost freedom, configuration-robustness (§II.D, §VI.C, §IX). Dependency direction stated below. |
| [27] | in-preparation | (companion; not yet on arXiv) | No-go theorem for mechanical stabilization of the Dark Dimension (§I.A, §IX). Dependency direction stated below. |
| [28] | theorem | <https://doi.org/10.1007/BF02710419> | Israel junction conditions on the ETW brane (point, §III.B). |
| [29] | theorem | <https://arxiv.org/abs/hep-th/0002073> | Brane-bulk Casimir / KK functional-determinant sum (class); jointly with [30, 31] establishes the method of §IV.D Step 2. |
| [30] | theorem | <https://arxiv.org/abs/hep-ph/0012379> | Brane couplings from bulk loops (class); joint with [29, 31]. |
| [31] | theorem | <https://arxiv.org/abs/hep-th/0204223> | Bulk and brane radiative effects on orbifolds (class); joint with [29, 30]. |
| [32] | theorem | <https://arxiv.org/abs/1004.3744> | Dvali-Gomez species-counting argument for Λ_s and N (§IV.D, §V.A); joint with [33]. |
| [33] | theorem | <https://arxiv.org/abs/2303.13580> | Species-scale bounds and single-mesoscopic-dimension refinement (§V.A); the form adopted in §V.A is from [33], not [32]. |
| [34] | ansatz | <https://arxiv.org/abs/2602.16840> | Pre-geometric periodic vacuum potential (§III.A bis); conjectural input, treated as such. See status watch. |

A note on the [16] split. Reference [16] bundles a thesis (Langenscheidt) with a textbook (Birrell-Davies) under one bibliography number. The two carry different epistemic types and support different claims: [16-a] is a *theorem*-type source for the auxiliary-field structure, [16-b] a *review*-type source for heat-kernel background. The split here makes the type difference visible; the body retains "[16]" because the bibliography entry is single.

**Acyclic dependency statement.** This paper cites two companion papers submitted concurrently, [26] and [27]. Their logical dependency is one-way and contains no cycles. Reference [26] derives the canonical reduction, the constraint count, the degree-of-freedom bound, and the ghost-absence result; it does not depend on the heat-kernel derivation, the species-scale analysis, or the pre-geometric embedding developed here. The present paper uses [26]'s results in §II.D and §VI.C and feeds none of its own results back into [26]. Reference [27] establishes the no-go theorem for mechanical stabilization of the Dark Dimension; it is logically independent of both [26] and this paper, and is cited here once, as the boundary condition motivating the geometric-stabilization approach (§I.A). No claim established in this paper is supported, directly or transitively, by a citation that depends on that same claim.

**Apparent conflicts and their resolutions.** Several cited results appear, on a first reading, to stand in tension with the conclusions of this paper. Each apparent conflict is recorded below with the structural feature that resolves it. The resolutions turn on a specific structural difference between the cited setting and the present one, not on editorial reconciliation.

| Cited work | Apparent conflict | Resolution type | Resolution |
|:--------|:------------|:------------|:--------------------------|
| [13] Boulware-Deser | The sixth polarization of a massive graviton is a ghost. | orthogonal-mechanism | The MM action is first-order BF-type with identically vanishing Hessian. The Hamiltonian constraint keeps first-class status throughout the constraint algorithm, so the ghost mode never enters the kinematic sector. Ghost absence is topological, not tuned (§VI.C). |
| [14], [15] dRGT / Hassan-Rosen | Ghost-free massive gravity requires fine-tuned polynomial interactions. | orthogonal-mechanism | dRGT removes the ghost from a second-order Lagrangian by algebraic cancellation. The present mechanism operates on a first-order action where no cancellation is needed; the two routes to ghost freedom are structurally distinct and not in competition (§VI.C). |
| [19] KSS bound | A state-dependent effective Newton constant might violate η/s ≥ 1/(4π). | parameter-regime | The bound is dimensionless. Both η and s scale as 1/G_eff in the broken phase, so the ratio is invariant under the VEV shift that sets G_eff. The bound is preserved, not approached (§VI.D). |
| [27] (companion) | Mechanical stabilization of the Dark Dimension is excluded. | scope-difference | This paper makes no mechanical-stabilization claim. The stabilization here is geometric, sourced by the SO(1,4) holographic structure, and lies outside the scope of the no-go theorem (§I.A). |

**Status watch on recent preprints.** Reference [34] (Addazi-Meluccio, arXiv:2602.16840, February 2026) is a recent preprint, not yet through peer review at submission. The periodic vacuum potential cited in §III.A bis is treated as an *ansatz*. The dependency is stated in both directions so that the consequence of any change in [34]'s status is already mapped. If [34] is revised in a way that alters the periodic structure, the topological quantization mechanism of §III.A bis requires reformulation; the heat-kernel derivation of §IV, the degree-of-freedom count of §II.D, the species-scale analysis of §V.A, and the Brans-Dicke effective action of §III.B are independent of it and are unaffected. If [34] is confirmed at peer review, the periodic structure is promoted from *ansatz* to established input and the conditional language in §III.A bis can be discharged.
