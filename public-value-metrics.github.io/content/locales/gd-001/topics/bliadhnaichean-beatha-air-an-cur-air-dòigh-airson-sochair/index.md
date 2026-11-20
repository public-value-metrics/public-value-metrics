# Bliadhnaichean beatha air an cur air dòigh airson sochair (WELLBY)

Is e WELLBY aon phuing a bharrachd de thoileachas beatha, air an sgèile sochair àbhaisteach 0–10, airson
aon neach airson aon bhliadhna. Is e an co-aoisear structarail dhen QALY a thathar a’ cleachdadh ann an eaconamas slàinte — aonad singilte a leigeas leat
eadar-theachdan a choimeas aig nach eil dad eile an cumantas ann am builean — ach air a thogail air sochair fhèin-aithriste seach staitean slàinte clinigeach, agus air a mhìneachadh ann an
“Wellbeing guidance for appraisal: supplementary Green Book guidance” aig HM Treasury (2021).

## Carson a tha e cudromach

Tha feum aig measadh cosgais is buannachd air aonad cumanta gus tabhartas club òigridh a choimeas ri sgeama sàbhailteachd rathaid
agus ri seirbheis slàinte inntinn, gun aon dhiubh a’ co-roinn tomhas buil. Dhèilig eaconamas slàinte ri seo airson eadar-theachdan clinigeach leis an QALY: bliadhna beatha air a cur air dòigh airson càileachd, air a cuideachadh
bho 0 (marbh) gu 1 (slàinte iomlan). Tha stiùireadh sochair HM Treasury a’ leudachadh na h-aon loidsig gu
caiteachas poblach nach eil slàinte, a’ cleachdadh ceist toileachas-beatha co-chòrdail ONS (“Overall, how
satisfied are you with your life nowadays?”, air a fhreagairt 0–10) mar sgàileadh builean an àite clàr-innse stàite slàinte. Tha WELLBY de 1 a’ ciallachadh toileachas beatha aon neach ag èirigh aon phuing slàn airson
aon bhliadhna (no, co-ionann, toileachas deich daoine ag èirigh 0.1 puing gach fear airson bliadhna — bidh WELLBYs
a’ cur ri chèile thar sluaigh mar a bhios QALYs). Bidh stiùireadh HM Treasury a’ suidheachadh luach airgid mar eisimpleir
airson gach WELLBY (timcheall air £13,000, prìsean 2019/20) a thàinig bho bhith a’ rèiteachadh dàta sochair fhèin-aithriste
le dòighean eile air luach bliadhna beatha, a’ toirt dòigh do luchd-measaidh builean a airgeadachadh —
aonaranachd nas lugha, co-cheangal coimhearsnachd, ruigsinneachd air àite uaine — nach b’ urrainn do dhòighean [luachadh sochair](../luachadh-sochair/)
ach tuairisgeul, gun an coimeas air bunait cho-ionann ri caiteachas slàinte no sàbhailteachd.

## A’ mhatamataig

```
WELLBY = Δ toileachas beatha (sgèile 0–10) × àireamh bhliadhnaichean a mhaireas an t-atharrachadh
        (air a chur ri chèile thar a h-uile neach a tha fo bhuaidh)

Buannachd sochair air a h-airgeadachadh = WELLBYs a chaidh a chruthachadh × luach gach WELLBY (luach iomraidh HMT)

cf. QALY = Δ goireas stàite slàinte (sgèile 0–1) × bliadhnaichean air am beò anns an staid sin
```

Chan eil an sgèile toileachais 0–10 agus sgèile goireis QALY 0–1 iomlaideach gun cheum tionndaidh;
tha stiùireadh HM Treasury a’ beachdachadh air an dà fhear a rèiteachadh gus nach tèid, mar eisimpleir, eadar-theachd slàinte air a mheasadh ann an QALYs agus
eadar-theachd sòisealta air a mheasadh ann an WELLBYs a chunntadh dà uair gu sàmhach no a dhèanamh neo-choimeasach taobh a-staigh an aon
[mheasadh Green Book](../measadh-a-green-book/).

## Eisimpleir obrach

**Seirbheis aonaranachd ùghdarras ionadail**: bidh sgeama càirdeis a’ frithealadh 400 neach-còmhnaidh aosta aonaranach.
Tha sgrùdaidhean leantainneach a’ sealltainn gu bheil cuibheasachd toileachas beatha ag èirigh bho 5.2 gu 6.0 (buannachd de 0.8 puing), agus
tha dùil gum mair a’ bhuaidh 2 bhliadhna mus tèid i à sealladh.

```
WELLBYs = 400 neach × 0.8 puing × 2 bhliadhna = 640 WELLBY

Luach air a h-airgeadachadh = 640 × £13,000 = £8,320,000
```

An aghaidh cosgais phrògraim bhliadhnail de £300,000 (£600,000 thar 2 bhliadhna), is e co-mheas buannachd-cosgais
timcheall air 8,320,000 / 600,000 ≈ **13.9:1** — figear as urrainn a-nis suidhe san aon chlàr measaidh ri
cosgais gach QALY a chaidh a sheachnadh aig sgeama slàinte no sàbhaladh ùine-turais aig sgeama còmhdhail.

**Carthannas, sgèile nas lugha**: bidh prògram ealain coimhearsnachd a’ ruigsinn 50 com-pàirtiche le buannachd toileachais
air a thomhas de 0.3 puing, a’ mairsinn 1 bhliadhna.

```
WELLBYs = 50 × 0.3 × 1 = 15 WELLBY
Luach air a h-airgeadachadh = 15 × £13,000 = £195,000
```

## Ceangal ri innleadaireachd bathar-bog

- Faodaidh seirbheis aghaidh-saoranach sam bith a bhios mar-thà a’ cruinneachadh nì sgrùdaidh toileachas-beatha no sochair
  (bidh mòran de dh’ùrlaran ùghdarras ionadail is slàinte-is-cùraim a’ dèanamh sin, a’ leantainn ceithir ceistean sochair àbhaisteach ONS)
  WELLBYs obrachadh a-mach gu dìreach bho phìoban dàta a th’ ann mar-thà seach measadh eaconamach sònraichte a choimiseanadh
  airson gach atharrachadh seirbheis.
- Bidh WELLBYs a’ toirt do sgiobaidhean innleadaireachd a bhios a’ togail airson aithris [Achd Luach Sòisealta](../achd-luach-sòisealta/) no
  [tilleadh sòisealta air tasgadh](../tilleadh-sòisealta-air-tasgadh/) ainmiche air a àbhaisteachadh gu nàiseanta,
  a fhuair taic bho HM Treasury, a’ seachnadh iomadachadh “sgòran buaidh” sònraichte
  nach gabh coimeas thar chùmhnantan no sholaraichean.
- Leis gu bheil WELLBYs ao-cheangailte thar dhaoine is ùine, bidh iad a’ co-chur gu glan sa chrutha de bhith a’ leantainn builean aig ìre sluaigh
  a thathar a’ cleachdadh ann an siostaman [cunntachalachd stèidhichte air builean](../cunntachalachd-stèidhichte-air-builean/)
  — faodaidh deas-bhòrd seirbheis WELLBYs cruinnichte a chaidh a chruthachadh gach cairteal aithris mar a bhios siostam
  slàinte ag aithris QALYs a chaidh a chosnadh.

## Cunnartan

- **A’ gabhail ris gu bheil buannachdan toileachais fèin-aithriste uile buileachail dhan eadar-theachd** —
  às aonais suidheachadh eile (buidheann coimeis no dealbhadh ro/às dèidh le smachdan), chan urrainn dhut
  buannachd WELLBY a sgaradh bho trendan coitcheann; faic [anailis an t-suidheachaidh eile](../anailis-an-t-suidheachaidh-eile/).
- **A’ measgachadh WELLBYs agus QALYs ann an aon iomlan gun rèiteachadh** — tha stiùireadh HM Treasury
  soilleir gu bheil sgèilean eadar-dhealaichte is teòiridhean luach eadar-dhealaichte aig an dithis;
  le bhith gan cur ri chèile gu sìmplidh bidh sochair a tha a’ tighinn thairis air a chèile air a chunntadh dà uair.
- **A’ cleachdadh an luach airgid iomraidh gun bheachd-smaoineachadh** — is e tuairmse cuibheasach nàiseanta a th’ anns an fhigear £-gach-WELLBY
  le fìor raointean mì-chinnt; tha stiùireadh HM Treasury a’ moladh mion-sgrùdadh mothachaidh,
  chan e a làimhseachadh mar ìre iomlaid shocraichte.

## Tùsan

- HM Treasury. "Wellbeing guidance for appraisal: supplementary Green Book guidance." (2021)
  <https://www.gov.uk/government/publications/wellbeing-guidance-for-appraisal-supplementary-green-book-guidance>
- ONS. "Personal well-being user guidance" (the four standard wellbeing questions).
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing>
- HM Treasury. "The Green Book: Central Government Guidance on Appraisal and Evaluation."
