# Intergenerational Equity and Sustainability Discounting: How Much Future Generations Dey Count

To discount future costs and benefits back to present value na standard practice for public appraisal — see di [social discount rate](../social-discount-rate-how-government-dey-price-benefits-wey-go-come-later/) — but any positive discount rate, wey dem compound over decades or centuries, dey shrink di far future towards zero for today terms. For decisions wey get consequences wey dey a century or more away — climate change, nuclear waste, biodiversity loss, pension sustainability — dat mathematical fact become ethical one: standard discounting fit make catastrophic harm to future generations appear, for present-value terms, barely worth to avoid.

## Wetin make am matter

Di Ramsey equation, wey Frank Ramsey derive for 1928, dey decompose di discount rate into two components: pure time preference (δ, how much we just prefer now to later, independent of wealth) and di wealth-growth effect (η×g, how much we dey discount because dem expect say future generations go richer, so extra pound matter less to dem). Di UK Green Book standard long-term discount rate dey built on dis equation and e follow *declining* schedule instead of flat rate — design wey root for Martin Weitzman work on "gamma discounting," wey show say wen di future discount rate itself uncertain, di certainty-equivalent rate wey you suppose apply dey decline mathematically over time, because low-rate scenarios dey dominate di further out you look. Di Stern Review on di Economics of Climate Change (2006), wey Sir Nicholas Stern lead, take di ethical debate further: Stern argue say dem suppose set pure time preference near zero (e use δ ≈ 0.1%, wey reflect only di small probability of civilization-ending catastrophe, no be genuine preference for di present over di future), wey produce far lower effective discount rate than conventional Green Book practice and, correspondingly, far larger present-day case for climate action. Critics (notably William Nordhaus) argue say Stern near-zero rate ethically defensible but e inconsistent with actual observed savings and investment behaviour. Di disagreement no be technical footnote — na di single largest reason why two equally rigorous economists fit reach wildly different conclusions about how much di present generation suppose sacrifice for di future, and na di reason why software wey support long-horizon public investment appraisal must expose im discounting assumptions instead of to bury dem for spreadsheet default.

## Di maths

```
Ramsey equation:   r = δ + η × g

  r = social discount rate
  δ = pure time preference (rate of impatience, independent of wealth)
  η = elasticity of marginal utility of consumption (diminishing value of
      extra consumption as pipo dey get richer)
  g = expected growth rate of per-capita consumption

Green Book declining long-term schedule (approximate, current published bands):
  Years 0–30:    3.5%
  Years 31–75:   3.0%
  Years 76–125:  2.5%
  Years 126–200: 2.0%
  Years 201–300: 1.5%
  Years 301+:    1.0%

Stern Review parameters: δ ≈ 0.1%, η = 1, g ≈ 1.3%  → r ≈ 1.4%
```

## Example wey dem work out

**Value today of £1 of avoided harm for 100 years time**, under three discounting regimes:

```
Flat Green Book short-term rate (3.5%, wey dem hold constant for 100 years):
  PV = 1 / (1.035)^100 ≈ 1 / 31.19 ≈ £0.032   (3.2 pence)

Green Book declining schedule (3.5% for yrs 1–30, 3.0% for yrs 31–75,
2.5% for yrs 76–100):
  factor(1–30)  = 1.035^30  ≈ 2.807
  factor(31–75) = 1.03^45   ≈ 3.782
  factor(76–100)= 1.025^25  ≈ 1.854
  total factor ≈ 2.807 × 3.782 × 1.854 ≈ 19.68
  PV = 1 / 19.68 ≈ £0.051   (5.1 pence)

Stern-style near-zero pure time preference (r ≈ 1.4% flat):
  PV = 1 / (1.014)^100 ≈ 1 / 3.997 ≈ £0.250   (25.0 pence)
```

Di same £1 of harm wey dem avoid one century from now worth 3.2p, 5.1p, or 25p today depending purely on which discounting convention dem use — near-eightfold range wey dey drive whether climate mitigation project wey get high upfront cost and payoff one century away go clear positive-NPV bar at all. Dis na di mechanism behind di topic central warning: for any meaningfully positive flat rate, sufficiently distant future harm dey arithmetically erased from di appraisal, no matter im real severity.

## How e connect to software engineering

- Any long-horizon appraisal or business-case tool (infrastructure, climate adaptation, pension modelling) suppose implement di Green Book *declining* schedule, no be single flat rate — flat-rate default dey quietly embed much stronger anti-future bias than current UK government guidance specify.
- Dem suppose always expose discount-rate and horizon as visible, auditable parameters for appraisal software, with di calculation sensitivity to dem wey dem show explicitly (as for di worked example above) — to bury di rate for config file dey invite exactly di "hidden ethical choice" wey di Stern-Nordhaus debate warn about; dis pair with di transparency point wey dem make for [natural capital accounting](../natural-capital-accounting-how-to-put-value-on-di-environment/) and e underlie di [social discount rate](../social-discount-rate-how-government-dey-price-benefits-wey-go-come-later/) topic generally.
- Where programme benefits explicitly intergenerational (flood defence, natural capital restoration, long-term digital infrastructure), [social cost-benefit analysis](../social-cost-benefit-analysis-how-to-weigh-every-cost-and-benefit-to-society/) suppose report results under at least two discounting assumptions (Green Book standard and low-rate sensitivity case) instead of single point estimate, so dat decision-makers go see how discount-rate choice alone dey move di answer.

## Wahala dem wey you suppose avoid

- **To present single discounted NPV without sensitivity range** — given how much di discount rate alone dey change di answer for long-horizon projects, single-rate NPV materially overstate precision; always report range wey span at least di Green Book standard and low-rate scenario.
- **To apply di short-term flat rate (3.5%) to multi-century appraisal** — di Green Book own guidance specify di declining schedule precisely because dem judge say di flat rate no appropriate beyond about 30 years; to use am anyway dey understate long-term costs.
- **To treat δ (pure time preference) as purely technical parameter** — Stern near-zero value and di Green Book higher implicit value both defensible only as ethical positions about how much weight di present owe di future, no be empirically "correct" or "incorrect" numbers; software suppose make di assumption visible instead of to present one figure as objectively right.

## Sources

- Stern N. "The Economics of Climate Change: The Stern Review." Cambridge University Press, 2006.
- Ramsey FP. "A Mathematical Theory of Saving." The Economic Journal, 1928.
- Weitzman ML. "Gamma Discounting." American Economic Review, 2001.
- HM Treasury. "The Green Book: Central Government Guidance on Appraisal and Evaluation" (Annex 6,
  discount rate schedule).
- Nordhaus WD. "A Review of the Stern Review on the Economics of Climate Change." Journal of
  Economic Literature, 2007.
