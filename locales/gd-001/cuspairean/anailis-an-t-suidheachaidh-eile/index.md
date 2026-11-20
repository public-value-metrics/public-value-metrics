# Anailis an t-suidheachaidh eile (counterfactual)

’S e suidheachadh eile (counterfactual) tuairmse air na bhiodh air tachairt às aonais eadar-theachd. Às aonais fear, chan urrainnear atharrachadh a chithear às dèidh prògram a thòiseachadh a sgaradh o atharrachadh a bhiodh air tachairt co-dhiù — gun suidheachadh eile, gun fhianais air buaidh, ge bith dè cho tarraingeach ’s a tha na h-àireamhan ro-is-às-dèidh. Tha Magenta Book HM Treasury a’ làimhseachadh togail suidheachadh eile creidsinneach mar phrìomh obair mhodh-eòlais measadh buaidh, nas cudromaiche na roghainn dealbhaidh sam bith eile.

## Carson a tha e cudromach

Chan eil “Thuit eucoir 15% sa bhliadhna às dèidh dhuinn am prògram a thòiseachadh” na fhianais gun do dh’obraich am prògram mura h-eil fios agad dè bhiodh air tachairt do dh’eucoir às aonais — dh’fhaodadh eucoir a bhith air tuiteam 20% co-dhiù air sgàth gluasadan eaconamach no deamografach nach buin dha, a’ ciallachadh gun do rinn am prògram cùisean nas miosa an coimeas ris an t-suidheachadh eile, a dh’aindeoin an àireamh amh a bhith nas fheàrr. Is e seo am mearachd anailis as cumanta ann an tagraidhean buaidh san roinn phoblach agus shòisealta: coimeas ro-is-às-dèidh a mheasgachadh le fianais air adhbharachd. Tha am Magenta Book soilleir gu bheil measadh buaidh ann gus ceist suidheachaidh eile a fhreagairt — “dè an eadar-dhealachadh a rinn an eadar-theachd seo?” — agus gu bheil freagairt ag iarraidh tuairmse, chan e dìreach tuairisgeul, air an t-saoghal nach do thachair.

Bidh diofar dhòighean a’ togail an t-suidheachaidh eile le diofar ìrean de mhisneachd, agus bidh stiùireadh measaidh an riaghaltais gan rangachadh a rèir sin. Bidh deuchainnean smachdaichte air thuaiream (RCTs), far a bheil daoine fa leth no sgìrean air an sònrachadh air thuaiream gus eadar-theachd fhaighinn no nach fhaigh, a’ toirt an t-suidheachaidh eile as làidire oir tha tuaiream a’ dèanamh cinnteach nach eil na buidhnean làimhseachaidh is smachd eadar-dhealaichte, aig cuibheasachd, ach ann a bhith a’ faighinn an eadar-theachd. Tha an Cabinet Office agus an What Works Network air RCTs a bhrosnachadh thar poileasaidh poblach na RA bho aithisg 2012 “Test, Learn, Adapt” aig an Behavioural Insights Team, dìreach oir tha dealbhaidhean nas laige so-leònte do chonfounding — dh’fhaodadh an eadar-dhealachadh a chithear nochdadh cò a roghnaich com-pàirteachadh, chan e buaidh a’ phrògraim. Far a bheil tuaiream do-dhèanta no mì-bheusach (mar as trice airson prògraman le còir reachdail, no airson atharrachaidhean poileasaidh sluaigh slàn), tha am Magenta Book a’ cur an cèill rangachd shoilleir de roghainnean eile nas laige ach fhathast feumail: buidhnean coimeis co-fhreagarrach, dealbhaidhean eadar-dhealachadh-ann-an-eadar-dhealachaidhean, neo-sheasmhachd ais-shlighe timcheall stairsnich cuidhteis, agus, mar roghainn mu dheireadh, coimeas ro-is-às-dèidh sìmplidh — air a chomharrachadh gu soilleir mar an cruth fianais as laige, buailteach do mheasgachadh buaidh a’ phrògraim le buaidh gach rud eile a dh’atharraich aig an aon àm.

## A’ mhatamataig

An frèamadh suidheachaidh eile, a ghabhas cur an sàs thar nan dòighean uile:

```
Buaidh tuairmsichte = Buil(le eadar-theachd) − Buil(suidheachadh eile: às aonais eadar-theachd)

CHAN E:
Buaidh tuairmsichte ≠ Buil(às dèidh) − Buil(roimhe)   [a’ measgachadh ùine le làimhseachadh]
```

Tha eadar-dhealachadh-ann-an-eadar-dhealachaidhean (DiD), aon de na dealbhaidhean leth-dheuchainneach as cumanta ann am measadh riaghaltais, a’ sgaradh buaidh an làimhseachaidh le bhith a’ toirt air falbh atharrachadh ro-is-às-dèidh na buidhne coimeis fhèin:

```
Tuairmse DiD = [Buil(làimhsichte, às dèidh) − Buil(làimhsichte, roimhe)]
             − [Buil(coimeis, às dèidh) − Buil(coimeis, roimhe)]
```

Bidh seo a’ toirt air falbh gluasad sam bith cumanta don dà bhuidheann (m.e. gluasad eaconamach nàiseanta a bheir buaidh air a h-uile duine), a’ fàgail dìreach an t-atharrachadh eadar-dhealaichte a ghabhas buileachadh air an eadar-theachd.

## Eisimpleir obrach

**Prògram cosnaidh, ro-is-às-dèidh (dealbhadh lag)**: tha sgeama taic-obrach ag aithris gun do dh’èirich cosnadh com-pàirtichean o 40% gu 55% thar bliadhna — co-dhùnadh gun smaoineachadh “+15 puingean ceudad air sgàth a’ phrògraim.”

**An aon phrògram, eadar-dhealachadh-ann-an-eadar-dhealachaidhean (dealbhadh nas làidire)**: tha buidheann coimeis co-fhreagarrach de dhaoine nach tug pàirt, a chaidh a thaghadh às an aon mhargaidh-obrach ionadail, a’ sealltainn cosnadh ag èirigh o 38% gu 47% san aon bhliadhna (bha ath-bheothachadh eaconamach nàiseanta a’ dol air adhart).

```
Atharrachadh buidheann làimhsichte:  55% − 40% = +15 puingean ceudad
Atharrachadh buidheann coimeis:      47% − 38% = +9 puingean ceudad

Tuairmse DiD (fìor bhuaidh a’ phrògraim) = 15 − 9 = +6 puingean ceudad
```

Is e 6 puingean ceudad, chan e 15, a’ bhuaidh onarach a ghabhas buileachadh — bhiodh barrachd air leth den leasachadh follaiseach ro-is-às-dèidh air tachairt a dh’aindeoin a’ phrògraim, air a stiùireadh leis an aon ath-bheothachadh eaconamach a chuir ris a’ bhuidheann choimeis.

**Neo-sheasmhachd ais-shlighe, stairsneach cuidhteis**: chan eil sgeama thabhartasan ri fhaighinn ach do ghnìomhachasan le nas lugha na 50 neach-obrach. Bidh coimeas builean airson gnìomhachasan dìreach fo a’ stairsneach (45–49 neach-obrach, cuidhteach) an aghaidh gnìomhachasan dìreach os a chionn (50–54 neach-obrach, neo-chuidhteach) a’ toirt suidheachadh eile creidsinneach oir tha gnìomhachasan air gach taobh de chrìoch rianachd neo-riaghailteach coltach ri chèile air dhòigh eile — is e an stairsneach, chan e feart gnìomhachais bunaiteach sam bith, a shuidhicheas cuidhteas. Gabhar buaidh an tabhartais air eadar-dhealachadh builean cuibheasach de £2,000 eadar an dà bhuidheann, air a choimhead aig an stairsneach a-mhàin, le mòran barrachd misneachd na coimeas sìmplidh dhen a h-uile gnìomhachas cuidhteach an aghaidh a h-uile gnìomhachas neo-chuidhteach (a tha eadar-dhealaichte gu riaghailteach ann am meud).

## Ceangal ri innleadaireachd bathar-bog

Bu chòir smaoineachadh suidheachadh eile cumadh a thoirt air mar a thèid siostaman leantainn buaidh agus pìoban measaidh airson bathar-bog riaghaltais is roinn shòisealta a dhealbhadh:

- Tog glacadh buidheann coimeis a-steach do shiostam o thùs — a’ clàradh cò a bha cuidhteach ach nach deach a chlàradh, no buidheann co-fhreagarrach nach tug pàirt — seach a chur ris às dèidh dhan phrògram ruith mar-thà agus gun ach dàta ro-is-às-dèidh ann.
- Far a bheil tuaiream comasach (cur an gnìomh ann an ìrean, seirbheis didseatach air a cur an gnìomh airson cuid de luchd-cleachdaidh ro chuid eile), cuir ionnsramaid air an t-siostam gus sònrachadh air thuaiream a ghleidheadh mar raon a ghabhas ceasnachadh; bidh cur an gnìomh ann an ìrean gu dearbh a’ sgrios a luach measaidh fhèin mura h-eil òrdugh sònrachaidh air a logadh.
- ’S e seo an dòigh bhunaiteach air cùl [dòighean measaidh buaidh](../dòighean-measaidh-buaidh/) agus is e na tha ga sgaradh o [measadh buaidh an aghaidh measadh pròiseis](../measadh-buaidh-an-aghaidh-measadh-pròiseis/), a tha am fear mu dheireadh a’ faighneachd an deach prògram a lìbhrigeadh mar a bha dùil seach an do dh’adhbharaich e buaidh.
- Tha [buaidh a bharrachd agus cuideam marbh](../buaidh-a-bharrachd-agus-cuideam-marbh/) agus [gluasad-àite agus buileachadh](../gluasad-àite-agus-buileachadh/) le chèile, aig a’ bhun, nan ceistean suidheachadh eile — is e cuideam marbh “dè a bhiodh a’ bhuil shònraichte seo air a bhith às aonais an eadar-theachd”, air a chur an sàs aig ìre atharrachaidh seach làn dealbhadh measaidh.

## Cunnartan

- **A’ làimhseachadh ro-is-às-dèidh mar fhianais air adhbharachd.** Is e seo am mearachd as cumanta agus as buailtiche ann an aithris buaidh phoblach is shòisealta; bidh atharrachadh ro-is-às-dèidh a’ measgachadh buaidh a’ phrògraim le gach rud eile a dh’atharraich san aon ùine.
- **A’ cleachdadh buidheann coimeis a tha eadar-dhealaichte gu riaghailteach on bhuidheann làimhsichte.** Feumaidh buidheann coimeis co-fhreagarrach a bhith dha-rìribh coltach air feartan iomchaidh (faic rangachd dhòighean [anailis an t-suidheachaidh eile](../anailis-an-t-suidheachaidh-eile/) sa Mhagenta Book); tha coimeas eadar com-pàirtichean prògraim (a roghnaich a-steach, agus a tha gu tric nas brosnaichte) agus neo-chom-pàirtichean (nach do roghnaich) a’ cur cunnart air claon-bhreith taghaidh ag aithris mar bhuaidh prògraim.
- **A’ sgrios cothroman tuaiream tro dhroch dhealbhadh lìbhrigidh.** Chan eil cur an gnìomh ann an ìrean no air thuaiream a’ gleidheadh a luach measaidh ach ma tha sònrachadh dha-rìribh air thuaiream agus air a chlàradh — le bhith a’ leigeil le manaidsearan ionadail taghadh cò a thèid an toiseach, thèid an adhbhar a chall.
- **A’ cus-thagradh pongail o dhealbhadh lag.** Bu chòir tuairmse ro-is-às-dèidh a thaisbeanadh mar chomharra, chan e meud buaidh air a thomhas; tha rangachd fianais Magenta Book ann gus gum bi neart tagraidh a’ freagairt air neart an dealbhaidh a thug a-mach e.

## Tùsan

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020), and its
  supplementary guide on quasi-experimental methods.
  <https://www.gov.uk/government/publications/the-magenta-book>
- Cabinet Office / Behavioural Insights Team, "Test, Learn, Adapt: Developing Public Policy with
  Randomized Controlled Trials" (2012).
- What Works Network, standards of evidence guidance. <https://www.gov.uk/guidance/what-works-network>
- Angrist JD, Pischke J-S. *Mostly Harmless Econometrics: An Empiricist's Companion*. Princeton
  University Press, 2009 (standard reference for difference-in-differences and regression
  discontinuity methods).
