# Theory of change: pabalik na pagmamapa ng sanhi mula sa layunin hanggang sa mga aktibidad

Ang theory of change ay tahasan at pabalik na minapang landas ng sanhi mula sa pangmatagalang layunin patungo sa mga paunang kondisyon at aktibidad na kailangang umiral upang makamit ito, kasama ang mga palagay na nag-uugnay sa bawat hakbang. Binubuo ito sa pagsisimula sa kinalabasang nais mo at paulit-ulit na pagtatanong ng "ano ang dapat totoo bago mismo nito, upang mangyari ito?", hanggang makarating sa mga aktibidad na kaya mong ihatid — kabaligtaran ng direksyon ng [logic model](../logic-model-ang-linear-na-diagram-mula-input-hanggang-impact-ng-isang-programa/), kaya magkapupunan at hindi magkapalit ang dalawa.

## Bakit ito mahalaga

Pormal na binuo ang pamamaraan ng pabalik na pagmamapa ng Center for Theory of Change at ActKnowledge, na nagtayo sa gawa ng evaluator na si Carol Weiss sa paggawang tahasan ng mga palagay ng programa upang masubukan ang mga ito at hindi basta paniwalaan. Direktang tinanggap ito ng grant evaluation ng UK: itinuturing ng Magenta Book ng HM Treasury ang theory of change bilang panimulang punto ng anumang disenyo ng evaluation, at hinihingi ng mga funder gaya ng National Lottery Community Fund na maglahad ng isa ang mga aplikante bago pondohan ang panukala. Mahalaga ito sa software engineer dahil ang theory of change ang dokumentong dapat magtakda kung ano ang kailangang sukatin ng sistema mo — kung sinasabi ng chain ng sanhi na "nakadepende ang take-up ng benepisyo sa pagtanggap ng claimant ng personalized na kalkulasyon", testable na pahayag iyon na maaaring lagyan ng instrumentasyon ng produkto mo upang patunayan o pabulaanan.

## Ang matematika

Istruktural, hindi numerikal, ang theory of change. Dapat may dalang palagay at indicator ang bawat link na maaaring magpakitang mali ang palagay:

```
Pangmatagalang kinalabasan (ang layunin)
  ↑ paunang kondisyon + palagay + indicator
Intermediate na kinalabasan N
  ↑ paunang kondisyon + palagay + indicator
  ...
Intermediate na kinalabasan 1
  ↑ paunang kondisyon + palagay + indicator
Mga aktibidad / interbensyon
  ↑ mga yamang inilaan
Mga input
```

Direktang pumapasok ang istrukturang ito sa [mga pamamaraan ng impact evaluation](../mga-pamamaraan-sa-impact-evaluation-rct-difference-in-differences-matching-at-regression-discontinuity/), na umiiral upang subukin kung totoo nga ang mga palagay sa bawat link, at sa [counterfactual analysis](../counterfactual-analysis-ano-ang-mangyayari-kung-walang-interbensyon/), na sumusubok kung mangyayari pa rin ang pangmatagalang kinalabasan kahit wala ang programa.

## Halimbawang kalkulasyon

**Lokal na awtoridad (pag-iwas sa kawalan ng tirahan)**: ang pangmatagalang kinalabasan ay tuloy-tuloy na pangungupahan sa loob ng 12 buwan para sa mga sambahayang nanganganib mapaalis.

- Paunang kondisyon: may makatotohanan at abot-kayang plano ng pagbabayad ng arrears ang mga sambahayan. Palagay: mas napapanatili ang mga planong ipinagkasundo ng caseworker kaysa sa iniutos ng korte. Indicator: % ng mga planong aktibo pa rin sa ika-6 na buwan.
- Paunang kondisyon: kinukuha ng mga sambahayan ang mga benepisyong karapatan nila. Palagay: pinapataas ng digital benefits calculator ang tamang mga claim kumpara sa papel na form. Indicator: rate ng katumpakan ng claim, paghambingin ang bago/pagkatapos ng rollout ng tool.
- Mga aktibidad: caseworker triage, digital benefits calculator, negosasyon ng arrears.

Sa pilot cohort ng 120 sambahayan, totoo ang palagay sa benefits calculator para sa 102 sambahayan (85%) na tama ang naging claim, na pinatunayan ng sumunod na process evaluation — na nagbibigay sa koponan ng programa ng ebidensya para sa partikular na link na iyon sa halip na iisang end-to-end na pahayag tungkol sa naiwasang kawalan ng tirahan.

**Charity (youth mentoring)**: ang pangmatagalang kinalabasan ay nabawasang pagpapatalsik sa paaralan. Mga paunang kondisyong pabalik na minapa: pinahusay na regulasyon ng emosyon → pinagkakatiwalaang one-to-one na relasyon sa mentor → tuloy-tuloy na lingguhang pakikipag-ugnayan sa loob ng dalawang term. Ginagawang tahasan ng teorya na ang pagkabigo sa paunang kondisyong "tuloy-tuloy na lingguhang pakikipag-ugnayan" (halimbawa, dahil sa pagpapalit-palit ng mentor) ay nagpapahiwatig na hindi susunod ang kinalabasan — testable at falsifiable na pahayag, hindi pag-asa.

## Kaugnayan sa software engineering

Dapat hubugin ng theory of change ang data model ng produkto bago pa magawa ang unang dashboard: tukuyin kung aling mga link ang nangangailangan ng indicator, at lagyan ng instrumentasyon ang mga iyon, sa halip na i-default sa anumang pinakamadaling i-log. Dinidisiplina rin nito ang mga usapan sa roadmap — ang feature na hindi tumutugma sa anumang link sa chain ay hindi malinaw na sulit buuin. Tingnan ang [logic model](../logic-model-ang-linear-na-diagram-mula-input-hanggang-impact-ng-isang-programa/) para sa pasulong na chain of accountability na binubuo kapag napagkasunduan na ang teorya, ang [social return on investment](../social-return-on-investment-pagsukat-ng-halagang-panlipunan-kaugnay-ng-puhunan/) para sa pamamaraang umaasa sa theory of change upang itakda kung aling mga kinalabasan ang bibigyang-halaga, at ang [outcomes vs outputs](../outcomes-laban-sa-outputs-ang-pagkakaiba-ng-naihatid-at-ng-nagbago/) para sa pagkakaibang kinasasandigan ng mga link ng intermediate na kinalabasan.

## Mga karaniwang pagkakamali

- **Pagkalito rito at sa logic model.** Sanhi at nagpapaliwanag ang theory of change (bakit natin pinaniniwalaang gumagana ito); sunud-sunod at naglalarawan ang logic model (ano ang nangyayari sa anong pagkakasunod). Kung isa lang ang gagawin, mawawala ang alinman sa "bakit" o ang bakas ng pananagutan.
- **Pag-iwan ng mga palagay na implicit.** Ang buong halaga ng pabalik na pagmamapa ay ang paglitaw ng mga testable na palagay; ang theory of change na listahan lang ng mga kahon at palaso nang hindi pinangangalanan kung ano ang maaaring magpamali sa bawat link ay dekorasyon lang.
- **Pagbuo nang minsan at pagtatabi.** Ang theory of change na isinulat para sa funding bid at hindi na binalikan ay nawawalan ng silbi sa sandaling magsimulang salungatin ng ebidensya ang isang link.
- **Pagpapalampas sa input ng stakeholder.** Ang theory of change na buong binuo ng mga commissioner nang walang input ng frontline staff o mga benepisyaryo ay karaniwang may mga palagay na walang naniniwala sa mga talagang naghahatid ng serbisyo.

## Mga sanggunian

- Center for Theory of Change. <https://www.theoryofchange.org/>
- ActKnowledge. <https://www.actknowledge.org/>
- HM Treasury, Magenta Book (2020), Chapter 3. <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, theory of change guidance. <https://www.tnlcommunityfund.org.uk/>
