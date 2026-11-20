# Cuideam sgaoilidh

Bidh cuideam sgaoilidh ag atharrachadh luach airgid cosgais no buannachd a-rèir cò a gheibh e, a-rèir prionnsapal gu bheil punnd a bharrachd luach nas motha do dhachaigh bhochd na do dhachaigh bheairteach. Tha Green Book aig HM Treasury a’ toirt seachad dòigh shoilleir airson a’ chuideim seo a chur an sàs, stèidhichte air feum iomallach teachd-a-steach a tha a’ lùghdachadh, gus nach làimhsich measaidhean gu sàmhach punnd a chaidh a chosnadh leis an deicheamh as beairtiche mar fhad ri punnd leis an deicheamh as bochda.

## Carson a tha e cudromach

Bidh anailis cosgais-buannachd àbhaisteach a’ cur suas puinnd gun faighneachd cò leis a tha iad, a’ gabhail ris gu bheil punnd a cheart cho luachmhor dha a h-uile duine — barail a tha eaconamairean air a bhith eòlach o chionn fhada a tha ceàrr. Bidh dachaigh a tha a’ cosnadh £15,000/bliadhna a’ faighinn buannachd £1,000 gu tur eadar-dhealaichte bho dhachaigh a tha a’ cosnadh £150,000/bliadhna, oir tha buannachd iomallach teachd-a-steach a’ tuiteam mar a dh’èireas teachd-a-steach. Gun chuideam, bidh measadh àbhaisteach gu riaghailteach a’ fàbharachadh eadar-theachdan a bhuannaicheas buidhnean nas beairtiche, a tha dhaibh fhèin nas fheàrr dheth, oir tha an cumhachd cosg nas àirde aca a’ sèideadh luachadh airgid nam buannachdan a ruigeas iad (tha ùrachadh pàirce faisg air taigheadas daor “a’ sealltainn” buannachd luach-seilbhe nas motha na an aon ùrachadh faisg air taigheadas saor, dìreach air sgàth gu bheil prìsean nas àirde, chan ann air sgàth gu bheil am buannachd sunnd nas motha).

Tha stiùireadh leasachail a’ Green Book mu anailis sgaoilidh, a chaidh a dhaingneachadh às dèidh lèirmheas Treasury 2020 a fhreagair casaid gun robh dòigh-obrach measaidh gu riaghailteach a’ fàbharachadh Lunnainn agus ear-dheas Shasainn, a’ cur a-mach dòigh cuideim fhoirmeil stèidhichte air elasticity feum iomallach teachd-a-steach de timcheall air 1.3 — a’ ciallachadh gu bheil dùblachadh teachd-a-steach a’ gearradh luach iomallach punnd a bharrachd gu leth gu garbh (gu sònraichte, 2^-1.3 ≈ 0.41 uair). Chan e atharrachadh cruinneachaidh a tha seo: faodaidh a chur an sàs atharrachadh dè an dà phrògram a tha a’ sealltainn luach làithreach lom nas àirde, gu sònraichte nuair a thèid eadar-theachd a tha cruinn ann an sgìre bhochd a choimeas ri fear sgaoilte tarsainn air an t-sluagh san fharsaingeachd.

## A’ mhatamataig

Cuideam sgaoilidh a’ Green Book airson punnd de bhuannachd a’ tighinn gu dachaigh aig ìre teachd-a-steach y, an coimeas ri punnd aig ìre teachd-a-steach cuibheasach nàiseanta ȳ:

```
Cuideam(y) = (ȳ / y)^e

far a bheil:
  y  = teachd-a-steach dachaigh (no teachd-a-steach na buidhne air a bheil buaidh)
  ȳ  = teachd-a-steach cuibheasach (iomradh) dachaigh
  e  = elasticity feum iomallach teachd-a-steach (Green Book: timcheall air 1.3)
```

A’ cur cuideaman air buannachdan lom:

```
Buannachd le cuideam = Σ [buannachd gun chuideam do bhuidheann i × Cuideam(y_i)]
```

Gheibh buidheann a tha a’ cosnadh leth den chuibheasachd nàiseanta (y = 0.5ȳ) cuideam de (1/0.5)^1.3 = 2^1.3 ≈ 2.46 — tha gach punnd de bhuannachd dhan bhuidheann sin a’ cunntadh mar timcheall air 2.46 uair punnd do dhachaigh aig teachd-a-steach cuibheasach.

## Eisimpleir obrach

**Dà phrògram ionadail a tha a’ farpais**, gach fear le buannachd lom gun chuideam de £2 mhillean/bliadhna, a’ farpais airson an aon mhaoin fàis roinneil:

- *Prògram A*: sgeama taic ghnìomhachais ann am baile soirbheachail, teachd-a-steach cuibheasach dachaigh £45,000 (timcheall air 1.3× a’ chuibheasachd nàiseanta a thathar a’ gabhail ris de £35,000).
- *Prògram B*: prògram sgilean ann an uàrd bochd, teachd-a-steach cuibheasach dachaigh £18,000 (timcheall air 0.51× a’ chuibheasachd nàiseanta).

```
Cuideam(A) = (35,000 / 45,000)^1.3 = (0.778)^1.3 ≈ 0.72
Cuideam(B) = (35,000 / 18,000)^1.3 = (1.944)^1.3 ≈ 2.53

Buannachd le cuideam A = £2,000,000 × 0.72 = £1.44 millean
Buannachd le cuideam B = £2,000,000 × 2.53 = £5.06 millean
```

Gun chuideam, tha an dà phrògram co-ionann. Le cuideam airson buaidh sgaoilidh, tha buannachd Prògram B còrr is trì tursan nas motha — toradh a thionndaidheas moladh a’ mhaoineachaidh agus a tha a’ nochdadh amas soilleir a’ Green Book ann an iarraidh gun tèid an cuideam a shealltainn, chan e dìreach co-mheas buannachd-cosgais gun chuideam.

**Riarachadh thabhartasan carthannais**: bu chòir do neach-maoineachaidh a bhios a’ coimeas tabhartas £500,000 a ruigeas 1,000 dachaigh le teachd-a-steach ìosal (cuideam ≈ 2.0, luach le cuideam co-ionann ri £1 mhillean) ris an aon £500,000 a ruigeas 1,000 dachaigh le teachd-a-steach meadhanach (cuideam ≈ 1.0, luach le cuideam co-ionann ri £500,000) an cùis sgaoilidh a shealltainn gu soilleir anns a’ phàipear bùird, chan fhàgail e ri bhith air a thuigsinn.

## Ceangal ri innleadaireachd bathar-bog

Is ainneamh a nochdas cuideam sgaoilidh gu dìreach ann am meatrach libhrigidh bathar-bog, ach bu chòir dha cumadh a thoirt air mar a dhealbhas sgiobaidhean innleadaireachd agus dàta tomhas agus targaideachadh:

- Nuair a thogas tu deas-bhòrd buaidh no àireamhair bhuannachdan, nochd pròifil teachd-a-steach no easbhaidh an fheadhainn air a bheil buaidh, chan e dìreach iomlan buannachd cruinnichte — bidh figearan cruinnichte gun bhriseadh sgaoilidh a’ falach dìreach an tionndadh a chaidh a shealltainn gu h-àrd.
- Ceangail loidsig targaideachaidh ann an dealbhadh seirbheis ris an aon dàta easbhaidh a bhios an Green Book a’ cleachdadh — faic [Clàr-amais Easbhaidh Iomadach](../clàr-amais-easbhaidh-iomadach/) — gus an gabh ruigsinneachd seirbheis didseatach a mheasadh a thaobh co-ionannachd, chan e dìreach èifeachdas (an ceathramh E connspaideach ann an [luach airson airgead](../luach-air-airgead/)).
- Nuair a bhios algairim a’ riarachadh goireas gann (àiteachan cinn-latha, ùine neach-cùise, subsaideach), bidh amas “as motha buannachd iomlan” gun chuideam, a-rèir dealbhaidh, a’ gintinn an aon claonadh a tha cuideam a’ Green Book ann gus a cheartachadh — comharraich seo gu soilleir dha luchd-seilbh poileasaidh mus dèan thu optimeachadh.

## Cunnartan

- **A’ cur cuideaman sgaoilidh an sàs gu neo-chunbhalach thairis air pasgan.** Ma chuireas tu cuideam air buannachdan aon phrògraim ach chan ann air fear coimeis, bheir sin coimeas claon, chan e nas cothromaiche; tha an Green Book ag iarraidh làimhseachadh co-ionann.
- **A’ cleachdadh luachan seilbhe no margaidh mar iomradh air sunnd gun atharrachadh.** Tha prìsean margaidh fhèin air am mìobhadh le neo-ionannachd teachd-a-steach a tha ann mar-thà, an dearbh rud a tha cuideam sgaoilidh an dùil a cheartachadh — faodaidh luachan margaidh gun atharrachadh an claonadh a dhùblachadh.
- **A’ dèanamh dìmeas air caochlaidhean taobh a-staigh buidhne.** Faodaidh cuideam a-rèir teachd-a-steach cuibheasach sgìre (m.e. deicheamh den Chlàr-amais Easbhaidh Iomadach) daoine fa leth a thoirt a-mach ceàrr nach eil a’ freagairt air cuibheasachd an sgìre; cleachd an dàta teachd-a-steach as mionaidiche a tha reusanta ri fhaighinn.
- **A’ làimhseachadh elasticity 1.3 mar chunbhalach uile-choitcheann.** Tha an Green Book fhèin a’ toirt fa-near gur e tuairmse le raon so-chreidsinneach a tha seo; dèan deuchainn mothachaidh air prìomh cho-dhùnaidhean an aghaidh elasticity eile seach 1.3 a làimhseachadh mar fhear cruinn.

## Tùsan

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation", and
  supplementary guidance on distributional impacts (2022 edition).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury, "Green Book Review 2020: Findings and Response" (addressing regional-bias criticism).
  <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>
- Fujiwara D, Campbell R. "Valuation Techniques for Social Cost-Benefit Analysis." HM Treasury/DWP,
  2011 (background on marginal utility of income elasticity estimates).
