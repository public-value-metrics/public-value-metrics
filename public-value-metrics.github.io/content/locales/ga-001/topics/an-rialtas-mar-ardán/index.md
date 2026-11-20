# An Rialtas mar Ardán (GaaP)

Is é an Rialtas mar Ardán an straitéis chun comhpháirteanna comhroinnte, athúsáidte — seirbhís fógraí, seirbhís íocaíochtaí, seirbhís aitheantais — a thógáil uair amháin, go lárnach, ionas go n-úsáideann na céadta seirbhís rialtais aonair iad seachas go dtógann gach ceann acu a gceann féin. Athfhrámaíonn sé bonneagar digiteach poiblí mar fhadhb eacnamaíocht ardáin: ní in aon chomhtháthú amháin atá an luach, is sa chostas imeallach a théann i dtreo nialais don fhoireann *eile* a ghlacann leis.

## Cén fáth a bhfuil tábhacht leis

Leag GDS amach an straitéis go foirmiúil ina fhoilseachán 2015 "Government as a Platform", ag áitiú go raibh an rialtas ag tógáil na gcumas céanna — íocaíochtaí a ghlacadh, úsáideoirí a chur ar an eolas, aitheantas a fhíorú, seoladh a chuardach — ar leithligh i seirbhís i ndiaidh seirbhíse, gach ceann acu ag iompar a sholáthair, a mheasúnaithe slándála, agus a ualaigh tacaíochta leanúnaí féin. Ba é an rogha eile líon beag ardán comhroinnte, tógtha chun ardchaighdeáin uair amháin agus athúsáidte i ngach áit: GOV.UK Notify chun ríomhphoist, teachtaireachtaí téacs agus litreacha a sheoladh, GOV.UK Pay chun íocaíochtaí ar líne a ghlacadh, agus GOV.UK One Login (comharba chlár aitheantais GOV.UK Verify níos luaithe) d'fhíorú aitheantais. Is é an scála a bhain na hardáin seo amach an fianaise is soiléire gur oibrigh an straitéis: d'oibrigh GOV.UK Pay níos mó ná £10 billiún in idirbhearta ar fud thart ar 1,800 seirbhís aonair — agus cé gur thóg sé thart ar cheithre bliana a chéad £1 billiún a phróiseáil, próiseálann sé an oiread sin anois i thart ar chúig mhí — agus sheol GOV.UK Notify níos mó ná 9 billiún teachtaireacht thar ceann níos mó ná 1,500 eagraíocht rialtais. Sheachain gach ceann de na seirbhísí glactha sin a gcomhéadan íocaíochta nó píblíne teachtaireachtaí féin a thógáil, a dhaingniú agus a chothabháil.

## An mhatamaitic

```
Costas tógála in aghaidh seirbhíse (gan ardán) = N seirbhís × costas chun
  córas íocaíochta/fógra/aitheantais amháin a thógáil, a mheasúnú ó thaobh slándála, agus a rith

Costas ardáin = costas seasta tógála ardáin
              + costas imeallach in aghaidh gach seirbhíse glactha (comhtháthú,
              cumraíocht, tacaíocht leanúnach foirne ardáin)

Briseann athúsáid fiú nuair:
  costas tógála ardáin < N × (costas tógála in aghaidh seirbhíse − costas
  imeallach comhtháthaithe)

Do ardán aibí, druideann an costas imeallach in aghaidh gach glacadóra breise
leis an táille idirbhirt/teachtaireachta amháin — déantar an costas seasta a
amúchadh ar fud eastát iomlán an rialtais, ní buiséad roinne amháin, agus
sin an fáth a mhaoinítear comhpháirteanna GaaP go lárnach de ghnáth seachas
iad a mhuirearú ar chúiteamh costais iomlán ar luathghlacadóirí.
```

## Sampla oibrithe

**Údarás áitiúil a ghlacann GOV.UK Pay in ionad geata íocaíochta a thógáil**:

```
Meastachán tógála féin:
  obair comhlíonta PCI-DSS + comhtháthú + cothabháil leanúnach
  ≈ £85,000 tógáil + £22,000/bliain cothabháil

Glacadh GOV.UK Pay:
  Iarracht comhtháthaithe ≈ £12,000 (am forbróra)
  Táillí idirbhirt: muirearaítear íocaíochtaí cárta rialtas-go-saoránach
  de ghnáth ar céatadán beag móide táille seasta in aghaidh an idirbhirt, gan
  ualach PCI-DSS ar leith a iompar ag an gcomhairle
  ≈ £12,000 aon uair, costas leanúnach athraitheach le méid, ní seasta

Sábháil na chéad bliana ≈ £85,000 − £12,000 = £73,000, sular áirítear an
£22,000/bliain cothabhála a seachnaíodh agus riosca comhlíonta seachanta
sonraí cárta a choinneáil i gcóras faoi stiúir comhairle ar chor ar bith —
tá an dara catagóir seo ar an luach slándála a chlúdaítear i
public-sector-cybersecurity-value.
```

Méadaigh an £73,000 sin ar fud na thart ar 1,800 seirbhís a úsáideann GOV.UK Pay anois agus tá an costas tógála seachanta comhiomlán ar fud an rialtais sna céadta milliún — is i eacnamaíocht an ardáin, ní in aon chomhtháthú aonair, atá luach na straitéise i ndáiríre.

## Nasc leis an innealtóireacht bogearraí

Is argóint dhíreach é an Rialtas mar Ardán ar son [tógáil nó ceannach sa rialtas](../tógáil-nó-ceannach-sa-rialtas/): nuair a bhíonn comhpháirt chomhroinnte, mheasúnaithe, dea-rite ann, is annamh is é bespoke comhionann a thógáil an rogha [luach ar airgead](../luach-ar-airgead/) is fearr, agus teipeann air [an Caighdeán um Sheirbhís Dhigiteach](../an-caighdeán-um-sheirbhís-dhigiteach/) pointe 13 ("úsáid caighdeáin oscailte, comhpháirteanna comhchoitianta agus patrúin, agus cuir leo") beagnach de réir sainmhínithe. Athraíonn sé cruth [chostas iomlán úinéireachta i dTF an rialtais](../costas-iomlán-úinéireachta-i-tf-an-rialtais/) freisin: malartaíonn glacadh ardáin líne mhór caipitil agus chothabhála ar chostas oibriúcháin níos lú, nasctha le húsáid, atá níos éasca a réamhaisnéis agus níos éasca a dhífhoirgniú má dhíchoimisiúnaítear seirbhís. Tá col ceathrar ag athúsáid oscailte comhpháirteanna in [luach sonraí oscailte](../luach-na-sonraí-oscailte/) — is straitéisí iad araon chun rud a tháirgeann an rialtas uair amháin a láimhseáil mar bhonneagar comhroinnte seachas mar shócmhainn roinne.

## Contúirtí

- **Aththógáil scáth**: tógann foirne go ciúin a gcomhtháthú íocaíochta nó fógra féin toisc go bhfuil próiseas ionchuir an ardáin níos moille ná é a dhéanamh iad féin — fadhb frithchuimilte rialachais, ní teicneolaíochta, agus cuireann sí go ciúin as d'eacnamaíocht athúsáide a bhfuil an straitéis iomlán ag brath uirthi.
- **Foireann an ardáin a ghannmhaoiniú i gcomparáid leis an luach a chruthaíonn sí**: bailíonn luach chuig ranna a úsáideann í agus suíonn costas leis an bhfoireann ardáin, rud a chruthaíonn riosca ghannfhorbairt ainsealach mura bhfuil maoiniú lárnaithe agus cosanta — leagan de thragóid na dtalún coitianta.
- **Rath ardáin a thomhas ar úsáid amháin**: is táscaire tosaigh iad uimhreacha glactha (seirbhísí ionchuir, teachtaireachtaí seolta), ní cruthúnas luacha; is é an fíor-thástáil an áireamh costais tógála seachanta agus riosca seachanta thuas.
- **"Ardán" a láimhseáil mar chiallaíonn "monailit"**: éiríonn le comhpháirteanna GaaP toisc go ndéanann gach ceann ceann amháin go maith le comhéadan cúng, seasmhach — cruthaíonn cumais neamhghaolmhara a cheangal in "ardán" amháin an fhadhb tógála bespoke arís ag scála difriúil.

## Foinsí

- Government Digital Service, Government as a Platform. <https://www.gov.uk/government/publications/government-as-a-platform>
- GOV.UK Notify. <https://www.notifications.service.gov.uk/>
- Government Digital Service blog, "GOV.UK Pay at 10: how it started and how it's going". <https://gds.blog.gov.uk/2026/09/02/gov-uk-pay-at-10-how-it-started-and-how-its-going/>
