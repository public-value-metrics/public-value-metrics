# Verdsetting av velvære (WELLBY)

Verdsetting av velvære prissetter effekten av et tiltak direkte i form av livstilfredshet, med WELLBY (velværejustert leveår) som enhet – én WELLBY tilsvarer en endring på ett poeng på en livstilfredshetsskala fra 0 til 10, opprettholdt i ett år. Det er HM Treasurys offisielt godkjente alternativ til å monetisere hver nytteeffekt gjennom betalingsvilje.

## Hvorfor det er viktig

HM Treasurys «Wellbeing guidance for appraisal: supplementary Green Book guidance» (2021, <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>) brakte formelt data om subjektivt velvære inn i analyser i sentralforvaltningen, og ga analytikere en vei til å verdsette utfall – sosial tilknytning, psykisk helse, trygghet, samfunnsdeltakelse – som metoder med [oppgitte preferanser](../verdsetting-med-oppgitte-preferanser/) og [avslørte preferanser](../verdsetting-ved-avslørte-preferanser/) har vanskelig for å prise overbevisende, fordi folk ofte er dårlige til å forutsi hvor mye et gode faktisk vil påvirke deres tilfredshet med livet. Veiledningen, utviklet i fellesskap med What Works Centre for Wellbeing, anbefaler en pengeverdi per WELLBY – £13 000 (2021-priser, revideres jevnlig) – utledet fra sammenhengen mellom inntekt og livstilfredshet observert i store velværeundersøkelser (først og fremst ONS' Annual Population Survey, som har stilt de fire ONS4-spørsmålene om velvære siden 2011). Det gir analytikere en omregningskurs tilbake til pund når en monetisert sammenligning mot andre Green Book-analyser er nødvendig.

Metoden betyr noe fordi den snur den vanlige verdsettingslogikken: i stedet for å spørre hva folk ville betalt for et utfall (oppgitte preferanser) eller utlede verdi fra en beslektet markedstransaksjon (avslørte preferanser), måler den utfallets effekt på rapportert livstilfredshet direkte, og omgår gapet mellom det folk sier de vil ha og det som faktisk gjør dem bedre stilt. Dette er også dens sentrale begrensning – selvrapportert livstilfredshet påvirkes av tilvennings- og rammeeffekter som en nøye utøver må kontrollere for.

## Regnestykket

```
WELLBY = 1 poeng livstilfredshet (skala 0–10) opprettholdt for 1 person i 1 år

Samlet WELLBY fra et tiltak =
  Σ (endring i livstilfredshetsscore) × (antall berørte personer)
    × (varighet i år, diskontert med samfunnets diskonteringsrate)

Monetisert verdi = samlet WELLBY × verdi per WELLBY
  (HM Treasurys anbefalte verdi: £13 000 per WELLBY, 2021-priser,
   med forbehold om jevnlig revisjon – sjekk gjeldende veiledning før bruk)
```

Dette skiller seg fra det helseøkonomiske [velværejusterte leveåret](../velværejusterte-leveår/), som vanligvis er forankret i skalaer for helserelatert livskvalitet (EQ-5D og lignende) i stedet for generell livstilfredshet. De to er beslektede, men ikke utskiftbare, og Green Book-analyser bør være eksplisitte på hvilken skala og utspørringsmetode som ligger bak et rapportert WELLBY-tall.

## Utregnet eksempel

**Lokal myndighet**: en kommune driver en ordning med besøksvenner for isolerte eldre innbyggere, som betjener 400 personer. En før/etter-undersøkelse av velvære med ONS4-spørsmålet om livstilfredshet viser at deltakernes gjennomsnittlige score stiger fra 5,8 til 6,5 – en økning på 0,7 poeng – opprettholdt gjennom programmets 2-årige finansierte varighet.

```
WELLBY generert = 400 personer × 0,7 poeng × 2 år = 560 WELLBY
Monetisert verdi = 560 × £13 000 = £7,28 mill.
Programkostnad = £450 000 over 2 år

Nytte-kostnadsforhold ≈ £7,28 mill. / £0,45 mill. ≈ 16:1
```

Et så høyt forhold bør utløse gransking, ikke feiring – Green Books veiledning om velvære advarer eksplisitt mot å ta selvrapporterte gevinster i små utvalg for god fisk uten å sjekke for seleksjonseffekter (var det bare de mest sosiale innbyggerne, de med størst sannsynlighet for å bli bedre, som meldte seg på ordningen?) og uten en sammenligningsgruppe. En godt utformet evaluering ville trukket fra en kontrafaktisk endring observert hos ikke-deltakere, se [kontrafaktisk analyse](../kontrafaktisk-analyse/).

**Statlig forvaltning**: å sammenligne to sysselsettingsprogrammer med WELLBY i stedet for inntekt alene fanger opp at arbeidsledighet har en velværekostnad utover tapt inntekt – britisk velværeforskning finner konsekvent at arbeidsledighet reduserer livstilfredsheten mer enn inntektstapet alene skulle tilsi, på grunn av de ikke-pengemessige effektene av å miste struktur, mening og sosial kontakt. Et program som evalueres bare på inntektsøkning ville undervurdert sin verdi i forhold til et som i tillegg evalueres på WELLBY.

## Sammenheng med programvareutvikling

Verdsetting av velvære når sjelden utviklingsteam direkte, men det former hva «suksess» defineres som for produkter i sosial sektor og offentlig tjenesteyting – en digital plattform for besøksvenner, et verktøy for triagering i psykisk helse eller en samfunnsplattform for isolerte innbyggere bør regne med at effekten til slutt måles slik, noe som betyr at produktanalyse må fange opp *hvem* som nås og i *hvor lang tid*, ikke bare bruksantall. Bygg instrumentering for velværeundersøkelser (ONS4 eller validerte tilsvarende) inn i tjenesteevalueringen fra starten i stedet for å skjøte den på i ettertid. Å ettermontere en velværebaseline etter at en tjeneste er lansert mister før/etter-sammenligningen helt. Se [utfall mot leveranser](../utfall-versus-leveranser/) og [metoder for effektevaluering](../metoder-for-effektevaluering/).

## Fallgruver

- **Ingen kontrafaktisk eller sammenligningsgruppe.** En før/etter-gevinst i velvære uten kontroll for hva som ville skjedd uansett overdriver programmets effekt; se [kontrafaktisk analyse](../kontrafaktisk-analyse/) og [addisjonalitet og dødvekt](../addisjonalitet-og-dødvekt/).
- **Små, selvselekterte utvalg.** Velværeundersøkelser blant programdeltakere som meldte seg frivillig er utsatt for seleksjonsskjevhet – de som meldte seg på og ble værende var trolig allerede på vei oppover.
- **Å behandle omregningen £ per WELLBY som presis.** Pengeverdien er en politisk konvensjon utledet fra regresjoner mellom inntekt og velvære, ikke en markedspris. Bruk den for sammenlignbarhet på tvers av Green Book-analyser, ikke som en påstand om hva velvære «er verdt».
- **Å blande WELLBY med helserelaterte QALY.** De to måler ulike konstrukter på ulike skalaer; se [velværejusterte leveår](../velværejusterte-leveår/) for den helseøkonomiske varianten, og ikke ta gjennomsnittet av de to.

## Kilder

- HM Treasury. «Wellbeing guidance for appraisal: supplementary Green Book guidance.» 2021. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>
- What Works Centre for Wellbeing. <https://whatworkswellbeing.org/>
- Office for National Statistics. «Personal well-being in the UK» (ONS4-målene). <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing>
- Fujiwara D, et al. «Wellbeing Valuation: A Nascent Field?» LSE / Simetrica, forskningssammendrag.
