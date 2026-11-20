# Natipid sa Channel Shift: Paglipat ng mga Transaksyon sa Digital

Ang natipid sa channel shift ay ang inaasahang pagbawas ng gastos mula sa paglilipat ng dami ng transaksyon palabas sa mamahaling channel — telepono, face-to-face na counter, papel na koreo — tungo sa murang digital na self-service. Ito ang pinansiyal na makina sa likod ng "digital by default", at ito rin ang linya sa business case na pinakamalamang na mali, dahil ang palagay na sinasandalan nito — na lumiliit ang mga offline na channel habang tumataas ang digital take-up — ay minsan lamang totoo.

## Bakit ito mahalaga

Mukhang hindi mapag-aalinlanganan ang aritmetika gamit ang mga bilang ng [gastos bawat transaksyon](../gastos-bawat-transaksyon-sa-digital-na-serbisyo-ng-pamahalaan/) mula sa Digital Efficiency Report: ilipat ang isang milyong transaksyon mula sa £8.62 na face-to-face na pagbisita tungo sa £0.15 na digital at lampas £8 milyon ang matitipid. Ngunit nagiging cash na magagamit sa redeployment ang tipid kung ang *nakapirming kapasidad* ng lumiliit na channel ay aktwal na binubuwag — ang mga upuan sa call centre, ang mga kawani sa counter, ang minuto sa kontrata ng telepono — at paulit-ulit na natuklasan ng mga programang digital ng lokal na pamahalaan na hindi bumababa ang kabuuang dami ng contact ayon sa digital take-up. Dokumentado ng pananaliksik mula sa mga programa ng digital transformation ng lokal na awtoridad at mga katawan gaya ng Socitm at Local Government Association ang paulit-ulit na padron: umaakit ang mga digital channel ng tunay na bagong contact (mga mamamayang hindi sana tatawag o bibisita ngunit ngayon ay ginagawa dahil mas madali), at malaking bahagi ng mga "digital" na transaksyon ang pumapalya sa kalagitnaan at nagiging tawag pa rin sa telepono — kaya mas mababa nang malaki ang pagbaba ng dami ng tawag kaysa sa iminumungkahi ng porsiyento ng digital take-up, minsan hindi pa nga bumababa sa absolutong bilang kahit bumababa ang *bahagi* nito sa kabuuang contact.

## Ang matematika

```
Gross na natipid sa channel shift = inilipat na dami × (gastos_lumang_channel − gastos_digital)

Net (natupad) na tipid = gross na tipid
                       − bago/shadow na demand na likha ng mas madaling channel
                       − gastos ng failure demand (mga pagkabigo sa digital na
                         nagiging tawag o pagbisita sa counter pa rin)
                       − gastos ng hindi pa nababawasang nakapirming kapasidad (ang call
                         centre ay makababawas lamang ng kawani sa hiwa-hiwalay na yunit;
                         ang 15% na pagbaba ng dami ay bihirang magpahintulot na putulin ang 15%
                         ng headcount)

Threshold ng realization: mapagkakatiwalaan lamang ang tipid kapag bumaba ang dami
sa ibaba ng antas na kayang tauhan ng lumang channel sa susunod nitong mas maliit
na hakbang ng kapasidad (hal. pagkawala ng isang buong shift, isang buong desk,
isang kontratadong banda ng headcount)
```

## Halimbawang kalkulasyon

**Serbisyo ng pag-renew ng blue badge ng county council**: 60,000 renewal/taon, dating 100% sa telepono/papel sa £6.40 bawat transaksyon. Naglunsad ng bagong digital na serbisyo na umabot sa 65% digital take-up sa loob ng isang taon, sa £0.30 bawat digital na transaksyon.

```
Walang-muwang (gross) na kalkulasyon ng tipid:
  39,000 inilipat × (£6.40 − £0.30) = £237,900/taon

Ang aktwal na nangyari, ayon sa datos ng contact centre ng council:
  Bumaba ang dami ng tawag mula 60,000/taon tungong 46,000/taon (−23%, hindi −65%)
  dahil: 9,000 digital na paglalakbay ang pumalya at nagdulot ng follow-up na tawag
         (failure-demand leakage), at 4,000 taong dating hindi nagre-renew
         ay nagre-renew na ngayon dahil nakitang madali online
         (shadow demand — tunay na pagpapabuti sa access, ngunit hindi tipid)

  Ang contact centre sa telepono ay may tauhan sa mga banda ng 8,000 tawag/FTE;
  ang pagbaba ng 14,000 tawag (60,000 → 46,000) ay nagpapalaya ng 1.75 FTE, ibinababa
  sa praktika sa 1 FTE na aktwal na naredeploy = £34,000/taon

Natupad na tipid = £34,000/taon dagdag ang gastos sa build/takbo ng digital
  channel na naiwasan sa 39,000 transaksyon ≈ £34,000 + (39,000 × £0.30
  na gastos sa digital na nabilang na) — maliit na bahagi ng £237,900 na headline,
  kahit tiyak na mas mabuti ang serbisyo para sa mga user.
```

## Kaugnayan sa software engineering

Ang aral sa engineering ay ang natipid sa channel shift ay natutupad sa pamamagitan ng mga *operasyonal* na desisyon (rostering, pagbuwag, muling pakikipagnegosasyon ng kontrata), hindi sa pag-ship ng software — maaaring matugunan ng isang team ang bawat punto ng [digital-service-standard](../digital-service-standard-ang-pamantayan-ng-serbisyong-digital-ng-pamahalaan/) at wala pa ring net na tipid kung walang nagreretiro sa nakapirming kapasidad ng lumang channel. Ang pag-instrument ng failure demand (kung saan sa digital na paglalakbay iniiwan ng mga user at ano ang ginagawa nila pagkatapos) ay malulutas na problema ng funnel analytics at ang pinakamabisang magagawa ng engineering team upang protektahan ang kaso ng tipid; ito rin ang direktang kaugnay ng [gastos bawat transaksyon](../gastos-bawat-transaksyon-sa-digital-na-serbisyo-ng-pamahalaan/), na tahimik na pinalalaki ng failure demand. Tingnan ang [benefits-realization](../benefits-realization-pagpapatunay-na-natupad-ang-ipinangakong-benepisyo/) para sa mas malawak na disiplina ng pagsusuri kung talagang dumarating ang tipid ng business case, at [digital-inclusion](../digital-inclusion-serbisyong-digital-para-sa-lahat/) para sa dahilan kung bakit karaniwang hindi maaari, at hindi dapat, ganap na bawiin ang offline na channel.

## Mga karaniwang pagkakamali

- **Pag-aakalang 1:1 ang pagpapalit ng channel**: pagmomodelo ng digital take-up bilang direktang bawas sa dami ng telepono/counter, na binabalewala ang shadow demand at failure-demand leakage na dokumentado sa pananaliksik ng channel shift ng lokal na pamahalaan.
- **Pagbu-book ng gross na tipid bago ang pagbuwag**: pagbibilang ng tipid sa business case sa taon ng pagtaas ng take-up, hindi sa taon (kung mangyari man) na aktwal na pinutol ang kapasidad ng lumang channel.
- **Pagbalewala sa step-function na katangian ng gastos sa kawani**: ang 20% na pagbaba ng dami ay bihirang maging 20% na pagbaba ng gastos, dahil ang mga contact centre at counter ay may tauhan sa hiwa-hiwalay na banda, hindi tuloy-tuloy.
- **Pagturing sa shadow demand bilang basura**: ang bagong contact mula sa mga dating naibukod o napigilang user ay tunay na pagtaas ng [public value](../public-value-ang-halagang-nililikha-ng-pamahalaan-para-sa-kolektibong-lipunan/), hindi error sa modelo — dapat iulat bilang outcome sa access, hindi ibawas bilang ingay.

## Mga sanggunian

- Cabinet Office, Digital Efficiency Report (2012). <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- Local Government Association, digital transformation and channel shift resources. <https://www.local.gov.uk/our-support/efficiency-and-income-generation/digital-transformation>
- Socitm, local public services digital insight research. <https://www.socitm.net/>
