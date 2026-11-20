# Trust and Legitimacy Metrics: How to Measure Whether Public Still Trust Government

Legitimacy and support na one of di three legs of Mark Moore "strategic triangle" for *Creating Public Value* (1995) — beside public value itself and operational capacity — and na di leg wey dem most often no measure, because different from budget or output count, legitimacy no get any obvious single number. Trust and legitimacy metrics na di family of proxy measures wey governments dey use to fill dat gap: institutional trust surveys, confidence ratings from oversight bodies, complaint and appeals data, and political/legislative support indicators.

## Wetin make am matter

Moore argument be say public manager wey deliver real value but lose political and public legitimacy go eventually lose di authorizing environment wey e need to continue to deliver am — dem go cut funding, narrow mandates, and starve di service no matter how good im outcomes dey. So legitimacy no be public-relations afterthought wey dem add to delivery scorecard; na load-bearing input to whether di mission fit continue at all, and na why e sit as equal perspective for [public value scorecard](../public-value-scorecard-how-to-report-performance-across-many-dimensions-without-to-hide-trade-offs/) instead of footnote. Di OECD "Trust in Government" survey programme na di leading cross-national attempt to quantify dis: e dey track di share of citizens across OECD member states wey talk say dem get confidence for their national government, and im long-run data show say trust dey very sensitive to shocks — both di 2008 financial crisis and di COVID-19 pandemic produce sharp national-level swings, wey often only partially recover after, and OECD analysis consistently find say perceived *competence* (government dey deliver wetin e say e go deliver?) and perceived *fairness/integrity* (dem dey see government dey act without corruption or favouritism?) na di two strongest drivers of di trust figure, different from satisfaction with any single transaction. Governments dey try more and more to operationalize legitimacy for more granular level too — di UK independent regulators and inspectorates (di National Audit Office, di Parliamentary and Health Service Ombudsman, sector regulators like Ofsted and di Care Quality Commission) dey work as institutionalized legitimacy checks, and dem dey change "di public still trust dis service?" into ratings wey dem fit audit.

## Di maths

Trust and legitimacy na topic wey get framework shape, and di quantitative proxies wey you fit use na dis:

```
Institutional trust index (OECD-style)
  = % of survey respondents answering "yes" to a confidence-in-government question,
    tracked over time, disaggregated by demographic group

Legitimacy proxy set (no single number substitutes for the construct):
  - Upheld complaints per 1,000 service users (ombudsman or internal complaints data)
  - Judicial review / appeals success rate against the body's decisions
  - Independent regulator/inspectorate rating (e.g. "outstanding" to "inadequate" bands)
  - Legislative/oversight committee confidence votes or critical report frequency
  - Freedom of information request volume and disclosure/refusal rate, as a proxy
    for perceived transparency

Legitimacy is corroborated, not calculated: a defensible legitimacy assessment
triangulates several of the above rather than relying on any single proxy.
```

## Example wey dem work out

**National tax authority**: legitimacy triangulation for annual public value report.

```
OECD-style trust proxy (department-specific confidence survey):
  58% of respondents say they trust the authority to "treat me fairly" (down from
  64% two years prior)

Complaints data:
  Upheld complaints: 4.2 per 1,000 taxpayer interactions (up from 3.1 per 1,000)

Ombudsman referrals:
  Referrals to the independent Adjudicator's Office: 1,850 in the year, of which
  61% upheld in full or part against the authority (up from 48% the prior year)

Reading across all three: trust is falling, upheld complaints are rising, and
independent ombudsman findings are increasingly siding against the authority —
three independent signals converging on the same direction, which is what makes
this a credible legitimacy finding rather than noise in any one series.
```

If only one of dis figures move, e go be weak evidence; but if three independent measures move together for di same period, na dat pattern dey make legitimacy claim fit defend.

## How e connect to software engineering

Single team dashboard no dey usually produce legitimacy metrics, and na di design lesson itself: build reporting pipelines wey fit ingest and reconcile data from independent external sources (ombudsman casework systems, regulator ratings feeds, survey vendors) instead of to architect legitimacy reporting as internal-only metric, because legitimacy claims wey come from inside ("we rate ourselves as trustworthy") get small evidential weight — na di same independence problem wey dem note for di legitimacy perspective inside [public value scorecard](../public-value-scorecard-how-to-report-performance-across-many-dimensions-without-to-hide-trade-offs/). Complaints and appeals data pipelines deserve di same data-quality rigour as any outcome pipeline wey dey feed [payment by results](../payment-by-results-and-social-impact-bonds-how-to-pay-for-outcomes-wey-dem-verify/) contracts, since complaints dataset wey dem under-report or categorize badly dey quietly understate legitimacy problem before e become visible for trust survey one year later. See [citizen satisfaction metrics](../citizen-satisfaction-metrics-how-people-rate-public-services/) for di transaction-level counterpart to dis institution-level measure, and [public value](../public-value-wetin-government-and-social-organizations-really-create-for-citizens/) for Moore full strategic-triangle framework wey dis leg belong to.

## Wahala dem wey you suppose avoid

- **To treat satisfaction as proxy for legitimacy**: citizen fit dey satisfied with di interface of one transaction while e no trust di institution overall (or di other way round) — see [citizen satisfaction metrics](../citizen-satisfaction-metrics-how-people-rate-public-services/) for why you must report di two separately.
- **To rely on one self-reported metric**: trust survey wey dem run internally without independent corroboration (ombudsman data, regulator ratings) easy to dismiss as self-marking; triangulate.
- **To ignore demographic disaggregation**: aggregate national trust figures fit hide legitimacy wey dey diverge sharply among specific groups (by age, ethnicity, income or region) — OECD own Trust in Government releases dey disaggregate for exactly dis reason.
- **To read one dip wey shock cause as permanent trend**: trust figures dey move sharply around crises (financial crashes, pandemics, high-profile scandals) and dem dey partially recover; no suppose extrapolate one data point after shock into long-run decline without more data.

## Sources

- Mark H. Moore, *Creating Public Value: Strategic Management in Government*, Harvard University
  Press, 1995.
- OECD, "Trust in Government." <https://www.oecd.org/en/topics/trust-in-government.html>
- Parliamentary and Health Service Ombudsman, annual casework statistics.
  <https://www.ombudsman.org.uk/>
