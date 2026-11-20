# Luach dàta fosgailte

Is e luach dàta fosgailte an duilgheadas a bhith a’ tuairmseachadh dè as fhiach dàta riaghaltais is poblach nuair nach eil prìs air: chan eil e air a reic, mar sin chan eil loidhne teachd-a-steach ann, ach tha a leigeil ma sgaoil (clàran sìde, clàran-ama còmhdhalach, crìochan còd-puist, clàran chompanaidhean) gu follaiseach a’ gineadh gnìomhachd eaconamach is sòisealta nas ìsle sìos an t-sruth. Tha e cudromach a luachadh gu math oir tha “tha e an-asgaidh a leigeil ma sgaoil” agus “chan eil e a’ fiachainn” an dà chuid ceàrr, agus feumaidh innleadair bathar-bog a tha a’ co-dhùnadh am fosgail e API no seata dàta argamaid nas fheàrr na gin dhiubh.

## Carson a tha e cudromach

Tha an tuairmse bhon mhullach sìos as cumanta air a h-iomradh a’ tighinn bho aithisg 2013 aig McKinsey Global Institute “Open data: Unlocking innovation and performance with liquid information”, a chuir luach bliadhnail comasach dàta fosgailte thairis air seachd raointean — foghlam, còmhdhail, bathar teachdaiche, dealan, ola is gas, cùram slàinte, agus ionmhas teachdaiche — aig $3 trillean gu $5 trillean sa bhliadhna gu cruinneil, tro dhòighean a’ gabhail a-steach barrachd follaiseachd, a’ maidseadh solar ri iarrtas nas èifeachdaiche, agus a’ comasachadh bathar is seirbheisean ùra a thèid a thogail air an dàta. Tha an àireamh sin na tuairmse suidheachaidh, chan e builean a chaidh a thomhas, agus bidh i gu cunbhalach air a ràdh ceàrr mar gum b’ e teachd-a-steach a b’ urrainn don riaghaltas a ghlacadh gu dìreach, nuair a bhios a’ mhòr-chuid dhen luach a’ tuiteam air treas pàrtaidhean — gnìomhachasan, luchd-rannsachaidh, saoranaich — a’ cleachdadh an dàta, agus is e sin dìreach brìgh a fhosgladh seach a reic. Tha Institiùd Dàta Fosgailte na RA (ODI), a chaidh a cho-stèidheachadh le Sir Tim Berners-Lee agus Sir Nigel Shadbolt ann an 2012, bhon uair sin air buidheann de dh’sgrùdaidhean cùise nas mionaidiche a thogail bhon bhonn suas — roinn air an roinn, seata dàta air an t-seata dàta — a tha tòrr nas feumaile airson cùis ghnìomhachais fhìor na an àireamh chinn-naidheachd aig McKinsey, oir bidh iad a’ sealltainn dòigh cruthachadh luach, chan e dìreach a mheud iomlan.

## A’ mhatamataig

Chan eil prìs margaidh aig dàta fosgailte, agus mar sin bidh dòighean luachaidh nan àite; bidh trì dòighean a’ nochdadh a-rithist, agus chan eil gin dhiubh gu leòr leotha fhèin:

```
1. Dòigh a’ chosgais air a seachnadh / cosgais ath-chur:
   luach ≈ na phàigheadh luchd-cleachdaidh airson an dàta co-ionann
   a thoirt gu buil no a cheadachadh leotha fhèin — ìre as ìsle, a’
   leigeil seachad luach a chaidh a chruthachadh le cleachdaidhean nach
   do shaoil an riochdaire tùsail idir

2. Dòigh coimeas margaidh / gnìomhachd sìos an t-sruth:
   luach ≈ teachd-a-steach no sàbhaladh a chaidh a ghineadh le
   gnìomhachasan/seirbheisean a chaidh a thogail air an dàta (m.e.
   aplacaidean satnav a chaidh a thogail air dàta mapaidh is trafaig fosgailte)
   — a’ glacadh gnìomhachd eaconamach fhìor ach duilich a thoirt gu
   glan don leigeil ma sgaoil fhèin (faic additionality-and-deadweight)

3. Dòigh co-dhàimh/roghainn-ràitichte:
   luach ≈ na their luchd-cleachdaidh a phàigheadh iad, no an ùine a
   their iad a shàbhaileas e dhaibh — faic stated-preference-valuation
   airson an dòigh choitcheann agus na claonaidhean aice

Chan eil gin dhiubh sin a’ toirt a-mach figear cho glan ri prìs margaidh;
bidh cùisean gnìomhachais dàta fosgailte earbsach a’ triantanachadh thairis air dhà
no barrachd, agus a’ dèanamh soilleir dè an dòigh a tha a’ dèanamh na h-obrach.
```

## Eisimpleir obrach

**Leigeil ma sgaoil dàta mapaidh/seòlaidh nàiseanta mar shamhla** (dòigh-obrach a rèir sgrùdaidhean cùise ann an stoidhle ODI, figearan mar shamhla air an sgèile a lorgas sgrùdaidhean mar sin mar as trice):

```
Tuairmse cosgais air a seachnadh:
  Gnìomhachasan a bhiodh air dhòigh eile a’ ceadachadh dàta maidseadh-seòlaidh
  co-ionann gu malairteach, aig cosgais cead cuibheasach air a thuairmseachadh de £4,000/
  bliadhna, thairis air tuairmse de 15,000 SME a tha a-nis a’ cleachdadh an t-seata dàta
  fhosgailte an-asgaidh
  = 15,000 × £4,000 = £60,000,000/bliadhna ann an cosgais cheadachaidh air a seachnadh a-mhàin

Tuairmse gnìomhachd sìos an t-sruth (nas tuairmseach, feumaidh suidheachadh eile):
  Toraidhean slighe-lìbhrigidh is loidsistigs ùra a chaidh a thogail air an dàta fhosgailte
  nach biodh ann, no a bhiodh gu math nas miosa, às aonais — feumaidh
  coimeas an aghaidh suidheachadh eile de dhàta a’ fuireach dùinte no air a
  cheadachadh gu malairteach (counterfactual-analysis), oir bhiodh cuid dhen ghnìomhachd sin a’ tachairt co-dhiù
  air dàta pàighte aig prìs nas àirde, agus is e sin cuideam marbh anns an t-seagh “luach a chruthaich a fhosgladh”

Bidh cùis ghnìomhachais dhìonach ag aithris figear na cosgais air a seachnadh mar
an ìre as ìsle chinnteach, agus a’ làimhseachadh figear na gnìomhachd sìos an
t-sruth mar shuidheachadh ìre as àirde, chan e fìrinn.
```

## Ceangal ri innleadaireachd bathar-bog

Do innleadairean, tha ceist luach dàta fosgailte na bhios iad a’ coimhead air mar as trice nas cumhainge na figearan nàiseanta nan cinn-naidheachd: a bheil fosgladh an API no seata dàta shònraichte seo (seach a chumail air cùl aonta com-pàirteachais) a’ meudachadh ath-chleachdadh gu leòr gus an cosgais leantainneach air a sgrìobhadh sìos, air a thoirt dreach, agus air a thaic mar eadar-aghaidh phoblach a dhìon? Tha an cosgais cumail suas sin fìor agus is e a choimeas e do eaconamas togail-aon-uair-ath-chleachd-tric aig [riaghaltas mar ùrlar](../an-riaghaltas-mar-àrd-ùrlar/) — tha an dà chuspair gu math faisg, fear mu chòd is bun-structar co-roinnte, am fear eile mu dhàta co-roinnte. Bu chòir tagradh luach dàta fosgailte sam bith a sgrùdadh an aghaidh [buaidh a bharrachd agus cuideam marbh](../buaidh-a-bharrachd-agus-cuideam-marbh/) mus tèid e ann an cùis ghnìomhachais: chan e luach a chruthaich an *fhosgladh* a th’ ann an gnìomhachd a bhiodh air tachairt co-dhiù, air dàta ceadaichte gu malairteach.

## Cunnartan

- **An àireamh $3–5 trillean aig McKinsey a ghabhail mar fear sònraichte don RA no mar chuibhreann an t-seata dàta seo**: is e tuairmse suidheachaidh cruinneil seachd-roinneil bho 2013 a th’ innte — tha a cleachdadh mar iomadachair mionaideach airson aon seata dàta nàiseanta a’ mì-riochdachadh dè th’ anns an àireamh.
- **Gun suidheachadh eile**: creideas a ghabhail airson a’ ghnìomhachd eaconamach sìos an t-sruth gu lèir a chaidh a thogail air dàta fosgailte, gun faighneachd dè an cuibhreann a bhiodh air tachairt co-dhiù air dàta pàighte no ceadaichte aig prìs nas àirde (faic [buaidh a bharrachd agus cuideam marbh](../buaidh-a-bharrachd-agus-cuideam-marbh/) agus [anailis an t-suidheachaidh eile](../anailis-an-t-suidheachaidh-eile/)).
- **Cosgais riochdachaidh a mheasgachadh le luach a chaidh a chruthachadh**: chan eil seata dàta a bha daor a chruinneachadh gu fèin-ghluasadach luachmhor a leigeil ma sgaoil, agus chan eil fear saor gu fèin-ghluasadach ìosal-luach — leanaidh luach cleachdadh sìos an t-sruth, chan e cosgais suas an t-sruth.
- **Cosgais cumail suas leantainneach “fosgailte” a leigeil seachad**: chan e an aon dleastanas a th’ ann ann a bhith a’ foillseachadh às-tharraing CSV aon-uair agus a bhith a’ ruith API fosgailte le sgrìobhainnean, dreachan agus taic — is e dìth maoineachaidh an tè mu dheireadh às dèidh naidheachd an cuir air bhog dòigh fàilligidh cumanta.

## Tùsan

- McKinsey Global Institute, "Open data: Unlocking innovation and performance with liquid information" (2013). <https://www.mckinsey.com/business-functions/mckinsey-digital/our-insights/open-data-unlocking-innovation-and-performance-with-liquid-information>
- Open Data Institute. <https://theodi.org/>
