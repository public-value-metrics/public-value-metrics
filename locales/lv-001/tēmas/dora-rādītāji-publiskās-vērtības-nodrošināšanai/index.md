# DORA rādītāji publiskās vērtības nodrošināšanai

DORA (DevOps Research and Assessment) rādītāji — izvietošanas biežums, izmaiņu izpildes laiks, izmaiņu kļūmju līmenis un pakalpojuma atjaunošanas laiks, kā piektais pievienota uzticamība — ir programmatūras nozares visvairāk apstiprinātie piegādes snieguma etaloni. Pārtulkoti publiskā sektora atbildības valodā, katrs no tiem ir tiešs rādītājs tam, cik ātri un cik droši publiskā vērtība nonāk pie iedzīvotāja.

## Kāpēc tas ir svarīgi

DORA desmitgades pētījumi, ko katru gadu publicē kā *Accelerate State of DevOps Report* (Forsgren, Humble un Kim metodoloģija, kuru tagad vada Google Cloud), sagrupē komandas elites, augsta, vidēja un zema snieguma grupās. Elites komandas izvieto pēc pieprasījuma, no izmaiņas iesniegšanas līdz ražošanai pavada mazāk nekā dienu, neizdodas aptuveni 5 % izmaiņu un atjaunojas mazāk nekā stundas laikā; zema snieguma komandas izvieto reizi mēnesī vai retāk, tām tas aizņem mēnešus, neizdodas ap 40 % izmaiņu un atjaunošanās aizņem nedēļas. Valdībā tie nav inženieru iedomības rādītāji: Government Digital Service Service Standard prasa komandām “bieži iterēt un uzlabot” un spēt ātri reaģēt uz lietotāju vajadzībām, un resori, kas nevar droši un bieži izvietot, strukturāli nespēj šo standartu izpildīt, lai ko arī rādītu to lietotāju pētījumi. Cabinet Office paša digitālās efektivitātes darbs konstatēja, ka iedzīvotāja novirzīšana no neveiksmīga vai lēna digitāla darījuma uz tālruņa vai papīra kanālu ir dārga — GDS 2012. gada Digital Efficiency Report aplēsa, ka daži digitālie darījumi izmaksā tikai 20 p, salīdzinot ar tālruņa vai klātienes kontaktiem, kas izmaksā līdz £8,62 —, tāpēc iedzīvotājiem paredzēta pakalpojuma izmaiņu kļūme maksā ne tikai inženieru laiku, bet pārnes reālas mārciņas uz kontaktcentra budžetu (skatiet [kanālu nobīdes ietaupījumus](../kanālu-pārslēgšanas-ietaupījumi/)).

## Matemātika

```
Izvietošanas biežums     = izvietojumi ražošanā / laiks
Izmaiņu izpildes laiks   = t(izvietošana) − t(iesniegšana), mediāna
Izmaiņu kļūmju līmenis   = neizdevušās izmaiņas / visas izmaiņas × 100
Atjaunošanas laiks (MTTR) = t(atjaunots) − t(kļūme), mediāna
Uzticamība               = SLO izpilde (pieejamība, latentums, pareizība)
```

Tulkojumi publiskajā vērtībā:

```
Izpildes laiks   → nedēļas konveijerā × CoD, skatiet cost-of-delay-in-public-programmes
Kļūmju līmenis   → iedzīvotājiem redzamo incidentu līmenis: CFR × izmaksas par
                   novirzītu kontaktcentra zvanu (vai par neizdevušos
                   likumisko darījumu)
Atjaunošanas laiks → pakalpojuma pārtraukuma kaitējums: MTTR × (bloķētie
                   pieprasījumi/pieteikumi stundā) × turpmākās izmaksas vai
                   labklājības zaudējums uz vienību
Uzticamība       → ieguvuma diskonts: pakalpojums ar 99 % pieejamību
                   sniedz ≈ 0,99 no sava modelētā ieguvuma — piegādes
                   analogs izmantošanas vai atbilstības nepietiekamībai
```

## Aprēķina piemērs

Pašvaldības pabalstu pieteikumu portāla komanda pirms piegādes inženierijas ieguldījuma un pēc tā:

```
                    Pirms       Pēc
Izvietojumi         ik mēnesi   ik nedēļu
Izpildes laiks      8 nedēļas   5 dienas
CFR                 30 %        10 %
MTTR                3 dienas    4 stundas
```

Komanda gadā nodrošina ap 25 uzlabojumu ar vidējo vērtību £8 000 nedēļā ([kavējuma izmaksas](../kavēšanās-izmaksas-publiskajās-programmās/)). Samazinot izpildes laiku par aptuveni 7,3 nedēļām, katra uzlabojuma ieguvumu plūsma tiek pavirzīta uz priekšu: 25 × 7,3 × 8 000 ≈ **£1 460 000 gadā** agrāk sniegtas vērtības. Kļūmju līmenis: 25 × (0,30 − 0,10) = 5 neveiksmīgas izmaiņas mazāk gadā; katra neveiksmīga izmaiņa publiskā portālā parasti novirza aptuveni 2 000 iedzīvotāju uz tālruņa kanālu par £8,62 pret 20 p, neto izmaksas aptuveni £8,42 × 2 000 ≈ £16 840 par incidentu, tādēļ 5 incidentu novēršana ietaupa ≈ **£84 200 gadā**. Piegādes inženierijas ieguldījums tiek vērtēts tajā pašā valūtā kā jebkurš cits publiskās vērtības pamatojums.

## Praktiskā piemēra turpinājums: uzticamība

Ja portāls darbojas ar 97 % pieejamību, nevis mērķa 99,5 %, un katrs dīkstāves procentpunkts tiek modelēts kā 2 % pieprasījumu zaudējums atteikšanās dēļ, pakalpojums sniedz aptuveni 0,975 no sava modelētā £2 milj. gadā ieguvuma — £50 000 gadā ieguvuma diskonts, ko tīrs darbspējas laika informācijas panelis nekad neuzrāda.

## Saikne ar programmatūras inženieriju

DORA rādītāji ir publiskā pakalpojuma darbības rādītāji citā apģērbā: izpildes laiks atbilst [pakalpojuma standartiem un darījumu rādītājiem](../pakalpojumu-standarti-un-darījumu-rādītāji/); izmaiņu kļūmju līmenis atbilst atkārtota darba un sūdzību līmenim; MTTR atbilst tam, cik ilgi likumisks pakalpojums nav pieejams pieprasītājiem. Uzlabošanas paņēmieni pārnesas abos virzienos, jo abas ir rindu sistēmas ar atbildības ierobežojumiem — pamatā esošo rindu matemātiku skatiet [plūsmas rādītājos valdības piegādē](../plūsmas-rādītāji-valdības-piegādē/). Ievērojiet arī DORA 2025. gada konstatējumu, ka MI ieviešana korelē ar augstāku caurlaidspēju, bet *sliktāku* stabilitāti — iejaukšanās ar gan iedarbību, gan blakusefektiem, kas ir tieši tā neto ieguvuma analīze, ko šīs grupas tēma par [MI produktivitāti publiskajā sektorā](../mi-produktivitāte-publiskajā-sektorā/) izstrādā.

## Biežākās kļūdas

- **Rādītāju manipulēšana**: izvietojumu skaita uzpūšana ar tukšām laidieniem vai ātro labojumu izslēgšana no izmaiņu kļūmju skaita. Definējiet notikumus tikpat precīzi, kā likumisks pakalpojuma standarts definē “sekmīgu darījumu”.
- **Starpresoru līgas tabulas**: DORA grupas salīdzina piegādes praksi, nevis pakalpojumus ar dažādiem riska profiliem; nodokļu maksājumu sistēma, kas novērtēta kā “augsta”, var būt pareizā nostāja, kur “elites” līmenis būtu neapdomīgs, ņemot vērā nodrošinājuma prasības.
- **Tikai viena rādītāja optimizēšana**: ātrums bez izmaiņu kļūmju līmeņa ir klasiskais caurlaidspējas un nestabilitātes kompromiss — ziņojiet visus četrus kopā, nevis kā vienu vērtējumu.

## Avoti

- DORA research and the annual *Accelerate State of DevOps Report*. <https://dora.dev/>
- Forsgren N, Humble J, Kim G, *Accelerate: The Science of Lean Software and DevOps*, IT Revolution Press, 2018.
- Cabinet Office, Digital Efficiency Report, 2012.
- DORA, 2025 State of AI-assisted Software Development report. <https://dora.dev/dora-report-2025/>
