# Nákladová efektívnosť v efektívnom altruizme

Uvažovanie o nákladovej efektívnosti v efektívnom altruizme (EA) radí charitatívne intervencie podľa množstva dobra (najčastejšie vyjadreného ako zachránené životy alebo získané zdravie na jeden minutý dolár) a smeruje peniaze k intervencii, ktorá na okraji kúpi najviac dobra. GiveWell je najvplyvnejším praktikom tejto oblasti: zverejňuje explicitné, aktualizované odhady nákladov na jeden zachránený život a nákladov na jeden výsledok pre krátky zoznam „top charít“ a odporúča darcom prispievať tej, ktorá má momentálne priestor pre ďalšie financovanie pri najlepšom pomere.

## Prečo na tom záleží

GiveWell uvádza nákladovú efektívnosť ako hlavné kritérium vo svojej zverejnenej metodike: hľadá intervencie podložené dôkazmi, odhaduje ich nákladovú efektívnosť v spoločnej jednotke a radí na tejto jedinej osi úplne nesúvisiace oblasti: siete proti malárii, suplementáciu vitamínu A, hotovostné transfery, platby ako stimul k očkovaniu. Je to priamy import uvažovania v štýle QALY/DALY zo zdravotníckej ekonómie do filantropie: tak ako zdravotný systém sa pýta „koľko QALY na libru na okraji“, GiveWell sa pýta „koľko životov alebo rokov života na dolár na okraji“ a po prevode do tejto spoločnej jednotky považuje oblasti za zameniteľné. Verejnosektorového príbuzného tohto rámca pozri v [analýze nákladovej efektívnosti vo vláde](../analýza-nákladovej-efektívnosti-vo-verejnej-správe/).

Najcitovanejší údaj GiveWell sa týka Against Malaria Foundation (AMF), ktorá distribuuje siete ošetrené insekticídom. V zverejnenom riešenom príklade GiveWell (z údajov o financovaní z roku 2020) približne $4 500 zafinancovalo dostatok sietí na odvrátenie jedného úmrtia, po zohľadnení nedokonalého používania sietí, základnej úmrtnosti bez sietí a úpravy o funging, teda možnosť, že by AMF časť týchto peňazí dostala od iných darcov tak či tak. GiveWell výslovne uvádza, že tento údaj sa časom a naprieč geografiou mení spolu s výskytom malárie, nákladmi na siete a medzerami vo financovaní a že náklady na záchranu života sa vo všeobecnosti očakávajú rastúce, keďže najlacnejšie príležitosti sa využijú ako prvé; je to ilustrácia metódy, nie pevná cena.

## Matematika

```
Nákladová efektívnosť = Náklady intervencie / Jednotky vytvoreného dobra
                        (napr. $ na zachránený život, $ na odvrátené DALY, $ na QALY)

Reťazec GiveWell pre program sietí, ilustračne:
  $ na jednu zakúpenú a doručenú sieť
    ÷ podiel sietí, ktoré sa skutočne používajú
    ÷ počet chránených ľudí na sieť
    × základná ročná úmrtnosť bez sietí
    × zníženie úmrtnosti pripísateľné používaniu sietí (z dôkazov z RCT)
    × roky ochrany na jednu sieť
    ÷ úprava o funging (peniaze vytesňujúce financovanie od iných darcov)
  = $ na zachránený život (očistené o kontrafaktuálne efekty financovania)
```

Tento reťazec je dôležitý, lebo každý krok je miestom, kde odhady nákladovej efektívnosti bežne zlyhávajú (pozri úskalia nižšie), a lebo ukazuje, že „náklady na zachránený život“ nikdy nie sú surová pozorovaná cena, ale modelovaný odhad zložený z viacerých osobitne neistých vstupov.

## Vypracovaný príklad

Dve hypotetické intervencie, obe podložené dôkazmi, súťažiace o tých istých marginálnych £100 000:

- **Siete proti malárii (štýl AMF)**: zhruba $4 500 na zachránený život podľa zverejneného riešeného príkladu GiveWell z údajov z roku 2020, teda veľmi zhruba 20 zachránených životov na £100 000 v závislosti od použitého výmenného kurzu a roka.
- **Program odčervenia**: žiadny hodnoverný prínos pre úmrtnosť, ale silné dôkazy o dlhodobom náraste príjmov vďaka odčerveniu v detstve; GiveWell ho oceňuje v termínoch nárastu príjmu, nie zachránených životov, čo sťažuje priame porovnanie so sieťami bez spoločnej jednotky. GiveWell používa explicitný rámec „morálnych váh“ na prevod oboch do jednej internej jednotky na účely radenia.

Disciplína metódy EA spočíva v tom, že toto porovnanie vynúti na svetlo, namiesto financovania oboch len preto, že „znejú dobre“. Pozri [sociálnu návratnosť investícií](../sociálna-návratnosť-investície/), ekvivalentný nátlakový nástroj, ktorý používajú britské sociálne podniky a miestni objednávatelia: kladie tú istú otázku (aká je najlepšia návratnosť na libru), len v idióme speňaženej hodnoty namiesto idiómu životov/DALY.

## Súvislosť so softvérovým inžinierstvom

Inžinieri, ktorí budujú darcovské platformy, nástroje na párovanie grantov alebo dashboardy dopadu pre financujúcich zameraných na EA (Open Philanthropy, samotný GiveWell, platformy efektívneho darovania ako Giving What We Can), musia reprezentovať odhady nákladovej efektívnosti ako rozpätia s uvedenými predpokladmi, nie ako jednotlivé čísla: podkladový model má viacero násobných neistých vstupov a zrútenie na jedno číslo na dashboarde skresľuje istotu, ktorú uvádza sám GiveWell. Každý odhad verzujte podľa dátumu zverejnenia; GiveWell svoje čísla prepočítava, niekedy podstatne, keď prídu nové dôkazy z RCT alebo údaje o medzerách vo financovaní, a platforma, ktorá si uloží starý údaj do cache, sa potichu stane nesprávnou.

## Úskalia

- **Považovanie odhadu nákladovej efektívnosti za pevnú cenu.** Je to výstup modelu s viacerými neistými násobnými vstupmi (miera používania, základná úmrtnosť, úprava o funging); uveďte dátum a verziu.
- **Ignorovanie fungingu/vytesnenia.** Financovanie organizácie, ktorá by tie isté peniaze dostala od iného darcu tak či tak, kúpi menej kontrafaktuálneho dobra, než naznačuje titulok; pozri [dodatočnosť a mŕtva váha](../adicionalita-a-mŕtva-váha/) a [vytesnenie a atribúcia](../vytesnenie-a-atribúcia/).
- **Porovnávanie naprieč nezlučiteľnými jednotkami bez prevodu.** „Zachránené životy“ a „získaný príjem“ nie sú priamo porovnateľné bez explicitného rámca morálnych váh; prezentovať ich vedľa seba, ako by boli, je kategoriálna chyba.
- **Tunelové videnie oblasti príčin.** Radenie len v rámci jednej oblasti (napr. len charity globálneho zdravia) a označenie víťaza za „najnákladovo efektívnejšiu charitu“ nadsadzuje tvrdenie; medzioblastné radenie GiveWell je zámerne úzke (globálne zdravie a blahobyt), nie univerzálne.

## Zdroje

- GiveWell, "Our criteria." <https://www.givewell.org/how-we-work/our-criteria>
- GiveWell, "How Much Does It Cost to Save a Life?" (February 2024 version). <https://www.givewell.org/how-much-does-it-cost-to-save-a-life/february-2024-version>
- GiveWell, Against Malaria Foundation review. <https://www.givewell.org/charities/amf>
- Giving What We Can, on cost-effectiveness across causes. <https://www.givingwhatwecan.org/>
