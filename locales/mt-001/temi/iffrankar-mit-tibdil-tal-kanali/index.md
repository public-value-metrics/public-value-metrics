# Iffrankar mit-tibdil tal-kanali

L-iffrankar mit-tibdil tal-kanali huwa t-tnaqqis previst fl-ispiża li jiġi mit-tneħħija tal-volum ta' tranżazzjonijiet minn kanali għaljin — telefon, siportijiet wiċċ imb wiċċ, posta bil-karta — għal self-service diġitali rħis. Huwa l-magna finanzjarja wara d-"digital by default", u wkoll il-linja fil-każ tan-negozju li l-aktar probabbli tkun żbaljata, għax l-assunzjoni li tistrieħ fuqha — li l-kanali offline jonqsu hekk kif jiżdied l-użu diġitali — hija vera biss xi kultant.

## Għaliex hu importanti

L-aritmetika tidher li ma tistax tiġi kkontestata bl-użu taċ-ċifri tal-[ispiża għal kull tranżazzjoni](../spiża-għal-kull-tranżazzjoni/) mid-Digital Efficiency Report: ċaqlaq miljun tranżazzjoni minn żjara wiċċ imb wiċċ ta' £8.62 għal waħda diġitali ta' £0.15 u l-iffrankar huwa aktar minn £8 miljun. Iżda iffrankar isir flus rilaxxati għal tqegħid mill-ġdid biss jekk il-*kapaċità fissa* tal-kanal li qed jonqos tiġi fil-fatt maqtugħa — is-siġġijiet tal-call centre, il-persunal tas-siportijiet, il-minuti tal-kuntratt tat-telefon — u programmi diġitali tal-gvern lokali sabu ripetutament li l-volum totali tal-kuntatti ma jonqosx b'mod proporzjonali mal-użu diġitali. Riċerka minn programmi ta' trasformazzjoni diġitali tal-awtoritajiet lokali u minn korpi bħas-Socitm u l-Local Government Association dokumentat mudell rikorrenti: il-kanali diġitali jattiraw kuntatt ġenwinament ġdid (ċittadini li ma kinux jċempluk jew jiżuru, issa jagħmlu dan għax huwa aktar faċli), u sehem sinifikanti ta' tranżazzjonijiet "diġitali" jfallu f'nofs it-triq u jiġġeneraw telefonata xorta waħda — għalhekk il-volum tat-telefon jonqos ferm inqas milli jissuġġerixxi l-perċentwal tal-użu diġitali, xi kultant ma jonqosx lanqas f'termini assoluti avolja *s-sehem* tiegħu mill-kuntatt totali jonqos.

## Il-matematika

```
Iffrankar gross mit-tibdil tal-kanali = volum miċċaqlaq × (spiża_kanal_antik − spiża_diġitali)

Iffrankar nett (realizzat) = iffrankar gross
                       − domanda ġdida/ta' dell maħluqa mill-kanal aktar faċli
                       − spiża tad-domanda tal-falliment (fallimenti diġitali li
                         xorta jiġġeneraw telefonata jew żjara fis-siport)
                       − spiża ta' kapaċità fissa mhux irtirata (call
                         centre jista' jnaqqas il-persunal biss f'unitajiet
                         diskreti; tnaqqis ta' 15% fil-volum rarament iħallik
                         tnaqqas 15% tal-persunal)

Limitu ta' realizzazzjoni: l-iffrankar jista' jitqies bħala żgur biss meta l-volum jonqos
taħt il-livell li l-kanal antik jista' jimla bil-persunal fil-pass diskret
li jmiss iżgħar (eż. titlef xift sħiħ, skrivanija sħiħa, band
kuntrattwali sħiħ ta' persunal)
```

## Eżempju prattiku

**Servizz ta' tiġdid tal-blue badge ta' kunsill tal-kontea**: 60,000 tiġdid/sena, qabel 100% telefon/karta b'£6.40 għal kull tranżazzjoni. Servizz diġitali ġdid jiġi mnedi u jilħaq użu diġitali ta' 65% fi żmien sena, b'£0.30 għal kull tranżazzjoni diġitali.

```
Kalkolu naïve (gross) tal-iffrankar:
  39,000 miċċaqalqa × (£6.40 − £0.30) = £237,900/sena

Dak li fil-fatt ġara, skont id-dejta tal-contact centre tal-kunsill:
  Il-volum tat-telefon niżel minn 60,000/sena għal 46,000/sena (−23%, mhux −65%)
  għax: 9,000 vjaġġ diġitali falla u ġġenera telefonata ta' segwitu
        (tnixxija tad-domanda tal-falliment), u 4,000 persuna li qabel
        ma kinux iġeddu xejn issa jagħmlu hekk, wara li sabuha faċli
        online (domanda ta' dell — titjib ġenwin fl-aċċess, iżda mhux
        iffrankar)

  Il-contact centre tat-telefon għandu persunal f'bands ta' 8,000 telefonata/FTE;
  tnaqqis ta' 14,000 telefonata (60,000 → 46,000) jeħles 1.75 FTE,
  mgħaddi 'l isfel fil-prattika għal 1 FTE li fil-fatt jiġi ridistribwit = £34,000/sena

Iffrankar realizzat = £34,000/sena flimkien mal-ispiża tal-bini/tħaddim
  tal-kanal diġitali evitata fuq 39,000 tranżazzjoni ≈ £34,000 + (39,000 × £0.30
  spiża diġitali diġà mgħoddija) — frazzjoni ta' £237,900 taċ-ċifra prinċipali,
  għalkemm is-servizz xorta huwa b'mod bla ambigwità aħjar għall-utenti.
```

## Rabta mal-inġinerija tas-software

Il-lezzjoni tal-inġinerija hija li l-iffrankar mit-tibdil tal-kanali jinkiseb permezz ta' deċiżjonijiet *operattivi* (rostering, tneħħija mis-servizz, rinegozjar ta' kuntratti), mhux mill-ħruġ tas-software — tim jista' jilħaq kull punt tal-[digital-service-standard](../l-istandard-tas-servizz-diġitali/) u xorta jwassal żero iffrankar nett jekk ħadd ma jirtira l-kapaċità fissa tal-kanal antik. L-istrumentazzjoni tad-domanda tal-falliment (fejn fil-vjaġġ diġitali l-utenti jabbandunaw u x'jagħmlu wara) hija problema solvibbli ta' analitika tal-funnel u l-aktar ħaġa b'ħafna influwenza li tim tal-inġinerija jista' jagħmel biex jipproteġi l-każ tal-iffrankar; huwa wkoll il-link dirett ma' [cost-per-transaction](../spiża-għal-kull-tranżazzjoni/), li d-domanda tal-falliment tqiegħed b'mod mhux evidenti. Ara [benefits-realization](../ir-realizzazzjoni-tal-benefiċċji/) għad-dixxiplina usa' li tiċċekkja li l-iffrankar ta' każ tan-negozju fil-fatt jasal, u [digital-inclusion](../inklużjoni-diġitali/) għal għaliex il-kanal offline normalment ma jistax, u m'għandux, jiġi rtirat għalkollox.

## Żbalji komuni

- **Li jiġi assunt sostituzzjoni tal-kanali 1:1**: li l-użu diġitali jiġi mmudellat bħala tnaqqis dirett mill-volum tat-telefon/tas-siport, billi jiġu injorati d-domanda ta' dell u t-tnixxija tad-domanda tal-falliment iddokumentati fir-riċerka dwar it-tibdil tal-kanali tal-gvern lokali.
- **Li l-iffrankar gross jiġi rreġistrat qabel it-tneħħija mis-servizz**: li jingħadd l-iffrankar fil-każ tan-negozju fis-sena li fiha jiżdied l-użu, mhux fis-sena (jekk qatt) li fiha l-kapaċità tal-kanal antik tiġi fil-fatt maqtugħa.
- **Li tiġi injorata n-natura ta' funzjoni bi stadji tal-ispejjeż tal-persunal**: tnaqqis ta' 20% fil-volum rarament jinbidel f'tnaqqis ta' 20% fl-ispiża, għax il-contact centres u s-siportijiet għandhom persunal f'bands diskreti, mhux kontinwament.
- **Li d-domanda ta' dell tiġi ttrattata bħala skart**: kuntatt ġdid minn utenti li qabel kienu esklużi jew skoraġġuti huwa żieda reali fil-[valur pubbliku](../valur-pubbliku/), mhux żball tal-mudell — għandu jiġi rrappurtat bħala riżultat ta' aċċess, mhux netted bħala storbju.

## Sorsi

- Cabinet Office, Digital Efficiency Report (2012). <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- Local Government Association, digital transformation and channel shift resources. <https://www.local.gov.uk/our-support/efficiency-and-income-generation/digital-transformation>
- Socitm, local public services digital insight research. <https://www.socitm.net/>
