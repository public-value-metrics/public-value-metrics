# DORA-Metriken fir ëffentleche Wäert

D'DORA-Metriken (DevOps Research and Assessment) – Deployment-Frequenz, Duerchlafzäit vun Ännerungen, Feelerquote bei Ännerungen a Zäit bis zur Widderhierstellung vum Service, plus Zouverlässegkeet als fënneft – sinn déi am beschte validéiert Benchmarke fir d'Liwwerleeschtung an der Softwarebranche. An d'Sprooch vun der Rechenschaftspflicht am ëffentleche Secteur iwwersat ass jidderee vun hinnen e direkte Proxy dofir, wéi séier a wéi sécher ëffentleche Wäert bei de Bierger ukënnt.

## Firwat et wichteg ass

D'Fuerschung vun DORA iwwer en Dezennium, all Joer als *Accelerate State of DevOps Report* publizéiert (Method vu Forsgren, Humble a Kim, haut vu Google Cloud gefouert), gruppéiert Teams a Spëtzen-, héich, mëttel a niddereg Performer. Spëtzenteams deployen op Ufro, brauchen manner wéi en Dag vum Commit bis an d'Produktioun, hunn ongeféier bei 5 % vun den Ännerungen e Feeler a si bannent manner wéi enger Stonn erëm hiergestallt; niddereg Performer deployen monatlech oder méi seelen, brauche Méint, hunn bei ronn 40 % vun den Ännerungen e Feeler a brauche Wochen, fir sech ze erhuelen. An der Regierung sinn dat keng Eitelkeetsmetriken vun den Entwéckler: de Service Standard vum Government Digital Service verlaangt, datt Teams „dacks iteréieren a verbesseren“ a séier op d'Bedierfnes vun de Benotzer reagéiere kënnen, an Ministèren, déi net sécher an dacks deployen kënnen, sinn strukturell net fäeg, dësen Standard ze erfëllen, egal wat hir User Research seet. Déi eege Aarbecht vum Cabinet Office zur digitaler Effizienz huet festgestallt, datt et deier ass, e Bierger vun enger gescheiterter oder lueser digitaler Transaktioun an e Telefons- oder Pabeierkanal ze drécken – dem GDS säin Digital Efficiency Report vun 2012 huet geschat, datt verschidden digital Transaktioune bis zu 20p kaschten, géigeniwwer Telefons- oder perséinleche Kontakter bis zu £8,62 – sou datt eng Feelerquote bei Ännerungen an engem Service fir de Public net nëmmen Entwécklungszäit kascht, mee richteg Pounden um Budget vum Kontaktzenter belaascht (kuckt [Spuren duerch Kanalverréckelung](../spuerunge-duerch-kanalverlagerung/)).

## D'Mathematik

```
Deployment-Frequenz    = Deployments an d'Produktioun / Zäit
Duerchlafzäit          = t(Deploy) − t(Commit), Median
Feelerquote            = gescheitert Ännerungen / all Ännerungen × 100
Zäit bis Widderhierstellung (MTTR) = t(hiergestallt) − t(Ausfall), Median
Zouverlässegkeet       = SLO-Erfëllung (Verfügbarkeet, Latenz, Korrektheet)
```

Iwwersetzunge an ëffentleche Wäert:

```
Duerchlafzäit  → Wochen an der Pipeline × CoD, kuckt cost-of-delay-in-public-programmes
Feelerquote    → Quote vu Virfäll fir de Bierger: CFR × Käschte pro ëmgeleete
                 Uruff am Kontaktzenter (oder pro gescheiterter gesetzlecher Transaktioun)
Erhuelungszäit → Schued duerch Serviceausfall: MTTR × (blockéiert Ufroen/Dossieren
                 pro Stonn) × Folgekäschte oder Wuelbefannsverloscht pro Eenheet
Zouverlässegkeet → Notzenofzuch: e Service mat 99 % Verfügbarkeet liwwert
                 ≈ 0,99 vu sengem modelléierten Notzen – d'Liwwerungsanalogie
                 zum Defizit bei der Notzung oder der Konformitéit
```

## Rechebeispill

D'Team vum Portal fir Ufroe vu Leeschtungen vun enger Gemeng, virun an no enger Investitioun an d'Liwwer-Engineering:

```
                    Virdrun     Duerno
Deployments         monatlech   wöchentlech
Duerchlafzäit       8 Wochen    5 Deeg
CFR                 30 %        10 %
MTTR                3 Deeg      4 Stonnen
```

D'Team liwwert ongeféier 25 Verbesserungen/Joer, duerchschnëttleche Wäert £8.000/Woch ([Käschte vun der Verzögerung](../käschte-vun-der-verzögerung-bei-ëffentleche-programmer/)). D'Duerchlafzäit ëm ongeféier 7,3 Wochen ze reduzéieren, zitt de Notzenstroum vun all Verbesserung no vir: 25 × 7,3 × 8.000 ≈ **£1.460.000/Joer** u Wäert, dee méi fréi geliwwert gëtt. Bei der Feelerquote: 25 × (0,30 − 0,10) = 5 manner gescheitert Ännerungen/Joer; all gescheitert Ännerung um ëffentleche Portal leet typescherweis geschat 2.000 Bierger op de Telefonskanal em, zu £8,62 géigeniwwer 20p, e Nettokäschte vun ongeféier £8,42 × 2.000 ≈ £16.840 pro Virfall, sou datt d'Vermeide vu 5 Virfäll ≈ **£84.200/Joer** spuert. D'Investitioun an d'Liwwer-Engineering gëtt an där selwechter Währung bewäert wéi all aner ëffentleche Wäertfall.

## Beispill, Fortsetzung: Zouverlässegkeet

Wann d'Portal mat 97 % Verfügbarkeet leeft amplaz mat engem Zil vun 99,5 %, an all Prozentpunkt Ausfallzäit als 2 % vun den Ufroen duerch Ofbroch modelléiert gëtt, liwwert de Service ongeféier 0,975 vu sengem modelléierten Notzen vun £2 Mio./Joer – en Notzenofzuch vun £50.000/Joer, deen en eenfachen Uptime-Dashboard ni opdeckt.

## Verbindung zur Softwareentwécklung

DORA-Metrike sinn d'operativ Metrike vun engem ëffentleche Service a verschiddenen Hiem: d'Duerchlafzäit entsprécht [Servicestandarden an Transaktiounsmetriken](../servicestandarden-an-transaktiounsmetriken/); d'Feelerquote entsprécht Nobesserungs- a Reklamatiounsquoten; d'MTTR entsprécht dem, wéi laang e gesetzleche Service fir d'Ufroer net verfügbar ass. Verbesserungstechniken iwwerdroe sech a béid Richtungen, well béid Warteschlaangesystemer ënner Rechenschaftsbedéngunge sinn – kuckt [Flowmetriken an der Regierungsliwwerung](../flowmetriken-an-der-regierungsliwwerung/) fir d'Warteschlaangemathematik, déi dohinner läit. Notéiert och dem DORA seng Erkenntnis vun 2025, datt AI-Adoptioun mat méi héijem Duerchsaz korreléiert, awer mat *méi schlechter* Stabilitéit – eng Interventioun mat Wierksamkeet a Nebenwierkungen, genee déi Nettonotzenanalyse, déi dat Thema [AI-Produktivitéit am ëffentleche Secteur](../ki-produktivitéit-am-ëffentleche-secteur/) vun dëser Grupp duerchgeet.

## Feelerquellen

- **Metrikmanipulatioun**: Deployment-Zuelen mat leere Releases opblose, oder Hotfixes aus der Feelerquote bei Ännerungen ausschléissen. Definéiert d'Evenementer sou präzis, wéi e gesetzleche Servicestandard eng „erfollegräich Transaktioun“ definéiert.
- **Ranglëschte tëscht Ministèren**: DORA-Cluster vergläiche Liwwerpraktiken, net Servicer mat ënnerschiddleche Risikoprofiller; e Steierzuelungssystem, dat als „héich“ agestuft ass, ka déi richteg Haltung sinn, wou „Spëtzt“ bei de Assurance-Ufuerderungen leichtsënneg wier.
- **Nëmmen eng Metrik optimiséieren**: Geschwindegkeet ouni Feelerquote ass de klassesche Kompromiss tëscht Duerchsaz an Instabilitéit – mellt all véier zesummen, net als eenzege Score.

## Quellen

- DORA research and the annual *Accelerate State of DevOps Report*. <https://dora.dev/>
- Forsgren N, Humble J, Kim G, *Accelerate: The Science of Lean Software and DevOps*, IT Revolution Press, 2018.
- Cabinet Office, Digital Efficiency Report, 2012.
- DORA, 2025 State of AI-assisted Software Development report. <https://dora.dev/dora-report-2025/>
