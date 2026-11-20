# Mga Sukatan ng Kasiyahan ng Mamamayan sa Serbisyong Pampubliko

Sinusukat ng mga sukatan ng kasiyahan ng mamamayan kung paano nire-rate ng mga tao ang kanilang direktang karanasan sa isang serbisyong pampubliko — iba sa tiwala sa mga institusyon sa pangkalahatan, at iba sa kung aktwal bang nakamit ng serbisyo ang magandang kinalabasan (outcome). Maaaring magustuhan ang isang serbisyo ngunit hindi epektibo, o epektibo ngunit hindi gusto; ang agwat sa pagitan ng dalawa ay mismong impormasyong pang-diyagnostiko na dapat bantayan ng isang delivery team.

## Bakit ito mahalaga

Sinusukat ang kasiyahan sa dalawang magkaibang antas na karaniwang pinagsasama-sama. Sa antas ng serbisyo, hinihiling ng ngayo'y wala nang Performance Platform ng UK at ng kasalukuyang GOV.UK service manual ang survey ng kasiyahan sa bawat serbisyo (karaniwang limang-puntong sukat mula "lubos na nasiyahan" hanggang "lubos na hindi nasiyahan", ibinibigay sa mismong punto ng transaksyon) bilang isa sa apat na sapilitang KPI ng serbisyo — tingnan ang [mga pamantayan ng serbisyo at sukatan ng transaksyon](../mga-service-standard-at-transaction-metric-apat-na-pangunahing-sukatan-ng-serbisyong-digital-ng-pamahalaan/). Sa antas ng institusyon, sinusukat ng UK Civil Service People Survey ang engagement at karanasan ng mga empleyado sa bawat departamento ng sentral na pamahalaan taun-taon, at hiwalay na sinusurvey ng programang "Trust in Government" ng OECD ang tiwala ng publiko sa pambansang pamahalaan sa mga kasaping bansa, na sinusubaybayan ang pangmatagalang padron ng pagbaba at pagbawi na malaki ang hubog ng mga krisis (parehong nagbunga ng matalim at nakikitang paggalaw sa mga bilang ng tiwala ng OECD ang krisis pinansiyal ng 2008 at ang pandemya ng COVID-19). Ang dahilan kung bakit kailangang paghiwalayin ng mga engineer na gumagawa ng mga serbisyong humaharap sa mamamayan ang kasiyahan at outcome ay isang kilalang paraan ng pagkabigo sa disenyo ng serbisyo: ang magandang disenyo at madaling gamitin na digital form para sa claim ng benepisyo ay maaaring makakuha ng napakataas na kasiyahan habang ang pinagbabatayang patakaran — mga tuntunin ng pagiging karapat-dapat, backlog sa pagproseso, halaga ng igagawad — ay hindi nagpapabuti sa kalagayan ng claimant. Sinusukat ng kasiyahan ang interface; hindi nito sinusukat ang halagang inihahatid sa likod nito.

## Ang matematika

```
Net na kasiyahan = % nasiyahan (o lubos na nasiyahan) − % hindi nasiyahan (o lubos na hindi nasiyahan)
                    (hindi isinasama sa dalawang termino ang neutral/walang opinyon, ngunit
                    binibilang sa base ng mga tumugon sa pagkuwenta ng bawat porsiyento)

Agwat ng kasiyahan-sa-outcome = marka ng kasiyahan − marka ng pagkamit ng outcome
                    (parehong na-normalize 0–100; ang malaking positibong agwat ay hudyat ng
                    serbisyong "magaan sa pakiramdam" ngunit kulang sa laman ang naihahatid)

Trust index (estilong OECD) = % ng mga tumugon sa survey na sumasagot ng "oo" sa
                    "may tiwala ka ba sa [pambansang pamahalaan]?"
                    sinusubaybayan bilang time series, karaniwang hinahati ayon sa
                    edad, kita, at edukasyon
```

## Halimbawang kalkulasyon

**Serbisyo ng e-billing ng council tax ng lokal na awtoridad**: ang survey ng kasiyahan sa punto ng matagumpay na transaksyon ay nagpapakita ng 2,400 tumugon: 1,650 nasiyahan/lubos na nasiyahan, 250 hindi nasiyahan/lubos na hindi nasiyahan, 500 neutral.

```
Net na kasiyahan = (1,650/2,400 × 100) − (250/2,400 × 100)
                  = 68.75% − 10.42%
                  = +58.3 net na kasiyahan
```

Mukhang malakas ito nang mag-isa. Ngunit ipinapakita lamang ang survey sa mga user na *matagumpay* na nakakumpleto ng transaksyon — kilalang bias sa pagsukat (tingnan ang mga karaniwang pagkakamali sa ibaba). Kapag ipinares sa sukatan ng completion rate mula sa [mga pamantayan ng serbisyo at sukatan ng transaksyon](../mga-service-standard-at-transaction-metric-apat-na-pangunahing-sukatan-ng-serbisyong-digital-ng-pamahalaan/), lumalabas na 71% lamang ang completion, ibig sabihin:

```
Hindi nasusukat ang tunay na kasiyahan ng populasyon para sa 29% na iniwan ang paglalakbay —
posibleng ang pinakadi-nasiyahang pangkat, dahil ang pag-abandona ay mismong malakas na
negatibong hudyat na hindi kailanman nakukuha ng survey.
```

**Halimbawa sa pambansang antas (istruktura ng serye ng tiwala na estilong OECD)**: ang tiwala sa pambansang pamahalaan ay iniulat na 42% sa taon 1, bumaba sa 34% sa taon 2 (taon ng krisis), at bumawi sa 39% sa taon 3 — takbong karaniwan sa padron ng pagbagsak-at-bahagyang-pagbawi na dokumentado ng OECD sa mga kasaping bansa matapos ang malalaking krisis.

## Kaugnayan sa software engineering

Mag-instrument ng mga survey ng kasiyahan sa bawat makabuluhang labasan ng paglalakbay ng user, hindi lamang sa matagumpay na pagkumpleto — ang pinakakaraniwang pagkakamali sa engineering sa larangang ito, at tahimik nitong ginagawang vanity metric na may survivorship bias ang sukatan ng kasiyahan. Kung maaari, ipares ang marka ng kasiyahan sa sukatan ng completion o outcome sa iisang dashboard upang hindi magdiwang ang team sa tumataas na kasiyahan habang tahimik na bumabagsak ang completion (tingnan ang [gastos bawat transaksyon](../gastos-bawat-transaksyon-sa-digital-na-serbisyo-ng-pamahalaan/) at [digital inclusion](../digital-inclusion-serbisyong-digital-para-sa-lahat/) kung sino ang naibubukod sa digital na sampling ng kasiyahan sa unang lugar — sistematikong kulang ang representasyon ng mga di-digital at assisted-digital na user sa mga in-service na survey). Direktang nagpapakain din ang datos ng kasiyahan at tiwala sa binti ng legitimacy ng [strategic triangle ni Moore](../public-value-ang-halagang-nililikha-ng-pamahalaan-para-sa-kolektibong-lipunan/), at nabibilang sa mga perspektibang "customer" at "legitimacy" ng isang [public value scorecard](../public-value-scorecard-balanced-scorecard-para-sa-mga-organisasyong-may-misyon-sa-halip-na-tubo/) — tingnan ang [mga sukatan ng tiwala at legitimacy](../mga-sukatan-ng-tiwala-at-lehitimasyon-sa-mga-institusyong-pampubliko/) para sa katapat sa antas ng institusyon ng sukatang ito sa antas ng serbisyo.

## Mga karaniwang pagkakamali

- **Survivorship bias sa mga survey sa punto ng pagkumpleto**: hindi nakikita ng mga user na umaabandona sa paglalakbay ang survey, kaya maaaring magkasabay ang mataas na in-service na kasiyahan, mababang completion rate, at malaking di-nakikitang populasyon ng mga di-nasiyahang hindi nakakumpleto.
- **Pagturing sa kasiyahan bilang proxy ng outcome**: ang magandang interface para sa mahinang disenyo ng patakaran ay mataas ang marka sa kasiyahan at mababa sa outcome — laging iulat ang pareho, huwag gawing kapalit ng isa ang isa.
- **Maliit at hindi kinatawang sample na iniulat nang may huwad na katumpakan**: ang marka ng kasiyahan mula sa ilang daang self-selected na tumugon na iniulat hanggang isang decimal place ay nagpapahiwatig ng kumpiyansang hindi kayang suportahan ng laki ng sample.
- **Pagbalewala sa demographic disaggregation**: ang pambansang bilang ng tiwala at kasiyahan na hindi hinati ayon sa edad, kita, kapansanan, o digital access ay maaaring magtago ng lubhang magkakaibang karanasan ng mga grupo — padron na tahasang hinahati ng sariling mga paglalabas ng Trust in Government ng OECD.

## Mga sanggunian

- OECD, "Trust in Government." <https://www.oecd.org/en/topics/trust-in-government.html>
- UK Cabinet Office, "Civil Service People Survey" results.
  <https://www.gov.uk/government/collections/civil-service-people-survey-results>
- GOV.UK Service Manual, "Measuring Success." <https://www.gov.uk/service-manual/measuring-success>
