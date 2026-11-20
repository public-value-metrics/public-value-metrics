# Productivity o public services

Public service productivity meisures hou efficiently public spendin converts inputs (staff,
capital, gueds and services) intae quality-adjustit ootputs, for services — health, education,
policin, social care — that hae nae market price and sae nae revenue figure tae divide costs
intae. The UK Office for National Statistics has published this series since the mid-2000s and it
remains the maist methodologically developed national attempt tae answer "is government gettin
better or waur at convertin siller intae public services?"

## Why it maitters

In a market, productivity is (output value) / (input cost), and ootput value is observable because
somebody pays for it. A hip replacement, a school place, and a police patrol hae nae sale price, sae
naively ye can only meisure *inputs* (whit wis spent) — which tempts commentators intae treatin
risin public spendin as automatically bad, since mair input wi flat headline activity looks
like fawin productivity. The ONS methodology, set oot in its "Sources and Methods" publications
for public service productivity, solves this by constructin an *ootput* index frae activity
volumes (operations performed, pupils taught, crimes investigated) and then *quality-adjustin*
that ootput index — for health, incorporatin survival rates and waitin times; for education,
incorporatin attainment; for policin, incorporatin ootcomes like case resolution — sae that a
service which daes the same nummer o operations but achieves better survival rates registers as
mair productive, nae merely as mair dear. The headline finding that recurs across ONS releases
is sobering for the sector: UK public service productivity fell sharply durin the COVID-19
pandemic and by the ONS's ain mid-2020s releases had still nae recovered tae 2019 levels in several
sub-sectors includin healthcare, even as spendin rose — a gap that reframes "mair fundin"
and "mair productivity" as twa entirely separate questions.

## The maths

```
Output index (volume) = Σ (activity_i × relative unit cost weight_i), base-year weighted
                          across all service activities (e.g. hip ops, cataract ops,
                          GP consultations), analogous to a Laspeyres/Paasche volume index

Quality adjustment    = output index × quality adjustment factor
                          (e.g. incorporating a change in survival rates, waiting times,
                          attainment, or reoffending as a multiplier on raw volume)

Input index           = Σ (labour hours × labour cost weight) + (goods/services cost,
                          deflated) + (capital consumption)

Total factor productivity growth = % change in quality-adjusted output index
                                    − % change in input index
```

## Wrocht example

**Illustrative NHS acute-sector productivity calculation** (structure follaes ONS methodology):

```
Year 1: output volume index = 100.0 (base year), input index = 100.0
        → productivity index = 100.0

Year 2: activity volume rises 3.0% (more operations, more appointments)
        but average waiting time worsens, applying a quality-adjustment
        discount of −1.0%
        Quality-adjusted output index = 100 × 1.030 × 0.990 = 101.97

        Inputs rise: staff numbers +4.0%, other costs (deflated) +1.5%,
        weighted input index = 100 × 1.032 = 103.2

Productivity growth = (101.97 / 100 − 1) − (103.2 / 100 − 1)
                     = 1.97% − 3.2% = −1.23 percentage points

Interpretation: activity rose, but inputs rose faster and quality fell
slightly, so productivity — output per unit of input — declined even
though "more care was delivered."
```

This is the exact pattern ONS releases hae repeatedly reportit for pairts o the NHS
post-pandemic: risin spend and risin raw activity coexistin wi fawin meisured productivity
ance quality adjustment and input growth are baith accoontit for.

## Link tae saftware ingineerin

Public service productivity is the population-level analogue o ingineerin productivity debates
(story pynts shipped versus [DORA metrics](../dora-metrics-for-public-value/) versus
[flow metrics](../flow-metrics-in-government-delivery/)): raw throughput wioot a quality
adjustment is exactly as misleadin in a hospital as "lines o code shipped" is on a saftware team.
Teams biggin performance data pipelines for departments sud treat quality adjustment as a
first-class, versioned transformation stage, nae a fitnote — because the ONS's ain credibility
rests on that adjustment bein transparent, reproducible, and revised as better quality data
arrives (ONS revises past years' productivity estimates as underlyin quality data — e.g. survival
rates — is finalized, sae ony doonstream system consumin thir statistics maun handle backdated
revisions, nae juist append new periods). It an aw intersects directly wi
[total cost of ownership](../total-cost-o-ownership-in-government-it/) and
[AI productivity in the public sector](../ai-productivity-in-the-public-sector/): a system that
increases raw activity volume wioot improvin or maintainin quality is nae, on the ONS's ain
definition, a productivity improvement.

## Pitfaws

- **Treatin input growth as productivity growth**: mair spendin fundin mair staff produces mair
  *activity*, nae mair *productivity*, unless ootput per unit o input an aw rises — the twa are
  routinely confused in political commentary.
- **Ignorin quality adjustment athegither**: an ootput index biggit only frae raw activity coonts
  will shaw "productivity gains" frae daein mair o somethin lower-value or lower-quality; ONS's
  quality adjustment exists specifically tae catch this.
- **Comparin productivity indices across sub-sectors wioot matchin methodology vintage**:
  health, education, and policin productivity are ilka biggit frae different activity and quality
  data sources on different revision cycles — a naive cross-sector comparison compares
  incompatible instruments.
- **Readin a single year's productivity faa as a permanent trend**: pandemic-era and
  post-pandemic productivity figures hae shawn significant year-on-year volatility as quality data
  (e.g. waitin lists, elective recovery) itsel shiftit; ONS consistently cautions agin
  ower-interpretin single-year muives.

## Sources

- Office for National Statistics, "Public Service Productivity" series.
  <https://www.ons.gov.uk/economy/economicoutputandproductivity/publicservicesproductivity>
- Office for National Statistics, "Public Service Productivity: Total, UK — Sources and Methods."
  <https://www.ons.gov.uk/economy/economicoutputandproductivity/publicservicesproductivity>
