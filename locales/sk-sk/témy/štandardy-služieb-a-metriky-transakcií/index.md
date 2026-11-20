# Štandardy služieb a metriky transakcií

GOV.UK Service Standard je 14-bodový kontrolný zoznam britskej vlády na budovanie a prevádzku verejnej
digitálnej služby a prichádza so spárovanou, malou, povinnou sadou kvantitatívnych metrík transakcií
(náklady na transakciu, miera dokončenia, digitálne využívanie a spokojnosť používateľov), ktoré
tímy musia zverejňovať pre každú živú službu ústrednej vlády. Štandard a metriky spolu sú
prevádzkovou, každodennou špecializáciou širších rámcov verejnej hodnoty a KPI v tomto repozitári,
cielenou priamo na softvérové dodávacie tímy.

## Prečo na tom záleží

Service Standard, spravovaný v servisnej príručke GOV.UK (service manual), vyžaduje, aby každé
posúdenie digitálnej služby vlády k určitému bodu (alfa, beta, live) preukázalo, okrem iných zo svojich
14 bodov, že tím rozumie potrebám používateľov, pracuje v multidisciplinárnom tíme, často iteruje a
zlepšuje a *hodnotí nástroje, systémy a spôsoby práce*. Historicky popri ňom existovala verejná
Performance Platform, kde každá živá služba otvorene zverejňovala údaje o transakciách; táto platforma
bola medzitým zrušená, ale základná povinnosť merať a zverejňovať tieto štyri základné metriky
pretrváva prostredníctvom usmernenia „measuring success“ v servisnej príručke. Dôvod, prečo sa to
líši od všeobecného dashboardu softvérových KPI, je, že tieto metriky boli výslovne navrhnuté ako
jeden prepojený ekonomický model, nie štyri nezávislé skóre: celý prípad úspor digitálnej vlády
(Digital Efficiency Report Government Digital Service zistil, že digitálne transakcie sú zhruba 20-krát
lacnejšie než telefonické a približne 50-krát lacnejšie než osobné pri porovnateľných službách
miestnej samosprávy) sa zhmotní, len ak miera dokončenia zostane vysoká a digitálne využívanie
skutočne rastie, a nielen pridáva lacný kanál popri nezmenenom drahom.

## Matematika

```
Náklady na transakciu = celkové prevádzkové náklady služby / počet dokončených transakcií
Miera dokončenia      = dokončené transakcie / začaté transakcie × 100
Digitálne využívanie  = transakcie digitálnym kanálom / transakcie všetkými kanálmi × 100
Spokojnosť používateľov = % spokojných + veľmi spokojných, v službe 5-bodový prieskum

Úspora z presunu kanálov = objem transakcií × posun využívania × (náklady na transakciu
                            v starom kanáli − náklady na transakciu digitálne)

Náklady zlyhania dopytu = (1 − miera dokončenia) × digitálne pokúšané transakcie ×
                           náklady záložného kanála, ktorý títo používatelia potom použijú
```

## Vypracovaný príklad

**Ilustratívna služba obnovy licencie ústrednej vlády**, 2 milióny transakcií ročne, v súčasnosti
65 % telefonicky (£3,00/transakcia) a 35 % digitálne (£0,30/transakcia), miera dokončenia 80 %.
Prepracovanie podľa 14-bodového Service Standard zvýši digitálne využívanie na 60 % a dokončenie na
92 %:

```
Úspora z posunu využívania = 2 000 000 × 0,25 × (3,00 − 0,30) = £1 350 000/rok

Náklady zlyhania dopytu, pred:
  2 000 000 × 0,35 × (1 − 0,80) × £3,00 = £420 000/rok (opustitelia sa vracajú k telefónu)

Náklady zlyhania dopytu, po:
  2 000 000 × 0,60 × (1 − 0,92) × £3,00 = £288 000/rok

Čistá úspora zo zlyhania dopytu = £420 000 − £288 000 = £132 000/rok

Celková ročná úspora ≈ £1 350 000 + £132 000 = £1 482 000/rok
```

Aritmetika objasňuje, prečo miera dokončenia nie je druhoradá metrika: bez zlepšenia z 80 % na 92 %
by sa úspora z posunu využívania čiastočne stratila v dôsledku zlyhania dopytu, ktoré by frustrovaných
digitálnych používateľov vrátilo priamo do drahého telefonického kanála.

## Súvislosť so softvérovým inžinierstvom

Tieto štyri metriky sú funkčným príkladom dashboardu nákladov a dôsledkov: jedna nákladová metrika
držaná oddelene od troch metrík výsledkov/kvality, zámerne nikdy nezlúčená do jedného skóre, rovnaká
disciplína, ktorú obhajuje téma [KPI verejného sektora](../kpi-verejného-sektora/). Pre inžinierov sa to
rozpadá na konkrétnu, prideliteľnú prácu: miera dokončenia je problém inštrumentácie lievika a každé
miesto opustenia na ceste je v zásade lokalizovateľné a opraviteľné; náklady na transakciu vyžadujú
skutočné jednotkové nákladové účtovníctvo vrátane nákladov na kanály s asistenciou zamestnancov a
papierové kanály, nielen výdavkov na cloudový hosting (pozri [náklady na transakciu](../náklady-na-transakciu/) a
[celkové náklady vlastníctva vo vládnom IT](../celkové-náklady-vlastníctva-vo-vládnom-it/)); a
digitálne využívanie je metrika spravodlivosti v kostýme efektívnosti: občania, ktorí nemôžu alebo
nechcú zmeniť kanál, sú neúmerne starší, zdravotne postihnutí alebo digitálne vylúčení, takže
agresívne rušenie kanálov mení „úsporu“ na ujmu v prístupe (pozri
[digitálnu inklúziu](../digitálne-začlenenie/) a [úspory z presunu kanálov](../úspory-z-presunu-medzi-kanálmi/)).
Samotný 14-bodový štandard je procesná špecifikácia za týmito číslami; štandard v plnom znení pozri v
téme [štandard digitálnej služby](../štandard-digitálnych-služieb/) a o tom, ako sa tu uvedený údaj o
spokojnosti vzťahuje k širšiemu meraniu dôvery, v téme
[metriky spokojnosti občanov](../metriky-spokojnosti-občanov/).

## Úskalia

- **Využívanie získané zrušením alternatívneho kanála**: zatvorenie telefonickej linky aritmeticky
  zvýši percento digitálneho využívania, no zároveň presunie zlyhanie dopytu na ktorýkoľvek zostávajúci
  kanál (často drahšiu asistovanú digitálnu alebo osobnú cestu); vždy merajte náklady celého systému,
  nie samotný pomer.
- **Meranie miery dokončenia od druhého kroku lievika**: začatie počtu „začatých“ po prvom skutočnom
  bode opustenia prikrášľuje mieru dokončenia a skrýva najväčšiu opraviteľnú stratu.
- **Náklady na transakciu bez asistovanej digitálnej podpory**: čisto digitálne jednotkové náklady,
  ktoré ignorujú čas zamestnancov strávený pomáhaním používateľom, ktorí si nevedia pomôcť sami,
  podhodnocujú skutočné náklady kanála.
- **Zverejňovanie metrík bez spoločnej definície naprieč službami**: „transakcia“ a „dokončené“
  znamenajú rôzne veci v rôznych tímoch služieb, pokiaľ sa definície neštandardizujú a neverzujú, čím
  sa porovnávanie medzi službami stáva nespoľahlivým.

## Zdroje

- GOV.UK Service Manual, "The Service Standard." <https://www.gov.uk/service-manual/service-standard>
- GOV.UK Service Manual, "Measuring Success — Data You Must Publish."
  <https://www.gov.uk/service-manual/measuring-success/data-you-must-publish>
- GOV.UK, "Digital Efficiency Report."
  <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
