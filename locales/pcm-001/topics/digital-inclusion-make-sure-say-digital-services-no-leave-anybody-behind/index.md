# Digital Inclusion: Make Sure Say Digital Services No Leave Anybody Behind

Digital inclusion na di discipline to make sure say "digital by default" no turn "digital only" — say public services wey dem design around di cheapest channel still work for citizens wey no fit or no want use am without help. GDS coin di specific delivery mechanism, "assisted digital", as mandatory requirement for every government digital service, no be optional extra.

## Wetin make am matter

Di 2012 Government Digital Strategy set di ambition plainly: dem suppose build digital services digital by default, but di strategy itself acknowledge say around 10% of UK adults no go fit use dem without help, and e commit departments to provide assisted digital support — human-mediated route, by phone, in person, or through intermediary — as part of di service, no be separate fallback wey dem bolt on later. Dat commitment now be [digital-service-standard](../digital-service-standard-di-rules-wey-digital-public-service-must-pass/) point 5, "make sure everyone can use the service". Lloyds Banking Group annual UK Consumer Digital Index dey track di scale of continuing exclusion: di 2024 edition find say around 1.6 million people for UK still dey offline, and say dis group lean heavily toward people wey age 70–79, those wey earn under £35,000, and those wey don retire or no get job — exactly di population wey most likely depend on di public services wey dem dey redesign. Di same report find say only 48% of di UK workforce fit complete all 20 tasks for di Essential Digital Skills framework, wey mean say exclusion no be binary connectivity, na spectrum of skill, confidence and trust wey simple "get broadband" metric miss completely.

## Di maths

Digital inclusion na framework and equity check instead of single formula, but e dey compose with quantitative value assessment through [distributional-weighting](../distributional-weighting-to-give-different-value-to-pound-based-on-who-receive-am/):

```
Naive channel-shift value:
  value = volume shifted × (cost_old − cost_digital)     [see channel-shift-savings]

Inclusion-adjusted value:
  value = (volume shifted × unweighted saving)
        − (excluded users × cost of assisted-digital provision)
        − (distributional weight adjustment for harm to excluded
           groups wey lose access or face degraded service quality)

Assisted digital no be di residual cost of failure — na designed channel
wey get im own [cost-per-transaction](../cost-per-transaction-wetin-e-really-cost-to-run-government-digital-service/),
usually far higher per-transaction than self-service digital but
still usually cheaper than di legacy channel wey e partially replace.
```

## Example wey dem work out

**Universal Credit-style national benefit service**: 2.5 million claims/year, wey dem assess say e need assisted digital support for estimated 10% of claimants according to di Government Digital Strategy planning assumption.

```
Excluded/assisted-digital cohort = 2,500,000 × 10% = 250,000 claims/year

Assisted-digital channel cost (phone + face-to-face support,
staffed to handle vulnerability and complexity) ≈ £9.50/claim
  = 250,000 × £9.50 = £2,375,000/year

Self-service digital cost for di other 90% ≈ £0.40/claim
  = 2,250,000 × £0.40 = £900,000/year

Blended cost per transaction = (2,375,000 + 900,000) / 2,500,000
  = £1.31/claim

Design wey skip assisted digital to hit lower headline
cost-per-transaction (e.g. £0.40 blended, wey ignore di 250,000
excluded claimants) no eliminate dat £2.375m cost — e
convert am into unclaimed entitlements, appeals, and downstream
crisis-service demand wey land for completely different budget.
```

## How e connect to software engineering

Assisted digital na designed channel, wey mean say e get interfaces, SLAs and instrumentation like any other: phone-based caseworker tool, intermediary portal for Citizens Advice or local authority, or in-person kiosk flow. To treat am as afterthought — phone number for small print instead of channel wey dem consider from discovery — na di single most common way services dey fail [digital-service-standard](../digital-service-standard-di-rules-wey-digital-public-service-must-pass/) point 5 for assessment. Digital inclusion na di equity lens on every other topic for dis group: e dey cap how aggressively dem fit realize [channel-shift-savings](../channel-shift-savings-money-wey-dem-save-when-people-move-to-digital/), na line item wey dem must include honestly for [cost-per-transaction](../cost-per-transaction-wetin-e-really-cost-to-run-government-digital-service/), and na di direct application of [distributional-weighting](../distributional-weighting-to-give-different-value-to-pound-based-on-who-receive-am/) to digital services context — saving wey land disproportionately on people wey already digitally and economically excluded suppose dem weight am down, no be to treat am as equivalent to saving wey spread evenly across di population.

## Wahala dem wey you suppose avoid

- **"Digital by default" wey dem read as "digital only"**: to close di phone line or counter once digital take-up cross threshold, without to verify say di remaining cohort get genuinely usable alternative.
- **To measure inclusion by binary connectivity**: "get broadband" or "own smartphone" na poor proxy for ability to complete specific transaction — di Essential Digital Skills gap (only 48% of di UK workforce complete all 20 tasks, according to Lloyds 2024) show say skills and confidence matter as much as access.
- **To cost assisted digital as rounding error**: to budget am as small contingency line instead of proper channel with im own [cost-per-transaction](../cost-per-transaction-wetin-e-really-cost-to-run-government-digital-service/), and den dem go surprise when e underfunded and understaffed for launch.
- **To survey only successful digital completers**: satisfaction and usability research wey dem run entirely in-service dey miss di people wey never reach dat far, wey be exactly di population wey digital inclusion work suppose protect.

## Sources

- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
- GOV.UK Service Manual, service standard, point 5: make sure everyone can use the service. <https://www.gov.uk/service-manual/service-standard/point-5-make-sure-everyone-can-use-the-service>
- Lloyds Banking Group, Consumer Digital Index. <https://www.lloydsbank.com/banking-with-us/whats-happening/consumer-digital-index.html>
- Ofcom, digital exclusion review. <https://www.ofcom.org.uk/>
