# Generatiounegerechtegkeet an Diskontéierung bei der Nohaltegkeet

Zukünfteg Käschten an Notzen op de Gegewaertswäert zréckzediskontéieren ass Standardpraxis bei der ëffentlecher Bewäertung – kuckt [sozialen Diskontsaz](../sozialen-diskontsaz/) –, awer all positiven Diskontsaz, iwwer Joerzéngten oder Joerhonnerte gemëschelt, drécke wäit Zukunft an haitegen Begrëffer géint null. Bei Entscheedungen mat Konsequenze vun engem Joerhonnert oder méi – Klimawandel, Atomoffall, Verloscht vun der Biodiversitéit, Nohaltegkeet vun de Pensiounen – gëtt dës mathematesch Tatsaach zu enger ethescher: Standarddiskontéierung ka katastrophale Schued fir zukünfteg Generatiounen, am Gegewaertswäert, bal net vermeidenswäert erschénge loossen.

## Firwat et wichteg ass

D'Ramsey-Gleichung, 1928 vum Frank Ramsey ofgeleet, zerleet den Diskontsaz an zwou Komponenten: reng Zäitpräferenz (δ, wéi vill mir einfach elo méi wéi méi spéit virzéien, onofhängeg vum Räichtum) an den Effekt vum Räichtumswuesstum (η×g, wéi vill mir diskontéieren, well zukünfteg Generatioune viraussiichtlech méi räich sinn, sou datt e zousätzleche Pound hinne manner bedeit). Dem britesche Green Book säi Standard-Laangzäitdiskontsaz baséiert op dëser Gleichung a follegt engem *fallende* Plang amplaz engem fixe Saz – en Design, dee wuertelt an der Aarbecht vum Martin Weitzman iwwer „Gamma-Diskontéierung“, déi weist, datt wann den zukünftegen Diskontsaz selwer onsécher ass, de Sazäquivalent, deen een uwenne soll, mathematesch mat der Zäit fält, well Szenarie mat niddrege Sätz ëmmer méi dominéieren, wat weider ewech ee kuckt. De Stern Review iwwer d'Wirtschaft vum Klimawandel (2006), vum Sir Nicholas Stern gefouert, huet déi ethesch Debatt weidergedriwwen: de Stern huet argumentéiert, d'reng Zäitpräferenz soll no bei null festgeluecht ginn (hien huet δ ≈ 0,1 % benotzt, wat nëmmen déi kleng Wahrscheinlechkeet vun enger zivilisatiounsbeendender Katastroph reflektéiert, keng echt Präferenz fir d'Gegewaart iwwer d'Zukunft), wat e vill méi nidderegen effektiven Diskontsaz wéi d'konventionell Green-Book-Praxis a, entspriechend, e vill méi groussen haitege Grond fir Klimaschutz produzéiert huet. Kritiker (virun allem de William Nordhaus) hunn argumentéiert, dem Stern säi Saz no bei null wier ethesch verdeedegbar, awer inkonsequent mat dem tatsächlech beobachte Spuer- an Investitiounsverhalen. D'Meenungsverschiddenheet ass keng technesch Fousnout – et ass dee gréisste Grond, firwat zwee gläichwäerteg rigoréis Wirtschaftler zu ganz verschiddene Conclusioune kommen, wéi vill déi haiteg Generatioun fir d'Zukunft opginn soll, an et ass de Grond, firwat Software, déi d'Bewäertung vu laangfristegen ëffentlechen Investitiounen ënnerstëtzt, hir Diskontéierungsannahme muss opdecken, amplaz se an engem Standard vun engem Tabellekalkul ze verstoppen.

## D'Mathematik

```
Ramsey-Gleichung:   r = δ + η × g

  r = sozialen Diskontsaz
  δ = reng Zäitpräferenz (Saz vun der Ongedold, onofhängeg vum Räichtum)
  η = Elastizitéit vum Grenznotze vum Konsum (ofhuelenden Wäert vum
      zousätzleche Konsum, wann d'Leit méi räich ginn)
  g = erwaarten Wuesstumssaz vum Konsum pro Kapp

Green-Book-Plang fir de laangfristege Saz (ongeféier, aktuell publizéiert Banden):
  Joer 0–30:     3,5 %
  Joer 31–75:    3,0 %
  Joer 76–125:   2,5 %
  Joer 126–200:  2,0 %
  Joer 201–300:  1,5 %
  Joer 301+:     1,0 %

Parameter vum Stern Review: δ ≈ 0,1 %, η = 1, g ≈ 1,3 %  → r ≈ 1,4 %
```

## Rechebeispill

**Gegewaertswäert vun £1 vermiddene Schued an 100 Joer**, ënner dräi Diskontéierungsregimmer:

```
Fixe kuerzfristege Green-Book-Saz (3,5 %, 100 Joer laang konstant):
  PV = 1 / (1,035)^100 ≈ 1 / 31,19 ≈ £0,032   (3,2 Pence)

Fallende Green-Book-Plang (3,5 % fir d'Joer 1–30, 3,0 % fir d'Joer 31–75,
2,5 % fir d'Joer 76–100):
  Faktor(1–30)   = 1,035^30  ≈ 2,807
  Faktor(31–75)  = 1,03^45   ≈ 3,782
  Faktor(76–100) = 1,025^25  ≈ 1,854
  Gesamtfaktor ≈ 2,807 × 3,782 × 1,854 ≈ 19,68
  PV = 1 / 19,68 ≈ £0,051   (5,1 Pence)

Reng Zäitpräferenz no beim Null am Stern-Stil (r ≈ 1,4 % fix):
  PV = 1 / (1,014)^100 ≈ 1 / 3,997 ≈ £0,250   (25,0 Pence)
```

Dee selwechte £1 vermiddene Schued an engem Joerhonnert ass haut 3,2p, 5,1p oder 25p wäert, einfach jee nodeem, wéi eng Diskontéierungskonventioun benotzt gëtt – eng bal aachtfach Spannweit, déi dréit, ob e Klimaschutzprojet mat héije Kascht um Ufank an Auszuele no engem Joerhonnert iwwerhaapt eng positiv NPV-Schwell erreecht. Dat ass de Mechanismus hannert der zentraler Warnung vum Thema: bei all sënnvoll positivem fixem Saz gëtt wäit entfernte zukünftege Schued arithmetesch aus der Bewäertung geläscht, egal wéi eescht e reell ass.

## Verbindung zur Softwareentwécklung

- All Tool fir Laangzäitbewäertung oder Business Cases (Infrastruktur, Klimaupassung, Pensiounsmodelléierung) soll dem Green Book säi *fallende* Plang implementéieren, net en eenzege fixe Saz – e fixe Standardsaz bettet roueg e vill méi staarke Bias géint d'Zukunft an, wéi déi aktuell Leitfaden vun der britescher Regierung virschreift.
- Diskontsaz an Horizont solle ëmmer als siichtbar, auditéierbar Parameter an der Bewäertungssoftware ausgesat ginn, mat der Sensibilitéit vun der Berechnung dorop explizit gewisen (wéi am Beispill uewen) – de Saz an enger Konfiguratiounsdatei ze verstoppen, lued genee dozou an, wat d'Stern-Nordhaus-Debatt als „verstoppt ethesch Wiel“ warnt; dat geet zesummen mam Transparenzpunkt a [Natural-Capital-Accounting](../natierlech-kapitalrechnung/) a läit dem Thema [sozialen Diskontsaz](../sozialen-diskontsaz/) allgemeng zougrond.
- Wou d'Notzen vun engem Programm explizit generatiounenübergräifend sinn (Hochwaasserschutz, Restauratioun vum Naturkapital, laangfristeg digital Infrastruktur), soll eng [sozial Käschte-Notzen-Analyse](../sozial-käschte-notze-analys/) d'Resultater ënner op d'mannst zwou Diskontéierungsannahme mellen (Green-Book-Standard an e Sensibilitéitsfall mat niddrege Saz), amplaz enger eenzeger Punktschätzung, sou datt Entscheedungsträger gesinn, wéi d'Wiel vum Diskontsaz eleng d'Äntwert verréckelt.

## Feelerquellen

- **E eenzegen diskontéierten NPV ouni Sensibilitéitsberäich presentéieren** – gegeben, wéi vill den Diskontsaz eleng d'Äntwert bei Projeten mat laangem Horizont ännert, iwwerschätzt en NPV mat engem Saz d'Präzisioun wesentlech; mellt ëmmer e Beräich, dee mindestens de Green-Book-Standard an e Szenario mat niddrege Saz ofdeckt.
- **De kuerzfristege fixe Saz (3,5 %) op eng Bewäertung iwwer méi Joerhonnerte uwenden** – dem Green Book seng eege Leitfad schreift de fallende Plang genee dofir vir, well de fixe Saz iwwer ongeféier 30 Joer eraus als net passend ugesi gouf; en trotzdem ze benotzen, ënnerschätzt laangfristeg Käschten.
- **δ (reng Zäitpräferenz) als reng technesche Parameter behandelen** – dem Stern säin Wäert no bei null an dem Green Book säin héijen implizite Wäert si béid nëmmen als ethesch Positioune verdeedegbar, wéi vill Gewiicht d'Gegewaart der Zukunft schëlleg ass, net als empiresch „richteg“ oder „falsch“ Zuelen; Software soll d'Annahm siichtbar maachen, amplaz eng Zuel als objektiv richteg ze presentéieren.

## Quellen

- Stern N. "The Economics of Climate Change: The Stern Review." Cambridge University Press, 2006.
- Ramsey FP. "A Mathematical Theory of Saving." The Economic Journal, 1928.
- Weitzman ML. "Gamma Discounting." American Economic Review, 2001.
- HM Treasury. "The Green Book: Central Government Guidance on Appraisal and Evaluation" (Annex 6,
  discount rate schedule).
- Nordhaus WD. "A Review of the Stern Review on the Economics of Climate Change." Journal of
  Economic Literature, 2007.
