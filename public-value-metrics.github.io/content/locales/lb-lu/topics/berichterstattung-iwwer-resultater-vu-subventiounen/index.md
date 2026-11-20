# Berichterstattung iwwer Resultater vu Subventiounen (IRIS+)

D'Berichterstattung iwwer Resultater vu Subventiounen ass d'Praxis, datt Empfänger vu Subventioune standardiséiert, vergläichbar Resultatmetriken un d'Geldgeber zréckmellen – amplaz datt all Geldgeber säi eegent maßgeschneidert Berichtsmuster erfënnt. IRIS+, vum Global Impact Investing Network (GIIN) ennerhalen, ass de wäitaus verbreetsten esou Standard: e Katalog vu virdefinéierte sozialen, ökologeschen a finanziellen Leeschtungsmetriken, déi Impact-Investisseuren an, ëmmer méi, subventionéierend Stëftunge vun hire Empfänger verlaangen oder recommandéieren.

## Firwat et wichteg ass

Virun der standardiséierter Berichterstattung huet all Stëftung vun hiren Empfänger en aneren Indikatorsatz an engem anere Format gefrot, an eng mëttelgrouss Charity mat zéng Geldgeber konnt zéng parallel Berichtsprozesser fir iwwerlappend Aarbecht féieren – e gutt dokumentéierten Treiber vun der Berichtslaascht, déi d'Standardiséierung vun de Subventiounsresultater reduzéiere wëll. IRIS+ geet dëst un, andeems et Geldgeber an Empfänger e gemeinsamt Vokabulär gëtt: Core Metrics Sets, no Theme gruppéiert (z. B. bezuelbart Wunnengen, Zougang zu propperer Energie, finanziell Inklusioun), all Metrik präzis genuch definéiert, datt „geschafe Jobs“ oder „bedingt Haushalter“ dat selwecht heescht, wien et mellt, an op d'UN Sustainable Development Goals ausgeriicht, sou datt e Geldgeber Daten um Niveau vum Empfänger zu enger SDG-Erzielung um Portfolio-Niveau zesummefaasse kann. De GIIN mellt, datt IRIS-Metriken vu ronn der Hallschent vun den Impact-Investisseuren an der grousser Majoritéit vun de Fondsmanager, Banken an Entwécklungsfinanzinstitutiounen, déi am Feld aktiv sinn, benotzt ginn.

D'Standardiséierung ass am wichtegsten do, wou se mat [Resultater vs. Outputs](../outcomes-vs-outputen-resultater-a-leeschtungen-ënnerscheeden/) interagéiert: IRIS+ drängt d'Berichterstattung a Richtung definéiert Resultat- a Wierkungsmetriken, amplaz op dat, wat dem Empfänger säi bestoend Fallmanagementsystem zoufälleg opzeechent, wat genee d'Lück ass, déi [Käschte pro Resultat](../käschte-pro-resultat/) am Géigesaz zu [Käschte pro Begënschtegten](../käschte-pro-begënschtegten/) beschreift.

## D'Mathematik

D'Berichterstattung iwwer Resultater vu Subventiounen ass e Kader an e Prozess, keng Formel:

```
1. De Geldgeber wielt e Core Metrics Set, deen zum Theme vun der Subventioun passt
   (z. B. IRIS+ „Financial Inclusion“ oder „Sustainable Agriculture“)
2. All Metrik huet eng fix Definitioun, Eenheet a Berechnungsmethod,
   vum GIIN publizéiert – net pro Geldgeber erfonnt
3. De Empfänger mellt géint déiselwecht Metrikdefinitioune bei all
   senge Geldgeber, déi dëse Standard benotzen, wat duplizéierten
   Berichtsopwand reduzéiert
4. De Geldgeber aggregéiert d'Metriken vun den Empfänger zu enger
   Berichterstattung um Portfolio-Niveau, vergläichbar vu Joer zu Joer
   an tëscht Empfänger mat der selwechter Metrik
```

De Effizienzgewënn ass kombinatoresch: N Geldgeber × M Empfänger op e gemeinsamt Vokabulär standardiséieren, mécht aus N×M maßgeschneiderte Berichtsbezéiungen ongeféier N+M Zouuerdnunge géint ee Standard.

## Rechebeispill

**E Empfänger mat dräi Geldgeber, virun der Standardiséierung**: mellt „betreit Leit“ dem Geldgeber 1 no enger Kopfzuel-Definitioun, „erreecht Begënschtegt“ dem Geldgeber 2 no enger Haushaltsdefinitioun an „betraff Eenzelpersounen“ dem Geldgeber 3 no enger Definitioun vun Serviceepisoden (sou datt eng Persoun, déi zweemol kënnt, zweemol zielt). Dräi Berichter, dräi Zuelen, keng vergläichbar, a keng vergläichbar mat de Zuele vun engem anere Empfänger, och bannent dem Portfolio vum selwechte Geldgeber.

**Deeselwechten Empfänger ënner IRIS+**: mellt géint eng definéiert IRIS+-Metrik fir erreecht Eenzelpersounen zesumme mat enger definéierter Resultatmetrik aus dem relevante Core Metrics Set, mat der vum GIIN publizéierter Berechnungsmethodologie fir béid. All dräi Geldgeber kréien elo déiselwecht Zuel, op déiselwecht Manéier berechent, a kënnen d'Käschte vun dësem Empfänger pro IRIS+-definéiert Eenheet mat anere Empfänger a hirem Portfolio mat der identescher Metrik vergläichen – dat Äquivalent, op der Skala vun der Berichts-Infrastruktur, vun enger gemeinsamer [Datebank vun Eenheetskäschten](../datebanke-mat-eenheetskäschten/).

## Verbindung zur Softwareentwécklung

Plattforme fir Subventiounsmanagement sollten IRIS+-Metrikidentifikateren als Fremdschlëssel behandelen, net als fräien Text: de publizéierte Metrikcode niewent dem gemellte Wäert vum Empfänger ofzespäicheren (amplaz engem lokal erfonnte Feld mam Numm „Begënschtegt“) mécht méiglech, méi spéit Geldgeber- a Portfolio-iwwergräifend Aggregatioun ouni en Dateebereinigungsprojet. Wou eng Plattform Geldgeber ënnerstëtze muss, déi IRIS+ net adoptéiert hunn, ass de pragmateschen Design, eng lokal Metrik der nootster IRIS+-Definitioun zouzeuerdnen, amplaz all Geldgeber direkt op de Standard ze zwéngen – d'Vergläichbarkeet verbessert sech schrëttweis, wéi méi vum Graph op gemeinsam Identifikateren ofgebild gëtt. Kuckt dat Schwëstertheema [Käschte pro Resultat](../käschte-pro-resultat/), fir wat d'gemellte Zuelen no hirer Erhiewung benotzt solle ginn.

## Feelerquellen

- **D'Adoptioun vun IRIS+ als automatesch Vergläichbarkeet behandelen.** Zwee Empfänger kënnen allebéid géint déiselwecht IRIS+-Metrik mellen an trotzdem net vergläichbar sinn, wann hir zougrondeliegend Datequalitéit oder kontrafaktesch Annahme sech ënnerscheeden; de Standard leet Definitiounen fest, net d'Rigueur vun der Moossung.
- **Vum Geldgeber erfonne „IRIS-ausgeriicht“ Metriken.** Eng Metrik, déi nëmme vun der IRIS+-Sprooch inspiréiert ass, awer net déi tatsächlech publizéiert Definitioun, féiert d'Fragmentatioun erëm an, déi de Standard léise soll.
- **Berichtsmiddegkeet duerch Iwwerauswiel.** E Empfänger ze verflichten, géint e ganze Core Metrics Set ze mellen, wa just zwou oder dräi Metriken fir d'Entscheedung relevant sinn, schaaft de Laaschtproblem an enger standardiséierter Verpackung nei.
- **Guer keng Resultatmetrik.** IRIS+ enthält vill reng Output-Metriken (z. B. Zuele vu betreite Leit); wann een nëmmen déi wielt a keng vun de Metriken um Resultatniveau, entsteet eng Berichterstattung am Stil vun [Käschte pro Begënschtegten](../käschte-pro-begënschtegten/) ënner dem Etikett Resultater-Berichterstattung.

## Quellen

- GIIN, IRIS+ system. <https://iris.thegiin.org/>
- GIIN, IRIS+ Catalog of Metrics. <https://iris.thegiin.org/metrics/>
- GIIN, About IRIS+. <https://iris.thegiin.org/about/>
