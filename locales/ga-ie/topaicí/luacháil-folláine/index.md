# Luacháil folláine (WELLBY)

Cuireann luacháil folláine praghas ar éifeacht beartais go díreach i dtéarmaí sástachta saoil, ag úsáid an WELLBY
(bliain saoil coigeartaithe do dhea-bhail) mar aonad — is ionann WELLBY amháin agus athrú pointe amháin ar scála
sástachta saoil 0–10, a mhaireann ar feadh bliana. Is é an rogha mhalartach a cheadaigh HM Treasury go hoifigiúil seachas
gach tairbhe a airgeadú trí thoilteanas chun íoc.

## Cén fáth a bhfuil tábhacht leis

Thug "Wellbeing guidance for appraisal: supplementary Green Book guidance" de chuid HM Treasury (2021,
<https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>) sonraí folláine suibiachtúla
isteach i measúnú an rialtais lárnaigh go foirmiúil, ag tabhairt bealach d'anailísithe luach a chur ar thorthaí — nasc
sóisialta, meabhairshláinte, sábháilteacht, rannpháirtíocht chathartha — a bhíonn deacair ag modhanna
[roghnaithe luaite](../luacháil-roghnaithe-luaite/) agus [roghnaithe nochta](../luacháil-rogha-nochta/) praghas a
chur orthu go cuíchreidte, mar is minic a bhíonn daoine olc ag réamhaisnéisiú cé mhéad a imreoidh earra tionchar ar a sástacht
leis an saol. Socraíonn an treoir, a forbraíodh i gcomhar leis an What Works Centre for Wellbeing, luach airgid molta in aghaidh an
WELLBY — £13,000 (praghsanna 2021, athbhreithnithe go tréimhsiúil) — díorthaithe ón gcaidreamh a breathnaíodh i suirbhéanna
móra folláine (go príomha Annual Population Survey an ONS, a chuir ceithre cheist folláine ONS4 ó 2011) idir ioncam agus
sástacht saoil, ag tabhairt ráta tiontaithe ar ais go punt d'anailísithe nuair is gá comparáid airgeadaithe i gcoinne
measúnuithe eile Green Book.

Tá tábhacht leis an modh toisc go n-aisiompaíonn sé an loighic luachála is gnách: seachas a fhiafraí cad a d'íocfadh daoine as
toradh (roghnú luaite) nó luach a thátal ó idirbheart margaidh gaolmhar (roghnú nochta), tomhaiseann sé éifeacht an
toraidh ar shástacht saoil tuairiscithe go díreach, ag seachaint na bearna idir an méid a deir daoine go dteastaíonn uathu agus
an méid a fhágann i ndáiríre níos fearr as iad. Is é seo a theorainn lárnach freisin — bíonn tionchar ag éifeachtaí oiriúnaithe agus
frámála ar shástacht saoil féin-thuairiscithe, ar gá do chleachtóir cúramach rialú a dhéanamh orthu.

## An mhatamaitic

```
WELLBY = 1 phointe sástachta saoil (scála 0-10) i gcás 1 duine ar feadh 1 bhliana

Iomlán WELLBYanna ó bheartas =
  Σ (athrú ar scór sástachta saoil) × (líon na ndaoine a mbaineann leo)
    × (fad i mblianta, lascainithe ag an ráta lascaine sóisialta)

Luach airgeadaithe = Iomlán WELLBYanna × luach in aghaidh an WELLBY
  (luach molta HM Treasury: £13,000 in aghaidh an WELLBY, praghsanna 2021,
   faoi réir athbhreithnithe tréimhsiúil — seiceáil an treoir reatha roimh úsáid)
```

Tá sé seo difriúil ón [mbliain saoil coigeartaithe do dhea-bhail](../blianta-saoil-coigeartaithe-do-dhea-bhail/) in
eacnamaíocht sláinte, atá ankartha de ghnáth ar scálaí cáilíochta saoil a bhaineann le sláinte (EQ-5D agus a leithéidí) seachas
sástacht saoil ghinearálta; tá an dá cheann gaolmhar ach ní inmhalartaithe, agus ba cheart do mheasúnuithe Green Book a bheith sainráite
faoin scála agus an modh tarraingthe amach a thacaíonn le figiúr WELLBY tuairiscithe.

## Sampla oibrithe

**Údarás áitiúil**: reáchtálann comhairle scéim cairdis phobail do chónaitheoirí scothaosta scoite, ag freastal ar 400 duine. Léiríonn
suirbhé folláine roimh/tar éis a úsáideann ceist sástachta saoil ONS4 go dtéann meánscór na rannpháirtithe ó 5.8 go 6.5 —
gnóthachan 0.7 pointe — a mhaireann ar feadh thréimhse mhaoinithe 2 bhliain an chláir.

```
WELLBYanna a ghintear = 400 duine × 0.7 pointe × 2 bhliain = 560 WELLBY
Luach airgeadaithe = 560 × £13,000 = £7.28m
Costas cláir = £450,000 thar 2 bhliain

Cóimheas tairbhe-costais ≈ £7.28m / £0.45m ≈ 16:1
```

Ba cheart go spreagfadh cóimheas chomh hard seo grinnscrúdú seachas ceiliúradh — tugann treoir folláine an Green Book rabhadh go
sainráite gan gnóthachain féin-thuairiscithe samplaí beaga a ghlacadh ar a luach sonrach gan seiceáil le haghaidh éifeachtaí roghnúcháin (ar
cuid na gcónaitheoirí is sóisialta, is dóichí a fheabhsófaí amháin a chuaigh isteach sa scéim?) agus gan grúpa comparáide; ghlanfadh
meastóireacht dea-dheartha athrú frithfhíorasach a breathnaíodh i neamh-rannpháirtithe, féach [anailís fhrithfhíorasach](../anailís-fhrithfhíorasach/).

**Rialtas náisiúnta**: trí dhá chlár fostaíochta a chur i gcomparáid ag úsáid WELLBYanna seachas tuilleamh amháin, gabhtar go bhfuil
costas folláine ag baint le dífhostaíocht thar ioncam caillte — faigheann taighde folláine na Ríochta Aontaithe go comhsheasmhach go laghdaíonn dífhostaíocht
sástacht saoil níos mó ná mar a thuar an caillteanas ioncaim amháin, mar gheall ar éifeachtaí neamhairgeadúla caillteanas struchtúir, cuspóra agus
teagmhála sóisialta. Thearc-luacháilfí clár a mheastar ar ghnóthachan tuillimh amháin i gcomparáid le ceann a mheastar ar WELLBYanna freisin.

## Nasc leis an innealtóireacht bogearraí

Is annamh a shroicheann luacháil folláine foirne innealtóireachta go díreach, ach múnlaíonn sí cad a shainítear mar "rath" do tháirgí san
earnáil shóisialta agus seirbhíse poiblí — ba cheart d'ardán cairdis digiteach, d'uirlis triaráil meabhairshláinte, nó d'ardán pobail do
chónaitheoirí scoite a bheith ag súil go dtomhaisfear a thionchar ar an mbealach seo faoi dheireadh, rud a chiallaíonn go gcaithfidh anailísíocht
táirge a ghabháil *cé* a shroichtear agus ar feadh *cén fhad*, ní líon úsáide amháin. Tóg ionstraimíocht suirbhé folláine (ONS4 nó coibhéisí
bailíochtaithe) isteach i meastóireacht seirbhíse ón tús seachas í a bholtáil air siar-dhírithe; cailleann bonnlíne folláine a chur isteach
tar éis seoladh seirbhíse an chomparáid roimh/tar éis go hiomlán. Féach [torthaí vs. aschuir](../torthaí-vs-aschuir/) agus
[modhanna meastóireachta tionchair](../modhanna-meastóireachta-tionchair/).

## Contúirtí

- **Gan frithfhíorasach ná grúpa comparáide.** Cuireann gnóthachan folláine roimh/tar éis gan rialú ar an rud a tharlódh
  ar aon nós éifeacht an chláir i bhfiús; féach [anailís fhrithfhíorasach](../anailís-fhrithfhíorasach/) agus
  [breisíocht agus meáchan marbh](../breisíocht-agus-meáchan-marbh/).
- **Samplaí beaga féin-roghnaithe.** Bíonn claonadh roghnúcháin i suirbhéanna folláine de rannpháirtithe cláir a roghnaigh
  páirt a ghlacadh — is cosúil go raibh na daoine a chuaigh isteach agus a d'fhan ar threocht aníos cheana.
- **An tiontú £-in-aghaidh-an-WELLBY a chaitheamh mar rud beacht.** Is coinbhinsiún beartais é an luach airgeadaithe a
  dhíorthaítear ó chúlchéimnithe ioncaim-folláine, ní praghas margaidh; úsáid é le haghaidh inchomparáideachta thar
  mheasúnuithe Green Book, ní mar éileamh faoi cad "is fiú" folláine.
- **WELLBYanna a mheascadh le QALYanna a bhaineann le sláinte.** Tomhaiseann an dá cheann constructanna difriúla ar
  scálaí difriúla; féach [blianta saoil coigeartaithe do dhea-bhail](../blianta-saoil-coigeartaithe-do-dhea-bhail/) don leagan
  eacnamaíochta sláinte agus ná déan meán den dá cheann le chéile.

## Foinsí

- HM Treasury. "Wellbeing guidance for appraisal: supplementary Green Book guidance." 2021.
  <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>
- What Works Centre for Wellbeing. <https://whatworkswellbeing.org/>
- Office for National Statistics. "Personal well-being in the UK" (ONS4 measures).
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing>
- Fujiwara D, et al. "Wellbeing Valuation: A Nascent Field?" LSE / Simetrica research summaries.
