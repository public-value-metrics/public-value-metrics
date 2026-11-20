# Revealed Preference Valuation: How to Value Wetin No Get Market Price from Wetin People Really Do

Revealed preference methods dey infer di value of non-market good from behaviour wey you fit observe for related market, instead of to ask people directly. Hedonic pricing and di travel-cost method na di two workhorse techniques: both start from real transaction and dey back out implicit price for di thing wey dem never directly sell.

## Wetin make am matter

Where [stated preference](../stated-preference-valuation-to-ask-people-wetin-dem-go-pay-for-something/) methods dey ask hypothetical question, revealed preference methods dey observe wetin people really pay for, and Green Book treat am as generally more credible evidence, all else equal, because hypothetical bias no affect am — respondents for hedonic house-price study really pay di premium or discount wey dem dey measure (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>, Annex 2). Hedonic pricing dey decompose market price — usually house prices — into implicit prices for each attribute of di good, so analysts fit isolate, for example, di price premium wey households really pay to live for somewhere quieter or with better air quality, while dem dey control statistically for every other attribute wey also affect house price (size, location, school catchment). Di travel-cost method dey do di same kind thing for recreational sites wey no get entry fee: di time and money wey people spend to travel go di site dey reveal lower bound on wetin di site worth to dem, because nobody go incur cost wey pass wetin di visit worth to am.

Both methods share one structural limitation: dem fit only value wetin dey embedded inside existing market transaction. Noise near runway dey show for house prices because people wey care about noise dey sort demsef into quieter housing; di existence value of species wey nobody dey visit or live near no dey show for any transaction at all, and na exactly dis gap [stated preference](../stated-preference-valuation-to-ask-people-wetin-dem-go-pay-for-something/) methods exist to fill.

## Di maths

```
Hedonic pricing:
  House price = f(structural attributes, location attributes,
                   environmental attribute of interest, ...)
  Estimate am through regression; di coefficient on di environmental
  attribute (while you hold all else constant) na im implicit price.

  Implicit price of attribute X = ∂(House price) / ∂X

Travel-cost method:
  Visit rate (visits per capita from zone i) = f(travel cost from zone i,
                   substitute sites, socioeconomic controls)
  Estimate demand curve for visits as function of travel cost.
  Consumer surplus = area under di estimated demand curve
                    = value of di site to visitors
```

Both methods need statistically sound control set — to omit confounding attribute (hedonic) or nearby substitute site (travel-cost) dey bias di implicit price for direction wey no always clear before, and na why Green Book Annex 2 require make dem report di regression specification and controls, no be only di headline coefficient.

## Example wey dem work out

**National government**: Green Book own shadow price of carbon methodology draw partly on hedonic evidence, but simpler illustrative case na aircraft noise. Hedonic study wey regress house sale prices for flight-path area against distance-weighted noise exposure, while e control for size, age, and school catchment, find say each 1 decibel increase for average noise exposure connect to 0.5% reduction for house price. For typical £280,000 house for di affected area:

```
Implicit price per decibel = £280,000 × 0.5% = £1,400 per household
Households wey 3dB increase from new runway affect = 18,000
Aggregate implied cost of di noise increase = £1,400 × 3 × 18,000 = £75.6m
```

Dis na one-off capitalized cost (embedded inside house price), so di appraisal must make sure say e no double-count am against separately estimated annual noise-annoyance cost stream.

**Charity**: environmental charity use di travel-cost method to value nature reserve wey free to enter. Survey data on visitor postcodes give average round-trip travel cost (time wey dem value at Green Book recommended non-work time value, plus fuel) of £14 per visit, with 40,000 visits per year. Di estimated demand curve — visit rates dey fall as travel cost from zone rise — imply consumer surplus per visit, above di £14 wey dem really spend, of roughly £9.

```
Total annual value = 40,000 visits × (£14 spent + £9 consumer surplus)
                    = 40,000 × £23 ≈ £920,000/year
```

Dis one pass di reserve zero entry-fee revenue by far and e give di charity trustees defensible figure for di site recreational value when dem dey make di case to funders.

## How e connect to software engineering

Revealed preference thinking dey show for public-sector product analytics pass how practitioners know: usage data from free government digital service na revealed-preference evidence of value itself (frequency, session length, and — wey tell di most — repeat-versus-one-off usage patterns fit dem analyze di same way travel-cost model dey treat visit frequency against distance). Where service get genuine substitutes (paper channel, phone line), di "cost" wey citizens incur to use di digital channel instead (time, data, device) fit dem estimate and compare with usage, wey echo di travel-cost logic directly. See [digital service standard](../digital-service-standard-di-rules-wey-digital-public-service-must-pass/) and [open data value](../open-data-value-how-to-value-public-data-wey-no-get-price/), wey face exactly dis valuation problem for good wey no get direct market price.

## Wahala dem wey you suppose avoid

- **Omitted variable bias for hedonic models.** To leave out correlated attribute (school quality wey correlate with both house price and di environmental variable of interest) dey bias di implicit price estimate; dem must report and scrutinize di specification, no be only di result.
- **To ignore substitute sites for travel-cost studies.** Visitor revealed value for site dey understated if closer substitute exist and dem no control for am — dem fit dey visit mainly because e free, no be because e uniquely valuable.
- **To apply revealed preference to good wey no get market echo at all.** Existence value, option value, and bequest value no dey show for any transaction and hedonic or travel-cost methods no fit recover dem — dat gap belong to [stated preference valuation](../stated-preference-valuation-to-ask-people-wetin-dem-go-pay-for-something/).
- **To confuse capitalized (one-off) value with annual flow.** Hedonic house-price effects na usually one-off capitalized values; to treat dem as annual benefit stream dey inflate di appraisal.

## Sources

- HM Treasury. "The Green Book," Annex 2: valuing non-market impacts.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Transport / Civil Aviation Authority. Aircraft noise valuation studies used in
  airport appraisal. <https://www.gov.uk/guidance/aviation-noise>
- Rosen S. "Hedonic Prices and Implicit Markets: Product Differentiation in Pure Competition."
  Journal of Political Economy, 1974.
- Clawson M, Knetsch JL. "Economics of Outdoor Recreation." Johns Hopkins University Press, 1966
  (origin of the travel-cost method).
