# Natural Capital Accounting: How to Put Value on di Environment

Natural capital accounting dey put di environment for di same level as any other national or organisational asset: e dey measure di stock of natural resources (woodlands, soils, rivers, wetlands, di atmosphere) and di flow of services wey dem dey produce (carbon sequestration, flood protection, recreation, food), for both physical and monetary terms, so say when environment dey waste, e go show for decision-making just like when person dey run down financial capital. UK na one of di governments wey don go furthest to do dis one for system, 25 Year Environment Plan (2018) drive am, and dem implement am through ONS UK Natural Capital accounts and HM Treasury Green Book supplementary guidance.

## Wetin make am matter

Conventional accounting — for corporate and government alike — dey treat forest as worthless until dem fell am and sell am as timber, and na dat time e become GDP. Natural capital accounting dey exist to close dat gap: UK 25 Year Environment Plan commit government to put natural capital thinking inside all policy, and e clearly state di ambition to be "the first generation to leave the environment in a better state than we found it." Since then ONS don dey publish annual UK Natural Capital accounts (<https://www.ons.gov.uk/economy/environmentalaccounts/bulletins/uknaturalcapitalaccounts/latest>) wey dey estimate di monetary value of ecosystem services — from woodland recreation to health benefits of urban green space to peatland carbon storage — with di same National Accounts framework wey dem dey use for produced capital, so natural capital go fit sit eventually for di same balance sheet as roads, buildings, and equipment. HM Treasury Enabling a Natural Capital Approach (ENCA) guidance, wey supplement di Green Book (<https://www.gov.uk/government/publications/enabling-a-natural-capital-approach-enca-guidance>), explain how appraisers suppose value environmental costs and benefits for business cases, so road scheme wey go destroy ancient woodland or flood scheme wey go restore wetland fit compare for consistent monetary terms instead of one get number and di other get paragraph of caveats.

## Di maths

```
Ecosystem service asset value = NPV of di flow of services wey di asset dey provide

Asset value = Σ (t = 1 to T) [annual service flow value_t / (1 + r)^t]

where:
  service flow value_t = quantity of service for year t × unit value
                          (e.g. recreational visits × value per visit;
                           tonnes of carbon sequestered × carbon price)
  r = discount rate (Green Book social discount rate — see
      [social discount rate](../social-discount-rate-how-government-dey-price-benefits-wey-go-come-later/))
  T = time horizon wey dem expect di asset to provide di service
```

Dis na di same net-present-value structure wey dem dey use to value produced capital or to appraise any public investment under [Green Book appraisal](../green-book-appraisal-how-uk-government-dey-judge-spending-proposals/) — wetin natural capital accounting add na to supply credible physical quantities and unit values for services wey before dem dey price at zero.

## Example wey dem work out

**Urban woodland, recreational value**: one 50-hectare woodland dey receive estimated 80,000 recreational visits per year, and dem value each one (through travel-cost or stated-preference method — see [revealed preference valuation](../revealed-preference-valuation-how-to-value-wetin-no-get-market-price-from-wetin-people-really-do/) and [stated preference valuation](../stated-preference-valuation-to-ask-people-wetin-dem-go-pay-for-something/)) at £3 per visit. Dem expect di woodland to continue to provide dis service for 50 years, and dem appraise am at 3.5% discount rate.

```
Annual recreational value = 80,000 × £3 = £240,000/year

NPV over 50 years at 3.5% ≈ £240,000 × annuity factor(3.5%, 50 years)
annuity factor(3.5%, 50) ≈ 21.4

Asset value ≈ £240,000 × 21.4 ≈ £5,136,000
```

**To add carbon storage**: di same woodland dey sequester estimated 400 tonnes of CO2 per year, and dem value am at government non-traded carbon price of roughly £75/tonne (illustrative — use di current BEIS/DESNZ published carbon values for live appraisal).

```
Annual carbon value = 400 × £75 = £30,000/year
NPV over 50 years at 3.5% ≈ £30,000 × 21.4 ≈ £642,000

Total woodland asset value (recreation + carbon) ≈ £5,136,000 + £642,000
                                                   ≈ £5,778,000
```

Dis na before dem add flood attenuation, biodiversity, or air-quality services wey ENCA guidance also ask appraisers to consider — di total na floor on purpose, no be ceiling.

## How e connect to software engineering

- Environmental and asset-management systems for local authorities and agencies (parks, highways, water bodies) fit attach natural capital register beside dia physical asset register, and use di same service-flow-times-unit-value pattern as any other [unit cost database](../unit-cost-databases-library-of-ready-made-money-values-for-social-outcomes/) wey di organization dey maintain.
- Because natural capital NPV dey sensitive to di discount rate (see di annuity factor for di worked example), any tool wey dey compute am suppose show di rate and horizon as visible inputs, no hide dem — na di same transparency principle wey dem cover under [intergenerational equity and sustainability discounting](../intergenerational-equity-and-sustainability-discounting-how-much-future-generations-dey-count/).
- Natural capital accounts dey more and more become required input to di environmental impact sections of [green-book-appraisal](../green-book-appraisal-how-uk-government-dey-judge-spending-proposals/) business case; delivery team wey dey build business-case tooling suppose treat ONS accounts and ENCA unit values as reference data wey dem go integrate, no be something wey appraisers go recompute from zero every time.

## Wahala dem wey you suppose avoid

- **To double-count overlapping ecosystem services** — recreational value and biodiversity value for di same site fit share di same underlying willingness-to-pay data; ENCA guidance warn clear say make you no sum valuations wey come from overlapping survey instruments.
- **To treat natural capital asset value as static** — service flows dey change with climate, management, and land-use pressure; woodland carbon and flood-attenuation value for dis decade no be permanent property of di site.
- **To use national average unit values for decision wey too local** — one hectare of accessible urban woodland and one hectare of remote upland get very different recreational value; ENCA guidance recommend local or site-specific values where dem dey instead of to default to national averages.

## Sources

- ONS. "UK natural capital accounts."
  <https://www.ons.gov.uk/economy/environmentalaccounts/bulletins/uknaturalcapitalaccounts/latest>
- HM Government. "A Green Future: Our 25 Year Plan to Improve the Environment." (2018)
- HM Treasury / Defra. "Enabling a Natural Capital Approach (ENCA): guidance."
  <https://www.gov.uk/government/publications/enabling-a-natural-capital-approach-enca-guidance>
