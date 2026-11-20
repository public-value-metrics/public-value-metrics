# Logic model: ang linear na diagram mula input hanggang impact ng isang programa

Ang logic model ay linear na diagram na nag-uugnay sa mga input, aktibidad, output, outcome, at impact ng isang programa, na binabasa mula kaliwa pakanan bilang kadena ng pananagutan: pumapasok ang mga resource, nangyayari ang mga aktibidad, nabubuo ang mga output, nagbabago ang kalagayan ng mga benepisyaryo (outcome), at naiipon ang impact sa mas malawak o mas mahabang takdang panahon. Ito ang karaniwang balangkas na inaasahan ng mga tagapondo at auditor na pagbabatayan ng pag-uulat ng isang programa, at ang katapat na nakaharap sa hinaharap ng [theory of change](../theory-of-change-pabalik-na-pagmamapa-ng-sanhi-mula-sa-layunin-hanggang-sa-mga-aktibidad/) na binubuo nang paatras.

## Bakit ito mahalaga

Itinatakda ng Magenta Book ng HM Treasury ang logic model bilang kinakailangang elemento sa disenyo ng pagsusuri (evaluation) ng programa, at ang mga tagapondo gaya ng National Lottery Community Fund ay binubuo ang kanilang mga template sa aplikasyon at pag-uulat sa mismong limang-hanay na kadenang ito. Ang halaga nito ay napipilitan ang programang ilahad, sa iisang diagram, kung ano ang gagastusin nito, ano ang gagawin dito, ano ang bubuuin, at — mahalaga — ano ang dapat magbago bilang resulta, sa antas ng pagiging tiyak na madalas natatakpan ng isang talata ng prosa. Ang logic model na may punô na hanay ng input at aktibidad ngunit walang laman o malabong hanay ng outcome ay agad na mapapansin sa isang sulyap, at iyon mismo ang dahilan kung bakit hinihingi ito ng mga tagapondo.

## Ang matematika

Ang logic model ay istrukturang kadena at hindi pormula:

```
Inputs          Activities        Outputs             Outcomes              Impact
(mga resource   (ginagawa sa      (direkta at          (pagbabago para       (pangmatagalan,
 na inilaan)     mga ito)          mabibilang na        sa mga                antas-populasyon
                                   produkto)            benepisyaryo)         o sistemikong
                                                                              pagbabago)
```

Dapat mas tiyak ang bawat hanay kaysa sa nauna: ang mga input ay ang ginagastos mo, ang mga aktibidad ay ang ginagawa mo, ang mga output ay ang naihahatid anuman ang epekto, ang mga outcome ay ang nagbabago bilang resulta — ang pagkakaibang ganap na tinalakay sa [outcomes laban sa outputs](../outcomes-laban-sa-outputs-ang-pagkakaiba-ng-naihatid-at-ng-nagbago/) — at ang impact ay ang matagalan, at kadalasang bahagya lamang na maiuugnay (attributable), na pangmatagalang pagbabago.

## Halimbawang kalkulasyon

**Lokal na awtoridad (serbisyong digital ng payo sa utang)**:

- Mga input: taunang badyet na £180,000, 4.0 FTE na tagapayo, isang case management system.
- Mga aktibidad: mga outreach session, isa-sa-isang appointment para sa payo sa utang.
- Mga output: 900 appointment ang naihatid; 750 plano sa utang at benepisyo ang naibigay.
- Mga outcome: sa mga kliyenteng umabot sa 6-na-buwang follow-up, 60% (450 sa 750) ang nag-ulat ng nabawasang atraso, na may average na £1,200 na pagbaba bawat kliyente — £540,000 na kabuuang pagbawas sa atraso.
- Impact: masusukat na pagbaba sa mga aplikasyon dahil sa kawalan ng tirahan mula sa mga kliyente ng serbisyo sa loob ng dalawang taon, na bahagya lamang maiuugnay sa serbisyong ito kasabay ng iba pang interbensyon (tingnan ang [counterfactual analysis](../counterfactual-analysis-ano-ang-mangyayari-kung-walang-interbensyon/)).

**Charity (pakikipagsosyo sa referral ng food bank)**:

- Mga input: £45,000, 1.5 FTE na koordineytor, mga kasunduan sa pakikipagsosyo sa 12 ahensiyang nagre-refer.
- Mga aktibidad: triage ng referral, pagbabalot at pamamahagi ng parcel.
- Mga output: 5,000 food parcel ang naipamahagi sa 1,100 sambahayan.
- Mga outcome: 68% ng mga sambahayang nasuri (748 sa 1,100) ang nag-ulat ng pinabuting seguridad sa pagkain sa follow-up na tawag pagkaraan ng 4 na linggo.
- Impact: kontribusyon sa nabawasang demand sa mga serbisyong pang-krisis sa lokalidad, na pinatutunayan lamang ng pinagsama-samang estadistika ng lugar at hindi maiuugnay sa charity na ito lamang.

## Kaugnayan sa software engineering

Halos literal na data model ng isang outcomes system ang logic model: ang mga input at aktibidad ay operational na datos na hawak mo na (gastos, staffing, log ng session); madaling i-instrument ang mga output dahil binibilang ang mga ito sa mismong punto ng paghahatid; ang mga outcome ay nangangailangan ng sadyang dinisenyong pangongolekta ng follow-up na datos (mga survey, pag-uugnay ng admin data) na hindi iiral maliban kung may bubuo nito; ang impact ay karaniwang nangangailangan ng naka-link, longitudinal, o antas-populasyong datos na lampas sa mga sistema ng alinmang programa. Dapat himukin ng mga engineer na bumubuo ng mga reporting tool ang mga commissioner na tukuyin ang mga indicator ng outcome at impact sa yugto ng disenyo, sa halip na bumalik sa dashboard na output lamang dahil iyon ang kayang suportahan ng transaksyonal na datos. Tingnan ang [social return on investment](../social-return-on-investment-pagsukat-ng-halagang-panlipunan-kaugnay-ng-puhunan/) para sa pamamaraang nagpapahalaga partikular sa mga hanay ng outcome at impact, at ang [benefits realization](../benefits-realization-pagpapatunay-na-natupad-ang-ipinangakong-benepisyo/) para sa pagsubaybay kung talagang naihatid ang hanay ng impact.

## Mga karaniwang pagkakamali

- **Pagtigil sa mga output.** Ang dashboard na nag-uulat ng mga appointment na naihatid o mga parcel na naipamahagi at nagpapahiwatig ng benepisyo ay nag-uulat ng aktibidad, hindi ng resulta — tingnan ang [outcomes laban sa outputs](../outcomes-laban-sa-outputs-ang-pagkakaiba-ng-naihatid-at-ng-nagbago/).
- **Walang inilahad na sanhi-at-bunga sa pagitan ng mga hanay.** Inilalahad ng logic model ang kadena ngunit hindi kung bakit dapat magbunga ng mga output ang mga aktibidad at ng mga outcome ang mga output; nasa [theory of change](../theory-of-change-pabalik-na-pagmamapa-ng-sanhi-mula-sa-layunin-hanggang-sa-mga-aktibidad/) ang pangangatwirang iyon, at hindi pa nasusubok ang logic model na walang theory of change sa likod nito.
- **Pagtrato rito bilang dokumentong pang-bid na minsanan lamang.** Ang mga logic model na ginawa lamang upang matugunan ang aplikasyon sa pondo at hindi na kailanman ina-update ay humihinto sa pagpapakita ng aktuwal na ginagawa ng programa.
- **Pagdausdos ng attribution sa hanay ng impact.** Ang pag-aangking ang pagbabago sa antas-populasyon ay sanhi lamang ng isang programa, nang walang counterfactual, ay nagpapalabis sa kayang suportahan ng ebidensya.

## Mga sanggunian

- HM Treasury, Magenta Book (2020), Chapter 3. <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, logic model guidance. <https://www.tnlcommunityfund.org.uk/>
- W.K. Kellogg Foundation, "Logic Model Development Guide" (2004). <https://www.wkkf.org/resource-directory/resources/2004/01/logic-model-development-guide>
