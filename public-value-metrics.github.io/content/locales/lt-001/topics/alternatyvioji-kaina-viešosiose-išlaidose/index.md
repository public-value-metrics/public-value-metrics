# Alternatyvioji kaina viešosiose išlaidose

Alternatyvioji kaina yra geriausios paliktos alternatyvos vertė, kai viešoji institucija skiria pinigus, darbuotojų laiką ar politinį kapitalą vienam variantui, o ne kitam. Departamente su fiksuotu biudžetu kiekvienas svaras, išleistas vienai programai, yra svaras, kurio negalima išleisti kitai geriausiai programai; tikroji sprendimo kaina yra ne tai, ką jis išleidžia, o tai, ką išstumia.

## Kodėl tai svarbu

Viešieji biudžetai yra apriboti grynaisiais pinigais išlaidų peržiūros laikotarpiu, todėl, skirtingai nei augančioje privačioje įmonėje, vyriausybės departamentas negali tiesiog „surasti daugiau pinigų“ geram sumanymui; jo finansavimas reiškia ko nors kito nefinansavimą. HM Treasury Green Book tai laiko pamatiniu dalyku: kiekvienas vertinimas privalo palyginti intervenciją su „minimalių veiksmų“ (do minimum) pradine padėtimi *ir* su realistiškais alternatyviais to paties ištekliaus panaudojimo būdais, nes tikrasis klausimas, kurį užduoda Treasury išlaidų komanda, niekada nėra „ar tai gerai?“, o „ar tai geriau už tai, ką dar būtų galima nupirkti už šiuos pinigus?“. Pagrindinis Green Book vertinimo principas, kad viešieji ištekliai turėtų tekėti intervencijai su didžiausia grynąja socialine verte vienam svarui, yra alternatyvioji kaina, išreikšta kaip politika.

Tai lengva pasakyti ir sunku taikyti, nes „kita geriausia alternatyva“ retai matoma viename verslo atvejyje. 2 mln. £ jaunimo užimtumo dotacijų programa verslo atvejyje lyginama su nieko nedarymu, bet sąžiningas lyginamasis variantas yra kita geriausia jaunimo užimtumo intervencija arba net kitas geriausias 2 mln. £ panaudojimas bet kur portfelyje, įskaitant ne užimtumo išlaidas. Magenta Book (HM Treasury, 2020) aiškiai įspėja, kad vertinimai, lyginantys „su intervencija“ ir „be intervencijos“, nuvertina kartelę, kurią intervencija turi peršokti, nes „be šios intervencijos“ nėra tas pats, kas „visiškai nieko“: atlaisvinti pinigai finansuoja kažką kito.

## Matematika

```
Alternatyvioji A pasirinkimo kaina = geriausios paliktos alternatyvos B vertė

Grynoji A viešoji vertė = vertė(A) − vertė(B), o ne vertė(A) − 0
```

Universalios formulės nėra, nes paliktoji alternatyva priklauso nuo konteksto, bet disciplina bendra: nustatykite realistišką kitą geriausią tos pačios biudžeto eilutės panaudojimą (ne idealizuotą „nieko nedaryti“), įvertinkite jį tuo pačiu pagrindu (pagal galimybes pinigais, pagal [socialinę sąnaudų ir naudos analizę](../socialinė-kaštų-ir-naudos-analizė/)) ir atimkite.

## Pavyzdys su skaičiavimais

**Departamento biudžeto eilutė**: 5 mln. £ skaitmeninės transformacijos fondas šiais finansiniais metais gali finansuoti lygiai vieną iš dviejų pasiūlymų.

- *A variantas*: nauja bylų valdymo platforma, piniginė nauda 7,2 mln. £ per 5 metus (efektyvumo sutaupymai ir greitesnis bylų sprendimas).
- *B variantas*: tapatybės patikros paslauga, bendra trims departamentams, piniginė nauda 6,4 mln. £ per 5 metus.

Naivus A verslo atvejis palygina 7,2 mln. £ naudos su 5 mln. £ sąnaudų ir pateikia 1,44:1 naudos ir sąnaudų santykį, atrodantį tvirtai. Tačiau kadangi A ir B konkuruoja dėl tų pačių 5 mln. £, A pasirinkimo alternatyvioji kaina yra B paliktos 6,4 mln. £ naudos. *Grynasis* A pagrindimas, palyginti su realistiška alternatyva, yra tik 7,2 mln. £ − 6,4 mln. £ = 0,8 mln. £, o ne visa 7,2 mln. £ antraštinė suma. Jei trečiasis variantas C už tuos pačius 5 mln. £ pasiūlytų 7,5 mln. £ naudos, A finansavimas vietoj C sunaikintų 0,3 mln. £ viešosios vertės, nors paties A verslo atvejis atskirai atrodo visiškai pagrįstas.

**Vietos valdžios darbuotojų laikas**: tarybos trijų žmonių duomenų komanda gali sukurti arba būsto laukimo sąrašo skydelį (apskaičiuota, kad sutaupys 400 pareigūnų valandų per metus, vertinamų 28 £/val. = 11 200 £/metus), arba išmokų sukčiavimo triažo įrankį (apskaičiuota, kad užkirs kelią 85 000 £/metus neteisingų išmokų). Skydelio kūrimo alternatyvioji kaina yra 85 000 £/metus paliktos naudos, o ne vien duomenų komandos darbo užmokestis; tikroji „nemokamo“ vidinio kūrimo kaina yra daug didesnė nauda, kurią komanda būtų galėjusi sukurti kitur.

## Ryšys su programine inžinerija

Inžinerijos pajėgumai viešojoje institucijoje patys yra ribotas biudžetas (sprinto pajėgumai, o ne svarai), ir ta pati disciplina taikoma tiesiogiai:

- Visada įvardykite lyginamąjį variantą: funkcijos verslo atvejis turėtų nurodyti, ką dar tos pačios komandos savaitės galėtų pateikti, o ne vien jos pačios grąžą.
- „Turime laisvų inžinerijos pajėgumų“ laikykite alternatyviosios kainos analizės pradžia, o ne pabaiga: laisvi pajėgumai vis tiek turi geriausią alternatyvų panaudojimą, net jei tai yra techninės skolos mažinimas (žr. [techninė skola kaip viešosios vertės erozija](../techninė-skola-kaip-viešosios-vertės-erozija/)).
- Tiesiogiai susiekite tai su [verte už pinigus](../vertė-už-pinigus/): VFM „ekonomiškumo“ testas yra beprasmis be sąžiningo alternatyviosios kainos lyginamojo varianto, ir su [vėlavimo kaina viešosiose programose](../delsimo-kaina-viešosiose-programose/), kuri įkainoja tos pačios paliktos alternatyvos logikos laiko dimensiją.

## Dažniausios klaidos

- **Lyginimas su „nieko nedarymu“, o ne su kita geriausia alternatyva.** Green Book reikalauja „minimalių veiksmų“ pradinės padėties būtent todėl, kad tikroji alternatyvioji kaina retai lygi nuliui; verslo atvejis, peršokęs tik „nieko nedaryti“ kartelę, neparodė, kad lenkia realistišką alternatyvą.
- **Tarpdepartamentinės konkurencijos dėl to paties katilo ignoravimas.** Biudžeto eilutės, atrodančios apsaugotos vienoje direkcijoje, dažnai konkuruoja aukštesniu lygiu (išlaidų peržiūroje, kapitalo programoje), kur ir realizuojama tikroji alternatyvioji kaina.
- **Prielaida, kad atlaisvintas darbuotojų laikas neturi tolesnės vertės.** „Sutaupytas“ laikas sukuria vertę tik jei perskirstomas kam nors vertingam; jei alternatyvaus panaudojimo nėra, sutaupymas yra tik nominalus.

## Šaltiniai

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation" (2022).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020).
  <https://www.gov.uk/government/publications/the-magenta-book>
- Claxton K, et al. "Methods for the estimation of the NICE cost-effectiveness threshold." Health
  Technology Assessment, 2015;19(14) – kanoninis empirinis įrodymas, kad alternatyvioji kaina yra
  įpareigojantis apribojimas fiksuotame viešajame biudžete. <https://www.journalslibrary.nihr.ac.uk/hta/hta19140/>
