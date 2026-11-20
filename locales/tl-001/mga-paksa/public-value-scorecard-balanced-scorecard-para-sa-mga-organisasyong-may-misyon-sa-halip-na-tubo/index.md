# Public value scorecard: balanced scorecard para sa mga organisasyong may misyon sa halip na tubo

Inaangkop ng public value scorecard ang balanced scorecard nina Robert Kaplan at David Norton noong 1992 — na ginawa para sa mga kompanyang nag-o-optimize ng tubo sa mga perspektibang pinansyal, customer, panloob na proseso, at pagkatuto-at-paglago — sa mga organisasyong ang bottom line ay misyon, hindi margin. Pinipilit nito ang isang pampublikong katawan na mag-ulat ng performance sa ilang di-mapagbabawasang dimensyon nang sabay-sabay, sa halip na isiksik ang lahat sa iisang numerong nagtatago ng mga trade-off.

## Bakit ito mahalaga

Ang orihinal na argumento nina Kaplan at Norton sa Harvard Business Review ay ang iisang pinansyal na metric ay lagging indicator na walang sinasabi kung *bakit* magbabago ang performance sa susunod na quarter. Sa pribadong sektor, ang lunas ay apat na magkakaugnay na perspektibo. Sa pamahalaan, ang "strategic triangle" ni Mark Moore (mula sa *Creating Public Value*, 1995) ang nagbibigay ng katumbas na istruktura: dapat sabay-sabay na maghatid ang isang serbisyo ng **public value** (ang outcome ng misyon), mapanatili ang **lehitimasyon at suporta** (suportang pampulitika at pampubliko), at maging **posible sa operasyon** (kayang ihatid gamit ang mga resource at kakayahang aktuwal na mayroon). Ang *Balanced Scorecard: Step-by-Step for Government and Nonprofit Agencies* (2003) ni Paul Niven ang manwal ng mga praktisyoner sa pagsasalin ng apat na kahon nina Kaplan at Norton tungo sa tatsulok na ito — karaniwang pag-relabel sa "pinansyal" bilang "pangangasiwa sa mga resource," paglalagay ng "misyon" sa itaas sa halip na "halaga ng shareholder" sa ibaba, at pagtrato sa mga perspektibo ng customer at stakeholder bilang magkapantay at hindi sunud-sunuran sa tubo. Mahalaga ito sa isang delivery team dahil ang pampublikong digital service na hinuhusgahan lamang batay sa pinansyal o efficiency na metric (cost per transaction, halimbawa) ay sistematikong magkukulang ng puhunan sa mga dimensyon ng lehitimasyon at outcome na hindi nakikita ng pinansyal na metric.

## Ang matematika

Balangkas ang public value scorecard, hindi pormula, ngunit nakapirmi ang istruktura nito at sulit na kopyahin nang eksakto:

```
Perspektibo          Tanong ng pampublikong sektor              Halimbawang indicator
--------------------------------------------------------------------------------
Misyon / outcome      Nakakamit ba namin ang public value na    Sukat ng outcome ng populasyon
                       dahilan ng aming pag-iral?                (tingnan ang outcomes-vs-outputs)
Pangangasiwa sa       Episyente ba naming ginagamit ang pera     Cost per outcome, paglihis
  mga resource         ng publiko at sa loob ng pinahintulutang  sa badyet
                       hangganan?
Customer / user        Nakaka-access at nakikinabang ba ang      Completion rate, kasiyahan
                        mga user at mamamayan sa serbisyo?
Lehitimasyon / suporta  Sinusuportahan pa ba kami ng mga         Mga sukat ng tiwala, natuklasan
                        pulitikal na prinsipal, oversight body,   sa audit, mga reklamong
                        at publiko?                               pinagtibay
Panloob na proseso /    Mayroon ba kaming kakayahan at proseso    Turnover ng kawani, cycle time,
  pagkatuto             para magpatuloy sa pagbuti?               edad ng backlog

Ang matatag na scorecard ay nag-uulat ng 3–5 indicator bawat perspektibo, na pinili
upang walang iisang perspektibong madadaya nang hindi lumilitaw ang pinsala sa iba.
```

## Halimbawang kalkulasyon

**Departamento ng adult social care ng lokal na awtoridad**: ang scorecard para sa isang reablement service (panandaliang suporta upang makabalik sa pagsasarili ang mga tao matapos manatili sa ospital) ay nag-uulat ng:

```
Misyon:        68% ng mga user ng serbisyo ay hindi na nangangailangan ng tuloy-tuloy na pangangalaga
               pagkaraan ng 6 na linggo (target 65%)
Pangangasiwa:  cost per completed reablement episode = £1,850 (palagay sa badyet £2,000)
Customer:      kasiyahan ng user 82%, karaniwang paghihintay bago magsimula ang serbisyo 4.1 araw
Lehitimasyon:  3 reklamong pinagtibay kada 1,000 episode; "mahusay" ang rating ng adult safeguarding
               board sa serbisyo
Proseso:       vacancy rate ng kawani 14%, karaniwang caseload 23 (ligtas na kisame ng caseload: 25)
```

Kung babasahin nang magkakahiwalay, mukhang tuwirang kuwento ng tagumpay ang mga numero ng misyon at pangangasiwa: mas mababa sa badyet at mas mataas sa target na outcome. Kapag binasa kasama ng hanay ng proseso, ipinapakita ng vacancy rate na 14% laban sa kisame ng caseload na 25 na ang magandang outcome ay binibili sa pagtakbo malapit sa mga antas ng staffing na hindi ligtas — babalang hindi kailanman ilalantad ng numero ng misyon lamang, at eksaktong paraan ng pagkabigo na inaanyayahan ng KPI na iisang perspektibo lamang (tingnan ang [mga KPI ng pampublikong sektor](../mga-kpi-ng-pampublikong-sektor-pagpili-ng-sukatan-na-hindi-madaling-dayain/)).

## Kaugnayan sa software engineering

Para sa team na bumubuo ng internal o public-facing na dashboard, direktang argumento ang scorecard laban sa iisang widget na "health score": bumuo ng isang panel bawat perspektibo, at labanan ang presyon ng produkto na pagsamahin ang mga ito sa traffic light, dahil ang hakbang ng pagsasama ang eksaktong pinagwawasakan ng impormasyon ng mga trade-off. Malinis din itong tumutugma sa mga istruktura ng OKR ng product team: ang OKR ng misyon na walang katambal na OKR ng pangangasiwa o proseso ay nauulit ang pagkabigong single-metric na tinutulan nina Kaplan at Norton noong 1992. Tingnan ang [public value](../public-value-ang-halagang-nililikha-ng-pamahalaan-para-sa-kolektibong-lipunan/) para sa pinagbabatayang teorya ni Moore kung ano talaga ang dapat laman ng kahong "misyon," at ang [trust-and-legitimacy-metrics](../mga-sukatan-ng-tiwala-at-lehitimasyon-sa-mga-institusyong-pampubliko/) para sa kung paano punuin ang perspektibo ng lehitimasyon ng totoo at may-sanggunian na mga indicator sa halip na proxy na walang makapagtatanggol.

## Mga karaniwang pagkakamali

- **Pagsasama ng scorecard sa iisang marka**: ang pag-average ng apat na perspektibo tungo sa iisang numero ay nagbabalik ng eksaktong problemang pinipigilan ng scorecard — ang masamang marka sa lehitimasyon na natatakpan ng magandang marka sa pangangasiwa.
- **Pagkopya nang walang pagbabago ng perspektibong "pinansyal" ng pribadong sektor**: ang perspektibo ng pangangasiwa ng isang pampublikong katawan ay tungkol sa pananatili sa loob ng pinahintulutan, madalas na nakalaang badyet, hindi sa pag-maximize ng kita — hindi kosmetiko ang pag-relabel ni Niven.
- **Pagpili ng mga indicator na kayang igalaw nang mag-isa ng team na may-ari ng scorecard**: ang indicator ng lehitimasyon na hinango sa parehong team na hinuhusgahan nito (halimbawa, self-reported na paghawak ng reklamo) ay hindi malayang ebidensya.
- **Pagbuo ng scorecard nang minsan at hindi na muling sinusuri ang mga bigat o indicator**: balak nina Kaplan at Norton ang taunang pagsusuri ng estratehiya; ang scorecard na nakapirmi sa loob ng maraming taon ay lumalayo sa misyong sinusubaybayan nito.

## Mga sanggunian

- Robert S. Kaplan and David P. Norton, "The Balanced Scorecard: Measures That Drive Performance,"
  *Harvard Business Review*, January–February 1992.
- Paul R. Niven, *Balanced Scorecard: Step-by-Step for Government and Nonprofit Agencies*, Wiley,
  2003.
- Mark H. Moore, *Creating Public Value: Strategic Management in Government*, Harvard University
  Press, 1995.
