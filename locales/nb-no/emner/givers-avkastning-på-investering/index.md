# Givers avkastning på investering

Givers avkastning på investering er hva en bestemt givers pund faktisk kjøper i utfall – ikke organisasjonens driftsforholdstall, og ikke organisasjonens egen avkastning på hele budsjettet. Den flytter ROI fra organisasjonens perspektiv (hvor effektivt drifter vi) til giverens perspektiv (hva endrer mitt marginale bidrag), og de to tallene blir rutinemessig, og feilaktig, behandlet som det samme.

## Hvorfor det er viktig

En veldedig organisasjons egen «ROI», i den grad uttrykket brukes i det hele tatt, beskriver vanligvis noe som [kostnad per mottaker](../kostnad-per-mottaker/) eller [administrasjonsandel i veldedige organisasjoner](../administrasjonsandel-i-veldedige-organisasjoner/) – mål på organisatorisk effektivitet. En givers ROI er et helt annet spørsmål: Gitt at organisasjonen allerede har andre inntekter, hva tilfører *denne* giverens penger i marginen? Hvis organisasjonen ville ha levert det samme programmet med eller uten en bestemt gave på £10 000 – fordi den har rikelige reserver, eller fordi en annen finansiør ville ha fylt gapet – er gavens ROI for giveren nær null, uansett hvor bra organisasjonens samlede administrasjonsandel eller kostnad per utfall ser ut.

Dette er det samme addisjonalitetsspørsmålet som ligger til grunn for vurdering av [valuta for pengene](../verdi-for-pengene/) i britisk offentlig pengebruk og for [addisjonalitet og dødvekt](../addisjonalitet-og-dødvekt/) i programevaluering: Skapt verdi kan bare tilskrives en finansiør i den grad den ikke ville ha oppstått uansett. Store giverplattformer og organisasjoner for effektiv giving (Giving What We Can, GiveWell) bygger anbefalingene sine eksplisitt rundt dette skillet, og spør ikke «er dette en god organisasjon», men «har denne organisasjonen ufylt rom for mer finansiering, slik at gaven min er addisjonell».

## Regnestykket

```
Givers ROI ≠ organisasjonens driftseffektivitet

Givers ROI ≈  (Utfall oppnådd med gaven) − (Utfall som ville ha
               inntruffet uten den, dvs. det kontrafaktiske scenarioet)
             ─────────────────────────────────────────────────
                              Gavens størrelse

Sentrale inndata:
  - Rom for mer finansiering (er organisasjonen finansieringsbegrenset i marginen?)
  - Funging (ville en annen giver ha fylt gapet?)
  - Marginal kostnadseffektivitet ved det aktuelle finansieringsnivået (kostnadene
    stiger ofte når et tiltak skaleres forbi den lettest tilgjengelige gruppen)
```

Se [kostnadseffektivitet i effektiv altruisme](../kostnadseffektivitet-i-effektiv-altruisme/) for hvordan GiveWell operasjonaliserer spørsmålet om «rom for mer finansiering», og [kontrafaktisk analyse](../kontrafaktisk-analyse/) for den generelle metoden.

## Utregnet eksempel

En giver velger mellom to gaver på £5 000:

- **Organisasjon C**: har et fullt finansiert kjerneprogram med £2 millioner i reserver og en venteliste av finansiører; de marginale £5 000 havner trolig i reservene eller i en aktivitet med lavere prioritet. Anslått addisjonelt utfall for giveren: minimalt – pengene endrer ikke åpenbart hva som skjer.
- **Organisasjon D**: et lite, evidensbasert program som offentlig har sagt at det må avvise 200 personer neste kvartal uten ytterligere £50 000, og som har samlet inn £42 000 av dem. De marginale £5 000 vil svært sannsynlig finansiere reell ekstra leveranse – si 20 ekstra personer betjent, til organisasjonens egen oppgitte kostnad per mottaker på £250.

Samme gavestørrelse, samme giver, radikalt ulik ROI for giveren – ikke fordi Organisasjon C er en dårligere organisasjon (den kan ha et bedre tall for kostnad per utfall samlet sett), men fordi det marginale finansieringsgapet allerede er lukket.

## Sammenheng med programvareutvikling

Giverplattformer og verktøy for gaveanbefalinger viser alt for ofte bare effektivitetsmål på organisasjonsnivå (administrasjonsandel, kostnad per mottaker), fordi det er det organisasjonene publiserer i årsrapportene og det som er enklest å hente inn i en sammenligningstabell. Å representere givers ROI riktig krever et annet og vanskeligere datapunkt å skaffe: organisasjonens oppgitte nåværende finansieringsgap eller «rom for mer finansiering», som endrer seg gjennom året og sjelden finnes som strukturerte data. Plattformer som vil støtte ekte resonnering om givers ROI trenger enten en direkte kilde fra offentliggjorte finansieringsgap (slik GiveWell vedlikeholder manuelt for sine anbefalte organisasjoner) eller en eksplisitt merknad om at en sammenligningstabell viser organisatorisk effektivitet, ikke giverens addisjonalitet. Se [administrasjonsandel i veldedige organisasjoner](../administrasjonsandel-i-veldedige-organisasjoner/) for målet givers ROI oftest, og feilaktig, forveksles med.

## Fallgruver

- **Å blande sammen organisasjonens effektivitet og giverens addisjonalitet.** En godt drevet organisasjon med lav administrasjonsandel kan likevel ha en nær null marginal ROI for giveren hvis den ikke er finansieringsbegrenset.
- **Å overse funging.** Hvis en stor institusjonell finansiør uansett ville ha dekket gapet, fortrenger en enkeltgivers gave denne finansiørens penger i stedet for å tilføre ny leveranse.
- **Å anta lineær kostnadseffektivitet ved skalering.** De billigste mottakerne å nå blir ofte betjent først. Marginal kostnad per utfall stiger ofte når et program utvides, så ROI på det neste pundet er ikke den samme som ROI på det gjennomsnittlige pundet som allerede er brukt.
- **Intet oppgitt finansieringsgap.** En organisasjon eller plattform som ikke kan si hva de neste £X ville finansiere, kan ikke underbygge et ekte krav om givers ROI, bare et gjennomsnittskostnadskrav.

## Kilder

- Giving What We Can, on funding gaps and cost-effectiveness in donation decisions. <https://www.givingwhatwecan.org/>
- GiveWell, "Our criteria" (room for more funding as an explicit criterion). <https://www.givewell.org/how-we-work/our-criteria>
- HM Treasury, the Green Book: appraisal and evaluation in central government. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-governent>
