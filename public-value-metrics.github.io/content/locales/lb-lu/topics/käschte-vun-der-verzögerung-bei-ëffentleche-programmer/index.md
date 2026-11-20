# Käschte vun der Verzögerung bei ëffentleche Programmer (Cost of Delay, CoD)

D'Käschte vun der Verzögerung (Cost of Delay) sinn de ëffentleche Wäert, deen pro Zäiteenheet verluer geet, an där e Programm, en Déngscht oder eng Systemännerung *nach net* geliwwert ass. Et ass d'Meeschter-Brécke-Metrik vun dëser Grupp vun Themen: si rechent „de Go-live ass sechs Méint verréckelt ginn" a Pond pro Woch ëm, oder a WELLBYs pro Woch, sou datt iwwer d'Verzögerung an der selwechter Währung diskutéiert ka ginn wéi am Businesscase selwer.

## Firwat et wichteg ass

Dem Reinertsen seng Regel – „wann Dir nëmmen eng Saach quantifizéiert, quantifizéiert d'Cost of Delay" – gëtt an d'Verwaltung bal onverännert iwwerdroen, well ëffentlech Programmer ongewéinlech exponéiert sinn: Businesscase ginn géint e prognostizéierte Notzenstroum genehmegt, awer de Stroum fänkt eréischt beim Go-live un ze fléissen, an all Woch Verspéidung ass eng Woch vu verluerene Wäert, déi keen am Risikoregister bepreist. D'widderhuelend Kontroll vum National Audit Office iwwer d'Ausrollung vum Universal Credit (kuckt seng Rapporte „Rolling Out Universal Credit", <https://www.nao.org.uk/>) illustréiert d'Muster: d'Verspéidung vum Zäitplang gouf verfollegt a gemellt, awer d'Pond-pro-Woch-Käschte vum *Nach-net*-Liwwere vum reforméierte System un déi nächst Grupp vu Reklamanten goufe selte als Schlagzuel genannt, och wann et déi Zuel ass, déi d'Prioritéiten an d'Eskalatioun hätt sollen dreiwen. Ouni eng CoD-Zuel gesäit e verspéidte Programm wéi e Zäitplanproblem fir de Liwwerrot aus; mat enger ass et e Problem vun der Eroosioun vum Wäert fir de Rechnungsbeamten (Accounting Officer).

## D'Mathematik

```
CoD = Notzen pro Zäiteenheet, déi verluer ginn, wärend net geliwwert ass   (£/Woch oder WELLBYs/Woch)

Gesamtverloscht duerch Verzögerung = CoD × Dauer vun der Verzögerung

Notzestréim, déi bei ëffentleche Programmer zesummegezielt ginn:
  cash-fräisetzend Spuerungen   (Reduktioun vu Bedruch/Feeler, vermidde temporär Käschten)
+ net-cash fräigesat Kapazitéit (Stonne vu Sachbearbechter/Beamten × voll berechent Käschten)
+ Wuelbefannensnotzen          (WELLBYs × £13.000/WELLBY, HMT Green Book
                                 Zousazleetlinn zum Wuelbefannen, Präisser vun 2019)
```

Bei Servicer fir Bierger sollt een och am Wuelbefannen denominéieren, net nëmmen a Geld – kuckt [wuelbefannensgewiichte Liewensjoer](../wuelbefannen-ugepasst-liewensjoren/) fir déi zougrondeliggend Eenheet, an [Opportunitéitskäschte bei ëffentlechen Ausgaben](../opportunitéitskäschte-bei-ëffentlechen-ausgaben/) fir dat, wat dat verspéidte Pond soss hätt kënne finanzéieren.

## Rechebeispill

**Lokal Verwaltung**: eng Upgrade vum System fir d'Wunnengsbäihëllef reduzéiert de Feeler bei Iwwerzuelungen em £150/Dossier/Joer bei 20.000 lafenden Dossieren.

```
Joresnotzen = 150 × 20.000 = £3.000.000/Joer
CoD = 3.000.000 / 52 ≈ £57.700/Woch
Eng Verzögerung vun der Ëmsetzung em 12 Méint kascht 52 × 57.700 ≈ £3.000.000 un vermeidbare Feeler.
```

**Agence vun der Zentralregierung**: en Evaluatiounsdéngscht fir Behënnerungsleeschtungen, sechs Méint (26 Wochen) méi spéit geliwwert wéi geplangt, bedeit, datt 200.000 Reklamanten/Joer am Duerchschnëtt dräi Woche méi laang op eng Entscheedung waarden. All zousätzlech Woch un finanzieller Onsécherheet gëtt als Effekt vun −0,0018 WELLBY (Punkt vun der Liewenszefriddenheet) modelléiert:

```
WELLBY-Verloscht pro Reklamant = 3 × 0,0018 = 0,0054
Jährleche WELLBY-Verloscht = 200.000 × 0,0054 = 1.080 WELLBYs/Joer
CoD_Wuelbefannen = 1.080 / 52 ≈ 20,8 WELLBYs/Woch
CoD_Geld = 20,8 × £13.000 ≈ £270.000/Woch un Wuelbefannenswäert
```

Eng Verzögerung vu 26 Wochen „kascht" also ongeféier 540 WELLBYs – ongeféier £7 Milliounen un der Wuelbefannensbewäertung vum Green Book wäert –, wat e verpasst Go-live-Datum als Ereegnes fir d'Wuelbefannen vun de Bierger neu rahmt, net als Fousnott vum Projetmanagement.

## Verbindung zur Softwareentwécklung

CoD ass dat, wat [DORA-Metrike](../dora-metriken-fir-ëffentleche-wäert/) an [Flow-Metriken](../flowmetriken-an-der-regierungsliwwerung/) finanziell liesbar mécht: Durchlaafzäit an der Pipeline × CoD ass Geld (oder Wuelbefannen), dat a Schlaangen verbrannt gëtt, ier et en Bierger erreecht. Konkret:

- **Prioritéitssetzung**: e Backlog no CoD ÷ Dauer rangéieren amplaz no der Senioritéit vum Stakeholder – dat Softwareingenieur-Analogon zu der Fuerderung vum Green Book, Optiounen no Wäert ze bewäerten, net no deem, deen freet.
- **Beschaffung**: e Rahmenbeschaffungszyklus vun 12–18 Méint huet eng CoD; se ze bepreisen ännert den Dringlechkeetscase fir beschleunegt Weeër a fléisst direkt an [Build-vs-Buy](../selwer-bauen-oder-kafen-an-der-verwaltung/)-Entscheedungen an, wou d'Time-to-Value en Entscheedungsfaktor ass.
- **Notzecase**: all CoD-Zuel, déi bei der Genehmegung genannt gëtt, soll bei der [Realiséierung vun Notzen](../realiséierung-vun-notzen/) erëmkommen – wann d'Käschte vun der Verzögerung real waren, sollt déi beschleunegt Notzen no dem Go-live moossbar sinn.

## Feelerquellen

- **Eng linear CoD unhuelen**: verschidden ëffentlech Servicer hunn e Wäert mat Frist-Charakter (e gesetzlecht Compliance-Datum – d'CoD sprengt no dem Datum op d'Niveaue vum Duerchsetzungsrisiko, virdrun bal null) amplaz vun engem glatte wöchentleche Saz. D'Dringlechkeetsprofil klasséieren, ier multiplizéiert gëtt.
- **CoD op Outputs, déi keen brauch**: Verzögerung huet nëmmen Käschten, wann dat, wat net geliwwert ass, e Wäert huet; e System, deen keen notze wäert, huet null CoD, egal wéi spéit en ass.
- **Verzögerung an Diskontéierung duebel zielen**: de [sozialen Diskontsaz](../sozialen-diskontsaz/) bepreist d'Zäit schonn op méijäregen Appraisal-Horizonter; d'CoD ass déi operativ Versioun bannent dem Horizont fir Wochen a Méint. CoD fir Verspéidung vum Zäitplang benotzen, d'Verréckele vum NPV fir méijäreg Ëmphaséierung.

## Quellen

- Reinertsen DG, *The Principles of Product Development Flow*, Celeritas Publishing, 2009.
- HM Treasury, Green Book supplementary guidance: wellbeing. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>
- National Audit Office, reports on Universal Credit rollout. <https://www.nao.org.uk/>
