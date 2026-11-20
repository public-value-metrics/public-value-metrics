# Multidimensional Poverty Index: pagsukat ng kahirapan bilang magkakapatong na kakulangan

Sinusukat ng MPI ang kahirapan bilang magkakapatong na kakulangan (deprivation) na sabay na nararanasan ng isang tao — sa kalusugan, edukasyon, at pamantayan ng pamumuhay — sa halip na sa kita lamang na mababa sa isang guhit. Binuo ito ng Oxford Poverty and Human Development Initiative (OPHI) nina Sabina Alkire at James Foster, at magkasamang inilalathala kasama ng UNDP sa bawat Human Development Report mula noong 2010, kasabay ng [Human Development Index](../human-development-index-pagraranggo-ng-mga-bansa-sa-kalusugan-edukasyon-at-kita/).

## Bakit ito mahalaga

Hindi nakikita ng mga guhit ng kahirapan batay sa kita ang mga taong may sapat na perang kita ngunit walang malinis na tubig, pag-aaral, o nakaranas ng pagkamatay ng anak — at hindi rin nito nakikita na nagkukumpol ang mga kakulangan: ang sambahayang walang kuryente ay higit na malamang na wala ring sanitasyon at may batang malnourished. Binibilang ng paraang Alkire-Foster, na pinagbabatayan ng MPI, ang mga kakulangan ng bawat tao sa sampung indicator na nakagrupo sa tatlong magkapantay na timbang na dimensyon — kalusugan, edukasyon, pamantayan ng pamumuhay — at itinuturing lamang na "mahirap ayon sa MPI" ang isang tao kung lumampas sa takdang threshold ang timbang niyang marka ng kakulangan, na nakukuha ang pagkakapatong na hindi kayang makuha ng hanay ng magkakahiwalay na estadistika ng iisang indicator. Inilalathala ng OPHI ang buong metodolohiya at datos ng mga bansa sa <https://ophi.org.uk/multidimensional-poverty-index/>; ang pandaigdigang MPI na pinapanatili nito kasama ng UNDP ay sumasaklaw na ngayon sa mahigit 110 bansa. Para sa software na ginawa para sa mga programang panlaban sa kahirapan — cash transfer, triage sa social care, pagtatarget ng tulong — ang hanay ng indicator ng MPI ay madalas na pinakamalapit sa karaniwang schema ng kakulangan na napatunayan na sa dose-dosenang pambansang tanggapan ng estadistika.

## Ang matematika

```
10 indicator, 3 dimensyon, bawat dimensyon ay may timbang na 1/3:

Kalusugan (1/3):            nutrisyon (1/6), pagkamatay ng bata (1/6)
Edukasyon (1/3):            taon ng pag-aaral (1/6), pagpasok sa paaralan (1/6)
Pamantayan ng pamumuhay (1/3):  panggatong sa pagluluto, sanitasyon, inuming tubig,
                                kuryente, pabahay, mga ari-arian (1/18 bawat isa)

marka ng kakulangan (c) = kabuuan ng mga timbang ng mga indicator kung saan kulang ang tao

ang tao ay "mahirap ayon sa MPI" kung c ≥ 1/3 (ang poverty cut-off, k = 33%)

H (headcount ratio) = bilang ng mahirap ayon sa MPI / kabuuang populasyon
A (intensity)        = karaniwang marka ng kakulangan sa mga mahirap ayon sa MPI lamang

MPI = H × A
```

Dahil pinararami ng MPI ang *bahagdan* ng mahihirap sa *kung gaano kalala* ang kahirapan nila, maaaring magkaiba nang malaki ang MPI ng dalawang rehiyong magkapareho ang headcount ratio kung mas matindi ang mga kakulangan sa isa — ang parehong lohikang "walang pagpapalit sa pagitan ng mga dimensyon" na nasa likod ng geometric mean ng HDI.

## Halimbawang kalkulasyon

**Pambansang survey ng 1,000 tao**: 350 ang natukoy na multidimensionally poor (marka ng kakulangan ≥ 33%). Sa 350 mahirap na indibidwal lamang, ang karaniwang marka ng kakulangan ay 45%.

```
H = 350 / 1000                = 0.350
A = 0.45
MPI = H × A = 0.350 × 0.45    = 0.1575
```

**Paghahambing ng dalawang distrito na may magkapantay na headcount**: ang Distrito A ay may H = 0.30 at A = 0.40 (maraming mahirap, katamtaman ang kakulangan); ang Distrito B ay may H = 0.30 at A = 0.60 (kasing-dami ang mahirap, ngunit mas malubha ang kakulangan — sabay-sabay na walang kuryente *at* sanitasyon *at* pagpasok sa paaralan).

```
MPI_A = 0.30 × 0.40 = 0.120
MPI_B = 0.30 × 0.60 = 0.180
```

Parehong headcount ratio, 50% na mas mataas ang MPI sa Distrito B — ang sistema ng pagtatarget na nakabatay lamang sa headcount ng kahirapan ay magra-ranggo sa dalawang distrito nang magkapareho at hindi mapapansin na mas malalim na interbensyon ang kailangan ng Distrito B.

## Kaugnayan sa software engineering

- Ang mga case-management at eligibility system para sa mga programang panlipunan ay madalas nang nag-iimbak ng ilan sa sampung indicator (pabahay, pagpasok sa paaralan, mga marker ng kalusugan) sa magkakahiwalay na silo; ang paraan ng pagbibilang ni Alkire-Foster ay handang-gamitin na schema para pagsamahin ang mga ito sa iisang marka ng kakulangan, sa halip na bumuo ng sariling scoring model mula sa wala.
- Ang paghahati ng headcount/intensity (H × A) ay pangkalahatang kapaki-pakinabang na pattern para sa anumang dashboard na nag-uulat ng "ilan ang apektado" kasabay ng "gaano kalubha" — ang pagsasama ng dalawa sa iisang numero, gaya ng ginagawa ng hilaw na estadistika ng prevalence, ay nagtatago mismo sa kasong nangangailangan ng pinakamaraming resource.
- Natural na ipinapares ang mga indicator dashboard na istilong MPI sa pag-uulat ng [cost per beneficiary](../gastos-bawat-benepisyaryo/) para sa mga programang panlaban sa kahirapan: ang gastos bawat puntos ng pagbaba ng MPI ay katanggap-tanggap na yunit para ihambing ang napakaiibang interbensyon (cash transfer laban sa imprastraktura ng sanitasyon).

## Mga karaniwang pagkakamali

- **Pagtrato sa sampung indicator bilang pandaigdig** — ang mga indicator ng pandaigdigang MPI ng OPHI ay iniakma para sa paghahambing sa pagitan ng mga bansa; ang mga pambansang MPI (maraming bansa, kabilang ang ilan sa Timog Asya at Africa, ang naglalathala ng sarili nila) ay iniaangkop ang mga indicator at bigat sa lokal na konteksto, at hindi direktang maihahambing ang dalawa.
- **Pag-uulat ng H lamang** — hindi pinapansin ng headcount ratio ang intensity; laging iulat o kalkulahin ang A kasabay nito, o ang mismong MPI.
- **Pag-aakalang pareho ang populasyon ng mahirap ayon sa MPI at mahirap ayon sa kita** — karaniwang ipinapakita ng sariling country brief ng OPHI na bahagya lamang ang pagkakapatong ng dalawa; ang programang tumatarget lamang sa mahirap ayon sa kita ay sistematikong makakaligtaan ang makabuluhang bahagi ng multidimensionally poor.

## Mga sanggunian

- Oxford Poverty and Human Development Initiative. "Multidimensional Poverty Index."
  <https://ophi.org.uk/multidimensional-poverty-index/>
- Alkire S, Foster J. "Counting and Multidimensional Poverty Measurement." Journal of Public
  Economics, 2011.
- UNDP & OPHI. "Global Multidimensional Poverty Index" (annual report).
