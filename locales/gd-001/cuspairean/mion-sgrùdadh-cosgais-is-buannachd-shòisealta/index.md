# Mion-sgrùdadh cosgais is buannachd shòisealta

Bidh mion-sgrùdadh cosgais is buannachd shòisealta (SCBA) ag atharrachadh gach cosgais is buannachd de phoileasaidh no de phrògram — margaidh agus neo-mhargaidh — gu aon
aonad airgid cumanta, a’ lasachadh sruthan san àm ri teachd gu luach làithreach, agus gan toirt far a chèile gus aon àireamh a thoirt a-mach: a bheil am moladh seo a’ fàgail
a’ chomainn nas fheàrr dheth, agus dè an ìre?

## Carson a tha e cudromach

Is e SCBA an dòigh cheudachail bhunaiteach ann an cùis eaconamach
[measadh Green Book](../measadh-a-green-book/): tha stiùireadh HM Treasury ag iarraidh air molaidhean
luach làithreach sòisealta lom (NPSV) dearbhach a shealltainn nuair a ghabhas buannachdan airgead a chur orra gu creidsinneach,
a’ cleachdadh deònachd-pàighidh mar phrionnsapal luachaidh bunaiteach airson bathar neo-mhargaidh
(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>,
Chapter 5). Is e an smachd a bhios e a’ sparradh nach e an aon obair a th’ ann an mion-sgrùdadh cosgais is buannachd “sòisealta” ri measadh tasgaidh san roinn phrìobhaidich: feumaidh e
cosgaisean is buannachdan a ghabhail a-steach a thuiteas air treas pàrtaidhean nach eil nam pàirt dhen ghnìomhachas (buaidhean taobh a-muigh), feumaidh e
an [ìre lasachaidh shòisealta](../ìre-lasachaidh-shòisealta/) a chleachdadh seach cosgais calpa malairteach, agus bu chòir dha
[cuideam sgaoilidh](../cuideam-sgaoilidh/) a chur an sàs far a bheil not a’ ciallachadh barrachd do
dhachaigh nas bochda na do dhachaigh nas beairtiche.

Far a bheil SCBA a’ briseadh sìos tha e dìreach far a bheil a luchd-càineadh ga ro-innse: bathar gun choimeas margaidh — adhar glan, co-cheangal
sòisealta, luach beatha a shàbhail — feumar airgead a chur orra le dòighean
[roghainn ainmichte](../luachadh-roghainn-ainmichte/) no [roghainn nochdte](../luachadh-roghainn-fhoillsichte/),
no feumar [prìs sgàile](../prìsean-sgàile/) a thogail. Nuair a tha an t-airgeadachadh fo chonnspaid seach dìreach doirbh, tha an Green Book fhèin a’ moladh tilleadh gu
[mion-sgrùdadh èifeachdas chosgais](../anailis-èifeachdas-cosgais-san-riaghaltas/) no
[mion-sgrùdadh co-dhùnaidh ioma-shlatan-tomhais](../anailis-co-dhèanamh-cho-dhùnaidhean-le-iomadh-slat-tomhais/) seach àireamh a sparradh
nach creid duine.

## A’ mhatamataig

```
NPSV = Σ [t=0 gu T] (Buannachd_t − Cosgais_t) / (1 + r)^t

far a bheil:
  Buannachd_t = a h-uile buannachd airgeadaichte sa bhliadhna t, a’ gabhail a-steach bathar
                neo-mhargaidh air a luachadh tro roghainn ainmichte/nochdte no prìs sgàile
  Cosgais_t   = a h-uile cosgais airgeadaichte sa bhliadhna t, a’ gabhail a-steach cosgais cothrom
                nan goireasan (faic ../opportunity-cost-in-public-spending/)
  r           = ìre lasachaidh shòisealta (tha HM Treasury a’ suidheachadh 3.5% a’ crìonadh gu
                ìrean nas ìsle seach bliadhna 30, a rèir Green Book Annex A)
  T           = ùine mheasaidh

Co-mheas buannachd-cosgais (BCR) = Σ PV(Buannachdan) / Σ PV(Cosgaisean)
```

Tha BCR os cionn 1 (no NPSV os cionn neoni) a’ comharrachadh luach sòisealta lom. Bidh roinnean luach air airgead aig an Green Book
(mar a thathar gan cleachdadh ann am measadh còmhdhail agus bun-structair) a’ comharrachadh raointean BCR: fo 1.0 tha luach air airgead bochd,
1.0–1.5 ìosal, 1.5–2.0 meadhanach, 2.0–4.0 àrd, agus os cionn 4.0 glè àrd.
Tha mion-sgrùdadh mothachaidh — ath-ruith an NPSV fo bharailean dì-mhiannach is dòchasach — èigneachail, chan e roghainneil, oir
tha raointean mì-chinnt farsaing aig buannachdan neo-mhargaidh airgeadaichte.

## Eisimpleir obrach

**Ùghdarras ionadail**: bidh comhairle a’ measadh tasgadh £3m ann an lìonra rothaireachd is coiseachd ùr
thar ùine mheasaidh 20 bliadhna aig ìre lasachaidh 3.5%.

```
Cosgaisean: £3m calpa sa bhliadhna 0, £50,000/bliadhna cumail suas (bliadhnaichean 1-20)
PV(cumail suas) ≈ £50,000 × 14.2 (factar bliadhnachd 20 bliadhna aig 3.5%) ≈ £710,000
Iomlan PV(cosgaisean) ≈ £3.71m

Buannachdan (uile air an airgeadachadh le innealan luachaidh foillsichte DfT/WHO):
  Buannachd slàinte bho gnìomhachd corporra nas motha: £180,000/bliadhna
  Lùghdachadh ann an neo-làthaireachd: £40,000/bliadhna
  Lùghdachadh trang-fhosglaidh (nas lugha de thurasan càr): £60,000/bliadhna
  Sruth buannachd iomlan: £280,000/bliadhna
PV(buannachdan) ≈ £280,000 × 14.2 ≈ £3.98m

NPSV = £3.98m − £3.71m = +£0.27m
BCR = 3.98 / 3.71 = 1.07 → luach air airgead “ìosal”
```

Bidh an sgeama dìreach a’ dol thairis air a’ bhàr; ma thèid mion-sgrùdadh mothachaidh a ruith le tuairmse buannachd slàinte 20% nas ìsle
(a’ nochdadh mì-chinnt fhìor ann an luachadh gnìomhachd corporra), thèid am BCR fo 1.0, rud as coireach
carson a tha an Green Book ag iarraidh gun tèid clàr mothachaidh fhoillseachadh ri taobh na h-àireamh
prìomh, chan e dìreach an tuairmse mheadhanach.

**Carthannas**: tha prògram casg bàsmhorachd naoidheanan a’ cosg £500,000/bliadhna air a mheasadh le
luach beatha staitistigeach (VSL) — prìs sgàile, chan e prìs margaidh a chaidh fhaicinn — de timcheall
£2.1m (figear HM Treasury air ùrachadh ann an 2023, a thàinig fhèin à sgrùdaidhean roghainn ainmichte). Le bàs naoidhein
a sheachnadh gach bliadhna an aghaidh cosgais £500,000 tha BCR de 4.2 ann, gu soilleir luach air airgead “glè àrd” —
ach tha an toradh gu lèir an urra ris an fhigear VSL, agus is e sin as coireach gum feum SCBA sam bith a bhios a’ cleachdadh VSL
a nochdadh mar bharail, chan e fìrinn.

## Ceangal ri innleadaireachd bathar-bog

Is e SCBA an fhrèam nàdarra airson co-dhùnaidhean tasgaidh ann an ùrlaran is bun-structar ann am bathar-bog riaghaltais —
bidh coimeas eadar ùrlar dearbh-aithne cho-roinnte agus fuasglaidhean puing roinneil, mar eisimpleir, ag iarraidh air buannachdan a chur an airgead leithid
cosgais cur-air-bhòrd dùbailte nas lugha, foill nas lugha, agus ùine gu seirbheis nas luaithe aig nach eil prìs margaidh leotha fhèin.
Bu chòir do innleadairean a bhios a’ togail na seirbheise bunaiteach a bhith an dùil gun iarr stiùirichean prògraim cuir-a-steach dhan mhion-sgrùdadh seo: cosgaisean aonaid
ghnothaichean (faic [cosgais gach gnothach](../cosgais-gach-gnothach/)), meudan ris a bheil dùil, agus cosgaisean
crìonaidh/ùine sìos. Is e an smachd as cudromaiche ri thoirt a-steach: lasaich buannachdan san àm ri teachd,
ainmich am bunait suidheachaidh eile gu soilleir (faic [anailis an t-suidheachaidh eile](../anailis-an-t-suidheachaidh-eile/)),
agus na cuir air adhart tuairmse puing singilte gun a raon mothachaidh.

## Cunnartan

- **A’ cunntadh bhuannachdan dà uair.** Ma chunntas tu “ùine air a shàbhaladh” agus “cinneasachd air a chosnadh bhon ùine sin”
  mar loidhnichean buannachd air leth, bidh an cùis ro mhòr; is e an ùine a chaidh a shàbhaladh a’ bhuannachd, chan e
  an cleachdadh a thig às a dhèidh buannachd a bharrachd mura h-eil fianais neo-eisimeileach ann.
- **A’ fàgail a-mach cosgaisean a chaidh an gluasad.** Chan eil sgeama a ghluaiseas trang-fhosgladh bho aon rathad gu rathad eile, no a ghluaiseas
  foill bho aon seanail gu seanail eile, air a’ bhuannachd lom a chruthachadh a tha an NPSV prìomh aige a’ ciallachadh —
  faic [gluasad-àite agus buileachadh](../gluasad-àite-agus-buileachadh/).
- **A’ cleachdadh ìre lasachaidh phrìobhaidich.** Ma chleachdar cosgais calpa malairteach (can 8–10%) an àite
  na h-ìre lasachaidh shòisealta, thèid buannachdan poblach fad-ùine leithid slàinte is àrainneachd a ghnàth-ìsleachadh —
  faic [ìre lasachaidh shòisealta](../ìre-lasachaidh-shòisealta/).
- **A’ cur airgead air an rud nach eil fo chonnspaid agus a’ gluasad a làmhan dhan fhear a tha.** Ma tha dà thrian de bhuannachd molaidh
  na shàbhaladh èifeachdais air a airgeadachadh le misneachd agus trian na bhuannachd mhaitheas air a airgeadachadh gu critheanach,
  bidh an NPSV prìomh a’ measgachadh àireamh chruaidh agus fear bog gu sàmhach; thoir aithris orra air leth.

## Tùsan

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Chapter 5.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury. "Green Book supplementary guidance: value of a statistical life." 2023.
  <https://www.gov.uk/government/publications/green-book-supplementary-guidance-value-of-a-statistical-life>
- Department for Transport. "TAG unit A1.1: cost-benefit analysis." Transport Analysis Guidance.
  <https://www.gov.uk/guidance/transport-analysis-guidance-tag>
