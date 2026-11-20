# Multikriteriell Entscheedungsanalyse (MCDA)

D'MCDA bewäert a gewiichtet Optiounen op ee Coup géint verschidde, ënnerscheedlech gewiichte Critèren a
liwwert doduerch e gerankte Vergläich, ouni datt all Critère an eng eenzeg monetär oder natierlech Eenheet
gepresst gëtt. Et ass d'Appraisal-Method fir Entscheedungen, bei deenen dat, wat wierklech zielt, sech
tatsächlech net op eng eenzeg Zuel reduzéiere léisst.

## Firwat et wichteg ass

D'Green Book (de Leitfaden vum HM Treasury fir d'Appraisal an d'Evaluatioun an der Zentralregierung)
erlaabt d'MCDA ausdrécklech (säi Box-2-Fallstudie-Annex an Annex A diskutéieren se direkt) fir
Appraisals, wou d'Virdeeler „wierklech inkommensurabel“ sinn – wou et d'Entscheedung méi verfälschen wéi
erkläre géif, alles iwwer eng [sozial Käschten-Nëtzen-Analyse](../sozial-käschte-notze-analys/) a Geld oder
iwwer eng [Käschten-Effektivitéits-Analyse](../käschten-effektivitéitsanalys-an-der-verwaltung/) an een Outcome
ëmzerechnen
(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>).
D'Auswiel vun engem Standuert fir e neit Gefängnis zum Beispill wéint Investitiounskäschten, Impakt op
d'Gemeinschaft, Transportanbindung, Ëmweltwierkung a Rekrutéierbarkeet vum Personal géinteneen of –
Critèren, déi keng gemeinsam Eenheet hunn, a wou eng erzwongen gemeinsam Eenheet (normalerweis Geld) eng
Wäertentscheedung iwwer déi relativ Wichtegkeet vun z. B. Ëmweltimpakt géintiwwer Käschten als objektiv
Rechnung verkleet androe géif.

D'Éierlechkeet vun der MCDA ass zugläich hir gréisste Schwaach: well d'Gewiichter vun deem festgeluecht
ginn, deen d'Appraisal duerchféiert (oder vun engem Panel), ass d'Method nëmmen sou legitim, wéi de
Gewiichtungsprozess ass. D'Green-Book-Leitlinne soen ausdrécklech, datt Critèren a Gewiichter vereinbart
a publizéiert musse ginn, *ier* d'Optioune bewäert ginn, genee fir ze verhënneren, datt e Priefer vun
enger bevorzugter Optioun aus déi Gewiichter zréckrechent, déi se rechtfäerdegen.

## D'Mathematik

```
Fir all Optioun i a Critère j:
  Score_ij   = Leeschtung vun der Optioun beim Critère (dacks 0-100
               oder 1-10, aus Beweiser, Expertenuerteel oder Bewäertung vun den Akteuren)
  Weight_j   = relativ Wichtegkeet vum Critère j, d'Gewiichter ergi 1 (oder 100)

Gewiichte Score vun der Optioun i = Σ_j (Score_ij × Weight_j)

Prozedur:
1. D'Critèresetz an d'Gewiichter VUN der Bewäertung vun all Optioun vereinbaren
   (Swing-Gewiichtung oder Pairwise-Vergläich, z. B. AHP, si gängeg Methoden).
2. All Optioun géint all Critère op enger gemeinsamer Skala bewäerten, wann
   méiglech op Basis vu Beweiser.
3. Gewiicht Totale berechnen; Optioune rangéieren.
4. D'Gewiichter op Sensibilitéit testen: Hält de Ranking, wann een plausibel
   anescht denkt, wéi wichteg all Critère soll sinn?
```

D'MCDA liwwert net, wéi den Netto-Gegenwaertswäert vun der SCBA, e verdeedegungsfäegen absolute Wäert – si
liwwert nëmmen e Ranking, konditionéiert op déi vereinbaart Gewiichter. Dat ass e Virdeel, wann d'Entscheedung
wierklech doran besteet, inkommensurabel Gidder géinteneen ofzewiichen, an en Nodeel, wann et benotzt gëtt,
fir déi méi schwéier Aarbecht vun der Monetariséierung ze ëmgoen, wou Monetariséierung tatsächlech méiglech
gewiescht wier.

## Rechebeispill

**Lokalbehörd**: E Gemengerot, deen en Standuert fir en neit Recyclingzenter fir Haushaltsoffäll
auswielt, bewäert dräi Site géint véier Critèren, vun engem departementsiwwergräifende Panel gewiichtegt,
ier iergendee Site besicht gouf:

```
Critèren (Gewiicht):      Investitiounskäschten (30%)  Transportzougang (25%)
                           Impakt op d'Gemeinschaft (25%)  Ëmweltimpakt (20%)

Scores vun de Site (0-100, méi héich = besser):
Site A: Käschten 80, Zougang 60, Gemeinschaft 40, Ëmwelt 70
Site B: Käschten 60, Zougang 90, Gemeinschaft 70, Ëmwelt 50
Site C: Käschten 90, Zougang 50, Gemeinschaft 80, Ëmwelt 60

Gewiicht Totaler:
Site A = 80(,30) + 60(,25) + 40(,25) + 70(,20) = 24+15+10+14 = 63
Site B = 60(,30) + 90(,25) + 70(,25) + 50(,20) = 18+22,5+17,5+10 = 68
Site C = 90(,30) + 50(,25) + 80(,25) + 60(,20) = 27+12,5+20+12 = 71,5
```

Site C rangéiert am héchsten. E Sensibilitéitstest, deen d'Gewiicht fir den Impakt op d'Gemeinschaft vu 25 %
op 35 % hieft (10 Punkten aus de Investitiounskäschten geholl), ännert den Total vu Site C op 71,5 − 3 + 8 =
76,5 an dee vu Site B op 68 − 6 + 7 = 69 – Site C féiert weider, d'Ranking ass also robust géint déi plausibel
Meenungsverschiddenheet iwwer d'Gewiichtung, genee de Check, deen d'Green Book erwaart, gemellt ze kréien.

**Charity**: Eng Stëftung, déi Fördergelder verdeelt a tëscht engem Schëlleberoutungsdingscht, engem Netz vun
Iesse-Banken an engem Programm fir finanziell Bildung wielt, benotzt d'MCDA amplaz vum SROI (kuckt
[Social Return on Investment](../sozialen-investitiounsrendement/)), genee well d'Trustees a gudde Gleewen
ënnerschiddlecher Meenung sinn, ob Krisenhëllef oder Präventioun méi staark sollt gewiichtegt ginn – d'MCDA
erlaabt hinnen, sech op d'*Form* vun der Meenungsverschiddenheet (eng Gewiichtsspannbreet) z'eenegen, amplaz
virzedoen, e eenzege SROI-Verhältnis géif se léisen.

## Verbindung zur Softwareentwécklung

D'MCDA ass dat natierlecht Instrument fir d'Auswiel vu Fournisseuren an Architekturen, wann Critèren
wierklech géinteneen ginn – d'Wiel tëscht engem Cloud-gehoste System an engem On-Premises-System fir
d'Fallverwaltung wiicht Käschten, Risiko fir d'Datesouveränitéit, Accessibilitéit a Liwwergeschwindegkeet
op eng Aart a Weis géinteneen of, déi sech net op eng Zuel reduzéiere léisst. Engineering-Leads sollten
drop bestoen, datt d'Gewiichtung geschitt, ier d'Optioune bewäert ginn, exakt wéi d'Green Book et verlaangt,
well eng Gewiichtungsübung no der Shortlist zouverlässeg a Richtung där Optioun dréift, déi de Raum souwisou
bevorzugt huet. Kuckt [Build vs. Buy an der Regierung](../selwer-bauen-oder-kafen-an-der-verwaltung/) fir eng
gängeg MCDA-Uwendung, an [Public-Value-Scorecard](../public-value-scorecard/) fir en
verwandt Instrument vun der strukturéierter Bewäertung, dat no an net virun der Entscheedung agesat gëtt.

## Feelerquellen

- **Gewiichter festleeën, nodeems een d'Optioune gesinn huet.** Dat ass déi heefegst Aart, wéi d'MCDA
  manipuléiert gëtt, absichtlech oder net; Gewiichter virun der Bewäertung publizéieren an optrëtt, wien se
  festgeluecht huet.
- **Dat gewiicht Total als haart Zuel behandelen.** E Score vu 71,5 géint 68 ass kee statistesch
  bedeitenden Ënnerscheed, ausser d'Sensibilitéitsanalyse bestätegt, datt d'Ranking stabil ass;
  Spannbreeden uginn, net falsch Präzisioun.
- **D'MCDA benotzen, fir eng Monetariséierung ze vermeiden, déi tatsächlech machbar gewiescht wier.** Wann
  déi meescht Critèren glafwürdeg bepräist kéinte ginn, verléiert een duerch d'Defaultwahl vun der MCDA
  amplaz der [SCBA](../sozial-käschte-notze-analys/) Informatioun, déi d'Appraisal hätt kënnen notzen.
- **Een dominanten Akteur all Gewiichter eleng festleeë loossen.** Gutt Green-Book-Praxis erwaart, datt
  d'Gewiichter vun engem representative Panel erhuewe ginn, net vum Direkter, deen d'Projet ënnerstëtzt,
  fir ze verhënneren, datt d'Appraisal einfach nees erauskritt, wat dës Persoun souwisou wollt.

## Quellen

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Annex A
  (multi-criteria decision analysis) and Box 2 case studies.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Communities and Local Government. "Multi-criteria analysis: a manual." 2009.
  <https://www.gov.uk/government/publications/multi-criteria-analysis-a-manual>
- Belton V, Stewart TJ. "Multiple Criteria Decision Analysis: An Integrated Approach." Kluwer,
  2002.
