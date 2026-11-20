# Multikriteriell beslutningsanalyse

Multikriteriell beslutningsanalyse (MCDA) skårer og veier alternativer mot flere ulike, vektede kriterier samtidig og gir en rangert sammenligning uten å tvinge hvert kriterium over på én felles pengeskala eller naturlig enhet. Det er vurderingsmetoden for beslutninger der de utfallene som betyr noe, genuint ikke kan reduseres til ett enkelt tall.

## Hvorfor det er viktig

Green Book sanksjonerer uttrykkelig MCDA (både Box 2 med eksempelsaker og Annex A omtaler den direkte) for vurderinger der nytten er «genuint ukommensurabel» – der en omregning av alt til penger via [samfunnsøkonomisk nytte-kostnadsanalyse](../samfunnsøkonomisk-nytte-kostnadsanalyse/), eller til ett utfall via [kostnadseffektivitetsanalyse](../kostnadseffektivitetsanalyse-i-offentlig-forvaltning/), ville fordreid beslutningen i stedet for å tydeliggjøre den (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>). Valg av tomt for et nytt fengsel veier for eksempel investeringskostnader mot konsekvenser for lokalsamfunnet, transporttilgang, miljøvirkninger og muligheten for å rekruttere ansatte – kriterier som ikke har noen felles enhet, og der et påtvunget felles mål (vanligvis penger) ville smugle inn en verdivurdering av den relative viktigheten av for eksempel miljøpåvirkning versus kostnad, kledd ut som objektiv aritmetikk.

MCDAs ærlighet er også dens største sårbarhet: fordi vektene settes av den som gjennomfører vurderingen (eller av et panel), er metoden bare så legitim som vektingsprosessen. Green Book-veiledningen er tydelig på at kriterier og vekter må vedtas og offentliggjøres *før* alternativene skåres, nettopp for å hindre at en vurderer arbeider baklengs fra et foretrukket alternativ til vektene som rettferdiggjør det.

## Regnestykket

```
For hvert alternativ i og kriterium j:
  Skår_ij    = alternativets prestasjon mot kriteriet (ofte 0-100
               eller 1-10, fra evidens, ekspertvurdering eller skåring
               fra interessenter)
  Vekt_j     = relativ viktighet av kriterium j, vektene summerer til 1 (eller 100)

Vektet skår for alternativ i = Σ_j (Skår_ij × Vekt_j)

Fremgangsmåte:
1. Bli enige om kriteriesett og vekter FØR noe alternativ skåres (swing-
   vekting eller parvis sammenligning, f.eks. AHP, er vanlige metoder for å
   hente ut vekter).
2. Skår hvert alternativ mot hvert kriterium på en felles skala, fra
   evidens der det er mulig.
3. Beregn vektede totaler; rangér alternativene.
4. Sensitivitetstest vektene: tåler rangeringen en rimelig uenighet om
   hvor mye hvert kriterium bør telle?
```

MCDA gir ikke en forsvarlig absolutt verdi slik nåverdien i en samfunnsøkonomisk nytte-kostnadsanalyse gjør – den gir bare en rangering betinget av de avtalte vektene. Det er en styrke når beslutningen virkelig handler om å veie ukommensurable goder mot hverandre, og en svakhet hvis den brukes til å slippe unna det tyngre arbeidet med å verdsette i penger der det faktisk var mulig.

## Utregnet eksempel

**Kommune**: en kommune som skal velge sted for en ny gjenvinningsstasjon for husholdningsavfall, skårer tre tomter mot fire kriterier, vektet av et tverrfaglig panel før noen befaring:

```
Kriterier (vekt):         Investeringskostnad (30 %)  Transporttilgang (25 %)
                           Konsekvenser for lokalsamfunnet (25 %)  Miljøpåvirkning (20 %)

Skår for tomtene (0-100, høyere = bedre):
Tomt A: kostnad 80, tilgang 60, lokalsamfunn 40, miljø 70
Tomt B: kostnad 60, tilgang 90, lokalsamfunn 70, miljø 50
Tomt C: kostnad 90, tilgang 50, lokalsamfunn 80, miljø 60

Vektede totaler:
Tomt A = 80(0,30) + 60(0,25) + 40(0,25) + 70(0,20) = 24+15+10+14 = 63
Tomt B = 60(0,30) + 90(0,25) + 70(0,25) + 50(0,20) = 18+22,5+17,5+10 = 68
Tomt C = 90(0,30) + 50(0,25) + 80(0,25) + 60(0,20) = 27+12,5+20+12 = 71,5
```

Tomt C rangeres høyest. En sensitivitetskjøring som flytter vekten for konsekvenser for lokalsamfunnet fra 25 % til 35 % (ved å ta 10 poeng fra investeringskostnaden) endrer Tomt Cs total til 71,5 − 3 + 8 = 76,5 og Tomt Bs til 68 − 6 + 7 = 69 – Tomt C leder fortsatt, så rangeringen tåler denne rimelige uenigheten om vektingen, og det er nettopp den kontrollen Green Book forventer å se rapportert.

**Veldedig organisasjon**: en tilskuddsgivende stiftelse som skal velge mellom å finansiere en gjeldsrådgivningstjeneste, et nettverk av matbanker og et program for økonomisk kompetanse, bruker MCDA i stedet for SROI (se [sosial avkastning på investering](../sosial-avkastning-på-investering/)) nettopp fordi styremedlemmene i god tro er uenige om hvorvidt kriseavhjelping eller forebygging bør veie tyngst – MCDA lar dem bli enige om uenighetens *form* (et vektintervall) i stedet for å late som om ett enkelt SROI-forholdstall løser den.

## Sammenheng med programvareutvikling

MCDA er det naturlige verktøyet for valg av leverandør og arkitektur når kriteriene reelt står i konflikt – et valg mellom et skybasert og et lokalt driftet saksbehandlingssystem veier kostnad, risiko for datasuverenitet, tilgjengelighet og leveringshastighet på måter som ikke lar seg redusere til ett tall. Teknologiledere bør kreve at vektingen skjer før alternativene skåres, nøyaktig slik Green Book krever, fordi en vektingsøvelse som gjennomføres etter at man har sett kortlisten, pålitelig glir mot det alternativet rommet allerede foretrakk. Se [bygge eller kjøpe i offentlig sektor](../utvikle-selv-eller-kjøpe-i-offentlig-forvaltning/) for en vanlig MCDA-anvendelse, og [offentlig verdi-scorecard](../scorecard-for-offentlig-verdi/) for et beslektet verktøy for strukturert skåring som brukes etter beslutningen i stedet for før den.

## Fallgruver

- **Å sette vekter etter å ha sett alternativene.** Dette er den vanligste måten MCDA manipuleres på, med eller uten hensikt; offentliggjør vektene før skåringen, og registrer hvem som satte dem.
- **Å behandle den vektede totalen som et hardt tall.** En skår på 71,5 mot 68 er ikke et statistisk meningsfullt gap med mindre sensitivitetsanalysen bekrefter at rangeringen er stabil; rapportér intervaller, ikke falsk presisjon.
- **Å bruke MCDA for å unngå verdsetting i penger som faktisk var mulig.** Hvis de fleste kriteriene troverdig kunne prises, kaster man bort informasjon vurderingen kunne ha brukt ved å velge MCDA i stedet for [samfunnsøkonomisk nytte-kostnadsanalyse](../samfunnsøkonomisk-nytte-kostnadsanalyse/).
- **Å la én dominerende interessent sette alle vektene alene.** God Green Book-praksis forventer at vektene hentes fra et representativt panel, ikke fra den ansvarlige direktøren, slik at vurderingen ikke bare gjenskaper det personen allerede ønsket.

## Kilder

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Annex A
  (multi-criteria decision analysis) and Box 2 case studies.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Communities and Local Government. "Multi-criteria analysis: a manual." 2009.
  <https://www.gov.uk/government/publications/multi-criteria-analysis-a-manual>
- Belton V, Stewart TJ. "Multiple Criteria Decision Analysis: An Integrated Approach." Kluwer,
  2002.
