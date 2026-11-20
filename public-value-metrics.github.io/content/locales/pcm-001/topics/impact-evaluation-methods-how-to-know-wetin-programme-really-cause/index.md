# Impact Evaluation Methods: How to Know Wetin Programme Really Cause

Impact evaluation methods na di statistical and experimental designs wey dem dey use to estimate wetin policy or programme really cause, as distinct from wetin for happen anyway — randomized controlled trials (RCTs), difference-in-differences, propensity score matching, and regression discontinuity design na di four wey dem most commonly dey use for UK public policy. Dem exist because dem no fit test most government interventions for laboratory: you no fit randomize which town go get new bus route di way you fit randomize which patient go get drug, so dis methods borrow di same causal logic without always to require random assignment.

## Wetin make am matter

HM Treasury Magenta Book, Annex A on quasi-experimental methods, na di UK government canonical guidance on how to choose between dis designs, and bodies like di Education Endowment Foundation and di What Works Centre for Local Economic Growth dey institutionalize evidence hierarchy wey dem build around dem — RCTs where randomization feasible and ethical, quasi-experimental designs where e no be so. Di choice of method no be technical afterthought: e determine whether evaluation fit answer "di programme cause dis?" or only "dis happen after di programme start?", wey na di same question wey [counterfactual analysis](../counterfactual-analysis-wetin-for-happen-without-di-intervention/) dey built to force practitioners to ask before dem commission any evaluation.

## Di maths

```
RCT:
  Impact = mean(outcome | treatment group) − mean(outcome | control group)
  (valid because assignment to treatment na random)

Difference-in-differences (DiD):
  Impact = [outcome_after(treated) − outcome_before(treated)]
         − [outcome_after(control) − outcome_before(control)]
  (e require "parallel trends" assumption: treated and control for move together
   if di intervention no dey)

Propensity score matching (PSM):
  1. Estimate P(treatment = 1 | covariates X) for every unit → propensity score
  2. Match treated units to untreated units wey get similar propensity scores
  3. Impact = mean(outcome | treated) − mean(outcome | matched control)

Regression discontinuity design (RDD):
  Impact = jump for outcome wey dem observe for di eligibility threshold,
           as dem compare units wey just dey above vs just dey below di cutoff
```

## Example wey dem work out

**Local authority (difference-in-differences for troubled families programme)**: di outcome na school attendance. Di treated area move from 84% to 89% attendance (+5 percentage points) over di programme period; comparable but untreated area move from 85% to 87% (+2 percentage points) over di same period. DiD impact estimate: 5 − 2 = +3 percentage points wey dem attribute to di programme. If dem apply am to cohort of 2,000 pupils for di treated area, dis consistent with roughly 60 additional pupils (3% × 2,000) wey reach di higher attendance category, extrapolation wey dem suppose report with im parallel-trends caveat, no be as precise headcount.

**Charity (propensity score matching for employability charity)**: dem match 300 programme participants to 300 individuals from larger administrative dataset using propensity scores wey dem build from age, prior employment history, and qualification level. Twelve-month employment rate: matched treated group 46%, matched comparison group 33%. PSM impact estimate: 46% − 33% = +13 percentage points wey dem attribute to di programme, conditional on say no unobserved confounder (like motivation) dey drive both participation and outcome.

## How e connect to software engineering

Whether any of dis designs go feasible later depend heavily on data engineering decisions wey dem make early. RDD need accurately recorded running variable and genuinely clean eligibility cutoff; DiD need comparable panel data over time for both treated and comparison areas, wey mean consistent joins across systems and years; PSM need rich baseline covariate data wey dem capture before treatment, no be wey dem reconstruct afterward. Data model wey dem design alongside [theory of change](../theory-of-change-how-to-map-di-road-from-activities-go-long-term-goal/) and [logic model](../logic-model-how-to-map-programme-from-inputs-go-reach-impact/) from di start — wey capture baseline covariates, dates, and comparison-group-eligible records — na wetin dey make rigorous impact evaluation possible later, instead of expensive post-hoc scramble. See [impact evaluation vs process evaluation](../impact-evaluation-and-process-evaluation-di-difference-between-dem/) for di complementary question wey dis methods no dey answer on dia own.

## Wahala dem wey you suppose avoid

- **To force RCT where e no feasible or e unethical**, or di opposite, to never consider quasi-experimental design wen genuine opportunity for one — policy cutoff, phased rollout — dey available and dem no use am.
- **To ignore di parallel-trends assumption for DiD.** If di comparison area don already dey diverge from di treated area before di intervention, di two-point comparison don contaminate; check pre-trends, no be just before/after.
- **To match only on observed covariates for PSM.** Unobserved selection, like participant motivation, fit bias di estimate even when observed covariates balance well.
- **Running variable manipulation for RDD.** If pipo fit influence dia score to fall just inside eligibility threshold, di discontinuity no go isolate causal effect again.

## Sources

- HM Treasury, Magenta Book (2020), Annex A: Quasi-Experimental Methods. <https://www.gov.uk/government/publications/the-magenta-book>
- What Works Centre for Local Economic Growth, evidence review methodology. <https://whatworksgrowth.org/>
- Education Endowment Foundation, evaluation guidance. <https://educationendowmentfoundation.org.uk/>
