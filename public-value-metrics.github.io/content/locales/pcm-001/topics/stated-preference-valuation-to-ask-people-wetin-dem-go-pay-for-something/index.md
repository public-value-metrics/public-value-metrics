# Stated Preference Valuation: To Ask People Wetin Dem Go Pay For Something

Stated preference methods dey estimate di value of non-market good by to ask people directly wetin dem go willing to pay for am, or wetin dem go willing to accept as compensation to give am up, usually through structured survey wey describe hypothetical scenario. Contingent valuation na di most well-known technique inside dis family.

## Wetin make am matter

Green Book Annex 2 (supplementary guidance on how to value non-market impacts) endorse stated preference methods for goods wey no get any market transaction wey dem fit observe to infer value from — air quality, biodiversity, flood protection, di existence value of landscape wey person fit never visit (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>). Defra don publish im own stated-preference guidance for environmental appraisal exactly because plenty environmental value (habitat preservation, water quality) no get proxy market at all, no be like noise, wey at least correlate with house prices wey dem fit observe (see [revealed preference valuation](../revealed-preference-valuation-how-to-value-wetin-no-get-market-price-from-wetin-people-really-do/)).

Di main attraction of stated preference — e fit value literally anything, including goods wey nobody ever trade — na also di source of im credibility problem. Because respondents no dey really spend money, contingent valuation surveys dey vulnerable to hypothetical bias (people dey overstate willingness-to-pay when no real budget constraint dey), embedding effects (dem value di same good in different way depending on wetin else dey for di survey), and starting-point bias for bidding-game designs. Di 1993 NOAA panel on contingent valuation, wey dem gather after di Exxon Valdez oil spill litigation, set out design standards — binary "would you pay £X, yes/no" referendum format instead of open-ended bidding, and mandatory reminders of di respondent actual budget constraint — wey still be di reference standard for surveys wey fit defend.

## Di maths

```
Contingent valuation (referendum format):
  Present a binary choice: "would you pay £X per year for outcome Y? yes/no"
  Vary X randomly across respondents.
  Fit willingness-to-pay as a function of the yes/no response rate at each X.

Mean WTP = area under the estimated demand curve
Aggregate value = Mean WTP × affected population

Choice experiment (discrete choice modelling) variant:
  Present respondents with repeated choices between bundles of attributes
  (including a cost attribute), estimate implicit prices for each
  non-cost attribute from the trade-offs respondents reveal.
```

For current UK practice, dem generally prefer di choice-experiment variant pass single-question contingent valuation because to force respondents to trade off several attributes against cost many times dey produce estimates wey consistent more inside themselves and wey hard to game pass single yes/no question.

## Example wey dem work out

**National government**: Defra commission contingent valuation survey to value river water-quality improvement programme. Referendum-format survey of 2,000 households find say 62% go pay £40/year through hypothetical water bill supplement, and di estimated demand curve give mean willingness-to-pay of £28/year per household.

```
Mean WTP = £28/household/year
Households in catchment = 340,000
Aggregate annual value = £28 × 340,000 = £9.52m/year

Over a 20-year appraisal period at 3.5% discount rate (annuity factor ≈ 14.2):
PV(benefit) ≈ £9.52m × 14.2 ≈ £135m
```

Dem go then compare dis aggregate figure against di cost side of di programme [social cost-benefit analysis](../social-cost-benefit-analysis-how-to-weigh-every-cost-and-benefit-to-society/). Di Green Book require say dem must report dis kind of stated-preference evidence beside im confidence interval and survey methodology, no be as bare point estimate, exactly because di number wey dey underneath fragile pass market price.

**Charity**: heritage trust survey visitors and non-visitors about willingness-to-pay to stop di closure of historic building wey none of di two groups necessarily visit (im existence value). Because non-visitors wey no go ever see di building still report positive WTP, di survey capture existence and bequest value wey simple count of visitor-fee revenue (revealed-preference proxy) go completely miss — dis show di genuine advantage of stated preference where no market transaction of any kind dey to reveal value.

## How e connect to software engineering

Stated preference methods no dey apply directly to software engineering work often, but engineers wey dey build citizen consultation platforms, budget-participation tools or public survey infrastructure dey often build di instrument wey di economics depend on. To get di survey design details right — randomized bid amounts, binary referendum framing instead of open-ended questions, clear budget-constraint reminders — no be UX nicety, na wetin make di valuation wey follow fit defend under scrutiny; in-app survey wey dem design badly fit invalidate many months of economic analysis wey follow. See [citizen satisfaction metrics](../citizen-satisfaction-metrics-how-people-rate-public-services/) for di more general discipline of how to elicit public opinion data wey go carry analytical weight.

## Wahala dem wey you suppose avoid

- **Open-ended "how much would you pay?" questions.** Dem dey carry strategic and anchoring bias pass binary referendum framing; di NOAA panel recommendation to use referendum format dey exist exactly because open-ended elicitation dey perform badly.
- **No reminder of di respondent actual budget constraint.** Without am, stated WTP dey regularly pass wetin di same people go pay when real budget trade-off dey — hypothetical bias.
- **To ignore embedding effects.** Di same good wey dem value alone versus wey dem value as part of bigger bundle dey produce different WTP estimates; report wetin else, if any, dey for di survey frame.
- **To treat point estimate of one survey as settled.** Green Book practice expect range and discussion of known biases, no be bare number wey dem carry go inside cost-benefit table as if na market price.

## Sources

- HM Treasury. "The Green Book," Annex 2: valuing non-market impacts.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Defra. "Valuing environmental impacts: practical guidelines" (contingent valuation and choice
  experiment guidance). <https://www.gov.uk/government/collections/valuing-environmental-impacts>
- Arrow K, et al. "Report of the NOAA Panel on Contingent Valuation." Federal Register, 1993.
- Mitchell RC, Carson RT. "Using Surveys to Value Public Goods: The Contingent Valuation Method."
  Resources for the Future, 1989.
