# Wellbeing valuation: pagpepresyo ng epekto ng patakaran sa kasiyahan sa buhay

Pinepresyuhan ng wellbeing valuation ang epekto ng isang patakaran nang direkta sa mga terminong kasiyahan sa buhay, gamit ang WELLBY (wellbeing-adjusted life year) bilang yunit nito — ang isang WELLBY ay katumbas ng isang-puntos na pagbabago sa 0–10 na sukatan ng kasiyahan sa buhay, na tumatagal nang isang taon. Ito ang opisyal na pinahihintulutang alternatibo ng HM Treasury sa pagpepera ng bawat benepisyo sa pamamagitan ng willingness-to-pay.

## Bakit ito mahalaga

Pormal na dinala ng "Wellbeing guidance for appraisal: supplementary Green Book guidance" ng HM Treasury (2021,
<https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>)
ang datos ng subjective wellbeing sa appraisal ng sentral na pamahalaan, na nagbibigay sa mga analyst ng ruta upang bigyang-halaga ang mga kinalabasan — ugnayang panlipunan, mental health, kaligtasan, pakikilahok sibiko — na hirap presyuhan nang kapani-paniwala ng mga pamamaraan ng [stated preference](../stated-preference-valuation-pagtatantiya-ng-halaga-sa-pamamagitan-ng-pagtatanong-sa-mga-tao/) at [revealed preference](../revealed-preference-valuation-pagpapahalaga-mula-sa-aktuwal-na-gawi-sa-pamilihan/), dahil madalas na mahihinang tagahula ang mga tao kung gaano talaga makakaapekto ang isang bagay sa kasiyahan nila sa buhay. Ang gabay, na binuo kasama ng What Works Centre for Wellbeing, ay nagtatakda ng inirerekomendang halagang pera kada WELLBY — £13,000 (presyo ng 2021, pana-panahong binabago) — na hinango sa ugnayang naobserbahan sa malalaking survey ng wellbeing (pangunahin ang Annual Population Survey ng ONS, na nagtatanong ng apat na tanong ng ONS4 sa wellbeing mula noong 2011) sa pagitan ng kita at kasiyahan sa buhay, na nagbibigay sa mga analyst ng conversion rate pabalik sa pound kapag kailangan ang napeperang paghahambing laban sa ibang Green Book appraisal.

Mahalaga ang pamamaraan dahil binabaligtad nito ang karaniwang lohika ng pagtataya: sa halip na itanong kung magkano ang babayaran ng mga tao para sa kinalabasan (stated preference) o hanguin ang halaga mula sa kaugnay na transaksyon sa pamilihan (revealed preference), direktang sinusukat nito ang epekto ng kinalabasan sa iniulat na kasiyahan sa buhay, na nilalampasan ang agwat ng sinasabi ng mga tao na gusto nila at ng talagang nagpapabuti sa kalagayan nila. Ito rin ang pangunahing limitasyon nito — naaapektuhan ang self-reported na kasiyahan sa buhay ng adaptation at framing effect na dapat kontrolin ng maingat na practitioner.

## Ang matematika

```
WELLBY = 1 puntos ng kasiyahan sa buhay (0-10 na sukatan) na tumatagal para sa 1 tao sa loob ng 1 taon

Kabuuang WELLBY mula sa isang patakaran =
  Σ (pagbabago sa iskor ng kasiyahan sa buhay) × (bilang ng apektadong tao)
    × (tagal sa taon, dini-discount sa social discount rate)

Napeperang halaga = Kabuuang WELLBY × halaga kada WELLBY
  (inirerekomendang halaga ng HM Treasury: £13,000 kada WELLBY, presyo ng 2021,
   napapailalim sa pana-panahong rebisyon — suriin ang kasalukuyang gabay bago gamitin)
```

Naiiba ito sa [wellbeing-adjusted life year](../wellbeing-adjusted-life-years-isang-puntos-ng-kasiyahan-sa-buhay-sa-loob-ng-isang-taon/) ng health economics, na karaniwang nakaangkla sa mga sukatan ng kalidad ng buhay na may kinalaman sa kalusugan (EQ-5D at katulad) at hindi sa pangkalahatang kasiyahan sa buhay; magkaugnay ang dalawa ngunit hindi mapagpapalit, at dapat tahasan ng mga Green Book appraisal kung aling sukatan at paraan ng elicitation ang pinagbabatayan ng iniulat na bilang ng WELLBY.

## Halimbawang kalkulasyon

**Lokal na awtoridad**: nagpapatakbo ang isang konseho ng community befriending scheme para sa mga nakahiwalay na matatandang residente, na naglilingkod sa 400 tao. Ipinapakita ng before/after na survey sa wellbeing gamit ang tanong ng ONS4 sa kasiyahan sa buhay na tumaas ang average na iskor ng mga kalahok mula 5.8 tungong 6.5 — pakinabang na 0.7 puntos — na tumagal sa buong 2-taong pinondohang tagal ng programa.

```
Nabuong WELLBY = 400 tao × 0.7 puntos × 2 taon = 560 WELLBY
Napeperang halaga = 560 × £13,000 = £7.28m
Gastos ng programa = £450,000 sa loob ng 2 taon

Benefit-cost ratio ≈ £7.28m / £0.45m ≈ 16:1
```

Ang ratio na ganito kataas ay dapat magbunsod ng masusing pagsusuri sa halip na pagdiriwang — tahasang binabalaan ng wellbeing guidance ng Green Book laban sa pagtanggap nang literal sa maliit-na-sample na self-reported na pakinabang nang walang pagsusuri sa selection effect (ang pinakamasosyal ba, pinakamalamang na bumuti na mga residente lamang ang sumali sa scheme?) at walang comparison group; ang mahusay na disenyong evaluation ay magbabawas ng counterfactual na pagbabagong naobserbahan sa mga hindi kalahok, tingnan ang [counterfactual analysis](../counterfactual-analysis-ano-ang-mangyayari-kung-walang-interbensyon/).

**Pambansang pamahalaan**: ang paghahambing ng dalawang employment programme gamit ang WELLBY at hindi kita lang ay sumasalo na may gastos sa wellbeing ang kawalan ng trabaho lampas sa nawalang kita — tuloy-tuloy na natutuklasan ng pananaliksik sa wellbeing sa UK na mas binabawasan ng kawalan ng trabaho ang kasiyahan sa buhay kaysa mahuhulaan ng nawalang kita lamang, dahil sa mga di-pinansyal na epekto ng pagkawala ng istruktura, layunin, at ugnayang panlipunan. Ang programang tinaya sa pakinabang sa kita lamang ay magmamaliit ng halaga nito kumpara sa isang tinaya rin sa WELLBY.

## Kaugnayan sa software engineering

Bihirang direktang umabot sa mga koponan ng engineering ang wellbeing valuation, ngunit hinuhubog nito kung paano binibigyang-kahulugan ang "tagumpay" para sa mga produktong panlipunan at pampublikong serbisyo — ang digital befriending platform, mental-health triage tool, o community platform para sa mga nakahiwalay na residente ay dapat asahang masusukat ang impact sa ganitong paraan balang-araw, na nangangahulugang kailangang kumuha ang product analytics ng *sino* ang naaabot at *gaano katagal*, hindi lang bilang ng paggamit. Isama ang instrumentasyon ng survey sa wellbeing (ONS4 o napatunayang katumbas) sa evaluation ng serbisyo mula sa simula sa halip na idugtong sa huli; ang pagdaragdag ng baseline ng wellbeing matapos mailunsad ang serbisyo ay ganap na nagpapawala ng pre/post na paghahambing. Tingnan ang [outcomes vs outputs](../outcomes-laban-sa-outputs-ang-pagkakaiba-ng-naihatid-at-ng-nagbago/) at [mga pamamaraan ng impact evaluation](../mga-pamamaraan-sa-impact-evaluation-rct-difference-in-differences-matching-at-regression-discontinuity/).

## Mga karaniwang pagkakamali

- **Walang counterfactual o comparison group.** Ang pre/post na pakinabang sa wellbeing na walang kontrol sa mangyayari pa rin kahit wala ang programa ay nagpapalaki ng epekto ng programa; tingnan ang [counterfactual analysis](../counterfactual-analysis-ano-ang-mangyayari-kung-walang-interbensyon/) at [additionality at deadweight](../additionality-at-deadweight-ano-ang-tunay-na-naidagdag-ng-programa/).
- **Maliliit at self-selected na sample.** Madaling tamaan ng selection bias ang mga survey sa wellbeing ng mga kalahok na kusang sumali — ang mga sumali at nanatili ay posibleng pataas na ang takbo.
- **Pagturing na eksakto ang conversion na £ kada WELLBY.** Kumbensiyon ng patakaran ang napeperang halaga na hinango sa mga regression ng kita-wellbeing, hindi presyo sa pamilihan; gamitin ito para sa pagkukumpara sa mga Green Book appraisal, hindi bilang pahayag kung ano ang "halaga" ng wellbeing.
- **Paghahalo ng WELLBY at QALY na pangkalusugan.** Magkaibang konstruktong sinusukat ng dalawa sa magkaibang sukatan; tingnan ang [wellbeing-adjusted life years](../wellbeing-adjusted-life-years-isang-puntos-ng-kasiyahan-sa-buhay-sa-loob-ng-isang-taon/) para sa bersyon ng health economics at huwag i-average ang dalawa.

## Mga sanggunian

- HM Treasury. "Wellbeing guidance for appraisal: supplementary Green Book guidance." 2021. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>
- What Works Centre for Wellbeing. <https://whatworkswellbeing.org/>
- Office for National Statistics. "Personal well-being in the UK" (ONS4 measures). <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing>
- Fujiwara D, et al. "Wellbeing Valuation: A Nascent Field?" LSE / Simetrica research summaries.
