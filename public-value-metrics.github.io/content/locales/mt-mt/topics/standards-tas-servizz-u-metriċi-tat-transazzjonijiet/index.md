# Standards tas-servizz u metriċi tat-transazzjonijiet

L-GOV.UK Service Standard huwa l-lista ta' kontroll ta' 14-il punt tal-gvern tar-Renju Unit għall-bini u t-tħaddim ta' servizz diġitali pubbliku, u jiġi flimkien ma' sett żgħir u obbligatorju ta' metriċi kwantitattivi tat-transazzjonijiet — spiża għal kull transazzjoni, rata ta' tlestija, użu diġitali, u sodisfazzjon tal-utent — li t-timijiet iridu jippubblikaw għal kull servizz tal-gvern ċentrali li jkun ħaj. Flimkien l-istandard u l-metriċi huma l-ispeċjalizzazzjoni operazzjonali ta' kuljum tal-oqfsa usa' tal-valur pubbliku u tal-KPIs f'dan ir-repożitorju, immirati direttament lejn it-timijiet tat-twassil tas-software.

## Għaliex hu importanti

L-Istandard tas-Servizz, miżmum fis-service manual tal-GOV.UK, jeżiġi li kull evalwazzjoni f'punt taż-żmien (alpha, beta, live) ta' servizz diġitali tal-gvern turi — fost it-14-il punt tiegħu — li t-tim jifhem il-ħtiġijiet tal-utenti, jaħdem f'tim multidixxiplinari, jiterra u jtejjeb ta' spiss, u *jevalwa l-għodod, is-sistemi u l-modi ta' xogħol*. Storikament dan kien jinsab flimkien ma' Performance Platform pubbliku fejn kull servizz ħaj kien jippubblika d-data tat-transazzjonijiet tiegħu b'mod miftuħ; dik il-pjattaforma minn dak iż-żmien ġiet irtirata, imma l-obbligu sottostanti li jitkejlu u jiġu ppubblikati dawn l-erba' metriċi ewlenin jibqa' permezz tal-gwida "measuring success" tas-service manual. Ir-raġuni li din hija differenti minn dashboard ġeneriku tal-KPIs tas-software hija li dawn il-metriċi ġew iddisinjati espliċitament bħala mudell ekonomiku marbut wieħed, mhux erba' punteġġi indipendenti: il-każ kollu tal-iffrankar għall-gvern diġitali — ir-Rapport dwar l-Effiċjenza Diġitali tal-Government Digital Service sab transazzjonijiet diġitali madwar 20 darba irħas minn dawk bit-telefon u madwar 50 darba irħas minn dawk wiċċ imb'wiċċ għal servizzi komparabbli tal-gvern lokali — jidher biss jekk ir-rata ta' tlestija tibqa' għolja u l-użu diġitali verament jogħla, minflok ma sempliċement jiżdied kanal rħis maġenb wieħed għali li ma nbiddilx.

## Il-matematika

```
Spiża għal kull transazzjoni = spiża totali tat-tħaddim tas-servizz / numru ta' transazzjonijiet imlestija
Rata ta' tlestija            = transazzjonijiet imlestija / transazzjonijiet li bdew × 100
Użu diġitali                 = transazzjonijiet fil-kanal diġitali / transazzjonijiet fil-kanali kollha × 100
Sodisfazzjon tal-utent       = % sodisfatti + sodisfatti ħafna, stħarriġ ta' 5 punti fis-servizz

Iffrankar mill-bidla tal-kanal = volum tat-transazzjonijiet × bidla fl-użu × (spiża għal kull transazzjoni
                                 fil-kanal l-antik − spiża għal kull transazzjoni diġitalment)

Spiża tad-domanda ta' falliment = (1 − rata ta' tlestija) × transazzjonijiet ittentati diġitalment ×
                                  spiża tal-kanal ta' riżerva li dawk l-utenti mbagħad jużaw minflok
```

## Eżempju prattiku

**Servizz illustrattiv ta' tiġdid ta' liċenzja tal-gvern ċentrali**, 2 miljun transazzjoni/sena, bħalissa 65% bit-telefon (£3.00/transazzjoni) u 35% diġitali (£0.30/transazzjoni), rata ta' tlestija 80%. Disinn mill-ġdid kontra l-Istandard tas-Servizz ta' 14-il punt jgħolli l-użu diġitali għal 60% u t-tlestija għal 92%:

```
Iffrankar mill-bidla fl-użu = 2,000,000 × 0.25 × (3.00 − 0.30) = £1,350,000/sena

Spiża tad-domanda ta' falliment, qabel:
  2,000,000 × 0.35 × (1 − 0.80) × £3.00 = £420,000/sena (dawk li jabbandunaw jirritornaw għat-telefon)

Spiża tad-domanda ta' falliment, wara:
  2,000,000 × 0.60 × (1 − 0.92) × £3.00 = £288,000/sena

Iffrankar nett tad-domanda ta' falliment = £420,000 − £288,000 = £132,000/sena

Iffrankar annwali totali ≈ £1,350,000 + £132,000 = £1,482,000/sena
```

L-aritmetika tagħmilha espliċita għaliex ir-rata ta' tlestija mhijiex metrika sekondarja: mingħajr it-titjib minn 80% għal 92%, l-iffrankar mill-bidla fl-użu kien jitnaqqas parzjalment lura mid-domanda ta' falliment li tirrotta lill-utenti diġitali frustrati direttament lura lejn il-kanal għali tat-telefon.

## Rabta mal-inġinerija tas-software

Dawn l-erba' metriċi huma eżempju prattiku ta' dashboard ta' spiża-konsegwenza: metrika waħda tal-ispiża miżmuma separata minn tliet metriċi tal-eżitu/kwalità, apposta qatt ma tinġabar f'punteġġ wieħed — l-istess dixxiplina li ġiet argumentata fil-[KPIs tas-settur pubbliku](../kpis-tas-settur-pubbliku/). Għall-inġiniera din tinqasam f'xogħol konkret u li jista' jinżamm: ir-rata ta' tlestija hija problema ta' strumentazzjoni tal-funnel, u kull punt ta' abbandun fil-vjaġġ huwa, bi prinċipju, li jista' jiġi lokalizzat u rranġat; l-ispiża għal kull transazzjoni teħtieġ kontabilità ġenwina tal-ispiża unitarja li tinkludi l-ispejjeż tal-persunal assistit u tal-kanal tal-karta, mhux biss in-nefqa tal-cloud hosting (ara l-[ispiża għal kull transazzjoni](../spiża-għal-kull-tranżazzjoni/) u l-[ispiża totali tas-sjieda fl-IT tal-gvern](../spiża-totali-tas-sjieda-fl-it-governattiv/)); u l-użu diġitali huwa metrika ta' ekwità liebsa kostum ta' effiċjenza — iċ-ċittadini li ma jistgħux jew ma jridux jaqilbu l-kanal huma b'mod sproporzjonat aktar anzjani, b'diżabbiltà, jew esklużi diġitalment, għalhekk l-għeluq aggressiv tal-kanali jikkonverti "iffrankar" f'dannu għall-aċċess (ara l-[inklużjoni diġitali](../inklużjoni-diġitali/) u l-[iffrankar mill-bidla tal-kanali](../iffrankar-mit-tibdil-tal-kanali/)). L-istandard ta' 14-il punt innifsu huwa l-ispeċifikazzjoni tal-proċess wara dawn in-numri — ara l-[istandard tas-servizz diġitali](../l-istandard-tas-servizz-diġitali/) għall-istandard sħiħ, u l-[metriċi tas-sodisfazzjon taċ-ċittadini](../metriki-tas-sodisfazzjon-taċ-ċittadini/) biex tara kif iċ-ċifra tas-sodisfazzjon hawnhekk tirrelata mal-kejl usa' tal-fiduċja.

## Żbalji komuni

- **Użu miksub billi jingħalaq il-kanal alternattiv**: l-għeluq ta' linja tat-telefon iġholli l-perċentwali tal-użu diġitali b'mod aritmetiku filwaqt li jarmi d-domanda ta' falliment fuq kwalunkwe kanal li jibqa' (spiss rotta assistita-diġitali jew wiċċ imb'wiċċ aktar għalja); dejjem ikejjel l-ispiża tas-sistema kollha, mhux il-proporzjon waħdu.
- **Li r-rata ta' tlestija titkejjel mit-tieni pass tal-funnel**: li jinbeda l-għadd "bdew" wara l-ewwel punt ġenwin ta' abbandun iżżejjen ir-rata ta' tlestija u jaħbi l-akbar telf li jista' jiġi rranġat.
- **Spiża għal kull transazzjoni li teskludi l-appoġġ diġitali assistit**: spiża unitarja diġitali biss li tinjora l-ħin tal-persunal imqatta' biex jgħin lill-utenti li ma jistgħux jservu lilhom infushom tissottovaluta l-ispiża vera tal-kanal.
- **Li jiġu ppubblikati metriċi mingħajr definizzjoni maqsuma bejn is-servizzi**: "transazzjoni" u "mlesta" jfissru affarijiet differenti f'timijiet differenti tas-servizz sakemm id-definizzjonijiet ma jiġux standardizzati u verżjonati, u dan jagħmel it-tqabbil bejn is-servizzi mhux affidabbli.

## Sorsi

- GOV.UK Service Manual, "The Service Standard." <https://www.gov.uk/service-manual/service-standard>
- GOV.UK Service Manual, "Measuring Success — Data You Must Publish."
  <https://www.gov.uk/service-manual/measuring-success/data-you-must-publish>
- GOV.UK, "Digital Efficiency Report."
  <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
