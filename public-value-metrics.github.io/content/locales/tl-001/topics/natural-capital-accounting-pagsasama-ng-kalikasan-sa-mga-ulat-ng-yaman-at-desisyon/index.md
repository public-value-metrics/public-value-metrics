# Natural capital accounting: pagsasama ng kalikasan sa mga ulat ng yaman at desisyon

Inilalagay ng natural capital accounting ang kapaligiran sa parehong antas ng anumang iba pang pambansa o organisasyonal na asset: sinusukat nito ang stock ng mga likas na yaman (kakahuyan, lupa, ilog, wetland, atmospera) at ang daloy ng mga serbisyong nililikha nila (pag-iimbak ng carbon, proteksyon laban sa baha, libangan, pagkain), sa pisikal at pananalaping termino, upang lumitaw sa paggawa ng desisyon ang pagkaubos ng kalikasan gaya ng paglitaw ng pagkaubos ng kapital na pinansyal. Isa ang UK sa mga pamahalaang pinakamalayo na ang narating sa sistematikong paggawa nito, na pinatatakbo ng 25 Year Environment Plan (2018) at isinasakatuparan sa pamamagitan ng UK Natural Capital accounts ng ONS at ng karagdagang gabay ng Green Book ng HM Treasury.

## Bakit ito mahalaga

Itinuturing ng kumbensyonal na accounting — pang-korporasyon man o pampamahalaan — na walang halaga ang isang kagubatan hanggang sa putulin ito at ibenta bilang troso, at doon pa lamang ito nagiging GDP. Umiiral ang natural capital accounting upang pagtapalin ang puwang na iyon: inatasan ng 25 Year Environment Plan ng UK ang pamahalaan na isama ang pag-iisip sa natural capital sa lahat ng patakaran, at tahasang inilahad ang hangaring maging "the first generation to leave the environment in a better state than we found it." Naglathala na mula noon ang ONS ng taunang UK Natural Capital accounts (<https://www.ons.gov.uk/economy/environmentalaccounts/bulletins/uknaturalcapitalaccounts/latest>) na tinatantiya ang halagang pananalapi ng mga ecosystem service — mula sa libangan sa kakahuyan hanggang sa benepisyong pangkalusugan ng mga urban green space at pag-iimbak ng carbon ng peatland — gamit ang parehong National Accounts framework na ginagamit sa produced capital, upang sa kalaunan ay mapabilang ang natural capital sa iisang balance sheet kasama ng mga kalsada, gusali, at kagamitan. Itinatakda ng gabay na Enabling a Natural Capital Approach (ENCA) ng HM Treasury, na karagdagan sa Green Book (<https://www.gov.uk/government/publications/enabling-a-natural-capital-approach-enca-guidance>), kung paano dapat pahalagahan ng mga appraiser ang mga gastos at benepisyong pangkapaligiran sa mga business case, upang ang proyektong kalsadang sisira sa sinaunang kakahuyan o ang proyektong pangbaha na magpapanumbalik ng wetland ay maihambing sa magkakaparehong pananalaping termino sa halip na may numero ang isa at isang talata ng mga pasubali ang isa pa.

## Ang matematika

```
Halaga ng asset ng ecosystem service = NPV ng daloy ng mga serbisyong ibinibigay ng asset

Halaga ng asset = Σ (t = 1 hanggang T) [halaga ng taunang daloy ng serbisyo_t / (1 + r)^t]

kung saan:
  halaga ng daloy ng serbisyo_t = dami ng serbisyo sa taong t × halaga bawat yunit
                          (hal. bilang ng bumibisita sa libangan × halaga bawat pagbisita;
                           toneladang carbon na naimbak × presyo ng carbon)
  r = discount rate (social discount rate ng Green Book — tingnan ang
      [social discount rate](../social-discount-rate-kung-paano-pinahahalagahan-ang-hinaharap-sa-kasalukuyang-pagpapasya/))
  T = abot-tanaw ng panahon kung saan inaasahang ibibigay ng asset ang serbisyo
```

Ito ang magkatulad na istruktura ng net present value na ginagamit sa pagpapahalaga ng produced capital o sa pag-appraise ng anumang pampublikong pamumuhunan sa ilalim ng [Green Book appraisal](../green-book-appraisal-pagtatasa-ng-mga-panukalang-paggasta-ng-pamahalaan-ng-uk/) — ang ambag ng natural capital accounting ay ang pagbibigay ng kapani-paniwalang pisikal na dami at halaga bawat yunit para sa mga serbisyong dating may presyong sero.

## Halimbawang kalkulasyon

**Urban na kakahuyan, halaga bilang libangan**: isang 50-ektaryang kakahuyan ang tumatanggap ng tinatayang 80,000 pagbisita para sa libangan bawat taon, na bawat isa ay pinahahalagahan (sa pamamagitan ng travel-cost o stated-preference na pamamaraan — tingnan ang [revealed preference valuation](../revealed-preference-valuation-pagpapahalaga-mula-sa-aktuwal-na-gawi-sa-pamilihan/) at [stated preference valuation](../stated-preference-valuation-pagtatantiya-ng-halaga-sa-pamamagitan-ng-pagtatanong-sa-mga-tao/)) sa £3 bawat pagbisita. Inaasahang patuloy na maibibigay ng kakahuyan ang serbisyong ito sa loob ng 50 taon, na ina-appraise sa 3.5% na discount rate.

```
Taunang halaga ng libangan = 80,000 × £3 = £240,000/taon

NPV sa loob ng 50 taon sa 3.5% ≈ £240,000 × annuity factor(3.5%, 50 taon)
annuity factor(3.5%, 50) ≈ 21.4

Halaga ng asset ≈ £240,000 × 21.4 ≈ £5,136,000
```

**Pagdaragdag ng pag-iimbak ng carbon**: ang parehong kakahuyan ay nag-iimbak ng tinatayang 400 tonelada ng CO2 bawat taon, na pinahahalagahan sa non-traded carbon price ng pamahalaan na humigit-kumulang £75/tonelada (ilustratibo — gamitin ang kasalukuyang inilathalang carbon value ng BEIS/DESNZ para sa aktuwal na appraisal).

```
Taunang halaga ng carbon = 400 × £75 = £30,000/taon
NPV sa loob ng 50 taon sa 3.5% ≈ £30,000 × 21.4 ≈ £642,000

Kabuuang halaga ng asset ng kakahuyan (libangan + carbon) ≈ £5,136,000 + £642,000
                                                   ≈ £5,778,000
```

Ito ay bago pa idagdag ang flood attenuation, biodiversity, o mga serbisyo sa kalidad ng hangin na hinihiling din ng gabay ng ENCA na isaalang-alang ng mga appraiser — sadyang sahig ang kabuuan, hindi kisame.

## Kaugnayan sa software engineering

- Ang mga sistema ng pangangasiwa sa kapaligiran at asset para sa mga lokal na awtoridad at ahensiya (parke, highway, anyong-tubig) ay maaaring maglakip ng natural capital register kasabay ng kanilang rehistro ng pisikal na asset, gamit ang parehong pattern na daloy-ng-serbisyo-beses-halaga-bawat-yunit gaya ng anumang iba pang [unit cost database](../unit-cost-databases-mga-handang-financial-proxy-para-sa-mga-kinalabasang-panlipunan/) na pinapanatili ng organisasyon.
- Dahil sensitibo ang natural capital NPV sa discount rate (tingnan ang annuity factor sa halimbawa), dapat ilantad ng anumang tool na kumukuwenta nito ang rate at abot-tanaw bilang nakikitang input, hindi ibaon — ang parehong prinsipyo ng transparency na tinalakay sa [intergenerational equity at sustainability discounting](../intergenerational-equity-at-sustainability-discounting-katarungan-sa-pagitan-ng-mga-henerasyon-at-pagdidiskwento-ng-malayong-hinaharap/).
- Dumarami ang mga natural capital account na kinakailangang input sa mga seksyon ng epekto sa kapaligiran ng business case ng [green-book-appraisal](../green-book-appraisal-pagtatasa-ng-mga-panukalang-paggasta-ng-pamahalaan-ng-uk/); dapat ituring ng delivery team na bumubuo ng business-case tooling ang mga account ng ONS at ang mga unit value ng ENCA bilang reference data na isasama, hindi isang bagay na muling kinukuwenta ng mga appraiser mula sa simula tuwing kailangan.

## Mga karaniwang pagkakamali

- **Double-counting ng magkakapatong na ecosystem service** — maaaring magbahagi ng pinagbabatayang willingness-to-pay na datos ang halaga ng libangan at halaga ng biodiversity para sa iisang site; tahasang nagbababala ang gabay ng ENCA laban sa pagsasama ng mga pagpapahalagang hinango sa magkakapatong na survey instrument.
- **Pagtrato sa halaga ng natural capital asset bilang hindi nagbabago** — nagbabago ang mga daloy ng serbisyo ayon sa klima, pamamahala, at presyon sa paggamit ng lupa; ang halaga ng carbon at flood attenuation ng isang kakahuyan sa dekadang ito ay hindi permanenteng katangian ng site.
- **Paggamit ng pambansang karaniwang unit value para sa napakalokal na desisyon** — malayo ang pagkakaiba sa halaga ng libangan ng isang ektaryang urban na kakahuyang madaling puntahan at isang ektaryang malayong upland; inirerekomenda ng gabay ng ENCA ang lokal o site-specific na halaga kung mayroon, sa halip na umasa sa pambansang karaniwan.

## Mga sanggunian

- ONS. "UK natural capital accounts."
  <https://www.ons.gov.uk/economy/environmentalaccounts/bulletins/uknaturalcapitalaccounts/latest>
- HM Government. "A Green Future: Our 25 Year Plan to Improve the Environment." (2018)
- HM Treasury / Defra. "Enabling a Natural Capital Approach (ENCA): guidance."
  <https://www.gov.uk/government/publications/enabling-a-natural-capital-approach-enca-guidance>
