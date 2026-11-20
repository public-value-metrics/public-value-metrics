# Viackriteriálna analýza rozhodovania (MCDA)

MCDA hodnotí a váži možnosti naraz podľa viacerých odlišných, vážených kritérií. Výsledkom je
zoradené porovnanie bez nutnosti zvádzať každé kritérium na jednu peňažnú alebo prirodzenú škálu.
Je to metóda posudzovania pre rozhodnutia, v ktorých sa výsledky, na ktorých záleží, skutočne nedajú
zredukovať na jediné číslo.

## Prečo na tom záleží

Green Book (britská príručka posudzovania investícií) výslovne schvaľuje MCDA (priamo sa jej
venujú jeho prípadové štúdie v Box 2 aj Annex A) pri posudzovaniach, kde sú prínosy „skutočne
nesúmerateľné“, teda tam, kde by prevod všetkého na peniaze prostredníctvom
[sociálnej analýzy nákladov a prínosov](../sociálna-analýza-nákladov-a-prínosov/) alebo na jeden výsledok
prostredníctvom [analýzy nákladovej efektívnosti](../analýza-nákladovej-efektívnosti-vo-verejnej-správe/)
rozhodnutie skôr skreslil, než objasnil
(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>).
Výber lokality pre nové väzenie napríklad vyvažuje kapitálové náklady voči vplyvu na komunitu,
dopravnej dostupnosti, vplyvu na životné prostredie a možnosti získať personál. Tieto kritériá nemajú
spoločnú jednotku a vynútenie spoločnej jednotky (zvyčajne peňazí) by do výpočtu prepašovalo
hodnotový súd o relatívnej dôležitosti napríklad vplyvu na životné prostredie voči nákladom,
prezlečený za objektívnu aritmetiku.

Poctivosť MCDA je zároveň jej hlavnou zraniteľnosťou: keďže váhy určuje ten, kto posudzovanie
vedie (alebo panel), metóda je taká legitímna, aký je legitímny proces vážení. Usmernenia Green Book
výslovne uvádzajú, že kritériá a váhy sa musia dohodnúť a zverejniť *pred* hodnotením možností,
práve aby recenzent nemohol od preferovanej možnosti spätne dospieť k váham, ktoré ju zdôvodňujú.

## Matematika

```
Pre každú možnosť i a kritérium j:
  Score_ij   = výkonnosť možnosti voči tomuto kritériu (často 0 – 100
               alebo 1 – 10, na základe dôkazov, odborného úsudku alebo hodnotenia
               zainteresovaných strán)
  Weight_j   = relatívna dôležitosť kritéria j, váhy sa sčítajú na 1 (alebo 100)

Vážené skóre možnosti i = Σ_j (Score_ij × Weight_j)

Postup:
1. Dohodnite sa na súbore kritérií a váh PRED hodnotením akejkoľvek možnosti
   (bežné metódy zisťovania váh sú swing weighting alebo párové porovnávanie,
   napr. AHP).
2. Ohodnoťte každú možnosť podľa každého kritéria na spoločnej škále,
   pokiaľ možno na základe dôkazov.
3. Vypočítajte vážené súčty; zoraďte možnosti.
4. Otestujte citlivosť váh: prežije poradie rozumnú nezhodu o tom,
   ako dôležité má každé kritérium byť?
```

MCDA nevytvára obhájiteľnú absolútnu hodnotu tak, ako čistá súčasná hodnota pri sociálnej analýze
nákladov a prínosov (SCBA): vytvára len poradie podmienené dohodnutými váhami. Je to prednosť, keď
rozhodnutie skutočne spočíva vo vyvažovaní nesúmerateľných statkov, a nevýhoda, ak sa použije na
vyhnutie sa náročnejšej práci, teda peňažnému vyjadreniu tam, kde bolo skutočne možné.

## Vypracovaný príklad

**Miestna samospráva**: mestská rada vyberá lokalitu pre nové zberné stredisko domového odpadu na
recykláciu a hodnotí tri lokality podľa štyroch kritérií, ktorých váhy určil medziodborový panel
ešte pred akoukoľvek obhliadkou:

```
Kritériá (váha):          Kapitálové náklady (30 %)  Dopravná dostupnosť (25 %)
                           Vplyv na komunitu (25 %)  Vplyv na životné prostredie (20 %)

Skóre lokalít (0 – 100, vyššie = lepšie):
Lokalita A: náklady 80, dostupnosť 60, komunita 40, prostredie 70
Lokalita B: náklady 60, dostupnosť 90, komunita 70, prostredie 50
Lokalita C: náklady 90, dostupnosť 50, komunita 80, prostredie 60

Vážené súčty:
Lokalita A = 80(0,30) + 60(0,25) + 40(0,25) + 70(0,20) = 24+15+10+14 = 63
Lokalita B = 60(0,30) + 90(0,25) + 70(0,25) + 50(0,20) = 18+22,5+17,5+10 = 68
Lokalita C = 90(0,30) + 50(0,25) + 80(0,25) + 60(0,20) = 27+12,5+20+12 = 71,5
```

Najvyššie sa umiestnila lokalita C. Test citlivosti, ktorý zvýši váhu vplyvu na komunitu z 25 % na
35 % (10 bodov sa odoberie kapitálovým nákladom), zmení súčet lokality C na 71,5 − 3 + 8 = 76,5 a
lokality B na 68 − 6 + 7 = 69. Lokalita C stále vedie, takže poradie je odolné voči takejto
rozumnej nezhode o váhach, a práve túto kontrolu Green Book očakáva vo vykazovaní.

**Charita**: grantová nadácia, ktorá vyberá medzi financovaním služby dlhového poradenstva, siete
potravinových bánk a programu finančnej gramotnosti, používa MCDA namiesto SROI (pozri
[sociálnu návratnosť investícií](../sociálna-návratnosť-investície/)) práve preto, že správcovia sa v
dobrej viere nezhodujú v tom, či má väčšiu váhu krízová pomoc, alebo prevencia. MCDA im umožňuje
dohodnúť *tvar* nezhody (rozpätie váh) namiesto predstierania, že ju vyrieši jediný pomer SROI.

## Súvislosť so softvérovým inžinierstvom

MCDA je prirodzený nástroj na výber dodávateľa a architektúry, keď sa kritériá skutočne dostávajú do
rozporu: pri výbere medzi cloudovým a lokálne prevádzkovaným systémom na správu prípadov sa
vyvažujú náklady, riziko dátovej suverenity, prístupnosť a rýchlosť dodania spôsobom, ktorý sa
nedá zredukovať na jedno číslo. Technickí lídri by mali trvať na tom, aby sa vážení uskutočnilo
pred hodnotením možností, presne ako vyžaduje Green Book, pretože vážiace cvičenie po zoznámení sa
s užším výberom sa spoľahlivo posúva k možnosti, ktorú miestnosť už preferovala. Bežnú aplikáciu
MCDA nájdete v téme [kúpiť alebo vyvinúť vo verejnej správe](../vlastný-vývoj-alebo-nákup-vo-verejnej-správe/) a
príbuzný nástroj štruktúrovaného hodnotenia, používaný po rozhodnutí, nie pred ním, v téme
[skóre verejnej hodnoty](../hodnotiaca-karta-verejnej-hodnoty/).

## Úskalia

- **Určenie váh po zoznámení sa s možnosťami.** Je to najčastejší spôsob, ako sa MCDA zneužíva,
  úmyselne či nie; zverejnite váhy pred hodnotením a zaznamenajte, kto ich určil.
- **Chápanie váženého súčtu ako pevného čísla.** Skóre 71,5 oproti 68 nie je štatisticky
  významný rozdiel, pokiaľ analýza citlivosti nepotvrdí, že poradie je stabilné; uvádzajte rozpätia,
  nie falošnú presnosť.
- **Použitie MCDA na vyhnutie sa peňažnému vyjadreniu, ktoré bolo reálne možné.** Ak sa väčšina
  kritérií dala dôveryhodne oceniť, predvolené použitie MCDA namiesto [SCBA](../sociálna-analýza-nákladov-a-prínosov/)
  zahodí informácie, ktoré mohlo posudzovanie využiť.
- **Nechať všetky váhy určiť jedinú dominantnú zainteresovanú stranu.** Dobrá prax podľa Green Book
  očakáva, že váhy sa zisťujú od reprezentatívneho panelu, nie od zadávajúceho riaditeľa, aby
  posudzovanie len neodvodilo to, čo daná osoba chcela už predtým.

## Zdroje

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Annex A
  (multi-criteria decision analysis) and Box 2 case studies.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Communities and Local Government. "Multi-criteria analysis: a manual." 2009.
  <https://www.gov.uk/government/publications/multi-criteria-analysis-a-manual>
- Belton V, Stewart TJ. "Multiple Criteria Decision Analysis: An Integrated Approach." Kluwer,
  2002.
