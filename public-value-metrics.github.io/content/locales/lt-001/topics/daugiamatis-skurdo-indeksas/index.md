# Daugiamatis skurdo indeksas (MPI)

MPI skurdą matuoja kaip sutampančius nepriteklius, kuriuos žmogus patiria vienu metu sveikatos, švietimo ir gyvenimo lygio srityse, o ne vien kaip pajamas, kritusias žemiau ribos. Jį sukūrė Oksfordo skurdo ir žmogaus raidos iniciatyva (OPHI), dalyvaujant Sabinai Alkire ir Jamesui Fosteriui, o nuo 2010 m. jis kartu su UNDP skelbiamas kiekvienoje Žmogaus raidos ataskaitoje greta [Žmogaus raidos indekso](../žmogaus-socialinės-raidos-indeksas/).

## Kodėl tai svarbu

Pajamų skurdo ribos praleidžia žmones, kurie turi pakankamai pinigų, bet neturi švaraus vandens, mokyklos ar kuriems mirė vaikas, taip pat praleidžia faktą, kad nepriteklius susitelkia: namų ūkis be elektros neproporcingai dažnai neturi ir sanitarijos, o jo vaikas kenčia nuo nepakankamos mitybos. Alkire ir Fosterio metodas, ant kurio sukurtas MPI, skaičiuoja kiekvieno žmogaus nepriteklius pagal dešimt rodiklių, sugrupuotų į tris vienodai svertas dimensijas (sveikata, švietimas, gyvenimo lygis), ir žmogų priskiria „MPI skurstančiųjų“ grupei tik jei jo svertinis nepritekliaus įvertis peržengia nustatytą slenkstį. Taip užfiksuojamas sutapimas, kurio negali parodyti atskirų vieno rodiklio statistikų rinkinys. OPHI visą metodiką ir šalių duomenis skelbia adresu <https://ophi.org.uk/multidimensional-poverty-index/>; kartu su UNDP palaikomas pasaulinis MPI dabar apima daugiau nei 110 šalių. Programinei įrangai, skirtai kovos su skurdu programoms (pinigų pervedimams, socialinės globos triažui, pagalbos taikymui), MPI rodiklių rinkinys dažnai yra artimiausia standartizuotai nepritekliaus schemai, jau patvirtintai dešimtyse nacionalinių statistikos tarnybų.

## Matematika

```
10 rodiklių, 3 dimensijos, kiekvienos dimensijos svoris 1/3:

Sveikata (1/3):          mityba (1/6), vaikų mirtingumas (1/6)
Švietimas (1/3):         mokslo metai (1/6), mokyklos lankomumas (1/6)
Gyvenimo lygis (1/3):    maisto gaminimo kuras, sanitarija, geriamasis vanduo,
                          elektra, būstas, turtas (po 1/18)

nepritekliaus įvertis (c) = rodiklių, kuriais žmogus patiria nepriteklių, svorių suma

žmogus yra „MPI skurstantysis“, jei c ≥ 1/3 (skurdo riba, k = 33 %)

H (skurstančiųjų dalis) = MPI skurstančiųjų skaičius / visa populiacija
A (intensyvumas)         = vidutinis nepritekliaus įvertis tik tarp MPI skurstančiųjų

MPI = H × A
```

Kadangi MPI padaugina skurstančiųjų *dalį* iš to, *kokie* jie skurdūs, du regionai su ta pačia skurstančiųjų dalimi gali turėti labai skirtingus MPI įverčius, jei viename nepriteklius sunkesnis. Tai ta pati „dimensijų nepakeičiamumo“ logika, kuria grindžiamas HDI geometrinis vidurkis.

## Pavyzdys su skaičiavimais

**Nacionalinė 1 000 žmonių apklausa**: 350 žmonių nustatyti kaip daugiamačiai skurstantys (nepritekliaus įvertis ≥ 33 %). Tarp vien šių 350 skurstančiųjų vidutinis nepritekliaus įvertis yra 45 %.

```
H = 350 / 1000                = 0,350
A = 0,45
MPI = H × A = 0,350 × 0,45    = 0,1575
```

**Dviejų rajonų su vienoda skurstančiųjų dalimi palyginimas**: A rajone H = 0,30 ir A = 0,40 (daug skurstančiųjų, vidutiniškai stokojančių); B rajone H = 0,30 ir A = 0,60 (tiek pat skurstančiųjų, bet stokojančių labiau, nes vienu metu stinga elektros, sanitarijos *ir* mokyklos lankomumo).

```
MPI_A = 0,30 × 0,40 = 0,120
MPI_B = 0,30 × 0,60 = 0,180
```

Ta pati skurstančiųjų dalis, bet B rajono MPI 50 % didesnis. Taikymo sistema, grįsta vien skurstančiųjų dalimi, abu rajonus išrikiuotų vienodai ir nepastebėtų, kad B rajonui reikia gilesnės intervencijos.

## Ryšys su programine inžinerija

- Socialinių programų bylų valdymo ir teisėtumo nustatymo sistemos dažnai jau saugo kelis iš dešimties rodiklių (būstą, mokyklos lankomumą, sveikatos požymius) atskiruose siluose; Alkire ir Fosterio skaičiavimo metodas yra paruošta schema jiems sujungti į vieną nepritekliaus įvertį, užuot kūrus individualų vertinimo modelį nuo nulio.
- Skurstančiųjų dalies ir intensyvumo atskyrimas (H × A) yra visuotinai naudingas šablonas kiekvienam skydeliui, rodančiam „kiek žmonių paveikta“ kartu su „kaip stipriai“; abiejų sulieti į vieną skaičių, kaip daro paprasta paplitimo statistika, paslepia būtent tą atvejį, kuriam reikia daugiausia išteklių.
- MPI tipo rodiklių skydeliai natūraliai derinami su kovos su skurdu programų [išlaidų vienam gavėjui](../kaštai-vienam-naudos-gavėjui/) ataskaitomis: išlaidos vienam MPI sumažėjimo punktui yra pagrįstas vienetas labai skirtingoms intervencijoms (pinigų pervedimui ir sanitarijos infrastruktūrai) palyginti.

## Dažniausios klaidos

- **Dešimties rodiklių laikymas universaliais.** OPHI pasaulinio MPI rodikliai sukalibruoti, kad būtų galima palyginti šalis; nacionaliniai MPI (juos skelbia daug šalių, įskaitant kelias Pietų Azijos ir Afrikos) pritaiko rodiklius ir svorius vietos kontekstui, ir šių dviejų tiesiogiai palyginti negalima.
- **Pateikimas tik H.** Skurstančiųjų dalis visiškai nepaiso intensyvumo; visada nurodykite arba apskaičiuokite A kartu su ja arba patį MPI.
- **Prielaida, kad MPI skurstantieji ir pajamų skurstantieji yra ta pati populiacija.** OPHI šalių apžvalgos paprastai rodo tik dalinį abiejų sutapimą; programa, taikoma tik pajamų požiūriu skurstantiems, sistemingai praleis reikšmingą daugiamačiai skurstančiųjų dalį.

## Šaltiniai

- Oxford Poverty and Human Development Initiative. "Multidimensional Poverty Index."
  <https://ophi.org.uk/multidimensional-poverty-index/>
- Alkire S, Foster J. "Counting and Multidimensional Poverty Measurement." Journal of Public
  Economics, 2011.
- UNDP & OPHI. "Global Multidimensional Poverty Index" (annual report).
