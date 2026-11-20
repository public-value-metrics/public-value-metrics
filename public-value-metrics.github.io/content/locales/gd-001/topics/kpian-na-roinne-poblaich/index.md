# KPIan na roinne poblaich

Is e prìomh chomharra coileanaidh (KPI) tomhas taghte, air a leantainn, a tha na àite airson a bheil seirbheis phoblach a’ dèanamh a h-obair gu math.
Ann an riaghaltas chan eil taghadh KPI a-chaoidh neo-phàirteach: seach gu bheil KPIan ceangailte ri buidseatan, clàran-rangachaidh agus dreuchdan, bidh an gnìomh
a bhith ag taghadh fear a’ cumadh giùlan a h-uile duine sìos an t-sruth bhuaithe, gu tric barrachd na am poileasaidh a chruthaich an t-seirbheis.

## Carson a tha e cudromach

Is e beachd Charles Goodhart ann an 1975 air poileasaidh airgid — a chaidh a chraobh-sgaoileadh às dèidh sin le Marilyn Strathern mar “nuair a
thig tomhas gu bhith na thargaid, stadaidh e bho bhith na thomhas math” — an aon leubail rabhaidh as cudromaiche ann an riaghladh
coileanaidh na roinne poblaich. Tòisichidh KPI a chaidh a thaghadh gus siostam *a mhìneachadh* air an siostam sin *a thruailleadh* an
dàrna a thèid goireasan, pàigheadh, no mairsinn poilitigeach a cheangal ris. Is e an dealbh clasaigeach amannan freagairt carbadan-eiridinn an NHS: nuair a
thàinig targaid freagairt ochd mionaidean Roinn A gu bhith ceangailteach, chaidh sealltainn gun do “stac” cuid de thrustaichean carbadan-eiridinn dìreach taobh a-muigh cloc
na h-ùine freagairt, no gun d’ ath-sheòrsaich iad gairmean, gus an àireamh a bhualadh gun a bhith ag atharrachadh builean euslaintich.
Tha stiùireadh an National Audit Office na RA air a bhith a’ taghadh agus a’ cleachdadh chomharran coileanaidh — air a chur a-mach thairis air na
h-aithisgean luach airson airgead aige agus am frèam “Performance Measurement by Regulators” agus “Choosing the Right FABRIC” (Fit for purpose, Appropriate,
Balanced, Robust, Integrated, Cost-effective) — ann dìreach air sgàth gun do lean roinnean a’ taghadh chomharran a bha furasta
an aithris seach comharran a bha duilich an mhealladh. Tha innleadair bathar-bog a bheir seachad an deas-bhòrd a thèid ministear no stiùiriche a bhreithneachadh
na aghaidh, ge bith an e a rùn e no nach e, a’ dealbhadh structar brosnachaidh buidhne poblaich.

## A’ mhatamataig

Is e cuspair cumadh frèama a th’ ann an dealbhadh KPI, ach is e liosta-sgrùdaidh ath-chuir an gnìomh, chan e foirmle, measadh KPI tagraiche:

```
Airson gach KPI tagraiche, sgòr an aghaidh:
  Fit for purpose  (freagarrach don rùn) — a bheil e a’ tomhas na bhuil, no neach-ionaid grunn cheumannan air falbh?
  Appropriate      (iomchaidh)           — a bheil e a’ buntainn dhaoine as urrainn buaidh a thoirt air gu dearbh?
  Balanced         (cothromach)          — a bheil e paidhrichte ri frith-mheatair a ghlacas mealladh?
  Robust           (làidir)              — a bheil e comasach air sgrùdadh a sheasamh, no a bheil e fèin-aithriste agus do-dhearbhte?
  Integrated       (aonaichte)           — a bheil e a’ freagairt don t-seata nas fharsainge, no a’ putadh an aghaidh KPI eile?
  Cost-effective   (cost-èifeachdach)    — a bheil cosgais a chruinneachadh nas motha na an co-dhùnadh a tha e a’ stiùireadh?

Sgaradh stiùiridh an aghaidh leantainneach:
  Comharra stiùiridh   → a’ ro-innse buil san àm ri teachd, ach gu tric so-mhealladh (m.e. gairmean air am freagairt <60s)
  Comharra leantainneach → a’ dearbhadh gun do thachair a’ bhuil, ach a’ ruighinn ro fhadalach airson stiùireadh
                         (m.e. sgrùdadh toileachais bliadhnail)
  Bidh seata KPI dìonach a’ paidhreadh aon de gach seòrsa co-dhiù airson gach amas.
```

## Eisimpleir obrach

**Trust carbadan-eiridinn**: tha trust ag aithris KPI freagairt Roinn A (cunnartach do bheatha) de “75% de ghairmean air am freagairt taobh a-staigh 8
mionaidean.” Ann an aon chairteal, thig 6,000 gairm Roinn A a-steach; tha 4,500 air am coinneachadh taobh a-staigh 8 mionaidean, a’ toirt 75.0% —
a rèir coltais air targaid.

```
KPI ceann-naidheachd = 4,500 / 6,000 × 100 = 75.0%  (a’ coinneachadh ris an stairsneach 75%)
```

Ach cuiridh sgrùdadh Goodhart frith-mheatair ris: meadhan-ùine freagairt airson an 10% as slaodaiche de ghairmean.

```
Meadhan freagairt an deicheamh as slaodaiche = 34 mionaid (suas o 19 mionaid dà bhliadhna roimhe)
```

Tha an trust a’ bualadh na targaid fhad ’s a tha an earball — na gairmean as dualtaiche a bhith gu fìrinneach cunnartach do bheatha nuair a tha
roinn-seòrsachadh neo-iomlan — air fàs tòrr nas miosa, oir tha sgiobaidhean air am prìomhachadh a dh’ionnsaigh ghairmean faisg air oir
ghearraidh 8 mionaidean seach a dh’ionnsaigh èiginn clinigeach. Dh’innis an aon KPI sgeulachd bhrèige; dh’innis an KPI paidhrichte an fhìrinn.

## Ceangal ri innleadaireachd bathar-bog

Tha innleadairean a’ togail dheas-bhùird choileanaidh airson riaghaltas, gu gnìomhach, a’ dealbhadh API brosnachaidh na buidhne. Builean practaigeach: cuir ionnsramaid air
an *t-ainmiche* cho teann ris an àireamhaiche (bidh KPI air aithris mar cheudad lom a’ gairm mealladh an ainmiche — faic
[cosgais gach gnothach](../cosgais-gach-gnothach/) airson an aon ribe ann an seirbheisean didseatach); tog frith-mheatairean a-steach don aon deas-bhòrd seach
aithisg air leth nach leugh duine, gus am bi mealladh ri fhaicinn aig àite a’ cho-dhùnaidh; agus thoir dreach do mhìneachadh KPI, oir tha ath-mhìneachadh sàmhach (ag atharrachadh na tha a’
cunntadh mar “ghairm,” “chùis,” no “chrìochnachadh”) co-ionann gu gnìomhach ris an targaid atharrachadh gun
chlàr-innse. Tha [cairt-sgòraidh luach poblach](../cairt-sgòraidh-luach-poblach/)
na dòigh structarail a chumas KPI singilte bho bhith air a leughadh na aonar, agus
[cunntachalachd stèidhichte air builean](../cunntachalachd-stèidhichte-air-builean/) an smachd air KPIan aig ìre sluaigh a thaghadh nach urrainn do sgioba singilte
a thruailleadh gu aon-taobhach.

## Cunnartan

- **An tomhas as fhasa a chruinneachadh a thaghadh seach am fear brìghmhor**: tha ùine freagairt gairm furasta a logadh; chan eil
  am fuasgladh a thug a’ ghairm air duilgheadas an t-saoranaich — ach is e an dàrna fear a-mhàin am buil. Seas an aghaidh tuiteam air ais air na bhios an siostam ag aithris mu thràth.
- **Gun fhrith-mheatair**: thèid KPI sam bith ceangailte ri airgead no cliù a mhealladh aig an oir; cuir a-mach e le meatair paidhrichte a ghlacas an
  fheadhainn mhealladh dhualtach mus foillsich thu e.
- **Ath-mhìneachadh a’ mheatair gun chlàr-atharrachaidh**: tha “gairmean a fhuaireadh” a chur an àite “gairmean a fhreagair” gus
  gluasad a mholadh a’ sgrios creideas an t-sreath-ùine sa mhòmaid a lorgar e — foillsich clàr-atharrachaidh mhìneachaidhean an-còmhnaidh ri taobh nan àireamhan.
- **Gnìomhachd a mheasgachadh le toradh**: is e toradh a th’ ann a bhith a’ cunntadh sgrùdaidhean crìochnaichte; tha cunntadh togalaichean a chaidh a thoirt gu gèilleadh nas fhaisge
  air a’ bhuil (faic [builean an aghaidh toraidhean](../builean-an-aghaidh-toraidhean/)).

## Tùsan

- National Audit Office, "Choosing the Right FABRIC: A Framework for Performance Information."
  <https://www.nao.org.uk/>
- Marilyn Strathern, "'Improving Ratings': Audit in the British University System," *Social
  Anthropology*, 1997 (formulation of Goodhart's law as commonly cited).
- National Audit Office, investigations into NHS ambulance service performance reporting.
  <https://www.nao.org.uk/>
