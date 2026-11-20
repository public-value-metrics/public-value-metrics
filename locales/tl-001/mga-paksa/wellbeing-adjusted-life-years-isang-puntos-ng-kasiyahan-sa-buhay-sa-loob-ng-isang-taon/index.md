# Wellbeing-adjusted life years (WELLBY): isang puntos ng kasiyahan sa buhay sa loob ng isang taon

Ang WELLBY ay isang karagdagang puntos ng kasiyahan sa buhay, sa karaniwang 0–10 na sukatan ng wellbeing, para sa isang tao sa loob ng isang taon. Ito ang istrukturang katapat ng QALY na ginagamit sa health economics — iisang yunit na nagpapahintulot sa paghahambing ng mga interbensyong walang ibang pagkakatulad ang kinalabasan — ngunit nakabatay sa subjective wellbeing at hindi sa klinikal na estado ng kalusugan, at inilatag sa "Wellbeing guidance for appraisal: supplementary Green Book guidance" (2021) ng HM Treasury.

## Bakit ito mahalaga

Nangangailangan ang cost-benefit appraisal ng karaniwang yunit upang ihambing ang grant sa youth club, scheme sa kaligtasan sa kalsada, at serbisyo sa mental health, na walang iisang sukat ng kinalabasan. Nalutas ito ng health economics para sa mga klinikal na interbensyon sa pamamagitan ng QALY: quality-adjusted na taon ng buhay, na may timbang mula 0 (patay) hanggang 1 (ganap na kalusugan). Pinalalawak ng wellbeing guidance ng HM Treasury ang parehong lohika sa paggastos ng pamahalaan na hindi pangkalusugan, gamit ang harmonized na tanong ng ONS sa kasiyahan sa buhay ("Sa pangkalahatan, gaano ka nasisiyahan sa buhay mo sa ngayon?", sinasagot ng 0–10) bilang hagdan ng kinalabasan sa halip na index ng estado ng kalusugan. Ang WELLBY na 1 ay nangangahulugang tumaas ang kasiyahan sa buhay ng isang tao nang isang buong puntos sa loob ng isang taon (o, katumbas nito, sampung tao na tumaas ang kasiyahan ng 0.1 puntos bawat isa sa loob ng isang taon — nagsasama-sama ang mga WELLBY sa populasyon gaya ng QALY). Nagtatakda ang gabay ng HM Treasury ng ilustratibong halagang pera kada WELLBY (humigit-kumulang £13,000, presyo ng 2019/20) na hinango sa pagtutugma ng datos ng subjective wellbeing at ng ibang pamamaraan sa halaga ng taon ng buhay, na nagbibigay sa mga appraiser ng paraan upang pepera ang mga kinalabasan — pagbawas ng kalungkutan, pagkakaisa ng komunidad, pagpasok sa berdeng espasyo — na hanggang noon ay naipapaliwanag lang ng mga teknik sa [wellbeing valuation](../wellbeing-valuation-pagpepresyo-ng-epekto-ng-patakaran-sa-kasiyahan-sa-buhay/) ngunit hindi maihambing sa parehong batayan ng paggastos sa kalusugan o kaligtasan.

## Ang matematika

```
WELLBY = Δ kasiyahan sa buhay (0–10 na sukatan) × bilang ng taong nagtatagal ang pagbabago
        (pinagsama sa lahat ng apektadong tao)

Napeperang benepisyo ng wellbeing = nabuong WELLBY × halaga kada WELLBY (reference value ng HMT)

cf. QALY = Δ utility ng estado ng kalusugan (0–1 na sukatan) × taong nabuhay sa estadong iyon
```

Hindi mapagpapalit ang 0–10 na sukatan ng kasiyahan at ang 0–1 na sukatan ng utility ng QALY nang walang hakbang ng pag-convert; tinatalakay ng gabay ng HM Treasury ang pagtutugma ng dalawa upang, halimbawa, ang interbensyong pangkalusugan na tinaya sa QALY at interbensyong panlipunan na tinaya sa WELLBY ay hindi tahimik na ma-double-count o maiwang hindi maihahambing sa loob ng iisang [Green Book appraisal](../green-book-appraisal-pagtatasa-ng-mga-panukalang-paggasta-ng-pamahalaan-ng-uk/).

## Halimbawang kalkulasyon

**Serbisyo ng lokal na awtoridad laban sa kalungkutan**: naglilingkod ang isang befriending scheme sa 400 nakahiwalay na matatandang residente. Ipinapakita ng mga follow-up survey na tumaas ang average na kasiyahan sa buhay mula 5.2 tungong 6.0 (pakinabang na 0.8 puntos), at tinatayang tatagal ang epekto nang 2 taon bago mawala.

```
WELLBY = 400 tao × 0.8 puntos × 2 taon = 640 WELLBY

Napeperang halaga = 640 × £13,000 = £8,320,000
```

Laban sa taunang gastos ng programa na £300,000 (£600,000 sa loob ng 2 taon), ang benefit-cost ratio ay humigit-kumulang 8,320,000 / 600,000 ≈ **13.9:1** — bilang na maaari nang umupo sa parehong appraisal table ng cost-per-QALY-averted ng scheme sa kalusugan o natipid na oras ng biyahe ng scheme sa transportasyon.

**Charity, mas maliit na saklaw**: ang community arts programme ay umaabot sa 50 kalahok na may nasukat na pakinabang sa kasiyahan na 0.3 puntos, na tumatagal nang 1 taon.

```
WELLBY = 50 × 0.3 × 1 = 15 WELLBY
Napeperang halaga = 15 × £13,000 = £195,000
```

## Kaugnayan sa software engineering

- Ang anumang serbisyong nakaharap sa mamamayan na kumukuha na ng item ng survey sa kasiyahan sa buhay o wellbeing (marami sa mga platform ng lokal na awtoridad at health-and-care ang ginagawa ito, kasunod ng apat na karaniwang tanong ng ONS sa wellbeing) ay maaaring direktang kalkulahin ang mga WELLBY mula sa mga umiiral na data pipeline sa halip na mag-utos ng sariling economic evaluation para sa bawat pagbabago sa serbisyo.
- Binibigyan ng mga WELLBY ang mga koponan ng engineering na bumubuo para sa pag-uulat ng [social value act](../social-value-act-tungkuling-isaalang-alang-ang-halagang-panlipunan-sa-procurement-ng-pamahalaan/) o [social return on investment](../social-return-on-investment-pagsukat-ng-halagang-panlipunan-kaugnay-ng-puhunan/) ng pambansang standardisadong denominator na inendorso ng HM Treasury, na iniiwasan ang paglaganap ng mga sariling "impact score" na hindi maihahambing sa mga kontrata o supplier.
- Dahil additive ang mga WELLBY sa mga tao at sa panahon, malinis silang pumapasok sa uri ng pagsubaybay sa kinalabasan sa antas ng populasyon na ginagamit sa mga sistema ng [outcomes-based accountability](../outcomes-based-accountability-paghihiwalay-ng-pananagutan-ng-populasyon-at-ng-programa/) — maaaring iulat ng service dashboard ang kabuuang WELLBY na nabuo kada quarter gaya ng pag-uulat ng sistemang pangkalusugan ng mga QALY na nakuha.

## Mga karaniwang pagkakamali

- **Pag-aakalang ganap na maiuugnay sa interbensyon ang mga self-reported na pakinabang sa kasiyahan** — kung walang counterfactual (comparison group o before/after na disenyong may control), hindi mo maihihiwalay ang pakinabang sa WELLBY sa pangkalahatang mga trend; tingnan ang [counterfactual analysis](../counterfactual-analysis-ano-ang-mangyayari-kung-walang-interbensyon/).
- **Paghahalo ng WELLBY at QALY sa iisang kabuuan nang walang pagtutugma** — tahasan ang gabay ng HM Treasury na magkaiba ang sukatan at pinagbabatayang teorya ng halaga ng dalawa; ang walang-ingat na pagsasama ay nagdodoble ng bilang sa nagsasapawang kapakanan.
- **Hindi kritikal na paggamit sa reference na halagang pera** — ang bilang na £ kada WELLBY ay tantiyang pambansang average na may tunay na saklaw ng kawalang-katiyakan; inirerekomenda ng gabay ng HM Treasury ang sensitivity analysis, hindi ang pagturing dito bilang nakapirming palitan.

## Mga sanggunian

- HM Treasury. "Wellbeing guidance for appraisal: supplementary Green Book guidance." (2021) <https://www.gov.uk/government/publications/wellbeing-guidance-for-appraisal-supplementary-green-book-guidance>
- ONS. "Personal well-being user guidance" (the four standard wellbeing questions). <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing>
- HM Treasury. "The Green Book: Central Government Guidance on Appraisal and Evaluation."
