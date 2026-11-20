# Savanorių laiko vertė

Savanorių laiko vertė – tai piniginis neapmokamo darbo įvertis, dažniausiai naudojamas nurodyti tikrąjį labdaros organizacijos ekonominį pėdsaką – jos sąskaitas plius darbą, už kurį jai nereikėjo mokėti – arba pagrįsti, kad tam tikra intervencija yra veiksmingesnė kaštų atžvilgiu, nei rodo vien jos grynųjų pinigų biudžetas. Dominuoja dvi nacionalinės metodikos: JAV Independent Sector įvertis ir Jungtinės Karalystės Nacionalinės statistikos tarnybos (ONS) / NCVO metodas, ir jos tą pačią darbo valandą įkainoja gana skirtingai.

## Kodėl tai svarbu

Kiekvienais metais Independent Sector kartu su Merilando universiteto Do Good Institute skelbia nacionalinę savanorių laiko valandos vertę, sudarytą iš Darbo statistikos biuro (Bureau of Labor Statistics) darbo užmokesčio duomenų – konkrečiai vidutinio valandinio gamybos ir nevadovaujančių darbuotojų uždarbio privačiuose nežemės ūkio sektoriuose plius priedų prie atlyginimo korekcijos – ir išskaidytą pagal JAV valstijas. Naujausiame leidime vertė nurodyta **$36,14 per valandą 2025 m.**, 3,9 % daugiau nei ankstesniais metais; valstijų lygio vertės svyruoja nuo daugiau nei $50 Vašingtone (DC) iki mažiau nei $20 Puerto Rike. Jungtinėje Karalystėje ONS atskirai įvertino formalios savanorystės pakeitimo kaštus **£14,43 per valandą** (2017 m. įvertis), o NCVO „UK Civil Society Almanac 2024“ naudoja savanorystės dalyvavimo duomenis – apie 14,2 mln. žmonių formaliai savanoriavo 2021–22 m. – kad įvertintų bendrą sektoriaus savanorystės indėlį maždaug **£18 milijardų**, apie 0,8 % JK BVP.

Kodėl tai svarbu ne tik apskaitos kosmetikai: programa, kuri smarkiai remiasi savanorių darbu, vien pagal grynųjų pinigų [kaštus vienam rezultatui](../kaštai-vienam-rezultatui/) gali atrodyti dramatiškai pigesnė nei ta, kuri remiasi apmokamais darbuotojais, net jei tikrieji išteklių kaštai – tai, kiek kainuotų pakeisti tą darbą – panašūs ar didesni. Finansuotojai ir vertintojai, ignoruojantys savanorių laiko vertę, sistemingai nuvertina savanorių darbu grįstų teikimo modelių tikruosius kaštus, o tai iškreipia efektyvumo palyginimus su apmokamais darbuotojais grįstais modeliais, teikiančiais tą patį rezultatą.

## Matematika

```
Savanorių laiko vertė = Savanorių įneštos valandos × valandinis įkainis

Įkainio pasirinkimas svarbus ir keičia atsakymą:
  - Pakeitimo kaštų metodas: apmokamo darbuotojo, kuris atliktų tą pačią užduotį,
    atlyginimas (pvz., kvalifikuoto jaunimo darbuotojo pakeitimo kaštų įkainis,
    o ne bendras vidutinis atlyginimas) – labiausiai ginamas konkrečios užduoties vertinimui
  - Alternatyviosios kainos metodas: paties savanorio atsisakytas atlyginimas –
    labiausiai ginamas vertinant tai, ko savanoris atsisakė
  - Nacionalinio vidurkio metodas: Independent Sector ar ONS vienas suvestinis
    įkainis – labiausiai ginamas pagrindiniam, tarpsektoriniam palyginamumui
```

Trys metodai tai pačiai valandai gali duoti labai skirtingus skaičius (advokato, savanoriaujančio valdybos nariu, alternatyviosios kainos įkainis labai skiriasi nuo nacionalinio vidurkio), todėl bet kuriame pateiktame skaičiuje reikia nurodyti, kuriuo metodu jis gautas.

## Pavyzdys su skaičiavimais

**JK labdaros organizacija, nacionalinio vidurkio metodas**: 5 000 savanorių valandų per metus, vertinamų £14,43 per valandą (ONS pakeitimo kaštų įvertis):

```
Vertė = 5 000 × £14,43 = £72 150
```

Jei labdaros organizacijos grynųjų pinigų išlaidos tais metais buvo £300 000, jos tikrieji išteklių kaštai – grynieji pinigai plius savanorių darbas – yra £372 150, maždaug 24 % daugiau, nei rodo vien grynųjų pinigų skaičius. Kaštų vienam rezultatui skaičiavimas naudojant tik £300 000 grynųjų pinigų skaičių tikruosius kaštus nuvertina tokia pat marža.

**JAV labdaros organizacija, nacionalinio vidurkio metodas**: 2 000 savanorių valandų, vertinamų $36,14 per valandą (Independent Sector, 2025 m. leidimas):

```
Vertė = 2 000 × $36,14 = $72 280
```

**Ta pati JAV labdaros organizacija, alternatyviosios kainos metodas**: jei savanoriai neproporcingai yra išėję į pensiją specialistai, kurių ankstesnis uždarbis vidutiniškai buvo $60 per valandą, alternatyviosios kainos vertinimas būtų $120 000 – dviem trečdaliais daugiau nei nacionalinio vidurkio skaičius, o tai iliustruoja, kodėl metodą būtina nurodyti.

## Ryšys su programine inžinerija

Sistemos, registruojančios savanorių valandas (pamainų planavimo įrankiai, savanorių valdymo platformos), turėtų fiksuoti valandas užduoties ar vaidmens lygiu, o ne vien sumą, kad pakeitimo kaštų įkainį būtų galima taikyti pagal vaidmenį, o ne vieną bendrą nacionalinio vidurkio įkainį mišriai savanorių darbo jėgai (valdybos nario valanda ir prižiūrėtojo valanda ekonomiškai nėra lygiavertės). Šalia apskaičiuotos vertės saugant naudotą įkainį ir metodiką – ne vien galutinę sumą valiuta – vėlesnės ataskaitos (metinės sąskaitos, [socialinės investicijų grąžos](../socialinė-investicijų-grąža/) skaičiavimai, finansuotojų ataskaitos) vėliau gali skaičių atkartoti ar ginčyti, o ne traktuoti jį kaip neskaidrią konstantą. Žr. [kaštai vienam rezultatui](../kaštai-vienam-rezultatui/) – kodėl savanorių laiko vertės praleidimas sistemingai nuvertina tikruosius teikimo kaštus.

## Dažniausios klaidos

- **Vieno bendro įkainio naudojimas struktūriškai skirtingiems vaidmenims.** Nacionalinio vidutinio atlyginimo įkainis, pritaikytas profesionalo nemokamai (pro bono) valandai (teisinei, finansinei, klinikinei), ją drastiškai nuvertina; kai užduotis reikalauja kvalifikacijos, įkainį derinkite su pakeičiamu vaidmeniu.
- **Dvigubas skaičiavimas su apmokamų darbuotojų kaštais.** Jei savanoriai pakeičia darbą, kuris kitaip būtų apmokamas, užtikrinkite, kad vertinimas būtų pridedamas prie grynųjų pinigų išlaidų, o ne uždedamas ant jau išpūsto personalo įverčio.
- **Pasenusio įkainio nurodymas be datos.** Independent Sector ir ONS įkainiai keičiasi kasmet (ar ONS atveju tik periodiškai iš naujo įvertinami); ataskaitoje nenurodytos datos savanorių laiko skaičius palyginimui beveik beprasmis.
- **Savanorių laiko vertės laikymas lėšų pritraukimo turtu.** Tai kaštų apskaitos korekcija tikriesiems išteklių kaštams suprasti, o ne nauji pinigai, kuriuos labdaros organizacija gali išleisti; jų painiojimas klaidina valdybą, skaitančią sąskaitas.

## Šaltiniai

- Independent Sector and the Do Good Institute (University of Maryland), "Value of Volunteer Time." <https://www.independentsector.org/value-of-volunteer-time/>
- Independent Sector, Value of Volunteer Time methodology. <https://independentsector.org/research/value-of-volunteer-time-methodology/>
- NCVO, UK Civil Society Almanac 2024. <https://www.ncvo.org.uk/news-and-insights/news-index/uk-civil-society-almanac-2024/>
- Office for National Statistics, volunteering valuation estimate, as cited in NCVO analysis. <https://www.ncvo.org.uk/>
