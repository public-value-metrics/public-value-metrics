# Dyvas Teknegel avel Dhirywyans Talvedh Poblek

Dyvas teknegel yw tebel-kosa Ward Cunningham a 1992 rag kost a'n dyvenyth gesys a dhewisyow kodya dhiworth an termyn eus passys: **penn-sommen** (an ober dyghtya dyledhys) ha **usyans** (an tynnans ow pesya a wra war delivrans). Yn ystad TT governans koth, an usyans na yw paydhys yn ewn dhiworth talvedh poblek — delivrans chanjyow statutek kemmys lent, ratreyth fyllel uhella war servisow a wra fas dhe dhinasek, ha poll ow krena a dus a yll treghi an system yn sawel.

## Perag y talvos

Systemow mainframe ha COBOL-oos dres rannow governans an Rywvaneth Unys — HMRC ha DWP yn-mysk an re moyha kovlys — a dhre peryl dogvennys yn ta hag ow tisklerya ha'n National Audit Office re'n flagyas lies gweyth, hag yn y rapport *Digital Transformation in Government* (<https://www.nao.org.uk/>): platformow hen kostus dhe chanjya, ow kemmeres kales dhe wiredha, hag ow kwarnya war lavur arbennik a wra yn pensyoun yn skwith es y daskevya. Dihaval dhe'n dyvas a rann privedh, an dyvas ma a sed yn ewn ynter dhinasek ha'ga gwrians statutek — ynjin jorna prow na yllir chanjya yn sawel yw lettya delivrans polici, nyns an kyns anhesedh ynjynnerieth hepken. Adhallos 2013 an towlen TT Universal Credit, pan gavas an National Audit Office na wrella an kynsa kodhya delivra talvedh rag arghans ha bos res skrifa-ves rann vras a'n alhwedh medhelweyth, yw ensampel ragdhisyth a dhyvas teknegel anprisys ow tevedhes dhe dhasserhi towlen bobel bew, hewel dhe'n menystrow.

## An matematik

```
Penn-sommen SQALE = Σ dres terrow (termyn dyghtya) × skeul kost developer
Skeul dyvas teknegel (TDR) = kost dyghtya / kost dasdhrehevel × 100
                    (gradyow SonarQube: A ≤5%, B ≤10%, C ≤20%, D ≤50%)

Usyans (an niver a justifia daskemeres):
  usyans/bledhen = Δ lemder delivrans × talvedh rag pub unnenn lemder
                + Δ skeul hwarvosow a wra fas dhe dhinasek × kost rag pub hwarvos
                + pris-ragor skillow arbennik × nivver tus afektys
Kas daskemeres = PV(usyans sawys dres orizon) − kost dyghtya
               (diskontys orth skeul diskont sokel an Lyver Gwyrdh, gwelewgh
               social-discount-rate.md)
```

An penn-sommen a leveryth an dyled; an usyans yw an pyth a wra an kas ynworrans dhe bwyllgor akowntys poblek.

## Ensampel oberys

Ynjin prosesa gwerinow 250,000 linenn skrifys yn 4GL koth. Ow tevnydhya an benchmark CAST Appmarq a dro dhe $3.61 a benn-sommen dyvas teknegel rag pub linenn a'n kodh (≈£2.85 orth treylyans kemmyn):

```
Penn-sommen ≈ 250,000 × £2.85 ≈ £712,500
TDR ≈ 16% (gradh C)
```

Usyans musurys: an rann a gwith tri dyghtor arbennik orth pris-ragor 40% dres skeulyow ynjynner kres standard drefen bos skillow ynterna ow ledya yn kelli — £180,000/bledhen ekstra war bagas a hwegh den. An system a wra ynwedh peswar hweth bras prosesa/ostel y'n bledhen, pub unn a sedhek dhesyansow rag dro dhe 5,000 gwerer ha'ga dehwelya dhe'n kres kesstowl orth dro dhe £25/galwa:

```
Usyans ≈ £180,000 (pris-ragor skillow)
       + 4 × 5,000 × £25 = £500,000 (kost kesstowl dehwelys)
       ≈ £680,000/bledhen
```

Dyghtya gwarenn a'n modulys gwettha a gost £1,200,000 ha yw modelys dhe dhiminhans usyans 70%:

```
Dhiminhans usyans = 0.70 × 680,000 = £476,000/bledhen
Daspayans ≈ 1,200,000 / 476,000 ≈ 2.5 bledhen
```

An gwarenn a vern: dyghtya kodh na vo trehys hepken a brena tra vyth, drefen bos an usyans kuntellys ple vo ahwerdh chanj ha stankder an dyvas dhe'n uhella.

## Kevrenn gans ynjynnerieth medhelweyth

An framyans talvedh poblek a dhrehav kas dyvas teknegel dres "an kodh yw koth": displegewgh an ystad koth avel rolyans a'n tyller may ma kapasyta delivrans kellys kuntellys, ha kevrewgh yn ewn dhe [gost perthyans hollek](../kost-perthyans-hollek-yn-tt-an-governans/), drefen bos an usyans kost oberyans a berth dhe linenn TCO pe a vo gofynnys gans an arghans po na. Systemow leun a dhyvas a'th eus ynwedh dhevnydh anperthynek dhe [gevarwodhder](../gwerth-diogeleth-kiber-yn-sektor-poblek/), drefen bos kesstrethyans ynter ledyans patch ha stankder dyvas — system koth na yll bos patchys yw dyvas teknegel may ma y usyans paydhys yn peryl hwarvos ha nyns yn pundys. Ha pub tradh dyghtya erbyn nowedh yw y honan dewis a [gost an oll-amser](../kost-daladh-yn-towlennow-poblek/): paydhya dyvas a berth an nessa chanj statutek, ha CoD y honan a'th eus a res bos pesys erbyn an usyans sawys.

## Trapow

- **Rapportya penn-sommen hepken**: estymyans dyghtya bras ha fogus heb niver usyans a ny justifia tra vyth dhe dhasvynnor spenna.
- **Kemeres figours dyvas dhiworth arfow yn lytherek**: skanners yn stil SQALE a gonta terrow reol; ymesk anodha an dyvas kostus — dewisyow arkitektur ha reolow negys koth heb dogvenn — ha tryfla a flaghia.
- **"An dasskrifa a sawya oll"**: towlennow gans devnydh nowydh a res passya an keth dyssiplin avel pub kas negys aral — kost konterfaktek, tebyans sewena, ha diskontya — ha na vos bos kuhudhys anodho, avel an adhallos 2013 Universal Credit a dhiskwedhas.
- **Utopianieth dyvas-zero**: nyns yw an live dyvas gwell zero; dyvas yw lever a bren delivrans ogas. An govyn bew yw pub-prys an skeul usyans, nyns mar pyth dyvas yn hwir.

## Fentynyow

- Cunningham W, "The WyCash Portfolio Management System", OOPSLA experience report, 1992.
- CAST, technical debt estimation (Appmarq benchmark). <https://www.castsoftware.com/glossary/technical-debt-estimation>
- National Audit Office, *Digital Transformation in Government* and reports on Universal Credit. <https://www.nao.org.uk/>
