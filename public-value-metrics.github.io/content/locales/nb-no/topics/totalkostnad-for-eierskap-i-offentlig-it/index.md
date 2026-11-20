# Totalkostnad for eierskap (TCO) i offentlig IT

Totalkostnad for eierskap er hele livssykluskostnaden for et system – anskaffelse pluss hvert eneste driftsår – diskontert til en felles dato. I offentlig IT er den mest pålitelige prognosefeilen å sammenligne leverandører eller alternativer ut fra anskaffelsesprisen alene, når drift og vedlikehold vanligvis utgjør et sted mellom halvparten og fire femtedeler av regningen over levetiden.

## Hvorfor det er viktig

HM Treasurys Green Book krever at den finansielle casen i enhver virksomhetscase etter femcasemodellen dekker kostnader over hele levetiden, ikke bare investeringsutgifter. Likevel har National Audit Office gjentatte ganger funnet at departementer godkjenner IT-investeringer på et ufullstendig eller optimistisk driftskostnadsanslag, for så å oppdage de sanne driftskostnadene når systemet er i drift og investeringsbudsjettlinjen er lukket. Technology Code of Practice fra Government Digital Service og Central Digital and Data Office (<https://www.gov.uk/guidance/the-technology-code-of-practice>) skyver departementene mot sky og standardisert hosting, blant annet fordi det gjør de løpende kostnadene synlige og sammenlignbare i stedet for gjemt i ett enkelt investeringstall i anskaffelsen som ser forlokkende lavt ut ved godkjenning og kostbart feil tre år senere.

## Regnestykket

```
TCO = Anskaffelseskostnad + Σ(t=1..N) Årlig driftskostnad_t / (1+r)^t
      − restverdi (diskontert)

r = HM Treasury Green Books standard samfunnsmessige diskonteringsrate, 3,5 %/år
    (avtagende ratetabell for horisonter utover 30 år)

Komponenter i driftskostnaden: hosting/lisenser, støtte og vedlikehold,
sikkerhetsoppdateringer og samsvar, ansattes tid, planlagt fornyelse/migrering
```

Se [samfunnets diskonteringsrate](../samfunnets-diskonteringsrate/) for hvorfor diskonteringsfaktoren betyr noe over en typisk systemlevetid på 5–10 år, og [bygge eller kjøpe i offentlig sektor](../utvikle-selv-eller-kjøpe-i-offentlig-forvaltning/) for hvordan TCO mater inn i en bygg-eller-kjøp-beslutning.

## Utregnet eksempel

Et departement sammenligner to saksbehandlingssystemer over en 5-årshorisont med Green Books diskonteringsrate på 3,5 %.

```
System A: investering £3 500 000, drift £250 000/år
System B: investering £1 800 000 (ser billigere ut), drift £650 000/år
          (tyngre leverandørstøtte og integrasjonsbyrde)

Naiv sammenligning på investering alene: B vinner, £1,8 mill. < £3,5 mill.

Sum av diskonteringsfaktorer, 5 år ved 3,5 %: 0,966+0,934+0,902+0,871+0,842 ≈ 4,515

TCO_A = 3 500 000 + 250 000 × 4,515 = 3 500 000 + 1 128 750 = £4 628 750
TCO_B = 1 800 000 + 650 000 × 4,515 = 1 800 000 + 2 934 750 = £4 734 750
```

TCO snur den naive beslutningen: System B er marginalt dyrere over fem år når driftskostnaden er diskontert og summert, fordi driftsandelen av levetidskostnaden er 62 % (2 934 750 / 4 734 750) mot 24 % for System A – et konkret tilfelle av funnet om at «vedlikehold er størstedelen av regningen», skjult helt når man sammenligner prislappene.

## Sammenheng med programvareutvikling

TCO er tallet som bør disiplinere hver [bygg-eller-kjøp](../utvikle-selv-eller-kjøpe-i-offentlig-forvaltning/)-beslutning og hver case for nedbetaling av [teknisk gjeld](../teknisk-gjeld-som-erosjon-av-offentlig-verdi/), fordi renter på gjeld og utsatt vedlikehold begge er driftskostnadslinjer som hører hjemme i den samme diskonterte summen, enten noen har fulgt dem eller ikke. Utviklere som foreslår et plattform- eller leverandørvalg bør presentere hele TCO-tabellen, ikke anskaffelsesprisen, fordi anskaffelsesprisen er nøyaktig det tallet Green Books finansielle case ble laget for å hindre departementer i å stole på alene. TCO er også den ærlige nevneren for vurderinger av [verdi for pengene](../verdi-for-pengene/) – verdi for pengene sammenligner nytte med kostnad, og en underrapportert kostnadslinje blåser opp hvert eneste forhold i virksomhetscasen.

## Fallgruver

- **Sammenligning av bare investering**: den vanligste enkeltfeilen i anskaffelser – å sammenligne leverandørenes listepriser uten et tilsvarende driftskostnadsanslag for hvert alternativ.
- **Å utelate utgangs- og migreringskostnader**: uttrekk av data ved kontraktsslutt, flytting til ny plattform og straffer for leverandørlåsing er reelle TCO-linjer som sjelden står i den opprinnelige virksomhetscasen.
- **Å utelate sikkerhets- og samsvarskostnader**: oppdateringsfrekvens, fornyelse av akkreditering og revisjonskostnader vokser med systemets alder og kompleksitet – se [verdien av cybersikkerhet i offentlig sektor](../verdien-av-cybersikkerhet-i-offentlig-sektor/) – og blir rutinemessig utelatt fra driftskostnadsanslaget.
- **Udiskontert sammenligning mellom alternativer med ulik kostnadsprofil**: å sammenligne et investeringstungt alternativ med et driftstungt uten diskontering favoriserer systematisk det alternativet som tilfeldigvis utsetter mest kostnad til senere år.

## Kilder

- HM Treasury, *The Green Book: Central Government Guidance on Appraisal and Evaluation*, 2022. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
- Central Digital and Data Office, Technology Code of Practice. <https://www.gov.uk/guidance/the-technology-code-of-practice>
- National Audit Office, *Digital Transformation in Government*. <https://www.nao.org.uk/>
