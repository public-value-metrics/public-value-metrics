# Effektevaluering mot prosessevaluering

Effektevaluering spør om et program forårsaket de tiltenkte utfallene. Prosessevaluering spør om programmet faktisk ble levert slik det var utformet – til hvem, i hvilken dose, og med hvilke hindringer eller fremmende faktorer underveis. Dette er ulike spørsmål som krever ulike metoder, og HM Treasurys Magenta Book behandler det å bestille begge sammen som standard praksis, fordi et svakt eller manglende effektresultat er umulig å tolke alene: Det kan ikke fortelle deg om programmets underliggende teori var feil, eller om en god teori rett og slett aldri ble levert ordentlig.

## Hvorfor det er viktig

Offentlige evalueringer har gjentatte ganger funnet ingen målbar effekt av et program uten å ha en prosessevaluering som forklarer hvorfor – og dermed latt bestillerne være ute av stand til å skille mellom «denne ideen virker ikke» (teorisvikt) og «denne ideen ble aldri forsøkt ordentlig» (implementeringssvikt). Medical Research Councils veiledning om prosessevaluering av komplekse intervensjoner, publisert i BMJ i 2015 og mye sitert ved siden av Magenta Book, formaliserte troskap (fidelity), dose og rekkevidde som det en prosessevaluering minst må måle. Å bestille en effektevaluering uten en prosessevaluering risikerer å forkaste et genuint godt programdesign fordi det ble levert til halvparten av den tiltenkte populasjonen med en brøkdel av den tiltenkte intensiteten – en feil en systembygger er godt plassert til å forhindre, fordi leveransetroskap er nettopp det driftssystemer kan fange opp nesten i sanntid.

## Regnestykket

```
Prosessevaluering spør:
 - Ble det levert til målgruppen, i planlagt dose/intensitet?
 - Svarte leveransen til designet i den logiske modellen / endringsteorien?
 - Hvilke hindringer eller fremmende faktorer påvirket leveransen?
 Metoder: troskapskontroller mot forhåndsspesifiserte terskler, kasusstudier, intervjuer,
          administrative leveransedata.

Effektevaluering spør:
 - Hva endret seg, og hvor mye av endringen kan tilskrives programmet?
 Metoder: RCT, DiD, PSM, RDD – se impact-evaluation-methods – mot et kontrafaktisk scenario.

Samlet diagnose:
 Ingen effekt + høy troskap       → teorisvikt: selve modellen ga ikke utfallet
 Ingen effekt + lav troskap       → implementeringssvikt: modellen ble aldri ordentlig testet
 Effekt funnet + høy troskap      → gjenta med trygghet
 Effekt funnet + lav troskap      → undersøk nærmere: effekten kan være skjør eller stedsspesifikk
```

## Utregnet eksempel

**Kommune (foreldreprogram)**: En effektevaluering med forskjell-i-forskjeller finner en endring på +2 prosentpoeng i et mål på barns velvære – ikke statistisk signifikant. Prosessevalueringen, gjennomført parallelt, finner at programmet bare nådde 210 av de 500 målrettede familiene (42 % rekkevidde), og av disse fullførte bare 95 den forhåndsspesifiserte troskapsterskelen på 75 %+ av øktene – 19 % av den opprinnelig planlagte rekkevidden. Konklusjon: Det svake effektresultatet er forenlig med implementeringssvikt, ikke bevis for at programmodellen ikke virker. Riktig respons er å utbedre henvisningsløpet som forårsaket frafallet på 58 %, ikke å forkaste programdesignet.

**Veldedig organisasjon (program for digital kompetanse)**: En effektevaluering finner en sterk effekt (+18 prosentpoeng på en score for digital selvtillit), og en parallell prosessevaluering bekrefter 92 % troskap mot den planlagte læreplanen på alle 12 leveransestedene. Samlet kan finansiøren skalere programmet med trygghet, fordi effekten er vist å holde seg konsekvent i stedet for å være produktet av ett uvanlig godt sted.

## Sammenheng med programvareutvikling

Prosessevalueringsdata er nettopp det leveransesystemer er godt plassert til å fange: oppmøte mot plan, antall økter per deltaker og frafall på hvert trinn i en henvisnings- eller påmeldingstrakt – den samme traktanalysen utviklere allerede bygger for produktfunksjoner, brukt på et sosialt programs leveranseløp i stedet. Å gi programledere mål for troskap og rekkevidde nesten i sanntid, i stedet for å vente på en evaluering ved tilskuddets slutt, gjør at et ødelagt henvisningsløp kan fikses underveis i stedet for å oppdages først når finansieringsperioden er over. Se [metoder for effektevaluering](../metoder-for-effektevaluering/) for de kausale designene prosessevaluering pares med, [endringsteori](../endringsteori/) og [logisk modell](../logisk-modell/) for designet prosessevalueringen kontrollerer troskap mot, og [gevinstrealisering](../gevinstrealisering/) for å følge leveransen helt frem til utfallene som ble lovet.

## Fallgruver

- **Å bestille bare effektevaluering.** Et manglende eller svakt resultat kan da ikke tolkes som teorisvikt eller implementeringssvikt, som nettopp er skillet som betyr noe for å avgjøre hva man skal gjøre videre.
- **Å behandle prosessevaluering som et mykt tillegg.** Den trenger samme stringens og forhåndsspesifiserte troskapskriterier som effektdesignet, ellers kollapser den til anekdoter når resultatene kommer.
- **Å forveksle «i rute og innenfor budsjett» med «levert som designet».** Prosessevaluering kontrollerer troskap mot modellen – dose, målgruppe, innhold – ikke prosjektstyringens RAG-status.
- **Å ikke forhåndsregistrere troskapsterskler.** Å bestemme i etterkant hva som regnes som «tilstrekkelig dose» får enhver forklaring på et skuffende effektresultat til å fremstå som etterpåklok unnskyldning.

## Kilder

- HM Treasury, Magenta Book (2020). <https://www.gov.uk/government/publications/the-magenta-book>
- Moore G, et al., "Process evaluation of complex interventions: Medical Research Council
  guidance." BMJ 2015;350:h1258. <https://www.bmj.com/content/350/bmj.h1258>
- National Audit Office, programme evaluation reports. <https://www.nao.org.uk/>
