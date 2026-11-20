# Spuerunge duerch Kanalverlagerung (Channel Shift)

Spuerunge duerch Kanalverlagerung sinn déi prognostizéiert Käschtereduktioun doduerch, datt Transaktiounsvolumen aus deieren Kanäl – Telefon, perséinlech Schalteren, Pabeierpost – an e bëllege digitale Self-Service verréckelt gëtt. Et ass de finanzielle Motor vun „digital by default" an och dee Posten am Businesscase, deen am meeschte falsch läit, well d'Annahm, op där hie bastelt – datt Offline-Kanäl schrumpfen, wann d'digital Notzung klëmmt – nëmmen heiansdo stëmmt.

## Firwat et wichteg ass

D'Rechnung gesäit onbestreideg aus, wann een d'Zuele fir [Käschte pro Transaktioun](../käschte-pro-transaktioun/) aus dem Digital Efficiency Report hëlt: eng Millioun Transaktioune vun engem perséinleche Besuch zu £8,62 op eng digital zu £0,15 verlagert, an d'Spuerung läit bei iwwer £8 Milliounen. Mä eng Spuerung gëtt nëmmen zu fräigesaten Cash fir eng Ëmverdeelung, wann déi *fix Kapazitéit* vum schrumpfende Kanal wierklech ofgebaut gëtt – d'Plaze vum Call-Center, d'Schalterpersonal, d'Minutte vum Telefonvertrag – an Digitalprogrammer vu lokale Verwaltunge fonnt hunn ëmmer erëm, datt de Gesamtkontaktvolumen net mam digitale Gebrauch erofgeet. Fuerschung aus digitalen Transformatiounsprogrammer vu lokale Verwaltungen an vu Stellen wéi Socitm an der Local Government Association huet e widderhuelent Muster dokumentéiert: digital Kanäl zéien wierklech nei Kontakter un (Bierger, déi net ugeruff oder net virbäikomm wieren, maachen et elo, well et méi einfach ass), an en däitlechen Undeel vun „digitalen" Transaktioune scheitert hallef a mécht trotzdem en Uruff néideg – sou fält de Telefonsvolumen vill manner, wéi de Prozentsaz vun der digitaler Notzung virgeet, heiansdo absolut guer net, och wann säin *Undeel* um Gesamtkontakt zréckgeet.

## D'Mathematik

```
Brutto-Spuerung duerch Kanalverlagerung = verlagert Volumen × (Käschte_aalde_Kanal − Käschte_digital)

Netto-Spuerung (realiséiert) = Brutto-Spuerung
                       − nei/Schatten-Nofro, déi de méi einfache Kanal schaaft
                       − Käschte vun der Feelernofro (digital Ofbrecher, déi
                         trotzdem en Uruff oder e Schalterbesuch ausléisen)
                       − Käschte vun der net ofgebauter fixer Kapazitéit (e Call-
                         Center ka Personal nëmmen a diskrete Portioune ofbauen;
                         e Volumenréckgang vu 15 % erlaabt selten, 15 % vum
                         Personal ze kierzen)

Realiséierungsschwell: Spuerunge si just verbuchbar, wann de Volumen ënner dee
Niveau fält, dee den ale Kanal an der nächst klenger diskreter Kapazitéitsstuf
besetze ka (z. B. eng ganz Schicht, ee ganze Schalter, eng ganz
vertraglech Personalstuf manner)
```

## Rechebeispill

**Servicer fir d'Erneierung vum Handicap-Parkausweis vun engem Grofschaftsrot (County Council)**: 60.000 Erneierungen/Joer, virdrun zu 100 % telefonesch/op Pabeier zu £6,40 pro Transaktioun. En neien digitalen Déngscht start a erreecht bannent engem Joer 65 % digital Notzung, zu £0,30 pro digital Transaktioun.

```
Naiv (brutto) Berechnung vun der Spuerung:
  39.000 verlagert × (£6,40 − £0,30) = £237.900/Joer

Wat tatsächlech geschitt ass, no den Daten vum Kontaktzentrum vum Rot:
  Telefonsvolumen ass vun 60.000/Joer op 46.000/Joer gefall (−23 %, net −65 %)
  well: 9.000 digital Parcoure gescheitert sinn an en Nouruff gemaach hunn
        (Leckage duerch Feelernofro), an 4.000 Leit, déi virdrun guer
        net erneiert hunn, et elo maachen, nodeems si et online einfach fonnt hunn
        (Schatten-Nofro – eng wierklech Verbesserung vum Zougang, awer keng
        Spuerung)

  Dat telefonescht Kontaktzentrum ass a Stufe vu 8.000 Uriff/VZÄ besat;
  e Réckgang vu 14.000 Uriff (60.000 → 46.000) mécht 1,75 VZÄ fräi, an der
  Praxis op 1 VZÄ ofgerënnt, dat wierklech ëmgesat gouf = £34.000/Joer

Realiséiert Spuerung = £34.000/Joer plus déi vermidde digital Kanal-Bau-/Lafkäschten
  op 39.000 Transaktiounen ≈ £34.000 + (39.000 × £0,30 digital Käschte
  schonn agerechent) – e Bruchdeel vun der Schlagzuel vun £237.900,
  och wann den Déngscht fir d'Benotzer onbestreideg besser ass.
```

## Verbindung zur Softwareentwécklung

D'Lektioun fir d'Ingenieuren ass, datt Spuerunge duerch Kanalverlagerung duerch *operativ* Entscheedungen realiséiert ginn (Dienstplang, Ofbau, Nei-Verhandlung vu Kontrakter), net doduerch, datt d'Software ausgeliwwert gëtt – en Team ka jidde Punkt vum [Digital Service Standard](../standard-fir-digital-servicer/) erreechen a trotzdem null Nettospuerung liwweren, wann keen déi fix Kapazitéit vum ale Kanal ofbaut. D'Feelernofro ze instrumentéieren (wou am digitale Parcours d'Benotzer ofspréngen an wat si duerno maachen) ass e léisbare Funnel-Analyse-Problem an dat eenzegt Ding mat dem gréissten Hebel, dat en Ingenieursteam maache kann, fir de Spuerungscase ze schützen; et ass och déi direkt Verbindung zu de [Käschte pro Transaktioun](../käschte-pro-transaktioun/), déi d'Feelernofro roueg opbléist. Kuckt [Realiséierung vun Notzen](../realiséierung-vun-notzen/) fir déi méi breet Disziplin, ze kontrolléieren, ob d'Spuerunge vun engem Businesscase wierklech ukommen, an [digital Inklusioun](../digital-inklusioun/) fir ze gesinn, firwat de Offline-Kanal normalerweis net komplett ofgeschaaft ka ginn an net soll ginn.

## Feelerquellen

- **1:1-Substitutioun vun de Kanäl unhuelen**: déi digital Notzung als direkt Subtraktioun vum Volumen vum Telefon/Schalter modelléieren, an d'Schatten-Nofro an d'Leckage duerch Feelernofro ignoréieren, déi an der Fuerschung zur Kanalverlagerung bei lokale Verwaltunge dokumentéiert sinn.
- **Brutto-Spuerunge verbuchen, ier ofgebaut gëtt**: d'Spuerung am Businesscase an dem Joer zielen, an deem d'Notzung klëmmt, net an dem Joer (wann iwwerhaapt), an deem d'Kapazitéit vum ale Kanal tatsächlech gekierzt gëtt.
- **De Stufecharakter vun de Personalkäschten ignoréieren**: e Volumenréckgang vun 20 % gëtt selten an e Käschtenréckgang vun 20 % ëmgerechent, well Kontaktzentren a Schalteren a diskrete Stufe besat sinn, net kontinuéierlech.
- **Schatten-Nofro als Offall behandelen**: nei Kontakter vu fréier ausgeschlossene oder fréier ofgeschreckte Benotzer sinn eng richteg Erhéijung vum [ëffentleche Wäert](../ëffentleche-wäert/), kee Modelléierungsfeeler – se solle als Zougangsresultat gemellt ginn, net als Rauschen ofgezunn.

## Quellen

- Cabinet Office, Digital Efficiency Report (2012). <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- Local Government Association, digital transformation and channel shift resources. <https://www.local.gov.uk/our-support/efficiency-and-income-generation/digital-transformation>
- Socitm, local public services digital insight research. <https://www.socitm.net/>
