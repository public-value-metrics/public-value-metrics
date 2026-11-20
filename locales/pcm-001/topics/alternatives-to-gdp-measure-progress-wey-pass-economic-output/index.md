# Alternatives to GDP: Measure Progress Wey Pass Economic Output

GDP alternatives na metrics wey dem build to capture wetin Gross Domestic Product structurally ignore: unpaid care work, environmental depletion, income distribution, and whether growth really improve lives. Di best-known na di Genuine Progress Indicator (GPI) and Bhutan Gross National Happiness (GNH) Index; di 2009 Stiglitz-Sen-Fitoussi Commission make di most influential case say make dem take dem seriously. For engineers wey dey build government dashboards or KPI systems, "which number count as progress" na design decision wey get real consequences for wetin dem go fund.

## Wetin make am matter

Simon Kuznets, wey build di US national accounts for 1930s, warn Congress for 1934 say "the welfare of a nation can scarcely be inferred from a measurement of national income" — caveat wey di figure outgrow almost immediately. GDP dey count oil spill clean-up as growth and parent unpaid childcare as nothing; e no dey distinguish spending wey build durable wellbeing from spending wey just dey offset harm wey don already happen. Di Stiglitz-Sen-Fitoussi Commission, wey French President Nicolas Sarkozy convene and wey Joseph Stiglitz, Amartya Sen, and Jean-Paul Fitoussi chair, report for 2009 say statistical systems suppose shift emphasis "from measuring economic production to measuring people's wellbeing," and say dem suppose track sustainability separately from current wellbeing instead of to fold am enter one number. GDP alternatives dey operationalize dat recommendation. Di GPI, wey di thinktank Redefining Progress develop for 1990s and wey build on William Nordhaus and James Tobin 1972 Measure of Economic Welfare, start from personal consumption (as GDP dey do) and then add non-market benefits wey GDP omit (household labour, volunteering) while e subtract defensive and depletion costs (crime, pollution, commuting, resource drawdown) wey GDP wrongly count as positive. Bhutan GNH Index, wey GNH Centre Bhutan (<https://www.gnhcentre.bt/>) administer, go even further, as e replace growth as di country stated constitutional objective: e aggregate 33 indicators across 9 domains — psychological wellbeing, health, education, time use, cultural diversity, governance, community vitality, ecological diversity, and living standards — into single sufficiency-based score wey dem dey use direct to screen government policy proposals.

## Di maths

```
GPI = personal consumption expenditure
      + non-market benefits (household labour, volunteering, higher education)
      − defensive and social costs (crime, pollution, commuting, family breakdown)
      − depletion of natural and social capital (resource drawdown, farmland loss)

GNH sufficiency score, per domain:
  person "sufficient" for domain once e clear im threshold for each indicator
  Happiness Index = (% of population wey sufficient for ≥ 6 of 9 domains)
                    + (weighted average shortfall of di "not-yet-happy" minority)
```

## Example wey dem work out

**Region, GPI**: personal consumption na $50bn. Add estimated household and volunteer labour value of $12bn (replacement-cost wage rates — see [volunteer time value](../volunteer-time-value-how-to-put-money-value-on-free-labour/)). Subtract estimated annual costs of commuting congestion ($3bn), crime ($4bn), and long-run resource depletion ($6bn):

```
GPI = 50 + 12 − 3 − 4 − 6 = 49 ($bn)
```

If GDP grow from $50bn to $55bn dat year (+10%), but defensive and depletion costs grow faster than consumption, GPI fit fall even as GDP dey rise — di "threshold hypothesis" wey GPI researchers dey cite for high-income economies since roughly di 1970s, wen growth kept climbing while GPI plateau.

**Citizen, GNH**: one respondent clear di sufficiency threshold for 7 of 9 domains (health, education, living standards, community vitality, cultural diversity, ecological diversity, time use) but e fall short for psychological wellbeing and governance. Because 7 ≥ 6, dem count am "happy" for di headcount; di index separately dey track di depth of im two shortfalls so dat narrow pass no go be indistinguishable from comfortable one.

## How e connect to software engineering

- KPI dashboard wey dem model only on throughput or spend (di GDP pattern) go systematically miss harm wey dem do for to generate dat throughput — support-ticket volume wey dem treat as "engagement" instead of "user distress" na di software-delivery version of to count oil spill as growth.
- GPI-style accounting na useful audit pattern for any [public sector KPI](../key-performance-indicators-for-public-sector-how-to-choose-measures-wey-dem-no-fit-game/) suite: for every headline output metric, ask which defensive cost e dey quietly incur (rework, incident response, burnout) and net am out, di way GPI dey net defensive spending out of consumption.
- GNH domain-sufficiency method — pass/fail per dimension, then aggregate — na structurally di same technique as [multi-criteria decision analysis](../multi-criteria-decision-analysis-how-to-weigh-options-wey-no-fit-share-one-unit/) and e worth to reuse anywhere wey single scalar score go hide critical failing dimension.

## Wahala dem wey you suppose avoid

- **To treat GPI as precise national account** — unlike GDP, GPI no get single standardized methodology; different studies dey weight commuting costs, volunteer time, or resource depletion differently, so cross-study GPI comparisons dey far less reliable than cross-country GDP ones.
- **To import GNH wholesale enter different policy culture** — dem set im domain weights and sufficiency thresholds through Bhutanese consultation; to copy di number without di underlying consultation process dey produce hollow metric wey nobody trust.
- **To assume say GDP alternative replace cost-benefit appraisal** — dem na diagnostic, economy-wide indicators, no be decision tools for single programme; use [social cost-benefit analysis](../social-cost-benefit-analysis-how-to-weigh-every-cost-and-benefit-to-society/) for dat one instead.

## Sources

- Stiglitz JE, Sen A, Fitoussi J-P. "Report by the Commission on the Measurement of Economic
  Performance and Social Progress." (2009) <https://ec.europa.eu/eurostat/documents/118025/118123/Fitoussi+Commission+report>
- GNH Centre Bhutan. <https://www.gnhcentre.bt/>
- Redefining Progress. "The Genuine Progress Indicator: A Tool for Sustainable Development."
- Nordhaus WD, Tobin J. "Is Growth Obsolete?" (1972), NBER.
