# Valuation bi stated preference

Stated preference methods estimate the value o a non-merkit guid bi directly askin fowk whit
they wad be willin tae pey for it, or willin tae accept in compensation tae gie it up, typically
throu a structurt survey describin a hypothetical scenario. Contingent valuation is the
best-kent technique in the faimily.

## Why it maitters

Green Book Annex 2 (supplementary guidance on valuin non-merkit impacts) endorses stated
preference methods for guids that hae nae observable merkit transaction tae infer value frae at
aw — air quality, biodiversity, flood protection, the existence value o a landscape somebody micht
never veesit
(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>).
Defra haes publisht its ain stated-preference guidance for environmental appraisal specifically
acause sae muckle environmental value (habitat preservation, watter quality) haes nae proxy merkit
ava, unlike, say, noise, that at least correlates wi observable hoose prices (see
[revealed preference valuation](../revealed-preference-valuation/)).

Stated preference's core appeal — it can value literally onythin, includin guids naebody haes ever
transactit in — is an aw the source o its credibility problem. Acause respondents arenae
actually spendin siller, contingent valuation surveys are vulnerable tae hypothetical bias
(fowk owerstate willingness-tae-pey whan there is nae real budget constraint), embeddin effects
(the same guid is valued differently dependin on whit else is in the survey), an starting-pynt
bias in biddin-gemme designs. The 1993 NOAA panel on contingent valuation, convened efter the
Exxon Valdez oil spill litigation, set oot design staundards — a binary "wad ye pey £X, aye/naw"
referendum format raither nor open-endit biddin, an mandatory reminders o the respondent's
actual budget constraint — that remain the reference staundard for defensible surveys.

## The maths

```
Contingent valuation (referendum format):
  Present a binary choice: "wad ye pey £X per year for ootcome Y? aye/naw"
  Vary X randomly athort respondents.
  Fit willingness-tae-pey as a function o the aye/naw response rate at ilka X.

Mean WTP = aurie unner the estimatit demand curve
Aggregate value = Mean WTP × affectit population

Choice experiment (discrete choice modellin) variant:
  Present respondents wi repeatit choices atween bundles o attributes
  (includin a cost attribute), estimate implicit prices for ilka
  non-cost attribute frae the trade-affs respondents reveal.
```

The choice-experiment variant is generally preferred in current UK practice ower single-question
contingent valuation acause forcin respondents tae trade aff several attributes agin cost
repeatedly produces mair internally consistent, harder-tae-gemme estimates nor a single aye/naw
question.

## Wrocht example

**National government**: Defra commissions a contingent valuation survey tae value a river
watter-quality improvement programme. A referendum-format survey o 2,000 hooseholds finds 62% wad
pey £40/year via a hypothetical watter bill supplement, an the estimatit demand curve gies a mean
willingness-tae-pey o £28/year per hoosehald.

```
Mean WTP = £28/hoosehald/year
Hooseholds in catchment = 340,000
Aggregate annual value = £28 × 340,000 = £9.52m/year

Ower a 20-year appraisal period at 3.5% discoont rate (annuity factor ≈ 14.2):
PV(benefit) ≈ £9.52m × 14.2 ≈ £135m
```

This aggregate figure is then compared agin the cost side o the programme's [social cost-benefit analysis](../social-cost-benefit-analysis/).
The Green Book requires this kind o stated-preference evidence tae be reportit alangside
its confidence interval an survey methodology, nae as a bare pynt estimate, jist acause the
underlyin nummer is mair fragile nor a merkit price.

**Charity**: a heritage trust surveys visitors an non-visitors aboot willingness-tae-pey tae prevent
the closure o a historic buildin neither group necessarily veesits (its existence value). Acause
non-visitors wha will never see the buildin still report positive WTP, the survey captures
existence an bequest value that a simple visitor-fee revenue coont (a revealed-preference proxy)
wad completely miss — shawin stated preference's genuine advantage whaur nae merkit transaction
o ony kind exists tae reveal value.

## Link tae saftware ingineerin

Stated preference methods seldom apply directly tae saftware engineerin wark, but engineers
biggin citizen consultation platforms, budget-participation tools, or public survey
infrastructure are aften biggin the instrument the economics depends on. Gettin the survey
design details richt — randomised bid amoonts, binary referendum framin ower open-endit
questions, explicit budget-constraint reminders — isnae a UX nicety, it is whit mak the
resultin valuation defensible unner scrutiny; a puirly designit in-app survey can invalidate
months o subsequent economic analysis. See [citizen satisfaction metrics](../citizen-satisfaction-metrics/)
for the mair general discipline o elicitin public opinion data that will bear analytical weicht.

## Pitfaws

- **Open-endit "hou muckle wad ye pey?" questions.** Thir are faur mair prone tae strategic an
  anchorin bias nor binary referendum framin; the NOAA panel's recommendation tae uise a
  referendum format exists jist acause open-endit elicitation performs badly.
- **Nae reminder o the respondent's actual budget constraint.** Athoot it, stated WTP routinely
  exceeds whit the same fowk wad pey whan a real budget trade-aff is in play — hypothetical
  bias.
- **Embeddin effects ignored.** The same guid valued alane versus valued as pairt o a lairger
  bundle produces different WTP estimates; report whit else, if onythin, wis in the survey frame.
- **Treatin a single survey's pynt estimate as settled.** Green Book practice expects a range an
  a discussion o kent biases, nae a bare nummer cairrit forrit intae the cost-benefit table as
  if it wur a merkit price.

## Sources

- HM Treasury. "The Green Book," Annex 2: valuing non-market impacts.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Defra. "Valuing environmental impacts: practical guidelines" (contingent valuation and choice
  experiment guidance). <https://www.gov.uk/government/collections/valuing-environmental-impacts>
- Arrow K, et al. "Report of the NOAA Panel on Contingent Valuation." Federal Register, 1993.
- Mitchell RC, Carson RT. "Using Surveys to Value Public Goods: The Contingent Valuation Method."
  Resources for the Future, 1989.
