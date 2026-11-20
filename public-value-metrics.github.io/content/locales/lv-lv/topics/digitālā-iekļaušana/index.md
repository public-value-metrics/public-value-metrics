# Digitālā iekļaušana

Digitālā iekļaušana ir disciplīna, kas nodrošina, ka „digitāli pēc noklusējuma" nekļūst par „tikai digitāli" — ka publiskie pakalpojumi, kas veidoti ap lētāko kanālu, joprojām darbojas iedzīvotājiem, kuri nevar vai negrib to lietot bez palīdzības. GDS izdomāja konkrēto piegādes mehānismu „ar palīdzību digitālais" (assisted digital) kā obligātu prasību katram valdības digitālajam pakalpojumam, nevis neobligātu papildinājumu.

## Kāpēc tas ir svarīgi

2012. gada Government Digital Strategy izvirzīja mērķi skaidri: digitālajiem pakalpojumiem jābūt veidotiem digitāli pēc noklusējuma, taču pati stratēģija atzina, ka aptuveni 10 % Apvienotās Karalistes pieaugušo tos nevarēs lietot bez palīdzības, un uzlika departamentiem pienākumu nodrošināt ar palīdzību digitālo atbalstu — cilvēka starpniecību, pa tālruni, klātienē vai caur starpnieku — kā daļu no pakalpojuma, nevis atsevišķu rezerves risinājumu, kas pievienots vēlāk. Šis pienākums tagad ir [digital-service-standard](../digitālo-pakalpojumu-standarts/) 5. punkts „pārliecinies, ka pakalpojumu var lietot ikviens". Turpmākās atstumtības apmēru izseko Lloyds Banking Group ikgadējais UK Consumer Digital Index: 2024. gada izdevums konstatēja, ka aptuveni 1,6 miljoni cilvēku Apvienotajā Karalistē joprojām ir bezsaistē un ka šī grupa ievērojami novirzās uz cilvēkiem vecumā 70–79, tiem, kas pelna zem £35 000, un pensionāriem vai bezdarbniekiem — tieši to populāciju, kas visticamāk ir atkarīga no pārveidotajiem publiskajiem pakalpojumiem. Tas pats ziņojums konstatēja, ka tikai 48 % Apvienotās Karalistes darbaspēka spēj izpildīt visus 20 uzdevumus Essential Digital Skills ietvarā, kas nozīmē, ka atstumtība nav binārs savienojums, bet prasmju, pārliecības un uzticības spektrs, ko vienkāršs „ir platjosla" rādītājs pilnībā palaiž garām.

## Matemātika

Digitālā iekļaušana ir ietvars un vienlīdzības pārbaude, nevis viena formula, bet tā savienojas ar kvantitatīvu vērtības novērtējumu caur [distributional-weighting](../sadales-svēršana/):

```
Naivā kanālu pārslēgšanas vērtība:
  vērtība = pārslēgtais apjoms × (izmaksas_vecais − izmaksas_digitālais)     [sk. channel-shift-savings]

Ar iekļaušanu koriģētā vērtība:
  vērtība = (pārslēgtais apjoms × nesvērtais ietaupījums)
          − (izslēgtie lietotāji × ar palīdzību digitālā nodrošinājuma izmaksas)
          − (sadales svara korekcija kaitējumam izslēgtām
             grupām, kas zaudē piekļuvi vai saskaras ar pasliktinātu pakalpojuma kvalitāti)

Ar palīdzību digitālais nav kļūmes atlikušās izmaksas — tas ir projektēts
kanāls ar savām [izmaksām uz darījumu](../izmaksas-uz-darījumu/),
parasti uz darījumu daudz augstākām nekā pašapkalpošanās digitālajam, bet
tomēr parasti lētākām nekā mantotais kanāls, ko tas daļēji aizstāj.
```

## Aprēķina piemērs

**Universal Credit veida nacionālais pabalstu pakalpojums**: 2,5 miljoni pieteikumu gadā, kuriem aplēsts, ka ar palīdzību digitālais atbalsts vajadzīgs 10 % pieteikuma iesniedzēju saskaņā ar Government Digital Strategy plānošanas pieņēmumu.

```
Izslēgtā/ar palīdzību digitālā kohorta = 2 500 000 × 10 % = 250 000 pieteikumu/gadā

Ar palīdzību digitālā kanāla izmaksas (tālruņa + klātienes atbalsts,
nokomplektēts, lai apstrādātu neaizsargātību un sarežģītību) ≈ £9,50/pieteikumam
  = 250 000 × £9,50 = £2 375 000/gadā

Pašapkalpošanās digitālās izmaksas pārējiem 90 % ≈ £0,40/pieteikumam
  = 2 250 000 × £0,40 = £900 000/gadā

Jauktās izmaksas uz darījumu = (2 375 000 + 900 000) / 2 500 000
  = £1,31/pieteikumam

Dizains, kas izlaiž ar palīdzību digitālo, lai sasniegtu zemāku virsraksta
izmaksu uz darījumu (piem., £0,40 jauktas, ignorējot 250 000
izslēgtos pieteikuma iesniedzējus), nenovērš šīs £2,375 milj. izmaksas — tas
pārvērš tās neizmantotās tiesībās, apelācijās un turpmākajā
krīzes pakalpojumu pieprasījumā, kas nonāk pavisam citā budžetā.
```

## Saikne ar programmatūras inženieriju

Ar palīdzību digitālais ir projektēts kanāls, kas nozīmē, ka tam ir saskarnes, SLA un instrumentācija kā jebkuram citam: uz tālruni balstīts darbinieka rīks, starpnieka portāls Citizens Advice vai pašvaldībai, vai klātienes kioska plūsma. Uzskatīt to par piedēkli — tālruņa numurs sīkajā drukā, nevis kanāls, kas apsvērts jau atklāšanas posmā — ir visbiežākais veids, kā pakalpojumi izgāžas [digital-service-standard](../digitālo-pakalpojumu-standarts/) 5. punktā novērtējumā. Digitālā iekļaušana ir vienlīdzības objektīvs katrai citai šīs grupas tēmai: tā ierobežo, cik agresīvi var realizēt [kanālu pārslēgšanas ietaupījumus](../kanālu-pārslēgšanas-ietaupījumi/), tā ir pozīcija, kas godīgi jāiekļauj [izmaksās uz darījumu](../izmaksas-uz-darījumu/), un tā ir tiešs [distributional-weighting](../sadales-svēršana/) pielietojums digitālo pakalpojumu kontekstā — ietaupījums, kas nesamērīgi krīt uz cilvēkiem, kuri jau ir digitāli un ekonomiski atstumti, jāsver uz leju, nevis jāuzskata par līdzvērtīgu ietaupījumam, kas vienmērīgi izkliedēts visā populācijā.

## Biežākās kļūdas

- **„Digitāli pēc noklusējuma" lasīts kā „tikai digitāli"**: tālruņa līnijas vai lodziņa slēgšana, tiklīdz digitālā izmantošana pārsniedz slieksni, nepārbaudot, vai atlikušajai kohortai ir patiesi lietojama alternatīva.
- **Iekļaušanas mērīšana ar bināru savienojumu**: „ir platjosla" vai „pieder viedtālrunis" ir slikts aizstājējrādītājs spējai pabeigt konkrētu darījumu — Essential Digital Skills plaisa (tikai 48 % Apvienotās Karalistes darbaspēka izpilda visus 20 uzdevumus, pēc Lloyds 2024) rāda, ka prasmes un pārliecība ir tikpat svarīgas kā piekļuve.
- **Ar palīdzību digitālā izmaksāšana kā noapaļošanas kļūda**: tā budžetēšana kā neliela rezerves līnija, nevis kā pilnvērtīgs kanāls ar savām [izmaksām uz darījumu](../izmaksas-uz-darījumu/), un pēc tam pārsteigums, ka palaišanas brīdī tas ir nepietiekami finansēts un nepietiekami nokomplektēts.
- **Aptaujāšana tikai veiksmīgi pabeigušos digitālos lietotājus**: apmierinātības un lietojamības pētījumi, kas veikti pilnībā pakalpojuma iekšienē, palaiž garām cilvēkus, kas nekad nenonāca tik tālu, — tieši to populāciju, ko digitālās iekļaušanas darbs ir paredzēts aizsargāt.

## Avoti

- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
- GOV.UK Service Manual, service standard, point 5: make sure everyone can use the service. <https://www.gov.uk/service-manual/service-standard/point-5-make-sure-everyone-can-use-the-service>
- Lloyds Banking Group, Consumer Digital Index. <https://www.lloydsbank.com/banking-with-us/whats-happening/consumer-digital-index.html>
- Ofcom, digital exclusion review. <https://www.ofcom.org.uk/>
