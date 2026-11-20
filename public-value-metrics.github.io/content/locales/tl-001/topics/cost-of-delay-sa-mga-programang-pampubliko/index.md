# Cost of Delay sa mga Programang Pampubliko (CoD)

Ang Cost of Delay ay ang public value na nawawala bawat yunit ng oras na *hindi pa* naihahatid ang isang programa, serbisyo, o pagbabago sa sistema. Ito ang pangunahing tulay na sukatan ng pangkat na ito ng mga paksa: ginagawa nitong pounds bawat linggo, o WELLBY bawat linggo, ang "naantala ng anim na buwan ang go-live", upang maipagtalo ang pagkaantala sa parehong pera ng mismong business case.

## Bakit ito mahalaga

Halos hindi nagbabago ang patakaran ni Reinertsen — "kung isang bagay lamang ang iku-quantify mo, i-quantify ang Cost of Delay" — kapag inilipat sa pamahalaan, dahil lubhang bulnerable dito ang mga programang pampubliko: inaaprubahan ang mga business case laban sa inaasahang daloy ng benepisyo, ngunit nagsisimula lamang ang daloy sa go-live, at bawat linggo ng pagkaantala ay linggo ng nawalang halagang walang nagpepresyo sa risk register. Ang paulit-ulit na masusing pagsusuri ng National Audit Office sa rollout ng Universal Credit (tingnan ang mga ulat na "Rolling Out Universal Credit", <https://www.nao.org.uk/>) ang naglalarawan ng padron: sinubaybayan at iniulat ang pagkaantala sa iskedyul, ngunit bihirang nabanggit bilang headline na bilang ang gastos na pounds bawat linggo ng *hindi pa* paghahatid ng binagong sistema sa susunod na tranche ng mga claimant, kahit ito ang bilang na dapat sana ay nagtulak sa prioritization at escalation. Kung walang CoD, ang naantalang programa ay mukhang problema sa iskedyul para sa delivery board; kung mayroon, ito ay problema ng pagkaubos ng halaga para sa accounting officer.

## Ang matematika

```
CoD = benepisyo bawat yunit ng oras na nawawala habang hindi pa naihahatid   (£/linggo o WELLBY/linggo)

Kabuuang pagkawala dahil sa pagkaantala = CoD × tagal ng pagkaantala

Mga daloy ng benepisyong isusuma para sa mga programang pampubliko:
  cash-releasing na tipid  (pagbawas sa panloloko/error, naiwasang pansamantalang gastos)
+ non-cash na napalayang kapasidad  (oras ng caseworker/opisyal × loaded na gastos)
+ benepisyo sa wellbeing   (WELLBY × £13,000/WELLBY, supplementary guidance ng HMT Green Book
                             sa wellbeing, presyo ng 2019)
```

Para sa mga serbisyong humaharap sa mamamayan, itakda ang halaga sa wellbeing gayundin sa pera — tingnan ang [wellbeing-adjusted life years](../wellbeing-adjusted-life-years-isang-puntos-ng-kasiyahan-sa-buhay-sa-loob-ng-isang-taon/) para sa pinagbabatayang yunit, at ang [opportunity cost sa paggastos ng pamahalaan](../opportunity-cost-sa-paggastos-ng-pamahalaan-ang-halaga-ng-pinakamahusay-na-alternatibong-isinuko/) para sa maaari sanang napondohan ng naantalang pound.

## Halimbawang kalkulasyon

**Lokal na awtoridad**: ang pag-upgrade ng sistema ng housing-benefit ay nagbabawas ng error sa sobrang bayad nang £150/claim/taon sa 20,000 live na claim.

```
Taunang benepisyo = 150 × 20,000 = £3,000,000/taon
CoD = 3,000,000 / 52 ≈ £57,700/linggo
Ang 12-buwang pagkaantala ng implementasyon ay nagkakahalaga ng 52 × 57,700 ≈ £3,000,000 sa naiwasang error.
```

**Ahensya ng sentral na pamahalaan**: ang serbisyo ng assessment ng disability benefit, na naihatid nang anim na buwan (26 linggo) na mas huli sa plano, ay nangangahulugang 200,000 claimant/taon ang naghihintay nang average na tatlong linggong mas matagal para sa desisyon. Bawat dagdag na linggo ng pinansiyal na kawalang-katiyakan ay minomodelo bilang epektong −0.0018 WELLBY (puntos ng life-satisfaction):

```
Pagkawala ng WELLBY bawat claimant = 3 × 0.0018 = 0.0054
Taunang pagkawala ng WELLBY = 200,000 × 0.0054 = 1,080 WELLBY/taon
CoD_wellbeing = 1,080 / 52 ≈ 20.8 WELLBY/linggo
CoD_money = 20.8 × £13,000 ≈ £270,000/linggo ng halaga sa wellbeing
```

Samakatuwid, ang 26-linggong pagkaantala ay "nagkakahalaga" ng humigit-kumulang 540 WELLBY — mga £7 milyon sa valuation ng wellbeing ng Green Book — na nagbabago sa hindi natupad na petsa ng go-live bilang usapin ng kapakanan ng mamamayan, hindi talababa ng project management.

## Kaugnayan sa software engineering

Ang CoD ang nagpapabasa sa pananalapi ng [DORA metrics](../dora-metrics-para-sa-public-value-bilis-at-kaligtasan-ng-paghahatid-ng-serbisyo-sa-mamamayan/) at [flow metrics](../flow-metrics-sa-paghahatid-ng-serbisyo-ng-pamahalaan-littles-law-wip-at-cycle-time/): ang lead time sa pipeline × CoD ay pera (o wellbeing) na nasusunog sa mga pila bago pa makarating sa mamamayan. Sa konkreto:

- **Prioritization**: i-rank ang backlog ayon sa CoD ÷ tagal sa halip na ayon sa senyoridad ng stakeholder — katumbas sa software engineering ng kahilingan ng Green Book na i-appraise ang mga opsyon ayon sa halaga, hindi ayon sa kung sino ang humihiling.
- **Procurement**: may CoD ang 12–18 buwang siklo ng framework procurement; binabago ng pagpepresyo nito ang katwiran ng pagmamadali para sa mga pinabilis na ruta, at direktang nagpapakain ito sa mga desisyong [build vs buy](../build-vs-buy-sa-pamahalaan-gagawin-o-bibilhin/) kung saan tagapagpasya ang time-to-value.
- **Benefits case**: bawat bilang ng CoD na binanggit sa pag-apruba ay dapat lumitaw muli sa [benefits realization](../benefits-realization-pagpapatunay-na-natupad-ang-ipinangakong-benepisyo/) — kung totoo ang gastos ng pagkaantala, dapat masusukat pagkatapos ng go-live ang pinabilis na benepisyo.

## Mga karaniwang pagkakamali

- **Pag-aakalang linear ang CoD**: may ilang serbisyong pampubliko na ang halaga ay hugis-deadline (petsa ng statutory compliance — tumatalon ang CoD sa antas ng panganib ng enforcement pagkatapos ng petsa, halos zero bago nito) sa halip na makinis na lingguhang rate. Uriin ang profile ng pagmamadali bago mag-multiply.
- **CoD sa mga output na walang nangangailangan**: may gastos lamang ang pagkaantala kung may halaga ang hindi pa naihahatid; ang sistemang walang gagamit ay zero ang CoD gaano man ito kahuli.
- **Dobleng pagbibilang ng pagkaantala at discounting**: ang [social discount rate](../social-discount-rate-kung-paano-pinahahalagahan-ang-hinaharap-sa-kasalukuyang-pagpapasya/) ay nagpepresyo na ng oras sa mga multi-year na appraisal horizon; ang CoD ang bersyong operasyonal sa loob ng horizon, para sa mga linggo at buwan. Gamitin ang CoD para sa pagkaantala sa iskedyul, ang paglipat ng NPV para sa muling pag-phase sa maraming taon.

## Mga sanggunian

- Reinertsen DG, *The Principles of Product Development Flow*, Celeritas Publishing, 2009.
- HM Treasury, Green Book supplementary guidance: wellbeing. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>
- National Audit Office, reports on Universal Credit rollout. <https://www.nao.org.uk/>
