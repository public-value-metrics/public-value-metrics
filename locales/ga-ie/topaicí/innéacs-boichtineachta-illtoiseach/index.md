# Innéacs Boichtineachta Illtoiseach (MPI)

Tomhaiseann an MPI an bhoichtineacht mar easnaimh forluiteacha a bhíonn ar dhuine ag an am céanna — i
dtaobh sláinte, oideachais agus caighdeán maireachtála — seachas mar ioncam amháin a thiteann faoi
líne. D'fhorbair Tionscnamh Boichtineachta agus Forbartha Daonna Oxford (OPHI) é le Sabina Alkire agus
James Foster, agus foilsíodh i gcomhar le UNDP é i ngach Tuarascáil ar an bhForbairt Dhaonna ó 2010 i
leith, taobh leis an [Innéacs Forbartha Daonna](../innéacs-na-forbartha-daonna/).

## Cén fáth a bhfuil tábhacht leis

Ní aithníonn línte boichtineachta ioncaim na daoine a bhfuil go leor ioncaim airgid acu ach nach bhfuil
uisce glan, scolaíocht acu, nó a mhaireann beo tar éis bás linbh — agus ní aithníonn siad go
mbíonn easnaimh carntha le chéile: is dóichí go mór go mbeidh easpa sláintíochta agus leanbh
mífhaoisimh ag teaghlach gan leictreachas. Cuireann modh Alkire-Foster, a bhfuil an MPI bunaithe air,
easnaimh gach duine i gcomhaireamh thar deich dtáscaire atá grúpáilte i dtrí thoise meáite go cothrom
— sláinte, oideachas, caighdeán maireachtála — agus ní aicmíonn sé duine mar "boicht de réir MPI" ach
amháin má thrasnaíonn a scór easnaimh meáite tairseach seasta, rud a ghabhann an forluí nach féidir le
tacar staitisticí aontáscaire ar leith a ghabháil. Foilsíonn OPHI an mhodheolaíocht iomlán agus sonraí
na dtíortha ag <https://ophi.org.uk/multidimensional-poverty-index/>; clúdaíonn an MPI domhanda a
choinníonn sé i gcomhar le UNDP breis agus 110 tír anois. Maidir le bogearraí a tógadh do chláir
frithbhoichtineachta — aistrithe airgid, triáiseáil cúraim shóisialta, spriocdhíriú cabhrach — is minic
gurb é tacar táscairí an MPI an rud is gaire do scéimre caighdeánaithe easnaimh atá bailíochtaithe cheana
ag dosaen oifigí staidrimh náisiúnta.

## An mhatamaitic

```
10 dtáscaire, 3 thoise, meáchan 1/3 ag gach toise:

Sláinte (1/3):            cothú (1/6), básmhaireacht leanaí (1/6)
Oideachas (1/3):          blianta scolaíochta (1/6), freastal ar scoil (1/6)
Caighdeán maireachtála (1/3):  breosla cócaireachta, sláintíocht, uisce óil,
                          leictreachas, tithíocht, sócmhainní (1/18 an ceann)

scór easnaimh (c) = suim mheáchain na dtáscairí ina bhfuil duine ar easnamh

is duine "boicht de réir MPI" é más rud é go bhfuil c ≥ 1/3 (an tairseach boichtineachta, k = 33%)

H (cóimheas comhaireamh ceann) = líon na ndaoine boicht de réir MPI / iomlán an daonra
A (déine)                      = meánscór easnaimh i measc na ndaoine boicht de réir MPI amháin

MPI = H × A
```

Toisc go méadaíonn an MPI an *sciar* atá bocht faoin gcaoi *cé chomh* bocht atá siad, is féidir le dhá
réigiún leis an gcóimheas comhaireamh ceann céanna scóir MPI an-difriúla a bheith acu má tá easnaimh níos
déine in aon cheann amháin — an loighic chéanna "gan ionadú trasna toisí" atá taobh thiar de mheán
geoiméadrach an HDI.

## Sampla oibrithe

**Suirbhé náisiúnta ar 1,000 duine**: sainaithnítear 350 mar dhaoine boicht illtoiseacha (scór easnaimh
≥ 33%). I measc na 350 duine bocht sin amháin, is é 45% an meánscór easnaimh.

```
H = 350 / 1000                = 0.350
A = 0.45
MPI = H × A = 0.350 × 0.45    = 0.1575
```

**Dhá cheantar a chur i gcomparáid le comhaireamh ceann cothrom**: Ceantar A: H = 0.30 agus A = 0.40
(go leor daoine boicht, easnamh measartha); Ceantar B: H = 0.30 agus A = 0.60 (an líon céanna daoine
boicht, ach easnamh níos déine — gan leictreachas *agus* gan sláintíocht *agus* gan freastal ar scoil ag
an am céanna).

```
MPI_A = 0.30 × 0.40 = 0.120
MPI_B = 0.30 × 0.60 = 0.180
```

An cóimheas comhaireamh ceann céanna, MPI 50% níos airde i gCeantar B — dhéanfadh córas spriocdhírithe
bunaithe ar bhoichtineacht chomhaireamh ceann amháin an dá cheantar a rangú go cothrom agus ní
thuigfeadh sé go dteastaíonn idirghabháil níos doimhne i gCeantar B.

## Nasc leis an innealtóireacht bogearraí

- Is minic go stórálann córais bainistíochta cásanna agus incháilitheachta do chláir shóisialta roinnt
  de na deich dtáscaire (tithíocht, freastal ar scoil, comharthaí sláinte) cheana i silónna ar leith;
  is scéimre réamhdhéanta é modh comhairimh Alkire-Foster chun iad a chomhcheangal i scór easnaimh
  amháin in ionad múnla scórála saincheaptha a thógáil ón tús.
- Is patrún úsáideach go ginearálta é an scoilt comhaireamh ceann/déine (H × A) d'aon phainéal a
  thuairiscíonn "cé mhéad atá buailte" taobh le "cé chomh dona" — má thitear an dá rud isteach in aon
  uimhir amháin, mar a dhéanann staitisticí ráta ginearálta amh, cuirtear i bhfolach go beacht an cás a
  dteastaíonn an líon is mó acmhainní uaidh.
- Téann painéil táscairí den chineál MPI go nádúrtha le tuairisciú ar [chostas an tairbhí](../costas-in-aghaidh-an-tairbhí/)
  do chláir fhrithbhoichtineachta: is aonad intchosanta é an costas in aghaidh pointe laghdaithe MPI chun
  idirghabhálacha an-difriúla a chur i gcomparáid (aistriú airgid vs. bonneagar sláintíochta).

## Contúirtí

- **Caitheamh leis na deich dtáscaire mar dhaoine uilíocha** — tá táscairí MPI domhanda OPHI calabraithe
  d'inchomparáideacht trasna tíortha; oiriúnaíonn MPIanna náisiúnta (foilsíonn go leor tíortha, lena
  n-áirítear roinnt tíortha i ndeisceart na hÁise agus san Afraic, a gcuid féin) táscairí agus meáchain
  do chomhthéacs áitiúil, agus níl an dá cheann inchomparáide go díreach.
- **H amháin a thuairisciú** — ní thugann an cóimheas comhaireamh ceann aon aird ar dhéine; tuairiscigh
  nó ríomh A taobh leis i gcónaí, nó an MPI féin.
- **A mheas gurb ionann an daonra boicht de réir MPI agus an daonra boicht de réir ioncaim** — de ghnáth
  léiríonn achoimrí tíre OPHI féin nach bhfuil ach forluí páirteach idir an dá cheann; caillfidh clár
  nach spriocdhíríonn ach ar dhaoine boicht de réir ioncaim sciar suntasach de na daoine boicht
  illtoiseacha go córasach.

## Foinsí

- Oxford Poverty and Human Development Initiative. "Multidimensional Poverty Index."
  <https://ophi.org.uk/multidimensional-poverty-index/>
- Alkire S, Foster J. "Counting and Multidimensional Poverty Measurement." Journal of Public
  Economics, 2011.
- UNDP & OPHI. "Global Multidimensional Poverty Index" (annual report).
