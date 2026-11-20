# Citizen Satisfaction Metrics: How People Rate Public Services

Citizen satisfaction metrics dey measure how people rate dia direct experience of public service — dem different from trust in institutions generally, and different from whether di service really achieve good outcome. Service fit dey well-liked and ineffective, or effective and disliked; di gap between di two na diagnostic information itself wey delivery team suppose dey watch.

## Wetin make am matter

Dem dey measure satisfaction for two different altitudes wey people dey routinely confuse. For service level, di UK Performance Platform (wey dem don retire) and today GOV.UK service manual require per-service satisfaction survey (usually five-point scale from "very satisfied" to "very dissatisfied", wey dem administer at di point of transaction) as one of four mandatory service KPIs — see [service standards and transaction metrics](../service-standards-and-transaction-metrics-how-to-measure-public-digital-services/). For institutional level, di UK Civil Service People Survey dey measure employee engagement and experience across every central government department every year, and separately di OECD "Trust in Government" programme dey survey public trust in national government across member states, and e dey track long-run pattern of decline and recovery wey crises dey shape well well (di 2008 financial crisis and di COVID-19 pandemic both produce sharp, visible movements for OECD trust figures). Di reason why engineers wey dey build citizen-facing services must keep satisfaction and outcome apart na known failure mode for service design: beautifully designed, easy-to-use digital form for benefit claim fit score very high satisfaction while di underlying policy — eligibility rules, processing backlogs, award amounts — leave di claimant no better off. Satisfaction dey measure di interface; e no dey measure di value wey dem deliver behind am.

## Di maths

```
Net satisfaction = % satisfied (or very satisfied) − % dissatisfied (or very dissatisfied)
                    (neutral/no-opinion responses dem exclude from both terms, but dem count
                    inside di response base to calculate each percentage)

Satisfaction-to-outcome gap = satisfaction score − outcome achievement score
                    (both normalized 0–100; large positive gap dey signal service
                    wey "feel good" but under-deliver on substance)

Trust index (OECD-style) = % of survey respondents wey answer "yes" to
                    "you get confidence for [national government]?"
                    wey dem track as time series, usually disaggregated by
                    age, income, and education
```

## Example wey dem work out

**Local authority council tax e-billing service**: satisfaction survey for di point of successful transaction show 2,400 respondents: 1,650 satisfied/very satisfied, 250 dissatisfied/very dissatisfied, 500 neutral.

```
Net satisfaction = (1,650/2,400 × 100) − (250/2,400 × 100)
                  = 68.75% − 10.42%
                  = +58.3 net satisfaction
```

Dis one look strong if you look am alone. But dem only show di survey to users wey *successfully* complete di transaction — known measurement bias (see pitfalls below). If you pair am with di completion rate metric from [service standards and transaction metrics](../service-standards-and-transaction-metrics-how-to-measure-public-digital-services/), e show say completion na only 71%, wey mean:

```
True population satisfaction no dey measured for di 29% wey abandon di journey —
e fit be di most dissatisfied cohort, because abandonment na strong negative
signal by itself wey di survey no ever capture.
```

**National-level illustration (structure of OECD-style trust series)**: national government trust dem report am as 42% for year 1, e fall to 34% for year 2 (crisis year) and recover to 39% for year 3 — trajectory wey typical of di shock-and-partial-recovery pattern wey di OECD dey document across member states after major crises.

## How e connect to software engineering

Instrument satisfaction surveys for every meaningful exit point of user journey, no be only for successful completion — na di single most common engineering mistake for dis space, and e dey quietly turn satisfaction metric into survivorship-biased vanity metric. Where e possible, pair di satisfaction score with completion or outcome metric for di same dashboard so team no go fit celebrate rising satisfaction while completion dey quietly fall (see [cost per transaction](../cost-per-transaction-wetin-e-really-cost-to-run-government-digital-service/) and [digital inclusion](../digital-inclusion-make-sure-say-digital-services-no-leave-anybody-behind/) for who dem dey exclude from digital satisfaction sampling from di start — non-digital and assisted-digital users dey systematically under-represented for in-service surveys). Satisfaction and trust data also dey feed directly into di legitimacy leg of [Moore's strategic triangle](../public-value-wetin-government-and-social-organizations-really-create-for-citizens/), and dem belong for di "customer" and "legitimacy" perspectives of [public value scorecard](../public-value-scorecard-how-to-report-performance-across-many-dimensions-without-to-hide-trade-offs/) — see [trust and legitimacy metrics](../trust-and-legitimacy-metrics-how-to-measure-whether-public-still-trust-government/) for di institutional-level counterpart to dis service-level metric.

## Wahala dem wey you suppose avoid

- **Survivorship bias for point-of-completion surveys**: users wey abandon journey no dey ever see di survey, so high in-service satisfaction score fit dey together with low completion rate and large invisible population of dissatisfied non-completers.
- **To treat satisfaction as proxy for outcome**: well-designed interface for poorly designed policy dey score well for satisfaction and badly for outcome — always report both, never use one as stand-in for di other.
- **Small, unrepresentative samples wey dem report with false precision**: satisfaction score from few hundred self-selected respondents wey dem report to one decimal place imply confidence wey di sample size no fit support.
- **To ignore demographic disaggregation**: national trust and satisfaction figures wey dem no break down by age, income, disability, or digital access fit hide experiences wey differ sharply across groups — pattern wey di OECD own Trust in Government releases clearly disaggregate for.

## Sources

- OECD, "Trust in Government." <https://www.oecd.org/en/topics/trust-in-government.html>
- UK Cabinet Office, "Civil Service People Survey" results.
  <https://www.gov.uk/government/collections/civil-service-people-survey-results>
- GOV.UK Service Manual, "Measuring Success." <https://www.gov.uk/service-manual/measuring-success>
