# Selwer bauen oder kafen an der Verwaltung (Build vs Buy)

Build-vs-Buy ass e strukturéierte, risikougepasste Verglach tëscht Eegenentwécklung a kommerzieller oder standardiséierter Beschaffung, verglach nom diskontéierte [Gesamtbesëtzkäschten (TCO)](../gesamtbesëtzkäschte-an-der-verwaltungs-it/), der Zäit bis zum Wäert (Time-to-Value) a nom Risiko. D'Verwaltung ass strukturell e Kafsecteur – de Technology Code of Practice stellt eng Viraussetzung fir Standard- a Cloud-Léisungen op –, trotzdem tendéiere Ingenieursteamen an de Ministèrë weiderhin zum Selwerbauen, aus deene selwechte Grënn, aus deene Bauhären iwwerall esou entscheeden.

## Firwat et wichteg ass

Den Technology Code of Practice vum Government Digital Service (<https://www.gov.uk/guidance/the-technology-code-of-practice>) an déi dozou gehéiereg Leetlinn am Service Manual iwwer d'Entscheedung tëscht Bauen a Kafen dréngen d'Ministèren, eng Eegenentwécklung géint d'Viraussetzung ze rechtfäerdegen, datt Standardkapazitéit gekaaft, net gebaut soll ginn, an datt nëmmen wierklech nei, missiounsdifferenzéierend Kapazitéit Eegencode rechtfäerdegt. D'Zousazleetlinn vum HM Treasury zum Optimismus-Biais am Green Book, ofgeleet vun der Mott-MacDonald-Iwwerpréiwung vu grousse ëffentleche Beschaffungen vun 2002, gëtt IT-Projeten déi breetst Spannbreet vun alle bewäerte Kategorien – Kapitalkäschtenschätzunge ginn recommandéiert, ier se an der Appraisal benotzt ginn, ëm 10 % um ënneren Enn a bis zu 200 % um iewenzegen Enn eropzesetzen, wat reflektéiert, wéi schlecht Software-Entwécklunge bei ëffentleche Beschaffunge historesch ënnerschat goufen. Build-vs-Buy-Analyse gëtt et genee, fir dës Risikoupassung virun der Genehmegung op den Dësch ze zwéngen, amplaz se als Ufro op Iwwerschreidung am lafende Joer opdauchen ze loossen.

## D'Mathematik

```
Iwwer deeselwechten Horizont vun 3–5 Joer vergläichen, diskontéiert mam sozialen
Diskontsaz vum Green Book (kuckt social-discount-rate.md):

NPV_Optioun = PV(Notzen, no Time-to-Value verréckelt) − PV(TCO)

Risikoupassungen (Muster vum Optimismus-Biais am Green Book):
  Baukäschten × 1,1–3,0        (Spannbreet vum IT-Projet-Opschlag, Mott MacDonald)
  Zäit bis zum Wäert beim Bauen + 40–60 % (Prior fir Verzögerung beim Ausrollen)
  Kafen: amplaz dovun Realitéitscheck fir d'Integratioun a Kontrakt-Ausstigskäschten derbäisetzen

Entscheedungsfaktoren, an der Reiefolleg, an där se normalerweis entscheeden:
  1. Differenzéierung – ass dës Kapazitéit d'Missioun, oder Installatioun?
  2. Time-to-Value × Käschte vun der Verzögerung (kuckt cost-of-delay-in-public-programmes.md)
  3. risikougepasste Gesamtbesëtzkäschten
```

## Rechebeispill

Eng lokal Verwaltung brauch en Dossiersystem fir d'Altersbetreiung. Kafen: SaaS zu £180.000/Joer, live no 4 Méint. Bauen: geschätzt £900.000 plus £150.000/Joer Ënnerhalt, live no 14 Méint.

```
Risikougepasste Baukäschten = 900.000 × 1,4 = £1.260.000
TCO op 5 Joer:
  Kafen  = 180.000 × 5 = £900.000
  Bauen  = 1.260.000 + 150.000 × 5 = £2.010.000

Verzögerungsterm: d'System vermeit £40.000/Mount un duebele Bewäertungen;
d'Bauen kënnt 10 Méint méi spéit wéi d'Kafen.
CoD = 10 × 40.000 = £400.000

Effektive Verglach: £900.000 (Kafen) géint £2.010.000 + £400.000 = £2.410.000 (Bauen)
```

Kafen gewënnt iwwer fënnef Joer em ongeféier £1,5 Millioun, an déi gréisste eenzel Linn nom Bauschätzung selwer ass d'Verzögerungskäschten, déi e reine Capex-Verglach ni opgedeckt hätt.

## Verbindung zur Softwareentwécklung

D'Disziplinne, déi direkt vun dëser Analys an d'Praxis vun der Ëmsetzung iwwerginn: **prior-baséiert Risikoupassung** – den Opschlag vu Mott MacDonald ass d'Softwareäquivalent vum Optimismus-Biais am Green Book, mechanesch ugewannt, sou datt Teamen fir Ausnamen dovun argumentéiere sollen, amplaz unzehuelen, hir Schätzung wier d'Ausnam; **Éierlechkeet beim Komparator** – d'Alternativ zum Bauen ass déi bescht verfügbar Kafoptioun, net „näischt", wat direkt un d'[Opportunitéitskäschte bei ëffentlechen Ausgabe](../opportunitéitskäschte-bei-ëffentlechen-ausgaben/) gebonne ass; an **éierleche TCO-Verglach** – all Bauvirschlag soll mat de voller [Gesamtbesëtzkäschte](../gesamtbesëtzkäschte-an-der-verwaltungs-it/) vun enger Kafoptioun vergläicht ginn, net mat hirem Lëschtepräis. Wou d'Bauen wierklech gewënnt, soll d'[Käschte vun der Verzögerung](../käschte-vun-der-verzögerung-bei-ëffentleche-programmer/) duerch déi zousätzlech Bauzäit explizit am Businesscase bepreist ginn, amplaz als net ausgeschwate Viraussetzung ze bleiwen, datt Zäit keng Roll spillt.

## Feelerquellen

- **De Lëschtepräis vum Vendor mat enger net risikougepasster Bauschätzung vergläichen**: dat flattéiert d'Bauen zweemol, eng Kéier bei de Käschten an eng Kéier beim Zäitplang.
- **Intern Aarbecht zu Null bepreisen**: d'Ingenieurszäit vum Staatsdéngscht gëtt als „gratis" behandelt, well se schonn am Departementsbudget fir Personal ass, wat hir richteg Opportunitéitskäschte géintiwwer aner Aarbecht verstoppt, déi dat Team kéint maachen.
- **Net bepreisten Lock-in an déi zwou Richtungen**: Ausstigs- an Dateportabilitéitskäschte beim Vendor si real, awer och de Bus-Factor vun enger Eegenentwécklung a seng Ofhängegkeet dovun, e klenge, schwéier ersetzbaren internen Team iwwer säi Liewen ze behalen.
- **Missiounsdifferenzéierung fir Installatioun behaapt**: „dat ass kärnwichteg fir eis" iwwer Integratiouns-Middleware oder en Dokumenteschapp behaapt – dat testen, ob e Bierger oder e Sachbearbechter jee mierkt, wat drënner leeft.

## Quellen

- Central Digital and Data Office, Technology Code of Practice. <https://www.gov.uk/guidance/the-technology-code-of-practice>
- GOV.UK Service Manual, deciding whether to build or buy technology. <https://www.gov.uk/service-manual>
- HM Treasury, Green Book supplementary guidance on optimism bias. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
