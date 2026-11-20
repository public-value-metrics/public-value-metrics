# Benefits Realization: To Show Say Di Promised Benefits Really Happen

Benefits realization management na di discipline of to identify, baseline, track, and *show evidence* say di benefits wey dem promise for business case really happen after go-live. For UK public investment, e dey inside HM Treasury Green Book Five Case Model and di Infrastructure and Projects Authority dedicated benefits management guidance; without am, "di system save caseworkers thirty minutes per claim" go remain unaudited assertion forever.

## Wetin make am matter

Business cases na promises; benefits realization na di audit. Di Green Book require every spending case to pass five tests — strategic, economic, commercial, financial, and management — and di management case must set out how dem go realize di benefits *before approval*: dem must name owners, capture baselines, and fix measurement dates. Di Infrastructure and Projects Authority guide, *Benefits Management: A Guide to Realizing Benefits for Government Major Projects* (<https://www.gov.uk/government/publications/benefits-management-a-guide-to-realizing-benefits-for-government-major-projects>), dey exist because IPA own portfolio reporting on di Government Major Projects Portfolio don repeatedly find say delivery confidence and benefits realization na weaknesses wey dey come up again and again across major programmes. Project fit close "on time and on budget" against im delivery milestones but still fail to realize di benefits wey justify to spend di money for first place — IPA guidance treat dis difference as di whole point of di discipline.

## Di maths

```
Realization rate = benefits realized / benefits forecast   (per benefit, per period)

Mechanics wey make am computable:
  baseline captured BEFORE go-live (if no, di delta no fit measure)
  each benefit: named owner, metric, data source, measurement schedule
  forecast adjusted for optimism bias at appraisal (Green Book mandate)
  benefits classed cash-releasing / capacity-freed / qualitative,
  tracked and reported separately
```

## Example wey dem work out

**Local authority**: one digital planning-application portal business case promise, per year: £300,000 reduction for printing and postage overhead (cash), 4,500 officer hours wey dem free (capacity), and better applicant satisfaction (qualitative). Twelve months after go-live:

```
Benefit           Forecast   Realized   Rate   Evidence
Cash savings      £300,000   £210,000   70%    finance ledger vs baseline year
Officer hours     4,500      3,200      71%    time-motion sample
Satisfaction      +8pp       +11pp      138%   applicant survey data

Actions from di review (na di point of benefits realization):
cash shortfall trace go two service areas wey still dey process paper
applications by exception → close di exception route;
di next business case optimism-bias correction raise from 10% to 25%
based on di forecasting error of dis case.
```

70% realization rate no be failure — na knowledge wey go make di next forecast calibrate better. Case wey nobody measure go claim 100% forever, and di finance team no go get any basis to challenge am.

## How e connect to software engineering

Engineering organizations dey routinely approve platform and tooling investments based on forecast benefit and almost never audit dem afterwards — na exactly di sickness wey benefits realization management exist to fix. Di lightweight version: every proposal wey pass materiality threshold must name benefit owner, baseline metric, and fixed review date (usually six months after go-live), and realization rates from past proposals suppose reduce how much di organization trust di next forecast of team or vendor. Dis one close di loop back to [Green Book appraisal](../green-book-appraisal-how-uk-government-dey-judge-spending-proposals/), wey set di forecast wey dis discipline dey audit, and na di same logic dey behind di widely reported finding say large majority of generative-AI pilots show no measurable return — see [AI productivity in the public sector](../ai-productivity-for-public-sector-engineering-teams/) — because di pilots wey *really* return value na, almost without exception, di ones wey get named, trackable benefit line from di start. E also depend on to separate wetin dem really deliver from wetin dem really realize — see [outcomes vs outputs](../outcomes-and-outputs-di-difference-between-wetin-you-do-and-wetin-e-change/).

## Wahala dem wey you suppose avoid

- **No baseline before go-live**: di fatal omission wey no get fix — without am, nobody fit ever compute realization rate, dem fit only assert am.
- **Benefit orphanhood**: benefit wey no get named owner no get anybody wey go collect di data, and every portfolio review go report am as "broadly on track" by default.
- **Benefits wey dem double-count across programme portfolio**: two projects wey both claim di same freed caseworker capacity as dia benefit — keep one single benefit register across di portfolio to catch dis one.
- **Realization theatre**: to measure and report di easy qualitative wins prominently while di cash and capacity lines quietly dey go without examination.
- **To confuse delivery with realization**: project wey close im milestones "on time and on budget" no tell you anything about whether di forecast benefit ever really happen — IPA guidance treat dem as two separate questions with two separate evidence trails.

## Sources

- HM Treasury, Green Book and Five Case Model guidance. <https://www.gov.uk/government/collections/the-green-book-and-accompanying-guidance-and-documents>
- Infrastructure and Projects Authority, *Benefits Management: A Guide to Realizing Benefits for Government Major Projects*. <https://www.gov.uk/government/publications/benefits-management-a-guide-to-realizing-benefits-for-government-major-projects>
- Infrastructure and Projects Authority, Annual Report on the Government Major Projects Portfolio. <https://www.gov.uk/government/collections/infrastructure-and-projects-authority-annual-report>
