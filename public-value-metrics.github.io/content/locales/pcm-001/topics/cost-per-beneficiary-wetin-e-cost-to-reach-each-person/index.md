# Cost per Beneficiary: Wetin E Cost to Reach Each Person

Cost per beneficiary na total programme cost wey dem divide by di number of unique people wey receive service — anybody wey dem touch, no matter whether dia circumstances really change. Na di fastest efficiency number wey organization fit produce, because "who we serve" almost always dey already inside di case management system, while "who dem help" usually no dey.

## Wetin make am matter

Funders dey ask for cost per beneficiary all di time, and for good reasons: e dey available immediately, e fit compare across portfolio of programmes wey very different, and e honest about reach for way wey outcome claims — wey take longer to verify and wey easier to overstate — no be. Di UK Charities SORP (Statement of Recommended Practice), wey govern how charities report under FRS 102, require trustees' annual reports to describe achievements against objectives, but most smaller charities' management accounts still default to reach-based unit costs because dem cheap to produce and audit-friendly.

Di danger na to treat cost per beneficiary as if e answer di question wey e no fit answer: whether di money work. See [cost per outcome](../cost-per-outcome-wetin-e-cost-to-really-change-person-life/) for di metric wey really answer dat one, and [outcomes vs outputs](../outcomes-and-outputs-di-difference-between-wetin-you-do-and-wetin-e-change/) for di underlying distinction. Cost per beneficiary na legitimate triage and reach metric — e tell funder how far money fit stretch — but low cost per beneficiary fit mean genuine efficiency or service wey thin so tay e change nothing.

## Di maths

```
Cost per beneficiary = Total programme cost / Number of unique people served

Contrast:
Cost per outcome      = Total programme cost / Number of people wey achieve di defined outcome

Cost per beneficiary dey always ≤ cost per outcome, because di outcome population na subset
(often small one) of di beneficiary population.
```

## Example wey dem work out

**Food bank, di same year as di cost-per-outcome example**:

- Total programme cost: £450,000
- Unique households wey dem serve (three-plus parcels): 1,800

```
Cost per beneficiary = £450,000 / 1,800 = £250 per household served
```

Compare di two metrics side by side:

| Metric | Denominator | Result |
|---|---|---|
| Cost per beneficiary | 1,800 households served | £250 |
| Cost per outcome | 630 households wey achieve food security | £714 |

Funder wey only see £250 fit conclude say dis charity dey very efficient. Funder wey see both numbers fit ask di more useful question: di gap between reach (1,800) and outcome (630) na data-collection gap, design gap, or honest reflection of how hard e be to achieve food security with food aid alone?

**Job-training charity, illustrative**: cost per beneficiary (enrolled) = £2,000; cost per outcome (sustained employment at 6 months) = £11,000, because only 18% of enrolees complete di programme and find sustained work. Di two numbers wey differ by factor of five dey common anywhere wey completion or durability rates low — training charity and food bank structurally identical for dis matter.

## How e connect to software engineering

Cost per beneficiary na di default metric for nonprofit software because na di metric wey just drop out of beneficiary record without further work: create case, log service, count rows. To build system wey also support cost per outcome mean to deliberately add second first-class entity — outcome event, wey dem date and define independently of service delivery — and to resist di temptation to let "case closed" stand in for "outcome achieved." When you dey scope grant management or CRM platform, ask which of di two metrics each dashboard really dey show, and label am accordingly; to mix dem inside one "impact" tile na one of di most common software-level causes of di pitfalls below. See [unit cost databases](../unit-cost-databases-library-of-ready-made-money-values-for-social-outcomes/) for how to benchmark either metric once dem label am correctly.

## Wahala dem wey you suppose avoid

- **To present cost per beneficiary as impact.** E dey measure reach, no be change. Label dashboards and reports "cost per person served," no be "cost per person helped."
- **Double counting across programmes.** Person wey receive both food parcels and debt advice from di same charity na one beneficiary, no be two, if di denominator suppose describe unique reach; decide and document which convention dem use.
- **To treat lower number as always better.** Drop-in lunch club go always beat intensive case-management service on cost per beneficiary, because e cost less to touch person lightly. Dat one no tell you which one produce more durable change per pound.
- **To quietly swap denominators between reports.** Cost-per-beneficiary figure wey dem quote for one annual report against "enrolled" and for di next one against "completed" no comparable year on year; state di denominator every time.

## Sources

- Charity Commission for England and Wales, guidance on charity reporting. <https://www.gov.uk/government/organizations/charity-commission>
- Charities SORP (FRS 102). <https://www.charitysorp.org/>
- New Philanthropy Capital (NPC), "Four Pillar Approach." <https://www.thinknpc.org/resource-hub/four-pillar-approach/>
