# Multidimensional Poverty Index: How to Measure Poverty Beyond Income

MPI dey measure poverty as overlapping deprivations wey person dey experience at di same time — for health, education, and living standards — no be only income wey fall under one line. Oxford Poverty and Human Development Initiative (OPHI) develop am with Sabina Alkire and James Foster, and dem don dey publish am together with UNDP for every Human Development Report since 2010, beside di [Human Development Index](../human-development-index-to-measure-development-pass-income/).

## Wetin make am matter

Income poverty lines dey miss people wey get enough cash income but no get clean water, schooling, or wey dey survive pikin death — and dem dey miss di fact say deprivations dey cluster: household wey no get electricity dey far more likely to no get sanitation too and to get malnourished pikin. Di Alkire-Foster method, wey MPI build on, dey count each person deprivations across ten indicators wey dem group into three dimensions wey get equal weight — health, education, living standards — and e only dey class person as "MPI poor" if im weighted deprivation score cross one fixed threshold, so e dey capture di overlap wey set of separate single-indicator statistics no fit capture. OPHI dey publish di full methodology and country data for <https://ophi.org.uk/multidimensional-poverty-index/>; di global MPI wey dem dey maintain together with UNDP now cover over 110 countries. For software wey dem build for anti-poverty programmes — cash transfers, social care triage, aid targeting — di MPI indicator set na often di closest thing to standardized deprivation schema wey dozens of national statistical offices don already validate.

## Di maths

```
10 indicators, 3 dimensions, each dimension get weight 1/3:

Health (1/3):            nutrition (1/6), child mortality (1/6)
Education (1/3):         years of schooling (1/6), school attendance (1/6)
Living standards (1/3):  cooking fuel, sanitation, drinking water,
                          electricity, housing, assets (1/18 each)

deprivation score (c) = sum of weights of indicators wey person dey deprived in

person na "MPI poor" if c ≥ 1/3 (di poverty cut-off, k = 33%)

H (headcount ratio) = number of MPI poor / total population
A (intensity)        = average deprivation score among di MPI poor only

MPI = H × A
```

Because MPI dey multiply di *share* wey poor by *how* poor dem be, two regions wey get di same headcount ratio fit get very different MPI scores if deprivations dey more severe for one — na di same "no substitution across dimensions" logic wey dey behind HDI geometric mean.

## Example wey dem work out

**National survey of 1,000 people**: dem identify 350 as multidimensionally poor (deprivation score ≥ 33%). Among only dose 350 poor individuals, di average deprivation score na 45%.

```
H = 350 / 1000                = 0.350
A = 0.45
MPI = H × A = 0.350 × 0.45    = 0.1575
```

**To compare two districts wey get equal headcount**: District A get H = 0.30 and A = 0.40 (plenty poor people, moderately deprived); District B get H = 0.30 and A = 0.60 (di same number poor, but dem deprived more severely — dem lack electricity *and* sanitation *and* school attendance at di same time).

```
MPI_A = 0.30 × 0.40 = 0.120
MPI_B = 0.30 × 0.60 = 0.180
```

Di same headcount ratio, 50% higher MPI for District B — targeting system wey base on headcount poverty alone go rank di two districts equal and go miss say District B need deeper intervention.

## How e connect to software engineering

- Case-management and eligibility systems for social programmes often don already store several of di ten indicators (housing, school attendance, health markers) for separate silos; di Alkire-Foster counting method na ready-made schema to combine dem into one deprivation score instead of to build bespoke scoring model from zero.
- Di headcount/intensity split (H × A) na pattern wey useful generally for any dashboard wey dey report "how many people affected" together with "how bad e be" — to collapse di two into one number, as raw prevalence statistics dey do, dey hide exactly di case wey need di most resource.
- MPI-style indicator dashboards dey go well with [cost per beneficiary](../cost-per-beneficiary-wetin-e-cost-to-reach-each-person/) reporting for anti-poverty programmes: cost per point of MPI reduction na defensible unit to compare very different interventions (cash transfer versus sanitation infrastructure).

## Wahala dem wey you suppose avoid

- **To treat di ten indicators as universal** — OPHI global MPI indicators dem calibrate am so countries fit compare; national MPIs (many countries, including several for South Asia and Africa, dey publish dia own) dey adapt indicators and weights to local context, and di two no fit compare directly.
- **To report H alone** — headcount ratio dey ignore intensity completely; always report or compute A together with am, or di MPI itself.
- **To assume say MPI-poor and income-poor na di same population** — OPHI own country briefs usually show only partial overlap between di two; programme wey target only di income-poor go always miss meaningful share of di multidimensionally poor.

## Sources

- Oxford Poverty and Human Development Initiative. "Multidimensional Poverty Index."
  <https://ophi.org.uk/multidimensional-poverty-index/>
- Alkire S, Foster J. "Counting and Multidimensional Poverty Measurement." Journal of Public
  Economics, 2011.
- UNDP & OPHI. "Global Multidimensional Poverty Index" (annual report).
