# Value for Money: Di Test Whether Public Spending Dey Worth Am

Value for money na di UK public sector formal test of whether spending dey achieve di best balance of cost and benefit wey dem fit get. HM Treasury Green Book dey frame am through three "E"s — economy, efficiency and effectiveness — and equity dey come up more and more as fourth one wey people dey contest. Every public-sector business case wey go survive scrutiny must answer all three clearly, no be just to claim say di spending "worth am".

## Wetin make am matter

VFM no be another name for "cheap". Di Green Book (HM Treasury, 2022 edition) clear say to buy di lowest-cost option (economy) without to check say e produce di outcomes wey dem intend (effectiveness) na common and expensive mistake — procurement wey save 10% on unit cost but deliver 40% less impact na worse value, no be better. Di three-E framework dey force business case to separate three failure modes wey really different: to pay too much for inputs, to waste inputs as dem dey change to outputs, and to produce outputs wey no turn to outcomes wey anybody want. UK government spending controls — Treasury approval points, National Audit Office (NAO) value-for-money studies, and departmental accounting officer assessments — dem build dem around dis three-part test, so engineering business case wey only address cost (economy) go fail scrutiny even if di technology good.

Di "fourth E", equity, dem dey contest am exactly because e fit conflict with di other three: di most efficient way to deliver service nationally rarely be di most equitable one, since to concentrate delivery where e cheapest to reach citizens often mean say dem go under-serve di people wey hardest to reach. Di Green Book 2020 revision respond to criticism (including from di 2020 Treasury Select Committee and IPPR North) say pure cost-benefit ratios always favour regions wey don already prosper, by to require appraisals to address distributional impact clearly — see [distributional weighting](../distributional-weighting-to-give-different-value-to-pound-based-on-who-receive-am/).

## Di maths

VFM no be single ratio but three-part (or four-part) diagnostic, wey dem dey apply one after di other:

```
Economy:       Are inputs purchased at the lowest reasonable cost for the
               required quality?  (£ per unit of input)

Efficiency:    How well are inputs converted into outputs?
               (outputs / inputs, e.g. cases processed per caseworker-hour)

Effectiveness: Do the outputs actually produce the intended outcomes?
               (outcomes achieved / outcomes intended)

[Equity]:      Are costs and benefits distributed fairly across the
               population, or concentrated on those least in need?
```

VFM failure fit happen for any stage by itself: economical procurement wey get inefficient delivery; efficient delivery of wrong output; effective outcomes wey dem buy for too much cost. See [public-sector KPIs](../key-performance-indicators-for-public-sector-how-to-choose-measures-wey-dem-no-fit-game/) for how dem dey translate go measurable indicators, and [cost-effectiveness analysis in government](../cost-effectiveness-analysis-for-government-decisions/) for di formal comparison method.

## Example wey dem work out

**Local authority contact centre**: one council compare two options for new case-management system.

- *Option A*: £600,000 licence (cheapest wey dey available), but agents still average 22 minutes per case because di workflow require manual re-keying between systems — efficiency poor.
- *Option B*: £900,000 licence, integrated workflow, agents average 9 minutes per case.

Economy alone favour A (£300,000 cheaper). But at 40,000 cases/year, A cost 40,000 × 22/60 = 14,667 staff-hours; B cost 40,000 × 9/60 = 6,000 staff-hours. At fully loaded staff cost of £28/hour, A cost £410,667/year for staff time versus B own £168,000/year — £242,667/year efficiency gap wey swallow di £300,000 up-front economy difference within 14 months. VFM favour B once dem count efficiency, no be A.

**Charity delivery grant**: one funder compare £50,000 grant wey achieve 200 successful job placements (£250/placement — economy wey look excellent) against £120,000 grant wey achieve 350 placements wey last pass 12 months, versus di first grant placements wey half of dem lapse within 3 months. Effectiveness — outcomes wey last — reverse di VFM ranking wey look apparent: di true cost per *durable* placement na £250 ÷ 0.5 = £500 for di first grant, versus £120,000/350 ≈ £343 for di second.

## How e connect to software engineering

VFM give engineering teams discipline to frame technology business cases di way finance and audit functions go really read dem:

- State economy, efficiency and effectiveness as separate line items for business case, no be one blended "value" number — reviewer wey dem train on Green Book go ask for exactly dis breakdown.
- Take care make you no optimize procurement cost (economy) at di expense of integration and workflow efficiency, wey be very common false saving for government IT (see [total cost of ownership in government IT](../total-cost-of-ownership-in-government-it-di-full-cost-of-system-from-buy-till-e-die/) and [build vs buy in government](../build-or-buy-for-government-how-to-choose/)).
- Effectiveness require outcome data, no be just output counts — connect delivery metrics to [outcomes vs outputs](../outcomes-and-outputs-di-difference-between-wetin-you-do-and-wetin-e-change/) and to real evaluation through [counterfactual analysis](../counterfactual-analysis-wetin-for-happen-without-di-intervention/) instead of to assume say outputs mean outcomes.
- When system dey serve unevenly across regions or demographics, di equity question na legitimate VFM objection, no be separate "nice to have" — see [digital inclusion](../digital-inclusion-make-sure-say-digital-services-no-leave-anybody-behind/).

## Wahala dem wey you suppose avoid

- **To equate VFM with lowest price.** Economy na one-third (or one-quarter) of di test; di Green Book clearly warn against "lowest cost" procurement rules wey ignore efficiency and effectiveness.
- **To measure outputs and call dem outcomes.** Case throughput (efficiency) no be di same as cases wey dem resolve well (effectiveness); see [outcomes vs outputs](../outcomes-and-outputs-di-difference-between-wetin-you-do-and-wetin-e-change/).
- **To treat equity as optional.** Since di Green Book 2020 update, dem mean am say dem suppose assess distributional impact beside di traditional three Es, no be say dem go bolt am on after; to retrofit am after dem approve business case hard well well pass to include am from di start.
- **To compare options for different volumes without normalizing.** Per-unit VFM comparison across options wey dey serve different populations must control for scale, if no so di efficiency comparison no mean anything.

## Sources

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation" (2022
  edition). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- National Audit Office, "Framework to review programmes and projects" and VFM study methodology.
  <https://www.nao.org.uk/>
- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020).
  <https://www.gov.uk/government/publications/the-magenta-book>
- IPPR North, "Transport Infrastructure Investment: Determining Value for Money" (evidence to the
  Treasury Select Committee's 2020 review of the Green Book's regional bias).
