# Servicestandarden an Transaktiounsmetriken

De GOV.UK Service Standard ass d'14-Punkte-Checklëscht vun der UK-Regierung fir en ëffentleche digitale Service ze bauen a
ze bedreiwen, a kënnt mat enger klenger, obligatorescher Rei vu quantitativen Transaktiounsmetriken – Käschte pro
Transaktioun, Ofschlossquote, digital Notzung a Zefriddenheet vun de Benotzer –, déi Teams fir all Live-Service vun der
Zentralregierung musse publizéieren. Zesumme sinn de Standard an d'Metriken déi operationell, alldeeglech Spezialiséierung vun de méi
breede Kaderen fir ëffentleche Wäert a KPIe an dësem Repository, riicht ausgeriicht op Software-Delivery-Teams.

## Firwat et wichteg ass

De Service Standard, am Service Manual vu GOV.UK ënnerhalen, verlaangt, datt all Bewäertung zu engem bestëmmte Moment (Alpha, Beta,
Live) vun engem digitale Regierungsservice – ënner senge 14 Punkten – weist, datt d'Team d'Bedierfnesser vun de Benotzer versteet,
an engem multidisziplinären Team schafft, dacks iteréiert a verbessert an *Tools, Systemer an Aarbechtsweisen evaluéiert*.
Historesch stoung dat niewent enger ëffentlecher Performance Platform, wou all Live-Service seng Transaktiounsdaten
oppen publizéiert huet; dës Plattform gouf zënterhir ofgeschaaft, mä d'ënnerläiend Verflichtung, dës véier Kärmetriken ze messen an ze
publizéieren, besteet iwwer d'Leitlinn „Measuring Success“ vum Service Manual weider. De Grond, firwat sech dat vun engem
generesche Software-KPI-Dashboard ënnerscheet, ass, datt dës Metriken ausdrécklech als een zesummenhängend wirtschaftlecht Modell
designt goufen, net als véier onofhängeg Scores: de ganze Spuer-Fall fir digital Regierung – de Digital Efficiency Report vum Government
Digital Service huet digital Transaktiounen ongeféier 20 Mol méi bëlleg wéi iwwer Telefon a ronn 50 Mol méi bëlleg wéi perséinlech
fir vergläichbar Servicer vun lokale Regierungen fonnt – realiséiert sech nëmmen, wann d'Ofschlossquote héich bleift an
d'digital Notzung tatsächlech klëmmt, amplaz just e bëllege Kanal niewent engem onverännerten deieren derbäizesetzen.

## D'Mathematik

```
Käschte pro Transaktioun = Gesamtbetribskäschte vum Service / Zuel vun den ofgeschlossenen Transaktiounen
Ofschlossquote           = ofgeschloss Transaktiounen / ugefaange Transaktiounen × 100
Digital Notzung          = Transaktiounen am digitale Kanal / Transaktiounen an alle Kanäl × 100
Zefriddenheet vun de Notzer = % zefridden + ganz zefridden, an enger 5-Punkte-Ëmfro am Service

Aspuerung duerch Kanalverschiebung = Transaktiounsvolumen × Verschiebung vun der Notzung × (Käschte pro Transaktioun
                                     um ale Kanal − Käschte pro Transaktioun digital)

Käschte vun der Feelernofro = (1 − Ofschlossquote) × digital probéiert Transaktiounen ×
                              Käschte vum Ausweichkanal, deen déi Notzer dann amplaz benotzen
```

## Rechebeispill

**Illustrativen Service vun der Zentralregierung fir d'Erneierung vu Lizenzen**, 2 Millioune Transaktiounen/Joer,
aktuell 65 % Telefon (£3,00/Transaktioun) an 35 % digital (£0,30/Transaktioun), Ofschlossquote 80 %.
En Redesign no dem 14-Punkte-Service-Standard hieft d'digital Notzung op 60 % an d'Ofschlossquote op 92 %:

```
Aspuerung duerch Notzungsverschiebung = 2 000 000 × 0,25 × (3,00 − 0,30) = £1 350 000/Joer

Käschte vun der Feelernofro, virdrun:
  2 000 000 × 0,35 × (1 − 0,80) × £3,00 = £420 000/Joer (Ofbrecher falen op d'Telefon zréck)

Käschte vun der Feelernofro, duerno:
  2 000 000 × 0,60 × (1 − 0,92) × £3,00 = £288 000/Joer

Netto-Aspuerung bei der Feelernofro = £420 000 − £288 000 = £132 000/Joer

Gesamt jäerlech Aspuerung ≈ £1 350 000 + £132 000 = £1 482 000/Joer
```

D'Rechnung mécht explizit, firwat d'Ofschlossquote keng zweetrangeg Metrik ass: ouni d'Verbesserung vun 80 % op 92 %
géif d'Aspuerung duerch d'Notzungsverschiebung deelweis erëm opgefriess duerch Feelernofro, déi frustréiert digital Notzer
direkt zréck op dee deiere Telefonkanal leet.

## Verbindung zur Softwareentwécklung

Dës véier Metriken sinn e funktionnéierend Beispill vun engem Cost-Consequence-Dashboard: eng Käschtemetrik, getrennt vun dräi
Outcome-/Qualitéitsmetriken gehalen, bewosst ni zu engem eenzege Score zesummegefaasst – dat selwecht
Disziplin, wéi se bei [KPIe fir den ëffentleche Secteur](../kpie-fir-den-ëffentleche-secteur/) gefuerdert gëtt. Fir Ingenieure
zerfält dat a konkret, besëtzbar Aarbecht: d'Ofschlossquote ass e Problem vun der Funnel-Instrumentéierung, an all
Ofbrochpunkt an der Journey ass prinzipiell lokaliséierbar a behiewbar; Käschte pro Transaktioun verlaangen eng richteg
Rechnung vun Eenheetskäschte, déi Käschte fir assistéiert a Pabeierkanäl abegräift, net nëmmen d'Cloud-Hosting-Ausgab
(kuckt [Käschte pro Transaktioun](../käschte-pro-transaktioun/) an
[Gesamtbesëtzkäschte vun der Regierungs-IT](../gesamtbesëtzkäschte-an-der-verwaltungs-it/)); an
d'digital Notzung ass eng Equity-Metrik am Effizienzkostüm – d'Bierger, déi de Kanal net kënnen oder net wëllen wiesselen, sinn
iwwerproportional eeler, behënnert oder digital ausgeschloss, sou datt eng aggressiv Schléissung vu Kanäl eng „Aspuerung“ an e
Schued fir den Zougang ëmwandelt (kuckt
[Digital Inklusioun](../digital-inklusioun/) an [Aspuerunge duerch Kanalverschiebung](../spuerunge-duerch-kanalverlagerung/)).
De 14-Punkte-Standard selwer ass d'Prozessspezifikatioun hannert dëse Zuelen – kuckt
[Digital Service Standard](../standard-fir-digital-servicer/) fir de Standard am Ganzen, an
[Metriken fir d'Zefriddenheet vun de Bierger](../metrike-fir-dzefriddenheet-vun-de-bierger/), wéi d'Zefriddenheetszuel hei
mat der méi breeder Miessung vum Vertrauen zesummenhänkt.

## Feelerquellen

- **Notzung gewonnen duerch d'Schléissung vum Alternativkanal**: eng Telefonsleitung zouzemaachen hieft de Prozentsaz
  vun der digitaler Notzung rechnerech, während d'Feelernofro op de Kanal ofgeluede gëtt, deen iwwreg bleift (dacks eng deier
  assistéiert digital oder perséinlech Route); ëmmer d'Gesamtsystemkäschte moossen, net nëmmen de Verhältnis.
- **D'Ofschlossquote ab Schrëtt zwee vum Funnel moossen**: d'Zuel vun den „ugefaangenen“ no dem éischte
  richtegen Ofbrochpunkt unzefänken flattéiert d'Ofschlossquote a verstoppt de gréisste behiewbare Verloscht.
- **Käschte pro Transaktioun ouni assistéiert digital Ënnerstëtzung**: eng digital Eenheetskäschte, déi d'Personalzäit
  fir Notzer ignoréiert, déi sech net selwer bedéngen kënnen, ënnerschätzt déi richteg Käschte vum Kanal.
- **Metriken ouni gemeinsam Definitioun iwwer Servicer publizéieren**: „Transaktioun“ an „ofgeschloss“ bedeiten bei
  ënnerschiddlechen Serviceteams ënnerschiddlech Saachen, ausser d'Definitioune ginn standardiséiert a versionéiert, wat de
  Vergläich tëscht Servicer onzouverlässeg mécht.

## Quellen

- GOV.UK Service Manual, "The Service Standard." <https://www.gov.uk/service-manual/service-standard>
- GOV.UK Service Manual, "Measuring Success — Data You Must Publish."
  <https://www.gov.uk/service-manual/measuring-success/data-you-must-publish>
- GOV.UK, "Digital Efficiency Report."
  <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
