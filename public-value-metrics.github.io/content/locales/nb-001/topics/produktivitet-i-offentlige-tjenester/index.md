# Produktivitet i offentlige tjenester

Produktivitet i offentlige tjenester måler hvor effektivt offentlige utgifter omsettes fra innsatsfaktorer (ansatte, kapital, varer og tjenester) til kvalitetsjusterte leveranser, for tjenester – helse, utdanning, politi, sosial omsorg – som ikke har noen markedspris og derfor ingen inntekt å dele kostnadene på. Det britiske statistikkbyrået Office for National Statistics har publisert denne serien siden midten av 2000-tallet, og den er fortsatt det metodisk mest utviklede nasjonale forsøket på å svare på «blir staten bedre eller dårligere til å omsette penger til offentlige tjenester?»

## Hvorfor det er viktig

I et marked er produktivitet (verdien av leveransen) / (kostnaden for innsatsen), og verdien av leveransen er observerbar fordi noen betaler for den. Et hofteleddskirurgisk inngrep, en skoleplass og en politipatrulje har ingen salgspris, så naivt kan man bare måle *innsatsfaktorer* (hva som er brukt) – noe som frister kommentatorer til å behandle økende offentlige utgifter som automatisk dårlig, siden mer innsats med flat overskriftsaktivitet ser ut som fallende produktivitet. ONS-metodikken, beskrevet i publikasjonene «Sources and Methods» om produktivitet i offentlige tjenester, løser dette ved å konstruere en *leveranseindeks* ut fra aktivitetsvolumer (utførte operasjoner, undervisede elever, etterforskede forbrytelser) og deretter *kvalitetsjustere* denne indeksen – for helse ved å innarbeide overlevelsesrater og ventetider, for utdanning ved å innarbeide måloppnåelse, for politi ved å innarbeide utfall som saksoppklaring – slik at en tjeneste som utfører like mange operasjoner, men oppnår bedre overlevelsesrater, registreres som mer produktiv, ikke bare som dyrere. Hovedfunnet som går igjen i ONS' publikasjoner er nøkternt for sektoren: produktiviteten i britiske offentlige tjenester falt kraftig under covid-19-pandemien og var ifølge ONS' egne publikasjoner fra midten av 2020-årene fortsatt ikke tilbake på 2019-nivå i flere delsektorer, blant dem helsevesenet, selv om utgiftene økte – et gap som gjør «mer finansiering» og «mer produktivitet» til to helt atskilte spørsmål.

## Regnestykket

```
Leveranseindeks (volum) = Σ (aktivitet_i × relativ enhetskostnadsvekt_i), basisårsvektet
                          over alle tjenesteaktiviteter (f.eks. hofteoperasjoner, kataraktoperasjoner,
                          fastlegekonsultasjoner), analogt med en Laspeyres/Paasche-volumindeks

Kvalitetsjustering      = leveranseindeks × kvalitetsjusteringsfaktor
                          (f.eks. innarbeide en endring i overlevelsesrater, ventetider,
                          måloppnåelse eller tilbakefall som en multiplikator på rått volum)

Innsatsindeks           = Σ (arbeidstimer × arbeidskostnadsvekt) + (kostnad for varer/tjenester,
                          deflatert) + (kapitalslit)

Vekst i total faktorproduktivitet = % endring i kvalitetsjustert leveranseindeks
                                    − % endring i innsatsindeks
```

## Utregnet eksempel

**Illustrativ beregning av produktivitet i akuttsektoren i NHS** (strukturen følger ONS-metodikken):

```
År 1: leveransevolumindeks = 100,0 (basisår), innsatsindeks = 100,0
      → produktivitetsindeks = 100,0

År 2: aktivitetsvolumet stiger 3,0 % (flere operasjoner, flere timer)
      men gjennomsnittlig ventetid forverres, noe som gir et
      kvalitetsjusteringsfradrag på −1,0 %
      Kvalitetsjustert leveranseindeks = 100 × 1,030 × 0,990 = 101,97

      Innsatsen stiger: antall ansatte +4,0 %, andre kostnader (deflatert) +1,5 %,
      vektet innsatsindeks = 100 × 1,032 = 103,2

Produktivitetsvekst = (101,97 / 100 − 1) − (103,2 / 100 − 1)
                    = 1,97 % − 3,2 % = −1,23 prosentpoeng

Tolkning: aktiviteten økte, men innsatsen økte raskere og kvaliteten falt
litt, så produktiviteten — leveranse per enhet innsats — falt selv om
«mer behandling ble levert».
```

Dette er nøyaktig det mønsteret ONS-publikasjoner gjentatte ganger har rapportert for deler av NHS etter pandemien: økende utgifter og økende rå aktivitet som sameksisterer med fallende målt produktivitet når både kvalitetsjustering og innsatsvekst er tatt med.

## Sammenheng med programvareutvikling

Produktivitet i offentlige tjenester er den befolkningsnivåbaserte parallellen til debattene om utviklingsproduktivitet (levert antall storypoeng versus [DORA-målinger](../dora-målinger-for-offentlig-verdi/) versus [flytmålinger](../flytmål-i-offentlig-leveranse/)): rå gjennomstrømning uten kvalitetsjustering er like villedende på et sykehus som «antall kodelinjer levert» er på et programvareteam. Team som bygger datapipelines for ytelse for departementer bør behandle kvalitetsjustering som et førsteklasses, versjonert transformasjonstrinn, ikke en fotnote – fordi ONS' egen troverdighet hviler på at justeringen er åpen, reproduserbar og revidert etter hvert som bedre kvalitetsdata kommer (ONS reviderer tidligere års produktivitetsanslag etter hvert som underliggende kvalitetsdata – f.eks. overlevelsesrater – ferdigstilles, så ethvert nedstrøms system som bruker disse statistikkene må håndtere tilbakedaterte revisjoner, ikke bare legge til nye perioder). Det krysser også direkte [totale eierkostnader](../totalkostnad-for-eierskap-i-offentlig-it/) og [AI-produktivitet i offentlig sektor](../ki-og-produktivitet-i-offentlig-sektor/): et system som øker rått aktivitetsvolum uten å forbedre eller opprettholde kvaliteten, er ikke, etter ONS' egen definisjon, en produktivitetsforbedring.

## Fallgruver

- **Å behandle innsatsvekst som produktivitetsvekst**: mer penger som finansierer flere ansatte gir mer *aktivitet*, ikke mer *produktivitet*, med mindre leveransen per enhet innsats også øker – de to blandes rutinemessig sammen i politisk kommentarstoff.
- **Å se bort fra kvalitetsjustering helt**: en leveranseindeks bygget bare på rå aktivitetstall vil vise «produktivitetsgevinster» av å gjøre mer av noe med lavere verdi eller kvalitet; ONS' kvalitetsjustering finnes nettopp for å fange dette.
- **Å sammenligne produktivitetsindekser på tvers av delsektorer uten samsvarende metodikkversjon**: produktivitet i helse, utdanning og politi er bygget fra ulike aktivitets- og kvalitetsdatakilder med ulike revisjonssykluser – en naiv sammenligning på tvers av sektorer sammenligner uforenlige instrumenter.
- **Å lese ett enkelt års produktivitetsfall som en varig trend**: produktivitetstall fra pandemien og tiden etter har vist betydelig svingning fra år til år etter hvert som kvalitetsdata (f.eks. ventelister, gjenopptak av elektiv behandling) selv har skiftet; ONS advarer konsekvent mot å overtolke endringer i enkeltår.

## Kilder

- Office for National Statistics, "Public Service Productivity" series.
  <https://www.ons.gov.uk/economy/economicoutputandproductivity/publicservicesproductivity>
- Office for National Statistics, "Public Service Productivity: Total, UK — Sources and Methods."
  <https://www.ons.gov.uk/economy/economicoutputandproductivity/publicservicesproductivity>
