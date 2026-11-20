# Logikmodell

E Logikmodell ass en lineaart Diagramm, dat Inputen, Aktivitéiten, Outputen, Outcomes an Impakt vun engem
Programm matenee verbënnt. Et gëtt vu lénks no riets als Rechenschaftskette gelies: Ressourcë ginn eran,
Aktivitéite fannen statt, Outputen entstinn, d'Situatioun vun de Begënschtegte verännert sech (Outcomes),
an den Impakt weist sech op engem méi breeden oder méi laangen Zäitraum. Et ass déi Standardstruktur,
géint déi Finanzéierer an Auditoren erwaarden, datt e Programm berichtbar ass, an dat zukunftsorientéiert
Géigenstéck zu enger réckwäerts opgebauter [Verännerungstheorie](../wierkungstheorie/).

## Firwat et wichteg ass

D'Magenta Book vum HM Treasury (Finanzministère vum Vereenegte Kinnekräich) schreift d'Logikmodell als
néidegt Element vum Evaluatiounsdesign vun engem Programm vir, an Finanzéierer wéi den National Lottery
Community Fund baue hir Ufro- a Berichtsvirlagen genee op dëser Kette mat fënnef Kolonnen op. Säi Wäert
läit doran, datt et e Programm zwéngt, an engem eenzege Diagram festzehalen, wat et ausgëtt, wat et doomat
mécht, wat et produzéiert an – entscheedend – wat sech doduerch soll änneren, an zwar méi konkret, wéi
e Paragraph Prosa et dacks erlaabt. E Logikmodell mat enger gefëllter Input- an Aktivitéitskolonn, mee
mat enger eidel oder vague Outcome-Kolonn, erkennt een op den éischte Bléck – a genee dofir froen
Finanzéierer dernach.

## D'Mathematik

D'Logikmodell ass eng strukturell Kette a keng Formel:

```
Inputen         Aktivitéiten      Outputen            Outcomes              Impakt
(agesate        (wat doméit       (direkt, zielbar    (Verännerung bei      (laangfristeg,
 Ressourcen)     gemaach gëtt)     Produkter)          de Begënschtegten)    Verännerung op Niveau
                                                                             vun der Bevëlkerung
                                                                             oder vum System)
```

All Kolonn soll méi spezifesch si wéi déi virdrun: Inputen sinn dat, wat een ausgëtt, Aktivitéite sinn dat,
wat een mécht, Outputen sinn dat, wat geliwwert gëtt, onofhängeg vum Effekt, Outcomes sinn dat, wat sech
doduerch ännert – d'Ënnerscheedung gëtt am Detail an [Outcomes vs. Outputen](../outcomes-vs-outputen-resultater-a-leeschtungen-ënnerscheeden/)
behandelt – an Impakt ass déi dauerhaft, dacks nëmmen deelweis zouzeschreiwend Verännerung op laang Sicht.

## Rechebeispill

**Gemeng-/Lokalbehörd (digitale Schëlleberoutungsdingscht)**:

- Inputen: £180 000 Joresbudget, 4,0 Vollzäitäquivalenter u Beroder, e System fir d'Fallverwaltung.
- Aktivitéiten: Sensibiliséierungssessiounen, individuell Schëlleberoutungsrendez-vousen.
- Outputen: 900 Rendez-vousen duerchgefouert; 750 Schëllen- a Leeschtungsplang ausgestallt.
- Outcomes: vun de Cliente mat engem Suivi no 6 Méint mellen 60 % (450 vun 750) manner Réckstänn,
  am Duerchschnëtt £1 200 manner pro Client – £540 000 insgesamt u reduzéierte Réckstänn.
- Impakt: e messbare Réckgang vun de Wunnengsnout-Ufroen aus der Clientel vum Dingscht iwwer zwee Joer,
  deen nëmmen deelweis op dësen Dingscht zréckzeféiere ka ginn, niewent anere Moossnamen (kuckt
  [Analyse vum Kontrafaktum](../kontrafaktesch-analys/)).

**Charity (Partnerschaft fir Iesse-Bank-Iwwerweisungen)**:

- Inputen: £45 000, 1,5 Vollzäitäquivalent als Koordinator, Partnerschaftsvereinbarunge mat 12 Iwwerweisungsagenturen.
- Aktivitéiten: Triage vun den Iwwerweisungen, Packen an Austeele vu Liewensmëttelpäck.
- Outputen: 5 000 Liewensmëttelpäck u 1 100 Stot verdeelt.
- Outcomes: 68 % vun den ëmfrote Stot (748 vun 1 100) mellen bei engem Telefonsuivi no 4 Wochen eng besser
  Iessenssécherheet.
- Impakt: Bäitrag zu manner Nofro no lokale Krisendéngschter, nëmmen duerch aggregéiert Statistike fir de
  Beräich belee, net dëser Charity eleng zouzeschreiwen.

## Verbindung zur Softwareentwécklung

D'Logikmodell ass bal e wuertwiertlecht Datemodell fir en Outcome-System: Inputen an Aktivitéite sinn
Operatiounsdaten, déi een scho vun Haus aus huet (Ausgaben, Personal, Sessiounsprotokoller); Outputen sinn
einfach ze instrumentéieren, well se am Moment vun der Liwwerung gezielt ginn; Outcomes verlaangen eng
bewosst entworf Datesammlung fir de Suivi (Ëmfroen, Verknëppung vun administrative Daten), déi et net gëtt,
wann se keen opbaut; Impakt brauch normalerweis verknëppt, laangzäitlech Daten oder Daten um Niveau vun
der Bevëlkerung, déi iwwer d'Systemer vun engem eenzele Programm erausginn. Ingenieuren, déi
Berichtsinstrumenter bauen, sollten d'Kommissionäre drun erënneren, Outcome- an Impakt-Indikatoren
schonn an der Designphase ze definéieren, amplaz op en Dashboard nëmmen mat Outputen zréckzefalen, just
well dat vun den Transaktiounsdate scho ënnerstëtzt gëtt. Kuckt [Social Return on Investment](../sozialen-investitiounsrendement/)
fir eng Method, déi spezifesch d'Kolonne vun den Outcomes an dem Impakt bewäert, an
[Realiséierung vun de Virdeeler](../realiséierung-vun-notzen/), fir ze verfolgen, ob d'Impakt-Kolonn
tatsächlech erreecht gouf.

## Feelerquellen

- **Beim Output stoppen.** E Dashboard, dat duerchgefouert Rendez-vousen oder verdeelt Päck mellt an doduerch
  e Virdeel implizéiert, mellt Aktivitéit, net Resultater – kuckt [Outcomes vs. Outputen](../outcomes-vs-outputen-resultater-a-leeschtungen-ënnerscheeden/).
- **Keng ausdrécklech kausal Verbindung tëscht de Kolonnen.** E Logikmodell stellt d'Kette duer, mä net,
  firwat Aktivitéiten Outputen an Outputen Outcomes sollen ophuelen; dës Begrënnung gehéiert an eng
  [Verännerungstheorie](../wierkungstheorie/), an e Logikmodell ouni eng sou Theorie dohannert ass net getest.
- **Et als eemolegt Ufrodokument behandelen.** Logikmodeller, déi just fir eng Finanzéierungsufro gemaach
  a spéider ni aktualiséiert ginn, hale op, dat ze weisen, wat de Programm tatsächlech mécht.
- **Zouschreiwungs-Ausdehnung an der Impakt-Kolonn.** Eng Verännerung op Niveau vun der Bevëlkerung als
  eleng vun engem Programm verursaacht auszeginn, ouni Kontrafaktum, iwwerschätzt, wat d'Beweiser hierginn.

## Quellen

- HM Treasury, Magenta Book (2020), Chapter 3. <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, logic model guidance. <https://www.tnlcommunityfund.org.uk/>
- W.K. Kellogg Foundation, "Logic Model Development Guide" (2004). <https://www.wkkf.org/resource-directory/resources/2004/01/logic-model-development-guide>
