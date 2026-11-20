# Halaga ng AI sa Pamahalaan

Ang halaga ng AI sa pamahalaan ay ang kahilingang ang isang AI system na ginagamit sa serbisyong pampubliko ay dapat pumasa sa parehong pamantayan ng value for money at public value gaya ng anumang ibang desisyon sa paggastos — hindi mas mababa dahil bago ito, at hindi mas mataas dahil kinatatakutan ito. Ito ang tanong na dapat masagot ng delivery team bago, hindi pagkatapos, mailunsad ang isang AI feature: mas malaki ba ang halagang nililikha nito kaysa sa gastos, kapag tapat nang isinama ang assurance, pangangasiwa, at panganib sa presyo?

## Bakit ito mahalaga

Inilathala ng UK Central Digital and Data Office (CDDO) ang Generative AI Framework for Government noong 2024, na batay sa naunang interim na gabay noong Hunyo 2023, at binuo ito sa sampung prinsipyo na sumasaklaw sa kung ano ang generative AI, mga implikasyong etikal nito, seguridad ng mga tool, mga kontrol sa quality assurance, pamamahala sa buong lifecycle ng generative AI, pagtukoy ng mga tunay na use case, pakikipagtulungan sa buong pamahalaan, transparency, kasanayan, at pamamahala (governance). Ang pagpipilit ng framework sa "makabuluhang kontrol ng tao" at buong pamamahala ng lifecycle ay umiiral dahil may partikular na paraan ng pagkabigo ang mga business case ng proyektong AI na wala sa ibang paggastos sa IT: madaling makagawa at madaling palakihin ang headline na bilang ng produktibidad ng isang pilot, dahil sinusukat ito bago pa isaalang-alang ang pasanin ng beripikasyon, pagwawasto, at pangangasiwa na likha ng tool. Kasabay ng framework, inoobliga ng Algorithmic Transparency Recording Standard (ATRS) ang mga pampublikong katawan na maglathala ng standardisadong talaan — layunin, datos na ginamit, performance, pagsusuri sa pagiging patas, at mga kaayusan sa pangangasiwa ng tao — para sa mga algorithmic na tool na may malaking impluwensya sa mga desisyon tungkol sa mga indibidwal, kaya ang gastos sa assurance ng isang AI system ay nagiging usaping pampubliko, hindi panloob na pagtatantya na tahimik na lalaktawan ng isang team.

## Ang matematika

Ang pag-aampon ng AI ay tinatasa bilang karagdagan sa, hindi kapalit ng, karaniwang appraisal ng [value for money](../value-for-money-ang-pormal-na-pagsusuri-kung-sulit-ang-paggastos-ng-pamahalaan/), at tahasang inilalatag ang mga terminong partikular sa AI sa halip na isiksik sa iisang bilang ng "pakinabang sa produktibidad":

```
Net na halaga ng isang AI system =
    pakinabang sa produktibidad (oras na natipid × loaded na gastos sa kawani)
  − gastos sa lisensya/compute
  − gastos sa beripikasyon at pangangasiwa ng tao (pagsusuri sa output ng AI
    bago ito kumilos — hindi ito lumiliit sa zero kahit sa mga hinog na tool)
  − gastos sa dokumentasyon ng ATRS at tuloy-tuloy na pagmo-monitor
  − gastos ng pinsala mula sa mga error, bias, o hallucination na inayos ayon sa panganib,
    may timbang batay sa kung sino ang nagdurusa sa pinsala (distributional-weighting)

Ang bilang ng produktibidad ng pilot na walang terminong pangangasiwa ay hindi
maihahambing sa business-as-usual na baseline ng gastos na kasama na ang
katumbas na pagsusuri ng tao — tingnan ang ai-productivity-in-the-public-sector
para sa mas buong disiplina sa pagsukat ng produktibidad na hinango rito.
```

## Halimbawang kalkulasyon

**Lokal na awtoridad na gumagamit ng generative AI tool para gumawa ng unang draft ng mga tugon sa karaniwang katanungan tungkol sa council tax**: 25,000 katanungan/taon, dating ganap na hinahawakan ng mga caseworker sa average na 14 minuto/katanungan, loaded na gastos sa kawani na £34/oras.

```
Gastos sa baseline (walang AI):
  25,000 × (14/60) × £34 = £198,333/taon

Headline na pahayag ng pilot: gumagawa ang AI ng tugon sa loob ng 90 segundo,
"nirerepaso at ipinapadala na lang" ng caseworker — ang inaangking bagong oras ay 3 minuto
  25,000 × (3/60) × £34 = £42,500/taon
  → inaangking tipid na £155,833/taon (mukhang nakagugulat)

Ganap na loaded na bilang, sinukat pagkatapos ng 3 buwang live sa halip na
sa piniling mga test case ng pilot:
  Aktwal na oras ng pagrepaso + pagwawasto bawat tugon: 6 minuto (kailangan ng
  tunay na pag-eedit ang mga draft para sa masalimuot o sensitibong katanungan)
  25,000 × (6/60) × £34 = £85,000/taon
  Gastos sa lisensya/compute: £38,000/taon
  Dokumentasyon ng ATRS at kada-kwartal na pagmo-monitor ng bias/kalidad: £14,000/taon
  Kabuuang gastos = 85,000 + 38,000 + 14,000 = £137,000/taon

Tunay na tipid = 198,333 − 137,000 = £61,333/taon — totoo at sulit panatilihin,
ngunit mas mababa sa kalahati ng headline na pahayag ng pilot, at kinailangan
ng tapat na pagsukat ng oras ng pangangasiwa, hindi ang pinakamainam na
senaryo ng pilot, upang matuklasan ito.
```

## Kaugnayan sa software engineering

Dito nagtatagpo ang [ai-productivity-in-the-public-sector](../produktibidad-ng-ai-sa-pampublikong-sektor/) at ang paksang ito: ang mga engineering team na nagtatayo ng mga AI feature sa mga serbisyong pampubliko ang may hawak ng instrumentasyon na nagpapahintulot sa "tunay" na bilang sa halimbawang kalkulasyon — pag-log ng aktwal na oras ng pagrepaso, edit distance sa pagitan ng draft at ipinadalang tugon, at antas ng escalation, sa halip na magtiwala sa mga kondisyon ng demo ng pilot. Dapat tasahin ang mga AI feature laban sa punto 9 ng [digital-service-standard](../digital-service-standard-ang-pamantayan-ng-serbisyong-digital-ng-pamahalaan/) (ligtas na serbisyo, privacy ng user) at i-cross-reference sa [public-sector-cybersecurity-value](../halaga-ng-cybersecurity-sa-pampublikong-sektor-pagpepresyo-sa-pagbabawas-ng-panganib/) kapag humahawak ang tool ng datos ng mamamayan, at ang anumang AI system na may malaking impluwensya sa mga desisyon tungkol sa mga indibidwal ay nangangailangan ng talaan sa ATRS bago ituring na handa para sa assessment, gaya ng isang serbisyong kailangang makapasa sa assessment ng [digital-service-standard](../digital-service-standard-ang-pamantayan-ng-serbisyong-digital-ng-pamahalaan/) bago maging live.

## Mga karaniwang pagkakamali

- **AI-washing**: pagpapalit ng pangalan ng umiiral na rules-based na automation bilang "AI" upang makakuha ng pondo o atensyong nakalaan sa pag-aampon ng AI, nang wala ang mga panganib sa katumpakan o bias na siyang tunay na dahilan ng dagdag na pagsusuri ng framework.
- **Pagsukat ng produktibidad ng pilot, hindi ng production**: tumatakbo ang mga pilot sa piniling mga test case kasama ang masigasig at maasikasong tagasuri; tumatakbo ang production sa buong magulong halo ng mga kaso kasama ang mga tagasuring, sa paglipas ng panahon, nagkakaroon ng automation bias at kulang na ang pagsusuri sa output — parehong binabaluktot ang tapat na bilang ng gastos sa pangangasiwa.
- **Paglaktaw sa rehistrasyon sa ATRS dahil "hindi naman talaga automated na pagpapasya" ang tool**: ang hangganan ng pamantayan ay malaking impluwensya sa isang desisyon tungkol sa isang indibidwal, na natutugunan ng karamihan ng mga AI tool sa pagdadraft o triage na humaharap sa mamamayan kahit teknikal na may taong pumipirma.
- **Pagbalewala sa distributional na epekto ng mga error**: ang antas ng error ng isang AI system na naka-average sa lahat ng user ay maaaring magtago ng mas mataas na antas ng error o bias para sa mga partikular na grupo; dapat ilapat ang [distributional-weighting](../distributional-weighting-pagtitimbang-ng-benepisyo-ayon-sa-kung-sino-ang-tumatanggap/) sa terminong pinsalang inayos ayon sa panganib, hindi lamang sa pinagsama-samang bilang ng katumpakan.

## Mga sanggunian

- Central Digital and Data Office, Generative AI Framework for Government (2024). <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
- Algorithmic Transparency Recording Standard. <https://www.gov.uk/government/collections/algorithmic-transparency-recording-standard-hub>
- HM Treasury, Green Book: central government guidance on appraisal and evaluation. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-governent>
