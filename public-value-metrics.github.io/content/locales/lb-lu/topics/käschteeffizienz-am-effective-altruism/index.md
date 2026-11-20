# Käschteeffizienz am Effective Altruism

D'Iwwerleeunge vum Effective Altruism (EA) zur Käschteeffizienz rangéieren karitativ Interventiounen no der Quantitéit u Guddem – am dackste als gerett Liewen oder gewonnen Gesondheet pro ausginn Dollar ausgedréckt – a leeden d'Geld bei déi Interventioun, déi um Grenzwäert am meeschte Gutts kaaft. GiveWell ass dee aflossräichsten Akteur an dësem Feld: et publizéiert explizit, aktualiséiert Schätzunge vun de Käschte pro gerett Liewen an de Käschte pro Resultat fir eng kleng Lëscht vun „Top-Charities“ a recommandéiert Spender, där Charity ze ënnerstëtzen, déi am Moment Plaz fir méi Finanzéierung zum beschte Tarif huet.

## Firwat et wichteg ass

GiveWell nennt d'Käschteeffizienz als féierend Critère a senger publizéierter Methodologie: et sicht evidenzbaséiert Interventiounen, schätzt hir Käschteeffizienz an enger gemeinsamer Eenheet an rangéiert iwwer ganz onverbonne Ursaachen – Moustiquairen géint Malaria, Vitamin-A-Ergänzung, Cash-Transferen, Ureizzuelungen fir Impfungen – op där eenzeger Achs. Dat ass en direkten Import vun Iwwerleeungen am Stil vu QALY/DALY aus der Gesondheetsökonomie an d'Philanthropie: sou wéi e Gesondheetssystem freet „wéivill QALYs pro Pound um Grenzwäert“, freet GiveWell „wéivill Liewen, oder Liewensjoren, pro Dollar um Grenzwäert“ a behandelt Ursaachen als ersetzbar, soubal se an déi gemeinsam Eenheet ëmgerechent sinn. Kuckt [Käschteeffizienzanalyse an der Regierung](../käschten-effektivitéitsanalys-an-der-verwaltung/) fir de Cousin vun dësem Denkrahmen am ëffentleche Secteur.

Dat meescht zitéiert GiveWell-Zuel betrëfft d'Against Malaria Foundation (AMF), déi mat Insektizid behandelt Moustiquairen verdeelt. Am publizéierte Rechebeispill vu GiveWell (op Basis vu Finanzéierungsdaten vun 2020) hunn ongeféier $4.500 genuch Netzer finanzéiert, fir e Stierffall ze verhënneren, nom Berécksiichtege vun der onperfekter Notzung vun de Netzer, der Basismortalitéit ouni Netzer an enger Upassung fir Funging – d'Méiglechkeet, datt d'AMF en Deel vun där Finanzéierung souwisou vun anere Spender kritt hätt. GiveWell mécht kloer, datt dës Zuel sech mat der Zäit a geografesch verännert, wéi Malariaprävalenz, Netzkäschten a Finanzéierungslécke sech änneren, an datt d'Käschte fir e Liewen ze retten allgemeng erwaart ginn, mat der Zäit ze klammen, well déi bëllegst Méiglechkeeten als éischt genotzt ginn; et ass eng Illustratioun vun der Method, kee fixe Präis.

## D'Mathematik

```
Käschteeffizienz = Käschte vun der Interventioun / produzéiert Eenheeten u Guddem
                   (z. B. $ pro gerett Liewen, $ pro verhënnert DALY, $ pro QALY)

GiveWell seng Kette fir e Moustiquairen-Programm, illustrativ:
  $ pro kaaft a geliwwert Netz
    ÷ Undeel vun den tatsächlech benotzte Netzer
    ÷ geschützt Persounen pro Netz
    × jäerlech Basismortalitéit ouni Netzer
    × Reduktioun vun der Mortalitéit, déi der Netzbenotzung zouzeschreiwen ass (aus RCT-Evidenz)
    × Joren u Schutz pro Netz
    ÷ Upassung fir Funging (Geld, dat anere Spender hir Finanzéierung verdrängt)
  = $ pro gerett Liewen (netto vun den Effekter vun der kontrafaktescher Finanzéierung)
```

Dës Kette ass wichteg, well all Schrëtt eng Plaz ass, wou Käschteeffizienz-Schätzunge dacks falsch leien – kuckt d'Fallen ënnen – an well se explizit mécht, datt „Käschte pro gerett Liewen“ ni e rue beobachte Präis ass; et ass eng modelléiert Schätzung, opgebaut aus verschiddenen, getrennt onsécheren Inputen.

## Rechebeispill

Zwou hypothetesch Interventiounen, béid evidenzbaséiert, déi em déi selwecht marginal £100.000 konkurréieren:

- **Moustiquairen (am AMF-Stil)**: ongeféier $4.500 pro gerett Liewen am publizéierte Rechebeispill vu GiveWell op Basis vun den Daten vun 2020, also ganz grëfflech 20 gerett Liewen pro £100.000, jee no benotztem Wiesselkurs a Joer.
- **Programm géint Wiermer (Deworming)**: guer kee plausibelen Mortalitéitsnotzen, awer staark Evidenz fir laangfristeg Akommesgewënn duerch Entwiermung an der Kandheet; GiveWell bewäert et am Akommesgewënn, net a geretten Liewen, wat en direkte Verglach mat de Moustiquairen ouni gemeinsam Eenheet schwéier mécht. GiveWell benotzt e explizit „moral weights“-Kader, fir béid an eng intern Eenheet ëmzerechnen, fir ze rangéieren.

D'Disziplin vun der EA-Method ass et, dëse Verglach un d'Liicht ze zéien, amplaz béid ze finanzéieren, well béid „gutt kléngen“. Kuckt [sozialen Rendement vum Investissement](../sozialen-investitiounsrendement/) fir déi entspriechend Zwangsfunktioun, déi vu britesche Sozialunternehmen a lokale Commissairen benotzt gëtt, déi dës selwecht Fro stellt – wat ass de beschte Rendement pro Pound? – awer a der Sprooch vum monetaiséierte Wäert amplaz an där vu Liewen/DALYs.

## Verbindung zur Softwareentwécklung

Entwéckler, déi Spenderplattformen, Tools fir Subventiounsmatching oder Wierkungs-Dashboards fir EA-orientéiert Geldgeber (Open Philanthropy, GiveWell selwer, Plattforme fir effektiivt Ginn wéi Giving What We Can) bauen, mussen Käschteeffizienz-Schätzunge als Beräicher mat genannten Annahmen duerstellen, net als eenzel Zuelen – dem Modell läit e puer multiplikativ onsécher Inputen zougrond, an dat op eng eenzeg Zuel um Dashboard zesummenzefalen, stellt d'Vertrauen falsch duer, dat GiveWell selwer ugëtt. Versionéiert all Schätzung no Publikatiounsdatum; GiveWell iwwerschafft seng Zuelen, heiansdo däitlech, wann nei RCT-Evidenz oder Daten zu de Finanzéierungslécken erakommen, a eng Plattform, déi eng al Zuel cachéiert, gëtt roueg falsch.

## Feelerquellen

- **Eng Käschteeffizienz-Schätzung als fixe Präis behandelen.** Et ass en Ausgang vun engem Modell mat e puer onséchere multiplikativen Inputen (Notzungsquoten, Basismortalitéit, Funging-Upassung); gitt Datum a Versioun un.
- **Funging/Verdrängung ignoréieren.** Eng Organisatioun ze finanzéieren, déi d'Geld souwisou vun engem anere Spender kritt hätt, kaaft manner kontrafaktescht Gutts, wéi d'Schlagzeil suggeréiert – kuckt [Zousätzlechkeet a Matnahmeeffekt](../additionalitéit-a-matnahmeeffekt/) an [Verdrängung a Zouerdnung](../verdrängung-a-zouerdnung/).
- **Iwwer onkompatibel Eenheeten ouni Ëmrechnung vergläichen.** „Gerett Liewen“ an „gewonnent Akommes“ sinn ouni en explizit Moral-Weights-Kader net direkt vergläichbar; se niewenteneen ze stellen, wéi wann se et wieren, ass e Kategoriefeeler.
- **Tunnelbléck op e Kategorieberäich.** Nëmmen bannent engem Beräich ze rangéieren (z. B. nëmmen Charities fir global Gesondheet) an de Gewënner „déi käschteeffizientst Charity“ ze nennen, iwwerdreift d'Aussoen; dem GiveWell säi Ranking iwwer Ursaachen hannen ass bewosst enk (global Gesondheet a Wuelbefannen), net universell.

## Quellen

- GiveWell, "Our criteria." <https://www.givewell.org/how-we-work/our-criteria>
- GiveWell, "How Much Does It Cost to Save a Life?" (February 2024 version). <https://www.givewell.org/how-much-does-it-cost-to-save-a-life/february-2024-version>
- GiveWell, Against Malaria Foundation review. <https://www.givewell.org/charities/amf>
- Giving What We Can, on cost-effectiveness across causes. <https://www.givingwhatwecan.org/>
