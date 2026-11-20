# An riaghaltas mar àrd-ùrlar (GaaP)

Is e Government as a Platform an ro-innleachd airson co-phàirtean co-roinnte, ath-chleachdadh — seirbheis bhrathan, seirbheis phàighidhean, seirbheis dearbh-aithne — a thogail aon turas, gu meadhanach, gus an cleachd na ceudan de sheirbheisean riaghaltais fa leth iad seach gun tog gach fear an fhear aige fhèin. Bidh e ag ath-fhrèamadh bun-structar didseatach poblach mar dhuilgheadas eaconamachd àrd-ùrlair: chan eil an luach ann an aon aonachadh sam bith, tha e anns a’ chosgais iomallach aig an *ath* sgioba a ghabhas ris a’ tighinn faisg air neoni.

## Carson a tha e cudromach

Chuir GDS a-mach an ro-innleachd gu foirmeil anns an fhoillseachadh “Government as a Platform” aige ann an 2015, ag argamaid gun robh an riaghaltas air na h-aon chomasan a thogail — gabhail phàighidhean, brath luchd-cleachdaidh, dearbhadh dearbh-aithne, lorg sheòladh — air leth ann an seirbheis às dèidh seirbheis, gach fear a’ giùlan a ghnìomhachas solarachaidh, measadh tèarainteachd agus uallach taic leantainneach fhèin. B’ e an roghainn eile àireamh bheag de dh’àrd-ùrlaran co-roinnte, air an togail gu inbhe àrd aon turas agus air an ath-chleachdadh anns gach àite: GOV.UK Notify airson puist-d, teachdaireachdan teacsa agus litrichean a chur, GOV.UK Pay airson pàighidhean air-loidhne a ghabhail, agus GOV.UK One Login (an neach a thàinig an àite prògram dearbh-aithne GOV.UK Verify) airson dearbhadh dearbh-aithne. Is e an sgèile air an do ràinig na h-àrd-ùrlaran seo an fhianais as soilleire gun do dh’obraich an ro-innleachd: tha GOV.UK Pay air còrr is £10 billean a làimhseachadh ann an gnìomhachasan thar timcheall air 1,800 seirbheis fa leth — agus far an tug e timcheall air ceithir bliadhna a’ chiad £1 billean a làimhseachadh, tha e a-nis a’ làimhseachadh na h-uiread ann an timcheall air còig mìosan — agus tha GOV.UK Notify air còrr is 9 billean teachdaireachd a chur às leth còrr is 1,500 buidheann riaghaltais. Sheachain gach aon dhe na seirbheisean sin a bha ga ghabhail a gheata phàighidhean no pìob teachdaireachdan fhèin a thogail, a dhìon agus a chumail suas.

## A’ mhatamataig

```
Cosgais togail gach seirbheis (gun àrd-ùrlar) = N seirbheisean × cosgais airson aon
  siostam phàighidhean/bhrathan/dearbh-aithne a thogail, a mheasadh airson tèarainteachd, agus a ruith

Cosgais àrd-ùrlair = cosgais togail stèidhichte an àrd-ùrlair
                   + cosgais iomallach gach seirbheis a ghabhas ris (aonachadh,
                     rèiteachadh, taic leantainneach sgioba an àrd-ùrlair)

Tha ath-chleachdadh a’ briseadh eadhon aon uair ’s gu bheil:
  cosgais togail an àrd-ùrlair < N × (cosgais togail gach seirbheis − cosgais
  aonachaidh iomallach)

Airson àrd-ùrlar aibidh, bidh cosgais iomallach gach neach-gabhail a bharrachd a’
tighinn faisg air ìoc a’ ghnìomhachais/na teachdaireachd a-mhàin — tha an
cosgais stèidhichte air a sgaoileadh thar eastàite iomlan an riaghaltais, chan e buidseat aon
roinn, agus is e sin as coireach gu bheil co-phàirtean GaaP mar as trice air am maoineachadh
gu meadhanach seach air an cosg aig làn-ath-bhuileachadh cosgais do luchd-gabhail tràth.
```

## Eisimpleir obrach

**Ùghdarras ionadail a’ gabhail GOV.UK Pay an àite geata phàighidhean a thogail**:

```
Tuairmse tog-fèin:
  obair co-chòrdalachd PCI-DSS + aonachadh + cumail suas leantainneach
  ≈ £85,000 togail + £22,000/bliadhna cumail suas

Gabhail GOV.UK Pay:
  Oidhirp aonachaidh ≈ £12,000 (ùine leasaiche)
  Ìocan ghnìomhachasan: bidh pàighidhean cairt riaghaltas-gu-saoranach mar as trice
  air an cur air ceudad bheag + ìoc stèidhichte gach gnìomhachas, gun
  uallach PCI-DSS air leth air a ghiùlan leis a’ chomhairle
  ≈ £12,000 aon-turas, cosgais leantainneach caochlaideach le tomhas, chan e stèidhichte

Sàbhaladh a’ chiad bhliadhna ≈ £85,000 − £12,000 = £73,000, mus cunnt thu an
£22,000/bliadhna cumail suas a chaidh a sheachnadh agus cunnart co-chòrdalachd a chaidh
a sheachnadh de bhith a’ cumail dàta cairt ann an siostam a ruigeadh a’ chomhairle idir —
is e an dàrna roinn seo an luach tèarainteachd air a chòmhdach ann an
public-sector-cybersecurity-value.
```

Meudaich an £73,000 sin thar nan 1,800 seirbheis timcheall a tha a-nis a’ cleachdadh GOV.UK Pay agus tha an cosgais togail iomlan a chaidh a sheachnadh air feadh an riaghaltais anns na ceudan de mhilleanan — is ann ann an eaconamachd an àrd-ùrlair, chan ann ann an aonachadh sam bith, a tha luach na ro-innleachd gu dearbh.

## Ceangal ri innleadaireachd bathar-bog

Tha Government as a Platform na argamaid dhìreach airson [togail an aghaidh ceannach san riaghaltas](../togail-an-aghaidh-ceannach-san-riaghaltas/): nuair a tha co-phàirt cho-roinnte, air a measadh, air a ruith gu math ann, is ainneamh a tha togail co-ionann dealaichte na roghainn [luach airson airgead](../luach-air-airgead/) nas fheàrr, agus bidh e a’ fàilligeadh puing 13 de [Inbhe nan Seirbheisean Didseatach](../inbhe-nan-seirbheisean-didseatach/) (“cleachd agus cuir ri inbhean fosgailte, co-phàirtean cumanta agus pàtrain”) cha mhòr a-rèir mìneachaidh. Bidh e cuideachd ag atharrachadh cruth [cosgais iomlan seilbh ann an IT an riaghaltais](../cosgais-iomlan-seilbh-ann-an-it-riaghaltais/): bidh gabhail àrd-ùrlair a’ malairt loidhne mhòr calpa agus cumail suas gu fear nas lugha, ceangailte ri cleachdadh, a tha nas fhasa a ro-innse agus nas fhasa a dhì-mhaoineachadh ma thèid seirbheis a chuir dheth. Tha co-ghleacadair aig ath-chleachdadh fosgailte co-phàirtean ann an [luach dàta fosgailte](../luach-dàta-fosgailte/) — tha an dà chuid nan ro-innleachdan airson rudeigin a bhios an riaghaltas a’ dèanamh aon turas a làimhseachadh mar bhun-structar co-roinnte seach maoin roinne.

## Cunnartan

- **Ath-thogail dubh**: bidh sgiobaidhean gu sàmhach a’ togail an aonachadh phàighidhean no bhrathan fhèin air sgàth gu bheil pròiseas inntrigidh an àrd-ùrlair nas slaodaiche na a dhèanamh iad fhèin — duilgheadas milleadh riaghlaidh, chan e teicneòlais, a bhios gu sàmhach a’ truailleadh eaconamachd ath-chleachdaidh air a bheil an ro-innleachd gu lèir an eisimeil.
- **Fo-mhaoineachadh sgioba an àrd-ùrlair an coimeas ris an luach a chruthaicheas e**: bidh luach a’ tighinn gu na roinnean a bhios ga chleachdadh fhad ’s a tha cosgais aig sgioba an àrd-ùrlair, a’ cruthachadh cunnart fo-thasgaidh maireannach mura bheil maoineachadh meadhanach agus dìonta — dreach de bhròn nan cumantas.
- **A’ tomhas soirbheachas àrd-ùrlair le cleachdadh a-mhàin**: tha àireamhan gabhail (seirbheisean air an toirt a-steach, teachdaireachdan air an cur) nan comharra tòiseachaidh, chan e dearbhadh luach; is e fìor dheuchainn an àireamhachadh cosgais-togail a chaidh a sheachnadh agus cunnart a chaidh a sheachnadh gu h-àrd.
- **A’ làimhseachadh “àrd-ùrlar” mar ionann ri “monolith”**: bidh co-phàirtean GaaP a’ soirbheachadh oir bidh gach fear a’ dèanamh aon rud gu math le eadar-aghaidh chumhang, sheasmhach — bidh bhith a’ cruinneachadh chomasan neo-cheangailte a-steach do aon “àrd-ùrlar” ag ath-chruthachadh duilgheadas an togail dhealaichte aig sgèile eile.

## Tùsan

- Government Digital Service, Government as a Platform. <https://www.gov.uk/government/publications/government-as-a-platform>
- GOV.UK Notify. <https://www.notifications.service.gov.uk/>
- Government Digital Service blog, "GOV.UK Pay at 10: how it started and how it's going". <https://gds.blog.gov.uk/2026/09/02/gov-uk-pay-at-10-how-it-started-and-how-its-going/>
