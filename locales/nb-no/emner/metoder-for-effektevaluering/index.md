# Metoder for effektevaluering

Metoder for effektevaluering er de statistiske og eksperimentelle designene som brukes til å anslå hva en politikk eller et program faktisk forårsaket, i motsetning til hva som ville ha skjedd uansett – randomiserte kontrollerte forsøk (RCT), forskjell-i-forskjeller, propensity score matching og regresjonsdiskontinuitetsdesign er de fire mest brukte i britisk offentlig politikk. De finnes fordi de fleste offentlige tiltak ikke kan testes i et laboratorium: Man kan ikke randomisere hvilken by som får en ny bussrute på samme måte som man kan randomisere hvilken pasient som får et legemiddel, så disse metodene låner den samme kausale logikken uten alltid å kreve tilfeldig tildeling.

## Hvorfor det er viktig

HM Treasurys Magenta Book, vedlegg A om kvasi-eksperimentelle metoder, er den britiske regjeringens kanoniske veiledning for å velge mellom disse designene, og organer som Education Endowment Foundation og What Works Centre for Local Economic Growth har institusjonalisert et evidenshierarki bygget rundt dem – RCT der randomisering er gjennomførbar og etisk, kvasi-eksperimentelle design der den ikke er det. Valg av metode er ikke en teknisk etterpåklokskap: Det avgjør om en evaluering kan svare på «forårsaket programmet dette?» eller bare «skjedde dette etter at programmet startet?», som er det samme spørsmålet [kontrafaktisk analyse](../kontrafaktisk-analyse/) er bygget for å tvinge utøvere til å stille før noen evaluering bestilles.

## Regnestykket

```
RCT:
  Effekt = gjennomsnitt(utfall | behandlingsgruppe) − gjennomsnitt(utfall | kontrollgruppe)
  (gyldig fordi tildelingen til behandling er tilfeldig)

Forskjell-i-forskjeller (DiD):
  Effekt = [utfall_etter(behandlet) − utfall_før(behandlet)]
         − [utfall_etter(kontroll) − utfall_før(kontroll)]
  (krever en antakelse om «parallelle trender»: behandlede og kontroll ville ha utviklet seg likt
   uten tiltaket)

Propensity score matching (PSM):
  1. Anslå P(behandling = 1 | kovariater X) for hver enhet → propensity score
  2. Match behandlede enheter med ubehandlede enheter med lik propensity score
  3. Effekt = gjennomsnitt(utfall | behandlet) − gjennomsnitt(utfall | matchet kontroll)

Regresjonsdiskontinuitetsdesign (RDD):
  Effekt = hoppet i utfall observert ved kvalifikasjonsgrensen,
           ved å sammenligne enheter like over og like under terskelen
```

## Utregnet eksempel

**Kommune (forskjell-i-forskjeller for et program for familier i vanskeligheter)**: Utfallet er skolefravær. Det behandlede området går fra 84 % til 89 % oppmøte (+5 prosentpoeng) i løpet av programperioden, mens et sammenlignbart, ubehandlet område går fra 85 % til 87 % (+2 prosentpoeng) i samme periode. DiD-anslag for effekten: 5 − 2 = +3 prosentpoeng som kan tilskrives programmet. Brukt på en kohort på 2 000 elever i det behandlede området tilsvarer dette omtrent 60 flere elever (3 % × 2 000) som når den høyere oppmøtekategorien – en ekstrapolering som bør rapporteres med forbeholdet om parallelle trender, ikke som et presist antall.

**Veldedig organisasjon (propensity score matching for en organisasjon som arbeider med arbeidsrettet kompetanse)**: 300 programdeltakere matches med 300 personer fra et større administrativt datasett ved hjelp av propensity scores bygget på alder, tidligere arbeidshistorikk og kvalifikasjonsnivå. Sysselsettingsrate etter tolv måneder: matchet behandlet gruppe 46 %, matchet sammenligningsgruppe 33 %. PSM-anslag for effekten: 46 % − 33 % = +13 prosentpoeng som kan tilskrives programmet, forutsatt at ingen uobservert konfunderende faktor (som motivasjon) driver både deltakelse og utfall.

## Sammenheng med programvareutvikling

Om noen av disse designene er gjennomførbare senere, avhenger sterkt av databeslutninger som tas tidlig. RDD trenger en nøyaktig registrert løpevariabel og en genuint ren kvalifikasjonsgrense. DiD trenger sammenlignbare paneldata over tid for både behandlede og sammenlignbare områder, noe som betyr konsistente koblinger på tvers av systemer og år. PSM trenger rike data om kovariater ved baseline, innsamlet før behandling, ikke rekonstruert i etterkant. En datamodell utformet sammen med en [endringsteori](../endringsteori/) og en [logisk modell](../logisk-modell/) fra starten – som fanger baseline-kovariater, datoer og poster som kan inngå i en sammenligningsgruppe – er det som gjør en grundig effektevaluering mulig senere, i stedet for et kostbart etterpåklokt jag. Se [effektevaluering mot prosessevaluering](../effektevaluering-mot-prosessevaluering/) for det utfyllende spørsmålet disse metodene ikke besvarer alene.

## Fallgruver

- **Å tvinge frem en RCT der den ikke er gjennomførbar eller etisk**, eller omvendt aldri å vurdere et kvasi-eksperimentelt design når en reell mulighet for ett – en politisk terskel, en trinnvis utrulling – var tilgjengelig og ubrukt.
- **Å overse antakelsen om parallelle trender i DiD.** Hvis sammenligningsområdet allerede divergerte fra det behandlede området før tiltaket, er sammenligningen mellom to tidspunkter forurenset – kontroller trender før tiltaket, ikke bare før/etter.
- **Å matche bare på observerte kovariater i PSM.** Uobservert seleksjon, som deltakernes motivasjon, kan skjevfordreie anslaget selv når observerte kovariater er godt balansert.
- **Manipulering av løpevariabelen i RDD.** Hvis folk kan påvirke sin score slik at den havner like innenfor en kvalifikasjonsterskel, isolerer diskontinuiteten ikke lenger en kausal effekt.

## Kilder

- HM Treasury, Magenta Book (2020), Annex A: Quasi-Experimental Methods. <https://www.gov.uk/government/publications/the-magenta-book>
- What Works Centre for Local Economic Growth, evidence review methodology. <https://whatworksgrowth.org/>
- Education Endowment Foundation, evaluation guidance. <https://educationendowmentfoundation.org.uk/>
