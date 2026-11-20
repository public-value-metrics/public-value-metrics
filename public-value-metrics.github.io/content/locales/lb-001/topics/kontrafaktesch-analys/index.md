# Kontrafaktesch Analys

E Kontrafaktum ass eng Schätzung dovun, wat ouni eng Interventioun geschitt wier. Ouni et kann eng observéiert Ännerung nom Start vun engem Programm net vun enger Ännerung ënnerscheet ginn, déi souwisou agetruede wier – kee Kontrafaktum, kee Beweis vun enger Wierkung, egal wéi iwwerzeegend d'Zuele virun an no ausgesinn. De Magenta Book vum HM Treasury behandelt d'Opbauen vun engem glafwürdege Kontrafaktum als déi zentral methodesch Aufgab vun der Wierkungsevaluatioun, méi wichteg wéi all aner eenzel Designentscheedung.

## Firwat et wichteg ass

„D'Kriminalitéit ass am Joer nodeem mir de Programm agefouert hunn em 15 % gefall" ass kee Beweis, datt de Programm gewierkt huet, ausser ee weess, wat ouni hie mat der Kriminalitéit geschitt wier – si kéint souwisou em 20 % gefall sinn, wéinst net verwandte wirtschaftlechen oder demografeschen Trends, wat heescht, datt de Programm d'Saache relativ zum Kontrafaktum tatsächlech méi schlëmm gemaach huet, trotz der verbesserter Rohzuel. Dëst ass de gängegste analytesche Feeler an Aussoe iwwer d'Wierkung am ëffentleche a sozialen Secteur: e Virun-an-Nom-Verglach fir e Beweis vu Kausalitéit ze huelen. De Magenta Book ass ausdrécklech, datt d'Wierkungsevaluatioun do ass, fir eng kontrafaktesch Fro ze beäntweren – „wéi eng Differenz huet dës Interventioun gemaach?" – a datt dat Beäntwerten e Schätze verlaangt, net just e Beschreiwe vun der Welt, déi net geschitt ass.

Verschidde Methode konstruéieren d'Kontrafaktum mat ënnerschiddleche Vertrauensgrade, an d'Evaluatiounsleetlinne vun der Regierung rangéieren se entspriechend. Randomiséiert kontrolléiert Studien (RCT), bei deenen Eenzelpersounen oder Gebidder zoufälleg zougewise kréien, eng Interventioun ze kréien oder net, produzéieren dat stäerkst Kontrafaktum, well d'Randomiséierung suergt, datt sech Behandlungs- a Kontrollgrupp am Duerchschnëtt nëmmen doran ënnerscheeden, d'Interventioun ze kréien. Dat Cabinet Office an den What Works Network hunn RCTen an der britescher ëffentlecher Politik zënter dem Rapport „Test, Learn, Adapt" vum Behavioural Insights Team vun 2012 gefërdert, genee well méi schwaach Designer fir Confounding ufälleg sinn – de beobachteten Ënnerscheed kann reflektéieren, wien sech fir d'Deelnahm entscheet huet, net d'Wierkung vum Programm. Wou d'Randomiséierung onpraktesch oder onethesch ass (wéi dacks bei Programmer mat gesetzlechem Usproch oder bei Politikännerunge fir déi ganz Populatioun), stellt de Magenta Book eng explizit Hierarchie vu méi schwaachen, awer ëmmer nach nëtzlechen Alternativen op: zougeuerdnet Vergläichsgruppen, Difference-in-Differences-Designer, Regressiounsdiskontinuitéit ronderëm Berechtegungsschwellen an, als läscht Mëttel, e einfache Virun-an-Nom-Verglach – kloer als déi schwaachst Form vu Beweis markéiert, ufälleg dofir, d'Wierkung vum Programm mat der Wierkung vun allem aneren ze verwiesselen, wat sech gläichzäiteg geännert huet.

## D'Mathematik

De kontrafaktesche Rahmen, ugewannt bei all Methoden:

```
Geschätzte Wierkung = Resultat(mat Interventioun) − Resultat(Kontrafaktum: ouni Interventioun)

NET:
Geschätzte Wierkung ≠ Resultat(duerno) − Resultat(virdrun)   [verwiesselt Zäit mat Behandlung]
```

Difference-in-Differences, ee vun de gängegste quasi-experimentellen Designer an der Evaluatioun vun der Regierung, isoléiert den Behandlungseffekt, andeems déi eege Virun-an-Nom-Ännerung vun der Vergläichsgrupp ofgezu gëtt:

```
DiD-Schätzung = [Resultat(behandelt, duerno) − Resultat(behandelt, virdrun)]
              − [Resultat(Verglach, duerno) − Resultat(Verglach, virdrun)]
```

Dat entfernt all Trend, deen déi zwou Gruppen gemeinsam hunn (z. B. eng nationale wirtschaftlech Verréckelung, déi jidderee betrëfft), a léisst nëmmen déi differenziell Ännerung iwwereg, déi der Interventioun zougeuerdnet ka ginn.

## Rechebeispill

**Beschäftegungsprogramm, Virun-an-Nom (schwaacht Design)**: e Programm zur Jobënnerstëtzung mellt, datt d'Beschäftegung vun den Deelnehmer am Laf vun engem Joer vun 40 % op 55 % geklomme ass – eng naiv Conclusioun vu „+15 Prozentpunkten wéinst dem Programm".

**Selwecht Programm, Difference-in-Differences (méi staarkt Design)**: eng zougeuerdnet Vergläichsgrupp vun ähnleche Net-Deelnehmer, aus dem selwechte lokalen Aarbechtsmaart, weist, datt d'Beschäftegung am selwechte Joer vun 38 % op 47 % geklomme ass (eng nationale wirtschaftlech Erhuelung war am Gaang).

```
Ännerung vun der behandelter Grupp: 55 % − 40 % = +15 Prozentpunkten
Ännerung vun der Vergläichsgrupp:   47 % − 38 % = +9 Prozentpunkten

DiD-Schätzung (richteg Wierkung vum Programm) = 15 − 9 = +6 Prozentpunkten
```

Déi éierlech zouschreiwbar Wierkung sinn 6 Prozentpunkten, net 15 – méi wéi d'Halschent vun der scheinbarer Verbesserung virun-an-nom wier souwisou agetruede, getriwwen vun där selwechter wirtschaftlecher Erhuelung, déi och d'Vergläichsgrupp geluecht huet.

**Regressiounsdiskontinuitéit, Berechtegungsschwell**: e Fërderprogramm ass nëmme fir Betriber mat manner wéi 50 Beschäftegten zougänglech. Resultater fir Betriber knapp ënner der Schwell (45–49 Beschäftegt, berechtegt) mat Betriber knapp driwwer (50–54 Beschäftegt, net berechtegt) ze vergläichen, gëtt e glafwürdegt Kontrafaktum, well Betriber op béide Säite vun enger arbiträrer administrativer Grenz soss ähnlech sinn – d'Schwell, net eng zougrondeliggend Eegenschaft vum Betrib, bestëmmt d'Berechtegung. En duerchschnëttlechen Ënnerscheed vum Resultat vun £2.000 tëscht deenen zwou Gruppen, nëmmen un der Schwell observéiert, ass der Fërderung mat vill méi Sécherheet zouzeschreiwen wéi en einfache Verglach vun alle berechtegte mat alle net berechtegte Betriber (déi sech systematesch an der Gréisst ënnerscheeden).

## Verbindung zur Softwareentwécklung

Kontrafaktescht Denken sollt forme, wéi Systemer fir d'Verfollegung vun der Wierkung an Evaluatiouns-Pipelines fir Software an der Verwaltung a vum sozialen Secteur designt ginn:

- D'Erfaassung vun enger Vergläichsgrupp vun Ufank u an e System abauen – opzeechnen, wien berechtegt, awer net ageschriwwen war, oder eng zougeuerdnet Kohort vu Net-Deelnehmer – amplaz se nodréiglech anzebauen, nodeems e Programm schonn gelaf ass an et nëmmen Daten virun an no gëtt.
- Wou Randomiséierung machbar ass (en Ausroll a Phasen, en digitalen Déngscht, deen fir e puer Benotzer virun anere fräigeschalt gëtt), de System esou instrumentéieren, datt déi zoufälleg Zouuerdnung als ofrufbart Feld erhale bleift; en Ausroll a Phasen zerstéiert versehentlech säin eegene Evaluatiounswäert, wann d'Reiefolleg vun der Zouuerdnung net protokolléiert gëtt.
- Dëst ass déi grondleeënd Method hannert de [Methode vun der Wierkungsevaluatioun](../methode-fir-wierkungsevaluatioun/) a ass dat, wat se vun der [Wierkungsevaluatioun vs Prozessevaluatioun](../wierkungsevaluatioun-vs-prozessevaluatioun/) ënnerscheet, déi lescht freet, ob e Programm wéi virgesinn geliwwert gouf, amplaz ob en en Effekt verursaacht huet.
- [Additionalitéit a Matnahmeeffekt](../additionalitéit-a-matnahmeeffekt/) a [Verdrängung an Zouuerdnung](../verdrängung-a-zouerdnung/) sinn allen zwee, am Fong, kontrafaktesch Froen – de Matnahmeeffekt ass „wat wier dëst spezifescht Resultat ouni d'Interventioun gewiescht", ugewannt um Niveau vun der Upassung amplaz vum komplette Evaluatiounsdesign.

## Feelerquellen

- **Virun-an-Nom als Beweis vu Kausalitéit behandelen.** Dat ass de gängegsten a folgenräichste Feeler an der Berichterstattung iwwer d'Wierkung am ëffentleche a sozialen Secteur; eng Virun-an-Nom-Ännerung verwiesselt d'Wierkung vum Programm mat allem aneren, wat sech am selwechten Zäitraum geännert huet.
- **Eng Vergläichsgrupp benotzen, déi sech systematesch vun der behandelter Grupp ënnerscheet.** Eng zougeuerdnet Vergläichsgrupp muss bei de relevante Charakteristiken wierklech ähnlech sinn (kuckt d'Hierarchie vun de Methoden vun der [kontrafaktescher Analys](../kontrafaktesch-analys/) am Magenta Book); Programmdeelnehmer (déi sech fräiwëlleg ugemellt hunn an dacks méi motivéiert sinn) mat Net-Deelnehmer (déi et net hunn) ze vergläichen riskéiert Selektiounsbiais, dee sech als Wierkung vum Programm verkleet.
- **Randomiséierungsméiglechkeeten duerch schlecht Liwwerdesign zerstéieren.** En Ausroll a Phasen oder randomiséierten Ausroll behält säin Evaluatiounswäert nëmmen, wann d'Zouuerdnung wierklech zoufälleg an opgeholl ass – lokale Manager wielen ze loossen, wien als éischt drukënnt, mécht den Zweck zu Nëss.
- **Zevill Präzisioun aus engem schwaachen Design behaapten.** E Virun-an-Nom-Schätzung soll als Indikatioun presentéiert ginn, net als gemoossen Effektgréisst; d'Beweishierarchie vum Magenta Book gëtt et, fir datt d'Stäerkt vun enger Behaaptung der Stäerkt vum Design entsprécht, deen se produzéiert huet.

## Quellen

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020), and its
  supplementary guide on quasi-experimental methods.
  <https://www.gov.uk/government/publications/the-magenta-book>
- Cabinet Office / Behavioural Insights Team, "Test, Learn, Adapt: Developing Public Policy with
  Randomized Controlled Trials" (2012).
- What Works Network, standards of evidence guidance. <https://www.gov.uk/guidance/what-works-network>
- Angrist JD, Pischke J-S. *Mostly Harmless Econometrics: An Empiricist's Companion*. Princeton
  University Press, 2009 (standard reference for difference-in-differences and regression
  discontinuity methods).
