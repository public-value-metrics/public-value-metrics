# Digital Inklusioun

Digital Inklusioun ass d'Disziplin, sécherzestellen, datt „digital by default" net zu „digital only" gëtt – datt ëffentlech Servicer, déi ronderëm de bëllegste Kanal designt sinn, och fir d'Bierger funktionéieren, déi se ouni Hëllef net kënne oder net wëllen notzen. De GDS huet de spezifesche Liwwermechanismus, „assisted digital", als obligatoresch Ufuerderung fir all digitale Regierungsdéngscht geprägt, net als fakultativen Zousaz.

## Firwat et wichteg ass

D'Government Digital Strategy vun 2012 huet d'Ambitioun kloer gesat: digital Servicer sollen digital by default gebaut ginn, awer d'Strategie selwer huet unerkannt, datt ongeféier 10 % vun de brittesche Erwuessenen se ouni Hëllef net notze kéinten, an huet d'Ministèren engagéiert, assisted digital Ënnerstëtzung ze bidden – e vu Mënsche vermëttelte Wee, per Telefon, perséinlech oder iwwer en Zwëschenhändler – als Deel vum Déngscht, net als getrennte Fallback, dee spéider drun gepecht gëtt. Dëst Engagement ass elo de Punkt 5 vum [Digital Service Standard](../standard-fir-digital-servicer/), „make sure everyone can use the service". D'Dimensioun vun der weiderhinniger Exklusioun gëtt vum jäerleche UK Consumer Digital Index vu Lloyds Banking Group verfollegt: d'Editioun 2024 huet festgestallt, datt ongeféier 1,6 Millioune Leit am Vereenegte Kinnekräich offline bleiwen, an datt dës Grupp staark Richtung Leit vu 70–79 Joer, Leit mat engem Akommes ënner £35.000 a Leit, déi am Rentestand oder aarbechtslos sinn, verschéckt ass – genee d'Populatioun, déi am meeschte vun den ëffentleche Servicer ofhängeg ass, déi nei designt ginn. Dee selwechte Rapport huet festgestallt, datt nëmmen 48 % vun de Beschäftegten am Vereenegte Kinnekräich all 20 Aufgaben vum Essential-Digital-Skills-Framework kéinte erfëllen, wat heescht, datt Exklusioun keng binär Konnektivitéit ass, mä e Spektrum vu Kompetenz, Selbstvertrauen a Vertrauen, dee eng einfach Metrik „huet Breetband" komplett verpasst.

## D'Mathematik

Digital Inklusioun ass e Framework an en Equity-Check amplaz vun enger eenzeger Formel, mä si kombinéiert sech mat der quantitativer Wäertbewäertung iwwer [Verdeelungsgewiichtung](../verdeelungsgewiichtung/):

```
Naive Wäert vun der Kanalverlagerung:
  Wäert = verlagert Volumen × (Käschte_al − Käschte_digital)     [kuckt channel-shift-savings]

Inklusiounsugepasste Wäert:
  Wäert = (verlagert Volumen × ongewiicht Spuerung)
        − (ausgeschloss Benotzer × Käschte vun der assisted-digital Bereetstellung)
        − (Upassung vun der Verdeelungsgewiichtung fir Schued un ausgeschlossene
           Gruppen, déi den Zougang verléieren oder eng méi schlecht Déngschtqualitéit erliewen)

Assisted digital ass net déi Restkäschte vum Versoen – et ass e designte Kanal
mat senge [Käschte pro Transaktioun](../käschte-pro-transaktioun/), typesch
vill méi héich pro Transaktioun wéi digital Self-Service, awer normalerweis ëmmer
nach bëlleger wéi de Legacy-Kanal, deen en deelweis ersetzt.
```

## Rechebeispill

**Nationale Sozialleeschtungsdéngscht am Stil vum Universal Credit**: 2,5 Millioune Ufroen/Joer, bei deenen no der Planungsannahm vun der Government Digital Strategy fir geschat 10 % vun de Reklamanten assisted digital Ënnerstëtzung gebraucht gëtt.

```
Kohort, ausgeschloss/assisted digital = 2.500.000 × 10 % = 250.000 Ufroen/Joer

Käschte vum assisted-digital Kanal (Telefon + perséinlech Ënnerstëtzung,
besat, fir mat Vulnerabilitéit a Komplexitéit émzegoen) ≈ £9,50/Ufro
  = 250.000 × £9,50 = £2.375.000/Joer

Käschte fir digital Self-Service bei de restleche 90 % ≈ £0,40/Ufro
  = 2.250.000 × £0,40 = £900.000/Joer

Gemëschte Käschte pro Transaktioun = (2.375.000 + 900.000) / 2.500.000
  = £1,31/Ufro

En Design, dee assisted digital iwwersprang, fir méi niddreg Schlagzuele bei de
Käschte pro Transaktioun ze erreechen (z. B. £0,40 gemëscht, d'250.000 ausgeschloss
Reklamanten ignoréiert), eliminéiert dës £2,375 Mio. net – hie
wandelt se an net ugeruff Usprëch, Appellen an nofolgend Nofro no Krisendéngschter ëm,
déi an engem ganz aneren Budget landen.
```

## Verbindung zur Softwareentwécklung

Assisted digital ass e designte Kanal, wat heescht, datt en Interfaces, SLAs an Instrumentatioun huet wéi all aneren: en telefonbaséierten Tool fir Sachbearbechter, e Portal fir Zwëschenhändler fir Citizens Advice oder eng lokal Verwaltung, oder e perséinleche Kiosk-Flow. Et als Nogedanken ze behandelen – eng Telefonsnummer am Klengdréckten amplaz vun engem Kanal, deen vun der Discovery u berécksiichtegt gëtt – ass de gängegste Wee, wéi Servicer de Punkt 5 vum [Digital Service Standard](../standard-fir-digital-servicer/) bei der Bewäertung net bestoen. Digital Inklusioun ass d'Equity-Lens op all aner Thema an dëser Grupp: si begrenzt, wéi aggressiv [Spuerunge duerch Kanalverlagerung](../spuerunge-duerch-kanalverlagerung/) realiséiert kënne ginn, si ass eng Linn, déi éierlech an d'[Käschte pro Transaktioun](../käschte-pro-transaktioun/) muss, an si ass déi direkt Uwendung vun der [Verdeelungsgewiichtung](../verdeelungsgewiichtung/) op e Kontext vun digitale Servicer – eng Spuerung, déi dispropportionéiert bei Leit ukënnt, déi schonn digital a wirtschaftlech ausgeschloss sinn, soll erofgewiicht ginn, net behandelt ginn, wéi wann se gläichwäerteg zu enger Spuerung wier, déi gläichméisseg iwwer d'Populatioun verdeelt ass.

## Feelerquellen

- **„Digital by default" als „digital only" gelies**: d'Telefonslinn oder de Schalter zoumaachen, soubal d'digital Notzung eng Schwell erreecht, ouni ze verifizéieren, datt déi verbleiwend Kohort eng wierklech notzbar Alternativ huet.
- **Inklusioun mat binärer Konnektivitéit moossen**: „huet Breetband" oder „besëtzt e Smartphone" ass e schlechte Proxy fir d'Fäegkeet, eng spezifesch Transaktioun ofzeschléissen – de Spalt bei Essential Digital Skills (nëmmen 48 % vun de Beschäftegten am Vereenegte Kinnekräich schléisst all 20 Aufgaben of, laut Lloyds 2024) weist, datt Kompetenz a Selbstvertrauen esou wichteg sinn wéi den Zougang.
- **Assisted digital als Ofrundungsfeeler bepreisen**: et als kleng Reservelinn ze budgetéieren amplaz als richtege Kanal mat senge [Käschte pro Transaktioun](../käschte-pro-transaktioun/), an dann iwwerrascht ze sinn, wann et beim Start ënnerfinanzéiert an ënnerbesat ass.
- **Nëmmen erfollegräich digital Ofschlëss befroen**: Zefriddenheets- an Usability-Fuerschung, déi komplett am Déngscht lafe gelooss gëtt, verpasst d'Leit, déi ni esou wäit komm sinn, wat genee d'Populatioun ass, déi d'Aarbecht vun der digitaler Inklusioun soll schützen.

## Quellen

- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
- GOV.UK Service Manual, service standard, point 5: make sure everyone can use the service. <https://www.gov.uk/service-manual/service-standard/point-5-make-sure-everyone-can-use-the-service>
- Lloyds Banking Group, Consumer Digital Index. <https://www.lloydsbank.com/banking-with-us/whats-happening/consumer-digital-index.html>
- Ofcom, digital exclusion review. <https://www.ofcom.org.uk/>
