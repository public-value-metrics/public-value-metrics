# Shadae pricin

A shadae price is an estimatit value gien tae a guid, resource, or externality that haes nae
merkit price ye can see, or whase merkit price is warpit an disnae reflect its true social value.
Government appraisal depends on a wee set o official shadae prices — cairbon, non-wark time,
unemployed labour — publisht centrally sae that ilka depairtment uises the same nummer.

## Why it maitters

Shadae prices exist acause [social cost-benefit analysis](../social-cost-benefit-analysis/)
cannae function athoot a monetary value for ilka cost an benefit, an a wheen o the maist
weighty anes — a tonne o cairbon emittit, an oor o a commuter's time, an oor o itherwise
unemployed labour — hae nae merkit price ava, or a merkit price that misrepresents their true
social cost. HM Treasury an the Depairtment for Energy Security an Net Zero jointly publish the
shadae price o cairbon uised athort aw UK government appraisal
(<https://www.gov.uk/government/publications/valuing-greenhouse-gas-emissions-in-policy-appraisal>),
derived nae frae ony cairbon merkit price but frae a target-consistent approach: the cairbon value is
set at the merginal abatement cost needit tae hit the UK's legislatit cairbon budgets, that bein a
fundamentally ither logic frae lookin at whit cairbon actually tredes for on the EU or UK
Emissions Treding Scheme.

The shadae wage rate follaes a likesome logic on the labour side. Employin somebody wha wad
itherwise hae been unemployed disnae cost society their hail wage — pairt o that wage is a
transfer frae foregane benefits peyments an tint leisure/seirch time raither nor a net new draw on
society's resources — sae Green Book guidance sets a shadae price ablow the merkit wage for labour
drawn frae unemployment, reflectin the true opportunity cost o that labour (see
[opportunity cost in public spendin](../opportunity-cost-in-public-spendin/)) raither nor its
merkit price.

## The maths

```
Shadae price o cairbon (illustrative structure, current values frae the
official BEIS/DESNZ cairbon values tool — dinnae uise stale figures):
  Tredit sector value: informed bi ETS allowance price trajectories
  Non-tredit sector (target-consistent) value: set tae the merginal cost
    o abatement needit tae meet legislatit cairbon budgets, risin ower
    time as easier abatement options are uised up
  Applied as: £/tonne CO2e × tonnes emittit or abatit bi the option,
    discoontit at the social discoont rate for future years

Shadae wage rate (SWR):
  SWR = Merkit wage − (value o foregane leisure/seirch time saved
                        + value o welfare peyments nae langer peyed)
  Typically expressed as a fraction o the merkit wage (e.g. SWR = 0.6
    × merkit wage in a high-unemployment aurie, per Green Book Annex A
    guidance on labour merkits wi spare capacity)
```

Baith figures are policy conventions set centrally, nae empirical merkit observations — the hail
pynt o a shadae price is tae staund in for a missin or warpit merkit, sae an appraisal uisin
yin maun cite the current official source raither nor derive its ain figure, jist sae that ilka
depairtment's appraisal is comparable.

## Wrocht example

**National government**: a flood defence scheme appraisal estimates it avoids 400 tonnes o CO2e
emissions per year (throu less uise o emergency plant an less embodied cairbon frae
avoidit reconstruction) ower a 30-year appraisal life, compared wi a "do minimum" baseline.

```
Illustrative shadae price o cairbon: £280/tonne CO2e (year 1, risin ower
  the appraisal period per the official non-tredit cairbon values schedule)
Year 1 cairbon benefit = 400 × £280 = £112,000
```

Acause the official schedule haes the cairbon value *risin* ower the appraisal period (reflectin
tichtenin cairbon budgets), the analyst maun apply the richt year-specific value for ilka year o
the 30-year stream, nae a flat rate — uisin the year 1 value throu the hail thing wad unnerstate later-year
benefits an warp the rankin agin alternative flood defence designs wi different cairbon
profiles.

**Local authority**: a cooncil's employment support programme for lang-term unemployed residents
places 150 fowk intae jobs peyin £11/oor. Valuin this uisin the full merkit wage wad credit
the programme wi £11 × oors warked as a social benefit, but the shadae wage rate approach
recognises that thir werenae warkers drawn frae ither jobs — the true opportunity cost o their
labour afore the programme wis laich.

```
Merkit wage: £11.00/oor
Shadae wage rate (illustrative, high local unemployment): 0.6 × merkit wage = £6.60/oor
Net social benefit attributable per oor warked ≈ £11.00 − £6.60 = £4.40/oor
  (the "extra" value creatit bi muivin genuinely idle labour intae production,
   as distinct frae the wage itsel, that is lairgely a transfer)
```

This is why appraisals o employment programmes in high-unemployment auries can shaw a positive net
social value even whan the same programme, rin in a full-employment aurie whaur displacit labour
wad juist be drawn frae ither jobs, wadnae.

## Link tae saftware ingineerin

Shadae pricin seldom touches saftware delivery directly, but it maitters whenever a business case
claims a cairbon or social benefit frae an IT chynge — a data-centre consolidation claimin cairbon
savins, or a paperless-service claimin avoidit prentin an postage cairbon, maun uise the current
official shadae price o cairbon raither nor an inventit figure, an maun apply the richt
year-bi-year schedule raither nor a flat rate, exactly as wi ony ither Green Book appraisal input.
See [total cost o ownership in government IT](../total-cost-o-ownership-in-government-it/) an
[public sector cybersecurity value](../value-o-cybersecurity-in-the-public-sector/), baith o that aften
need a shadae price for a hard-tae-monetise input (breach risk, doun-time) alangside directly costit
items.

## Pitfaws

- **Uisin a stale cairbon or wage figure.** Baith values are revised nou an agin bi central
  guidance; an appraisal biggit on a superseded figure winnae survive Treasury scrutiny.
- **Applyin a flat shadae cairbon price athort a multi-decade appraisal.** The official schedule
  rises ower time; uisin year 1's value throu the hail thing misstates the profile o benefits or costs.
- **Mixin up the shadae wage wi a discoont on the warker's actual pey.** The shadae wage rate
  adjusts the *appraisal's* valuation o the labour input, nae the wage the warker is actually
  peyed — muddlin the twa invites (wrang) justifyin ablow-merkit pey.
- **Derivin a bespoke shadae price insteid o uisin the official yin.** Shadae prices are policy
  conventions jist sae appraisals are comparable athort depairtments; a locally inventit figure,
  hooever weel-reasoned, braks that comparability.

## Sources

- HM Treasury / Department for Energy Security and Net Zero. "Valuing greenhouse gas emissions in
  policy appraisal." <https://www.gov.uk/government/publications/valuing-greenhouse-gas-emissions-in-policy-appraisal>
- HM Treasury. "The Green Book: appraisal and evaluation in central government," Annex A (shadow
  price of labour, non-work time values).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Little IMD, Mirrlees JA. "Project Appraisal and Planning for Developing Countries." Heinemann,
  1974 (foundational shadow-pricing methodology).
