# Impact Evaluation vs Process Evaluation (Impact evaluation agin process evaluation)

Impact evaluation spiers whether a programme caused its intendit ootcomes. Process evaluation spiers whether the programme wis actually deliverit as designed — tae wha, at whit dose, an wi whit barriers or facilitators alang the wey. Thir are different questions requirin different methods, an HM Treasury's Magenta Book treats commissionin baith thegither as staundart practice, acause a weak or null impact result is uninterpretable on its ain: it cannae tell ye whether the programme's underlyin theory wis wrang, or whether a guid theory wis juist never properly deliverit.

## Why it maitters

Government evaluations hae again an again foond nae measurable effect frae a programme while haein nae process evaluation tae explain why — leavin commissioners unable tae distinguish "this idea disnae wark" (theory failure) frae "this idea wis never actually tried properly" (implementation failure). The Medical Research Council's guidance on process evaluation o complex interventions, published in the BMJ in 2015 an widely citit alangside the Magenta Book, formalizit fidelity, dose, an reach as the core things a process evaluation maun meisure. Commissionin an impact evaluation athoot a process evaluation risks abandonin a genuinely soond programme design acause it wis deliverit tae hauf the intendit population at a fraction o the intendit intensity — a mistak that a systems biggar is weel placed tae prevent, acause delivery fidelity is exactly whit operational data systems can capture in near-real time.

## The maths

```
Process evaluation asks:
 - Was it delivered to the target population, at the planned dose/intensity?
 - Did delivery match the logic model / theory of change design?
 - What barriers or facilitators affected delivery?
 Methods: fidelity checks against pre-specified thresholds, case studies, interviews,
          administrative delivery data.

Impact evaluation asks:
 - What changed, and how much of that change is attributable to the programme?
 Methods: RCT, DiD, PSM, RDD — see impact-evaluation-methods — against a counterfactual.

Combined diagnosis:
 No effect  + high fidelity  → theory failure: the model itself did not produce the outcome
 No effect  + low fidelity   → implementation failure: the model was never properly tested
 Effect found + high fidelity → replicate with confidence
 Effect found + low fidelity  → investigate further: the effect may be fragile or site-specific
```

## Wrocht example

**Local authority (parentin programme)**: an impact evaluation uisin difference-in-differences finds a +2 percentage pynt chynge in a bairn wellbein meisure — no statistically significant. The process evaluation, run alangside it, finds the programme reached anely 210 o the 500 faimilies targetit (42% reach), an o thae, anely 95 completit the pre-specifiet fidelity threshold o 75%+ o sessions attendit — 19% o the original planned reach. Conclusion: the weak impact result is consistent wi an implementation failure, no evidence the programme model disnae wark; the appropriate response is fixin the referral pathwey that caused the 58% drap-aff, no abandonin the programme design.

**Charity (digital literacy programme)**: an impact evaluation finds a strong effect (+18 percentage pynts on a digital confidence score), an a parallel process evaluation confirms 92% fidelity tae the plannit curriculum athort aw 12 delivery sites. Combined, the funder can scale the programme wi confidence, acause the effect is shawn tae haud consistently raither nor bein the product o ae unusually guid site.

## Link tae saftware ingineerin

Process evaluation data is exactly whit delivery systems are weel placed tae capture: attendance agin plan, session dosage, an drap-aff at ilka stage o a referral or enrolment funnel — the same funnel analytics ingineers awready big for product features, applyit tae a social programme's delivery pipeline insteid. Feedin fidelity an reach metrics tae programme managers in near-real time, raither nor waitin for an end-o-grant evaluation, lets a broken referral pathwey get fixed mid-programme insteid o bein discovert anely aince the fundin period haes endit. See [impact evaluation methods](../impact-evaluation-methods/) for the causal designs process evaluation is pairit wi, [theory o chynge](../theory-o-chynge/) an [logic model](../logic-model/) for the design the process evaluation checks fidelity agin, an [benefits realization](../benefits-realization/) for trackin delivery throu tae the ootcomes that were promised.

## Pitfaws

- **Commissionin impact evaluation alane.** A null or weak result then cannae be interpretit as theory failure or implementation failure, which is precisely the distinction that maitters for decidin whit tae dae next.
- **Treatin process evaluation as a saft add-on.** It needs the same rigour an pre-specifiet fidelity criteria as the impact design, or it collapses intae anecdote whan the results come in.
- **Confusin "on time an on budget" wi "deliverit as designed".** Process evaluation checks fidelity tae the model — dose, target group, content — no project management RAG status.
- **Nae pre-registerin fidelity thresholds.** Decidin efter the fact whit coonts as "sufficient dose" maks onie explanation o a disappointin impact result look like post-hoc excuse-makin.

## Sources

- HM Treasury, Magenta Book (2020). <https://www.gov.uk/government/publications/the-magenta-book>
- Moore G, et al., "Process evaluation of complex interventions: Medical Research Council
  guidance." BMJ 2015;350:h1258. <https://www.bmj.com/content/350/bmj.h1258>
- National Audit Office, programme evaluation reports. <https://www.nao.org.uk/>
