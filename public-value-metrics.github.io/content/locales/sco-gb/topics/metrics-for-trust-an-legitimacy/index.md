# Metrics for trust an legitimacy

Legitimacy an support is yin o the three legs o Mark Moore's "strategic triangle" in
*Creating Public Value* (1995) — alangside public value itsel an operational capacity — an it
is the leg maist aften left unmeisurit, acause unlike a budget or an ootpit coont, legitimacy haes
nae obvious single nummer attached tae it. Trust an legitimacy metrics are the faimily o proxy
meisures governments uise tae fill that gap: institutional trust surveys, oversicht-body confidence
ratings, complaint an appeals data, an political/legislative support indicators.

## Why it maitters

Moore's argiment is that a public manager wha delivers real value but loses political an public
legitimacy will in the hinner lose the authorisin environment needit tae keep deliverin it — fundin
gets cut, mandates get narrowit, an the service is stairvit nae maitter hou guid its ootcomes
are. Legitimacy is thairfore nae a public-relations afterthocht bolted ontae a delivery
scorecard; it is a load-bearin input tae whether the mission can continue ava, that is why it
sits as a co-equal perspective in a [public value scorecard](../public-value-scorecard/) raither
nor a fitnote. The OECD's "Trust in Government" survey programme is the leadin cross-national
attempt tae quantify this: it tracks the share o citizens athort OECD member states wha say they
hae confidence in their national government, an its lang-run data shaws trust is highly
sensitive tae shocks — baith the 2008 financial crisis an the COVID-19 pandemic produced sharp
national-level swings, aften follaed bi ainly pairtial recovery, wi the OECD's analysis
consistently findin that perceived *competence* (daes government deliver whit it says it will)
an perceived *fairness/integrity* (is government seen tae act athoot corruption or favouritism)
are the twa strangest drivers o the trust figure, distinct frae satisfaction wi ony single
transaction. Governments increasingly try tae operationalise legitimacy at a mair granular level
an aw — the UK's independent regulators an inspectorates (the National Audit Office, the
Parliamentary and Health Service Ombudsman, sector regulators like Ofsted an the Care Quality
Commission) function as institutionalised legitimacy checks, convertin "daes the public still
trust this service" intae auditable ratings.

## The maths

Trust an legitimacy is a framewark-shapit topic whase uisable quantitative proxies are:

```
Institutional trust index (OECD-style)
  = % o survey respondents answerin "aye" tae a confidence-in-government question,
    trackit ower time, disaggregatit bi demographic group

Legitimacy proxy set (nae single nummer substitutes for the construct):
  - Upheld complaints per 1,000 service uisers (ombudsman or internal complaints data)
  - Judicial review / appeals success rate agin the body's decisions
  - Independent regulator/inspectorate rating (e.g. "outstandin" tae "inadequate" bands)
  - Legislative/oversicht committee confidence votes or critical report frequency
  - Freedom o information request volume an disclosure/refusal rate, as a proxy
    for perceivit transparency

Legitimacy is corroboratit, nae calculatit: a defensible legitimacy assessment
triangulates several o the abuin raither nor relyin on ony single proxy.
```

## Wrocht example

**National tax authority**: legitimacy triangulation for an annual public value report.

```
OECD-style trust proxy (depairtment-specific confidence survey):
  58% o respondents say they trust the authority tae "treat me fairly" (doun frae
  64% twa year afore)

Complaints data:
  Upheld complaints: 4.2 per 1,000 taxpayer interactions (up frae 3.1 per 1,000)

Ombudsman referrals:
  Referrals tae the independent Adjudicator's Office: 1,850 in the year, o that
  61% upheld in full or pairt agin the authority (up frae 48% the prior year)

Readin athort aw three: trust is fawin, upheld complaints are risin, an
independent ombudsman findins are increasingly sidin agin the authority —
three independent signals convergin on the same direction, that is whit mak
this a credible legitimacy finding raither nor noise in ony yin series.
```

A single yin o thir figures muivin wad be waik evidence; three independent meisures muivin
thegither ower the same period is the pattern that mak a legitimacy claim defensible.

## Link tae saftware ingineerin

Legitimacy metrics are seldom produced bi a single team's dashboard, that is itsel the design
lesson: big reportin pipelines that can ingest an reconcile data frae independent external
sources (ombudsman casewark systems, regulator ratings feeds, survey vendors) raither nor
architectin legitimacy reportin as an internal-only metric, acause internally-sourced
legitimacy claims ("we rate oorsels as trustworthy") cairry little evidential weicht — the same
independence problem notit for the legitimacy perspective in a
[public value scorecard](../public-value-scorecard/). Complaints an appeals data pipelines
deserve the same data-quality rigour as ony ootcome pipeline feedin
[peyment bi results](../peyment-by-results-and-social-impact-bonds/) contracts, sin an
unner-reportit or puirly-categorisit complaints dataset quietly unnerstates a legitimacy problem
afore it becomes visible in a trust survey a year efter. See
[citizen satisfaction metrics](../citizen-satisfaction-metrics/) for the transaction-level
coonterpairt tae this institution-level meisure, an [public value](../public-value/) for Moore's
full strategic-triangle framewark this leg belangs tae.

## Pitfaws

- **Treatin satisfaction as a proxy for legitimacy**: a citizen can be satisfied wi a single
  transaction's interface while distrustin the institution owerall (or vice versa) — see
  [citizen satisfaction metrics](../citizen-satisfaction-metrics/) for why the twa maun be reportit
  separately.
- **Relyin on a single self-reportit metric**: an internally-rin trust survey wi nae independent
  corroboration (ombudsman data, regulator ratings) is easy tae dismiss as self-markin; triangulate.
- **Ignorin demographic disaggregation**: aggregate national trust figures can mask sharply
  divergin legitimacy amang specific groups (bi age, ethnicity, income, or region) — the OECD's
  ain Trust in Government releases disaggregate for exactly this reason.
- **Readin a single shock-driven dip as a permanent trend**: trust figures muive sharply roond
  crises (financial crashes, pandemics, high-profile scandals) an pairtially recover; a single
  post-shock data pynt shuidnae be extrapolatit intae a lang-run decline athoot mair data.

## Sources

- Mark H. Moore, *Creating Public Value: Strategic Management in Government*, Harvard University
  Press, 1995.
- OECD, "Trust in Government." <https://www.oecd.org/en/topics/trust-in-government.html>
- Parliamentary and Health Service Ombudsman, annual casework statistics.
  <https://www.ombudsman.org.uk/>
