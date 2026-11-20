# Verdeelungsgewiichtung

D'Verdeelungsgewiichtung passt de Geldwäert vun enger Käscht oder vun engem Notzen dorunner un, wien se kritt, no dem Prinzip, datt e Pound méi wäert ass fir en aarmen Haushalt wéi fir e räichen Haushalt. D'Green Book vum HM Treasury liwwert eng explizit Method fir dës Gewiichtung unzewenden, opgebaut op dem ofhuelenden Grenznotzen vum Akommes, sou datt Bewäertunge kee Pound, deen dem räichsten Dezil zefällt, stëll als gläichwäerteg mat engem Pound fir dat ärmst behandelen.

## Firwat et wichteg ass

Déi Standard-Käschte-Notzen-Analyse zielt Pound zesummen, ouni ze froen, wiem hir Pound et sinn, wat implizit viraussetzt, datt e Pound fir jiddereen datselwecht wäert ass – eng Viraussetzung, vun där d'Wirtschaftler laang wëssen, datt se falsch ass. E Haushalt mat £15.000/Joer Akommes erlieft e Gewënn vun £1.000 ganz anescht wéi e Haushalt mat £150.000/Joer, well de Grenznotze vum Akommes mam Akommes fällt. Ongewiichtet bevorzugt déi Standard-Bewäertung systematesch Interventiounen, déi räichere, scho besser gestallte Gruppen zegutt kommen, well hir méi grouss Kafkraaft de Geldwäert vun den Notzen, déi si erreechen, opbléist (eng Parkopwäertung bei deiere Wunnengen „weist“ e méi groussen Immobiliewäert-Notzen wéi déiselwecht Opwäertung bei bëlleger Wunnengen, eleng well d'Präisser méi héich sinn, net well de Wuelstandsgewënn méi grouss ass).

Dem Green Book seng ergänzend Leitfaden zur Verdeelungsanalys, verstäerkt nom Review vum Treasury vun 2020, deen op d'Kritik geäntwert huet, d'Bewäertungsmethodologie bevorzuge systematesch London an de Süd-Osten, setzt e formellen Gewiichtungsusaz fest, baséiert op enger ugeholl Elastizitéit vum Grenznotze vum Akommes vun ongeféier 1,3 – dat heescht, e verduebelt Akommes halbéiert ongeféier (genee: 2^-1,3 ≈ 0,41 Mol) de Grenzwäert vun engem zousätzleche Pound. Dat ass keng Ofrondungskorrektur: wann een se uwennt, kann dat änneren, wéi eng vun zwee konkurréierende Programmer de méi héijen Nettogegewärtegen Wäert weist, besonnesch wann eng Interventioun, déi op e benodeelegt Gebitt konzentréiert ass, mat enger verglach gëtt, déi iwwer déi allgemeng Bevëlkerung verdeelt ass.

## D'Mathematik

D'Verdeelungsgewiicht vum Green Book fir e Pound Notzen, dee bei engem Haushalt mat Akommesniveau y ukënnt, relativ zu engem Pound beim nationale Duerchschnëttsakommes ȳ:

```
Gewiicht(y) = (ȳ / y)^e

wou:
  y  = Akommes vum Haushalt (oder Akommes vun der betraffener Grupp)
  ȳ  = duerchschnëttlecht (Referenz-)Akommes vum Haushalt
  e  = Elastizitéit vum Grenznotze vum Akommes (Green Book: ongeféier 1,3)
```

D'Gewiichter op d'Nettonotzen uwenden:

```
Gewiichtegen Notzen = Σ [ongewiichtegen Notzen fir Grupp i × Gewiicht(y_i)]
```

Eng Grupp mat der Hallschent vum nationalen Duerchschnëtt (y = 0,5ȳ) kritt e Gewiicht vun (1/0,5)^1,3 = 2^1,3 ≈ 2,46 – all Pound Notzen fir dës Grupp zielt ongeféier 2,46 Mol sou vill wéi e Pound fir e Haushalt mat Duerchschnëttsakommes.

## Rechebeispill

**Zwee konkurréierend lokal Programmer**, jidderee mat engem ongewiichtegen Nettonotzen vun £2 Millioune/Joer, déi em dee selwechte regionale Wuestumsfong konkurréieren:

- *Programm A*: eng Ënnerstëtzung fir Betriber an enger wuelhuewender Stad, duerchschnëttlecht Haushaltsakommes £45.000 (ongeféier 1,3× dem ugeholl nationalen Duerchschnëtt vun £35.000).
- *Programm B*: e Kompetenzprogramm an engem benodeelegte Quartier, duerchschnëttlecht Haushaltsakommes £18.000 (ongeféier 0,51× dem nationalen Duerchschnëtt).

```
Gewiicht(A) = (35.000 / 45.000)^1,3 = (0,778)^1,3 ≈ 0,72
Gewiicht(B) = (35.000 / 18.000)^1,3 = (1,944)^1,3 ≈ 2,53

Gewiichtegen Notzen A = £2.000.000 × 0,72 = £1,44 Millioun
Gewiichtegen Notzen B = £2.000.000 × 2,53 = £5,06 Millioune
```

Ongewiicht stinn déi zwee Programmer gläich. Fir d'Verdeelungswierkung gewiicht ass dem Programm B säin Notzen méi wéi dräimol sou grouss – e Resultat, dat d'Finanzéierungsempfehlung ëmdréit an dem explizitem Zweck vum Green Book entsprécht, d'Gewiichtung ze verlaangen, wéi se gewisen gëtt, net just dat ongewiicht Notzen-Käschte-Verhältnis.

**Verdeelung vu Charity-Subventiounen**: e Geldgeber, dee eng Subventioun vun £500.000, déi 1.000 Haushalter mat nidderegem Akommes erreecht (Gewiicht ≈ 2,0, gewiichtegen Wäert £1 Millioun-Äquivalent), mat de selwechte £500.000 fir 1.000 Haushalter mat mëttlerem Akommes (Gewiicht ≈ 1,0, gewiichtegen Wäert £500.000-Äquivalent) vergläicht, soll de Verdeelungsfall explizit a sengem Verwaltungsrotspapp weisen, anstatt et der Interpretatioun ze iwwerloossen.

## Verbindung zur Softwareentwécklung

D'Verdeelungsgewiichtung erschéngt selten direkt a Metriken vun der Softwareliwwerung, soll awer prägen, wéi Entwécklungs- an Datenteams Moossung an Zilgruppeverfollegung designen:

- Wann e Wierkungs-Dashboard oder e Rechner fir Notzen gebaut gëtt, weist d'Akommes- oder Benodeelegungsprofil vun deenen, déi betraff sinn, net just e Gesamtnotzen – Gesamtzuelen ouni Verdeelungsopschlësselung verstoppe genee d'Ëmdréiung, déi uewen gewise gouf.
- Verbënnt d'Zilgruppelogik am Servicedesign mat deene selwechten Benodeelegungsdaten, déi d'Green Book notzt – kuckt [Index of Multiple Deprivation](../index-of-multiple-deprivation/) –, sou datt d'Reechwäit vun engem digitale Service op Gerechtegkeet bewäert ka ginn, net just op Effizienz (dat ëmstridden véiert E am [Wäert fir Geld](../preis-leeschtungs-verhältnis/)).
- Wann en Algorithmus eng knapp Ressource verdeelt (Terminplaze, Zäit vum Sachbearbechter, eng Subventioun), reproduzéiert eng ongewiicht „maximéier de Gesamtnotzen“-Zilfunktioun konstruktiounsbedéngt dee selwechte Bias, deen d'Gewiichtung vum Green Book korrigéiere soll – wisst d'Politikverantwortlech explizit dorobber hin, éier optiméiert gëtt.

## Feelerquellen

- **Verdeelungsgewiichter inkonsequent iwwer e Portfolio uwenden.** Wann een nëmmen dem eent Programm seng Notzen gewiicht, awer net dee vum Verglach, kënnt e verzerrte, net e gerechtere Verglach eraus; d'Green Book verlaangt eng gläichwäerteg Behandlung.
- **Immobilien- oder Marktwäerter ouni Upassung als Proxy fir Wuelstand benotzen.** Marktpräisser si selwer duerch bestoend Akommesongläichheet verzerrt, wat genee dat ass, wat d'Verdeelungsgewiichtung korrigéiere soll – net ugepasste Marktwäerter notzen kann de Bias duebel zielen.
- **D'Variatioun bannent enger Grupp ignoréieren.** Eng Gewiichtung no dem Duerchschnëttsakommes vun enger Géigend (z. B. engem Dezil vum Index of Multiple Deprivation) ka Eenzel verfälschen, déi net dem Duerchschnëtt vun hirer Géigend entspriechen; notzt déi fäinst Akommesdaten, déi raisonnabel verfügbar sinn.
- **D'Elastizitéit vun 1,3 als universell Konstant behandelen.** D'Green Book selwer hält fest, datt dëst eng Schätzung mat engem plausibele Beräich ass; testt grouss Entscheedungen op Sensibilitéit géint aner Elastizitéiten, amplaz 1,3 als exakt ze behandelen.

## Quellen

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation", and
  supplementary guidance on distributional impacts (2022 edition).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury, "Green Book Review 2020: Findings and Response" (addressing regional-bias criticism).
  <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>
- Fujiwara D, Campbell R. "Valuation Techniques for Social Cost-Benefit Analysis." HM Treasury/DWP,
  2011 (background on marginal utility of income elasticity estimates).
