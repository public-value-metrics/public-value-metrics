# Di Value of AI for Government

AI in government value na di requirement say any AI system wey dem use for public service must pass di same value-for-money and public-value bar as any other spending decision — no lower bar because AI new, and no higher bar because people dey fear am. Na di question wey delivery team must fit answer before dem ship AI feature, no be after: dis thing dey produce more value than wetin e cost, once dem don price assurance, oversight and risk honestly?

## Wetin make am matter

Di UK Central Digital and Data Office (CDDO) publish im Generative AI Framework for Government for 2024, wey build on di earlier interim guidance of June 2023, and dem structure am around ten principles wey cover wetin generative AI be, im ethical implications, tool security, quality assurance controls, how to manage di full generative AI lifecycle, how to identify genuine use cases, cross-government collaboration, transparency, skills, and governance. Di framework insist on "meaningful human control" and full lifecycle management because AI project business cases get one particular way dem dey fail wey other IT spending no get: pilot headline productivity number easy to produce and easy to overstate, because dem measure am before dem count di verification, correction and oversight burden wey di tool create. Beside di framework, di Algorithmic Transparency Recording Standard (ATRS) require public bodies to publish standardized record — purpose, data wey dem use, performance, fairness testing, human oversight arrangements — for algorithmic tools wey get significant influence on decisions about individuals. Dis one make di assurance cost of AI system become public record, no be internal estimate wey team fit quietly skip.

## Di maths

Dem dey assess AI adoption as addition to standard [value-for-money](../value-for-money-di-test-whether-public-spending-dey-worth-am/) appraisal, no be replacement for am, and dem make di AI-specific terms clear instead of to put everything inside one "productivity gain" number:

```
Net value of an AI system =
    productivity gain (time saved × loaded staff cost)
  − licence/compute cost
  − human verification and oversight cost (to check AI output before
    dem act on am — dis one no dey reduce reach zero even for mature tools)
  − ATRS documentation and ongoing monitoring cost
  − risk-adjusted cost of harm from errors, bias, or hallucination,
    weighted by who bear dat harm (distributional-weighting)

Pilot productivity figure wey leave out di oversight term no fit compare
with business-as-usual cost baseline wey don already include
equivalent human review — see ai-productivity-in-the-public-sector
for di fuller productivity-measurement discipline wey dis one borrow from.
```

## Example wey dem work out

**Local authority wey use generative AI tool to draft first responses to routine council tax enquiries**: 25,000 enquiries/year, wey caseworkers handle fully before, average 14 minutes/enquiry, loaded staff cost £34/hour.

```
Baseline (no AI) cost:
  25,000 × (14/60) × £34 = £198,333/year

Pilot headline claim: AI draft response for 90 seconds,
caseworker "just review and send" — dem claim say new time na 3 minutes
  25,000 × (3/60) × £34 = £42,500/year
  → claimed saving £155,833/year (e look like transformation)

Fully-loaded figure, wey dem measure after 3 months wey e don dey live instead of
for di pilot hand-picked test cases:
  Actual review + correction time per response: 6 minutes (drafts
  need real editing for complex or emotionally sensitive enquiries)
  25,000 × (6/60) × £34 = £85,000/year
  Licence/compute cost: £38,000/year
  ATRS documentation and quarterly bias/quality monitoring: £14,000/year
  Total cost = 85,000 + 38,000 + 14,000 = £137,000/year

Real saving = 198,333 − 137,000 = £61,333/year — e genuine and e good
to keep, but e no reach half of di pilot headline claim, and
dem need honest oversight-time measurement, no be di pilot
best-case one, to find am.
```

## How e connect to software engineering

Na here [ai-productivity-in-the-public-sector](../ai-productivity-for-public-sector-engineering-teams/) and dis topic meet: engineering teams wey dey build AI features inside public services own di instrumentation wey make di "real" figure for di worked example possible — to log actual review time, edit distance between draft and di response wey dem send, and escalation rate, instead of to trust di pilot demo conditions. Dem suppose assess AI features against [digital-service-standard](../digital-service-standard-di-rules-wey-digital-public-service-must-pass/) point 9 (secure service, user privacy) and cross-reference am with [public-sector-cybersecurity-value](../cybersecurity-value-for-public-sector-how-to-put-price-on-risk-reduction/) where di tool touch citizen data. Any AI system wey get significant influence on decisions about individuals need ATRS record before dem fit consider am assessment-ready, di same way service need passed [digital-service-standard](../digital-service-standard-di-rules-wey-digital-public-service-must-pass/) assessment before e go live.

## Wahala dem wey you suppose avoid

- **AI-washing**: to rename existing rules-based automation as "AI" so dat dem go fit access funding or attention wey dem set aside for AI adoption, without di accuracy or bias risks wey really justify di extra scrutiny of di framework.
- **To measure pilot productivity instead of production productivity**: pilots dey run on curated test cases with engaged, attentive reviewers; production dey run on di full messy case mix with reviewers wey, as time dey go, develop automation bias and no check outputs well — both of dem distort di honest oversight-cost figure.
- **To skip ATRS registration because di tool "no really be automated decision-making"**: di standard threshold na significant influence on decision about individual, and most citizen-facing AI drafting or triage tools meet am even when human technically sign off.
- **To ignore distributional impact of errors**: AI system error rate wey dem average across all users fit hide much higher error or bias rate for particular groups; dem suppose apply [distributional-weighting](../distributional-weighting-to-give-different-value-to-pound-based-on-who-receive-am/) to di risk-adjusted harm term, no be only di aggregate accuracy figure.

## Sources

- Central Digital and Data Office, Generative AI Framework for Government (2024). <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
- Algorithmic Transparency Recording Standard. <https://www.gov.uk/government/collections/algorithmic-transparency-recording-standard-hub>
- HM Treasury, Green Book: central government guidance on appraisal and evaluation. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-governent>
