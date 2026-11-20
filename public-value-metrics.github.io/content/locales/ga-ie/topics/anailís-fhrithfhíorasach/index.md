# Anailís fhrithfhíorasach

Is éard is frithfhíorasach ann meastachán ar an méid a bheadh tarlaithe in éagmais idirghabhála. Gan ceann, ní féidir athrú breathnaithe tar éis clár a sheoladh a idirdhealú ó athrú a bheadh tarlaithe ar aon nós — gan frithfhíorasach, níl aon fhianaise ar éifeacht, is cuma cé chomh áititheach is atá cuma na n-uimhreacha roimh-agus-tar-éis. Caitheann Magenta Book HM Treasury le frithfhíorasach inchreidte a thógáil mar phríomhthasc modheolaíoch na meastóireachta tionchair, níos tábhachtaí ná aon rogha dearaidh aonair eile.

## Cén fáth a bhfuil tábhacht leis

Ní fianaise gur oibrigh an clár é "Thit coireacht 15% sa bhliain tar éis dúinn an clár a thabhairt isteach" mura bhfuil a fhios agat cad a bheadh tarlaithe do choireacht gan é — d'fhéadfadh coireacht a bheith tar éis titim 20% ar aon nós de bharr treochtaí eacnamaíocha nó déimeagrafacha neamhghaolmhara, rud a chiallódh gur dhéanamh an clár cúrsaí níos measa i gcomparáid leis an bhfrithfhíorasach, in ainneoin an uimhir amh a bheith ag feabhsú. Is é seo an earráid anailíseach is coitianta in éilimh tionchair na hearnála poiblí agus na hearnála sóisialta: comparáid roimh/tar éis a mheascadh le fianaise ar chúisíocht. Tá an Magenta Book sainráite go bhfuil meastóireacht tionchair ann chun ceist fhrithfhíorasach a fhreagairt — "cén difríocht a rinne an idirghabháil seo?" — agus go n-éilíonn freagairt di an domhan nár tharla a mheas, ní a thuairisciú amháin.

Tógann modhanna difriúla an frithfhíorasach le leibhéil éagsúla muiníne, agus rangaíonn treoir mheastóireachta an rialtais iad dá réir. Táirgeann trialacha rialaithe randamaithe (RCTanna), áit a leithdháiltear daoine aonair nó ceantair go randamach chun idirghabháil a fháil nó gan í a fháil, an frithfhíorasach is láidre toisc go ndeimhníonn randamú nach mbíonn difríocht idir na grúpaí cóireála agus rialaithe, ar an meán, ach amháin sa idirghabháil a fháil. Chuir an Cabinet Office agus an What Works Network RCTanna chun cinn thar bheartas poiblí na Ríochta Aontaithe ó thuarascáil "Test, Learn, Adapt" 2012 leis an Behavioural Insights Team, go beacht toisc go bhfuil dearaí níos laige so-ghonta do chomhmhearbhú — d'fhéadfadh an difríocht bhreathnaithe cé a roghnaigh páirt a ghlacadh a léiriú, ní héifeacht an chláir. Nuair nach bhfuil randamú praiticiúil nó eiticiúil (mar a bhíonn go minic i gcás clár a bhfuil teideal reachtúil acu, nó athruithe beartais daonra-iomláine), leagann an Magenta Book amach ordlathas sainráite roghanna níos laige ach úsáideacha fós: grúpaí comparáide meaitseáilte, dearaí difríochta-i-ndifríochtaí, neamhleanúnachas cúlchéimnithe thart ar thairseacha incháilitheachta, agus, mar rogha dheireanach, comparáid shimplí roimh/tar éis — marcáilte go soiléir mar an cineál fianaise is laige, i dtaobh le héifeacht an chláir a mheascadh le héifeacht gach ní eile a d'athraigh ag an am céanna.

## An mhatamaitic

An frámú frithfhíorasach, infheidhme thar gach modh:

```
Tionchar measta = Toradh(le hidirghabháil) − Toradh(frithfhíorasach: gan idirghabháil)

NÁ:
Tionchar measta ≠ Toradh(tar éis) − Toradh(roimh)   [meascann sé am le cóireáil]
```

Scoilteann difríocht-i-ndifríochtaí, ceann de na dearaí bán-turgnamhacha is coitianta i meastóireacht rialtais, an éifeacht chóireála amach trí athrú roimh/tar éis an ghrúpa comparáide féin a dhealú:

```
Meastachán DiD = [Toradh(cóireáilte, tar éis) − Toradh(cóireáilte, roimh)]
             − [Toradh(comparáid, tar éis) − Toradh(comparáid, roimh)]
```

Baineann sé seo aon treocht atá coitianta don dá ghrúpa (m.sh. athrú eacnamaíoch náisiúnta a théann i bhfeidhm ar gach duine), ag fágáil ach an t-athrú difreálach is inchurtha i leith na hidirghabhála.

## Sampla oibrithe

**Clár fostaíochta, roimh/tar éis (dearadh lag)**: tuairiscíonn scéim tacaíochta poist gur ardaigh fostaíocht rannpháirtithe ó 40% go 55% thar bliain — tátal soiléir "+15 pointe céatadáin mar gheall ar an gclár."

**An clár céanna, difríocht-i-ndifríochtaí (dearadh níos láidre)**: léiríonn grúpa comparáide meaitseáilte de dhaoine neamhrannpháirteacha comhchosúla, tarraingthe ón margadh saothair áitiúil céanna, fostaíocht ag ardú ó 38% go 47% thar an mbliain chéanna (bhí téarnamh eacnamaíoch náisiúnta ar siúl).

```
Athrú an ghrúpa cóireáilte:   55% − 40% = +15 pointe céatadáin
Athrú an ghrúpa comparáide:   47% − 38% = +9 pointe céatadáin

Meastachán DiD (fíoréifeacht an chláir) = 15 − 9 = +6 pointe céatadáin
```

Is é 6 pointe céatadáin an éifeacht inchurtha i leith a thuairisciú go hionraic, ní 15 — bheadh níos mó ná leath den fheabhsú breathnaithe roimh/tar éis tarlaithe is cuma an clár, á thiomáint ag an téarnamh eacnamaíoch céanna a d'ardaigh an grúpa comparáide.

**Neamhleanúnachas cúlchéimnithe, tairseach incháilitheachta**: níl scéim dheontais ar fáil ach do ghnólachtaí a bhfuil níos lú ná 50 fostaí acu. Soláthraíonn torthaí do ghnólachtaí díreach faoi bhun na tairsí (45–49 fostaí, incháilithe) a chur i gcomparáid le gnólachtaí díreach os a cionn (50–54 fostaí, neamhincháilithe) frithfhíorasach inchreidte toisc go bhfuil gnólachtaí ar gach taobh de ghearradh riaracháin treallach comhchosúil ar shlí eile — is í an tairseach, ní aon saintréith bhunúsach ghnó, a chinneann incháilitheacht. Is féidir difríocht thoraidh meán £2,000 idir an dá ghrúpa, breathnaithe ag an tairseach amháin, a chur i leith an deontais le i bhfad níos mó muiníne ná comparáid shimplí idir gach gnólacht incháilithe agus gach gnólacht neamhincháilithe (a bhfuil difríocht chórasach acu i méid).

## Nasc leis an innealtóireacht bogearraí

Ba cheart do smaointeoireacht fhrithfhíorasach dearadh córas rianaithe tionchair agus píblíní meastóireachta do bhogearraí rialtais agus bogearraí na hearnála sóisialta a mhúnlú:

- Tóg gabháil grúpa comparáide isteach i gcóras ón tús — ag taifeadadh cé a bhí incháilithe ach nár cláraíodh, nó cohórt meaitseáilte neamhrannpháirtithe — seachas é a chur leis ina dhiaidh tar éis clár a bheith rite cheana agus gan ach sonraí roimh/tar éis ann.
- Nuair atá randamú indéanta (scaoileadh céimnithe, seirbhís dhigiteach cumasaithe do roinnt úsáideoirí roimh dhaoine eile), ionstraimigh an córas chun leithdháileadh randamach a chaomhnú mar réimse inchuardaithe; scriosann scaoileadh céimnithe a luach meastóireachta féin de thaisme mura logáiltear ord an leithdháilte.
- Is é seo an modh bunúsach taobh thiar de [mhodhanna meastóireachta tionchair](../modhanna-meastóireachta-tionchair/) agus is é a scarann é ó [mheastóireacht tionchair vs meastóireacht próisis](../meastóireacht-tionchair-vs-meastóireacht-próisis/), a fhiafraíonn an dara ceann acu ar seachadadh clár mar a bhí beartaithe seachas ar chuir sé éifeacht faoi deara.
- Is ceisteanna frithfhíorasacha, ar a bhunús, iad [breisíocht agus meáchan marbh](../breisíocht-agus-meáchan-marbh/) agus [díláithriú agus cionnú](../díláithriú-agus-inchur/) araon — is é an meáchan marbh "cad a bheadh sa toradh sonrach seo gan an idirghabháil", curtha i bhfeidhm ar leibhéal an choigeartaithe seachas dearadh iomlán meastóireachta.

## Contúirtí

- **Roimh/tar éis a láimhseáil mar fhianaise cúisíochta.** Is í seo an earráid is coitianta agus is iarmhartaí in tuairisciú tionchair poiblí agus sóisialta; meascann athrú roimh/tar éis éifeacht an chláir le gach rud eile a d'athraigh sa tréimhse chéanna.
- **Grúpa comparáide a úsáid a bhfuil difríocht chórasach idir é agus an grúpa cóireáilte.** Ní mór do ghrúpa comparáide meaitseáilte a bheith comhchosúil i ndáiríre ar shaintréithe ábhartha (féach ordlathas modhanna [anailís fhrithfhíorasach](../anailís-fhrithfhíorasach/) sa Magenta Book); má chuirtear rannpháirtithe an chláir (a roghnaigh páirt a ghlacadh, agus atá níos spreagtha go minic) i gcomparáid le neamhrannpháirtithe (nár roghnaigh) tá baol ann go ngléasfaidh claonadh roghnaithe mar éifeacht an chláir.
- **Deiseanna randamaithe a scriosadh trí dhearadh seachadta lag.** Ní chaomhnaíonn scaoileadh céimnithe nó randamaithe a luach meastóireachta ach amháin má tá an leithdháileadh randamach i ndáiríre agus taifeadta — má ligtear do bhainisteoirí áitiúla cé a théann ar dtús a roghnú briseann sé an cuspóir.
- **Cruinneas a ró-éileamh ó dhearadh lag.** Ba cheart meastachán roimh/tar éis a chur i láthair mar thaispeántach, ní mar mhéid éifeachta tomhaiste; tá ordlathas fianaise an Magenta Book ann ionas go meaitseálann neart éilimh neart an dearaidh a tháirg é.

## Foinsí

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020), and its
  supplementary guide on quasi-experimental methods.
  <https://www.gov.uk/government/publications/the-magenta-book>
- Cabinet Office / Behavioural Insights Team, "Test, Learn, Adapt: Developing Public Policy with
  Randomized Controlled Trials" (2012).
- What Works Network, standards of evidence guidance. <https://www.gov.uk/guidance/what-works-network>
- Angrist JD, Pischke J-S. *Mostly Harmless Econometrics: An Empiricist's Companion*. Princeton
  University Press, 2009 (standard reference for difference-in-differences and regression
  discontinuity methods).
