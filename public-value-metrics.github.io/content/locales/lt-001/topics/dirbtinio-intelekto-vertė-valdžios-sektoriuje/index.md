# Dirbtinio intelekto vertė valdžios sektoriuje

Dirbtinio intelekto vertė valdžios sektoriuje – tai reikalavimas, kad viešojoje paslaugoje naudojama DI sistema atitiktų tą pačią vertės už pinigus ir visuomeninės vertės kartelę kaip ir bet kuris kitas išlaidų sprendimas: ne žemesnę dėl naujumo ir ne aukštesnę dėl baimės. Tai klausimas, į kurį teikimo komanda turi mokėti atsakyti prieš, o ne po to, kai DI funkcija paleidžiama: ar ji sukuria daugiau vertės, nei kainuoja, kai užtikrinimo, priežiūros ir rizikos kaštai įvertinami sąžiningai?

## Kodėl tai svarbu

JK Centrinė skaitmeninių ir duomenų reikalų tarnyba (Central Digital and Data Office, CDDO) 2024 m. paskelbė Generatyvinio DI sistemą vyriausybei (Generative AI Framework for Government), remdamasi ankstesnėmis 2023 m. birželio laikinosiomis gairėmis, ir sukūrė ją aplink dešimt principų: kas yra generatyvusis DI, jo etinės pasekmės, įrankių saugumas, kokybės užtikrinimo kontrolė, viso generatyviojo DI gyvavimo ciklo valdymas, tikrų taikymo atvejų nustatymas, bendradarbiavimas tarp ministerijų, skaidrumas, įgūdžiai ir valdysena. Sistemos reikalavimas „prasmingos žmogaus kontrolės“ ir viso gyvavimo ciklo valdymo atsirado todėl, kad DI projektų verslo atvejai turi specifinę gedimo formą, kurios kitos IT išlaidos neturi: pilotinio projekto pagrindinį produktyvumo skaičių lengva gauti ir lengva pervertinti, nes jis matuojamas dar neįskaičiavus patikros, taisymo ir priežiūros naštos, kurią sukuria įrankis. Kartu su sistema Algoritmų skaidrumo registravimo standartas (Algorithmic Transparency Recording Standard, ATRS) reikalauja, kad viešosios įstaigos paskelbtų standartizuotą įrašą – paskirtį, naudojamus duomenis, veikimo rezultatus, sąžiningumo testavimą, žmogaus priežiūros tvarką – apie algoritminius įrankius, darančius didelę įtaką sprendimams dėl asmenų; taip DI sistemos užtikrinimo kaštai tampa viešu įrašu, o ne vidiniu įverčiu, kurio komanda gali tyliai neatlikti.

## Matematika

DI diegimas vertinamas kaip standartinio [vertės už pinigus](../vertė-už-pinigus/) vertinimo papildymas, o ne pakaitalas, o DI specifiniai dėmenys išskiriami aiškiai, užuot jie buvo sulieti į vieną „produktyvumo prieaugio“ skaičių:

```
Grynoji DI sistemos vertė =
    produktyvumo prieaugis (sutaupytas laikas × pilnutinė darbuotojo kaina)
  − licencijos / skaičiavimo kaina
  − žmogaus atliekamos patikros ir priežiūros kaina (DI rezultato tikrinimas
    prieš imantis veiksmų – ji nesumažėja iki nulio net brandiems įrankiams)
  − ATRS dokumentavimo ir nuolatinės stebėsenos kaina
  − rizika pakoreguota žalos dėl klaidų, šališkumo ar haliucinacijų kaina,
    pasverta pagal tai, kas tą žalą patiria (distributional-weighting)

Pilotinio projekto produktyvumo skaičius, neįskaitantis priežiūros dėmens,
nėra palyginamas su įprastinės veiklos kaštų baze, kurioje jau yra
lygiavertė žmogaus atliekama peržiūra – plačiau apie produktyvumo matavimo
discipliną, kuria čia remiamasi, žr. ai-productivity-in-the-public-sector.
```

## Pavyzdys su skaičiavimais

**Vietos valdžia, naudojanti generatyvųjį DI įrankį pirmiesiems atsakymų į įprastus savivaldybės mokesčio užklausimus juodraščiams rengti**: 25 000 užklausimų per metus, anksčiau visus nagrinėdavo atvejų darbuotojai, vidutiniškai po 14 minučių užklausimui, pilnutinė darbuotojo kaina – £34 per valandą.

```
Bazinė (be DI) kaina:
  25 000 × (14/60) × £34 = £198 333 per metus

Pilotinio projekto pagrindinis teiginys: DI parengia atsakymą per 90 sekundžių,
atvejo darbuotojas „tik peržiūri ir išsiunčia“ – teigiamas naujas laikas yra 3 minutės
  25 000 × (3/60) × £34 = £42 500 per metus
  → teigiamas sutaupymas £155 833 per metus (atrodo transformuojantis)

Pilnai įskaičiuotas skaičius, išmatuotas po 3 mėnesių realaus veikimo,
o ne pilotinio projekto kruopščiai atrinktais bandymų atvejais:
  Tikrasis peržiūros ir taisymo laikas vienam atsakymui: 6 minutės (sudėtingiems
  ar emociškai jautriems užklausimams juodraščius tikrai reikia redaguoti)
  25 000 × (6/60) × £34 = £85 000 per metus
  Licencijos / skaičiavimo kaina: £38 000 per metus
  ATRS dokumentavimas ir ketvirtinė šališkumo / kokybės stebėsena: £14 000 per metus
  Bendra kaina = 85 000 + 38 000 + 14 000 = £137 000 per metus

Tikrasis sutaupymas = 198 333 − 137 000 = £61 333 per metus – tikras ir
vertas išsaugoti, tačiau gerokai mažesnis nei pusė pilotinio projekto
pagrindinio teiginio, o jam nustatyti reikėjo sąžiningo priežiūros laiko
matavimo, o ne pilotinio projekto geriausio atvejo.
```

## Ryšys su programine inžinerija

Čia susitinka [DI produktyvumas viešajame sektoriuje](../di-produktyvumas-viešajame-sektoriuje/) ir ši tema: inžinerijos komandos, kurios kuria DI funkcijas viešosioms paslaugoms, atsakingos už priemones, leidžiančias gauti „tikrąjį“ skaičių iš pavyzdžio – tikrojo peržiūros laiko, juodraščio ir išsiųsto atsakymo redagavimo atstumo bei eskalavimo dažnio registravimą, užuot pasitikėjus pilotinio projekto demonstracinėmis sąlygomis. DI funkcijos turėtų būti vertinamos pagal [skaitmeninių paslaugų standarto](../skaitmeninių-paslaugų-standartas/) 9 punktą (saugi paslauga, naudotojų privatumas) ir susiejamos su [viešojo sektoriaus kibernetinio saugumo verte](../viešojo-sektoriaus-kibernetinio-saugumo-vertė/), kai įrankis liečia piliečių duomenis; bet kuriai DI sistemai, daranti didelę įtaką sprendimams dėl asmenų, prieš ją laikant parengta vertinimui reikia ATRS įrašo – lygiai taip, kaip paslauga prieš paleidžiant turi išlaikyti [skaitmeninių paslaugų standarto](../skaitmeninių-paslaugų-standartas/) vertinimą.

## Dažniausios klaidos

- **DI maskavimas (AI-washing)**: esamos taisyklėmis grįstos automatizacijos pervadinimas „DI“, siekiant gauti finansavimą ar dėmesį, skirtą DI diegimui, neturint tikslumo ar šališkumo rizikos, kuri iš tikrųjų pateisina papildomą sistemos kontrolę.
- **Pilotinio, o ne gamybinio produktyvumo matavimas**: pilotiniai projektai vykdomi su atrinktais bandymų atvejais ir motyvuotais, dėmesingais peržiūrėtojais; gamyboje – su visa netvarkinga atvejų įvairove ir peržiūrėtojais, kuriems laikui bėgant išsivysto automatizacijos šališkumas ir jie nepakankamai tikrina rezultatus – abu veiksniai iškreipia sąžiningą priežiūros kaštų skaičių.
- **ATRS registracijos praleidimas, nes įrankis „iš tikrųjų nėra automatizuotas sprendimų priėmimas“**: standarto riba yra didelė įtaka sprendimui dėl asmens, kurią atitinka dauguma piliečiams skirtų DI juodraščių ar rūšiavimo įrankių, net kai formaliai žmogus pasirašo.
- **Klaidų pasiskirstymo poveikio ignoravimas**: visų naudotojų vidurkis gali paslėpti kur kas didesnį konkrečių grupių klaidų ar šališkumo lygį; [paskirstymo svertai](../paskirstymo-svertinimas/) turėtų būti taikomi pagal riziką pakoreguotam žalos dėmeniui, o ne tik bendram tikslumo skaičiui.

## Šaltiniai

- Central Digital and Data Office, Generative AI Framework for Government (2024). <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
- Algorithmic Transparency Recording Standard. <https://www.gov.uk/government/collections/algorithmic-transparency-recording-standard-hub>
- HM Treasury, Green Book: central government guidance on appraisal and evaluation. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-governent>
