# Staten som plattform (GaaP)

Staten som plattform (Government as a Platform) er strategien å bygge delte, gjenbrukbare komponenter – en varslingstjeneste, en betalingstjeneste, en identitetstjeneste – én gang, sentralt, slik at hundrevis av enkeltstående offentlige tjenester bruker dem i stedet for å bygge hver sin. Den omformulerer offentlig digital infrastruktur som et spørsmål om plattformøkonomi: Verdien ligger ikke i én enkelt integrasjon, men i at marginalkostnaden for det *neste* teamet som tar den i bruk nærmer seg null.

## Hvorfor det er viktig

GDS la strategien frem formelt i publikasjonen «Government as a Platform» fra 2015, og pekte på at forvaltningen hadde bygget de samme funksjonene – betalingsinnkreving, brukervarsling, identitetsverifisering, adresseoppslag – hver for seg i tjeneste etter tjeneste, hver med egen anskaffelse, sikkerhetsvurdering og løpende støttebyrde. Alternativet var et lite antall delte plattformer, bygget til høy standard én gang og gjenbrukt overalt: GOV.UK Notify for å sende e-post, tekstmeldinger og brev, GOV.UK Pay for å ta imot betalinger på nett, og GOV.UK One Login (etterfølger til det tidligere identitetsprogrammet GOV.UK Verify) for identitetsverifisering. Skalaen disse plattformene har nådd er det klareste beviset på at strategien virket: GOV.UK Pay har behandlet over £10 milliarder i transaksjoner på tvers av rundt 1 800 enkelttjenester – og der det tok omtrent fire år å behandle den første milliarden, behandler den nå like mye på omtrent fem måneder – mens GOV.UK Notify har sendt mer enn 9 milliarder meldinger på vegne av over 1 500 offentlige organisasjoner. Hver eneste av disse tjenestene slapp å bygge, sikre og vedlikeholde sin egen betalingsløsning eller meldingsinfrastruktur.

## Regnestykket

```
Utviklingskostnad per tjeneste (uten plattform) = N tjenester × kostnad for å bygge,
  sikkerhetsvurdere og drifte ett betalings-/varslings-/identitetssystem

Plattformkostnad = fast utviklingskostnad for plattformen
              + marginalkostnad per tjeneste som tar den i bruk (integrasjon,
                konfigurasjon, løpende støtte fra plattformteamet)

Gjenbruk går i null når:
  utviklingskostnad for plattformen < N × (utviklingskostnad per tjeneste − marginal
  integrasjonskostnad)

For en moden plattform nærmer marginalkostnaden per ekstra bruker seg
bare transaksjons-/meldingsgebyret – den faste kostnaden fordeles over
hele statens portefølje, ikke ett departements budsjett, og det er derfor
GaaP-komponenter vanligvis finansieres sentralt i stedet for å belastes
med full kostnadsdekning hos de første brukerne.
```

## Utregnet eksempel

**Kommune som tar i bruk GOV.UK Pay i stedet for å bygge en egen betalingsløsning**:

```
Anslag for å bygge selv:
  arbeid med PCI-DSS-samsvar + integrasjon + løpende vedlikehold
  ≈ £85 000 utvikling + £22 000/år vedlikehold

Bruk av GOV.UK Pay:
  Integrasjonsinnsats ≈ £12 000 (utviklertid)
  Transaksjonsgebyrer: kortbetalinger fra innbyggere til det offentlige belastes
  vanligvis med en liten prosentandel + fast gebyr per transaksjon, uten
  at kommunen bærer noen egen PCI-DSS-byrde
  ≈ £12 000 engangs, løpende kostnad varierer med volum, ikke fast

Besparelse første år ≈ £85 000 − £12 000 = £73 000, før man regner med de
unngåtte £22 000/år i vedlikehold og den unngåtte etterlevelsesrisikoen ved
å oppbevare kortdata i et kommunedrevet system i det hele tatt – denne andre
kategorien er sikkerhetsverdien som behandles i
public-sector-cybersecurity-value.
```

Skaler de £73 000 over de omtrent 1 800 tjenestene som nå bruker GOV.UK Pay, og de samlede unngåtte utviklingskostnadene i forvaltningen når hundrevis av millioner – det er plattformøkonomien, ikke noen enkelt integrasjon, som er der strategiens verdi faktisk ligger.

## Sammenheng med programvareutvikling

Staten som plattform er et direkte argument for [utvikle selv eller kjøpe i offentlig forvaltning](../utvikle-selv-eller-kjøpe-i-offentlig-forvaltning/): Når en delt, vurdert og godt drevet komponent finnes, er det svært sjelden et bedre valg for [valuta for pengene](../verdi-for-pengene/) å bygge en skreddersydd tilsvarende, og det svikter punkt 13 i [standard for digitale tjenester](../standard-for-digitale-tjenester/) («bruk og bidra til åpne standarder, felles komponenter og mønstre») nesten per definisjon. Det endrer også formen på [totale eierkostnader for IT i offentlig sektor](../totalkostnad-for-eierskap-i-offentlig-it/): Plattformbruk bytter en stor investerings- og vedlikeholdspost mot en mindre, bruksavhengig driftskostnad, som er enklere å prognostisere og enklere å fjerne hvis en tjeneste avvikles. Åpen gjenbruk av komponenter har en fetter i [verdien av åpne data](../verdien-av-åpne-data/) – begge er strategier for å behandle noe det offentlige produserer én gang som delt infrastruktur i stedet for en eiendel i ett departement.

## Fallgruver

- **Skyggebygging**: Team bygger i det stille sin egen betalings- eller varslingsintegrasjon fordi plattformens påmeldingsprosess er tregere enn å gjøre det selv – et styringsfriksjonsproblem, ikke et teknologisk, som i det stille undergraver gjenbruksøkonomien hele strategien avhenger av.
- **Å underfinansiere plattformteamet i forhold til verdien det skaper**: Verdien tilfaller departementene som bruker plattformen mens kostnaden ligger hos plattformteamet, noe som skaper en kronisk risiko for underinvestering med mindre finansieringen er sentralisert og beskyttet – en variant av allmenningens tragedie.
- **Å måle plattformens suksess bare etter bruk**: Tall for bruk (tjenester tatt i bruk, meldinger sendt) er en ledende indikator, ikke bevis på verdi – den reelle testen er regnestykket over unngåtte utviklingskostnader og unngått risiko ovenfor.
- **Å behandle «plattform» som synonymt med «monolitt»**: GaaP-komponenter lykkes fordi hver gjør én ting godt med et smalt, stabilt grensesnitt – å pakke sammen ulike funksjoner i én «plattform» gjenskaper problemet med skreddersydd utvikling på et annet nivå.

## Kilder

- Government Digital Service, Government as a Platform. <https://www.gov.uk/government/publications/government-as-a-platform>
- GOV.UK Notify. <https://www.notifications.service.gov.uk/>
- Government Digital Service blog, "GOV.UK Pay at 10: how it started and how it's going". <https://gds.blog.gov.uk/2026/09/02/gov-uk-pay-at-10-how-it-started-and-how-its-going/>
