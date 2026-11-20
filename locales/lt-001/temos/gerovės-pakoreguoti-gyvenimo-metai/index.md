# Gerovės pakoreguoti gyvenimo metai (WELLBY)

WELLBY – tai vienas papildomas pasitenkinimo gyvenimu balas standartinėje 0–10 gerovės skalėje vienam žmogui vieneriems metams. Tai struktūrinis sveikatos ekonomikoje naudojamo QALY analogas – vienas vienetas, leidžiantis palyginti intervencijas, kurių rezultatai neturi nieko bendro, – tačiau pagrįstas subjektyvia gerove, o ne klinikinėmis sveikatos būsenomis, ir išdėstytas HM Treasury dokumente „Wellbeing guidance for appraisal: supplementary Green Book guidance“ (2021).

## Kodėl tai svarbu

Kaštų ir naudos vertinimui reikia bendro vieneto, kad būtų galima palyginti jaunimo klubo dotaciją, kelių saugos schemą ir psichikos sveikatos paslaugą, kurios neturi bendro rezultato mato. Sveikatos ekonomika tai išsprendė klinikinėms intervencijoms su QALY – kokybe pakoreguotais gyvenimo metais, sverti nuo 0 (mirtis) iki 1 (visiška sveikata). HM Treasury gerovės gairės šią logiką išplečia ne sveikatos viešosioms išlaidoms, naudodamos ONS suderintą pasitenkinimo gyvenimu klausimą („Overall, how satisfied are you with your life nowadays?“, atsakoma 0–10) kaip rezultato kopėčias vietoj sveikatos būsenos indekso. 1 WELLBY reiškia, kad vieno žmogaus pasitenkinimas gyvenimu pakyla vienu pilnu balu vieneriems metams (arba, lygiaverčiai, dešimties žmonių pasitenkinimas pakyla po 0,1 balo vieneriems metams – WELLBY sumuojasi visoje populiacijoje taip, kaip QALY). HM Treasury gairės nustato iliustracinę piniginę vertę vienam WELLBY (apie £13 000, 2019/20 m. kainomis), išvestą suderinus subjektyvios gerovės duomenis su kitais gyvenimo metų vertės požiūriais, suteikdamos vertintojams būdą pinigais išreikšti rezultatus – vienatvės mažinimą, bendruomenės sanglaudą, prieigą prie žaliųjų erdvių – kuriuos [gerovės vertinimo](../gerovės-vertinimas/) metodai anksčiau galėjo tik aprašyti, bet ne palyginti bendru pagrindu su sveikatos ar saugos išlaidomis.

## Matematika

```
WELLBY = Δ pasitenkinimas gyvenimu (0–10 skalė) × metų, kuriuos pokytis išlieka, skaičius
        (susumuota visiems paveiktiems žmonėms)

Pinigais išreikšta gerovės nauda = sukurti WELLBY × vertė už WELLBY (HMT orientacinė vertė)

palyginimui QALY = Δ sveikatos būsenos naudingumas (0–1 skalė) × metai, nugyventi toje būsenoje
```

0–10 pasitenkinimo skalė ir 0–1 QALY naudingumo skalė nėra keičiamos viena kita be konversijos žingsnio; HM Treasury gairės aptaria abiejų suderinimą, kad, pavyzdžiui, sveikatos intervencija, vertinama QALY, ir socialinė intervencija, vertinama WELLBY, nebūtų tyliai suskaičiuotos dukart ar paliktos nepalyginamos tame pačiame [Green Book vertinime](../green-book-vertinimas/).

## Pavyzdys su skaičiavimais

**Vietos valdžios vienatvės paslauga**: draugystės schema aptarnauja 400 izoliuotų vyresnio amžiaus gyventojų. Tolesnės apklausos rodo, kad vidutinis pasitenkinimas gyvenimu pakyla nuo 5,2 iki 6,0 (0,8 balo prieaugis), o poveikis, kaip vertinama, išlieka 2 metus, kol išblėsta.

```
WELLBY = 400 žmonių × 0,8 balo × 2 metai = 640 WELLBY

Pinigais išreikšta vertė = 640 × £13 000 = £8 320 000
```

Palyginti su metiniais programos kaštais £300 000 (£600 000 per 2 metus), naudos ir kaštų santykis yra maždaug 8 320 000 / 600 000 ≈ **13,9:1** – skaičius, kuris dabar gali stovėti toje pačioje vertinimo lentelėje kaip sveikatos schemos kaštai už išvengtą QALY ar transporto schemos kelionės laiko sutaupymas.

**Labdara, mažesnio masto**: bendruomenės meno programa pasiekia 50 dalyvių, išmatuotas pasitenkinimo prieaugis – 0,3 balo, trunkantis 1 metus.

```
WELLBY = 50 × 0,3 × 1 = 15 WELLBY
Pinigais išreikšta vertė = 15 × £13 000 = £195 000
```

## Ryšys su programine inžinerija

- Bet kuri gyventojams skirta paslauga, jau renkanti pasitenkinimo gyvenimu ar gerovės apklausos punktą (daugelis vietos valdžios ir sveikatos bei priežiūros platformų tai daro, laikydamosi keturių standartinių ONS gerovės klausimų), gali skaičiuoti WELLBY tiesiai iš esamų duomenų srautų, užuot užsakiusi atskirą ekonominį vertinimą kiekvienam paslaugos pokyčiui.
- WELLBY suteikia inžinerijos komandoms, kuriančioms [socialinės vertės akto](../socialinės-vertės-aktas/) ataskaitoms ar [socialinės investicijų grąžos](../socialinė-investicijų-grąža/) sprendimams, nacionaliniu mastu standartizuotą, HM Treasury patvirtintą vardiklį, išvengiant atskirų „poveikio balų“, kurių negalima palyginti tarp sutarčių ar tiekėjų, gausos.
- Kadangi WELLBY yra adityvūs žmonių ir laiko atžvilgiu, jie sklandžiai įsilieja į populiacijos lygio rezultatų sekimą, naudojamą [rezultatais grįstos atskaitomybės](../rezultatais-grįsta-atskaitomybė/) sistemose – paslaugos skydelis gali pranešti apie per ketvirtį sukurtus kaupiamuosius WELLBY taip, kaip sveikatos sistema praneša apie gautus QALY.

## Dažniausios klaidos

- **Prielaida, kad savarankiškai pateikti pasitenkinimo prieaugiai visiškai priskirtini intervencijai** – be kontrafaktinio scenarijaus (lyginamosios grupės ar prieš ir po schemos su kontrolėmis) WELLBY prieaugio neįmanoma atskirti nuo bendrų tendencijų; žr. [kontrafaktinė analizė](../kontrafaktinė-analizė/).
- **WELLBY ir QALY maišymas vienoje sumoje be suderinimo** – HM Treasury gairės aiškiai teigia, kad jie naudoja skirtingas skales ir skirtingas pagrindines vertės teorijas; naiviai juos susumavus persidengianti gerovė suskaičiuojama dukart.
- **Orientacinės piniginės vertės naudojimas nekritiškai** – £ už WELLBY skaičius yra nacionalinio vidurkio įvertis su realiomis neapibrėžtumo ribomis; HM Treasury gairės rekomenduoja jautrumo analizę, o ne laikyti jį fiksuotu valiutos kursu.

## Šaltiniai

- HM Treasury. "Wellbeing guidance for appraisal: supplementary Green Book guidance." (2021)
  <https://www.gov.uk/government/publications/wellbeing-guidance-for-appraisal-supplementary-green-book-guidance>
- ONS. "Personal well-being user guidance" (the four standard wellbeing questions).
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing>
- HM Treasury. "The Green Book: Central Government Guidance on Appraisal and Evaluation."
