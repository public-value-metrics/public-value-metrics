# Social return on investment: pagsukat ng halagang panlipunan kaugnay ng puhunan

Ang social return on investment ay balangkas sa pagsukat, pagpepera, at pagtutuos ng malawak na konsepto ng halaga — panlipunan, pangkapaligiran, at pang-ekonomiya — at pagpapahayag nito bilang ratio laban sa mga yamang ipinuhunan, halimbawa "£1.44 na halagang panlipunan sa bawat £1 na ipinuhunan". Dinisenyo ito upang palawakin ang lohika ng financial accounting sa mga kinalabasang hindi pinepresyuhan ng pamilihan, nang hindi nawawala ang disiplina ng accounting: bawat bilang sa SROI ay dapat masubaybayan sa kinalabasang itinakda ng stakeholder, sa batayan ng ebidensya, at sa tahasang pagsasaayos para sa mangyayari pa rin kahit wala ang programa.

## Bakit ito mahalaga

Pinapanatili ang SROI ng Social Value UK at Social Value International, mga kahalili ng SROI Network, na ang "A Guide to Social Return on Investment" (2012) ay nananatiling pamantayang metodolohiya. Nakasandig ang balangkas sa pitong prinsipyo — isali ang mga stakeholder, unawain kung ano ang nagbabago, bigyang-halaga ang mahahalaga, isama lamang ang material, huwag mag-over-claim, maging transparent, at beripikahin ang resulta — at ang ikalimang prinsipyo, "huwag mag-over-claim", ang kadalasang bumabagsak sa karamihan ng mga ulat na SROI. Ang ratio na nabuo sa pagpapalampas ng mga pagsasaayos para sa deadweight at attribution ay hindi SROI; ito ay numerong pang-marketing na nakasuot ng damit ng SROI. Kailangang malaman ng mga software engineer na bumubuo ng mga reporting tool para sa mga charity, social enterprise, o commissioner ang pagkakaiba, dahil ang tool ay maaaring magpatupad ng disiplina o gawing madali ang pagpapalampas nito.

## Ang matematika

Umaasa ang SROI sa [theory of change](../theory-of-change-pabalik-na-pagmamapa-ng-sanhi-mula-sa-layunin-hanggang-sa-mga-aktibidad/) upang matukoy kung aling mga kinalabasan ang saklaw, at ipinapahayag ang mga ito gamit ang parehong chain of accountability ng [logic model](../logic-model-ang-linear-na-diagram-mula-input-hanggang-impact-ng-isang-programa/):

```
SROI ratio = Present value ng mga kinalabasan / Halaga ng mga input

Proseso:
 1. Itatag ang saklaw at tukuyin ang mga stakeholder na susukatin ang kinalabasan
 2. Imapa ang mga kinalabasan (theory of change na may ebidensya mula sa mga stakeholder, hindi ipinagpapalagay)
 3. Maghanap ng ebidensya ng mga kinalabasan at bigyan ng halaga gamit ang mga financial proxy
 4. Itatag ang impact: gross value − deadweight − attribution − displacement, saka ilapat ang drop-off
 5. Kalkulahin ang SROI: net present value ng impact ÷ halaga ng mga input
 6. Mag-ulat, gamitin, at isama sa gawain — ang ratio ay kasangkapan sa komunikasyon, hindi ang wakas
```

Tinatalakay ang deadweight, attribution, at displacement sa [additionality at deadweight](../additionality-at-deadweight-ano-ang-tunay-na-naidagdag-ng-programa/) at [displacement at attribution](../displacement-at-attribution-paglilipat-ng-benepisyo-at-pag-aangkin-ng-kredito-sa-resulta/); ang tatlo ay umiiral upang ihiwalay ang tunay na [counterfactual](../counterfactual-analysis-ano-ang-mangyayari-kung-walang-interbensyon/) na impact sa gross na kinalabasan.

## Halimbawang kalkulasyon

**Employment programme ng lokal na awtoridad**: taunang gastos sa input na £250,000. Animnapung kalahok ang lumipat sa tuloy-tuloy na trabaho; ang financial proxy para sa kinalabasang iyon (pinagsamang pagtaas ng wellbeing, nabawasang pag-asa sa benepisyo, at kita sa buwis) ay £8,500 kada tao para sa unang taon — tingnan ang [unit cost databases](../unit-cost-databases-mga-handang-financial-proxy-para-sa-mga-kinalabasang-panlipunan/) para sa pinagmumulan ng ganitong mga proxy.

- Gross na halaga ng kinalabasan: 60 × £8,500 = £510,000
- Bawasan ang deadweight (40% ang malamang na nakahanap ng trabaho kahit walang programa): £510,000 × 0.60 = £306,000
- Bawasan ang attribution (30% ng natitirang pagbabago ay dahil sa suporta ng ibang ahensya): £306,000 × 0.70 = £214,200
- Kinalabasan sa taon 2 sa 30% na drop-off: £214,200 × 0.70 = £149,940, dini-discount sa 3.5%/taon (tingnan ang [social discount rate](../social-discount-rate-kung-paano-pinahahalagahan-ang-hinaharap-sa-kasalukuyang-pagpapasya/)): £149,940 ÷ 1.035 = £144,870
- Kabuuang present value ng impact: £214,200 + £144,870 = £359,070
- **SROI ratio: £359,070 ÷ £250,000 = 1.44**, iniuulat bilang "£1.44 na halagang panlipunan sa bawat £1 na ipinuhunan"

**Charity**: ang befriending service na nagkakahalaga ng £60,000 ay nagpapababa ng kalungkutan ng 80 matatanda, na may proxy na £1,100/tao/taon. Gross value na £88,000; matapos ang 35% na deadweight at 15% na attribution, ang netong impact ay £88,000 × 0.65 × 0.85 = £48,620, SROI ratio na 0.81 — mababa sa break-even, na lehitimo at kapaki-pakinabang na natuklasan, hindi kabiguang isulat.

## Kaugnayan sa software engineering

Ang SROI calculator na nagpapahintulot sa user na maglagay ng bilang ng kinalabasan at halaga ng proxy ngunit walang kinakailangang field para sa deadweight, attribution, o naka-link na theory of change ay gagawa ng mapalaking ratio bilang default, dahil ang pagpapalampas ng mga pagsasaayos ang pinakamadaling daan. Isama ang disiplina sa schema: bawat hilera ng kinalabasan ay dapat tumukoy sa grupo ng stakeholder, nilagyan ng ebidensyang dami, financial proxy na may pinagmulan nito, at hindi-opsyonal na field ng deadweight/attribution. Tingnan ang [outcomes vs outputs](../outcomes-laban-sa-outputs-ang-pagkakaiba-ng-naihatid-at-ng-nagbago/) para sa pagkakaibang pinagbabatayan ng outcome-mapping ng SROI, at ang [logic model](../logic-model-ang-linear-na-diagram-mula-input-hanggang-impact-ng-isang-programa/) para sa chain na dapat salaminin ng tool sa data model nito.

## Mga karaniwang pagkakamali

- **Pagpapalampas sa deadweight at attribution.** Ang headline ratio na walang mga pagsasaayos na ito ay gross na bilang, hindi netong impact, at tahasang hinihingi ng mga prinsipyo ng Social Value UK ang dalawa.
- **Paghahambing ng mga ratio sa pagitan ng mga organisasyon.** Nakadepende ang SROI ratio sa saklaw at mga pagpili ng proxy na ginagawa kada kaso; ang pagturing na "mas mabuti" ang 4:1 na ratio ng isang ulat kaysa sa 2:1 ng iba ay nagwawalang-bahala na hindi standardisado ang mga palagay gaya ng ratio sa financial accounting.
- **Double counting ng nagsasapawang proxy.** Ang pagpapatong ng proxy na "nabawasang kalungkutan" at "mas mabuting mental na wellbeing" para sa parehong benepisyaryo ay maaaring dalawang beses na magbigay-halaga sa iisang pinagbabatayang pagbabago.
- **Pagpapalampas sa pakikipag-ugnayan sa stakeholder.** Hinihingi ng unang prinsipyo na tukuyin ang mga kinalabasan kasama ang mga taong nakararanas nito, hindi ipagpalagay ng analyst na bumubuo ng modelo.

## Mga sanggunian

- Social Value UK / Social Value International. <https://socialvalueuk.org/>
- The SROI Network, "A Guide to Social Return on Investment" (2012).
- Social Value International, "The Principles of Social Value." <https://www.socialvalueint.org/principles>
