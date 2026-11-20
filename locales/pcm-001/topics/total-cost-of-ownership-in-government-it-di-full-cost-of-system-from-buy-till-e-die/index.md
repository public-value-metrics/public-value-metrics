# Total Cost of Ownership in Government IT: Di Full Cost of System From Buy Till E Die

Total cost of ownership na di full lifecycle cost of one system — acquisition plus every year wey dem dey run am — wey dem discount to common date. For government IT, di forecasting error wey dey happen pass na to compare suppliers or options by acquisition price alone, when operations and maintenance dey usually carry between half and four-fifths of di lifetime bill.

## Wetin make am matter

HM Treasury Green Book require say di financial case for any Five Case Model business case must cover whole-life costs, no be only capital expenditure — but di National Audit Office don find many times say departments dey approve IT investments against running-cost forecast wey no complete or too optimistic, and dem go only discover di true operating cost once di system don live and di capital budget line don close. Di Technology Code of Practice from Government Digital Service and Central Digital and Data Office (<https://www.gov.uk/guidance/the-technology-code-of-practice>) dey push departments towards cloud and commodity hosting partly because e make di ongoing cost visible and easy to compare, instead of to bury am inside single capital procurement figure wey look low and attractive for approval but wey go turn expensive and wrong after three years.

## Di maths

```
TCO = Acquisition cost + Σ(t=1..N) Annual operating cost_t / (1+r)^t
      − residual value (discounted)

r = HM Treasury Green Book standard social discount rate, 3.5%/year
    (declining rate schedule for horizons beyond 30 years)

Operating cost components: hosting/licensing, support and maintenance,
security patching and compliance, staff time, planned refresh/migration
```

See [social discount rate](../social-discount-rate-how-government-dey-price-benefits-wey-go-come-later/) for why di discount factor matter over typical 5–10 year system lifetime, and [build vs buy in government](../build-or-buy-for-government-how-to-choose/) for how TCO dey feed build/buy decision.

## Example wey dem work out

One department compare two case-management systems over 5-year horizon at di Green Book 3.5% discount rate.

```
System A: capex £3,500,000, opex £250,000/year
System B: capex £1,800,000 (looks cheaper), opex £650,000/year
          (heavier vendor support and integration burden)

Naive comparison on capex alone: B wins, £1.8M < £3.5M.

Discount factor sum, 5 years at 3.5%: 0.966+0.934+0.902+0.871+0.842 ≈ 4.515

TCO_A = 3,500,000 + 250,000 × 4.515 = 3,500,000 + 1,128,750 = £4,628,750
TCO_B = 1,800,000 + 650,000 × 4.515 = 1,800,000 + 2,934,750 = £4,734,750
```

TCO flip di naive decision: System B cost small more for five years once dem discount and sum di operating cost, because im opex share of lifetime cost na 62% (2,934,750 / 4,734,750) against System A own 24% — concrete example of di "maintenance na majority of di bill" finding, wey comparing sticker prices dey hide completely.

## How e connect to software engineering

TCO na di number wey suppose discipline every [build vs buy](../build-or-buy-for-government-how-to-choose/) decision and every case to pay down [technical debt](../technical-debt-as-public-value-erosion-how-old-code-dey-chop-public-value/), because debt interest and deferred maintenance na both operating-cost lines wey belong inside di same discounted total, whether anybody don dey track dem or no. Engineers wey dey propose platform or vendor choice suppose present di full TCO table, no be di procurement price, because procurement price na exactly di number wey dem design Green Book financial case to stop departments from to rely on alone. TCO na also di honest denominator for [value for money](../value-for-money-di-test-whether-public-spending-dey-worth-am/) judgements — VFM dey compare benefit to cost, and cost line wey dem undercount dey inflate every VFM ratio for di business case.

## Wahala dem wey you suppose avoid

- **To compare capex only**: di procurement error wey dey happen pass — to compare supplier list prices without matched operating-cost forecast for each option.
- **To exclude exit and migration costs**: data extraction at contract end, re-platforming, and vendor lock-in penalties na real TCO lines wey rarely show for di original business case.
- **To exclude security and compliance cost**: patching cadence, accreditation renewal and audit cost dey grow with system age and complexity — see [public-sector cybersecurity value](../cybersecurity-value-for-public-sector-how-to-put-price-on-risk-reduction/) — and dem dey regularly comot am from di opex forecast.
- **To compare without discounting across options wey get different cost profiles**: to compare capex-heavy option with opex-heavy one without discounting dey always favour whichever option wey push more cost go later years.

## Sources

- HM Treasury, *The Green Book: Central Government Guidance on Appraisal and Evaluation*, 2022. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
- Central Digital and Data Office, Technology Code of Practice. <https://www.gov.uk/guidance/the-technology-code-of-practice>
- National Audit Office, *Digital Transformation in Government*. <https://www.nao.org.uk/>
