# Samfunnets diskonteringsrate

Samfunnets diskonteringsrate omregner fremtidige kostnader og nytteeffekter til dagens verdi, slik at programmer med avkastning spredt over flere tiår kan sammenlignes på et felles grunnlag. HM Treasurys Green Book fastsetter en avtagende tabell forankret i 3,5 % de første 30 årene, basert på Ramsey-formelen – et konkret og siterbart tall som har blitt et levende politisk og etisk stridsspørsmål hver gang det brukes på forpliktelser med lang horisont, som klimapolitikk eller infrastruktur.

## Hvorfor det er viktig

Et pund i nytte om 30 år er ikke verdt like mye som et pund i nytte i dag. Det skyldes dels ren tidspreferanse (mennesker og samfunn foretrekker gode ting tidligere) og dels vekst (et fremtidig samfunn forventes å være rikere, så et pund betyr mindre for det i marginen). Green Books vedlegg 6 utleder Storbritannias standard diskonteringsrate fra Ramsey-formelen, som kombinerer en rate for ren tidspreferanse med forventet vekstrate i konsum og elastisiteten i marginalnytten av konsum. Resultatet er den publiserte raten på 3,5 % per år for år 0–30, avtagende i en publisert tabell fra år 31 og utover (ned til 1 % for år 301+). Tabellen finnes nettopp fordi en konstant rate på 3,5 % rentes over et århundre ville fått nesten enhver nytte med lang horisont – et flomvern som redder liv om 80 år, en karbonreduksjon som unngår skade om 100 år – til å fremstå som ubetydelig i nåverdi. Treasury vurderte det som en lite plausibel etisk konklusjon for infrastruktur- og miljøbeslutninger med virkelig lang levetid.

Diskonteringsraten er omstridt nettopp fordi valget ikke er en nøytral teknisk parameter: det rommer en vurdering av hvor mye et samfunn bør ofre i dag for mennesker som ikke er født ennå. Stern Review om klimaendringenes økonomi (2006) brukte en diskonteringsrate nær null (en ren tidspreferanse på rundt 0,1 %) og hevdet at det er etisk uforsvarlig å diskontere fremtidige generasjoners velferd med noe som ligner markedsrenter når skaden (katastrofale klimaendringer) er uopprettelig. Kritikere – særlig William Nordhaus – mente at Sterns nær-nullrate overdrev argumentene for umiddelbare klimautgifter, ved at nesten enhver nåtidskostnad virker rettferdiggjort mot en knapt diskontert fremtidig nytte. Uenigheten handlet ikke om regnestykket, men om hvem sitt etiske rammeverk som skal fastsette raten. Den er fortsatt standardillustrasjonen på hvorfor diskonteringsraten er et politisk valg, ikke bare en aktuarmessig inndata.

## Regnestykket

Ramsey-formelen bak Green Books rate:

```
r = ρ + η·g

der:
  r = samfunnets diskonteringsrate
  ρ = rate for ren tidspreferanse (utålmodighet + katastroferisiko)
  η = elastisiteten i marginalnytten av konsum
  g = forventet årlig vekstrate i konsum per innbygger
```

Green Books avtagende tabell (vedlegg 6, illustrativ – sjekk gjeldende utgave for den nøyaktige publiserte tabellen):

```
År 0–30:     3,5 %
År 31–75:    3,0 %
År 76–125:   2,5 %
År 126–200:  2,0 %
År 201–300:  1,5 %
År 301+:     1,0 %
```

Nåverdi av en fremtidig sum:

```
NV = FV / (1 + r)^t
```

## Utregnet eksempel

**Flomsikringstiltak**: et prosjekt gir £10 millioner i unngåtte flomskader i år 40.

Med en flat rate på 3,5 %: NV = 10 000 000 / (1,035)^40 ≈ £2,52 millioner – nytten ser liten ut.

Med Green Books avtagende tabell (3,5 % for år 0–30, 3,0 % deretter) rentes beløpet med 3,5 % de første 30 årene og 3,0 % for år 31–40:

```
NV = 10 000 000 / [(1,035)^30 × (1,03)^10]
   = 10 000 000 / [2,807 × 1,344]
   ≈ 10 000 000 / 3,773
   ≈ £2,65 millioner
```

Den avtagende tabellen hever nåverdien av nytte med lang horisont moderat sammenlignet med en flat høy rate. Det er tabellens uttrykte formål, siden en flat rate på 3,5 % over et århundre ville diskontert en nytte på £100 millioner i år 100 til under £3,3 millioner.

**Digital infrastruktur**: en statlig skymigrering som koster £4 millioner nå, forventes å unngå £500 000 per år i vedlikeholdskostnader for eldre systemer i 15 år. Ved 3,5 % er nåverdien av denne annuiteten omtrent £500 000 × 11,52 (annuitetsfaktoren for 15 år ved 3,5 %) ≈ £5,76 millioner – klart over kostnaden på £4 millioner, en case med positiv netto nåverdi som ville sett markant svakere ut ved en naivt valgt høyere rate (ved 7 % faller samme annuitetsfaktor til om lag 9,11, som gir £4,56 millioner, fortsatt positivt, men med en mye tynnere margin).

## Sammenheng med programvareutvikling

De fleste programvarecaser løper over 3–5 år, godt innenfor det flate båndet på 3,5 %, så den avtagende tabellen slår sjelden direkte inn. Men den underliggende disiplinen er viktig for enhver offentlig teknologiinvestering med lang levetid (en nasjonal plattform, et datainfrastrukturprogram, en kontrakt over flere tiår):

- Bruk Green Books publiserte rate i stedet for en intern «hurdle rate» lånt fra privat finans. Revisorer og Treasury-gjennomgangen forventer standardtabellen.
- For nytte som realiseres mange år frem (en plattforms langsiktige vedlikeholdsbesparelser, et åpent dataøkosystems sammensatte verdi – se [verdien av åpne data](../verdien-av-åpne-data/)) kan valget av diskontering snu en case fra positiv til negativ. Gjør raten og horisonten til eksplisitte forutsetninger, ikke skjulte standardverdier.
- Dette mater direkte inn i [Green Book-vurdering](../vurdering-etter-green-book/), femcasemodellen som formelt krever en diskontert kontantstrøm, og inn i [verdsetting av velvære](../verdsetting-av-velvære/), der det samme diskonteringsspørsmålet oppstår for ikke-monetær velværenytte.
- Se også [mellomgenerasjonell rettferdighet og diskontering for bærekraft](../rettferdighet-mellom-generasjoner-og-diskontering-ved-bærekraft/) for Stern-mot-Nordhaus-debatten anvendt spesifikt på investeringer i miljø- og klimateknologi.

## Fallgruver

- **Å bruke en flat rate for svært lange horisonter.** Green Books avtagende tabell finnes nettopp fordi en konstant rate undervurderer nytte med virkelig lang levetid. Sjekk hvilket bånd som gjelder i stedet for å bruke 3,5 % hele veien.
- **Å behandle diskonteringsraten som etisk nøytral.** Striden mellom Stern og Nordhaus viser at raten rommer en verdivurdering om fremtidige generasjoner. Å endre den endrer hvilke programmer som fremstår som berettiget, så den bør oppgis og forsvares, ikke gjemmes i en standardverdi i et regneark.
- **Å forveksle samfunnets diskonteringsrate med en privat kapitalkostnad.** Statens lånekostnader og private hurdle rates er andre begreper enn den Ramsey-utledede samfunnsraten, og å bytte den ene med den andre i en offentlig analyse vil vanligvis forvride resultatet i retning av kortsiktig avkastning.
- **Å diskontere reelle og nominelle kontantstrømmer inkonsekvent.** Green Book-raten er en reell (inflasjonsjustert) rate. Å diskontere nominelle kontantstrømmer med den undervurderer nåverdiene vesentlig.

## Kilder

- HM Treasury, «The Green Book: Central Government Guidance on Appraisal and Evaluation», vedlegg 6 (2022). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Stern N. «The Economics of Climate Change: The Stern Review.» HM Treasury, 2006.
- Nordhaus WD. «A Review of the Stern Review on the Economics of Climate Change.» Journal of Economic Literature, 2007;45(3):686–702.
- Ramsey FP. «A Mathematical Theory of Saving.» Economic Journal, 1928;38(152):543–559.
