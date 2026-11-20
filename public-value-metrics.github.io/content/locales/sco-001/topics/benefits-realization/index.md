# Benefits Realization

Benefits realization management is the discipline o identifyin, baselinin, trackin, an *evidencin* that the benefits promised in a business case actually cam aboot efter go-live. In UK public investment it lives inside HM Treasury's Green Book Five Case Model an the Infrastructure an Projects Authority's dedicatit benefits management guidance; athoot it, "the system saved caseworkers thirty minutes a claim" bides an unauditit assertion for ivver.

## Why it maitters

Business cases are promises; benefits realization is the audit. The Green Book requires ilka spendin case tae pass five tests — strategic, economic, commercial, financial, an management — an the management case maun set oot hoo benefits will be realizit *afore approval*: awners namit, baselines captured, an meisurement dates fixed. The Infrastructure an Projects Authority's guide, *Benefits Management: A Guide to Realizing Benefits for Government Major Projects* (<https://www.gov.uk/government/publications/benefits-management-a-guide-to-realizing-benefits-for-government-major-projects>), exists acause the IPA's ain portfolio reportin on the Government Major Projects Portfolio haes aft fund delivery confidence an benefits realization citit as recurrin weaknesses athort major programmes. A project can close "on time an on budget" against its delivery milestones while still failin tae realize the benefits that justified spendin the siller in the first place — a distinction the IPA's guidance treats as the haill pynt o the discipline.

## The maths

```
Realization rate = benefits realizit / benefits forecast   (per benefit, per period)

Mechanics that mak it computable:
  baseline captured AFORE go-live (itherwise the delta cannae be meisured)
  ilka benefit: namit awner, metric, data source, meisurement schedule
  forecast adjustit for optimism bias at appraisal (Green Book mandate)
  benefits classit cash-releasin / capacity-freed / qualitative,
  trackit an reportit separately
```

## Wrocht example

**Local authority**: a digital plannin-application portal business case promised, per year: £300,000 in printin an postage owerheid reduction (cash), 4,500 officer oors freed (capacity), an improved applicant satisfaction (qualitative). Twal months efter go-live:

```
Benefit           Forecast   Realizit   Rate   Evidence
Cash savings      £300,000   £210,000   70%    finance ledger vs baseline year
Officer oors      4,500      3,200      71%    time-motion sample
Satisfaction      +8pp       +11pp      138%   applicant survey data

Actions frae the review (the pynt o benefits realization):
cash shortfall traced tae twa service areas still processin paper
applications by exception → shut the exception route;
next business case's optimism-bias correction raised frae 10% tae 25%
based on this case's forecastin error.
```

A 70% realization rate isnae a failure — it is knowledge that lets the next forecast be better calibratit. An unmeisured case wad hae claimed 100% for ivver, an the finance team wad hae haed nae grunds tae challenge it.

## Link tae saftware ingineerin

Engineerin organizations routinely approve platform an tooling investments on forecast benefit an near niver audit them efterhaun — exactly the pathology benefits realization management exists tae fix. The lichtweicht port: ilka proposal abune a materiality threshold names a benefit awner, a baseline metric, an a fixed review date (typically sax months efter go-live), an realization rates frae past proposals shuid discoont hoo muckle the organization trusts a team's or vendor's next forecast. This closes the loop back tae [Green Book appraisal](../green-book-appraisal/), which sets the forecast this discipline audits, an it is the same logic ahint the wuidly reportit finding that a muckle majority o generative-AI pilots shaw nae meisurable return — see [AI productivity in the public sector](../ai-productivity-in-the-public-sector/) — acause the pilots that *did* return value were, near aye, the anes wi a namit, trackable benefit line frae the stert. It an aw depends on distinguishin whit wis actually delivert frae whit wis actually realizit — see [outcomes vs outputs](../ootcomes-vs-ootputs/).

## Pitfaws

- **Nae pre-go-live baseline**: the fatal, unfixable omission — athoot it, nae realization rate can iver be computit, anely assertit.
- **Benefit orphanhood**: a benefit wi nae namit awner haes naebody collectin the data, an ilka portfolio review reports it as "broadly on track" by default.
- **Double-coontit benefits athort a programme portfolio**: twa projects baith claimin the same freed caseworker capacity as their benefit — keep a single benefit register athort the portfolio tae catch this.
- **Realization theatre**: meisurin an reportin the easy qualitative wins prominently while the cash an capacity lines gang quietly unexaminit.
- **Mixin up delivery wi realization**: a project closin its milestones "on time an on budget" says naething aboot whether the forecast benefit iver actually cam aboot — the IPA's guidance treats thir as twa separate questions wi twa separate evidence trails.

## Sources

- HM Treasury, Green Book and Five Case Model guidance. <https://www.gov.uk/government/collections/the-green-book-and-accompanying-guidance-and-documents>
- Infrastructure and Projects Authority, *Benefits Management: A Guide to Realizing Benefits for Government Major Projects*. <https://www.gov.uk/government/publications/benefits-management-a-guide-to-realizing-benefits-for-government-major-projects>
- Infrastructure and Projects Authority, Annual Report on the Government Major Projects Portfolio. <https://www.gov.uk/government/collections/infrastructure-and-projects-authority-annual-report>
