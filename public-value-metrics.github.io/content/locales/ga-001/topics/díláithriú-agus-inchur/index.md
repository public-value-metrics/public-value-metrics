# Díláithriú agus Inchur

Tarlaíonn díláithriú nuair a bhaintear buntáiste sofheicthe clár amach trí ghníomhaíocht nó buntáiste a thógáil ó áit éigin eile, seachas rud nua a chruthú — is é do bhua-sa caillteanas duine éigin eile. Is í an inchur an cheist ghaolmhar faoin méid de thoradh breathnaithe ar féidir le d'idirghabháil creidmheas a éileamh air go dlisteanach, nuair a chuir gníomhaithe agus fachtóirí eile leis freisin. Is coigeartuithe caighdeánacha iad beirt i dtreoir mheastóireachta earnáil phoiblí na Ríochta Aontaithe, taobh le mortmhais agus sceitheadh, agus scipeann éilimh tionchair a bhfuil cuma i bhfad níos láidre orthu ná mar atá fíor iad go rialta.

## Cén fáth a bhfuil tábhacht leis

Is féidir le scéim deontas gnó de chuid údaráis áitiúil a chabhraíonn le 50 siopa a athlonnú isteach i gcrios athghiniúna "50 gnó tacaithe, 200 post cruthaithe" a thuairisciú — ach má bhog na gnólachtaí sin ó phríomhshráid comharsanachta seachas síneadh a chur leo féin, díláithríodh na poist, níor cruthaíodh iad, agus d'fhéadfadh an glanéifeacht ar fud an bhuirg (nó an réigiúin) a bheith gar do nialas. Déileálann Magenta Book de chuid HM Treasury agus an Additionality Guide fadbhunaithe leis an díláithriú mar asbhaint riachtanach go beacht toisc go bhfuil scéalta rathúla áitiúla coitianta fiú nuair nach dtáirgeann siad aon bhuntáiste náisiúnta nó réigiúnach glan — níor bhog luach ach ó áit amháin go háit eile, go minic chun míbhuntáiste na háite nó na ngníomhaithe a chaill é. Foirmlíonn treoir mheastóireachta na gcistí struchtúracha (a úsáideadh do chláir Chiste Forbartha Réigiúnaí an AE roimhe seo agus a gcomharbaí intíre, mar Chiste Rathúnais Comhroinnte na RA) é seo ag trí scála spásúla: díláithriú áitiúil (laistigh de bhaile), díláithriú réigiúnach (laistigh de réigiún), agus díláithriú náisiúnta (ar fud na RA), mar is féidir le hidirghabháil a bheith breisíoch ag scála amháin agus í ina díláithriú glan ag scála níos leithne — tá clár post a mheallann oibrithe ó bhaile comharsanachta neodrach go náisiúnta fiú má bhíonn cuma rath áitiúil air.

Is í an inchur an fhadhb dheartháir i seachadadh atá trom ar chomhpháirtíochtaí, rud atá anois ina ghnás in obair seirbhíse poiblí san earnáil shóisialta agus trasghníomhaireachta. Nuair a sheachadann trí eagraíocht seirbhís um chosc easpa dídine i gcomhpháirt, d'fhéadfadh tuarascáil bhliantúil gach eagraíochta creidmheas a éileamh go neamhspleách ar an laghdú céanna ar chodladh garbh — nuair a shuimítear ar fud na dtuarascálacha iad, is féidir leis an tionchar éilithe an t-athrú fíor-domhanda breathnaithe a shárú, uaireanta ceal iolraí. Tá treoir Magenta Book maidir le anailís ranníocaíochta ann go sonrach toisc go bhfuil inchur randamaithe chuig gníomhaí aonair dodhéanta go minic i seachadadh il-ghníomhaireachta, agus is minic gurb é an freagra macánta "chuireamar leis an toradh seo" seachas "chruthaíomar an toradh seo".

## An mhatamaitic

Díláithriú mar chuid den ord caighdeánach glan-tionchair (féach [breisíocht agus mortmhais](../breisíocht-agus-meáchan-marbh/) don slabhra iomlán):

```
Glan-tionchar breisíoch = Toradh comhlán − Mortmhais − Díláithriú − Sceitheadh, × Iolraitheoir

Ráta díláithrithe = buntáiste/gníomhaíocht atá athdhírithe ó áit eile
                     / iomlán an bhuntáiste/na gníomhaíochta comhláin breathnaithe
```

Is gnách an inchur, nuair a chuireann il-ghníomhaithe le toradh amháin, a chur in iúl mar chion ranníocaíochta seachas mar chéatadán beacht, mar nach féidir í a thomhas de ghnáth leis an dianseasmhacht chéanna agus a thomhaistear an díláithriú:

```
Cion inchurtha ≈ f(neart na ranníocaíochta cúisí, ranníocaíochtaí na ngníomhaithe eile,
                    fachtóirí seachtracha/comhthéacsúla)

Níor cheart don tionchar éilithe a bheith níos mó ná:
  Σ (cion inchurtha gach comhpháirtí) ≤ 100% den toradh breathnaithe iomlán
```

## Sampla oibrithe

**Deontas athghiniúna**: tuairiscíonn scéim deontais príomhshráide de chuid comhairle go gcruthaíodh 200 post miondíola nua sa chrios maoinithe. Aimsíonn taighde suirbhé leantach gur tháinig 60 de na poist sin ó ghnólachtaí a bhog ó phríomhshráid chomharsanachta neamhmhaoinithe laistigh den bhuirg chéanna, agus gur tháinig 30 eile ó shlabhraí náisiúnta a d'oscail craobhacha a d'osclófaí áit éigin sa réigiún pé scéal é gan an deontas.

```
Poist chomhláin éilithe = 200
Díláithriú áitiúil = 60 (bogadh laistigh den bhuirg)
Díláithriú réigiúnach = 30 (d'osclófaí go réigiúnach ar aon nós)

Poist bhreise ghlan (leibhéal an bhuirg) = 200 − 60 = 140
Poist bhreise ghlan (leibhéal réigiúnach) = 200 − 60 − 30 = 110
```

Braitheann an ceannlíne macánta ar an scála geografach is cás leis an maoinitheoir — ba cheart cás gnó de chuid HM Treasury a mheastar ag leibhéal náisiúnta nó réigiúnach 110 a úsáid, ní 140 ag leibhéal an bhuirg, agus cinnte ní an 200 amh.

**Seirbhís dídine il-ghníomhaireachta**: seachadann trí chomhpháirtí-eagraíocht (comhairle, carthanas tithíochta, agus iontaobhas sláinte) seirbhís laghdaithe codlata gharbh i gcomhpháirt. Thit codladh garbh sa cheantar 30 duine thar an mbliain. Éilíonn tuarascáil bhliantúil aonair gach eagraíochta "laghdaíomar codladh garbh 30" — nuair a shuimítear iad, éilíonn na trí thuarascáil 90 duine cuidithe, trí huaire an laghdú iarbhír. Thuairisceodh anailís ranníocaíochta a shannann cion do gach comhpháirtí (abair, 40% don chomhairle, 35% don charthanas, 25% don iontaobhas sláinte, bunaithe ar ról doiciméadaithe agus measúnú neamhspleách) 12, 10.5, agus 7.5 faoi seach, ag suimiú i gceart leis na 30 breathnaithe.

## Nasc leis an innealtóireacht bogearraí

Múnlaíonn díláithriú agus inchur an dóigh ar cheart córais rianaithe tionchair agus tuairiscithe toradh a dhearadh do sheachadadh il-suímh nó il-chomhpháirtí:

- Ba cheart go mbeadh raon geografach agus eagraíochtúil ina réimsí follasacha, bunriachtanais in aon deais tionchair — is uimhreacha difriúla iad figiúr a thuairiscítear "don bhuirg" agus an figiúr céanna a thuairiscítear "don réigiún", agus táirgfidh córas a mheascann iad uimhreacha nach féidir a réiteach ag leibhéal punainne.
- Nuair a sheachadann il-chomhpháirtithe i gcomhpháirt, ba cheart do chóras toradh cion ranníocaíochta a thaifeadadh (nó ar a laghad inchur comhpháirteach a bhrataíocht) seachas ligean do mhodúl tuairiscithe gach comhpháirtí 100% de thoradh roinnte a éileamh go neamhspleách — ar shlí eile, déanfaidh cuimsithe ag leibhéal punainne an tionchar iomlán a ró-mheas, uaireanta go dona.
- Ceanglaíonn sé seo le [toradh sóisialta ar infheistíocht](../fáltas-sóisialta-ar-infheistíocht/) agus [tuairisciú toradh deontas](../tuairisciú-torthaí-deontais/): táirgfidh áireamh SROI nó IRIS+ a ghéilleann do dhíláithriú nó a ró-inchuireann torthaí roinnte cóimheas séidte nach seasann d'iniúchadh ná d'atáirgeadh.

## Contúirtí

- **Rath áitiúil a thuairisciú gan díláithriú níos leithne a sheiceáil.** Is féidir le clár cuma an-rathúil a bheith air ag an scála tuairiscithe is lú agus é neodrach nó fiú diúltach ag scála níos leithne; luaigh i gcónaí an scála geografach lena mbaineann an figiúr glan.
- **Ligean do gach comhpháirtí i seachadadh comhpháirteach creidmheas iomlán a éileamh.** Mura n-aontaítear agus mura ndoiciméadaítear cionanna ranníocaíochta, ró-mheasfaidh tuairisciú cuimsithe ar fud comhpháirtithe an tionchar iomlán — seiceáil nach sáraíonn éilimh ar leibhéal comhpháirtí an t-iomlán breathnaithe.
- **Inchur a láimhseáil mar chéatadán beacht nuair is breithiúnas atá inti i ndáiríre.** Táirgeann anailís ranníocaíochta, murab ionann agus contrafhíoras randamaithe, meastachán inchosanta, ní fíric thomhaiste; cuir i láthair í le neamhchinnteacht chuí seachas cruinneas bréagach.
- **Díláithriú a chur i leataobh in idirghabhálacha atá dírithe ar an margadh.** Is catagóirí clasaiceacha ard-dhíláithrithe iad tacaíocht ghnó, scéimeanna fostaíochta, agus athghiniúint atá bunaithe ar áit; déileáil le seiceálacha díláithrithe mar éigeantach don chuid seo, ní roghnach.

## Foinsí

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020), lena n-áirítear
  treoir ar anailís ranníocaíochta. <https://www.gov.uk/government/publications/the-magenta-book>
- HM Treasury / Department for Business, Innovation and Skills, "Additionality Guide: A Standard
  Approach to Assessing the Additional Impact of Interventions" (3rd edition).
- European Commission, "Evalsed: The Resource for the Evaluation of Socio-Economic Development" —
  treoir ar scálaí díláithrithe áitiúla, réigiúnacha agus náisiúnta.
- Mayne J. "Contribution Analysis: An Approach to Exploring Cause and Effect." ILAC Brief No. 16,
  2008.
