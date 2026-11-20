# Hodnotenie dopadu vs. hodnotenie procesu

Hodnotenie dopadu sa pýta, či program spôsobil zamýšľané výsledky. Hodnotenie procesu sa pýta, či bol program skutočne dodaný tak, ako bol navrhnutý: komu, v akej dávke a s akými prekážkami alebo uľahčujúcimi faktormi po ceste. Sú to rozdielne otázky vyžadujúce rozdielne metódy a Magenta Book ministerstva financií (HM Treasury) považuje zadávanie oboch spolu za štandardnú prax, pretože slabý alebo nulový výsledok dopadu je sám osebe neinterpretovateľný: nepovie vám, či bola chybná podkladová teória programu, alebo či sa dobrá teória jednoducho nikdy riadne nedodala.

## Prečo na tom záleží

Vládne hodnotenia opakovane zistili žiadny merateľný efekt programu bez hodnotenia procesu, ktoré by vysvetlilo prečo, a objednávatelia tak nevedeli rozlíšiť „tento nápad nefunguje“ (zlyhanie teórie) od „tento nápad sa nikdy riadne nevyskúšal“ (zlyhanie implementácie). Usmernenie Medical Research Council k hodnoteniu procesu komplexných intervencií, uverejnené v BMJ v roku 2015 a široko citované popri Magenta Book, formalizovalo vernosť (fidelity), dávku a dosah (reach) ako základné veci, ktoré hodnotenie procesu musí merať. Objednať hodnotenie dopadu bez hodnotenia procesu hrozí opustením skutočne rozumného návrhu programu len preto, že bol dodaný polovici zamýšľanej populácie a pri zlomku zamýšľanej intenzity, čomu môže tvorca systémov dobre zabrániť, pretože vernosť dodávky je presne to, čo prevádzkové dátové systémy dokážu zachytiť takmer v reálnom čase.

## Matematika

```
Hodnotenie procesu sa pýta:
 - Dodalo sa to cieľovej populácii v plánovanej dávke/intenzite?
 - Zodpovedala dodávka návrhu logického modelu / teórie zmeny?
 - Aké prekážky alebo uľahčujúce faktory ovplyvnili dodávku?
 Metódy: kontroly vernosti voči vopred stanoveným prahom, prípadové štúdie, rozhovory,
         administratívne údaje o dodávke.

Hodnotenie dopadu sa pýta:
 - Čo sa zmenilo a koľko z tejto zmeny možno pripísať programu?
 Metódy: RCT, DiD, PSM, RDD (pozri impact-evaluation-methods) voči kontrafaktuálu.

Kombinovaná diagnóza:
 Žiadny efekt + vysoká vernosť  → zlyhanie teórie: samotný model výsledok nevytvoril
 Žiadny efekt + nízka vernosť   → zlyhanie implementácie: model sa nikdy riadne netestoval
 Efekt nájdený + vysoká vernosť → replikovať s dôverou
 Efekt nájdený + nízka vernosť  → skúmať ďalej: efekt môže byť krehký alebo viazaný na miesto
```

## Vypracovaný príklad

**Miestny úrad (rodičovský program)**: hodnotenie dopadu metódou rozdielu rozdielov zistí zmenu +2 percentuálne body v miere detskej pohody, ktorá nie je štatisticky významná. Hodnotenie procesu, vedené paralelne, zistí, že program oslovil len 210 z 500 cieľových rodín (42 % dosah) a z nich len 95 splnilo vopred stanovený prah vernosti 75 %+ navštívených stretnutí, teda 19 % pôvodne plánovaného dosahu. Záver: slabý výsledok dopadu zodpovedá zlyhaniu implementácie, nie dôkazu, že model programu nefunguje; primeranou reakciou je opraviť postup odporúčaní, ktorý spôsobil 58 % odpad, nie opustiť návrh programu.

**Charita (program digitálnej gramotnosti)**: hodnotenie dopadu zistí silný efekt (+18 percentuálnych bodov v skóre digitálnej istoty) a paralelné hodnotenie procesu potvrdí 92 % vernosť plánovanému učebnému plánu vo všetkých 12 miestach dodávky. V kombinácii môže poskytovateľ program s dôverou škálovať, pretože sa ukázalo, že efekt platí konzistentne, a nie je produktom jedného mimoriadne dobrého miesta.

## Súvislosť so softvérovým inžinierstvom

Dáta hodnotenia procesu sú presne to, čo dodávkové systémy vedia dobre zachytiť: dochádzku voči plánu, dávku stretnutí a odpad v každej fáze lievika odporúčaní alebo zápisu, teda tú istú analytiku lievika, ktorú inžinieri už budujú pre produktové funkcie, aplikovanú namiesto toho na dodávkovú pipeline sociálneho programu. Poskytovanie metrík vernosti a dosahu manažérom programu takmer v reálnom čase, namiesto čakania na hodnotenie na konci grantu, umožní opraviť pokazený postup odporúčaní uprostred programu namiesto jeho objavenia až po skončení obdobia financovania. Pozri [metódy hodnotenia dopadu](../metódy-hodnotenia-dopadu/), s ktorými sa kauzálne návrhy hodnotenia procesu párujú, [teóriu zmeny](../teória-zmeny/) a [logický model](../logický-model/) pre návrh, voči ktorému hodnotenie procesu kontroluje vernosť, a [realizáciu prínosov](../realizácia-prínosov/) na sledovanie dodávky až po výsledky, ktoré boli sľúbené.

## Úskalia

- **Objednať len hodnotenie dopadu.** Nulový alebo slabý výsledok sa potom nedá interpretovať ako zlyhanie teórie alebo zlyhanie implementácie, a práve toto rozlíšenie je rozhodujúce pre rozhodnutie, čo robiť ďalej.
- **Zaobchádzať s hodnotením procesu ako s mäkkým doplnkom.** Potrebuje rovnakú rigoróznosť a vopred stanovené kritériá vernosti ako návrh dopadu, inak sa po príchode výsledkov zrúti na anekdotu.
- **Zamieňanie „včas a v rozpočte“ s „dodané tak, ako bolo navrhnuté“.** Hodnotenie procesu kontroluje vernosť modelu (dávka, cieľová skupina, obsah), nie stav RAG projektového riadenia.
- **Nestanovenie prahov vernosti vopred.** Rozhodovanie po fakte o tom, čo sa počíta ako „dostatočná dávka“, spôsobí, že akékoľvek vysvetlenie sklamavého výsledku dopadu vyzerá ako dodatočné výhovorky.

## Zdroje

- HM Treasury, Magenta Book (2020). <https://www.gov.uk/government/publications/the-magenta-book>
- Moore G, et al., "Process evaluation of complex interventions: Medical Research Council
  guidance." BMJ 2015;350:h1258. <https://www.bmj.com/content/350/bmj.h1258>
- National Audit Office, programme evaluation reports. <https://www.nao.org.uk/>
