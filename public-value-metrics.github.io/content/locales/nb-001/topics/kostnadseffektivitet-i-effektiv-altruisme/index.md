# Kostnadseffektivitet i effektiv altruisme

Resonnering om kostnadseffektivitet i effektiv altruisme (EA) rangerer veldedige tiltak etter hvor mye godt de gir – oftest uttrykt som reddede liv eller vunnet helse per brukt dollar – og leder penger til det tiltaket som kjøper mest godt i marginen. GiveWell er feltets mest innflytelsesrike utøver: Organisasjonen publiserer eksplisitte, oppdaterte anslag for kostnad per reddet liv og kostnad per utfall for en kort liste av «toppvelgjørenhetsorganisasjoner», og anbefaler givere å gi til den som for øyeblikket har rom for mer finansiering til den beste raten.

## Hvorfor det er viktig

GiveWell oppgir kostnadseffektivitet som det ledende kriteriet i sin publiserte metodikk: Den leter etter evidensbaserte tiltak, anslår kostnadseffektiviteten deres i en felles enhet og rangerer på tvers av helt urelaterte saksområder – myggnett mot malaria, vitamin A-tilskudd, kontantoverføringer, insentivbetalinger for vaksinering – langs denne ene aksen. Dette er en direkte import av resonnering i QALY/DALY-stil fra helseøkonomien til filantropien: Slik et helsevesen spør «hvor mange QALY per pund i marginen», spør GiveWell «hvor mange liv, eller leveår, per dollar i marginen», og behandler saksområder som utskiftbare når de er omregnet til den felles enheten. Se [kostnadseffektivitetsanalyse i offentlig forvaltning](../kostnadseffektivitetsanalyse-i-offentlig-forvaltning/) for fetteren til dette resonneringsrammeverket i offentlig sektor.

Det mest siterte GiveWell-tallet gjelder Against Malaria Foundation (AMF), som distribuerer insektmiddelbehandlede myggnett. I GiveWells publiserte regneeksempel (hentet fra finansieringsdata for 2020) finansierte omtrent $4 500 nok nett til å avverge ett dødsfall, etter justering for ufullstendig bruk av nettene, bakgrunnsdødelighet uten nett og justering for funging – muligheten for at AMF ville ha fått noe av finansieringen fra andre givere uansett. GiveWell er tydelig på at tallet endrer seg over tid og mellom områder etter hvert som malariaforekomst, nettkostnader og finansieringsgap endrer seg, og at kostnaden for å redde et liv vanligvis forventes å stige over tid fordi de billigste mulighetene tas først. Det er en illustrasjon av metoden, ikke en fast pris.

## Regnestykket

```
Kostnadseffektivitet = kostnad ved tiltaket / enheter godt som er produsert
                    (f.eks. $ per reddet liv, $ per avverget DALY, $ per QALY)

GiveWells kjede for et myggnettprogram, illustrerende:
  $ per innkjøpt og levert nett
    ÷ andel nett som faktisk brukes
    ÷ personer beskyttet per nett
    × bakgrunnsdødelighet per år uten nett
    × reduksjon i dødelighet som kan tilskrives bruk av nett (fra RCT-dokumentasjon)
    × år med beskyttelse per nett
    ÷ justering for funging (penger som fortrenger andre givere)
  = $ per reddet liv (netto etter kontrafaktiske finansieringseffekter)
```

Denne kjeden er viktig fordi hvert ledd er et sted der anslag på kostnadseffektivitet ofte går galt – se fallgruvene nedenfor – og fordi den gjør det eksplisitt at «kostnad per reddet liv» aldri er en rå observert pris, men et modellert anslag bygget av flere hver for seg usikre inndata.

## Utregnet eksempel

To hypotetiske tiltak, begge evidensbaserte, som konkurrerer om de samme marginale £100 000:

- **Myggnett (AMF-stil)**: omtrent $4 500 per reddet liv i GiveWells publiserte regneeksempel basert på data fra 2020, dvs. svært grovt 20 reddede liv per £100 000 avhengig av valutakurs og år.
- **Avmaskingsprogram**: ingen plausibel dødelighetsgevinst i det hele tatt, men sterk dokumentasjon for langsiktige inntektsgevinster av avmasking i barndommen. GiveWell verdsetter det i inntektsgevinst, ikke reddede liv, noe som gjør det vanskelig å sammenligne direkte med myggnett uten en felles enhet. GiveWell bruker et eksplisitt rammeverk for «moralske vekter» for å omregne begge til én intern enhet for rangering.

EA-metodens disiplin er å tvinge denne sammenligningen frem i åpent lys i stedet for å finansiere begge fordi begge «høres bra ut». Se [sosial avkastning på investering](../sosial-avkastning-på-investering/) for den tilsvarende tvangsmekanismen britiske sosiale virksomheter og kommunale bestillere bruker, som stiller det samme spørsmålet – hva er beste avkastning per pund – i et pengeverdiuttrykk i stedet for et liv/DALY-uttrykk.

## Sammenheng med programvareutvikling

Utviklere som bygger giverplattformer, verktøy for tilskuddsmatching eller effektdashbord for EA-orienterte finansiører (Open Philanthropy, GiveWell selv, plattformer for effektiv giving som Giving What We Can) må fremstille kostnadseffektivitetsanslag som intervaller med oppgitte forutsetninger, ikke enkelttall – den underliggende modellen har flere multiplikative, usikre inndata, og å slå dette sammen til ett tall på et dashbord feilfremstiller den sikkerheten GiveWell selv oppgir. Versjonér hvert anslag etter publiseringsdato. GiveWell reviderer tallene sine, noen ganger betydelig, når ny RCT-dokumentasjon eller data om finansieringsgap kommer, og en plattform som mellomlagrer et gammelt tall blir i det stille feil.

## Fallgruver

- **Å behandle et kostnadseffektivitetsanslag som en fast pris.** Det er et modellresultat med flere usikre multiplikative inndata (bruksrater, bakgrunnsdødelighet, fungingjustering) – oppgi dato og versjon.
- **Å overse funging/fortrengning.** Å finansiere en organisasjon som uansett ville ha fått pengene fra en annen giver, kjøper mindre kontrafaktisk godt enn hovedtallet antyder – se [addisjonalitet og dødvekt](../addisjonalitet-og-dødvekt/) og [fortrengning og attribusjon](../fortrengning-og-attribusjon/).
- **Å sammenligne på tvers av uforenlige enheter uten omregning.** «Reddede liv» og «inntekt vunnet» er ikke direkte sammenlignbare uten et eksplisitt rammeverk for moralske vekter – å presentere dem side om side som om de var det, er en kategorifeil.
- **Tunnelsyn på saksområde.** Å rangere bare innenfor ett saksområde (f.eks. bare organisasjoner for global helse) og kalle vinneren «den mest kostnadseffektive veldedige organisasjonen» overdriver påstanden. GiveWells rangering på tvers av saksområder er bevisst smal (global helse og velferd), ikke universell.

## Kilder

- GiveWell, "Our criteria." <https://www.givewell.org/how-we-work/our-criteria>
- GiveWell, "How Much Does It Cost to Save a Life?" (February 2024 version). <https://www.givewell.org/how-much-does-it-cost-to-save-a-life/february-2024-version>
- GiveWell, Against Malaria Foundation review. <https://www.givewell.org/charities/amf>
- Giving What We Can, on cost-effectiveness across causes. <https://www.givingwhatwecan.org/>
