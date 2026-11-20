# Skyggepriser

En skyggepris er en anslått verdi som settes på et gode, en ressurs eller en eksternalitet som ikke har noen observerbar markedspris, eller der markedsprisen er forvridd og ikke gjenspeiler den sanne samfunnsverdien. Offentlige verdsettingsanalyser bygger på en liten samling offisielle skyggepriser – karbon, tid utenom arbeid og arbeidskraft som ellers ville vært arbeidsledig – som publiseres sentralt, slik at alle departementer bruker det samme tallet.

## Hvorfor det er viktig

Skyggepriser finnes fordi [samfunnsøkonomisk nytte-kostnadsanalyse](../samfunnsøkonomisk-nytte-kostnadsanalyse/) ikke kan fungere uten en pengeverdi for hver kostnad og hver nytte. Flere av de viktigste postene – et tonn utslipp av karbon, en times pendlertid, en time arbeidskraft som ellers ville vært arbeidsledig – har ingen markedspris i det hele tatt, eller en markedspris som gir et feil bilde av den sanne samfunnskostnaden. HM Treasury og Department for Energy Security and Net Zero publiserer i fellesskap skyggeprisen på karbon som brukes i all britisk offentlig verdsetting (<https://www.gov.uk/government/publications/valuing-greenhouse-gas-emissions-in-policy-appraisal>). Den er ikke utledet fra noen karbonmarkedspris, men fra en målkonsistent tilnærming: karbonverdien settes lik den marginale avkostnaden for utslippsreduksjon som trengs for å nå Storbritannias lovfestede karbonbudsjetter. Det er en grunnleggende annen logikk enn å se på hva karbon faktisk omsettes for i EUs eller Storbritannias kvotehandelssystem.

Skyggelønnen følger en lignende logikk på arbeidskraftsiden. Å ansette noen som ellers ville vært arbeidsløs koster ikke samfunnet hele lønnen – en del av lønnen er en overføring fra bortfalte trygdeytelser og tapt fritid og tid brukt på jobbsøking, ikke et nytt netto uttak av samfunnets ressurser. Derfor setter Green Book en skyggepris under markedslønnen for arbeidskraft som hentes fra arbeidsledighet. Den gjenspeiler den sanne [alternativkostnaden](../alternativkostnad-i-offentlige-utgifter/) for denne arbeidskraften, ikke markedsprisen.

## Regnestykket

```
Skyggepris på karbon (illustrativ struktur; gjeldende verdier hentes fra
det offisielle verktøyet for karbonverdier fra BEIS/DESNZ – ikke bruk
utdaterte tall):
  Verdi for kvotepliktig sektor: informert av prisbaner for ETS-kvoter
  Verdi for ikke-kvotepliktig sektor (målkonsistent): satt til den
    marginale kostnaden ved utslippsreduksjon som trengs for å nå de
    lovfestede karbonbudsjettene, og stiger over tid etter hvert som de
    enklere tiltakene er brukt opp
  Anvendes som: £/tonn CO2e × tonn sluppet ut eller unngått med
    alternativet, diskontert med samfunnets diskonteringsrate for
    fremtidige år

Skyggelønn (SWR):
  SWR = Markedslønn − (verdien av tapt fritid/søketid som spares
                        + verdien av trygdeytelser som ikke lenger utbetales)
  Uttrykkes vanligvis som en andel av markedslønnen (f.eks. SWR = 0,6
    × markedslønn i et område med høy arbeidsledighet, ifølge Green Books
    vedlegg A om arbeidsmarkeder med ledig kapasitet)
```

Begge tallene er politiske konvensjoner fastsatt sentralt, ikke empiriske markedsobservasjoner. Hele poenget med en skyggepris er å erstatte et manglende eller forvridd marked. Derfor må en analyse som bruker en slik pris, vise til den gjeldende offisielle kilden i stedet for å utlede sitt eget tall – nettopp for at alle departementers analyser skal kunne sammenlignes.

## Utregnet eksempel

**Statlig forvaltning**: en vurdering av et flomsikringstiltak anslår at det unngår 400 tonn CO2e i utslipp per år (gjennom redusert bruk av nødmaskiner og lavere bundet karbon fra gjenoppbygging som unngås) over en analyseperiode på 30 år, sammenlignet med et «minimumsalternativ».

```
Illustrativ skyggepris på karbon: £280/tonn CO2e (år 1, stigende over
  analyseperioden i henhold til den offisielle tabellen over
  karbonverdier for ikke-kvotepliktig sektor)
Karbonnytte år 1 = 400 × £280 = £112 000
```

Siden den offisielle tabellen lar karbonverdien *stige* over analyseperioden (som følge av stadig strengere karbonbudsjetter), må analytikeren bruke riktig årsspesifikk verdi for hvert av de 30 årene, ikke en flat sats. Å bruke verdien for år 1 hele veien ville undervurdert nytten i senere år og forvridd rangeringen mot alternative flomsikringsløsninger med andre karbonprofiler.

**Lokal myndighet**: en kommunes program for arbeidstrening av langtidsledige innbyggere plasserer 150 personer i jobber med £11 i timen. Hvis man verdsetter dette med full markedslønn, ville programmet få kreditert £11 × arbeidede timer som samfunnsnytte. Skyggelønnsmetoden erkjenner imidlertid at dette ikke var arbeidstakere hentet fra andre jobber – den sanne alternativkostnaden for arbeidskraften deres før programmet var lav.

```
Markedslønn: £11,00/time
Skyggelønn (illustrativ, høy lokal arbeidsledighet): 0,6 × markedslønn = £6,60/time
Netto samfunnsnytte som kan tilskrives per arbeidet time ≈ £11,00 − £6,60 = £4,40/time
  (den «ekstra» verdien som skapes ved å flytte arbeidskraft som reelt sett lå
   ubrukt over i produksjon, i motsetning til selve lønnen, som i hovedsak er en overføring)
```

Derfor kan vurderinger av sysselsettingsprogrammer i områder med høy arbeidsledighet vise en positiv netto samfunnsverdi, selv om det samme programmet i et område med full sysselsetting – der arbeidskraften ville blitt trukket fra andre jobber – ikke ville gjort det.

## Sammenheng med programvareutvikling

Skyggepriser berører sjelden programvareleveranser direkte, men de blir viktige når en virksomhetscase hevder en karbon- eller samfunnsnytte av en IT-endring. En konsolidering av datasentre som hevder karbonbesparelser, eller en papirløs tjeneste som hevder spart karbon fra utskrift og porto, må bruke den gjeldende offisielle skyggeprisen på karbon i stedet for et oppfunnet tall, og må bruke riktig år-for-år-tabell i stedet for en flat sats – akkurat som for alle andre inndata i en Green Book-analyse. Se [totalkostnad for eierskap i offentlig IT](../totalkostnad-for-eierskap-i-offentlig-it/) og [verdien av cybersikkerhet i offentlig sektor](../verdien-av-cybersikkerhet-i-offentlig-sektor/). Begge trenger ofte en skyggepris for en inndata som er vanskelig å verdsette i penger (risiko for sikkerhetsbrudd, nedetid), ved siden av poster med direkte kostnader.

## Fallgruver

- **Å bruke et utdatert karbon- eller lønnstall.** Begge verdiene revideres jevnlig i den sentrale veiledningen. En analyse bygget på et utdatert tall vil ikke tåle Treasurys gjennomgang.
- **Å bruke en flat skyggepris på karbon gjennom en analyse over flere tiår.** Den offisielle tabellen stiger over tid. Å bruke verdien for år 1 hele veien gir en feil profil for nytte eller kostnader.
- **Å forveksle skyggelønnen med et fradrag i arbeidstakerens faktiske lønn.** Skyggelønnen justerer *analysens* verdsetting av arbeidsinnsatsen, ikke lønnen arbeidstakeren faktisk får utbetalt. Å blande de to sammen innbyr til (uriktig) å rettferdiggjøre lønn under markedsnivå.
- **Å utlede en egen skyggepris i stedet for å bruke den offisielle.** Skyggepriser er politiske konvensjoner nettopp for at analyser skal kunne sammenlignes på tvers av departementer. Et lokalt oppfunnet tall bryter denne sammenlignbarheten, uansett hvor godt begrunnet det er.

## Kilder

- HM Treasury / Department for Energy Security and Net Zero. «Valuing greenhouse gas emissions in policy appraisal.» <https://www.gov.uk/government/publications/valuing-greenhouse-gas-emissions-in-policy-appraisal>
- HM Treasury. «The Green Book: appraisal and evaluation in central government,» vedlegg A (skyggepris på arbeidskraft, verdier for tid utenom arbeid). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Little IMD, Mirrlees JA. «Project Appraisal and Planning for Developing Countries.» Heinemann, 1974 (grunnleggende metodikk for skyggeprising).
