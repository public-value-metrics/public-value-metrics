# Cybersecurity Value for Public Sector: How to Put Price on Risk Reduction

Public sector cybersecurity value na di discipline of to price risk reduction: how much e worth to make breach of citizen data less likely, since security spending no dey produce any visible output when e work and e dey produce very visible one when e fail? For service wey hold benefits records, health data, or tax records, dat "invisible when e dey work" property na exactly why e need clear value argument, no be only compliance tick.

## Wetin make am matter

UK National Cyber Security Centre Cyber Assessment Framework (CAF) give public sector organizations structured way to make security become assessable, outcome-based discipline instead of checklist: e define four high-level objectives (to manage security risk, to protect against cyber attack, to detect cyber security events, and to minimize di impact of incidents) wey dem break into contributing outcomes wey dem fit assess system owner against, for di same spirit as point 9 of di [digital-service-standard](../digital-service-standard-di-rules-wey-digital-public-service-must-pass/) ("create a secure service which protects users' privacy"). Wetin CAF assessment dey protect against get documented price tag: IBM Cost of a Data Breach Report dey track average breach cost by sector, and e don consistently find say public sector dey toward di lower end of di range compared to finance or healthcare — recent editions put di public sector average around $2.6–2.9 million per breach — but "lower than finance" no mean "low", and government breaches carry costs wey di report figures no fully capture: loss of citizen trust for digital channels, wey dey reduce di [digital take-up](../channel-shift-savings-money-wey-dem-save-when-people-move-to-digital/) wey channel-shift business cases depend on, and di political and legal cost of to expose data wey di state force citizens to hand over for di first place.

## Di maths

Dem dey value security investment di same way dem dey value any risk-reduction spending: as expected-loss reduction, with di classic risk-management identity.

```
Annualized Loss Expectancy (ALE) = Single Loss Expectancy (SLE)
                                  × Annualized Rate of Occurrence (ARO)

Value of security control =
  ALE_before_control − ALE_after_control − annual cost of di control

Control worth to fund when:
  (ALE_before − ALE_after) > annual cost of di control

CAF assessment no dey directly output probability, but service
CAF outcome profile (which contributing outcomes dem "achieved",
"partially achieved", or "not achieved") na reasonable proxy input
to estimate ARO — system wey get unmanaged privileged access or no
tested incident response plan get materially higher realistic ARO
than one wey get both for place.
```

## Example wey dem work out

**County council case-management system wey hold social care records for 40,000 residents**:

```
Single Loss Expectancy (breach cost), wey dem take from public-sector
average for recent IBM Cost of a Data Breach Report ≈ £2.1m
(converted, order-of-magnitude figure — always re-derive am from di
current report edition instead of to reuse fixed number)

Current ARO (unmanaged privileged access, no tested incident
response, according to internal CAF self-assessment wey show many
"not achieved" outcomes) ≈ estimated 8% per year
  ALE_before = £2.1m × 0.08 = £168,000/year

Proposed control: privileged access management + tested incident
response plan, wey go move di relevant CAF outcomes to "achieved",
dem estimate say e go cut ARO to 3%/year
  ALE_after = £2.1m × 0.03 = £63,000/year

Annual cost of di control (tooling + process + testing) = £45,000

Value of di control = (168,000 − 63,000) − 45,000 = £60,000/year
  net positive — fund am. Di arithmetic also show say di control
  go still worth funding even if cost nearly triple, and na dis kind
  sensitivity check suppose follow any ALE figure wey dem build
  on estimated probabilities.
```

## How e connect to software engineering

Engineers own most of di levers for di ALE equation: access control design, dependency and patch hygiene, logging and detection coverage, and incident response tooling all dey move di ARO term directly, and na why CAF assessment read like technical architecture review as much as policy audit. Dis na [technical-debt-as-public-value-erosion](../technical-debt-as-public-value-erosion-how-old-code-dey-chop-public-value/) for im most acute form — systems wey no dem patch, no dem monitor, and wey get poor access control na debt wey im interest payment na tail risk, no be steady drag — and dem suppose reconcile am against [total-cost-of-ownership-in-government-it](../total-cost-of-ownership-in-government-it-di-full-cost-of-system-from-buy-till-e-die/) so say dem no go treat security spend as separate from di system real running cost. E also be direct input to [value-for-money](../value-for-money-di-test-whether-public-spending-dey-worth-am/) assessments under di Green Book: risk-adjusted cost na part of di "cost" side of any options appraisal, no be afterthought wey dem bolt on for di end.

## Wahala dem wey you suppose avoid

- **To treat CAF self-assessment as security itself**: completed assessment dey describe security posture; e no dey create one — di value dey for di outcomes wey dem achieve, no be di document.
- **To use global average breach costs as local estimate without adjustment**: IBM figures na averages across large, varied samples; small local authority realistic single loss expectancy hardly be di same as national government department own.
- **To ignore tail-risk psychology for investment decisions**: low annual probability make am easy to postpone security spend forever, until di year wey e no go be so — to sensitivity-test di ALE calculation against range of AROs, as for di worked example, dey counter dis one.
- **To only count IBM-style breach cost, no count trust cost**: breach wey reduce citizen willingness to use digital channels dey erode di [channel-shift-savings](../channel-shift-savings-money-wey-dem-save-when-people-move-to-digital/) case for years after, na cost wey breach-cost estimates hardly include.

## Sources

- National Cyber Security Centre, Cyber Assessment Framework. <https://www.ncsc.gov.uk/collection/caf>
- IBM, Cost of a Data Breach Report. <https://www.ibm.com/reports/data-breach>
- GOV.UK Service Manual, service standard, point 9: create a secure service which protects users' privacy. <https://www.gov.uk/service-manual/service-standard/point-9-create-a-secure-service>
