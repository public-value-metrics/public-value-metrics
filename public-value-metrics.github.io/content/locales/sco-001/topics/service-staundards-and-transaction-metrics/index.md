# Service staundards and transaction metrics

The GOV.UK Service Standard is the UK government's 14-pynt checklist for biggin and rinnin a
public digital service, and it comes paired wi a sma, mandatory set o quantitative transaction
metrics — cost per transaction, completion rate, digital take-up, and user satisfaction — that
teams maun publish for ilka live central-government service. Taegither the staundard and the
metrics are the operational, day-tae-day specialization o the braider public value and KPI
frameworks in this repository, aimed straicht at saftware delivery teams.

## Why it maitters

The Service Standard, maintained in GOV.UK's service manual, requires ilka pynt-in-time
assessment (alpha, beta, live) o a government digital service tae demonstrate — amang its 14
pynts — that the team understauns users' needs, warks in a multidisciplinary team, iterates and
improves frequently, and *evaluates tools, systems, and ways o workin*. Historically this sat
alangside a public Performance Platform whaur ilka live service published its transaction data
openly; that platform has since been retired, but the underlyin obligation tae meisure and publish
thir fower core metrics persists through the service manual's "measuring success" guidance. The
reason this differs frae a generic saftware KPI dashboard is that thir metrics were explicitly
designed as ae linked economic model, nae fower independent scores: the entire savins case for
digital government — the Government Digital Service's Digital Efficiency Report fund digital
transactions roughly 20 times cheaper nor by phone and around 50 times cheaper nor face-tae-face
for comparable local-government services — only materializes if completion rate stays heich and
digital take-up genuinely rises, raither nor merely addin a cheap channel alangside an unchynged
dear ane.

## The maths

```
Cost per transaction = total service running cost / number of completed transactions
Completion rate       = transactions completed / transactions started × 100
Digital take-up       = digital-channel transactions / all-channel transactions × 100
User satisfaction     = % satisfied + very satisfied, in-service 5-point survey

Channel-shift saving = transaction volume × take-up shift × (cost per transaction on
                        the old channel − cost per transaction digitally)

Failure-demand cost = (1 − completion rate) × transactions attempted digitally ×
                        cost of the fallback channel those users then use instead
```

## Wrocht example

**Illustrative central-government licence-renewal service**, 2 million transactions/year,
currently 65% phone (£3.00/transaction) and 35% digital (£0.30/transaction), completion rate 80%.
A redesign agin the 14-pynt Service Standard lifts digital take-up tae 60% and completion tae
92%:

```
Take-up shift saving = 2,000,000 × 0.25 × (3.00 − 0.30) = £1,350,000/year

Failure-demand cost, before:
  2,000,000 × 0.35 × (1 − 0.80) × £3.00 = £420,000/year (abandoners fall back to phone)

Failure-demand cost, after:
  2,000,000 × 0.60 × (1 − 0.92) × £3.00 = £288,000/year

Net failure-demand saving = £420,000 − £288,000 = £132,000/year

Total annual saving ≈ £1,350,000 + £132,000 = £1,482,000/year
```

The arithmetic maks explicit why completion rate isnae a secondary metric: wioot the
improvement frae 80% tae 92%, the take-up shift savin wad be pairtly clawed back by failure
demand routin frustrated digital users straicht back tae the dear phone channel.

## Link tae saftware ingineerin

Thir fower metrics are a workin example o a cost-consequence dashboard: ae cost metric held
apairt frae three ootcome/quality metrics, deliberately never collapsed intae a single score — the
same discipline argued for in [public sector KPIs](../kpis-in-the-public-sector/). For ingineers this
braks doun intae concrete, ownable wark: completion rate is a funnel-instrumentation problem, and ilka
abandonment pynt in the journey is, in principle, locatable and fixable; cost per transaction
requires genuine unit-cost accoontin includin staff-assistit and paper-channel costs, nae juist
cloud hostin spend (see [cost per transaction](../cost-per-transaction/) and
[total cost of ownership in government IT](../total-cost-o-ownership-in-government-it/)); and
digital take-up is an equity metric wearin an efficiency costume — the citizens wha cannae or will
nae shift channel are disproportionately aulder, disabled, or digitally excludit, sae aggressive
channel closure converts a "savin" intae an access harm (see
[digital inclusion](../digital-inclusion/) and [channel shift savings](../channel-shift-savings/)).
The 14-pynt staundard itsel is the process specification ahint thir nummers — see
[digital service standard](../digital-service-standard/) for the staundard in fu, and
[citizen satisfaction metrics](../citizen-satisfaction-metrics/) for hou the satisfaction figure
here relates tae braider trust meisurement.

## Pitfaws

- **Take-up gained by closin the alternative channel**: shuttin a phone line lifts the digital
  take-up percentage arithmetically while dumpin failure demand ontae whitever channel remains
  (aften a dearer assistit-digital or face-tae-face route); aye meisure total-system
  cost, nae the ratio alane.
- **Meisurin completion rate frae step twa o the funnel**: startin the "started" coont efter the
  first genuine drop-aff pynt flatters the completion rate and hides the biggest fixable loss.
- **Cost per transaction excludin assistit-digital support**: a digital-only unit cost that ignores
  the staff time spent helpin users wha cannae self-serve understates the true cost o the channel.
- **Publishin metrics wioot a shared definition across services**: "transaction" and "completed"
  mean different things across different service teams unless the definitions are standardized and
  versioned, makin cross-service comparison unreliable.

## Sources

- GOV.UK Service Manual, "The Service Standard." <https://www.gov.uk/service-manual/service-standard>
- GOV.UK Service Manual, "Measuring Success — Data You Must Publish."
  <https://www.gov.uk/service-manual/measuring-success/data-you-must-publish>
- GOV.UK, "Digital Efficiency Report."
  <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
