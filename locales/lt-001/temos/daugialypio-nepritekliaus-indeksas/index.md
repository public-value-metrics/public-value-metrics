# Daugialypio nepritekliaus indeksas (IMD)

IMD yra oficialus santykinio nepritekliaus matas mažoms Anglijos teritorijoms: jis reitinguoja visas 32 844 šalies žemesnio lygmens superišvesties sritis (angl. Lower-layer Super Output Areas, LSOA, kurių kiekvienoje gyvena maždaug 1 500 gyventojų) nuo 1 (labiausiai nepasiturinti) iki 32 844 (mažiausiai nepasiturinti). Jį skelbia dabartinė Ministry of Housing, Communities and Local Government (MHCLG, anksčiau MHCLG/DCLG), naujausią kartą kaip English Indices of Deprivation 2019, ir jis tiesiogiai nukreipia centrinės vyriausybės finansavimą, visuomenės sveikatos prioritetus ir tinkamumą dešimtims vietos schemų.

## Kodėl tai svarbu

Nepriteklius nėra vienas dalykas: apylinkė gali būti skurdi pajamomis, bet saugi, arba turinti pakankamai pajamų, bet kenčianti nuo prastų sveikatos rezultatų ir blogo būsto. IMD pirmtakų indeksai (siekiantys 1970-ųjų Department of the Environment nepritekliaus rodiklius) išsivystė į dabartinį septynių sričių modelį būtent todėl, kad vieno rodiklio tikslinimas (pavyzdžiui, vien nedarbo lygis) įprastai praleisdavo kitais būdais nepritekliaus patiriančias vietoves. IMD 2019 sujungia pajamas, užimtumą, išsilavinimą, sveikatą, nusikalstamumą, kliūtis gauti būstą ir paslaugas ir gyvenamąją aplinką į vieną sudėtinį reitingą kiekvienai LSOA, kurios kiekviena sritis sudaryta iš savo rodiklių krepšelio ir svertinama pagal MHCLG metodiką. Kadangi jis veikia mažų teritorijų (LSOA), o ne vietos valdžios lygmeniu, jis atskleidžia nepritekliaus kišenes, paslėptas kitaip pasiturinčiuose rajonuose; todėl būtent IMD, o ne vidutinės vietos valdžios pajamos, yra tai, nuo ko iš tikrųjų priklauso NHS England, Department for Education mokinio priemoka (angl. pupil premium) ir dešimtys vietos valdžios finansavimo formulių. Programinė įranga, nustatanti tinkamumą, prioritetizuojanti pasiekiamumo veiklą ar teikianti poveikio ataskaitas pagal teritoriją Anglijoje, turėtų IMD deciliu ar reitingu traktuoti kaip pirmos klasės įvestį, o ne papildymą po fakto; o kai programa sąmoningai taikosi į labiausiai nepasiturinčias vietoves, jos vertinime turėtų būti taikomas su tuo tikslinimu suderintas [paskirstymo svertinimas](../paskirstymo-svertinimas/), o ne vertinamas naudos svaras vienodai, kad ir kur jis nukristų.

## Matematika

```
7 domains, weighted:
  Income                              22.5%
  Employment                          22.5%
  Education, Skills and Training      13.5%
  Health Deprivation and Disability   13.5%
  Crime                                9.3%
  Barriers to Housing and Services     9.3%
  Living Environment                   9.3%

Each domain score: indicators standardized (ranked, then transformed
towards a normal distribution) and combined by exponential transformation
so that high deprivation on any one indicator cannot be fully cancelled
out by low deprivation on others within that domain.

IMD composite score (LSOA) = Σ (domain score × domain weight)
Rank LSOAs by composite score → 1 (most deprived) to 32,844 (least deprived)
Deciles: rank ÷ 3,284 (approx.), decile 1 = most deprived 10% of LSOAs
```

## Pavyzdys su skaičiavimais

**LSOA sudėtinis įvertis**, naudojant iliustracinius standartizuotus sričių įverčius (0 = jokio nepritekliaus signalo, didesnis = labiau nepasiturintis):

```
Income               0,35 × 0,225 = 0,07875
Employment           0,30 × 0,225 = 0,06750
Education            0,20 × 0,135 = 0,02700
Health               0,15 × 0,135 = 0,02025
Crime                0,10 × 0,093 = 0,00930
Barriers to Housing  0,05 × 0,093 = 0,00465
Living Environment   0,08 × 0,093 = 0,00744

Composite score = 0,07875 + 0,06750 + 0,02700 + 0,02025
                + 0,00930 + 0,00465 + 0,00744  = 0,21489
```

Šis sudėtinis įvertis tada reitinguojamas pagal visų 32 844 LSOA įverčius. Jei jis LSOA patalpina į 2 950 vietą, ji patenka į 1 decilį (2 950 ÷ 3 284 ≈ 0,9, t. y. tarp labiausiai nepasiturinčių 10 % Anglijos apylinkių), o daugeliui finansavimo formulių tai yra slenkstis, atrakinantis tinkamumą, nesvarbu, kaip aplinkinė vietos valdžia vertinama vidutiniškai.

## Ryšys su programine inžinerija

- Bet kuri paslauga, geokoduojanti naudotojus pagal pašto kodą ar LSOA, gali prisijungti prie paskelbtos IMD paieškos lentelės (nemokamas, versijuotas CSV iš MHCLG), kad pridėtų nepritekliaus deciliu kaip kovariatę: pasiekiamumo veiklai tikslinti, bylų apkrovai prioritetizuoti ar rezultatams pagal nepritekliaus juostą pateikti nerenkant naujų asmens duomenų.
- IMD decilis yra standartinė teisingumo patikra viešosioms skaitmeninėms paslaugoms: paslaugos naudojimo, atkrytio ar pasitenkinimo kryžminis lentelių sudarymas pagal IMD deciliu atskleidžia prieigos spragas, kurias paslepia bendra metrika; žr. [skaitmeninė įtrauktis](../skaitmeninė-įtrauktis/) ir [piliečių pasitenkinimo metrikos](../piliečių-pasitenkinimo-rodikliai/).
- Kadangi IMD reitingas yra santykinis (jis visada sudaro fiksuotą reitingų rinkinį visoje Anglijoje), jis negali parodyti, ar nepriteklius nacionaliniu mastu laikui bėgant didėja, ar mažėja, tik kurios vietovės kaip reitinguojamos viena kitos atžvilgiu tame leidime; nekurkite absoliučių tendencijų skydelių vien pagal neapdorotą IMD reitingą.

## Dažniausios klaidos

- **IMD reitingų tarp leidimų (2015 ir 2019) palyginimas kaip laiko tendencijos**: pagrindiniai rodikliai, geografijos ir metodika tarp leidimų keičiasi; MHCLG aiškiai pataria nenaudoti reitingo pokyčių kaip įrodymo, kad vietovė tapo daugiau ar mažiau nepasiturinti.
- **LSOA lygmens IMD taikymas individams**: 1 decilio LSOA vis tiek turi pasiturinčių namų ūkių, o 10 decilio LSOA vis tiek turi nepasiturinčių; IMD aprašo teritorijas, o ne žmones, ir jo naudojimas kaip individualaus tinkamumo pakaitalo klaidingai klasifikuoja abiem kryptimis.
- **Sričių lygmens detalės ignoravimas vardan sudėtinio reitingo**: dvi LSOA su identiškais sudėtiniais įverčiais gali turėti visiškai skirtingus sričių profilius (viena nepasiturinti sveikata, kita nusikalstamumu); tikslinimo schema, nukreipta į vieną problemą, turėtų naudoti atitinkamą srities įvertį, o ne sumaišytą sudėtinį.

## Šaltiniai

- Ministry of Housing, Communities and Local Government. "English Indices of Deprivation 2019."
  <https://www.gov.uk/government/statistics/english-indices-of-deprivation-2019>
- MHCLG. "The English Indices of Deprivation 2019: Technical Report."
