# Luacháil Rogha Nochta

Infeiríonn modhanna rogha nochta luach earra neamhmhargaidh ó iompar infheicthe i margadh gaolmhar,
seachas fiafraí go díreach de dhaoine. Is iad praghsáil heidónach agus modh an chostais taistil an dá
theicníc oibre: tosaíonn an dá cheann ó idirbheart fíor agus asbhaineann siad praghas intuigthe don rud
nár díoladh go díreach riamh.

## Cén fáth a bhfuil tábhacht leis

Cuireann modhanna [rogha luaite](../luacháil-roghnaithe-luaite/) ceist hipitéiseach, ach breathnaíonn
modhanna rogha nochta ar an méid a d'íoc daoine i ndáiríre, rud a mheasann an Green Book go ginearálta
mar fhianaise níos inchreidte, gach rud eile cothrom, toisc nach bhfuil sé faoi réir claonadh
hipitéiseach — d'íoc freagróirí i staidéar heidónach ar phraghsanna tithe i ndáiríre an préimh nó an
lascaine atá á tomhas
(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>,
Annex 2). Scoilteann praghsáil heidónach praghas margaidh — praghsanna tithe de ghnáth — ina phraghsanna
intuigthe do gach tréith den earra, rud a ligeann d'anailísithe, mar shampla, an préimh praghais a íocann
teaghlaigh i ndáiríre chun cónaí in áit níos ciúine nó a bhfuil cáilíocht aeir níos fearr aici a
scaradh, ag rialú go staidrimh do gach tréith eile a théann i bhfeidhm ar phraghas tí (méid, suíomh,
dalleabhar scoile). Déanann modh an chostais taistil an rud comhchosúil do shuímh áineasa gan táille
iontrála: nochtann an t-am agus an t-airgead a chaitheann daoine ag taisteal chuig suíomh íosteorainn de
cad is fiú an suíomh dóibh, toisc nach dtabhaíonn aon duine costas is mó ná luach na cuairte dó.

Roinneann an dá mhodh teorainn struchtúrtha: ní féidir leo ach an méid atá leabaithe in idirbheart
margaidh atá ann cheana a luacháil. Léiríonn torann in aice le rúidbhealach i bpraghsanna tithe toisc go
n-aistríonn daoine a bhfuil cás acu faoi thorann i dtithíocht níos ciúine; ní léirítear luach
an bheith ann speicis nach dtugann aon duine cuairt uirthi nó nach gcónaíonn in aice léi in aon idirbheart
ar chor ar bith, agus is é sin go beacht an bhearna a bhfuil modhanna [rogha luaite](../luacháil-roghnaithe-luaite/)
ann chun a líonadh.

## An mhatamaitic

```
Praghsáil heidónach:
  Praghas tí = f(tréithe struchtúrtha, tréithe suímh,
                 tréith chomhshaoil spéise, ...)
  Meas trí aischúlú; is é an comhéifeacht ar an tréith
  chomhshaoil (gach rud eile á choinneáil seasta) a praghas intuigthe.

  Praghas intuigthe tréithe X = ∂(Praghas tí) / ∂X

Modh an chostais taistil:
  Ráta cuairte (cuairteanna in aghaidh an chinn ó chrios i) = f(costas taistil ó chrios i,
                 suímh ionadaíocha, rialuithe sóisialta-eacnamaíocha)
  Meas cuar éilimh do chuairteanna mar fheidhm de chostas taistil.
  Barrachas tomhaltóra = an limistéar faoin gcuar éilimh measta
                       = luach an tsuímh d'chuairteoirí
```

Teastaíonn tacar rialuithe atá sách staidrimh ón dá mhodh — claonaíonn tréith mhearbhaíoch fágtha ar
lár (heidónach) nó suíomh ionadaíoch in aice láimhe (costas taistil) an praghas intuigthe i dtreo
nach bhfuil soiléir i gcónaí roimh ré, agus is é sin an fáth a n-éilíonn Annex 2 den Green Book go
dtuairisceofaí sonraíocht an aischúlaithe agus na rialuithe, ní hamháin an comhéifeacht cheannteidil.

## Sampla oibrithe

**Rialtas náisiúnta**: tarraingíonn modheolaíocht phraghas scáthaigh carbóin an Green Book féin go páirteach
ar fhianaise heidónach, ach is cás léirithe níos simplí é torann aerárthaí. Aimsíonn staidéar heidónach a
aischúlaíonn praghsanna díola tithe i gceantar cosán eitilte i gcoinne nochtadh torainn a bhfuil meáchan
achair air, ag rialú do mhéid, aois agus dalleabhar scoile, go mbaineann gach 1 decibel de mhéadú ar mheán-nochtadh
torainn le laghdú 0.5% ar phraghas tí. I gcás tí tipiciúil £280,000 sa cheantar atá buailte:

```
Praghas intuigthe in aghaidh an decibel = £280,000 × 0.5% = £1,400 in aghaidh an teaghlaigh
Teaghlaigh buailte ag méadú 3dB ó rúidbhealach nua = 18,000
Costas intuigthe iomlán ar mhéadú an torainn = £1,400 × 3 × 18,000 = £75.6m
```

Is costas caipitlithe aon uaire é seo (leabaithe i bpraghas tí), ar gá don bhreithmheas a bheith cúramach
gan é a dhúbailt i gcoinne sreabhadh costais bliantúil míshástachta torainn a mheastar ar leith.

**Carthanas**: úsáideann carthanas comhshaoil modh an chostais taistil chun cúlchoill nádúir saor ó
tháille iontrála a luacháil. Tugann sonraí suirbhé ar chóid phoist cuairteoirí meán-chostas taistil
turais fillte (am luachálta ar luach ama neamhoibre molta an Green Book, móide breosla) de £14 in
aghaidh na cuairte, le 40,000 cuairt sa bhliain. Tugann an cuar éilimh measta — ráta cuairte ag titim de
réir mar a ardaíonn costas taistil ó chrios — le tuiscint barrachas tomhaltóra in aghaidh na cuairte,
os cionn na £14 a caitheadh i ndáiríre, de thart ar £9.

```
Luach bliantúil iomlán = 40,000 cuairt × (£14 caite + £9 barrachas tomhaltóra)
                       = 40,000 × £23 ≈ £920,000/bliain
```

Tá sé seo i bhfad níos mó ná ioncam nialasach táille iontrála na cúlchoille agus tugann sé figiúr
intchosanta d'iontaobhaithe an charthanais do luach áineasa an tsuímh agus iad ag déanamh an cháis
do mhaoinitheoirí.

## Nasc leis an innealtóireacht bogearraí

Tagann smaointeoireacht rogha nochta chun cinn in anailísíocht táirgí san earnáil phoiblí níos minice ná
mar a thuigeann cleachtóirí: is fianaise rogha nochta ar luach é sonraí úsáide ó sheirbhís dhigiteach
rialtais saor in aisce (is féidir minicíocht, fad seisiúin agus — an rud is faisnéiseach — patrúin úsáide
athchleachtacha vs aon uaire a anailísiú ar an mbealach céanna a chóireálann múnla chostais taistil
minicíocht cuairteanna i gcoinne achair). Nuair a bhíonn ionadaithe fíora ag seirbhís (cainéal páipéir,
líne ghutháin), is féidir an "costas" a thabhaíonn saoránaigh chun an cainéal digiteach a úsáid ina
ionad (am, sonraí, gléas) a mheas agus a chur i gcomparáid le húsáid, ag macalla loighic an chostais
taistil go díreach. Féach [caighdeán na seirbhíse digití](../an-caighdeán-um-sheirbhís-dhigiteach/) agus
[luach na sonraí oscailte](../luach-na-sonraí-oscailte/), a bhfuil an fhadhb luachála chéanna aige d'earra
nach bhfuil aon phraghas margaidh díreach air.

## Contúirtí

- **Claonadh athróg fágtha ar lár i múnlaí heidónacha.** Claonaíonn tréith chomhghaolmhar a fhágáil ar lár
  (cáilíocht scoile ag comhghaolú le praghas tí agus leis an athróg chomhshaoil spéise araon) an meastachán
  praghais intuigthe; ní mór an sonraíocht a thuairisciú agus a scrúdú, ní hamháin an toradh.
- **Neamhaird ar shuímh ionadaíocha i staidéir chostais taistil.** Tá luach nochta cuairteora ar shuíomh
  faoi-mheasta má tá ionadaí níos gaire ann agus nach rialaítear dó — d'fhéadfadh siad a bheith ag
  tabhairt cuairte go príomha toisc go bhfuil sé saor in aisce, ní toisc go bhfuil sé luachmhar go haonair.
- **Rogha nochta a chur i bhfeidhm ar earra gan macalla margaidh ar chor ar bith.** Ní léirítear luach
  an bheith ann, luach rogha ná luach oidhreachta in aon idirbheart agus ní féidir iad a aisghabháil le
  modhanna heidónacha nó costais taistil — baineann an bhearna sin le
  [luacháil rogha luaite](../luacháil-roghnaithe-luaite/).
- **Luach caipitlithe (aon uaire) a mheascadh le sreabhadh bliantúil.** Is luachanna caipitlithe aon
  uaire de ghnáth iad éifeachtaí heidónacha ar phraghas tí; méadaíonn caitheamh leo mar shreabhadh
  sochair bliantúil an breithmheas.

## Foinsí

- HM Treasury. "The Green Book," Annex 2: valuing non-market impacts.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Transport / Civil Aviation Authority. Aircraft noise valuation studies used in
  airport appraisal. <https://www.gov.uk/guidance/aviation-noise>
- Rosen S. "Hedonic Prices and Implicit Markets: Product Differentiation in Pure Competition."
  Journal of Political Economy, 1974.
- Clawson M, Knetsch JL. "Economics of Outdoor Recreation." Johns Hopkins University Press, 1966
  (origin of the travel-cost method).
