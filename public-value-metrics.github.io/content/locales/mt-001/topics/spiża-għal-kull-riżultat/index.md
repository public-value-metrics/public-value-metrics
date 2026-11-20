# Spiża għal kull riżultat

L-ispiża għal kull riżultat hija n-nefqa totali tal-programm maqsuma bl-għadd ta' persuni li jiksbu bidla definita u sinifikanti fiċ-ċirkostanzi tagħhom — mhux l-għadd ta' dawk li biss irċevew servizz. Hija l-metrika tal-effiċjenza l-aktar qawwija li finanzjatur jew tim tal-forniment jista' juża, għax toħloq mistoqsija minn qabel li l-biċċa l-kbira tal-karitajiet jevitaw: x'jgħodd, preċiżament, bħala suċċess?

## Għaliex hu importanti

Food bank jista' jirrapporta żewġ numri differenti ħafna mill-kontijiet tal-istess sena. L-ispiża għal kull pakkett tal-ikel distribwit tista' tkun £15. L-ispiża għal kull unità domestika li mbagħad tikseb sigurtà alimentari — ma teħtieġx aktar għajnuna tal-ikel ta' emerġenza, ivverifikata f'punt ta' segwitu — tista' tkun £340. It-tnejn huma veri. Waħda biss tgħid lil finanzjatur jekk il-flus qed jaħdmu. Id-distakk bejniethom huwa d-distakk bejn output u riżultat: pakkett mgħoddi huwa output; unità domestika li m'għadhiex f'kriżi hija riżultat. Ara [riżultati vs outputs](../eżiti-vs-outputs/).

It-tielet settur tar-Renju Unit qatta' żewġ għexieren ta' snin jibni infrastruttura biex iġiegħel din id-distinzjoni. L-"approċċ ta' erba' pilastri" tan-New Philanthropy Capital għall-effettività tal-karitajiet jitlob b'mod espliċitu li l-organizzazzjonijiet jiddikjaraw ir-riżultati tagħhom qabel l-outputs, u l-Inspiring Impact — il-kollaborazzjoni tal-kejl tal-impatt appoġġjata mill-finanzjaturi tar-Renju Unit — tippubblika Outcomes Matrix li ħafna applikazzjonijiet għal għotjiet issa jeżiġu li l-karitajiet jimlew. Il-programm annwali ta' riċerka "State of Hunger" tat-Trussell Trust, immexxi mal-Heriot-Watt University, jeżisti preċiżament għax l-għadd ta' pakketti waħdu ma jgħid xejn dwar jekk in-nies jaħarbux mill-inċertezza tal-ikel.

L-ispiża għal kull riżultat tfisser xi ħaġa biss ladarba tkun iffissata l-kontrofattwali: riżultat miksub "xorta waħda" mhuwiex riżultat li xtara l-programm. Ara [analiżi kontrofattwali](../analiżi-kontrofattwali/) u [spostament u attribuzzjoni](../spostament-u-attribuzzjoni/).

## Il-matematika

```
Spiża għal kull riżultat = Spiża totali tal-programm / Għadd ta' benefiċjarji li jiksbu r-riżultat iddefinit

fejn:
  Spiża totali tal-programm = spiża diretta tal-forniment + sehem ġust tal-ispejjeż ġenerali
  Riżultat iddefinit        = bidla ta' stat ippreċiżata minn qabel u li tista' titkejjel
                              (eż. "sigurtà alimentari fis-segwitu ta' 6 xhur",
                              mhux "irċieva pakkett tal-ikel")
```

Qabbel ma' [bażijiet tad-dejta tal-ispiża għal kull unità](../bażijiet-tad-dejta-tal-ispejjeż-unitarji/) (eż. benchmarks tal-ispiża għal kull unità speċifiċi għas-settur) biex tiġġudika jekk spiża partikolari għal kull riżultat hijiex tajba, medja jew fqira relattivament għal interventi komparabbli.

## Eżempju prattiku

**Food bank, sena waħda**:

- Spiża totali tal-programm: £450,000
- Pakketti distribwiti: 30,000
- Spiża għal kull pakkett (metrika ta' output): £450,000 / 30,000 = **£15**

Il-karità tmexxi wkoll stħarriġ ta' segwitu ta' sitt xhur ma' kampjun ta' unitajiet domestiċi, u ssib li 35% tal-unitajiet domestiċi li rċevew tliet pakketti jew aktar jirrapportaw li m'għadhomx jeħtieġu għajnuna tal-ikel ta' emerġenza u jiskorjaw 'il fuq mis-soll tas-sigurtà alimentari fuq modulu standard tal-istħarriġ tas-sigurtà alimentari. Minn 1,800 unità domestika li rċevew tliet pakketti jew aktar dik is-sena, 630 jiksbu dak ir-riżultat.

```
Spiża għal kull riżultat = £450,000 / 630 = £714 għal kull unità domestika li tikseb sigurtà alimentari
```

Dik iċ-ċifra ta' £714 hija dik li finanzjatur li jqabbel din il-karità ma' pilota ta' trasferiment ta' flus jew servizz ta' pariri dwar id-djun għandu juża — mhux £15. Jekk programm komparabbli ta' trasferiment ta' flus fl-istess reġjun jikseb sigurtà alimentari b'£500 għal kull unità domestika, il-food bank mhijiex b'mod ovvju l-aktar rotta effiċjenti lejn l-istess riżultat, anki jekk l-ispiża tagħha għal kull pakkett tidher rħisa.

## Rabta mal-inġinerija tas-software

Il-biċċa l-kbira tas-sistemi tal-ġestjoni tal-każijiet huma mibnija biex jirreġistraw outputs, għax l-outputs huma dak li jiġri ġewwa t-tranżazzjoni (pakkett jinġieb, formola tiġi ppreżentata). Ir-riżultati normalment jiġru aktar tard, spiss barra mit-tieqa normali tal-qbid tas-sistema, u jeħtieġu deċiżjoni deliberata tad-disinn: ibni mekkaniżmu ta' segwitu (trigger ta' stħarriġ, workflow ta' kuntatt mill-ġdid, eżerċizzju ta' ħolqien ta' links tad-dejta) bħala karatteristika ta' klassi waħda, mhux ħaġa mwaħħla wara għal rapport annwali. L-inġiniera li jibnu pjattaformi tal-ġestjoni tal-għotjiet jew tal-ġestjoni tal-każijiet għas-settur għandhom jittrattaw "x'inhu l-avveniment tar-riżultat, u kif nosservawh" bħala mistoqsija ta' rekwiżiti mistoqsija qabel jiġi ffissat il-mudell tad-dejta — huwa ferm aktar diffiċli li tiżdied wara qasam tar-riżultat milli ssib counter tal-output. Ara [riżultati vs outputs](../eżiti-vs-outputs/) u [mudell loġiku](../mudell-loġiku/) għal kif tistruttura dik il-konversazzjoni dwar ir-rekwiżiti, u [spiża għal kull benefiċjarju](../spiża-għal-kull-benefiċjarju/) għall-metrika aktar mgħaġġla u aktar goffa li t-timijiet jirrikorru għaliha meta t-traċċar tar-riżultati għadu mhux mibni.

## Żbalji komuni

- **Li jiġu rrappurtati outputs imlibbsin bħala riżultati.** "Nies milħuqa" mhijiex "nies megħjuna." Jekk il-metrika tista' tiġi prodotta minn log tas-sistema mingħajr kuntatt ta' segwitu, x'aktarx hija output.
- **Manipulazzjoni tad-denominatur.** Li tnaqqas il-popolazzjoni tar-riżultat għal "dawk li lestew il-programm" bil-kwiet tħalli barra lil dawk li abbandunaw — spiss l-aktar każijiet diffiċli — u tgħolli r-rata apparenti. Iddikjara d-denominatur bħala kulħadd li beda, mhux kulħadd li spiċċa.
- **Ebda kontrofattwali.** Li jingħadd kull min kiseb ir-riżultat, inklużi dawk li kienu jiksbuh xorta waħda, jesaġera dak li xtara l-programm. Ara [analiżi kontrofattwali](../analiżi-kontrofattwali/).
- **Li jitqabblu definizzjonijiet tar-riżultat inkompatibbli.** "Sigurtà alimentari" imkejla b'modulu ta' stħarriġ ivvalidat mhijiex komparabbli ma' "sigurtà alimentari" irrappurtata mill-utenti stess f'formola ta' sodisfazzjon; tabella tal-klassifika tal-ispiża għal kull riżultat hija onesta biss meta d-definizzjonijiet tar-riżultat jaqblu.

## Sorsi

- New Philanthropy Capital (NPC), "Four Pillar Approach" to charity effectiveness. <https://www.thinknpc.org/resource-hub/four-pillar-approach/>
- Inspiring Impact, Outcomes Matrix and impact measurement resources. <https://inspiringimpact.org/>
- Trussell Trust and Heriot-Watt University, "State of Hunger" research programme. <https://www.trusselltrust.org/state-of-hunger/>
- GiveWell, "Our criteria" (cost-effectiveness as the leading criterion for charity recommendation). <https://www.givewell.org/how-we-work/our-criteria>
