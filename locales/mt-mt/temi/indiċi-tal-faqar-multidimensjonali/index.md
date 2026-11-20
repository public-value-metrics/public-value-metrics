# Indiċi tal-faqar multidimensjonali

L-MPI ikejjel il-faqar bħala nuqqasijiet li jikkoinċidu u li persuna tesperjenza fl-istess ħin — fis-saħħa, fl-edukazzjoni u fl-istandards tal-għajxien — aktar milli bħala dħul biss taħt linja. Żviluppawh l-Oxford Poverty and Human Development Initiative (OPHI) ma' Sabina Alkire u James Foster, u ġie ppubblikat flimkien mal-UNDP f'kull Human Development Report mill-2010, flimkien mal-[Indiċi tal-iżvilupp uman](../indiċi-tal-iżvilupp-uman/).

## Għaliex hu importanti

Il-linji tal-faqar tad-dħul jaqbżu persuni li għandhom biżżejjed dħul f'idejhom imma ma għandhomx ilma nadif, skola, jew li tilfu tifel/tifla — u jaqbżu l-fatt li n-nuqqasijiet jiġbru flimkien: familja mingħajr elettriku hija b'mod sproporzjonat probabbli li tkun nieqsa wkoll mis-sanità u li jkollha tifel jew tifla malnutrit. Il-metodu Alkire-Foster, li fuqu hu mibni l-MPI, jgħodd in-nuqqasijiet ta' kull persuna fuq għaxar indikaturi miġbura fi tliet dimensjonijiet bi piż ugwali — saħħa, edukazzjoni, standard tal-għajxien — u jikklassifika lil xi ħadd bħala "fqir skont l-MPI" biss jekk il-punteġġ mgħobbi tan-nuqqasijiet tiegħu jaqbeż limitu fiss, u b'hekk jaqbad l-ikkoinċidenza li sett ta' statistika separata għal kull indikatur ma jistax jaqbad. L-OPHI tippubblika l-metodoloġija sħiħa u d-data tal-pajjiżi f'<https://ophi.org.uk/multidimensional-poverty-index/>; l-MPI globali li żżomm flimkien mal-UNDP issa tkopri aktar minn 110 pajjiż. Għas-software mibni għal programmi kontra l-faqar — trasferimenti tal-flus, triage tal-kura soċjali, tfassil tal-għajnuna — is-sett ta' indikaturi tal-MPI spiss huwa l-eqreb ħaġa għal skema standardizzata tan-nuqqas li diġà ġiet ivvalidata f'għexieren ta' uffiċċji statistiċi nazzjonali.

## Il-matematika

```
10 indikaturi, 3 dimensjonijiet, kull dimensjoni bi piż ta' 1/3:

Saħħa (1/3):                nutrizzjoni (1/6), mortalità tat-tfal (1/6)
Edukazzjoni (1/3):          snin ta' skola (1/6), preżenza fl-iskola (1/6)
Standard tal-għajxien (1/3): fuel tat-tisjir, sanità, ilma tax-xorb,
                             elettriku, djar, assi (1/18 kull wieħed)

punteġġ tan-nuqqas (c) = somma tal-piżijiet tal-indikaturi li fihom persuna hija nieqsa

persuna hija "fqira skont l-MPI" jekk c ≥ 1/3 (il-limitu tal-faqar, k = 33%)

H (proporzjon tal-persuni) = numru ta' persuni foqra skont l-MPI / popolazzjoni totali
A (intensità)             = punteġġ medju tan-nuqqas fost il-foqra skont l-MPI biss

MPI = H × A
```

Peress li l-MPI jimmultiplika l-*ishma* ta' dawk li huma foqra bi *kemm* huma foqra, żewġ reġjuni bl-istess proporzjon tal-persuni jistgħu jkollhom punteġġi MPI differenti ħafna jekk in-nuqqasijiet ikunu aktar severi f'wieħed — l-istess loġika ta' "ebda sostituzzjoni bejn id-dimensjonijiet" wara l-medja ġeometrika tal-HDI.

## Eżempju prattiku

**Stħarriġ nazzjonali ta' 1,000 persuna**: 350 jiġu identifikati bħala foqra b'mod multidimensjonali (punteġġ tan-nuqqas ≥ 33%). Fost dawk l-350 individwu foqra biss, il-punteġġ medju tan-nuqqas huwa 45%.

```
H = 350 / 1000                = 0.350
A = 0.45
MPI = H × A = 0.350 × 0.45    = 0.1575
```

**Tqabbil ta' żewġ distretti bl-istess proporzjon tal-persuni**: Id-Distrett A għandu H = 0.30 u A = 0.40 (ħafna foqra, nieqsa moderatament); id-Distrett B għandu H = 0.30 u A = 0.60 (l-istess numru ta' foqra, imma nieqsa b'mod aktar sever — jonqsuhom l-elettriku *u* s-sanità *u* l-preżenza fl-iskola fl-istess ħin).

```
MPI_A = 0.30 × 0.40 = 0.120
MPI_B = 0.30 × 0.60 = 0.180
```

Bl-istess proporzjon tal-persuni, MPI 50% ogħla fid-Distrett B — sistema ta' tfassil ibbażata biss fuq il-faqar skont il-proporzjon tal-persuni tikklassifika ż-żewġ distretti bl-istess mod u taqbeż li d-Distrett B jeħtieġ intervent aktar profond.

## Rabta mal-inġinerija tas-software

- Is-sistemi tal-ġestjoni tal-każijiet u tal-eliġibbiltà għal programmi soċjali spiss diġà jiħżnu diversi mill-għaxar indikaturi (djar, preżenza fl-iskola, indikaturi tas-saħħa) f'silos separati; il-metodu tal-għadd Alkire-Foster huwa skema lesta biex tgħaqqadhom f'punteġġ wieħed tan-nuqqas minflok ma tibni mudell tal-punteġġ apposta mill-bidu.
- Il-qsim bejn proporzjon tal-persuni u intensità (H × A) huwa mudell ta' użu ġenerali għal kwalunkwe dashboard li jirrapporta "kemm huma affettwati" flimkien ma' "kemm huwa ħażin" — li ż-żewġ affarijiet jinġabru f'numru wieħed, kif jagħmlu l-istatistiki tal-prevalenza mhux ipproċessati, jaħbi eżattament il-każ li jeħtieġ l-aktar riżorsi.
- Dashboards ta' indikaturi fl-istil tal-MPI jgħaqqdu b'mod naturali mar-rappurtar tal-[ispiża għal kull benefiċjarju](../spiża-għal-kull-benefiċjarju/) għal programmi kontra l-faqar: l-ispiża għal kull punt ta' tnaqqis tal-MPI hija unità difensibbli biex jitqabblu interventi differenti ħafna (trasferiment tal-flus vs. infrastruttura tas-sanità).

## Żbalji komuni

- **Li l-għaxar indikaturi jiġu ttrattati bħala universali** — l-indikaturi globali tal-MPI tal-OPHI huma kalibrati għall-komparabbiltà bejn il-pajjiżi; l-MPIs nazzjonali (ħafna pajjiżi, inklużi diversi fl-Asja t'Isfel u fl-Afrika, jippubblikaw tagħhom) jadattaw l-indikaturi u l-piżijiet għall-kuntest lokali, u t-tnejn ma jistgħux jitqabblu direttament.
- **Li jiġi rrappurtat H biss** — il-proporzjon tal-persuni jinjora għal kollox l-intensità; dejjem irrapporta jew ikkalkula A magħha, jew l-MPI nnifsu.
- **Li wieħed jassumi li l-foqra skont l-MPI u l-foqra skont id-dħul huma l-istess popolazzjoni** — l-OPHI stess fil-briefs tal-pajjiżi tipikament turi biss sovrapożizzjoni parzjali bejn it-tnejn; programm li jimmira biss lill-foqra skont id-dħul b'mod sistematiku jaqbeż sehem sinifikanti tal-foqra multidimensjonali.

## Sorsi

- Oxford Poverty and Human Development Initiative. "Multidimensional Poverty Index."
  <https://ophi.org.uk/multidimensional-poverty-index/>
- Alkire S, Foster J. "Counting and Multidimensional Poverty Measurement." Journal of Public
  Economics, 2011.
- UNDP & OPHI. "Global Multidimensional Poverty Index" (annual report).
