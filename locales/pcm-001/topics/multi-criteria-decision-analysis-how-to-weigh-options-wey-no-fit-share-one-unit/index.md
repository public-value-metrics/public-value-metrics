# Multi-Criteria Decision Analysis: How to Weigh Options wey No Fit Share One Unit

MCDA (multi-criteria decision analysis) dey score and weigh options against plenty different criteria with weights at di same time, and e go give ranked comparison without to force every criterion enter one money or natural-unit scale. Na di appraisal method for decisions where di outcomes wey matter really no fit reduce to one number.

## Wetin make am matter

Green Book clearly allow MCDA (im Box 2 case-study appendix and Annex A both talk about am directly) for appraisals where di benefits "genuinely incommensurable" — where to change everything to money through [social cost-benefit analysis](../social-cost-benefit-analysis-how-to-weigh-every-cost-and-benefit-to-society/), or to one outcome through [cost-effectiveness analysis](../cost-effectiveness-analysis-for-government-decisions/), go misrepresent di decision instead of make am clear (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>). For example, to choose site for new prison, you must trade off capital cost against community impact, transport connectivity, environmental effect, and how e go easy to recruit staff — criteria wey no share common unit, and if you force one shared unit (usually money), you don smuggle in value judgement about how important environmental impact dey compare to cost, dress am up as objective arithmetic.

Di honesty of MCDA na also im main weak point: because na di person wey dey run di appraisal (or one panel) dey assign di weights, di method only legitimate as di weighting process. Green Book guidance talk clear say dem must agree and publish criteria and weights *before* dem score di options, exactly to stop reviewer from working backwards from option wey im like go find weights wey go justify am.

## Di maths

```
For each option i and criterion j:
  Score_ij   = how di option perform against dat criterion (often 0-100
               or 1-10, from evidence, expert judgement, or stakeholder scoring)
  Weight_j   = relative importance of criterion j, weights sum to 1 (or 100)

Weighted score of option i = Σ_j (Score_ij × Weight_j)

Procedure:
1. Agree di criteria set and weights BEFORE you score any option (swing
   weighting or pairwise comparison, e.g. AHP, na common ways to get dem).
2. Score every option against every criterion on common scale, from
   evidence where e possible.
3. Compute weighted totals; rank di options.
4. Sensitivity-test di weights: di ranking still stand if people disagree
   reasonably about how much each criterion suppose matter?
```

MCDA no dey produce defensible absolute value like how SCBA net present value dey do — e only dey produce ranking wey depend on di weights wey dem agree. Dis one na strength when di decision really na about to trade off incommensurable goods, and e become problem if dem use am to run from di harder work of monetization where monetization fit really happen.

## Example wey dem work out

**Local authority**: one council wey dey choose location for new household waste recycling centre score three sites against four criteria, and one cross-department panel weight dem before any site visit:

```
Criteria (weight):        Capital cost (30%)  Transport access (25%)
                           Community impact (25%)  Environmental impact (20%)

Site scores (0-100, higher = better):
Site A: cost 80, access 60, community 40, environment 70
Site B: cost 60, access 90, community 70, environment 50
Site C: cost 90, access 50, community 80, environment 60

Weighted totals:
Site A = 80(.30) + 60(.25) + 40(.25) + 70(.20) = 24+15+10+14 = 63
Site B = 60(.30) + 90(.25) + 70(.25) + 50(.20) = 18+22.5+17.5+10 = 68
Site C = 90(.30) + 50(.25) + 80(.25) + 60(.20) = 27+12.5+20+12 = 71.5
```

Site C rank highest. If dem run sensitivity wey move community-impact weight from 25% to 35% (dem take 10 points from capital cost), Site C total become 71.5 − 3 + 8 = 76.5 and Site B own become 68 − 6 + 7 = 69 — Site C still dey lead, so di ranking strong even if people disagree reasonably about di weighting, and na exactly dis check Green Book expect make dem report.

**Charity**: one grant-making foundation wey dey choose between to fund debt-advice service, food bank network, and financial-literacy programme use MCDA instead of SROI (see [social return on investment](../social-return-on-investment-how-to-show-social-value-against-money-wey-dem-spend/)) exactly because di trustees disagree, in good faith, about whether crisis relief or prevention suppose carry more weight — MCDA allow dem agree di *shape* of di disagreement (one weight range) instead of to pretend say single SROI ratio don settle am.

## How e connect to software engineering

MCDA na natural tool to choose vendor and architecture when di criteria really dey conflict — to choose between cloud-hosted and on-premises case management system dey trade off cost, data-sovereignty risk, accessibility, and delivery speed for ways wey no fit reduce to one number. Engineering leads suppose insist say di weighting must happen before dem score di options, exactly as Green Book require, because weighting exercise wey dem run after dem don see di shortlist dey always drift towards di option wey di room already like. See [build vs buy in government](../build-or-buy-for-government-how-to-choose/) for common MCDA application, and [public value scorecard](../public-value-scorecard-how-to-report-performance-across-many-dimensions-without-to-hide-trade-offs/) for related structured-scoring tool wey dem dey use after di decision, no be before.

## Wahala dem wey you suppose avoid

- **To set weights after you don see di options.** Na di most common way dem dey game MCDA, on purpose or no be on purpose; publish di weights before scoring, and record who set dem.
- **To treat di weighted total as hard number.** Score of 71.5 versus 68 no be gap wey get statistical meaning unless sensitivity analysis confirm say di ranking stable; report ranges, no be false precision.
- **To use MCDA to avoid monetization wey fit really happen.** If dem fit credibly price most criteria, to default to MCDA instead of [SCBA](../social-cost-benefit-analysis-how-to-weigh-every-cost-and-benefit-to-society/) dey throw away information wey di appraisal for use.
- **To let one dominant stakeholder set all di weights alone.** Green Book good practice expect make dem get weights from representative panel, no be di sponsoring director, so di appraisal no go just dey re-derive wetin dat person already want.

## Sources

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Annex A
  (multi-criteria decision analysis) and Box 2 case studies.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Communities and Local Government. "Multi-criteria analysis: a manual." 2009.
  <https://www.gov.uk/government/publications/multi-criteria-analysis-a-manual>
- Belton V, Stewart TJ. "Multiple Criteria Decision Analysis: An Integrated Approach." Kluwer,
  2002.
