# Anailis èifeachdas cosgais san riaghaltas

Bidh anailis èifeachdas cosgais (CEA) a’ coimeas cosgaisean dhòighean eile air an *aon* bhuil a choileanadh, air a chur an cèill ann an aonadan nàdarra — cosgais gach neach a chaidh a thaigheadh gun taigh, cosgais gach sgoilear a chaidh a thoirt suas chun na h-ìre ris an robh dùil, cosgais gach tonna CO2 a chaidh a lùghdachadh — gun a’ bhuil fhèin atharrachadh gu airgead.

## Carson a tha e cudromach

Tha an Green Book a’ làimhseachadh CEA mar an dòigh air ais nuair a bhios riatanas [anailis cosgais-buannachd shòisealta](../mion-sgrùdadh-cosgais-is-buannachd-shòisealta/) gach buannachd a thionndadh gu airgead na rud nach eil dìreach duilich ach mì-onarach — far am biodh prìs chreidsinneach a chur air a’ bhuil ag iarraidh bharailean nach eil duine dha-rìribh a’ gabhail riutha (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>, Caibideil 5, mu mheasadh roghainnean far nach gabh builean atharrachadh gu airgead gu furasta). Is e CEA an dòigh a chaidh a thoirt air iasad gu dìreach bho eaconamachd slàinte — tha e structarail co-ionann ri mar a bhios NICE a’ coimeas làimhseachaidhean a’ cleachdadh cosgais gach Bliadhna Beatha Ceartaichte airson Càileachd (QALY) — ach air a chur an sàs ann am prògraman poblach neo-shlàinte: eadar-theachdan foghlaim gach puing builean sgoilear, prògraman taigheadais gach teaghlach a chaidh a dhìon bho dhìth dachaigh, prògraman cosnaidh gach buil obair mhaireannach.

Is e an adhbhar gu bheil CEA a’ coisrigeadh a àite ri taobh SCBA seach a bhith air a ghabhail a-steach ann gu bheil cur luach airgid air cuid de bhuilean a’ toirt àireamh cho ceart ’s gu bheil coltas ùghdarrais oirre ach cho connspaideach ’s gu bheil i gun fhiach ann an deasbad poblach — tha a bhith a’ cur prìs air “leanabh a’ leughadh aig an inbhe ris an robh dùil” a’ toirt cuireadh don t-seòrsa dùbhlain a chuireas stad air cùis-ghnìomhachais aig comataidh taghte. Bidh CEA a’ seachnadh an argamaid le bhith a’ diùltadh a bhith aice: bidh e a’ rangachadh roghainnean a rèir cosgais gach aonad den *bhuil fhèin*, a’ fàgail breithneachadh poilitigeach air leth air am fiach a’ bhuil a leantainn idir don chùis ro-innleachdail.

## A’ mhatamataig

```
Co-mheas èifeachdas cosgais (cuibheasach) = Cosgais iomlan / Aonadan builean iomlan a chaidh a choileanadh

Co-mheas èifeachdas cosgais àrdachaidh (ICER), a’ coimeas roghainn A ri roghainn B:
ICER = (Cosgais_A − Cosgais_B) / (Buil_A − Buil_B)

Modh-obrach:
1. Suidhich aonad na builean agus an dòigh tomhais thar nan roghainnean uile a thathar a’ coimeas.
2. Cuir cosgais air gach roghainn air an aon bhunait (faic ../green-book-appraisal/, a’ chùis ionmhais)
   thar an aon fhàire ùine.
3. Tilg air falbh roghainnean fo smachd: tha roghainn sam bith a chosgas barrachd gach aonad na
   roghainn eile nas saoire a choileanas an aon bhuil no buil nas fheàrr air a leigeil seachad.
4. Rangaich na roghainnean a tha air fhàgail a rèir co-mheas èifeachdas cosgais àrdachaidh, chan e cuibheasach.
```

Chan urrainn do CEA, leis fhèin, innse am bu chòir prògram a mhaoineachadh idir — dìreach dè an dòigh dhen iomadh a th’ ann air an aon amas as saoire gach aonad. Tha co-dhùnadh am fiach an t-amas fhèin an caitheamh ag iarraidh an dara cuid tionndadh air ais gu SCBA (ma tha luachadh creidsinneach ann) no breithneachadh poilitigeach/ro-innleachdail taobh a-muigh a’ mhatamataig. Far nach gabh builean a lùghdachadh gu aon aonad ann an da-rìribh — oir tha prògram a’ cruthachadh grunn bhuilean a tha cudromach ann an dòighean eadar-dhealaichte — cleachd [anailis co-dhùnaidh ioma-shlatan-tomhais](../anailis-co-dhèanamh-cho-dhùnaidhean-le-iomadh-slat-tomhais/) an àite.

## Eisimpleir obrach

**Ùghdarras ionadail**: bidh comhairle a’ coimeas trì dòighean air cadal-air-an-t-sràid a lùghdachadh, gach fear air a chosgadh thar bliadhna an aghaidh na buil “daoine fa leth a ghluaiseadh gu taigheadas seasmhach airson 6+ mìosan”:

```
Roghainn                          Cosgais    Builean air an coileanadh   CER cuibheasach
Housing First (dian)              £900,000   60                  £15,000/buil
Ostail + taic gluasaid air adhart £600,000   50                  £12,000/buil
Ruigsinneachd + roinn màil phrìobhaideach £350,000  20          £17,500/buil

ICER, Ostail an aghaidh Ruigsinneachd:  (600k−350k)/(50−20) = £8,333 gach buil a bharrachd
ICER, Housing First an aghaidh Ostail: (900k−600k)/(60−50) = £30,000 gach buil a bharrachd
```

Tha Ruigsinneachd fo smachd le Ostail a thaobh cosgais cuibheasach, ach chan eil an ceum *àrdachaidh* o Ruigsinneachd gu Ostail a’ cosg ach £8,333 gach neach a bharrachd a chaidh a thaigheadh — saor an coimeas ris a’ cheum Housing First, a chosgas £30,000 airson gach neach a bharrachd seachad air na choilean Ostail. Bu chòir do ùghdarras air buidseat cuingealaichte a tha a’ meudachadh Ostail a leudachadh ro Housing First, eadhon ged a tha Housing First a’ coimhead nas fheàrr air a cho-mheas cuibheasach fhèin.

**Riaghaltas nàiseanta**: thathar a’ coimeas prògram ruigsinn-suas litearrachd thar trì modailean lìbhrigidh air “cosgais gach sgoilear a’ ruighinn inbhe leughaidh a rèir aois”: oideachadh aon-ri-aon (£1,800/sgoilear), oideachadh buidheann bheag (£700/sgoilear), agus eadar-theachd didseatach a-mhàin (£150/sgoilear, ach dìreach 40% de ìre builean oideachadh buidheann bheag gach sgoilear clàraichte nuair a bhios e air a cheartachadh airson tuiteam com-pàirteachais). Nuair a thèid a cheartachadh airson crìochnachadh dha-rìribh, bidh didseatach a-mhàin a’ cosg £375 gach sgoilear a’ ruighinn inbhe — fhathast an fheadhainn as saoire, ach chan urrainn do CEA innse an e an àireamh iomlan nas lugha de sgoilearan a tha air an cuideachadh le didseatach a-mhàin, ma thèid a lìbhrigeadh aig an aon bhuidseat ri buidheann bheag, malairt a gabhar ris an aghaidh ruighinn nas lugha de sgoilearan le nas motha doimhneachd; is e sin breithneachadh cuairteachaidh a bheir CEA air ais gu luchd-co-dhùnaidh.

## Ceangal ri innleadaireachd bathar-bog

Is e CEA am frèam ceart nuair a bhios sgiobaidhean innleadaireachd a’ measadh dhòighean lìbhrigidh airson an *aon* bhuil seirbheis — cosgais gach dearbhadh dearbh-aithne soirbheachail thar trì luchd-reic dearbhaidh dearbh-aithne, cosgais gach cùis a chaidh a sheòrsachadh ceart thar dà dhealbhadh fèin-ghluasaid chùisean, cosgais gach easbhaidh ruigsinneachd a chaidh fhuasgladh thar leasachadh a-staigh an aghaidh fo-chùmhnant. An smachd a bheir e a-steach gu dìreach: mìnich aonad na buil mus dèan thu coimeas cosgaisean (chan e “tiocaidean dùinte” — toradh — ach “feum neach-cleachdaidh a chaidh fhuasgladh dha-rìribh”), agus cunnt an-còmhnaidh an co-mheas àrdachaidh eadar an siostam beò agus ionadachadh a thathar a’ moladh, chan e cosgais cuibheasach gach siostam na aonar. Faic [builean an aghaidh toraidhean](../builean-an-aghaidh-toraidhean/) agus [cosgais gach buil](../cosgais-gach-buil/).

## Cunnartan

- **A’ coimeas cho-mheasan cuibheasach, chan e àrdachaidh, nuair a thathar a’ co-dhùnadh air leudachadh.** Mar a shealleas eisimpleir cadal-air-an-t-sràid, chan e an roghainn leis a’ cho-mheas cuibheasach as fheàrr an ath aonad builean as saoire ri cheannach an-còmhnaidh.
- **A’ taghadh aonad builean a tha dha-rìribh na thoradh.** Bidh “iomraidhean air an dèanamh” no “seiseanan air an lìbhrigeadh” a’ tomhas gnìomhachd, chan e a’ bhuil a tha am prògram ann gus a chruthachadh; bheir CEA air toraidhean àireamh a tha a’ coimhead cinnteach a fhreagras air a’ cheist cheàrr.
- **A’ coimeas thar bhuilean gu dha-rìribh eadar-dhealaichte.** Chan eil CEA dligheach ach nuair a tha gach roghainn ag amas air an aon bhuil air a thomhas san aon dòigh; tha coimeas “cosgais gach cadal-air-an-t-sràid a chaidh a thaigheadh” ri “cosgais gach fear fhàgail cùraim ann an aonta-màil seasmhach” ag iarraidh tomhas builean coitcheann no [anailis co-dhùnaidh ioma-shlatan-tomhais](../anailis-co-dhèanamh-cho-dhùnaidhean-le-iomadh-slat-tomhais/), chan e CEA.
- **A’ dearmad maireannachd builean.** Chan eil roghainn nas saoire a bheir builean nach mair (sgoilear a thilleas air ais às dèidh dhan eadar-theachd crìochnachadh) dha-rìribh nas èifeachdaiche cosgais nuair a thèid a thomhas thar fàire so-choimeasach; maidsich an ùine leantainn thar nan roghainnean a thathar a’ coimeas.

## Tùsan

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Chapter 5.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- National Institute for Health and Care Excellence. "Developing NICE guidelines: the manual" —
  the cost-effectiveness method this government adaptation borrows from.
  <https://www.nice.org.uk/process/pmg20>
- What Works Centre for Homelessness Impact. Cost-effectiveness evidence on homelessness
  interventions. <https://whatworks-homelessness.org.uk/>
