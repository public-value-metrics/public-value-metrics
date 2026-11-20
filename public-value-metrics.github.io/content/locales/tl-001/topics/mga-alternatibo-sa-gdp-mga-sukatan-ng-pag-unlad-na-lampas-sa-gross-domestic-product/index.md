# Mga Alternatibo sa GDP: mga sukatan ng pag-unlad na lampas sa Gross Domestic Product

Ang mga alternatibo sa GDP ay mga sukatang binuo para saklawin ang istrukturang binabalewala ng Gross Domestic Product: walang bayad na gawaing pangangalaga, pagkaubos ng kapaligiran, distribusyon ng kita, at kung tunay bang pinabubuti ng paglago ang buhay. Ang pinakakilala ay ang Genuine Progress Indicator (GPI) at ang Gross National Happiness (GNH) Index ng Bhutan; ang pinakamaimpluwensyang argumento para seryosohin ang mga ito ay ginawa ng Stiglitz-Sen-Fitoussi Commission noong 2009. Para sa mga engineer na bumubuo ng mga dashboard o sistema ng KPI ng pamahalaan, ang "aling numero ang bilang na pag-unlad" ay desisyon sa disenyo na may totoong bunga sa kung ano ang popondohan.

## Bakit ito mahalaga

Nagbabala si Simon Kuznets, na bumuo ng pambansang accounts ng US noong 1930s, sa Kongreso noong 1934 na "halos hindi mahihinuha ang kapakanan ng isang bansa mula sa pagsukat ng pambansang kita" — babalang halos agad nilampasan ng bilang. Binibilang ng GDP bilang paglago ang paglilinis ng oil spill at bilang wala ang walang bayad na pag-aalaga ng magulang sa anak; hindi nito pinag-iiba ang paggastos na bumubuo ng matibay na wellbeing at ang paggastos na pumapawi lamang sa pinsalang nagawa na. Iniulat ng Stiglitz-Sen-Fitoussi Commission, na pinulong ni Pangulong Nicolas Sarkozy ng France at pinamunuan nina Joseph Stiglitz, Amartya Sen, at Jean-Paul Fitoussi, noong 2009 na dapat ilipat ng mga sistemang estadistikal ang diin "mula sa pagsukat ng produksyong pang-ekonomiya tungo sa pagsukat ng wellbeing ng mga tao," at na dapat subaybayan ang sustainability nang hiwalay sa kasalukuyang wellbeing sa halip na isama sa iisang numero. Isinasagawa ng mga alternatibo sa GDP ang rekomendasyong iyon. Ang GPI, na binuo ng thinktank na Redefining Progress noong 1990s at nakabatay sa Measure of Economic Welfare nina William Nordhaus at James Tobin noong 1972, ay nagsisimula sa personal na pagkonsumo (gaya ng GDP) at saka nagdaragdag ng mga di-pamilihang benepisyong nilalampasan ng GDP (gawaing-bahay, volunteering) habang binabawasan ang mga depensibo at depletion na gastos (krimen, polusyon, pag-commute, pagkaubos ng yaman) na maling binibilang ng GDP bilang positibo. Ang GNH Index ng Bhutan, na pinangangasiwaan ng GNH Centre Bhutan (<https://www.gnhcentre.bt/>), ay mas malayo pa ang narating, sapagkat pinalitan nito ang paglago bilang nakasaad na layuning konstitusyonal ng bansa: pinagsasama nito ang 33 indikador sa 9 na domain — psychological wellbeing, kalusugan, edukasyon, paggamit ng oras, pagkakaiba-iba ng kultura, pamamahala, sigla ng komunidad, pagkakaiba-iba ng ekolohiya, at antas ng pamumuhay — sa iisang iskor na nakabatay sa sufficiency na direktang ginagamit sa pagsala ng mga panukalang patakaran ng pamahalaan.

## Ang matematika

```
GPI = personal na gastos sa pagkonsumo
      + di-pamilihang benepisyo (gawaing-bahay, volunteering, mas mataas na edukasyon)
      − depensibo at panlipunang gastos (krimen, polusyon, pag-commute, pagkawasak ng pamilya)
      − pagkaubos ng natural at panlipunang kapital (pagkaubos ng yaman, pagkawala ng lupang sakahan)

GNH sufficiency score, kada domain:
  "sapat" ang isang tao sa isang domain kapag nalampasan niya ang threshold nito sa bawat indikador
  Happiness Index = (% ng populasyong sapat sa ≥ 6 sa 9 na domain)
                    + (may timbang na average na kakulangan ng minoryang "hindi pa masaya")
```

## Halimbawang kalkulasyon

**Rehiyon, GPI**: $50bn ang personal na pagkonsumo. Idagdag ang tinatayang halaga ng gawaing-bahay at volunteer na $12bn (mga rate ng sahod batay sa gastos ng kapalit — tingnan ang [halaga ng oras ng volunteer](../halaga-ng-oras-ng-mga-boluntaryo-pagpepera-sa-walang-bayad-na-paggawa/)). Ibawas ang tinatayang taunang gastos ng pagsisikip sa pag-commute ($3bn), krimen ($4bn), at pangmatagalang pagkaubos ng yaman ($6bn):

```
GPI = 50 + 12 − 3 − 4 − 6 = 49 ($bn)
```

Kung lumago ang GDP mula $50bn hanggang $55bn sa taong iyon (+10%), ngunit mas mabilis lumaki ang mga depensibo at depletion na gastos kaysa sa pagkonsumo, maaaring bumagsak ang GPI kahit tumataas ang GDP — ang "threshold hypothesis" na binabanggit ng mga mananaliksik ng GPI para sa mga ekonomiyang mataas ang kita mula humigit-kumulang 1970s, nang patuloy na umakyat ang paglago habang nag-plateau ang GPI.

**Mamamayan, GNH**: nalalampasan ng isang respondent ang sufficiency threshold sa 7 sa 9 na domain (kalusugan, edukasyon, antas ng pamumuhay, sigla ng komunidad, pagkakaiba-iba ng kultura, pagkakaiba-iba ng ekolohiya, paggamit ng oras) ngunit kapos sa psychological wellbeing at pamamahala. Dahil 7 ≥ 6, ibinibilang siyang "masaya" sa headcount; hiwalay na sinusubaybayan ng index ang lalim ng kanyang dalawang kakulangan upang hindi magkapareho ang makitid na pagpasa at ang komportableng pagpasa.

## Kaugnayan sa software engineering

- Ang KPI dashboard na hinulma lamang sa throughput o gastos (ang padron ng GDP) ay sistematikong makakaligtaan ang pinsalang nagawa sa pagbuo ng throughput na iyon — ang dami ng support ticket na itinuturing na "engagement" sa halip na "pagkabalisa ng user" ay ang bersyon sa paghahatid ng software ng pagbibilang ng oil spill bilang paglago.
- Kapaki-pakinabang na padron ng audit ang accounting na istilong GPI para sa anumang suite ng [KPI ng pampublikong sektor](../mga-kpi-ng-pampublikong-sektor-pagpili-ng-sukatan-na-hindi-madaling-dayain/): para sa bawat pangunahing output metric, itanong kung anong depensibong gastos ang tahimik nitong natatamo (rework, pagtugon sa insidente, burnout) at ibawas ito, gaya ng pagbawas ng GPI sa depensibong gastusin mula sa pagkonsumo.
- Ang pamamaraang domain-sufficiency ng GNH — pasado/bagsak kada dimensyon, saka pagsamahin — ay istrukturang kapareho ng teknik ng [multi-criteria decision analysis](../multi-criteria-decision-analysis-pagmamarka-at-pagtitimbang-ng-mga-opsyon-sa-maraming-pamantayan/) at sulit gamitin muli saanman itatago ng iisang scalar na iskor ang isang kritikal na bagsak na dimensyon.

## Mga karaniwang pagkakamali

- **Pagtrato sa GPI bilang tumpak na pambansang account** — hindi gaya ng GDP, walang iisang standardisadong metodolohiya ang GPI; magkakaiba ang pagtimbang ng mga pag-aaral sa gastos ng pag-commute, oras ng volunteer, o pagkaubos ng yaman, kaya mas hindi maaasahan ang paghahambing ng GPI sa pagitan ng mga pag-aaral kaysa sa paghahambing ng GDP sa pagitan ng mga bansa.
- **Pag-angkat ng GNH nang buo sa ibang kultura ng patakaran** — itinakda ang mga timbang ng domain at sufficiency threshold nito sa pamamagitan ng konsultasyong Bhutanese; ang pagkopya ng numero nang wala ang pinagbabatayang proseso ng konsultasyon ay gumagawa ng hungkag na sukatang walang nagtitiwala.
- **Pag-aakalang pumapalit ang alternatibo sa GDP sa cost-benefit appraisal** — mga diagnostikong indikador ang mga ito sa antas ng buong ekonomiya, hindi kasangkapan sa pagpapasya para sa iisang programa; gamitin ang [social cost-benefit analysis](../social-cost-benefit-analysis-pagtimbang-ng-gastos-at-benepisyong-panlipunan-sa-iisang-halagang-pera/) para doon.

## Mga sanggunian

- Stiglitz JE, Sen A, Fitoussi J-P. "Report by the Commission on the Measurement of Economic
  Performance and Social Progress." (2009) <https://ec.europa.eu/eurostat/documents/118025/118123/Fitoussi+Commission+report>
- GNH Centre Bhutan. <https://www.gnhcentre.bt/>
- Redefining Progress. "The Genuine Progress Indicator: A Tool for Sustainable Development."
- Nordhaus WD, Tobin J. "Is Growth Obsolete?" (1972), NBER.
