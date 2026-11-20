# Flytmål i offentlig leveranse

Flytmål – Littles lov, grenser for pågående arbeid (WIP) og flyteffektivitet – beskriver hvor raskt arbeid beveger seg gjennom et system med begrenset kapasitet. En sprinttavle er ett slikt system. En kø av stønadssøknader, et register over byggesøknader eller en etterslepsliste av visumsaker er nøyaktig den samme matematikken i en annen uniform.

## Hvorfor det er viktig

Saksmengder i forvaltningen er køsystemer, og køsystemer følger køteoriens lover enten noen måler dem eller ikke. Lovfestede behandlingsfrister gjør dette eksplisitt: Under plan- og bygningsregimet (Town and Country Planning) har de fleste mindre byggesøknader et lovfestet mål om avgjørelse innen 8 uker og store søknader 13 uker – en forpliktelse på gjennomløpstid bygget rett inn i loven. Home Offices etterslep i asylsaker, gransket gjentatte ganger av National Audit Office og Home Affairs Select Committee, er et godt dokumentert tilfelle av et offentlig system der pågående arbeid vokste raskere enn gjennomstrømningen over lang tid, og drev gjennomløpstidene langt over enhver lovfestet eller forventet tjenestestandard. Flytmål gir både utviklere og saksbehandlingsledere et felles, kvantitativt språk for nettopp denne feilmodusen, i stedet for å la den bli et kvalitativt «etterslepsproblem».

## Regnestykket

```
Littles lov:  WIP = gjennomstrømning × gjennomløpstid
           →  gjennomløpstid = WIP / gjennomstrømning

Flyteffektivitet = aktiv (berørt) tid / total gjennomløpstid   (Vacanti)

Effekt av WIP-grense: ved fast gjennomstrømning halverer en halvert WIP omtrent
den gjennomsnittlige gjennomløpstiden (Littles lov omskrevet) – spaken som er
tilgjengelig uten å øke bemanningen.
```

Se [DORA-målinger for offentlig verdi](../dora-målinger-for-offentlig-verdi/) for den tilsvarende matematikken brukt på programvarens utrullingsløp i stedet for saksbehandling.

## Utregnet eksempel

**Kommunal plan- og byggesaksavdeling**: 400 søknader er åpne til enhver tid (WIP), og teamet avgjør 50 søknader i uken (gjennomstrømning).

```
Gjennomløpstid = WIP / gjennomstrømning = 400 / 50 = 8 uker
```

Det treffer nøyaktig det lovfestede målet på 8 uker for mindre søknader – uten noen slingringsmonn, noe som betyr at enhver variasjon i innkommende etterspørsel eller høringsinstansenes svartid presser avgjørelsene over den lovfestede fristen.

**Flyteffektivitet**: Av disse 8 ukene (56 kalenderdager) har en søknad typisk rundt 6 timer faktisk saksbehandlingstid.

```
Flyteffektivitet = 6 timer / (56 dager × 8 arbeidstimer/dag)
                = 6 / 448 ≈ 1,3 %
```

Vacantis referanse for programvareteam setter typisk flyteffektivitet til 15–20 %. Offentlig saksbehandling, med flere lovpålagte overleveringer til høringsinstanser og offentlige høringsvinduer, ligger ofte en størrelsesorden lavere. De 98,7 % «ventetid» er der de åtte ukene faktisk går – ikke i saksbehandlernes kapasitet.

**Tiltak med WIP-grense**: Å begrense åpne søknader per saksbehandler til 15 i stedet for ubegrensede 25 (med uendret gjennomstrømning) flytter WIP fra 400 til omtrent 240 i et team på 16 personer:

```
Ny gjennomløpstid = 240 / 50 = 4,8 uker
```

En nær halvering av gjennomløpstiden fra en endring i arbeidsmåte, ikke økt bemanning – den samme spaken DORA-orienterte leveranseteam bruker når de begrenser WIP i sprinten.

## Sammenheng med programvareutvikling

Flytmål er det felles språket mellom et leveranseteams Kanban-tavle og saksbehandlingsgulvet det bygger programvare for: En saksbehandlers kø og en kø av pull requests styres begge av Littles lov, og begge sprenger gjennomløpstidsmålene på samme måte – for mye WIP i forhold til gjennomstrømning. Dette har direkte betydning for [forsinkelseskostnad i offentlige programmer](../forsinkelseskostnad-i-offentlige-programmer/): gjennomløpstid × forsinkelseskostnad er pundene som står i køen til enhver tid. Det har også betydning for [tjenestestandarder og transaksjonsmål](../tjenestestandarder-og-transaksjonsmål/), der et publisert mål for behandlingstid er en forpliktelse på gjennomløpstid som bare flytmål kan diagnostisere når den ikke nås. Et saksbehandlingssystems programvare bør vise WIP og gjennomløpstid som likeverdige driftsmål, ikke gjemme dem i et saksbehandlingssystem ingen spør.

## Fallgruver

- **Å innføre WIP-grenser uten å fikse den reelle flaskehalsen**: Hvis begrensningen er en ekstern lovpålagt høringsinstans' svartid, flytter en grense for saksbehandlernes WIP bare køen oppstrøms i stedet for å gjøre den kortere.
- **Å behandle flyteffektivitet som et mål å jukse med**: Å skynde seg på de 1,3 % aktiv tid flytter knapt gjennomløpstiden – gevinsten ligger nesten alltid i ventetilstandene, som vanligvis betyr omlegging av prosessen, ikke raskere saksbehandlere.
- **Å overse variasjon**: Littles lov beskriver gjennomsnitt. En saksmengde med stor variasjon i etterspørselen trenger bufferkapasitet, ikke bare en strammere WIP-grense, ellers vil lovfestede frister fortsatt brytes i den svingende halen selv om gjennomsnittet bedres.
- **Inkonsekvent måling av WIP**: En sak som er «åpen» i journalsystemet men egentlig står stille og venter på en tredjepart, er fortsatt WIP. Å utelate den pynter på tallene uten å endre virkeligheten innbyggerne møter.

## Kilder

- Vacanti D, *Actionable Agile Metrics for Predictability: An Introduction*, Actionable Agile Press, 2015.
- Reinertsen DG, *The Principles of Product Development Flow*, Celeritas Publishing, 2009.
- Ministry of Housing, Communities and Local Government, planning application statutory timescales. <https://www.gov.uk/guidance/making-an-application>
- National Audit Office, reports on Home Office asylum casework and accommodation. <https://www.nao.org.uk/>
