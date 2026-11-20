# Revealed preference valuation: pagpapahalaga mula sa aktuwal na gawi sa pamilihan

Hinuhulaan ng mga paraan ng revealed preference ang halaga ng bagay na walang pamilihan mula sa nakikitang gawi sa kaugnay na pamilihan, sa halip na direktang tanungin ang mga tao. Ang hedonic pricing at ang travel-cost method ang dalawang pangunahing teknik: parehong nagsisimula sa totoong transaksyon at hinuhugot ang implicit na presyo ng bagay na hindi kailanman direktang ibinenta.

## Bakit ito mahalaga

Samantalang ang mga paraan ng [stated preference](../stated-preference-valuation-pagtatantiya-ng-halaga-sa-pamamagitan-ng-pagtatanong-sa-mga-tao/) ay nagtatanong ng hypothetical na tanong, ang mga paraan ng revealed preference ay nagmamasid sa aktuwal na binayaran ng mga tao, na itinuturing ng Green Book na sa pangkalahatan ay mas kapani-paniwalang ebidensya, kung pantay ang iba pa, dahil hindi ito apektado ng hypothetical bias — ang mga respondent sa hedonic na pag-aaral ng presyo ng bahay ay tunay na nagbayad ng premium o diskwentong sinusukat (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>, Annex 2). Hinahati ng hedonic pricing ang presyo sa pamilihan — karaniwan ay presyo ng bahay — sa mga implicit na presyo para sa bawat katangian ng bagay, na nagpapahintulot sa mga analyst na ihiwalay, halimbawa, ang premium na aktuwal na binabayaran ng mga sambahayan upang manirahan sa mas tahimik na lugar o may mas magandang kalidad ng hangin, habang kinokontrol sa estadistika ang bawat iba pang katangiang nakaaapekto rin sa presyo ng bahay (laki, lokasyon, school catchment). Ginagawa ng travel-cost method ang katulad nito para sa mga lugar-libangang walang bayad sa pagpasok: ang oras at perang ginugugol ng mga tao sa paglalakbay patungo sa isang lugar ay naglalantad ng lower bound ng halaga ng lugar sa kanila, dahil walang sinumang gagastos nang higit sa halaga ng pagbisita para sa kanya.

Parehong may istruktural na limitasyon ang dalawang paraan: kaya lamang nilang pahalagahan ang naka-embed sa umiiral na transaksyon sa pamilihan. Lumilitaw sa presyo ng bahay ang ingay malapit sa runway dahil ang mga taong may pakialam sa ingay ay lumilipat sa mas tahimik na pabahay; ang existence value ng isang uri ng hayop na walang bumibisita o nakatira malapit ay hindi lumilitaw sa anumang transaksyon, na siyang eksaktong puwang na pinupunan ng mga paraan ng [stated preference](../stated-preference-valuation-pagtatantiya-ng-halaga-sa-pamamagitan-ng-pagtatanong-sa-mga-tao/).

## Ang matematika

```
Hedonic pricing:
  Presyo ng bahay = f(mga istruktural na katangian, mga katangian ng lokasyon,
                   ang katangiang pangkapaligiran na pinag-aaralan, ...)
  Tantyahin sa pamamagitan ng regression; ang koepisyent ng katangiang pangkapaligiran
  (habang pantay ang lahat ng iba pa) ang implicit na presyo nito.

  Implicit na presyo ng katangian X = ∂(Presyo ng bahay) / ∂X

Travel-cost method:
  Visit rate (mga pagbisita bawat kapita mula sa zone i) = f(travel cost mula sa zone i,
                   mga kapalit na lugar, mga sosyoekonomikong kontrol)
  Tantyahin ang demand curve ng mga pagbisita bilang function ng travel cost.
  Consumer surplus = lawak sa ilalim ng tinantyang demand curve
                    = halaga ng lugar para sa mga bumibisita
```

Parehong nangangailangan ng estadistikang matatag na hanay ng mga kontrol ang dalawang paraan — ang pag-iwan sa isang confounding na katangian (hedonic) o malapit na kapalit na lugar (travel-cost) ay nagbibigay-bias sa implicit na presyo sa direksyong hindi laging halata nang maaga, kaya hinihingi ng Annex 2 ng Green Book na iulat ang regression specification at mga kontrol, hindi lamang ang headline na koepisyent.

## Halimbawang kalkulasyon

**Pambansang pamahalaan**: ang sariling metodolohiya ng shadow price ng carbon ng Green Book ay bahagyang kumukuha mula sa hedonic na ebidensya, ngunit mas simpleng ilustratibong kaso ang ingay ng eroplano. Ang hedonic na pag-aaral na nagre-regress ng presyo ng bentahan ng bahay sa lugar ng flight path laban sa distance-weighted na exposure sa ingay, na kinokontrol ang laki, edad, at school catchment, ay nakatuklas na ang bawat 1 decibel na pagtaas ng karaniwang exposure sa ingay ay may kaugnayan sa 0.5% na pagbaba ng presyo ng bahay. Para sa karaniwang £280,000 na bahay sa apektadong lugar:

```
Implicit na presyo bawat decibel = £280,000 × 0.5% = £1,400 bawat sambahayan
Mga sambahayang apektado ng 3dB na pagtaas mula sa bagong runway = 18,000
Kabuuang ipinahihiwatig na gastos ng pagtaas ng ingay = £1,400 × 3 × 18,000 = £75.6m
```

Ito ay minsanang capitalized na gastos (naka-embed sa presyo ng bahay), na dapat ingatan ng appraisal na hindi i-double-count laban sa hiwalay na tinantyang taunang agos ng gastos ng annoyance sa ingay.

**Charity**: gumagamit ang isang environmental charity ng travel-cost method upang pahalagahan ang isang nature reserve na libre ang pagpasok. Ang datos ng survey sa mga postcode ng bisita ay nagbibigay ng karaniwang round-trip travel cost (oras na pinahahalagahan sa inirerekomendang halaga ng oras na hindi trabaho ng Green Book, dagdag ang gasolina) na £14 bawat pagbisita, na may 40,000 pagbisita bawat taon. Ang tinantyang demand curve — bumababa ang visit rate habang tumataas ang travel cost mula sa isang zone — ay nagpapahiwatig ng consumer surplus bawat pagbisita, bukod sa aktuwal na ginastos na £14, na humigit-kumulang £9.

```
Kabuuang taunang halaga = 40,000 pagbisita × (£14 ginastos + £9 consumer surplus)
                    = 40,000 × £23 ≈ £920,000/taon
```

Mas malaki ito nang malayo kaysa sa sero na kita sa bayad sa pagpasok ng reserve at nagbibigay sa mga trustee ng charity ng katanggap-tanggap na numero para sa halaga ng site bilang libangan kapag nagpapaliwanag sa mga tagapondo.

## Kaugnayan sa software engineering

Mas madalas lumilitaw ang pag-iisip na revealed preference sa product analytics ng pampublikong sektor kaysa sa akala ng mga praktisyoner: ang datos ng paggamit mula sa libreng digital service ng pamahalaan ay mismong ebidensyang revealed-preference ng halaga (ang dalas, haba ng session, at — pinakamabisang palatandaan — ang mga pattern ng paulit-ulit laban sa minsanang paggamit ay maaaring suriin sa paraang tinatrato ng travel-cost model ang dalas ng pagbisita laban sa distansya). Kung may tunay na mga kapalit ang serbisyo (paper channel, linya ng telepono), ang "gastos" na pinapasan ng mga mamamayan sa paggamit sa digital channel sa halip (oras, data, device) ay maaaring tantyahin at ihambing sa paggamit, na direktang tumutugma sa lohika ng travel-cost. Tingnan ang [digital service standard](../digital-service-standard-ang-pamantayan-ng-serbisyong-digital-ng-pamahalaan/) at [halaga ng open data](../halaga-ng-open-data-pagtataya-sa-halaga-ng-pampublikong-datos-na-walang-presyo/), na humaharap sa eksaktong problemang ito sa pagpapahalaga para sa bagay na walang direktang presyo sa pamilihan.

## Mga karaniwang pagkakamali

- **Omitted variable bias sa mga hedonic model.** Ang pag-iwan sa isang magkaugnay na katangian (kalidad ng paaralan na nauugnay sa parehong presyo ng bahay at sa pangkapaligirang variable na pinag-aaralan) ay nagbi-bias sa tantya ng implicit na presyo; kailangang iulat at suriin ang specification, hindi lamang ang resulta.
- **Pagbalewala sa mga kapalit na lugar sa mga pag-aaral ng travel-cost.** Minamaliit ang naihayag na halaga ng isang bisita sa lugar kung may mas malapit na kapalit at hindi ito kinokontrol — maaaring bumibisita siya pangunahin dahil libre ito, hindi dahil natatangi ang halaga nito.
- **Paglalapat ng revealed preference sa bagay na walang anumang bakas sa pamilihan.** Ang existence value, option value, at bequest value ay hindi lumilitaw sa anumang transaksyon at hindi mababawi ng hedonic o travel-cost na paraan — ang puwang na iyon ay pag-aari ng [stated preference valuation](../stated-preference-valuation-pagtatantiya-ng-halaga-sa-pamamagitan-ng-pagtatanong-sa-mga-tao/).
- **Pagkalito sa capitalized (minsanan) na halaga at taunang daloy.** Ang mga epekto sa presyo ng bahay ng hedonic ay karaniwang minsanang capitalized na halaga; ang pagtrato sa mga ito bilang taunang daloy ng benepisyo ay nagpapalobo sa appraisal.

## Mga sanggunian

- HM Treasury. "The Green Book," Annex 2: valuing non-market impacts.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Transport / Civil Aviation Authority. Aircraft noise valuation studies used in
  airport appraisal. <https://www.gov.uk/guidance/aviation-noise>
- Rosen S. "Hedonic Prices and Implicit Markets: Product Differentiation in Pure Competition."
  Journal of Political Economy, 1974.
- Clawson M, Knetsch JL. "Economics of Outdoor Recreation." Johns Hopkins University Press, 1966
  (origin of the travel-cost method).
