# Unit cost databases: mga handang financial proxy para sa mga kinalabasang panlipunan

Ang unit cost database ay aklatan ng mga naunang sinaliksik at batay-sa-ebidensyang financial proxy para sa mga kinalabasang panlipunan — ang halaga ng paglipat mula sa kawalan ng trabaho tungo sa trabaho, ng nabawasang kalungkutan, ng matatag na pangungupahan — na nagpapahintulot sa practitioner na pepera ang kinalabasan nang hindi nag-uutos ng sariling pananaliksik sa pagtataya sa bawat pagkakataon. Umiiral ang mga ito upang magamit ng maliit na charity na sumusulat ng funding bid ang parehong higpit ng mayamang konsultansya, sa muling paggamit ng proxy na nahango at nailathala na ng iba.

## Bakit ito mahalaga

Ang UK Social Value Bank ng HACT, na binuo kasama ng ekonomistang si Daniel Fujiwara gamit ang mga pamamaraan ng wellbeing valuation, at ang Global Value Exchange, bukas at crowdsourced na database ng mga financial proxy, ang dalawang pinakamalawak na ginagamit sa ikatlo at pampublikong sektor ng UK. Parehong umiiral ang dalawa dahil ang pinagbabatayang gawain sa pagtataya — [wellbeing valuation](../wellbeing-valuation-pagpepresyo-ng-epekto-ng-patakaran-sa-kasiyahan-sa-buhay/) at [stated preference valuation](../stated-preference-valuation-pagtatantiya-ng-halaga-sa-pamamagitan-ng-pagtatanong-sa-mga-tao/) — ay mahal, mabigat sa metodolohiya, at mabagal patakbuhin mula sa simula para sa bawat proyekto. Ginagawang paghahanap (lookup) ng nakabahaging nailathalang aklatan ng proxy ang dapat sana'y pananaliksik na tatagal ng ilang buwan, kaya mahalaga ang mga ito sa parehong kalkulasyon ng [social return on investment](../social-return-on-investment-pagsukat-ng-halagang-panlipunan-kaugnay-ng-puhunan/) at pagsusuri ng bid sa ilalim ng [Social Value Act](../social-value-act-tungkuling-isaalang-alang-ang-halagang-panlipunan-sa-procurement-ng-pamahalaan/): kung wala sila, tanging mga organisasyong sapat ang laki upang mag-utos ng sariling pag-aaral ang may kakayahang gumawa ng mahigpit na pagpepera.

## Ang matematika

Walang kinukwenta ang unit cost database; nagbibigay lang ito ng isang input sa kalkulasyong ginagawa sa iba pang lugar:

```
Halaga ng financial proxy = presyo sa pamilihan, O shadow price, O wellbeing valuation,
                         O halaga mula sa stated preference
                         para sa tinukoy na yunit ng pagbabago ng kinalabasan
                         (hal. "kada taong lumipat mula sa kawalan ng trabaho tungo sa trabaho, kada taon")

Inilapat na halaga = bilang ng kinalabasang nakamit × halaga ng unit proxy
```

Tingnan ang [shadow pricing](../shadow-pricing-pagtatakda-ng-halaga-sa-mga-bagay-na-walang-presyo-sa-pamilihan/) para sa paraan ng pagbuo ng proxy kapag walang presyo sa pamilihan, at ang [social return on investment](../social-return-on-investment-pagsukat-ng-halagang-panlipunan-kaugnay-ng-puhunan/) para sa kung paano pumapasok ang inilapat na halaga sa ratio matapos ang mga pagsasaayos sa deadweight at attribution.

## Halimbawang kalkulasyon

**Charity (SROI ng befriending service)**: ang entry ng unit cost database para sa "pagbaba ng kalungkutan" ay nagbibigay ng ilustratibong proxy na £1,100 kada tao kada taon. Inilapat sa 80 benepisyaryo: 80 × £1,100 = £88,000 gross value. Kung may proxy rin ang parehong database para sa "pinahusay na mental na wellbeing" na kumukuha sa nagsasapawang item ng survey sa wellbeing, ang pagpapatong ng dalawang proxy para sa parehong 80 tao ay magdodoble ng bilang sa bahagi ng iisang pinagbabatayang pagbabago — nagbibigay ang database ng bilang, ngunit responsibilidad ng analyst ang pag-iwas sa pagsasapaw na ito.

**Lokal na awtoridad (SROI ng job club)**: ang entry ng unit cost database para sa "paglipat mula sa kawalan ng trabaho tungo sa tuloy-tuloy na trabaho" ay inilalapat sa 45 kalahok sa ilustratibong proxy na £8,500 kada tao kada taon: 45 × £8,500 = £382,500 gross value, bago ang mga pagsasaayos sa deadweight at attribution na ipinakita sa [social return on investment](../social-return-on-investment-pagsukat-ng-halagang-panlipunan-kaugnay-ng-puhunan/).

## Kaugnayan sa software engineering

Nakikinabang ang mga koponang bumubuo ng reporting tool para sa mga charity o commissioner sa panloob na "outcome catalogue" — talahanayang nagmamapa ng bawat kinalabasang makatwirang maiaangkin ng produkto o serbisyo sa pinangalanang proxy, database na pinagmulan nito, petsa ng paglalathala, at version identifier — upang hindi kanya-kanyang pumili ng bahagyang magkaibang halaga ang iba't ibang koponan sa organisasyon para sa iisang kinalabasan. Ang pagbalot sa bukas na datos ng Global Value Exchange sa likod ng lookup service, na laging ipinapakita ang pinagmulan at petsa katabi ng bilang, ay nagpapanatiling auditable ang proxy sa halip na mahiwagang bilang na nakabaon sa spreadsheet. Tingnan ang [social return on investment](../social-return-on-investment-pagsukat-ng-halagang-panlipunan-kaugnay-ng-puhunan/) at [social value act](../social-value-act-tungkuling-isaalang-alang-ang-halagang-panlipunan-sa-procurement-ng-pamahalaan/) para sa dalawang pangunahing lugar kung saan ginagamit ang mga proxy na ito.

## Mga karaniwang pagkakamali

- **Pagturing sa mga proxy bilang eksakto.** Karamihan ng nailathalang proxy ay mga modelong average mula sa mga pag-aaral ng wellbeing valuation na may malalapad na confidence interval; ang pagbanggit ng isa hanggang sa pound ay nagpapalaki sa katumpakang kayang suportahan ng pinagbabatayang pananaliksik.
- **Double counting ng nagsasapawang proxy.** Ang pagsasama ng mga proxy (hal. "nabawasang kalungkutan" at "pinahusay na mental na wellbeing") na hinango sa nagsasapawang konstruktong survey ay dalawang beses na nagbibigay-halaga sa iisang pinagbabatayang pagbabago.
- **Paggamit ng proxy na wala sa konteksto nang walang pagsasaayos.** Ang proxy na na-calibrate sa isang pambansang populasyon at taon, na inilapat sa iba nang walang pagsasaayos sa inflation o konteksto, ay tahimik na nagkakamali ng halaga.
- **Hindi pagsusuri ng provenance.** Bukas at crowdsourced ang Global Value Exchange, kaya nag-iiba ang kalidad ng entry ayon sa nag-ambag; suriin ang pinagbabatayang pinagmulan bago banggitin ang bilang sa funding bid o procurement submission.

## Mga sanggunian

- HACT, "UK Social Value Bank." <https://hact.org.uk/tools-and-services/uk-social-value-bank/>
- Global Value Exchange. <https://www.globalvaluexchange.org/>
- Fujiwara D., "The Social Impact of Housing Providers" (HACT, 2013) — methodological basis of the UK Social Value Bank.
- Social Value UK, "A Guide to Social Return on Investment," section on financial proxies.
