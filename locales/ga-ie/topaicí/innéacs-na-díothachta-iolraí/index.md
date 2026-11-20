# Innéacs na Díothachta Iolraí (IMD)

Is é an IMD an tomhas oifigiúil ar dhíothacht choibhneasta do cheantair bheaga i Sasana, ag rangú gach ceann de 32,844 Limistéar Aschuir Sár-Íseal-Chiseal (LSOAnna, thart ar 1,500 cónaitheoir an ceann) na tíre ó 1 (is mó díothacht) go 32,844 (is lú díothacht). Foilsíonn an Ministry of Housing, Communities and Local Government (MHCLG, DCLG roimhe seo) é, is déanaí mar na English Indices of Deprivation 2019, agus déanann sé maoiniú an rialtais lárnaigh, tosaíochtú sláinte poiblí, agus incháilitheacht do dhosaen scéimeanna áitiúla a threorú go díreach.

## Cén fáth a bhfuil tábhacht leis

Ní rud amháin í an díothacht — is féidir le comharsanacht a bheith bocht ó thaobh ioncaim ach sábháilte, nó leordhóthanach ó thaobh ioncaim ach torthaí sláinte lagaithe agus droch-thithíocht a fhulaingt. D'fhorbair innéacsanna réamhtheachtacha an IMD (siar go táscairí díothachta Department of the Environment na 1970idí) isteach sa mhúnla seacht-fearainn atá ann inniu go beacht toisc gur chaill spriocdhíriú aon-táscaire (an ráta dífhostaíochta amháin, abair) ceantair a bhí díothach ar bhealaí eile go rialta. Comhcheanglaíonn IMD 2019 ioncam, fostaíocht, oideachas, sláinte, coireacht, constaicí ar thithíocht agus seirbhísí, agus timpeallacht mhaireachtála i gcéim chomhchumaisc amháin in aghaidh LSOA, gach fearann tógtha as a ghrúpa táscairí féin agus meáchaite ag modheolaíocht MHCLG. Toisc go n-oibríonn sé ag leibhéal ceantair bhig (LSOA) seachas leibhéal údaráis áitiúil, nochtann sé pócaí díothachta i bhfolach laistigh de cheantair a bhfuil saibhreas ina gcoitinne — an fáth gurb é an IMD, ní meánioncam údaráis áitiúil, a n-úsáideann NHS England, pupil premium na Roinne Oideachais, agus dosaen foirmle maoinithe údaráis áitiúil mar eochair i ndáiríre. Ba cheart do bhogearraí a chinneann incháilitheacht, a thosaíonn teagmháil, nó a thuairiscíonn tionchar de réir ceantair i Sasana deicíl nó rang IMD a láimhseáil mar ionchur príomhdhaoine, ní iar-smaoineamh — agus nuair a dhíríonn clár d'aon ghnó ar na ceantair is díothaí, ba cheart a mheasúnú [meáchan dáilte](../meáchan-dáilte/) a chur i bhfeidhm atá comhsheasmhach leis an spriocdhíriú sin, seachas punt tairbhe a luacháil mar an gcéanna cibé áit a dtéann sé.

## An mhatamaitic

```
7 bhfearann, meáchaite:
  Ioncam                                  22.5%
  Fostaíocht                              22.5%
  Oideachas, Scileanna agus Oiliúint      13.5%
  Díothacht Sláinte agus Míchumas         13.5%
  Coireacht                                9.3%
  Constaicí ar Thithíocht agus Seirbhísí   9.3%
  Timpeallacht Mhaireachtála               9.3%

Scór gach fearainn: caighdeánaítear táscairí (rangaithe, ansin claochlaithe
i dtreo dáilte normalta) agus comhcheanglaítear le claochlú easpónantúil
ionas nach féidir díothacht ard ar aon táscaire amháin a chúiteamh go hiomlán
le díothacht íseal ar chinn eile laistigh den fhearann sin.

Scór comhchumaisc IMD (LSOA) = Σ (scór fearainn × meáchan fearainn)
Rangaigh LSOAnna de réir scóir chomhchumaisc → 1 (is mó díothacht) go 32,844 (is lú díothacht)
Deicílí: rang ÷ 3,284 (thart), deicíl 1 = 10% is díothaí de LSOAnna
```

## Sampla oibrithe

**Scór comhchumaisc LSOA**, ag úsáid scóir fearainn chaighdeánaithe léiritheacha (0 = gan comhartha díothachta, níos airde = níos díothaí):

```
Ioncam               0.35 × 0.225 = 0.07875
Fostaíocht           0.30 × 0.225 = 0.06750
Oideachas            0.20 × 0.135 = 0.02700
Sláinte              0.15 × 0.135 = 0.02025
Coireacht            0.10 × 0.093 = 0.00930
Constaicí Tithíochta 0.05 × 0.093 = 0.00465
Timpeallacht Mhaireachtála 0.08 × 0.093 = 0.00744

Scór comhchumaisc = 0.07875 + 0.06750 + 0.02700 + 0.02025
                  + 0.00930 + 0.00465 + 0.00744  = 0.21489
```

Rangaítear an scór comhchumaisc sin ansin i gcoinne scóir na 32,844 LSOA ar fad. Má chuireann sé an LSOA ag rang 2,950, titeann sé i deicíl 1 (2,950 ÷ 3,284 ≈ 0.9, i.e. laistigh den 10% is díothaí de chomharsanachtaí i Sasana) — arb é do go leor foirmlí maoinithe an tairseach a dhíghlasálann incháilitheacht, is cuma cén meánscór a fhaigheann an t-údarás áitiúil máguaird.

## Nasc leis an innealtóireacht bogearraí

- Is féidir le haon seirbhís a geochódaíonn úsáideoirí go cód poist nó LSOA nasc a dhéanamh leis an tábla cuardaigh IMD foilsithe (CSV saor in aisce, leaganaithe ó MHCLG) chun deicíl díothachta a chur leis mar chomhathróg — chun teagmháil a spriocdhíriú, ualach cásanna a thosaíochtú, nó torthaí a thuairisciú de réir bhanda díothachta gan sonraí pearsanta nua a bhailiú.
- Is seiceáil chothromais chaighdeánach é deicíl IMD do sheirbhísí digiteacha poiblí: nochtann trasdhódú glacadh seirbhíse, titim amach, nó sásamh de réir deicíl IMD bearnaí rochtana a cheileann méadracht chomhiomlán — féach [cuimsiú digiteach](../cuimsiú-digiteach/) agus [méadrachtaí sásaimh saoránach](../méadracha-sásaimh-saoránach/).
- Toisc go bhfuil rang IMD coibhneasta (suimíonn sé i gcónaí le tacar seasta rangaithe ar fud Shasana), ní féidir leis a thaispeáint an bhfuil díothacht go náisiúnta ag ardú nó ag titim le himeacht ama — ach amháin cé na ceantair atá rangaithe cá i gcoibhneas lena chéile san eagrán sin; ná tóg painéil treochta iomlána ar rang amh IMD amháin.

## Contúirtí

- **Rangaithe IMD a chur i gcomparáid thar eagráin (2015 vs. 2019) mar threocht ama** — athraíonn na táscairí bunúsacha, na tíreolaíochtaí, agus an mhodheolaíocht idir eagráin; comhairlíonn MHCLG go sainráite i gcoinne athruithe rangaithe a úsáid mar fhianaise gur éirigh ceantar níos mó nó níos lú díothach.
- **IMD ar leibhéal LSOA a chur i bhfeidhm ar dhaoine aonair** — tá teaghlaigh neamhdhíothacha fós i LSOA i ndeicíl 1, agus tá cinn dhíothacha fós i LSOA deicíl 10; déanann IMD cur síos ar cheantair, ní ar dhaoine, agus mícheadaíonn é a úsáid mar ionadaí incháilitheachta aonair an dá threo.
- **Neamhaird a dhéanamh ar mhionsonraí ar leibhéal fearainn i bhfabhar an ranga chomhchumaisc** — is féidir próifílí fearainn go hiomlán difriúla a bheith ag dhá LSOA le scóir chomhchumaisc chomhionanna (ceann díothach ó thaobh sláinte, ceann eile díothach ó thaobh coireachta); ba cheart do scéim spriocdhírithe ar fhadhb amháin an scór fearainn ábhartha a úsáid, ní an comhchumasc measctha.

## Foinsí

- Ministry of Housing, Communities and Local Government. "English Indices of Deprivation 2019."
  <https://www.gov.uk/government/statistics/english-indices-of-deprivation-2019>
- MHCLG. "The English Indices of Deprivation 2019: Technical Report."
