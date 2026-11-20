# Papildinātība un inerces efekts

Papildinātība jautā, vai intervence ir izraisījusi iznākumu, kas citādi nebūtu iestājies. Inerces efekts (angl. deadweight) ir tās spoguļattēls: tā iznākuma daļa, kas būtu iestājusies arī bez programmas, granta vai subsīdijas. Gandrīz katrs valdības programmas vai labdarības organizācijas ietekmes apgalvojums pārspīlē savu efektu, kamēr inerces efekts nav atskaitīts, tāpēc Apvienotās Karalistes izvērtēšanas vadlīnijas to uzskata par pirmo un svarīgāko korekciju jebkuram virsrakstā minētajam skaitlim.

## Kāpēc tas ir svarīgi

„Mēs atbalstījām 500 uzņēmumu izaugsmi" izklausās pēc sasnieguma, taču, ja 300 no šiem uzņēmumiem būtu auguši tāpat — tāpēc, ka vietējā ekonomika atlaba, tāpēc, ka tiem bija citi finansējuma avoti, tāpēc, ka tie jau pirms programmas sākuma atradās izaugsmes trajektorijā —, programmas patiesais papildu devums ir 200, nevis 500. HM Treasury (Lielbritānijas Valsts kases) Magenta Book un ilgstoši lietotā HM Treasury/BIS „Additionality Guide" (sākotnēji izstrādāta reģionālās attīstības un reģenerācijas programmām un kopš tā laika plaši izmantota Apvienotās Karalistes valdības izvērtēšanā) formalizē inerces efektu kā sākotnējo korekciju standarta neto ietekmes secībā: bruto efekts mīnus inerces efekts, mīnus izspiešana, mīnus noplūde, koriģēts ar reizinātāja efektiem, ir vienāds ar neto papildu ietekmi. Šī soļa izlaišana ir visbiežākais veids, kā publiskā un sociālā sektora ietekmes apgalvojumi tiek uzpūsti, apzināti vai neapzināti — granta programma, kas mēra tikai dalībnieku bruto rezultātus un neizmanto salīdzinājuma grupu, nespēj atšķirt savu efektu no tā, kas būtu noticis jebkurā gadījumā.

Inerces efekts nav fiksēts procents; tas pilnībā atkarīgs no kontrfaktiskā scenārija konkrētajai populācijai un intervencei (sk. [kontrfaktiskā analīze](../kontrfaktiskā-analīze/)). Angļu reģionālās attīstības izvērtējumos, kas tika veikti iepriekšējo Regional Development Agencies laikā, inerces efekta līmenis parasti bija 20–60 % atkarībā no uzņēmējdarbības atbalsta veida, tāpēc uzticami programmu izvērtējumi min ar inerces efektu koriģētu diapazonu, nevis vienu pieņemtu skaitli, un tāpēc tādi finansētāji kā National Lottery Community Fund un Big Society Capital pieprasa, lai atbalsta saņēmēji iznākumu atskaitēs inerces efektu risinātu skaidri, nevis ziņotu par bruto dalībnieku skaitu.

## Matemātika

Standarta neto ietekmes korekciju secība, kā tā izklāstīta Apvienotās Karalistes izvērtēšanas vadlīnijās (Magenta Book; HM Treasury/BIS Additionality Guide; ESIF un struktūrfondu izvērtēšanas vadlīnijas):

```
Bruto iznākums
  − Inerces efekts   (kas būtu noticis tāpat)
  − Izspiešana       (darbība/ieguvums pārvietots no citurienes, nevis radīts — sk.
                       displacement-and-attribution)
  − Noplūde          (ieguvums, kas nonāk ārpus mērķa grupas/teritorijas)
  × Reizinātājs      (papildu netiešā/inducētā ekonomiskā darbība, ja tā ir pozitīva)
  = Neto papildu ietekme
```

Inerces efekta līmenis kā proporcija:

```
Inerces efekta līmenis = iznākumi, kas būtu iestājušies bez intervences
                          / kopējie novērotie bruto iznākumi

Neto papildu iznākumi = bruto iznākumi × (1 − inerces efekta līmenis)
```

## Aprēķina piemērs

**Uzņēmējdarbības atbalsta granta programma**: reģionāla granta shēma ziņo, ka 500 atbalstīto uzņēmumu nākamajā gadā palielināja nodarbinātību, vidēji par 3 darbvietām katrs — bruto apgalvojums ir 1 500 darbvietu.

Salīdzināma neatbalstīto uzņēmumu grupa (sk. [kontrfaktiskā analīze](../kontrfaktiskā-analīze/)) liecina, ka 40 % no atbalstīto uzņēmumu nodarbinātības pieauguma būtu notikuši tāpat, pamatojoties uz to, kā šī grupa darbojās tajā pašā periodā.

```
Inerces efekta līmenis = 40 %
Neto papildu darbvietas = 1 500 × (1 − 0,40) = 900 darbvietas
```

Programmas godīgi paziņojamais sasniegums ir 900 darbvietu, nevis 1 500 — 40 % samazinājums tikai ar inerces efekta korekciju, vēl neņemot vērā izspiešanu vai noplūdi.

**Labdarības nodarbinātības programma**: labdarības organizācija nodarbina 200 ilgstošos bezdarbniekus par £600 000 (£3 000 par vienu nodarbināšanas gadījumu, bruto). Valsts darba tirgus dati rāda, ka bez jebkādas intervences aptuveni 15 % no salīdzināmas ilgstošo bezdarbnieku kohortas tajā pašā periodā atrod darbu dabiskās darba tirgus rotācijas rezultātā.

```
Inerces efekta līmenis = 15 %
Neto papildu nodarbināšanas gadījumi = 200 × (1 − 0,15) = 170
Patiesās izmaksas par vienu papildu nodarbināšanas gadījumu = £600 000 / 170 ≈ £3 529
```

Bruto rādītājs „izmaksas par nodarbināšanas gadījumu" (£3 000) aptuveni par 15 % nenovērtē labdarības organizācijas papildu devuma patiesās izmaksas.

## Saikne ar programmatūras inženieriju

Papildinātība un inerces efekts tieši svarīgi ikvienam, kas veido ietekmes mērīšanas vai grantu pārvaldības programmatūru publiskajam vai sociālajam sektoram:

- Iznākumu atskaišu sistēmām jau pēc dizaina jāfiksē salīdzinājuma vai bāzlīnijas grupa, nevis tikai dalībnieku iznākumi — kontrfaktisko scenāriju pēc sistēmas palaišanas pievienot ir daudz grūtāk nekā iebūvēt datu uzkrāšanu no paša sākuma (sk. [kontrfaktiskā analīze](../kontrfaktiskā-analīze/)).
- Informācijas paneļi, kas ziņo tikai par bruto dalībnieku skaitu, sistemātiski pārspīlēs ietekmi finansētājiem un uzraudzības institūcijām; ja ir pieejami inerces efekta aprēķini (no izvērtēšanas literatūras vai salīdzinājuma grupas), programmatūrai līdzās bruto skaitlim jārāda arī skaitlis pēc inerces efekta atskaitīšanas, nevis tā vietā.
- Tas tieši saistīts ar [sociālo ieguldījumu atdevi](../sociālā-ieguldījumu-atdeve/), kuras SROI koeficients ir ticams tikai pēc tam, kad no bruto apgalvotajiem iznākumiem atskaitīts inerces efekts (un izspiešana) — SROI kalkulators, kas izlaiž šo soli, radīs uzpūstus koeficientus, kas nenotur kritiku.

## Biežākās kļūdas

- **Bruto iznākumu uzrādīšana tā, it kā tie visi būtu papildu.** Tā ir visbiežākā ietekmes mērīšanas kļūda grantu un programmu atskaitēs; pirms virsraksta skaitļa publicēšanas vienmēr jājautā: „Vai tas būtu noticis tāpat?"
- **Pieņēmums, ka viens inerces efekta procents der visur.** Inerces efekts ļoti atšķiras pēc nozares, populācijas un vietējiem ekonomiskajiem apstākļiem; jālieto salīdzinājuma grupa vai nozarei specifiski pierādījumi, nevis skaitlis no nesaistīta izvērtējuma.
- **Inerces efekta sajaukšana ar izspiešanu.** Inerces efekts attiecas uz kontrfaktiskajiem iznākumiem tiem pašiem dalībniekiem; izspiešana — uz ietekmi uz citiem cilvēkiem vai vietām, sk. [izspiešana un attiecināšana](../izspiešana-un-attiecināšana/). Abu sajaukšana noved pie korekcijas dubultas uzskaites vai nepietiekamas uzskaites.
- **Dalībnieku paši novērtēts inerces efekts.** Ja saņēmējiem jautā: „Vai tas būtu noticis bez mūsu palīdzības?", inerces efekts sistemātiski tiek novērtēts par zemu (dalībnieki mēdz pieskaitīt nopelnus programmai); neatkarīga salīdzinājuma grupa ir daudz uzticamāka.

## Avoti

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020).
  <https://www.gov.uk/government/publications/the-magenta-book>
- HM Treasury / Department for Business, Innovation and Skills, "Additionality Guide: A Standard
  Approach to Assessing the Additional Impact of Interventions" (3rd edition), originally developed
  with English Partnerships and the Housing Corporation.
- European Commission, "Evalsed: The Resource for the Evaluation of Socio-Economic Development" —
  vadlīnijas par inerces efektu, izspiešanu un noplūdi struktūrfondu izvērtēšanā.
- National Lottery Community Fund, "Guidance on Outcomes and Impact Reporting." <https://www.tnlcommunityfund.org.uk/>
