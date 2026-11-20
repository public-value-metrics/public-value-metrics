# Scorecard for offentlig verdi

Scorecardet for offentlig verdi tilpasser Robert Kaplan og David Nortons balanserte målekort (balanced scorecard) fra 1992 – bygget for bedrifter som optimaliserer fortjeneste på tvers av perspektivene finans, kunde, interne prosesser og læring og vekst – til organisasjoner der bunnlinjen er et oppdrag, ikke en margin. Det tvinger en offentlig virksomhet til å rapportere ytelse på tvers av flere uforenlige dimensjoner samtidig, i stedet for å presse alt ned i ett tall som skjuler avveiningene.

## Hvorfor det er viktig

Kaplan og Nortons opprinnelige argument i Harvard Business Review var at et enkelt finansielt mål er en etterslepende indikator som ikke sier noe om *hvorfor* resultatene vil endre seg neste kvartal. I privat sektor var løsningen fire koblede perspektiver. I forvaltningen gir Mark Moores «strategiske trekant» (fra *Creating Public Value*, 1995) den tilsvarende strukturen: en tjeneste må samtidig levere **offentlig verdi** (oppdragsutfallet), opprettholde **legitimitet og støtte** (politisk og offentlig oppslutning) og være **operasjonelt gjennomførbar** (leverbar med de ressursene og den kapasiteten som faktisk finnes). Paul Nivens *Balanced Scorecard: Step-by-Step for Government and Nonprofit Agencies* (2003) er praktikerens håndbok for å oversette Kaplan og Nortons fire bokser til denne trekanten – typisk ved å gi «finans» nytt navn til «forvaltning av ressurser», plassere «oppdraget» øverst i stedet for «aksjonærverdi» nederst, og behandle kunde- og interessentperspektivene som likeverdige i stedet for underordnet fortjeneste. Grunnen til at dette betyr noe for et leveringsteam, er at en offentlig digital tjeneste som bare vurderes etter et finansielt eller effektivitetsmål (for eksempel kostnad per transaksjon) systematisk vil underinvestere i legitimitets- og utfallsdimensjonene som det finansielle målet ikke kan se.

## Regnestykket

Scorecardet for offentlig verdi er et rammeverk, ikke en formel, men strukturen er fast og verdt å gjengi nøyaktig:

```
Perspektiv            Spørsmål i offentlig sektor                  Eksempelindikator
--------------------------------------------------------------------------------
Oppdrag / utfall       Oppnår vi den offentlige verdien vi          Utfallsmål på befolkningsnivå
                       finnes for å skape?                          (se outcomes-vs-outputs)
Forvaltning av         Bruker vi offentlige penger effektivt        Kostnad per utfall,
  ressurser            og innenfor autoriserte rammer?              budsjettavvik
Kunde / bruker         Kan brukere og innbyggere få tilgang til     Gjennomføringsgrad, tilfredshet
                       og nyte godt av tjenesten?
Legitimitet / støtte   Støtter politiske oppdragsgivere,            Tillitsmål, revisjonsfunn,
                       kontrollorganer og offentligheten oss        klager tatt til følge
                       fortsatt?
Intern prosess /       Har vi kapasitet og prosess til å            Gjennomtrekk av ansatte,
  læring               fortsette å forbedre oss?                    syklustid, alder på restanser

Et forsvarlig scorecard rapporterer 3–5 indikatorer per perspektiv, valgt slik at
intet enkelt perspektiv kan manipuleres uten at skaden viser seg i et annet.
```

## Utregnet eksempel

**Kommunal avdeling for omsorgstjenester for voksne**: et scorecard for en tjeneste for egenmestring (kortvarig støtte som hjelper mennesker å gjenvinne selvstendighet etter et sykehusopphold) rapporterer:

```
Oppdrag:       68 % av tjenestemottakerne trenger ikke lenger løpende omsorg etter 6 uker (mål 65 %)
Forvaltning:   kostnad per gjennomført egenmestringsforløp = £1 850 (budsjettforutsetning £2 000)
Kunde:         brukertilfredshet 82 %, gjennomsnittlig ventetid til tjenestestart 4,1 dager
Legitimitet:   3 klager tatt til følge per 1 000 forløp; rådet for vern av voksne vurderer
               tjenesten som «god»
Prosess:       vakansandel blant ansatte 14 %, gjennomsnittlig saksmengde 23 (trygg øvre grense: 25)
```

Lest isolert ser oppdrags- og forvaltningstallene ut som en rett fram suksesshistorie: under budsjett og over utfallsmålet. Lest sammen med prosessraden viser en vakansandel på 14 mot en saksmengdegrense på 25 at det gode utfallet kjøpes ved å drive nær usikre bemanningsnivåer – et varsel oppdragstallet alene aldri ville avdekket, og nøyaktig den feilmodusen et nøkkeltall fra ett enkelt perspektiv (se [nøkkeltall i offentlig sektor](../nøkkeltall-i-offentlig-sektor/)) innbyr til.

## Sammenheng med programvareutvikling

For et team som bygger et internt eller offentlig dashbord er scorecardet et direkte argument mot en enkelt «helseskår»-widget: bygg ett panel per perspektiv, og stå imot produktpress om å slå dem sammen til et trafikklys, fordi sammenslåingen er nøyaktig der avveiningsinformasjonen ødelegges. Det passer også rent inn i OKR-strukturer i produktteam: et OKR for oppdraget uten et paret OKR for forvaltning eller prosess gjenskaper den feilmodusen med ett enkelt mål som Kaplan og Norton skrev mot i 1992. Se [offentlig verdi](../offentlig-verdi/) for Moores underliggende teori om hva «oppdrags»-boksen egentlig bør inneholde, og [trust-and-legitimacy-metrics](../mål-på-tillit-og-legitimitet/) for hvordan legitimitetsperspektivet kan fylles med reelle indikatorer med kilder, i stedet for en proxy ingen kan forsvare.

## Fallgruver

- **Å slå scorecardet sammen til én skår**: å beregne gjennomsnitt av fire perspektiver til ett tall gjeninnfører nettopp det problemet – en dårlig legitimitetsskår skjult av en god forvaltningsskår – som scorecardet finnes for å hindre.
- **Å kopiere «finans»-perspektivet fra privat sektor uendret**: en offentlig virksomhets forvaltningsperspektiv handler om å holde seg innenfor autoriserte, ofte øremerkede, budsjetter, ikke om å maksimere inntekter – Nivens omdøping er ikke kosmetisk.
- **Å velge indikatorer som teamet som eier scorecardet ensidig kan flytte**: en legitimitetsindikator hentet fra samme team den vurderer (egenrapportert klagebehandling, for eksempel) er ikke uavhengig evidens.
- **Å bygge scorecardet én gang og aldri revidere vekter eller indikatorer**: Kaplan og Norton tenkte seg en årlig strategigjennomgang; et scorecard som står fastfrosset i årevis driver bort fra oppdraget det ble bygget for å følge.

## Kilder

- Robert S. Kaplan and David P. Norton, "The Balanced Scorecard: Measures That Drive Performance,"
  *Harvard Business Review*, January–February 1992.
- Paul R. Niven, *Balanced Scorecard: Step-by-Step for Government and Nonprofit Agencies*, Wiley,
  2003.
- Mark H. Moore, *Creating Public Value: Strategic Management in Government*, Harvard University
  Press, 1995.
