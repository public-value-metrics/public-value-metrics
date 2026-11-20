# Gesamtbesëtzkäschte (TCO) an der Verwaltungs-IT

D'Gesamtbesëtzkäschte (Total Cost of Ownership, TCO) sinn déi voll Käschte vum Liewenszyklus vun engem System – Uschaffung plus all Joer Betrib –, op en gemeinsamen Datum diskontéiert. An der Verwaltungs-IT ass dee zouverlässegste Prognosefeeler, Lieferanten oder Optiounen eleng no dem Uschaffungspräis ze vergläichen, obwuel Betrib an Ënnerhalt typesch tëscht der Hallschent a véier Fënneftel vun der Gesamtrechnung iwwer d'Liewensdauer ausmaachen.

## Firwat et wichteg ass

De Green Book vum HM Treasury verlaangt, datt de Finanzfall an all Business Case no dem Five Case Model d'Käschte vum ganze Liewen ofdeckt, net nëmmen d'Kapitalausgaben – trotzdem huet den National Audit Office widderholl festgestallt, datt Ministèren IT-Investitiounen op Basis vun enger onvollstänneger oder optimistescher Prognos vun de lafende Käschten genehmegt hunn, nëmmen fir déi wouer Betribskäschte festzestellen, soubal de System live ass an d'Kapitalbudgetzeil zou ass. Den Technology Code of Practice vum Government Digital Service an dem Central Digital and Data Office (<https://www.gov.uk/guidance/the-technology-code-of-practice>) dréckt d'Ministèren a Richtung Cloud an Standard-Hosting, deelweis well dat déi lafend Käschten siichtbar a vergläichbar mécht, amplaz se an enger eenzeger Kapitalvergabezuel ze verstoppen, déi bei der Genehmegung attraktiv niddreg ausgesäit an dräi Joer méi spéit deier falsch ass.

## D'Mathematik

```
TCO = Uschaffungskäschten + Σ(t=1..N) jäerlech Betribskäschten_t / (1+r)^t
      − Restwäert (diskontéiert)

r = Standard-Sozialdiskontsaz vum Green Book (HM Treasury), 3,5 %/Joer
    (ofhuelende Plang fir Horizonte vu méi wéi 30 Joer)

Komponente vun de Betribskäschten: Hosting/Lizenzen, Support an Ënnerhalt,
Sécherheetspatches a Compliance, Personalzäit, geplangten Erneierung/Migratioun
```

Kuckt [sozialen Diskontsaz](../sozialen-diskontsaz/) dofir, firwat de Diskontfaktor iwwer eng typesch Systemliewensdauer vu 5–10 Joer wichteg ass, an [Selwer bauen oder kafen an der Verwaltung](../selwer-bauen-oder-kafen-an-der-verwaltung/) dofir, wéi d'TCO an eng Build/Buy-Entscheedung fléisst.

## Rechebeispill

E Ministère vergläicht zwee Systemer fir d'Fallverwaltung op engem 5-Joer-Horizont bei engem Diskontsaz vun 3,5 % no dem Green Book.

```
System A: Capex £3.500.000, Opex £250.000/Joer
System B: Capex £1.800.000 (gesäit méi bëlleg aus), Opex £650.000/Joer
          (méi grouss Belaaschtung duerch Support vum Hiersteller an Integratioun)

Naive Verglach nëmmen no Capex: B gewënnt, £1,8 Mio. < £3,5 Mio.

Zomm vun den Diskontfaktoren, 5 Joer bei 3,5 %: 0,966+0,934+0,902+0,871+0,842 ≈ 4,515

TCO_A = 3.500.000 + 250.000 × 4,515 = 3.500.000 + 1.128.750 = £4.628.750
TCO_B = 1.800.000 + 650.000 × 4,515 = 1.800.000 + 2.934.750 = £4.734.750
```

D'TCO dréit déi naiv Entscheedung ëm: System B ass iwwer fënnef Joer knapp méi deier, soubal d'Betribskäschten diskontéiert an zesummegezielt sinn, well säin Opex-Undeel un de Käschte vun der ganzer Liewensdauer 62 % (2.934.750 / 4.734.750) ass, géint 24 % bei System A – e konkrete Fall vum Befund „Ënnerhalt ass de gréissten Deel vun der Rechnung", deen duerch de Verglach vun de Katalogpräisser komplett verstoppt bleift.

## Verbindung zur Softwareentwécklung

D'TCO ass d'Zuel, déi all [Build-vs-Buy](../selwer-bauen-oder-kafen-an-der-verwaltung/)-Entscheedung an all Fall fir d'Ofbezuele vun [technescher Schold](../technesch-schold-als-erosioun-vum-ëffentleche-wäert/) disziplinéiere soll, well Scholdzënsen an opgeschuewen Ënnerhalt allen zwee Betribskäschtepositioune sinn, déi an dieselwecht diskontéiert Gesamtzuel gehéieren, egal ob se een nogehalen huet oder net. Ingenieuren, déi eng Plattform- oder Hiersteller-Wiel virschloen, sollten déi voll TCO-Tabell presentéieren, net de Vergabepräis, well de Vergabepräis genee déi Zuel ass, op déi sech d'Ministèren no dem Design vum Finanzfall vum Green Book net eleng verloosse sollen. D'TCO ass och den éierlechen Nenner fir Uerteeler iwwer de [Preis-Leeschtungs-Verhältnis](../preis-leeschtungs-verhältnis/) – VFM vergläicht Notzen mat Käschten, an eng ënnerzielt Käschtepositioun bléist all VFM-Verhältnis am Business Case op.

## Feelerquellen

- **Vergläich nëmmen no Capex**: dee gängegste Vergabefeeler – Katalogpräisser vu Lieferanten ze vergläichen, ouni fir all Optioun eng passend Prognos vun de Betribskäschten.
- **Ausstiegs- a Migratiounskäschte weglosen**: Datenextraktioun um Enn vum Kontrakt, Re-Platforming a Strofe fir Hiersteller-Lock-in sinn echt TCO-Zeilen, déi am ursprénglechen Business Case selte virkommen.
- **Sécherheets- a Compliancekäschte weglosen**: Patch-Kadenz, Erneierung vun der Akkreditéierung an Auditkäschte wuessen mat dem Alter an der Komplexitéit vum System – kuckt [Wäert vun der Cybersécherheet am ëffentleche Secteur](../wäert-vun-der-cybersécherheet-am-ëffentleche-secteur/) – a ginn an der Opex-Prognos reegelméisseg vergiess.
- **Net diskontéierte Verglach tëscht Optiounen mat ënnerschiddleche Käschteprofiller**: eng Capex-schwéier Optioun mat enger Opex-schwéierer ouni Diskontéierung ze vergläichen, bevorzugt systematesch déi Optioun, déi zoufälleg méi Käschte an déi spéider Joren verschibt.

## Quellen

- HM Treasury, *The Green Book: Central Government Guidance on Appraisal and Evaluation*, 2022. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
- Central Digital and Data Office, Technology Code of Practice. <https://www.gov.uk/guidance/the-technology-code-of-practice>
- National Audit Office, *Digital Transformation in Government*. <https://www.nao.org.uk/>
