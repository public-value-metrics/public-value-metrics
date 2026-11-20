# Cost o Delay in Public Programmes (CoD)

Cost o Delay is the public value lost per unit time that a programme, service, or system chynge is *no* yet delivert. It is the maister brig metric o this group o topics: it converts "the go-live slippit six months" intae pounds per week, or intae WELLBYs per week, sae that delay can be argued aboot in the same currency as the business case itsel.

## Why it maitters

Reinertsen's rule — "if ye anely quantify ae thing, quantify the Cost of Delay" — travels intae government near unchynged, acause public programmes are unco exposed tae it: business cases are approved against a forecast benefit stream, but the stream anely stairts flowin at go-live, an ilka week o slippage is a week o forgane value that naebody prices on the risk register. The National Audit Office's repeatit scrutiny o Universal Credit's rollout (see its "Rolling Out Universal Credit" reports, <https://www.nao.org.uk/>) illustrates the pattern: schedule slippage wis trackit an reportit, but the pounds-per-week cost o *no yet* deliverin the reformit system tae the next tranche o claimants wis seldom statit as a headline figure, even though it's the nummer that shuid hae driven prioritization an escalation. Athoot a CoD figure, a delayed programme looks like a schedule problem for the delivery board; wi ane, it's a value-erosion problem for the accountin officer.

## The maths

```
CoD = benefit per unit time forgane while undelivert   (£/week or WELLBYs/week)

Total delay loss = CoD × delay duration

Benefit streams tae sum for public programmes:
  cash-releasin savings   (fraud/error reduction, avoidit temporary costs)
+ non-cash capacity freed  (caseworker/officer oors × loadit cost)
+ wellbein benefit        (WELLBYs × £13,000/WELLBY, HMT Green Book
                             wellbein supplementary guidance, 2019 prices)
```

For citizen-facin services, denominate in wellbein as weel as siller — see [wellbeing-adjusted life years](../wellbein-adjustit-life-years/) for the unnerlyin unit, an [opportunity cost in public spending](../opportunity-cost-in-public-spendin/) for whit the delayed pound could itherwise hae fundit.

## Wrocht example

**Local authority**: a hoosin-benefit system upgrade cuts owerpayment error by £150/claim/year athort 20,000 live claims.

```
Annual benefit = 150 × 20,000 = £3,000,000/year
CoD = 3,000,000 / 52 ≈ £57,700/week
A 12-month implementation delay costs 52 × 57,700 ≈ £3,000,000 in avoidable error.
```

**Central government agency**: a disability-benefit assessment service, delivert six months (26 weeks) later than plannit, means 200,000 claimants/year wait an average three weeks langer for a decision. Ilka extra week o financial uncertainty is modellit as a −0.0018 WELLBY (life-satisfaction pynt) effect:

```
WELLBY loss per claimant = 3 × 0.0018 = 0.0054
Annual WELLBY loss = 200,000 × 0.0054 = 1,080 WELLBYs/year
CoD_wellbein = 1,080 / 52 ≈ 20.8 WELLBYs/week
CoD_siller = 20.8 × £13,000 ≈ £270,000/week o wellbein value
```

A 26-week delay therefore "costs" roughly 540 WELLBYs — worth aboot £7 million at the Green Book's wellbein valuation — reframin a missed go-live date as a citizen-welfare event, no a project-management fitnote.

## Link tae saftware ingineerin

CoD is whit maks [DORA metrics](../dora-metrics-for-public-value/) an [flow metrics](../flow-metrics-in-government-delivery/) financially legible: lead time in the pipeline × CoD is siller (or wellbein) burnt in queues afore it iver reaches a citizen. Concretely:

- **Prioritization**: rank a backlog by CoD ÷ duration raither than by stakeholder seniority — the software engineerin analogue o the Green Book's requirement tae appraise options on value, no on wha's askin.
- **Procurement**: a 12–18 month framework procurement cycle haes a CoD; pricin it chynges the urgency case for accelerated routes, an feeds straucht intae [build vs buy](../big-or-buy-in-government/) decisions whaur time-tae-value is a decision driver.
- **Benefits case**: ilka CoD figure quotit at approval shuid appear again at [benefits realization](../benefits-realization/) — if the delay cost wis real, the accelerated benefit shuid be meisurable efter go-live.

## Pitfaws

- **Assumin linear CoD**: some public services hae deadline-shapit value (a statutory compliance date — CoD jumps tae enforcement-risk levels efter the date, near zero afore) raither than a smooth weekly rate. Classify the urgency profile afore multiplyin.
- **CoD on ootputs naebody needs**: delay anely haes a cost if the undelivert thing haes value; a system naebody will uise haes zero CoD nae maitter hoo late it is.
- **Double-coontin delay an discountin**: the [social discount rate](../social-discoont-rate/) awready prices time on multi-year appraisal horizons; CoD is the within-horizon, operational version for weeks an months. Uise CoD for schedule slippage, NPV shift for multi-year re-phasin.

## Sources

- Reinertsen DG, *The Principles of Product Development Flow*, Celeritas Publishing, 2009.
- HM Treasury, Green Book supplementary guidance: wellbeing. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>
- National Audit Office, reports on Universal Credit rollout. <https://www.nao.org.uk/>
