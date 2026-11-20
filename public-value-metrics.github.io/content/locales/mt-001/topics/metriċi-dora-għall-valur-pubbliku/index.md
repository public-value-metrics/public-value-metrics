# Metriċi DORA għall-Valur Pubbliku

Il-metriċi DORA (DevOps Research and Assessment) — il-frekwenza tal-iskjerament, iż-żmien ta' tmexxija għal bidliet, ir-rata ta' falliment tal-bidliet, u ż-żmien biex jerġa' jinkiseb is-servizz, flimkien mal-affidabbiltà bħala ħames waħda — huma l-benchmarks tal-prestazzjoni tal-forniment l-aktar validati tal-industrija tas-softwer. Meta jiġu tradotti f'termini ta' responsabbiltà tas-settur pubbliku, kull wieħed minnhom huwa proxy dirett ta' kemm malajr, u kemm b'mod sikur, il-valur pubbliku jilħaq liċ-ċittadin.

## Għaliex hu importanti

Għaxar snin ta' riċerka tad-DORA, ippubblikata kull sena bħala l-*Accelerate State of DevOps Report* (il-metodoloġija ta' Forsgren, Humble u Kim, li issa tiġi mmexxija minn Google Cloud), tiġbor it-timijiet f'eliti, għolja, medji u baxxi. It-timijiet elitarji jiskjeraw fuq talba, jieħdu inqas minn ġurnata mill-commit sal-produzzjoni, jfallu madwar 5% tal-bidliet, u jirkupraw f'inqas minn siegħa; dawk bi prestazzjoni baxxa jiskjeraw darba fix-xahar jew inqas, jieħdu xhur, jfallu madwar 40% tal-bidliet, u jirkupraw f'ġimgħat. Fil-gvern dawn mhumiex metriċi tal-vanità tal-inġinerija: l-Istandard tas-Servizz tal-Government Digital Service jeħtieġ li t-timijiet "jirrepetu u jtejbu spiss" u jkunu jistgħu jirrispondu malajr għall-ħtieġa tal-utent, u d-dipartimenti li ma jistgħux jiskjeraw b'mod sikur u spiss huma strutturalment inkapaċi jissodisfaw dak l-istandard, tkun xi tkun ir-riċerka tal-utenti tagħhom. Ix-xogħol tal-effiċjenza diġitali tal-Cabinet Office stess sab li l-bidla ta' ċittadin minn tranżazzjoni diġitali falluta jew bil-mod għal kanal tat-telefon jew tal-karta hija għalja — ir-Rapport tal-GDS dwar l-Effiċjenza Diġitali tal-2012 stima li ċerti tranżazzjonijiet diġitali jiswew sa 20p kontra kuntatti bit-telefon jew wiċċ imb'wiċċ li jiswew sa £8,62 — għalhekk falliment ta' bidla f'servizz li jiffaċċja l-pubbliku ma jiswiex biss ħin tal-inġinerija, iżda jbiddel liri reali fuq il-baġit taċ-ċentru tal-kuntatti (ara [iffrankar mill-bidla fil-kanal](../iffrankar-mit-tibdil-tal-kanali/)).

## Il-matematika

```
Frekwenza tal-iskjerament  = skjerament fil-produzzjoni / żmien
Żmien ta' tmexxija għal bidliet = t(skjerament) − t(commit), medjan
Rata ta' falliment tal-bidliet  = bidliet fallimentari / bidliet totali × 100
Żmien biex jerġa' jinkiseb (MTTR) = t(irkuprat) − t(falliment), medjan
Affidabbiltà            = kisba tal-SLO (disponibbiltà, latenza, korrettezza)
```

Traduzzjonijiet għal valur pubbliku:

```
Żmien ta' tmexxija → ġimgħat fil-pipeline × CoD, ara cost-of-delay-in-public-programmes
Rata ta' falliment → rata ta' inċidenti li jaffettwaw liċ-ċittadin: CFR × spiża għal kull
                     telefonata mibdula lejn iċ-ċentru tal-kuntatti
                     (jew għal kull tranżazzjoni statutorja falluta)
Żmien ta' rkupru   → dannu mit-twaqqif tas-servizz: MTTR × (talbiet/applikazzjonijiet
                     imblukkati kull siegħa) × spiża downstream jew telf ta' benessri
                     għal kull unità
Affidabbiltà       → skont tal-benefiċċju: servizz b'disponibbiltà ta' 99% jagħti
                     ≈ 0,99 tal-benefiċċju mmudellat tiegħu — l-analogu tal-forniment
                     tan-nuqqas ta' użu jew ta' konformità
```

## Eżempju prattiku

Tim ta' portal tat-talbiet għall-benefiċċji ta' awtorità lokali, qabel u wara investiment fl-inġinerija tal-forniment:

```
                    Qabel       Wara
Skjerament          kull xahar  kull ġimgħa
Żmien ta' tmexxija  8 ġimgħat   5 ijiem
CFR                 30%         10%
MTTR                3 ijiem     4 sigħat
```

It-tim iwassal madwar 25 titjib/sena, b'valur medju ta' £8 000/ġimgħa ([spiża tad-dewmien](../spiża-tad-dewmien-fil-programmi-pubbliċi/)). Tnaqqis taż-żmien ta' tmexxija b'madwar 7,3 ġimgħat iġib 'il quddiem il-fluss tal-benefiċċju ta' kull titjib: 25 × 7,3 × 8 000 ≈ **£1 460 000/sena** ta' valur imwassal aktar kmieni. Fuq ir-rata ta' falliment: 25 × (0,30 − 0,10) = 5 bidliet fallimentari inqas/sena; kull bidla fallita fuq portal pubbliku tipikament tibdel stmat ta' 2 000 ċittadin lejn il-kanal tat-telefon b'£8,62 kontra 20p, spiża netta ta' madwar £8,42 × 2 000 ≈ £16 840 għal kull inċident, għalhekk l-evitar ta' 5 inċidenti jiffranka ≈ **£84 200/sena**. L-investiment fl-inġinerija tal-forniment jiġi vvalutat fl-istess munita bħal kull każ ieħor ta' valur pubbliku.

## Eżempju mfassal, kontinwazzjoni: l-affidabbiltà

Jekk il-portal jaħdem b'disponibbiltà ta' 97% minflok mat-target ta' 99,5%, u kull punt perċentwali ta' downtime jiġi mmudellat bħala 2% tat-talbiet mitlufa minħabba abbandun, is-servizz qed iwassal madwar 0,975 tal-benefiċċju mmudellat tiegħu ta' £2M/sena — skont tal-benefiċċju ta' £50 000/sena li dashboard tal-uptime pur qatt ma juri.

## Rabta mal-inġinerija tas-software

Il-metriċi DORA huma l-metriċi operattivi ta' servizz pubbliku f'libsa differenti: iż-żmien ta' tmexxija jikkorrispondi għall-[istandards tas-servizz u l-metriċi tat-tranżazzjonijiet](../standards-tas-servizz-u-metriċi-tat-transazzjonijiet/); ir-rata ta' falliment tal-bidliet tikkorrispondi għar-rati ta' xogħol mill-ġdid u ta' ilmenti; l-MTTR jikkorrispondi għal kemm iddum servizz statutorju mhux disponibbli għall-applikanti. It-tekniki ta' titjib jgħaddu fiż-żewġ direzzjonijiet għax it-tnejn huma sistemi ta' kju taħt restrizzjonijiet ta' responsabbiltà — ara [metriċi tal-fluss fil-forniment tal-gvern](../metriċi-tal-fluss-fil-forniment-tal-gvern/) għall-matematika tal-kju sottostanti. Innota wkoll is-sejba tad-DORA tal-2025 li l-adozzjoni tal-IA tikkorrelata ma' throughput ogħla imma stabbiltà *agħar* — intervent b'effikaċja u b'effetti sekondarji, li huwa eżattament l-analiżi tal-benefiċċju nett li jaħdem fuqha t-topiku tal-[produttività tal-IA](../il-produttività-tal-ia-fis-settur-pubbliku/) ta' dan il-grupp.

## Żbalji komuni

- **Manipulazzjoni tal-metriċi**: it-tnaffiħ tal-għadd ta' skjerament b'rilaxxi li ma jagħmlu xejn, jew l-esklużjoni tal-hotfixes mill-għadd tal-fallimenti tal-bidliet. Iddefinixxi l-avvenimenti b'mod daqstant preċiż kif l-istandard ta' servizz statutorju jiddefinixxi "tranżazzjoni b'suċċess".
- **Tabelli tal-klassifika bejn dipartimenti**: il-klasters tad-DORA jqabblu prattiki ta' forniment, mhux servizzi b'profili ta' riskju differenti; sistema ta' ħlas tat-taxxa kklassifikata "għolja" tista' tkun il-postura t-tajba fejn "elitarja" tkun bla ħsieb minħabba r-rekwiżiti ta' assigurazzjoni.
- **Jiġi ottimizzat metriku wieħed biss**: il-veloċità mingħajr rata ta' falliment tal-bidliet hija l-kompromess klassiku bejn throughput u instabbiltà — irrapporta l-erba' metriċi flimkien, mhux bħala punteġġ wieħed.

## Sorsi

- DORA research and the annual *Accelerate State of DevOps Report*. <https://dora.dev/>
- Forsgren N, Humble J, Kim G, *Accelerate: The Science of Lean Software and DevOps*, IT Revolution Press, 2018.
- Cabinet Office, Digital Efficiency Report, 2012.
- DORA, 2025 State of AI-assisted Software Development report. <https://dora.dev/dora-report-2025/>
