# Standard fir digital Servicer

De GOV.UK Service Standard ass d'Paart, duerch déi all digitale Service vun der Zentralregierung muss, ier en online goe kann: 14 publizéiert Punkten, déi um Enn vun all Liwwerphas vun engem onofhängege Panel bewäert ginn. Et ass de Mechanismus, dee „gutt ëffentlech Servicer opbauen“ vun engem Slogan an eng Bestanen-oder-Duerchfalen-Decisioun mat enger schrëftlecher Spuer verwandelt – an deen direkten Nofolger vum „digital by default“-Mandat vun der Government Digital Strategy vun 2012.

## Firwat et wichteg ass

Ier de Service Standard et gouf, war e Misserfolleg vun der Regierungs-IT dacks net ze gesinn, bis de Service gestart ass, a kaum engem Entscheedung zouzeuerdnen, op déi een hätt weise kënnen. D'Government Digital Strategy vun 2012 huet d'Ministère verflicht, déi 25 Transaktiounsservicer mam gréissten Volumen, déi de Bierger direkt notzen, als „digital by default“ nei ze gestalten, an huet dës Verflichtung mat engem Kontrollmechanismus ofgesichert: Servicer konnten net op GOV.UK goe, ouni eng Service-Bewäertung géint dee Moment 26 Punkten ëmfaassende Standard ze bestoen (2019 op 18 zesummegefaasst, an haut de 14-Punkten-Standard, dee gëllt a mat dräi Gruppen drun ass: d'Bedierfnesser vun de Benotzer verstoen, e gudde Service ubidden an déi richteg Technologie benotzen). Eng Service-Bewäertung ass e richtegt Evenement: e Panel vu GDS- oder Ministère-Bewerter préift d'Beweiser, stellt dem Team Froen an traff pro Punkt e Verdikt – bestanen, duerchgefall oder „net erfëllt“ –, dat op der Bewäertungssäit vum Service publizéiert gëtt. Eng duerchgefall Bewäertung verhënnert, datt de Service vun der private Beta an déi ëffentlech Beta oder vun der Beta an de Livebetrib iwwergeet – et ass e richtegt Paart, keng Iwwerpréiwung.

## D'Mathematik

De Service Standard ass e Kader, keng Formel, funktionéiert awer als Entscheedungsstruktur mat Etappe-Paarten:

```
Discovery  → Alpha-Bewäertung → Beta-Bewäertung   → Live-Bewäertung
             (net fir all      (obligatoresch ier   (obligatoresch ier
              Service Pflicht,  d'ëffentlech Beta    den „Beta“-Hiweis fält
              awer recommandéiert) start)            an den ale Kanal zou geet)

Pro Bewäertung: Beweiser + Interview mam Team → Panel-Verdikt pro Punkt
  Erfëllt / Deelweis erfëllt / Net erfëllt
Gesamtresultat: Bestanen / Bestanen mat Konditiounen / Duerchgefall (nei Bewäertung néideg)

Käschte vun engem Duerchfall ≈ Käschte vum nächste Sprint-Zyklus fir d'Nobesserung
                              + Verzögerung vun de [Spuren duerch Kanalverréckelung](../spuerunge-duerch-kanalverlagerung/),
                                déi de Service sollt liwweren
```

Punkt 10 („definéieren, wéi Succès aussgesäit, a Leeschtungsdaten publizéieren“) fiddert [d'Käschte pro Transaktioun](../käschte-pro-transaktioun/) an [d'Servicestandarden an Transaktiounsmetriken](../servicestandarden-an-transaktiounsmetriken/) – de Standard schreift d'Moossung vir, net nëmmen de Service.

## Rechebeispill

**Logementsufro-Service vun enger Gemeng**: e Gemengeteam kënnt zu senger Beta-Bewäertung mat engem Service, deen 11 vun 14 Punkten erfëllt, awer bei Punkt 5 („suergen, datt jiddereen de Service notze kann“) duerchfällt, well et keng assistéiert digital Optioun fir Ufroer ouni Internetzougang gëtt, an bei Punkt 9 duerchfällt, well perséinlech Daten am Klartext a Fehlerprotokoller vun der Ufro geloggt ginn.

```
Direkt Käschte vum Duerchfall:
  Neie Bewäertungstermin: 6–8 Wochen Waardezäit bis zum nächste fräie Panel
  Nobesserungs-Sprint: 2 Entwéckler × 3 Wochen × £550/Dag ≈ £34.650
  Design vum assistéierten digitale Kanal: 1 Fuerscher × 2 Wochen ≈ £5.000

Verzögerungskäschte: de Service sollt 40 % vun 18.000 Logementsfroen/Joer
vun Telefonsuruffer zu £8,50 op digital Transaktiounen zu £0,20 verréckelen
  = 7.200 × (£8,50 − £0,20) = £59.760/Joer entgaangen, proportional fir déi
    ~2 Méint Verzögerung ≈ £9.960

Gesamtkäschte vun der duerchgefallener Bewäertung ≈ £49.610
```

Et geet net ëm d'Genauegkeet vun der Rechnung – et geet doru, datt eng duerchgefall Bewäertung e richtege, berechenbare Präis huet, a genee dofir huet de Paart Zänn.

## Verbindung zur Softwareentwécklung

Fir Entwéckler liest sech de Standard sou vill wéi eng Architektur- a Liwwer-Checklëscht wéi en Politikdokument: Punkt 11 („déi richteg Tools an Technologie wielen“) a Punkt 12 („nei Quellcode ëffentlech maachen“) sinn direkt Entwécklungsentscheedungen, a Punkt 14 („e zouverlässege Service bedreiwen“) verlaangt déiselwecht SLOs a Virfallprozesser wéi all Produktiounssystem. Et ass de Rahmen, deen dës Grupp vun Themen ëmfaasst – [d'Käschte pro Transaktioun](../käschte-pro-transaktioun/) an [d'Spuren duerch Kanalverréckelung](../spuerunge-duerch-kanalverlagerung/) sinn dat, wat de Standard finanziell wëll schützen, [digital Inklusioun](../digital-inklusioun/) ass dat, wat Punkt 5 garantéiere soll, a Komponente vu [Government as a Platform](../government-as-a-platform/) (GOV.UK Notify, Pay, One Login) erfëllen Punkt 13 („oppen Standarden, gemeinsam Komponenten a Musteren notzen an dozou bäidroen“) gréisstendeels automatesch. Kuckt och [Build vs. Buy an der Regierung](../selwer-bauen-oder-kafen-an-der-verwaltung/), fir ze gesinn, wéi de Punkt „déi richteg Tools“ sech bei Beschaffungsentscheedungen auswierkt.

## Feelerquellen

- **D'Bewäertung als Kontrollkäschtchen um Starttag behandelen**: Teams, déi déi 14 Punkten eng Woch virun hirer Beta-Bewäertung fir d'éischt liesen, fale virauszegesinn duerch; de Standard soll Entscheedungen ab der Discovery forme, net se hannendrun auditéieren.
- **De Prototyp bewäerten, net de Service**: eng glat Demo ka bei enger Iwwerpréiwung duerchkommen, bei där déi richteg Versioun – mat assistéiertem digitalen Zougang an Virfallmanagement – duerchfale géif; d'Bewerter sollen no dëser Lück sichen, awer selbstzertifizéiert kleng Servicer iwwersprangen dat dacks.
- **Keng nei Bewäertung virum Skaléieren**: e Service, deen bei 5 % Ausrollung bewäert gouf, bleift net automatesch bei 100 % konform – Laascht, Feelernofro an Randfall-Benotzer änneren sech all.
- **De Service Standard mat engem Design-System verwiesselen**: Komponente vum GOV.UK Design System erfëllen e puer Punkten (Konsistenz, Barrièrefräiheet), awer de Standard dekt och Teamstruktur, agil Praxis an Dateethik – e schéin gestalteten Service ka bei de Punkten 2, 6 oder 9 trotzdem duerchfalen.

## Quellen

- GOV.UK Service Manual, Service Standard. <https://www.gov.uk/service-manual/service-standard>
- GOV.UK Service Manual, point 14: operate a reliable service. <https://www.gov.uk/service-manual/service-standard/point-14-operate-a-reliable-service>
- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
- GOV.UK Service Manual, service assessments. <https://www.gov.uk/service-manual/service-assessments>
