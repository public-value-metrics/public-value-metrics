# Käschte pro Transaktioun

D'Käschte pro Transaktioun sinn déi zentral Eenheetsökonomie-Metrik fir en digitalen Déngscht vun der Verwaltung: Gesamtkäschte fir e Kanal ze bedreiwen, gedeelt duerch d'Zuel vun den Transaktiounen, déi doriwwer ofgeschloss goufen. Et war déi Fliedschzuel op der alter GOV.UK Performance Platform, an et ass d'Zuel, déi eng Dekade vun der Investitioun an „digital by default" finanzéiert huet – grad dofir ass et och d'Metrik, déi am meeschte dozou nei ass, manipuléiert ze ginn.

## Firwat et wichteg ass

Dem Cabinet Office säin Digital Efficiency Report vun 2012 huet de Kanalkäschtenverglach a Begrëffer gestallt, déi hänke bliwwen sinn: digital Transaktioune goufe fonnt, ongeféier 20 Mol manner ze kaschten wéi per Telefon an ongeféier 50 Mol manner wéi perséinlech, mat illustrative Zuele vun der lokaler Verwaltung vu ronn £0,15 pro Web-Transaktioun géint £2,83 per Telefon a £8,62 perséinlech. Dee Verglach gouf zur Rechtfäerdegung fir de Redesign vun de 25 Exempelservicer, déi an der Government Digital Strategy genannt sinn, a fir all Businesscase vun engem Ministère, deen zënter dunn Spuerunge duerch Kanalverlagerung zitéiert huet. D'Zuel ass wierklech nëtzlech als Signal fir d'Gréisstenuerdnung, awer d'Verhältnis hänkt ganz dovun of, wat op all Säit gezielt gëtt: faire Telefonskanalkäschte enthalen d'Personal vum Call-Center, de Telefonievertrag, d'Formatioun an d'Immobilie; faire digital Käschte enthalen Hosting, lafend Gehälter vum Produktteam, Zäit vum Support-Desk fir gescheitert Parcoursen an den assistéierte digitale Kanal, deen de Punkt 5 vum [Digital Service Standard](../standard-fir-digital-servicer/) verlaangt. Wann een genuch dovun op der digitaler Säit erausstreecht, gesäit all Déngscht bëlleg aus.

## D'Mathematik

```
Käschte pro Transaktioun = Gesamtkäschte vum Kanal, zougewisen / ofgeschloss Transaktiounen

Déi zougewisen Gesamtkäschte vum Kanal sollten enthalen:
  + Hosting an Infrastruktur
  + Käschte fir Produkt-/Ingenieurs-/Support-Team (amortiséiert)
  + Käschte fir Inhalt a Servicedesign (amortiséiert)
  + Käschte fir assistéiert digital / Barrièrefräiheet-Ënnerstëtzung
  + Käschte vun der Feelernofro (Benotzer, déi digital scheitere a op d'Telefon zréckfalen)
  − eemoleg Baukäschte gi iwwer déi erwaart Liewensdauer vum Déngscht amortiséiert,
    net komplett am éischte Joer verbucht

Den heefegen Rechnungstrick:
  „Grenzkäschte pro Transaktioun" (nëmmen Hosting, wann et eng Kéier gebaut ass)
  gi zitéiert, wéi wann et „duerchschnëttlech Käschte pro Transaktioun" wieren
  (Gesamtkäschte, dorënner dat Team, dat weiderbaut an dat bedreift).
  Déi zwee kënnen sech bei engem Déngscht mat engem groussen, aktiven Liwwerteam
  em de Faktor 10 oder méi ënnerscheeden.
```

## Rechebeispill

**Déngscht fir d'Erneierung vun der Autossteier**: 4 Millioune Transaktiounen/Joer.

```
Zuel nëmme mat de Grenzkäschten (den Trick):
  Hosting + Bezuelungsofwécklung eleng = £180.000/Joer
  Käschte pro Transaktioun = 180.000 / 4.000.000 = £0,045
  → Schlagzuel, déi an engem Businesscase zitéiert gëtt

Voll berechent Zuel (déi éierlech):
  Hosting + Bezuelung                    £180.000
  Produkt-/Ingenieursteam (8 VZÄ)        £720.000
  Support-Desk (gescheitert/gefrote Transaktiounen)   £310.000
  Assistéiert digital Telefonslinn       £140.000
  Total                                  £1.350.000
  Käschte pro Transaktioun = 1.350.000 / 4.000.000 = £0,3375

Déi voll berechent Zuel ass ëmmer nach ongeféier 8 Mol méi bëlleg wéi de Komparator
fir de Telefonskanal vun £2,83 aus dem Digital Efficiency Report – eng reell
a verteidegbar Spuerung –, awer 7,5 Mol méi héich wéi d'Zuel mat nëmmen de Grenzkäschten,
déi an der Ofkierzungsversioun zitéiert gëtt. Béid Zuele si „richteg"; nëmmen eng ass
mat de Käschte vum Telefonskanal vergläichbar, géint deen se gesat gëtt.
```

## Verbindung zur Softwareentwécklung

D'Käschte pro Transaktioun sinn de Punkt, wou Architekturentscheedunge zu enger Finanzzuel ginn: en Déngscht, dee propper automatesch skaléiert a wéineg manuell Interventioun brauch, dréckt dës Zuel mat der Zäit erof; een, dee héich Volumme vu Support-Tickets duerch verwirrend Feelerzoustänn generéiert, dréckt se erop, egal wéi effizient d'Hosting ass. Et ass d'natierlech Begleetmetrik zum Punkt 10 vum [Digital Service Standard](../standard-fir-digital-servicer/) („definéieren, wéi Erfolleg ausgesäit, a Leeschtungsdate verëffentlechen") an zu de [Service-Standarden a Transaktiounsmetriken](../servicestandarden-an-transaktiounsmetriken/), déi de méi komplette KPI-Set ofstécht, an deen dës Zuel gehéiert. Si fléisst och direkt an d'Berechnunge vun de [Spuerunge duerch Kanalverlagerung](../spuerunge-duerch-kanalverlagerung/) an a sollt mat de [Gesamtbesëtzkäschten an der IT vun der Verwaltung](../gesamtbesëtzkäschte-an-der-verwaltungs-it/) ofgeglach ginn, sou datt Overhead vun der Plattform a vu gedeelten Servicer net roueg erausfällt.

## Feelerquellen

- **Grenzkäschte als Duerchschnëttskäschte verkleet**: nëmmen d'Hosting-Käschte zitéieren, wann en Déngscht eng Kéier gebaut ass, an dat lafend Team ausléissen, dat en ënnerhält, iteréiert an ënnerstëtzt – kuckt d'Beispillrechnung uewen.
- **Käschte vum assistéierten Digital ausschléissen**: e Kanal ass net „digital by default"-konform, a seng richteg Käschte sinn net erfaasst, wann de Fallback fir Telefon/Pabeier, dee vun der [digitaler Inklusioun](../digital-inklusioun/) verlaangt gëtt, getrennt bepreist oder ignoréiert gëtt.
- **Feelernofro ignoréieren**: Transaktiounen, déi digital ufänken a scheitere, an trotzdem en Uruff oder e Pabeierformulaire generéieren, sinn eng Käscht vum digitale Kanal, net vum Kanal, deen de Feeler opfänkt.
- **Transaktioune vu verschiddener Komplexitéit tëscht Kanäl vergläichen**: Telefonsuriff behandele dispropportionéiert déi schwiereg Fäll (méi Ofhängeger, Feelerkorrektur, vulnerabel Ufroesteller); en duerchschnëttleche Telefonspräis mat engem duerchschnëttlechen digitale Präis ze vergläichen, iwwerschätzt d'Verhältnis, ausser de Mix vun den Transaktioune gëtt ugepasst.

## Quellen

- Cabinet Office, Digital Efficiency Report (2012). <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- GOV.UK Service Manual, service standard, point 10: define what success looks like. <https://www.gov.uk/service-manual/service-standard/point-10-define-success-publish-performance-data>
- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
