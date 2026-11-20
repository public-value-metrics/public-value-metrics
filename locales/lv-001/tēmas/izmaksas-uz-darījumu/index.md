# Izmaksas uz darījumu

Izmaksas uz darījumu ir valdības digitālā pakalpojuma galvenais vienības ekonomikas rādītājs: kopējās kanāla nodrošināšanas izmaksas, dalītas ar caur to pabeigto darījumu skaitu. Tas bija vecās GOV.UK Performance Platform flagmaņa skaitlis, un tieši šis skaitlis finansēja desmit gadus „digitāli pēc noklusējuma" ieguldījumu — tāpēc tas ir arī rādītājs, ar kuru visvieglāk manipulēt.

## Kāpēc tas ir svarīgi

Cabinet Office 2012. gada Digital Efficiency Report kanālu izmaksu salīdzinājumu formulēja tā, ka tas iesēdās atmiņā: digitālie darījumi izrādījās aptuveni 20 reižu lētāki nekā pa tālruni un aptuveni 50 reižu lētāki nekā klātienē, ar ilustratīviem pašvaldību skaitļiem aptuveni £0,15 par tīmekļa darījumu pret £2,83 pa tālruni un £8,62 klātienē. Šis vienīgais salīdzinājums kļuva par pamatojumu 25 paraugpakalpojumu pārveidošanai, kas nosaukti Government Digital Strategy, un katram departamenta biznesa gadījumam, kas kopš tā laika citējis kanālu pārslēgšanas ietaupījumus. Skaitlis ir patiesi noderīgs kā lieluma kārtas signāls, taču attiecība pilnībā atkarīga no tā, kas tiek skaitīts katrā pusē: godīgas tālruņa kanāla izmaksas ietver zvanu centra darbiniekus, telefonijas līgumu, apmācību un telpas; godīgas digitālās izmaksas ietver hostingu, pastāvīgās produkta komandas algas, atbalsta galda laiku neveiksmīgiem ceļojumiem un [digital-service-standard](../digitālo-pakalpojumu-standarts/) 5. punktā prasīto ar palīdzību digitālo kanālu. Izņemiet no digitālās puses pietiekami daudz, un jebkurš pakalpojums izskatās lēts.

## Matemātika

```
Izmaksas uz darījumu = kopējās piešķirtās kanāla izmaksas / pabeigtie darījumi

Kopējām piešķirtajām kanāla izmaksām jāietver:
  + hostings un infrastruktūra
  + produkta/inženieru/atbalsta komandas izmaksas (amortizētas)
  + satura un pakalpojuma dizaina izmaksas (amortizētas)
  + ar palīdzību digitālā / pieejamības atbalsta izmaksas
  + kļūmju pieprasījuma izmaksas (lietotāji, kas neveiksmējas digitāli un atgriežas pie tālruņa)
  − vienreizējās izveides izmaksas amortizē pār paredzamo pakalpojuma mūžu,
    nevis pilnībā ieraksta pirmajā gadā

Biežākais grāmatvedības triks:
  „Robežizmaksas uz darījumu" (tikai hostings, kad jau uzbūvēts) tiek minētas
  tā, it kā tās būtu „vidējās izmaksas uz darījumu" (kopējās izmaksas, ieskaitot
  komandu, kas turpina to veidot un darbināt). Abas var atšķirties
  10 reizes vai vairāk pakalpojumam ar lielu, aktīvu piegādes komandu.
```

## Aprēķina piemērs

**Transportlīdzekļa nodokļa atjaunošanas pakalpojums**: 4 miljoni darījumu gadā.

```
Tikai robežizmaksu skaitlis (triks):
  Tikai hostings + maksājumu apstrāde = £180 000/gadā
  Izmaksas uz darījumu = 180 000 / 4 000 000 = £0,045
  → virsraksta skaitlis, kas minēts biznesa gadījumā

Pilno izmaksu skaitlis (godīgais):
  Hostings + maksājumi                    £180 000
  Produkta/inženieru komanda (8 FTE)      £720 000
  Atbalsta galds (neveiksmīgi/apšaubīti darījumi)  £310 000
  Ar palīdzību digitālā tālruņa līnija    £140 000
  Kopā                                    £1 350 000
  Izmaksas uz darījumu = 1 350 000 / 4 000 000 = £0,3375

Pilno izmaksu skaitlis joprojām ir aptuveni 8 reizes lētāks par £2,83
tālruņa kanāla salīdzinājuma vērtību no Digital Efficiency Report — reāls
un aizstāvams ietaupījums —, bet 7,5 reizes augstāks par saīsinātajā versijā
minēto tikai robežizmaksu skaitli. Abi skaitļi ir „patiesi"; tikai viens ir
salīdzināms ar tālruņa kanāla izmaksām, pret kurām tas tiek likts.
```

## Saikne ar programmatūras inženieriju

Izmaksas uz darījumu ir vieta, kur arhitektūras lēmumi kļūst par finanšu skaitli: pakalpojums, kas tīri automātiski mērogojas un prasa maz manuālas iejaukšanās, laika gaitā samazina šo skaitli; tāds, kas rada lielu atbalsta pieteikumu apjomu no mulsinošiem kļūdu stāvokļiem, to palielina neatkarīgi no hostinga efektivitātes. Tas ir dabisks pavadošais rādītājs [digital-service-standard](../digitālo-pakalpojumu-standarts/) 10. punktam („definē, kā izskatās panākumi, un publicē veiktspējas datus") un [pakalpojumu standarti un darījumu rādītāji](../pakalpojumu-standarti-un-darījumu-rādītāji/), kas izklāsta pilnāku KPI kopu, kurā šis skaitlis atrodas. Tas arī tieši baro [kanālu pārslēgšanas ietaupījumu](../kanālu-pārslēgšanas-ietaupījumi/) aprēķinus, un tas jāsaskaņo ar [kopējām īpašumtiesību izmaksām valdības IT](../kopējās-piederības-izmaksas-valsts-it/), lai platformas un koplietojamo pakalpojumu pieskaitāmās izmaksas netiktu klusi izlaistas.

## Biežākās kļūdas

- **Robežizmaksas, kas pasniegtas kā vidējās izmaksas**: minot tikai hostinga izmaksas, kad pakalpojums uzbūvēts, izlaižot pastāvīgo komandu, kas to uztur, iterē un atbalsta — sk. darba piemēru iepriekš.
- **Ar palīdzību digitālo izmaksu izslēgšana**: kanāls nav „digitāli pēc noklusējuma" atbilstošs, un tā patiesās izmaksas netiek fiksētas, ja tālruņa/papīra rezerves variants, ko prasa [digitālā iekļaušana](../digitālā-iekļaušana/), tiek izmaksāts atsevišķi vai ignorēts.
- **Kļūmju pieprasījuma ignorēšana**: darījumi, kas sākas digitāli un neizdodas, tik un tā radot tālruņa zvanu vai papīra veidlapu, ir digitālā kanāla izmaksas, nevis kanāla, kas noķer kļūmi.
- **Dažādas sarežģītības darījumu salīdzināšana starp kanāliem**: tālruņa zvani nesamērīgi apstrādā grūtos gadījumus (vairāki apgādājamie, kļūdu labošana, neaizsargāti pieteikuma iesniedzēji); vidējo tālruņa izmaksu salīdzināšana ar vidējām digitālajām izmaksām pārspīlē attiecību, ja darījumu sastāvs nav saskaņots.

## Avoti

- Cabinet Office, Digital Efficiency Report (2012). <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- GOV.UK Service Manual, service standard, point 10: define what success looks like. <https://www.gov.uk/service-manual/service-standard/point-10-define-success-publish-performance-data>
- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
