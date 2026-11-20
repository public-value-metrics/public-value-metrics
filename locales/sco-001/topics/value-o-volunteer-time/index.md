# Value o volunteer time

Volunteer time value is the monetary estimate gien tae unpeyed labour, maist aften uised tae state
a charity's true economic fitprent — its accoonts plus the labour it didnae hae tae pey for — or
tae mak the case that a gien intervention is mair cost-effective nor its cash budget its lane
suggests. Twa national methodologies dominate: the United States' Independent Sector estimate an
the United Kingdom's Office for National Statistics / NCVO approach, an they price the same oor
o labour quite differently.

## Why it maitters

Ilka year, Independent Sector, warkin wi the University o Maryland's Do Good Institute,
publishes a national oorly value o volunteer time, biggit frae Bureau of Labor Statistics wage
data — specifically the average oorly earnins o production an non-supervisory warkers on
private non-farm payrolls, plus a fringe-benefit adjustment — an brokken oot bi US state. Its maist
recent release pit the value at **$36.14 per oor for 2025**, up 3.9% on the prior year, wi
state-level values rangin frae ower $50 in Washington, DC tae unner $20 in Puerto Rico. In the UK,
the Office for National Statistics haes separately estimatit the replacement cost o formal
volunteerin at **£14.43 per oor** (2017 estimate), an NCVO's UK Civil Society Almanac 2024 uises
volunteerin participation data — aboot 14.2 million fowk formally volunteerin in 2021–22 — tae
estimate the sector's total volunteerin contribution at roughly **£18 billion**, aboot 0.8% o UK
GDP.

The reason this maitters ayont accoontin cosmetics: a programme that relies heavily on volunteer
labour can look dramatically cheaper on a pure cash [cost per ootcome](../cost-per-ootcome/) basis
nor yin relyin on peyed staff, even whaur the true resource cost — whit it wad cost tae replace
that labour — is similar or heicher. Funders an evaluators wha ignore volunteer time value
systematically undercoont the true cost o volunteer-heavy delivery models, that warps
efficiency comparisons agin peyed-staff models deliverin the same ootcome.

## The maths

```
Value o volunteer time = Volunteer oors contributit × oorly rate

Rate choice maitters an chynges the answer:
  - Replacement cost approach: the wage o a peyed warker wha wad dae the
    same task (e.g. a replacement-cost rate for a qualified youth warker,
    nae a generic average wage) — maist defensible for task-specific valuation
  - Opportunity cost approach: the volunteer's ain foregane wage — maist
    defensible for valuin whit the volunteer gied up
  - National average approach: Independent Sector's or ONS's single
    blendit rate — maist defensible for headline, cross-sector comparability
```

The three approaches can differ bi a lairge multiple for the same oor (a solicitor volunteerin as
a board trustee haes a unco different opportunity-cost rate frae a national-average rate), sae ony
reportit figure needs tae state whilk method produced it.

## Wrocht example

**UK charity, national-average approach**: 5,000 volunteer oors in a year, valued at £14.43/oor
(ONS replacement-cost estimate):

```
Value = 5,000 × £14.43 = £72,150
```

If the charity's cash spend that year wis £300,000, its true resource cost — cash plus volunteer
labour — is £372,150, roughly 24% heicher nor the cash figure its lane suggests. A cost-per-ootcome
calculation uisin ainly the £300,000 cash figure unnerstates true cost bi the same margin.

**US charity, national-average approach**: 2,000 volunteer oors valued at $36.14/oor (Independent
Sector, 2025 release):

```
Value = 2,000 × $36.14 = $72,280
```

**Same US charity, opportunity-cost approach**: if the volunteers are disproportionately retirit
professionals whase prior earnins averaged $60/oor, the opportunity-cost valuation wad be
$120,000 — twa-thirds heicher nor the national-average figure, illustratin why the method maun be
statit.

## Link tae saftware ingineerin

Systems that log volunteer oors (shift-schedulin tools, volunteer management platforms) shuid
capture oors at the task or role level, nae juist a total, sae that a replacement-cost rate can be
applied per role raither nor yin blanket national-average rate athort a mixed volunteer workforce
(a trustee's oor an a stewardin oor arenae economically equivalent). Storin the rate an
methodology uised alangside the computit value — nae juist the final currency figure — lets
doun-stream reportin (annual accoonts, [social return on investment](../social-return-on-investment/)
calculations, funder reports) reproduce or challenge the nummer later raither nor treatin it as an
opaque constant. See [cost per ootcome](../cost-per-ootcome/) for why omittin volunteer time value
systematically unnerstates true delivery cost.

## Pitfaws

- **Uisin a single blanket rate for structurally different roles.** A national average wage rate
  applied tae a professional pro bono oor (legal, financial, clinical) drastically unnervalues it;
  match the rate tae the replaced role wherever the task is skilled.
- **Double coontin agin peyed staff cost.** If volunteers substitute for wark that wad
  itherwise be peyed, mak shair the valuation is additive tae cash spend, nae layered on tap o an
  aareadies-inflatit staffin estimate.
- **Citin a stale rate athoot a date.** Independent Sector's an ONS's rates chynge yearly (or
  are ainly periodically re-estimatit, in the ONS case); an undatit volunteer-time figure in a
  report is close tae meaninless for comparison.
- **Treatin volunteer time value as a fundraisin asset.** It is a cost-accoontin adjustment for
  unnerstaundin true resource cost, nae new siller a charity can spend; mixin the twa up misleads
  a board readin the accoonts.

## Sources

- Independent Sector and the Do Good Institute (University of Maryland), "Value of Volunteer Time." <https://www.independentsector.org/value-of-volunteer-time/>
- Independent Sector, Value of Volunteer Time methodology. <https://independentsector.org/research/value-of-volunteer-time-methodology/>
- NCVO, UK Civil Society Almanac 2024. <https://www.ncvo.org.uk/news-and-insights/news-index/uk-civil-society-almanac-2024/>
- Office for National Statistics, volunteering valuation estimate, as cited in NCVO analysis. <https://www.ncvo.org.uk/>
