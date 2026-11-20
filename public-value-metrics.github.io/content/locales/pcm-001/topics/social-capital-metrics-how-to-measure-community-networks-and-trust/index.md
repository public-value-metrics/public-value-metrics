# Social Capital Metrics: How to Measure Community Networks and Trust

Social capital metrics dey measure di networks, trust and civic participation wey dey make communities and institutions work well — di "connective tissue" wey no get line for any balance sheet, but wey clearly reduce cost and friction when e dey, and clearly raise am when e no dey. Di modern framing come from Robert Putnam "Bowling Alone" (2000), wey separate bonding capital (ties inside similar group) from bridging capital (ties across different groups); di UK Office for National Statistics (ONS) don since build one standing set of indicators to track am for national level.

## Wetin make am matter

Putnam main empirical claim — wey e show through how membership of US civic associations, church attendance and union participation dey fall for late twentieth century — na say social capital dey predict outcomes wey conventional economics no fit explain well: less crime, better child welfare, local government wey work better, and faster economic recovery after shocks. Bonding capital (strong ties inside tight-knit group) good for mutual support but e fit harden into insularity; bridging capital (weaker ties across different groups) na wetin dey usually go with access to opportunity, flow of information and trust for institutions. ONS take am serious enough to build national indicator framework — their "Social Capital in the UK" series (<https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing/bulletins/socialcapitalintheuk/latest>) dey track four pillars: personal relationships, social network support, civic engagement, and trust and cooperative norms, and each one dem build from established survey questions (Community Life Survey, Understanding Society). For public-sector digital services, social capital matter two ways: na outcome wey some programmes dey try to build (community resilience funding, social prescribing) and na input wey decide how well people go actually adopt service — service wey dem roll out inside high-trust, well-networked community go spread through word of mouth, but di same service for low-trust area no go spread like dat.

## Di maths

```
ONS four-pillar framework (indicators, illustrative):

Personal relationships:      % with someone to rely on in a crisis
Social network support:      % who could borrow money from friends/family if needed
Civic engagement:            % who volunteered or took civic action in past 12 months
Trust and cooperative norms: % agreeing "most people can be trusted"

No single ONS composite score is published — the pillars are reported
separately, deliberately, because aggregating them into one index would
hide which specific pillar is weak.

Putnam's bonding/bridging split (framework, not a formula):
  bonding capital ≈ density of ties within a homogeneous group
  bridging capital ≈ frequency/strength of ties across distinct groups
```

## Example wey dem work out

**Snapshot of social capital for one neighbourhood**: poll for local area wey dem do like Community Life Survey find say 78% get person wey dem fit rely on for crisis (personal relationships), 61% fit borrow money if dem need am (network support), 24% don volunteer for di past year (civic engagement), and 41% agree say "most people can be trusted" (trust and norms) — compare with national averages of about 85%, 70%, 30% and 45% respectively (illustrative, calibrate am against di current ONS bulletin). Di area dey below for every pillar but di gap sharp pass for trust (41% vs. 45% national, 4-point gap) and civic engagement (24% vs. 30%, 6-point gap) — dis one show say civic engagement, no be trust, na di biggest relative deficit wey deserve targeted investment (community grants programme, for example) instead of general "build trust" initiative.

**Bonding vs. bridging, service design**: jobs programme for tight-knit community find say referrals dey travel fast inside di community (high bonding capital: word dey spread within days) but di programme dey struggle to reach residents wey dey outside dat network (low bridging capital: uptake outside di core community near zero after many months). Di fix wey e suggest no be "more marketing" but to deliberately build bridging ties — to partner with organizations wey dey *outside* di existing network, because bonding capital alone no fit solve bridging-capital problem.

## How e connect to software engineering

- Digital platforms wey dey route mutual aid, volunteering or community grants (a "local connector" service, for example) dey literally build bridging-capital infrastructure; their success metric suppose be network diversity of di connections wey dem make, no be only number of transactions — see [government-as-a-platform](../government-as-a-platform-shared-components-wey-many-services-fit-use/) for di broader pattern of infrastructure wey other people dey build value on top.
- Where programme theory of change clearly target social capital as outcome (community resilience fund, social prescribing service), im [theory of change](../theory-of-change-how-to-map-di-road-from-activities-go-long-term-goal/) and [logic model](../logic-model-how-to-map-programme-from-inputs-go-reach-impact/) suppose name di specific pillar (trust, civic engagement, network support) wey dem expect to move, instead of vague "build community" outcome wey no fit measure against di ONS baseline.
- Social capital indicators dey useful as equity lens beside di [Index of Multiple Deprivation](../index-of-multiple-deprivation-how-england-dey-rank-deprived-areas/): area fit poor for income but rich for social ties, or di other way round, and di two dey point to very different interventions.

## Wahala dem wey you suppose avoid

- **To squeeze di four ONS pillars into one composite score** — ONS deliberately no dey do am; one single number dey hide which specific pillar dey cause low reading, and average dey cover di difference between community wey get high trust but no dey engage civically and one wey be di opposite.
- **To assume say social capital always good** — dense bonding capital inside insular group fit actively resist outside institutions (including government services); Putnam own analysis treat bonding and bridging as different goods wey get different effects, wey sometimes dey conflict.
- **To use survey-based social capital measures as real-time operational metric** — di surveys wey dey behind am (Community Life Survey, Understanding Society) dey run once a year or less; treat social capital data as slow-moving contextual indicator, no be something wey service dashboard fit update every week.

## Sources

- Putnam RD. "Bowling Alone: The Collapse and Revival of American Community." Simon & Schuster,
  2000.
- ONS. "Social capital in the UK: bulletins."
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing/bulletins/socialcapitalintheuk/latest>
- Department for Digital, Culture, Media & Sport. "Community Life Survey" (annual).
