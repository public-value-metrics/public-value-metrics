# Rapportering av tilskuddsresultater (IRIS+)

Rapportering av tilskuddsresultater er praksisen der tilskuddsmottakere rapporterer standardiserte, sammenlignbare utfallsmål tilbake til finansiørene – i motsetning til at hver finansiør finner opp sin egen skreddersydde rapporteringsmal. IRIS+, vedlikeholdt av Global Impact Investing Network (GIIN), er den mest utbredte slike standarden: en katalog med forhåndsdefinerte sosiale, miljømessige og finansielle resultatmål som effektinvestorer og stadig oftere tilskuddsgivende stiftelser krever eller anbefaler at mottakerne bruker.

## Hvorfor det er viktig

Før standardisert rapportering ba hver stiftelse mottakerne om et ulikt sett indikatorer i et ulikt format, og en mellomstor veldedig organisasjon med ti finansiører kunne drive ti parallelle rapporteringsprosesser for overlappende arbeid – en veldokumentert driver av rapporteringsbyrden som standardisering av tilskuddsresultater finnes for å redusere. IRIS+ løser dette ved å gi finansiører og mottakere et felles ordforråd: Kjernemålsett (Core Metrics Sets) gruppert etter tema (f.eks. rimelige boliger, tilgang til ren energi, finansiell inkludering), der hvert mål er definert presist nok til at «arbeidsplasser skapt» eller «husholdninger betjent» betyr det samme uansett hvem som rapporterer, og samordnet med FNs bærekraftsmål, slik at en finansiør kan aggregere data fra mottakernivå til en porteføljefortelling om bærekraftsmålene. GIIN opplyser at IRIS-målene brukes av omtrent halvparten av effektinvestorene og av det store flertallet av fondsforvaltere, banker og utviklingsfinansieringsinstitusjoner som er aktive på feltet.

Standardiseringen betyr mest der den møter [utfall mot leveranser](../utfall-versus-leveranser/): IRIS+ flytter rapporteringen mot definerte utfalls- og effektmål i stedet for det en mottakers eksisterende saksbehandlingssystem tilfeldigvis logger, noe som er nøyaktig gapet [kostnad per utfall](../kostnad-per-utfall/) mot [kostnad per mottaker](../kostnad-per-mottaker/) beskriver.

## Regnestykket

Rapportering av tilskuddsresultater er et rammeverk og en prosess, ikke en formel:

```
1. Finansiøren velger et kjernemålsett som er relevant for tilskuddets tema
   (f.eks. IRIS+ «Financial Inclusion» eller «Sustainable Agriculture»)
2. Hvert mål har en fast definisjon, enhet og beregningsmetode
   publisert av GIIN – ikke funnet opp per finansiør
3. Mottakeren rapporterer mot de samme måldefinisjonene til alle
   sine finansiører som bruker standarden, og kutter dobbeltarbeid
4. Finansiøren aggregerer mål fra mottakernivå til rapportering på porteføljenivå,
   sammenlignbart fra år til år og mellom mottakere som bruker samme mål
```

Effektiviseringsgevinsten er kombinatorisk: Å standardisere N finansiører × M mottakere på ett felles ordforråd gjør N×M skreddersydde rapporteringsforhold om til omtrent N+M koblinger mot én standard.

## Utregnet eksempel

**En mottaker med tre finansiører, før standardisering**: rapporterer «personer betjent» til Finansiør 1 med en definisjon basert på antall personer, «mottakere nådd» til Finansiør 2 med en husholdningsdefinisjon, og «personer berørt» til Finansiør 3 med en definisjon basert på tjenesteforløp (slik at én person som kommer to ganger telles to ganger). Tre rapporter, tre tall, ingen sammenlignbare, og ingen sammenlignbare med andre mottakeres tall selv innenfor samme finansiørs portefølje.

**Den samme mottakeren under IRIS+**: rapporterer mot et definert IRIS+-mål for antall personer nådd, sammen med et definert utfallsmål fra det relevante kjernemålsettet, med GIINs publiserte beregningsmetodikk for begge. Alle tre finansiørene får nå det samme tallet, beregnet på samme måte, og kan sammenligne denne mottakerens kostnad per IRIS+-definert enhet med andre mottakere i sin portefølje med det identiske målet – tilsvarende, i skala av rapporteringsinfrastruktur, å ha en felles [database over enhetskostnader](../enhetskostnadsdatabaser/).

## Sammenheng med programvareutvikling

Plattformer for tilskuddsforvaltning bør behandle IRIS+-målidentifikatorer som en fremmednøkkel, ikke fritekst: Å lagre den publiserte målkoden sammen med en mottakers rapporterte verdi (i stedet for et lokalt oppfunnet felt kalt «mottakere») er det som gjør aggregering på tvers av finansiører og porteføljer mulig senere uten et datarenseprosjekt. Der en plattform må støtte finansiører som ikke har tatt i bruk IRIS+, er den pragmatiske løsningen å la et lokalt mål kobles til den nærmeste IRIS+-definisjonen i stedet for å tvinge alle finansiører over på standarden umiddelbart – sammenlignbarheten bedres gradvis etter hvert som mer av grafen kobles til delte identifikatorer. Se det beslektede temaet [kostnad per utfall](../kostnad-per-utfall/) for hva de rapporterte tallene bør brukes til å beregne når de er samlet inn.

## Fallgruver

- **Å behandle bruk av IRIS+ som automatisk sammenlignbarhet.** To mottakere kan begge rapportere mot samme IRIS+-mål og likevel ikke være sammenlignbare hvis datakvaliteten eller de kontrafaktiske antakelsene deres er ulike – standarden fastsetter definisjoner, ikke målingens stringens.
- **Finansiøroppfunne «IRIS-tilpassede» mål.** Et mål som bare er inspirert av IRIS+-språk, men ikke den faktiske publiserte definisjonen, gjeninnfører den fragmenteringen standarden finnes for å løse.
- **Rapporteringstrøtthet fra overdreven utvelgelse.** Å kreve at en mottaker rapporterer mot et helt kjernemålsett når bare to–tre mål er relevante for beslutninger, gjenskaper byrdeproblemet i en standardisert innpakning.
- **Ingen utfallsmål i det hele tatt.** IRIS+ inneholder mange rene leveransemål (f.eks. antall personer betjent). Å velge bare dem, og ingen av målene på utfallsnivå, gir rapportering i form av [kostnad per mottaker](../kostnad-per-mottaker/) under merkelappen utfallsrapportering.

## Kilder

- GIIN, IRIS+ system. <https://iris.thegiin.org/>
- GIIN, IRIS+ Catalog of Metrics. <https://iris.thegiin.org/metrics/>
- GIIN, About IRIS+. <https://iris.thegiin.org/about/>
