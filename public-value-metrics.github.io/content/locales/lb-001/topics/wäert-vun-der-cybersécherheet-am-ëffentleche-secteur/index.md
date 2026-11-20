# Wäert vun der Cybersécherheet am ëffentleche Secteur

De Wäert vun der Cybersécherheet am ëffentleche Secteur ass d'Disziplin, d'Risikoreduktioun ze bepräisen: wat ass et wäert, e Verstouss géint Biergerdaten manner wahrscheinlech ze maachen, wann Sécherheetsausgaben kee siichtbaren Output hunn, wa se fonctionnéieren, an e ganz siichtbaren, wa se versoen? Fir en Dingscht, deen Leeschtungsdossieren, Gesondheetsdaten oder Steierdossiere hält, ass genee dës Eegeschaft „onsiichtbar, wa se fonctionnéiert“ de Grond, firwat en en ausdrécklecht Wäertargument brauch, net just en Compliance-Haken.

## Firwat et wichteg ass

De Cyber Assessment Framework (CAF) vum UK National Cyber Security Centre gëtt ëffentlechen Organisatiounen eng strukturéiert Manéier, fir Sécherheet zu enger bewäertbarer, outcome-baséierter Disziplin ze maachen amplaz zu enger Checklëscht: en definéiert véier Héichniveau-Ziler (Sécherheetsrisiko managen, géint Cyberattacke schützen, Cybersécherheetsevenementer entdecken an d'Auswierkunge vun Incidenter miniméieren), opgedeelt a bäidroend Outcomes, géint déi e Systembesëtzer bewäert ka ginn, am selwechte Sënn wéi de Punkt 9 vum [Digital Service Standard](../standard-fir-digital-servicer/) („e séchere Service erstellen, deen d'Privatsphär vun de Benotzer schützt“). Wat d'CAF-Bewäertung schützt, huet en dokumentéierte Präis: dem IBM säi Cost of a Data Breach Report verfollegt d'duerchschnëttlech Käschte vun engem Verstouss pro Secteur a fënnt konsequent, datt de ëffentleche Secteur am ënneren Enn vun der Spannbreet läit am Vergläich mat Finanzen oder Gesondheetswiesen – rezent Editioune setzen den Duerchschnëtt vum ëffentleche Secteur bei ronn $2,6–2,9 Milliounen pro Verstouss – mä „méi niddreg wéi d'Finanzen“ ass net „niddreg“, a Verstéiss bei der Regierung bréngen Käschte mat, déi dem Rapport seng Zuelen net voll erfaassen: Verloscht vum Vertrauen vun de Bierger an digital Kanäl, wat d'[digital Notzung](../spuerunge-duerch-kanalverlagerung/) drécke kann, vun där Business-Cases fir Kanalverschiebung ofhänken, an déi politesch a juristesch Käschte, Daten ze exponéieren, déi de Staat d'Bierger iwwerhaapt gezwonge gouf, erauszeginn.

## D'Mathematik

Sécherheetsinvestitioune ginn esou bewäert wéi all Ausgab fir Risikoreduktioun: als Reduktioun vum erwaarte Verloscht, mat der klassescher Identitéit vum Risikomanagement.

```
Annualized Loss Expectancy (ALE) = Single Loss Expectancy (SLE)
                                  × Annualized Rate of Occurrence (ARO)

Wäert vun enger Sécherheetskontroll =
  ALE_virun_der_Kontroll − ALE_no_der_Kontroll − jäerlech Käschte vun der Kontroll

Eng Kontroll ass et wäert ze finanzéieren, wann:
  (ALE_virun − ALE_no) > jäerlech Käschte vun der Kontroll

D'CAF-Bewäertung gëtt net direkt eng Wahrscheinlechkeet aus, mä dem Service säin
CAF-Outcome-Profil (wéi bäidroend Outcomes „erreecht“, „deelweis erreecht“ oder
„net erreecht“ sinn) ass en vernünftegen Proxy-Input, fir den ARO ze schätzen — e System
mat onverwaltene privilegéierten Zougäng oder ouni getestenen Incident-Response-Plang
huet e wesentlech méi héijen realistesche ARO wéi ee mat béidem.
```

## Rechebeispill

**Fallverwaltungssystem vun engem Comté-Gemengerot, dat Sozialpfleegdossieren vu 40 000 Awunner hält**:

```
Single Loss Expectancy (Käschte vum Verstouss), mat engem Duerchschnëtt fir den
ëffentleche Secteur aus engem rezenten IBM Cost of a Data Breach Report ≈ £2,1 Mio.
(ëmgerechent, Gréisstenuerdnung — ëmmer aus der aktueller Editioun vum Rapport
nei hierleeden, amplaz eng fix Zuel erëmzebenotzen)

Aktuellen ARO (onverwalten privilegéiert Zougäng, kee getestenen Incident
Response, laut engem internen CAF-Selbstbewäertung mat méi „net erreechten“
Outcomes) ≈ geschat 8 % pro Joer
  ALE_virun = £2,1 Mio. × 0,08 = £168 000/Joer

Virgeschloen Kontroll: Privileged Access Management + getestene Incident-Response-Plang,
déi d'relevant CAF-Outcomes op „erreecht“ bréngen, geschat ARO op 3 %/Joer ze senken
  ALE_no = £2,1 Mio. × 0,03 = £63 000/Joer

Jäerlech Käschte vun der Kontroll (Tooling + Prozess + Tester) = £45 000

Wäert vun der Kontroll = (168 000 − 63 000) − 45 000 = £60 000/Joer
  netto positiv — finanzéieren. D'Rechnung weist och, datt d'Kontroll
  bei bal dräifache Käschte nach ëmmer et wäert wier, finanzéiert ze ginn, wat
  déi Aart vu Sensibilitéitscheck ass, déi all ALE-Zuel begleede sollt,
  déi op geschate Wahrscheinlechkeete baséiert.
```

## Verbindung zur Softwareentwécklung

Ingenieuren hunn déi meescht Hiewelen an der ALE-Gleichung an der Hand: Design vun der Zougangskontroll, Hygiene bei Ofhängegkeeten a Patches, Logging- an Detektiounsofdeckung an Tooling fir Incident Response bewege all den ARO-Term direkt, dofir liest sech eng CAF-Bewäertung sou vill wéi en technescht Architekturreview wéi en Policy-Audit. Dat ass [Technesch Schold als Erosioun vum ëffentleche Wäert](../technesch-schold-als-erosioun-vum-ëffentleche-wäert/) a senger akutster Form – net gepatcht, net iwwerwaacht, schlecht zougangskontrolléiert Systemer sinn Schold, där hir Zënsbezuelung Tail-Risiko ass, kee stännege Béck – a si sollt mat de [Gesamtbesëtzkäschte vun der Regierungs-IT](../gesamtbesëtzkäschte-an-der-verwaltungs-it/) ofgestëmmt ginn, sou datt d'Sécherheetsausgab net getrennt vun de richtege Betribskäschte vum System behandelt gëtt. Et ass och en direkten Input fir [Value-for-Money](../preis-leeschtungs-verhältnis/)-Bewäertungen ënner der Green Book: risikoajustéiert Käschte sinn Deel vun der Käschtesäit vun all Optiounsappraisal, keen Nogedanken um Enn.

## Feelerquellen

- **CAF-Selbstbewäertung als Sécherheet selwer behandelen**: eng ofgeschlosse Bewäertung beschreift eng Sécherheetslag; si schaaft se net – de Wäert läit an den erreechten Outcomes, net am Dokument.
- **Globale Duerchschnëttskäschte fir Verstéiss ouni Upassung als lokal Schätzung benotzen**: dem IBM seng Zuelen sinn Duerchschnëtter iwwer grouss, variéiert Echantillonen; de realistesche Single Loss Expectancy vun enger klenger Lokalbehörd ass selten dee selwechten wéi deen vun engem nationale Regierungsdepartement.
- **D'Psychologie vum Tail-Risiko bei Investitiounsentscheedunge vernoléissegen**: eng niddreg jäerlech Wahrscheinlechkeet mécht et einfach, Sécherheetsausgaben onbegrenzt opzeschiewen, bis zum Joer, wou et net esou ass – d'ALE-Berechnung géint eng Spannbreet vun AROen op Sensibilitéit ze testen, wéi am Rechebeispill, wierkt dem entgéint.
- **Nëmmen d'Käschte vum Verstouss am IBM-Stil zielen, net d'Vertrauenskäschten**: e Verstouss, deen d'Bereetschaft vun de Bierger drécke kann, digital Kanäl ze notzen, erodéiert den [Aspuerungs-Fall vun der Kanalverschiebung](../spuerunge-duerch-kanalverlagerung/) joerelaang duerno, eng Käschte, déi selten an Käschteschätzunge fir Verstéiss abegraff ass.

## Quellen

- National Cyber Security Centre, Cyber Assessment Framework. <https://www.ncsc.gov.uk/collection/caf>
- IBM, Cost of a Data Breach Report. <https://www.ibm.com/reports/data-breach>
- GOV.UK Service Manual, service standard, point 9: create a secure service which protects users' privacy. <https://www.gov.uk/service-manual/service-standard/point-9-create-a-secure-service>
