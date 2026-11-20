# Index viacnásobnej deprivácie (IMD)

IMD je oficiálnou mierou relatívnej deprivácie malých oblastí v Anglicku: radí všetkých 32 844 oblastí Lower-layer Super Output Areas (LSOA, každá s približne 1 500 obyvateľmi) od 1 (najviac deprivovaná) po 32 844 (najmenej deprivovaná). Zverejňuje ho dnešné Ministry of Housing, Communities and Local Government (MHCLG, predtým MHCLG/DCLG), naposledy ako English Indices of Deprivation 2019, a priamo smeruje financovanie ústrednej vlády, prioritizáciu verejného zdravia a oprávnenosť na desiatky miestnych schém.

## Prečo na tom záleží

Deprivácia nie je jedna vec: štvrť môže byť chudobná na príjem, ale bezpečná, alebo mať dostatočný príjem, no trpieť zlými zdravotnými výsledkami a zlým bývaním. Predchodcovia IMD (siahajúci k ukazovateľom deprivácie Department of the Environment zo 70. rokov) sa vyvinuli do dnešného modelu siedmich domén práve preto, že cielenie podľa jediného ukazovateľa (povedzme samotnej miery nezamestnanosti) bežne minulo oblasti deprivované iným spôsobom. IMD 2019 spája príjem, zamestnanosť, vzdelanie, zdravie, kriminalitu, bariéry v bývaní a službách a životné prostredie do jedného zloženého poradia na LSOA, pričom každá doména je postavená na vlastnom koši ukazovateľov a vážená podľa metodiky MHCLG. Keďže pracuje na úrovni malých oblastí (LSOA), nie miestnych úradov, odhaľuje ostrovčeky deprivácie ukryté vo vnútri inak zámožných okresov; preto sa podľa IMD, nie podľa priemerného príjmu miestneho úradu, v skutočnosti riadi NHS England, pupil premium ministerstva školstva a desiatky vzorcov financovania miestnych úradov. Softvér, ktorý určuje oprávnenosť, prioritizuje oslovovanie alebo vykazuje dopad podľa oblastí v Anglicku, má zaobchádzať s decilom alebo poradím IMD ako s plnohodnotným vstupom, nie dodatočným nápadom; a tam, kde program zámerne cieli na najviac deprivované oblasti, jeho hodnotenie má uplatniť [distribučné váženie](../distribučné-váženie/) zodpovedajúce tomuto cieleniu, namiesto oceňovania libry prínosu rovnako bez ohľadu na to, kam dopadne.

## Matematika

```
7 domén, vážených:
  Príjem                                    22,5 %
  Zamestnanosť                              22,5 %
  Vzdelanie, zručnosti a odborná príprava   13,5 %
  Zdravotná deprivácia a zdravotné postihnutie  13,5 %
  Kriminalita                                9,3 %
  Bariéry v bývaní a službách                9,3 %
  Životné prostredie                         9,3 %

Skóre každej domény: ukazovatele sa štandardizujú (zoradia a potom transformujú
k normálnemu rozdeleniu) a kombinujú exponenciálnou transformáciou tak, aby
vysoká deprivácia v ktoromkoľvek jednom ukazovateli nemohla byť úplne
vyrovnaná nízkou depriváciou v ostatných v rámci tej istej domény.

Zložené skóre IMD (LSOA) = Σ (skóre domény × váha domény)
Zoradiť LSOA podľa zloženého skóre → 1 (najviac deprivovaná) až 32 844 (najmenej deprivovaná)
Decily: poradie ÷ 3 284 (približne), decil 1 = najviac deprivovaných 10 % LSOA
```

## Vypracovaný príklad

**Zložené skóre LSOA**, pri ilustračných štandardizovaných skóre domén (0 = žiadny signál deprivácie, vyššie = viac deprivované):

```
Príjem                 0,35 × 0,225 = 0,07875
Zamestnanosť           0,30 × 0,225 = 0,06750
Vzdelanie              0,20 × 0,135 = 0,02700
Zdravie                0,15 × 0,135 = 0,02025
Kriminalita            0,10 × 0,093 = 0,00930
Bariéry v bývaní       0,05 × 0,093 = 0,00465
Životné prostredie     0,08 × 0,093 = 0,00744

Zložené skóre = 0,07875 + 0,06750 + 0,02700 + 0,02025
              + 0,00930 + 0,00465 + 0,00744  = 0,21489
```

Toto zložené skóre sa potom zoradí voči skóre všetkých 32 844 LSOA. Ak LSOA umiestni na poradie 2 950, spadá do decilu 1 (2 950 ÷ 3 284 ≈ 0,9, teda do najviac deprivovaných 10 % štvrtí v Anglicku), čo je pri mnohých vzorcoch financovania prah, ktorý odomkne oprávnenosť, bez ohľadu na to, ako dopadne okolitý miestny úrad v priemere.

## Súvislosť so softvérovým inžinierstvom

- Každá služba, ktorá geokóduje používateľov na PSČ alebo LSOA, môže pripojiť zverejnenú vyhľadávaciu tabuľku IMD (bezplatné verzované CSV od MHCLG) a pridať decil deprivácie ako kovariát: na cielenie oslovovania, prioritizáciu agendy alebo vykazovanie výsledkov podľa pásma deprivácie bez zberu nových osobných údajov.
- Decil IMD je štandardnou kontrolou spravodlivosti pre verejné digitálne služby: krížová tabuľka využitia služby, odpadu alebo spokojnosti podľa decilu IMD odhaľuje medzery v prístupe, ktoré agregovaná metrika skrýva; pozri [digitálnu inklúziu](../digitálne-začlenenie/) a [metriky spokojnosti občanov](../metriky-spokojnosti-občanov/).
- Keďže poradie IMD je relatívne (vždy sa sčíta do pevnej sady poradí naprieč Anglickom), nemôže ukázať, či deprivácia na národnej úrovni v čase rastie alebo klesá, len ktoré oblasti sú v danom vydaní zoradené kde voči sebe navzájom; nestavajte dashboardy absolútnych trendov len na surovom poradí IMD.

## Úskalia

- **Porovnávanie poradí IMD medzi vydaniami (2015 vs. 2019) ako časového trendu**: podkladové ukazovatele, geografie aj metodika sa medzi vydaniami menia; MHCLG výslovne odporúča nepoužívať zmeny poradia ako dôkaz, že oblasť sa stala viac alebo menej deprivovanou.
- **Aplikovanie IMD na úrovni LSOA na jednotlivcov**: LSOA v decile 1 stále obsahuje nedeprivované domácnosti a LSOA v decile 10 stále obsahuje deprivované; IMD opisuje oblasti, nie ľudí, a jeho použitie ako zástupnej náhrady za individuálnu oprávnenosť chybne klasifikuje v oboch smeroch.
- **Ignorovanie detailov na úrovni domén v prospech zloženého poradia**: dve LSOA s rovnakým zloženým skóre môžu mať úplne odlišné profily domén (jedna deprivovaná zdravím, druhá kriminalitou); schéma cielenia zameraná na jeden problém má použiť skóre príslušnej domény, nie zmiešané zložené skóre.

## Zdroje

- Ministry of Housing, Communities and Local Government. "English Indices of Deprivation 2019."
  <https://www.gov.uk/government/statistics/english-indices-of-deprivation-2019>
- MHCLG. "The English Indices of Deprivation 2019: Technical Report."
