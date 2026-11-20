# Additionality and Deadweight: Wetin Programme Really Cause

Additionality na to ask whether di intervention really cause one outcome wey no for happen if dem no do am. Deadweight na di opposite: di part of di outcome wey for happen anyway, even if no programme, grant or subsidy dey. Almost every impact claim wey government programme or charity make dey too big until dem remove deadweight. Na why UK evaluation guidance dey treat am as di first and di most important adjustment to any headline number.

## Wetin make am matter

"We support 500 businesses to grow" sound like better achievement, but if 300 of those businesses for grow anyway — because di local economy dey recover, because dem get other ways to get funding, because dem dey already on growth path before di programme start — den di programme true additional contribution na 200, no be 500. HM Treasury Magenta Book and di old HM Treasury/BIS "Additionality Guide" (dem first develop am for regional development and regeneration programmes, and since then dem dey use am well well for UK government evaluation) make deadweight di starting adjustment for di standard net-impact sequence: gross effect minus deadweight, minus displacement, minus leakage, adjust am for multiplier effects, and you go get net additional impact. To skip dis step na di most common way wey dem dey inflate public and social-sector impact claims, whether dem mean am or no — grant programme wey only measure gross outcomes of participants, without comparison group, no fit know wetin im own effect be and wetin for happen anyway.

Deadweight no be fixed percentage; e depend completely on di counterfactual for di particular population and intervention (see [counterfactual analysis](../counterfactual-analysis-wetin-for-happen-without-di-intervention/)). English regional-development evaluations wey dem do under di former Regional Development Agencies commonly find deadweight rates wey dey between 20–60% depending on di type of business support. Na why credible programme evaluations dey report deadweight-adjusted range instead of one assumed figure, and why funders like di National Lottery Community Fund and Big Society Capital dey require grantees to address deadweight clearly for outcomes reporting instead of to report gross number of participants.

## Di maths

Di standard net-impact adjustment sequence, as UK evaluation guidance set am out (Magenta Book; HM Treasury/BIS Additionality Guide; ESIF and structural-funds evaluation guidance):

```
Gross outcome
  − Deadweight       (wetin for happen anyway)
  − Displacement     (activity/benefit wey dem move from another place, no be new one — see
                       displacement-and-attribution)
  − Leakage          (benefit wey land outside di target group/area)
  × Multiplier        (extra indirect/induced economic activity, if e positive)
  = Net additional impact
```

Deadweight rate as proportion:

```
Deadweight rate = outcomes wey for happen without di intervention
                   / total gross outcomes wey dem observe

Net additional outcomes = Gross outcomes × (1 − Deadweight rate)
```

## Example wey dem work out

**Business-support grant programme**: one regional grant scheme report say 500 supported businesses increase employment for di next year, average of 3 jobs each — gross claim of 1,500 jobs.

One matched comparison group of similar businesses wey no get support (see [counterfactual analysis](../counterfactual-analysis-wetin-for-happen-without-di-intervention/)) show say 40% of di employment growth of di supported businesses for happen anyway, based on how di matched group perform for di same period.

```
Deadweight rate = 40%
Net additional jobs = 1,500 × (1 − 0.40) = 900 jobs
```

Di achievement wey programme fit report honestly na 900 jobs, no be 1,500 — 40% reduction just from di deadweight adjustment, before dem even think about displacement or leakage.

**Charity employment programme**: one charity place 200 long-term unemployed people for jobs wey cost £600,000 (£3,000 per placement, gross). National labour-market data show say, if no intervention dey, around 15% of one similar long-term unemployed cohort go find work for di same period through normal job-market churn.

```
Deadweight rate = 15%
Net additional placements = 200 × (1 − 0.15) = 170
True cost per additional placement = £600,000 / 170 ≈ £3,529
```

Di gross cost-per-placement figure (£3,000) dey understate di real cost of di charity additional contribution by around 15%.

## How e connect to software engineering

Additionality and deadweight matter directly to anybody wey dey build impact-measurement or grants-management software for public or social sector:

- Outcomes-reporting systems suppose capture comparison or baseline group by design, no be only outcomes of participants — to add counterfactual after system don launch without one hard pass to build di capture inside from di start (see [counterfactual analysis](../counterfactual-analysis-wetin-for-happen-without-di-intervention/)).
- Dashboards wey only report gross number of participants go always overstate impact to funders and oversight bodies; where deadweight estimates dey (from evaluation literature or comparison group), di software suppose show di net-of-deadweight figure beside di gross one, no be instead of am.
- Dis one connect directly to [social return on investment](../social-return-on-investment-how-to-show-social-value-against-money-wey-dem-spend/), wey im SROI ratio only dey credible after dem don subtract deadweight (and displacement) from di gross claimed outcomes — SROI calculator wey skip dis step go produce inflated ratios wey no go survive scrutiny.

## Wahala dem wey you suppose avoid

- **To report gross outcomes as if all of dem na additional.** Dis na di most common impact-measurement error for grant and programme reporting; always ask "e for happen anyway?" before you publish headline number.
- **To assume say one deadweight percentage dey work everywhere.** Deadweight dey vary well well by sector, population and local economic conditions; use comparison group or sector-specific evidence instead of to reuse figure from unrelated evaluation.
- **To confuse deadweight with displacement.** Deadweight na about counterfactual outcomes for di same participants; displacement na about effects on other people or places — see [displacement and attribution](../displacement-and-attribution-how-to-know-who-take-wetin-and-who-fit-claim-credit/). If you mix di two, you go double-count or under-count di adjustment.
- **Deadweight wey participants self-report.** If you ask beneficiaries "e for happen without our help?", dem go always give low deadweight estimates (participants dey like to credit di programme); independent comparison group dey more reliable pass.

## Sources

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020).
  <https://www.gov.uk/government/publications/the-magenta-book>
- HM Treasury / Department for Business, Innovation and Skills, "Additionality Guide: A Standard
  Approach to Assessing the Additional Impact of Interventions" (3rd edition), originally developed
  with English Partnerships and the Housing Corporation.
- European Commission, "Evalsed: The Resource for the Evaluation of Socio-Economic Development" —
  guidance on deadweight, displacement, and leakage in structural-funds evaluation.
- National Lottery Community Fund, "Guidance on Outcomes and Impact Reporting." <https://www.tnlcommunityfund.org.uk/>
