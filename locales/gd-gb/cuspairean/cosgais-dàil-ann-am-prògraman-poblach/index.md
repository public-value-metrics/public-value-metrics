# Cosgais dàil ann am prògraman poblach (CoD)

’S e Cosgais Dàil (Cost of Delay) an luach poblach a thèid a chall gach aonad ùine nach eil prògram, seirbheis, no atharrachadh siostaim *fhathast* air a lìbhrigeadh. Is e am meatrach drochaid prìomh den chuantal seo de chuspairean: tha e a’ tionndadh “shleamhnaich an latha beò sia mìosan” gu not gach seachdain, no gu WELLBYs gach seachdain, gus an gabh dàil a dheasbad san aon airgead ris a’ chùis-ghnìomhachais fhèin.

## Carson a tha e cudromach

Bidh riaghailt Reinertsen — “mura tomhais thu ach aon rud, tomhais Cosgais Dàil” — a’ siubhal don riaghaltas cha mhòr gun atharrachadh, oir tha prògraman poblach gu h-annasach fosgailte dha: thathar ag aontachadh chùisean-gnìomhachais an aghaidh sruth buannachd ro-innse, ach chan eil an sruth a’ tòiseachadh a’ sruthadh ach aig an latha beò, agus is e gach seachdain de shleamhnachadh seachdain de luach a chaidh a thoirt seachad nach cuir duine prìs air air clàr cunnartan. Tha sgrùdadh a-rithist is a-rithist an National Audit Office air cur a-mach Universal Credit (faic na h-aithisgean “Rolling Out Universal Credit” aca, <https://www.nao.org.uk/>) a’ sealltainn a’ phàtrain: bha sleamhnachadh clàr-ama air a leantainn agus air a thoirt air aithris, ach is ann ainneamh a chaidh cosgais nota-gach-seachdain a bhith *fhathast gun* an siostam ath-leasaichte a lìbhrigeadh don ath bhuidheann de luchd-tagraidh a thaisbeanadh mar fhigear ceann-aithris, ged is e an àireamh a bu chòir a bhith air prìomhachasachadh agus àrdachadh a stiùireadh. Às aonais figear CoD, tha prògram air dàil a’ coimhead mar dhuilgheadas clàr-ama do bhòrd lìbhrigidh; le fear, tha e na dhuilgheadas call luach don oifigear cunntasachd.

## A’ mhatamataig

```
CoD = buannachd gach aonad ùine a chaidh a thoirt seachad fhad ’s nach eil e air a lìbhrigeadh   (£/seachdain no WELLBYs/seachdain)

Call iomlan dàil = CoD × fad na dàil

Sruthan buannachd ri chur ri chèile airson prògraman poblach:
  sàbhaladh a bheir airgead ma sgaoil   (lùghdachadh foill/mearachd, cosgaisean sealach air an seachnadh)
+ comas neo-airgid saor            (uairean neach-cùise/oifigeir × cosgais làn)
+ buannachd sunnd                  (WELLBYs × £13,000/WELLBY, stiùireadh leasachail
                                    sunnd Green Book HMT, prìsean 2019)
```

Airson seirbheisean a tha an aghaidh shaoranach, cuir luach ann an sunnd a bharrachd air airgead — faic [bliadhnaichean beatha air an ceartachadh airson sunnd](../bliadhnaichean-beatha-air-an-cur-air-dòigh-airson-sochair/) airson an aonad bunaiteach, agus [cosgais cothrom ann an caitheamh poblach](../cosgais-cothrom-ann-an-caitheamh-poblach/) airson na dh’fhaodadh an not air dàil a mhaoineachadh air dhòigh eile.

## Eisimpleir obrach

**Ùghdarras ionadail**: bidh àrdachadh siostaim sochair-taigheadais a’ gearradh mearachd cus-pàighidh le £150/tagradh/bliadhna thar 20,000 tagradh beò.

```
Buannachd bhliadhnail = 150 × 20,000 = £3,000,000/bliadhna
CoD = 3,000,000 / 52 ≈ £57,700/seachdain
Bidh dàil cur an gnìomh 12 mìosan a’ cosg 52 × 57,700 ≈ £3,000,000 ann am mearachd a ghabhadh seachnadh.
```

**Buidheann riaghaltas meadhanach**: tha seirbheis measaidh sochair ciorraim, air a lìbhrigeadh sia mìosan (26 seachdainean) nas anmhoire na bha dealbhaichte, a’ ciallachadh gu bheil 200,000 tagraiche/bliadhna a’ feitheamh trì seachdainean nas fhaide aig cuibheasachd airson co-dhùnadh. Tha gach seachdain a bharrachd de dh’neo-chinnt ionmhasail air a mhodaladh mar bhuaidh −0.0018 WELLBY (puing riarachaidh beatha):

```
Call WELLBY gach tagraiche = 3 × 0.0018 = 0.0054
Call WELLBY bliadhnail = 200,000 × 0.0054 = 1,080 WELLBYs/bliadhna
CoD_sunnd = 1,080 / 52 ≈ 20.8 WELLBYs/seachdain
CoD_airgead = 20.8 × £13,000 ≈ £270,000/seachdain de luach sunnd
```

Mar sin “cosgaidh” dàil 26 seachdainean timcheall air 540 WELLBYs — fiach mu £7 millean aig luachadh sunnd Green Book — ag ath-fhrèamadh ceann-latha beò a chaidh a chall mar thachartas sochair shaoranach, chan e nota-bròige ann an stiùireadh phròiseactan.

## Ceangal ri innleadaireachd bathar-bog

’S e CoD a tha a’ dèanamh [meatrachan DORA](../meatrach-dora-airson-luach-poblach/) agus [meatrachan sruthaidh](../meatrach-sruthadh-ann-an-libhrigeadh-an-riaghaltais/) so-leughaidh gu h-ionmhasail: ùine-stiùiridh sa phìoban × CoD an t-airgead (no sunnd) a loisgear ann an ciuthan feitheimh mus ruig e saoranach a-chaoidh. Gu sònraichte:

- **Prìomhachasachadh**: rangaich cùl-chlàr a rèir CoD ÷ fad seach a rèir sinnsireachd luchd-ùidh — co-ionann innleadaireachd bathar-bog ri riatanas Green Book roghainnean a mheasadh a rèir luach, chan ann a rèir cò tha ag iarraidh.
- **Solarachadh**: tha CoD aig cearcall solarachaidh frèam 12–18 mìosan; bidh a phrìsealachadh ag atharrachadh cùis cabhaig airson slighean luathaichte, agus a’ biathadh gu dìreach co-dhùnaidhean [togail an aghaidh ceannach](../togail-an-aghaidh-ceannach-san-riaghaltas/) far a bheil ùine-gu-luach na dhraibhear co-dhùnaidh.
- **Cùis bhuannachdan**: bu chòir gach figear CoD a chaidh ainmeachadh aig aontachadh nochdadh a-rithist aig [coileanadh bhuannachdan](../coileanadh-bhuannachdan/) — ma bha cosgais na dàil fìor, bu chòir a’ bhuannachd luathaichte a bhith so-thomhaiste às dèidh dhol beò.

## Cunnartan

- **A’ gabhail ri CoD sreathach**: tha luach cumadh-ceann-latha aig cuid de sheirbheisean poblach (ceann-latha cumail ris reachdail — leumaidh CoD gu ìrean cunnart cur an gnìomh às dèidh an latha, faisg air neoni roimhe) seach reata seachdaineil rèidh. Seòrsaich pròifil na cabhaig mus iomadaich thu.
- **CoD air toraidhean nach eil duine gam feumachdainn**: chan eil cosgais aig dàil ach ma tha luach aig an rud nach deach a lìbhrigeadh; chan eil CoD neoni aig siostam nach cleachd duine ge bith dè cho anmoch ’s a tha e.
- **A’ cunntadh dàil agus lasachadh dà uair**: tha an [reata lasachaidh sòisealta](../ìre-lasachaidh-shòisealta/) mar-thà a’ prìsealachadh ùine air fàire measaidh ioma-bhliadhna; is e CoD an tionndadh obrachaidh taobh a-staigh fàire airson seachdainean is mìosan. Cleachd CoD airson sleamhnachadh clàr-ama, gluasad NPV airson ath-chuairteachadh ioma-bhliadhna.

## Tùsan

- Reinertsen DG, *The Principles of Product Development Flow*, Celeritas Publishing, 2009.
- HM Treasury, Green Book supplementary guidance: wellbeing. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>
- National Audit Office, reports on Universal Credit rollout. <https://www.nao.org.uk/>
