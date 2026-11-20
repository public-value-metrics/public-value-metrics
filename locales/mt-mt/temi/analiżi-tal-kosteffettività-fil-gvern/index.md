# Analiżi tal-kosteffettività fil-gvern

L-analiżi tal-kosteffettività (CEA) tqabbel l-ispejjeż ta' modi alternattivi kif tinkiseb l-*istess* riżultat, espress f'unitajiet naturali — spiża għal kull persuna li torqod barra akkomodata, spiża għal kull student mgħolli sal-istandard mistenni, spiża għal kull tunnellata ta' CO2 mnaqqsa — mingħajr ma r-riżultat innifsu jinbidel f'flus.

## Għaliex hu importanti

Il-Green Book jittratta s-CEA bħala l-metodu ta' riżerva meta r-rekwiżit ta' [analiżi soċjali tal-ispiża u tal-benefiċċju](../analiżi-soċjali-tal-ispejjeż-u-l-benefiċċji/) li kull benefiċċju jiġi mmonetizzat isir mhux biss diffiċli iżda diżonest — fejn li jitqiegħed prezz kredibbli fuq ir-riżultat jirrikjedi assunzjonijiet li ħadd fil-fatt ma jaħseb bihom (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>, Kapitolu 5, dwar l-evalwazzjoni tal-għażliet fejn ir-riżultati ma jistgħux jiġu mmonetizzati faċilment). Is-CEA hija l-metodu mislut l-aktar direttament mill-ekonomija tas-saħħa — hija strutturalment identika għal kif in-NICE iqabbel it-trattamenti bl-użu tal-ispiża għal kull Quality-Adjusted Life Year — iżda applikata għal programmi pubbliċi mhux tas-saħħa: interventi edukattivi għal kull punt ta' riżultat tal-istudent, programmi tal-akkomodazzjoni għal kull unità domestika mżomma milli tispiċċa bla dar, programmi tal-impjieg għal kull riżultat ta' impjieg sostnut.

Ir-raġuni li s-CEA taqleb postha maġenb l-SCBA minflok tiġi assorbita minnha hija li li tgħaffeġ valur monetarju fuq xi riżultati tipproduċi numru preċiż biżżejjed biex jidher awtoritarju u kkontestat biżżejjed biex ikun bla valur f'dibattitu pubbliku — li tpoġġi prezz fuq "tifel jaqra bl-istandard mistenni" tistieden eżattament it-tip ta' sfida li ssuq każ tan-negozju f'rotta f'kumitat magħżul. Is-CEA tevita l-argument billi tirrifjuta li jkollha: tikklassifika l-għażliet skont l-ispiża għal kull unità tar-*riżultat innifsu*, u tħalli l-ġudizzju politiku separat dwar jekk ir-riżultat jixraqx li jiġi segwit xejn lill-każ strateġiku.

## Il-matematika

```
Proporzjon tal-kosteffettività (medju) = Spiża totali / Unitajiet totali tar-riżultat miksuba

Proporzjon inkrementali tal-kosteffettività (ICER), meta tqabbel l-għażla A mal-għażla B:
ICER = (Spiża_A − Spiża_B) / (Riżultat_A − Riżultat_B)

Proċedura:
1. Iffissa l-unità tar-riżultat u l-metodu tal-kejl fl-għażliet kollha li qed jitqabblu.
2. Ikkalkula l-ispiża ta' kull għażla fuq l-istess bażi (ara ../green-book-appraisal/, każ finanzjarju)
   fuq l-istess orizzont taż-żmien.
3. Skarta l-għażliet dominati: kull għażla li tiswa aktar għal kull unità minn
   alternattiva irħas li tikseb l-istess riżultat jew aħjar tiġi mwarrba.
4. Ikklassifika l-għażliet li jifdal skont il-proporzjon inkrementali, mhux dak medju,
   tal-kosteffettività.
```

Is-CEA ma tistax, waħedha, tgħid jekk programm jixraqx li jiġi ffinanzjat xejn — biss liema minn diversi approċċi għall-istess għan huwa l-irħas għal kull unità. Id-deċiżjoni dwar jekk l-għan innifsu jixraqx in-nefqa teħtieġ jew li terġa' tinbidel f'SCBA (jekk teżisti valutazzjoni kredibbli) jew ġudizzju politiku/strateġiku barra mill-matematika. Fejn ir-riżultati verament ma jistgħux jitnaqqsu għal unità waħda — għax programm jipproduċi diversi riżultati li huma importanti b'modi differenti — uża minflok l-[analiżi tad-deċiżjonijiet b'kriterji multipli](../analiżi-ta-deċiżjonijiet-bħafna-kriterji/).

## Eżempju prattiku

**Awtorità lokali**: kunsill iqabbel tliet approċċi biex inaqqas in-nies li jorqdu barra, kull wieħed ikkalkulat fuq sena kontra r-riżultat "individwi mċaqalqa f'akkomodazzjoni stabbli għal 6+ xhur":

```
Għażla                              Spiża      Riżultati miksuba   CER medju
Housing First (intensiv)            £900,000   60                  £15,000/riżultat
Hostel + appoġġ għall-ħruġ          £600,000   50                  £12,000/riżultat
Outreach + settur tal-kiri privat   £350,000   20                  £17,500/riżultat

ICER, Hostel vs Outreach:  (600k−350k)/(50−20) = £8,333 għal kull riżultat addizzjonali
ICER, Housing First vs Hostel: (900k−600k)/(60−50) = £30,000 għal kull riżultat addizzjonali
```

L-Outreach hija dominata fl-ispiża medja mill-Hostel, iżda l-pass *inkrementali* mill-Outreach għall-Hostel jiswa biss £8,333 għal kull persuna addizzjonali akkomodata — rħis meta mqabbel mal-pass tal-Housing First, li jiswa £30,000 għal kull persuna addizzjonali lil hinn minn dak li tikseb l-Hostel. Awtorità b'baġit limitat li qed tkabbar għandha tippreferi li tespandi l-Hostel qabel il-Housing First, anki jekk il-Housing First tidher aħjar fuq il-proporzjon medju tagħha stess.

**Gvern nazzjonali**: programm ta' rkupru tal-litteriżmu jitqabbel fi tliet mudelli ta' forniment fuq "spiża għal kull student li jilħaq l-istandard tal-qari mistenni għall-età": tutoring wieħed għal wieħed (£1,800/student), tutoring f'gruppi żgħar (£700/student), u intervent diġitali biss (£150/student, imma biss 40% tar-rata tar-riżultat tat-tutoring f'gruppi żgħar għal kull student irreġistrat wara aġġustament għat-tnaqqis fl-impenn). Ladarba aġġustat għat-tlestija attwali, l-intervent diġitali biss jiswa £375 għal kull student li jilħaq l-istandard — xorta l-irħas, iżda s-CEA ma tistax tgħid jekk l-għadd assolut iżgħar ta' studenti megħjuna mid-diġitali biss, jekk jiġi mwassal bl-istess baġit tat-tutoring f'gruppi żgħar, huwa kompromess aċċettabbli kontra li jintlaħqu inqas studenti b'aktar fond; dak huwa ġudizzju distributtiv li s-CEA terġa' tgħaddi lil dawk li jieħdu d-deċiżjonijiet.

## Rabta mal-inġinerija tas-software

Is-CEA hija l-qafas it-tajjeb kull meta t-timijiet tal-inġinerija jevalwaw approċċi ta' forniment għall-*istess* riżultat tas-servizz — spiża għal kull identità ivverifikata b'suċċess fost tliet fornituri tal-verifika tal-identità, spiża għal kull każ ittrijat b'mod korrett fost żewġ disinji ta' awtomazzjoni tal-ħidma fuq il-każijiet, spiża għal kull difett ta' aċċessibbiltà solvut fost rimedju intern kontra rimedju b'kuntratt. Id-dixxiplina li timporta direttament: iddefinixxi l-unità tar-riżultat qabel tqabbel l-ispejjeż (mhux "biljetti magħluqa" — output — iżda "bżonn tal-utent verament solvut"), u dejjem ikkalkula l-proporzjon inkrementali bejn is-sistema attiva u sostituzzjoni proposta, mhux l-ispiża medja ta' kull sistema iżolata. Ara [riżultati vs outputs](../eżiti-vs-outputs/) u [spiża għal kull riżultat](../spiża-għal-kull-riżultat/).

## Żbalji komuni

- **Li jitqabblu proporzjonijiet medji, mhux inkrementali, meta tiġi deċiża espansjoni.** Kif juri l-eżempju tan-nies li jorqdu barra, l-għażla bl-aħjar proporzjon medju mhijiex dejjem l-irħas unità li jmiss ta' riżultat biex tinxtara.
- **Li tintgħażel unità tar-riżultat li verament hija output.** "Riferimenti magħmula" jew "sessjonijiet mogħtija" ikejlu attività, mhux ir-riżultat li l-programm jeżisti biex jipproduċi; CEA fuq outputs tipproduċi numru li jidher ċert u li jwieġeb il-mistoqsija żbaljata.
- **Li jitqabblu riżultati verament differenti.** Is-CEA hija valida biss meta kull għażla timmira lejn l-istess riżultat imkejjel bl-istess mod; li titqabbel "spiża għal kull persuna li torqod barra akkomodata" ma' "spiża għal kull persuna li ħarġet mill-kura f'kirja stabbli" teħtieġ miżura ġenerika tar-riżultat jew [analiżi tad-deċiżjonijiet b'kriterji multipli](../analiżi-ta-deċiżjonijiet-bħafna-kriterji/), mhux CEA.
- **Li tiġi injorata d-durabbiltà tar-riżultat.** Għażla irħas li tipproduċi riżultati li ma jdumux (student li jerġa' lura wara li jintemm l-intervent) mhijiex verament aktar kosteffettiva ladarba titkejjel fuq orizzont komparabbli; qabbel il-perjodu ta' segwitu fl-għażliet li qed jitqabblu.

## Sorsi

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Chapter 5.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- National Institute for Health and Care Excellence. "Developing NICE guidelines: the manual" —
  il-metodu tal-kosteffettività li din l-adattazzjoni governattiva tislef minnu.
  <https://www.nice.org.uk/process/pmg20>
- What Works Centre for Homelessness Impact. Cost-effectiveness evidence on homelessness
  interventions. <https://whatworks-homelessness.org.uk/>
