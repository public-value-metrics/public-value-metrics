# Digital Inclusion: Serbisyong Digital para sa Lahat

Ang digital inclusion ay ang disiplina ng pagtiyak na ang "digital by default" ay hindi magiging "digital lamang" — na ang mga serbisyong pampublikong dinisenyo sa paligid ng pinakamurang channel ay gumagana pa rin para sa mga mamamayang hindi kaya o ayaw gumamit nito nang walang tulong. Likha ng GDS ang partikular na mekanismo ng paghahatid, ang "assisted digital", bilang sapilitang kahilingan para sa bawat digital na serbisyo ng pamahalaan, hindi opsyonal na dagdag.

## Bakit ito mahalaga

Malinaw na inilatag ng Government Digital Strategy noong 2012 ang ambisyon: dapat itayo ang mga digital na serbisyo bilang digital by default, ngunit kinilala ng estratehiya mismo na humigit-kumulang 10% ng mga nasa hustong gulang sa UK ay hindi makagagamit ng mga ito nang walang tulong, at inatasan ang mga departamento na magbigay ng assisted digital na suporta — rutang pinamamagitan ng tao, sa telepono, nang personal, o sa pamamagitan ng tagapamagitan — bilang bahagi ng serbisyo, hindi hiwalay na fallback na idinikit nang huli. Ang pangakong iyon ngayon ay punto 5 na ng [digital-service-standard](../digital-service-standard-ang-pamantayan-ng-serbisyong-digital-ng-pamahalaan/), "tiyaking magagamit ng lahat ang serbisyo". Sinusubaybayan ng taunang UK Consumer Digital Index ng Lloyds Banking Group ang lawak ng patuloy na pagkakabukod: natuklasan ng edisyon ng 2024 na humigit-kumulang 1.6 milyong tao sa UK ang nananatiling offline, at ang pangkat na ito ay lubhang nakahilig sa mga edad 70–79, mga kumikita ng wala pang £35,000, at mga retirado o walang trabaho — eksaktong populasyong pinakamalamang na umasa sa mga serbisyong pampublikong muling dinidisenyo. Natuklasan din ng parehong ulat na 48% lamang ng lakas-paggawa ng UK ang nakakumpleto ng lahat ng 20 gawain sa Essential Digital Skills framework, ibig sabihin ang pagkakabukod ay hindi binary na koneksyon, kundi spectrum ng kasanayan, kumpiyansa, at tiwala na ganap na hindi nakukuha ng payak na sukatang "may broadband".

## Ang matematika

Ang digital inclusion ay balangkas at pagsusuri ng pagkakapantay at hindi iisang pormula, ngunit nakakapag-ugnay ito sa kwantitatibong pagtatasa ng halaga sa pamamagitan ng [distributional-weighting](../distributional-weighting-pagtitimbang-ng-benepisyo-ayon-sa-kung-sino-ang-tumatanggap/):

```
Walang-muwang na halaga ng channel shift:
  halaga = inilipat na dami × (gastos_luma − gastos_digital)     [tingnan ang channel-shift-savings]

Halagang inayos para sa inclusion:
  halaga = (inilipat na dami × hindi-tinimbang na tipid)
         − (mga naibukod na user × gastos ng assisted-digital na probisyon)
         − (distributional weight na pagsasaayos para sa pinsala sa mga naibukod
            na grupong nawawalan ng access o nakararanas ng pinababang kalidad ng serbisyo)

Ang assisted digital ay hindi natitirang gastos ng pagkabigo — ito ay
dinisenyong channel na may sariling [gastos bawat transaksyon](../gastos-bawat-transaksyon-sa-digital-na-serbisyo-ng-pamahalaan/),
karaniwang mas mataas nang malaki bawat transaksyon kaysa sa self-service na digital
ngunit karaniwan pa ring mas mura kaysa sa legacy na channel na bahagyang pinapalitan nito.
```

## Halimbawang kalkulasyon

**Pambansang serbisyo ng benepisyo na estilong Universal Credit**: 2.5 milyong claim/taon, na tinatayang nangangailangan ng assisted digital na suporta ang 10% ng mga claimant ayon sa palagay sa pagpaplano ng Government Digital Strategy.

```
Naibukod/assisted-digital na pangkat = 2,500,000 × 10% = 250,000 claim/taon

Gastos ng assisted-digital na channel (telepono + face-to-face na suporta,
may kawani para hawakan ang kahinaan at pagiging masalimuot) ≈ £9.50/claim
  = 250,000 × £9.50 = £2,375,000/taon

Gastos ng self-service na digital para sa natitirang 90% ≈ £0.40/claim
  = 2,250,000 × £0.40 = £900,000/taon

Pinaghalong gastos bawat transaksyon = (2,375,000 + 900,000) / 2,500,000
  = £1.31/claim

Ang disenyong lumalaktaw sa assisted digital upang makuha ang mas mababang headline na
gastos bawat transaksyon (hal. £0.40 na pinaghalo, na binabalewala ang 250,000
naibukod na claimant) ay hindi nag-aalis ng £2.375m na gastos na iyon — ginagawa
lamang nitong hindi nakuhang entitlement, apela, at downstream na demand sa serbisyong
pang-krisis na babagsak sa ganap na ibang badyet.
```

## Kaugnayan sa software engineering

Ang assisted digital ay dinisenyong channel, kaya may mga interface, SLA, at instrumentasyon ito gaya ng iba: tool ng caseworker na batay sa telepono, portal ng tagapamagitan para sa Citizens Advice o lokal na awtoridad, o in-person na kiosk flow. Ang pagtrato rito bilang pahabol na isipin — numero ng telepono sa maliit na letra sa halip na channel na kinonsidera mula sa discovery — ang pinakakaraniwang paraan kung paano pumapalya ang mga serbisyo sa punto 5 ng [digital-service-standard](../digital-service-standard-ang-pamantayan-ng-serbisyong-digital-ng-pamahalaan/) sa assessment. Ang digital inclusion ang lente ng pagkakapantay sa bawat ibang paksa sa pangkat na ito: nililimitahan nito kung gaano kaagresibo makakamit ang [channel-shift-savings](../natipid-sa-channel-shift-paglipat-ng-mga-transaksyon-sa-digital/), ito ay linya ng gastos na dapat tapat na isama sa [gastos bawat transaksyon](../gastos-bawat-transaksyon-sa-digital-na-serbisyo-ng-pamahalaan/), at ito ang direktang aplikasyon ng [distributional-weighting](../distributional-weighting-pagtitimbang-ng-benepisyo-ayon-sa-kung-sino-ang-tumatanggap/) sa konteksto ng digital na serbisyo — ang tipid na hindi katimbang na bumabagsak sa mga taong nakabukod na sa digital at ekonomiya ay dapat bawasan ang timbang, hindi ituring na katumbas ng tipid na pantay na nakakalat sa populasyon.

## Mga karaniwang pagkakamali

- **"Digital by default" na binabasa bilang "digital lamang"**: pagsasara ng linya ng telepono o counter kapag lumampas ang digital take-up sa isang threshold, nang hindi bine-verify na may tunay na magagamit na alternatibo ang natitirang pangkat.
- **Pagsukat ng inclusion sa pamamagitan ng binary na koneksyon**: ang "may broadband" o "may smartphone" ay mahinang proxy ng kakayahang kumpletuhin ang partikular na transaksyon — ang agwat sa Essential Digital Skills (48% lamang ng lakas-paggawa ng UK ang nakakumpleto ng lahat ng 20 gawain, ayon sa Lloyds 2024) ay nagpapakitang kasinghalaga ng access ang kasanayan at kumpiyansa.
- **Pagpepresyo sa assisted digital na parang rounding error**: pag-badyet dito bilang maliit na contingency na linya sa halip na wastong channel na may sariling [gastos bawat transaksyon](../gastos-bawat-transaksyon-sa-digital-na-serbisyo-ng-pamahalaan/), at magugulat na lang kapag kulang ang pondo at tauhan nito sa paglulunsad.
- **Pagsusurvey lamang sa mga matagumpay na nakakumpleto sa digital**: ang pananaliksik sa kasiyahan at usability na ganap na isinagawa sa loob ng serbisyo ay hindi nakikita ang mga taong hindi umabot doon, na eksaktong populasyong layong protektahan ng gawaing digital inclusion.

## Mga sanggunian

- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
- GOV.UK Service Manual, service standard, point 5: make sure everyone can use the service. <https://www.gov.uk/service-manual/service-standard/point-5-make-sure-everyone-can-use-the-service>
- Lloyds Banking Group, Consumer Digital Index. <https://www.lloydsbank.com/banking-with-us/whats-happening/consumer-digital-index.html>
- Ofcom, digital exclusion review. <https://www.ofcom.org.uk/>
