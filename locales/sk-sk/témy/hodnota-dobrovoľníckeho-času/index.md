# Hodnota dobrovoľníckeho času

Hodnota dobrovoľníckeho času je peňažný odhad priradený neplatenej práci, najčastejšie používaný na vyjadrenie skutočnej ekonomickej stopy charity – jej účtovníctva plus práce, ktorú nemusela platiť – alebo na obhajobu tvrdenia, že určitá intervencia je nákladovo efektívnejšia, než naznačuje samotný hotovostný rozpočet. Dominujú dve národné metodiky: odhad americkej organizácie Independent Sector a prístup britského štatistického úradu (ONS) a NCVO – a tú istú hodinu práce oceňujú dosť odlišne.

## Prečo na tom záleží

Každý rok Independent Sector v spolupráci s Do Good Institute na University of Maryland zverejňuje celoštátnu hodinovú hodnotu dobrovoľníckeho času, postavenú na mzdových údajoch Bureau of Labor Statistics – konkrétne na priemernom hodinovom zárobku pracovníkov vo výrobe a nevedúcich pracovníkov v súkromných nepoľnohospodárskych mzdových zoznamoch plus úprave o vedľajšie benefity – a rozčlenenú podľa štátov USA. Jej posledné vydanie stanovilo hodnotu na **$36,14 za hodinu za rok 2025**, čo je nárast o 3,9 % oproti predchádzajúcemu roku, pričom hodnoty na úrovni štátov siahajú od vyše $50 vo Washingtone, D.C., po menej než $20 v Portoriku. V Spojenom kráľovstve ONS samostatne odhadol náklady na nahradenie formálneho dobrovoľníctva na **£14,43 za hodinu** (odhad z roku 2017) a UK Civil Society Almanac 2024 od NCVO využíva údaje o účasti na dobrovoľníctve – približne 14,2 milióna ľudí formálne dobrovoľníčilo v rokoch 2021–22 – na odhad celkového príspevku dobrovoľníctva v sektore na približne **£18 miliárd**, asi 0,8 % HDP Spojeného kráľovstva.

Dôvod, prečo na tom záleží nad rámec účtovnej kozmetiky: program, ktorý sa vo veľkej miere spolieha na dobrovoľnícku prácu, môže vyzerať dramaticky lacnejšie na základe čisto hotovostných [nákladov na výsledok](../náklady-na-výsledok/) než program s platenými zamestnancami, aj keď sú skutočné náklady na zdroje – čo by stálo nahradenie tejto práce – podobné alebo vyššie. Poskytovatelia financií a hodnotitelia, ktorí hodnotu dobrovoľníckeho času ignorujú, systematicky podhodnocujú skutočné náklady modelov dodávky závislých od dobrovoľníkov, čo skresľuje porovnania efektívnosti voči modelom s platenými zamestnancami, ktoré dosahujú ten istý výsledok.

## Matematika

```
Hodnota dobrovoľníckeho času = odpracované dobrovoľnícke hodiny × hodinová sadzba

Výber sadzby záleží a mení odpoveď:
  - Prístup nákladov na nahradenie: mzda plateného pracovníka, ktorý by
    vykonal tú istú úlohu (napr. sadzba nákladov na nahradenie pre kvalifikovaného
    pracovníka s mládežou, nie všeobecná priemerná mzda) – najobhájiteľnejší
    pre oceňovanie konkrétnej úlohy
  - Prístup oportunitných nákladov: vlastná zmeškaná mzda dobrovoľníka –
    najobhájiteľnejší pre ocenenie toho, čoho sa dobrovoľník vzdal
  - Prístup národného priemeru: jediná zmiešaná sadzba Independent Sector alebo ONS –
    najobhájiteľnejší pre hlavné, medzisektorovo porovnateľné údaje
```

Tri prístupy sa môžu pre tú istú hodinu líšiť o veľký násobok (advokát, ktorý je dobrovoľne členom správnej rady, má veľmi odlišnú sadzbu oportunitných nákladov než národný priemer), takže každé uvádzané číslo musí uvádzať, ktorá metóda ho vytvorila.

## Vypracovaný príklad

**Britská charita, prístup národného priemeru**: 5 000 dobrovoľníckych hodín za rok, ocenených na £14,43/hodinu (odhad nákladov na nahradenie od ONS):

```
Hodnota = 5 000 × £14,43 = £72 150
```

Ak hotovostné výdavky charity v tom roku boli £300 000, jej skutočné náklady na zdroje – hotovosť plus dobrovoľnícka práca – sú £372 150, zhruba o 24 % viac, než naznačuje samotné hotovostné číslo. Výpočet nákladov na výsledok používajúci len hotovostných £300 000 podhodnocuje skutočné náklady o rovnakú mieru.

**Americká charita, prístup národného priemeru**: 2 000 dobrovoľníckych hodín ocenených na $36,14/hodinu (vydanie Independent Sector 2025):

```
Hodnota = 2 000 × $36,14 = $72 280
```

**Tá istá americká charita, prístup oportunitných nákladov**: ak sú dobrovoľníkmi neprimerane často dôchodcovia z pôvodne vysokokvalifikovaných profesií s priemerným predchádzajúcim zárobkom $60/hodinu, ocenenie podľa oportunitných nákladov by bolo $120 000 – o dve tretiny viac než číslo z národného priemeru, čo ilustruje, prečo sa metóda musí uviesť.

## Súvislosť so softvérovým inžinierstvom

Systémy, ktoré zaznamenávajú dobrovoľnícke hodiny (nástroje na plánovanie zmien, platformy na správu dobrovoľníkov), by mali zachytávať hodiny na úrovni úlohy alebo roly, nielen súčet, aby sa sadzba nákladov na nahradenie mohla uplatniť podľa roly, a nie jedna plošná sadzba národného priemeru na zmiešanú dobrovoľnícku pracovnú silu (hodina člena správnej rady a hodina stewardingu nie sú ekonomicky rovnocenné). Ukladanie sadzby a použitej metodiky spolu s vypočítanou hodnotou – nielen konečného peňažného čísla – umožňuje následnému vykazovaniu (účtovné závierky, výpočty [sociálnej návratnosti investície](../sociálna-návratnosť-investície/), správy pre poskytovateľov financií) číslo neskôr reprodukovať alebo spochybniť, namiesto toho, aby sa s ním zaobchádzalo ako s nepriehľadnou konštantou. Pozri [náklady na výsledok](../náklady-na-výsledok/) pre to, prečo vynechanie hodnoty dobrovoľníckeho času systematicky podhodnocuje skutočné náklady dodávky.

## Úskalia

- **Použitie jedinej plošnej sadzby pre štrukturálne odlišné role.** Sadzba národnej priemernej mzdy uplatnená na odbornú pro bono hodinu (právnu, finančnú, klinickú) ju drasticky podhodnocuje; sadzbu prispôsobte nahrádzanej role všade tam, kde ide o kvalifikovanú úlohu.
- **Dvojité započítanie voči nákladom na platený personál.** Ak dobrovoľníci nahrádzajú prácu, ktorá by inak bola platená, zabezpečte, aby ocenenie bolo pripočítané k hotovostným výdavkom, nie nanesené na už nafúknutý odhad personálnych nákladov.
- **Citovanie zastaranej sadzby bez dátumu.** Sadzby Independent Sector a ONS sa menia ročne (alebo sa v prípade ONS len periodicky odhadujú nanovo); nedatovaný údaj o hodnote dobrovoľníckeho času v správe je na porovnanie takmer nezmyselný.
- **Považovanie hodnoty dobrovoľníckeho času za fundraisingové aktívum.** Je to úprava nákladového účtovníctva na pochopenie skutočných nákladov na zdroje, nie nové peniaze, ktoré môže charita minúť; ich zámena zavádza správnu radu čítajúcu účtovnú závierku.

## Zdroje

- Independent Sector and the Do Good Institute (University of Maryland), "Value of Volunteer Time." <https://www.independentsector.org/value-of-volunteer-time/>
- Independent Sector, Value of Volunteer Time methodology. <https://independentsector.org/research/value-of-volunteer-time-methodology/>
- NCVO, UK Civil Society Almanac 2024. <https://www.ncvo.org.uk/news-and-insights/news-index/uk-civil-society-almanac-2024/>
- Office for National Statistics, volunteering valuation estimate, as cited in NCVO analysis. <https://www.ncvo.org.uk/>
