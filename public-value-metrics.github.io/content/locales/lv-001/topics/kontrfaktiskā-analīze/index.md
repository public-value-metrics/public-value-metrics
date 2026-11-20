# Kontrfaktiskā analīze

Kontrfaktiskais scenārijs ir aplēse par to, kas būtu noticis bez intervences. Bez tā novērotās izmaiņas pēc programmas sākšanas nav atšķiramas no izmaiņām, kas būtu notikušas tāpat — nav kontrfaktiskā scenārija, nav pierādījumu par efektu, lai cik pārliecinoši izskatītos pirms-un-pēc skaitļi. HM Treasury Magenta Book uzskata ticama kontrfaktiskā scenārija konstruēšanu par ietekmes izvērtēšanas centrālo metodoloģisko uzdevumu, svarīgāku par jebkuru citu atsevišķu dizaina izvēli.

## Kāpēc tas ir svarīgi

„Noziedzība samazinājās par 15 % gadā pēc programmas ieviešanas" nav pierādījums, ka programma darbojās, ja nezina, kas būtu noticis ar noziedzību bez tās — noziedzība varēja samazināties par 20 % tāpat nesaistītu ekonomisku vai demogrāfisku tendenču dēļ, kas nozīmētu, ka programma faktiski pasliktināja situāciju attiecībā pret kontrfaktisko scenāriju, lai gan neapstrādātais skaitlis uzlabojās. Tā ir visbiežākā analītiskā kļūda publiskā un sociālā sektora ietekmes apgalvojumos: pirms/pēc salīdzinājuma sajaukšana ar cēloņsakarības pierādījumu. Magenta Book skaidri norāda, ka ietekmes izvērtēšana pastāv, lai atbildētu uz kontrfaktisku jautājumu — „kādu starpību šī intervence radīja?" — un ka tas prasa aplēst, ne tikai aprakstīt pasauli, kas nenotika.

Dažādas metodes konstruē kontrfaktisko scenāriju ar atšķirīgu uzticamības pakāpi, un valdības izvērtēšanas vadlīnijas tās attiecīgi sarindo. Randomizēti kontrolēti pētījumi (RCT), kuros indivīdi vai teritorijas tiek nejauši iedalīti, lai saņemtu intervenci vai nē, rada spēcīgāko kontrfaktisko scenāriju, jo randomizācija nodrošina, ka ārstēšanas un kontroles grupas vidēji atšķiras tikai ar to, ka saņem intervenci. Cabinet Office un What Works Network ir veicinājuši RCT visā Apvienotās Karalistes publiskajā politikā kopš Behavioural Insights Team 2012. gada ziņojuma „Test, Learn, Adapt", tieši tāpēc, ka vājāki dizaini ir neaizsargāti pret jaucējfaktoriem — novērotā starpība var atspoguļot to, kas izvēlējās piedalīties, nevis programmas efektu. Kur randomizācija ir nepraktiska vai neētiska (kā tas bieži ir programmām ar likumisku tiesību vai visas populācijas politikas izmaiņām), Magenta Book izklāsta skaidru vājāku, bet joprojām noderīgu alternatīvu hierarhiju: saskaņotas salīdzinājuma grupas, starpību starpībā (difference-in-differences) dizaini, regresijas pārtraukums ap atbilstības sliekšņiem un, kā pēdējais līdzeklis, vienkāršs pirms/pēc salīdzinājums — skaidri atzīmēts kā vājākā pierādījumu forma, kas var sajaukt programmas efektu ar visa pārējā efektu, kas vienlaikus mainījās.

## Matemātika

Kontrfaktiskais ietvars, piemērojams visām metodēm:

```
Aplēstā ietekme = Iznākums(ar intervenci) − Iznākums(kontrfaktiskais: bez intervences)

NE:
Aplēstā ietekme ≠ Iznākums(pēc) − Iznākums(pirms)   [sajauc laiku ar ārstēšanu]
```

Starpību starpībā metode, viens no biežākajiem kvazieksperimentālajiem dizainiem valdības izvērtēšanā, izdala ārstēšanas efektu, atņemot salīdzinājuma grupas pašas pirms/pēc izmaiņu:

```
DiD aplēse = [Iznākums(ārstētie, pēc) − Iznākums(ārstētie, pirms)]
           − [Iznākums(salīdzinājums, pēc) − Iznākums(salīdzinājums, pirms)]
```

Tas novērš jebkuru abām grupām kopīgu tendenci (piem., nacionālu ekonomisku nobīdi, kas ietekmē visus), atstājot tikai diferenciālo izmaiņu, kas attiecināma uz intervenci.

## Aprēķina piemērs

**Nodarbinātības programma, pirms/pēc (vājš dizains)**: darba atbalsta shēma ziņo, ka dalībnieku nodarbinātība gada laikā pieauga no 40 % līdz 55 % — naivs secinājums „+15 procentpunkti programmas dēļ".

**Tā pati programma, starpību starpībā (stiprāks dizains)**: saskaņota līdzīgu nedalībnieku salīdzinājuma grupa no tā paša vietējā darba tirgus uzrāda nodarbinātības pieaugumu no 38 % līdz 47 % tajā pašā gadā (notika nacionāla ekonomikas atkopšanās).

```
Ārstēto grupas izmaiņas:      55 % − 40 % = +15 procentpunkti
Salīdzinājuma grupas izmaiņas: 47 % − 38 % = +9 procentpunkti

DiD aplēse (patiesais programmas efekts) = 15 − 9 = +6 procentpunkti
```

Godīgais attiecināmais efekts ir 6 procentpunkti, nevis 15 — vairāk nekā puse no šķietamā pirms/pēc uzlabojuma būtu notikusi neatkarīgi no programmas, jo tā pati ekonomikas atkopšanās pacēla salīdzinājuma grupu.

**Regresijas pārtraukums, atbilstības slieksnis**: granta shēma pieejama tikai uzņēmumiem ar mazāk nekā 50 darbiniekiem. Uzņēmumu iznākumu salīdzināšana tieši zem sliekšņa (45–49 darbinieki, atbilst) ar uzņēmumiem tieši virs tā (50–54 darbinieki, neatbilst) nodrošina ticamu kontrfaktisko scenāriju, jo uzņēmumi abās patvaļīgās administratīvās robežas pusēs citādi ir līdzīgi — robeža, nevis kāda pamatā esoša uzņēmuma īpašība, nosaka atbilstību. £2 000 vidējā iznākuma starpība starp abām grupām, novērota tikai pie sliekšņa, ir attiecināma uz grantu ar daudz lielāku pārliecību nekā vienkāršs visu atbilstošo pret visiem neatbilstošajiem uzņēmumiem salīdzinājums (kas sistemātiski atšķiras pēc lieluma).

## Saikne ar programmatūras inženieriju

Kontrfaktiskai domāšanai jāveido tas, kā tiek izstrādātas ietekmes izsekošanas sistēmas un izvērtēšanas konveijeri valdības un sociālā sektora programmatūrai:

- Iebūvējiet salīdzinājuma grupas fiksēšanu sistēmā no paša sākuma — reģistrējot, kas bija atbilstošs, bet nereģistrēts, vai saskaņotu nedalībnieku kohortu —, nevis pievienojiet to pēc fakta, kad programma jau notikusi un pastāv tikai pirms/pēc dati.
- Kur randomizācija ir iespējama (pakāpeniska ieviešana, digitāls pakalpojums, kas dažiem lietotājiem iespējots pirms citiem), instrumentējiet sistēmu, lai saglabātu nejaušo iedalījumu kā vaicājamu lauku; pakāpeniska ieviešana nejauši iznīcina savu izvērtēšanas vērtību, ja iedalījuma secība netiek reģistrēta.
- Tā ir pamatmetode, kas stāv aiz [ietekmes izvērtēšanas metodēm](../ietekmes-izvērtēšanas-metodes/) un kas to atšķir no [ietekmes izvērtēšanas pret procesa izvērtēšanu](../ietekmes-izvērtēšana-pret-procesa-izvērtēšanu/), kur pēdējā jautā, vai programma tika piegādāta kā paredzēts, nevis vai tā izraisīja efektu.
- [Papildinātība un inerces efekts](../papildinātība-un-inerces-efekts/) un [izspiešana un attiecināšana](../izspiešana-un-attiecināšana/) pēc būtības ir kontrfaktiski jautājumi — inerces efekts ir „kāds būtu bijis šis konkrētais iznākums bez intervences", piemērots korekcijas līmenī, nevis pilnā izvērtēšanas dizaina līmenī.

## Biežākās kļūdas

- **Pirms/pēc uzskatīšana par cēloņsakarības pierādījumu.** Tā ir visbiežākā un sekām bagātākā kļūda publiskā un sociālā sektora ietekmes atskaitēs; pirms/pēc izmaiņas sajauc programmas efektu ar visu pārējo, kas mainījās tajā pašā periodā.
- **Tādas salīdzinājuma grupas izmantošana, kas sistemātiski atšķiras no ārstētās grupas.** Saskaņotai salīdzinājuma grupai jābūt patiesi līdzīgai pēc būtiskām īpašībām (sk. [kontrfaktiskā analīze](../kontrfaktiskā-analīze/) metožu hierarhiju Magenta Book); programmas dalībnieku (kas pieteicās un bieži ir motivētāki) salīdzināšana ar nedalībniekiem (kas nepieteicās) riskē ar atlases novirzi, kas maskējas kā programmas efekts.
- **Randomizācijas iespēju iznīcināšana ar sliktu piegādes dizainu.** Pakāpeniska vai randomizēta ieviešana saglabā savu izvērtēšanas vērtību tikai tad, ja iedalījums ir patiesi nejaušs un reģistrēts — ļaut vietējiem vadītājiem izvēlēties, kurš iet pirmais, graus mērķi.
- **Pārāk lielas precizitātes apgalvošana no vāja dizaina.** Pirms/pēc aplēse jāuzrāda kā orientējoša, nevis kā izmērīts efekta lielums; Magenta Book pierādījumu hierarhija pastāv, lai apgalvojuma stiprums atbilstu to radījušā dizaina stiprumam.

## Avoti

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020), and its
  supplementary guide on quasi-experimental methods.
  <https://www.gov.uk/government/publications/the-magenta-book>
- Cabinet Office / Behavioural Insights Team, "Test, Learn, Adapt: Developing Public Policy with
  Randomized Controlled Trials" (2012).
- What Works Network, standards of evidence guidance. <https://www.gov.uk/guidance/what-works-network>
- Angrist JD, Pischke J-S. *Mostly Harmless Econometrics: An Empiricist's Companion*. Princeton
  University Press, 2009 (standard reference for difference-in-differences and regression
  discontinuity methods).
