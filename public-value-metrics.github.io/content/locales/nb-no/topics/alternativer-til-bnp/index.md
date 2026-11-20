# Alternativer til BNP

Alternativer til BNP er mål bygget for å fange opp det bruttonasjonalprodukt (BNP) strukturelt ser bort fra: ulønnet omsorgsarbeid, uttømming av miljøet, inntektsfordeling og om vekst faktisk gjør livene bedre. De mest kjente er Genuine Progress Indicator (GPI) og Bhutans Gross National Happiness (GNH)-indeks. Argumentet for å ta dem på alvor ble fremmet mest innflytelsesrikt av Stiglitz-Sen-Fitoussi-kommisjonen i 2009. For utviklere som bygger dashbord eller KPI-systemer for forvaltningen er «hvilket tall som teller som fremgang» en designbeslutning med reelle konsekvenser for hva som blir finansiert.

## Hvorfor det er viktig

Simon Kuznets, som bygget de amerikanske nasjonalregnskapene på 1930-tallet, advarte Kongressen i 1934 om at «en nasjons velferd kan knapt utledes av en måling av nasjonalinntekten» – et forbehold tallet vokste fra nesten umiddelbart. BNP regner opprydding etter et oljeutslipp som vekst og en forelders ulønnede barnepass som ingenting. Det skiller ikke mellom utgifter som bygger varig velferd og utgifter som bare utligner skade som allerede er skjedd. Stiglitz-Sen-Fitoussi-kommisjonen, nedsatt av Frankrikes president Nicolas Sarkozy og ledet av Joseph Stiglitz, Amartya Sen og Jean-Paul Fitoussi, konkluderte i 2009 med at statistiske systemer bør flytte vekten «fra å måle økonomisk produksjon til å måle menneskers velferd», og at bærekraft bør følges separat fra nåværende velferd i stedet for å slås sammen til ett tall. Alternativer til BNP gjør denne anbefalingen operativ. GPI, utviklet av tenketanken Redefining Progress på 1990-tallet og bygget på William Nordhaus og James Tobins Measure of Economic Welfare fra 1972, tar utgangspunkt i privat forbruk (som BNP gjør) og legger så til ikke-markedsmessige goder BNP utelater (husarbeid, frivillig innsats), mens den trekker fra defensive kostnader og kostnader ved uttømming (kriminalitet, forurensning, pendling, uttak av ressurser) som BNP feilaktig regner som positive. Bhutans GNH-indeks, forvaltet av GNH Centre Bhutan (<https://www.gnhcentre.bt/>), går enda lenger og erstatter vekst som landets uttalte konstitusjonelle mål: Den aggregerer 33 indikatorer fordelt på 9 domener – psykologisk velvære, helse, utdanning, tidsbruk, kulturelt mangfold, styresett, samfunnsvitalitet, økologisk mangfold og levestandard – til én tilstrekkelighetsbasert score som brukes direkte til å sile forslag til offentlig politikk.

## Regnestykket

```
GPI = privat konsum
      + ikke-markedsmessige goder (husarbeid, frivillig innsats, høyere utdanning)
      − defensive og sosiale kostnader (kriminalitet, forurensning, pendling, familieoppløsning)
      − uttømming av natur- og sosial kapital (uttak av ressurser, tap av dyrket mark)

GNH-tilstrekkelighetsscore, per domene:
  en person er «tilstrekkelig» i et domene når vedkommende klarer terskelen for hver indikator
  Lykkeindeks = (% av befolkningen som er tilstrekkelig i ≥ 6 av 9 domener)
                    + (vektet gjennomsnittlig underskudd for den «ennå ikke lykkelige» minoriteten)
```

## Utregnet eksempel

**Region, GPI**: Privat konsum er $50 mrd. Legg til anslått verdi av husarbeid og frivillig arbeid på $12 mrd. (med lønnssatser for erstatningskostnad – se [verdien av frivillig tid](../verdien-av-frivillig-tid/)). Trekk fra anslåtte årlige kostnader ved kø og trengsel fra pendling ($3 mrd.), kriminalitet ($4 mrd.) og langsiktig uttømming av ressurser ($6 mrd.):

```
GPI = 50 + 12 − 3 − 4 − 6 = 49 ($ mrd.)
```

Hvis BNP vokste fra $50 mrd. til $55 mrd. det året (+10 %), men defensive kostnader og kostnader ved uttømming vokste raskere enn konsumet, kan GPI falle selv om BNP stiger – den «terskelhypotesen» GPI-forskere viser til for høyinntektsøkonomier siden omtrent 1970-tallet, da veksten fortsatte å stige mens GPI flatet ut.

**Innbygger, GNH**: En respondent klarer tilstrekkelighetsterskelen i 7 av 9 domener (helse, utdanning, levestandard, samfunnsvitalitet, kulturelt mangfold, økologisk mangfold, tidsbruk) men kommer til kort på psykologisk velvære og styresett. Fordi 7 ≥ 6 regnes vedkommende som «lykkelig» i opptellingen. Indeksen følger separat dybden av de to underskuddene, slik at en knapp bestått ikke blir umulig å skille fra en romslig.

## Sammenheng med programvareutvikling

- Et KPI-dashbord modellert bare på gjennomstrømning eller utgifter (BNP-mønsteret) vil systematisk overse skade som oppstår når gjennomstrømningen genereres – antall henvendelser til brukerstøtte behandlet som «engasjement» i stedet for «brukernes nød» er programvareleveransens versjon av å regne et oljeutslipp som vekst.
- GPI-lignende regnskap er et nyttig revisjonsmønster for enhver samling av [KPI-er i offentlig sektor](../nøkkeltall-i-offentlig-sektor/): For hvert hovedmål for leveranse, spør hvilken defensiv kostnad det i det stille pådrar seg (omarbeid, håndtering av hendelser, utbrenthet) og trekk den fra, slik GPI trekker defensive utgifter fra konsumet.
- GNHs metode med tilstrekkelighet per domene – bestått/ikke bestått per dimensjon, deretter aggregering – er strukturelt den samme teknikken som [multikriterieanalyse](../multikriteriell-beslutningsanalyse/) og er verdt å gjenbruke overalt der en enkelt skalar score ville skjult en kritisk svikt i én dimensjon.

## Fallgruver

- **Å behandle GPI som et presist nasjonalregnskap** – i motsetning til BNP har GPI ingen enkelt standardisert metodikk. Ulike studier vekter pendlingskostnader, frivillig tid eller ressursuttømming ulikt, så sammenligninger av GPI på tvers av studier er langt mindre pålitelige enn sammenligninger av BNP på tvers av land.
- **Å importere GNH uforandret inn i en annen politisk kultur** – domenevektene og tilstrekkelighetsterskelene ble fastsatt gjennom bhutansk konsultasjon. Å kopiere tallet uten den underliggende konsultasjonsprosessen gir et tomt mål ingen stoler på.
- **Å anta at et alternativ til BNP erstatter nytte-kostnadsvurdering** – dette er diagnostiske indikatorer for hele økonomien, ikke beslutningsverktøy for ett enkelt program. Bruk [samfunnsøkonomisk nytte-kostnadsanalyse](../samfunnsøkonomisk-nytte-kostnadsanalyse/) til det i stedet.

## Kilder

- Stiglitz JE, Sen A, Fitoussi J-P. "Report by the Commission on the Measurement of Economic
  Performance and Social Progress." (2009) <https://ec.europa.eu/eurostat/documents/118025/118123/Fitoussi+Commission+report>
- GNH Centre Bhutan. <https://www.gnhcentre.bt/>
- Redefining Progress. "The Genuine Progress Indicator: A Tool for Sustainable Development."
- Nordhaus WD, Tobin J. "Is Growth Obsolete?" (1972), NBER.
