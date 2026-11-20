# Government as a Platform (Regierung als Plattform)

Government as a Platform ass d'Strategie, gemeinsam, wiederbenotzbar Komponenten – e Benoriichtegungsservice, e Bezuelservice, en Identitéitsservice – eemol zentral opzebauen, sou datt honnerte vun eenzele Regierungsservicer se notzen, amplaz datt jiddereen seng eege baut. Si ëmformuléiert déi ëffentlech digital Infrastruktur als Problem vun der Plattformökonomie: de Wäert läit net an enger eenzeger Integratioun, e läit doran, datt d'Grenzkäschte vum *nächsten* Team, dat se adoptéiert, géint null ginn.

## Firwat et wichteg ass

De GDS huet d'Strategie formell a senger Publikatioun „Government as a Platform“ vun 2015 duergeluecht a gesot, d'Regierung hätt déiselwecht Fäegkeeten – Bezuelungen unhuelen, Benotzer benoriichtegen, Identitéit verifizéieren, Adresssich – getrennt a Service no Service gebaut, jiddereen mat senger eegener Beschaffung, Sécherheetsbewäertung a lafender Supportlaascht. D'Alternativ war eng kleng Zuel vu gemeinsamen Plattformen, eemol op héijem Niveau gebaut a iwwerall erëmbenotzt: GOV.UK Notify fir E-Mailen, SMS a Bréiwer ze schécken, GOV.UK Pay fir Online-Bezuelungen unzehuelen, a GOV.UK One Login (Nofolger vum fréiere Programm GOV.UK Verify) fir d'Identitéitsverifikatioun. D'Gréisst, déi dës Plattformen erreecht hunn, ass dee kloersten Beweis, datt d'Strategie geklappt huet: GOV.UK Pay huet iwwer £10 Milliarden u Transaktiounen iwwer ongeféier 1.800 eenzel Servicer verschafft – a wou et ongeféier véier Joer gebraucht huet, fir déi éischt £1 Milliard ze verschaffen, verschafft et haut dat selwecht an ongeféier fënnef Méint –, wärend GOV.UK Notify méi wéi 9 Milliarde Messagen am Numm vu méi wéi 1.500 Regierungsorganisatioune geschéckt huet. All een vun dëse Servicer, déi se benotzt hunn, huet sech gespuert, e eegene Bezuelgateway oder Messageria-Pipeline ze bauen, ze sécheren an z'ennerhalen.

## D'Mathematik

```
Opbaukäschte pro Service (ouni Plattform) = N Servicer × Käschte fir een
  Bezuel-/Benoriichtegungs-/Identitéitssystem ze bauen,
  sécherheetszebewäerten a ze bedreiwen

Plattformkäschten = fix Opbaukäschte vun der Plattform
                  + Grenzkäschte pro adoptéierende Service (Integratioun,
                    Konfiguratioun, lafenden Support duerch d'Plattformteam)

D'Widderbenotzung rentéiert sech, soubal:
  Opbaukäschte vun der Plattform < N × (Opbaukäschte pro Service − Grenz-
  käschte vun der Integratioun)

Bei enger reife Plattform kommen d'Grenzkäschte pro zousätzlechen Adoptant
bei déi Transaktiouns-/Messagegebühr eleng – déi fix Käschte ginn iwwer
de ganze Regierungsbestand ofgeschriwwen, net iwwer de Budget vun engem
Ministère, dofir ginn GaaP-Komponenten normalerweis zentral finanzéiert,
amplaz fir fréi Adoptanten mat voller Käschtendeckung berechent ze ginn.
```

## Rechebeispill

**Gemeng, déi GOV.UK Pay adoptéiert amplaz e Bezuelgateway ze bauen**:

```
Schätzung fir selwer bauen:
  PCI-DSS-Konformitéitsaarbecht + Integratioun + lafend Ennerhalung
  ≈ £85.000 Opbau + £22.000/Joer Ennerhalung

Adoptioun vu GOV.UK Pay:
  Integratiounsopwand ≈ £12.000 (Entwécklerzäit)
  Transaktiounsgebühren: Kaartebezuelungen vun der Regierung u Bierger gi
  typescherweis mat engem klenge Prozentsaz + enger fixer Gebühr pro
  Transaktioun berechent, ouni separat PCI-DSS-Laascht fir d'Gemeng
  ≈ £12.000 eemol, lafend Käschte variabel mam Volumen, net fix

Spueren am éischte Joer ≈ £85.000 − £12.000 = £73.000, ier déi
vermiddene £22.000/Joer Ennerhalung an dat vermidde Konformitéitsrisiko
vum Späicheren vu Kaartendaten an engem vun der Gemeng bedriwwene System
iwwerhaapt matgezielt ginn – dës zweet Kategorie ass de Sécherheetswäert,
deen am public-sector-cybersecurity-value behandelt gëtt.
```

Wann een déi £73.000 iwwer déi ongeféier 1.800 Servicer skaléiert, déi elo GOV.UK Pay notzen, leie vermidde Opbaukäschte fir d'ganz Regierung an de Honnerte vu Millioune – d'Plattformökonomie, net eng eenzel Integratioun, ass dat, wou de Wäert vun der Strategie tatsächlech läit.

## Verbindung zur Softwareentwécklung

Government as a Platform ass en direkten Argument fir [Build vs. Buy an der Regierung](../selwer-bauen-oder-kafen-an-der-verwaltung/): wann eng gemeinsam, bewäert, gutt bedriwwe Komponent existéiert, ass et ganz selten déi besser [Wäert-fir-Geld](../preis-leeschtungs-verhältnis/)-Wiel, eng maßgeschneidert Äquivalent ze bauen, an et fällt bei Punkt 13 vum [Standard fir digital Servicer](../standard-fir-digital-servicer/) („oppen Standarden, gemeinsam Komponenten a Musteren notzen an dozou bäidroen“) bal per Definitioun duerch. Et ännert och d'Form vun den [Gesamtkäschte vum Besëtz bei der Regierungs-IT](../gesamtbesëtzkäschte-an-der-verwaltungs-it/): d'Adoptioun vun enger Plattform ersetzt eng grouss Kapital- an Ennerhaltslinn duerch méi kleng, notzungsofhängeg Betribskäschten, déi méi einfach ze prognostizéieren a méi einfach ze streiche sinn, wann e Service ausser Betrib geholl gëtt. Dem Widderbenotze vu Komponenten säi Cousin ass [Wäert vun oppenen Daten](../wäert-vun-oppenen-daten/) – béid sinn Strategië fir eppes, dat d'Regierung eemol produzéiert, als gemeinsam Infrastruktur ze behandelen amplaz als Aktiv vun engem Ministère.

## Feelerquellen

- **Schattenneibau**: Teams bauen roueg hir eege Bezuel- oder Benoriichtegungsintegratioun, well den Onboarding-Prozess vun der Plattform méi lues ass, wéi et selwer ze maachen – e Problem vun der Gouvernance-Reibung, net vun der Technologie, an et ënnergréft roueg d'Wiederbenotzungsökonomie, vun där déi ganz Strategie hänkt.
- **D'Plattformteam am Verhältnis zum geschafenen Wäert ennerfinanzéieren**: de Wäert fält bei de notzenden Ministèren un, wärend d'Käschte beim Plattformteam leien, wat e chronescht Risiko vun Ennerinvestitioun schaaft, ausser d'Finanzéierung ass zentraliséiert a geschützt – eng Versioun vun der Tragödie vun der Allmend.
- **Den Erfolleg vun der Plattform nëmmen un der Notzung moossen**: Adoptiounszuelen (ugeschloss Servicer, geschéckte Messagen) sinn e fréien Indikator, kee Beweis vum Wäert; den echten Test ass d'Rechnung vun de vermiddene Opbaukäschte a vermidde Risiken uewen.
- **„Plattform“ mat „Monolith“ gläichsetzen**: GaaP-Komponente si erfollegräich, well all eng Saach gutt mécht, mat enger schmueler, stabiler Schnëttstell – onverbonne Fäegkeeten an eng „Plattform“ zesummenzebündelen, schaaft dat Problem vum maßgeschneiderten Opbau op engem aneren Niveau nei.

## Quellen

- Government Digital Service, Government as a Platform. <https://www.gov.uk/government/publications/government-as-a-platform>
- GOV.UK Notify. <https://www.notifications.service.gov.uk/>
- Government Digital Service blog, "GOV.UK Pay at 10: how it started and how it's going". <https://gds.blog.gov.uk/2026/09/02/gov-uk-pay-at-10-how-it-started-and-how-its-going/>
