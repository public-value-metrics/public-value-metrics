# Volunteer Time Value: How to Put Money Value on Free Labour

Volunteer time value na di money estimate wey dem give to unpaid labour, wey dem dey use most to state charity true economic footprint — im accounts plus di labour wey e no need to pay for — or to argue say one intervention dey more cost-effective pass wetin im cash budget alone suggest. Two national methodologies dey lead: di United States Independent Sector estimate and di United Kingdom Office for National Statistics / NCVO approach, and dem dey price di same hour of labour in different ways.

## Wetin make am matter

Every year, Independent Sector, wey dey work with di University of Maryland Do Good Institute, dey publish national hourly value of volunteer time, wey dem build from Bureau of Labor Statistics wage data — specifically di average hourly earnings of production and non-supervisory workers for private non-farm payrolls, plus fringe-benefit adjustment — and dem break am down by US state. Im most recent release put di value at **$36.14 per hour for 2025**, wey go up 3.9% on di previous year, with state-level values wey range from over $50 for Washington, DC to under $20 for Puerto Rico. For di UK, di Office for National Statistics don separately estimate di replacement cost of formal volunteering at **£14.43 per hour** (2017 estimate), and NCVO UK Civil Society Almanac 2024 use volunteering participation data — around 14.2 million people wey dey formally volunteer for 2021–22 — to estimate di sector total volunteering contribution at roughly **£18 billion**, about 0.8% of UK GDP.

Di reason e matter pass accounting cosmetics: programme wey rely heavily on volunteer labour fit look much cheaper for pure cash [cost per outcome](../cost-per-outcome-wetin-e-cost-to-really-change-person-life/) basis than one wey rely on paid staff, even where di true resource cost — wetin e go cost to replace dat labour — similar or higher. Funders and evaluators wey ignore volunteer time value always undercount di true cost of delivery models wey get plenty volunteers, and dis one dey distort efficiency comparisons against paid-staff models wey deliver di same outcome.

## Di maths

```
Value of volunteer time = Volunteer hours contributed × hourly rate

Rate choice matters and changes the answer:
  - Replacement cost approach: the wage of a paid worker who would do the
    same task (e.g. a replacement-cost rate for a qualified youth worker,
    not a generic average wage) — most defensible for task-specific valuation
  - Opportunity cost approach: the volunteer's own forgone wage — most
    defensible for valuing what the volunteer gave up
  - National average approach: Independent Sector's or ONS's single
    blended rate — most defensible for headline, cross-sector comparability
```

Di three approaches fit differ by big multiple for di same hour (solicitor wey dey volunteer as board trustee get very different opportunity-cost rate from national-average rate), so any figure wey dem report must state which method produce am.

## Example wey dem work out

**UK charity, national-average approach**: 5,000 volunteer hours for one year, wey dem value at £14.43/hour (ONS replacement-cost estimate):

```
Value = 5,000 × £14.43 = £72,150
```

If di charity cash spend for dat year na £300,000, im true resource cost — cash plus volunteer labour — na £372,150, roughly 24% higher than wetin di cash figure alone suggest. Cost-per-outcome calculation wey use only di £300,000 cash figure go understate true cost by di same margin.

**US charity, national-average approach**: 2,000 volunteer hours wey dem value at $36.14/hour (Independent Sector, 2025 release):

```
Value = 2,000 × $36.14 = $72,280
```

**Di same US charity, opportunity-cost approach**: if di volunteers na mostly retired professionals wey their earlier earnings average $60/hour, di opportunity-cost valuation go be $120,000 — two-thirds higher than di national-average figure, wey show why dem must state di method.

## How e connect to software engineering

Systems wey dey log volunteer hours (shift-scheduling tools, volunteer management platforms) suppose capture hours for task or role level, no be only total, so dat dem fit apply replacement-cost rate per role instead of one blanket national-average rate across mixed volunteer workforce (trustee hour and stewarding hour no equal economically). To store di rate and methodology wey dem use beside di computed value — no be just di final currency figure — dey let downstream reporting (annual accounts, [social return on investment](../social-return-on-investment-how-to-show-social-value-against-money-wey-dem-spend/) calculations, funder reports) reproduce or challenge di number later instead of to treat am as opaque constant. See [cost per outcome](../cost-per-outcome-wetin-e-cost-to-really-change-person-life/) for why to leave out volunteer time value always understate true delivery cost.

## Wahala dem wey you suppose avoid

- **To use one blanket rate for roles wey different structurally.** National average wage rate wey dem apply to professional pro bono hour (legal, financial, clinical) dey undervalue am well well; match di rate to di role wey dem replace anywhere di task need skill.
- **To double count against paid staff cost.** If volunteers dey replace work wey dem for pay for, make sure say di valuation dey add to cash spend, no be say dem put am on top staffing estimate wey don already inflate.
- **To cite old rate without date.** Independent Sector and ONS rates dey change every year (or dem only re-estimate dem from time to time, for ONS case); volunteer-time figure wey no get date inside report almost no mean anything for comparison.
- **To treat volunteer time value as fundraising asset.** Na cost-accounting adjustment to understand true resource cost, no be new money wey charity fit spend; to mix di two dey mislead board wey dey read di accounts.

## Sources

- Independent Sector and the Do Good Institute (University of Maryland), "Value of Volunteer Time." <https://www.independentsector.org/value-of-volunteer-time/>
- Independent Sector, Value of Volunteer Time methodology. <https://independentsector.org/research/value-of-volunteer-time-methodology/>
- NCVO, UK Civil Society Almanac 2024. <https://www.ncvo.org.uk/news-and-insights/news-index/uk-civil-society-almanac-2024/>
- Office for National Statistics, volunteering valuation estimate, as cited in NCVO analysis. <https://www.ncvo.org.uk/>
