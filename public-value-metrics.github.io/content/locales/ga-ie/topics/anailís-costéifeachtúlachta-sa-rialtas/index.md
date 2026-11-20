# Anailís costéifeachtúlachta sa rialtas

Cuireann anailís costéifeachtúlachta (CEA) costais bealaí malartacha chun an *toradh* *céanna* a bhaint amach i gcomparáid, arna léiriú in aonaid nádúrtha — costas an codlatóra gharbh a thithíodh, costas an dalta a tugadh suas go dtí an caighdeán ionchasach, costas an tona CO2 a laghdaíodh — gan an toradh féin a thiontú go hairgead.

## Cén fáth a bhfuil tábhacht leis

Caitheann an Green Book le CEA mar an modh cúltaca nuair a éiríonn an riachtanas atá ag [anailís chostais-sochair shóisialta](../anailís-shóisialta-costais-agus-tairbhe/) gach sochar a airgeadú ní hamháin deacair ach mínáireach — nuair a theastódh bonn tuisceana nach gcreideann aon duine i ndáiríre chun praghas inchreidte a chur ar an toradh (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>, Chapter 5, ar mheasúnú roghanna nuair nach bhfuil torthaí so-airgeadaithe). Is é CEA an modh is díreach a fuarthas ar iasacht ó eacnamaíocht na sláinte — tá sé comhionann go struchtúrtha leis an gcaoi a gcuireann NICE cóireálacha i gcomparáid ag úsáid costas an Bhliain Beatha Choigeartaithe de réir Cáilíochta — ach curtha i bhfeidhm ar chláir phoiblí nach clár sláinte iad: idirghabhálacha oideachais in aghaidh pointe toraidh dalta, cláir tithíochta in aghaidh teaghlaigh a coisceadh ó easpa dídine, cláir fostaíochta in aghaidh toraidh poist inbhuanaithe.

Is é an chúis a bhfuil áit tuillte ag CEA taobh le SCBA seachas é a bheith faoi chuimsiú aige ná go dtáirgeann luach airgeadaíochta a chur ar roinnt torthaí uimhir atá cruinn go leor chun cuma údarásach a bheith uirthi agus conspóideach go leor chun a bheith gan úsáid i ndíospóireacht phoiblí — mar a chuireann praghas ar "leanbh ag léamh ag an gcaighdeán ionchasach" cuireann sé cuireadh don dúshlán a bhriseann cás gnó os comhair coiste roghnaithe. Seachnaíonn CEA an argóint trí dhiúltú í a bheith aige: rangaíonn sé roghanna ar chostas in aghaidh an aonaid den *toradh féin*, ag fágáil an bhreithiúnais pholaitiúil ar leith an fiú an toradh a shaothrú ar chor ar bith don chás straitéiseach.

## An mhatamaitic

```
Cóimheas costéifeachtúlachta (meán) = Costas iomlán / Aonaid iomlána toraidh a baineadh amach

Cóimheas incriminteach costéifeachtúlachta (ICER), rogha A i gcomparáid le rogha B:
ICER = (Costas_A − Costas_B) / (Toradh_A − Toradh_B)

Nós imeachta:
1. Socraigh an t-aonad toraidh agus an modh tomhais thar na roghanna go léir atá á gcur i gcomparáid.
2. Costáil gach rogha ar an mbonn céanna (féach ../green-book-appraisal/, an cás airgeadais)
   thar an spéir ama chéanna.
3. Caith uait roghanna atá faoi smacht: aon rogha a chosnaíonn níos mó in aghaidh an aonaid ná
   rogha eile níos saoire a bhaineann an toradh céanna nó níos fearr amach, fágtar ar lár í.
4. Rangaigh na roghanna a fhanann de réir an chóimheasa incrimintigh, ní an mheáin, costéifeachtúlachta.
```

Ní féidir le CEA, léi féin, a rá an fiú clár a mhaoiniú ar chor ar bith — ach cé acu de roinnt cuir chuige chuig an sprioc chéanna is saoire in aghaidh an aonaid. Teastaíonn ceann amháin de dhá rud chun cinneadh a dhéanamh an fiú an sprioc féin an caiteachas: tiontú ar ais go SCBA (má tá luacháil inchreidte ann) nó breithiúnas polaitiúil/straitéiseach lasmuigh den mhatamaitic. Nuair nach féidir torthaí a laghdú go aonad amháin i ndáiríre — toisc go dtáirgeann clár roinnt torthaí a bhfuil tábhacht acu ar bhealaí éagsúla — úsáid [anailís cinntí il-chritéir](../anailís-chinnteoireachta-illchritéir/) ina ionad.

## Sampla oibrithe

**Údarás áitiúil**: cuireann comhairle trí chur chuige i gcomparáid chun codladh garbh a laghdú, gach ceann costáilte thar bhliain amháin i gcoinne an toraidh "daoine aonair a aistríodh go cóiríocht shocraithe ar feadh 6+ mhí":

```
Rogha                           Costas     Torthaí a baineadh amach   CER meán
Housing First (dian)            £900,000   60                         £15,000/toradh
Brú + tacaíocht aistrithe       £600,000   50                         £12,000/toradh
Seachfhreastal + earnáil phríobháideach chíosa £350,000 20            £17,500/toradh

ICER, Brú vs Seachfhreastal:  (600k−350k)/(50−20) = £8,333 in aghaidh gach toraidh bhreise
ICER, Housing First vs Brú: (900k−600k)/(60−50) = £30,000 in aghaidh gach toraidh bhreise
```

Tá an Brú i gceannas ar an Seachfhreastal ar chostas meán, ach ní chosnaíonn an chéim *incriminteach* ón Seachfhreastal go dtí an Brú ach £8,333 in aghaidh gach duine breise a tithíodh — saor i gcomparáid leis an gcéim Housing First, a chosnaíonn £30,000 do gach duine breise thar an méid a bhaineann an Brú amach. Ba chóir d'údarás a bhfuil buiséad srianta aige agus a mhéadaíonn scála an Brú a leathnú sula leathnaíonn sé Housing First, cé go bhfuil cuma níos fearr ar Housing First ar a chóimheas meáin féin.

**Rialtas náisiúnta**: cuirtear clár tarrthála litearthachta i gcomparáid thar thrí mhúnla seachadta ar "chostas in aghaidh dalta a shroicheann an caighdeán léitheoireachta de réir aoise": teagasc duine le duine (£1,800/dalta), teagasc grúpa bhig (£700/dalta), agus idirghabháil dhigiteach amháin (£150/dalta, ach 40% amháin de ráta toraidh theagaisc ghrúpa bhig in aghaidh an dalta cláraithe nuair a choigeartaítear do thitim rannpháirtíochta). Tar éis coigeartú do chríochnú iarbhír, costaíonn digiteach amháin £375 in aghaidh gach dalta a shroicheann an caighdeán — fós an ceann is saoire, ach ní féidir leis an CEA a rá an malartú inghlactha é líon iomlán níos lú daltaí a fuair cúnamh ón idirghabháil dhigiteach amháin, má sheachadtar ar an mbuiséad céanna le grúpa beag, i gcomparáid le líon níos lú daltaí a shroicheadh níos doimhne; is breithiúnas dáileacháin é sin a thugann CEA ar ais do lucht cinnidh.

## Nasc leis an innealtóireacht bogearraí

Is é CEA an fráma ceart aon uair a mheasann foirne innealtóireachta cuir chuige seachadta don *toradh* seirbhíse *céanna* — costas in aghaidh gach céannachta a fíoraíodh go rathúil thar thrí dhíoltóir fíoraithe céannachta, costas in aghaidh gach cáis a triaiseadh i gceart thar dhá dhearadh uathoibrithe cásoibre, costas in aghaidh gach lochta inrochtaineachta a réitíodh thar leigheas inmheánach vs conarthaithe. An disciplín a allmhairíonn sé go díreach: sainmhínigh an t-aonad toraidh sula gcuirtear costais i gcomparáid (ní "ticéid dúnta" — aschur — ach "riachtanas úsáideora a réitíodh i ndáiríre"), agus ríomh an cóimheas incriminteach idir an córas beo agus athsholáthar molta i gcónaí, ní costas meán gach córais ina aonar. Féach [torthaí vs aschuir](../torthaí-vs-aschuir/) agus [costas an toraidh](../costas-in-aghaidh-an-toraidh/).

## Contúirtí

- **Cóimheasa meáin, ní incrimintigh, a chur i gcomparáid agus cinneadh á dhéanamh ar leathnú.** Mar a léiríonn an sampla codlata gharbh, ní hé an rogha leis an gcóimheas meán is fearr i gcónaí an chéad aonad eile toraidh is saoire le ceannach.
- **Aonad toraidh a roghnú atá ina aschur i ndáiríre.** Tomhaiseann "atreoruithe a rinneadh" nó "seisiúin a seachadadh" gníomhaíocht, ní an toradh a bhfuil an clár ann chun a tháirgeadh; táirgeann CEA ar aschuir uimhir a bhfuil cuma muiníne uirthi a fhreagraíonn an cheist mhícheart.
- **Comparáid thar thorthaí atá éagsúil i ndáiríre.** Níl CEA bailí ach nuair a dhíríonn gach rogha ar an toradh céanna arna thomhas ar an mbealach céanna; teastaíonn tomhas toraidh cineálach nó [anailís cinntí il-chritéir](../anailís-chinnteoireachta-illchritéir/) chun "costas in aghaidh gach codlatóra gharbh a thithíodh" a chur i gcomparáid le "costas in aghaidh gach fágálaí cúraim i gcíosaíocht chobhsaí", ní CEA.
- **Neamhaird a dhéanamh ar sheasmhacht an toraidh.** Níl rogha níos saoire a tháirgeann torthaí nach mairfidh (dalta a dhéanann cúlú tar éis don idirghabháil críochnú) níos costéifeachtúla i ndáiríre nuair a thomhaistear thar spéir inchomparáide é; meaitseáil an tréimhse leantach thar na roghanna atá á gcur i gcomparáid.

## Foinsí

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Chapter 5.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- National Institute for Health and Care Excellence. "Developing NICE guidelines: the manual" —
  an modh costéifeachtúlachta ar a bhfuil an oiriúnú rialtais seo bunaithe.
  <https://www.nice.org.uk/process/pmg20>
- What Works Centre for Homelessness Impact. Cost-effectiveness evidence on homelessness
  interventions. <https://whatworks-homelessness.org.uk/>
