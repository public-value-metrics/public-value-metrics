# Cost-Effectiveness Analysis in Government

Cost-effectiveness analysis (CEA) compares the costs o alternative weys o achievin the *same* ootcome, expressit in naitural units — cost per rouch sleeper hoosed, cost per pupil brocht up tae the expectit standard, cost per tonne o CO2 abatit — athoot convertin the ootcome itsel intae siller.

## Why it maitters

The Green Book treats CEA as the fallback method whan [social cost-benefit analysis](../social-cost-benefit-analysis/)'s requirement tae monetize ilka benefit becomes no juist difficult but dishonest — whaur pittin a credible price on the ootcome wad require assumptions naebody actually haulds (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>, Chapter 5, on options appraisal whaur ootcomes arenae readily monetisable). CEA is the method borraed maist directly frae health economics — it is structurally identical tae hoo NICE compares treatments uisin cost per Quality-Adjusted Life Year — but applied tae non-health public programmes: education interventions per pupil-ootcome-pynt, hoosin programmes per hoosehaud prevented frae homelessness, employment programmes per sustained job ootcome.

The reason CEA earns its place alangside SCBA raither than bein swallaed by it is that forcin a monetary value ontae some ootcomes produces a nummer precise enough tae look authoritative an contestit enough tae be worthless in a public debate — pittin a price on "a bairn readin at the expectit standard" invites exactly the kind o challenge that derails a business case at select committee. CEA sidesteps the argument by refusin tae hae it: it ranks options on cost per unit o the *ootcome itsel*, leavin the separate political judgement o whether the ootcome is worth pursuin at aw tae the strategic case.

## The maths

```
Cost-effectiveness ratio (average) = Total cost / Total ootcome units achieved

Incremental cost-effectiveness ratio (ICER), comparin option A tae option B:
ICER = (Cost_A − Cost_B) / (Ootcome_A − Ootcome_B)

Procedure:
1. Fix the ootcome unit an meisurement method athort aw options bein comparit.
2. Cost ilka option on the same basis (see ../green-book-appraisal/, financial case)
   ower the same time horizon.
3. Discard dominatit options: onie option costin mair per unit than a cheaper
   alternative achievin the same or better ootcome is drappit.
4. Rank remainin options by incremental, no average, cost-effectiveness ratio.
```

CEA cannae, by itsel, say whether a programme is worth fundin at aw — anely whilk o several approaches tae the same goal is cheapest per unit. Decidin whether the goal itsel is worth the spend requires either convertin back tae SCBA (if a credible valuation exists) or a political/strategic judgement ootwith the maths. Whaur ootcomes genuinely cannae be reducit tae ae unit — acause a programme produces several ootcomes that maitter in different weys — uise [multi-criteria decision analysis](../multi-criteria-decision-analysis/) insteid.

## Wrocht example

**Local authority**: a cooncil compares three approaches tae reducin rouch sleepin, ilk costit ower ae year against the ootcome "individuals moved intae settled accommodation for 6+ months":

```
Option                          Cost       Ootcomes achieved   Avg CER
Housing First (intensive)       £900,000   60                  £15,000/ootcome
Hostel + move-on support        £600,000   50                  £12,000/ootcome
Outreach + private rented sector £350,000  20                  £17,500/ootcome

ICER, Hostel vs Outreach:  (600k−350k)/(50−20) = £8,333 per additional ootcome
ICER, Housing First vs Hostel: (900k−600k)/(60−50) = £30,000 per additional ootcome
```

Outreach is dominatit on average cost by Hostel, but the *incremental* step frae Outreach tae Hostel costs anely £8,333 per additional person hoosed — cheap compared wi the Housing First step, that costs £30,000 for ilka additional person ayont whit Hostel achieves. A budget-constrainit authority scalin up shuid prefer expandin Hostel afore Housing First, even though Housing First looks better on its ain average ratio.

**National government**: a literacy catch-up programme is comparit athort three delivery models on "cost per pupil reachin age-expectit readin standard": ane-tae-ane tutorin (£1,800/pupil), wee-group tutorin (£700/pupil), an digital-anely intervention (£150/pupil, but anely 40% o the ootcome rate o wee-group tutorin per pupil enrolled aince adjustit for engagement drop-aff). Aince adjustit for actual completion, digital-anely costs £375 per pupil reachin standard — still the cheapest, but the CEA cannae say whether the smaller absolute nummer o pupils helpit by digital-anely, if delivert at the same budget as wee-group, is an acceptable trade against reachin fewer pupils at greater depth; that's a distributional judgement CEA hauns back tae decision-makers.

## Link tae saftware ingineerin

CEA is the richt frame whenever engineerin teams evaluate delivery approaches for the *same* service ootcome — cost per successfully verifiet identity athort three identity-verification vendors, cost per case correctly triagit athort twa casework automation designs, cost per accessibility defect resolvit athort in-hoose versus contractit remediation. The discipline it imports straucht: define the ootcome unit afore comparin costs (no "tickets shut" — an ootput — but "uiser need actually resolvit"), an aye compute the incremental ratio atween the live system an a proposed replacement, no ilka system's average cost in isolation. See [outcomes vs outputs](../ootcomes-vs-ootputs/) an [cost per outcome](../cost-per-ootcome/).

## Pitfaws

- **Comparin average, no incremental, ratios whan decidin on an expansion.** As the rouch sleepin example shaws, the option wi the best average ratio isnae aye the cheapest next unit o ootcome tae buy.
- **Choosin an ootcome unit that's really an ootput.** "Referrals made" or "sessions delivert" meisure activity, no the ootcome the programme exists tae produce; CEA on ootputs produces a confident-lookin nummer that answers the wrang question.
- **Comparin athort genuinely different ootcomes.** CEA is anely valid whan ilka option targets the same ootcome meisured the same wey; comparin "cost per rouch sleeper hoosed" against "cost per care leaver in stable tenancy" needs a generic ootcome meisure or [multi-criteria decision analysis](../multi-criteria-decision-analysis/), no CEA.
- **Ignorin ootcome durability.** A cheaper option that produces ootcomes that dinnae last (a pupil wha slides back efter the intervention ends) isnae actually mair cost-effective aince meisured ower a comparable horizon; match the follow-up period athort the options bein comparit.

## Sources

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Chapter 5.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- National Institute for Health and Care Excellence. "Developing NICE guidelines: the manual" —
  the cost-effectiveness method this government adaptation borrows from.
  <https://www.nice.org.uk/process/pmg20>
- What Works Centre for Homelessness Impact. Cost-effectiveness evidence on homelessness
  interventions. <https://whatworks-homelessness.org.uk/>
