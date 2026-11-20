# Náklady oneskorenia vo verejných programoch (CoD)

Náklady oneskorenia (Cost of Delay) sú verejná hodnota stratená za jednotku času, kým programová, servisná alebo systémová zmena *ešte nie je* dodaná. Je to hlavná mostná metrika tejto skupiny tém: prevádza „spustenie sa posunulo o šesť mesiacov“ na libry za týždeň alebo na WELLBY za týždeň, aby sa o oneskorení dalo diskutovať v rovnakej mene ako v samotnom obchodnom prípade.

## Prečo na tom záleží

Reinertsenovo pravidlo, „ak kvantifikujete len jednu vec, kvantifikujte náklady oneskorenia“, sa do verejnej správy prenáša takmer nezmenené, pretože verejné programy sú mu mimoriadne vystavené: obchodné prípady sa schvaľujú voči prognózovanému toku prínosov, no tok sa rozbehne až spustením a každý týždeň sklzu je týždňom zmeškanej hodnoty, ktorý nikto neocení v registri rizík. Opakované kontroly Národného kontrolného úradu (National Audit Office) k zavádzaniu Universal Credit (pozri jeho správy „Rolling Out Universal Credit“, <https://www.nao.org.uk/>) ilustrujú vzorec: sklz harmonogramu sa sledoval a vykazoval, ale náklady v librách za týždeň na to, že reformovaný systém *ešte nebol* dodaný ďalšej vlne žiadateľov, sa len zriedka uvádzali ako hlavné číslo, hoci je to číslo, ktoré malo riadiť stanovenie priorít a eskaláciu. Bez čísla CoD vyzerá oneskorený program ako problém harmonogramu pre dodávateľskú radu, s ním je to problém erózie hodnoty pre zodpovedného úradníka.

## Matematika

```
CoD = prínos za jednotku času zmeškaný, kým nie je dodaný   (£/týždeň alebo WELLBY/týždeň)

Celková strata z oneskorenia = CoD × trvanie oneskorenia

Toky prínosov na sčítanie pre verejné programy:
  úspory uvoľňujúce hotovosť   (zníženie podvodov/chýb, vyhnuté dočasné náklady)
+ nehotovostná uvoľnená kapacita (hodiny referentov/úradníkov × plné náklady)
+ prínos pre blahobyt          (WELLBY × £13 000/WELLBY, doplnkové usmernenie
                                 HMT Green Book o blahobyte, ceny z roku 2019)
```

Pre služby zamerané na občanov vyjadrujte hodnotu popri peniazoch aj v blahobyte. Základnú jednotku nájdete v [rokoch života upravených o blahobyt](../roky-života-upravené-o-pohodu/) a o tom, čo by sa za oneskorenú libru dalo inak financovať, v [nákladoch obetovanej príležitosti vo verejných výdavkoch](../oportunitné-náklady-vo-verejných-výdavkoch/).

## Vypracovaný príklad

**Miestna samospráva**: modernizácia systému dávok na bývanie zníži chybu preplatkov o £150 na žiadosť ročne pri 20 000 aktívnych žiadostiach.

```
Ročný prínos = 150 × 20 000 = £3 000 000 ročne
CoD = 3 000 000 / 52 ≈ £57 700 týždenne
12-mesačné oneskorenie implementácie stojí 52 × 57 700 ≈ £3 000 000 vo vyhnuteľnej chybe.
```

**Agentúra ústrednej vlády**: služba posudzovania dávok pre zdravotne postihnutých, dodaná o šesť mesiacov (26 týždňov) neskôr, než sa plánovalo, znamená, že 200 000 žiadateľov ročne čaká na rozhodnutie v priemere o tri týždne dlhšie. Každý ďalší týždeň finančnej neistoty sa modeluje ako účinok −0,0018 WELLBY (bod životnej spokojnosti):

```
Strata WELLBY na žiadateľa = 3 × 0,0018 = 0,0054
Ročná strata WELLBY = 200 000 × 0,0054 = 1 080 WELLBY ročne
CoD_blahobyt = 1 080 / 52 ≈ 20,8 WELLBY/týždeň
CoD_peniaze = 20,8 × £13 000 ≈ £270 000/týždeň hodnoty blahobytu
```

26-týždňové oneskorenie teda „stojí“ približne 540 WELLBY, čo je podľa hodnotenia blahobytu v Green Book asi 7 miliónov libier, a premieňa zmeškaný termín spustenia na udalosť blahobytu občanov, nie poznámku pod čiarou projektového riadenia.

## Súvislosť so softvérovým inžinierstvom

CoD robí [metriky DORA](../metriky-dora-pre-verejnú-hodnotu/) a [metriky toku](../metriky-toku-pri-vládnej-dodávke/) finančne čitateľnými: čas realizácie v potrubí × CoD sú peniaze (alebo blahobyt) spálené vo frontoch, ešte kým sa vôbec dostanú k občanovi. Konkrétne:

- **Stanovenie priorít**: zoraďte backlog podľa CoD ÷ trvanie, nie podľa seniority zainteresovaných strán, čo je softvérovo-inžiniersky ekvivalent požiadavky Green Book hodnotiť možnosti podľa hodnoty, nie podľa toho, kto sa pýta.
- **Obstarávanie**: 12 – 18-mesačný cyklus obstarávania cez rámcovú dohodu má CoD. Jeho ocenenie mení argument naliehavosti pre zrýchlené cesty a priamo vstupuje do rozhodnutí o [vlastnom vývoji alebo nákupe](../vlastný-vývoj-alebo-nákup-vo-verejnej-správe/), kde je čas do získania hodnoty rozhodovacím faktorom.
- **Prípad prínosov**: každé číslo CoD uvedené pri schválení by sa malo znovu objaviť pri [realizácii prínosov](../realizácia-prínosov/). Ak bola cena oneskorenia reálna, zrýchlený prínos by mal byť po spustení merateľný.

## Úskalia

- **Predpoklad lineárneho CoD**: niektoré verejné služby majú hodnotu tvarovanú termínom (zákonný dátum súladu: CoD po dátume skočí na úroveň rizika presadzovania a pred ním je takmer nulové), nie plynulú týždennú sadzbu. Pred násobením klasifikujte profil naliehavosti.
- **CoD na výstupoch, ktoré nikto nepotrebuje**: oneskorenie má cenu, len ak má nedodaná vec hodnotu. Systém, ktorý nikto nebude používať, má nulový CoD bez ohľadu na to, ako neskoro prichádza.
- **Dvojité započítanie oneskorenia a diskontovania**: [sociálna diskontná sadzba](../sociálna-diskontná-sadzba/) už oceňuje čas na viacročných horizontoch hodnotenia. CoD je jej prevádzková verzia v rámci horizontu pre týždne a mesiace. Použite CoD pre sklz harmonogramu a posun NPV pre viacročné prefázovanie.

## Zdroje

- Reinertsen DG, *The Principles of Product Development Flow*, Celeritas Publishing, 2009.
- HM Treasury, Green Book supplementary guidance: wellbeing. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>
- National Audit Office, reports on Universal Credit rollout. <https://www.nao.org.uk/>
