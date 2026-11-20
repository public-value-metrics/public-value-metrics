# Distributional Weighting (Weichtin by wha benefits)

Distributional weichtin adjusts the monetary value o a cost or benefit according tae wha receives it, on the principle that an extra pound is worth mair tae a puir hoosehauld nor tae a rich ane. HM Treasury's Green Book supplies an explicit method for applyin this weichtin, biggit on the diminishin marginal utility o income, sae that appraisals dinnae quietly treat a pound gained by the wealthiest decile as equal in value tae a pound gained by the puirest.

## Why it maitters

Staundart cost-benefit analysis sums pounds athoot spierin whase pounds they are, which implicitly assumes that a pound is worth the same tae iverybody — an assumption economists hae lang kent tae be fause. A hoosehauld earnin £15,000/year experiences a £1,000 gain gey differently frae a hoosehauld earnin £150,000/year, acause the marginal utility o income faas as income rises. Left unweichtit, staundart appraisal systematically favours interventions that benefit wealthier, awready better-aff groups, acause their heicher spendin pouer inflates the monetary valuation o benefits reachin them (a park upgrade nigh expensive housin "shaws" a bigger property-value benefit nor the same upgrade nigh cheap housin, purely acause prices are heicher, no acause the welfare gain is greater).

The Green Book's supplementary guidance on distributional analysis, reinforcit efter the Treasury's 2020 review responded tae criticism that appraisal methodology systematically favoured London an the South East, sets oot a formal weichtin approach based on an assumed elasticity o marginal utility o income o aboot 1.3 — meanin a doublin o income roughly halves (specifically, 2^-1.3 ≈ 0.41 times) the marginal value o an additional pound. This isnae a roundin adjustment: applyin it can chynge which o twa competin programmes shaws the heicher net present value, especially whan comparin an intervention concentratit in a deprived area agin ane spread athort the general population.

## The maths

The Green Book's distributional weicht for a pound o benefit accruin tae a hoosehauld at income level y, relative tae a pound at the national average income level ȳ:

```
Weight(y) = (ȳ / y)^e

where:
  y  = household income (or income of the affected group)
  ȳ  = average (reference) household income
  e  = elasticity of marginal utility of income (Green Book: approximately 1.3)
```

Applyin weichts tae net benefits:

```
Weighted benefit = Σ [unweighted benefit to group i × Weight(y_i)]
```

A group earnin hauf the national average (y = 0.5ȳ) gets a weicht o (1/0.5)^1.3 = 2^1.3 ≈ 2.46 — ilka pound o benefit tae that group coonts as worth roughly 2.46 times a pound tae an average-income hoosehauld.

## Wrocht example

**Twa competin local programmes**, ilka ane wi an unweichtit net benefit o £2 million/year, competin for the same regional growth fund:

- *Programme A*: a business-support scheme in a prosperous toun, average hoosehauld income £45,000 (roughly 1.3× the assumed national average o £35,000).
- *Programme B*: a skills programme in a deprived ward, average hoosehauld income £18,000 (roughly 0.51× the national average).

```
Weight(A) = (35,000 / 45,000)^1.3 = (0.778)^1.3 ≈ 0.72
Weight(B) = (35,000 / 18,000)^1.3 = (1.944)^1.3 ≈ 2.53

Weighted benefit A = £2,000,000 × 0.72 = £1.44 million
Weighted benefit B = £2,000,000 × 2.53 = £5.06 million
```

Unweichtit, the twa programmes are tied. Weichtit for distributional impact, Programme B's benefit is mair nor three times bigger — a result that reverses the fundin recommendation an reflects the Green Book's explicit purpose in requirin the weichtin tae be shawn, no juist the unweichtit benefit-cost ratio.

**Charity grant allocation**: a funder comparin a £500,000 grant reachin 1,000 laich-income hooseholds (weicht ≈ 2.0, weichtit value £1 million-equivalent) agin the same £500,000 reachin 1,000 middle-income hooseholds (weicht ≈ 1.0, weichtit value £500,000-equivalent) shuid shaw the distributional case explicitly in its board paper, no leave it tae be inferred.

## Link tae saftware ingineerin

Distributional weichtin seldom appears straucht in saftware delivery metrics, but it shuid shape hoo ingineerin an data teams design meisurement an targetin:

- Whan biggin an impact dashboard or benefits calculator, expose the income or deprivation profile o wha is affectit, no juist an aggregate benefit total — aggregate figures athoot distributional breakdoun hide exactly the reversal shawn abune.
- Link targetin logic in service design tae the same deprivation data the Green Book uises — see [Index of Multiple Deprivation](../index-of-multiple-deprivation/) — sae that a digital service's reach can be assessed for equity, no juist efficiency (the contestit fourth E in [value for siller](../value-for-siller/)).
- Whan an algorithm allocates a scarce resource (appointment slots, caseworker time, a subsidy), an unweichtit "maximize total benefit" objective function will, by construction, reproduce the same bias the Green Book's weichtin exists tae correct — flag this explicitly tae policy owners afore optimizin.

## Pitfaws

- **Applyin distributional weichts inconsistently athort a portfolio.** Weichtin ae programme's benefits but no its comparator's produces a biased, no a fairer, comparison; the Green Book requires like-for-like treatment.
- **Uisin property or market values as a proxy for welfare athoot adjustment.** Market prices are themsels distortit by existin income inequality, which is exactly whit distributional weichtin is meant tae correct for — uisin unadjustit market values can double-coont the bias.
- **Ignorin variation athin groups.** Weichtin by area-average income (e.g. an Index of Multiple Deprivation decile) can misrepresent individuals wha dinnae match their area's average; uise the finest-grained income data reasonably available.
- **Treatin the 1.3 elasticity as a universal constant.** The Green Book itsel notes this is an estimate wi a plausible range; sensitivity-test major decisions agin alternative elasticities raither nor treatin 1.3 as exact.

## Sources

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation", and
  supplementary guidance on distributional impacts (2022 edition).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury, "Green Book Review 2020: Findings and Response" (addressing regional-bias criticism).
  <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>
- Fujiwara D, Campbell R. "Valuation Techniques for Social Cost-Benefit Analysis." HM Treasury/DWP,
  2011 (background on marginal utility of income elasticity estimates).
