# Impact Evaluation and Process Evaluation: Di Difference Between Dem

Impact evaluation dey ask whether programme cause im intended outcomes. Process evaluation dey ask whether dem really deliver di programme as dem design am — to who, at wetin dose, and with wetin barriers or facilitators along di way. Dis na different questions wey need different methods, and HM Treasury Magenta Book treat di commissioning of both together as standard practice, because weak or null impact result no fit make sense on im own: e no fit tell you whether di programme underlying theory wrong, or whether good theory just never get proper delivery.

## Wetin make am matter

Government evaluations don find many times say programme get no measurable effect while dem no get process evaluation to explain why — wey leave commissioners unable to distinguish "dis idea no work" (theory failure) from "dis idea no ever get proper try" (implementation failure). Di Medical Research Council guidance on process evaluation of complex interventions, wey dem publish for di BMJ for 2015 and wey dem widely cite alongside di Magenta Book, formalize fidelity, dose, and reach as di core things wey process evaluation must measure. To commission impact evaluation without process evaluation dey risk to abandon genuinely sound programme design because dem deliver am to half of di intended population at fraction of di intended intensity — mistake wey systems builder dey well placed to prevent, because delivery fidelity na exactly wetin operational data systems fit capture for near-real time.

## Di maths

```
Process evaluation dey ask:
 - Dem deliver am to di target population, for di planned dose/intensity?
 - Delivery match di logic model / theory of change design?
 - Wetin barriers or facilitators affect delivery?
 Methods: fidelity checks against pre-specified thresholds, case studies, interviews,
          administrative delivery data.

Impact evaluation dey ask:
 - Wetin change, and how much of dat change dem fit attribute to di programme?
 Methods: RCT, DiD, PSM, RDD — see impact-evaluation-methods — against counterfactual.

Combined diagnosis:
 No effect  + high fidelity  → theory failure: di model itself no produce di outcome
 No effect  + low fidelity   → implementation failure: dem never properly test di model
 Effect found + high fidelity → replicate with confidence
 Effect found + low fidelity  → investigate further: di effect fit fragile or site-specific
```

## Example wey dem work out

**Local authority (parenting programme)**: impact evaluation wey dey use difference-in-differences find +2 percentage point change for child wellbeing measure — e no statistically significant. Di process evaluation, wey dem run alongside am, find say di programme reach only 210 of di 500 families wey dem target (42% reach), and of dose ones, only 95 complete di pre-specified fidelity threshold of 75%+ of sessions attended — 19% of di original planned reach. Conclusion: di weak impact result consistent with implementation failure, e no be evidence say di programme model no work; di appropriate response na to fix di referral pathway wey cause di 58% drop-off, no be to abandon di programme design.

**Charity (digital literacy programme)**: impact evaluation find strong effect (+18 percentage points on digital confidence score), and parallel process evaluation confirm 92% fidelity to di planned curriculum across all 12 delivery sites. Combined, di funder fit scale di programme with confidence, because dem show say di effect hold consistently instead of to be di product of one unusually good site.

## How e connect to software engineering

Process evaluation data na exactly wetin delivery systems dey well placed to capture: attendance against plan, session dosage, and drop-off for each stage of referral or enrolment funnel — di same funnel analytics wey engineers already dey build for product features, wey dem apply to social programme delivery pipeline instead. To feed fidelity and reach metrics to programme managers for near-real time, instead of to wait for end-of-grant evaluation, dey let dem fix broken referral pathway mid-programme instead of to discover am only after di funding period don end. See [impact evaluation methods](../impact-evaluation-methods-how-to-know-wetin-programme-really-cause/) for di causal designs wey process evaluation dey pair with, [theory of change](../theory-of-change-how-to-map-di-road-from-activities-go-long-term-goal/) and [logic model](../logic-model-how-to-map-programme-from-inputs-go-reach-impact/) for di design wey process evaluation dey check fidelity against, and [benefits realization](../benefits-realization-to-show-say-di-promised-benefits-really-happen/) for how to track delivery reach di outcomes wey dem promise.

## Wahala dem wey you suppose avoid

- **To commission impact evaluation alone.** Null or weak result no go fit dem interpret as theory failure or implementation failure, wey na precisely di distinction wey matter for to decide wetin to do next.
- **To treat process evaluation as soft add-on.** E need di same rigour and pre-specified fidelity criteria as di impact design, or e go collapse into anecdote wen di results come in.
- **To confuse "on time and on budget" with "delivered as designed".** Process evaluation dey check fidelity to di model — dose, target group, content — no be project management RAG status.
- **To no pre-register fidelity thresholds.** To decide after di fact wetin count as "sufficient dose" dey make any explanation of disappointing impact result look like post-hoc excuse-making.

## Sources

- HM Treasury, Magenta Book (2020). <https://www.gov.uk/government/publications/the-magenta-book>
- Moore G, et al., "Process evaluation of complex interventions: Medical Research Council
  guidance." BMJ 2015;350:h1258. <https://www.bmj.com/content/350/bmj.h1258>
- National Audit Office, programme evaluation reports. <https://www.nao.org.uk/>
