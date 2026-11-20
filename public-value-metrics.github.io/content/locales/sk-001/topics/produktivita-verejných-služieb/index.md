# Produktivita verejných služieb

Produktivita verejných služieb meria, nakoľko efektívne verejné výdavky premieňajú vstupy
(zamestnancov, kapitál, tovary a služby) na výstupy upravené o kvalitu, a to pri službách (zdravotníctvo,
vzdelávanie, policajná práca, sociálna starostlivosť), ktoré nemajú trhovú cenu, a teda ani údaj o
tržbách, ktorým by sa dali deliť náklady. Britský Úrad pre národnú štatistiku (ONS) túto sériu
zverejňuje od polovice prvej dekády 21. storočia a zostáva metodicky najrozvinutejším národným
pokusom odpovedať na otázku „darí sa vláde premieňať peniaze na verejné služby lepšie alebo horšie?“.

## Prečo na tom záleží

Na trhu je produktivita (hodnota výstupu) / (náklady na vstup) a hodnota výstupu je pozorovateľná,
pretože niekto za ňu platí. Výmena bedrového kĺbu, školské miesto a policajná hliadka nemajú predajnú
cenu, takže naivne možno merať len *vstupy* (čo sa minulo), čo komentátorov láka považovať rastúce
verejné výdavky automaticky za zlé, keďže viac vstupu pri nezmenenej titulkovej aktivite vyzerá ako
klesajúca produktivita. Metodika ONS, uvedená v jeho publikáciách „Sources and Methods“ k produktivite
verejných služieb, to rieši zostrojením *indexu výstupu* z objemov aktivity (vykonané operácie,
vyučovaní žiaci, vyšetrované trestné činy) a následnou *úpravou o kvalitu* tohto indexu: pri zdravotníctve
sa zahŕňajú miery prežitia a čakacie doby, pri vzdelávaní dosiahnuté výsledky, pri policajnej práci
výsledky ako vyriešenie prípadu, takže služba, ktorá urobí rovnaký počet operácií, ale dosiahne lepšie
miery prežitia, sa prejaví ako produktívnejšia, nie len ako drahšia. Titulkové zistenie, ktoré sa
opakuje v publikáciách ONS, je pre sektor striezlivé: produktivita verejných služieb Spojeného
kráľovstva prudko klesla počas pandémie COVID-19 a podľa vlastných publikácií ONS z polovice 20.
rokov 21. storočia sa v niekoľkých podsektoroch vrátane zdravotníctva stále nevrátila na úroveň roku
2019, aj keď výdavky rástli. Táto medzera rámcuje „viac financií“ a „vyššiu produktivitu“ ako dve
úplne oddelené otázky.

## Matematika

```
Index výstupu (objem) = Σ (aktivita_i × relatívna váha jednotkových nákladov_i), vážený
                          základným rokom naprieč všetkými aktivitami služby (napr. operácie
                          bedrového kĺbu, operácie šedého zákalu, konzultácie u všeobecného
                          lekára), analogicky k objemovému indexu Laspeyres/Paasche

Úprava o kvalitu      = index výstupu × faktor úpravy o kvalitu
                          (napr. zahrnutie zmeny mier prežitia, čakacích dôb,
                          dosiahnutých výsledkov alebo recidívy ako násobiteľa surového objemu)

Index vstupu          = Σ (hodiny práce × váha nákladov práce) + (náklady na tovary/služby,
                          deflované) + (spotreba kapitálu)

Rast celkovej faktorovej produktivity = % zmena indexu výstupu upraveného o kvalitu
                                         − % zmena indexu vstupu
```

## Vypracovaný príklad

**Ilustratívny výpočet produktivity akútneho sektora NHS** (štruktúra podľa metodiky ONS):

```
Rok 1: index objemu výstupu = 100,0 (základný rok), index vstupu = 100,0
        → index produktivity = 100,0

Rok 2: objem aktivity rastie o 3,0 % (viac operácií, viac stretnutí),
        ale priemerná čakacia doba sa zhoršuje, čo uplatňuje zľavu
        za kvalitu −1,0 %
        Index výstupu upravený o kvalitu = 100 × 1,030 × 0,990 = 101,97

        Vstupy rastú: počet zamestnancov +4,0 %, ostatné náklady (deflované) +1,5 %,
        vážený index vstupu = 100 × 1,032 = 103,2

Rast produktivity = (101,97 / 100 − 1) − (103,2 / 100 − 1)
                   = 1,97 % − 3,2 % = −1,23 percentuálneho bodu

Interpretácia: aktivita vzrástla, ale vstupy vzrástli rýchlejšie a kvalita
mierne klesla, takže produktivita (výstup na jednotku vstupu) klesla,
aj keď sa „poskytlo viac starostlivosti“.
```

Je to presne ten vzor, ktorý publikácie ONS opakovane vykazovali pre časti NHS po pandémii: rastúce
výdavky a rastúca surová aktivita súbežne s klesajúcou meranou produktivitou, keď sa zohľadní úprava o
kvalitu aj rast vstupov.

## Súvislosť so softvérovým inžinierstvom

Produktivita verejných služieb je analógia na úrovni populácie k debatám o inžinierskej produktivite
(dodané story pointy oproti [metrikám DORA](../metriky-dora-pre-verejnú-hodnotu/) oproti
[metrikám toku](../metriky-toku-pri-vládnej-dodávke/)): surová priepustnosť bez úpravy o kvalitu
je v nemocnici rovnako zavádzajúca ako „dodané riadky kódu“ v softvérovom tíme. Tímy, ktoré budujú
dátové pipeline výkonnosti pre rezorty, by mali úpravu o kvalitu považovať za plnohodnotnú, verzovanú
transformačnú fázu, nie poznámku pod čiarou, pretože dôveryhodnosť samotného ONS stojí na tom, že
úprava je transparentná, reprodukovateľná a revidovaná, keď prichádzajú lepšie údaje o kvalite (ONS
revidoval odhady produktivity minulých rokov, keď sa finalizujú základné údaje o kvalite, napr. miery
prežitia, takže každý nadväzujúci systém, ktorý tieto štatistiky spotrebúva, musí zvládnuť spätné
revízie, nielen pridávať nové obdobia). Priamo sa prelína aj s
[celkovými nákladmi vlastníctva](../celkové-náklady-vlastníctva-vo-vládnom-it/) a
[produktivitou AI vo verejnom sektore](../produktivita-umelej-inteligencie-vo-verejnom-sektore/): systém, ktorý
zvyšuje surový objem aktivity bez zlepšenia alebo udržania kvality, nie je podľa vlastnej definície
ONS zlepšením produktivity.

## Úskalia

- **Považovanie rastu vstupov za rast produktivity**: viac výdavkov financujúcich viac zamestnancov
  vytvára viac *aktivity*, nie viac *produktivity*, pokiaľ nerastie aj výstup na jednotku vstupu;
  v politickom komentári sa tieto dve veci bežne zamieňajú.
- **Úplné ignorovanie úpravy o kvalitu**: index výstupu postavený len na surových počtoch aktivít
  ukáže „zisky produktivity“ z robenia viac niečoho menej hodnotného alebo nižšej kvality; úprava o
  kvalitu od ONS existuje práve na zachytenie tohto.
- **Porovnávanie indexov produktivity naprieč podsektormi bez zhodného metodického vydania**:
  produktivita zdravotníctva, vzdelávania a policajnej práce je každá postavená z iných zdrojov
  údajov o aktivite a kvalite s inými revíznymi cyklami; naivné medzisektorové porovnanie porovnáva
  nezlučiteľné nástroje.
- **Čítanie poklesu produktivity za jediný rok ako trvalého trendu**: čísla produktivity z obdobia
  pandémie a po nej vykázali výraznú medziročnú volatilitu, keďže sa menili aj samotné údaje o kvalite
  (napr. čakacie listiny, obnova plánovaných výkonov); ONS dôsledne varuje pred nadinterpretáciou
  zmien za jediný rok.

## Zdroje

- Office for National Statistics, "Public Service Productivity" series.
  <https://www.ons.gov.uk/economy/economicoutputandproductivity/publicservicesproductivity>
- Office for National Statistics, "Public Service Productivity: Total, UK — Sources and Methods."
  <https://www.ons.gov.uk/economy/economicoutputandproductivity/publicservicesproductivity>
