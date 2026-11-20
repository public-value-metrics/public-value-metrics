# Táirgiúlacht na Seirbhíse Poiblí

Tomhaiseann táirgiúlacht na seirbhíse poiblí cé chomh héifeachtúil a thiontaíonn caiteachas poiblí
ionchuir (foireann, caipiteal, earraí agus seirbhísí) ina n-aschuir a bhfuil cáilíocht coigeartaithe
orthu, do sheirbhísí — sláinte, oideachas, póilíneacht, cúram sóisialta — nach bhfuil aon phraghas
margaidh acu agus mar sin nach bhfuil aon fhigiúr ioncaim acu chun costais a roinnt air. Tá an tsraith
seo foilsithe ag Oifig na Staitisticí Náisiúnta (ONS) na RA ó lár na 2000idí agus is í an iarracht
náisiúnta is forbartha go modheolaíoch fós í chun an cheist a fhreagairt "an bhfuil an rialtas ag éirí
níos fearr nó níos measa ag airgead a thiontú ina sheirbhísí poiblí?"

## Cén fáth a bhfuil tábhacht leis

Sa mhargadh, is é (luach aschuir) / (costas ionchuir) an táirgiúlacht, agus is féidir luach an aschuir a
bhreathnú toisc go n-íocann duine éigin as. Níl aon phraghas díola ag athsholáthar cromáin, áit scoile
ná patról póilíní, agus mar sin ní féidir ach *ionchuir* (an méid a caitheadh) a thomhas go simplí —
rud a chuireann cathú ar thráchtairí caiteachas poiblí méadaitheach a mheas mar rud dona go huathoibríoch, toisc
go bhfuil cuma táirgiúlachta ag titim ar níos mó ionchuir agus gníomhaíocht cheannteidil chothrom. Réitíonn
modheolaíocht an ONS, atá leagtha amach ina foilseacháin "Sources and Methods" do tháirgiúlacht na
seirbhíse poiblí, é seo trí innéacs *aschuir* a thógáil ó mhéideanna gníomhaíochta (obráidí a rinneadh,
daltaí a mhúineadh, coireanna a imscrúdaíodh) agus ansin an t-innéacs aschuir sin a *choigeartú do
cháilíocht* — do shláinte, ráta marthanais agus amanna feithimh a ionchorprú; d'oideachas, gnóthachtáil;
do phóilíneacht, torthaí ar nós réiteach cásanna — ionas go gclárófar seirbhís a dhéanann an líon céanna
obráidí ach a bhaineann ráta marthanais níos fearr amach mar sheirbhís níos táirgiúla, ní níos
costasaí amháin. Is é an príomhthoradh a fhilleann ar eisiúintí ONS ná go bhfuil sé sobrach don
earnáil: thit táirgiúlacht seirbhísí poiblí na RA go géar le linn na paindéime COVID-19 agus, de réir
eisiúintí lár na 2020idí ONS féin, ní raibh sí tagtha chuici fós go leibhéil 2019 i roinnt fo-earnálacha
lena n-áirítear cúram sláinte, fiú agus an caiteachas ag ardú — bearna a athfhráma "níos mó maoinithe"
agus "níos mó táirgiúlachta" mar dhá cheist go hiomlán ar leith.

## An mhatamaitic

```
Innéacs aschuir (toirt) = Σ (gníomhaíocht_i × meáchan coibhneasta costais aonaid_i), meáite ar bhliain bhonn
                          thar gach gníomhaíocht seirbhíse (m.sh. obráidí cromáin, obráidí
                          cataracht, comhairliúcháin dhochtúra teaghlaigh), cosúil le hinnéacs toirte Laspeyres/Paasche

Coigeartú cáilíochta    = innéacs aschuir × fachtóir coigeartaithe cáilíochta
                          (m.sh. athrú ar ráta marthanais, amanna feithimh,
                          gnóthachtáil nó athchiontú a ionchorprú mar iolraitheoir ar an toirt amh)

Innéacs ionchuir        = Σ (uaireanta saothair × meáchan costais saothair) + (costas earraí/seirbhísí,
                          coigeartaithe do bhoilsciú) + (tomhaltas caipitil)

Fás táirgiúlachta fachtóra iomláin = % athrú ar an innéacs aschuir coigeartaithe do cháilíocht
                                    − % athrú ar an innéacs ionchuir
```

## Sampla oibrithe

**Ríomh léirithe táirgiúlachta géarearnála an NHS** (struchtúr de réir mhodheolaíocht an ONS):

```
Bliain 1: innéacs toirte aschuir = 100.0 (bliain bhonn), innéacs ionchuir = 100.0
          → innéacs táirgiúlachta = 100.0

Bliain 2: ardaíonn toirt gníomhaíochta 3.0% (níos mó obráidí, níos mó coinní)
          ach éiríonn an meán-am feithimh níos measa, rud a chuireann lascaine
          coigeartaithe cáilíochta de −1.0% i bhfeidhm
          Innéacs aschuir coigeartaithe do cháilíocht = 100 × 1.030 × 0.990 = 101.97

          Ardaíonn ionchuir: líon foirne +4.0%, costais eile (coigeartaithe do bhoilsciú) +1.5%,
          innéacs ionchuir meáite = 100 × 1.032 = 103.2

Fás táirgiúlachta = (101.97 / 100 − 1) − (103.2 / 100 − 1)
                  = 1.97% − 3.2% = −1.23 pointe céatadáin

Léiriú: d'ardaigh gníomhaíocht, ach d'ardaigh ionchuir níos tapúla agus thit
cáilíocht beagán, mar sin tháinig meath ar tháirgiúlacht — aschur in aghaidh
an aonaid ionchuir — cé gur "seachadadh níos mó cúraim."
```

Is é seo go beacht an patrún a thuairiscigh eisiúintí ONS arís agus arís eile do chodanna den NHS tar
éis na paindéime: caiteachas méadaitheach agus gníomhaíocht amh mhéadaitheach ag comhsheasamh le
táirgiúlacht thomhaiste ag titim nuair a chuirtear coigeartú cáilíochta agus fás ionchuir araon san
áireamh.

## Nasc leis an innealtóireacht bogearraí

Is é táirgiúlacht na seirbhíse poiblí an analóg ar leibhéal an daonra de na díospóireachtaí ar
tháirgiúlacht innealtóireachta (pointí scéil seolta i gcomparáid le [méadrachtaí DORA](../méadrachtaí-dora-don-luach-poiblí/)
i gcomparáid le [méadrachtaí sreafa](../méadrachtaí-sreafa-i-seachadadh-an-rialtais/)): tá tréchur amh gan
coigeartú cáilíochta chomh míthreorach in ospidéal agus atá "línte cóid seolta" ar fhoireann bogearraí.
Ba cheart d'fhoirne a thógann píblínte sonraí feidhmíochta do ranna coigeartú cáilíochta a mheas mar chéim
trasfhoirmithe chéadrangach, leaganaithe, ní mar fhonóta — toisc go bhfuil creidiúnacht an ONS féin
ag brath ar an gcoigeartú sin a bheith trédhearcach, in-atáirgthe agus athbhreithnithe de réir mar a
thagann sonraí cáilíochta níos fearr ar fáil (athbhreithníonn an ONS meastacháin táirgiúlachta bliantúla
roimhe seo de réir mar a chríochnaítear sonraí cáilíochta bunúsacha — m.sh. ráta marthanais — mar sin
caithfidh aon chóras in ísle srutha a thomhaltar na staitisticí seo athbhreithnithe siar-dhátaithe a
láimhseáil, ní tréimhsí nua a cur leis amháin). Trasnaíonn sé go díreach freisin le
[costas iomlán úinéireachta](../costas-iomlán-úinéireachta-i-tf-an-rialtais/) agus
[táirgiúlacht AI san earnáil phoiblí](../táirgiúlacht-ai-san-earnáil-phoiblí/): ní feabhsú táirgiúlachta
é córas a mhéadaíonn toirt gníomhaíochta amh gan cáilíocht a fheabhsú nó a choinneáil, de réir
shainmhíniú an ONS féin.

## Contúirtí

- **Fás ionchuir a mheas mar fhás táirgiúlachta**: tháirgeann níos mó caiteachais ag maoiniú níos mó
  foirne níos mó *gníomhaíochta*, ní níos mó *táirgiúlachta*, mura n-ardaíonn aschur in aghaidh an
  aonaid ionchuir freisin — meascann tráchtaireacht pholaitiúil an dá cheann go rialta.
- **Neamhaird iomlán ar choigeartú cáilíochta**: taispeánfaidh innéacs aschuir a thógtar ó chomhaireamh
  gníomhaíochta amh amháin "gnóthachain táirgiúlachta" ó níos mó de rud éigin de luach níos ísle nó
  de cháilíocht níos ísle a dhéanamh; tá coigeartú cáilíochta an ONS ann go sonrach chun é seo a ghabháil.
- **Innéacsanna táirgiúlachta a chur i gcomparáid thar fho-earnálacha gan aois na modheolaíochta a
  mheaitseáil**: tógtar táirgiúlacht sláinte, oideachais agus póilíneachta as foinsí éagsúla sonraí
  gníomhaíochta agus cáilíochta ar thimthriallta athbhreithnithe éagsúla — cuireann comparáid thrasearnála
  shimplí ionstraimí neamhoiriúnacha i gcomparáid.
- **Titim táirgiúlachta bliana amháin a léamh mar threocht bhuan**: léirigh figiúirí táirgiúlachta ó ré na
  paindéime agus ó ré iarpaindéime luaineacht shuntasach bliain ar bhliain de réir mar a d'athraigh sonraí
  cáilíochta (m.sh. liostaí feithimh, téarnamh roghnach) féin; tugann ONS rabhadh i gcónaí in aghaidh
  róléirmhíniú ar ghluaiseachtaí aon bhliana.

## Foinsí

- Office for National Statistics, "Public Service Productivity" series.
  <https://www.ons.gov.uk/economy/economicoutputandproductivity/publicservicesproductivity>
- Office for National Statistics, "Public Service Productivity: Total, UK — Sources and Methods."
  <https://www.ons.gov.uk/economy/economicoutputandproductivity/publicservicesproductivity>
