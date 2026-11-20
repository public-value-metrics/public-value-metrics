# Halaga ng cybersecurity sa pampublikong sektor: pagpepresyo sa pagbabawas ng panganib

Ang halaga ng cybersecurity sa pampublikong sektor ay ang disiplina ng pagpepresyo sa pagbabawas ng panganib: magkano ang halaga ng pagpapababa sa posibilidad ng paglabag sa datos ng mamamayan, gayong ang paggastos sa seguridad ay walang nakikitang output kapag gumagana ito at napakalinaw na output kapag nabigo? Para sa serbisyong may hawak ng mga talaan ng benepisyo, datos pangkalusugan, o talaan ng buwis, ang katangiang "hindi nakikita kapag gumagana" ang mismong dahilan kung bakit kailangan nito ng tahasang argumento ng halaga, hindi lamang tsek sa pagsunod.

## Bakit ito mahalaga

Ang Cyber Assessment Framework (CAF) ng UK National Cyber Security Centre ay nagbibigay sa mga organisasyon ng pampublikong sektor ng estrukturadong paraan upang gawing nasusuri at nakabatay sa outcome na disiplina ang seguridad sa halip na checklist: tinutukoy nito ang apat na mataas na antas na layunin (pamamahala sa panganib sa seguridad, proteksyon laban sa cyber attack, pagtuklas ng mga cyber security event, at pagpapaliit ng epekto ng mga insidente) na hinati sa mga nag-aambag na outcome na maaaring suriin ang may-ari ng sistema, sa parehong diwa ng punto 9 ng [digital-service-standard](../digital-service-standard-ang-pamantayan-ng-serbisyong-digital-ng-pamahalaan/) ("lumikha ng ligtas na serbisyong nagpoprotekta sa privacy ng mga user"). Ang pinoprotektahan ng pagsusuri ng CAF ay may dokumentadong presyo: sinusubaybayan ng Cost of a Data Breach Report ng IBM ang karaniwang gastos ng paglabag ayon sa sektor, at tuloy-tuloy na natuklasang nasa mas mababang dulo ng saklaw ang pampublikong sektor kumpara sa pananalapi o pangangalagang pangkalusugan — inilalagay ng mga kamakailang edisyon ang karaniwan ng pampublikong sektor sa humigit-kumulang $2.6–2.9 milyon bawat paglabag — ngunit ang "mas mababa kaysa sa pananalapi" ay hindi "mababa," at may mga gastos ang mga paglabag sa pamahalaan na hindi lubos na nakukuha ng mga numero ng ulat: ang pagkawala ng tiwala ng mamamayan sa mga digital na channel, na nagpapababa sa [digital take-up](../natipid-sa-channel-shift-paglipat-ng-mga-transaksyon-sa-digital/) na kinasasandigan ng mga business case ng channel-shift, at ang pampulitika at legal na gastos ng paglalantad ng datos na pinilit ng estado na ibigay ng mga mamamayan sa simula pa lamang.

## Ang matematika

Pinahahalagahan ang puhunan sa seguridad gaya ng anumang paggastos sa pagbabawas ng panganib: bilang pagbawas sa inaasahang pagkalugi, gamit ang klasikong pagkakakilanlan sa risk management.

```
Annualized Loss Expectancy (ALE) = Single Loss Expectancy (SLE)
                                  × Annualized Rate of Occurrence (ARO)

Halaga ng isang security control =
  ALE_bago_ang_control − ALE_pagkatapos_ng_control − taunang gastos ng control

Sulit pondohan ang isang control kapag:
  (ALE_bago − ALE_pagkatapos) > taunang gastos ng control

Hindi direktang naglalabas ng probabilidad ang pagsusuri ng CAF, ngunit ang
profile ng outcome ng CAF ng isang serbisyo (kung aling mga nag-aambag na
outcome ang "achieved," "partially achieved," o "not achieved") ay makatwirang
proxy input para tantyahin ang ARO — ang sistemang may hindi pinamamahalaang
privileged access o walang nasubukang plano sa pagtugon sa insidente ay may
mas mataas nang malaki na makatotohanang ARO kaysa sa sistemang may dalawa.
```

## Halimbawang kalkulasyon

**Case-management system ng county council na may hawak ng talaan ng social care ng 40,000 residente**:

```
Single Loss Expectancy (gastos ng paglabag), gamit ang karaniwan ng
pampublikong sektor mula sa kamakailang Cost of a Data Breach Report ng IBM ≈ £2.1m
(na-convert, numerong order-of-magnitude — laging hanguin muli mula sa
kasalukuyang edisyon ng ulat sa halip na muling gamitin ang takdang numero)

Kasalukuyang ARO (hindi pinamamahalaang privileged access, walang nasubukang
pagtugon sa insidente, ayon sa panloob na CAF self-assessment na nagpapakita ng
maraming "not achieved" na outcome) ≈ tinatayang 8% bawat taon
  ALE_bago = £2.1m × 0.08 = £168,000/taon

Iminumungkahing control: privileged access management + nasubukang plano sa
pagtugon sa insidente, na inililipat ang mga kaugnay na outcome ng CAF sa
"achieved," tinatayang magpapababa ng ARO sa 3%/taon
  ALE_pagkatapos = £2.1m × 0.03 = £63,000/taon

Taunang gastos ng control (tooling + proseso + pagsubok) = £45,000

Halaga ng control = (168,000 − 63,000) − 45,000 = £60,000/taon
  net na positibo — pondohan ito. Ipinapakita rin ng aritmetika na sulit pa ring
  pondohan ang control kahit halos triple ang gastos, na uri ng sensitivity check
  na dapat kasama ng anumang ALE na nakabatay sa tinatayang mga probabilidad.
```

## Kaugnayan sa software engineering

Hawak ng mga engineer ang karamihan sa mga pingga ng ekwasyon ng ALE: disenyo ng access control, kalinisan ng dependency at patch, saklaw ng logging at detection, at tooling sa pagtugon sa insidente ay direktang gumagalaw sa terminong ARO, kaya ang pagsusuri ng CAF ay mababasa na parang pagsusuri sa teknikal na arkitektura gaya ng audit ng patakaran. Ito ang [technical-debt-as-public-value-erosion](../technical-debt-bilang-pagkaubos-ng-public-value-sa-it-ng-pamahalaan/) sa pinakamatinding anyo nito — ang mga sistemang walang patch, hindi sinusubaybayan, at mahina ang access control ay utang na ang interes ay tail risk, hindi tuloy-tuloy na pabigat — at dapat itong ireconcile sa [total-cost-of-ownership-in-government-it](../total-cost-of-ownership-sa-it-ng-pamahalaan-ang-buong-gastos-sa-buong-buhay-ng-sistema/) upang hindi ituring na hiwalay sa tunay na gastos sa pagpapatakbo ng sistema ang gastos sa seguridad. Direktang input din ito sa mga pagsusuri ng [value-for-money](../value-for-money-ang-pormal-na-pagsusuri-kung-sulit-ang-paggastos-ng-pamahalaan/) sa ilalim ng Green Book: ang risk-adjusted na gastos ay bahagi ng panig ng "gastos" ng anumang options appraisal, hindi karagdagang idinidikit sa dulo.

## Mga karaniwang pagkakamali

- **Pagtrato sa CAF self-assessment bilang mismong seguridad**: inilalarawan ng natapos na assessment ang isang security posture; hindi nito ito nililikha — nasa mga outcome na nakamit ang halaga, hindi sa dokumento.
- **Paggamit ng pandaigdigang karaniwang gastos ng paglabag bilang lokal na tantiya nang walang pag-aangkop**: mga karaniwan ang mga numero ng IBM mula sa malalaki at iba-ibang sample; bihirang kapareho ng sa pambansang departamento ng pamahalaan ang makatotohanang single loss expectancy ng maliit na lokal na awtoridad.
- **Pagbalewala sa sikolohiya ng tail-risk sa mga desisyon sa puhunan**: ang mababang taunang probabilidad ay nagpapadaling ipagpaliban nang walang hanggan ang paggastos sa seguridad, hanggang sa taong hindi na pala — ang pag-sensitivity-test ng kalkulasyon ng ALE laban sa saklaw ng mga ARO, gaya ng sa halimbawa, ay kumokontra rito.
- **Pagbibilang lamang ng gastos ng paglabag na istilong IBM, hindi ng gastos sa tiwala**: ang paglabag na nagpapababa sa kahandaan ng mamamayang gumamit ng mga digital na channel ay sumisira sa kaso ng [channel-shift-savings](../natipid-sa-channel-shift-paglipat-ng-mga-transaksyon-sa-digital/) sa loob ng maraming taon, gastos na bihirang isama sa mga tantiya ng gastos ng paglabag.

## Mga sanggunian

- National Cyber Security Centre, Cyber Assessment Framework. <https://www.ncsc.gov.uk/collection/caf>
- IBM, Cost of a Data Breach Report. <https://www.ibm.com/reports/data-breach>
- GOV.UK Service Manual, service standard, point 9: create a secure service which protects users' privacy. <https://www.gov.uk/service-manual/service-standard/point-9-create-a-secure-service>
