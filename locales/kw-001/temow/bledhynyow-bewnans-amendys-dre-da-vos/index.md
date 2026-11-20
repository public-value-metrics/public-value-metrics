# Bledhynyow Bewnans Amendys dre Da-vos (WELLBY)

WELLBY yw unn poynt ekstra a vodh bewnans, orth skeul da-vos standard 0–10, rag unn den rag unn bledhen. Yw an kehaval strukturek a'n QALY devnydhys yn ekonomieth yeghes — unn unnenn a asa keshes dyvynsyow na'th eus tra erel yn kemmyn — mes drehevys war da-vos subjektiv yn le stadyow yeghes klinikel, ha settys yn "Wellbeing guidance for appraisal: supplementary Green Book guidance" HM Treasury (2021).

## Perag y talvos

Arvreythyans kost-prow a res unnenn kebmyn dhe gesskes grant klub yowynk erbyn towlen diogelwith kerdhes erbyn servis yeghes spyrys, na rann unn musur sewyans. Ekonomieth yeghes a dhiwedhas hemma rag interventyonow klinikel gans an QALY: bledhen vewnans amendys dre ansawor, pesys dhiworth 0 (marow) dhe 1 (yeghes leun). Gidyans da-vos HM Treasury a ystynn an keth lojik dhe wari poblek nyns-yeghes, ow tevnydhya govyn bodh-bewnans harmonyzys an ONS ("Dres oll, pygemmys a vodh os ty gans dha vewnans lemmyn?", gorthebys 0–10) avel skeul sewyans yn le tennor stad yeghes. WELLBY a 1 a styr bodh bewnans unn den ow yskynna kemmys a unn poynt leun rag unn bledhen (po, yn kehaval, bodh dek den ow yskynna 0.1 poynt a gen unn rag bledhen — WELLBYs a sommys dres poblans kepar hag QALYs). Gidyans HM Treasury a settya talvedh arghans skeusek rag pub WELLBY (dro dhe £13,000, prisyow 2019/20) deryvys dre gesstowl data da-vos subjektiv gans fordhow erel dhe dalvedh bledhen vewnans, ow ri dhe dhivyskoryon fordh dhe brisya sewyansow — dhiminhans unnik-kowethyans, unyans kemmynieth, kavos spas gwyrdh — na ylli teknegow [prisya da-vos](../prisya-da-vos/) kyns marnas deskrifa, nyns keshes orth live kebmyn gans gwari yeghes po diogelwith.

## An matematik

```
WELLBY = Δ bodh bewnans (skeul 0–10) × nivver bledhynyow a bys an chanj
        (sommys dres oll an dus afektys)

Prow da-vos prisys = WELLBYs gwrys × talvedh rag pub WELLBY (talvedh dhelergh HMT)

kehaval QALY = Δ nyttyl stad yeghes (skeul 0–1) × bledhynyow bewys yn stad na
```

An skeul bodh 0–10 ha skeul nyttyl QALY 0–1 na yllir aga chanjya an eyl rag y gila heb gam treylyans; gidyans HM Treasury a dhadhla kesstowl an dhew may na vo, rag ensampel, interventyon yeghes arvreythys yn QALYs hag unn sokel arvreythys yn WELLBYs dewblek-kontys yn kudh po gesys dihaval a-ji an keth [arvreythyans an Lyver Gwyrdh](../arvreythyans-green-book/).

## Ensampel oberys

**Servis unnik-kowethyans auturdhes leel**: towlen kowethyans a servya 400 trigys hen unnik. Anketow ledyans a dhiskwedh bodh bewnans kres ow yskynna dhiworth 5.2 dhe 6.0 (gwaynans a 0.8 poynt), ha'n effeyth yw estymys dhe bys 2 vledhen kyns hwithra.

```
WELLBYs = 400 den × 0.8 poynt × 2 vledhen = 640 WELLBY

Talvedh prisys = 640 × £13,000 = £8,320,000
```

Erbyn kost towlen bledhenek a £300,000 (£600,000 dres 2 vledhen), skeul prow-kost yw dro dhe 8,320,000 / 600,000 ≈ **13.9:1** — niver a yll lemmyn esedha y'n keth tabel arvreythyans avel kost-rag-pub-QALY-sawys towlen yeghes po sawyans termyn jorna towlen kerdhes.

**Kharite, skeul byghan**: towlen arts kemmynieth a dhrehedh 50 kemeryas gans gwaynans bodh musurys a 0.3 poynt, ow pesya 1 bledhen.

```
WELLBYs = 50 × 0.3 × 1 = 15 WELLBY
Talvedh prisys = 15 × £13,000 = £195,000
```

## Kevrenn gans ynjynnerieth medhelweyth

- Kenyver servis a wra fas dhe dhinasek a wra kuntell hwath item anketa bodh bewnans po da-vos (meur a blatformow auturdhes leel ha yeghes-ha-konfort a wra, wosa peder govyn da-vos standard an ONS) a yll jornya WELLBYs yn ewn dhiworth pipewyes data a-lemmyn yn le komisya dhivyskans ekonomek arbennik rag pub chanj servis.
- WELLBYs a re dhe vagasow ynjynnerieth a dhrehav rag rapportya [Deres Talvedh Sokel](../deres-talvedh-sokel/) po [dehwelans sokel war ynworrans](../dehwelans-sokel-war-ynworrans/) rannans dhe-dhelergh kenedhlek standard, skoodhys gans HM Treasury, ow kesgemmya kesvys a "skorys effeyth" arbennik na yllir keshes dres kevambosow po gwerthoryon.
- Drefen bos WELLBYs additivus dres tus ha termyn, y a gesplek yn glan dhe'n sort a argel sewyans live poblans devnydhys yn systemow [atebyans selys war sewyansow](../atebelder-selys-war-sewyansow/) — bord servis a yll rapportya WELLBYs kuntellys gwrys rag pub kwarter kepar dell rapport system yeghes QALYs gwaynys.

## Trapow

- **Tybya bos gwaynansow bodh omrapportys oll attributys dhe'n interventyon** — heb konterfaktek (bagas keshes po dhelinyans kyns/wosa gans kontrollow), na yllowgh dyvarthya an gwaynans WELLBY a'n tuedh kebmyn; gwelewgh [dhivyskans konterfaktek](../dhivyskans-konterfaktek/).
- **Kemmeski WELLBYs ha QALYs yn unn sommen heb kesstowl** — gidyans HM Treasury a leveryth yn skler bos skeulyow dihaval dhe'n dhew hag teoriow talvedh yn dann dihaval; aga sommya yn syml a dhewblek-kont da-vos kesplegys.
- **Devnydhya talvedh arghans dhelergh heb kritegi** — an niver £-rag-pub-WELLBY yw estymyans kres kenedhlek gans bandow ankerti ynwir; gidyans HM Treasury a erghys dhivyskans tanowder, nyns hy gul skeul chanj fast.

## Fentynyow

- HM Treasury. "Wellbeing guidance for appraisal: supplementary Green Book guidance." (2021)
  <https://www.gov.uk/government/publications/wellbeing-guidance-for-appraisal-supplementary-green-book-guidance>
- ONS. "Personal well-being user guidance" (the four standard wellbeing questions).
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing>
- HM Treasury. "The Green Book: Central Government Guidance on Appraisal and Evaluation."
