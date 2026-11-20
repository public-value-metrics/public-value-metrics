# Multi-criteria decision analysis (MCDA)

MCDA scores and weighs options agin several distinct, weighted criteria at ance, producin a
ranked comparison wioot forcin ilka criterion intae ae monetary or natural-unit scale. It is
the appraisal method for decisions whaur the ootcomes that maitter genuinely cannae be reduced tae a
single nummer.

## Why it maitters

The Green Book (the Treasury's appraisal guidance) explicitly sanctions MCDA (its Box 2 case-study appendix and Annex A baith discuss
it directly) for appraisals whaur benefits are "genuinely incommensurable" — whaur convertin
iverythin tae money via [social cost-benefit analysis](../social-cost-benefit-analysis/), or tae ae
ootcome via [cost-effectiveness analysis](../cost-effectiveness-analysis-in-government/), wad
misrepresent the decision raither nor clarify it
(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>).
A site selection for a new prison, for instance, trades aff capital cost agin community impact,
transport connectivity, environmental effect, and staff recruitability — criteria that dinnae share
a common unit and whaur forcin a shared unit (typically money) wad smuggle in a value judgement
aboot the relative importance o, say, environmental impact versus cost, dressed up as objective
arithmetic.

MCDA's honesty is as weel its main vulnerability: because weights are assigned by whaever rins the
appraisal (or by a panel), the method is only as legitimate as the weightin process. Green Book
guidance is clear that criteria and weights maun be agreed and published *afore* options are
scored, juist tae stop a reviewer workin backwards frae a preferred option tae the weights
that justify it.

## The maths

```
For each option i and criterion j:
  Score_ij   = the option's performance against that criterion (often 0-100
               or 1-10, from evidence, expert judgement, or stakeholder scoring)
  Weight_j   = relative importance of criterion j, weights sum to 1 (or 100)

Weighted score of option i = Σ_j (Score_ij × Weight_j)

Procedure:
1. Agree the criteria set and weights BEFORE scoring any option (swing
   weighting or pairwise comparison, e.g. AHP, are common elicitation methods).
2. Score every option against every criterion on a common scale, from
   evidence where possible.
3. Compute weighted totals; rank options.
4. Sensitivity-test the weights: does the ranking survive plausible
   disagreement about how much each criterion should matter?
```

MCDA disnae produce a defensible absolute value the wey SCBA's net present value does — it only
produces a ranking conditional on the agreed weights. This is a strength whan the decision is
genuinely aboot tradin aff incommensurable gueds, and a weakness if uised tae dodge the herder work
o monetization whaur monetization wis actually possible.

## Wrocht example

**Local authority**: a cooncil selectin a location for a new household waste recyclin centre
scores three sites agin fower criteria, weighted by a cross-department panel afore ony site
veisit:

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

Site C ranks heichest. A sensitivity run that shifts the community-impact weight frae 25% tae 35%
(takin 10 pynts aff capital cost) chynges Site C's total tae 71.5 − 3 + 8 = 76.5 and Site B's tae
68 − 6 + 7 = 69 — Site C still leads, sae the ranking is robust tae that plausible disagreement aboot
weightin, which is exactly the check the Green Book expects tae see reportit.

**Charity**: a grant-makin foundation choosin atween fundin a debt-advice service, a food bank
network, and a financial-literacy programme uises MCDA raither nor SROI (see
[social return on investment](../social-return-on-investment/)) juist because the trustees
disagree, in guid faith, aboot whether crisis relief or prevention sud weigh mair heavily — MCDA
lets them agree the *shape* o the disagreement (a weight range) raither nor pretend a single SROI
ratio settles it.

## Link tae saftware ingineerin

MCDA is the natural tool for vendor and architecture selection whan criteria genuinely clash —
choosin atween a cloud-hosted and an on-premises case management system trades aff cost,
data-sovereignty risk, accessibility, and delivery speed in wiys that dinnae reduce tae ae nummer.
Ingineerin leads sud insist the weightin happens afore the options are scored, exactly as the
Green Book requires, because a weightin exercise rin efter seein the shortlist reliably drifts
towards whichever option the room already favoured. See
[build vs buy in government](../big-or-buy-in-government/) for a common MCDA application, and
[public value scorecard](../public-value-scorecard/) for a related structured-scorin tool uised
post-decision raither nor pre-decision.

## Pitfaws

- **Settin weights efter seein the options.** This is the commonest wey MCDA is gamed,
  intentionally or no; publish weights afore scorin, and record wha set them.
- **Treatin the weighted total as a hard nummer.** A score o 71.5 versus 68 is nae a
  statistically meaningfu gap unless the sensitivity analysis confirms the ranking is stable;
  report ranges, nae false precision.
- **Uisin MCDA tae avoid monetization that wis actually feasible.** If maist criteria could be
  credibly priced, defaultin tae MCDA instead o [SCBA](../social-cost-benefit-analysis/) discards
  information the appraisal could hae uised.
- **Lettin ae dominant stakeholder set aw the weights alane.** Green Book guid practice expects
  weights tae be elicitit frae a representative panel, nae the sponsorin director, tae avoid the
  appraisal simply re-derivin whit that person already wantit.

## Sources

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Annex A
  (multi-criteria decision analysis) and Box 2 case studies.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Communities and Local Government. "Multi-criteria analysis: a manual." 2009.
  <https://www.gov.uk/government/publications/multi-criteria-analysis-a-manual>
- Belton V, Stewart TJ. "Multiple Criteria Decision Analysis: An Integrated Approach." Kluwer,
  2002.
