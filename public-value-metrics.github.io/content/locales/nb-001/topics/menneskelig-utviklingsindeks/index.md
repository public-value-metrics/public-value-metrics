# Menneskelig utviklingsindeks (HDI)

HDI er FNs fremste alternativ til å rangere land etter inntekt alene: Den kombinerer forventet levealder, utdanning og inntekt til ett tall mellom 0 og 1, ut fra premisset – argumentert av økonomen Amartya Sen og utviklet for FN av Mahbub ul Haq – at utvikling handler om å utvide hva mennesker kan gjøre og være, ikke bare hva de tjener. Den har blitt publisert årlig i FNs utviklingsprograms (UNDP) Human Development Report siden 1990.

## Hvorfor det er viktig

Før HDI ble «utvikling» målt nesten utelukkende med BNI per innbygger, som ikke sier noe om hvorvidt veksten når vanlige menneskers helse eller utdanning. Sens kapabilitetstilnærming omformulerte utvikling som utvidelse av reelle friheter, og ul Haq gjorde den til en publiserbar indeks UNDP kunne rangere alle land etter, noe som tvang regjeringer som ble rike på inntekt alene men forsømte helse eller skolegang til å møte en dårligere plassering enn BNP-en tilsa (de oljerike Gulf-statene og noen utvinningsøkonomier er standardeksemplene). HDIs tredelte struktur er også den direkte metodiske forløperen til [flerdimensjonal fattigdomsindeks](../flerdimensjonal-fattigdomsindeks/): Begge nekter å la én dimensjon kjøpe seg ut av en mangel i en annen, ved å bruke et geometrisk i stedet for aritmetisk gjennomsnitt. UNDP publiserer fullstendige tekniske notater og underliggende data for hver utgave (<https://hdr.undp.org/data-center/human-development-index>), som er den kanoniske kilden for alle som bygger videre på indeksen i stedet for å utlede den på nytt.

## Regnestykket

```
Indeks for levealder (LEI)       = (LE − 20) / (85 − 20)

Indeks for gjennomsnittlig skolegang = gjennomsnittlig antall år skolegang / 15
Indeks for forventet skolegang   = forventet antall år skolegang / 18
Utdanningsindeks (EI)            = (indeks for gjennomsnittlig + indeks for forventet) / 2

Inntektsindeks (II)              = (ln(BNI per innbygger) − ln(100)) / (ln(75000) − ln(100))

HDI = (LEI × EI × II) ^ (1/3)     [geometrisk gjennomsnitt av de tre delindeksene]
```

Det geometriske gjennomsnittet er bevisst valgt: Fordi det multipliserer i stedet for å ta gjennomsnitt, kan en svært høy score i én dimensjon ikke fullt ut veie opp en svært lav score i en annen – et design UNDP tok i bruk i 2010 nettopp for å straffe ubalanse, til erstatning for den tidligere formelen med aritmetisk gjennomsnitt.

## Utregnet eksempel

**Land med middels inntekt**: forventet levealder 72 år, gjennomsnittlig skolegang 8 år, forventet skolegang 13 år, BNI per innbygger $12 000.

```
LEI = (72 − 20) / (85 − 20)              = 52 / 65   = 0,800
MYSI = 8 / 15                                        = 0,533
EYSI = 13 / 18                                       = 0,722
EI = (0,533 + 0,722) / 2                             = 0,628
II = (ln(12000) − ln(100)) / (ln(75000) − ln(100))
   = (9,393 − 4,605) / (11,225 − 4,605)
   = 4,788 / 6,620                                   = 0,723

HDI = (0,800 × 0,628 × 0,723) ^ (1/3)
    = (0,363) ^ (1/3)                                ≈ 0,713
```

En HDI på 0,713 havner i UNDPs sjikt «høy menneskelig utvikling» (0,700–0,799), mens «svært høy» starter ved 0,800. Legg merke til hvor følsomt resultatet er for den svakeste delindeksen: Hvis gjennomsnittlig skolegang var 4 i stedet for 8 (MYSI = 0,267, EI = 0,494), faller HDI til (0,800 × 0,494 × 0,723)^(1/3) ≈ 0,639 – ett helt sjikt ned – selv om ingenting annet er endret.

## Sammenheng med programvareutvikling

- Mønsteret med geometrisk gjennomsnitt kan gjenbrukes direkte for enhver sammensatt tjeneste- eller produktscore der du ikke vil at én sterk dimensjon skal tilsløre en kritisk svak – f.eks. å kombinere scorer for tilgjengelighet, ytelse og pålitelighet for en offentlig digital tjeneste multiplikativt i stedet for med vektet gjennomsnitt, slik at en tjeneste som er rask men utilgjengelig ikke kan få «god».
- HDIs logaritmiske transformasjon av inntekt (avtakende marginalverdi av et ekstra pund) er den samme logikken som ligger bak [fordelingsvekting](../fordelingsvekting/) i vurderinger: Ekstra $1 000 betyr langt mer for en fattig husholdning enn for en rik, og å behandle begge lineært feilprisser effekten.
- Ethvert dashbord som rapporterer en enkelt blandet score for «digital inkludering» eller «innbyggerutfall» bør dokumentere sin aggregeringsformel like eksplisitt som UNDPs tekniske notater – se [KPI-er i offentlig sektor](../nøkkeltall-i-offentlig-sektor/) og [målekort for offentlig verdi](../scorecard-for-offentlig-verdi/).

## Fallgruver

- **Å ta gjennomsnitt i stedet for å bruke det geometriske gjennomsnittet** – et aritmetisk gjennomsnitt lar høy inntekt maskere dårlig helse eller utdanning helt. Hele poenget med metodeendringen i 2010 var å stoppe denne substitusjonen.
- **Å sammenligne HDI fra år til år som om det var inflasjonsjustert BNP** – UNDP rebaserer indeksen med jevne mellomrom (nye minimums-/maksimumsgrenser, reviderte tak for skolegang), så en endring i rangering kan gjenspeile en metodeoppdatering, ikke en reell endring. Sjekk alltid hvilken HDR-utgave et tall kommer fra.
- **Å behandle HDI som et fattigdomsmål** – det er et nasjonalt gjennomsnitt og sier ingenting om fordelingen innad i et land. For det, bruk [flerdimensjonal fattigdomsindeks](../flerdimensjonal-fattigdomsindeks/) eller UNDPs separate ulikhetsjusterte HDI.

## Kilder

- UNDP. "Human Development Index (HDI)" technical notes and data.
  <https://hdr.undp.org/data-center/human-development-index>
- UNDP. Human Development Report 1990 (the index's introduction).
- Sen A. "Development as Freedom." Oxford University Press, 1999.
