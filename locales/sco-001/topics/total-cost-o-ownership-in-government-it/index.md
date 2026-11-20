# Total cost o ownership in government IT

Total cost o ownership is the full lifecycle cost o a system — acquisition plus ilka year o rinnin it — discoontit tae a common date. In government IT, the single maist reliable forecastin error is comparin suppliers or options on acquisition price its lane, whan operations an maintenance typically accoont for somewhaur atween hauf an fower-fifths o the lifetime bill.

## Why it maitters

HM Treasury's Green Book requires the financial case in ony Five Case Model business case tae cover whole-life costs, nae juist capital expenditure — yet the National Audit Office haes repeatedly foond depairtments approvin IT investments agin an incomplete or optimistic rinnin-cost forecast, juist tae discover the true operatin cost yince the system is live an the capital budget line haes steekit. The Government Digital Service an Central Digital and Data Office's Technology Code of Practice (<https://www.gov.uk/guidance/the-technology-code-of-practice>) pushes depairtments towards cloud an commodity hostin pairtly acause it mak the ongauin cost visible an comparable, raither nor buried inside a single capital procurement figure that looks attractively laich at approval an expensively wrang three years efter.

## The maths

```
TCO = Acquisition cost + Σ(t=1..N) Annual operatin cost_t / (1+r)^t
      − residual value (discoontit)

r = HM Treasury Green Book staundard social discoont rate, 3.5%/year
    (decliniin rate schedule for horizons ayont 30 years)

Operatin cost components: hostin/licensin, support an maintenance,
security patchin an compliance, staff time, plannit refresh/migration
```

See [social discoont rate](../social-discoont-rate/) for why the discoont factor maitters ower a typical 5–10 year system lifetime, an [build vs buy in government](../big-or-buy-in-government/) for hou TCO feeds a build/buy decision.

## Wrocht example

A depairtment compares twa case-management systems on a 5-year horizon at the Green Book's 3.5% discoont rate.

```
System A: capex £3,500,000, opex £250,000/year
System B: capex £1,800,000 (looks cheaper), opex £650,000/year
          (heavier vendor support an integration burden)

Naive comparison on capex its lane: B wins, £1.8M < £3.5M.

Discoont factor sum, 5 years at 3.5%: 0.966+0.934+0.902+0.871+0.842 ≈ 4.515

TCO_A = 3,500,000 + 250,000 × 4.515 = 3,500,000 + 1,128,750 = £4,628,750
TCO_B = 1,800,000 + 650,000 × 4.515 = 1,800,000 + 2,934,750 = £4,734,750
```

TCO flips the naive decision: System B is marginally mair expensive ower five years yince operatin cost is discoontit an summed, acause its opex share o lifetime cost is 62% (2,934,750 / 4,734,750) agin System A's 24% — a concrete instance o the "maintenance is the majority o the bill" finding, hid entirely bi comparin sticker prices.

## Link tae saftware ingineerin

TCO is the nummer that shuid discipline ilka [build vs buy](../big-or-buy-in-government/) decision an ilka [technical debt](../technical-debt-as-erosion-o-public-value/) paydoun case, acause debt interest an deferred maintenance are baith operatin-cost lines that belang in the same discoontit total, whether or no onybody haes been trackin them. Engineers proposin a platform or vendor choice shuid present the full TCO table, nae the procurement price, acause the procurement price is precisely the nummer the Green Book's financial case wis designit tae stop depairtments relyin on its lane. TCO is an aw the honest denominator for [value for siller](../value-for-siller/) judgements — VFM compares benefit tae cost, an an undercoontit cost line inflates ilka VFM ratio in the business case.

## Pitfaws

- **Capex-only comparison**: the single maist common procurement error — comparin supplier list prices athoot a matched operatin-cost forecast for ilka option.
- **Leavin oot exit an migration costs**: contract-end data extraction, re-platformin, an vendor lock-in penalties are real TCO lines that seldom appear in the original business case.
- **Leavin oot security an compliance cost**: patchin cadence, accreditation renewal, an audit cost scale wi system age an complexity — see [public-sector cybersecurity value](../value-o-cybersecurity-in-the-public-sector/) — an are routinely left oot o the opex forecast.
- **Undiscoontit comparison athort options wi different cost profiles**: comparin a capex-heavy option tae an opex-heavy yin athoot discoontin systematically favours whitever option happens tae defer mair cost intae later years.

## Sources

- HM Treasury, *The Green Book: Central Government Guidance on Appraisal and Evaluation*, 2022. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
- Central Digital and Data Office, Technology Code of Practice. <https://www.gov.uk/guidance/the-technology-code-of-practice>
- National Audit Office, *Digital Transformation in Government*. <https://www.nao.org.uk/>
