# Sociálna analýza nákladov a prínosov (SCBA)

Sociálna analýza nákladov a prínosov premieňa každý náklad a prínos politiky alebo programu – trhový aj netrhový – na spoločnú peňažnú jednotku, diskontuje budúce toky na súčasnú hodnotu a započíta ich do jediného čísla: zlepšuje tento návrh situáciu spoločnosti, a o koľko?

## Prečo na tom záleží

SCBA je predvolená kvantitatívna metóda v ekonomickom prípade [hodnotenia podľa Green Book](../hodnotenie-podľa-green-book/): usmernenie HM Treasury vyžaduje, aby návrhy preukázali kladnú čistú súčasnú sociálnu hodnotu (NPSV) všade, kde sa prínosy dajú dôveryhodne vyčísliť v peniazoch, pričom ako základný princíp oceňovania netrhových statkov sa používa ochota platiť
(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>,
Chapter 5). Disciplína, ktorú presadzuje, znamená, že „sociálna“ analýza nákladov a prínosov nie je to isté ako investičné hodnotenie v súkromnom sektore: musí zahŕňať náklady a prínosy dopadajúce na tretie strany, ktoré nie sú účastníkmi transakcie (externality), musí používať [sociálnu diskontnú sadzbu](../sociálna-diskontná-sadzba/) namiesto komerčných nákladov kapitálu a mala by uplatňovať [distribučné váženie](../distribučné-váženie/) tam, kde libra znamená viac pre chudobnejšiu domácnosť než pre bohatšiu.

SCBA sa rozpadá presne tam, kde to čakajú jej kritici: statky bez trhového analógu – čistý vzduch, sociálna súdržnosť, hodnota zachráneného života – treba oceniť metódami [deklarovaných preferencií](../oceňovanie-metódou-deklarovaných-preferencií/) alebo [odhalených preferencií](../oceňovanie-podľa-odhalených-preferencií/), alebo treba zostrojiť [tieňovú cenu](../tieňové-ceny/). Keď je ocenenie sporné, nielen ťažké, sám Green Book odporúča vrátiť sa k [analýze nákladovej efektívnosti](../analýza-nákladovej-efektívnosti-vo-verejnej-správe/) alebo [viackriteriálnej analýze rozhodnutí](../viackriteriálna-analýza-rozhodovania/), namiesto toho, aby sa vynucovalo číslo, ktorému nikto neverí.

## Matematika

```
NPSV = Σ [t=0 až T] (Prínos_t − Náklad_t) / (1 + r)^t

kde:
  Prínos_t  = všetky oceniteľné prínosy v roku t vrátane netrhových
              statkov ocenených metódou deklarovaných/odhalených
              preferencií alebo tieňovou cenou
  Náklad_t  = všetky oceniteľné náklady v roku t vrátane nákladov
              oportunitných nákladov zdrojov (pozri ../opportunity-cost-in-public-spending/)
  r         = sociálna diskontná sadzba (HM Treasury stanovuje 3,5 %
              s poklesom na nižšie sadzby po 30. roku, podľa Green Book, príloha A)
  T         = obdobie hodnotenia

Pomer prínosov a nákladov (BCR) = Σ PV(prínosy) / Σ PV(náklady)
```

BCR nad 1 (alebo NPSV nad nulou) naznačuje čistú spoločenskú hodnotu. Kategórie hodnoty za peniaze podľa Green Book (používané pri hodnotení dopravy a infraštruktúry) označujú rozsahy BCR takto: pod 1,0 je slabá hodnota za peniaze, 1,0 – 1,5 nízka, 1,5 – 2,0 stredná, 2,0 – 4,0 vysoká a nad 4,0 veľmi vysoká. Analýza citlivosti – opakovaný výpočet NPSV za pesimistických a optimistických predpokladov – je povinná, nie voliteľná, pretože oceniteľné netrhové prínosy majú široké pásma neistoty.

## Vypracovaný príklad

**Miestna samospráva**: obec hodnotí investíciu £3 mil. do novej siete cyklistických a pešich trás počas 20-ročného obdobia hodnotenia pri diskontnej sadzbe 3,5 %.

```
Náklady: £3 mil. kapitál v roku 0, £50 000/rok údržba (roky 1 – 20)
PV(údržba) ≈ £50 000 × 14,2 (20-ročný anuitný faktor pri 3,5 %) ≈ £710 000
Celkové PV(náklady) ≈ £3,71 mil.

Prínosy (všetky ocenené zverejnenými nástrojmi DfT/WHO):
  Zdravotný prínos zo zvýšenej fyzickej aktivity: £180 000/rok
  Zníženie absencií: £40 000/rok
  Odľahčenie dopravy (menej jázd autom): £60 000/rok
  Celkový tok prínosov: £280 000/rok
PV(prínosy) ≈ £280 000 × 14,2 ≈ £3,98 mil.

NPSV = £3,98 mil. − £3,71 mil. = +£0,27 mil.
BCR = 3,98 / 3,71 = 1,07 → „nízka“ hodnota za peniaze
```

Projekt prekročí hranicu, ale len tesne; analýza citlivosti s o 20 % nižším odhadom zdravotného prínosu (odrážajúca skutočnú neistotu v oceňovaní fyzickej aktivity) zníži BCR pod 1,0, čo je presne dôvod, prečo Green Book vyžaduje zverejnenie tabuľky citlivosti popri hlavnom čísle, nielen centrálneho odhadu.

**Charita**: program prevencie dojčenskej úmrtnosti s nákladmi £500 000 ročne sa hodnotí pomocou hodnoty štatistického života (VSL) – tieňovej ceny, nie pozorovanej trhovej ceny – približne £2,1 mil. (aktualizované číslo HM Treasury z roku 2023, samo odvodené zo štúdií deklarovaných preferencií). Zabránenie jednému úmrtiu dojčaťa ročne pri nákladoch £500 000 dáva BCR 4,2, teda s rezervou „veľmi vysokú“ hodnotu za peniaze – ale celý výsledok stojí na čísle VSL, preto každá SCBA používajúca VSL musí uviesť, že ide o predpoklad, nie fakt.

## Súvislosť so softvérovým inžinierstvom

SCBA je prirodzeným rámcom pre investičné rozhodnutia o platformách a infraštruktúre vo vládnom softvéri – porovnanie zdieľanej platformy identity s rezortnými bodovými riešeniami si napríklad vyžaduje oceniť prínosy, ako nižšie náklady na duplicitné zapájanie používateľov, menej podvodov a rýchlejší čas do poskytnutia služby, ktoré samy o sebe nemajú trhovú cenu. Inžinieri budujúci základnú službu by mali očakávať, že vedúci programov budú žiadať vstupy do tejto analýzy: jednotkové náklady transakcií (pozri [náklady na transakciu](../náklady-na-transakciu/)), očakávané objemy a náklady na degradáciu/výpadky. Najdôležitejšia disciplína, ktorú treba prebrať: diskontovať budúce prínosy, výslovne pomenovať kontrafaktuálny východiskový stav (pozri [kontrafaktuálnu analýzu](../kontrafaktuálna-analýza/)) a nikdy neuvádzať jediný bodový odhad bez rozpätia citlivosti.

## Úskalia

- **Dvojité započítanie prínosov.** Započítanie „ušetreného času“ aj „produktivity získanej z tohto času“ ako samostatných riadkov prínosov nadsadzuje prípad; prínosom je ušetrený čas, jeho následné využitie nie je ďalším prínosom, pokiaľ nie je nezávisle doložené.
- **Vynechanie vytesnených nákladov.** Projekt, ktorý presunie dopravné zápchy z jednej cesty na druhú alebo podvody z jedného kanála na iný, nevytvoril čistý prínos, ktorý naznačuje jeho hlavné NPSV – pozri [vytesnenie a atribúciu](../vytesnenie-a-atribúcia/).
- **Použitie súkromnej diskontnej sadzby.** Uplatnenie komerčných nákladov kapitálu (povedzme 8 – 10 %) namiesto sociálnej diskontnej sadzby systematicky podhodnocuje dlhodobé verejné prínosy, ako sú zdravotné a environmentálne zisky – pozri [sociálnu diskontnú sadzbu](../sociálna-diskontná-sadzba/).
- **Ocenenie nespornej časti a mávnutie rukou nad spornou.** Ak dve tretiny prínosu návrhu tvorí s istotou ocenená úspora efektívnosti a jednu tretinu neisto ocenený zisk v pohode a dobrom živote (wellbeing), hlavné NPSV potichu mieša tvrdé číslo s mäkkým; uvádzajte ich oddelene.

## Zdroje

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Chapter 5.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury. "Green Book supplementary guidance: value of a statistical life." 2023.
  <https://www.gov.uk/government/publications/green-book-supplementary-guidance-value-of-a-statistical-life>
- Department for Transport. "TAG unit A1.1: cost-benefit analysis." Transport Analysis Guidance.
  <https://www.gov.uk/guidance/transport-analysis-guidance-tag>
