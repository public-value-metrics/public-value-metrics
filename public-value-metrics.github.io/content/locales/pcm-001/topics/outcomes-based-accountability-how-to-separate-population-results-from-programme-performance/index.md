# Outcomes-Based Accountability: How to Separate Population Results from Programme Performance

Outcomes-Based Accountability (OBA), wey dem also dey call Results-Based Accountability (RBA), na Mark Friedman framework to separate two questions wey public-sector reporting dey always mix together: "di population dey do well?" (population accountability) and "dis specific programme dey do well?" (performance accountability). To mix di two, as Friedman tell am, na di single most common reason why well-run programmes dey get blame for population trends wey dem no ever get power to move.

## Wetin make am matter

Friedman set di framework out for *Trying Hard Is Not Good Enough* (2005), and im argue say most public reporting either dey drown decision-makers for population-level statistics wey no single agency control (teen pregnancy rate, unemployment rate, life expectancy) or dey drown dem for programme-level activity counts (clients wey dem see, referrals wey dem make) wey no talk anything about whether anybody life improve. RBA contribution na small, disciplined vocabulary wey keep di two apart: population results (conditions of wellbeing for whole population, like "pikin dem born healthy") no belong to any single agency and need many partners to move together; performance measures (how well specific programme dey serve im specific clients) belong to one agency and dem suppose judge am only against wetin dat agency fit really influence. Friedman "three performance questions" — how much we do, how well we do am, and anybody better off? — don enter inside US state and county human-services contracting and, through RBA-aligned consultancy and toolkit Clear Impact, plenty UK and Commonwealth local-government commissioning dey use am. Di practical stakes na contractual: dem no suppose defund housing programme because city homelessness rate rise from macroeconomic causes wey out of im reach, but dem suppose defund am without doubt if im own clients no dey get housing.

## Di maths

```
Population accountability (di "big picture" wey community, region, or nation share):
  Result       — condition of wellbeing (e.g. "residents dey economically secure")
  Indicator(s) — measure of dat condition (e.g. unemployment rate, median household income)
  → no single programme own di indicator; to move am need many contributors

Performance accountability (wetin one programme responsible for):
  How much did we do?      — activity volume (clients wey dem serve, units wey dem deliver)
  How well did we do it?   — quality/efficiency (% wey complete programme, cost per client)
  Is anyone better off?    — di outcome wey matter (% for employment 6 months after
                              programme, before/after or against comparison group)

Dem go judge programme on di third performance question, never on di population
indicator directly, unless im scale and design fit plausibly move am alone.
```

## Example wey dem work out

**City-funded employment support programme**, 500 participants/year, wey local authority contract under RBA-style performance framework:

```
Population indicator (context, no be di programme scorecard):
  City unemployment rate: 6.2% (up from 5.8% di previous year, wey factory closure
  cause, outside di programme control)

Performance measures (di programme actual accountability):
  How much:   500 participants enrolled (target 480) — met
  How well:   78% completion rate; cost per completer = £340,000 / 390 completers ≈ £872
  Better off: of 390 completers, 260 dey sustained employment at 6 months = 66.7%
              versus matched comparison group 41% (see counterfactual-analysis)
```

If you read am as population accountability, di programme look like say e dey fail — di city unemployment rate go up while e dey watch. If you read am as RBA performance accountability, di programme dey succeed: e hit im volume target, keep quality steady, and produce employment outcome 25.7 percentage points above matched comparison group, while di population indicator move because of reasons (factory closure) wey completely outside di programme control.

## How e connect to software engineering

RBA map directly go one SRE distinction wey we know: population indicators be like business-level North Star metrics wey no single engineering team own from end to end (company revenue, market share), while performance measures be like team own SLOs — di things wey dat team design decisions really move. Dashboard wey report both without to label which one be which dey invite exactly di misattribution wey RBA build to prevent: on-call engineer wey dem blame for metric wey dependency team control. When you dey commission or build reporting tools for outcomes contracts, build di "how much / how well / better off" triad as first-class, separately-filterable fields instead of single blended KPI — na di same discipline as to separate leading and lagging indicators for [public sector KPIs](../key-performance-indicators-for-public-sector-how-to-choose-measures-wey-dem-no-fit-game/). RBA na also di accountability logic wey dey under [payment by results and social impact bonds](../payment-by-results-and-social-impact-bonds-how-to-pay-for-outcomes-wey-dem-verify/): PbR contract fit fairly pay only on di "better off" performance measure, never on di population indicator, unless di intervention really na di dominant driver of am.

## Wahala dem wey you suppose avoid

- **To pay or punish programme against population indicator wey e no fit control**: na di single mistake wey RBA exist to prevent; always trace whether di programme na major or minor contributor to di population result before you attach consequences to am.
- **To report "how much" as if na "better off"**: activity counts (clients wey dem see) na di easiest data to collect and di least informative; insist say dem must answer di "is anyone better off" question with real outcome data, ideally against counterfactual (see [counterfactual-analysis](../counterfactual-analysis-wetin-for-happen-without-di-intervention/)).
- **To treat RBA indicators as fixed forever**: Friedman method clearly dey iterative — "data, story, what works, action plan" cycle — no be one-off scorecard design exercise.
- **No comparison group for "better off"**: before/after change wey no get counterfactual dey mix programme effect with di trend wey di population for show anyway.

## Sources

- Mark Friedman, *Trying Hard Is Not Good Enough: How to Produce Measurable Improvements for
  Customers and Communities*, Trafford Publishing, 2005.
- Clear Impact, "What is Results-Based Accountability?"
  <https://clearimpact.com/results-based-accountability/>
