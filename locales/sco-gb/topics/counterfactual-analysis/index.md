# Counterfactual Analysis

A counterfactual is an estimate o whit wad hae happened in the absence o an intervention. Athoot ane, an observit chynge efter a programme launches cannae be tellt apairt frae a chynge that wad hae happened onyway — nae counterfactual, nae evidence o effect, hooiver compellin the before-an-efter nummers look. HM Treasury's Magenta Book treats constructin a credible counterfactual as the central methodological task o impact evaluation, mair important than onie ither single design choice.

## Why it maitters

"Crime fell 15% in the year efter we introduced the programme" isnae evidence the programme warked unless ye ken whit wad hae happened tae crime athoot it — crime micht hae fawn 20% onyway acause o unrelatit economic or demographic trends, meanin the programme actually made things waur compared wi the counterfactual, despite the raw nummer improvin. This is the single commonest analytical mistak in public-sector an social-sector impact claims: takin a before/efter comparison for evidence o causation. The Magenta Book is explicit that impact evaluation exists tae answer a counterfactual question — "whit differ did this intervention mak?" — an that answerin it requires estimatin, no juist describin, the warld that didnae happen.

Different methods construct the counterfactual wi different degrees o confidence, an government evaluation guidance ranks them accordinly. Randomizit controlled trials (RCTs), whaur individuals or areas are randomly assignit tae receive an intervention or no, produce the strangest counterfactual acause randomization ensures the treatment an control groups differ, on average, anely in receivin the intervention. The Cabinet Office an What Works Network hae promotit RCTs athort UK public policy syne the 2012 "Test, Learn, Adapt" report by the Behavioural Insights Team, precisely acause weaker designs are vulnerable tae confoundin — the observit difference may reflect wha chose tae participate, no the effect o the programme. Whaur randomization is impractical or unethical (as it aften is for programmes wi a statutory entitlement, or for hale-population policy chynges), the Magenta Book sets oot an explicit hierarchy o weaker but still uisefu alternatives: matchit comparison groups, difference-in-differences designs, regression discontinuity roond eligibility thresholds, an, as a last resort, simple before/efter comparison — clearly flaggit as the weakest form o evidence, prone tae confusin the effect o the programme wi the effect o awthing else that chynged at the same time.

## The maths

The counterfactual framin, applicable athort aw methods:

```
Estimatit impact = Ootcome(wi intervention) − Ootcome(counterfactual: athoot intervention)

NO:
Estimatit impact ≠ Ootcome(efter) − Ootcome(afore)   [confounds time wi treatment]
```

Difference-in-differences, ane o the commonest quasi-experimental designs in government evaluation, isolates the treatment effect by subtractin the comparison group's ain before/efter chynge:

```
DiD estimate = [Ootcome(treatit, efter) − Ootcome(treatit, afore)]
             − [Ootcome(comparison, efter) − Ootcome(comparison, afore)]
```

This removes onie trend common tae baith groups (e.g. a national economic shift affectin awbody), leavin anely the differential chynge attributable tae the intervention.

## Wrocht example

**Employment programme, before/efter (weak design)**: a job-support scheme reports that participant employment raise frae 40% tae 55% ower a year — a naïve conclusion o "+15 percentage pynts due tae the programme."

**Same programme, difference-in-differences (stronger design)**: a matchit comparison group o like non-participants, drawn frae the same local labour market, shaws employment risin frae 38% tae 47% ower the same year (a national economic recovery wis unner wey).

```
Treatit group chynge:    55% − 40% = +15 percentage pynts
Comparison group chynge: 47% − 38% = +9 percentage pynts

DiD estimate (true programme effect) = 15 − 9 = +6 percentage pynts
```

The honest attributable effect is 6 percentage pynts, no 15 — mair than hauf the apparent before/efter improvement wad hae happened regairdless o the programme, driven by the same economic recovery liftin the comparison group.

**Regression discontinuity, eligibility threshold**: a grant scheme is available anely tae businesses wi fewer than 50 employees. Comparin ootcomes for businesses juist ablow the threshold (45–49 employees, eligible) against businesses juist abune it (50–54 employees, ineligible) gies a credible counterfactual acause businesses on either side o an arbitrary administrative cut-aff are itherwise similar — the threshold, no onie unnerlyin business characteristic, determines eligibility. A £2,000 average ootcome difference atween the twa groups, observit anely at the threshold, is attributable tae the grant wi faur mair confidence than a simple comparison o aw eligible versus aw ineligible businesses (wha differ systematically in size).

## Link tae saftware ingineerin

Counterfactual thinkin shuid shape hoo impact-trackin systems an evaluation pipelines for government an social-sector software are designit:

- Big comparison-group capture intae a system frae the stert — recordin wha wis eligible but no enrollit, or a matchit non-participant cohort — raither than retrofittin it efter a programme haes awready run an anely before/efter data exists.
- Whaur randomization is feasible (a phasit rollout, a digital service enabled for some uisers afore ithers), instrument the system tae preserve random assignment as a queryable field; a phasit rollout accidentally destroys its ain evaluation value if the assignment order isnae loggit.
- This is the foundational method ahint [impact evaluation methods](../impact-evaluation-methods/) an is whit separates it frae [impact evaluation vs process evaluation](../impact-evaluation-vs-process-evaluation/), the latter o which spiers whether a programme wis delivert as intendit raither than whether it caused an effect.
- [Additionality and deadweight](../additionality-an-deadweight/) an [displacement and attribution](../displacement-an-attribution/) are baith, at root, counterfactual questions — deadweight is "whit wad this particular ootcome hae been athoot the intervention", applied at the level o adjustment raither than fu evaluation design.

## Pitfaws

- **Treatin before/efter as evidence o causation.** This is the commonest an maist consequential mistak in public an social-sector impact reportin; a before/efter chynge confounds the programme's effect wi ilka ither thing that chynged ower the same period.
- **Uisin a comparison group that differs systematically frae the treatit group.** A matchit comparison group maun be genuinely similar on relevant characteristics (see [counterfactual analysis](../counterfactual-analysis/) methods hierarchy in the Magenta Book); comparin programme participants (wha opted in, an are aften mair motivatit) against non-participants (wha didnae) risks selection bias passin itsel aff as programme effect.
- **Destroyin randomization opportunities through puir delivery design.** A phasit or randomizit rollout anely preserves its evaluation value if assignment is genuinely random an recordit — lettin local managers choose wha gaes first defeats the purpose.
- **Owerclaimin precision frae a weak design.** A before/efter estimate shuid be presentit as indicative, no as a meisurit effect size; the Magenta Book's evidence hierarchy exists sae the strength o a claim matches the strength o the design that produced it.

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
