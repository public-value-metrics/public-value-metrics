# Gluasad-àite agus buileachadh

Bidh gluasad-àite a’ tachairt nuair a thèid buannachd follaiseach prògraim a choileanadh le gnìomhachd no buannachd a thoirt air falbh à àite eile, seach rud ùr a chruthachadh — is e do bhuaidh-sa call cuideigin eile. Is e buileachadh a’ cheist cheangailte: dè na builean fhaicinn as urrainn dha d’ eadar-theachd a bhith a’ tagradh creideas dhaibh gu dligheach, nuair a chuir cleachdaichean agus factaran eile ris cuideachd. Tha an dà chuid nan atharrachaidhean àbhaisteach ann an stiùireadh measaidh roinn phoblach na RA, còmhla ri cuideam marbh agus aoidion, agus tha an dà chuid air an leum thairis gu cunbhalach le tagraidhean buaidh a tha coltach tòrr nas làidire na tha iad.

## Carson a tha e cudromach

Faodaidh sgeama thabhartasan gnìomhachais ùghdarrais ionadail a chuidicheas 50 bùth gluasad a-steach do sgìre ath-nuadhachaidh aithris “50 gnìomhachas le taic, 200 obair air an cruthachadh” — ach ma ghluais na gnìomhachasan sin dìreach bho shràid-mhòr nàbaidh seach a bhith a’ leudachadh, bha na h-obraichean air an gluasad, chan ann air an cruthachadh, agus dh’fhaodadh gu robh a’ bhuaidh lom air feadh na bhuirgh (no na sgìre) faisg air neoni. Tha Magenta Book aig HM Treasury agus an Additionality Guide a tha ann o chionn fhada a’ làimhseachadh gluasad-àite mar dhealachadh riatanach dìreach air sgàth gu bheil sgeulachdan soirbheachais ionadail cumanta fiù ’s nuair nach cruthaich iad buannachd lom nàiseanta no roinneil — tha luach dìreach air gluasad, gu tric ri call na sgìre no nan cleachdaichean a chaill e. Bidh stiùireadh measaidh nan sporan structarail (a chleachdadh airson seann phrògraman Maoin Leasachaidh Roinneil an EU agus na prògraman a ghabh àite dhaibh san dùthaich, leithid UK Shared Prosperity Fund) ga chur an dreuchd aig trì sgèilean farsaingeachd: gluasad-àite ionadail (taobh a-staigh baile), gluasad-àite roinneil (taobh a-staigh roinne), agus gluasad-àite nàiseanta (air feadh na RA), oir faodaidh eadar-theachd a bhith a bharrachd aig aon sgèile ach na fhìor ghluasad-àite aig sgèile nas fharsainge — tha prògram obrach a tharraingeas luchd-obrach à baile nàbaidh neodrach gu nàiseanta eadhon ma tha e coltach ri soirbheachas ionadail.

Is e buileachadh an duilgheadas piuthar ann an libhrigeadh le mòran chom-pàirtichean, a tha a-nis àbhaisteach ann an obair seirbheis poblach san roinn shòisealta agus eadar-bhuidhnean. Nuair a bhios trì buidhnean a’ libhrigeadh seirbheis casg dhaoine gun dachaigh còmhla, faodaidh aithisg bhliadhnail gach buidhne creideas a thagradh gu neo-eisimeileach airson an aon lùghdachadh ann an cadal-cruaidh — nuair a thèid na h-aithisgean a chur ri chèile, faodaidh a’ bhuaidh a thathar a’ tagradh a dhol thairis air an atharrachadh fìor a chaidh fhaicinn, uaireannan le iomadan. Tha stiùireadh a’ Magenta Book mu anailis cur-ris ann gu sònraichte oir tha buileachadh air thuaiream do aon chleachdaiche gu tric do-dhèanta ann an libhrigeadh le iomadh buidheann, agus is e am freagairt onarach gu tric “chuir sinn ris a’ bhuil seo” seach “dh’adhbharaich sinn a’ bhuil seo.”

## A’ mhatamataig

Gluasad-àite mar phàirt de shreath àbhaisteach na buaidh lom (faic
[buaidh a bharrachd agus cuideam marbh](../buaidh-a-bharrachd-agus-cuideam-marbh/) airson an t-sreath shlàn):

```
Buaidh bharrachd lom = Buil gharbh − Cuideam marbh − Gluasad-àite − Aoidion, × Iomadachaiche

Ìre gluasad-àite = buannachd/gnìomhachd air a tharraing bho àite eile
                     / iomlan na buannachd/gnìomhachd gharbh a chaidh fhaicinn
```

Buileachadh, far a bheil iomadh cleachdaiche a’ cur ri aon bhuil, mar as trice air a chur an cèill mar chuibhreann cur-ris seach ceudad pongail, oir chan urrainnear a thomhas gu cumanta leis an aon chruinneas ri gluasad-àite:

```
Cuibhreann so-bhuileachaidh ≈ f(neart cur-ris adhbharail, cur-ris chleachdaichean eile,
                        factaran taobh a-muigh/co-theacsail)

Cha bu chòir do bhuaidh a thathar a’ tagradh a dhol thairis air:
  Σ (cuibhreann so-bhuileachaidh gach com-pàirtiche) ≤ 100% de lorg iomlan na buil
```

## Eisimpleir obrach

**Tabhartas ath-nuadhachaidh**: tha sgeama thabhartasan sràid-mhòr comhairle ag aithris 200 obair reic ùr air an cruthachadh san sgìre mhaoinichte. Tha rannsachadh sgrùdaidh leantainneach a’ faighinn a-mach gun tàinig 60 dhe na h-obraichean sin bho ghnìomhachasan a ghluais bho shràid-mhòr nàbaidh, gun mhaoineachadh, taobh a-staigh na h-aon bhuirgh, agus 30 eile bho shreathan nàiseanta a dh’fhosgail meuran a bhiodh air fosgladh an àiteigin san roinn ge-tà gun an tabhartas.

```
Obraichean garbha air an tagradh = 200
Gluasad-àite ionadail = 60 (air gluasad taobh a-staigh na buirgh)
Gluasad-àite roinneil = 30 (bhiodh air fosgladh san roinn co-dhiù)

Obraichean bharrachd lom (ìre na buirgh) = 200 − 60 = 140
Obraichean bharrachd lom (ìre na roinne) = 200 − 60 − 30 = 110
```

Tha an ceann-naidheachd onarach an eisimeil air an sgèile gheòlais air a bheil cùram aig an neach-maoineachaidh — bu chòir do chùis-ghnìomhachais Treasury air a measadh aig ìre nàiseanta no roinneil 110 a chleachdadh, chan e 140 na buirgh, agus gu cinnteach chan e an 200 amh.

**Seirbheis dhaoine gun dachaigh le iomadh buidheann**: bidh trì buidhnean com-pàirteach (comhairle, carthannas taigheadais, agus urras slàinte) a’ libhrigeadh còmhla seirbheis lùghdachaidh cadal-cruaidh. Thuit cadal-cruaidh san sgìre le 30 neach tron bhliadhna. Tha aithisg bhliadhnail gach buidhne fa leth ag ràdh “lùghdaich sinn cadal-cruaidh le 30” — nuair a thèid an cur ri chèile, tha na trì aithisgean a’ tagradh 90 neach air an cuideachadh, trì tursan an lùghdachadh fìor. Bheireadh anailis cur-ris a bheir cuibhreann do gach com-pàirtiche (can, 40% comhairle, 35% carthannas, 25% urras slàinte, stèidhichte air dreuchd sgrìobhte agus measadh neo-eisimeileach) aithris air 12, 10.5 agus 7.5 fa leth, a’ dèanamh suas gu ceart ris an 30 a chaidh fhaicinn.

## Ceangal ri innleadaireachd bathar-bog

Bidh gluasad-àite agus buileachadh a’ cumadh mar a bu chòir siostaman lorg buaidh agus aithris builean a dhealbhadh airson libhrigeadh ioma-làraich no ioma-chom-pàirtiche:

- Bu chòir farsaingeachd gheòlais agus bhuidhne a bhith nam raointean follaiseach, prìomh-ìre ann an deas-bhòrd buaidh sam bith — tha figear air aithris “airson na buirgh” agus an aon fhigear air aithris “airson na roinne” nan àireamhan eadar-dhealaichte, agus bidh siostam a mheasgas iad a’ toirt a-mach àireamhan nach gabh rèiteachadh aig ìre pasgain.
- Far am bi iomadh com-pàirtiche a’ libhrigeadh còmhla, bu chòir do shiostam builean cuibhreannan cur-ris a chlàradh (no co-dhiù comharra a chur air buileachadh co-roinnte) seach leigeil le modal aithris gach com-pàirtiche 100% de bhuil cho-roinnte a thagradh gu neo-eisimeileach — air dhòigh eile cuiridh cruinneachaidhean aig ìre pasgain cus air a’ bhuaidh iomlan, uaireannan gu dona.
- Tha seo a’ ceangal ri [tilleadh sòisealta air tasgadh](../tilleadh-sòisealta-air-tasgadh/) agus [aithris builean thabhartasan](../aithris-builean-thabhartasan/): bheir àireamhachadh SROI no IRIS+ a leumas thairis air gluasad-àite no a bheir cus buileachaidh do bhuilean co-roinnte co-mheas sèidte nach seas ri sgrùdadh no ath-riochdachadh.

## Cunnartan

- **A’ cur an cèill soirbheachas ionadail gun sgrùdadh air gluasad-àite nas fharsainge.** Faodaidh prògram coimhead gu math soirbheachail aig an sgèile aithris as lugha agus a bhith neodrach no eadhon àicheil aig fear nas fharsainge; innis an-còmhnaidh dè an sgèile gheòlais air a bheil am figear lom a’ buntainn.
- **A’ leigeil le gach com-pàirtiche ann an libhrigeadh co-roinnte creideas slàn a thagradh.** Mura bheil cuibhreannan cur-ris air an aontachadh agus air an sgrìobhadh sìos, cuiridh aithris cruinneachaidh thar chom-pàirtichean cus air a’ bhuaidh iomlan — dèan cinnteach nach eil tagraidhean aig ìre com-pàirtiche a’ dol thairis air an iomlan a chaidh fhaicinn.
- **A’ làimhseachadh buileachaidh mar cheudad pongail nuair is breithneachadh a th’ ann ann an da-rìribh.** Bheir anailis cur-ris, eu-coltach ri suidheachadh eile air thuaiream, tuairmse a ghabhas dìon, chan e fìrinn thomhaiste; cuir i an cèill le neo-chinnt iomchaidh seach cruinneas meallta.
- **A’ dèanamh dìmeas air gluasad-àite ann an eadar-theachdan a tha a’ coimhead a-mach chun mhargaidh.** Is e taic ghnìomhachais, sgeamaichean cosnaidh agus ath-nuadhachadh stèidhichte air àite na roinnean clasaigeach le gluasad-àite àrd; làimhsich sgrùdaidhean gluasad-àite mar rud èigneachail dhaibh, chan e roghainneil.

## Tùsan

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020), including
  guidance on contribution analysis. <https://www.gov.uk/government/publications/the-magenta-book>
- HM Treasury / Department for Business, Innovation and Skills, "Additionality Guide: A Standard
  Approach to Assessing the Additional Impact of Interventions" (3rd edition).
- European Commission, "Evalsed: The Resource for the Evaluation of Socio-Economic Development" —
  guidance on local, regional, and national displacement scales.
- Mayne J. "Contribution Analysis: An Approach to Exploring Cause and Effect." ILAC Brief No. 16,
  2008.
