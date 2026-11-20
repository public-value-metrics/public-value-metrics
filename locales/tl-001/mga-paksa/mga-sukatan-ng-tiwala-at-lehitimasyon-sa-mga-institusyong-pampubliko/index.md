# Mga sukatan ng tiwala at lehitimasyon sa mga institusyong pampubliko

Ang lehitimasyon at suporta ay isa sa tatlong paa ng "strategic triangle" ni Mark Moore sa *Creating Public Value* (1995) — katabi ng mismong public value at kapasidad sa operasyon — at ito ang paang pinakamadalas na hindi nasusukat, dahil hindi tulad ng badyet o bilang ng output, walang malinaw na iisang bilang ang lehitimasyon. Ang mga sukatan ng tiwala at lehitimasyon ay pamilya ng mga proxy na sukat na ginagamit ng mga pamahalaan upang punan ang puwang na iyon: mga survey ng tiwala sa institusyon, mga rating ng kumpiyansa mula sa oversight body, datos ng reklamo at apela, at mga indicator ng suportang pampulitika/lehislatibo.

## Bakit ito mahalaga

Ang argumento ni Moore ay ang public manager na naghahatid ng tunay na halaga ngunit nawawalan ng lehitimasyong pampulitika at pampubliko ay kalaunang mawawalan ng authorizing environment na kailangan upang ipagpatuloy ang paghahatid — mababawasan ang pondo, makikitid ang mandato, at magugutom ang serbisyo gaano man kaganda ang mga kinalabasan nito. Kaya ang lehitimasyon ay hindi pahabol na public relations na idinikit sa delivery scorecard; ito ay load-bearing na input kung makakapagpatuloy pa ang misyon, kaya nasa magkapantay na pananaw ito sa [public value scorecard](../public-value-scorecard-balanced-scorecard-para-sa-mga-organisasyong-may-misyon-sa-halip-na-tubo/) at hindi talababa. Ang survey programme na "Trust in Government" ng OECD ang nangungunang cross-national na pagtatangkang sukatin ito: sinusubaybayan nito ang bahagi ng mga mamamayan sa mga kasaping estado ng OECD na nagsasabing may tiwala sila sa pambansang pamahalaan, at ipinapakita ng pangmatagalang datos nito na lubhang sensitibo ang tiwala sa mga pagyanig — parehong nagdulot ang krisis pinansyal noong 2008 at ang pandemya ng COVID-19 ng matatalim na pagbabago sa antas ng bansa, na madalas sinusundan ng bahagyang pagbawi lamang, at tuloy-tuloy na natutuklasan ng pagsusuri ng OECD na ang pinaghihinalaang *kakayahan* (naihahatid ba ng pamahalaan ang sinasabi nitong gagawin) at ang pinaghihinalaang *pagiging patas/integridad* (nakikitang kumikilos ba ang pamahalaan nang walang katiwalian o paboritismo) ang dalawang pinakamalakas na tagapagtulak ng bilang ng tiwala, na hiwalay sa kasiyahan sa anumang iisang transaksyon. Parami rin ang mga pamahalaang sumusubok na gawing operasyonal ang lehitimasyon sa mas detalyadong antas — ang mga malayang regulator at inspectorate ng UK (National Audit Office, Parliamentary and Health Service Ombudsman, at mga regulator ng sektor gaya ng Ofsted at Care Quality Commission) ay gumaganap bilang institusyonalisadong pagsusuri ng lehitimasyon, na ginagawang mga rating na maaaring i-audit ang "pinagkakatiwalaan pa rin ba ng publiko ang serbisyong ito".

## Ang matematika

Balangkas ang paksa ng tiwala at lehitimasyon, at ang magagamit nitong kantitatibong proxy ay:

```
Institutional trust index (istilong OECD)
  = % ng mga respondent na sumagot ng "oo" sa tanong na kumpiyansa sa pamahalaan,
    sinusubaybayan sa paglipas ng panahon, hinati ayon sa demograpikong grupo

Hanay ng proxy ng lehitimasyon (walang iisang bilang na pumapalit sa konstruktong ito):
  - Mga reklamong kinatigan kada 1,000 gumagamit ng serbisyo (datos ng ombudsman o panloob na reklamo)
  - Rate ng tagumpay ng judicial review / apela laban sa mga desisyon ng katawan
  - Rating ng malayang regulator/inspectorate (hal. mula "outstanding" hanggang "inadequate")
  - Mga botong kumpiyansa o dalas ng kritikal na ulat ng lehislatibo/oversight committee
  - Dami ng kahilingan sa freedom of information at rate ng pagbubunyag/pagtanggi, bilang proxy
    para sa pinaghihinalaang transparency

Pinagtitibay, hindi kinakalkula, ang lehitimasyon: ang maipagtatanggol na pagtataya ng lehitimasyon
ay nagta-triangulate ng ilan sa mga nasa itaas sa halip na umasa sa iisang proxy.
```

## Halimbawang kalkulasyon

**Pambansang awtoridad sa buwis**: triangulation ng lehitimasyon para sa taunang ulat ng public value.

```
Proxy ng tiwala na istilong OECD (survey ng kumpiyansa na partikular sa departamento):
  58% ng mga respondent ang nagsasabing pinagkakatiwalaan nila ang awtoridad na "tratuhin
  ako nang patas" (bumaba mula 64% dalawang taon na ang nakararaan)

Datos ng mga reklamo:
  Mga reklamong kinatigan: 4.2 kada 1,000 interaksyon ng nagbabayad ng buwis (tumaas mula 3.1 kada 1,000)

Mga referral sa ombudsman:
  Mga referral sa Adjudicator's Office: 1,850 sa taon, kung saan 61% ay kinatigan nang buo
  o bahagya laban sa awtoridad (tumaas mula 48% noong nakaraang taon)

Pagbasa sa tatlo: bumababa ang tiwala, tumataas ang mga kinatigang reklamo, at
lalong kumakampi laban sa awtoridad ang mga natuklasan ng malayang ombudsman —
tatlong malayang senyales na nagtutugma sa iisang direksyon, kaya kapani-paniwalang
natuklasan sa lehitimasyon ito at hindi ingay sa isang serye lamang.
```

Mahinang ebidensya ang pagbabago ng isa lang sa mga bilang na ito; ang sabay-sabay na paggalaw ng tatlong malayang sukat sa iisang panahon ang padron na nagpapaging maipagtatanggol ng pahayag tungkol sa lehitimasyon.

## Kaugnayan sa software engineering

Bihirang mabuo ng dashboard ng iisang koponan ang mga sukatan ng lehitimasyon, na mismong aral sa disenyo: bumuo ng mga reporting pipeline na kayang tumanggap at magtugma ng datos mula sa mga malayang panlabas na pinagmulan (mga casework system ng ombudsman, feed ng rating ng regulator, mga vendor ng survey) sa halip na disenyuhin ang pag-uulat ng lehitimasyon bilang panloob lang na sukatan, dahil walang bigat bilang ebidensya ang mga pahayag ng lehitimasyon na panloob ang pinagmulan ("ni-rate namin ang sarili naming mapagkakatiwalaan") — parehong problema ng kalayaan na tinukoy para sa pananaw ng lehitimasyon sa [public value scorecard](../public-value-scorecard-balanced-scorecard-para-sa-mga-organisasyong-may-misyon-sa-halip-na-tubo/). Dapat ding pantay ang higpit sa kalidad ng datos ng mga pipeline ng reklamo at apela sa anumang outcome pipeline na nagpapakain sa mga kontratang [payment by results](../payment-by-results-at-social-impact-bonds-pagbabayad-batay-sa-napatunayang-outcome/), dahil ang kulang-ulat o mahina ang pagkaka-kategorya na dataset ng reklamo ay tahimik na nagmamaliit sa problema ng lehitimasyon bago pa ito lumitaw sa survey ng tiwala makalipas ang isang taon. Tingnan ang [citizen satisfaction metrics](../mga-sukatan-ng-kasiyahan-ng-mamamayan-sa-serbisyong-pampubliko/) para sa katapat sa antas ng transaksyon ng sukat na ito sa antas ng institusyon, at ang [public value](../public-value-ang-halagang-nililikha-ng-pamahalaan-para-sa-kolektibong-lipunan/) para sa buong balangkas ng strategic triangle ni Moore na kinabibilangan ng paang ito.

## Mga karaniwang pagkakamali

- **Pagturing sa kasiyahan bilang proxy ng lehitimasyon**: maaaring masiyahan ang mamamayan sa interface ng isang transaksyon habang hindi nagtitiwala sa institusyon sa kabuuan (o kabaligtaran) — tingnan ang [citizen satisfaction metrics](../mga-sukatan-ng-kasiyahan-ng-mamamayan-sa-serbisyong-pampubliko/) kung bakit dapat iulat nang magkahiwalay ang dalawa.
- **Pag-asa sa iisang self-reported na sukatan**: ang panloob na survey ng tiwala na walang malayang pagpapatibay (datos ng ombudsman, rating ng regulator) ay madaling ipagwalang-bahala bilang pagmamarka sa sarili; mag-triangulate.
- **Pagwawalang-bahala sa demographic disaggregation**: maaaring itago ng pinagsamang pambansang bilang ng tiwala ang lubhang magkaibang lehitimasyon sa mga partikular na grupo (ayon sa edad, etnisidad, kita, o rehiyon) — kaya nga naghahati-hati rin ang sariling mga release ng OECD sa Trust in Government.
- **Pagbasa sa iisang pagbaba dahil sa pagyanig bilang permanenteng trend**: matindi ang galaw ng mga bilang ng tiwala sa paligid ng mga krisis (pagbagsak pinansyal, pandemya, kilalang iskandalo) at bahagyang bumabawi; hindi dapat i-extrapolate ang iisang data point pagkatapos ng pagyanig tungo sa pangmatagalang pagbaba nang walang karagdagang datos.

## Mga sanggunian

- Mark H. Moore, *Creating Public Value: Strategic Management in Government*, Harvard University Press, 1995.
- OECD, "Trust in Government." <https://www.oecd.org/en/topics/trust-in-government.html>
- Parliamentary and Health Service Ombudsman, annual casework statistics. <https://www.ombudsman.org.uk/>
