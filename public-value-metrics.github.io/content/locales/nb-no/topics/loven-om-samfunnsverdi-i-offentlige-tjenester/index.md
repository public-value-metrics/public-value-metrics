# Loven om samfunnsverdi i offentlige tjenester (Social Value Act)

Public Services (Social Value) Act 2012 er en britisk lovpålagt plikt som krever at offentlige myndigheter i England og Wales vurderer hvordan det som anskaffes kan bedre den økonomiske, sosiale og miljømessige velferden i det aktuelle området, og vurderer å høre berørte parter om dette, før de starter en anskaffelsesprosess for kontrakter om offentlige tjenester. Loven trådte i kraft i januar 2013 som en forholdsvis lett «ta hensyn til»-plikt, og ble vesentlig styrket av Procurement Policy Note (PPN) 06/20 i januar 2021, som krever at kontrakter i sentralforvaltningen eksplisitt evaluerer – ikke bare vurderer – samfunnsverdi, med en minimumsvekt i tildelingskriteriene.

## Hvorfor det er viktig

Før PPN 06/20 kunne «å vurdere» samfunnsverdi oppfylles ved at en bestiller noterte at man hadde tenkt på det, uten krav om at det påvirket tildelingen – en plikt som var lett å oppfylle på papiret og ignorere i praksis. PPN 06/20 lukket dette gapet for anskaffelser i sentralforvaltningen: den krever at samfunnsverdi skåres som en del av tilbudsevalueringen, organisert rundt fem nasjonale prioriterte temaer – gjenoppbygging etter covid-19, bekjempelse av økonomisk ulikhet, kamp mot klimaendringer, like muligheter og velvære – og som vanligvis måles med rammeverket National TOMs (Themes, Outcomes, Measures) som vedlikeholdes av Social Value Portal. For en programvareutvikler som bygger verktøy for anskaffelser, kontraktsoppfølging eller tilbudsstøtte i offentlig sektor er dette det rettslige grunnlaget oppdragsgiveren er pålagt å bygge på, ikke et valgfritt ekstra.

## Regnestykket

Samfunnsverdi er et rammeverksemne. «Regnestykket» er den skåringsstrukturen de fleste myndigheter bruker:

```
Samlet tilbudsscore = Vekt for pris/kostnad + Vekt for kvalitet + Vekt for samfunnsverdi

PPN 06/20 (sentralforvaltningen): vekt for samfunnsverdi ≥ 10 % av samlet score

Temaer for samfunnsverdi (PPN 06/20):
 1. Gjenoppbygging etter covid-19
 2. Bekjempelse av økonomisk ulikhet
 3. Kamp mot klimaendringer
 4. Like muligheter
 5. Velvære
```

Tilbydere monetiserer vanligvis forpliktelsene sine mot disse temaene med [enhetskostnadsdatabaser](../enhetskostnadsdatabaser/), og den samme monetiseringslogikken som i [sosial avkastning på investering](../sosial-avkastning-på-investering/) gjelder: en forpliktelse bør være dokumentert, kunne tilskrives kontrakten og ikke dobbelttelles mot annen finansiering.

## Utregnet eksempel

**IT-kontrakt i en lokal myndighet**: en kontrakt på £2 millioner over 3 år skåres 60 % kvalitet, 30 % pris og 10 % samfunnsverdi. Tilbyder A forplikter seg til 2 lærlinger, £150 000 i lokale underleveranser og 200 timer gratis opplæring i digitale ferdigheter for en lokal skole, monetisert med proxyer fra en enhetskostnadsdatabase til til sammen £90 000 i ekstra samfunnsverdi. Tilbyder B forplikter seg til en mindre pakke monetisert til £40 000. Hvis myndigheten skårer samfunnsverdi forholdsmessig mot det sterkeste tilbudet, får tilbyder A alle 10 poengene, mens tilbyder B får 10 × (£40 000 ÷ £90 000) = 4,4 poeng – et gap på 5,6 poeng som kan avgjøre kontrakten selv når kvalitet og pris er tett.

**Tilbyder fra frivillig sektor**: en liten VCSE-organisasjon (frivillig, lokal og sosial virksomhet) som byr på en kontrakt om grøntarealvedlikehold mot en kommersiell konkurrent, kan ikke konkurrere på enhetspris alene, men bruker proxyer fra Global Value Exchange til å monetisere sine eksisterende forpliktelser til lokal sysselsetting og frivillig arbeid. Det gir en dokumentert samfunnsverdicase som er verdt å skåre ved siden av pris og kvalitet.

## Sammenheng med programvareutvikling

Å vinne et tilbud med monetiserte forpliktelser om samfunnsverdi skaper en plikt til å dokumentere gjennomføringen gjennom kontraktsoppfølging – verktøy som logger oppstart av læreplasser, lokale innkjøp og opplæringstimer mot de konkrete forpliktelsene som ble skåret i tilbudet, og som mater inn i kontraktsgjennomganger i stedet for å bli glemt når kontrakten er signert. Oppføringer i G-Cloud og Digital Marketplace krever stadig oftere erklæringer om samfunnsverdi ved oppføringen. Se [sosial avkastning på investering](../sosial-avkastning-på-investering/) for verdsettingsmetoden bak forpliktelsene, [enhetskostnadsdatabaser](../enhetskostnadsdatabaser/) for proxyene tilbyderne henter fra, og [utfall mot leveranser](../utfall-versus-leveranser/) for å sikre at leverte forpliktelser er utfall og ikke bare aktivitetstall.

## Fallgruver

- **Sosial «vasking» av tilbud.** Vage forpliktelser («vi støtter lokalsamfunnet») som ikke kan måles eller følges opp i kontraktsoppfølgingen skårer godt, men leverer ingenting som kan verifiseres.
- **Å behandle samfunnsverdi som en tiebreaker.** PPN 06/20 krever at samfunnsverdi evalueres eksplisitt innenfor tildelingskriteriene, ikke brukes uformelt til å avgjøre mellom ellers like tilbud.
- **Ingen oppfølging i kontraktsforvaltningen.** Forpliktelser som er skåret i tilbudet blir ofte aldri fulgt opp under gjennomføringen – se [gevinstrealisering](../gevinstrealisering/).
- **Inkonsistente målerammeverk på tvers av kontrakter.** Å bruke ulike proxykilder for like forpliktelser i ulike kontrakter gjør sammenligning på porteføljenivå meningsløs. Derfor finnes felles rammeverk som National TOMs og delte enhetskostnadsdatabaser.

## Kilder

- Public Services (Social Value) Act 2012. <https://www.legislation.gov.uk/ukpga/2012/3/contents>
- Cabinet Office, Procurement Policy Note 06/20, «Taking Account of Social Value in the Award of Central Government Contracts.» <https://www.gov.uk/government/publications/procurement-policy-note-0620-taking-account-of-social-value-in-the-award-of-central-government-contracts>
- Social Value Portal, National TOMs Framework. <https://socialvalueportal.com/national-toms/>
