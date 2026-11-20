# Kevrennlyver Displegyans Denel (HDI)

An HDI yw dewis penn an UN erbyn restrya powow dre devar hepken: ev a gemmysk hirneth bewnans, adhyskans, ha devar yn unn nivel ynter 0 ha 1, war an dybyans — dadhlys gans an yskonomydh Amartya Sen ha displegys rag an UN gans Mahbub ul Haq — bos displegyans a-dro dhe ehanga pyth a yll tus gul ha bos, nyns yw hepken pyth a wayn. Yw dyllys bledhennek yn Raport Displegyans Denel Program Displegyans an UN (UNDP) dhyworth 1990.

## Perag y talvos

Kyns an HDI, "displegyans" a veu musurys ogas hollek dre GNP dhe bub penn, na lever tra vyth a-dro dhe'n dhrik kressans dhe yeghes po adhyskans tus kebmyn. Fordh gallos Sen a dhasfurvyas displegyans avel ehangans a rydhyow gwir, ha ul Haq a'n treylyas dhe gevrennlyver dyllys may hyllis an UNDP restrya pub pow dhodho, ow-konfrontya governansow a dhrehevys rych dre devar hepken mes a anwhelas yeghes po skol dhe renk gwessa es dh'y GDP a dhisqwedha (stadys oyl an Gulf ha nebes yskonomiethow dennys yw an ensamplow savonek). Strukturyans tri-fordh an HDI yw ynwedh an hendas metodologek ewn a'n [Kevrennlyver Kosowes Lies-dimensyon](../menegva-bohosogneth-liesmeusek/): an dhew a dhenegi gasa unn dimensyon dhe dhasprena gwann yn aral, ow-devnydhya kresek geometrek yn le a aritmetek. UNDP a dhyllo noten teknegek leun ha'n data awoles rag pub dyllans (<https://hdr.undp.org/data-center/human-development-index>), yw an fenten kanonek rag pubonan ow-drehevel war an kevrennlyver yn le a'y dhyrifya arta.

## An matematik

```
Kevrennlyver Hirneth Bewnans (LEI)  = (LE − 20) / (85 − 20)

Kevrennlyver Bledhynyow Skol Kresek = bledhynyow skol kresek / 15
Kevrennlyver Bledhynyow Skol Gwarn  = bledhynyow skol gwarnys / 18
Kevrennlyver Adhyskans (EI)         = (Kevrennlyver Kresek + Kevrennlyver Gwarnys) / 2

Kevrennlyver Devar (II)             = (ln(GNI dhe bub penn) − ln(100)) / (ln(75000) − ln(100))

HDI = (LEI × EI × II) ^ (1/3)     [kresek geometrek an tri is-kevrennlyver]
```

An kresek geometrek yw ervirys: drefen y wra ev multiplya yn le a'n kresegi, skor uhel dres yn unn dimensyon na yll dasprena yn leun skor isel dres yn dimensyon aral — dyssynnans a gemmeras UNDP yn 2010 yn arbennek dhe boenya dysbarth, ow-dasplassya an formula kresek aritmetek kyns.

## Ensampel oberys

**Pow a gevedh kres**: hirneth bewnans 72 bledhen, bledhynyow skol kresek 8, bledhynyow skol gwarnys 13, GNI dhe bub penn $12,000.

```
LEI = (72 − 20) / (85 − 20)              = 52 / 65   = 0.800
MYSI = 8 / 15                                        = 0.533
EYSI = 13 / 18                                       = 0.722
EI = (0.533 + 0.722) / 2                             = 0.628
II = (ln(12000) − ln(100)) / (ln(75000) − ln(100))
   = (9.393 − 4.605) / (11.225 − 4.605)
   = 4.788 / 6.620                                   = 0.723

HDI = (0.800 × 0.628 × 0.723) ^ (1/3)
    = (0.363) ^ (1/3)                                ≈ 0.713
```

HDI a 0.713 a godh yn bagas "displegyans denel uhel" UNDP (0.700–0.799); "ughel meurgerys" a dhallath orth 0.800. Notya fatell yw an deveth lymmys orth an is-kevrennlyver gwanna: mara veu bledhynyow skol kresek 4 yn le a 8 (MYSI = 0.267, EI = 0.494), HDI a godh dhe (0.800 × 0.494 × 0.723)^(1/3) ≈ 0.639 — ow-kodha bagas leun — kyn na dhrik tra vyth aral.

## Kevrenn gans ynjynnerieth medhelweyth

- An patron kresek geometrek yw adhevnydhys yn ewn rag kenyver skor kesstrusyes servis po produkt na vynn unn dimensyon krev dhe gudha unn wann poesek — rag ensampel kemmysga skorow kavadowieth, perfformans, ha fyadowieth rag servis didhital poblek dre multiplya yn le a gresek pwyshys, may na yll servis uskis mes anvyth dhe gavos kavadowieth skorya "da."
- Treylyans log an HDI a'n devar (talvos ogasel a godh a bunt ynkressys) yw an keth lojyk a dhre [pwysheans dasrannans](../pwysheans-dasrannans/) yn arvreythyans: $1,000 ynkressys a styr meur moy dhe dyji boghosek es dhe dyji rych, ha ewnhe an dhew yn linyek a wra mispris an effeyth.
- Kenyver tablyn-bord a raport skor kemmyskys unn a "kebmyskadow didhital" po "devethyow sitisen" a dal dhogumentya y formula kuntelles kemmys avel noten teknegek UNDP — mir [KPIs sektor poblek](../kpis-an-sektor-poblek/) ha [skorkart talvos poblek](../skorkard-gwerth-poblek/).

## Trapow

- **Kresegi yn le a devnydhya an kresek geometrek** — kresek aritmetek a asa devar uhel dhe gudha yeghes po adhyskans isel yn tien; poynt oll an chanj metodologieth 2010 o hedhi an dasplassyans na.
- **Kehevely HDI bledhen-orth-bledhen kepar dell o GDP ewnhes dhe dhylans** — UNDP a dhasvasa an kevrennlyver ynter termyn (finyow isella/uhella nowydh, kappow skol dasewnhes), ytho chanj renk a yll diskwedhes dasnewyth metodologieth, nyns yw chanj gwir; whila pup prys pyneyl dyllans HDR a dheu an figyr.
- **Ewnhe HDI avel musur kosowes** — yw kresek kenedhlek ha ny lever tra a-dro dhe dhasrannans a-berth pow; rag hemma, devnydh an [Kevrennlyver Kosowes Lies-dimensyon](../menegva-bohosogneth-liesmeusek/) po HDI ewnhes rag anekwalita UNDP dyffrans.

## Fentynyow

- UNDP. "Human Development Index (HDI)" technical notes and data.
  <https://hdr.undp.org/data-center/human-development-index>
- UNDP. Human Development Report 1990 (the index's introduction).
- Sen A. "Development as Freedom." Oxford University Press, 1999.
