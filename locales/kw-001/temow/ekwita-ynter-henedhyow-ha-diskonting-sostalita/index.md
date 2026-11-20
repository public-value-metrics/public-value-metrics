# Ekwita Ynter-henedhyow ha Diskonting Sostalita

Diskontya kostow ha budhekow arnowydh dhe dalvos lemmyn yw arfer savonek yn arvreythyans poblek — mir an [nivel diskont kevredhek](../skeul-diskont-sokel/) — mes kenyver nivel diskont poesek, kompoundys dres deg bledhenyow po kansow, a dhegresya an pell-dhe-dhos dhe seros yn termys lemmyn. Rag dyghtyansow gans effeythys kans bledhen po moy dhyworth lemmyn — chanj klima, gwast nuklear, kolli bywek, sostalita pensyon — an fakt matematek na a dheu dhe vos yn tra etik: diskontya savonek a yll gul droktra katastrofek dhe henedhyow a dheu dhe hevel, yn termys talvos lemmyn, nebes wortha hedhi.

## Perag y talvos

Ekwasyon Ramsey, dyrrys gans Frank Ramsey yn 1928, a ranna an nivel diskont yn dhew rann: kar-termyn pur (δ, pygemmys a bref ni lemmyn dres warnewedhes, heb vern gallos) ha effeyth kressans-golud (η×g, pygemmys a dhiskontyn drefen bos henedhyow a dheu rych, ytho punt ynkressys a styr le dhedha). Nivel diskont hir-termyn savonek Green Book an UK yw drehevys war an ekwasyon ma ha a sew rol *ow-codha* yn le a nivel plat — dyssynnans gwredhek yn ober Martin Weitzman war "diskonting gamma," a dhiskwedh pan yw nivel diskont an termyn a dheu ansur y honan, an nivel kehevelys-sertan a dal dhe vos gweythresys a godh yn matematek dres termyn, drefen bos kresyanys nivel-isel ow-tos dhe wul an moyha pellha y whelir. An Stern Review war Yskonomieth Chanj Klima (2006), ledys gans Sir Nicholas Stern, a gemmeras an dadhel etik pelleha: Stern a dhadhlas y tal an kar-termyn pur bos settys ogas dhe seros (ev a devnydhyas δ ≈ 0.1%, ow-tiskwedh hepken an brobabelita byghan a gatastrof a dhehwel an wareth, nyns yw kar gwir a'n lemmyn erbyn an dhe-dhos), ow-tre nivel diskont effeythus fest isella es arfer Green Book kebmyn ha, yn kehevelep, kas lemmyn meurgerys moy rag oberyans klima. Kritikoryon (arbennek William Nordhaus) a dhadhlas bos nivel ogas-seros Stern defendyes etik mes anedhek gans omdhegyans gwir a sawya ha budhegyans gwelys. An dhifferans nyns yw nota teknegek — yw an unn acheson brassa may hyll dew yskonomydh kehevelys-ewnder dhe dhos dhe dhevethyow fest dyffrans a-dro dhe bygemmys a dal an henedh lemmyn ry rag an dhe-dhos, hag yw an acheson may tal software ow-skoodhya arvreythyans budhek poblek hir-orisont dhiskwedhes y dybyansow diskonting yn le a'ga gudha yn defolt spredshyt.

## An matematik

```
Ekwasyon Ramsey:   r = δ + η × g

  r = nivel diskont kevredhek
  δ = kar-termyn pur (nivel anvodh, heb vern gallos)
  η = elastisita a'n devnydh ogasel a dhevnydh (talvos a godh a
      devnydh ynkressys pan wra tus dhe vos rychek)
  g = nivel kressans rakwelys a dhevnydh dhe bub penn

Rol hir-termyn ow-codha Green Book (nes, bandow dyllys lemmyn):
  Bledhynyow 0–30:    3.5%
  Bledhynyow 31–75:   3.0%
  Bledhynyow 76–125:  2.5%
  Bledhynyow 126–200: 2.0%
  Bledhynyow 201–300: 1.5%
  Bledhynyow 301+:    1.0%

Parametrow Stern Review: δ ≈ 0.1%, η = 1, g ≈ 1.3%  → r ≈ 1.4%
```

## Ensampel oberys

**Talvos hedhyw a £1 a ankamm gochyes yn 100 bledhen**, yn dan tri regim diskonting:

```
Nivel plat Green Book dhe-dermyn-berr (3.5%, sefys rag 100 bledhen):
  PV = 1 / (1.035)^100 ≈ 1 / 31.19 ≈ £0.032   (3.2 dynar)

Rol ow-codha Green Book (3.5% rag bledhynyow 1–30, 3.0% rag 31–75,
2.5% rag 76–100):
  faktor(1–30)  = 1.035^30  ≈ 2.807
  faktor(31–75) = 1.03^45   ≈ 3.782
  faktor(76–100)= 1.025^25  ≈ 1.854
  faktor hollek ≈ 2.807 × 3.782 × 1.854 ≈ 19.68
  PV = 1 / 19.68 ≈ £0.051   (5.1 dynar)

Kar-termyn pur ogas-seros yn stil Stern (r ≈ 1.4% plat):
  PV = 1 / (1.014)^100 ≈ 1 / 3.997 ≈ £0.250   (25.0 dynar)
```

An keth £1 a ankamm gochyes kans bledhen dhyworth lemmyn a dal 3.2p, 5.1p, po 25p hedhyw hepken herwydh pyneyl konvensyon diskonting a vo devnydhys — ystynnyans ogas eth-plyek a dhyghtya mar tremen projekt lehe klima gans kost uhel orth an dalleth ha tal kans bledhen dhyworth lemmyn an bar NPV pozitiv dhe holl. Hemma yw an meganikal a'n godhvos kresek a'n testen: orth kenyver nivel plat pozitiv a wordh, droktra pell lowr a'n dhe-dhos yw dilet yn aritmetek dhyworth an arvreythyans, heb vern y vruter gwir.

## Kevrenn gans ynjynnerieth medhelweyth

- Kenyver toul arvreythyans hir-orisont po kas negys (infrastrukter, omdhuvya klima, model pensyon) a dal gweythresa rol *ow-codha* an Green Book, nyns yw nivel plat unn — defolt plat a worr yn kuf bias erbyn-an-dhe-dhos moy krev es gidyans governans UK kyrghys.
- Nivel diskont ha orisont a dal bos pup prys diskwedhys avel parametrow gweladow, awditabyl yn software arvreythyans, gans an sensivita a'n kalkulyans dhedha diskwedhys yn eglur (kepar ha'n ensampel oberys a-ugh) — gudha an nivel yn restr konfig a wra dhe-dhesyr an "dewis etik kuddys" a warna dadhel Stern-Nordhaus; hemma a barth an poynt tretyans gwrys yn [kont kevalan natur](../kontyans-kapital-naturek/) ha dhe dhadhlas an testen [nivel diskont kevredhek](../skeul-diskont-sokel/) yn kebmyn.
- Le may fo budhekow program yn ervirys ynter-henedhyow (difres lyn, dasvewans kevalan natur, infrastrukter didhital hir-termyn), a [dehwelyans kost-budhek kevredhek](../dhivyskans-kost-prow-sokel/) a dal raportya devethyow yn dan lyha dew dybyans diskonting (savonek Green Book ha kas sensivita nivel-isel) yn le a unn arvysans poynt, may wel dyghtyoryon fatell wra dewis nivel diskont hepken kemmen an gorthyp.

## Trapow

- **Dyskwedhes unn NPV diskontys heb ystynnyans sensivita** — drefen fatell chanj nivel diskont hepken an gorthyp rag projektow hir-orisont, NPV unn-nivel a ynkress ewnder yn pwysek; raportya pup prys ystynnyans a'n lyha savonek Green Book ha senaryo nivel-isel.
- **Gweythresa an nivel plat dhe-dermyn-berr (3.5%) dhe arvreythyans kans-bledhynyow** — gidyans Green Book y honan a dyghtya an rol ow-codha ewn drefen bos an nivel plat jujys anhewnek wosa nes dhe 30 bledhen; y devnydhya hwath a dhegresya kostow hir-termyn.
- **Kemmeres δ (kar-termyn pur) avel parametrow teknegek pur** — nivel ogas-seros Stern ha'n talvos ynkresek uhella Green Book yw defendyes hepken avel savonegow etik a-dro dhe bygemmys pwys a dal an lemmyn dhe'n dhe-dhos, nyns yw nivyow "ewn" po "kamm" yn empyrek; software a dal dhiskwedhes an tybyans yn le a dhyskwedhes unn figyr avel ewn yn objektyv.

## Fentynyow

- Stern N. "The Economics of Climate Change: The Stern Review." Cambridge University Press, 2006.
- Ramsey FP. "A Mathematical Theory of Saving." The Economic Journal, 1928.
- Weitzman ML. "Gamma Discounting." American Economic Review, 2001.
- HM Treasury. "The Green Book: Central Government Guidance on Appraisal and Evaluation" (Annex 6,
  discount rate schedule).
- Nordhaus WD. "A Review of the Stern Review on the Economics of Climate Change." Journal of
  Economic Literature, 2007.
