# Social discount rate: kung paano pinahahalagahan ang hinaharap sa kasalukuyang pagpapasya

Kino-convert ng social discount rate ang mga hinaharap na gastos at benepisyo tungo sa halaga sa kasalukuyan upang maikumpara sa iisang batayan ang mga programang may kapalit na kumakalat sa loob ng ilang dekada. Ipinag-uutos ng Green Book ng HM Treasury ang bumababang iskedyul na nakaangkla sa 3.5% para sa unang 30 taon, batay sa Ramsey formula — tiyak at maitutukoy na bilang na naging buhay na argumentong pampulitika at etikal tuwing inilalapat sa mga pangmatagalang pangako gaya ng patakaran sa klima o imprastraktura.

## Bakit ito mahalaga

Ang isang pound na benepisyong matatanggap sa loob ng 30 taon ay hindi katumbas ng isang pound na benepisyong matatanggap ngayon, sa mga dahilang bahagyang tungkol sa pure time preference (mas gusto ng mga tao at lipunan ang mabuting bagay nang mas maaga) at bahagyang tungkol sa paglago (inaasahang mas mayaman ang lipunan sa hinaharap, kaya mas maliit ang halaga ng isang pound dito sa margin). Hinahango ng Annex 6 ng Green Book ang pamantayang discount rate ng UK mula sa Ramsey formula, na pinagsasama ang rate ng pure time preference, ang inaasahang rate ng paglago ng konsumo, at ang elasticity ng marginal utility ng konsumo, na nagbubunga ng nailathalang rate na 3.5% kada taon para sa taon 0–30, na bumababa ayon sa nailathalang iskedyul para sa taon 31 pataas (hanggang 1% para sa taon 301+). Umiiral ang iskedyul na ito dahil ang patag na 3.5% na pinagsama-sama sa loob ng isang siglo ay gagawing halos wala ang anumang pangmatagalang benepisyo — flood defence na nagliligtas ng buhay sa loob ng 80 taon, bawas-carbon na umiiwas sa pinsala sa loob ng 100 taon — sa present value, na itinuring ng Treasury na hindi kapani-paniwalang etikal na konklusyon para sa mga pangmatagalang desisyon sa imprastraktura at kapaligiran.

Pinagtatalunan ang discount rate dahil hindi ito neutral na teknikal na parametro: nakasaad dito ang pasya kung gaano ang dapat isakripisyo ng lipunan ngayon para sa mga taong hindi pa ipinapanganak. Gumamit ang Stern Review on the Economics of Climate Change (2006) ng discount rate na halos zero (pure time preference na malapit sa 0.1%), na nangangatwirang hindi maipagtatanggol sa etika ang pag-discount sa kapakanan ng mga susunod na henerasyon sa anumang halos katulad ng rate sa pamilihan kapag hindi na mababawi ang pinsala (sakunang pagbabago ng klima). Nangatwiran ang mga kritiko — lalo na si William Nordhaus — na pinalaki ng halos zero na rate ni Stern ang kaso para sa agarang gastusin sa klima dahil halos anumang gastos ngayon ay magmumukhang makatwiran laban sa halos hindi na-discount na benepisyo sa hinaharap. Hindi tungkol sa matematika ang di-pagkakasundo; tungkol ito sa kung kaninong balangkas etikal ang magtatakda ng rate, at nananatili itong karaniwang halimbawa kung bakit ang discount rate ay pasyang pampatakaran, hindi lang actuarial na input.

## Ang matematika

Ang Ramsey formula na pinagbabatayan ng rate ng Green Book:

```
r = ρ + η·g

kung saan:
  r = social discount rate
  ρ = rate ng pure time preference (kawalan ng pasensya + panganib ng sakuna)
  η = elasticity ng marginal utility ng konsumo
  g = inaasahang taunang rate ng paglago ng konsumo kada tao
```

Ang bumababang iskedyul ng Green Book (Annex 6, ilustratibo — tingnan ang kasalukuyang edisyon para sa eksaktong nailathalang talahanayan):

```
Taon 0–30:    3.5%
Taon 31–75:   3.0%
Taon 76–125:  2.5%
Taon 126–200: 2.0%
Taon 201–300: 1.5%
Taon 301+:    1.0%
```

Present value ng hinaharap na halaga:

```
PV = FV / (1 + r)^t
```

## Halimbawang kalkulasyon

**Flood defence scheme**: naghahatid ang isang proyekto ng £10 milyong naiwasang pinsala ng baha sa taon 40.

Sa patag na 3.5%: PV = 10,000,000 / (1.035)^40 ≈ £2.52 milyon — mukhang maliit ang benepisyo.

Sa bumababang iskedyul ng Green Book (3.5% para sa taon 0–30, 3.0% pagkatapos), pinagsasama-sama ang kalkulasyon sa 3.5% para sa unang 30 taon at 3.0% para sa taon 31–40:

```
PV = 10,000,000 / [(1.035)^30 × (1.03)^10]
   = 10,000,000 / [2.807 × 1.344]
   ≈ 10,000,000 / 3.773
   ≈ £2.65 milyon
```

Bahagyang itinataas ng bumababang iskedyul ang present value ng mga pangmatagalang benepisyo kumpara sa patag na mataas na rate — ito ang tahasang layunin ng iskedyul, dahil ang patag na 3.5% sa loob ng isang siglo ay magdi-discount sa £100 milyong benepisyo sa taon 100 tungo sa wala pang £3.3 milyon.

**Digital na imprastraktura**: ang paglipat ng pamahalaan sa cloud na nagkakahalaga ng £4 milyon ngayon ay inaasahang makaiiwas sa £500,000/taon na gastos sa maintenance ng legacy sa loob ng 15 taon. Sa 3.5%, ang present value ng annuity na iyon ay humigit-kumulang £500,000 × 11.52 (ang 15-taong annuity factor sa 3.5%) ≈ £5.76 milyon — malinaw na higit sa gastos na £4 milyon, kasong may positibong net present value na magmumukhang mas mahina sa walang-ingat na piniling mas mataas na rate (sa 7%, bumababa ang parehong annuity factor sa humigit-kumulang 9.11, na nagbibigay ng £4.56 milyon, positibo pa rin ngunit mas manipis ang margin).

## Kaugnayan sa software engineering

Karamihan ng business case sa software ay tumatakbo sa loob ng 3–5 taon, nasa loob ng patag na 3.5% na saklaw, kaya bihirang direktang tumama ang bumababang iskedyul — ngunit mahalaga ang pinagbabatayang disiplina sa anumang pamumuhunang teknolohikal ng pamahalaan na may mahabang buhay ng asset (pambansang platform, programa ng data infrastructure, kontratang tumatagal ng ilang dekada):

- Gamitin ang nailathalang rate ng Green Book sa halip na panloob na "hurdle rate" na hiniram sa pribadong pananalapi; aasahan ng mga auditor at tagasuri ng Treasury ang pamantayang iskedyul.
- Para sa mga benepisyong natatanggap pagkaraan ng maraming taon (pangmatagalang tipid sa maintenance ng platform, lumalagong halaga ng open-data ecosystem — tingnan ang [open data value](../halaga-ng-open-data-pagtataya-sa-halaga-ng-pampublikong-datos-na-walang-presyo/)), maaaring gawing negatibo mula positibo ng pasya sa discounting ang business case; gawing tahasang palagay ang rate at horizon, hindi nakabaong default.
- Direkta itong pumapasok sa [green-book-appraisal](../green-book-appraisal-pagtatasa-ng-mga-panukalang-paggasta-ng-pamahalaan-ng-uk/), ang five-case model na pormal na nangangailangan ng discounted cash flow, at sa [wellbeing-valuation](../wellbeing-valuation-pagpepresyo-ng-epekto-ng-patakaran-sa-kasiyahan-sa-buhay/), kung saan lumilitaw ang parehong tanong ng discounting para sa mga benepisyong wellbeing na hindi pera.
- Tingnan din ang [intergenerational equity at sustainability discounting](../intergenerational-equity-at-sustainability-discounting-katarungan-sa-pagitan-ng-mga-henerasyon-at-pagdidiskwento-ng-malayong-hinaharap/) para sa debateng Stern kontra Nordhaus na inilapat partikular sa pamumuhunan sa teknolohiyang pangkapaligiran at pang-klima.

## Mga karaniwang pagkakamali

- **Paggamit ng patag na rate para sa napakahabang horizon.** Umiiral ang bumababang iskedyul ng Green Book dahil ang pare-parehong rate ay nagmamaliit sa mga tunay na pangmatagalang benepisyo; suriin kung aling banda ang naaangkop sa halip na i-default sa 3.5% sa kabuuan.
- **Pagturing sa discount rate bilang neutral sa etika.** Ipinapakita ng away na Stern-Nordhaus na nakasaad sa rate ang pasyang pagpapahalaga tungkol sa mga susunod na henerasyon; binabago ng pagbabago nito kung aling mga programa ang mukhang makatwiran, kaya dapat itong ipahayag at ipagtanggol, hindi itago sa default ng spreadsheet.
- **Pagkalito sa social discount rate at pribadong gastos ng kapital.** Magkaibang konsepto ang gastos sa paghiram ng pamahalaan at hurdle rate ng pribadong sektor sa social rate na hinango sa Ramsey, at ang pagpapalit ng isa sa isa sa pampublikong appraisal ay karaniwang magbabaluktot sa resulta tungo sa pagpabor sa panandaliang kita.
- **Hindi pare-parehong pag-discount sa real at nominal na cash flow.** Real (inflation-adjusted) na rate ang rate ng Green Book; ang pag-discount ng mga nominal na cash flow dito ay malaking nagmamaliit sa present value.

## Mga sanggunian

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation", Annex 6 (2022). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Stern N. "The Economics of Climate Change: The Stern Review." HM Treasury, 2006.
- Nordhaus WD. "A Review of the Stern Review on the Economics of Climate Change." Journal of Economic Literature, 2007;45(3):686–702.
- Ramsey FP. "A Mathematical Theory of Saving." Economic Journal, 1928;38(152):543–559.
