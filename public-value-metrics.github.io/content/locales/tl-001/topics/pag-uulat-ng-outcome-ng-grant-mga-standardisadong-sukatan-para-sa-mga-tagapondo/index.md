# Pag-uulat ng Outcome ng Grant (IRIS+): mga standardisadong sukatan para sa mga tagapondo

Ang pag-uulat ng outcome ng grant ay ang kasanayan kung saan nag-uulat ang mga grantee ng mga standardisado at maihahambing na sukatan ng outcome pabalik sa mga tagapondo — kabaligtaran ng bawat tagapondong gumagawa ng sariling template ng pag-uulat. Ang IRIS+, na pinapanatili ng Global Impact Investing Network (GIIN), ang pinakamalawak na ginagamit na ganoong pamantayan: katalogo ng mga paunang tinukoy na sukatan ng pagganap na panlipunan, pangkapaligiran, at pinansyal na iniuutos o inirerekomenda ng mga impact investor at, parami nang parami, ng mga foundation na nagbibigay ng grant sa mga grantee.

## Bakit ito mahalaga

Bago ang standardisadong pag-uulat, humihingi ang bawat foundation sa mga grantee ng ibang hanay ng indikador sa ibang format, at ang katamtamang laking charity na may sampung tagapondo ay maaaring nagpapatakbo ng sampung magkakaagapay na proseso ng pag-uulat para sa magkakapatong na gawain — maayos na naitalang sanhi ng pasanin sa pag-uulat na layong bawasan ng standardisasyon ng outcome ng grant. Tinutugunan ito ng IRIS+ sa pamamagitan ng pagbibigay sa mga tagapondo at grantee ng pinagsasaluhang bokabularyo: mga Core Metrics Set na nakapangkat ayon sa tema (hal. abot-kayang pabahay, access sa malinis na enerhiya, financial inclusion), bawat sukatan ay tinukoy nang sapat na tiyak upang ang "trabahong nalikha" o "sambahayang nasilbihan" ay magkapareho ang kahulugan kahit sino ang mag-ulat, at nakahanay sa UN Sustainable Development Goals upang maiangat ng tagapondo ang datos sa antas ng grantee tungo sa salaysay ng SDG sa antas ng portfolio. Iniuulat ng GIIN na ginagamit ang mga sukatan ng IRIS ng humigit-kumulang kalahati ng mga impact investor at ng malaking mayorya ng mga fund manager, bangko, at development finance institution na aktibo sa larangan.

Pinakamahalaga ang standardisasyon kung saan ito nakikipag-ugnayan sa [outcomes vs outputs](../outcomes-laban-sa-outputs-ang-pagkakaiba-ng-naihatid-at-ng-nagbago/): itinutulak ng IRIS+ ang pag-uulat tungo sa mga tinukoy na sukatan ng outcome at epekto sa halip na anumang naitatala ng kasalukuyang case management system ng grantee, na mismong puwang na inilalarawan ng [gastos kada outcome](../gastos-bawat-outcome-pagsukat-ng-tunay-na-pagbabago/) kumpara sa [gastos kada benepisyaryo](../gastos-bawat-benepisyaryo/).

## Ang matematika

Balangkas at proseso ang pag-uulat ng outcome ng grant, hindi pormula:

```
1. Pumipili ang tagapondo ng Core Metrics Set na angkop sa tema ng grant
   (hal. "Financial Inclusion" o "Sustainable Agriculture" ng IRIS+)
2. Bawat sukatan ay may nakapirming depinisyon, yunit, at paraan ng pagkalkula
   na inilathala ng GIIN — hindi inimbento kada tagapondo
3. Nag-uulat ang grantee laban sa parehong depinisyon ng sukatan sa lahat ng
   tagapondo nito na gumagamit ng pamantayang iyon, na nagbabawas ng paulit-ulit na pag-uulat
4. Pinagsasama-sama ng tagapondo ang mga sukatan sa antas ng grantee tungo sa pag-uulat
   sa antas ng portfolio, maihahambing taon-taon at sa pagitan ng mga grantee
   na gumagamit ng parehong sukatan
```

Kombinatoryal ang pakinabang sa kahusayan: ang pag-standardisa ng N tagapondo × M grantee sa iisang pinagsasaluhang bokabularyo ay ginagawang humigit-kumulang N+M na mapping laban sa isang pamantayan ang N×M na bespoke na ugnayan sa pag-uulat.

## Halimbawang kalkulasyon

**Grantee na may tatlong tagapondo, bago ang standardisasyon**: nag-uulat ng "mga taong nasilbihan" sa Tagapondo 1 gamit ang depinisyon ng headcount, "mga benepisyaryong naabot" sa Tagapondo 2 gamit ang depinisyon ng sambahayan, at "mga indibidwal na naapektuhan" sa Tagapondo 3 gamit ang depinisyon ng service-episode (kaya ang taong dalawang beses dumalaw ay binibilang nang dalawang beses). Tatlong ulat, tatlong numero, walang maihahambing, at walang maihahambing sa numero ng ibang grantee kahit sa loob ng portfolio ng parehong tagapondo.

**Ang parehong grantee sa ilalim ng IRIS+**: nag-uulat laban sa tinukoy na sukatan ng individuals-reached ng IRIS+ kasama ang tinukoy na sukatan ng outcome mula sa angkop na Core Metrics Set, gamit ang inilathalang metodolohiya ng pagkalkula ng GIIN para sa pareho. Tatanggap na ngayon ang tatlong tagapondo ng parehong numero, kinalkula sa parehong paraan, at maihahambing nila ang gastos kada yunit na tinukoy ng IRIS+ ng grantee na ito sa ibang grantee sa kanilang portfolio gamit ang magkaparehong sukatan — katumbas, sa sukat ng imprastraktura ng pag-uulat, ng pagkakaroon ng pinagsasaluhang [database ng unit cost](../unit-cost-databases-mga-handang-financial-proxy-para-sa-mga-kinalabasang-panlipunan/).

## Kaugnayan sa software engineering

Dapat ituring ng mga plataporma ng grant management ang mga identifier ng sukatan ng IRIS+ bilang foreign key, hindi malayang teksto: ang pag-iimbak ng inilathalang code ng sukatan kasama ng iniulat na halaga ng grantee (sa halip na lokal na inimbentong field na tinatawag na "beneficiaries") ang nagpapahintulot sa cross-funder at cross-portfolio na pagsasama-sama sa hinaharap nang hindi nangangailangan ng proyektong paglilinis ng datos. Kung kailangang suportahan ng plataporma ang mga tagapondong hindi pa gumagamit ng IRIS+, ang praktikal na disenyo ay hayaang i-map ang lokal na sukatan sa pinakamalapit na depinisyon ng IRIS+ sa halip na pilitin agad ang bawat tagapondo sa pamantayan — unti-unting gumaganda ang maihahambing habang dumarami ang graph na nakamapa sa mga pinagsasaluhang identifier. Tingnan ang kapatid na paksa na [gastos kada outcome](../gastos-bawat-outcome-pagsukat-ng-tunay-na-pagbabago/) para sa kung ano ang dapat kalkulahin gamit ang mga iniulat na numero kapag nakolekta na.

## Mga karaniwang pagkakamali

- **Pagtrato sa pag-ampon ng IRIS+ bilang awtomatikong maihahambing.** Maaaring parehong mag-ulat ang dalawang grantee laban sa iisang sukatan ng IRIS+ at hindi pa rin maihahambing kung magkaiba ang kalidad ng pinagbabatayang datos o ang palagay sa counterfactual; inaayos ng pamantayan ang mga depinisyon, hindi ang higpit ng pagsukat.
- **Mga sukatang "IRIS-aligned" na inimbento ng tagapondo.** Ang sukatang inspirasyon lamang ng wika ng IRIS+ ngunit hindi ang aktuwal na inilathalang depinisyon ay muling nagpapakilala ng pagkakawatak-watak na layong lutasin ng pamantayan.
- **Pagod sa pag-uulat dahil sa sobrang pagpili.** Ang pag-uutos sa grantee na mag-ulat laban sa buong Core Metrics Set kahit dalawa o tatlong sukatan lamang ang mahalaga sa pasya ay muling lumilikha ng problema ng pasanin sa loob ng standardisadong balot.
- **Walang sukatan ng outcome.** May maraming purong sukatan ng output ang IRIS+ (hal. bilang ng taong nasilbihan); ang pagpili sa mga ito lamang at wala sa mga sukatan sa antas ng outcome ay nagbubunga ng pag-uulat na hugis [gastos kada benepisyaryo](../gastos-bawat-benepisyaryo/) sa ilalim ng tatak na pag-uulat ng outcome.

## Mga sanggunian

- GIIN, IRIS+ system. <https://iris.thegiin.org/>
- GIIN, IRIS+ Catalog of Metrics. <https://iris.thegiin.org/metrics/>
- GIIN, About IRIS+. <https://iris.thegiin.org/about/>
