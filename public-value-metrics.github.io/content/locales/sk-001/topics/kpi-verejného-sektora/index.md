# KPI verejného sektora

Kľúčový ukazovateľ výkonnosti (KPI) je zvolená, sledovaná miera, ktorá zastupuje to, či verejná
služba dobre plní svoju úlohu. Vo verejnej správe nie je voľba KPI nikdy neutrálna: keďže KPI sa
viažu na rozpočty, rebríčky a kariéry, samotný akt výberu jedného formuje správanie všetkých, ktorí
sú po ňom v reťazci, často viac než politika, ktorá službu vytvorila.

## Prečo na tom záleží

Pozorovanie Charlesa Goodharta z roku 1975 o menovej politike, ktoré neskôr popularizovala Marilyn
Strathern ako „keď sa miera stane cieľom, prestáva byť dobrou mierou“, je najdôležitejšie
varovanie v riadení výkonnosti verejného sektora. KPI zvolený na *opis* systému ho začne *skresľovať*
v okamihu, keď sa naň naviaže financovanie, plat alebo politické prežitie. Kanonickou ilustráciou
sú reakčné časy záchranných služieb NHS: keď sa osemminútový cieľ reakcie kategórie A stal
záväzným, preukázalo sa, že niektoré trusty „kumulovali“ sanitky tesne mimo hodín merania reakčného
času alebo prekategorizovali volania, aby dosiahli číslo bez zmeny výsledkov pacientov. Usmernenia
britského National Audit Office k výberu a používaniu ukazovateľov výkonnosti, uvedené v jeho
správach o hodnote za peniaze a v rámcoch „Performance Measurement by Regulators“ a „Choosing the
Right FABRIC“ (Fit for purpose, Appropriate, Balanced, Robust, Integrated, Cost-effective), existujú
práve preto, že rezorty si stále vyberali ukazovatele, ktoré sa dajú ľahko vykazovať, a nie také,
ktoré sa ťažko zneužívajú. Softvérový inžinier, ktorý dodá dashboard, voči ktorému sa bude posudzovať
minister alebo riaditeľ, navrhuje, či chce, alebo nie, stimulačnú štruktúru verejnej inštitúcie.

## Matematika

Návrh KPI je téma v tvare rámca, ale *hodnotenie* kandidátskeho KPI je opakovateľný kontrolný zoznam,
nie vzorec:

```
Ohodnoťte každý kandidátsky KPI podľa:
  Fit for purpose  — meria výsledok, alebo zástupnú veličinu niekoľko krokov vzdialenú?
  Appropriate      — patrí ľuďom, ktorí ho môžu skutočne ovplyvniť?
  Balanced         — je spárovaný s protimetrikou, ktorá zachytáva zneužitie?
  Robust           — obstojí pri audite, alebo je len sebahlásený a neoveriteľný?
  Integrated       — zapadá do širšej sady, alebo tlačí proti inému KPI?
  Cost-effective   — nestojí jeho zber viac než rozhodnutie, ktoré informuje?

Rozdelenie na predstihové a oneskorené:
  Predstihový ukazovateľ → predpovedá budúci výsledok, ale často sa dá zneužiť (napr. volania
                            zodpovedané do 60 s)
  Oneskorený ukazovateľ  → potvrdzuje, že výsledok nastal, ale prichádza príliš neskoro na riadenie
                            (napr. ročný prieskum spokojnosti)
  Obhájiteľná sada KPI spája aspoň po jednom z oboch na každý cieľ.
```

## Vypracovaný príklad

**Záchranná služba (trust)**: trust vykazuje KPI reakčného času kategórie A (život ohrozujúce)
„75 % volaní zodpovedaných do 8 minút“. V jednom štvrťroku príde 6 000 volaní kategórie A; 4 500 sa
splní do 8 minút, čo dáva 75,0 %, zdanlivo v cieli.

```
Titulkový KPI = 4 500 / 6 000 × 100 = 75,0 %  (spĺňa prah 75 %)
```

Audit podľa Goodharta však pridá protimetriku: priemerný reakčný čas pre najpomalších 10 % volaní.

```
Priemerná reakcia najpomalšieho decilu = 34 minút (oproti 19 minútam spred dvoch rokov)
```

Trust plní cieľ, kým chvost, teda volania, ktoré sú pri nedokonalej triáži s najväčšou
pravdepodobnosťou skutočne život ohrozujúce, sa výrazne zhoršil, pretože posádky sa uprednostňujú
k volaniam blízko 8-minútového útesu namiesto klinickej naliehavosti. Jediný KPI rozprával nepravdivý
príbeh; spárovaný KPI povedal pravdu.

## Súvislosť so softvérovým inžinierstvom

Inžinieri, ktorí tvoria dashboardy výkonnosti pre vládu, funkčne navrhujú stimulačné API
organizácie. Praktické dôsledky: inštrumentujte *menovateľ* rovnako dôsledne ako čitateľ (KPI
vykazovaný ako holé percento pozýva k manipulácii s menovateľom; rovnakú pascu v digitálnych
službách pozri v téme [náklady na transakciu](../náklady-na-transakciu/)); zabudujte protimetriky do
toho istého dashboardu namiesto samostatnej správy, ktorú nikto nečíta, aby bolo zneužitie viditeľné
v mieste rozhodovania; a verzujte definíciu KPI, pretože tichá redefinícia (zmena toho, čo sa počíta
ako „volanie“, „prípad“ alebo „dokončenie“) je funkčne ekvivalentná zmene cieľa bez oznámenia.
[Skóre verejnej hodnoty](../hodnotiaca-karta-verejnej-hodnoty/) je jeden štruktúrovaný spôsob, ako zabrániť
čítaniu jediného KPI izolovane, a [zodpovednosť založená na výsledkoch](../zodpovednosť-založená-na-výsledkoch/)
je disciplína výberu KPI na úrovni populácie, ktoré jeden tím nemôže jednostranne skresliť.

## Úskalia

- **Výber ľahko zbierateľnej metriky namiesto zmysluplnej**: čas zodpovedania volania sa ľahko
  zaznamenáva; či volanie vyriešilo problém občana, nie, ale len to druhé je výsledok. Odolajte
  predvolenému použitiu toho, čo systém už vydáva.
- **Žiadna protimetrika**: každý KPI viazaný na peniaze alebo povesť sa na okrajoch zneužije;
  dodajte ho so spárovanou metrikou, ktorá zachytí pravdepodobný vektor zneužitia, ešte pred
  zverejnením.
- **Redefinícia metriky bez záznamu zmien**: zámena „prijatých volaní“ za „zodpovedané volania“ na
  prikrášlenie trendu zničí dôveryhodnosť časového radu v okamihu, keď sa to zistí; vždy zverejňujte
  záznam zmien definícií popri číslach.
- **Zámena aktivity s výsledkom**: počet dokončených inšpekcií je výstup; počet priestorov uvedených
  do súladu je bližšie k výsledku (pozri [výsledky a výstupy](../výsledky-a-výstupy/)).

## Zdroje

- National Audit Office, "Choosing the Right FABRIC: A Framework for Performance Information."
  <https://www.nao.org.uk/>
- Marilyn Strathern, "'Improving Ratings': Audit in the British University System," *Social
  Anthropology*, 1997 (formulation of Goodhart's law as commonly cited).
- National Audit Office, investigations into NHS ambulance service performance reporting.
  <https://www.nao.org.uk/>
