# DORA Metrics for Public Value (DORA-meisures for public value)

The DORA (DevOps Research and Assessment) metrics — deployment frequency, lead time for changes, change failure rate, an time tae restore service, plus reliability as a fift — are the saftware industry's maist validatit delivery-performance benchmarks. Translatit intae public-sector accoontability terms, ilka ane is a direct proxy for hoo fast, an hoo safely, public value reaches a citizen.

## Why it maitters

DORA's decade o research, published annually as the *Accelerate State of DevOps Report* (Forsgren, Humble an Kim's methodology, nou run by Google Cloud), clusters teams intae elite, heich, medium an laich performers. Elite teams deploy on demand, tak unner a day frae commit tae production, fail roughly 5% o chynges, an recover in unner an oor; laich performers deploy monthly or less, tak months, fail aboot 40% o chynges, an recover in weeks. In government thir arenae ingineerin vanity metrics: the Government Digital Service's Service Standard requires teams tae "iterate and improve frequently" an tae be able tae respond quickly tae user need, an departments that cannae deploy safely an aften are structurally unable tae meet that staundart, whitever their user research says. The Cabinet Office's ain digital efficiency wark foond that pushin a citizen frae a failt or slaw digital transaction intae a phone or paper channel is expensive — GDS's 2012 Digital Efficiency Report estimatit that some digital transactions cost as little as 20p agin phone or face-tae-face contacts costin up tae £8.62 — sae a chynge failure in a public-facin service disnae juist cost ingineerin time, it pushes real pounds ontae the contact-centre budget (see [channel shift savings](../channel-shift-savings/)).

## The maths

```
Deployment frequency  = production deployments / time
Lead time for changes = t(deploy) − t(commit), median
Change failure rate   = failed changes / total changes × 100
Time to restore (MTTR) = t(restored) − t(failure), median
Reliability            = SLO attainment (availability, latency, correctness)
```

Public-value translations:

```
Lead time      → weeks in the pipeline × CoD, see cost-of-delay-in-public-programmes
Failure rate   → citizen-facing incident rate: CFR × cost per redirected
                 contact-centre call (or per failed statutory transaction)
Recovery time  → service outage harm: MTTR × (claims/applications blocked
                 per hour) × downstream cost or wellbeing loss per unit
Reliability    → benefit discount: a service at 99% availability delivers
                 ≈ 0.99 of its modelled benefit — the delivery analogue
                 of take-up or compliance shortfall
```

## Wrocht example

A local authority's benefits-claims portal team, afore an efter a delivery-ingineerin investment:

```
                    Before      After
Deploys             monthly     weekly
Lead time           8 weeks     5 days
CFR                 30%         10%
MTTR                3 days      4 hours
```

The team ships aboot 25 improvements/year, average value £8,000/week ([cost of delay](../cost-o-delay-in-public-programmes/)). Cuttin lead time by roughly 7.3 weeks pulls ilka improvement's benefit stream forrit: 25 × 7.3 × 8,000 ≈ **£1,460,000/year** o value deliverit sooner. On failure rate: 25 × (0.30 − 0.10) = 5 fewer failt chynges/year; ilka failt chynge on a public portal typically redirects an estimatit 2,000 citizens tae the phone channel at £8.62 versus 20p, a net cost o roughly £8.42 × 2,000 ≈ £16,840 per incident, sae avoidin 5 incidents saves ≈ **£84,200/year**. The delivery-ingineerin investment is valued in the same currency as onie ither public-value case.

## Wrocht example continued: reliability

If the portal runs at 97% availability raither nor a target 99.5%, an ilka percentage pynt o doontime is modellit as 2% o claims lost tae abandonment, the service is deliverin roughly 0.975 o its modellit £2M/year benefit — a £50,000/year benefit discoont that a pure uptime dashboard never surfaces.

## Link tae saftware ingineerin

DORA metrics are a public service's operational metrics wearin different claes: lead time maps tae [service standards an transaction metrics](../service-staundards-and-transaction-metrics/); chynge failure rate maps tae rework an complaint rates; MTTR maps tae hoo lang a statutory service is unavailable tae claimants. Improvement techniques transfer in baith directions acause baith are queueing systems unner accoontability constraints — see [flow metrics in government delivery](../flow-metrics-in-government-delivery/) for the underlyin queueing maths. Note an aw DORA's 2025 finding that AI adoption correlates wi heicher throughput but *worse* stability — an intervention wi baith efficacy an side effects, which is exactly the net-benefit analysis this group's [AI productivity](../ai-productivity-in-the-public-sector/) topic warks throu.

## Pitfaws

- **Metric gamin**: inflatin deployment coonts wi no-op releases, or excludin hotfixes frae the chynge-failure coont. Define events as precisely as a statutory service staundart defines a "successful transaction".
- **Cross-department league tables**: DORA clusters compare delivery practices, no services wi different risk profiles; a tax-payment system ratit "heich" micht be the richt posture whaur "elite" wad be reckless gien assurance requirements.
- **Optimizin ae metric alane**: speed athoot chynge failure rate is the classic throughput-instability trade-aff — report aw fower thegither, no as a single score.

## Sources

- DORA research and the annual *Accelerate State of DevOps Report*. <https://dora.dev/>
- Forsgren N, Humble J, Kim G, *Accelerate: The Science of Lean Software and DevOps*, IT Revolution Press, 2018.
- Cabinet Office, Digital Efficiency Report, 2012.
- DORA, 2025 State of AI-assisted Software Development report. <https://dora.dev/dora-report-2025/>
