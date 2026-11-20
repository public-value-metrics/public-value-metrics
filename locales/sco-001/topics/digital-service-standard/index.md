# Digital Service Standard (Staundart for digital services)

The GOV.UK Service Standard is the yett ilka central government digital service maun pass afore it can gang live: 14 published pynts, assessed by an independent panel at the hinner end o ilka delivery phase. It is the mechanism that turns "big guid public services" frae a slogan intae a pass/fail decision wi a paper trail — an the direct descendant o the 2012 Government Digital Strategy's "digital by default" mandate.

## Why it maitters

Afore the Service Standard existit, government IT failure wis seldom veesible till launch, an seldom pit doon tae a decision onybody cud pynt tae. The 2012 Government Digital Strategy committit departments tae redesignin the 25 heichest-volume public-facin transactional services as "digital by default", an backit the commitment wi a compliance mechanism: services cuidnae gang live on GOV.UK athoot clearin a service assessment agin whit wis then a 26-pynt staundart (consolidatit tae 18 in 2019, an nou the 14-pynt staundart in force the day, coverin three groups — unnerstaunin user needs, providin a guid service, an uisin the richt technology). A service assessment is a real event: a panel o GDS or departmental assessors reviews evidence, questions the team, an issues a verdict o pass, fail or "not met" agin ilka pynt, published on the service's assessment page. Failin an assessment blocks the service frae movin frae private beta tae public beta, or frae beta tae live — it is a genuine yett, no a review.

## The maths

The Service Standard is a framework, no a formula, but it functions as a stage-gatit decision structure:

```
Discovery  → Alpha assessment  → Beta assessment  → Live assessment
             (not mandatory     (mandatory before   (mandatory before
              for all services,  public beta launch) removing "beta" tag
              but recommended)                       and closing old channel)

Each assessment: evidence + team interview → panel verdict per point
  Met / Partially met / Not met
Overall outcome: Pass / Pass with conditions / Fail (re-assessment required)

Cost of a fail ≈ cost of the next sprint cycle to remediate
              + delay to the [channel-shift-savings](../channel-shift-savings/)
                the service was funded to deliver
```

Pynt 10 ("define what success looks like, and publish performance data") is whit feeds [cost-per-transaction](../cost-per-transaction/) an [service-standards-and-transaction-metrics](../service-staundards-and-transaction-metrics/) — the Staundart mandates the meisurement, no juist the service.

## Wrocht example

**Local authority housin application service**: a cooncil team reaches its beta assessment wi a service that meets 11 o 14 pynts but fails pynt 5 ("make sure everyone can use the service") acause nae assistit-digital route exists for applicants athoot internet access, an fails pynt 9 acause personal data is loggit in plaintext in application error traces.

```
Direct cost of the fail:
  Re-assessment slot: 6–8 week wait for the next available panel
  Remediation sprint: 2 developers × 3 weeks × £550/day ≈ £34,650
  Assisted-digital channel design: 1 researcher × 2 weeks ≈ £5,000

Delay cost: service was forecast to shift 40% of 18,000/year housing
enquiries from £8.50 phone calls to £0.20 digital transactions
  = 7,200 × (£8.50 − £0.20) = £59,760/year foregone, pro-rated for the
    ~2-month delay ≈ £9,960

Total cost of the failed assessment ≈ £49,610
```

The pynt o the arithmetic isnae the precision — it is that a failt assessment haes a real, calculable price, which is exactly why the yett haes teeth.

## Link tae saftware ingineerin

For ingineers, the Staundart reads as an architecture an delivery checklist as muckle as a policy document: pynt 11 ("choose the right tools and technology") an pynt 12 ("make new source code open") are direct ingineerin decisions, an pynt 14 ("operate a reliable service") needs the same SLOs an incident processes onie production system needs. It is the umbrella framework for this group o topics — [cost-per-transaction](../cost-per-transaction/) an [channel-shift-savings](../channel-shift-savings/) are whit the Staundart is tryin tae protect financially, [digital-inclusion](../digital-inclusion/) is whit pynt 5 exists tae guarantee, an [government-as-a-platform](../government-as-a-platform/) components (GOV.UK Notify, Pay, One Login) satisfy pynt 13 ("use and contribute to open standards, common components and patterns") lairgely by default. See an aw [build-vs-buy-in-government](../big-or-buy-in-government/) for hoo the "richt tools" pynt plays oot in procurement decisions.

## Pitfaws

- **Treatin assessment as a launch-day compliance tick-box**: teams that first read the 14 pynts a week afore their beta assessment fail predictably; the Staundart is meant tae shape decisions frae discovery onwards, no audit them efter the fact.
- **Assessin the prototype, no the service**: a slick demo can pass a review that the live, assistit-digital-inclusive, incident-managed version o the service wad fail — assessors are meant tae probe for this gap, but self-certifiet wee services aften skip it.
- **Nae reassessment afore scalin**: a service assessed at 5% rollout disnae automatically bide compliant at 100% — load, failure demand, an edge-case users aw chynge.
- **Confusin the Service Standard wi a design system**: GOV.UK Design System components satisfy some pynts (consistency, accessibility) but the Staundart an aw covers team structure, agile practice, an data ethics — a weel-stylit service can still fail on pynts 2, 6 or 9.

## Sources

- GOV.UK Service Manual, Service Standard. <https://www.gov.uk/service-manual/service-standard>
- GOV.UK Service Manual, point 14: operate a reliable service. <https://www.gov.uk/service-manual/service-standard/point-14-operate-a-reliable-service>
- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
- GOV.UK Service Manual, service assessments. <https://www.gov.uk/service-manual/service-assessments>
