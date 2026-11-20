# Citizen Satisfaction Metrics

Citizen satisfaction metrics meisure hoo fowk rate their direct experience o a public service — different frae trust in institutions in general, an different frae whether the service actually achieved a guid ootcome. A service can be weel-likit an ineffective, or effective an disliked; the gap atween the twa is itsel diagnostic information a delivery team shuid be watchin.

## Why it maitters

Satisfaction is meisured at twa different heichts that get routinely mixed up. At service level, the UK's nou-retirt Performance Platform an the day's GOV.UK service manual require a per-service satisfaction survey (typically a five-pynt "very satisfied" tae "very dissatisfied" scale, administered at the pynt o transaction) as ane o fower mandatory service KPIs — see [service standards and transaction metrics](../service-staundards-and-transaction-metrics/). At institutional level, the UK Civil Service People Survey meisures employee engagement an experience athort ilka central government department annually, an separately the OECD's "Trust in Government" programme surveys public trust in national government athort member states, trackin a lang-run decline an recovery pattern shapit heavily by crises (the 2008 financial crisis an the COVID-19 pandemic baith produced shairp, veesible movements in OECD trust figures). The reason engineers biggin citizen-facin services need tae haud satisfaction an ootcome apairt is a kent failure mode in service design: a bonnily designit, easy-tae-uise digital form for a benefit claim can scare very heich on satisfaction while the unnerlyin policy — eligibility rules, processin backlogs, award amoonts — leaves the claimant nae better aff. Satisfaction meisures the interface; it disnae meisure the value delivert ahint it.

## The maths

```
Net satisfaction = % satisfied (or very satisfied) − % dissatisfied (or very dissatisfied)
                    (neutral/nae-opinion responses excludit frae baith terms, but coontit
                    in the response base for calculatin ilka percentage)

Satisfaction-tae-ootcome gap = satisfaction score − ootcome achievement score
                    (baith normalizit 0–100; a lairge positive gap signals a service
                    that "feels guid" but unner-delivers on substance)

Trust index (OECD-style) = % o survey respondents answerin "yes" tae
                    "dae ye hae confidence in [national government]?"
                    trackit as a time series, typically disaggregatit by
                    age, income, an education
```

## Wrocht example

**Local authority council tax e-billin service**: a satisfaction survey at the pynt o successfu transaction shaws 2,400 respondents: 1,650 satisfied/very satisfied, 250 dissatisfied/very dissatisfied, 500 neutral.

```
Net satisfaction = (1,650/2,400 × 100) − (250/2,400 × 100)
                  = 68.75% − 10.42%
                  = +58.3 net satisfaction
```

This looks strang on its ain. But the survey is anely shawn tae uisers wha *successfully* complete the transaction — a kent meisurement bias (see pitfaws ablow). Pairin it wi the completion rate metric frae [service standards and transaction metrics](../service-staundards-and-transaction-metrics/) shaws completion is anely 71%, meanin:

```
True population satisfaction is unmeisured for the 29% wha abandoned the journey —
plausibly the maist dissatisfied cohort, syne abandonment is itsel a strang negative
signal the survey niver captures.
```

**National-level illustration (structure o an OECD-style trust series)**: national government trust reportit at 42% in year 1, fallin tae 34% in year 2 (a crisis year) an recoverin tae 39% in year 3 — a trajectory typical o the shock-an-pairtial-recovery pattern the OECD documents athort member states efter major crises.

## Link tae saftware ingineerin

Instrument satisfaction surveys at ilka meaningfu exit pynt o a uiser journey, no juist at successfu completion — the single commonest engineerin mistak in this space, an ane that silently converts a satisfaction metric intae a survivorship-biasit vanity metric. Whaur possible, pair the satisfaction score wi a completion or ootcome metric on the same dashboard sae a team cannae celebrate risin satisfaction while completion quietly fa's (see [cost per transaction](../cost-per-transaction/) an [digital inclusion](../digital-inclusion/) for wha gets excludit frae digital satisfaction samplin in the first place — non-digital an assistit-digital uisers are systematically unner-representit in in-service surveys). Satisfaction an trust data an aw feed straucht intae the legitimacy leg o [Moore's strategic triangle](../public-value/), an belang on the "customer" an "legitimacy" perspectives o a [public value scorecard](../public-value-scorecard/) — see [trust and legitimacy metrics](../metrics-for-trust-an-legitimacy/) for the institutional-level counterpairt tae this service-level metric.

## Pitfaws

- **Survivorship bias in pynt-o-completion surveys**: uisers wha abandon a journey niver see the survey, sae a heich in-service satisfaction score can coexist wi a laich completion rate an a lairge invisible population o dissatisfied non-completers.
- **Treatin satisfaction as a proxy for ootcome**: a weel-designit interface for a puirly designit policy scores weel on satisfaction an badly on ootcome — aye report baith, niver ane as a stand-in for the ither.
- **Wee, unrepresentative samples reportit wi fause precision**: a satisfaction score frae a few hunder self-selectit respondents reportit tae ae decimal place implies a confidence the sample size cannae support.
- **Ignorin demographic disaggregation**: national trust an satisfaction figures that arenae brokken doun by age, income, disability, or digital access can mask sherply divergent experiences athort groups — a pattern the OECD's ain Trust in Government releases explicitly disaggregate for.

## Sources

- OECD, "Trust in Government." <https://www.oecd.org/en/topics/trust-in-government.html>
- UK Cabinet Office, "Civil Service People Survey" results.
  <https://www.gov.uk/government/collections/civil-service-people-survey-results>
- GOV.UK Service Manual, "Measuring Success." <https://www.gov.uk/service-manual/measuring-success>
