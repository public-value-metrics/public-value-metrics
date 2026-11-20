# Valdība kā platforma (GaaP)

Valdība kā platforma (Government as a Platform) ir stratēģija, kas paredz kopīgus, atkārtoti izmantojamus komponentus — paziņojumu pakalpojumu, maksājumu pakalpojumu, identitātes pakalpojumu — izveidot vienreiz un centralizēti, lai simtiem atsevišķu valdības pakalpojumu tos izmantotu, nevis katrs veidotu savus. Tā pārformulē publisko digitālo infrastruktūru kā platformu ekonomikas problēmu: vērtība nav kādā vienā integrācijā, bet gan tajā, ka *nākamās* komandas, kas to ievieš, robežizmaksas tuvojas nullei.

## Kāpēc tas ir svarīgi

GDS šo stratēģiju formāli izklāstīja savā 2015. gada publikācijā “Government as a Platform”, argumentējot, ka valdība vienas un tās pašas spējas — maksājumu pieņemšanu, lietotāju paziņošanu, identitātes pārbaudi, adrešu meklēšanu — bija veidojusi atsevišķi pakalpojumā pēc pakalpojuma, katrai nesot savu iepirkuma, drošības novērtējuma un pastāvīgā atbalsta slogu. Alternatīva bija neliels skaits kopīgu platformu, kas vienreiz izveidotas augstā standartā un izmantotas visur: GOV.UK Notify e-pastu, īsziņu un vēstuļu sūtīšanai, GOV.UK Pay tiešsaistes maksājumu pieņemšanai un GOV.UK One Login (iepriekšējās GOV.UK Verify identitātes programmas pēctecis) identitātes pārbaudei. Mērogs, ko šīs platformas sasniegušas, ir skaidrākais pierādījums, ka stratēģija darbojās: GOV.UK Pay ir apstrādājusi vairāk nekā £10 miljardus darījumu aptuveni 1 800 atsevišķos pakalpojumos — un kamēr pirmo £1 miljardu apstrādāja aptuveni četros gados, tagad tik daudz apstrādā aptuveni piecos mēnešos —, bet GOV.UK Notify ir nosūtījusi vairāk nekā 9 miljardus ziņojumu vairāk nekā 1 500 valdības organizāciju vārdā. Katrs no šiem ieviešanas pakalpojumiem izvairījās no sava maksājumu vārtejas vai ziņojumu konveijera veidošanas, drošības nodrošināšanas un uzturēšanas.

## Matemātika

```
Veidošanas izmaksas uz pakalpojumu (bez platformas) = N pakalpojumi × izmaksas,
  lai uzbūvētu, drošības ziņā novērtētu un darbinātu vienu
  maksājumu/paziņojumu/identitātes sistēmu

Platformas izmaksas = fiksētās platformas izveides izmaksas
                    + robežizmaksas uz ieviešošo pakalpojumu (integrācija,
                      konfigurēšana, pastāvīgs platformas komandas atbalsts)

Atkārtota izmantošana atmaksājas, kad:
  platformas izveides izmaksas < N × (izmaksas uz pakalpojumu − robežizmaksas
  integrācijai)

Nobriedušai platformai robežizmaksas uz katru papildu ieviesēju tuvojas
tikai darījuma/ziņojuma maksai — fiksētās izmaksas tiek amortizētas pa
visu valdības īpašumu, nevis vienas ministrijas budžetu, tāpēc GaaP komponentus
parasti finansē centralizēti, nevis iekasē pilnu izmaksu atgūšanu no agrīnajiem ieviesējiem.
```

## Aprēķina piemērs

**Pašvaldība ievieš GOV.UK Pay, nevis veido savu maksājumu vārteju**:

```
Paša veidošanas aplēse:
  PCI-DSS atbilstības darbs + integrācija + pastāvīga uzturēšana
  ≈ £85 000 izveidei + £22 000 gadā uzturēšanai

GOV.UK Pay ieviešana:
  Integrācijas darbs ≈ £12 000 (izstrādātāju laiks)
  Darījumu maksa: valdības un iedzīvotāju karšu maksājumiem parasti
  piemēro nelielu procentu + fiksētu maksu uz darījumu, pašvaldībai
  nav atsevišķa PCI-DSS sloga
  ≈ £12 000 vienreiz, pastāvīgās izmaksas mainīgas pēc apjoma, nevis fiksētas

Pirmā gada ietaupījums ≈ £85 000 − £12 000 = £73 000, pirms
iekļaujot izvairīto £22 000 gadā uzturēšanu un izvairīto atbilstības
risku, kas saistīts ar karšu datu glabāšanu pašvaldības vadītā sistēmā
vispār — šī otrā kategorija ir drošības vērtība, kas aplūkota
public-sector-cybersecurity-value.
```

Pārnesot šos £73 000 uz aptuveni 1 800 pakalpojumiem, kas tagad izmanto GOV.UK Pay, kopējās izvairītās izveides izmaksas valdībā ir simtiem miljonu — platformu ekonomika, nevis kāda atsevišķa integrācija, ir tas, kur patiesībā atrodas stratēģijas vērtība.

## Saikne ar programmatūras inženieriju

Valdība kā platforma ir tiešs arguments [veidot vai pirkt valdībā](../veidot-vai-pirkt-valdībā/): kad pastāv kopīgs, novērtēts, labi vadīts komponents, speciāla ekvivalenta veidošana ir ļoti reti labākā [vērtības par naudu](../vērtība-par-naudu/) izvēle, un tā gandrīz pēc definīcijas neizpilda [digitālo pakalpojumu standarta](../digitālo-pakalpojumu-standarts/) 13. punktu (“izmantot atvērtos standartus, kopējos komponentus un modeļus un sniegt tajos ieguldījumu”). Tā maina arī [kopējo īpašumtiesību izmaksu valdības IT](../kopējās-piederības-izmaksas-valsts-it/) veidolu: platformas ieviešana apmaina lielu kapitāla un uzturēšanas izmaksu pozīciju pret mazāku, ar lietojumu saistītu darbības izmaksu, ko vieglāk prognozēt un vieglāk pārtraukt finansēt, ja pakalpojums tiek likvidēts. Komponentu atvērtai atkārtotai izmantošanai ir radinieks [atvērto datu vērtībā](../atvērto-datu-vērtība/) — abas ir stratēģijas, kas to, ko valdība rada vienreiz, uztver kā kopīgu infrastruktūru, nevis resora aktīvu.

## Biežākās kļūdas

- **Slēpta pārbūve**: komandas klusi veido savu maksājumu vai paziņojumu integrāciju, jo platformas ieviešanas process ir lēnāks nekā darīt pašiem — pārvaldības berzes problēma, nevis tehnoloģiju problēma, un tā klusi graus atkārtotas izmantošanas ekonomiku, no kuras atkarīga visa stratēģija.
- **Platformas komandas nepietiekama finansēšana attiecībā pret tās radīto vērtību**: vērtība uzkrājas patērētāju resoriem, bet izmaksas paliek platformas komandai, radot hronisku nepietiekamu ieguldījumu risku, ja finansējums nav centralizēts un aizsargāts — kopīpašuma traģēdijas variants.
- **Platformas panākumu mērīšana tikai pēc lietojuma**: ieviešanas skaitļi (ieviestie pakalpojumi, nosūtītie ziņojumi) ir apsteidzošs rādītājs, nevis vērtības pierādījums; īstais pārbaudījums ir iepriekš minētais izvairīto izveides izmaksu un izvairītā riska aprēķins.
- **“Platformas” uztvere kā “monolīta” sinonīma**: GaaP komponenti gūst panākumus, jo katrs dara vienu lietu labi ar šauru, stabilu saskarni — nesaistītu spēju apvienošana vienā “platformā” atjauno speciālās veidošanas problēmu citā mērogā.

## Avoti

- Government Digital Service, Government as a Platform. <https://www.gov.uk/government/publications/government-as-a-platform>
- GOV.UK Notify. <https://www.notifications.service.gov.uk/>
- Government Digital Service blog, "GOV.UK Pay at 10: how it started and how it's going". <https://gds.blog.gov.uk/2026/09/02/gov-uk-pay-at-10-how-it-started-and-how-its-going/>
