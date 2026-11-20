# Wuelbefannen-ugepasst Liewensjoren (WELLBY)

E WELLBY ass ee zousätzleche Punkt Liewenszefriddenheet, op der Standard-Wuelbefannenskala vun 0–10, fir eng Persoun während engem Joer. Et ass de strukturellen Analog zum QALY aus der Gesondheetsekonomie – eng eenzeg Eenheet, déi et erlaabt, Interventiounen ze vergläichen, déi soss näischt matenee gemeinsam hunn – awer opgebaut op subjektivem Wuelbefannen amplaz op klineschen Gesondheetszoustänn, a festgehalen am „Wellbeing guidance for appraisal: supplementary Green Book guidance" (2021) vum HM Treasury.

## Firwat et wichteg ass

D'Käschte-Notze-Appraisal brauch eng gemeinsam Eenheet, fir eng Fërderung fir e Jugendclub géint e Projet fir d'Verkéierssécherheet géint e Service fir mental Gesondheet ze vergläichen, vun deenen keen e Resultatmooss deelt. D'Gesondheetsekonomie huet dat fir klinesch Interventioune mam QALY geléist: e qualitéitsugepasst Liewensjoer, gewiicht vun 0 (dout) bis 1 (voll Gesondheet). D'Wuelbefannenleetlinn vum HM Treasury dehnt déi selwecht Logik op net-gesondheetlech ëffentlech Ausgabe aus, a benotzt déi harmoniséiert ONS-Fro zur Liewenszefriddenheet („Overall, how satisfied are you with your life nowadays?", beäntwert 0–10) als Resultatleeder amplaz vun engem Index vum Gesondheetszoustand. E WELLBY vun 1 bedeit, datt déi Liewenszefriddenheet vun enger Persoun em e ganze Punkt eropgeet, während engem Joer (oder gläichwäerteg, datt d'Zefriddenheet vun zéng Leit all em 0,1 Punkt eropgeet, während engem Joer – WELLBYs addéieren sech iwwer eng Populatioun, wéi QALYs et maachen). D'Leetlinn vum HM Treasury setzt e illustrative monetäre Wäert pro WELLBY (ronn £13.000, Präisser 2019/20), deen duerch Ofgläichung vu Date zum subjektive Wuelbefannen mat anere Usätz fir de Wäert vun engem Liewensjoer ofgeleet ass, a gëtt Appraiser esou eng Méiglechkeet, Resultater – manner Eenzamkeet, Zesummenhalt an der Gemeinschaft, Zougang zu Gréngflächen – ze monetariséieren, déi [Bewäertung vum Wuelbefannen](../bewäertung-vum-wuelbefannen/)-Techniken virdrun nëmme beschreiwe, net awer op gemeinsamer Basis mat Gesondheets- oder Sécherheetsausgabe vergläiche konnten.

## D'Mathematik

```
WELLBY = Δ Liewenszefriddenheet (Skala 0–10) × Zuel vun de Joren, an deenen d'Ännerung unhält
         (iwwer all betraffe Persounen zesummegezielt)

Monetariséierten Notzen vum Wuelbefannen = erzeegt WELLBYs × Wäert pro WELLBY (HMT-Referenzwäert)

vgl. QALY = Δ Notzen vum Gesondheetszoustand (Skala 0–1) × Joren, déi an deem Zoustand gelieft ginn
```

D'Zefriddenheetsskala vun 0–10 an d'QALY-Notzenskala vun 0–1 sinn net ouni en Ëmrechnungsschrëtt austauschbar; d'Leetlinn vum HM Treasury diskutéiert d'Ofgläichung vun deenen zwou, sou datt zum Beispill eng Gesondheetsinterventioun, déi a QALYs bewäert gëtt, an eng sozial Interventioun, déi a WELLBYs bewäert gëtt, bannent derselwechter [Green-Book-Appraisal](../bewäertung-no-dem-green-book/) net roueg duebel gezielt ginn oder onvergläichbar bleiwen.

## Rechebeispill

**Service géint Eenzamkeet vun enger lokaler Behörd**: e Besuchsprogramm betreit 400 isoléiert eeler Awunner. Nofollegëmfroe weisen, datt d'duerchschnëttlech Liewenszefriddenheet vu 5,2 op 6,0 klëmmt (e Gewënn vun 0,8 Punkten), an de Effekt gëtt op 2 Joer geschat, ier en ofklénkt.

```
WELLBYs = 400 Leit × 0,8 Punkten × 2 Joer = 640 WELLBYs

Monetariséierten Wäert = 640 × £13.000 = £8.320.000
```

Géintiwwer jäerleche Programmkäschte vu £300.000 (£600.000 iwwer 2 Joer) ass de Notze-Käschte-Verhältnis ongeféier 8.320.000 / 600.000 ≈ **13,9:1** – eng Zuel, déi elo an der selwechter Appraisal-Tabell wéi d'Käschte pro verhënnerte QALY vun engem Gesondheetsprogramm oder d'Reesezäitastpuerunge vun engem Verkéiersprojet stoe kann.

**Associatioun, méi klenge Maassstab**: e Kulturprogramm an der Gemeinschaft erreecht 50 Participanten mat engem gemoossene Zefriddenheetsgewënn vun 0,3 Punkten, deen 1 Joer unhält.

```
WELLBYs = 50 × 0,3 × 1 = 15 WELLBYs
Monetariséierten Wäert = 15 × £13.000 = £195.000
```

## Verbindung zur Softwareentwécklung

- All Service fir Bierger, deen elo schonn en Ëmfrageitem zur Liewenszefriddenheet oder zum Wuelbefannen erhieft (vill Plattforme vu lokalen Autoritéiten a vu Gesondheet a Fleeg maachen dat, no de véier Standardfroe vum ONS zum Wuelbefannen), kann WELLBYs direkt aus bestoenden Datepipelines berechnen, amplaz fir all Serviceännerung eng eege wirtschaftlech Evaluatioun a Optrag ze ginn.
- WELLBYs ginn Ingenieursequipen, déi fir d'Berichterstattung no dem [Social Value Act](../social-value-act/) oder fir de [sozialen Investitiounsrendement](../sozialen-investitiounsrendement/) bauen, e national standardiséierten, vum HM Treasury ënnerstëtzten Nenner, a vermeiden d'Wuchere vu spezielle „Impact Scores", déi sech net iwwer Kontrakter oder Lieferanten ewech vergläiche loossen.
- Well WELLBYs iwwer Leit an Zäit additiv sinn, zesummeféieren se propper an d'Aart vu Resultatverfollegung um Populatiounsniveau, déi a Systemer fir [resultatbaséiert Verantwortung](../outcome-baséiert-rechenschaftspflicht/) benotzt gëtt – en Dashboard vun engem Service kann kumuléiert generéiert WELLBYs pro Quartal mellen, wéi e Gesondheetssystem gewonnen QALYs mellt.

## Feelerquellen

- **Unhuelen, datt selwer gemellt Zefriddenheetsgewënn komplett der Interventioun zouzeuerdnen sinn** – ouni Kontrafaktum (Vergläichsgrupp oder Virun-/Nodesign mat Kontrollen) kann een de WELLBY-Gewënn net vun allgemengen Trends trennen; kuckt [kontrafaktesch Analys](../kontrafaktesch-analys/).
- **WELLBYs a QALYs an enger Gesamtzuel ouni Ofgläichung vermëschen** – d'Leetlinn vum HM Treasury ass explizit, datt déi zwee ënnerschiddlech Skalen an ënnerschiddlech Theorië vum Wäert benotzen; se naiv zesummzezielen zielt iwwerlappende Wuelstand duebel.
- **De monetäre Referenzwäert onkritesch benotzen** – d'Zuel £-pro-WELLBY ass eng Schätzung vum nationalen Duerchschnëtt mat richtege Onsécherheetsbänner; d'Leetlinn vum HM Treasury empfielt eng Sensitivitéitsanalys, net se als fixe Wiesselkurs ze behandelen.

## Quellen

- HM Treasury. "Wellbeing guidance for appraisal: supplementary Green Book guidance." (2021) <https://www.gov.uk/government/publications/wellbeing-guidance-for-appraisal-supplementary-green-book-guidance>
- ONS. "Personal well-being user guidance" (déi véier Standardfroe zum Wuelbefannen). <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing>
- HM Treasury. "The Green Book: Central Government Guidance on Appraisal and Evaluation."
