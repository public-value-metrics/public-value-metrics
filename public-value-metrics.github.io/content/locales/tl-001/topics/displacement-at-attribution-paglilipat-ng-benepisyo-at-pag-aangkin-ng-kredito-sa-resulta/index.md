# Displacement at Attribution: paglilipat ng benepisyo at pag-aangkin ng kredito sa resulta

Nangyayari ang displacement kapag ang tila benepisyo ng isang programa ay nakamit sa pamamagitan ng pag-alis ng gawain o benepisyo mula sa ibang lugar, sa halip na lumikha ng bago — ang panalo mo ay talo ng iba. Ang attribution naman ay ang kaugnay na tanong kung gaano karaming bahagi ng naobserbahang kinalabasan (outcome) ang tunay na maaaring angkinin ng iyong interbensyon, kung nag-ambag din ang ibang aktor at salik. Parehong karaniwang pagsasaayos ang mga ito sa gabay sa ebalwasyon ng pampublikong sektor ng UK, kasama ng deadweight at leakage, at parehong madalas lampasan ng mga pahayag ng epekto na mukhang mas malakas kaysa sa totoo.

## Bakit ito mahalaga

Maaaring iulat ng iskema ng business grant ng isang lokal na awtoridad na tumutulong sa 50 tindahang lumipat sa isang regeneration zone ang "50 negosyong sinuportahan, 200 trabahong nalikha" — ngunit kung ang mga negosyong iyon ay lumipat lamang mula sa kalapit na high street sa halip na lumawak, inilipat ang mga trabaho, hindi nilikha, at maaaring halos zero ang netong epekto sa buong borough (o rehiyon). Itinuturing ng Magenta Book ng HM Treasury at ng matagal nang Additionality Guide ang displacement bilang kinakailangang bawas, dahil madalas ang mga kuwento ng lokal na tagumpay kahit walang netong benepisyo sa pambansa o rehiyonal na antas — lumipat lamang ang halaga, kadalasan sa kapinsalaan ng lugar o aktor na nawalan nito. Pormal itong inilalatag ng gabay sa ebalwasyon ng structural funds (ginamit sa mga dating programa ng EU Regional Development Fund at sa mga domestikong kahalili nito, gaya ng UK Shared Prosperity Fund) sa tatlong antas ng espasyo: lokal na displacement (sa loob ng bayan), rehiyonal na displacement (sa loob ng rehiyon), at pambansang displacement (sa buong UK), dahil maaaring additional ang isang interbensyon sa isang antas ngunit purong displacement sa mas malawak na antas — ang programang pangtrabaho na kumukuha ng mga manggagawa mula sa kalapit na bayan ay neutral sa pambansang antas kahit mukhang lokal na tagumpay.

Ang attribution ang kapatid na problema sa paghahatid na maraming katuwang, na ngayon ay karaniwan na sa gawain ng sektor panlipunan at serbisyong pampubliko na sangkot ang maraming ahensya. Kapag tatlong organisasyon ang magkasamang naghahatid ng serbisyong pumipigil sa kawalan ng tirahan, maaaring sabay-sabay na mag-angkin ng kredito ang taunang ulat ng bawat organisasyon para sa iisang pagbaba ng rough sleeping — kapag pinagsama ang mga ulat, maaaring lumampas ang inaangking epekto sa aktuwal na pagbabago sa totoong mundo, minsan nang ilang ulit. Umiiral ang gabay ng Magenta Book sa contribution analysis dahil madalas imposible ang randomized na pag-aatribusyon sa iisang aktor sa paghahatid ng maraming ahensya, at madalas ang tapat na sagot ay "nag-ambag kami sa kinalabasang ito" sa halip na "kami ang sanhi ng kinalabasang ito."

## Ang matematika

Ang displacement bilang bahagi ng karaniwang pagkakasunod-sunod ng netong epekto (tingnan ang
[additionality at deadweight](../additionality-at-deadweight-ano-ang-tunay-na-naidagdag-ng-programa/) para sa buong tanikala):

```
Netong karagdagang epekto = Gross na kinalabasan − Deadweight − Displacement − Leakage, × Multiplier

Rate ng displacement = benepisyo/gawaing nailihis mula sa ibang lugar
                       / kabuuang gross na benepisyo/gawaing naobserbahan
```

Ang attribution, kapag maraming aktor ang nag-aambag sa iisang kinalabasan, ay karaniwang ipinapahayag bilang bahagi ng kontribusyon (contribution share) sa halip na eksaktong porsyento, dahil kadalasang hindi ito masusukat sa parehong higpit ng displacement:

```
Maiaatributong bahagi ≈ f(lakas ng sanhing kontribusyon, kontribusyon ng ibang aktor,
                          panlabas/kontekstuwal na salik)

Hindi dapat lumampas ang inaangking epekto sa:
  Σ (maiaatributong bahagi ng bawat katuwang) ≤ 100% ng kabuuang naobserbahang kinalabasan
```

## Halimbawang kalkulasyon

**Regeneration grant**: iniulat ng high-street grant scheme ng isang konseho na 200 bagong trabaho sa tingian ang nalikha sa pinondohang zone. Natuklasan sa follow-up na survey na 60 sa mga trabahong iyon ay mula sa mga negosyong lumipat mula sa kalapit na high street na walang pondo sa loob ng parehong borough, at 30 pa ay mula sa mga pambansang chain na magbubukas ng sangay sa rehiyon kahit walang grant.

```
Gross na trabahong inangkin = 200
Lokal na displacement = 60 (lumipat sa loob ng borough)
Rehiyonal na displacement = 30 (magbubukas pa rin sa rehiyon)

Netong karagdagang trabaho (antas ng borough) = 200 − 60 = 140
Netong karagdagang trabaho (antas ng rehiyon) = 200 − 60 − 30 = 110
```

Nakadepende ang tapat na headline sa heograpikong saklaw na mahalaga sa tagapondo — ang business case ng Treasury na sinusuri sa pambansa o rehiyonal na antas ay dapat gumamit ng 110, hindi ng 140 sa antas ng borough, at lalong hindi ng hilaw na 200.

**Serbisyo sa kawalan ng tirahan na may maraming ahensya**: tatlong organisasyong katuwang (isang konseho, isang housing charity, at isang health trust) ang magkasamang naghahatid ng serbisyong nagbabawas ng rough sleeping. Bumaba ng 30 katao ang rough sleeping sa lugar sa loob ng taon. Inaangkin ng taunang ulat ng bawat organisasyon ang "binawasan namin ang rough sleeping ng 30" — kapag pinagsama, 90 katao ang inaangking natulungan ng tatlong ulat, tatlong beses ng aktuwal na pagbaba. Ang contribution analysis na nagtatakda ng bahagi sa bawat katuwang (halimbawa, 40% konseho, 35% charity, 25% health trust, batay sa dokumentadong tungkulin at malayang pagtatasa) ay mag-uulat ng 12, 10.5, at 7.5 ayon sa pagkakasunod, na tamang nagsusuma sa naobserbahang 30.

## Kaugnayan sa software engineering

Hinuhubog ng displacement at attribution kung paano dapat idisenyo ang mga sistema ng pagsubaybay sa epekto at pag-uulat ng outcome para sa paghahatid na maraming site o katuwang:

- Dapat tahasan at first-class na mga field ang heograpiko at organisasyonal na saklaw sa anumang impact dashboard — magkaibang numero ang iniulat na "para sa borough" at ang parehong halagang iniulat na "para sa rehiyon", at ang sistemang naghahalo sa mga ito ay gagawa ng mga numerong hindi maitutugma sa antas ng portfolio.
- Kapag magkasamang naghahatid ang maraming katuwang, dapat itala ng sistema ng outcome ang mga contribution share (o hindi bababa sa markahan ang magkasanib na attribution) sa halip na hayaang angkinin ng reporting module ng bawat katuwang ang 100% ng pinagsaluhang outcome — kung hindi, lalabis ang kabuuang epekto sa mga roll-up sa antas ng portfolio, minsan nang malala.
- Kaugnay ito ng [social return on investment](../social-return-on-investment-pagsukat-ng-halagang-panlipunan-kaugnay-ng-puhunan/) at [pag-uulat ng outcome ng grant](../pag-uulat-ng-outcome-ng-grant-mga-standardisadong-sukatan-para-sa-mga-tagapondo/): ang kalkulasyon ng SROI o IRIS+ na hindi isinasaalang-alang ang displacement o sobrang inaatributo ang mga pinagsaluhang outcome ay magbubunga ng pinalobong ratio na hindi tatagal sa audit o pagpaparami.

## Mga karaniwang pagkakamali

- **Pag-uulat ng lokal na tagumpay nang hindi sinusuri ang mas malawak na displacement.** Maaaring mukhang matagumpay ang isang programa sa pinakamaliit na antas ng pag-uulat ngunit neutral o negatibo sa mas malawak na antas; palaging sabihin ang heograpikong saklaw kung saan nalalapat ang net na bilang.
- **Pagpapahintulot sa bawat katuwang sa magkasanib na paghahatid na umangkin ng buong kredito.** Maliban kung napagkasunduan at nadokumento ang mga contribution share, lalabis ang kabuuang epekto sa roll-up na pag-uulat ng mga katuwang — tiyaking hindi lalampas sa naobserbahang kabuuan ang kabuuan ng mga pahayag sa antas ng katuwang.
- **Pagtrato sa attribution bilang eksaktong porsyento gayong paghuhusga ito.** Ang contribution analysis, hindi gaya ng randomized na counterfactual, ay nagbibigay ng maipagtatanggol na tantiya, hindi nasukat na katotohanan; ipakita ito na may angkop na kawalang-katiyakan sa halip na huwad na katumpakan.
- **Pagwawalang-bahala sa displacement sa mga interbensyong nakaharap sa merkado.** Ang suporta sa negosyo, mga iskema sa trabaho, at place-based na regeneration ang mga klasikong kategoryang mataas ang displacement; gawing sapilitan, hindi opsyonal, ang pagsusuri sa displacement para sa mga ito.

## Mga sanggunian

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020), including
  guidance on contribution analysis. <https://www.gov.uk/government/publications/the-magenta-book>
- HM Treasury / Department for Business, Innovation and Skills, "Additionality Guide: A Standard
  Approach to Assessing the Additional Impact of Interventions" (3rd edition).
- European Commission, "Evalsed: The Resource for the Evaluation of Socio-Economic Development" —
  guidance on local, regional, and national displacement scales.
- Mayne J. "Contribution Analysis: An Approach to Exploring Cause and Effect." ILAC Brief No. 16,
  2008.
