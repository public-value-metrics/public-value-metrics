# KPIe fir den ëffentleche Secteur

E Key Performance Indicator (KPI) ass eng gewielte, verfollegt Moossnam, déi dofir steet, ob en ëffentleche
Service seng Aarbecht gutt mécht. An der Regierung ass d'Wiel vun engem KPI ni neutral: well KPIe u Budgeten,
Ranglëschten a Karriere gebonne sinn, formt d'Auswiel vun engem d'Verhale vun allen Nofolgenden, dacks méi wéi
d'Politik, déi de Service geschaf huet.

## Firwat et wichteg ass

Dem Charles Goodhart seng Observatioun vun 1975 zur Geldpolitik – spéider vun der Marilyn Strathern popularis-
éiert als „wann eng Moossnam zum Ziel gëtt, hält si op, eng gutt Moossnam ze sinn“ – ass dee wichtegste
Warnhiweis am Leeschtungsmanagement vum ëffentleche Secteur. E KPI, deen gewielt gouf, fir e System ze
*beschreiwen*, fänkt un, dat System ze *verzerren*, sou séier wéi Ressourcen, Gehalt oder politescht
Iwwerliewe un hie gebonne ginn. Dat kanonescht Beispill sinn d'Äntwertzäite vun den NHS-Ambulanzen: wéi dat
Aacht-Minute-Ziel fir d'Kategorie A bindend gouf, gouf bei verschiddenen Trusts gewisen, datt si
Ambulanze „gestapelt“ hunn, just ausserhalb vum Äntwertzäit-Auer, oder Uriff nei klasséiert hunn, fir d'Zuel
ze erreechen, ouni d'Outcomes fir d'Patienten ze änneren. D'Leitlinn vum UK National Audit Office zur Auswiel an
Notzung vu Leeschtungsindikatoren – ausgeführt a senge Value-for-Money-Rapporten a senge Kaderen „Performance
Measurement by Regulators“ an „Choosing the Right FABRIC“ (Fit for purpose, Appropriate, Balanced, Robust,
Integrated, Cost-effective) – gëtt et genee, well Departementer ëmmer erëm Indikatoren gewielt hunn, déi einfach
ze mellen waren, amplaz Indikatoren, déi schwéier ze manipuléiere sinn. E Softwareingenieur, dee dat
Dashboard auslevéiert, un deem e Minister oder Direkter gemooss gëtt, designt, ob en et wëll oder net, d'Aureizstruktur
vun enger ëffentlecher Institutioun.

## D'Mathematik

D'KPI-Design ass en Thema an der Form vun engem Kader, mä d'*Evaluatioun* vun engem KPI-Kandidat ass eng
widderhuelbar Checklëscht, keng Formel:

```
Fir all KPI-Kandidat bewäerten géint:
  Fit for purpose  — moosst et den Outcome, oder e Proxy, deen e puer Schrëtt ewech ass?
  Appropriate      — gehéiert en deene Leit, déi en tatsächlech beaflosse kënnen?
  Balanced         — ass en mat enger Géigemetrik gepaart, déi Manipulatioun erfaasst?
  Robust           — iwwerlieft en en Audit, oder ass en selbst gemellt an net verifizéierbar?
  Integrated       — passt en an de méi breede Set, oder dréckt en géint en anere KPI?
  Cost-effective   — kascht d'Sammele méi wéi d'Entscheedung, déi en informéiert?

Opdeelung féierend vs. nofolgend:
  Féierenden Indikator   → seet zukünfteg Outcome viraus, ass awer dacks manipuléierbar (z. B. Uriff beäntwert <60 s)
  Nofolgenden Indikator  → bestätegt, datt den Outcome geschitt ass, kënnt awer ze spéit, fir ze steieren (z. B.
                          jäerlech Zefriddenheetsëmfro)
  E verdeedegungsfäege KPI-Set paart op d'mannst een vun all pro Ziel.
```

## Rechebeispill

**Ambulanz-Trust**: E Trust mellt en Äntwertzäit-KPI fir d'Kategorie A (lieweggefierlech) vun „75 % vun den
Uriff bannent 8 Minutte beäntwert.“ An engem Quartal kommen 6 000 Uriff vun der Kategorie A erop; 4 500 ginn
bannent 8 Minutte erreecht, wat 75,0 % ergëtt – anscheinend am Ziel.

```
Schlagzeil-KPI = 4 500 / 6 000 × 100 = 75,0 %  (erfëllt d'75-%-Schwell)
```

Mä en Goodhart-Audit füügt eng Géigemetrik derbäi: mëttler Äntwertzäit fir déi lamsten 10 % vun den Uriff.

```
Mëttel Äntwertzäit vum lamsten Dezil = 34 Minutten (eropgaangen vun 19 Minutten viru zwee Joer)
```

De Trust erreecht d'Ziel, während de Schwanz – d'Uriff, déi am ehesten wierklech lieweggefierlech sinn, wann
d'Triage onperfekt ass – vill méi schlecht gouf, well d'Equipë Richtung Uriff priorisiéiert ginn, déi
no bei der 8-Minute-Klëppekant sinn, amplaz no der klinescher Dréngendegkeet. Deen eenzege KPI huet eng falsch
Geschicht erzielt; de gepaarten KPI huet déi wouer erzielt.

## Verbindung zur Softwareentwécklung

Ingenieuren, déi Leeschtungsdashboards fir d'Regierung bauen, designen funktionell dem Organisatioun seng
Aureiz-API. Praktesch Konsequenzen: den *Nenner* esou rigoréis instrumentéieren wéi den Zieler (e KPI, dee
als blouse Prozentsaz gemellt gëtt, lued zur Manipulatioun vum Nenner an – kuckt
[Käschte pro Transaktioun](../käschte-pro-transaktioun/) fir déiselwecht Fal an digitale Servicer);
Géigemetriken am selwechten Dashboard abauen amplaz an engem separate Rapport, deen keen liest, sou datt
Manipulatioun beim Entscheedungsmoment siichtbar ass; an d'KPI-Definitioun versionéieren, well eng
stëll Nei-Definitioun (änneren, wat als „Uruff“, „Fall“ oder „Ofschloss“ zielt) funktionell dat selwecht ass
wéi d'Ziel z'änneren, ouni et unzekënnegen. Eng [Public-Value-Scorecard](../public-value-scorecard/) ass eng
strukturéiert Manéier, fir ze verhënneren, datt een eenzege KPI isoléiert gelies gëtt, an
[Outcome-baséiert Rechenschaftspflicht](../outcome-baséiert-rechenschaftspflicht/) ass d'Disziplin, KPIe um Niveau vun der
Bevëlkerung ze wielen, déi een eenzegt Team net eenzel verzerre kann.

## Feelerquellen

- **Déi einfach ze sammelen Metrik iwwer déi bedeitend wielen**: d'Äntwertzäit vun engem Uruff ass trivial
  ze protokolléieren; ob den Uruff dem Bierger säi Problem geléist huet, net – mä nëmmen dat zweet ass den
  Outcome. Dem widderstoen, einfach op dat zeréckzefalen, wat d'System souwisou ausgëtt.
- **Keng Géigemetrik**: all KPI, deen u Geld oder Reputatioun gebonne ass, gëtt um Rand manipuléiert;
  e mat enger gepaarter Metrik auslevéieren, déi de wahrscheinleche Manipulatiounsvektor erfaasst, ier en publizéiert gëtt.
- **D'Metrik ouni Changelog nei definéieren**: „empfaangen Uriff“ duerch „beäntwert Uriff“ ersetzen, fir en
  Trend ze flatteren, zerstéiert d'Glafwürdegkeet vun der Zäitreih am Moment, wou et entdeckt gëtt – ëmmer
  e Changelog vun den Definitiounen niewent den Zuelen publizéieren.
- **Aktivitéit mat Resultat verwiesselen**: ofgeschloss Inspektiounen ze zielen ass en Output; Raimlechkeeten
  ze zielen, déi an d'Konformitéit bruecht goufen, ass méi no beim Outcome (kuckt
  [Outcomes vs. Outputen](../outcomes-vs-outputen-resultater-a-leeschtungen-ënnerscheeden/)).

## Quellen

- National Audit Office, "Choosing the Right FABRIC: A Framework for Performance Information."
  <https://www.nao.org.uk/>
- Marilyn Strathern, "'Improving Ratings': Audit in the British University System," *Social
  Anthropology*, 1997 (formulation of Goodhart's law as commonly cited).
- National Audit Office, investigations into NHS ambulance service performance reporting.
  <https://www.nao.org.uk/>
