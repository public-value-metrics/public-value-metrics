# Indeks večkratne prikrajšanosti (IMD)

IMD je uradno merilo relativne prikrajšanosti za majhna območja v Angliji; razvršča vsako od 32 844 območij Lower-layer Super Output Area (LSOA, vsako z okoli 1 500 prebivalci) od 1 (najbolj prikrajšano) do 32 844 (najmanj prikrajšano). Objavlja ga današnje Ministry of Housing, Communities and Local Government (MHCLG, prej DCLG), nazadnje kot English Indices of Deprivation 2019, in neposredno usmerja financiranje osrednje vlade, določanje prednostnih nalog javnega zdravja in upravičenost do ducatov lokalnih shem.

## Zakaj je pomembno

Prikrajšanost ni ena stvar – soseska je lahko dohodkovno revna, a varna, ali dohodkovno ustrezna, a trpi zaradi slabih zdravstvenih izidov in slabega stanovanjskega okolja. Predhodni indeksi IMD (segajoči v kazalnike prikrajšanosti Department of the Environment iz sedemdesetih let) so se razvili v današnji sedemdomenski model prav zato, ker je ciljanje z enim kazalnikom (denimo samo stopnja brezposelnosti) pogosto zgrešilo območja, prikrajšana na druge načine. IMD 2019 združuje dohodek, zaposlenost, izobrazbo, zdravje, kriminal, ovire pri stanovanjih in storitvah ter bivalno okolje v eno sestavljeno uvrstitev za LSOA, vsaka domena je zgrajena iz lastnega nabora kazalnikov in ponderirana po metodologiji MHCLG. Ker deluje na ravni majhnih območij (LSOA) in ne lokalnih oblasti, razkriva žepe prikrajšanosti, skrite znotraj sicer premožnih okrožij – zato se na IMD, ne na povprečni dohodek lokalne oblasti, dejansko opirajo NHS England, pupil premium Department for Education in ducati formul financiranja lokalnih oblasti. Programska oprema, ki določa upravičenost, določa prednost pri informiranju ali poroča o učinku po območjih v Angliji, bi morala decil ali uvrstitev IMD obravnavati kot prvovrsten vhod, ne naknadnega pomisleka – in kjer program namerno cilja na najbolj prikrajšana območja, bi morala njegova ocena uporabiti [porazdelitveno ponderiranje](../porazdelitveno-ponderiranje/), skladno s tem ciljanjem, namesto da bi funt koristi vrednotila enako, ne glede na to, kam pade.

## Matematika

```
7 domen, ponderiranih:
  Dohodek                                  22,5 %
  Zaposlenost                              22,5 %
  Izobrazba, spretnosti in usposabljanje   13,5 %
  Prikrajšanost glede zdravja in invalidnost 13,5 %
  Kriminal                                  9,3 %
  Ovire pri stanovanjih in storitvah        9,3 %
  Bivalno okolje                            9,3 %

Ocena posamezne domene: kazalniki so standardizirani (razvrščeni, nato preoblikovani
proti normalni porazdelitvi) in združeni z eksponentno transformacijo,
tako da velika prikrajšanost pri katerem koli kazalniku ne more biti v celoti
izničena z nizko prikrajšanostjo pri drugih znotraj te domene.

Sestavljena ocena IMD (LSOA) = Σ (ocena domene × utež domene)
Razvrsti LSOA po sestavljeni oceni → 1 (najbolj prikrajšano) do 32 844 (najmanj prikrajšano)
Decili: uvrstitev ÷ 3 284 (pribl.), decil 1 = najbolj prikrajšanih 10 % LSOA
```

## Praktični primer

**Sestavljena ocena LSOA** z ilustrativnimi standardiziranimi ocenami domen (0 = ni signala prikrajšanosti, višje = bolj prikrajšano):

```
Dohodek              0,35 × 0,225 = 0,07875
Zaposlenost          0,30 × 0,225 = 0,06750
Izobrazba            0,20 × 0,135 = 0,02700
Zdravje              0,15 × 0,135 = 0,02025
Kriminal             0,10 × 0,093 = 0,00930
Ovire pri stanovanjih 0,05 × 0,093 = 0,00465
Bivalno okolje       0,08 × 0,093 = 0,00744

Sestavljena ocena = 0,07875 + 0,06750 + 0,02700 + 0,02025
                  + 0,00930 + 0,00465 + 0,00744  = 0,21489
```

Ta sestavljena ocena se nato razvrsti glede na ocene vseh 32 844 LSOA. Če LSOA postavi na mesto 2 950, pade v decil 1 (2 950 ÷ 3 284 ≈ 0,9, tj. znotraj najbolj prikrajšanih 10 % sosesk v Angliji) – kar je za mnoge formule financiranja prag, ki odpre upravičenost, ne glede na to, kako v povprečju ocenjena je okoliška lokalna oblast.

## Povezava s programskim inženirstvom

- Vsaka storitev, ki uporabnike geokodira na poštno številko ali LSOA, lahko združi objavljeno iskalno tabelo IMD (brezplačen, različicam podvržen CSV od MHCLG), da doda decil prikrajšanosti kot kovariato – za ciljanje informiranja, določanje prednosti obsega primerov ali poročanje o izidih po pasovih prikrajšanosti brez zbiranja novih osebnih podatkov.
- Decil IMD je standardno preverjanje pravičnosti za javne digitalne storitve: križna tabela uporabe storitve, osipa ali zadovoljstva po decilu IMD razkrije vrzeli v dostopu, ki jih skupna metrika skrije – glej [digitalno vključenost](../digitalna-vključenost/) in [metrike zadovoljstva državljanov](../metrike-zadovoljstva-državljanov/).
- Ker je uvrstitev IMD relativna (vedno se sešteje v fiksen niz uvrstitev po Angliji), ne more pokazati, ali se prikrajšanost na nacionalni ravni čez čas povečuje ali zmanjšuje – le, katera območja se uvrščajo kam relativno drugo glede na drugo v tej izdaji; ne gradite nadzornih plošč absolutnih trendov samo na surovi uvrstitvi IMD.

## Pasti

- **Primerjanje uvrstitev IMD med izdajami (2015 proti 2019) kot časovnega trenda** – osnovni kazalniki, geografije in metodologija se med izdajami vsi spremenijo; MHCLG izrecno svetuje proti uporabi sprememb uvrstitve kot dokaza, da je območje postalo bolj ali manj prikrajšano.
- **Uporaba IMD na ravni LSOA za posameznike** – LSOA v decilu 1 še vedno vsebuje neprikrajšana gospodinjstva, LSOA v decilu 10 pa še vedno vsebuje prikrajšana; IMD opisuje območja, ne ljudi, njegova uporaba kot približka individualne upravičenosti pa napačno razvrsti v obe smeri.
- **Prezrte podrobnosti na ravni domen v korist sestavljene uvrstitve** – dva LSOA z enakima sestavljenima ocenama imata lahko popolnoma različna profila domen (eno prikrajšano glede zdravja, drugo glede kriminala); shema ciljanja, usmerjena na en problem, bi morala uporabiti ustrezno oceno domene, ne pomešane sestavljene.

## Viri

- Ministry of Housing, Communities and Local Government. "English Indices of Deprivation 2019."
  <https://www.gov.uk/government/statistics/english-indices-of-deprivation-2019>
- MHCLG. "The English Indices of Deprivation 2019: Technical Report."
