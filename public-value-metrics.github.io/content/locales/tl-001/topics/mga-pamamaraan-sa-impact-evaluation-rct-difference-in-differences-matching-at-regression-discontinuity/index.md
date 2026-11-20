# Mga Pamamaraan sa Impact Evaluation: RCT, difference-in-differences, matching at regression discontinuity

Ang mga pamamaraan sa impact evaluation ay mga estadistikal at eksperimental na disenyong ginagamit upang tantiyahin kung ano ang aktuwal na idinulot ng isang patakaran o programa, kaiba sa kung ano ang mangyayari pa rin kahit wala ito — ang randomized controlled trial (RCT), difference-in-differences, propensity score matching, at regression discontinuity design ang apat na pinakakaraniwang ginagamit sa pampublikong patakaran ng UK. Umiiral ang mga ito dahil karamihan sa mga interbensyon ng pamahalaan ay hindi masusubok sa laboratoryo: hindi mo maaaring i-randomize kung aling bayan ang makakakuha ng bagong ruta ng bus gaya ng pag-randomize kung aling pasyente ang bibigyan ng gamot, kaya hinihiram ng mga pamamaraang ito ang parehong lohika ng sanhi nang hindi laging nangangailangan ng random na pagtatalaga.

## Bakit ito mahalaga

Ang Annex A ng Magenta Book ng HM Treasury tungkol sa mga quasi-experimental na pamamaraan ang kanonikal na gabay ng pamahalaan ng UK sa pagpili sa pagitan ng mga disenyong ito, at ginagawang institusyon ng mga katawan gaya ng Education Endowment Foundation at What Works Centre for Local Economic Growth ang hierarchy ng ebidensya sa paligid ng mga ito — mga RCT kung posible at etikal ang randomization, mga quasi-experimental na disenyo kung hindi. Hindi pahabol na teknikalidad ang pagpili ng pamamaraan: ito ang nagtatakda kung masasagot ng ebalwasyon ang "dinulot ba ito ng programa?" o ang "nangyari ba ito pagkatapos magsimula ang programa?" lamang, na mismong tanong na pinipilit itanong ng [counterfactual analysis](../counterfactual-analysis-ano-ang-mangyayari-kung-walang-interbensyon/) sa mga praktisyoner bago mag-komisyon ng anumang ebalwasyon.

## Ang matematika

```
RCT:
  Epekto = mean(outcome | treatment group) − mean(outcome | control group)
  (balido dahil random ang pagtatalaga sa treatment)

Difference-in-differences (DiD):
  Epekto = [outcome_pagkatapos(treated) − outcome_bago(treated)]
         − [outcome_pagkatapos(control) − outcome_bago(control)]
  (nangangailangan ng palagay na "parallel trends": magkasabay sanang gumalaw ang treated
   at control kung walang interbensyon)

Propensity score matching (PSM):
  1. Tantiyahin ang P(treatment = 1 | covariates X) para sa bawat yunit → propensity score
  2. I-match ang mga treated na yunit sa mga untreated na yunit na may katulad na propensity score
  3. Epekto = mean(outcome | treated) − mean(outcome | matched control)

Regression discontinuity design (RDD):
  Epekto = talon sa outcome na naobserbahan sa threshold ng eligibility,
           na naghahambing ng mga yunit na bahagyang nasa itaas at nasa ibaba ng cutoff
```

## Halimbawang kalkulasyon

**Lokal na awtoridad (difference-in-differences para sa programa ng troubled families)**: ang outcome ay pagdalo sa paaralan. Ang treated na lugar ay lumipat mula 84% tungong 89% na pagdalo (+5 percentage point) sa panahon ng programa; ang maihahambing ngunit untreated na lugar ay lumipat mula 85% tungong 87% (+2 percentage point) sa parehong panahon. Tantiya ng epekto sa DiD: 5 − 2 = +3 percentage point na maiuugnay sa programa. Kapag inilapat sa cohort na 2,000 mag-aaral sa treated na lugar, tugma ito sa humigit-kumulang 60 karagdagang mag-aaral (3% × 2,000) na umabot sa mas mataas na kategorya ng pagdalo, isang extrapolation na dapat iulat kasama ang paalala sa parallel-trends, hindi bilang eksaktong headcount.

**Charity (propensity score matching para sa charity sa employability)**: 300 kalahok sa programa ang ima-match sa 300 indibidwal mula sa mas malaking administratibong dataset gamit ang mga propensity score na binuo mula sa edad, naunang kasaysayan ng trabaho, at antas ng kwalipikasyon. Rate ng pagkakatrabaho sa loob ng labindalawang buwan: matched na treated group 46%, matched na comparison group 33%. Tantiya ng epekto sa PSM: 46% − 33% = +13 percentage point na maiuugnay sa programa, sa kondisyong walang hindi-naobserbahang confounder (gaya ng motibasyon) na nagtutulak sa pareho ng pakikilahok at ng outcome.

## Kaugnayan sa software engineering

Ang pagiging posible ng alinman sa mga disenyong ito sa hinaharap ay malaki ang nakasalalay sa mga desisyon sa data engineering na ginawa nang maaga. Ang RDD ay nangangailangan ng tumpak na naitalang running variable at tunay na malinis na eligibility cutoff; ang DiD ay nangangailangan ng maihahambing na panel data sa paglipas ng panahon para sa treated at comparison na lugar, na nangangahulugang pare-parehong join sa mga sistema at taon; ang PSM ay nangangailangan ng mayamang baseline covariate data na nakuha bago ang treatment, hindi muling binuo pagkatapos. Ang data model na dinisenyo kasabay ng [theory of change](../theory-of-change-pabalik-na-pagmamapa-ng-sanhi-mula-sa-layunin-hanggang-sa-mga-aktibidad/) at [logic model](../logic-model-ang-linear-na-diagram-mula-input-hanggang-impact-ng-isang-programa/) mula sa simula — na kumukuha ng baseline covariate, petsa, at mga talaang karapat-dapat sa comparison group — ang nagpapahintulot sa mahigpit na impact evaluation sa hinaharap, sa halip na magastos na pagkukumahog pagkatapos. Tingnan ang [impact evaluation kumpara sa process evaluation](../impact-evaluation-at-process-evaluation-pagkakaiba-ng-pagsusuri-sa-epekto-at-sa-paghahatid/) para sa komplementaryong tanong na hindi nasasagot ng mga pamamaraang ito nang mag-isa.

## Mga karaniwang pagkakamali

- **Pagpilit ng RCT kung hindi posible o hindi etikal**, o kabaligtaran, ang hindi kailanman pagsasaalang-alang sa quasi-experimental na disenyo kahit may tunay na pagkakataon — isang cutoff ng patakaran, yugtu-yugtong rollout — na hindi ginamit.
- **Pagwawalang-bahala sa palagay na parallel-trends sa DiD.** Kung nagkakahiwalay na ang comparison na lugar at ang treated na lugar bago pa ang interbensyon, kontaminado ang paghahambing ng dalawang punto; suriin ang pre-trends, hindi lamang ang bago/pagkatapos.
- **Pag-match lamang sa mga naobserbahang covariate sa PSM.** Ang hindi naobserbahang selection, gaya ng motibasyon ng kalahok, ay maaaring magbaluktot sa tantiya kahit balanse ang mga naobserbahang covariate.
- **Pagmamanipula ng running variable sa RDD.** Kung maiimpluwensyahan ng mga tao ang kanilang iskor para mapabilang sa loob ng eligibility threshold, hindi na naihihiwalay ng discontinuity ang sanhing epekto.

## Mga sanggunian

- HM Treasury, Magenta Book (2020), Annex A: Quasi-Experimental Methods. <https://www.gov.uk/government/publications/the-magenta-book>
- What Works Centre for Local Economic Growth, evidence review methodology. <https://whatworksgrowth.org/>
- Education Endowment Foundation, evaluation guidance. <https://educationendowmentfoundation.org.uk/>
