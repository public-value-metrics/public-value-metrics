# Methode fir Wierkungsevaluatioun

Methode fir Wierkungsevaluatioun si statistesch an experimentell Designen, déi benotzt ginn, fir ze schätzen, wat eng Politik oder e Programm tatsächlech verursaacht huet, am Ënnerscheed zu deem, wat souwisou geschitt wier – randomiséiert kontrolléiert Studien (RCTs), Differenz-vun-Differenzen, Propensity-Score-Matching a Regressiounsdiskontinuitéitsdesign sinn déi véier am dackste benotzt an der britescher Politik. Si gëtt et, well déi meescht Regierungsinterventioune sech net am Labo testen loossen: Dir kënnt net randomiséieren, wéi eng Stad eng nei Buslinn kritt, esou wéi Dir randomiséiere kënnt, wéi e Patient en Medikament kritt, dofir léinen dës Methoden déiselwecht kausal Logik, ouni ëmmer eng zoufälleg Zouweisung ze verlaangen.

## Firwat et wichteg ass

Dem HM Treasury säi Magenta Book, Annex A iwwer quasi-experimentell Methoden, ass dem Regierungsleitfaden vum Vereenegte Kinnekräich fir d'Wiel tëscht dëse Designen, an Organer wéi d'Education Endowment Foundation an d'What Works Centre for Local Economic Growth institutionaliséieren eng Evidenzhierarchie, déi dorëms opgebaut ass – RCTs, wou Randomiséierung machbar an ethesch ass, quasi-experimentell Designen, wou se et net ass. D'Wiel vun der Method ass keen technesche Nogedanken: si bestëmmt, ob eng Evaluatioun d'Fro „huet de Programm dëst verursaacht?“ beäntwerte kann oder nëmmen „ass dëst geschitt, nodeems de Programm ugefaang huet?“, wat déiselwecht Fro ass, déi [kontrafaktesch Analys](../kontrafaktesch-analys/) Praktiker zwéngt ze stellen, ier eng Evaluatioun a Optrag gëtt.

## D'Mathematik

```
RCT:
  Wierkung = Mëttel(Resultat | Behandlungsgrupp) − Mëttel(Resultat | Kontrollgrupp)
  (valabel, well d'Zouweisung zur Behandlung zoufälleg ass)

Differenz-vun-Differenzen (DiD):
  Wierkung = [Resultat_duerno(behandelt) − Resultat_virdrun(behandelt)]
           − [Resultat_duerno(Kontroll) − Resultat_virdrun(Kontroll)]
  (brauch eng „parallel Trends“-Annahm: behandelt a Kontroll hätte sech
   ouni d'Interventioun zesumme bewegt)

Propensity-Score-Matching (PSM):
  1. P(Behandlung = 1 | Kovariaten X) fir all Eenheet schätzen → Propensity Score
  2. Behandelt Eenheeten mat onbehandelten Eenheete vu vergläichbarem Propensity Score matchen
  3. Wierkung = Mëttel(Resultat | behandelt) − Mëttel(Resultat | gematchte Kontroll)

Regressiounsdiskontinuitéitsdesign (RDD):
  Wierkung = Sprong am Resultat un der Berechtigungsschwell,
             Eenheeten direkt driwwer mat deene direkt drënner vergläichen
```

## Rechebeispill

**Gemeng (Differenz-vun-Differenzen fir e Programm fir Familljen a Schwieregkeeten)**: d'Resultat ass d'Schoulbesuchsquote. D'behandelt Géigend geet vun 84 % op 89 % Besuch (+5 Prozentpunkten) iwwer d'Programmperiod; eng vergläichbar, awer onbehandelt Géigend geet am selwechten Zäitraum vun 85 % op 87 % (+2 Prozentpunkten). DiD-Wierkungsschätzung: 5 − 2 = +3 Prozentpunkten, dem Programm zouzeschreiwen. Op eng Kohort vun 2.000 Schüler an der behandelter Géigend ugewannt, passt dat zu ongeféier 60 zousätzleche Schüler (3 % × 2.000), déi déi méi héich Besuchskategorie erreechen, eng Extrapolatioun, déi mat hirer Parallel-Trends-Virbehalt gemellt ginn soll, net als präzis Kopfzuel.

**Charity (Propensity-Score-Matching fir eng Charity fir Beruffsintegratioun)**: 300 Programmparticipanten ginn mat 300 Eenzelpersounen aus engem méi groussen administrativen Datesaz mat Hëllef vu Propensity Scores gematcht, déi aus Alter, fréierer Beschäftegungsgeschicht a Qualifikatiounsniveau opgebaut sinn. Beschäftegungsquote no zwielef Méint: gematchte behandelt Grupp 46 %, gematchte Vergläichsgrupp 33 %. PSM-Wierkungsschätzung: 46 % − 33 % = +13 Prozentpunkten, dem Programm zouzeschreiwen, ënner der Konditioun, datt keen onbeobachte Confounder (wéi Motivatioun) souwuel Participatioun wéi Resultat dreift.

## Verbindung zur Softwareentwécklung

Ob ee vun dëse Designen méi spéit machbar ass, hänkt staark vun Dateentwécklungsentscheedungen of, déi fréi geholl ginn. RDD brauch eng präzis opgezeechent Lafvariabel an eng wierklech propper Berechtigungsschwell; DiD brauch vergläichbar Paneldaten iwwer d'Zäit fir behandelt a Vergläichsgéigenden, wat konsequent Verbindunge iwwer Systemer a Joren heescht; PSM brauch räich Basis-Kovariatendaten, déi virun der Behandlung erfaasst goufen, net duerno rekonstruéiert. En Datemodell, dat vun Ufank un zesumme mat enger [Wierkungstheorie](../wierkungstheorie/) an engem [Logikmodell](../logikmodell/) designt gëtt – mat Basis-Kovariaten, Datumer a Opzeechnunge, déi fir eng Vergläichsgrupp berechtegt sinn – ass dat, wat eng rigoréis Wierkungsevaluatioun méi spéit méiglech mécht, amplaz engem deieren Nohënnerteg-Gerempels. Kuckt [Wierkungsevaluatioun vs. Prozessevaluatioun](../wierkungsevaluatioun-vs-prozessevaluatioun/) fir déi komplementär Fro, déi dës Methoden eleng net beäntwerten.

## Feelerquellen

- **Eng RCT erzwéngen, wou se onméiglech oder onethesch ass**, oder ëmgekéiert ni e quasi-experimentellt Design berécksiichtegen, wann eng echt Geleeënheet dofir – eng Politikschwell, eng gestaffelt Ausrollung – do war a net genotzt gouf.
- **Déi Parallel-Trends-Annahm bei DiD ignoréieren.** Wann d'Vergläichsgéigend schonn virun der Interventioun vun der behandelter ofgewäicht ass, ass den Zweepunkt-Verglach kontaminéiert; préift d'Pre-Trends, net just virdrun/duerno.
- **Bei PSM nëmmen op beobacht Kovariate matchen.** Onbeobacht Selektioun, wéi d'Motivatioun vun de Participanten, kann d'Schätzung verzerren, och wann d'beobacht Kovariaten gutt equilibréiert sinn.
- **Manipulatioun vun der Lafvariabel bei RDD.** Wa Leit hire Score esou beaflosse kënnen, datt e knapp bannent der Berechtigungsschwell fält, isoléiert d'Diskontinuitéit keen Kausaleffekt méi.

## Quellen

- HM Treasury, Magenta Book (2020), Annex A: Quasi-Experimental Methods. <https://www.gov.uk/government/publications/the-magenta-book>
- What Works Centre for Local Economic Growth, evidence review methodology. <https://whatworksgrowth.org/>
- Education Endowment Foundation, evaluation guidance. <https://educationendowmentfoundation.org.uk/>
