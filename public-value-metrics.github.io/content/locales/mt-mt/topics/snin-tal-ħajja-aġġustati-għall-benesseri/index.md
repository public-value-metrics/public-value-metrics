# Snin tal-ħajja aġġustati għall-benesseri (WELLBY)

WELLBY huwa punt addizzjonali wieħed ta' sodisfazzjon mal-ħajja, fuq l-iskala standard tal-benesseri
0–10, għal persuna waħda għal sena waħda. Huwa l-analogu strutturali tal-QALY użat fl-ekonomija tas-saħħa —
unità waħda li tippermettilek tqabbel interventi li r-riżultati tagħhom m'għandhom xejn ieħor komuni —
iżda mibni fuq benesseri suġġettiv aktar milli fuq stati kliniċi tas-saħħa, u stabbilit fil-"Wellbeing
guidance for appraisal: supplementary Green Book guidance" (2021) ta' HM Treasury.

## Għaliex hu importanti

Il-valutazzjoni tal-ispejjeż u l-benefiċċji teħtieġ unità komuni biex tqabbel għotja għal club taż-żgħażagħ
ma' skema tas-sigurtà fit-toroq ma' servizz tas-saħħa mentali, li l-ebda wieħed minnhom ma jaqsam miżura
tar-riżultat. L-ekonomija tas-saħħa solviet dan għal interventi kliniċi bil-QALY: sena ta' ħajja aġġustata
għall-kwalità, ponderata minn 0 (mejjet) sa 1 (saħħa sħiħa). Il-gwida tal-benesseri ta' HM Treasury testendi
l-istess loġika għan-nefqa pubblika mhux tas-saħħa, bl-użu tal-mistoqsija armonizzata tas-sodisfazzjon
mal-ħajja tal-ONS ("Overall, how satisfied are you with your life nowadays?", imwieġba 0–10) bħala
s-sellum tar-riżultat minflok indiċi ta' stat tas-saħħa. WELLBY ta' 1 ifisser is-sodisfazzjon mal-ħajja
ta' persuna waħda jogħla b'punt sħiħ għal sena (jew, b'mod ekwivalenti, is-sodisfazzjon ta' għaxar persuni
jogħla b'0,1 punt kull wieħed għal sena — il-WELLBYs jingħaqdu fil-popolazzjoni bħalma jagħmlu l-QALYs).
Il-gwida ta' HM Treasury tistabbilixxi valur monetarju illustrattiv għal kull WELLBY (madwar £13 000,
prezzijiet 2019/20) derivat billi tiġi rrikonċiljata d-dejta tal-benesseri suġġettiv ma' approċċi oħra
għall-valur ta' sena ta' ħajja, u tagħti lil min jivvaluta mod kif jimmonetizza riżultati — tnaqqis
tal-weħda, koeżjoni komunitarja, aċċess għal spazju aħdar — li t-tekniki tal-[valutazzjoni tal-benesseri](../valutazzjoni-tal-benesseri/)
qabel setgħu biss jiddeskrivu, mhux iqabblu fuq bażi komuni man-nefqa fuq is-saħħa jew is-sigurtà.

## Il-matematika

```
WELLBY = Δ sodisfazzjon mal-ħajja (skala 0–10) × għadd ta' snin li fihom il-bidla tippersisti
        (miġbur fost in-nies kollha affettwati)

Benefiċċju tal-benesseri mmonetizzat = WELLBYs iġġenerati × valur għal kull WELLBY (valur ta' referenza tal-HMT)

cf. QALY = Δ utilità tal-istat tas-saħħa (skala 0–1) × snin ġewwa dak l-istat
```

L-iskala tas-sodisfazzjon 0–10 u l-iskala tal-utilità tal-QALY 0–1 mhumiex interkambjabbli mingħajr pass
ta' konverżjoni; il-gwida ta' HM Treasury tiddiskuti r-rikonċiljazzjoni taż-żewġ iskali sabiex, pereżempju,
intervent tas-saħħa vvalutat f'QALYs u intervent soċjali vvalutat f'WELLBYs ma jingħaddux darbtejn bil-kwiet
jew jibqgħu mhux komparabbli fl-istess [valutazzjoni tal-Green Book](../valutazzjoni-tal-green-book/).

## Eżempju prattiku

**Servizz tal-weħda ta' awtorità lokali**: skema ta' għaqda sservi 400 residenti anzjani iżolati. L-istħarriġ
ta' segwitu juri li s-sodisfazzjon mal-ħajja medju jogħla minn 5,2 għal 6,0 (qligħ ta' 0,8 punti), u l-effett
huwa stmat li jippersisti għal sentejn qabel ma jinħatt.

```
WELLBYs = 400 persuna × 0,8 punti × 2 snin = 640 WELLBY

Valur immonetizzat = 640 × £13 000 = £8 320 000
```

Kontra spiża annwali tal-programm ta' £300 000 (£600 000 fuq sentejn), il-proporzjon benefiċċju-spiża
huwa madwar 8 320 000 / 600 000 ≈ **13,9:1** — figura li issa tista' tpoġġi fl-istess tabella ta' valutazzjoni
ta' spiża għal kull QALY evitat ta' skema tas-saħħa jew ta' iffrankar tal-ħin tal-vjaġġ ta' skema tat-trasport.

**Karità, skala iżgħar**: programm tal-arti komunitarju jilħaq 50 parteċipant b'qligħ imkejjel ta'
sodisfazzjon ta' 0,3 punti, li jdum sena.

```
WELLBYs = 50 × 0,3 × 1 = 15 WELLBY
Valur immonetizzat = 15 × £13 000 = £195 000
```

## Rabta mal-inġinerija tas-software

- Kwalunkwe servizz li jiffaċċja liċ-ċittadini u li diġà jiġbor element ta' stħarriġ tas-sodisfazzjon mal-ħajja
  jew tal-benesseri (bosta pjattaformi tal-awtoritajiet lokali u tas-saħħa u l-kura jagħmlu dan, wara l-erba'
  mistoqsijiet standard tal-benesseri tal-ONS) jista' jikkalkula l-WELLBYs direttament minn pipelines tad-dejta
  eżistenti minflok jikkummissjona evalwazzjoni ekonomika apposta għal kull bidla fis-servizz.
- Il-WELLBYs jagħtu lit-timijiet tal-inġinerija li jibnu għar-rapportar tas-[Social Value Act](../social-value-act/)
  jew tar-[ritorn soċjali fuq l-investiment](../ritorn-soċjali-fuq-l-investiment/) denominatur standardizzat
  nazzjonalment u approvat minn HM Treasury, u jevitaw il-proliferazzjoni ta' "punteġġi ta' impatt" apposta
  li ma jistgħux jitqabblu bejn kuntratti jew fornituri.
- Peress li l-WELLBYs huma addittivi fost in-nies u maż-żmien, jikkomponu b'mod nadif fit-tip ta' segwitu
  tar-riżultati fil-livell tal-popolazzjoni użat f'sistemi ta' [responsabbiltà bbażata fuq ir-riżultati](../responsabbiltà-bbażata-fuq-l-eżiti/)
  — dashboard ta' servizz jista' jirrapporta WELLBYs kumulattivi ġġenerati kull kwart bħalma sistema tas-saħħa
  tirrapporta QALYs miksuba.

## Żbalji komuni

- **Li wieħed jassumi li l-qligħ ta' sodisfazzjon irrapportat mill-persuna stess huwa kompletament attribwibbli
  għall-intervent** — mingħajr kontrofattwali (grupp ta' tqabbil jew disinn qabel/wara b'kontrolli), ma tistax
  tifred il-qligħ tal-WELLBY minn tendenzi ġenerali; ara l-[analiżi kontrofattwali](../analiżi-kontrofattwali/).
- **Li jitħalltu WELLBYs u QALYs f'total wieħed mingħajr rikonċiljazzjoni** — il-gwida ta' HM Treasury hija
  espliċita li ż-żewġ miżuri jużaw skali differenti u teoriji differenti tal-valur; jekk jingħaddu b'mod ingenwu,
  il-benesseri li jikkoinċidi jingħadd darbtejn.
- **Li r-rata monetarja ta' referenza tintuża mingħajr kritika** — il-figura ta' £ għal kull WELLBY hija stima medja
  nazzjonali b'firxiet reali ta' inċertezza; il-gwida ta' HM Treasury tirrakkomanda analiżi tas-sensittività,
  mhux li tiġi ttrattata bħala rata fissa ta' skambju.

## Sorsi

- HM Treasury. "Wellbeing guidance for appraisal: supplementary Green Book guidance." (2021)
  <https://www.gov.uk/government/publications/wellbeing-guidance-for-appraisal-supplementary-green-book-guidance>
- ONS. "Personal well-being user guidance" (the four standard wellbeing questions).
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing>
- HM Treasury. "The Green Book: Central Government Guidance on Appraisal and Evaluation."
