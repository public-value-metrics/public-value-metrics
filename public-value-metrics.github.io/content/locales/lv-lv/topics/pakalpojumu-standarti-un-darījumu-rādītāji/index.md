# Pakalpojumu standarti un darījumu rādītāji

GOV.UK Service Standard ir Apvienotās Karalistes valdības 14 punktu kontrolsaraksts publiska digitāla
pakalpojuma izveidei un darbināšanai, un tam līdzi nāk neliela, obligāta kvantitatīvo darījumu rādītāju
kopa — izmaksas uz darījumu, pabeigšanas līmenis, digitālā pieņemšana un lietotāju apmierinātība —, kas
komandām jāpublicē par katru darbojošos centrālās valdības pakalpojumu. Kopā standarts un rādītāji ir
plašāko sabiedriskās vērtības un KPI ietvaru šajā repozitorijā operatīvā, ikdienas specializācija, tieši
mērķēta uz programmatūras piegādes komandām.

## Kāpēc tas ir svarīgi

Service Standard, ko uztur GOV.UK pakalpojumu rokasgrāmata, prasa, lai katrā valdības digitālā pakalpojuma
laika punkta novērtējumā (alfa, beta, darbojošais) tiktu pierādīts — starp 14 punktiem —, ka komanda
izprot lietotāju vajadzības, strādā daudznozaru komandā, bieži iterē un uzlabo un *izvērtē rīkus, sistēmas
un darba veidus*. Vēsturiski līdzās tam pastāvēja publiska Performance Platform, kurā katrs darbojošais
pakalpojums atklāti publicēja savus darījumu datus; šī platforma kopš tā laika ir slēgta, bet pamatā esošais
pienākums mērīt un publicēt šos četrus pamatrādītājus saglabājas caur pakalpojumu rokasgrāmatas "measuring
success" norādījumiem. Iemesls, kāpēc tas atšķiras no vispārīga programmatūras KPI paneļa, ir tāds, ka šie
rādītāji tika skaidri izstrādāti kā viens saistīts ekonomiskais modelis, nevis četri neatkarīgi vērtējumi:
viss digitālās valdības ietaupījumu pamatojums — Government Digital Service Digital Efficiency Report
konstatēja, ka digitāli darījumi ir aptuveni 20 reižu lētāki nekā pa tālruni un aptuveni 50 reižu lētāki
nekā klātienē salīdzināmiem pašvaldību pakalpojumiem — īstenojas tikai tad, ja pabeigšanas līmenis paliek
augsts un digitālā pieņemšana patiešām pieaug, nevis tikai pievieno lētu kanālu līdzās nemainītam dārgajam.

## Matemātika

```
Izmaksas uz darījumu = pakalpojuma kopējās darbināšanas izmaksas / pabeigto darījumu skaits
Pabeigšanas līmenis   = pabeigtie darījumi / sāktie darījumi × 100
Digitālā pieņemšana   = digitālā kanāla darījumi / visu kanālu darījumi × 100
Lietotāju apmierinātība = % apmierināti + ļoti apmierināti, pakalpojuma 5 punktu aptaujā

Kanālu nobīdes ietaupījums = darījumu apjoms × pieņemšanas nobīde × (izmaksas uz darījumu
                        vecajā kanālā − izmaksas uz darījumu digitāli)

Kļūmes pieprasījuma izmaksas = (1 − pabeigšanas līmenis) × digitāli mēģinātie darījumi ×
                        rezerves kanāla izmaksas, ko šie lietotāji tad izmanto
```

## Aprēķina piemērs

**Ilustratīvs centrālās valdības licences atjaunošanas pakalpojums**, 2 miljoni darījumu gadā, pašlaik
65 % pa tālruni (£3,00/darījums) un 35 % digitāli (£0,30/darījums), pabeigšanas līmenis 80 %. Pārveide
pēc 14 punktu Service Standard paaugstina digitālo pieņemšanu līdz 60 % un pabeigšanu līdz 92 %:

```
Pieņemšanas nobīdes ietaupījums = 2 000 000 × 0,25 × (3,00 − 0,30) = £1 350 000/gadā

Kļūmes pieprasījuma izmaksas, pirms:
  2 000 000 × 0,35 × (1 − 0,80) × £3,00 = £420 000/gadā (pamestie atgriežas pie tālruņa)

Kļūmes pieprasījuma izmaksas, pēc:
  2 000 000 × 0,60 × (1 − 0,92) × £3,00 = £288 000/gadā

Neto kļūmes pieprasījuma ietaupījums = £420 000 − £288 000 = £132 000/gadā

Kopējais gada ietaupījums ≈ £1 350 000 + £132 000 = £1 482 000/gadā
```

Aprēķins skaidri parāda, kāpēc pabeigšanas līmenis nav otršķirīgs rādītājs: bez uzlabojuma no 80 % uz 92 %
pieņemšanas nobīdes ietaupījums daļēji tiktu atņemts ar kļūmes pieprasījumu, kas apvīlušos digitālos
lietotājus novirza tieši atpakaļ uz dārgo tālruņa kanālu.

## Saikne ar programmatūras inženieriju

Šie četri rādītāji ir darbojošs izmaksu un seku paneļa piemērs: viens izmaksu rādītājs, turēts atsevišķi no
trim rezultātu/kvalitātes rādītājiem un apzināti nekad nesabrukts vienā vērtējumā — tā pati disciplīna,
par ko argumentēts [publiskā sektora KPI](../publiskā-sektora-kpi/). Inženieriem tas sadalās konkrētā,
piešķiramā darbā: pabeigšanas līmenis ir piltuves instrumentēšanas problēma, un katrs pamešanas punkts
ceļojumā principā ir atrodams un labojams; izmaksas uz darījumu prasa īstu vienības izmaksu uzskaiti,
ieskaitot ar personāla palīdzību un papīra kanāla izmaksas, ne tikai mākoņa hostinga izdevumus (skatiet
[izmaksas uz darījumu](../izmaksas-uz-darījumu/) un
[kopējās īpašumtiesību izmaksas valdības IT](../kopējās-piederības-izmaksas-valsts-it/)); un digitālā
pieņemšana ir taisnīguma rādītājs efektivitātes tērpā — iedzīvotāji, kas nevar vai negrib mainīt kanālu, ir
nesamērīgi vecāki, ar invaliditāti vai digitāli atstumti, tāpēc agresīva kanālu slēgšana pārvērš "ietaupījumu"
piekļuves kaitējumā (skatiet [digitālā iekļaušana](../digitālā-iekļaušana/) un
[kanālu nobīdes ietaupījumi](../kanālu-pārslēgšanas-ietaupījumi/)). Pats 14 punktu standarts ir procesa specifikācija
aiz šiem skaitļiem — pilnu standartu skatiet [digitālā pakalpojuma standarts](../digitālo-pakalpojumu-standarts/),
bet to, kā apmierinātības skaitlis šeit saistās ar plašāku uzticības mērīšanu, —
[iedzīvotāju apmierinātības rādītāji](../iedzīvotāju-apmierinātības-rādītāji/).

## Biežākās kļūdas

- **Pieņemšana, kas iegūta, slēdzot alternatīvo kanālu**: tālruņa līnijas slēgšana aritmētiski paaugstina
  digitālās pieņemšanas procentu, vienlaikus nometot kļūmes pieprasījumu uz jebkuru atlikušo kanālu (bieži
  dārgāku atbalstītā digitālā vai klātienes ceļu); vienmēr mēriet visas sistēmas izmaksas, nevis tikai attiecību.
- **Pabeigšanas līmeņa mērīšana no piltuves otrā soļa**: "sākto" skaita sākšana pēc pirmā īstā atkrišanas
  punkta glaimo pabeigšanas līmenim un slēpj lielāko labojamo zaudējumu.
- **Izmaksas uz darījumu bez atbalstītā digitālā atbalsta**: tikai digitālā vienības izmaksa, kas ignorē
  personāla laiku, kas pavadīts, palīdzot lietotājiem, kuri nevar apkalpoties paši, nenovērtē kanāla
  patiesās izmaksas.
- **Rādītāju publicēšana bez kopīgas definīcijas starp pakalpojumiem**: "darījums" un "pabeigts" nozīmē
  dažādas lietas dažādās pakalpojumu komandās, ja vien definīcijas nav standartizētas un versionētas, padarot
  starppakalpojumu salīdzinājumu neuzticamu.

## Avoti

- GOV.UK Service Manual, "The Service Standard." <https://www.gov.uk/service-manual/service-standard>
- GOV.UK Service Manual, "Measuring Success — Data You Must Publish."
  <https://www.gov.uk/service-manual/measuring-success/data-you-must-publish>
- GOV.UK, "Digital Efficiency Report."
  <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
