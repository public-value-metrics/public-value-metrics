# Impact Evaluation Methods (Methods for evaluatin impact)

Impact evaluation methods are the statistical an experimental designs uised tae estimate whit a policy or programme actually caused, as distinct frae whit wad hae happened onyway — randomized controlled trials (RCTs), difference-in-differences, propensity score matchin, an regression discontinuity design are the fower maist commonly uised in UK public policy. They exist acause maist government interventions cannae be testit in a laboratory: ye cannae randomize whilk toun gets a new bus route the wey ye can randomize whilk patient gets a drug, sae thae methods borrow the same causal logic athoot aye requirin random assignment.

## Why it maitters

HM Treasury's Magenta Book, Annex A on quasi-experimental methods, is the UK government's canonical guidance on choosin atween thae designs, an bodies sic as the Education Endowment Foundation an the What Works Centre for Local Economic Growth institutionalize an evidence hierarchy biggit roond them — RCTs whaur randomization is feasible an ethical, quasi-experimental designs whaur it isnae. The choice o method isnae a technical afterthocht: it determines whether an evaluation can answer "did the programme cause this?" or anely "did this happen efter the programme stertit?", which is the same question [counterfactual analysis](../counterfactual-analysis/) is biggit tae force practitioners tae spier afore onie evaluation is commissioned.

## The maths

```
RCT:
  Impact = mean(outcome | treatment group) − mean(outcome | control group)
  (valid because assignment to treatment is random)

Difference-in-differences (DiD):
  Impact = [outcome_after(treated) − outcome_before(treated)]
         − [outcome_after(control) − outcome_before(control)]
  (requires a "parallel trends" assumption: treated and control would have moved together
   absent the intervention)

Propensity score matching (PSM):
  1. Estimate P(treatment = 1 | covariates X) for every unit → propensity score
  2. Match treated units to untreated units with similar propensity scores
  3. Impact = mean(outcome | treated) − mean(outcome | matched control)

Regression discontinuity design (RDD):
  Impact = jump in outcome observed at the eligibility threshold,
           comparing units just above vs just below the cutoff
```

## Wrocht example

**Local authority (difference-in-differences for a troubled families programme)**: ootcome is school attendance. The treatit area muives frae 84% tae 89% attendance (+5 percentage pynts) ower the programme period; a comparable but untreatit area muives frae 85% tae 87% (+2 percentage pynts) ower the same period. DiD impact estimate: 5 − 2 = +3 percentage pynts attributable tae the programme. Applyit tae a cohort o 2,000 pupils in the treatit area, this is consistent wi roughly 60 additional pupils (3% × 2,000) reachin the heicher attendance category, an extrapolation that shuid be reportit wi its parallel-trends caveat, no as a precise headcoont.

**Charity (propensity score matching for an employability charity)**: 300 programme participants are matched tae 300 individuals frae a lairger administrative dataset uisin propensity scores biggit frae age, prior employment history, an qualification level. Twal-month employment rate: matched treatit group 46%, matched comparison group 33%. PSM impact estimate: 46% − 33% = +13 percentage pynts attributable tae the programme, conditional on nae unobservit confounder (sic as motivation) drivin baith participation an ootcome.

## Link tae saftware ingineerin

Whether onie o thae designs is feasible later depends heavily on data ingineerin decisions made early. RDD needs an accurately recordit runnin variable an a genuinely clean eligibility cutoff; DiD needs comparable panel data ower time for baith treatit an comparison areas, which means consistent joins athort systems an years; PSM needs rich baseline covariate data captured afore treatment, no reconstructit efterhaun. A data model designed alangside a [theory o chynge](../theory-o-chynge/) an [logic model](../logic-model/) frae the stert — capturin baseline covariates, dates, an comparison-group-eligible records — is whit maks a rigorous impact evaluation possible later, insteid o an expensive post-hoc scramble. See [impact evaluation vs process evaluation](../impact-evaluation-vs-process-evaluation/) for the complementary question thae methods dinnae answer on their ain.

## Pitfaws

- **Forcin an RCT whaur infeasible or unethical**, or conversely never considerin a quasi-experimental design whan a genuine opportunity for ane — a policy cutoff, a phasit rollout — wis available an unuised.
- **Ignorin the parallel-trends assumption in DiD.** If the comparison area wis awready divergin frae the treatit area afore the intervention, the twa-pynt comparison is contaminatit; check pre-trends, no juist afore/efter.
- **Matchin anely on observit covariates in PSM.** Unobservit selection, sic as participant motivation, can bias the estimate even whan observit covariates are weel balanced.
- **Runnin variable manipulation in RDD.** If fowk can influence their score tae faa juist inside an eligibility threshold, the discontinuity nae langer isolates a causal effect.

## Sources

- HM Treasury, Magenta Book (2020), Annex A: Quasi-Experimental Methods. <https://www.gov.uk/government/publications/the-magenta-book>
- What Works Centre for Local Economic Growth, evidence review methodology. <https://whatworksgrowth.org/>
- Education Endowment Foundation, evaluation guidance. <https://educationendowmentfoundation.org.uk/>
