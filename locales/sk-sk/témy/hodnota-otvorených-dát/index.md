# Hodnota otvorených dát

Hodnota otvorených dát je problém odhadnúť, koľko stoja vládne a verejné dáta, ktoré nemajú cenu: nepredávajú sa, takže neexistuje riadok tržieb, a predsa ich zverejnenie (záznamy o počasí, cestovné poriadky, hranice poštových smerovacích čísel, obchodné registre) preukázateľne vytvára ďalšiu ekonomickú a spoločenskú aktivitu. Správne ich ohodnotiť je dôležité, lebo „zverejnenie nič nestojí“ aj „je to bezcenné“ sú nepravdivé a softvérový inžinier, ktorý rozhoduje, či otvoriť API alebo súbor údajov, potrebuje lepší argument než jedno či druhé.

## Prečo na tom záleží

Najčastejšie citovaný odhad zhora nadol pochádza zo správy McKinsey Global Institute z roku 2013 „Open data: Unlocking innovation and performance with liquid information“, ktorá vyčíslila potenciálnu ročnú hodnotu otvorených dát v siedmich oblastiach (vzdelávanie, doprava, spotrebný tovar, elektrina, ropa a plyn, zdravotníctvo a spotrebiteľské financie) na 3 až 5 biliónov dolárov ročne celosvetovo, prostredníctvom mechanizmov, ako sú vyššia transparentnosť, efektívnejšie zlaďovanie ponuky s dopytom a vznik nových produktov a služieb postavených na dátach. Ten údaj je scenárový odhad, nie nameraný skutočný výsledok, a rutinne sa nesprávne cituje, akoby išlo o tržby, ktoré môže vláda priamo získať, hoci hodnota pripadá väčšinou tretím stranám (firmám, výskumníkom, občanom), ktoré dáta používajú, a práve o to ide pri ich otvorení namiesto predaja. Britský Open Data Institute, ktorý v roku 2012 spoluzaložili Sir Tim Berners-Lee a Sir Nigel Shadbolt, odvtedy vytvoril súbor podrobnejších prípadových štúdií zdola nahor, sektor po sektore a súbor údajov po súbore, ktoré sú pre skutočný podnikateľský prípad oveľa užitočnejšie než titulkové číslo McKinsey, pretože ukazujú mechanizmus tvorby hodnoty, nielen jej súhrnnú veľkosť.

## Matematika

Otvorené dáta nemajú trhovú cenu, takže ju nahrádzajú metódy oceňovania; opakujú sa tri prístupy a žiadny nestačí sám:

```
1. Metóda ušetrených nákladov / nákladov na náhradu:
   hodnota ≈ koľko by používatelia zaplatili za vlastnú tvorbu alebo licenciu
   rovnocenných dát – dolná hranica, ignoruje hodnotu vytvorenú
   spôsobmi použitia, ktoré pôvodný tvorca nikdy nepredpokladal

2. Metóda trhovej analógie / nadväzujúcej aktivity:
   hodnota ≈ tržby alebo úspory, ktoré vytvárajú firmy a služby postavené
   na dátach (napr. navigačné aplikácie postavené na otvorených mapových
   a dopravných dátach) – zachytáva skutočnú ekonomickú aktivitu, ale
   je ťažké ju čisto pripísať samotnému zverejneniu dát (pozri
   additionality-and-deadweight)

3. Metóda kontingentného oceňovania / deklarovaných preferencií:
   hodnota ≈ koľko by používatelia podľa vlastných slov zaplatili, alebo
   čas, ktorý im to podľa nich ušetrí – pozri stated-preference-valuation
   pre všeobecnú metódu a jej skreslenia

Žiadna z nich nedáva údaj taký čistý ako trhová cena; dôveryhodné
podnikateľské prípady pre otvorené dáta triangulujú aspoň dve metódy
a výslovne uvádzajú, ktorý mechanizmus nesie hlavnú váhu.
```

## Vypracovaný príklad

**Ilustratívne zverejnenie národných mapových/adresných dát** (metodika podľa prípadových štúdií v štýle ODI, čísla ilustrujú rozsah, aký takéto štúdie zvyčajne zisťujú):

```
Odhad ušetrených nákladov:
  Firmy, ktoré by inak komerčne licencovali rovnocenné dáta na
  priraďovanie adries pri odhadovaných priemerných nákladoch na licenciu
  £4 000/rok, medzi odhadovanými 15 000 malými a strednými podnikmi,
  ktoré dnes používajú bezplatný otvorený súbor údajov
  = 15 000 × £4 000 = £60 000 000/rok samotných ušetrených licenčných nákladov

Odhad nadväzujúcej aktivity (špekulatívnejší, vyžaduje kontrafaktuál):
  Nové produkty na smerovanie doručovania a logistiku postavené na
  otvorených dátach, ktoré by bez nich neexistovali alebo by boli
  podstatne horšie – vyžaduje porovnanie s kontrafaktuálom, že dáta
  zostanú uzavreté alebo komerčne licencované (counterfactual-analysis),
  pretože časť tejto aktivity by vznikla aj tak na platených dátach
  za vyššiu cenu, čo je mŕtva váha v zmysle „hodnoty vytvorenej
  otvorením“

Obhájiteľný podnikateľský prípad uvádza údaj o ušetrených nákladoch
ako pevnú dolnú hranicu a údaj o nadväzujúcej aktivite považuje za
scenár hornej hranice, nie za fakt.
```

## Súvislosť so softvérovým inžinierstvom

Pre inžinierov je praktická otázka hodnoty otvorených dát zvyčajne užšia než národné titulkové čísla: zvýši otvorenie tohto konkrétneho API alebo súboru údajov (namiesto ponechania za dohodou s partnerom) opätovné využitie natoľko, aby to odôvodnilo priebežné náklady na dokumentáciu, verzovanie a podporu ako verejného rozhrania? Tieto náklady na údržbu sú skutočné a sú protipólom ekonomiky „postav raz, používaj často“ pri [vláde ako platforme](../vláda-ako-platforma/); obe témy sú blízke príbuzné, jedna o zdieľanom kóde a infraštruktúre, druhá o zdieľaných dátach. Každé tvrdenie o hodnote otvorených dát treba pred zaradením do podnikateľského prípadu skontrolovať voči [adicionalite a mŕtvej váhe](../adicionalita-a-mŕtva-váha/): aktivita, ktorá by nastala aj tak, na komerčne licencovaných dátach, nie je hodnota, ktorú vytvorilo *otvorenie*.

## Úskalia

- **Citovanie čísla McKinsey 3 – 5 biliónov dolárov ako špecifického pre Spojené kráľovstvo alebo ako podielu tohto súboru údajov**: je to globálny scenárový odhad za sedem sektorov z roku 2013; jeho použitie ako presného násobiteľa pre jeden národný súbor údajov skresľuje, čím to číslo je.
- **Žiadny kontrafaktuál**: pripisovanie si zásluh za všetku nadväzujúcu ekonomickú aktivitu postavenú na otvorených dátach bez otázky, koľko by jej vzniklo aj tak na platených alebo licencovaných dátach za vyššiu cenu (pozri [adicionalitu a mŕtvu váhu](../adicionalita-a-mŕtva-váha/) a [kontrafaktuálnu analýzu](../kontrafaktuálna-analýza/)).
- **Zámena nákladov na tvorbu s vytvorenou hodnotou**: súbor údajov, ktorého zber bol drahý, nie je automaticky hodnotný na zverejnenie a lacný nie je automaticky málo hodnotný; hodnota sleduje nadväzujúce využitie, nie náklady na začiatku.
- **Ignorovanie priebežných nákladov na údržbu „otvorenosti“**: zverejnenie jednorazového výpisu CSV nie je rovnaký záväzok ako prevádzka zdokumentovaného, verzovaného a podporovaného otvoreného API; podfinancovanie toho druhého po oznámení o spustení je častý spôsob zlyhania.

## Zdroje

- McKinsey Global Institute, "Open data: Unlocking innovation and performance with liquid information" (2013). <https://www.mckinsey.com/business-functions/mckinsey-digital/our-insights/open-data-unlocking-innovation-and-performance-with-liquid-information>
- Open Data Institute. <https://theodi.org/>
