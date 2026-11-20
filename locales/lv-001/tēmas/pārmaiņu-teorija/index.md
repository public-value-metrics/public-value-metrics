# Pārmaiņu teorija

Pārmaiņu teorija ir skaidri, atpakaļvērsti kartēts cēloņsakarību ceļš no ilgtermiņa mērķa uz priekšnoteikumiem un darbībām, kam jābūt, lai to sasniegtu, kopā ar pieņēmumiem, kas savieno katru posmu. To veido, sākot ar vēlamo iznākumu un atkārtoti jautājot „kam jābūt patiesam tieši pirms tam, lai tas notiktu?", līdz sasniedz darbības, ko var patiešām īstenot — tas ir pretējs virziens [loģikas modelim](../loģikas-modelis/), tāpēc abi ir papildinoši, nevis aizstājami.

## Kāpēc tas ir svarīgi

Atpakaļvērstās kartēšanas metodi formalizēja Center for Theory of Change un ActKnowledge, balstoties uz vērtētājas Kerolas Veisas (Carol Weiss) darbu par programmas pieņēmumu skaidru izvirzīšanu, lai tos varētu pārbaudīt, nevis pieņemt uz ticības. Apvienotās Karalistes grantu novērtēšana to ir tieši pārņēmusi: HM Treasury Magenta Book pārmaiņu teoriju uzskata par jebkura novērtējuma dizaina sākumpunktu, un finansētāji, piemēram, National Lottery Community Fund, pieprasa, lai pieteicēji to formulētu, pirms finansē priekšlikumu. Programmatūras inženierim tas ir svarīgi tāpēc, ka pārmaiņu teorija ir dokuments, kam jānosaka, ko jūsu sistēmai jāmēra — ja cēloņu ķēde saka „pabalstu izmantošana ir atkarīga no tā, vai pieprasītāji saņem personalizētu aprēķinu", tas ir pārbaudāms apgalvojums, ko jūsu produktu var aprīkot, lai to pierādītu vai atspēkotu.

## Matemātika

Pārmaiņu teorija ir strukturāla, nevis skaitliska. Katram posmam jānes gan pieņēmums, gan rādītājs, kas varētu parādīt, ka pieņēmums ir nepatiess:

```
Ilgtermiņa iznākums (mērķis)
  ↑ priekšnoteikums + pieņēmums + rādītājs
N. starpposma iznākums
  ↑ priekšnoteikums + pieņēmums + rādītājs
  ...
1. starpposma iznākums
  ↑ priekšnoteikums + pieņēmums + rādītājs
Darbības / intervences
  ↑ iesaistītie resursi
Ieguldījumi
```

Šī struktūra tieši ieplūst [ietekmes novērtēšanas metodēs](../ietekmes-izvērtēšanas-metodes/), kas pastāv, lai pārbaudītu, vai pieņēmumi katrā posmā patiešām izpildās, un [kontrfaktiskajā analīzē](../kontrfaktiskā-analīze/), kas pārbauda, vai ilgtermiņa iznākums būtu iestājies tāpat.

## Aprēķina piemērs

**Pašvaldība (bezpajumtniecības novēršana)**: ilgtermiņa iznākums ir noturīgi īres līgumi 12 mēnešus mājsaimniecībām, kurām draud izlikšana.

- Priekšnoteikums: mājsaimniecībām ir reālistisks, pieejams parādu atmaksas plāns.
  Pieņēmums: ar sociālā darbinieka starpniecību saskaņoti plāni ir noturīgāki nekā tiesas noteiktie.
  Rādītājs: % plānu, kas joprojām darbojas pēc 6 mēnešiem.
- Priekšnoteikums: mājsaimniecības pieprasa pabalstus, uz kuriem tām ir tiesības.
  Pieņēmums: digitāls pabalstu kalkulators palielina pareizo pieprasījumu skaitu salīdzinājumā ar papīra veidlapām.
  Rādītājs: pieprasījumu precizitātes līmenis, salīdzinot pirms/pēc rīka ieviešanas.
- Darbības: sociālā darbinieka triāža, digitālais pabalstu kalkulators, parādu sarunas.

Izmēģinājuma grupā ar 120 mājsaimniecībām pabalstu kalkulatora pieņēmums apstiprinājās 102 mājsaimniecībām (85 %), kas turpmāk pieprasīja pareizi, ko apliecināja vēlāks procesa novērtējums — programmas komandai tika dots pierādījums šim konkrētajam posmam, nevis viens gala līdz galam apgalvojums par novērsto bezpajumtniecību.

**Labdarības organizācija (jauniešu mentorēšana)**: ilgtermiņa iznākums ir mazāk izslēgšanu no skolas. Atpakaļ kartētie priekšnoteikumi: uzlabota emociju regulācija → uzticamas attiecības ar mentoru „aci pret aci" → konsekvents iknedēļas kontakts divu semestru garumā. Teorija skaidri norāda, ka priekšnoteikuma „konsekvents iknedēļas kontakts" neizpilde (piemēram, mentoru mainības dēļ) paredz, ka iznākums neiestāsies, kas ir pārbaudāms, falsificējams apgalvojums, nevis cerība.

## Saikne ar programmatūras inženieriju

Pārmaiņu teorijai jāveido produkta datu modelis, pirms ir uzbūvēts kaut viens informācijas panelis: noteikt, kuriem posmiem vajadzīgs rādītājs, un aprīkot tieši tos, nevis pēc noklusējuma reģistrēt to, ko visvieglāk reģistrēt. Tā arī disciplinē ceļa kartes sarunas — funkcija, kas neatbilst nevienam ķēdes posmam, nav acīmredzami vērta būvēšanai. Skatiet [loģikas modelis](../loģikas-modelis/) par uz priekšu vērstu atbildības ķēdi, ko būvē, kad teorija ir saskaņota, [sociālā ieguldījumu atdeve](../sociālā-ieguldījumu-atdeve/) par metodi, kas balstās uz pārmaiņu teoriju, lai noteiktu, kurus iznākumus vērtēt, un [iznākumi un izlaide](../rezultāti-pret-izlaidi/) par nošķīrumu, uz kuru balstās starpposma iznākumu posmi.

## Biežākās kļūdas

- **Sajaukšana ar loģisko modeli.** Pārmaiņu teorija ir cēloņsakarīga un skaidrojoša (kāpēc mēs ticam, ka tas darbojas); loģikas modelis ir secīgs un aprakstošs (kas notiek kādā secībā). Izveidojot tikai vienu, trūkst vai nu „kāpēc", vai atbildības pēdu.
- **Pieņēmumu atstāšana netiešus.** Visa atpakaļvērstās kartēšanas vērtība ir pārbaudāmu pieņēmumu izcelšana; pārmaiņu teorija, kas tikai uzskaita rūtiņas un bultiņas, nenosaucot, kas varētu padarīt katru posmu nepatiesu, ir dekors.
- **Izveidot vienreiz un nolikt plauktā.** Pārmaiņu teorija, kas uzrakstīta finansējuma pieteikumam un nekad pārskatīta, kļūst nederīga brīdī, kad pierādījumi sāk runāt pretī kādam posmam.
- **Ieinteresēto pušu viedokļa izlaišana.** Pārmaiņu teorija, ko pilnībā izveidojuši pasūtītāji bez priekšējās līnijas darbinieku vai labuma guvēju ieguldījuma, mēdz kodēt pieņēmumus, kam neviens pakalpojuma sniedzējs patiesībā netic.

## Avoti

- Center for Theory of Change. <https://www.theoryofchange.org/>
- ActKnowledge. <https://www.actknowledge.org/>
- HM Treasury, Magenta Book (2020), Chapter 3. <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, theory of change guidance. <https://www.tnlcommunityfund.org.uk/>
