# Anailís Chinnteoireachta Illchritéir (MCDA)

Scóráiltear agus meáitear roghanna in MCDA i gcomparáid le roinnt critéar ar leith, meáite, ag an am
céanna, rud a tháirgeann comparáid ordaithe gan iallach a chur ar gach critéar a theacht isteach in aon
scála airgeadaíochta nó aonaid nádúrtha amháin. Is é an modh breithmheasa é do chinntí nach féidir na
torthaí a bhfuil tábhacht leo a laghdú i ndáiríre go uimhir amháin.

## Cén fáth a bhfuil tábhacht leis

Ceadaíonn an Green Book MCDA go sainráite (pléann a aguisín staidéar cáis Box 2 agus Annex A é go
díreach) le haghaidh breithmheasanna ina bhfuil na sochair "dochomhthomhaiste go fírinneach" — nuair a
dhéanfadh sé cinneadh a mhífhaisnéisiú seachas é a shoiléiriú dá ndéanfaí gach rud a thiontú ina airgead trí
[anailís chostais agus tairbhe shóisialta](../anailís-shóisialta-costais-agus-tairbhe/), nó go toradh amháin trí
[anailís ar chost-éifeachtúlacht](../anailís-costéifeachtúlachta-sa-rialtas/)
(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>).
Mar shampla, nuair a roghnaítear suíomh do phríosún nua, déantar cúiteamh idir costas caipitil, tionchar
pobail, nascacht iompair, éifeacht chomhshaoil agus inearcaitheacht foirne — critéir nach roinneann
aonad comhchoiteann, agus ina gcuirfeadh aonad comhroinnte (airgead de ghnáth) breithiúnas luacha i
bhfolach faoi thábhacht choibhneasta, abair, an tionchair chomhshaoil i gcomparáid leis an gcostas,
faoi bhréagriocht uimhríochta oibiachtúla.

Is í macántacht MCDA a príomh-leochaileacht freisin: toisc go sannann an té a reáchtálann an
breithmheas (nó painéal) na meáchain, níl an modh dlisteanach ach a mhéid atá an próiseas meáchana dlisteanach. Deir
treoir an Green Book go sainráite gur chóir critéir agus meáchain a chomhaontú agus a fhoilsiú
*sula* scóráiltear na roghanna, go beacht chun cosc a chur ar athbhreithneoir oibriú ar ais ó rogha a
b'fhearr leis go dtí na meáchain a dhlisteanaíonn í.

## An mhatamaitic

```
Do gach rogha i agus critéar j:
  Scór_ij    = feidhmíocht na rogha i gcomparáid leis an gcritéar sin (go minic 0-100
               nó 1-10, ó fhianaise, ó bhreithiúnas saineolaí nó ó scóráil páirtithe leasmhara)
  Meáchan_j  = tábhacht choibhneasta chritéar j; is 1 (nó 100) suim na meáchan

Scór meáite rogha i = Σ_j (Scór_ij × Meáchan_j)

Nós imeachta:
1. Comhaontaigh an tacar critéar agus na meáchain ROIMH aon rogha a scóráil (is modhanna
   coitianta eolchúraim iad meá luascáin nó comparáid péire, m.sh. AHP).
2. Scóráil gach rogha i gcomparáid le gach critéar ar scála comhchoiteann, ó
   fhianaise nuair is féidir.
3. Ríomh na hiomláin mheáite; rangaigh na roghanna.
4. Tástáil íogaireachta ar na meáchain: an gcoimeádann an rangú nuair a
   easaontaítear go plásúil faoin méid ba cheart do gach critéar a bheith tábhachtach?
```

Ní tháirgeann MCDA luach absalóideach intchosanta mar a dhéanann glanluach reatha SCBA — ní tháirgeann
sé ach rangú coinníollach ar na meáchain chomhaontaithe. Is gné mhaith é sin nuair is faoi chúiteamh
idir earraí dochomhthomhaiste atá an cinneadh i ndáiríre, agus dliteanas é má úsáidtear é chun an obair
níos deacra a sheachaint, is é sin airgeadú nuair a bhí airgeadú indéanta i ndáiríre.

## Sampla oibrithe

**Údarás áitiúil**: scóráiltear trí shuíomh i gcomparáid le ceithre chritéar ag comhairle a roghnaíonn
suíomh do ionad athchúrsála nua dramhaíola teaghlaigh, meáite ag painéal trasranna roimh aon chuairt
suímh:

```
Critéir (meáchan):        Costas caipitil (30%)  Rochtain iompair (25%)
                          Tionchar pobail (25%)  Tionchar comhshaoil (20%)

Scóir suímh (0-100, níos airde = níos fearr):
Suíomh A: costas 80, rochtain 60, pobal 40, comhshaol 70
Suíomh B: costas 60, rochtain 90, pobal 70, comhshaol 50
Suíomh C: costas 90, rochtain 50, pobal 80, comhshaol 60

Iomláin mheáite:
Suíomh A = 80(.30) + 60(.25) + 40(.25) + 70(.20) = 24+15+10+14 = 63
Suíomh B = 60(.30) + 90(.25) + 70(.25) + 50(.20) = 18+22.5+17.5+10 = 68
Suíomh C = 90(.30) + 50(.25) + 80(.25) + 60(.20) = 27+12.5+20+12 = 71.5
```

Rangaíonn Suíomh C is airde. Má athraíonn rith íogaireachta meáchan an tionchair phobail ó 25% go 35%
(10 bpointe á nglacadh ón gcostas caipitil), athraíonn iomlán Shuíomh C go 71.5 − 3 + 8 = 76.5 agus
iomlán Shuíomh B go 68 − 6 + 7 = 69 — tá Suíomh C chun cinn i gcónaí, mar sin tá an rangú láidir i
leith an easaontais phlásúil sin faoi mheá, agus is é sin go beacht an seiceáil a bhfuil súil ag an
Green Book go dtuairisceofar í.

**Carthanas**: úsáideann fondúireacht deontas a roghnaíonn idir seirbhís comhairle fiachais, líonra
banc bia agus clár litearthachta airgeadais MCDA seachas SROI (féach
[toradh sóisialta ar infheistíocht](../fáltas-sóisialta-ar-infheistíocht/)) go beacht toisc go n-easaontaíonn
na hiontaobhaithe, i ndea-chreideamh, faoi cibé ar cheart do fhaoiseamh géarchéime nó do chosc níos mó
meáchain a bheith aige — ligeann MCDA dóibh *cruth* an easaontais a chomhaontú (raon meáchain) seachas
ligean orthu go réitíonn cóimheas SROI amháin é.

## Nasc leis an innealtóireacht bogearraí

Is é MCDA an uirlis nádúrtha chun díoltóirí agus ailtireacht a roghnú nuair a bhíonn critéir faoi
choimhlint i ndáiríre — nuair a roghnaítear idir córas bainistíochta cásanna ar an scamall agus ceann ar
an láthair, is ar chostas, riosca ceannasachta sonraí, inrochtaineacht agus luas seachadta a dhéantar
cúiteamh ar bhealaí nach laghdaíonn go huimhir amháin. Ba cheart do cheannairí innealtóireachta a
áitiú go ndéanfaí an mheá roimh scóráil na roghanna, díreach mar a cheanglaíonn an Green Book, mar go
sleamhnaíonn cleachtadh meáite a reáchtáiltear tar éis an ghearrliosta a fheiceáil i dtreo an rogha a
bhí i bhfabhar an tseomra cheana, gan teip. Féach
[tógáil vs ceannach sa rialtas](../tógáil-nó-ceannach-sa-rialtas/) le haghaidh iarratas coitianta ar MCDA,
agus [cárta scórála na luacha poiblí](../cárta-scórála-na-luacha-poiblí/) le haghaidh uirlis scórála struchtúrtha
a bhaineann leis a úsáidtear tar éis an chinnidh seachas roimhe.

## Contúirtí

- **Meáchain a leagan síos tar éis na roghanna a fheiceáil.** Is é seo an bealach is coitianta chun
  MCDA a ionramháil, d'aon ghnó nó nach ea; foilsigh meáchain roimh scóráil, agus taifead cé a leag síos iad.
- **Caitheamh leis an iomlán meáite mar uimhir chrua.** Ní bearna a bhfuil brí staidrimh léi é scór de
  71.5 i gcomparáid le 68 mura dheimhníonn an anailís íogaireachta go bhfuil an rangú cobhsaí;
  tuairiscigh raonta, ní beachtas bréagach.
- **MCDA a úsáid chun airgeadú a sheachaint a bhí indéanta i ndáiríre.** Dá bhféadfaí an chuid is mó
  de na critéir a phraghsáil go creidiúnach, caitheann rogha réamhshocraithe MCDA seachas
  [SCBA](../anailís-shóisialta-costais-agus-tairbhe/) faisnéis a d'fhéadfadh an breithmheas a úsáid.
- **Ligean d'aon pháirtí leasmhar amháin ceannasach na meáchain go léir a leagan síos leis féin.**
  Ceanglaíonn dea-chleachtas an Green Book go dtarraingeofar meáchain ó phainéal ionadaíoch, ní ón stiúrthóir
  urraíochta, chun a sheachaint nach ndéanann an breithmheas ach an méid a bhí uaidh cheana a athdhíorthú.

## Foinsí

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Annex A
  (multi-criteria decision analysis) and Box 2 case studies.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Communities and Local Government. "Multi-criteria analysis: a manual." 2009.
  <https://www.gov.uk/government/publications/multi-criteria-analysis-a-manual>
- Belton V, Stewart TJ. "Multiple Criteria Decision Analysis: An Integrated Approach." Kluwer,
  2002.
