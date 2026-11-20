# Käschten-Effektivitéitsanalys an der Verwaltung

D'Käschten-Effektivitéitsanalys (Cost-Effectiveness Analysis, CEA) vergläicht d'Käschte vu verschiddene Weeër, fir *dat selwecht* Resultat ze erreechen, ausgedréckt a natierlechen Eenheeten – Käschte pro ënnerbruechten Obdachlosen, Käschte pro Schüler, deen op de erwaarten Niveau bruecht gouf, Käschte pro Tonn CO2, déi vermidden ass –, ouni d'Resultat selwer a Geld ëmzerechnen.

## Firwat et wichteg ass

D'Green Book behandelt CEA als Ausweichmethod, wann d'Fuerderung vun der [sozialer Käschten-Notzen-Analyse](../sozial-käschte-notze-analys/), all Notzen ze monetiséieren, net nëmme schwéier, mä onéierlech gëtt – wou en glafwürdege Präis fir d'Resultat Annahmen erfuerdere géif, déi keen tatsächlech deelt (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>, Chapter 5, iwwer d'Optiounsappraisal, wou Resultater net einfach monetiséierbar sinn). CEA ass d'Method, déi am direkteste vun der Gesondheetsökonomie ausgeléint ass – si ass strukturell identesch domat, wéi NICE Behandlungen no Käschte pro Quality-Adjusted Life Year (QALY) vergläicht –, awer op net-gesondheetlech ëffentlech Programmer ugewannt: Bildungsmoossnamen pro Punkt beim Schülerresultat, Wunnengsprogrammer pro Haushalt, dee virun Obdachlosegkeet bewahrt gouf, Beschäftegungsprogrammer pro nohaltegt Aarbechtsresultat.

De Grond, firwat CEA niewent SCBA seng Plaz verdéngt, amplaz vun hir ofsorbéiert ze ginn, ass, datt e monetäre Wäert fir verschidde Resultater ze erzwéngen eng Zuel produzéiert, déi präzis genuch ass, fir autoritär auszegesinn, an ëmstridden genuch, fir an enger ëffentlecher Debatt wäertlos ze sinn – e Präis fir „e Kand, dat um erwaarten Niveau liest" invitéiert genee déi Aart vun Erausfuerderung, déi e Businesscase virum Select Committee zum Entgleise brénge kann. CEA ëmgeet den Argument, andeems si refuséiert, en ze féieren: si rangéiert Optiounen no Käschte pro Eenheet vum *Resultat selwer* a léisst déi getrennt politesch Beurteelung, ob d'Resultat iwwerhaapt gewënscht gëtt, dem strategesche Case iwwer.

## D'Mathematik

```
Käschten-Effektivitéitsverhältnis (Duerchschnëtt) = Gesamtkäschten / Gesamtzuel vun den erreechten Resultateenheeten

Inkrementellt Käschten-Effektivitéitsverhältnis (ICER), Optioun A mat Optioun B vergläichen:
ICER = (Käschte_A − Käschte_B) / (Resultat_A − Resultat_B)

Prozedur:
1. D'Resultateenheet an d'Miessmethod fir all vergleechen Optioun festleeën.
2. All Optioun op der selwechter Basis berechnen (kuckt ../green-book-appraisal/, finanzielle Case)
   iwwer deeselwechten Zäithorizont.
3. Dominéiert Optioune verwerfen: all Optioun, déi pro Eenheet méi kascht wéi eng
   méi bëlleg Alternativ, déi dat selwecht oder e besseret Resultat erreecht, gëtt ofgeluecht.
4. Déi verbleiwen Optiounen no dem inkrementelle, net dem Duerchschnëttsverhältnis, rangéieren.
```

CEA ka vu sech aus net soen, ob e Programm iwwerhaapt finanzéiert soll ginn – nëmmen, wéi eng vu verschiddene Weeër zum selwechte Ziel pro Eenheet am bëllegsten ass. Ze entscheeden, ob d'Ziel selwer d'Ausgab wäert ass, verlaangt entweder d'Ëmwandlung zréck an SCBA (wann eng glafwürdeg Bewäertung existéiert) oder eng politesch/strategesch Beurteelung ausserhalb vun der Mathematik. Wou Resultater sech wierklech net op eng Eenheet reduzéiere loossen – well e Programm verschidde Resultater produzéiert, déi op ënnerschiddlech Aart wichteg sinn –, benotzt amplaz [multikriteriell Entscheedungsanalys](../multikriteriell-entscheedungsanalyse/).

## Rechebeispill

**Lokal Verwaltung**: e Rot vergläicht dräi Approche fir d'Reduktioun vum Schlofe baussen, jidderee berechent iwwer ee Joer géint d'Resultat „Eenzelpersounen, déi fir 6+ Méint a stabil Ënnerkonft geplënnert sinn":

```
Optioun                          Käschten   Erreecht Resultater   Duerchschn. CER
Housing First (intensiv)         £900.000   60                    £15.000/Resultat
Hostel + Ënnerstëtzung beim Wiessel  £600.000   50                £12.000/Resultat
Outreach + privat Locatioun      £350.000   20                    £17.500/Resultat

ICER, Hostel vs Outreach:  (600k−350k)/(50−20) = £8.333 pro zousätzlecht Resultat
ICER, Housing First vs Hostel: (900k−600k)/(60−50) = £30.000 pro zousätzlecht Resultat
```

Outreach gëtt beim Duerchschnëttskäschte vum Hostel dominéiert, awer de *inkrementelle* Schrëtt vun Outreach op Hostel kascht nëmmen £8.333 pro zousätzlech ënnerbruecht Persoun – bëlleg am Verglach zum Schrëtt op Housing First, deen £30.000 fir all zousätzlech Persoun iwwer dat eraus kascht, wat Hostel erreecht. Eng Verwaltung mat engem begrenzte Budget, déi ausbaut, sollt den Ausbau vum Hostel virun Housing First bevorzugen, och wann Housing First op sengem eegenen Duerchschnëttsverhältnis besser ausgesäit.

**Nationale Regierung**: e Programm fir Liesen-Opholen gëtt iwwer dräi Liwwermodeller vergläicht, no „Käschte pro Schüler, deen den alterserwaarten Niveau am Liesen erreecht": Eenzelnachhëllef (£1.800/Schüler), Nachhëllef a klenge Gruppen (£700/Schüler) an eng rein digital Moossnam (£150/Schüler, awer nëmmen 40 % vun der Resultatquote vun der Nachhëllef a klenge Gruppen pro ageschriwwene Schüler, wann un de Réckgang vum Engagement ugepasst gëtt). Un déi tatsächlech Ofschlossquote ugepasst, kascht déi rein digital Moossnam £375 pro Schüler, deen den Niveau erreecht – ëmmer nach déi bëllegst, mä CEA ka net soen, ob déi méi kleng absolut Zuel vu Schüler, deenen déi rein digital Moossnam hëlleft, wann se mam selwechte Budget wéi d'Nachhëllef a klenge Gruppen geliwwert gëtt, e akzeptabelen Tausch géint d'Erreeche vu manner Schüler mat méi Déift ass; dat ass eng Verdeelungsbeurteelung, déi CEA un d'Entscheedungsträger zréckgëtt.

## Verbindung zur Softwareentwécklung

CEA ass de richtege Rahmen, wann Ingenieursteamen Ëmsetzungsapprochen fir *dat selwecht* Service-Resultat evaluéieren – Käschte pro erfollegräich verifiéiert Identitéit bei dräi Anbieter fir Identitéitsverifizéierung, Käschte pro korrekt triagéierte Fall bei zwee Designe fir Sachbeaarbechtungsautomatiséierung, Käschte pro behobene Barrièrefräiheetsdefekt bei interner géint ausgelagert Sanéierung. D'Disziplin, déi se direkt matbréngt: d'Resultateenheet definéieren, ier Käschte vergläicht ginn (net „zougemaachte Tickets" – en Output – mä „Benotzerbedierfnes wierklech geléist"), an ëmmer dat inkrementellt Verhältnis tëscht dem Live-System an engem virgeschloene Remplacement berechnen, net den Duerchschnëttskäschte vun all System isoléiert. Kuckt [Outcomes vs Outputs](../outcomes-vs-outputen-resultater-a-leeschtungen-ënnerscheeden/) an [Käschte pro Resultat](../käschte-pro-resultat/).

## Feelerquellen

- **Duerchschnëtts- amplaz inkrementell Verhältnisser vergläichen, wann iwwer en Ausbau entscheet gëtt.** Wéi d'Beispill vum Schlofe baussen weist, ass d'Optioun mam beschten Duerchschnëttsverhältnis net ëmmer déi bëllegst nächst Eenheet vum Resultat, déi ze kafe wier.
- **Eng Resultateenheet wielen, déi eigentlech en Output ass.** „Gemaach Iwwerweisungen" oder „geliwwert Sëtzungen" moossen Aktivitéit, net d'Resultat, fir dat de Programm do ass; CEA op Outputs produzéiert eng sécher ausgesinn Zuel, déi déi falsch Fro beäntwert.
- **Tëscht wierklech ënnerschiddleche Resultater vergläichen.** CEA ass nëmmen valabel, wann all Optioun dat selwecht Resultat op déiselwecht Aart gemooss unzielt; „Käschte pro ënnerbruechten Obdachlosen" géint „Käschte pro Care Leaver an enger stabiler Mietwunneng" ze vergläichen verlaangt eng generesch Resultatmoossnam oder [multikriteriell Entscheedungsanalys](../multikriteriell-entscheedungsanalyse/), net CEA.
- **D'Duerhaftegkeet vum Resultat ignoréieren.** Eng méi bëlleg Optioun, déi Resultater produzéiert, déi net bestoe bleiwen (e Schüler, deen nom Enn vun der Interventioun zréckfält), ass tatsächlech net méi käschteneffektiv, wann iwwer en vergläichbaren Horizont gemooss gëtt; d'Nofollegperiod bei de vergleechen Optiounen aneneen upassen.

## Quellen

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Chapter 5.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- National Institute for Health and Care Excellence. "Developing NICE guidelines: the manual" –
  d'Methode zur Käschten-Effektivitéit, vun där dës Upassung fir d'Verwaltung ausléint.
  <https://www.nice.org.uk/process/pmg20>
- What Works Centre for Homelessness Impact. Cost-effectiveness evidence on homelessness
  interventions. <https://whatworks-homelessness.org.uk/>
