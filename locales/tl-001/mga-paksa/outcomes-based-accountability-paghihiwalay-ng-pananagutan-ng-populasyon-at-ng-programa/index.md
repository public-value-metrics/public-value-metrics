# Outcomes-based accountability: paghihiwalay ng pananagutan ng populasyon at ng programa

Ang Outcomes-Based Accountability, na tinatawag ding Results-Based Accountability (RBA), ay balangkas ni Mark Friedman para paghiwalayin ang dalawang tanong na nakagawiang pinaghahalo ng pag-uulat sa pampublikong sektor: "maayos ba ang kalagayan ng populasyon?" (pananagutan ng populasyon) at "maayos ba ang takbo ng partikular na programang ito?" (pananagutan sa performance). Ang pagsasama-sama sa dalawa ay, ayon kay Friedman, ang pinakakaraniwang dahilan kung bakit sinisisi ang mahusay na pinamamahalaang mga programa sa mga takbo ng populasyon na hindi nila kailanman nagkaroon ng kapangyarihang ibahin.

## Bakit ito mahalaga

Inilahad ni Friedman ang balangkas sa *Trying Hard Is Not Good Enough* (2005), na nangangatwirang karamihan ng pampublikong pag-uulat ay alinman sa nilulunod ang mga tagapagpasya sa estadistika sa antas ng populasyon na hindi kontrolado ng iisang ahensiya (rate ng maagang pagbubuntis, rate ng kawalan ng trabaho, life expectancy) o nilulunod sila sa bilang ng aktibidad sa antas ng programa (mga kliyenteng nakita, mga referral na ginawa) na walang sinasabi kung gumanda ba ang buhay ng sinuman. Ang ambag ng RBA ay isang maliit at disiplinadong bokabularyo na nagpapanatiling magkahiwalay ang dalawa: ang mga resulta ng populasyon (kondisyon ng kapakanan ng buong populasyon, gaya ng "ipinanganganak nang malusog ang mga bata") ay pag-aari ng walang iisang ahensiya at nangangailangan ng maraming kasosyong sabay-sabay na kumikilos; ang mga performance measure (gaano kahusay pinaglilingkuran ng partikular na programa ang mga partikular nitong kliyente) ay pag-aari ng isang ahensiya at dapat hatulan lamang batay sa kaya talagang impluwensiyahan ng ahensiyang iyon. Ang "tatlong tanong sa performance" ni Friedman — gaano karami ang ginawa namin, gaano kahusay namin ito ginawa, at may gumanda ba ang buhay? — ay naka-embed na ngayon sa mga kontrata ng human-services ng mga estado at county sa US at, sa pamamagitan ng RBA-aligned na consultancy at toolkit na Clear Impact, malawakang ginagamit sa commissioning ng lokal na pamahalaan sa UK at Commonwealth. Kontraktwal ang praktikal na taya: hindi dapat alisan ng pondo ang programa sa pabahay dahil tumaas ang rate ng kawalan ng tirahan sa lungsod mula sa mga sanhing makroekonomiko na lampas sa abot nito, ngunit tiyak na dapat itong alisan ng pondo kung hindi napapatirahan ang sarili nitong mga kliyente.

## Ang matematika

```
Pananagutan ng populasyon (ang "malaking larawan" na pinagsasaluhan ng komunidad, rehiyon, o bansa):
  Result       — kondisyon ng kapakanan (hal. "may seguridad sa ekonomiya ang mga residente")
  Indicator(s) — sukat ng kondisyong iyon (hal. rate ng kawalan ng trabaho, median na kita ng sambahayan)
  → walang iisang programang may-ari ng indicator; kailangan ng maraming kontribyutor para gumalaw ito

Pananagutan sa performance (ang pananagutan ng isang programa):
  Gaano karami ang ginawa namin?   — dami ng aktibidad (mga kliyenteng napagsilbihan, mga yunit na naihatid)
  Gaano kahusay namin ito ginawa?  — kalidad/kahusayan (% na nakakumpleto, cost per client)
  May gumanda ba ang buhay?        — ang outcome na mahalaga (% na may trabaho 6 na buwan matapos ang
                                      programa, bago/pagkatapos o laban sa comparison group)

Hinahatulan ang programa sa ikatlong tanong sa performance, hindi kailanman nang direkta sa
indicator ng populasyon, maliban kung ang laki at disenyo nito ay makatwirang kayang igalaw ito nang mag-isa.
```

## Halimbawang kalkulasyon

**Programa ng suporta sa trabaho na pinondohan ng lungsod**, 500 kalahok/taon, kinontrata ng lokal na awtoridad sa ilalim ng balangkas ng performance na istilong RBA:

```
Indicator ng populasyon (konteksto, hindi scorecard ng programa):
  Rate ng kawalan ng trabaho sa lungsod: 6.2% (tumaas mula 5.8% noong nakaraang taon, dahil sa pagsasara
  ng pabrikang lampas sa kontrol ng programa)

Mga performance measure (ang tunay na pananagutan ng programa):
  Gaano karami: 500 kalahok ang naka-enrol (target 480) — natugunan
  Gaano kahusay: 78% completion rate; cost per completer = £340,000 / 390 nakakumpleto ≈ £872
  Gumanda ba ang buhay: sa 390 nakakumpleto, 260 ang may tuloy-tuloy na trabaho pagkaraan ng 6 na buwan = 66.7%
              kumpara sa 41% ng katugmang comparison group (tingnan ang counterfactual-analysis)
```

Sa pagbasang batay sa pananagutan ng populasyon, mukhang bumabagsak ang programa — tumaas ang rate ng kawalan ng trabaho ng lungsod sa panahon nito. Sa pagbasang batay sa pananagutan sa performance ng RBA, nagtatagumpay ang programa: naabot nito ang target sa dami, napanatiling matatag ang kalidad, at nagbunga ng outcome sa trabahong 25.7 puntos-porsyentong mas mataas kaysa sa katugmang comparison group, habang gumalaw ang indicator ng populasyon dahil sa mga sanhing (pagsasara ng pabrika) ganap na lampas sa kontrol ng programa.

## Kaugnayan sa software engineering

Direktang tumutugma ang RBA sa pamilyar na pagkakaibang SRE: ang mga indicator ng populasyon ay gaya ng mga business-level na North Star metric na walang iisang engineering team ang may-ari mula simula hanggang dulo (kita ng kompanya, bahagi sa merkado), samantalang ang mga performance measure ay gaya ng sariling mga SLO ng team — ang mga bagay na talagang naigagalaw ng mga desisyon sa disenyo ng team na iyon. Ang dashboard na nag-uulat ng dalawa nang walang label kung alin ang alin ay nag-aanyaya ng eksaktong maling pag-uugnay na pinipigilan ng RBA: ang on-call engineer na sinisisi sa metric na kontrolado ng dependency team. Kapag nagko-commission o bumubuo ng mga reporting tool para sa mga kontrata ng outcome, buuin ang triad na "gaano karami / gaano kahusay / gumanda ba ang buhay" bilang first-class at hiwalay na nasasalang mga field sa halip na iisang pinaghalong KPI — parehong disiplina ito sa paghihiwalay ng leading at lagging indicator sa [mga KPI ng pampublikong sektor](../mga-kpi-ng-pampublikong-sektor-pagpili-ng-sukatan-na-hindi-madaling-dayain/). Ang RBA rin ang lohika ng pananagutan sa ilalim ng [payment by results at social impact bonds](../payment-by-results-at-social-impact-bonds-pagbabayad-batay-sa-napatunayang-outcome/): ang kontrata ng PbR ay patas lamang na magbabayad batay sa performance measure na "gumanda ba ang buhay," hindi kailanman sa indicator ng populasyon, maliban kung ang interbensyon ang tunay na nangingibabaw na tagapagtulak nito.

## Mga karaniwang pagkakamali

- **Pagbabayad o pagpaparusa sa programa batay sa indicator ng populasyon na hindi nito kontrolado**: ito ang iisang pagkakamaling pinipigilan ng RBA; laging alamin kung malaki o maliit na kontribyutor ang programa sa resulta ng populasyon bago ikabit ang mga kahihinatnan dito.
- **Pag-uulat ng "gaano karami" na parang "gumanda ba ang buhay"**: ang mga bilang ng aktibidad (mga kliyenteng nakita) ang pinakamadaling datos na kolektahin at pinakakaunting impormasyon ang ibinibigay; igiit na sasagutin ang tanong na "may gumanda ba ang buhay" ng totoong datos ng outcome, mainam kung laban sa counterfactual (tingnan ang [counterfactual-analysis](../counterfactual-analysis-ano-ang-mangyayari-kung-walang-interbensyon/)).
- **Pagtrato sa mga indicator ng RBA bilang permanente**: tahasang paulit-ulit ang pamamaraan ni Friedman — siklo ng "datos, kuwento, ano ang epektibo, plano ng aksyon" — hindi minsanang ehersisyo sa disenyo ng scorecard.
- **Walang comparison group para sa "gumanda ba ang buhay"**: ang bago/pagkatapos na pagbabago na walang counterfactual ay nagsasama sa epekto ng programa at sa takbong ipapakita rin naman ng populasyon.

## Mga sanggunian

- Mark Friedman, *Trying Hard Is Not Good Enough: How to Produce Measurable Improvements for
  Customers and Communities*, Trafford Publishing, 2005.
- Clear Impact, "What is Results-Based Accountability?"
  <https://clearimpact.com/results-based-accountability/>
