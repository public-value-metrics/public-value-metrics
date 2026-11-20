# Public Value Scorecard: How to Report Performance Across Many Dimensions Without to Hide Trade-offs

Public value scorecard adapt Robert Kaplan and David Norton 1992 balanced scorecard — wey dem build for firms wey dey optimize profit across financial, customer, internal-process, and learning-and-growth perspectives — to organizations wey im bottom line na mission, no be margin. E dey force public body to report performance across several irreducible dimensions at once, instead of to collapse everything into one number wey go hide di trade-offs.

## Wetin make am matter

Kaplan and Norton original argument, for Harvard Business Review, na say single financial metric na lagging indicator wey no go tell you anything about *why* performance go change next quarter. For private sector, di fix na four linked perspectives. For government, Mark Moore "strategic triangle" (from *Creating Public Value*, 1995) supply di equivalent structure: service must at di same time deliver **public value** (di mission outcome), maintain **legitimacy and support** (political and public backing), and dey **operationally feasible** (deliverable with di resources and capability wey dey available). Paul Niven *Balanced Scorecard: Step-by-Step for Government and Nonprofit Agencies* (2003) na di practitioner manual to translate Kaplan and Norton four boxes into dis triangle — usually to relabel "financial" as "stewardship of resources," put "mission" for di top instead of "shareholder value" for di bottom, and treat customer and stakeholder perspectives as co-equal instead of subordinate to profit. Di reason why dis matter to delivery team na say public digital service wey dem only judge on financial or efficiency metric (cost per transaction, for example) go always under-invest for di legitimacy and outcome dimensions wey di financial metric no fit see.

## Di maths

Public value scorecard na framework, no be formula, but im structure fixed and e good to reproduce am exactly:

```
Perspective          Public-sector question                    Example indicator
--------------------------------------------------------------------------------
Mission / outcomes    We dey achieve di public value wey we      Population outcome measure
                       exist to create?                         (see outcomes-vs-outputs)
Stewardship of        We dey use public money efficiently       Cost per outcome, budget
  resources            and within authorized limits?             variance
Customer / user        Users and citizens fit access and         Completion rate, satisfaction
                        benefit from di service?
Legitimacy / support    Political principals, oversight           Trust metrics, audit findings,
                        bodies, and di public still dey back us?  complaints upheld
Internal process /      We get capability and process to         Staff turnover, cycle time,
  learning              keep to improve?                          backlog age

Defensible scorecard dey report 3–5 indicators per perspective, wey dem choose so say
no single perspective fit dem game without di damage show for another.
```

## Example wey dem work out

**Local authority adult social care department**: scorecard for reablement service (short-term support to help people regain independence after hospital stay) report:

```
Mission:       68% of service users no need ongoing care again after 6 weeks (target 65%)
Stewardship:   cost per completed reablement episode = £1,850 (budget assumption £2,000)
Customer:      user satisfaction 82%, average wait for service start 4.1 days
Legitimacy:    3 upheld complaints per 1,000 episodes; adult safeguarding board rate
               di service "good"
Process:       staff vacancy rate 14%, average caseload 23 (safe caseload ceiling: 25)
```

If you read am alone, di mission and stewardship numbers look like straightforward success story: under budget and above di outcome target. If you read am together with di process row, di vacancy rate of 14% against caseload ceiling of 25 show say dem dey buy di good outcome by to run near unsafe staffing levels — warning wey di mission number alone no go ever show, and exactly di failure mode wey single-perspective KPI (see [public sector KPIs](../key-performance-indicators-for-public-sector-how-to-choose-measures-wey-dem-no-fit-game/)) dey invite.

## How e connect to software engineering

For team wey dey build internal or public-facing dashboard, di scorecard na direct argument against single "health score" widget: build one panel per perspective, and resist product pressure to synthesize dem into traffic light, because di synthesis step na exactly where di trade-off information dey destroy. E also map cleanly onto product-team OKR structures: mission OKR without paired stewardship or process OKR dey reproduce di single-metric failure mode wey Kaplan and Norton dey write against for 1992. See [public value](../public-value-wetin-government-and-social-organizations-really-create-for-citizens/) for Moore underlying theory of wetin di "mission" box suppose really contain, and [trust-and-legitimacy-metrics](../trust-and-legitimacy-metrics-how-to-measure-whether-public-still-trust-government/) for how to populate di legitimacy perspective with real, sourced indicators instead of proxy wey nobody fit defend.

## Wahala dem wey you suppose avoid

- **To collapse di scorecard into one score**: to average four perspectives into single number dey bring back di exact problem — bad legitimacy score wey good stewardship score hide — wey di scorecard exist to prevent.
- **To copy di private-sector "financial" perspective unchanged**: public body stewardship perspective na about to stay within authorized, often ring-fenced, budgets, no be about to maximize revenue — Niven relabelling no be cosmetic.
- **To choose indicators wey di team wey own di scorecard fit move on im own**: legitimacy indicator wey come from di same team wey e dey judge (self-reported complaints handling, for example) no be independent evidence.
- **To build di scorecard once and never revisit di weights or indicators**: Kaplan and Norton intend annual strategy review; scorecard wey dem freeze for years go drift from di mission wey dem build am to track.

## Sources

- Robert S. Kaplan and David P. Norton, "The Balanced Scorecard: Measures That Drive Performance,"
  *Harvard Business Review*, January–February 1992.
- Paul R. Niven, *Balanced Scorecard: Step-by-Step for Government and Nonprofit Agencies*, Wiley,
  2003.
- Mark H. Moore, *Creating Public Value: Strategic Management in Government*, Harvard University
  Press, 1995.
