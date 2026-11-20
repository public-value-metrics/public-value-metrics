# Mål på innbyggertilfredshet

Mål på innbyggertilfredshet viser hvordan folk vurderer sin direkte erfaring med en offentlig tjeneste – noe annet enn tillit til institusjoner generelt, og noe annet enn om tjenesten faktisk oppnådde et godt utfall. En tjeneste kan være godt likt og lite effektiv, eller effektiv og mislikt. Gapet mellom de to er i seg selv diagnostisk informasjon som et leveranseteam bør følge med på.

## Hvorfor det er viktig

Tilfredshet måles på to ulike nivåer som rutinemessig blandes sammen. På tjenestenivå krever det nå nedlagte britiske Performance Platform og dagens GOV.UK Service Manual en tilfredshetsundersøkelse per tjeneste (vanligvis en femtrinns skala fra «svært fornøyd» til «svært misfornøyd», gjennomført ved selve transaksjonen) som ett av fire obligatoriske nøkkeltall for tjenesten – se [tjenestestandarder og transaksjonsmål](../tjenestestandarder-og-transaksjonsmål/). På institusjonsnivå måler den britiske Civil Service People Survey medarbeiderengasjement og -erfaring i hvert eneste sentrale departement hvert år, og OECDs program «Trust in Government» kartlegger separat befolkningens tillit til nasjonale myndigheter på tvers av medlemslandene. Det viser et langsiktig mønster av nedgang og bedring som i stor grad formes av kriser (både finanskrisen i 2008 og covid-19-pandemien ga skarpe, synlige utslag i OECDs tillitstall). Grunnen til at utviklere av innbyggerrettede tjenester må holde tilfredshet og utfall fra hverandre, er en kjent feilmodus i tjenestedesign: Et vakkert utformet, lettbrukt digitalt skjema for en stønadssøknad kan få svært høy tilfredshet mens selve politikken – kvalifikasjonsregler, saksbehandlingskøer, tildelte beløp – ikke gjør søkeren noe bedre stilt. Tilfredshet måler grensesnittet. Den måler ikke verdien som leveres bak det.

## Regnestykket

```
Nettotilfredshet = % fornøyde (eller svært fornøyde) − % misfornøyde (eller svært misfornøyde)
                    (nøytrale svar/ingen mening er utelatt fra begge ledd, men regnes
                    med i svargrunnlaget når hver prosentandel beregnes)

Gap mellom tilfredshet og utfall = tilfredshetsscore − måloppnåelsesscore for utfall
                    (begge normalisert 0–100; et stort positivt gap tyder på en tjeneste
                    som «føles god» men leverer for lite i substans)

Tillitsindeks (OECD-stil) = % av respondentene som svarer «ja» på
                    «har du tillit til [nasjonale myndigheter]?»
                    fulgt som tidsserie, vanligvis oppdelt etter
                    alder, inntekt og utdanning
```

## Utregnet eksempel

**Kommunens e-fakturering av kommunale avgifter**: En tilfredshetsundersøkelse ved vellykket transaksjon viser 2 400 respondenter: 1 650 fornøyde/svært fornøyde, 250 misfornøyde/svært misfornøyde, 500 nøytrale.

```
Nettotilfredshet = (1 650/2 400 × 100) − (250/2 400 × 100)
                  = 68,75 % − 10,42 %
                  = +58,3 nettotilfredshet
```

Dette ser sterkt ut isolert sett. Men undersøkelsen vises bare til brukere som *fullfører* transaksjonen – en kjent målefeil (se fallgruvene nedenfor). Kobler man den med fullføringsraten fra [tjenestestandarder og transaksjonsmål](../tjenestestandarder-og-transaksjonsmål/), ser man at fullføringen bare er 71 %, noe som betyr:

```
Den sanne tilfredsheten i populasjonen er ikke målt for de 29 % som ga opp underveis –
trolig den mest misfornøyde gruppen, siden å gi opp i seg selv er et sterkt negativt
signal som undersøkelsen aldri fanger opp.
```

**Illustrasjon på nasjonalt nivå (oppbygningen av en tillitsserie i OECD-stil)**: Tilliten til nasjonale myndigheter er rapportert til 42 % i år 1, faller til 34 % i år 2 (et krisår) og tar seg opp til 39 % i år 3 – et forløp som er typisk for mønsteret med sjokk og delvis bedring som OECD dokumenterer i medlemslandene etter store kriser.

## Sammenheng med programvareutvikling

Instrumenter tilfredshetsundersøkelser ved hvert meningsfylt avslutningspunkt i en brukerreise, ikke bare ved vellykket fullføring – den vanligste enkeltfeilen utviklere gjør på dette området, og en som i det stille gjør et tilfredshetsmål til et skjevt prangemål preget av overlevelsesskjevhet. Par om mulig tilfredshetsscoren med et fullførings- eller utfallsmål på samme dashbord, slik at et team ikke kan feire stigende tilfredshet mens fullføringen i det stille faller (se [kostnad per transaksjon](../kostnad-per-transaksjon/) og [digital inkludering](../digital-inkludering/) for hvem som utelukkes fra utvalget i digitale tilfredshetsundersøkelser i utgangspunktet – ikke-digitale brukere og brukere med digital assistanse er systematisk underrepresentert i undersøkelser i selve tjenesten). Tilfredshets- og tillitsdata mater også direkte inn i legitimitetsbenet i [Moores strategiske trekant](../offentlig-verdi/), og hører hjemme under perspektivene «kunde» og «legitimitet» i et [målekort for offentlig verdi](../scorecard-for-offentlig-verdi/) – se [mål på tillit og legitimitet](../mål-på-tillit-og-legitimitet/) for motstykket på institusjonsnivå til dette målet på tjenestenivå.

## Fallgruver

- **Overlevelsesskjevhet i undersøkelser ved fullføring**: Brukere som gir opp underveis ser aldri undersøkelsen, så en høy tilfredshetsscore i selve tjenesten kan eksistere side om side med lav fullføringsrate og en stor usynlig gruppe misfornøyde som ikke fullførte.
- **Å behandle tilfredshet som stedfortreder for utfall**: Et godt utformet grensesnitt for en dårlig utformet politikk scorer godt på tilfredshet og dårlig på utfall – rapporter alltid begge, og aldri det ene som erstatning for det andre.
- **Små, urepresentative utvalg rapportert med falsk presisjon**: En tilfredshetsscore fra noen hundre selvvalgte respondenter, oppgitt med én desimal, antyder en sikkerhet utvalgsstørrelsen ikke kan bære.
- **Å se bort fra oppdeling etter demografi**: Nasjonale tillits- og tilfredshetstall som ikke er brutt ned på alder, inntekt, funksjonsnedsettelse eller digital tilgang kan skjule sterkt ulike erfaringer i ulike grupper – et mønster OECDs egne «Trust in Government»-publikasjoner uttrykkelig deler opp.

## Kilder

- OECD, "Trust in Government." <https://www.oecd.org/en/topics/trust-in-government.html>
- UK Cabinet Office, "Civil Service People Survey" results.
  <https://www.gov.uk/government/collections/civil-service-people-survey-results>
- GOV.UK Service Manual, "Measuring Success." <https://www.gov.uk/service-manual/measuring-success>
