# Sozialen Diskontsaz

Den sozialen Diskontsaz rechent zukünfteg Käschten an Notzen a Wäerter vun haut em, sou datt Programmer, déi hir Rendementer iwwer Joerzéngten verdeelen, op enger gemeinsamer Basis vergläichbar sinn. De Green Book vum HM Treasury schreift e sënkende Plang vir, deen an de éischten 30 Joer bei 3,5 % verankert ass, baséiert op der Ramsey-Formel – eng spezifesch, zitéierbar Zuel, déi zu engem aktuellen politeschen an ethesche Streidpunkt gouf, soubal si op Engagementer mat laangem Horizont wéi Klimapolitik oder Infrastruktur ugewannt gëtt.

## Firwat et wichteg ass

E Pond Notzen, deen een a 30 Joer kritt, ass net e Pond Notzen wäert, deen een haut kritt – deelweis wéinst reiner Zäitpräferenz (Leit a Gesellschafte virzéien gutt Saachen eeër), deelweis wéinst dem Wuesstum (eng zukünfteg Gesellschaft gëtt als méi räich erwaart, dofir zielt e Pond fir si um Rand manner). Den Annex 6 vum Green Book leet dem Vereenegte Kinnekräich säi Standard-Diskontsaz aus der Ramsey-Formel of, a kombinéiert eng Rate vun der reiner Zäitpräferenz mat der erwaarte Wuesstumsrate vum Konsum an der Elastizitéit vum Grenznotzen vum Konsum, wat déi verëffentlecht Rate vun 3,5 % pro Joer fir d'Joer 0–30 ergëtt, a fir d'Joer 31 an dono an engem verëffentleche Plang ofhëlt (bis op 1 % fir d'Joer 301+). Dëse Plang gëtt et genee dofir, well e konstante Saz vun 3,5 %, iwwer e Joerhonnert zesummegerechent, bal all Notze mat laangem Horizont – e Hochwaasserschutz, dee Liewe a 80 Joer rett, eng Kuelestoffreduktioun, déi a 100 Joer Schued verhënnert – am Gegewaartswäert vernoléissegbar kleng erschénge léisst, wat den Treasury als onplausibel ethesch Konklusioun fir wierklech laanglieweg Infrastruktur- an Ëmweltentscheedunge ugesinn huet.

Den Diskontsaz ass genee dofir ëmstridden, well d'Wiel kee neutrale technesche Parameter ass: hie kodéiert e Uerteel doriwwer, wéi vill eng Gesellschaft haut fir Leit opginn soll, déi nach net gebuer sinn. De Stern Review on the Economics of Climate Change (2006) huet en Diskontsaz no bei null benotzt (eng reng Zäitpräferenz vun ongeféier 0,1 %) an argumentéiert, d'Wuelergoen vun zukünftege Generatiounen mat enger Rate, déi nëmmen ongeféier de Maartsätz entsprécht, ze diskontéieren, wier ethesch net ze verteidegen, wann de Schued (katastrofale Klimawandel) irreversibel ass. Kritiker – virun allem de William Nordhaus – hu geäntwert, dem Stern säin Saz no bei null iwwerdreift de Fall fir direkt Klimaausgaben, well e bal all haiteg Käschte géint e kaum diskontéierten zukünftege Notzen gerechtfäerdegt erschénge léisst. De Sträit war net iwwer d'Mathematik; et ass drëms gaangen, wéi ee Wäertesystem de Saz festleeë soll, an hie bleift dat Standardbeispill dofir, firwat den Diskontsaz eng politesch Entscheedung ass, net just en versécherungsmathematesche Input.

## D'Mathematik

D'Ramsey-Formel, déi der Rate vum Green Book zougrondleet:

```
r = ρ + η·g

wou:
  r = sozialen Diskontsaz
  ρ = Rate vun der reiner Zäitpräferenz (Ongedold + Katastrophrisiko)
  η = Elastizitéit vum Grenznotzen vum Konsum
  g = erwaart jäerlech Wuesstumsrate vum Konsum pro Kapp
```

De sënkende Plang vum Green Book (Annex 6, illustrativ – fir déi exakt verëffentlecht Tabell déi aktuell Ausgab kucken):

```
Joer 0–30:     3,5 %
Joer 31–75:    3,0 %
Joer 76–125:   2,5 %
Joer 126–200:  2,0 %
Joer 201–300:  1,5 %
Joer 301+:     1,0 %
```

Gegewaartswäert vun enger zukünfteger Zomm:

```
PV = FV / (1 + r)^t
```

## Rechebeispill

**Hochwaasserschutzprojet**: e Projet bréngt £10 Millioune vermiddene Hochwaasserschued am Joer 40.

Mat engem fixe Saz vun 3,5 %: PV = 10.000.000 / (1,035)^40 ≈ £2,52 Millioune – d'Notzen gesäit kleng aus.

Mam sënkende Plang vum Green Book (3,5 % fir d'Joer 0–30, duerno 3,0 %) gëtt an den éischten 30 Joer mat 3,5 % an an de Joer 31–40 mat 3,0 % zesummegerechent:

```
PV = 10.000.000 / [(1,035)^30 × (1,03)^10]
   = 10.000.000 / [2,807 × 1,344]
   ≈ 10.000.000 / 3,773
   ≈ £2,65 Millioune
```

De sënkende Plang hieft de Gegewaartswäert vun Notzen mat laangem Horizont am Verglach zu engem fixe, héije Saz liicht un – dat ass säin ausdrécklechen Zweck, well e fixe Saz vun 3,5 % iwwer e Joerhonnert e Notzen vu £100 Millioune am Joer 100 op ënner £3,3 Millioune diskontéiere géif.

**Digital Infrastruktur**: eng Migratioun vun der Regierung an d'Cloud, déi haut £4 Millioune kascht, soll während 15 Joer £500.000/Joer u Ënnerhaltskäschte vun Altsystemer vermeiden. Bei 3,5 % ass de Gegewaartswäert vun där Annuitéit ongeféier £500.000 × 11,52 (den 15-Joer-Annuitéitsfaktor bei 3,5 %) ≈ £5,76 Millioune – kloer iwwer de Käschte vu £4 Millioune, e Fall mat positivem Nettogegewaartswäert, dee bei engem naiv gewielte méi héijen Saz däitlech méi schwaach géif ausgesinn (bei 7 % fält deeselwechten Annuitéitsfaktor op ongeféier 9,11, wat £4,56 Millioune gëtt, nach ëmmer positiv, awer mat engem vill méi schmuele Spillraum).

## Verbindung zur Softwareentwécklung

Déi meescht Business Cases fir Software lafen iwwer 3–5 Joer, kloer bannent dem fixe 3,5-%-Beräich, dofir greift de sënkende Plang selten direkt – awer d'Disziplin dohannert ass wichteg fir all Technologieinvestitioun vun der Verwaltung mat laanger Liewensdauer vum Aktiv (eng nationale Plattform, e Programm fir Dateninfrastruktur, e Kontrakt iwwer Joerzéngten):

- De verëffentleche Saz vum Green Book benotzen, amplaz vun enger internen „Hurdle Rate" aus der Privatfinanz; Auditeuren an Treasury-Reviewer erwaarden de Standardplang.
- Bei Notzen, déi vill Joren an der Zukunft realiséiert ginn (laangfristeg Ënnerhaltsastpuerunge vun enger Plattform, de sech kumuléierende Wäert vun engem Open-Data-Ökosystem – kuckt [Wäert vun oppenen Daten](../wäert-vun-oppenen-daten/)), kann d'Diskontéierungsentscheedung e Business Case vu positiv op negativ dréinen; de Saz an den Horizont als explizit Viraussetzungen ausweisen, net als verstoppt Standardwäerter.
- Dat fléisst direkt an d'[Green-Book-Appraisal](../bewäertung-no-dem-green-book/), dat Fënnef-Fäll-Modell, dat formell en diskontéierte Cashflow verlaangt, an an d'[Bewäertung vum Wuelbefannen](../bewäertung-vum-wuelbefannen/), wou déi selwecht Diskontéierungsfro bei net-monetären Notze fir d'Wuelbefannen opkënnt.
- Kuckt och [Generatiounegerechtegkeet an Nohaltegkeetsdiskontéierung](../generatiounegerechtegkeet-an-diskontéierung-bei-der-nohaltegkeet/) fir d'Debatt Stern géint Nordhaus, speziell op Investitiounen an Ëmwelt- a Klimatechnologie applizéiert.

## Feelerquellen

- **E fixe Saz fir ganz laang Horizonte benotzen.** De sënkende Plang vum Green Book gëtt et genee dofir, well e konstante Saz wierklech laangliewege Notzen ënnerschätzt; nokucken, wéi eng Band gëllt, amplaz duerchgängeg op 3,5 % zréckzegräifen.
- **Den Diskontsaz als ethesch neutral behandelen.** De Stern-Nordhaus-Sträit weist, datt de Saz e Wäertuerteel iwwer zukünfteg Generatiounen kodéiert; wann een en ännert, ännert sech, wéi eng Programmer gerechtfäerdegt erschéngen, dofir soll en ausgewisen a verteidegt ginn, net an engem Spreadsheet-Standard verstoppt.
- **Den sozialen Diskontsaz mat privatem Kapitalkäschten verwiesselen.** Staatlech Kreditkäschten a privat Hurdle Rates sinn aner Konzepter wéi de vum Ramsey ofgeleete sozialen Saz, a se an enger ëffentlecher Appraisal géigaseiteg auszetauschen, verzerrt d'Resultat typesch a Richtung vu kuerzfristege Rendementer.
- **Reell an nominell Cashflows inkonsequent diskontéieren.** De Saz vum Green Book ass e reelle (inflatiounsbereenegte) Saz; nominell Cashflows domat ze diskontéieren, ënnerschätzt de Gegewaartswäert wesentlech.

## Quellen

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation", Annex 6 (2022). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Stern N. "The Economics of Climate Change: The Stern Review." HM Treasury, 2006.
- Nordhaus WD. "A Review of the Stern Review on the Economics of Climate Change." Journal of Economic Literature, 2007;45(3):686–702.
- Ramsey FP. "A Mathematical Theory of Saving." Economic Journal, 1928;38(152):543–559.
