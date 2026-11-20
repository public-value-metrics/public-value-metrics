# Cost Per Transaction

Cost per transaction is the headline unit-economics metric for a government digital service: total cost tae deliver a channel, dividit by the nummer o transactions completit through it. It wis the flagship figure on the auld GOV.UK Performance Platform, an it's the nummer that fundit a decade o "digital by default" investment — which is exactly why it's an aw the metric maist prone tae bein gamed.

## Why it maitters

The Cabinet Office's 2012 Digital Efficiency Report pit the channel-cost comparison in terms that stuck: digital transactions were fund tae cost aboot 20 times less than by phone an aboot 50 times less than face-tae-face, wi illustrative local-government figures o roughly £0.15 per web transaction against £2.83 by phone an £8.62 face-tae-face. That single comparison became the justification for redesignin the 25 exemplar services namit in the Government Digital Strategy, an for ilka departmental business case that haes citit channel-shift savings syne. The figure is genuinely uisefu as an order-o-magnitude signal, but the ratio depends wholly on whit's coontit on ilka side: a fair phone-channel cost includes the call centre's staff, telephony contract, trainin an estate; a fair digital cost includes hostin, ongaun product-team salaries, support desk time for failed journeys, an the assistit-digital channel required by [digital-service-standard](../digital-service-standard/) pynt 5. Strip enough o thae oot o the digital side an onie service looks cheap.

## The maths

```
Cost per transaction = total allocatit channel cost / completit transactions

Total allocatit channel cost shuid include:
  + hostin an infrastructure
  + product/engineerin/support team cost (amortizit)
  + content an service design cost (amortizit)
  + assistit-digital / accessibility support cost
  + failure-demand cost (uisers wha fail digital an fa back tae phone)
  − ae-aff build cost is amortizit ower expectit service life, no
    expensit athegither intae year ane

The common accoontin trick:
  "Marginal cost per transaction" (hostin anely, aince biggit) is quotit
  as if it were "average cost per transaction" (total cost includin
  the team that keeps biggin an runnin it). The twa can differ by
  10x or mair for a service wi a lairge, active delivery team.
```

## Wrocht example

**Vehicle tax renewal service**: 4 million transactions/year.

```
Marginal-anely figure (the trick):
  Hostin + payment processin anely = £180,000/year
  Cost per transaction = 180,000 / 4,000,000 = £0.045
  → headline figure quotit in a business case

Fully-loadit figure (the honest ane):
  Hostin + payment                    £180,000
  Product/engineerin team (8 FTE)     £720,000
  Support desk (failed/queried txns)  £310,000
  Assistit-digital phone line         £140,000
  Total                               £1,350,000
  Cost per transaction = 1,350,000 / 4,000,000 = £0.3375

The fully-loadit figure is still roughly 8x cheaper than the £2.83
phone-channel comparator frae the Digital Efficiency Report — a real
an defensible saving — but 7.5x heicher than the marginal-anely figure
quotit in the shortcut version. Baith nummers are "true"; anely ane is
comparable tae the phone-channel cost it's bein set against.
```

## Link tae saftware ingineerin

Cost per transaction is whaur architecture decisions become a finance nummer: a service that auto-scales cleanly an needs little manual intervention drives this figure doun ower time; ane that generates heich support-ticket volume frae confusin error states drives it up regairdless o hostin efficiency. It's the naitural companion metric tae [digital-service-standard](../digital-service-standard/) pynt 10 ("define what success looks like, an publish performance data") an tae [service-standards-and-transaction-metrics](../service-staundards-and-transaction-metrics/), that sets oot the fuller KPI set this figure sits inside. It an aw feeds straucht intae [channel-shift-savings](../channel-shift-savings/) calculations an shuid be reconcilit against [total-cost-of-ownership-in-government-it](../total-cost-o-ownership-in-government-it/) sae that platform an shared-service owerheids arenae silently drappit.

## Pitfaws

- **Marginal cost dressed as average cost**: quotin hostin-anely cost aince a service is biggit, leavin oot the ongaun team that maintains, iterates an supports it — see the wrocht example abune.
- **Excludin assistit-digital cost**: a channel isnae "digital by default" compliant, an its true cost isnae captured, if the phone/paper fallback required by [digital-inclusion](../digital-inclusion/) is costit separately or ignored.
- **Ignorin failure demand**: transactions that stert digital an fail, generatin a phone call or a paper form onyway, are a cost o the digital channel, no the channel that catches the failure.
- **Comparin transactions o different complexity athort channels**: phone calls disproportionately haundle the hard cases (multiple dependents, error correction, vulnerable applicants); comparin an average phone cost tae an average digital cost owerstates the ratio unless the transaction mix is matchit.

## Sources

- Cabinet Office, Digital Efficiency Report (2012). <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- GOV.UK Service Manual, service standard, point 10: define what success looks like. <https://www.gov.uk/service-manual/service-standard/point-10-define-success-publish-performance-data>
- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
