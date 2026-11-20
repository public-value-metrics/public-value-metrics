# Cunntasachd calpa nàdarrach

Bidh cunntasachd calpa nàdarrach a’ cur na h-àrainneachd air an aon bhonn ri maoin nàiseanta no buidhne sam bith eile: tha i a’ tomhas
stoc nan goireasan nàdarrach (coilltean, ùir, aibhnichean, boglaichean, an àile) agus sruth nan seirbheisean a bheir iad (tasgadh
carboin, dìon bhon tuiltean, cur-seachad, biadh), ann an cumaibh fiosaigeach is airgid, gus am bi call na h-àrainneachd ri fhaicinn ann
an co-dhùnaidhean mar a bhiodh lùghdachadh calpa ionmhais. Tha an RA am measg nan riaghaltasan as fhaide air adhart ann a bhith a’
dèanamh seo gu rianail, air a stiùireadh leis a’ Phlana Àrainneachd 25 Bliadhna (2018) agus air a chur an gnìomh tro chunntasan Calpa
Nàdarrach na RA aig an ONS agus stiùireadh leasachaidh an Green Book aig HM Treasury.

## Carson a tha e cudromach

Bidh cunntasachd àbhaisteach — corporra agus riaghaltais mar a chèile — a’ làimhseachadh coille mar rud gun luach gus an tèid a gearradh
agus a reic mar fhiodh, agus aig an àm sin bidh i na GDP. Tha cunntasachd calpa nàdarrach ann gus a’ bheàrn sin a dhùnadh: gheall Plana
Àrainneachd 25 Bliadhna na RA smaoineachadh calpa nàdarrach a thoirt a-steach thairis air poileasaidh, agus thuirt e gu follaiseach
gu bheil e ag amas air “a bhith mar a’ chiad ghinealach a dh’fhàgas an àrainneachd ann an staid nas fheàrr na lorg sinn i.” Tha an ONS
bhon uair sin air cunntasan Calpa Nàdarrach bliadhnail na RA fhoillseachadh
(<https://www.ons.gov.uk/economy/environmentalaccounts/bulletins/uknaturalcapitalaccounts/latest>)
a tha a’ tuairmseachadh luach airgid seirbheisean eag-shiostaim — bho chur-seachad coille gu buannachdan slàinte àite uaine bailteil
gu stòradh carboin talamh-mòna — a’ cleachdadh an aon fhrèam Cunntasan Nàiseanta a thathas a’ cleachdadh airson calpa cinnidh, gus
an urrainn do chalpa nàdarrach a bhith air an aon bhileag-chothromachaidh ri rathaidean, togalaichean agus uidheam. Tha stiùireadh
Enabling a Natural Capital Approach (ENCA) aig HM Treasury, a tha na leasachadh don Green Book
(<https://www.gov.uk/government/publications/enabling-a-natural-capital-approach-enca-guidance>),
a’ sònrachadh mar a bu chòir do luchd-measaidh cosgaisean is buannachdan àrainneachdail a luachadh ann an cùisean gnìomhachais, gus
an gabh sgeama rathaid a sgrios seann choille no sgeama tuilteach a thilleas boglach a choimeas ann an cumhachan airgid cunbhalach
seach gu bheil àireamh aig fear agus earrann de chuingealachaidhean aig an fhear eile.

## A’ mhatamataig

```
Luach maoin seirbheis eag-shiostaim = NPV de shruth nan seirbheisean a bheir a’ mhaoin

Luach na maoine = Σ (t = 1 gu T) [luach sruth seirbheis bliadhnail_t / (1 + r)^t]

far a bheil:
  luach sruth seirbheis_t = meud na seirbheis sa bhliadhna t × luach aonaid
                          (m.e. tadhalan cur-seachad × luach gach tadhal;
                           tonnaichean carboin air an tasgadh × prìs carboin)
  r = ìre lasachaidh (ìre lasachaidh shòisealta an Green Book — faic
      [ìre lasachaidh shòisealta](../ìre-lasachaidh-shòisealta/))
  T = an sgàirneach-ùine anns a bheil dùil gun toir a’ mhaoin an t-seirbheis
```

Is e seo an aon structar luach làithreach glan a thathas a’ cleachdadh airson calpa cinnidh a luachadh no tasgadh poblach sam bith
a mheasadh fo [mheasadh Green Book](../measadh-a-green-book/) — is e tabhartas cunntasachd calpa nàdarrach meudan fiosaigeach earbsach
agus luachan aonaid a thoirt seachad airson sheirbheisean a bha roimhe air am prìsean aig neoni.

## Eisimpleir obrach

**Coille bhailteil, luach cur-seachaid**: tha coille 50 heactar a’ faighinn tuairmse de 80,000 tadhal cur-seachaid sa bhliadhna, gach
fear air a luachadh (tro dhòigh cosgais-siubhail no roghainn-ràitichte — faic
[luachadh roghainn fhoillsichte](../luachadh-roghainn-fhoillsichte/) agus
[luachadh roghainn ràitichte](../luachadh-roghainn-ainmichte/)) aig £3 gach tadhal. Tha dùil gun lean a’ choille a’ toirt na seirbheis seo
airson 50 bliadhna, air a mheasadh aig ìre lasachaidh de 3.5%.

```
Luach cur-seachaid bliadhnail = 80,000 × £3 = £240,000/bliadhna

NPV thairis air 50 bliadhna aig 3.5% ≈ £240,000 × factar bliadhnachd(3.5%, 50 bliadhna)
factar bliadhnachd(3.5%, 50) ≈ 21.4

Luach na maoine ≈ £240,000 × 21.4 ≈ £5,136,000
```

**A’ cur stòradh carboin ris**: bidh an aon choille a’ tasgadh tuairmse de 400 tonna CO2 sa bhliadhna, air a luachadh aig prìs carboin
neo-mhalairteach an riaghaltais de timcheall air £75/tonna (mar shamhla — cleachd na luachan carboin as ùire a dh’fhoillsich BEIS/DESNZ
airson measadh beò).

```
Luach carboin bliadhnail = 400 × £75 = £30,000/bliadhna
NPV thairis air 50 bliadhna aig 3.5% ≈ £30,000 × 21.4 ≈ £642,000

Luach iomlan maoin na coille (cur-seachad + carbon) ≈ £5,136,000 + £642,000
                                                     ≈ £5,778,000
```

Tha seo mus cuir sinn seirbheisean lùghdachadh tuilteach, bith-iomadachd no càileachd adhair ris, a tha stiùireadh ENCA ag iarraidh air
luchd-measaidh a bhreithneachadh cuideachd — tha an t-iomlan a dh’aona ghnothach na ìre as ìsle, chan e mullach.

## Ceangal ri innleadaireachd bathar-bog

- Faodaidh siostaman àrainneachdail is stiùireadh mhaoinean airson ùghdarrasan ionadail is buidhnean (pàircean, mòr-rathaidean,
  buidhnean uisge) clàr calpa nàdarrach a cheangal ri taobh a’ chlàir mhaoin fhiosaigich aca, a’ cleachdadh an aon phàtran sruth-seirbheis-
  uair-luach-aonaid ri [stòr-dàta chosgaisean aonaid](../stòran-chosgaisean-aonaid/) sam bith eile a chumas a’ bhuidheann.
- Seach gu bheil NPV calpa nàdarrach mothachail air an ìre lasachaidh (faic factar bliadhnachd an eisimpleir obrach), bu chòir do
  inneal sam bith a tha ga h-obrachadh a-mach an ìre agus an sgàirneach-ùine a nochdadh mar chuir-a-steach faicsinneach, gun an
  càradh falaichte — an aon phrionnsabal follaiseachd a tha air a chòmhdach fo
  [cothromachd eadar-ghinealach agus lasachadh seasmhachd](../co-ionannachd-eadar-ghinealaichean-agus-lasachadh-seasmhachd/).
- Tha cunntasan calpa nàdarrach a’ sìor fhàs nan cuir-a-steach a dh’fheumar do earrannan buaidh àrainneachdail cùis ghnìomhachais
  [measaidh Green Book](../measadh-a-green-book/); bu chòir do sgioba lìbhrigidh a tha a’ togail innealan chùisean gnìomhachais
  cunntasan an ONS agus luachan aonaid ENCA a làimhseachadh mar dhàta iomraidh ri chur ann, chan ann rud a dh’ath-obraicheas
  luchd-measaidh bho thùs gach turas.

## Cunnartan

- **Luachan seirbheisean eag-shiostaim a tha a’ dol thairis air a chèile a chunntadh dà uair** — faodaidh luach cur-seachaid agus luach
  bith-iomadachd airson an aon làraich an aon dàta deònachd-pàighidh bhunasach a cho-roinn; tha stiùireadh ENCA a’ toirt rabhadh
  gu follaiseach an aghaidh luachan a thàinig bho ionnsramaidean sgrùdaidh a tha a’ dol thairis air a chèile a chur ri chèile.
- **Luach maoin calpa nàdarrach a làimhseachadh mar rud stòite** — bidh sruthan sheirbheisean ag atharrachadh le gnàth-shìde,
  riaghladh agus cuideam cleachdadh fearainn; chan e feart maireannach den làrach a th’ ann an luach carboin is lùghdachadh tuilteach
  na coille san deichead seo.
- **Luachan aonaid cuibheasach nàiseanta a chleachdadh airson co-dhùnadh gu math ionadail** — tha luach cur-seachaid gu math eadar-dhealaichte
  aig heactar de choille bhailteil ruigsinneach agus heactar de àrd-thalamh iomallach; tha stiùireadh ENCA a’ moladh luachan ionadail no
  sònraichte don làrach far a bheil iad rim faighinn seach tuiteam air ais air cuibheasachdan nàiseanta.

## Tùsan

- ONS. "UK natural capital accounts."
  <https://www.ons.gov.uk/economy/environmentalaccounts/bulletins/uknaturalcapitalaccounts/latest>
- HM Government. "A Green Future: Our 25 Year Plan to Improve the Environment." (2018)
- HM Treasury / Defra. "Enabling a Natural Capital Approach (ENCA): guidance."
  <https://www.gov.uk/government/publications/enabling-a-natural-capital-approach-enca-guidance>
