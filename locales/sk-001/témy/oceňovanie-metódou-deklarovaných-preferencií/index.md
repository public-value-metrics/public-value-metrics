# Oceňovanie metódou deklarovaných preferencií

Metódy deklarovaných preferencií odhadujú hodnotu netrhového statku tak, že sa ľudí priamo pýtajú, koľko by boli ochotní za neho zaplatiť, alebo akú kompenzáciu by boli ochotní prijať, aby sa ho vzdali, zvyčajne prostredníctvom štruktúrovaného prieskumu opisujúceho hypotetický scenár. Najznámejšou technikou tejto rodiny je kontingentné oceňovanie.

## Prečo na tom záleží

Príloha 2 Green Book (doplnkové usmernenie k oceňovaniu netrhových dopadov) schvaľuje metódy deklarovaných preferencií pre statky, pri ktorých neexistuje nijaká pozorovateľná trhová transakcia, z ktorej by sa hodnota dala odvodiť – kvalita ovzdušia, biodiverzita, ochrana pred povodňami, existenčná hodnota krajiny, ktorú niekto možno nikdy nenavštívi
(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>).
Defra zverejnila vlastné usmernenie o deklarovaných preferenciách pre environmentálne hodnotenie práve preto, že veľká časť environmentálnej hodnoty (ochrana biotopov, kvalita vody) nemá nijaký zástupný trh, na rozdiel od hluku, ktorý aspoň koreluje s pozorovateľnými cenami domov (pozri [oceňovanie metódou odhalených preferencií](../oceňovanie-podľa-odhalených-preferencií/)).

Hlavná príťažlivosť deklarovaných preferencií – dokážu oceniť doslova čokoľvek vrátane statkov, s ktorými sa nikdy neobchodovalo – je zároveň zdrojom ich problému s dôveryhodnosťou. Keďže respondenti v skutočnosti neminú žiadne peniaze, prieskumy kontingentného oceňovania sú náchylné na hypotetické skreslenie (ľudia nadhodnocujú ochotu platiť, keď nemajú skutočné rozpočtové obmedzenie), efekty vnorenia (ten istý statok sa oceňuje inak podľa toho, čo ďalšie je v prieskume) a skreslenie východiskovým bodom v dizajnoch s podávaním ponúk. Panel NOAA z roku 1993 o kontingentnom oceňovaní, zvolaný po súdnych sporoch po úniku ropy z lode Exxon Valdez, stanovil štandardy dizajnu – binárny formát referenda „zaplatili by ste £X, áno/nie“ namiesto otvoreného ponúkania a povinné pripomenutie skutočného rozpočtového obmedzenia respondenta –, ktoré dodnes zostávajú referenčným štandardom obhájiteľných prieskumov.

## Matematika

```
Kontingentné oceňovanie (formát referenda):
  Predložiť binárnu voľbu: „zaplatili by ste £X ročne za výsledok Y? áno/nie“
  X náhodne meniť medzi respondentmi.
  Ochotu platiť odhadnúť ako funkciu podielu odpovedí áno/nie pri každom X.

Priemerná WTP = plocha pod odhadnutou krivkou dopytu
Súhrnná hodnota = priemerná WTP × dotknutá populácia

Variant s voľbovým experimentom (modelovanie diskrétnej voľby):
  Respondentom sa opakovane predkladajú voľby medzi balíkmi atribútov
  (vrátane nákladového atribútu), implicitné ceny každého
  nenákladového atribútu sa odhadnú z kompromisov, ktoré respondenti odhalia.
```

Variant s voľbovým experimentom sa v súčasnej britskej praxi vo všeobecnosti uprednostňuje pred kontingentným oceňovaním s jednou otázkou, pretože opakované nútenie respondentov, aby vyvažovali viacero atribútov proti nákladom, dáva vnútorne konzistentnejšie a ťažšie zmanipulovateľné odhady než jediná otázka áno/nie.

## Vypracovaný príklad

**Národná vláda**: Defra zadá prieskum kontingentného oceňovania na ocenenie programu zlepšenia kvality vody v rieke. Prieskum vo formáte referenda na 2 000 domácnostiach zistí, že 62 % by zaplatilo £40 ročne prostredníctvom hypotetického príplatku k účtu za vodu, a odhadnutá krivka dopytu dáva priemernú ochotu platiť £28 ročne na domácnosť.

```
Priemerná WTP = £28/domácnosť/rok
Domácnosti v povodí = 340 000
Súhrnná ročná hodnota = £28 × 340 000 = £9,52 mil./rok

Počas 20-ročného obdobia hodnotenia pri diskontnej sadzbe 3,5 % (anuitný faktor ≈ 14,2):
PV(prínos) ≈ £9,52 mil. × 14,2 ≈ £135 mil.
```

Toto súhrnné číslo sa potom porovnáva s nákladovou stranou [sociálnej analýzy nákladov a prínosov](../sociálna-analýza-nákladov-a-prínosov/) programu. Green Book vyžaduje, aby sa takýto dôkaz z deklarovaných preferencií uvádzal spolu s intervalom spoľahlivosti a metodikou prieskumu, nie ako holý bodový odhad, práve preto, že podkladové číslo je krehkejšie než trhová cena.

**Charita**: pamiatkový fond sa v prieskume pýta návštevníkov aj nenávštevníkov na ochotu platiť za zabránenie zatvoreniu historickej budovy, ktorú nutne nenavštevuje ani jedna skupina (jej existenčná hodnota). Keďže aj nenávštevníci, ktorí budovu nikdy neuvidia, uvádzajú kladnú WTP, prieskum zachytí existenčnú a odkazovú hodnotu, ktorú by jednoduchý súčet príjmov zo vstupného (proxy odhalených preferencií) úplne minul – čo ukazuje skutočnú výhodu deklarovaných preferencií tam, kde neexistuje nijaká trhová transakcia, ktorá by hodnotu odhalila.

## Súvislosť so softvérovým inžinierstvom

Metódy deklarovaných preferencií sa na prácu softvérových inžinierov uplatňujú zriedka priamo, no inžinieri budujúci platformy pre konzultácie s občanmi, nástroje participatívneho rozpočtu alebo infraštruktúru verejných prieskumov často budujú nástroj, na ktorom ekonómia závisí. Správne detaily dizajnu prieskumu – náhodne zvolené sumy ponúk, binárne rámcovanie referenda namiesto otvorených otázok, výslovné pripomenutie rozpočtového obmedzenia – nie sú UX maličkosť, ale to, čo robí výsledné ocenenie obhájiteľným pri kontrole; zle navrhnutý prieskum v aplikácii môže znehodnotiť mesiace následnej ekonomickej analýzy. Pozri [metriky spokojnosti občanov](../metriky-spokojnosti-občanov/) pre všeobecnejšiu disciplínu zisťovania údajov o verejnej mienke, ktoré budú mať analytickú váhu.

## Úskalia

- **Otvorené otázky „koľko by ste zaplatili?“.** Sú oveľa náchylnejšie na strategické a kotviace skreslenie než binárne rámcovanie referenda; odporúčanie panelu NOAA používať formát referenda existuje práve preto, že otvorené zisťovanie dopadá zle.
- **Žiadne pripomenutie skutočného rozpočtového obmedzenia respondenta.** Bez neho deklarovaná WTP bežne presahuje to, čo by tí istí ľudia zaplatili pri skutočnom rozpočtovom kompromise – hypotetické skreslenie.
- **Ignorované efekty vnorenia.** Ten istý statok ocenený samostatne a ocenený ako súčasť väčšieho balíka dáva rozdielne odhady WTP; uveďte, čo ďalšie, ak vôbec niečo, bolo v rámci prieskumu.
- **Považovanie bodového odhadu z jediného prieskumu za ustálený.** Prax Green Book očakáva rozpätie a diskusiu o známych skresleniach, nie holé číslo prenesené do tabuľky nákladov a prínosov, akoby išlo o trhovú cenu.

## Zdroje

- HM Treasury. "The Green Book," Annex 2: valuing non-market impacts.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Defra. "Valuing environmental impacts: practical guidelines" (contingent valuation and choice
  experiment guidance). <https://www.gov.uk/government/collections/valuing-environmental-impacts>
- Arrow K, et al. "Report of the NOAA Panel on Contingent Valuation." Federal Register, 1993.
- Mitchell RC, Carson RT. "Using Surveys to Value Public Goods: The Contingent Valuation Method."
  Resources for the Future, 1989.
