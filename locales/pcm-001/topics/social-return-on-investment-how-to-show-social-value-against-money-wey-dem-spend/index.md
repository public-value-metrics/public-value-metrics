# Social Return on Investment: How to Show Social Value Against Money Wey Dem Spend

Social return on investment na framework to measure, monetize and account for broad idea of value — social, environmental and economic — and to express am as ratio against di resources wey dem invest, for example "£1.44 of social value for every £1 invested". Dem design am to extend financial accounting logic go outcomes wey market no dey price, without to lose accounting discipline: every number for SROI must trace go outcome wey stakeholders define, evidence base, and clear adjustment for wetin for happen anyway.

## Wetin make am matter

Social Value UK and Social Value International dey maintain SROI — dem na successor bodies to di SROI Network, wey im "A Guide to Social Return on Investment" (2012) still be di reference methodology. Di framework dey rest on seven principles — involve stakeholders, understand wetin dey change, value di things wey matter, include only wetin material, no over-claim, be transparent, and verify di result — and na principle five, "no over-claim", most SROI reports for ground dey fail. Ratio wey dem produce by skipping deadweight and attribution adjustments no be SROI; na marketing number wey wear SROI cloth. Software engineers wey dey build reporting tools for charities, social enterprises or commissioners need to know di difference, because di tool go either enforce di discipline or make am easy to skip.

## Di maths

SROI dey depend on [theory of change](../theory-of-change-how-to-map-di-road-from-activities-go-long-term-goal/) to identify which outcomes dey inside scope, and e dey express dem with di same accountability chain as [logic model](../logic-model-how-to-map-programme-from-inputs-go-reach-impact/):

```
SROI ratio = Present value of outcomes / Value of inputs

Process:
 1. Establish scope and identify stakeholders whose outcomes will be measured
 2. Map outcomes (a theory of change, evidenced with stakeholders, not assumed)
 3. Evidence outcomes and give them a value using financial proxies
 4. Establish impact: gross value − deadweight − attribution − displacement, then apply drop-off
 5. Calculate the SROI: net present value of impact ÷ value of inputs
 6. Report, use, and embed — the ratio is a communication device, not the endpoint
```

Dem cover deadweight, attribution and displacement for [additionality and deadweight](../additionality-and-deadweight-wetin-programme-really-cause/) and [displacement and attribution](../displacement-and-attribution-how-to-know-who-take-wetin-and-who-fit-claim-credit/); all three dey exist to separate di genuine [counterfactual](../counterfactual-analysis-wetin-for-happen-without-di-intervention/) impact from di gross outcome.

## Example wey dem work out

**Local authority employment programme**: annual input cost na £250,000. Sixty participants move go sustained employment; financial proxy for dat outcome (wellbeing uplift, less reliance on benefits, and tax revenue combine) na £8,500 per person for di first year — see [unit cost databases](../unit-cost-databases-library-of-ready-made-money-values-for-social-outcomes/) for where proxies like dis dey come from.

- Gross outcome value: 60 × £8,500 = £510,000
- Less deadweight (40% for likely find work without di programme): £510,000 × 0.60 = £306,000
- Less attribution (30% of di remaining change na because of support from other agencies): £306,000 × 0.70 = £214,200
- Year 2 outcome at 30% drop-off: £214,200 × 0.70 = £149,940, discounted at 3.5%/year (see [social discount rate](../social-discount-rate-how-government-dey-price-benefits-wey-go-come-later/)): £149,940 ÷ 1.035 = £144,870
- Total present value of impact: £214,200 + £144,870 = £359,070
- **SROI ratio: £359,070 ÷ £250,000 = 1.44**, wey dem report as "£1.44 of social value for every £1 invested"

**Charity**: £60,000 befriending service reduce loneliness for 80 older people, wey dem value at proxy of £1,100/person/year. Gross value na £88,000; after 35% deadweight and 15% attribution, net impact na £88,000 × 0.65 × 0.85 = £48,620, wey be SROI ratio of 0.81 — below break-even, and dat na legitimate and useful finding, no be failure wey you no go write up.

## How e connect to software engineering

SROI calculator wey let user enter outcome counts and proxy values but no get required field for deadweight, attribution or linked theory of change go produce inflated ratios by default, because to leave out adjustments na di easiest road. Build di discipline inside di schema: every outcome row suppose reference stakeholder group, evidenced quantity, financial proxy with im source, and deadweight/attribution fields wey no be optional. See [outcomes vs outputs](../outcomes-and-outputs-di-difference-between-wetin-you-do-and-wetin-e-change/) for di distinction wey SROI outcome-mapping dey depend on, and [logic model](../logic-model-how-to-map-programme-from-inputs-go-reach-impact/) for di chain wey di tool suppose mirror for im data model.

## Wahala dem wey you suppose avoid

- **To skip deadweight and attribution.** Headline ratio without dis adjustments na gross figure, no be net impact figure, and Social Value UK principles clearly require both.
- **To compare ratios across organizations.** SROI ratio dey depend on scope and proxy choices wey dem make case by case; to treat 4:1 ratio from one report as "better" than 2:1 ratio from another one dey ignore say di assumptions no standardized like financial accounting ratio.
- **To double count proxies wey overlap.** If you stack "reduced loneliness" proxy with "improved mental wellbeing" proxy for di same beneficiaries, you fit value one underlying change two times.
- **To skip stakeholder engagement.** Principle one require say make dem define outcomes with di people wey dey experience dem, no be say di analyst wey dey build di model go assume am.

## Sources

- Social Value UK / Social Value International. <https://socialvalueuk.org/>
- The SROI Network, "A Guide to Social Return on Investment" (2012).
- Social Value International, "The Principles of Social Value." <https://www.socialvalueint.org/principles>
