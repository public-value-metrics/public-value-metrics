# Impact Evaluation at Process Evaluation: pagkakaiba ng pagsusuri sa epekto at sa paghahatid

Itinatanong ng impact evaluation kung ang programa ba ang sanhi ng mga nilayong kinalabasan (outcome). Itinatanong ng process evaluation kung talagang naihatid ba ang programa ayon sa disenyo — kanino, sa anong dose, at may anong mga hadlang o tagapagpadali sa daan. Magkaibang tanong ang mga ito na nangangailangan ng magkaibang pamamaraan, at itinuturing ng Magenta Book ng HM Treasury na karaniwang kasanayan ang pagkomisyon sa dalawa nang sabay, dahil hindi mauunawaan ang mahina o null na resulta ng impact nang mag-isa: hindi nito masasabi kung mali ang pinagbabatayang teorya ng programa, o kung magandang teorya ngunit hindi kailanman nahatid nang maayos.

## Bakit ito mahalaga

Paulit-ulit na natuklasan sa mga ebalwasyon ng pamahalaan na walang nasusukat na epekto ang isang programa ngunit walang process evaluation na magpapaliwanag kung bakit — na nag-iiwan sa mga komisyoner na hindi makapag-iba ng "hindi gumagana ang ideyang ito" (pagkabigo ng teorya) at "hindi kailanman nasubukan nang maayos ang ideyang ito" (pagkabigo ng implementasyon). Ang gabay ng Medical Research Council sa process evaluation ng mga komplikadong interbensyon, na inilathala sa BMJ noong 2015 at malawakang sinisipi kasama ng Magenta Book, ay pormal na nagtakda ng fidelity, dose, at reach bilang pangunahing dapat sukatin ng process evaluation. Ang pagkomisyon ng impact evaluation nang walang process evaluation ay nanganganib na iwanan ang tunay na mahusay na disenyo ng programa dahil naihatid ito sa kalahati lamang ng nilayong populasyon at sa bahagi lamang ng nilayong tindi — pagkakamaling mahusay maiwasan ng tagabuo ng sistema, dahil ang fidelity ng paghahatid ay mismong nakukuha ng mga operational na sistema ng datos halos real time.

## Ang matematika

```
Itinatanong ng process evaluation:
 - Naihatid ba ito sa target na populasyon, sa nakaplanong dose/tindi?
 - Tugma ba ang paghahatid sa disenyo ng logic model / theory of change?
 - Anong mga hadlang o tagapagpadali ang nakaapekto sa paghahatid?
 Mga pamamaraan: fidelity check laban sa mga paunang tinukoy na threshold, case study, panayam,
          administratibong datos ng paghahatid.

Itinatanong ng impact evaluation:
 - Ano ang nagbago, at gaano karami ng pagbabagong iyon ang maiuugnay sa programa?
 Mga pamamaraan: RCT, DiD, PSM, RDD — tingnan ang impact-evaluation-methods — laban sa counterfactual.

Pinagsamang diagnosis:
 Walang epekto  + mataas na fidelity  → pagkabigo ng teorya: ang modelo mismo ay hindi nagbunga ng outcome
 Walang epekto  + mababang fidelity    → pagkabigo ng implementasyon: hindi kailanman nasubukan nang maayos ang modelo
 May epekto + mataas na fidelity       → ulitin nang may kumpiyansa
 May epekto + mababang fidelity        → imbestigahan pa: maaaring marupok o partikular sa site ang epekto
```

## Halimbawang kalkulasyon

**Lokal na awtoridad (programa sa pagpapalaki ng anak)**: ang impact evaluation na gumagamit ng difference-in-differences ay nakakita ng +2 percentage point na pagbabago sa sukat ng wellbeing ng bata — hindi estadistikal na makabuluhan. Ang process evaluation na isinabay dito ay nakakita na 210 lamang sa 500 pamilyang target ang naabot ng programa (42% reach), at sa mga ito, 95 lamang ang nakatupad ng paunang tinukoy na fidelity threshold na 75%+ ng mga sesyong dinaluhan — 19% ng orihinal na planong reach. Konklusyon: ang mahinang resulta ng impact ay tugma sa pagkabigo ng implementasyon, hindi ebidensyang hindi gumagana ang modelo ng programa; ang angkop na tugon ay ang pag-aayos sa referral pathway na nagdulot ng 58% na pagbagsak, hindi ang pag-iwan sa disenyo ng programa.

**Charity (programa sa digital literacy)**: ang impact evaluation ay nakakita ng malakas na epekto (+18 percentage point sa iskor ng digital confidence), at kinumpirma ng kasabay na process evaluation ang 92% fidelity sa nakaplanong kurikulum sa lahat ng 12 site ng paghahatid. Pinagsama, maaaring palawakin ng tagapondo ang programa nang may kumpiyansa, dahil napatunayang pare-pareho ang epekto at hindi bunga ng isang di-pangkaraniwang mahusay na site.

## Kaugnayan sa software engineering

Ang datos ng process evaluation ay mismong mahusay makuha ng mga delivery system: pagdalo laban sa plano, dosis ng sesyon, at pagkalas sa bawat yugto ng referral o enrolment funnel — ang parehong funnel analytics na binubuo na ng mga engineer para sa mga feature ng produkto, na inilapat sa delivery pipeline ng programang panlipunan. Ang pagpapakain ng mga sukatan ng fidelity at reach sa mga program manager nang halos real time, sa halip na maghintay ng ebalwasyon sa katapusan ng grant, ay nagpapahintulot na maayos ang sirang referral pathway sa kalagitnaan ng programa sa halip na madiskubre lamang kapag tapos na ang panahon ng pondo. Tingnan ang [mga pamamaraan sa impact evaluation](../mga-pamamaraan-sa-impact-evaluation-rct-difference-in-differences-matching-at-regression-discontinuity/) para sa mga sanhing disenyong ipinapares sa process evaluation, ang [theory of change](../theory-of-change-pabalik-na-pagmamapa-ng-sanhi-mula-sa-layunin-hanggang-sa-mga-aktibidad/) at [logic model](../logic-model-ang-linear-na-diagram-mula-input-hanggang-impact-ng-isang-programa/) para sa disenyong sinusuri ng process evaluation ang fidelity, at ang [benefits realization](../benefits-realization-pagpapatunay-na-natupad-ang-ipinangakong-benepisyo/) para sa pagsubaybay sa paghahatid hanggang sa mga outcome na ipinangako.

## Mga karaniwang pagkakamali

- **Pagkomisyon ng impact evaluation lamang.** Hindi na maipaliliwanag ang null o mahinang resulta bilang pagkabigo ng teorya o ng implementasyon, na mismong pagkakaibang mahalaga sa pagpapasya kung ano ang susunod na gagawin.
- **Pagtrato sa process evaluation bilang malambot na dagdag.** Nangangailangan ito ng parehong higpit at paunang tinukoy na pamantayan ng fidelity gaya ng disenyo ng impact, kung hindi, nagiging anekdota ito kapag dumating ang mga resulta.
- **Pagkalito sa "nasa oras at nasa badyet" at "naihatid ayon sa disenyo".** Sinusuri ng process evaluation ang fidelity sa modelo — dose, target na grupo, nilalaman — hindi ang RAG status ng project management.
- **Hindi pag-pre-register ng mga fidelity threshold.** Ang pagpapasya pagkatapos ng pangyayari kung ano ang "sapat na dose" ay nagpapamukhang palusot pagkatapos ng katotohanan ang anumang paliwanag sa nakakadismaya na resulta ng impact.

## Mga sanggunian

- HM Treasury, Magenta Book (2020). <https://www.gov.uk/government/publications/the-magenta-book>
- Moore G, et al., "Process evaluation of complex interventions: Medical Research Council
  guidance." BMJ 2015;350:h1258. <https://www.bmj.com/content/350/bmj.h1258>
- National Audit Office, programme evaluation reports. <https://www.nao.org.uk/>
