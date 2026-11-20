# Spiża tad-dewmien fil-programmi pubbliċi (CoD)

L-ispiża tad-dewmien hija l-valur pubbliku mitluf għal kull unità ta' ħin li programm, servizz jew bidla fis-sistema *għadu* mhux mwassal. Hija l-metrika ewlenija tal-pont f'dan il-grupp ta' suġġetti: tikkonverti "it-tnedija waqgħet lura sitt xhur" f'lire fil-ġimgħa, jew f'WELLBYs fil-ġimgħa, sabiex id-dewmien ikun jista' jiġi diskuss bl-istess munita tal-każ tan-negozju innifsu.

## Għaliex hu importanti

Ir-regola ta' Reinertsen — "jekk tkejjel ħaġa waħda biss, ikkwantifika l-Ispiża tad-Dewmien" — tgħaddi fil-gvern kważi mingħajr bidla, għax il-programmi pubbliċi huma esposti b'mod mhux tas-soltu għaliha: il-każijiet tan-negozju jiġu approvati kontra fluss ta' benefiċċju previst, iżda l-fluss jibda jiċċirkola biss mat-tnedija, u kull ġimgħa ta' dewmien hija ġimgħa ta' valur mitluf li ħadd ma jipprezzaha fir-reġistru tar-riskji. L-iskrutinju ripetut tan-National Audit Office tat-tnedija tal-Universal Credit (ara r-rapporti tagħha "Rolling Out Universal Credit", <https://www.nao.org.uk/>) juri l-mudell: id-dewmien fl-iskeda kien imsegwi u rrappurtat, iżda l-ispiża f'lire fil-ġimgħa li s-sistema riformata *għadha* ma tasalx lill-gruppi li jmiss ta' applikanti rarament kienet iddikjarata bħala ċifra prinċipali, avolja hija n-numru li kellu jmexxi l-prijoritizzazzjoni u l-eskalazzjoni. Mingħajr ċifra tas-CoD, programm ittardjat jidher bħal problema tal-iskeda għall-bord tal-forniment; b'waħda, hija problema ta' erożjoni tal-valur għall-uffiċjal responsabbli tal-kontijiet.

## Il-matematika

```
CoD = benefiċċju għal kull unità ta' ħin mitluf waqt li ma jkunx imwassal   (£/ġimgħa jew WELLBYs/ġimgħa)

Telf totali minn dewmien = CoD × tul tad-dewmien

Flussi ta' benefiċċju li jingħaddu għall-programmi pubbliċi:
  iffrankar li jirrilaxxa flus kontanti   (tnaqqis ta' frodi/żbalji, spejjeż temporanji evitati)
+ kapaċità mhux fi flus meħlusa  (sigħat ta' uffiċjali/ħaddiema tal-każijiet × spiża sħiħa)
+ benefiċċju ta' benessri        (WELLBYs × £13,000/WELLBY, gwida supplimentari tal-HMT Green Book
                             dwar il-benessri, prezzijiet tal-2019)
```

Għal servizzi li jiffaċċjaw liċ-ċittadini, iddenomina fil-benessri kif ukoll fil-flus — ara [snin tal-ħajja aġġustati għall-benessri](../snin-tal-ħajja-aġġustati-għall-benesseri/) għall-unità sottostanti, u [spiża ta' opportunità fin-nefqa pubblika](../l-ispiża-tal-opportunità-fl-infiq-pubbliku/) għal dak li l-lira ttardjata setgħet tiffinanzja alternattivament.

## Eżempju prattiku

**Awtorità lokali**: titjib tas-sistema tal-benefiċċju tad-djar inaqqas l-iżball ta' ħlas żejjed b'£150/talba/sena fuq 20,000 talba attiva.

```
Benefiċċju annwali = 150 × 20,000 = £3,000,000/sena
CoD = 3,000,000 / 52 ≈ £57,700/ġimgħa
Dewmien ta' 12-il xahar fl-implimentazzjoni jiswa 52 × 57,700 ≈ £3,000,000 f'żbalji evitabbli.
```

**Aġenzija tal-gvern ċentrali**: servizz ta' evalwazzjoni tal-benefiċċju tad-diżabilità, imwassal sitt xhur (26 ġimgħa) aktar tard milli ppjanat, ifisser li 200,000 applikant/sena jistennew medja ta' tliet ġimgħat itwal għal deċiżjoni. Kull ġimgħa żejda ta' inċertezza finanzjarja hija mmudellata bħala effett ta' −0.0018 WELLBY (punt tas-sodisfazzjon fil-ħajja):

```
Telf ta' WELLBY għal kull applikant = 3 × 0.0018 = 0.0054
Telf annwali ta' WELLBY = 200,000 × 0.0054 = 1,080 WELLBYs/sena
CoD_benessri = 1,080 / 52 ≈ 20.8 WELLBYs/ġimgħa
CoD_flus = 20.8 × £13,000 ≈ £270,000/ġimgħa ta' valur tal-benessri
```

Dewmien ta' 26 ġimgħa għalhekk "jiswa" madwar 540 WELLBY — madwar £7 miljun bil-valutazzjoni tal-benessri tal-Green Book — u b'hekk id-data tat-tnedija mitlufa terġa' tiġi ffurmata bħala avveniment ta' ġid taċ-ċittadini, mhux nota f'qiegħ il-paġna tal-ġestjoni tal-proġetti.

## Rabta mal-inġinerija tas-software

CoD hija dik li tagħmel il-[metriki DORA](../metriċi-dora-għall-valur-pubbliku/) u l-[metriki tal-fluss](../metriċi-tal-fluss-fil-forniment-tal-gvern/) finanzjarjament leġibbli: il-lead time fil-pipeline × CoD huwa flus (jew benessri) maħruqa fil-kodi qabel ma qatt jaslu għand iċ-ċittadin. B'mod konkret:

- **Prijoritizzazzjoni**: ikklassifika backlog skont CoD ÷ tul minflok skont l-anzjanità tal-partijiet interessati — l-analogu fl-inġinerija tas-software tar-rekwiżit tal-Green Book li l-għażliet jiġu evalwati skont il-valur, mhux skont min qed jitlobhom.
- **Akkwist**: ċiklu ta' akkwist ta' qafas ta' 12–18-il xahar għandu CoD; li jiġi evalwat jibdel il-każ tal-urġenza għal rotot aċċellerati, u jitma' direttament f'deċiżjonijiet ta' [ibni jew ixtri](../ibni-jew-ixtri-fil-gvern/) fejn il-ħin biex jinkiseb il-valur huwa fattur li jiddeċiedi.
- **Każ tal-benefiċċji**: kull ċifra tas-CoD ikkwotata fl-approvazzjoni għandha terġa' titfaċċa fir-[realizzazzjoni tal-benefiċċji](../ir-realizzazzjoni-tal-benefiċċji/) — jekk l-ispiża tad-dewmien kienet reali, il-benefiċċju aċċellerat għandu jkun jista' jitkejjel wara t-tnedija.

## Żbalji komuni

- **Li tiġi assunta CoD lineari**: xi servizzi pubbliċi għandhom valur bil-forma ta' skadenza (data ta' konformità statutorja — il-CoD tinfaqa' għal livelli ta' riskju ta' infurzar wara d-data, kważi żero qabel) minflok rata ġimgħajja bla xkiel. Ikklassifika l-profil tal-urġenza qabel timmultiplika.
- **CoD fuq outputs li ħadd ma jeħtieġ**: id-dewmien għandu spiża biss jekk dak li ma ġiex imwassal għandu valur; sistema li ħadd mhu se juża għandha CoD żero kemm jekk tkun tard.
- **Għadd doppju ta' dewmien u skont**: ir-[rata soċjali ta' skont](../rata-soċjali-ta-skont/) diġà tipprezza ż-żmien fuq orizzonti ta' evalwazzjoni ta' diversi snin; CoD hija l-verżjoni operazzjonali, fi ħdan l-orizzont, għal ġimgħat u xhur. Uża CoD għal dewmien fl-iskeda, bidla fl-NPV għal ri-fażar ta' diversi snin.

## Sorsi

- Reinertsen DG, *The Principles of Product Development Flow*, Celeritas Publishing, 2009.
- HM Treasury, Green Book supplementary guidance: wellbeing. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>
- National Audit Office, reports on Universal Credit rollout. <https://www.nao.org.uk/>
