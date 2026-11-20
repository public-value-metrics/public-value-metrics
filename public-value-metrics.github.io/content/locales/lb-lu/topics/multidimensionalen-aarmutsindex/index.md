# Multidimensionalen Aarmutsindex

De MPI mëscht Aarmut als sech iwwerlappend Entbehrungen, déi eng Persoun zur selwechter Zäit an der
Gesondheet, der Bildung an dem Liewensstandard erlieft, amplaz als Akommes eleng, dat ënner enger Grenz
fält. En gouf vun der Oxford Poverty and Human Development Initiative (OPHI) mat Sabina Alkire a James
Foster entwéckelt a gëtt zanter 2010 gemeinsam mam UNDP an all Human Development Report publizéiert,
niewent dem [Human Development Index](../index-vun-der-mënschlecher-entwécklung/).

## Firwat et wichteg ass

Aarmutsgrenze baséiert op dem Akommes verpassen Leit, déi genuch Akommes hunn, mä keng propper Waasser,
Schouldbildung hunn oder den Doud vun engem Kand erlieft hunn – a si verpassen, datt Entbehrunge sech
konzentréieren: e Stot ouni Stroum huet iwwerproportional dacks och keng Sanitäranlagen an en ënnerernäert
Kand. D'Alkire-Foster-Method, op där de MPI opgebaut ass, zielt d'Entbehrunge vun all Persoun iwwer zéng
Indikatoren, gruppéiert an dräi gläich gewiichte Dimensiounen – Gesondheet, Bildung, Liewensstandard – a
klasséiert eng Persoun nëmmen dann als „MPI-aarm“, wann hire gewiichte Entbehrungsscore eng fix Schwell
iwwerschreit, an erfaasst doduerch d'Iwwerlappung, déi eng Rei vu separaten Statistike mat engem eenzege
Indikator net erfaasse kann. D'OPHI publizéiert déi komplett Methodologie a Länderdaten op
<https://ophi.org.uk/multidimensional-poverty-index/>; de globale MPI, deen se gemeinsam mam UNDP
betreit, deckt elo méi wéi 110 Länner of. Fir Software, déi fir Programmer géint d'Aarmut gebaut gëtt –
Cash-Transfers, Triage an der Sozialpfleeg, Zilgrupp-Bestëmmung vun Hëllefen – ass dem MPI säi Set
vun Indikatoren dacks dat Nootste bei engem standardiséierte Entbehrungsschema, dat schonn an Dosende
vun nationale Statistikämter validéiert gouf.

## D'Mathematik

```
10 Indikatoren, 3 Dimensiounen, all Dimensioun mat 1/3 gewiichtegt:

Gesondheet (1/3):         Ernärung (1/6), Kannersterblechkeet (1/6)
Bildung (1/3):            Schouljoren (1/6), Schoulbesuch (1/6)
Liewensstandard (1/3):    Kachbrennstoff, Sanitäranlagen, Drénkwaasser,
                          Stroum, Wunnen, Besëtz (jeweils 1/18)

Entbehrungsscore (c) = Zomm vun de Gewiichter vun den Indikatoren, bei deenen eng Persoun entbehrt

Eng Persoun ass „MPI-aarm“, wann c ≥ 1/3 (d'Aarmutsgrenz, k = 33 %)

H (Headcount-Verhältnis) = Zuel vun de MPI-Aarmen / Gesamtbevëlkerung
A (Intensitéit)          = duerchschnëttleche Entbehrungsscore nëmmen bei de MPI-Aarmen

MPI = H × A
```

Well de MPI den *Undeel* vun den Aarmen mat der *Schwéierkraaft* vun hirer Aarmut multiplizéiert, kënnen
zwou Regiounen mam selwechte Headcount-Verhältnis ganz ënnerschiddlech MPI-Scores hunn, wann d'Entbehrunge
an enger vun hinne méi schwéier sinn – déiselwecht Logik „keng Substitutioun tëscht Dimensiounen“ hannert dem
geometreschen Mëttel vum HDI.

## Rechebeispill

**Nationalen Ëmfro mat 1 000 Leit**: 350 gi als multidimensional aarm identifizéiert (Entbehrungsscore
≥ 33 %). Nëmmen ënnert dëse 350 aarme Leit läit den duerchschnëttleche Entbehrungsscore bei 45 %.

```
H = 350 / 1 000               = 0,350
A = 0,45
MPI = H × A = 0,350 × 0,45    = 0,1575
```

**Vergläich vun zwee Distrikter mat gläichem Headcount**: Distrikt A huet H = 0,30 an A = 0,40 (vill Aarm,
moderat entbehrt); Distrikt B huet H = 0,30 an A = 0,60 (selwecht Zuel vun Aarmen, mä méi schwéier entbehrt –
si hunn zur selwechter Zäit kee Stroum *a* keng Sanitäranlagen *a* keen Schoulbesuch).

```
MPI_A = 0,30 × 0,40 = 0,120
MPI_B = 0,30 × 0,60 = 0,180
```

Selwecht Headcount-Verhältnis, 50 % méi héijen MPI am Distrikt B – e Zilgrupp-System, dat nëmmen op der
Headcount-Aarmut baséiert, géif déi zwee Distrikter gläich rangéieren an iwwersinn, datt Distrikt B méi
déiffgräifend Interventioun brauch.

## Verbindung zur Softwareentwécklung

- Systemer fir d'Fallverwaltung an d'Eligibilitéit bei Sozialprogrammer späicheren dacks scho verschidde vun
  den zéng Indikatoren (Wunnen, Schoulbesuch, Gesondheetsmarker) a getrennte Silos; d'Zielmethod vun
  Alkire-Foster ass e fäerdegt Schema, fir se zu engem eenzege Entbehrungsscore ze kombinéieren, amplaz e
  maßgeschneidert Bewäertungsmodell vun Null un ze bauen.
- D'Opdeelung an Headcount/Intensitéit (H × A) ass e generell nëtzleche Muster fir all Dashboard, dat
  „wéi vill sinn betraff“ niewent „wéi schwéier“ mellt – béides an eng Zuel zesummenzefalen, wéi et
  rau Prävalenzstatistike maachen, verstoppt genee de Fall, deen déi meescht Ressourcë brauch.
- Dashboards am MPI-Stil passen natierlech zu Rapporte iwwer [Käschte pro Begënschtegten](../käschte-pro-begënschtegten/)
  bei Programmer géint d'Aarmut: d'Käschte pro Punkt MPI-Reduktioun si eng verdeedegungsfäeg Eenheet, fir
  ganz ënnerschiddlech Interventiounen ze vergläichen (Cash-Transfer vs. Sanitär-Infrastruktur).

## Feelerquellen

- **Déi zéng Indikatoren als universell behandelen** – d'globale MPI-Indikatore vun der OPHI sinn op
  Vergläichbarkeet tëscht Länner kalibréiert; national MPIe (vill Länner, och verschidde a Südasien an
  Afrika, publizéieren hir eegen) passen Indikatoren a Gewiichter un de lokale Kontext un, an déi zwee
  si net direkt vergläichbar.
- **Nëmmen H mellen** – d'Headcount-Verhältnis ignoréiert d'Intensitéit komplett; ëmmer A niewendrun
  mellen oder berechnen, oder den MPI selwer.
- **Unhuelen, MPI-Aarm a Akommesaarm wieren déiselwecht Populatioun** – d'eegen Länner-Briefen vun der OPHI
  weisen typesch nëmmen deelweis Iwwerlappung tëscht deenen zwou; e Programm, dat nëmmen d'Akommesaarm
  unzilt, verpasst systematesch en bedeitenden Undeel vun de multidimensional Aarmen.

## Quellen

- Oxford Poverty and Human Development Initiative. "Multidimensional Poverty Index."
  <https://ophi.org.uk/multidimensional-poverty-index/>
- Alkire S, Foster J. "Counting and Multidimensional Poverty Measurement." Journal of Public
  Economics, 2011.
- UNDP & OPHI. "Global Multidimensional Poverty Index" (annual report).
