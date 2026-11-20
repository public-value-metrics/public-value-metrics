# Forsinkelseskostnad i offentlige programmer

Forsinkelseskostnad er den offentlige verdien som går tapt per tidsenhet et program, en tjeneste eller en systemendring *ennå ikke* er levert. Det er det sentrale brobyggende måltallet i denne gruppen av temaer: det omregner «igangsettingen ble forsinket med seks måneder» til pund per uke, eller til WELLBY per uke, slik at forsinkelse kan diskuteres i samme valuta som selve forretningscasen.

## Hvorfor det er viktig

Reinertsens regel – «hvis du bare skal tallfeste én ting, tallfest forsinkelseskostnaden» – overføres nesten uendret til offentlig sektor, fordi offentlige programmer er uvanlig utsatt: forretningscaser godkjennes mot en prognostisert gevinststrøm, men strømmen begynner først å flyte ved igangsetting, og hver ukes slingring er en uke med tapt verdi som ingen prissetter i risikoregisteret. National Audit Offices gjentatte gransking av utrullingen av Universal Credit (se rapportene «Rolling Out Universal Credit», <https://www.nao.org.uk/>) illustrerer mønsteret: slingring i tidsplanen ble fulgt og rapportert, men kostnaden i pund per uke ved *ennå ikke* å levere det reformerte systemet til neste kull av søkere ble sjelden oppgitt som et hovedtall, selv om det er tallet som burde ha drevet prioritering og eskalering. Uten et tall for forsinkelseskostnad ser et forsinket program ut som et tidsplanproblem for leveransestyret; med et tall er det et problem med verdierosjon for den regnskapsansvarlige.

## Regnestykket

```
Forsinkelseskostnad = gevinst per tidsenhet som går tapt mens det er uleveret   (£/uke eller WELLBY/uke)

Samlet tap ved forsinkelse = forsinkelseskostnad × forsinkelsens varighet

Gevinststrømmer som summeres for offentlige programmer:
  kontantfrigjørende besparelser   (redusert svindel/feil, unngåtte midlertidige kostnader)
+ ikke-kontant kapasitet frigjort  (saksbehandler-/tjenestemanntimer × lønnskostnad inkl. påslag)
+ velværegevinst                   (WELLBY × £13 000/WELLBY, HMT Green Books
                                    supplerende veiledning om velvære, 2019-priser)
```

For innbyggerrettede tjenester bør man oppgi tallet i velvære i tillegg til penger – se [velværejusterte leveår](../velværejusterte-leveår/) for den underliggende enheten, og [alternativkostnad i offentlige utgifter](../alternativkostnad-i-offentlige-utgifter/) for hva det forsinkede pundet ellers kunne ha finansiert.

## Utregnet eksempel

**Kommune**: en oppgradering av boligstøttesystemet kutter feilutbetalinger med £150 per krav per år på tvers av 20 000 løpende krav.

```
Årlig gevinst = 150 × 20 000 = £3 000 000 per år
Forsinkelseskostnad = 3 000 000 / 52 ≈ £57 700 per uke
En forsinkelse i innføringen på 12 måneder koster 52 × 57 700 ≈ £3 000 000 i unngåelige feil.
```

**Etat i sentralforvaltningen**: en vurderingstjeneste for uføreytelser, levert seks måneder (26 uker) senere enn planlagt, betyr at 200 000 søkere per år venter i gjennomsnitt tre uker lenger på en avgjørelse. Hver ekstra uke med økonomisk uvisshet er modellert som en effekt på −0,0018 WELLBY (ett poeng livstilfredshet):

```
WELLBY-tap per søker = 3 × 0,0018 = 0,0054
Årlig WELLBY-tap = 200 000 × 0,0054 = 1 080 WELLBY per år
Forsinkelseskostnad_velvære = 1 080 / 52 ≈ 20,8 WELLBY per uke
Forsinkelseskostnad_penger = 20,8 × £13 000 ≈ £270 000 per uke i velværeverdi
```

En forsinkelse på 26 uker «koster» dermed omtrent 540 WELLBY – verdt rundt £7 millioner etter Green Books verdsetting av velvære – og gjør en tapt igangsettingsdato til en hendelse for innbyggernes velferd, ikke en fotnote i prosjektstyringen.

## Sammenheng med programvareutvikling

Forsinkelseskostnad er det som gjør [DORA-metrikker](../dora-målinger-for-offentlig-verdi/) og [flytmetrikker](../flytmål-i-offentlig-leveranse/) økonomisk leselige: ledetid i leveranseløpet × forsinkelseskostnad er penger (eller velvære) som brennes i køer før de noen gang når en innbygger. Konkret:

- **Prioritering**: rangér et etterslep etter forsinkelseskostnad ÷ varighet i stedet for etter interessentenes rang – programvareutviklingens motstykke til Green Books krav om å vurdere alternativer etter verdi, ikke etter hvem som spør.
- **Innkjøp**: en rammeavtalebasert innkjøpssyklus på 12–18 måneder har en forsinkelseskostnad; å prise den endrer hastegrunnlaget for raskere løp, og mater direkte inn i beslutninger om [bygge eller kjøpe](../utvikle-selv-eller-kjøpe-i-offentlig-forvaltning/) der tid til verdi er en beslutningsdriver.
- **Gevinstcase**: hvert tall for forsinkelseskostnad som oppgis ved godkjenning, bør dukke opp igjen ved [gevinstrealisering](../gevinstrealisering/) – hvis forsinkelseskostnaden var reell, bør den fremskyndede gevinsten kunne måles etter igangsetting.

## Fallgruver

- **Å anta lineær forsinkelseskostnad**: enkelte offentlige tjenester har frist-formet verdi (en lovpålagt etterlevelsesdato – forsinkelseskostnaden hopper til håndhevingsrisiko etter datoen, nær null før) i stedet for en jevn ukesrate. Klassifiser hastegradsprofilen før du multipliserer.
- **Forsinkelseskostnad på leveranser ingen trenger**: forsinkelse har bare en kostnad hvis det uleverte har verdi; et system ingen vil bruke har null forsinkelseskostnad uansett hvor sent det er.
- **Dobbelttelling av forsinkelse og diskontering**: [den sosiale diskonteringsrenten](../samfunnets-diskonteringsrate/) priser allerede tid over flerårige vurderingshorisonter; forsinkelseskostnad er den operative versjonen innenfor horisonten, for uker og måneder. Bruk forsinkelseskostnad for slingring i tidsplanen og forskyvning av nåverdien for flerårig omfasing.

## Kilder

- Reinertsen DG, *The Principles of Product Development Flow*, Celeritas Publishing, 2009.
- HM Treasury, Green Book supplementary guidance: wellbeing. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>
- National Audit Office, reports on Universal Credit rollout. <https://www.nao.org.uk/>
