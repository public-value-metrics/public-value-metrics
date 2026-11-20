# Index of Multiple Deprivation (IMD) (Index o Multiple Deprivation)

The IMD is the official meisure o relative deprivation for wee areas in England, rankin iverie ane o the kintra's 32,844 Lower-layer Super Output Areas (LSOAs, ilka ane wi roughly 1,500 residents) frae 1 (maist deprived) tae 32,844 (least deprived). It is published by whit is nou the Ministry of Housing, Communities and Local Government (MHCLG, formerly MHCLG/DCLG), maist recently as the English Indices of Deprivation 2019, an it straucht routes central-government fundin, public health prioritization, an eligibility for dizzens o local schemes.

## Why it maitters

Deprivation isnae ae thing — a neibourheid can be income-puir but safe, or income-adequate but suffer frae puir health ootcomes an bad housin. The IMD's predecessor indices (daein back tae the 1970s Department of the Environment deprivation indicators) evolvit intae the day's seiven-domain model precisely acause single-indicator targetin (unemployment rate alane, say) routinely missed areas deprived in ither weys. The IMD 2019 combines income, employment, education, health, crime, barriers tae housin an services, an livin environment intae ae composite rank per LSOA, ilka domain biggit frae its ain basket o indicators an weichtit by MHCLG's methodology. Acause it operates at wee-area (LSOA) raither nor local-authority level, it exposes pouches o deprivation hid inside itherwise affluent districts — the reason the IMD, no average local-authority income, is whit NHS England, the Department for Education's pupil premium, an dizzens o local authority fundin formulae actually key aff. Saftware that determines eligibility, prioritizes ootreach, or reports impact by area in England shuid treat IMD decile or rank as a first-class input, no an afterthocht — an whaur a programme deliberately targets the maist deprived areas, its appraisal shuid apply [distributional weichtin](../distributional-weighting/) consistent wi that targetin, raither nor valuin a pound o benefit the same regardless o whaur it lands.

## The maths

```
7 domains, weighted:
  Income                              22.5%
  Employment                          22.5%
  Education, Skills and Training      13.5%
  Health Deprivation and Disability   13.5%
  Crime                                9.3%
  Barriers to Housing and Services     9.3%
  Living Environment                   9.3%

Each domain score: indicators standardized (ranked, then transformed
towards a normal distribution) and combined by exponential transformation
so that high deprivation on any one indicator cannot be fully cancelled
out by low deprivation on others within that domain.

IMD composite score (LSOA) = Σ (domain score × domain weight)
Rank LSOAs by composite score → 1 (most deprived) to 32,844 (least deprived)
Deciles: rank ÷ 3,284 (approx.), decile 1 = most deprived 10% of LSOAs
```

## Wrocht example

**LSOA composite score**, uisin illustrative standardizit domain scores (0 = nae deprivation signal, heicher = mair deprived):

```
Income               0.35 × 0.225 = 0.07875
Employment           0.30 × 0.225 = 0.06750
Education            0.20 × 0.135 = 0.02700
Health               0.15 × 0.135 = 0.02025
Crime                0.10 × 0.093 = 0.00930
Barriers to Housing  0.05 × 0.093 = 0.00465
Living Environment   0.08 × 0.093 = 0.00744

Composite score = 0.07875 + 0.06750 + 0.02700 + 0.02025
                + 0.00930 + 0.00465 + 0.00744  = 0.21489
```

That composite score is then rankit agin aw 32,844 LSOAs' scores. If it places the LSOA at rank 2,950, it faas in decile 1 (2,950 ÷ 3,284 ≈ 0.9, i.e. athin the maist deprived 10% o neibourheids in England) — which for mony fundin formulae is the threshold that unlocks eligibility, regardless o hoo the surroondin local authority scores on average.

## Link tae saftware ingineerin

- Onie service that geocodes users tae postcode or LSOA can jyne the published IMD lookup table (a free, versioned CSV frae MHCLG) tae add deprivation decile as a covariate — for targetin ootreach, prioritizin case load, or reportin ootcomes by deprivation band athoot collectin new personal data.
- IMD decile is a staundart equity check for public digital services: cross-tabulatin service uptake, drap-aff, or satisfaction by IMD decile surfaces access gaps that an aggregate metric hides — see [digital inclusion](../digital-inclusion/) an [citizen satisfaction metrics](../citizen-satisfaction-metrics/).
- Acause IMD rank is relative (it aye sums tae a fixed set o ranks athort England), it cannae shaw whether deprivation nationally is risin or fawin ower time — anely whilk areas rank whaur relative tae ilka ither in that edition; dinnae big absolute-trend dashboards on raw IMD rank alane.

## Pitfaws

- **Comparin IMD ranks athort editions (2015 vs. 2019) as a time trend** — the underlyin indicators, geographies, an methodology aw chynge atween editions; MHCLG explicitly advises agin uisin rank chynges as evidence an area gat mair or less deprived.
- **Applyin LSOA-level IMD tae individuals** — an LSOA in decile 1 still contains non-deprived hooseholds, an a decile-10 LSOA still contains deprived anes; IMD describes areas, no fowk, an uisin it as an individual eligibility proxy misclassifies in baith directions.
- **Ignorin domain-level detail in favour o the composite rank** — twa LSOAs wi identical composite scores can hae completely different domain profiles (ane health-deprived, ane crime-deprived); a targetin scheme aimed at ae problem shuid uise the relevant domain score, no the blendit composite.

## Sources

- Ministry of Housing, Communities and Local Government. "English Indices of Deprivation 2019."
  <https://www.gov.uk/government/statistics/english-indices-of-deprivation-2019>
- MHCLG. "The English Indices of Deprivation 2019: Technical Report."
