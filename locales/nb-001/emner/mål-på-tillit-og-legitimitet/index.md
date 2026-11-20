# Mål på tillit og legitimitet

Legitimitet og støtte er ett av de tre beina i Mark Moores «strategiske trekant» i *Creating Public Value* (1995) – ved siden av selve offentlige verdien og operativ kapasitet – og det er det beinet som oftest forblir umålt, fordi legitimitet, i motsetning til et budsjett eller et antall leveranser, ikke har noe åpenbart enkelt tall knyttet til seg. Mål på tillit og legitimitet er familien av proxymål myndighetene bruker for å fylle dette gapet: undersøkelser av institusjonell tillit, tilsynsorganers tillitsvurderinger, data om klager og anker, og indikatorer for politisk og lovgivende støtte.

## Hvorfor det er viktig

Moores argument er at en offentlig leder som leverer reell verdi, men mister politisk og offentlig legitimitet, til slutt vil miste det autoriserende miljøet som trengs for å fortsette å levere – finansiering kuttes, mandater snevres inn og tjenesten sultes uansett hvor gode utfallene er. Legitimitet er derfor ikke et PR-etterpåklokskap festet på et leveransescorekort; det er en bærende innsatsfaktor for om oppdraget i det hele tatt kan fortsette, og det er derfor den står som et likeverdig perspektiv i et [scorekort for offentlig verdi](../scorecard-for-offentlig-verdi/) og ikke som en fotnote. OECDs undersøkelsesprogram «Trust in Government» er det ledende tverrnasjonale forsøket på å kvantifisere dette: det følger andelen innbyggere i OECDs medlemsland som sier de har tillit til sin nasjonale regjering, og langtidsdataene viser at tilliten er svært følsom for sjokk – både finanskrisen i 2008 og covid-19-pandemien ga kraftige utslag på nasjonalt nivå, ofte fulgt av bare delvis gjenoppretting. OECDs analyse finner konsekvent at oppfattet *kompetanse* (leverer myndighetene det de sier de vil levere) og oppfattet *rettferdighet/integritet* (oppfattes myndighetene som å handle uten korrupsjon eller favorisering) er de to sterkeste driverne bak tillitstallet, atskilt fra tilfredshet med noen enkelt transaksjon. Myndigheter forsøker også i økende grad å operasjonalisere legitimitet på et mer detaljert nivå – Storbritannias uavhengige regulatorer og tilsynsorganer (National Audit Office, Parliamentary and Health Service Ombudsman, sektorreguleringsorganer som Ofsted og Care Quality Commission) fungerer som institusjonaliserte legitimitetskontroller som gjør «har publikum fortsatt tillit til denne tjenesten» om til reviderbare vurderinger.

## Regnestykket

Tillit og legitimitet er et rammeverksemne, og de brukbare kvantitative proxyene er:

```
Indeks for institusjonell tillit (OECD-stil)
  = % av respondentene som svarer «ja» på et spørsmål om tillit til myndighetene,
    fulgt over tid og oppdelt etter demografisk gruppe

Sett av legitimitetsproxyer (intet enkelttall erstatter begrepet):
  - Medhold i klager per 1 000 tjenestebrukere (ombuds- eller interne klagedata)
  - Suksessrate for rettslig prøving / anker mot organets avgjørelser
  - Vurdering fra uavhengig regulator/tilsynsorgan (f.eks. skalaen «outstanding» til «inadequate»)
  - Tillitsvotum eller hyppighet av kritiske rapporter fra lovgivende/tilsynskomiteer
  - Antall innsynsforespørsler og andel gitt innsyn/avslått, som proxy
    for oppfattet åpenhet

Legitimitet underbygges, den regnes ikke ut: en forsvarlig legitimitetsvurdering
trianguleres med flere av de ovennevnte i stedet for å stole på én enkelt proxy.
```

## Utregnet eksempel

**Nasjonal skattemyndighet**: legitimitetstriangulering for en årlig rapport om offentlig verdi.

```
OECD-lignende tillitsproxy (departementsspesifikk tillitsundersøkelse):
  58 % av respondentene sier de stoler på at myndigheten «behandler meg rettferdig»
  (ned fra 64 % to år tidligere)

Klagedata:
  Klager det er gitt medhold i: 4,2 per 1 000 skattebetalerkontakter (opp fra 3,1 per 1 000)

Henvisninger til ombud:
  Henvisninger til det uavhengige Adjudicator's Office: 1 850 i året, hvorav
  61 % fikk helt eller delvis medhold mot myndigheten (opp fra 48 % året før)

Lest samlet: tilliten faller, klager med medhold øker, og uavhengige
ombudsfunn står i økende grad mot myndigheten – tre uavhengige signaler som
peker i samme retning, og det er det som gjør dette til et troverdig
legitimitetsfunn og ikke støy i én enkelt serie.
```

Ett enkelt av disse tallene som beveger seg ville vært svak evidens. At tre uavhengige mål beveger seg sammen over samme periode er mønsteret som gjør en påstand om legitimitet forsvarlig.

## Sammenheng med programvareutvikling

Legitimitetsmål produseres sjelden av ett enkelt teams dashbord, og det er selv designleksjonen: bygg rapporteringsløp som kan innhente og avstemme data fra uavhengige eksterne kilder (ombudets saksbehandlingssystemer, datastrømmer med regulatorvurderinger, undersøkelsesleverandører) i stedet for å arkitektere legitimitetsrapportering som et rent internt mål, fordi internt innhentede legitimitetspåstander («vi vurderer oss selv som troverdige») har liten bevisverdi – det samme uavhengighetsproblemet som er nevnt for legitimitetsperspektivet i et [scorekort for offentlig verdi](../scorecard-for-offentlig-verdi/). Datarørledninger for klager og anker fortjener den samme datakvalitetsdisiplinen som enhver utfallsrørledning som mater [resultatbasert betaling](../resultatbasert-betaling-og-sosiale-effektobligasjoner/)-kontrakter, siden et underrapportert eller dårlig kategorisert klagedatasett stilltiende undervurderer et legitimitetsproblem før det blir synlig i en tillitsundersøkelse et år senere. Se [mål på innbyggertilfredshet](../mål-på-innbyggertilfredshet/) for motstykket på transaksjonsnivå til dette målet på institusjonsnivå, og [offentlig verdi](../offentlig-verdi/) for Moores fulle rammeverk med den strategiske trekanten som dette beinet hører til.

## Fallgruver

- **Å behandle tilfredshet som en proxy for legitimitet**: en innbygger kan være fornøyd med grensesnittet i én enkelt transaksjon, men mistro institusjonen som helhet (eller omvendt) – se [mål på innbyggertilfredshet](../mål-på-innbyggertilfredshet/) for hvorfor de to må rapporteres hver for seg.
- **Å stole på ett enkelt selvrapportert mål**: en internt gjennomført tillitsundersøkelse uten uavhengig støtte (ombudsdata, regulatorvurderinger) er lett å avfeie som selvrettende; trianguler.
- **Å ignorere demografisk oppdeling**: samlede nasjonale tillitstall kan skjule sterkt divergerende legitimitet blant bestemte grupper (etter alder, etnisitet, inntekt eller region) – OECDs egne «Trust in Government»-utgivelser deler opp av nettopp denne grunnen.
- **Å lese et enkelt sjokkdrevet fall som en varig trend**: tillitstall svinger kraftig rundt kriser (finanskrakk, pandemier, profilerte skandaler) og kommer delvis tilbake; et enkelt datapunkt etter et sjokk bør ikke ekstrapoleres til en langsiktig nedgang uten flere data.

## Kilder

- Mark H. Moore, *Creating Public Value: Strategic Management in Government*, Harvard University Press, 1995.
- OECD, «Trust in Government.» <https://www.oecd.org/en/topics/trust-in-government.html>
- Parliamentary and Health Service Ombudsman, årlige saksstatistikker. <https://www.ombudsman.org.uk/>
