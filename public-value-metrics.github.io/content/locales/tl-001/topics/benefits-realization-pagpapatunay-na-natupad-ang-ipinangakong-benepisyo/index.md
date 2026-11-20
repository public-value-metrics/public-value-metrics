# Benefits Realization: Pagpapatunay na Natupad ang Ipinangakong Benepisyo

Ang benefits realization management ay ang disiplina ng pagtukoy, pagtatakda ng baseline, pagsubaybay, at *pagpapatunay* na ang mga benepisyong ipinangako sa isang business case ay aktwal na natupad pagkatapos mag-go-live. Sa pampublikong pamumuhunan ng UK, nasa loob ito ng Five Case Model ng Green Book ng HM Treasury at ng nakalaang gabay sa pamamahala ng benepisyo ng Infrastructure and Projects Authority; kung wala ito, mananatiling hindi na-audit na pahayag magpakailanman ang "natipid ng sistema ang tatlumpung minuto ng mga caseworker sa bawat claim".

## Bakit ito mahalaga

Mga pangako ang mga business case; ang benefits realization ang audit. Hinihiling ng Green Book na pumasa ang bawat spending case sa limang pagsubok — strategic, economic, commercial, financial, at management — at dapat ilatag ng management case kung paano matutupad ang mga benepisyo *bago ang pag-apruba*: may pangalan ang mga may-ari, nakuha na ang mga baseline, at nakatakda na ang mga petsa ng pagsukat. Umiiral ang gabay ng Infrastructure and Projects Authority, *Benefits Management: A Guide to Realizing Benefits for Government Major Projects* (<https://www.gov.uk/government/publications/benefits-management-a-guide-to-realizing-benefits-for-government-major-projects>), dahil paulit-ulit na natuklasan sa sariling pag-uulat ng portfolio ng IPA sa Government Major Projects Portfolio na ang delivery confidence at benefits realization ay mga paulit-ulit na kahinaan sa mga pangunahing programa. Maaaring magsara ang isang proyekto "ayon sa iskedyul at sa loob ng badyet" batay sa mga milestone ng delivery habang bigo pa ring matupad ang mga benepisyong nagbigay-katwiran sa paggastos sa simula pa lamang — pagkakaibang itinuturing ng gabay ng IPA na buong punto ng disiplina.

## Ang matematika

```
Antas ng realization = benepisyong natupad / benepisyong inaasahan   (bawat benepisyo, bawat panahon)

Mga mekanismong nagpapahintulot sa pagkuwenta:
  baseline na nakuha BAGO mag-go-live (kung hindi, hindi masusukat ang pagbabago)
  bawat benepisyo: may pangalang may-ari, metric, pinagmulan ng datos, iskedyul ng pagsukat
  forecast na inayos para sa optimism bias sa appraisal (utos ng Green Book)
  mga benepisyong inuuri bilang cash-releasing / capacity-freed / qualitative,
  at sinusubaybayan at iniuulat nang magkakahiwalay
```

## Halimbawang kalkulasyon

**Lokal na awtoridad**: ang business case ng isang digital na portal para sa planning application ay nangako, kada taon, ng: £300,000 na pagbawas sa gastos sa pag-imprenta at postage (cash), 4,500 oras ng opisyal na napalaya (capacity), at pinahusay na kasiyahan ng aplikante (qualitative). Labindalawang buwan pagkatapos mag-go-live:

```
Benepisyo         Inaasahan  Natupad    Antas  Ebidensiya
Cash na tipid     £300,000   £210,000   70%    finance ledger kumpara sa baseline na taon
Oras ng opisyal   4,500      3,200      71%    time-motion na sample
Kasiyahan         +8pp       +11pp      138%   datos ng survey ng aplikante

Mga aksyon mula sa pagsusuri (ang layunin ng benefits realization):
ang kakulangan sa cash ay naiugnay sa dalawang service area na nagpoproseso pa rin
ng mga papel na aplikasyon bilang eksepsyon → isara ang daanan ng eksepsyon;
ang pagtatama sa optimism bias ng susunod na business case ay itinaas mula 10% tungong 25%
batay sa error sa forecasting ng kasong ito.
```

Ang 70% na antas ng realization ay hindi kabiguan — ito ay kaalamang nagpapahintulot na mas mahusay na ma-calibrate ang susunod na forecast. Ang hindi sinukat na kaso ay aangkin ng 100% magpakailanman, at walang batayan ang finance team na kuwestiyunin ito.

## Kaugnayan sa software engineering

Karaniwang inaaprubahan ng mga engineering organization ang mga pamumuhunan sa platform at tooling batay sa inaasahang benepisyo at halos hindi na ito inaaudit pagkatapos — eksaktong sakit na inaayos ng benefits realization management. Ang magaan na bersyon: bawat panukalang lampas sa materiality threshold ay may pangalang may-ari ng benepisyo, baseline na metric, at nakatakdang petsa ng pagsusuri (karaniwang anim na buwan pagkatapos mag-go-live), at dapat bawasan ng mga antas ng realization mula sa mga nakaraang panukala kung gaano pinagkakatiwalaan ng organisasyon ang susunod na forecast ng isang team o vendor. Isinasara nito ang ikot pabalik sa [Green Book appraisal](../green-book-appraisal-pagtatasa-ng-mga-panukalang-paggasta-ng-pamahalaan-ng-uk/), na nagtatakda ng forecast na ina-audit ng disiplinang ito, at ito rin ang lohika sa likod ng malawakang naiulat na natuklasang karamihan ng mga pilot ng generative AI ay walang nasusukat na balik — tingnan ang [produktibidad ng AI sa pampublikong sektor](../produktibidad-ng-ai-sa-pampublikong-sektor/) — dahil ang mga pilot na *nagbalik* ng halaga ay halos laging yaong may pangalan at masusubaybayang linya ng benepisyo mula sa simula. Nakasalalay din ito sa pagkilala sa pagitan ng aktwal na naihatid at aktwal na natupad — tingnan ang [outcome kumpara sa output](../outcomes-laban-sa-outputs-ang-pagkakaiba-ng-naihatid-at-ng-nagbago/).

## Mga karaniwang pagkakamali

- **Walang baseline bago mag-go-live**: ang nakamamatay at hindi na maaayos na pagkukulang — kung wala ito, walang antas ng realization na makukuwenta, maipapahayag lamang.
- **Benepisyong walang may-ari**: ang benepisyong walang pangalang may-ari ay walang nangongolekta ng datos, at iuulat ito ng bawat pagsusuri ng portfolio bilang "halos nasa tamang landas" bilang default.
- **Dobleng pagbibilang ng benepisyo sa portfolio ng programa**: dalawang proyektong parehong umaangkin ng iisang napalayang kapasidad ng caseworker bilang benepisyo nila — magpanatili ng iisang benefit register para sa buong portfolio upang mahuli ito.
- **Realization theatre**: ang tampok na pagsukat at pag-uulat ng madadaling qualitative na tagumpay habang tahimik na hindi sinusuri ang mga linya ng cash at capacity.
- **Paghahalo ng delivery at realization**: ang proyektong nagsasara ng mga milestone "ayon sa iskedyul at sa loob ng badyet" ay walang sinasabi kung nangyari ba talaga ang inaasahang benepisyo — itinuturing ng gabay ng IPA na dalawang magkahiwalay na tanong ang mga ito na may dalawang magkahiwalay na landas ng ebidensiya.

## Mga sanggunian

- HM Treasury, Green Book and Five Case Model guidance. <https://www.gov.uk/government/collections/the-green-book-and-accompanying-guidance-and-documents>
- Infrastructure and Projects Authority, *Benefits Management: A Guide to Realizing Benefits for Government Major Projects*. <https://www.gov.uk/government/publications/benefits-management-a-guide-to-realizing-benefits-for-government-major-projects>
- Infrastructure and Projects Authority, Annual Report on the Government Major Projects Portfolio. <https://www.gov.uk/government/collections/infrastructure-and-projects-authority-annual-report>
