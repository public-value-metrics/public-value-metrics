# Alternatīvās izmaksas publiskajos izdevumos

Alternatīvās izmaksas ir labākās atteiktās alternatīvas vērtība, kad publiska iestāde apņemas naudu,
darbinieku laiku vai politisko kapitālu vienam variantam, nevis citam. Departamentā ar fiksētu budžetu
katra mārciņa, kas iztērēta vienai programmai, ir mārciņa, ko nevar iztērēt nākamajai labākajai
programmai — lēmuma patiesās izmaksas nav tas, ko tas iztērē, bet tas, ko tas izspiež.

## Kāpēc tas ir svarīgi

Publiskie budžeti ir naudas ziņā ierobežoti izdevumu pārskata periodā, tāpēc — atšķirībā no augoša
privāta uzņēmuma — valdības departaments nevar vienkārši "atrast vairāk naudas" labai idejai; tās
finansēšana nozīmē kaut kā cita nefinansēšanu. HM Treasury Green Book to uzskata par pamatprincipu:
katrā izvērtējumā iejaukšanās jāsalīdzina ar "minimālo darbību" bāzlīniju *un* ar reālistiskiem
tā paša resursa alternatīviem izmantošanas veidiem, tieši tāpēc, ka īstais jautājums, ko uzdod
Treasury izdevumu komanda, nekad nav "vai tas ir labi?", bet "vai tas ir labāk par to, ko par šo naudu
varētu iegūt citādi?". Green Book galvenais izvērtēšanas princips — ka publiskajiem resursiem jāplūst
uz iejaukšanos ar augstāko neto sociālo vērtību uz mārciņu — ir alternatīvās izmaksas, formulētas
kā politika.

To ir viegli pateikt un grūti piemērot, jo "nākamā labākā alternatīva" reti ir redzama vienā biznesa
gadījumā. £2 miljonu dotāciju programma jauniešu nodarbinātībai biznesa gadījumā tiek salīdzināta
ar nedarīšanu, bet godīgs salīdzinājuma objekts ir nākamā labākā jauniešu nodarbinātības iejaukšanās vai
patiesi nākamais labākais £2 miljonu izlietojums jebkur portfelī, ieskaitot izdevumus, kas nav saistīti
ar nodarbinātību. Magenta Book (HM Treasury, 2020) skaidri brīdina, ka izvērtējumi, kas salīdzina "ar
iejaukšanos" un "bez iejaukšanās", nenovērtē pietiekami augstu latiņu, kas iejaukšanās jāpārvar,
jo "bez šīs iejaukšanās" nav tas pats, kas "ar neko" — atbrīvotā nauda finansē ko citu.

## Matemātika

```
Alternatīvās izmaksas, izvēloties A = labākās atteiktās alternatīvas B vērtība

A neto publiskā vērtība = vērtība(A) − vērtība(B), nevis vērtība(A) − 0
```

Universālas formulas nav, jo atteiktā alternatīva ir atkarīga no konteksta, bet disciplīna ir
vispārināma: identificējiet reālistisku nākamo labāko tās pašas budžeta pozīcijas izlietojumu (nevis
ideālizētu "nedarīt neko"), novērtējiet to uz tā paša pamata (pēc iespējas naudā, saskaņā ar
[sociālo izmaksu un ieguvumu analīzi](../sociālā-izmaksu-un-ieguvumu-analīze/)) un atņemiet.

## Aprēķina piemērs

**Departamenta budžeta pozīcija**: £5 miljonu digitālās transformācijas fonds šajā finanšu gadā var
finansēt tieši vienu no diviem priekšlikumiem.

- *A variants*: jauna lietu pārvaldības platforma, naudā izteikts ieguvums £7,2 miljoni 5 gados
  (efektivitātes ietaupījumi un ātrāka lietu izskatīšana).
- *B variants*: personas identitātes pārbaudes pakalpojums, ko kopīgi izmanto trīs departamenti, naudā
  izteikts ieguvums £6,4 miljoni 5 gados.

Naivs A biznesa gadījums salīdzina £7,2 miljonus ieguvuma ar £5 miljoniem izmaksu un uzrāda ieguvumu un
izmaksu attiecību 1,44:1 — šķietami spēcīgu. Bet tā kā A un B konkurē par tiem pašiem £5 miljoniem, A
izvēles alternatīvās izmaksas ir B atteiktais £6,4 miljonu ieguvums. *Neto* pamatojums A salīdzinājumā ar
reālistisko alternatīvu ir tikai £7,2 milj. − £6,4 milj. = £0,8 miljoni, nevis pilnie £7,2 miljoni
virsrakstā. Ja trešais variants C par tiem pašiem £5 miljoniem dotu £7,5 miljonu ieguvumu, A finansēšana
C vietā iznīcinātu £0,3 miljonus publiskās vērtības, kaut arī paša A biznesa gadījums atsevišķi šķiet
pilnībā pamatots.

**Pašvaldības darbinieku laiks**: pašvaldības triju cilvēku datu komanda var uzbūvēt vai nu mājokļu rindas
paneli (paredzams, ka ietaupīs 400 amatpersonu stundu gadā, novērtētas ar £28/stundā = £11 200/gadā), vai
pabalstu krāpšanas triāžas rīku (paredzams, ka novērsīs £85 000/gadā nepareizu maksājumu). Paneļa
izveides alternatīvās izmaksas ir atteiktie £85 000/gadā, nevis tikai datu komandas algas izmaksas —
"bezmaksas" iekšējās izstrādes patiesās izmaksas ir daudz lielākais ieguvums, ko komanda būtu varējusi
radīt citur.

## Saikne ar programmatūras inženieriju

Inženierijas jauda publiskā iestādē pati par sevi ir ierobežots budžets — sprinta jauda, nevis mārciņas —,
un tā pati disciplīna attiecas tieši:

- Vienmēr nosauciet salīdzinājuma objektu: funkcijas biznesa gadījumam jānorāda, ko citu varētu piegādāt
  tās pašas komandas nedēļas, nevis tikai pašas funkcijas atdevi.
- Uzskatiet "mums ir brīva inženierijas jauda" par alternatīvo izmaksu analīzes sākumu, nevis beigām —
  brīvajai jaudai arī ir labākais alternatīvais izlietojums, pat ja tas ir tehniskā parāda atmaksāšana
  (skatiet [tehniskais parāds kā publiskās vērtības erozija](../tehniskais-parāds-kā-sabiedriskās-vērtības-erozija/)).
- Saistiet to tieši ar [izmaksu lietderību (value for money)](../vērtība-par-naudu/): VFM "ekonomijas"
  pārbaude ir bezjēdzīga bez godīga alternatīvo izmaksu salīdzinājuma objekta, un ar
  [kavēšanās izmaksām publiskajās programmās](../kavēšanās-izmaksas-publiskajās-programmās/), kas novērtē
  tās pašas atteiktās alternatīvas loģikas laika dimensiju.

## Biežākās kļūdas

- **Salīdzināšana ar "nedarīt neko" nākamās labākās alternatīvas vietā.** Green Book prasa "minimālo
  darbību" bāzlīniju tieši tāpēc, ka patiesās alternatīvās izmaksas reti ir nulle; biznesa gadījums,
  kas pārvar tikai "nedarīt neko" latiņu, nav parādījis, ka pārspēj reālistisko alternatīvu.
- **Starpdepartamentu konkurences par to pašu katlu ignorēšana.** Budžeta pozīcijas, kas vienas
  direkcijas ietvaros šķiet norobežotas, bieži konkurē augstākā līmenī (izdevumu pārskatā, kapitāla
  programmā), kur patiesās alternatīvās izmaksas arī iestājas.
- **Pieņēmums, ka atbrīvotajam darbinieku laikam nav turpmākas vērtības.** Ietaupīts laiks rada vērtību
  tikai tad, ja tiek pārvietots uz kaut ko vērtīgu; ja alternatīva izmantošana nepastāv, ietaupījums ir
  nosacīts.

## Avoti

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation" (2022).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020).
  <https://www.gov.uk/government/publications/the-magenta-book>
- Claxton K, et al. "Methods for the estimation of the NICE cost-effectiveness threshold." Health
  Technology Assessment, 2015;19(14) — the canonical empirical demonstration of opportunity cost as
  a binding constraint in a fixed public budget. <https://www.journalslibrary.nihr.ac.uk/hta/hta19140/>
