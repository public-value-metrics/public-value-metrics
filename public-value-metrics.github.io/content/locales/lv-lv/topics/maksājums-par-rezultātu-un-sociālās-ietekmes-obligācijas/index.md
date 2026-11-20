# Maksājums par rezultātu un sociālās ietekmes obligācijas (PbR/SIB)

Maksājums par rezultātu (payment by results, PbR) apmaksā sniedzēju, pamatojoties uz pārbaudītiem
sasniegtajiem rezultātiem, nevis veiktajām darbībām. Sociālās ietekmes obligācija (social impact bond,
SIB) ir konkrēta PbR finansēšanas struktūra, kurā privāti vai filantropiski investori iepriekš finansē
pakalpojumu sniegšanu, un valdības pasūtītājs viņiem atmaksā — ar atdevi — tikai tad, ja neatkarīgi
izmērītie rezultāti sasniedz saskaņotos sliekšņus, tādējādi nododot piegādes risku no nodokļu maksātāja
investoram.

## Kāpēc tas ir svarīgi

Pasaulē pirmā SIB tika uzsākta HMP Peterborough cietumā 2010. gada septembrī: Social Finance piesaistīja
£5 miljonus no 17 investoriem, lai finansētu "One Service" — darbu ar īsu sodu (zem 12 mēnešiem)
izciešošiem ieslodzītajiem, lai samazinātu recidīvismu; Tieslietu ministrija un Big Lottery Fund
vienojās atmaksāt investoriem tikai tad, ja atkārtotas notiesāšanas gadījumi samazināsies vismaz par 7,5 %
salīdzinājumā ar atbilstošu valsts salīdzināmo kohortu. Peterborough izmēģinājuma pēdējā kohorta uzrādīja
9,7 % atkārtotu notiesājumu samazinājumu, ērti virs sliekšņa, un investoriem tika atmaksāts ar atdevi.
Mehānisms bija svarīgs, jo atrisināja konkrētu pasūtīšanas problēmu: valdība vēlējās maksāt par
rezultātiem, nevis par ieguldījumiem, bet nevarēja uzņemties finansiālo risku par iejaukšanos, kas varētu
nedarboties, tāpēc SIB struktūra pārcēla šo risku uz investoriem, kas bija gatavi to uzņemties. Oksfordas
Blavatnika Valdības skolas Government Outcomes Lab (GO Lab) tagad uztur pilnīgāko publisko pierādījumu
bāzi par PbR un SIB sniegumu visā pasaulē, izsekojot krietni vairāk nekā 200 ietekmes obligācijām
globāli un publicējot pētījumus par to, kuri dizaina elementi korelē ar panākumiem vai neveiksmi. Mācība,
pie kuras pierādījumu bāze atkārtoti atgriežas, ir tāda, ka *izvēlētā rezultāta metrika* un tas, kurš
uzņemas risku to nesasniegt, nosaka gandrīz visu pārējo par to, kā PbR līgums praksē patiešām darbojas.

## Matemātika

```
PbR maksājums = bāzes maksājums (ja ir) + Σ (sasniegtais rezultāts × vienības cena par rezultātu)

Sociālās ietekmes obligācijas investora atdeve:
  Investora izdevumi   = sākotnējais kapitāls, kas finansē pakalpojuma sniegšanu
  Rezultāta maksājums  = pasūtītājs maksā tikai tad, ja rezultāts ≥ slieksnis, mērogots pēc
                          tā, cik tālu virs sliekšņa nonāk sniegums
  Investora atdeve     = saņemtie rezultāta maksājumi − investora izdevumi
                          (atdeves likme, bieži ierobežota, atspoguļo uzņemto risku)

Galvenie dizaina parametri, kas nosaka visa līguma uzvedību:
  Rezultāta metrika     — jābūt rezultātam, nevis izlaidei (skatiet outcomes-vs-outputs)
  Salīdzinājums/kontrafaktiskais scenārijs — parasti atbilstoša kohorta (skatiet counterfactual-analysis)
  Maksājuma slieksnis    — minimālais uzlabojums, pirms tiek aktivizēts jebkāds maksājums
  Maksājuma līkne        — lineāra, pakāpeniska vai ierobežota virs sliekšņa
  Attiecināšanas/deadweight atlaide — skatiet additionality-and-deadweight
```

## Aprēķina piemērs

**Peterborough One Service** (ilustratīvi skaitļi no publicētiem izvērtējumiem):

```
Piesaistītais investoru kapitāls:    £5 000 000
Kohorta:                              ~3 000 īsus sodus izciešoši vīriešu kārtas ieslodzītie divās kohortās
Slieksnis:                            ≥7,5 % atkārtotu notiesājumu samazinājums pret atbilstošu
                                       valsts salīdzinājuma grupu, citādi nav maksājuma
1. kohortas rezultāts:                 8,4 % samazinājums — zem līgumiskās latiņas šai
                                       kohortai atsevišķi saskaņā ar sākotnējiem noteikumiem
Apvienotās/galīgās kohortas rezultāts: 9,7 % samazinājums — virs sliekšņa
Rezultāta maksājums:                  valdība (Tieslietu ministrija / Big Lottery Fund)
                                       maksā par katru procentpunktu virs sliekšņa, finansējot
                                       investoru atmaksu plus atdevi
```

**Pašvaldības PbR līgums (ilustratīvs)**: ģimenes iejaukšanās pakalpojums tiek pasūtīts par £4 000 par
katru nosūtīto ģimeni (aktivitātes maksājums) plus £6 000 par katru ģimeni bez turpmāka bērnu aizsardzības
nosūtījuma 12 mēnešus pēc lietas slēgšanas (rezultāta maksājums). Nosūtītas 200 ģimenes, slēgtas 150
lietas, 96 12 mēnešos paliek bez nosūtījuma:

```
Aktivitātes maksājums = 200 × £4 000 = £800 000
Rezultāta maksājums   = 96 × £6 000  = £576 000
Kopējās līguma izmaksas = £1 376 000 par 96 apstiprinātiem ilgtspējīgiem rezultātiem
Izmaksas uz apstiprinātu rezultātu ≈ £14 333 (skatiet cost-per-outcome)
```

## Saikne ar programmatūras inženieriju

Maksājums par rezultātu vispirms ir stimulu saskaņošanas problēma un tikai tad datu problēma, un datu
sistēma ir vieta, kur šī saskaņošana vai nu notur, vai sabrūk. Neatkarīga, pret viltojumiem noturīga
rezultātu verifikācija ir viss spēles būtība: pasūtītājam un sniedzējam ir pretēji stimuli attiecībā uz
to, kā tiek kodēts neskaidrs gadījums, tāpēc rezultātus reģistrējošai sistēmai vajadzīgs audita pēdu
žurnāls, datu apmaiņas līgums ar neatkarīgo verificētāju (bieži cita iestāde nekā sniedzējs, dažkārt
oficiālās statistikas iestāde, kas salīdzina ar policijas vai pabalstu ierakstiem) un rezultāta definīcijas
nemainīga versionēšana — PbR ekvivalents "metrikas pārdefinēšanas" kļūdai
[publiskā sektora KPI](../publiskā-sektora-kpi/). Attiecināšanas aprēķini ir atkarīgi no
[kontrafaktiskās analīzes](../kontrfaktiskā-analīze/) atbilstošo kohortu metodēm, kurām vajadzīgs
atkārtojams, auditējams kods, nevis vienreizēja izklājlapa. Un pašai metrikai jābūt patiesam rezultātam,
nevis aktivitātes aizstājējam — skatiet [rezultāti pret izlaidi](../rezultāti-pret-izlaidi/) —, jo PbR līgums,
kas maksā par izlaidi, vienkārši pārsauc ierasto finansējumu, pievienojot papildu transakciju izmaksas.
Ja SIB sociālā atdeve tiek modelēta perspektīvi, šāds izvērtējums parasti tieši aizgūst no
[sociālās atdeves no ieguldījuma](../sociālā-ieguldījumu-atdeve/) metodoloģijas.

## Biežākās kļūdas

- **Maksājums par viegli manipulējamu aizstājējrezultātu**: "sesiju apmeklējums" ir aktivitāte, ietērpta
  rezultātā; pieprasiet mēru, kas atspoguļo faktiski meklētās izmaiņas (recidīvisms, nodarbinātība,
  mājokļa stabilitāte).
- **Nav ticama kontrafaktiskā scenārija**: bez atbilstošas salīdzinājuma grupas uzlabojums varētu būt
  regresija uz vidējo vai plašāka tendence, nevis programmas efekts — skatiet
  [kontrafaktiskā analīze](../kontrfaktiskā-analīze/) un
  [papildinātība un deadweight efekts](../papildinātība-un-inerces-efekts/).
- **Transakciju un izvērtēšanas izmaksu nenovērtēšana**: PbR/SIB shēmu neatkarīga verifikācija, datu
  sasaiste un līguma administrēšana regulāri sasniedz divciparu procentus no līguma vērtības — GO Lab
  pierādījumu bāze to dokumentē kā atkārtotu shēmu pārtraukšanas cēloni.
- **Izvēlēšanās ("cherry-picking") vai "novietošana malā"**: sniedzējiem, kas saņem samaksu par rezultātu,
  ir tiešs stimuls dot priekšroku klientiem, kuriem tāpat vislielākā iespējamība gūt panākumus, un nolikt
  malā grūtākos gadījumus — izstrādājiet maksājuma līmeņus vai gadījumu sastāva korekciju, lai tam pretotos.

## Avoti

- Government Outcomes Lab, University of Oxford, Blavatnik School of Government.
  <https://golab.bsg.ox.ac.uk/>
- Social Finance, "Peterborough Social Impact Bond" evaluation summaries.
  <https://golab.bsg.ox.ac.uk/case-studies/peterborough-social-impact-bond/>
- Ministry of Justice, "Peterborough Social Impact Bond HMP Doncaster: Final Reconviction Results
  for the Peterborough Social Impact Bond."
