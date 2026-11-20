# Digital Service Standard: Di Rules wey Digital Public Service Must Pass

GOV.UK Service Standard na di gate wey every central government digital service must pass before e fit go live: 14 points wey dem don publish, wey independent panel dey assess for end of each delivery phase. Na di mechanism wey turn "build good public services" from slogan to pass/fail decision wey get paper trail — and na di direct pikin of di 2012 Government Digital Strategy "digital by default" order.

## Wetin make am matter

Before Service Standard come exist, wen government IT fail, pipo no too dey see am until launch, and e no easy to point to di decision wey cause am. Di 2012 Government Digital Strategy make departments promise say dem go redesign di 25 transactional services wey get di highest volume of public users as "digital by default", and dem back di promise with compliance mechanism: service no fit go live for GOV.UK until e clear service assessment against wetin dem call 26-point standard dat time (dem join am to 18 for 2019, and now na 14-point standard dey work, wey cover three groups — to understand wetin users need, to provide good service, and to use di right technology). Service assessment na real event: panel of GDS or department assessors go review evidence, ask di team questions, and give verdict of pass, fail or "not met" for each point, wey dem go publish for di service assessment page. If service fail assessment, e no fit move from private beta go public beta, or from beta go live — na real gate, no be just review.

## Di maths

Service Standard na framework, no be formula, but e dey work as stage-gated decision structure:

```
Discovery  → Alpha assessment  → Beta assessment  → Live assessment
             (no be must for    (must before        (must before
              all services,      public beta launch) dem remove "beta" tag
              but dem recommend)                     and close di old channel)

Each assessment: evidence + team interview → panel verdict per point
  Met / Partially met / Not met
Overall outcome: Pass / Pass with conditions / Fail (dem go assess again)

Cost of a fail ≈ cost of di next sprint cycle to fix am
              + delay to di [channel-shift-savings](../channel-shift-savings-money-wey-dem-save-when-people-move-to-digital/)
                wey dem fund di service to deliver
```

Point 10 ("define what success looks like, and publish performance data") na im dey feed [cost-per-transaction](../cost-per-transaction-wetin-e-really-cost-to-run-government-digital-service/) and [service-standards-and-transaction-metrics](../service-standards-and-transaction-metrics-how-to-measure-public-digital-services/) — di Standard dey order di measurement, no be only di service.

## Example wey dem work out

**Local authority housing application service**: council team reach dia beta assessment with service wey meet 11 of 14 points but e fail point 5 ("make sure everyone can use the service") because no assisted-digital route dey for applicants wey no get internet, and e fail point 9 because dem dey log personal data as plaintext inside application error traces.

```
Direct cost of di fail:
  Re-assessment slot: 6–8 week wait for di next panel wey dey available
  Remediation sprint: 2 developers × 3 weeks × £550/day ≈ £34,650
  Assisted-digital channel design: 1 researcher × 2 weeks ≈ £5,000

Delay cost: dem forecast say di service go shift 40% of 18,000/year housing
enquiries from £8.50 phone calls to £0.20 digital transactions
  = 7,200 × (£8.50 − £0.20) = £59,760/year wey dem lose, pro-rated for
    di ~2-month delay ≈ £9,960

Total cost of di failed assessment ≈ £49,610
```

Di point of di arithmetic no be say e must dey exact — na say failed assessment get real price wey you fit calculate, and na why di gate get teeth.

## How e connect to software engineering

For engineers, di Standard dey read like architecture and delivery checklist as much as policy document: point 11 ("choose the right tools and technology") and point 12 ("make new source code open") na direct engineering decisions, and point 14 ("operate a reliable service") need di same SLOs and incident processes wey any production system need. Na di umbrella framework for dis group of topics — [cost-per-transaction](../cost-per-transaction-wetin-e-really-cost-to-run-government-digital-service/) and [channel-shift-savings](../channel-shift-savings-money-wey-dem-save-when-people-move-to-digital/) na wetin di Standard dey try protect for money side, [digital-inclusion](../digital-inclusion-make-sure-say-digital-services-no-leave-anybody-behind/) na wetin point 5 dey for make sure, and [government-as-a-platform](../government-as-a-platform-shared-components-wey-many-services-fit-use/) components (GOV.UK Notify, Pay, One Login) dey satisfy point 13 ("use and contribute to open standards, common components and patterns") mostly by default. Check [build-vs-buy-in-government](../build-or-buy-for-government-how-to-choose/) too to see how di "right tools" point dey play out for procurement decisions.

## Wahala dem wey you suppose avoid

- **To treat assessment as compliance checkbox for launch day**: teams wey first read di 14 points one week before dia beta assessment go fail, as e dey expected; di Standard suppose shape decisions from discovery go forward, no be to audit dem afterwards.
- **To assess di prototype, no be di service**: fine demo fit pass review wey di live version of di service — wey get assisted-digital inclusion and incident management — go fail; assessors suppose probe dis gap, but minor services wey dey self-certify often skip am.
- **No reassessment before scaling**: service wey dem assess at 5% rollout no go automatically remain compliant at 100% — load, failure demand, and edge-case users all dey change.
- **To confuse Service Standard with design system**: GOV.UK Design System components dey satisfy some points (consistency, accessibility) but di Standard cover team structure, agile practice, and data ethics too — service wey fine to look fit still fail points 2, 6 or 9.

## Sources

- GOV.UK Service Manual, Service Standard. <https://www.gov.uk/service-manual/service-standard>
- GOV.UK Service Manual, point 14: operate a reliable service. <https://www.gov.uk/service-manual/service-standard/point-14-operate-a-reliable-service>
- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
- GOV.UK Service Manual, service assessments. <https://www.gov.uk/service-manual/service-assessments>
