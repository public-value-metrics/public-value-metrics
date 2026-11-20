# Modhanna Meastóireachta Tionchair

Is iad modhanna meastóireachta tionchair na dearaí staidrimh agus turgnamhacha a úsáidtear chun meastachán a dhéanamh ar an méid a bhí ina chúis le beartas nó clár i ndáiríre, seachas an méid a bheadh tarlaithe ar aon nós — is iad trialacha rialaithe randamaithe (RCTanna), difríocht-i-ndifríochtaí, meaitseáil scóir claonta, agus dearadh scoilte rialtachta na ceithre cinn is coitianta a úsáidtear i mbeartas poiblí na RA. Tá siad ann toisc nach féidir formhór na n-idirghabhálacha rialtais a thástáil i saotharlann: ní féidir leat a randamú cén baile a gheobhaidh bealach bus nua ar an mbealach a fhéadfaidh tú a randamú cén t-othar a gheobhaidh druga, mar sin glacann na modhanna seo an loighic chúisíoch chéanna gan sannadh randamach a éileamh i gcónaí.

## Cén fáth a bhfuil tábhacht leis

Is é Magenta Book HM Treasury, Annex A ar mhodhanna scoth-turgnamhacha, an treoir chanónach de chuid rialtas na RA maidir le roghnú idir na dearaí seo, agus déanann comhlachtaí ar nós an Education Endowment Foundation agus an What Works Centre for Local Economic Growth ordlathas fianaise a institiúidiú atá tógtha timpeall orthu — RCTanna nuair is indéanta agus eiticiúil randamú, dearaí scoth-turgnamhacha nuair nach ea. Ní iar-smaoineamh teicniúil é rogha an mhodha: socraíonn sé cibé an féidir le meastóireacht "ar chuir an clár seo faoi deara é seo?" a fhreagairt nó "ar tharla seo tar éis don chlár tosú?" amháin, arb é an cheist chéanna é a bhfuil [anailís chontrafhíorasach](../anailís-fhrithfhíorasach/) tógtha chun cleachtóirí a chur iallach ar a chur sular coimisiúnaítear aon mheastóireacht.

## An mhatamaitic

```
RCT:
  Tionchar = meán(toradh | grúpa cóireála) − meán(toradh | grúpa rialaithe)
  (bailí toisc go bhfuil sannadh cóireála randamach)

Difríocht-i-ndifríochtaí (DiD):
  Tionchar = [toradh_tar_éis(cóireáilte) − toradh_roimh(cóireáilte)]
           − [toradh_tar_éis(rialú) − toradh_roimh(rialú)]
  (éilíonn toimhde "treochtaí comhthreomhara": bheadh na grúpaí cóireáilte agus rialaithe
   bogtha le chéile gan an idirghabháil)

Meaitseáil scóir claonta (PSM):
  1. Meas P(cóireáil = 1 | comhathróga X) do gach aonad → scór claonta
  2. Meaitseáil aonaid chóireáilte le haonaid neamhchóireáilte a bhfuil scóir chlaonta chosúla acu
  3. Tionchar = meán(toradh | cóireáilte) − meán(toradh | rialú meaitseáilte)

Dearadh scoilte rialtachta (RDD):
  Tionchar = léim sa toradh a breathnaíodh ag tairseach incháilitheachta,
             ag comparáid aonad díreach os cionn vs díreach faoi bhun na tairsí
```

## Sampla oibrithe

**Údarás áitiúil (difríocht-i-ndifríochtaí do chlár teaghlach faoi bhrú)**: is é an toradh freastal scoile. Bogann an ceantar cóireáilte ó 84% go 89% freastail (+5 phointe céatadáin) thar thréimhse an chláir; bogann ceantar inchomparáide ach neamhchóireáilte ó 85% go 87% (+2 phointe céatadáin) thar an tréimhse chéanna. Meastachán tionchair DiD: 5 − 2 = +3 phointe céatadáin inchurtha leis an gclár. Cuirtear i bhfeidhm ar chohórt de 2,000 dalta sa cheantar cóireáilte é, tá sé seo comhsheasmhach le thart ar 60 dalta breise (3% × 2,000) ag sroicheadh an chatagóir freastail níos airde, eachtarshuíomh ar cheart í a thuairisciú lena rabhadh treochtaí-comhthreomhara, ní mar chomhaireamh ceann beacht.

**Carthanas (meaitseáil scóir claonta do charthanas infhostaitheachta)**: meaitseáiltear 300 rannpháirtí clár le 300 duine aonair ó thacar sonraí riaracháin níos mó ag úsáid scóir chlaonta tógtha ó aois, stair fhostaíochta roimhe, agus leibhéal cáilíochta. Ráta fostaíochta dhá mhí dhéag: grúpa cóireáilte meaitseáilte 46%, grúpa comparáide meaitseáilte 33%. Meastachán tionchair PSM: 46% − 33% = +13 phointe céatadáin inchurtha leis an gclár, ar choinníoll nach bhfuil aon chomhathróg mearbhaithe neamhbhreathnaithe (mar spreagadh) ag tiomáint rannpháirtíochta agus toraidh araon.

## Nasc leis an innealtóireacht bogearraí

Braitheann sé go mór ar chinntí innealtóireachta sonraí a rinneadh go luath cibé an bhfuil aon cheann de na dearaí seo indéanta níos déanaí. Teastaíonn athróg rite taifeadta go cruinn agus tairseach incháilitheachta atá fíorghlan ó RDD; teastaíonn sonraí painéil inchomparáide le himeacht ama do cheantair chóireáilte agus chomparáide ó DiD, rud a chiallaíonn nascanna comhsheasmhacha ar fud córas agus blianta; teastaíonn sonraí comhathróige bonnlíne saibhre a gabhadh roimh chóireáil ó PSM, ní a athchruthaítear ina dhiaidh. Is é múnla sonraí a dearadh taobh le [teoiric athraithe](../teoiric-athraithe/) agus [múnla loighce](../múnla-loighce/) ón tús — ag gabháil comhathróga bonnlíne, dátaí, agus taifid incháilithe do ghrúpa comparáide — a dhéanann meastóireacht tionchair dhian indéanta ar ball, in ionad scrabhadh costasach iar-hoc. Féach [meastóireacht tionchair vs meastóireacht próisis](../meastóireacht-tionchair-vs-meastóireacht-próisis/) don cheist chomhlántach nach bhfreagraíonn na modhanna seo ar a gcuid féin.

## Contúirtí

- **RCT a fhorchur nuair nach bhfuil sé indéanta nó eiticiúil**, nó os a choinne sin gan dearadh scoth-turgnamhach a chur san áireamh riamh nuair a bhí deis fhíor ann dó — tairseach beartais, scaoileadh céimnithe — nár úsáideadh.
- **Neamhaird a dhéanamh ar thoimhde na dtreochtaí comhthreomhara i DiD.** Má bhí an ceantar comparáide ag díorthú ón gceantar cóireáilte cheana roimh an idirghabháil, tá an chomparáid dhá phointe truaillithe; seiceáil réamhtreochtaí, ní díreach roimh/tar éis.
- **Meaitseáil ar chomhathróga breathnaithe amháin i PSM.** Is féidir le roghnú neamhbhreathnaithe, mar spreagadh rannpháirtithe, an meastachán a chlaonadh fiú nuair atá comhathróga breathnaithe cothromaithe go maith.
- **Ionramháil athróige rite i RDD.** Má fhéadann daoine tionchar a imirt ar a scór chun titim díreach laistigh de thairseach incháilitheachta, ní leithlisíonn an scoilt éifeacht chúisíoch a thuilleadh.

## Foinsí

- HM Treasury, Magenta Book (2020), Annex A: Quasi-Experimental Methods. <https://www.gov.uk/government/publications/the-magenta-book>
- What Works Centre for Local Economic Growth, evidence review methodology. <https://whatworksgrowth.org/>
- Education Endowment Foundation, evaluation guidance. <https://educationendowmentfoundation.org.uk/>
