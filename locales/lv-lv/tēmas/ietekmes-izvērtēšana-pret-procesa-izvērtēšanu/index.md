# Ietekmes izvērtēšana pret procesa izvērtēšanu

Ietekmes izvērtēšana jautā, vai programma izraisīja paredzētos iznākumus. Procesa izvērtēšana jautā, vai programma patiešām tika īstenota, kā plānots — kam, kādā devā un ar kādiem šķēršļiem vai veicinātājiem pa ceļam. Tie ir atšķirīgi jautājumi, kam vajadzīgas atšķirīgas metodes, un HM Treasury Magenta Book uzskata abu pasūtīšanu kopā par standarta praksi, jo vājš vai nulles ietekmes rezultāts pats par sevi nav interpretējams: tas nevar pateikt, vai programmas pamatā esošā teorija bija kļūdaina, vai laba teorija vienkārši nekad netika pienācīgi īstenota.

## Kāpēc tas ir svarīgi

Valdības izvērtējumi atkārtoti konstatējuši, ka programmai nav izmērāmas ietekmes, bet nav procesa izvērtējuma, kas izskaidrotu iemeslu — atstājot pasūtītājus nespējīgus atšķirt “šī ideja nedarbojas” (teorijas kļūme) no “šī ideja nekad netika pienācīgi izmēģināta” (īstenošanas kļūme). Medical Research Council vadlīnijas par sarežģītu iejaukšanās pasākumu procesa izvērtēšanu, kas publicētas BMJ 2015. gadā un plaši citētas kopā ar Magenta Book, formalizēja ticamību plānam (fidelity), devu un sasniedzamību kā galvenās lietas, kas procesa izvērtējumam jāmēra. Ietekmes izvērtējuma pasūtīšana bez procesa izvērtējuma riskē pamest patiesi pamatotu programmas dizainu tāpēc, ka tā tika piegādāta pusei paredzēto iedzīvotāju ar daļu no paredzētās intensitātes — kļūda, ko sistēmu veidotājs ir labi spējīgs novērst, jo piegādes ticamība ir tieši tas, ko darbības datu sistēmas var iegūt gandrīz reāllaikā.

## Matemātika

```
Procesa izvērtēšana jautā:
 - Vai tika piegādāts mērķa iedzīvotājiem plānotajā devā/intensitātē?
 - Vai piegāde atbilda loģikas modeļa / pārmaiņu teorijas dizainam?
 - Kādi šķēršļi vai veicinātāji ietekmēja piegādi?
 Metodes: ticamības pārbaudes pret iepriekš noteiktiem sliekšņiem, gadījumu izpēte,
          intervijas, administratīvie piegādes dati.

Ietekmes izvērtēšana jautā:
 - Kas mainījās un cik liela šīs izmaiņas daļa attiecināma uz programmu?
 Metodes: RCT, DiD, PSM, RDD — skatiet impact-evaluation-methods — pret kontrafaktisko scenāriju.

Kombinētā diagnoze:
 Nav efekta  + augsta ticamība → teorijas kļūme: pats modelis neradīja iznākumu
 Nav efekta  + zema ticamība   → īstenošanas kļūme: modelis nekad netika pienācīgi pārbaudīts
 Efekts atrasts + augsta ticamība → atkārtot ar pārliecību
 Efekts atrasts + zema ticamība   → izmeklēt tālāk: efekts var būt trausls vai atkarīgs no vietas
```

## Aprēķina piemērs

**Pašvaldība (vecāku atbalsta programma)**: ietekmes izvērtējums, izmantojot atšķirību atšķirības metodi, konstatē +2 procentpunktu izmaiņu bērnu labklājības mērā — statistiski nenozīmīgu. Procesa izvērtējums, kas veikts paralēli, konstatē, ka programma sasniedza tikai 210 no 500 mērķa ģimenēm (42 % sasniedzamība), un no tām tikai 95 sasniedza iepriekš noteikto ticamības slieksni 75 %+ apmeklētu sesiju — 19 % no sākotnēji plānotās sasniedzamības. Secinājums: vājais ietekmes rezultāts atbilst īstenošanas kļūmei, nevis pierādījumam, ka programmas modelis nedarbojas; atbilstoša rīcība ir labot nosūtīšanas ceļu, kas izraisīja 58 % atkrišanu, nevis atteikties no programmas dizaina.

**Labdarības organizācija (digitālās pratības programma)**: ietekmes izvērtējums konstatē spēcīgu efektu (+18 procentpunkti digitālās pārliecības vērtējumā), un paralēls procesa izvērtējums apstiprina 92 % ticamību plānotajai mācību programmai visās 12 piegādes vietās. Kopā finansētājs var mērogot programmu ar pārliecību, jo efekts pierādīts kā noturīgs, nevis kā viena neparasti labas vietas produkts.

## Saikne ar programmatūras inženieriju

Procesa izvērtēšanas dati ir tieši tas, ko piegādes sistēmas ir labi spējīgas iegūt: apmeklējums pret plānu, sesiju deva un atkrišana katrā nosūtīšanas vai uzņemšanas piltuves posmā — tā pati piltuves analītika, ko inženieri jau veido produkta funkcijām, tikai piemērota sociālās programmas piegādes konveijeram. Ticamības un sasniedzamības rādītāju nodošana programmu vadītājiem gandrīz reāllaikā, negaidot granta beigu izvērtējumu, ļauj salabot salauztu nosūtīšanas ceļu programmas laikā, nevis atklāt to tikai pēc finansēšanas perioda beigām. Skatiet [ietekmes izvērtēšanas metodes](../ietekmes-izvērtēšanas-metodes/) cēloņsakarības plāniem, ar kuriem procesa izvērtēšana tiek savienota, [pārmaiņu teoriju](../pārmaiņu-teorija/) un [loģikas modeli](../loģikas-modelis/) dizainam, pret kuru procesa izvērtēšana pārbauda ticamību, un [ieguvumu realizāciju](../ieguvumu-realizācija/) piegādes izsekošanai līdz solītajiem iznākumiem.

## Biežākās kļūdas

- **Tikai ietekmes izvērtējuma pasūtīšana.** Nulles vai vājais rezultāts tad nav interpretējams kā teorijas vai īstenošanas kļūme, un tieši šī atšķirība ir svarīga, lemjot, ko darīt tālāk.
- **Procesa izvērtēšanas uztvere kā mīkstu papildinājumu.** Tai vajadzīga tāda pati stingrība un iepriekš noteikti ticamības kritēriji kā ietekmes dizainam, citādi tā sabrūk anekdotēs, kad rezultāti ienāk.
- **“Laikā un budžetā” jaukšana ar “piegādāts, kā plānots”.** Procesa izvērtēšana pārbauda ticamību modelim — devu, mērķa grupu, saturu —, nevis projekta vadības RAG statusu.
- **Ticamības sliekšņu iepriekšēja nereģistrēšana.** Pēc fakta izlemt, kas skaitās “pietiekama deva”, liek jebkuram vilšanos radoša ietekmes rezultāta skaidrojumam izskatīties pēc pēcfaktuma attaisnojuma.

## Avoti

- HM Treasury, Magenta Book (2020). <https://www.gov.uk/government/publications/the-magenta-book>
- Moore G, et al., "Process evaluation of complex interventions: Medical Research Council
  guidance." BMJ 2015;350:h1258. <https://www.bmj.com/content/350/bmj.h1258>
- National Audit Office, programme evaluation reports. <https://www.nao.org.uk/>
