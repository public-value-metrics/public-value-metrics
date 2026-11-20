# Atskleistų pirmenybių vertinimas

Atskleistų pirmenybių metodai nerinkos gėrybės vertę išveda iš stebimo elgesio susijusioje rinkoje, o ne klausdami žmonių tiesiogiai. Hedoninis kainodaros metodas ir kelionės išlaidų metodas yra du pagrindiniai darbiniai metodai: abu pradeda nuo realaus sandorio ir iš jo išveda numanomą kainą dalyko, kuris niekada nebuvo parduodamas tiesiogiai.

## Kodėl tai svarbu

Kai [deklaruotų pirmenybių](../deklaruotų-pirmenybių-vertinimas/) metodai užduoda hipotetinį klausimą, atskleistų pirmenybių metodai stebi, už ką žmonės iš tikrųjų sumokėjo; Green Book tai laiko apskritai patikimesniu įrodymu, nes jam netaikomas hipotetinis šališkumas: hedoninio būsto kainų tyrimo respondentai iš tikrųjų sumokėjo matuojamą priemoką ar gavo nuolaidą (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>, 2 priedas). Hedoninė kainodara išskaido rinkos kainą (dažniausiai būsto kainas) į numanomas kiekvieno gėrybės požymio kainas, leisdama analitikams, pavyzdžiui, atskirti priemoką, kurią namų ūkiai iš tikrųjų moka už gyvenimą ramesnėje vietoje ar su geresne oro kokybe, statistiškai kontroliuojant visus kitus požymius, darančius įtaką būsto kainai (dydį, vietą, mokyklos aptarnavimo zoną). Kelionės išlaidų metodas daro analogiškai rekreacinėms vietoms be įėjimo mokesčio: laikas ir pinigai, kuriuos žmonės išleidžia keliaudami į vietą, atskleidžia apatinę ribą, kiek vieta jiems verta, nes niekas nepatiria išlaidų, viršijančių lankymosi vertę jam.

Abu metodai turi tą pačią struktūrinę ribą: jie gali įvertinti tik tai, kas įtvirtinta esamame rinkos sandoryje. Triukšmas prie kilimo tako atsispindi būsto kainose, nes triukšmu besirūpinantys žmonės renkasi tylesnį būstą; rūšies, kurios niekas nelanko ir šalia kurios negyvena, egzistavimo vertė neatsispindi jokiame sandoryje, ir būtent šią spragą užpildyti ir skirti [deklaruotų pirmenybių](../deklaruotų-pirmenybių-vertinimas/) metodai.

## Matematika

```
Hedoninė kainodara:
  Būsto kaina = f(struktūriniai požymiai, vietos požymiai,
                   dominantis aplinkos požymis, ...)
  Vertinama regresija; aplinkos požymio koeficientas (kitus
  nekeičiant) yra jo numanoma kaina.

  Požymio X numanoma kaina = ∂(būsto kaina) / ∂X

Kelionės išlaidų metodas:
  Lankymosi lygis (apsilankymai vienam gyventojui iš zonos i) = f(kelionės išlaidos iš zonos i,
                   pakaitinės vietos, socioekonominės kontrolės)
  Įvertinama lankymosi paklausos kreivė kaip kelionės išlaidų funkcija.
  Vartotojo perteklius = plotas po įvertinta paklausos kreive
                       = vietos vertė lankytojams
```

Abiem metodams reikia statistiškai tvirto kontrolinio rinkinio: praleidus painiavą keliantį požymį (hedoninis) ar netoliese esančią pakaitinę vietą (kelionės išlaidų), numanoma kaina iškreipiama kryptimi, kuri iš anksto ne visada akivaizdi; todėl Green Book 2 priedas reikalauja pateikti regresijos specifikaciją ir kontroles, o ne vien antraštinį koeficientą.

## Pavyzdys su skaičiavimais

**Nacionalinė valdžia**: paties Green Book anglies šešėlinės kainos metodika iš dalies remiasi hedoniniais įrodymais, bet paprastesnis iliustracinis atvejis yra orlaivių triukšmas. Hedoninis tyrimas, regresuojantis būsto pardavimo kainas skrydžio trajektorijos zonoje pagal atstumu pasvertą triukšmo poveikį, kontroliuojant dydį, amžių ir mokyklos aptarnavimo zoną, nustato, kad kiekvienas 1 decibelo vidutinio triukšmo poveikio padidėjimas siejamas su 0,5 % būsto kainos sumažėjimu. Tipiniam 280 000 £ vertės namui paveiktoje vietovėje:

```
Numanoma kaina už decibelą = 280 000 £ × 0,5 % = 1 400 £ vienam namų ūkiui
Namų ūkiai, paveikti 3 dB padidėjimo dėl naujo kilimo tako = 18 000
Bendra numanoma triukšmo padidėjimo kaina = 1 400 £ × 3 × 18 000 = 75,6 mln. £
```

Tai vienkartinė kapitalizuota kaina (įtvirtinta būsto kainoje), ir vertinime reikia stengtis jos nesuskaičiuoti dukart su atskirai apskaičiuotu metiniu triukšmo erzinimo sąnaudų srautu.

**Labdaros organizacija**: aplinkosaugos labdaros organizacija kelionės išlaidų metodu vertina nemokamo įėjimo gamtos rezervatą. Lankytojų pašto kodų apklausos duomenys duoda vidutines kelionės pirmyn ir atgal išlaidas (laikas, vertinamas Green Book rekomenduojama ne darbo laiko verte, plius kuras) 14 £ vienam apsilankymui, per metus 40 000 apsilankymų. Įvertinta paklausos kreivė (lankymosi lygis krenta, kai kelionės išlaidos iš zonos didėja) numano vartotojo perteklių vienam apsilankymui, virš faktiškai išleistų 14 £, apie 9 £.

```
Bendra metinė vertė = 40 000 apsilankymų × (14 £ išleista + 9 £ vartotojo perteklius)
                    = 40 000 × 23 £ ≈ 920 000 £/metus
```

Tai gerokai viršija rezervato nulinio įėjimo mokesčio pajamas ir suteikia labdaros patikėtiniams pagrįstą vietos rekreacinės vertės skaičių, kai jie argumentuoja finansuotojams.

## Ryšys su programine inžinerija

Atskleistų pirmenybių mąstymas viešojo sektoriaus produkto analitikoje pasirodo dažniau, nei praktikai suvokia: nemokamos valdžios skaitmeninės paslaugos naudojimo duomenys patys yra atskleistų pirmenybių vertės įrodymas (dažnumą, sesijos trukmę ir, tai ypač rodo, pasikartojančio ir vienkartinio naudojimo šablonus galima analizuoti taip pat, kaip kelionės išlaidų modelis traktuoja lankymosi dažnumą prieš atstumą). Kai paslauga turi tikrų pakaitalų (popierinį kanalą, telefono liniją), „išlaidas“, kurias piliečiai patiria naudodamiesi skaitmeniniu kanalu (laiką, duomenis, įrenginį), galima apskaičiuoti ir palyginti su naudojimu, tiesiogiai atkartojant kelionės išlaidų logiką. Žr. [skaitmeninių paslaugų standartas](../skaitmeninių-paslaugų-standartas/) ir [atvirųjų duomenų vertė](../atvirųjų-duomenų-vertė/), kuri susiduria su būtent šia vertinimo problema gėrybei be tiesioginės rinkos kainos.

## Dažniausios klaidos

- **Praleistų kintamųjų šališkumas hedoniniuose modeliuose.** Praleidus koreliuojantį požymį (mokyklos kokybė koreliuoja ir su būsto kaina, ir su dominančiu aplinkos kintamuoju), numanomos kainos įvertis iškreipiamas; reikia pateikti ir tikrinti specifikaciją, o ne vien rezultatą.
- **Pakaitinių vietų ignoravimas kelionės išlaidų tyrimuose.** Lankytojo atskleista vietos vertė nuvertinama, jei egzistuoja artimesnė pakaitinė vieta ir ji nekontroliuojama; jis gali lankytis daugiausia todėl, kad nemokama, o ne todėl, kad vieta ypatingai vertinga.
- **Atskleistų pirmenybių taikymas gėrybei be jokio rinkos aido.** Egzistavimo vertė, pasirinkimo vertė ir palikimo vertė neatsispindi jokiame sandoryje ir negali būti atkurtos hedoniniais ar kelionės išlaidų metodais; ši spraga priklauso [deklaruotų pirmenybių vertinimui](../deklaruotų-pirmenybių-vertinimas/).
- **Kapitalizuotos (vienkartinės) vertės painiojimas su metiniu srautu.** Hedoniniai būsto kainų efektai paprastai yra vienkartinės kapitalizuotos vertės; traktuoti juos kaip metinį naudos srautą išpučia vertinimą.

## Šaltiniai

- HM Treasury. "The Green Book," Annex 2: valuing non-market impacts.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Transport / Civil Aviation Authority. Aircraft noise valuation studies used in
  airport appraisal. <https://www.gov.uk/guidance/aviation-noise>
- Rosen S. "Hedonic Prices and Implicit Markets: Product Differentiation in Pure Competition."
  Journal of Political Economy, 1974.
- Clawson M, Knetsch JL. "Economics of Outdoor Recreation." Johns Hopkins University Press, 1966
  (kelionės išlaidų metodo kilmė).
