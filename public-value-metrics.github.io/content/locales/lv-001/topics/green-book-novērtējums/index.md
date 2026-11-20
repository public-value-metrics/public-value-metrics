# Green Book novērtējums (piecu pamatojumu modelis)

Green Book (Zaļā grāmata) ir HM Treasury obligātās vadlīnijas Apvienotās Karalistes valdības izdevumu priekšlikumu novērtēšanai un izvērtēšanai. Tās centrālais rīks, piecu pamatojumu modelis, liek biznesa gadījumam atbildēt uz pieciem atsevišķiem jautājumiem — vai tā ir laba ideja, vai tā sniedz vērtību, vai to var iepirkt, vai to var atļauties un vai to var īstenot —, nevis sabrukt vienā skaitlī, ko ministrs var vienkārši apstiprināt.

## Kāpēc tas ir svarīgi

Katrs Apvienotās Karalistes centrālās valdības izdevumu priekšlikums, kas pārsniedz resora deleģētos limitus, pirms finansējuma piešķiršanas jāiziet cauri Green Book novērtējumam, un HM Treasury Green Book Review 2020 (publicēts pēc kritikas, ka process bija aizspriedumains pret nabadzīgākiem reģioniem, skatiet <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>) pastiprināja prasību, ka iespējas jāsalīdzina ar patiesu “minimālo darbību” (do minimum) bāzes scenāriju un ka stratēģiskā atbilstība jāpierāda pat pirms tiek vērtēta vērtība par naudu. Pats piecu pamatojumu modelis ir vecāks par Green Book — tas radies Office of Government Commerce kā standarta biznesa gadījuma struktūra —, taču 2022. gada Green Book izdevums to iestrādā kā obligāto formu jebkuram biznesa gadījumam, kas meklē Treasury apstiprinājumu: <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>.

Pamatojuma sadalīšanas piecās daļās jēga ir tā, ka priekšlikums var neizturēt jebkurā vienā dimensijā neatkarīgi no pārējām. Stratēģiski pamatota, izmaksu ziņā efektīva IT platformas nomaiņa joprojām var neizturēt komerciālo pamatojumu, ja to var piegādāt tikai viens piegādātājs (radot vienpiegādātāja riskus), vai neizturēt vadības pamatojumu, ja resoram nav pieredzes tāda apmēra programmu īstenošanā. Viens “vērtības par naudu” vērtējums slēpj tieši šādu kļūmes režīmu.

## Matemātika

Piecu pamatojumu modelis ir struktūra, nevis formula, taču katram pamatojumam ir sava kvantitatīvā vai pierādījumu pārbaude:

```
1. Stratēģiskais pamatojums
   Pierādījumi par izdevumu mērķi, kas saistīts ar organizācijas stratēģiju.
   Pārbaude: vai vispār ir pamatojums pārmaiņām? (“nedarīt neko” vienmēr ir iespēja.)

2. Ekonomiskais pamatojums
   Iespēju novērtējums pret “minimālo darbību” bāzes scenāriju, izmantojot
   sociālo izmaksu un ieguvumu analīzi vai izmaksu efektivitātes analīzi.
   Pārbaude: kura iespēja maksimizē neto publisko vērtību?
   Skatiet ../social-cost-benefit-analysis/ un ../cost-effectiveness-analysis-in-government/

3. Komerciālais pamatojums
   Tirgus iesaiste, iepirkuma ceļš, riska sadale starp pircēju un piegādātāju.
   Pārbaude: vai vēlamo iespēju var iepirkt pieņemamos noteikumos?

4. Finanšu pamatojums
   Pieejamība resora budžeta limitu ietvaros, finansējuma avots,
   bilances uzskaite.
   Pārbaude: vai varam to atļauties šogad un katru nākamo gadu?

5. Vadības pamatojums
   Pārvaldība, projekta plāns, ieguvumu realizācijas plāns, risku reģistrs.
   Pārbaude: vai šī organizācija to patiešām spēj īstenot?
   Skatiet ../benefits-realization/
```

Ekonomiskais pamatojums ir tur, kur atrodas kvantitatīvais novērtējums: iespējas tiek salīdzinātas pēc [sociālās diskonta likmes](../sociālā-diskonta-likme/) koriģētas tīrās pašreizējās vērtības, izmantojot [sociālās izmaksu un ieguvumu analīzes](../sociālā-izmaksu-un-ieguvumu-analīze/) metodi, vai, ja ieguvumus nevar godīgi izteikt naudā, ar [izmaksu efektivitātes analīzi](../izmaksu-efektivitātes-analīze-valdībā/) vai [daudzkritēriju lēmumu analīzi](../daudzkritēriju-lēmumu-analīze/).

## Aprēķina piemērs

**Pašvaldība**: pašvaldība, kas novērtē £12 miljonu mājokļu remontu IT sistēmu, piecus pamatojumus izstrādā šādi. Stratēģiskais pamatojums: remontu uzkrājums 18 mēnešu laikā bez iejaukšanās pārkāpj likumisko pienācīgu mājokļu standartu. Ekonomiskais pamatojums: trīs iespējas izmaksātas 10 gadu novērtēšanas periodā ar 3,5 % diskonta likmi (saskaņā ar 2022. gada Green Book standarta sociālo laika preferenču likmi) — “minimālā darbība” (salāpīt mantoto sistēmu, NPV −£4,1 milj.), “pirkt” (COTS platforma, NPV +£2,3 milj.), “veidot” (speciāla platforma, NPV +£0,6 milj., kad 40 % optimisma novirze programmatūras izstrādei piemērota nediskontētajām kapitāla izmaksām, saskaņā ar Green Book A pielikumu). Pirkšana uzvar ekonomisko pamatojumu. Komerciālais pamatojums: pastāv divi dzīvotspējīgi piegādātāji, konkurētspējīgs konkurss ir iespējams — izturēts. Finanšu pamatojums: kapitāls pieejams no Public Works Loan Board, ieņēmumu izmaksas iekļaujas vidēja termiņa finanšu plānā — izturēts. Vadības pamatojums: pašvaldība pēdējos piecos gados ir īstenojusi divas salīdzināmas sistēmas — izturēts. Priekšlikums turpinās ar “pirkt”.

**Centrālās valdības resors**: priekšlikums ar spēcīgu ekonomisko pamatojumu (NPV +£40 milj.), bet kur attiecīgo akreditāciju ir tikai vienam piegādātājam, neiztur komerciālā pamatojuma pārbaudi par konkurences spriedzi, liekot izvēlēties vai nu vienpiegādātāja atbrīvojumu (ar savu pārbaudes slogu), vai specifikācijas pārveidi, lai atvērtu tirgu — ekonomiskais pamatojums vien to nekad nebūtu atklājis.

## Saikne ar programmatūras inženieriju

Inženieru komandas valdības iestādēs vai grantu finansētās organizācijās parasti redz tikai ekonomisko pamatojumu, jo tieši to produktu un inženierijas vadībai prasa pamatot (“kāda ir šīs migrācijas ROI?”). Taču biznesa gadījumam, kas iziet cauri Treasury vai grantu komitejai, vajadzīgi visi pieci, un inženieri bieži ir vislabāk piemērotie, lai atbildētu uz komerciālo pamatojumu (vai to patiešām var iepirkt, vai tas mūs piesaista viena piegādātāja patentētam formātam?) un vadības pamatojumu (vai mums ir piegādes spēja, vai tas ir atkarīgs no tā, ka trīs konkrēti cilvēki neaiziet?). Uztveriet pieprasījumu pēc “tikai biznesa gadījuma skaitļiem” kā pieprasījumu pēc vienas piektdaļas no faktiskā lēmuma. Skatiet [vērtību par naudu](../vērtība-par-naudu/), lai uzzinātu, kā ekonomiskā pamatojuma izvade parasti tiek apkopota, un [kopējās īpašumtiesību izmaksas](../kopējās-piederības-izmaksas-valsts-it/) finanšu pamatojuma parastajam kvantitatīvajam kodolam.

## Biežākās kļūdas

- **Ekonomiskā pamatojuma rakstīšana vispirms un stratēģiskā pamatojuma pielāgošana tam.** Green Book Review 2020 konstatēja, ka tieši šis kļūmes režīms radīja novērtējuma aizspriedumus par labu vietām un nozarēm, kas jau bija labi pamatotas, nostiprinot reģionālo nevienlīdzību; stratēģiskajam pamatojumam jānosaka mērķis pirms iespēju salīdzināšanas.
- **“Minimālās darbības” uztvere kā “nedarīt neko”.** Pareizais bāzes scenārijs ir zemāko izmaksu iespēja, kas joprojām izpilda minimālos juridiskos vai drošības pienākumus, nevis nulles izdevumu fantāzija — salīdzināšana ar burtisku nulli uzpūš katras iespējas šķietamo vērtību.
- **Komerciālā un vadības pamatojuma izlaišana, jo ekonomiskais pamatojums ir spēcīgs.** Priekšlikums ar augstu NPV, ko nevar konkurētspējīgi iepirkt vai ko sponsorējošā organizācija nevar piegādāt, nav finansējams priekšlikums; Treasury pārskatītāji regulāri noraida šo iemeslu dēļ pat ar pārliecinošu ekonomisko pamatojumu.
- **Piecu pamatojumu modeļa piemērošana tikai vienu reizi, sākumā.** Green Book prasa pamatojumu pārskatīt katrā nākamajā apstiprināšanas vārtos (stratēģiskais kopsavilkuma pamatojums, kopsavilkuma biznesa gadījums, pilns biznesa gadījums), kad izmaksas un pierādījumi nostiprinās — pamatojums, kas iesaldēts kopsavilkuma posmā, palaiž garām izmaksu eskalāciju, ko vēlāki vārti būtu pamanījuši.

## Avoti

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury. "Green Book Review 2020: findings and response." 2020.
  <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>
- HM Treasury / Infrastructure and Projects Authority. "Guide to developing the project business
  case." <https://www.gov.uk/government/publications/project-business-case-guide>
