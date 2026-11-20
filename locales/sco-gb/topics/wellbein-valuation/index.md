# Wellbein valuation (WELLBY)

Wellbein valuation prices a policy's effect directly in life-satisfaction terms, uisin the WELLBY
(wellbein-adjustit life year) as its unit — yin WELLBY equals a yin-pynt chynge on a 0–10
life-satisfaction scale, sustained for yin year. It is HM Treasury's officially sanctioned
alternative tae monetisin ilka benefit throu willingness-tae-pey.

## Why it maitters

HM Treasury's "Wellbeing guidance for appraisal: supplementary Green Book guidance" (2021,
<https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>)
formally brocht subjective wellbein data intae central government appraisal, gien analysts a
route tae value ootcomes — social connection, mental health, safety, civic participation — that
[stated preference](../valuation-bi-stated-preference/) an [revealed preference](../revealed-preference-valuation/)
methods strauchle tae price convincingly, acause fowk are aften puir forecasters o hou muckle a
guid will actually affect their satisfaction wi life. The guidance, developit jointly wi the
What Works Centre for Wellbeing, sets a recommendit monetary value per WELLBY — £13,000 (2021
prices, revised periodically) — derived frae the relationship observit in lairge wellbein surveys
(principally the ONS's Annual Population Survey, that haes askit the fower ONS4 wellbein questions
sin 2011) atween income an life satisfaction, gien analysts a conversion rate back intae
punds whan a monetisit comparison agin ither Green Book appraisals is needit.

The method maitters acause it inverts the usual valuation logic: raither nor askin whit fowk
wad pey for an ootcome (stated preference) or inferrin value frae a related merkit transaction
(revealed preference), it meisures the ootcome's effect on reportit life satisfaction directly,
sidesteppin the gap atween whit fowk say they want an whit actually mak them better aff.
This is an aw its central limitation — self-reportit life satisfaction is affectit bi adaptation
an framin effects that a carefu practitioner maun control for.

## The maths

```
WELLBY = 1 life-satisfaction pynt (0-10 scale) sustained for 1 person for 1 year

Total WELLBYs frae a policy =
  Σ (chynge in life satisfaction score) × (nummer o fowk affectit)
    × (duration in years, discoontit at the social discoont rate)

Monetisit value = Total WELLBYs × value per WELLBY
  (HM Treasury recommendit value: £13,000 per WELLBY, 2021 prices,
   subject tae periodic revision — check current guidance afore uise)
```

This differs frae the health-economics
[wellbein-adjustit life year](../wellbein-adjustit-life-years/), that is typically ankert tae
health-related quality o life scales (EQ-5D an the like) raither nor general life satisfaction;
the twa are relatit but no interchangeable, an Green Book appraisals shuid be explicit aboot
whilk scale an elicitation method underlies a reportit WELLBY figure.

## Wrocht example

**Local authority**: a cooncil rins a community befriendin scheme for isolatit aulder residents,
servin 400 fowk. A before/efter wellbein survey uisin the ONS4 life-satisfaction question shaws
participants' average score risin frae 5.8 tae 6.5 — a 0.7-pynt gain — sustained for the
programme's 2-year funded duration.

```
WELLBYs generatit = 400 people × 0.7 points × 2 years = 560 WELLBYs
Monetisit value = 560 × £13,000 = £7.28m
Programme cost = £450,000 ower 2 years

Benefit-cost ratio ≈ £7.28m / £0.45m ≈ 16:1
```

A ratio this high shuid prompt scrutiny raither nor celebration — the Green Book wellbein
guidance explicitly warns agin takin sma-sample self-reportit gains at face value athoot
checkin for selection effects (did ainly the maist sociable, maist-likely-tae-improve residents jyn
the scheme?) an athoot a comparison group; a weel-designit evaluation wad net aff a
coonterfactual chynge observit in non-participants, see [coonterfactual analysis](../counterfactual-analysis/).

**National government**: comparin twa employment programmes uisin WELLBYs raither nor earnins
its lane captures that unemployment cairries a wellbein cost ayont lost income — UK wellbein
research consistently finds unemployment reduces life satisfaction bi mair nor the income loss
its lane wad predict, acause o the non-pecuniary effects o loosin structure, purpose, an social
contact. A programme evaluatit on earnins gain its lane wad unnerstate its value relative tae yin
evaluatit additionally on WELLBYs.

## Link tae saftware ingineerin

Wellbein valuation seldom reaches engineerin teams directly, but it shapes whit "success" gets
definit as for social-sector an public-service products — a digital befriendin platform, a
mental-health triage tool, or a community platform for isolatit residents shuid expect its impact
tae eventually be meisurit this wey, that means product analytics need tae capture *wha* is
reached an for *hou lang*, nae juist uisage coonts. Big wellbein survey instrumentation (ONS4 or
validatit equivalents) intae service evaluation frae the stairt raither nor bolt it on
retrospectively; retrofittin a wellbein baseline efter a service haes launched loses the pre/post
comparison entirely. See [ootcomes vs ootpits](../ootcomes-vs-ootputs/) an
[impact evaluation methods](../impact-evaluation-methods/).

## Pitfaws

- **Nae coonterfactual or comparison group.** A pre/post wellbein gain wi nae control for whit
  wad hae happent onywey owerstates the programme's effect; see
  [coonterfactual analysis](../counterfactual-analysis/) an
  [additionality an deidweicht](../additionality-an-deadweight/).
- **Sma, self-selectit samples.** Wellbein surveys o programme participants wha opted in are
  prone tae selection bias — the fowk wha jynt an bade were plausibly aareadies trendin
  upward.
- **Treatin the £-per-WELLBY conversion as precise.** The monetisit value is a policy convention
  derived frae income-wellbein regressions, nae a merkit price; uise it for comparability athort
  Green Book appraisals, nae as a claim aboot whit wellbein "is worth."
- **Mixin up WELLBYs wi health-related QALYs.** The twa meisure different constructs on
  different scales; see [wellbein-adjustit life years](../wellbein-adjustit-life-years/) for the
  health-economics variant an dinnae average the twa thegither.

## Sources

- HM Treasury. "Wellbeing guidance for appraisal: supplementary Green Book guidance." 2021.
  <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>
- What Works Centre for Wellbeing. <https://whatworkswellbeing.org/>
- Office for National Statistics. "Personal well-being in the UK" (ONS4 measures).
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing>
- Fujiwara D, et al. "Wellbeing Valuation: A Nascent Field?" LSE / Simetrica research summaries.
