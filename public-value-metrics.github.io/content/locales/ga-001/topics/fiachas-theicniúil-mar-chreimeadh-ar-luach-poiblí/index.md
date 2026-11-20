# Fiachas theicniúil mar chreimeadh ar luach poiblí

Is meafar de chuid Ward Cunningham ó 1992 é fiachas teicniúil don chostas intuigthe amach anseo de chinntí códaithe
práinneacha san am atá caite: **príomhshuim** (an obair leighis atá dlite) agus **ús** (an tarraingt leanúnach a chuireann
sé ar sheachadadh). In eastát TF oidhreachta rialtais, íoctar an t-ús sin go díreach as luach poiblí — seachadadh níos
moille ar athrú reachtúil, rátaí teipe níos airde ar sheirbhísí atá os comhair saoránach, agus linn laghdaitheach daoine
atá in ann teagmháil shábháilte a dhéanamh leis an gcóras ar chor ar bith.

## Cén fáth a bhfuil tábhacht leis

Tá riosca dea-dhoiciméadaithe agus méadaitheach ag córais phríomhfhráma agus ré COBOL ar fud ranna rialtais na Ríochta
Aontaithe — HMRC agus DWP i measc na gcinn is minice a luaitear — a bhfuil an National Audit Office tar éis a chur in iúl
arís agus arís, lena n-áirítear ina thuarascáil *Digital Transformation in Government* (<https://www.nao.org.uk/>):
ardáin atá ag dul in aois atá costasach le hathrú, atá níos deacra a dhaingniú, agus atá spleách ar fhórsa saothair
speisialtóirí atá ag scor níos tapúla ná mar a chuirtear ionadaithe orthu. Murab ionann agus riaráiste san earnáil
phríobháideach, suíonn an fiachas seo go díreach idir saoránaigh agus a dteidlíochtaí reachtúla — is constaic seachadta
beartais é inneall ríofa sochair nach féidir a athrú go sábháilte, ní míchaoithiúlacht innealtóireachta amháin. Is sampla
canónach é atosú 2013 ar chlár TF Universal Credit, nuair a fuair an National Audit Office nach seachadfadh an tógáil bhunaidh
luach ar airgead agus go raibh cuid shubstaintiúil den tsócmhainn bogearraí le scriosadh, den fhiachas teicniúil
neamhphraghsáilte ag teacht suas le clár poiblí beo atá le feiceáil ag airí.

## An mhatamaitic

```
Príomhshuim SQALE = Σ thar sháruithe (am leighis) × ráta costais forbróra
Cóimheas fiachais theicniúil (TDR) = costas leighis / costas athfhorbartha × 100
                    (gráid SonarQube: A ≤5%, B ≤10%, C ≤20%, D ≤50%)

Ús (an uimhir a thugann údar leis an aisíoc):
  ús/bliain = Δ treoluas seachadta × luach in aghaidh aonaid treoluais
                + Δ ráta eachtraí os comhair saoránach × costas in aghaidh eachtra
                + préimh scileanna speisialtóra × líon cinn tionchair
Cás aisíoca = PV(ús a seachnaíodh thar an léaslíne) − costas leighis
               (lascainithe ag ráta lascaine sóisialta an Green Book, féach
               social-discount-rate.md)
```

Luann an phríomhshuim an dliteanas; is é an t-ús a dhéanann an cás infheistíochta do choiste cuntas poiblí.

## Sampla oibrithe

Inneall próiseála éileamh 250,000 líne scríofa i 4GL oidhreachta. Ag baint úsáide as tagarmharc CAST Appmarq de thart ar $3.61
de phríomhshuim fiachais theicniúil in aghaidh na líne cód (≈£2.85 ag gnáthchomhshó):

```
Príomhshuim ≈ 250,000 × £2.85 ≈ £712,500
TDR ≈ 16% (gráid C)
```

Ús tomhaiste: coinníonn an roinn triúr conraitheoirí speisialtóra ag préimh ráta lae 40% thar rátaí gnáth-innealtóra
shinsearaigh toisc gur ídíodh scileanna inmheánacha — £180,000/bliain breise ar fhoireann de shé dhuine. Cruthaíonn an córas
ceithre mhórthoirmeasc próiseála/bliain freisin, a chuireann cinntí ar fionraí do thart ar 5,000 éilitheoir gach ceann agus
a atreoraíonn iad chuig an ionad teagmhála ag thart ar £25/glao:

```
Ús ≈ £180,000 (préimh scileanna)
         + 4 × 5,000 × £25 = £500,000 (costas teagmhála atreoraithe)
         ≈ £680,000/bliain
```

Cosnaíonn leigheas spriocdhírithe ar na modúil is measa feidhmíochta £1,200,000 agus samhlaítear go ngearrfaidh sé ús 70%:

```
Laghdú úis = 0.70 × 680,000 = £476,000/bliain
Aisíoc ≈ 1,200,000 / 476,000 ≈ 2.5 bliana
```

Tá tábhacht leis an spriocdhíriú: ní fhaigheann leigheas ar chód annamh-teagmhála aon rud, toisc go gcomhdhlúthaíonn ús ansin
san áit a bhfuil minicíocht athraithe agus dlús fiachais ag buaic.

## Nasc leis an innealtóireacht bogearraí

An frámáil luacha poiblí a uasghrádaíonn cás fiachais theicniúil thar "tá an cód sean": cuir an t-eastát oidhreachta in iúl mar
fhardal de na háiteanna ina bhfuil cumas seachadta caillte comhdhlúite, agus ceangail go sainráite é le [costas iomlán
úinéireachta](../costas-iomlán-úinéireachta-i-tf-an-rialtais/), ós rud é gur costas oibriúcháin é an t-ús a bhaineann le líne
TCO cibé ar iarr an t-airgeadas riamh é nó nár iarr. Iompraíonn córais atá luchtaithe le fiachas nochtadh míchothrom
[cibearshlándála](../luach-na-cibearshlándála-san-earnáil-phoiblí/) freisin, mar tá comhghaol idir luas paistithe agus dlús fiachais —
is fiachas teicniúil é córas oidhreachta nach féidir a phaisteáil a n-íoctar a ús i riosca eachtraí seachas i bpunt.
Agus is cinneadh [costas moille](../costas-moille-i-gcláir-phoiblí/) é gach malartú idir leigheas agus gné: moillíonn
aisíoc fiachais an chéad athrú reachtúil eile, a bhfuil a CoD féin le meá i gcoinne an úis a sábháladh.

## Contúirtí

- **Tuairisciú príomhshuime amháin**: ní thugann meastachán leighis mór scanrúil gan figiúr úis údar le rud ar bith d'údaraitheoir caiteachais.
- **Figiúirí fiachais ginte ag uirlisí a thógáil go litriúil**: comhaireann scanóirí ar stíl SQALE sáruithe rialacha; caillíonn siad an
  cineál costasach fiachais — cinntí ailtireachta agus rialacha gnó oidhreachta gan doiciméadú — agus iad ag marcáil mionrudaí.
- **"Seachnaíonn an t-athscríobh é seo go léir"**: ní mór do chláir athsholáthair an disciplín céanna a shásamh agus aon chás gnó eile
  — costas frithfhíorasach, dóchúlacht rathúlachta, agus lascainiú — ní díolúine uaidh, mar a léirigh atosú 2013 ar Universal Credit.
- **Útóipeachas nialas-fiachais**: ní nialas an leibhéal fiachais is fearr; is giaráil é fiachas a cheannaigh seachadadh níos luaithe.
  Is í an cheist bheo i gcónaí an ráta úis, ní an bhfuil fiachas ann ar chor ar bith.

## Foinsí

- Cunningham W, "The WyCash Portfolio Management System", OOPSLA experience report, 1992.
- CAST, technical debt estimation (Appmarq benchmark). <https://www.castsoftware.com/glossary/technical-debt-estimation>
- National Audit Office, *Digital Transformation in Government* and reports on Universal Credit. <https://www.nao.org.uk/>
