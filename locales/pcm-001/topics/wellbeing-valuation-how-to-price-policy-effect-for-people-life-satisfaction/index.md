# Wellbeing Valuation: How to Price Policy Effect for People Life Satisfaction

Wellbeing valuation dey price policy effect directly for life-satisfaction terms, and e dey use WELLBY (wellbeing-adjusted life year) as im unit — one WELLBY equal one-point change for 0–10 life-satisfaction scale, wey last for one year. Na HM Treasury official alternative to monetize every benefit through willingness-to-pay.

## Wetin make am matter

HM Treasury "Wellbeing guidance for appraisal: supplementary Green Book guidance" (2021, <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>) formally bring subjective wellbeing data enter central government appraisal, and e give analysts way to value outcomes — social connection, mental health, safety, civic participation — wey [stated preference](../stated-preference-valuation-to-ask-people-wetin-dem-go-pay-for-something/) and [revealed preference](../revealed-preference-valuation-how-to-value-wetin-no-get-market-price-from-wetin-people-really-do/) methods dey struggle to price in convincing way, because people dey often forecast badly how much one good go really affect their satisfaction with life. Di guidance, wey dem develop together with di What Works Centre for Wellbeing, set recommended monetary value per WELLBY — £13,000 (2021 prices, dem dey revise am from time to time) — wey dem derive from di relationship wey dem observe for big wellbeing surveys (mainly di ONS Annual Population Survey, wey don dey ask di four ONS4 wellbeing questions since 2011) between income and life satisfaction, and dis give analysts conversion rate back to pounds when dem need monetized comparison against other Green Book appraisals.

Di method matter because e invert di usual valuation logic: instead of to ask wetin people go pay for outcome (stated preference) or to infer value from related market transaction (revealed preference), e measure di effect of di outcome on reported life satisfaction directly, and e skip di gap between wetin people talk say dem want and wetin really make dem better off. Dis one na also im main limitation — adaptation and framing effects dey affect self-reported life satisfaction, and careful practitioner must control for dem.

## Di maths

```
WELLBY = 1 life-satisfaction point (0-10 scale) sustained for 1 person for 1 year

Total WELLBYs from a policy =
  Σ (change in life satisfaction score) × (number of people affected)
    × (duration in years, discounted at the social discount rate)

Monetized value = Total WELLBYs × value per WELLBY
  (HM Treasury recommended value: £13,000 per WELLBY, 2021 prices,
   subject to periodic revision — check current guidance before use)
```

Dis one different from di health-economics [wellbeing-adjusted life year](../wellbeing-adjusted-life-years-di-wellby-di-unit-to-compare-different-kinds-of-benefit/), wey dem usually anchor to health-related quality of life scales (EQ-5D and similar) instead of general life satisfaction; di two related but you no fit swap dem, and Green Book appraisals suppose be clear about which scale and elicitation method dey behind WELLBY figure wey dem report.

## Example wey dem work out

**Local authority**: one council dey run community befriending scheme for isolated older residents, wey dey serve 400 people. Before/after wellbeing survey wey use di ONS4 life-satisfaction question show say participants average score rise from 5.8 to 6.5 — gain of 0.7 point — wey last for di programme 2-year funded duration.

```
WELLBYs generated = 400 people × 0.7 points × 2 years = 560 WELLBYs
Monetized value = 560 × £13,000 = £7.28m
Programme cost = £450,000 over 2 years

Benefit-cost ratio ≈ £7.28m / £0.45m ≈ 16:1
```

Ratio wey high like dis suppose make people look am well well instead of to celebrate — di Green Book wellbeing guidance clearly warn say make you no take small-sample self-reported gains at face value without to check for selection effects (na only di residents wey most sociable and most likely to improve join di scheme?) and without comparison group; evaluation wey dem design well go net off counterfactual change wey dem observe for non-participants, see [counterfactual analysis](../counterfactual-analysis-wetin-for-happen-without-di-intervention/).

**National government**: to compare two employment programmes with WELLBYs instead of earnings alone dey capture say unemployment carry wellbeing cost wey pass lost income — UK wellbeing research consistently find say unemployment dey reduce life satisfaction pass wetin income loss alone go predict, because of di non-pecuniary effects of to lose structure, purpose and social contact. Programme wey dem evaluate only on earnings gain go understate im value compare to one wey dem evaluate additionally on WELLBYs.

## How e connect to software engineering

Wellbeing valuation rarely reach engineering teams directly, but e dey shape how dem define "success" for social-sector and public-service products — digital befriending platform, mental-health triage tool, or community platform for isolated residents suppose expect say dem go eventually measure im impact dis way, and dis mean say product analytics must capture *who* dem reach and for *how long*, no be only usage counts. Build wellbeing survey instrumentation (ONS4 or validated equivalents) inside service evaluation from di start instead of to bolt am on afterwards; if you retrofit wellbeing baseline after service don launch, you go lose di pre/post comparison completely. See [outcomes vs outputs](../outcomes-and-outputs-di-difference-between-wetin-you-do-and-wetin-e-change/) and [impact evaluation methods](../impact-evaluation-methods-how-to-know-wetin-programme-really-cause/).

## Wahala dem wey you suppose avoid

- **No counterfactual or comparison group.** Pre/post wellbeing gain wey no control for wetin for happen anyway go overstate di programme effect; see [counterfactual analysis](../counterfactual-analysis-wetin-for-happen-without-di-intervention/) and [additionality and deadweight](../additionality-and-deadweight-wetin-programme-really-cause/).
- **Small samples wey people choose themselves.** Wellbeing surveys of programme participants wey opt in dey prone to selection bias — di people wey join and stay fit already dey trend upward.
- **To treat di £-per-WELLBY conversion as precise.** Di monetized value na policy convention wey dem derive from income-wellbeing regressions, no be market price; use am for comparability across Green Book appraisals, no be as claim about wetin wellbeing "worth".
- **To mix WELLBYs with health-related QALYs.** Di two dey measure different constructs for different scales; see [wellbeing-adjusted life years](../wellbeing-adjusted-life-years-di-wellby-di-unit-to-compare-different-kinds-of-benefit/) for di health-economics variant and no average di two together.

## Sources

- HM Treasury. "Wellbeing guidance for appraisal: supplementary Green Book guidance." 2021.
  <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>
- What Works Centre for Wellbeing. <https://whatworkswellbeing.org/>
- Office for National Statistics. "Personal well-being in the UK" (ONS4 measures).
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing>
- Fujiwara D, et al. "Wellbeing Valuation: A Nascent Field?" LSE / Simetrica research summaries.
