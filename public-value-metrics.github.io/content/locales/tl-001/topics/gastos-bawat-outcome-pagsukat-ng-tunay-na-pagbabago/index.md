# Gastos Bawat Outcome: Pagsukat ng Tunay na Pagbabago

Ang gastos bawat outcome ay kabuuang gastos ng programa na hinati sa bilang ng mga taong nakamit ang tinukoy at makabuluhang pagbabago sa kanilang kalagayan — hindi ang bilang ng basta nakatanggap ng serbisyo. Ito ang pinakamatalas na sukatan ng kahusayan na magagamit ng tagapondo o delivery team, dahil pinipilit nitong sagutin ang naunang tanong na iniiwasan ng karamihan sa mga charity: ano, eksakto, ang tagumpay?

## Bakit ito mahalaga

Maaaring mag-ulat ang isang food bank ng dalawang magkaibang bilang mula sa accounts ng parehong taon. Ang gastos bawat food parcel na naipamahagi ay maaaring £15. Ang gastos bawat sambahayang nakamit ang food security — hindi na nangangailangan ng emergency food aid, na na-verify sa isang follow-up — ay maaaring £340. Parehong totoo. Isa lamang ang nagsasabi sa tagapondo kung gumagana ang pera. Ang agwat sa pagitan ng dalawa ay ang agwat sa pagitan ng output at outcome: ang parcel na naiabot ay output; ang sambahayang wala na sa krisis ay outcome. Tingnan ang [outcome kumpara sa output](../outcomes-laban-sa-outputs-ang-pagkakaiba-ng-naihatid-at-ng-nagbago/).

Dalawang dekada nang nagtatayo ang third sector ng UK ng imprastraktura upang ipatupad ang pagkakaibang ito. Tahasang hinihiling ng "four pillar approach" ng New Philanthropy Capital sa pagiging epektibo ng charity na ilahad ng mga organisasyon ang kanilang mga outcome bago ang kanilang mga output, at naglalathala ang Inspiring Impact — ang collaborative sa pagsukat ng epekto na sinusuportahan ng mga tagapondo sa UK — ng Outcomes Matrix na ngayon ay hinihiling na kumpletuhin ng maraming aplikasyon sa grant. Umiiral ang taunang programa ng pananaliksik na "State of Hunger" ng Trussell Trust, na isinasagawa kasama ang Heriot-Watt University, dahil mismo sa wala namang sinasabi ang bilang ng parcel tungkol sa kung nakakatakas ba ang mga tao sa food insecurity.

May kahulugan lamang ang gastos bawat outcome kapag naitakda na ang counterfactual: ang outcome na nakamit "kahit papaano" ay hindi outcome na binili ng programa. Tingnan ang [counterfactual analysis](../counterfactual-analysis-ano-ang-mangyayari-kung-walang-interbensyon/) at [displacement at attribution](../displacement-at-attribution-paglilipat-ng-benepisyo-at-pag-aangkin-ng-kredito-sa-resulta/).

## Ang matematika

```
Gastos bawat outcome = Kabuuang gastos ng programa / Bilang ng mga benepisyaryong nakamit ang tinukoy na outcome

kung saan:
  Kabuuang gastos ng programa = direktang gastos sa paghahatid + patas na bahagi ng overhead
  Tinukoy na outcome          = paunang itinakda, nasusukat na pagbabago ng estado
                                (hal. "food secure sa 6-buwang follow-up",
                                hindi "nakatanggap ng food parcel")
```

Ihambing sa [unit cost databases](../unit-cost-databases-mga-handang-financial-proxy-para-sa-mga-kinalabasang-panlipunan/) (hal. mga benchmark ng unit cost na partikular sa sektor) upang hatulan kung mahusay, katamtaman, o mahina ang isang gastos bawat outcome kumpara sa maihahambing na mga interbensyon.

## Halimbawang kalkulasyon

**Food bank, isang taon**:

- Kabuuang gastos ng programa: £450,000
- Naipamahaging parcel: 30,000
- Gastos bawat parcel (sukatan ng output): £450,000 / 30,000 = **£15**

Nagsasagawa rin ang charity ng anim-na-buwang follow-up na survey sa isang sample ng mga sambahayan, at natuklasang 35% ng mga sambahayang nakatanggap ng tatlo o higit pang parcel ay nag-uulat na hindi na nangangailangan ng emergency food aid at nasa itaas ng threshold ng food-security sa isang karaniwang module ng survey sa food security. Sa 1,800 sambahayang nakatanggap ng tatlo o higit pang parcel sa taong iyon, 630 ang nakamit ang outcome.

```
Gastos bawat outcome = £450,000 / 630 = £714 bawat sambahayang nakamit ang food security
```

Ang £714 ang bilang na dapat gamitin ng tagapondong naghahambing sa charity na ito sa isang cash-transfer pilot o serbisyo ng debt-advice — hindi ang £15. Kung ang maihahambing na programang cash-transfer sa parehong rehiyon ay nakakamit ang food security sa £500 bawat sambahayan, hindi malinaw na mas mahusay na ruta ang food bank tungo sa parehong outcome, kahit mukhang mura ang gastos nito bawat parcel.

## Kaugnayan sa software engineering

Karamihan sa mga case-management system ay ginawa upang mag-log ng mga output, dahil ang mga output ang nangyayari sa loob ng transaksyon (naiaabot ang parcel, isinusumite ang form). Karaniwang nangyayari ang mga outcome nang mas huli, madalas sa labas ng karaniwang window ng pagkuha ng sistema, at nangangailangan ng sadyang desisyon sa disenyo: bumuo ng mekanismo ng follow-up (survey trigger, re-contact workflow, data-linkage na gawain) bilang first-class na feature, hindi bilang karagdagang idinikit para sa taunang ulat. Dapat ituring ng mga engineer na gumagawa ng grant management o case management platform para sa sektor ang "ano ang outcome event, at paano namin ito oobserbahan" bilang tanong sa requirements na itinatanong bago ayusin ang data model — mas mahirap magdagdag ng field ng outcome nang huli kaysa sa counter ng output. Tingnan ang [outcome kumpara sa output](../outcomes-laban-sa-outputs-ang-pagkakaiba-ng-naihatid-at-ng-nagbago/) at [logic model](../logic-model-ang-linear-na-diagram-mula-input-hanggang-impact-ng-isang-programa/) para sa pagbuo ng usapang requirements na iyon, at ang [gastos bawat benepisyaryo](../gastos-bawat-benepisyaryo/) para sa mas mabilis at mas magaspang na sukatang inaabot ng mga team kapag hindi pa naitatayo ang pagsubaybay sa outcome.

## Mga karaniwang pagkakamali

- **Pag-uulat ng mga output na nakadamit-outcome.** Ang "mga taong naabot" ay hindi "mga taong natulungan." Kung ang sukatan ay mabubuo ng system log na walang follow-up na contact, halos tiyak na output ito.
- **Pagmamanipula ng denominator.** Ang pagpapaliit ng populasyon ng outcome sa "mga nakakumpleto ng programa" ay tahimik na nag-aalis sa mga umalis — madalas ang pinakamahihirap na kaso — at nagpapalaki sa lumilitaw na rate. Sabihin ang denominator bilang lahat ng nagsimula, hindi lahat ng nakatapos.
- **Walang counterfactual.** Ang pagbibilang sa sinumang nakamit ang outcome, kasama ang mga makakamit pa rin naman, ay nagpapalaki sa binili ng programa. Tingnan ang [counterfactual analysis](../counterfactual-analysis-ano-ang-mangyayari-kung-walang-interbensyon/).
- **Paghahambing sa mga hindi magkatugmang depinisyon ng outcome.** Ang "food secure" na sinukat ng validated na module ng survey ay hindi maihahambing sa "food secure" na iniulat mismo sa form ng satisfaction; ang league table ng gastos bawat outcome ay tapat lamang kapag tugma ang mga depinisyon ng outcome.

## Mga sanggunian

- New Philanthropy Capital (NPC), "Four Pillar Approach" to charity effectiveness. <https://www.thinknpc.org/resource-hub/four-pillar-approach/>
- Inspiring Impact, Outcomes Matrix and impact measurement resources. <https://inspiringimpact.org/>
- Trussell Trust and Heriot-Watt University, "State of Hunger" research programme. <https://www.trusselltrust.org/state-of-hunger/>
- GiveWell, "Our criteria" (cost-effectiveness as the leading criterion for charity recommendation). <https://www.givewell.org/how-we-work/our-criteria>
