# Endringsteori

En endringsteori er en eksplisitt, baklengs kartlagt årsakssammenheng fra et langsiktig mål til de forutsetningene og aktivitetene som må være på plass for at målet skal nås, sammen med antakelsene som knytter hvert ledd sammen. Den bygges ved å starte med utfallet du vil ha og gjentatte ganger spørre «hva må være sant umiddelbart før dette, for at dette skal skje?» – helt til du kommer til aktiviteter du faktisk kan levere. Det er motsatt retning av en [logikkmodell](../logisk-modell/), og derfor er de to komplementære og ikke utskiftbare.

## Hvorfor det er viktig

Metoden med baklengs kartlegging ble formalisert av Center for Theory of Change og ActKnowledge, med utgangspunkt i evaluatoren Carol Weiss' arbeid med å gjøre programantakelser eksplisitte slik at de kan testes i stedet for å tas på tro. Britisk tilskuddsevaluering har tatt dette direkte opp: HM Treasurys Magenta Book behandler en endringsteori som utgangspunktet for enhver evalueringsdesign, og finansiører som National Lottery Community Fund krever at søkere formulerer en før de finansierer et forslag. Grunnen til at dette betyr noe for en programvareutvikler er at endringsteorien er dokumentet som bør bestemme hva systemet ditt trenger å måle – hvis årsakskjeden sier «bruken av ytelser avhenger av at søkere får en personlig tilpasset beregning», er det en testbar påstand som produktet ditt kan instrumenteres for å dokumentere eller avkrefte.

## Regnestykket

En endringsteori er strukturell, ikke numerisk. Hvert ledd bør ha både en antakelse og en indikator som kan vise at antakelsen er feil:

```
Langsiktig utfall (målet)
  ↑ forutsetning + antakelse + indikator
Mellomutfall N
  ↑ forutsetning + antakelse + indikator
  ...
Mellomutfall 1
  ↑ forutsetning + antakelse + indikator
Aktiviteter / tiltak
  ↑ ressurser avsatt
Innsatsfaktorer
```

Denne strukturen mater direkte inn i [metoder for effektevaluering](../metoder-for-effektevaluering/), som finnes for å teste om antakelsene i hvert ledd faktisk holder, og i [kontrafaktisk analyse](../kontrafaktisk-analyse/), som tester om det langsiktige utfallet ville skjedd uansett.

## Utregnet eksempel

**Lokal myndighet (forebygging av bostedsløshet)**: det langsiktige utfallet er varige leieforhold etter 12 måneder for husholdninger med fare for utkastelse.

- Forutsetning: husholdningene har en realistisk, rimelig nedbetalingsplan for restansene. Antakelse: planer forhandlet av saksbehandler er mer varige enn planer pålagt av retten. Indikator: % av planene som fortsatt er aktive etter 6 måneder.
- Forutsetning: husholdningene søker om ytelsene de har krav på. Antakelse: en digital kalkulator for ytelser øker andelen riktige søknader sammenlignet med papirskjemaer. Indikator: andel korrekte søknader, sammenlignet før og etter innføringen av verktøyet.
- Aktiviteter: triagering ved saksbehandler, digital kalkulator for ytelser, forhandling om restanser.

I en pilotkohort på 120 husholdninger holdt antakelsen om ytelseskalkulatoren for 102 husholdninger (85 %) som gikk videre til å søke riktig, dokumentert gjennom en påfølgende prosessevaluering – og ga programteamet evidens for akkurat dette leddet i stedet for én enkelt påstand fra ende til ende om hvor mye bostedsløshet som ble forebygget.

**Veldedig organisasjon (ungdomsmentoring)**: det langsiktige utfallet er redusert utestengelse fra skolen. Baklengs kartlagte forutsetninger: bedre følelsesregulering → et tillitsfullt en-til-en-forhold til en mentor → jevn ukentlig kontakt over to semestre. Teorien gjør det eksplisitt at manglende «jevn ukentlig kontakt» (for eksempel på grunn av mentorgjennomtrekk) forutsier at utfallet ikke vil følge, noe som er en testbar og falsifiserbar påstand og ikke et håp.

## Sammenheng med programvareutvikling

En endringsteori bør forme et produkts datamodell før ett eneste dashbord bygges: identifiser hvilke ledd som trenger en indikator, og instrumenter spesifikt for dem, i stedet for å logge det som er enklest. Den disiplinerer også samtaler om veikartet – en funksjon som ikke kobles til noe ledd i kjeden er ikke åpenbart verdt å bygge. Se [logikkmodell](../logisk-modell/) for den fremoverrettede ansvarskjeden som bygges når teorien er avtalt, [sosial avkastning på investering](../sosial-avkastning-på-investering/) for en metode som avhenger av en endringsteori for å avgrense hvilke utfall som skal verdsettes, og [utfall mot leveranser](../utfall-versus-leveranser/) for skillet som leddene for mellomutfall bygger på.

## Fallgruver

- **Å forveksle den med en logikkmodell.** En endringsteori er kausal og forklarende (hvorfor vi tror dette virker). En logikkmodell er sekvensiell og beskrivende (hva skjer i hvilken rekkefølge). Å lage bare én lar enten «hvorfor» eller ansvarssporet mangle.
- **Å la antakelser være implisitte.** Hele verdien av baklengs kartlegging er å løfte frem testbare antakelser. En endringsteori som bare lister bokser og piler uten å si hva som kan gjøre hvert ledd galt, er dekor.
- **Å lage den én gang og legge den bort.** En endringsteori skrevet for en finansieringssøknad og aldri tatt opp igjen slutter å være nyttig i det øyeblikket evidens begynner å motsi et ledd.
- **Å hoppe over innspill fra interessenter.** En endringsteori bygget helt av bestillere uten innspill fra ansatte i front eller mottakere har en tendens til å kode inn antakelser ingen som leverer tjenesten faktisk tror på.

## Kilder

- Center for Theory of Change. <https://www.theoryofchange.org/>
- ActKnowledge. <https://www.actknowledge.org/>
- HM Treasury, Magenta Book (2020), kapittel 3. <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, veiledning om endringsteori. <https://www.tnlcommunityfund.org.uk/>
