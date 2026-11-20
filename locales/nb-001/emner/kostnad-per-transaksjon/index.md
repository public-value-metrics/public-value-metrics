# Kostnad per transaksjon

Kostnad per transaksjon er det sentrale enhetsøkonomiske måltallet for en digital offentlig tjeneste: de samlede kostnadene ved å levere en kanal, delt på antall transaksjoner som er fullført gjennom den. Det var hovedtallet på den gamle GOV.UK Performance Platform, og det er tallet som finansierte et tiår med investeringer i «digitalt som standard» – noe som nettopp er grunnen til at det også er måltallet som lettest blir manipulert.

## Hvorfor det er viktig

Cabinet Offices Digital Efficiency Report fra 2012 formulerte sammenligningen av kanalkostnader på en måte som festet seg: digitale transaksjoner ble funnet å koste omtrent 20 ganger mindre enn over telefon og omtrent 50 ganger mindre enn ved personlig oppmøte, med illustrative tall fra kommunal sektor på omtrent £0,15 per nettransaksjon mot £2,83 over telefon og £8,62 ved personlig oppmøte. Den ene sammenligningen ble begrunnelsen for å redesigne de 25 eksempeltjenestene som er nevnt i Government Digital Strategy, og for hver forretningscase i departementene som siden har vist til besparelser ved kanalskifte. Tallet er genuint nyttig som signal om størrelsesorden, men forholdet avhenger helt av hva som regnes med på hver side: en rimelig telefonkostnad inkluderer kundesenterets personale, telefonikontrakt, opplæring og lokaler; en rimelig digital kostnad inkluderer drift, løpende lønn til produktteamet, tid hos brukerstøtten for mislykkede reiser og den assisterte digitale kanalen som kreves av punkt 5 i [digital-service-standard](../standard-for-digitale-tjenester/). Fjern nok av dette fra den digitale siden, og enhver tjeneste ser billig ut.

## Regnestykket

```
Kostnad per transaksjon = samlet fordelt kanalkostnad / fullførte transaksjoner

Samlet fordelt kanalkostnad bør omfatte:
  + drift og infrastruktur
  + kostnad for produkt-/utviklings-/støtteteam (periodisert)
  + kostnad for innhold og tjenestedesign (periodisert)
  + kostnad for assistert digital støtte / tilgjengelighetsstøtte
  + kostnad ved feiletterspørsel (brukere som feiler digitalt og faller tilbake til telefon)
  − engangskostnaden for bygging periodiseres over forventet levetid for tjenesten,
    ikke kostnadsføres i sin helhet i år ett

Det vanlige regnskapstriks:
  «Marginalkostnad per transaksjon» (bare drift, etter at tjenesten er bygget)
  oppgis som om den var «gjennomsnittskostnad per transaksjon» (samlet kostnad
  inkludert teamet som fortsetter å bygge og drifte den). De to kan avvike
  med 10 ganger eller mer for en tjeneste med et stort, aktivt leveranseteam.
```

## Utregnet eksempel

**Tjeneste for fornyelse av kjøretøyavgift**: 4 millioner transaksjoner per år.

```
Kun marginalt tall (trikset):
  Kun drift + betalingsbehandling = £180 000 per år
  Kostnad per transaksjon = 180 000 / 4 000 000 = £0,045
  → hovedtallet oppgitt i en forretningscase

Fullt belastet tall (det ærlige):
  Drift + betaling                        £180 000
  Produkt-/utviklingsteam (8 årsverk)     £720 000
  Brukerstøtte (mislykkede/omstridte transaksjoner) £310 000
  Assistert digital telefonlinje          £140 000
  Totalt                                  £1 350 000
  Kostnad per transaksjon = 1 350 000 / 4 000 000 = £0,3375

Det fullt belastede tallet er fortsatt omtrent 8 ganger billigere enn
telefonkanalens sammenligningstall på £2,83 fra Digital Efficiency Report –
en reell og forsvarlig besparelse – men 7,5 ganger høyere enn det rent
marginale tallet i snarveisversjonen. Begge tallene er «sanne»; bare det ene
er sammenlignbart med telefonkanalens kostnad det settes opp mot.
```

## Sammenheng med programvareutvikling

Kostnad per transaksjon er stedet der arkitekturbeslutninger blir til et økonomitall: en tjeneste som skalerer rent automatisk og trenger lite manuell inngripen presser dette tallet ned over tid; en som genererer mange henvendelser til brukerstøtten fra forvirrende feiltilstander presser det opp, uansett hvor effektiv driften er. Det er det naturlige følgemålet til punkt 10 i [digital-service-standard](../standard-for-digitale-tjenester/) («definer hvordan suksess ser ut, og publiser ytelsesdata») og til [tjenestestandarder og transaksjonsmåltall](../tjenestestandarder-og-transaksjonsmål/), som beskriver det fullstendigere KPI-settet dette tallet inngår i. Det mater også direkte inn i beregninger av [besparelser ved kanalskifte](../besparelser-ved-kanalskifte/) og bør avstemmes mot [totalkostnad over levetiden i offentlig IT](../totalkostnad-for-eierskap-i-offentlig-it/) slik at plattform- og fellestjenestekostnader ikke i det stille faller ut.

## Fallgruver

- **Marginalkostnad forkledd som gjennomsnittskostnad**: å oppgi bare driftskostnaden når en tjeneste er bygget, uten det løpende teamet som vedlikeholder, videreutvikler og støtter den – se eksempelet ovenfor.
- **Å utelate kostnaden for assistert digital støtte**: en kanal er ikke i samsvar med «digitalt som standard», og dens sanne kostnad er ikke fanget, hvis telefon-/papirreservekanalen som kreves av [digital inkludering](../digital-inkludering/) kostnadsberegnes separat eller ignoreres.
- **Å overse feiletterspørsel**: transaksjoner som starter digitalt og mislykkes, og likevel genererer en telefonsamtale eller et papirskjema, er en kostnad ved den digitale kanalen, ikke ved kanalen som fanger opp feilen.
- **Å sammenligne transaksjoner av ulik kompleksitet på tvers av kanaler**: telefon håndterer uforholdsmessig mange av de vanskelige tilfellene (flere forsørgede, feilretting, sårbare søkere); å sammenligne en gjennomsnittlig telefonkostnad med en gjennomsnittlig digital kostnad overdriver forholdet med mindre transaksjonsmiksen er tilpasset.

## Kilder

- Cabinet Office, Digital Efficiency Report (2012). <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- GOV.UK Service Manual, service standard, point 10: define what success looks like. <https://www.gov.uk/service-manual/service-standard/point-10-define-success-publish-performance-data>
- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
