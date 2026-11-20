# Iedzīvotāju apmierinātības rādītāji

Iedzīvotāju apmierinātības rādītāji mēra, kā cilvēki vērtē savu tiešo pieredzi ar publisku pakalpojumu — tas atšķiras no uzticības iestādēm kopumā un no tā, vai pakalpojums patiešām sasniedza labu iznākumu. Pakalpojums var būt patīkams, bet neefektīvs, vai efektīvs, bet nepatīkams; plaisa starp abiem pati par sevi ir diagnostiska informācija, kas piegādes komandai jāvēro.

## Kāpēc tas ir svarīgi

Apmierinātību mēra divos dažādos līmeņos, kurus ierasti sajauc. Pakalpojuma līmenī Apvienotās Karalistes tagad slēgtā Performance Platform un mūsdienu GOV.UK Service Manual prasa katram pakalpojumam apmierinātības aptauju (parasti piecpunktu skala no „ļoti apmierināts" līdz „ļoti neapmierināts", ko veic darījuma brīdī) kā vienu no četriem obligātajiem pakalpojuma KPI — sk. [pakalpojumu standarti un darījumu rādītāji](../pakalpojumu-standarti-un-darījumu-rādītāji/). Institucionālā līmenī Apvienotās Karalistes Civil Service People Survey ik gadu mēra darbinieku iesaisti un pieredzi katrā centrālās valdības departamentā, un atsevišķi OECD programma „Trust in Government" aptaujā sabiedrības uzticību nacionālajai valdībai dalībvalstīs, izsekojot ilgtermiņa krituma un atgūšanās shēmai, ko lielā mērā veido krīzes (gan 2008. gada finanšu krīze, gan COVID-19 pandēmija radīja krasas, redzamas izmaiņas OECD uzticības rādītājos). Iemesls, kāpēc inženieriem, kas veido iedzīvotājiem pavērstus pakalpojumus, jātur apmierinātība un iznākums atsevišķi, ir zināms pakalpojumu dizaina kļūmes veids: skaisti noformēta, viegli lietojama digitālā veidlapa pabalsta pieteikumam var iegūt ļoti augstu apmierinātību, kamēr pamatā esošā politika — atbilstības noteikumi, apstrādes uzkrājumi, piešķirto summu apmērs — atstāj pieteikuma iesniedzēju ne labākā situācijā. Apmierinātība mēra saskarni; tā nemēra aiz tās sniegto vērtību.

## Matemātika

```
Neto apmierinātība = % apmierināti (vai ļoti apmierināti) − % neapmierināti (vai ļoti neapmierināti)
                    (neitrālās/bez viedokļa atbildes ir izslēgtas no abiem locekļiem, bet ieskaitītas
                    atbilžu bāzē, aprēķinot katru procentu)

Apmierinātības–iznākuma plaisa = apmierinātības vērtējums − iznākuma sasniegšanas vērtējums
                    (abi normalizēti 0–100; liela pozitīva plaisa norāda uz pakalpojumu,
                    kas „šķiet labs", bet pēc būtības nepiegādā pietiekami)

Uzticības indekss (OECD veida) = % aptaujāto, kas atbild „jā" uz
                    „vai jums ir uzticība [nacionālajai valdībai]?"
                    izsekots kā laikrinda, parasti sadalīts pēc
                    vecuma, ienākumiem un izglītības
```

## Aprēķina piemērs

**Pašvaldības nekustamā īpašuma nodokļa e-rēķinu pakalpojums**: apmierinātības aptauja veiksmīga darījuma brīdī uzrāda 2 400 respondentus: 1 650 apmierināti/ļoti apmierināti, 250 neapmierināti/ļoti neapmierināti, 500 neitrāli.

```
Neto apmierinātība = (1 650/2 400 × 100) − (250/2 400 × 100)
                  = 68,75 % − 10,42 %
                  = +58,3 neto apmierinātība
```

Tas atsevišķi izskatās spēcīgi. Taču aptauja tiek rādīta tikai lietotājiem, kas *veiksmīgi* pabeidz darījumu — zināma mērījuma novirze (sk. biežākās kļūdas zemāk). Savienojot to ar pabeigšanas līmeņa rādītāju no [pakalpojumu standarti un darījumu rādītāji](../pakalpojumu-standarti-un-darījumu-rādītāji/), redzams, ka pabeigšana ir tikai 71 %, kas nozīmē:

```
Patiesā populācijas apmierinātība nav izmērīta tiem 29 %, kas pameta ceļojumu —
iespējams, visneapmierinātākajai kohortai, jo pamešana pati par sevi ir spēcīgs negatīvs
signāls, ko aptauja nekad neuztver.
```

**Nacionāla līmeņa ilustrācija (OECD veida uzticības rindas struktūra)**: uzticība nacionālajai valdībai ziņota 42 % 1. gadā, krītoties līdz 34 % 2. gadā (krīzes gads) un atgūstoties līdz 39 % 3. gadā — trajektorija, kas raksturīga šoka un daļējas atgūšanās shēmai, ko OECD dokumentē dalībvalstīs pēc lielām krīzēm.

## Saikne ar programmatūras inženieriju

Instrumentējiet apmierinātības aptaujas katrā jēgpilnā lietotāja ceļojuma izejas punktā, ne tikai veiksmīgā pabeigšanā — tā ir visbiežākā inženieru kļūda šajā jomā, kas klusi pārvērš apmierinātības rādītāju par izdzīvošanas novirzes izkropļotu iedomību rādītāju. Kur iespējams, savienojiet apmierinātības vērtējumu ar pabeigšanas vai iznākuma rādītāju vienā informācijas panelī, lai komanda nevarētu svinēt augošu apmierinātību, kamēr pabeigšana klusi krīt (sk. [izmaksas uz darījumu](../izmaksas-uz-darījumu/) un [digitālā iekļaušana](../digitālā-iekļaušana/), lai uzzinātu, kas vispirms tiek izslēgts no digitālās apmierinātības izlases — nedigitālie un ar palīdzību digitālie lietotāji sistemātiski ir nepietiekami pārstāvēti pakalpojuma iekšējās aptaujās). Apmierinātības un uzticības dati arī tieši baro [Mūra stratēģiskā trīsstūra](../sabiedriskā-vērtība/) leģitimitātes posmu un pieder pie „klienta" un „leģitimitātes" perspektīvām [sabiedriskās vērtības rādītāju kartītē](../sabiedriskās-vērtības-rezultātu-kartīte/) — sk. [uzticības un leģitimitātes rādītāji](../uzticēšanās-un-leģitimitātes-rādītāji/) institucionālā līmeņa pretstatam šim pakalpojuma līmeņa rādītājam.

## Biežākās kļūdas

- **Izdzīvošanas novirze pabeigšanas brīža aptaujās**: lietotāji, kas pamet ceļojumu, aptauju nekad neredz, tāpēc augsts pakalpojuma iekšējais apmierinātības vērtējums var līdzāspastāvēt ar zemu pabeigšanas līmeni un lielu neredzamu neapmierināto nepabeidzēju populāciju.
- **Apmierinātības uzskatīšana par iznākuma aizstājējrādītāju**: labi izstrādāta saskarne sliktai politikai gūst labu apmierinātības un sliktu iznākuma vērtējumu — vienmēr ziņojiet par abiem, nekad vienu kā otra aizstājēju.
- **Mazas, nereprezentatīvas izlases, kas uzrādītas ar viltus precizitāti**: apmierinātības vērtējums no dažiem simtiem pašatlasītu respondentu, uzrādīts ar vienu decimāldaļu, norāda uz pārliecību, ko izlases lielums nevar atbalstīt.
- **Demogrāfiskās sadalīšanas ignorēšana**: nacionālie uzticības un apmierinātības skaitļi, kas nav sadalīti pēc vecuma, ienākumiem, invaliditātes vai digitālās piekļuves, var maskēt krasi atšķirīgu pieredzi dažādās grupās — OECD pašas Trust in Government publikācijas to skaidri sadala.

## Avoti

- OECD, "Trust in Government." <https://www.oecd.org/en/topics/trust-in-government.html>
- UK Cabinet Office, "Civil Service People Survey" results.
  <https://www.gov.uk/government/collections/civil-service-people-survey-results>
- GOV.UK Service Manual, "Measuring Success." <https://www.gov.uk/service-manual/measuring-success>
