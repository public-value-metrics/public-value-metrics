# Spiża totali tas-sjieda (TCO) fl-IT governattiv

L-ispiża totali tas-sjieda hija l-ispiża sħiħa tac-ċiklu tal-ħajja ta' sistema — akkwist flimkien ma' kull sena ta' tħaddim — skontata għal data komuni. Fl-IT governattiv, l-iżball ta' tbassir l-aktar affidabbli huwa t-tqabbil ta' fornituri jew għażliet fuq il-prezz tal-akkwist biss, meta t-tħaddim u l-manutenzjoni tipikament jammontaw għal xi mkien bejn nofs u erba' ħamsa tal-kont tal-ħajja kollha.

## Għaliex hu importanti

Il-Green Book ta' HM Treasury jirrikjedi li l-każ finanzjarju f'kull każ ta' negozju tal-Mudell ta' Ħames Każijiet jkopri l-ispejjeż tal-ħajja sħiħa, mhux biss in-nefqa kapitali — madankollu l-National Audit Office sab ripetutament dipartimenti japprovaw investimenti fl-IT kontra tbassir mhux sħiħ jew ottimistiku tal-ispejjeż tat-tħaddim, biex jiskopru l-ispiża operattiva vera wara li s-sistema tkun ħajja u l-linja tal-baġit kapitali tkun magħluqa. Il-Technology Code of Practice tal-Government Digital Service u tas-Central Digital and Data Office (<https://www.gov.uk/guidance/the-technology-code-of-practice>) jimbotta d-dipartimenti lejn il-cloud u l-hosting tal-komoditajiet parzjalment għax jagħmel l-ispiża kontinwa viżibbli u komparabbli, minflok moħbija ġewwa figura waħda ta' akkwist kapitali li tidher baxxa b'mod attraenti mal-approvazzjoni u żbaljata b'mod għali tliet snin wara.

## Il-matematika

```
TCO = Spiża tal-akkwist + Σ(t=1..N) Spiża operattiva annwali_t / (1+r)^t
      − valur residwu (skontat)

r = rata soċjali standard ta' skont tal-Green Book ta' HM Treasury, 3,5%/sena
    (skeda ta' rata li tonqos għal orizzonti 'l hinn minn 30 sena)

Komponenti tal-ispiża operattiva: hosting/liċenzjar, appoġġ u manutenzjoni,
patching tas-sigurtà u konformità, ħin tal-persunal, aġġornament/migrazzjoni ppjanati
```

Ara r-[rata soċjali ta' skont](../rata-soċjali-ta-skont/) għal għaliex il-fattur ta' skont jimporta matul ħajja tipika tas-sistema ta' 5–10 snin, u l-[bini jew xiri fil-gvern](../ibni-jew-ixtri-fil-gvern/) għal kif it-TCO jitma' deċiżjoni ta' bini/xiri.

## Eżempju prattiku

Dipartiment jqabbel żewġ sistemi ta' ġestjoni tal-każijiet fuq orizzont ta' 5 snin bir-rata ta' skont ta' 3,5% tal-Green Book.

```
Sistema A: capex £3 500 000, opex £250 000/sena
Sistema B: capex £1 800 000 (tidher irħas), opex £650 000/sena
           (appoġġ aktar tqil mill-fornitur u piż ta' integrazzjoni)

Tqabbil ingenwu fuq il-capex biss: B tirbaħ, £1,8M < £3,5M.

Somma tal-fattur ta' skont, 5 snin b'3,5%: 0,966+0,934+0,902+0,871+0,842 ≈ 4,515

TCO_A = 3 500 000 + 250 000 × 4,515 = 3 500 000 + 1 128 750 = £4 628 750
TCO_B = 1 800 000 + 650 000 × 4,515 = 1 800 000 + 2 934 750 = £4 734 750
```

It-TCO tiddawwar id-deċiżjoni ingenwa: is-Sistema B hija ftit aktar għalja fuq ħames snin ladarba l-ispiża operattiva tiġi skontata u miżjuda, għax is-sehem tal-opex tagħha tal-ispiża tal-ħajja huwa 62% (2 934 750 / 4 734 750) kontra 24% tas-Sistema A — każ konkret tal-konstatazzjoni "il-manutenzjoni hija l-maġġoranza tal-kont", moħbija għal kollox meta wieħed iqabbel biss il-prezzijiet fuq it-tikketta.

## Rabta mal-inġinerija tas-software

It-TCO huwa n-numru li għandu jiddixxiplina kull deċiżjoni ta' [bini jew xiri](../ibni-jew-ixtri-fil-gvern/) u kull każ ta' tneħħija tad-[dejn tekniku](../dejn-tekniku-bħala-erożjoni-tal-valur-pubbliku/), għax l-imgħax tad-dejn u l-manutenzjoni differita huma t-tnejn linji ta' spiża operattiva li jappartjenu fl-istess total skontat, kemm jekk ħadd ġie jsegwihom kemm jekk le. L-inġiniera li jipproponu għażla ta' pjattaforma jew fornitur għandhom jippreżentaw it-tabella sħiħa tat-TCO, mhux il-prezz tal-akkwist, għax il-prezz tal-akkwist huwa eżattament in-numru li l-każ finanzjarju tal-Green Book ġie mfassal biex iżomm lid-dipartimenti milli jiddependu fuqu waħdu. It-TCO huwa wkoll id-denominatur onest għal ġudizzji ta' [valur għall-flus](../valur-għall-flus/) — il-VFM iqabbel il-benefiċċju mal-ispiża, u linja ta' spiża mhux imgħodda kif suppost iżżid kull proporzjon VFM fil-każ ta' negozju.

## Żbalji komuni

- **Tqabbil tal-capex biss**: l-iżball ta' akkwist l-aktar komuni — tqabbil tal-prezzijiet tal-lista tal-fornituri mingħajr tbassir imqabbad tal-ispiża operattiva għal kull għażla.
- **Esklużjoni tal-ispejjeż tal-ħruġ u tal-migrazzjoni**: l-estrazzjoni tad-dejta fi tmiem il-kuntratt, ir-re-platforming, u l-pieni tal-vendor lock-in huma linji reali tat-TCO li rari jidhru fil-każ ta' negozju oriġinali.
- **Esklużjoni tal-ispiża tas-sigurtà u tal-konformità**: il-kadenza tal-patching, it-tiġdid tal-akkreditazzjoni u l-ispiża tal-awditjar jiskalaw mal-età u l-kumplessità tas-sistema — ara l-[valur tas-sigurtà ċibernetika tas-settur pubbliku](../il-valur-taċ-ċibersigurtà-fis-settur-pubbliku/) — u rutinarjament jitħallew barra mit-tbassir tal-opex.
- **Tqabbil mhux skontat bejn għażliet b'profili differenti ta' spiża**: it-tqabbil ta' għażla tqila fuq il-capex ma' waħda tqila fuq l-opex mingħajr skont jiffavorixxi sistematikament dik li sseħħ li tiddifferixxi aktar spiża lejn snin ta' wara.

## Sorsi

- HM Treasury, *The Green Book: Central Government Guidance on Appraisal and Evaluation*, 2022. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
- Central Digital and Data Office, Technology Code of Practice. <https://www.gov.uk/guidance/the-technology-code-of-practice>
- National Audit Office, *Digital Transformation in Government*. <https://www.nao.org.uk/>
