# Digital Inclusion

Digital inclusion is the discipline o makkin sure "digital by default" disnae become "digital anely" — that public services designit roond the cheapest channel still wark for the citizens wha cannae or winnae uise it unassistit. GDS coinit the specific delivery mechanism, "assisted digital", as a mandatory requirement for ilka government digital service, no an optional extra.

## Why it maitters

The 2012 Government Digital Strategy set the ambition plainly: digital services shuid be biggit digital by default, but the strategy itsel acknowledged that aboot 10% o UK adults wadnae be able tae uise them athoot help, an committit departments tae providin assistit digital support — a human-mediatit route, by phone, in person, or through an intermediary — as pairt o the service, no a separate fallback bolted on later. That commitment is nou [digital-service-standard](../digital-service-standard/) pynt 5, "mak sure awbody can uise the service". The scale o continuin exclusion is trackit by Lloyds Banking Group's annual UK Consumer Digital Index: the 2024 edition fund that aboot 1.6 million fowk in the UK bide offline, an that this group skews heavily tae fowk aged 70–79, thae earnin unner £35,000, an thae wha are retirt or unemployit — precisely the population maist likely tae depend on the public services bein redesignit. The same report fund anely 48% o the UK workforce could complete aw 20 tasks on the Essential Digital Skills framework, meanin exclusion isnae binary connectivity, it's a spectrum o skill, confidence an trust that a simple "haes broadband" metric misses athegither.

## The maths

Digital inclusion is a framework an equity check raither than a single formula, but it composes wi quantitative value assessment through [distributional-weighting](../distributional-weighting/):

```
Naive channel-shift value:
  value = volume shiftit × (cost_auld − cost_digital)     [see channel-shift-savings]

Inclusion-adjustit value:
  value = (volume shiftit × unweightit saving)
        − (excludit uisers × cost o assistit-digital provision)
        − (distributional weight adjustment for hairm tae excludit
           groups wha lose access or face degradit service quality)

Assistit digital isnae the residual cost o failure — it is a
designit channel wi its ain [cost-per-transaction](../cost-per-transaction/),
typically faur heicher per-transaction than self-service digital but
still usually cheaper than the legacy channel it pairtially replaces.
```

## Wrocht example

**Universal Credit-style national benefit service**: 2.5 million claims/year, assessit as needin assistit digital support for an estimatit 10% o claimants per the Government Digital Strategy plannin assumption.

```
Excludit/assistit-digital cohort = 2,500,000 × 10% = 250,000 claims/year

Assistit-digital channel cost (phone + face-tae-face support,
staffit tae haundle vulnerability an complexity) ≈ £9.50/claim
  = 250,000 × £9.50 = £2,375,000/year

Self-service digital cost for the ither 90% ≈ £0.40/claim
  = 2,250,000 × £0.40 = £900,000/year

Blendit cost per transaction = (2,375,000 + 900,000) / 2,500,000
  = £1.31/claim

A design that skips assistit digital tae hit a lawer headline
cost-per-transaction (e.g. £0.40 blendit, ignorin the 250,000
excludit claimants) disnae eliminate that £2.375m cost — it
converts it intae unclaimit entitlements, appeals, an doonstream
crisis-service demand that lands on a different budget athegither.
```

## Link tae saftware ingineerin

Assistit digital is a designit channel, which means it haes interfaces, SLAs an instrumentation like onie ither: a phone-based caseworker tool, an intermediary portal for Citizens Advice or a local authority, or an in-person kiosk flow. Treatin it as an efterthocht — a phone nummer in sma print raither than a channel considert frae discovery — is the single commonest wey services fail [digital-service-standard](../digital-service-standard/) pynt 5 at assessment. Digital inclusion is the equity lens on ilka ither topic in this group: it caps hoo aggressively [channel-shift-savings](../channel-shift-savings/) can be realizit, it's a line item that maun be includit honestly in [cost-per-transaction](../cost-per-transaction/), an it's the direct application o [distributional-weighting](../distributional-weighting/) tae a digital services context — a saving that lands disproportionately on fowk wha are awready digitally an economically excludit shuid be weightit doun, no treatit as equivalent tae a saving spreid evenly athort the population.

## Pitfaws

- **"Digital by default" read as "digital anely"**: shuttin the phone line or coonter aince digital take-up crosses a threshold, athoot verifyin the remainin cohort haes a genuinely uisable alternative.
- **Meisurin inclusion by binary connectivity**: "haes broadband" or "awns a smartphone" is a puir proxy for ability tae complete a specific transaction — the Essential Digital Skills gap (anely 48% o the UK workforce completes aw 20 tasks, per Lloyds 2024) shaws skills an confidence maitter as muckle as access.
- **Costin assistit digital as a roondin error**: budgetin it as a sma contingency line raither than a proper channel wi its ain [cost-per-transaction](../cost-per-transaction/), syne bein surprised whan it's unnerfundit an unnerstaffit at launch.
- **Surveyin anely successfu digital completers**: satisfaction an uisability research run wholly in-service misses the fowk wha niver got that faur, which is exactly the population digital inclusion wark is meant tae protect.

## Sources

- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
- GOV.UK Service Manual, service standard, point 5: make sure everyone can use the service. <https://www.gov.uk/service-manual/service-standard/point-5-make-sure-everyone-can-use-the-service>
- Lloyds Banking Group, Consumer Digital Index. <https://www.lloydsbank.com/banking-with-us/whats-happening/consumer-digital-index.html>
- Ofcom, digital exclusion review. <https://www.ofcom.org.uk/>
