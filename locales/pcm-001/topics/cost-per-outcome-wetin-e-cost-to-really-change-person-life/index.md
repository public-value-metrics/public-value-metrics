# Cost per Outcome: Wetin E Cost to Really Change Person Life

Cost per outcome na total programme spend wey dem divide by di number of people wey achieve defined, meaningful change for dia circumstances — no be di number wey just receive service. Na di sharpest efficiency metric wey funder or delivery team fit use, because e force one question wey most charities dey avoid: wetin, exactly, count as success?

## Wetin make am matter

Food bank fit report two very different numbers from di same year accounts. Cost per food parcel wey dem distribute fit be £15. Cost per household wey go on to achieve food security — wey no need emergency food aid again, wey dem verify for follow-up point — fit be £340. Both na true. Only one tell funder whether di money dey work. Di gap between dem na di gap between output and outcome: parcel wey dem hand over na output; household wey no dey crisis again na outcome. See [outcomes vs outputs](../outcomes-and-outputs-di-difference-between-wetin-you-do-and-wetin-e-change/).

Di UK third sector don spend two decades to build infrastructure to force dis distinction. New Philanthropy Capital "four pillar approach" to charity effectiveness clearly ask organizations to state dia outcomes before dia outputs, and Inspiring Impact — di UK funder-backed impact measurement collaborative — publish Outcomes Matrix wey many grant applications now require charities to complete. Di Trussell Trust annual "State of Hunger" research programme, wey dem run with Heriot-Watt University, exist exactly because parcel counts alone no tell you whether people escape food insecurity.

Cost per outcome only mean something once you don fix di counterfactual: outcome wey happen "anyway" no be outcome wey di programme buy. See [counterfactual analysis](../counterfactual-analysis-wetin-for-happen-without-di-intervention/) and [displacement and attribution](../displacement-and-attribution-how-to-know-who-take-wetin-and-who-fit-claim-credit/).

## Di maths

```
Cost per outcome = Total programme cost / Number of beneficiaries wey achieve di defined outcome

where:
  Total programme cost   = direct delivery cost + fair share of overhead
  Defined outcome        = pre-specified, measurable state change
                            (e.g. "food secure at 6-month follow-up",
                            no be "received a food parcel")
```

Compare am against [unit cost databases](../unit-cost-databases-library-of-ready-made-money-values-for-social-outcomes/) (e.g. sector-specific unit cost benchmarks) to judge whether particular cost per outcome good, average, or poor compared to similar interventions.

## Example wey dem work out

**Food bank, one year**:

- Total programme cost: £450,000
- Parcels wey dem distribute: 30,000
- Cost per parcel (output metric): £450,000 / 30,000 = **£15**

Di charity also run six-month follow-up survey with sample of households, and e find say 35% of households wey receive three or more parcels report say dem no need emergency food aid again and dem score above di food-security threshold for standard food-security survey module. Of 1,800 households wey receive three-plus parcels dat year, 630 achieve dat outcome.

```
Cost per outcome = £450,000 / 630 = £714 per household wey achieve food security
```

Dat £714 figure na di one wey funder wey dey compare dis charity with cash-transfer pilot or debt-advice service suppose use — no be £15. If similar cash-transfer programme for di same region achieve food security at £500 per household, di food bank no clearly be di more efficient route to di same outcome, even though im per-parcel cost look cheap.

## How e connect to software engineering

Most case-management systems dem build to log outputs, because outputs na wetin dey happen inside di transaction (dem hand over parcel, dem submit form). Outcomes usually happen later, often outside di normal capture window of di system, and e require deliberate design decision: build follow-up mechanism (survey trigger, re-contact workflow, data-linkage exercise) as first-class feature, no be afterthought wey dem bolt on for annual report. Engineers wey dey build grant management or case management platforms for di sector suppose treat "wetin be di outcome event, and how we go observe am" as requirements question wey dem ask before dem fix di data model — e hard far pass to retrofit outcome field than output counter. See [outcomes vs outputs](../outcomes-and-outputs-di-difference-between-wetin-you-do-and-wetin-e-change/) and [logic model](../logic-model-how-to-map-programme-from-inputs-go-reach-impact/) for how to structure dat requirements conversation, and [cost per beneficiary](../cost-per-beneficiary-wetin-e-cost-to-reach-each-person/) for di faster, cruder metric wey teams dey reach for when outcome tracking never build.

## Wahala dem wey you suppose avoid

- **To report outputs wey dem dress as outcomes.** "People reached" no be "people helped." If system log fit produce di metric without follow-up contact, e almost certainly na output.
- **Denominator gaming.** To narrow di outcome population to "those wey complete di programme" dey quietly drop di people wey drop out — often di hardest cases — and e dey inflate di apparent rate. State di denominator as everyone wey start, no be everyone wey finish.
- **No counterfactual.** To count anybody wey achieve di outcome, including those wey for achieve am anyway, dey overstate wetin di programme buy. See [counterfactual analysis](../counterfactual-analysis-wetin-for-happen-without-di-intervention/).
- **To compare across outcome definitions wey no match.** "Food secure" wey dem measure with validated survey module no comparable to "food secure" wey dem self-report for satisfaction form; cost-per-outcome league table only honest when di outcome definitions match.

## Sources

- New Philanthropy Capital (NPC), "Four Pillar Approach" to charity effectiveness. <https://www.thinknpc.org/resource-hub/four-pillar-approach/>
- Inspiring Impact, Outcomes Matrix and impact measurement resources. <https://inspiringimpact.org/>
- Trussell Trust and Heriot-Watt University, "State of Hunger" research programme. <https://www.trusselltrust.org/state-of-hunger/>
- GiveWell, "Our criteria" (cost-effectiveness as the leading criterion for charity recommendation). <https://www.givewell.org/how-we-work/our-criteria>
