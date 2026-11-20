# Donor Return on Investment: ang tunay na naidaragdag ng pondo ng isang donor

Ang donor return on investment ay ang aktuwal na nabibili ng pound ng isang partikular na donor sa anyo ng mga kinalabasan (outcome) — hindi ang mga operating ratio ng charity, at hindi ang sariling return ng charity sa kabuuang badyet nito. Inililipat nito ang ROI mula sa pananaw ng organisasyon (gaano kahusay ang pagpapatakbo namin) tungo sa pananaw ng donor (ano ang binabago ng marginal kong kontribusyon), at madalas, at mali, na itinuturing na iisa ang dalawang numero.

## Bakit ito mahalaga

Ang sariling "ROI" ng isang charity, kung gagamitin man ang pariralang iyon, ay kadalasang naglalarawan ng bagay na gaya ng [gastos kada benepisyaryo](../gastos-bawat-benepisyaryo/) o [overhead ratio ng charity](../overhead-ratio-ng-charity-bakit-mapanlinlang-na-sukatan-ng-kahusayan/) — mga sukatan ng kahusayang pang-organisasyon. Ibang tanong ang ROI ng donor: dahil may iba nang kita ang charity na ito, ano ang idinaragdag ng pera ng *donor na ito* sa margin? Kung maihahatid ng charity ang parehong programa mayroon man o walang partikular na £10,000 na regalo — dahil sagana ito sa reserba, o dahil may ibang tagapondong pupuno sa puwang — halos zero ang donor ROI ng regalong iyon, gaano man kaganda ang kabuuang overhead ratio o gastos kada outcome ng charity.

Ito ang parehong tanong ng additionality na pinagbabatayan ng pagtatasa ng [value for money](../value-for-money-ang-pormal-na-pagsusuri-kung-sulit-ang-paggastos-ng-pamahalaan/) sa paggasta ng publiko sa UK at ng [additionality at deadweight](../additionality-at-deadweight-ano-ang-tunay-na-naidagdag-ng-programa/) sa ebalwasyon ng programa: ang halagang nalikha ay maibibilang lamang sa tagapondo hangga't hindi ito mangyayari kahit wala siya. Binubuo ng malalaking donor-advised na plataporma at organisasyon ng epektibong pagbibigay (Giving What We Can, GiveWell) ang kanilang mga rekomendasyon sa paligid ng pagkakaibang ito, na ang itinatanong ay hindi "mahusay ba ang charity na ito" kundi "may natitirang puwang ba ang charity na ito para sa karagdagang pondo kaya additional ang regalo ko."

## Ang matematika

```
Donor ROI ≠ Operating efficiency ng charity

Donor ROI  ≈  (Outcome na nakamit dahil sa regalo) − (Outcome na mangyayari
               kahit wala ito, ibig sabihin ang counterfactual)
             ─────────────────────────────────────────────────
                              Laki ng regalo

Mahahalagang input:
  - Room for more funding (kapos ba sa pondo ang charity sa margin?)
  - Funging (pupunuan ba ng ibang donor ang puwang?)
  - Marginal na cost-effectiveness sa partikular na antas ng pondo (madalas
    tumataas ang gastos habang lumalampas ang interbensyon sa pinakamadaling
    maabot na populasyon)
```

Tingnan ang [cost-effectiveness ng effective altruism](../cost-effectiveness-ng-effective-altruism-pagraranggo-ng-mga-interbensyon-ayon-sa-kabutihang-nabibili-ng-bawat-dolyar/) kung paano isinasagawa ng GiveWell ang tanong na "room for more funding," at ang [counterfactual analysis](../counterfactual-analysis-ano-ang-mangyayari-kung-walang-interbensyon/) para sa pangkalahatang pamamaraan.

## Halimbawang kalkulasyon

Pumipili ang isang donor sa pagitan ng dalawang £5,000 na regalo:

- **Charity C**: may ganap nang pondong pangunahing programa na may £2 milyon sa reserba at listahan ng naghihintay na tagapondo; malamang na idadagdag ang marginal na £5,000 sa reserba o sa gawaing mas mababa ang prayoridad. Tinatayang donor-additional na outcome: kaunti lamang — hindi halatang binabago ng pera ang nangyayari.
- **Charity D**: maliit na programang may suportang ebidensya na hayagang nagsabing kailangan nitong tanggihan ang 200 katao sa susunod na quarter kung walang karagdagang £50,000, at nakalikom na ng £42,000 nito. Malamang na magpopondo ang marginal na £5,000 ng totoong karagdagang paghahatid — halimbawa, 20 karagdagang taong mapagsisilbihan, sa sariling sinabing gastos ng charity na £250 kada benepisyaryo.

Pareho ang laki ng regalo, pareho ang donor, ngunit lubhang magkaiba ang donor ROI — hindi dahil mas masamang organisasyon ang Charity C (maaaring mas maganda ang kabuuang gastos kada outcome nito) kundi dahil sarado na ang marginal na puwang nito sa pondo.

## Kaugnayan sa software engineering

Madalas na mga sukatan lamang ng kahusayan sa antas ng organisasyon (overhead ratio, gastos kada benepisyaryo) ang inilalabas ng mga plataporma ng donor at tool ng rekomendasyon sa pagbibigay, dahil ito ang inilalathala ng mga charity sa taunang ulat at pinakamadaling ilagay sa talahanayan ng paghahambing. Ang wastong pagrepresenta sa donor ROI ay nangangailangan ng ibang punto ng datos na mas mahirap hanapin: ang sariling sinabing kasalukuyang funding gap o "room for more funding" ng charity, na nagbabago sa buong taon at bihirang structured na datos. Ang mga plataporma na gustong suportahan ang tunay na pangangatwiran sa donor ROI ay nangangailangan ng direktang feed mula sa mga pagbubunyag ng funding gap (gaya ng mano-manong pinapanatili ng GiveWell para sa mga inirerekomenda nitong charity) o ng tahasang paalala na kahusayang pang-organisasyon, hindi donor additionality, ang ipinapakita ng talahanayan ng paghahambing. Tingnan ang [overhead ratio ng charity](../overhead-ratio-ng-charity-bakit-mapanlinlang-na-sukatan-ng-kahusayan/) para sa sukatang pinakamadalas, at mali, na ipinagkakalito sa donor ROI.

## Mga karaniwang pagkakamali

- **Pagkalito sa kahusayan ng charity at sa additionality ng donor.** Maaaring halos zero pa rin ang marginal na donor ROI ng isang maayos ang pamamahala at mababa ang overhead na charity kung hindi ito kapos sa pondo.
- **Pagwawalang-bahala sa funging.** Kung sasaklawin din naman ng malaking institusyonal na tagapondo ang puwang, inililipat ng regalo ng indibidwal na donor ang pera ng tagapondong iyon sa halip na magdagdag ng bagong paghahatid.
- **Pag-aakalang linear ang cost-effectiveness sa lawak.** Kadalasang unang pinagsisilbihan ang mga benepisyaryong pinakamurang maabot; madalas tumataas ang marginal na gastos kada outcome habang lumalawak ang programa, kaya iba ang ROI ng susunod na pound sa ROI ng karaniwang pound na nagastos na.
- **Walang sinabing funding gap.** Ang charity o plataporma na hindi masabi kung ano ang popondohan ng susunod na £X ay hindi makapagbibigay-suporta sa tunay na pahayag ng donor ROI, kundi sa pahayag lamang ng karaniwang gastos.

## Mga sanggunian

- Giving What We Can, on funding gaps and cost-effectiveness in donation decisions. <https://www.givingwhatwecan.org/>
- GiveWell, "Our criteria" (room for more funding as an explicit criterion). <https://www.givewell.org/how-we-work/our-criteria>
- HM Treasury, the Green Book: appraisal and evaluation in central government. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-governent>
