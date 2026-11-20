# Halaga ng open data: pagtataya sa halaga ng pampublikong datos na walang presyo

Ang halaga ng open data ay ang suliranin ng pagtataya kung magkano ang halaga ng datos ng pamahalaan at ng publiko kapag wala itong presyo: hindi ito ibinebenta, kaya walang linya ng kita, ngunit ang paglalabas nito (mga talaan ng panahon, iskedyul ng transportasyon, hangganan ng postcode, rehistro ng mga kompanya) ay malinaw na lumilikha ng aktibidad pang-ekonomiya at panlipunan sa ibaba ng daloy. Mahalagang mapahalagahan ito nang mahusay dahil mali ang "libre namang ilabas" at mali rin ang "walang halaga," at ang software engineer na nagpapasya kung bubuksan ang isang API o dataset ay nangangailangan ng mas mahusay na argumento kaysa sa alinman sa dalawa.

## Bakit ito mahalaga

Ang pinakamadalas banggitin na top-down na pagtataya ay nagmumula sa 2013 na ulat ng McKinsey Global Institute na "Open data: Unlocking innovation and performance with liquid information", na naglagay ng potensyal na taunang halaga ng open data sa pitong domain — edukasyon, transportasyon, mga produktong pang-consumer, kuryente, langis at gas, pangangalagang pangkalusugan, at pananalapi ng consumer — sa $3 trilyon hanggang $5 trilyon bawat taon sa buong mundo, sa pamamagitan ng mga mekanismong kabilang ang mas mataas na transparency, mas episyenteng pagtutugma ng supply at demand, at pagbibigay-daan sa mga bagong produkto at serbisyong itinatayo sa datos. Pagtatayang scenario ang numerong iyon, hindi nasukat na aktuwal na resulta, at madalas itong maling banggitin na parang kita itong direktang makukuha ng pamahalaan, gayong ang halaga ay kadalasang napupunta sa mga ikatlong partido — mga negosyo, mananaliksik, mamamayan — na gumagamit ng datos, na siyang mismong layunin ng pagbubukas nito sa halip na pagbebenta. Mula noon, ang Open Data Institute ng UK, na itinatag nina Sir Tim Berners-Lee at Sir Nigel Shadbolt noong 2012, ay bumuo ng hanay ng mas detalyadong bottom-up na case study — bawat sektor, bawat dataset — na higit na kapaki-pakinabang sa totoong business case kaysa sa headline na numero ng McKinsey, dahil ipinapakita nito ang mekanismo ng paglikha ng halaga, hindi lamang ang kabuuang laki nito.

## Ang matematika

Walang presyo sa pamilihan ang open data, kaya pumapalit ang mga paraan ng valuation; tatlong paraan ang paulit-ulit na lumilitaw, at wala sa kanila ang sapat nang mag-isa:

```
1. Paraan ng cost-avoided / replacement-cost:
   halaga ≈ ang babayaran sana ng mga user para gumawa o kumuha ng lisensya
   ng katumbas na datos nang sila mismo — lower bound ito, hindi nito binibilang
   ang halagang nilikha ng mga gamit na hindi inasahan ng orihinal na gumawa

2. Paraan ng market-analogue / downstream-activity:
   halaga ≈ kita o natipid ng mga negosyo/serbisyong itinayo sa datos
   (hal. mga satnav app na itinayo sa open na datos ng mapa at trapiko) —
   nakukuha ang totoong aktibidad pang-ekonomiya ngunit mahirap itong
   maiugnay nang malinis sa mismong paglalabas ng datos (tingnan ang
   additionality-and-deadweight)

3. Paraan ng contingent/stated-preference:
   halaga ≈ ang sinasabi ng mga user na handa nilang bayaran, o ang oras na
   sinasabi nilang natitipid nila — tingnan ang stated-preference-valuation
   para sa pangkalahatang pamamaraan at mga bias nito

Walang nagbubunga ng numerong kasinlinis ng presyo sa pamilihan; ang
kapani-paniwalang business case ng open data ay nagta-triangulate sa
dalawa o higit pa, at tahasang sinasabi kung aling mekanismo ang
gumagawa ng trabaho.
```

## Halimbawang kalkulasyon

**Ilustratibong pambansang paglalabas ng datos ng mapa/address** (metodolohiyang hango sa mga case study na istilong ODI, at ang mga numero ay ilustratibo ng sukat na karaniwang nakikita ng mga ganitong pag-aaral):

```
Pagtataya ng cost-avoided:
  Mga negosyong kukuha sana ng lisensya ng katumbas na address-matching
  na datos nang komersyal, sa tinatayang average na gastos sa lisensya na
  £4,000/taon, sa tinatayang 15,000 SME na gumagamit na ngayon ng libreng
  open dataset
  = 15,000 × £4,000 = £60,000,000/taon sa naiwasang gastos sa lisensya lamang

Pagtataya ng downstream-activity (mas haka-haka, nangangailangan ng counterfactual):
  Mga bagong produkto sa delivery-routing at logistics na itinayo sa open na
  datos na hindi iiral, o magiging mas masama nang malaki, kung wala ito —
  nangangailangan ng paghahambing sa counterfactual na mananatiling sarado
  o may komersyal na lisensya ang datos (counterfactual-analysis), dahil
  may bahagi ng aktibidad na iyon na mangyayari rin sa bayad na datos sa
  mas mataas na presyo, na siyang deadweight sa kahulugang "halagang
  nilikha ng pagbubukas nito"

Ang matatag na business case ay nag-uulat ng cost-avoided na bilang bilang
matibay na lower bound, at tinatrato ang downstream-activity na bilang
bilang scenario ng upper bound, hindi katotohanan.
```

## Kaugnayan sa software engineering

Para sa mga engineer, ang praktikal na tanong sa halaga ng open data ay kadalasang mas makitid kaysa sa mga pambansang headline na bilang: ang pagbubukas ba ng partikular na API o dataset na ito (sa halip na panatilihin ito sa likod ng kasunduan sa kasosyo) ay magpapataas ng reuse nang sapat upang bigyang-katwiran ang tuloy-tuloy na gastos sa pagdodokumento, pag-version, at pagsuporta rito bilang pampublikong interface? Totoo ang gastos sa pagpapanatili at ito ang katapat ng ekonomiyang build-once-reuse-often ng [government-as-a-platform](../government-as-a-platform-mga-pinagsasaluhang-bahagi-ng-serbisyong-digital-ng-pamahalaan/) — magkamag-anak ang dalawang paksa, ang isa ay tungkol sa pinagsasaluhang code at imprastraktura, ang isa ay tungkol sa pinagsasaluhang datos. Dapat suriin ang anumang pag-aangkin sa halaga ng open data laban sa [additionality-and-deadweight](../additionality-at-deadweight-ano-ang-tunay-na-naidagdag-ng-programa/) bago ito ilagay sa business case: ang aktibidad na mangyayari rin naman, sa komersyal na lisensyadong datos, ay hindi halagang nilikha ng *pagbubukas*.

## Mga karaniwang pagkakamali

- **Pagbanggit sa $3–5 trilyong bilang ng McKinsey bilang partikular sa UK o bilang bahagi ng dataset na ito**: pandaigdig, pitong-sektor na pagtatayang scenario ito mula 2013 — ang paggamit nito bilang tiyak na multiplier para sa iisang pambansang dataset ay nagpapalihis sa kung ano talaga ang numerong ito.
- **Walang counterfactual**: pag-aangkin ng kredito sa lahat ng downstream na aktibidad pang-ekonomiya na itinayo sa open data, nang hindi tinatanong kung gaano karami nito ang mangyayari rin sa bayad o lisensyadong datos sa mas mataas na presyo (tingnan ang [additionality-and-deadweight](../additionality-at-deadweight-ano-ang-tunay-na-naidagdag-ng-programa/) at [counterfactual-analysis](../counterfactual-analysis-ano-ang-mangyayari-kung-walang-interbensyon/)).
- **Pagkalito sa gastos ng produksyon at halagang nilikha**: ang dataset na magastos kolektahin ay hindi awtomatikong mahalagang ilabas, at ang mura ay hindi awtomatikong mababa ang halaga — sinusundan ng halaga ang downstream na gamit, hindi ang upstream na gastos.
- **Pagbalewala sa tuloy-tuloy na gastos sa pagpapanatili ng "open"**: ang paglalathala ng minsanang CSV extract ay hindi kapareho ng pangako sa pagpapatakbo ng dokumentado, may bersyon, at sinusuportahang open API — karaniwang paraan ng pagkabigo ang hindi pagpopondo sa huli matapos ang anunsyo ng paglulunsad.

## Mga sanggunian

- McKinsey Global Institute, "Open data: Unlocking innovation and performance with liquid information" (2013). <https://www.mckinsey.com/business-functions/mckinsey-digital/our-insights/open-data-unlocking-innovation-and-performance-with-liquid-information>
- Open Data Institute. <https://theodi.org/>
