# Bezuelung no Resultater a Social Impact Bonds (PbR/SIBs)

D'Bezuelung no Resultater (Payment by Results, PbR) bezilt e Fournisseur op Basis vu verifizéierten erreechten
Outcomes, net vun duerchgefouerten Aktivitéiten. E Social Impact Bond (SIB) ass eng spezifesch
PbR-Finanzéierungsstruktur, an där privat oder philanthropesch Investisseuren d'Ëmsetzung vum Service am
Viraus finanzéieren a vun engem ëffentleche Kommissionnaire – mat Rendement – nëmmen zréckbezuelt kréien,
wann onofhängeg gemoossen Outcomes vereinbart Schwellen erreechen, sou datt d'Liwwerrisiko vum Steierzueler op
den Investisseur geréckelt gëtt.

## Firwat et wichteg ass

Dee weltwäit éischte SIB gouf am September 2010 am HMP Peterborough lancéiert: Social Finance huet £5 Milliounen
vu 17 Investisseuren opgedriwwen, fir den „One Service“ ze finanzéieren, deen mat Prisonéier mat kuerze
Strofe (ënner 12 Méint) geschafft huet, fir de Récidivismus ze senken, wou d'Ministère of Justice an de Big
Lottery Fund zougestëmmt hunn, d'Investisseuren nëmmen dann zréckzebezuelen, wann d'Verurteelungen
nei Delikter ëm op d'mannst 7,5 % géint eng ofgestëmmt national Vergläichskohort erofgoungen. Déi lescht Kohort vum
Peterborough-Pilot huet eng Reduktioun vun de Reverurteelungen ëm 9,7 % opgeholl, bequem iwwer der Schwell,
an d'Investisseure goufen mat Rendement zréckbezuelt. De Mechanismus war wichteg, well e e spezifesche
Kommissionéierungsproblem geléist huet: d'Regierung wollt fir Outcomes amplaz fir Inputen bezuelen, konnt
awer dat finanziellt Risiko vun enger Interventioun, déi vläicht net fonctionnéiert, net droen, dofir huet
d'SIB-Struktur dëst Risiko op Investisseuren verlagert, déi bereet waren, et ze iwwerhuelen. Den Government
Outcomes Lab (GO Lab) vun der Blavatnik School of Government vun Oxford ënnerhält elo déi komplettst ëffentlech
Beweisbasis iwwer PbR- a SIB-Leeschtung weltwäit, verfollegt wäit méi wéi 200 Impact Bonds weltwäit a
publizéiert d'Fuerschung driwwer, wéi eng Designmerkmale mat Erfolleg oder Mësserfolleg korréléieren. D'Lektioun,
op déi d'Beweisbasis ëmmer erëm zréckkënnt, ass, datt déi *gewielten Outcome-Metrik* an déi Persoun, déi
d'Risiko dréit, se ze verpassen, bal alles anescht doriwwer bestëmmt, wéi e PbR-Kontrakt an der Praxis
tatsächlech funktionéiert.

## D'Mathematik

```
PbR-Bezuelung = Basisbezuelung (wann et eng gëtt) + Σ (erreechten Outcome × Eenheetspräis pro Outcome)

Rendement vum Investisseur bei engem Social Impact Bond:
  Investisseurs-Ausgab   = Startkapital, dat d'Ëmsetzung vum Service finanzéiert
  Outcome-Bezuelung      = Kommissionnaire bezilt nëmmen, wann Outcome ≥ Schwell, skaléiert dernoper,
                           wéi wäit iwwer der Schwell d'Leeschtung läit
  Investisseurs-Rendement = kritt Outcome-Bezuelungen − Investisseurs-Ausgab
                           (eng Rendite, dacks plafonéiert, déi dat iwwerholl Risiko reflektéiert)

Wichteg Designparameteren, déi dat ganzt Verhalen vum Kontrakt bestëmmen:
  Outcome-Metrik           — muss en Outcome sinn, net en Output (kuckt Outcomes vs. Outputen)
  Vergläich/Kontrafaktum   — normalerweis eng ofgestëmmt Kohort (kuckt Analyse vum Kontrafaktum)
  Bezuelungsschwell        — Mindestverbesserung, ier iergendeng Bezuelung ausgeléist gëtt
  Bezuelungskurve          — linear, gestuft oder iwwer der Schwell plafonéiert
  Zouschreiwungs-/Mataufnahmeeffekt-Ofschlag — kuckt Additionalitéit an Mataufnahmeeffekt
```

## Rechebeispill

**Peterborough One Service** (illustrativ Zuelen aus publizéierten Evaluatiounen):

```
Opgedriwwent Investisseurskapital: £5 000 000
Kohort:                          ~3 000 männlech Prisonéier mat kuerze Strofen iwwer zwou Kohorten
Schwell:                         ≥7,5 % Reduktioun vun de Reverurteelungen géint ofgestëmmte
                                  national Vergläichsgrupp, soss keng Bezuelung
Resultat vun der Kohort 1:       8,4 % Reduktioun — ënner der kontraktueller Barrière fir dës
                                  Kohort eleng ënner de ursprénglechen Reegelen
Kombinéiert/lescht Kohort:       9,7 % Reduktioun — iwwer der Schwell
Outcome-Bezuelung:               Regierung (Ministry of Justice / Big Lottery Fund)
                                  bezilt pro Prozentpunkt iwwer der Schwell, finanzéiert
                                  d'Réckbezuelung vun den Investisseuren plus e Rendement
```

**PbR-Kontrakt vun enger Lokalbehörd (illustrativ)**: E Familljeninterventiounsdingscht gëtt mat £4 000 pro
iwwerwisser Famill (Aktivitéitsbezuelung) plus £6 000 pro Famill ouni weider Iwwerweisung wéinst Kannerschutz
12 Méint no Ofschloss (Outcome-Bezuelung) kommissionéiert. 200 Familljen iwwerwisen, 150 Fäll ofgeschloss, 96
bleiwe 12 Méint laang ouni Iwwerweisung:

```
Aktivitéitsbezuelung = 200 × £4 000 = £800 000
Outcome-Bezuelung    = 96 × £6 000  = £576 000
Gesamtkäschte vum Kontrakt = £1 376 000 fir 96 bestätegt nohalteg Outcomes
Käschte pro bestätegten Outcome ≈ £14 333 (kuckt Käschte pro Outcome)
```

## Verbindung zur Softwareentwécklung

D'Bezuelung no Resultater ass e Problem vun der Ausriichtung vun Aureizer, ier et en Datenproblem ass, an d'Datesystem ass
de Punkt, wou dës Ausriichtung hält oder brécht. Onofhängeg, manipulatiounsbeweisend Verifikatioun vun den Outcomes
ass de ganze Spill: Kommissionnaire a Fournisseur hu géigesätzlech Aureizerer, wéi en ambigue Fall codéiert
gëtt, dofir brauch d'System, dat d'Outcomes opzeechent, eng Audit-Trail, eng Vereinbarung iwwer Datedeelung mam
onofhängege Verifizéierer (dacks eng aner Stell wéi de Fournisseur, heiansdo eng offiziell Statistikstell,
déi mat Police- oder Leeschtungsdossiere ofgläicht) an eng onverännerbar Versionéierung vun der Definitioun vum
Outcome – dat PbR-Äquivalent vum Feeler „d'Metrik nei definéieren“ bei
[KPIe fir den ëffentleche Secteur](../kpie-fir-den-ëffentleche-secteur/). Zouschreiwungsberechnungen hänke vun de Methode mat ofgestëmmter
Kohort aus der [Analyse vum Kontrafaktum](../kontrafaktesch-analys/) of, déi reproduzéierbare, auditéierbare Code
brauchen, net eng eemoleg Tabellekalkulatioun. An d'Metrik selwer muss e richtegen Outcome sinn, net eng
Proxy-Aktivitéit – kuckt [Outcomes vs. Outputen](../outcomes-vs-outputen-resultater-a-leeschtungen-ënnerscheeden/) – well e PbR-Kontrakt, dee fir en
Output bezilt, just d'normal Finanzéierung ëmbenennt, mat zousätzlechen Transaktiounskäschten. Wou de sozialen
Retour vun engem SIB prospektiv modelléiert gëtt, léint sech déi Appraisal typesch direkt bei der Methodologie vum
[Social Return on Investment](../sozialen-investitiounsrendement/) un.

## Feelerquellen

- **Fir en liicht manipuléierbare Proxy-Outcome bezuelen**: „Participatioun un de Sessiounen“ ass eng Aktivitéit, déi
  als Outcome verkleet ass; drop bestoen, datt eng Moossnam déi tatsächlech gewënschte Verännerung reflektéiert
  (Récidivismus, Beschäftegung, Wunnstabilitéit).
- **Kee glafwürdege Kontrafaktum**: ouni ofgestëmmt Vergläichsgrupp kann eng Verbesserung Regressioun zum Mëttel
  oder en allgemenge Trend sinn, net d'Wierkung vum Programm – kuckt
  [Analyse vum Kontrafaktum](../kontrafaktesch-analys/) an
  [Additionalitéit an Mataufnahmeeffekt](../additionalitéit-a-matnahmeeffekt/).
- **Transaktiouns- an Evaluatiounskäschte ënnerschätzen**: onofhängeg Verifikatioun, Datenverknëppung a
  Kontraktverwaltung bei PbR/SIB-Systemer erreeche routinéiert zweistellegt Prozenter vum Kontraktwäert –
  d'Beweisbasis vum GO Lab dokumentéiert dat als widderkehrende Grond fir den Ofbroch vu Programmer.
- **Cherry-Picking oder „Parking“**: Fournisseuren, déi pro Outcome bezuelt ginn, hunn en direkten Aureiz,
  Cliente ze bevorzugen, déi souwisou am ehesten Erfolleg hunn, an déi schwéierste Fäll ze vernoléissegen –
  Bezuelungsstufen oder en Ausgläich fir de Fall-Mix designen, fir dat entgéintzewierken.

## Quellen

- Government Outcomes Lab, University of Oxford, Blavatnik School of Government.
  <https://golab.bsg.ox.ac.uk/>
- Social Finance, "Peterborough Social Impact Bond" evaluation summaries.
  <https://golab.bsg.ox.ac.uk/case-studies/peterborough-social-impact-bond/>
- Ministry of Justice, "Peterborough Social Impact Bond HMP Doncaster: Final Reconviction Results
  for the Peterborough Social Impact Bond."
