# Žmogaus socialinės raidos indeksas (HDI)

HDI yra JT pagrindinė alternatyva šalių reitingavimui vien pagal pajamas: jis sujungia gyvenimo trukmę, išsilavinimą ir pajamas į vieną skaičių nuo 0 iki 1, remdamasis prielaida, kurią iškėlė ekonomistas Amartya Sen ir JT sukūrė Mahbub ul Haq, kad raida yra žmonių galimybių veikti ir būti plėtimas, o ne vien jų uždarbis. Nuo 1990 m. jis kasmet skelbiamas JT vystymo programos (UNDP) Žmogaus socialinės raidos ataskaitoje.

## Kodėl tai svarbu

Prieš HDI „raida“ buvo matuojama beveik vien BNP vienam gyventojui, kuris nieko nesako, ar augimas pasiekia paprastų žmonių sveikatą ar išsilavinimą. Sen gebėjimų požiūris perrėmino raidą kaip tikrųjų laisvių plėtimą, o ul Haq tai pavertė skelbiamu indeksu, pagal kurį UNDP galėjo reitinguoti kiekvieną šalį, priversdamas vyriausybes, praturtėjusias vien pajamomis, bet apleidusias sveikatą ar mokyklas, susidurti su prastesniu reitingu, nei rodė jų BVP (įprasti pavyzdžiai yra Persijos įlankos naftos valstybės ir kai kurios išgaunamosios ekonomikos). Trijų dimensijų HDI struktūra taip pat yra tiesioginis [daugiamatės skurdo indekso](../daugiamatis-skurdo-indeksas/) metodologinis protėvis: abu atsisako leisti vienai dimensijai atpirkti kitos trūkumą, naudodami geometrinį, o ne aritmetinį vidurkį. UNDP skelbia pilnas technines pastabas ir pagrindinius duomenis kiekvienam leidimui (<https://hdr.undp.org/data-center/human-development-index>), kas yra kanoninis šaltinis kiekvienam, kuris kuria remdamasis indeksu, o ne jį išvedinėja iš naujo.

## Matematika

```
Life Expectancy Index (LEI)     = (LE − 20) / (85 − 20)

Mean Years Schooling Index      = mean years of schooling / 15
Expected Years Schooling Index  = expected years of schooling / 18
Education Index (EI)            = (Mean Years Index + Expected Years Index) / 2

Income Index (II)               = (ln(GNI per capita) − ln(100)) / (ln(75000) − ln(100))

HDI = (LEI × EI × II) ^ (1/3)     [geometric mean of the three sub-indices]
```

Geometrinis vidurkis pasirinktas sąmoningai: kadangi jis dauginamas, o ne vidurkinamas, labai aukštas vienos dimensijos įvertis negali visiškai atsverti labai žemo kitos; šį dizainą UNDP priėmė 2010 m. būtent dėl disbalanso baudimo, pakeisdama ankstesnę aritmetinio vidurkio formulę.

## Pavyzdys su skaičiavimais

**Vidutinių pajamų šalis**: gyvenimo trukmė 72 metai, vidutiniai mokymosi metai 8, tikėtini mokymosi metai 13, BNP vienam gyventojui 12 000 $.

```
LEI = (72 − 20) / (85 − 20)              = 52 / 65   = 0,800
MYSI = 8 / 15                                        = 0,533
EYSI = 13 / 18                                       = 0,722
EI = (0,533 + 0,722) / 2                             = 0,628
II = (ln(12000) − ln(100)) / (ln(75000) − ln(100))
   = (9,393 − 4,605) / (11,225 − 4,605)
   = 4,788 / 6,620                                   = 0,723

HDI = (0,800 × 0,628 × 0,723) ^ (1/3)
    = (0,363) ^ (1/3)                                ≈ 0,713
```

0,713 HDI patenka į UNDP „aukštos žmogaus raidos“ juostą (0,700–0,799); „labai aukšta“ prasideda nuo 0,800. Atkreipkite dėmesį, kaip rezultatas jautrus silpniausiam subindeksui: jei vidutiniai mokymosi metai būtų 4, o ne 8 (MYSI = 0,267, EI = 0,494), HDI nukrenta iki (0,800 × 0,494 × 0,723)^(1/3) ≈ 0,639, t. y. visa juosta žemyn, nors niekas kitas nepasikeitė.

## Ryšys su programine inžinerija

- Geometrinio vidurkio šablonas tiesiogiai pakartotinai naudojamas bet kuriam sudėtiniam paslaugos ar produkto įverčiui, kai nenorite, kad viena stipri dimensija užmaskuotų kritinį silpnumą, pvz., viešosios skaitmeninės paslaugos prieinamumo, našumo ir patikimumo įverčius derinti daugyba, o ne svertiniu vidurkiu, kad greita, bet neprieinama paslauga negalėtų gauti įvertinimo „gerai“.
- HDI pajamų logaritminė transformacija (mažėjanti papildomo svaro ribinė vertė) yra ta pati logika, kuri slypi vertinimo [paskirstymo svertinime](../paskirstymo-svertinimas/): papildomi 1 000 $ daug daugiau reiškia skurdžiam namų ūkiui nei turtingam, o abiejų traktavimas tiesiškai neteisingai įkainoja poveikį.
- Bet kuris skydelis, pateikiantis vieną sumaišytą „skaitmeninės įtraukties“ ar „piliečių rezultatų“ įvertį, turėtų dokumentuoti savo agregavimo formulę taip pat aiškiai kaip UNDP techninės pastabos: žr. [viešojo sektoriaus KPI](../viešojo-sektoriaus-pagrindiniai-veiklos-rodikliai/) ir [viešosios vertės rezultatų kortelė](../viešosios-vertės-rezultatų-kortelė/).

## Dažniausios klaidos

- **Vidurkinimas vietoj geometrinio vidurkio**: aritmetinis vidurkis leidžia didelėms pajamoms visiškai užmaskuoti prastą sveikatą ar išsilavinimą; visa 2010 m. metodologijos pakeitimo esmė buvo sustabdyti tokį pakeitimą.
- **HDI palyginimas metai iš metų tarsi infliacija pakoreguotas BVP**: UNDP periodiškai perskaičiuoja indeksą (naujos minimalios / maksimalios ribos, peržiūrėti mokymosi viršutiniai apribojimai), todėl reitingo pokytis gali atspindėti metodologijos atnaujinimą, o ne realų poslinkį; visada patikrinkite, iš kurio HDR leidimo yra skaičius.
- **HDI laikymas skurdo matu**: tai nacionalinis vidurkis ir nieko nesako apie pasiskirstymą šalies viduje; tam naudokite [daugiamatį skurdo indeksą](../daugiamatis-skurdo-indeksas/) arba atskirą UNDP nelygybe pakoreguotą HDI.

## Šaltiniai

- UNDP. "Human Development Index (HDI)" technical notes and data.
  <https://hdr.undp.org/data-center/human-development-index>
- UNDP. Human Development Report 1990 (the index's introduction).
- Sen A. "Development as Freedom." Oxford University Press, 1999.
