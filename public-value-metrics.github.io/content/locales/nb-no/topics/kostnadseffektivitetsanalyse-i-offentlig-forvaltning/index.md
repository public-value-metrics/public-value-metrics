# Kostnadseffektivitetsanalyse i offentlig forvaltning

Kostnadseffektivitetsanalyse (CEA) sammenligner kostnadene ved ulike måter å oppnå det *samme* utfallet på, uttrykt i naturlige enheter – kostnad per bostedsløs som er skaffet bolig, kostnad per elev som er løftet til forventet nivå, kostnad per tonn CO2 som er redusert – uten å gjøre selve utfallet om til penger.

## Hvorfor det er viktig

Green Book behandler CEA som reservemetoden når kravet i [samfunnsøkonomisk nytte-kostnadsanalyse](../samfunnsøkonomisk-nytte-kostnadsanalyse/) om å prissette hver eneste nytte blir ikke bare vanskelig, men uærlig – der en troverdig pris på utfallet ville kreve antakelser ingen faktisk står inne for (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>, kapittel 5, om alternativvurdering der utfall ikke lar seg lett prissette). CEA er metoden som er lånt mest direkte fra helseøkonomien – den er strukturelt identisk med måten NICE sammenligner behandlinger på, med kostnad per kvalitetsjustert leveår (QALY) – men brukt på offentlige programmer utenfor helse: utdanningstiltak per elevresultatpoeng, boligprogrammer per husholdning som er forhindret i å bli bostedsløs, sysselsettingsprogrammer per varig jobbresultat.

Grunnen til at CEA fortjener sin plass ved siden av samfunnsøkonomisk nytte-kostnadsanalyse (SCBA) i stedet for å inngå i den, er at det å presse en pengeverdi på enkelte utfall gir et tall som er presist nok til å se autoritativt ut og omstridt nok til å være verdiløst i en offentlig debatt – å sette pris på «et barn som leser på forventet nivå» innbyr nøyaktig den typen innsigelser som sprenger en forretningscase i en stortingskomité. CEA unngår diskusjonen ved å nekte å ta den: Den rangerer alternativer etter kostnad per enhet av *selve utfallet*, og overlater den separate politiske vurderingen av om utfallet i det hele tatt er verdt å arbeide for til den strategiske casen.

## Regnestykket

```
Kostnadseffektivitetsforhold (gjennomsnitt) = samlet kostnad / samlede oppnådde utfallsenheter

Inkrementelt kostnadseffektivitetsforhold (ICER), alternativ A sammenlignet med B:
ICER = (Kostnad_A − Kostnad_B) / (Utfall_A − Utfall_B)

Fremgangsmåte:
1. Fastsett utfallsenheten og målemetoden likt for alle alternativer som sammenlignes.
2. Kostnadsberegn hvert alternativ på samme grunnlag (se ../green-book-appraisal/, finansiell case)
   over samme tidshorisont.
3. Forkast dominerte alternativer: ethvert alternativ som koster mer per enhet enn et
   billigere alternativ som oppnår likt eller bedre utfall, utgår.
4. Rangér de gjenværende alternativene etter inkrementelt, ikke gjennomsnittlig,
   kostnadseffektivitetsforhold.
```

CEA kan ikke i seg selv si om et program i det hele tatt er verdt å finansiere – bare hvilken av flere tilnærminger til samme mål som er billigst per enhet. Å avgjøre om selve målet er verdt pengene krever enten at man går tilbake til SCBA (hvis en troverdig verdsetting finnes) eller en politisk/strategisk vurdering utenfor regnestykket. Der utfall virkelig ikke kan reduseres til én enhet – fordi et program gir flere utfall som er viktige på ulike måter – bruk i stedet [multikriterieanalyse](../multikriteriell-beslutningsanalyse/).

## Utregnet eksempel

**Kommune**: En kommune sammenligner tre tilnærminger til å redusere antall som sover ute, hver kostnadsberegnet over ett år mot utfallet «personer flyttet inn i stabilt botilbud i minst 6 måneder»:

```
Alternativ                        Kostnad    Oppnådde utfall   Gj.sn. CER
Housing First (intensiv)          £900 000   60                £15 000/utfall
Hospits + oppfølging ved utflytting £600 000 50                £12 000/utfall
Oppsøkende arbeid + privat leiemarked £350 000 20              £17 500/utfall

ICER, Hospits mot Oppsøkende:  (600k−350k)/(50−20) = £8 333 per ekstra utfall
ICER, Housing First mot Hospits: (900k−600k)/(60−50) = £30 000 per ekstra utfall
```

Oppsøkende arbeid er dominert av Hospits på gjennomsnittskostnad, men det *inkrementelle* steget fra Oppsøkende til Hospits koster bare £8 333 per ekstra person som får bolig – billig sammenlignet med steget til Housing First, som koster £30 000 for hver ytterligere person utover det Hospits oppnår. En kommune med begrenset budsjett som skal trappe opp, bør foretrekke å utvide Hospits før Housing First, selv om Housing First ser bedre ut på sitt eget gjennomsnittsforhold.

**Nasjonale myndigheter**: Et program for å ta igjen etterslep i lesing sammenlignes på tvers av tre leveransemodeller etter «kostnad per elev som når forventet leseferdighetsnivå for alderen»: individuell undervisning (£1 800/elev), smågruppeundervisning (£700/elev) og rent digitalt tiltak (£150/elev, men bare 40 % av utfallsraten til smågruppeundervisning per påmeldt elev når det justeres for frafall i engasjement). Justert for faktisk gjennomføring koster rent digitalt tiltak £375 per elev som når nivået – fortsatt billigst, men CEA kan ikke si om det lavere absolutte antallet elever som får hjelp av rent digitalt tiltak, hvis det leveres for samme budsjett som smågruppeundervisning, er en akseptabel avveining mot å nå færre elever mer i dybden. Det er en fordelingsvurdering CEA gir tilbake til beslutningstakerne.

## Sammenheng med programvareutvikling

CEA er den riktige rammen hver gang utviklingsteam evaluerer leveransemåter for det *samme* tjenesteutfallet – kostnad per vellykket verifisert identitet på tvers av tre leverandører av identitetsverifisering, kostnad per korrekt triagert sak på tvers av to design for automatisert saksbehandling, kostnad per løst tilgjengelighetsfeil på tvers av intern kontra innleid utbedring. Disiplinen den importerer direkte: Definer utfallsenheten før kostnader sammenlignes (ikke «lukkede saker» – en leveranse – men «brukerbehov som faktisk er løst»), og beregn alltid det inkrementelle forholdet mellom det systemet som er i drift og en foreslått erstatning, ikke hvert systems gjennomsnittskostnad isolert. Se [utfall mot leveranser](../utfall-versus-leveranser/) og [kostnad per utfall](../kostnad-per-utfall/).

## Fallgruver

- **Å sammenligne gjennomsnittlige, ikke inkrementelle, forholdstall når man avgjør en utvidelse.** Som eksemplet med bostedsløshet viser, er alternativet med best gjennomsnittsforhold ikke alltid den billigste neste enheten utfall å kjøpe.
- **Å velge en utfallsenhet som egentlig er en leveranse.** «Henvisninger gjort» eller «økter levert» måler aktivitet, ikke utfallet programmet finnes for å skape. CEA på leveranser gir et tall som ser trygt ut og svarer på feil spørsmål.
- **Å sammenligne på tvers av genuint ulike utfall.** CEA er bare gyldig når alle alternativer sikter mot samme utfall målt på samme måte. Å sammenligne «kostnad per bostedsløs som er skaffet bolig» med «kostnad per barnevernsungdom i stabilt leieforhold» krever et felles utfallsmål eller [multikriterieanalyse](../multikriteriell-beslutningsanalyse/), ikke CEA.
- **Å overse utfallets varighet.** Et billigere alternativ som gir utfall som ikke varer (en elev som faller tilbake etter at tiltaket er slutt) er ikke egentlig mer kostnadseffektivt når det måles over en sammenlignbar horisont – bruk samme oppfølgingsperiode for alle alternativer som sammenlignes.

## Kilder

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Chapter 5.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- National Institute for Health and Care Excellence. "Developing NICE guidelines: the manual" —
  the cost-effectiveness method this government adaptation borrows from.
  <https://www.nice.org.uk/process/pmg20>
- What Works Centre for Homelessness Impact. Cost-effectiveness evidence on homelessness
  interventions. <https://whatworks-homelessness.org.uk/>
