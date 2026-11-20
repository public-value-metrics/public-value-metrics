# Meatrach DORA airson luach poblach

’S e meatrach DORA (DevOps Research and Assessment) — tricead cur-an-sàs, ùine-stiùiridh airson atharrachaidhean, ìre fàilligidh atharrachaidh, agus ùine airson an t-seirbheis a thoirt air ais, agus earbsachd mar chòigeamh — na slatan-tomhais coileanaidh libhrigidh as deimhnichte ann an gnìomhachas a’ bhathar-bog. Nuair a thèid an tionndadh gu cumhachan cunntachalachd na roinne poblaich, tha gach fear dhiubh na iomradh dìreach air cho luath, agus cho sàbhailte, ’s a ruigeas luach poblach saoranach.

## Carson a tha e cudromach

Bidh rannsachadh deich bliadhna DORA, air fhoillseachadh gach bliadhna mar an *Accelerate State of DevOps Report* (modh-obrach Forsgren, Humble agus Kim, a-nis air a ruith le Google Cloud), a’ cruinneachadh sgiobaidhean gu luchd-coileanaidh elite, àrd, meadhanach agus ìosal. Bidh sgiobaidhean elite a’ cur an sàs air iarrtas, a’ gabhail nas lugha na latha bho commit gu cinneasachadh, a’ fàiligeadh timcheall air 5% de dh’atharrachaidhean, agus a’ faighinn seachad air ann an nas lugha na uair a thìde; bidh luchd-coileanaidh ìosal a’ cur an sàs gach mìos no nas ainmeile, a’ gabhail mhìosan, a’ fàiligeadh timcheall air 40% de dh’atharrachaidhean, agus a’ faighinn seachad air ann an seachdainean. Anns an riaghaltas chan e meatrach dìomhanais innleadaireachd a tha seo: tha Service Standard na Government Digital Service ag iarraidh air sgiobaidhean “iterate agus leasaich gu tric” agus a bhith comasach air freagairt gu luath do dh’fheum luchd-cleachdaidh, agus tha roinnean nach urrainn a bhith a’ cur an sàs gu sàbhailte agus gu tric neo-chomasach gu structarail air coinneachadh ris an inbhe sin, ge bith dè tha an rannsachadh luchd-cleachdaidh aca ag ràdh. Lorg obair èifeachdais didseatach fhèin Oifis a’ Chaibineit gu bheil e daor saoranach a phutadh bho ghnìomhachas didseatach a dh’fhàillig no a bha slaodach gu seanail fòn no pàipeir — bha tuairmse Aithisg Èifeachdais Didseatach 2012 aig GDS gun robh cuid de ghnìomhachasan didseatach a’ cosg cho beag ri 20p an aghaidh dàimhean fòn no aghaidh-ri-aghaidh a’ cosg suas gu £8.62 — agus mar sin chan e a-mhàin ùine innleadaireachd a chosgas fàilligeadh atharrachaidh ann an seirbheis a tha a’ coimhead a-mach chun a’ phobaill, tha e a’ putadh fìor phuinnd air buidseit ionad-cheangail (faic [sàbhalaidhean gluasad seanail](../sàbhaladh-gluasad-seanail/)).

## A’ mhatamataig

```
Tricead cur-an-sàs    = cur-an-sàs cinneasachaidh / ùine
Ùine-stiùiridh atharrachaidhean = t(cur-an-sàs) − t(commit), cuibheasach
Ìre fàilligidh atharrachaidh   = atharrachaidhean a dh’fhàillig / iomlan atharrachaidhean × 100
Ùine airson ath-ghabhail (MTTR) = t(air a thoirt air ais) − t(fàilligeadh), cuibheasach
Earbsachd              = coileanadh SLO (so-ruigsinneachd, màirnealachd, ceartas)
```

Tionndaidhean luach poblach:

```
Ùine-stiùiridh → seachdainean sa phìob × CoD, faic cost-of-delay-in-public-programmes
Ìre fàilligidh → ìre thachartasan a tha a’ coimhead a-mach chun a’ phobaill: CFR × cosgais gach
                 gairm ionad-cheangail air a h-ath-stiùireadh (no gach gnìomhachas reachdail a dh’fhàillig)
Ùine ath-ghabhail → cron briseadh seirbheis: MTTR × (tagraidhean/iarrtasan air an casg
                 gach uair a thìde) × cosgais shìos-sruth no call sunnd gach aonad
Earbsachd      → lasachadh buannachd: seirbheis aig 99% so-ruigsinneachd a’ libhrigeadh
                 ≈ 0.99 den bhuannachd mhodaladh aice — an co-ionann libhrigidh de
                 bheàrn gabhail-a-steach no co-chòrdalachd
```

## Eisimpleir obrach

Sgioba portail thagraidhean bhuannachdan ùghdarrais ionadail, ro agus às dèidh tasgadh innleadaireachd libhrigidh:

```
                    Roimhe      Às dèidh
Cur-an-sàs          gach mìos   gach seachdain
Ùine-stiùiridh      8 seachdainean  5 làithean
CFR                 30%         10%
MTTR                3 latha     4 uairean
```

Bidh an sgioba a’ cur a-mach timcheall air 25 leasachadh/bliadhna, luach cuibheasach £8,000/seachdain ([cosgais dàil](../cosgais-dàil-ann-am-prògraman-poblach/)). Le bhith a’ gearradh ùine-stiùiridh le timcheall air 7.3 seachdainean bidh sruth buannachd gach leasachaidh air a tharraing air adhart: 25 × 7.3 × 8,000 ≈ **£1,460,000/bliadhna** de luach a chaidh a libhrigeadh na bu tràithe. Air ìre fàilligidh: 25 × (0.30 − 0.10) = 5 atharrachaidhean a dh’fhàillig nas lugha/bliadhna; bidh gach atharrachadh a dh’fhàillig air portail phoblach mar as trice a’ cur timcheall air 2,000 saoranach gu seanail fòn aig £8.62 an aghaidh 20p, cosgais lom de timcheall air £8.42 × 2,000 ≈ £16,840 gach tachartas, agus mar sin bidh a bhith a’ seachnadh 5 tachartasan a’ sàbhaladh ≈ **£84,200/bliadhna**. Tha an tasgadh innleadaireachd libhrigidh air a luachadh san aon airgead ri cùis luach poblach sam bith eile.

## Eisimpleir obrach air a leantainn: earbsachd

Ma ruitheas am portail aig 97% so-ruigsinneachd seach targaid 99.5%, agus ma tha gach puing sa cheud de ùine-sìos air a mhodaladh mar 2% de thagraidhean air chall tro thrèigsinn, tha an t-seirbheis a’ libhrigeadh timcheall air 0.975 den bhuannachd £2M/bliadhna a chaidh a mhodaladh — lasachadh buannachd £50,000/bliadhna nach nochd deas-bhòrd ùine-suas a-chaoidh.

## Ceangal ri innleadaireachd bathar-bog

Tha meatrach DORA nan meatrach obrachaidh seirbheis phoblaich ann an èideadh eile: bidh ùine-stiùiridh a’ mapadh gu [inbhean sheirbheisean agus meatrach ghnìomhachasan](../àbhaistean-seirbheis-agus-meatairean-ghnothaichean/); bidh ìre fàilligidh atharrachaidh a’ mapadh gu ìrean ath-obrach is gearain; bidh MTTR a’ mapadh gu cia fhad ’s nach eil seirbheis reachdail ri fhaighinn do luchd-tagraidh. Bidh dòighean leasachaidh a’ gluasad an dà chuid air an rathad, oir tha an dà chuid nan siostaman ciudha fo chuingealachaidhean cunntachalachd — faic [meatrach sruthadh ann an libhrigeadh an riaghaltais](../meatrach-sruthadh-ann-an-libhrigeadh-an-riaghaltais/) airson a’ mhatamataig ciudha bhunaiteach. Thoir fa-near cuideachd lorg DORA 2025 gu bheil gabhail AI a’ co-chur ri tron-chur nas àirde ach seasmhachd *nas miosa* — eadar-theachd le èifeachd agus buaidhean taobh, agus is e sin dìreach an anailis buannachd lom a bhios a’ chuspair [cinneasachd AI](../cinneasachd-ai-san-roinn-phoblach/) sa bhuidheann seo ag obair troimhe.

## Cunnartan

- **Cluich air meatrach**: cur-an-sàs a sheudadh le sgaoilidhean gun obair, no a’ fàgail càraidhean èiginneach a-mach às a’ chunntadh fàilligidh atharrachaidh. Mìnich tachartasan cho pongail ’s a mhìnicheas inbhe seirbheis reachdail a’ mìneachadh “gnìomhachas soirbheachail”.
- **Clàran lìog eadar roinnean**: bidh cruinneachaidhean DORA a’ coimeas cleachdaidhean libhrigidh, chan e seirbheisean le pròifilean cunnairt eadar-dhealaichte; faodaidh siostam pàighidh chìsean le rangachadh “àrd” a bhith na dhreuchd cheart far am biodh “elite” gun chùram, a thaobh riatanasan dearbhaidh.
- **A’ leasachadh aon mheatraich a-mhàin**: tha luaths gun ìre fàilligidh atharrachaidh na iomlaid clasaigeach tron-chur-mì-sheasmhachd — aithris na ceithir còmhla, chan e mar aon sgòr.

## Tùsan

- DORA research and the annual *Accelerate State of DevOps Report*. <https://dora.dev/>
- Forsgren N, Humble J, Kim G, *Accelerate: The Science of Lean Software and DevOps*, IT Revolution Press, 2018.
- Cabinet Office, Digital Efficiency Report, 2012.
- DORA, 2025 State of AI-assisted Software Development report. <https://dora.dev/dora-report-2025/>
