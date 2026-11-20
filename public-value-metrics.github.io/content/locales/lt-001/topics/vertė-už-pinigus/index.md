# Vertė už pinigus (VFM)

Vertė už pinigus – tai JK viešojo sektoriaus formalus testas, ar išlaidos pasiekia geriausią galimą kaštų ir naudos pusiausvyrą. HM Treasury „Green Book“ ją aprėpia per tris „E“ (angl. economy, efficiency, effectiveness) – ekonomiškumą, efektyvumą ir veiksmingumą – o lygybė (equity) vis dažniau ginčijamai laikoma ketvirtuoju. Kiekvienas viešojo sektoriaus verslo atvejis, kuris išlaiko patikrą, turi aiškiai atsakyti į visus tris, o ne vien teigti, kad išlaidos „to vertos“.

## Kodėl tai svarbu

VFM nėra „pigaus“ sinonimas. „Green Book“ (HM Treasury, 2022 m. leidimas) aiškiai teigia, kad pirkti pigiausią variantą (ekonomiškumas), nepatikrinus, ar jis duoda numatytus rezultatus (veiksmingumas), yra dažna ir brangi klaida – pirkimas, kuris sutaupo 10 % vieneto kaštų, bet duoda 40 % mažesnį poveikį, yra prastesnė, o ne geresnė vertė. Trijų E sistema verčia verslo atvejį atskirti tris iš tiesų skirtingus nesėkmės būdus: permokėjimą už įvestis, įvesčių švaistymą paverčiant jas produktais ir tokių produktų sukūrimą, kurios neperauga į rezultatus, kurių kas nors norėjo. JK valdžios išlaidų kontrolė – Treasury tvirtinimo taškai, Nacionalinės audito tarnybos (NAO) vertės už pinigus tyrimai ir departamentų apskaitos pareigūnų vertinimai – sukurta aplink šį trijų dalių testą, todėl inžinerinis verslo atvejis, kuris nagrinėja tik kaštus (ekonomiškumą), neišlaikys patikros, net jei technologija gera.

„Ketvirtasis E“, lygybė, ginčijamas būtent todėl, kad gali prieštarauti kitiems trims: efektyviausias paslaugos teikimo nacionaliniu mastu būdas retai būna teisingiausias, nes teikimo sutelkimas ten, kur piliečius pasiekti pigiausia, dažnai reiškia sunkiausiai pasiekiamų aptarnavimo stoką. 2020 m. „Green Book“ peržiūra atsiliepė į kritiką (įskaitant 2020 m. Treasury Select Committee ir IPPR North), kad gryni kaštų ir naudos santykiai sistemingai palankūs jau klestintiems regionams, reikalaudama, kad vertinimai aiškiai nagrinėtų paskirstymo poveikį – žr. [paskirstymo svertinimas](../paskirstymo-svertinimas/).

## Matematika

VFM nėra vienas santykis, o trijų dalių (ar keturių dalių) diagnostika, taikoma paeiliui:

```
Ekonomiškumas:  Ar įvestys perkamos mažiausiais pagrįstais kaštais reikalingai
                kokybei? (£ už įvesties vienetą)

Efektyvumas:    Kaip gerai įvestys paverčiamos produktais?
                (produktai / įvestys, pvz., apdorotos bylos vienai darbuotojo valandai)

Veiksmingumas:  Ar produktai iš tikrųjų duoda numatytus rezultatus?
                (pasiekti rezultatai / numatyti rezultatai)

[Lygybė]:       Ar kaštai ir nauda paskirstyti sąžiningai visoje populiacijoje,
                ar sutelkti tiems, kuriems mažiausiai reikia?
```

VFM nesėkmė gali įvykti bet kuriame etape nepriklausomai: ekonomiškas pirkimas su neefektyviu teikimu; efektyvus netinkamos produkto teikimas; veiksmingi rezultatai, nupirkti per dideliais kaštais. Žr. [viešojo sektoriaus pagrindiniai veiklos rodikliai](../viešojo-sektoriaus-pagrindiniai-veiklos-rodikliai/) – kaip tai paverčiama išmatuojamais rodikliais, ir [kaštų veiksmingumo analizė valdžios sektoriuje](../kaštų-veiksmingumo-analizė-valdžios-sektoriuje/) – formalų palyginimo metodą.

## Pavyzdys su skaičiavimais

**Vietos valdžios kontaktų centras**: savivaldybė lygina du naujos bylų valdymo sistemos variantus.

- *A variantas*: £600 000 licencija (pigiausia iš turimų), bet darbuotojai vis tiek vidutiniškai praleidžia 22 minutes vienai bylai, nes darbo eiga reikalauja rankinio pakartotinio duomenų įvedimo tarp sistemų – efektyvumas prastas.
- *B variantas*: £900 000 licencija, integruota darbo eiga, darbuotojai vidutiniškai praleidžia 9 minutes vienai bylai.

Vien ekonomiškumas palankus A (£300 000 pigiau). Tačiau esant 40 000 bylų per metus A kainuoja 40 000 × 22/60 = 14 667 darbuotojų valandų; B – 40 000 × 9/60 = 6 000 darbuotojų valandų. Esant pilnutiniams darbuotojų kaštams £28 per valandą, A kainuoja £410 667 per metus darbuotojų laiko, o B – £168 000 per metus – £242 667 per metus efektyvumo skirtumas, kuris per 14 mėnesių užgožia £300 000 pradinį ekonomiškumo skirtumą. Įskaičiavus efektyvumą, VFM palankus B, o ne A.

**Labdaros teikimo dotacija**: finansuotojas lygina £50 000 dotaciją, pasiekusią 200 sėkmingų įdarbinimų (£250 vienam įdarbinimui – akivaizdžiai puikus ekonomiškumas), su £120 000 dotacija, pasiekusia 350 įdarbinimų, išliekančių ilgiau nei 12 mėnesių, palyginti su pirmosios dotacijos įdarbinimais, iš kurių pusė nutrūksta per 3 mėnesius. Veiksmingumas – tvarūs rezultatai – apverčia akivaizdų VFM reitingą: tikrieji kaštai vienam *tvariam* įdarbinimui pirmajai dotacijai yra £250 ÷ 0,5 = £500, o antrajai – £120 000/350 ≈ £343.

## Ryšys su programine inžinerija

VFM suteikia inžinerijos komandoms discipliną technologijų verslo atvejams formuluoti taip, kaip juos iš tikrųjų skaitys finansų ir audito funkcijos:

- Nurodykite ekonomiškumą, efektyvumą ir veiksmingumą kaip atskiras verslo atvejo eilutes, o ne vieną suliejusį „vertės“ skaičių – „Green Book“ apmokytas peržiūrėtojas paprašys būtent tokio išskaidymo.
- Saugokitės optimizuoti pirkimo kaštus (ekonomiškumą) integracijos ir darbo eigos efektyvumo sąskaita – tai labai dažnas klaidingas sutaupymas valdžios IT (žr. [bendrieji nuosavybės kaštai valdžios IT](../bendrieji-nuosavybės-kaštai-valdžios-it/) ir [kurti ar pirkti valdžios sektoriuje](../kurti-ar-pirkti-valdžios-sektoriuje/)).
- Veiksmingumui reikia rezultatų duomenų, o ne vien produktų skaičių – susiekite teikimo rodiklius su [rezultatais ir produktais](../rezultatai-ir-produktai/) ir tikru vertinimu per [kontrafaktinę analizę](../kontrafaktinė-analizė/), užuot manius, kad produktai reiškia rezultatus.
- Kai sistema regionuose ar demografinėse grupėse veikia nevienodai, lygybės klausimas yra teisėtas VFM prieštaravimas, o ne atskiras „malonus priedas“ – žr. [skaitmeninė įtrauktis](../skaitmeninė-įtrauktis/).

## Dažniausios klaidos

- **VFM tapatinimas su mažiausia kaina.** Ekonomiškumas yra viena trečioji (ar viena ketvirtoji) testo; „Green Book“ aiškiai perspėja prieš „mažiausių kaštų“ pirkimo taisykles, ignoruojančias efektyvumą ir veiksmingumą.
- **Išvesčių matavimas ir vadinimas rezultatais.** Bylų pralaidumas (efektyvumas) nėra tas pats, kas gerai išspręstos bylos (veiksmingumas); žr. [rezultatai ir produktai](../rezultatai-ir-produktai/).
- **Lygybės laikymas pasirenkama.** Nuo „Green Book“ 2020 m. atnaujinimo paskirstymo poveikis turi būti vertinamas kartu su tradiciniais trimis E, o ne pridedamas vėliau; pritaikyti jį po verslo atvejo patvirtinimo gerokai sunkiau nei įtraukti nuo pat pradžių.
- **Variantų palyginimas skirtingomis apimtimis be normalizavimo.** Vieneto VFM palyginimas tarp variantų, aptarnaujančių skirtingas populiacijas, turi atsižvelgti į mastą, kitaip efektyvumo palyginimas beprasmis.

## Šaltiniai

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation" (2022
  edition). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- National Audit Office, "Framework to review programmes and projects" and VFM study methodology.
  <https://www.nao.org.uk/>
- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020).
  <https://www.gov.uk/government/publications/the-magenta-book>
- IPPR North, "Transport Infrastructure Investment: Determining Value for Money" (evidence to the
  Treasury Select Committee's 2020 review of the Green Book's regional bias).
