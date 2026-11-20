# Sosial avkastning på investering (SROI)

Sosial avkastning på investering (SROI) er et rammeverk for å måle, monetisere og regnskapsføre et bredt verdibegrep – sosialt, miljømessig og økonomisk – og uttrykke det som et forhold til ressursene som er investert, for eksempel «£1,44 i samfunnsverdi for hvert £1 investert». Det ble utformet for å utvide den finansielle regnskapslogikken til utfall som markeder ikke priser, uten å miste regnskapets disiplin: hvert tall i en SROI må kunne spores til et utfall definert av interessentene, et evidensgrunnlag og en eksplisitt justering for hva som ville ha skjedd uansett.

## Hvorfor det er viktig

SROI forvaltes av Social Value UK og Social Value International, etterfølgerne til SROI Network, hvis «A Guide to Social Return on Investment» (2012) fortsatt er referansemetodikken. Rammeverket bygger på sju prinsipper – involver interessenter, forstå hva som endrer seg, verdsett det som betyr noe, ta bare med det som er vesentlig, ikke overdriv, vær åpen og verifiser resultatet – og det er prinsipp fem, «ikke overdriv», som de fleste SROI-rapporter i praksis bryter. Et forhold som er laget ved å hoppe over justeringer for dødvekt og attribusjon er ikke en SROI; det er et markedsføringstall i en SROIs klær. Programvareutviklere som bygger rapporteringsverktøy for veldedige organisasjoner, sosiale virksomheter eller bestillere må kjenne forskjellen, fordi verktøyet enten vil håndheve disiplinen eller gjøre det lett å hoppe over den.

## Regnestykket

SROI avhenger av en [endringsteori](../endringsteori/) for å identifisere hvilke utfall som er omfattet, og uttrykker dem med den samme ansvarskjeden som en [logikkmodell](../logisk-modell/):

```
SROI-forhold = Nåverdi av utfall / Verdi av innsatsfaktorer

Fremgangsmåte:
 1. Fastsett omfang og identifiser interessentene hvis utfall skal måles
 2. Kartlegg utfall (en endringsteori, dokumentert sammen med interessentene, ikke antatt)
 3. Dokumenter utfallene og verdsett dem med finansielle proxyer
 4. Fastslå effekt: bruttoverdi − dødvekt − attribusjon − fortrengning, deretter anvend avtrapping
 5. Beregn SROI: nåverdi av effekt ÷ verdi av innsatsfaktorer
 6. Rapporter, bruk og forankre – forholdet er et kommunikasjonsverktøy, ikke sluttpunktet
```

Dødvekt, attribusjon og fortrengning er behandlet i [addisjonalitet og dødvekt](../addisjonalitet-og-dødvekt/) og [fortrengning og attribusjon](../fortrengning-og-attribusjon/). Alle tre finnes for å isolere den reelle [kontrafaktiske](../kontrafaktisk-analyse/) effekten fra bruttoutfallet.

## Utregnet eksempel

**Sysselsettingsprogram i en lokal myndighet**: årlig innsatskostnad £250 000. Seksti deltakere går over i varig arbeid. En finansiell proxy for dette utfallet (velværeløft, redusert avhengighet av trygd og skatteinntekter samlet) er £8 500 per person for første år – se [enhetskostnadsdatabaser](../enhetskostnadsdatabaser/) for hvor slike proxyer kommer fra.

- Verdi av bruttoutfall: 60 × £8 500 = £510 000
- Fratrukket dødvekt (40 % ville trolig funnet arbeid uten programmet): £510 000 × 0,60 = £306 000
- Fratrukket attribusjon (30 % av den gjenværende endringen skyldes andre etaters støtte): £306 000 × 0,70 = £214 200
- Utfall år 2 med 30 % avtrapping: £214 200 × 0,70 = £149 940, diskontert med 3,5 %/år (se [samfunnets diskonteringsrate](../samfunnets-diskonteringsrate/)): £149 940 ÷ 1,035 = £144 870
- Total nåverdi av effekt: £214 200 + £144 870 = £359 070
- **SROI-forhold: £359 070 ÷ £250 000 = 1,44**, rapportert som «£1,44 i samfunnsverdi for hvert £1 investert»

**Veldedig organisasjon**: en besøksvenntjeneste til £60 000 reduserer ensomhet for 80 eldre, verdsatt med en proxy på £1 100 per person per år. Bruttoverdi £88 000. Etter 35 % dødvekt og 15 % attribusjon er nettoeffekten £88 000 × 0,65 × 0,85 = £48 620, et SROI-forhold på 0,81 – under nullpunktet, som er et legitimt og nyttig funn og ikke noe som skal utelates fra rapporten.

## Sammenheng med programvareutvikling

En SROI-kalkulator som lar brukeren legge inn antall utfall og proxyverdier, men som ikke har noe obligatorisk felt for dødvekt, attribusjon eller en koblet endringsteori, vil som standard gi oppblåste forhold, fordi det å utelate justeringer er minste motstands vei. Bygg disiplinen inn i skjemaet: hver utfallsrad bør referere til en interessentgruppe, en dokumentert mengde, en finansiell proxy med kilde og obligatoriske felt for dødvekt og attribusjon. Se [utfall mot leveranser](../utfall-versus-leveranser/) for skillet som SROI-kartleggingen av utfall hviler på, og [logikkmodell](../logisk-modell/) for kjeden verktøyet bør speile i datamodellen sin.

## Fallgruver

- **Å hoppe over dødvekt og attribusjon.** Hovedforholdet uten disse justeringene er et brutto-tall, ikke et tall for nettoeffekt, og Social Value UKs prinsipper krever eksplisitt begge deler.
- **Å sammenligne forhold på tvers av organisasjoner.** Et SROI-forhold avhenger av omfang og proxyvalg gjort fra sak til sak. Å behandle et forhold på 4:1 fra én rapport som «bedre» enn 2:1 fra en annen overser at forutsetningene ikke er standardisert slik et finansielt regnskapsforhold er.
- **Dobbelttelling av overlappende proxyer.** Å stable en proxy for «redusert ensomhet» oppå en proxy for «bedre psykisk velvære» for de samme mottakerne kan verdsette én underliggende endring to ganger.
- **Å hoppe over medvirkning fra interessentene.** Prinsipp én krever at utfall defineres sammen med menneskene som opplever dem, ikke antas av analytikeren som bygger modellen.

## Kilder

- Social Value UK / Social Value International. <https://socialvalueuk.org/>
- The SROI Network, «A Guide to Social Return on Investment» (2012).
- Social Value International, «The Principles of Social Value.» <https://www.socialvalueint.org/principles>
