# Clàr-amais Leasachaidh Dhaoine (HDI)

Is e an HDI roghainn eile bhonn-cheann nan Dùthchannan Aonaichte seach rangachadh dhùthchannan a-rèir teachd-a-steach a-mhàin: bidh e a’ cur còmhla dùil-beatha, foghlam agus teachd-a-steach gu aon àireamh eadar 0 agus 1, air a’ bhunait — a chaidh a mholadh leis an eaconamaiche Amartya Sen agus a leasaich Mahbub ul Haq dha na DA — gu bheil leasachadh mu bhith a’ leudachadh na as urrainn do dhaoine a dhèanamh agus a bhith, chan e dìreach na choisneas iad. Tha e air a bhith air fhoillseachadh gach bliadhna ann an Human Development Report aig Prògram Leasachaidh nan Dùthchannan Aonaichte (UNDP) bho 1990.

## Carson a tha e cudromach

Mus robh an HDI ann, bha “leasachadh” air a thomhas cha mhòr gu tur le GNP gach ceann, nach innis dad mu dhè a bheil fàs a’ ruighinn slàinte no foghlam dhaoine àbhaisteach. Dh’ath-fhrèamaich dòigh comais Sen leasachadh mar leudachadh shaorsaidhean fìor, agus thionndaidh ul Haq sin gu clàr-amais so-fhoillseachaidh a b’ urrainn do UNDP gach dùthaich a rangachadh leis, a’ toirt air riaghaltasan a dh’fhàs beairteach air teachd-a-steach a-mhàin ach a dh’fhàg slàinte no sgoilearachd air cùl aghaidh a thoirt air rang nas miosa na bha an GDP a’ moladh (is iad stàitean ola a’ Ghulf agus cuid de dh’eaconamaidhean tarraingeach na h-eisimpleirean àbhaisteach). Tha structar trì-thaobh an HDI cuideachd na shinnsear mhodhan-obrach dìreach air an [Clàr-amais Bochdainn Iomadh-thomhais](../clàr-innse-bochdainn-iomadh-thaobhach/): bidh an dà chuid a’ diùltadh leigeil le aon tomhas easbhaidh ann an tomhas eile a cheannach air ais, a’ cleachdadh cuibheas geoimeatrach seach àireamhachd. Bidh UNDP a’ foillseachadh notaichean teicnigeach slàn agus an dàta bunaiteach airson gach deasachadh (<https://hdr.undp.org/data-center/human-development-index>), a tha na phrìomh thùs airson duine sam bith a bhios a’ togail air a’ chlàr-amais seach ga ath-thoirt a-mach.

## A’ mhatamataig

```
Clàr-amais Dùil-beatha (LEI)     = (LE − 20) / (85 − 20)

Clàr-amais Bhliadhnaichean Sgoilearachd Cuibheasach = bliadhnaichean sgoilearachd cuibheasach / 15
Clàr-amais Bhliadhnaichean Sgoilearachd Ris-fhaicsinneach = bliadhnaichean sgoilearachd ris-fhaicsinneach / 18
Clàr-amais Foghlaim (EI)         = (Clàr-amais Bhliadhnaichean Cuibheasach + Clàr-amais Bhliadhnaichean Ris-fhaicsinneach) / 2

Clàr-amais Teachd-a-steach (II)  = (ln(GNI gach ceann) − ln(100)) / (ln(75000) − ln(100))

HDI = (LEI × EI × II) ^ (1/3)     [cuibheas geoimeatrach nan trì fo-chlàr-amais]
```

Tha an cuibheas geoimeatrach a dh’aona ghnothach: leis gu bheil e ag iomadachadh seach a’ dèanamh cuibheasachd, chan urrainn do sgòr glè àrd ann an aon tomhas sgòr glè ìosal ann an tomhas eile a dheagh dhìoladh — dealbhadh a ghabh UNDP ann an 2010 gu sònraichte gus neo-chothromachd a pheanasachadh, a’ cur àite na foirmle cuibheis àireamhachd roimhe.

## Eisimpleir obrach

**Dùthaich le teachd-a-steach meadhanach**: dùil-beatha 72 bliadhna, bliadhnaichean sgoilearachd cuibheasach 8, bliadhnaichean sgoilearachd ris-fhaicsinneach 13, GNI gach ceann $12,000.

```
LEI = (72 − 20) / (85 − 20)              = 52 / 65   = 0.800
MYSI = 8 / 15                                        = 0.533
EYSI = 13 / 18                                       = 0.722
EI = (0.533 + 0.722) / 2                             = 0.628
II = (ln(12000) − ln(100)) / (ln(75000) − ln(100))
   = (9.393 − 4.605) / (11.225 − 4.605)
   = 4.788 / 6.620                                   = 0.723

HDI = (0.800 × 0.628 × 0.723) ^ (1/3)
    = (0.363) ^ (1/3)                                ≈ 0.713
```

Tha HDI de 0.713 a’ tuiteam ann am buidheann “leasachadh dhaoine àrd” UNDP (0.700–0.799); tòisichidh “glè àrd” aig 0.800. Thoir fa-near cho mothachail is a tha an toradh don fho-chlàr-amais as laige: nan robh bliadhnaichean sgoilearachd cuibheasach 4 an àite 8 (MYSI = 0.267, EI = 0.494), thuiteadh HDI gu (0.800 × 0.494 × 0.723)^(1/3) ≈ 0.639 — a’ leigeil sìos buidheann slàn — eadhon ged nach do dh’atharraich dad eile.

## Ceangal ri innleadaireachd bathar-bog

- Gabhaidh pàtran a’ chuibheis gheoimeatraich ath-chleachdadh gu dìreach airson sgòr measgaichte seirbheis no toraidh sam bith far nach eil thu airson gum falaich aon tomhas làidir tomhas lag deatamach — m.e. a’ cur còmhla sgòran so-ruigsinneachd, coileanaidh agus earbsachd airson seirbheis dhidseatach phoblach le iomadachadh seach le cuibheas cuideaman, gus nach urrainn do sheirbheis a tha luath ach neo-ruigsinneach “math” a sgòradh.
- Tha cruth log an HDI air teachd-a-steach (luach iomallach lùghdaichte punnd a bharrachd) na aon loidsig ri [cuideam sgaoilidh](../cuideam-sgaoilidh/) ann am measadh: tha $1,000 a bharrachd a’ ciallachadh tòrr a bharrachd do dhachaigh bhochd na do dhachaigh bheairteach, agus le bhith gan làimhseachadh le chèile gu loidhneach bidh buaidh air a phrìsealachadh ceàrr.
- Bu chòir do dheas-bhòrd sam bith a bhios ag aithris sgòr measgaichte singilte “in-ghabhail didseatach” no “builean shaoranach” am foirmle cruinneachaidh a sgrìobhadh sìos cho soilleir ri notaichean teicnigeach UNDP — faic [KPIan na roinne poblaich](../kpian-na-roinne-poblaich/) agus [clàr-sgòraidh luach poblach](../cairt-sgòraidh-luach-poblach/).

## Cunnartan

- **A’ dèanamh cuibheasachd an àite a’ chuibheis gheoimeatraich** — leigidh cuibheas àireamhachd le teachd-a-steach àrd slàinte no foghlam bochd fhalach gu tur; b’ e an aon amas aig atharrachadh modh-obrach 2010 stad a chuir air an ionadachadh sin.
- **A’ coimeas HDI bliadhna air bliadhna mar gum b’ e GDP air a cheartachadh airson atmhorachd a bh’ ann** — bidh UNDP bho àm gu àm ag ath-bhunachadh a’ chlàir-amais (crìochan as ìsle/as àirde ùra, bàraidhean sgoilearachd ath-sgrùdaichte), agus mar sin faodaidh atharrachadh rang ùrachadh modh-obrach a nochdadh, chan e gluasad fìor; dèan cinnteach an-còmhnaidh dè an deasachadh HDR as e tùs figear.
- **A’ làimhseachadh HDI mar thomhas bochdainn** — is e cuibheasachd nàiseanta a th’ ann agus chan innis e dad mu sgaoileadh taobh a-staigh dùthcha; airson sin, cleachd an [Clàr-amais Bochdainn Iomadh-thomhais](../clàr-innse-bochdainn-iomadh-thaobhach/) no HDI air a cheartachadh airson neo-ionannachd aig UNDP.

## Tùsan

- UNDP. "Human Development Index (HDI)" technical notes and data.
  <https://hdr.undp.org/data-center/human-development-index>
- UNDP. Human Development Report 1990 (the index's introduction).
- Sen A. "Development as Freedom." Oxford University Press, 1999.
