# Wierkungsevaluatioun vs. Prozessevaluatioun

D'Wierkungsevaluatioun freet, ob e Programm seng virgesinn Resultater verursaacht huet. D'Prozessevaluatioun freet, ob de Programm tatsächlech sou ëmgesat gouf, wéi e geduecht war – u wien, mat wéi enger Dosis a mat wéi enge Barrièren oder Fërderfaktoren ënnerwee. Dat si verschidde Froen, déi verschidde Methode verlaangen, an dem HM Treasury säi Magenta Book behandelt et als Standardpraxis, béid zesumme a Optrag ze ginn, well e schwaacht oder null Wierkungsresultat eleng net interpretéierbar ass: et kann net soen, ob dem Programm seng zougrondeliegend Theorie falsch war, oder ob eng gutt Theorie einfach ni richteg ëmgesat gouf.

## Firwat et wichteg ass

Regierungsevaluatioune hu widderholl kee moossbaren Effekt vun engem Programm fonnt, ouni eng Prozessevaluatioun ze hunn, déi erkläert, firwat – wat d'Commissairen net fäeg léisst, „dës Iddi funktionéiert net“ (Theoriefeeler) vun „dës Iddi gouf ni richteg ausprobéiert“ (Ëmsetzungsfeeler) ze ënnerscheeden. D'Leitfad vum Medical Research Council zur Prozessevaluatioun vu komplexen Interventiounen, 2015 am BMJ publizéiert a wäit niewent dem Magenta Book zitéiert, huet Fidelitéit, Dosis a Reechwäit als déi Kärsaachen formaliséiert, déi eng Prozessevaluatioun muss moossen. Eng Wierkungsevaluatioun ouni Prozessevaluatioun a Optrag ze ginn, riskéiert, en eigentlech gudde Programmdesign opzeginn, well e just bei der Hallschent vun der virgesinner Populatioun a mat engem Bruchdeel vun der geplangter Intensitéit ëmgesat gouf – e Feeler, dee Systemerbauer gutt verhënnere kënnen, well d'Fidelitéit vun der Ëmsetzung genee dat ass, wat operativ Datesystemer bal an Echtzäit erfaasse kënnen.

## D'Mathematik

```
Prozessevaluatioun freet:
 - Gouf et un déi Zilgrupp geliwwert, mat der geplangter Dosis/Intensitéit?
 - Huet d'Liwwerung dem Design vum Logikmodell / der Wierkungstheorie entsprach?
 - Wéi eng Barrièren oder Fërderfaktoren hunn d'Liwwerung beaflosst?
 Methoden: Fidelitéitskontrollen géint virdefinéiert Schwellen, Fallstudien, Interviewen,
           administrativ Liwwerdaten.

Wierkungsevaluatioun freet:
 - Wat huet sech geännert, a wéi vill vun där Ännerung ass dem Programm zouzeschreiwen?
 Methoden: RCT, DiD, PSM, RDD – kuckt impact-evaluation-methods – géint e Kontrafaktum.

Kombinéiert Diagnos:
 Kee Effekt  + héich Fidelitéit   → Theoriefeeler: de Modell selwer huet d'Resultat net produzéiert
 Kee Effekt  + niddreg Fidelitéit → Ëmsetzungsfeeler: de Modell gouf ni richteg getest
 Effekt fonnt + héich Fidelitéit  → mat Vertrauen replizéieren
 Effekt fonnt + niddreg Fidelitéit → weider ënnersichen: den Effekt kann fragil oder standuertspezifesch sinn
```

## Rechebeispill

**Gemeng (Elterenprogramm)**: eng Wierkungsevaluatioun mat Differenz-vun-Differenzen fënnt eng Ännerung vun +2 Prozentpunkten bei enger Moossung vum Wuelbefanne vu Kanner – statistesch net signifikant. D'Prozessevaluatioun, déi niewendru lëuft, fënnt, datt de Programm just 210 vun de 500 geziilte Familljen erreecht huet (42 % Reechwäit), an dovun nëmmen 95 déi virdefinéiert Fidelitéitsschwell vu 75 %+ besichte Sessiounen erfëllt hunn – 19 % vun der urspréngleche geplangter Reechwäit. Konklusioun: dat schwaacht Wierkungsresultat ass mat engem Ëmsetzungsfeeler vereinbar, kee Beweis, datt de Programmmodell net funktionéiert; déi passend Äntwert ass, de Verweisungswee ze flécken, deen den Ofgang vu 58 % verursaacht huet, net de Programmdesign opzeginn.

**Charity (Programm fir digital Kompetenz)**: eng Wierkungsevaluatioun fënnt e staarken Effekt (+18 Prozentpunkten bei engem Score fir digitaalt Selbstvertrauen), a eng parallel Prozessevaluatioun bestätegt 92 % Fidelitéit zum geplangte Curriculum iwwer all 12 Standuerter. Zesummen kann de Geldgeber de Programm mat Vertrauen skaléieren, well de Beweis do ass, datt den Effekt konsequent hält, amplaz d'Resultat vun engem ongewéinlech gudde Standuert ze sinn.

## Verbindung zur Softwareentwécklung

Daten vun der Prozessevaluatioun sinn genee dat, wat Liwwersystemer gutt erfaasse kënnen: Presenz am Verglach zum Plang, Sessiounsdosis an Ofbroch bei all Stuf vun engem Verweisungs- oder Aschreiwungstrichter – dee selwechten Trichter-Analytics, déi Entwéckler schonn fir Produktfeatures bauen, awer ugewannt op d'Liwwerpipeline vun engem Sozialprogramm. Fidelitéits- a Reechwäitmetriken bal an Echtzäit u Programmmanager ze liwweren, amplaz op eng Evaluatioun um Enn vun der Subventioun ze waarden, erlaabt et, e kapotte Verweisungswee wärend dem Programm ze flécken, amplaz en eréischt dann z'entdecken, wann d'Finanzéierungsperiod eriwwer ass. Kuckt [Methode fir Wierkungsevaluatioun](../methode-fir-wierkungsevaluatioun/) fir déi kausal Designen, mat deenen d'Prozessevaluatioun gepaart ass, [Wierkungstheorie](../wierkungstheorie/) a [Logikmodell](../logikmodell/) fir de Design, géint deen d'Prozessevaluatioun d'Fidelitéit préift, an [Realiséierung vun den Notzen](../realiséierung-vun-notzen/), fir d'Liwwerung bis bei déi verspruechte Resultater ze verfollegen.

## Feelerquellen

- **Nëmmen eng Wierkungsevaluatioun a Optrag ginn.** E Null- oder schwaacht Resultat léisst sech dann net als Theorie- oder Ëmsetzungsfeeler interpretéieren, wat genee d'Ënnerscheedung ass, déi dofir wichteg ass, ze entscheeden, wat als nächst ze maachen ass.
- **D'Prozessevaluatioun als mëllt Zousazstéck behandelen.** Si brauch déiselwecht Rigueur a virdefinéiert Fidelitéitskritären wéi de Wierkungsdesign, soss kollabéiert se zu Anekdoten, wann d'Resultater kommen.
- **„Pünktlech a bannent dem Budget“ mat „wéi geduecht geliwwert“ verwiesselen.** D'Prozessevaluatioun préift d'Fidelitéit zum Modell – Dosis, Zilgrupp, Inhalt – net de RAG-Status vum Projetmanagement.
- **Fidelitéitsschwellen net virdrun registréieren.** Nodréiglech ze entscheeden, wat als „genuch Dosis“ zielt, léisst all Erklärung fir en enttäuschend Wierkungsresultat wéi eng nodréiglech Ausried ausgesinn.

## Quellen

- HM Treasury, Magenta Book (2020). <https://www.gov.uk/government/publications/the-magenta-book>
- Moore G, et al., "Process evaluation of complex interventions: Medical Research Council
  guidance." BMJ 2015;350:h1258. <https://www.bmj.com/content/350/bmj.h1258>
- National Audit Office, programme evaluation reports. <https://www.nao.org.uk/>
