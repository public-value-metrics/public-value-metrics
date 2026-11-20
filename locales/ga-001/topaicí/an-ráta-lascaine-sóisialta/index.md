# An ráta lascaine sóisialta

Aistríonn an ráta lascaine sóisialta costais agus tairbhí amach anseo go luachanna an lae inniu ionas gur féidir
cláir a bhfuil a mbuntáistí leata thar na deicheanna a chur i gcomparáid ar bhonn comhchoitianta. Ordaíonn an Green Book
de chuid HM Treasury sceideal laghdaitheach atá ankartha ag 3.5% don chéad 30 bliain, bunaithe ar fhoirmle Ramsey — uimhir
shonrach is féidir a lua a bhfuil argóint bheo pholaitiúil agus eiticiúil bainte léi aon uair a chuirtear i bhfeidhm í
ar ghealltanais fhadtéarmacha ar nós beartas aeráide nó bonneagair.

## Cén fáth a bhfuil tábhacht leis

Níl punt tairbhe a fhaightear i gceann 30 bliain chomh luachmhar le punt tairbhe a fhaightear inniu, ar chúiseanna
atá bainteach pháirt-chuid le fíorthosaíocht ama (is fearr le daoine agus le sochaithe rudaí maithe níos luaithe) agus
páirt-chuid le fás (táthar ag súil go mbeidh sochaí amach anseo níos saibhre, mar sin is lú tábhacht punt di ag an
imeall). Díorthaíonn Annex 6 den Green Book ráta lascaine caighdeánach na Ríochta Aontaithe ó fhoirmle Ramsey, ag
comhcheangal ráta fíorthosaíochta ama leis an ráta fáis a bhfuiltear ag súil leis don tomhaltas agus le
leaisteacht úsáidí imeallaigh an tomhaltais, ag táirgeadh an ráta fhoilsithe 3.5% in aghaidh na bliana do bhlianta
0–30, ag laghdú i sceideal foilsithe do bhlianta 31 agus níos faide (síos go 1% do bhlianta 301+). Tá an sceideal
seo ann go beacht toisc go ndéanfadh 3.5% seasta comhshuimithe thar chéad bliain beagnach aon tairbhe fhadtéarmach
— cosaint ar thuilte ag sábháil beatha i gceann 80 bliain, laghdú carbóin ag seachaint dochair i gceann 100 bliain —
neamhshuntasach i dtéarmaí luacha reatha, rud a mheas an Státchiste a bheith ina chonclúid eiticiúil dhochreidte do
chinntí bonneagair agus comhshaoil fíor-fhadsaolacha.

Tá an ráta lascaine faoi dhíospóireacht go beacht toisc nach paraiméadar teicniúil neodrach é an rogha: ionchódaíonn sé
breithiúnas faoin méid ba cheart do shochaí a íobairt inniu ar son daoine nár rugadh fós. Bhain an Stern Review on the
Economics of Climate Change (2006) úsáid as ráta lascaine gar do nialas (fíorthosaíocht ama de thart ar 0.1%),
ag áiteamh go bhfuil lascainiú ar leas na nglún amach anseo ag rud ar bith cosúil le rátaí margaidh do-chosanta ó
thaobh na heitice de nuair atá an dochar (athrú aeráide tubaisteach) dochúlghairthe. Dúirt cáinteoirí — William
Nordhaus go háirithe — gur chuir ráta beagnach nialasach Stern an cás i bhfiús ar mhaithe le caiteachas láithreach
aeráide trí chostas láithreach beagnach ar bith a dhéanamh le feiceáil mar chostas atá cuí i gcoinne tairbhe amach
anseo nach bhfuil lascainithe ach go beag. Níorbh í an mhatamaitic a bhí i gceist leis an easaontas; ba é an cheist
cé acu creat eiticiúil ba cheart a bheith ag socrú an ráta, agus is é fós an sampla caighdeánach den fháth gur rogha
beartais é an ráta lascaine, ní ionchur achtúireach amháin.

## An mhatamaitic

Foirmle Ramsey atá mar bhunús le ráta an Green Book:

```
r = ρ + η·g

nuair:
  r = ráta lascaine sóisialta
  ρ = ráta fíorthosaíochta ama (mífhoighne + riosca tubaiste)
  η = leaisteacht úsáidí imeallaigh an tomhaltais
  g = ráta fáis bliantúil a bhfuiltear ag súil leis do thomhaltas per capita
```

Sceideal laghdaitheach an Green Book (Annex 6, samplach — seiceáil an eagrán reatha don tábla foilsithe beacht):

```
Blianta 0–30:    3.5%
Blianta 31–75:   3.0%
Blianta 76–125:  2.5%
Blianta 126–200: 2.0%
Blianta 201–300: 1.5%
Blianta 301+:    1.0%
```

Luach reatha suime amach anseo:

```
PV = FV / (1 + r)^t
```

## Sampla oibrithe

**Scéim chosanta ar thuilte**: seachadann tionscadal £10 milliún de dhamáiste tuilte a seachnaíodh i mbliain 40.

Ag úsáid ráta cothrom 3.5%: PV = 10,000,000 / (1.035)^40 ≈ £2.52 milliún — tá cuma bheag ar an tairbhe.

Ag úsáid sceideal laghdaitheach an Green Book (3.5% do bhlianta 0–30, 3.0% ina dhiaidh), comhshuimíonn an ríomh ag 3.5%
don chéad 30 bliain agus ag 3.0% do bhlianta 31–40:

```
PV = 10,000,000 / [(1.035)^30 × (1.03)^10]
   = 10,000,000 / [2.807 × 1.344]
   ≈ 10,000,000 / 3.773
   ≈ £2.65 milliún
```

Ardaíonn an sceideal laghdaitheach luach reatha tairbhí fadtéarmacha beagán i gcomparáid le ráta cothrom ard — is é sin
fíorchuspóir an sceidil, ós rud é go lascainfeadh 3.5% cothrom thar chéad bliain tairbhe £100 milliún i mbliain 100
go faoi bhun £3.3 milliún.

**Bonneagar digiteach**: táthar ag súil go seachnóidh imirce scamall rialtais a chosnaíonn £4 milliún anois
£500,000/bliain i gcostais chothabhála oidhreachta ar feadh 15 bliana. Ag 3.5%, tá luach reatha an bhliantachta sin thart ar
£500,000 × 11.52 (fachtóir bliantachta 15 bliana ag 3.5%) ≈ £5.76 milliún — ag sárú costas £4 milliún go compordach, cás
glanluach reatha dearfach a bhreathnódh i bhfad níos laige ag ráta níos airde a roghnaítear go míchúramach (ag 7%, titeann
an fachtóir bliantachta céanna go thart ar 9.11, rud a thugann £4.56 milliún, fós dearfach ach le corrlach i bhfad
níos tanaí).

## Nasc leis an innealtóireacht bogearraí

Reáchtálann formhór na gcásanna gnó bogearraí thar 3–5 bliana, go maith laistigh den bhanda cothrom 3.5%, mar sin is
annamh a ghreamaíonn an sceideal laghdaitheach go díreach — ach tá tábhacht leis an disciplín bhunúsach d'aon
infheistíocht teicneolaíochta rialtais a bhfuil saolré fhada sócmhainne aici (ardán náisiúnta, clár bonneagair sonraí,
conradh ilchaogaide):

- Úsáid ráta foilsithe an Green Book seachas "ráta bacainne" inmheánach a fuarthas ar iasacht ón airgeadas príobháideach;
  beidh iniúchóirí agus athbhreithneoirí an Státchiste ag súil leis an sceideal caighdeánach.
- I gcás tairbhí a thuigtear blianta fada amach anseo (sábhálacháin chothabhála fhadtéarmacha ardáin, luach comhshuimithe
  éiceachórais sonraí oscailte — féach [luach sonraí oscailte](../luach-na-sonraí-oscailte/)), is féidir leis an rogha lascaine cás gnó a
  iompú ó dhearfach go diúltach; déan an ráta agus an léaslíne ina dtoimhdí sainráite, ní ina réamhshocruithe folaithe.
- Cuireann sé seo go díreach le [measúnú an Green Book](../measúnú-green-book/), an múnla cúig chás a éilíonn go foirmiúil
  sreabhadh airgid lascainithe, agus le [luacháil folláine](../luacháil-folláine/), áit a n-eascraíonn an cheist
  lascaine chéanna do thairbhí folláine neamh-airgeadaíochta.
- Féach freisin [cothromas idirghlúine agus lascainiú inbhuanaitheachta](../cothroime-idirghlúine-agus-lascainiú-inbhuanaitheachta/)
  don díospóireacht Stern-in-aghaidh-Nordhaus a chuirtear i bhfeidhm go sonrach ar infheistíocht teicneolaíochta comhshaoil
  agus aeráide.

## Contúirtí

- **Ráta cothrom a úsáid do léaslínte an-fhada.** Tá sceideal laghdaitheach an Green Book ann go sonrach toisc go
  dtearc-mheasann ráta seasta tairbhí fíor-fhadsaolacha; seiceáil cé acu banda a bhaineann leis seachas 3.5% a úsáid
  mar réamhshocrú ar fud an tsrutha.
- **Caitheamh leis an ráta lascaine mar rud neodrach go heiticiúil.** Léiríonn an t-easaontas Stern-Nordhaus go
  n-ionchódaíonn an ráta breithiúnas luacha faoi ghlúnta amach anseo; athraíonn a athrú cé na cláir a bhreathnaíonn
  cuí, mar sin ba cheart é a lua agus a chosaint, gan é a fholú i réamhshocrú scarbhileoige.
- **An ráta lascaine sóisialta a mheascadh le costas caipitil príobháideach.** Is coincheapa difriúla ó rátaí sóisialta
  díorthaithe ó Ramsey iad costais iasachtaíochta rialtais agus rátaí bacainne san earnáil phríobháideach, agus saobhfaidh
  ceann a chur in ionad an cheann eile i measúnú poiblí an toradh de ghnáth i dtreo fabhar a thabhairt do thuairisceáin ghearrthéarmacha.
- **Sreafaí airgid réadacha agus ainmniúla a lascainiú go neamhchomhsheasmhach.** Is ráta réadach (coigeartaithe do
  boilsciú) é ráta an Green Book; má lascainítear sreafaí airgid ainmniúla leis tearc-mheastar luachanna reatha go
  suntasach.

## Foinsí

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation", Annex 6
  (2022). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Stern N. "The Economics of Climate Change: The Stern Review." HM Treasury, 2006.
- Nordhaus WD. "A Review of the Stern Review on the Economics of Climate Change." Journal of
  Economic Literature, 2007;45(3):686–702.
- Ramsey FP. "A Mathematical Theory of Saving." Economic Journal, 1928;38(152):543–559.
