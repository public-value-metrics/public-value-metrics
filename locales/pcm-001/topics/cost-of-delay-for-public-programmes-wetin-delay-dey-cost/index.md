# Cost of Delay for Public Programmes: Wetin Delay Dey Cost

Cost of Delay na di public value wey dem lose per unit time wey programme, service, or system change *never* deliver. Na di master bridge metric of dis group of topics: e dey convert "di go-live slip six months" into pounds per week, or into WELLBYs per week, so dat people fit argue about delay for di same currency as di business case itself.

## Wetin make am matter

Reinertsen rule — "if you only quantify one thing, quantify di Cost of Delay" — dey travel enter government almost without change, because public programmes dey unusually exposed to am: dem dey approve business cases against forecast benefit stream, but di stream only start to flow at go-live, and every week of slippage na week of forgone value wey nobody price for di risk register. Di National Audit Office repeated scrutiny of Universal Credit rollout (see im "Rolling Out Universal Credit" reports, <https://www.nao.org.uk/>) show di pattern: dem track and report schedule slippage, but dem rarely state di pounds-per-week cost of *not yet* to deliver di reformed system to di next tranche of claimants as headline figure, even though na di number wey suppose drive prioritization and escalation. Without CoD figure, delayed programme look like schedule problem for di delivery board; with one, e become value-erosion problem for di accounting officer.

## Di maths

```
CoD = benefit per unit time wey dem forgo while e never deliver   (£/week or WELLBYs/week)

Total delay loss = CoD × delay duration

Benefit streams to sum for public programmes:
  cash-releasing savings   (fraud/error reduction, avoided temporary costs)
+ non-cash capacity freed  (caseworker/officer hours × loaded cost)
+ wellbeing benefit        (WELLBYs × £13,000/WELLBY, HMT Green Book
                             wellbeing supplementary guidance, 2019 prices)
```

For citizen-facing services, denominate am for wellbeing as well as money — see [wellbeing-adjusted life years](../wellbeing-adjusted-life-years-di-wellby-di-unit-to-compare-different-kinds-of-benefit/) for di underlying unit, and [opportunity cost in public spending](../opportunity-cost-for-public-spending-wetin-you-lose-when-you-choose-one-option/) for wetin di delayed pound for fund otherwise.

## Example wey dem work out

**Local authority**: housing-benefit system upgrade cut overpayment error by £150/claim/year across 20,000 live claims.

```
Annual benefit = 150 × 20,000 = £3,000,000/year
CoD = 3,000,000 / 52 ≈ £57,700/week
12-month implementation delay cost 52 × 57,700 ≈ £3,000,000 for avoidable error.
```

**Central government agency**: disability-benefit assessment service wey dem deliver six months (26 weeks) later than dem plan mean say 200,000 claimants/year dey wait average three weeks longer for decision. Dem model each extra week of financial uncertainty as −0.0018 WELLBY (life-satisfaction point) effect:

```
WELLBY loss per claimant = 3 × 0.0018 = 0.0054
Annual WELLBY loss = 200,000 × 0.0054 = 1,080 WELLBYs/year
CoD_wellbeing = 1,080 / 52 ≈ 20.8 WELLBYs/week
CoD_money = 20.8 × £13,000 ≈ £270,000/week of wellbeing value
```

26-week delay go "cost" around 540 WELLBYs — wey worth about £7 million for di Green Book wellbeing valuation — wey change di way people see missed go-live date to citizen-welfare event, no be project-management footnote.

## How e connect to software engineering

CoD na wetin make [DORA metrics](../dora-metrics-for-public-value-how-fast-and-how-safe-public-value-dey-reach-citizen/) and [flow metrics](../flow-metrics-for-government-delivery-littles-law-wip-limits-and-flow-efficiency/) dey clear for financial terms: lead time for di pipeline × CoD na money (or wellbeing) wey dem burn for queues before e ever reach citizen. For concrete terms:

- **Prioritization**: rank backlog by CoD ÷ duration instead of by stakeholder seniority — di software engineering version of di Green Book requirement to appraise options on value, no be on who dey ask.
- **Procurement**: 12–18 month framework procurement cycle get CoD; to price am dey change di urgency case for accelerated routes, and e dey feed directly into [build vs buy](../build-or-buy-for-government-how-to-choose/) decisions where time-to-value na decision driver.
- **Benefits case**: every CoD figure wey dem quote at approval suppose show again for [benefits realization](../benefits-realization-to-show-say-di-promised-benefits-really-happen/) — if di delay cost real, di accelerated benefit suppose measurable after go-live.

## Wahala dem wey you suppose avoid

- **To assume say CoD dey linear**: some public services get deadline-shaped value (statutory compliance date — CoD jump go enforcement-risk levels after di date, near zero before) instead of smooth weekly rate. Classify di urgency profile before you multiply.
- **CoD on outputs wey nobody need**: delay only get cost if di thing wey dem never deliver get value; system wey nobody go use get zero CoD no matter how late e be.
- **To double-count delay and discounting**: di [social discount rate](../social-discount-rate-how-government-dey-price-benefits-wey-go-come-later/) already dey price time for multi-year appraisal horizons; CoD na di within-horizon, operational version for weeks and months. Use CoD for schedule slippage, NPV shift for multi-year re-phasing.

## Sources

- Reinertsen DG, *The Principles of Product Development Flow*, Celeritas Publishing, 2009.
- HM Treasury, Green Book supplementary guidance: wellbeing. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>
- National Audit Office, reports on Universal Credit rollout. <https://www.nao.org.uk/>
