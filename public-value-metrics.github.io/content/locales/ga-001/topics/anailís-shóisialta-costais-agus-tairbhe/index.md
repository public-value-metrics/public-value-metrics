# Anailís shóisialta costais agus tairbhe (SCBA)

Aistríonn anailís shóisialta costais agus tairbhe gach costas agus tairbhe de chuid beartais nó cláir — margadh agus
neamh-mhargadh — go haonad airgid comhchoitianta, lascainíonn sí sreafaí amach anseo go luach reatha, agus glanann sí
iad le huimhir amháin a thabhairt: an bhfuil an tsochaí níos fearr as faoin togra seo, agus cé mhéad?

## Cén fáth a bhfuil tábhacht leis

Is é an SCBA an modh cainníochtúil réamhshocraithe i gcás eacnamaíoch
[mheasúnú an Green Book](../measúnú-green-book/): éilíonn treoir HM Treasury ar thograí glanluach sóisialta reatha
(NPSV) dearfach a léiriú aon uair is féidir na tairbhí a airgeadú go creidiúnach, ag úsáid toilteanas chun íoc mar bhunphrionsabal
luachála d'earraí neamh-mhargaidh
(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>,
Chapter 5). Is é an disciplín a fhorfheidhmíonn sé nach ionann anailís "shóisialta" costais agus tairbhe agus measúnú
infheistíochta san earnáil phríobháideach: caithfidh sí costais agus tairbhí a thiteann ar thríú páirtithe nach bhfuil
páirteach san idirbheart (eachtraí seachtracha) a áireamh, caithfidh sí an
[ráta lascaine sóisialta](../an-ráta-lascaine-sóisialta/) a úsáid seachas costas caipitil tráchtála, agus ba cheart di
[ualú dáileacháin](../meáchan-dáilte/) a chur i bhfeidhm nuair is mó tábhacht punt do theaghlach is boichte
ná do theaghlach is saibhre.

Briseann an SCBA síos go beacht san áit a bhfuil a cháinteoirí ag súil leis: caithfear earraí nach bhfuil aon
analach margaidh acu — aer glan, comhtháthú sóisialta, luach saoil a shábháiltear — a airgeadú ag baint úsáide as
modhanna [roghnaithe luaite](../luacháil-roghnaithe-luaite/) nó [roghnaithe nochta](../luacháil-rogha-nochta/),
nó caithfear [scáthphraghas](../scáthphraghsáil/) a thógáil. Nuair a bhíonn airgeadú faoi dhíospóireacht seachas
deacair amháin, molann an Green Book féin filleadh ar
[anailís chostéifeachtúlachta](../anailís-costéifeachtúlachta-sa-rialtas/) nó ar
[anailís chinnteoireachta ilchritéar](../anailís-chinnteoireachta-illchritéir/) seachas uimhir a chur i bhfeidhm nach
gcreideann aon duine.

## An mhatamaitic

```
NPSV = Σ [t=0 go T] (Tairbhe_t − Costas_t) / (1 + r)^t

nuair:
  Tairbhe_t = gach tairbhe airgeadaithe i mbliain t, lena n-áirítear earraí
              neamh-mhargaidh a luacháiltear trí rogha luaite/nochta nó scáthphraghas
  Costas_t  = gach costas airgeadaithe i mbliain t, lena n-áirítear costas
              deiseanna acmhainní (féach ../opportunity-cost-in-public-spending/)
  r         = ráta lascaine sóisialta (socraíonn HM Treasury 3.5% ag laghdú go
              rátaí níos ísle tar éis bliain 30, de réir Annex A den Green Book)
  T         = tréimhse an mheasúnaithe

Cóimheas tairbhe-costais (BCR) = Σ PV(Tairbhí) / Σ PV(Costais)
```

Léiríonn BCR os cionn 1 (nó NPSV os cionn nialais) glanluach sóisialta. Lipéadaíonn catagóirí luach ar airgead an
Green Book (mar a úsáidtear i measúnú iompair agus bonneagair) raonta BCR: tá faoi bhun 1.0 ina luach bocht ar airgead,
1.0–1.5 íseal, 1.5–2.0 meánach, 2.0–4.0 ard, agus os cionn 4.0 an-ard. Tá anailís íogaireachta — an NPSV a athrith faoi
thoimhdí duairce agus dóchasacha — éigeantach, ní roghnach, toisc go bhfuil bandaí mífhoiréigin leathan ag tairbhí
neamh-mhargaidh airgeadaithe.

## Sampla oibrithe

**Údarás áitiúil**: measúnaíonn comhairle infheistíocht £3m i líonra nua rothaíochta agus siúlóide thar thréimhse
mheasúnaithe 20 bliain ag ráta lascaine 3.5%.

```
Costais: £3m caipitil i mbliain 0, £50,000/bliain cothabháil (blianta 1-20)
PV(cothabháil) ≈ £50,000 × 14.2 (fachtóir bliantacht 20 bliain ag 3.5%) ≈ £710,000
PV iomlán(costais) ≈ £3.71m

Tairbhí (airgeadaithe go léir trí uirlisí luachála foilsithe DfT/WHO):
  Tairbhe sláinte ó ghníomhaíocht choirp mhéadaithe: £180,000/bliain
  Laghdú ar neamhláithreacht: £40,000/bliain
  Díghol plódaithe (níos lú turas gluaisteán): £60,000/bliain
  Sruth iomlán tairbhí: £280,000/bliain
PV(tairbhí) ≈ £280,000 × 14.2 ≈ £3.98m

NPSV = £3.98m − £3.71m = +£0.27m
BCR = 3.98 / 3.71 = 1.07 → luach "íseal" ar airgead
```

Sáraíonn an scéim an tairseach ach díreach; má dhéantar rith íogaireachta ag meastachán tairbhe sláinte 20% níos ísle
(rud a léiríonn mífhoiréigean fíor i luacháil na gníomhaíochta coirp), titeann an BCR faoi bhun 1.0, agus is é sin go
beacht an fáth go n-éilíonn an Green Book go bhfoilseofar an tábla íogaireachta taobh leis an uimhir cheannteideal,
ní hamháin an meastachán lárnach.

**Carthanas**: déantar clár cosc ar bhásmhaireacht naíonán a chosnaíonn £500,000/bliain a mheas ag úsáid luach saoil
staidrimh (VSL) — scáthphraghas, ní praghas margaidh breathnaithe — de thart ar £2.1m (figiúr nuashonraithe 2023 de
chuid HM Treasury, díorthaithe féin ó staidéir roghnaithe luaite). Tugann básanna naíonán amháin a sheachaint in aghaidh
na bliana i gcoinne costais £500,000 BCR de 4.2, atá go réasúnta "an-ard" mar luach ar airgead — ach braitheann an
toradh iomlán ar fhigiúr an VSL, agus is é sin an fáth go gcaithfidh aon SCBA a úsáideann VSL é a nochtadh mar thoimhde,
ní mar fhíric.

## Nasc leis an innealtóireacht bogearraí

Is é an SCBA an creat nádúrtha do chinntí infheistíochta in ardáin agus i mbonneagar i mbogearraí rialtais —
chun ardán céannachta comhroinnte a chur i gcomparáid le réitigh phointe rannacha, mar shampla, ní mór tairbhí a
airgeadú ar nós costas onboardála dúblach laghdaithe, calaois laghdaithe, agus am chun seirbhíse níos tapúla nach
bhfuil aon phraghas margaidh acu astu féin. Ba cheart d'innealtóirí a thógann an tseirbhís bhunúsach a bheith ag súil go n-iarrfaidh ceannairí
clár ionchuir ar an anailís seo: costais aonaid idirbheart (féach [costas in aghaidh an idirbhirt](../costas-in-aghaidh-an-idirbhirt/)),
méideanna ionchasacha, agus costais díghrádaithe/ham neamhfhónaimh. An disciplín is tábhachtaí le hallmhairiú: lascainigh
tairbhí amach anseo, ainmnigh bonnlíne an fhrithfhíorasaigh go sainráite (féach
[anailís fhrithfhíorasach](../anailís-fhrithfhíorasach/)), agus ná cuir meastachán pointe amháin i láthair gan a raon
íogaireachta.

## Contúirtí

- **Tairbhí a dhúbailt.** Cuireann sé an cás i bhfiús "am a sábháladh" agus "táirgiúlacht a fuarthas ón am sin" a
  chomhaireamh mar línte tairbhe ar leith; is é an t-am a sábháladh an tairbhe, ní tairbhe bhreise é a úsáid iarmhartach
  mura bhfuil fianaise neamhspleách air.
- **Costais díláithrithe a fhágáil ar lár.** Níor chruthaigh scéim a aistríonn plódú ó bhóthar amháin go bóthar eile, nó
  calaois ó chainéal amháin go cainéal eile, an glantairbhe a thugann a NPSV ceannteidil le tuiscint — féach
  [díláithriú agus aitreabúid](../díláithriú-agus-inchur/).
- **Ráta lascaine príobháideach a úsáid.** Má chuirtear costas caipitil tráchtála i bhfeidhm (abair 8–10%) in ionad
  an ráta lascaine shóisialta, tearc-luacháiltear go córasach tairbhí poiblí fadtéarmacha ar nós gnóthachain sláinte
  agus comhshaoil — féach [ráta lascaine sóisialta](../an-ráta-lascaine-sóisialta/).
- **An neamhdhíospóireacht a airgeadú agus an díospóireacht a ruaigeadh.** Más éifeachtúlacht atá airgeadaithe go
  muiníneach is ea dhá thrian de thairbhe togra agus gnóthachan folláine atá airgeadaithe go tobann is ea trian, measctar
  uimhir chrua le huimhir bhog go ciúin san NPSV ceannteidil; déan tuairisciú orthu ar leithligh.

## Foinsí

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Chapter 5.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury. "Green Book supplementary guidance: value of a statistical life." 2023.
  <https://www.gov.uk/government/publications/green-book-supplementary-guidance-value-of-a-statistical-life>
- Department for Transport. "TAG unit A1.1: cost-benefit analysis." Transport Analysis Guidance.
  <https://www.gov.uk/guidance/transport-analysis-guidance-tag>
