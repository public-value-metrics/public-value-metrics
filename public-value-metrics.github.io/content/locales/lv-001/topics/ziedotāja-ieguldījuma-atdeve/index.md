# Ziedotāja ieguldījuma atdeve

Ziedotāja ieguldījuma atdeve ir tas, ko konkrēta ziedotāja mārciņa patiesībā nopērk iznākumos — nevis labdarības organizācijas darbības rādītāji un ne arī organizācijas atdeve no tās kopējā budžeta. Tā pārformulē ieguldījuma atdevi (ROI) no organizācijas skatpunkta (cik efektīvi mēs strādājam) uz ziedotāja skatpunktu (ko maina mans robežieguldījums), un šie divi skaitļi ierasti un kļūdaini tiek uzskatīti par vienu un to pašu.

## Kāpēc tas ir svarīgi

Labdarības organizācijas pašas “ROI”, ciktāl šo frāzi vispār lieto, parasti raksturo kaut ko līdzīgu [izmaksām uz vienu labuma guvēju](../izmaksas-uz-saņēmēju/) vai [labdarības organizāciju pieskaitāmo izmaksu attiecībai](../labdarības-organizāciju-administratīvo-izmaksu-īpatsvars/) — organizācijas efektivitātes rādītājiem. Ziedotāja ROI ir pavisam cits jautājums: ņemot vērā, ka šai organizācijai jau ir citi ienākumi, ko *šī* ziedotāja nauda pievieno uz robežas? Ja labdarības organizācija īstenotu to pašu programmu ar konkrētu £10 000 dāvinājumu vai bez tā — jo tai ir pietiekamas rezerves vai jo cits finansētājs aizpildītu trūkumu —, šī dāvinājuma ziedotāja ROI ir tuvu nullei, lai cik labi izskatītos organizācijas kopējā pieskaitāmo izmaksu attiecība vai izmaksas uz iznākumu.

Tas ir tas pats papildinātības jautājums, kas ir pamatā [vērtības par naudu](../vērtība-par-naudu/) novērtējumam Apvienotās Karalistes publiskajos izdevumos un [papildinātībai un bezpapildu efektam](../papildinātība-un-inerces-efekts/) programmu izvērtēšanā: radīto vērtību finansētājam var ieskaitīt tikai tiktāl, ciktāl tā nebūtu notikusi tāpat. Lielākās ziedotāju konsultatīvās platformas un efektīvās dāvināšanas organizācijas (Giving What We Can, GiveWell) savus ieteikumus būvē tieši uz šīs atšķirības, jautājot nevis “vai šī ir laba labdarības organizācija”, bet “vai šai organizācijai ir neaizpildīta vieta papildu finansējumam, lai mans dāvinājums būtu papildinošs”.

## Matemātika

```
Ziedotāja ROI ≠ Labdarības organizācijas darbības efektivitāte

Ziedotāja ROI  ≈  (Iznākums, kas sasniegts ar dāvinājumu) − (Iznākums, kas būtu
                  iestājies bez tā, t. i., kontrafaktiskais scenārijs)
                ─────────────────────────────────────────────────
                                 Dāvinājuma apmērs

Galvenie ievaddati:
  - Vieta papildu finansējumam (vai organizāciju uz robežas ierobežo finansējums?)
  - Aizstāšana (funging) (vai cits ziedotājs būtu aizpildījis trūkumu?)
  - Robežizmaksu efektivitāte konkrētajā finansējuma līmenī (izmaksas bieži
    pieaug, kad iejaukšanās mērogojas pāri vieglāk sasniedzamajai iedzīvotāju daļai)
```

Skatiet [efektīvā altruisma izmaksu efektivitāti](../efektīvā-altruisma-izmaksu-efektivitāte/), lai uzzinātu, kā GiveWell praktiski īsteno jautājumu par “vietu papildu finansējumam”, un [kontrafaktiskā scenārija analīzi](../kontrfaktiskā-analīze/) vispārīgajai metodei.

## Aprēķina piemērs

Ziedotājs izvēlas starp diviem £5 000 dāvinājumiem:

- **C labdarības organizācija**: tai ir pilnībā finansēta pamatprogramma ar £2 miljonu rezervēm un finansētāju rinda; papildu £5 000 visticamāk tiks pievienoti rezervēm vai zemākas prioritātes darbībai. Aplēstais ziedotāja papildu iznākums: minimāls — nauda acīmredzami nemaina to, kas notiek.
- **D labdarības organizācija**: maza, uz pierādījumiem balstīta programma, kas publiski paziņojusi, ka nākamajā ceturksnī būs spiesta atteikt 200 cilvēkiem, ja nesaņems papildu £50 000, un kas jau savākusi £42 000 no tiem. Papildu £5 000 ļoti droši finansēs reālu papildu piegādi — teiksim, 20 papildu cilvēku apkalpošanu pie organizācijas pašas norādītajām izmaksām £250 uz labuma guvēju.

Tāds pats dāvinājuma apmērs, tas pats ziedotājs, krasi atšķirīga ziedotāja ROI — nevis tāpēc, ka C ir sliktāka organizācija (kopumā tai var būt labāki izmaksu uz iznākumu rādītāji), bet tāpēc, ka tās robežfinansējuma trūkums jau ir aizvērts.

## Saikne ar programmatūras inženieriju

Ziedotāju platformas un dāvināšanas ieteikumu rīki pārāk bieži parāda tikai organizācijas līmeņa efektivitātes rādītājus (pieskaitāmo izmaksu attiecību, izmaksas uz labuma guvēju), jo tos labdarības organizācijas publicē gada pārskatos un tos vieglāk iekļaut salīdzināmajā tabulā. Lai ziedotāja ROI attēlotu pareizi, vajadzīgs cits, grūtāk iegūstams datu punkts: labdarības organizācijas norādītais pašreizējais finansējuma trūkums jeb “vieta papildu finansējumam”, kas mainās visa gada garumā un reti ir strukturēti dati. Platformām, kas vēlas atbalstīt patiesu ziedotāja ROI argumentāciju, vajadzīga vai nu tieša datu plūsma no finansējuma trūkuma atklājumiem (kādu GiveWell manuāli uztur savām ieteiktajām organizācijām), vai skaidrs atrunas teksts, ka salīdzināmā tabula rāda organizatorisko efektivitāti, nevis ziedotāja papildinātību. Skatiet [labdarības organizāciju pieskaitāmo izmaksu attiecību](../labdarības-organizāciju-administratīvo-izmaksu-īpatsvars/) — rādītāju, ar kuru ziedotāja ROI visbiežāk un kļūdaini tiek jaukts.

## Biežākās kļūdas

- **Labdarības organizācijas efektivitātes jaukšana ar ziedotāja papildinātību.** Labi vadīta organizācija ar zemām pieskaitāmajām izmaksām joprojām var būt ar gandrīz nulles robežziedotāja ROI, ja to neierobežo finansējums.
- **Aizstāšanas (funging) ignorēšana.** Ja liels institucionāls finansētājs trūkumu būtu segis tāpat, atsevišķa ziedotāja dāvinājums aizstāj šī finansētāja naudu, nevis pievieno jaunu piegādi.
- **Pieņēmums par lineāru izmaksu efektivitāti mērogā.** Vislētāk sasniedzamos labuma guvējus bieži apkalpo pirmos; robežizmaksas uz iznākumu bieži pieaug, programmai paplašinoties, tāpēc nākamās mārciņas ROI nav tāds pats kā jau iztērētās vidējās mārciņas ROI.
- **Nav norādīts finansējuma trūkums.** Labdarības organizācija vai platforma, kas nevar pateikt, ko finansēs nākamie £X, nevar pamatot patiesu ziedotāja ROI apgalvojumu, tikai vidējo izmaksu apgalvojumu.

## Avoti

- Giving What We Can, on funding gaps and cost-effectiveness in donation decisions. <https://www.givingwhatwecan.org/>
- GiveWell, "Our criteria" (room for more funding as an explicit criterion). <https://www.givewell.org/how-we-work/our-criteria>
- HM Treasury, the Green Book: appraisal and evaluation in central government. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-governent>
