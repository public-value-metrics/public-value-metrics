# Dòighean measaidh buaidh

Is e dòighean measaidh buaidh na dealbhaidhean staitistigeil is deuchainneach a thathar a’ cleachdadh gus tuairmse a dhèanamh air na dh’adhbhraich poileasaidh no prògram dha-rìribh, an taca ris na bhiodh air tachairt co-dhiù — deuchainnean smachdaichte air thuaiream (RCTan), eadar-dhealachadh-ann-an-eadar-dhealachaidhean, maidseadh sgòir leanmhainneachd, agus dealbhadh neo-leanailteachd ais-tharraing na ceithir as cumanta a thathar a’ cleachdadh ann am poileasaidh poblach na RA. Tha iad ann oir chan urrainnear a’ mhòr-chuid de dh’eadar-theachdan riaghaltais a dhèanamh deuchainn ann an deuchainn-lann: chan urrainn dhut thaghadh air thuaiream dè am baile a gheibh slighe bus ùr san dòigh a ghabhas thu taghadh air thuaiream dè an t-euslainteach a gheibh druga, agus mar sin bidh na dòighean seo a’ gabhail an aon loidsig adhbharail gun a bhith an-còmhnaidh ag iarraidh sònrachadh air thuaiream.

## Carson a tha e cudromach

Is e Magenta Book HM Treasury, Annex A air dòighean cuasi-deuchainneach, an stiùireadh canonach aig riaghaltas na RA airson taghadh eadar na dealbhaidhean seo, agus bidh buidhnean leithid an Education Endowment Foundation agus What Works Centre for Local Economic Growth a’ cur an sàs rangachd fianais air an togail timcheall orra — RCTan far a bheil sònrachadh air thuaiream comasach agus beusach, dealbhaidhean cuasi-deuchainneach far nach eil. Chan e smuain às dèidh làimhe teicnigeach a th’ ann an taghadh na dòigh: bidh e a’ co-dhùnadh am faod measadh “an do dh’adhbhraich am prògram seo?” a fhreagairt no a-mhàin “an do thachair seo às dèidh don phrògram tòiseachadh?”, agus is e sin an aon cheist a tha [anailis an t-suidheachaidh eile](../anailis-an-t-suidheachaidh-eile/) air a thogail gus an toirt air luchd-cleachdaidh faighneachd mus tèid measadh a choimiseanadh.

## A’ mhatamataig

```
RCT:
  Buaidh = cuibheas(buil | buidheann làimhsidh) − cuibheas(buil | buidheann smachd)
  (dligheach oir tha sònrachadh gu làimhseachadh air thuaiream)

Eadar-dhealachadh-ann-an-eadar-dhealachaidhean (DiD):
  Buaidh = [buil_às_dèidh(làimhsichte) − buil_roimhe(làimhsichte)]
         − [buil_às_dèidh(smachd) − buil_roimhe(smachd)]
  (feumaidh barail “leantainnean co-shìnte”: bhiodh làimhsichte agus smachd air gluasad còmhla
   às aonais an eadar-theachd)

Maidseadh sgòir leanmhainneachd (PSM):
  1. Tuairmsich P(làimhseachadh = 1 | co-chaochlaidhean X) airson gach aonad → sgòr leanmhainneachd
  2. Maidsich aonadan làimhsichte ri aonadan gun làimhseachadh le sgòran leanmhainneachd coltach
  3. Buaidh = cuibheas(buil | làimhsichte) − cuibheas(buil | smachd maidsichte)

Dealbhadh neo-leanailteachd ais-tharraing (RDD):
  Buaidh = leum anns a’ bhuil a chaidh fhaicinn aig stairsneach na h-airidheachd,
           a’ coimeas aonadan dìreach os cionn an aghaidh dìreach fo bhonn na crìche
```

## Eisimpleir obrach

**Ùghdarras ionadail (eadar-dhealachadh-ann-an-eadar-dhealachaidhean airson prògram theaghlaichean le trioblaid)**: is e a’ bhuil frithealadh sgoile. Bidh an sgìre làimhsichte a’ gluasad bho 84% gu 89% de fhrithealadh (+5 puingean sa cheud) rè ùine a’ phrògraim; bidh sgìre so-choimeasach gun làimhseachadh a’ gluasad bho 85% gu 87% (+2 phuing sa cheud) san aon ùine. Tuairmse buaidh DiD: 5 − 2 = +3 puingean sa cheud a ghabhas buileachadh air a’ phrògram. Air a chur an sàs air buidheann de 2,000 sgoilear san sgìre làimhsichte, tha seo co-chòrdail ri timcheall air 60 sgoilear a bharrachd (3% × 2,000) a’ ruighinn na roinn-seòrsa frithealaidh as àirde, tuairmse a bu chòir a bhith air aithris le a rabhadh leantainnean co-shìnte, chan ann mar chunntadh-cheann pongail.

**Carthannas (maidseadh sgòir leanmhainneachd airson carthannas so-fhastaidheachd)**: tha 300 com-pàirtiche prògraim air am maidseadh ri 300 neach bho stòr-dàta rianachd nas motha a’ cleachdadh sgòran leanmhainneachd air an togail à aois, eachdraidh cosnaidh roimhe, agus ìre theisteanasan. Ìre cosnaidh dà mhìos dheug: buidheann làimhsichte maidsichte 46%, buidheann coimeis maidsichte 33%. Tuairmse buaidh PSM: 46% − 33% = +13 puingean sa cheud a ghabhas buileachadh air a’ phrògram, fo chumhachd nach eil co-mheasgachadh neo-fhaicsinneach (leithid brosnachadh) a’ draibheadh an dà chuid com-pàirteachas agus builean.

## Ceangal ri innleadaireachd bathar-bog

Tha cho comasach is a bhios gin dhe na dealbhaidhean sin nas fhaide air adhart an crochadh gu mòr air co-dhùnaidhean innleadaireachd dàta a chaidh a dhèanamh tràth. Feumaidh RDD caochladair ruith a chaidh a chlàradh gu ceart agus stairsneach airidheachd fìor ghlan; feumaidh DiD dàta pannail so-choimeasach thar ùine airson sgìrean làimhsichte agus coimeis, a tha a’ ciallachadh co-cheanglaichean cunbhalach thar shiostaman is bhliadhnaichean; feumaidh PSM dàta co-chaochlaidh bunaiteach saidhbhir a chaidh a ghlacadh ro làimhseachadh, chan e air ath-thogail às dèidh làimhe. Is e modail dàta a chaidh a dhealbhadh ri taobh [teòiridh atharrachaidh](../teòiridh-atharrachaidh/) agus [modail loidsigeach](../modail-loidsig-airson-prògraman/) bhon thoiseach — a’ glacadh co-chaochlaidhean bunaiteach, cinn-latha, agus clàran airidh air buidheann coimeis — a nì measadh buaidh cruaidh comasach nas fhaide air adhart, an àite ruith dhaor às dèidh làimhe. Faic [measadh buaidh an aghaidh measadh pròiseis](../measadh-buaidh-an-aghaidh-measadh-pròiseis/) airson a’ cheist leasachail nach freagair na dòighean seo leotha fhèin.

## Cunnartan

- **A’ cur RCT an sàs far nach eil e comasach no beusach**, no air an làimh eile gun a bhith a’ beachdachadh a-riamh air dealbhadh cuasi-deuchainneach nuair a bha fìor chothrom air a shon — stairsneach poileasaidh, sgaoileadh ann an ìrean — ri fhaighinn agus gun a chleachdadh.
- **A’ dèanamh dìmeas air barail nan leantainnean co-shìnte ann an DiD.** Ma bha an sgìre choimeis a’ dealachadh bhon sgìre làimhsichte mar-thà ron eadar-theachd, tha an coimeas dà-phuing truaillte; dèan sgrùdadh air ro-leantainnean, chan e dìreach roimhe/às dèidh.
- **A’ maidseadh a-mhàin air co-chaochlaidhean air am faicinn ann am PSM.** Faodaidh taghadh neo-fhaicsinneach, leithid brosnachadh com-pàirtichean, an tuairmse a chlaonadh eadhon nuair a tha co-chaochlaidhean air am faicinn math air an cothromachadh.
- **Làimhseachadh caochladair ruith ann an RDD.** Ma dh’fhaodas daoine buaidh a thoirt air an sgòr aca gus tuiteam dìreach a-steach do stairsneach airidheachd, chan eil an neo-leanailteachd tuilleadh a’ sgaradh buaidh adhbharail.

## Tùsan

- HM Treasury, Magenta Book (2020), Annex A: Quasi-Experimental Methods. <https://www.gov.uk/government/publications/the-magenta-book>
- What Works Centre for Local Economic Growth, evidence review methodology. <https://whatworksgrowth.org/>
- Education Endowment Foundation, evaluation guidance. <https://educationendowmentfoundation.org.uk/>
