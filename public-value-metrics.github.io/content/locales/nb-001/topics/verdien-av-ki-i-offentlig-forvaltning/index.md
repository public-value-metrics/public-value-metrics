# Verdien av KI i offentlig forvaltning

Verdien av KI i offentlig forvaltning er kravet om at et KI-system i en offentlig tjeneste må klare samme terskel for valuta for pengene og offentlig verdi som enhver annen utgiftsbeslutning – ikke en lavere terskel fordi teknologien er ny, og ikke en høyere fordi den vekker frykt. Det er spørsmålet et leveranseteam må kunne svare på før, ikke etter, at en KI-funksjon tas i bruk: gir dette mer verdi enn det koster, når kostnadene til kvalitetssikring, tilsyn og risiko er priset ærlig?

## Hvorfor det er viktig

Det britiske Central Digital and Data Office (CDDO) publiserte i 2024 Generative AI Framework for Government, som bygger på en tidligere midlertidig veiledning fra juni 2023. Rammeverket er bygget opp rundt ti prinsipper som dekker hva generativ KI er, de etiske implikasjonene, sikkerhet i verktøyene, kontroller for kvalitetssikring, styring av hele livssyklusen til generativ KI, identifisering av reelle bruksområder, samarbeid på tvers av forvaltningen, åpenhet, kompetanse og styring. Rammeverkets vekt på «meningsfull menneskelig kontroll» og styring av hele livssyklusen finnes fordi forretningscase for KI-prosjekter har en særskilt feilmodus som andre IT-utgifter ikke har: Et pilotprosjekts hovedtall for produktivitet er lett å produsere og lett å overdrive, fordi det måles før byrden med verifisering, retting og tilsyn som verktøyet skaper er regnet med. Ved siden av rammeverket krever Algorithmic Transparency Recording Standard (ATRS) at offentlige organer publiserer en standardisert beskrivelse – formål, data som brukes, ytelse, test av rettferdighet, ordninger for menneskelig tilsyn – for algoritmiske verktøy som har betydelig innflytelse på beslutninger om enkeltpersoner. Dermed blir kvalitetssikringskostnaden for et KI-system offentlig kjent, ikke et internt anslag et team i det stille kan hoppe over.

## Regnestykket

Innføring av KI vurderes som et tillegg til, ikke en erstatning for, den vanlige vurderingen av [valuta for pengene](../verdi-for-pengene/), og de KI-spesifikke leddene gjøres eksplisitte i stedet for å slås sammen til ett enkelt tall for «produktivitetsgevinst»:

```
Netto verdi av et KI-system =
    produktivitetsgevinst (spart tid × fullt belastet lønnskostnad)
  − lisens-/beregningskostnad
  − kostnad til menneskelig verifisering og tilsyn (kontroll av KI-resultatet før
    det brukes – dette synker ikke til null, selv for modne verktøy)
  − kostnad til ATRS-dokumentasjon og løpende overvåking
  − risikojustert kostnad av skade fra feil, skjevhet eller hallusinasjon,
    vektet etter hvem som bærer skaden (distributional-weighting)

Et produktivitetstall fra en pilot som utelater tilsynsleddet, er ikke
sammenlignbart med en referansekostnad i ordinær drift som allerede
inkluderer tilsvarende menneskelig kontroll – se ai-productivity-in-the-public-sector
for den mer utfyllende disiplinen for måling av produktivitet som dette bygger på.
```

## Utregnet eksempel

**Kommune som bruker et generativt KI-verktøy til å utarbeide førsteutkast til svar på rutinemessige henvendelser om kommunale avgifter**: 25 000 henvendelser i året, tidligere behandlet helt av saksbehandlere med gjennomsnittlig 14 minutter per henvendelse, fullt belastet lønnskostnad £34 per time.

```
Referansekostnad (uten KI):
  25 000 × (14/60) × £34 = £198 333 per år

Pilotens hovedpåstand: KI utarbeider et svar på 90 sekunder,
saksbehandleren «bare gjennomgår og sender» – påstått ny tid er 3 minutter
  25 000 × (3/60) × £34 = £42 500 per år
  → påstått besparelse £155 833 per år (ser ut som en omveltning)

Fullt belastet tall, målt etter 3 måneder i drift i stedet for i
pilotens håndplukkede testtilfeller:
  Faktisk tid til gjennomgang + retting per svar: 6 minutter (utkastene
  må redigeres ordentlig for kompliserte eller følelsesladde henvendelser)
  25 000 × (6/60) × £34 = £85 000 per år
  Lisens-/beregningskostnad: £38 000 per år
  ATRS-dokumentasjon og kvartalsvis overvåking av skjevhet/kvalitet: £14 000 per år
  Total kostnad = 85 000 + 38 000 + 14 000 = £137 000 per år

Reell besparelse = 198 333 − 137 000 = £61 333 per år – reell og verdt å
beholde, men godt under halvparten av pilotens hovedpåstand, og den ble funnet
først da man målte tilsynstiden ærlig i stedet for under best mulige forhold.
```

## Sammenheng med programvareutvikling

Her møtes [ai-productivity-in-the-public-sector](../ki-og-produktivitet-i-offentlig-sektor/) og dette temaet: Utviklingsteam som bygger KI-funksjoner inn i offentlige tjenester eier instrumenteringen som gjør det «reelle» tallet i eksemplet mulig – logging av faktisk tid til gjennomgang, redigeringsavstand mellom utkast og sendt svar, og andel saker som eskaleres – i stedet for å stole på pilotens demonstrasjonsforhold. KI-funksjoner bør vurderes opp mot punkt 9 i [digital-service-standard](../standard-for-digitale-tjenester/) (sikker tjeneste, personvern) og kobles til [public-sector-cybersecurity-value](../verdien-av-cybersikkerhet-i-offentlig-sektor/) der verktøyet berører innbyggernes data. Ethvert KI-system med betydelig innflytelse på beslutninger om enkeltpersoner trenger en ATRS-registrering før det kan regnes som klart for vurdering, på samme måte som en tjeneste må ha bestått en vurdering mot [digital-service-standard](../standard-for-digitale-tjenester/) før den settes i drift.

## Fallgruver

- **KI-vasking**: Å merke eksisterende regelbasert automatisering som «KI» for å få tilgang til finansiering eller oppmerksomhet som er øremerket KI-innføring, uten de risikoene for nøyaktighet og skjevhet som faktisk begrunner rammeverkets ekstra gransking.
- **Å måle produktivitet i pilot, ikke i produksjon**: Piloter kjøres på utvalgte testtilfeller med engasjerte, oppmerksomme kontrollører. Produksjon kjøres på hele den uryddige miksen av saker, med kontrollører som over tid utvikler automatiseringsskjevhet og kontrollerer for lite. Begge deler forvrenger det ærlige tallet for tilsynskostnad.
- **Å hoppe over ATRS-registrering fordi verktøyet «egentlig ikke er automatisert beslutningstaking»**: Standardens terskel er betydelig innflytelse på en beslutning om en enkeltperson, noe de fleste KI-verktøy for utforming av svar eller triagering mot innbyggere oppfyller selv når et menneske formelt godkjenner.
- **Å overse fordelingseffekten av feil**: Et KI-systems feilrate, gjennomsnittlig over alle brukere, kan skjule en mye høyere feil- eller skjevhetsrate for bestemte grupper. [fordelingsvekting](../fordelingsvekting/) bør brukes på leddet for risikojustert skade, ikke bare på det samlede nøyaktighetstallet.

## Kilder

- Central Digital and Data Office, Generative AI Framework for Government (2024). <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
- Algorithmic Transparency Recording Standard. <https://www.gov.uk/government/collections/algorithmic-transparency-recording-standard-hub>
- HM Treasury, Green Book: central government guidance on appraisal and evaluation. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-governent>
