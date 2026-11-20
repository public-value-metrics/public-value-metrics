# Celkové náklady vlastníctva (TCO) vo vládnom IT

Celkové náklady vlastníctva sú náklady systému za celý životný cyklus – obstaranie plus každý rok prevádzky – diskontované na spoločný dátum. Vo vládnom IT je najspoľahlivejšou chybou pri prognózovaní porovnávanie dodávateľov alebo variantov len podľa obstarávacej ceny, hoci prevádzka a údržba zvyčajne tvoria niekde medzi polovicou a štyrmi pätinami celkového účtu počas životnosti.

## Prečo na tom záleží

Green Book od HM Treasury vyžaduje, aby finančný prípad v každom obchodnom prípade podľa modelu piatich prípadov (Five Case Model) pokrýval náklady za celú životnosť, nielen kapitálové výdavky – no National Audit Office opakovane zistil, že rezorty schvaľujú IT investície na základe neúplnej alebo optimistickej prognózy prevádzkových nákladov a skutočné prevádzkové náklady zistia až po spustení systému, keď je kapitálový rozpočtový riadok už uzavretý. Technology Code of Practice od Government Digital Service a Central Digital and Data Office (<https://www.gov.uk/guidance/the-technology-code-of-practice>) tlačí rezorty k cloudu a štandardnému hostingu čiastočne preto, že sprehľadňuje priebežné náklady a robí ich porovnateľnými, namiesto toho, aby boli ukryté v jedinom kapitálovom obstarávacom čísle, ktoré pri schvaľovaní vyzerá lákavo nízko a o tri roky drahým omylom.

## Matematika

```
TCO = náklady na obstaranie + Σ(t=1..N) ročné prevádzkové náklady_t / (1+r)^t
      − zostatková hodnota (diskontovaná)

r = štandardná sociálna diskontná sadzba HM Treasury Green Book, 3,5 %/rok
    (klesajúci harmonogram sadzieb pre horizonty nad 30 rokov)

Zložky prevádzkových nákladov: hosting/licencie, podpora a údržba,
bezpečnostné záplatovanie a zhoda s predpismi, čas zamestnancov,
plánovaná obnova/migrácia
```

Pozri [sociálnu diskontnú sadzbu](../sociálna-diskontná-sadzba/) pre vysvetlenie, prečo záleží na diskontnom faktore počas typickej 5 – 10-ročnej životnosti systému, a [vlastný vývoj alebo nákup vo verejnej správe](../vlastný-vývoj-alebo-nákup-vo-verejnej-správe/) pre to, ako TCO vstupuje do rozhodnutia o vývoji či nákupe.

## Vypracovaný príklad

Rezort porovnáva dva systémy na správu prípadov na 5-ročnom horizonte pri diskontnej sadzbe Green Book 3,5 %.

```
Systém A: kapitálové výdavky £3 500 000, prevádzkové výdavky £250 000/rok
Systém B: kapitálové výdavky £1 800 000 (vyzerá lacnejšie), prevádzkové £650 000/rok
          (ťažšia podpora dodávateľa a záťaž integrácie)

Naivné porovnanie len podľa kapitálových výdavkov: vyhráva B, £1,8 mil. < £3,5 mil.

Súčet diskontných faktorov, 5 rokov pri 3,5 %: 0,966+0,934+0,902+0,871+0,842 ≈ 4,515

TCO_A = 3 500 000 + 250 000 × 4,515 = 3 500 000 + 1 128 750 = £4 628 750
TCO_B = 1 800 000 + 650 000 × 4,515 = 1 800 000 + 2 934 750 = £4 734 750
```

TCO obracia naivné rozhodnutie: systém B je za päť rokov mierne drahší, keď sa prevádzkové náklady diskontujú a sčítajú, pretože podiel jeho prevádzkových nákladov na celoživotných nákladoch je 62 % (2 934 750 / 4 734 750) oproti 24 % pri systéme A – konkrétny prípad zistenia, že „údržba tvorí väčšinu účtu“, ktoré sa porovnávaním cenníkových cien úplne skryje.

## Súvislosť so softvérovým inžinierstvom

TCO je číslo, ktoré by malo disciplinovať každé rozhodnutie o [vlastnom vývoji alebo nákupe](../vlastný-vývoj-alebo-nákup-vo-verejnej-správe/) a každý prípad splácania [technického dlhu](../technický-dlh-ako-erózia-verejnej-hodnoty/), pretože úrok z dlhu aj odložená údržba sú riadky prevádzkových nákladov, ktoré patria do rovnakého diskontovaného súčtu, či ich niekto sledoval, alebo nie. Inžinieri, ktorí navrhujú voľbu platformy alebo dodávateľa, by mali predložiť úplnú tabuľku TCO, nie obstarávaciu cenu, pretože obstarávacia cena je presne to číslo, na ktoré sa podľa zámeru finančného prípadu Green Book rezorty nemajú spoliehať samostatne. TCO je tiež čestným menovateľom pri úsudkoch o [hodnote za peniaze](../hodnota-za-peniaze/) – VFM porovnáva prínos s nákladmi a podhodnotená nákladová položka nafukuje každý pomer VFM v obchodnom prípade.

## Úskalia

- **Porovnanie len podľa kapitálových výdavkov**: najčastejšia chyba pri obstarávaní – porovnávanie cenníkových cien dodávateľov bez zodpovedajúcej prognózy prevádzkových nákladov pre každý variant.
- **Vynechanie nákladov na ukončenie a migráciu**: extrakcia údajov na konci zmluvy, migrácia na novú platformu a pokuty za uzamknutie u dodávateľa (vendor lock-in) sú skutočné riadky TCO, ktoré sa v pôvodnom obchodnom prípade len zriedka objavia.
- **Vynechanie nákladov na bezpečnosť a súlad s predpismi**: frekvencia záplat, obnova akreditácie a náklady na audit rastú s vekom a zložitosťou systému – pozri [hodnotu kybernetickej bezpečnosti verejného sektora](../hodnota-kybernetickej-bezpečnosti-vo-verejnom-sektore/) – a bežne sa z prognózy prevádzkových nákladov vynechávajú.
- **Nediskontované porovnanie variantov s rôznymi profilmi nákladov**: porovnanie kapitálovo náročného variantu s prevádzkovo náročným bez diskontovania systematicky zvýhodňuje ten, ktorý náhodou odkladá viac nákladov do neskorších rokov.

## Zdroje

- HM Treasury, *The Green Book: Central Government Guidance on Appraisal and Evaluation*, 2022. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
- Central Digital and Data Office, Technology Code of Practice. <https://www.gov.uk/guidance/the-technology-code-of-practice>
- National Audit Office, *Digital Transformation in Government*. <https://www.nao.org.uk/>
