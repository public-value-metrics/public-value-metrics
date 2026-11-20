# Standard for digitale tjenester

GOV.UK Service Standard er porten hver digitale tjeneste i sentralforvaltningen må passere før den kan settes i drift: 14 publiserte punkter, vurdert av et uavhengig panel ved slutten av hver leveransefase. Det er mekanismen som gjør «bygg gode offentlige tjenester» fra en slagord til en bestått/ikke bestått-beslutning med dokumentasjonsspor – og den direkte etterkommeren av mandatet om «digitalt som standard» i Government Digital Strategy fra 2012.

## Hvorfor det er viktig

Før Service Standard fantes, var IT-svikt i forvaltningen sjelden synlig før lansering, og sjelden mulig å tilskrive en beslutning noen kunne peke på. Government Digital Strategy fra 2012 forpliktet departementene til å redesigne de 25 mest brukte transaksjonstjenestene mot publikum som «digitalt som standard», og underbygde forpliktelsen med en kontrollmekanisme: Tjenester kunne ikke gå i drift på GOV.UK uten å bestå en tjenestevurdering mot det som den gang var en standard med 26 punkter (konsolidert til 18 i 2019, og nå standarden med 14 punkter som gjelder i dag, fordelt på tre grupper – forstå brukerbehov, levere en god tjeneste og bruke riktig teknologi). En tjenestevurdering er en reell begivenhet: Et panel av GDS- eller departementsvurderere gjennomgår dokumentasjon, stiller spørsmål til teamet og avgir en dom – bestått, ikke bestått eller «ikke oppfylt» – for hvert punkt, publisert på tjenestens vurderingsside. En ikke bestått vurdering stopper tjenesten fra å gå fra privat beta til offentlig beta, eller fra beta til drift – det er en reell port, ikke en gjennomgang.

## Regnestykket

Service Standard er et rammeverk, ikke en formel, men fungerer som en faseinndelt beslutningsstruktur:

```
Utforsking → Alfa-vurdering   → Beta-vurdering    → Driftsvurdering
             (ikke obligatorisk  (obligatorisk før   (obligatorisk før
              for alle tjenester, offentlig beta)    «beta»-merket fjernes
              men anbefalt)                          og den gamle kanalen lukkes)

Hver vurdering: dokumentasjon + teamintervju → panelets dom per punkt
  Oppfylt / Delvis oppfylt / Ikke oppfylt
Samlet utfall: Bestått / Bestått med vilkår / Ikke bestått (ny vurdering kreves)

Kostnaden ved en ikke bestått ≈ kostnaden for neste sprintsyklus for å rette opp
              + forsinkelsen i [channel-shift-savings](../besparelser-ved-kanalskifte/)
                som tjenesten ble finansiert for å levere
```

Punkt 10 («definer hva suksess ser ut som, og publiser resultatdata») er det som mater [kostnad per transaksjon](../kostnad-per-transaksjon/) og [tjenestestandarder og transaksjonsmål](../tjenestestandarder-og-transaksjonsmål/) – standarden pålegger målingen, ikke bare tjenesten.

## Utregnet eksempel

**Kommunal boligsøknadstjeneste**: Et kommunalt team kommer til sin beta-vurdering med en tjeneste som oppfyller 11 av 14 punkter, men ikke består punkt 5 («sørg for at alle kan bruke tjenesten») fordi det ikke finnes noen digital assistanse for søkere uten internettilgang, og ikke består punkt 9 fordi personopplysninger logges i klartekst i feilspor fra søknadsløsningen.

```
Direkte kostnad ved ikke bestått:
  Ny vurdering: 6–8 ukers ventetid på neste ledige panel
  Utbedringssprint: 2 utviklere × 3 uker × £550/dag ≈ £34 650
  Design av kanal med digital assistanse: 1 forsker × 2 uker ≈ £5 000

Forsinkelseskostnad: tjenesten var forventet å flytte 40 % av 18 000/år
bolighenvendelser fra telefonsamtaler til £8,50 til digitale transaksjoner til £0,20
  = 7 200 × (£8,50 − £0,20) = £59 760/år gått glipp av, forholdsmessig for
    ca. 2 måneders forsinkelse ≈ £9 960

Samlet kostnad ved den mislykkede vurderingen ≈ £49 610
```

Poenget med regnestykket er ikke presisjonen, men at en mislykket vurdering har en reell, beregnbar pris – og det er nettopp derfor porten har tenner.

## Sammenheng med programvareutvikling

For utviklere leses standarden like mye som en sjekkliste for arkitektur og leveranse som et policydokument: Punkt 11 («velg riktige verktøy og teknologi») og punkt 12 («gjør ny kildekode åpen») er direkte tekniske beslutninger, og punkt 14 («drift en pålitelig tjeneste») krever de samme tjenestenivåmålene (SLO-er) og hendelsesprosessene som ethvert produksjonssystem trenger. Den er paraplyrammeverket for denne gruppen av temaer – [kostnad per transaksjon](../kostnad-per-transaksjon/) og [besparelser ved kanalskifte](../besparelser-ved-kanalskifte/) er det standarden prøver å beskytte økonomisk, [digital inkludering](../digital-inkludering/) er det punkt 5 finnes for å garantere, og komponenter i [staten som plattform](../staten-som-plattform/) (GOV.UK Notify, Pay, One Login) oppfyller punkt 13 («bruk og bidra til åpne standarder, felles komponenter og mønstre») stort sett som standard. Se også [utvikle selv eller kjøpe i offentlig forvaltning](../utvikle-selv-eller-kjøpe-i-offentlig-forvaltning/) for hvordan punktet om «riktige verktøy» spiller ut i innkjøpsbeslutninger.

## Fallgruver

- **Å behandle vurderingen som en etterlevelsessjekk på lanseringsdagen**: Team som først leser de 14 punktene en uke før beta-vurderingen, stryker forutsigbart – standarden skal forme beslutninger fra utforskingen og utover, ikke revidere dem i ettertid.
- **Å vurdere prototypen, ikke tjenesten**: En blank demo kan bestå en gjennomgang som den levende, inkluderende (med digital assistanse) og hendelsesstyrte versjonen av tjenesten ville stryke i – vurdererne skal lete etter dette gapet, men selvsertifiserte mindre tjenester hopper ofte over det.
- **Ingen ny vurdering før skalering**: En tjeneste som er vurdert ved 5 % utrulling, forblir ikke automatisk i samsvar ved 100 % – belastning, feiletterspørsel og brukere i grensetilfeller endrer seg alle.
- **Å forveksle Service Standard med et designsystem**: Komponenter fra GOV.UK Design System oppfyller noen punkter (konsistens, tilgjengelighet), men standarden dekker også teamstruktur, smidig praksis og dataetikk – en tjeneste med pent design kan fortsatt stryke på punkt 2, 6 eller 9.

## Kilder

- GOV.UK Service Manual, Service Standard. <https://www.gov.uk/service-manual/service-standard>
- GOV.UK Service Manual, point 14: operate a reliable service. <https://www.gov.uk/service-manual/service-standard/point-14-operate-a-reliable-service>
- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
- GOV.UK Service Manual, service assessments. <https://www.gov.uk/service-manual/service-assessments>
