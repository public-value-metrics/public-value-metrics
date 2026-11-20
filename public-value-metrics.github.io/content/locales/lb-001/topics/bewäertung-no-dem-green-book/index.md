# Bewäertung no dem Green Book (Fënnef-Fäll-Modell)

D'Green Book ass dem HM Treasury seng verbindlech Leitfad fir d'Bewäertung an d'Evaluatioun vu Ausgabevirschléi vun der britescher Regierung. Säin zentralt Instrument, dat Fënnef-Fäll-Modell, zwéngt e Business Case, fënnef getrennt Froen ze beäntwerten – ass et eng gutt Iddi, liwwert et Wäert, kann et beschaaft ginn, ass et bezuelbar a kann et ëmgesat ginn – amplaz alles op eng eenzeg Zuel zesummenzefalen, déi e Minister duerchwénke kann.

## Firwat et wichteg ass

All Ausgabevirschlag vun der britescher Zentralregierung iwwer de Limitte vun der Delegatioun vun engem Ministère muss eng Bewäertung no dem Green Book duerchlafen, ier Gelder fräigi ginn, an dem HM Treasury säi Green Book Review 2020 (publizéiert no der Kritik, de Prozess wier géint méi aarm Regioune biaséiert, kuckt <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>) huet d'Ufuerderung verschäerft, datt Optioune géint eng echt „Do-minimum“-Basislinn vergléchen a datt de strategesche Fit nogewise ginn, ier iwwerhaapt de Wäert fir Geld bewäert gëtt. D'Fënnef-Fäll-Modell selwer gëtt et méi laang wéi d'Green Book – et staamt vum Office of Government Commerce als Standardstruktur fir e Business Case –, awer d'Green Book vun 2022 verankert et als verbindlech Form fir all Business Case, deen d'Zoustëmmung vum Treasury sicht: <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>.

De Sënn vun der Opdeelung vum Fall a fënnef ass, datt e Virschlag op all enger Dimensioun scheitere ka, egal wéi et mat deenen anere steet. Eng strategesch gutt begrënnten, käschteeffizient IT-Replatforming kann am kommerzielle Fall trotzdem scheitere, wann nëmmen ee Fournisseur se liwwere ka (wat Risiko vun enger Eenzelvergab schaaft), oder am Managementfall, wann de Ministère keng Erfolleggeschicht bei der Ëmsetzung vu Programmer vun där Gréisst huet. E eenzege „Wäert-fir-Geld“-Score verstoppt genee dës Aart vu Feelermodus.

## D'Mathematik

D'Fënnef-Fäll-Modell ass eng Struktur, keng Formel, awer all Fall huet säin eegene quantitativen oder evidenzbaséierten Test:

```
1. Strategesche Fall
   Beweis fir en Ausgabezil, dat un d'Strategie vun der Organisatioun gekoppelt ass.
   Test: gëtt et iwwerhaapt e Grond fir eng Verännerung? („Näischt maachen“ ass ëmmer eng Optioun.)

2. Wirtschaftleche Fall
   Optiounsbewäertung géint eng „Do-minimum“-Basislinn, mat
   sozialer Käschte-Notzen-Analyse oder Käschteeffizienzanalyse.
   Test: wéi eng Optioun maximéiert de ëffentlechen Nettowäert?
   Kuckt ../social-cost-benefit-analysis/ an ../cost-effectiveness-analysis-in-government/

3. Kommerziellen Fall
   Maartdialog, Beschaffungswee, Risikoverdeelung tëscht
   Keefer a Fournisseur.
   Test: ass déi bevorzugt Optioun zu akzeptablen Konditiounen ze beschaffen?

4. Finanzielle Fall
   Bezuelbarkeet bannent de Budgetlimitte vum Ministère, Finanzéierungsquell,
   bilanziell Behandlung.
   Test: kënne mir et eis leeschten, dëst Joer an all Joer duerno?

5. Managementfall
   Gouvernance, Projetsplang, Plang fir d'Realiséierung vun den Notzen, Risikoregister.
   Test: kann dës Organisatioun et tatsächlech ëmsetzen?
   Kuckt ../benefits-realization/
```

Am wirtschaftleche Fall läit déi quantitativ Bewäertung: Optioune ginn op Basis vum Nettogegewärtegen Wäert, ugepasst mam [soziale Diskontsaz](../sozialen-diskontsaz/), vergléchen, mat der Method vun der [sozialer Käschte-Notzen-Analyse](../sozial-käschte-notze-analys/), oder, wou Notzen sech net éierlech monetaiséiere loossen, iwwer [Käschteeffizienzanalyse](../käschten-effektivitéitsanalys-an-der-verwaltung/) oder [multikriteriell Entscheedungsanalys](../multikriteriell-entscheedungsanalyse/).

## Rechebeispill

**Gemeng**: eng Gemeng, déi en IT-System fir Logementsreparaturen vu £12 Millioune bewäert, geet déi fënnef Fäll esou duerch. Strategesche Fall: de Réckstand bei de Reparaturen verletzt bannent 18 Méint de gesetzlechen Decent-Homes-Standard ouni Interventioun. Wirtschaftleche Fall: dräi Optiounen, iwwer eng Bewäertungsperiod vun 10 Joer zu engem Diskontsaz vun 3,5 % (no dem Standardsaz vun der sozialer Zäitpräferenz vum Green Book 2022) gerechent – „Do minimum“ (dat ale System flécken, NPV −£4,1 Mio.), „kafen“ (COTS-Plattform, NPV +£2,3 Mio.), „bauen“ (maßgeschneidert Plattform, NPV +£0,6 Mio., nodeems en Optimismus-Bias vun 40 % fir Softwareentwécklung op d'net diskontéiert Kapitalkäschten ugewannt gouf, no Green Book Annex A). Kafen gewënnt de wirtschaftleche Fall. Kommerziellen Fall: et gëtt zwee liefer Fournisseuren, eng kompetitiv Ausschreiwung ass méiglech – bestanen. Finanziellen Fall: Kapital ass vum Public Works Loan Board verfügbar, d'Betribskäschte passen an de mëttelfristege Finanzplang – bestanen. Managementfall: d'Gemeng huet an de leschte fënnef Joer zwee vergläichbar Systemer ëmgesat – bestanen. De Virschlag geet mat „kafen“ virun.

**Ministère vun der Zentralregierung**: e Virschlag mat engem staarke wirtschaftleche Fall (NPV +£40 Mio.), bei deem awer nëmmen ee Fournisseur déi relevant Akkreditéierung huet, fällt beim kommerziellen Test fir kompetitive Spannung duerch, wat entweder eng Ausnam fir Eenzelvergab (mat hirer eegener Scrutiny-Laascht) oder eng Iwwerschaffung vun de Spezifikatioune verlaangt, fir de Maart opzemaachen – de wirtschaftleche Fall eleng hätt dat ni opgedeckt.

## Verbindung zur Softwareentwécklung

Entwécklungsteams an der Regierung oder an Organisatiounen, déi duerch Subventioune finanzéiert ginn, gesinn normalerweis nëmmen de wirtschaftleche Fall, well dat deen Deel ass, deen d'Produkt- an Entwécklungsleedung muss begrënnen („wat ass den ROI vun dëser Migratioun?“). Awer e Business Case, deen d'Treasury oder e Subventiounskomitee passéiert, brauch all fënnef, an Entwéckler sinn dacks déi am beschte placéiert Leit, fir de kommerziellen Fall ze beäntwerten (kann dat tatsächlech beschaaft ginn, oder bannt et eis un dem proprietäre Format vun engem eenzege Fournisseur?) an de Managementfall (hu mir d'Liwwerfäegkeet, oder hänkt dat dovun of, datt dräi bestëmmt Leit net ofhaue?). Behandelt eng Ufro no „just de Zuele fir de Business Case“ als Ufro no engem Fënneftel vun der tatsächlecher Entscheedung. Kuckt [Wäert fir Geld](../preis-leeschtungs-verhältnis/), wéi d'Resultat vum wirtschaftleche Fall normalerweis zesummegefaasst gëtt, an [Gesamtkäschte vum Besëtz](../gesamtbesëtzkäschte-an-der-verwaltungs-it/) fir de gewéinleche quantitative Kär vum finanzielle Fall.

## Feelerquellen

- **De wirtschaftleche Fall als éischt schreiwen an de strategesche dorop ofstëmmen.** De Green Book Review 2020 huet genee dëse Feelermodus fonnt, deen d'Bewäertung a Richtung vu Plaze a Secteure gedréckt huet, déi schonn gutt evidenzbaséiert waren, wat d'regional Ongläichheet verfestegt huet; de strategesche Fall soll d'Zil festleeë, ier Optioune vergléchen ginn.
- **„Do minimum“ als „näischt maachen“ behandelen.** Déi richteg Basislinn ass déi bëllegst Optioun, déi nach ëmmer déi gesetzlech oder sécherheetsrelevant Mindestverflichtunge erfëllt, net eng Fantasie vun Null Ausgaben – de Verglach mat der wuertwiertlecher Null bläst de scheinbare Wäert vun all Optioun op.
- **De kommerziellen an de Managementfall iwwersprangen, well de wirtschaftleche Fall staark ass.** E Virschlag mat héijem NPV, dee net kompetitiv beschaaft oder vun der sponsorerender Organisatioun ëmgesat ka ginn, ass kee finanzéierbare Virschlag; d'Treasury-Reviewer refuséieren routinéiert aus dëse Grënn, och bei engem iwwerzeegenden wirtschaftleche Fall.
- **D'Fënnef-Fäll-Modell nëmmen eemol, um Ufank, uwenden.** D'Green Book verlaangt, datt de Fall bei all spéideren Zoustëmmungsgate (Strategic Outline Case, Outline Business Case, Full Business Case) nei gekuckt gëtt, wéi Käschten a Beweiser sech festegen – e Fall, dee beim Outline-Stadium agefruer gëtt, verpasst Käschtenerhéijungen, déi e spéidere Gate opgefaang hätt.

## Quellen

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury. "Green Book Review 2020: findings and response." 2020.
  <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>
- HM Treasury / Infrastructure and Projects Authority. "Guide to developing the project business
  case." <https://www.gov.uk/government/publications/project-business-case-guide>
