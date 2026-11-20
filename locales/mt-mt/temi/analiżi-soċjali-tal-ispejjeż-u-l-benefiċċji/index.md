# Analiżi soċjali tal-ispejjeż u l-benefiċċji (SCBA)

L-analiżi soċjali tal-ispejjeż u l-benefiċċji tikkonverti kull spiża u benefiċċju ta' politika jew
programm — tas-suq u mhux tas-suq — f'unità monetarja komuni, tiskonta l-flussi futuri għal valur
preżenti, u tnaqqashom minn xulxin biex tipproduċi numru wieħed: din il-proposta ttejjeb is-soċjetà,
u b'kemm?

## Għaliex hu importanti

L-SCBA hija l-metodu kwantitattiv awtomatiku fil-każ ekonomiku tal-[valutazzjoni tal-Green Book](../valutazzjoni-tal-green-book/):
il-gwida ta' HM Treasury titlob li l-proposti juru valur soċjali preżenti nett (NPSV) pożittiv
kull meta l-benefiċċji jistgħu jiġu mmonetizzati b'mod kredibbli, bl-użu tal-ħila tal-ħlas bħala
prinċipju bażiku ta' valutazzjoni għal oġġetti mhux tas-suq
(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>,
Chapter 5). Id-dixxiplina li timponi hija li l-analiżi "soċjali" tal-ispejjeż u l-benefiċċji mhijiex
l-istess eżerċizzju bħal valutazzjoni ta' investiment tas-settur privat: trid tinkludi spejjeż u
benefiċċji li jaqgħu fuq partijiet terzi li mhumiex parti mit-tranżazzjoni (esternalitajiet), trid
tuża [r-rata soċjali ta' skont](../rata-soċjali-ta-skont/) minflok spiża kummerċjali tal-kapital, u
għandha tapplika [l-ponderazzjoni distribuzzjonali](../ponderazzjoni-distributtiva/) fejn lira tfisser
aktar għal familja foqra milli għal waħda sinjura.

L-SCBA tfalli eżattament fejn jistennew il-kritiċi tagħha: oġġetti mingħajr analogu tas-suq — arja
nadifa, koeżjoni soċjali, il-valur ta' ħajja salvata — iridu jiġu mmonetizzati bil-metodi tal-[preferenza
ddikjarata](../valutazzjoni-bil-preferenza-ddikjarata/) jew tal-[preferenza żvelata](../valutazzjoni-bil-preferenza-żvelata/),
jew irid jinbena [prezz ombra](../prezzijiet-ombra/). Meta l-monetizzazzjoni tkun ikkontestata u mhux
sempliċement diffiċli, il-Green Book innifsu jirrakkomanda li terġa' lura għall-[analiżi tal-effettività
fl-ispiża](../analiżi-tal-kosteffettività-fil-gvern/) jew għall-[analiżi tad-deċiżjonijiet b'kriterji
multipli](../analiżi-ta-deċiżjonijiet-bħafna-kriterji/) minflok ma tiġi mġiegħla figura li ħadd ma jemmen fiha.

## Il-matematika

```
NPSV = Σ [t=0 sa T] (Benefiċċju_t − Spiża_t) / (1 + r)^t

fejn:
  Benefiċċju_t = il-benefiċċji mmonetizzati kollha fis-sena t, inklużi l-oġġetti mhux tas-suq
                 ivvalutati permezz ta' preferenza ddikjarata/żvelata jew prezz ombra
  Spiża_t      = l-ispejjeż mmonetizzati kollha fis-sena t, inkluża l-ispiża tal-opportunità
                 tar-riżorsi (ara ../opportunity-cost-in-public-spending/)
  r            = rata soċjali ta' skont (HM Treasury tiffissa 3,5% li tinżel
                 għal rati aktar baxxi lil hinn mis-sena 30, skont l-Anness A tal-Green Book)
  T            = il-perjodu ta' valutazzjoni

Proporzjon benefiċċju-spiża (BCR) = Σ PV(Benefiċċji) / Σ PV(Spejjeż)
```

BCR 'l fuq minn 1 (jew NPSV 'l fuq miż-żero) jindika valur soċjali nett. Il-kategoriji tal-valur
għall-flus tal-Green Book (kif użati fil-valutazzjoni tat-trasport u tal-infrastruttura) jikklassifikaw
il-firxiet tal-BCR: taħt 1,0 huwa valur fqir għall-flus, 1,0–1,5 baxx, 1,5–2,0 medju, 2,0–4,0 għoli,
u 'l fuq minn 4,0 għoli ħafna. L-analiżi tas-sensittività — li terġa' tmexxi l-NPSV taħt suppożizzjonijiet
pessimisti u ottimisti — hija obbligatorja, mhux fakultattiva, għax il-benefiċċji mmonetizzati mhux tas-suq
iġorru firxiet wiesgħa ta' inċertezza.

## Eżempju prattiku

**Awtorità lokali**: kunsill jivvaluta investiment ta' £3m f'netwerk ġdid tar-roti u tal-mixi matul
perjodu ta' valutazzjoni ta' 20 sena b'rata ta' skont ta' 3,5%.

```
Spejjeż: £3m kapitali fis-sena 0, £50 000/sena manutenzjoni (snin 1-20)
PV(manutenzjoni) ≈ £50 000 × 14,2 (fattur ta' annwalità ta' 20 sena b'3,5%) ≈ £710 000
PV(spejjeż) totali ≈ £3,71m

Benefiċċji (kollha mmonetizzati permezz ta' għodod ta' valutazzjoni ppubblikati mid-DfT/WHO):
  Benefiċċju tas-saħħa minn aktar attività fiżika: £180 000/sena
  Tnaqqis fl-assenteiżmu: £40 000/sena
  Tnaqqis tal-konġestjoni (inqas vjaġġi bil-karozza): £60 000/sena
  Fluss totali tal-benefiċċji: £280 000/sena
PV(benefiċċji) ≈ £280 000 × 14,2 ≈ £3,98m

NPSV = £3,98m − £3,71m = +£0,27m
BCR = 3,98 / 3,71 = 1,07 → valur għall-flus "baxx"
```

L-iskema tgħaddi l-limitu iżda biss b'differenza żgħira; analiżi tas-sensittività b'stima tal-benefiċċju
tas-saħħa 20% aktar baxxa (li tirrifletti inċertezza ġenwina fil-valutazzjoni tal-attività fiżika)
iddawwar il-BCR taħt 1,0, u eżattament għalhekk il-Green Book jitlob li t-tabella tas-sensittività
tiġi ppubblikata flimkien man-numru ewlieni, mhux biss l-istima ċentrali.

**Karità**: programm ta' prevenzjoni tal-mortalità tat-trabi li jiswa £500 000/sena jiġi evalwat
bil-valur ta' ħajja statistika (VSL) — prezz ombra, mhux prezz osservat tas-suq — ta' madwar
£2,1m (il-figura aġġornata tal-2023 ta' HM Treasury, innifisha derivata minn studji ta' preferenza
ddikjarata). Li tiġi evitata mewt waħda ta' tarbija fis-sena kontra spiża ta' £500 000 jagħti BCR ta' 4,2,
valur għall-flus "għoli ħafna" b'mod komdu — iżda r-riżultat kollu jistrieħ fuq il-figura tal-VSL,
u għalhekk kull SCBA li tuża l-VSL trid tiżvelaha bħala suppożizzjoni, mhux fatt.

## Rabta mal-inġinerija tas-software

L-SCBA hija l-qafas naturali għal deċiżjonijiet ta' investiment fi pjattaformi u infrastruttura
tas-software governattiv — it-tqabbil ta' pjattaforma kondiviża tal-identità ma' soluzzjonijiet
punt-b'punt dipartimentali, pereżempju, jitlob li jiġu mmonetizzati benefiċċji bħal spiża mnaqqsa tal-ewwel
reġistrazzjoni duplikata, frodi mnaqqsa, u ħin iqsar għas-servizz li waħedhom ma għandhom l-ebda prezz
tas-suq. L-inġiniera li jibnu s-servizz sottostanti għandhom jistennew li l-mexxejja tal-programm jitolbu
input għal din l-analiżi: spejjeż unitarji tat-tranżazzjonijiet (ara l-[ispiża għal kull tranżazzjoni](../spiża-għal-kull-tranżazzjoni/)),
volumi mistennija, u spejjeż ta' degradazzjoni/waqfien. Id-dixxiplina li l-aktar importanti li tiġi
importata: skonta l-benefiċċji futuri, semmi b'mod espliċitu l-linja bażi kontrofattwali (ara l-[analiżi
kontrofattwali](../analiżi-kontrofattwali/)), u qatt tippreżenta stima waħda mingħajr il-firxa tas-sensittività
tagħha.

## Żbalji komuni

- **Għadd doppju tal-benefiċċji.** Li jingħaddu kemm il-"ħin iffrankat" kif ukoll il-"produttività miksuba
  minn dak il-ħin" bħala linji ta' benefiċċju separati jegħleb il-każ; il-ħin iffrankat huwa l-benefiċċju,
  u l-użu sussegwenti tiegħu mhuwiex benefiċċju addizzjonali sakemm ma jkunx evidenzjat b'mod indipendenti.
- **Ommissjoni tal-ispejjeż spostati.** Skema li tċaqlaq il-konġestjoni minn triq għal oħra, jew
  il-frodi minn kanal għal ieħor, ma ħolqitx il-benefiċċju nett li jimplika l-NPSV ewlieni tagħha —
  ara l-[ispostament u l-attribuzzjoni](../spostament-u-attribuzzjoni/).
- **Użu ta' rata privata ta' skont.** L-applikazzjoni ta' spiża kummerċjali tal-kapital (ngħidu 8–10%) minflok
  ir-rata soċjali ta' skont tonqos sistematikament mill-valur tal-benefiċċji pubbliċi fit-tul bħal dawk
  tas-saħħa u tal-ambjent — ara r-[rata soċjali ta' skont](../rata-soċjali-ta-skont/).
- **Monetizzazzjoni ta' dak li mhux ikkontestat u tħassir ta' dak ikkontestat.** Jekk żewġ terzi tal-benefiċċju
  ta' proposta huma iffrankar ta' effiċjenza mmonetizzat b'kunfidenza u terz huwa qligħ ta' benesseri
  mmonetizzat bi twaqqif dgħajjef, l-NPSV ewlieni jħallat bil-kwiet numru solidu ma' wieħed artab;
  irrapportahom separatament.

## Sorsi

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Chapter 5.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury. "Green Book supplementary guidance: value of a statistical life." 2023.
  <https://www.gov.uk/government/publications/green-book-supplementary-guidance-value-of-a-statistical-life>
- Department for Transport. "TAG unit A1.1: cost-benefit analysis." Transport Analysis Guidance.
  <https://www.gov.uk/guidance/transport-analysis-guidance-tag>
