# Value o cybersecurity in the public sector

Public sector cybersecurity value is the discipline o pricin risk reduction: whit is it worth tae mak a breach o citizen data less likely, gien that security spendin produces nae veisible ootput whan it warks and a gey veisible ane whan it fails? For a service haudin benefits records, health data, or tax records, that "invisible whan workin" property is exactly why it needs an explicit value argument, nae juist a compliance tick.

## Why it maitters

The UK National Cyber Security Centre's Cyber Assessment Framework (CAF) gies public sector organizations a structured wey tae mak security an assessable, ootcome-based discipline raither nor a checklist: it defines fower high-level objectives (managin security risk, protectin agin cyber attack, detectin cyber security events, and minimizin the impact o incidents) brokken doun intae contributin ootcomes that a system owner can be assessed agin, in the same spirit as the [digital-service-standard](../digital-service-standard/)'s pynt 9 ("create a secure service which protects users' privacy"). Whit CAF assessment protects agin has a documentit price tag: IBM's Cost of a Data Breach Report tracks average breach cost by sector, and has consistently fund the public sector towards the lower end o the range compared wi finance or healthcare — recent editions pit the public sector average around $2.6–2.9 million per breach — but "lower nor finance" isnae "low", and government breaches cairry costs the report's figures dinnae fully capture: loss o citizen trust in digital channels, which depresses the [digital take-up](../channel-shift-savings/) that channel-shift business cases depend on, and the political and legal cost o exposin data the state compelled citizens tae haund ower in the first place.

## The maths

Security investment is valued the wey ony risk-reduction spendin is valued: as an expectit-loss reduction, uisin the classic risk-management identity.

```
Annualized Loss Expectancy (ALE) = Single Loss Expectancy (SLE)
                                  × Annualized Rate of Occurrence (ARO)

Value of a security control =
  ALE_before_control − ALE_after_control − annual cost of the control

A control is worth funding when:
  (ALE_before − ALE_after) > annual cost of the control

CAF assessment doesn't directly output a probability, but a service's
CAF outcome profile (which contributing outcomes are "achieved",
"partially achieved", or "not achieved") is a reasonable proxy input
to estimate ARO — a system with unmanaged privileged access or no
tested incident response plan has a materially higher realistic ARO
than one with both in place.
```

## Wrocht example

**County cooncil case-management system haudin social care records for 40,000 residents**:

```
Single Loss Expectancy (breach cost), using a public-sector-sector
average from a recent IBM Cost of a Data Breach Report ≈ £2.1m
(converted, order-of-magnitude figure — always re-derive from the
current report edition rather than reusing a fixed number)

Current ARO (unmanaged privileged access, no tested incident
response, per an internal CAF self-assessment showing multiple
"not achieved" outcomes) ≈ estimated 8% per year
  ALE_before = £2.1m × 0.08 = £168,000/year

Proposed control: privileged access management + tested incident
response plan, moving the relevant CAF outcomes to "achieved",
estimated to cut ARO to 3%/year
  ALE_after = £2.1m × 0.03 = £63,000/year

Annual cost of the control (tooling + process + testing) = £45,000

Value of the control = (168,000 − 63,000) − 45,000 = £60,000/year
  net positive — fund it. The arithmetic also shows the control
  would still be worth funding at nearly triple the cost, which is
  the kind of sensitivity check that should accompany any ALE figure
  built on estimated probabilities.
```

## Link tae saftware ingineerin

Ingineers awn maist o the levers in the ALE equation: access control design, dependency and patch hygiene, loggin and detection coverage, and incident response tooling aw muive the ARO term directly, which is why CAF assessment reads like a technical architecture review as muckle as a policy audit. This is [technical-debt-as-public-value-erosion](../technical-debt-as-erosion-o-public-value/) in its maist acute form — unpatched, unmonitored, puirly-access-controlled systems are debt whase interest payment is tail risk, nae a steady drag — and it sud be reconciled agin [total-cost-of-ownership-in-government-it](../total-cost-o-ownership-in-government-it/) sae security spend isnae treatit as separate frae the system's real rinnin cost. It is an aw a direct input tae [value for siller](../value-for-siller/) assessments unner the Green Book: risk-adjusted cost is pairt o the "cost" side o ony options appraisal, nae an afterthocht bolted on at the end.

## Pitfaws

- **Treatin CAF self-assessment as security itsel**: a completed assessment describes a security posture; it disnae create ane — the value is in the ootcomes achieved, nae the document.
- **Uisin global average breach costs as a local estimate wioot adjustment**: IBM's figures are averages across lairge, varied samples; a sma local authority's realistic single loss expectancy is raurly the same as a national government department's.
- **Ignorin tail-risk psychology in investment decisions**: a low annual probability makes security spend easy tae defer indefinitely, richt up until the year it disnae — sensitivity-testin the ALE calculation agin a range o AROs, as in the wrocht example, coonters this.
- **Only coontin the IBM-style breach cost, nae the trust cost**: a breach that depresses citizen willingness tae uise digital channels erodes the [channel-shift-savings](../channel-shift-savings/) case for years efterhaun, a cost raurly includit in breach-cost estimates.

## Sources

- National Cyber Security Centre, Cyber Assessment Framework. <https://www.ncsc.gov.uk/collection/caf>
- IBM, Cost of a Data Breach Report. <https://www.ibm.com/reports/data-breach>
- GOV.UK Service Manual, service standard, point 9: create a secure service which protects users' privacy. <https://www.gov.uk/service-manual/service-standard/point-9-create-a-secure-service>
