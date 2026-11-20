# KI og produktivitet i offentlig sektor

Målinger av hva KI-støtte i koding faktisk gjør med utviklingsarbeidet – andel aksepterte forslag, hastighetsgevinster i kontrollerte studier, gjennomstrømning av pull requests og hvor mye av koden som består – hviler på et reelt motstridende kunnskapsgrunnlag selv før offentlige begrensninger legges til: dataklassifisering avgjør hvilke deler av en eldre systemportefølje et KI-verktøy i det hele tatt kan røre, innkjøpssykluser gjør at verktøyet som evalueres ofte ligger en modellgenerasjon bak dagens muligheter, og krav til sikkerhetsklarering styrer hvem som kan bruke det til hva.

## Hvorfor det er viktig

De to mest siterte kontrollerte studiene peker i motsatt retning. Peng m.fl. sin randomiserte kontrollerte studie (RCT) av GitHub Copilot fra 2023 fant at utviklere fullførte en oppgave med å lage en HTTP-tjener fra bunnen av 55,8 % raskere med Copilot (1 t 11 min mot 2 t 41 min, n=95). METRs RCT fra 2025 fant at erfarne utviklere av åpen kildekode, som arbeidet på *sine egne modne kodebaser*, var 19 % tregere med KI-verktøy fra tidlig 2025, mens de trodde de var omtrent 20 % raskere. Begge studiene er solide, og selve motsigelsen er funnet: effekten på nyutviklingsoppgaver overføres ikke til effekt i modne kodebaser, og mye av offentlig utviklingsarbeid er arbeid i modne kodebaser, med systemer som er eldre og mer særegne enn det typiske kommersielle kodelageret. Central Digital and Data Offices Generative AI Framework for HMG (2024, <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>) setter opp prinsipper for ansvarlig innføring nettopp fordi dette kunnskapsgrunnlaget ikke kan importeres direkte fra leverandørenes demonstrasjoner. Departementene forventes å evaluere verktøy mot egne krav til databehandling og sikkerhet før utrulling.

## Regnestykket

```
Akseptrate       = aksepterte forslag / viste forslag
Beholdningsrate  = KI-kode som overlever til sammenslåing / akseptert KI-kode
Hastighetsgevinst = (t_kontroll − t_KI) / t_kontroll  (KUN fra kontrollert sammenligning)
Gjennomstrømningsendring = Δ sammenslåtte PR-er/utvikler/uke

Dekningsfaktor i offentlig sektor:
  kvalifisert andel av kodebasen = kodelinjer i systemer der klassifiseringen
    (OFFICIAL, OFFICIAL-SENSITIVE, SECRET) i det hele tatt tillater verktøyet

Verdimodell = utviklere × kvalifisert dekning × spart tid × fullt belastet sats × utnyttelsesgrad
             – hvert ledd må måles lokalt, og dekningsfaktoren
             har ingen motstykke i privat sektor
```

## Utregnet eksempel

Et departement piloterer en KI-kodeassistent for 300 utviklere, men bare systemer klassifisert som OFFICIAL kan bruke verktøyet – 70 % av porteføljen etter fordeling av utviklere, mens de resterende 30 % (systemer med høyere klassifisering) er helt utelatt.

```
Kvalifiserte utviklere = 300 × 0,70 = 210

Pilotresultat: selvrapportert spart tid 40 min/dag;
               målt besparelse på oppgavenivå 12 min/dag (0,2 t)
               – METR-gapet mellom oppfatning og måling, gjentatt i praksis

Verdsett det MÅLTE tallet:
  210 × 0,2 t × 220 dager × £55/t fullt belastet × 0,6 utnyttelsesgrad
  = 210 × 44 timer × £55 × 0,6
  = 9 240 timer × £55 × 0,6 ≈ £304 920 per år i kapasitet

Kostnad: 210 lisensierte plasser × £22/måned × 12 ≈ £55 440 per år

Netto kapasitetsforhold ≈ 304 920 / 55 440 ≈ 5,5:1
```

Dette kan finansieres ved omtrent en tredjedel av den selvrapporterte gevinsten, og først etter at klassifiseringstaket er brukt. Å lisensiere alle 300 utviklere på grunnlag av det selvrapporterte tallet ville ha overdrevet både den kvalifiserte populasjonen og den reelle besparelsen.

## Sammenheng med programvareutvikling

Disiplinene som overføres direkte: Kjør **pragmatiske forsøk** på departementets egen kodebase og virkelige oppgaver, ikke på leverandørenes demonstrasjonsoppgaver, fordi METR-resultatet nettopp er et funn fra modne kodebaser. Behandle **akseptrate som en indikator, ikke et utfall** – høy aksept med lav beholdning er programvarens tilsvarighet til overdiagnostisering. Par hver påstand om gjennomstrømning med en **stabilitetskontroll**, siden DORAs rapport fra 2025 fant at KI-bruk øker gjennomstrømningen, men svekker stabiliteten i endringer, noe som er nøyaktig den nettogevinstanalysen [DORA-målinger for offentlig verdi](../dora-målinger-for-offentlig-verdi/) er laget for å gjøre. Og vær ærlig på at KI-verktøy kan øke, ikke redusere, gapet i eldre systemporteføljer tynget av [teknisk gjeld](../teknisk-gjeld-som-erosjon-av-offentlig-verdi/), fordi treningsdata underrepresenterer COBOL, 4GL og skreddersydd stormaskinkode som er vanlig i forvaltningen, slik at forslagenes kvalitet ofte er svakest nettopp på systemene som trenger mest hjelp. Dette hører sammen med det bredere spørsmålet om [verdien av KI i offentlig forvaltning](../verdien-av-ki-i-offentlig-forvaltning/) og bør styres av de samme begrensningene for [verdien av cybersikkerhet i offentlig sektor](../verdien-av-cybersikkerhet-i-offentlig-sektor/), som setter grenser for hvor tredjepartsverktøy i det hele tatt kan se kode eller data.

## Fallgruver

- **Overføring av leverandørstudier**: Å bruke hastighetsgevinster fra RCT-er på nyutvikling i arbeid med integrasjon mot eldre systemer er nettopp feilen METR-studien avslørte.
- **Selvrapportering som måling**: Et gap på 20 prosentpoeng mellom oppfatning og måling er den største kjente skjevheten i denne litteraturen, og den blåser opp forretningscase som bare bygger på utviklerundersøkelser.
- **Å overse klassifiseringstaket**: Lisens- og verdimodeller bygget på totalt antall ansatte i stedet for den kvalifiserte, klassifiseringsgodkjente delmengden overdriver systematisk både kostnadseffektiviteten og den oppnåelige dekningen.
- **Etterslep i innkjøpssyklusen**: Rammeavtalebasert innkjøp av verktøy kan føre til at en pilot evaluerer en modellgenerasjon som er 12–18 måneder bak det som er offentlig tilgjengelig når full utrulling skjer, slik at hastighetsantakelsen i den opprinnelige forretningscasen er utdatert før idriftsettelsen.

## Kilder

- Peng S, et al., "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot", 2023. <https://arxiv.org/abs/2302.06590>
- METR, "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity", 2025. <https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/>
- DORA, 2025 State of AI-assisted Software Development report. <https://dora.dev/dora-report-2025/>
- Central Digital and Data Office, Generative AI Framework for HMG, 2024. <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
