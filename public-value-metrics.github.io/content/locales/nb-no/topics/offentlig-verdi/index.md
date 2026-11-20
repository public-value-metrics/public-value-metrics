# Offentlig verdi

Offentlig verdi er den verdien en offentlig eller sosial organisasjon skaper for innbyggerne kollektivt – ikke bare leveransene den produserer eller pengene den bruker, men om samfunnet har det bedre fordi organisasjonen finnes og handlet slik den gjorde. Mark Moores «strategiske trekant» fra 1995 er standardtesten: et offentlig tiltak er bare berettiget når det er *legitimt og støttet*, *substansielt verdifullt* og *operasjonelt leverbart*, alle tre samtidig.

## Hvorfor det er viktig

Verdi i privat sektor er forholdsvis lett å prise: inntekt minus kostnad, avgjort av kunder som kan gå sin vei. Offentlig verdi har ikke noe tilsvarende markedssignal. En kriminalomsorg, en skatteetat og et barnevernsteam produserer alle ting innbyggerne ikke bare kan avstå fra å kjøpe, og «kunden» (skattebetaleren, den domfelte, barnet) er ofte ikke den samme personen som den politiske oppdragsgiveren som autoriserer budsjettet. Moores *Creating Public Value: Strategic Management in Government* (Harvard University Press, 1995) leverer den manglende disiplinen: en leder bør kunne si (1) hvilken offentlig verdi tiltaket skaper, (2) hvor legitimiteten og finansieringen til å forfølge det kommer fra – en statsråd, et kommunestyre, et mandat, et tilskudd – og (3) om organisasjonen faktisk kan levere det med de menneskene, den teknologien og de prosessene den har for hånden. Et program som bare skårer godt på ett eller to ben av trekanten er ikke berettiget ennå, uansett hvor velment det er.

Dette er praktisk viktig fordi de fleste programvaresvikt i offentlig sektor ikke er teknologisvikt. Et system kan være teknisk fremragende og operasjonelt leverbart og likevel mislykkes fordi ingen i det legitimerende miljøet – statsråder, kontrollorganer, offentligheten – egentlig ønsket det systemet optimaliserer for. Universal Credit-tjenesten og NHS National Programme for IT trekkes begge fram i britisk litteratur om offentlig forvaltning som tilfeller der de operasjonelle og legitimitetsmessige bena i trekanten var ute av takt med oppdragsbenet.

## Regnestykket

Offentlig verdi er et rammeverk, ikke en formel, men det strukturerer ellers vage investeringscaser i tre etterprøvbare spørsmål:

```
Test med den strategiske trekanten — gå videre bare hvis alle tre holder:

1. Legitimitet og støtte: Hvem har autorisert dette, og støtter det
   autoriserende miljøet (lovgiver, statsråd, kommunestyre, styre, opinion)
   det fortsatt etter hvert som ressurser forpliktes?

2. Offentlig verdi: Hvilket konkret, beskrivbart gode skaper dette for
   innbyggerne eller samfunnet — trygghet, helse, muligheter, tillit,
   rettferdighet — og for hvem?

3. Operasjonell kapasitet: Kan organisasjonen faktisk levere det med
   nåværende ansatte, teknologi, partnere og juridisk myndighet — eller en
   troverdig plan for å skaffe dem?
```

Et svakt initiativ svikter vanligvis på minst ett ben: teknisk leverbart, men uten mandat (en datadelingspilot ingen har godkjent); populært, men uleverbart (en lovet digital tjeneste uten utviklingskapasitet); eller autorisert og leverbart, men verdiløst (et dashbord ingen bruker).

## Utregnet eksempel

**Kommune**: et digitalt team i en kommune foreslår et AI-basert triageringsverktøy for søknader om boligstøtte.

- *Legitimitet*: kommunens formannskap har godkjent en digital-først-strategi, men de folkevalgte med ansvar for sosial trygghet har ikke godkjent automatiserte avgjørelser spesifikt – et gap, ikke grønt lys.
- *Offentlig verdi*: raskere behandling (påstått gevinst: 10 dager til 2 dager) er reell verdi bare hvis søkere ikke avslås feilaktig; verdipåstanden må inkludere nøyaktighet, ikke bare hastighet.
- *Operasjonell kapasitet*: kommunen har én dataforsker og ingen prosess for modellovervåking, så den påståtte behandlingstiden på 2 dager er for øyeblikket ikke leverbar med den oppgitte feilraten.

To av tre ben svikter. Moores rammeverk sier: ikke gå videre som avgrenset – sikre først uttrykkelig autorisasjon for automatiserte avgjørelser og bygg overvåkingskapasitet, ellers er den «offentlige verdien» som hevdes i forretningscasen fiktiv.

**Sentralforvaltningen**: en skatteetats nettbaserte innleveringstjeneste har sterk legitimitet (lovfestet mandat) og sterk operasjonell kapasitet (et eksisterende team leverer pålitelig), men svak offentlig verdi hvis bruken er lav fordi de digitalt ekskluderte – se [digital inkludering](../digital-inkludering/) – skyves over i en kanal de ikke kan bruke. Trekanten avdekker det et dashbord som bare måler leveranse ville skjult.

## Sammenheng med programvareutvikling

Offentlig verdi er paraplybegrepet hele dette depotet hører under: [valuta for pengene](../verdi-for-pengene/) gir test av økonomi/effektivitet/virkning for om ressursene ble godt brukt; [alternativkostnad i offentlige utgifter](../alternativkostnad-i-offentlige-utgifter/) priser hva pengene ellers kunne gjort; og [addisjonalitet og dødvekt](../addisjonalitet-og-dødvekt/), [fortrenging og tilskriving](../fortrengning-og-attribusjon/) og [kontrafaktisk analyse](../kontrafaktisk-analyse/) tester sammen om den påståtte verdien er reell snarere enn antatt. For utviklere er den strategiske trekanten en nyttig pre-mortem for enhver produktbeslutning i offentlig sektor:

- Før en funksjon avgrenses, spør hvem som autoriserte den og om autorisasjonen fortsatt gjelder – en funksjon bygget for en statsråd som siden har gått videre, kan stille og rolig ha mistet sitt legitimitetsben.
- Behandle «kan vi bygge det» og «bør vi bygge det» som genuint atskilte spørsmål; utviklingskapasitet svarer bare på det tredje benet av trekanten.
- Kravdokumenter for offentlige tjenester bør angi påstanden om offentlig verdi eksplisitt, ikke bare brukerhistorien, fordi brukerverdi og offentlig verdi ikke alltid er det samme (se [utfall versus leveranser](../utfall-versus-leveranser/)).

## Fallgruver

- **Å behandle operasjonell kapasitet som tilstrekkelig begrunnelse.** «Vi kan bygge det» svarer bare på ett ben av trekanten; team med sterk leveringsevne leverer rutinemessig ting ingen med autoritet ønsket, og som ikke skaper noe beskrivbart offentlig gode.
- **Å blande sammen legitimitet og lovlighet.** Et program kan være lovlig og likevel mangle den politiske og offentlige støtten som trengs for å bære det gjennom en vanskelig leveransefase; juridisk dekning er ikke det samme som et mandat.
- **Å anta at offentlig verdi er det bestillende departement sier den er.** Moores modell krever at verdipåstanden kan testes mot innbyggernes faktiske interesser, ikke bare hevdes av finansiøren – ellers kollapser rammeverket til selvsertifisering.

## Kilder

- Moore MH. *Creating Public Value: Strategic Management in Government*. Harvard University Press,
  1995.
- Moore MH. *Recognizing Public Value*. Harvard University Press, 2013.
- Benington J, Moore MH (eds). *Public Value: Theory and Practice*. Palgrave Macmillan, 2011.
- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation" (2022).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
