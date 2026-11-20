# Flowmetriken an der Regierungsliwwerung

Flowmetriken – dem Little säi Gesetz, Limitte fir Aarbecht a Gang (WIP) a Flow-Effizienz – beschreiwen, wéi séier Aarbecht duerch e System mat limitéierter Kapazitéit fléisst. E Sprint-Board ass esou e System; eng Schlaang vun Ufroe fir Leeschtungen, e Register vu Baugenehmegungen oder e Réckstand bei Visumsdossieren ass genee déiselwecht Mathematik an enger anerer Uniform.

## Firwat et wichteg ass

Dossiere vun der Regierung si Warteschlaangesystemer, a Warteschlaangesystemer befollegen Warteschlaangegesetzer, egal ob een se mësst oder net. Gesetzlech Entscheedungsfristen maachen dat explizit: ënner dem Town and Country Planning-Regime hunn déi meescht kleng Baugenehmegungsufroen e gesetzlecht Entscheedungszil vun 8 Wochen a grouss Ufroen vun 13 Wochen – eng Duerchlafzäit-Verpflichtung, déi direkt am Gesetz verankert ass. De Réckstand bei de Asyldossieren vum Home Office, vum National Audit Office an dem Home Affairs Select Committee ëmmer erëm ënnersicht, ass e gutt dokumentéierte Fall vun engem ëffentleche System, wou d'Aarbecht a Gang laang méi séier gewuess ass wéi den Duerchsaz, wat d'Duerchlafzäiten wäit iwwer all gesetzlech oder Serviceerwaardung gedriwwen huet. Flowmetriken ginn Entwéckler a Sachbearbechter-Manager e gemeinsamt, quantitativt Vokabulär fir genee dës Feelerform, amplaz et bei engem qualitative „Réckstandsproblem“ ze loossen.

## D'Mathematik

```
Little's Gesetz:  WIP = Duerchsaz × Duerchlafzäit
              →   Duerchlafzäit = WIP / Duerchsaz

Flow-Effizienz = aktiv (Beréierungs-)Zäit / gesamt Duerchlafzäit   (Vacanti)

Effekt vun enger WIP-Limit: bei festem Duerchsaz hallefert eng
Hallefung vum WIP ongeféier d'duerchschnëttlech Duerchlafzäit
(Little's Gesetz ëmgestallt) – den Hiewel, deen ouni méi Personal
zur Verfügung steet.
```

Kuckt [DORA-Metriken fir ëffentleche Wäert](../dora-metriken-fir-ëffentleche-wäert/) fir déiselwecht Mathematik, ugewannt op Software-Deployment-Pipelines amplaz op Dossieren.

## Rechebeispill

**Planungsdépartement vun enger Gemeng**: 400 Ufroen sinn zu all Moment oppen (WIP), d'Team erleedegt 50 Ufroen/Woch (Duerchsaz).

```
Duerchlafzäit = WIP / Duerchsaz = 400 / 50 = 8 Wochen
```

Dat läit genee um gesetzlechen 8-Wochen-Zil fir kleng Ufroen – ouni Spillraum, wat heescht, datt all Schwankung an der Nofro oder an der Äntwertzäit vun de Konsultéierten d'Entscheedungen iwwer d'gesetzlech Fris dréit.

**Flow-Effizienz**: vun dëse 8 Wochen (56 Kalennerdeeg) huet eng Ufro typescherweis ongeféier 6 Stonnen tatsächlech Bearbechtungszäit duerch e Sachbearbechter.

```
Flow-Effizienz = 6 Stonnen / (56 Deeg × 8 Aarbechtsstonnen/Dag)
               = 6 / 448 ≈ 1,3 %
```

Dem Vacanti säi Benchmark fir Softwareteams setzt déi typesch Flow-Effizienz bei 15–20 %; Regierungsdossieren, mat villen Iwwerdroungen u gesetzlech Konsultéiert a ëffentleche Konsultatiounsfënsteren, leien dacks eng Gréisstenuerdnung drënner. Déi 98,7 % „Waardezäit“ sinn dat, wou déi aacht Wochen tatsächlech higinn – net an der Kapazitéit vun de Sachbearbechter.

**Interventioun mat enger WIP-Limit**: d'Zuel vun den oppenen Ufroen pro Sachbearbechter op 15 amplaz vun ongebonnen 25 ze deckelen (bei konstantem Duerchsaz) setzt de WIP bei engem Team vu 16 Leit vun 400 op ongeféier 240 erof:

```
Nei Duerchlafzäit = 240 / 50 = 4,8 Wochen
```

Eng bal Hallefung vun der Duerchlafzäit duerch eng Politikännerung, net duerch méi Personal – dee selwechten Hiewel, deen Liwwerteams am DORA-Stil zéien, wa se de Sprint-WIP deckelen.

## Verbindung zur Softwareentwécklung

Flowmetriken sinn déi gemeinsam Sprooch tëscht dem Kanban-Board vun engem Liwwerteam an der Dossiersfläch, fir déi et Software baut: d'Schlaang vun engem Sachbearbechter an eng Pull-Request-Schlaang ginn allebéid vum Little sengem Gesetz regéiert, an allebéid verfeelen hir Duerchlafzäit-Ziler op déiselwecht Manéier – ze vill WIP am Verhältnis zum Duerchsaz. Dat ass direkt wichteg fir [Käschte vun der Verzögerung an ëffentleche Programmer](../käschte-vun-der-verzögerung-bei-ëffentleche-programmer/): Duerchlafzäit × CoD sinn d'Pounden, déi zu all Moment an der Schlaang sëtzen, a fir [Servicestandarden an Transaktiounsmetriken](../servicestandarden-an-transaktiounsmetriken/), wou e publizéiert Zil fir d'Bearbechtungszäit eng Duerchlafzäit-Verpflichtung ass, déi nëmme Flowmetriken diagnostizéiere kënnen, wann se verpasst gëtt. D'Software vun engem Dossierssystem soll WIP an Duerchlafzäit als operativ Metrike vun éischter Klass weisen, net se an engem Fallmanagementsystem verstoppen, dat keen ofgefrot.

## Feelerquellen

- **WIP-Limitte setzen, ouni de richtege Engpass ze behiewen**: wann d'Aschränkung d'Äntwertzäit vun engem externe gesetzleche Konsultéierten ass, verréckelt d'Deckele vum WIP vun de Sachbearbechter d'Schlaang just no uewen, amplaz se ze verkierzen.
- **Flow-Effizienz als Zil behandelen, dat sech manipuléiere léisst**: déi 1,3 % aktiv Zäit ze beschleunegen beweegt d'Duerchlafzäit kaum; den Hiewel läit bal ëmmer an de Waardezoustänn, wat normalerweis Prozessneigestaltung heescht, net méi séier Sachbearbechter.
- **Variabilitéit ignoréieren**: dem Little säi Gesetz beschreift Duerchschnëtter; en Dossiersbestand mat héijer Variatioun an der Nofro brauch Pufferkapazitéit, net just eng méi enk WIP-Limit, soss ginn gesetzlech Fristen um volatile Rand weiderhin verpasst, och wann den Duerchschnëtt sech verbessert.
- **WIP inkonsequent moossen**: e Fall, dee am Referenzsystem „oppe“ ass, awer tatsächlech op eng Drëtt Partei waart a stoppt, ass nach ëmmer WIP; en auszeschléissen schéint d'Zuelen, ouni d'Realitéit fir de Bierger ze änneren.

## Quellen

- Vacanti D, *Actionable Agile Metrics for Predictability: An Introduction*, Actionable Agile Press, 2015.
- Reinertsen DG, *The Principles of Product Development Flow*, Celeritas Publishing, 2009.
- Ministry of Housing, Communities and Local Government, planning application statutory timescales. <https://www.gov.uk/guidance/making-an-application>
- National Audit Office, reports on Home Office asylum casework and accommodation. <https://www.nao.org.uk/>
