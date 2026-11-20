# Gastos Bawat Transaksyon sa Digital na Serbisyo ng Pamahalaan

Ang gastos bawat transaksyon ang pangunahing sukatan ng unit economics para sa digital na serbisyo ng pamahalaan: kabuuang gastos sa paghahatid ng isang channel, hinati sa bilang ng mga transaksyong nakumpleto sa pamamagitan nito. Ito ang pangunahing bilang sa dating GOV.UK Performance Platform, at ito ang bilang na nagpondo sa isang dekada ng pamumuhunang "digital by default" — kaya nga ito rin ang sukatang pinakamadaling manipulahin.

## Bakit ito mahalaga

Inilatag ng Digital Efficiency Report ng Cabinet Office noong 2012 ang paghahambing ng gastos sa channel sa paraang tumatak: natuklasang humigit-kumulang 20 beses na mas mura ang digital na transaksyon kaysa sa telepono at humigit-kumulang 50 beses na mas mura kaysa sa face-to-face, na may ilustratibong bilang sa lokal na pamahalaan na humigit-kumulang £0.15 bawat web na transaksyon laban sa £2.83 sa telepono at £8.62 sa face-to-face. Ang iisang paghahambing na iyon ang naging katwiran sa muling pagdidisenyo ng 25 exemplar na serbisyong pinangalanan sa Government Digital Strategy, at ng bawat business case ng departamento mula noon na bumanggit ng natipid sa channel shift. Tunay na kapaki-pakinabang ang bilang bilang hudyat ng order-of-magnitude, ngunit nakadepende nang buo ang ratio sa kung ano ang binibilang sa bawat panig: kasama sa patas na gastos ng phone channel ang kawani ng call centre, kontrata sa telephony, pagsasanay, at estate; kasama sa patas na gastos sa digital ang hosting, patuloy na sahod ng product team, oras ng support desk para sa mga pumalyang paglalakbay, at ang assisted-digital na channel na hinihingi ng punto 5 ng [digital-service-standard](../digital-service-standard-ang-pamantayan-ng-serbisyong-digital-ng-pamahalaan/). Kung sapat na maalis ang mga ito sa panig ng digital, magmumukhang mura ang anumang serbisyo.

## Ang matematika

```
Gastos bawat transaksyon = kabuuang inilaang gastos ng channel / mga nakumpletong transaksyon

Dapat isama sa kabuuang inilaang gastos ng channel:
  + hosting at imprastraktura
  + gastos ng product/engineering/support team (amortized)
  + gastos sa content at service design (amortized)
  + gastos sa suporta ng assisted-digital / accessibility
  + gastos ng failure demand (mga user na pumalya sa digital at bumalik sa telepono)
  − ang isang-beses na gastos sa pagbuo ay inaamortize sa inaasahang buhay ng serbisyo,
    hindi isinasama nang buo sa unang taon

Ang karaniwang panlilinlang sa accounting:
  Ang "marginal na gastos bawat transaksyon" (hosting lamang, kapag naitayo na) ay binabanggit
  na parang "average na gastos bawat transaksyon" (kabuuang gastos kasama ang team
  na patuloy na bumubuo at nagpapatakbo nito). Maaaring magkaiba ang dalawa
  nang 10x o higit pa sa serbisyong may malaki at aktibong delivery team.
```

## Halimbawang kalkulasyon

**Serbisyo ng pag-renew ng vehicle tax**: 4 milyong transaksyon/taon.

```
Marginal-lamang na bilang (ang panlilinlang):
  Hosting + payment processing lamang = £180,000/taon
  Gastos bawat transaksyon = 180,000 / 4,000,000 = £0.045
  → headline na bilang na binanggit sa business case

Fully-loaded na bilang (ang tapat):
  Hosting + payment                    £180,000
  Product/engineering team (8 FTE)     £720,000
  Support desk (pumalya/tinanong na transaksyon)   £310,000
  Assisted-digital na linya ng telepono  £140,000
  Kabuuan                              £1,350,000
  Gastos bawat transaksyon = 1,350,000 / 4,000,000 = £0.3375

Ang fully-loaded na bilang ay humigit-kumulang 8x pa ring mas mura kaysa sa £2.83
na comparator ng phone channel mula sa Digital Efficiency Report — tunay at
maipagtatanggol na tipid — ngunit 7.5x na mas mataas kaysa sa marginal-lamang na bilang
na binanggit sa shortcut na bersyon. Parehong "totoo" ang dalawang bilang; isa lamang
ang maihahambing sa gastos ng phone channel na pinaghahambingan nito.
```

## Kaugnayan sa software engineering

Dito nagiging bilang sa pananalapi ang mga desisyon sa arkitektura: ang serbisyong malinis na nag-a-auto-scale at kaunting manu-manong interbensyon ang kailangan ay pinapababa ang bilang na ito sa paglipas ng panahon; ang serbisyong nagbubunga ng mataas na dami ng support ticket mula sa nakalilitong estado ng error ay pinapataas ito anuman ang kahusayan ng hosting. Likas itong kasamang sukatan ng punto 10 ng [digital-service-standard](../digital-service-standard-ang-pamantayan-ng-serbisyong-digital-ng-pamahalaan/) ("tukuyin kung ano ang hitsura ng tagumpay, at ilathala ang datos ng performance") at ng [service-standards-and-transaction-metrics](../mga-service-standard-at-transaction-metric-apat-na-pangunahing-sukatan-ng-serbisyong-digital-ng-pamahalaan/), na naglalatag ng mas buong hanay ng KPI na kinabibilangan ng bilang na ito. Direktang nagpapakain din ito sa mga kalkulasyon ng [channel-shift-savings](../natipid-sa-channel-shift-paglipat-ng-mga-transaksyon-sa-digital/) at dapat itugma sa [total-cost-of-ownership-in-government-it](../total-cost-of-ownership-sa-it-ng-pamahalaan-ang-buong-gastos-sa-buong-buhay-ng-sistema/) upang hindi tahimik na malaglag ang overhead ng platform at shared-service.

## Mga karaniwang pagkakamali

- **Marginal na gastos na nakadamit-average**: pagbanggit ng hosting-only na gastos kapag naitayo na ang serbisyo, na iniiwan ang patuloy na team na nagmementena, nag-iiterate, at sumusuporta rito — tingnan ang halimbawang kalkulasyon sa itaas.
- **Pag-iwan sa gastos ng assisted-digital**: hindi "digital by default" compliant ang isang channel, at hindi nakukuha ang tunay nitong gastos, kung ang phone/papel na fallback na hinihingi ng [digital-inclusion](../digital-inclusion-serbisyong-digital-para-sa-lahat/) ay hiwalay na pinepresyuhan o binabalewala.
- **Pagbalewala sa failure demand**: ang mga transaksyong nagsimula sa digital at pumalya, na nagdudulot ng tawag o papel na form pa rin, ay gastos ng digital na channel, hindi ng channel na sumalo sa pagkabigo.
- **Paghahambing ng mga transaksyong magkaiba ang pagiging masalimuot sa iba't ibang channel**: hindi katimbang ang paghawak ng telepono sa mahihirap na kaso (maraming dependent, pagwawasto ng error, mahihinang aplikante); ang paghahambing ng average na gastos sa telepono sa average na gastos sa digital ay nagpapalaki ng ratio maliban kung tugma ang halo ng transaksyon.

## Mga sanggunian

- Cabinet Office, Digital Efficiency Report (2012). <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- GOV.UK Service Manual, service standard, point 10: define what success looks like. <https://www.gov.uk/service-manual/service-standard/point-10-define-success-publish-performance-data>
- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
