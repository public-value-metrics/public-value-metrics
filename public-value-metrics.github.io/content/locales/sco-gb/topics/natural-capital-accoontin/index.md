# Natural capital accoontin

Natural capital accoontin puts the environment on the same fittin as ony ither national or
organisational asset: it meisures the stock o natural resources (woodlands, soils, rivers,
wetlands, the atmosphere) and the flow o services they produce (carbon sequestration, flood
protection, recreation, food), in baith physical and monetary terms, sae that environmental depletion
shaws up in decision-makin the wey rinnin doun financial capital wad. The UK is ane o the
furthest advanced governments at daein this systematically, driven by the 25 Year Environment
Plan (2018) and implemented through the ONS's UK Natural Capital accounts and HM Treasury's Green
Book supplementary guidance.

## Why it maitters

Conventional accoontin — corporate and governmental alike — treats a forest as worthless until it
is felled and sauld as timber, at which pynt it becomes GDP. Natural capital accoontin exists tae
close that gap: the UK's 25 Year Environment Plan committit government tae embeddin natural
capital thinkin across policy, explicitly statin the ambition tae be "the first generation to
leave the environment in a better state than we found it." The ONS has since published annual UK
Natural Capital accounts (<https://www.ons.gov.uk/economy/environmentalaccounts/bulletins/uknaturalcapitalaccounts/latest>)
that estimate the monetary value o ecosystem services — frae woodland recreation tae urban green
space's health benefits tae peatland carbon storage — uisin the same National Accounts framework
uised for produced capital, sae that natural capital can in time sit in the same balance sheet as
roads, biggins, and equipment. HM Treasury's Enabling a Natural Capital Approach (ENCA) guidance,
supplementary tae the Green Book
(<https://www.gov.uk/government/publications/enabling-a-natural-capital-approach-enca-guidance>),
sets oot hou appraisers sud value environmental costs and benefits in business cases, sae that a road
scheme that destroys ancient woodland or a flood scheme that restores wetland can be compared on
consistent monetary terms raither nor ane haein a nummer and the ither a paragraph o caveats.

## The maths

```
Ecosystem service asset value = NPV of the flow of services the asset provides

Asset value = Σ (t = 1 to T) [annual service flow value_t / (1 + r)^t]

where:
  service flow value_t = quantity of service in year t × unit value
                          (e.g. recreational visits × value per visit;
                           tonnes of carbon sequestered × carbon price)
  r = discount rate (Green Book social discount rate — see
      [social discount rate](../social-discoont-rate/))
  T = time horizon over which the asset is expected to provide the service
```

This is the identical net-present-value structure uised tae value produced capital or appraise ony
public investment unner [Green Book appraisal](../green-book-appraisal/) — natural capital
accoontin's contribution is supplyin credible physical quantities and unit values for services
that were afore priced at nocht.

## Wrocht example

**Urban woodland, recreational value**: a 50-hectare woodland receives an estimatit 80,000
recreational veisits per year, ilka ane valued (via the travel-cost or stated-preference method — see
[revealed preference valuation](../revealed-preference-valuation/) and
[stated preference valuation](../valuation-bi-stated-preference/)) at £3 per veisit. The woodland is
expectit tae keep providin this service for 50 year, appraised at a 3.5% discoont rate.

```
Annual recreational value = 80,000 × £3 = £240,000/year

NPV over 50 years at 3.5% ≈ £240,000 × annuity factor(3.5%, 50 years)
annuity factor(3.5%, 50) ≈ 21.4

Asset value ≈ £240,000 × 21.4 ≈ £5,136,000
```

**Addin carbon storage**: the same woodland sequesters an estimatit 400 tonnes o CO2 per year,
valued at the government's non-traded carbon price o roughly £75/tonne (illustrative — uise the
current BEIS/DESNZ published carbon values for a live appraisal).

```
Annual carbon value = 400 × £75 = £30,000/year
NPV over 50 years at 3.5% ≈ £30,000 × 21.4 ≈ £642,000

Total woodland asset value (recreation + carbon) ≈ £5,136,000 + £642,000
                                                   ≈ £5,778,000
```

This is afore addin flood attenuation, biodiversity, or air-quality services the ENCA guidance
an aw asks appraisers tae consider — the total is deliberately a flair, nae a ceilin.

## Link tae saftware ingineerin

- Environmental and asset-management systems for local authorities and agencies (parks, highways,
  watter bodies) can attach a natural capital register alangside their physical asset register,
  uisin the same service-flow-times-unit-value pattern as ony ither [unit cost database](../unit-cost-databases/)
  the organization maintains.
- Because natural capital NPV is sensitive tae the discoont rate (see the wrocht example's annuity
  factor), ony tool computin it sud expose the rate and horizon as visible inputs, nae bury
  them — the same transparency principle covert unner
  [intergenerational equity and sustainability discounting](../intergenerational-equity-an-sustainability-discoontin/).
- Natural capital accounts are increasingly a requirt input tae environmental impact sections o a
  [green-book-appraisal](../green-book-appraisal/) business case; a delivery team biggin
  business-case tooling sud treat the ONS accounts and ENCA unit values as reference data tae
  integrate, nae somethin appraisers recompute frae scratch ilka time.

## Pitfaws

- **Double-coontin owerlappin ecosystem services** — recreational value and biodiversity value
  for the same site can share underlyin willingness-tae-pay data; ENCA guidance warns explicitly
  agin summin valuations derived frae owerlappin survey instruments.
- **Treatin a natural capital asset value as static** — service flows chynge wi climate,
  management, and land-use pressure; a woodland's carbon and flood-attenuation value this decade
  is nae a permanent property o the site.
- **Uisin national average unit values for a heilie local decision** — a hectare o accessible
  urban woodland and a hectare o remote upland hae unco different recreational value; ENCA
  guidance recommends local or site-specific values whaur available raither nor defaultin tae
  national averages.

## Sources

- ONS. "UK natural capital accounts."
  <https://www.ons.gov.uk/economy/environmentalaccounts/bulletins/uknaturalcapitalaccounts/latest>
- HM Government. "A Green Future: Our 25 Year Plan to Improve the Environment." (2018)
- HM Treasury / Defra. "Enabling a Natural Capital Approach (ENCA): guidance."
  <https://www.gov.uk/government/publications/enabling-a-natural-capital-approach-enca-guidance>
