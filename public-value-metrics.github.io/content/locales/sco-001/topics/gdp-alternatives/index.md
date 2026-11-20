# GDP alternatives (Alternatives tae GDP)

GDP alternatives are metrics biggit tae capture whit Gross Domestic Product structurally ignores: unpaid care wark, environmental depletion, income distribution, an whether growth actually improves lives. The best-kent are the Genuine Progress Indicator (GPI) an Bhutan's Gross National Happiness (GNH) Index; the case for takin them seriously wis made maist influentially by the 2009 Stiglitz-Sen-Fitoussi Commission. For ingineers biggin government dashboards or KPI systems, "whilk nummer coonts as progress" is a design decision wi real consequences for whit gets fundit.

## Why it maitters

Simon Kuznets, wha biggit the US national accoonts in the 1930s, warnit Congress in 1934 that "the welfare of a nation can scarcely be inferred from a measurement of national income" — a caveat the figure outgrew near straucht awa. GDP coonts the clean-up o an oil spill as growth an a parent's unpaid childcare as naething; it disnae distinguish spendin that biggs durable wellbein frae spendin that merely offsets hairm awready duin. The Stiglitz-Sen-Fitoussi Commission, convened by French President Nicolas Sarkozy an chairit by Joseph Stiglitz, Amartya Sen, an Jean-Paul Fitoussi, reportit in 2009 that statistical systems shuid shift emphasis "from measuring economic production to measuring people's wellbeing," an that sustainability shuid be trackit separately frae current wellbein raither nor foldit intae ae nummer. GDP alternatives operationalize that recommendation. The GPI, developit by the thinktank Redefining Progress in the 1990s an biggin on William Nordhaus an James Tobin's 1972 Measure of Economic Welfare, starts frae personal consumption (as GDP disnae) an then adds non-market benefits GDP omits (hoosehauld labour, volunteerin) while subtractin defensive an depletion costs (crime, pollution, commutin, resource drawdoun) GDP wrangly coonts as positive. Bhutan's GNH Index, administered by the GNH Centre Bhutan (<https://www.gnhcentre.bt/>), gangs further still, replacin growth as the country's statit constitutional objective: it aggregates 33 indicators athort 9 domains — psychological wellbein, health, education, time uise, cultural diversity, governance, community vitality, ecological diversity, an livin standards — intae a single sufficiency-based score uised straucht tae screen government policy proposals.

## The maths

```
GPI = personal consumption expenditure
      + non-market benefits (household labour, volunteering, higher education)
      − defensive and social costs (crime, pollution, commuting, family breakdown)
      − depletion of natural and social capital (resource drawdown, farmland loss)

GNH sufficiency score, per domain:
  a person is "sufficient" in a domain once they clear its threshold on each indicator
  Happiness Index = (% of population sufficient in ≥ 6 of 9 domains)
                    + (weighted average shortfall of the "not-yet-happy" minority)
```

## Wrocht example

**Region, GPI**: personal consumption is $50bn. Add estimatit hoosehauld an volunteer labour value o $12bn (replacement-cost wage rates — see [volunteer time value](../value-o-volunteer-time/)). Subtract estimatit annual costs o commutin congestion ($3bn), crime ($4bn), an lang-run resource depletion ($6bn):

```
GPI = 50 + 12 − 3 − 4 − 6 = 49 ($bn)
```

If GDP grew frae $50bn tae $55bn that year (+10%), but defensive an depletion costs grew faster nor consumption, GPI can faa even as GDP rises — the "threshold hypothesis" GPI researchers cite for heich-income economies syne roughly the 1970s, whan growth keepit climbin while GPI plateaued.

**Citizen, GNH**: a respondent clears the sufficiency threshold in 7 o 9 domains (health, education, livin standards, community vitality, cultural diversity, ecological diversity, time uise) but fa's short on psychological wellbein an governance. Acause 7 ≥ 6, they are coontit "happy" in the headcoont; the index separately tracks the depth o their twa shortfaws sae that a narrow pass isnae indistinguishable frae a comfortable ane.

## Link tae saftware ingineerin

- A KPI dashboard modellit anely on throughput or spend (the GDP pattern) will systematically miss hairm duin in generatin that throughput — support-ticket volume treatit as "engagement" raither nor "user distress" is the saftware-delivery version o coontin an oil spill as growth.
- GPI-style accoontin is a uiseful audit pattern for onie [public sector KPI](../kpis-in-the-public-sector/) suite: for ilka headline ootput metric, spier whit defensive cost it is quietly incurrin (rework, incident response, burnoot) an net it oot, the wey GPI nets defensive spendin oot o consumption.
- GNH's domain-sufficiency method — pass/fail per dimension, then aggregate — is structurally the same technique as [multi-criteria decision analysis](../multi-criteria-decision-analysis/) an is worth re-uisin wherever a single scalar score wad hide a critical failin dimension.

## Pitfaws

- **Treatin GPI as a precise national accoont** — unlike GDP, GPI haes nae single standardizit methodology; different studies weicht commutin costs, volunteer time, or resource depletion differently, sae cross-study GPI comparisons are faur less reliable nor cross-country GDP anes.
- **Importin GNH wholesale intae a different policy culture** — its domain weichts an sufficiency thresholds were set throu Bhutanese consultation; copyin the nummer athoot the underlyin consultation process produces a hollow metric naebody trusts.
- **Assumin a GDP alternative replaces cost-benefit appraisal** — thir are diagnostic, economy-wide indicators, no decision tools for a single programme; uise [social cost-benefit analysis](../social-cost-benefit-analysis/) for that insteid.

## Sources

- Stiglitz JE, Sen A, Fitoussi J-P. "Report by the Commission on the Measurement of Economic
  Performance and Social Progress." (2009) <https://ec.europa.eu/eurostat/documents/118025/118123/Fitoussi+Commission+report>
- GNH Centre Bhutan. <https://www.gnhcentre.bt/>
- Redefining Progress. "The Genuine Progress Indicator: A Tool for Sustainable Development."
- Nordhaus WD, Tobin J. "Is Growth Obsolete?" (1972), NBER.
