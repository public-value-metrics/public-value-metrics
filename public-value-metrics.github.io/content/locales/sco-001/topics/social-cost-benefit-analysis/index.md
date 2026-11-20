# Social cost-benefit analysis (SCBA)

Social cost-benefit analysis turns ilka cost an benefit o a policy or programme — merkit an
non-merkit — intae a common monetary unit, discoonts future flows tae present value, an nets them
aff tae mak a single nummer: daes this proposal mak society better aff, an bi hou muckle?

## Why it maitters

SCBA is the default quantitative method in the economic case o
[Green Book appraisal](../green-book-appraisal/): HM Treasury's guidance requires proposals tae
shaw a positive net present social value (NPSV) wherever benefits can be credibly monetisit,
uisin willingness-tae-pey as the basic valuation principle for non-merkit guids
(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>,
Chapter 5). The discipline it enforces is that "social" cost-benefit analysis isnae the same
exercise as a private-sector investment appraisal: it maun include costs an benefits that fa on
third pairties wha arenae pairty tae the transaction (externalities), it maun uise the
[social discoont rate](../social-discoont-rate/) raither nor a commercial cost o capital, an it
shuid apply [distributional weichtin](../distributional-weighting/) whaur a pund maitters mair tae
a puirer hoosehald nor a richer yin.

Whaur SCBA braks doun is exactly whaur its critics expect: guids wi nae merkit analogue — clean
air, social cohesion, the value o a life saved — hae tae be monetisit uisin
[stated preference](../valuation-bi-stated-preference/) or [revealed preference](../revealed-preference-valuation/)
methods, or a [shadae price](../shadae-pricin/) haes tae be constructit. Whan monetisation is
contestit raither nor juist difficult, the Green Book itsel recommends fawin back tae
[cost-effectiveness analysis](../cost-effectiveness-analysis-in-government/) or
[multi-criteria decision analysis](../multi-criteria-decision-analysis/) raither nor forcin a
nummer that naebody believes.

## The maths

```
NPSV = Σ [t=0 to T] (Benefit_t − Cost_t) / (1 + r)^t

whaur:
  Benefit_t = aw monetisit benefits in year t, includin non-merkit
              guids valued via stated/revealed preference or shadae price
  Cost_t    = aw monetisit costs in year t, includin opportunity cost
              o resources (see ../opportunity-cost-in-public-spending/)
  r         = social discoont rate (HM Treasury sets 3.5% decliniin tae
              laicher rates ayont year 30, per Green Book Annex A)
  T         = appraisal period

Benefit-cost ratio (BCR) = Σ PV(Benefits) / Σ PV(Costs)
```

A BCR abuin 1 (or NPSV abuin zero) shaws net social value. The Green Book's value-for-siller
categories (as uised in transport an infrastructure appraisal) label BCR ranges: ablow 1.0 is puir
value for siller, 1.0–1.5 is laich, 1.5–2.0 is medium, 2.0–4.0 is high, an abuin 4.0 is very high.
Sensitivity analysis — re-rinnin the NPSV unner pessimistic an optimistic assumptions — is
mandatory, nae optional, acause monetisit non-merkit benefits cairry wide uncertainty bands.

## Wrocht example

**Local authority**: a cooncil appraises a £3m investment in a new cyclin an walkin netwark
ower a 20-year appraisal period at a 3.5% discoont rate.

```
Costs: £3m capital in year 0, £50,000/year maintenance (years 1-20)
PV(maintenance) ≈ £50,000 × 14.2 (20-year annuity factor at 3.5%) ≈ £710,000
Total PV(costs) ≈ £3.71m

Benefits (aw monetisit via publisht DfT/WHO valuation tools):
  Health benefit frae increasit pheesical activity: £180,000/year
  Absenteeism reduction: £40,000/year
  Decongestion (fewer car trips): £60,000/year
  Total benefit stream: £280,000/year
PV(benefits) ≈ £280,000 × 14.2 ≈ £3.98m

NPSV = £3.98m − £3.71m = +£0.27m
BCR = 3.98 / 3.71 = 1.07 → "laich" value for siller
```

The scheme clears the bar but jist aboot; a sensitivity rin at a 20% laicher health-benefit estimate
(reflectin genuine uncertainty in pheesical-activity valuation) flips the BCR ablow 1.0, that is
exactly why the Green Book requires the sensitivity table tae be publisht alangside the headline
nummer, nae jist the central estimate.

**Charity**: an infant-mortality prevention programme costin £500,000/year is evaluatit uisin the
value o a statistical life (VSL) — a shadae price, nae an observed merkit price — o roughly
£2.1m (HM Treasury's 2023-updatit figure, itsel derived frae stated-preference studies). Avertin
yin infant daith per year agin a £500,000 cost gies a BCR o 4.2, comfortably "very high" value
for siller — but the hail result rests on the VSL figure, that is why ony SCBA uisin VSL maun
disclose it as an assumption, nae a fact.

## Link tae saftware ingineerin

SCBA is the natural frame for platform an infrastructure investment decisions in government
saftware — comparin a shared identity platform agin depairtmental pynt solutions, for
instance, requires monetisin benefits like reducit duplicate onboardin cost, reducit fraud, an
quicker time-tae-service that hae nae merkit price on their ain. Engineers biggin the underlyin
service shuid expect programme leads tae ask for inputs tae this analysis: unit costs o
transactions (see [cost per transaction](../cost-per-transaction/)), expectit volumes, an
degradation/doun-time costs. The discipline that maitters maist tae import: discoont future benefits,
name the counterfactual baseline explicitly (see [counterfactual analysis](../counterfactual-analysis/)),
an never present a single pynt estimate athoot its sensitivity range.

## Pitfaws

- **Double-coontin benefits.** Coontin baith "time saved" an "productivity gained frae that
  time" as separate benefit lines owerstates the case; time saved is the benefit, its doun-stream
  uise isnae an extra yin unless independently evidenced.
- **Leavin oot displacit costs.** A scheme that muives congestion frae yin road tae anither, or muives
  fraud frae yin channel tae anither, haesnae creatit the net benefit its headline NPSV implies —
  see [displacement an attribution](../displacement-an-attribution/).
- **Uisin a private discoont rate.** Applyin a commercial cost o capital (say 8–10%) insteid o
  the social discoont rate systematically unnervalues lang-horizon public benefits like health an
  environmental gains — see [social discoont rate](../social-discoont-rate/).
- **Monetisin the uncontestit an hand-wavin the contestit.** If twa-thirds o a proposal's
  benefit is a confidently monetisit efficiency savin an yin-third is a shakily monetisit
  wellbein gain, the headline NPSV quietly blends a hard nummer wi a saft yin; report them
  separately.

## Sources

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Chapter 5.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury. "Green Book supplementary guidance: value of a statistical life." 2023.
  <https://www.gov.uk/government/publications/green-book-supplementary-guidance-value-of-a-statistical-life>
- Department for Transport. "TAG unit A1.1: cost-benefit analysis." Transport Analysis Guidance.
  <https://www.gov.uk/guidance/transport-analysis-guidance-tag>
