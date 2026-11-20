# Cinneasachd sheirbheisean poblach

Bidh cinneasachd sheirbheisean poblach a’ tomhas cho èifeachdach ’s a bhios caitheamh poblach a’ tionndadh in-chuir (luchd-obrach, calpa, bathar agus
seirbheisean) gu toraidhean air an atharrachadh a rèir càileachd, airson sheirbheisean — slàinte, foghlam, poilearachd, cùram sòisealta — aig nach eil prìs
margaidh agus mar sin gun figear teachd-a-steach air an roinn cosgaisean. Tha an Office for National Statistics san RA air an t-sreath seo fhoillseachadh bho mheadhan
nan 2000an agus is e an oidhirp nàiseanta as leasaichte gu dòigh-obrach a fhreagairt “a bheil an riaghaltas a’ fàs nas fheàrr no nas miosa
air airgead a thionndadh gu seirbheisean poblach?”

## Carson a tha e cudromach

Ann am margadh, is e cinneasachd (luach toraidh) / (cosgais in-chuir), agus tha luach toraidh ri fhaicinn oir tha cuideigin ga phàigheadh. Chan eil prìs reic
aig ionadachadh cruachainn, àite sgoile, agus fastadh poilis, agus mar sin gun chnuasachadh chan urrainn dhut ach *in-chuir* a thomhas (na chaidh a chaitheamh) — a’ brosnachadh
luchd-aithris a bhith a’ làimhseachadh caitheamh poblach a tha a’ dol suas mar rud dona gu fèin-ghluasadach, oir tha barrachd in-chuir le gnìomhachd cheann-naidheachd còmhnard
a’ coimhead coltach ri cinneasachd a’ tuiteam. Tha dòigh-obrach an ONS, a tha air a cur a-mach anns na foillseachaidhean “Sources and Methods” aige airson
cinneasachd sheirbheisean poblach, a’ fuasgladh seo le bhith a’ togail clàr-innse *toraidh* bho mheudan gnìomhachd (obrachaidhean a chaidh a dhèanamh, sgoilearan a chaidh
a theagasg, eucoirean a chaidh a rannsachadh) agus an uairsin *ag atharrachadh a rèir càileachd* a’ chlàir-innse thoraidh sin — airson slàinte, a’ gabhail a-steach ìrean
mairsinn agus amannan feitheimh; airson foghlam, a’ gabhail a-steach coileanadh; airson poilearachd, a’ gabhail a-steach builean leithid fuasgladh chùisean — gus am bi seirbheis a
nì an aon àireamh obrachaidhean ach a choileanas ìrean mairsinn nas fheàrr a’ clàradh mar nas cinneasaiche, chan ann dìreach mar nas daoire. Tha an lorg ceann-naidheachd
a tha a’ tilleadh thairis air foillseachaidhean an ONS searbh don roinn: thuit cinneasachd sheirbheisean poblach na RA gu mòr rè galar-sgaoilte COVID-19 agus, a rèir
foillseachaidhean meadhan nan 2020an aig an ONS fhèin, cha robh i fhathast air tilleadh gu ìrean 2019 ann an grunn fo-roinnean a’ gabhail a-steach cùram slàinte, eadhon
nuair a dh’èirich caitheamh — beàrn a tha ag ath-fhrèamadh “barrachd maoineachaidh” agus “barrachd cinneasachd” mar dhà cheist gu tur air leth.

## A’ mhatamataig

```
Clàr-innse toraidh (meud) = Σ (gnìomhachd_i × cuideam cosgais aonaid choimeasach_i), cuideam bliadhna-bunait
                          thairis air gach gnìomhachd seirbheis (m.e. obrachaidhean cruachainn, obrachaidhean
                          cataract, co-chomhairlean GP), coltach ri clàr-innse meud Laspeyres/Paasche

Atharrachadh càileachd    = clàr-innse toraidh × factar atharrachaidh càileachd
                          (m.e. a’ gabhail a-steach atharrachadh ann an ìrean mairsinn, amannan feitheimh,
                          coileanadh, no ath-chiontachd mar iomadachair air meud amh)

Clàr-innse in-chuir       = Σ (uairean obrach × cuideam cosgais obrach) + (cosgais bathair/sheirbheisean,
                          lùghdaichte le sgaoilean prìsean) + (caitheamh calpa)

Fàs cinneasachd iomlan gach factar = % atharrachadh ann an clàr-innse toraidh air atharrachadh a rèir càileachd
                                    − % atharrachadh ann an clàr-innse in-chuir
```

## Eisimpleir obrach

**Àireamhachadh cinneasachd roinn dian-chùraim an NHS mar shamhla** (an structar a’ leantainn dòigh-obrach an ONS):

```
Bliadhna 1: clàr-innse meud toraidh = 100.0 (bliadhna-bunait), clàr-innse in-chuir = 100.0
            → clàr-innse cinneasachd = 100.0

Bliadhna 2: tha meud gnìomhachd ag èirigh 3.0% (barrachd obrachaidhean, barrachd choinneamhan)
            ach tha an ùine feitheimh cuibheasach a’ fàs nas miosa, a’ cur an sàs
            lasachadh atharrachaidh càileachd de −1.0%
            Clàr-innse toraidh air atharrachadh a rèir càileachd = 100 × 1.030 × 0.990 = 101.97

            Bidh in-chuir ag èirigh: àireamhan luchd-obrach +4.0%, cosgaisean eile (lùghdaichte) +1.5%,
            clàr-innse in-chuir cuideamaichte = 100 × 1.032 = 103.2

Fàs cinneasachd = (101.97 / 100 − 1) − (103.2 / 100 − 1)
                = 1.97% − 3.2% = −1.23 puing sa cheud

Mìneachadh: dh’èirich gnìomhachd, ach dh’èirich in-chuir nas luaithe agus thuit
càileachd beagan, agus mar sin chaidh cinneasachd — toradh gach aonad in-chuir —
sìos eadhon ged a chaidh “barrachd cùraim a lìbhrigeadh.”
```

Is e seo an dearbh phatran a tha foillseachaidhean an ONS air aithris a-rithist airson pàirtean den NHS às dèidh a’ ghalair-sgaoilte: caitheamh
a’ dol suas agus gnìomhachd amh a’ dol suas a’ cho-ghabhail ri cinneasachd tomhaiste a’ tuiteam aon uair ’s gu bheil atharrachadh càileachd agus fàs in-chuir
an dà chuid air am mìneachadh.

## Ceangal ri innleadaireachd bathar-bog

Is e cinneasachd sheirbheisean poblach an co-aontar aig ìre sluaigh de mhì-chòrdaidhean cinneasachd innleadaireachd (puingean sgeulachd air an lìbhrigeadh an aghaidh
[mheatairean DORA](../meatrach-dora-airson-luach-poblach/) an aghaidh
[mheatairean sruthaidh](../meatrach-sruthadh-ann-an-libhrigeadh-an-riaghaltais/)): tha tro-chuir amh gun atharrachadh càileachd cho mì-chreidsinneach ann an ospadal ’s a tha “loidhnichean
còd a chaidh a lìbhrigeadh” aig sgioba bathar-bog. Bu chòir do sgiobaidhean a tha a’ togail phìoban dàta coileanaidh airson roinnean atharrachadh càileachd a làimhseachadh mar
ìre cruth-atharrachaidh prìomh-ìre, le dreach, chan e nòta-bun-duilleig — oir tha creideas an ONS fhèin an urra ris an atharrachadh sin a bhith follaiseach,
ath-riochdachail, agus air ath-sgrùdadh mar a thig dàta càileachd nas fheàrr (bidh an ONS ag ath-sgrùdadh tuairmsean cinneasachd bhliadhnaichean a dh’fhalbh mar a thèid
dàta càileachd bunasach — m.e. ìrean mairsinn — a chrìochnachadh, agus mar sin feumaidh siostam sam bith sìos an t-sruth a chleachdas na staitistigean sin ath-sgrùdaidhean air ais a làimhseachadh,
chan ann dìreach ùine ùr a chur ris). Tha e cuideachd a’ trasnadh gu dìreach le
[cosgais iomlan seilbh](../cosgais-iomlan-seilbh-ann-an-it-riaghaltais/) agus
[cinneasachd AI san roinn phoblach](../cinneasachd-ai-san-roinn-phoblach/): chan e leasachadh cinneasachd a th’ ann an siostam a
mheudaicheas meud gnìomhachd amh gun leasachadh no gun chumail suas càileachd, a rèir mìneachadh an ONS fhèin.

## Cunnartan

- **Fàs in-chuir a làimhseachadh mar fhàs cinneasachd**: bidh barrachd caitheimh a’ maoineachadh barrachd luchd-obrach a’ toirt a-mach barrachd
  *gnìomhachd*, chan e barrachd *cinneasachd*, mura h-èirich toradh gach aonad in-chuir cuideachd — thathar gan measgachadh gu cunbhalach ann an aithris phoilitigeach.
- **Atharrachadh càileachd a leigeil seachad gu tur**: seallaidh clàr-innse toraidh a chaidh a thogail à cunntasan gnìomhachd amh a-mhàin
  “buannachdan cinneasachd” bho bhith a’ dèanamh barrachd de rudeigin nas lugha luach no càileachd; tha atharrachadh càileachd an ONS ann gu sònraichte gus seo a ghlacadh.
- **Clàran-innse cinneasachd a choimeas thairis air fo-roinnean gun mhaidseadh de ghinealach dòigh-obrach**: tha cinneasachd slàinte, foghlaim agus poilearachd gach fear air a thogail à
  stòran dàta gnìomhachd is càileachd eadar-dhealaichte air cearcallan ath-sgrùdaidh eadar-dhealaichte — tha coimeas ghallda thairis air roinnean a’ coimeas
  ionnsramaidean nach eil co-chòrdail.
- **Tuiteam cinneasachd aon bhliadhna a leughadh mar ghluasad maireannach**: tha figearan cinneasachd àm a’ ghalair-sgaoilte agus às a dhèidh air mì-sheasmhachd mhòr bhliadhna-air-bhliadhna a shealltainn
  mar a ghluais dàta càileachd (m.e. liostaichean feitheimh, faighinn seachad air obrachaidhean roghnach) fhèin; bidh an ONS gu cunbhalach a’ toirt rabhadh an aghaidh
  cus mhìneachadh air gluasadan aon bhliadhna.

## Tùsan

- Office for National Statistics, "Public Service Productivity" series.
  <https://www.ons.gov.uk/economy/economicoutputandproductivity/publicservicesproductivity>
- Office for National Statistics, "Public Service Productivity: Total, UK — Sources and Methods."
  <https://www.ons.gov.uk/economy/economicoutputandproductivity/publicservicesproductivity>
