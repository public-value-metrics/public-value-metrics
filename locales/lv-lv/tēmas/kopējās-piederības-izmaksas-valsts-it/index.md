# Kopējās piederības izmaksas (TCO) valsts IT

Kopējās piederības izmaksas ir sistēmas pilnais dzīves cikla izmaksu apjoms — iegāde plus katrs ekspluatācijas gads —, diskontēts uz kopīgu datumu. Valsts IT visuzticamākā prognozēšanas kļūda ir piegādātāju vai variantu salīdzināšana tikai pēc iegādes cenas, kaut gan ekspluatācija un uzturēšana parasti veido no puses līdz četrām piektdaļām no mūža rēķina.

## Kāpēc tas ir svarīgi

HM Treasury Green Book pieprasa, lai finanšu pamatojums jebkurā piecu gadījumu modeļa biznesa gadījumā aptvertu visa mūža izmaksas, nevis tikai kapitālizdevumus — tomēr Nacionālais revīzijas birojs ir vairākkārt konstatējis, ka departamenti apstiprina IT ieguldījumus pret nepilnīgu vai optimistisku ekspluatācijas izmaksu prognozi, un patiesās darbības izmaksas atklāj tikai tad, kad sistēma jau darbojas un kapitāla budžeta rinda ir slēgta. Government Digital Service un Central Digital and Data Office Technology Code of Practice (<https://www.gov.uk/guidance/the-technology-code-of-practice>) mudina departamentus uz mākoņa un standarta hostingu daļēji tāpēc, ka tas padara kārtējās izmaksas redzamas un salīdzināmas, nevis paslēptas vienā kapitāla iepirkuma skaitlī, kas apstiprināšanas brīdī šķiet pievilcīgi zems, bet trīs gadus vēlāk izrādās dārgi kļūdains.

## Matemātika

```
TCO = Iegādes izmaksas + Σ(t=1..N) Gada ekspluatācijas izmaksas_t / (1+r)^t
      − atlikusī vērtība (diskontēta)

r = HM Treasury Green Book standarta sociālā diskonta likme, 3,5 %/gadā
    (dilstošas likmes grafiks horizontiem pāri 30 gadiem)

Ekspluatācijas izmaksu komponentes: hostings/licencēšana, atbalsts un uzturēšana,
drošības ielāpi un atbilstība, darbinieku laiks, plānota atjaunināšana/migrācija
```

Skatiet [sociālā diskonta likme](../sociālā-diskonta-likme/), kāpēc diskonta faktors ir svarīgs tipiskam 5–10 gadu sistēmas mūžam, un [veidot vai pirkt valdībā](../veidot-vai-pirkt-valdībā/), kā TCO ieplūst būvēšanas/pirkšanas lēmumā.

## Aprēķina piemērs

Departaments salīdzina divas lietu pārvaldības sistēmas 5 gadu horizontā ar Green Book 3,5 % diskonta likmi.

```
A sistēma: kapitālizdevumi £3 500 000, ekspluatācijas izmaksas £250 000/gadā
B sistēma: kapitālizdevumi £1 800 000 (šķiet lētāka), ekspluatācijas izmaksas £650 000/gadā
          (lielāks piegādātāja atbalsta un integrācijas slogs)

Naivs salīdzinājums tikai pēc kapitālizdevumiem: uzvar B, £1,8 milj. < £3,5 milj.

Diskonta faktoru summa, 5 gadi pie 3,5 %: 0,966+0,934+0,902+0,871+0,842 ≈ 4,515

TCO_A = 3 500 000 + 250 000 × 4,515 = 3 500 000 + 1 128 750 = £4 628 750
TCO_B = 1 800 000 + 650 000 × 4,515 = 1 800 000 + 2 934 750 = £4 734 750
```

TCO apgriež naivo lēmumu: B sistēma ir nedaudz dārgāka piecos gados, kad ekspluatācijas izmaksas ir diskontētas un summētas, jo tās ekspluatācijas izmaksu daļa mūža izmaksās ir 62 % (2 934 750 / 4 734 750) pret A sistēmas 24 % — konkrēts piemērs atziņai „uzturēšana ir lielākā rēķina daļa", ko pilnībā noslēpj cenu uzlīmju salīdzināšana.

## Saikne ar programmatūras inženieriju

TCO ir skaitlis, kam jādisciplinē katrs [veidot vai pirkt](../veidot-vai-pirkt-valdībā/) lēmums un katrs [tehniskā parāda](../tehniskais-parāds-kā-sabiedriskās-vērtības-erozija/) atmaksāšanas pamatojums, jo parāda procenti un atliktā uzturēšana ir ekspluatācijas izmaksu rindas, kam jābūt vienā diskontētā kopsummā neatkarīgi no tā, vai kāds tās ir izsekojis. Inženieriem, kas piedāvā platformas vai piegādātāja izvēli, jāuzrāda pilna TCO tabula, nevis iepirkuma cena, jo iepirkuma cena ir tieši tas skaitlis, uz kuru vien paļauties Green Book finanšu pamatojums bija paredzēts departamentiem liegt. TCO ir arī godīgs saucējs [vērtības par naudu](../vērtība-par-naudu/) spriedumiem — VFM salīdzina ieguvumu ar izmaksām, un nenovērtēta izmaksu rinda piepūš katru VFM attiecību biznesa gadījumā.

## Biežākās kļūdas

- **Salīdzināšana tikai pēc kapitālizdevumiem**: visbiežākā iepirkumu kļūda — piegādātāju cenrāžu salīdzināšana bez saskaņotas ekspluatācijas izmaksu prognozes katram variantam.
- **Izejas un migrācijas izmaksu izslēgšana**: datu izgūšana līguma beigās, pārplatformēšana un piegādātāja piesaistes sodi ir īstas TCO rindas, kas reti parādās sākotnējā biznesa gadījumā.
- **Drošības un atbilstības izmaksu izslēgšana**: ielāpu biežums, akreditācijas atjaunošana un revīzijas izmaksas aug līdz ar sistēmas vecumu un sarežģītību — skatiet [publiskā sektora kiberdrošības vērtība](../publiskā-sektora-kiberdrošības-vērtība/) — un tās ierasti tiek izlaistas no ekspluatācijas izmaksu prognozes.
- **Nediskontēts salīdzinājums starp variantiem ar atšķirīgiem izmaksu profiliem**: kapitālizdevumu ietilpīga varianta salīdzināšana ar ekspluatācijas izmaksu ietilpīgu bez diskontēšanas sistemātiski dod priekšroku tam, kurš nejauši atliek vairāk izmaksu uz vēlākiem gadiem.

## Avoti

- HM Treasury, *The Green Book: Central Government Guidance on Appraisal and Evaluation*, 2022. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
- Central Digital and Data Office, Technology Code of Practice. <https://www.gov.uk/guidance/the-technology-code-of-practice>
- National Audit Office, *Digital Transformation in Government*. <https://www.nao.org.uk/>
