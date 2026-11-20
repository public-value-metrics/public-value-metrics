# Revealed preference valuation

Revealed preference methods infer the value o a non-market guid frae observable behaviour in a
related market, raither nor askin fowk directly. Hedonic pricin and the travel-cost method are
the twa workhorse techniques: baith stairt frae a real transaction and wark oot an implicit price for
the thing that wis never directly sauld.

## Why it maitters

Whaur [stated preference](../valuation-bi-stated-preference/) methods ask a hypothetical question,
revealed preference methods observe whit fowk actually peyed for, which the Green Book treats as
generally mair credible evidence, aw else bein equal, because it isnae subject tae hypothetical bias —
respondents in a hedonic hoose-price study genuinely peyed the premium or discoont bein meisured
(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>,
Annex 2). Hedonic pricin decomposes a market price — typically hoose prices — intae implicit prices
for ilka attribute o the guid, lettin analysts isolate, for example, the price premium households
actually pay tae bide somewhaur quieter or wi better air quality, controllin statistically for
ilka ither attribute that an aw affects hoose price (size, location, school catchment). The
travel-cost method daes the analogous thing for recreational sites wi nae entry fee: the time and
siller fowk spend travellin tae a site reveals a lower bound on whit the site is worth tae them,
because naebody incurs a cost exceedin whit the veisit is worth tae them.

Baith methods share a structural limitation: they can only value whit is embeddit in an existin
market transaction. Noise near a runway shaws up in hoose prices because fowk wha care aboot
noise sort themsels intae quieter housin; the existence value o a species naebody veisits or bides
near disnae shaw up in ony transaction at aw, which is exactly the gap [stated preference](../valuation-bi-stated-preference/)
methods exist tae fill.

## The maths

```
Hedonic pricing:
  House price = f(structural attributes, location attributes,
                   environmental attribute of interest, ...)
  Estimate via regression; the coefficient on the environmental
  attribute (holding all else constant) is its implicit price.

  Implicit price of attribute X = ∂(House price) / ∂X

Travel-cost method:
  Visit rate (visits per capita from zone i) = f(travel cost from zone i,
                   substitute sites, socioeconomic controls)
  Estimate a demand curve for visits as a function of travel cost.
  Consumer surplus = area under the estimated demand curve
                    = value of the site to visitors
```

Baith methods need a statistically sound control set — omittin a confoundin attribute
(hedonic) or a nearby substitute site (travel-cost) biases the implicit price in a direction that
isnae aye obvious aforehaund, which is why Green Book Annex 2 requires the regression
specification and controls tae be reportit, nae juist the headline coefficient.

## Wrocht example

**National government**: the Green Book's ain shadow price o carbon methodology draws in pairt on
hedonic evidence, but a simpler illustrative case is aircraft noise. A hedonic study regressin
hoose sale prices in a flight-path area agin distance-weighted noise exposure, controllin for
size, age, and school catchment, finds ilka 1 decibel increase in average noise exposure is
associated wi a 0.5% reduction in hoose price. For a typical £280,000 hoose in the affected area:

```
Implicit price per decibel = £280,000 × 0.5% = £1,400 per household
Households affected by a 3dB increase from a new runway = 18,000
Aggregate implied cost of the noise increase = £1,400 × 3 × 18,000 = £75.6m
```

This is a yin-aff capitalized cost (embeddit in hoose price), which the appraisal maun be carefu
nae tae double-coont agin a separately estimatit annual noise-annoyance cost stream.

**Charity**: an environmental charity uises the travel-cost method tae value a free-tae-enter nature
reserve. Survey data on visitor postcodes gies average round-trip travel cost (time valued at the
Green Book's recommendit non-wark time value, plus fuel) o £14 per veisit, wi 40,000 veisits per
year. The estimatit demand curve — veisit rates fawin as travel cost frae a zone rises — implies a
consumer surplus per veisit, abune the £14 actually spent, o roughly £9.

```
Total annual value = 40,000 visits × (£14 spent + £9 consumer surplus)
                    = 40,000 × £23 ≈ £920,000/year
```

This dwarfs the reserve's zero entry-fee revenue and gies the charity's trustees a defensible
figure for the site's recreational value whan makin the case tae funders.

## Link tae saftware ingineerin

Revealed preference thinkin shaws up in public-sector product analytics mair aften nor
practitioners realize: usage data frae a free government digital service is itsel
revealed-preference evidence o value (frequency, session length, and — maist tellin —
repeat-versus-yin-aff usage patterns can be analyzed the same wey a travel-cost model treats veisit
frequency agin distance). Whaur a service has genuine substitutes (a paper channel, a phone
line), the "cost" citizens incur tae uise the digital channel insteid (time, data, a device) can be
estimatit and compared tae usage, echoin the travel-cost logic directly. See
[digital service standard](../digital-service-standard/) and
[open data value](../value-o-open-data/), which faces exactly this valuation problem for a guid wi
nae direct market price.

## Pitfaws

- **Omittit variable bias in hedonic models.** Leavin oot a correlatit attribute (school quality
  correlatin wi baith hoose price and the environmental variable o interest) biases the implicit
  price estimate; specification needs tae be reportit and scrutinized, nae juist the result.
- **Ignorin substitute sites in travel-cost studies.** A visitor's revealed value for a site is
  understatit if a closer substitute exists and isnae controlled for — they micht be veisitin maistly
  because it's free, nae because it's uniquely valuable.
- **Applyin revealed preference tae a guid wi nae market echo at aw.** Existence value, option
  value, and bequest value dinnae shaw up in ony transaction and cannae be recovered by hedonic or
  travel-cost methods — that gap belangs tae [stated preference valuation](../valuation-bi-stated-preference/).
- **Mixin up capitalized (yin-aff) value wi an annual flow.** Hedonic hoose-price effects are
  typically yin-aff capitalized values; treatin them as an annual benefit stream inflates the
  appraisal.

## Sources

- HM Treasury. "The Green Book," Annex 2: valuing non-market impacts.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Transport / Civil Aviation Authority. Aircraft noise valuation studies used in
  airport appraisal. <https://www.gov.uk/guidance/aviation-noise>
- Rosen S. "Hedonic Prices and Implicit Markets: Product Differentiation in Pure Competition."
  Journal of Political Economy, 1974.
- Clawson M, Knetsch JL. "Economics of Outdoor Recreation." Johns Hopkins University Press, 1966
  (origin of the travel-cost method).
