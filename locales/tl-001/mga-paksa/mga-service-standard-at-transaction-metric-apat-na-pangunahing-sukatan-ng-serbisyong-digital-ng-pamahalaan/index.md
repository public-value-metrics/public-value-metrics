# Mga service standard at transaction metric: apat na pangunahing sukatan ng serbisyong digital ng pamahalaan

Ang GOV.UK Service Standard ang 14-puntong checklist ng pamahalaan ng UK para sa pagbuo at pagpapatakbo ng pampublikong serbisyong digital, at may kapares itong maliit at sapilitang hanay ng mga kantitatibong transaction metric — cost per transaction, completion rate, digital take-up, at kasiyahan ng user — na dapat ilathala ng mga team para sa bawat live na serbisyo ng sentral na pamahalaan. Magkasama, ang standard at ang mga metric ay ang pang-araw-araw na espesyalisasyon sa operasyon ng mas malawak na mga balangkas ng public value at KPI sa repositoryong ito, na nakatuon mismo sa mga software delivery team.

## Bakit ito mahalaga

Ang Service Standard, na pinapanatili sa service manual ng GOV.UK, ay nangangailangan na ang bawat point-in-time na assessment (alpha, beta, live) ng digital service ng pamahalaan ay magpakita — kabilang sa 14 na punto nito — na nauunawaan ng team ang mga pangangailangan ng user, gumagana sa multidisciplinary na team, madalas na nag-iterate at nagpapabuti, at *sinusuri ang mga tool, sistema, at paraan ng pagtatrabaho*. Noon, kasabay nito ang pampublikong Performance Platform kung saan inilalathala nang hayagan ng bawat live na serbisyo ang datos ng transaksyon nito; naretiro na ang platform na iyon, ngunit nananatili ang pangunahing obligasyong sukatin at ilathala ang apat na pangunahing metric na ito sa pamamagitan ng gabay na "measuring success" ng service manual. Ang dahilan kung bakit naiiba ito sa pangkalahatang dashboard ng software KPI ay sadyang idinisenyo ang mga metric na ito bilang iisang magkakaugnay na modelong pang-ekonomiya, hindi apat na hiwa-hiwalay na marka: ang buong kaso ng pagtitipid ng digital na pamahalaan — natuklasan ng Digital Efficiency Report ng Government Digital Service na humigit-kumulang 20 beses na mas mura ang mga digital na transaksyon kaysa sa telepono at mga 50 beses na mas mura kaysa sa harapang paraan para sa maihahambing na serbisyo ng lokal na pamahalaan — ay magkakatotoo lamang kung mananatiling mataas ang completion rate at tunay na tumaas ang digital take-up, sa halip na magdagdag lamang ng murang channel sa tabi ng hindi nagbagong magastos na channel.

## Ang matematika

```
Cost per transaction = kabuuang gastos sa pagpapatakbo ng serbisyo / bilang ng natapos na transaksyon
Completion rate      = natapos na transaksyon / sinimulang transaksyon × 100
Digital take-up      = transaksyon sa digital channel / transaksyon sa lahat ng channel × 100
Kasiyahan ng user    = % nasiyahan + lubhang nasiyahan, sa in-service na 5-puntong survey

Channel-shift saving = dami ng transaksyon × paglipat ng take-up × (cost per transaction sa
                        lumang channel − cost per transaction sa digital)

Failure-demand cost = (1 − completion rate) × mga transaksyong sinubukan nang digital ×
                        gastos ng fallback channel na ginagamit na lamang ng mga user na iyon
```

## Halimbawang kalkulasyon

**Ilustratibong serbisyo ng renewal ng lisensya ng sentral na pamahalaan**, 2 milyong transaksyon/taon, kasalukuyang 65% telepono (£3.00/transaksyon) at 35% digital (£0.30/transaksyon), completion rate 80%. Ang pagdidisenyo muli ayon sa 14-puntong Service Standard ay nagtataas ng digital take-up sa 60% at ng completion sa 92%:

```
Tipid sa paglipat ng take-up = 2,000,000 × 0.25 × (3.00 − 0.30) = £1,350,000/taon

Failure-demand cost, bago:
  2,000,000 × 0.35 × (1 − 0.80) × £3.00 = £420,000/taon (bumabalik sa telepono ang mga huminto)

Failure-demand cost, pagkatapos:
  2,000,000 × 0.60 × (1 − 0.92) × £3.00 = £288,000/taon

Net na tipid sa failure-demand = £420,000 − £288,000 = £132,000/taon

Kabuuang taunang tipid ≈ £1,350,000 + £132,000 = £1,482,000/taon
```

Ipinapakita ng aritmetika kung bakit hindi pangalawahing metric ang completion rate: kung wala ang pagbuti mula 80% tungong 92%, bahagyang babawiin ng failure demand ang tipid sa paglipat ng take-up, na ibabalik ang mga nabigong digital user sa mamahaling channel ng telepono.

## Kaugnayan sa software engineering

Gumaganang halimbawa ng cost-consequence dashboard ang apat na metric na ito: isang metric ng gastos na pinaghihiwalay mula sa tatlong metric ng outcome/kalidad, na sadyang hindi kailanman isinasama sa iisang marka — ang parehong disiplinang isinusulong sa [mga KPI ng pampublikong sektor](../mga-kpi-ng-pampublikong-sektor-pagpili-ng-sukatan-na-hindi-madaling-dayain/). Para sa mga engineer, nahahati ito sa konkreto at maaaring angkinin na gawain: ang completion rate ay problema ng funnel-instrumentation, at ang bawat punto ng abandonment sa journey ay, sa prinsipyo, matutukoy at maaayos; ang cost per transaction ay nangangailangan ng tunay na unit-cost accounting na kasama ang mga gastos sa tulong ng kawani at paper channel, hindi lamang gastos sa cloud hosting (tingnan ang [cost per transaction](../gastos-bawat-transaksyon-sa-digital-na-serbisyo-ng-pamahalaan/) at [total cost of ownership sa IT ng pamahalaan](../total-cost-of-ownership-sa-it-ng-pamahalaan-ang-buong-gastos-sa-buong-buhay-ng-sistema/)); at ang digital take-up ay equity metric na nakasuot ng kasuotang efficiency — ang mga mamamayang hindi kaya o ayaw lumipat ng channel ay hindi proporsyonal na matatanda, may kapansanan, o digitally excluded, kaya ang agresibong pagsasara ng channel ay ginagawang pinsala sa access ang "tipid" (tingnan ang [digital inclusion](../digital-inclusion-serbisyong-digital-para-sa-lahat/) at [channel shift savings](../natipid-sa-channel-shift-paglipat-ng-mga-transaksyon-sa-digital/)). Ang 14-puntong standard mismo ang specification ng proseso sa likod ng mga numerong ito — tingnan ang [digital service standard](../digital-service-standard-ang-pamantayan-ng-serbisyong-digital-ng-pamahalaan/) para sa buong standard, at ang [citizen satisfaction metrics](../mga-sukatan-ng-kasiyahan-ng-mamamayan-sa-serbisyong-pampubliko/) para sa kaugnayan ng numero ng kasiyahan dito sa mas malawak na pagsukat ng tiwala.

## Mga karaniwang pagkakamali

- **Take-up na nakuha sa pagsasara ng alternatibong channel**: ang pagsasara ng linya ng telepono ay nagpapataas ng porsyento ng digital take-up sa aritmetika habang itinatambak ang failure demand sa anumang channel na natitira (madalas mas mahal na assisted-digital o harapang ruta); laging sukatin ang kabuuang gastos ng sistema, hindi ang ratio lamang.
- **Pagsukat ng completion rate mula sa ikalawang hakbang ng funnel**: ang pagsisimula ng bilang ng "sinimulan" pagkatapos ng unang tunay na drop-off point ay nagpapaganda sa completion rate at nagtatago sa pinakamalaking maaayos na pagkawala.
- **Cost per transaction na hindi kasama ang assisted-digital na suporta**: ang digital-only na unit cost na hindi pinapansin ang oras ng kawaning ginugugol sa pagtulong sa mga user na hindi makapag-self-serve ay nagmamaliit sa tunay na gastos ng channel.
- **Paglalathala ng mga metric nang walang pinagsasaluhang depinisyon sa mga serbisyo**: nagkakaiba ang kahulugan ng "transaksyon" at "natapos" sa iba't ibang service team maliban kung istandardisado at naka-version ang mga depinisyon, na ginagawang di-maaasahan ang paghahambing sa pagitan ng mga serbisyo.

## Mga sanggunian

- GOV.UK Service Manual, "The Service Standard." <https://www.gov.uk/service-manual/service-standard>
- GOV.UK Service Manual, "Measuring Success — Data You Must Publish."
  <https://www.gov.uk/service-manual/measuring-success/data-you-must-publish>
- GOV.UK, "Digital Efficiency Report."
  <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
