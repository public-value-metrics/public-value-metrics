# Logisk modell

En logisk modell er et lineært diagram som knytter sammen innsatsfaktorer, aktiviteter, leveranser (outputs), utfall (outcomes) og samfunnseffekt (impact) for et program. Den leses fra venstre mot høyre som en ansvarlighetskjede: ressurser går inn, aktiviteter gjennomføres, leveranser produseres, utfall endrer situasjonen for mottakerne, og samfunnseffekten viser seg over en bredere eller lengre tidshorisont. Det er den standardstrukturen finansiører og revisorer forventer at et program kan rapporteres mot, og den fremoverrettede motparten til en [endringsteori](../endringsteori/) som utledes baklengs.

## Hvorfor det er viktig

HM Treasurys Magenta Book angir den logiske modellen som et påkrevd element i utformingen av programevalueringer, og finansiører som National Lottery Community Fund bygger søknads- og rapporteringsmalene sine rundt nettopp denne kjeden med fem kolonner. Verdien er at den tvinger et program til å si i ett enkelt diagram hva det vil bruke, hva det vil gjøre med pengene, hva det vil produsere og – avgjørende – hva som skal endre seg som følge av det, med en presisjon som et avsnitt løpende tekst ofte tilslører. En logisk modell med utfylte kolonner for innsatsfaktorer og aktiviteter, men en tom eller vag utfallskolonne, kan diagnostiseres med et blikk, og det er nettopp derfor finansiører ber om en.

## Regnestykket

Den logiske modellen er en strukturell kjede snarere enn en formel:

```
Innsatsfaktorer  Aktiviteter       Leveranser          Utfall                Samfunnseffekt
(ressurser       (hva som gjøres   (direkte, tellbare  (endring for          (langsiktig endring på
 som er satt av)  med dem)          produkter)          mottakerne)           befolknings- eller
                                                                              systemnivå)
```

Hver kolonne bør være mer spesifikk enn den forrige: innsatsfaktorer er det du bruker, aktiviteter er det du gjør, leveranser er det som leveres uavhengig av virkning, utfall er det som endrer seg som følge av det – skillet er behandlet utførlig i [utfall versus leveranser](../utfall-versus-leveranser/) – og samfunnseffekt er den varige langsiktige endringen, som ofte bare delvis lar seg tilskrive programmet.

## Utregnet eksempel

**Kommune (digital gjeldsrådgivning)**:

- Innsatsfaktorer: årsbudsjett på £180 000, 4,0 årsverk rådgivere, et saksbehandlingssystem.
- Aktiviteter: oppsøkende virksomhet, individuelle gjeldsrådgivningstimer.
- Leveranser: 900 gjennomførte timer; 750 gjelds- og stønadsplaner utstedt.
- Utfall: av klientene som nådde en oppfølging etter 6 måneder rapporterer 60 % (450 av 750) lavere restanser, i gjennomsnitt en reduksjon på £1 200 per klient – £540 000 i samlet restansereduksjon.
- Samfunnseffekt: et målbart fall i antall søknader om bolig for bostedsløse blant tjenestens klienter over to år, bare delvis tilskrivbart denne tjenesten ved siden av andre tiltak (se [kontrafaktisk analyse](../kontrafaktisk-analyse/)).

**Veldedig organisasjon (samarbeid om henvisning til matbank)**:

- Innsatsfaktorer: £45 000, 1,5 årsverk koordinator, samarbeidsavtaler med 12 henvisende instanser.
- Aktiviteter: triagering av henvisninger, pakking og utdeling av matposer.
- Leveranser: 5 000 matposer delt ut til 1 100 husholdninger.
- Utfall: 68 % av de spurte husholdningene (748 av 1 100) rapporterer bedre matsikkerhet ved en oppfølgingssamtale etter 4 uker.
- Samfunnseffekt: bidrag til lavere etterspørsel etter lokale krisetjenester, dokumentert kun i samlet områdestatistikk og ikke tilskrivbart denne veldedige organisasjonen alene.

## Sammenheng med programvareutvikling

Den logiske modellen er nærmest en bokstavelig datamodell for et utfallssystem: innsatsfaktorer og aktiviteter er driftsdata du allerede har (utgifter, bemanning, øktlogger); leveranser er enkle å instrumentere fordi de telles der tjenesten leveres; utfall krever bevisst utformet datainnsamling i etterkant (spørreundersøkelser, kobling av forvaltningsdata) som ikke vil finnes med mindre noen bygger den; samfunnseffekt krever vanligvis koblede, longitudinelle data eller data på befolkningsnivå utover det noe enkeltprograms systemer rommer. Utviklere som bygger rapporteringsverktøy bør presse oppdragsgiverne til å definere indikatorer for utfall og samfunnseffekt allerede ved utformingen, i stedet for å havne på et dashbord med bare leveranser fordi det er det transaksjonsdataene allerede støtter. Se [sosial avkastning på investering](../sosial-avkastning-på-investering/) for en metode som verdsetter nettopp utfalls- og effektkolonnene, og [gevinstrealisering](../gevinstrealisering/) for å følge opp om effektkolonnen faktisk ble levert.

## Fallgruver

- **Å stoppe ved leveranser.** Et dashbord som rapporterer gjennomførte timer eller utdelte matposer og antyder nytte, rapporterer aktivitet, ikke resultater – se [utfall versus leveranser](../utfall-versus-leveranser/).
- **Ingen uttalt årsakssammenheng mellom kolonnene.** En logisk modell viser kjeden, men ikke hvorfor aktiviteter skal gi leveranser som skal gi utfall; den begrunnelsen hører hjemme i en [endringsteori](../endringsteori/), og en logisk modell uten en slik bak seg er uprøvd.
- **Å behandle den som et engangsdokument for søknaden.** Logiske modeller som bare lages for å tilfredsstille en finansieringssøknad og aldri oppdateres, slutter å gjenspeile det programmet faktisk gjør.
- **Tilskrivingsglidning i effektkolonnen.** Å hevde at endring på befolkningsnivå skyldes ett enkelt program alene, uten et kontrafaktisk scenario, overdriver hva evidensen kan støtte.

## Kilder

- HM Treasury, Magenta Book (2020), Chapter 3. <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, logic model guidance. <https://www.tnlcommunityfund.org.uk/>
- W.K. Kellogg Foundation, "Logic Model Development Guide" (2004). <https://www.wkkf.org/resource-directory/resources/2004/01/logic-model-development-guide>
