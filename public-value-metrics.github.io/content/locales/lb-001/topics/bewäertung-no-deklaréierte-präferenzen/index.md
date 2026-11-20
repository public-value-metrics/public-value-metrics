# Bewäertung no deklaréierte Präferenzen (Stated Preference)

Methode vun de deklaréierte Präferenzen schätzen de Wäert vun engem Net-Maartgutt, andeems se d'Leit direkt froen, wat si derfir bezuele wéilten, oder wat si als Entschiedegung akzeptéiere wéilten, fir et opzeginn, typesch iwwer eng strukturéiert Ëmfro, déi e hypothetescht Szenario beschreift. D'Contingent Valuation ass déi bekanntste Technik vun dëser Famill.

## Firwat et wichteg ass

Den Annex 2 vum Green Book (ergänzend Leetlinn zur Bewäertung vu Net-Maartwierkungen) empfielt d'Methode vun de deklaréierte Präferenzen fir Gidder, bei deenen et iwwerhaapt keng beobachtbar Maarttransaktioun gëtt, aus där ee Wäert ofleeë kéint – Loftqualitéit, Biodiversitéit, Hochwaasserschutz, den Existenzwäert vun enger Landschaft, déi een eventuell ni besicht (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>). Defra huet eng eege Leetlinn zu de deklaréierte Präferenze fir d'Ëmweltappraisal verëffentlecht, genee well esou vill Ëmweltwäert (Erhale vun Liewensraim, Waasserqualitéit) guer kee Proxy-Maart huet, am Géigesaz zu zum Beispill Kaméidi, deen op d'mannst mat beobachtbaren Hauspräisser korreléiert (kuckt [Bewäertung no opgedeckte Präferenzen](../bewäertung-duerch-opgedeckte-präferenzen/)).

Dem Usaz vun de deklaréierte Präferenze säin Haaptvirdeel – e kann wuertwiertlech alles bewäerten, och Gidder, mat deenen nach ni een gehandelt huet – ass och d'Quell vu sengem Glafwürdegkeetsproblem. Well d'Befrote kee Geld tatsächlech ausginn, si Contingent-Valuation-Ëmfroen ufälleg fir hypothetesche Biais (d'Leit iwwerschätzen hir Bereetschaft zum Bezuelen, wann et kee richtege Budgetlimit gëtt), Embedding-Effekter (dat selwecht Gutt gëtt anescht bewäert, jee nodeem wat soss nach an der Ëmfro ass) a Startpunkt-Biais bei Bidding-Game-Designen. D'NOAA-Panel vun 1993 zur Contingent Valuation, déi nom Rechtsstreit iwwer d'Exxon-Valdez-Ueleg-Katastroph zesummegeruff gouf, huet Designstandarden opgestallt – e binärt „géift Dir £X bezuelen, jo/neen"-Referendumsformat amplaz vun oppenen Gebotsrounden, an obligatoresch Erënnerunge un de wierkleche Budgetlimit vum Befrote –, déi weiderhin de Referenzstandard fir verteidegbar Ëmfroe bleiwen.

## D'Mathematik

```
Contingent Valuation (Referendumsformat):
  E binäre Choix presentéieren: „géift Dir £X pro Joer fir d'Resultat Y bezuelen? jo/neen"
  X zoufälleg tëscht de Befrote variéieren.
  D'Bereetschaft zum Bezuelen als Funktioun vum Jo/Neen-Undeel bei all X upassen.

Mëttel-WTP = Fläch ënner der geschätzter Nofragekurv
Aggregéierte Wäert = Mëttel-WTP × betraffe Populatioun

Variant Choice Experiment (diskret Choixmodelléierung):
  Befrote bei widderhuelte Choixer tëscht Bündele vun Attributer (och engem
  Käschteattribut) virleeën, aus de Kompromësser, déi d'Befrote opdecken,
  déi implizit Präisser vun all Net-Käschte-Attribut schätzen.
```

Déi Variant mam Choice Experiment gëtt an der aktueller britescher Praxis allgemeng der Contingent Valuation mat enger eenzeger Fro virgezunn, well d'Befrote ze zwéngen, méi Attributer widderholl géint d'Käschten ofzewäge, intern méi konsistent a méi schwéier manipuléierbar Schätzunge produzéiert wéi eng eenzeg Jo/Neen-Fro.

## Rechebeispill

**Nationalregierung**: Defra gëtt eng Contingent-Valuation-Ëmfro fir d'Bewäertung vun engem Programm zur Verbesserung vun der Waasserqualitéit vu Flëss an Optrag. Eng Ëmfro am Referendumsformat bei 2.000 Haushalter ergëtt, datt 62 % £40/Joer iwwer en hypothetesche Opschlag op der Waasserrechnung bezuele géifen, an déi geschätzt Nofragekurv gëtt eng mëttel Bereetschaft zum Bezuelen vu £28/Joer pro Haushalt.

```
Mëttel-WTP = £28/Haushalt/Joer
Haushalter am Aflossgebitt = 340.000
Aggregéierte jäerleche Wäert = £28 × 340.000 = £9,52 Mio./Joer

Iwwer en Appraisal-Zäitraum vu 20 Joer bei 3,5 % Diskontsaz (Annuitéitsfaktor ≈ 14,2):
PV(Notzen) ≈ £9,52 Mio. × 14,2 ≈ £135 Mio.
```

Dës aggregéiert Zuel gëtt dann mat der Käschtesäit vun der [sozialer Käschte-Notze-Analys](../sozial-käschte-notze-analys/) vum Programm verglach. De Green Book verlaangt, datt esou Beweiser aus deklaréierte Präferenzen zesumme mat hirem Vertrauensintervall a mat der Ëmfromethodologie gemellt ginn, net als bloussen Punktschätzung, genee well d'Zuel dohannert fragiller ass wéi e Maartpräis.

**Associatioun**: en Denkmalstrust befrot Besucher an Net-Besucher zur Bereetschaft zum Bezuelen, fir d'Schléissung vun engem historesche Gebai ze verhënneren, dat keng vun den zwou Gruppen onbedéngt besicht (säin Existenzwäert). Well Net-Besucher, déi d'Gebai ni gesinn, trotzdem eng positiv WTP mellen, erfaasst d'Ëmfro Existenz- a Verméigenswäert, deen eng einfach Zielung vun den Entréesgebühren (e Proxy aus opgedeckte Präferenzen) komplett verpasse géif – wat de richtege Virdeel vun de deklaréierte Präferenze weist, wou iwwerhaapt keng Maarttransaktioun existéiert, déi Wäert opdeckt.

## Verbindung zur Softwareentwécklung

Methode vun de deklaréierte Präferenze betreffen d'Softwareentwécklung selten direkt, awer Ingenieuren, déi Plattformen fir Biergerkonsultatioun, Tools fir Bürgerbudgeten oder Infrastruktur fir ëffentlech Ëmfroe bauen, bauen dacks d'Instrument, vun deem d'wirtschaftlech Analys ofhänkt. D'Detailer vum Ëmfrodesign richteg hinzekréien – zoufälleg Gebotsbeträg, binär Referendumsformuléierung amplaz vun oppene Froen, explizit Erënnerunge un de Budgetlimit – ass kee UX-Schéinheetsfeeler, et ass dat, wat déi resultéierend Bewäertung ënner Kontroll verteidegbar mécht; eng schlecht gestalt In-App-Ëmfro kann Méint spéider Wirtschaftsanalys ongëlteg maachen. Kuckt [Kennzuele fir Biergerzefriddenheet](../metrike-fir-dzefriddenheet-vun-de-bierger/) fir déi méi allgemeng Disziplin, ëffentlech Meenungsdaten z'erhiewen, déi analytescht Gewiicht droe sollen.

## Feelerquellen

- **Oppe „Wéi vill géift Dir bezuelen?"-Froen.** Dës sinn däitlech méi ufälleg fir strategesche Biais an Ankereffekter wéi eng binär Referendumsformuléierung; d'Empfehlung vum NOAA-Panel fir e Referendumsformat gëtt et genee, well oppen Erhiewung schlecht ofschneit.
- **Keng Erënnerung un de wierkleche Budgetlimit vum Befrote.** Ouni se iwwerschreit déi deklaréiert WTP regelméisseg dat, wat déiselwecht Leit bezuele géifen, wann e richtege Budgetkompromëss am Spill ass – hypothetesche Biais.
- **Embedding-Effekter ignoréieren.** Dat selwecht Gutt eleng bewäert géint als Deel vun engem gréissere Bündel bewäert produzéiert ënnerschiddlech WTP-Schätzungen; ausweisen, wat soss nach, wann iwwerhaapt, am Ëmfrorahme war.
- **D'Punktschätzung vun enger eenzeger Ëmfro als geklärt behandelen.** D'Praxis vum Green Book erwaart eng Spannbreet an eng Diskussioun vun de bekannte Biaisen, keng bloss Zuel, déi an d'Käschte-Notze-Tabell iwwerholl gëtt, wéi wann et e Maartpräis wier.

## Quellen

- HM Treasury. "The Green Book," Annex 2: valuing non-market impacts. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Defra. "Valuing environmental impacts: practical guidelines" (contingent valuation and choice experiment guidance). <https://www.gov.uk/government/collections/valuing-environmental-impacts>
- Arrow K, et al. "Report of the NOAA Panel on Contingent Valuation." Federal Register, 1993.
- Mitchell RC, Carson RT. "Using Surveys to Value Public Goods: The Contingent Valuation Method." Resources for the Future, 1989.
