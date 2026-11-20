# Technesch Schold als Erosioun vum ëffentleche Wäert

Technesch Schold (Technical Debt) ass dem Ward Cunningham seng Metapher vun 1992 fir déi implizit zukünfteg Käschte vu bequemen Entscheedungen am Code aus der Vergaangenheet: e **Kapital** (d'Sanéierungsaarbecht, déi nach aussteet) an en **Zins** (de lafende Bremseffekt op d'Liwwerung). An engem ale Regierungs-IT-Bestand gëtt dee Zins direkt aus dem ëffentleche Wäert bezuelt – méi lues Ëmsetzung vu gesetzlechen Ännerungen, méi héich Feelerquote bei Servicer fir d'Bierger, an e schrumpfende Krees vu Leit, déi dat System iwwerhaapt nach sécher unhuele kënnen.

## Firwat et wichteg ass

Ale Mainframe- a COBOL-Systemer an de britesche Regierungsministèren – HMRC an DWP gehéieren zu de meescht zitéierten – droen e gutt dokumentéiert a wuessend Risiko, op deen den National Audit Office widderholl higewisen huet, och a sengem Rapport *Digital Transformation in Government* (<https://www.nao.org.uk/>): alternd Plattformen, déi deier z'änneren, ëmmer méi schwéier ze sécheren a vun enger Spezialisteschaft ofhängeg sinn, déi méi séier a Rent geet, wéi se ersat gëtt. Am Géigesaz zu engem Réckstand am Privatsecteur steet dës Schold direkt tëscht de Bierger an hire gesetzleche Usprëch – e System zur Berechnung vu Leeschtungen, dee sech net sécher änneren léisst, ass eng Aschränkung bei der Ëmsetzung vun der Politik, net just eng ingenieurtechnesch Ongelegenheet. Den Neistart vum IT-Programm Universal Credit 2013, wou den National Audit Office festgestallt huet, datt de ursprénglechen Opbau kee Preis-Leeschtungs-Verhältnis liwwere géif an en erhieleche Deel vum Softwareaktiv ofgeschriwwe musse ginn ass, ass e klassescht Beispill dofir, wéi onbepräisten technesche Schold e lafend, ministeriell siichtbar ëffentlecht Programm anhëlt.

## D'Mathematik

```
SQALE-Kapital = Σ iwwer Verstéiss (Sanéierungszäit) × Entwécklerkäschtesaz
Technical Debt Ratio (TDR) = Sanéierungskäschten / Neientwécklungskäschten × 100
                    (SonarQube-Notten: A ≤5 %, B ≤10 %, C ≤20 %, D ≤50 %)

Zins (d'Zuel, déi d'Ofbezuele rechtfäerdegt):
  Zins/Joer = Δ Liwwergeschwindegkeet × Wäert pro Eenheet vun der Geschwindegkeet
            + Δ Quote vu Virfäll bei Biergerservicer × Käschte pro Virfall
            + Spezialistenzouschlag × betraffe Personalstärkt
Ofbezuelungsfall = PV(vermidde Zinsen iwwer den Horizont) − Sanéierungskäschten
               (diskontéiert mam sozialen Diskontsaz vum Green Book, kuckt
               social-discount-rate.md)
```

D'Kapital stellt d'Verflichtung duer; de Zins ass dat, wat dem Public Accounts Committee den Investitiounsfall mécht.

## Rechebeispill

E Motor mat 250.000 Zeilen fir d'Bearbechtung vun Ufroen, geschriwwen an engem ale 4GL. Mam CAST-Appmarq-Benchmark vu ronn $3,61 technescht Schold-Kapital pro Zeil Code (≈ £2,85 bei typeschem Wiesselkurs):

```
Kapital ≈ 250.000 × £2,85 ≈ £712.500
TDR ≈ 16 % (Note C)
```

Gemoosse Zins: de Ministère hält dräi Spezialistekontraktoren mat engem Dagessaz-Opschlag vun 40 % iwwer normale Senior-Ingenieurssätz, well d'Kompetenz am Haus ofgewandert ass – £180.000/Joer méi bei engem Equipe vu sechs Leit. De System verursaacht och véier gréisser Ausfäll vun der Bearbechtung pro Joer, déi all d'Entscheedunge fir ongeféier 5.000 Ufroer ophalen an se un d'Kontaktzenter ëmleeden, bei ronn £25/Uruff:

```
Zins ≈ £180.000 (Kompetenz-Opschlag)
     + 4 × 5.000 × £25 = £500.000 (Käschte vum ëmgeleeten Kontakt)
     ≈ £680.000/Joer
```

Gezielt Sanéierung vun de schlechtste Moduler kascht £1.200.000 a soll no der Modelléierung de Zins em 70 % reduzéieren:

```
Zinsreduktioun = 0,70 × 680.000 = £476.000/Joer
Amortisatioun ≈ 1.200.000 / 476.000 ≈ 2,5 Joer
```

D'Zilsetzung ass wichteg: Code ze sanéieren, un deem selte gedréint gëtt, bréngt näischt, well de Zins sech do konzentréiert, wou Ännerungsheefegkeet an Schuld-Dicht allen zwee hir Spëtzt erreechen.

## Verbindung zur Softwareentwécklung

D'Fassung vum ëffentleche Wäert, déi en technesche-Schold-Fall iwwer „de Code ass al" eraushieft: de Legacy-Bestand als Inventar duerstellen, wou verluere Liwwerkapazitéit konzentréiert ass, a mat de [Gesamtbesëtzkäschte (TCO)](../gesamtbesëtzkäschte-an-der-verwaltungs-it/) explizit verbannen, well de Zins eng Betribskäscht ass, déi an d'TCO-Zeil gehéiert, egal ob d'Finanzen jee dernoo gefrot hunn. Systemer mat vill Schold droen och en onproportionalt grousst [Cybersécherheetsrisiko](../wäert-vun-der-cybersécherheet-am-ëffentleche-secteur/), well d'Patch-Kadenz an d'Schold-Dicht korreléieren – e System, deen sech net patche léisst, ass technesch Schold, där hire Zins a Virfallsrisiko amplaz a Pond bezuelt gëtt. A jidde Kompromëss tëscht Sanéierung a neier Funktioun ass selwer eng [Cost-of-Delay](../käschte-vun-der-verzögerung-bei-ëffentleche-programmer/)-Entscheedung: d'Schold ofzebezuelen, verzögert déi nächst gesetzlech Ännerung, déi hir eege CoD huet, déi géint de gespuerten Zins muss ofgewo ginn.

## Feelerquellen

- **Berichterstattung nëmmen iwwer d'Kapital**: eng grouss, erschreckend Sanéierungsschätzung ouni Zinszuel rechtfäerdegt näischt géintiwwer engem Genehmegungsorgan fir Ausgaben.
- **Vun Tools generéiert Scholdzuele wuertwiertlech geholl**: Scanner am SQALE-Stil zielen Regelverstéiss; si verpassen déi deier Aart vu Schold – architektonesch Entscheedungen an net dokumentéiert Geschäftsregele vun der Legacy – a markéieren Kleinegkeeten.
- **„D'Neischreiwen vermeit alles dat"**: Ersatzprogrammer musse dieselwecht Disziplin erfëllen wéi all aneren Business Case – kontrafaktesch Käschten, Erfollegswahrscheinlechkeet an Diskontéierung – a sinn net dovun ausgeholl, wéi den Neistart vum Universal Credit 2013 gewisen huet.
- **Null-Schold-Utopismus**: de optimalen Scholdniveau ass net null; Schold ass Hiewel, déi fréier Liwwerung kaaft huet. D'lebendeg Fro ass ëmmer de Zinssaz, net ob Schold iwwerhaapt existéiert.

## Quellen

- Cunningham W, "The WyCash Portfolio Management System", OOPSLA experience report, 1992.
- CAST, technical debt estimation (Appmarq benchmark). <https://www.castsoftware.com/glossary/technical-debt-estimation>
- National Audit Office, *Digital Transformation in Government* and reports on Universal Credit. <https://www.nao.org.uk/>
