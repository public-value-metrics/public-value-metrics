# Index mnohorozmernej chudoby (MPI)

MPI meria chudobu ako prekrývajúce sa deprivácie, ktoré človek zažíva súčasne, v zdraví, vzdelaní a
životnej úrovni, a nie len ako príjem klesajúci pod hranicu. Vyvinula ho Oxford Poverty and Human
Development Initiative (OPHI) spolu so Sabinou Alkire a Jamesom Fosterom a od roku 2010 sa
zverejňuje spoločne s UNDP v každej Správe o ľudskom rozvoji popri
[indexe ľudského rozvoja](../index-ľudského-rozvoja/).

## Prečo na tom záleží

Hranice príjmovej chudoby prehliadajú ľudí, ktorí majú dosť peňažného príjmu, ale chýba im čistá voda,
školstvo alebo zažili smrť dieťaťa, a prehliadajú aj to, že deprivácie sa zhlukujú: domácnosť bez
elektriny má neprimerane vysokú pravdepodobnosť, že jej chýba aj kanalizácia a má podvyživené dieťa.
Metóda Alkire-Foster, na ktorej je MPI postavený, spočíta deprivácie každého človeka v desiatich
ukazovateľoch zoskupených do troch rovnako vážených rozmerov (zdravie, vzdelanie, životná úroveň) a
označí niekoho za „MPI chudobného“ iba vtedy, ak jeho vážené skóre deprivácie prekročí pevný prah,
čím zachytí prekrývanie, ktoré súbor oddelených jednoukazovateľových štatistík zachytiť nemôže. OPHI
zverejňuje úplnú metodiku a údaje po krajinách na
<https://ophi.org.uk/multidimensional-poverty-index/>; globálny MPI, ktorý spravuje spoločne s UNDP,
dnes pokrýva viac ako 110 krajín. Pre softvér určený programom boja proti chudobe (peňažné prevody,
triáž sociálnej starostlivosti, cielenie pomoci) je sada ukazovateľov MPI často to najbližšie k
štandardizovanej schéme deprivácie, ktorú už overili desiatky národných štatistických úradov.

## Matematika

```
10 ukazovateľov, 3 rozmery, každý rozmer s váhou 1/3:

Zdravie (1/3):           výživa (1/6), detská úmrtnosť (1/6)
Vzdelanie (1/3):         roky školskej dochádzky (1/6), školská dochádzka (1/6)
Životná úroveň (1/3):    palivo na varenie, kanalizácia, pitná voda,
                          elektrina, bývanie, majetok (po 1/18)

skóre deprivácie (c) = súčet váh ukazovateľov, v ktorých je človek deprivovaný

človek je „MPI chudobný“, ak c ≥ 1/3 (hranica chudoby, k = 33 %)

H (podiel chudobných) = počet MPI chudobných / celková populácia
A (intenzita)          = priemerné skóre deprivácie len medzi MPI chudobnými

MPI = H × A
```

Keďže MPI násobí *podiel* chudobných tým, *nakoľko* sú chudobní, dva regióny s rovnakým podielom
chudobných môžu mať veľmi odlišné MPI, ak sú deprivácie v jednom z nich závažnejšie. Je to rovnaká
logika „žiadnej substitúcie medzi rozmermi“, aká stojí za geometrickým priemerom HDI.

## Vypracovaný príklad

**Celoštátny prieskum 1 000 ľudí**: 350 sa identifikuje ako mnohorozmerne chudobných (skóre
deprivácie ≥ 33 %). Medzi týmito 350 chudobnými jednotlivcami je priemerné skóre deprivácie 45 %.

```
H = 350 / 1 000               = 0,350
A = 0,45
MPI = H × A = 0,350 × 0,45    = 0,1575
```

**Porovnanie dvoch okresov s rovnakým podielom chudobných**: okres A má H = 0,30 a A = 0,40 (veľa
chudobných, mierne deprivovaných); okres B má H = 0,30 a A = 0,60 (rovnaký počet chudobných, ale
závažnejšie deprivovaných, chýba im naraz elektrina *a* kanalizácia *a* školská dochádzka).

```
MPI_A = 0,30 × 0,40 = 0,120
MPI_B = 0,30 × 0,60 = 0,180
```

Rovnaký podiel chudobných, o 50 % vyšší MPI v okrese B. Systém cielenia založený len na podiele
chudobných by oba okresy zoradil rovnako a prehliadol by, že okres B potrebuje hlbšiu intervenciu.

## Súvislosť so softvérovým inžinierstvom

- Systémy na správu prípadov a posudzovanie nároku pre sociálne programy často už ukladajú niekoľko
  z desiatich ukazovateľov (bývanie, školská dochádzka, zdravotné ukazovatele) v oddelených silách.
  Počítacia metóda Alkire-Foster je hotová schéma na ich spojenie do jedného skóre deprivácie namiesto
  budovania vlastného bodovacieho modelu od nuly.
- Rozdelenie na podiel a intenzitu (H × A) je všeobecne užitočný vzor pre každý dashboard, ktorý
  vykazuje „koľkých sa to týka“ popri „nakoľko vážne“. Zlúčenie oboch do jedného čísla, ako to robia
  surové štatistiky prevalencie, skrýva práve ten prípad, ktorý potrebuje najviac zdrojov.
- Dashboardy ukazovateľov v štýle MPI sa prirodzene dopĺňajú s vykazovaním
  [nákladov na prijímateľa](../náklady-na-prijímateľa/) pre programy boja proti chudobe: náklady na bod
  zníženia MPI sú obhájiteľná jednotka na porovnanie veľmi odlišných intervencií (peňažný prevod
  oproti kanalizačnej infraštruktúre).

## Úskalia

- **Chápanie desiatich ukazovateľov ako univerzálnych.** Globálne ukazovatele MPI od OPHI sú
  kalibrované na medzinárodnú porovnateľnosť; národné MPI (zverejňuje ich mnoho krajín vrátane
  viacerých z južnej Ázie a Afriky) prispôsobujú ukazovatele a váhy miestnemu kontextu a obe verzie
  nie sú priamo porovnateľné.
- **Vykazovanie samotného H.** Podiel chudobných úplne ignoruje intenzitu; vždy uvádzajte alebo
  počítajte popri ňom aj A, alebo samotný MPI.
- **Predpoklad, že MPI chudobní a príjmovo chudobní sú tá istá populácia.** Vlastné krajinné
  prehľady OPHI zvyčajne ukazujú len čiastočný prienik oboch; program cielený len na príjmovo
  chudobných systematicky prehliadne významný podiel mnohorozmerne chudobných.

## Zdroje

- Oxford Poverty and Human Development Initiative. "Multidimensional Poverty Index."
  <https://ophi.org.uk/multidimensional-poverty-index/>
- Alkire S, Foster J. "Counting and Multidimensional Poverty Measurement." Journal of Public
  Economics, 2011.
- UNDP & OPHI. "Global Multidimensional Poverty Index" (annual report).
