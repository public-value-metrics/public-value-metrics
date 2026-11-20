# Index of Multiple Deprivation (Index vu méifacher Benodeelegung)

Den IMD ass déi offiziell Moossung vun der relativer Benodeelegung fir kleng Gebidder an England a rangéiert all eenzel vun de 32.844 Lower-layer Super Output Areas (LSOAs, jidderee mat ongeféier 1.500 Awunner) vun 1 (am meeschte benodeelegt) bis 32.844 (am mannsten benodeelegt). Hien gëtt vun deem publizéiert, wat haut d'Ministry of Housing, Communities and Local Government (MHCLG, fréier MHCLG/DCLG) ass, zuletzt als English Indices of Deprivation 2019, a hie steieft direkt Finanzéierung vun der Zentralregierung, d'Prioritéitesetzung an der ëffentlecher Gesondheet an d'Berechtegung fir Dosende vu lokale Programmer.

## Firwat et wichteg ass

Benodeelegung ass net eng Saach – e Quartier kann akommesaarm awer sécher sinn, oder akommesgenuch awer ënner schlechte Gesondheetsresultater a schlechte Wunnenge leiden. Dem IMD seng Virgängerindizes (zréck bis op d'Benodeelegungsindikatoren vum Department of the Environment aus den 1970er) hunn sech zum haitegen Modell mat siwen Domainen entwéckelt, genee well Zielsetzung duerch een eenzegen Indikator (zum Beispill nëmmen d'Chômagequote) routinéiert Géigenden verpasst huet, déi op aner Manéieren benodeelegt waren. Den IMD 2019 kombinéiert Akommes, Beschäftegung, Bildung, Gesondheet, Kriminalitéit, Barrièren zu Wunnengen a Servicer a Liewensëmfeld zu engem zesummegesate Rang pro LSOA, all Domaine opgebaut aus sengem eegene Koup vun Indikatoren a vun der Methodologie vum MHCLG gewiicht. Well hie op der Niveau vu klenge Gebidder (LSOA) amplaz op der Niveau vun der Gemeng schafft, deckt hie Benodeelegungstaschen op, déi sech an soss wuelhuewende Bezierker verstoppen – de Grond, firwat den IMD, net den duerchschnëttlechen Akommes vun der Gemeng, dat ass, no deem sech NHS England, d'Pupil Premium vum Department for Education an Dosende vu Finanzéierungsformele vu lokale Verwaltungen tatsächlech riichten. Software, déi d'Berechtegung festleet, d'Prioritéite vun der Outreach setzt oder d'Wierkung no Gebitt an England mellt, soll den IMD-Dezil oder -Rang als Input éischter Klass behandelen, net als Nogedanken – a wou e Programm bewosst déi am meeschte benodeelegt Gebidder unzilt, soll seng Bewäertung eng [Verdeelungsgewiichtung](../verdeelungsgewiichtung/) uwenden, déi mat dëser Zilsetzung konsequent ass, amplaz e Pound Notzen onofhängeg dovun, wou e landt, gläich ze bewäerten.

## D'Mathematik

```
7 Domainen, gewiicht:
  Akommes                                 22,5 %
  Beschäftegung                           22,5 %
  Bildung, Kompetenzen a Formatioun       13,5 %
  Benodeelegung bei der Gesondheet an Behënnerung  13,5 %
  Kriminalitéit                            9,3 %
  Barrièren zu Wunnengen a Servicer        9,3 %
  Liewensëmfeld                            9,3 %

All Domainescore: Indikatoren standardiséiert (gerangt, dann a Richtung
Normalverdeelung transforméiert) a duerch exponentiell Transformatioun
kombinéiert, sou datt héich Benodeelegung bei engem eenzegen Indikator net
komplett duerch niddreg Benodeelegung bei anere bannent deem Domaine
ausgeglach ka ginn.

IMD-Gesamtscore (LSOA) = Σ (Domainescore × Domainegewiicht)
LSOAs no Gesamtscore rangéieren → 1 (am meeschte benodeelegt) bis 32.844 (am mannsten benodeelegt)
Dezilen: Rang ÷ 3.284 (ongeféier), Dezil 1 = déi 10 % am meeschte benodeelegt LSOAs
```

## Rechebeispill

**Gesamtscore vun enger LSOA**, mat illustrativen standardiséierten Domainescoren (0 = kee Signal vun Benodeelegung, méi héich = méi benodeelegt):

```
Akommes                 0,35 × 0,225 = 0,07875
Beschäftegung           0,30 × 0,225 = 0,06750
Bildung                 0,20 × 0,135 = 0,02700
Gesondheet              0,15 × 0,135 = 0,02025
Kriminalitéit           0,10 × 0,093 = 0,00930
Barrièren zu Wunnengen  0,05 × 0,093 = 0,00465
Liewensëmfeld           0,08 × 0,093 = 0,00744

Gesamtscore = 0,07875 + 0,06750 + 0,02700 + 0,02025
            + 0,00930 + 0,00465 + 0,00744  = 0,21489
```

Dëse Gesamtscore gëtt dann géint d'Scoren vun allen 32.844 LSOAs gerangt. Wann en d'LSOA op Rang 2.950 setzt, fält se an den Dezil 1 (2.950 ÷ 3.284 ≈ 0,9, also bannent de 10 % am meeschte benodeelegte Quartiere vun England) – wat bei villen Finanzéierungsformelen d'Schwell ass, déi d'Berechtegung opmaacht, egal wéi déi ëmgi Gemeng am Duerchschnëtt ofschneit.

## Verbindung zur Softwareentwécklung

- All Service, deen Benotzer op Postleitzuel oder LSOA geocodéiert, ka mat der publizéierter IMD-Nosiichtabell (e gratis, versionéierte CSV vum MHCLG) verbonne ginn, fir den Benodeelegungsdezil als Kovariat derbäizefügen – fir Outreach ze zilen, Dossiersbelaaschtung ze prioritiséieren oder Resultater no Benodeelegungsband ze mellen, ouni nei perséinlech Daten ze sammelen.
- Den IMD-Dezil ass e Standard-Gerechtegkeetscheck fir ëffentlech digital Servicer: d'Notzung vum Service, Ofbroch oder Zefriddenheet no IMD-Dezil kräizweis ze tabuléieren, deckt Zougangslécken op, déi eng aggregéiert Metrik verstoppt – kuckt [digital Inklusioun](../digital-inklusioun/) an [Metrike fir d'Zefriddenheet vun de Bierger](../metrike-fir-dzefriddenheet-vun-de-bierger/).
- Well den IMD-Rang relativ ass (e summéiert sech ëmmer op e fixe Saz vu Ränge fir England), kann e net weisen, ob d'Benodeelegung national mat der Zäit klëmmt oder fält – nëmmen, wéi eng Géigenden an där Editioun relativ zuenee ranken; baut keng absolut Trend-Dashboards eleng op dem rouen IMD-Rang op.

## Feelerquellen

- **IMD-Ränge tëscht Editiounen (2015 vs. 2019) als Zäittrend vergläichen** – d'zougrondeliegend Indikatoren, Geografien a Methodologie änneren sech all tëscht Editiounen; de MHCLG rotet explizit dovunner of, Rangännerungen als Beweis ze notzen, datt eng Géigend méi oder manner benodeelegt gouf.
- **IMD op der Niveau vun der LSOA op Eenzelpersoune uwenden** – eng LSOA am Dezil 1 enthält nach ëmmer net benodeelegt Haushalter, an eng LSOA am Dezil 10 enthält nach ëmmer benodeelegt; den IMD beschreift Géigenden, net Leit, a wann een en als Proxy fir d'Berechtegung vun Eenzelen notzt, klassifizéiert een a béid Richtungen falsch.
- **Detailer op Niveau vun de Domainen zugonschte vum Gesamtrang ignoréieren** – zwou LSOAs mat identesche Gesamtscore kënne komplett verschidde Domaineprofiller hunn (eng bei der Gesondheet benodeelegt, eng bei der Kriminalitéit); e Zilsystem, dat op ee Problem ausgeriicht ass, soll de relevanten Domainescore notzen, net de vermëschte Gesamtscore.

## Quellen

- Ministry of Housing, Communities and Local Government. "English Indices of Deprivation 2019."
  <https://www.gov.uk/government/statistics/english-indices-of-deprivation-2019>
- MHCLG. "The English Indices of Deprivation 2019: Technical Report."
