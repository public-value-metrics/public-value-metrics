# Sociálna návratnosť investície (SROI)

Sociálna návratnosť investície je rámec na meranie, ocenenie v peniazoch a vykazovanie širokého pojmu hodnoty – sociálnej, environmentálnej a ekonomickej – vyjadreného ako pomer voči investovaným zdrojom, napríklad „£1,44 sociálnej hodnoty na každú investovanú £1“. Bol navrhnutý tak, aby rozšíril logiku finančného účtovníctva na výsledky, ktoré trhy neoceňujú, bez straty účtovnej disciplíny: každé číslo v SROI musí byť dohľadateľné k výsledku definovanému zainteresovanými stranami, k dôkaznej báze a k výslovnej úprave o to, čo by sa stalo aj tak.

## Prečo na tom záleží

SROI spravujú Social Value UK a Social Value International, nástupnícke organizácie siete SROI Network, ktorej „A Guide to Social Return on Investment“ (2012) je dodnes referenčnou metodikou. Rámec stojí na siedmich princípoch – zapojiť zainteresované strany, pochopiť, čo sa mení, oceniť veci, na ktorých záleží, zahrnúť len to, čo je podstatné, nepreháňať tvrdenia, byť transparentný a overiť výsledok – a práve na piatom princípe, „nepreháňať tvrdenia“, väčšina SROI správ v praxi zlyháva. Pomer vzniknutý vynechaním úprav o mŕtvu váhu a atribúciu nie je SROI; je to marketingové číslo v šate SROI. Softvéroví inžinieri, ktorí budujú nástroje na vykazovanie pre charity, sociálne podniky alebo objednávateľov, musia poznať rozdiel, pretože nástroj túto disciplínu buď vynúti, alebo umožní ľahko ju obísť.

## Matematika

SROI sa opiera o [teóriu zmeny](../teória-zmeny/), ktorá určuje, ktoré výsledky patria do rozsahu, a vyjadruje ich pomocou rovnakého reťazca zodpovednosti ako [logický model](../logický-model/):

```
Pomer SROI = súčasná hodnota výsledkov / hodnota vstupov

Postup:
 1. Stanoviť rozsah a identifikovať zainteresované strany, ktorých výsledky sa budú merať
 2. Zmapovať výsledky (teória zmeny doložená spolu so zainteresovanými stranami, nie predpokladaná)
 3. Doložiť výsledky dôkazmi a oceniť ich pomocou finančných proxy ukazovateľov
 4. Stanoviť dopad: hrubá hodnota − mŕtva váha − atribúcia − vytesnenie, potom uplatniť úbytok (drop-off)
 5. Vypočítať SROI: čistá súčasná hodnota dopadu ÷ hodnota vstupov
 6. Vykázať, využiť a zakotviť – pomer je komunikačný nástroj, nie cieľ
```

Mŕtva váha, atribúcia a vytesnenie sú rozobrané v [adicionalite a mŕtvej váhe](../adicionalita-a-mŕtva-váha/) a [vytesnení a atribúcii](../vytesnenie-a-atribúcia/); všetky tri slúžia na izoláciu skutočného [kontrafaktuálneho](../kontrafaktuálna-analýza/) dopadu od hrubého výsledku.

## Vypracovaný príklad

**Program zamestnanosti miestnej samosprávy**: ročné vstupné náklady £250 000. Šesťdesiat účastníkov sa dostane do trvalého zamestnania; finančný proxy ukazovateľ tohto výsledku (zlepšenie pohody a dobrého života, nižšia závislosť od dávok a daňové príjmy dohromady) je £8 500 na osobu za prvý rok – pozri [databázy jednotkových nákladov](../databázy-jednotkových-nákladov/), odkiaľ takéto proxy hodnoty pochádzajú.

- Hrubá hodnota výsledku: 60 × £8 500 = £510 000
- Mínus mŕtva váha (40 % by pravdepodobne našlo prácu aj bez programu): £510 000 × 0,60 = £306 000
- Mínus atribúcia (30 % zostávajúcej zmeny pripadá na podporu iných agentúr): £306 000 × 0,70 = £214 200
- Výsledok 2. roka pri úbytku 30 %: £214 200 × 0,70 = £149 940, diskontovaný sadzbou 3,5 % ročne (pozri
  [sociálnu diskontnú sadzbu](../sociálna-diskontná-sadzba/)): £149 940 ÷ 1,035 = £144 870
- Celková súčasná hodnota dopadu: £214 200 + £144 870 = £359 070
- **Pomer SROI: £359 070 ÷ £250 000 = 1,44**, vykázaný ako „£1,44 sociálnej hodnoty na každú investovanú £1“

**Charita**: služba priateľstva (befriending) za £60 000 zmierňuje osamelosť 80 starších ľudí, ocenenú proxy hodnotou £1 100 na osobu ročne. Hrubá hodnota £88 000; po 35 % mŕtvej váhy a 15 % atribúcie je čistý dopad £88 000 × 0,65 × 0,85 = £48 620, čo je pomer SROI 0,81 – pod bodom zvratu, čo je legitímne a užitočné zistenie, nie zlyhanie, ktoré by sa nemalo zverejniť.

## Súvislosť so softvérovým inžinierstvom

Kalkulačka SROI, ktorá používateľovi umožňuje zadať počty výsledkov a proxy hodnoty, ale nemá povinné pole pre mŕtvu váhu, atribúciu ani prepojenú teóriu zmeny, bude štandardne vytvárať nadsadené pomery, pretože vynechanie úprav je cesta najmenšieho odporu. Vložte disciplínu do schémy: každý riadok výsledku by mal odkazovať na skupinu zainteresovaných strán, doložené množstvo, finančný proxy s uvedeným zdrojom a povinné polia pre mŕtvu váhu a atribúciu. Pozri [výsledky vs. výstupy](../výsledky-a-výstupy/) pre rozlíšenie, od ktorého závisí mapovanie výsledkov v SROI, a [logický model](../logický-model/) pre reťazec, ktorý by mal nástroj zrkadliť vo svojom dátovom modeli.

## Úskalia

- **Vynechanie mŕtvej váhy a atribúcie.** Hlavný pomer bez týchto úprav je hrubé číslo, nie číslo čistého dopadu, a princípy Social Value UK výslovne vyžadujú obe.
- **Porovnávanie pomerov medzi organizáciami.** Pomer SROI závisí od rozsahu a výberu proxy hodnôt, ktoré sa robia prípad od prípadu; považovať pomer 4 : 1 z jednej správy za „lepší“ než 2 : 1 z inej ignoruje, že predpoklady nie sú štandardizované ako v pomere finančného účtovníctva.
- **Dvojité započítanie prekrývajúcich sa proxy hodnôt.** Spojenie proxy „zníženej osamelosti“ s proxy „zlepšeného duševného zdravia a pohody“ pre tých istých príjemcov môže dvakrát oceniť jednu základnú zmenu.
- **Vynechanie zapojenia zainteresovaných strán.** Prvý princíp vyžaduje, aby sa výsledky definovali spolu s ľuďmi, ktorí ich prežívajú, a nie aby ich predpokladal analytik budujúci model.

## Zdroje

- Social Value UK / Social Value International. <https://socialvalueuk.org/>
- The SROI Network, "A Guide to Social Return on Investment" (2012).
- Social Value International, "The Principles of Social Value." <https://www.socialvalueint.org/principles>
