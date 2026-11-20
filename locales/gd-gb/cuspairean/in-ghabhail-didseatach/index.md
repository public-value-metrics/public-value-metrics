# In-ghabhail didseatach

’S e in-ghabhail didseatach (digital inclusion) an smachd air dèanamh cinnteach nach tig “didseatach mar thoiseach-tòiseachaidh” gu bhith “didseatach a-mhàin” — gun obraich seirbheisean poblach a chaidh a dhealbhadh timcheall air an t-seanal as saoire fhathast do shaoranaich nach urrainn no nach tèid ga chleachdadh gun taic. Chruthaich GDS an dòigh lìbhrigidh shònraichte, “didseatach le taic” (assisted digital), mar riatanas èigneachail airson gach seirbheis didseatach riaghaltais, chan e rud a bharrachd roghainneil.

## Carson a tha e cudromach

Shuidhich Government Digital Strategy 2012 an t-amas gu soilleir: bu chòir seirbheisean didseatach a thogail didseatach mar thoiseach-tòiseachaidh, ach dh’aithnich an ro-innleachd fhèin nach biodh timcheall air 10% de dh’inbhich na RA comasach air an cleachdadh gun chuideachadh, agus gheall i do roinnean taic didseatach le taic a thoirt seachad — slighe le eadar-mheadhan daonna, air fòn, aghaidh-ri-aghaidh, no tro eadar-mheadhanair — mar phàirt dhen t-seirbheis, chan e dòigh air ais air leth a chuireadh ris nas anmoiche. ’S e sin a-nis puing 5 den [digital-service-standard](../inbhe-nan-seirbheisean-didseatach/), “dèan cinnteach gun urrainn do dhuine sam bith an t-seirbheis a chleachdadh”. Tha meud na dùnadh-a-mach leantainneach air a leantainn le Consumer Digital Index bliadhnail Lloyds Banking Group: lorg deasachadh 2024 gu bheil mu 1.6 millean neach san RA fhathast far-loidhne, agus gu bheil a’ bhuidheann seo claonte gu mòr gu daoine aois 70–79, an fheadhainn le teachd-a-steach fo £35,000, agus an fheadhainn a tha air a dhreuchd no gun obair — dìreach an sluagh as dualtaiche a bhith an eisimeil air na seirbheisean poblach a thathar ag ath-dhealbhadh. Lorg an aithisg cheudna nach robh ach 48% de bhuidheann-obrach na RA comasach air na 20 gnìomhan air fad air frèam nan Sgilean Didseatach Riatanach a choileanadh, a’ ciallachadh nach e ceangal dà-chuid a th’ ann an dùnadh-a-mach, is e speactram de sgil, misneachd agus earbsa a th’ ann a chailleas meatrach sìmplidh “tha broadband aige” gu tur.

## A’ mhatamataig

Is e frèam agus sgrùdadh co-ionannachd seach aon fhoirmle a th’ ann an in-ghabhail didseatach, ach tha e a’ cur ri chèile le measadh luach cainneachdail tro [cuideam cuairteachaidh](../cuideam-sgaoilidh/):

```
Luach gluasad seanail gun smaoineachadh:
  luach = meud air a ghluasad × (cosgais_seann − cosgais_didseatach)     [faic channel-shift-savings]

Luach ceartaichte airson in-ghabhail:
  luach = (meud air a ghluasad × sàbhaladh gun chuideam)
        − (luchd-cleachdaidh air an dùnadh a-mach × cosgais solarachadh didseatach le taic)
        − (atharrachadh cuideam cuairteachaidh airson cron do bhuidhnean
           air an dùnadh a-mach a chailleas ruigsinneachd no a dh’fhuiling
           càileachd seirbheis air a lagachadh)

Chan e cosgais fuigheall fàilligidh a th’ ann an didseatach le taic — is e seanal
air a dhealbhadh a th’ ann le a [cosgais gach gnothach](../cosgais-gach-gnothach/) fhèin,
mar as trice fada nas àirde gach gnothach na didseatach fèin-seirbheis ach
fhathast mar as trice nas saoire na an seann seanal a tha e ga chur an àite gu pàirteach.
```

## Eisimpleir obrach

**Seirbheis sochair nàiseanta stoidhle Universal Credit**: 2.5 millean tagradh sa bhliadhna, air a mheasadh mar a’ feumachdainn taic didseatach le taic airson 10% de luchd-tagraidh a rèir bharail dealbhaidh Government Digital Strategy.

```
Buidheann dùnadh-a-mach/didseatach le taic = 2,500,000 × 10% = 250,000 tagradh/bliadhna

Cosgais seanail didseatach le taic (taic fòn + aghaidh-ri-aghaidh,
luchdaichte gus dèiligeadh ri so-leòntachd agus toinnteachd) ≈ £9.50/tagradh
  = 250,000 × £9.50 = £2,375,000/bliadhna

Cosgais didseatach fèin-seirbheis don 90% eile ≈ £0.40/tagradh
  = 2,250,000 × £0.40 = £900,000/bliadhna

Cosgais measgaichte gach gnothach = (2,375,000 + 900,000) / 2,500,000
  = £1.31/tagradh

Chan eil dealbhadh a leumas thairis air didseatach le taic gus cosgais gach gnothach
ceann-aithris nas ìsle a ruighinn (m.e. £0.40 measgaichte, a’ dearmad nan 250,000
tagradh air an dùnadh a-mach) a’ cur às don chosgais £2.375m sin — tha e ga tionndadh
gu còirichean gun iarraidh, ath-thagraidhean, agus iarrtas seirbheis èiginn sìos an loidhne
a thuiteas air buidseat gu tur eadar-dhealaichte.
```

## Ceangal ri innleadaireachd bathar-bog

’S e seanal air a dhealbhadh a th’ ann an didseatach le taic, a’ ciallachadh gu bheil eadar-aghaidhean, SLAs agus ionnsramaid aige mar gach fear eile: inneal neach-cùise stèidhichte air fòn, tairsgeal eadar-mheadhanair airson Citizens Advice no ùghdarras ionadail, no sruth cioscaidh pearsanta. Le bhith ga làimhseachadh mar rud a chuirear ris às dèidh làimhe — àireamh fòn ann an clò beag seach seanal air a bheachdachadh bho lorg — is e an dòigh as cumanta leis am fàillig seirbheisean puing 5 den [digital-service-standard](../inbhe-nan-seirbheisean-didseatach/) aig measadh. Is e in-ghabhail didseatach an lionsa co-ionannachd air gach cuspair eile sa bhuidheann seo: bidh e a’ cuingealachadh dè cho dian ’s a ghabhas [sàbhaladh gluasad seanail](../sàbhaladh-gluasad-seanail/) a choileanadh, tha e na loidhne a dh’fheumar a ghabhail a-steach gu h-onarach ann an [cosgais gach gnothach](../cosgais-gach-gnothach/), agus is e an cur an sàs dìreach de [chuideam cuairteachaidh](../cuideam-sgaoilidh/) ann an co-theacsa sheirbheisean didseatach — bu chòir sàbhaladh a thuiteas gu neo-chuimseach air daoine a tha mar-thà air an dùnadh a-mach gu didseatach is gu h-eaconamach a chuideam sìos, gun a làimhseachadh co-ionann ri sàbhaladh air a sgaoileadh gu cothromach thar an t-sluaigh.

## Cunnartan

- **“Didseatach mar thoiseach-tòiseachaidh” air a leughadh mar “didseatach a-mhàin”**: a’ dùnadh an loidhne fòn no an cunntair aon uair ’s a thèid gabhail didseatach thar stairsneach, gun dearbhadh gu bheil roghainn eile dha-rìribh so-chleachdte aig a’ bhuidheann a tha air fhàgail.
- **A’ tomhas in-ghabhail le ceangal dà-chuid**: tha “broadband aige” no “le fòn-sgrad” na dhroch proxy airson comas gnothach sònraichte a chrìochnachadh — tha beàrn nan Sgilean Didseatach Riatanach (chan eil ach 48% de bhuidheann-obrach na RA a’ crìochnachadh nan 20 gnìomh uile, a rèir Lloyds 2024) a’ sealltainn gu bheil sgilean is misneachd cho cudromach ri ruigsinneachd.
- **A’ cosg didseatach le taic mar mhearachd cruinneachaidh**: a’ buidseatadh dha mar loidhne ghèilleadh bheag seach seanal ceart le [cosgais gach gnothach](../cosgais-gach-gnothach/) fhèin, agus an uair sin a bhith air a ghlacadh gun dùil nuair a tha e gun mhaoineachadh gu leòr agus gun luchd-obrach gu leòr aig an togail.
- **A’ sgrùdadh luchd-crìochnachaidh didseatach soirbheachail a-mhàin**: tha rannsachadh riarachaidh is so-chleachdachd a tha air a ruith gu tur san t-seirbheis a’ call an fheadhainn nach d’ fhuair cho fada, dìreach an sluagh a tha obair in-ghabhail didseatach an dùil a dhìon.

## Tùsan

- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
- GOV.UK Service Manual, service standard, point 5: make sure everyone can use the service. <https://www.gov.uk/service-manual/service-standard/point-5-make-sure-everyone-can-use-the-service>
- Lloyds Banking Group, Consumer Digital Index. <https://www.lloydsbank.com/banking-with-us/whats-happening/consumer-digital-index.html>
- Ofcom, digital exclusion review. <https://www.ofcom.org.uk/>
