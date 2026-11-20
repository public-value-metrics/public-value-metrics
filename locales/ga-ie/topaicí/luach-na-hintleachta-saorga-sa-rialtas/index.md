# Luach na hintleachta saorga sa rialtas

Is éard is luach AI sa rialtas ann an riachtanas go gcaithfidh córas AI a úsáidtear i seirbhís phoiblí an bhacainn chéanna luach ar airgead agus luach poiblí a ghlanadh agus a ghlanann aon chinneadh caiteachais eile — gan bacainn níos ísle toisc go bhfuil sé nua, ná bacainn níos airde toisc go bhfuil eagla air. Is é an cheist a chaithfidh foireann seachadta a bheith in ann a fhreagairt sula seolfar gné AI, ní ina diaidh: an gcruthaíonn sé seo níos mó luacha ná a chostas, nuair atá costas na dearbhaithe, na maoirseachta agus an riosca praghsáilte go hionraic?

## Cén fáth a bhfuil tábhacht leis

D'fhoilsigh Oifig Dhigiteach agus Sonraí Lárnach na Ríochta Aontaithe (CDDO) a Generative AI Framework for Government in 2024, ag tógáil ar threoir eatramhach níos luaithe ó Mheitheamh 2023, agus rinne sí é a struchtúrú thart ar deich bprionsabal a chlúdaíonn cad is AI giniúnach ann, a impleachtaí eiticiúla, slándáil uirlisí, rialuithe dearbhaithe cáilíochta, bainistiú iomláine saolré AI ghiniúnaigh, cásanna úsáide fíora a aithint, comhoibriú trasrialtais, trédhearcacht, scileanna agus rialachas. Tá an fhráma ag áitiú ar "rialú dhaonna ciallmhar" agus ar bhainistiú iomláine na saolré toisc go bhfuil modh teipe ar leith ag cásanna gnó tionscadal AI nach bhfuil ag caiteachas TF eile: is furasta uimhir cheannlíne táirgiúlachta píolóta a tháirgeadh agus a ghéarú, toisc go dtomhaistear í sula gcuirtear an t-ualach fíoraithe, ceartúcháin agus maoirseachta a chruthaíonn an uirlis san áireamh. In éineacht leis an bhfráma, éilíonn an Algorithmic Transparency Recording Standard (ATRS) ar chomhlachtaí poiblí taifead caighdeánaithe a fhoilsiú — cuspóir, sonraí a úsáideadh, feidhmíocht, tástáil cothroime, socruithe maoirseachta daonna — d'uirlisí algartamacha a bhfuil tionchar suntasach acu ar chinntí faoi dhaoine aonair, rud a fhágann gur ábhar de thaifead poiblí é costas dearbhaithe córais AI, ní meastachán inmheánach is féidir le foireann a scipeáil go ciúin.

## An mhatamaitic

Measúnaítear glacadh AI mar chur le measúnú caighdeánach [luach ar airgead](../luach-ar-airgead/), ní mar athsholáthar air, agus na téarmaí sonracha AI á ndéanamh sainráite seachas iad a fhilleadh isteach in uimhir amháin "gnóthachan táirgiúlachta":

```
Glanluach córais AI =
    gnóthachan táirgiúlachta (am sábháilte × costas lán-luchtaithe foirne)
  − costas ceadúnais/ríomhaireachta
  − costas fíoraithe agus maoirseachta daonna (aschur AI a sheiceáil sular
    ndéantar gníomh air — ní laghdaíonn sé seo go nialas fiú d'uirlisí aibí)
  − costas doiciméadaithe ATRS agus monatóireachta leanúnaí
  − costas coigeartaithe do riosca an dochair ó earráidí, claonta nó hallucination,
    ualaithe de réir cé a iompraíonn an dochar sin (ualú dáileacháin)

Ní inchomparáide é figiúr táirgiúlachta píolóta a fhágann an téarma
maoirseachta ar lár le bonnlíne costais ghnó mar is gnách a chuimsíonn
athbhreithniú daonna coibhéiseach cheana féin — féach ai-productivity-in-the-public-sector
don disciplín níos iomláine tomhais táirgiúlachta a bhfuil sé ag tógáil air.
```

## Sampla oibrithe

**Údarás áitiúil a úsáideann uirlis AI ghiniúnach chun céad fhreagraí a dhréachtú ar fhiosruithe rialta cáin chomhairle**: 25,000 fiosrúchán sa bhliain, a láimhseáladh go hiomlán roimhe seo ag cásoibrithe ar 14 nóiméad an fiosrúchán ar an meán, costas lán-luchtaithe foirne £34 san uair.

```
Costas bonnlíne (gan AI):
  25,000 × (14/60) × £34 = £198,333/bliain

Éileamh ceannlíne an phíolóta: dréachtaíonn AI freagra i 90 soicind,
ní dhéanann an cásoibrí ach "athbhreithniú agus seoladh" — is é 3 nóiméad an t-am nua a héilítear
  25,000 × (3/60) × £34 = £42,500/bliain
  → sábháil éilithe £155,833/bliain (cuma chlaochlaitheach air)

An figiúr lán-luchtaithe, tomhaiste tar éis 3 mhí beo seachas i gcásanna
tástála rogha-phiocthe an phíolóta:
  Am iarbhír athbhreithnithe + ceartúcháin an fhreagra: 6 nóiméad (teastaíonn
  fíoreagarthóireacht ar dhréachtaí d'fhiosruithe casta nó íogaire ó thaobh mothúchán de)
  25,000 × (6/60) × £34 = £85,000/bliain
  Costas ceadúnais/ríomhaireachta: £38,000/bliain
  Doiciméadú ATRS agus monatóireacht ráithiúil claonta/cáilíochta: £14,000/bliain
  Costas iomlán = 85,000 + 38,000 + 14,000 = £137,000/bliain

Fíorshábháil = 198,333 − 137,000 = £61,333/bliain — fíor agus fiúntach
a choinneáil, ach i bhfad faoi bhun leath d'éileamh ceannlíne an phíolóta, agus
b'éigean tomhas ionraic ama maoirseachta a dhéanamh chun é a aimsiú, ní an ceann is fearr cás an phíolóta.
```

## Nasc leis an innealtóireacht bogearraí

Seo an pointe ina dtagann [ai-productivity-in-the-public-sector](../táirgiúlacht-ai-san-earnáil-phoiblí/) agus an topaic seo le chéile: is leis na foirne innealtóireachta a thógann gnéithe AI isteach i seirbhísí poiblí atá an ionstraimiú a fhágann go bhfuil an "fíor" figiúr sa sampla oibrithe indéanta — an t-am athbhreithnithe iarbhír, an fad eagarthóireachta idir dréacht agus freagra seolta, agus an ráta ardaithe a logáil, seachas muinín a bheith acu as coinníollacha taispeána an phíolóta. Ba cheart gnéithe AI a mheasúnú i gcoinne pointe 9 den [digital-service-standard](../an-caighdeán-um-sheirbhís-dhigiteach/) (seirbhís shlán, príobháideacht úsáideora) agus é a thras-thagairt le [public-sector-cybersecurity-value](../luach-na-cibearshlándála-san-earnáil-phoiblí/) nuair a bhaineann an uirlis le sonraí saoránach, agus teastaíonn taifead ATRS ó aon chóras AI a bhfuil tionchar suntasach aige ar chinntí faoi dhaoine aonair sula bhféadfar a mheas go bhfuil sé réidh don mheasúnú, ar an gcaoi chéanna a dteastaíonn measúnú rathúil [digital-service-standard](../an-caighdeán-um-sheirbhís-dhigiteach/) ó sheirbhís sula dtéann sí beo.

## Contúirtí

- **AI-washing**: uathoibriú atá bunaithe ar rialacha cheana a athlipéadú mar "AI" chun rochtain a fháil ar mhaoiniú nó ar aird atá curtha i leataobh do ghlacadh AI, gan na rioscaí cruinnis nó claonta a bhfuil an scrúdú breise a thugann an fráma tuillte acu.
- **Táirgiúlacht phíolóta a thomhas, ní táirgiúlacht táirgthe**: ritheann píolótaí ar chásanna tástála roghnaithe le hathbhreithneoirí gafa aireach; ritheann an táirgeadh ar an meascán iomlán praiseach cásanna le hathbhreithneoirí a fhorbraíonn claonadh uathoibrithe le himeacht ama agus a fhéachann ar aschuir ar bheagán — déanann an dá rud an figiúr ionraic de chostas maoirseachta a shuaitheadh.
- **Clárú ATRS a scipeáil toisc nach "cinnteoireacht uathoibrithe i ndáiríre" í an uirlis**: is é tairseach an chaighdeáin tionchar suntasach ar chinneadh faoi dhuine aonair, rud a shásaíonn formhór na n-uirlisí dréachtaithe nó triaiste AI atá dírithe ar shaoránaigh fiú nuair a shíníonn duine as go teicniúil.
- **Neamhaird a dhéanamh ar thionchar dáileacháin earráidí**: is féidir le ráta earráide córais AI a mheánaítear thar gach úsáideoir ráta i bhfad níos airde earráide nó claonta do ghrúpaí sonracha a cheilt; ba cheart [ualú dáileacháin](../meáchan-dáilte/) a chur i bhfeidhm ar théarma an dochair choigeartaithe do riosca, ní ar an bhfigiúr cruinnis iomlán amháin.

## Foinsí

- Central Digital and Data Office, Generative AI Framework for Government (2024). <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
- Algorithmic Transparency Recording Standard. <https://www.gov.uk/government/collections/algorithmic-transparency-recording-standard-hub>
- HM Treasury, Green Book: central government guidance on appraisal and evaluation. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-governent>
