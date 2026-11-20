# Multi-criteria decision analysis: pagmamarka at pagtitimbang ng mga opsyon sa maraming pamantayan

Ang MCDA ay nagmamarka at nagtitimbang ng mga opsyon batay sa ilang magkakaibang pamantayang may kani-kaniyang bigat nang sabay-sabay, at nagbubunga ng ranggong paghahambing nang hindi pinipilit na ipasok ang bawat pamantayan sa iisang iskala ng salapi o likas na yunit. Ito ang paraan ng appraisal para sa mga desisyong ang mga outcome na mahalaga ay talagang hindi maisasalin sa iisang numero.

## Bakit ito mahalaga

Tahasang pinahihintulutan ng Green Book ang MCDA (tinatalakay ito nang direkta sa apendiks ng case study sa Box 2 at sa Annex A) para sa mga appraisal kung saan ang mga benepisyo ay "genuinely incommensurable" — kung saan ang pag-convert ng lahat sa pera sa pamamagitan ng [social cost-benefit analysis](../social-cost-benefit-analysis-pagtimbang-ng-gastos-at-benepisyong-panlipunan-sa-iisang-halagang-pera/), o sa iisang outcome sa pamamagitan ng [cost-effectiveness analysis](../cost-effectiveness-analysis-sa-pamahalaan/), ay magpapalihis sa halip na magpaliwanag sa desisyon (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>). Halimbawa, ang pagpili ng lugar para sa bagong bilangguan ay nagtitimbang ng gastos sa kapital laban sa epekto sa komunidad, koneksyon sa transportasyon, epekto sa kapaligiran, at kakayahang mag-recruit ng kawani — mga pamantayang walang iisang yunit, at kung pipilitin ang iisang yunit (karaniwan ay pera) ay maisisingit ang isang value judgement tungkol sa relatibong halaga ng, halimbawa, epekto sa kapaligiran kumpara sa gastos, na nagbabalatkayong obhetibong aritmetika.

Ang katapatan ng MCDA ang pangunahin din nitong kahinaan: dahil ang mga bigat (weight) ay itinatakda ng nagsasagawa ng appraisal (o ng isang panel), ang pamamaraan ay kasinglehitimo lamang ng proseso ng pagtatakda ng bigat. Tahasang nakasaad sa gabay ng Green Book na dapat napagkasunduan at nailathala ang mga pamantayan at bigat *bago* markahan ang mga opsyon, mismo upang hindi makapagtrabaho nang paurong ang isang reviewer mula sa paboritong opsyon tungo sa mga bigat na magbibigay-katwiran dito.

## Ang matematika

```
Para sa bawat opsyon i at pamantayan j:
  Score_ij   = ang performance ng opsyon ayon sa pamantayang iyon (madalas 0-100
               o 1-10, mula sa ebidensya, paghuhusga ng eksperto, o pagmamarka ng
               mga stakeholder)
  Weight_j   = relatibong halaga ng pamantayan j; ang mga bigat ay may kabuuang 1 (o 100)

Timbang na marka ng opsyon i = Σ_j (Score_ij × Weight_j)

Pamamaraan:
1. Pagkasunduan ang hanay ng mga pamantayan at bigat BAGO markahan ang alinmang
   opsyon (karaniwang paraan ng pagkuha ng bigat ang swing weighting o pairwise
   comparison, hal. AHP).
2. Markahan ang bawat opsyon sa bawat pamantayan sa iisang iskala, mula sa
   ebidensya hangga't maaari.
3. Kalkulahin ang mga timbang na kabuuan; i-ranggo ang mga opsyon.
4. Subukin ang sensitivity ng mga bigat: nananatili ba ang ranggo kahit may
   makatwirang hindi pagkakasundo kung gaano kahalaga ang bawat pamantayan?
```

Hindi nagbubunga ang MCDA ng matatag na ganap na halaga gaya ng net present value ng SCBA — ranggo lamang ang ibinibigay nito, na nakasalalay sa napagkasunduang mga bigat. Katangian ito kapag ang desisyon ay talagang tungkol sa pagpapalit-palit ng mga bagay na hindi maitutumbas, at pananagutan naman kung gagamitin upang iwasan ang mas mabigat na gawain ng monetization kung posible naman talaga ito.

## Halimbawang kalkulasyon

**Lokal na awtoridad**: ang isang konseho na pumipili ng lokasyon para sa bagong recycling centre ng basura ng sambahayan ay nagmamarka ng tatlong site sa apat na pamantayan, na pinagtimbang ng cross-department na panel bago ang anumang pagbisita sa site:

```
Mga pamantayan (bigat):   Gastos sa kapital (30%)  Access sa transportasyon (25%)
                           Epekto sa komunidad (25%)  Epekto sa kapaligiran (20%)

Marka ng mga site (0-100, mas mataas = mas mabuti):
Site A: gastos 80, access 60, komunidad 40, kapaligiran 70
Site B: gastos 60, access 90, komunidad 70, kapaligiran 50
Site C: gastos 90, access 50, komunidad 80, kapaligiran 60

Mga timbang na kabuuan:
Site A = 80(.30) + 60(.25) + 40(.25) + 70(.20) = 24+15+10+14 = 63
Site B = 60(.30) + 90(.25) + 70(.25) + 50(.20) = 18+22.5+17.5+10 = 68
Site C = 90(.30) + 50(.25) + 80(.25) + 60(.20) = 27+12.5+20+12 = 71.5
```

Pinakamataas ang ranggo ng Site C. Ang sensitivity run na naglilipat ng bigat ng epekto sa komunidad mula 25% tungong 35% (kinukuha ang 10 puntos mula sa gastos sa kapital) ay nagpapabago sa kabuuan ng Site C tungong 71.5 − 3 + 8 = 76.5 at ng Site B tungong 68 − 6 + 7 = 69 — nangunguna pa rin ang Site C, kaya matatag ang ranggo laban sa makatwirang hindi pagkakasundo sa pagtitimbang, na eksaktong pagsusuring inaasahan ng Green Book na makita sa ulat.

**Charity**: ang isang foundation na nagbibigay ng grant at pumipili sa pagitan ng pagpopondo sa serbisyo ng payo sa utang, network ng food bank, at programa sa financial literacy ay gumagamit ng MCDA sa halip na SROI (tingnan ang [social return on investment](../social-return-on-investment-pagsukat-ng-halagang-panlipunan-kaugnay-ng-puhunan/)) mismo dahil nagkakaiba, nang may mabuting loob, ang mga trustee kung dapat bang mas mabigat ang tulong sa krisis o ang pag-iwas — hinahayaan sila ng MCDA na pagkasunduan ang *hugis* ng hindi pagkakasundo (isang saklaw ng bigat) sa halip na magkunwaring nalulutas ito ng iisang ratio ng SROI.

## Kaugnayan sa software engineering

Likas na kasangkapan ang MCDA sa pagpili ng vendor at arkitektura kapag talagang nagbabanggaan ang mga pamantayan — ang pagpili sa pagitan ng case management system na naka-host sa cloud at on-premises ay nagtitimbang ng gastos, panganib sa data sovereignty, accessibility, at bilis ng paghahatid sa paraang hindi maisasalin sa iisang numero. Dapat igiit ng mga engineering lead na gawin ang pagtitimbang bago markahan ang mga opsyon, gaya ng hinihingi ng Green Book, dahil ang pagtitimbang na ginawa matapos makita ang shortlist ay tiyak na dumadausdos tungo sa opsyong paborito na ng grupo. Tingnan ang [build vs buy sa pamahalaan](../build-vs-buy-sa-pamahalaan-gagawin-o-bibilhin/) para sa karaniwang aplikasyon ng MCDA, at ang [public value scorecard](../public-value-scorecard-balanced-scorecard-para-sa-mga-organisasyong-may-misyon-sa-halip-na-tubo/) para sa kaugnay na kasangkapan sa estrukturadong pagmamarka na ginagamit pagkatapos, hindi bago, ng desisyon.

## Mga karaniwang pagkakamali

- **Pagtatakda ng bigat matapos makita ang mga opsyon.** Ito ang pinakakaraniwang paraan ng pandaraya sa MCDA, sinadya man o hindi; ilathala ang mga bigat bago magmarka, at itala kung sino ang nagtakda.
- **Pagtrato sa timbang na kabuuan bilang matigas na numero.** Hindi estadistikang makabuluhang agwat ang markang 71.5 laban sa 68 maliban kung kinukumpirma ng sensitivity analysis na matatag ang ranggo; mag-ulat ng saklaw, hindi ng huwad na katumpakan.
- **Paggamit ng MCDA upang iwasan ang monetization na posible naman.** Kung kapani-paniwalang mapepresyuhan ang karamihan ng mga pamantayan, ang pagpili sa MCDA sa halip na [SCBA](../social-cost-benefit-analysis-pagtimbang-ng-gastos-at-benepisyong-panlipunan-sa-iisang-halagang-pera/) ay nagtatapon ng impormasyong magagamit sana ng appraisal.
- **Pagpapahintulot sa iisang nangingibabaw na stakeholder na magtakda ng lahat ng bigat nang mag-isa.** Inaasahan ng mabuting praktika ng Green Book na kukunin ang mga bigat mula sa kinatawang panel, hindi sa direktor na nag-sponsor, upang hindi na lamang muling mabuo ng appraisal ang gusto na ng taong iyon.

## Mga sanggunian

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Annex A
  (multi-criteria decision analysis) and Box 2 case studies.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Communities and Local Government. "Multi-criteria analysis: a manual." 2009.
  <https://www.gov.uk/government/publications/multi-criteria-analysis-a-manual>
- Belton V, Stewart TJ. "Multiple Criteria Decision Analysis: An Integrated Approach." Kluwer,
  2002.
