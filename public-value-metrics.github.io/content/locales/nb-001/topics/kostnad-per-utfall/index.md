# Kostnad per utfall

Kostnad per utfall er de samlede programutgiftene delt på antall personer som oppnår en definert, meningsfull endring i sin situasjon – ikke antallet som bare mottok en tjeneste. Det er det skarpeste effektivitetsmålet en finansiør eller et leveranseteam kan bruke, fordi det tvinger frem et forutgående spørsmål de fleste veldedige organisasjoner unngår: hva, helt presist, teller som suksess?

## Hvorfor det er viktig

En matbank kan rapportere to svært ulike tall fra samme års regnskap. Kostnad per utdelt matkasse kan være £15. Kostnad per husholdning som senere oppnår matsikkerhet – ikke lenger har behov for nødhjelp i form av mat, verifisert på et oppfølgingstidspunkt – kan være £340. Begge er sanne. Bare ett forteller en finansiør om pengene virker. Gapet mellom dem er gapet mellom en leveranse og et utfall: en utdelt kasse er en leveranse; en husholdning som ikke lenger er i krise er et utfall. Se [utfall versus leveranser](../utfall-versus-leveranser/).

Den britiske tredje sektor har brukt to tiår på å bygge infrastruktur som tvinger frem dette skillet. New Philanthropy Capitals «four pillar approach» til effektivitet i veldedighet ber uttrykkelig organisasjoner oppgi utfallene sine før leveransene, og Inspiring Impact – det finansiørstøttede samarbeidet om effektmåling i Storbritannia – publiserer en Outcomes Matrix som mange tilskuddssøknader nå krever at organisasjoner fyller ut. Trussell Trusts årlige forskningsprogram «State of Hunger», gjennomført sammen med Heriot-Watt University, finnes nettopp fordi antall matkasser alene ikke sier noe om hvorvidt folk kommer ut av matusikkerhet.

Kostnad per utfall betyr bare noe når det kontrafaktiske scenarioet er fastlagt: et utfall som ble oppnådd «uansett» er ikke et utfall programmet kjøpte. Se [kontrafaktisk analyse](../kontrafaktisk-analyse/) og [fortrenging og tilskrivning](../fortrengning-og-attribusjon/).

## Regnestykket

```
Kostnad per utfall = samlede programkostnader / antall mottakere som oppnår det definerte utfallet

der:
  Samlede programkostnader = direkte leveransekostnad + rimelig andel av administrasjon
  Definert utfall          = en på forhånd spesifisert, målbar tilstandsendring
                              (f.eks. «matsikker ved oppfølging etter 6 måneder»,
                              ikke «mottok en matkasse»)
```

Sammenlign med [enhetskostnadsdatabaser](../enhetskostnadsdatabaser/) (f.eks. sektorspesifikke referanser for enhetskostnader) for å vurdere om en gitt kostnad per utfall er god, gjennomsnittlig eller dårlig i forhold til sammenlignbare tiltak.

## Utregnet eksempel

**Matbank, ett år**:

- Samlede programkostnader: £450 000
- Utdelte kasser: 30 000
- Kostnad per kasse (et leveransemål): £450 000 / 30 000 = **£15**

Organisasjonen gjennomfører også en oppfølgingsundersøkelse etter seks måneder blant et utvalg husholdninger, og finner at 35 % av husholdningene som mottok tre eller flere kasser oppgir at de ikke lenger trenger matnødhjelp og skårer over terskelen for matsikkerhet i en standard modul for matsikkerhetsundersøkelser. Av 1 800 husholdninger som mottok tre eller flere kasser det året, oppnår 630 dette utfallet.

```
Kostnad per utfall = £450 000 / 630 = £714 per husholdning som oppnår matsikkerhet
```

Det tallet på £714 er det en finansiør som sammenligner denne organisasjonen med et pilotprosjekt med kontantoverføring eller en gjeldsrådgivningstjeneste bør bruke – ikke £15. Hvis et sammenlignbart program med kontantoverføring i samme region oppnår matsikkerhet for £500 per husholdning, er matbanken ikke åpenbart den mest effektive veien til samme utfall, selv om kostnaden per kasse ser billig ut.

## Sammenheng med programvareutvikling

De fleste saksbehandlingssystemer er bygget for å logge leveranser, fordi leveranser er det som skjer inne i transaksjonen (en kasse deles ut, et skjema sendes inn). Utfall skjer som regel senere, ofte utenfor systemets vanlige registreringsvindu, og krever en bevisst designbeslutning: bygg en oppfølgingsmekanisme (en utløser for spørreundersøkelse, en arbeidsflyt for ny kontakt, en datakobling) som en fullverdig funksjon, ikke noe som klistres på i ettertid til en årsrapport. Utviklere som bygger plattformer for tilskuddsforvaltning eller saksbehandling for sektoren bør behandle «hva er utfallshendelsen, og hvordan observerer vi den» som et kravspørsmål som stilles før datamodellen låses – det er langt vanskeligere å ettermontere et utfallsfelt enn en leveransetteller. Se [utfall versus leveranser](../utfall-versus-leveranser/) og [logisk modell](../logisk-modell/) for hvordan den kravsamtalen kan struktureres, og [kostnad per mottaker](../kostnad-per-mottaker/) for det raskere, grovere måltallet team strekker seg etter når utfallssporing ennå ikke er bygget.

## Fallgruver

- **Å rapportere leveranser forkledd som utfall.** «Personer nådd» er ikke «personer hjulpet». Hvis måltallet kan produseres av en systemlogg uten oppfølgingskontakt, er det nesten helt sikkert en leveranse.
- **Manipulering av nevneren.** Å snevre inn utfallspopulasjonen til «de som fullførte programmet» fjerner i det stille de som falt fra – ofte de vanskeligste tilfellene – og blåser opp den tilsynelatende raten. Oppgi nevneren som alle som begynte, ikke alle som fullførte.
- **Intet kontrafaktisk scenario.** Å telle alle som oppnådde utfallet, også de som ville ha gjort det uansett, overdriver hva programmet kjøpte. Se [kontrafaktisk analyse](../kontrafaktisk-analyse/).
- **Å sammenligne på tvers av uforenlige utfallsdefinisjoner.** «Matsikker» målt med en validert undersøkelsesmodul er ikke sammenlignbart med «matsikker» selvrapportert i et tilfredshetsskjema; en rangeringsliste over kostnad per utfall er bare ærlig når utfallsdefinisjonene stemmer overens.

## Kilder

- New Philanthropy Capital (NPC), "Four Pillar Approach" to charity effectiveness. <https://www.thinknpc.org/resource-hub/four-pillar-approach/>
- Inspiring Impact, Outcomes Matrix and impact measurement resources. <https://inspiringimpact.org/>
- Trussell Trust and Heriot-Watt University, "State of Hunger" research programme. <https://www.trusselltrust.org/state-of-hunger/>
- GiveWell, "Our criteria" (cost-effectiveness as the leading criterion for charity recommendation). <https://www.givewell.org/how-we-work/our-criteria>
