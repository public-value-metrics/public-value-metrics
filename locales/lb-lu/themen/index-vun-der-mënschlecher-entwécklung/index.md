# Index vun der mënschlecher Entwécklung (HDI)

Den HDI ass dem UN seng Haaptalternativ dozou, Länner eleng nom Akommes ze rangéieren: e kombinéiert Liewenserwaardung, Bildung an Akommes zu enger eenzeger Zuel tëscht 0 an 1, op der Viraussetzung – vum Economist Amartya Sen vertrueden an fir d'UN vum Mahbub ul Haq entwéckelt – datt Entwécklung doru geet, wat d'Leit kënne maachen a sinn, net nëmme wat se verdéngen. Hie gëtt zënter 1990 all Joer am Human Development Report vum UN Development Programme publizéiert.

## Firwat et wichteg ass

Virum HDI gouf „Entwécklung“ bal ausschliesslech duerch de BNE pro Kapp gemooss, deen näischt doriwwer seet, ob Wuesstum bei der Gesondheet oder der Bildung vun den normale Leit ukënnt. De Capability-Usaz vum Sen huet Entwécklung als Erweiderung vu reellen Fräiheeten nei definéiert, an den ul Haq huet dat an e publizéierbaren Index ëmgesat, no deem d'UNDP all Land rangéiere konnt, wat Regierungen, déi bloß duerch Akommes räich gi sinn, awer Gesondheet oder Schoulbildung vernoléissegt hunn, mat engem méi schlechte Rang konfrontéiert huet, wéi hir BIP suggeréiert hätt (d'Golfstaate mat Ueleg an e puer extraktiv Wirtschafte sinn d'Standardbeispiller). Dem HDI seng Dräierstruktur ass och de direkte methodesche Virgänger vum [Multidimensionalen Aarmutsindex](../multidimensionalen-aarmutsindex/): béid refuséieren, datt eng Dimensioun e Defizit an enger anerer kompenséiert, andeems se e geometrescht amplaz engem arithmetesche Mëttel benotzen. D'UNDP publizéiert fir all Editioun déi komplett technesch Notizen an d'zougrondeliegend Daten (<https://hdr.undp.org/data-center/human-development-index>), wat déi kanonesch Quell fir jiddereen ass, deen op dem Index opbaut, amplaz en nei ofzeleeden.

## D'Mathematik

```
Liewenserwaardungsindex (LEI)    = (LE − 20) / (85 − 20)

Index fir mëttel Schouljoren     = mëttel Schouljoren / 15
Index fir erwaart Schouljoren    = erwaart Schouljoren / 18
Bildungsindex (EI)               = (Index mëttel Joren + Index erwaart Joren) / 2

Akommesindex (II)                = (ln(BNE pro Kapp) − ln(100)) / (ln(75.000) − ln(100))

HDI = (LEI × EI × II) ^ (1/3)     [geometrescht Mëttel vun den dräi Ënnerindizes]
```

Dat geometrescht Mëttel ass absichtlech: well et multiplizéiert amplaz ze mëttelen, kann e ganz héije Score an enger Dimensioun e ganz niddrege Score an enger anerer net komplett ausgläichen – en Design, dee d'UNDP 2010 spezifesch ugeholl huet, fir Onbalance ze bestrofen, an deen déi fréier Formel mam arithmetesche Mëttel ersat huet.

## Rechebeispill

**Land mat mëttlerem Akommes**: Liewenserwaardung 72 Joer, mëttel Schouljoren 8, erwaart Schouljoren 13, BNE pro Kapp $12.000.

```
LEI  = (72 − 20) / (85 − 20)             = 52 / 65   = 0,800
MYSI = 8 / 15                                        = 0,533
EYSI = 13 / 18                                       = 0,722
EI   = (0,533 + 0,722) / 2                           = 0,628
II   = (ln(12000) − ln(100)) / (ln(75000) − ln(100))
     = (9,393 − 4,605) / (11,225 − 4,605)
     = 4,788 / 6,620                                 = 0,723

HDI = (0,800 × 0,628 × 0,723) ^ (1/3)
    = (0,363) ^ (1/3)                                ≈ 0,713
```

E HDI vun 0,713 läit am Band „héich mënschlech Entwécklung“ vun der UNDP (0,700–0,799); „ganz héich“ fänkt bei 0,800 un. Notéiert, wéi empfindlech d'Resultat op dee schwaachsten Ënnerindex reagéiert: wa mëttel Schouljoren 4 amplaz 8 wieren (MYSI = 0,267, EI = 0,494), fällt den HDI op (0,800 × 0,494 × 0,723)^(1/3) ≈ 0,639 – e ganze Band erof – obwuel näischt anescht sech geännert huet.

## Verbindung zur Softwareentwécklung

- D'Muster vum geometresche Mëttel ass direkt wiederbenotzbar fir all zesummegesate Service- oder Produktscore, wou Dir net wëllt, datt eng staark Dimensioun eng kritesch schwaach iwwerdecke kann – z. B. Barrièrefräiheet-, Performance- a Zouverlässegkeetsscore fir en ëffentlechen digitale Service multiplikativ amplaz mat engem gewiichtegen Duerchschnëtt ze kombinéieren, sou datt e Service, deen séier awer net zougänglech ass, net „gutt“ kann erreechen.
- D'Log-Transformatioun vum Akommes beim HDI (ofhuelenden Grenzwäert vun engem zousätzleche Pound) ass déiselwecht Logik wéi bei der [Verdeelungsgewiichtung](../verdeelungsgewiichtung/) an der Bewäertung: zousätzlech $1.000 bedeite vill méi fir e aarmen Haushalt wéi fir e räiche, a béid linear ze behandelen, bewäert d'Wierkung falsch.
- All Dashboard, dat e eenzege vermëschte Score fir „digital Inklusioun“ oder „Resultater fir Bierger“ mellt, soll seng Aggregatiounsformel esou explizit dokumentéieren wéi d'technesch Notize vun der UNDP – kuckt [KPIen vum ëffentleche Secteur](../kpie-fir-den-ëffentleche-secteur/) an [Scorecard vum ëffentleche Wäert](../public-value-scorecard/).

## Feelerquellen

- **Mëttelen amplaz dat geometrescht Mëttel ze benotzen** – e arithmetescht Mëttel léisst héicht Akommes schlecht Gesondheet oder Bildung komplett verdecken; de ganze Sënn vun der Methodeännerung vun 2010 war et, dës Substitutioun ze stoppen.
- **Den HDI vu Joer zu Joer ze vergläichen, wéi wann et inflatiounsbereenegt BIP wier** – d'UNDP baséiert den Index periodesch nei (nei Minimum-/Maximumgrenzen, iwwerschafft Schoulplafonden), sou datt eng Ännerung vum Rang eng Methodeaktualiséierung reflektéiere kann, keng reell Verréckelung; kontrolléiert ëmmer, aus wéi enger HDR-Editioun eng Zuel kënnt.
- **Den HDI als Aarmutsmoossung behandelen** – et ass en nationalen Duerchschnëtt a seet näischt iwwer d'Verdeelung bannent engem Land; benotzt dofir den [Multidimensionalen Aarmutsindex](../multidimensionalen-aarmutsindex/) oder dem UNDP säin separaten Inequality-adjusted HDI.

## Quellen

- UNDP. "Human Development Index (HDI)" technical notes and data.
  <https://hdr.undp.org/data-center/human-development-index>
- UNDP. Human Development Report 1990 (the index's introduction).
- Sen A. "Development as Freedom." Oxford University Press, 1999.
