# Rappurtar tar-Riżultati tal-Għotjiet (IRIS+)

Ir-rappurtar tar-riżultati tal-għotjiet huwa l-prattika li l-benefiċjarji tal-għotjiet jirrapportaw lura lill-finanzjaturi metriċi tar-riżultati standardizzati u komparabbli — għall-kuntrarju ta' kull finanzjatur li jivvinta mudell ta' rappurtar apposta tiegħu. L-IRIS+, miżmum mill-Global Impact Investing Network (GIIN), huwa l-aktar standard adottat b'mod wiesa' ta' dan it-tip: katalgu ta' metriċi predefiniti tal-prestazzjoni soċjali, ambjentali u finanzjarja li l-investituri ta' impatt u, dejjem aktar, il-fondazzjonijiet li jagħtu għotjiet jeżiġu jew jirrakkomandaw li l-benefiċjarji jużaw.

## Għaliex hu importanti

Qabel ir-rappurtar standardizzat, kull fondazzjoni talbet lill-benefiċjarji sett differenti ta' indikaturi f'format differenti, u karità ta' daqs medju b'għaxar finanzjaturi setgħet tkun qed iddur għaxar proċessi paralleli ta' rappurtar għal xogħol li jissovrappona — fattur dokumentat tajjeb tal-piż tar-rappurtar li l-istandardizzazzjoni tar-riżultati tal-għotjiet teżisti biex tnaqqas. L-IRIS+ jindirizza dan billi jagħti lill-finanzjaturi u lill-benefiċjarji vokabularju kondiviż: Settijiet ta' Metriċi Ewlenin miġburin skont it-tema (eż. akkomodazzjoni affordabbli, aċċess għal enerġija nadifa, inklużjoni finanzjarja), kull metriku definit b'mod preċiż biżżejjed li "impjiegi maħluqa" jew "familji servuti" jfissru l-istess ħaġa ma' kull min jirrapporta, u allinjat mal-Għanijiet ta' Żvilupp Sostenibbli tan-NU sabiex finanzjatur ikun jista' jgħaqqad id-dejta fil-livell tal-benefiċjarju f'rakkont SDG fil-livell tal-portafoll. Il-GIIN jirrapporta li l-metriċi IRIS jintużaw minn madwar nofs l-investituri ta' impatt u mill-maġġoranza l-kbira tal-maniġers tal-fondi, tal-banek, u tal-istituzzjonijiet tal-finanzjament tal-iżvilupp attivi fil-qasam.

L-istandardizzazzjoni hija l-aktar importanti fejn tinteraġixxi ma' [riżultati vs outputs](../eżiti-vs-outputs/): l-IRIS+ jimbotta r-rappurtar lejn metriċi definiti ta' riżultat u ta' impatt minflok dak li jirreġistra s-sistema eżistenti ta' ġestjoni tal-każijiet tal-benefiċjarju, li hija eżattament id-differenza li jiddeskrivu l-[ispiża għal kull riżultat](../spiża-għal-kull-riżultat/) kontra l-[ispiża għal kull benefiċjarju](../spiża-għal-kull-benefiċjarju/).

## Il-matematika

Ir-rappurtar tar-riżultati tal-għotjiet huwa qafas u proċess, mhux formula:

```
1. Il-finanzjatur jagħżel Sett ta' Metriċi Ewlenin rilevanti għat-tema tal-għotja
   (eż. IRIS+ "Inklużjoni Finanzjarja" jew "Agrikoltura Sostenibbli")
2. Kull metriku għandu definizzjoni, unità, u metodu ta' kalkolu fissi
   ppubblikati mill-GIIN — mhux mivvintati għal kull finanzjatur
3. Il-benefiċjarju jirrapporta kontra l-istess definizzjonijiet tal-metriċi
   lil kull finanzjatur li juża dak l-istandard, u jnaqqas l-isforz doppju
   ta' rappurtar
4. Il-finanzjatur jaggrega l-metriċi fil-livell tal-benefiċjarju f'rappurtar
   fil-livell tal-portafoll, komparabbli sena wara sena u bejn benefiċjarji
   bl-użu tal-istess metriku
```

Il-qligħ fl-effiċjenza huwa kombinatorju: l-istandardizzazzjoni ta' N finanzjaturi × M benefiċjarji fuq vokabularju kondiviż wieħed jibdel N×M relazzjonijiet ta' rappurtar apposta f'madwar N+M mappaturi kontra standard wieħed.

## Eżempju prattiku

**Benefiċjarju b'tliet finanzjaturi, qabel l-istandardizzazzjoni**: jirrapporta "nies servuti" lill-Finanzjatur 1 bl-użu ta' definizzjoni bbażata fuq għadd ta' individwi, "benefiċjarji milħuqa" lill-Finanzjatur 2 bl-użu ta' definizzjoni bbażata fuq il-familja, u "individwi impattati" lill-Finanzjatur 3 bl-użu ta' definizzjoni bbażata fuq episodju ta' servizz (hekk persuna li żżur darbtejn tingħadd darbtejn). Tliet rapporti, tliet numri, l-ebda wieħed komparabbli, u l-ebda wieħed komparabbli man-numri ta' benefiċjarju ieħor anke fi ħdan il-portafoll tal-istess finanzjatur.

**L-istess benefiċjarju taħt l-IRIS+**: jirrapporta kontra metriku IRIS+ definit ta' individwi milħuqa flimkien ma' metriku definit ta' riżultat mis-Sett ta' Metriċi Ewlenin rilevanti, bl-użu tal-metodoloġija tal-kalkolu ppubblikata mill-GIIN għat-tnejn. It-tliet finanzjaturi issa jirċievu l-istess numru, ikkalkulat bl-istess mod, u jistgħu jqabblu l-ispiża ta' dan il-benefiċjarju għal kull unità definita mill-IRIS+ ma' benefiċjarji oħra fil-portafoll tagħhom bl-użu tal-metriku identiku — l-ekwivalenti, fuq skala ta' infrastruttura tar-rappurtar, li jkollok [bażi tad-dejta tal-ispejjeż tal-unità](../bażijiet-tad-dejta-tal-ispejjeż-unitarji/) kondiviża.

## Rabta mal-inġinerija tas-software

Il-pjattaformi tal-ġestjoni tal-għotjiet għandhom jittrattaw l-identifikaturi tal-metriċi IRIS+ bħala foreign key, mhux test ħieles: li jinħażen il-kodiċi ppubblikat tal-metriku flimkien mal-valur irrapportat tal-benefiċjarju (minflok qasam mivvintat lokalment bl-isem "benefiċjarji") huwa dak li jagħmel possibbli aggregazzjoni aktar tard bejn finanzjaturi u bejn portafolli mingħajr proġett ta' tindif tad-dejta. Fejn pjattaforma jkollha tappoġġja finanzjaturi li ma adottawx l-IRIS+, id-disinn pragmatiku huwa li jitħalla metriku lokali jiġi mappat mal-eqreb definizzjoni IRIS+ minflok ma kull finanzjatur jiġi mġiegħel fuq l-istandard minnufih — il-komparabbiltà titjieb b'mod inkrementali hekk kif aktar mill-graff jiġi mappat fuq identifikaturi kondiviżi. Ara t-topiku relatat [spiża għal kull riżultat](../spiża-għal-kull-riżultat/) għal dak li għandhom jintużaw in-numri rrappurtati ladarba jinġabru.

## Żbalji komuni

- **L-adozzjoni tal-IRIS+ titqies bħala komparabbiltà awtomatika.** Żewġ benefiċjarji jistgħu t-tnejn jirrapportaw kontra l-istess metriku IRIS+ u xorta ma jkunux komparabbli jekk il-kwalità tad-dejta sottostanti jew l-assunzjonijiet kontrafattwali tagħhom ikunu differenti; l-istandard jiffissa d-definizzjonijiet, mhux ir-rigorożità tal-kejl.
- **Metriċi "allinjati mal-IRIS" mivvintati mill-finanzjatur.** Metriku li huwa sempliċement ispirat mil-lingwaġġ tal-IRIS+ imma mhux id-definizzjoni attwali ppubblikata jerġa' jippreżenta l-frammentazzjoni li l-istandard jeżisti biex isolvi.
- **Għeja ta' rappurtar minn għażla żejda.** Jekk jintalab benefiċjarju jirrapporta kontra Sett ta' Metriċi Ewlenin sħiħ meta biss tnejn jew tlieta mill-metriċi huma rilevanti għad-deċiżjoni, jerġa' joħloq il-problema tal-piż f'għamla standardizzata.
- **L-ebda metriku ta' riżultat xejn.** L-IRIS+ jinkludi ħafna metriċi ta' output pur (eż. għadd ta' nies servuti); l-għażla ta' dawk biss, u l-ebda mill-metriċi tal-livell tar-riżultat, tipproduċi rappurtar bil-forma tal-[ispiża għal kull benefiċjarju](../spiża-għal-kull-benefiċjarju/) taħt tikketta ta' rappurtar tar-riżultati.

## Sorsi

- GIIN, IRIS+ system. <https://iris.thegiin.org/>
- GIIN, IRIS+ Catalog of Metrics. <https://iris.thegiin.org/metrics/>
- GIIN, About IRIS+. <https://iris.thegiin.org/about/>
