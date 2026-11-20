# Wäert vun oppenen Daten

De Wäert vun oppenen Daten ass de Problem, ze schätzen, wat Regierungs- an ëffentlech Daten wäert sinn, wa se kee Präis hunn: si ginn net verkaaft, et gëtt also keng Recettelinn, an trotzdem erzeegt hir Verëffentlechung (Wiederdaten, Fahrpläng vum ëffentleche Verkéier, Grenze vu Postleitzuelen, Firmeregister) nohaltbar wirtschaftlech a sozial Aktivitéit. Et ass wichteg, se gutt ze bewäerten, well souwuel „et kascht näischt, se ze verëffentlechen“ wéi och „si sinn näischt wäert“ falsch sinn, an e Softwareingenieur, deen entscheet, ob en API oder en Dataset opgemaach gëtt, e bessert Argument brauch wéi deen een oder deen aneren.

## Firwat et wichteg ass

Déi am meeschte zitéiert Top-down-Schätzung kënnt vum Rapport 2013 vum McKinsey Global Institute „Open data: Unlocking innovation and performance with liquid information“, deen de potenziellen jäerleche Wäert vun oppenen Daten a siwen Beräicher – Bildung, Transport, Konsumgidder, Stroum, Ueleg a Gas, Gesondheetswiesen a Konsumentefinanzen – op $3 Billiounen bis $5 Billioune pro Joer weltwäit beziffert huet, iwwer Mechanismen wéi méi Transparenz, eng effizient Ofstëmmung vun Offer an Nofro an nei Produkter a Servicer, déi op de Daten opbauen. Dës Zuel ass eng Szenarie-Schätzung, keen gemoossenen Outturn, a gëtt routinéiert falsch zitéiert, wéi wann et Recette wier, déi d'Regierung direkt abuche kéint, wärend de Wäert zum gréissten Deel bei Drëttpartnere ukënnt – Betriber, Fuerscher, Bierger –, déi d'Daten notzen, wat exakt de Sënn dovun ass, se opzemaachen amplaz se ze verkafen. Dem UK säi Open Data Institute, 2012 vum Sir Tim Berners-Lee a Sir Nigel Shadbolt matgegrënnt, huet zënterhir eng Rei méi granulär Bottom-up-Fallstudien opgebaut – Secteur fir Secteur, Dataset fir Dataset –, déi fir e richtege Business-Case vill nëtzlecher si wéi dem McKinsey seng Schlagzeilenzuel, well se de Mechanismus vun der Wäertschafung weisen, net nëmmen hir aggregéiert Gréisst.

## D'Mathematik

Oppen Daten hunn de Marché kee Präis, dofir ersetzen Bewäertungsmethoden en; dräi Usätz kommen ëmmer erëm vir, a keen ass eleng genuch:

```
1. Method vun de vermeidene Käschten / Ersatzkäschten:
   Wäert ≈ wat d'Notzer bezuelt hätten, fir déi equivalent Daten
   selwer ze produzéieren oder ze lizenzéieren — eng Ënnergrenz,
   ignoréiert de Wäert vun Notzungen, déi de ursprénglechen
   Produzent ni erwaart huet

2. Marché-Analogie- / Downstream-Aktivitéits-Method:
   Wäert ≈ Recette oder Aspueren, déi Betriber/Servicer erzeegen,
   déi op de Daten opbauen (z. B. Navi-Apps, déi op oppene
   Kaarten- a Verkéiersdaten opbauen) — erfaasst reell wirtschaftlech Aktivitéit,
   ass awer schwéier propper un d'Verëffentlechung vun den Daten
   selwer zouzeschreiwen (kuckt Additionalitéit an Mataufnahmeeffekt)

3. Kontingent-/Stated-Preference-Method:
   Wäert ≈ wat d'Notzer soen, datt se bezuele wéilen, oder d'Zäit,
   déi se soen, datt et hinne spuert — kuckt Bewäertung duerch erkläert
   Präferenzen fir déi allgemeng Method a seng Biaisen

Keng vun dësen ergëtt eng sou propper Zuel wéi e Marchépräis; glafwürdeg
Business-Cases fir oppen Daten triangulééieren iwwer zwou oder méi
Methoden a si kloer, wéi ee Mechanismus d'Aarbecht mécht.
```

## Rechebeispill

**Illustrativ Verëffentlechung vu nationale Kaarten-/Adressdaten** (Methodologie no ODI-Fallstudien, Zuele illustrativ fir de Maßstab, deen esou Studien typesch fannen):

```
Schätzung vun de vermeidene Käschten:
  Betriber, déi soss equivalent Adressofgläichsdaten kommerziell
  lizenzéiere missten, bei geschätzte Duerchschnëttslizenzkäschte vu £4 000/
  Joer, bei geschätzten 15 000 KMUen, déi elo dat gratis oppent Dataset notzen
  = 15 000 × £4 000 = £60 000 000/Joer u vermeidene Lizenzkäschte eleng

Schätzung vun der Downstream-Aktivitéit (spekulativer, brauch e Kontrafaktum):
  Nei Produkter fir Routing a Logistik, déi op de oppenen Daten opbauen
  an déi et ouni se net géif ginn oder däitlech méi schlecht wieren —
  verlaangt e Vergläich mam Kontrafaktum, dass d'Daten zou bleiwen oder
  kommerziell lizenzéiert ginn (Analyse vum Kontrafaktum), well en Deel
  vun där Aktivitéit souwisou op bezuelten Daten zu engem méi héije Präis
  stattfonne géif, wat Mataufnahmeeffekt am Sënn vu „duerch d'Opmaache
  geschaaffene Wäert“ ass

E verdeedegungsfäegen Business-Case mellt d'Zuel vun de vermeidene Käschten
als solid Ënnergrenz a behandelt d'Zuel vun der Downstream-Aktivitéit als
Szenarie fir d'Uewergrenz, net als Fakt.
```

## Verbindung zur Softwareentwécklung

Fir Ingenieuren ass d'praktesch Wäertfro bei oppenen Daten normalerweis méi enk wéi d'nationale Schlagzeilenzuelen: erhéicht d'Opmaache vun dësem spezifeschen API oder Dataset (amplaz et hannert enger Partnervereinbarung ze halen) d'Wiederverwendung genuch, fir déi lafend Käschte fir d'Dokumentéieren, Versionéieren an Ënnerstëtzen als ëffentlech Interface ze rechtfäerdegen? Déi Ennerhaltungskäschte si reell an dat Géigenstéck zur Ekonomie vum eemol bauen an dacks erëmbenotzen vun der [Regierung als Plattform](../government-as-a-platform/) – déi zwee Themen si Cousinen, dat eent iwwer gedeelte Code an Infrastruktur, dat anert iwwer gedeelt Daten. All Behaaptung iwwer de Wäert vun oppenen Daten sollt géint [Additionalitéit an Mataufnahmeeffekt](../additionalitéit-a-matnahmeeffekt/) gepréift ginn, ier se an e Business-Case kënnt: Aktivitéit, déi souwisou op kommerziell lizenzéierten Daten stattfonne wier, ass net Wäert, deen d'*Opmaache* geschaf huet.

## Feelerquellen

- **D'McKinsey-Zuel vun $3–5 Billioune als UK-spezifesch oder als Undeel vun dësem Dataset zitéieren**: et ass eng globale Szenarie-Schätzung vu 2013 iwwer verschidde Secteuren – se als präzise Multiplikator fir een eenzegt nationalt Dataset ze benotzen, stellt falsch duer, wat d'Zuel ass.
- **Kee Kontrafaktum**: den Verdéngscht fir all Downstream-Wirtschaftsaktivitéit op oppenen Daten ze behaapten, ouni ze froen, wéi vill dovun souwisou op bezuelten oder lizenzéierten Daten zu engem méi héije Präis stattfonne wier (kuckt [Additionalitéit an Mataufnahmeeffekt](../additionalitéit-a-matnahmeeffekt/) an [Analyse vum Kontrafaktum](../kontrafaktesch-analys/)).
- **Produktiounskäschte mat geschafftem Wäert verwiesselen**: en Dataset, dat deier ze sammele war, ass net automatesch wäertvoll ze verëffentlechen, an e bëllegt ass net automatesch manner wäertvoll – de Wäert follegt der Downstream-Notzung, net de Upstream-Käschten.
- **Déi lafend Ennerhaltungskäschte vum „Oppen“ ignoréieren**: en eemolegen CSV-Auszuch ze publizéieren ass net dee selwechten Engagement wéi en dokumentéierten, versionéierten, ënnerstëtzten oppenen API ze bedreiwen – dee leschten no der Launch-Ukënnegung ënnerzefinanzéieren ass e heefege Feelermuster.

## Quellen

- McKinsey Global Institute, "Open data: Unlocking innovation and performance with liquid information" (2013). <https://www.mckinsey.com/business-functions/mckinsey-digital/our-insights/open-data-unlocking-innovation-and-performance-with-liquid-information>
- Open Data Institute. <https://theodi.org/>
