# Velværejusterte leveår (WELLBY)

En WELLBY er ett ekstra poeng i livstilfredshet, på den vanlige velværeskalaen fra 0 til 10, for én person i ett år. Det er den strukturelle parallellen til QALY i helseøkonomi – én enkelt enhet som lar deg sammenligne tiltak hvis utfall ellers ikke har noe felles – men bygget på subjektivt velvære i stedet for kliniske helsetilstander, og utformet i HM Treasurys «Wellbeing guidance for appraisal: supplementary Green Book guidance» (2021).

## Hvorfor det er viktig

Nytte-kostnadsanalyse trenger en felles enhet for å sammenligne et tilskudd til en ungdomsklubb mot et trafikksikkerhetstiltak mot en psykisk helsetjeneste, som ikke deler noe utfallsmål. Helseøkonomi løste dette for kliniske tiltak med QALY: et kvalitetsjustert leveår, vektet fra 0 (død) til 1 (full helse). HM Treasurys veiledning om velvære utvider den samme logikken til offentlige utgifter utenom helse, og bruker ONS' harmoniserte spørsmål om livstilfredshet («Overall, how satisfied are you with your life nowadays?», besvart 0–10) som utfallsstige i stedet for en indeks for helsetilstand. En WELLBY på 1 betyr at én persons livstilfredshet stiger ett helt poeng i ett år (eller tilsvarende at ti personers tilfredshet stiger med 0,1 poeng hver i ett år – WELLBY summeres over en befolkning på samme måte som QALY). HM Treasurys veiledning angir en illustrativ pengeverdi per WELLBY (rundt £13 000, 2019/20-priser), utledet ved å avstemme data om subjektivt velvære mot andre tilnærminger til verdien av et leveår. Det gir analytikere en måte å monetisere utfall – redusert ensomhet, sosial samhørighet, tilgang til grøntområder – som teknikker for [verdsetting av velvære](../verdsetting-av-velvære/) tidligere bare kunne beskrive, ikke sammenligne på lik linje med utgifter til helse eller sikkerhet.

## Regnestykket

```
WELLBY = Δ livstilfredshet (skala 0–10) × antall år endringen varer
        (summert over alle berørte personer)

Monetisert velværenytte = genererte WELLBY × verdi per WELLBY (HMTs referanseverdi)

jf. QALY = Δ nytte for helsetilstand (skala 0–1) × år levd i den tilstanden
```

Tilfredshetsskalaen 0–10 og QALY-nyttens skala 0–1 kan ikke byttes om uten et konverteringstrinn. HM Treasurys veiledning drøfter hvordan de to kan avstemmes slik at for eksempel et helsetiltak vurdert i QALY og et sosialt tiltak vurdert i WELLBY ikke stilltiende dobbelttelles eller blir usammenlignbare innenfor samme [Green Book-vurdering](../vurdering-etter-green-book/).

## Utregnet eksempel

**Ensomhetstjeneste i en lokal myndighet**: en besøksvenn-ordning betjener 400 isolerte eldre innbyggere. Oppfølgingsundersøkelser viser at gjennomsnittlig livstilfredshet stiger fra 5,2 til 6,0 (en økning på 0,8 poeng), og effekten anslås å vare i 2 år før den avtar.

```
WELLBY = 400 personer × 0,8 poeng × 2 år = 640 WELLBY

Monetisert verdi = 640 × £13 000 = £8 320 000
```

Mot en årlig programkostnad på £300 000 (£600 000 over 2 år) er nytte-kostnadsforholdet omtrent 8 320 000 / 600 000 ≈ **13,9:1** – et tall som nå kan stå i den samme analysetabellen som et helsetiltaks kostnad per unngått QALY eller et transporttiltaks spart reisetid.

**Veldedig organisasjon, i mindre skala**: et lokalt kunstprogram når 50 deltakere med en målt økning i tilfredshet på 0,3 poeng, som varer i 1 år.

```
WELLBY = 50 × 0,3 × 1 = 15 WELLBY
Monetisert verdi = 15 × £13 000 = £195 000
```

## Sammenheng med programvareutvikling

- Enhver innbyggerrettet tjeneste som allerede samler inn et spørsmål om livstilfredshet eller velvære (mange kommunale plattformer og plattformer for helse og omsorg gjør det, etter ONS' fire standardspørsmål om velvære) kan beregne WELLBY direkte fra eksisterende datarørledninger i stedet for å bestille skreddersydd økonomisk evaluering for hver tjenesteendring.
- WELLBY gir utviklingsteam som bygger for rapportering etter [Social Value Act](../loven-om-samfunnsverdi-i-offentlige-tjenester/) eller [sosial avkastning på investering](../sosial-avkastning-på-investering/) en nasjonalt standardisert, HM Treasury-godkjent nevner, og unngår en oppblomstring av skreddersydde «effektscorer» som ikke kan sammenlignes på tvers av kontrakter eller leverandører.
- Fordi WELLBY er additive på tvers av personer og tid, passer de rent inn i den typen sporing av utfall på befolkningsnivå som brukes i systemer for [utfallsbasert ansvarlighet](../utfallsbasert-ansvarliggjøring/) – et tjenestedashbord kan rapportere kumulative WELLBY generert per kvartal slik et helsesystem rapporterer vunne QALY.

## Fallgruver

- **Å anta at selvrapporterte tilfredshetsgevinster utelukkende kan tilskrives tiltaket** – uten et kontrafaktisk scenario (sammenligningsgruppe eller før/etter-design med kontroller) kan du ikke skille WELLBY-gevinsten fra generelle trender; se [kontrafaktisk analyse](../kontrafaktisk-analyse/).
- **Å blande WELLBY og QALY i én sum uten avstemming** – HM Treasurys veiledning er eksplisitt på at de to bruker ulike skalaer og ulike underliggende verditeorier. Å summere dem naivt gir dobbelttelling av overlappende velvære.
- **Å bruke pengereferanseverdien ukritisk** – tallet i £ per WELLBY er et nasjonalt gjennomsnittsanslag med reelle usikkerhetsbånd. HM Treasurys veiledning anbefaler følsomhetsanalyse, ikke å behandle det som en fast vekslingskurs.

## Kilder

- HM Treasury. «Wellbeing guidance for appraisal: supplementary Green Book guidance.» (2021) <https://www.gov.uk/government/publications/wellbeing-guidance-for-appraisal-supplementary-green-book-guidance>
- ONS. «Personal well-being user guidance» (de fire standardspørsmålene om velvære). <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing>
- HM Treasury. «The Green Book: Central Government Guidance on Appraisal and Evaluation.»
