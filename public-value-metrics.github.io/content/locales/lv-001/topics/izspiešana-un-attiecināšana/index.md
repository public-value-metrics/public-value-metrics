# Izspiešana un attiecināšana

Izspiešana (displacement) rodas, kad programmas šķietamais ieguvums tiek panākts, atņemot aktivitāti vai ieguvumu kādai citai vietai, nevis radot kaut ko jaunu — jūsu uzvara ir kāda cita zaudējums. Attiecināšana (attribution) ir saistīts jautājums: cik lielu daļu no novērotā iznākuma jūsu iejaukšanās var patiesi uzskatīt par savu nopelnu, ja devumu snieguši arī citi dalībnieki un faktori. Abas korekcijas ir standarta pielāgojumi Apvienotās Karalistes publiskā sektora izvērtēšanas vadlīnijās līdzās bezpapildu efektam (deadweight) un noplūdei (leakage), un abas ierasti tiek izlaistas ietekmes apgalvojumos, kas izskatās daudz pārliecinošāki, nekā ir patiesībā.

## Kāpēc tas ir svarīgi

Pašvaldības uzņēmējdarbības grantu shēma, kas palīdz 50 veikaliem pārcelties uz reģenerācijas zonu, var ziņot: “atbalstīti 50 uzņēmumi, radītas 200 darba vietas” — taču, ja šie uzņēmumi vienkārši pārcēlās no kaimiņu galvenās ielas, nevis paplašinājās, darba vietas tika izspiestas, nevis radītas, un neto efekts visā pašvaldībā (vai reģionā) var būt tuvu nullei. HM Treasury Magenta Book (izvērtēšanas rokasgrāmata) un ilggadējā Additionality Guide (papildinātības ceļvedis) izspiešanu uzskata par obligātu atskaitījumu tieši tāpēc, ka vietējie panākumu stāsti ir bieži sastopami arī tad, ja tie nerada nekādu neto ieguvumu valsts vai reģiona mērogā — vērtība ir vienkārši pārvietojusies, bieži vien par sliktu teritorijai vai dalībniekiem, kas to zaudēja. Strukturālo fondu izvērtēšanas vadlīnijas (ko izmantoja bijušajām ES Reģionālās attīstības fonda programmām un to vietējiem pēctečiem, piemēram, UK Shared Prosperity Fund) to formalizē trijos telpiskajos mērogos: vietējā izspiešana (pilsētas robežās), reģionālā izspiešana (reģiona robežās) un nacionālā izspiešana (visā Apvienotajā Karalistē), jo iejaukšanās vienā mērogā var būt papildinoša, bet plašākā — tīra izspiešana: nodarbinātības programma, kas piesaista darbiniekus no kaimiņpilsētas, valsts mērogā ir neitrāla, pat ja izskatās pēc vietēja panākuma.

Attiecināšana ir māsas problēma partnerībās balstītā piegādē, kas tagad ir norma sociālajā sektorā un starpiestāžu publiskajos pakalpojumos. Ja trīs organizācijas kopīgi sniedz bezpajumtniecības novēršanas pakalpojumu, katras organizācijas gada pārskats var neatkarīgi pieprasīt nopelnu par to pašu ielas nakšņotāju skaita samazinājumu — summējot pārskatus, pieprasītā ietekme var pārsniegt novēroto reālo izmaiņu, dažkārt vairākkārt. Magenta Book norādījumi par devuma analīzi (contribution analysis) pastāv tieši tāpēc, ka nejaušināta attiecināšana vienam dalībniekam daudzu iestāžu piegādē bieži nav iespējama, un godīga atbilde bieži ir “mēs sniedzām devumu šajā iznākumā”, nevis “mēs izraisījām šo iznākumu”.

## Matemātika

Izspiešana kā daļa no standarta neto ietekmes secības (pilno ķēdi skatiet [papildinātība un bezpapildu efekts](../papildinātība-un-inerces-efekts/)):

```
Neto papildu ietekme = (Bruto iznākums − Bezpapildu efekts − Izspiešana − Noplūde) × Multiplikators

Izspiešanas līmenis = no citurienes novirzītais ieguvums/aktivitāte
                      / novērotais kopējais bruto ieguvums/aktivitāte
```

Attiecināšanu, ja vienu iznākumu veido vairāki dalībnieki, parasti izsaka kā devuma daļu, nevis kā precīzu procentu, jo to parasti nevar izmērīt ar tādu pašu stingrību kā izspiešanu:

```
Attiecināmā daļa ≈ f(cēloņsakarības devuma stiprums, citu dalībnieku devums,
                     ārējie/kontekstuālie faktori)

Pieprasītā ietekme nekad nedrīkst pārsniegt:
  Σ (katra partnera attiecināmā daļa) ≤ 100 % no kopējā novērotā iznākuma
```

## Aprēķina piemērs

**Reģenerācijas grants**: pašvaldības galvenās ielas grantu shēma ziņo par 200 jaunām mazumtirdzniecības darba vietām finansētajā zonā. Turpmākā aptauju pētījumā konstatēts, ka 60 no šīm darba vietām radās uzņēmumiem, kas pārcēlās no kaimiņu, nefinansētas galvenās ielas tajā pašā pašvaldībā, un vēl 30 radās valsts tīklu filiālēm, kas būtu atvērtas kaut kur reģionā neatkarīgi no granta.

```
Pieprasītās bruto darba vietas = 200
Vietējā izspiešana = 60 (pārcēlās pašvaldības robežās)
Reģionālā izspiešana = 30 (būtu atvērušās reģionā tik un tā)

Neto papildu darba vietas (pašvaldības līmenī) = 200 − 60 = 140
Neto papildu darba vietas (reģiona līmenī) = 200 − 60 − 30 = 110
```

Godīgais virsraksts ir atkarīgs no ģeogrāfiskā mēroga, kas interesē finansētāju — Treasury biznesa gadījumā, kas tiek izvērtēts valsts vai reģiona līmenī, jāizmanto 110, nevis pašvaldības līmeņa 140 un noteikti ne neapstrādātie 200.

**Daudzu iestāžu bezpajumtniecības pakalpojums**: trīs partnerorganizācijas (pašvaldība, mājokļu labdarības organizācija un veselības aprūpes trasts) kopīgi sniedz pakalpojumu ielas nakšņotāju skaita samazināšanai. Ielas nakšņotāju skaits apgabalā gada laikā samazinājās par 30 cilvēkiem. Katras organizācijas individuālais gada pārskats apgalvo: “mēs samazinājām ielas nakšņotāju skaitu par 30” — kopā trīs pārskati apgalvo, ka palīdzēts 90 cilvēkiem, trīsreiz vairāk nekā faktiskais samazinājums. Devuma analīze, kas katram partnerim piešķir daļu (teiksim, 40 % pašvaldībai, 35 % labdarības organizācijai, 25 % veselības trastam — pamatojoties uz dokumentētu lomu un neatkarīgu novērtējumu), uzrādītu attiecīgi 12, 10,5 un 7,5, kas pareizi summējas līdz novērotajiem 30.

## Saikne ar programmatūras inženieriju

Izspiešana un attiecināšana nosaka, kā jāprojektē ietekmes izsekošanas un iznākumu ziņošanas sistēmas vairāku vietu vai vairāku partneru piegādei:

- Ģeogrāfiskajam un organizatoriskajam apjomam jābūt skaidriem, pirmšķirīgiem laukiem jebkurā ietekmes informācijas panelī — skaitlis, kas norādīts “pašvaldībai”, un tas pats skaitlis, kas norādīts “reģionam”, ir dažādi skaitļi, un sistēma, kas tos sajauc, radīs skaitļus, kurus nevar saskaņot portfeļa līmenī.
- Ja vairāki partneri sniedz pakalpojumu kopīgi, iznākumu sistēmai jāreģistrē devuma daļas (vai vismaz jāatzīmē kopīga attiecināšana), nevis jāļauj katra partnera ziņošanas modulim neatkarīgi pieprasīt 100 % no kopīga iznākuma — citādi portfeļa līmeņa apkopojumi pārvērtēs kopējo ietekmi, dažkārt ievērojami.
- Tas saistās ar [sociālo atdevi no ieguldījuma](../sociālā-ieguldījumu-atdeve/) un [grantu iznākumu ziņošanu](../grantu-iznākumu-ziņošana/): SROI vai IRIS+ aprēķins, kas ignorē izspiešanu vai pārmērīgi attiecina kopīgus iznākumus, dos uzpūstu attiecību, kas neiztur auditu vai atkārtošanu.

## Biežākās kļūdas

- **Vietēju panākumu uzrādīšana, nepārbaudot plašāku izspiešanu.** Programma mazākajā ziņošanas mērogā var izskatīties ļoti sekmīga, bet plašākā mērogā būt neitrāla vai pat negatīva; vienmēr norādiet ģeogrāfisko mērogu, uz kuru attiecas neto skaitlis.
- **Ļaut katram kopīgas piegādes partnerim pieprasīt pilnu nopelnu.** Ja devuma daļas nav saskaņotas un dokumentētas, apkopojošā ziņošana starp partneriem pārvērtēs kopējo ietekmi — pārbaudiet, vai partneru līmeņa apgalvojumu summa nepārsniedz novēroto kopējo.
- **Attiecināšanas uztvere kā precīzs procents, kamēr tas patiesībā ir vērtējums.** Devuma analīze, atšķirībā no nejaušināta kontrafaktiskā scenārija, dod pamatotu aplēsi, nevis izmērītu faktu; norādiet to ar atbilstošu nenoteiktību, nevis ar šķietamu precizitāti.
- **Izspiešanas ignorēšana tirgum pietuvinātās iejaukšanās.** Uzņēmumu atbalsts, nodarbinātības shēmas un teritorijā balstīta reģenerācija ir klasiskās augstas izspiešanas kategorijas; izspiešanas pārbaudes tām jāuzskata par obligātām, nevis izvēles.

## Avoti

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020), including
  guidance on contribution analysis. <https://www.gov.uk/government/publications/the-magenta-book>
- HM Treasury / Department for Business, Innovation and Skills, "Additionality Guide: A Standard
  Approach to Assessing the Additional Impact of Interventions" (3rd edition).
- European Commission, "Evalsed: The Resource for the Evaluation of Socio-Economic Development" —
  guidance on local, regional, and national displacement scales.
- Mayne J. "Contribution Analysis: An Approach to Exploring Cause and Effect." ILAC Brief No. 16,
  2008.
