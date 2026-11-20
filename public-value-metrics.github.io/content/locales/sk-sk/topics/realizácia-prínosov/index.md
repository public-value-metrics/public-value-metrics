# Realizácia prínosov

Riadenie realizácie prínosov je disciplína identifikácie, stanovenia východiskového stavu, sledovania a *preukazovania*, že prínosy sľúbené v obchodnom prípade sa po spustení skutočne dostavili. Vo verejných investíciách Spojeného kráľovstva je súčasťou modelu piatich prípadov (Five Case Model) z Green Book ministerstva financií (HM Treasury) a osobitného usmernenia o riadení prínosov od Infrastructure and Projects Authority. Bez nej zostane tvrdenie „systém ušetril referentom tridsať minút na žiadosť“ naveky neauditovaným tvrdením.

## Prečo na tom záleží

Obchodné prípady sú sľuby, realizácia prínosov je audit. Green Book vyžaduje, aby každý výdavkový prípad obstál v piatich testoch: strategickom, ekonomickom, komerčnom, finančnom a manažérskom. Manažérsky prípad musí *pred schválením* stanoviť, ako sa prínosy zrealizujú: určení vlastníci, zachytený východiskový stav a pevné termíny merania. Príručka Infrastructure and Projects Authority (IPA), *Benefits Management: A Guide to Realizing Benefits for Government Major Projects* (<https://www.gov.uk/government/publications/benefits-management-a-guide-to-realizing-benefits-for-government-major-projects>), vznikla preto, že vlastné portfóliové správy IPA o Government Major Projects Portfolio opakovane zistili, že dôvera v dodanie a realizácia prínosov patria medzi opakujúce sa slabiny veľkých programov. Projekt sa môže uzavrieť „včas a v rámci rozpočtu“ podľa svojich dodávateľských míľnikov, a pritom nezrealizovať prínosy, ktoré odôvodnili vynaloženie peňazí. Usmernenie IPA toto rozlíšenie považuje za celý zmysel disciplíny.

## Matematika

```
Miera realizácie = zrealizované prínosy / prognózované prínosy   (na prínos, na obdobie)

Mechanizmy, vďaka ktorým sa to dá vypočítať:
  východiskový stav zachytený PRED spustením (inak sa zmena nedá zmerať)
  každý prínos: určený vlastník, metrika, zdroj údajov, harmonogram merania
  prognóza upravená o optimistické skreslenie pri posúdení (mandát Green Book)
  prínosy rozlíšené na uvoľňujúce hotovosť / uvoľňujúce kapacitu / kvalitatívne,
  sledované a vykazované osobitne
```

## Vypracovaný príklad

**Miestna samospráva**: obchodný prípad digitálneho portálu na stavebné konanie sľuboval ročne: £300 000 zníženia nákladov na tlač a poštovné (hotovosť), 4 500 uvoľnených hodín úradníkov (kapacita) a vyššiu spokojnosť žiadateľov (kvalitatívne). Dvanásť mesiacov po spustení:

```
Prínos            Prognóza   Realita    Miera  Dôkaz
Úspory hotovosti  £300 000   £210 000   70 %   finančná kniha oproti základnému roku
Hodiny úradníkov  4 500      3 200      71 %   vzorka meraní času a pohybov
Spokojnosť        +8 b. b.   +11 b. b.  138 %  údaje z prieskumu medzi žiadateľmi

Kroky z preskúmania (zmysel realizácie prínosov):
nedostatok hotovosti sa dá vystopovať do dvoch oblastí služieb, ktoré
stále vybavujú papierové žiadosti ako výnimku → uzavrieť výnimkovú cestu;
korekcia optimistického skreslenia v ďalšom obchodnom prípade sa zvýšila
z 10 % na 25 % na základe chyby prognózy z tohto prípadu.
```

Miera realizácie 70 % nie je zlyhanie, je to poznatok, vďaka ktorému bude ďalšia prognóza lepšie kalibrovaná. Nemeraný prípad by tvrdil 100 % naveky a finančné oddelenie by nemalo žiadny základ na jeho spochybnenie.

## Súvislosť so softvérovým inžinierstvom

Inžinierske organizácie bežne schvaľujú investície do platforiem a nástrojov na základe prognózovaného prínosu a takmer nikdy ich následne neauditujú, čo je presne patológia, ktorú má riadenie realizácie prínosov odstraňovať. Odľahčený prenos: každý návrh nad prahom významnosti určí vlastníka prínosu, základnú metriku a pevný dátum preskúmania (zvyčajne šesť mesiacov po spustení) a miery realizácie z minulých návrhov by mali znižovať dôveru organizácie v ďalšiu prognózu tímu alebo dodávateľa. Tým sa uzatvára slučka späť k [hodnoteniu podľa Green Book](../hodnotenie-podľa-green-book/), ktoré stanovuje prognózu, čo táto disciplína audituje. Je to rovnaká logika, ako stojí za často uvádzaným zistením, že veľká väčšina pilotov generatívnej UI nevykazuje merateľnú návratnosť (pozri [produktivitu UI vo verejnom sektore](../produktivita-umelej-inteligencie-vo-verejnom-sektore/)), pretože piloty, ktoré hodnotu *priniesli*, boli takmer bez výnimky tie, ktoré mali od začiatku určený, sledovateľný riadok prínosu. Závisí to aj od rozlíšenia toho, čo sa skutočne dodalo, od toho, čo sa skutočne zrealizovalo, pozri [výsledky a výstupy](../výsledky-a-výstupy/).

## Úskalia

- **Žiadny východiskový stav pred spustením**: osudové, neopraviteľné opomenutie. Bez neho sa miera realizácie nikdy nedá vypočítať, len tvrdiť.
- **Osirelé prínosy**: prínos bez určeného vlastníka nemá nikoho, kto by zbieral údaje, a každé portfóliové preskúmanie ho štandardne vykazuje ako „vo všeobecnosti na dobrej ceste“.
- **Dvojité započítanie prínosov naprieč portfóliom programov**: dva projekty si obe nárokujú tú istú uvoľnenú kapacitu referentov ako svoj prínos. Na odhalenie vedie jeden register prínosov pre celé portfólio.
- **Divadlo realizácie**: meranie a výrazné vykazovanie ľahkých kvalitatívnych úspechov, zatiaľ čo riadky hotovosti a kapacity zostávajú potichu neskúmané.
- **Zámena dodania s realizáciou**: projekt, ktorý uzatvára míľniky „včas a v rámci rozpočtu“, nič nehovorí o tom, či sa prognózovaný prínos vôbec dostavil. Usmernenie IPA to považuje za dve samostatné otázky s dvoma samostatnými dôkaznými stopami.

## Zdroje

- HM Treasury, Green Book and Five Case Model guidance. <https://www.gov.uk/government/collections/the-green-book-and-accompanying-guidance-and-documents>
- Infrastructure and Projects Authority, *Benefits Management: A Guide to Realizing Benefits for Government Major Projects*. <https://www.gov.uk/government/publications/benefits-management-a-guide-to-realizing-benefits-for-government-major-projects>
- Infrastructure and Projects Authority, Annual Report on the Government Major Projects Portfolio. <https://www.gov.uk/government/collections/infrastructure-and-projects-authority-annual-report>
