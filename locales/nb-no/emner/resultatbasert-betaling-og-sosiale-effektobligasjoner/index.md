# Resultatbasert betaling og sosiale effektobligasjoner

Resultatbasert betaling (payment by results, PbR) betaler en leverandør på grunnlag av verifiserte utfall som er oppnådd, ikke aktiviteter som er utført. En sosial effektobligasjon (social impact bond, SIB) er en bestemt PbR-finansieringsstruktur der private eller filantropiske investorer finansierer tjenesteleveransen på forhånd og får tilbakebetalt – med avkastning – av en offentlig bestiller bare hvis uavhengig målte utfall når avtalte terskler, slik at leveranserisikoen flyttes fra skattebetalerne til investoren.

## Hvorfor det er viktig

Verdens første SIB ble lansert ved HMP Peterborough i september 2010: Social Finance hentet £5 millioner fra 17 investorer for å finansiere «One Service», som arbeidet med fanger med korte dommer (under 12 måneder) for å redusere tilbakefall, og Justisdepartementet og Big Lottery Fund gikk med på å tilbakebetale investorene bare hvis antall nye domfellelser falt med minst 7,5 % mot en matchet nasjonal sammenligningskohort. Den siste kohorten i Peterborough-piloten registrerte en reduksjon i nye domfellelser på 9,7 %, komfortabelt over terskelen, og investorene fikk tilbakebetalt med avkastning. Mekanismen var viktig fordi den løste et bestemt bestillerproblem: staten ville betale for utfall i stedet for innsatsfaktorer, men kunne ikke bære den økonomiske risikoen ved et tiltak som kanskje ikke virker, så SIB-strukturen flyttet risikoen over på investorer som var villige til å garantere for den. Government Outcomes Lab (GO Lab) ved Blavatnik School of Government i Oxford vedlikeholder nå det mest komplette offentlige evidensgrunnlaget om PbR- og SIB-resultater i verden, følger godt over 200 effektobligasjoner globalt og publiserer forskning på hvilke designtrekk som henger sammen med suksess eller fiasko. Lærdommen evidensgrunnlaget stadig vender tilbake til, er at *utfallsmålet som velges*, og hvem som bærer risikoen for å bomme på det, avgjør nesten alt annet om hvordan en PbR-kontrakt faktisk oppfører seg i praksis.

## Regnestykket

```
PbR-betaling = grunnbetaling (hvis noen) + Σ (utfall oppnådd × enhetspris per utfall)

Investorens avkastning i en sosial effektobligasjon:
  Investors utlegg     = startkapital som finansierer tjenesteleveransen
  Utfallsbetaling      = bestilleren betaler bare hvis utfall ≥ terskel, skalert etter
                         hvor langt over terskelen resultatet lander
  Investors avkastning = mottatte utfallsbetalinger − investors utlegg
                         (en avkastningsrate, ofte kappet, som gjenspeiler risikoen som er tatt)

Sentrale designparametere som bestemmer hele kontraktens oppførsel:
  Utfallsmål            — må være et utfall, ikke en leveranse (se outcomes-vs-outputs)
  Sammenligning/kontrafaktisk scenario — vanligvis en matchet kohort (se counterfactual-analysis)
  Betalingsterskel      — minimumsforbedring før noen betaling utløses
  Betalingskurve        — lineær, trappetrinn eller kappet over terskelen
  Tilskrivings-/dødvektsfradrag — se additionality-and-deadweight
```

## Utregnet eksempel

**Peterborough One Service** (illustrative tall hentet fra publiserte evalueringer):

```
Investorkapital hentet:          £5 000 000
Kohort:                          ~3 000 mannlige fanger med korte dommer over to kohorter
Terskel:                         ≥7,5 % reduksjon i nye domfellelser mot matchet
                                 nasjonal sammenligningsgruppe, ellers ingen betaling
Resultat kohort 1:               8,4 % reduksjon — under det kontraktsfestede kravet for den
                                 kohorten alene etter de opprinnelige reglene
Samlet/endelig kohortresultat:   9,7 % reduksjon — over terskelen
Utfallsbetaling:                 staten (Justisdepartementet / Big Lottery Fund)
                                 betaler per prosentpoeng over terskelen, og finansierer
                                 investors tilbakebetaling pluss avkastning
```

**PbR-kontrakt i en kommune (illustrativ)**: en familietjeneste bestilles for £4 000 per henvist familie (aktivitetsbetaling) pluss £6 000 per familie uten ny henvisning til barnevernet 12 måneder etter avslutning (utfallsbetaling). 200 familier henvist, 150 saker avsluttet, 96 er fortsatt uten henvisning etter 12 måneder:

```
Aktivitetsbetaling = 200 × £4 000 = £800 000
Utfallsbetaling    = 96 × £6 000  = £576 000
Total kontraktskostnad = £1 376 000 for 96 bekreftede varige utfall
Kostnad per bekreftet utfall ≈ £14 333 (se cost-per-outcome)
```

## Sammenheng med programvareutvikling

Resultatbasert betaling er et problem med å samkjøre insentiver før det er et dataproblem, og datasystemet er der denne samkjøringen enten holder eller svikter. Uavhengig, manipulasjonssikker verifisering av utfall er hele poenget: bestiller og leverandør har motstridende insentiver for hvordan en tvetydig sak kodes, så systemet som registrerer utfall trenger et revisjonsspor, en databehandleravtale med den uavhengige verifisereren (ofte et annet organ enn leverandøren, noen ganger et organ for offisiell statistikk som matcher mot politi- eller trygderegistre), og uforanderlig versjonering av utfallsdefinisjonen – PbR-ekvivalenten til fallgruven «omdefinering av målet» i [nøkkeltall i offentlig sektor](../nøkkeltall-i-offentlig-sektor/). Tilskrivingsberegninger avhenger av metoder med matchede kohorter fra [kontrafaktisk analyse](../kontrafaktisk-analyse/), som trenger reproduserbar, etterprøvbar kode, ikke et engangsregneark. Og selve målet må være et ekte utfall, ikke en proxy-aktivitet – se [utfall versus leveranser](../utfall-versus-leveranser/) – fordi en PbR-kontrakt som betaler for en leveranse bare gir vanlig finansiering nytt navn, med ekstra transaksjonskostnad. Der en SIBs sosiale avkastning modelleres framoverskuende, låner vurderingen vanligvis direkte fra metodikken i [sosial avkastning på investering](../sosial-avkastning-på-investering/).

## Fallgruver

- **Å betale for et lett manipulerbart proxy-utfall**: «oppmøte på økter» er en aktivitet utkledd som utfall; insister på et mål som gjenspeiler den faktiske endringen man søker (tilbakefall, sysselsetting, boligstabilitet).
- **Intet troverdig kontrafaktisk scenario**: uten en matchet sammenligningsgruppe kan en forbedring være regresjon mot gjennomsnittet eller en bredere trend, ikke programmets virkning – se [kontrafaktisk analyse](../kontrafaktisk-analyse/) og [addisjonalitet og dødvekt](../addisjonalitet-og-dødvekt/).
- **Å undervurdere transaksjons- og evalueringskostnader**: uavhengig verifisering, datakobling og kontraktsadministrasjon for PbR/SIB-ordninger utgjør rutinemessig tosifrede prosentandeler av kontraktsverdien – GO Labs evidensgrunnlag dokumenterer dette som en gjentakende årsak til at ordninger avvikles.
- **Utvelgelse av de enkleste eller «parkering»**: leverandører som betales per utfall har et direkte insentiv til å prioritere klienter som uansett er mest sannsynlig å lykkes, og nedprioritere de vanskeligste sakene – utform betalingstrinn eller justering for sakssammensetning for å motvirke det.

## Kilder

- Government Outcomes Lab, University of Oxford, Blavatnik School of Government.
  <https://golab.bsg.ox.ac.uk/>
- Social Finance, "Peterborough Social Impact Bond" evaluation summaries.
  <https://golab.bsg.ox.ac.uk/case-studies/peterborough-social-impact-bond/>
- Ministry of Justice, "Peterborough Social Impact Bond HMP Doncaster: Final Reconviction Results
  for the Peterborough Social Impact Bond."
