# Shadow Pricing: How to Put Price on Things Wey Market No Dey Price

Shadow price na di value wey dem estimate and give to one good, resource or externality wey no get price wey dem fit see for market, or wey im market price don bend and no show di true social value. Government appraisal dey depend on small set of official shadow prices — carbon, non-work time, unemployed labour — wey dem publish for centre so dat every department go use di same number.

## Wetin make am matter

Shadow prices dey exist because [social cost-benefit analysis](../social-cost-benefit-analysis-how-to-weigh-every-cost-and-benefit-to-society/) no fit work if every cost and benefit no get money value, and some of di most important ones — one tonne of carbon wey dem emit, one hour of commuter time, one hour of labour wey for no get work — no get market price at all, or dem get market price wey no show di true social cost. HM Treasury and di Department for Energy Security and Net Zero dey publish together di shadow price of carbon wey dem dey use for all UK government appraisal (<https://www.gov.uk/government/publications/valuing-greenhouse-gas-emissions-in-policy-appraisal>). Dem no take am from any carbon market price but from target-consistent approach: dem set di carbon value at di marginal abatement cost wey dem need to meet di UK legislated carbon budgets, and dis logic different well well from to look wetin carbon dey sell for inside di EU or UK Emissions Trading Scheme.

Di shadow wage rate follow similar logic for labour side. If you employ person wey for don dey unemployed, e no cost society im full wage — part of di wage na transfer from benefits payments wey dem no pay again and from leisure/search time wey dem lose, e no be new draw on society resources — so Green Book guidance set shadow price wey low pass market wage for labour wey dem draw from unemployment. E dey show di true opportunity cost of dat labour (see [opportunity cost in public spending](../opportunity-cost-for-public-spending-wetin-you-lose-when-you-choose-one-option/)) instead of im market price.

## Di maths

```
Shadow price of carbon (illustrative structure, current values from the
official BEIS/DESNZ carbon values tool — do not use stale figures):
  Traded sector value: informed by ETS allowance price trajectories
  Non-traded sector (target-consistent) value: set to the marginal cost
    of abatement needed to meet legislated carbon budgets, rising over
    time as easier abatement options are exhausted
  Applied as: £/tonne CO2e × tonnes emitted or abated by the option,
    discounted at the social discount rate for future years

Shadow wage rate (SWR):
  SWR = Market wage − (value of foregone leisure/search time saved
                        + value of welfare payments no longer paid)
  Typically expressed as a fraction of the market wage (e.g. SWR = 0.6
    × market wage in a high-unemployment area, per Green Book Annex A
    guidance on labour markets with spare capacity)
```

Di two figures na policy conventions wey dem set for centre, no be market observation wey dem see for ground — di whole point of shadow price na to take place of market wey no dey or wey don bend, so appraisal wey use one must cite di current official source instead of to work out im own figure, so dat every department appraisal go fit compare.

## Example wey dem work out

**National government**: appraisal of one flood defence scheme estimate say e avoid 400 tonnes of CO2e emissions every year (through less use of emergency plant and less embodied carbon from reconstruction wey dem avoid) for 30-year appraisal life, compare am with "do minimum" baseline.

```
Illustrative shadow price of carbon: £280/tonne CO2e (year 1, rising over
  the appraisal period per the official non-traded carbon values schedule)
Year 1 carbon benefit = 400 × £280 = £112,000
```

Because di official schedule get di carbon value *dey rise* during di appraisal period (as carbon budgets dey tighten), di analyst must use di correct value for each year of di 30-year stream, no be flat rate — if you use year 1 value for everywhere, e go understate di benefits for later years and e go spoil di ranking against other flood defence designs wey get different carbon profiles.

**Local authority**: one council employment support programme for long-term unemployed residents place 150 people for jobs wey dey pay £11/hour. If you value dis one with di full market wage, you go credit di programme with £11 × hours worked as social benefit, but di shadow wage rate approach recognise say dem no be workers wey dem draw from other jobs — di true opportunity cost of their labour before di programme low.

```
Market wage: £11.00/hour
Shadow wage rate (illustrative, high local unemployment): 0.6 × market wage = £6.60/hour
Net social benefit attributable per hour worked ≈ £11.00 − £6.60 = £4.40/hour
  (the "extra" value created by moving genuinely idle labour into production,
   as distinct from the wage itself, which is largely a transfer)
```

Na why appraisals of employment programmes for high-unemployment areas fit show positive net social value, even though di same programme no go show am for full-employment area, where di labour wey dem displace go just come from other jobs.

## How e connect to software engineering

Shadow pricing no dey touch software delivery directly often, but e matter anytime business case claim carbon or social benefit from IT change — data-centre consolidation wey claim carbon savings, or paperless service wey claim say e avoid printing and postage carbon, must use di current official shadow price of carbon instead of figure wey dem invent, and must use di correct year-by-year schedule instead of flat rate, just like any other Green Book appraisal input. See [total cost of ownership in government IT](../total-cost-of-ownership-in-government-it-di-full-cost-of-system-from-buy-till-e-die/) and [public sector cybersecurity value](../cybersecurity-value-for-public-sector-how-to-put-price-on-risk-reduction/), wey both of dem often need shadow price for input wey hard to monetize (breach risk, downtime) beside items wey dem cost directly.

## Wahala dem wey you suppose avoid

- **To use old carbon or wage figure.** Central guidance dey revise both values from time to time; appraisal wey dem build on figure wey don expire no go pass Treasury scrutiny.
- **To use flat shadow carbon price for appraisal wey run many decades.** Di official schedule dey rise as time dey go; if you use year 1 value everywhere, you go misstate di profile of benefits or costs.
- **To confuse shadow wage with discount on di worker real pay.** Di shadow wage rate dey adjust how *appraisal* value di labour input, no be di wage wey dem actually pay di worker — if you mix dem, e go (wrongly) open door to justify pay wey dey below market.
- **To work out your own shadow price instead of to use di official one.** Shadow prices na policy conventions so dat appraisals fit compare across departments; figure wey dem invent for local level, no matter how well dem reason am, go break dat comparability.

## Sources

- HM Treasury / Department for Energy Security and Net Zero. "Valuing greenhouse gas emissions in
  policy appraisal." <https://www.gov.uk/government/publications/valuing-greenhouse-gas-emissions-in-policy-appraisal>
- HM Treasury. "The Green Book: appraisal and evaluation in central government," Annex A (shadow
  price of labour, non-work time values).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Little IMD, Mirrlees JA. "Project Appraisal and Planning for Developing Countries." Heinemann,
  1974 (foundational shadow-pricing methodology).
