# Standardys Servys ha Metrikow Trensaksyon

An GOV.UK Service Standard yw rol-lyver 14-poynt governans an Pow Unys rag byldya ha dyllo servys
didjital poblek, hag y teu gans set byghan, ordenys a vetrikow trensaksyon kwantitek — kost rag
trensaksyon, rate kowlwrians, kemeres didjital, ha plesyans usyer — a dal skipasow dhe dhyllo
rag pub servys bew a'n governans kresennek. Warbarth, an standard ha'n metrikow yw
spesyalyzans oberyans, pub dydh, a'n framwythyow ledhanna a werth poblek ha KPI y'n
gwrysva ma, tuchys yn ewn orth skipasow dyllans medhelweyth.

## Perag y talvos

An Service Standard, kwithys yn service manual GOV.UK, a wovyn pub apposyans poynt-yn-termyn
(alfa, beta, bew) a servys didjital governans dhe dhiskwedhes — yn mesk y 14 poynt — bos
an skipa ow konvedhes othemow an usyoryon, ow oberi yn skipa liesdysgyblyn, ow iterya ha
gwellhe yn fenowgh, ha ow *gwerthya ostelow, systemyow, ha fordhow lavur*. Yn termyn kens hemma
a esedhas ryb Platform Performans poblek may dyllas pub servys bew y data trensaksyon yn ygor;
an platform na re beu dhe-ves, mes an oblegh dhe vesurya ha dyllo an peswar metrik kresek a
bys dre dyskans "measuring success" an service manual. An acheson prag y dyffer dhyworth
ostel KPI medhelweyth hollek yw bos an metrikow gwrys yn spesyfek avel unn model arghansek
kelmys, na peswar skor yn-hepkorrys: an kes sparyans kowl rag governans didjital — an
Digital Efficiency Report an Government Digital Service a gafas trensaksyonow didjital
ogas dhe 20 a dhegow moy gwann es dre bellgows ha ogas dhe 50 gwith moy gwann es fas-orth-fas rag
servyssow governans leel kehevelys — a dheu dhe wir hepken mara wra an rate kowlwrians gwitha
uhel ha kemeres didjital dhe dhevi yn gwir, na hepken ynkorsya kanal gwann ryb unn ker heb chanj.

## An matematik

```
Kost rag trensaksyon = kost hollek dyllo servys / niver a drensaksyonow kowlwrys
Rate kowlwrians      = trensaksyonow kowlwrys / trensaksyonow dallathys × 100
Kemeres didjital     = trensaksyonow kanal didjital / trensaksyonow oll kanalow × 100
Plesyans usyer       = % plesys + pur blesys, arhwith 5-poynt y'n servys

Sparyans treusfera kanal = kevatal trensaksyon × treusfera kemeres × (kost rag trensaksyon
                           war an kanal koth − kost rag trensaksyon yn didjital)

Kost goulenn fyllel = (1 − rate kowlwrians) × trensaksyonow assayes yn didjital ×
                      kost an kanal mos-yn-dadn a usyaf an usyoryon na yn y le
```

## Ensampel oberys

**Servys nowydhans lisans governans kresennek skwith**, 2 milyon trensaksyon/bledhen,
lemmyn 65% pellgows (£3.00/trensaksyon) ha 35% didjital (£0.30/trensaksyon), rate kowlwrians
80%. Dasdesinyans erbynn an Service Standard 14-poynt a ughell kemeres didjital dhe 60% ha
kowlwrians dhe 92%:

```
Sparyans treusfera kemeres = 2,000,000 × 0.25 × (3.00 − 0.30) = £1,350,000/bledhen

Kost goulenn fyllel, kens:
  2,000,000 × 0.35 × (1 − 0.80) × £3.00 = £420,000/bledhen (an dhelergh a drehedh dhe bellgows)

Kost goulenn fyllel, wosa:
  2,000,000 × 0.60 × (1 − 0.92) × £3.00 = £288,000/bledhen

Sparyans goulenn fyllel net = £420,000 − £288,000 = £132,000/bledhen

Sparyans bledhynnek hollek ≈ £1,350,000 + £132,000 = £1,482,000/bledhen
```

An aritmetik a wra splann prag nyns yw rate kowlwrians metrik eil: heb an gwellheans dhyworth
80% dhe 92%, sparyans treusfera kemeres a vensa bos kemmeres yn rann dhe-dhelergh dre
oulenn fyllel ow tirva usyoryon didjital serrys yn ewn dhe'n kanal pellgows ker.

## Kevrenn gans ynjynnerieth medhelweyth

An peswar metrik ma yw ensampel oberi a ostel kost-konsekvens: unn metrik kost settys ryb
tri metrik sewyans/kerensys, heb bos kolapsys pup prys dhe unn skor — an keth dysgyblyn
dadhlys yn [KPIs sektor poblek](../kpis-an-sektor-poblek/). Rag jynnyoryon hemma a dorr dhe
lavur kuntel, perghenegys: rate kowlwrians yw kudyn instrumentya kanalow, ha pub poynt
gasa y'n viaj yw, yn prynsipel, a yll bos kavys ha kyfys; kost rag trensaksyon a wovyn
kowntyans kost unita gwir ow kemeres kostow gweres staff ha kanal paper, na hepken spenna
ostya kommol (mir orth [kost rag trensaksyon](../kost-rag-pub-trehans/) ha
[kost hollek perghennogeth yn IT governans](../kost-perthyans-hollek-yn-tt-an-governans/));
ha kemeres didjital yw metrik kehevelder yn gwisk effeythusder — an sevysogyon na yll po na vynn
treusfera kanal yw yn fynsen moy koth, anaf, po heb kevrys didjital, ytho degha kanal
sinsek a dreylya "sparyans" dhe dhisker les (mir orth [kevrys didjital](../kefrysans-didjital/) ha
[sparyansow treusfera kanal](../sawyansow-treylyans-kanel/)). An standard 14-poynt y honan yw an
speksyfikasyon argerdh a-dhelergh an niverow ma — mir orth
[standard servys didjital](../savonek-servis-didhital/) rag an standard yn leun, ha
[metrikow plesyans sevysogyon](../metrikow-lowender-sitisenyon/) rag fatell dheu an figur plesyans
omma dhe vesuryans fydh ledanna.

## Trapow

- **Kemeres gwaynys dre degha an kanal aral**: degha linenn pellgows a ughell kerensys kemeres
  didjital yn aritmetek ha dhe-dewlel goulenn fyllel war pyth kanal a bys (pur vynsh fordh
  gweres-didjital po fas-orth-fas moy ker); messurya pup prys kost hollek an system, na'n
  rate yn unn.
- **Messurya rate kowlwrians dhyworth gradh dew an funnel**: dallath konta "dallathys" wosa
  an kynsa poynt gasa gwir a worra an rate kowlwrians yn gwell ha kudha an kolli
  kyfys moyha.
- **Kost rag trensaksyon heb skoodh gweres-didjital**: kost unita didjital hepken a ankev
  termyn staff spennys ow gweres usyoryon na yll omservya a dhisklyv gwir kost an kanal.
- **Dyllo metrikow heb diskrifans kevrennys dres servyssow**: "trensaksyon" ha "kowlwrys" a
  styr dyffrans yn skipasow servys dyffrans marnas an diskrifansow vo standardys ha versionys,
  ow gwil keheveli dres servyssow anfydh.

## Fentynyow

- GOV.UK Service Manual, "The Service Standard." <https://www.gov.uk/service-manual/service-standard>
- GOV.UK Service Manual, "Measuring Success — Data You Must Publish."
  <https://www.gov.uk/service-manual/measuring-success/data-you-must-publish>
- GOV.UK, "Digital Efficiency Report."
  <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
