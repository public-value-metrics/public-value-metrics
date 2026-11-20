# Wellbeing-Adjusted Life Years: Di WELLBY, Di Unit to Compare Different Kinds of Benefit

WELLBY na one additional point of life satisfaction, for di standard 0–10 wellbeing scale, for one person for one year. Na di structural analogue of di QALY wey dem dey use for health economics — single unit wey let you compare interventions wey outcomes no get anything else in common — but dem build am on subjective wellbeing instead of clinical health states, and HM Treasury set am out for "Wellbeing guidance for appraisal: supplementary Green Book guidance" (2021).

## Wetin make am matter

Cost-benefit appraisal need common unit to compare youth-club grant against road-safety scheme against mental-health service, none of dem share outcome measure. Health economics solve dis one for clinical interventions with di QALY: quality-adjusted year of life, wey dem weight from 0 (dead) to 1 (full health). HM Treasury wellbeing guidance extend di same logic to non-health public spending, and e use di ONS harmonized life-satisfaction question ("Overall, how satisfied are you with your life nowadays?", wey dem answer 0–10) as di outcome ladder instead of health-state index. WELLBY of 1 mean say one person life satisfaction rise by one full point for one year (or, same thing, ten people satisfaction rise by 0.1 point each for one year — WELLBYs dey sum across population di way QALYs dey do). HM Treasury guidance set illustrative monetary value per WELLBY (around £13,000, 2019/20 prices) wey dem derive by to reconcile subjective-wellbeing data with other approaches to di value of life year, and dis give appraisers way to monetize outcomes — loneliness reduction, community cohesion, green-space access — wey [wellbeing valuation](../wellbeing-valuation-how-to-price-policy-effect-for-people-life-satisfaction/) techniques before fit only describe, no fit compare for common footing with health or safety spending.

## Di maths

```
WELLBY = Δ life satisfaction (0–10 scale) × number of years the change persists
        (summed across all people affected)

Monetized wellbeing benefit = WELLBYs generated × value per WELLBY (HMT reference value)

cf. QALY = Δ health-state utility (0–1 scale) × years lived in that state
```

You no fit swap di 0–10 satisfaction scale and di 0–1 QALY utility scale without conversion step; HM Treasury guidance discuss how to reconcile di two so dat, for example, health intervention wey dem appraise in QALYs and social intervention wey dem appraise in WELLBYs no go quietly double-count or no fit compare inside di same [Green Book appraisal](../green-book-appraisal-how-uk-government-dey-judge-spending-proposals/).

## Example wey dem work out

**Local authority loneliness service**: befriending scheme dey serve 400 isolated older residents. Follow-up surveys show say average life satisfaction rise from 5.2 to 6.0 (gain of 0.8 points), and dem estimate say di effect go last 2 years before e fade.

```
WELLBYs = 400 people × 0.8 points × 2 years = 640 WELLBYs

Monetized value = 640 × £13,000 = £8,320,000
```

Against annual programme cost of £300,000 (£600,000 over 2 years), di benefit-cost ratio na roughly 8,320,000 / 600,000 ≈ **13.9:1** — figure wey fit now sit for di same appraisal table as cost-per-QALY-averted of health scheme or journey-time savings of transport scheme.

**Charity, smaller scale**: community arts programme reach 50 participants with satisfaction gain wey dem measure of 0.3 points, wey last 1 year.

```
WELLBYs = 50 × 0.3 × 1 = 15 WELLBYs
Monetized value = 15 × £13,000 = £195,000
```

## How e connect to software engineering

- Any citizen-facing service wey don already collect life-satisfaction or wellbeing survey item (many local-authority and health-and-care platforms dey do am, as dem follow ONS four standard wellbeing questions) fit compute WELLBYs directly from di data pipelines wey dem get already instead of to commission bespoke economic evaluation for every service change.
- WELLBYs give engineering teams wey dey build for [social value act](../social-value-act-di-law-wey-make-public-buyers-think-about-community-benefit/) reporting or [social return on investment](../social-return-on-investment-how-to-show-social-value-against-money-wey-dem-spend/) one denominator wey dem standardize nationally and wey HM Treasury endorse, so dem go avoid plenty bespoke "impact scores" wey no fit compare across contracts or suppliers.
- Because WELLBYs dey add across people and time, dem dey compose cleanly into di kind population-level outcome tracking wey dem dey use for [outcomes-based accountability](../outcomes-based-accountability-how-to-separate-population-results-from-programme-performance/) systems — service dashboard fit report cumulative WELLBYs wey dem generate per quarter di way health system dey report QALYs gained.

## Wahala dem wey you suppose avoid

- **To assume say gains for self-reported satisfaction na fully because of di intervention** — without counterfactual (comparison group or before/after design with controls), you no fit separate di WELLBY gain from general trends; see [counterfactual analysis](../counterfactual-analysis-wetin-for-happen-without-di-intervention/).
- **To mix WELLBYs and QALYs inside one total without reconciliation** — HM Treasury guidance clear say di two dey use different scales and different underlying theories of value; to sum dem naively go double-count welfare wey overlap.
- **To use di reference monetary value without question** — di £-per-WELLBY figure na national average estimate wey get real uncertainty bands; HM Treasury guidance recommend sensitivity analysis, no be to treat am as fixed exchange rate.

## Sources

- HM Treasury. "Wellbeing guidance for appraisal: supplementary Green Book guidance." (2021)
  <https://www.gov.uk/government/publications/wellbeing-guidance-for-appraisal-supplementary-green-book-guidance>
- ONS. "Personal well-being user guidance" (the four standard wellbeing questions).
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing>
- HM Treasury. "The Green Book: Central Government Guidance on Appraisal and Evaluation."
