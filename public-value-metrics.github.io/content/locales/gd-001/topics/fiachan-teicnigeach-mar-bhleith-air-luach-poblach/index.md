# Fiachan teicnigeach mar bhleith air luach poblach

Is e fiachan teicnigeach (technical debt) metafor Ward Cunningham bho 1992 airson cosgais fhillte san àm ri teachd co-dhùnaidhean còdachaidh luath san àm a chaidh: **prionnsabal** (an obair leasachaidh a tha ri phàigheadh) agus **riadh** (an slaodadh leantainneach a tha e a’ cur air lìbhrigeadh). Ann an oighreachd IT riaghaltais dhìleabach, thèid an riadh sin a phàigheadh gu dìreach à luach poblach — lìbhrigeadh slaodach air atharrachaidhean reachdail, ìrean fàilligeadh nas àirde air seirbheisean a tha an aghaidh shaoranach, agus linne bheag de dhaoine a dh’fhaodas suathadh air an t-siostam gu sàbhailte idir.

## Carson a tha e cudromach

Tha siostaman prìomh-fhrèam agus aimsir COBOL air feadh roinnean riaghaltais na RA — HMRC agus DWP am measg na feadhainn as ainmeachaidh — a’ giùlan cunnart air a sgrìobhadh sìos gu math agus a tha a’ fàs a bha
Oifis Sgrùdaidh Nàiseanta (NAO) air a chomharrachadh iomadh uair, a’ gabhail a-steach san aithisg aige *Digital Transformation in Government* (<https://www.nao.org.uk/>): ùrlaran a’ fàs sean a tha daor atharrachadh, a tha a’ fàs nas duilghe an dìon, agus an eisimeil luchd-obrach speisealta a tha a’ leigeil dheth obair nas luaithe na tha iad gan ionadachadh. Eu-coltach ri cùl-chunntas san roinn phrìobhaidich, tha am fiachan seo na laighe gu dìreach eadar saoranaich agus na còraichean reachdail aca — chan e dìreach sàrachadh innleadaireachd a th’ ann an einnsean obrachaidh tairbhe nach gabh atharrachadh gu sàbhailte, is e bacadh lìbhrigidh poileasaidh a th’ ann. Tha ath-thòiseachadh prògram IT Universal Credit ann an 2013, nuair a lorg an Oifis Sgrùdaidh Nàiseanta nach lìbhireadh an togail thùsail luach air airgead agus gum feumadh pàirt mhòr dhen so-mhaoin bathar-bog a bhith air a sgrìobhadh dheth, na eisimpleir àbhaisteach de fhiachan teicnigeach gun phrìsean a’ glacadh suas ri prògram poblach beò a tha follaiseach do mhinistearan.

## A’ mhatamataig

```
Prionnsabal SQALE = Σ thar bhriseadh riaghailt (ùine leasachaidh) × ìre chosgais leasaiche
Co-mheas fiachan teicnigeach (TDR) = cosgais leasachaidh / cosgais ath-leasachaidh × 100
                    (gràdan SonarQube: A ≤5%, B ≤10%, C ≤20%, D ≤50%)

Riadh (an àireamh a tha a’ fìreanachadh pàigheadh sìos):
  riadh/bliadhna = Δ astar lìbhrigidh × luach gach aonad astair
                + Δ ìre tachartasan aghaidh-saoranach × cosgais gach tachartais
                + prìomhachas sgilean speisealta × cunntas-cinn a tha fo bhuaidh
Cùis pàighidh sìos = PV(riadh a chaidh a sheachnadh thar na h-ùine) − cosgais leasachaidh
               (air a lasachadh aig ìre lasachaidh shòisealta an Green Book, faic
               social-discount-rate.md)
```

Tha am prionnsabal a’ dearbhadh an fhiachan; is e an riadh a tha a’ dèanamh a’ chùis tasgaidh do chomataidh chunntasan poblach.

## Eisimpleir obrach

Einnsean giullachd thagraidhean 250,000 loidhne air a sgrìobhadh ann an 4GL dìleabach. A’ cleachdadh bhun-tomhas CAST Appmarq de timcheall air $3.61 de phrionnsabal fiachan teicnigeach gach loidhne còd (≈£2.85 aig ìre iomlaid àbhaisteach):

```
Prionnsabal ≈ 250,000 × £2.85 ≈ £712,500
TDR ≈ 16% (gràd C)
```

Riadh air a thomhas: bidh an roinn a’ cumail trì cùmhnantaichean speisealta aig prìomhachas ìre-latha 40% thairis air ìrean àbhaisteach innleadair àrd-ìre air sgàth ’s gu bheil sgilean a-staigh air crìonadh — £180,000/bliadhna a bharrachd air sgioba sia neach. Bidh an siostam cuideachd ag adhbharachadh ceithir briseadh-sìos giullachd mòra/bliadhna, gach fear a’ cur co-dhùnaidhean an dàrna taobh airson timcheall air 5,000 tagraiche agus gan ath-stiùireadh dhan ionad-conaltraidh aig timcheall air £25/gairm:

```
Riadh ≈ £180,000 (prìomhachas sgilean)
       + 4 × 5,000 × £25 = £500,000 (cosgais conaltraidh air ath-stiùireadh)
       ≈ £680,000/bliadhna
```

Tha leasachadh targaichte air na modalan as miosa a’ coileanadh a’ cosg £1,200,000 agus tha e air a mhodaladh gus riadh a ghearradh 70%:

```
Lùghdachadh riadh = 0.70 × 680,000 = £476,000/bliadhna
Ùine pàighidh air ais ≈ 1,200,000 / 476,000 ≈ 2.5 bliadhna
```

Tha an targaideachadh cudromach: chan eil ath-leasachadh còd a bhios gann ga suathadh a’ ceannach dad, oir bidh riadh a’ cruinneachadh far a bheil tricead atharrachaidh agus dùmhlachd fiachan aig an stùc.

## Ceangal ri innleadaireachd bathar-bog

Am frèamadh luach poblach a bhios a’ togail cùis fiachan teicnigeach thairis air “tha an còd sean”: cuir an cèill an oighreachd dìleabach mar liosta de càite a bheil comas lìbhrigidh a chaidh a chall cruinnichte, agus ceangail e gu soilleir ri [cosgais iomlan seilbh](../cosgais-iomlan-seilbh-ann-an-it-riaghaltais/), oir is e cosgais obrachaidh a th’ anns an riadh a tha a’ buntainn ris an loidhne TCO ge bith an do dh’fhaighnich ionmhas e a-riamh. Bidh siostaman làn fhiachan cuideachd a’ giùlan nochdadh nas motha do [thèarainteachd cibear](../luach-tèarainteachd-cibear-san-roinn-phoblach/), oir tha ìre càradh agus dùmhlachd fiachan co-cheangailte — is e siostam dìleabach nach gabh càradh fiachan teicnigeach aig a bheil an riadh air a phàigheadh ann an cunnart tachartais seach not. Agus tha gach iomlaid eadar ath-leasachadh agus feart fhèin na cho-dhùnadh [cosgais dàil](../cosgais-dàil-ann-am-prògraman-poblach/): bidh pàigheadh sìos fiachan a’ cur dàil air an ath atharrachadh reachdail, aig a bheil CoD fhèin a dh’fheumar a thomhas an aghaidh an riadh a chaidh a shàbhaladh.

## Cunnartan

- **Aithris prionnsabail a-mhàin**: chan eil tuairmse ath-leasachaidh mhòr eagalach gun fhigear riadh a’ fìreanachadh dad do neach-aontachaidh chosgaisean.
- **Figearan fiachan a chaidh a thoirt a-mach le inneal air a ghabhail gu litireil**: bidh sganaichean ann an stoidhle SQALE a’ cunntadh bhriseadh riaghailt; bidh iad a’ call an seòrsa fiachan daor — co-dhùnaidhean ailtireachd agus riaghailtean gnìomhachais dìleabach gun sgrìobhadh — fhad ’s a tha iad a’ comharrachadh nithean beaga.
- **“Seachnaidh an ath-sgrìobhadh a h-uile càil”**: feumaidh prògraman ionadachaidh an aon smachd a choileanadh ri cùis-ghnìomhachais sam bith eile — cosgais an t-suidheachaidh eile, coltachd soirbheachais, agus lasachadh — chan e saoradh bhuaithe, mar a sheall ath-thòiseachadh Universal Credit 2013.
- **Utopianachd fiachan neoni**: chan e neoni an ìre fiachan as fheàrr; tha fiachan na luamhan a cheannaich lìbhrigeadh nas tràithe. Is e an ìre riadh an cheist bheò an-còmhnaidh, chan e a bheil fiachan ann idir.

## Tùsan

- Cunningham W, "The WyCash Portfolio Management System", OOPSLA experience report, 1992.
- CAST, technical debt estimation (Appmarq benchmark). <https://www.castsoftware.com/glossary/technical-debt-estimation>
- National Audit Office, *Digital Transformation in Government* and reports on Universal Credit. <https://www.nao.org.uk/>
