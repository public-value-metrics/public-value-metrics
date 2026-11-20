# Key Performance Indicators for Public Sector: How to Choose Measures wey Dem No Fit Game

Key performance indicator (KPI) na measure wey dem choose and dey track to show whether public service dey do im work well. For government, di choice of KPI no ever neutral: because KPIs dey attach to budgets, league tables, and careers, di act of to select one dey shape di behaviour of everybody wey dey downstream of am, often pass di policy wey create di service.

## Wetin make am matter

Charles Goodhart 1975 observation on monetary policy — wey Marilyn Strathern later make popular as "when a measure becomes a target, it ceases to be a good measure" — na di single most important warning label for public-sector performance management. KPI wey dem choose to *describe* system go start to *distort* dat system di moment wey resourcing, pay, or political survival tie to am. Di canonical illustration na NHS ambulance response times: when di eight-minute Category A response target become binding, dem show say some trusts "stack" ambulances just outside di response-time clock, or dem reclassify calls, to hit di number without to change patient outcomes. UK National Audit Office guidance on how to choose and use performance indicators — wey dem set out across im value-for-money reports and im "Performance Measurement by Regulators" and "Choosing the Right FABRIC" framework (Fit for purpose, Appropriate, Balanced, Robust, Integrated, Cost-effective) — exist exactly because departments dey keep to pick indicators wey easy to report instead of indicators wey hard to game. Software engineer wey ship di dashboard wey minister or director go dey judge against, whether e mean am or no, dey design di incentive structure of public institution.

## Di maths

KPI design na topic wey get framework shape, but di *evaluation* of candidate KPI na checklist wey you fit repeat, no be formula:

```
For each candidate KPI, score am against:
  Fit for purpose  — e dey measure di outcome, or na proxy wey dey several steps away?
  Appropriate      — e belong to di people wey fit really influence am?
  Balanced         — dem pair am with counter-metric wey go catch gaming?
  Robust           — e fit survive audit, or na self-reported and unverifiable?
  Integrated       — e fit inside di wider set, or e dey push against another KPI?
  Cost-effective   — to collect am cost more pass di decision wey e inform?

Leading vs lagging split:
  Leading indicator  → e predict future outcome, but dem fit game am (e.g. calls wey dem answer <60s)
  Lagging indicator  → e confirm say di outcome happen, but e come too late to steer (e.g. annual
                        satisfaction survey)
  Defensible KPI set dey pair at least one of each per objective.
```

## Example wey dem work out

**Ambulance trust**: one trust report Category A (life-threatening) response-time KPI of "75% of calls responded to within 8 minutes." For one quarter, 6,000 Category A calls come in; 4,500 dem meet within 8 minutes, wey give 75.0% — e look like say dem on target.

```
Headline KPI = 4,500 / 6,000 × 100 = 75.0%  (e meet di 75% threshold)
```

But Goodhart audit add counter-metric: mean response time for di slowest 10% of calls.

```
Slowest decile mean response = 34 minutes (up from 19 minutes two years before)
```

Di trust dey hit di target while di tail — di calls wey most likely to really dey life-threatening when triage no perfect — don get much worse, because dem dey prioritize crews toward calls wey near di 8-minute cliff-edge instead of toward clinical urgency. Di single KPI tell false story; di paired KPI tell di true one.

## How e connect to software engineering

Engineers wey dey build performance dashboards for government dey, for function, design di incentive API of di organization. Practical implications: instrument di *denominator* as rigorously as di numerator (KPI wey dem report as bare percentage dey invite denominator gaming — see [cost-per-transaction](../cost-per-transaction-wetin-e-really-cost-to-run-government-digital-service/) for di same trap for digital services); build counter-metrics inside di same dashboard instead of separate report wey nobody dey read, so gaming go visible for di point of decision; and version di KPI definition, because silent redefinition (to change wetin count as "call," "case," or "completion") na di same as to change di target without to announce am. [Public value scorecard](../public-value-scorecard-how-to-report-performance-across-many-dimensions-without-to-hide-trade-offs/) na one structured way to stop single KPI from dey read alone, and [outcomes-based accountability](../outcomes-based-accountability-how-to-separate-population-results-from-programme-performance/) na di discipline of to choose population-level KPIs wey single team no fit distort on im own.

## Wahala dem wey you suppose avoid

- **To pick di metric wey easy to collect instead of di one wey meaningful**: call-answer time easy to log; whether di call solve di citizen problem no easy — but only di second one na di outcome. Resist di urge to default to wetin di system already dey emit.
- **No counter-metric**: any KPI wey attach to money or reputation go get game for di margin; ship am with paired metric wey go catch di likely gaming vector before you publish am.
- **To redefine di metric without changelog**: to swap "calls received" for "calls answered" to flatter trend dey destroy di time series credibility di moment dem discover am — always publish definitions changelog beside di numbers.
- **To confuse activity with result**: to count inspections wey dem complete na output; to count premises wey dem bring into compliance near di outcome (see [outcomes vs outputs](../outcomes-and-outputs-di-difference-between-wetin-you-do-and-wetin-e-change/)).

## Sources

- National Audit Office, "Choosing the Right FABRIC: A Framework for Performance Information."
  <https://www.nao.org.uk/>
- Marilyn Strathern, "'Improving Ratings': Audit in the British University System," *Social
  Anthropology*, 1997 (formulation of Goodhart's law as commonly cited).
- National Audit Office, investigations into NHS ambulance service performance reporting.
  <https://www.nao.org.uk/>
