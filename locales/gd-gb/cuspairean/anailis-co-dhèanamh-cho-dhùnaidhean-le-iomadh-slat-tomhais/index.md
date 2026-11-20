# Anailis co-dhèanamh cho-dhùnaidhean le iomadh slat-tomhais (MCDA)

Bidh MCDA a’ toirt sgòran do roghainnean agus a’ cuideam orra an aghaidh grunn shlatan-tomhais eadar-dhealaichte le cuideam aig an aon àm,
a’ toirt a-mach coimeas rangaichte gun a bhith ag iarraidh gach slat-tomhais a lùghdachadh gu aon sgèile airgid no aonad nàdarra. Is i an
dòigh measaidh i airson cho-dhùnaidhean far nach gabh na builean a tha cudromach a lùghdachadh gu aon àireamh.

## Carson a tha e cudromach

Tha an Green Book gu follaiseach a’ ceadachadh MCDA (tha Bogsa 2 agus Annex A a’ bruidhinn air gu dìreach) airson measaidhean
far a bheil na buannachdan “gu fìrinneach do-choimeasach” — far am biodh a h-uile càil a thionndadh gu airgead tro
[anailis cosgais is buannachd shòisealta](../mion-sgrùdadh-cosgais-is-buannachd-shòisealta/), no gu aon bhuil tro
[anailis cost-èifeachdais](../anailis-èifeachdas-cosgais-san-riaghaltas/), a’ mì-riochdachadh a’ cho-dhùnaidh seach a shoilleireachadh
(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>).
Tha taghadh làraich airson prìosan ùr, mar eisimpleir, a’ dèanamh iomlaid eadar cosgais calpa agus buaidh air a’ choimhearsnachd,
ceangal còmhdhalach, buaidh àrainneachdail agus comas luchd-obrach fhastadh — slatan-tomhais aig nach eil aonad cumanta agus far an
cuireadh aonad cumanta (mar as trice airgead) breith luach a-steach mu cho cudromach ’s a tha buaidh àrainneachdail an coimeas ri
cosgais, air a sgeadachadh mar àireamhachd oibseachdail.

Is e onair MCDA cuideachd an cunnart as motha aige: seach gu bheil cuideaman air an suidheachadh leis an neach a ruitheas am measadh
(no le pannal), chan eil an dòigh dligheach ach cho dligheach ri pròiseas nan cuideaman. Tha stiùireadh an Green Book soilleir gum feum
slatan-tomhais is cuideaman a bhith air an aontachadh agus air am foillseachadh *mus* tèid roghainnean a sgòradh, dìreach gus casg a
chur air neach-ath-bhreithneachaidh obrachadh air ais bho roghainn as fheàrr leotha chun na cuideaman a dhearbhas i.

## A’ mhatamataig

```
Airson gach roghainn i agus slat-tomhais j:
  Sgòr_ij    = coileanadh na roghainn an aghaidh na slat-tomhais sin (gu tric 0-100
               no 1-10, bho fhianais, breith eòlaichean, no sgòradh luchd-ùidh)
  Cuideam_j  = cho cudromach ’s a tha slat-tomhais j, tha cuideaman a’ dèanamh suas 1 (no 100)

Sgòr cuideam na roghainn i = Σ_j (Sgòr_ij × Cuideam_j)

Pròiseas:
1. Aontaich an seata slatan-tomhais agus cuideaman MUS dèan thu sgòradh air roghainn sam bith
   (tha cuideam-lùghdachaidh no coimeas-paidhir, m.e. AHP, nan dòighean cumanta airson an toirt a-mach).
2. Sgòr gach roghainn an aghaidh gach slat-tomhais air sgèile cumanta, bho
   fhianais far a bheil sin comasach.
3. Obraich a-mach na h-àireamhan iomlan cuideaman; rangaich na roghainnean.
4. Dèan deuchainn mothachaidh air na cuideaman: a bheil an rangachadh a’ seasamh ri
   mì-chòrdadh reusanta mu cho cudromach ’s a bu chòir gach slat-tomhais a bhith?
```

Chan eil MCDA a’ toirt a-mach luach iomlan dìonach mar a nì luach làithreach glan SCBA — chan eil e a’ toirt a-mach ach rangachadh
fo chumhachan nan cuideaman aontaichte. Is e feart a tha seo nuair a tha an co-dhùnadh dha-rìribh mu dhèanamh iomlaid eadar
nithean math do-choimeasach, agus uallach ma thèid a chleachdadh gus an obair as duilghe de dhèanamh airgid a sheachnadh far an robh
sin comasach.

## Eisimpleir obrach

**Ùghdarras ionadail**: tha comhairle a’ taghadh làrach airson ionad ath-chuartachaidh sgudail dachaigh ùr a’ sgòradh trì làraichean an
aghaidh ceithir slatan-tomhais, le cuideaman air an suidheachadh le pannal tarsainn roinnean mus deach làrach sam bith a thadhal:

```
Slatan-tomhais (cuideam):  Cosgais calpa (30%)  Ruigsinneachd còmhdhalach (25%)
                           Buaidh coimhearsnachd (25%)  Buaidh àrainneachdail (20%)

Sgòran làraichean (0-100, nas àirde = nas fheàrr):
Làrach A: cosgais 80, ruigsinneachd 60, coimhearsnachd 40, àrainneachd 70
Làrach B: cosgais 60, ruigsinneachd 90, coimhearsnachd 70, àrainneachd 50
Làrach C: cosgais 90, ruigsinneachd 50, coimhearsnachd 80, àrainneachd 60

Iomlanan cuideaman:
Làrach A = 80(.30) + 60(.25) + 40(.25) + 70(.20) = 24+15+10+14 = 63
Làrach B = 60(.30) + 90(.25) + 70(.25) + 50(.20) = 18+22.5+17.5+10 = 68
Làrach C = 90(.30) + 50(.25) + 80(.25) + 60(.20) = 27+12.5+20+12 = 71.5
```

Tha Làrach C aig an ìre as àirde. Ma ghluaiseas ruith mothachaidh cuideam buaidh na coimhearsnachd bho 25% gu 35% (a’ toirt
10 puing bho chosgais calpa), thig iomlan Làrach C gu 71.5 − 3 + 8 = 76.5 agus fear Làrach B gu 68 − 6 + 7 = 69 — tha Làrach C
fhathast air thoiseach, mar sin tha an rangachadh làidir an aghaidh a’ mhì-chòrdaidh reusanta sin mu chuideaman, agus is e sin
dìreach an sgrùdadh a tha an Green Book an dùil fhaicinn air aithris.

**Carthannas**: bidh bunait toirt-seachad a’ taghadh eadar seirbheis comhairle fiachan, lìonra bhancaichean bìdh agus prògram
litearrachd ionmhais a’ cleachdadh MCDA seach SROI (faic [tilleadh sòisealta air tasgadh](../tilleadh-sòisealta-air-tasgadh/))
dìreach air sgàth ’s gu bheil na urrasairean ag aontachadh gu math nach eil iad ag aontachadh mu cò am fear bu chòir cuideam a bharrachd
a chur air: faothachadh èiginn no casg — tha MCDA a’ leigeil leotha *cumadh* a’ mhì-chòrdaidh aontachadh (raon cuideam) seach
leigeil orra gun fuasgail aon cho-mheas SROI e.

## Ceangal ri innleadaireachd bathar-bog

Is e MCDA an t-inneal nàdarra airson taghadh reiceadair agus ailtireachd nuair a tha slatan-tomhais ann an còmhstri dha-rìribh —
tha taghadh eadar siostam stiùireadh chùisean air a thasgadh sa cloud agus fear air làrach a’ dèanamh iomlaid air cosgais,
cunnart uachdranas dàta, so-ruigsinneachd agus luaths lìbhrigidh ann an dòighean nach lùghdaich gu aon àireamh. Bu chòir do stiùirichean
innleadaireachd cuideam a chur air gun tachair an cuideamachadh mus tèid na roghainnean a sgòradh, dìreach mar a dh’iarras an
Green Book, oir bidh eacarsaich cuideamachaidh a thèid a ruith às dèidh dhut an liosta ghoirid fhaicinn gu cinnteach a’ gluasad
a dh’ionnsaigh ge bith dè an roghainn a bha an seòmar a’ fàbharachadh mu thràth. Faic
[togail an aghaidh ceannach ann an riaghaltas](../togail-an-aghaidh-ceannach-san-riaghaltas/) airson cleachdadh cumanta de MCDA, agus
[cairt-sgòraidh luach poblach](../cairt-sgòraidh-luach-poblach/) airson inneal sgòraidh structarail co-cheangailte a thèid a chleachdadh
às dèidh a’ cho-dhùnaidh seach roimhe.

## Cunnartan

- **Cuideaman a shuidheachadh às dèidh dhut na roghainnean fhaicinn.** Is e seo an aon dòigh as cumanta anns a bheil MCDA air a
  mhealladh, a dh’aona ghnothach no eile; foillsich cuideaman mus sgòr thu, agus clàraich cò a shuidhich iad.
- **An t-iomlan cuideaman a làimhseachadh mar àireamh chruaidh.** Chan e beàrn le brìgh staitistigeil a th’ ann an sgòr de 71.5
  an aghaidh 68 ach ma dhearbhas an anailis mothachaidh gu bheil an rangachadh seasmhach; aithris raointean, chan e mionaideachd
  bhrèige.
- **MCDA a chleachdadh gus dèanamh airgid a sheachnadh a bha comasach.** Ma ghabhadh a’ mhòr-chuid de na slatan-tomhais prìs earbsach
  a chur orra, tha tuiteam air ais air MCDA an àite [SCBA](../mion-sgrùdadh-cosgais-is-buannachd-shòisealta/) a’ call fiosrachadh a b’ urrainn dhan
  mheasadh a chleachdadh.
- **Leigeil le aon neach-ùidh làidir na cuideaman uile a shuidheachadh leis fhèin.** Tha deagh chleachdadh an Green Book an dùil gum
  bi cuideaman air an toirt a-mach bho phannal riochdachail, chan ann bhon stiùiriche a tha a’ taic ris, gus nach dèan am measadh
  dìreach ath-bheothachadh air na bha an neach sin ag iarraidh mu thràth.

## Tùsan

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Annex A
  (multi-criteria decision analysis) and Box 2 case studies.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Communities and Local Government. "Multi-criteria analysis: a manual." 2009.
  <https://www.gov.uk/government/publications/multi-criteria-analysis-a-manual>
- Belton V, Stewart TJ. "Multiple Criteria Decision Analysis: An Integrated Approach." Kluwer,
  2002.
