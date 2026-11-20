# Fordelingsvekting

Fordelingsvekting justerer pengeverdien av en kostnad eller nytte etter hvem som mottar den, ut fra prinsippet om at et ekstra pund er mer verdt for en fattig husholdning enn for en rik. HM Treasurys Green Book gir en eksplisitt metode for denne vektingen, bygget på avtakende grensenytte av inntekt, slik at vurderinger ikke i det stille behandler et pund til den rikeste desilen som likeverdig med et pund til den fattigste.

## Hvorfor det er viktig

Standard nytte-kostnadsanalyse summerer pund uten å spørre hvem sine pund det er, noe som implisitt forutsetter at et pund er like mye verdt for alle – en antakelse økonomer lenge har visst er feil. En husholdning med £15 000 i året opplever en gevinst på £1 000 helt annerledes enn en husholdning med £150 000 i året, fordi grensenytten av inntekt faller når inntekten stiger. Uten vekting favoriserer standardvurderingen systematisk tiltak som gagner rikere grupper som allerede har det bra, fordi deres høyere kjøpekraft blåser opp pengeverdien av nytten som når dem (en oppgradering av en park nær dyre boliger «viser» en større nytte i eiendomsverdi enn den samme oppgraderingen nær billige boliger, rent fordi prisene er høyere, ikke fordi velværegevinsten er større).

Green Books tilleggsveiledning om fordelingsanalyse, forsterket etter Treasurys gjennomgang i 2020 som svarte på kritikk av at vurderingsmetodikken systematisk favoriserte London og Sørøst-England, setter opp en formell vektingsmetode basert på en antatt elastisitet for grensenytte av inntekt på rundt 1,3 – det vil si at en dobling av inntekten omtrent halverer (nærmere bestemt 2^-1,3 ≈ 0,41 ganger) grenseverdien av et ekstra pund. Dette er ikke en avrundingsjustering: Å bruke den kan endre hvilket av to konkurrerende programmer som viser høyest nåverdi, særlig når man sammenligner et tiltak konsentrert i et fattig område med ett spredt over befolkningen generelt.

## Regnestykket

Green Books fordelingsvekt for et pund nytte som tilfaller en husholdning på inntektsnivå y, i forhold til et pund på nasjonalt gjennomsnittlig inntektsnivå ȳ:

```
Vekt(y) = (ȳ / y)^e

der:
  y  = husholdningsinntekt (eller inntekten til den berørte gruppen)
  ȳ  = gjennomsnittlig (referanse-) husholdningsinntekt
  e  = elastisitet for grensenytte av inntekt (Green Book: omtrent 1,3)
```

Å anvende vekter på nettonytte:

```
Vektet nytte = Σ [uvektet nytte for gruppe i × Vekt(y_i)]
```

En gruppe med halvparten av nasjonalt gjennomsnitt (y = 0,5ȳ) får en vekt på (1/0,5)^1,3 = 2^1,3 ≈ 2,46 – hvert pund nytte for denne gruppen teller som omtrent 2,46 ganger et pund for en husholdning med gjennomsnittsinntekt.

## Utregnet eksempel

**To konkurrerende lokale programmer**, hver med en uvektet nettonytte på £2 millioner i året, som konkurrerer om det samme regionale vekstfondet:

- *Program A*: en bedriftsstøtteordning i en velstående by, gjennomsnittlig husholdningsinntekt £45 000 (omtrent 1,3 ganger det antatte nasjonale gjennomsnittet på £35 000).
- *Program B*: et kompetanseprogram i en fattig bydel, gjennomsnittlig husholdningsinntekt £18 000 (omtrent 0,51 ganger det nasjonale gjennomsnittet).

```
Vekt(A) = (35 000 / 45 000)^1,3 = (0,778)^1,3 ≈ 0,72
Vekt(B) = (35 000 / 18 000)^1,3 = (1,944)^1,3 ≈ 2,53

Vektet nytte A = £2 000 000 × 0,72 = £1,44 millioner
Vektet nytte B = £2 000 000 × 2,53 = £5,06 millioner
```

Uvektet står de to programmene likt. Vektet for fordelingsvirkning er Program Bs nytte mer enn tre ganger så stor – et resultat som snur finansieringsanbefalingen og gjenspeiler Green Books uttrykkelige hensikt med å kreve at vektingen vises, ikke bare det uvektede nytte-kostnadsforholdet.

**Tildeling av tilskudd fra en veldedig giver**: En finansiør som sammenligner et tilskudd på £500 000 som når 1 000 husholdninger med lav inntekt (vekt ≈ 2,0, vektet verdi tilsvarende £1 million) mot det samme beløpet på £500 000 som når 1 000 husholdninger med middels inntekt (vekt ≈ 1,0, vektet verdi tilsvarende £500 000), bør vise fordelingsargumentet eksplisitt i styresaken, ikke overlate det til å utledes.

## Sammenheng med programvareutvikling

Fordelingsvekting dukker sjelden direkte opp i måltall for programvareleveranse, men den bør prege hvordan utviklings- og datateam utformer måling og målretting:

- Når du bygger et effektdashbord eller en gevinstkalkulator, vis inntekts- eller deprivasjonsprofilen til dem som berøres, ikke bare en samlet nyttesum – samlede tall uten fordelingsoppdeling skjuler nettopp den omvendingen som er vist ovenfor.
- Koble målrettingslogikken i tjenestedesign til de samme deprivasjonsdataene som Green Book bruker – se [Index of Multiple Deprivation](../index-of-multiple-deprivation/) – slik at en digital tjenestes rekkevidde kan vurderes for likhet, ikke bare effektivitet (den omstridte fjerde E-en i [valuta for pengene](../verdi-for-pengene/)).
- Når en algoritme fordeler en knapp ressurs (timeavtaler, saksbehandlertid, en subsidie), vil en uvektet målfunksjon om å «maksimere total nytte» per konstruksjon gjenskape den samme skjevheten som Green Books vekting finnes for å rette opp – flagg dette eksplisitt til politikkeierne før du optimaliserer.

## Fallgruver

- **Å bruke fordelingsvekter inkonsekvent på tvers av en portefølje.** Å vekte ett programs nytte, men ikke sammenligningsalternativets, gir en skjev, ikke en rettferdigere, sammenligning – Green Book krever likt grunnlag.
- **Å bruke eiendoms- eller markedsverdier som stedfortreder for velferd uten justering.** Markedspriser er selv forvrengt av eksisterende inntektsulikhet, som er nøyaktig det fordelingsvekting skal korrigere for – ujusterte markedsverdier kan dobbelttelle skjevheten.
- **Å overse variasjon innenfor grupper.** Vekting etter områdets gjennomsnittsinntekt (f.eks. en desil i Index of Multiple Deprivation) kan feilrepresentere enkeltpersoner som ikke tilsvarer områdets gjennomsnitt – bruk de mest finkornede inntektsdataene som med rimelighet er tilgjengelige.
- **Å behandle elastisiteten 1,3 som en universell konstant.** Green Book selv påpeker at dette er et anslag med et rimelig intervall – sensitivitetstest større beslutninger mot alternative elastisiteter i stedet for å behandle 1,3 som eksakt.

## Kilder

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation", and
  supplementary guidance on distributional impacts (2022 edition).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury, "Green Book Review 2020: Findings and Response" (addressing regional-bias criticism).
  <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>
- Fujiwara D, Campbell R. "Valuation Techniques for Social Cost-Benefit Analysis." HM Treasury/DWP,
  2011 (background on marginal utility of income elasticity estimates).
