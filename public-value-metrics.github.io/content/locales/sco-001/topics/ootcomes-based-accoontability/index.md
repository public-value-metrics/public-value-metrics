# Ootcomes-based accoontability (OBA)

Ootcomes-Based Accoontability, an aw cried Results-Based Accoontability (RBA), is Mark Friedman's
framework for separatin twa questions that public-sector reportin habitually blurs taegither: "is
the population daein weel?" (population accoontability) and "is this specific programme daein
weel?" (performance accoontability). Mixin the twa up is, in Friedman's tellin, the single maist
common reason weel-run programmes get blamed for population trends they never hed the pouer tae
move.

## Why it maitters

Friedman set the framework oot in *Trying Hard Is Not Good Enough* (2005), arguin that maist
public reportin either droons decision-makers in population-level statistics nae single agency
controls (teen pregnancy rate, unemployment rate, life expectancy) or droons them in
programme-level activity coonts (clients seen, referrals made) that say naething aboot whether
onybody's life improved. RBA's contribution is a wee, disciplined vocabulary that keeps the twa
apairt: population results (conditions o wellbein for a hale population, like "children are born
healthy") belang tae nae single agency and need mony pairtners movin taegither; performance
measures (hou weel a specific programme serves its specific clients) belang tae ae agency and
sud be judged only agin whit that agency can actually influence. Friedman's "three
performance questions" — hou muckle did we dae, hou weel did we dae it, and is onybody better aff? — is
noo embeddit across US state and county human-services contractin and, via the RBA-aligned
consultancy and toolkit Clear Impact, widely uised in UK and Commonwealth local-government
commissionin. The practical stakes are contractual: a housin programme sudnae be defunded
because the city's homelessness rate rose frae macroeconomic causes ootwith its reach, but it
absolutely sud be defunded if its ain clients arenae bein housed.

## The maths

```
Population accountability (the "big picture" a community, region, or nation shares):
  Result       — a condition of wellbeing (e.g. "residents are economically secure")
  Indicator(s) — a measure of that condition (e.g. unemployment rate, median household income)
  → no single programme owns the indicator; movement requires many contributors

Performance accountability (what one programme is responsible for):
  How much did we do?      — activity volume (clients served, units delivered)
  How well did we do it?   — quality/efficiency (% completing programme, cost per client)
  Is anyone better off?    — the outcome that matters (% in employment 6 months after
                              programme, before/after or against a comparison group)

A programme is judged on the third performance question, never on the population
indicator directly, unless its scale and design could plausibly move it alone.
```

## Wrocht example

**City-funded employment support programme**, 500 participants/year, contractit by a local
authority unner an RBA-style performance framework:

```
Population indicator (context, not the programme's scorecard):
  City unemployment rate: 6.2% (up from 5.8% the prior year, driven by a factory closure
  outside the programme's control)

Performance measures (the programme's actual accountability):
  How much:   500 participants enrolled (target 480) — met
  How well:   78% completion rate; cost per completer = £340,000 / 390 completers ≈ £872
  Better off: of 390 completers, 260 in sustained employment at 6 months = 66.7%
              versus a matched comparison group's 41% (see counterfactual-analysis)
```

Unner a population-accoontability read, the programme looks like it is failin — the city's
unemployment rate gaed up on its watch. Unner RBA's performance-accoontability read, the programme
is succeedin: it hit its volume target, held quality steady, and produced an employment ootcome
25.7 percentage pynts abune a matched comparison group, while the population indicator muivit
for reasons (a factory closure) entirely ootwith the programme's control.

## Link tae saftware ingineerin

RBA maps directly ontae a familiar SRE distinction: population indicators are like business-level
North Star metrics that nae single ingineerin team awns end tae end (company revenue, market share),
while performance measures are like a team's ain SLOs — the things that team's design decisions
actually muive. A dashboard that reports baith wioot labellin which is which invites exactly the
misattribution RBA wis biggit tae prevent: an on-call ingineer bein blamed for a metric a
dependency team controls. Whan commissionin or biggin reportin tools for ootcomes contracts,
big the "hou muckle / hou weel / better aff" triad as first-class, separately-filterable fields
raither nor a single blended KPI — it is the same discipline as separatin leadin and laggin
indicators in [public sector KPIs](../kpis-in-the-public-sector/). RBA is an aw the accoontability logic
unnerneath [payment by results and social impact bonds](../peyment-by-results-and-social-impact-bonds/):
a PbR contract can only fairly pay on the "better aff" performance measure, never on the population
indicator, unless the intervention is genuinely the dominant driver o it.

## Pitfaws

- **Payin or penalizin a programme agin a population indicator it cannae control**: this is
  the single mistak RBA exists tae prevent; aye trace whether the programme is a major or minor
  contributor tae the population result afore attachin consequences tae it.
- **Reportin "hou muckle" as if it were "better aff"**: activity coonts (clients seen) are the
  easiest data tae collect and the least informative; insist the "is onybody better aff" question is
  answered wi real ootcome data, ideally agin a coonterfactual (see
  [counterfactual-analysis](../counterfactual-analysis/)).
- **Treatin RBA indicators as fixed forever**: Friedman's method is explicitly iterative — a
  "data, story, what works, action plan" cycle — nae a yin-aff scorecard design exercise.
- **Nae comparison group for "better aff"**: a before/efter chynge wi nae coonterfactual mixes up
  programme effect wi the trend the population wad hae shown onywey.

## Sources

- Mark Friedman, *Trying Hard Is Not Good Enough: How to Produce Measurable Improvements for
  Customers and Communities*, Trafford Publishing, 2005.
- Clear Impact, "What is Results-Based Accountability?"
  <https://clearimpact.com/results-based-accountability/>
