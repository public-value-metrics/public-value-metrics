# Rettferdighet mellom generasjoner og diskontering ved bærekraft

Å diskontere fremtidige kostnader og nytte tilbake til nåverdi er standard praksis i offentlig vurdering – se [samfunnsøkonomisk diskonteringsrente](../samfunnets-diskonteringsrate/) – men enhver positiv diskonteringsrente, rentesrentet over tiår eller århundrer, krymper den fjerne fremtiden mot null i dagens termer. For beslutninger med konsekvenser et århundre eller mer frem i tid – klimaendringer, atomavfall, tap av biologisk mangfold, pensjonenes bærekraft – blir dette matematiske faktum et etisk: Standard diskontering kan få katastrofal skade på fremtidige generasjoner til å fremstå, i nåverdi, som knapt verdt å unngå.

## Hvorfor det er viktig

Ramsey-ligningen, utledet av Frank Ramsey i 1928, deler diskonteringsrenten i to komponenter: ren tidspreferanse (δ, hvor mye vi rett og slett foretrekker nå fremfor senere, uavhengig av velstand) og velstandsveksteffekten (η×g, hvor mye vi diskonterer fordi fremtidige generasjoner forventes å være rikere, slik at et ekstra pund betyr mindre for dem). Den britiske Green Books standard langsiktige diskonteringsrente bygger på denne ligningen og følger en *avtakende* skala snarere enn en flat rente – et design med rot i Martin Weitzmans arbeid om «gamma-diskontering», som viser at når selve den fremtidige diskonteringsrenten er usikker, avtar den sikkerhetsekvivalente renten man bør bruke matematisk over tid, fordi scenarioene med lav rente kommer til å dominere jo lenger frem man ser. Stern Review om klimaendringenes økonomi (2006), ledet av Sir Nicholas Stern, tok den etiske debatten videre: Stern argumenterte for at ren tidspreferanse bør settes nær null (han brukte δ ≈ 0,1 %, som bare speiler den lille sannsynligheten for en sivilisasjonsavsluttende katastrofe, ikke en reell preferanse for nåtiden fremfor fremtiden), noe som ga en langt lavere effektiv diskonteringsrente enn konvensjonell Green Book-praksis og tilsvarende en langt sterkere sak for klimatiltak i dag. Kritikere (særlig William Nordhaus) hevdet at Sterns nær-null-rente var etisk forsvarlig men uforenlig med faktisk observert spare- og investeringsatferd. Uenigheten er ikke en teknisk fotnote – den er den største enkeltårsaken til at to like grundige økonomer kan komme til vidt forskjellige konklusjoner om hvor mye dagens generasjon bør ofre for fremtiden, og den er grunnen til at programvare som støtter langsiktige investeringsvurderinger i offentlig sektor må gjøre diskonteringsforutsetningene synlige i stedet for å gjemme dem i en standardverdi i et regneark.

## Regnestykket

```
Ramsey-ligningen:   r = δ + η × g

  r = samfunnsøkonomisk diskonteringsrente
  δ = ren tidspreferanse (utålmodighetsrate, uavhengig av velstand)
  η = elastisitet for grensenytte av konsum (avtakende verdi av
      ekstra konsum etter hvert som folk blir rikere)
  g = forventet vekstrate for konsum per innbygger

Green Books avtakende langsiktige skala (omtrentlig, gjeldende publiserte bånd):
  År 0–30:    3,5 %
  År 31–75:   3,0 %
  År 76–125:  2,5 %
  År 126–200: 2,0 %
  År 201–300: 1,5 %
  År 301+:    1,0 %

Stern Reviews parametere: δ ≈ 0,1 %, η = 1, g ≈ 1,3 %  → r ≈ 1,4 %
```

## Utregnet eksempel

**Dagens verdi av £1 unngått skade om 100 år**, under tre diskonteringsregimer:

```
Flat kortsiktig Green Book-rente (3,5 %, holdt konstant i 100 år):
  NV = 1 / (1,035)^100 ≈ 1 / 31,19 ≈ £0,032   (3,2 pence)

Green Books avtakende skala (3,5 % for år 1–30, 3,0 % for år 31–75,
2,5 % for år 76–100):
  faktor(1–30)   = 1,035^30  ≈ 2,807
  faktor(31–75)  = 1,03^45   ≈ 3,782
  faktor(76–100) = 1,025^25  ≈ 1,854
  samlet faktor ≈ 2,807 × 3,782 × 1,854 ≈ 19,68
  NV = 1 / 19,68 ≈ £0,051   (5,1 pence)

Stern-lignende ren tidspreferanse nær null (r ≈ 1,4 % flat):
  NV = 1 / (1,014)^100 ≈ 1 / 3,997 ≈ £0,250   (25,0 pence)
```

De samme £1 i unngått skade om et århundre er verdt 3,2p, 5,1p eller 25p i dag, avhengig utelukkende av hvilken diskonteringskonvensjon som brukes – et nesten åttedoblet spenn som avgjør om et klimatiltak med høy kostnad i starten og gevinst et århundre frem i tid i det hele tatt klarer en positiv nåverdi. Dette er mekanismen bak temaets sentrale advarsel: Ved enhver meningsfullt positiv flat rente blir tilstrekkelig fjern fremtidig skade aritmetisk utradert fra vurderingen, uavhengig av dens reelle alvorlighet.

## Sammenheng med programvareutvikling

- Ethvert verktøy for langsiktig vurdering eller forretningscase (infrastruktur, klimatilpasning, pensjonsmodellering) bør implementere Green Books *avtakende* skala, ikke én enkelt flat rente – en flat standardrente bygger i det stille inn en langt sterkere skjevhet mot fremtiden enn gjeldende britisk statlig veiledning angir.
- Diskonteringsrente og horisont bør alltid vises som synlige, reviderbare parametere i vurderingsprogramvare, med beregningens følsomhet for dem vist eksplisitt (som i eksemplet ovenfor) – å gjemme renten i en konfigurasjonsfil innbyr til nettopp det «skjulte etiske valget» Stern–Nordhaus-debatten advarer mot. Dette henger sammen med punktet om åpenhet i [naturkapitalregnskap](../naturkapitalregnskap/) og ligger til grunn for temaet [samfunnsøkonomisk diskonteringsrente](../samfunnets-diskonteringsrate/) generelt.
- Der et programs nytte uttrykkelig er mellom generasjoner (flomsikring, gjenoppretting av naturkapital, langsiktig digital infrastruktur), bør en [samfunnsøkonomisk nytte-kostnadsanalyse](../samfunnsøkonomisk-nytte-kostnadsanalyse/) rapportere resultater under minst to diskonteringsforutsetninger (Green Book-standard og et sensitivitetstilfelle med lav rente) i stedet for ett punktanslag, slik at beslutningstakerne ser hvordan valget av diskonteringsrente alene flytter svaret.

## Fallgruver

- **Å presentere en enkelt diskontert nåverdi uten sensitivitetsintervall** – gitt hvor mye diskonteringsrenten alene endrer svaret for langsiktige prosjekter, overdriver en nåverdi med én enkelt rente presisjonen betydelig. Rapporter alltid et intervall som minst spenner over Green Book-standarden og et scenario med lav rente.
- **Å bruke den kortsiktige flate renten (3,5 %) på en vurdering over flere århundrer** – Green Books egen veiledning angir den avtakende skalaen nettopp fordi den flate renten ble vurdert som upassende utover omtrent 30 år. Å bruke den likevel undervurderer langsiktige kostnader.
- **Å behandle δ (ren tidspreferanse) som en rent teknisk parameter** – Sterns nær-null-verdi og Green Books høyere implisitte verdi er begge forsvarlige bare som etiske standpunkter om hvor stor vekt nåtiden skylder fremtiden, ikke som empirisk «riktige» eller «gale» tall. Programvare bør gjøre antakelsen synlig i stedet for å presentere ett tall som objektivt riktig.

## Kilder

- Stern N. "The Economics of Climate Change: The Stern Review." Cambridge University Press, 2006.
- Ramsey FP. "A Mathematical Theory of Saving." The Economic Journal, 1928.
- Weitzman ML. "Gamma Discounting." American Economic Review, 2001.
- HM Treasury. "The Green Book: Central Government Guidance on Appraisal and Evaluation" (Annex 6,
  discount rate schedule).
- Nordhaus WD. "A Review of the Stern Review on the Economics of Climate Change." Journal of
  Economic Literature, 2007.
