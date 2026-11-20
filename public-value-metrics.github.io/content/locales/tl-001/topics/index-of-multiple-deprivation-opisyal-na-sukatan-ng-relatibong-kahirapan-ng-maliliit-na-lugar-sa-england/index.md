# Index of Multiple Deprivation (IMD): opisyal na sukatan ng relatibong kahirapan ng maliliit na lugar sa England

Ang IMD ang opisyal na sukatan ng relatibong deprivation (kakulangan) ng maliliit na lugar sa England, na nagraranggo sa bawat isa sa 32,844 Lower-layer Super Output Area (LSOA, bawat isa ay may humigit-kumulang 1,500 residente) ng bansa mula 1 (pinakadeprived) hanggang 32,844 (pinakamaliit ang deprivation). Inilalathala ito ng ngayon ay Ministry of Housing, Communities and Local Government (MHCLG, dating MHCLG/DCLG), pinakahuli bilang English Indices of Deprivation 2019, at direktang nagtatakda ito ng pondo ng sentral na pamahalaan, prayoridad sa pampublikong kalusugan, at pagiging karapat-dapat sa dose-dosenang lokal na iskema.

## Bakit ito mahalaga

Hindi iisang bagay ang deprivation — ang isang kapitbahayan ay maaaring mahirap sa kita ngunit ligtas, o sapat ang kita ngunit may mahinang kalusugan at masamang pabahay. Ang mga naunang index ng IMD (na nagmula pa sa mga indikador ng deprivation ng Department of the Environment noong 1970s) ay umunlad sa kasalukuyang modelong may pitong domain mismo dahil madalas na nalalampasan ng pag-target sa iisang indikador (halimbawa, rate ng kawalan ng trabaho lamang) ang mga lugar na deprived sa ibang paraan. Pinagsasama ng IMD 2019 ang kita, trabaho, edukasyon, kalusugan, krimen, hadlang sa pabahay at serbisyo, at kapaligirang tinitirhan sa iisang pinagsamang ranggo kada LSOA, bawat domain ay binuo mula sa sarili nitong hanay ng mga indikador at tinimbang ayon sa metodolohiya ng MHCLG. Dahil gumagana ito sa antas ng maliit na lugar (LSOA) sa halip na lokal na awtoridad, inilalantad nito ang mga bulsa ng deprivation na nakatago sa loob ng mga distritong maunlad sa kabuuan — kaya ang IMD, hindi ang karaniwang kita ng lokal na awtoridad, ang aktuwal na pinagbabatayan ng NHS England, ng pupil premium ng Department for Education, at ng dose-dosenang pormula sa pagpopondo ng lokal na awtoridad. Dapat ituring ng software na nagtatakda ng eligibility, nagpaprayoridad ng outreach, o nag-uulat ng epekto ayon sa lugar sa England ang decile o ranggo ng IMD bilang first-class na input, hindi pahabol — at kung sadyang tina-target ng programa ang mga pinakadeprived na lugar, dapat ilapat ng appraisal nito ang [distributional weighting](../distributional-weighting-pagtitimbang-ng-benepisyo-ayon-sa-kung-sino-ang-tumatanggap/) na naaayon sa pag-target na iyon, sa halip na pareho ang halaga ng isang pound ng benepisyo saanman ito mapunta.

## Ang matematika

```
7 domain, may timbang:
  Kita                                     22.5%
  Trabaho                                  22.5%
  Edukasyon, Kasanayan at Pagsasanay       13.5%
  Deprivation sa Kalusugan at Kapansanan   13.5%
  Krimen                                    9.3%
  Hadlang sa Pabahay at Serbisyo            9.3%
  Kapaligirang Tinitirhan                   9.3%

Bawat iskor ng domain: ang mga indikador ay istandardisado (nirarango, saka
ibinabago patungo sa normal na distribusyon) at pinagsasama sa pamamagitan ng
exponential transformation upang ang mataas na deprivation sa alinmang indikador
ay hindi ganap na mapawi ng mababang deprivation sa iba sa loob ng domain na iyon.

Composite score ng IMD (LSOA) = Σ (iskor ng domain × timbang ng domain)
Iranggo ang mga LSOA ayon sa composite score → 1 (pinakadeprived) hanggang 32,844 (pinakamaliit ang deprivation)
Mga decile: ranggo ÷ 3,284 (humigit-kumulang), decile 1 = pinakadeprived na 10% ng mga LSOA
```

## Halimbawang kalkulasyon

**Composite score ng LSOA**, gamit ang mga ilustratibong istandardisadong iskor ng domain (0 = walang senyales ng deprivation, mas mataas = mas deprived):

```
Kita                 0.35 × 0.225 = 0.07875
Trabaho              0.30 × 0.225 = 0.06750
Edukasyon            0.20 × 0.135 = 0.02700
Kalusugan            0.15 × 0.135 = 0.02025
Krimen               0.10 × 0.093 = 0.00930
Hadlang sa Pabahay   0.05 × 0.093 = 0.00465
Kapaligirang Tinitirhan 0.08 × 0.093 = 0.00744

Composite score = 0.07875 + 0.06750 + 0.02700 + 0.02025
                + 0.00930 + 0.00465 + 0.00744  = 0.21489
```

Iniraranggo ang composite score na iyon laban sa mga iskor ng lahat ng 32,844 LSOA. Kung mailalagay nito ang LSOA sa ranggong 2,950, nasa decile 1 ito (2,950 ÷ 3,284 ≈ 0.9, ibig sabihin ay nasa pinakadeprived na 10% ng mga kapitbahayan sa England) — na para sa maraming pormula ng pagpopondo ay ang threshold na nagbubukas ng eligibility, anuman ang karaniwang iskor ng nakapalibot na lokal na awtoridad.

## Kaugnayan sa software engineering

- Anumang serbisyong nagge-geocode sa mga user sa postcode o LSOA ay maaaring mag-join sa inilathalang IMD lookup table (libre at may bersyong CSV mula sa MHCLG) upang idagdag ang decile ng deprivation bilang covariate — para sa pag-target ng outreach, pagpaprayoridad ng caseload, o pag-uulat ng outcome ayon sa banda ng deprivation nang hindi nangongolekta ng bagong personal na datos.
- Karaniwang equity check ang decile ng IMD para sa mga pampublikong serbisyong digital: ang cross-tabulation ng uptake, pagkalas, o kasiyahan ng serbisyo ayon sa decile ng IMD ay naglalantad ng mga puwang sa access na itinatago ng pinagsamang sukatan — tingnan ang [digital inclusion](../digital-inclusion-serbisyong-digital-para-sa-lahat/) at [mga sukatan ng kasiyahan ng mamamayan](../mga-sukatan-ng-kasiyahan-ng-mamamayan-sa-serbisyong-pampubliko/).
- Dahil relatibo ang ranggo ng IMD (laging bumubuo ito ng nakapirming hanay ng mga ranggo sa buong England), hindi nito maipapakita kung tumataas o bumababa ang deprivation sa buong bansa sa paglipas ng panahon — kung aling mga lugar lamang ang may anong ranggo kaugnay ng isa't isa sa edisyong iyon; huwag bumuo ng mga dashboard ng absolutong trend batay sa hilaw na ranggo ng IMD lamang.

## Mga karaniwang pagkakamali

- **Paghahambing ng mga ranggo ng IMD sa pagitan ng mga edisyon (2015 laban sa 2019) bilang trend sa paglipas ng panahon** — nagbabago ang mga pinagbabatayang indikador, heograpiya, at metodolohiya sa pagitan ng mga edisyon; tahasang pinapayuhan ng MHCLG na huwag gamitin ang mga pagbabago sa ranggo bilang ebidensyang naging mas o mas hindi deprived ang isang lugar.
- **Paglalapat ng IMD sa antas ng LSOA sa mga indibidwal** — ang LSOA sa decile 1 ay may mga sambahayang hindi deprived pa rin, at ang LSOA sa decile 10 ay may mga deprived pa rin; naglalarawan ang IMD ng mga lugar, hindi mga tao, at ang paggamit nito bilang proxy ng eligibility ng indibidwal ay nagkakamali sa dalawang direksyon.
- **Pagwawalang-bahala sa detalye sa antas ng domain pabor sa composite na ranggo** — ang dalawang LSOA na magkapareho ang composite score ay maaaring may ganap na magkaibang profile ng domain (isa ay deprived sa kalusugan, isa sa krimen); ang iskemang nagta-target ng isang problema ay dapat gumamit ng kaugnay na iskor ng domain, hindi ng pinaghalong composite.

## Mga sanggunian

- Ministry of Housing, Communities and Local Government. "English Indices of Deprivation 2019."
  <https://www.gov.uk/government/statistics/english-indices-of-deprivation-2019>
- MHCLG. "The English Indices of Deprivation 2019: Technical Report."
