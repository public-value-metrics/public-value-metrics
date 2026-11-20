# Piliečių pasitenkinimo rodikliai

Piliečių pasitenkinimo rodikliai matuoja, kaip žmonės vertina savo tiesioginę viešosios paslaugos patirtį – tai skiriasi nuo pasitikėjimo institucijomis apskritai ir nuo to, ar paslauga iš tikrųjų pasiekė gerą rezultatą. Paslauga gali būti mėgstama, bet neveiksminga, arba veiksminga, bet nemėgstama; skirtumas tarp šių dviejų yra pats savaime diagnostinė informacija, kurią teikimo komanda turėtų stebėti.

## Kodėl tai svarbu

Pasitenkinimas matuojamas dviem skirtingais lygmenimis, kuriuos įprastai painiojama. Paslaugos lygmeniu dabar nebeveikianti JK „Performance Platform“ ir šiandienos GOV.UK Service Manual reikalauja kiekvienai paslaugai atlikti pasitenkinimo apklausą (paprastai penkių balų skalė nuo „labai patenkintas“ iki „labai nepatenkintas“, atliekama sandorio metu) kaip vieną iš keturių privalomų paslaugos pagrindinių rodiklių – žr. [paslaugų standartai ir sandorių rodikliai](../paslaugų-standartai-ir-sandorių-metrikos/). Institucijų lygmeniu JK valstybės tarnybos žmonių apklausa (Civil Service People Survey) kasmet matuoja darbuotojų įsitraukimą ir patirtį kiekviename centrinės valdžios departamente, o atskirai ESBO programa „Pasitikėjimas valdžia“ (Trust in Government) apklausia visuomenės pasitikėjimą nacionaline valdžia valstybėse narėse, sekdama ilgalaikį nuosmukio ir atsigavimo modelį, kurį stipriai formuoja krizės (2008 m. finansų krizė ir COVID-19 pandemija abi sukėlė staigius, matomus ESBO pasitikėjimo rodiklių pokyčius). Priežastis, kodėl piliečiams skirtas paslaugas kuriantys inžinieriai turi laikyti pasitenkinimą ir rezultatą atskirai, yra gerai žinoma paslaugų dizaino gedimo forma: gražiai suprojektuota, lengvai naudojama skaitmeninė pašalpos paraiškos forma gali gauti labai aukštą pasitenkinimo įvertį, o pagrindinė politika – tinkamumo taisyklės, apdorojimo atsilikimai, išmokų dydžiai – palieka pareiškėją ne geresnėje padėtyje. Pasitenkinimas matuoja sąsają; jis nematuoja už jos pateikiamos vertės.

## Matematika

```
Grynasis pasitenkinimas = % patenkintų (ar labai patenkintų) − % nepatenkintų (ar labai nepatenkintų)
                    (neutralūs / nuomonės neturintys atsakymai neįtraukiami į abu dėmenis, bet
                    įskaičiuojami į atsakymų bazę apskaičiuojant kiekvieną procentą)

Pasitenkinimo ir rezultato skirtumas = pasitenkinimo įvertis − rezultato pasiekimo įvertis
                    (abu normalizuoti 0–100; didelis teigiamas skirtumas rodo paslaugą,
                    kuri „jaučiasi gerai“, bet nepakankamai pateikia esmės)

Pasitikėjimo indeksas (ESBO tipo) = % apklausos respondentų, atsakiusių „taip“ į klausimą
                    „ar pasitikite [nacionaline valdžia]?“
                    stebimas kaip laiko eilutė, paprastai išskaidytas pagal
                    amžių, pajamas ir išsilavinimą
```

## Pavyzdys su skaičiavimais

**Vietos valdžios savivaldybės mokesčio el. sąskaitų paslauga**: pasitenkinimo apklausa sėkmingo sandorio metu rodo 2 400 respondentų: 1 650 patenkintų / labai patenkintų, 250 nepatenkintų / labai nepatenkintų, 500 neutralių.

```
Grynasis pasitenkinimas = (1 650/2 400 × 100) − (250/2 400 × 100)
                  = 68,75 % − 10,42 %
                  = +58,3 grynasis pasitenkinimas
```

Atskirai tai atrodo stipru. Tačiau apklausa rodoma tik naudotojams, kurie *sėkmingai* užbaigia sandorį – žinomas matavimo šališkumas (žr. žemiau klaidas). Susiejus su užbaigimo rodikliu iš [paslaugų standartai ir sandorių rodikliai](../paslaugų-standartai-ir-sandorių-metrikos/), matyti, kad užbaigimas yra tik 71 %, o tai reiškia:

```
Tikras populiacijos pasitenkinimas neišmatuotas 29 % tų, kurie nutraukė kelionę –
tikėtina, labiausiai nepatenkintai kohortai, nes nutraukimas pats yra stiprus neigiamas
signalas, kurio apklausa niekada nefiksuoja.
```

**Nacionalinio lygmens iliustracija (ESBO tipo pasitikėjimo eilutės struktūra)**: pasitikėjimas nacionaline valdžia pirmaisiais metais pranešamas 42 %, antraisiais (krizės metais) krenta iki 34 %, o trečiaisiais atsigauna iki 39 % – trajektorija, tipinė smūgio ir dalinio atsigavimo modeliui, kurį ESBO dokumentuoja valstybėse narėse po didelių krizių.

## Ryšys su programine inžinerija

Pasitenkinimo apklausas instrumentuokite kiekviename reikšmingame naudotojo kelionės išėjimo taške, o ne tik sėkmingai užbaigus – tai dažniausia inžinerinė klaida šioje srityje, tyliai paverčianti pasitenkinimo rodiklį išgyvenusiųjų šališkumo (survivorship bias) tuščiu rodikliu. Kur įmanoma, pasitenkinimo įvertį susiekite su užbaigimo ar rezultato rodikliu tame pačiame skydelyje, kad komanda negalėtų švęsti augančio pasitenkinimo, kai užbaigimas tyliai krenta (žr. [kaštai už sandorį](../kaštai-vienam-sandoriui/) ir [skaitmeninė įtrauktis](../skaitmeninė-įtrauktis/), kad suprastumėte, kas pirmiausia pašalinami iš skaitmeninio pasitenkinimo imties – neskaitmeniniai ir padedami skaitmeniniai naudotojai sistemingai nepakankamai atstovaujami paslaugos viduje atliekamose apklausose). Pasitenkinimo ir pasitikėjimo duomenys taip pat tiesiogiai maitina [Moore'o strateginio trikampio](../viešoji-vertė/) teisėtumo šaką ir priklauso „kliento“ bei „teisėtumo“ perspektyvoms [visuomeninės vertės rezultatų kortelėje](../viešosios-vertės-rezultatų-kortelė/) – institucijų lygmens šio paslaugos lygmens rodiklio atitikmenį žr. [pasitikėjimo ir teisėtumo rodikliai](../pasitikėjimo-ir-teisėtumo-rodikliai/).

## Dažniausios klaidos

- **Išgyvenusiųjų šališkumas užbaigimo momento apklausose**: naudotojai, kurie nutraukia kelionę, apklausos niekada nemato, todėl aukštas paslaugos viduje gautas pasitenkinimo įvertis gali sugyventi su žemu užbaigimo dažniu ir didele nematoma nepatenkintų nebaigusiųjų populiacija.
- **Pasitenkinimo laikymas rezultato pakaitalu**: gerai suprojektuota sąsaja prastai suprojektuotai politikai gauna gerą pasitenkinimo įvertį ir blogą rezultato – visada pranešti apie abu, niekada vieno vietoj kito.
- **Mažos, neatstovaujamosios imtys, pateikiamos su apgaulingu tikslumu**: pasitenkinimo įvertis iš kelių šimtų savarankiškai atrinktų respondentų, pateiktas iki vienos dešimtosios, implikuoja pasitikėjimą, kurio imties dydis negali pagrįsti.
- **Demografinio išskaidymo ignoravimas**: nacionaliniai pasitikėjimo ir pasitenkinimo skaičiai, neišskaidyti pagal amžių, pajamas, negalią ar skaitmeninę prieigą, gali paslėpti smarkiai besiskiriančias grupių patirtis – modelis, kurį pačios ESBO „Trust in Government“ ataskaitos aiškiai išskaido.

## Šaltiniai

- OECD, "Trust in Government." <https://www.oecd.org/en/topics/trust-in-government.html>
- UK Cabinet Office, "Civil Service People Survey" results.
  <https://www.gov.uk/government/collections/civil-service-people-survey-results>
- GOV.UK Service Manual, "Measuring Success." <https://www.gov.uk/service-manual/measuring-success>
