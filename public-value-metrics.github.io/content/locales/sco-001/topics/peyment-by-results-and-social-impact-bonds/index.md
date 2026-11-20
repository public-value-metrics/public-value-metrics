# Peyment by results and social impact bonds (PbR/SIBs)

Peyment by results (PbR) pays a provider on the basis o verified ootcomes achieved, nae activities
cairried oot. A social impact bond (SIB) is a specific PbR financin structure in which private or
philanthropic investors fund service delivery up front and are repaid — wi a return — by a
government commissioner only if independently meisured ootcomes hit agreed thresholds, shiftin
the delivery risk frae the taxpayer tae the investor.

## Why it maitters

The warld's first SIB launched at HMP Peterborough in September 2010: Social Finance raised
£5 million frae 17 investors tae fund the "One Service," workin wi short-sentence prisoners
(unner 12 month) tae cut reoffendin, wi the Ministry o Justice and the Big Lottery Fund agreein
tae repay investors only if reconviction events fell by at least 7.5% agin a matched national
comparison cohort. The final cohort o the Peterborough pilot recordit a 9.7% reduction in
reconvictions, comfortably abune the threshold, and investors were repaid wi a return. The
mechanism maittered because it solved a specific commissionin problem: government wantit tae pay for
ootcomes raither nor inputs, but couldnae tak on the financial risk o an intervention that micht
nae wark, sae the SIB structure muivit that risk ontae investors willin tae underwrite it. The
Government Outcomes Lab (GO Lab) at Oxford's Blavatnik School of Government noo maintains the maist
complete public evidence base on PbR and SIB performance warldwide, trackin weel ower 200 impact
bonds globally and publishin the research on whit design features correlate wi success or
failure. The lesson the evidence base keeps comin back tae is that the *ootcome metric chosen*, and
wha bears the risk o missin it, determines near aathin else aboot hou a PbR contract
actually behaves in practice.

## The maths

```
PbR payment = base payment (if any) + Σ (outcome achieved × unit price per outcome)

Social impact bond investor return:
  Investor outlay   = upfront capital funding service delivery
  Outcome payment   = commissioner pays only if outcome ≥ threshold, scaled by
                       how far above threshold performance lands
  Investor return   = outcome payments received − investor outlay
                       (a rate of return, often capped, reflecting risk taken)

Key design parameters that determine the whole contract's behaviour:
  Outcome metric        — must be an outcome, not an output (see outcomes-vs-outputs)
  Comparison/counterfactual — usually a matched cohort (see counterfactual-analysis)
  Payment threshold      — minimum improvement before any payment triggers
  Payment curve           — linear, stepped, or capped above the threshold
  Attribution/deadweight discount — see additionality-and-deadweight
```

## Wrocht example

**Peterborough One Service** (illustrative figures drawn frae published evaluations):

```
Investor capital raised:         £5,000,000
Cohort:                          ~3,000 short-sentence male prisoners over two cohorts
Threshold:                       ≥7.5% reduction in reconviction events vs matched
                                  national comparison group, or no payment
Cohort 1 result:                 8.4% reduction — below the contractual bar for that
                                  cohort alone under the original rules
Combined/final cohort result:    9.7% reduction — above threshold
Outcome payment:                 government (Ministry of Justice / Big Lottery Fund)
                                  pays per percentage point above threshold, funding
                                  investor repayment plus a return
```

**Local authority PbR contract (illustrative)**: a family-intervention service is commissioned at
£4,000 per faimily referred (activity payment) plus £6,000 per faimily wi nae further bairn
protection referral 12 month efter closure (ootcome payment). 200 faimilies referred, 150 cases
closed, 96 remain referral-free at 12 month:

```
Activity payment  = 200 × £4,000 = £800,000
Outcome payment   = 96 × £6,000  = £576,000
Total contract cost = £1,376,000 for 96 confirmed sustained outcomes
Cost per confirmed outcome ≈ £14,333 (see cost-per-outcome)
```

## Link tae saftware ingineerin

Peyment by results is an incentive-alignment problem afore it is a data problem, and the data
system is whaur that alignment either haulds or breks. Independent, tamper-evident ootcome
verification is the hale gemme: the commissioner and provider hae opposin incentives on hou an
ambiguous case gets codit, sae the system recordin ootcomes needs an audit trail, a data-sharin
agreement wi the independent verifier (aften a different body frae the provider, whiles an
official statistics body matchin agin police or benefits records), and immutable versionin o
the ootcome definition — the PbR equivalent o the "redefinin the metric" pitfaw in
[public sector KPIs](../kpis-in-the-public-sector/). Attribution calculations depend on
[counterfactual-analysis](../counterfactual-analysis/) matched-cohort methods, which need
reproducible, auditable code, nae a yin-aff spreadsheet. And the metric itsel maun be a genuine
ootcome, nae a proxy activity — see [ootcomes vs ootputs](../ootcomes-vs-ootputs/) — because a PbR
contract payin for an ootput juist relabels business-as-usual fundin wi extra transaction cost.
Whaur a SIB's social return is bein modelled prospectively, that appraisal typically borrows
directly frae [social return on investment](../social-return-on-investment/) methodology.

## Pitfaws

- **Payin for an easily-gamed proxy ootcome**: "attendance at sessions" is an activity dressed as
  an ootcome; insist on a meisure that reflects the actual chynge socht (reoffendin, employment,
  housin stability).
- **Nae credible coonterfactual**: wioot a matched comparison group, an improvement could be
  regression tae the mean or a wider trend, nae the programme's effect — see
  [counterfactual-analysis](../counterfactual-analysis/) and
  [additionality-and-deadweight](../additionality-an-deadweight/).
- **Underestimatin transaction and evaluation costs**: independent verification, data linkage, and
  contract administration for PbR/SIB schemes routinely rin intae double digits as a percentage o
  contract value — GO Lab's evidence base documents this as a recurrin driver o scheme
  discontinuation.
- **Cherry-pickin or "parkin"**: providers paid per ootcome hae a direct incentive tae prioritize
  clients maist likely tae succeed onywey and deprioritize the hardest cases — design payment tiers
  or case-mix adjustment tae coonter it.

## Sources

- Government Outcomes Lab, University of Oxford, Blavatnik School of Government.
  <https://golab.bsg.ox.ac.uk/>
- Social Finance, "Peterborough Social Impact Bond" evaluation summaries.
  <https://golab.bsg.ox.ac.uk/case-studies/peterborough-social-impact-bond/>
- Ministry of Justice, "Peterborough Social Impact Bond HMP Doncaster: Final Reconviction Results
  for the Peterborough Social Impact Bond."
