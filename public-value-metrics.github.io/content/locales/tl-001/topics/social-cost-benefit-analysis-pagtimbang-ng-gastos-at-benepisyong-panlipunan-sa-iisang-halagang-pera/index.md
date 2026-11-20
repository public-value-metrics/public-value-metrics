# Social cost-benefit analysis: pagtimbang ng gastos at benepisyong panlipunan sa iisang halagang pera

Kino-convert ng social cost-benefit analysis ang bawat gastos at benepisyo ng isang patakaran o programa — may pamilihan man o wala — sa iisang yunit ng pera, dini-discount ang mga hinaharap na daloy tungo sa present value, at pinagbabawas ang mga ito upang makabuo ng iisang bilang: mas mabuti ba ang kalagayan ng lipunan dahil sa panukalang ito, at gaano kalaki?

## Bakit ito mahalaga

Ang SCBA ang default na kantitatibong pamamaraan sa economic case ng [Green Book appraisal](../green-book-appraisal-pagtatasa-ng-mga-panukalang-paggasta-ng-pamahalaan-ng-uk/): hinihingi ng gabay ng HM Treasury na ipakita ng mga panukala ang positibong net present social value (NPSV) saanman kapani-paniwalang mapepera ang mga benepisyo, gamit ang willingness-to-pay (kahandaang magbayad) bilang batayang prinsipyo ng pagtataya sa mga produktong walang pamilihan
(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>,
Chapter 5). Ang disiplinang ipinatutupad nito ay hindi magkapareho ang "social" cost-benefit analysis at ang appraisal ng pamumuhunan sa pribadong sektor: dapat isama ang mga gastos at benepisyong tumatama sa mga ikatlong panig na hindi kasali sa transaksyon (mga externality), dapat gamitin ang [social discount rate](../social-discount-rate-kung-paano-pinahahalagahan-ang-hinaharap-sa-kasalukuyang-pagpapasya/) sa halip na komersyal na gastos ng kapital, at dapat ilapat ang [distributional weighting](../distributional-weighting-pagtitimbang-ng-benepisyo-ayon-sa-kung-sino-ang-tumatanggap/) kung saan mas mabigat ang isang pound sa mahirap na sambahayan kaysa sa mayaman.

Doon bumibigay ang SCBA kung saan inaasahan ng mga kritiko: ang mga produktong walang katumbas sa pamilihan — malinis na hangin, pagkakaisa ng lipunan, halaga ng nailigtas na buhay — ay kailangang gawing pera gamit ang mga pamamaraan ng [stated preference](../stated-preference-valuation-pagtatantiya-ng-halaga-sa-pamamagitan-ng-pagtatanong-sa-mga-tao/) o [revealed preference](../revealed-preference-valuation-pagpapahalaga-mula-sa-aktuwal-na-gawi-sa-pamilihan/), o kailangang bumuo ng [shadow price](../shadow-pricing-pagtatakda-ng-halaga-sa-mga-bagay-na-walang-presyo-sa-pamilihan/). Kapag pinagtatalunan na ang pagpepera, hindi lang mahirap, inirerekomenda mismo ng Green Book na bumalik sa [cost-effectiveness analysis](../cost-effectiveness-analysis-sa-pamahalaan/) o [multi-criteria decision analysis](../multi-criteria-decision-analysis-pagmamarka-at-pagtitimbang-ng-mga-opsyon-sa-maraming-pamantayan/) sa halip na pilitin ang bilang na walang naniniwala.

## Ang matematika

```
NPSV = Σ [t=0 hanggang T] (Benefit_t − Cost_t) / (1 + r)^t

kung saan:
  Benefit_t = lahat ng napeperang benepisyo sa taon t, kasama ang mga produktong
              walang pamilihan na tinaya sa stated/revealed preference o shadow price
  Cost_t    = lahat ng napeperang gastos sa taon t, kasama ang opportunity cost
              ng mga yaman (tingnan ang ../opportunity-cost-in-public-spending/)
  r         = social discount rate (itinatakda ng HM Treasury ang 3.5% na bumababa
              sa mas mababang rate lampas sa taon 30, ayon sa Green Book Annex A)
  T         = appraisal period

Benefit-cost ratio (BCR) = Σ PV(Benefits) / Σ PV(Costs)
```

Ang BCR na higit sa 1 (o NPSV na higit sa zero) ay nagpapahiwatig ng net social value. Nilalagyan ng label ng mga kategorya ng value for money ng Green Book (gaya ng ginagamit sa appraisal ng transportasyon at imprastraktura) ang mga saklaw ng BCR: mababa sa 1.0 ay mahinang value for money, 1.0–1.5 ay mababa, 1.5–2.0 ay katamtaman, 2.0–4.0 ay mataas, at higit sa 4.0 ay napakataas. Ang sensitivity analysis — muling pagpapatakbo ng NPSV sa pesimistiko at optimistikong palagay — ay sapilitan, hindi opsyonal, dahil malalapad ang saklaw ng kawalang-katiyakan ng mga napeperang benepisyong walang pamilihan.

## Halimbawang kalkulasyon

**Lokal na awtoridad**: tinataya ng isang konseho ang £3m na pamumuhunan sa bagong network ng pagbibisikleta at paglalakad sa loob ng 20-taong appraisal period sa 3.5% na discount rate.

```
Mga gastos: £3m capital sa taon 0, £50,000/taon na maintenance (taon 1-20)
PV(maintenance) ≈ £50,000 × 14.2 (20-taong annuity factor sa 3.5%) ≈ £710,000
Kabuuang PV(mga gastos) ≈ £3.71m

Mga benepisyo (lahat napera sa mga nailathalang tool sa pagtataya ng DfT/WHO):
  Benepisyo sa kalusugan mula sa mas maraming pisikal na aktibidad: £180,000/taon
  Pagbaba ng absenteeism: £40,000/taon
  Decongestion (mas kaunting biyahe ng sasakyan): £60,000/taon
  Kabuuang daloy ng benepisyo: £280,000/taon
PV(mga benepisyo) ≈ £280,000 × 14.2 ≈ £3.98m

NPSV = £3.98m − £3.71m = +£0.27m
BCR = 3.98 / 3.71 = 1.07 → "mababang" value for money
```

Nalalampasan ng scheme ang pamantayan ngunit bahagya lamang; ang sensitivity run sa 20% na mas mababang tantiya ng benepisyo sa kalusugan (sumasalamin sa tunay na kawalang-katiyakan sa pagtataya ng pisikal na aktibidad) ay nagpapababa ng BCR sa ilalim ng 1.0 — kaya nga hinihingi ng Green Book na ilathala ang sensitivity table kasama ng pangunahing bilang, hindi lamang ang sentral na tantiya.

**Charity**: ang programa sa pag-iwas ng pagkamatay ng sanggol na nagkakahalaga ng £500,000/taon ay tinataya gamit ang value of a statistical life (VSL) — shadow price, hindi obserbadong presyo sa pamilihan — na humigit-kumulang £2.1m (ang bilang ng HM Treasury na na-update noong 2023, na hinango mismo sa mga pag-aaral ng stated preference). Ang pag-iwas sa isang pagkamatay ng sanggol kada taon laban sa gastos na £500,000 ay nagbibigay ng BCR na 4.2, malinaw na "napakataas" na value for money — ngunit ang buong resulta ay nakasalalay sa bilang ng VSL, kaya dapat ilantad ng anumang SCBA na gumagamit ng VSL ito bilang palagay, hindi katotohanan.

## Kaugnayan sa software engineering

Likas na balangkas ang SCBA para sa mga desisyon sa pamumuhunan sa platform at imprastraktura sa software ng pamahalaan — ang paghahambing ng shared identity platform sa mga point solution ng bawat departamento, halimbawa, ay nangangailangang mapera ang mga benepisyong gaya ng nabawasang gastos sa duplicate onboarding, nabawasang fraud, at mas mabilis na time-to-service na walang sariling presyo sa pamilihan. Dapat asahan ng mga engineer na bumubuo ng pinagbabatayang serbisyo na hihingan sila ng mga lead ng programa ng mga input sa pagsusuring ito: mga unit cost ng transaksyon (tingnan ang [cost per transaction](../gastos-bawat-transaksyon-sa-digital-na-serbisyo-ng-pamahalaan/)), inaasahang volume, at gastos ng degradation/downtime. Ang disiplinang pinakamahalagang angkatin: i-discount ang mga hinaharap na benepisyo, pangalanan nang tahasan ang counterfactual na baseline (tingnan ang [counterfactual analysis](../counterfactual-analysis-ano-ang-mangyayari-kung-walang-interbensyon/)), at huwag kailanman magharap ng iisang point estimate nang walang saklaw ng sensitivity nito.

## Mga karaniwang pagkakamali

- **Double-counting ng mga benepisyo.** Ang pagbibilang sa parehong "natipid na oras" at "produktibidad na nakuha mula sa oras na iyon" bilang magkahiwalay na linya ng benepisyo ay nagpapalaki ng kaso; ang natipid na oras ang benepisyo, ang paggamit nito sa susunod ay hindi karagdagang benepisyo maliban kung hiwalay na may ebidensya.
- **Pagkalimot sa mga displaced na gastos.** Ang scheme na naglilipat lang ng pagsisikip mula sa isang kalsada tungo sa iba, o ng fraud mula sa isang channel tungo sa iba, ay hindi lumikha ng netong benepisyong ipinahihiwatig ng headline NPSV nito — tingnan ang [displacement at attribution](../displacement-at-attribution-paglilipat-ng-benepisyo-at-pag-aangkin-ng-kredito-sa-resulta/).
- **Paggamit ng pribadong discount rate.** Ang paglalapat ng komersyal na gastos ng kapital (halimbawa 8–10%) sa halip na social discount rate ay sistematikong nagmamaliit sa mga pangmatagalang benepisyong pampubliko gaya ng kalusugan at kapaligiran — tingnan ang [social discount rate](../social-discount-rate-kung-paano-pinahahalagahan-ang-hinaharap-sa-kasalukuyang-pagpapasya/).
- **Pagpepera sa hindi pinagtatalunan at pagwawalang-bahala sa pinagtatalunan.** Kung dalawang-katlo ng benepisyo ng panukala ay tiyak na napeperang pagtitipid sa kahusayan at ang isang-katlo ay mahinang napeperang pakinabang sa wellbeing, tahimik na pinaghahalo ng headline NPSV ang matigas na bilang at malambot na bilang; iulat nang magkahiwalay ang mga ito.

## Mga sanggunian

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Chapter 5. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury. "Green Book supplementary guidance: value of a statistical life." 2023. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-value-of-a-statistical-life>
- Department for Transport. "TAG unit A1.1: cost-benefit analysis." Transport Analysis Guidance. <https://www.gov.uk/guidance/transport-analysis-guidance-tag>
