# Il-valur taċ-ċibersigurtà fis-settur pubbliku

Il-valur taċ-ċibersigurtà fis-settur pubbliku huwa d-dixxiplina li tiffissa prezz għat-tnaqqis tar-riskju: kemm jiswa li jsir inqas probabbli ksur tad-data taċ-ċittadini, meta l-infiq fuq is-sigurtà ma jipproduċi ebda output viżibbli meta jaħdem u wieħed viżibbli ħafna meta jfalli? Għal servizz li jżomm rekords tal-benefiċċji, data tas-saħħa jew rekords tat-taxxa, dik il-proprjetà ta' "inviżibbli meta taħdem" hija eżattament għaliex teħtieġ argument espliċitu tal-valur, mhux biss tikka ta' konformità.

## Għaliex hu importanti

Il-Cyber Assessment Framework (CAF) tal-National Cyber Security Centre tar-Renju Unit jagħti lill-organizzazzjonijiet tas-settur pubbliku mod strutturat biex jagħmlu s-sigurtà dixxiplina li tista' tiġi evalwata u bbażata fuq l-eżiti minflok lista ta' kontroll: jiddefinixxi erba' għanijiet ta' livell għoli (ġestjoni tar-riskju tas-sigurtà, protezzjoni minn attakk ċibernetiku, skoperta ta' avvenimenti taċ-ċibersigurtà, u tnaqqis tal-impatt tal-inċidenti) maqsuma f'eżiti kontributorji li sid is-sistema jista' jiġi evalwat kontrihom, bl-istess spirtu tal-punt 9 tal-[istandard tas-servizz diġitali](../l-istandard-tas-servizz-diġitali/) ("oħloq servizz sigur li jipproteġi l-privatezza tal-utenti"). Dak li l-evalwazzjoni CAF tipproteġi minnu għandu prezz dokumentat: ir-Rapport tal-IBM Cost of a Data Breach jimmonitorja l-ispiża medja tal-ksur skont is-settur, u kostantement sab is-settur pubbliku lejn it-tarf t'isfel tal-firxa meta mqabbel mal-finanzi jew mal-kura tas-saħħa — edizzjonijiet riċenti jpoġġu l-medja tas-settur pubbliku madwar $2.6–2.9 miljun għal kull ksur — imma "aktar baxx mill-finanzi" mhuwiex "baxx", u l-ksur governattiv iġorr spejjeż li ċ-ċifri tar-rapport ma jaqbdux għal kollox: it-telf ta' fiduċja taċ-ċittadini fil-kanali diġitali, li jnaqqas l-[użu diġitali](../iffrankar-mit-tibdil-tal-kanali/) li fuqu jiddependu l-business cases tal-bidla tal-kanali, u l-ispiża politika u legali li tesponi data li l-istat sforza liċ-ċittadini jaqsmu fl-ewwel lok.

## Il-matematika

L-investiment fis-sigurtà jiġi evalwat bl-istess mod bħal kwalunkwe infiq għat-tnaqqis tar-riskju: bħala tnaqqis tat-telf mistenni, bl-użu tal-identità klassika tal-ġestjoni tar-riskju.

```
Telf Annwali Mistenni (ALE) = Telf Mistenni għal Każ Wieħed (SLE)
                              × Rata Annwali ta' Okkorrenza (ARO)

Valur ta' kontroll tas-sigurtà =
  ALE_qabel_il-kontroll − ALE_wara_il-kontroll − spiża annwali tal-kontroll

Kontroll jiswa li jiġi ffinanzjat meta:
  (ALE_qabel − ALE_wara) > spiża annwali tal-kontroll

L-evalwazzjoni CAF ma toħroġx direttament probabbiltà, imma l-profil tal-eżiti CAF
ta' servizz (liema eżiti kontributorji huma "milħuqa", "parzjalment
milħuqa", jew "mhux milħuqa") huwa input proxy raġonevoli biex tiġi stmata
l-ARO — sistema b'aċċess privileġġjat mhux ġestit jew mingħajr pjan ittestjat
ta' rispons għall-inċidenti għandha ARO realistika materjalment ogħla minn waħda
bit-tnejn f'posthom.
```

## Eżempju prattiku

**Sistema tal-ġestjoni tal-każijiet ta' kunsill tal-kontea li żżomm rekords tal-kura soċjali għal 40,000 resident**:

```
Telf Mistenni għal Każ Wieħed (spiża tal-ksur), bl-użu ta' medja tas-settur
pubbliku minn rapport riċenti tal-IBM Cost of a Data Breach ≈ £2.1m
(ikkonvertit, ċifra ta' ordni ta' kobor — dejjem iddeduċi mill-ġdid mill-edizzjoni
attwali tar-rapport minflok terġa' tuża numru fiss)

ARO attwali (aċċess privileġġjat mhux ġestit, ebda rispons ittestjat
għall-inċidenti, skont awtovalutazzjoni CAF interna li turi diversi
eżiti "mhux milħuqa") ≈ stmat 8% fis-sena
  ALE_qabel = £2.1m × 0.08 = £168,000/sena

Kontroll propost: ġestjoni tal-aċċess privileġġjat + pjan ittestjat ta'
rispons għall-inċidenti, li jmexxi l-eżiti CAF relevanti għal "milħuqa",
stmat li jnaqqas l-ARO għal 3%/sena
  ALE_wara = £2.1m × 0.03 = £63,000/sena

Spiża annwali tal-kontroll (għodod + proċess + ittestjar) = £45,000

Valur tal-kontroll = (168,000 − 63,000) − 45,000 = £60,000/sena
  pożittiv nett — iffinanzjah. L-aritmetika turi wkoll li l-kontroll
  xorta jkun jiswa li jiġi ffinanzjat bi spiża kważi tliet darbiet akbar,
  li huwa t-tip ta' kontroll tas-sensittività li għandu jakkumpanja
  kwalunkwe ċifra ALE mibnija fuq probabbiltajiet stmati.
```

## Rabta mal-inġinerija tas-software

L-inġiniera huma sidien ta' ħafna mill-lieva fl-ekwazzjoni tal-ALE: id-disinn tal-kontroll tal-aċċess, l-iġjene tad-dipendenzi u tal-patches, il-kopertura tal-logging u tad-detezzjoni, u l-għodod tar-rispons għall-inċidenti kollha jċaqalqu direttament it-terminu ARO, li huwa għaliex l-evalwazzjoni CAF taqra bħal reviżjoni teknika tal-arkitettura daqs awditu tal-politika. Dan huwa d-[dejn tekniku bħala erożjoni tal-valur pubbliku](../dejn-tekniku-bħala-erożjoni-tal-valur-pubbliku/) fl-aktar forma akuta tiegħu — sistemi mhux ippatchjati, mhux immonitorjati u b'kontroll tal-aċċess ħażin huma dejn li l-ħlas tal-imgħax tiegħu huwa riskju tal-għoli, mhux tqila kostanti — u għandu jiġi rikonċiljat mal-[ispiża totali tas-sjieda fl-IT tal-gvern](../spiża-totali-tas-sjieda-fl-it-governattiv/) sabiex l-infiq fuq is-sigurtà ma jiġix ittrattat bħala separat mill-ispiża reali tat-tħaddim tas-sistema. Huwa wkoll input dirett għall-evalwazzjonijiet tal-[valur għall-flus](../valur-għall-flus/) taħt il-Green Book: l-ispiża aġġustata għar-riskju hija parti mill-ġenb tal-"ispiża" ta' kwalunkwe appraisal tal-għażliet, mhux ħaġa żejda mwaħħla fl-aħħar.

## Żbalji komuni

- **Li l-awtovalutazzjoni CAF tiġi ttrattata bħala s-sigurtà nnifisha**: evalwazzjoni mlestija tiddeskrivi postura tas-sigurtà; ma toħloqx waħda — il-valur huwa fl-eżiti miksuba, mhux fid-dokument.
- **L-użu ta' spejjeż medji globali tal-ksur bħala stima lokali mingħajr aġġustament**: iċ-ċifri tal-IBM huma medji fuq kampjuni kbar u varjati; it-telf mistenni realistiku ta' awtorità lokali żgħira rari jkun l-istess bħal dak ta' dipartiment tal-gvern nazzjonali.
- **Li tiġi injorata l-psikoloġija tar-riskju tal-għoli fid-deċiżjonijiet ta' investiment**: probabbiltà annwali baxxa tagħmilha faċli li l-infiq fuq is-sigurtà jiġi pospost indefinittivament, sas-sena li ma jkunx — l-ittestjar tas-sensittività tal-kalkolu ALE kontra firxa ta' AROs, bħal fl-eżempju prattiku, jikkontrasta dan.
- **Li jingħadd biss l-ispiża tal-ksur fl-istil tal-IBM, mhux l-ispiża tal-fiduċja**: ksur li jnaqqas ir-rieda taċ-ċittadini li jużaw il-kanali diġitali jaħli l-każ tal-[iffrankar mill-bidla tal-kanali](../iffrankar-mit-tibdil-tal-kanali/) għal snin wara, spiża rari inkluża fl-istimi tal-ispiża tal-ksur.

## Sorsi

- National Cyber Security Centre, Cyber Assessment Framework. <https://www.ncsc.gov.uk/collection/caf>
- IBM, Cost of a Data Breach Report. <https://www.ibm.com/reports/data-breach>
- GOV.UK Service Manual, service standard, point 9: create a secure service which protects users' privacy. <https://www.gov.uk/service-manual/service-standard/point-9-create-a-secure-service>
