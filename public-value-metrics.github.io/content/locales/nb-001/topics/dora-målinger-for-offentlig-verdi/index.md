# DORA-målinger for offentlig verdi

DORA-målingene (DevOps Research and Assessment) – leveransefrekvens, ledetid for endringer, feilrate for endringer og tid til gjenoppretting av tjenesten, pluss pålitelighet som den femte – er programvarebransjens best validerte referansemål for leveranseytelse. Oversatt til offentlig ansvarlighet er hver av dem en direkte indikator på hvor raskt, og hvor trygt, offentlig verdi når en innbygger.

## Hvorfor det er viktig

DORAs ti år lange forskning, publisert årlig som *Accelerate State of DevOps Report* (metodikken til Forsgren, Humble og Kim, nå drevet av Google Cloud), deler team inn i elite-, høy-, middels og lavytende. Elite-team ruller ut på forespørsel, bruker under ett døgn fra commit til produksjon, feiler på omtrent 5 % av endringene og gjenoppretter på under en time. Lavytende team ruller ut månedlig eller sjeldnere, bruker måneder, feiler på rundt 40 % av endringene og gjenoppretter på uker. I forvaltningen er dette ikke tomme tekniske tall: Service Standard fra Government Digital Service krever at team «forbedrer og iterer ofte» og kan svare raskt på brukerbehov, og departementer som ikke kan rulle ut trygt og ofte, er strukturelt ute av stand til å oppfylle den standarden, uansett hva brukerundersøkelsene sier. Cabinet Offices eget arbeid med digital effektivitet fant at det er dyrt å flytte en innbygger fra en mislykket eller treg digital transaksjon til telefon eller papir – GDS' Digital Efficiency Report fra 2012 anslo at enkelte digitale transaksjoner kostet så lite som 20 pence, mot telefon- eller skrankekontakt til opptil £8,62 – så en feilet endring i en tjeneste mot publikum koster ikke bare utviklingstid, men legger reelle pund på kundesenterets budsjett (se [besparelser ved kanalskifte](../besparelser-ved-kanalskifte/)).

## Regnestykket

```
Leveransefrekvens       = produksjonssettinger / tid
Ledetid for endringer   = t(utrulling) − t(commit), median
Feilrate for endringer  = mislykkede endringer / alle endringer × 100
Tid til gjenoppretting (MTTR) = t(gjenopprettet) − t(feil), median
Pålitelighet            = oppnåelse av SLO (tilgjengelighet, responstid, korrekthet)
```

Oversettelser til offentlig verdi:

```
Ledetid        → uker i leveranseløpet × forsinkelseskostnad, se cost-of-delay-in-public-programmes
Feilrate       → hendelsesrate mot innbyggere: feilrate for endringer × kostnad per omdirigert
                 kundesenterhenvendelse (eller per mislykket lovpålagt transaksjon)
Gjenopprettingstid → skade ved tjenestebrudd: MTTR × (krav/søknader som blokkeres
                 per time) × påfølgende kostnad eller velferdstap per enhet
Pålitelighet   → nyttediskonto: en tjeneste med 99 % tilgjengelighet leverer
                 ≈ 0,99 av sin modellerte nytte – leveransens tilsvarighet
                 til manglende bruk eller manglende etterlevelse
```

## Utregnet eksempel

Et kommunalt team for en portal for stønadssøknader, før og etter en investering i leveranseteknikk:

```
                    Før         Etter
Utrullinger         månedlig    ukentlig
Ledetid             8 uker      5 dager
Feilrate            30 %        10 %
MTTR                3 dager     4 timer
```

Teamet leverer omtrent 25 forbedringer i året, med gjennomsnittsverdi £8 000/uke ([forsinkelseskostnad](../forsinkelseskostnad-i-offentlige-programmer/)). Å redusere ledetiden med omtrent 7,3 uker trekker hver forbedrings nyttestrøm fremover: 25 × 7,3 × 8 000 ≈ **£1 460 000/år** i verdi levert tidligere. På feilraten: 25 × (0,30 − 0,10) = 5 færre mislykkede endringer i året. Hver mislykket endring på en offentlig portal omdirigerer typisk anslagsvis 2 000 innbyggere til telefonkanalen til £8,62 mot 20 pence, en nettokostnad på omtrent £8,42 × 2 000 ≈ £16 840 per hendelse, så å unngå 5 hendelser sparer ≈ **£84 200/år**. Investeringen i leveranseteknikk verdsettes i samme valuta som enhver annen case for offentlig verdi.

## Utregnet eksempel fortsatt: pålitelighet

Hvis portalen kjører med 97 % tilgjengelighet i stedet for et mål på 99,5 %, og hvert prosentpoeng nedetid modelleres som 2 % av søknadene tapt til frafall, leverer tjenesten omtrent 0,975 av sin modellerte nytte på £2 millioner i året – en nyttediskonto på £50 000 i året som et rent oppetidsdashbord aldri avdekker.

## Sammenheng med programvareutvikling

DORA-målingene er en offentlig tjenestes driftsmål i nye klær: Ledetid tilsvarer [tjenestestandarder og transaksjonsmål](../tjenestestandarder-og-transaksjonsmål/), feilrate for endringer tilsvarer omarbeid og klagerate, og MTTR tilsvarer hvor lenge en lovpålagt tjeneste er utilgjengelig for søkerne. Forbedringsteknikker overføres begge veier fordi begge er køsystemer under ansvarlighetskrav – se [flytmål i offentlig leveranse](../flytmål-i-offentlig-leveranse/) for den underliggende køteorien. Merk også DORAs funn fra 2025 om at KI-bruk korrelerer med høyere gjennomstrømning, men *dårligere* stabilitet – et tiltak med både virkning og bivirkninger, som er nøyaktig den nettogevinstanalysen temaet [KI og produktivitet](../ki-og-produktivitet-i-offentlig-sektor/) i denne gruppen arbeider seg gjennom.

## Fallgruver

- **Måltallsjuks**: Å blåse opp antall utrullinger med tomme utgivelser, eller utelate hurtigreparasjoner fra tellingen av mislykkede endringer. Definer hendelser like presist som en lovpålagt tjenestestandard definerer en «vellykket transaksjon».
- **Rangeringslister på tvers av departementer**: DORA-klyngene sammenligner leveransepraksis, ikke tjenester med ulik risikoprofil. Et skattebetalingssystem rangert som «høy» kan være riktig holdning der «elite» ville vært uforsvarlig gitt kravene til kvalitetssikring.
- **Å optimalisere ett mål alene**: Hastighet uten feilrate for endringer er den klassiske avveiningen mellom gjennomstrømning og ustabilitet – rapporter alle fire sammen, ikke som én samlet score.

## Kilder

- DORA research and the annual *Accelerate State of DevOps Report*. <https://dora.dev/>
- Forsgren N, Humble J, Kim G, *Accelerate: The Science of Lean Software and DevOps*, IT Revolution Press, 2018.
- Cabinet Office, Digital Efficiency Report, 2012.
- DORA, 2025 State of AI-assisted Software Development report. <https://dora.dev/dora-report-2025/>
