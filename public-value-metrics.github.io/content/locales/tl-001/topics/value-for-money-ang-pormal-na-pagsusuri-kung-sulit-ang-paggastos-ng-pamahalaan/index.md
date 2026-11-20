# Value for money: ang pormal na pagsusuri kung sulit ang paggastos ng pamahalaan

Ang value for money ay pormal na pagsusulit ng pampublikong sektor ng UK kung nakakamit ng paggastos ang pinakamahusay na magagamit na balanse ng gastos at benepisyo. Binabalangkas ito ng Green Book ng HM Treasury sa pamamagitan ng tatlong "E" — economy, efficiency, at effectiveness — kasama ang equity bilang lalong pinagtatalunang ikaapat. Ang bawat business case ng pampublikong sektor na nakakapasa sa pagsusuri ay kailangang sagutin nang tahasan ang tatlo, hindi basta ipahayag na "sulit" ang paggastos.

## Bakit ito mahalaga

Hindi kasingkahulugan ng "mura" ang VFM. Tahasan ang Green Book (HM Treasury, edisyong 2022) na ang pagbili ng pinakamababang-gastos na opsyon (economy) nang hindi sinusuri kung nagbubunga ito ng nilalayong kinalabasan (effectiveness) ay karaniwan at magastos na pagkakamali — ang procurement na nakatitipid ng 10% sa unit cost ngunit naghahatid ng 40% na mas kaunting impact ay mas masamang halaga, hindi mas mabuti. Pinipilit ng balangkas ng tatlong E na paghiwalayin ng business case ang tatlong tunay na magkakaibang paraan ng pagkabigo: sobrang pagbabayad para sa mga input, pag-aaksaya ng mga input sa pagpapalit tungo sa output, at paggawa ng mga output na hindi nagiging kinalabasang gusto ng sinuman. Nakaayos sa paligid ng tatlong-bahaging pagsusulit na ito ang mga kontrol sa paggastos ng pamahalaan ng UK — mga approval point ng Treasury, mga pag-aaral ng value-for-money ng National Audit Office (NAO), at mga pagtataya ng accounting officer ng departamento — kaya ang business case sa engineering na gastos (economy) lang ang tinutugunan ay babagsak sa pagsusuri kahit matino ang teknolohiya.

Pinagtatalunan ang "ikaapat na E", ang equity, dahil maaari itong sumalungat sa iba pang tatlo: bihirang pinakapatas ang pinakamabisang paraan ng pagbibigay ng serbisyo sa buong bansa, dahil ang pagtutok ng paghahatid sa pinakamurang abutin na mamamayan ay madalas nangangahulugan ng pagpapabaya sa mga pinakamahirap abutin. Tumugon ang rebisyon ng Green Book noong 2020 sa puna (kabilang mula sa Treasury Select Committee noong 2020 at IPPR North) na sistematikong pinapaboran ng purong cost-benefit ratio ang mga rehiyong mayaman na, sa pag-uutos na tahasang tugunan ng mga appraisal ang distributional impact — tingnan ang [distributional weighting](../distributional-weighting-pagtitimbang-ng-benepisyo-ayon-sa-kung-sino-ang-tumatanggap/).

## Ang matematika

Hindi iisang ratio ang VFM kundi diagnostic na may tatlong (o apat) bahagi, na inilalapat nang sunud-sunod:

```
Economy:       Binibili ba ang mga input sa pinakamababang makatwirang gastos para sa
               kinakailangang kalidad?  (£ kada yunit ng input)

Efficiency:    Gaano kahusay ang pagpapalit ng mga input tungo sa mga output?
               (mga output / mga input, hal. kasong naproseso kada oras ng caseworker)

Effectiveness: Talaga bang nagbubunga ng nilalayong kinalabasan ang mga output?
               (kinalabasang nakamit / kinalabasang nilayon)

[Equity]:      Pantay ba ang pamamahagi ng gastos at benepisyo sa populasyon,
               o nakatuon sa mga pinakakaunting nangangailangan?
```

Maaaring mangyari ang pagkabigo sa VFM sa alinmang yugto nang hiwalay: matipid na procurement na may di-mabisang paghahatid; mabisang paghahatid ng maling output; epektibong kinalabasang binili sa labis na gastos. Tingnan ang [mga KPI ng pampublikong sektor](../mga-kpi-ng-pampublikong-sektor-pagpili-ng-sukatan-na-hindi-madaling-dayain/) para sa kung paano ito isinasalin sa masusukat na indicator, at ang [cost-effectiveness analysis sa pamahalaan](../cost-effectiveness-analysis-sa-pamahalaan/) para sa pormal na paraan ng paghahambing.

## Halimbawang kalkulasyon

**Contact centre ng lokal na awtoridad**: ikinukumpara ng isang konseho ang dalawang opsyon para sa bagong case-management system.

- *Opsyon A*: £600,000 na lisensya (pinakamura), ngunit nasa average na 22 minuto pa rin kada kaso ang mga agent dahil nangangailangan ang workflow ng manu-manong muling pag-key sa pagitan ng mga sistema — mahina ang efficiency.
- *Opsyon B*: £900,000 na lisensya, integrated na workflow, average na 9 minuto kada kaso ang mga agent.

Pinapaboran ng economy lamang ang A (mas mura ng £300,000). Ngunit sa 40,000 kaso/taon, ang A ay nagkakahalaga ng 40,000 × 22/60 = 14,667 staff-hour; ang B ay 40,000 × 9/60 = 6,000 staff-hour. Sa fully loaded na gastos ng staff na £28/oras, ang A ay £410,667/taon sa oras ng staff laban sa £168,000/taon ng B — agwat sa efficiency na £242,667/taon na lumalampas sa £300,000 na pagkakaiba sa economy sa unahan sa loob ng 14 na buwan. Pinapaboran ng VFM ang B kapag isinama ang efficiency, hindi ang A.

**Delivery grant ng charity**: ikinukumpara ng isang funder ang £50,000 na grant na nakakamit ng 200 matagumpay na job placement (£250/placement — tila mahusay na economy) laban sa £120,000 na grant na nakakamit ng 350 placement na tumatagal nang lampas sa 12 buwan, samantalang ang kalahati ng mga placement ng unang grant ay nawawala sa loob ng 3 buwan. Binabaligtad ng effectiveness — mga kinalabasang matibay — ang tila ranggo ng VFM: ang tunay na gastos kada *matibay* na placement ay £250 ÷ 0.5 = £500 para sa unang grant, laban sa £120,000/350 ≈ £343 para sa ikalawa.

## Kaugnayan sa software engineering

Binibigyan ng VFM ang mga koponan ng engineering ng disiplina sa pagbabalangkas ng mga business case sa teknolohiya sa paraang aktuwal na babasahin ng finance at audit:

- Ihayag ang economy, efficiency, at effectiveness bilang magkakahiwalay na linya sa business case, hindi iisang pinaghalong bilang ng "halaga" — eksaktong ganitong breakdown ang hihingin ng tagasuring sinanay sa Green Book.
- Mag-ingat sa pag-optimize ng gastos sa procurement (economy) kapalit ng integrasyon at efficiency ng workflow, napakakaraniwang huwad na tipid sa IT ng pamahalaan (tingnan ang [total cost of ownership sa IT ng pamahalaan](../total-cost-of-ownership-sa-it-ng-pamahalaan-ang-buong-gastos-sa-buong-buhay-ng-sistema/) at [build vs buy sa pamahalaan](../build-vs-buy-sa-pamahalaan-gagawin-o-bibilhin/)).
- Nangangailangan ang effectiveness ng datos ng kinalabasan, hindi lang bilang ng output — iugnay ang mga sukatan ng paghahatid sa [outcomes vs outputs](../outcomes-laban-sa-outputs-ang-pagkakaiba-ng-naihatid-at-ng-nagbago/) at sa tunay na evaluation sa pamamagitan ng [counterfactual analysis](../counterfactual-analysis-ano-ang-mangyayari-kung-walang-interbensyon/) sa halip na ipagpalagay na nagpapahiwatig ng kinalabasan ang mga output.
- Kapag hindi pantay ang paglilingkod ng sistema sa mga rehiyon o demograpiko, lehitimong pagtutol sa VFM ang tanong ng equity, hindi hiwalay na "nice to have" — tingnan ang [digital inclusion](../digital-inclusion-serbisyong-digital-para-sa-lahat/).

## Mga karaniwang pagkakamali

- **Pagkakapantay ng VFM sa pinakamababang presyo.** Isang-katlo (o isang-kapat) lang ng pagsusulit ang economy; tahasang binabalaan ng Green Book laban sa mga panuntunan ng "pinakamababang gastos" sa procurement na hindi pinapansin ang efficiency at effectiveness.
- **Pagsukat ng mga output at pagtawag dito na kinalabasan.** Hindi pareho ang throughput ng kaso (efficiency) at mga kasong nalutas nang mahusay (effectiveness); tingnan ang [outcomes vs outputs](../outcomes-laban-sa-outputs-ang-pagkakaiba-ng-naihatid-at-ng-nagbago/).
- **Pagturing sa equity bilang opsyonal.** Mula sa update ng Green Book noong 2020, dapat tasahin ang distributional impact kasabay ng tradisyonal na tatlong E, hindi idugtong pagkatapos; mas mahirap ang pagdaragdag nito matapos maaprubahan ang business case kaysa isama ito mula sa simula.
- **Paghahambing ng mga opsyon sa magkaibang volume nang walang normalisasyon.** Ang paghahambing ng VFM kada yunit sa pagitan ng mga opsyong naglilingkod sa magkaibang populasyon ay kailangang kontrolin ang scale, kung hindi ay walang saysay ang paghahambing ng efficiency.

## Mga sanggunian

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation" (2022 edition). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- National Audit Office, "Framework to review programmes and projects" and VFM study methodology. <https://www.nao.org.uk/>
- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020). <https://www.gov.uk/government/publications/the-magenta-book>
- IPPR North, "Transport Infrastructure Investment: Determining Value for Money" (evidence to the Treasury Select Committee's 2020 review of the Green Book's regional bias).
