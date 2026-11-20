# Wäert vu KI an der Verwaltung

De Wäert vu KI an der Verwaltung ass d'Fuerderung, datt e KI-System an engem ëffentlechen Déngscht déiselwecht Hürd vum Preis-Leeschtungs-Verhältnis (Value for Money) an vum ëffentleche Wäert (Public Value) muss huelen wéi all aner Ausgabeentscheedung – net eng méi niddreg, well et nei ass, a keng méi héich, well et gefaart gëtt. Et ass d'Fro, déi en Ëmsetzungsteam beäntwere kënne muss, ier an net nodeems eng KI-Funktioun live geet: bréngt dëst méi Wäert, wéi et kascht, wann Assurance, Iwwerwaachung a Risiko éierlech abezu ginn?

## Firwat et wichteg ass

De britesche Central Digital and Data Office (CDDO) huet 2024 säi Generative AI Framework for Government verëffentlecht, op Basis vun enger fréierer Interimsleetlinn vum Juni 2023, an et ronderem zéng Prinzipie strukturéiert: wat generativ KI ass, hir ethesch Implikatiounen, d'Sécherheet vun den Tools, Qualitéitssécherungskontrollen, d'Gestioun vum ganze Liewenszyklus vu generativer KI, d'Erkennung vu richtege Notzungsfäll, Zesummenaarbecht tëscht de Regierungsstellen, Transparenz, Kompetenzen a Gouvernance. D'Insistenz vum Framework op „bedeitungsvoll mënschlech Kontroll" a Gestioun vum ganze Liewenszyklus gëtt et, well Businesscase vu KI-Projeten e spezifesche Feelermodus hunn, dee bei aneren IT-Ausgabe net virkënnt: dem Pilot seng Schlagzuel zur Produktivitéit ass einfach ze produzéieren an einfach ze iwwerdreiwen, well se gemooss gëtt, ier d'Verifizéierungs-, Korrektur- an Iwwerwaachungslaascht, déi den Tool schaaft, mat abezu gëtt. Niewent dem Framework verlaangt den Algorithmic Transparency Recording Standard (ATRS) vun ëffentleche Stellen, e standardiséierten Androck ze verëffentlechen – Zweck, benotzten Daten, Leeschtung, Fairnesstester, Arrangementer fir mënschlech Iwwerwaachung – fir algorithmesch Tools, déi eng bedeitend Roll bei Entscheedungen iwwer Eenzelpersoune spillen. Doduerch gëtt d'Assurance-Käschte vun engem KI-System eng ëffentlech Sach, an net eng intern Schätzung, déi en Team roueg iwwersprange kann.

## D'Mathematik

D'Adoptioun vu KI gëtt als Ergänzung zu, net als Ersatz fir, déi Standard-Appraisal vum [Preis-Leeschtungs-Verhältnis](../preis-leeschtungs-verhältnis/) bewäert, wobäi d'KI-spezifesch Terme explizit gemaach goufen, amplaz se an eng eenzeg Zuel fir de „Produktivitéitsgewënn" ze verschmëlzen:

```
Nettowäert vun engem KI-System =
    Produktivitéitsgewënn (gespuert Zäit × voll berechent Personalkäschten)
  − Lizenz-/Rechekäschten
  − Käschte vun der mënschlecher Verifizéierung an Iwwerwaachung (Kontroll vum
    KI-Output, ier drop gehandelt gëtt – dës Käschte falen och bei reife Tools
    net op null)
  − Käschte vun der ATRS-Dokumentatioun an der lafender Iwwerwaachung
  − Risikoupassung vun de Schued-Käschte duerch Feeler, Biais oder Halluzinatioun,
    gewiicht doran, wien de Schued dréit (Verdeelungsgewiichtung)

Eng Pilot-Zuel zur Produktivitéit, déi de Terme vun der Iwwerwaachung ausléisst,
ass net mat enger Käschtenbasislinn am normale Betrib vergläichbar, déi schonn
eng gläichwäerteg mënschlech Kontroll enthält – kuckt ai-productivity-in-the-public-sector
fir déi méi ausféierlech Disziplin vun der Produktivitéitsmiessung, vun där dëst ofgeleet ass.
```

## Rechebeispill

**Lokal Verwaltung, déi en generativen KI-Tool benotzt, fir éischt Äntwerten op Routineufroe zur Gemengesteier ze entworf**: 25.000 Ufroen/Joer, virdrun komplett vu Sachbearbechter am Duerchschnëtt a 14 Minutten/Ufro behandelt, voll berechent Personalkäschten £34/Stonn.

```
Basislinn-Käschte (ouni KI):
  25.000 × (14/60) × £34 = £198.333/Joer

Behaaptung am Pilot: d'KI entworft eng Äntwert a 90 Sekonnen, de
Sachbearbechter „kuckt se just duerch a schéckt se of" – behaapte nei Zäit sinn 3 Minutten
  25.000 × (3/60) × £34 = £42.500/Joer
  → behaapte Spuerung £155.833/Joer (kléngt transformativ)

Voll berechent Zuel, gemooss no 3 Méint am Live-Betrib amplaz an den
handverlesene Testfäll vum Pilot:
  Tatsächlech Zäit fir Duerchsicht + Korrektur pro Äntwert: 6 Minutten (Entwërf
  brauche fir komplex oder emotional sensibel Ufroe richteg Beaarbechtung)
  25.000 × (6/60) × £34 = £85.000/Joer
  Lizenz-/Rechekäschten: £38.000/Joer
  ATRS-Dokumentatioun a véierteljährlech Iwwerwaachung vu Biais/Qualitéit: £14.000/Joer
  Gesamtkäschten = 85.000 + 38.000 + 14.000 = £137.000/Joer

Richteg Spuerung = 198.333 − 137.000 = £61.333/Joer – echt a wäert, behal ze ginn,
awer wäit ënner der Halschent vun der Behaaptung am Pilot, an et huet eng
éierlech Miessung vun der Iwwerwaachungszäit gebraucht, net dem Pilot säi
beschte Fall, fir se ze fannen.
```

## Verbindung zur Softwareentwécklung

Hei treffen sech [KI-Produktivitéit am ëffentleche Secteur](../ki-produktivitéit-am-ëffentleche-secteur/) an dëst Thema: Ingenieursteams, déi KI-Funktiounen an ëffentlech Déngschter abauen, besëtzen d'Instrumentatioun, déi déi „richteg" Zuel am Beispillrechnung méiglech mécht – déi tatsächlech Zäit fir d'Duerchsicht, d'Editéierdistanz tëscht Entworf an ofgeschéckter Äntwert an d'Eskalatiounsquote ze protokolléieren, amplaz de Demo-Konditioune vum Pilot ze trauen. KI-Funktiounen solle géint de Punkt 9 vum [Digital Service Standard](../standard-fir-digital-servicer/) (sécheren Déngscht, Dateschutz vum Benotzer) bewäert ginn a mat [Wäert vun der Cybersécherheet am ëffentleche Secteur](../wäert-vun-der-cybersécherheet-am-ëffentleche-secteur/) ofgeglach ginn, wou den Tool Bürgerdate beréiert, a all KI-System mat bedeitendem Afloss op Entscheedunge vun Eenzelpersoune brauch en ATRS-Androck, ier en als bewäertungsbereet ka gëllen, op déiselwecht Aart a Weis, wéi en Déngscht eng bestanen Bewäertung nom [Digital Service Standard](../standard-fir-digital-servicer/) brauch, ier en live geet.

## Feelerquellen

- **AI-Washing**: bestoend reegelbaséiert Automatiséierung als „KI" ëmbenennen, fir un Finanzéierung oder Opmierksamkeet ze kommen, déi fir d'KI-Adoptioun virgesi sinn, ouni d'Genauegkeets- oder Biais-Risiken, déi déi zousätzlech Kontroll vum Framework iwwerhaapt rechtfertegen.
- **Pilot-Produktivitéit amplaz Produktiouns-Produktivitéit moossen**: Piloten lafen mat kuratéierte Testfäll a mat engagéierte, opmierksame Reviewer; d'Produktioun leeft mat dem ganze komplizéierte Mix vu Fäll a mat Reviewer, déi mat der Zäit en Automatiséierungsbiais entwéckelen an d'Outputs ze wéineg kontrolléieren – béid verzerre d'éierlech Zuel fir d'Käschte vun der Iwwerwaachung.
- **D'ATRS-Registréierung iwwersprangen, well den Tool „net wierklech automatiséiert Entscheedungsfindung" wier**: d'Schwell vum Standard ass e bedeitenden Afloss op eng Entscheedung iwwer eng Eenzelpersoun, déi déi meescht KI-Entworf- oder Triage-Tools fir Bierger erfëllen, och wann e Mënsch technesch ennerschreift.
- **D'Verdeelungswierkung vu Feeler ignoréieren**: d'Feelerquote vun engem KI-System, gemëttelt iwwer all Benotzer, ka vill méi héich Feeler- oder Biaisquoten fir bestëmmte Gruppe verstoppen; d'[Verdeelungsgewiichtung](../verdeelungsgewiichtung/) sollt op de risikougepasste Schued-Terme ugewannt ginn, net nëmmen op déi aggregéiert Genauegkeetszuel.

## Quellen

- Central Digital and Data Office, Generative AI Framework for Government (2024). <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
- Algorithmic Transparency Recording Standard. <https://www.gov.uk/government/collections/algorithmic-transparency-recording-standard-hub>
- HM Treasury, Green Book: central government guidance on appraisal and evaluation. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-governent>
