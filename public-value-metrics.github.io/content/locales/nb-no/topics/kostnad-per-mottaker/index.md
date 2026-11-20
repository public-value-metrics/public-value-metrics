# Kostnad per mottaker

Kostnad per mottaker er de samlede programkostnadene delt på antall unike personer som mottok en tjeneste – alle som ble nådd, uavhengig av om situasjonen deres faktisk endret seg. Det er det raskeste effektivitetstallet en organisasjon kan produsere, fordi «hvem betjente vi» nesten alltid allerede ligger i saksbehandlingssystemet, mens «hvem ble hjulpet» som regel ikke gjør det.

## Hvorfor det er viktig

Finansiører ber stadig om kostnad per mottaker, og med gode grunner: tallet er tilgjengelig umiddelbart, det er sammenlignbart på tvers av en portefølje av svært ulike programmer, og det er ærlig om rekkevidde på en måte utfallspåstander – som tar lengre tid å verifisere og er lettere å overdrive – ikke er. UK Charities SORP (Statement of Recommended Practice), som regulerer hvordan veldedige organisasjoner rapporterer etter FRS 102, krever at styrets årsrapporter beskriver oppnåelse mot formål, men de fleste mindre veldedige organisasjoners driftsregnskap faller fortsatt tilbake på enhetskostnader basert på rekkevidde, fordi de er billige å produsere og enkle å revidere.

Faren er å behandle kostnad per mottaker som om det besvarte spørsmålet det ikke kan besvare: om pengene virket. Se [kostnad per utfall](../kostnad-per-utfall/) for måltallet som faktisk besvarer det, og [utfall versus leveranser](../utfall-versus-leveranser/) for det underliggende skillet. Kostnad per mottaker er et legitimt mål for triage og rekkevidde – det forteller en finansiør hvor langt pengene rekker – men en lav kostnad per mottaker kan bety enten genuin effektivitet eller en tjeneste så tynn at den ikke endrer noe.

## Regnestykket

```
Kostnad per mottaker = samlede programkostnader / antall unike personer betjent

Til sammenligning:
Kostnad per utfall   = samlede programkostnader / antall personer som oppnår det definerte utfallet

Kostnad per mottaker er alltid ≤ kostnad per utfall, fordi utfallspopulasjonen er en delmengde
(ofte en liten en) av mottakerpopulasjonen.
```

## Utregnet eksempel

**Matbank, samme år som eksempelet for kostnad per utfall**:

- Samlede programkostnader: £450 000
- Unike husholdninger betjent (tre eller flere kasser): 1 800

```
Kostnad per mottaker = £450 000 / 1 800 = £250 per betjent husholdning
```

Sammenlign de to måltallene side om side:

| Måltall | Nevner | Resultat |
|---|---|---|
| Kostnad per mottaker | 1 800 husholdninger betjent | £250 |
| Kostnad per utfall | 630 husholdninger som oppnår matsikkerhet | £714 |

En finansiør som bare ser £250 kan konkludere med at dette er en svært effektiv veldedig organisasjon. En finansiør som ser begge tallene kan stille det mer nyttige spørsmålet: er gapet mellom rekkevidde (1 800) og utfall (630) et gap i datainnsamlingen, et designgap, eller en ærlig gjenspeiling av hvor vanskelig matsikkerhet er å oppnå med mathjelp alene?

**Veldedig organisasjon for jobbtrening, illustrativt**: kostnad per mottaker (innskrevet) = £2 000; kostnad per utfall (varig sysselsetting etter 6 måneder) = £11 000, fordi bare 18 % av deltakerne fullfører programmet og finner varig arbeid. At de to tallene avviker med en faktor på fem er vanlig overalt der fullførings- eller varighetsratene er lave – en opplæringsorganisasjon og en matbank er strukturelt identiske her.

## Sammenheng med programvareutvikling

Kostnad per mottaker er standardmåltallet i programvare for ideell sektor fordi det er måltallet som faller ut av et mottakerregister uten videre arbeid: opprett en sak, logg en tjeneste, tell rader. Å bygge et system som også støtter kostnad per utfall betyr å bevisst legge til en andre fullverdig enhet – en utfallshendelse, datert og definert uavhengig av tjenesteleveransen – og å motstå fristelsen til å la «sak lukket» stå for «utfall oppnådd». Når du avgrenser en plattform for tilskuddsforvaltning eller CRM, spør hvilket av de to måltallene hvert dashbord faktisk viser, og merk det deretter; å blande dem i én enkelt «effekt»-flis er en av de vanligste årsakene på programvarenivå til fallgruvene nedenfor. Se [enhetskostnadsdatabaser](../enhetskostnadsdatabaser/) for benchmarking av begge måltallene når de er riktig merket.

## Fallgruver

- **Å presentere kostnad per mottaker som effekt.** Det måler rekkevidde, ikke endring. Merk dashbord og rapporter «kostnad per person betjent», ikke «kostnad per person hjulpet».
- **Dobbelttelling på tvers av programmer.** En person som får både matkasser og gjeldsrådgivning fra samme organisasjon er én mottaker, ikke to, hvis nevneren skal beskrive unik rekkevidde; bestem og dokumenter hvilken konvensjon som brukes.
- **Å behandle et lavere tall som alltid bedre.** En drop-in-lunsjklubb vil alltid slå en intensiv saksoppfølgingstjeneste på kostnad per mottaker, fordi det koster mindre å berøre noen lett. Det sier ingenting om hvilken som gir mest varig endring per pund.
- **Å bytte nevner i det stille mellom rapporter.** Et tall for kostnad per mottaker oppgitt mot «innskrevne» i én årsrapport og mot «fullførte» i den neste, er ikke sammenlignbart fra år til år; oppgi nevneren hver gang.

## Kilder

- Charity Commission for England and Wales, guidance on charity reporting. <https://www.gov.uk/government/organizations/charity-commission>
- Charities SORP (FRS 102). <https://www.charitysorp.org/>
- New Philanthropy Capital (NPC), "Four Pillar Approach." <https://www.thinknpc.org/resource-hub/four-pillar-approach/>
