# Paslaugų standartai ir sandorių metrikos

GOV.UK paslaugų standartas (Service Standard) yra Jungtinės Karalystės vyriausybės 14 punktų kontrolinis sąrašas viešajai skaitmeninei paslaugai kurti ir eksploatuoti; jį lydi mažas, privalomas kiekybinių sandorių metrikų rinkinys (kaina už sandorį, užbaigimo lygis, skaitmeninis naudojimas ir naudotojų pasitenkinimas), kurį komandos turi skelbti kiekvienai veikiančiai centrinės valdžios paslaugai. Kartu standartas ir metrikos yra platesnių šioje saugykloje aprašytų viešosios vertės ir KPI sistemų operacinė, kasdienė specializacija, skirta tiesiogiai programinės įrangos pristatymo komandoms.

## Kodėl tai svarbu

Paslaugų standartas, tvarkomas GOV.UK paslaugų vadove, reikalauja, kad kiekvienas tam tikro momento vertinimas (alfa, beta, veikianti paslauga) valdžios skaitmeninei paslaugai parodytų, tarp 14 punktų, kad komanda supranta naudotojų poreikius, dirba daugiadisciplinėje komandoje, dažnai kartoja ir tobulina bei *vertina įrankius, sistemas ir darbo būdus*. Istoriškai greta veikė viešoji Performance Platform, kurioje kiekviena veikianti paslauga atvirai skelbė savo sandorių duomenis; ta platforma jau uždaryta, bet pagrindinė pareiga matuoti ir skelbti šias keturias pagrindines metrikas išlieka per paslaugų vadovo „sėkmės matavimo“ gaires. Priežastis, kodėl tai skiriasi nuo bendro programinės įrangos KPI skydelio, yra ta, kad šios metrikos buvo aiškiai suprojektuotos kaip vienas susietas ekonominis modelis, o ne keturi nepriklausomi įverčiai: visas skaitmeninės valdžios sutaupymų pagrindimas (Government Digital Service Digital Efficiency Report nustatė, kad skaitmeniniai sandoriai maždaug 20 kartų pigesni nei telefonu ir maždaug 50 kartų pigesni nei akis į akį palyginamoms vietos valdžios paslaugoms) išsipildo tik jei užbaigimo lygis išlieka aukštas, o skaitmeninis naudojimas iš tikrųjų auga, o ne tik greta nepakitusio brangaus kanalo pridedamas pigus kanalas.

## Matematika

```
Kaina už sandorį         = visos paslaugos eksploatavimo sąnaudos / užbaigtų sandorių skaičius
Užbaigimo lygis          = užbaigti sandoriai / pradėti sandoriai × 100
Skaitmeninis naudojimas  = skaitmeninio kanalo sandoriai / visų kanalų sandoriai × 100
Naudotojų pasitenkinimas = % patenkintų + labai patenkintų, 5 balų apklausoje paslaugos metu

Kanalo perkėlimo sutaupymas = sandorių apimtis × naudojimo poslinkis × (sandorio kaina
                              senajame kanale − sandorio kaina skaitmeniniu būdu)

Nesėkmės paklausos kaina = (1 − užbaigimo lygis) × skaitmeniniu būdu bandyti sandoriai ×
                           atsarginio kanalo, kurį tie naudotojai pasirenka vietoj to, kaina
```

## Pavyzdys su skaičiavimais

**Iliustracinė centrinės valdžios licencijų atnaujinimo paslauga**, 2 mln. sandorių per metus, šiuo metu 65 % telefonu (3,00 £ už sandorį) ir 35 % skaitmeniniu būdu (0,30 £ už sandorį), užbaigimo lygis 80 %. Perprojektavimas pagal 14 punktų paslaugų standartą pakelia skaitmeninį naudojimą iki 60 %, o užbaigimą iki 92 %:

```
Naudojimo poslinkio sutaupymas = 2 000 000 × 0,25 × (3,00 − 0,30) = 1 350 000 £/metus

Nesėkmės paklausos kaina, prieš:
  2 000 000 × 0,35 × (1 − 0,80) × 3,00 £ = 420 000 £/metus (atsisakiusieji grįžta prie telefono)

Nesėkmės paklausos kaina, po:
  2 000 000 × 0,60 × (1 − 0,92) × 3,00 £ = 288 000 £/metus

Grynasis nesėkmės paklausos sutaupymas = 420 000 £ − 288 000 £ = 132 000 £/metus

Bendras metinis sutaupymas ≈ 1 350 000 £ + 132 000 £ = 1 482 000 £/metus
```

Aritmetika aiškiai parodo, kodėl užbaigimo lygis nėra antraeilė metrika: be pagerėjimo nuo 80 % iki 92 % naudojimo poslinkio sutaupymą iš dalies atsiimtų nesėkmės paklausa, nukreipianti nusivylusius skaitmeninius naudotojus tiesiai atgal į brangų telefono kanalą.

## Ryšys su programine inžinerija

Šios keturios metrikos yra veikiantis sąnaudų ir pasekmių skydelio pavyzdys: viena sąnaudų metrika, laikoma atskirai nuo trijų rezultatų / kokybės metrikų, tyčia niekada nesuvedama į vieną įvertį; tą pačią discipliną gina [viešojo sektoriaus KPI](../viešojo-sektoriaus-pagrindiniai-veiklos-rodikliai/). Inžinieriams tai skyla į konkretų, priskiriamą darbą: užbaigimo lygis yra piltuvo instrumentavimo problema, ir kiekvienas atsisakymo taškas kelionėje iš principo randamas ir taisomas; kaina už sandorį reikalauja tikros vienetinių sąnaudų apskaitos, įskaitant darbuotojų padedamus ir popierinio kanalo kaštus, o ne vien debesies talpinimo išlaidas (žr. [kaina už sandorį](../kaštai-vienam-sandoriui/) ir [bendros nuosavybės sąnaudos valdžios IT](../bendrieji-nuosavybės-kaštai-valdžios-it/)); o skaitmeninis naudojimas yra teisingumo metrika, apsirengusi efektyvumo kostiumu: piliečiai, kurie negali ar nenori keisti kanalo, neproporcingai dažnai yra vyresni, neįgalūs ar skaitmeniškai atskirti, todėl agresyvus kanalų uždarymas „sutaupymą“ paverčia prieigos žala (žr. [skaitmeninė įtrauktis](../skaitmeninė-įtrauktis/) ir [kanalų perkėlimo sutaupymai](../kanalų-perkėlimo-sutaupymai/)). Pats 14 punktų standartas yra procesų specifikacija už šių skaičių; standartą visą žr. [skaitmeninių paslaugų standartas](../skaitmeninių-paslaugų-standartas/), o kaip čia pateiktas pasitenkinimo skaičius susijęs su platesniu pasitikėjimo matavimu, žr. [piliečių pasitenkinimo metrikos](../piliečių-pasitenkinimo-rodikliai/).

## Dažniausios klaidos

- **Naudojimas, pasiektas uždarius alternatyvų kanalą**: telefono linijos uždarymas aritmetiškai pakelia skaitmeninio naudojimo procentą, o nesėkmės paklausą nuverčia ant bet kurio likusio kanalo (dažnai brangesnio pagalba grįsto skaitmeninio ar akis į akį kelio); visada matuokite visos sistemos kainą, o ne vien santykį.
- **Užbaigimo lygio matavimas nuo antro piltuvo žingsnio**: pradedant „pradėtų“ skaičių po pirmojo tikro atkritimo taško, užbaigimo lygis pagražinamas ir paslepiamas didžiausias ištaisomas nuostolis.
- **Kaina už sandorį be pagalba grįstos skaitmeninės paramos**: vien skaitmeninė vieneto kaina, nepaisanti darbuotojų laiko, praleisto padedant naudotojams, kurie negali apsitarnauti patys, nuvertina tikrąją kanalo kainą.
- **Metrikų skelbimas be bendro apibrėžimo tarp paslaugų**: „sandoris“ ir „užbaigtas“ skirtingose paslaugų komandose reiškia skirtingus dalykus, nebent apibrėžimai standartizuoti ir versijuojami, todėl palyginimas tarp paslaugų nepatikimas.

## Šaltiniai

- GOV.UK Service Manual, "The Service Standard." <https://www.gov.uk/service-manual/service-standard>
- GOV.UK Service Manual, "Measuring Success — Data You Must Publish."
  <https://www.gov.uk/service-manual/measuring-success/data-you-must-publish>
- GOV.UK, "Digital Efficiency Report."
  <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
