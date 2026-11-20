# Méadrachtaí Sreafa i Seachadadh an Rialtais

Déanann méadrachtaí sreafa — Dlí Little, teorainneacha oibre-ar-siúl (WIP), agus éifeachtúlacht sreafa — cur síos ar chomh tapa agus a ghluaiseann obair trí chóras le toilleadh teoranta. Is córas den chineál sin é bord sprinte; is é an mhatamaitic chéanna faoi éide dhifriúil é scuaine éileamh sochair, clár iarratas pleanála, nó riaráiste cásoibre víosaí.

## Cén fáth a bhfuil tábhacht leis

Is córais scuaine iad cásualach an rialtais, agus géilleann córais scuaine do dhlíthe scuaine cibé acu a thomhaiseann aon duine iad nó nach dtomhaiseann. Déanann tréimhsí cinnidh reachtúla é seo sainráite: faoi réimeas an Town and Country Planning, tá sprioc chinnidh reachtúil 8 seachtaine ag formhór na mioniarratas pleanála agus 13 seachtaine ag mór-iarratais — gealltanas ama timthrialla atá tógtha go díreach sa dlí. Is cás dea-dhoiciméadaithe é riaráiste cásoibre tearmainn na Home Office, a ndearna an National Audit Office agus Roghchoiste Gnóthaí Baile iniúchadh arís agus arís eile air, de chóras poiblí inar fhás obair-ar-siúl níos tapúla ná tréchur ar feadh tréimhse fhada, ag tiomáint amanna timthrialla i bhfad thar aon ionchas reachtúil nó seirbhíse. Tugann méadrachtaí sreafa foclóir roinnte, cainníochtúil d'innealtóirí agus do bhainisteoirí cásoibre araon don mhodh teipe seo go beacht, in ionad é a fhágáil mar "fhadhb riaráiste" cáilíochtúil.

## An mhatamaitic

```
Dlí Little:  WIP = Tréchur × Am Timthrialla
         →   Am Timthrialla = WIP / Tréchur

Éifeachtúlacht sreafa = am gníomhach (teagmhála) / iomlán an ama timthrialla   (Vacanti)

Éifeacht teorann WIP: le tréchur seasta, laghdaíonn leathú WIP thart ar leath
meánam timthrialla (Dlí Little athordaithe) — an luamhán atá ar fáil
gan líon foirne a mhéadú.
```

Féach [méadrachtaí DORA don luach poiblí](../méadrachtaí-dora-don-luach-poiblí/) don mhatamaitic chomhionann a chuirtear i bhfeidhm ar phíblínte imlonnaithe bogearraí seachas ar chásobair.

## Sampla oibrithe

**Roinn pleanála údaráis áitiúil**: tá 400 iarratas oscailte ag aon am amháin (WIP), réitíonn an fhoireann 50 iarratas/seachtain (tréchur).

```
Am timthrialla = WIP / Tréchur = 400 / 50 = 8 seachtaine
```

Titeann sé sin go díreach ag sprioc reachtúil 8 seachtaine na mioniarratas — gan aon mhaolú, rud a chiallaíonn go gcuireann aon athraitheacht in éileamh isteach nó in am freagartha comhairleoirí cinntí thar an spriocdháta dlíthiúil.

**Éifeachtúlacht sreafa**: as na 8 seachtaine sin (56 lá féilire), de ghnáth bíonn thart ar 6 uair an chloig d'am próiseála iarbhír cásoibrí ag iarratas.

```
Éifeachtúlacht sreafa = 6 uair / (56 lá × 8 n-uair oibre/lá)
                      = 6 / 448 ≈ 1.3%
```

Cuireann tagarmharc Vacanti d'fhoirne bogearraí éifeachtúlacht sreafa tipiciúil ag 15–20%; ritheann cásobair rialtais, le roinnt lámhaistrithe comhairleoirí reachtúla agus fuinneoga comhairliúcháin poiblí, uaireanta ord méide níos ísle. Is sa 98.7% sin d'am "feithimh" a théann na hocht seachtaine i ndáiríre — ní i dtoilleadh cásoibrí.

**Idirghabháil teorann WIP**: má theorannaítear iarratais oscailte in aghaidh an chásoibrí ag 15 in ionad 25 gan teorainn (tréchur á choinneáil seasta), aistrítear WIP ó 400 go thart ar 240 ar fud foirne de 16 duine:

```
Am timthrialla nua = 240 / 50 = 4.8 seachtaine
```

Beagnach leath-laghdú ar am timthrialla ó athrú beartais, ní ó mhéadú foirne — an luamhán céanna a tharraingíonn foirne seachadta ar stíl DORA nuair a chuireann siad teorainn le WIP sprinte.

## Nasc leis an innealtóireacht bogearraí

Is iad méadrachtaí sreafa an teanga roinnte idir bord Kanban foirne seachadta agus urlár na cásoibre a bhfuil na bogearraí á dtógáil dó: tá scuaine cásoibrí agus scuaine pull-request araon faoi réir Dlí Little, agus sáraíonn an dá cheann a spriocanna ama timthrialla ar an gcaoi chéanna — an iomarca WIP i gcomparáid le tréchur. Tá tábhacht dhíreach leis seo do [chostas moille i gcláir phoiblí](../costas-moille-i-gcláir-phoiblí/): is é am timthrialla × CoD na puint atá ina suí sa scuaine ag nóiméad ar bith, agus tá sé tábhachtach do [chaighdeáin seirbhíse agus méadrachtaí idirbheartaíochta](../caighdeáin-seirbhíse-agus-méadrachtaí-idirbheartaíochta/), ina bhfuil sprioc foilsithe ama próiseála ina gealltanas ama timthrialla nach féidir ach le méadrachtaí sreafa a dhiagnóisiú nuair a chaillfear é. Ba cheart do bhogearraí córais cásoibre WIP agus am timthrialla a nochtadh mar mhéadrachtaí oibríochtúla príomhdhaoine, ní iad a adhlacadh i gcóras bainistíochta cásanna nach gcuireann aon duine fiosrúchán air.

## Contúirtí

- **Teorainneacha WIP a chur leis gan an fíorbhac a réiteach**: más é am freagartha comhairleora reachtúil seachtrach an srian, ní dhéanann teorainn WIP cásoibrí ach an scuaine a bhogadh suas an sruth seachas í a ghiorrú.
- **Éifeachtúlacht sreafa a láimhseáil mar sprioc le calaois a dhéanamh**: is beag a bhogann deifir ar an 1.3% d'am gníomhach am timthrialla; bíonn an luamhán beagnach i gcónaí sna staideanna feithimh, rud a chiallaíonn athdhearadh próisis go hiondúil, ní luas cásoibrí.
- **Neamhaird a dhéanamh ar athraitheacht**: déanann Dlí Little cur síos ar mheáin; teastaíonn toilleadh maolánach ó chásualach le athraitheacht éilimh ard, ní teorainn WIP níos doichte amháin, nó caillfear spriocdhátaí reachtúla ar an eireaball luaineach fiú agus an meán ag feabhsú.
- **WIP a thomhas go neamhchomhsheasmhach**: is WIP fós cás atá "oscailte" sa chóras taifead ach atá stoptha i ndáiríre ag fanacht le tríú páirtí; déanann a eisiamh na huimhreacha a mhaisiú gan réaltacht atá os comhair saoránach a athrú.

## Foinsí

- Vacanti D, *Actionable Agile Metrics for Predictability: An Introduction*, Actionable Agile Press, 2015.
- Reinertsen DG, *The Principles of Product Development Flow*, Celeritas Publishing, 2009.
- Ministry of Housing, Communities and Local Government, planning application statutory timescales. <https://www.gov.uk/guidance/making-an-application>
- National Audit Office, reports on Home Office asylum casework and accommodation. <https://www.nao.org.uk/>
