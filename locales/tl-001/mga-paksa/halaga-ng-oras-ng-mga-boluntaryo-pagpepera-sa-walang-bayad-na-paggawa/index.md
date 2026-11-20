# Halaga ng oras ng mga boluntaryo: pagpepera sa walang-bayad na paggawa

Ang volunteer time value ay tantiyang halagang pera na itinatakda sa walang-bayad na paggawa, na pinakamadalas gamitin upang ipahayag ang tunay na bakas-pang-ekonomiya ng isang charity — ang mga account nito kasama ang paggawang hindi nito kinailangang bayaran — o upang patunayang mas cost-effective ang isang interbensyon kaysa ipinahihiwatig ng cash budget nito lamang. Dalawang pambansang metodolohiya ang nangingibabaw: ang tantiya ng Independent Sector ng Estados Unidos at ang pamamaraan ng Office for National Statistics / NCVO ng United Kingdom, at magkaiba ang presyo nila sa parehong oras ng paggawa.

## Bakit ito mahalaga

Taon-taon, naglalathala ang Independent Sector, katuwang ang Do Good Institute ng University of Maryland, ng pambansang halaga kada oras ng oras ng boluntaryo, na binuo mula sa datos ng sahod ng Bureau of Labor Statistics — partikular ang average na oras-oras na kita ng mga production at non-supervisory na manggagawa sa private non-farm payrolls, kasama ang pagsasaayos ng fringe benefit — at hinati ayon sa estado ng US. Ang pinakahuling release nito ay naglagay ng halaga sa **$36.14 kada oras para sa 2025**, tumaas ng 3.9% mula sa nakaraang taon, na may mga halaga sa antas-estado mula mahigit $50 sa Washington, DC hanggang wala pang $20 sa Puerto Rico. Sa UK, hiwalay na tinantiya ng Office for National Statistics ang replacement cost ng pormal na boluntaryismo sa **£14.43 kada oras** (tantiya noong 2017), at ginagamit ng UK Civil Society Almanac 2024 ng NCVO ang datos ng paglahok sa boluntaryismo — humigit-kumulang 14.2 milyong tao ang pormal na nagboluntaryo noong 2021–22 — upang tantiyahin ang kabuuang ambag ng sektor sa boluntaryismo sa humigit-kumulang **£18 bilyon**, mga 0.8% ng GDP ng UK.

Ang dahilan kung bakit mahalaga ito lampas sa kosmetikong accounting: ang programang lubos na umaasa sa paggawa ng boluntaryo ay maaaring magmukhang lubhang mas mura sa purong cash na batayang [cost per outcome](../gastos-bawat-outcome-pagsukat-ng-tunay-na-pagbabago/) kaysa sa umaasa sa bayad na staff, kahit magkapareho o mas mataas ang tunay na gastos sa yaman — ang magagastos upang palitan ang paggawang iyon. Ang mga funder at evaluator na hindi pumapansin sa volunteer time value ay sistematikong nagmamaliit ng tunay na gastos ng mga modelong ng paghahatid na mabigat sa boluntaryo, na nagbabaluktot sa mga paghahambing ng efficiency laban sa mga modelong may bayad na staff na naghahatid ng parehong kinalabasan.

## Ang matematika

```
Halaga ng oras ng boluntaryo = Oras ng boluntaryong naiambag × oras-oras na rate

Mahalaga ang pagpili ng rate at nagbabago ang sagot:
  - Replacement cost na pamamaraan: ang sahod ng bayad na manggagawang gagawa ng
    parehong gawain (hal. replacement-cost na rate para sa kwalipikadong youth worker,
    hindi pangkalahatang average na sahod) — pinakamaipagtatanggol para sa pagtataya na tiyak sa gawain
  - Opportunity cost na pamamaraan: ang sariling nawalang sahod ng boluntaryo — pinakamaipagtatanggol
    para sa pagtataya ng isinuko ng boluntaryo
  - Pambansang average na pamamaraan: ang iisang pinaghalong rate ng Independent Sector o ONS
    — pinakamaipagtatanggol para sa headline at pagkukumparang cross-sector
```

Maaaring magkaiba nang ilang ulit ang tatlong pamamaraan para sa parehong oras (ang abogadong nagboboluntaryo bilang board trustee ay may ibang-ibang opportunity-cost rate kaysa pambansang average), kaya anumang iniulat na bilang ay dapat magsabi kung aling pamamaraan ang gumawa nito.

## Halimbawang kalkulasyon

**Charity sa UK, pambansang average na pamamaraan**: 5,000 oras ng boluntaryo sa isang taon, na tinaya sa £14.43/oras (tantiya ng ONS na replacement cost):

```
Halaga = 5,000 × £14.43 = £72,150
```

Kung £300,000 ang cash na gastos ng charity sa taong iyon, ang tunay nitong gastos sa yaman — cash kasama ang paggawa ng boluntaryo — ay £372,150, humigit-kumulang 24% na mas mataas kaysa ipinahihiwatig ng cash lamang. Ang kalkulasyon ng cost-per-outcome na ginagamit lamang ang cash na £300,000 ay nagmamaliit ng tunay na gastos sa parehong margin.

**Charity sa US, pambansang average na pamamaraan**: 2,000 oras ng boluntaryo na tinaya sa $36.14/oras (release ng Independent Sector, 2025):

```
Halaga = 2,000 × $36.14 = $72,280
```

**Parehong charity sa US, opportunity-cost na pamamaraan**: kung ang mga boluntaryo ay di-proporsyonal na mga retiradong propesyonal na ang dating kita ay nasa average na $60/oras, ang pagtatayang opportunity-cost ay $120,000 — dalawang-katlo na mas mataas kaysa sa pambansang average, na nagpapakita kung bakit dapat ipahayag ang pamamaraan.

## Kaugnayan sa software engineering

Ang mga sistemang nagla-log ng oras ng boluntaryo (mga tool sa shift-scheduling, mga platform ng volunteer management) ay dapat kumuha ng oras sa antas ng gawain o tungkulin, hindi lang kabuuan, upang mailapat ang replacement-cost na rate kada tungkulin sa halip na iisang blanket na pambansang average na rate sa magkahalong manggagawang boluntaryo (hindi pang-ekonomiyang magkapantay ang oras ng trustee at oras ng steward). Ang pag-iimbak ng rate at metodolohiyang ginamit katabi ng nakalkulang halaga — hindi lang ng huling bilang ng pera — ay nagpapahintulot sa mga susunod na ulat (taunang account, mga kalkulasyon ng [social return on investment](../social-return-on-investment-pagsukat-ng-halagang-panlipunan-kaugnay-ng-puhunan/), mga ulat sa funder) na muling buuin o hamunin ang bilang sa halip na ituring itong malabong constant. Tingnan ang [cost per outcome](../gastos-bawat-outcome-pagsukat-ng-tunay-na-pagbabago/) para sa kung bakit sistematikong nagmamaliit ng tunay na gastos ng paghahatid ang pagkalimot sa volunteer time value.

## Mga karaniwang pagkakamali

- **Paggamit ng iisang blanket na rate para sa mga tungkuling magkaiba ang istruktura.** Ang pambansang average na rate ng sahod na inilapat sa oras ng propesyonal na pro bono (legal, pinansyal, klinikal) ay lubhang nagmamaliit dito; itugma ang rate sa pinalitang tungkulin saanman may kasanayan ang gawain.
- **Double counting laban sa gastos ng bayad na staff.** Kung pumapalit ang mga boluntaryo sa gawaing babayaran sana, tiyaking additive sa cash na gastos ang pagtataya, hindi nakapatong sa tantiya ng staffing na pinalaki na.
- **Pagbanggit ng lumang rate nang walang petsa.** Nagbabago taon-taon ang mga rate ng Independent Sector at ONS (o pana-panahon lang na muling tinataya, sa kaso ng ONS); ang bilang ng oras ng boluntaryo na walang petsa sa ulat ay halos walang saysay sa paghahambing.
- **Pagturing sa volunteer time value bilang asset sa fundraising.** Pagsasaayos ito sa cost accounting upang maunawaan ang tunay na gastos sa yaman, hindi bagong perang magagastos ng charity; ang paghahalo ng dalawa ay nanlilinlang sa board na bumabasa ng mga account.

## Mga sanggunian

- Independent Sector and the Do Good Institute (University of Maryland), "Value of Volunteer Time." <https://www.independentsector.org/value-of-volunteer-time/>
- Independent Sector, Value of Volunteer Time methodology. <https://independentsector.org/research/value-of-volunteer-time-methodology/>
- NCVO, UK Civil Society Almanac 2024. <https://www.ncvo.org.uk/news-and-insights/news-index/uk-civil-society-almanac-2024/>
- Office for National Statistics, volunteering valuation estimate, as cited in NCVO analysis. <https://www.ncvo.org.uk/>
