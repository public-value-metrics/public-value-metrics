# Medzigeneračná spravodlivosť a diskontovanie udržateľnosti

Diskontovanie budúcich nákladov a prínosov na súčasnú hodnotu je štandardnou praxou vo verejnom hodnotení (pozri [sociálnu diskontnú sadzbu](../sociálna-diskontná-sadzba/)), ale každá kladná diskontná sadzba, zložená počas desaťročí či storočí, zmenšuje vzdialenú budúcnosť v dnešných termínoch k nule. Pri rozhodnutiach s následkami za sto a viac rokov (zmena klímy, jadrový odpad, strata biodiverzity, udržateľnosť dôchodkov) sa tento matematický fakt stáva etickým: štandardné diskontovanie môže spôsobiť, že katastrofálna škoda budúcim generáciám sa v termínoch súčasnej hodnoty zdá sotva hodná odvrátenia.

## Prečo na tom záleží

Ramseyho rovnica, ktorú odvodil Frank Ramsey v roku 1928, rozkladá diskontnú sadzbu na dve zložky: čistú časovú preferenciu (δ, ako veľmi jednoducho uprednostňujeme teraz pred neskôr, nezávisle od bohatstva) a efekt rastu bohatstva (η×g, ako veľmi diskontujeme preto, že budúce generácie budú podľa očakávania bohatšie, takže ďalšia libra je pre ne menej dôležitá). Štandardná dlhodobá diskontná sadzba Green Book je postavená na tejto rovnici a sleduje *klesajúci* harmonogram namiesto jednej pevnej sadzby; návrh vychádza z práce Martina Weitzmana o „gama diskontovaní“, ktorá ukazuje, že keď je samotná budúca diskontná sadzba neistá, sadzba ekvivalentná istote, ktorú treba použiť, matematicky v čase klesá, pretože scenáre s nízkou sadzbou dominujú čím ďalej sa pozeráme. Stern Review o ekonomike zmeny klímy (2006), ktorú viedol sir Nicholas Stern, posunul etickú debatu ďalej: Stern argumentoval, že čistá časová preferencia sa má nastaviť blízko nuly (použil δ ≈ 0,1 %, odrážajúcu len malú pravdepodobnosť katastrofy ukončujúcej civilizáciu, nie skutočnú preferenciu prítomnosti pred budúcnosťou), čo dáva oveľa nižšiu efektívnu diskontnú sadzbu než konvenčná prax Green Book a zodpovedajúco oveľa väčší súčasný argument pre klimatické opatrenia. Kritici (predovšetkým William Nordhaus) argumentovali, že Sternova takmer nulová sadzba je eticky obhájiteľná, no nezlučiteľná s reálne pozorovaným správaním pri úsporách a investíciách. Nesúhlas nie je technická poznámka pod čiarou: je to najväčší jediný dôvod, prečo dvaja rovnako rigorózni ekonómovia dospejú k diametrálne odlišným záverom o tom, koľko sa má súčasná generácia obetovať pre budúcnosť, a dôvod, prečo softvér podporujúci dlhodobé hodnotenie verejných investícií musí svoje diskontné predpoklady odkryť, namiesto toho, aby ich zakopal do predvoľby v tabuľke.

## Matematika

```
Ramseyho rovnica:   r = δ + η × g

  r = sociálna diskontná sadzba
  δ = čistá časová preferencia (miera netrpezlivosti, nezávislá od bohatstva)
  η = elasticita medzného úžitku spotreby (klesajúca hodnota
      dodatočnej spotreby, keď ľudia bohatnú)
  g = očakávaná miera rastu spotreby na obyvateľa

Klesajúci dlhodobý harmonogram Green Book (približne, aktuálne zverejnené pásma):
  Roky 0 – 30:     3,5 %
  Roky 31 – 75:    3,0 %
  Roky 76 – 125:   2,5 %
  Roky 126 – 200:  2,0 %
  Roky 201 – 300:  1,5 %
  Roky 301+:       1,0 %

Parametre Stern Review: δ ≈ 0,1 %, η = 1, g ≈ 1,3 %  → r ≈ 1,4 %
```

## Vypracovaný príklad

**Súčasná hodnota £1 odvrátenej škody o 100 rokov** pri troch diskontných režimoch:

```
Pevná krátkodobá sadzba Green Book (3,5 %, konštantná 100 rokov):
  PV = 1 / (1,035)^100 ≈ 1 / 31,19 ≈ £0,032   (3,2 pence)

Klesajúci harmonogram Green Book (3,5 % pre roky 1 – 30, 3,0 % pre roky 31 – 75,
2,5 % pre roky 76 – 100):
  faktor(1 – 30)   = 1,035^30  ≈ 2,807
  faktor(31 – 75)  = 1,03^45   ≈ 3,782
  faktor(76 – 100) = 1,025^25  ≈ 1,854
  celkový faktor ≈ 2,807 × 3,782 × 1,854 ≈ 19,68
  PV = 1 / 19,68 ≈ £0,051   (5,1 pence)

Takmer nulová čistá časová preferencia v štýle Sterna (r ≈ 1,4 % pevne):
  PV = 1 / (1,014)^100 ≈ 1 / 3,997 ≈ £0,250   (25,0 pence)
```

Tá istá £1 odvrátenej škody o storočie má dnes hodnotu 3,2 p, 5,1 p alebo 25 p podľa toho, ktorá diskontná konvencia sa použije, čo je takmer osemnásobné rozpätie, ktoré rozhoduje o tom, či projekt zmierňovania zmeny klímy s vysokými počiatočnými nákladmi a výnosom o storočie vôbec prekročí latku kladnej NPV. To je mechanizmus ústredného varovania tejto témy: pri akejkoľvek zmysluplne kladnej pevnej sadzbe je dostatočne vzdialená budúca škoda z hodnotenia aritmeticky vymazaná bez ohľadu na jej skutočnú závažnosť.

## Súvislosť so softvérovým inžinierstvom

- Každý nástroj na dlhodobé hodnotenie alebo podnikateľské zámery (infraštruktúra, adaptácia na klímu, modelovanie dôchodkov) má implementovať *klesajúci* harmonogram Green Book, nie jednu pevnú sadzbu: predvolená pevná sadzba potichu zakladá oveľa silnejšie skreslenie proti budúcnosti, než stanovuje súčasné usmernenie britskej vlády.
- Diskontná sadzba a horizont majú byť v softvéri na hodnotenie vždy viditeľnými, auditovateľnými parametrami, s explicitne zobrazenou citlivosťou výpočtu na ne (ako vo vyššie uvedenom riešenom príklade); zakopanie sadzby v konfiguračnom súbore pozýva presne „skrytú etickú voľbu“, pred ktorou varuje debata Stern–Nordhaus; to sa dopĺňa s bodom o transparentnosti v [účtovníctve prírodného kapitálu](../účtovníctvo-prírodného-kapitálu/) a leží v základe témy [sociálnej diskontnej sadzby](../sociálna-diskontná-sadzba/) vo všeobecnosti.
- Tam, kde sú prínosy programu výslovne medzigeneračné (protipovodňová ochrana, obnova prírodného kapitálu, dlhodobá digitálna infraštruktúra), [sociálna analýza nákladov a prínosov](../sociálna-analýza-nákladov-a-prínosov/) má vykázať výsledky aspoň pri dvoch diskontných predpokladoch (štandard Green Book a citlivostný prípad s nízkou sadzbou) namiesto jedného bodového odhadu, aby rozhodovatelia videli, ako samotná voľba diskontnej sadzby posúva odpoveď.

## Úskalia

- **Prezentovanie jedinej diskontovanej NPV bez rozpätia citlivosti**: vzhľadom na to, ako veľmi samotná diskontná sadzba mení odpoveď pri dlhodobých projektoch, NPV pri jednej sadzbe podstatne nadsadzuje presnosť; vždy vykazujte rozpätie zahŕňajúce aspoň štandard Green Book a scenár s nízkou sadzbou.
- **Aplikovanie krátkodobej pevnej sadzby (3,5 %) na hodnotenie na viacero storočí**: usmernenie samotného Green Book stanovuje klesajúci harmonogram práve preto, že pevná sadzba bola vyhodnotená ako nevhodná za zhruba 30 rokov; jej použitie napriek tomu podhodnocuje dlhodobé náklady.
- **Považovanie δ (čistej časovej preferencie) za čisto technický parameter**: Sternova takmer nulová hodnota aj vyššia implicitná hodnota v Green Book sú obhájiteľné len ako etické postoje o tom, akú váhu dlhuje prítomnosť budúcnosti, nie ako empiricky „správne“ alebo „nesprávne“ čísla; softvér má predpoklad zviditeľniť, nie prezentovať jedno číslo ako objektívne správne.

## Zdroje

- Stern N. "The Economics of Climate Change: The Stern Review." Cambridge University Press, 2006.
- Ramsey FP. "A Mathematical Theory of Saving." The Economic Journal, 1928.
- Weitzman ML. "Gamma Discounting." American Economic Review, 2001.
- HM Treasury. "The Green Book: Central Government Guidance on Appraisal and Evaluation" (Annex 6,
  discount rate schedule).
- Nordhaus WD. "A Review of the Stern Review on the Economics of Climate Change." Journal of
  Economic Literature, 2007.
