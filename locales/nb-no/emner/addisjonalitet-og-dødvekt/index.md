# Addisjonalitet og dødvekt

Addisjonalitet spør om et tiltak har ført til et utfall som ellers ikke ville ha skjedd. Dødvekt er det speilvendte begrepet: den andelen av et utfall som ville ha inntruffet uansett, selv uten programmet, tilskuddet eller subsidien. Nesten alle påstander om effekt fra offentlige programmer eller veldedige organisasjoner overdriver virkningen helt til dødvekten er trukket fra. Derfor behandler britiske evalueringsveiledninger dette som den første og viktigste justeringen av ethvert hovedtall.

## Hvorfor det er viktig

«Vi støttet 500 bedrifter til å vokse» høres ut som en prestasjon. Men hvis 300 av bedriftene ville ha vokst uansett – fordi lokaløkonomien var i bedring, fordi de hadde andre finansieringskilder, eller fordi de allerede var inne i en vekstbane før programmet startet – er programmets reelle addisjonelle bidrag 200, ikke 500. HM Treasurys Magenta Book og den veletablerte «Additionality Guide» fra HM Treasury/BIS (opprinnelig utviklet for regionale utviklings- og byfornyelsesprogrammer og siden mye brukt i britisk offentlig evaluering) gjør dødvekt til første trinn i den standardiserte rekkefølgen for netto effekt: bruttoeffekt minus dødvekt, minus fortrengning, minus lekkasje, justert for multiplikatoreffekter, gir netto addisjonell effekt. Å hoppe over dette trinnet er den vanligste enkeltårsaken til at påstander om effekt i offentlig og sosial sektor blir oppblåst, bevisst eller ikke. Et tilskuddsprogram som bare måler brutto utfall for deltakerne, uten sammenligningsgruppe, kan ikke skille sin egen effekt fra det som ville ha skjedd uansett.

Dødvekt er ikke en fast prosentandel. Den avhenger helt av det kontrafaktiske scenarioet for den aktuelle populasjonen og det aktuelle tiltaket (se [kontrafaktisk analyse](../kontrafaktisk-analyse/)). Evalueringer av regional utvikling under de tidligere Regional Development Agencies fant ofte dødvektsrater på 20–60 % avhengig av typen bedriftsstøtte. Derfor oppgir troverdige programevalueringer et dødvektsjustert intervall i stedet for ett enkelt antatt tall. Det er også grunnen til at finansiører som National Lottery Community Fund og Big Society Capital krever at mottakerne tar eksplisitt stilling til dødvekt i resultatrapporteringen, i stedet for å rapportere brutto antall deltakere.

## Regnestykket

Standard rekkefølge for justering til nettoeffekt, slik den er beskrevet i britisk evalueringsveiledning (Magenta Book; HM Treasury/BIS Additionality Guide; veiledning for evaluering av ESIF og strukturfondene):

```
Brutto utfall
  − Dødvekt          (det som ville ha skjedd uansett)
  − Fortrengning     (aktivitet/nytte flyttet fra et annet sted, ikke skapt – se
                       displacement-and-attribution)
  − Lekkasje         (nytte som tilfaller noen utenfor målgruppen/målområdet)
  × Multiplikator     (ekstra indirekte/induserte økonomiske ringvirkninger, der de er positive)
  = Netto addisjonell effekt
```

Dødvektsrate som andel:

```
Dødvektsrate = utfall som ville ha inntruffet uten tiltaket
                   / samlet observert brutto utfall

Netto addisjonelle utfall = Brutto utfall × (1 − dødvektsrate)
```

## Utregnet eksempel

**Tilskuddsprogram for bedriftsstøtte**: Et regionalt tilskuddsprogram rapporterer at 500 støttede bedrifter økte sysselsettingen året etter, i gjennomsnitt med 3 stillinger hver – en brutto påstand om 1 500 arbeidsplasser.

En matchet sammenligningsgruppe av tilsvarende bedrifter som ikke fikk støtte (se [kontrafaktisk analyse](../kontrafaktisk-analyse/)) viser at 40 % av sysselsettingsveksten hos de støttede bedriftene ville ha kommet uansett, basert på hvordan den matchede gruppen utviklet seg i samme periode.

```
Dødvektsrate = 40 %
Netto addisjonelle arbeidsplasser = 1 500 × (1 − 0,40) = 900 arbeidsplasser
```

Det programmet ærlig kan rapportere, er 900 arbeidsplasser, ikke 1 500 – en reduksjon på 40 % bare av dødvektsjusteringen, før fortrengning eller lekkasje er vurdert.

**Veldedig sysselsettingsprogram**: En veldedig organisasjon plasserer 200 langtidsledige i jobb til en kostnad på £600 000 (£3 000 per plassering, brutto). Nasjonale arbeidsmarkedsdata viser at omtrent 15 % av en tilsvarende gruppe langtidsledige finner arbeid i samme periode uten noe tiltak, gjennom vanlig bevegelse i arbeidsmarkedet.

```
Dødvektsrate = 15 %
Netto addisjonelle plasseringer = 200 × (1 − 0,15) = 170
Reell kostnad per addisjonell plassering = £600 000 / 170 ≈ £3 529
```

Bruttotallet for kostnad per plassering (£3 000) undervurderer den reelle kostnaden ved organisasjonens addisjonelle bidrag med omtrent 15 %.

## Sammenheng med programvareutvikling

Addisjonalitet og dødvekt har direkte betydning for alle som bygger programvare for effektmåling eller tilskuddsforvaltning i offentlig eller sosial sektor:

- Systemer for resultatrapportering bør fange opp en sammenligningsgruppe eller et referansenivå fra starten av, ikke bare deltakernes utfall. Det er langt vanskeligere å etablere et kontrafaktisk scenario i ettertid, etter at et system er lansert uten det, enn å bygge innsamlingen inn fra begynnelsen (se [kontrafaktisk analyse](../kontrafaktisk-analyse/)).
- Dashbord som bare viser brutto antall deltakere, vil systematisk overdrive effekten overfor finansiører og tilsynsorganer. Der det finnes dødvektsanslag (fra evalueringslitteraturen eller en sammenligningsgruppe), bør programvaren vise tallet etter fradrag for dødvekt ved siden av bruttotallet, ikke i stedet for det.
- Dette henger direkte sammen med [sosial avkastning på investering](../sosial-avkastning-på-investering/), der SROI-forholdstallet først blir troverdig når dødvekt (og fortrengning) er trukket fra de brutto påståtte utfallene. En SROI-kalkulator som utelater dette trinnet, gir oppblåste forholdstall som ikke tåler granskning.

## Fallgruver

- **Å rapportere brutto utfall som om alt var addisjonelt.** Dette er den vanligste feilen i effektmåling ved rapportering fra tilskudd og programmer. Spør alltid «ville dette ha skjedd uansett?» før et hovedtall offentliggjøres.
- **Å anta én enkelt dødvektsprosent som gjelder overalt.** Dødvekt varierer sterkt mellom sektorer, populasjoner og lokale økonomiske forhold. Bruk en sammenligningsgruppe eller sektorspesifikke data i stedet for å gjenbruke et tall fra en urelatert evaluering.
- **Å forveksle dødvekt med fortrengning.** Dødvekt gjelder kontrafaktiske utfall for de samme deltakerne, mens fortrengning gjelder virkninger for andre personer eller steder – se [fortrengning og attribusjon](../fortrengning-og-attribusjon/). Å blande de to fører til dobbelttelling eller underjustering.
- **Dødvekt rapportert av deltakerne selv.** Hvis man spør mottakerne «ville dette ha skjedd uten vår hjelp?», blir dødvektsanslagene systematisk for lave (deltakerne har en tendens til å gi programmet æren). En uavhengig sammenligningsgruppe er langt mer pålitelig.

## Kilder

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020).
  <https://www.gov.uk/government/publications/the-magenta-book>
- HM Treasury / Department for Business, Innovation and Skills, "Additionality Guide: A Standard
  Approach to Assessing the Additional Impact of Interventions" (3rd edition), originally developed
  with English Partnerships and the Housing Corporation.
- European Commission, "Evalsed: The Resource for the Evaluation of Socio-Economic Development" —
  guidance on deadweight, displacement, and leakage in structural-funds evaluation.
- National Lottery Community Fund, "Guidance on Outcomes and Impact Reporting." <https://www.tnlcommunityfund.org.uk/>
