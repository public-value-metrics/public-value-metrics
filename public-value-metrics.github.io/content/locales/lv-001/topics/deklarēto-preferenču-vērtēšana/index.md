# Deklarēto preferenču vērtēšana

Deklarēto preferenču metodes novērtē ārpustirgus preces vērtību, tieši jautājot cilvēkiem, cik viņi būtu gatavi maksāt par to vai kādu kompensāciju gatavi pieņemt, lai no tās atteiktos, parasti ar strukturētu aptauju, kas apraksta hipotētisku scenāriju. Kontingentā vērtēšana ir šīs ģimenes vispazīstamākā tehnika.

## Kāpēc tas ir svarīgi

Green Book 2. pielikums (papildu norādījumi par ārpustirgus ietekmju vērtēšanu) atbalsta deklarēto preferenču metodes precēm, kurām nav novērojama tirgus darījuma, no kura secināt vērtību — gaisa kvalitātei, bioloģiskajai daudzveidībai, aizsardzībai pret plūdiem, ainavas pastāvēšanas vērtībai, ko kāds, iespējams, nekad neapmeklēs (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>). Defra (Vides, pārtikas un lauku lietu departaments) ir publicējis savus deklarēto preferenču norādījumus vides novērtēšanai tieši tāpēc, ka liela daļa vides vērtības (dzīvotņu saglabāšana, ūdens kvalitāte) nav ar aizstājēja tirgu vispār, atšķirībā, piemēram, no trokšņa, kas vismaz korelē ar novērojamām mājokļu cenām (skatiet [atklāto preferenču vērtēšana](../atklāto-preferenču-vērtēšana/)).

Deklarēto preferenču galvenā pievilcība — tās var novērtēt burtiski jebko, tostarp preces, ar kurām neviens nekad nav darījis darījumus — ir arī to ticamības problēmas avots. Tā kā respondenti faktiski netērē naudu, kontingentās vērtēšanas aptaujas ir neaizsargātas pret hipotētisko novirzi (cilvēki pārvērtē gatavību maksāt, ja nav reāla budžeta ierobežojuma), iegultības efektiem (viena un tā pati prece tiek vērtēta citādi atkarībā no tā, kas vēl ir aptaujā) un sākumpunkta novirzi solīšanas spēļu dizainos. 1993. gada NOAA paneļa ieteikumi par kontingento vērtēšanu, kas sasaukts pēc Exxon Valdez naftas noplūdes tiesvedības, noteica dizaina standartus — bināru „vai maksātu £X, jā/nē" referenduma formātu, nevis atvērtu solīšanu, un obligātus atgādinājumus par respondenta faktisko budžeta ierobežojumu —, kas joprojām ir atsauces standarts aizstāvamām aptaujām.

## Matemātika

```
Kontingentā vērtēšana (referenduma formāts):
  Uzrādīt bināru izvēli: „vai jūs maksātu £X gadā par iznākumu Y? jā/nē"
  Mainīt X nejauši starp respondentiem.
  Pieskaņot gatavību maksāt kā funkciju no jā/nē atbilžu īpatsvara pie katra X.

Vidējā WTP = laukums zem novērtētās pieprasījuma līknes
Kopējā vērtība = vidējā WTP × skartie iedzīvotāji

Izvēles eksperimenta (diskrētās izvēles modelēšanas) variants:
  Respondentiem uzrāda atkārtotas izvēles starp atribūtu komplektiem
  (ieskaitot izmaksu atribūtu), novērtē katra neizmaksu atribūta
  netiešās cenas no kompromisiem, ko respondenti atklāj.
```

Mūsdienu Apvienotās Karalistes praksē izvēles eksperimenta variantu parasti dod priekšroku pār atsevišķa jautājuma kontingento vērtēšanu, jo respondentu atkārtota piespiešana izvēlēties starp vairākiem atribūtiem un izmaksām rada iekšēji konsekventākus, grūtāk manipulējamus novērtējumus nekā viens jā/nē jautājums.

## Aprēķina piemērs

**Nacionālā valdība**: Defra pasūta kontingentās vērtēšanas aptauju, lai novērtētu upes ūdens kvalitātes uzlabošanas programmu. Referenduma formāta aptauja ar 2000 mājsaimniecību atklāj, ka 62 % maksātu £40 gadā ar hipotētisku ūdens rēķina piemaksu, un novērtētā pieprasījuma līkne dod vidējo gatavību maksāt £28 gadā uz mājsaimniecību.

```
Vidējā WTP = £28/mājsaimniecība/gadā
Mājsaimniecības ūdensgabalā = 340 000
Kopējā gada vērtība = £28 × 340 000 = £9,52 milj./gadā

20 gadu novērtēšanas periodā ar 3,5 % diskonta likmi (rentes faktors ≈ 14,2):
PV(ieguvums) ≈ £9,52 milj. × 14,2 ≈ £135 milj.
```

Šo kopējo skaitli pēc tam salīdzina ar programmas izmaksu pusi [sociālajā izmaksu un ieguvumu analīzē](../sociālā-izmaksu-un-ieguvumu-analīze/). Green Book pieprasa šādus deklarēto preferenču pierādījumus ziņot kopā ar to ticamības intervālu un aptaujas metodoloģiju, nevis kā kailu punktveida novērtējumu, tieši tāpēc, ka pamatā esošais skaitlis ir trauslāks nekā tirgus cena.

**Labdarības organizācija**: mantojuma fonds aptauj apmeklētājus un neapmeklētājus par gatavību maksāt, lai novērstu vēsturiskas ēkas slēgšanu, ko neviena grupa obligāti neapmeklē (tās pastāvēšanas vērtība). Tā kā arī neapmeklētāji, kas ēku nekad neredzēs, norāda pozitīvu WTP, aptauja ietver pastāvēšanas un mantojuma vērtību, ko vienkāršs apmeklētāju maksas ieņēmumu skaitījums (atklāto preferenču aizstājējs) pilnībā palaistu garām — tas parāda deklarēto preferenču patieso priekšrocību tur, kur nav nekāda tirgus darījuma, kas vērtību atklātu.

## Saikne ar programmatūras inženieriju

Deklarēto preferenču metodes reti attiecas tieši uz programmatūras inženierijas darbu, taču inženieri, kas būvē pilsoņu apspriešanās platformas, budžeta līdzdalības rīkus vai publisko aptauju infrastruktūru, bieži būvē instrumentu, uz kuru balstās ekonomika. Pareizi izstrādāt aptaujas dizaina detaļas — nejaušinātas solījumu summas, bināra referenduma formulējums nevis atvērti jautājumi, skaidri budžeta ierobežojuma atgādinājumi — nav UX smalkums, bet tas, kas iegūto vērtējumu padara aizstāvamu pārbaudē; slikti izstrādāta lietotnes aptauja var padarīt nederīgu vairāku mēnešu turpmāku ekonomisko analīzi. Skatiet [iedzīvotāju apmierinātības rādītāji](../iedzīvotāju-apmierinātības-rādītāji/) par vispārīgāku disciplīnu sabiedrības viedokļa datu iegūšanai, kam būs analītisks svars.

## Biežākās kļūdas

- **Atvērti jautājumi „cik jūs maksātu?"** Tie ir daudz vairāk pakļauti stratēģiskai un enkurošanas novirzei nekā binārs referenduma formulējums; NOAA paneļa ieteikums izmantot referenduma formātu pastāv tieši tāpēc, ka atvērtā izvilināšana darbojas slikti.
- **Nav atgādinājuma par respondenta faktisko budžeta ierobežojumu.** Bez tā deklarētā WTP ierasti pārsniedz to, ko tie paši cilvēki maksātu, kad darbojas reāls budžeta kompromiss — hipotētiskā novirze.
- **Iegultības efektu ignorēšana.** Viena un tā pati prece, vērtēta atsevišķi pret vērtētu kā daļa no lielāka komplekta, dod atšķirīgus WTP novērtējumus; norādiet, kas vēl, ja vispār kas, bija aptaujas ietvarā.
- **Vienas aptaujas punktveida novērtējuma uzskatīšana par galīgu.** Green Book prakse gaida diapazonu un zināmo novirzu apspriešanu, nevis kailu skaitli, kas pārnests izmaksu un ieguvumu tabulā, it kā tā būtu tirgus cena.

## Avoti

- HM Treasury. "The Green Book," Annex 2: valuing non-market impacts.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Defra. "Valuing environmental impacts: practical guidelines" (contingent valuation and choice
  experiment guidance). <https://www.gov.uk/government/collections/valuing-environmental-impacts>
- Arrow K, et al. "Report of the NOAA Panel on Contingent Valuation." Federal Register, 1993.
- Mitchell RC, Carson RT. "Using Surveys to Value Public Goods: The Contingent Valuation Method."
  Resources for the Future, 1989.
