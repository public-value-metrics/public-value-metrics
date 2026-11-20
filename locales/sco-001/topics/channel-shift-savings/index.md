# Channel Shift Savings

Channel shift savings are the projectit cost reduction frae movin transaction volume oot o expensive channels — phone, face-tae-face coonters, paper post — intae cheap digital self-service. It is the financial engine ahint "digital by default", an an aw the line item in the business case maist likely tae be wrang, acause the assumption it rests on — that offline channels shrink as digital take-up rises — is anely whiles true.

## Why it maitters

The arithmetic looks unarguable uisin the [cost-per-transaction](../cost-per-transaction/) figures frae the Digital Efficiency Report: shift a million transactions frae an £8.62 face-tae-face veesit tae a £0.15 digital ane an the saving is ower £8 million. But a saving anely becomes cash releasit for redeployment if the shrinkin channel's *fixed capacity* is actually decommissioned — the call centre seats, the coonter staff, the phone contract minutes — an local government digital programmes hae aften fund that total contact volume disnae fa in line wi digital take-up. Research frae local authority digital transformation programmes an bodies sic as Socitm an the Local Government Association haes documentit a recurrin pattern: digital channels attract genuinely new contact (citizens wha wadnae hae phoned or veesitit nou dae, acause it's easier), an a meaningfu share o "digital" transactions fail hauf-wey an generate a phone call onyway — sae phone volume fa's by faur less than the digital take-up percentage wad suggest, whiles no fallin ava in absolute terms even as its *share* o total contact declines.

## The maths

```
Gross channel-shift saving = shiftit volume × (cost_auld_channel − cost_digital)

Net (realizit) saving = gross saving
                       − new/shadow demand creatit by the easier channel
                       − failure-demand cost (digital failures that
                         still generate a phone call or coonter veesit)
                       − cost o unretirt fixed capacity (a call
                         centre can anely shed staff in discrete units;
                         a 15% volume drap seldom lets ye cut 15% o
                         headcount)

Realization threshold: savings are anely bankable aince volume drops
ablow the level the auld channel can staff at its next-smaller discrete
capacity step (e.g. losin ae fu shift, ae fu desk, ae
contractit headcount band)
```

## Wrocht example

**County council blue badge renewal service**: 60,000 renewals/year, afore this 100% phone/paper at £6.40 per transaction. A new digital service launches an reaches 65% digital take-up within a year, at £0.30 per digital transaction.

```
Naive (gross) saving calculation:
  39,000 shiftit × (£6.40 − £0.30) = £237,900/year

Whit actually happent, per the council's contact-centre data:
  Phone volume fell frae 60,000/year tae 46,000/year (−23%, no −65%)
  acause: 9,000 digital journeys failed an generatit a follow-up call
           (failure-demand leakage), an 4,000 fowk wha afore
           didnae renew ava nou dae, haein fund it easy online
           (shadow demand — a genuine access improvement, but no a
           saving)

  Phone contact centre is staffit in bands o 8,000 calls/FTE;
  a 14,000-call drap (60,000 → 46,000) releases 1.75 FTE, roondit
  doun in practice tae 1 FTE actually redeployit = £34,000/year

Realizit saving = £34,000/year plus the digital-channel big/run
  cost avoidit on 39,000 transactions ≈ £34,000 + (39,000 × £0.30
  digital cost awready coontit) — a fraction o the £237,900 headline,
  though the service is still unambiguously better for uisers.
```

## Link tae saftware ingineerin

The engineerin lesson is that channel shift savings are realizit by *operational* decisions (rosterin, decommissionin, contract renegotiation), no by the software shippin — a team can hit ilka [digital-service-standard](../digital-service-standard/) pynt an still deliver zero net saving if naebody retires the auld channel's fixed capacity. Instrumentin failure demand (whaur in the digital journey uisers abandon an whit they dae next) is a solvable funnel-analytics problem an the single highest-leverage thing an engineerin team can dae tae protect the savings case; it is an aw the straucht link tae [cost-per-transaction](../cost-per-transaction/), that failure demand quietly inflates. See [benefits-realization](../benefits-realization/) for the braider discipline o checkin a business case's savings actually land, an [digital-inclusion](../digital-inclusion/) for why the offline channel usually cannae, an shuidnae, be fully retirt.

## Pitfaws

- **Assumin 1:1 channel substitution**: modellin digital take-up as a direct subtraction frae phone/coonter volume, ignorin shadow demand an failure-demand leakage documentit in local government channel-shift research.
- **Bookin gross savings afore decommissionin**: coontin the saving in the business case the year take-up rises, no the year (if iver) the auld channel's capacity is actually cut.
- **Ignorin the step-function nature o staffin costs**: a 20% volume drap seldom converts tae a 20% cost drap, acause contact centres an coonters are staffit in discrete bands, no continuously.
- **Treatin shadow demand as waste**: new contact frae previously-excludit or previously-deterrt uisers is a real increase in [public value](../public-value/), no a modellin mistak — it shuid be reportit as an access ootcome, no nettit aff as noise.

## Sources

- Cabinet Office, Digital Efficiency Report (2012). <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- Local Government Association, digital transformation and channel shift resources. <https://www.local.gov.uk/our-support/efficiency-and-income-generation/digital-transformation>
- Socitm, local public services digital insight research. <https://www.socitm.net/>
