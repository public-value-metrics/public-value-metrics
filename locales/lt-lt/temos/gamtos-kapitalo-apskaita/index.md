# Gamtos kapitalo apskaita

Gamtos kapitalo apskaita aplinką pastato į tą pačią vietą kaip ir bet kurį kitą nacionalinį ar organizacijos turtą: ji matuoja gamtos išteklių (miškų, dirvožemių, upių, šlapynių, atmosferos) atsargas ir jų teikiamų paslaugų srautą (anglies sekvestracija, apsauga nuo potvynių, rekreacija, maistas) tiek fiziniais, tiek piniginiais vienetais, kad aplinkos eikvojimas sprendimų priėmime atsirastų taip, kaip atsirastų finansinio kapitalo eikvojimas. Jungtinė Karalystė yra viena iš labiausiai pažengusių vyriausybių, tai darančių sistemingai; ją paskatino 25 metų aplinkos planas (2018 m.), o įgyvendinama per ONS Jungtinės Karalystės gamtos kapitalo sąskaitas ir HM Treasury papildomas Green Book gaires.

## Kodėl tai svarbu

Įprasta apskaita, tiek įmonių, tiek valdžios, miško nevertina, kol jis nenukertamas ir neparduodamas kaip mediena, o tada jis tampa BVP. Gamtos kapitalo apskaita egzistuoja šiai spragai užpildyti: Jungtinės Karalystės 25 metų aplinkos plane vyriausybė įsipareigojo gamtos kapitalo požiūrį integruoti į visas politikos sritis ir aiškiai pareiškė siekį būti „pirmąja karta, kuri paliks aplinką geresnės būklės, nei ją rado“. ONS nuo tada kasmet skelbia Jungtinės Karalystės gamtos kapitalo sąskaitas (<https://www.ons.gov.uk/economy/environmentalaccounts/bulletins/uknaturalcapitalaccounts/latest>), kuriose apskaičiuojama ekosistemų paslaugų piniginė vertė, nuo miškų rekreacijos ir miesto žaliųjų erdvių naudos sveikatai iki durpynų anglies kaupimo. Naudojama ta pati nacionalinių sąskaitų sistema, taikoma pagamintam kapitalui, kad gamtos kapitalas galiausiai galėtų būti tame pačiame balanse kaip keliai, pastatai ir įranga. HM Treasury gairės „Enabling a Natural Capital Approach“ (ENCA), papildančios Green Book (<https://www.gov.uk/government/publications/enabling-a-natural-capital-approach-enca-guidance>), nurodo, kaip vertintojai turėtų vertinti aplinkos sąnaudas ir naudą verslo atvejuose, kad kelio projektas, naikinantis senovinį mišką, ir potvynių projektas, atkuriantis šlapynes, galėtų būti lyginami nuosekliais piniginiais terminais, o ne vienas turėtų skaičių, o kitas pastraipą išlygų.

## Matematika

```
Ekosistemos paslaugos turto vertė = turto teikiamų paslaugų srauto grynoji dabartinė vertė (NPV)

Turto vertė = Σ (t = 1 iki T) [metinė paslaugų srauto vertė_t / (1 + r)^t]

kur:
  paslaugų srauto vertė_t = paslaugos kiekis t metais × vieneto vertė
                            (pvz., rekreacinių apsilankymų skaičius × vertė vienam apsilankymui;
                             sekvestruotos anglies tonos × anglies kaina)
  r = diskonto norma (Green Book socialinė diskonto norma, žr.
      [socialinė diskonto norma](../socialinė-diskonto-norma/))
  T = laiko horizontas, per kurį tikimasi, kad turtas teiks paslaugą
```

Tai ta pati grynosios dabartinės vertės struktūra, naudojama pagamintam kapitalui vertinti ar bet kuriai viešajai investicijai vertinti pagal [Green Book vertinimą](../green-book-vertinimas/). Gamtos kapitalo apskaitos indėlis yra patikimų fizinių kiekių ir vieneto verčių pateikimas paslaugoms, kurios anksčiau buvo vertinamos nuliu.

## Pavyzdys su skaičiavimais

**Miesto miškas, rekreacinė vertė**: 50 hektarų miškas per metus sulaukia apie 80 000 rekreacinių apsilankymų, kurių kiekvienas (pagal kelionės išlaidų ar deklaruotų pirmenybių metodą, žr. [atskleistų pirmenybių vertinimas](../atskleistų-pirmenybių-vertinimas/) ir [deklaruotų pirmenybių vertinimas](../deklaruotų-pirmenybių-vertinimas/)) vertinamas 3 £. Tikimasi, kad miškas teiks šią paslaugą 50 metų, vertinant taikant 3,5 % diskonto normą.

```
Metinė rekreacinė vertė = 80 000 × 3 £ = 240 000 £/metus

NPV per 50 metų, taikant 3,5 % ≈ 240 000 £ × anuiteto koeficientas (3,5 %, 50 metų)
anuiteto koeficientas (3,5 %; 50) ≈ 21,4

Turto vertė ≈ 240 000 £ × 21,4 ≈ 5 136 000 £
```

**Pridėjus anglies kaupimą**: tas pats miškas per metus sekvestruoja apie 400 tonų CO2, įvertintų vyriausybės neprekiaujamosios anglies kaina, apie 75 £/tona (iliustracinė; gyvam vertinimui naudokite naujausias BEIS/DESNZ paskelbtas anglies vertes).

```
Metinė anglies vertė = 400 × 75 £ = 30 000 £/metus
NPV per 50 metų, taikant 3,5 % ≈ 30 000 £ × 21,4 ≈ 642 000 £

Bendra miško turto vertė (rekreacija + anglis) ≈ 5 136 000 £ + 642 000 £
                                                 ≈ 5 778 000 £
```

Tai dar neįtraukus potvynių slopinimo, biologinės įvairovės ar oro kokybės paslaugų, kurias ENCA gairės taip pat prašo vertintojų apsvarstyti, todėl bendra suma tyčia yra apatinė, o ne viršutinė riba.

## Ryšys su programine inžinerija

- Vietos valdžios institucijų ir agentūrų aplinkos bei turto valdymo sistemos (parkai, keliai, vandens telkiniai) gali greta fizinio turto registro turėti ir gamtos kapitalo registrą, naudodamos tą patį paslaugų srauto ir vieneto vertės sandaugos šabloną kaip ir bet kuri kita organizacijos tvarkoma [vienetinių sąnaudų duomenų bazė](../vieneto-kaštų-duomenų-bazės/).
- Kadangi gamtos kapitalo NPV jautri diskonto normai (žr. pavyzdžio anuiteto koeficientą), bet kuris ją skaičiuojantis įrankis turėtų normą ir horizontą rodyti kaip matomus įvesties parametrus, o ne juos slėpti; tas pats skaidrumo principas aptariamas skyriuje [tarpgeneracinis teisingumas ir tvarumo diskontavimas](../tarpgeneracinis-teisingumas-ir-tvarumo-diskontavimas/).
- Gamtos kapitalo sąskaitos vis dažniau yra privalomas indėlis į aplinkos poveikio skyrius [Green Book vertinimo](../green-book-vertinimas/) verslo atvejuose; verslo atvejų įrankius kuriantis komanda ONS sąskaitas ir ENCA vieneto vertes turėtų traktuoti kaip nuorodinius duomenis, kuriuos reikia integruoti, o ne tai, ką vertintojai kaskart perskaičiuoja iš naujo.

## Dažniausios klaidos

- **Persidengiančių ekosistemos paslaugų dvigubas skaičiavimas.** Tos pačios vietos rekreacinė ir biologinės įvairovės vertė gali remtis tais pačiais mokėjimo noro duomenimis; ENCA gairės aiškiai įspėja nesumuoti verčių, gautų iš persidengiančių apklausos instrumentų.
- **Gamtos kapitalo turto vertės laikymas statine.** Paslaugų srautai kinta dėl klimato, valdymo ir žemės naudojimo spaudimo; miško anglies ir potvynių slopinimo vertė šį dešimtmetį nėra nuolatinė vietos savybė.
- **Nacionalinių vidutinių vieneto verčių naudojimas labai vietiniam sprendimui.** Hektaras prieinamo miesto miško ir hektaras atokios aukštumos turi labai skirtingą rekreacinę vertę; ENCA gairės rekomenduoja, kur įmanoma, naudoti vietos ar vietovei specifines vertes, o ne numatytąsias nacionalines vidutines.

## Šaltiniai

- ONS. "UK natural capital accounts."
  <https://www.ons.gov.uk/economy/environmentalaccounts/bulletins/uknaturalcapitalaccounts/latest>
- HM Government. "A Green Future: Our 25 Year Plan to Improve the Environment." (2018)
- HM Treasury / Defra. "Enabling a Natural Capital Approach (ENCA): guidance."
  <https://www.gov.uk/government/publications/enabling-a-natural-capital-approach-enca-guidance>
