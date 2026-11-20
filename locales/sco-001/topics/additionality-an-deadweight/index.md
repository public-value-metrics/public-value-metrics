# Additionality an Deadweight

Additionality speirs whit an intervention caused an ootcome that wouldnae itherwise hae happened. Deadweight is its mirror: the share o an ootcome that wad hae come aboot onyway, even athoot the programme, grant or subsidy. Near ilka impact claim frae a government programme or a charity owerstates its effect until deadweight is taen awa, which is why UK evaluation guidance treats it as the first an maist important adjustment tae onie headline nummer.

## Why it maitters

"We supportit 500 businesses tae grow" sounds like a gey achievement, but if 300 o thae businesses wad hae grown onyway — acause the local economy wis recoverin, acause they haed ither funding routes, acause they were awready on a growth trajectory afore the programme stertit — the programme's true additional contribution is 200, no 500. HM Treasury's Magenta Book an the lang-staundin HM Treasury/BIS "Additionality Guide" (developit at the stert for regional development an regeneration programmes, an wuidly uised athort UK government evaluation syne) mak deadweight the stertin adjustment in the staundart net-impact sequence: gross effect meinus deadweight, meinus displacement, meinus leakage, adjustit for multiplier effects, equals net additional impact. Skippin this step is the single commonest wey public an social-sector impact claims get inflatit, on purpose or no — a grant programme that anely meisures gross participant ootcomes, wi nae comparison group, cannae tell its ain effect frae whit wad hae happened regairdless.

Deadweight isnae a fixed percentage; it depends wholly on the counterfactual for the particular population an intervention (see [counterfactual analysis](../counterfactual-analysis/)). English regional-development evaluations unner the auld Regional Development Agencies commonly fund deadweight rates in the range o 20–60% dependin on the kind o business support, which is why credible programme evaluations report a deadweight-adjustit range raither than a single assumed figure, an why funders sic as the National Lottery Community Fund an Big Society Capital require grantees tae address deadweight explicitly in ootcomes reportin raither than reportin gross participant coonts.

## The maths

The staundart net-impact adjustment sequence, as laid oot in UK evaluation guidance (Magenta Book; HM Treasury/BIS Additionality Guide; ESIF an structural-funds evaluation guidance):

```
Gross ootcome
  − Deadweight       (whit wad hae happened onyway)
  − Displacement     (activity/benefit shiftit frae elsewhaur, no creatit — see
                       displacement-and-attribution)
  − Leakage          (benefit gaun ootwith the target group/area)
  × Multiplier        (additional indirect/induced economic activity, whaur positive)
  = Net additional impact
```

Deadweight rate as a proportion:

```
Deadweight rate = ootcomes that wad hae occurred athoot the intervention
                   / total gross ootcomes observed

Net additional ootcomes = Gross ootcomes × (1 − Deadweight rate)
```

## Wrocht example

**Business-support grant programme**: a regional grant scheme reports 500 supportit businesses increased employment in the follaein year, an average o 3 jobs each — a gross claim o 1,500 jobs.

A matched comparison group o like businesses that werenae supportit (see [counterfactual analysis](../counterfactual-analysis/)) shows that 40% o the supportit businesses' employment growth wad hae happened onyway, based on hoo the matched group performed ower the same period.

```
Deadweight rate = 40%
Net additional jobs = 1,500 × (1 − 0.40) = 900 jobs
```

The programme's honestly reportable achievement is 900 jobs, no 1,500 — a 40% cut juist frae the deadweight adjustment, afore displacement or leakage are even thocht aboot.

**Charity employment programme**: a charity places 200 lang-term unemployed fowk intae jobs at a cost o £600,000 (£3,000 per placement, gross). National labour-market data shows that, athoot onie intervention, roughly 15% o a comparable lang-term unemployed cohort finds wark athin the same period through naitural job-market churn.

```
Deadweight rate = 15%
Net additional placements = 200 × (1 − 0.15) = 170
True cost per additional placement = £600,000 / 170 ≈ £3,529
```

The gross cost-per-placement figure (£3,000) unnerstates the real cost o the charity's additional contribution by roughly 15%.

## Link tae saftware ingineerin

Additionality an deadweight maitter straucht awa for onybody buildin impact-meisurement or grants-management software for the public or social sector:

- Ootcomes-reportin systems shuid captur a comparison or baseline group by design, no juist participant ootcomes — retrofittin a counterfactual efter a system launches athoot ane is faur harder than biggin the capture in frae the stert (see [counterfactual analysis](../counterfactual-analysis/)).
- Dashboards that report anely gross participant coonts will systematically owerstate impact tae funders an owersicht bodies; whaur deadweight estimates exist (frae evaluation literature or a comparison group), the software shuid shaw the net-o-deadweight figure alangside the gross ane, no insteid o it.
- This connects straucht tae [social return on investment](../social-return-on-investment/), whase SROI ratio is anely credible aince deadweight (an displacement) hae been taen aff the gross claimed ootcomes — an SROI calculator that leaves oot this step will produce inflatit ratios that dinnae staund up tae scrutiny.

## Pitfaws

- **Reportin gross ootcomes as if they were aw additional.** This is the commonest impact-meisurement mistak in grant an programme reportin; aye spier "wad this hae happened onyway?" afore publishin a headline nummer.
- **Assumin a single deadweight percentage applies ilkaweaur.** Deadweight varies hugely by sector, population, an local economic conditions; uise a comparison group or sector-specific evidence raither than re-uisin a figure frae an unrelatit evaluation.
- **Mixin up deadweight wi displacement.** Deadweight is aboot counterfactual ootcomes for the same participants; displacement is aboot effects on ither fowk or places — see [displacement and attribution](../displacement-an-attribution/). Mixin the twa leads tae double-coontin or unner-coontin the adjustment.
- **Self-reportit deadweight frae participants.** Spierin beneficiaries "wad this hae happened athoot oor help?" gies systematically laich deadweight estimates (participants tend tae gie the programme the credit); an independent comparison group is faur mair reliable.

## Sources

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020).
  <https://www.gov.uk/government/publications/the-magenta-book>
- HM Treasury / Department for Business, Innovation and Skills, "Additionality Guide: A Standard
  Approach to Assessing the Additional Impact of Interventions" (3rd edition), originally developed
  with English Partnerships and the Housing Corporation.
- European Commission, "Evalsed: The Resource for the Evaluation of Socio-Economic Development" —
  guidance on deadweight, displacement, and leakage in structural-funds evaluation.
- National Lottery Community Fund, "Guidance on Outcomes and Impact Reporting." <https://www.tnlcommunityfund.org.uk/>
