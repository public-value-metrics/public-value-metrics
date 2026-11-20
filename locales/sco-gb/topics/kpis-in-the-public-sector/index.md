# KPIs in the public sector

A key performance indicator (KPI) is a chosen, tracked meisure that staunds in for whether a public
service is daein its job weel. In government the choice o KPI is never neutral: because KPIs
attach tae budgets, league tables, and careers, the act o selectin ane shapes the behaviour o
everybody doonstream o it, aften mair nor the policy that created the service.

## Why it maitters

Charles Goodhart's 1975 observation on monetary policy — later popularized by Marilyn Strathern as
"when a measure becomes a target, it ceases to be a good measure" — is the single maist important
warnin label in public-sector performance management. A KPI chosen tae *describe* a system starts
tae *distort* that system the meenit resourcin, pay, or political survival is tied tae it. The
canonical illustration is NHS ambulance response times: whan the eicht-minute Category A response
target became bindin, some trusts were shawn tae hae "stacked" ambulances juist ootside the
response-time clock, or reclassified calls, tae hit the nummer wioot chyngin patient ootcomes.
The UK National Audit Office's guidance on choosin and uisin performance indicators — set oot
across its value-for-money reports and its "Performance Measurement by Regulators" and "Choosing
the Right FABRIC" framework (Fit for purpose, Appropriate, Balanced, Robust, Integrated,
Cost-effective) — exists juist because departments kept pickin indicators that were easy tae
report raither nor indicators that were hard tae gemme. A saftware ingineer wha ships the dashboard
that a meinister or director will be judged agin is, whether they intend it or no, designin the
incentive structure o a public institution.

## The maths

KPI design is a framework-shaped topic, but the *evaluation* o a candidate KPI is a repeatable
checklist, nae a formula:

```
For each candidate KPI, score against:
  Fit for purpose  — does it measure the outcome, or a proxy several steps removed?
  Appropriate      — does it belong to the people who can actually influence it?
  Balanced         — is it paired with a counter-metric that catches gaming?
  Robust           — can it survive audit, or is it self-reported and unverifiable?
  Integrated       — does it fit the wider set, or push against another KPI?
  Cost-effective   — does collecting it cost more than the decision it informs?

Leading vs lagging split:
  Leading indicator  → predicts future outcome, but often gameable (e.g. calls answered <60s)
  Lagging indicator  → confirms the outcome happened, but arrives too late to steer (e.g. annual
                        satisfaction survey)
  A defensible KPI set pairs at least one of each per objective.
```

## Wrocht example

**Ambulance trust**: a trust reports a Category A (life-threatenin) response-time KPI o "75% o
calls responded tae within 8 minutes." In ae quarter, 6,000 Category A calls come in; 4,500 are met
within 8 minutes, givin 75.0% — apparently on target.

```
Headline KPI = 4,500 / 6,000 × 100 = 75.0%  (meets the 75% threshold)
```

But a Goodhart audit adds a counter-metric: mean response time for the slowest 10% o calls.

```
Slowest decile mean response = 34 minutes (up from 19 minutes two years earlier)
```

The trust is hittin the target while the tail — the calls maist likely tae be genuinely
life-threatenin ance triage is imperfect — has got muckle waur, because crews are bein
prioritized towards calls close tae the 8-minute cliff-edge raither nor towards clinical urgency. The
single KPI telt a fause story; the paired KPI telt the true ane.

## Link tae saftware ingineerin

Ingineers biggin performance dashboards for government are, functionally, designin the incentive
API o the organization. Practical implications: instrument the *denominator* as rigorously as the
numerator (a KPI reportit as a bare percentage invites denominator gamin — see
[cost-per-transaction](../cost-per-transaction/) for the same trap in digital services); big
counter-metrics intae the same dashboard raither nor a separate report naebody reads, sae gamin is
veisible at the pynt o decision; and version the KPI definition, because a silent redefinition
(chyngin whit coonts as a "call," a "case," or a "completion") is functionally equivalent tae
chyngin the target wioot announcin it. A [public value scorecard](../public-value-scorecard/)
is ae structured wey tae stop a single KPI bein read in isolation, and
[ootcomes-based accoontability](../ootcomes-based-accoontability/) is the discipline o choosin
population-level KPIs that a single team cannae unilaterally distort.

## Pitfaws

- **Pickin the easy-tae-collect metric ower the meaninfu ane**: call-answer time is trivial tae
  log; whether the call solved the citizen's problem is nae — but only the second ane is the
  ootcome. Resist defaultin tae whit the system already emits.
- **Nae counter-metric**: ony KPI attached tae siller or reputation will be gamed at the margin;
  ship it wi a paired metric that catches the likely gamin vector afore publishin it.
- **Redefinin the metric wioot a changelog**: swappin "calls received" for "calls answered" tae
  flatter a trend destroys the time series' credibility the meenit it's discovert — aye
  publish a definitions changelog alangside the nummers.
- **Confusin activity wi result**: coontin inspections completit is an ootput; coontin
  premises brocht intae compliance is nearer the ootcome (see
  [ootcomes vs ootputs](../ootcomes-vs-ootputs/)).

## Sources

- National Audit Office, "Choosing the Right FABRIC: A Framework for Performance Information."
  <https://www.nao.org.uk/>
- Marilyn Strathern, "'Improving Ratings': Audit in the British University System," *Social
  Anthropology*, 1997 (formulation of Goodhart's law as commonly cited).
- National Audit Office, investigations into NHS ambulance service performance reporting.
  <https://www.nao.org.uk/>
