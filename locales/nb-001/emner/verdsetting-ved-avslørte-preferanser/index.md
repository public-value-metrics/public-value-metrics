# Verdsetting ved avslørte preferanser

Metoder basert på avslørte preferanser utleder verdien av et gode uten marked fra observerbar atferd i et beslektet marked, i stedet for å spørre folk direkte. Hedonisk prising og reisekostnadsmetoden er de to arbeidshestene: begge starter med en reell transaksjon og regner seg tilbake til en implisitt pris for det som aldri ble solgt direkte.

## Hvorfor det er viktig

Der metoder med [uttrykte preferanser](../verdsetting-med-oppgitte-preferanser/) stiller et hypotetisk spørsmål, observerer metoder med avslørte preferanser hva folk faktisk har betalt for, noe Green Book behandler som generelt mer troverdig evidens, alt annet likt, fordi den ikke er utsatt for hypotetisk skjevhet – respondentene i en hedonisk studie av boligpriser betalte virkelig påslaget eller rabatten som måles (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>, Annex 2). Hedonisk prising dekomponerer en markedspris – typisk boligpriser – til implisitte priser for hver egenskap ved godet, slik at analytikere kan isolere for eksempel prispåslaget husholdninger faktisk betaler for å bo et sted som er roligere eller har bedre luftkvalitet, med statistisk kontroll for alle andre egenskaper som også påvirker boligprisen (størrelse, beliggenhet, skolekrets). Reisekostnadsmetoden gjør det analoge for rekreasjonssteder uten inngangspenger: tiden og pengene folk bruker på å reise til et sted avslører en nedre grense for hva stedet er verdt for dem, fordi ingen pådrar seg en kostnad som overstiger det besøket er verdt for dem.

Begge metodene har en felles strukturell begrensning: de kan bare verdsette det som er innebygd i en eksisterende markedstransaksjon. Støy nær en rullebane vises i boligpriser fordi folk som bryr seg om støy sorterer seg inn i roligere boliger; eksistensverdien av en art ingen besøker eller bor i nærheten av, vises ikke i noen transaksjon i det hele tatt, og det er nettopp det gapet metoder med [uttrykte preferanser](../verdsetting-med-oppgitte-preferanser/) finnes for å fylle.

## Regnestykket

```
Hedonisk prising:
  Boligpris = f(strukturelle egenskaper, beliggenhetsegenskaper,
                miljøegenskapen av interesse, ...)
  Estimeres ved regresjon; koeffisienten på miljøegenskapen
  (alt annet holdt konstant) er dens implisitte pris.

  Implisitt pris for egenskap X = ∂(boligpris) / ∂X

Reisekostnadsmetoden:
  Besøksrate (besøk per innbygger fra sone i) = f(reisekostnad fra sone i,
                substituttsteder, sosioøkonomiske kontroller)
  Estimer en etterspørselskurve for besøk som funksjon av reisekostnad.
  Konsumentoverskudd = arealet under den estimerte etterspørselskurven
                     = stedets verdi for de besøkende
```

Begge metodene krever et statistisk forsvarlig sett kontrollvariabler – å utelate en konfunderende egenskap (hedonisk) eller et nærliggende substituttsted (reisekostnad) skjevfordreier den implisitte prisen i en retning som ikke alltid er åpenbar på forhånd, og derfor krever Green Book Annex 2 at regresjonsspesifikasjonen og kontrollene rapporteres, ikke bare hovedkoeffisienten.

## Utregnet eksempel

**Sentralforvaltningen**: Green Books egen metodikk for skyggepris på karbon bygger delvis på hedonisk evidens, men et enklere illustrerende tilfelle er flystøy. En hedonisk studie som regresserer salgspriser på boliger i et område under innflygingsrute mot avstandsvektet støyeksponering, med kontroll for størrelse, alder og skolekrets, finner at hver desibel økning i gjennomsnittlig støyeksponering henger sammen med en reduksjon i boligprisen på 0,5 %. For et typisk hus til £280 000 i det berørte området:

```
Implisitt pris per desibel = £280 000 × 0,5 % = £1 400 per husholdning
Husholdninger berørt av en økning på 3 dB fra en ny rullebane = 18 000
Samlet underforstått kostnad av støyøkningen = £1 400 × 3 × 18 000 = £75,6 mill.
```

Dette er en engangskostnad kapitalisert i boligprisen, som vurderingen må passe seg for å ikke dobbelttelle mot en separat anslått årlig kostnadsstrøm for støyplage.

**Veldedig organisasjon**: en miljøorganisasjon bruker reisekostnadsmetoden til å verdsette et naturreservat med gratis adgang. Spørreundersøkelsesdata om de besøkendes postnummer gir en gjennomsnittlig reisekostnad for tur-retur (tid verdsatt til Green Books anbefalte verdi for fritid, pluss drivstoff) på £14 per besøk, med 40 000 besøk i året. Den estimerte etterspørselskurven – besøksrater som faller når reisekostnaden fra en sone stiger – innebærer et konsumentoverskudd per besøk, utover de £14 som faktisk ble brukt, på omtrent £9.

```
Total årlig verdi = 40 000 besøk × (£14 brukt + £9 konsumentoverskudd)
                  = 40 000 × £23 ≈ £920 000/år
```

Dette overgår langt reservatets inntekt på null i inngangspenger og gir organisasjonens styre et forsvarlig tall for stedets rekreasjonsverdi når de skal argumentere overfor finansiører.

## Sammenheng med programvareutvikling

Tenkning om avslørte preferanser dukker opp i produktanalyse i offentlig sektor oftere enn utøverne er klar over: bruksdata fra en gratis offentlig digital tjeneste er i seg selv evidens om verdi ved avslørte preferanser (frekvens, øktlengde og – mest avslørende – mønstre for gjentatt versus engangsbruk kan analyseres på samme måte som en reisekostnadsmodell behandler besøksfrekvens mot avstand). Der en tjeneste har genuine substitutter (en papirkanal, en telefonlinje), kan «kostnaden» innbyggerne pådrar seg for å bruke den digitale kanalen i stedet (tid, data, en enhet) anslås og sammenlignes med bruken, i direkte tråd med reisekostnadslogikken. Se [Digital Service Standard](../standard-for-digitale-tjenester/) og [verdien av åpne data](../verdien-av-åpne-data/), som står overfor nøyaktig dette verdsettingsproblemet for et gode uten direkte markedspris.

## Fallgruver

- **Skjevhet fra utelatte variabler i hedoniske modeller.** Å utelate en korrelert egenskap (skolekvalitet som korrelerer både med boligpris og miljøvariabelen av interesse) skjevfordreier anslaget på den implisitte prisen; spesifikasjonen må rapporteres og granskes, ikke bare resultatet.
- **Å overse substituttsteder i reisekostnadsstudier.** En besøkendes avslørte verdi for et sted undervurderes hvis det finnes et nærmere substitutt som ikke kontrolleres for – de besøker det kanskje mest fordi det er gratis, ikke fordi det er enestående verdifullt.
- **Å anvende avslørte preferanser på et gode uten noe markedsekko i det hele tatt.** Eksistensverdi, opsjonsverdi og arveverdi vises ikke i noen transaksjon og kan ikke gjenvinnes med hedoniske metoder eller reisekostnadsmetoder – det gapet hører hjemme hos [verdsetting ved uttrykte preferanser](../verdsetting-med-oppgitte-preferanser/).
- **Å forveksle kapitalisert (engangs-) verdi med en årlig strøm.** Hedoniske effekter på boligpriser er vanligvis kapitaliserte engangsverdier; å behandle dem som en årlig nyttestrøm blåser opp vurderingen.

## Kilder

- HM Treasury. "The Green Book," Annex 2: valuing non-market impacts.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Transport / Civil Aviation Authority. Aircraft noise valuation studies used in
  airport appraisal. <https://www.gov.uk/guidance/aviation-noise>
- Rosen S. "Hedonic Prices and Implicit Markets: Product Differentiation in Pure Competition."
  Journal of Political Economy, 1974.
- Clawson M, Knetsch JL. "Economics of Outdoor Recreation." Johns Hopkins University Press, 1966
  (origin of the travel-cost method).
