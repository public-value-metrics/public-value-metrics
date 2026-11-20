# Index of Multiple Deprivation (indeks for sammensatt deprivasjon)

IMD er det offisielle målet på relativ deprivasjon for små områder i England. Den rangerer alle landets 32 844 Lower-layer Super Output Areas (LSOA-er, hver med omtrent 1 500 innbyggere) fra 1 (mest deprivert) til 32 844 (minst deprivert). Den publiseres av det som nå er Ministry of Housing, Communities and Local Government (MHCLG, tidligere MHCLG/DCLG), senest som English Indices of Deprivation 2019, og den styrer direkte statlig finansiering, prioritering av folkehelsearbeid og kvalifikasjon for dusinvis av lokale ordninger.

## Hvorfor det er viktig

Deprivasjon er ikke én ting – et nabolag kan være fattig på inntekt men trygt, eller ha tilstrekkelig inntekt men lide av dårlig helse og dårlige boforhold. IMDs forgjengerindekser (som går tilbake til Department of the Environments deprivasjonsindikatorer fra 1970-tallet) utviklet seg til dagens modell med sju domener nettopp fordi målretting etter én enkelt indikator (for eksempel bare arbeidsledighet) rutinemessig overså områder som var deprivert på andre måter. IMD 2019 kombinerer inntekt, sysselsetting, utdanning, helse, kriminalitet, hindringer for bolig og tjenester og bomiljø til én samlet rangering per LSOA, der hvert domene er bygget av sin egen kurv med indikatorer og vektet etter MHCLGs metodikk. Fordi den opererer på nivå med små områder (LSOA) snarere enn lokale myndigheter, avslører den lommer av deprivasjon skjult inne i ellers velstående distrikter – og derfor er det IMD, ikke gjennomsnittsinntekten i en lokal myndighet, som NHS England, Department for Educations pupil premium og dusinvis av lokale finansieringsformler faktisk bygger på. Programvare som avgjør kvalifikasjon, prioriterer oppsøkende arbeid eller rapporterer effekt etter område i England, bør behandle IMD-desil eller -rangering som en likeverdig inndata, ikke en ettertanke – og der et program bevisst retter seg mot de mest deprivierte områdene, bør vurderingen bruke [fordelingsvekting](../fordelingsvekting/) i samsvar med den målrettingen, i stedet for å verdsette et pund nytte likt uansett hvor det havner.

## Regnestykket

```
7 domener, vektet:
  Inntekt                              22,5 %
  Sysselsetting                        22,5 %
  Utdanning, ferdigheter og opplæring  13,5 %
  Helsedeprivasjon og funksjonsnedsettelse 13,5 %
  Kriminalitet                          9,3 %
  Hindringer for bolig og tjenester     9,3 %
  Bomiljø                               9,3 %

Hver domenescore: indikatorene standardiseres (rangeres, deretter transformeres
mot en normalfordeling) og kombineres med eksponentiell transformasjon
slik at høy deprivasjon på én indikator ikke helt kan utlignes
av lav deprivasjon på andre innenfor domenet.

IMD samlet score (LSOA) = Σ (domenescore × domenevekt)
Rangér LSOA-er etter samlet score → 1 (mest deprivert) til 32 844 (minst deprivert)
Desiler: rangering ÷ 3 284 (omtrent), desil 1 = de mest deprivierte 10 % av LSOA-ene
```

## Utregnet eksempel

**Samlet score for en LSOA**, med illustrative standardiserte domenescorer (0 = ingen tegn til deprivasjon, høyere = mer deprivert):

```
Inntekt              0,35 × 0,225 = 0,07875
Sysselsetting        0,30 × 0,225 = 0,06750
Utdanning            0,20 × 0,135 = 0,02700
Helse                0,15 × 0,135 = 0,02025
Kriminalitet         0,10 × 0,093 = 0,00930
Hindringer for bolig 0,05 × 0,093 = 0,00465
Bomiljø              0,08 × 0,093 = 0,00744

Samlet score = 0,07875 + 0,06750 + 0,02700 + 0,02025
             + 0,00930 + 0,00465 + 0,00744  = 0,21489
```

Den samlede scoren rangeres deretter mot alle 32 844 LSOA-enes scorer. Hvis den plasserer LSOA-en på rang 2 950, havner den i desil 1 (2 950 ÷ 3 284 ≈ 0,9, dvs. blant de mest deprivierte 10 % av nabolagene i England) – som for mange finansieringsformler er terskelen som utløser kvalifikasjon, uavhengig av hvordan den omkringliggende lokale myndigheten scorer i gjennomsnitt.

## Sammenheng med programvareutvikling

- Enhver tjeneste som geokoder brukere til postnummer eller LSOA kan koble til den publiserte IMD-oppslagstabellen (en gratis, versjonert CSV fra MHCLG) for å legge til deprivasjonsdesil som kovariat – for å målrette oppsøkende arbeid, prioritere saksmengde eller rapportere utfall etter deprivasjonsbånd uten å samle inn nye personopplysninger.
- IMD-desil er en standard likhetskontroll for offentlige digitale tjenester: Å krysstabulere bruk, frafall eller tilfredshet etter IMD-desil avdekker tilgangsgap som et samlet mål skjuler – se [digital inkludering](../digital-inkludering/) og [mål på innbyggertilfredshet](../mål-på-innbyggertilfredshet/).
- Fordi IMD-rangeringen er relativ (den summerer alltid til et fast sett rangeringer over hele England), kan den ikke vise om deprivasjonen nasjonalt stiger eller faller over tid – bare hvilke områder som rangerer hvor i forhold til hverandre i den utgaven. Ikke bygg dashbord for absolutte trender på rå IMD-rangering alene.

## Fallgruver

- **Å sammenligne IMD-rangeringer mellom utgaver (2015 mot 2019) som en tidstrend** – de underliggende indikatorene, geografiene og metodikken endres mellom utgavene. MHCLG advarer uttrykkelig mot å bruke endringer i rangering som bevis på at et område ble mer eller mindre deprivert.
- **Å bruke IMD på LSOA-nivå på enkeltpersoner** – en LSOA i desil 1 inneholder fortsatt husholdninger som ikke er deprivert, og en LSOA i desil 10 inneholder fortsatt deprivierte. IMD beskriver områder, ikke mennesker, og å bruke den som stedfortreder for individuell kvalifikasjon feilklassifiserer i begge retninger.
- **Å overse detaljer på domenenivå til fordel for den samlede rangeringen** – to LSOA-er med identiske samlede scorer kan ha helt ulike domeneprofiler (én helsedeprivert, én kriminalitetsdeprivert). En målrettingsordning rettet mot ett problem bør bruke den relevante domenescoren, ikke den blandede samlede.

## Kilder

- Ministry of Housing, Communities and Local Government. "English Indices of Deprivation 2019."
  <https://www.gov.uk/government/statistics/english-indices-of-deprivation-2019>
- MHCLG. "The English Indices of Deprivation 2019: Technical Report."
