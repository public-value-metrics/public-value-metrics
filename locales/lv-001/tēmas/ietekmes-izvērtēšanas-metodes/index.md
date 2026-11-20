# Ietekmes izvērtēšanas metodes

Ietekmes izvērtēšanas metodes ir statistiskie un eksperimentālie plāni, ko izmanto, lai novērtētu, ko politika vai programma patiesībā izraisīja, atšķirībā no tā, kas būtu noticis tik un tā — nejaušinātie kontrolētie pētījumi (RCT), atšķirību atšķirības metode (difference-in-differences), tieksmes rādītāju saskaņošana (propensity score matching) un regresijas pārtraukuma dizains (regression discontinuity design) ir četras visbiežāk izmantotās Apvienotās Karalistes publiskajā politikā. Tās pastāv tāpēc, ka lielāko daļu valdības iejaukšanās pasākumu nevar pārbaudīt laboratorijā: nevar nejaušināt, kurai pilsētai būs jauns autobusa maršruts, tā, kā var nejaušināt, kuram pacientam dod zāles, tāpēc šīs metodes aizņemas to pašu cēloņsakarības loģiku, ne vienmēr prasot nejaušu iedalījumu.

## Kāpēc tas ir svarīgi

HM Treasury Magenta Book A pielikums par kvazi-eksperimentālām metodēm ir Apvienotās Karalistes valdības kanoniskās vadlīnijas izvēlei starp šiem plāniem, un tādas struktūras kā Education Endowment Foundation un What Works Centre for Local Economic Growth institucionalizē pierādījumu hierarhiju, kas uz tiem balstīta — RCT, kur nejaušināšana ir iespējama un ētiska, kvazi-eksperimentālie plāni, kur tā nav. Metodes izvēle nav tehnisks pēcpārdomu jautājums: tā nosaka, vai izvērtējums var atbildēt uz “vai programma to izraisīja?”, vai tikai uz “vai tas notika pēc programmas sākuma?”, un tas ir tas pats jautājums, ko [kontrafaktiskā scenārija analīze](../kontrfaktiskā-analīze/) ir veidota, lai piespiestu praktiķus uzdot pirms jebkāda izvērtējuma pasūtīšanas.

## Matemātika

```
RCT:
  Ietekme = vidējais(iznākums | ārstēšanas grupa) − vidējais(iznākums | kontroles grupa)
  (derīgs, jo iedalījums ārstēšanā ir nejaušs)

Atšķirību atšķirības metode (DiD):
  Ietekme = [iznākums_pēc(ietekmētie) − iznākums_pirms(ietekmētie)]
          − [iznākums_pēc(kontroles) − iznākums_pirms(kontroles)]
  (prasa “paralēlo tendenču” pieņēmumu: ietekmētie un kontroles būtu
   kustējušies kopā bez iejaukšanās)

Tieksmes rādītāju saskaņošana (PSM):
  1. Aplēsiet P(ārstēšana = 1 | kovariāti X) katrai vienībai → tieksmes rādītājs
  2. Saskaņojiet ietekmētās vienības ar neietekmētām vienībām ar līdzīgiem tieksmes rādītājiem
  3. Ietekme = vidējais(iznākums | ietekmētie) − vidējais(iznākums | saskaņotā kontrole)

Regresijas pārtraukuma dizains (RDD):
  Ietekme = iznākuma lēciens, kas novērots atbilstības slieksnī,
            salīdzinot vienības tieši virs un tieši zem robežas
```

## Aprēķina piemērs

**Pašvaldība (atšķirību atšķirības metode programmai problemātiskām ģimenēm)**: iznākums ir skolas apmeklējums. Ietekmētajā apgabalā apmeklējums programmas periodā mainās no 84 % uz 89 % (+5 procentpunkti); salīdzināmā, bet neietekmētā apgabalā tajā pašā periodā no 85 % uz 87 % (+2 procentpunkti). DiD ietekmes aplēse: 5 − 2 = +3 procentpunkti, kas attiecināmi uz programmu. Piemērojot 2 000 skolēnu kohortai ietekmētajā apgabalā, tas atbilst aptuveni 60 papildu skolēniem (3 % × 2 000), kas sasniedz augstāku apmeklējuma kategoriju — ekstrapolācija, kas jāziņo ar tās paralēlo tendenču atrunu, nevis kā precīzs galvu skaits.

**Labdarības organizācija (tieksmes rādītāju saskaņošana nodarbinātības labdarības organizācijai)**: 300 programmas dalībnieki tiek saskaņoti ar 300 indivīdiem no lielākas administratīvās datu kopas, izmantojot tieksmes rādītājus, kas veidoti no vecuma, iepriekšējās nodarbinātības vēstures un kvalifikācijas līmeņa. Nodarbinātības līmenis pēc divpadsmit mēnešiem: saskaņotā ietekmētā grupa 46 %, saskaņotā salīdzinājuma grupa 33 %. PSM ietekmes aplēse: 46 % − 33 % = +13 procentpunkti, kas attiecināmi uz programmu, ja nav neuzraudzīta jaucējfaktora (piemēram, motivācijas), kas ietekmē gan dalību, gan iznākumu.

## Saikne ar programmatūras inženieriju

Tas, vai kāds no šiem plāniem vēlāk ir iespējams, lielā mērā ir atkarīgs no datu inženierijas lēmumiem, kas pieņemti agri. RDD vajadzīgs precīzi reģistrēts darbības mainīgais un patiesi tīrs atbilstības slieksnis; DiD vajadzīgi salīdzināmi paneļa dati laikā gan ietekmētajiem, gan salīdzinājuma apgabaliem, kas nozīmē konsekventus savienojumus starp sistēmām un gadiem; PSM vajadzīgi bagātīgi sākotnējo kovariātu dati, kas iegūti pirms ārstēšanas, nevis rekonstruēti pēc tam. Datu modelis, kas no paša sākuma projektēts kopā ar [pārmaiņu teoriju](../pārmaiņu-teorija/) un [loģikas modeli](../loģikas-modelis/) — iegūstot sākotnējos kovariātus, datumus un salīdzinājuma grupai piemērotus ierakstus —, ir tas, kas vēlāk padara iespējamu stingru ietekmes izvērtējumu dārgas pēcpārdomu steigas vietā. Skatiet [ietekmes izvērtēšanu pret procesa izvērtēšanu](../ietekmes-izvērtēšana-pret-procesa-izvērtēšanu/) papildinošajam jautājumam, uz kuru šīs metodes pašas par sevi neatbild.

## Biežākās kļūdas

- **RCT uzspiešana, kur tas nav iespējams vai ētiski pieņemams**, vai otrādi — kvazi-eksperimentāla plāna nekad neapsvēršana, kad bija pieejama patiesa iespēja — politikas slieksnis, pakāpeniska ieviešana — un tā netika izmantota.
- **Paralēlo tendenču pieņēmuma ignorēšana DiD.** Ja salīdzinājuma apgabals jau pirms iejaukšanās atšķīrās no ietekmētā, divu punktu salīdzinājums ir piesārņots; pārbaudiet iepriekšējās tendences, ne tikai pirms/pēc.
- **Saskaņošana tikai pēc novērotajiem kovariātiem PSM.** Neuzraudzīta atlase, piemēram, dalībnieku motivācija, var sagrozīt aplēsi pat tad, ja novērotie kovariāti ir labi līdzsvaroti.
- **Darbības mainīgā manipulēšana RDD.** Ja cilvēki var ietekmēt savu rezultātu, lai tas nokļūtu tieši atbilstības sliekšņa iekšpusē, pārtraukums vairs neizolē cēloņsakarības efektu.

## Avoti

- HM Treasury, Magenta Book (2020), Annex A: Quasi-Experimental Methods. <https://www.gov.uk/government/publications/the-magenta-book>
- What Works Centre for Local Economic Growth, evidence review methodology. <https://whatworksgrowth.org/>
- Education Endowment Foundation, evaluation guidance. <https://educationendowmentfoundation.org.uk/>
