# Utfallsbasert ansvarliggjøring

Utfallsbasert ansvarliggjøring (Outcomes-Based Accountability, OBA), også kalt resultatbasert ansvarliggjøring (Results-Based Accountability, RBA), er Mark Friedmans rammeverk for å skille to spørsmål som offentlig rapportering vanemessig blander sammen: «går det bra med befolkningen?» (ansvarliggjøring på befolkningsnivå) og «går det bra med dette konkrete programmet?» (ansvarliggjøring for ytelse). Å blande de to er, slik Friedman forteller det, den vanligste grunnen til at veldrevne programmer får skylden for befolkningstrender de aldri hadde makt til å endre.

## Hvorfor det er viktig

Friedman la fram rammeverket i *Trying Hard Is Not Good Enough* (2005), og argumenterte for at mesteparten av offentlig rapportering enten drukner beslutningstakere i statistikk på befolkningsnivå som ingen enkelt etat kontrollerer (tenåringsgraviditeter, arbeidsledighet, forventet levealder) eller drukner dem i aktivitetstall på programnivå (klienter behandlet, henvisninger gjort) som ikke sier noe om hvorvidt noens liv ble bedre. RBAs bidrag er et lite, disiplinert vokabular som holder de to fra hverandre: befolkningsresultater (velferdsforhold for en hel befolkning, som «barn blir født friske») tilhører ingen enkelt etat og krever at mange partnere beveger seg sammen; ytelsesmål (hvor godt et konkret program tjener sine konkrete klienter) tilhører én etat og bør bare vurderes mot det etaten faktisk kan påvirke. Friedmans «tre ytelsesspørsmål» – hvor mye gjorde vi, hvor godt gjorde vi det, og har noen fått det bedre? – er nå innarbeidet i kontraktsinngåelse for velferdstjenester i amerikanske delstater og fylker, og brukes, via det RBA-baserte rådgivnings- og verktøyselskapet Clear Impact, bredt i britisk og Commonwealth-basert bestilling i lokalforvaltningen. Det praktiske spørsmålet er kontraktsmessig: et boligprogram bør ikke miste finansieringen fordi byens bostedsløshet økte av makroøkonomiske årsaker utenfor dets rekkevidde, men det bør absolutt miste den hvis dets egne klienter ikke får bolig.

## Regnestykket

```
Ansvarliggjøring på befolkningsnivå (det «store bildet» et lokalsamfunn, en region eller en nasjon deler):
  Resultat      — en velferdstilstand (f.eks. «innbyggerne har økonomisk trygghet»)
  Indikator(er) — et mål på tilstanden (f.eks. arbeidsledighet, median husholdningsinntekt)
  → ingen enkelt program eier indikatoren; endring krever mange bidragsytere

Ansvarliggjøring for ytelse (det ett program er ansvarlig for):
  Hvor mye gjorde vi?       — aktivitetsvolum (klienter betjent, enheter levert)
  Hvor godt gjorde vi det?  — kvalitet/effektivitet (% som fullfører programmet, kostnad per klient)
  Har noen fått det bedre?  — utfallet som betyr noe (% i arbeid 6 måneder etter
                              programmet, før/etter eller mot en sammenligningsgruppe)

Et program vurderes etter det tredje ytelsesspørsmålet, aldri direkte etter
befolkningsindikatoren, med mindre omfanget og utformingen rimeligvis kunne flytte den alene.
```

## Utregnet eksempel

**Byfinansiert program for sysselsettingsstøtte**, 500 deltakere/år, kontraktfestet av en kommune under et ytelsesrammeverk i RBA-stil:

```
Befolkningsindikator (kontekst, ikke programmets resultatkort):
  Byens arbeidsledighet: 6,2 % (opp fra 5,8 % året før, drevet av en fabrikknedleggelse
  utenfor programmets kontroll)

Ytelsesmål (programmets faktiske ansvar):
  Hvor mye:      500 deltakere påmeldt (mål 480) — oppnådd
  Hvor godt:     78 % gjennomføringsgrad; kostnad per gjennomfører = £340 000 / 390 gjennomførere ≈ £872
  Bedre stilt:   av 390 gjennomførere er 260 i varig arbeid etter 6 måneder = 66,7 %
                 mot 41 % i en matchet sammenligningsgruppe (se counterfactual-analysis)
```

Med en lesning etter ansvarliggjøring på befolkningsnivå ser programmet ut til å mislykkes – byens arbeidsledighet økte mens det pågikk. Med RBAs lesning etter ansvarliggjøring for ytelse lykkes programmet: det nådde volummålet sitt, holdt kvaliteten stabil og skapte et sysselsettingsutfall 25,7 prosentpoeng over en matchet sammenligningsgruppe, mens befolkningsindikatoren beveget seg av årsaker (en fabrikknedleggelse) helt utenfor programmets kontroll.

## Sammenheng med programvareutvikling

RBA tilsvarer direkte et kjent SRE-skille: befolkningsindikatorer er som nordstjernemål på forretningsnivå som ikke noe enkelt utviklingsteam eier fra ende til annen (selskapets omsetning, markedsandel), mens ytelsesmål er som et teams egne SLO-er – det teamets designvalg faktisk flytter. Et dashbord som rapporterer begge uten å merke hva som er hva, innbyr til akkurat den feiltilskrivingen RBA ble bygget for å hindre: en vakthavende utvikler som får skylden for et mål et avhengig team kontrollerer. Når du bestiller eller bygger rapporteringsverktøy for utfallskontrakter, bygg triaden «hvor mye / hvor godt / bedre stilt» som førsteklasses, separat filtrerbare felt i stedet for ett blandet nøkkeltall – det er den samme disiplinen som å skille ledende og etterslepende indikatorer i [nøkkeltall i offentlig sektor](../nøkkeltall-i-offentlig-sektor/). RBA er også ansvarlighetslogikken under [resultatbasert betaling og sosiale effektobligasjoner](../resultatbasert-betaling-og-sosiale-effektobligasjoner/): en kontrakt med resultatbasert betaling kan rimelig bare betale for ytelsesmålet «bedre stilt», aldri for befolkningsindikatoren, med mindre tiltaket genuint er den dominerende driveren av den.

## Fallgruver

- **Å belønne eller straffe et program etter en befolkningsindikator det ikke kan kontrollere**: dette er den ene feilen RBA finnes for å hindre; spor alltid om programmet er en stor eller liten bidragsyter til befolkningsresultatet før du knytter konsekvenser til det.
- **Å rapportere «hvor mye» som om det var «bedre stilt»**: aktivitetstall (klienter betjent) er de enkleste dataene å samle inn og de minst informative; krev at spørsmålet «har noen fått det bedre» besvares med reelle utfallsdata, helst mot et kontrafaktisk scenario (se [kontrafaktisk analyse](../kontrafaktisk-analyse/)).
- **Å behandle RBA-indikatorer som faste for alltid**: Friedmans metode er uttrykkelig iterativ – en syklus av «data, historie, hva virker, handlingsplan» – ikke en engangsøvelse i utforming av resultatkort.
- **Ingen sammenligningsgruppe for «bedre stilt»**: en endring fra før til etter uten kontrafaktisk scenario blander programvirkningen sammen med trenden befolkningen uansett ville ha vist.

## Kilder

- Mark Friedman, *Trying Hard Is Not Good Enough: How to Produce Measurable Improvements for
  Customers and Communities*, Trafford Publishing, 2005.
- Clear Impact, "What is Results-Based Accountability?"
  <https://clearimpact.com/results-based-accountability/>
