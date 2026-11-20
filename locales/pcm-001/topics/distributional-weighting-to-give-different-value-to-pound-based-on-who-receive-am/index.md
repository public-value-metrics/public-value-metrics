# Distributional Weighting: To Give Different Value to Pound Based on Who Receive Am

Distributional weighting dey adjust di monetary value of cost or benefit according to who receive am, based on di principle say extra pound worth more to poor household than to rich one. HM Treasury Green Book give explicit method to apply dis weighting, wey dem build on di diminishing marginal utility of income, so dat appraisals no go quietly treat pound wey di wealthiest decile gain as equal in value to pound wey di poorest gain.

## Wetin make am matter

Standard cost-benefit analysis dey add pounds without to ask whose pounds dem be, wey mean say e dey assume say pound worth di same to everybody — assumption wey economists don know for long say e no true. Household wey dey earn £15,000/year dey experience £1,000 gain different from household wey dey earn £150,000/year, because di marginal utility of income dey fall as income dey rise. If dem no weight am, standard appraisal go systematically favour interventions wey benefit wealthier groups wey already dey better-off, because dia higher spending power dey inflate di monetary valuation of benefits wey reach dem (park upgrade near expensive housing go "show" bigger property-value benefit than di same upgrade near cheap housing, just because prices high, no be because di welfare gain bigger).

Di Green Book supplementary guidance on distributional analysis, wey dem strengthen after di Treasury 2020 review respond to criticism say appraisal methodology systematically favour London and di South East, set out formal weighting approach wey dey based on assumed elasticity of marginal utility of income of around 1.3 — wey mean say if income double, di marginal value of additional pound go roughly cut half (specifically, 2^-1.3 ≈ 0.41 times). Dis no be rounding adjustment: if you apply am, e fit change which of two competing programmes show di higher net present value, especially wen you dey compare intervention wey concentrate for deprived area against one wey spread across di general population.

## Di maths

Di Green Book distributional weight for pound of benefit wey go household at income level y, relative to pound at di national average income level ȳ:

```
Weight(y) = (ȳ / y)^e

where:
  y  = household income (or income of di affected group)
  ȳ  = average (reference) household income
  e  = elasticity of marginal utility of income (Green Book: approximately 1.3)
```

To apply weights to net benefits:

```
Weighted benefit = Σ [unweighted benefit to group i × Weight(y_i)]
```

Group wey dey earn half of di national average (y = 0.5ȳ) go get weight of (1/0.5)^1.3 = 2^1.3 ≈ 2.46 — each pound of benefit to dat group count as worth roughly 2.46 times pound to average-income household.

## Example wey dem work out

**Two competing local programmes**, each get unweighted net benefit of £2 million/year, dey compete for di same regional growth fund:

- *Programme A*: business-support scheme for prosperous town, average household income £45,000 (roughly 1.3× di assumed national average of £35,000).
- *Programme B*: skills programme for deprived ward, average household income £18,000 (roughly 0.51× di national average).

```
Weight(A) = (35,000 / 45,000)^1.3 = (0.778)^1.3 ≈ 0.72
Weight(B) = (35,000 / 18,000)^1.3 = (1.944)^1.3 ≈ 2.53

Weighted benefit A = £2,000,000 × 0.72 = £1.44 million
Weighted benefit B = £2,000,000 × 2.53 = £5.06 million
```

Without weighting, di two programmes tie. Once you weight for distributional impact, Programme B benefit big pass three times — result wey reverse di funding recommendation and show di Green Book explicit purpose for di way e require make dem show di weighting, no be only di unweighted benefit-cost ratio.

**Charity grant allocation**: funder wey dey compare £500,000 grant wey reach 1,000 low-income households (weight ≈ 2.0, weighted value £1 million-equivalent) against di same £500,000 wey reach 1,000 middle-income households (weight ≈ 1.0, weighted value £500,000-equivalent) suppose show di distributional case explicitly for im board paper, no leave am make pipo guess.

## How e connect to software engineering

Distributional weighting no dey appear directly for software delivery metrics often, but e suppose shape how engineering and data teams dey design measurement and targeting:

- Wen you dey build impact dashboard or benefits calculator, show di income or deprivation profile of who dey affected, no be only aggregate benefit total — aggregate figures wey no get distributional breakdown dey hide exactly di reversal wey we show above.
- Link targeting logic for service design to di same deprivation data wey Green Book dey use — see [Index of Multiple Deprivation](../index-of-multiple-deprivation-how-england-dey-rank-deprived-areas/) — so dat dem fit assess digital service reach for equity, no be only efficiency (di contested fourth E for [value for money](../value-for-money-di-test-whether-public-spending-dey-worth-am/)).
- Wen algorithm dey allocate scarce resource (appointment slots, caseworker time, subsidy), unweighted "maximize total benefit" objective function go, by construction, reproduce di same bias wey Green Book weighting dey exist to correct — flag dis explicitly to policy owners before you optimize.

## Wahala dem wey you suppose avoid

- **To apply distributional weights inconsistently across portfolio.** If you weight one programme benefits but you no weight im comparator own, di comparison go biased, e no go fairer; di Green Book require like-for-like treatment.
- **To use property or market values as proxy for welfare without adjustment.** Market prices dem self dey distorted by existing income inequality, wey na exactly wetin distributional weighting suppose correct — to use unadjusted market values fit double-count di bias.
- **To ignore variation inside group.** To weight by area-average income (like Index of Multiple Deprivation decile) fit misrepresent individuals wey no match dia area average; use di finest-grained income data wey reasonably dey available.
- **To treat di 1.3 elasticity as universal constant.** Di Green Book itself note say na estimate wey get plausible range; sensitivity-test major decisions against alternative elasticities instead of to treat 1.3 as exact.

## Sources

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation", and
  supplementary guidance on distributional impacts (2022 edition).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury, "Green Book Review 2020: Findings and Response" (addressing regional-bias criticism).
  <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>
- Fujiwara D, Campbell R. "Valuation Techniques for Social Cost-Benefit Analysis." HM Treasury/DWP,
  2011 (background on marginal utility of income elasticity estimates).
