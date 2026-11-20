# Labklājības koriģētie dzīves gadi (WELLBY)

WELLBY ir viens papildu dzīves apmierinātības punkts standarta 0–10 labklājības skalā vienam cilvēkam vienu gadu. Tas ir QALY strukturālais analogs veselības ekonomikā — viena vienība, kas ļauj salīdzināt intervences, kuru iznākumiem nav nekā cita kopīga —, taču balstīts uz subjektīvo labklājību, nevis klīniskiem veselības stāvokļiem, un izklāstīts HM Treasury "Wellbeing guidance for appraisal: supplementary Green Book guidance" (2021).

## Kāpēc tas ir svarīgi

Izmaksu un ieguvumu novērtēšanai vajadzīga kopīga vienība, lai salīdzinātu jauniešu kluba grantu ar ceļu drošības shēmu un garīgās veselības pakalpojumu, kuriem nav kopīga iznākuma mēra. Veselības ekonomika to atrisināja klīniskām intervencēm ar QALY: kvalitātes koriģētu dzīves gadu, svērtu no 0 (miris) līdz 1 (pilnīga veselība). HM Treasury labklājības norādījumi paplašina to pašu loģiku uz neveselības publiskajiem izdevumiem, kā iznākuma kāpnes, nevis veselības stāvokļa indeksu, izmantojot ONS harmonizēto dzīves apmierinātības jautājumu („Kopumā, cik apmierināts jūs šobrīd esat ar savu dzīvi?", atbilde 0–10). WELLBY 1 nozīmē viena cilvēka dzīves apmierinātības pieaugumu par pilnu punktu vienu gadu (vai līdzvērtīgi — desmit cilvēku apmierinātības pieaugumu par 0,1 punktu katram gadu — WELLBY summējas visā populācijā tāpat kā QALY). HM Treasury norādījumi nosaka ilustratīvu naudas vērtību uz WELLBY (ap £13 000, 2019./20. gada cenās), atvasinātu, saskaņojot subjektīvās labklājības datus ar citām pieejām dzīves gada vērtībai, dodot novērtētājiem veidu izteikt naudā iznākumus — vientulības mazināšanu, kopienas kohēziju, piekļuvi zaļajām zonām —, ko [labklājības vērtēšanas](../labklājības-vērtēšana/) metodes iepriekš varēja tikai aprakstīt, nevis salīdzināt uz kopīga pamata ar veselības vai drošības izdevumiem.

## Matemātika

```
WELLBY = Δ dzīves apmierinātība (0–10 skala) × gadu skaits, cik izmaiņa saglabājas
        (summēts pa visiem skartajiem cilvēkiem)

Naudā izteikts labklājības ieguvums = radītie WELLBY × vērtība uz WELLBY (HMT atsauces vērtība)

sal. QALY = Δ veselības stāvokļa derīgums (0–1 skala) × gadi, kas nodzīvoti šajā stāvoklī
```

0–10 apmierinātības skala un 0–1 QALY derīguma skala nav savstarpēji aizstājamas bez pārvēršanas soļa; HM Treasury norādījumi apspriež abu saskaņošanu, lai, piemēram, ar QALY novērtēta veselības intervence un ar WELLBY novērtēta sociāla intervence klusībā netiktu dubultā uzskaitītas vai nepaliktu nesalīdzināmas vienā un tajā pašā [Green Book novērtējumā](../green-book-novērtējums/).

## Aprēķina piemērs

**Pašvaldības vientulības pakalpojums**: draudzēšanās shēma apkalpo 400 izolētus vecākus iedzīvotājus. Turpmākās aptaujas rāda, ka vidējā dzīves apmierinātība pieaug no 5,2 uz 6,0 (0,8 punktu pieaugums), un tiek lēsts, ka efekts saglabājas 2 gadus, pirms izzūd.

```
WELLBY = 400 cilvēki × 0,8 punkti × 2 gadi = 640 WELLBY

Naudā izteikta vērtība = 640 × £13 000 = £8 320 000
```

Pret programmas gada izmaksām £300 000 (£600 000 par 2 gadiem) ieguvumu un izmaksu attiecība ir aptuveni 8 320 000 / 600 000 ≈ **13,9:1** — skaitlis, kas tagad var atrasties tajā pašā novērtējuma tabulā kā veselības shēmas novērsto QALY izmaksas vai transporta shēmas ceļojuma laika ietaupījumi.

**Labdarības organizācija, mazāks mērogs**: kopienas mākslas programma sasniedz 50 dalībniekus ar izmērītu apmierinātības pieaugumu 0,3 punkti, kas ilgst 1 gadu.

```
WELLBY = 50 × 0,3 × 1 = 15 WELLBY
Naudā izteikta vērtība = 15 × £13 000 = £195 000
```

## Saikne ar programmatūras inženieriju

- Jebkurš pilsoņiem paredzēts pakalpojums, kas jau vāc dzīves apmierinātības vai labklājības aptaujas vienumu (to dara daudzas pašvaldību un veselības un aprūpes platformas, ievērojot ONS četrus standarta labklājības jautājumus), var aprēķināt WELLBY tieši no esošajiem datu cauruļvadiem, nevis pasūtīt individuālu ekonomisko novērtējumu katrai pakalpojuma izmaiņai.
- WELLBY dod inženieru komandām, kas būvē [sociālās vērtības likuma](../sociālās-vērtības-likums/) vai [sociālās ieguldījumu atdeves](../sociālā-ieguldījumu-atdeve/) ziņošanu, nacionāli standartizētu, HM Treasury apstiprinātu saucēju, izvairoties no individuālu „ietekmes vērtējumu" pārpilnības, ko nevar salīdzināt starp līgumiem vai piegādātājiem.
- Tā kā WELLBY ir aditīvi pa cilvēkiem un laiku, tie tīri ietilpst populācijas līmeņa iznākumu izsekošanā, ko izmanto [uz rezultātiem balstīta atbildība](../uz-rezultātiem-balstīta-atbildība/) sistēmās — pakalpojuma informācijas panelis var ziņot par kumulatīvi radītajiem WELLBY ceturksnī tāpat, kā veselības sistēma ziņo par iegūtajiem QALY.

## Biežākās kļūdas

- **Pieņēmums, ka paša ziņotie apmierinātības pieaugumi ir pilnībā attiecināmi uz intervenci** — bez kontrfaktiskā scenārija (salīdzināšanas grupas vai pirms/pēc dizaina ar kontroli) WELLBY pieaugumu nevar nodalīt no vispārējām tendencēm; skatiet [kontrfaktiskā analīze](../kontrfaktiskā-analīze/).
- **WELLBY un QALY sajaukšana vienā kopsummā bez saskaņošanas** — HM Treasury norādījumi skaidri norāda, ka abi izmanto atšķirīgas skalas un atšķirīgas pamatā esošās vērtības teorijas; to naiva summēšana dubultā uzskaita pārklājošos labklājību.
- **Atsauces naudas vērtības lietošana bez kritikas** — £ uz WELLBY skaitlis ir nacionālā vidējā novērtējums ar reālām nenoteiktības joslām; HM Treasury norādījumi iesaka jutīguma analīzi, nevis uzskatīt to par fiksētu maiņas kursu.

## Avoti

- HM Treasury. "Wellbeing guidance for appraisal: supplementary Green Book guidance." (2021)
  <https://www.gov.uk/government/publications/wellbeing-guidance-for-appraisal-supplementary-green-book-guidance>
- ONS. "Personal well-being user guidance" (the four standard wellbeing questions).
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing>
- HM Treasury. "The Green Book: Central Government Guidance on Appraisal and Evaluation."
