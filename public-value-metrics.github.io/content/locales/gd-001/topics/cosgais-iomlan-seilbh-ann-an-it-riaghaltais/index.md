# Cosgais iomlan seilbh (TCO) ann an IT riaghaltais

Is e cosgais iomlan seilbh (total cost of ownership) làn chosgais cuairt-beatha siostaim — ceannach cuide ri gach bliadhna de ruith — air a lasachadh gu ceann-latha cumanta. Ann an IT riaghaltais, is e a’ mhearachd ro-innse as earbsaiche coimeas a dhèanamh eadar solaraichean no roghainnean a rèir prìs ceannaich a-mhàin, nuair a tha obrachadh is cumail suas mar as trice eadar leth agus ceithir còigeamhan de bhile na beatha.

## Carson a tha e cudromach

Tha Green Book aig HM Treasury ag iarraidh air a’ chùis ionmhais ann an cùis-ghnìomhachais Modail nan Còig Cùisean cosgaisean làn-bheatha a chòmhdach, chan e dìreach caiteachas calpa — ach lorg an Oifis Sgrùdaidh Nàiseanta iomadh uair roinnean ag aontachadh tasgaidhean IT an aghaidh ro-innse chosgaisean ruith neo-choileanta no dòchasach, agus an uair sin a’ faighinn a-mach fìor chosgais obrachaidh nuair a tha an siostam beò agus loidhne buidseat a’ chalpa dùinte. Bidh Còd Cleachdaidh Teicneolais Seirbheis Didseatach an Riaghaltais agus Oifis Meadhanach Didseatach is Dàta (<https://www.gov.uk/guidance/the-technology-code-of-practice>) a’ putadh roinnean a dh’ionnsaigh sgòth agus òstadh bathair gu ìre air sgàth ’s gu bheil e a’ dèanamh na cosgais leantainneach follaiseach agus so-choimeasach, seach a bhith air a falach taobh a-staigh aon fhigear solarachaidh calpa a tha a’ coimhead tarraingeach ìosal aig aontachadh agus ceàrr gu daor trì bliadhna às dèidh sin.

## A’ mhatamataig

```
TCO = Cosgais ceannaich + Σ(t=1..N) Cosgais obrachaidh bhliadhnail_t / (1+r)^t
      − luach fuigheall (air a lasachadh)

r = ìre lasachaidh shòisealta àbhaisteach Green Book HM Treasury, 3.5%/bliadhna
    (clàr ìre a’ crìonadh airson fad-ùine seach 30 bliadhna)

Co-phàirtean cosgais obrachaidh: òstadh/ceadachadh, taic is cumail suas,
càradh tèarainteachd agus cumail ri riaghailtean, ùine luchd-obrach, ath-nuadhachadh/imrich ro-innleachdaichte
```

Faic [ìre lasachaidh shòisealta](../ìre-lasachaidh-shòisealta/) airson carson a tha am factar lasachaidh cudromach thar beatha shiostaim àbhaisteach 5–10 bliadhna, agus [togail an aghaidh ceannach ann an riaghaltas](../togail-an-aghaidh-ceannach-san-riaghaltas/) airson mar a bhios TCO a’ biathadh co-dhùnadh togail/ceannach.

## Eisimpleir obrach

Bidh roinn a’ coimeas dà shiostam riaghlaidh chùisean thar 5 bliadhna aig ìre lasachaidh 3.5% an Green Book.

```
Siostam A: calpa £3,500,000, obrachadh £250,000/bliadhna
Siostam B: calpa £1,800,000 (a’ coimhead nas saoire), obrachadh £650,000/bliadhna
          (taic reiceadair nas truime agus eallach amalachaidh)

Coimeas sìmplidh air calpa a-mhàin: bidh B a’ buannachadh, £1.8M < £3.5M.

Suim fhactar lasachaidh, 5 bliadhna aig 3.5%: 0.966+0.934+0.902+0.871+0.842 ≈ 4.515

TCO_A = 3,500,000 + 250,000 × 4.515 = 3,500,000 + 1,128,750 = £4,628,750
TCO_B = 1,800,000 + 650,000 × 4.515 = 1,800,000 + 2,934,750 = £4,734,750
```

Bidh TCO a’ tionndadh a’ cho-dhùnaidh shìmplidh: tha Siostam B beagan nas daoire thar còig bliadhna aon uair ’s gu bheil cosgais obrachaidh air a lasachadh agus air a cur ri chèile, oir is e 62% (2,934,750 / 4,734,750) an cuibhreann obrachaidh aige de chosgais na beatha an aghaidh 24% aig Siostam A — eisimpleir shoilleir dhen lorg “is e cumail suas a’ mhòr-chuid dhen bhile”, air a falach gu tur le bhith a’ coimeas phrìsean sanais.

## Ceangal ri innleadaireachd bathar-bog

Is e TCO an àireamh a bu chòir smachd a chur air gach co-dhùnadh [togail an aghaidh ceannach](../togail-an-aghaidh-ceannach-san-riaghaltas/) agus gach cùis pàighidh sìos [fiachan teicnigeach](../fiachan-teicnigeach-mar-bhleith-air-luach-poblach/), oir tha riadh fiachan agus cumail suas air dàil nan dà chuid nan loidhnichean cosgais obrachaidh a bhuineas dhan aon iomlan lasaichte, ge bith an robh duine gan leantainn. Bu chòir do innleadairean a bhios a’ moladh roghainn ùrlair no reiceadair an clàr TCO slàn a nochdadh, chan e am prìs solarachaidh, oir is e am prìs solarachaidh dìreach an àireamh a chaidh cùis ionmhais an Green Book a dhealbhadh gus stad a chur air roinnean a bhith an urra rithe a-mhàin. Is e TCO cuideachd an sàr-ainmiche onarach airson breithneachaidhean [luach air airgead](../luach-air-airgead/) — bidh VFM a’ coimeas buannachd ri cosgais, agus bidh loidhne cosgais nach deach a cunntadh gu leòr a’ sèideadh gach co-mheas VFM sa chùis-ghnìomhachais.

## Cunnartan

- **Coimeas calpa a-mhàin**: a’ mhearachd solarachaidh as cumanta — a’ coimeas phrìsean liosta sholaraichean gun ro-innse cosgais obrachaidh a tha a’ freagairt airson gach roghainn.
- **A’ fàgail a-mach cosgaisean fàgail is imrich**: tha às-tharraing dàta aig deireadh cùmhnaint, ath-ùrlarachadh, agus peanasan glasaidh-a-steach reiceadair nan fhìor loidhnichean TCO nach nochd ach ainneamh sa chùis-ghnìomhachais thùsail.
- **A’ fàgail a-mach cosgais tèarainteachd is cumail ri riaghailtean**: bidh ìre càraidh, ùrachadh creideasan, agus cosgais sgrùdaidh a’ sgèileadh le aois is iom-fhillteachd an t-siostaim — faic [luach tèarainteachd cibear san roinn phoblach](../luach-tèarainteachd-cibear-san-roinn-phoblach/) — agus tha iad gu cunbhalach air am fàgail a-mach às ro-innse an obrachaidh.
- **Coimeas gun lasachadh thar roghainnean le pròifilean cosgais eadar-dhealaichte**: le bhith a’ coimeas roghainn làn chalpa ri roghainn làn obrachaidh gun lasachadh bidh e gu riaghailteach a’ fàbharachadh ge bith dè an roghainn a chuireas barrachd chosgais air dàil gu bliadhnaichean nas fhaide air adhart.

## Tùsan

- HM Treasury, *The Green Book: Central Government Guidance on Appraisal and Evaluation*, 2022. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
- Central Digital and Data Office, Technology Code of Practice. <https://www.gov.uk/guidance/the-technology-code-of-practice>
- National Audit Office, *Digital Transformation in Government*. <https://www.nao.org.uk/>
