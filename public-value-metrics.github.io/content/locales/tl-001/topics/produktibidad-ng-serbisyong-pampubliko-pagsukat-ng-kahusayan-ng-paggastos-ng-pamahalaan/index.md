# Produktibidad ng serbisyong pampubliko: pagsukat ng kahusayan ng paggastos ng pamahalaan

Sinusukat ng produktibidad ng serbisyong pampubliko kung gaano kahusay na ginagawang output na naka-adjust sa kalidad ng paggastos ng pamahalaan ang mga input (kawani, kapital, kalakal at serbisyo), para sa mga serbisyo — kalusugan, edukasyon, pulisya, social care — na walang presyo sa pamilihan at samakatuwid ay walang numero ng kita na pagbabahaginan ng gastos. Inilalathala ng UK Office for National Statistics ang seryeng ito mula pa noong kalagitnaan ng dekada 2000 at nananatili itong pinakamaunlad na pambansang pagtatangka, sa aspeto ng metodolohiya, na sagutin ang "gumagaling ba o lumalala ang pamahalaan sa pagpapalit ng pera sa mga serbisyong pampubliko?"

## Bakit ito mahalaga

Sa pamilihan, ang produktibidad ay (halaga ng output) / (gastos ng input), at nakikita ang halaga ng output dahil may nagbabayad para rito. Ang pagpapalit ng balakang, isang upuan sa paaralan, at isang patrol ng pulis ay walang presyo ng bentahan, kaya sa simpleng pag-iisip ay *input* (ang ginastos) lamang ang masusukat — na nag-uudyok sa mga komentarista na ituring na awtomatikong masama ang tumataas na paggastos ng pamahalaan, dahil ang mas maraming input na may patag na headline na aktibidad ay mukhang bumabagsak na produktibidad. Nalulutas ito ng metodolohiya ng ONS, na nakasaad sa mga publikasyong "Sources and Methods" nito para sa produktibidad ng serbisyong pampubliko, sa pamamagitan ng pagbuo ng *output* index mula sa dami ng aktibidad (mga operasyong isinagawa, mga estudyanteng tinuruan, mga krimeng iniimbestigahan) at pagkatapos ay *pag-aadjust sa kalidad* ng output index na iyon — sa kalusugan, kasama ang survival rate at oras ng paghihintay; sa edukasyon, kasama ang attainment; sa pulisya, kasama ang mga outcome gaya ng paglutas ng kaso — upang ang serbisyong gumagawa ng parehong bilang ng operasyon ngunit mas mataas ang survival rate ay mairehistro bilang mas produktibo, hindi lamang mas magastos. Ang paulit-ulit na headline na natuklasan sa mga release ng ONS ay nakababahala para sa sektor: bumagsak nang matindi ang produktibidad ng serbisyong pampubliko ng UK noong pandemya ng COVID-19 at, ayon sa sariling mga release ng ONS sa kalagitnaan ng dekada 2020, hindi pa rin nakakabawi sa antas ng 2019 sa ilang sub-sektor kabilang ang pangangalagang pangkalusugan, kahit tumaas ang paggastos — isang puwang na ginagawang dalawang ganap na magkahiwalay na tanong ang "mas maraming pondo" at "mas mataas na produktibidad."

## Ang matematika

```
Output index (dami) = Σ (aktibidad_i × relatibong timbang ng unit cost_i), base-year weighted
                          sa lahat ng aktibidad ng serbisyo (hal. operasyon sa balakang, cataract,
                          konsultasyon sa GP), katulad ng Laspeyres/Paasche na volume index

Pag-aadjust sa kalidad = output index × quality adjustment factor
                          (hal. isinasama ang pagbabago sa survival rate, oras ng paghihintay,
                          attainment, o reoffending bilang multiplier sa hilaw na dami)

Input index           = Σ (oras ng paggawa × timbang ng gastos sa paggawa) + (gastos ng kalakal/serbisyo,
                          deflated) + (capital consumption)

Paglago ng total factor productivity = % pagbabago sa quality-adjusted output index
                                    − % pagbabago sa input index
```

## Halimbawang kalkulasyon

**Ilustratibong kalkulasyon ng produktibidad ng acute sector ng NHS** (ang istruktura ay ayon sa metodolohiya ng ONS):

```
Taon 1: output volume index = 100.0 (base year), input index = 100.0
        → productivity index = 100.0

Taon 2: tumataas ng 3.0% ang dami ng aktibidad (mas maraming operasyon, mas maraming appointment)
        ngunit lumalala ang karaniwang oras ng paghihintay, na naglalapat ng quality-adjustment
        discount na −1.0%
        Quality-adjusted output index = 100 × 1.030 × 0.990 = 101.97

        Tumataas ang mga input: bilang ng kawani +4.0%, iba pang gastos (deflated) +1.5%,
        weighted input index = 100 × 1.032 = 103.2

Paglago ng produktibidad = (101.97 / 100 − 1) − (103.2 / 100 − 1)
                     = 1.97% − 3.2% = −1.23 puntos-porsyento

Interpretasyon: tumaas ang aktibidad, ngunit mas mabilis tumaas ang mga input
at bahagyang bumaba ang kalidad, kaya bumaba ang produktibidad — output bawat
yunit ng input — kahit "mas maraming pangangalaga ang naihatid."
```

Ito ang eksaktong pattern na paulit-ulit na iniulat ng mga release ng ONS para sa ilang bahagi ng NHS pagkatapos ng pandemya: ang tumataas na gastos at tumataas na hilaw na aktibidad ay nagsasabay habang bumabagsak ang nasusukat na produktibidad kapag isinasaalang-alang ang pag-aadjust sa kalidad at paglago ng input.

## Kaugnayan sa software engineering

Ang produktibidad ng serbisyong pampubliko ay katapat sa antas ng populasyon ng mga debate sa produktibidad ng engineering (story points na naipadala laban sa [mga DORA metric](../dora-metrics-para-sa-public-value-bilis-at-kaligtasan-ng-paghahatid-ng-serbisyo-sa-mamamayan/) laban sa [mga flow metric](../flow-metrics-sa-paghahatid-ng-serbisyo-ng-pamahalaan-littles-law-wip-at-cycle-time/)): kasing-nakaliligaw sa ospital ang hilaw na throughput na walang pag-aadjust sa kalidad gaya ng "lines of code na naipadala" sa isang software team. Dapat ituring ng mga team na bumubuo ng performance data pipeline para sa mga departamento ang pag-aadjust sa kalidad bilang first-class, naka-version na yugto ng transformation, hindi talababa — dahil nakasalalay ang kredibilidad ng ONS mismo sa pagiging transparent, nauulit, at binabago nito habang dumarating ang mas mahusay na datos ng kalidad (binabago ng ONS ang mga tantiya ng produktibidad ng nakaraang taon habang natatapos ang pinagbabatayang datos ng kalidad — hal. survival rate — kaya ang anumang downstream na sistemang gumagamit ng mga estadistikang ito ay dapat humawak ng mga backdated na rebisyon, hindi lamang magdagdag ng bagong panahon). Tumatawid din ito nang direkta sa [total cost of ownership](../total-cost-of-ownership-sa-it-ng-pamahalaan-ang-buong-gastos-sa-buong-buhay-ng-sistema/) at [produktibidad ng AI sa pampublikong sektor](../produktibidad-ng-ai-sa-pampublikong-sektor/): ang sistemang nagpapataas ng hilaw na dami ng aktibidad nang hindi pinabubuti o pinapanatili ang kalidad ay hindi, ayon sa sariling depinisyon ng ONS, pagbuti ng produktibidad.

## Mga karaniwang pagkakamali

- **Pagtrato sa paglago ng input bilang paglago ng produktibidad**: ang mas maraming paggastos na nagpopondo ng mas maraming kawani ay nagbubunga ng mas maraming *aktibidad*, hindi mas mataas na *produktibidad*, maliban kung tumataas din ang output bawat yunit ng input — madalas silang pinaghahalo sa pampulitikang komentaryo.
- **Lubusang pagbalewala sa pag-aadjust sa kalidad**: ang output index na binuo mula lamang sa hilaw na bilang ng aktibidad ay magpapakita ng "pagtaas ng produktibidad" mula sa paggawa ng mas marami ng bagay na mas mababa ang halaga o kalidad; umiiral ang pag-aadjust sa kalidad ng ONS partikular upang saluhin ito.
- **Paghahambing ng mga productivity index sa pagitan ng mga sub-sektor nang walang pagtutugma sa bersyon ng metodolohiya**: ang produktibidad ng kalusugan, edukasyon, at pulisya ay bawat isa'y binuo mula sa magkakaibang pinagmumulan ng datos ng aktibidad at kalidad sa magkakaibang siklo ng rebisyon — ang simpleng paghahambing sa pagitan ng mga sektor ay naghahambing ng magkakatugmang-hindi na instrumento.
- **Pagbasa sa pagbagsak ng produktibidad ng iisang taon bilang permanenteng takbo**: nagpakita ng malaking taon-sa-taong pagbabago ang mga numero ng produktibidad noong at pagkatapos ng pandemya habang nagbago rin ang datos ng kalidad (hal. waiting list, elective recovery); tuloy-tuloy na nagbababala ang ONS laban sa labis na pagbibigay-kahulugan sa mga pagbabago ng iisang taon.

## Mga sanggunian

- Office for National Statistics, "Public Service Productivity" series.
  <https://www.ons.gov.uk/economy/economicoutputandproductivity/publicservicesproductivity>
- Office for National Statistics, "Public Service Productivity: Total, UK — Sources and Methods."
  <https://www.ons.gov.uk/economy/economicoutputandproductivity/publicservicesproductivity>
