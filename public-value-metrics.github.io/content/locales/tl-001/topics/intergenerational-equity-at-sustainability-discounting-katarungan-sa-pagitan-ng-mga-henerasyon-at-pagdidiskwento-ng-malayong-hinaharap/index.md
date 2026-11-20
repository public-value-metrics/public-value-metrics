# Intergenerational Equity at Sustainability Discounting: katarungan sa pagitan ng mga henerasyon at pagdidiskwento ng malayong hinaharap

Karaniwang kasanayan sa pampublikong appraisal ang pagdidiskwento ng mga gastos at benepisyo sa hinaharap pabalik sa present value — tingnan ang [social discount rate](../social-discount-rate-kung-paano-pinahahalagahan-ang-hinaharap-sa-kasalukuyang-pagpapasya/) — ngunit anumang positibong discount rate, na pinagsama-sama sa loob ng mga dekada o siglo, ay pinaliliit ang malayong hinaharap tungo sa halos zero sa termino ng ngayon. Para sa mga desisyong may bunga sa isang siglo o higit pa — pagbabago ng klima, nuclear waste, pagkawala ng biodiversity, sustainability ng pension — nagiging etikal na usapin ang matematikal na katotohanang iyon: ang karaniwang pagdidiskwento ay maaaring magpatingin sa sakunang pinsala sa mga susunod na henerasyon, sa present-value na termino, na halos hindi na sulit iwasan.

## Bakit ito mahalaga

Ang Ramsey equation, na hinango ni Frank Ramsey noong 1928, ay naghahati sa discount rate sa dalawang bahagi: pure time preference (δ, gaano natin basta mas gusto ang ngayon kaysa mamaya, anuman ang yaman) at ang epekto ng paglago ng yaman (η×g, gaano tayo nagdidiskwento dahil inaasahang mas mayaman ang mga susunod na henerasyon, kaya mas kaunti ang halaga ng dagdag na pound sa kanila). Ang karaniwang pangmatagalang discount rate ng UK Green Book ay nakabatay sa equation na ito at sumusunod sa *bumababang* iskedyul sa halip na patag na rate — disenyong nag-ugat sa gawa ni Martin Weitzman sa "gamma discounting," na nagpapakitang kapag hindi tiyak ang discount rate sa hinaharap, ang certainty-equivalent na rate na dapat mong ilapat ay matematikal na bumababa sa paglipas ng panahon, dahil nangingibabaw ang mga senaryong mababa ang rate habang lumalayo ang tingin. Pinalayo pa ng Stern Review on the Economics of Climate Change (2006), na pinamunuan ni Sir Nicholas Stern, ang etikal na debate: ipinaglaban ni Stern na dapat itakda malapit sa zero ang pure time preference (gumamit siya ng δ ≈ 0.1%, na sumasalamin lamang sa maliit na posibilidad ng sakunang pagwawakas ng sibilisasyon, hindi tunay na kagustuhan sa kasalukuyan kaysa sa hinaharap), na nagbunga ng mas mababang epektibong discount rate kaysa sa karaniwang gawi ng Green Book at, kaakibat nito, mas malaking argumento sa kasalukuyan para sa aksyong pangklima. Nagtalo ang mga kritiko (higit na si William Nordhaus) na etikal na maipagtatanggol ang halos zero na rate ni Stern ngunit hindi tugma sa aktuwal na naobserbahang gawi sa pag-iimpok at pamumuhunan. Hindi maliit na talababa ang hindi pagkakasundong ito — ito ang pinakamalaking dahilan kung bakit ang dalawang parehong mahigpit na ekonomista ay maaaring umabot sa magkalayong konklusyon tungkol sa kung gaano dapat isakripisyo ng kasalukuyang henerasyon para sa hinaharap, at ito ang dahilan kung bakit dapat ilantad ng software na sumusuporta sa appraisal ng pangmatagalang pampublikong pamumuhunan ang mga palagay nito sa pagdidiskwento sa halip na ibaon sa default ng spreadsheet.

## Ang matematika

```
Ramsey equation:   r = δ + η × g

  r = social discount rate
  δ = pure time preference (rate ng kawalan ng pasensya, anuman ang yaman)
  η = elasticity ng marginal utility ng pagkonsumo (lumiliit na halaga ng
      dagdag na pagkonsumo habang yumayaman ang mga tao)
  g = inaasahang growth rate ng per-capita na pagkonsumo

Bumababang pangmatagalang iskedyul ng Green Book (tinatayang, kasalukuyang inilathalang banda):
  Taon 0–30:    3.5%
  Taon 31–75:   3.0%
  Taon 76–125:  2.5%
  Taon 126–200: 2.0%
  Taon 201–300: 1.5%
  Taon 301+:    1.0%

Mga parametro ng Stern Review: δ ≈ 0.1%, η = 1, g ≈ 1.3%  → r ≈ 1.4%
```

## Halimbawang kalkulasyon

**Halaga ngayon ng £1 ng naiwasang pinsala sa loob ng 100 taon**, sa ilalim ng tatlong rehimen ng pagdidiskwento:

```
Patag na panandaliang rate ng Green Book (3.5%, pare-pareho sa loob ng 100 taon):
  PV = 1 / (1.035)^100 ≈ 1 / 31.19 ≈ £0.032   (3.2 pence)

Bumababang iskedyul ng Green Book (3.5% para sa taon 1–30, 3.0% para sa taon 31–75,
2.5% para sa taon 76–100):
  factor(1–30)  = 1.035^30  ≈ 2.807
  factor(31–75) = 1.03^45   ≈ 3.782
  factor(76–100)= 1.025^25  ≈ 1.854
  kabuuang factor ≈ 2.807 × 3.782 × 1.854 ≈ 19.68
  PV = 1 / 19.68 ≈ £0.051   (5.1 pence)

Pure time preference na halos zero ayon kay Stern (r ≈ 1.4% patag):
  PV = 1 / (1.014)^100 ≈ 1 / 3.997 ≈ £0.250   (25.0 pence)
```

Ang parehong £1 ng naiwasang pinsala sa loob ng isang siglo ay nagkakahalaga ng 3.2p, 5.1p, o 25p ngayon depende lamang sa kombensyon ng pagdidiskwento — halos walong beses na saklaw na nagtatakda kung ang proyektong pangpapagaan ng klima na mataas ang paunang gastos at ang kabayaran ay isang siglo pa ang layo ay makapapasa man lang sa positibong NPV. Ito ang mekanismo sa likod ng sentral na babala ng paksang ito: sa anumang makabuluhang positibong patag na rate, ang sapat na malayong pinsala sa hinaharap ay aritmetikal na binubura sa appraisal, anuman ang tunay na bigat nito.

## Kaugnayan sa software engineering

- Anumang tool ng pangmatagalang appraisal o business case (imprastraktura, climate adaptation, pension modelling) ay dapat magpatupad ng *bumababang* iskedyul ng Green Book, hindi iisang patag na rate — ang default na patag na rate ay tahimik na naglalagay ng mas malakas na bias laban sa hinaharap kaysa sa tinutukoy ng kasalukuyang gabay ng pamahalaan ng UK.
- Dapat laging nakalantad bilang nakikita at nai-audit na parametro ang discount rate at horizon sa software ng appraisal, kasama ang tahasang pagpapakita ng sensitibidad ng kalkulasyon sa mga ito (gaya ng sa halimbawa sa itaas) — ang pagbabaon ng rate sa config file ay nag-aanyaya ng mismong "nakatagong etikal na pagpili" na binabalaan ng debate nina Stern at Nordhaus; kaparis ito ng punto sa transparency sa [natural capital accounting](../natural-capital-accounting-pagsasama-ng-kalikasan-sa-mga-ulat-ng-yaman-at-desisyon/) at pinagbabatayan ng paksang [social discount rate](../social-discount-rate-kung-paano-pinahahalagahan-ang-hinaharap-sa-kasalukuyang-pagpapasya/) sa pangkalahatan.
- Kung tahasang intergenerational ang mga benepisyo ng programa (flood defence, pagpapanumbalik ng natural capital, pangmatagalang digital na imprastraktura), dapat mag-ulat ang [social cost-benefit analysis](../social-cost-benefit-analysis-pagtimbang-ng-gastos-at-benepisyong-panlipunan-sa-iisang-halagang-pera/) ng mga resulta sa hindi bababa sa dalawang palagay sa pagdidiskwento (karaniwang Green Book at isang kasong sensitibidad na mababa ang rate) sa halip na iisang point estimate, upang makita ng mga tagapagpasya kung paano nagagalaw ng pagpili ng discount rate lamang ang sagot.

## Mga karaniwang pagkakamali

- **Pagpapakita ng iisang dinidiskwentong NPV na walang saklaw ng sensitibidad** — dahil sa laki ng pagbabago ng sagot ng discount rate lamang para sa mga proyektong mahaba ang horizon, ang NPV na iisang rate ay malaking nagpapalabis sa katumpakan; palaging mag-ulat ng saklaw na sumasaklaw man lang sa karaniwang Green Book at sa senaryong mababa ang rate.
- **Paglalapat ng panandaliang patag na rate (3.5%) sa appraisal na tumatagal ng mga siglo** — partikular na itinatakda ng mismong gabay ng Green Book ang bumababang iskedyul dahil itinuring na hindi angkop ang patag na rate pagkalampas ng humigit-kumulang 30 taon; ang paggamit nito pa rin ay nagmamaliit sa pangmatagalang gastos.
- **Pagtrato sa δ (pure time preference) bilang purong teknikal na parametro** — parehong maipagtatanggol lamang ang halos zero na halaga ni Stern at ang mas mataas na implisitong halaga ng Green Book bilang mga etikal na posisyon tungkol sa kung gaano kabigat ang utang ng kasalukuyan sa hinaharap, hindi bilang "tama" o "mali" na numerong empirikal; dapat gawing nakikita ng software ang palagay sa halip na ipakita ang isang bilang na parang obhetibong tama.

## Mga sanggunian

- Stern N. "The Economics of Climate Change: The Stern Review." Cambridge University Press, 2006.
- Ramsey FP. "A Mathematical Theory of Saving." The Economic Journal, 1928.
- Weitzman ML. "Gamma Discounting." American Economic Review, 2001.
- HM Treasury. "The Green Book: Central Government Guidance on Appraisal and Evaluation" (Annex 6,
  discount rate schedule).
- Nordhaus WD. "A Review of the Stern Review on the Economics of Climate Change." Journal of
  Economic Literature, 2007.
