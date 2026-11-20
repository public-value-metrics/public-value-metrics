# Cinneasachd AI san roinn phoblach

Tha bunait fianais fìor-chonnspaideach aig meatrachan airson na tha taic còdaidh AI a’ dèanamh dha toradh innleadaireachd dha-rìribh — ìrean gabhail ri molaidhean, luathachadh ann an sgrùdaidhean smachdaichte, tron-chuip PR, agus cumail còd — eadhon mus cuirear cuingealachaidhean na roinne poblaich ris: tha seòrsachadh dàta a’ cuingealachadh dè na pàirtean de oighreachd dhìleas a dh’fhaodas inneal AI suathadh riutha idir, tha cearcaill solarachaidh a’ ciallachadh gu bheil an t-inneal a thathar a’ measadh gu tric ginealach modail air dheireadh air comas an latha an-diugh, agus tha riatanasan cead tèarainteachd a’ riaghladh cò dh’fhaodas a chleachdadh air dè.

## Carson a tha e cudromach

Tha an dà sgrùdadh smachdaichte as motha air an tug iomradh a’ dol an taobh eile. Lorg RCT GitHub Copilot aig Peng et al. ann an 2023 gun do chuir luchd-leasachaidh crìoch air gnìomh frithealaiche HTTP ùr 55.8% nas luaithe le Copilot (1h11m an aghaidh 2h41m, n=95). Lorg RCT METR ann an 2025 gun robh luchd-leasachaidh stòr fosgailte eòlach ag obair air na *stòran aibidh aca fhèin* 19% nas slaodaiche le innealan AI tràth 2025, fhad ’s a bha iad den bheachd gun robh iad timcheall air 20% nas luaithe. Tha an dà sgrùdadh ceart; is e an contrarrachd an lorg — chan eil èifeachdas ann an obair ùr ga ghluasad gu èifeachdas ann an stòr còd aibidh, agus is e obair stòr aibidh a th’ ann am mòran dhen innleadaireachd riaghaltais, air oighreachdan a tha nas sine agus nas sònraichte na stòr malairteach cuibheasach. Tha Frèam AI Gineadach Oifis Dàta is Didseatach Meadhanach airson HMG (2024, <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>) a’ cur sìos prionnsabalan airson gabhail ri cùram dìreach air sgàth nach gabh a’ bhunait fianais seo a thoirt a-steach bho thaisbeanaidhean reiteachaidh; thathar an dùil gun measadh roinnean innealan an aghaidh an riatanasan làimhseachaidh dàta agus tèarainteachd fhèin mus tèid an cur a-mach.

## A’ mhatamataig

```
Ìre gabhail      = molaidhean air an gabhail / molaidhean a chaidh a shealltainn
Ìre cumail       = còd AI a mhaireas gu co-aonadh / còd AI a ghabhadh
Luathachadh      = (t_smachd − t_AI) / t_smachd  (bho choimeas smachdaichte A-MHÀIN)
Atharrachadh tron-chuip = Δ PR co-aonaichte/leasaiche/seachdain

Factar còmhdaich na roinne poblaich:
  cuibhreann stòr-còd iomchaidh = LOC air siostaman far a bheil an seòrsachadh
    (OFFICIAL, OFFICIAL-SENSITIVE, SECRET) a’ ceadachadh an inneal idir

Modal luach = leasaichean × còmhdach-iomchaidh × ùine air a shàbhaladh × reata làn × cleachdadh
             — feumaidh gach teirm tomhas ionadail, agus chan eil co-ionann
             aig an fhactar còmhdaich san roinn phrìobhaideach
```

## Eisimpleir obrach

Bidh roinn riaghaltais a’ ruith pìleat de neach-cuideachaidh còdaidh AI thar 300 leasaiche, ach chan eil ach siostaman air an seòrsachadh OFFICIAL iomchaidh airson cleachdadh an inneal — 70% dhen oighreachd a rèir riarachadh àireamh-cinn, leis an 30% eile (siostaman le seòrsachadh nas àirde) air an dùnadh a-mach gu tur.

```
Leasaichean iomchaidh = 300 × 0.70 = 210

Toradh pìleat: ùine air a shàbhaladh air aithris leotha fhèin 40 mion/latha;
              sàbhaladh air a thomhas aig ìre gnìomha 12 mion/latha (0.2h)
              — an beàrn mothachaidh METR, ath-nochdte san fhìor shaoghal

Cuir luach air an àireamh A CHAIDH A THOMHAS:
  210 × 0.2h × 220 latha × £55/uair làn × 0.6 cleachdadh
  = 210 × 44 uairean × £55 × 0.6
  = 9,240 uair × £55 × 0.6 ≈ £304,920/bliadhna de chomas

Cosgais: 210 suidheachain ceadaichte × £22/mìos × 12 ≈ £55,440/bliadhna

Co-mheas comais lom ≈ 304,920 / 55,440 ≈ 5.5:1
```

Tha e airidh air maoineachadh aig timcheall air trian de na buannachdan a chaidh aithris, agus dìreach às dèidh mullach an t-seòrsachaidh a chur an sàs — bhiodh ceadachadh dhan 300 leasaiche air bunait an fhigear fèin-aithris air cus-mheas a dhèanamh air an t-sluagh iomchaidh agus air an fhìor shàbhaladh.

## Ceangal ri innleadaireachd bathar-bog

Na smachdan a ghluaiseas gu dìreach: ruith **deuchainnean pragmatach** air stòr-còd fhèin na roinne agus fìor thicead, chan e gnìomhan taisbeanaidh reiteachaidh, oir is e lorg stòr aibidh sònraichte a th’ anns an toradh METR; làimhsich **ìre gabhail mar proxy, chan e builean** — tha gabhail àrd le cumail ìosal na cho-ionann bathar-bog ri cus-dhearbhadh; cuir **sgrùdadh seasmhachd** ri gach tagradh tron-chuip, oir lorg aithisg DORA 2025 gu bheil gabhail ri AI ag àrdachadh tron-chuip ach a’ lagachadh seasmhachd atharrachaidh, a tha dìreach na anailis buannachd lom a tha [meatrachan DORA airson luach poblach](../meatrach-dora-airson-luach-poblach/) air a thogail airson a ruith; agus bi onarach gum faod innealan AI a’ bheàrn air oighreachdan dìleas le trom [fiachan teicnigeach](../fiachan-teicnigeach-mar-bhleith-air-luach-poblach/) a leudachadh, chan e a lùghdachadh, oir chan eil dàta trèanaidh a’ riochdachadh gu leòr dhen COBOL, 4GL, agus còd mainframe sònraichte a tha cumanta san riaghaltas, agus mar sin is e càileachd nam molaidhean air na siostaman a dh’fheumas an cuideachadh as motha gu tric as laige. Tha seo ri taobh na ceist nas fharsainge mu [luach AI san riaghaltas](../luach-ai-san-riaghaltas/) agus bu chòir a riaghladh leis na h-aon chuingealachaidhean [luach tèarainteachd-saidhbeir na roinne poblaich](../luach-tèarainteachd-cibear-san-roinn-phoblach/) a tha a’ cuingealachadh càite am faod inneal treas-phàrtaidh còd no dàta fhaicinn idir.

## Cunnartan

- **Tar-chuir sgrùdaidh reiteachaidh**: a’ cur luathachadh RCT ann an obair ùr air obair co-aonaidh dìleas — is e seo dìreach am mearachd a nochd sgrùdadh METR.
- **Fèin-aithris mar thomhas**: is e beàrn 20 puing sa cheud eadar mothachadh agus tomhas an claon-bhreith as motha a tha aithnichte san litreachas seo, agus bidh e a’ sèideadh cùisean-gnìomhachais a tha an eisimeil air sgrùdaidhean luchd-leasachaidh a-mhàin.
- **A’ dearmad mullach an t-seòrsachaidh**: bidh modailean cead-cleachdaidh is luach a thogar air àireamh-cinn iomlan seach air an fho-sheata iomchaidh a tha ceadaichte a rèir seòrsachaidh a’ cur cus air an dà chuid èifeachdas cosgais agus còmhdach a ghabhas coileanadh.
- **Dàil cearcaill solarachaidh**: faodaidh solarachadh innealan stèidhichte air frèam a bhith a’ ciallachadh gu bheil pìleat a’ measadh ginealach modail a tha 12–18 mìosan air dheireadh air na tha ri fhaighinn gu poblach nuair a thèid a chur a-mach gu tur, a’ fàgail beachd luathachaidh a’ chiad chùis-ghnìomhachais seann-fhasanta mus tèid beò.

## Tùsan

- Peng S, et al., "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot", 2023. <https://arxiv.org/abs/2302.06590>
- METR, "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity", 2025. <https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/>
- DORA, 2025 State of AI-assisted Software Development report. <https://dora.dev/dora-report-2025/>
- Central Digital and Data Office, Generative AI Framework for HMG, 2024. <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
