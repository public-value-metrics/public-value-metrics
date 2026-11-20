# Service Standards and Transaction Metrics: How to Measure Public Digital Services

GOV.UK Service Standard na UK government 14-point checklist to build and run public digital service, and e come with small, mandatory set of quantitative transaction metrics — cost per transaction, completion rate, digital take-up, and user satisfaction — wey teams must publish for every live central-government service. Together, di standard and di metrics na di operational, day-to-day specialization of di broader public value and KPI frameworks for dis repository, wey dem aim straight at software delivery teams.

## Wetin make am matter

Di Service Standard, wey dem maintain for GOV.UK service manual, require every point-in-time assessment (alpha, beta, live) of government digital service to demonstrate — among im 14 points — say di team understand users needs, dey work for multidisciplinary team, dey iterate and improve frequently, and *dey evaluate tools, systems, and ways of working*. For history, dis one dey sit beside public Performance Platform wey every live service dey openly publish im transaction data; dat platform don retire since, but di underlying obligation to measure and publish dis four core metrics still dey through di service manual "measuring success" guidance. Di reason why dis different from generic software KPI dashboard na say dem design dis metrics clearly as one linked economic model, no be four independent scores: di whole savings case for digital government — Government Digital Service Digital Efficiency Report find say digital transactions roughly 20 times cheaper than by phone and around 50 times cheaper than face-to-face for comparable local-government services — only dey materialize if completion rate stay high and digital take-up really rise, instead of to just add cheap channel beside expensive one wey no change.

## Di maths

```
Cost per transaction = total service running cost / number of completed transactions
Completion rate       = transactions completed / transactions started × 100
Digital take-up       = digital-channel transactions / all-channel transactions × 100
User satisfaction     = % satisfied + very satisfied, for in-service 5-point survey

Channel-shift saving = transaction volume × take-up shift × (cost per transaction on
                        di old channel − cost per transaction digitally)

Failure-demand cost = (1 − completion rate) × transactions wey dem attempt digitally ×
                        cost of di fallback channel wey dose users go use instead
```

## Example wey dem work out

**Illustrative central-government licence-renewal service**, 2 million transactions/year, now 65% phone (£3.00/transaction) and 35% digital (£0.30/transaction), completion rate 80%. Redesign against di 14-point Service Standard raise digital take-up to 60% and completion to 92%:

```
Take-up shift saving = 2,000,000 × 0.25 × (3.00 − 0.30) = £1,350,000/year

Failure-demand cost, before:
  2,000,000 × 0.35 × (1 − 0.80) × £3.00 = £420,000/year (people wey abandon go fall back to phone)

Failure-demand cost, after:
  2,000,000 × 0.60 × (1 − 0.92) × £3.00 = £288,000/year

Net failure-demand saving = £420,000 − £288,000 = £132,000/year

Total annual saving ≈ £1,350,000 + £132,000 = £1,482,000/year
```

Di arithmetic show clear why completion rate no be secondary metric: without di improvement from 80% to 92%, failure demand go claw back part of di take-up shift saving by to route frustrated digital users straight back go di expensive phone channel.

## How e connect to software engineering

Dis four metrics na working example of cost-consequence dashboard: one cost metric wey dem hold apart from three outcome/quality metrics, and dem no ever collapse dem into single score on purpose — di same discipline wey [public sector KPIs](../key-performance-indicators-for-public-sector-how-to-choose-measures-wey-dem-no-fit-game/) argue for. For engineers, dis break into concrete work wey dem fit own: completion rate na funnel-instrumentation problem, and every abandonment point for di journey na, in principle, something wey you fit locate and fix; cost per transaction need genuine unit-cost accounting wey include staff-assisted and paper-channel costs, no be only cloud hosting spend (see [cost per transaction](../cost-per-transaction-wetin-e-really-cost-to-run-government-digital-service/) and [total cost of ownership in government IT](../total-cost-of-ownership-in-government-it-di-full-cost-of-system-from-buy-till-e-die/)); and digital take-up na equity metric wey wear efficiency costume — di citizens wey no fit or no wan shift channel na disproportionately older, disabled, or digitally excluded, so aggressive channel closure dey turn "saving" into access harm (see [digital inclusion](../digital-inclusion-make-sure-say-digital-services-no-leave-anybody-behind/) and [channel shift savings](../channel-shift-savings-money-wey-dem-save-when-people-move-to-digital/)). Di 14-point standard itself na di process specification wey dey behind dis numbers — see [digital service standard](../digital-service-standard-di-rules-wey-digital-public-service-must-pass/) for di standard in full, and [citizen satisfaction metrics](../citizen-satisfaction-metrics-how-people-rate-public-services/) for how di satisfaction figure here connect to broader trust measurement.

## Wahala dem wey you suppose avoid

- **Take-up wey dem gain by to close di alternative channel**: to shut phone line dey raise di digital take-up percentage arithmetically while e dump failure demand onto whatever channel remain (often more expensive assisted-digital or face-to-face route); always measure total-system cost, no be di ratio alone.
- **To measure completion rate from step two of di funnel**: to start di "started" count after di first genuine drop-off point dey flatter di completion rate and e hide di biggest loss wey you fit fix.
- **Cost per transaction wey exclude assisted-digital support**: digital-only unit cost wey ignore di staff time wey dem spend to help users wey no fit self-serve dey understate di true cost of di channel.
- **To publish metrics without shared definition across services**: "transaction" and "completed" dey mean different things across different service teams unless dem standardize and version di definitions, and dis one make cross-service comparison no reliable.

## Sources

- GOV.UK Service Manual, "The Service Standard." <https://www.gov.uk/service-manual/service-standard>
- GOV.UK Service Manual, "Measuring Success — Data You Must Publish."
  <https://www.gov.uk/service-manual/measuring-success/data-you-must-publish>
- GOV.UK, "Digital Efficiency Report."
  <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
