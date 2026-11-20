# Luachadh roghainn fhoillsichte

Bidh dòighean roghainn fhoillsichte (revealed preference) a’ tuairmseachadh luach bathair neo-mhargaidh bho ghiùlan so-fhaicsinneach ann am margadh co-cheangailte,
seach faighneachd do dhaoine gu dìreach. Is e prìsean hedonic agus an dòigh cosgais-siubhail an dà dhòigh obrach as cumanta: bidh an dà chuid a’ tòiseachadh bho
ghnothach fìor agus a’ toirt a-mach prìs fhillte airson an rud nach deach a reic gu dìreach a-riamh.

## Carson a tha e cudromach

Far a bheil dòighean [roghainn ràitichte](../luachadh-roghainn-ainmichte/) a’ faighneachd ceist fhrith-fhìrinneach, bidh dòighean roghainn fhoillsichte a’ cumail sùil air na
phàigh daoine gu dearbh, rud a tha an Green Book a’ làimhseachadh mar fhianais gu bitheanta nas earbsaiche, a h-uile càil eile co-ionann, oir chan eil e fo dhroch-bhuaidh
fhrith-fhìrinneach — phàigh luchd-freagairt ann an sgrùdadh prìs thaighean hedonic gu dearbh am prìomhachd no an lasachadh a tha air a thomhas
(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>,
Annex 2). Bidh prìsean hedonic a’ sgaradh prìs mhargaidh — mar as trice prìsean thaighean — gu prìsean fillte
airson gach feart den bhathar, a’ leigeil le luchd-anailis, mar eisimpleir, am prìomhachd prìse a phàigheas teaghlaichean gu dearbh airson a bhith a’ fuireach
àiteigin nas sàmhaiche no le càileachd adhair nas fheàrr a sgaradh, a’ cumail smachd gu staitistigeil air gach feart eile a bheir buaidh air prìs thaighean (meud, àite, sgìre sgoile).
Bidh an dòigh cosgais-siubhail a’ dèanamh an aon rud airson làraichean cur-seachaid gun chìs inntrigidh: tha an ùine is an t-airgead a chosgas daoine a’ siubhal
chun na làraich a’ nochdadh ìre as ìsle air na tha an làrach airidh dhaibh, oir chan fhulaing duine cosgais a tha nas motha na luach an tadhail dhaibh.

Tha cuingealachadh structarail aig an dà dhòigh: chan urrainn dhaibh ach an rud a tha ann an gnothach margaidh a tha ann mu thràth a luachadh. Tha fuaim faisg air raon-adhair
a’ nochdadh ann am prìsean thaighean oir bidh daoine aig a bheil ùidh ann am fuaim ga rèiteachadh fhèin a-steach do thaigheadas nas sàmhaiche; chan eil luach bith-beò seòrsa
nach tadhail duine air no a tha a’ fuireach faisg air a’ nochdadh ann an gnothach sam bith idir, agus is e sin dìreach a’ bheàrn a tha dòighean
[roghainn ràitichte](../luachadh-roghainn-ainmichte/) ann gus a lìonadh.

## A’ mhatamataig

```
Prìsean hedonic:
  Prìs taighe = f(feartan structarail, feartan àite,
                   feart àrainneachdail a tha inntinneach, ...)
  Tuairmsich tro ath-thilleadh; is e a’ cho-èifeachd air an fheart
  àrainneachdail (a’ cumail gach rud eile cunbhalach) a prìs fhillte.

  Prìs fhillte feart X = ∂(Prìs taighe) / ∂X

Dòigh cosgais-siubhail:
  Ìre tadhal (tadhalan gach ceann bho sòn i) = f(cosgais siubhail bho shòn i,
                   làraichean ionadach, smachdan sòisio-eaconamach)
  Tuairmsich lùb iarrtais airson tadhalan mar ghnìomh air cosgais siubhail.
  Barrachd luchd-cleachdaidh = raon fo lùb an iarrtais a chaidh a thuairmseachadh
                    = luach na làraich do luchd-tadhail
```

Tha an dà dhòigh ag iarraidh seata smachd làidir gu staitistigeil — ma thèid feart measgaichte (hedonic) no làrach ionadach faisg air làimh (cosgais-siubhail) fhàgail air falbh,
bidh a’ phrìs fhillte claon ann an taobh nach eil an-còmhnaidh soilleir roimh-làimh, agus is e sin an adhbhar a dh’iarras Annex 2 an Green Book gun tèid
sònrachadh an ath-thilleadh agus na smachdan aithris, chan e dìreach a’ cho-èifeachd cinn-naidheachd.

## Eisimpleir obrach

**Riaghaltas nàiseanta**: tha dòigh-obrach prìs-sgàil carboin an Green Book fhèin a’ tarraing ann am pàirt air fianais hedonic, ach is e cùis nas sìmplidhe mar shamhla
fuaim itealain. Lorgaidh sgrùdadh hedonic a tha ag ath-thilleadh prìsean reic thaighean ann an sgìre slighe-itealain an aghaidh foillseachadh fuaim cuideam-astair,
a’ cumail smachd air meud, aois, agus sgìre sgoile, gu bheil gach àrdachadh 1 decibel ann am foillseachadh fuaim cuibheasach co-cheangailte le lùghdachadh 0.5% ann am prìs taighe.
Airson taigh àbhaisteach £280,000 san sgìre fo bhuaidh:

```
Prìs fhillte gach decibel = £280,000 × 0.5% = £1,400 gach teaghlach
Teaghlaichean fo bhuaidh àrdachadh 3dB bho raon-laighe ùr = 18,000
Cosgais iomlan fhillte àrdachadh fuaim = £1,400 × 3 × 18,000 = £75.6m
```

Is e cosgais calpaichte aon-uair (suidhichte ann am prìs taighe) a th’ ann an seo, a dh’fheumas am measadh a bhith faiceallach gun a cunntadh dà uair an aghaidh sruth cosgais
buaireadh fuaim bliadhnail air a thuairmseachadh air leth.

**Carthannas**: bidh carthannas àrainneachdail a’ cleachdadh na dòigh cosgais-siubhail gus tèarmann nàdair gun chìs inntrigidh a luachadh. Bheir dàta sgrùdaidh air còdan-puist luchd-tadhail
cosgais siubhail cuairt cuibheasach (ùine air a luachadh aig luach ùine neo-obrach a mhol an Green Book, a bharrachd air connadh) de £14 gach tadhal, le 40,000 tadhal sa bhliadhna.
Tha an lùb iarrtais a chaidh a thuairmseachadh — ìrean tadhal a’ tuiteam mar a dh’èireas cosgais siubhail bho shòn — a’ ciallachadh barrachd luchd-cleachdaidh gach tadhal,
os cionn nan £14 a chaidh a chaitheamh gu dearbh, de timcheall air £9.

```
Luach iomlan bliadhnail = 40,000 tadhal × (£14 air a chaitheamh + £9 barrachd luchd-cleachdaidh)
                         = 40,000 × £23 ≈ £920,000/bliadhna
```

Tha seo a’ dol fada thairis air teachd-a-steach neoni cìs inntrigidh an tèarmainn agus a’ toirt figear dìonach do urrasairean a’ charthannais airson luach cur-seachaid na làraich
nuair a nì iad a’ chùis do luchd-maoineachaidh.

## Ceangal ri innleadaireachd bathar-bog

Bidh smaoineachadh roghainn fhoillsichte a’ nochdadh ann an anailis toraidh na roinne poblaich nas trice na tha luchd-cleachdaidh a’ tuigsinn: tha dàta cleachdaidh bho sheirbheis
didseatach riaghaltais an-asgaidh fhèin na fhianais roghainn fhoillsichte air luach (tha tricead, fad seisein, agus — gu sònraichte — pàtrain cleachdaidh ath-aithriseach an aghaidh aon-uair
a ghabhas anailis a dhèanamh air san aon dòigh ’s a làimhsicheas modail cosgais-siubhail tricead thadhalan an aghaidh astair). Far a bheil ionadan fìor aig seirbheis (seanail pàipeir,
loidhne fòn), faodar a’ “chosgais” a thèid aig saoranaich gus an seanail didseatach a chleachdadh an àite sin (ùine, dàta, uidheam) a thuairmseachadh agus a choimeas ri cleachdadh,
a’ freagairt air loidsig cosgais-siubhail gu dìreach. Faic
[àbhaisteach na seirbheis didseatach](../inbhe-nan-seirbheisean-didseatach/) agus
[luach dàta fosgailte](../luach-dàta-fosgailte/), a tha an aghaidh dìreach an aon duilgheadas luachaidh airson bathar gun phrìs mhargaidh dhìreach.

## Cunnartan

- **Claonadh caochladair air fhàgail às ann am modailean hedonic.** Bidh feart co-cheangailte fhàgail a-mach (càileachd sgoile a’ co-cheangal le prìs taighe agus an caochladair
  àrainneachdail inntinneach) a’ claonadh tuairmse na prìse fillte; feumaidh sònrachadh a bhith air aithris agus air sgrùdadh, chan e dìreach a’ bhuil.
- **Làraichean ionadail a leigeil seachad ann an sgrùdaidhean cosgais-siubhail.** Tha luach foillsichte neach-tadhail airson làrach air a chur fo-luach ma tha ionadan nas fhaisge ann
  agus nach eil smachd air a chumail — dh’fhaodadh iad a bhith a’ tadhal sa mhòr-chuid oir tha e an-asgaidh, chan ann oir tha e gun choimeas luachmhor.
- **Roghainn fhoillsichte a chur an sàs ann am bathar gun mhac-talla margaidh idir.** Chan eil luach bith-beò, luach roghainn, agus luach dìleib a’ nochdadh ann an gnothach sam bith
  agus chan urrainnear am faighinn air ais le dòighean hedonic no cosgais-siubhail — buinidh a’ bheàrn sin do [luachadh roghainn ràitichte](../luachadh-roghainn-ainmichte/).
- **Luach calpaichte (aon-uair) a mheasgachadh le sruth bliadhnail.** Mar as trice is e luachan calpaichte aon-uair a th’ ann am buaidhean prìs thaighean hedonic; tha an làimhseachadh mar
  shruth buannachd bhliadhnail a’ sèideadh am measadh.

## Tùsan

- HM Treasury. "The Green Book," Annex 2: valuing non-market impacts.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Transport / Civil Aviation Authority. Aircraft noise valuation studies used in
  airport appraisal. <https://www.gov.uk/guidance/aviation-noise>
- Rosen S. "Hedonic Prices and Implicit Markets: Product Differentiation in Pure Competition."
  Journal of Political Economy, 1974.
- Clawson M, Knetsch JL. "Economics of Outdoor Recreation." Johns Hopkins University Press, 1966
  (origin of the travel-cost method).
