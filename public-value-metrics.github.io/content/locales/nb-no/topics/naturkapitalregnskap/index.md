# Naturkapitalregnskap

Naturkapitalregnskap stiller miljøet på lik linje med enhver annen nasjonal eller organisatorisk eiendel: det måler beholdningen av naturressurser (skog, jord, elver, våtmarker, atmosfæren) og strømmen av tjenester de produserer (karbonbinding, flomvern, rekreasjon, mat), både i fysiske og monetære termer, slik at miljøforringelse synliggjøres i beslutninger på samme måte som en nedbygging av finanskapital ville gjort. Storbritannia er blant de regjeringene som har kommet lengst i å gjøre dette systematisk, drevet av 25 Year Environment Plan (2018) og gjennomført gjennom ONS' UK Natural Capital accounts og HM Treasurys supplerende veiledning til Green Book.

## Hvorfor det er viktig

Konvensjonell regnskapsføring – både i næringslivet og i det offentlige – behandler en skog som verdiløs til den felles og selges som tømmer, og da blir den BNP. Naturkapitalregnskap finnes for å tette dette gapet: Storbritannias 25 Year Environment Plan forpliktet regjeringen til å innarbeide tenkning om naturkapital i hele politikken, med den uttalte ambisjonen å være «den første generasjonen som etterlater miljøet i bedre stand enn vi fant det». ONS har siden publisert årlige UK Natural Capital accounts (<https://www.ons.gov.uk/economy/environmentalaccounts/bulletins/uknaturalcapitalaccounts/latest>) som anslår den monetære verdien av økosystemtjenester – fra rekreasjon i skog til helsegevinster av urbane grøntområder og karbonlagring i torvmyr – innenfor det samme nasjonalregnskapsrammeverket som brukes for produsert kapital, slik at naturkapital etter hvert kan stå i samme balanse som veier, bygninger og utstyr. HM Treasurys veiledning Enabling a Natural Capital Approach (ENCA), supplerende til Green Book (<https://www.gov.uk/government/publications/enabling-a-natural-capital-approach-enca-guidance>), viser hvordan vurderere bør verdsette miljøkostnader og -nytte i forretningscaser, slik at et veiprosjekt som ødelegger urskog eller et flomprosjekt som gjenoppretter våtmark kan sammenlignes på konsistente monetære vilkår, i stedet for at det ene får et tall og det andre et avsnitt med forbehold.

## Regnestykket

```
Eiendelsverdi for økosystemtjeneste = nåverdi av strømmen av tjenester eiendelen yter

Eiendelsverdi = Σ (t = 1 til T) [verdi av årlig tjenestestrøm_t / (1 + r)^t]

der:
  verdi av tjenestestrøm_t = mengde tjeneste i år t × enhetsverdi
                          (f.eks. rekreasjonsbesøk × verdi per besøk;
                           tonn karbon bundet × karbonpris)
  r = diskonteringsrente (Green Books samfunnsøkonomiske diskonteringsrente – se
      [samfunnsøkonomisk diskonteringsrente](../samfunnets-diskonteringsrate/))
  T = tidshorisonten eiendelen forventes å yte tjenesten over
```

Dette er nøyaktig den samme nåverdistrukturen som brukes til å verdsette produsert kapital eller vurdere enhver offentlig investering etter [Green Book-vurdering](../vurdering-etter-green-book/) – naturkapitalregnskapets bidrag er å levere troverdige fysiske mengder og enhetsverdier for tjenester som tidligere ble priset til null.

## Utregnet eksempel

**Urban skog, rekreasjonsverdi**: en skog på 50 hektar mottar anslagsvis 80 000 rekreasjonsbesøk i året, hvert verdsatt (ved reisekostnadsmetoden eller metoden med uttrykte preferanser – se [verdsetting ved avslørte preferanser](../verdsetting-ved-avslørte-preferanser/) og [verdsetting ved uttrykte preferanser](../verdsetting-med-oppgitte-preferanser/)) til £3 per besøk. Skogen forventes å fortsette å yte denne tjenesten i 50 år, vurdert med en diskonteringsrente på 3,5 %.

```
Årlig rekreasjonsverdi = 80 000 × £3 = £240 000/år

Nåverdi over 50 år ved 3,5 % ≈ £240 000 × annuitetsfaktor(3,5 %, 50 år)
annuitetsfaktor(3,5 %, 50) ≈ 21,4

Eiendelsverdi ≈ £240 000 × 21,4 ≈ £5 136 000
```

**Tillegg av karbonlagring**: den samme skogen binder anslagsvis 400 tonn CO2 i året, verdsatt til regjeringens karbonpris for ikke-kvotepliktige utslipp på omtrent £75/tonn (illustrativt – bruk de gjeldende karbonverdiene publisert av BEIS/DESNZ i en reell vurdering).

```
Årlig karbonverdi = 400 × £75 = £30 000/år
Nåverdi over 50 år ved 3,5 % ≈ £30 000 × 21,4 ≈ £642 000

Total eiendelsverdi for skogen (rekreasjon + karbon) ≈ £5 136 000 + £642 000
                                                      ≈ £5 778 000
```

Dette er før flomdemping, biologisk mangfold eller luftkvalitetstjenester er lagt til, som ENCA-veiledningen også ber vurderere ta i betraktning – totalen er bevisst et gulv, ikke et tak.

## Sammenheng med programvareutvikling

- Miljø- og eiendelsforvaltningssystemer for kommuner og etater (parker, veier, vannforekomster) kan knytte et naturkapitalregister til det fysiske eiendelsregisteret, med det samme mønsteret – tjenestestrøm ganger enhetsverdi – som i enhver annen [enhetskostnadsdatabase](../enhetskostnadsdatabaser/) organisasjonen vedlikeholder.
- Fordi nåverdien av naturkapital er følsom for diskonteringsrenten (se annuitetsfaktoren i eksempelet), bør ethvert verktøy som beregner den vise renten og tidshorisonten som synlige inndata, ikke gjemme dem – det samme åpenhetsprinsippet som behandles under [mellomgenerasjonell rettferdighet og bærekraftig diskontering](../rettferdighet-mellom-generasjoner-og-diskontering-ved-bærekraft/).
- Naturkapitalregnskap er i økende grad et påkrevd grunnlag for miljødelene av en forretningscase etter [Green Book-vurdering](../vurdering-etter-green-book/); et leveranseteam som bygger verktøy for forretningscaser bør behandle ONS-regnskapene og ENCAs enhetsverdier som referansedata som skal integreres, ikke noe vurderere regner om fra bunnen av hver gang.

## Fallgruver

- **Dobbelttelling av overlappende økosystemtjenester** – rekreasjonsverdi og verdi av biologisk mangfold for samme område kan bygge på de samme underliggende data om betalingsvilje; ENCA-veiledningen advarer uttrykkelig mot å summere verdsettinger utledet fra overlappende spørreundersøkelser.
- **Å behandle en naturkapitaleiendels verdi som statisk** – tjenestestrømmer endrer seg med klima, forvaltning og arealbrukspress; en skogs karbon- og flomdempingsverdi i dette tiåret er ikke en permanent egenskap ved stedet.
- **Å bruke nasjonale gjennomsnittlige enhetsverdier for en svært lokal beslutning** – en hektar tilgjengelig urban skog og en hektar avsidesliggende høyland har svært ulik rekreasjonsverdi; ENCA-veiledningen anbefaler lokale eller stedsspesifikke verdier der de finnes, i stedet for å falle tilbake på nasjonale gjennomsnitt.

## Kilder

- ONS. "UK natural capital accounts."
  <https://www.ons.gov.uk/economy/environmentalaccounts/bulletins/uknaturalcapitalaccounts/latest>
- HM Government. "A Green Future: Our 25 Year Plan to Improve the Environment." (2018)
- HM Treasury / Defra. "Enabling a Natural Capital Approach (ENCA): guidance."
  <https://www.gov.uk/government/publications/enabling-a-natural-capital-approach-enca-guidance>
