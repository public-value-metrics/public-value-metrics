# KPInna na hEarnála Poiblí

Is éard is táscaire príomhfheidhmíochta (KPI) ann ná beart roghnaithe, rianaithe a sheasann in ionad
cibé an bhfuil seirbhís phoiblí ag déanamh a cuid oibre go maith. Sa rialtas ní bhíonn rogha KPI
neodrach riamh: toisc go gceanglaítear KPInna le buiséid, le táblaí sraithe agus le gairmeacha beatha,
múnlaíonn an gníomh KPI a roghnú iompar gach duine in ísle srutha uaidh, go minic níos mó ná an beartas
a chruthaigh an tseirbhís.

## Cén fáth a bhfuil tábhacht leis

Is é breathnóireacht Charles Goodhart i 1975 ar bheartas airgeadaíochta — a chuir Marilyn Strathern i
mbéal an phobail ina dhiaidh sin mar "nuair a thagann beart chun bheith ina sprioc, scoireann sé de
bheith ina bheart maith" — an lipéad rabhaidh is tábhachtaí amháin i mbainistíocht feidhmíochta na
hearnála poiblí. Tosaíonn KPI a roghnaítear chun córas a *chur síos air* ag *saobhadh* an
chórais sin an nóiméad a cheanglaítear acmhainniú, pá nó marthanacht pholaitiúil leis. Is é an léiriú
canónach ná amanna freagartha otharchairr an NHS: nuair a tháinig sprioc freagartha ocht nóiméad Chatagóir
A i bhfeidhm go ceangailteach, léiríodh go ndearna roinnt iontaobhas otharchairr a "chruachadh" díreach
lasmuigh den chlog ama freagartha, nó glaonna a athaicmiú, chun an uimhir a bhaint amach gan torthaí
othar a athrú. Tá treoir National Audit Office na RA ar roghnú agus ar úsáid táscairí feidhmíochta —
leagtha amach ar fud a tuarascálacha luach ar airgead agus a creat "Performance Measurement by
Regulators" agus "Choosing the Right FABRIC" (Fit for purpose, Appropriate, Balanced, Robust,
Integrated, Cost-effective) — ann go beacht toisc gur roghnaigh ranna táscairí a bhí éasca le tuairisciú
seachas táscairí a bhí deacair a chaimiléireacht. Is dearthóir struchtúr dreasachta institiúid
phoiblí é innealtóir bogearraí a sheolann an painéal a mbeidh aire nó stiúrthóir á mheas ina choinne,
cibé acu ar mhaith leis é nó nach ea.

## An mhatamaitic

Is topaic de chuid creata é dearadh KPI, ach is seicliosta in-athdhéanta é *meastóireacht* KPI
iarrthóra, ní foirmle:

```
Do gach KPI iarrthóra, scóráil i gcoinne:
  Oiriúnach don chuspóir — an dtomhaiseann sé an toradh, nó seachfhreastalaí roinnt céimeanna ar shiúl?
  Cuí                    — an mbaineann sé leis na daoine ar féidir leo tionchar a imirt air i ndáiríre?
  Cothrom                — an bhfuil sé péireáilte le frithmhéadracht a ghabhann caimiléireacht?
  Láidir                 — an féidir leis iniúchadh a sheasamh, nó an bhfuil sé féintuairiscithe agus do-fhíoraithe?
  Comhtháite             — an oireann sé don tacar níos leithne, nó an dtéann sé i gcoinne KPI eile?
  Costéifeachtach        — an gcosnaíonn a bhailiú níos mó ná an cinneadh a chuireann sé in iúl?

Scoilt tosaigh vs déanach:
  Táscaire tosaigh   → tuartha toradh amach anseo, ach furasta a chaimiléireacht go minic (m.sh. glaonna freagartha <60s)
  Táscaire déanach   → deimhníonn go bhfuil an toradh tarlaithe, ach tagann sé rómhall chun stiúradh (m.sh. suirbhé
                        sástachta bliantúil)
  Péireálann tacar KPI intchosanta ceann de gach cineál ar a laghad do gach cuspóir.
```

## Sampla oibrithe

**Iontaobhas otharchairr**: tuairiscíonn iontaobhas KPI freagartha Chatagóir A (ar guais bheatha) de
"freagraíodh 75% de na glaonna laistigh de 8 nóiméad." I gceathrú amháin, tagann 6,000 glao Chatagóir A
isteach; comhlíontar 4,500 laistigh de 8 nóiméad, rud a thugann 75.0% — ar sprioc de réir cosúlachta.

```
KPI ceannteidil = 4,500 / 6,000 × 100 = 75.0%  (comhlíonann an tairseach 75%)
```

Ach cuireann iniúchadh Goodhart frithmhéadracht leis: meánam freagartha don 10% is moille de ghlaonna.

```
Meán freagartha an deichiú is moille = 34 nóiméad (suas ó 19 nóiméad dhá bhliain roimhe sin)
```

Tá an t-iontaobhas ag baint amach na sprice agus an t-eireaball — na glaonna is dóichí a bheith
guaiseach go fírinneach nuair a bhíonn an triáiseáil easnamhach — tar éis éirí i bhfad níos measa,
toisc go dtugtar tosaíocht do ghlaonna in aice le himeall aille 8 nóiméad seachas géarghá cliniciúil.
Dúirt an KPI aonair scéal bréagach; dúirt an KPI péireáilte an fhírinne.

## Nasc leis an innealtóireacht bogearraí

Is iad innealtóirí a thógann painéil fheidhmíochta don rialtas, go feidhmiúil, atá ag dearadh API
dreasachta na heagraíochta. Impleachtaí praiticiúla: ionstraimigh an *ainmneoir* chomh dian leis an
uimhreoir (tugann KPI a thuairiscítear mar chéatadán lom cuireadh do chaimiléireacht ainmneora — féach
[cost-per-transaction](../costas-in-aghaidh-an-idirbhirt/) don ghaiste chéanna i seirbhísí digiteacha); tóg
frithmhéadrachtaí isteach sa phainéal céanna seachas tuarascáil ar leith nach léann aon duine, ionas go
mbíonn caimiléireacht infheicthe ag pointe an chinnidh; agus leaganaigh sainmhíniú an KPI, toisc go
bhfuil athshainiú ciúin (an rud a áirítear mar "ghlao," mar "chás" nó mar "chríochnú" a athrú)
coibhéiseach go feidhmiúil le hathrú ar an sprioc gan é a fhógairt. Is bealach struchtúrtha amháin é
[cárta scórála na luacha poiblí](../cárta-scórála-na-luacha-poiblí/) chun cosc a chur ar aon KPI a léamh ina
aonar, agus is é [cuntasacht bunaithe ar thorthaí](../cuntasacht-bunaithe-ar-thorthaí/) an smacht a bhaineann
le táscairí ar leibhéal an daonra a roghnú nach féidir le foireann amháin iad a shaobhadh go haontaobhach.

## Contúirtí

- **An beart is éasca a bhailiú a roghnú thar an gceann ciallmhar**: tá am freagartha glao saor le
  logáil; ní mar sin atá cibé ar réitigh an glao fadhb an tsaoránaigh — ach is é an dara ceann
  amháin an toradh. Seachain ag titim ar ais ar an méid a astaíonn an córas cheana.
- **Gan frithmhéadracht**: déanfar aon KPI atá ceangailte le hairgead nó le cáil a chaimiléireacht ag
  an imeall; seol é le beart péireáilte a ghabhann an bealach caimiléireachta is dóichí sula bhfoilsítear é.
- **An mhéadracht a athshainiú gan loga athruithe**: scriosann "glaonna faighte" a mhalartú le "glaonna
  freagartha" chun treocht a mhaisiú creidiúnacht an tsraith ama an nóiméad a aimsítear é — foilsigh loga
  athruithe sainmhínithe i gcónaí taobh leis na huimhreacha.
- **Gníomhaíocht a mheascadh le toradh**: is aschur é cigireachtaí críochnaithe a chomhaireamh; tá
  áitreabh a thabhairt chun comhlíonta níos gaire don toradh (féach
  [torthaí vs aschuir](../torthaí-vs-aschuir/)).

## Foinsí

- National Audit Office, "Choosing the Right FABRIC: A Framework for Performance Information."
  <https://www.nao.org.uk/>
- Marilyn Strathern, "'Improving Ratings': Audit in the British University System," *Social
  Anthropology*, 1997 (formulation of Goodhart's law as commonly cited).
- National Audit Office, investigations into NHS ambulance service performance reporting.
  <https://www.nao.org.uk/>
