# Alternativen zum BIP

Alternative zum BIP si Metriken, déi erfaasse sollen, wat d'Bruttoinlandsprodukt strukturell ignoréiert: onbezuelt Betreiungsaarbecht, Ëmweltzerstéierung, d'Akommesverdeelung, an ob Wuesstum d'Liewe wierklech verbessert. Déi bekanntst sinn de Genuine Progress Indicator (GPI) an dem Bhutan säin Index vum Gross National Happiness (GNH); de Fall, se eescht ze huelen, gouf am aflossräichsten vun der Stiglitz-Sen-Fitoussi-Kommissioun vun 2009 gemaach. Fir Entwéckler, déi Regierungs-Dashboards oder KPI-Systemer bauen, ass „wéi eng Zuel zielt als Fortschrëtt“ eng Designentscheedung mat echte Konsequenze fir dat, wat finanzéiert gëtt.

## Firwat et wichteg ass

De Simon Kuznets, deen an den 1930er d'amerikanesch nationale Comptë opgebaut huet, huet de Kongress 1934 gewarnt, datt „de Wuelstand vun enger Natioun sech kaum aus enger Moossung vum Nationaleakommes ofleede léisst“ – e Virbehalt, deen d'Zuel bal direkt hannert sech gelooss huet. D'BIP zielt d'Botzen no engem Uelegschued als Wuesstum a dem Elterendeel seng onbezuelt Kannerbetreiung als näischt; et ënnerscheet net tëscht Ausgaben, déi dauerhaft Wuelbefannen opbauen, an Ausgaben, déi just schonn ugeriichte Schued ausgläichen. D'Stiglitz-Sen-Fitoussi-Kommissioun, vum franséische President Nicolas Sarkozy zesummegeruff a vum Joseph Stiglitz, Amartya Sen a Jean-Paul Fitoussi gefouert, huet 2009 beriicht, datt statistesch Systemer den Akzent „vun der Moossung vun der wirtschaftlecher Produktioun op d'Moossung vum Wuelbefanne vun de Leit“ verleeë sollten, an datt Nohaltegkeet getrennt vum aktuelle Wuelbefannen verfollegt ginn soll, amplaz an eng eenzeg Zuel gefaltet ze ginn. Alternativen zum BIP maachen dës Recommandatioun operationell. De GPI, vum Thinktank Redefining Progress an den 1990er entwéckelt an opbauend op dem William Nordhaus an dem James Tobin hirem Measure of Economic Welfare vun 1972, geet vum perséinleche Konsum aus (wéi d'BIP) a füügt dann Notzen ausserhalb vum Maart derbäi, déi d'BIP weglooss (Haushaltsaarbecht, Benevolat), wärend e defensiv Käschten a Käschte vun der Ressourceverschwendung (Kriminalitéit, Ëmweltverschmotzung, Pendelen, Ofbau vu Ressourcen) ofzitt, déi d'BIP zu Onrecht als positiv zielt. Dem Bhutan säin GNH-Index, vum GNH Centre Bhutan verwalt (<https://www.gnhcentre.bt/>), geet nach weider, an ersetzt d'Wuesstum als constitutionellt festgehaalent Zil vum Land: en aggregéiert 33 Indikatoren iwwer 9 Beräicher – psychologescht Wuelbefannen, Gesondheet, Bildung, Zäitverwendung, kulturell Villfalt, Gouvernance, Vitalitéit vun der Gemeinschaft, ökologesch Villfalt a Liewensstandard – an e Suffisanz-baséierte Score, deen direkt benotzt gëtt, fir Politikpropose vun der Regierung ze screenen.

## D'Mathematik

```
GPI = perséinlech Konsumausgaben
      + Notzen ausserhalb vum Maart (Haushaltsaarbecht, Benevolat, héich Bildung)
      − defensiv a sozial Käschten (Kriminalitéit, Ëmweltverschmotzung, Pendelen, Opléise vu Familljen)
      − Ofbau vum natierleche a sozialen Kapital (Ressourceverbrauch, Verloscht vun Ackerland)

GNH-Suffisanz-Score, pro Beräich:
  eng Persoun ass an engem Beräich „suffisant“, wa se bei all Indikator seng Schwell erreecht
  Gléckindex = (% vun der Bevëlkerung, déi an ≥ 6 vun 9 Beräicher suffisant ass)
               + (gewiichtegen duerchschnëttlechen Defizit vun der „nach net glécklecher“ Minoritéit)
```

## Rechebeispill

**Regioun, GPI**: de perséinleche Konsum ass $50 Mrd. Derbäi kënnt de geschate Wäert vun der Haushalts- a Benevolatsaarbecht vun $12 Mrd. (Léin no de Wiederbeschaffungskäschten – kuckt [Wäert vun der Benevolatszäit](../wäert-vun-der-fräiwëllegenzäit/)). Ofgezunn ginn déi geschate jäerlech Käschte vum Stau beim Pendelen ($3 Mrd.), vun der Kriminalitéit ($4 Mrd.) an der laangfristeger Ressourceverschwendung ($6 Mrd.):

```
GPI = 50 + 12 − 3 − 4 − 6 = 49 ($ Mrd.)
```

Wann d'BIP an deem Joer vun $50 Mrd. op $55 Mrd. gewuess ass (+10 %), awer defensiv Käschten a Käschte vun der Ressourceverschwendung méi séier gewuess sinn wéi de Konsum, kann de GPI falen, och wann d'BIP klëmmt – déi „Schwellenhypothees“, déi GPI-Fuerscher fir Wirtschaften mat héijem Akommes zitéieren, zënter ongeféier den 1970er, wéi d'Wuesstum weider geklomme ass, wärend de GPI stagnéiert huet.

**Bierger, GNH**: eng befrote Persoun erreecht d'Suffisanz-Schwell an 7 vun 9 Beräicher (Gesondheet, Bildung, Liewensstandard, Vitalitéit vun der Gemeinschaft, kulturell Villfalt, ökologesch Villfalt, Zäitverwendung), bleift awer beim psychologesche Wuelbefannen a bei der Gouvernance drënner. Well 7 ≥ 6, gëtt se an der Kopfzuel als „glécklech“ gezielt; den Index verfollegt separat d'Déift vun hiren zwee Defiziter, sou datt e knappe Pass net vun engem bequemen ze ënnerscheeden ass.

## Verbindung zur Softwareentwécklung

- E KPI-Dashboard, dat nëmmen no Duerchsaz oder Ausgabe modelléiert ass (d'BIP-Muster), verpasst systematesch de Schued, dee beim Produzéiere vun deem Duerchsaz entsteet – Support-Ticket-Volumen, dat als „Engagement“ amplaz als „Nout vun de Benotzer“ behandelt gëtt, ass d'Versioun vun der Softwareliwwerung vum Zielen vun engem Uelegschued als Wuesstum.
- Eng Rechnung am GPI-Stil ass e nëtzt Audit-Muster fir all [KPI-Suite vum ëffentleche Secteur](../kpie-fir-den-ëffentleche-secteur/): fir all Haapt-Output-Metrik froen, wéi eng defensiv Käschte se roueg verursaacht (Nobesserung, Virfallreaktioun, Burnout) an se ofzéien, sou wéi de GPI defensiv Ausgabe vum Konsum ofzitt.
- D'Methode vun der Suffisanz pro Beräich vum GNH – bestanen/net bestanen pro Dimensioun, dann aggregéieren – ass strukturell déiselwecht Technik wéi [multikriteriell Entscheedungsanalys](../multikriteriell-entscheedungsanalyse/) a lount sech iwwerall ze benotzen, wou eng eenzeg Skalarzuel eng kritesch ausfalend Dimensioun géif verstoppen.

## Feelerquellen

- **De GPI als präzis nationale Comptë behandelen** – am Géigesaz zur BIP huet de GPI keng eenzeg standardiséiert Methodologie; verschidde Studie gewiichte Pendelkäschten, Benevolatszäit oder Ressourceverschwendung ënnerschiddlech, sou datt GPI-Verglächer tëscht Studien vill manner zouverlässeg si wéi BIP-Verglächer tëscht Länner.
- **De GNH ganz an eng aner Politikkultur importéieren** – seng Beräichsgewiichter a Suffisanz-Schwellen goufe duerch Konsultatioun a Bhutan festgeluecht; d'Zuel ouni de zougrondeliegende Konsultatiounsprozess ze kopéieren, produzéiert eng huel Metrik, där keen traut.
- **Unhuelen, eng BIP-Alternativ ersetzt d'Käschte-Notzen-Bewäertung** – dëst sinn diagnostesch, wirtschaftsweit Indikatoren, keng Entscheedungsinstrumenter fir e eenzele Programm; benotzt dofir [sozial Käschte-Notzen-Analyse](../sozial-käschte-notze-analys/).

## Quellen

- Stiglitz JE, Sen A, Fitoussi J-P. "Report by the Commission on the Measurement of Economic
  Performance and Social Progress." (2009) <https://ec.europa.eu/eurostat/documents/118025/118123/Fitoussi+Commission+report>
- GNH Centre Bhutan. <https://www.gnhcentre.bt/>
- Redefining Progress. "The Genuine Progress Indicator: A Tool for Sustainable Development."
- Nordhaus WD, Tobin J. "Is Growth Obsolete?" (1972), NBER.
