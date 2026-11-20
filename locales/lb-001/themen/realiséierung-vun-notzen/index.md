# Realiséierung vun Notzen (Benefits Realization)

D'Gestioun vun der Notzenrealiséierung ass d'Disziplin, d'Notzen, déi an engem Businesscase versprach goufen, ze identifizéieren, eng Basislinn dofir festzeleeën, se ze verfolgen an *nozeweisen*, datt se no dem Go-live wierklech agetruede sinn. Bei britesche ëffentlechen Investitioune sétzt si am Five Case Model vum Green Book vum HM Treasury an an der spezieller Leetlinn zur Notzegestioun vun der Infrastructure and Projects Authority; ouni si bleift „d'System huet de Sachbearbechter pro Dossier drësseg Minutte gespuert" fir ëmmer eng net iwwerpréift Behaaptung.

## Firwat et wichteg ass

Businesscasen si Verspriechen; d'Notzenrealiséierung ass den Audit. D'Green Book verlaangt, datt all Ausgabecase fënnef Tester bestanen huet – strategesch, wirtschaftlech, kommerziell, finanziell a Gestioun –, an de Gestiounscase muss festhalen, wéi d'Notzen *virun der Genehmegung* realiséiert ginn: Verantwortlecher benannt, Basisliniéen erfaasst a Miessdaten festgeluecht. De Guide vun der Infrastructure and Projects Authority, *Benefits Management: A Guide to Realizing Benefits for Government Major Projects* (<https://www.gov.uk/government/publications/benefits-management-a-guide-to-realizing-benefits-for-government-major-projects>), gëtt et, well d'IPA an hirer eegener Portfolio-Berichterstattung iwwer de Government Major Projects Portfolio ëmmer erëm festgestallt huet, datt d'Vertrauen an d'Ëmsetzung an d'Notzenrealiséierung als widderhuelend Schwächte bei grousse Programmer genannt ginn. E Projet kann „pünktlech a bannent dem Budget" géint seng Liwwermeilesteng ofschléissen, a gläichzäiteg d'Notzen net realiséieren, déi d'Ausgab vum Geld iwwerhaapt gerechtfäerdegt hunn – eng Ënnerscheedung, déi d'Leetlinn vun der IPA als de ganze Sënn vun der Disziplin behandelt.

## D'Mathematik

```
Realiséierungsquote = realiséiert Notzen / prognostizéiert Notzen   (pro Notzen, pro Period)

Mechanismen, déi et berechenbar maachen:
  Basislinn VUN dem Go-live erfaasst (soss ass den Delta net moossbar)
  all Notzen: benannte Verantwortlechen, Metrik, Datequell, Miessplang
  Prognos bei der Appraisal em den Optimismus-Biais ugepasst (Mandat vum Green Book)
  Notzen klasséiert als cash-fräisetzend / Kapazitéit-fräisetzend / qualitativ,
  getrennt verfollegt a gemellt
```

## Rechebeispill

**Lokal Verwaltung**: e Businesscase fir en digitale Portal fir Baugenehmegungsufroe huet pro Joer versprach: £300.000 Reduktioun vun den Drock- a Portokäschten (Cash), 4.500 fräigesat Beamtestonnen (Kapazitéit) a méi zefriddene Ufroesteller (qualitativ). Zwielef Méint nom Go-live:

```
Notzen            Prognos    Realiséiert  Quote  Beleeg
Cash-Spuerungen   £300.000   £210.000     70 %   Finanzbuch vs Basisjoer
Beamtestonnen     4.500      3.200        71 %   Zäitmiessung-Stichprouf
Zefriddenheet     +8 PP      +11 PP       138 %  Ëmfroedate vun den Ufroestellers

Aktioune vun der Iwwerpréiwung (de Sënn vun der Notzenrealiséierung):
Cash-Defizit op zwee Servicebereicher zréckgefouert, déi nach Dossieren
op Pabeier als Ausnam beaarbechten → d'Ausnamweeër zoumaachen;
d'Korrektur vum Optimismus-Biais fir den nächste Businesscase vun 10 % op 25 %
erhéicht, baséierend op dem Prognosfeeler vun dësem Case.
```

Eng Realiséierungsquote vu 70 % ass kee Scheitern – et ass Wëssen, dat et erlaabt, déi nächst Prognos besser ze kalibréieren. En net gemoossene Case hätt fir ëmmer 100 % beanspruch, an d'Finanzteam hätt keng Basis gehat, dat a Fro ze stellen.

## Verbindung zur Softwareentwécklung

Ingenieursorganisatioune genehmege routinéiert Investitioune a Plattformen an Tools op Basis vum prognostizéierten Notzen a kontrolléieren se bal ni duerno – genee d'Pathologie, déi d'Gestioun vun der Notzenrealiséierung soll behiewen. Déi liicht Ëmsetzung: all Virschlag iwwer enger Wiesentlechkeetsschwell nennt e Notzeverantwortlechen, eng Basislinn-Metrik an e fixen Iwwerpréiwungsdatum (typesch sechs Méint nom Go-live), an d'Realiséierungsquote vu fréiere Virschléi sollten d'Vertrauen, dat d'Organisatioun an déi nächst Prognos vun engem Team oder Vendor huet, erofsetzen. Dëst schléisst de Krees zréck zur [Green-Book-Appraisal](../bewäertung-no-dem-green-book/), déi d'Prognos festleet, déi dës Disziplin auditéiert, a et ass dieselwecht Logik hannert dem breet gemellte Befund, datt eng grouss Majoritéit vu Piloten mat generativer KI keen moossbare Return weist – kuckt [KI-Produktivitéit am ëffentleche Secteur](../ki-produktivitéit-am-ëffentleche-secteur/) –, well d'Piloten, déi *wierklech* Wäert bruecht hunn, bal ouni Ausnam déi waren, déi vun Ufank u eng benannt, verfollegbar Notzeline haten. Si hänkt och dovun of, ze ënnerscheeden, wat wierklech geliwwert gouf, vun deem, wat wierklech realiséiert gouf – kuckt [Outcomes vs Outputs](../outcomes-vs-outputen-resultater-a-leeschtungen-ënnerscheeden/).

## Feelerquellen

- **Keng Basislinn virum Go-live**: déi fatal, net méi korrigéierbar Auslossung – ouni si ka keng Realiséierungsquote jee berechent, nëmmen behaapt ginn.
- **Verwaisten Notzen**: en Notzen ouni benannte Verantwortlechen huet keen, dee Daten dofir sammelt, a jiddwer Portfolio-Review mellt en standardméisseg als „am grousse Ganze um Plang".
- **Duebel gezielte Notzen am Programmportfolio**: zwee Projeten, déi allen zwee déiselwecht fräigesat Sachbearbechter-Kapazitéit als hire Notzen beanspruchen – e eenzege Notzenregister iwwer d'ganzt Portfolio hält dat of.
- **Realiséierungstheater**: déi einfach qualitativ Erfolleger prominent moossen a mellen, wärend d'Cash- a Kapazitéitslinne roueg ongepréift bleiwen.
- **Ëmsetzung mat Realiséierung verwiesselen**: e Projet, dat seng Meilesteng „pünktlech a bannent dem Budget" ofschléisst, seet näischt doriwwer, ob de prognostizéierten Notzen jee agetruede ass – d'Leetlinn vun der IPA behandelt dat als zwou getrennte Froen mat zwou getrennte Beweisketten.

## Quellen

- HM Treasury, Green Book and Five Case Model guidance. <https://www.gov.uk/government/collections/the-green-book-and-accompanying-guidance-and-documents>
- Infrastructure and Projects Authority, *Benefits Management: A Guide to Realizing Benefits for Government Major Projects*. <https://www.gov.uk/government/publications/benefits-management-a-guide-to-realizing-benefits-for-government-major-projects>
- Infrastructure and Projects Authority, Annual Report on the Government Major Projects Portfolio. <https://www.gov.uk/government/collections/infrastructure-and-projects-authority-annual-report>
