# Viešųjų paslaugų produktyvumas

Viešųjų paslaugų produktyvumas matuoja, kaip efektyviai viešosios išlaidos paverčia išteklius (darbuotojus, kapitalą, prekes ir paslaugas) kokybe pakoreguotais produktais paslaugose (sveikatos priežiūros, švietimo, policijos, socialinės globos), kurios neturi rinkos kainos ir todėl nėra pajamų skaičiaus, iš kurio galima dalyti sąnaudas. Jungtinės Karalystės Nacionalinė statistikos tarnyba (ONS) šią eilutę skelbia nuo 2000-ųjų vidurio, ir tai tebėra metodologiškai labiausiai išvystytas nacionalinis bandymas atsakyti į klausimą „ar valdžiai geriau, ar blogiau sekasi paversti pinigus viešosiomis paslaugomis?“.

## Kodėl tai svarbu

Rinkoje produktyvumas yra (produkto vertė) / (išteklių sąnaudos), o produkto vertė stebima, nes kažkas už jį moka. Klubo sąnario endoprotezavimas, mokyklos vieta ir policijos patrulis neturi pardavimo kainos, todėl naiviai galima matuoti tik *išteklius* (kiek išleista), o tai skatina komentatorius didėjančias viešąsias išlaidas laikyti automatiškai blogomis, nes daugiau išteklių su nekintančia antraštine veikla atrodo kaip krintantis produktyvumas. ONS metodika, išdėstyta jos „Sources and Methods“ leidiniuose apie viešųjų paslaugų produktyvumą, tai sprendžia sukurdama *produkto* indeksą iš veiklos apimčių (atliktos operacijos, mokyti mokiniai, ištirti nusikaltimai) ir tada šį produkto indeksą *koreguodama pagal kokybę*: sveikatos priežiūroje įtraukiamos išgyvenamumo normos ir laukimo laikai, švietime pasiekimai, policijoje tokie rezultatai kaip bylų išsprendimas; taip paslauga, atliekanti tiek pat operacijų, bet pasiekianti geresnį išgyvenamumą, užfiksuojama kaip produktyvesnė, o ne tik kaip brangesnė. Antraštinė išvada, kartojama ONS leidiniuose, sektoriui yra blaivinanti: Jungtinės Karalystės viešųjų paslaugų produktyvumas smarkiai krito per COVID-19 pandemiją, o pagal paties ONS 2020-ųjų vidurio leidinius keliuose pogrupiuose, įskaitant sveikatos priežiūrą, dar nebuvo atsigavęs iki 2019 m. lygio, nors išlaidos augo; šis skirtumas „daugiau finansavimo“ ir „daugiau produktyvumo“ paverčia dviem visiškai skirtingais klausimais.

## Matematika

```
Produkto indeksas (apimtis) = Σ (veikla_i × santykinis vienetinės kainos svoris_i), bazinių metų svoriais
                          visoms paslaugų veikloms (pvz., klubo sąnario operacijos,
                          kataraktos operacijos, šeimos gydytojo konsultacijos), analogiškas
                          Laspeyreso / Paasche apimties indeksui

Kokybės korekcija     = produkto indeksas × kokybės korekcijos koeficientas
                          (pvz., įtraukiant išgyvenamumo normų, laukimo laikų,
                          pasiekimų ar recidyvo pokytį kaip daugiklį neapdorotai apimčiai)

Išteklių indeksas     = Σ (darbo valandos × darbo kainos svoris) + (prekių / paslaugų sąnaudos,
                          deflatuotos) + (kapitalo vartojimas)

Bendrojo veiksnių produktyvumo augimas = kokybe pakoreguoto produkto indekso % pokytis
                                         − išteklių indekso % pokytis
```

## Pavyzdys su skaičiavimais

**Iliustracinis NHS ūmios priežiūros sektoriaus produktyvumo skaičiavimas** (struktūra atitinka ONS metodiką):

```
1 metai: produkto apimties indeksas = 100,0 (bazinis metai), išteklių indeksas = 100,0
         → produktyvumo indeksas = 100,0

2 metai: veiklos apimtis išauga 3,0 % (daugiau operacijų, daugiau vizitų),
         bet vidutinis laukimo laikas pablogėja, taikoma kokybės korekcijos
         nuolaida −1,0 %
         Kokybe pakoreguotas produkto indeksas = 100 × 1,030 × 0,990 = 101,97

         Ištekliai auga: darbuotojų skaičius +4,0 %, kitos sąnaudos (deflatuotos) +1,5 %,
         svertinis išteklių indeksas = 100 × 1,032 = 103,2

Produktyvumo augimas = (101,97 / 100 − 1) − (103,2 / 100 − 1)
                     = 1,97 % − 3,2 % = −1,23 procentinio punkto

Aiškinimas: veikla išaugo, bet ištekliai augo greičiau ir kokybė šiek tiek
nukrito, todėl produktyvumas, t. y. produktas vienam išteklių vienetui,
sumažėjo, nors „buvo suteikta daugiau priežiūros“.
```

Būtent tokį šabloną ONS leidiniai ne kartą pateikė kai kurioms NHS dalims po pandemijos: augančios išlaidos ir augančios neapdorotos veiklos apimtys sugyvena su krintančiu išmatuotu produktyvumu, kai atsižvelgiama ir į kokybės korekciją, ir į išteklių augimą.

## Ryšys su programine inžinerija

Viešųjų paslaugų produktyvumas yra inžinerijos produktyvumo diskusijų (pristatyti istorijų taškai prieš [DORA metrikas](../dora-metrikos-viešajai-vertei/) prieš [srauto metrikas](../srauto-metrikos-vyriausybės-teikime/)) populiacijos lygio atitikmuo: neapdorotas pralaidumas be kokybės korekcijos ligoninėje yra lygiai tiek pat klaidinantis, kiek „pristatytų kodo eilučių“ skaičius programinės įrangos komandoje. Departamentams veiklos duomenų srautus kuriančios komandos kokybės korekciją turėtų traktuoti kaip pirmos klasės, versijuojamą transformacijos etapą, o ne išnašą, nes pačios ONS patikimumas remiasi tuo, kad korekcija būtų skaidri, atkuriama ir peržiūrima, kai gaunama geresnių kokybės duomenų (ONS peržiūri ankstesnių metų produktyvumo įverčius, kai galutinai patvirtinami pagrindiniai kokybės duomenys, pvz., išgyvenamumo normos, todėl bet kuri šią statistiką vartojanti sistema turi tvarkyti atgalines peržiūras, o ne tik pridėti naujus laikotarpius). Tai taip pat tiesiogiai kertasi su [bendromis nuosavybės sąnaudomis](../bendrieji-nuosavybės-kaštai-valdžios-it/) ir [dirbtinio intelekto produktyvumu viešajame sektoriuje](../di-produktyvumas-viešajame-sektoriuje/): sistema, didinanti neapdorotą veiklos apimtį negerindama ar neišlaikydama kokybės, pagal paties ONS apibrėžimą nėra produktyvumo pagerėjimas.

## Dažniausios klaidos

- **Išteklių augimo laikymas produktyvumo augimu**: daugiau išlaidų, finansuojančių daugiau darbuotojų, sukuria daugiau *veiklos*, o ne daugiau *produktyvumo*, nebent išauga ir produktas vienam išteklių vienetui; abu dažnai painiojami politiniuose komentaruose.
- **Kokybės korekcijos visiškas ignoravimas**: produkto indeksas, sukurtas tik iš neapdorotų veiklos skaičių, rodys „produktyvumo augimą“ iš daugiau mažesnės vertės ar žemesnės kokybės veiklos; ONS kokybės korekcija egzistuoja būtent tam pagauti.
- **Produktyvumo indeksų palyginimas tarp pogrupių nesuderinus metodikos versijos**: sveikatos, švietimo ir policijos produktyvumas kuriamas iš skirtingų veiklos ir kokybės duomenų šaltinių su skirtingais peržiūros ciklais; naivus tarpsektorinis palyginimas lygina nesuderinamus instrumentus.
- **Vienų metų produktyvumo kritimo skaitymas kaip nuolatinės tendencijos**: pandemijos ir popandeminio laikotarpio produktyvumo skaičiai rodė reikšmingą metinį svyravimą, nes pati kokybės duomenų (pvz., laukimo sąrašų, planinio gydymo atsigavimo) padėtis kito; ONS nuosekliai įspėja neperaiškinti vienų metų pokyčių.

## Šaltiniai

- Office for National Statistics, "Public Service Productivity" series.
  <https://www.ons.gov.uk/economy/economicoutputandproductivity/publicservicesproductivity>
- Office for National Statistics, "Public Service Productivity: Total, UK — Sources and Methods."
  <https://www.ons.gov.uk/economy/economicoutputandproductivity/publicservicesproductivity>
