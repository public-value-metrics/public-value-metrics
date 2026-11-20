# Izmaksu efektivitātes analīze valdībā

Izmaksu efektivitātes analīze (angl. cost-effectiveness analysis, CEA) salīdzina alternatīvu veidu izmaksas, kā sasniegt *to pašu* iznākumu, izteiktu dabiskās vienībās — izmaksas uz katru izmitināto bezpajumtnieku, uz katru skolēnu, kas sasniedzis gaidīto līmeni, uz katru novērsto CO2 tonnu —, nepārvēršot pašu iznākumu naudā.

## Kāpēc tas ir svarīgi

Green Book uzskata CEA par rezerves metodi, kad [sociālās izmaksu un ieguvumu analīzes](../sociālā-izmaksu-un-ieguvumu-analīze/) prasība izteikt naudā katru ieguvumu kļūst ne tikai grūta, bet negodīga — kad ticamas cenas piešķiršanai iznākumam būtu vajadzīgi pieņēmumi, kurus neviens patiesībā nepieņem (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>, 5. nodaļa, par iespēju novērtēšanu, kad iznākumus nevar viegli izteikt naudā). CEA ir metode, kas visizteiktāk aizgūta no veselības ekonomikas — tā strukturāli ir identiska tam, kā NICE salīdzina ārstēšanu pēc izmaksām uz kvalitātei koriģētu dzīves gadu (QALY) —, bet piemērota neveselības publiskajām programmām: izglītības intervencēm uz skolēna iznākuma punktu, mājokļu programmām uz katru mājsaimniecību, kurai novērsta bezpajumtniecība, nodarbinātības programmām uz katru ilgstošu darba iznākumu.

Iemesls, kāpēc CEA ir sava vieta līdzās SCBA, nevis tiek tajā iekļauta, ir tāds, ka naudas vērtības uzspiešana dažiem iznākumiem rada skaitli, kas ir pietiekami precīzs, lai izskatītos autoritatīvs, un pietiekami apstrīdams, lai sabiedriskā debatē būtu bezvērtīgs — cenas noteikšana „bērnam, kas lasa gaidītajā līmenī", izraisa tieši tādu izaicinājumu, kas izjauc biznesa gadījumu parlamenta komitejā. CEA apiet strīdu, atsakoties to vest: tā sarindo iespējas pēc izmaksām uz paša *iznākuma* vienību, atstājot atsevišķo politisko spriedumu par to, vai iznākumu vispār vērts sasniegt, stratēģiskajam gadījumam.

## Matemātika

```
Izmaksu efektivitātes koeficients (vidējais) = kopējās izmaksas / sasniegtās iznākuma vienības kopā

Pieauguma izmaksu efektivitātes koeficients (ICER), salīdzinot variantu A ar variantu B:
ICER = (Izmaksas_A − Izmaksas_B) / (Iznākums_A − Iznākums_B)

Procedūra:
1. Nofiksē iznākuma vienību un mērīšanas metodi visām salīdzināmajām iespējām.
2. Aprēķina katras iespējas izmaksas uz tās pašas bāzes (sk. ../green-book-appraisal/, finanšu gadījums)
   tajā pašā laika horizontā.
3. Atmet dominētās iespējas: jebkura iespēja, kas maksā vairāk uz vienību nekā lētāka
   alternatīva, kas sasniedz to pašu vai labāku iznākumu, tiek atmesta.
4. Atlikušās iespējas sarindo pēc pieauguma, nevis vidējā izmaksu efektivitātes koeficienta.
```

CEA pati par sevi nevar pateikt, vai programmu vispār vērts finansēt — tikai to, kura no vairākām pieejām vienam mērķim ir lētākā uz vienību. Lēmums, vai pats mērķis ir tērēšanas vērts, prasa vai nu pārvēršanu atpakaļ SCBA (ja eksistē ticams novērtējums), vai politisku/stratēģisku spriedumu ārpus matemātikas. Kur iznākumus patiešām nevar reducēt uz vienu vienību — jo programma rada vairākus iznākumus, kas ir svarīgi dažādos veidos —, tā vietā lietojiet [daudzkritēriju lēmumu analīzi](../daudzkritēriju-lēmumu-analīze/).

## Aprēķina piemērs

**Pašvaldība**: padome salīdzina trīs pieejas bezpajumtniecības mazināšanai, katras izmaksas aprēķinātas par vienu gadu pret iznākumu „cilvēki, kas pārcelti uz stabilu mājokli uz 6+ mēnešiem":

```
Variants                         Izmaksas   Sasniegtie iznākumi  Vid. CER
Housing First (intensīvs)        £900 000   60                   £15 000/iznākums
Hostelis + pārcelšanās atbalsts  £600 000   50                   £12 000/iznākums
Izpalīdzība + privātais īres sektors £350 000  20                £17 500/iznākums

ICER, hostelis pret izpalīdzību: (600k−350k)/(50−20) = £8 333 uz papildu iznākumu
ICER, Housing First pret hosteli: (900k−600k)/(60−50) = £30 000 uz papildu iznākumu
```

Izpalīdzību pēc vidējām izmaksām dominē hostelis, taču *pieauguma* solis no izpalīdzības uz hosteli maksā tikai £8 333 uz katru papildu izmitināto cilvēku — lēti salīdzinājumā ar Housing First soli, kas maksā £30 000 par katru papildu cilvēku pāri tam, ko sasniedz hostelis. Ar budžetu ierobežota padome, kas paplašina pakalpojumu, dod priekšroku hosteļa paplašināšanai pirms Housing First, kaut arī Housing First pēc sava vidējā koeficienta izskatās labāks.

**Nacionālā valdība**: lasītprasmes iedzīšanas programma tiek salīdzināta trijos piegādes modeļos pēc „izmaksas uz skolēnu, kas sasniedz vecumam atbilstošu lasīšanas līmeni": individuālā apmācība (£1 800/skolēnam), mazas grupas apmācība (£700/skolēnam) un tikai digitāla intervence (£150/skolēnam, bet tikai 40 % no mazas grupas apmācības iznākuma līmeņa uz reģistrēto skolēnu pēc koriģēšanas ar iesaistes samazināšanos). Pēc koriģēšanas ar faktisko pabeigšanu tikai digitālā maksā £375 uz skolēnu, kas sasniedz līmeni — joprojām lētākā, taču CEA nevar pateikt, vai mazāks absolūtais skolēnu skaits, kam palīdzēts ar tikai digitālo, ja tiek piegādāts par to pašu budžetu kā mazā grupa, ir pieņemams kompromiss pret mazāka skaita skolēnu sasniegšanu lielākā dziļumā; tas ir sadales spriedums, ko CEA atdod lēmumu pieņēmējiem.

## Saikne ar programmatūras inženieriju

CEA ir pareizais ietvars ikreiz, kad inženieru komandas vērtē piegādes pieejas *tam pašam* pakalpojuma iznākumam — izmaksas uz veiksmīgi pārbaudītu identitāti trīs identitātes pārbaudes piegādātājiem, izmaksas uz pareizi šķirotu lietu divām lietu apstrādes automatizācijas konstrukcijām, izmaksas uz novērstu pieejamības defektu starp iekšējo un uzņēmuma sniegto remedijumu. Disciplīna, ko tā tieši ienes: definēt iznākuma vienību pirms izmaksu salīdzināšanas (nevis „slēgtie pieteikumi" — izlaide —, bet „faktiski apmierināta lietotāja vajadzība"), un vienmēr aprēķināt pieauguma koeficientu starp esošo sistēmu un piedāvāto aizstājēju, nevis katras sistēmas vidējās izmaksas atsevišķi. Sk. [iznākumi un izlaide](../rezultāti-pret-izlaidi/) un [izmaksas uz iznākumu](../izmaksas-uz-iznākumu/).

## Biežākās kļūdas

- **Vidējo, nevis pieauguma koeficientu salīdzināšana, lemjot par paplašināšanu.** Kā rāda bezpajumtniecības piemērs, iespēja ar labāko vidējo koeficientu ne vienmēr ir lētākā nākamā iznākuma vienība, ko pirkt.
- **Tāda iznākuma vienības izvēle, kas patiesībā ir izlaide.** „Veiktās nosūtīšanas" vai „sniegtās sesijas" mēra aktivitāti, nevis iznākumu, ko programma paredzēta radīt; CEA par izlaidi rada pārliecinoši izskatīgu skaitli, kas atbild uz nepareizo jautājumu.
- **Salīdzināšana starp patiesi atšķirīgiem iznākumiem.** CEA ir derīga tikai tad, ja katra iespēja mērķē uz to pašu iznākumu, mērītu vienādi; „izmaksas uz izmitinātu bezpajumtnieku" salīdzināšanai ar „izmaksas uz aprūpes pametušo stabilā īrē" vajadzīgs vispārīgs iznākuma mērs vai [daudzkritēriju lēmumu analīze](../daudzkritēriju-lēmumu-analīze/), nevis CEA.
- **Iznākuma noturības ignorēšana.** Lētāka iespēja, kas rada iznākumus, kuri nepastāv (skolēns, kas atgriežas atpakaļ pēc intervences beigām), faktiski nav izmaksu efektīvāka, ja tiek mērīta salīdzināmā horizontā; saskaņojiet novērošanas periodu starp salīdzināmajām iespējām.

## Avoti

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Chapter 5.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- National Institute for Health and Care Excellence. "Developing NICE guidelines: the manual" —
  izmaksu efektivitātes metode, no kuras šī valdības adaptācija aizgūta.
  <https://www.nice.org.uk/process/pmg20>
- What Works Centre for Homelessness Impact. Cost-effectiveness evidence on homelessness
  interventions. <https://whatworks-homelessness.org.uk/>
