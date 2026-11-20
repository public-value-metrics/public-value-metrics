# Loginis modelis

Loginis modelis yra linijinė schema, siejanti programos išteklius, veiklas, produktus, rezultatus ir poveikį. Ją skaitome iš kairės į dešinę kaip atskaitomybės grandinę: įdedami ištekliai, vykdomos veiklos, sukuriami produktai, gavėjų gyvenime pasikeičia rezultatai, o platesnis ar ilgesnis poveikis atsiranda vėliau. Tai standartinė struktūra, pagal kurią finansuotojai ir auditoriai tikisi, kad programa galės atsiskaityti, ir pirmyn žvelgiantis atitikmuo atgal žemėlapiuojamam [pokyčių teorijos](../pokyčio-teorija/) modeliui.

## Kodėl tai svarbu

HM Treasury Magenta Book nurodo loginį modelį kaip privalomą programos vertinimo planavimo elementą, o finansuotojai, tokie kaip National Lottery Community Fund, savo paraiškų ir ataskaitų šablonus kuria būtent pagal šią penkių stulpelių grandinę. Jo vertė ta, kad programa priversta vienoje schemoje pasakyti, ką išleis, ką už tai darys, ką sukurs ir, svarbiausia, kas dėl to turėtų pasikeisti, ir tai padaryti tiksliau, nei leidžia pastraipa teksto. Loginį modelį, kurio išteklių ir veiklų stulpeliai užpildyti, o rezultatų stulpelis tuščias ar miglotas, galima įvertinti iš pirmo žvilgsnio, todėl finansuotojai jo ir prašo.

## Matematika

Loginis modelis yra struktūrinė grandinė, o ne formulė:

```
Ištekliai       Veiklos           Produktai           Rezultatai            Poveikis
(skirti         (ką su jais       (tiesioginiai,       (gavėjų gyvenimo      (ilgalaikis,
 resursai)       daroma)           suskaičiuojami       pokytis)              visos populiacijos
                                   dalykai)                                   ar sistemos
                                                                              pokytis)
```

Kiekvienas stulpelis turi būti konkretesnis už ankstesnį: ištekliai yra tai, ką išleidžiate, veiklos yra tai, ką darote, produktai yra tai, kas pateikiama nepriklausomai nuo poveikio, rezultatai yra tai, kas dėl to pasikeičia (šis skirtumas išsamiai aptartas skyriuje [rezultatai ir produktai](../rezultatai-ir-produktai/)), o poveikis yra ilgalaikis, dažnai tik iš dalies priskirtinas pokytis.

## Pavyzdys su skaičiavimais

**Savivaldybė (skaitmeninė skolų konsultavimo tarnyba)**:

- Ištekliai: 180 000 £ metinis biudžetas, 4,0 etato konsultantų, bylų valdymo sistema.
- Veiklos: informavimo renginiai, individualios skolų konsultacijos.
- Produktai: surengta 900 konsultacijų; išduota 750 skolų ir išmokų planų.
- Rezultatai: iš klientų, kurie sulaukė 6 mėnesių tolesnės apklausos, 60 % (450 iš 750) nurodo sumažėjusias įsiskolinimo sumas, vidutiniškai po 1 200 £ vienam klientui, t. y. iš viso 540 000 £ mažesni įsiskolinimai.
- Poveikis: išmatuojamas benamystės paraiškų iš tarnybos klientų skaičiaus sumažėjimas per dvejus metus, tik iš dalies priskirtinas šiai tarnybai greta kitų intervencijų (žr. [kontrfaktinė analizė](../kontrafaktinė-analizė/)).

**Labdaros organizacija (maisto banko nukreipimo partnerystė)**:

- Ištekliai: 45 000 £, 1,5 etato koordinatorius, partnerystės susitarimai su 12 nukreipiančių įstaigų.
- Veiklos: nukreipimų atranka, maisto paketų komplektavimas ir dalijimas.
- Produktai: 1 100 namų ūkių išdalyta 5 000 maisto paketų.
- Rezultatai: 68 % apklaustų namų ūkių (748 iš 1 100) per tolesnį skambutį po 4 savaičių nurodo pagerėjusį aprūpinimą maistu.
- Poveikis: indėlis mažinant vietos krizių tarnybų paklausą, patvirtintas tik suvestine vietovės statistika ir nepriskirtinas vien šiai labdaros organizacijai.

## Ryšys su programine inžinerija

Loginis modelis beveik tiesiogiai atitinka rezultatų sistemos duomenų modelį: ištekliai ir veiklos yra veiklos duomenys, kuriuos jau turite (išlaidos, darbuotojai, užsiėmimų žurnalai); produktus lengva instrumentuoti, nes jie skaičiuojami paslaugos teikimo vietoje; rezultatams reikia sąmoningai suprojektuoto tolesnio duomenų rinkimo (apklausos, administracinių duomenų susiejimas), kuris neatsiras, jei jo niekas nesukurs; poveikiui paprastai reikia susietų, išilginių arba visos populiacijos duomenų, esančių už vienos programos sistemų ribų. Ataskaitų įrankių kūrėjai turėtų skatinti užsakovus rezultatų ir poveikio rodiklius apibrėžti projektavimo metu, o ne pasitenkinti tik produktų skydeliu vien todėl, kad jį palaiko transakciniai duomenys. Apie metodą, kuris vertina būtent rezultatų ir poveikio stulpelius, žr. [socialinė investicijų grąža](../socialinė-investicijų-grąža/), o apie tai, kaip sekti, ar poveikio stulpelis iš tikrųjų pasiektas, žr. [naudos realizavimas](../naudos-realizavimas/).

## Dažniausios klaidos

- **Sustojimas ties produktais.** Skydelis, rodantis surengtas konsultacijas ar išdalytus paketus ir numanantis naudą, pateikia veiklą, o ne rezultatus; žr. [rezultatai ir produktai](../rezultatai-ir-produktai/).
- **Nenurodytas priežastinis ryšys tarp stulpelių.** Loginis modelis pateikia grandinę, bet nepaaiškina, kodėl veiklos turėtų sukurti produktus, o šie – rezultatus; šis samprotavimas priklauso [pokyčių teorijai](../pokyčio-teorija/), o loginis modelis be jos yra nepatikrintas.
- **Traktavimas kaip vienkartinio paraiškos dokumento.** Loginiai modeliai, sukurti tik paraiškai patenkinti ir niekada neatnaujinti, nustoja atspindėti, ką programa iš tikrųjų daro.
- **Priskyrimo išsiplėtimas poveikio stulpelyje.** Teigti, kad visos populiacijos pokytį sukėlė vien viena programa, neturint kontrfaktinio scenarijaus, perdeda tai, ką įrodymai pagrindžia.

## Šaltiniai

- HM Treasury, Magenta Book (2020), Chapter 3. <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, logic model guidance. <https://www.tnlcommunityfund.org.uk/>
- W.K. Kellogg Foundation, "Logic Model Development Guide" (2004). <https://www.wkkf.org/resource-directory/resources/2004/01/logic-model-development-guide>
