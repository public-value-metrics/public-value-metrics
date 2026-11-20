# Distributional Weighting: pagtitimbang ng benepisyo ayon sa kung sino ang tumatanggap

Inaayos ng distributional weighting ang halagang pananalapi ng isang gastos o benepisyo ayon sa tumatanggap nito, batay sa prinsipyong mas mahalaga ang karagdagang pound sa mahirap na sambahayan kaysa sa mayaman. Nagbibigay ang Green Book ng HM Treasury ng tahasang paraan para ilapat ang pagtitimbang na ito, na nakabatay sa lumiliit na marginal utility ng kita, upang hindi tahimik na ituring ng mga appraisal na pareho ang halaga ng isang pound na natanggap ng pinakamayamang decile at ng pinakamahirap.

## Bakit ito mahalaga

Ang karaniwang cost-benefit analysis ay nagsusuma ng mga pound nang hindi itinatanong kung kaninong pound ang mga ito, na ipinapalagay na pareho ang halaga ng isang pound sa lahat — palagay na matagal nang alam ng mga ekonomista na mali. Magkaiba ang karanasan ng sambahayang kumikita ng £15,000/taon at ng sambahayang kumikita ng £150,000/taon sa pagtanggap ng £1,000, dahil bumababa ang marginal utility ng kita habang tumataas ang kita. Kung hindi tinitimbang, sistematikong pinapaboran ng karaniwang appraisal ang mga interbensyong nakikinabang sa mas mayayaman at mas maayos na ang kalagayang grupo, dahil pinalolobo ng mas mataas nilang kakayahang gumastos ang halagang pananalapi ng mga benepisyong umaabot sa kanila (ang pag-upgrade ng parke malapit sa mamahaling pabahay ay "nagpapakita" ng mas malaking benepisyo sa halaga ng ari-arian kaysa sa parehong pag-upgrade malapit sa murang pabahay, dahil lamang mas mataas ang presyo, hindi dahil mas malaki ang pakinabang sa kapakanan).

Ang karagdagang gabay ng Green Book sa distributional analysis, na pinalakas matapos tugunan ng 2020 review ng Treasury ang puna na sistematikong pinapaboran ng metodolohiya ng appraisal ang London at South East, ay naglalatag ng pormal na paraan ng pagtitimbang batay sa ipinapalagay na elasticity ng marginal utility ng kita na humigit-kumulang 1.3 — ibig sabihin, ang pagdoble ng kita ay halos nagpapahati (partikular, 2^-1.3 ≈ 0.41 beses) sa marginal na halaga ng karagdagang pound. Hindi ito simpleng pag-round: maaari nitong baguhin kung alin sa dalawang magkatunggaling programa ang may mas mataas na net present value, lalo na kapag inihahambing ang interbensyong nakatuon sa isang deprived na lugar laban sa isang kumalat sa pangkalahatang populasyon.

## Ang matematika

Ang distributional weight ng Green Book para sa isang pound ng benepisyong napupunta sa sambahayan sa antas ng kitang y, kaugnay ng isang pound sa pambansang karaniwang antas ng kitang ȳ:

```
Weight(y) = (ȳ / y)^e

kung saan:
  y  = kita ng sambahayan (o kita ng apektadong grupo)
  ȳ  = karaniwang (reference) kita ng sambahayan
  e  = elasticity ng marginal utility ng kita (Green Book: humigit-kumulang 1.3)
```

Paglalapat ng mga weight sa netong benepisyo:

```
Natimbang na benepisyo = Σ [hindi natimbang na benepisyo sa grupong i × Weight(y_i)]
```

Ang grupong kumikita ng kalahati ng pambansang karaniwan (y = 0.5ȳ) ay may weight na (1/0.5)^1.3 = 2^1.3 ≈ 2.46 — bawat pound ng benepisyo sa grupong iyon ay itinuturing na may halagang humigit-kumulang 2.46 beses ng isang pound sa sambahayang may karaniwang kita.

## Halimbawang kalkulasyon

**Dalawang magkatunggaling lokal na programa**, bawat isa ay may hindi natimbang na netong benepisyong £2 milyon/taon, na nag-aagawan sa iisang regional growth fund:

- *Programa A*: iskema ng suporta sa negosyo sa maunlad na bayan, karaniwang kita ng sambahayan £45,000 (humigit-kumulang 1.3× ng ipinapalagay na pambansang karaniwang £35,000).
- *Programa B*: programa sa kasanayan sa isang deprived na ward, karaniwang kita ng sambahayan £18,000 (humigit-kumulang 0.51× ng pambansang karaniwan).

```
Weight(A) = (35,000 / 45,000)^1.3 = (0.778)^1.3 ≈ 0.72
Weight(B) = (35,000 / 18,000)^1.3 = (1.944)^1.3 ≈ 2.53

Natimbang na benepisyo A = £2,000,000 × 0.72 = £1.44 milyon
Natimbang na benepisyo B = £2,000,000 × 2.53 = £5.06 milyon
```

Kung hindi natimbang, magkapantay ang dalawang programa. Kapag natimbang para sa distributional na epekto, mahigit tatlong beses na mas malaki ang benepisyo ng Programa B — resultang bumabaligtad sa rekomendasyon sa pagpopondo at sumasalamin sa tahasang layunin ng Green Book sa pag-uutos na ipakita ang pagtitimbang, hindi lamang ang hindi natimbang na benefit-cost ratio.

**Paglalaan ng grant ng charity**: ang tagapondong naghahambing ng £500,000 na grant na umaabot sa 1,000 sambahayang mababa ang kita (weight ≈ 2.0, natimbang na halagang katumbas ng £1 milyon) laban sa parehong £500,000 na umaabot sa 1,000 sambahayang katamtaman ang kita (weight ≈ 1.0, natimbang na halagang katumbas ng £500,000) ay dapat tahasang ipakita ang distributional na argumento sa papel nito para sa board, at huwag iasa sa hinuha.

## Kaugnayan sa software engineering

Bihirang lumitaw nang direkta ang distributional weighting sa mga sukatan ng paghahatid ng software, ngunit dapat nitong hubugin kung paano dinidisenyo ng mga engineering at data team ang pagsukat at targeting:

- Sa pagbuo ng impact dashboard o benefits calculator, ilantad ang profile ng kita o deprivation ng apektado, hindi lamang ang pinagsama-samang kabuuang benepisyo — itinatago ng mga pinagsama-samang bilang na walang distributional breakdown ang mismong pagbaliktad na ipinakita sa itaas.
- Iugnay ang lohika ng targeting sa disenyo ng serbisyo sa parehong datos ng deprivation na ginagamit ng Green Book — tingnan ang [Index of Multiple Deprivation](../index-of-multiple-deprivation-opisyal-na-sukatan-ng-relatibong-kahirapan-ng-maliliit-na-lugar-sa-england/) — upang masuri ang abot ng isang serbisyong digital para sa katarungan (equity), hindi lamang kahusayan (ang pinagtatalunang ikaapat na E sa [value for money](../value-for-money-ang-pormal-na-pagsusuri-kung-sulit-ang-paggastos-ng-pamahalaan/)).
- Kapag naglalaan ang isang algorithm ng kakaunting yaman (appointment slot, oras ng caseworker, subsidy), ang hindi natimbang na objective function na "i-maximize ang kabuuang benepisyo" ay, sa mismong disenyo, magpaparami ng parehong bias na itinatama ng pagtitimbang ng Green Book — tahasang ipaalam ito sa mga may-ari ng patakaran bago mag-optimize.

## Mga karaniwang pagkakamali

- **Hindi pare-parehong paglalapat ng distributional weight sa isang portfolio.** Ang pagtitimbang sa benepisyo ng isang programa ngunit hindi sa katunggali nito ay nagbubunga ng baluktot, hindi mas patas, na paghahambing; kinakailangan ng Green Book ang magkatulad na pagtrato.
- **Paggamit ng halaga ng ari-arian o merkado bilang proxy ng kapakanan nang walang pagsasaayos.** Baluktot na mismo ang mga presyo sa merkado dahil sa kasalukuyang hindi pagkakapantay ng kita, na siyang itinatama ng distributional weighting — ang paggamit ng hindi naayos na halaga sa merkado ay maaaring magbilang nang dalawang beses sa bias.
- **Pagwawalang-bahala sa pagkakaiba sa loob ng grupo.** Ang pagtitimbang batay sa karaniwang kita ng lugar (hal. decile ng Index of Multiple Deprivation) ay maaaring magmali ng representasyon sa mga indibidwal na hindi tumutugma sa karaniwan ng kanilang lugar; gamitin ang pinakamaselang datos ng kita na makatwirang magagamit.
- **Pagtrato sa elasticity na 1.3 bilang pandaigdigang konstante.** Mismong binabanggit ng Green Book na tantiya ito na may makatwirang saklaw; subukin ang sensitibidad ng mahahalagang desisyon laban sa mga alternatibong elasticity sa halip na ituring na eksakto ang 1.3.

## Mga sanggunian

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation", and
  supplementary guidance on distributional impacts (2022 edition).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury, "Green Book Review 2020: Findings and Response" (addressing regional-bias criticism).
  <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>
- Fujiwara D, Campbell R. "Valuation Techniques for Social Cost-Benefit Analysis." HM Treasury/DWP,
  2011 (background on marginal utility of income elasticity estimates).
