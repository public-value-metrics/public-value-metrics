# Indiċi tad-Deprivazzjoni Multipla (IMD)

L-IMD huwa l-miżura uffiċjali tad-deprivazzjoni relattiva għal żoni żgħar fl-Ingilterra, li jikklassifika kull waħda mit-32 844 Lower-layer Super Output Area (LSOA) tal-pajjiż (kull waħda b'madwar 1 500 resident) minn 1 (l-aktar deprivata) sa 32 844 (l-inqas deprivata). Huwa ppubblikat minn dak li issa huwa l-Ministeru tad-Djar, tal-Komunitajiet u tal-Gvern Lokali (MHCLG, qabel MHCLG/DCLG), l-aktar reċenti bħala l-English Indices of Deprivation 2019, u jidderieġi direttament il-finanzjament tal-gvern ċentrali, il-prijoritizzazzjoni tas-saħħa pubblika, u l-eliġibbiltà għal għexieren ta' skemi lokali.

## Għaliex hu importanti

Id-deprivazzjoni mhijiex ħaġa waħda — viċinat jista' jkun foqru fid-dħul imma sikur, jew adegwat fid-dħul imma jbati minn riżultati ħżiena tas-saħħa u akkomodazzjoni ħażina. L-indiċijiet predeċessuri tal-IMD (li jmorru lura għall-indikaturi tad-deprivazzjoni tad-Department of the Environment tas-snin sebgħin) evolvew fil-mudell attwali ta' seba' oqsma preċiżament għax it-targeting b'indikatur wieħed (ngħidu aħna r-rata tal-qgħad waħedha) regolarment kien jitlef żoni deprivati b'modi oħra. L-IMD 2019 jgħaqqad id-dħul, l-impjieg, l-edukazzjoni, is-saħħa, il-kriminalità, l-ostakli għall-akkomodazzjoni u s-servizzi, u l-ambjent tal-għajxien f'rank komposit wieħed għal kull LSOA, kull qasam mibni mill-gabra tiegħu stess ta' indikaturi u ppeżat mill-metodoloġija tal-MHCLG. Billi jopera fil-livell ta' żona żgħira (LSOA) minflok f'livell ta' awtorità lokali, jesponi żoni iżolati ta' deprivazzjoni moħbija ġewwa distretti inkella sinjuri — għalhekk l-IMD, mhux id-dħul medju tal-awtorità lokali, huwa dak li fuqu fil-fatt jiddependu l-NHS England, il-pupil premium tad-Department for Education, u għexieren ta' formuli ta' finanzjament tal-awtoritajiet lokali. Softwer li jiddetermina l-eliġibbiltà, jipprijoritizza l-outreach, jew jirrapporta l-impatt skont iż-żona fl-Ingilterra għandu jittratta d-deċil jew ir-rank tal-IMD bħala input ta' ewwel klassi, mhux ħaġa sekondarja — u fejn programm jimmira deliberatament liż-żoni l-aktar deprivati, il-valutazzjoni tiegħu għandha tapplika [ponderazzjoni distributtiva](../ponderazzjoni-distributtiva/) konsistenti ma' dak it-targeting, minflok ma tivvaluta lira ta' benefiċċju bl-istess mod irrispettivament minn fejn tmur.

## Il-matematika

```
7 oqsma, ippeżati:
  Dħul                                  22,5%
  Impjieg                               22,5%
  Edukazzjoni, Ħiliet u Taħriġ          13,5%
  Deprivazzjoni tas-Saħħa u Diżabbiltà  13,5%
  Kriminalità                            9,3%
  Ostakli għall-Akkomodazzjoni u s-Servizzi  9,3%
  Ambjent tal-Għajxien                   9,3%

Punteġġ ta' kull qasam: l-indikaturi huma standardizzati (ikklassifikati, imbagħad
trasformati lejn distribuzzjoni normali) u kkombinati permezz ta' trasformazzjoni
esponenzjali sabiex deprivazzjoni għolja fuq indikatur wieħed ma tkunx tista'
tiġi kompletament imħassra minn deprivazzjoni baxxa fuq oħrajn fi ħdan dak il-qasam.

Punteġġ komposit tal-IMD (LSOA) = Σ (punteġġ tal-qasam × piż tal-qasam)
Klassifika l-LSOAs skont il-punteġġ komposit → 1 (l-aktar deprivata) sa 32 844 (l-inqas deprivata)
Deċili: rank ÷ 3 284 (approssimattivament), deċil 1 = l-aktar 10% deprivati tal-LSOAs
```

## Eżempju prattiku

**Punteġġ komposit ta' LSOA**, bl-użu ta' punteġġi ta' oqsma standardizzati illustrattivi (0 = l-ebda sinjal ta' deprivazzjoni, ogħla = aktar deprivata):

```
Dħul                 0,35 × 0,225 = 0,07875
Impjieg              0,30 × 0,225 = 0,06750
Edukazzjoni          0,20 × 0,135 = 0,02700
Saħħa                0,15 × 0,135 = 0,02025
Kriminalità          0,10 × 0,093 = 0,00930
Ostakli għall-Akkomodazzjoni  0,05 × 0,093 = 0,00465
Ambjent tal-Għajxien 0,08 × 0,093 = 0,00744

Punteġġ komposit = 0,07875 + 0,06750 + 0,02700 + 0,02025
                 + 0,00930 + 0,00465 + 0,00744  = 0,21489
```

Dak il-punteġġ komposit imbagħad jiġi kklassifikat kontra l-punteġġi tat-32 844 LSOA kollha. Jekk iqiegħed l-LSOA fil-pożizzjoni 2 950, taqa' fid-deċil 1 (2 950 ÷ 3 284 ≈ 0,9, jiġifieri fl-aktar 10% deprivati tal-viċinati tal-Ingilterra) — li għal ħafna formuli ta' finanzjament huwa l-limitu li jiftaħ l-eliġibbiltà, irrispettivament minn kif l-awtorità lokali tal-madwar tikseb punteġġ fil-medja.

## Rabta mal-inġinerija tas-software

- Kull servizz li jiġeokodifika l-utenti għal postcode jew LSOA jista' jingħaqad mat-tabella ta' lookup tal-IMD ippubblikata (CSV b'xejn u b'verżjoni mill-MHCLG) biex iżid id-deċil tad-deprivazzjoni bħala kovarjat — għat-targeting tal-outreach, il-prijoritizzazzjoni tal-ġabra ta' każijiet, jew ir-rappurtar tar-riżultati skont il-banda ta' deprivazzjoni mingħajr ma tinġabar dejta personali ġdida.
- Id-deċil tal-IMD huwa kontroll standard tal-ekwità għas-servizzi diġitali pubbliċi: it-tabulazzjoni inkroċjata tal-użu tas-servizz, tat-telf, jew tas-sodisfazzjon skont id-deċil tal-IMD turi d-differenzi fl-aċċess li metriku aggregat jaħbi — ara [inklużjoni diġitali](../inklużjoni-diġitali/) u [metriċi tas-sodisfazzjon taċ-ċittadini](../metriki-tas-sodisfazzjon-taċ-ċittadini/).
- Billi r-rank tal-IMD huwa relattiv (dejjem jammonta għal sett fiss ta' rankijiet madwar l-Ingilterra), ma jistax juri jekk id-deprivazzjoni nazzjonalment tkunx qed togħla jew tonqos maż-żmien — biss liema żoni jikklassifikaw fejn relattivament ma' xulxin f'dik l-edizzjoni; ibnix dashboards ta' xejriet assoluti fuq ir-rank mhux ipproċessat tal-IMD waħdu.

## Żbalji komuni

- **Jitqabblu r-rankijiet tal-IMD bejn edizzjonijiet (2015 vs. 2019) bħala xejra maż-żmien** — l-indikaturi sottostanti, il-ġeografiji, u l-metodoloġija kollha jinbidlu bejn edizzjonijiet; l-MHCLG jagħti parir espliċitu kontra l-użu ta' bidliet fir-rank bħala evidenza li żona saret aktar jew inqas deprivata.
- **Jiġi applikat l-IMD fil-livell tal-LSOA għal individwi** — LSOA fid-deċil 1 xorta fiha familji mhux deprivati, u LSOA fid-deċil 10 xorta fiha deprivati; l-IMD jiddeskrivi żoni, mhux nies, u l-użu tiegħu bħala proxy individwali ta' eliġibbiltà jikklassifika ħażin fiż-żewġ direzzjonijiet.
- **Jiġi injorat id-dettall fil-livell tal-qasam favur ir-rank komposit** — żewġ LSOAs b'punteġġi komposti identiċi jistgħu jkollhom profili ta' oqsma kompletament differenti (waħda deprivata fis-saħħa, waħda fil-kriminalità); skema ta' targeting immirata lejn problema waħda għandha tuża l-punteġġ tal-qasam rilevanti, mhux il-komposit imħallat.

## Sorsi

- Ministry of Housing, Communities and Local Government. "English Indices of Deprivation 2019."
  <https://www.gov.uk/government/statistics/english-indices-of-deprivation-2019>
- MHCLG. "The English Indices of Deprivation 2019: Technical Report."
