# Green Book Appraisal (Five-Case Model): pagtatasa ng mga panukalang paggasta ng pamahalaan ng UK

Ang Green Book ay sapilitang gabay ng HM Treasury sa pagtatasa at pagsusuri ng mga panukalang paggasta ng pamahalaan ng UK. Ang pangunahing kasangkapan nito, ang five-case model, ay pumipilit sa business case na sagutin ang limang magkakahiwalay na tanong — magandang ideya ba ito, naghahatid ba ito ng halaga, maaari ba itong i-procure, kaya ba itong bayaran, at kaya ba itong ihatid — sa halip na isiksik ang lahat sa iisang numerong basta ipapasa ng ministro.

## Bakit ito mahalaga

Ang bawat panukalang paggasta ng sentral na pamahalaan ng UK na lampas sa delegadong limitasyon ng departamento ay dapat dumaan sa Green Book appraisal bago mailabas ang pondo, at ang Green Book Review 2020 ng HM Treasury (inilathala matapos ang puna na may kinikilingan ang proseso laban sa mas mahihirap na rehiyon, tingnan ang <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>) ay nagpahigpit sa kinakailangang ihambing ang mga opsyon sa tunay na "do minimum" na baseline at ipakita ang strategic fit bago pa man tasahin ang value for money. Nauna pa sa Green Book ang five-case model mismo — nagmula ito sa Office of Government Commerce bilang karaniwang istruktura ng business case — ngunit isinama ito ng edisyong 2022 ng Green Book bilang sapilitang hugis ng anumang business case na naghahangad ng pag-apruba ng Treasury: <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>.

Ang punto ng paghahati ng case sa lima ay maaaring mabigo ang panukala sa alinmang isang dimensyon anuman ang iba. Ang estratehikong tama at cost-effective na IT replatform ay maaari pa ring bumagsak sa commercial case kung iisang supplier lamang ang makakapaghatid nito (na lumilikha ng single-tender na panganib), o bumagsak sa management case kung walang track record ang departamento sa paghahatid ng programang ganoon kalaki. Itinatago ng iisang iskor ng "value for money" ang mismong ganitong uri ng pagkabigo.

## Ang matematika

Istruktura ang five-case model, hindi pormula, ngunit may sariling kwantitatibo o ebidensyal na pagsubok ang bawat case:

```
1. Strategic case
   Ebidensya ng layunin sa paggasta na nakaugnay sa estratehiya ng organisasyon.
   Pagsubok: may dahilan ba para sa pagbabago? ("do nothing" ay laging opsyon.)

2. Economic case
   Options appraisal laban sa "do minimum" na baseline, gamit ang
   social cost-benefit analysis o cost-effectiveness analysis.
   Pagsubok: aling opsyon ang nagma-maximize ng net public value?
   Tingnan ang ../social-cost-benefit-analysis/ at ../cost-effectiveness-analysis-in-government/

3. Commercial case
   Pakikipag-ugnayan sa merkado, ruta ng procurement, paglalaan ng panganib
   sa pagitan ng bumibili at supplier.
   Pagsubok: maaari bang i-procure ang piniling opsyon sa katanggap-tanggap na termino?

4. Financial case
   Affordability sa loob ng limitasyon ng badyet ng departamento, pinagmumulan ng pondo,
   pagtrato sa balance sheet.
   Pagsubok: kaya ba natin itong bayaran, ngayong taon at sa bawat taon pagkatapos?

5. Management case
   Pamamahala, plano ng proyekto, plano ng benefits realization, risk register.
   Pagsubok: kaya ba talagang ihatid ito ng organisasyong ito?
   Tingnan ang ../benefits-realization/
```

Ang economic case ang kinaroroonan ng kwantitatibong appraisal: inihahambing ang mga opsyon batay sa net present value na inayos ayon sa [social discount rate](../social-discount-rate-kung-paano-pinahahalagahan-ang-hinaharap-sa-kasalukuyang-pagpapasya/), gamit ang paraan ng [social cost-benefit analysis](../social-cost-benefit-analysis-pagtimbang-ng-gastos-at-benepisyong-panlipunan-sa-iisang-halagang-pera/), o, kung hindi matapat na maipepresyo ang mga benepisyo, sa pamamagitan ng [cost-effectiveness analysis](../cost-effectiveness-analysis-sa-pamahalaan/) o [multi-criteria decision analysis](../multi-criteria-decision-analysis-pagmamarka-at-pagtitimbang-ng-mga-opsyon-sa-maraming-pamantayan/).

## Halimbawang kalkulasyon

**Lokal na awtoridad**: ang konsehong nagtatasa ng £12 milyong IT system para sa pagkukumpuni ng pabahay ay pinapatakbo ang limang case sa ganitong paraan. Strategic case: lalabag ang backlog ng pagkukumpuni sa statutory decent-homes standard sa loob ng 18 buwan kung walang interbensyon. Economic case: tatlong opsyong may presyo sa loob ng 10-taong panahon ng appraisal sa 3.5% na discount rate (ayon sa karaniwang social time preference rate ng Green Book 2022) — "do minimum" (i-patch ang legacy system, NPV −£4.1m), "buy" (COTS platform, NPV +£2.3m), "build" (bespoke na plataporma, NPV +£0.6m kapag inilapat ang optimism bias na 40% para sa software development laban sa hindi dinidiskwentong capital cost, ayon sa Annex A ng Green Book). Panalo ang buy sa economic case. Commercial case: may dalawang maaasahang supplier, posible ang mapagkumpitensyang tender — pasado. Financial case: may magagamit na kapital mula sa Public Works Loan Board, kasya ang revenue costs sa medium-term financial plan — pasado. Management case: nakapaghatid na ang konseho ng dalawang katulad na sistema sa nakaraang limang taon — pasado. Tumutuloy ang panukala sa "buy."

**Departamento ng sentral na pamahalaan**: ang panukalang may matibay na economic case (NPV +£40m) ngunit iisang supplier lamang ang may kaukulang akreditasyon ay bumabagsak sa pagsubok ng commercial case para sa mapagkumpitensyang tensyon, na pumipilit sa single-tender waiver (na may sariling pasanin ng pagsusuri) o sa muling pagdidisenyo ng espesipikasyon para buksan ang merkado — hindi kailanman ito maibubunyag ng economic case lamang.

## Kaugnayan sa software engineering

Karaniwang economic case lamang ang nakikita ng mga engineering team sa loob ng pamahalaan o mga organisasyong pinopondohan ng grant, dahil ito ang bahaging hinihiling na pangatwiranan ng pamunuan ng produkto at engineering ("ano ang ROI ng migration na ito?"). Ngunit ang business case na papasa sa Treasury o sa komite ng grant ay nangangailangan ng lahat ng lima, at madalas na pinakamahusay ang posisyon ng mga engineer para sagutin ang commercial case (maaari ba talaga itong i-procure, o ikukulong ba tayo nito sa proprietary na format ng isang vendor?) at ang management case (mayroon ba tayong kakayahang maghatid, o nakadepende ito sa tatlong partikular na taong hindi aalis?). Ituring ang kahilingang "mga numero lamang ng business case" bilang kahilingan sa ikalimang bahagi lamang ng aktuwal na desisyon. Tingnan ang [value for money](../value-for-money-ang-pormal-na-pagsusuri-kung-sulit-ang-paggastos-ng-pamahalaan/) kung paano karaniwang binubuod ang output ng economic case, at ang [total cost of ownership](../total-cost-of-ownership-sa-it-ng-pamahalaan-ang-buong-gastos-sa-buong-buhay-ng-sistema/) para sa karaniwang kwantitatibong ubod ng financial case.

## Mga karaniwang pagkakamali

- **Pagsulat muna ng economic case at pagtutugma ng strategic case dito.** Natuklasan ng Green Book Review 2020 na ang mismong pagkabigong ito ang nagtulak sa bias ng appraisal tungo sa mga lugar at sektor na mahusay nang may ebidensya, na nagpatibay sa hindi pagkakapantay ng rehiyon; dapat itatag ng strategic case ang layunin bago ihambing ang mga opsyon.
- **Pagtrato sa "do minimum" bilang "do nothing."** Ang tamang baseline ay ang pinakamababang gastos na opsyon na tumutupad pa rin sa minimum na legal o pangkaligtasang obligasyon, hindi guniguning zero na gastos — ang paghahambing laban sa literal na zero ay nagpapalobo sa tila halaga ng bawat opsyon.
- **Paglaktaw sa commercial at management case dahil matibay ang economic case.** Ang panukalang mataas ang NPV na hindi maaaring i-procure nang mapagkumpitensya o ihatid ng nagtataguyod na organisasyon ay hindi pondohang panukala; karaniwang tinatanggihan ito ng mga reviewer ng Treasury sa mga dahilang ito kahit kapani-paniwala ang economic case.
- **Minsan lamang paggamit ng five-case model, sa simula.** Inuutos ng Green Book na balikan ang case sa bawat susunod na approval gate (strategic outline case, outline business case, full business case) habang tumitibay ang gastos at ebidensya — ang case na nakapako sa yugto ng outline ay nalalampasan ang pagtaas ng gastos na mahuhuli sana ng mas huling gate.

## Mga sanggunian

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury. "Green Book Review 2020: findings and response." 2020.
  <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>
- HM Treasury / Infrastructure and Projects Authority. "Guide to developing the project business
  case." <https://www.gov.uk/government/publications/project-business-case-guide>
