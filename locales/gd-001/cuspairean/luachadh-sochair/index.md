# Luachadh sochair (WELLBY)

Bidh luachadh sochair a’ cur prìs air buaidh poileasaidh gu dìreach ann an cùmhnantan toileachas-beatha, a’ cleachdadh an WELLBY
(bliadhna beatha air a cur air dòigh airson sochair) mar aonad — tha aon WELLBY co-ionann ri atharrachadh aon phuing air sgèile
toileachas-beatha 0–10, air a chumail airson aon bhliadhna. Is e an roghainn eile a tha HM Treasury air aontachadh gu h-oifigeil
seach a bhith ag airgeadachadh gach buannachd tro dheònachd-pàighidh.

## Carson a tha e cudromach

Thug “Wellbeing guidance for appraisal: supplementary Green Book guidance” aig HM Treasury (2021,
<https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>)
dàta sochair fhèin-aithriste gu foirmeil a-steach do mheasadh riaghaltais mheadhanaich, a’ toirt dòigh do luchd-anailis builean a luachadh — ceangal sòisealta,
slàinte inntinn, sàbhailteachd, com-pàirteachas catharra — a tha dòighean
[roghainn ainmichte](../luachadh-roghainn-ainmichte/) agus [roghainn nochdte](../luachadh-roghainn-fhoillsichte/)
a’ strì ri prìseadh gu creidsinneach, oir tha daoine gu tric nan droch ro-ghairmeadairean air dè cho mòr ’s a thig buaidh air an toileachas beatha aca le
nì sam bith. Tha an stiùireadh, a chaidh a leasachadh còmhla leis an
What Works Centre for Wellbeing, a’ suidheachadh luach airgid molta gach WELLBY — £13,000 (prìsean 2021,
ath-sgrùdaichte bho àm gu àm) — a thàinig bhon dàimh a chaidh fhaicinn ann an sgrùdaidhean sochair mòra
(gu h-àraidh Annual Population Survey aig ONS, a tha air na ceithir ceistean sochair ONS4 a chur bho
2011) eadar teachd-a-steach agus toileachas-beatha, a’ toirt ìre tionndaidh air ais gu notaichean do luchd-anailis nuair a tha feum air coimeas airgeadaichte an aghaidh measaidhean Green Book eile.

Tha an dòigh cudromach oir tha i a’ tionndadh an loidsig luachaidh àbhaisteach: an àite faighneachd dè phàigheadh daoine
airson buil (roghainn ainmichte) no luach a thoirt a-mach à gnothach margaidh co-cheangailte
(roghainn nochdte), bidh i a’ tomhas buaidh a’ bhuil air toileachas-beatha aithriste gu dìreach,
a’ seachnadh a’ bheàrn eadar na their daoine gu bheil iad ag iarraidh agus na tha gam fàgail nas fheàrr dheth dha-rìribh.
Is e seo cuideachd a prìomh chrìoch — tha toileachas-beatha fèin-aithriste fo bhuaidh
atharrachaidh agus buaidhean frèamaidh a dh’fheumas neach-obrach faiceallach smachd a chumail orra.

## A’ mhatamataig

```
WELLBY = 1 phuing toileachas-beatha (sgèile 0-10) air a chumail airson 1 neach airson 1 bhliadhna

WELLBYs iomlan bho phoileasaidh =
  Σ (atharrachadh ann an sgòr toileachas-beatha) × (àireamh dhaoine fo bhuaidh)
    × (fad ann am bliadhnaichean, air a lasachadh aig ìre lasachaidh shòisealta)

Luach air a h-airgeadachadh = WELLBYs iomlan × luach gach WELLBY
  (luach molta HM Treasury: £13,000 gach WELLBY, prìsean 2021,
   fo ath-sgrùdadh ùineail — thoir sùil air an stiùireadh làithreach mus cleachd thu)
```

Tha seo eadar-dhealaichte bhon
[bhliadhna beatha air a cur air dòigh airson sochair](../bliadhnaichean-beatha-air-an-cur-air-dòigh-airson-sochair/) ann an eaconamas slàinte, a tha mar as trice air a acarachadh ri sgèilean
càileachd beatha co-cheangailte ri slàinte (EQ-5D agus an leithid) seach toileachas-beatha coitcheann;
tha an dithis co-cheangailte ach chan eil iad iomlaideach, agus bu chòir do mheasaidhean Green Book a bhith soilleir mu dè an sgèile
agus an dòigh tarraing a tha air cùl figear WELLBY a chaidh aithris.

## Eisimpleir obrach

**Ùghdarras ionadail**: bidh comhairle a’ ruith sgeama càirdeis coimhearsnachd airson luchd-còmhnaidh aosta aonaranach,
a’ frithealadh 400 neach. Tha sgrùdadh sochair ro/às dèidh a’ cleachdadh ceist toileachas-beatha ONS4 a’ sealltainn
cuibheasachd sgòr nan com-pàirtichean ag èirigh bho 5.8 gu 6.5 — buannachd 0.7 puing — air a cumail fad
ùine mhaoinichte 2 bhliadhna a’ phrògraim.

```
WELLBYs a chaidh a chruthachadh = 400 neach × 0.7 puing × 2 bhliadhna = 560 WELLBY
Luach air a h-airgeadachadh = 560 × £13,000 = £7.28m
Cosgais prògraim = £450,000 thar 2 bhliadhna

Co-mheas buannachd-cosgais ≈ £7.28m / £0.45m ≈ 16:1
```

Bu chòir co-mheas cho àrd seo sgrùdadh a thoirt, chan e comharrachadh — tha stiùireadh sochair an Green Book
a’ toirt rabhadh gu soilleir an aghaidh a bhith a’ gabhail buannachdan fèin-aithriste sampaill bhig aig an luach aghaidh gun
dearbhadh airson buaidhean taghaidh (an do chaidh dìreach an fheadhainn as sòisealta, as dualtaiche a thighinn air adhart, a-steach
dhan sgeama?) agus gun bhuidheann coimeis; bhiodh measadh a chaidh a dhealbhadh gu math a’ toirt às atharrachadh
suidheachadh eile a chaidh fhaicinn ann an neo-chom-pàirtichean, faic [anailis an t-suidheachaidh eile](../anailis-an-t-suidheachaidh-eile/).

**Riaghaltas nàiseanta**: bidh coimeas eadar dà phrògram cosnaidh a’ cleachdadh WELLBYs seach tuachanan a-mhàin a’ glacadh
gu bheil cosgais sochair aig cion-cosnaidh nas fhaide na teachd-a-steach a chaidh a chall — lorgaidh rannsachadh sochair na RA gu cunbhalach gu bheil cion-cosnaidh a’ lùghdachadh
toileachas-beatha barrachd na bhiodh call teachd-a-steach leis fhèin ag ro-innse, air sgàth buaidhean neo-ionmhasail call structair, adhbhair, agus conaltradh
sòisealta. Bhiodh prògram a chaidh a mheasadh air buannachd tuachain a-mhàin a’ fo-luachadh a luach an taca ri fear a chaidh a mheasadh cuideachd air WELLBYs.

## Ceangal ri innleadaireachd bathar-bog

Is ainneamh a ruigeas luachadh sochair sgiobaidhean innleadaireachd gu dìreach, ach bidh e a’ cumadh dè tha “soirbheachas” air a mhìneachadh mar airson
toraidhean roinn shòisealta is seirbheis phoblach — bu chòir do dh’ùrlar càirdeis didseatach, inneal roghnachaidh slàinte inntinn, no ùrlar
coimhearsnachd airson luchd-còmhnaidh aonaranach a bhith an dùil gun tèid a bhuaidh a thomhas mar seo aig a’ cheann thall, rud a tha a’ ciallachadh gum feum anailis toraidh glacadh *cò* a tha air a ruighinn agus
airson *cia fhad*, chan e dìreach cunntasan cleachdaidh. Tog ionnsramaid sgrùdaidh sochair (ONS4 no co-fhreagairtean dearbhte) a-steach do mheasadh seirbheis bhon toiseach seach
a bhith ga bholtadh air an dèidh; bidh ath-fhoghlaim bunait sochair às dèidh dhan t-seirbheis tòiseachadh a’ call
an coimeas ro/às dèidh gu tur. Faic [builean an aghaidh toraidhean](../builean-an-aghaidh-toraidhean/) agus
[dòighean measaidh buaidh](../dòighean-measaidh-buaidh/).

## Cunnartan

- **Gun suidheachadh eile no buidheann coimeis.** Bidh buannachd sochair ro/às dèidh gun smachd air na bhiodh air tachairt
  co-dhiù a’ cur cus ri buaidh a’ phrògraim; faic
  [anailis an t-suidheachaidh eile](../anailis-an-t-suidheachaidh-eile/) agus
  [buaidh a bharrachd agus cuideam marbh](../buaidh-a-bharrachd-agus-cuideam-marbh/).
- **Sampaill bheaga, fèin-thaghte.** Tha sgrùdaidhean sochair air com-pàirtichean prògraim a thagh a-steach buailteach
  do fhiaradh taghaidh — bha na daoine a thàinig a-steach agus a dh’fhuirich dualtach a bhith a’ dol an taobh
  nas fheàrr mar-thà.
- **A’ làimhseachadh tionndadh £-gach-WELLBY mar rud mionaideach.** Is e gnàthasan poileasaidh a tha anns an luach airgeadaichte
  a thàinig à ais-tharraingean teachd-a-steach–sochair, chan e prìs margaidh; cleachd e airson co-chosmhaileachd thar
  mheasaidhean Green Book, chan e mar thagradh mu dè “as fhiach” sochair.
- **A’ measgachadh WELLBYs le QALYs co-cheangailte ri slàinte.** Bidh an dithis a’ tomhas bun-bheachdan eadar-dhealaichte air
  sgèilean eadar-dhealaichte; faic [bliadhnaichean beatha air an cur air dòigh airson sochair](../bliadhnaichean-beatha-air-an-cur-air-dòigh-airson-sochair/) airson an
  eadar-dhealachadh eaconamas slàinte agus na dèan cuibheasachd dhen dithis còmhla.

## Tùsan

- HM Treasury. "Wellbeing guidance for appraisal: supplementary Green Book guidance." 2021.
  <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>
- What Works Centre for Wellbeing. <https://whatworkswellbeing.org/>
- Office for National Statistics. "Personal well-being in the UK" (ONS4 measures).
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing>
- Fujiwara D, et al. "Wellbeing Valuation: A Nascent Field?" LSE / Simetrica research summaries.
