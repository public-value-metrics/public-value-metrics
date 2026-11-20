# Counterfactual Analysis: Wetin for Happen Without Di Intervention

Counterfactual na estimate of wetin for happen if intervention no dey. Without one, change wey dem observe after programme launch no fit separate from change wey for happen anyway — no counterfactual, no evidence of effect, no matter how convincing di before-and-after numbers look. HM Treasury Magenta Book treat to construct credible counterfactual as di central methodological task of impact evaluation, more important than any other single design choice.

## Wetin make am matter

"Crime fall 15% for di year after we introduce di programme" no be evidence say di programme work unless you know wetin for happen to crime without am — crime fit don fall 20% anyway because of unrelated economic or demographic trends, wey mean say di programme actually make things worse compared to di counterfactual, even though di raw number improve. Dis na di single most common analytical error for public-sector and social-sector impact claims: to mistake before/after comparison for evidence of causation. Di Magenta Book clear say impact evaluation exist to answer counterfactual question — "wetin difference dis intervention make?" — and say to answer am require to estimate, no be just to describe, di world wey no happen.

Different methods dey construct di counterfactual with different degrees of confidence, and government evaluation guidance rank dem accordingly. Randomized controlled trials (RCTs), where dem randomly assign individuals or areas to receive intervention or not, produce di strongest counterfactual because randomization make sure say di treatment and control groups differ, on average, only for say one receive di intervention. Di Cabinet Office and di What Works Network don promote RCTs across UK public policy since di 2012 "Test, Learn, Adapt" report by di Behavioural Insights Team, exactly because weaker designs dey vulnerable to confounding — di difference wey dem observe fit reflect who choose to participate, no be di effect of di programme. Where randomization no practical or e unethical (as e often be for programmes wey get statutory entitlement, or for whole-population policy changes), di Magenta Book set out clear hierarchy of weaker but still useful alternatives: matched comparison groups, difference-in-differences designs, regression discontinuity around eligibility thresholds, and, as last resort, simple before/after comparison — wey dem clearly flag as di weakest form of evidence, wey dey easily confuse di effect of di programme with di effect of everything else wey change at di same time.

## Di maths

Di counterfactual framing, wey dey apply across all methods:

```
Estimated impact = Outcome(with intervention) − Outcome(counterfactual: without intervention)

NOT:
Estimated impact ≠ Outcome(after) − Outcome(before)   [e mix time with treatment]
```

Difference-in-differences, one of di most common quasi-experimental designs for government evaluation, dey isolate di treatment effect by to subtract di comparison group own before/after change:

```
DiD estimate = [Outcome(treated, after) − Outcome(treated, before)]
             − [Outcome(comparison, after) − Outcome(comparison, before)]
```

Dis one dey remove any trend wey common to both groups (e.g. national economic shift wey affect everybody), and e leave only di differential change wey dem fit attribute to di intervention.

## Example wey dem work out

**Employment programme, before/after (weak design)**: one job-support scheme report say participant employment rise from 40% to 55% over one year — naïve conclusion of "+15 percentage points because of di programme."

**Same programme, difference-in-differences (stronger design)**: matched comparison group of similar non-participants, wey dem draw from di same local labour market, show employment wey rise from 38% to 47% over di same year (national economic recovery dey underway).

```
Treated group change:    55% − 40% = +15 percentage points
Comparison group change: 47% − 38% = +9 percentage points

DiD estimate (true programme effect) = 15 − 9 = +6 percentage points
```

Di honest attributable effect na 6 percentage points, no be 15 — more than half of di apparent before/after improvement for happen regardless of di programme, wey di same economic recovery wey lift di comparison group drive.

**Regression discontinuity, eligibility threshold**: grant scheme dey available only to businesses wey get fewer than 50 employees. To compare outcomes for businesses wey just below di threshold (45–49 employees, eligible) against businesses wey just above am (50–54 employees, ineligible) give credible counterfactual because businesses for either side of arbitrary administrative cut-off dey otherwise similar — na di threshold, no be any underlying business characteristic, determine eligibility. £2,000 average outcome difference between di two groups, wey dem observe only for di threshold, dem fit attribute am to di grant with far more confidence than simple comparison of all eligible versus all ineligible businesses (wey differ systematically for size).

## How e connect to software engineering

Counterfactual thinking suppose shape how dem design impact-tracking systems and evaluation pipelines for government and social-sector software:

- Build comparison-group capture into system from di start — to record who eligible but no enrol, or matched non-participant cohort — instead of to retrofit am after programme don already run and only before/after data exist.
- Where randomization fit work (phased rollout, digital service wey dem enable for some users before others), instrument di system to preserve random assignment as queryable field; phased rollout dey accidentally destroy im own evaluation value if dem no log di assignment order.
- Dis na di foundational method behind [impact evaluation methods](../impact-evaluation-methods-how-to-know-wetin-programme-really-cause/) and na wetin separate am from [impact evaluation vs process evaluation](../impact-evaluation-and-process-evaluation-di-difference-between-dem/), wey di latter ask whether dem deliver programme as dem intend, no be whether e cause effect.
- [Additionality and deadweight](../additionality-and-deadweight-wetin-programme-really-cause/) and [displacement and attribution](../displacement-and-attribution-how-to-know-who-take-wetin-and-who-fit-claim-credit/) both na, for root, counterfactual questions — deadweight na "wetin dis specific outcome for be without di intervention", wey dem apply for adjustment level instead of full evaluation design.

## Wahala dem wey you suppose avoid

- **To treat before/after as evidence of causation.** Dis na di most common and most consequential error for public and social-sector impact reporting; before/after change dey mix di programme effect with every other thing wey change over di same period.
- **To use comparison group wey differ systematically from di treated group.** Matched comparison group must genuinely similar for relevant characteristics (see di methods hierarchy for [counterfactual analysis](../counterfactual-analysis-wetin-for-happen-without-di-intervention/) for di Magenta Book); to compare programme participants (wey opt in, and often more motivated) against non-participants (wey no opt in) dey risk selection bias wey disguise as programme effect.
- **To destroy randomization opportunities through poor delivery design.** Phased or randomized rollout only keep im evaluation value if assignment genuinely random and dem record am — to let local managers choose who go first defeat di purpose.
- **To over-claim precision from weak design.** Dem suppose present before/after estimate as indicative, no be as measured effect size; di Magenta Book evidence hierarchy exist so dat di strength of claim go match di strength of di design wey produce am.

## Sources

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020), and its
  supplementary guide on quasi-experimental methods.
  <https://www.gov.uk/government/publications/the-magenta-book>
- Cabinet Office / Behavioural Insights Team, "Test, Learn, Adapt: Developing Public Policy with
  Randomized Controlled Trials" (2012).
- What Works Network, standards of evidence guidance. <https://www.gov.uk/guidance/what-works-network>
- Angrist JD, Pischke J-S. *Mostly Harmless Econometrics: An Empiricist's Companion*. Princeton
  University Press, 2009 (standard reference for difference-in-differences and regression
  discontinuity methods).
