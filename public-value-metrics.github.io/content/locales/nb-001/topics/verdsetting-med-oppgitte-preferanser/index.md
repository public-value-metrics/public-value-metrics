# Verdsetting med oppgitte preferanser

Metoder med oppgitte preferanser anslår verdien av et ikke-markedsgode ved å spørre folk direkte hva de ville vært villige til å betale for det, eller villige til å ta imot i kompensasjon for å gi det fra seg, vanligvis gjennom en strukturert spørreundersøkelse som beskriver et hypotetisk scenario. Betinget verdsetting (contingent valuation) er den best kjente teknikken i familien.

## Hvorfor det er viktig

Green Books vedlegg 2 (utfyllende veiledning om verdsetting av ikke-markedsmessige virkninger) anbefaler metoder med oppgitte preferanser for goder der det ikke finnes noen observerbar markedstransaksjon å utlede verdi fra – luftkvalitet, biologisk mangfold, flomvern, og eksistensverdien av et landskap noen kanskje aldri besøker (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>). Defra har publisert sin egen veiledning om oppgitte preferanser for miljøvurderinger, nettopp fordi så mye av miljøverdien (bevaring av habitater, vannkvalitet) ikke har noe proxymarked i det hele tatt, i motsetning til for eksempel støy, som i det minste henger sammen med observerbare boligpriser (se [verdsetting med avslørte preferanser](../verdsetting-ved-avslørte-preferanser/)).

Den sentrale styrken ved oppgitte preferanser – at man kan verdsette bokstavelig talt hva som helst, også goder ingen noen gang har handlet med – er også kilden til troverdighetsproblemet. Fordi respondentene ikke faktisk bruker penger, er undersøkelser med betinget verdsetting sårbare for hypotetisk skjevhet (folk overdriver betalingsviljen når det ikke finnes noen reell budsjettbegrensning), innbyggingseffekter (det samme godet verdsettes ulikt avhengig av hva annet som er med i undersøkelsen) og startpunktskjevhet i utforminger med budspill. NOAA-panelet om betinget verdsetting fra 1993, satt ned etter rettstvistene etter Exxon Valdez-oljeutslippet, fastsatte designstandarder – et binært «ville du betalt £X, ja/nei»-format som folkeavstemning i stedet for åpent budspill, og obligatoriske påminnelser om respondentens faktiske budsjettbegrensning – som fortsatt er referansestandarden for forsvarlige undersøkelser.

## Regnestykket

```
Betinget verdsetting (folkeavstemningsformat):
  Presenter et binært valg: «ville du betalt £X per år for utfall Y? ja/nei»
  Variér X tilfeldig mellom respondentene.
  Tilpass betalingsvilje som en funksjon av andelen ja-svar ved hver X.

Gjennomsnittlig betalingsvilje = arealet under den estimerte etterspørselskurven
Samlet verdi = gjennomsnittlig betalingsvilje × berørt befolkning

Variant med valgeksperiment (diskret valgmodellering):
  Presenter respondentene for gjentatte valg mellom bunter av egenskaper
  (inkludert en kostnadsegenskap), og anslå implisitte priser for hver
  egenskap utenom kostnad ut fra avveiningene respondentene avslører.
```

Varianten med valgeksperiment foretrekkes vanligvis i gjeldende britisk praksis fremfor betinget verdsetting med ett enkelt spørsmål, fordi det å tvinge respondentene til gjentatte ganger å avveie flere egenskaper mot kostnad gir mer internt konsistente anslag som er vanskeligere å spille på.

## Utregnet eksempel

**Statlig forvaltning**: Defra bestiller en undersøkelse med betinget verdsetting for å verdsette et program for bedre vannkvalitet i en elv. En undersøkelse i folkeavstemningsformat blant 2000 husholdninger viser at 62 % ville betalt £40 i året via et hypotetisk tillegg på vannregningen, og den estimerte etterspørselskurven gir en gjennomsnittlig betalingsvilje på £28 i året per husholdning.

```
Gjennomsnittlig betalingsvilje = £28/husholdning/år
Husholdninger i nedbørfeltet = 340 000
Samlet årlig verdi = £28 × 340 000 = £9,52 mill./år

Over en analyseperiode på 20 år med diskonteringsrate på 3,5 % (annuitetsfaktor ≈ 14,2):
Nåverdi(nytte) ≈ £9,52 mill. × 14,2 ≈ £135 mill.
```

Dette samlede tallet sammenlignes deretter med kostnadssiden i programmets [samfunnsøkonomiske nytte-kostnadsanalyse](../samfunnsøkonomisk-nytte-kostnadsanalyse/). Green Book krever at slik evidens fra oppgitte preferanser rapporteres sammen med konfidensintervall og undersøkelsesmetodikk, ikke som et bart punktestimat, nettopp fordi tallet bak er skjørere enn en markedspris.

**Veldedig organisasjon**: en kulturarvstiftelse undersøker besøkende og ikke-besøkende om betalingsvilje for å hindre nedleggelsen av en historisk bygning ingen av gruppene nødvendigvis besøker (dens eksistensverdi). Fordi ikke-besøkende som aldri vil se bygningen likevel oppgir positiv betalingsvilje, fanger undersøkelsen opp eksistens- og arveverdi som en enkel telling av billettinntekter (en proxy med avslørte preferanser) ville gått helt glipp av – og viser den reelle fordelen med oppgitte preferanser der det ikke finnes noen markedstransaksjon av noe slag som kan avsløre verdi.

## Sammenheng med programvareutvikling

Metoder med oppgitte preferanser gjelder sjelden direkte i programvareutvikling, men utviklere som bygger plattformer for innbyggerhøringer, verktøy for medvirkning i budsjett eller offentlig undersøkelsesinfrastruktur bygger ofte selve instrumentet økonomien avhenger av. Å få detaljene i undersøkelsesdesignet riktig – randomiserte budbeløp, binær folkeavstemningsramming fremfor åpne spørsmål, eksplisitte påminnelser om budsjettbegrensning – er ikke en brukeropplevelsesdetalj, men det som gjør den resulterende verdsettingen forsvarlig under granskning. En dårlig utformet undersøkelse i en app kan ugyldiggjøre måneder med påfølgende økonomisk analyse. Se [mål på innbyggertilfredshet](../mål-på-innbyggertilfredshet/) for den mer generelle disiplinen å innhente meningsdata fra befolkningen som skal tåle analytisk vekt.

## Fallgruver

- **Åpne «hvor mye ville du betalt?»-spørsmål.** Disse er langt mer utsatt for strategisk skjevhet og forankringsskjevhet enn binær folkeavstemningsramming. NOAA-panelets anbefaling om folkeavstemningsformat finnes nettopp fordi åpen utspørring fungerer dårlig.
- **Ingen påminnelse om respondentens faktiske budsjettbegrensning.** Uten den overstiger oppgitt betalingsvilje rutinemessig det samme folk ville betalt når en reell budsjettavveining står på spill – hypotetisk skjevhet.
- **Innbyggingseffekter som ignoreres.** Det samme godet verdsatt alene mot verdsatt som del av en større bunt gir ulike anslag på betalingsvilje. Rapporter hva annet, om noe, som var med i undersøkelsens ramme.
- **Å behandle punktestimatet fra én enkelt undersøkelse som avgjort.** Green Book-praksis forventer et intervall og en diskusjon av kjente skjevheter, ikke et bart tall som føres videre til nytte-kostnadstabellen som om det var en markedspris.

## Kilder

- HM Treasury. «The Green Book,» vedlegg 2: valuing non-market impacts. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Defra. «Valuing environmental impacts: practical guidelines» (veiledning om betinget verdsetting og valgeksperimenter). <https://www.gov.uk/government/collections/valuing-environmental-impacts>
- Arrow K, et al. «Report of the NOAA Panel on Contingent Valuation.» Federal Register, 1993.
- Mitchell RC, Carson RT. «Using Surveys to Value Public Goods: The Contingent Valuation Method.» Resources for the Future, 1989.
