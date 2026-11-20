# Prìsean sgàile

Is e prìs sgàile (shadow price) luach tuairmsichte a thathar a’ cur air bathar, goireas no buaidh taobh a-muigh
aig nach eil prìs margaidh a ghabhas faicinn, no aig a bheil prìs margaidh a tha air a cur
às a chèile agus nach nochd fìor luach sòisealta. Tha measadh an riaghaltais an urra ri seata beag de
phrìsean sgàile oifigeil — carbon, ùine nach eil obair, saothair gun obair — a thèid fhoillseachadh gu meadhanach
gus am bi an aon àireamh aig gach roinn.

## Carson a tha e cudromach

Tha prìsean sgàile ann air sgàth ’s nach urrainn do [mhion-sgrùdadh cosgais is buannachd shòisealta](../mion-sgrùdadh-cosgais-is-buannachd-shòisealta/)
obrachadh às aonais luach airgid airson gach cosgais is buannachd, agus chan eil prìs mhargaidh idir aig
cuid de na rudan as cudromaiche — tònna de charbon a chaidh a leigeil ma sgaoil, uair a thìde de dh’ùine neach-siubhail,
uair a thìde de shaothair a bhiodh gun obair air dòigh eile — no tha prìs mhargaidh aca a tha a’ toirt
fiaradh air an fhìor chosgais shòisealta aca. Bidh HM Treasury agus Roinn Tèarainteachd Lùtha agus Neoni Lom
a’ foillseachadh còmhla prìs sgàile a’ charbon a thathar a’ cleachdadh air feadh measadh riaghaltas na RA
(<https://www.gov.uk/government/publications/valuing-greenhouse-gas-emissions-in-policy-appraisal>),
a tha air a thoirt a-mach chan ann à prìs margaidh carbon sam bith ach le dòigh a tha co-chòrdail ri targaid: tha luach a’ charbon
air a shuidheachadh aig a’ chosgais iomaill lùghdachaidh a tha a dhìth gus buidseatan carbon an lagha na RA a choileanadh, rud a tha
loidsig gu tur eadar-dhealaichte bho bhith a’ coimhead na tha carbon a’ reic air Sgeama Malairt Sgaoilidhean an EU no na RA.

Bidh ìre pàighidh sgàile (shadow wage rate) a’ leantainn an aon loidsig air taobh na saothrach. Chan eil fastadh
cuideigin a bhiodh gun obair air dòigh eile a’ cosg an tuarastail slàn dhan chomann-shòisealta — tha pàirt dhen tuarastal
na ghluasad bho phàighidhean tairbhe a chaidh a chall agus bho ùine shaor/ghrèim-obrach a chaidh a chall seach tarraing ùr lom
air goireasan a’ chomainn — agus mar sin suidhichidh stiùireadh Green Book prìs sgàile nas ìsle na an tuarastal margaidh
airson saothair a thèid a tharraing à cion-cosnaidh, a’ nochdadh fìor chosgais cothrom na saothrach sin (faic
[cosgais cothrom ann an cosgais phoblach](../cosgais-cothrom-ann-an-caitheamh-poblach/)) seach a prìs
mhargaidh.

## A’ mhatamataig

```
Prìs sgàile a’ charbon (structar mar eisimpleir, luachan làithreach bhon
inneal oifigeil luachan carbon BEIS/DESNZ — na cleachd figearan a chaidh à ceann-latha):
  Luach roinn malairteach: air a stiùireadh le slighean prìs cheadan ETS
  Luach roinn neo-mhalairteach (co-chòrdail ri targaid): air a shuidheachadh aig a’ chosgais
    iomaill lùghdachaidh a tha a dhìth gus buidseatan carbon an lagha a choileanadh, ag
    èirigh thar ùine mar a thèid roghainnean lùghdachaidh nas fhasa a chleachdadh suas
  Air a chur an sàs mar: £/tònna CO2e × tònnaichean a chaidh a leigeil ma sgaoil no a lùghdachadh leis an roghainn,
    air a lasachadh aig ìre lasachaidh shòisealta airson bliadhnaichean san àm ri teachd

Ìre pàighidh sgàile (SWR):
  SWR = Tuarastal margaidh − (luach ùine shaor/sgrùdaidh a chaidh a shàbhaladh
                        + luach phàighidhean tairbhe nach tèid pàigheadh tuilleadh)
  Mar as trice air a chur an cèill mar bhloigh dhen tuarastal margaidh (m.e. SWR = 0.6
    × tuarastal margaidh ann an sgìre le cion-cosnaidh àrd, a rèir stiùireadh Green Book
    Annex A air margaidhean saothrach le comas a bharrachd)
```

Is e gnàthasan poileasaidh a tha anns an dà fhigear, air an suidheachadh gu meadhanach, chan e amharc margaidh
empirigeach — is e cuspair prìs sgàile a dhol an àite margaidh a tha a dhìth no air a cur às a chèile, agus mar sin
feumaidh measadh a bhios a’ cleachdadh fear dhiubh an tùs oifigeil làithreach a ainmeachadh seach figear fhèin a
thoirt a-mach, dìreach gus am bi measadh gach roinne so-choimeasach.

## Eisimpleir obrach

**Riaghaltas nàiseanta**: tha measadh air sgeama dìon thuiltean a’ meas gun seachain e 400 tònna de sgaoilidhean CO2e
gach bliadhna (tro chleachdadh nas lugha de uidheamachd èiginn agus carbon corporaichte nas lugha bho ath-thogail a chaidh a sheachnadh)
thar beatha measaidh 30 bliadhna, an taca ri bunait “dèan an ìre as lugha”.

```
Prìs sgàile carbon mar eisimpleir: £280/tònna CO2e (bliadhna 1, ag èirigh thar
  na h-ùine measaidh a rèir clàr oifigeil luachan carbon neo-mhalairteach)
Buannachd carbon bliadhna 1 = 400 × £280 = £112,000
```

Leis gu bheil an clàr oifigeil a’ sealltainn luach a’ charbon *ag èirigh* tron ùine mheasaidh (a’ nochdadh
buidseatan carbon a’ fàs nas teinne), feumaidh an anailisiche an luach ceart airson gach bliadhna a chur an sàs
airson gach bliadhna dhen t-sruth 30 bliadhna, chan e ìre rèidh — bhiodh cleachdadh luach na ciad bhliadhna
air fad a’ cur dhìth air buannachdan nam bliadhnaichean as fhaide air adhart agus a’ toirt fiaradh air an òrdugh an taca ri dealbhaidhean
dìon thuiltean eile aig a bheil pròifilean carbon eadar-dhealaichte.

**Ùghdarras ionadail**: tha prògram taic cosnaidh comhairle airson luchd-còmhnaidh a tha gun obair o chionn fhada a’
cur 150 neach gu obraichean a’ pàigheadh £11/uair a thìde. Nan cuireadh sinn luach air seo le tuarastal slàn a’ mhargaidh,
bheireadh sinn creideas dhan phrògram de £11 × uairean air an obrachadh mar bhuannachd shòisealta, ach tha dòigh an tuarastail sgàile
ag aithneachadh nach b’ e obraichean a bha seo a chaidh a tharraing bho obraichean eile — bha fìor chosgais cothrom
na saothrach aca ìosal ron phrògram.

```
Tuarastal margaidh: £11.00/uair
Ìre pàighidh sgàile (mar eisimpleir, cion-cosnaidh ionadail àrd): 0.6 × tuarastal margaidh = £6.60/uair
Buannachd shòisealta lom a ghabhas buileachadh gach uair air obair ≈ £11.00 − £6.60 = £4.40/uair
  (an luach “a bharrachd” a thig bho bhith a’ gluasad saothair gu fìrinneach gun obair gu cinneasachadh,
   eadar-dhealaichte bhon tuarastal fhèin, a tha gu mòr na ghluasad)
```

Is e seo as coireach gum faod measaidhean air prògraman cosnaidh ann an sgìrean le cion-cosnaidh àrd luach sòisealta lom
dearbhach a shealltainn eadhon ged nach dèanadh an aon phrògram sin ann an sgìre làn-chosnaidh, far am biodh saothair
a chaidh a ghluasad dìreach air a tharraing bho obraichean eile.

## Ceangal ri innleadaireachd bathar-bog

Is ainneamh a bhios prìsean sgàile a’ suathadh gu dìreach ri lìbhrigeadh bathar-bog, ach tha iad cudromach nuair a bhios cùis-ghnìomhachais
a’ tagradh buannachd carbon no sòisealta bho atharrachadh IT — ma tha ionad-dàta a’ co-dhùnadh a’ tagradh sàbhaladh carbon, no seirbheis gun phàipear a’ tagradh
carbon clò-bhualaidh agus puist a chaidh a sheachnadh, feumaidh iad prìs sgàile oifigeil làithreach a’ charbon a chleachdadh seach
figear a chaidh a chruthachadh, agus feumaidh iad an clàr bliadhna air bliadhna a chur an sàs seach ìre rèidh, dìreach mar le
cuir-a-steach sam bith eile do mheasadh Green Book.
Faic [cosgais iomlan seilbh ann an IT riaghaltais](../cosgais-iomlan-seilbh-ann-an-it-riaghaltais/) agus
[luach tèarainteachd cibear san roinn phoblach](../luach-tèarainteachd-cibear-san-roinn-phoblach/), a dh’fheumas gu tric
prìs sgàile airson cuir-a-steach a tha doirbh airgead a chur air (cunnart briseadh-a-steach, ùine sìos) ri taobh nithean le cosgais dhìreach.

## Cunnartan

- **A’ cleachdadh figear carbon no pàighidh a tha air a dhol à ceann-latha.** Bidh an dà luach air an ath-sgrùdadh
  bho àm gu àm leis an stiùireadh meadhanach; chan fhuirich measadh a tha stèidhichte air figear a chaidh a chur an àite ri sgrùdadh Treasury.
- **A’ cur prìs sgàile carbon rèidh an sàs thar measadh iomadh deichead.** Bidh an clàr oifigeil ag
  èirigh thar ùine; ma chleachdar luach na ciad bhliadhna air fad, thèid pròifil nam buannachdan no nan cosgaisean a thoirt a-mach gu ceàrr.
- **A’ measgachadh an tuarastail sgàile le lasachadh air pàigheadh fìor an neach-obrach.** Bidh ìre pàighidh sgàile
  ag atharrachadh luachadh *a’ mheasaidh* air a’ chuir-a-steach saothrach, chan e an tuarastal a gheibh an neach-obrach
  dha-rìribh — ma thèid an dà rud a mheasgachadh, tha cunnart gun tèid pàigheadh fo ìre a’ mhargaidh a dhearbhadh gu ceàrr.
- **A’ toirt a-mach prìs sgàile fa leth an àite an fhir oifigeil a chleachdadh.** Is e gnàthasan poileasaidh a tha ann am prìsean sgàile
  gus am bi measaidhean so-choimeasach thar roinnean; bidh figear a chaidh a chruthachadh gu h-ionadail, ge math a chaidh a reusanachadh,
  a’ briseadh na so-choimeas sin.

## Tùsan

- HM Treasury / Department for Energy Security and Net Zero. "Valuing greenhouse gas emissions in
  policy appraisal." <https://www.gov.uk/government/publications/valuing-greenhouse-gas-emissions-in-policy-appraisal>
- HM Treasury. "The Green Book: appraisal and evaluation in central government," Annex A (shadow
  price of labour, non-work time values).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Little IMD, Mirrlees JA. "Project Appraisal and Planning for Developing Countries." Heinemann,
  1974 (foundational shadow-pricing methodology).
