# Scáthphraghsáil

Is éard is scáthphraghas ann luach measta a shanntar do earra, do acmhainn nó d'eachtra sheachtrach nach bhfuil aon
phraghas margaidh inbhreathnaithe aige, nó a bhfuil a phraghas margaidh saobhtha agus nach léiríonn a fhíorluach
sóisialta. Braitheann measúnú rialtais ar thacar beag scáthphraghsanna oifigiúla — carbón, am nach saothar é, saothar
dífhostaithe — a fhoilsítear go lárnach ionas go n-úsáideann gach roinn an uimhir chéanna.

## Cén fáth a bhfuil tábhacht leis

Tá scáthphraghsanna ann toisc nach féidir [anailís shóisialta costais agus tairbhe](../anailís-shóisialta-costais-agus-tairbhe/)
a dhéanamh gan luach airgid a bheith ar gach costas agus tairbhe, agus níl aon phraghas margaidh ar chuid de na cinn is
tábhachtaí — tona carbóin a astaítear, uair an chloig de chuid paisinéara, uair an chloig de shaothar a bheadh
dífhostaithe ar shlí eile — nó tá praghas margaidh orthu a chuireann a bhfíorchostas sóisialta i bhfiús. Foilsíonn
HM Treasury agus an Department for Energy Security and Net Zero le chéile scáthphraghas an charbóin a úsáidtear
i ngach measúnú de chuid rialtas na Ríochta Aontaithe
(<https://www.gov.uk/government/publications/valuing-greenhouse-gas-emissions-in-policy-appraisal>). Ní ó aon phraghas
margaidh carbóin a dhíorthaítear é, ach ó chur chuige atá comhsheasmhach leis an sprioc: socraítear luach an charbóin ag
an gcostas imeallach lagaithe is gá chun buiséid charbóin reachtúla na Ríochta Aontaithe a bhaint amach, rud atá go
bunúsach difriúil ón loighic a bhaineann le breathnú ar an méid a dhíoltar carbón air i Scéim Trádála Astaíochtaí an AE
nó na Ríochta Aontaithe.

Leanann an ráta pá scáthaithe an loighic chéanna ar thaobh an tsaothair. Ní chosnaíonn fostú duine a bheadh dífhostaithe
ar shlí eile a phá iomlán don tsochaí — is aistriú ó íocaíochtaí sochair a tugadh suas agus ó am fóillíochta/cuardaigh
caillte cuid den phá sin seachas tarraingt nua ghlan ar acmhainní na sochaí — mar sin socraíonn treoir an Green Book
scáthphraghas faoi bhun an phá mhargaidh do shaothar a tarraingíodh ón dífhostaíocht, rud a léiríonn fíorchostas
deiseanna an tsaothair sin (féach [costas deiseanna sa chaiteachas poiblí](../costas-deise-sa-chaiteachas-poiblí/))
seachas a phraghas margaidh.

## An mhatamaitic

```
Scáthphraghas an charbóin (struchtúr samplach; tagann na luachanna reatha ón
uirlis oifigiúil luachanna carbóin BEIS/DESNZ — ná húsáid figiúirí atá as dáta):
  Luach na hearnála trádáilte: bunaithe ar threochtaí phraghas an liúntais ETS
  Luach na hearnála neamhthrádáilte (comhsheasmhach leis an sprioc): socraithe
    ag an gcostas imeallach lagaithe is gá chun buiséid charbóin reachtúla a
    chomhlíonadh, ag méadú le himeacht ama de réir mar a ídítear na roghanna
    lagaithe is éasca
  Cur i bhfeidhm: £/tona CO2e × tonaí a astaíonn nó a sheachnaíonn an rogha,
    lascainithe ag an ráta lascaine sóisialta do na blianta amach anseo

Ráta pá scáthaithe (SWR):
  SWR = Pá margaidh − (luach an ama fóillíochta/cuardaigh a sábháladh
                        + luach na n-íocaíochtaí leasa nach n-íoctar a thuilleadh)
  Go hiondúil léirítear mar chodán den phá margaidh é (m.sh. SWR = 0.6
    × pá margaidh i gceantar ard-dífhostaíochta, de réir threoir Annex A
    den Green Book ar mhargaí saothair ina bhfuil acmhainneacht chuí)
```

Is coinbhinsiúin beartais iad an dá fhigiúr a shocraítear go lárnach, ní breathnuithe eimpíre ar an margadh — is é pointe
an scáthphraghais ionad a ghlacadh de mhargadh atá ar iarraidh nó saofa, mar sin caithfidh measúnú a úsáideann ceann
acu an fhoinse oifigiúil reatha a lua seachas a fhigiúr féin a dhíorthú, go beacht ionas go mbeidh measúnuithe gach
roinne inchomparáide.

## Sampla oibrithe

**Rialtas náisiúnta**: measann measúnú scéime cosanta ar thuilte go seachnaíonn sí 400 tona CO2e astaíochtaí in aghaidh
na bliana (trí úsáid laghdaithe ghléasra práinneachta agus carbón leabaithe laghdaithe ó atógáil a seachnaíodh) thar
shaolré mheasúnaithe 30 bliain, i gcomparáid le bonnlíne "an t-íosmhéid".

```
Scáthphraghas samplach an charbóin: £280/tona CO2e (bliain 1, ag méadú thar
  thréimhse an mheasúnaithe de réir sceideal oifigiúil na luachanna carbóin
  neamhthrádáilte)
Tairbhe carbóin bhliain 1 = 400 × £280 = £112,000
```

Toisc go bhfuil luach an charbóin *ag méadú* thar thréimhse an mheasúnaithe de réir an sceidil oifigiúil (rud a léiríonn
buiséid charbóin atá ag dul i ngéire), ní mór don anailísí an luach cuí a bhaineann le gach bliain a chur i bhfeidhm ar
an sruth 30 bliain, ní ráta cothrom — dá n-úsáidfí luach bhliain 1 ar fud an tsrutha, bheadh tairbhí na mblianta
níos déanaí tearc-mheasta agus bheadh an rangú i gcomparáid le dearaí malartacha cosanta ar thuilte a bhfuil próifílí
carbóin éagsúla acu saofa.

**Údarás áitiúil**: cuireann clár tacaíochta fostaíochta de chuid comhairle daoine fadtéarmacha dífhostaithe ina cónaí
ann i bpoist a íocann £11/uair an chloig, 150 duine. Dá luacháil seo ag úsáid an phá mhargaidh iomláin, thabharfaí
creidmheas don chlár de £11 × uaireanta oibre mar thairbhe shóisialta, ach aithníonn an cur chuige ráta pá scáthaithe
nár oibrithe a tarraingíodh ó phoist eile iad seo — bhí fíorchostas deiseanna a saothair roimh an gclár íseal.

```
Pá margaidh: £11.00/uair an chloig
Ráta pá scáthaithe (samplach, dífhostaíocht áitiúil ard): 0.6 × pá margaidh = £6.60/uair an chloig
Glan-tairbhe shóisialta inchurtha i leith gach uair oibre ≈ £11.00 − £6.60 = £4.40/uair an chloig
  (an luach "breise" a cruthaíodh trí shaothar atá fíor-díomhaoin a aistriú i dtáirgeadh,
   ar leithligh ón bpá féin, atá ina aistriú den chuid is mó)
```

Is é seo an fáth gur féidir le measúnuithe ar chláir fostaíochta i gceantair ard-dífhostaíochta glanluach sóisialta
dearfach a thaispeáint fiú nuair nach dtaispeánfadh an clár céanna, arna reáchtáil i gceantar lánfhostaíochta ina
dtarraingeofaí saothar díláithrithe ó phoist eile.

## Nasc leis an innealtóireacht bogearraí

Is annamh a théann scáthphraghsáil i bhfeidhm go díreach ar sheachadadh bogearraí, ach tá tábhacht leis aon uair a
éilíonn cás gnó tairbhe carbóin nó sóisialta ó athrú TF — comhdhlúthú ionad sonraí a éilíonn sábháil carbóin, nó seirbhís
gan pháipéar a éilíonn carbón priontála agus postais a seachnaíodh — ní mór dóibh scáthphraghas oifigiúil reatha an
charbóin a úsáid seachas figiúr cumtha, agus ní mór dóibh an sceideal bliain ar bhliain a chur i bhfeidhm seachas ráta
cothrom, díreach mar a dhéantar le haon ionchur eile de chuid measúnú Green Book. Féach [costas iomlán úinéireachta i TF
an rialtais](../costas-iomlán-úinéireachta-i-tf-an-rialtais/) agus [luach cibearshlándála san earnáil
phoiblí](../luach-na-cibearshlándála-san-earnáil-phoiblí/), a mbíonn scáthphraghas uathu go minic d'ionchur atá deacair a airgeadú
(riosca sáraithe, ham neamhfhónaimh) taobh le míreanna a bhfuil costas díreach orthu.

## Contúirtí

- **Figiúr as dáta carbóin nó pá a úsáid.** Déantar an dá luach a athbhreithniú go tréimhsiúil le treoir lárnach;
  ní sheasfaidh measúnú atá bunaithe ar fhigiúr a cuireadh ar ceal le grinnscrúdú HM Treasury.
- **Scáthphraghas carbóin cothrom a chur i bhfeidhm ar fud measúnaithe ilghnéitheach.** Ardaíonn an sceideal
  oifigiúil le himeacht ama; má úsáidtear luach bhliain 1 ar fud an tsrutha, cuirtear próifíl na dtairbhí nó na gcostas
  i bhfiús.
- **Ráta pá scáthaithe a mheascadh le lascaine ar fhíorphá an oibrí.** Coigeartaíonn an ráta pá scáthaithe luacháil an
  *mheasúnaithe* ar ionchur an tsaothair, ní an pá a íoctar leis an oibrí goiarbhír — má mheascann tú an dá rud
  tugann sé údar (go mícheart) le pá faoi bhun an mhargaidh.
- **Scáthphraghas saincheaptha a dhíorthú in ionad an cheann oifigiúil a úsáid.** Is coinbhinsiúin beartais iad
  scáthphraghsanna go beacht ionas go mbeidh measúnuithe inchomparáide idir na ranna; briseann figiúr a cumadh go
  háitiúil, pé chomh maith agus a réasúnaíodh é, an inchomparáideacht sin.

## Foinsí

- HM Treasury / Department for Energy Security and Net Zero. "Valuing greenhouse gas emissions in
  policy appraisal." <https://www.gov.uk/government/publications/valuing-greenhouse-gas-emissions-in-policy-appraisal>
- HM Treasury. "The Green Book: appraisal and evaluation in central government," Annex A (shadow
  price of labour, non-work time values).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Little IMD, Mirrlees JA. "Project Appraisal and Planning for Developing Countries." Heinemann,
  1974 (foundational shadow-pricing methodology).
