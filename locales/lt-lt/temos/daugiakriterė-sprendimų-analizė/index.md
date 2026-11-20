# Daugiakriterė sprendimų analizė (MCDA)

MCDA vertina ir sveria variantus pagal kelis atskirus, svertinius kriterijus vienu metu ir pateikia išrikiuotą palyginimą, nespausdama kiekvieno kriterijaus į vieną piniginę ar natūrinę skalę. Tai vertinimo metodas sprendimams, kuriuose svarbių rezultatų iš tiesų negalima suvesti į vieną skaičių.

## Kodėl tai svarbu

Green Book aiškiai pritaria MCDA (jį tiesiogiai aptaria 2 langelio atvejų studijų priedas ir A priedas) vertinimams, kuriuose nauda yra „iš tiesų nepalyginama“, t. y. kai viską paversti pinigais pagal [socialinę sąnaudų ir naudos analizę](../socialinė-kaštų-ir-naudos-analizė/) arba vienu rezultatu pagal [sąnaudų efektyvumo analizę](../kaštų-veiksmingumo-analizė-valdžios-sektoriuje/) reikštų iškreipti sprendimą, o ne jį paaiškinti (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>). Pavyzdžiui, naujo kalėjimo vietos parinkimas derina kapitalo sąnaudas, poveikį bendruomenei, susisiekimą, poveikį aplinkai ir darbuotojų pritraukimo galimybes. Šie kriterijai neturi bendro vieneto, o jį primetus (paprastai pinigus) į sprendimą būtų įslinkęs vertybinis sprendimas, pavyzdžiui, kiek svarbesnis yra poveikis aplinkai nei kaina, pateiktas kaip objektyvi aritmetika.

MCDA sąžiningumas yra ir pagrindinis jos pažeidžiamumas: kadangi svorius skiria tas, kas vykdo vertinimą (ar komisija), metodas yra tiek teisėtas, kiek teisėtas svėrimo procesas. Green Book gairės aiškiai nurodo, kad kriterijai ir svoriai turi būti suderinti ir paskelbti *prieš* vertinant variantus, kad vertintojas negalėtų iš pageidaujamo varianto atgaline tvarka parinkti jį pateisinančių svorių.

## Matematika

```
Kiekvienam variantui i ir kriterijui j:
  Įvertis_ij = varianto rezultatas pagal tą kriterijų (dažnai 0-100
               arba 1-10, remiantis įrodymais, ekspertų vertinimu ar
               suinteresuotųjų šalių vertinimu)
  Svoris_j   = kriterijaus j santykinė svarba, svorių suma lygi 1 (arba 100)

Varianto i svertinis įvertis = Σ_j (Įvertis_ij × Svoris_j)

Procedūra:
1. Suderinkite kriterijų rinkinį ir svorius PRIEŠ vertindami bet kurį
   variantą (įprasti nustatymo metodai: svyravimo svėrimas arba porinis
   palyginimas, pvz., AHP).
2. Įvertinkite kiekvieną variantą pagal kiekvieną kriterijų bendra skale,
   pagal galimybes remdamiesi įrodymais.
3. Apskaičiuokite svertines sumas; išrikiuokite variantus.
4. Patikrinkite svorių jautrumą: ar eilė išlieka, jei dėl kiekvieno
   kriterijaus svarbos nuomonės pagrįstai skiriasi?
```

MCDA nesukuria pagrįstos absoliučios vertės, kaip tai daro SCBA grynoji dabartinė vertė; ji tik sudaro eilę, sąlygotą suderintų svorių. Tai yra privalumas, kai sprendimas tikrai susijęs su nepalyginamų gėrybių kompromisu, ir trūkumas, jei MCDA naudojama vengiant sunkesnio pinigų vertinimo darbo, kai pinigais vertinti buvo galima.

## Pavyzdys su skaičiavimais

**Savivaldybė**: taryba renka vietą naujam buitinių atliekų perdirbimo centrui. Ji įvertina tris vietas pagal keturis kriterijus, kurių svorius tarpdepartamentinė komisija nustatė prieš apsilankydama bet kurioje vietoje:

```
Kriterijai (svoris):      Kapitalo sąnaudos (30 %)  Susisiekimas (25 %)
                           Poveikis bendruomenei (25 %)  Poveikis aplinkai (20 %)

Vietų įverčiai (0-100, didesnis = geriau):
A vieta: kaina 80, susisiekimas 60, bendruomenė 40, aplinka 70
B vieta: kaina 60, susisiekimas 90, bendruomenė 70, aplinka 50
C vieta: kaina 90, susisiekimas 50, bendruomenė 80, aplinka 60

Svertinės sumos:
A vieta = 80(0,30) + 60(0,25) + 40(0,25) + 70(0,20) = 24+15+10+14 = 63
B vieta = 60(0,30) + 90(0,25) + 70(0,25) + 50(0,20) = 18+22,5+17,5+10 = 68
C vieta = 90(0,30) + 50(0,25) + 80(0,25) + 60(0,20) = 27+12,5+20+12 = 71,5
```

C vieta užima pirmą vietą. Jautrumo skaičiavimas, kuriame poveikio bendruomenei svoris pakeliamas nuo 25 % iki 35 % (10 punktų atimama iš kapitalo sąnaudų), pakeičia C vietos sumą į 71,5 − 3 + 8 = 76,5, o B vietos į 68 − 6 + 7 = 69. C vieta vis tiek pirmauja, taigi eilė yra atspari tokiam tikėtinam nesutarimui dėl svorių, o būtent tokį patikrinimą Green Book tikisi matyti pateiktą.

**Labdaros organizacija**: dotacijas skirstantis fondas renkasi tarp skolų konsultavimo tarnybos, maisto bankų tinklo ir finansinio raštingumo programos finansavimo. Jis naudoja MCDA, o ne SROI (žr. [socialinė investicijų grąža](../socialinė-investicijų-grąža/)), nes patikėtiniai garbingai nesutaria, ar krizių lengvinimas, ar prevencija turėtų svarėti daugiau. MCDA leidžia susitarti dėl nesutarimo *pavidalo* (svorių intervalo), o ne apsimesti, kad vienas SROI santykis tai išsprendžia.

## Ryšys su programine inžinerija

MCDA yra natūralus įrankis tiekėjui ar architektūrai parinkti, kai kriterijai tikrai konfliktuoja: pasirinkimas tarp debesyje ir vietoje talpinamos bylų valdymo sistemos derina kainą, duomenų suverenumo riziką, prieinamumą ir diegimo greitį taip, kad jų nebegalima suvesti į vieną skaičių. Inžinerijos vadovai turėtų reikalauti, kad svoriai būtų nustatomi prieš vertinant variantus, kaip to reikalauja Green Book, nes svėrimas, atliktas pamačius trumpąjį sąrašą, patikimai nukrypsta link varianto, kurį salė jau buvo pamėgusi. Dažną MCDA taikymą žr. [pirkti ar kurti viešajame sektoriuje](../kurti-ar-pirkti-valdžios-sektoriuje/), o susijusį struktūruoto vertinimo įrankį, taikomą po sprendimo, o ne prieš jį, žr. [viešosios vertės rezultatų kortelė](../viešosios-vertės-rezultatų-kortelė/).

## Dažniausios klaidos

- **Svorių nustatymas pamačius variantus.** Tai dažniausias MCDA iškreipimo būdas, tyčinis ar ne; skelbkite svorius prieš vertindami ir užfiksuokite, kas juos nustatė.
- **Svertinės sumos laikymas tvirtu skaičiumi.** 71,5 ir 68 skirtumas nėra statistiškai reikšmingas, nebent jautrumo analizė patvirtina, kad eilė stabili; pateikite intervalus, o ne apgaulingą tikslumą.
- **MCDA naudojimas vengiant pinigų vertinimo, kuris buvo įmanomas.** Jei dauguma kriterijų galėjo būti patikimai įkainoti, pasirinkus MCDA, o ne [SCBA](../socialinė-kaštų-ir-naudos-analizė/), atsisakoma informacijos, kurią vertinimas galėjo panaudoti.
- **Visų svorių nustatymas vienam dominuojančiam suinteresuotajam asmeniui.** Gera Green Book praktika tikisi, kad svoriai bus nustatomi su atstovaujančia komisija, o ne užsakovo vadovo, kad vertinimas vėl neišvestų to, ko tas asmuo jau norėjo.

## Šaltiniai

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Annex A
  (multi-criteria decision analysis) and Box 2 case studies.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Communities and Local Government. "Multi-criteria analysis: a manual." 2009.
  <https://www.gov.uk/government/publications/multi-criteria-analysis-a-manual>
- Belton V, Stewart TJ. "Multiple Criteria Decision Analysis: An Integrated Approach." Kluwer,
  2002.
