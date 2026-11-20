# Togail an aghaidh ceannach san riaghaltas

’S e coimeas structaraichte, ceartaichte airson cunnart a th’ ann an togail an aghaidh ceannach eadar leasachadh gnàthaichte agus togail malairteach no bathar-bùth, air a choimeas a rèir [cosgais iomlan seilbh](../cosgais-iomlan-seilbh-ann-an-it-riaghaltais/) lasaichte, ùine gu luach, agus cunnart. Tha an riaghaltas gu structarail na roinn cheannaichte — tha an Technology Code of Practice a’ suidheachadh dùil a dh’ionnsaigh fuasglaidhean bathar-bùth agus neòil — ach fhathast bidh sgiobaidhean innleadaireachd taobh a-staigh roinnean a’ dol gu togail mar thoiseach-tòiseachaidh, airson na h-aon adhbharan a tha aig luchd-togail anns gach àite.

## Carson a tha e cudromach

Tha Technology Code of Practice aig Government Digital Service (<https://www.gov.uk/guidance/the-technology-code-of-practice>) agus an stiùireadh co-cheangailte aig Service Manual mu bhith a’ co-dhùnadh togail no ceannach a’ putadh roinnean gus leasachadh sònraichte a dhearbhadh an aghaidh dùil gum bu chòir comas bathar-bùth a cheannach, chan e a thogail, agus nach fhiach còd gnàthaichte ach comas fìor ùr a tha a’ dèanamh eadar-dhealachadh don mhisean. Tha stiùireadh leasachail cuideachaidh claon-bhreith dòchais aig HM Treasury don Green Book, a thàinig bho ath-sgrùdadh Mott MacDonald 2002 air solarachadh poblach mòr, a’ toirt dha pròiseactan IT an raon àrdachaidh as fharsainge de sheòrsa sam bith a chaidh a mheasadh — tha tuairmsean cosgais calpa air am moladh airson àrdachadh le 10% aig a’ cheann ìosal agus suas gu 200% aig a’ cheann àrd mus tèid an cleachdadh ann am measadh, a’ nochdadh cho dona ’s a chaidh togail bathar-bog a ro-mheasadh gu h-eachdraidheil thar solarachadh poblach. Tha anailis togail an aghaidh ceannach ann dìreach gus an ceartachadh cunnart sin a chur air a’ bhòrd ro aontachadh, an àite leigeil leis nochdadh mar iarrtas thar-chaitheimh sa bhliadhna.

## A’ mhatamataig

```
Dèan coimeas thar an aon fhàire 3–5 bliadhna, lasaichte aig reata
lasachaidh sòisealta Green Book (faic social-discount-rate.md):

NPV_roghainn = PV(buannachdan, air an gluasad le ùine-gu-luach) − PV(TCO)

Ceartachaidhean cunnart (pàtran claon-bhreith dòchais Green Book):
  cosgais togail × 1.1–3.0        (raon àrdachaidh pròiseact IT, Mott MacDonald)
  ùine-gu-luach togail + 40–60%   (ro-dhearbhadh dàil cur an gnìomh)
  ceannach: cuir ris sgrùdadh fìrinn aonachaidh agus cosgaisean fàgail cùmhnant

Draibhearan co-dhùnaidh, san òrdugh anns an co-dhùin iad mar as trice:
  1. eadar-dhealachadh — an e am misean an comas seo, no pìobaireachd?
  2. ùine-gu-luach × cosgais dàil (faic cost-of-delay-in-public-programmes.md)
  3. cosgais iomlan seilbh ceartaichte airson cunnart
```

## Eisimpleir obrach

Feumaidh ùghdarras ionadail siostam stiùireadh chùisean airson cùram sòisealta inbhich. Ceannaich: SaaS aig £180,000/bliadhna, beò ann an 4 mìosan. Tog: tuairmsichte £900,000 plus £150,000/bliadhna cumail suas, beò ann an 14 mìosan.

```
Cosgais togail ceartaichte airson cunnart = 900,000 × 1.4 = £1,260,000
TCO 5 bliadhna:
  ceannach = 180,000 × 5 = £900,000
  togail   = 1,260,000 + 150,000 × 5 = £2,010,000

Teirm dàil: seachnaidh an siostam £40,000/mìos ann an measaidhean dùblaichte;
ruigidh togail 10 mìosan nas fhaide air adhart na ceannach.
CoD = 10 × 40,000 = £400,000

Coimeas èifeachdach: £900,000 (ceannach) an aghaidh £2,010,000 + £400,000 = £2,410,000 (togail)
```

Bidh ceannach a’ buannachadh le timcheall air £1.5 millean thar còig bliadhna, agus is e an loidhne as motha, às dèidh tuairmse na togail fhèin, cosgais na dàil nach biodh coimeas capex lom air a nochdadh a-chaoidh.

## Ceangal ri innleadaireachd bathar-bog

Na smachdan a ghluaiseas gu dìreach on anailis seo gu cleachdadh lìbhrigidh: **ceartachadh cunnart stèidhichte air ro-fhiosrachadh** — is e àrdachadh Mott MacDonald an co-ionann bathar-bog de chlaon-bhreith dòchais Green Book air a chur an sàs gu meacanaigeach, agus mar sin bu chòir do sgiobaidhean argamaid a dhèanamh airson eisgeachdan seach a bhith a’ gabhail ris gur e an tuairmse aca an eisgeachd; **onair coimeis** — is e an roghainn eile seach togail an roghainn cheannaich as fheàrr a tha ri fhaighinn, chan e “dad”, a tha ceangailte gu dìreach ri [cosgais cothrom ann an caitheamh poblach](../cosgais-cothrom-ann-an-caitheamh-poblach/); agus **coimeas onarach TCO** — bu chòir gach moladh togail a choimeas ri [cosgais iomlan seilbh](../cosgais-iomlan-seilbh-ann-an-it-riaghaltais/) làn roghainn cheannaich, chan e a prìs liosta. Far a bheil togail a’ buannachadh dha-rìribh, bu chòir [cosgais dàil](../cosgais-dàil-ann-am-prògraman-poblach/) na h-ùine togail a bharrachd a phrìsealachadh gu soilleir sa chùis-ghnìomhachais, chan ann fhàgail mar bharail gun chur an cèill nach eil ùine gu diofar.

## Cunnartan

- **A’ coimeas prìs liosta neach-reic ri tuairmse togail gun cheartachadh cunnart**: bidh seo a’ brosnachadh togail dà uair, aon uair air cosgais agus aon uair air clàr-ama.
- **Obair taobh a-staigh aig prìs neoni**: thathas a’ làimhseachadh ùine innleadaireachd seirbheis catharra mar “an-asgaidh” oir tha i mar-thà air buidseat àireamh-cinn na roinne, a tha a’ falach a fìor chosgais cothrom an aghaidh obair eile a dh’fhaodadh an sgioba sin a dhèanamh.
- **Glasadh a-steach gun phrìs anns an dà stiùir**: tha cosgaisean fàgail neach-reic agus iompaireachd dàta fìor, ach mar sin cuideachd factar-bus togail gnàthaichte agus a dhòigh air a bhith an urra ri sgioba beag a-staigh nach eil furasta a chur na àite thar a beatha.
- **Eadar-dhealachadh misein air a thagradh airson pìobaireachd**: “tha seo aig cridhe dhuinn” air a chur an cèill mu mheadhan-bathair aonachaidh no stòr sgrìobhainnean — dearbh e an aghaidh an gabhadh saoranach no neach-cùise a-riamh an aire dè tha a’ ruith foidhe.

## Tùsan

- Central Digital and Data Office, Technology Code of Practice. <https://www.gov.uk/guidance/the-technology-code-of-practice>
- GOV.UK Service Manual, deciding whether to build or buy technology. <https://www.gov.uk/service-manual>
- HM Treasury, Green Book supplementary guidance on optimism bias. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
