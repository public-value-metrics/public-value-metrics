# Nøkkeltall i offentlig sektor

Et nøkkeltall (key performance indicator, KPI) er et valgt, fulgt mål som skal si om en offentlig tjeneste gjør jobben sin godt. I forvaltningen er valget av nøkkeltall aldri nøytralt: fordi nøkkeltall knyttes til budsjetter, ranglister og karrierer, former selve valget atferden til alle nedstrøms, ofte mer enn politikken som skapte tjenesten.

## Hvorfor det er viktig

Charles Goodharts observasjon fra 1975 om pengepolitikk – senere popularisert av Marilyn Strathern som «når et mål blir et mål å styre etter, slutter det å være et godt mål» – er den viktigste varselmerkingen i resultatstyring i offentlig sektor. Et nøkkeltall valgt for å *beskrive* et system begynner å *forvrenge* systemet i det øyeblikket ressurser, lønn eller politisk overlevelse knyttes til det. Det klassiske eksempelet er responstider for ambulanser i NHS: da åtte-minuttersmålet for Category A-respons ble bindende, ble det vist at noen foretak «stablet» ambulanser rett utenfor responstidsklokken, eller omklassifiserte anrop, for å treffe tallet uten å endre pasientutfall. Den britiske National Audit Offices veiledning om valg og bruk av resultatindikatorer – utformet gjennom rapportene om valuta for pengene og rammeverkene «Performance Measurement by Regulators» og «Choosing the Right FABRIC» (Fit for purpose, Appropriate, Balanced, Robust, Integrated, Cost-effective) – finnes nettopp fordi departementer stadig valgte indikatorer som var lette å rapportere, framfor indikatorer som var vanskelige å manipulere. En programvareutvikler som leverer dashbordet en minister eller direktør skal vurderes etter, utformer, enten hen vil eller ikke, insentivstrukturen i en offentlig institusjon.

## Regnestykket

Utforming av nøkkeltall er et rammeverkpreget tema, men *vurderingen* av et kandidatnøkkeltall er en repeterbar sjekkliste, ikke en formel:

```
For hvert kandidatnøkkeltall, skår mot:
  Fit for purpose  — måler det utfallet, eller en proxy flere trinn unna?
  Appropriate      — tilhører det dem som faktisk kan påvirke det?
  Balanced         — er det paret med et motmål som fanger manipulasjon?
  Robust           — tåler det revisjon, eller er det egenrapportert og uverifiserbart?
  Integrated       — passer det inn i det bredere settet, eller trekker det mot et annet nøkkeltall?
  Cost-effective   — koster innsamlingen mer enn beslutningen det informerer?

Ledende versus etterslepende:
  Ledende indikator     → forutsier framtidig utfall, men ofte manipulerbar (f.eks. anrop besvart <60 s)
  Etterslepende indikator → bekrefter at utfallet skjedde, men kommer for sent til å styre (f.eks. årlig
                          tilfredshetsundersøkelse)
  Et forsvarlig sett nøkkeltall parer minst én av hver per mål.
```

## Utregnet eksempel

**Ambulansetjeneste**: et foretak rapporterer et nøkkeltall for responstid for Category A (livstruende) på «75 % av anropene besvart innen 8 minutter». I ett kvartal kommer det inn 6 000 Category A-anrop; 4 500 er besvart innen 8 minutter, som gir 75,0 % – tilsynelatende på målet.

```
Overskriftsnøkkeltall = 4 500 / 6 000 × 100 = 75,0 %  (oppfyller terskelen på 75 %)
```

Men en Goodhart-revisjon legger til et motmål: gjennomsnittlig responstid for de tregeste 10 % av anropene.

```
Gjennomsnittlig respons i tregeste desil = 34 minutter (opp fra 19 minutter to år tidligere)
```

Foretaket treffer målet mens halen – anropene som mest sannsynlig er virkelig livstruende når triageringen er ufullkommen – har blitt mye verre, fordi mannskapene prioriteres mot anrop nær 8-minuttersgrensen framfor etter klinisk hastegrad. Det enkelte nøkkeltallet fortalte en falsk historie; det parede nøkkeltallet fortalte den sanne.

## Sammenheng med programvareutvikling

Utviklere som bygger resultatdashbord for forvaltningen utformer, funksjonelt sett, organisasjonens insentiv-API. Praktiske konsekvenser: instrumenter *nevneren* like grundig som telleren (et nøkkeltall rapportert som en ren prosent innbyr til manipulasjon av nevneren – se [kostnad per transaksjon](../kostnad-per-transaksjon/) for den samme fellen i digitale tjenester); bygg motmål inn i samme dashbord i stedet for en separat rapport ingen leser, slik at manipulasjon er synlig der beslutningen tas; og versjoner definisjonen av nøkkeltallet, fordi en stille omdefinering (å endre hva som regnes som et «anrop», en «sak» eller en «gjennomføring») funksjonelt tilsvarer å endre målet uten å kunngjøre det. Et [offentlig verdi-scorecard](../scorecard-for-offentlig-verdi/) er én strukturert måte å hindre at ett enkelt nøkkeltall leses isolert, og [utfallsbasert ansvarliggjøring](../utfallsbasert-ansvarliggjøring/) er disiplinen å velge nøkkeltall på befolkningsnivå som ett enkelt team ikke ensidig kan forvrenge.

## Fallgruver

- **Å velge det lettinnsamlede målet framfor det meningsfulle**: svartid på anrop er trivielt å logge; om anropet løste innbyggerens problem er det ikke – men bare det siste er utfallet. Stå imot fristelsen til å falle tilbake på det systemet allerede gir fra seg.
- **Intet motmål**: ethvert nøkkeltall knyttet til penger eller omdømme vil bli manipulert i marginen; send det ut med et paret mål som fanger den sannsynlige manipulasjonsvektoren før det publiseres.
- **Å omdefinere målet uten endringslogg**: å bytte «anrop mottatt» med «anrop besvart» for å pynte på en trend ødelegger tidsseriens troverdighet i det øyeblikket det oppdages – publiser alltid en endringslogg for definisjoner sammen med tallene.
- **Å forveksle aktivitet med resultat**: å telle gjennomførte inspeksjoner er en leveranse; å telle lokaler brakt i samsvar er nærmere utfallet (se [utfall versus leveranser](../utfall-versus-leveranser/)).

## Kilder

- National Audit Office, "Choosing the Right FABRIC: A Framework for Performance Information."
  <https://www.nao.org.uk/>
- Marilyn Strathern, "'Improving Ratings': Audit in the British University System," *Social
  Anthropology*, 1997 (formulation of Goodhart's law as commonly cited).
- National Audit Office, investigations into NHS ambulance service performance reporting.
  <https://www.nao.org.uk/>
