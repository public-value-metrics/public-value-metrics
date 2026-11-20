# Alternativkostnad i offentlige utgifter

Alternativkostnad er verdien av det beste alternativet man gir avkall på når en offentlig virksomhet binder penger, arbeidstid eller politisk kapital til ett valg framfor et annet. I et departement med fast budsjett er hvert pund brukt på ett program et pund som ikke kan brukes på det nest beste programmet – den egentlige kostnaden ved en beslutning er ikke det den bruker, men det den fortrenger.

## Hvorfor det er viktig

Offentlige budsjetter er kontantbegrensede innenfor en utgiftsgjennomgangsperiode, så – i motsetning til en voksende privat bedrift – kan et departement ikke bare «finne mer penger» til en god idé; å finansiere den betyr å slutte å finansiere noe annet. HM Treasurys Green Book behandler dette som grunnleggende: hver vurdering skal sammenligne et tiltak med en «gjør minimum»-basislinje *og* med realistiske alternative bruksmåter av de samme ressursene, nettopp fordi det virkelige spørsmålet et utgiftsteam i Treasury stiller aldri er «er dette bra?», men «er dette bedre enn det andre disse pengene kunne kjøpt?». Green Books kjerneprinsipp for vurdering – at offentlige ressurser skal gå til tiltaket med høyest netto samfunnsverdi per pund – er alternativkostnad formulert som politikk.

Dette er lett å si og vanskelig å anvende, fordi det «nest beste alternativet» sjelden er synlig i én enkelt forretningscase. Et tilskuddsprogram på £2 millioner for ungdomssysselsetting sammenlignes i forretningscasen med å gjøre ingenting – men det ærlige sammenligningsgrunnlaget er det nest beste tiltaket for ungdomssysselsetting, eller faktisk den nest beste bruken av £2 millioner hvor som helst i porteføljen, også utgifter som ikke gjelder sysselsetting. Magenta Book (HM Treasury, 2020) advarer uttrykkelig om at evalueringer som sammenligner «med tiltak» og «uten tiltak» undervurderer den listen et tiltak må klare, fordi «uten dette tiltaket» ikke er det samme som «med ingenting i det hele tatt» – frigjorte penger finansierer noe annet.

## Regnestykket

```
Alternativkostnaden ved å velge A = verdien av det beste alternativet B man gir avkall på

Netto offentlig verdi av A = verdi(A) − verdi(B), ikke verdi(A) − 0
```

Det finnes ingen universell formel fordi alternativet man gir avkall på er kontekstavhengig, men disiplinen lar seg generalisere: identifiser den realistiske nest beste bruken av den samme budsjettlinjen (ikke et idealisert «gjør ingenting»), verdsett den på samme grunnlag (i penger der det er mulig, ifølge [samfunnsøkonomisk nytte-kostnadsanalyse](../samfunnsøkonomisk-nytte-kostnadsanalyse/)), og trekk fra.

## Utregnet eksempel

**Budsjettlinje i et departement**: et fond for digital transformasjon på £5 millioner kan finansiere nøyaktig ett av to forslag i dette regnskapsåret.

- *Alternativ A*: en ny plattform for saksbehandling, monetær nytte £7,2 millioner over 5 år (effektivitetsbesparelser pluss raskere saksavslutning).
- *Alternativ B*: en tjeneste for identitetsverifisering som deles av tre departementer, monetær nytte £6,4 millioner over 5 år.

En naiv forretningscase for A sammenligner £7,2 millioner i nytte med £5 millioner i kostnad og rapporterer et nytte-kostnadsforhold på 1,44:1 – tilsynelatende sterkt. Men fordi A og B konkurrerer om de samme £5 millionene, er alternativkostnaden ved å velge A de £6,4 millionene i nytte man gir avkall på med B. Den *netto* gevinsten av A over det realistiske alternativet er bare £7,2 mill. − £6,4 mill. = £0,8 millioner, ikke hele overskriftstallet på £7,2 millioner. Hvis et tredje alternativ, C, ga £7,5 millioner i nytte for de samme £5 millionene, ville det å finansiere A framfor C ødelegge £0,3 millioner i offentlig verdi, selv om As egen forretningscase ser fullt ut berettiget ut isolert sett.

**Arbeidstid i en kommune**: en kommunes dateam på tre personer kan bygge enten et dashbord for boligkøen (anslått å spare 400 saksbehandlertimer i året, verdsatt til £28/time = £11 200/år) eller et triageringsverktøy for trygdesvindel (anslått å forhindre £85 000/år i uriktige utbetalinger). Å bygge dashbordet har en alternativkostnad på £85 000/år i tapt nytte, ikke bare lønnskostnaden til dateamet – den virkelige kostnaden ved det «gratis» interne bygget er den langt større nytten teamet kunne ha skapt andre steder.

## Sammenheng med programvareutvikling

Utviklingskapasitet i en offentlig virksomhet er i seg selv et begrenset budsjett – sprintkapasitet, ikke pund – og den samme disiplinen gjelder direkte:

- Navngi alltid sammenligningsgrunnlaget: forretningscasen for en funksjon bør si hva de samme teamukene ellers kunne levert, ikke bare funksjonens egen avkastning.
- Behandle «vi har ledig utviklingskapasitet» som starten på en alternativkostnadsanalyse, ikke slutten – ledig kapasitet har fortsatt en best alternativ bruk, selv om den bruken er nedbetaling av teknisk gjeld (se [teknisk gjeld som erosjon av offentlig verdi](../teknisk-gjeld-som-erosjon-av-offentlig-verdi/)).
- Knytt dette direkte til [valuta for pengene](../verdi-for-pengene/): «økonomi»-testen i valuta for pengene er meningsløs uten et ærlig sammenligningsgrunnlag for alternativkostnad, og til [kostnaden ved forsinkelse i offentlige programmer](../forsinkelseskostnad-i-offentlige-programmer/), som setter pris på tidsdimensjonen i den samme logikken om alternativet man gir avkall på.

## Fallgruver

- **Å sammenligne med «gjør ingenting» i stedet for det nest beste alternativet.** Green Book krever en «gjør minimum»-basislinje nettopp fordi den sanne alternativkostnaden sjelden er null; en forretningscase som bare klarer «gjør ingenting»-listen har ikke vist at den slår det realistiske alternativet.
- **Å overse konkurransen mellom departementer om samme pott.** Budsjettlinjer som ser øremerket ut innenfor én avdeling konkurrerer ofte på et høyere nivå (en utgiftsgjennomgang, et investeringsprogram) der den virkelige alternativkostnaden realiseres.
- **Å anta at frigjort arbeidstid ikke har noen ytterligere verdi.** Tid som er «spart» skaper bare verdi hvis den omdisponeres til noe verdifullt; finnes ikke den alternative bruken, er besparelsen fiktiv.

## Kilder

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation" (2022).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020).
  <https://www.gov.uk/government/publications/the-magenta-book>
- Claxton K, et al. "Methods for the estimation of the NICE cost-effectiveness threshold." Health
  Technology Assessment, 2015;19(14) — the canonical empirical demonstration of opportunity cost as
  a binding constraint in a fixed public budget. <https://www.journalslibrary.nihr.ac.uk/hta/hta19140/>
