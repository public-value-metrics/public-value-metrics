# Daudzdimensionālais nabadzības indekss (MPI)

MPI mēra nabadzību kā pārklājošos trūkumus, ko cilvēks piedzīvo vienlaikus — veselības, izglītības un
dzīves apstākļu jomā —, nevis tikai kā ienākumus, kas ir zem noteiktas robežas. To izstrādāja Oksfordas
Nabadzības un cilvēka attīstības iniciatīva (OPHI) kopā ar Sabinu Alkiri (Sabina Alkire) un Džeimsu
Fosteru (James Foster), un kopš 2010. gada to kopīgi ar UNDP publicē katrā Cilvēka attīstības
ziņojumā līdzās [Cilvēka attīstības indeksam](../cilvēka-attīstības-indekss/).

## Kāpēc tas ir svarīgi

Ienākumu nabadzības robežas neaptver cilvēkus, kuriem ir pietiekami naudas ienākumu, bet trūkst tīra
ūdens vai izglītības, vai kuri ir pārdzīvojuši bērna nāvi — un tās neaptver faktu, ka trūkumi grupējas:
mājsaimniecībai bez elektrības nesamērīgi lielāka iespējamība ir arī trūkt sanitārijai un būt nepietiekami
barotam bērnam. Alkires-Fostera metode, uz kuras balstīts MPI, saskaita katra cilvēka trūkumus desmit
rādītājos, kas sagrupēti trīs vienādi svērtās dimensijās — veselība, izglītība, dzīves apstākļi —, un
cilvēku klasificē kā "MPI nabadzīgu" tikai tad, ja viņa svērtais trūkumu vērtējums pārsniedz fiksētu
slieksni; tā tiek aptverts pārklājums, ko atsevišķu viena rādītāja statistiku kopa nespēj parādīt. OPHI
publicē pilnu metodoloģiju un valstu datus vietnē
<https://ophi.org.uk/multidimensional-poverty-index/>; kopā ar UNDP uzturētais globālais MPI tagad aptver
vairāk nekā 110 valstu. Programmatūrai, ko veido nabadzības apkarošanas programmām — naudas
pārskaitījumiem, sociālās aprūpes triāžai, palīdzības mērķēšanai —, MPI rādītāju kopa bieži ir tuvākais
standartizētas trūkumu shēmas variants, kas jau apstiprināts desmitiem valstu statistikas biroju.

## Matemātika

```
10 rādītāji, 3 dimensijas, katras dimensijas svars 1/3:

Veselība (1/3):          uzturs (1/6), bērnu mirstība (1/6)
Izglītība (1/3):         skolas gadi (1/6), skolas apmeklējums (1/6)
Dzīves apstākļi (1/3):   gatavošanas kurināmais, sanitārija, dzeramais ūdens,
                          elektrība, mājoklis, mantas (katrs 1/18)

trūkumu vērtējums (c) = to rādītāju svaru summa, kuros cilvēks ir nenodrošināts

cilvēks ir "MPI nabadzīgs", ja c ≥ 1/3 (nabadzības slieksnis, k = 33 %)

H (nabadzīgo īpatsvars) = MPI nabadzīgo skaits / kopējais iedzīvotāju skaits
A (intensitāte)          = vidējais trūkumu vērtējums tikai starp MPI nabadzīgajiem

MPI = H × A
```

Tā kā MPI reizina nabadzīgo *īpatsvaru* ar to, *cik* nabadzīgi viņi ir, divi reģioni ar vienādu
nabadzīgo īpatsvaru var iegūt ļoti atšķirīgus MPI vērtējumus, ja trūkumi vienā no tiem ir smagāki —
tā ir tā pati "dimensiju savstarpējas aizstāšanas nav" loģika, kas ir HDI ģeometriskā vidējā pamatā.

## Aprēķina piemērs

**Valsts aptauja ar 1 000 cilvēkiem**: 350 ir identificēti kā daudzdimensionāli nabadzīgi (trūkumu
vērtējums ≥ 33 %). Tikai starp šiem 350 nabadzīgajiem vidējais trūkumu vērtējums ir 45 %.

```
H = 350 / 1000                = 0,350
A = 0,45
MPI = H × A = 0,350 × 0,45    = 0,1575
```

**Divu apgabalu salīdzinājums ar vienādu nabadzīgo īpatsvaru**: A apgabalā H = 0,30 un A = 0,40 (daudz
nabadzīgo, mēreni nenodrošināti); B apgabalā H = 0,30 un A = 0,60 (tikpat daudz nabadzīgo, bet smagāk
nenodrošināti — vienlaikus trūkst elektrības *un* sanitārijas *un* skolas apmeklējuma).

```
MPI_A = 0,30 × 0,40 = 0,120
MPI_B = 0,30 × 0,60 = 0,180
```

Vienāds nabadzīgo īpatsvars, bet B apgabala MPI ir par 50 % augstāks — mērķēšanas sistēma, kas balstīta
tikai uz nabadzīgo īpatsvaru, abus apgabalus sarindotu vienādi un neredzētu, ka B apgabalam nepieciešama
dziļāka iejaukšanās.

## Saikne ar programmatūras inženieriju

- Sociālo programmu lietu pārvaldības un tiesīguma sistēmas bieži jau uzglabā vairākus no desmit
  rādītājiem (mājoklis, skolas apmeklējums, veselības rādītāji) atsevišķos silosos; Alkires-Fostera
  skaitīšanas metode ir gatava shēma, kā tos apvienot vienā trūkumu vērtējumā, nevis veidot individuālu
  vērtēšanas modeli no nulles.
- Nabadzīgo īpatsvara un intensitātes dalījums (H × A) ir vispārīgi noderīgs paraugs jebkuram panelim,
  kas ziņo gan "cik cilvēku ir skarti", gan "cik smagi" — abu apvienošana vienā skaitlī, kā to dara
  neapstrādāta izplatības statistika, noslēpj tieši to gadījumu, kam vajadzīgi vislielākie resursi.
- MPI tipa rādītāju paneļi dabiski savienojas ar [izmaksām uz vienu ieguvēju](../izmaksas-uz-saņēmēju/)
  atskaitēm nabadzības apkarošanas programmām: izmaksas uz vienu MPI samazinājuma punktu ir aizstāvama
  vienība ļoti atšķirīgu iejaukšanos salīdzināšanai (naudas pārskaitījums pret sanitārijas infrastruktūru).

## Biežākās kļūdas

- **Desmit rādītāju uzskatīšana par universāliem** — OPHI globālā MPI rādītāji ir kalibrēti starpvalstu
  salīdzināmībai; nacionālie MPI (daudzas valstis, tostarp vairākas Dienvidāzijā un Āfrikā, publicē
  savus) pielāgo rādītājus un svarus vietējam kontekstam, un abi nav tieši salīdzināmi.
- **Ziņošana tikai par H** — nabadzīgo īpatsvars pilnībā ignorē intensitāti; vienmēr ziņojiet vai
  aprēķiniet A līdzās tam, vai pašu MPI.
- **Pieņēmums, ka MPI nabadzīgie un ienākumu nabadzīgie ir viena un tā pati populācija** — pašas OPHI
  valstu kopsavilkumi parasti uzrāda tikai daļēju pārklāšanos; programma, kas mērķēta tikai uz
  ienākumu nabadzīgajiem, sistemātiski palaidīs garām ievērojamu daļu daudzdimensionāli nabadzīgo.

## Avoti

- Oxford Poverty and Human Development Initiative. "Multidimensional Poverty Index."
  <https://ophi.org.uk/multidimensional-poverty-index/>
- Alkire S, Foster J. "Counting and Multidimensional Poverty Measurement." Journal of Public
  Economics, 2011.
- UNDP & OPHI. "Global Multidimensional Poverty Index" (annual report).
