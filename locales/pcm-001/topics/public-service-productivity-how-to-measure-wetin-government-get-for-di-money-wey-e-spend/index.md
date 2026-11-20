# Public Service Productivity: How to Measure Wetin Government Get for Di Money Wey E Spend

Public service productivity dey measure how efficiently public spending dey convert inputs (staff, capital, goods and services) into quality-adjusted outputs, for services — health, education, policing, social care — wey no get market price and so no revenue figure dey to divide costs into. UK Office for National Statistics don dey publish dis series since di mid-2000s and e remain di most methodologically developed national attempt to answer "government dey get better or worse at to convert money into public services?"

## Wetin make am matter

For market, productivity na (output value) / (input cost), and output value dey observable because somebody dey pay for am. Hip replacement, school place, and police patrol no get sale price, so if you do am naive, you fit only measure *inputs* (wetin dem spend) — wey dey tempt commentators to treat rising public spending as automatically bad, since more input with flat headline activity look like falling productivity. Di ONS methodology, wey dem set out for im "Sources and Methods" publications for public service productivity, solve dis one by to construct *output* index from activity volumes (operations wey dem perform, pupils wey dem teach, crimes wey dem investigate) and den *quality-adjust* dat output index — for health, e include survival rates and waiting times; for education, e include attainment; for policing, e include outcomes like case resolution — so say service wey do di same number of operations but achieve better survival rates go register as more productive, no be only more expensive. Di headline finding wey dey repeat across ONS releases dey sobering for di sector: UK public service productivity fall sharply during di COVID-19 pandemic and by ONS own mid-2020s releases e never still recover to 2019 levels for several sub-sectors including healthcare, even as spending rise — gap wey change how we see "more funding" and "more productivity" as two completely separate questions.

## Di maths

```
Output index (volume) = Σ (activity_i × relative unit cost weight_i), base-year weighted
                          across all service activities (e.g. hip ops, cataract ops,
                          GP consultations), similar to Laspeyres/Paasche volume index

Quality adjustment    = output index × quality adjustment factor
                          (e.g. to include change for survival rates, waiting times,
                          attainment, or reoffending as multiplier on raw volume)

Input index           = Σ (labour hours × labour cost weight) + (goods/services cost,
                          deflated) + (capital consumption)

Total factor productivity growth = % change for quality-adjusted output index
                                    − % change for input index
```

## Example wey dem work out

**Illustrative NHS acute-sector productivity calculation** (di structure follow ONS methodology):

```
Year 1: output volume index = 100.0 (base year), input index = 100.0
        → productivity index = 100.0

Year 2: activity volume rise 3.0% (more operations, more appointments)
        but average waiting time worsen, wey apply quality-adjustment
        discount of −1.0%
        Quality-adjusted output index = 100 × 1.030 × 0.990 = 101.97

        Inputs rise: staff numbers +4.0%, other costs (deflated) +1.5%,
        weighted input index = 100 × 1.032 = 103.2

Productivity growth = (101.97 / 100 − 1) − (103.2 / 100 − 1)
                     = 1.97% − 3.2% = −1.23 percentage points

Interpretation: activity rise, but inputs rise faster and quality fall
small, so productivity — output per unit of input — decline even
though "more care dem deliver."
```

Dis na di exact pattern wey ONS releases don report many times for parts of di NHS after di pandemic: rising spend and rising raw activity dey together with falling measured productivity once dem account for both quality adjustment and input growth.

## How e connect to software engineering

Public service productivity na di population-level version of engineering productivity debates (story points wey dem ship versus [DORA metrics](../dora-metrics-for-public-value-how-fast-and-how-safe-public-value-dey-reach-citizen/) versus [flow metrics](../flow-metrics-for-government-delivery-littles-law-wip-limits-and-flow-efficiency/)): raw throughput without quality adjustment dey misleading for hospital exactly as "lines of code shipped" dey misleading for software team. Teams wey dey build performance data pipelines for departments suppose treat quality adjustment as first-class, versioned transformation stage, no be footnote — because ONS own credibility depend on say dat adjustment dey transparent, reproducible, and dem dey revise am as better quality data arrive (ONS dey revise past years productivity estimates as underlying quality data — e.g. survival rates — dey finalise, so any downstream system wey dey consume dis statistics must handle backdated revisions, no be only to append new periods). E also intersect directly with [total cost of ownership](../total-cost-of-ownership-in-government-it-di-full-cost-of-system-from-buy-till-e-die/) and [AI productivity in the public sector](../ai-productivity-for-public-sector-engineering-teams/): system wey increase raw activity volume without to improve or maintain quality no be productivity improvement, according to ONS own definition.

## Wahala dem wey you suppose avoid

- **To treat input growth as productivity growth**: more spending wey fund more staff dey produce more *activity*, no be more *productivity*, unless output per unit of input also rise — people dey mix di two up all di time for political commentary.
- **To ignore quality adjustment completely**: output index wey dem build only from raw activity counts go show "productivity gains" from to do more of something wey get lower value or lower quality; ONS quality adjustment exist specifically to catch dis one.
- **To compare productivity indices across sub-sectors without to match methodology vintage**: health, education, and policing productivity each dem build from different activity and quality data sources for different revision cycles — naive cross-sector comparison dey compare instruments wey no fit match.
- **To read one year productivity fall as permanent trend**: productivity figures for pandemic and post-pandemic period don show significant year-on-year volatility as quality data (e.g. waiting lists, elective recovery) itself shift; ONS dey consistently warn against to over-interpret single-year moves.

## Sources

- Office for National Statistics, "Public Service Productivity" series.
  <https://www.ons.gov.uk/economy/economicoutputandproductivity/publicservicesproductivity>
- Office for National Statistics, "Public Service Productivity: Total, UK — Sources and Methods."
  <https://www.ons.gov.uk/economy/economicoutputandproductivity/publicservicesproductivity>
