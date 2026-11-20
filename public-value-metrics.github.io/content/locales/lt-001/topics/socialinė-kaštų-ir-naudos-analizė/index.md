# Socialinė kaštų ir naudos analizė (SKNA)

Socialinė kaštų ir naudos analizė visus politikos ar programos kaštus ir naudą – rinkos ir nerinkos – išreiškia bendru piniginiu vienetu, ateities srautus diskontuoja iki dabartinės vertės ir juos sudeda į vieną skaičių: ar šis pasiūlymas visuomenei suteikia daugiau gerovės ir kiek?

## Kodėl tai svarbu

SKNA yra numatytasis kiekybinis metodas [„Green Book“ vertinimo](../green-book-vertinimas/) ekonominėje dalyje: HM Treasury gairės reikalauja, kad pasiūlymai, kai tik naudą galima patikimai išreikšti pinigais, parodytų teigiamą grynąją dabartinę viešąją vertę (NPSV), o nerinkos gėrių vertinimo pagrindiniu principu naudojamas pasirengimas mokėti
(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>,
5 skyrius). Ši disciplina reiškia, kad „socialinė“ kaštų ir naudos analizė nėra tas pats, kas privataus sektoriaus investicijų vertinimas: joje būtina įtraukti kaštus ir naudą, tenkančius trečiosioms šalims, nedalyvaujančioms sandoryje (išorinis poveikis), vietoj komercinių kapitalo kaštų būtina naudoti [socialinę diskonto normą](../socialinė-diskonto-norma/), o kai neturtingam namų ūkiui svaras reiškia daugiau nei turtingesniam, reikėtų taikyti [paskirstymo svertinimą](../paskirstymo-svertinimas/).

SKNA suklysta ten, kur to tikisi jos kritikai: gėriams, neturintiems rinkos analogo – švariam orui, socialinei sanglaudai, išgelbėto gyvenimo vertei – pinigų išraiška turi būti nustatoma [deklaruotų pirmenybių](../deklaruotų-pirmenybių-vertinimas/) ar [atskleistų pirmenybių](../atskleistų-pirmenybių-vertinimas/) metodais arba turi būti sukonstruota [šešėlinė kaina](../šešėlinės-kainos/). Kai vertės išreiškimas pinigais yra ne šiaip sudėtingas, o ginčytinas, pats „Green Book“ rekomenduoja grįžti prie [kaštų veiksmingumo analizės](../kaštų-veiksmingumo-analizė-valdžios-sektoriuje/) arba [daugiakriterės sprendimų analizės](../daugiakriterė-sprendimų-analizė/), užuot per prievartą pateikus skaičių, kuriuo niekas netiki.

## Matematika

```
NPSV = Σ [t=0 iki T] (Nauda_t − Kaštai_t) / (1 + r)^t

kur:
  Nauda_t  = visa pinigais išreikšta nauda t metais, įskaitant nerinkos
             gėrius, įvertintus deklaruojamųjų / atskleistų pirmenybių
             metodais ar šešėline kaina
  Kaštai_t = visi pinigais išreikšti kaštai t metais, įskaitant išteklių
             alternatyviąją kainą (žr. ../opportunity-cost-in-public-spending/)
  r        = socialinė diskonto norma (HM Treasury nustato 3,5 %, mažėjančią
             iki žemesnių normų po 30-ųjų metų, pagal „Green Book“ A priedą)
  T        = vertinimo laikotarpis

Naudos ir kaštų santykis (BCR) = Σ PV(Nauda) / Σ PV(Kaštai)
```

BCR, didesnis nei 1 (arba NPSV, didesnė nei nulis), rodo grynąją viešąją vertę. „Green Book“ vertės už pinigus kategorijos (naudojamos transporto ir infrastruktūros vertinime) BCR intervalus žymi taip: mažiau nei 1,0 – prasta vertė už pinigus, 1,0–1,5 – žema, 1,5–2,0 – vidutinė, 2,0–4,0 – aukšta, o daugiau nei 4,0 – labai aukšta. Jautrumo analizė – NPSV perskaičiavimas pesimistinėmis ir optimistinėmis prielaidomis – yra privaloma, o ne pasirinktinė, nes pinigais išreikšta nerinkos nauda turi plačias neapibrėžtumo ribas.

## Pavyzdys su skaičiavimais

**Vietos valdžia**: savivaldybė vertina £3 mln. investiciją į naują dviračių ir pėsčiųjų tinklą per 20 metų vertinimo laikotarpį taikydama 3,5 % diskonto normą.

```
Kaštai: £3 mln. kapitalo 0 metais, £50 000 per metus priežiūros (1–20 metai)
PV(priežiūra) ≈ £50 000 × 14,2 (20 metų anuiteto koeficientas esant 3,5 %) ≈ £710 000
Visi PV(kaštai) ≈ £3,71 mln.

Nauda (visa išreikšta pinigais naudojant skelbiamas DfT/PSO vertinimo priemones):
  Sveikatos nauda dėl padidėjusio fizinio aktyvumo: £180 000 per metus
  Mažesnis nedarbingumas: £40 000 per metus
  Mažesnės spūstys (mažiau kelionių automobiliu): £60 000 per metus
  Visas naudos srautas: £280 000 per metus
PV(nauda) ≈ £280 000 × 14,2 ≈ £3,98 mln.

NPSV = £3,98 mln. − £3,71 mln. = +£0,27 mln.
BCR = 3,98 / 3,71 = 1,07 → „žema“ vertė už pinigus
```

Schema peržengia ribą, bet vos vos; jautrumo analizė su 20 % mažesniu sveikatos naudos įverčiu (atspindinčiu tikrą fizinio aktyvumo vertinimo neapibrėžtumą) BCR nuleidžia žemiau 1,0 – būtent todėl „Green Book“ reikalauja šalia pagrindinio skaičiaus skelbti jautrumo lentelę, o ne vien centrinį įvertį.

**Labdara**: kūdikių mirtingumo prevencijos programa, kainuojanti £500 000 per metus, vertinama pagal statistinio gyvenimo vertę (VSL) – šešėlinę kainą, o ne stebimą rinkos kainą – maždaug £2,1 mln. (HM Treasury 2023 m. atnaujintas dydis, pats išvestas iš deklaruotų pirmenybių tyrimų). Išvengus vienos kūdikio mirties per metus, kai kaštai yra £500 000, gaunamas BCR 4,2 – patogiai „labai aukšta“ vertė už pinigus, bet visas rezultatas remiasi VSL dydžiu, todėl bet kuri SKNA, naudojanti VSL, privalo ją atskleisti kaip prielaidą, o ne faktą.

## Ryšys su programine inžinerija

SKNA yra natūralus pagrindas platformų ir infrastruktūros investicijų sprendimams valdžios programinėje įrangoje – pavyzdžiui, bendrą tapatybės platformą lyginant su atskirų departamentų taškiniais sprendimais, reikia pinigais išreikšti tokią naudą kaip mažesni pasikartojančio įtraukimo kaštai, mažesnis sukčiavimas ir greitesnis paslaugos suteikimas, kurių pačių rinkos kainos nėra. Pagrindinę paslaugą kuriantys inžinieriai turėtų tikėtis, kad programų vadovai prašys šios analizės įvesčių: sandorių vieneto kaštų (žr. [kaštai vienam sandoriui](../kaštai-vienam-sandoriui/)), numatomų apimčių ir degradacijos / prastovų kaštų. Svarbiausia perimti discipliną: diskontuoti būsimą naudą, aiškiai įvardyti kontrafaktinę bazinę alternatyvą (žr. [kontrafaktinė analizė](../kontrafaktinė-analizė/)) ir niekada nepateikti vieno taškinio įverčio be jo jautrumo intervalo.

## Dažniausios klaidos

- **Dvigubas naudos skaičiavimas.** Skaičiuojant ir „sutaupytą laiką“, ir „dėl to laiko gautą produktyvumą“ kaip atskiras naudos eilutes, pagrindimas pervertinamas; nauda yra sutaupytas laikas, o jo tolesnis panaudojimas nėra papildoma nauda, nebent tai nepriklausomai įrodyta.
- **Išstumtų kaštų praleidimas.** Schema, kuri perkelia spūstis iš vieno kelio į kitą ar sukčiavimą iš vieno kanalo į kitą, nesukūrė grynosios naudos, kurią numato jos pagrindinė NPSV – žr. [išstūmimas ir priskyrimas](../išstūmimas-ir-priskyrimas/).
- **Privačios diskonto normos naudojimas.** Taikant komercinius kapitalo kaštus (tarkime, 8–10 %) vietoj socialinės diskonto normos sistemingai nuvertinama ilgo laikotarpio viešoji nauda, pavyzdžiui, sveikatos ir aplinkos pagerėjimas – žr. [socialinė diskonto norma](../socialinė-diskonto-norma/).
- **Nekvestionuojamo vertinimo pinigais ir ginčytino „numojimo ranka“.** Jei du trečdaliai pasiūlymo naudos yra užtikrintai pinigais išreikštas efektyvumo sutaupymas, o vienas trečdalis – netvirtai įvertintas gerovės prieaugis, pagrindinė NPSV tyliai sumaišo kietą skaičių su minkštu; pateikite juos atskirai.

## Šaltiniai

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Chapter 5.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury. "Green Book supplementary guidance: value of a statistical life." 2023.
  <https://www.gov.uk/government/publications/green-book-supplementary-guidance-value-of-a-statistical-life>
- Department for Transport. "TAG unit A1.1: cost-benefit analysis." Transport Analysis Guidance.
  <https://www.gov.uk/guidance/transport-analysis-guidance-tag>
