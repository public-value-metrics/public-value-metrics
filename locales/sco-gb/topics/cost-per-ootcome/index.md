# Cost per Ootcome

Cost per ootcome is total programme spend dividit by the nummer o fowk wha achieve a definit, meaningfu chynge in their circumstances — no the nummer wha juist received a service. It is the shairpest efficiency metric a funder or delivery team can uise, acause it forces a prior question that maist charities dodge: whit, precisely, coonts as success?

## Why it maitters

A food bank can report twa gey different nummers frae the same year's accoonts. Cost per food parcel distributit micht be £15. Cost per hoosehaud that gaes on tae achieve food security — nae langer needin emergency food aid, verifiet at a follow-up pynt — micht be £340. Baith are true. Anely ane tells a funder whether the siller is warkin. The gap atween them is the gap atween an ootput an an ootcome: a parcel handit ower is an ootput; a hoosehaud nae langer in crisis is an ootcome. See [outcomes vs outputs](../ootcomes-vs-ootputs/).

The UK third sector haes spent twa decades biggin infrastructure tae force this distinction. New Philanthropy Capital's "four pillar approach" tae charity effectiveness explicitly asks organizations tae state their ootcomes afore their ootputs, an Inspiring Impact — the UK funder-backit impact meisurement collaborative — publishes an Outcomes Matrix that mony grant applications nou require charities tae complete. The Trussell Trust's annual "State of Hunger" research programme, run wi Heriot-Watt University, exists precisely acause parcel coonts alane say naething aboot whether fowk escape food insecurity.

Cost per ootcome anely means somethin aince ye hae fixit the counterfactual: an ootcome achieved "onyway" isnae an ootcome the programme bocht. See [counterfactual analysis](../counterfactual-analysis/) an [displacement and attribution](../displacement-an-attribution/).

## The maths

```
Cost per ootcome = Total programme cost / Nummer o beneficiaries achievin the definit ootcome

whaur:
  Total programme cost   = direct delivery cost + fair share o owerheid
  Definit ootcome        = a pre-specifiet, meisurable state chynge
                            (e.g. "food secure at 6-month follow-up",
                            no "received a food parcel")
```

Compare against [unit cost databases](../unit-cost-databases/) (e.g. sector-specific unit cost benchmarks) tae judge whether a gien cost per ootcome is guid, average, or puir compared wi comparable interventions.

## Wrocht example

**Food bank, ae year**:

- Total programme cost: £450,000
- Parcels distributit: 30,000
- Cost per parcel (an ootput metric): £450,000 / 30,000 = **£15**

The charity an aw runs a six-month follow-up survey wi a sample o hoosehauds, findin that 35% o hoosehauds that received three or mair parcels report nae langer needin emergency food aid an score abune the food-security threshold on a staundart food-security survey module. O 1,800 hoosehauds receivin three-plus parcels that year, 630 achieve that ootcome.

```
Cost per ootcome = £450,000 / 630 = £714 per hoosehaud achievin food security
```

That £714 figure is the ane a funder comparin this charity tae a cash-transfer pilot or a debt-advice service shuid uise — no £15. If a comparable cash-transfer programme in the same region achieves food security at £500 per hoosehaud, the food bank isnae obviously the mair efficient route tae the same ootcome, even though its per-parcel cost looks cheap.

## Link tae saftware ingineerin

Maist case-management systems are biggit tae log ootputs, acause ootputs are whit happens inside the transaction (a parcel is handit ower, a form is submittit). Ootcomes usually happen later, aften ootwith the system's normal capture windae, an require a deliberate design decision: big a follow-up mechanism (a survey trigger, a re-contact workflow, a data-linkage exercise) as a first-class feature, no an efterthocht bolted on for an annual report. Engineers biggin grant management or case management platforms for the sector shuid treat "whit is the ootcome event, an hoo dae we observe it" as a requirements question spierit afore the data model is fixit — it's faur harder tae retrofit an ootcome field than an ootput coonter. See [outcomes vs outputs](../ootcomes-vs-ootputs/) an [logic model](../logic-model/) for hoo tae structure that requirements conversation, an [cost per beneficiary](../cost-per-beneficiary/) for the faster, cruder metric teams reach for whan ootcome trackin isnae yet biggit.

## Pitfaws

- **Reportin ootputs dressed as ootcomes.** "Fowk reached" isnae "fowk helpit." If the metric can be produced by a system log wi nae follow-up contact, it's near certainly an ootput.
- **Denominator gamin.** Narrowin the ootcome population tae "thae wha completit the programme" quietly drops the fowk wha drappit oot — aften the hardest cases — an inflates the apparent rate. State the denominator as awbody wha stertit, no awbody wha finished.
- **Nae counterfactual.** Coontin onybody wha achieved the ootcome, includin thae wha wad hae onyway, owerstates whit the programme bocht. See [counterfactual analysis](../counterfactual-analysis/).
- **Comparin athort incompatible ootcome definitions.** "Food secure" meisured by a validatit survey module isnae comparable tae "food secure" self-reportit in a satisfaction form; a cost-per-ootcome league table is anely honest whan the ootcome definitions match.

## Sources

- New Philanthropy Capital (NPC), "Four Pillar Approach" to charity effectiveness. <https://www.thinknpc.org/resource-hub/four-pillar-approach/>
- Inspiring Impact, Outcomes Matrix and impact measurement resources. <https://inspiringimpact.org/>
- Trussell Trust and Heriot-Watt University, "State of Hunger" research programme. <https://www.trusselltrust.org/state-of-hunger/>
- GiveWell, "Our criteria" (cost-effectiveness as the leading criterion for charity recommendation). <https://www.givewell.org/how-we-work/our-criteria>
