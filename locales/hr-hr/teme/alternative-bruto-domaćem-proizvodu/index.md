# Alternative bruto domaćem proizvodu

Alternative bruto domaćem proizvodu (BDP-u) su metrike izrađene da obuhvate ono što BDP strukturno ignorira: neplaćeni rad skrbi, iscrpljivanje okoliša, raspodjelu dohotka i poboljšava li rast doista živote. Najpoznatiji su Genuine Progress Indicator (GPI, pokazatelj stvarnog napretka) i Indeks bruto nacionalne sreće (Gross National Happiness, GNH) Butana; argument za njihovo ozbiljno shvaćanje najutjecajnije je iznijela Komisija Stiglitz-Sen-Fitoussi 2009. godine. Za inženjere koji grade nadzorne ploče ili sustave KPI-jeva državne uprave „koji broj računamo kao napredak” oblikovna je odluka sa stvarnim posljedicama za to što će se financirati.

## Zašto je važno

Simon Kuznets, koji je tridesetih godina 20. stoljeća izradio američke nacionalne račune, upozorio je Kongres 1934. da se „blagostanje jednog naroda teško može zaključiti iz mjerenja nacionalnog dohotka”, a taj je oprez pokazatelj gotovo odmah nadrastao. BDP uračunava čišćenje naftne mrlje kao rast, a neplaćenu skrb roditelja o djetetu kao ništa; ne razlikuje potrošnju koja gradi trajno blagostanje od potrošnje koja samo nadoknađuje već nanesenu štetu. Komisija Stiglitz-Sen-Fitoussi, koju je sazvao francuski predsjednik Nicolas Sarkozy, a predsjedali su joj Joseph Stiglitz, Amartya Sen i Jean-Paul Fitoussi, izvijestila je 2009. da statistički sustavi trebaju pomaknuti naglasak „s mjerenja gospodarske proizvodnje na mjerenje blagostanja ljudi” te da održivost treba pratiti zasebno od sadašnjeg blagostanja, a ne je utopiti u jedan broj. Alternative BDP-u operacionaliziraju tu preporuku. GPI, koji je 1990-ih razvio think tank Redefining Progress, a nadovezuje se na Measure of Economic Welfare Williama Nordhausa i Jamesa Tobina iz 1972., polazi od osobne potrošnje (kao BDP), zatim dodaje netržišne koristi koje BDP izostavlja (kućanski rad, volontiranje), a oduzima obrambene troškove i troškove iscrpljivanja (kriminal, onečišćenje, putovanje na posao, trošenje resursa) koje BDP pogrešno broji kao pozitivne. Indeks GNH Butana, koji vodi GNH Centre Bhutan (<https://www.gnhcentre.bt/>), ide još dalje i zamjenjuje rast kao ustavni cilj zemlje: agregira 33 pokazatelja u 9 domena (psihološko blagostanje, zdravlje, obrazovanje, korištenje vremena, kulturna raznolikost, upravljanje, vitalnost zajednice, ekološka raznolikost i životni standard) u jedinstvenu ocjenu temeljenu na dostatnosti, koja se izravno koristi za provjeru prijedloga državnih politika.

## Matematika

```
GPI = personal consumption expenditure
      + non-market benefits (household labour, volunteering, higher education)
      − defensive and social costs (crime, pollution, commuting, family breakdown)
      − depletion of natural and social capital (resource drawdown, farmland loss)

GNH sufficiency score, per domain:
  a person is "sufficient" in a domain once they clear its threshold on each indicator
  Happiness Index = (% of population sufficient in ≥ 6 of 9 domains)
                    + (weighted average shortfall of the "not-yet-happy" minority)
```

## Primjer iz prakse

**Regija, GPI**: osobna potrošnja iznosi $50 mlrd. Dodajte procijenjenu vrijednost kućanskog i volonterskog rada od $12 mlrd. (nadnice po trošku zamjene, vidi [vrijednost volonterskog vremena](../vrijednost-volonterskog-vremena/)). Oduzmite procijenjene godišnje troškove prometnih gužvi pri putovanju na posao ($3 mlrd.), kriminala ($4 mlrd.) i dugoročnog iscrpljivanja resursa ($6 mlrd.):

```
GPI = 50 + 12 − 3 − 4 − 6 = 49 ($bn)
```

Ako je BDP te godine porastao s $50 mlrd. na $55 mlrd. (+10 %), ali su obrambeni troškovi i troškovi iscrpljivanja rasli brže od potrošnje, GPI može pasti iako BDP raste: „hipoteza praga” koju istraživači GPI-ja navode za visokodohodovna gospodarstva otprilike od 1970-ih, kada je rast nastavio rasti, a GPI stagnirao.

**Građanin, GNH**: ispitanik prelazi prag dostatnosti u 7 od 9 domena (zdravlje, obrazovanje, životni standard, vitalnost zajednice, kulturna raznolikost, ekološka raznolikost, korištenje vremena), ali zaostaje u psihološkom blagostanju i upravljanju. Budući da je 7 ≥ 6, u broju stanovnika računa se kao „sretan”; indeks zasebno prati dubinu njegovih dvaju zaostataka kako se tijesan prolaz ne bi nerazlučivo izjednačio s udobnim.

## Veza s programskim inženjerstvom

- Nadzorna ploča KPI-jeva modelirana samo na propusnosti ili potrošnji (obrazac BDP-a) sustavno će propustiti štetu nastalu stvaranjem te propusnosti: broj tiketa podrške tretiran kao „angažman”, a ne kao „nevolja korisnika”, softverska je inačica brojanja naftne mrlje kao rasta.
- Računovodstvo u stilu GPI-ja koristan je obrazac revizije za svaki skup [KPI-jeva javnog sektora](../ključni-pokazatelji-uspješnosti-u-javnom-sektoru/): za svaku glavnu metriku izlaza pitajte koji obrambeni trošak tiho stvara (ponovni rad, odgovor na incidente, izgaranje) i oduzmite ga, kao što GPI oduzima obrambenu potrošnju od potrošnje.
- Metoda dostatnosti po domenama u GNH-u (prolazi/ne prolazi po dimenziji, zatim agregacija) strukturno je ista tehnika kao [višekriterijska analiza odlučivanja](../višekriterijska-analiza-odlučivanja/) i vrijedi je ponovno koristiti gdje bi jedinstvena skalarna ocjena sakrila kritičnu dimenziju neuspjeha.

## Zamke

- **Tretiranje GPI-ja kao preciznog nacionalnog računa**: za razliku od BDP-a, GPI nema jedinstvenu standardiziranu metodologiju; različite studije različito ponderiraju troškove putovanja na posao, volontersko vrijeme ili iscrpljivanje resursa, pa su usporedbe GPI-ja među studijama daleko manje pouzdane od usporedbi BDP-a među zemljama.
- **Prenošenje GNH-a u cijelosti u drugu političku kulturu**: njegovi ponderi domena i pragovi dostatnosti utvrđeni su savjetovanjem u Butanu; kopiranje broja bez temeljnog procesa savjetovanja daje praznu metriku kojoj nitko ne vjeruje.
- **Pretpostavka da alternativa BDP-u zamjenjuje analizu troškova i koristi**: to su dijagnostički pokazatelji na razini cijelog gospodarstva, a ne alati odlučivanja za pojedinačni program; za to koristite [društvenu analizu troškova i koristi](../društvena-analiza-troškova-i-koristi/).

## Izvori

- Stiglitz JE, Sen A, Fitoussi J-P. "Report by the Commission on the Measurement of Economic
  Performance and Social Progress." (2009) <https://ec.europa.eu/eurostat/documents/118025/118123/Fitoussi+Commission+report>
- GNH Centre Bhutan. <https://www.gnhcentre.bt/>
- Redefining Progress. "The Genuine Progress Indicator: A Tool for Sustainable Development."
- Nordhaus WD, Tobin J. "Is Growth Obsolete?" (1972), NBER.
