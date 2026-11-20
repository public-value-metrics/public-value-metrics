# Luach tèarainteachd cibear san roinn phoblach

Is e luach tèarainteachd cibear san roinn phoblach an smachd air prìs a chur air lùghdachadh cunnairt: dè as fhiach e gum bi briseadh air dàta
shaoranach nas lugha dualtach, a’ faicinn nach toir caitheamh tèarainteachd toradh faicsinneach sam bith nuair a dh’obraicheas e agus toradh gu math
faicsinneach nuair a dh’fhailligeas e? Airson seirbheis a tha a’ cumail chlàran sochairean, dàta slàinte, no clàran cìse, is e am feart “do-fhaicsinneach nuair
a tha e ag obair” an adhbhar fhèin gu bheil feum aice air argamaid luach shoilleir, chan e dìreach cromag gèilleadh.

## Carson a tha e cudromach

Tha Cyber Assessment Framework (CAF) aig National Cyber Security Centre na RA a’ toirt dòigh structarail do bhuidhnean na roinne poblaich
tèarainteachd a dhèanamh na smachd a ghabhas measadh stèidhichte air builean seach liosta-sgrùdaidh: tha e a’ mìneachadh ceithir
amasan àrd-ìre (a’ stiùireadh cunnart tèarainteachd, a’ dìon an aghaidh ionnsaigh cibear, a’ lorg tachartasan tèarainteachd cibear, agus
a’ lùghdachadh buaidh thachartasan) air am briseadh sìos gu builean cur-ri a ghabhas measadh an aghaidh sealbhadair siostaim, san aon
spiorad ri puing 9 ann an [Àbhaisteach na seirbheis didseatach](../inbhe-nan-seirbheisean-didseatach/) (“cruthaich seirbheis thèarainte a dhìonas
prìobhaideachd luchd-cleachdaidh”). Tha prìs sgrìobhte air na tha measadh CAF a’ dìon an aghaidh: bidh Cost of a Data Breach Report
aig IBM a’ leantainn cosgais bhriseadh cuibheasach a rèir roinn, agus tha e air a lorg gu cunbhalach gu bheil an roinn phoblach
aig ceann ìosal an raoin an coimeas ri ionmhas no cùram slàinte — chuir deasachaidhean o chionn ghoirid cuibheasachd na roinne poblaich
timcheall air $2.6–2.9 millean gach briseadh — ach chan eil “nas lugha na ionmhas” a’ ciallachadh “ìosal”, agus bidh cosgaisean aig
briseadh riaghaltais nach glac figearan na h-aithisg gu h-iomlan: call earbsa shaoranach ann an seanalan didseatach, a bhios a’ lùghdachadh
[gabhail-a-steach didseatach](../sàbhaladh-gluasad-seanail/) air a bheil cùisean gnìomhachais gluasad seanail an urra, agus cosgais
phoilitigeach is laghail nochdadh dàta a dh’èignich an stàit air saoranaich a thoirt seachad an toiseach.

## A’ mhatamataig

Thathar a’ luachadh tasgadh tèarainteachd mar a thathar a’ luachadh caitheamh sam bith a lùghdaicheas cunnart: mar lùghdachadh call ris a bheil dùil,
a’ cleachdadh co-aithne clasaigeach riaghladh cunnairt.

```
Dùil call bliadhnail (ALE) = Dùil call singilte (SLE)
                            × Ìre tachairt bliadhnail (ARO)

Luach smachd tèarainteachd =
  ALE_ro_an_smachd − ALE_às_dèidh_an_smachd − cosgais bhliadhnail an smachd

Tha smachd airidh air maoineachadh nuair a tha:
  (ALE_ro − ALE_às_dèidh) > cosgais bhliadhnail an smachd

Chan eil measadh CAF a’ toirt a-mach coltachd gu dìreach, ach tha
pròifil builean CAF seirbheis (dè na builean cur-ri a tha “air an coileanadh”,
“air an coileanadh ann am pàirt”, no “gun a bhith air an coileanadh”) na
chuir-a-steach seach-ionadail reusanta airson ARO a thuairmseachadh — tha ARO
fìor gu math nas àirde aig siostam le ruigsinneachd shochairichte gun stiùireadh
no gun phlana freagairt tachartais deuchainnichte na fear aig a bheil an dà chuid.
```

## Eisimpleir obrach

**Siostam stiùireadh chùisean comhairle siorrachd le clàran cùraim shòisealta airson 40,000 neach-còmhnaidh**:

```
Dùil call singilte (cosgais briseadh), a’ cleachdadh cuibheasachd roinn-poblaich
bho Cost of a Data Breach Report IBM o chionn ghoirid ≈ £2.1m
(air a thionndadh, figear òrdugh-meud — ath-thoir a-mach an-còmhnaidh
bhon deasachadh làithreach seach figear stèidhichte ath-chleachdadh)

ARO làithreach (ruigsinneachd shochairichte gun stiùireadh, gun fhreagairt
tachartais deuchainnichte, a rèir fèin-mheasadh CAF a-staigh a’ sealltainn grunn
bhuilean “gun a bhith air an coileanadh”) ≈ 8% sa bhliadhna a rèir tuairmse
  ALE_ro = £2.1m × 0.08 = £168,000/bliadhna

Smachd a tha air a mholadh: stiùireadh ruigsinneachd shochairichte + plana
freagairt tachartais deuchainnichte, a’ gluasad nam builean CAF buntainneach gu “air an coileanadh”,
air a thuairmseachadh gu ARO a ghearradh gu 3%/bliadhna
  ALE_às_dèidh = £2.1m × 0.03 = £63,000/bliadhna

Cosgais bhliadhnail an smachd (innealan + pròiseas + deuchainn) = £45,000

Luach an smachd = (168,000 − 63,000) − 45,000 = £60,000/bliadhna
  lom dearbhach — maoinich e. Tha an àireamhachd cuideachd a’ sealltainn gum biodh
  an smachd airidh air maoineachadh fhathast aig cosgais faisg air trì-fhillte, agus
  is e sin an seòrsa sgrùdaidh mothachaidh a bu chòir a dhol còmhla ri figear
  ALE sam bith a chaidh a thogail air coltachdan a chaidh a thuairmseachadh.
```

## Ceangal ri innleadaireachd bathar-bog

Tha a’ mhòr-chuid de na luamhain ann an co-aontar ALE aig innleadairean: dealbhadh smachd ruigsinneachd, slàinteachas eisimeileachd is paisean, còmhdach
logaidh is lorg, agus innealan freagairt tachartais uile a’ gluasad an teirm ARO gu dìreach, agus is e sin an adhbhar gu bheil measadh CAF a’ leughadh
mar ath-bhreithneachadh ailtireachd theicnigeach cho mòr ri sgrùdadh poileasaidh. Is e seo
[fiachan teicnigeach mar bhriseadh luach poblach](../fiachan-teicnigeach-mar-bhleith-air-luach-poblach/) na chruth as dian — is e siostaman gun paisean, gun
sgrùdadh, le droch smachd ruigsinneachd fiachan aig a bheil pàigheadh rèidh na chunnart earbaill, chan e slaodadh seasmhach — agus bu chòir a cho-rèiteachadh
ri [cosgais iomlan seilbh ann an IT riaghaltais](../cosgais-iomlan-seilbh-ann-an-it-riaghaltais/) gus nach tèid caitheamh tèarainteachd a làimhseachadh
air leth bho fhìor chosgais ruith an t-siostaim. Tha e cuideachd na chuir-a-steach dìreach do mheasaidhean
[luach airson airgead](../luach-air-airgead/) fon Green Book: tha cosgais le cunnart air atharrachadh na phàirt de thaobh “cosgais” measadh roghainnean sam bith,
chan e smaoineachadh às dèidh làimhe a chaidh a chur ris aig an deireadh.

## Cunnartan

- **Fèin-mheasadh CAF a làimhseachadh mar thèarainteachd fhèin**: tha measadh crìochnaichte a’ toirt cunntas air staid tèarainteachd; chan eil e ga cruthachadh — tha an luach anns na builean a chaidh a choileanadh, chan e san sgrìobhainn.
- **Cosgaisean bhriseadh cuibheasach cruinneil a chleachdadh mar thuairmse ionadail gun atharrachadh**: tha figearan IBM nan cuibheasachdan thairis air sampaill mhòra, eadar-dhealaichte; is ainneamh a tha dùil call singilte reusanta ùghdarras ionadail beag co-ionann ris an fhear aig roinn riaghaltais nàiseanta.
- **Seicolas cunnart earbaill a leigeil seachad ann an co-dhùnaidhean tasgaidh**: tha coltachd bhliadhnail ìosal a’ fàgail caitheamh tèarainteachd furasta a dhàileadh gun chrìch, gu ruige a’ bhliadhna nach eil — tha deuchainn mothachaidh air àireamhachadh ALE thairis air raon de ARO, mar san eisimpleir obrach, a’ cur na aghaidh seo.
- **Cosgais bhriseadh stoidhle IBM a-mhàin a chunntadh, chan e cosgais earbsa**: bidh briseadh a lùghdaicheas deònas shaoranach seanalan didseatach a chleachdadh ag ithe air falbh a’ chùis airson [sàbhaladh gluasad seanail](../sàbhaladh-gluasad-seanail/) airson bhliadhnaichean às dèidh sin, cosgais a tha gann air a gabhail a-steach ann an tuairmsean cosgais bhriseadh.

## Tùsan

- National Cyber Security Centre, Cyber Assessment Framework. <https://www.ncsc.gov.uk/collection/caf>
- IBM, Cost of a Data Breach Report. <https://www.ibm.com/reports/data-breach>
- GOV.UK Service Manual, service standard, point 9: create a secure service which protects users' privacy. <https://www.gov.uk/service-manual/service-standard/point-9-create-a-secure-service>
