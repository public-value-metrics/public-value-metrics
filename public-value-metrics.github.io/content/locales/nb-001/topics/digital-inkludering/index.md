# Digital inkludering

Digital inkludering er disiplinen å sørge for at «digitalt som standard» ikke blir til «bare digitalt» – at offentlige tjenester utformet rundt den billigste kanalen fortsatt fungerer for innbyggere som ikke kan eller vil bruke den uten hjelp. GDS skapte den konkrete leveransemekanismen, «assistert digital», som et obligatorisk krav for hver digitale statlige tjeneste, ikke et valgfritt tillegg.

## Hvorfor det er viktig

Government Digital Strategy fra 2012 fastsatte ambisjonen klart: digitale tjenester skal bygges digitale som standard, men strategien erkjente selv at rundt 10 % av britiske voksne ikke ville kunne bruke dem uten hjelp, og forpliktet departementene til å tilby assistert digital støtte – en menneskeformidlet vei, over telefon, personlig eller via en mellommann – som del av tjenesten, ikke som en separat reserveløsning klistret på senere. Den forpliktelsen er nå punkt 5 i [digital-service-standard](../standard-for-digitale-tjenester/), «sørg for at alle kan bruke tjenesten». Omfanget av vedvarende utestengelse følges av Lloyds Banking Groups årlige UK Consumer Digital Index: utgaven for 2024 fant at rundt 1,6 millioner mennesker i Storbritannia fortsatt er uten internett, og at denne gruppen er sterkt overrepresentert blant 70–79-åringer, blant dem som tjener under £35 000 og blant pensjonister eller arbeidsledige – nøyaktig den befolkningen som er mest avhengig av de offentlige tjenestene som redesignes. Samme rapport fant at bare 48 % av arbeidsstyrken i Storbritannia kunne utføre alle 20 oppgavene i rammeverket Essential Digital Skills, noe som betyr at utestengelse ikke er binær tilkobling, men et spekter av ferdigheter, selvtillit og tillit som et enkelt måltall om «har bredbånd» overser fullstendig.

## Regnestykket

Digital inkludering er et rammeverk og en likhetssjekk snarere enn en enkelt formel, men det kan kombineres med kvantitativ verdivurdering gjennom [fordelingsvekting](../fordelingsvekting/):

```
Naiv verdi av kanalskifte:
  verdi = flyttet volum × (kostnad_gammel − kostnad_digital)     [se channel-shift-savings]

Inkluderingsjustert verdi:
  verdi = (flyttet volum × uvektet besparelse)
        − (utestengte brukere × kostnad ved assistert digital tilbud)
        − (justering for fordelingsvekt for skade på utestengte
           grupper som mister tilgang eller møter svekket tjenestekvalitet)

Assistert digital er ikke restkostnaden ved svikt – det er en
designet kanal med sin egen [kostnad per transaksjon](../kostnad-per-transaksjon/),
typisk langt høyere per transaksjon enn digital selvbetjening, men
likevel som regel billigere enn den eldre kanalen den delvis erstatter.
```

## Utregnet eksempel

**Nasjonal ytelsestjeneste i Universal Credit-stil**: 2,5 millioner krav per år, vurdert til å trenge assistert digital støtte for anslagsvis 10 % av søkerne i henhold til planleggingsforutsetningen i Government Digital Strategy.

```
Utestengt/assistert-digital gruppe = 2 500 000 × 10 % = 250 000 krav per år

Kostnad for assistert digital kanal (telefon + personlig støtte,
bemannet for å håndtere sårbarhet og kompleksitet) ≈ £9,50/krav
  = 250 000 × £9,50 = £2 375 000 per år

Digital selvbetjening for de øvrige 90 % ≈ £0,40/krav
  = 2 250 000 × £0,40 = £900 000 per år

Blandet kostnad per transaksjon = (2 375 000 + 900 000) / 2 500 000
  = £1,31/krav

Et design som hopper over assistert digital for å nå en lavere
kostnad per transaksjon i hovedtallet (f.eks. £0,40 blandet, uten
de 250 000 utestengte kravene) eliminerer ikke de £2,375 mill. –
det omgjør dem til uavhentede rettigheter, klager og etterfølgende
etterspørsel etter krisetjenester som havner på et helt annet budsjett.
```

## Sammenheng med programvareutvikling

Assistert digital er en designet kanal, noe som betyr at den har grensesnitt, tjenestenivåavtaler og instrumentering som enhver annen: et telefonbasert verktøy for saksbehandlere, en mellommannsportal for Citizens Advice eller en kommune, eller en personlig kioskflyt. Å behandle den som en ettertanke – et telefonnummer med liten skrift i stedet for en kanal som er vurdert fra oppdagelsesfasen – er den vanligste måten tjenester feiler punkt 5 i [digital-service-standard](../standard-for-digitale-tjenester/) ved vurdering. Digital inkludering er likhetslinsen på alle de andre temaene i denne gruppen: den setter et tak for hvor aggressivt [besparelser ved kanalskifte](../besparelser-ved-kanalskifte/) kan realiseres, den er en post som ærlig må inngå i [kostnad per transaksjon](../kostnad-per-transaksjon/), og den er den direkte anvendelsen av [fordelingsvekting](../fordelingsvekting/) i en kontekst for digitale tjenester – en besparelse som rammer uforholdsmessig mye de som allerede er digitalt og økonomisk utestengt, bør vektes ned, ikke behandles som likeverdig med en besparelse jevnt fordelt over befolkningen.

## Fallgruver

- **«Digitalt som standard» lest som «bare digitalt»**: å stenge telefonlinjen eller skranken når digital bruk passerer en terskel, uten å kontrollere at den gjenværende gruppen har et genuint brukbart alternativ.
- **Å måle inkludering ved binær tilkobling**: «har bredbånd» eller «eier en smarttelefon» er en dårlig indikator på evnen til å fullføre en bestemt transaksjon – gapet i Essential Digital Skills (bare 48 % av arbeidsstyrken i Storbritannia fullfører alle 20 oppgavene, ifølge Lloyds 2024) viser at ferdigheter og selvtillit betyr like mye som tilgang.
- **Å kostnadsberegne assistert digital som en avrundingsfeil**: å budsjettere den som en liten reservepost i stedet for en ordentlig kanal med egen [kostnad per transaksjon](../kostnad-per-transaksjon/), for så å bli overrasket når den er underfinansiert og underbemannet ved lansering.
- **Å undersøke bare vellykkede digitale fullførere**: tilfredshets- og brukbarhetsforskning som kjøres helt inne i tjenesten, går glipp av de som aldri kom så langt, som er nettopp den gruppen digitalt inkluderingsarbeid skal beskytte.

## Kilder

- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
- GOV.UK Service Manual, service standard, point 5: make sure everyone can use the service. <https://www.gov.uk/service-manual/service-standard/point-5-make-sure-everyone-can-use-the-service>
- Lloyds Banking Group, Consumer Digital Index. <https://www.lloydsbank.com/banking-with-us/whats-happening/consumer-digital-index.html>
- Ofcom, digital exclusion review. <https://www.ofcom.org.uk/>
