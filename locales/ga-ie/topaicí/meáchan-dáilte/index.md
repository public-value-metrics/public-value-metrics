# Meáchan Dáilte

Coigeartaíonn meáchan dáilte luach airgeadaíochta costais nó buntáiste de réir an té a fhaigheann é, ar an bprionsabal go bhfuil punt breise níos luachmhaire do theaghlach bocht ná do theaghlach saibhir. Soláthraíonn Green Book HM Treasury modh sainiúil chun an meáchan seo a chur i bhfeidhm, bunaithe ar úsáidiúlacht imeallach laghdaitheach an ioncaim, ionas nach gcaitheann measúnuithe go ciúin le punt a fhaigheann an deichiú is saibhre mar a bheadh luach chomhionann leis ag punt a fhaigheann an deichiú is boichte.

## Cén fáth a bhfuil tábhacht leis

Suimíonn anailís chostais agus tairbhe chaighdeánach punt gan a fhiafraí cé leis na punt, rud a ghlacann leis go ndéanann sé gur ionann luach punt do chách — toimhde a bhfuil a fhios ag eacnamaithe le fada nach fíor í. Mothaíonn teaghlach a thuilleann £15,000/bliain gnóthachan £1,000 go han-difriúil ó theaghlach a thuilleann £150,000/bliain, toisc go dtiteann úsáidiúlacht imeallach an ioncaim de réir mar a ardaíonn an t-ioncam. Gan meáchan, is fearr leis an measúnú caighdeánach go córasach idirghabhálacha a bhfuil tairbhe acu do ghrúpaí níos saibhre atá cheana níos fearr as, mar go séideann a bhfuil de chumhacht chaiteachais acu luacháil airgeadaíochta na dtairbhí a shroicheann iad (taispeánann uasghrádú páirce in aice le tithíocht chostasach buntáiste níos mó i luach maoine ná mar a thaispeánfadh an t-uasghrádú céanna in aice le tithíocht saor, de bharr praghsanna níos airde amháin, ní toisc go bhfuil an gnóthachan leasa níos mó).

Leagann treoir fhorlíontach an Green Book ar anailís dáilte, atá neartaithe tar éis athbhreithniú 2020 an Chiste a d'fhreagair do cháineadh gur fhabhraigh modheolaíocht an mheasúnaithe go córasach Londain agus an Oirdheiscirt, amach cur chuige foirmiúil meáchana bunaithe ar leaisteachas toimhdithe d'úsáidiúlacht imeallach an ioncaim thart ar 1.3 — rud a chiallaíonn go laghdaíonn dúbailt ioncaim luach imeallach punt breise thart ar a leath (go sonrach, 2^-1.3 ≈ 0.41 uair). Ní coigeartú cruinnithe é seo: is féidir leis a chur i bhfeidhm athrú a dhéanamh ar cé acu den dá chlár iomaíocha a thaispeánann an glanluach láithreach is airde, go háirithe agus idirghabháil atá dírithe i gceantar díothaithe á comparáil le ceann atá leathnaithe ar fud an daonra ghinearálta.

## An mhatamaitic

Meáchan dáilte an Green Book do phunt buntáiste a thagann chun teaghlaigh ag leibhéal ioncaim y, i gcomparáid le punt ag leibhéal meánioncaim náisiúnta ȳ:

```
Meáchan(y) = (ȳ / y)^e

nuair:
  y  = ioncam teaghlaigh (nó ioncam an ghrúpa atá buailte)
  ȳ  = meánioncam (tagartha) teaghlaigh
  e  = leaisteachas úsáidiúlachta imeallaí an ioncaim (Green Book: thart ar 1.3)
```

Meáchain a chur i bhfeidhm ar ghlantairbhí:

```
Tairbhe mheáchaite = Σ [tairbhe neamhmheáchaite don ghrúpa i × Meáchan(y_i)]
```

Faigheann grúpa a thuilleann leath den mheán náisiúnta (y = 0.5ȳ) meáchan de (1/0.5)^1.3 = 2^1.3 ≈ 2.46 — measann gach punt tairbhe don ghrúpa sin thart ar 2.46 uair punt do theaghlach meánioncaim.

## Sampla oibrithe

**Dhá chlár áitiúla iomaíocha**, gach ceann acu le glantairbhe neamhmheáchaite de £2 mhilliún/bliain, in iomaíocht don chiste fáis réigiúnach céanna:

- *Clár A*: scéim tacaíochta gnó i mbaile rafar, meánioncam teaghlaigh £45,000 (thart ar 1.3× an mheán náisiúnta toimhdithe de £35,000).
- *Clár B*: clár scileanna i gceantar díothaithe, meánioncam teaghlaigh £18,000 (thart ar 0.51× an mheán náisiúnta).

```
Meáchan(A) = (35,000 / 45,000)^1.3 = (0.778)^1.3 ≈ 0.72
Meáchan(B) = (35,000 / 18,000)^1.3 = (1.944)^1.3 ≈ 2.53

Tairbhe mheáchaite A = £2,000,000 × 0.72 = £1.44 milliún
Tairbhe mheáchaite B = £2,000,000 × 2.53 = £5.06 milliún
```

Gan mheáchan, tá an dá chlár cothrom. Meáchan dáilte curtha i bhfeidhm, tá tairbhe Chlár B níos mó ná trí huaire níos mó — toradh a aisiompaíonn an moladh maoinithe agus a léiríonn cuspóir sainiúil an Green Book agus an meáchan á cheangal a thaispeáint, ní hamháin an cóimheas tairbhe-costais neamhmheáchaite.

**Leithdháileadh deontais carthanais**: ba cheart d'fhoinsitheoir a dhéanann comparáid idir deontas £500,000 a shroicheann 1,000 teaghlach ísealioncaim (meáchan ≈ 2.0, luach meáchaite comhionann le £1 milliún) agus an £500,000 céanna a shroicheann 1,000 teaghlach meánioncaim (meáchan ≈ 1.0, luach meáchaite comhionann le £500,000) an cás dáilte a thaispeáint go sainráite ina pháipéar boird, gan é a fhágáil le tuiscint.

## Nasc leis an innealtóireacht bogearraí

Is annamh a bhíonn meáchan dáilte le feiceáil go díreach i méadrachtaí seachadta bogearraí, ach ba cheart dó múnlú a dhéanamh ar an gcaoi a ndearann foirne innealtóireachta agus sonraí tomhas agus spriocdhíriú:

- Agus painéal tionchair nó áireamhán tairbhe á thógáil, nocht próifíl ioncaim nó díothachta na ndaoine atá buailte, ní hamháin iomlán comhiomlán tairbhe — folaíonn figiúirí comhiomlána gan miondealú dáilte go beacht an t-aisiompú a léiríodh thuas.
- Nasc loighic spriocdhírithe i ndearadh seirbhíse leis na sonraí díothachta céanna a úsáideann an Green Book — féach [Innéacs na Díothachta Iolraí](../innéacs-na-díothachta-iolraí/) — ionas gur féidir sroicheadh seirbhíse digití a mheas ó thaobh cothromais, ní hamháin éifeachtúlachta (an ceathrú E a bhfuil díospóireacht ina thaobh i [luach ar airgead](../luach-ar-airgead/)).
- Nuair a leithdháileann algartam acmhainn ghann (sliotáin coinní, am cás-oibrithe, fóirdheontas), atáirgfidh feidhm chuspóra neamhmheáchaite "uasmhéadaigh an tairbhe iomlán", de dhroim a dhearaidh, an claonadh céanna a bhfuil meáchan an Green Book ann chun é a cheartú — brataigh é seo go sainráite do úinéirí beartais sula ndéantar barrfheabhsú.

## Contúirtí

- **Meáchain dáilte a chur i bhfeidhm go neamhchomhsheasmhach ar fud punainne.** Táirgeann meáchan a chur ar thairbhí clár amháin ach ní ar thairbhí a chomparáide comparáid chlaonta, ní ceann níos cothroime; éilíonn an Green Book cóir chomhionann.
- **Luachanna maoine nó margaidh a úsáid mar ionadaí do leas gan coigeartú.** Tá praghsanna margaidh féin saobhtha ag neamhionannas ioncaim atá ann cheana, agus sin go beacht atá meáchan dáilte ceaptha a cheartú — is féidir le luachanna margaidh gan choigeartú an claonadh a dhúbailt.
- **Neamhaird a dhéanamh ar éagsúlacht laistigh de ghrúpa.** Is féidir le meáchan de réir meánioncam ceantair (e.g. deichiú Innéacs na Díothachta Iolraí) daoine aonair nach gcomhfhreagraíonn do mheán a gceantair a chur i bhfaisnéis mhícheart; úsáid na sonraí ioncaim is mionghrinne atá ar fáil go réasúnta.
- **An leaisteachas 1.3 a láimhseáil mar chonstaint uilíoch.** Tugann an Green Book féin le fios gur meastachán é seo le raon dealraitheach; déan tástáil íogaireachta ar chinntí móra i gcoinne leaisteachais mhalartacha seachas 1.3 a láimhseáil mar cheann beacht.

## Foinsí

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation", agus treoir fhorlíontach ar thionchair dháilte (eagrán 2022).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury, "Green Book Review 2020: Findings and Response" (ag tabhairt aghaidh ar cháineadh claonta réigiúnaigh).
  <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>
- Fujiwara D, Campbell R. "Valuation Techniques for Social Cost-Benefit Analysis." HM Treasury/DWP,
  2011 (cúlra ar mheastacháin leaisteachais úsáidiúlachta imeallaí an ioncaim).
