# Sociālā izmaksu un ieguvumu analīze (SCBA)

Sociālā izmaksu un ieguvumu analīze pārvērš visas politikas vai programmas izmaksas un ieguvumus — gan tirgus, gan ārpustirgus — vienotā naudas vienībā, diskontē nākotnes plūsmas līdz tagadnes vērtībai un savstarpēji tās izlīdzina, iegūstot vienu skaitli: vai šis priekšlikums sabiedrību padara turīgāku un par cik?

## Kāpēc tas ir svarīgi

SCBA ir noklusējuma kvantitatīvā metode [Green Book novērtējuma](../green-book-novērtējums/) ekonomiskajā pamatojumā: HM Treasury norādījumi pieprasa, lai priekšlikumi uzrādītu pozitīvu neto sociālo tagadnes vērtību (NPSV) visur, kur ieguvumus var ticami izteikt naudā, kā pamata vērtēšanas principu ārpustirgus precēm izmantojot gatavību maksāt (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>, 5. nodaļa). Disciplīna, ko tā uzliek, ir tāda, ka „sociālā" izmaksu un ieguvumu analīze nav tas pats, kas privātā sektora ieguldījumu novērtējums: tai jāiekļauj izmaksas un ieguvumi, kas krīt uz trešajām personām, kuras nav darījuma puses (ārējās ietekmes), tai jālieto [sociālā diskonta likme](../sociālā-diskonta-likme/), nevis komerciālās kapitāla izmaksas, un tai jāpiemēro [sadales svēršana](../sadales-svēršana/), ja mārciņa nabadzīgākai mājsaimniecībai nozīmē vairāk nekā bagātākai.

SCBA sabrūk tieši tur, kur to kritiķi gaida: precēm bez tirgus analoga — tīrs gaiss, sociālā kohēzija, glābtas dzīvības vērtība — jāizsaka naudā ar [deklarēto preferenču](../deklarēto-preferenču-vērtēšana/) vai [atklāto preferenču](../atklāto-preferenču-vērtēšana/) metodēm, vai arī jākonstruē [ēnu cena](../ēnu-cenas/). Ja naudas izteiksme ir apstrīdēta, nevis tikai sarežģīta, pats Green Book iesaka pāriet uz [izmaksu efektivitātes analīzi](../izmaksu-efektivitātes-analīze-valdībā/) vai [daudzkritēriju lēmumu analīzi](../daudzkritēriju-lēmumu-analīze/), nevis uzspiest skaitli, kam neviens netic.

## Matemātika

```
NPSV = Σ [t=0 līdz T] (Ieguvums_t − Izmaksas_t) / (1 + r)^t

kur:
  Ieguvums_t = visi naudā izteiktie ieguvumi t. gadā, ieskaitot ārpustirgus
               preces, kas novērtētas ar deklarēto/atklāto preferenču metodi vai ēnu cenu
  Izmaksas_t = visas naudā izteiktās izmaksas t. gadā, ieskaitot resursu
               alternatīvās izmaksas (skatiet ../opportunity-cost-in-public-spending/)
  r          = sociālā diskonta likme (HM Treasury nosaka 3,5 %, pēc 30. gada
               pazeminot, saskaņā ar Green Book A pielikumu)
  T          = novērtēšanas periods

Ieguvumu un izmaksu attiecība (BCR) = Σ PV(Ieguvumi) / Σ PV(Izmaksas)
```

BCR virs 1 (vai NPSV virs nulles) norāda uz neto sociālo vērtību. Green Book vērtības par naudu kategorijas (kā lieto transporta un infrastruktūras novērtēšanā) iezīmē BCR diapazonus: zem 1,0 — slikta vērtība par naudu, 1,0–1,5 — zema, 1,5–2,0 — vidēja, 2,0–4,0 — augsta un virs 4,0 — ļoti augsta. Jutīguma analīze — NPSV pārrēķins pie pesimistiskiem un optimistiskiem pieņēmumiem — ir obligāta, nevis izvēles kārtā, jo naudā izteiktiem ārpustirgus ieguvumiem ir plašas nenoteiktības joslas.

## Aprēķina piemērs

**Vietējā pašvaldība**: pašvaldība novērtē £3 milj. ieguldījumu jaunā velo un kājāmgājēju tīklā 20 gadu novērtēšanas periodā ar 3,5 % diskonta likmi.

```
Izmaksas: £3 milj. kapitālieguldījumi 0. gadā, £50 000/gadā uzturēšana (1.–20. gads)
PV(uzturēšana) ≈ £50 000 × 14,2 (20 gadu rentes faktors pie 3,5 %) ≈ £710 000
Kopējās PV(izmaksas) ≈ £3,71 milj.

Ieguvumi (visi izteikti naudā ar publicētiem DfT/PVO vērtēšanas rīkiem):
  Veselības ieguvums no pieaugušas fiziskās aktivitātes: £180 000/gadā
  Darba kavējumu samazinājums: £40 000/gadā
  Sastrēgumu mazināšanās (mazāk auto braucienu): £60 000/gadā
  Kopējā ieguvumu plūsma: £280 000/gadā
PV(ieguvumi) ≈ £280 000 × 14,2 ≈ £3,98 milj.

NPSV = £3,98 milj. − £3,71 milj. = +£0,27 milj.
BCR = 3,98 / 3,71 = 1,07 → „zema" vērtība par naudu
```

Shēma pārsniedz slieksni, bet tikai tik tikko; jutīguma aprēķins ar 20 % zemāku veselības ieguvuma novērtējumu (atspoguļojot patiesu nenoteiktību fiziskās aktivitātes vērtēšanā) BCR pazemina zem 1,0 — tieši tāpēc Green Book pieprasa jutīguma tabulu publicēt līdzās galvenajam skaitlim, nevis tikai centrālo aprēķinu.

**Labdarības organizācija**: zīdaiņu mirstības profilakses programma, kas izmaksā £500 000 gadā, tiek vērtēta ar statistiskas dzīvības vērtību (VSL) — ēnu cenu, nevis novērotu tirgus cenu — aptuveni £2,1 milj. (HM Treasury 2023. gadā atjauninātais skaitlis, kas pats atvasināts no deklarēto preferenču pētījumiem). Novēršot vienu zīdaiņa nāves gadījumu gadā pret £500 000 izmaksām, BCR ir 4,2 — droši „ļoti augsta" vērtība par naudu —, taču viss rezultāts balstās uz VSL skaitli, tāpēc jebkurai SCBA, kas lieto VSL, tas jānorāda kā pieņēmums, nevis fakts.

## Saikne ar programmatūras inženieriju

SCBA ir dabisks ietvars platformu un infrastruktūras ieguldījumu lēmumiem valsts programmatūrā — piemēram, kopīgas identitātes platformas salīdzināšanai ar departamentu atsevišķiem risinājumiem vajag naudā izteikt tādus ieguvumus kā samazinātas dublētas reģistrācijas izmaksas, mazāka krāpšana un ātrāks laiks līdz pakalpojumam, kam pašiem nav tirgus cenas. Inženieriem, kas būvē pamatā esošo pakalpojumu, jārēķinās, ka programmu vadītāji prasīs ievaddatus šai analīzei: darījumu vienības izmaksas (skatiet [izmaksas uz darījumu](../izmaksas-uz-darījumu/)), paredzamos apjomus un degradācijas/dīkstāves izmaksas. Vissvarīgākā pārņemamā disciplīna: diskontēt nākotnes ieguvumus, skaidri nosaukt kontrfaktisko bāzes scenāriju (skatiet [kontrfaktiskā analīze](../kontrfaktiskā-analīze/)) un nekad neuzrādīt punktveida novērtējumu bez tā jutīguma diapazona.

## Biežākās kļūdas

- **Ieguvumu dubultā uzskaite.** Gan „ietaupītā laika", gan „no šī laika iegūtās produktivitātes" skaitīšana kā atsevišķas ieguvumu rindas pārspīlē pamatojumu; ietaupītais laiks ir ieguvums, tā tālākā izmantošana nav papildu ieguvums, ja vien tā nav neatkarīgi pierādīta.
- **Pārvietoto izmaksu izlaišana.** Shēma, kas pārnes sastrēgumus no viena ceļa uz citu vai krāpšanu no viena kanāla uz citu, nav radījusi to neto ieguvumu, ko norāda galvenā NPSV — skatiet [izspiešana un attiecināšana](../izspiešana-un-attiecināšana/).
- **Privātas diskonta likmes lietošana.** Komerciālo kapitāla izmaksu (teiksim, 8–10 %) piemērošana sociālās diskonta likmes vietā sistemātiski nenovērtē ilga horizonta sabiedriskos ieguvumus, piemēram, veselības un vides ieguvumus — skatiet [sociālā diskonta likme](../sociālā-diskonta-likme/).
- **Neapstrīdamā izteikšana naudā un apstrīdamā pārsteidzoša apiešana.** Ja divas trešdaļas priekšlikuma ieguvuma ir droši naudā izteikts efektivitātes ietaupījums un viena trešdaļa — nedroši naudā izteikts labklājības ieguvums, galvenā NPSV klusībā sajauc cietu skaitli ar mīkstu; ziņojiet tos atsevišķi.

## Avoti

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Chapter 5.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury. "Green Book supplementary guidance: value of a statistical life." 2023.
  <https://www.gov.uk/government/publications/green-book-supplementary-guidance-value-of-a-statistical-life>
- Department for Transport. "TAG unit A1.1: cost-benefit analysis." Transport Analysis Guidance.
  <https://www.gov.uk/guidance/transport-analysis-guidance-tag>
