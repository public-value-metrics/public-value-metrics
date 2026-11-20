# Human Development Index (HDI): To Measure Development Pass Income

Di HDI na di UN headline alternative to ranking countries by income alone: e combine life expectancy, education, and income into single number between 0 and 1, based on di premise — wey economist Amartya Sen argue and Mahbub ul Haq develop for di UN — say development na about to expand wetin pipo fit do and fit be, no be just wetin dem earn. Dem don dey publish am every year for di UN Development Programme Human Development Report since 1990.

## Wetin make am matter

Before di HDI, dem dey measure "development" almost entirely by GNP per capita, wey no talk anything about whether growth reach ordinary pipo health or education. Sen capability approach reframe development as di expansion of real freedoms, and ul Haq turn dat one into publishable index wey UNDP fit use rank every country, wey force governments wey grow rich on income alone but neglect health or schooling to face worse rank than dia GDP suggest (di Gulf oil states and some extractive economies na di standard examples). Di HDI three-way structure na also di direct methodological ancestor of di [Multidimensional Poverty Index](../multidimensional-poverty-index-how-to-measure-poverty-beyond-income/): both refuse make one dimension buy back shortfall for another, as dem dey use geometric mean instead of arithmetic one. UNDP dey publish full technical notes and di underlying data for every edition (<https://hdr.undp.org/data-center/human-development-index>), wey na di canonical source for anybody wey dey build on di index instead of to re-derive am.

## Di maths

```
Life Expectancy Index (LEI)     = (LE − 20) / (85 − 20)

Mean Years Schooling Index      = mean years of schooling / 15
Expected Years Schooling Index  = expected years of schooling / 18
Education Index (EI)            = (Mean Years Index + Expected Years Index) / 2

Income Index (II)               = (ln(GNI per capita) − ln(100)) / (ln(75000) − ln(100))

HDI = (LEI × EI × II) ^ (1/3)     [geometric mean of di three sub-indices]
```

Di geometric mean na deliberate: because e dey multiply instead of to average, very high score for one dimension no fit fully offset very low score for another — design wey UNDP adopt for 2010 specifically to penalize imbalance, wey replace di previous arithmetic-mean formula.

## Example wey dem work out

**Middle-income country**: life expectancy 72 years, mean years of schooling 8, expected years of schooling 13, GNI per capita $12,000.

```
LEI = (72 − 20) / (85 − 20)              = 52 / 65   = 0.800
MYSI = 8 / 15                                        = 0.533
EYSI = 13 / 18                                       = 0.722
EI = (0.533 + 0.722) / 2                             = 0.628
II = (ln(12000) − ln(100)) / (ln(75000) − ln(100))
   = (9.393 − 4.605) / (11.225 − 4.605)
   = 4.788 / 6.620                                   = 0.723

HDI = (0.800 × 0.628 × 0.723) ^ (1/3)
    = (0.363) ^ (1/3)                                ≈ 0.713
```

HDI of 0.713 fall inside UNDP "high human development" band (0.700–0.799); "very high" dey start from 0.800. Note how sensitive di result dey to di weakest sub-index: if mean years of schooling na 4 instead of 8 (MYSI = 0.267, EI = 0.494), HDI go fall to (0.800 × 0.494 × 0.723)^(1/3) ≈ 0.639 — e drop one full band — even though nothing else change.

## How e connect to software engineering

- Di geometric-mean pattern fit reuse direct for any composite service or product score wey you no want make one strong dimension cover critical weak one — e.g. to combine accessibility, performance, and reliability scores for public digital service multiplicatively instead of by weighted average, so dat service wey fast but no accessible no go fit score "good".
- HDI log-transform of income (diminishing marginal value of extra pound) na di same logic behind [distributional weighting](../distributional-weighting-to-give-different-value-to-pound-based-on-who-receive-am/) for appraisal: extra $1,000 mean far more to poor household than to rich one, and to treat both linearly dey misprice impact.
- Any dashboard wey report single blended "digital inclusion" or "citizen outcomes" score suppose document im aggregation formula as explicitly as UNDP technical notes do — see [public sector KPIs](../key-performance-indicators-for-public-sector-how-to-choose-measures-wey-dem-no-fit-game/) and [public value scorecard](../public-value-scorecard-how-to-report-performance-across-many-dimensions-without-to-hide-trade-offs/).

## Wahala dem wey you suppose avoid

- **To average instead of to use di geometric mean** — arithmetic mean dey let high income hide poor health or education entirely; di whole point of di 2010 methodology change na to stop dat substitution.
- **To compare HDI year-on-year as if na inflation-adjusted GDP** — UNDP dey periodically rebase di index (new minimum/maximum bounds, revised schooling caps), so rank change fit reflect methodology update, no be real shift; always check which HDR edition one figure come from.
- **To treat HDI as poverty measure** — na national average and e no talk anything about distribution inside country; for dat, use di [Multidimensional Poverty Index](../multidimensional-poverty-index-how-to-measure-poverty-beyond-income/) or di UNDP separate Inequality-adjusted HDI.

## Sources

- UNDP. "Human Development Index (HDI)" technical notes and data.
  <https://hdr.undp.org/data-center/human-development-index>
- UNDP. Human Development Report 1990 (the index's introduction).
- Sen A. "Development as Freedom." Oxford University Press, 1999.
