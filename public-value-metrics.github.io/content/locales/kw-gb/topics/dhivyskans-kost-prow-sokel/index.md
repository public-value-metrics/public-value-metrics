# Dhivyskans Kost-Prow Sokel (SCBA)

Dhivyskans kost-prow sokel a dreylya pub kost ha prow a bolici po towlen — marghas ha nyns-marghas — dhe unn unnenn arghans kebmyn, a ziskonta fluvyow a'n dyvenyth dhe dalvedh a-lemmyn, ha'n gwitha yn unn niver: a wra an arghans ma an gemmynieth gwell, ha pygemmys?

## Perag y talvos

SCBA yw an fordh kwantitativ ragdhisyth y'n kas ekonomek a [arvreythyans an Lyver Gwyrdh](../arvreythyans-green-book/): gidyans HM Treasury a erghys dhe arghansow diskwedhes talvedh present sokel net (NPSV) posytiv pan vo prowyow arghansys yn kredus, ow tevnydhya parys-dhe-baya avel an arghyewdh valyow kyns rag dafar na'th eus marghas (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>, Chapter 5). An dyssiplin a dhre yw na yw dhivyskans kost-prow "sokel" an keth ober avel arvreythyans ynworrans yn sektor privedh: res yw dhedhi hweri kostow ha prowyow a godh war drydhyes na yw rann a'n treuslans (externalities), res yw dhedhi devnydhya an [skeul diskont sokel](../skeul-diskont-sokel/) ha nyns kost kapital kenwerthek, ha res yw dhedhi gwaya [pesys dyllyans](../pwysheans-dasrannans/) pan vo punt moy a dhevnydh dhe deylu kleth es dhe unn rych.

Pan vo SCBA ow terri yw yn pur ple y hwithyoryon a'n gwayth: dafar heb haval marghas — ayr glan, unyans sokel, talvedh bewnans sawys — a res bos prisys dre dhevnydh a vedhodow [dewis deklarys](../prisya-dre-dewis-deklarys/) po [dewis diskwedhys](../gwerthya-dre-preferrans-diskwedhys/), po res yw dhrehevel [pris skeus](../pris-skeus/). Pan vo prisya dhe dhrokvynnya yn le bos kales hepken, an Lyver Gwyrdh y honan a dhesk mos war-dhelergh dhe [dhivyskans effeythusnes-kost](../dhivyskans-kost-effeythyans-yn-gwarnans/) po [dhivyskans dewis liesskeul](../dasserghyans-dewisow-liesmeus/) yn le gorra niver na grys den vyth.

## An matematik

```
NPSV = Σ [t=0 bys T] (Prow_t − Kost_t) / (1 + r)^t

may ma:
  Prow_t = oll prowyow prisys y'n bledhen t, dhe gonta dafar heb marghas
           prisys dre dhewis deklarys/diskwedhys po pris skeus
  Kost_t = oll kostow prisys y'n bledhen t, dhe gonta kost chons
           an resowrsow (gwelewgh ../opportunity-cost-in-public-spending/)
  r      = skeul diskont sokel (HM Treasury a settya 3.5% ow ysegi dhe
           skeulyow isella wosa bledhen 30, herwydh Annex A an Lyver Gwyrdh)
  T      = termyn an arvreythyans

Skeul prow-kost (BCR) = Σ PV(Prowyow) / Σ PV(Kostow)
```

BCR a-ugh 1 (po NPSV a-ugh zero) a dhiskwedh talvedh sokel net. Klassys talvedh rag arghans an Lyver Gwyrdh (avel devnydhys yn arvreythyans kerdhes hag ynfrastrukter) a etikety skeulyow BCR: a-dhann 1.0 yw talvedh rag arghans isel-fowt, 1.0–1.5 yw isel, 1.5–2.0 yw kres, 2.0–4.0 yw uhel, ha dres 4.0 yw uhel-dres-musur. Dhivyskans tanowder — daredya NPSV yn tybyansow drog ha da — yw res, nyns dewisek, drefen bos dhe browyow nyns-marghas prisys ledyow ankerti ledan.

## Ensampel oberys

**Auturdhes leel**: konsel a arvreythya ynworrans a £3m yn rosweyth nowydh rag marghogeth ha kerdhes dres termyn arvreythyans a 20 bledhen orth skeul diskont 3.5%.

```
Kostow: £3m kapital yn bledhen 0, £50,000/bledhen mentenans (bledhynyow 1-20)
PV(mentenans) ≈ £50,000 × 14.2 (fattor annuyta 20 bledhen orth 3.5%) ≈ £710,000
PV(kostow) hollek ≈ £3.71m

Prowyow (oll prisys dre arfowyow talvedhyans DfT/WHO dyllys):
  Prow yeghes dhiworth gweythres korfek moy: £180,000/bledhen
  Dhiminhans absens: £40,000/bledhen
  Dhiyskevya (le tremenyansow kerry): £60,000/bledhen
  Fluv prowyow hollek: £280,000/bledhen
PV(prowyow) ≈ £280,000 × 14.2 ≈ £3.98m

NPSV = £3.98m − £3.71m = +£0.27m
BCR = 3.98 / 3.71 = 1.07 → talvedh rag arghans "isel"
```

An towlen a dremen an barr mes yn tanow; ron dhivyskans tanowder orth estymyans prow yeghes 20% isella (ow tiskwedhes ankerti ynwir yn talvedh gweythres korfek) a dro BCR a-dhann 1.0, ha henna yw an perag y hwytha an Lyver Gwyrdh bos an tabel tanowder dyllys ryb an niver penn, ha nyns an estymyans kresek hepken.

**Kharite**: towlen difres merwolieth flehes a gost £500,000/bledhen yw arvreythys dre dalvedh bewnans statistek (VSL) — pris skeus, nyns pris marghas gwelys — a dro dhe £2.1m (an niver nowydhys 2023 HM Treasury, deryvys y honan dhiworth studhyansow dewis deklarys). Difres unn verwolieth flehes y'n bledhen erbyn kost £500,000 a re BCR 4.2, yn tien "uhel-dres-musur" rag talvedh rag arghans — mes oll an sewyans a bys war niver VSL, hag yw an perag a dal pub SCBA a dhevnydh VSL y dhiskudha avel tybyans, ha nyns avel fakt.

## Kevrenn gans ynjynnerieth medhelweyth

SCBA yw an framyans naturek rag dewisyow ynworrans platform ha ynfrastrukter yn medhelweyth an governans — keshes platform identita rannys erbyn solusyonow poynt a rannow, rag ensampel, a wra gul res prisya prowyow kepar ha kost dyskans dhe gevrenn leskys, le a dhelwre, ha termyn-dhe-servis skwithys na'th eus pris marghas dhedha dhodho y honan. Ynjynnoryon a dhrehevel an servis a dal gortos bos towlen-ledyoryon ow pesy mewnbosow rag an dhivyskans ma: kostow unnenn treuslansow (gwelewgh [kost rag pub treuslans](../kost-rag-pub-trehans/)), levyow gwaytys, ha kostow dhiskwedhes/tyller kosel. An dyssiplin a dal moyha dhe dhre: diskonta prowyow a'n dyvenyth, henwel linenn-vasys konterfaktek yn skler (gwelewgh [dhivyskans konterfaktek](../dhivyskans-konterfaktek/)), ha na dhiskwedhes nevra unn estymyans poynt heb y ystynnans tanowder.

## Trapow

- **Konta prowyow dewblek.** Konta "termyn sawys" ha "produktivita gwrys a'n termyn na" avel linenow prow dhihaval a wra gorarvreythya an kas; termyn sawys yw an prow, ha'y devnydh dhelergh nyns yw prow ekstra marnas an kefyr seulys dhodho yn dihaval.
- **Gasa kostow displasys a-ves.** Towlen a dreus pennrewl a'n unn fordh dhe unn aral, po a dreus trik a'n unn kanel dhe unn aral, na grias an prow net a dhisklerya y NPSV penn — gwelewgh [displasyans ha attributyans](../displasyans-ha-attribusyans/).
- **Devnydhya skeul diskont privedh.** Gweles kost kapital kenwerthek (lavar 8–10%) yn le an skeul diskont sokel a dhiminh yn kosyth talvedh prowyow poblek hir-orizon avel gwellheans yeghes ha dyvarthyans — gwelewgh [skeul diskont sokel](../skeul-diskont-sokel/).
- **Prisya an nyns-kontestys ha gwevya yn dhiwar an kontestys.** Mar pyth dew-dhrehen a brow towlen yw savyans effeythusnes prisys yn kreder ha unn-dhrehen yw gwaynans da-vos prisys yn le kryghyk, an NPSV penn a gemmysk yn syth niver kales gans unn medh; rapportewgh anedha dihaval.

## Fentynyow

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Chapter 5.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury. "Green Book supplementary guidance: value of a statistical life." 2023.
  <https://www.gov.uk/government/publications/green-book-supplementary-guidance-value-of-a-statistical-life>
- Department for Transport. "TAG unit A1.1: cost-benefit analysis." Transport Analysis Guidance.
  <https://www.gov.uk/guidance/transport-analysis-guidance-tag>
