# Theory o chynge

A theory o chynge is an explicit, backward-mappit causal pathwey frae a lang-term goal tae the
preconditions an activities that maun exist for it tae be achieved, alang wi the assumptions
connectin ilka link. It's biggit bi startin at the ootcome ye want an askin "whit haes tae be
true immediately afore this, for this tae happen?", ower an ower, till ye reach activities ye can
actually deliver — that is the opposite direction tae a [logic model](../logic-model/), an why the
twa are complementary raither nor interchangeable.

## Why it maitters

The backward-mappin method wis formalised bi the Center for Theory of Change an ActKnowledge,
biggin on evaluator Carol Weiss's wark on makkin programme assumptions explicit sae they could be
testit raither nor taen on faith. UK grant evaluation haes taen this in directly: HM Treasury's
Magenta Book treats a theory o chynge as the startin pynt for ony evaluation design, an funders
sic as the National Lottery Community Fund require applicants tae articulate yin afore they will
fund a proposal. The reason it maitters tae a saftware engineer is that a theory o chynge is the
document that shuid determine whit yer system needs tae meisure — if the causal chain says
"benefits take-up depends on claimants receivin a personalised calculation", that is a testable
claim yer product can be instrumentit tae evidence, or refute.

## The maths

A theory o chynge is structural raither nor numeric. Ilka link shuid cairry baith an assumption an
an indicator that could shaw the assumption is fause:

```
Lang-term ootcome (the goal)
  ↑ precondition + assumption + indicator
Intermediate ootcome N
  ↑ precondition + assumption + indicator
  ...
Intermediate ootcome 1
  ↑ precondition + assumption + indicator
Activities / interventions
  ↑ resources committit
Inputs
```

This structure feeds directly intae [impact evaluation methods](../impact-evaluation-methods/),
that exist tae test whether the assumptions at ilka link actually haud, an intae
[coonterfactual analysis](../counterfactual-analysis/), that tests whether the lang-term ootcome
wad hae happent onywey.

## Wrocht example

**Local authority (homelessness prevention)**: lang-term ootcome is sustained tenancies at 12
months for hooseholds at risk o eviction.

- Precondition: hooseholds hae a realistic, affordable repayment plan for arrears.
  Assumption: caseworker-negotiatit plans are mair sustainable nor court-ordert anes.
  Indicator: % o plans still active at 6 months.
- Precondition: hooseholds claim the benefits they are entitlit tae.
  Assumption: a digital benefits calculator increases correct claims versus paper forms.
  Indicator: claim accuracy rate, compared pre/post tool rollout.
- Activities: caseworker triage, digital benefits calculator, arrears negotiation.

In a pilot cohort o 120 hooseholds, the benefits-calculator assumption held for 102 hooseholds
(85%) wha went on tae claim correctly, evidencit bi a subsequent process evaluation — gien the
programme team evidence for that specific link raither nor a single end-tae-end claim aboot
homelessness preventit.

**Charity (youth mentorin)**: lang-term ootcome is reducit schuil exclusion. Backward-mappit
preconditions: improvit emotional regulation → trustit yin-tae-yin relationship wi a mentor →
consistent weekly contact ower twa terms. The theory maks explicit that missin the "consistent
weekly contact" precondition (say, doon tae mentor turnower) predicts the ootcome winnae follae,
that is a testable, falsifiable claim raither nor a hope.

## Link tae saftware ingineerin

A theory o chynge shuid shape a product's data model afore a single dashboard is biggit:
identify whilk links need an indicator, an instrument for thae specifically, raither nor
defaultin tae whitever is easiest tae log. It an aw disciplines roadmap conversations — a feature
that disnae map tae ony link in the chain isnae obviously worth biggin. See
[logic model](../logic-model/) for the forrit-facin accoontability chain biggit yince the theory is
agreed, [social return on investment](../social-return-on-investment/) for a method that depends on
a theory o chynge tae scope whilk ootcomes tae value, an
[ootcomes vs ootpits](../ootcomes-vs-ootputs/) for the distinction the intermediate-ootcome links
depend on.

## Pitfaws

- **Mixin it up wi a logic model.** A theory o chynge is causal an explanatory (why we
  believe this warks); a logic model is sequential an descriptive (whit happens in whit order).
  Producin yin ainly leaves either the "why" or the accoontability trail missin.
- **Leavin assumptions implicit.** The hail value o backward mappin is surfacin testable
  assumptions; a theory o chynge that juist lists boxes an arraes athoot namin whit could mak
  ilka link fause is decoration.
- **Biggin it yince an shelvin it.** A theory o chynge written for a fundin bid an never
  revisitit stops bein uisefu the meenit evidence starts contradictin a link.
- **Skippin stakeholder input.** A theory o chynge biggit entirely bi commissioners athoot input
  frae frontline staff or beneficiaries tends tae encode assumptions naebody deliverin the service
  actually believes.

## Sources

- Center for Theory of Change. <https://www.theoryofchange.org/>
- ActKnowledge. <https://www.actknowledge.org/>
- HM Treasury, Magenta Book (2020), Chapter 3. <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, theory of change guidance. <https://www.tnlcommunityfund.org.uk/>
