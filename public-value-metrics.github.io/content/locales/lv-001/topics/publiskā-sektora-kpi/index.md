# Publiskā sektora KPI

Galvenais snieguma rādītājs (KPI) ir izvēlēts, izsekots mērs, kas aizstāj atbildi uz jautājumu, vai
publiskais pakalpojums labi veic savu darbu. Valdībā KPI izvēle nekad nav neitrāla: tā kā KPI ir
piesaistīti budžetiem, rangu tabulām un karjerām, KPI izvēle veido visu tālāko dalībnieku uzvedību, bieži
spēcīgāk nekā politika, kas radīja pakalpojumu.

## Kāpēc tas ir svarīgi

Čārlza Gudharta (Charles Goodhart) 1975. gada novērojums par monetāro politiku — vēlāk popularizēts
Mērilinas Strazernas (Marilyn Strathern) formulējumā "kad mērs kļūst par mērķi, tas pārstāj būt labs mērs" —
ir vissvarīgākā brīdinājuma zīme publiskā sektora snieguma pārvaldībā. KPI, kas izvēlēts, lai sistēmu
*aprakstītu*, sāk to *izkropļot* tajā brīdī, kad resursu piešķiršana, alga vai politiskā izdzīvošana tiek
piesaistīta tam. Kanoniskā ilustrācija ir NHS ātrās palīdzības reaģēšanas laiki: kad astoņu minūšu A
kategorijas reaģēšanas mērķis kļuva saistošs, tika uzrādīts, ka dažas trasti "sakrāvuši" ātrās palīdzības
automašīnas tieši ārpus reaģēšanas laika hronometra vai pārklasificējuši izsaukumus, lai sasniegtu skaitli,
nemainot pacientu rezultātus. Apvienotās Karalistes Nacionālās revīzijas pārvaldes (National Audit Office)
norādījumi par snieguma rādītāju izvēli un izmantošanu — izklāstīti tās izmaksu lietderības ziņojumos un
"Performance Measurement by Regulators" un "Choosing the Right FABRIC" ietvarā (Fit for purpose,
Appropriate, Balanced, Robust, Integrated, Cost-effective) — pastāv tieši tāpēc, ka departamenti turpināja
izvēlēties rādītājus, kurus bija viegli uzrādīt, nevis tādus, kurus bija grūti manipulēt. Programmatūras
inženieris, kas izlaiž paneli, pēc kura ministrs vai direktors tiks vērtēts, vai nu to vēlas, vai nē,
projektē publiskas iestādes stimulu struktūru.

## Matemātika

KPI dizains ir ietvara tipa tēma, bet kandidāta KPI *izvērtēšana* ir atkārtojams kontrolsaraksts, nevis formula:

```
Katram kandidāta KPI novērtējiet pēc:
  Fit for purpose (piemērots mērķim)  — vai tas mēra rezultātu, vai aizstājēju, kas vairākus soļus attālināts?
  Appropriate (atbilstošs)             — vai tas pieder cilvēkiem, kas to patiešām var ietekmēt?
  Balanced (līdzsvarots)               — vai tas ir savienots ar pretmetriku, kas pamana manipulāciju?
  Robust (noturīgs)                    — vai tas iztur auditu, vai arī ir pašziņots un nepārbaudāms?
  Integrated (integrēts)               — vai tas iekļaujas plašākā kopā, vai arī stumj pret citu KPI?
  Cost-effective (izmaksu efektīvs)    — vai tā vākšana maksā vairāk nekā lēmums, ko tas informē?

Priekšlaicīgo un pēcpusējo rādītāju dalījums:
  Priekšlaicīgais rādītājs  → prognozē nākotnes rezultātu, bet bieži manipulējams (piem., zvani atbildēti <60 s)
  Pēcpusējais rādītājs      → apstiprina, ka rezultāts iestājies, bet nāk par vēlu, lai vadītu (piem.,
                              ikgadējā apmierinātības aptauja)
  Aizstāvamā KPI kopā ir vismaz viens no katra veida uz mērķi.
```

## Aprēķina piemērs

**Ātrās palīdzības trasts**: trasts ziņo par A kategorijas (dzīvībai bīstamu) reaģēšanas laika KPI "75 %
izsaukumu atbildēti 8 minūšu laikā." Vienā ceturksnī tiek saņemti 6 000 A kategorijas izsaukumi; 4 500
izpildīti 8 minūšu laikā, kas dod 75,0 % — šķietami mērķa līmenī.

```
Virsraksta KPI = 4 500 / 6 000 × 100 = 75,0 %  (atbilst 75 % slieksnim)
```

Bet Gudharta audits pievieno pretmetriku: vidējais reaģēšanas laiks lēnākajiem 10 % izsaukumu.

```
Lēnākā decila vidējais reaģēšanas laiks = 34 minūtes (pieaugums no 19 minūtēm pirms diviem gadiem)
```

Trasts sasniedz mērķi, kamēr aste — izsaukumi, kas visticamāk ir patiesi dzīvībai bīstami, ja triāža ir
nepilnīga — ir kļuvusi daudz sliktāka, jo brigādes tiek prioritizētas izsaukumiem tuvu 8 minūšu klints
malai, nevis pēc klīniskās steidzamības. Vienīgais KPI stāstīja nepatiesu stāstu; pāra KPI stāstīja patieso.

## Saikne ar programmatūras inženieriju

Inženieri, kas veido snieguma paneļus valdībai, funkcionāli projektē organizācijas stimulu API. Praktiskās
sekas: instrumentējiet *saucēju* tikpat stingri kā skaitītāju (KPI, kas ziņots kā kails procents, aicina
saucēja manipulāciju — par to pašu slazdu digitālajos pakalpojumos skatiet
[izmaksas uz darījumu](../izmaksas-uz-darījumu/)); iebūvējiet pretmetrikas tajā pašā panelī, nevis atsevišķā
pārskatā, ko neviens nelasa, lai manipulācija būtu redzama lēmuma pieņemšanas brīdī; un versionējiet KPI
definīciju, jo kluss pārdefinējums (mainot, kas skaitās "izsaukums", "lieta" vai "pabeigšana") funkcionāli
ir līdzvērtīgs mērķa maiņai bez paziņošanas. [Sabiedriskās vērtības rezultātu kartīte](../sabiedriskās-vērtības-rezultātu-kartīte/)
ir viens strukturēts veids, kā novērst viena KPI lasīšanu izolēti, un
[uz rezultātiem balstīta atbildība](../uz-rezultātiem-balstīta-atbildība/) ir disciplīna, kā izvēlēties
iedzīvotāju līmeņa KPI, ko viena komanda nevar vienpusēji izkropļot.

## Biežākās kļūdas

- **Viegli savācamas metrikas izvēle jēgpilnas vietā**: zvana atbildes laiku ir triviāli žurnalēt; vai zvans
  atrisināja iedzīvotāja problēmu, nav — bet tikai otrais ir rezultāts. Pretojieties noklusējumam izmantot to,
  ko sistēma jau izdod.
- **Nav pretmetrikas**: jebkurš KPI, kas piesaistīts naudai vai reputācijai, tiks manipulēts uz robežas;
  izlaidiet to kopā ar pāra metriku, kas pamana ticamāko manipulācijas vektoru, pirms publicēšanas.
- **Metrikas pārdefinēšana bez izmaiņu žurnāla**: "saņemto zvanu" nomaiņa ar "atbildēto zvanu", lai
  glaimotu tendencei, iznīcina laika rindas uzticamību tajā brīdī, kad tas tiek atklāts — vienmēr
  publicējiet definīciju izmaiņu žurnālu līdzās skaitļiem.
- **Aktivitātes jaukšana ar rezultātu**: pabeigto inspekciju skaitīšana ir izlaide; to telpu skaitīšana,
  kas panāktas atbilstošas, ir tuvāk rezultātam (skatiet [rezultāti pret izlaidi](../rezultāti-pret-izlaidi/)).

## Avoti

- National Audit Office, "Choosing the Right FABRIC: A Framework for Performance Information."
  <https://www.nao.org.uk/>
- Marilyn Strathern, "'Improving Ratings': Audit in the British University System," *Social
  Anthropology*, 1997 (formulation of Goodhart's law as commonly cited).
- National Audit Office, investigations into NHS ambulance service performance reporting.
  <https://www.nao.org.uk/>
