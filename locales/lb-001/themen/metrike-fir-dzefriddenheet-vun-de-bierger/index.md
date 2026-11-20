# Metrike fir d'Zefriddenheet vun de Bierger

Metrike fir d'Zefriddenheet vun de Bierger moossen, wéi d'Leit hir direkt Erfarung mat engem ëffentlechen Déngscht bewäerten – ënnerscheet vum Vertrauen an d'Institutiounen am Allgemengen, an ënnerscheet dovun, ob den Déngscht tatsächlech e gutt Resultat erreecht huet. Een Déngscht ka gär gemaach ginn an ineffektiv sinn, oder effektiv an net gär gemaach; de Spalt tëscht deenen zwee ass selwer eng diagnostesch Informatioun, déi en Ëmsetzungsteam am A behale soll.

## Firwat et wichteg ass

D'Zefriddenheet gëtt op zwou verschiddenen Héichte gemooss, déi routinéiert vermëscht ginn. Um Niveau vum Déngscht verlaangen déi elo agestallte britesch Performance Platform an de GOV.UK Service Manual vun haut eng Zefriddenheetsëmfro pro Déngscht (typesch eng Fënnef-Punkte-Skala vu „ganz zefridden" bis „ganz onzefridden", um Moment vun der Transaktioun erhuewen) als ee vu véier obligatoreschen Service-KPIen – kuckt [Service-Standarden a Transaktiounsmetriken](../servicestandarden-an-transaktiounsmetriken/). Um institutionelle Niveau moosst d'britesch Civil Service People Survey all Joer d'Engagement an d'Erfarung vun de Beschäftegten a jidder Departement vun der Zentralregierung, an getrennt dovun befroot dem OECD säi Programm „Trust in Government" ëffentlecht Vertrauen an déi nationale Regierung a senge Memberstaaten a verfollegt e laangfristege Muster vu Réckgang an Erhuelung, dat staark vu Kris geprägt ass (déi Finanzkris vun 2008 an d'COVID-19-Pandemie hunn allen zwee scharf, siichtbar Beweegunge bei de OECD-Vertrauenszuele produzéiert). De Grond, firwat Ingenieuren, déi Servicer fir Bierger bauen, Zefriddenheet a Resultat auserneenhale mussen, ass e bekannte Feelermodus am Servicedesign: en eleganten, einfach ze benotzenden digitale Formulaire fir eng Sozialleeschtung kann ganz héich Zefriddenheet kréien, während déi zougrondeliggend Politik – Berechtegungsreegelen, Bearbechtungsréckstänn, Leeschtungshéichten – de Reklamant net besser stellt. D'Zefriddenheet moosst d'Interface; si moosst net de Wäert, deen hannendrun geliwwert gëtt.

## D'Mathematik

```
Nettozefriddenheet = % zefridden (oder ganz zefridden) − % onzefridden (oder ganz onzefridden)
                    (neutral/keng Meenung gëtt aus beiden Terme ausgeschloss, awer
                    an der Antwortbasis fir d'Berechnung vun all Prozentsaz matgezielt)

Spalt Zefriddenheet-Resultat = Zefriddenheetsscore − Scorer fir d'Erreeche vum Resultat
                    (béid normaliséiert op 0–100; e groussen, positive Spalt signaliséiert
                    en Déngscht, dee sech „gutt ufillt", awer substantiell ënnerliwwert)

Vertrauensindex (OECD-Stil) = % vun den Ëmfroteilnehmer, déi mat „jo" op
                    „hutt Dir Vertrauen an [déi nationale Regierung]?" äntweren,
                    als Zäitreih verfollegt, typesch opgeschlësselt no
                    Alter, Akommes a Bildung
```

## Rechebeispill

**E-Rechnungsdéngscht fir d'Gemengesteier vun enger lokaler Verwaltung**: eng Zefriddenheetsëmfro um Moment vun der erfollegräiche Transaktioun weist 2.400 Antwerten: 1.650 zefridden/ganz zefridden, 250 onzefridden/ganz onzefridden, 500 neutral.

```
Nettozefriddenheet = (1.650/2.400 × 100) − (250/2.400 × 100)
                  = 68,75 % − 10,42 %
                  = +58,3 Nettozefriddenheet
```

Dat gesäit isoléiert staark aus. Mä d'Ëmfro gëtt just de Benotzer gewisen, déi d'Transaktioun *erfollegräich* ofschléissen – e bekannte Miessbiais (kuckt d'Stolpersteng ënnen). Wann een se mat der Ofschlossquote aus [Service-Standarden a Transaktiounsmetriken](../servicestandarden-an-transaktiounsmetriken/) kombinéiert, weist sech, datt d'Ofschlossquote nëmme 71 % ass, wat heescht:

```
D'richteg Zefriddenheet vun der Populatioun ass fir déi 29 %, déi de Parcours
ofgebrach hunn, net gemooss – plausibel déi onzefriddenst Grupp, well den Ofbroch
selwer e staarkt negatiivt Signal ass, dat d'Ëmfro ni erfaasst.
```

**Illustratioun um nationalen Niveau (Struktur vun enger Vertrauensserie am OECD-Stil)**: d'Vertrauen an déi nationale Regierung gëtt am Joer 1 mat 42 % gemellt, fält am Joer 2 (e Krisejoer) op 34 % an erhëlt sech am Joer 3 op 39 % – eng Entwécklung, déi typesch ass fir d'Muster vu Schock a deelweiser Erhuelung, dat d'OECD a senge Memberstaaten no grousse Kriste dokumentéiert.

## Verbindung zur Softwareentwécklung

Zefriddenheetsëmfroen u jidder bedeitende Ausstigspunkt vun engem Benotzerparcours instrumentéieren, net nëmmen beim erfollegräiche Ofschloss – de heefegste Ingenieursfeeler an dësem Beräich, dee roueg eng Zefriddenheetsmetrik an eng Eitelkeetsmetrik mat Survivorship-Biais ëmwandelt. Wou méiglech, de Zefriddenheetsscore mat enger Metrik fir Ofschloss oder Resultat um selwechten Dashboard zesummestellen, sou datt en Team net feieren kann, datt d'Zefriddenheet klëmmt, während d'Ofschlossquote roueg fält (kuckt [Käschte pro Transaktioun](../käschte-pro-transaktioun/) an [digital Inklusioun](../digital-inklusioun/) fir ze gesinn, wien iwwerhaapt aus der Stichprouf vun der digitaler Zefriddenheet erausfält – net-digital an assistéiert digital Benotzer sinn an den Ëmfroen am Déngscht systematesch ënnerrepresentéiert). Zefriddenheets- a Vertrauensdate flossen och direkt an de Legitimitéitsast vum [strategeschen Dräieck vum Moore](../ëffentleche-wäert/) an a gehéieren op d'Perspektive „Client" a „Legitimitéit" vun enger [Scorecard fir ëffentleche Wäert](../public-value-scorecard/) – kuckt [Metrike fir Vertrauen a Legitimitéit](../kennzuele-fir-vertrauen-a-legitimitéit/) fir dat institutionellt Géigestéck vun dëser Metrik um Niveau vum Déngscht.

## Feelerquellen

- **Survivorship-Biais bei Ëmfroen um Ofschlossmoment**: Benotzer, déi e Parcours ofbriechen, gesinn d'Ëmfro ni, sou datt en héije Zefriddenheetsscore am Déngscht niewent enger niddreger Ofschlossquote an enger grousser onsiichtbarer Populatioun vun onzefriddene Net-Ofschlëss bestoe ka.
- **Zefriddenheet als Proxy fir Resultat behandelen**: eng gutt designt Interface fir eng schlecht designt Politik kritt gutt Zefriddenheet a schlecht Resultat-Scorer – ëmmer béid mellen, ni eng als Stellvertrieder fir déi aner.
- **Kleng, net representativ Stichprouwen mat fauscher Präzisioun gemellt**: e Zefriddenheetsscore vun e puer honnert selbstselektéierten Teilnehmer, op eng Dezimal gemellt, implizéiert eng Sécherheet, déi d'Stichprouwegréisst net ënnerstëtze kann.
- **Demografesch Opschlësselung ignoréieren**: nationale Vertrauens- a Zefriddenheetszuelen, déi net no Alter, Akommes, Behënnerung oder digitalem Zougang opgedeelt sinn, kënnen däitlech ofwäichend Erfarunge vu Gruppe verstoppen – e Muster, dat d'Verëffentlechunge vun der OECD zu „Trust in Government" selwer ausdrécklech opschlësselen.

## Quellen

- OECD, "Trust in Government." <https://www.oecd.org/en/topics/trust-in-government.html>
- UK Cabinet Office, "Civil Service People Survey" results.
  <https://www.gov.uk/government/collections/civil-service-people-survey-results>
- GOV.UK Service Manual, "Measuring Success." <https://www.gov.uk/service-manual/measuring-success>
