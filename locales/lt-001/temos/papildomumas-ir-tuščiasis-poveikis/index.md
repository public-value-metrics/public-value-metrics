# Papildomumas ir tuščiasis poveikis

Papildomumas parodo, ar intervencija sukėlė rezultatą, kuris kitaip nebūtų įvykęs. Tuščiasis poveikis (angl. deadweight) yra jo veidrodinis atspindys: rezultato dalis, kuri būtų atsiradusi ir be programos, dotacijos ar subsidijos. Beveik kiekvienas vyriausybės programos ar labdaros organizacijos poveikio teiginys perdeda poveikį, kol neatimamas tuščiasis poveikis, todėl Jungtinės Karalystės vertinimo gairėse tai laikoma pirmąja ir svarbiausia bet kurio pagrindinio skaičiaus korekcija.

## Kodėl tai svarbu

„Padėjome augti 500 įmonių“ skamba kaip pasiekimas, tačiau jei 300 iš tų įmonių būtų augusios ir be mūsų – nes vietos ekonomika atsigavo, nes jos turėjo kitų finansavimo šaltinių, nes jos jau augo prieš prasidedant programai, – tikrasis papildomas programos indėlis yra 200, o ne 500. HM Treasury „Magenta Book“ ir seniai taikomas HM Treasury/BIS „Additionality Guide“ (iš pradžių parengtas regioninės plėtros ir regeneravimo programoms, vėliau plačiai naudojamas Jungtinės Karalystės vyriausybės vertinimuose) įtvirtina tuščiojo poveikio atėmimą kaip pirmąją standartinės grynojo poveikio sekos korekciją: bendrasis efektas minus tuščiasis poveikis, minus išstūmimas, minus nutekėjimas, pakoreguotas dauginamuoju efektu, lygu grynajam papildomam poveikiui. Šio žingsnio praleidimas yra vienas dažniausių būdų, kuriais viešojo ir socialinio sektoriaus poveikio teiginiai pernelyg išpučiami, sąmoningai ar ne: dotacijų programa, matuojanti tik bendruosius dalyvių rezultatus ir neturinti lyginamosios grupės, negali atskirti savo poveikio nuo to, kas įvyktų bet kuriuo atveju.

Tuščiasis poveikis nėra pastovus procentas; jis visiškai priklauso nuo konkrečios populiacijos ir intervencijos kontrafaktinio scenarijaus (žr. [kontrafaktinė analizė](../kontrafaktinė-analizė/)). Anglijos regioninės plėtros vertinimai, atlikti veikiant buvusioms regioninės plėtros agentūroms (Regional Development Agencies), dažniausiai nustatydavo 20–60 % tuščiojo poveikio dalį, priklausomai nuo verslo paramos rūšies. Todėl patikimuose programų vertinimuose pateikiamas tuščiuoju poveikiu pakoreguotas intervalas, o ne vienas prielaida paremtas skaičius, o tokie finansuotojai kaip National Lottery Community Fund ir Big Society Capital reikalauja, kad paramos gavėjai rezultatų ataskaitose aiškiai atsižvelgtų į tuščiąjį poveikį, užuot pateikę bendrą dalyvių skaičių.

## Matematika

Standartinė grynojo poveikio korekcijų seka, kaip nurodyta Jungtinės Karalystės vertinimo gairėse („Magenta Book“; HM Treasury/BIS „Additionality Guide“; ESIF ir struktūrinių fondų vertinimo gairės):

```
Bendrasis rezultatas
  − Tuščiasis poveikis   (kas būtų įvykę bet kuriuo atveju)
  − Išstūmimas           (veikla ar nauda perkelta iš kitur, o ne sukurta – žr.
                           displacement-and-attribution)
  − Nutekėjimas          (nauda, atitekusi ne tikslinei grupei ar teritorijai)
  × Daugiklis            (papildoma netiesioginė ar sukelta ekonominė veikla, kai ji teigiama)
  = Grynasis papildomas poveikis
```

Tuščiojo poveikio norma kaip dalis:

```
Tuščiojo poveikio norma = rezultatai, kurie būtų įvykę be intervencijos
                          / visi stebėti bendrieji rezultatai

Grynieji papildomi rezultatai = Bendrieji rezultatai × (1 − Tuščiojo poveikio norma)
```

## Pavyzdys su skaičiavimais

**Verslo paramos dotacijų programa**: regiono dotacijų schema praneša, kad 500 paremtų įmonių kitais metais padidino užimtumą vidutiniškai po 3 darbo vietas – bendrasis teiginys apie 1 500 darbo vietų.

Suderinta panašių neparemtų įmonių lyginamoji grupė (žr. [kontrafaktinė analizė](../kontrafaktinė-analizė/)) rodo, kad 40 % paremtų įmonių užimtumo augimo būtų įvykę ir be paramos, remiantis tuo, kaip tuo pačiu laikotarpiu sekėsi suderintai grupei.

```
Tuščiojo poveikio norma = 40 %
Grynosios papildomos darbo vietos = 1 500 × (1 − 0,40) = 900 darbo vietų
```

Sąžiningai pranešamas programos pasiekimas yra 900 darbo vietų, o ne 1 500 – 40 % sumažėjimas vien dėl tuščiojo poveikio korekcijos, dar net neatsižvelgus į išstūmimą ar nutekėjimą.

**Labdaros užimtumo programa**: labdaros organizacija įdarbina 200 ilgalaikių bedarbių, išleisdama £600 000 (£3 000 už vieną įdarbinimą, bendrąja prasme). Nacionaliniai darbo rinkos duomenys rodo, kad be jokios intervencijos maždaug 15 % panašios ilgalaikių bedarbių kohortos per tą patį laikotarpį susiranda darbą dėl natūralaus darbo rinkos judėjimo.

```
Tuščiojo poveikio norma = 15 %
Grynieji papildomi įdarbinimai = 200 × (1 − 0,15) = 170
Tikroji kaina už vieną papildomą įdarbinimą = £600 000 / 170 ≈ £3 529
```

Bendroji kaina už įdarbinimą (£3 000) maždaug 15 % nuvertina tikrąją labdaros organizacijos papildomo indėlio kainą.

## Ryšys su programine inžinerija

Papildomumas ir tuščiasis poveikis tiesiogiai svarbūs kiekvienam, kuris kuria poveikio matavimo ar dotacijų valdymo programinę įrangą viešajam ar socialiniam sektoriui:

- Rezultatų ataskaitų sistemos turėtų pagal paskirtį rinkti lyginamosios ar bazinės grupės duomenis, o ne vien dalyvių rezultatus – kontrafaktinį scenarijų pritaikyti jau veikiančiai sistemai, kuri jo neturėjo, daug sunkiau nei įdiegti duomenų rinkimą nuo pat pradžių (žr. [kontrafaktinė analizė](../kontrafaktinė-analizė/)).
- Skydeliai, rodantys tik bendrą dalyvių skaičių, sistemingai pervertins poveikį finansuotojams ir priežiūros institucijoms; kai yra tuščiojo poveikio įverčių (iš vertinimo literatūros ar lyginamosios grupės), programinė įranga turėtų rodyti rezultatą be tuščiojo poveikio šalia bendrojo, o ne vietoj jo.
- Tai tiesiogiai susiję su [socialine investicijų grąža](../socialinė-investicijų-grąža/): jos SROI santykis tampa patikimas tik atėmus tuščiąjį poveikį (ir išstūmimą) iš bendrųjų deklaruojamų rezultatų – SROI skaičiuoklė, praleidžianti šį žingsnį, pateiks išpūstus santykius, kurie nepasitvirtins atidžiau patikrinus.

## Dažniausios klaidos

- **Bendrųjų rezultatų pateikimas taip, tarsi visi jie būtų papildomi.** Tai viena dažniausių poveikio matavimo klaidų dotacijų ir programų ataskaitose; prieš skelbdami pagrindinį skaičių visada paklauskite: „ar tai būtų įvykę ir be mūsų?“
- **Prielaida, kad vienas tuščiojo poveikio procentas tinka visur.** Tuščiasis poveikis labai skiriasi pagal sektorių, populiaciją ir vietos ekonomines sąlygas; naudokite lyginamąją grupę ar konkretaus sektoriaus įrodymus, o ne skaičių iš nesusijusio vertinimo.
- **Tuščiojo poveikio painiojimas su išstūmimu.** Tuščiasis poveikis susijęs su tų pačių dalyvių kontrafaktiniais rezultatais; išstūmimas – su poveikiu kitiems žmonėms ar vietoms, žr. [išstūmimas ir priskyrimas](../išstūmimas-ir-priskyrimas/). Supainiojus šiuos dalykus korekcija suskaičiuojama du kartus arba nepakankamai.
- **Dalyvių pačių įvertintas tuščiasis poveikis.** Paklausus naudos gavėjų, „ar tai būtų įvykę be mūsų pagalbos?“, tuščiasis poveikis sistemingai gaunamas per mažas (dalyviai linkę nuopelnus priskirti programai); nepriklausoma lyginamoji grupė yra kur kas patikimesnė.

## Šaltiniai

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020).
  <https://www.gov.uk/government/publications/the-magenta-book>
- HM Treasury / Department for Business, Innovation and Skills, "Additionality Guide: A Standard
  Approach to Assessing the Additional Impact of Interventions" (3rd edition), originally developed
  with English Partnerships and the Housing Corporation.
- European Commission, "Evalsed: The Resource for the Evaluation of Socio-Economic Development" —
  gairės apie tuščiąjį poveikį, išstūmimą ir nutekėjimą vertinant struktūrinių fondų veiklą.
- National Lottery Community Fund, "Guidance on Outcomes and Impact Reporting." <https://www.tnlcommunityfund.org.uk/>
