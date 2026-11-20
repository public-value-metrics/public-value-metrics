# Blended Value: Magkakahalong Halagang Pang-ekonomiya, Panlipunan, at Pangkapaligiran

Ang blended value ay ang panukala ni Jed Emerson na ang lahat ng gawain ng organisasyon at pamumuhunan ay sabay-sabay na lumilikha ng halaga sa tatlong linya — pang-ekonomiya, panlipunan, at pangkapaligiran — at na hindi ito tatlong magkakahiwalay na balik na ipagpapalit sa isa't isa kundi iisang hindi mapaghihiwalay na panukala ng halaga. Sa balangkas ni Emerson, walang tinatawag na purong pinansiyal na balik o purong panlipunan; bawat pound na ginastos, ininvest, o ibinigay bilang grant ay lumilikha ng ilang timpla ng tatlo.

## Bakit ito mahalaga

Inilatag ni Emerson ang ideya sa "The Blended Value Proposition: Integrating Social and Financial Returns" (California Management Review, 2003), na isinulat laban mismo sa kumbensyon noong ika-20 siglo na paghihiwalay ng kapital sa dalawang silo — ang philanthropy, na inaasahang magbubunga ng panlipunang balik at lubos na magpapaumanhin sa pinansiyal na balik, at ang pamumuhunan, na inaasahang magbubunga ng pinansiyal na balik at ituturing na externality ang mga epektong panlipunan o pangkapaligiran. Ang argumento ni Emerson ay laging kathang-isip ang paghihiwalay na ito: ang grant na nagpopondo sa isang mahinang pinamamahalaang organisasyon ay sumisira ng halaga sa tatlong linya, at ang kumikitang negosyong nagpaparumi ng ilog ay sumisira rin ng halaga sa tatlong linya, anuman ang hitsura ng balik ng mga shareholder nito sa papel.

Kahanay ng ideya ang "triple bottom line" ni John Elkington (people, planet, profit), na likha noong 1994 at pinalawak sa kanyang aklat noong 1997 na "Cannibals with Forks," na nag-udyok sa mga korporasyon na mag-ulat ng pagganap na panlipunan at pangkapaligiran kasabay ng pinansiyal. Itinulak ng blended value ang parehong lohika nang mas malalim sa mismong paglalaan ng kapital, at ito ang intelektuwal na ninuno ng larangan ng impact investing: umiiral ang Global Impact Investing Network (GIIN), itinatag noong 2009, partikular upang buuin ang imprastrakturang — kasama ang katalogo ng sukatan na IRIS+, tingnan ang [grant outcomes reporting](../pag-uulat-ng-outcome-ng-grant-mga-standardisadong-sukatan-para-sa-mga-tagapondo/) — na nagpapahintulot sa isang mamumuhunan na aktwal na sukatin ang timpla sa halip na ipahayag lamang.

## Ang matematika

Ang blended value ay balangkas, hindi pormula, at tahasang binalaan ni Emerson na huwag itong gawing payak na pagdaragdag ng tatlong marka. Ang istrukturang iminumungkahi nito:

```
Bawat yunit ng kapital na inilaan (grant, pamumuhunan, kontrata, pagbili) ay lumilikha ng:
  - epektong pang-ekonomiya    (pinansiyal na balik, natipid na gastos, kinitang kita)
  - epektong panlipunan        (wellbeing, kakayahan, pagbabago sa pagkakapantay para sa mga tao)
  - epektong pangkapaligiran   (natural capital na pinoprotektahan, sinisira, o ibinabalik)

Hindi ito ino-optimize nang hiwalay at saka pinagsasama. Ang desisyong nagmamaksimisa
sa linyang pang-ekonomiya habang sinisira ang linyang panlipunan ay hindi "blended value
na may kapalit na gastos" — ito ay desisyong net na sumisira ng halaga, wala nang iba.
```

Sa praktika, tinatantiya ng mga organisasyon ang timpla gamit ang scorecard: mga pinangalanang indicator sa bawat linya, iniuulat nang magkakasama, hindi pinagsama sa iisang bilang. Ito ang parehong hilig sa likod ng [social return on investment](../social-return-on-investment-pagsukat-ng-halagang-panlipunan-kaugnay-ng-puhunan/) (na sumusubok ng monetized na netting) at ng [natural capital accounting](../natural-capital-accounting-pagsasama-ng-kalikasan-sa-mga-ulat-ng-yaman-at-desisyon/) (na gumagawa nito para sa linyang pangkapaligiran) — parehong bahagyang sagot, sa iisang linya, sa tanong na buong inilalahad ng blended value.

## Halimbawang kalkulasyon

Isang impact investor ang pumipili sa pagitan ng dalawang pautang na £500,000:

- **Pautang A**: sa isang social enterprise na nagpapatakbo ng job-training café para sa mga dating nakulong, sa 2% na interes (mas mababa sa 6% na market rate para sa pautang na kapantay ang panganib), inaasahang maglalagay ng 40 tao/taon sa tuloy-tuloy na trabaho.
- **Pautang B**: pautang sa market rate na 6% sa isang karaniwang negosyong retail na walang inihayag na layuning panlipunan o pangkapaligiran.

Mas pipiliin ng purong pinansiyal na lente ang B (6% > 2%). Hinihiling ng blended value na lente sa mamumuhunan na ilahad ang tatlong linya para sa dalawa:

| | Pang-ekonomiya (taunan) | Panlipunan (taunan) | Pangkapaligiran |
|---|---|---|---|
| Pautang A | £10,000 na interes | 40 taong nailagay sa trabaho; bawat place-year ay may kapani-paniwalang naiwasang tipid sa estado mula sa pagbabalik-krimen, hango sa mga pagsusuri ng Ministry of Justice sa gastos ng reoffending | Neutral |
| Pautang B | £30,000 na interes | Walang inihayag | Neutral |

Malinaw na nangingibabaw ang blended na balik ng Pautang A kapag naipresyo na ang linyang panlipunan, kahit natatalo ang pinansiyal na linya lamang nito sa Pautang B nang £20,000 kada taon. Hindi sinasabi ng blended value sa mamumuhunan na huwag pansinin ang £20,000 na agwat — sinasabi nitong huwag magkunwaring iyon lamang ang bilang na umiiral.

## Kaugnayan sa software engineering

Ang software sa pag-uulat o pamamahala ng portfolio para sa mga foundation, impact fund, o team ng commissioning ng lokal na awtoridad ay madalas na itinatayo na ang financial ledger ang pangunahing data model at idinidikit na lamang ang mga panlipunan o pangkapaligirang field bilang free-text na tala. Ang blended value ay nagpapahiwatig ng kabaligtarang disenyo: tatlong first-class at pantay na istrukturadong daloy ng halaga na nakakabit sa bawat transaksyon o talaan ng grant, bawat isa ay may sariling yunit, pinagmulan, at antas ng kumpiyansa, ipinapakitang magkakasama sa halip na pinagsama sa iisang mapanlinlang na tiyak na marka. Tingnan ang [social return on investment](../social-return-on-investment-pagsukat-ng-halagang-panlipunan-kaugnay-ng-puhunan/) at [public value scorecard](../public-value-scorecard-balanced-scorecard-para-sa-mga-organisasyong-may-misyon-sa-halip-na-tubo/) para sa dalawang istrukturadong paraan ng pagbuo ng ganitong display nang hindi binabagsak ang timpla.

## Mga karaniwang pagkakamali

- **Pagsasama ng tatlong linya sa iisang bilang.** Binabalaan mismo ito ng sariling mga sulatin ni Emerson; ang iisang blended na bilang ay nagtatago kung aling linya ang aktwal na gumagana at nag-aanyaya ng cherry-picking.
- **Blend-washing.** Pag-aangking malakas ang linyang panlipunan o pangkapaligiran nang walang pinangalanang indicator o paraan ng pagsukat, upang bigyang-katwiran ang pinansiyal na balik na mas mababa sa market na kung hindi ay magmumukhang mahinang pagganap.
- **Pagbalewala sa negatibong blend.** Ang isang pinansiyal na matagumpay na programa ay maaaring may negatibong linyang panlipunan o pangkapaligiran; hinihiling ng blended value na iulat ang masamang balita sa anumang linya, hindi lamang ang mabuting balita sa isa.

## Mga sanggunian

- Emerson J. "The Blended Value Proposition: Integrating Social and Financial Returns." California Management Review, 2003;45(4). <https://www.blendedvalue.org/>
- Elkington J. "Cannibals with Forks: The Triple Bottom Line of 21st Century Business." Capstone, 1997.
- Global Impact Investing Network (GIIN), About IRIS+. <https://iris.thegiin.org/about/>
