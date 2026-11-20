# Overhead Ratio ng Charity: Bakit Mapanlinlang na Sukatan ng Kahusayan

Ang overhead ratio ng charity ay ang gastusin sa administrasyon at fundraising na ipinapahayag bilang porsiyento ng kabuuang gastos. Ito ang pinakamadalas hilingin na bilang sa charitable giving — ginagamit ng mga donor, watchdog, at ng ilang tagapondo bilang proxy ng kahusayan — at isa rin ito sa mga sukatan ng kahusayan na pinakamasusing napabulaanan sa sektor, na ang mga organisasyong nagpasikat dito ay hayagang itinakwil ito noong 2013.

## Bakit ito mahalaga

Noong 17 Hunyo 2013, naglabas ang GuideStar, ang BBB Wise Giving Alliance, at ang Charity Navigator — ang tatlong pinakamalaking katawan ng rating at impormasyon sa mga nonprofit sa US, na ang sarili nilang mga rating ay nakatulong magpatibay sa overhead ratio bilang shorthand ng kalidad ng charity — ng magkasanib na bukas na liham sa mga donor sa Amerika, "The Overhead Myth," na tahasang nagsasabing mahinang sukatan ng pagganap ng isang charity ang overhead ratio at hinihimok ang mga donor na tumingin sa halip sa transparency, governance, at mga resulta. Direktang pagbaligtad ito ng mismong mga institusyong nagtayo ng kultura ng pagbibigay sa paligid ng ratio sa loob ng isang dekada.

Istruktural ang pinagbabatayang problema, hindi lamang usapin ng hitsura: makakamit ang mababang overhead ratio sa pamamagitan ng kakulangan ng pamumuhunan sa eksaktong mga bagay na nagpapaepektibo sa isang charity — disenteng case management system, sinanay na kawani, monitoring at evaluation — dahil madalas na ibinu-book ang mga ito bilang "admin" sa halip na gastos sa "programa". Ang charity na ginugutom ang back office upang mag-ulat ng 5% na overhead ay maaaring mas hindi kayang maghatid ng mga outcome kaysa sa gumagastos ng 20% sa maayos na pinondohang operasyon. Sa England at Wales, ang gabay ng Charity Commission sa mga trustee ay lumalayo sa iisang porsiyento ng overhead bilang pagsubok ng kahusayan, at sa halip ay hinihiling sa mga trustee na iulat kung ano ang nakamit ng charity laban sa mga layunin nito — tingnan ang mga kinakailangan sa pag-uulat ng SORP na tinalakay sa [gastos bawat benepisyaryo](../gastos-bawat-benepisyaryo/).

## Ang matematika

```
Overhead ratio = (Gastos sa administrasyon + Gastos sa fundraising) / Kabuuang gastusin

Mga karaniwang baryante:
  Programme ratio        = Gastos sa programa (direktang charitable) / Kabuuang gastusin
                          = 1 − overhead ratio
  Kahusayan ng fundraising = Gastos sa fundraising / Nalikom na pondo
```

Walang impormasyon tungkol sa mga nakamit na outcome ang alinman sa mga pormulang ito. Maaaring paliitin ng isang charity ang bawat isa sa mga ito at mabigo pa rin sa bawat benepisyaryo; tingnan ang [gastos bawat outcome](../gastos-bawat-outcome-pagsukat-ng-tunay-na-pagbabago/) para sa sukatang tunay na tumitingin kung gumana ba ang pera.

## Halimbawang kalkulasyon

Dalawang charity, parehong kabuuang gastos:

- **Charity A**: £1,000,000 na kabuuang gastos, £80,000 admin + fundraising → overhead ratio na 8%. Wala itong tungkulin sa monitoring at evaluation, isang sobrang pagod na finance officer, at walang case management system; mataas ang turnover ng kawani at hindi kinokolekta ang datos ng outcome.
- **Charity B**: £1,000,000 na kabuuang gastos, £220,000 admin + fundraising → overhead ratio na 22%. Nagpopondo ito ng maliit na evaluation team, case management system na kumukuha ng follow-up sa outcome, at wastong pagsasanay sa safeguarding.

Ang donor na nagsasala batay lamang sa overhead ratio ay pipili sa A at tatanggi sa B — kabaligtaran ng malamang na ipakita ng ebidensiya ng [gastos bawat outcome](../gastos-bawat-outcome-pagsukat-ng-tunay-na-pagbabago/), dahil ang B lamang sa dalawa ang nasa posisyong magpakita, o magpahusay, ng aktwal nitong mga resulta.

## Kaugnayan sa software engineering

Ang software sa pananalapi at pag-uulat ng grant para sa sektor ay madalas na hard-code ang hati ng overhead/programa bilang kategoryang field sa bawat linya ng gastos, dahil iyon pa rin ang hinihingi ng mga regulator at ilang tagapondo sa mga statutory na ulat. Dapat ituring ng mga engineer na bumubuo ng mga sistemang ito ang kinakailangang iyon bilang obligasyon sa pagsunod, hindi senyales ng disenyo na ang overhead ratio ang sukatang dapat itampok sa dashboard; ipares ito, saanman ito ipinapakita, sa sukatang nakabatay sa outcome upang hindi mabasa ng tumitingin ang overhead ratio nang mag-isa. Tingnan ang [donor return on investment](../donor-return-on-investment-ang-tunay-na-naidaragdag-ng-pondo-ng-isang-donor/) para sa sukatang dapat itabi rito, at [value for money](../value-for-money-ang-pormal-na-pagsusuri-kung-sulit-ang-paggastos-ng-pamahalaan/) para sa katumbas na argumento sa pampublikong sektor laban sa mga proxy ng kahusayan na iisang ratio.

## Mga karaniwang pagkakamali

- **Paggamit ng overhead ratio bilang cut-off sa pagsala.** Ang pagtanggi sa anumang charity na lampas sa arbitraryong hangganan (hal. "hindi hihigit sa 15% na overhead") ay sistematikong nagpaparusa sa mga maayos na pinondohan at mahusay na sinuri na organisasyon at nagbibigay-gantimpala sa kakulangan ng pamumuhunan.
- **Maling pag-uuri ng gastos sa direktang paghahatid bilang overhead**, o kabaligtaran — nagkakaiba nang sapat ang mga kumbensyon sa accounting kung ano ang "programa" kumpara sa "admin" sa pagitan ng mga charity kaya madalas hindi pa nga maihahambing ang mga ratio sa mukha lamang.
- **Pag-aakalang ang mababang overhead ay nangangahulugan ng mataas na epekto.** Sa pinakamainam, walang ugnayan ang dalawa; tingnan ang pangunahing pahayag ng liham na Overhead Myth noong 2013.
- **Pagbalewala na may ilang lehitimong estratehiyang nangangailangan ng mas mataas na overhead sa maikling panahon.** Sadyang itinataas ng yugto ng capacity-building o organisational development ang gastos sa admin upang mapabuti ang paghahatid sa hinaharap.

## Mga sanggunian

- GuideStar, BBB Wise Giving Alliance, and Charity Navigator, "The Overhead Myth" open letter, 17 June 2013. <https://learn.guidestar.org/news/news-releases/2013/2013-06-17-overhead-myth>
- Charity Navigator, "Overhead Myth" campaign resources. <https://www.charitynavigator.org/>
- Charity Commission for England and Wales, guidance on charity reporting (SORP). <https://www.gov.uk/government/organizations/charity-commission>
