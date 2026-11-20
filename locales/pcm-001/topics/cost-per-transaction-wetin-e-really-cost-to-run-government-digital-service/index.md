# Cost per Transaction: Wetin E Really Cost to Run Government Digital Service

Cost per transaction na di headline unit-economics metric for government digital service: total cost to deliver one channel, wey dem divide by di number of transactions wey dem complete through am. Na di flagship figure for di old GOV.UK Performance Platform, and na di number wey fund one decade of "digital by default" investment — wey be exactly why e also be di metric wey people dey game pass.

## Wetin make am matter

Di Cabinet Office 2012 Digital Efficiency Report put di channel-cost comparison for terms wey stick: dem find say digital transactions cost around 20 times less than by phone and around 50 times less than face-to-face, with illustrative local-government figures of roughly £0.15 per web transaction against £2.83 by phone and £8.62 face-to-face. Dat single comparison become di justification to redesign di 25 exemplar services wey dem name for di Government Digital Strategy, and for every departmental business case wey don cite channel-shift savings since then. Di figure dey genuinely useful as order-of-magnitude signal, but di ratio depend completely on wetin dem count for each side: fair phone-channel cost include di call centre staff, telephony contract, training and estate; fair digital cost include hosting, ongoing product-team salaries, support desk time for failed journeys, and di assisted-digital channel wey [digital-service-standard](../digital-service-standard-di-rules-wey-digital-public-service-must-pass/) point 5 require. If you strip enough of dem comot from di digital side, any service go look cheap.

## Di maths

```
Cost per transaction = total allocated channel cost / completed transactions

Total allocated channel cost suppose include:
  + hosting and infrastructure
  + product/engineering/support team cost (amortized)
  + content and service design cost (amortized)
  + assisted-digital / accessibility support cost
  + failure-demand cost (users wey fail digital and fall back to phone)
  − one-off build cost dem amortize am over di expected service life, no be
    to expense am all into year one

Di common accounting trick:
  "Marginal cost per transaction" (hosting only, once dem don build am) dem quote am
  as if na "average cost per transaction" (total cost including
  di team wey dey continue to build and run am). Di two fit differ by
  10x or more for service wey get large, active delivery team.
```

## Example wey dem work out

**Vehicle tax renewal service**: 4 million transactions/year.

```
Marginal-only figure (di trick):
  Hosting + payment processing only = £180,000/year
  Cost per transaction = 180,000 / 4,000,000 = £0.045
  → headline figure wey dem quote for business case

Fully-loaded figure (di honest one):
  Hosting + payment                    £180,000
  Product/engineering team (8 FTE)     £720,000
  Support desk (failed/queried txns)   £310,000
  Assisted-digital phone line          £140,000
  Total                                £1,350,000
  Cost per transaction = 1,350,000 / 4,000,000 = £0.3375

Di fully-loaded figure still dey roughly 8x cheaper than di £2.83
phone-channel comparator from di Digital Efficiency Report — real
and defensible saving — but e dey 7.5x higher than di marginal-only figure
wey dem quote for di shortcut version. Both numbers "true"; only one
fit compare to di phone-channel cost wey dem dey set am against.
```

## How e connect to software engineering

Cost per transaction na where architecture decisions turn to finance number: service wey auto-scale cleanly and need little manual intervention dey drive dis figure down over time; one wey generate high support-ticket volume from confusing error states dey drive am up no matter how efficient di hosting be. Na di natural companion metric to [digital-service-standard](../digital-service-standard-di-rules-wey-digital-public-service-must-pass/) point 10 ("define wetin success look like, and publish performance data") and to [service-standards-and-transaction-metrics](../service-standards-and-transaction-metrics-how-to-measure-public-digital-services/), wey set out di fuller KPI set wey dis figure sit inside. E also dey feed directly into [channel-shift-savings](../channel-shift-savings-money-wey-dem-save-when-people-move-to-digital/) calculations and dem suppose reconcile am against [total-cost-of-ownership-in-government-it](../total-cost-of-ownership-in-government-it-di-full-cost-of-system-from-buy-till-e-die/) so dat platform and shared-service overheads no go quietly drop.

## Wahala dem wey you suppose avoid

- **Marginal cost wey dem dress as average cost**: to quote hosting-only cost once service don build, and omit di ongoing team wey dey maintain, iterate and support am — see di worked example above.
- **To exclude assisted-digital cost**: channel no "digital by default" compliant, and dem no capture im true cost, if dem cost di phone/paper fallback wey [digital-inclusion](../digital-inclusion-make-sure-say-digital-services-no-leave-anybody-behind/) require separately or dem ignore am.
- **To ignore failure demand**: transactions wey start digital and fail, wey generate phone call or paper form anyway, na cost of di digital channel, no be di channel wey catch di failure.
- **To compare transactions of different complexity across channels**: phone calls dey handle di hard cases disproportionately (multiple dependents, error correction, vulnerable applicants); to compare average phone cost to average digital cost dey overstate di ratio unless dem match di transaction mix.

## Sources

- Cabinet Office, Digital Efficiency Report (2012). <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- GOV.UK Service Manual, service standard, point 10: define what success looks like. <https://www.gov.uk/service-manual/service-standard/point-10-define-success-publish-performance-data>
- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
