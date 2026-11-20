# Kevrennlyver Diwoesys Lies (IMD)

An IMD yw an musur ofisyel a diwoesys kehevelys rag ranndiryow byghan yn Pow Sows, ow-restrya pub unn a 32,844 Lower-layer Super Output Area (LSOA, pub unn gans nes dhe 1,500 trigyas) dhyworth 1 (an moyha diwoesys) bys yn 32,844 (an lyha diwoesys). Yw dyllys gans an Ministry of Housing, Communities and Local Government (MHCLG, kens MHCLG/DCLG), an dyllans diwettha avel English Indices of Deprivation 2019, hag ev a gonduk yn ewn arghans governans kresel, rag-dyghtyans yeghes poblek, ha dewisekwydh dhe dhegow a skimow leel.

## Perag y talvos

Diwoesys nyns yw unn tra — kyffrans a yll bos boghosek yn devar mes sawthek, po devar lowr mes ow-sevel dhyworth kevadh yeghes gwann ha trigva drog. Kevrennlyveryow kyns an IMD (dhyworth dhydhyow kyffrans diwoesys an Department of the Environment 1970) a dhrehevis dhe'n model seyth-myns a hedhyw drefen bos kendonya unn sinyek (nivel diwoer hepken, rag ensampel) menough a gollas tyleryow diwoesys yn fordhow erel. An IMD 2019 a gemmysk devar, ober, adhyskans, yeghes, torrek-lagh, lettyow dhe drigva ha servisow, ha kerghydh trigva yn unn renk kemmyskys dhe bub LSOA, pub myns drehevys dhyworth y gwan a sinyow ha pwyshys herwydh metodologieth MHCLG. Drefen y wul orth skeul tyller byghan (LSOA) yn le a nivel awtorita leel, ev a dhiskwedh poket diwoesys kuddys a-berth rannow rych — an acheson may fo an IMD, nyns yw devar kresek awtorita leel, an pyth a sew NHS England, pupil premium an Department for Education, ha kansow a fformulaow arghans awtorita leel yn gwir. Software a dhyghtya dewisekwydh, a'n ragergh ynkressyans, po a raport effeyth dre dyller yn Pow Sows a dal devnydhya IMD decil po renk avel entra kynsa-klass, nyns yw wosa-tybyans — ha le may fo program ow-kendona yn ervirys an tyleryow moyha diwoesys, y arvreythyans a dal gweythresa [pwysheans dasrannans](../pwysheans-dasrannans/) kehevelys gans an kendon na, yn le a wordhya punt a vudhek yn kehevelep pyth pe le dh'y godhas.

## An matematik

```
7 myns, pwyshys:
  Devar                                    22.5%
  Ober                                     22.5%
  Adhyskans, Skyllow ha Hyskans            13.5%
  Diwoesys Yeghes ha Anaylder              13.5%
  Torrek-lagh                               9.3%
  Lettyow dhe Drigva ha Servisow            9.3%
  Kerghydh Trigva                           9.3%

Skor pub myns: sinyow savonekhes (restryys, wosa treylys dhe
dhasrannans normal) ha kemmyskys dre dreylyans eksponentyek,
may na yll diwoesys uhel yn unn sinyek vyth bos dileys yn tien
dre ewnder isel yn erel a-berth an myns na.

Skor kemmyskys IMD (LSOA) = Σ (skor myns × pwys myns)
Restrya LSOAs dre skor kemmyskys → 1 (moyha diwoesys) bys yn 32,844 (lyha diwoesys)
Desilyow: renk ÷ 3,284 (nes), decil 1 = 10% moyha diwoesys a LSOAs
```

## Ensampel oberys

**Skor kemmyskys LSOA**, ow-devnydhya skorow myns savonekhes yn ensampel (0 = heb sin a ddiwoesys, moy = moy diwoesys):

```
Devar                0.35 × 0.225 = 0.07875
Ober                 0.30 × 0.225 = 0.06750
Adhyskans            0.20 × 0.135 = 0.02700
Yeghes               0.15 × 0.135 = 0.02025
Torrek-lagh          0.10 × 0.093 = 0.00930
Lettyow dhe Drigva   0.05 × 0.093 = 0.00465
Kerghydh Trigva      0.08 × 0.093 = 0.00744

Skor kemmyskys = 0.07875 + 0.06750 + 0.02700 + 0.02025
               + 0.00930 + 0.00465 + 0.00744  = 0.21489
```

An skor kemmyskys na yw wosa restrys erbyn skorow oll an 32,844 LSOAs. Mar kwra y worra an LSOA orth renk 2,950, ev a godh yn decil 1 (2,950 ÷ 3,284 ≈ 0.9, hen yw a-berth an 10% moyha diwoesys a gyffransow yn Pow Sows) — rag lies fformula arghans yw an throthow a ygor dewisekwydh, heb vern fatell skora an awtorita leel a-dro dhodho yn kresek.

## Kevrenn gans ynjynnerieth medhelweyth

- Kenyver servis a wra geokodya devnydhyoryon dhe godh-post po LSOA a yll junya an tabel dyrres IMD dyllys (CSV rydh, versyonys, dhyworth MHCLG) dhe worra decil diwoesys avel kovariant — rag kendona ragergh, restrya karg kasow, po raportya devethyow dre vagas diwoesys heb kuntelles data personel nowydh.
- Decil IMD yw whilans ekwita savonek rag servisow didhital poblek: kroslystya kemmeres, kolli, po plesour servis dre decil IMD a dhiskwedh spasow kerghyans a gudh metryks kuntellys — mir [kebmyskadow didhital](../kefrysans-didjital/) ha [metryksow plesour sitisen](../metrikow-lowender-sitisenyon/).
- Drefen bos renk IMD kehevelys (ev a ssumm pup prys dhe set sefys a renkow dres Pow Sows), ny yll diskwedhes a vo diwoesys kenedhlek ow-sevel po ow-codha dres termyn — hepken pyneyl tyller a renk le erbyn an re erel y'n dyllans na; na dhyssynnya tablyn-bordow tuedhow assoleyth war renk IMD kriv hepken.

## Trapow

- **Kehevely renkow IMD ynter dyllansow (2015 erbyn 2019) avel tuedh termyn** — an sinyow awoles, an dhaearyek, ha'n metodologieth oll a chanj ynter dyllansow; MHCLG a gussul yn eglur erbyn devnydhya chanjyow renk avel dustuni may teuth tyller moy po le diwoesys.
- **Gweythresa IMD nivel-LSOA dhe unnikow** — LSOA yn decil 1 a'n jy hwath tyji heb diwoesys, ha LSOA decil-10 a'n jy hwath re diwoesys; IMD a dhyskrif tyleryow, nyns yw tus, ha'y dhevnydhya avel proksy dewisekwydh unnik a dhyvyskya yn dhew-fordh.
- **Ankevi manylyon nivel-myns rag renk kemmyskys** — dew LSOA gans skorow kemmyskys hevelep a yll kavos profilys myns kowrek dyffrans (unn diwoesys yeghes, unn diwoesys torrek-lagh); skim kendona ervirys orth unn gudhedh a dal devnydhya skor an myns perthynek, nyns yw an kemmyskys kemmysga.

## Fentynyow

- Ministry of Housing, Communities and Local Government. "English Indices of Deprivation 2019."
  <https://www.gov.uk/government/statistics/english-indices-of-deprivation-2019>
- MHCLG. "The English Indices of Deprivation 2019: Technical Report."
