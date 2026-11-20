# Cost-Effectiveness Analysis sa Pamahalaan

Inihahambing ng cost-effectiveness analysis (CEA) ang mga gastos ng magkakaibang paraan ng pagkamit ng *parehong* kinalabasan (outcome), na ipinapahayag sa natural na yunit — gastos bawat rough sleeper na napatira, gastos bawat mag-aaral na naabot ang inaasahang pamantayan, gastos bawat toneladang CO2 na nabawasan — nang hindi ginagawang pera ang mismong outcome.

## Bakit ito mahalaga

Itinuturing ng Green Book ang CEA bilang fallback na pamamaraan kapag ang kahilingan ng [social cost-benefit analysis](../social-cost-benefit-analysis-pagtimbang-ng-gastos-at-benepisyong-panlipunan-sa-iisang-halagang-pera/) na gawing pera ang bawat benepisyo ay hindi lamang mahirap kundi hindi tapat — kung saan ang paglalagay ng mapagkakatiwalaang presyo sa outcome ay mangangailangan ng mga palagay na walang aktwal na may-ari (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>, Chapter 5, sa options appraisal kung saan hindi madaling gawing pera ang mga outcome). Ang CEA ang pamamaraang pinakadirektang hiniram mula sa health economics — kapareho ng istruktura kung paano inihahambing ng NICE ang mga paggamot gamit ang gastos bawat Quality-Adjusted Life Year — ngunit inilalapat sa mga programang pampubliko na hindi pangkalusugan: mga interbensyon sa edukasyon bawat puntos ng outcome ng mag-aaral, mga programa sa pabahay bawat sambahayang naiwasang maging walang tahanan, mga programa sa empleyo bawat tuloy-tuloy na outcome ng trabaho.

Ang dahilan kung bakit may sariling puwesto ang CEA kasama ng SCBA sa halip na masaklaw nito ay ang pagpilit ng halagang pera sa ilang outcome ay nagbubunga ng bilang na sapat ang katumpakan upang magmukhang may awtoridad at sapat na pinagtatalunan upang walang halaga sa pampublikong debate — ang pagpepresyo sa "batang nagbabasa sa inaasahang pamantayan" ay nag-aanyaya ng eksaktong hamong sumisira sa business case sa select committee. Iniiwasan ng CEA ang argumento sa pamamagitan ng pagtangging pasukin ito: nire-rank nito ang mga opsyon batay sa gastos bawat yunit ng *mismong outcome*, at ibinabalik sa strategic case ang hiwalay na pampulitikang paghatol kung sulit bang ituloy ang outcome sa simula pa lamang.

## Ang matematika

```
Cost-effectiveness ratio (average) = Kabuuang gastos / Kabuuang yunit ng outcome na nakamit

Incremental cost-effectiveness ratio (ICER), paghahambing ng opsyon A sa opsyon B:
ICER = (Gastos_A − Gastos_B) / (Outcome_A − Outcome_B)

Pamamaraan:
1. Itakda ang yunit ng outcome at paraan ng pagsukat sa lahat ng opsyong inihahambing.
2. Ipresyo ang bawat opsyon sa parehong batayan (tingnan ang ../green-book-appraisal/, financial case)
   sa parehong time horizon.
3. Itapon ang mga dominated na opsyon: anumang opsyong mas mahal bawat yunit kaysa sa mas murang
   alternatibong may pareho o mas mahusay na outcome ay tinatanggal.
4. I-rank ang natitirang opsyon batay sa incremental, hindi average, na cost-effectiveness ratio.
```

Hindi masasabi ng CEA nang mag-isa kung sulit ba talagang pondohan ang isang programa — kung alin lamang sa ilang paraan tungo sa iisang layunin ang pinakamura bawat yunit. Ang pagpapasya kung sulit ang layunin mismo ay nangangailangan ng pagbabalik sa SCBA (kung may mapagkakatiwalaang valuation) o ng pampulitika/estratehikong paghatol na labas sa matematika. Kung ang mga outcome ay hindi talaga mapaliliit sa iisang yunit — dahil maraming outcome ang nililikha ng programa na mahalaga sa magkakaibang paraan — gamitin ang [multi-criteria decision analysis](../multi-criteria-decision-analysis-pagmamarka-at-pagtitimbang-ng-mga-opsyon-sa-maraming-pamantayan/).

## Halimbawang kalkulasyon

**Lokal na awtoridad**: inihahambing ng isang council ang tatlong paraan ng pagbabawas ng rough sleeping, bawat isa ay ipinresyo sa loob ng isang taon laban sa outcome na "mga indibidwal na nailipat sa matatag na tirahan nang 6+ buwan":

```
Opsyon                          Gastos     Naabot na outcome   Avg CER
Housing First (masinsin)        £900,000   60                  £15,000/outcome
Hostel + suporta sa paglipat    £600,000   50                  £12,000/outcome
Outreach + pribadong paupahan   £350,000   20                  £17,500/outcome

ICER, Hostel kumpara sa Outreach:  (600k−350k)/(50−20) = £8,333 bawat karagdagang outcome
ICER, Housing First kumpara sa Hostel: (900k−600k)/(60−50) = £30,000 bawat karagdagang outcome
```

Dominado ng Hostel ang Outreach sa average na gastos, ngunit ang *incremental* na hakbang mula Outreach tungong Hostel ay £8,333 lamang bawat karagdagang taong napatira — mura kumpara sa hakbang tungong Housing First, na £30,000 bawat karagdagang taong lampas sa nakakamit ng Hostel. Ang awtoridad na may limitadong badyet na nagpapalawak ay dapat mas piliing palawakin ang Hostel bago ang Housing First, kahit mas maganda ang itsura ng Housing First sa sarili nitong average na ratio.

**Pambansang pamahalaan**: inihahambing ang isang literacy catch-up programme sa tatlong modelo ng paghahatid batay sa "gastos bawat mag-aaral na naabot ang inaasahang pamantayan sa pagbabasa para sa edad": one-to-one na tutoring (£1,800/mag-aaral), small-group na tutoring (£700/mag-aaral), at digital-only na interbensyon (£150/mag-aaral, ngunit 40% lamang ng antas ng outcome ng small-group na tutoring bawat naka-enroll na mag-aaral kapag naisaayos para sa pagbaba ng engagement). Kapag naisaayos para sa aktwal na pagkumpleto, ang digital-only ay £375 bawat mag-aaral na umabot sa pamantayan — pinakamura pa rin, ngunit hindi masasabi ng CEA kung katanggap-tanggap na kapalit ang mas maliit na ganap na bilang ng mga mag-aaral na natulungan ng digital-only, kung ihahatid sa parehong badyet ng small-group, laban sa pag-abot sa mas kaunting mag-aaral nang mas malalim; distributional na paghatol iyon na ibinabalik ng CEA sa mga tagapagpasya.

## Kaugnayan sa software engineering

Angkop na balangkas ang CEA tuwing sinusuri ng mga engineering team ang mga paraan ng paghahatid para sa *parehong* outcome ng serbisyo — gastos bawat matagumpay na na-verify na pagkakakilanlan sa tatlong vendor ng identity verification, gastos bawat kasong wastong na-triage sa dalawang disenyo ng casework automation, gastos bawat naresolbang depekto sa accessibility sa in-house kumpara sa kinontratang remediation. Ang disiplinang direktang inaangkat nito: itakda ang yunit ng outcome bago ihambing ang mga gastos (hindi "mga ticket na naisara" — isang output — kundi "pangangailangan ng user na aktwal na nalutas"), at laging kuwentahin ang incremental ratio sa pagitan ng live na sistema at ng iminumungkahing kapalit, hindi ang average na gastos ng bawat sistema nang magkahiwalay. Tingnan ang [outcome kumpara sa output](../outcomes-laban-sa-outputs-ang-pagkakaiba-ng-naihatid-at-ng-nagbago/) at [gastos bawat outcome](../gastos-bawat-outcome-pagsukat-ng-tunay-na-pagbabago/).

## Mga karaniwang pagkakamali

- **Paghahambing ng average, hindi incremental, na ratio sa pagpapasya sa pagpapalawak.** Gaya ng ipinapakita ng halimbawa ng rough sleeping, ang opsyong may pinakamahusay na average na ratio ay hindi laging pinakamurang susunod na yunit ng outcome na bibilhin.
- **Pagpili ng yunit ng outcome na output pala.** Ang "mga referral na ginawa" o "mga sesyong inihatid" ay sumusukat ng aktibidad, hindi ng outcome na dahilan ng programa; ang CEA sa mga output ay nagbubunga ng bilang na mukhang tiyak ngunit sumasagot sa maling tanong.
- **Paghahambing sa tunay na magkakaibang outcome.** Balido lamang ang CEA kung ang bawat opsyon ay may iisang outcome na sinusukat sa iisang paraan; ang paghahambing ng "gastos bawat rough sleeper na napatira" at "gastos bawat care leaver sa matatag na tenancy" ay nangangailangan ng generic na sukatan ng outcome o [multi-criteria decision analysis](../multi-criteria-decision-analysis-pagmamarka-at-pagtitimbang-ng-mga-opsyon-sa-maraming-pamantayan/), hindi CEA.
- **Pagbalewala sa tibay ng outcome.** Ang mas murang opsyon na may mga outcome na hindi nananatili (mag-aaral na bumabalik sa dati pagkatapos ng interbensyon) ay hindi talaga mas cost-effective kapag sinukat sa maihahambing na horizon; pagtugmain ang panahon ng follow-up sa mga opsyong inihahambing.

## Mga sanggunian

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Chapter 5.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- National Institute for Health and Care Excellence. "Developing NICE guidelines: the manual" —
  ang pamamaraan ng cost-effectiveness na hinihiraman ng adaptasyong ito ng pamahalaan.
  <https://www.nice.org.uk/process/pmg20>
- What Works Centre for Homelessness Impact. Cost-effectiveness evidence on homelessness
  interventions. <https://whatworks-homelessness.org.uk/>
