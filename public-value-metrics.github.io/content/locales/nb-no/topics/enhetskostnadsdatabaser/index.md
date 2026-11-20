# Enhetskostnadsdatabaser

En enhetskostnadsdatabase er et bibliotek av ferdig undersøkte, evidensbaserte finansielle proxyer for sosiale utfall – verdien av å gå fra arbeidsledighet til arbeid, av redusert ensomhet, av et stabilt leieforhold – som lar en praktiker monetisere et utfall uten å bestille skreddersydd verdsettingsforskning hver gang. De finnes slik at en liten veldedig organisasjon som skriver en finansieringssøknad kan anvende den samme strengheten som et ressurssterkt konsulentselskap, ved å gjenbruke en proxy noen andre allerede har utledet og publisert.

## Hvorfor det er viktig

HACTs UK Social Value Bank, utviklet sammen med økonomen Daniel Fujiwara med metoder for verdsetting av velvære, og Global Value Exchange, en åpen, dugnadsbasert database med finansielle proxyer, er de to mest brukte i britisk tredje sektor og offentlig sektor. Begge finnes fordi det underliggende verdsettingsarbeidet – [verdsetting av velvære](../verdsetting-av-velvære/) og [verdsetting med oppgitte preferanser](../verdsetting-med-oppgitte-preferanser/) – er kostbart, metodisk krevende og tregt å gjennomføre fra bunnen for hvert prosjekt. Et delt, publisert proxybibliotek gjør det som ellers ville vært en forskningsøvelse på flere måneder til et oppslag, og det er nettopp derfor de betyr noe for både beregninger av [sosial avkastning på investering](../sosial-avkastning-på-investering/) og tilbudsevalueringer etter [Social Value Act](../loven-om-samfunnsverdi-i-offentlige-tjenester/): uten dem ville streng monetisering vært rimelig bare for organisasjoner store nok til å bestille egne studier.

## Regnestykket

En enhetskostnadsdatabase beregner ikke noe selv; den leverer én inndata til en beregning som gjøres andre steder:

```
Verdi av finansiell proxy = markedspris, ELLER skyggepris, ELLER verdsetting av velvære,
                         ELLER verdi med oppgitte preferanser
                         for en definert enhet utfallsendring
                         (f.eks. «per person som går fra arbeidsledighet til arbeid, per år»)

Anvendt verdi = antall oppnådde utfall × proxyverdi per enhet
```

Se [skyggepriser](../skyggepriser/) for hvordan en proxy konstrueres når det ikke finnes noen markedspris, og [sosial avkastning på investering](../sosial-avkastning-på-investering/) for hvordan den anvendte verdien deretter mater inn i et forhold etter justeringer for dødvekt og attribusjon.

## Utregnet eksempel

**Veldedig organisasjon (SROI for en besøksvenntjeneste)**: en oppføring i en enhetskostnadsdatabase for «redusert ensomhet» gir en illustrativ proxy på £1 100 per person per år. Anvendt på 80 mottakere: 80 × £1 100 = £88 000 i bruttoverdi. Hvis den samme databasen også har en proxy for «bedre psykisk velvære» som bygger på et overlappende velværespørsmål, ville det å stable begge proxyene for de samme 80 personene dobbelttelle deler av den samme underliggende endringen – databasen leverer tallet, men det er analytikerens ansvar å unngå denne overlappingen.

**Lokal myndighet (SROI for en jobbklubb)**: en oppføring i en enhetskostnadsdatabase for «overgang fra arbeidsledighet til varig arbeid» anvendes på 45 deltakere med en illustrativ proxy på £8 500 per person per år: 45 × £8 500 = £382 500 i bruttoverdi, før justeringene for dødvekt og attribusjon som er vist i [sosial avkastning på investering](../sosial-avkastning-på-investering/).

## Sammenheng med programvareutvikling

Team som bygger rapporteringsverktøy for veldedige organisasjoner eller bestillere har nytte av en intern «utfallskatalog» – en tabell som kobler hvert utfall et produkt eller en tjeneste rimelig kan påberope seg til en navngitt proxy, kildedatabasen, publiseringsdatoen og en versjonsidentifikator – slik at ulike team i en organisasjon ikke hver velger litt ulike verdier for det samme utfallet. Å pakke Global Value Exchanges åpne data bak en oppslagstjeneste, med kilde og dato alltid vist ved siden av tallet, holder proxyen etterprøvbar i stedet for et magisk tall gjemt i et regneark. Se [sosial avkastning på investering](../sosial-avkastning-på-investering/) og [Social Value Act](../loven-om-samfunnsverdi-i-offentlige-tjenester/) for de to hovedstedene disse proxyene brukes.

## Fallgruver

- **Å behandle proxyer som presise.** De fleste publiserte proxyer er modellerte gjennomsnitt fra studier av verdsetting av velvære med brede konfidensintervaller. Å oppgi en med pundnøyaktighet overdriver presisjonen forskningen bak faktisk støtter.
- **Dobbelttelling av overlappende proxyer.** Å kombinere proxyer (f.eks. «redusert ensomhet» og «bedre psykisk velvære») som er utledet fra overlappende undersøkelseskonstrukter, verdsetter den samme underliggende endringen to ganger.
- **Å bruke en proxy ut av kontekst uten justering.** En proxy kalibrert på én nasjonal befolkning og ett år, anvendt andre steder uten inflasjons- eller kontekstjustering, gir stilltiende feil verdi.
- **Å ikke sjekke opphav.** Global Value Exchange er åpen og dugnadsbasert, så kvaliteten på oppføringene varierer etter bidragsyter. Sjekk den underliggende kilden før du siterer et tall i en finansieringssøknad eller et tilbud i en anskaffelse.

## Kilder

- HACT, «UK Social Value Bank.» <https://hact.org.uk/tools-and-services/uk-social-value-bank/>
- Global Value Exchange. <https://www.globalvaluexchange.org/>
- Fujiwara D., «The Social Impact of Housing Providers» (HACT, 2013) – metodisk grunnlag for UK Social Value Bank.
- Social Value UK, «A Guide to Social Return on Investment», avsnittet om finansielle proxyer.
