# Intergenerational equity an sustainability discoontin

Discoontin future costs an benefits back tae present value is staundart practice in public appraisal — see the [social discoont rate](../social-discoont-rate/) — but onie positive discoont rate, compoundit ower decades or centuries, shrinks the far future towards zero in the day's terms. For decisions wi consequences a century or mair oot — climate chynge, nuclear waste, biodiversity loss, pension sustainability — that mathematical fact becomes an ethical ane: staundart discoontin can mak catastrophic hairm tae future generations appear, in present-value terms, scarcely worth avoidin.

## Why it maitters

The Ramsey equation, derived by Frank Ramsey in 1928, decomposes the discoont rate intae twa components: pure time preference (δ, hoo muckle we juist prefer nou tae later, independent o wealth) an the wealth-growth effect (η×g, hoo muckle we discoont acause future generations are expectit tae be richer, sae an extra pound maitters less tae them). The UK Green Book's staundart lang-term discoont rate is biggit on this equation an follaes a *declinin* schedule raither nor a flat rate — a design rootit in Martin Weitzman's wark on "gamma discoontin," which shaws that whan the future discoont rate itsel is uncertain, the certainty-equivalent rate ye shuid apply mathematically declines ower time, acause laich-rate scenarios come tae dominate the further oot ye look. The Stern Review on the Economics of Climate Change (2006), led by Sir Nicholas Stern, took the ethical debate further: Stern argued that pure time preference shuid be set near zero (he uised δ ≈ 0.1%, reflectin anely the wee probability o civilization-endin catastrophe, no a genuine preference for the present ower the future), producin a faur laicher effective discoont rate nor conventional Green Book practice an, correspondingly, a faur bigger present-day case for climate action. Critics (notably William Nordhaus) argued Stern's near-zero rate wis ethically defensible but inconsistent wi actual observit savins an investment behaviour. The disagreement isnae a technical fitnote — it is the single lairgest reason twa equally rigorous economists can reach wildly different conclusions aboot hoo muckle the present generation shuid sacrifice for the future, an it is the reason saftware supportin lang-horizon public investment appraisal maun expose its discoontin assumptions raither nor bury them in a spreadsheet default.

## The maths

```
Ramsey equation:   r = δ + η × g

  r = social discount rate
  δ = pure time preference (rate of impatience, independent of wealth)
  η = elasticity of marginal utility of consumption (diminishing value of
      extra consumption as people get richer)
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

## Wrocht example

**Value the day o £1 o avoidit hairm in 100 year**, unner three discoontin regimes:

```
Flat Green Book short-term rate (3.5%, held constant for 100 years):
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

The same £1 o hairm avoidit a century frae nou is worth 3.2p, 5.1p, or 25p the day dependin purely on whilk discoontin convention is uised — a near-eichtfauld range that drives whether a climate mitigation project wi heich upfront cost an payoff a century oot clears a positive-NPV bar ava. This is the mechanism ahint the topic's central warnin: at onie meaningfully positive flat rate, sufficiently distant future hairm is arithmetically erased frae the appraisal, regardless o its real severity.

## Link tae saftware ingineerin

- Onie lang-horizon appraisal or business-case tool (infrastructure, climate adaptation, pension modellin) shuid implement the Green Book's *declinin* schedule, no a single flat rate — a flat-rate default quietly embeds a muckle stronger anti-future bias nor current UK government guidance specifies.
- Discoont-rate an horizon shuid aye be exposed as veesible, auditable parameters in appraisal saftware, wi the calculation's sensitivity tae them shawn explicitly (as in the wrocht example abune) — buryin the rate in a config file invites exactly the "hidden ethical choice" the Stern-Nordhaus debate warns aboot; this pairs wi the transparency pynt made in [natural capital accoontin](../natural-capital-accoontin/) an underlies the [social discoont rate](../social-discoont-rate/) topic generally.
- Whaur a programme's benefits are explicitly intergenerational (flood defence, natural capital restoration, lang-term digital infrastructure), a [social cost-benefit analysis](../social-cost-benefit-analysis/) shuid report results unner at least twa discoontin assumptions (Green Book staundart an a laich-rate sensitivity case) raither nor a single pynt estimate, sae decision-makers see hoo discoont-rate choice alane muives the answer.

## Pitfaws

- **Presentin a single discoontit NPV athoot a sensitivity range** — gien hoo muckle the discoont rate alane chynges the answer for lang-horizon projects, a single-rate NPV materially owerstates precision; aye report a range spannin at least the Green Book staundart an a laich-rate scenario.
- **Applyin the short-term flat rate (3.5%) tae a multi-century appraisal** — the Green Book's ain guidance specifies the declinin schedule precisely acause the flat rate wis judgit inappropriate ayont aboot 30 year; uisin it onywey understates lang-term costs.
- **Treatin δ (pure time preference) as a purely technical parameter** — Stern's near-zero value an the Green Book's heicher implicit value are baith defensible anely as ethical positions aboot hoo muckle weicht the present owes the future, no empirically "correct" or "incorrect" nummers; saftware shuid mak the assumption veesible raither nor presentin ae figure as objectively richt.

## Sources

- Stern N. "The Economics of Climate Change: The Stern Review." Cambridge University Press, 2006.
- Ramsey FP. "A Mathematical Theory of Saving." The Economic Journal, 1928.
- Weitzman ML. "Gamma Discounting." American Economic Review, 2001.
- HM Treasury. "The Green Book: Central Government Guidance on Appraisal and Evaluation" (Annex 6,
  discount rate schedule).
- Nordhaus WD. "A Review of the Stern Review on the Economics of Climate Change." Journal of
  Economic Literature, 2007.
