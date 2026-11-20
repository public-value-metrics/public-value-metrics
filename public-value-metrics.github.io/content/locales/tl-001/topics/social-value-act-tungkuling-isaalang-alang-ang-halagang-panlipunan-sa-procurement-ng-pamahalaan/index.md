# Social Value Act: tungkuling isaalang-alang ang halagang panlipunan sa procurement ng pamahalaan

Ang Public Services (Social Value) Act 2012 ay tungkuling ayon sa batas ng UK na nag-aatas sa mga pampublikong awtoridad sa England at Wales na isaalang-alang kung paano mapapabuti ng binibili ang kapakanang pang-ekonomiya, panlipunan, at pangkapaligiran ng kaugnay na lugar, at isaalang-alang ang konsultasyon tungkol dito, bago simulan ang proseso ng procurement para sa mga kontrata ng pampublikong serbisyo. Nagkabisa ito noong Enero 2013 bilang medyo magaang na tungkuling "have regard to", at lubos na pinalakas ng Procurement Policy Note (PPN) 06/20 noong Enero 2021, na nag-aatas sa mga kontrata ng sentral na pamahalaan na tahasang suriin — hindi lang isaalang-alang — ang halagang panlipunan, na may pinakamababang weighting sa mga pamantayan ng paggawad.

## Bakit ito mahalaga

Bago ang PPN 06/20, matutupad ang "pagsasaalang-alang" sa halagang panlipunan kung sasabihin lang ng commissioner na naisip niya ito, nang walang kailangang epekto sa desisyon ng paggawad — tungkuling madaling tuparin sa papel at kalimutan sa praktika. Isinara ng PPN 06/20 ang puwang na iyon para sa procurement ng sentral na pamahalaan: inuutos nitong i-score ang halagang panlipunan bilang bahagi ng pagsusuri sa tender, na nakaayos sa limang pambansang temang prayoridad — pagbangon mula sa COVID-19, pagharap sa hindi pagkakapantay-pantay sa ekonomiya, paglaban sa pagbabago ng klima, pantay na oportunidad, at wellbeing — at karaniwang sinusukat gamit ang balangkas ng National TOMs (Themes, Outcomes, Measures) na pinapanatili ng Social Value Portal. Para sa software engineer na bumubuo ng mga tool sa procurement, contract management, o suporta sa bid para sa pampublikong sektor, ito ang legal na batayang obligadong pagtayuan ng iyong kliyente, hindi opsyonal na dagdag.

## Ang matematika

Balangkas ang paksa ng halagang panlipunan; ang "matematika" nito ay ang istruktura ng pag-score na ginagamit ng karamihan ng awtoridad:

```
Kabuuang iskor ng tender = Weighting ng presyo/gastos + Weighting ng kalidad + Weighting ng halagang panlipunan

PPN 06/20 (sentral na pamahalaan): weighting ng halagang panlipunan ≥ 10% ng kabuuang iskor

Mga tema ng halagang panlipunan (PPN 06/20):
 1. Pagbangon mula sa COVID-19
 2. Pagharap sa hindi pagkakapantay-pantay sa ekonomiya
 3. Paglaban sa pagbabago ng klima
 4. Pantay na oportunidad
 5. Wellbeing
```

Karaniwang pinepera ng mga bidder ang kanilang mga pangako laban sa mga temang ito gamit ang [unit cost databases](../unit-cost-databases-mga-handang-financial-proxy-para-sa-mga-kinalabasang-panlipunan/), at ang parehong lohika ng pagpepera sa [social return on investment](../social-return-on-investment-pagsukat-ng-halagang-panlipunan-kaugnay-ng-puhunan/) ang umiiral: ang pangako ay dapat may ebidensya, maiuugnay sa kontrata, at hindi double-counted laban sa ibang pondo.

## Halimbawang kalkulasyon

**Kontrata sa IT ng lokal na awtoridad**: ang kontratang £2 milyon at 3 taon ay iniiskor na 60% kalidad, 30% presyo, 10% halagang panlipunan. Nangangako ang Bidder A ng 2 apprenticeship, £150,000 na paggastos sa lokal na subcontracting, at 200 oras ng pro bono na pagsasanay sa digital skills para sa lokal na paaralan, na pinepera gamit ang mga proxy mula sa unit cost database sa pinagsamang £90,000 na karagdagang halagang panlipunan. Nangangako ang Bidder B ng mas maliit na pakete na pinepera sa £40,000. Kung proporsyonal na iniiskor ng awtoridad ang halagang panlipunan laban sa pinakamalakas na bid, ang Bidder A ay tumatanggap ng buong 10 puntos; ang Bidder B ay tumatanggap ng 10 × (£40,000 ÷ £90,000) = 4.4 puntos — agwat na 5.6 puntos na maaaring magpasya sa kontrata kahit malapit ang kalidad at presyo.

**Bidder mula sa voluntary sector**: ang maliit na VCSE (voluntary, community and social enterprise) na nagbi-bid para sa kontrata sa grounds maintenance laban sa komersyal na katunggali ay hindi makakalaban sa unit price lamang, ngunit gumagamit ng mga proxy ng Global Value Exchange upang pepera ang umiiral nitong mga pangako sa community employment at volunteering, na bumubuo ng kasong may ebidensya para sa halagang panlipunan na karapat-dapat i-score kasabay ng presyo at kalidad.

## Kaugnayan sa software engineering

Ang pagkapanalo sa bid na may napeperang pangako sa halagang panlipunan ay lumilikha ng obligasyong patunayan ang paghahatid nito sa pamamagitan ng contract management — mga tool na nagla-log ng simula ng apprenticeship, lokal na gastos, at oras ng pagsasanay laban sa mga tiyak na pangakong na-score sa tender, na pumapasok sa mga pulong ng pagsusuri ng kontrata sa halip na makalimutan pagkatapos pirmahan ang kontrata. Parami nang parami ang G-Cloud at Digital Marketplace listing na nangangailangan ng pahayag sa halagang panlipunan sa oras ng pag-lista. Tingnan ang [social return on investment](../social-return-on-investment-pagsukat-ng-halagang-panlipunan-kaugnay-ng-puhunan/) para sa paraan ng pagtataya sa likod ng mga pangako, ang [unit cost databases](../unit-cost-databases-mga-handang-financial-proxy-para-sa-mga-kinalabasang-panlipunan/) para sa mga proxy na pinagkukunan ng mga bidder, at ang [outcomes vs outputs](../outcomes-laban-sa-outputs-ang-pagkakaiba-ng-naihatid-at-ng-nagbago/) upang matiyak na ang mga naihatid na pangako ay kinalabasan, hindi lang bilang ng aktibidad.

## Mga karaniwang pagkakamali

- **Social-washing ng mga bid.** Ang malalabong pangako ("sinusuportahan namin ang lokal na komunidad") na hindi masusukat o mapanagutan sa contract management ay mataas ang iskor ngunit walang naihahatid na mapapatunayan.
- **Pagturing sa halagang panlipunan bilang tie-breaker.** Hinihingi ng PPN 06/20 na tahasang suriin ang halagang panlipunan sa loob ng mga pamantayan ng paggawad, hindi gamitin nang impormal para pagpasyahan ang tabla ng mga bid na magkapantay.
- **Walang kasunod na contract management.** Madalas na hindi na sinusubaybayan sa paghahatid ang mga pangakong na-score sa tender — tingnan ang [benefits realization](../benefits-realization-pagpapatunay-na-natupad-ang-ipinangakong-benepisyo/).
- **Hindi pare-parehong balangkas ng pagsukat sa iba't ibang kontrata.** Ang paggamit ng magkaibang pinagmulan ng proxy para sa magkakatulad na pangako sa iba't ibang kontrata ay nagpapawalang-saysay sa paghahambing sa antas ng portfolio, kaya umiiral ang mga karaniwang balangkas gaya ng National TOMs at nakabahaging unit cost database.

## Mga sanggunian

- Public Services (Social Value) Act 2012. <https://www.legislation.gov.uk/ukpga/2012/3/contents>
- Cabinet Office, Procurement Policy Note 06/20, "Taking Account of Social Value in the Award of Central Government Contracts." <https://www.gov.uk/government/publications/procurement-policy-note-0620-taking-account-of-social-value-in-the-award-of-central-government-contracts>
- Social Value Portal, National TOMs Framework. <https://socialvalueportal.com/national-toms/>
