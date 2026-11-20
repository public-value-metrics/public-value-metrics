# Verdi for pengene

Verdi for pengene er den britiske offentlige sektorens formelle test på om bruk av midler gir den best tilgjengelige balansen mellom kostnad og nytte. HM Treasurys Green Book rammer det inn gjennom tre «E-er» – økonomi (economy), effektivitet (efficiency) og virkningsfullhet (effectiveness) – med likhet (equity) stadig oftere argumentert som en omstridt fjerde. Enhver virksomhetscase i offentlig sektor som skal tåle granskning, må svare eksplisitt på alle tre, ikke bare påstå at pengebruken er «verdt det».

## Hvorfor det er viktig

Verdi for pengene er ikke et synonym for «billig». Green Book (HM Treasury, utgaven fra 2022) er eksplisitt på at det å kjøpe det rimeligste alternativet (økonomi) uten å kontrollere at det gir de ønskede utfallene (virkningsfullhet), er en vanlig og kostbar feil – en anskaffelse som sparer 10 % på enhetskostnad, men leverer 40 % mindre effekt, gir dårligere verdi, ikke bedre. Rammeverket med tre E-er tvinger en virksomhetscase til å skille mellom tre genuint ulike feiltyper: å betale for mye for innsatsfaktorer, å sløse innsatsfaktorer i omdanningen til leveranser, og å produsere leveranser som ikke omsettes til utfall noen ønsket. Britiske utgiftskontroller – Treasurys godkjenningspunkter, National Audit Offices (NAO) studier av verdi for pengene og departementenes vurderinger fra regnskapsansvarlig – er bygget rundt denne tredelte testen, så en teknisk virksomhetscase som bare behandler kostnad (økonomi) vil feile granskningen selv om teknologien er god.

Den «fjerde E-en», likhet, er omstridt nettopp fordi den kan komme i konflikt med de tre andre: den mest effektive måten å levere en tjeneste nasjonalt på er sjelden den mest rettferdige, siden å konsentrere leveransen der innbyggerne er billigst å nå ofte betyr å underbetjene de som er vanskeligst å nå. Green Books revisjon i 2020 svarte på kritikk (blant annet fra Treasury Select Committee og IPPR North i 2020) om at rene nytte-kostnadsforhold systematisk favoriserte allerede velstående regioner, ved å kreve at analyser eksplisitt tar for seg fordelingsvirkninger – se [fordelingsvekting](../fordelingsvekting/).

## Regnestykket

Verdi for pengene er ikke ett enkelt forhold, men en tredelt (eller firedelt) diagnose som anvendes i rekkefølge:

```
Økonomi:         Kjøpes innsatsfaktorene til lavest rimelige kostnad for den
                 nødvendige kvaliteten?  (£ per enhet innsatsfaktor)

Effektivitet:    Hvor godt omdannes innsatsfaktorer til leveranser?
                 (leveranser / innsatsfaktorer, f.eks. saker behandlet per saksbehandlertime)

Virkningsfullhet: Gir leveransene faktisk de tiltenkte utfallene?
                 (utfall oppnådd / utfall tiltenkt)

[Likhet]:        Er kostnader og nytte fordelt rettferdig i befolkningen,
                 eller konsentrert hos dem som trenger det minst?
```

Et brudd på verdi for pengene kan oppstå på hvert trinn uavhengig: økonomisk anskaffelse med ineffektiv leveranse, effektiv leveranse av feil leveranse, virkningsfulle utfall kjøpt til altfor høy kostnad. Se [KPI-er i offentlig sektor](../nøkkeltall-i-offentlig-sektor/) for hvordan dette oversettes til målbare indikatorer, og [kostnadseffektivitetsanalyse i offentlig sektor](../kostnadseffektivitetsanalyse-i-offentlig-forvaltning/) for den formelle sammenligningsmetoden.

## Utregnet eksempel

**Kontaktsenter i en lokal myndighet**: en kommune sammenligner to alternativer for et nytt saksbehandlingssystem.

- *Alternativ A*: £600 000 i lisens (det billigste tilgjengelige), men saksbehandlerne bruker fortsatt i gjennomsnitt 22 minutter per sak fordi arbeidsflyten krever manuell omregistrering mellom systemer – effektiviteten er dårlig.
- *Alternativ B*: £900 000 i lisens, integrert arbeidsflyt, saksbehandlerne bruker i gjennomsnitt 9 minutter per sak.

Økonomi alene favoriserer A (£300 000 billigere). Men ved 40 000 saker i året koster A 40 000 × 22/60 = 14 667 arbeidstimer, mens B koster 40 000 × 9/60 = 6 000 arbeidstimer. Med en full lønnskostnad på £28 i timen koster A £410 667 i året i arbeidstid mot Bs £168 000 i året – et effektivitetsgap på £242 667 i året som oppveier forskjellen på £300 000 i innledende økonomi i løpet av 14 måneder. Verdi for pengene favoriserer B når effektiviteten regnes med, ikke A.

**Tilskudd til en veldedig organisasjon**: en finansiør sammenligner et tilskudd på £50 000 som gir 200 vellykkede jobbplasseringer (£250 per plassering – tilsynelatende utmerket økonomi) med et tilskudd på £120 000 som gir 350 plasseringer som varer over 12 måneder, mot det første tilskuddets plasseringer, der halvparten faller bort innen 3 måneder. Virkningsfullhet – varige utfall – snur den tilsynelatende rangeringen: den reelle kostnaden per *varige* plassering er £250 ÷ 0,5 = £500 for det første tilskuddet, mot £120 000/350 ≈ £343 for det andre.

## Sammenheng med programvareutvikling

Verdi for pengene gir utviklingsteam en disiplin for å rammesette teknologiske virksomhetscaser slik økonomi- og revisjonsfunksjoner faktisk vil lese dem:

- Angi økonomi, effektivitet og virkningsfullhet som separate linjer i en virksomhetscase, ikke ett blandet «verdi»-tall – en vurderer skolert på Green Book vil be om akkurat denne oppdelingen.
- Vokt deg for å optimalisere anskaffelseskostnad (økonomi) på bekostning av integrasjon og effektiv arbeidsflyt, en veldig vanlig falsk besparelse i offentlig IT (se [totalkostnad for eierskap i offentlig IT](../totalkostnad-for-eierskap-i-offentlig-it/) og [bygge eller kjøpe i offentlig sektor](../utvikle-selv-eller-kjøpe-i-offentlig-forvaltning/)).
- Virkningsfullhet krever utfallsdata, ikke bare tall på leveranser – koble leveransemål til [utfall mot leveranser](../utfall-versus-leveranser/) og til reell evaluering gjennom [kontrafaktisk analyse](../kontrafaktisk-analyse/) i stedet for å anta at leveranser innebærer utfall.
- Når et system betjener ujevnt på tvers av regioner eller demografiske grupper, er likhetsspørsmålet en legitim innvending mot verdi for pengene, ikke et eget «hyggelig å ha» – se [digital inkludering](../digital-inkludering/).

## Fallgruver

- **Å likestille verdi for pengene med laveste pris.** Økonomi er en tredjedel (eller en fjerdedel) av testen. Green Book advarer eksplisitt mot anskaffelsesregler om «laveste kostnad» som ignorerer effektivitet og virkningsfullhet.
- **Å måle leveranser og kalle dem utfall.** Saksgjennomstrømning (effektivitet) er ikke det samme som saker løst godt (virkningsfullhet); se [utfall mot leveranser](../utfall-versus-leveranser/).
- **Å behandle likhet som valgfritt.** Siden Green Books oppdatering i 2020 skal fordelingsvirkninger vurderes sammen med de tradisjonelle tre E-ene, ikke skjøtes på etterpå. Å ettermontere det etter at en virksomhetscase er godkjent er langt vanskeligere enn å ta det med fra starten.
- **Å sammenligne alternativer med ulikt volum uten normalisering.** En sammenligning av verdi for pengene per enhet mellom alternativer som betjener ulike befolkninger må kontrollere for skala, ellers er effektivitetssammenligningen meningsløs.

## Kilder

- HM Treasury, «The Green Book: Central Government Guidance on Appraisal and Evaluation» (utgaven fra 2022). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- National Audit Office, «Framework to review programmes and projects» og metodikk for studier av verdi for pengene. <https://www.nao.org.uk/>
- HM Treasury, «The Magenta Book: Central Government Guidance on Evaluation» (2020). <https://www.gov.uk/government/publications/the-magenta-book>
- IPPR North, «Transport Infrastructure Investment: Determining Value for Money» (innspill til Treasury Select Committees gjennomgang i 2020 av Green Books regionale skjevhet).
