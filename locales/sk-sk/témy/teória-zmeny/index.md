# Teória zmeny

Teória zmeny je explicitná, spätne mapovaná kauzálna cesta od dlhodobého cieľa k predpokladom a aktivitám, ktoré musia existovať, aby sa cieľ dosiahol, spolu s predpokladmi spájajúcimi každý článok. Zostavuje sa tak, že sa začne výsledkom, ktorý chcete dosiahnuť, a opakovane sa pýtame „čo musí platiť bezprostredne pred týmto, aby sa to stalo?“, až kým sa nedostaneme k aktivitám, ktoré skutočne dokážeme dodať – čo je opačný smer než pri [logickom modeli](../logický-model/) a dôvod, prečo sa tieto dva nástroje dopĺňajú a nie zamieňajú.

## Prečo na tom záleží

Metódu spätného mapovania sformalizovali Center for Theory of Change a ActKnowledge na základe práce evaluátorky Carol Weissovej o explicitnom vyjadrení predpokladov programu, aby sa dali testovať, a nie prijímať na vieru. Britské hodnotenie grantov to priamo prevzalo: Magenta Book ministerstva financií (HM Treasury) považuje teóriu zmeny za východisko každého návrhu hodnotenia a poskytovatelia financií, napríklad National Lottery Community Fund, od žiadateľov vyžadujú, aby ju sformulovali, kým návrh podporia. Dôvod, prečo na tom záleží softvérovému inžinierovi, je, že teória zmeny je dokument, ktorý by mal určovať, čo má váš systém merať – ak kauzálny reťazec hovorí, že „využitie dávok závisí od toho, že žiadatelia dostanú personalizovaný výpočet“, je to testovateľné tvrdenie, pre ktoré môže váš produkt zbierať dôkazy alebo ho vyvrátiť.

## Matematika

Teória zmeny je skôr štrukturálna než číselná. Každý článok by mal niesť predpoklad aj ukazovateľ, ktorý by mohol ukázať, že predpoklad neplatí:

```
Dlhodobý výsledok (cieľ)
  ↑ predpoklad (precondition) + domnienka (assumption) + ukazovateľ
Medzivýsledok N
  ↑ predpoklad (precondition) + domnienka (assumption) + ukazovateľ
  ...
Medzivýsledok 1
  ↑ predpoklad (precondition) + domnienka (assumption) + ukazovateľ
Aktivity / intervencie
  ↑ vyčlenené zdroje
Vstupy
```

Táto štruktúra priamo vstupuje do [metód hodnotenia dopadu](../metódy-hodnotenia-dopadu/), ktoré slúžia na testovanie, či domnienky pri každom článku skutočne platia, a do [kontrafaktuálnej analýzy](../kontrafaktuálna-analýza/), ktorá testuje, či by dlhodobý výsledok nastal aj tak.

## Vypracovaný príklad

**Miestna samospráva (prevencia bezdomovectva)**: dlhodobým výsledkom je udržané nájomné bývanie po 12 mesiacoch pre domácnosti ohrozené vysťahovaním.

- Podmienka: domácnosti majú realistický, dostupný plán splácania nedoplatkov.
  Domnienka: plány dohodnuté s prípadovým pracovníkom sú udržateľnejšie než súdom nariadené.
  Ukazovateľ: % plánov, ktoré sú po 6 mesiacoch stále aktívne.
- Podmienka: domácnosti si uplatňujú dávky, na ktoré majú nárok.
  Domnienka: digitálna kalkulačka dávok zvyšuje počet správne podaných žiadostí oproti papierovým formulárom.
  Ukazovateľ: miera presnosti žiadostí, porovnaná pred nasadením nástroja a po ňom.
- Aktivity: triáž prípadovým pracovníkom, digitálna kalkulačka dávok, rokovanie o nedoplatkoch.

V pilotnej kohorte 120 domácností sa domnienka o kalkulačke dávok potvrdila pre 102 domácností (85 %), ktoré si potom uplatnili dávky správne, čo doložilo následné hodnotenie procesu – a programový tím tak získal dôkaz pre tento konkrétny článok namiesto jediného celkového tvrdenia o zabránenom bezdomovectve.

**Charita (mentoring mládeže)**: dlhodobým výsledkom je nižší počet vylúčení zo školy. Spätne mapované predpoklady: lepšia regulácia emócií → dôverný vzťah s mentorom jeden na jedného → pravidelný týždenný kontakt počas dvoch trimestrov. Teória výslovne uvádza, že nesplnenie podmienky „pravidelný týždenný kontakt“ (povedzme pre fluktuáciu mentorov) predpovedá, že výsledok nenastane, čo je testovateľné, vyvrátiteľné tvrdenie, nie nádej.

## Súvislosť so softvérovým inžinierstvom

Teória zmeny by mala formovať dátový model produktu skôr, než sa postaví jediný dashboard: určite, ktoré články potrebujú ukazovateľ, a zbierajte údaje práve pre ne, namiesto predvolene toho, čo sa dá zaznamenať najľahšie. Zároveň disciplinuje rozhovory o plánoch – funkcia, ktorá sa nezobrazuje na žiadny článok reťazca, sa zjavne nevyplatí budovať. Pozri [logický model](../logický-model/) pre dopredu orientovaný reťazec zodpovednosti, ktorý vzniká po dohode o teórii, [sociálnu návratnosť investície](../sociálna-návratnosť-investície/) pre metódu, ktorá na teórii zmeny závisí pri vymedzení výsledkov na ocenenie, a [výsledky vs. výstupy](../výsledky-a-výstupy/) pre rozlíšenie, od ktorého závisia články medzivýsledkov.

## Úskalia

- **Zámena s logickým modelom.** Teória zmeny je kauzálna a vysvetľujúca (prečo veríme, že to funguje); logický model je sekvenčný a opisný (čo sa deje v akom poradí). Vytvorenie len jedného necháva chýbať buď „prečo“, alebo stopu zodpovednosti.
- **Ponechanie domnienok implicitných.** Celá hodnota spätného mapovania je vo vynesení testovateľných domnienok; teória zmeny, ktorá len vymenúva políčka a šípky bez pomenovania toho, čo by mohlo každý článok vyvrátiť, je dekorácia.
- **Zostavenie raz a odloženie.** Teória zmeny napísaná pre žiadosť o financovanie a nikdy sa k nej nevrátiť prestáva byť užitočná v okamihu, keď dôkazy začnú niektorý článok vyvracať.
- **Vynechanie vstupu zainteresovaných strán.** Teória zmeny zostavená výlučne objednávateľmi bez vstupu zamestnancov v prvej línii alebo príjemcov má sklon kódovať domnienky, ktorým nikto z tých, čo službu poskytujú, skutočne neverí.

## Zdroje

- Center for Theory of Change. <https://www.theoryofchange.org/>
- ActKnowledge. <https://www.actknowledge.org/>
- HM Treasury, Magenta Book (2020), Chapter 3. <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, theory of change guidance. <https://www.tnlcommunityfund.org.uk/>
