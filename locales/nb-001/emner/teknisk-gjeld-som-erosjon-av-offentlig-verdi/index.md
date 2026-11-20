# Teknisk gjeld som erosjon av offentlig verdi

Teknisk gjeld er Ward Cunninghams metafor fra 1992 for den underforståtte fremtidige kostnaden av hastige kodebeslutninger i fortiden: en **hovedstol** (utbedringsarbeidet man skylder) og en **rente** (den løpende bremseeffekten den har på leveransene). I et gammelt IT-landskap i forvaltningen betales denne renten direkte av offentlig verdi – tregere levering av lovendringer, høyere feilrater i innbyggerrettede tjenester og et skrumpende miljø av folk som i det hele tatt kan røre systemet trygt.

## Hvorfor det er viktig

Eldre stormaskin- og COBOL-systemer i britiske departementer – HMRC og DWP er blant de mest nevnte – bærer en veldokumentert og økende risiko som National Audit Office gjentatte ganger har påpekt, blant annet i rapporten *Digital Transformation in Government* (<https://www.nao.org.uk/>): aldrende plattformer som er dyre å endre, stadig vanskeligere å sikre, og avhengige av en spesialistarbeidsstyrke som går av med pensjon raskere enn den erstattes. I motsetning til en etterslepsliste i privat sektor ligger denne gjelden direkte mellom innbyggerne og deres lovfestede rettigheter – en beregningsmotor for ytelser som ikke kan endres trygt, er en begrensning for gjennomføring av politikk, ikke bare et ubehag for utviklerne. Omstarten av IT-programmet for Universal Credit i 2013, da National Audit Office fant at det opprinnelige systemet ikke ville gi verdi for pengene og en betydelig del av programvareverdiene måtte avskrives, er et klassisk eksempel på uprisset teknisk gjeld som innhenter et pågående og politisk synlig offentlig program.

## Regnestykket

```
SQALE-hovedstol = Σ over regelbrudd (utbedringstid) × utviklerens kostnadssats
Teknisk gjeldsgrad (TDR) = utbedringskostnad / gjenutviklingskostnad × 100
                    (SonarQube-karakterer: A ≤5 %, B ≤10 %, C ≤20 %, D ≤50 %)

Rente (tallet som begrunner nedbetaling):
  rente/år = Δ leveransehastighet × verdi per enhet hastighet
           + Δ hendelsesrate i innbyggerrettede tjenester × kostnad per hendelse
           + spesialistkompetansepremie × berørt antall ansatte
Nedbetalingscase = nåverdi(rente som unngås over horisonten) − utbedringskostnad
               (diskontert med Green Books samfunnsmessige diskonteringsrate, se
               social-discount-rate.md)
```

Hovedstolen angir forpliktelsen; renten er det som gir investeringscasen overfor en offentlig kontrollkomité.

## Utregnet eksempel

En behandlingsmotor for krav på 250 000 kodelinjer skrevet i et eldre 4GL-språk. Med CAST Appmarq-referansen på omtrent $3,61 teknisk gjeld i hovedstol per kodelinje (≈£2,85 med typisk vekslingskurs):

```
Hovedstol ≈ 250 000 × £2,85 ≈ £712 500
TDR ≈ 16 % (karakter C)
```

Målt rente: departementet beholder tre spesialistkonsulenter med 40 % høyere dagssats enn vanlige seniorutviklere, fordi intern kompetanse har forsvunnet – ekstra £180 000 i året på et team på seks personer. Systemet forårsaker også fire store behandlingsstopp i året, som hver setter beslutninger på vent for rundt 5000 søkere og omdirigerer dem til kontaktsenteret til omtrent £25 per samtale:

```
Rente ≈ £180 000 (kompetansepremie)
      + 4 × 5 000 × £25 = £500 000 (kostnad for omdirigerte henvendelser)
      ≈ £680 000/år
```

Målrettet utbedring av de dårligst fungerende modulene koster £1 200 000 og er modellert til å kutte renten med 70 %:

```
Rentereduksjon = 0,70 × 680 000 = £476 000/år
Tilbakebetalingstid ≈ 1 200 000 / 476 000 ≈ 2,5 år
```

Målrettingen betyr noe: å utbedre kode som sjelden røres gir ingenting, fordi renten er konsentrert der endringsfrekvens og gjeldstetthet begge er på topp.

## Sammenheng med programvareutvikling

Den offentlige verdirammen som løfter en case om teknisk gjeld ut over «koden er gammel»: uttrykk det gamle IT-landskapet som en oversikt over hvor tapt leveringskapasitet er konsentrert, og knytt det eksplisitt til [totalkostnad for eierskap](../totalkostnad-for-eierskap-i-offentlig-it/), siden renten er en driftskostnad som hører hjemme i TCO-linjen uansett om økonomiavdelingen noen gang har bedt om den. Gjeldstunge systemer har også uforholdsmessig stor eksponering for [cybersikkerhetsrisiko](../verdien-av-cybersikkerhet-i-offentlig-sektor/), fordi oppdateringsfrekvens og gjeldstetthet henger sammen – et system som ikke kan patches er teknisk gjeld der renten betales i hendelsesrisiko og ikke i pund. Og hver avveining mellom utbedring og nye funksjoner er i seg selv en beslutning om [forsinkelseskostnad](../forsinkelseskostnad-i-offentlige-programmer/): å betale ned gjeld forsinker neste lovendring, som har sin egen forsinkelseskostnad som må veies mot renten som spares.

## Fallgruver

- **Rapportering av bare hovedstolen**: et stort, skremmende utbedringsanslag uten et rentetall begrunner ingenting overfor den som godkjenner bevilgningen.
- **Verktøygenererte gjeldstall tatt bokstavelig**: skannere i SQALE-stil teller regelbrudd. De går glipp av den dyre typen gjeld – arkitekturbeslutninger og udokumenterte forretningsregler fra eldre system – mens de flagger bagateller.
- **«Omskrivingen unngår alt dette»**: erstatningsprogrammer må tåle den samme disiplinen som enhver annen virksomhetscase – kontrafaktisk kostnad, sannsynlighet for suksess og diskontering – ikke en fritakelse fra den, slik omstarten av Universal Credit i 2013 viste.
- **Gjeldsfri utopisme**: det optimale gjeldsnivået er ikke null. Gjeld er en spak som kjøpte tidligere levering. Det levende spørsmålet er alltid renten, ikke om gjeld finnes.

## Kilder

- Cunningham W, «The WyCash Portfolio Management System», OOPSLA-erfaringsrapport, 1992.
- CAST, technical debt estimation (Appmarq-referanse). <https://www.castsoftware.com/glossary/technical-debt-estimation>
- National Audit Office, *Digital Transformation in Government* og rapporter om Universal Credit. <https://www.nao.org.uk/>
