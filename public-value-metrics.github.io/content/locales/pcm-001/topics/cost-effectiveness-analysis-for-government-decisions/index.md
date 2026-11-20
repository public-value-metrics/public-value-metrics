# Cost-Effectiveness Analysis for Government Decisions

Cost-effectiveness analysis (CEA) dey compare di costs of different ways to achieve di *same* outcome, wey dem express for natural units — cost per rough sleeper wey dem house, cost per pupil wey dem bring up to di expected standard, cost per tonne of CO2 wey dem abate — without to convert di outcome itself into money.

## Wetin make am matter

Di Green Book treat CEA as di fallback method when di requirement of [social cost-benefit analysis](../social-cost-benefit-analysis-how-to-weigh-every-cost-and-benefit-to-society/) to monetize every benefit no only hard but e become dishonest — where to put credible price on di outcome go require assumptions wey nobody really hold (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>, Chapter 5, on options appraisal where outcomes no easy to monetise). CEA na di method wey dem borrow most directly from health economics — e structurally identical to how NICE dey compare treatments with cost per Quality-Adjusted Life Year — but dem apply am to non-health public programmes: education interventions per pupil-outcome-point, housing programmes per household wey dem prevent from homelessness, employment programmes per sustained job outcome.

Di reason why CEA earn im place beside SCBA instead of make SCBA swallow am na say to force monetary value on some outcomes dey produce number wey precise enough to look authoritative and contested enough to be useless for public debate — to put price on "child wey dey read at di expected standard" dey invite exactly di kind challenge wey dey derail business case for select committee. CEA avoid di argument by to refuse make e happen: e dey rank options on cost per unit of di *outcome itself*, and e leave di separate political judgement of whether di outcome worth to pursue at all to di strategic case.

## Di maths

```
Cost-effectiveness ratio (average) = Total cost / Total outcome units achieved

Incremental cost-effectiveness ratio (ICER), to compare option A with option B:
ICER = (Cost_A − Cost_B) / (Outcome_A − Outcome_B)

Procedure:
1. Fix di outcome unit and measurement method across all options wey dem dey compare.
2. Cost every option for di same basis (see ../green-book-appraisal/, financial case)
   over di same time horizon.
3. Discard dominated options: any option wey cost more per unit than cheaper
   alternative wey achieve di same or better outcome, dem drop am.
4. Rank di remaining options by incremental, no be average, cost-effectiveness ratio.
```

CEA no fit, by itself, tell whether programme worth to fund at all — e only fit tell which one of several approaches to di same goal cheapest per unit. To decide whether di goal itself worth di spend require either to convert back to SCBA (if credible valuation exist) or political/strategic judgement outside di maths. Where outcomes genuinely no fit reduce to one unit — because programme produce several outcomes wey matter for different ways — use [multi-criteria decision analysis](../multi-criteria-decision-analysis-how-to-weigh-options-wey-no-fit-share-one-unit/) instead.

## Example wey dem work out

**Local authority**: one council compare three approaches to reduce rough sleeping, dem cost each one over one year against di outcome "individuals wey dem move into settled accommodation for 6+ months":

```
Option                          Cost       Outcomes achieved   Avg CER
Housing First (intensive)       £900,000   60                  £15,000/outcome
Hostel + move-on support        £600,000   50                  £12,000/outcome
Outreach + private rented sector £350,000  20                  £17,500/outcome

ICER, Hostel vs Outreach:  (600k−350k)/(50−20) = £8,333 per additional outcome
ICER, Housing First vs Hostel: (900k−600k)/(60−50) = £30,000 per additional outcome
```

Hostel dominate Outreach on average cost, but di *incremental* step from Outreach to Hostel cost only £8,333 per additional person wey dem house — cheap compared to di Housing First step, wey cost £30,000 for each additional person beyond wetin Hostel achieve. Authority wey get budget constraint and dey scale up suppose prefer to expand Hostel before Housing First, even though Housing First look better on im own average ratio.

**National government**: dem compare literacy catch-up programme across three delivery models on "cost per pupil wey reach age-expected reading standard": one-to-one tutoring (£1,800/pupil), small-group tutoring (£700/pupil), and digital-only intervention (£150/pupil, but only 40% of di outcome rate of small-group tutoring per pupil enrolled once dem adjust for engagement drop-off). Once dem adjust for actual completion, digital-only cost £375 per pupil wey reach standard — e still cheapest, but di CEA no fit tell whether di smaller absolute number of pupils wey digital-only help, if dem deliver am for di same budget as small-group, acceptable trade against to reach fewer pupils for greater depth; na distributional judgement dat CEA hand back to decision-makers.

## How e connect to software engineering

CEA na di right frame anytime engineering teams dey evaluate delivery approaches for di *same* service outcome — cost per successfully verified identity across three identity-verification vendors, cost per case wey dem triage correctly across two casework automation designs, cost per accessibility defect wey dem resolve across in-house versus contracted remediation. Di discipline wey e import directly: define di outcome unit before you compare costs (no be "tickets closed" — na output — but "user need wey dem really resolve"), and always compute di incremental ratio between di live system and proposed replacement, no be each system average cost alone. See [outcomes vs outputs](../outcomes-and-outputs-di-difference-between-wetin-you-do-and-wetin-e-change/) and [cost per outcome](../cost-per-outcome-wetin-e-cost-to-really-change-person-life/).

## Wahala dem wey you suppose avoid

- **To compare average ratios instead of incremental ones when you dey decide on expansion.** As di rough sleeping example show, di option wey get di best average ratio no always be di cheapest next unit of outcome to buy.
- **To choose outcome unit wey na output really.** "Referrals made" or "sessions delivered" dey measure activity, no be di outcome wey di programme exist to produce; CEA on outputs dey produce number wey look confident but e answer wrong question.
- **To compare across outcomes wey really different.** CEA only valid when every option target di same outcome wey dem measure di same way; to compare "cost per rough sleeper housed" against "cost per care leaver for stable tenancy" need generic outcome measure or [multi-criteria decision analysis](../multi-criteria-decision-analysis-how-to-weigh-options-wey-no-fit-share-one-unit/), no be CEA.
- **To ignore outcome durability.** Cheaper option wey produce outcomes wey no last (pupil wey regress after di intervention end) no really more cost-effective once dem measure am over comparable horizon; match di follow-up period across di options wey dem dey compare.

## Sources

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Chapter 5.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- National Institute for Health and Care Excellence. "Developing NICE guidelines: the manual" —
  the cost-effectiveness method this government adaptation borrows from.
  <https://www.nice.org.uk/process/pmg20>
- What Works Centre for Homelessness Impact. Cost-effectiveness evidence on homelessness
  interventions. <https://whatworks-homelessness.org.uk/>
