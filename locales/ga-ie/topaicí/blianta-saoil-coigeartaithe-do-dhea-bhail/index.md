# Blianta saoil coigeartaithe do dhea-bhail (WELLBY)

Is é WELLBY pointe breise amháin de shástacht saoil, ar scála caighdeánach folláine 0–10, d'aon duine amháin ar feadh
bliana amháin. Is é an analach struchtúrach de QALY a úsáidtear in eacnamaíocht sláinte é — aonad amháin a ligeann duit
idirghabhálacha a chur i gcomparáid nach bhfuil aon rud eile i gcoiteann ag a dtorthaí — ach tógtha ar dhea-bhail
shuibiachtúil seachas staideanna sláinte cliniciúla, agus leagtha amach i "Wellbeing guidance for appraisal:
supplementary Green Book guidance" (2021) de chuid HM Treasury.

## Cén fáth a bhfuil tábhacht leis

Teastaíonn aonad comhchoiteann ó mheasúnú costais agus tairbhe chun deontas club óige a chur i gcomparáid le scéim
sábháilteachta bóithre agus le seirbhís meabhairshláinte, nach bhfuil tomhas toraidh i gcoiteann acu. Réitigh
eacnamaíocht sláinte é seo d'idirghabhálacha cliniciúla leis an QALY: bliain saoil coigeartaithe do cháilíocht,
ualaithe ó 0 (marbh) go 1 (sláinte iomlán). Leathnaíonn treoir folláine HM Treasury an loighic chéanna chuig
caiteachas poiblí neamh-sláinte, ag úsáid cheist chomhchuibhithe shástachta saoil an ONS ("Overall, how satisfied are you
with your life nowadays?", freagraithe 0–10) mar dhréimire an toraidh in ionad innéacs staid sláinte. Ciallaíonn WELLBY de 1
go dtéann sástacht saoil duine amháin suas pointe iomlán amháin ar feadh bliana (nó, ar an gcaoi chéanna, go dtéann sástacht deichniúr
suas 0.1 pointe an duine ar feadh bliana — suimítear WELLBYanna thar daonra mar a dhéantar le QALYanna). Socraíonn treoir HM
Treasury luach airgid samplach in aghaidh an WELLBY (thart ar £13,000, praghsanna 2019/20) díorthaithe trí shonraí
folláine suibiachtúla a réiteach le cuir chuige eile i leith luach bliana saoil, rud a thugann bealach do mheasúnóirí torthaí a airgeadú —
laghdú uaignis, comhtháthú pobail, rochtain ar spás glas — nár fhéadfadh teicnící [luachála folláine](../luacháil-folláine/)
ach iad a thuairisciú roimhe seo, gan iad a chur i gcomparáid ar bhonn comhchoiteann le caiteachas sláinte nó sábháilteachta.

## An mhatamaitic

```
WELLBY = Δ sástacht saoil (scála 0–10) × líon na mblianta a mhaireann an t-athrú
        (suimithe thar gach duine a mbaineann leo)

Tairbhe folláine airgeadaithe = WELLBYanna a ghintear × luach in aghaidh an WELLBY (luach tagartha HMT)

cf. QALY = Δ fóntais staid sláinte (scála 0–1) × blianta a mhaireann sa staid sin
```

Ní féidir scála sástachta 0–10 agus scála fóntais QALY 0–1 a mhalartú gan céim thiontaithe; pléann treoir HM Treasury
an dá cheann a réiteach ionas nach ndéantar, mar shampla, idirghabháil sláinte arna measúnú i QALYanna agus idirghabháil
shóisialta arna measúnú i WELLBYanna a chomhaireamh faoi dhó go ciúin nó a fhágáil gan chomparáid laistigh den
[mheasúnú Green Book](../measúnú-green-book/) céanna.

## Sampla oibrithe

**Seirbhís uaignis údaráis áitiúil**: freastalaíonn scéim cairdis ar 400 cónaitheoir scothaosta scoite. Léiríonn suirbhéanna leantacha go
dtéann meánsástacht saoil ó 5.2 go 6.0 (gnóthachan 0.8 pointe), agus meastar go bhfanann an éifeacht ar feadh 2 bhliain sula
n-imíonn sí.

```
WELLBYanna = 400 duine × 0.8 pointe × 2 bhliain = 640 WELLBY

Luach airgeadaithe = 640 × £13,000 = £8,320,000
```

I gcomparáid le costas bliantúil cláir £300,000 (£600,000 thar 2 bhliain), is é an cóimheas tairbhe-costais
thart ar 8,320,000 / 600,000 ≈ **13.9:1** — figiúr atá in ann suí anois sa tábla measúnaithe céanna le
cost-in-aghaidh-QALY-a-seachnaíodh de chuid scéime sláinte nó le sábhálacháin ama turais de chuid scéime iompair.

**Carthanas, scála níos lú**: sroicheann clár ealaíon pobail 50 rannpháirtí le gnóthachan sástachta tomhaiste de 0.3 pointe, a mhaireann 1 bhliain.

```
WELLBYanna = 50 × 0.3 × 1 = 15 WELLBY
Luach airgeadaithe = 15 × £13,000 = £195,000
```

## Nasc leis an innealtóireacht bogearraí

- Is féidir le haon seirbhís os comhair saoránach a bhailíonn mír suirbhé sástachta saoil nó folláine cheana (déanann go leor
  ardán údaráis áitiúil agus sláinte-agus-cúraim amhlaidh, de réir cheithre cheist chaighdeánacha folláine an ONS)
  WELLBYanna a ríomh go díreach ó phíblínte sonraí atá ann cheana seachas meastóireacht eacnamaíoch shaincheaptha a choimisiúnú
  do gach athrú seirbhíse.
- Tugann WELLBYanna ainmneoir caighdeánaithe go náisiúnta, formhuinithe ag HM Treasury d'fhoirne innealtóireachta a thógann do
  thuairisciú [an Achta um Luach Sóisialta](../an-tacht-um-luach-sóisialta/) nó
  [fháltas sóisialta ar infheistíocht](../fáltas-sóisialta-ar-infheistíocht/), ag seachaint iomadú "scóir tionchair"
  saincheaptha nach féidir a chur i gcomparáid thar chonarthaí nó soláthraithe.
- Toisc go bhfuil WELLBYanna suimitheach thar dhaoine agus am, comhdhéanann siad go néata isteach sa chineál rianaithe
  torthaí ar leibhéal daonra a úsáidtear i gcórais [cuntasachta bunaithe ar thorthaí](../cuntasacht-bunaithe-ar-thorthaí/)
  — féadann painéal seirbhíse WELLBYanna carnacha a ghintear in aghaidh na ráithe a thuairisciú mar a thuairiscíonn córas sláinte
  QALYanna a fuarthas.

## Contúirtí

- **Glacadh leis go bhfuil gnóthachain sástachta féin-thuairiscithe inchurtha go hiomlán leis an idirghabháil** —
  gan frithfhíorasach (grúpa comparáide nó dearadh roimh/tar éis le rialuithe), ní féidir leat gnóthachan WELLBY a
  scaradh ó threochtaí ginearálta; féach [anailís fhrithfhíorasach](../anailís-fhrithfhíorasach/).
- **WELLBYanna agus QALYanna a mheascadh i dtotal amháin gan réiteach** — tá treoir HM Treasury sainráite go n-úsáideann an dá cheann
  scálaí difriúla agus teoiricí luacha bunúsacha difriúla; má shuimítear go simplí iad cuirtear leas forluiteach faoi dhó
  sa chomhaireamh.
- **An luach airgid tagartha a úsáid gan cáineadh** — is meastachán meáin náisiúnta é an figiúr £-in-aghaidh-an-WELLBY le
  bandaí mífhoiréigin fíor; molann treoir HM Treasury anailís íogaireachta, gan caitheamh leis mar ráta malairte seasta.

## Foinsí

- HM Treasury. "Wellbeing guidance for appraisal: supplementary Green Book guidance." (2021)
  <https://www.gov.uk/government/publications/wellbeing-guidance-for-appraisal-supplementary-green-book-guidance>
- ONS. "Personal well-being user guidance" (the four standard wellbeing questions).
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing>
- HM Treasury. "The Green Book: Central Government Guidance on Appraisal and Evaluation."
