# Uštede prelaskom na druge kanale

Uštede prelaskom na druge kanale (engl. channel shift savings) projicirano su smanjenje troškova premještanjem obujma transakcija iz skupih kanala (telefon, šalteri licem u lice, papirnata pošta) u jeftinu digitalnu samouslugu. To je financijski motor „digitalno prema zadanome” i ujedno stavka poslovnog slučaja koja je najvjerojatnije pogrešna, jer je pretpostavka na kojoj počiva, da se izvanmrežni kanali smanjuju kako raste digitalno korištenje, istinita samo ponekad.

## Zašto je važno

Aritmetika izgleda neoboriva uz brojke [troška po transakciji](../trošak-po-transakciji/) iz Digital Efficiency Reporta: premjestite milijun transakcija s posjeta licem u lice od 8,62 £ na digitalnu od 0,15 £ i ušteda iznosi preko 8 milijuna. No ušteda postaje gotovina koja se može preraspodijeliti tek ako se *fiksni kapacitet* kanala koji se smanjuje doista ukine: radna mjesta u pozivnom centru, osoblje na šalterima, ugovorene telefonske minute. Digitalni programi lokalne uprave više su puta utvrdili da ukupni obujam kontakata ne pada u skladu s digitalnim korištenjem. Istraživanja programa digitalne transformacije lokalnih vlasti i tijela poput Socitma i Local Government Association dokumentirala su ponavljajući obrazac: digitalni kanali privlače doista nove kontakte (građani koji ne bi zvali niti došli sada to čine jer je lakše), a znatan udio „digitalnih” transakcija zapne usred puta i svejedno proizvede telefonski poziv, pa telefonski obujam pada daleko manje nego što bi sugerirao postotak digitalnog korištenja, a ponekad apsolutno uopće ne pada, iako mu *udio* u ukupnim kontaktima opada.

## Matematika

```
Bruto ušteda prelaskom na drugi kanal = premješteni obujam × (trošak_stari_kanal − trošak_digitalni)

Neto (ostvarena) ušteda = bruto ušteda
                         − nova/sjenovita potražnja koju stvara lakši kanal
                         − trošak potražnje zbog neuspjeha (digitalni
                           neuspjesi koji svejedno stvaraju telefonski
                           poziv ili posjet šalteru)
                         − trošak neukinutog fiksnog kapaciteta (pozivni
                           centar može smanjiti osoblje samo u diskretnim
                           jedinicama; pad obujma od 15 % rijetko dopušta
                           smanjenje 15 % zaposlenika)

Prag ostvarenja: uštede se mogu računati tek kad obujam padne ispod
razine koju stari kanal može popuniti osobljem na idućem manjem diskretnom
koraku kapaciteta (npr. gubitak jedne pune smjene, jednog punog stola,
jednog ugovorenog razreda zaposlenika)
```

## Primjer iz prakse

**Usluga obnove plave značke u županijskom vijeću**: 60.000 obnova godišnje, prije 100 % telefonom/papirom po 6,40 £ po transakciji. Nova digitalna usluga pokrenuta je i unutar godine dosegla 65 % digitalnog korištenja, uz 0,30 £ po digitalnoj transakciji.

```
Naivni (bruto) izračun uštede:
  39.000 premještenih × (6,40 £ − 0,30 £) = 237.900 £/godišnje

Što se doista dogodilo, prema podacima pozivnog centra vijeća:
  Telefonski obujam pao je s 60.000/godišnje na 46.000/godišnje (−23 %, a ne −65 %)
  jer: 9.000 digitalnih putanja nije uspjelo i stvorilo je naknadni poziv
       (curenje potražnje zbog neuspjeha), a 4.000 ljudi koji prije
       uopće nisu obnavljali sada obnavlja jer su našli da je lako online
       (sjenovita potražnja — stvarno poboljšanje pristupa, ali ne i ušteda)

  Telefonski pozivni centar popunjava se u razredima od 8.000 poziva/FTE;
  pad od 14.000 poziva (60.000 → 46.000) oslobađa 1,75 FTE, što se u praksi
  zaokružuje na 1 FTE koji je doista preraspoređen = 34.000 £/godišnje

Ostvarena ušteda = 34.000 £/godišnje plus izbjegnuti trošak izgradnje/rada
  digitalnog kanala na 39.000 transakcija ≈ 34.000 £ + (39.000 × 0,30 £
  digitalnog troška već uračunatog) — djelić naslovnih 237.900 £, iako je
  usluga korisnicima i dalje nedvojbeno bolja.
```

## Veza s programskim inženjerstvom

Inženjerska pouka jest da se uštede prelaskom na druge kanale ostvaruju *operativnim* odlukama (raspored smjena, ukidanje, ponovno pregovaranje ugovora), a ne isporukom softvera: tim može zadovoljiti svaku točku [Digital Service Standarda](../standard-digitalnih-usluga/) i svejedno isporučiti nula neto uštede ako nitko ne ukine fiksni kapacitet starog kanala. Instrumentacija potražnje zbog neuspjeha (gdje korisnici napuštaju digitalni put i što rade potom) rješiv je problem analitike lijevka i najvažnija pojedinačna stvar koju inženjerski tim može učiniti da zaštiti slučaj uštede; to je i izravna veza s [troškom po transakciji](../trošak-po-transakciji/), koji potražnja zbog neuspjeha tiho napuhuje. Vidi [ostvarenje koristi](../ostvarenje-koristi/) za širu disciplinu provjere da se uštede iz poslovnog slučaja doista ostvaruju, i [digitalnu uključenost](../digitalna-uključenost/) za razlog zašto se izvanmrežni kanal obično ne može, i ne treba, potpuno ukinuti.

## Zamke

- **Pretpostavka zamjene kanala jedan prema jedan**: modeliranje digitalnog korištenja kao izravnog oduzimanja od telefonskog/šalterskog obujma, uz zanemarivanje sjenovite potražnje i curenja zbog neuspjeha dokumentiranih u istraživanjima prelaska na druge kanale u lokalnoj upravi.
- **Knjiženje bruto ušteda prije ukidanja**: računanje uštede u poslovnom slučaju u godini kad raste korištenje, a ne u godini kad se (ako ikad) kapacitet starog kanala doista smanji.
- **Ignoriranje stepenaste prirode troškova osoblja**: pad obujma od 20 % rijetko se pretvara u pad troškova od 20 %, jer se pozivni centri i šalteri popunjavaju osobljem u diskretnim razredima, a ne neprekidno.
- **Tretiranje sjenovite potražnje kao otpada**: novi kontakti ranije isključenih ili odbijenih korisnika stvarno su povećanje [javne vrijednosti](../javna-vrijednost/), a ne pogreška modela; treba ih iskazati kao ishod pristupa, a ne prebiti kao šum.

## Izvori

- Cabinet Office, Digital Efficiency Report (2012). <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- Local Government Association, digital transformation and channel shift resources. <https://www.local.gov.uk/our-support/efficiency-and-income-generation/digital-transformation>
- Socitm, local public services digital insight research. <https://www.socitm.net/>
