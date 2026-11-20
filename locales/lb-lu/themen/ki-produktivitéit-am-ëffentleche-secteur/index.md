# KI-Produktivitéit am ëffentleche Secteur

D'Metrike fir dat, wat KI-Ënnerstëtzung beim Programméiere wierklech mat der Ingenieursleeschtung mécht – Akzeptanzquoten vu Virschléi, Beschleunegung a kontrolléierte Studien, PR-Duerchsaz a Code-Retention – hunn eng wierklech widderspréchlech Beweislag, nach ier ëffentlech Contrainten derbäikommen: d'Dateklassifizéierung begrenzt, wéi eng Deeler vun engem Legacy-Bestand en KI-Tool iwwerhaapt beréiere däerf, Beschaffungszyklen bedeiten, datt den Tool, deen evaluéiert gëtt, dacks eng Modellgeneratioun hannert dem aktuelle Stand läit, a Sécherheetsfrigaberegelunge bestëmmen, wien en op wat benotze däerf.

## Firwat et wichteg ass

Déi zwou am meeschte zitéiert kontrolléiert Studien weisen an entgéintgesate Richtungen. Dem Peng et al. seng GitHub-Copilot-RCT vun 2023 huet fonnt, datt Entwéckler eng Greenfield-Aufgab fir en HTTP-Server mat Copilot 55,8 % méi séier fäerdeg bruecht hunn (1h11m géint 2h41m, n=95). Dem METR seng RCT vun 2025 huet fonnt, datt erfuere Open-Source-Entwéckler, déi un *hire eegene reife Repositories* geschafft hunn, mat de KI-Tools vun Ufank 2025 19 % méi lues waren, während si gegleeft hunn, ongeféier 20 % méi séier ze sinn. Béid Studie sinn solid; de Widdersproch ass dat Ergebnis – d'Effizienz bei Greenfield-Aufgaben léisst sech net op d'Wierksamkeet an engem reife Codebestand iwwerdroen, a vill vun der Ingenieursaarbecht an der Verwaltung ass Aarbecht um reife Codebestand, op Bestänn, déi méi al a méi eegenaarteg sinn wéi de mediane kommerzielle Repository. De Generative AI Framework for HMG vum Central Digital and Data Office (2024, <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>) stellt Prinzipie fir eng verantwortlech Adoptioun op, grad well dës Beweislag sech net einfach aus Vendor-Demonstratioune erbäinehme léisst; vun de Ministèrë gëtt erwaart, datt si Tools géint hir eege Ufuerderunge fir Datebehandlung a Sécherheet evaluéieren, ier se se ausrollen.

## D'Mathematik

```
Akzeptanzquote   = akzeptéiert Virschléi / gewisen Virschléi
Retentiounsquote = KI-Code, deen bis zum Merge iwwerlieft / akzeptéierte KI-Code
Beschleunegung   = (t_Kontroll − t_KI) / t_Kontroll  (NËMMEN aus kontrolléiertem Verglach)
Duerchsaz-Delta  = Δ gemergte PRs/Entwéckler/Woch

Ofdeckungsfaktor am ëffentleche Secteur:
  berechtegten Undeel vum Codebestand = LOC op Systemer, wou d'Klassifizéierung
    (OFFICIAL, OFFICIAL-SENSITIVE, SECRET) den Tool iwwerhaapt erlaabt

Wäertmodell = Entwéckler × berechtegt Ofdeckung × gespuert Zäit × voll berechente Saz × Auslaaschtung
             – all Terme brauch eng lokal Miessung, an den Ofdeckungsfaktor
             huet keen Äquivalent am Privatsecteur
```

## Rechebeispill

E Ministère testet en KI-Programméierassistent bei 300 Entwéckler, awer nëmmen Systemer mat der Klassifizéierung OFFICIAL däerfen den Tool notzen – 70 % vum Bestand no Zuel vun den zougewisen Entwéckler, wärend déi aner 30 % (Systemer mat méi héijer Klassifizéierung) komplett ausgeschloss sinn.

```
Berechtegt Entwéckler = 300 × 0,70 = 210

Pilot-Resultat: selwer gemellt gespuert Zäit 40 Min/Dag;
                gemoossene Spuerung op Aufgabeniveau 12 Min/Dag (0,2 h)
                – de METR-Perzeptiounsspalt, an der Praxis reproduzéiert

D'GEMOOSSEN Zuel bewäerten:
  210 × 0,2 h × 220 Deeg × £55/h voll berechent × 0,6 Auslaaschtung
  = 210 × 44 Stonnen × £55 × 0,6
  = 9.240 Stonnen × £55 × 0,6 ≈ £304.920/Joer Kapazitéit

Käschten: 210 lizenzéiert Plazen × £22/Mount × 12 ≈ £55.440/Joer

Netto-Kapazitéitsverhältnis ≈ 304.920 / 55.440 ≈ 5,5:1
```

Fanzéierbar bei ongeféier engem Drëttel vum selwer gemellten Notzen, an nëmmen nodeems d'Klassifizéierungsobergrenz ugewannt gouf – wann een all 300 Entwéckler op Basis vun der selwer gemellter Zuel lizenzéiert hätt, wieren souwuel déi berechtegt Populatioun wéi och déi richteg Spuerung iwwerschat ginn.

## Verbindung zur Softwareentwécklung

Dës Disziplinne loossen sech direkt iwwerdroen: **pragmatesch Tester** um eegene Codebestand vum Ministère a mat richtegen Tickets maachen, net mat Demonstratiounsaufgabe vum Vendor, well d'METR-Resultat speziell e Befund fir reife Codebestänn ass; **d'Akzeptanzquote als Proxy, net als Resultat** behandelen – héich Akzeptanz mat niddreger Retention ass dat Softwareäquivalent vun der Iwwerdiagnos; all Behaaptung zum Duerchsaz mat engem **Stabilitéitscheck** kombinéieren, well dem DORA säi Rapport 2025 fonnt huet, datt KI-Adoptioun den Duerchsaz erhéicht, awer d'Stabilitéit vun den Ännerungen verschlechtert, wat genee déi Nettonotz-Analys ass, fir déi [DORA-Metrike fir ëffentleche Wäert](../dora-metriken-fir-ëffentleche-wäert/) gebaut sinn; an éierlech sinn, datt KI-Tools de Retard bei Legacy-Bestänn mat vill [technescher Schold](../technesch-schold-als-erosioun-vum-ëffentleche-wäert/) méi grouss, net méi kleng maache kënnen, well d'Trainingsdate de COBOL-, 4GL- a spezifesche Mainframe-Code, dee a Verwaltungen heefeg ass, ënnerrepresentéieren, sou datt d'Qualitéit vun de Virschléi grad op deene Systemer, déi am meeschte Hëllef brauchen, dacks am schwaachsten ass. Dëst steet niewent der méi breeder Fro vum [Wäert vu KI an der Verwaltung](../wäert-vu-ki-an-der-verwaltung/) a sollt ënnert déiselwecht Contrainte vum [Wäert vun der Cybersécherheet am ëffentleche Secteur](../wäert-vun-der-cybersécherheet-am-ëffentleche-secteur/) falen, déi begrenzen, wou iergendeen Drëttanbieter-Tool Code oder Daten iwwerhaapt gesäit.

## Feelerquellen

- **Iwwerdroe vu Vendor-Studien**: Beschleunegungen aus Greenfield-RCTen op Legacy-Integratiounsaarbecht uwenden ass genee de Feeler, deen d'METR-Studie opgedeckt huet.
- **Selwerbeantwortung als Miessung**: eng Lück vun 20 Prozentpunkten tëscht Perzeptioun a Miessung ass de gréisste bekannte Biais an dëser Literatur, an hie bléist Businesscasen op, déi nëmmen op Entwécklerëmfroe bauen.
- **D'Klassifizéierungsobergrenz ignoréieren**: Lizenz- a Wäertmodeller, déi op der Gesamtzuel vun den Entwéckler amplaz op der berechtegter, no Klassifizéierung fräigeloster Deelmeng bauen, iwwerschätzen systematesch souwuel d'Käschteneffektivitéit wéi och déi erreechbar Ofdeckung.
- **Verspéidung duerch de Beschaffungszyklus**: d'Beschaffung vun Tools iwwer Rahmenvertrag kann dozou féieren, datt e Pilot eng Modellgeneratioun evaluéiert, déi 12–18 Méint hannert dem ass, wat beim voller Ausrollung ëffentlech verfügbar ass, sou datt d'Annahm iwwer d'Beschleunegung am urspréngleche Businesscase scho virum Go-live ofgelaf ass.

## Quellen

- Peng S, et al., "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot", 2023. <https://arxiv.org/abs/2302.06590>
- METR, "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity", 2025. <https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/>
- DORA, 2025 State of AI-assisted Software Development report. <https://dora.dev/dora-report-2025/>
- Central Digital and Data Office, Generative AI Framework for HMG, 2024. <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
