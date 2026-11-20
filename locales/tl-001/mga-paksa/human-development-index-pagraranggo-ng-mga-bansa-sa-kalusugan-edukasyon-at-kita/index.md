# Human Development Index (HDI): pagraranggo ng mga bansa sa kalusugan, edukasyon at kita

Ang HDI ang pangunahing alternatibo ng UN sa pagraranggo ng mga bansa ayon lamang sa kita: pinagsasama nito ang life expectancy, edukasyon, at kita sa iisang numerong nasa pagitan ng 0 at 1, sa premisang — ipinaglaban ng ekonomistang si Amartya Sen at binuo para sa UN ni Mahbub ul Haq — na ang pag-unlad ay tungkol sa pagpapalawak ng magagawa at maaaring maging tao, hindi lamang ng kinikita nila. Inilalathala ito taon-taon sa Human Development Report ng UN Development Programme mula pa noong 1990.

## Bakit ito mahalaga

Bago ang HDI, halos buong nasusukat ang "pag-unlad" sa GNP per capita, na walang sinasabi kung naaabot ng paglago ang kalusugan o edukasyon ng ordinaryong tao. Muling binalangkas ng capability approach ni Sen ang pag-unlad bilang pagpapalawak ng tunay na mga kalayaan, at ginawa itong nailalathalang index ni ul Haq na maaaring pagrangguhan ng UNDP sa bawat bansa, na pumilit sa mga pamahalaang yumaman sa kita lamang ngunit pinabayaan ang kalusugan o pag-aaral na harapin ang ranggong mas masama kaysa sa iminumungkahi ng kanilang GDP (ang mga estadong langis ng Gulpo at ilang ekonomiyang ekstraktibo ang karaniwang halimbawa). Ang tatlong-bahaging istruktura ng HDI ay direktang metodolohikal na ninuno rin ng [Multidimensional Poverty Index](../multidimensional-poverty-index-pagsukat-ng-kahirapan-bilang-magkakapatong-na-kakulangan/): parehong tumatangging hayaang bilhin ng isang dimensyon ang kakulangan sa iba, gamit ang geometric sa halip na arithmetic na mean. Inilalathala ng UNDP ang buong teknikal na tala at pinagbabatayang datos para sa bawat edisyon (<https://hdr.undp.org/data-center/human-development-index>), na siyang kanonikal na sanggunian para sa sinumang bumubuo sa index sa halip na muling kumukuha nito.

## Ang matematika

```
Life Expectancy Index (LEI)     = (LE − 20) / (85 − 20)

Mean Years Schooling Index      = karaniwang taon ng pag-aaral / 15
Expected Years Schooling Index  = inaasahang taon ng pag-aaral / 18
Education Index (EI)            = (Mean Years Index + Expected Years Index) / 2

Income Index (II)               = (ln(GNI per capita) − ln(100)) / (ln(75000) − ln(100))

HDI = (LEI × EI × II) ^ (1/3)     [geometric mean ng tatlong sub-index]
```

Sadyang geometric mean ang gamit: dahil nagmumultiplika ito sa halip na nag-aaverage, hindi ganap na mababawi ng napakataas na iskor sa isang dimensyon ang napakababang iskor sa iba — disenyong inampon ng UNDP noong 2010 partikular para parusahan ang kawalan ng balanse, na pumalit sa dating pormula ng arithmetic mean.

## Halimbawang kalkulasyon

**Bansang katamtaman ang kita**: life expectancy 72 taon, karaniwang taon ng pag-aaral 8, inaasahang taon ng pag-aaral 13, GNI per capita $12,000.

```
LEI = (72 − 20) / (85 − 20)              = 52 / 65   = 0.800
MYSI = 8 / 15                                        = 0.533
EYSI = 13 / 18                                       = 0.722
EI = (0.533 + 0.722) / 2                             = 0.628
II = (ln(12000) − ln(100)) / (ln(75000) − ln(100))
   = (9.393 − 4.605) / (11.225 − 4.605)
   = 4.788 / 6.620                                   = 0.723

HDI = (0.800 × 0.628 × 0.723) ^ (1/3)
    = (0.363) ^ (1/3)                                ≈ 0.713
```

Ang HDI na 0.713 ay nasa banda ng "high human development" ng UNDP (0.700–0.799); nagsisimula ang "very high" sa 0.800. Pansinin kung gaano kasensitibo ang resulta sa pinakamahinang sub-index: kung 4 sa halip na 8 ang karaniwang taon ng pag-aaral (MYSI = 0.267, EI = 0.494), bumabagsak ang HDI sa (0.800 × 0.494 × 0.723)^(1/3) ≈ 0.639 — bumaba ng buong banda — kahit walang ibang nagbago.

## Kaugnayan sa software engineering

- Direktang magagamit muli ang padron ng geometric mean para sa anumang pinagsamang iskor ng serbisyo o produkto na ayaw mong matakpan ng isang malakas na dimensyon ang isang kritikal na mahinang dimensyon — hal. pagsasama ng mga iskor ng accessibility, performance, at reliability para sa pampublikong serbisyong digital sa pamamagitan ng multiplikasyon sa halip na may timbang na average, upang ang serbisyong mabilis ngunit hindi accessible ay hindi makakuha ng markang "mahusay".
- Ang log-transform ng kita sa HDI (lumiliit na marginal na halaga ng dagdag na pound) ay parehong lohika sa likod ng [distributional weighting](../distributional-weighting-pagtitimbang-ng-benepisyo-ayon-sa-kung-sino-ang-tumatanggap/) sa appraisal: ang karagdagang $1,000 ay higit na mahalaga sa mahirap na sambahayan kaysa sa mayaman, at ang linear na pagtrato sa dalawa ay nagkakamali ng presyo sa epekto.
- Anumang dashboard na nag-uulat ng iisang pinaghalong iskor ng "digital inclusion" o "outcome ng mamamayan" ay dapat idokumento ang pormula ng pagsasama-sama nito nang kasing-tahasan ng teknikal na tala ng UNDP — tingnan ang [KPI ng pampublikong sektor](../mga-kpi-ng-pampublikong-sektor-pagpili-ng-sukatan-na-hindi-madaling-dayain/) at [public value scorecard](../public-value-scorecard-balanced-scorecard-para-sa-mga-organisasyong-may-misyon-sa-halip-na-tubo/).

## Mga karaniwang pagkakamali

- **Pag-aaverage sa halip na paggamit ng geometric mean** — hinahayaan ng arithmetic mean na ganap na matakpan ng mataas na kita ang mahinang kalusugan o edukasyon; ang buong layunin ng pagbabago ng metodolohiya noong 2010 ay itigil ang ganoong pagpapalit.
- **Paghahambing ng HDI taon-taon na parang GDP na inayos para sa implasyon** — pana-panahong ni-rebase ng UNDP ang index (bagong minimum/maximum na hangganan, binagong limitasyon sa pag-aaral), kaya ang pagbabago ng ranggo ay maaaring sumasalamin sa update ng metodolohiya, hindi tunay na paglipat; palaging tingnan kung aling edisyon ng HDR galing ang bilang.
- **Pagtrato sa HDI bilang sukat ng kahirapan** — pambansang average ito at walang sinasabi tungkol sa distribusyon sa loob ng bansa; para doon, gamitin ang [Multidimensional Poverty Index](../multidimensional-poverty-index-pagsukat-ng-kahirapan-bilang-magkakapatong-na-kakulangan/) o ang hiwalay na Inequality-adjusted HDI ng UNDP.

## Mga sanggunian

- UNDP. "Human Development Index (HDI)" technical notes and data.
  <https://hdr.undp.org/data-center/human-development-index>
- UNDP. Human Development Report 1990 (the index's introduction).
- Sen A. "Development as Freedom." Oxford University Press, 1999.
