# Wellbein-adjustit life years (WELLBY)

A WELLBY is yin extra pynt o life satisfaction, on the staundard 0–10 wellbein scale, for
yin person for yin year. It is the structural analogue o the QALY uised in health economics — a
single unit that lets ye compare interventions whase ootcomes hae naethin else in common — but
biggit on subjective wellbein raither nor clinical health states, an set oot in HM Treasury's
"Wellbeing guidance for appraisal: supplementary Green Book guidance" (2021).

## Why it maitters

Cost-benefit appraisal needs a common unit tae compare a youth-club grant agin a road-safety
scheme agin a mental-health service, nane o that share an ootcome meisure. Health economics
solved this for clinical interventions wi the QALY: a quality-adjustit year o life, weichtit frae
0 (deid) tae 1 (full health). HM Treasury's wellbein guidance extends the same logic tae
non-health public spendin, uisin the ONS's harmonised life-satisfaction question ("Overall, how
satisfied are you with your life nowadays?", answered 0–10) as the ootcome ladder insteid o a
health-state index. A WELLBY o 1 means yin person's life satisfaction risin bi yin full pynt for
yin year (or, equivalently, ten fowk's satisfaction risin bi 0.1 pynt each for a year — WELLBYs
sum athort a population the wey QALYs dae). HM Treasury's guidance sets an illustrative monetary
value per WELLBY (aboot £13,000, 2019/20 prices) derived bi reconcilin subjective-wellbein data
wi ither approaches tae the value o a life year, gien appraisers a wey tae monetise ootcomes —
lonelieness reduction, community cohesion, green-space access — that [wellbein valuation](../wellbein-valuation/)
techniques could previously ainly describe, nae compare on a common fittin wi health or safety
spendin.

## The maths

```
WELLBY = Δ life satisfaction (0–10 scale) × nummer o years the chynge persists
        (summed athort aw fowk affectit)

Monetisit wellbein benefit = WELLBYs generatit × value per WELLBY (HMT reference value)

cf. QALY = Δ health-state utility (0–1 scale) × years liveit in that state
```

The 0–10 satisfaction scale an the 0–1 QALY utility scale arenae interchangeable athoot a
conversion step; HM Treasury's guidance discusses reconcilin the twa sae that, for example, a
health intervention appraised in QALYs an a social intervention appraised in WELLBYs arenae
quietly double-coontit or left incomparable inside the same [Green Book appraisal](../green-book-appraisal/).

## Wrocht example

**Local authority lonelieness service**: a befriendin scheme serves 400 isolatit aulder residents.
Follae-up surveys shaw average life satisfaction rises frae 5.2 tae 6.0 (a gain o 0.8 pynts), an
the effect is estimatit tae persist for 2 years afore fadin.

```
WELLBYs = 400 people × 0.8 points × 2 years = 640 WELLBYs

Monetisit value = 640 × £13,000 = £8,320,000
```

Agin an annual programme cost o £300,000 (£600,000 ower 2 years), the benefit-cost ratio is
roughly 8,320,000 / 600,000 ≈ **13.9:1** — a figure that can nou sit in the same appraisal table as
a health scheme's cost-per-QALY-avertit or a transport scheme's journey-time savins.

**Charity, smawer scale**: a community arts programme reaches 50 participants wi a meisurit
satisfaction gain o 0.3 pynts, lastin 1 year.

```
WELLBYs = 50 × 0.3 × 1 = 15 WELLBYs
Monetisit value = 15 × £13,000 = £195,000
```

## Link tae saftware ingineerin

- Ony citizen-facin service that aareadies collects a life-satisfaction or wellbein survey item
  (mony local-authority an health-an-care platforms dae, follaein ONS's fower staundard wellbein
  questions) can compute WELLBYs directly frae existin data pipelines raither nor commissionin
  bespoke economic evaluation for ilka service chynge.
- WELLBYs gie engineerin teams biggin for [social value act](../social-value-act/) reportin or
  [social return on investment](../social-return-on-investment/) a nationally staundardised,
  HM-Treasury-endorsed denominator, avoidin the proliferation o bespoke "impact scores" that
  cannae be compared athort contracts or suppliers.
- Acause WELLBYs are additive athort fowk an time, they compose cleanly intae the kind o
  population-level ootcome trackin uised in [ootcomes-based accoontability](../ootcomes-based-accoontability/)
  systems — a service dashboard can report cumulative WELLBYs generatit per quarter the wey a
  health system reports QALYs gained.

## Pitfaws

- **Assumin self-reportit satisfaction gains are entirely attributable tae the intervention** —
  athoot a coonterfactual (comparison group or before/efter design wi controls), ye cannae
  separate the WELLBY gain frae general trends; see [coonterfactual analysis](../counterfactual-analysis/).
- **Mixin WELLBYs an QALYs in yin total athoot reconciliation** — HM Treasury's guidance is
  explicit that the twa uise different scales an different underlyin theories o value; summin
  them naively double-coonts owerlappin welfare.
- **Uisin the reference monetary value uncritically** — the £-per-WELLBY figure is a national
  average estimate wi real uncertainty bands; HM Treasury guidance recommends sensitivity
  analysis, nae treatin it as a fixed exchange rate.

## Sources

- HM Treasury. "Wellbeing guidance for appraisal: supplementary Green Book guidance." (2021)
  <https://www.gov.uk/government/publications/wellbeing-guidance-for-appraisal-supplementary-green-book-guidance>
- ONS. "Personal well-being user guidance" (the four standard wellbeing questions).
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing>
- HM Treasury. "The Green Book: Central Government Guidance on Appraisal and Evaluation."
