# Meatrach sruthadh ann an libhrigeadh an riaghaltais

Bidh meatrach sruthadh — Lagh Little, crìochan obrach-ann-an-adhartas (WIP), agus èifeachdas sruthaidh — a’ toirt cunntas air cho luath is a ghluaiseas obair tro shiostam le comas cuingealaichte. Tha bòrd sprint na shiostam mar sin; tha ciudha tagraidhean buannachdan, clàr thagraidhean dealbhaidh, no cùl-stòras obair-chùise bhìosa dìreach an aon mhatamataig ann an èideadh eadar-dhealaichte.

## Carson a tha e cudromach

Tha obair-chùise an riaghaltais nan siostaman ciudha, agus bidh siostaman ciudha a’ cumail ri laghan ciudha ge bith a bheil duine gan tomhas. Bidh ùine cho-dhùnaidh reachdail a’ dèanamh seo follaiseach: fo rèim Town and Country Planning, tha targaid co-dhùnaidh reachdail 8 seachdainean aig a’ mhòr-chuid de thagraidhean dealbhaidh beaga agus 13 seachdainean aig tagraidhean mòra — geallaidh ùine-cuairt air a chur dìreach a-steach don lagh. Tha cùl-stòras obair-chùise tèarmainn an Home Office, a chaidh a sgrùdadh iomadh uair le National Audit Office agus Home Affairs Select Committee, na chùis air a deagh chlàradh de shiostam poblach far an do dh’fhàs obair-ann-an-adhartas nas luaithe na tron-chur airson ùine mhaireannach, a’ putadh ùine-cuairt fada seachad air dùil reachdail no seirbheis sam bith. Bheir meatrach sruthadh dha innleadairean agus manaidsearan obair-chùise còmhla briathrachas co-roinnte, cuantach airson an dòigh fàilligidh seo, seach a leigeil mar “dhuilgheadas cùl-stòrais” càileachdail.

## A’ mhatamataig

```
Lagh Little:  WIP = Tron-chur × Ùine-cuairt
          →   Ùine-cuairt = WIP / Tron-chur

Èifeachdas sruthaidh = ùine ghnìomhach (suathaidh) / ùine-cuairt iomlan   (Vacanti)

Buaidh crìoch WIP: airson tron-chur stèidhichte, bidh leth-lùghdachadh WIP
a’ lùghdachadh na h-ùine-cuairt chuibheasach gu leth gu garbh (Lagh Little
air ath-rèiteachadh) — an giùlan a tha rim faighinn gun luchd-obrach a bharrachd a chur ris.
```

Faic [meatrach DORA airson luach poblach](../meatrach-dora-airson-luach-poblach/) airson an aon mhatamataig air a chur an sàs ann am pìoban cur-an-sàs bathar-bog seach obair-chùise.

## Eisimpleir obrach

**Roinn dealbhaidh ùghdarrais ionadail**: 400 tagradh fosgailte aig àm sam bith (WIP), tha an sgioba a’ fuasgladh 50 tagradh/seachdain (tron-chur).

```
Ùine-cuairt = WIP / Tron-chur = 400 / 50 = 8 seachdainean
```

Tha sin a’ tuiteam dìreach aig targaid reachdail 8 seachdainean airson tagraidhean beaga — gun slaic, a’ ciallachadh gum bi caochlaidheachd sam bith ann am iarrtas a’ tighinn a-steach no ann an ùine freagairt luchd-co-chomhairle a’ putadh cho-dhùnaidhean seachad air a’ cheann-ama laghail.

**Èifeachdas sruthaidh**: de na 8 seachdainean sin (56 latha-cailean), tha timcheall air 6 uairean de fhìor ùine obrachaidh neach-cùise aig tagradh mar as trice.

```
Èifeachdas sruthaidh = 6 uairean / (56 latha × 8 uairean obrach/latha)
                     = 6 / 448 ≈ 1.3%
```

Tha slat-tomhais Vacanti airson sgiobaidhean bathar-bog a’ cur èifeachdas sruthaidh àbhaisteach aig 15–20%; bidh obair-chùise an riaghaltais, le mòran lìbhrigidhean thairis do luchd-co-chomhairle reachdail agus uinneagan co-chomhairleachaidh poblach, gu tric a’ ruith òrdugh meud nas ìsle. Is ann anns an 98.7% de ùine “feitheimh” a thèid na h-ochd seachdainean gu dearbh — chan ann ann an comas luchd-cùise.

**Eadar-theachd crìoch WIP**: a’ cuingealachadh tagraidhean fosgailte gach neach-cùise gu 15 an àite 25 gun chrìoch (a’ cumail tron-chur seasmhach) a’ gluasad WIP bho 400 gu timcheall air 240 thar sgioba de 16 neach:

```
Ùine-cuairt ùr = 240 / 50 = 4.8 seachdainean
```

Dlùth air leth-lùghdachadh ùine-cuairt bho atharrachadh poileasaidh, chan e àrdachadh luchd-obrach — an aon ghiùlan a bhios sgiobaidhean libhrigidh stoidhle DORA a’ tarraing nuair a chuireas iad crìoch air WIP sprint.

## Ceangal ri innleadaireachd bathar-bog

’S e meatrach sruthaidh an cànan co-roinnte eadar bòrd Kanban sgioba libhrigidh agus ùrlar na h-obair-chùise dhan a bheil i a’ togail bathar-bog: tha ciudha neach-cùise agus ciudha pull-request le chèile fo smachd Lagh Little, agus bidh iad le chèile a’ call an targaidean ùine-cuairt san aon dòigh — cus WIP an coimeas ris an tron-chur. Tha seo cudromach gu dìreach airson [cosgais dàil ann am prògraman poblach](../cosgais-dàil-ann-am-prògraman-poblach/): is e ùine-cuairt × CoD na puinnd a tha na suidhe sa chiudha aig àm sam bith, agus tha e cudromach airson [inbhean sheirbheisean agus meatrach ghnìomhachasan](../àbhaistean-seirbheis-agus-meatairean-ghnothaichean/), far a bheil targaid tionndaidh foillsichte na gheallaidh ùine-cuairt nach urrainn ach meatrach sruthaidh a dhearbhadh nuair a thèid a chall. Bu chòir do bhathar-bog siostam obair-chùise WIP agus ùine-cuairt a nochdadh mar mheatrach obrachaidh prìomh-ìre, chan e an adhlacadh am broinn siostam riaghlaidh chùisean nach bi duine a’ ceasnachadh.

## Cunnartan

- **A’ cur crìochan WIP an sàs gun a bhith a’ càradh an fhìor chnap-starra**: ma tha an cuingeachadh na ùine freagairt neach-co-chomhairle reachdail taobh a-muigh, cha dèan crìoch WIP neach-cùise ach an ciudha a ghluasad suas-sruth seach a lùghdachadh.
- **A’ làimhseachadh èifeachdas sruthaidh mar targaid ri chluich**: chan eil cabhag leis an 1.3% de ùine ghnìomhach a’ gluasad ùine-cuairt mòran; tha an cumhachd cha mhòr an-còmhnaidh anns na stàitean feitheimh, a tha mar as trice a’ ciallachadh ath-dhealbhadh pròiseis, chan e luaths neach-cùise.
- **A’ dèanamh dìmeas air caochlaidheachd**: bidh Lagh Little a’ toirt cunntas air cuibheasachdan; feumaidh obair-chùise le caochlaidheachd iarrtais àrd comas bufair, chan e dìreach crìoch WIP nas teinne, no thèid ceann-amannan reachdail a chall fhathast air an earball caochlaideach fiù ’s mar a leasaicheas a’ chuibheasachd.
- **A’ tomhas WIP gu neo-chunbhalach**: tha cùis “fosgailte” anns an t-siostam clàraidh ach a tha dha-rìribh air stad a’ feitheamh air treas pàrtaidh fhathast na WIP; a fàgail a-mach a’ brosnachadh nan àireamhan gun atharrachadh dè a tha a’ tachairt dha saoranaich.

## Tùsan

- Vacanti D, *Actionable Agile Metrics for Predictability: An Introduction*, Actionable Agile Press, 2015.
- Reinertsen DG, *The Principles of Product Development Flow*, Celeritas Publishing, 2009.
- Ministry of Housing, Communities and Local Government, planning application statutory timescales. <https://www.gov.uk/guidance/making-an-application>
- National Audit Office, reports on Home Office asylum casework and accommodation. <https://www.nao.org.uk/>
