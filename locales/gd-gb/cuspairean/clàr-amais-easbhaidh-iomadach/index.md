# Clàr-amais Easbhaidh Iomadach (IMD)

Is e an IMD an tomhas oifigeil air easbhaidh choimeasach airson sgìrean beaga ann an Sasainn, a’ rangachadh gach aon de 32,844 Lower-layer Super Output Areas (LSOAan, gach fear le timcheall air 1,500 neach-còmhnaidh) na dùthcha bho 1 (as easbhaidheach) gu 32,844 (as lugha easbhaidh). Tha e air fhoillseachadh leis an Ministry of Housing, Communities and Local Government (MHCLG, roimhe MHCLG/DCLG), mar as ùire mar English Indices of Deprivation 2019, agus bidh e a’ stiùireadh gu dìreach maoineachadh an riaghaltais mheadhanaich, prìomhachas slàinte poblaich, agus airidheachd airson dusanan de sgeamaichean ionadail.

## Carson a tha e cudromach

Chan e aon rud a th’ ann an easbhaidh — faodaidh nàbaidheachd a bhith bochd a thaobh teachd-a-steach ach sàbhailte, no gu leòr a thaobh teachd-a-steach ach le droch bhuilean slàinte is droch thaigheadas. Dh’fhàs seann chlàran-amais an IMD (a’ dol air ais gu comharran easbhaidh Roinn na h-Àrainneachd anns na 1970an) gu modail seachd-raointean an-diugh dìreach air sgàth gum biodh targaideachadh aon-chomharra (ìre cion-cosnaidh a-mhàin, can) gu cunbhalach a’ call sgìrean le easbhaidh ann an dòighean eile. Bidh an IMD 2019 a’ cur còmhla teachd-a-steach, cosnadh, foghlam, slàinte, eucoir, cnapan-starra gu taigheadas is seirbheisean, agus àrainneachd-beatha gu aon rang measgaichte gach LSOA, gach raon air a thogail à cliabh comharran fhèin agus air a chuideachadh a-rèir modh-obrach MHCLG. Leis gu bheil e ag obair aig ìre sgìre bhig (LSOA) seach ìre ùghdarrais ionadail, bidh e a’ nochdadh pòcaidean easbhaidh falaichte am broinn sgìrean a tha beairteach eile — an t-adhbhar gur e an IMD, chan e teachd-a-steach cuibheasach ùghdarrais ionadail, a bhios NHS England, pupil premium na Roinne Foghlaim, agus dusanan de fhoirmlean maoineachaidh ùghdarrais ionadail ag obrachadh a-rèir. Bu chòir do bhathar-bog a shuidhicheas airidheachd, a chuireas prìomhachas air ruigsinneachd, no a dh’aithriseas buaidh a-rèir sgìre ann an Sasainn deicheamh no rang IMD a làimhseachadh mar in-chuir prìomh-ìre, chan e smuain às dèidh làimhe — agus far a bheil prògram a’ targaideachadh nan sgìrean as easbhaidheach a dh’aona ghnothach, bu chòir dhan mheasadh aige [cuideam sgaoilidh](../cuideam-sgaoilidh/) a chur an sàs a tha co-chòrdail leis an targaideachadh sin, seach punnd de bhuannachd a luachadh mar a chèile ge bith càite an tuit e.

## A’ mhatamataig

```
7 raointean, le cuideam:
  Teachd-a-steach                        22.5%
  Cosnadh                                22.5%
  Foghlam, Sgilean agus Trèanadh         13.5%
  Easbhaidh Slàinte agus Ciorram         13.5%
  Eucoir                                  9.3%
  Cnapan-starra gu Taigheadas is Seirbheisean  9.3%
  Àrainneachd Beatha                      9.3%

Sgòr gach raoin: comharran air an àbhaisteachadh (air an rangachadh, an uairsin air an tionndadh
a dh’ionnsaigh sgaoileadh àbhaisteach) agus air an cur còmhla le tionndadh eas-chomharrach
gus nach urrainn easbhaidh àrd air aon chomharra a bhith air a chuir air ais gu tur
le easbhaidh ìosal air cuid eile taobh a-staigh an raoin sin.

Sgòr measgaichte IMD (LSOA) = Σ (sgòr raoin × cuideam raoin)
Rangaich LSOAan a-rèir sgòr measgaichte → 1 (as easbhaidheach) gu 32,844 (as lugha easbhaidh)
Deicheamhan: rang ÷ 3,284 (timcheall), deicheamh 1 = an 10% as easbhaidheach de LSOAan
```

## Eisimpleir obrach

**Sgòr measgaichte LSOA**, a’ cleachdadh sgòran raoin àbhaisteachaidh mar eisimpleir (0 = gun chomharra easbhaidh, nas àirde = nas easbhaidheach):

```
Teachd-a-steach          0.35 × 0.225 = 0.07875
Cosnadh                  0.30 × 0.225 = 0.06750
Foghlam                  0.20 × 0.135 = 0.02700
Slàinte                  0.15 × 0.135 = 0.02025
Eucoir                   0.10 × 0.093 = 0.00930
Cnapan-starra Taigheadais 0.05 × 0.093 = 0.00465
Àrainneachd Beatha       0.08 × 0.093 = 0.00744

Sgòr measgaichte = 0.07875 + 0.06750 + 0.02700 + 0.02025
                 + 0.00930 + 0.00465 + 0.00744  = 0.21489
```

Bidh an sgòr measgaichte sin an uairsin air a rangachadh an aghaidh sgòran nan 32,844 LSOAan gu lèir. Ma chuireas e an LSOA aig rang 2,950, tuitidh e ann an deicheamh 1 (2,950 ÷ 3,284 ≈ 0.9, i.e. taobh a-staigh an 10% as easbhaidheach de nàbaidheachdan ann an Sasainn) — a tha, airson mòran fhoirmlean maoineachaidh, an stairsneach a dh’fhosglas airidheachd, ge bith dè an sgòr cuibheasach aig an ùghdarras ionadail mun cuairt.

## Ceangal ri innleadaireachd bathar-bog

- Faodaidh seirbheis sam bith a bhios a’ geòcòdadh luchd-cleachdaidh gu còd-puist no LSOA ceangal ri clàr-lorg IMD foillsichte (CSV an-asgaidh, le tionndadh, bho MHCLG) gus deicheamh easbhaidh a chur ris mar cho-chaochladair — airson targaideachadh ruigsinneachd, prìomhachas luchd-cùise, no aithris builean a-rèir bann easbhaidh gun dàta pearsanta ùr a chruinneachadh.
- Tha deicheamh IMD na sgrùdadh co-ionannachd àbhaisteach airson seirbheisean didseatach poblach: le bhith a’ tar-chlàradh gabhail seirbheis, tuiteam dheth, no sàsachadh a-rèir deicheamh IMD thig beàrnan ruigsinneachd am bàrr a bhios meatrach cruinnichte a’ falach — faic [in-ghabhail didseatach](../in-ghabhail-didseatach/) agus [meatrach sàsachaidh shaoranach](../meatrachan-riarachaidh-shaoranach/).
- Leis gu bheil rang IMD coimeasach (tha e an-còmhnaidh a’ dèanamh suas seata stèidhichte de rangan air feadh Shasainn), chan urrainn dha sealltainn a bheil easbhaidh nàiseanta ag èirigh no a’ tuiteam thar ùine — dìreach dè na sgìrean a tha air rang càite an coimeas ri chèile san deasachadh sin; na tog deas-bhùird cunnart-sìde iomlan air rang IMD amh a-mhàin.

## Cunnartan

- **A’ coimeas rangan IMD thar deasachaidhean (2015 an aghaidh 2019) mar threànd ùine** — bidh na comharran bunaiteach, geòlas agus modh-obrach uile ag atharrachadh eadar deasachaidhean; tha MHCLG gu soilleir a’ comhairleachadh nach cleachd thu atharrachaidhean rang mar fhianais gun d’ fhàs sgìre nas easbhaidheach no nas lugha easbhaidh.
- **A’ cur IMD aig ìre LSOA an sàs air daoine fa leth** — tha dachaighean nach eil easbhaidheach fhathast ann an LSOA ann an deicheamh 1, agus tha feadhainn easbhaidheach fhathast ann an LSOA deicheamh 10; bidh an IMD a’ toirt cunntas air sgìrean, chan e daoine, agus le bhith ga chleachdadh mar iomradh airidheachd fa leth bidh e a’ mì-sheòrsachadh an dà chuid.
- **A’ dèanamh dìmeas air mion-fhiosrachadh aig ìre raoin an sàs ann an rang measgaichte** — faodaidh dà LSOA le sgòran measgaichte co-ionann pròifilean raoin gu tur eadar-dhealaichte a bhith aca (fear easbhaidheach a thaobh slàinte, fear a thaobh eucoir); bu chòir do sgeama targaideachaidh a tha ag amas air aon duilgheadas an sgòr raoin iomchaidh a chleachdadh, chan e an sgòr measgaichte measgta.

## Tùsan

- Ministry of Housing, Communities and Local Government. "English Indices of Deprivation 2019."
  <https://www.gov.uk/government/statistics/english-indices-of-deprivation-2019>
- MHCLG. "The English Indices of Deprivation 2019: Technical Report."
