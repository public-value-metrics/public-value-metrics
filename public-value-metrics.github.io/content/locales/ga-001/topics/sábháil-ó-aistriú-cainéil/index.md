# Sábháil ó aistriú cainéil

Is éard is sábháil ó aistriú cainéil ann an laghdú tuartha costais a thagann as méid idirbheart a aistriú ó chainéil chostasacha — guthán, cuntair duine le duine, post páipéir — go féinseirbhís dhigiteach shaor. Is é an t-inneall airgeadais é taobh thiar de "digiteach mar réamhshocrú", agus is é freisin an mhír sa chás gnó is dóichí a bheith mícheart, toisc nach bhfuil an bonn tuisceana a bhfuil sé ag brath air — go ngearrtar cainéil as líne de réir mar a ardaíonn glacadh digiteach — fíor ach uaireanta.

## Cén fáth a bhfuil tábhacht leis

Tá an uimhríocht dosháraithe ag úsáid na bhfigiúr [costas an idirbhirt](../costas-in-aghaidh-an-idirbhirt/) ón Digital Efficiency Report: aistrigh milliún idirbheart ó chuairt duine le duine £8.62 go ceann digiteach £0.15 agus is breis is £8 milliún an tsábháil. Ach ní bhíonn sábháil ina airgead tirim saortha le haghaidh athimlonnaithe ach amháin má dhéantar *acmhainneacht seasta* an chainéil a laghdaítear a dhíchoimisiúnú i ndáiríre — na suíocháin lárionaid teagmhála, an fhoireann cuntair, na nóiméid conartha gutháin — agus fuair cláir dhigiteacha an rialtais áitiúil arís agus arís eile nach laghdaíonn an méid iomlán teagmhála ag teacht le glacadh digiteach. Tá patrún athfhillteach doiciméadaithe ag taighde ó chláir chlaochlaithe dhigitigh údaráis áitiúla agus ó chomhlachtaí ar nós Socitm agus an Local Government Association: meallann cainéil dhigiteacha fíor-theagmháil nua (saoránaigh nach nglaofadh ná nach dtabharfadh cuairt roimhe seo déanann siad anois, toisc go bhfuil sé níos éasca), agus teipeann ar sciar suntasach d'idirbhearta "digiteacha" i lár na slí agus gineann siad glao gutháin ar aon nós — mar sin titeann méid na nglaonna i bhfad níos lú ná mar a thabharfadh céatadán glactha digiteach le fios, uaireanta gan titim ar chor ar bith i dtéarmaí iomlána fiú agus a *sciar* den teagmháil iomlán ag laghdú.

## An mhatamaitic

```
Sábháil ollmhéadaithe ó aistriú cainéil = méid aistrithe × (costas_seanchainéal − costas_digiteach)

Sábháil ghlan (réadaithe) = sábháil ollmhéadaithe
                       − éileamh nua/scáth a chruthaigh an cainéal níos éasca
                       − costas éilimh theip (teipeanna digiteacha a
                         ghineann glao gutháin nó cuairt cuntair fós)
                       − costas acmhainneachta seasta nár scoireadh (ní féidir le
                         lárionad teagmhála foireann a scaoileadh ach in aonaid scoite;
                         is annamh a ligeann titim 15% i méid duit 15% de
                         cheannlíon a ghearradh)

Tairseach réadaithe: ní féidir sábhálacha a bhaincéireacht ach nuair a thiteann méid
faoi bhun an leibhéil is féidir leis an seanchainéal a fhoirneamh ag a chéad
chéim acmhainneachta scoite is lú eile (m.sh. aon seal iomlán, aon deasc iomlán,
aon bhanda ceannlíon conarthaithe a chailliúint)
```

## Sampla oibrithe

**Seirbhís athnuachana bheaids ghorma comhairle contae**: 60,000 athnuachan sa bhliain, 100% guthán/páipéar roimhe seo ar £6.40 an t-idirbheart. Seoltar seirbhís nua dhigiteach agus sroicheann sí 65% glactha digiteach laistigh de bhliain, ar £0.30 an t-idirbheart digiteach.

```
Ríomh saoithiúil (ollmhéadaithe) ar an tsábháil:
  39,000 aistrithe × (£6.40 − £0.30) = £237,900/bliain

Cad a tharla i ndáiríre, de réir sonraí lárionad teagmhála na comhairle:
  Thit méid na nglaonna ó 60,000/bliain go 46,000/bliain (−23%, ní −65%)
  toisc: gur theip ar 9,000 turas digiteach agus gur ghin siad glao leantach
         (sceitheadh éilimh theip), agus go bhfuil 4,000 duine nár athnuaigh
         ar chor ar bith roimhe seo ag athnuachan anois, tar éis dóibh
         é a fháil éasca ar líne
         (éileamh scáth — feabhsú fíor rochtana, ach ní sábháil)

  Tá lárionad teagmhála an ghutháin foirnithe i mbandaí 8,000 glao/FTE;
  scaoileann titim 14,000 glao (60,000 → 46,000) 1.75 FTE, a shlánaítear
  síos i gcleachtas go 1 FTE athimlonnaithe i ndáiríre = £34,000/bliain

Sábháil réadaithe = £34,000/bliain móide costas tógála/reatha an chainéil
  dhigitigh a seachnaíodh ar 39,000 idirbheart ≈ £34,000 + (39,000 × £0.30
  costas digiteach atá cuntasaithe cheana) — cuid bheag den cheannlíne £237,900,
  cé go bhfuil an tseirbhís fós níos fearr go neamhathbhríoch d'úsáideoirí.
```

## Nasc leis an innealtóireacht bogearraí

Is é ceacht na hinnealtóireachta go réadaítear sábhálacha aistrithe cainéil trí chinntí *oibríochtúla* (rósta, díchoimisiúnú, athchaibidlíocht conartha), ní trí sheoladh na mbogearraí — is féidir le foireann gach pointe den [digital-service-standard](../an-caighdeán-um-sheirbhís-dhigiteach/) a bhaint amach agus nialas sábháil ghlan a sheachadadh fós mura scoireann aon duine acmhainneacht seasta an tseanchainéil. Is fadhb inréitithe anailísíochta mhaoláin í éileamh teip (cén áit sa turas digiteach a thréigeann úsáideoirí agus cad a dhéanann siad ansin) a ionstraimiú agus is é an rud is mó tiomána a fhéadfaidh foireann innealtóireachta a dhéanamh chun cás na sábhála a chosaint; is é an nasc díreach é freisin le [costas an idirbhirt](../costas-in-aghaidh-an-idirbhirt/), a ghéaraíonn an t-éileamh teip go ciúin. Féach [réadú sochar](../réadú-sochar/) don disciplín leathan chun a sheiceáil go dtagann sábhálacha chás gnó i dtír i ndáiríre, agus [cuimsiú digiteach](../cuimsiú-digiteach/) le fáil amach cén fáth nach féidir leis an gcainéal as líne a bheith scortha go hiomlán de ghnáth, agus nár cheart.

## Contúirtí

- **Glacadh le ionadú 1:1 cainéal**: glacadh digiteach a mhúnlú mar dhealú díreach ó mhéid guthán/cuntair, ag déanamh neamhaird ar éileamh scáth agus ar shceitheadh éilimh theip a bhfuil doiciméad déanta air i dtaighde aistrithe cainéil an rialtais áitiúil.
- **Sábhálacha ollmhéadaithe a thaifeadadh roimh dhíchoimisiúnú**: an tsábháil a chomhaireamh sa chás gnó sa bhliain ina n-ardaíonn glacadh, ní sa bhliain (más ann di riamh) a ghearrtar acmhainneacht an tseanchainéil i ndáiríre.
- **Neamhaird ar nádúr na feidhme céimeanna i gcostais fhoirneamh**: is annamh a thiontaíonn titim 20% i méid go titim 20% costais, toisc go bhfuil lárionaid teagmhála agus cuntair foirnithe i mbandaí scoite, ní go leanúnach.
- **Caitheamh le héileamh scáth mar dhramhaíl**: is fíorfhás ar [luach poiblí](../luach-poiblí/) é teagmháil nua ó úsáideoirí a bhí eisiata nó díspreagtha roimhe seo, ní earráid mhúnlaithe — ba cheart é a thuairisciú mar thoradh rochtana, gan é a ghlanadh amach mar thorann.

## Foinsí

- Cabinet Office, Digital Efficiency Report (2012). <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- Local Government Association, digital transformation and channel shift resources. <https://www.local.gov.uk/our-support/efficiency-and-income-generation/digital-transformation>
- Socitm, local public services digital insight research. <https://www.socitm.net/>
