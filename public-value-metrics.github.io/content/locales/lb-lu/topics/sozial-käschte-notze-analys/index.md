# Sozial Käschte-Notze-Analys (SCBA)

D'sozial Käschte-Notze-Analys rechent all Käschte an all Notzen vun enger Politik oder engem Programm – Maart- an Net-Maartwäerter – an eng gemeinsam Geldeenheet em, diskontéiert zukünfteg Stréim op de Gegewaartswäert an zitt se vuneneen of, fir eng eenzeg Zuel ze kréien: stellt dëse Virschlag d'Gesellschaft besser, a ëm wéi vill?

## Firwat et wichteg ass

D'SCBA ass déi quantitativ Standardmethod am ekonomesche Fall vun der [Green-Book-Appraisal](../bewäertung-no-dem-green-book/): d'Leetlinn vum HM Treasury verlaangt, datt Virschléi e positive sozialen Nettogegewaartswäert (Net Present Social Value, NPSV) nowäisen, soulaang d'Notze glafwürdeg monetariséiert kënne ginn, mat der Bereetschaft zum Bezuelen (Willingness-to-Pay) als Grondprinzip vun der Bewäertung fir Net-Maartgidder (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>, Chapter 5). D'Disziplin, déi si erzwéngt, ass: „sozial" Käschte-Notze-Analys ass net dat selwecht wéi eng privatwirtschaftlech Investitiounsappraisal – si muss Käschten an Notze berécksiichtegen, déi bei Drëttpersounen ufalen, déi net un der Transaktioun bedeelegt sinn (Externalitéiten), si muss den [sozialen Diskontsaz](../sozialen-diskontsaz/) amplaz vun de kommerziellen Kapitalkäschte benotzen, a si soll [Verdeelungsgewiichtung](../verdeelungsgewiichtung/) uwenden, wou e Pond fir en aarmen Haushalt méi zielt wéi fir e räiche.

Wou d'SCBA un hir Grenze kënnt, ass genee do, wou hir Kritiker et erwaarden: Gidder ouni Maartanalogon – propper Loft, sozialen Zesummenhalt, de Wäert vun engem geretten Liewen – musse mat Methode vun der [Bewäertung no deklaréierte Präferenzen](../bewäertung-no-deklaréierte-präferenzen/) oder [no opgedeckte Präferenzen](../bewäertung-duerch-opgedeckte-präferenzen/) monetariséiert ginn, oder et muss e [Schattepräis](../schattepräisser/) konstruéiert ginn. Wann d'Monetariséierung ëmstridden an net nëmme schwiereg ass, empfielt de Green Book selwer, op d'[Käschteneffizienzanalys](../käschten-effektivitéitsanalys-an-der-verwaltung/) oder d'[Multikriteriell Entscheedungsanalys](../multikriteriell-entscheedungsanalyse/) zeréckzegräifen, amplaz eng Zuel ze erzwéngen, un déi keen gleeft.

## D'Mathematik

```
NPSV = Σ [t=0 bis T] (Notzen_t − Käschten_t) / (1 + r)^t

wou:
  Notzen_t  = all monetariséiert Notze am Joer t, och Net-Maartgidder, bewäert
              iwwer deklaréiert/opgedeckt Präferenzen oder Schattepräis
  Käschten_t = all monetariséiert Käschte am Joer t, och d'Opportunitéitskäschte
              vun de Ressourcen (kuckt ../opportunity-cost-in-public-spending/)
  r         = sozialen Diskontsaz (HM Treasury setzt 3,5 %, fir méi spéit
              Joren ofhuelend, no Green Book Annex A)
  T         = Appraisal-Zäitraum

Notze-Käschte-Verhältnis (BCR) = Σ PV(Notzen) / Σ PV(Käschten)
```

E BCR iwwer 1 (oder en NPSV iwwer null) weist e sozialen Nettowäert un. D'Kategorië vum Green Book fir de Preis-Leeschtungs-Verhältnis (wéi se an der Appraisal vum Transport an vun der Infrastruktur benotzt ginn) bezeechnen BCR-Beräicher: ënner 1,0 ass e schlechte Preis-Leeschtungs-Verhältnis, 1,0–1,5 ass niddreg, 1,5–2,0 ass mëttel, 2,0–4,0 ass héich an iwwer 4,0 ass ganz héich. Eng Sensitivitéitsanalys – den NPSV ënner pessimistesche an optimistesche Viraussetzunge nei ze rechnen – ass obligatoresch, net fakultativ, well monetariséiert Net-Maartnotze mat breede Onsécherheetsbänner behaft sinn.

## Rechebeispill

**Lokal Behörd**: eng Gemeng bewäert eng Investitioun vun £3 Mio. an en neit Vëlos- a Fousswee-Netz iwwer en Appraisal-Zäitraum vu 20 Joer bei engem Diskontsaz vun 3,5 %.

```
Käschten: £3 Mio. Kapital am Joer 0, £50.000/Joer Ënnerhalt (Joer 1-20)
PV(Ënnerhalt) ≈ £50.000 × 14,2 (20-Joer-Annuitéitsfaktor bei 3,5 %) ≈ £710.000
PV(Käschten) insgesamt ≈ £3,71 Mio.

Notzen (all monetariséiert iwwer verëffentlecht DfT/WHO-Bewäertungsinstrumenter):
  Gesondheetsnotzen duerch méi kierperlech Aktivitéit: £180.000/Joer
  Reduktioun vun den Absenzen: £40.000/Joer
  Entlaaschtung vum Stau (manner Autosfahrten): £60.000/Joer
  Notzestroum insgesamt: £280.000/Joer
PV(Notzen) ≈ £280.000 × 14,2 ≈ £3,98 Mio.

NPSV = £3,98 Mio. − £3,71 Mio. = +£0,27 Mio.
BCR = 3,98 / 3,71 = 1,07 → „niddreg" Preis-Leeschtungs-Verhältnis
```

De Projet erreecht d'Schwell, awer nëmmen knapp; eng Sensitivitéitsrechnung mat enger em 20 % méi niddreger Schätzung vum Gesondheetsnotzen (déi eng richteg Onsécherheet bei der Bewäertung vu kierperlecher Aktivitéit ofbilt) dréckt de BCR ënner 1,0 – genee dofir verlaangt de Green Book, datt d'Sensitivitéitstabell niewent der Schlagzuel verëffentlecht gëtt, net nëmmen d'zentral Schätzung.

**Associatioun**: e Programm zur Preventioun vun der Kannerstierflechkeet, dat £500.000/Joer kascht, gëtt mam Wäert vun engem statistesche Liewen (Value of a Statistical Life, VSL) bewäert – e Schattepräis, net e beobachte Maartpräis – vu ronn £2,1 Mio. (déi 2023 aktualiséiert Zuel vum HM Treasury, selwer aus Studie mat deklaréierte Präferenze ofgeleet). Een Kannerstierffall pro Joer ze verhënneren, bei Käschte vu £500.000, gëtt e BCR vu 4,2, kloer e „ganz héijen" Preis-Leeschtungs-Verhältnis – awer dat ganzt Resultat hänkt vun der VSL-Zuel of, dofir muss all SCBA, déi de VSL benotzt, en als Viraussetzung an net als Fakt ausweisen.

## Verbindung zur Softwareentwécklung

D'SCBA ass de natierleche Rahmen fir Investitiounsentscheedungen an Plattformen an Infrastruktur an der Verwaltungssoftware – eng gemeinsam Identitéitsplattform mat Punktléisunge vun den eenzelne Ministèren ze vergläichen, zum Beispill, verlaangt d'Monetariséierung vun Notzen, wéi manner duebel Onboarding-Käschten, manner Bedruch a méi séier Zäit bis zum Service, déi vun hirem Wäsen aus kee Maartpräis hunn. Ingenieuren, déi de Service dohannert bauen, sollten domat rechnen, datt Programmleeder no Inputen fir dës Analys froen: Eenheetskäschte vun den Transaktiounen (kuckt [Käschte pro Transaktioun](../käschte-pro-transaktioun/)), erwaart Volumen a Käschte fir Dégradatioun/Ausfallzäit. Déi wichtegst Disziplin, déi een iwwerholl soll: zukünfteg Notzen diskontéieren, d'kontrafaktesch Basislinn explizit nennen (kuckt [kontrafaktesch Analys](../kontrafaktesch-analys/)) an ni eng eenzeg Punktschätzung ouni hir Sensitivitéitsspannbreet presentéieren.

## Feelerquellen

- **Duebelzielung vun Notzen.** „Gespuert Zäit" an „Produktivitéit, déi aus där Zäit entstanen ass" als getrennt Notzepositiounen ze zielen, iwwerdreift de Fall; d'gespuert Zäit ass den Notzen, hir spéider Notzung ass kee zousätzlechen, ausser se ass onofhängeg belegt.
- **Verdrängt Käschte vergiessen.** E Projet, dee Stau vun enger Strooss op eng aner verlagert, oder Bedruch vun engem Kanal op en anere, huet net de Nettonotzen geschaf, deen säin NPSV an der Schlagzuel suggeréiert – kuckt [Verdrängung an Zouuerdnung](../verdrängung-a-zouerdnung/).
- **E private Diskontsaz benotzen.** E kommerziellen Kapitalkäschtesaz (zum Beispill 8–10 %) amplaz vum sozialen Diskontsaz ënnerbewäert systematesch ëffentlech Notzen mat laangem Horizont, wéi Gesondheets- an Ëmweltgewënn – kuckt [sozialen Diskontsaz](../sozialen-diskontsaz/).
- **D'Onëmstridden monetariséieren an d'Ëmstridden ofwénken.** Wann zwee Drëttel vum Notzen vun engem Virschlag eng sécher monetariséiert Effizienzastpuerung ass an een Drëttel e wackelech monetariséierte Gewënn u Wuelbefannen, vermëscht de NPSV an der Schlagzuel roueg eng haart mat enger weicher Zuel; si getrennt ausweisen.

## Quellen

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Chapter 5. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury. "Green Book supplementary guidance: value of a statistical life." 2023. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-value-of-a-statistical-life>
- Department for Transport. "TAG unit A1.1: cost-benefit analysis." Transport Analysis Guidance. <https://www.gov.uk/guidance/transport-analysis-guidance-tag>
