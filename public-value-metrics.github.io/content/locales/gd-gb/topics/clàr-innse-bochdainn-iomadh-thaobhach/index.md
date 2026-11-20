# Clàr-innse bochdainn iomadh-thaobhach (MPI)

Bidh an MPI a’ tomhas bochdainn mar dhìth a tha a’ dol thairis air a chèile a tha duine a’ fulang aig an aon àm — ann an slàinte,
foghlam agus inbhean beatha — seach mar theachd-a-steach a-mhàin a’ tuiteam fo loidhne. Chaidh a leasachadh leis an Oxford Poverty
and Human Development Initiative (OPHI) còmhla ri Sabina Alkire agus James Foster, agus tha e air a fhoillseachadh còmhla ri UNDP anns gach
Human Development Report bho 2010, ri taobh a’ [chlàir-innse leasachaidh daonna](../clàr-amais-leasachaidh-dhaoine/).

## Carson a tha e cudromach

Cha bhi loidhnichean bochdainn teachd-a-steach a’ faicinn dhaoine aig a bheil airgead gu leòr ach nach eil uisge glan, foghlam
no a thàinig beò às deidh bàs pàiste — agus chan fhaic iad gu bheil dìth a’ cruinneachadh còmhla: tha teaghlach gun dealan fada nas
dualtaiche cuideachd gun slàinteachas agus pàiste le dìth beathachaidh. Bidh an dòigh Alkire-Foster, air a bheil an MPI stèidhichte, a’
cunntadh dìth gach neach thairis air deich comharran ann an trì tomhasan le cuideam co-ionann — slàinte, foghlam, inbhean beatha —
agus chan eil e a’ seòrsachadh cuideigin mar “bochd a rèir MPI” ach ma tha an sgòr dìth cuideam aca a’ dol thairis air stairsneach
stèidhichte, a’ glacadh a’ chothlamaidh nach urrainn dha seata de staitistigean comharra singilte a dhèanamh. Tha OPHI a’ foillseachadh
a’ mhodh-obrach iomlan agus dàta dùthcha aig <https://ophi.org.uk/multidimensional-poverty-index/>; tha an MPI cruinneil a tha e a’
cumail suas còmhla ri UNDP a-nis a’ còmhdach còrr is 110 dùthaich. Airson bathar-bog a thogadh airson prògraman an aghaidh bochdainn —
tar-chuir airgid, roinn-seòrsachadh cùram sòisealta, cuimseachadh cobhair — is e seata chomharran an MPI gu tric an rud as fhaisge air
sgeama dìth àbhaisteach a chaidh a dhearbhadh mu thràth thairis air dusanan de dh’oifisean staitistigs nàiseanta.

## A’ mhatamataig

```
10 comharran, 3 tomhasan, gach tomhas le cuideam 1/3:

Slàinte (1/3):            beathachadh (1/6), bàsmhorachd chloinne (1/6)
Foghlam (1/3):            bliadhnachan sgoile (1/6), frithealadh sgoile (1/6)
Inbhean beatha (1/3):     connadh còcaireachd, slàinteachas, uisge òil,
                          dealan, taigheadas, maoin (1/18 gach fear)

sgòr dìth (c) = suim cuideaman nan comharran anns a bheil neach fo dhìth

tha neach “bochd a rèir MPI” ma tha c ≥ 1/3 (an stad-loidhne bochdainn, k = 33%)

H (co-mheas cunntais) = àireamh nam bochd a rèir MPI / an t-sluagh iomlan
A (dian-ìre)          = sgòr dìth cuibheasach am measg nam bochd a rèir MPI a-mhàin

MPI = H × A
```

Seach gu bheil an MPI a’ iomadachadh *roinn* nam bochd le *cho bochd* ’s a tha iad, faodaidh dà roinn leis an aon cho-mheas
cunntais sgòran MPI gu math eadar-dhealaichte ma tha dìth nas miosa ann an aon dhiubh — an aon loidsig “gun ionadachadh eadar
tomhasan” a tha air cùl cuibheasachd gheoimeatrach an HDI.

## Eisimpleir obrach

**Sgrùdadh nàiseanta de 1,000 neach**: tha 350 air an comharrachadh mar bhochd iomadh-thaobhach (sgòr dìth ≥ 33%). Am measg nan 350
neach bochd sin a-mhàin, is e 45% an sgòr dìth cuibheasach.

```
H = 350 / 1000                = 0.350
A = 0.45
MPI = H × A = 0.350 × 0.45    = 0.1575
```

**A’ dèanamh coimeas eadar dà sgìre le cunntas co-ionann**: tha H = 0.30 agus A = 0.40 aig Sgìre A (mòran bochd, meadhanach fo dhìth);
tha H = 0.30 agus A = 0.60 aig Sgìre B (an aon àireamh bochd, ach nas miosa fo dhìth — gun dealan *agus* gun slàinteachas
*agus* gun fhrithealadh sgoile aig an aon àm).

```
MPI_A = 0.30 × 0.40 = 0.120
MPI_B = 0.30 × 0.60 = 0.180
```

An aon cho-mheas cunntais, MPI 50% nas àirde ann an Sgìre B — dhèanadh siostam cuimsichidh stèidhichte air bochdainn cunntais a-mhàin
rangachadh co-ionann den dà sgìre agus chaill e gu bheil feum aig Sgìre B air eadar-theachd nas doimhne.

## Ceangal ri innleadaireachd bathar-bog

- Bidh siostaman stiùireadh chùisean is dligheachd airson prògraman sòisealta gu tric a’ stòradh grunn dhe na deich comharran
  (taigheadas, frithealadh sgoile, comharran slàinte) ann an sìolaidhean fa leth; is e dòigh cunntaidh Alkire-Foster sgeama deiseil
  airson an cothlamadh gu aon sgòr dìth an àite modail sgòraidh sònraichte a thogail bhon bhun-stèidh.
- Tha an sgaradh cunntais/dian-ìre (H × A) na phatran feumail sa chumantas airson deas-bhòrd sam bith a tha ag aithris “co mheud a tha
  fo bhuaidh” ri taobh “cho dona ’s a tha e” — tha a bhith gan cur còmhla gu aon àireamh, mar a nì staitistigean sgaoilidh amh, a’ falach
  dìreach a’ chùis aig a bheil an fheum as motha air goireasan.
- Bidh deas-bhùird chomharran ann an stoidhle MPI a’ dol gu nàdarra le aithris [cosgais gach neach-buannachd](../cosgais-gach-neach-buannachd/)
  airson prògraman an aghaidh bochdainn: tha cosgais gach puing de lùghdachadh MPI na aonad dìonach airson coimeas a dhèanamh eadar
  eadar-theachdan gu math eadar-dhealaichte (tar-chuir airgid an aghaidh bun-structar slàinteachas).

## Cunnartan

- **Na deich comharran a làimhseachadh mar chuid uile-choitcheann** — tha comharran MPI cruinneil OPHI air an ròiseadh airson
  so-choimeas eadar-dhùthchail; bidh MPIan nàiseanta (tha mòran dhùthchannan, a’ gabhail a-steach grunn ann an Àisia a Deas agus
  Afraga, a’ foillseachadh an cuid fhèin) a’ atharrachadh comharran is cuideaman a rèir co-theacsa ionadail, agus chan eil an dà
  sheata dìreach so-choimeasach.
- **H a-mhàin aithris** — tha co-mheas cunntais a’ leigeil seachad dian-ìre gu tur; aithris no obraich a-mach A an-còmhnaidh ri
  thaobh, no an MPI fhèin.
- **A ghabhail gur e an aon sluagh a th’ ann am bochd a rèir MPI agus bochd a rèir teachd-a-steach** — bidh geàrr-chunntasan dùthcha
  OPHI fhèin mar as trice a’ sealltainn dìreach pàirt de choimeas eadar an dà shluagh; caillidh prògram a tha a’ cuimseachadh air
  daoine bochd a rèir teachd-a-steach a-mhàin cuibhreann mòr de dhaoine bochd iomadh-thaobhach gu riaghailteach.

## Tùsan

- Oxford Poverty and Human Development Initiative. "Multidimensional Poverty Index."
  <https://ophi.org.uk/multidimensional-poverty-index/>
- Alkire S, Foster J. "Counting and Multidimensional Poverty Measurement." Journal of Public
  Economics, 2011.
- UNDP & OPHI. "Global Multidimensional Poverty Index" (annual report).
