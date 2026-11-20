# Verdien av cybersikkerhet i offentlig sektor

Verdien av cybersikkerhet i offentlig sektor er disiplinen å prise risikoreduksjon: hva er det verdt å gjøre et brudd på innbyggerdata mindre sannsynlig, gitt at sikkerhetsutgifter ikke gir noen synlig leveranse når de virker, og en svært synlig når de svikter? For en tjeneste som holder trygderegistre, helsedata eller skatteopplysninger er nettopp denne egenskapen «usynlig når det virker» grunnen til at den trenger et eksplisitt verdiargument, ikke bare en avkrysning for etterlevelse.

## Hvorfor det er viktig

Det britiske National Cyber Security Centres Cyber Assessment Framework (CAF) gir offentlige organisasjoner en strukturert måte å gjøre sikkerhet til en vurderbar, utfallsbasert disiplin i stedet for en sjekkliste: det definerer fire overordnede mål (håndtere sikkerhetsrisiko, beskytte mot cyberangrep, oppdage sikkerhetshendelser og minimere virkningen av hendelser), brutt ned i bidragende utfall som en systemeier kan vurderes mot, i samme ånd som punkt 9 i [Digital Service Standard](../standard-for-digitale-tjenester/) («lag en sikker tjeneste som beskytter brukernes personvern»). Det CAF-vurderingen beskytter mot, har en dokumentert prislapp: IBMs Cost of a Data Breach Report følger gjennomsnittlig bruddkostnad per sektor, og har konsekvent funnet at offentlig sektor ligger i den nedre delen av spennet sammenlignet med finans eller helse – nyere utgaver anslår gjennomsnittet i offentlig sektor til rundt $2,6–2,9 millioner per brudd – men «lavere enn finans» er ikke «lavt», og offentlige brudd har kostnader som rapportens tall ikke fanger fullt ut: tap av innbyggernes tillit til digitale kanaler, som trykker ned [digital bruk](../besparelser-ved-kanalskifte/) som forretningscaser for kanalskifte avhenger av, og den politiske og juridiske kostnaden ved å eksponere data som staten i utgangspunktet tvang innbyggerne til å oppgi.

## Regnestykket

Sikkerhetsinvesteringer verdsettes slik enhver risikoreduserende utgift verdsettes: som en reduksjon i forventet tap, ved hjelp av den klassiske identiteten fra risikostyring.

```
Årlig forventet tap (Annualized Loss Expectancy, ALE) = Forventet tap per hendelse (Single Loss Expectancy, SLE)
                                  × Årlig forekomstrate (Annualized Rate of Occurrence, ARO)

Verdien av et sikkerhetstiltak =
  ALE_før_tiltak − ALE_etter_tiltak − årlig kostnad for tiltaket

Et tiltak er verdt å finansiere når:
  (ALE_før − ALE_etter) > årlig kostnad for tiltaket

CAF-vurderingen gir ikke direkte en sannsynlighet, men en tjenestes
CAF-utfallsprofil (hvilke bidragende utfall som er «oppnådd»,
«delvis oppnådd» eller «ikke oppnådd») er et rimelig proxy-grunnlag
for å anslå ARO — et system med uforvaltet privilegert tilgang eller
uten en testet beredskapsplan har en vesentlig høyere realistisk ARO
enn ett med begge deler på plass.
```

## Utregnet eksempel

**Fylkeskommunalt saksbehandlingssystem med sosialomsorgsjournaler for 40 000 innbyggere**:

```
Forventet tap per hendelse (bruddkostnad), med et gjennomsnitt for
offentlig sektor fra en nylig utgave av IBMs Cost of a Data Breach Report ≈ £2,1 mill.
(omregnet, størrelsesordensanslag — utled alltid på nytt fra
gjeldende rapportutgave i stedet for å gjenbruke et fast tall)

Nåværende ARO (uforvaltet privilegert tilgang, ingen testet
beredskapsplan, ifølge en intern CAF-egenvurdering med flere
utfall «ikke oppnådd») ≈ anslått 8 % per år
  ALE_før = £2,1 mill. × 0,08 = £168 000/år

Foreslått tiltak: forvaltning av privilegert tilgang + testet
beredskapsplan, som flytter de aktuelle CAF-utfallene til «oppnådd»,
anslått å kutte ARO til 3 %/år
  ALE_etter = £2,1 mill. × 0,03 = £63 000/år

Årlig kostnad for tiltaket (verktøy + prosess + testing) = £45 000

Verdien av tiltaket = (168 000 − 63 000) − 45 000 = £60 000/år
  netto positiv — finansier det. Regnestykket viser også at tiltaket
  fortsatt ville vært verdt å finansiere til nesten tredobbel kostnad,
  den typen sensitivitetskontroll som bør følge ethvert ALE-tall
  bygget på anslåtte sannsynligheter.
```

## Sammenheng med programvareutvikling

Utviklere eier de fleste spakene i ALE-ligningen: utforming av tilgangskontroll, avhengighets- og oppdateringshygiene, dekning av logging og deteksjon og verktøy for hendelseshåndtering flytter alle ARO-leddet direkte, og derfor leses en CAF-vurdering som en teknisk arkitekturgjennomgang like mye som en policyrevisjon. Dette er [teknisk gjeld som erosjon av offentlig verdi](../teknisk-gjeld-som-erosjon-av-offentlig-verdi/) i sin mest akutte form – uoppdaterte, uovervåkede systemer med dårlig tilgangskontroll er gjeld der renten betales som halerisiko, ikke som en jevn bremsekloss – og det bør avstemmes mot [totale eierkostnader i offentlig IT](../totalkostnad-for-eierskap-i-offentlig-it/), slik at sikkerhetsutgifter ikke behandles som atskilt fra systemets reelle driftskostnad. Det er også et direkte grunnlag for vurderinger av [valuta for pengene](../verdi-for-pengene/) etter Green Book: risikojustert kostnad er en del av «kostnadssiden» i enhver alternativvurdering, ikke noe som henges på til slutt.

## Fallgruver

- **Å behandle CAF-egenvurdering som selve sikkerheten**: en fullført vurdering beskriver en sikkerhetsholdning; den skaper den ikke – verdien ligger i utfallene som oppnås, ikke i dokumentet.
- **Å bruke globale gjennomsnittlige bruddkostnader som lokalt anslag uten justering**: IBMs tall er gjennomsnitt over store, varierte utvalg; en liten kommunes realistiske forventede tap per hendelse er sjelden det samme som et nasjonalt departements.
- **Å overse psykologien rundt halerisiko i investeringsbeslutninger**: lav årlig sannsynlighet gjør det lett å utsette sikkerhetsutgifter på ubestemt tid, helt til året det går galt – å sensitivitetsteste ALE-beregningen mot et spenn av ARO-verdier, som i eksempelet, motvirker dette.
- **Å telle bare bruddkostnaden i IBM-stil og ikke tillitskostnaden**: et brudd som svekker innbyggernes vilje til å bruke digitale kanaler undergraver forretningscasen for [besparelser ved kanalskifte](../besparelser-ved-kanalskifte/) i årevis etterpå, en kostnad som sjelden inngår i anslag over bruddkostnader.

## Kilder

- National Cyber Security Centre, Cyber Assessment Framework. <https://www.ncsc.gov.uk/collection/caf>
- IBM, Cost of a Data Breach Report. <https://www.ibm.com/reports/data-breach>
- GOV.UK Service Manual, service standard, point 9: create a secure service which protects users' privacy. <https://www.gov.uk/service-manual/service-standard/point-9-create-a-secure-service>
