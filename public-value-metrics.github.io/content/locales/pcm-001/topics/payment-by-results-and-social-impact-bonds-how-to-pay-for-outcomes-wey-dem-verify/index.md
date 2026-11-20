# Payment by Results and Social Impact Bonds: How to Pay for Outcomes Wey Dem Verify

Payment by results (PbR) dey pay provider based on verified outcomes wey e achieve, no be activities wey e perform. Social impact bond (SIB) na one specific PbR financing structure wey private or philanthropic investors dey fund service delivery up front and government commissioner go repay dem — with return — only if outcomes wey independent party measure hit di agreed thresholds, so di delivery risk move from taxpayer go investor.

## Wetin make am matter

Di world first SIB launch for HMP Peterborough for September 2010: Social Finance raise £5 million from 17 investors to fund di "One Service," wey work with short-sentence prisoners (under 12 months) to cut reoffending, and Ministry of Justice and Big Lottery Fund agree to repay investors only if reconviction events fall by at least 7.5% against matched national comparison cohort. Di final cohort of di Peterborough pilot record 9.7% reduction in reconvictions, wey comfortably pass di threshold, and dem repay investors with return. Di mechanism matter because e solve one specific commissioning problem: government want to pay for outcomes instead of inputs, but e no fit absorb di financial risk of intervention wey fit no work, so di SIB structure move dat risk go investors wey ready to underwrite am. Government Outcomes Lab (GO Lab) for Oxford Blavatnik School of Government now dey maintain di most complete public evidence base on PbR and SIB performance for di world, dey track well over 200 impact bonds globally and dey publish di research on which design features connect to success or failure. Di lesson wey di evidence base dey return to again and again na say di *outcome metric wey dem choose*, and who bear di risk if dem miss am, dey determine almost everything else about how PbR contract really behave for practice.

## Di maths

```
PbR payment = base payment (if any) + Σ (outcome wey dem achieve × unit price per outcome)

Social impact bond investor return:
  Investor outlay   = upfront capital wey dem use fund service delivery
  Outcome payment   = commissioner pay only if outcome ≥ threshold, scaled by
                       how far above threshold di performance land
  Investor return   = outcome payments wey dem receive − investor outlay
                       (rate of return, often capped, wey reflect di risk wey dem take)

Key design parameters wey determine how di whole contract behave:
  Outcome metric        — must be outcome, no be output (see outcomes-vs-outputs)
  Comparison/counterfactual — usually matched cohort (see counterfactual-analysis)
  Payment threshold      — minimum improvement before any payment trigger
  Payment curve           — linear, stepped, or capped above di threshold
  Attribution/deadweight discount — see additionality-and-deadweight
```

## Example wey dem work out

**Peterborough One Service** (illustrative figures wey dem draw from published evaluations):

```
Investor capital wey dem raise:  £5,000,000
Cohort:                          ~3,000 short-sentence male prisoners over two cohorts
Threshold:                       ≥7.5% reduction for reconviction events vs matched
                                  national comparison group, or no payment
Cohort 1 result:                 8.4% reduction — below di contractual bar for dat
                                  cohort alone under di original rules
Combined/final cohort result:    9.7% reduction — above threshold
Outcome payment:                 government (Ministry of Justice / Big Lottery Fund)
                                  dey pay per percentage point above threshold, e fund
                                  investor repayment plus return
```

**Local authority PbR contract (illustrative)**: dem commission one family-intervention service at £4,000 per family wey dem refer (activity payment) plus £6,000 per family wey no get further child protection referral 12 months after closure (outcome payment). 200 families dem refer, 150 cases close, 96 remain referral-free at 12 months:

```
Activity payment  = 200 × £4,000 = £800,000
Outcome payment   = 96 × £6,000  = £576,000
Total contract cost = £1,376,000 for 96 confirmed sustained outcomes
Cost per confirmed outcome ≈ £14,333 (see cost-per-outcome)
```

## How e connect to software engineering

Payment by results na incentive-alignment problem before e be data problem, and di data system na where dat alignment go either hold or break. Independent, tamper-evident outcome verification na di whole game: di commissioner and provider get opposing incentives on how dem go code ambiguous case, so di system wey dey record outcomes need audit trail, data-sharing agreement with di independent verifier (often na different body from di provider, sometimes na official statistics body wey dey match against police or benefits records), and immutable versioning of di outcome definition — di PbR equivalent of di "redefining the metric" pitfall for [public sector KPIs](../key-performance-indicators-for-public-sector-how-to-choose-measures-wey-dem-no-fit-game/). Attribution calculations depend on [counterfactual-analysis](../counterfactual-analysis-wetin-for-happen-without-di-intervention/) matched-cohort methods, wey need reproducible, auditable code, no be one-off spreadsheet. And di metric itself must be genuine outcome, no be proxy activity — see [outcomes vs outputs](../outcomes-and-outputs-di-difference-between-wetin-you-do-and-wetin-e-change/) — because PbR contract wey pay for output just relabel business-as-usual funding with extra transaction cost. Where dem dey model SIB social return prospectively, dat appraisal usually borrow directly from [social return on investment](../social-return-on-investment-how-to-show-social-value-against-money-wey-dem-spend/) methodology.

## Wahala dem wey you suppose avoid

- **To pay for proxy outcome wey easy to game**: "attendance at sessions" na activity wey dress as outcome; insist on measure wey reflect di actual change wey dem dey look for (reoffending, employment, housing stability).
- **No credible counterfactual**: without matched comparison group, improvement fit be regression to di mean or wider trend, no be programme effect — see [counterfactual-analysis](../counterfactual-analysis-wetin-for-happen-without-di-intervention/) and [additionality-and-deadweight](../additionality-and-deadweight-wetin-programme-really-cause/).
- **To underestimate transaction and evaluation costs**: independent verification, data linkage, and contract administration for PbR/SIB schemes dey often reach double digits as percentage of contract value — GO Lab evidence base document am as recurring reason why schemes dey discontinue.
- **Cherry-picking or "parking"**: providers wey dem pay per outcome get direct incentive to prioritize clients wey most likely to succeed anyway and to deprioritize di hardest cases — design payment tiers or case-mix adjustment to counter am.

## Sources

- Government Outcomes Lab, University of Oxford, Blavatnik School of Government.
  <https://golab.bsg.ox.ac.uk/>
- Social Finance, "Peterborough Social Impact Bond" evaluation summaries.
  <https://golab.bsg.ox.ac.uk/case-studies/peterborough-social-impact-bond/>
- Ministry of Justice, "Peterborough Social Impact Bond HMP Doncaster: Final Reconviction Results
  for the Peterborough Social Impact Bond."
