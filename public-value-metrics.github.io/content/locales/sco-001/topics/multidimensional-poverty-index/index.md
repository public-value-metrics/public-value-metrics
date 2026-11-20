# Multidimensional Poverty Index (MPI)

The MPI meisures puirtith as owerlappin deprivations a person experiences at the same time — in
health, education, and livin staundards — raither nor as income alane fawin ablow a line. It wis
developed by the Oxford Poverty and Human Development Initiative (OPHI) wi Sabina Alkire and
James Foster, and has been published jintly wi UNDP in ilka Human Development Report since
2010, alangside the [Human Development Index](../human-development-index/).

## Why it maitters

Income puirtith lines miss fowk wha hae enough cash income but lack clean watter, schoolin, or
hae lost a bairn — and they miss the fact that deprivations clump taegither: a household wioot
electricity is disproportionately likely tae an aw lack sanitation and hae a malnourished bairn.
The Alkire-Foster method, on which the MPI is biggit, coonts ilka person's deprivations across ten
indicators grupit intae three equally weighted dimensions — health, education, livin staundards —
and only classes somebody as "MPI puir" if their weighted deprivation score crosses a fixed
threshold, capturin the owerlap that a set o separate single-indicator statistics cannae. OPHI
publishes the fu methodology and country data at
<https://ophi.org.uk/multidimensional-poverty-index/>; the global MPI it maintains jintly wi
UNDP noo covers ower 110 kintras. For saftware biggit for anti-puirtith programmes — cash
transfers, social care triage, aid targetin — the MPI's indicator set is aften the nearest thing
tae a standardized deprivation schema already validated across dizzens o national statistical
offices.

## The maths

```
10 indicators, 3 dimensions, each dimension weighted 1/3:

Health (1/3):            nutrition (1/6), child mortality (1/6)
Education (1/3):         years of schooling (1/6), school attendance (1/6)
Living standards (1/3):  cooking fuel, sanitation, drinking water,
                          electricity, housing, assets (1/18 each)

deprivation score (c) = sum of weights of indicators a person is deprived in

person is "MPI poor" if c ≥ 1/3 (the poverty cut-off, k = 33%)

H (headcount ratio) = number of MPI poor / total population
A (intensity)        = average deprivation score among the MPI poor only

MPI = H × A
```

Because MPI multiplies the *share* wha are puir by *hou* puir they are, twa regions wi the same
headcount ratio can hae unco different MPI scores if deprivations are mair severe in ane — the
same "nae substitution atween dimensions" logic ahint the HDI's geometric mean.

## Wrocht example

**National survey o 1,000 fowk**: 350 are identified as multidimensionally puir (deprivation
score ≥ 33%). Amang juist thae 350 puir individuals, the average deprivation score is 45%.

```
H = 350 / 1000                = 0.350
A = 0.45
MPI = H × A = 0.350 × 0.45    = 0.1575
```

**Comparin twa districts wi equal headcount**: District A has H = 0.30 and A = 0.40 (mony puir,
moderately deprived); District B has H = 0.30 and A = 0.60 (same nummer puir, but mair severely
deprived — lackin electricity *and* sanitation *and* school attendance at ance).

```
MPI_A = 0.30 × 0.40 = 0.120
MPI_B = 0.30 × 0.60 = 0.180
```

Same headcount ratio, 50% heicher MPI in District B — a targetin system based on headcount puirtith
alane wad rank the twa districts the same and miss that District B needs deeper intervention.

## Link tae saftware ingineerin

- Case-management and eligibility systems for social programmes aften already store a wheen o
  the ten indicators (housin, school attendance, health markers) in separate silos; the
  Alkire-Foster coontin method is a ready-made schema for combinin them intae ae deprivation
  score instead o biggin a bespoke scorin model frae scratch.
- The headcount/intensity split (H × A) is a generally uisefu pattern for ony dashboard reportin
  "hou mony are affected" alangside "hou badly" — collapsin baith intae ae nummer, as raw
  prevalence statistics dae, hides exactly the case that needs the maist resource.
- MPI-style indicator dashboards pair naturally wi [cost per beneficiary](../cost-per-beneficiary/)
  reportin for anti-puirtith programmes: cost per pynt o MPI reduction is a defensible unit for
  comparin unco different interventions (cash transfer vs. sanitation infrastructure).

## Pitfaws

- **Treatin the ten indicators as universal** — OPHI's global MPI indicators are calibrated for
  cross-kintra comparability; national MPIs (mony kintras, includin several in South Asia and
  Africa, publish their ain) adapt indicators and weights tae local context, and the twa are nae
  directly comparable.
- **Reportin H alane** — headcount ratio ignores intensity athegither; aye report or compute A
  alangside it, or the MPI itsel.
- **Assumin MPI-puir and income-puir are the same population** — OPHI's ain country briefs
  typically shaw only pairtial owerlap atween the twa; a programme targetin only the income-puir
  will systematically miss a meaningfu share o the multidimensionally puir.

## Sources

- Oxford Poverty and Human Development Initiative. "Multidimensional Poverty Index."
  <https://ophi.org.uk/multidimensional-poverty-index/>
- Alkire S, Foster J. "Counting and Multidimensional Poverty Measurement." Journal of Public
  Economics, 2011.
- UNDP & OPHI. "Global Multidimensional Poverty Index" (annual report).
