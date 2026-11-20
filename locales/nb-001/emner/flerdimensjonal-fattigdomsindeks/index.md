# Flerdimensjonal fattigdomsindeks

Den flerdimensjonale fattigdomsindeksen (Multidimensional Poverty Index, MPI) måler fattigdom som overlappende mangler en person opplever samtidig – innen helse, utdanning og levestandard – i stedet for bare inntekt under en grense. Den ble utviklet av Oxford Poverty and Human Development Initiative (OPHI) sammen med Sabina Alkire og James Foster, og har siden 2010 vært publisert sammen med UNDP i hver Human Development Report, ved siden av [indeksen for menneskelig utvikling](../menneskelig-utviklingsindeks/).

## Hvorfor det er viktig

Inntektsbaserte fattigdomsgrenser overser mennesker som har nok kontantinntekt, men mangler rent vann eller skolegang, eller som har mistet et barn – og de overser at manglene opptrer sammen: en husholdning uten strøm har uforholdsmessig stor sannsynlighet for også å mangle sanitærforhold og ha et underernært barn. Alkire-Foster-metoden, som MPI bygger på, teller hver persons mangler over ti indikatorer gruppert i tre like vektede dimensjoner – helse, utdanning og levestandard – og regner bare noen som «MPI-fattig» hvis den vektede mangelskåren overstiger en fast terskel, slik at den fanger opp overlapp som et sett separate enkeltindikatorstatistikker ikke kan. OPHI publiserer hele metodikken og landdata på <https://ophi.org.uk/multidimensional-poverty-index/>; den globale MPI-en som OPHI vedlikeholder sammen med UNDP, dekker nå over 110 land. For programvare som bygges for programmer mot fattigdom – kontantoverføringer, triagering i sosial omsorg, målretting av bistand – er MPI-ens indikatorsett ofte det som ligger nærmest et standardisert skjema for mangler som allerede er validert hos dusinvis av nasjonale statistikkbyråer.

## Regnestykket

```
10 indikatorer, 3 dimensjoner, hver dimensjon vektet 1/3:

Helse (1/3):             ernæring (1/6), barnedødelighet (1/6)
Utdanning (1/3):         antall års skolegang (1/6), skolefrekvens (1/6)
Levestandard (1/3):      matlagingsbrensel, sanitærforhold, drikkevann,
                          strøm, bolig, eiendeler (1/18 hver)

mangelskår (c) = summen av vektene for indikatorene personen mangler

personen er «MPI-fattig» hvis c ≥ 1/3 (fattigdomsgrensen, k = 33 %)

H (andel fattige)   = antall MPI-fattige / samlet befolkning
A (intensitet)      = gjennomsnittlig mangelskår blant bare de MPI-fattige

MPI = H × A
```

Fordi MPI multipliserer *andelen* som er fattige med *hvor* fattige de er, kan to regioner med samme andel fattige ha svært ulike MPI-verdier hvis manglene er mer alvorlige i den ene – den samme logikken om «ingen substitusjon mellom dimensjoner» som ligger bak det geometriske gjennomsnittet i HDI.

## Utregnet eksempel

**Nasjonal undersøkelse blant 1 000 personer**: 350 identifiseres som flerdimensjonalt fattige (mangelskår ≥ 33 %). Blant bare disse 350 fattige er den gjennomsnittlige mangelskåren 45 %.

```
H = 350 / 1000                = 0,350
A = 0,45
MPI = H × A = 0,350 × 0,45    = 0,1575
```

**Sammenligning av to distrikter med lik andel fattige**: Distrikt A har H = 0,30 og A = 0,40 (mange fattige, moderat mangelfulle); Distrikt B har H = 0,30 og A = 0,60 (like mange fattige, men mer alvorlig mangelfulle – de mangler strøm *og* sanitærforhold *og* skolefrekvens samtidig).

```
MPI_A = 0,30 × 0,40 = 0,120
MPI_B = 0,30 × 0,60 = 0,180
```

Samme andel fattige, 50 % høyere MPI i Distrikt B – et målrettingssystem basert på andel fattige alene ville rangert de to distriktene likt og oversett at Distrikt B trenger en dypere innsats.

## Sammenheng med programvareutvikling

- Saksbehandlings- og kvalifiseringssystemer for sosiale programmer lagrer ofte allerede flere av de ti indikatorene (bolig, skolefrekvens, helsemarkører) i separate siloer; Alkire-Foster-telleprinsippet er et ferdig skjema for å kombinere dem til én mangelskår i stedet for å bygge en skreddersydd skåringsmodell fra grunnen av.
- Oppdelingen i andel og intensitet (H × A) er et generelt nyttig mønster for ethvert dashbord som rapporterer «hvor mange som er berørt» sammen med «hvor hardt» – å slå begge sammen til ett tall, slik rå forekomststatistikk gjør, skjuler nettopp det tilfellet som trenger mest ressurser.
- Indikatordashbord i MPI-stil passer naturlig sammen med rapportering av [kostnad per mottaker](../kostnad-per-mottaker/) for programmer mot fattigdom: kostnad per poeng reduksjon i MPI er en forsvarlig enhet for å sammenligne svært ulike tiltak (kontantoverføring versus sanitærinfrastruktur).

## Fallgruver

- **Å behandle de ti indikatorene som universelle** – OPHIs globale MPI-indikatorer er kalibrert for sammenlignbarhet mellom land; nasjonale MPI-er (mange land, blant dem flere i Sør-Asia og Afrika, publiserer sine egne) tilpasser indikatorer og vekter til lokal kontekst, og de to kan ikke sammenlignes direkte.
- **Å rapportere bare H** – andelen fattige ignorerer intensiteten fullstendig; rapportér eller beregn alltid A ved siden av, eller selve MPI-en.
- **Å anta at MPI-fattige og inntektsfattige er samme befolkningsgruppe** – OPHIs egne landnotater viser vanligvis bare delvis overlapp mellom de to; et program som bare retter seg mot de inntektsfattige, vil systematisk gå glipp av en betydelig andel av de flerdimensjonalt fattige.

## Kilder

- Oxford Poverty and Human Development Initiative. "Multidimensional Poverty Index."
  <https://ophi.org.uk/multidimensional-poverty-index/>
- Alkire S, Foster J. "Counting and Multidimensional Poverty Measurement." Journal of Public
  Economics, 2011.
- UNDP & OPHI. "Global Multidimensional Poverty Index" (annual report).
