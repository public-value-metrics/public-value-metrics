# DORA Metrics for Public Value: How Fast and How Safe Public Value Dey Reach Citizen

Di DORA (DevOps Research and Assessment) metrics — deployment frequency, lead time for changes, change failure rate, and time to restore service, plus reliability as fifth — na di software industry most validated delivery-performance benchmarks. If you translate dem to public-sector accountability terms, each one na direct proxy for how fast, and how safely, public value dey reach citizen.

## Wetin make am matter

DORA decade of research, wey dem dey publish every year as di *Accelerate State of DevOps Report* (Forsgren, Humble and Kim methodology, wey Google Cloud dey run now), dey cluster teams into elite, high, medium and low performers. Elite teams dey deploy on demand, dem dey take under one day from commit to production, about 5% of dia changes dey fail, and dem dey recover under one hour; low performers dey deploy monthly or less, dem dey take months, around 40% of dia changes dey fail, and dem dey recover for weeks. For government, dem no be engineering vanity metrics: di Government Digital Service Service Standard require teams to "iterate and improve frequently" and to fit respond quickly to user need, and departments wey no fit deploy safely and often dey structurally unable to meet dat standard, no matter wetin dia user research talk. Di Cabinet Office own digital efficiency work find say to push citizen from failed or slow digital transaction enter phone or paper channel dey expensive — GDS 2012 Digital Efficiency Report estimate say some digital transactions cost as low as 20p against phone or face-to-face contacts wey cost up to £8.62 — so change failure for public-facing service no just cost engineering time, e dey push real pounds enter di contact-centre budget (see [channel shift savings](../channel-shift-savings-money-wey-dem-save-when-people-move-to-digital/)).

## Di maths

```
Deployment frequency  = production deployments / time
Lead time for changes = t(deploy) − t(commit), median
Change failure rate   = failed changes / total changes × 100
Time to restore (MTTR) = t(restored) − t(failure), median
Reliability            = SLO attainment (availability, latency, correctness)
```

Public-value translations:

```
Lead time      → weeks inside di pipeline × CoD, see cost-of-delay-in-public-programmes
Failure rate   → citizen-facing incident rate: CFR × cost per redirected
                 contact-centre call (or per failed statutory transaction)
Recovery time  → service outage harm: MTTR × (claims/applications wey dem block
                 per hour) × downstream cost or wellbeing loss per unit
Reliability    → benefit discount: service wey get 99% availability dey deliver
                 ≈ 0.99 of im modelled benefit — di delivery analogue
                 of take-up or compliance shortfall
```

## Example wey dem work out

Local authority benefits-claims portal team, before and after delivery-engineering investment:

```
                    Before      After
Deploys             monthly     weekly
Lead time           8 weeks     5 days
CFR                 30%         10%
MTTR                3 days      4 hours
```

Di team dey ship around 25 improvements/year, average value £8,000/week ([cost of delay](../cost-of-delay-for-public-programmes-wetin-delay-dey-cost/)). To cut lead time by roughly 7.3 weeks dey pull each improvement benefit stream forward: 25 × 7.3 × 8,000 ≈ **£1,460,000/year** of value wey dem deliver sooner. On failure rate: 25 × (0.30 − 0.10) = 5 fewer failed changes/year; each failed change on public portal typically dey redirect estimated 2,000 citizens to di phone channel at £8.62 versus 20p, net cost of roughly £8.42 × 2,000 ≈ £16,840 per incident, so to avoid 5 incidents dey save ≈ **£84,200/year**. Dem value di delivery-engineering investment for di same currency as any other public-value case.

## Example wey dem work out, continued: reliability

If di portal dey run for 97% availability instead of target 99.5%, and dem model each percentage point of downtime as 2% of claims wey dem lose to abandonment, di service dey deliver roughly 0.975 of im modelled £2M/year benefit — £50,000/year benefit discount wey pure uptime dashboard no dey ever show.

## How e connect to software engineering

DORA metrics na public service operational metrics wey wear different cloth: lead time map to [service standards and transaction metrics](../service-standards-and-transaction-metrics-how-to-measure-public-digital-services/); change failure rate map to rework and complaint rates; MTTR map to how long statutory service no dey available to claimants. Improvement techniques dey transfer for both directions because both na queueing systems wey dey under accountability constraints — see [flow metrics in government delivery](../flow-metrics-for-government-delivery-littles-law-wip-limits-and-flow-efficiency/) for di underlying queueing maths. Note DORA 2025 finding too say AI adoption correlate with higher throughput but *worse* stability — intervention wey get both efficacy and side effects, wey na exactly di net-benefit analysis wey dis group [AI productivity](../ai-productivity-for-public-sector-engineering-teams/) topic work through.

## Wahala dem wey you suppose avoid

- **Metric gaming**: to inflate deployment counts with no-op releases, or to exclude hotfixes from di change-failure count. Define events as precisely as statutory service standard dey define "successful transaction".
- **Cross-department league tables**: DORA clusters dey compare delivery practices, no be services wey get different risk profiles; tax-payment system wey dem rate "high" fit be di right posture wey "elite" go reckless given assurance requirements.
- **To optimize one metric alone**: speed without change failure rate na di classic throughput-instability trade-off — report all four together, no be as single score.

## Sources

- DORA research and the annual *Accelerate State of DevOps Report*. <https://dora.dev/>
- Forsgren N, Humble J, Kim G, *Accelerate: The Science of Lean Software and DevOps*, IT Revolution Press, 2018.
- Cabinet Office, Digital Efficiency Report, 2012.
- DORA, 2025 State of AI-assisted Software Development report. <https://dora.dev/dora-report-2025/>
