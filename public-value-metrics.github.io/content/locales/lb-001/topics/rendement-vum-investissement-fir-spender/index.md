# Rendement vum Investissement fir Spender

De Rendement vum Investissement fir Spender ass dat, wat dem Pound vun engem bestëmmte Spender tatsächlech u Resultater kaaft – net d'Betriebszuelen vun der Charity, an net dem Charity säi Rendement op säi Gesamtbudget. Et stellt de ROI vun der Perspektiv vun der Organisatioun (wéi effizient féiere mir?) op d'Perspektiv vum Spender ëm (wat ännert mäi Grenzbäitrag?), an déi zwou Zuele ginn routinéiert, a falsch, als dat selwecht behandelt.

## Firwat et wichteg ass

Dem „ROI“ vun enger Charity, souwäit de Begrëff iwwerhaapt benotzt gëtt, beschreift normalerweis eppes wéi [d'Käschte pro Begënschtegten](../käschte-pro-begënschtegten/) oder [d'Overhead-Quote vun der Charity](../overhead-quote-vu-wohltätegkeetsorganisatiounen/) – Moossunge vun der organisatorescher Effizienz. De ROI vun engem Spender ass eng ganz aner Fro: ugeholl, datt dës Charity scho aner Recetten huet, wat füügt *dem* Spender säi Geld um Grenzwäert derbäi? Wann eng Charity datselwecht Programm mat oder ouni eng bestëmmten Spend vun £10.000 géif ëmsetzen – well se grouss Reserve huet, oder well en anere Geldgeber d'Lück gefëllt hätt – dann ass den Spender-ROI vun där Spend bal null, egal wéi gutt d'Overhead-Quote oder d'Käschte pro Resultat vun der Charity am Ganzen ausgesinn.

Dat ass déiselwecht Zousätzlechkeetsfro, déi der Bewäertung vum [Wäert fir Geld](../preis-leeschtungs-verhältnis/) bei de britesche Staatsausgaben an [Zousätzlechkeet a Matnahmeeffekt](../additionalitéit-a-matnahmeeffekt/) bei der Programmevaluatioun zougrondeleit: geschafene Wäert kann engem Geldgeber nëmmen dann ugerechent ginn, wann en net souwisou geschitt wier. Grouss Spenderplattformen a Organisatioune fir effektiivt Ginn (Giving What We Can, GiveWell) bauen hir Empfehlungen explizit op dës Ënnerscheedung op, a froen net „ass dat eng gutt Charity“, mee „huet dës Charity ongefëllte Plaz fir méi Finanzéierung, sou datt meng Spend zousätzlech ass“.

## D'Mathematik

```
Spender-ROI ≠ operativ Effizienz vun der Charity

Spender-ROI ≈  (Resultat mat der Spend) − (Resultat, dat ouni se
               geschitt wier, also de Kontrafaktum)
             ─────────────────────────────────────────────────
                              Gréisst vun der Spend

Wichteg Inputen:
  - Plaz fir méi Finanzéierung (ass d'Charity um Grenzwäert finanziell limitéiert?)
  - Funging (hätt en anere Spender d'Lück gefëllt?)
  - Grenzkäschteeffizienz um spezifesche Finanzéierungsniveau (d'Käschte klammen
    dacks, wann eng Interventioun iwwer déi am liichtste z'erreechend Populatioun
    eraus skaléiert gëtt)
```

Kuckt [Käschteeffizienz am Effective Altruism](../käschteeffizienz-am-effective-altruism/), wéi GiveWell d'Fro vun der „Plaz fir méi Finanzéierung“ operationaliséiert, an [kontrafaktesch Analys](../kontrafaktesch-analys/) fir déi allgemeng Method.

## Rechebeispill

E Spender wielt tëscht zwou Spende vun £5.000:

- **Charity C**: huet e voll finanzéiert Kärprogramm mat £2 Millioune Reserven an enger Waardelëscht vu Geldgeber; déi marginal £5.000 ginn wahrscheinlech bei d'Reserven oder an eng Aktivitéit mat méi niddreger Prioritéit gesat. Geschate spenderzousätzlecht Resultat: minimal – d'Geld ännert net kloer, wat geschitt.
- **Charity D**: e klengt, evidenzbaséiert Programm, dat ëffentlech gesot huet, datt et nächst Quartal 200 Leit ofweise muss ouni zousätzlech £50.000, an dovun £42.000 opgedriwwen huet. Déi marginal £5.000 finanzéiere ganz wahrscheinlech richteg zousätzlech Liwwerung – soe mer 20 zousätzlech Leit, déi bedingt ginn, bei de vun der Charity selwer genannte Käschte vun £250 pro Begënschtegten.

Selwecht Spendegréisst, selwechte Spender, radikal verschidden Spender-ROI – net well Charity C eng méi schlecht Organisatioun wier (si kann insgesamt besser Käschte pro Resultat hunn), mee well hir marginal Finanzéierungslück schonn zou ass.

## Verbindung zur Softwareentwécklung

Spenderplattformen a Tools fir Spendeempfehlungen weisen ze dacks nëmmen Effizienzmetriken um Niveau vun der Organisatioun (Overhead-Quote, Käschte pro Begënschtegten), well dat ass, wat Charities an hire Jorresberichter publizéieren a wat am einfachsten an eng Vergläichstabell geholl ka ginn. Fir de Spender-ROI richteg ofzebilden, brauch et en aneren, méi schwéier ze beschaffenden Dateepunkt: dat vun der Charity genannt aktuellt Finanzéierungslück oder „Plaz fir méi Finanzéierung“, dat sech d'ganzt Joer iwwer ännert a selten als strukturéiert Donnéeë virläit. Plattformen, déi richteg Spender-ROI-Iwwerleeungen ënnerstëtze wëllen, brauchen entweder e direkten Feed vun Offenleeungen vun de Finanzéierungslécken (wéi GiveWell en manuell fir seng recommandéiert Charities féiert) oder en explizitten Hiweis, datt eng Vergläichstabell organisatoresch Effizienz weist, net Spenderzousätzlechkeet. Kuckt [Overhead-Quote vun der Charity](../overhead-quote-vu-wohltätegkeetsorganisatiounen/) fir d'Metrik, mat där de Spender-ROI am dackste, a falsch, verwiesselt gëtt.

## Feelerquellen

- **Effizienz vun der Charity mat Zousätzlechkeet fir de Spender verwiesselen.** Eng gutt gefouert Charity mat nidderegem Overhead ka trotzdem e marginale Spender-ROI no bei null hunn, wann se net finanziell limitéiert ass.
- **Funging ignoréieren.** Wann e groussen institutionelle Geldgeber d'Lück souwisou gedeckt hätt, verdrängt d'Spend vun engem eenzele Spender dem Geldgeber säi Geld, amplaz nei Liwwerung dobäi ze bréngen.
- **Linear Käschteeffizienz bei Skaléierung unhuelen.** Déi am bëllegste z'erreechend Begënschtegt ginn dacks als éischt bedingt; d'Grenzkäschte pro Resultat klamme dacks, wann e Programm sech ausdeent, sou datt de ROI vum nächste Pound net dee selwechte ass wéi dee vum duerchschnëttleche Pound, dee schonn ausginn ass.
- **Kee genannte Finanzéierungslück.** Eng Charity oder Plattform, déi net soe kann, wat déi nächst £X géife finanzéieren, kann keng richteg Spender-ROI-Behaaptung ënnerstëtzen, nëmmen eng Duerchschnëttskäschte-Behaaptung.

## Quellen

- Giving What We Can, on funding gaps and cost-effectiveness in donation decisions. <https://www.givingwhatwecan.org/>
- GiveWell, "Our criteria" (room for more funding as an explicit criterion). <https://www.givewell.org/how-we-work/our-criteria>
- HM Treasury, the Green Book: appraisal and evaluation in central government. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-governent>
