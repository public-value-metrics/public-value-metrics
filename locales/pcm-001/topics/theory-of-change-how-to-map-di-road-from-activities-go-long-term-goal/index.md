# Theory of Change: How to Map Di Road From Activities Go Long-Term Goal

Theory of change na clear causal pathway wey dem map backward from long-term goal go di preconditions and activities wey must dey before dem fit achieve am, plus di assumptions wey connect each link. Dem build am by to start from di outcome wey you want and to ask "wetin must be true immediately before dis one, for dis one to happen?", again and again, until you reach activities wey you fit actually deliver — dis na opposite direction to [logic model](../logic-model-how-to-map-programme-from-inputs-go-reach-impact/), and na why di two dey complement each other instead of to replace each other.

## Wetin make am matter

Center for Theory of Change and ActKnowledge formalize di backward-mapping method, and dem build am on top evaluator Carol Weiss work to make programme assumptions clear so dat dem fit test dem instead of to just believe dem. UK grant evaluation don take am direct: HM Treasury Magenta Book treat theory of change as di starting point for any evaluation design, and funders like di National Lottery Community Fund require applicants to articulate one before dem go fund proposal. Di reason e matter to software engineer na say theory of change na di document wey suppose decide wetin your system need to measure — if di causal chain talk say "benefits take-up depend on claimants to receive personalized calculation", dat na testable claim wey your product fit dey instrumented to show evidence for, or to refute.

## Di maths

Theory of change na about structure, no be numbers. Each link suppose carry both assumption and indicator wey fit show say di assumption false:

```
Long-term outcome (the goal)
  ↑ precondition + assumption + indicator
Intermediate outcome N
  ↑ precondition + assumption + indicator
  ...
Intermediate outcome 1
  ↑ precondition + assumption + indicator
Activities / interventions
  ↑ resources committed
Inputs
```

Dis structure dey feed directly into [impact evaluation methods](../impact-evaluation-methods-how-to-know-wetin-programme-really-cause/), wey dey exist to test whether di assumptions for each link really hold, and into [counterfactual analysis](../counterfactual-analysis-wetin-for-happen-without-di-intervention/), wey dey test whether di long-term outcome for happen anyway.

## Example wey dem work out

**Local authority (homelessness prevention)**: di long-term outcome na sustained tenancies at 12 months for households wey dey risk eviction.

- Precondition: households get realistic, affordable repayment plan for arrears. Assumption: plans wey caseworker negotiate dey more sustainable pass di ones wey court order. Indicator: % of plans wey still dey active at 6 months.
- Precondition: households claim di benefits wey dem entitled to. Assumption: digital benefits calculator dey increase correct claims compare to paper forms. Indicator: claim accuracy rate, compare before/after di tool rollout.
- Activities: caseworker triage, digital benefits calculator, arrears negotiation.

For pilot cohort of 120 households, di benefits-calculator assumption hold for 102 households (85%) wey go claim correctly, wey process evaluation wey follow show as evidence — dis give di programme team evidence for dat specific link instead of single end-to-end claim about homelessness wey dem prevent.

**Charity (youth mentoring)**: di long-term outcome na less school exclusion. Preconditions wey dem map backward: better emotional regulation → trusted one-to-one relationship with mentor → consistent weekly contact for two terms. Di theory make am clear say if di "consistent weekly contact" precondition miss (for example, because mentors dey leave), e predict say di outcome no go follow, and dat na testable, falsifiable claim instead of hope.

## How e connect to software engineering

Theory of change suppose shape product data model before dem build even one dashboard: identify which links need indicator, and instrument for dose ones specifically, instead of to default to whatever dey easiest to log. E also dey discipline roadmap conversations — feature wey no map to any link for di chain no clearly worth to build. See [logic model](../logic-model-how-to-map-programme-from-inputs-go-reach-impact/) for di forward-facing accountability chain wey dem build once dem agree di theory, [social return on investment](../social-return-on-investment-how-to-show-social-value-against-money-wey-dem-spend/) for method wey depend on theory of change to scope which outcomes to value, and [outcomes vs outputs](../outcomes-and-outputs-di-difference-between-wetin-you-do-and-wetin-e-change/) for di distinction wey di intermediate-outcome links depend on.

## Wahala dem wey you suppose avoid

- **To confuse am with logic model.** Theory of change na causal and e dey explain (why we believe say dis one dey work); logic model na sequential and e dey describe (wetin dey happen for which order). If you produce only one, either di "why" or di accountability trail go miss.
- **To leave assumptions implicit.** Di whole value of backward mapping na to bring out assumptions wey dem fit test; theory of change wey just list boxes and arrows without to name wetin fit make each link false na decoration.
- **To build am once and shelve am.** Theory of change wey dem write for funding bid and no ever revisit go stop to dey useful as soon as evidence start to contradict one link.
- **To skip stakeholder input.** Theory of change wey commissioners build all by themselves without input from frontline staff or beneficiaries dey usually encode assumptions wey nobody wey dey deliver di service actually believe.

## Sources

- Center for Theory of Change. <https://www.theoryofchange.org/>
- ActKnowledge. <https://www.actknowledge.org/>
- HM Treasury, Magenta Book (2020), Chapter 3. <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, theory of change guidance. <https://www.tnlcommunityfund.org.uk/>
