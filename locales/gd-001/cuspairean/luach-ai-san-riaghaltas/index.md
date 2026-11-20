# Luach AI san riaghaltas

’S e luach AI san riaghaltas an riatanas gum bi aig siostam AI a thathar a’ cleachdadh ann an seirbheis phoblach an aon ìre de luach airson airgead agus luach poblach ri co-dhùnadh caitheimh sam bith eile — chan e ìre nas ìsle air sgàth ’s gu bheil e ùr, agus chan e ìre nas àirde air sgàth ’s gu bheilear ga eagal. Is e an ceist a dh’fheumas sgioba lìbhrigidh a bhith comasach air a fhreagairt mus tèid feart AI a leigeil ma sgaoil, chan ann às dèidh sin: a bheil barrachd luach aig a’ chuspair seo na tha e a’ cosg, nuair a thèid dearbhadh, sgrùdadh agus cunnart a phrìsealachadh gu h-onarach?

## Carson a tha e cudromach

Dh’fhoillsich Oifis Dàta is Didseatach Meadhanach na RA (CDDO) Frèam AI Gineadach airson an Riaghaltais ann an 2024, a’ togail air stiùireadh eadar-amail san Ògmhios 2023, agus rinn i structar dheth timcheall deich prionnsabalan a’ còmhdach dè th’ ann an AI gineadach, na buaidhean beusach aige, tèarainteachd innealan, smachdan dearbhaidh càileachd, riaghladh cuairt-beatha slàn AI gineadach, lorg fìor chùisean-cleachdaidh, co-obrachadh tarsainn an riaghaltais, follaiseachd, sgilean agus riaghladh. Tha an fhrèam ag iarraidh “smachd daonna brìghmhor” agus riaghladh cuairt-beatha slàn air sgàth ’s gu bheil dòigh fàilligidh sònraichte aig cùisean-gnìomhachais phròiseactan AI nach eil aig caitheamh IT eile: tha e furasta figear prìomh cinneasachd a chruthachadh bho phìleat agus furasta a mheudachadh, oir thèid a thomhas mus tèid cunntas a ghabhail air an eallach dearbhaidh, ceartachaidh agus sgrùdaidh a chruthaicheas an inneal. Còmhla ris an fhrèam, tha an Algorithmic Transparency Recording Standard (ATRS) ag iarraidh air buidhnean poblach clàr àbhaisteach fhoillseachadh — adhbhar, dàta a chaidh a chleachdadh, coileanadh, deuchainn cothromachd, rèiteachaidhean sgrùdaidh daonna — airson innealan algairim aig a bheil buaidh mhòr air co-dhùnaidhean mu dhaoine fa leth, a tha a’ fàgail gu bheil cosgais dearbhaidh siostam AI na chùis clàir phoblach, chan e tuairmse a-staigh a dh’fhaodas sgioba a leum thairis gu sàmhach.

## A’ mhatamataig

Tha gabhail ri AI air a mheasadh mar chur-ris air measadh àbhaisteach [luach airson airgead](../luach-air-airgead/), chan e mar ath-nuadhachadh air, le teirmean sònraichte AI air an dèanamh follaiseach seach an cur ann an aon fhigear “buannachd cinneasachd”:

```
Luach lom siostam AI =
    buannachd cinneasachd (ùine air a shàbhaladh × cosgais luchd-obrach làn)
  − cosgais cead-cleachdaidh/coimpiutaireachd
  − cosgais dearbhaidh agus sgrùdaidh daonna (a’ sgrùdadh toradh AI mus tèid
    gnìomh a dhèanamh air — chan eil seo a’ lùghdachadh gu neoni eadhon airson innealan aibidh)
  − cosgais sgrìobhaidh ATRS agus sgrùdaidh leantainneach
  − cosgais cunnart-cheartaichte cron bho mhearachdan, claon-bhreith, no hallucination,
    air a chuideachadh a rèir cò a bhios a’ giùlan a’ chron sin (cuideam cuairteachaidh)

Chan eil figear cinneasachd pìleat nach gabh a-steach teirm an sgrùdaidh
an coimeas ri bunait cosgais gnìomhachais àbhaisteach a tha mar-thà a’
gabhail a-steach ath-sgrùdadh daonna co-ionann — faic ai-productivity-in-the-public-sector
airson an smachd tomhais cinneasachd nas coileanta a tha seo a’ gabhail air iasad bhuaithe.
```

## Eisimpleir obrach

**Ùghdarras ionadail a’ cleachdadh inneal AI gineadach gus ciad fhreagairtean dreachd do dh’iarrtasan àbhaisteach mu chìs comhairle**: 25,000 iarrtas sa bhliadhna, a bha roimhe air an làimhseachadh gu tur le luchd-cùise aig cuibheasachd de 14 mionaidean gach iarrtas, cosgais luchd-obrach làn £34/uair.

```
Cosgais bunait (gun AI):
  25,000 × (14/60) × £34 = £198,333/bliadhna

Tagradh prìomh pìleat: bidh AI a’ dreachdadh freagairt ann an 90 diogan,
agus “cha dèan an neach-cùise ach sùil air agus a chur” — an ùine ùr a thagradh: 3 mionaidean
  25,000 × (3/60) × £34 = £42,500/bliadhna
  → sàbhaladh air a thagradh £155,833/bliadhna (coltas gu bheil e ath-chruthachail)

Figear làn-luchdaichte, air a thomhas às dèidh 3 mìosan beò seach ann an
cùisean deuchainn a thagh am pìleat le làimh:
  Fìor ùine sgrùdaidh + ceartachaidh gach freagairt: 6 mionaidean (feumaidh dreachdan
  fìor dheasachadh airson iarrtasan toinnte no tòcail)
  25,000 × (6/60) × £34 = £85,000/bliadhna
  Cosgais cead-cleachdaidh/coimpiutaireachd: £38,000/bliadhna
  Sgrìobhadh ATRS agus sgrùdadh cairteil claon-bhreith/càileachd: £14,000/bliadhna
  Cosgais iomlan = 85,000 + 38,000 + 14,000 = £137,000/bliadhna

Fìor shàbhaladh = 198,333 − 137,000 = £61,333/bliadhna — fìor agus fhiach a ghleidheadh,
ach gu math nas lugha na leth de thagradh prìomh a’ phìleat, agus dh’fheumadh
tomhas onarach air ùine sgrùdaidh, chan e am fear as fheàrr dhen phìleat, gus a lorg.
```

## Ceangal ri innleadaireachd bathar-bog

Seo far a bheil [ai-productivity-in-the-public-sector](../cinneasachd-ai-san-roinn-phoblach/) agus an cuspair seo a’ coinneachadh: tha na sgiobaidhean innleadaireachd a bhios a’ togail fheartan AI a-steach do sheirbheisean poblach nan sealbhadairean air an ionnsramaid a tha a’ dèanamh am “fìor” fhigear san eisimpleir obrach comasach — a’ logadh fìor ùine sgrùdaidh, astar deasachaidh eadar an dreachd agus am freagairt a chaidh a chur, agus ìre àrdachaidh, an àite earbsa a chur ann an suidheachaidhean demo a’ phìleat. Bu chòir feartan AI a mheasadh an aghaidh puing 9 dhen [digital-service-standard](../inbhe-nan-seirbheisean-didseatach/) (seirbheis tèarainte, prìobhaideachd neach-cleachdaidh) agus a chur an co-theacsa le [public-sector-cybersecurity-value](../luach-tèarainteachd-cibear-san-roinn-phoblach/) far an suathadh an t-inneal ri dàta saoranach, agus feumaidh siostam AI sam bith aig a bheil buaidh mhòr air co-dhùnaidhean mu dhaoine fa leth clàr ATRS mus gabhar ris gu bheil e deiseil airson measadh, san aon dòigh ’s a dh’fheumas seirbheis measadh [digital-service-standard](../inbhe-nan-seirbheisean-didseatach/) a chaidh seachad mus tèid i beò.

## Cunnartan

- **AI-washing**: ath-ainmeachadh fèin-ghluasad stèidhichte air riaghailtean a tha ann mar “AI” gus faighinn gu maoineachadh no aire a tha air a chuingealachadh airson gabhail ri AI, às aonais na cunnartan cruinneis no claon-bhreith a tha dha-rìribh a’ dèanamh ceart sgrùdadh a bharrachd na frèam.
- **A’ tomhas cinneasachd pìleat, chan e cinneasachd cinneasachaidh**: bidh pìleatan a’ ruith air cùisean deuchainn taghte le luchd-sgrùdaidh dealasach, mothachail; bidh cinneasachadh a’ ruith air an làn mheasgachadh de chùisean luaineach le luchd-sgrùdaidh a bhios, thar ùine, a’ leasachadh claon-bhreith fèin-ghluasaid agus a’ cur sùil gu leòr air toraidhean — tha an dithis a’ cur dubhadh air figear onarach cosgais sgrùdaidh.
- **A’ leum thairis air clàradh ATRS air sgàth “nach e dha-rìribh co-dhùnadh fèin-ghluasaid a th’ ann”**: is e bun-chrìoch na h-ìre buaidh mhòr air co-dhùnadh mu neach fa leth, a choinnicheas a’ mhòr-chuid de dh’innealan dreachdaidh no roghnachaidh AI ris a bheil saoranaich a’ dèiligeadh eadhon nuair a shoidhneas duine gu teicnigeach dheth.
- **A’ dearmad buaidh cuairteachaidh mearachdan**: faodaidh ìre mearachd siostam AI aig cuibheasachd thar gach neach-cleachdaidh ìre mearachd no claon-bhreith tòrr nas àirde a chleith airson buidhnean sònraichte; bu chòir [cuideam cuairteachaidh](../cuideam-sgaoilidh/) a chur an sàs air teirm a’ chron cunnart-cheartaichte, chan e dìreach air figear cruinneis iomlan.

## Tùsan

- Central Digital and Data Office, Generative AI Framework for Government (2024). <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
- Algorithmic Transparency Recording Standard. <https://www.gov.uk/government/collections/algorithmic-transparency-recording-standard-hub>
- HM Treasury, Green Book: central government guidance on appraisal and evaluation. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-governent>
