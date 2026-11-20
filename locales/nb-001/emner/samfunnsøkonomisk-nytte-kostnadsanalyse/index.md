# Samfunnsøkonomisk nytte-kostnadsanalyse

Samfunnsøkonomisk nytte-kostnadsanalyse (SCBA) omregner alle kostnader og nytteeffekter av en politikk eller et program – både markedsmessige og ikke-markedsmessige – til en felles pengeenhet, diskonterer fremtidige strømmer til nåverdi og regner dem opp mot hverandre til ett enkelt tall: gjør dette forslaget samfunnet bedre stilt, og med hvor mye?

## Hvorfor det er viktig

SCBA er standardmetoden for kvantitativ analyse i den økonomiske casen i [Green Book-vurdering](../vurdering-etter-green-book/). HM Treasurys veiledning krever at forslag viser en positiv netto nåverdi for samfunnet (NPSV) der nytten kan monetiseres på en troverdig måte, med betalingsvillighet som grunnprinsipp for verdsetting av ikke-markedsgoder (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>, kapittel 5). Disiplinen den håndhever er at «samfunnsøkonomisk» nytte-kostnadsanalyse ikke er samme øvelse som en investeringsvurdering i privat sektor: den må inkludere kostnader og nytte som rammer tredjeparter som ikke er part i transaksjonen (eksternaliteter), den må bruke [samfunnets diskonteringsrate](../samfunnets-diskonteringsrate/) i stedet for en kommersiell kapitalkostnad, og den bør anvende [fordelingsvekting](../fordelingsvekting/) der et pund betyr mer for en fattigere husholdning enn for en rikere.

SCBA svikter nøyaktig der kritikerne forventer det: goder uten markedsmotstykke – ren luft, sosial samhørighet, verdien av et reddet liv – må monetiseres med metoder for [oppgitte preferanser](../verdsetting-med-oppgitte-preferanser/) eller [avslørte preferanser](../verdsetting-ved-avslørte-preferanser/), eller det må konstrueres en [skyggepris](../skyggepriser/). Når monetiseringen er omstridt og ikke bare vanskelig, anbefaler Green Book selv å falle tilbake på [kostnadseffektivitetsanalyse](../kostnadseffektivitetsanalyse-i-offentlig-forvaltning/) eller [multikriterieanalyse](../multikriteriell-beslutningsanalyse/) i stedet for å tvinge frem et tall ingen tror på.

## Regnestykket

```
NPSV = Σ [t=0 til T] (Nytte_t − Kostnad_t) / (1 + r)^t

der:
  Nytte_t   = all monetisert nytte i år t, inkludert ikke-markedsgoder
              verdsatt med oppgitte/avslørte preferanser eller skyggepris
  Kostnad_t = alle monetiserte kostnader i år t, inkludert alternativkostnaden
              for ressurser (se ../opportunity-cost-in-public-spending/)
  r         = samfunnets diskonteringsrate (HM Treasury setter 3,5 %, avtagende
              til lavere satser etter år 30, ifølge Green Books vedlegg A)
  T         = analyseperiode

Nytte-kostnadsforhold (BCR) = Σ nåverdi(nytte) / Σ nåverdi(kostnader)
```

Et BCR over 1 (eller NPSV over null) indikerer netto samfunnsverdi. Green Books kategorier for verdi for pengene (slik de brukes i vurdering av transport og infrastruktur) merker BCR-intervaller slik: under 1,0 er dårlig verdi for pengene, 1,0–1,5 er lav, 1,5–2,0 er middels, 2,0–4,0 er høy, og over 4,0 er svært høy. Følsomhetsanalyse – å kjøre NPSV på nytt under pessimistiske og optimistiske forutsetninger – er obligatorisk, ikke valgfri, fordi monetisert ikke-markedsnytte har brede usikkerhetsbånd.

## Utregnet eksempel

**Lokal myndighet**: en kommune vurderer en investering på £3 mill. i et nytt sykkel- og gangnett over en analyseperiode på 20 år med en diskonteringsrate på 3,5 %.

```
Kostnader: £3 mill. i investering i år 0, £50 000/år i vedlikehold (år 1–20)
Nåverdi(vedlikehold) ≈ £50 000 × 14,2 (annuitetsfaktor for 20 år ved 3,5 %) ≈ £710 000
Total nåverdi(kostnader) ≈ £3,71 mill.

Nytte (alt monetisert med publiserte verdsettingsverktøy fra DfT/WHO):
  Helsenytte av økt fysisk aktivitet: £180 000/år
  Redusert fravær: £40 000/år
  Mindre kø (færre bilturer): £60 000/år
  Total nyttestrøm: £280 000/år
Nåverdi(nytte) ≈ £280 000 × 14,2 ≈ £3,98 mill.

NPSV = £3,98 mill. − £3,71 mill. = +£0,27 mill.
BCR = 3,98 / 3,71 = 1,07 → «lav» verdi for pengene
```

Tiltaket klarer terskelen, men så vidt. En følsomhetskjøring med et 20 % lavere anslag for helsenytte (som gjenspeiler reell usikkerhet i verdsettingen av fysisk aktivitet) vipper BCR under 1,0. Det er nettopp derfor Green Book krever at følsomhetstabellen publiseres sammen med hovedtallet, ikke bare det sentrale anslaget.

**Veldedig organisasjon**: et program for å forebygge spedbarnsdødelighet som koster £500 000 per år, evalueres med verdien av et statistisk liv (VSL) – en skyggepris, ikke en observert markedspris – på om lag £2,1 mill. (HM Treasurys oppdaterte tall fra 2023, som selv er utledet fra studier av oppgitte preferanser). Å avverge ett spedbarnsdødsfall per år mot en kostnad på £500 000 gir en BCR på 4,2, dvs. klart «svært høy» verdi for pengene. Men hele resultatet hviler på VSL-tallet, og derfor må enhver SCBA som bruker VSL oppgi det som en forutsetning, ikke et faktum.

## Sammenheng med programvareutvikling

SCBA er den naturlige rammen for investeringsbeslutninger om plattformer og infrastruktur i offentlig programvare. Å sammenligne en felles identitetsplattform med punktløsninger i hvert departement krever for eksempel at man monetiserer nytte som lavere kostnad for dobbel registrering, mindre svindel og raskere tid til tjeneste, som ikke har noen markedspris i seg selv. Utviklere som bygger den underliggende tjenesten bør regne med at programledere ber om innspill til analysen: enhetskostnader for transaksjoner (se [kostnad per transaksjon](../kostnad-per-transaksjon/)), forventede volumer og kostnader ved forringet drift/nedetid. Den viktigste disiplinen å ta med seg: diskonter fremtidig nytte, angi det kontrafaktiske referansealternativet eksplisitt (se [kontrafaktisk analyse](../kontrafaktisk-analyse/)), og presenter aldri et enkelt punktestimat uten følsomhetsintervallet.

## Fallgruver

- **Dobbelttelling av nytte.** Å telle både «spart tid» og «produktivitet vunnet fra denne tiden» som separate nyttelinjer overdriver saken. Spart tid er nytten, og bruken av den i neste ledd er ikke en ekstra nytte med mindre den er uavhengig dokumentert.
- **Å utelate fortrengte kostnader.** Et tiltak som flytter kø fra én vei til en annen, eller flytter svindel fra én kanal til en annen, har ikke skapt nettonytten som hoved-NPSV-en tilsier. Se [fortrengning og attribusjon](../fortrengning-og-attribusjon/).
- **Å bruke en privat diskonteringsrate.** Å bruke en kommersiell kapitalkostnad (for eksempel 8–10 %) i stedet for samfunnets diskonteringsrate undervurderer systematisk offentlig nytte på lang sikt, som helse- og miljøgevinster. Se [samfunnets diskonteringsrate](../samfunnets-diskonteringsrate/).
- **Å monetisere det ubestridte og vifte bort det omstridte.** Hvis to tredjedeler av et forslags nytte er en trygt monetisert effektivitetsbesparelse og en tredjedel er en usikkert monetisert velværegevinst, blander hoved-NPSV-en stilltiende et hardt tall med et mykt. Rapporter dem hver for seg.

## Kilder

- HM Treasury. «The Green Book: appraisal and evaluation in central government.» 2022, kapittel 5. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury. «Green Book supplementary guidance: value of a statistical life.» 2023. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-value-of-a-statistical-life>
- Department for Transport. «TAG unit A1.1: cost-benefit analysis.» Transport Analysis Guidance. <https://www.gov.uk/guidance/transport-analysis-guidance-tag>
