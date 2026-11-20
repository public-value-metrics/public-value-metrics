# Atvirųjų duomenų vertė

Atvirųjų duomenų vertė yra problema įvertinti, kiek vertos valdžios ir viešieji duomenys, kai jie neturi kainos: jie neparduodami, todėl nėra pajamų eilutės, tačiau jų paskelbimas (orų įrašai, transporto tvarkaraščiai, pašto kodų ribos, įmonių registrai) akivaizdžiai skatina ekonominę ir socialinę veiklą toliau grandinėje. Tinkamai juos vertinti svarbu, nes ir „juos paskelbti nieko nekainuoja“, ir „jie nieko verti“ yra klaidingi teiginiai, o programinės įrangos inžinieriui, sprendžiančiam, ar atverti API ar duomenų rinkinį, reikia geresnio argumento nei vienas iš jų.

## Kodėl tai svarbu

Dažniausiai cituojamą viršutinę (top-down) apskaičiavimą pateikė McKinsey Global Institute 2013 m. ataskaitoje „Open data: Unlocking innovation and performance with liquid information“, kurioje potenciali metinė atvirųjų duomenų vertė septyniose srityse (švietimas, transportas, vartojimo prekės, elektra, nafta ir dujos, sveikatos priežiūra ir vartotojų finansai) įvertinta 3–5 trilijonais dolerių per metus visame pasaulyje, veikiant tokiems mechanizmams kaip didesnis skaidrumas, efektyvesnis pasiūlos ir paklausos derinimas bei naujų duomenimis grįstų produktų ir paslaugų atsiradimas. Šis skaičius yra scenarijaus apskaičiavimas, o ne išmatuotas faktinis rezultatas, ir jis nuolat klaidingai cituojamas tarsi būtų pajamos, kurias valdžia gali gauti tiesiogiai, nors vertė daugiausia tenka trečiosioms šalims (verslui, tyrėjams, piliečiams), naudojančioms duomenis, o būtent todėl juos verta atverti, o ne parduoti. Jungtinės Karalystės Open Data Institute, 2012 m. įkurtas Sir Tim Berners-Lee ir Sir Nigel Shadbolt, vėliau sukaupė detalesnių, apatinės (bottom-up) krypties atvejų studijų rinkinį pagal sektorius ir duomenų rinkinius, kuris realiam verslo atvejui yra daug naudingesnis nei McKinsey antraštinis skaičius, nes rodo vertės kūrimo mechanizmą, o ne vien bendrą jos dydį.

## Matematika

Atvirieji duomenys neturi rinkos kainos, todėl vertinimo metodai ją pakeičia; kartojasi trys požiūriai ir nė vienas atskirai nėra pakankamas:

```
1. Išvengtų sąnaudų / pakeitimo kainos metodas:
   vertė ≈ tiek, kiek naudotojai būtų sumokėję patys pagamindami ar
   licencijuodami lygiaverčius duomenis - apatinė riba, nepaiso vertės,
   sukurtos naudojimo būdais, kurių pirminis gamintojas nenumatė

2. Rinkos analogo / tolesnės veiklos metodas:
   vertė ≈ pajamos ar sutaupymai, kuriuos sukuria įmonės ir paslaugos,
   sukurtos remiantis duomenimis (pvz., navigacijos programėlės,
   sukurtos remiantis atviraisiais žemėlapių ir eismo duomenimis) -
   fiksuoja realią ekonominę veiklą, bet ją sunku švariai priskirti
   pačiam duomenų paskelbimui (žr. papildomumas ir deadweight)

3. Sąlyginio / deklaruotų pirmenybių metodas:
   vertė ≈ tai, ką naudotojai sako, kad mokėtų, arba laikas, kurį,
   jų teigimu, jiems sutaupo - bendrąjį metodą ir jo šališkumus žr.
   deklaruotų pirmenybių vertinime

Nė vienas jų nepateikia skaičiaus, tokio švaraus kaip rinkos kaina;
patikimi atvirųjų duomenų verslo atvejai patikrina rezultatą bent dviem
metodais ir aiškiai nurodo, kuris mechanizmas atlieka darbą.
```

## Pavyzdys su skaičiavimais

**Iliustracinis nacionalinių žemėlapių / adresų duomenų paskelbimas** (metodika pagal ODI tipo atvejų studijas, skaičiai iliustruoja mastą, kurį tokios studijos paprastai randa):

```
Išvengtų sąnaudų apskaičiavimas:
  Įmonės, kurios kitaip komerciškai licencijuotų lygiavertius adresų
  suderinimo duomenis, vidutinės licencijos kaina apie 4 000 £/metus,
  maždaug 15 000 MVĮ dabar naudoja nemokamą atvirąjį duomenų rinkinį
  = 15 000 × 4 000 £ = 60 000 000 £/metus vien išvengtų licencijų sąnaudų

Tolesnės veiklos apskaičiavimas (labiau spekuliatyvus, reikia kontrfaktinio scenarijaus):
  Nauji maršrutų ir logistikos produktai, sukurti remiantis atviraisiais
  duomenimis, kurių be jų nebūtų arba kurie būtų esmingai prastesni -
  reikia palyginti su kontrfaktiniu scenarijumi, kad duomenys liktų
  uždari ar komerciškai licencijuoti (kontrfaktinė analizė), nes dalis
  tos veiklos vis tiek vyktų naudojant mokamus duomenis didesne kaina,
  o tai yra deadweight „atvėrimo sukurtos vertės“ prasme

Pagrįstas verslo atvejis išvengtų sąnaudų skaičių pateikia kaip tvirtą
apatinę ribą, o tolesnės veiklos skaičių traktuoja kaip viršutinės ribos
scenarijų, o ne faktą.
```

## Ryšys su programine inžinerija

Inžinieriams praktinis atvirųjų duomenų vertės klausimas paprastai yra siauresnis nei nacionalinės antraštinės sumos: ar šio konkretaus API ar duomenų rinkinio atvėrimas (užuot laikius jį už partnerio susitarimo) padidina pakartotinį naudojimą tiek, kad pateisintų nuolatines dokumentavimo, versijavimo ir palaikymo kaip viešosios sąsajos sąnaudas? Šios palaikymo sąnaudos yra realios ir yra „kurk kartą, naudok dažnai“ ekonomikos, aprašytos skyriuje [valdžia kaip platforma](../vyriausybė-kaip-platforma/), atitikmuo; šios dvi temos yra artimos giminaitės, viena apie bendrą kodą ir infrastruktūrą, kita apie bendrus duomenis. Bet kokį atvirųjų duomenų vertės teiginį prieš įtraukiant į verslo atvejį reikia patikrinti pagal [papildomumas ir deadweight](../papildomumas-ir-tuščiasis-poveikis/): veikla, kuri būtų vykusi ir taip, naudojant komerciškai licencijuotus duomenis, nėra vertė, kurią sukūrė *atvėrimas*.

## Dažniausios klaidos

- **McKinsey 3–5 trilijonų dolerių skaičiaus citavimas kaip būdingo Jungtinei Karalystei arba šio duomenų rinkinio dalies**: tai 2013 m. pasaulinis, septynių sektorių scenarijaus apskaičiavimas; naudoti jį kaip tikslų daugiklį vienam nacionaliniam duomenų rinkiniui reiškia klaidingai pateikti, kas tai per skaičius.
- **Kontrfaktinio scenarijaus nebuvimas**: prisiimti nuopelnus už visą tolesnę ekonominę veiklą, paremtą atviraisiais duomenimis, neklausiant, kiek jos vis tiek būtų vykę naudojant mokamus ar licencijuotus duomenis didesne kaina (žr. [papildomumas ir deadweight](../papildomumas-ir-tuščiasis-poveikis/) bei [kontrfaktinė analizė](../kontrafaktinė-analizė/)).
- **Gamybos sąnaudų painiojimas su sukurta verte**: brangiai surinktas duomenų rinkinys automatiškai nėra vertingas paskelbti, o pigus automatiškai nėra mažos vertės; vertė seka tolesnį naudojimą, o ne ankstesnes sąnaudas.
- **Nuolatinių „atvirumo“ palaikymo sąnaudų ignoravimas**: vienkartinio CSV ištraukos paskelbimas nėra tas pats įsipareigojimas kaip dokumentuotos, versijuotos, palaikomos atviros API eksploatavimas; pastarosios nepakankamas finansavimas po paleidimo pranešimo yra dažna nesėkmės forma.

## Šaltiniai

- McKinsey Global Institute, "Open data: Unlocking innovation and performance with liquid information" (2013). <https://www.mckinsey.com/business-functions/mckinsey-digital/our-insights/open-data-unlocking-innovation-and-performance-with-liquid-information>
- Open Data Institute. <https://theodi.org/>
