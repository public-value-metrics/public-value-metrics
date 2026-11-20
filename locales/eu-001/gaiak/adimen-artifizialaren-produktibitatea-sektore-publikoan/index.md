# Adimen artifizialaren produktibitatea sektore publikoan

AA bidezko kodetze-laguntzak ingeniaritza-irteeran zer eragiten duen neurtzen duten metrikek —iradokizunen onarpen-tasak, azterketa kontrolatuen azkartzeak, PR-en emaria eta kodearen atxikipena— ebidentzia-oinarri benetan kontraesankorra dute sektore publikoaren murrizketak gehitu aurretik ere: datuen sailkapenak mugatzen du lehendik dagoen sistema-multzoaren zein zati ukitu dezakeen AA tresna batek, erosketa-zikloek esan nahi dute ebaluatzen ari den tresna sarritan egungo gaitasuna baino eredu-belaunaldi bat atzeratuta dagoela, eta segurtasun-baimenen eskakizunek arautzen dute nork erabil dezakeen zer gauzatan.

## Zergatik den garrantzitsua

Gehien aipatzen diren bi azterketa kontrolatuek kontrako norabidea adierazten dute. Peng et al.-en 2023ko GitHub Copilot RCT-k aurkitu zuen garatzaileek HTTP zerbitzari baten zeregin berri bat %55,8 azkarrago osatu zutela Copilot-ekin (1h11m vs 2h41m, n=95). METR-en 2025eko RCT-k aurkitu zuen *beren biltegi heldu propioetan* lanean ari ziren kode irekiko garatzaile esperientziadunak %19 motelagoak zirela 2025eko hasierako AA tresnekin, eta ia %20 azkarragoak zirela uste zuten. Bi azterketak sendoak dira; kontraesana bera da aurkikuntza: zeregin berrietan eraginkortasuna ez da kode-base helduetako eraginkortasunera transferitzen, eta gobernuko ingeniaritzaren zati handi bat kode-base helduetako lana da, biltegi komertzial arruntena baino zaharragoak eta berezkoagoak diren sistema-multzoetan. Central Digital and Data Office-aren Generative AI Framework for HMG (2024, <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>) arduraz hartzeko printzipioak ezartzen ditu, ebidentzia-oinarri hau ezin delako saltzaileen erakustaldietatik besterik gabe inportatu; sailek tresnak beren datu-tratamendu eta segurtasun-eskakizunen aurka ebaluatzea espero da hedatu aurretik.

## Matematika

```
Onarpen-tasa      = onartutako iradokizunak / erakutsitako iradokizunak
Atxikipen-tasa    = batutzera (merge) iristen den AA kodea / onartutako AA kodea
Azkartzea         = (t_kontrola − t_AA) / t_kontrola  (konparazio kontrolatutik BAKARRIK)
Emariaren delta   = Δ batutako PR/garatzaile/aste

Sektore publikoko estaldura-faktorea:
  kode-base egokiaren zatia = tresna baimentzen duten sistemen LOC
    (OFFICIAL, OFFICIAL-SENSITIVE, SECRET sailkapena)

Balio-eredua = garatzaileak × estaldura egokia × aurreztutako denbora × tarifa osoa × erabilera
             — termino bakoitzak tokiko neurketa behar du, eta estaldura-faktoreak
             ez du baliokiderik sektore pribatuan
```

## Adibide landua

Gobernu-sail batek AA kodetze-laguntzaile bat probatzen du 300 garatzailerekin, baina OFFICIAL sailkatutako sistemak bakarrik daude tresna erabiltzeko aukeran — sistema-multzoaren %70 langile-esleipenaren arabera, gainerako %30ak (sailkapen altuagoko sistemak) guztiz kanpoan geratzen dira.

```
Garatzaile egokiak = 300 × 0,70 = 210

Pilotuaren emaitza: norberak jakinarazitako denbora-aurrezpena 40 min/egun;
                    zeregin mailan neurtutako aurrezpena 12 min/egun (0,2h)
                    — METR-en pertzepzio-hutsunea, errealitatean erreproduzituta

NEURTUTAKO zifra balioestea:
  210 × 0,2h × 220 egun × £55/h osoa × 0,6 erabilera
  = 210 × 44 ordu × £55 × 0,6
  = 9.240 ordu × £55 × 0,6 ≈ £304.920/urte ahalmena

Kostua: 210 lizentzia × £22/hil × 12 ≈ £55.440/urte

Ahalmen-ratio garbia ≈ 304.920 / 55.440 ≈ 5,5:1
```

Norberak jakinarazitako onuraren hirutik bat inguruan finantzagarria da, eta sailkapen-sabaia aplikatu ondoren bakarrik — 300 garatzaileei lizentziak ematea norberak jakinarazitako zifran oinarrituta, populazio egokia eta benetako aurrezpena biak gehiegi kalkulatzea izango zen.

## Software ingeniaritzarekin lotura

Zuzenean transferitzen diren diziplinak: egin **proba pragmatikoak** sailaren kode-base propioan eta benetako zereginetan, ez saltzaileen erakustaldi-zereginetan, METR-en emaitza zehazki kode-base helduen aurkikuntza delako; tratatu **onarpen-tasa proxy gisa, ez emaitza gisa** — onarpen altua atxikipen baxuarekin gaindiagnostikoaren software-baliokidea da; lotu errendimenduaren aldarrikapen oro **egonkortasun-egiaztapen** batekin, DORA-ren 2025eko txostenak aurkitu baitzuen AA hartzeak emaria areagotzen duela baina aldaketen egonkortasuna narriatzen duela, hain zuzen [balio publikorako DORA metrikek](../dora-metrikak-balio-publikorako/) egiteko eraikita dauden onura garbiaren analisia; eta izan zintzoa AA tresnek [zor teknikoz](../zor-teknikoa-balio-publikoaren-higadura-gisa/) betetako sistema-multzo zaharretan hutsunea zabal dezaketela, ez estutu, entrenamendu-datuek gutxiegi ordezkatzen dituztelako gobernuan ohikoak diren COBOL, 4GL eta mainframe kode pertsonalizatua, eta beraz iradokizunen kalitatea laguntza gehien behar duten sistemetan izaten da sarritan ahulena. Honek [AA gobernuko balioan](../adimen-artifizialaren-balioa-gobernuan/) galdera zabalagoarekin batera doa, eta [sektore publikoko zibersegurtasunaren balioa](../sektore-publikoko-ziberseguritatearen-balioa/) murrizketa berberek gobernatu behar dute, hirugarrenen edozein tresnak kodea edo datuak non ikus ditzakeen mugatzen dutenak.

## Tranpak

- **Saltzaile-azterketen transplantea**: zeregin berrietako RCT-ko azkartzeak lehendik dauden sistemekin integratzeko lanari aplikatzea da hain zuzen METR azterketak agerian utzi zuen akatsa.
- **Norberak jakinarazitakoa neurketa gisa**: pertzepzioaren eta neurtutakoaren arteko 20 puntuko tarteak literatura honetan ezagutzen den alborapen handiena da, eta garatzaileen inkestetan soilik oinarritutako negozio-kasuak puztzen ditu.
- **Sailkapen-sabaia alde batera uztea**: guztizko langile-kopuruan oinarritutako lizentzia- eta balio-ereduek, sailkapena gaindituta duen azpimultzo egokian oinarritu beharrean, sistematikoki gehiegi kalkulatzen dituzte kostu-eraginkortasuna eta lor daitekeen estaldura.
- **Erosketa-zikloaren atzerapena**: marko-oinarritutako tresna-erosketak esan dezake pilotu batek ebaluatzen duen eredu-belaunaldia hedapen osoa egiteko unean publikoki eskuragarri dagoena baino 12–18 hilabete atzeratuta dagoela, eta horrek jatorrizko negozio-kasuaren azkartze-hipotesia zaharkituta uzten du martxan jarri aurretik.

## Iturriak

- Peng S, et al., "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot", 2023. <https://arxiv.org/abs/2302.06590>
- METR, "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity", 2025. <https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/>
- DORA, 2025 State of AI-assisted Software Development report. <https://dora.dev/dora-report-2025/>
- Central Digital and Data Office, Generative AI Framework for HMG, 2024. <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
