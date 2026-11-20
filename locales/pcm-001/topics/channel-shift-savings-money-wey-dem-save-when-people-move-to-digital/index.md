# Channel Shift Savings: Money Wey Dem Save When People Move to Digital

Channel shift savings na di projected cost reduction from to move transaction volume comot from expensive channels — phone, face-to-face counters, paper post — go cheap digital self-service. Na di financial engine behind "digital by default", and na also di line item for business case wey e likely pass to wrong, because di assumption wey e stand on — say offline channels dey shrink as digital take-up dey rise — na only sometimes e true.

## Wetin make am matter

Di arithmetic look like say nobody fit argue am if you use di [cost-per-transaction](../cost-per-transaction-wetin-e-really-cost-to-run-government-digital-service/) figures from di Digital Efficiency Report: shift one million transactions from £8.62 face-to-face visit to £0.15 digital one and di saving pass £8 million. But saving only become cash wey dem release for redeployment if dem really decommission di *fixed capacity* of di channel wey dey shrink — di call centre seats, di counter staff, di phone contract minutes — and local government digital programmes don repeatedly find say total contact volume no dey fall in line with digital take-up. Research from local authority digital transformation programmes and bodies like Socitm and di Local Government Association don document one pattern wey dey repeat: digital channels dey attract genuinely new contact (citizens wey for no phone or visit, now dey do am because e easier), and meaningful share of "digital" transactions dey fail halfway and still generate phone call anyway — so phone volume dey fall by far less than wetin di digital take-up percentage suggest, sometimes e no even fall at all for absolute terms even as im *share* of total contact dey go down.

## Di maths

```
Gross channel-shift saving = shifted volume × (cost_old_channel − cost_digital)

Net (realized) saving = gross saving
                       − new/shadow demand wey di easier channel create
                       − failure-demand cost (digital failures wey
                         still generate phone call or counter visit)
                       − cost of unretired fixed capacity (call
                         centre fit only shed staff for discrete units;
                         15% volume drop rarely let you cut 15% of
                         headcount)

Realization threshold: savings only dey bankable once volume drop
below di level wey di old channel fit staff for im next-smaller discrete
capacity step (e.g. to lose one full shift, one full desk, one
contracted headcount band)
```

## Example wey dem work out

**County council blue badge renewal service**: 60,000 renewals/year, before dem na 100% phone/paper at £6.40 per transaction. One new digital service launch and e reach 65% digital take-up inside one year, at £0.30 per digital transaction.

```
Naive (gross) saving calculation:
  39,000 shifted × (£6.40 − £0.30) = £237,900/year

Wetin really happen, according to di council contact-centre data:
  Phone volume fall from 60,000/year to 46,000/year (−23%, no be −65%)
  because: 9,000 digital journeys fail and generate follow-up call
           (failure-demand leakage), and 4,000 people wey before
           no renew at all now dey renew, because dem see say e easy online
           (shadow demand — genuine access improvement, but no be
           saving)

  Dem dey staff di phone contact centre for bands of 8,000 calls/FTE;
  14,000-call drop (60,000 → 46,000) release 1.75 FTE, wey for practice
  dem round down to 1 FTE wey dem really redeploy = £34,000/year

Realized saving = £34,000/year plus di digital-channel build/run
  cost wey dem avoid on 39,000 transactions ≈ £34,000 + (39,000 × £0.30
  digital cost wey dem don already count) — small fraction of di £237,900 headline,
  though di service still better for users without any doubt.
```

## How e connect to software engineering

Di engineering lesson na say na *operational* decisions (rostering, decommissioning, contract renegotiation) dey realize channel shift savings, no be di software wey ship — team fit hit every [digital-service-standard](../digital-service-standard-di-rules-wey-digital-public-service-must-pass/) point and still deliver zero net saving if nobody retire di fixed capacity of di old channel. To instrument failure demand (where for di digital journey users dey abandon and wetin dem dey do next) na funnel-analytics problem wey dem fit solve, and na di single highest-leverage thing wey engineering team fit do to protect di savings case; na also di direct link to [cost-per-transaction](../cost-per-transaction-wetin-e-really-cost-to-run-government-digital-service/), wey failure demand dey quietly inflate. See [benefits-realization](../benefits-realization-to-show-say-di-promised-benefits-really-happen/) for di wider discipline to check say business case savings really land, and [digital-inclusion](../digital-inclusion-make-sure-say-digital-services-no-leave-anybody-behind/) for why di offline channel usually no fit, and no suppose, retire fully.

## Wahala dem wey you suppose avoid

- **To assume 1:1 channel substitution**: to model digital take-up as direct subtraction from phone/counter volume, and ignore shadow demand and failure-demand leakage wey local government channel-shift research don document.
- **To book gross savings before decommissioning**: to count di saving for business case for di year wey take-up rise, no be di year (if e ever happen) wey dem really cut di capacity of di old channel.
- **To ignore di step-function nature of staffing costs**: 20% volume drop rarely turn to 20% cost drop, because contact centres and counters dey staff for discrete bands, no be continuously.
- **To treat shadow demand as waste**: new contact from users wey dem exclude before or wey dem discourage before na real increase in [public value](../public-value-wetin-government-and-social-organizations-really-create-for-citizens/), no be modelling error — dem suppose report am as access outcome, no be to net am off as noise.

## Sources

- Cabinet Office, Digital Efficiency Report (2012). <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- Local Government Association, digital transformation and channel shift resources. <https://www.local.gov.uk/our-support/efficiency-and-income-generation/digital-transformation>
- Socitm, local public services digital insight research. <https://www.socitm.net/>
