# Co-ionannachd eadar ghinealaichean agus lasachadh seasmhachd

Tha lasachadh chosgaisean is bhuannachdan san àm ri teachd air ais gu luach làithreach na chleachdadh àbhaisteach ann am measadh poblach — faic an [ìre lasachaidh shòisealta](../ìre-lasachaidh-shòisealta/) — ach bidh ìre lasachaidh dheimhinneach sam bith, air a mheasgachadh thar deicheadan no linntean, a’ lùghdachadh an àm ri teachd fad às gu neoni ann an cumhaichean an-diugh. Airson co-dhùnaidhean le builean ceud bliadhna no nas fhaide air adhart — atharrachadh gnàth-shìde, sgudal niùclasach, call bith-iomadachd, seasmhachd peinnseanan — bidh am fìrinn matamataigeach sin a’ fàs beusach: faodaidh lasachadh àbhaisteach cron tubaisteach air ginealaichean san àm ri teachd a dhèanamh coltach, ann an cumhaichean luach làithreach, gu bheil e cha mhòr gun fhiach a sheachnadh.

## Carson a tha e cudromach

Bidh co-aontar Ramsey, a thàinig bho Frank Ramsey ann an 1928, a’ sgaradh ìre lasachaidh gu dà phàirt: roghainn ùine fhìor-ghlan (δ, cho mòr is a b’ fheàrr leinn an-dràsta seach nas anmoiche, neo-eisimeileach bho bheairteas) agus buaidh fàs beairteis (η×g, cho mòr is a bhios sinn a’ lasachadh air sgàth gu bheil dùil gum bi ginealaichean san àm ri teachd nas beairtiche, agus mar sin gu bheil punnd a bharrachd a’ cunntadh nas lugha dhaibh). Tha ìre lasachaidh fad-ùine àbhaisteach Green Book na RA air a thogail air a’ cho-aontar seo agus a’ leantainn clàr *a tha a’ lùghdachadh* seach ìre rèidh — dealbhadh stèidhichte air obair Martin Weitzman air “lasachadh gamma”, a tha a’ sealltainn nuair a tha ìre lasachaidh an àm ri teachd fhèin neo-chinnteach, gu bheil an ìre co-ionann-cinnteachd a bu chòir dhut a chur an sàs a’ lùghdachadh gu matamataigeach thar ùine, oir bidh suidheachaidhean ìre ìosal a’ faighinn làmh an uachdair mar as fhaide a choimheadas tu air adhart. Thug Lèirmheas Stern air Eaconamachd Atharrachadh Gnàth-shìde (2006), air a stiùireadh le Sir Nicholas Stern, an deasbad beusach nas fhaide: bha Stern ag argamaid gum bu chòir roghainn ùine fhìor-ghlan a shuidheachadh faisg air neoni (chleachd e δ ≈ 0.1%, a’ nochdadh dìreach cothrom beag de thubaist a thig gu crìch air sìobhaltachd, chan e fìor roghainn airson an latha an-diugh seach an àm ri teachd), a’ toirt a-mach ìre lasachaidh èifeachdach tòrr nas ìsle na cleachdadh àbhaisteach Green Book agus, a rèir sin, cùis tòrr nas motha an-diugh airson gnìomh gnàth-shìde. Bha luchd-càineadh (gu sònraichte William Nordhaus) ag argamaid gun robh ìre faisg air neoni Stern dìonach gu beusach ach neo-chòrdail ri giùlan sàbhalaidh is tasgaidh a chaidh fhaicinn dha-rìribh. Chan e nota-bonn teicnigeach a th’ anns an eas-aonta — is e an aon adhbhar as motha gun urrainn dà eaconamaiche a tha cho teann-chruinn ri chèile ruighinn air co-dhùnaidhean gu math eadar-dhealaichte air cia mheud a bu chòir dhan ghinealach làithreach ìobairt airson an àm ri teachd, agus is e sin an adhbhar a dh’fheumas bathar-bog a tha a’ toirt taic do mheasadh tasgaidh poblach fad-ùine a bharailean lasachaidh a nochdadh seach an adhlacadh ann am bunait chlàr-bhùird.

## A’ mhatamataig

```
Co-aontar Ramsey:   r = δ + η × g

  r = ìre lasachaidh shòisealta
  δ = roghainn ùine fhìor-ghlan (ìre mì-fhoighidinn, neo-eisimeileach bho bheairteas)
  η = elasticity feum iomallach caitheimh (luach lùghdaichte
      caitheamh a bharrachd mar a dh’fhàsas daoine nas beairtiche)
  g = ìre fàs ris am bi dùil de chaitheamh gach ceann

Clàr lùghdachaidh fad-ùine Green Book (timcheall, bannan foillsichte làithreach):
  Bliadhnaichean 0–30:    3.5%
  Bliadhnaichean 31–75:   3.0%
  Bliadhnaichean 76–125:  2.5%
  Bliadhnaichean 126–200: 2.0%
  Bliadhnaichean 201–300: 1.5%
  Bliadhnaichean 301+:    1.0%

Paramadairean Lèirmheas Stern: δ ≈ 0.1%, η = 1, g ≈ 1.3%  → r ≈ 1.4%
```

## Eisimpleir obrach

**Luach an-diugh de £1 de chron a chaidh a sheachnadh ann an 100 bliadhna**, fo thrì rèimean lasachaidh:

```
Ìre ghoirid-ùine rèidh Green Book (3.5%, air a chumail seasmhach airson 100 bliadhna):
  PV = 1 / (1.035)^100 ≈ 1 / 31.19 ≈ £0.032   (3.2 sgillinn)

Clàr lùghdachaidh Green Book (3.5% airson bliadhnaichean 1–30, 3.0% airson bliadhnaichean 31–75,
2.5% airson bliadhnaichean 76–100):
  factar(1–30)  = 1.035^30  ≈ 2.807
  factar(31–75) = 1.03^45   ≈ 3.782
  factar(76–100)= 1.025^25  ≈ 1.854
  factar iomlan ≈ 2.807 × 3.782 × 1.854 ≈ 19.68
  PV = 1 / 19.68 ≈ £0.051   (5.1 sgillinn)

Roghainn ùine fhìor-ghlan faisg air neoni stoidhle Stern (r ≈ 1.4% rèidh):
  PV = 1 / (1.014)^100 ≈ 1 / 3.997 ≈ £0.250   (25.0 sgillinn)
```

Tha an aon £1 de chron a chaidh a sheachnadh ceud bliadhna bho seo luach 3.2p, 5.1p, no 25p an-diugh a-rèir dìreach dè an gnàthachas lasachaidh a thathar a’ cleachdadh — raon timcheall air ochd-fhillte a tha a’ co-dhùnadh am bi pròiseact lasachaidh gnàth-shìde le cosgais mhòr aig an toiseach agus buannachd ceud bliadhna air adhart a’ glanadh bàr NPV deimhinneach idir. Is e seo am meacanaig air cùl prìomh rabhaidh a’ chuspair: aig ìre rèidh sam bith le brìgh dheimhinneach, thèid cron fad às san àm ri teachd a dhubhadh a-mach gu àireamhachail às a’ mheasadh, ge bith dè cho dona a tha e dha-rìribh.

## Ceangal ri innleadaireachd bathar-bog

- Bu chòir do dh’inneal measaidh fad-ùine no cùis-ghnìomhachais sam bith (bun-structar, atharrachadh do ghnàth-shìde, modaladh peinnseanan) clàr *lùghdachaidh* Green Book a chur an gnìomh, chan e ìre rèidh singilte — bidh bunait ìre rèidh a’ cur a-steach gu sàmhach claonadh an aghaidh an àm ri teachd tòrr nas làidire na tha stiùireadh làithreach riaghaltas na RA a’ sònrachadh.
- Bu chòir ìre lasachaidh agus fàire a bhith an-còmhnaidh nan paramadairean follaiseach, a ghabhas sgrùdadh ann am bathar-bog measaidh, le mothachalachd an àireamhachaidh dhaibh air a shealltainn gu soilleir (mar anns an eisimpleir obrach gu h-àrd) — le bhith ag adhlacadh na h-ìre ann am faidhle rèiteachaidh, bidh thu a’ toirt cuireadh dhan “roghainn bheusach fhalaichte” air a bheil deasbad Stern-Nordhaus a’ toirt rabhadh; tha seo a’ dol còmhla ris a’ phuing follaiseachd a rinneadh ann an [cunntasachd calpa nàdarra](../cunntasachd-calpa-nàdarrach/) agus tha e fon chuspair [ìre lasachaidh shòisealta](../ìre-lasachaidh-shòisealta/) san fharsaingeachd.
- Far a bheil buannachdan prògraim gu soilleir eadar-ghinealach (dìon thuiltean, ath-nuadhachadh calpa nàdarra, bun-structar didseatach fad-ùine), bu chòir do [anailis cosgais-buannachd shòisealta](../mion-sgrùdadh-cosgais-is-buannachd-shòisealta/) toraidhean aithris fo dhà bharail lasachaidh co-dhiù (àbhaisteach Green Book agus cùis mhothachaidh ìre ìosal) seach tuairmse pong singilte, gus am faic luchd-co-dhùnaidh mar a ghluaiseas roghainn ìre lasachaidh a-mhàin am freagairt.

## Cunnartan

- **A’ taisbeanadh aon NPV lasaichte gun raon mhothachaidh** — leis cho mòr is a dh’atharraicheas ìre lasachaidh a-mhàin am freagairt airson pròiseactan fad-ùine, bidh NPV aon-ìre a’ cur cus air cruinneas; aithris an-còmhnaidh raon a’ sìneadh air a’ char as lugha thar inbhe Green Book agus suidheachadh ìre ìosal.
- **A’ cur na h-ìre rèidh ghoirid-ùine (3.5%) an sàs ann am measadh ioma-linntean** — tha stiùireadh Green Book fhèin a’ sònrachadh a’ chlàir lùghdachaidh dìreach air sgàth gun deach breith nach robh an ìre rèidh iomchaidh nas fhaide na timcheall air 30 bliadhna; le bhith ga chleachdadh co-dhiù bidh thu a’ dèanamh dìmeas air cosgaisean fad-ùine.
- **A’ làimhseachadh δ (roghainn ùine fhìor-ghlan) mar pharamadair teicnigeach a-mhàin** — tha luach faisg air neoni Stern agus luach follaiseach nas àirde Green Book le chèile dìonach dìreach mar dhreuchdan beusach air dè an cuideam a tha an latha an-diugh a’ fiachan dhan àm ri teachd, chan e àireamhan “ceart” no “ceàrr” gu h-empirigeach; bu chòir do bhathar-bog am barail fhaicinn seach aon fhigear a thaisbeanadh mar gu bheil e ceart gu cuspaireil.

## Tùsan

- Stern N. "The Economics of Climate Change: The Stern Review." Cambridge University Press, 2006.
- Ramsey FP. "A Mathematical Theory of Saving." The Economic Journal, 1928.
- Weitzman ML. "Gamma Discounting." American Economic Review, 2001.
- HM Treasury. "The Green Book: Central Government Guidance on Appraisal and Evaluation" (Annex 6,
  discount rate schedule).
- Nordhaus WD. "A Review of the Stern Review on the Economics of Climate Change." Journal of
  Economic Literature, 2007.
