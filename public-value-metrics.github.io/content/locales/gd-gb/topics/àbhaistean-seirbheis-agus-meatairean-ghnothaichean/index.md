# Àbhaistean seirbheis agus meatairean ghnothaichean

Is e Àbhaisteach Seirbheis GOV.UK liosta-sgrùdaidh 14-puing riaghaltas na RA airson seirbheis didseatach phoblach a thogail agus a ruith, agus thig e paidhrichte le seata
beag, èigneachail de mheatairean ghnothaichean cainneachdail — cosgais gach gnothach, ìre crìochnachaidh, gabhail-a-steach didseatach, agus sàsachd luchd-cleachdaidh — a dh’fheumas
sgiobaidhean am foillseachadh airson gach seirbheis bheò aig riaghaltas meadhanach. Còmhla, is e an t-àbhaisteach agus na meatairean an fheumachd obrachaidh làitheil de na
frèaman luach poblach is KPI nas fharsainge san stòr-dàta seo, ag amas gu dìreach air sgiobaidhean lìbhrigidh bathar-bog.

## Carson a tha e cudromach

Tha an t-Àbhaisteach Seirbheis, a tha air a chumail suas ann an leabhar-làimhe seirbheis GOV.UK, ag iarraidh air gach measadh àm-sònraichte (alpha, beta, beò) de sheirbheis
didseatach riaghaltais a nochdadh — am measg nan 14 puing aige — gu bheil an sgioba a’ tuigsinn feumalachdan luchd-cleachdaidh, ag obair ann an sgioba iomadh-chuspaireach, ag ath-aithris
agus ag adhartachadh gu tric, agus *a’ measadh innealan, shiostaman, agus dhòighean obrach*. Bha seo roimhe an cois Ùrlar Coileanaidh poblach far an do dh’fhoillsich gach seirbheis bheò
a dàta ghnothaichean gu fosgailte; tha an t-ùrlar sin air a leigeil dheth, ach mairidh an dleastanas bunasach na ceithir prìomh mheatairean seo a thomhas agus fhoillseachadh tro
stiùireadh “measuring success” an leabhair-làimhe. Is e an adhbhar a tha seo eadar-dhealaichte bho dheas-bhòrd KPI bathar-bog coitcheann gun deach na meatairean sin a dhealbhadh gu follaiseach mar
aon mhodail eaconamach ceangailte, chan ann ceithir sgòran neo-eisimeileach: bidh a’ chùis sàbhalaidh gu lèir airson riaghaltas didseatach — lorg an Digital Efficiency Report aig an Government Digital Service
gnothaichean didseatach timcheall air 20 uair nas saoire na air fòn agus timcheall air 50 uair nas saoire na aghaidh-ri-aghaidh airson seirbheisean riaghaltais ionadail
coimeasach — a’ nochdadh a-mhàin ma dh’fhuiricheas ìre crìochnachaidh àrd agus ma dh’èireas gabhail-a-steach didseatach gu dearbh, seach dìreach seanail shaor a chur ri taobh fear daor
nach eil air atharrachadh.

## A’ mhatamataig

```
Cosgais gach gnothach = iomlan cosgais ruith na seirbheis / àireamh ghnothaichean crìochnaichte
Ìre crìochnachaidh     = gnothaichean crìochnaichte / gnothaichean air tòiseachadh × 100
Gabhail-a-steach didseatach = gnothaichean seanail dhidseatach / gnothaichean gach seanail × 100
Sàsachd luchd-cleachdaidh  = % sàsaichte + glè shàsaichte, ann an sgrùdadh 5-puing sa t-seirbheis

Sàbhaladh gluasad seanail = meud ghnothaichean × gluasad gabhail-a-steach × (cosgais gach gnothach air
                          an t-seann sheanail − cosgais gach gnothach gu didseatach)

Cosgais iarrtais fàilligidh = (1 − ìre crìochnachaidh) × gnothaichean a chaidh oidhirpeachadh gu didseatach ×
                          cosgais na seanail tuiteam air ais a chleachdas na luchd-cleachdaidh sin an àite sin
```

## Eisimpleir obrach

**Seirbheis ath-nuadhachadh cead riaghaltas meadhanach mar shamhla**, 2 mhillean gnothach/bliadhna,
an-dràsta 65% fòn (£3.00/gnothach) agus 35% didseatach (£0.30/gnothach), ìre crìochnachaidh 80%.
Bidh ath-dhealbhadh an aghaidh Àbhaisteach Seirbheis 14-puing ag àrdachadh gabhail-a-steach didseatach gu 60% agus crìochnachadh gu 92%:

```
Sàbhaladh gluasad gabhail-a-steach = 2,000,000 × 0.25 × (3.00 − 0.30) = £1,350,000/bliadhna

Cosgais iarrtais fàilligidh, roimhe:
  2,000,000 × 0.35 × (1 − 0.80) × £3.00 = £420,000/bliadhna (bidh luchd-trèigsinn a’ tuiteam air ais gu fòn)

Cosgais iarrtais fàilligidh, às dèidh:
  2,000,000 × 0.60 × (1 − 0.92) × £3.00 = £288,000/bliadhna

Sàbhaladh lom iarrtais fàilligidh = £420,000 − £288,000 = £132,000/bliadhna

Iomlan sàbhaladh bliadhnail ≈ £1,350,000 + £132,000 = £1,482,000/bliadhna
```

Tha an àireamhachd a’ dèanamh soilleir carson nach e meatair sàr-chudromach a th’ ann an ìre crìochnachaidh: às aonais an leasachaidh bho 80% gu 92%, bhiodh sàbhaladh gluasad
a’ ghabhail-a-steach air a thoirt air ais ann am pàirt le iarrtas fàilligidh a’ stiùireadh luchd-cleachdaidh didseatach sàraichte dìreach air ais chun t-seanail fòn dhaoir.

## Ceangal ri innleadaireachd bathar-bog

Tha na ceithir meatairean sin nan eisimpleir obrach de dheas-bhòrd cosgais-builean: aon mheatair cosgais air a chumail air leth bho thrì tomhasan builean/càileachd, gun a bhith air an claoidh gu aon
sgòr a-chaoidh a dh’aona ghnothach — an aon smachd a tha air a thagradh ann an [KPIan na roinne poblaich](../kpian-na-roinne-poblaich/). Do innleadairean, bidh seo a’ briseadh sìos gu obair
shònraichte, a ghabhas seilbh: tha ìre crìochnachaidh na duilgheadas ionnsramaidean-sileadh, agus tha gach àite trèigsinn san turas, ann am prionnsapal, comasach a lorg agus a chàradh; feumaidh cosgais gach gnothach
fìor chunntasachd chosgaisean aonaid a’ gabhail a-steach cosgaisean taic luchd-obrach agus seanail pàipeir, chan e dìreach caitheamh òstadh cloud (faic [cosgais gach gnothach](../cosgais-gach-gnothach/) agus
[cosgais iomlan seilbh ann an IT riaghaltais](../cosgais-iomlan-seilbh-ann-an-it-riaghaltais/)); agus tha gabhail-a-steach didseatach na mheatair cothromachd ann an aodach èifeachdais — tha na saoranaich nach urrainn
no nach cuir iad seanail ag atharrachadh gu neo-chothromach nas sine, ciorramach, no air an dùnadh a-mach gu didseatach, agus mar sin bidh dùnadh seanail ionnsaigheach a’ tionndadh “sàbhaladh” gu cron ruigsinneachd (faic
[in-ghabhail didseatach](../in-ghabhail-didseatach/) agus [sàbhaladh gluasad seanail](../sàbhaladh-gluasad-seanail/)).
Is e an t-àbhaisteach 14-puing fhèin sònrachadh a’ phròiseis air cùl nan àireamhan sin — faic
[àbhaisteach na seirbheis didseatach](../inbhe-nan-seirbheisean-didseatach/) airson an àbhaisteach gu h-iomlan, agus
[meatairean sàsachd shaoranach](../meatrachan-riarachaidh-shaoranach/) airson mar a tha am figear sàsachd an seo a’ buntainn ri tomhas earbsa nas fharsainge.

## Cunnartan

- **Gabhail-a-steach air a choileanadh le bhith a’ dùnadh na seanail eile**: bidh dùnadh loidhne fòn ag àrdachadh ceudad gabhail-a-steach didseatach gu h-àireamhachd fhad ’s a tha e a’ dumpadh
  iarrtas fàilligidh air ge bith dè an seanail a tha air fhàgail (gu tric slighe taic didseatach no aghaidh-ri-aghaidh nas daoire); tomhais an-còmhnaidh cosgais an t-siostaim iomlan,
  chan e an co-mheas a-mhàin.
- **Ìre crìochnachaidh a thomhas bho cheum a dhà den t-sileadh**: bidh a’ chunntais “air tòiseachadh” a thòiseachadh às dèidh a’ chiad àite trèigsinn fhìor a’ sèideadh na h-ìre
  crìochnachaidh agus a’ falach a’ chall as motha a ghabhas càradh.
- **Cosgais gach gnothach às aonais taic didseatach cuideachaidh**: tha cosgais aonaid didseatach a-mhàin a’ leigeil seachad ùine luchd-obrach a chaidh a chaitheamh a’ cuideachadh
  luchd-cleachdaidh nach urrainn fèin-fhrithealadh a’ cur às-luach air fìor chosgais na seanail.
- **Meatairean fhoillseachadh gun mhìneachadh co-roinnte thairis air seirbheisean**: tha “gnothach” agus “crìochnaichte” a’ ciallachadh diofar rudan thairis air diofar
  sgiobaidhean seirbheis mura h-eil na mìneachaidhean air an àbhaisteachadh agus air an toirt dreach, a’ fàgail coimeas thairis air seirbheisean neo-earbsach.

## Tùsan

- GOV.UK Service Manual, "The Service Standard." <https://www.gov.uk/service-manual/service-standard>
- GOV.UK Service Manual, "Measuring Success — Data You Must Publish."
  <https://www.gov.uk/service-manual/measuring-success/data-you-must-publish>
- GOV.UK, "Digital Efficiency Report."
  <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
