# Cost-Effectiveness ng Effective Altruism: pagraranggo ng mga interbensyon ayon sa kabutihang nabibili ng bawat dolyar

Nirarangguhan ng pangangatwiran sa cost-effectiveness ng effective altruism (EA) ang mga interbensyong pangkawanggawa ayon sa dami ng kabutihan — kadalasang ipinapahayag bilang buhay na nailigtas, o kalusugang nakamit, kada dolyar na ginastos — at itinuturo ang pera sa interbensyong bumibili ng pinakamaraming kabutihan sa margin. Ang GiveWell ang pinakamaimpluwensyang praktisyoner sa larangan: naglalathala ito ng tahasan at regular na ina-update na mga tantiya ng gastos kada buhay na nailigtas at gastos kada outcome para sa maikling listahan ng "top charities," at inirerekomenda sa mga donor na magbigay sa alinmang kasalukuyang may room for more funding sa pinakamahusay na rate.

## Bakit ito mahalaga

Inilalagay ng GiveWell ang cost-effectiveness bilang pangunahing pamantayan sa inilathala nitong metodolohiya: naghahanap ito ng mga interbensyong may suportang ebidensya, tinatantya ang cost-effectiveness ng mga ito sa iisang yunit, at nagraranggo sa mga magkakaibang-magkaibang layunin — bednet laban sa malarya, bitamina A, cash transfer, bayad na insentibo sa bakuna — sa iisang axis na iyon. Direktang pag-angkat ito ng pangangatwirang kauri ng QALY/DALY mula sa health economics tungo sa philanthropy: kung paanong itinatanong ng sistemang pangkalusugan ang "ilang QALY kada pound sa margin," itinatanong ng GiveWell ang "ilang buhay, o taon ng buhay, kada dolyar sa margin," at itinuturing na mapapalitan ang mga layunin kapag na-convert na sa iisang yunit. Tingnan ang [cost-effectiveness analysis sa pamahalaan](../cost-effectiveness-analysis-sa-pamahalaan/) para sa pinsan nitong balangkas sa pampublikong sektor.

Ang pinakamadalas banggiting bilang ng GiveWell ay tungkol sa Against Malaria Foundation (AMF), na namamahagi ng mga bednet na may insecticide. Sa inilathalang worked example ng GiveWell (hango sa datos ng pondo noong 2020), humigit-kumulang $4,500 ang nagpondo ng sapat na net para maiwasan ang isang pagkamatay, matapos isaalang-alang ang di-perpektong paggamit ng net, baseline na mortalidad na walang net, at pagsasaayos para sa funging — ang posibilidad na tatanggap pa rin ang AMF ng bahagi ng pondong iyon mula sa ibang donor. Tahasang sinasabi ng GiveWell na nagbabago ang bilang na ito sa paglipas ng panahon at sa iba't ibang heograpiya habang nagbabago ang prevalence ng malarya, gastos ng net, at funding gap, at inaasahang karaniwang tataas ang gastos para magligtas ng buhay habang inuuna ang pinakamurang pagkakataon; ilustrasyon ito ng pamamaraan, hindi nakapirming presyo.

## Ang matematika

```
Cost-effectiveness = Gastos ng interbensyon / Yunit ng kabutihang nalikha
                    (hal. $ kada buhay na nailigtas, $ kada DALY na naiwasan, $ kada QALY)

Tanikala ng GiveWell para sa programa ng bednet, bilang ilustrasyon:
  $ kada net na nabili at naihatid
    ÷ bahagi ng mga net na aktuwal na ginagamit
    ÷ mga taong napoprotektahan kada net
    × baseline na taunang mortalidad kung walang net
    × pagbawas sa mortalidad na maiuugnay sa paggamit ng net (mula sa ebidensya ng RCT)
    × taon ng proteksyon kada net
    ÷ pagsasaayos para sa funging (perang pumapalit sa pondo ng ibang donor)
  = $ kada buhay na nailigtas (net ng mga epekto ng counterfactual na pondo)
```

Mahalaga ang tanikalang ito dahil bawat hakbang ay lugar kung saan karaniwang nagkakamali ang mga tantiya ng cost-effectiveness — tingnan ang mga karaniwang pagkakamali sa ibaba — at dahil ginagawa nitong tahasan na ang "gastos kada buhay na nailigtas" ay hindi kailanman hilaw na naobserbahang presyo; modelong tantiya ito na binuo mula sa ilang magkakahiwalay na di-tiyak na input.

## Halimbawang kalkulasyon

Dalawang haka-hakang interbensyon, parehong may suportang ebidensya, na nag-aagawan sa iisang marginal na £100,000:

- **Bednet (istilong AMF)**: humigit-kumulang $4,500 kada buhay na nailigtas ayon sa inilathalang worked example ng GiveWell na hango sa datos ng 2020, ibig sabihin ay napakalapit sa 20 buhay na nailigtas kada £100,000 depende sa exchange rate at taong ginamit.
- **Programa sa deworming**: walang makatwirang benepisyo sa mortalidad, ngunit matibay ang ebidensya ng pangmatagalang pagtaas ng kita mula sa deworming sa pagkabata; pinahahalagahan ito ng GiveWell sa termino ng pagtaas ng kita, hindi buhay na nailigtas, kaya mahirap itong direktang ihambing sa bednet nang walang pinagsasaluhang yunit. Gumagamit ang GiveWell ng tahasang balangkas ng "moral weights" para i-convert ang dalawa sa iisang panloob na yunit para sa pagraranggo.

Ang disiplina ng pamamaraang EA ay ang pagpilit na ilantad ang paghahambing na ito sa halip na pondohan ang dalawa dahil parehong "magandang pakinggan." Tingnan ang [social return on investment](../social-return-on-investment-pagsukat-ng-halagang-panlipunan-kaugnay-ng-puhunan/) para sa katumbas na mekanismong ginagamit ng mga social enterprise at lokal na komisyoner sa UK, na nagtatanong ng parehong tanong — alin ang pinakamahusay na return kada pound — sa idyoma ng monetized na halaga sa halip na buhay/DALY.

## Kaugnayan sa software engineering

Ang mga engineer na bumubuo ng mga plataporma ng donor, tool sa pagtutugma ng grant, o impact dashboard para sa mga tagapondong nakahanay sa EA (Open Philanthropy, mismong GiveWell, mga plataporma ng epektibong pagbibigay gaya ng Giving What We Can) ay dapat magrepresenta ng mga tantiya ng cost-effectiveness bilang saklaw na may nakasaad na palagay, hindi iisang numero — ang pinagbabatayang modelo ay may ilang multiplikatibong di-tiyak na input, at ang pagbagsak nito sa iisang bilang sa dashboard ay nagmamali ng representasyon sa kumpiyansang mismong sinasabi ng GiveWell. I-version ang bawat tantiya ayon sa petsa ng paglalathala; binabago ng GiveWell ang mga numero nito, minsan nang malaki, habang dumarating ang bagong ebidensya ng RCT o datos ng funding gap, at ang plataporma na nagka-cache ng lumang bilang ay tahimik na nagiging mali.

## Mga karaniwang pagkakamali

- **Pagtrato sa tantiya ng cost-effectiveness bilang nakapirming presyo.** Output ito ng modelo na may ilang multiplikatibong di-tiyak na input (rate ng paggamit, baseline na mortalidad, pagsasaayos sa funging); sabihin ang petsa at bersyon.
- **Pagwawalang-bahala sa funging/displacement.** Ang pagpopondo sa organisasyong makakatanggap din naman ng pera mula sa ibang donor ay bumibili ng mas kaunting counterfactual na kabutihan kaysa sa iminumungkahi ng headline — tingnan ang [additionality at deadweight](../additionality-at-deadweight-ano-ang-tunay-na-naidagdag-ng-programa/) at [displacement at attribution](../displacement-at-attribution-paglilipat-ng-benepisyo-at-pag-aangkin-ng-kredito-sa-resulta/).
- **Paghahambing sa magkakaibang yunit nang walang conversion.** Hindi direktang maihahambing ang "buhay na nailigtas" at "kitang nakamit" kung walang tahasang balangkas ng moral weights; ang paglalagay sa mga ito nang magkatabi na parang magkapareho ay pagkakamali ng kategorya.
- **Makitid na tingin sa isang cause area.** Ang pagraranggo lamang sa loob ng isang cause area (hal. mga charity sa pandaigdigang kalusugan lamang) at pagtawag sa nanalo bilang "pinakamahusay sa cost-effectiveness na charity" ay nagpapalabis sa pahayag; sadyang makitid ang cross-cause na pagraranggo ng GiveWell (pandaigdigang kalusugan at wellbeing), hindi pangkalahatan.

## Mga sanggunian

- GiveWell, "Our criteria." <https://www.givewell.org/how-we-work/our-criteria>
- GiveWell, "How Much Does It Cost to Save a Life?" (February 2024 version). <https://www.givewell.org/how-much-does-it-cost-to-save-a-life/february-2024-version>
- GiveWell, Against Malaria Foundation review. <https://www.givewell.org/charities/amf>
- Giving What We Can, on cost-effectiveness across causes. <https://www.givingwhatwecan.org/>
