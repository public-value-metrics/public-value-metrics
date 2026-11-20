# Bewäertung duerch opgedeckte Präferenzen

Methode vun den opgedeckte Präferenzen (Revealed Preference) schléissen de Wäert vun engem Gutt ouni Marché aus beobachtbarem
Verhale op engem verwandte Marché of, amplaz d'Leit direkt ze froen. Hedonesch Präisbestëmmung an d'Reiskäschte-Method si
déi zwou Aarbechtspäerd-Techniken: allebéid fänken mat enger richteger Transaktioun un a rechnen dovunner en
implizite Präis fir dat erof, wat ni direkt verkaaft gouf.

## Firwat et wichteg ass

Wou Methode vun der [Bewäertung duerch erkläert Präferenzen](../bewäertung-no-deklaréierte-präferenzen/) eng hypothetesch Fro stellen,
beobachte Methode vun den opgedeckte Präferenzen, wat d'Leit tatsächlech bezuelt hunn, wat d'Green Book,
alles anescht gläich, als allgemeng glafwürdegere Beweis behandelt, well et net dem hypotheteschen Biais ënnerläit –
d'Participante vun enger hedonescher Studie vun de Hauspräisser hunn de Prämie oder Ofschlag, deen hei gemooss gëtt,
wierklech bezuelt
(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>,
Annex 2). Hedonesch Präisbestëmmung zerleet e Marchépräis – typesch Hauspräisser – an implizit Präisser fir all
Attribut vum Gutt, sou datt Analysten z. B. de Präisprämie isoléiere kënnen, deen Stot tatsächlech bezuelen, fir
iergendwou méi roueg oder mat besserer Loftqualitéit ze wunnen, mat statistescher Kontroll vun all anere Attributer,
déi och de Hauspräis beaflossen (Gréisst, Lag, Schoulsprengel). D'Reiskäschte-Method mécht dat Analogt fir Erhuelungssäiten
ouni Entréesgebühr: d'Zäit a d'Geld, déi d'Leit fir d'Rees zu engem Site ausginn, verroden eng Ënnergrenz dofir, wat de Site
hinne wäert ass, well keen Käschte hëlt, déi méi héich si wéi dat, wat de Besuch him wäert ass.

Béid Methode deelen eng strukturell Limitatioun: si kënnen nëmmen dat bewäerten, wat an enger bestehender Marchétransaktioun
agebonne ass. Kaméidi bei enger Landebunn weist sech an de Hauspräisser, well Leit, déi sech ëm Kaméidi këmmeren, sech a méi rouege
Wunnraum sortéieren; den Existenzwäert vun enger Aart, bei där keen op Besuch geet oder an der Géigend wunnt, weist sech a kenger
Transaktioun, wat genee d'Lück ass, déi Methode vun der [Bewäertung duerch erkläert Präferenzen](../bewäertung-no-deklaréierte-präferenzen/) fëllen.

## D'Mathematik

```
Hedonesch Präisbestëmmung:
  Hauspräis = f(strukturell Attributer, Lagattributer,
                 interesséierend Ëmweltattribut, ...)
  Iwwer Regressioun schätzen; de Koeffizient vum Ëmweltattribut
  (alles anescht konstant) ass säin implizite Präis.

  Impliziten Präis vum Attribut X = ∂(Hauspräis) / ∂X

Reiskäschte-Method:
  Besuchsquote (Besuch pro Kapp aus der Zon i) = f(Reiskäschte aus der Zon i,
                 Ersatzsäiten, sozioekonomesch Kontrollvariabelen)
  Eng Nofrokurve fir Besicher als Funktioun vun de Reiskäschte schätzen.
  Konsumentenrent = Fläch ënner der geschätzter Nofrokurve
                  = Wäert vum Site fir d'Besucher
```

Béid Methode brauchen e statistesch solide Kontrollsetz – en Confounding-Attribut auszeloossen (hedonesch) oder en
noe Ersatzsite (Reiskäschte) verzerrt den impliziten Präis an eng Richtung, déi am Viraus net ëmmer offensichtlech
ass, dofir verlaangt d'Green Book Annex 2, datt d'Regressiounsspezifikatioun an d'Kontrollen gemellt ginn, net nëmmen
de Schlagzeilekoeffizient.

## Rechebeispill

**Nationale Regierung**: D'Methodologie vum Schattepräis vum Kuelestoff an der Green Book baséiert zum Deel selwer op hedoneschen
Beweiser, mä e méi einfache illustrative Fall ass Fliger-Kaméidi. Eng hedonesch Studie, déi
d'Verkaafspräisser vun Haiser an enger Fluchtroutgebitt géint d'distanzgewiichtegt Kaméididexpositioun regressert, mat Kontroll vu
Gréisst, Alter a Schoulsprengel, fënnt, datt all Erhéijung vun der duerchschnëttlecher Kaméididexpositioun ëm 1 Dezibel
mat engem Hauspräis-Réckgang vun 0,5 % verbonne ass. Fir en typescht Haus am betraffene Gebitt vun £280 000:

```
Impliziten Präis pro Dezibel = £280 000 × 0,5 % = £1 400 pro Stot
Betraffe Stot bei enger Erhéijung ëm 3 dB duerch eng nei Landebunn = 18 000
Aggregéiert implizit Käschte vun der Kaméidiserhéijung = £1 400 × 3 × 18 000 = £75,6 Mio.
```

Dat sinn eemoleg kapitaliséiert Käschte (am Hauspräis agebonne), déi d'Appraisal virsiichteg muss behandelen, fir
se net géint e separat geschate jäerleche Floss vu Kaméidi-Belästegungskäschte duebel ze zielen.

**Charity**: Eng Ëmweltcharity benotzt d'Reiskäschte-Method, fir e Naturschutzgebitt mat fräiem Zougang ze bewäerten.
Date aus enger Ëmfro iwwer d'Postleitzuelen vun de Besucher ginn duerchschnëttlech Hin-an-Zréck-Reiskäschte (Zäit bewäert mat dem
vun der Green Book recommandéierte Wäert vun der Net-Aarbechtszäit, plus Brennstoff) vun £14 pro Besuch, bei 40 000 Besicher
pro Joer. Déi geschate Nofrokurve – d'Besuchsquoten fale, wann d'Reiskäschte aus enger Zon eropgoen – implizéiert
e Konsumentenrent pro Besuch, iwwer de £14, déi tatsächlech ausgi gouf, vu ronn £9.

```
Gesamt jäerleche Wäert = 40 000 Besicher × (£14 ausgi + £9 Konsumentenrent)
                       = 40 000 × £23 ≈ £920 000/Joer
```

Dat iwwerschreit déi null Recette aus der Entréesgebühr vum Gebitt däitlech a gëtt den Trustees vun der Charity eng
verdeedegungsfäeg Zuel fir den Erhuelungswäert vum Site, wann se de Fall géigeniwwer Finanzéierer maachen.

## Verbindung zur Softwareentwécklung

Denke mat opgedeckte Präferenzen kënnt an de Produktanalysen am ëffentleche Secteur dacks méi vir, wéi Praktiker et
realiséieren: Notzungsdaten vun engem gratis digitale Regierungsservice si selwer en Beweis vum Wäert duerch opgedeckt
Präferenzen (Frequenz, Sessiounslängt a – am aussoukräftegsten – Muster vu widderhuelter versus eemoleger Notzung kënnen
op déiselwecht Aart analyséiert ginn, wéi e Reiskäschte-Modell d'Besuchsfrequenz géint d'Distanz behandelt). Wou e Service
richteg Ersatzmëttel huet (e Pabeierkanal, eng Telefonsleitung), kënnen d'„Käschte“, déi Bierger duerch d'Notze vum
digitale Kanal amplaz erleiden (Zäit, Daten, en Apparat), geschat an mat der Notzung vergläicht ginn, wat direkt
d'Reiskäschte-Logik widderhëlt. Kuckt [Digital Service Standard](../standard-fir-digital-servicer/) a
[Wäert vun oppenen Daten](../wäert-vun-oppenen-daten/), wat genee dëse Bewäertungsproblem fir e Gutt ouni direkte
Marchépräis huet.

## Feelerquellen

- **Verzerrung duerch ausgelooss Variabelen bei hedoneschen Modeller.** E korreléierten Attribut auszeloossen (d'Qualitéit
  vun der Schoul, déi mat Hauspräis an Ëmweltvariabel korreléiert) verzerrt d'Schätzung vum impliziten Präis;
  d'Spezifikatioun muss gemellt a gepréift ginn, net nëmmen d'Resultat.
- **Ersatzsäiten bei Reiskäschte-Studien ignoréieren.** De opgedeckte Wäert vun engem Besucher fir e Site gëtt ënnerschat,
  wann e méi noe Ersatz existéiert a net kontrolléiert gëtt – e besicht en vläicht haaptsächlech, well e gratis ass,
  net well e eenzegaarteg wäertvoll ass.
- **Opgedeckte Präferenzen op e Gutt ouni Echo um Marché uwenden.** Existenzwäert, Optiounswäert a Verierfniswäert
  weisen sech a kenger Transaktioun a kënne mat hedoneschen oder Reiskäschte-Methode net erëmfonnt ginn – déi Lück
  gehéiert der [Bewäertung duerch erkläert Präferenzen](../bewäertung-no-deklaréierte-präferenzen/).
- **Kapitaliséierte (eemolege) Wäert mat engem jäerleche Floss verwiesselen.** Hedonesch Effekter op Hauspräisser
  si typesch eemoleg kapitaliséiert Wäerter; se als jäerleche Virdeelsstroum ze behandelen, bléist d'Appraisal op.

## Quellen

- HM Treasury. "The Green Book," Annex 2: valuing non-market impacts.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Transport / Civil Aviation Authority. Aircraft noise valuation studies used in
  airport appraisal. <https://www.gov.uk/guidance/aviation-noise>
- Rosen S. "Hedonic Prices and Implicit Markets: Product Differentiation in Pure Competition."
  Journal of Political Economy, 1974.
- Clawson M, Knetsch JL. "Economics of Outdoor Recreation." Johns Hopkins University Press, 1966
  (origin of the travel-cost method).
