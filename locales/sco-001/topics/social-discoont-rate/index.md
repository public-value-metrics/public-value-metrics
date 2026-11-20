# Social discoont rate

The social discoont rate turns future costs an benefits intae present-day values sae that
programmes wi peyoffs spreid athort decades can be compared on a common basis. HM Treasury's Green
Book mandates a decliniin schedule ankert at 3.5% for the first 30 years, based on the Ramsey
formula — a specific, citable nummer that haes become a leevin political an ethical argiment whenever
it's applied tae lang-horizon commitments sic as climate policy or infrastructure.

## Why it maitters

A pund o benefit receivit in 30 years isnae worth a pund o benefit receivit the day, for reasons
that are pairtly aboot pure time preference (fowk an societies prefer guid things suiner) an
pairtly aboot growth (a future society is expectit tae be richer, sae a pund maitters less tae it at the
margin). The Green Book's Annex 6 derives the UK's standard discoont rate frae the Ramsey formula,
combinin a rate o pure time preference wi the expectit growth rate o consumption an the
elasticity o merginal utility o consumption, producin the publisht rate o 3.5% per year for
years 0–30, decliniin in a publisht schedule for years 31 an ayont (doun tae 1% for years 301+).
This schedule exists jist acause a constant 3.5% compoundit ower a century wad mak virtually
ony lang-horizon benefit — a flood defence savin lives in 80 years, a cairbon reduction avoidin
hairm in 100 years — seem negligible in present-value terms, that the Treasury judged tae be an
implausible ethical conclusion for genuinely lang-lived infrastructure an environmental decisions.

The discoont rate is contestit jist acause the choice isnae a neutral technical parameter: it
encodes a judgement aboot hou muckle a society shuid sacrifice the day for fowk no yet born. The
Stern Review on the Economics of Climate Change (2006) uised a discoont rate close tae zero (a pure
time preference near 0.1%), arguin that discoontin future generations' welfare at onythin like
merkit rates is ethically indefensible whan the hairm (catastrophic climate chynge) is irreversible.
Critics — notably William Nordhaus — argued Stern's near-zero rate owerstated the case for immediate
climate spendin bi makkin amaist ony present cost look justified agin a haurdly-discoontit future
benefit. The disagreement wisnae aboot the maths; it wis aboot whase ethical framewark shuid set
the rate, an it bides the standard illustration o why the discoont rate is a policy choice, nae
juist an actuarial input.

## The maths

The Ramsey formula underlyin the Green Book's rate:

```
r = ρ + η·g

whaur:
  r = social discoont rate
  ρ = rate o pure time preference (impatience + catastrophe risk)
  η = elasticity o merginal utility o consumption
  g = expectit annual growth rate o per-capita consumption
```

The Green Book's decliniin schedule (Annex 6, illustrative — check the current edition for the exact
publisht table):

```
Years 0–30:    3.5%
Years 31–75:   3.0%
Years 76–125:  2.5%
Years 126–200: 2.0%
Years 201–300: 1.5%
Years 301+:    1.0%
```

Present value o a future sum:

```
PV = FV / (1 + r)^t
```

## Wrocht example

**Flood defence scheme**: a project delivers £10 million o avoidit flood damage in year 40.

Uisin a flat 3.5% rate: PV = 10,000,000 / (1.035)^40 ≈ £2.52 million — the benefit looks wee.

Uisin the Green Book's decliniin schedule (3.5% for years 0–30, 3.0% efter that), the calculation
compounds at 3.5% for the first 30 years an 3.0% for years 31–40:

```
PV = 10,000,000 / [(1.035)^30 × (1.03)^10]
   = 10,000,000 / [2.807 × 1.344]
   ≈ 10,000,000 / 3.773
   ≈ £2.65 million
```

The decliniin schedule modestly raises the present value o lang-horizon benefits compared wi a flat
high rate — the explicit purpose o the schedule, sin a flat 3.5% for a century wad discoont a
£100 million benefit in year 100 tae unner £3.3 million.

**Digital infrastructure**: a government cloud migration costin £4 million nou is expectit tae avoid
£500,000/year in legacy maintenance costs for 15 years. At 3.5%, the present value o that annuity is
aboot £500,000 × 11.52 (the 15-year annuity factor at 3.5%) ≈ £5.76 million — comfortably
exceedin the £4 million cost, a positive net present value case that wad look markedly waiker at
a naively chosen heicher rate (at 7%, the same annuity factor drops tae aboot 9.11, givin £4.56 million,
still positive but wi a muckle thinner margin).

## Link tae saftware ingineerin

Maist saftware business cases rin ower 3–5 years, weel inside the flat 3.5% band, sae the decliniin
schedule seldom bites directly — but the underlyin discipline maitters for ony government technology
investment wi a lang asset life (a national platform, a data infrastructure programme, a
multi-decade contract):

- Uise the Green Book's publisht rate raither nor an internal "hurdle rate" borrowed frae private
  finance; auditors an Treasury reviewers will expect the standard schedule.
- For benefits realised mony years oot (a platform's lang-term maintenance savins, an open-data
  ecosystem's compoundin value — see [open data value](../value-o-open-data/)), the discoontin
  choice can flip a business case frae positive tae negative; mak the rate an horizon explicit
  assumptions, nae buried defaults.
- This feeds directly intae [green-book-appraisal](../green-book-appraisal/), the five-case model
  that formally requires a discoontit cash flow, an intae
  [wellbeing-valuation](../wellbein-valuation/), whaur the same discoontin question arises for
  non-monetary wellbein benefits.
- See an aw [intergenerational equity an sustainability discoontin](../intergenerational-equity-an-sustainability-discoontin/)
  for the Stern-versus-Nordhaus debate applied specifically tae environmental an climate technology
  investment.

## Pitfaws

- **Uisin a flat rate for unco lang horizons.** The Green Book's decliniin schedule exists
  specifically acause a constant rate unnerstates genuinely lang-lived benefits; check whilk band
  applies raither nor defaultin tae 3.5% throu the hail thing.
- **Treatin the discoont rate as ethically neutral.** The Stern-Nordhaus dispute shaws the rate
  encodes a value judgement aboot future generations; chyngin it chynges whilk programmes look
  justified, sae it shuid be statit an defendit, nae hid in a spreadsheet default.
- **Mixin up the social discoont rate wi a private cost o capital.** Government borrowin costs
  an private-sector hurdle rates are different concepts frae the Ramsey-derived social rate, an
  swappin yin for the ither in a public appraisal will typically warp the result in the
  direction o favourin short-term returns.
- **Discoontin real an nominal cash flows inconsistently.** The Green Book rate is a real (inflation-
  adjustit) rate; discoontin nominal cash flows wi it materially unnerstates present values.

## Sources

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation", Annex 6
  (2022). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Stern N. "The Economics of Climate Change: The Stern Review." HM Treasury, 2006.
- Nordhaus WD. "A Review of the Stern Review on the Economics of Climate Change." Journal of
  Economic Literature, 2007;45(3):686–702.
- Ramsey FP. "A Mathematical Theory of Saving." Economic Journal, 1928;38(152):543–559.
