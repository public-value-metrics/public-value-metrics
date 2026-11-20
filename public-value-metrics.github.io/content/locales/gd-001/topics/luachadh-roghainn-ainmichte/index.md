# Luachadh roghainn ainmichte

Bidh dòighean roghainn ainmichte a’ tuairmse luach bathair neo-mhargaidh le bhith a’ faighneachd gu dìreach do dhaoine dè a bhiodh iad deònach
a phàigheadh air a shon, no deònach gabhail ri mar dhìolaidh airson a leigeil seachad, mar as trice
tro sgrùdadh structaraichte a’ toirt cunntas air suidheachadh beachdail. Is e luachadh co-dhèanta (contingent valuation) an dòigh
as aithnichte san teaghlach.

## Carson a tha e cudromach

Tha Green Book Annex 2 (stiùireadh a bharrachd air luachadh bhuaidhean neo-mhargaidh) a’ cur taic ri dòighean roghainn
ainmichte airson bathar aig nach eil gnothach margaidh a ghabhas faicinn bho am faodar luach a thoirt a-mach idir —
càileachd èadhair, bith-iomadachd, dìon thuiltean, luach bith-beò cruth-tìre air nach tadhail cuideigin
a-chaoidh
(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>).
Tha Defra air a stiùireadh roghainn ainmichte fhèin fhoillseachadh airson measadh àrainneachdail gu sònraichte
oir chan eil margaidh neo-dhìreach idir aig uimhir de luach àrainneachdail (gleidheadh àrainn, càileachd uisge),
eu-coltach ri, can, fuaim, a tha co-dhiù a’ co-cheangal ri prìsean taighean a ghabhas faicinn (faic
[luachadh roghainn nochdte](../luachadh-roghainn-fhoillsichte/)).

Is e an tarraing bhunaiteach aig roghainn ainmichte — gun urrainn dhi luach a chur air rud sam bith gu litireil, a’ gabhail a-steach bathar nach deach
malairt a dhèanamh ann a-riamh — cuideachd an tùs a’ chùis-amharais mu a creideas. Leis nach eil luchd-fhreagairt
dha-rìribh a’ cosg airgead, tha sgrùdaidhean luachaidh cho-dhèanta so-leònte do fhiaradh beachdail
(bidh daoine a’ cur cus air deònachd-pàighidh nuair nach eil fìor chrìoch buidseat ann), buaidhean freumhachaidh
(tha an aon bhathar air a luachadh gu eadar-dhealaichte a rèir dè eile a tha san sgrùdadh), agus fiaradh puing-tòiseachaidh
ann an dealbhaidhean geama tairgse. Chuir pannal NOAA 1993 air luachadh co-dhèanta, a chaidh a ghairm às dèidh cùis-lagha doirteadh ola
Exxon Valdez, a-mach inbhean dealbhaidh — cruth referendum dà-roghainn “am pàigheadh tu £X, tha/chan eil” seach tairgse fhosgailte,
agus cuimhneachain èigneachail air fìor chrìoch buidseat an neach-fhreagairt — a tha fhathast mar an inbhe iùlaidh
airson sgrùdaidhean a ghabhas dìon.

## A’ mhatamataig

```
Luachadh co-dhèanta (cruth referendum):
  Thoir roghainn dà-thaobhach: “am pàigheadh tu £X sa bhliadhna airson builean Y? tha/chan eil”
  Atharraich X air thuaiream thar luchd-fhreagairt.
  Freagair deònachd-pàighidh mar ghnìomh air an ìre fhreagairtean tha/chan eil aig gach X.

WTP cuibheasach = an raon fo lùb an iarrtais a chaidh a thuairmse
Luach iomlan = WTP cuibheasach × sluagh a tha fo bhuaidh

Eadar-dhealachadh deuchainn roghainn (modaladh roghainn dealaichte):
  Cuir roghainnean ath-aithriseach air beulaibh luchd-fhreagairt eadar pasganan de fheartan
  (a’ gabhail a-steach feart cosgais), tuairmsich prìsean fillte airson gach
  feart neo-chosgais bho na h-iomlaidean a nochdas luchd-fhreagairt.
```

Tha an t-eadar-dhealachadh deuchainn roghainn mar as trice nas fheàrr le cleachdadh làithreach na RA seach luachadh co-dhèanta aon-cheiste
oir le bhith ag iarraidh air luchd-fhreagairt iomlaid a dhèanamh eadar grunn fheartan an aghaidh cosgais gu h-ath-aithriseach
tha tuairmsean nas co-chòrdail a-staigh agus nas duilghe a mhealladh a’ nochdadh na aon cheist tha/chan eil.

## Eisimpleir obrach

**Riaghaltas nàiseanta**: bidh Defra a’ coimiseanadh sgrùdadh luachaidh cho-dhèanta gus prògram leasachaidh càileachd uisge aibhne
a luachadh. Lorgaidh sgrùdadh ann an cruth referendum de 2,000 dachaigh gum pàigheadh 62%
£40/bliadhna tro chur-ris beachdail air bile uisge, agus tha an lùb iarrtais tuairmsichte a’ toirt deònachd-pàighidh cuibheasach de £28/bliadhna gach dachaigh.

```
WTP cuibheasach = £28/dachaigh/bliadhna
Dachaighean sa chuairteachadh = 340,000
Luach bliadhnail iomlan = £28 × 340,000 = £9.52m/bliadhna

Thar ùine mheasaidh 20 bliadhna aig ìre lasachaidh 3.5% (factar bliadhnachd ≈ 14.2):
PV(buannachd) ≈ £9.52m × 14.2 ≈ £135m
```

Thèid am figear iomlan seo an uair sin a choimeas ri taobh cosgais [mion-sgrùdadh cosgais is buannachd shòisealta](../mion-sgrùdadh-cosgais-is-buannachd-shòisealta/)
a’ phrògraim. Tha an Green Book ag iarraidh gun tèid an seòrsa fianais roghainn ainmichte seo aithris còmhla ri
an eadar-ama misneachd agus dòigh-obrach an sgrùdaidh, chan e mar thuairmse puing lom, dìreach oir tha an
àireamh bhunaiteach nas leòmaiche na prìs margaidh.

**Carthannas**: bidh urras dìleab a’ sgrùdadh luchd-tadhail agus neo-luchd-tadhail mu dheònachd-pàighidh gus casg a chur air
dùnadh togalach eachdraidheil nach tadhail an dà bhuidheann air a h-uile uair (an luach bith-beò aige). Leis gu bheil
neo-luchd-tadhail nach fhaic an togalach a-chaoidh fhathast ag aithris WTP dearbhach, bidh an sgrùdadh a’ glacadh
luach bith-beò agus dìleib a chaill cunntas sìmplidh air teachd-a-steach tèarmainn luchd-tadhail (leth-bhreac roghainn nochdte)
gu tur — a’ sealltainn buannachd fhìor roghainn ainmichte far nach eil gnothach margaidh de sheòrsa sam bith ann gus luach a nochdadh.

## Ceangal ri innleadaireachd bathar-bog

Is ainneamh a bhios dòighean roghainn ainmichte a’ buntainn gu dìreach ri obair innleadaireachd bathar-bog, ach bidh innleadairean
a bhios a’ togail ùrlaran co-chomhairleachaidh saoranach, innealan com-pàirteachaidh buidseat, no bun-structar sgrùdaidh poblach
gu tric a’ togail an inneal air a bheil an eaconamas an urra. Tha faighinn nan mion-fhiosrachadh dealbhaidh sgrùdaidh ceart — tairgsean air thuaiream,
frèamadh referendum dà-roghainn seach ceistean fosgailte, cuimhneachain soilleir air crìoch buidseat — chan e dìreach snasadh UX, is e a tha a’ dèanamh
an luachaidh a thig às a dhèidh so-dhìonta fo sgrùdadh; faodaidh sgrùdadh ann an aplacaid air a dhealbhadh gu dona mìosan de mhion-sgrùdadh eaconamach
às a dhèidh a mhì-dhligheachadh. Faic [meatrachdan sàsachd saoranach](../meatrachan-riarachaidh-shaoranach/)
airson an smachd nas coitcheann air dàta beachd poblach a tharraing a bhios a’ giùlan cuideam anailis.

## Cunnartan

- **Ceistean fosgailte “dè an t-suim a phàigheadh tu?”.** Tha iad sin tòrr nas buailtiche do fhiaradh ro-innleachdail agus acair
  na frèamadh referendum dà-roghainn; tha moladh pannal NOAA cruth referendum a chleachdadh ann dìreach
  oir tha tarraing fhosgailte a’ coileanadh gu dona.
- **Gun chuimhneachan air fìor chrìoch buidseat an neach-fhreagairt.** Às aonais, bidh WTP ainmichte gu cunbhalach
  a’ dol thairis air na phàigheas na h-aon dhaoine nuair a tha fìor iomlaid buidseat an sàs — fiaradh beachdail.
- **Buaidhean freumhachaidh air an leigeil seachad.** Tha an aon bhathar air a luachadh leis fhèin an aghaidh a luachadh mar phàirt de phasgan nas motha
  a’ toirt tuairmsean WTP eadar-dhealaichte; aithris dè eile, ma tha dad, a bha am frèam an sgrùdaidh.
- **A’ làimhseachadh tuairmse puing aon sgrùdaidh mar rud socraichte.** Tha cleachdadh Green Book a’ sùileachadh raon agus
  deasbad air fiaradh aithnichte, chan e àireamh lom a chaidh a ghiùlan air adhart dhan chlàr cosgais is buannachd
  mar nan robh i na prìs margaidh.

## Tùsan

- HM Treasury. "The Green Book," Annex 2: valuing non-market impacts.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Defra. "Valuing environmental impacts: practical guidelines" (contingent valuation and choice
  experiment guidance). <https://www.gov.uk/government/collections/valuing-environmental-impacts>
- Arrow K, et al. "Report of the NOAA Panel on Contingent Valuation." Federal Register, 1993.
- Mitchell RC, Carson RT. "Using Surveys to Value Public Goods: The Contingent Valuation Method."
  Resources for the Future, 1989.
