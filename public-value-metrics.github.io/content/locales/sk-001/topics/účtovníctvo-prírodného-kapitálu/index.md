# Účtovníctvo prírodného kapitálu

Účtovníctvo prírodného kapitálu stavia životné prostredie na rovnakú úroveň ako akýkoľvek iný
národný alebo organizačný majetok: meria zásobu prírodných zdrojov (lesy, pôdy, rieky, mokrade,
atmosféra) a tok služieb, ktoré poskytujú (viazanie uhlíka, protipovodňová ochrana, rekreácia,
potraviny), vo fyzických aj peňažných jednotkách, aby sa vyčerpávanie prírody prejavilo v
rozhodovaní tak, ako by sa prejavilo míňanie finančného kapitálu. Spojené kráľovstvo patrí medzi
vlády, ktoré to robia systematicky najďalej; podnietil to 25-ročný plán pre životné prostredie
(25 Year Environment Plan, 2018) a realizuje sa prostredníctvom účtov prírodného kapitálu Spojeného
kráľovstva, ktoré vydáva ONS, a doplňujúcich usmernení k Green Book od HM Treasury.

## Prečo na tom záleží

Konvenčné účtovníctvo, podnikové aj vládne, považuje les za bezcenný, kým sa nevyrúbe a nepredá ako
drevo, a vtedy sa stane súčasťou HDP. Účtovníctvo prírodného kapitálu existuje, aby túto medzeru
zaplnilo: 25-ročný plán pre životné prostredie zaviazal vládu zabudovať myslenie v kategóriách
prírodného kapitálu do politík a výslovne uviedol ambíciu byť „prvou generáciou, ktorá zanechá
životné prostredie v lepšom stave, než v akom sme ho našli“. ONS odvtedy zverejňuje ročné účty
prírodného kapitálu Spojeného kráľovstva
(<https://www.ons.gov.uk/economy/environmentalaccounts/bulletins/uknaturalcapitalaccounts/latest>),
ktoré odhadujú peňažnú hodnotu ekosystémových služieb, od rekreácie v lesoch cez zdravotné prínosy
mestskej zelene až po ukladanie uhlíka v rašeliniskách, v rámci rovnakého rámca národných účtov,
aký sa používa pre vyrobený kapitál, takže prírodný kapitál môže raz stáť v tej istej súvahe ako
cesty, budovy a vybavenie. Usmernenie HM Treasury Enabling a Natural Capital Approach (ENCA),
doplňujúce Green Book
(<https://www.gov.uk/government/publications/enabling-a-natural-capital-approach-enca-guidance>),
stanovuje, ako majú posudzovatelia oceňovať environmentálne náklady a prínosy v podnikateľských
prípadoch, aby sa cestný projekt ničiaci prastarý les alebo protipovodňový projekt obnovujúci mokrade
dali porovnať v konzistentných peňažných termínoch a nie tak, že jeden má číslo a druhý odsek výhrad.

## Matematika

```
Hodnota aktíva ekosystémovej služby = čistá súčasná hodnota (NPV) toku služieb, ktoré aktívum poskytuje

Hodnota aktíva = Σ (t = 1 až T) [ročná hodnota toku služieb_t / (1 + r)^t]

kde:
  hodnota toku služieb_t = množstvo služby v roku t × jednotková hodnota
                          (napr. rekreačné návštevy × hodnota na návštevu;
                           tony viazaného uhlíka × cena uhlíka)
  r = diskontná sadzba (sociálna diskontná sadzba podľa Green Book; pozri
      [sociálnu diskontnú sadzbu](../sociálna-diskontná-sadzba/))
  T = časový horizont, počas ktorého sa očakáva poskytovanie služby aktívom
```

Je to identická štruktúra čistej súčasnej hodnoty, aká sa používa na oceňovanie vyrobeného kapitálu
alebo posudzovanie akejkoľvek verejnej investície podľa [posudzovania podľa Green Book](../hodnotenie-podľa-green-book/).
Príspevkom účtovníctva prírodného kapitálu je dodanie dôveryhodných fyzických množstiev a
jednotkových hodnôt pre služby, ktoré boli predtým ocenené nulou.

## Vypracovaný príklad

**Mestský les, rekreačná hodnota**: 50-hektárový les navštívi odhadom 80 000 rekreantov ročne, pričom
každá návšteva sa oceňuje (metódou cestovných nákladov alebo metódou deklarovaných preferencií, pozri
[oceňovanie podľa odhalených preferencií](../oceňovanie-podľa-odhalených-preferencií/) a
[oceňovanie podľa deklarovaných preferencií](../oceňovanie-metódou-deklarovaných-preferencií/)) na £3. Les má túto
službu poskytovať 50 rokov a posudzuje sa pri diskontnej sadzbe 3,5 %.

```
Ročná rekreačná hodnota = 80 000 × £3 = £240 000/rok

NPV za 50 rokov pri 3,5 % ≈ £240 000 × anuitný faktor(3,5 %, 50 rokov)
anuitný faktor(3,5 %, 50) ≈ 21,4

Hodnota aktíva ≈ £240 000 × 21,4 ≈ £5 136 000
```

**Pridanie ukladania uhlíka**: ten istý les viaže odhadom 400 ton CO2 ročne, ocenených vládnou cenou
uhlíka mimo obchodovania, približne £75/tona (ilustratívne; pri skutočnom posudzovaní použite
aktuálne zverejnené hodnoty uhlíka od BEIS/DESNZ).

```
Ročná hodnota uhlíka = 400 × £75 = £30 000/rok
NPV za 50 rokov pri 3,5 % ≈ £30 000 × 21,4 ≈ £642 000

Celková hodnota aktíva lesa (rekreácia + uhlík) ≈ £5 136 000 + £642 000
                                                   ≈ £5 778 000
```

Je to pred pridaním zadržiavania povodní, biodiverzity alebo služieb kvality ovzdušia, ktoré
usmernenie ENCA tiež žiada posudzovateľov zvážiť. Celkový súčet je zámerne dolná, nie horná hranica.

## Súvislosť so softvérovým inžinierstvom

- Systémy environmentálneho a majetkového riadenia pre miestne samosprávy a agentúry (parky, cesty,
  vodné plochy) môžu popri registri fyzického majetku viesť aj register prírodného kapitálu, pričom
  použijú rovnaký vzor tok služieb krát jednotková hodnota ako pri akejkoľvek inej
  [databáze jednotkových nákladov](../databázy-jednotkových-nákladov/), ktorú organizácia spravuje.
- Keďže NPV prírodného kapitálu je citlivá na diskontnú sadzbu (pozri anuitný faktor vo vypracovanom
  príklade), každý nástroj, ktorý ju počíta, by mal sadzbu a horizont zobrazovať ako viditeľné
  vstupy a nezakrývať ich. Ide o rovnaký princíp transparentnosti, aký rozoberá téma
  [medzigeneračná rovnosť a diskontovanie z hľadiska udržateľnosti](../medzigeneračná-spravodlivosť-a-diskontovanie-udržateľnosti/).
- Účty prírodného kapitálu sú čoraz častejšie povinným vstupom do environmentálnych častí
  podnikateľského prípadu podľa [posudzovania podľa Green Book](../hodnotenie-podľa-green-book/); realizačný
  tím, ktorý vytvára nástroje pre podnikateľské prípady, by mal účty ONS a jednotkové hodnoty ENCA
  chápať ako referenčné údaje na integráciu, nie ako niečo, čo posudzovatelia prepočítavajú od nuly
  zakaždým.

## Úskalia

- **Dvojité započítanie prekrývajúcich sa ekosystémových služieb.** Rekreačná hodnota a hodnota
  biodiverzity tej istej lokality môžu zdieľať základné údaje o ochote platiť; usmernenie ENCA
  výslovne varuje pred sčítaním ocenení odvodených z prekrývajúcich sa prieskumných nástrojov.
- **Chápanie hodnoty aktíva prírodného kapitálu ako statickej.** Toky služieb sa menia s klímou,
  hospodárením a tlakom na využitie pôdy; hodnota uhlíka a zadržiavania povodní v lese v tomto
  desaťročí nie je trvalou vlastnosťou lokality.
- **Použitie celonárodných priemerných jednotkových hodnôt pre vysoko lokálne rozhodnutie.**
  Hektár prístupného mestského lesa a hektár odľahlej vysočiny majú veľmi odlišnú rekreačnú hodnotu;
  usmernenie ENCA odporúča, ak sú k dispozícii, miestne alebo pre lokalitu špecifické hodnoty namiesto
  predvolených národných priemerov.

## Zdroje

- ONS. "UK natural capital accounts."
  <https://www.ons.gov.uk/economy/environmentalaccounts/bulletins/uknaturalcapitalaccounts/latest>
- HM Government. "A Green Future: Our 25 Year Plan to Improve the Environment." (2018)
- HM Treasury / Defra. "Enabling a Natural Capital Approach (ENCA): guidance."
  <https://www.gov.uk/government/publications/enabling-a-natural-capital-approach-enca-guidance>
