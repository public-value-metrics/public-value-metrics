# Metrics for social capital

Social capital metrics quantify the netwarks, trust, an civic participation that let communities
an institutions function efficiently — the "connective tissue" that haes nae line on ony balance
sheet but that visibly cuts cost an friction whan it's there, an visibly raises it whan it's
no. The modern framin comes frae Robert Putnam's "Bowling Alone" (2000), that kenned bonding
capital (ties inside a like group) frae bridgin capital (ties athort different groups); the
UK's Office for National Statistics haes sin biggit a staundin indicator set tae track it
nationally.

## Why it maitters

Putnam's central empirical claim — documentit throu fawin US civic-association memberships,
kirk attendance, an union participation athort the late twentieth century — wis that social
capital predicts ootcomes conventional economics strauchles tae explain: less crime, better
bairn welfare, mair effective local government, quicker economic recovery efter shocks. Bonding
capital (strang ties inside a close-knit group) is guid for mutual support but can harden intae
insularity; bridgin capital (waiker ties athort different groups) is whit typically correlates
wi access tae opportunity, information flow, an institutional trust. The ONS took this
serious eneuch tae big a national indicator framewark — its "Social Capital in the UK" series
(<https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing/bulletins/socialcapitalintheuk/latest>)
tracks fower pillars: personal relationships, social netwark support, civic engagement, an trust
an cooperative norms, ilka yin biggit frae established survey questions (Community Life Survey,
Understanding Society). For public-sector digital services, social capital is doubly relevant: it
is baith an ootcome some programmes are tryin tae big (community resilience funding, social
prescribing) an an input that determines hou weel a service will actually be taen up — a service
rowed intae a high-trust, weel-networkit community will spreid bi word o mooth in a wey an
identical service in a low-trust aurie winnae.

## The maths

```
ONS fower-pillar framewark (indicators, illustrative):

Personal relationships:      % wi somebody tae rely on in a crisis
Social netwark support:      % wha could borrow siller frae freen/faimily if needit
Civic engagement:            % wha volunteered or took civic action in past 12 months
Trust an cooperative norms:  % agreein "maist fowk can be trustit"

Nae single ONS composite score is publisht — the pillars are reportit
separately, on purpose, acause aggregatin them intae yin index wad
hide whilk specific pillar is waik.

Putnam's bonding/bridgin split (framewark, nae a formula):
  bonding capital ≈ density o ties inside a homogeneous group
  bridgin capital ≈ frequency/strenth o ties athort distinct groups
```

## Wrocht example

**Neibourhood social capital snapshot**: a Community Life Survey-style poll o a local aurie
finds 78% hae somebody tae rely on in a crisis (personal relationships), 61% could borrow siller if
needit (netwark support), 24% volunteered in the past year (civic engagement), an 41% agree "maist
fowk can be trustit" (trust an norms) — versus national averages o roughly 85%, 70%, 30%, an
45% respectively (illustrative, calibrate agin the current ONS bulletin). The aurie unner-indexes
on ilka pillar but maist sharply on trust (41% vs. 45% national, a 4-pynt gap) an civic
engagement (24% vs. 30%, a 6-pynt gap) — flaggin civic engagement, nae trust, as the biggest
relative deficit worth targetit investment (a community grants programme, say) raither nor a
generic "big trust" initiative.

**Bonding vs. bridgin, service design**: a jobs programme in a close-knit community finds referrals
traivel fast inside the community (high bonding capital: word spreids in days) but the
programme strauchles tae reach residents ootside that netwark (low bridgin capital: uptak ootside
the core community is near zero efter months). The fix implied is nae "mair marketin" but
deliberately biggin bridgin ties — pairtnerin wi organisations that sit *ootside* the
existin netwark, sin bonding capital its lane cannae solve a bridgin-capital problem.

## Link tae saftware ingineerin

- Digital platforms that route mutual aid, volunteerin, or community grants (a "local
  connector" service, for instance) are literally biggin bridgin-capital infrastructure; their
  success metric shuid be netwark diversity o connections made, nae jist transaction coont — see
  [government-as-a-platform](../government-as-a-platform/) for the braider pattern o
  infrastructure that ithers big value on tap o.
- Whaur a programme's theory o chynge explicitly targets social capital as an ootcome (a
  community resilience fund, a social prescribin service), its [theory of change](../theory-o-chynge/)
  an [logic model](../logic-model/) shuid name the specific pillar (trust, civic engagement,
  netwark support) it expects tae muive, raither nor an undifferentiatit "big community" ootcome
  that cannae be meisurit agin the ONS baseline.
- Social capital indicators are a uisefu equity lens alangside the
  [Index of Multiple Deprivation](../index-of-multiple-deprivation/): an aurie can be
  income-deprived but socially rich, or the ither wey roond, an the twa pynt tae unco different
  interventions.

## Pitfaws

- **Collapsin the fower ONS pillars intae yin composite score** — ONS deliberately disnae dae
  this; a single nummer hides whilk specific pillar is drivin a laich readin, an averagin masks
  a community that is high-trust but civically disengaged versus yin that is the reverse.
- **Assumin social capital is aye guid** — dense bonding capital in an insular group can
  actively resist ootside institutions (includin government services); Putnam's ain analysis
  treats bonding an bridgin as different guids wi different, whiles conflictin, effects.
- **Uisin survey-based social capital meisures as a real-time operational metric** — the underlyin
  surveys (Community Life Survey, Understanding Society) rin yearly or less aften; treat social
  capital data as a slaw-muivin contextual indicator, nae somethin a service dashboard can update
  weekly.

## Sources

- Putnam RD. "Bowling Alone: The Collapse and Revival of American Community." Simon & Schuster,
  2000.
- ONS. "Social capital in the UK: bulletins."
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing/bulletins/socialcapitalintheuk/latest>
- Department for Digital, Culture, Media & Sport. "Community Life Survey" (annual).
