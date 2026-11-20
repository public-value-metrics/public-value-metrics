# Human Development Index (HDI) (Index o human development)

The HDI is the UN's headline alternative tae rankin kintras by income alane: it combines life expectancy, education, an income intae a single nummer atween 0 an 1, on the premise — argued by economist Amartya Sen an developit for the UN by Mahbub ul Haq — that development is aboot expandin whit fowk can dae an be, no juist whit they earn. It haes been published annually in the UN Development Programme's Human Development Report syne 1990.

## Why it maitters

Afore the HDI, "development" wis meisured near entirely by GNP per heid, which says naething aboot whether growth reaches ordinar fowk's health or education. Sen's capability approach reframed development as the expansion o real freedoms, an ul Haq turned that intae a publishable index the UNDP cud rank iverie kintra by, forcin governments that grew rich on income alane but neglectit health or schoolin tae confront a worse rank nor their GDP suggestit (the Gulf oil states an some extractive economies are the staundart examples). The HDI's three-wey structure is an aw the direct methodological ancestor o the [Multidimensional Poverty Index](../multidimensional-poverty-index/): baith refuse tae let ae dimension buy back a shortfaw in anither, uisin a geometric raither nor arithmetic mean. UNDP publishes fu technical notes an the underlyin data for ilka edition (<https://hdr.undp.org/data-center/human-development-index>), which is the canonical source for onybody biggin on the index raither nor re-derivin it.

## The maths

```
Life Expectancy Index (LEI)     = (LE − 20) / (85 − 20)

Mean Years Schooling Index      = mean years of schooling / 15
Expected Years Schooling Index  = expected years of schooling / 18
Education Index (EI)            = (Mean Years Index + Expected Years Index) / 2

Income Index (II)               = (ln(GNI per capita) − ln(100)) / (ln(75000) − ln(100))

HDI = (LEI × EI × II) ^ (1/3)     [geometric mean of the three sub-indices]
```

The geometric mean is deliberate: acause it multiplies raither nor averages, a gey heich score in ae dimension cannae fully offset a gey laich score in anither — a design UNDP adoptit in 2010 specifically tae penalize imbalance, replacin the previous arithmetic-mean formula.

## Wrocht example

**Middle-income kintra**: life expectancy 72 year, mean years o schoolin 8, expectit years o schoolin 13, GNI per heid $12,000.

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

An HDI o 0.713 faas in UNDP's "high human development" band (0.700–0.799); "very high" starts at 0.800. Note hoo sensitive the result is tae the weakest sub-index: if mean years o schoolin were 4 insteid o 8 (MYSI = 0.267, EI = 0.494), HDI faas tae (0.800 × 0.494 × 0.723)^(1/3) ≈ 0.639 — drappin a fu band — even though naething else chynged.

## Link tae saftware ingineerin

- The geometric-mean pattern is straucht re-uisable for onie composite service or product score whaur ye dinnae want ae strong dimension tae paper owre a critical weak ane — e.g. combinin accessibility, performance, an reliability scores for a public digital service multiplicatively raither nor by weichtit average, sae a service that is fast but inaccessible cannae score "guid".
- HDI's log-transform o income (diminishin marginal value o an extra pound) is the same logic ahint [distributional weichtin](../distributional-weighting/) in appraisal: an extra $1,000 means faur mair tae a puir hoosehauld nor a rich ane, an treatin baith linearly misprices impact.
- Onie dashboard that reports a single blendit "digital inclusion" or "citizen ootcomes" score shuid document its aggregation formula as explicitly as UNDP's technical notes dae — see [public sector KPIs](../kpis-in-the-public-sector/) an [public value scorecard](../public-value-scorecard/).

## Pitfaws

- **Averagin insteid o uisin the geometric mean** — an arithmetic mean lets heich income mask puir health or education entirely; the hail pynt o the 2010 methodology chynge wis tae stop that substitution.
- **Comparin HDI year-on-year as if it were inflation-adjustit GDP** — UNDP periodically rebases the index (new minimum/maximum bounds, revised schoolin caps), sae a rank chynge can reflect a methodology update, no a real shift; aye check whilk HDR edition a figure comes frae.
- **Treatin HDI as a poverty meisure** — it is a national average an says naething aboot distribution athin a kintra; for that, uise the [Multidimensional Poverty Index](../multidimensional-poverty-index/) or the UNDP's separate Inequality-adjustit HDI.

## Sources

- UNDP. "Human Development Index (HDI)" technical notes and data.
  <https://hdr.undp.org/data-center/human-development-index>
- UNDP. Human Development Report 1990 (the index's introduction).
- Sen A. "Development as Freedom." Oxford University Press, 1999.
