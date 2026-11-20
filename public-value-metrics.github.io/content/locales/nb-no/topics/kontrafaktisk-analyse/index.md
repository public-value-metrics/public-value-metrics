# Kontrafaktisk analyse

Et kontrafaktisk scenario er et anslag på hva som ville ha skjedd uten et tiltak. Uten det kan en observert endring etter at et program er lansert ikke skilles fra en endring som ville ha kommet uansett – uten kontrafaktisk scenario, ingen dokumentasjon av effekt, uansett hvor overbevisende før-og-etter-tallene ser ut. HM Treasurys Magenta Book behandler det å konstruere et troverdig kontrafaktisk scenario som den sentrale metodiske oppgaven i effektevaluering, viktigere enn noe annet enkelt designvalg.

## Hvorfor det er viktig

«Kriminaliteten falt 15 % året etter at vi innførte programmet» er ikke dokumentasjon på at programmet virket, med mindre du vet hva som ville ha skjedd med kriminaliteten uten det – kriminaliteten kunne ha falt 20 % uansett på grunn av urelaterte økonomiske eller demografiske trender, noe som betyr at programmet faktisk gjorde ting verre i forhold til det kontrafaktiske scenarioet, til tross for at råtallet ble bedre. Dette er den vanligste analytiske feilen i effektpåstander fra offentlig og sosial sektor: å forveksle en før/etter-sammenligning med dokumentasjon på årsakssammenheng. Magenta Book er uttrykkelig på at effektevaluering finnes for å besvare et kontrafaktisk spørsmål – «hvilken forskjell gjorde dette tiltaket?» – og at å besvare det krever å anslå, ikke bare beskrive, verdenen som ikke ble.

Ulike metoder konstruerer det kontrafaktiske scenarioet med ulik grad av sikkerhet, og britiske evalueringsveiledere rangerer dem deretter. Randomiserte kontrollerte forsøk (RCT-er), der enkeltpersoner eller områder tilfeldig tildeles tiltaket eller ikke, gir det sterkeste kontrafaktiske scenarioet fordi randomiseringen sikrer at behandlings- og kontrollgruppen i gjennomsnitt bare skiller seg ved at den ene mottar tiltaket. Cabinet Office og What Works Network har fremmet RCT-er i hele britisk offentlig politikk siden rapporten «Test, Learn, Adapt» fra Behavioural Insights Team i 2012, nettopp fordi svakere design er sårbare for konfundering – den observerte forskjellen kan gjenspeile hvem som valgte å delta, ikke programmets effekt. Der randomisering er upraktisk eller uetisk (som den ofte er for programmer med lovfestet rett eller for endringer som gjelder hele befolkningen), setter Magenta Book opp et eksplisitt hierarki av svakere, men fortsatt nyttige alternativer: matchede sammenligningsgrupper, differanse-i-differanse-design, regresjonsdiskontinuitet rundt kvalifikasjonsgrenser og, som siste utvei, enkel før/etter-sammenligning – tydelig merket som den svakeste formen for evidens, utsatt for å forveksle programmets effekt med effekten av alt annet som endret seg samtidig.

## Regnestykket

Rammen for det kontrafaktiske, gjeldende for alle metoder:

```
Anslått effekt = Utfall(med tiltak) − Utfall(kontrafaktisk: uten tiltak)

IKKE:
Anslått effekt ≠ Utfall(etter) − Utfall(før)   [forveksler tid med behandling]
```

Differanse-i-differanse, et av de vanligste kvasieksperimentelle designene i offentlig evaluering, isolerer behandlingseffekten ved å trekke fra sammenligningsgruppens egen før/etter-endring:

```
DiD-estimat = [Utfall(behandlet, etter) − Utfall(behandlet, før)]
            − [Utfall(sammenligning, etter) − Utfall(sammenligning, før)]
```

Dette fjerner enhver trend som er felles for begge gruppene (f.eks. et nasjonalt økonomisk skifte som påvirker alle), og etterlater bare den differensielle endringen som kan tilskrives tiltaket.

## Utregnet eksempel

**Sysselsettingsprogram, før/etter (svakt design)**: en ordning for jobbstøtte rapporterer at deltakernes sysselsetting steg fra 40 % til 55 % i løpet av et år – en naiv konklusjon om «+15 prosentpoeng på grunn av programmet».

**Samme program, differanse-i-differanse (sterkere design)**: en matchet sammenligningsgruppe av tilsvarende ikke-deltakere fra samme lokale arbeidsmarked viser sysselsetting som stiger fra 38 % til 47 % i løpet av samme år (en nasjonal økonomisk bedring var i gang).

```
Endring i behandlet gruppe:      55 % − 40 % = +15 prosentpoeng
Endring i sammenligningsgruppe:  47 % − 38 % = +9 prosentpoeng

DiD-estimat (reell programeffekt) = 15 − 9 = +6 prosentpoeng
```

Den ærlige tilskrivbare effekten er 6 prosentpoeng, ikke 15 – mer enn halvparten av den tilsynelatende før/etter-forbedringen ville ha skjedd uansett programmet, drevet av den samme økonomiske bedringen som løftet sammenligningsgruppen.

**Regresjonsdiskontinuitet, kvalifikasjonsgrense**: en tilskuddsordning er bare tilgjengelig for bedrifter med færre enn 50 ansatte. Å sammenligne utfall for bedrifter like under grensen (45–49 ansatte, kvalifisert) med bedrifter like over (50–54 ansatte, ikke kvalifisert) gir et troverdig kontrafaktisk scenario, fordi bedrifter på hver side av en vilkårlig administrativ grense ellers er like – det er grensen, ikke noen underliggende bedriftsegenskap, som avgjør kvalifikasjonen. En gjennomsnittlig utfallsforskjell på £2 000 mellom de to gruppene, observert bare ved grensen, kan tilskrives tilskuddet med langt større sikkerhet enn en enkel sammenligning av alle kvalifiserte mot alle ikke-kvalifiserte bedrifter (som skiller seg systematisk i størrelse).

## Sammenheng med programvareutvikling

Kontrafaktisk tenkning bør prege hvordan systemer for effektsporing og evalueringsløp for offentlig og sosial programvare utformes:

- Bygg inn registrering av sammenligningsgruppe i et system fra begynnelsen – registrer hvem som var kvalifisert, men ikke innskrevet, eller en matchet kohort av ikke-deltakere – i stedet for å ettermontere det etter at et program allerede har kjørt og det bare finnes før/etter-data.
- Der randomisering er mulig (en trinnvis utrulling, en digital tjeneste som er aktivert for noen brukere før andre), instrumenter systemet slik at den tilfeldige tildelingen bevares som et spørrbart felt; en trinnvis utrulling ødelegger ved et uhell sin egen evalueringsverdi hvis tildelingsrekkefølgen ikke logges.
- Dette er grunnmetoden bak [metoder for effektevaluering](../metoder-for-effektevaluering/) og det som skiller den fra [effektevaluering versus prosessevaluering](../effektevaluering-mot-prosessevaluering/), der sistnevnte spør om et program ble levert som tiltenkt, ikke om det forårsaket en effekt.
- [Addisjonalitet og dødvekt](../addisjonalitet-og-dødvekt/) og [fortrenging og tilskrivning](../fortrengning-og-attribusjon/) er begge, i bunn og grunn, kontrafaktiske spørsmål – dødvekt er «hva ville dette konkrete utfallet ha vært uten tiltaket», anvendt på justeringsnivå snarere enn som fullt evalueringsdesign.

## Fallgruver

- **Å behandle før/etter som dokumentasjon på årsakssammenheng.** Dette er den vanligste og mest konsekvensrike feilen i effektrapportering fra offentlig og sosial sektor; en før/etter-endring forveksler programmets effekt med alt annet som endret seg i samme periode.
- **Å bruke en sammenligningsgruppe som skiller seg systematisk fra den behandlede gruppen.** En matchet sammenligningsgruppe må være genuint lik på relevante kjennetegn (se hierarkiet av metoder i Magenta Book for [kontrafaktisk analyse](../kontrafaktisk-analyse/)); å sammenligne programdeltakere (som meldte seg på, og ofte er mer motiverte) med ikke-deltakere (som ikke gjorde det) risikerer at seleksjonsskjevhet fremstår som programeffekt.
- **Å ødelegge muligheter for randomisering gjennom dårlig leveransedesign.** En trinnvis eller randomisert utrulling bevarer bare sin evalueringsverdi hvis tildelingen er genuint tilfeldig og registrert – å la lokale ledere velge hvem som går først, ødelegger hensikten.
- **Å overdrive presisjonen fra et svakt design.** Et før/etter-estimat bør presenteres som veiledende, ikke som en målt effektstørrelse; evidenshierarkiet i Magenta Book finnes for at styrken i en påstand skal svare til styrken i designet som frembrakte den.

## Kilder

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020), and its
  supplementary guide on quasi-experimental methods.
  <https://www.gov.uk/government/publications/the-magenta-book>
- Cabinet Office / Behavioural Insights Team, "Test, Learn, Adapt: Developing Public Policy with
  Randomized Controlled Trials" (2012).
- What Works Network, standards of evidence guidance. <https://www.gov.uk/guidance/what-works-network>
- Angrist JD, Pischke J-S. *Mostly Harmless Econometrics: An Empiricist's Companion*. Princeton
  University Press, 2009 (standardreferanse for differanse-i-differanse og regresjonsdiskontinuitet).
