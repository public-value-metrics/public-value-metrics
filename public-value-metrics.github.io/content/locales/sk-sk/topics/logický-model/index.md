# Logický model

Logický model je lineárny diagram, ktorý prepája vstupy, aktivity, výstupy, výsledky a dopad programu.
Číta sa zľava doprava ako reťazec zodpovednosti: zdroje vstupujú, aktivity sa vykonávajú, vznikajú
výstupy, u prijímateľov sa mení situácia (výsledky) a dopad sa prejaví v širšom či dlhšom časovom
horizonte. Je to štandardná štruktúra, voči ktorej od programu očakávajú vykazovanie poskytovatelia
financií aj audítori, a výhľadový protiklad spätne mapovanej
[teórie zmeny](../teória-zmeny/).

## Prečo na tom záleží

Magenta Book britského ministerstva financií (HM Treasury) určuje logický model ako povinný prvok
návrhu hodnotenia programu a poskytovatelia financií, ako je National Lottery Community Fund,
stavajú svoje šablóny žiadostí a správ presne na tomto päťstĺpcovom reťazci. Jeho hodnota spočíva
v tom, že núti program vyjadriť na jednom diagrame, čo minie, čo s tým urobí, čo vyprodukuje a
predovšetkým čo sa má v dôsledku toho zmeniť, a to s presnosťou, ktorú odsek prózy zvyčajne
zahmlieva. Logický model s vyplneným stĺpcom vstupov a aktivít, ale s prázdnym alebo vágnym stĺpcom
výsledkov je okamžite rozpoznateľný, a práve preto ho poskytovatelia financií vyžadujú.

## Matematika

Logický model je štrukturálny reťazec, nie vzorec:

```
Vstupy          Aktivity          Výstupy             Výsledky              Dopad
(vyčlenené      (čo sa s nimi     (priame, spočítateľné (zmena pre            (dlhodobá zmena
 zdroje)         robí)             produkty)            prijímateľov)         na úrovni populácie
                                                                               alebo systému)
```

Každý stĺpec má byť konkrétnejší než predchádzajúci: vstupy sú to, čo vynaložíte, aktivity sú to, čo
robíte, výstupy sú to, čo sa dodá bez ohľadu na účinok, výsledky sú to, čo sa v dôsledku toho zmení
(rozdiel podrobne rozoberá téma [výsledky a výstupy](../výsledky-a-výstupy/)) a dopad je trvalá,
často len sčasti pripísateľná dlhodobá zmena.

## Vypracovaný príklad

**Miestna samospráva (digitálna služba dlhového poradenstva)**:

- Vstupy: ročný rozpočet £180 000, 4,0 FTE poradcov, systém na správu prípadov.
- Aktivity: informačné stretnutia, individuálne konzultácie o dlhoch.
- Výstupy: 900 uskutočnených konzultácií; 750 vydaných plánov splácania dlhov a dávok.
- Výsledky: z klientov, ktorí sa dostali k 6-mesačnému následnému kontaktu, 60 % (450 zo 750)
  uvádza nižšie nedoplatky, v priemere o £1 200 na klienta, teda spolu £540 000 zníženia nedoplatkov.
- Dopad: merateľný pokles žiadostí o pomoc pri bezdomovectve v klientskej skupine služby počas
  dvoch rokov, ktorý možno tejto službe pripísať len sčasti popri iných intervenciách (pozri
  [kontrafaktuálnu analýzu](../kontrafaktuálna-analýza/)).

**Charita (partnerstvo na odporúčanie do potravinovej banky)**:

- Vstupy: £45 000, 1,5 FTE koordinátora, dohody o partnerstve so 12 odporúčajúcimi organizáciami.
- Aktivity: triedenie odporúčaní, balenie a distribúcia balíkov.
- Výstupy: 5 000 potravinových balíkov rozdaných 1 100 domácnostiam.
- Výsledky: 68 % opýtaných domácností (748 z 1 100) uvádza pri telefonickom kontakte po 4 týždňoch
  lepšiu potravinovú istotu.
- Dopad: príspevok k nižšiemu dopytu po miestnych krízových službách, doložený len súhrnnými
  štatistikami oblasti a nepripísateľný samotnej tejto charite.

## Súvislosť so softvérovým inžinierstvom

Logický model je takmer doslovný dátový model systému výsledkov: vstupy a aktivity sú prevádzkové
údaje, ktoré už máte (výdavky, personálne obsadenie, záznamy o stretnutiach); výstupy sa dajú ľahko
inštrumentovať, pretože sa počítajú v mieste dodania; výsledky vyžadujú zámerne navrhnuté následné
zber údajov (prieskumy, prepájanie administratívnych údajov), ktoré nevznikne, kým ho niekto
nepostaví; dopad zvyčajne vyžaduje prepojené, longitudinálne alebo populačné údaje mimo systémov
jedného programu. Inžinieri, ktorí vytvárajú nástroje na vykazovanie, by mali tlačiť objednávateľov
k tomu, aby ukazovatele výsledkov a dopadu definovali už pri návrhu, namiesto predvoleného dashboardu
len s výstupmi, lebo to je to, čo podporujú transakčné údaje. Metódu, ktorá oceňuje práve stĺpce
výsledkov a dopadu, popisuje téma [sociálna návratnosť investícií](../sociálna-návratnosť-investície/)
a sledovanie, či sa stĺpec dopadu skutočne naplnil, téma
[realizácia prínosov](../realizácia-prínosov/).

## Úskalia

- **Zastavenie pri výstupoch.** Dashboard, ktorý vykazuje počet konzultácií alebo rozdaných balíkov
  a naznačuje prínos, vykazuje aktivitu, nie výsledky; pozri
  [výsledky a výstupy](../výsledky-a-výstupy/).
- **Chýbajúca uvedená kauzálna väzba medzi stĺpcami.** Logický model uvádza reťazec, ale nie to,
  prečo majú aktivity viesť k výstupom a tie k výsledkom; toto zdôvodnenie patrí do
  [teórie zmeny](../teória-zmeny/) a logický model bez nej v pozadí je neotestovaný.
- **Chápanie ako jednorazového dokumentu k žiadosti.** Logické modely vytvorené len na splnenie
  podmienok žiadosti o financovanie a nikdy neaktualizované prestanú odrážať, čo program skutočne robí.
- **Rozširovanie pripisovania v stĺpci dopadu.** Tvrdenie, že zmenu na úrovni populácie spôsobil
  výlučne jeden program, bez kontrafaktuálu zveličuje, čo dôkazy podporujú.

## Zdroje

- HM Treasury, Magenta Book (2020), Chapter 3. <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, logic model guidance. <https://www.tnlcommunityfund.org.uk/>
- W.K. Kellogg Foundation, "Logic Model Development Guide" (2004). <https://www.wkkf.org/resource-directory/resources/2004/01/logic-model-development-guide>
