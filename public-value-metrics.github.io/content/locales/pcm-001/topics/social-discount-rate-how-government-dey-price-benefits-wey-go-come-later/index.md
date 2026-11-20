# Social Discount Rate: How Government Dey Price Benefits Wey Go Come Later

Di social discount rate dey change future costs and benefits to present-day values so dat programmes wey get payoffs wey spread across decades fit compare for common basis. HM Treasury Green Book order declining schedule wey start at 3.5% for di first 30 years, based on di Ramsey formula — specific number wey dem fit cite, wey don turn live political and ethical argument anytime dem apply am to long-horizon commitments like climate policy or infrastructure.

## Wetin make am matter

One pound of benefit wey you go receive after 30 years no worth one pound of benefit wey you receive today, partly because of pure time preference (people and societies prefer good things sooner) and partly because of growth (dem expect say future society go richer, so one pound go matter less to dem for di margin). Di Green Book Annex 6 derive di UK standard discount rate from di Ramsey formula, wey combine rate of pure time preference with di expected growth rate of consumption and di elasticity of marginal utility of consumption. Di result na di published rate of 3.5% per year for years 0–30, wey then decline in published schedule for year 31 and beyond (go down to 1% for years 301+). Dis schedule dey exist exactly because constant 3.5% wey compound for one century go make almost any long-horizon benefit — flood defence wey go save lives after 80 years, carbon reduction wey go avoid harm after 100 years — look like nothing for present-value terms, and Treasury judge say dis na ethical conclusion wey no believable for infrastructure and environmental decisions wey go last long.

Dem dey contest di discount rate exactly because di choice no be neutral technical parameter: e dey encode judgement about how much society suppose sacrifice today for people wey never born. Di Stern Review on the Economics of Climate Change (2006) use discount rate wey near zero (pure time preference near 0.1%), and argue say to discount future generations welfare at anything like market rates no dey ethically defensible when di harm (catastrophic climate change) no fit reverse. Critics — especially William Nordhaus — argue say Stern near-zero rate overstate di case for immediate climate spending because e make almost any present cost look justified against future benefit wey dem hardly discount. Di disagreement no be about di maths; na about whose ethical framework suppose set di rate, and e still be di standard illustration of why discount rate na policy choice, no be just actuarial input.

## Di maths

Di Ramsey formula wey dey behind di Green Book rate:

```
r = ρ + η·g

where:
  r = social discount rate
  ρ = rate of pure time preference (impatience + catastrophe risk)
  η = elasticity of marginal utility of consumption
  g = expected annual growth rate of per-capita consumption
```

Di Green Book declining schedule (Annex 6, illustrative — check di current edition for di exact published table):

```
Years 0–30:    3.5%
Years 31–75:   3.0%
Years 76–125:  2.5%
Years 126–200: 2.0%
Years 201–300: 1.5%
Years 301+:    1.0%
```

Present value of future sum:

```
PV = FV / (1 + r)^t
```

## Example wey dem work out

**Flood defence scheme**: one project deliver £10 million of flood damage wey dem avoid for year 40.

If you use flat 3.5% rate: PV = 10,000,000 / (1.035)^40 ≈ £2.52 million — di benefit look small.

If you use di Green Book declining schedule (3.5% for years 0–30, 3.0% after), di calculation compound at 3.5% for di first 30 years and 3.0% for years 31–40:

```
PV = 10,000,000 / [(1.035)^30 × (1.03)^10]
   = 10,000,000 / [2.807 × 1.344]
   ≈ 10,000,000 / 3.773
   ≈ £2.65 million
```

Di declining schedule dey raise di present value of long-horizon benefits small small, compare to flat high rate — dat na di clear purpose of di schedule, because flat 3.5% for one century go discount £100 million benefit for year 100 to under £3.3 million.

**Digital infrastructure**: government cloud migration wey cost £4 million now dem expect say e go avoid £500,000/year for legacy maintenance costs for 15 years. At 3.5%, di present value of dat annuity na about £500,000 × 11.52 (di 15-year annuity factor at 3.5%) ≈ £5.76 million — e pass di £4 million cost well well, positive net present value case wey go look plenty weaker at higher rate wey dem choose without thinking (at 7%, di same annuity factor drop to about 9.11, wey give £4.56 million, still positive but di margin thin pass).

## How e connect to software engineering

Most software business cases dey run for 3–5 years, inside di flat 3.5% band, so di declining schedule no dey bite directly often — but di discipline wey dey underneath matter for any government technology investment wey get long asset life (national platform, data infrastructure programme, contract wey go run many decades):

- Use di Green Book published rate instead of internal "hurdle rate" wey dem borrow from private finance; auditors and Treasury reviewers go expect di standard schedule.
- For benefits wey dem realize many years later (platform long-term maintenance savings, compounding value of open-data ecosystem — see [open data value](../open-data-value-how-to-value-public-data-wey-no-get-price/)), di discounting choice fit flip business case from positive to negative; make di rate and horizon clear assumptions, no be defaults wey dem bury.
- Dis one feed directly into [green-book-appraisal](../green-book-appraisal-how-uk-government-dey-judge-spending-proposals/), di five-case model wey formally require discounted cash flow, and into [wellbeing-valuation](../wellbeing-valuation-how-to-price-policy-effect-for-people-life-satisfaction/), where di same discounting question dey come up for non-monetary wellbeing benefits.
- See also [intergenerational equity and sustainability discounting](../intergenerational-equity-and-sustainability-discounting-how-much-future-generations-dey-count/) for di Stern-versus-Nordhaus debate wey dem apply specifically to environmental and climate technology investment.

## Wahala dem wey you suppose avoid

- **To use flat rate for very long horizons.** Di Green Book declining schedule dey exist specifically because constant rate dey understate benefits wey go last long; check which band apply instead of to default to 3.5% everywhere.
- **To treat di discount rate as ethically neutral.** Di Stern-Nordhaus dispute show say di rate dey encode value judgement about future generations; if you change am, e change which programmes look justified, so you suppose state am and defend am, no hide am inside spreadsheet default.
- **To confuse di social discount rate with private cost of capital.** Government borrowing costs and private-sector hurdle rates na different concepts from di Ramsey-derived social rate, and to swap one for di other for public appraisal go usually bend di result towards short-term returns.
- **To discount real and nominal cash flows in different ways.** Di Green Book rate na real (inflation-adjusted) rate; if you use am to discount nominal cash flows, you go understate present values well well.

## Sources

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation", Annex 6
  (2022). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Stern N. "The Economics of Climate Change: The Stern Review." HM Treasury, 2006.
- Nordhaus WD. "A Review of the Stern Review on the Economics of Climate Change." Journal of
  Economic Literature, 2007;45(3):686–702.
- Ramsey FP. "A Mathematical Theory of Saving." Economic Journal, 1928;38(152):543–559.
