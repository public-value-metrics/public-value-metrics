# Il-valur tal-IA fil-gvern

Il-valur tal-IA fil-gvern huwa r-rekwiżit li sistema tal-IA użata f'servizz pubbliku trid tilħaq l-istess livell ta' valur għall-flus u ta' valur pubbliku bħal kull deċiżjoni oħra dwar nefqa — mhux livell aktar baxx għax hi ġdida, u mhux aktar għoli għax tibża' minnha. Hija l-mistoqsija li tim tal-forniment irid ikun jista' jwieġeb qabel, mhux wara, li tiġi rilaxxata karatteristika tal-IA: dan jipproduċi aktar valur milli jiswa, wara li l-assigurazzjoni, is-sorveljanza u r-riskju jiġu ssaldati b'mod onest?

## Għaliex hu importanti

Iċ-Central Digital and Data Office (CDDO) tar-Renju Unit ippubblika l-Generative AI Framework for Government fl-2024, abbażi ta' gwida interim preċedenti minn Ġunju 2023, u strutturaha madwar għaxar prinċipji li jkopru x'inhi l-IA ġenerattiva, l-implikazzjonijiet etiċi tagħha, is-sigurtà tal-għodod, il-kontrolli tal-assigurazzjoni tal-kwalità, il-ġestjoni taċ-ċiklu sħiħ tal-ħajja tal-IA ġenerattiva, l-identifikazzjoni ta' każijiet ta' użu ġenwini, il-kollaborazzjoni bejn id-dipartimenti tal-gvern, it-trasparenza, il-ħiliet u l-governanza. L-insistenza tal-qafas fuq "kontroll uman sinifikanti" u fuq il-ġestjoni taċ-ċiklu sħiħ tal-ħajja teżisti għax il-każijiet tan-negozju tal-proġetti tal-IA għandhom mod speċifiku ta' falliment li nefqa oħra fl-IT m'għandhiex: iċ-ċifra prinċipali tal-produttività ta' pilota hija faċli biex tinħoloq u faċli biex tiġi eżaġerata, għax titkejjel qabel ma jitqies il-piż tal-verifika, tal-korrezzjoni u tas-sorveljanza li l-għodda toħloq. Flimkien mal-qafas, l-Algorithmic Transparency Recording Standard (ATRS) jeżiġi li l-korpi pubbliċi jippubblikaw rekord standardizzat — għan, dejta użata, prestazzjoni, ittestjar tal-ġustizzja, arranġamenti ta' sorveljanza umana — għal għodod algoritmiċi li għandhom influwenza sinifikanti fuq deċiżjonijiet dwar individwi, u dan jagħmel l-ispiża tal-assigurazzjoni ta' sistema tal-IA kwistjoni ta' rekord pubbliku, mhux stima interna li tim jista' jaqbeż bil-kwiet.

## Il-matematika

L-adozzjoni tal-IA tiġi evalwata bħala żieda ma', mhux bħala sostituzzjoni għall-evalwazzjoni standard tal-[valur għall-flus](../valur-għall-flus/), bit-termini speċifiċi għall-IA magħmula espliċiti minflok mitwija f'ċifra waħda ta' "qligħ fil-produttività":

```
Valur nett ta' sistema tal-IA =
    qligħ fil-produttività (ħin iffrankat × spiża sħiħa tal-persunal)
  − spiża tal-liċenzja/komputazzjoni
  − spiża tal-verifika u tas-sorveljanza umana (iċċekkjar tal-output tal-IA
    qabel ma jittieħed passi fuqu — din ma tonqosx għal żero anki għal
    għodod maturi)
  − spiża ta' dokumentazzjoni tal-ATRS u ta' monitoraġġ kontinwu
  − spiża aġġustata għar-riskju tad-dannu minn żbalji, preġudizzju jew
    alluċinazzjoni, ippeżata skont min iġorr dak id-dannu
    (distributional-weighting)

Ċifra tal-produttività ta' pilota li tonqos it-terminu tas-sorveljanza ma
tistax titqabbel ma' linja bażi tal-ispiża tan-negozju bħas-soltu li diġà
tinkludi reviżjoni umana ekwivalenti — ara ai-productivity-in-the-public-sector
għad-dixxiplina aktar sħiħa tal-kejl tal-produttività li minnha tissellef.
```

## Eżempju prattiku

**Awtorità lokali li tuża għodda tal-IA ġenerattiva biex tfassal l-ewwel tweġibiet għal mistoqsijiet rutinarji dwar it-taxxa tal-kunsill**: 25,000 mistoqsija/sena, li qabel kienu jiġu mmaniġġjati kompletament minn uffiċjali tal-każijiet b'medja ta' 14-il minuta/mistoqsija, bi spiża sħiħa tal-persunal ta' £34/siegħa.

```
Spiża tal-linja bażi (mingħajr IA):
  25,000 × (14/60) × £34 = £198,333/sena

Pretensjoni prinċipali tal-pilota: l-IA tfassal tweġiba f'90 sekonda,
l-uffiċjal tal-każ "biss jirrevedi u jibgħat" — il-ħin ġdid pretiż huwa 3 minuti
  25,000 × (3/60) × £34 = £42,500/sena
  → iffrankar pretiż ta' £155,833/sena (jidher trasformattiv)

Ċifra sħiħa, imkejla wara 3 xhur ta' użu veru minflok fil-każijiet ta'
ttestjar magħżula bl-idejn tal-pilota:
  Ħin attwali ta' reviżjoni + korrezzjoni għal kull tweġiba: 6 minuti
  (id-drafts jeħtieġu editjar veru għal mistoqsijiet kumplessi jew
  sensittivi emozzjonalment)
  25,000 × (6/60) × £34 = £85,000/sena
  Spiża tal-liċenzja/komputazzjoni: £38,000/sena
  Dokumentazzjoni tal-ATRS u monitoraġġ trimestrali tal-preġudizzju/kwalità: £14,000/sena
  Spiża totali = 85,000 + 38,000 + 14,000 = £137,000/sena

Iffrankar reali = 198,333 − 137,000 = £61,333/sena — ġenwin u jkun jixraq
li jinżamm, imma ferm inqas minn nofs il-pretensjoni prinċipali tal-pilota,
u kellu bżonn kejl onest tal-ħin tas-sorveljanza, mhux dak tal-aqwa xenarju
tal-pilota, biex jinstab.
```

## Rabta mal-inġinerija tas-software

Hawnhekk jiltaqgħu [ai-productivity-in-the-public-sector](../il-produttività-tal-ia-fis-settur-pubbliku/) u dan is-suġġett: it-timijiet tal-inġinerija li jibnu karatteristiċi tal-IA f'servizzi pubbliċi huma sidien tal-istrumentazzjoni li tagħmel possibbli ċ-ċifra "reali" fl-eżempju prattiku — li jirreġistraw il-ħin attwali ta' reviżjoni, id-distanza tal-editjar bejn id-draft u t-tweġiba mibgħuta, u r-rata ta' eskalazzjoni, minflok jafdaw il-kundizzjonijiet tad-demo tal-pilota. Il-karatteristiċi tal-IA għandhom jiġu evalwati skont il-punt 9 tal-[digital-service-standard](../l-istandard-tas-servizz-diġitali/) (servizz sikur, privatezza tal-utent) u jiġu rreferuti b'mod inkroċjat ma' [public-sector-cybersecurity-value](../il-valur-taċ-ċibersigurtà-fis-settur-pubbliku/) fejn l-għodda tmiss dejta taċ-ċittadini, u kull sistema tal-IA b'influwenza sinifikanti fuq deċiżjonijiet dwar individwi teħtieġ rekord tal-ATRS qabel ma tista' titqies lesta għall-evalwazzjoni, bl-istess mod kif servizz jeħtieġ evalwazzjoni mgħoddija tal-[digital-service-standard](../l-istandard-tas-servizz-diġitali/) qabel ma jibda jaħdem.

## Żbalji komuni

- **IA-washing**: li awtomazzjoni eżistenti bbażata fuq regoli terġa' tiġi ttikkettata bħala "IA" biex jinkiseb finanzjament jew attenzjoni riżervati għall-adozzjoni tal-IA, mingħajr ir-riskji ta' preċiżjoni jew preġudizzju li verament jiġġustifikaw l-iskrutinju żejjed tal-qafas.
- **Li titkejjel il-produttività tal-pilota, mhux dik tal-produzzjoni**: il-piloti jaħdmu fuq każijiet tal-ittestjar magħżula b'reviżuri impenjati u attenti; il-produzzjoni taħdem fuq il-ħlitt kollu tal-każijiet bil-fastidju kollu b'reviżuri li, maż-żmien, jiżviluppaw preġudizzju tal-awtomazzjoni u jiċċekkjaw inqas l-outputs — it-tnejn ifixklu ċ-ċifra onesta tal-ispiża tas-sorveljanza.
- **Li titqaxxar ir-reġistrazzjoni fl-ATRS għax l-għodda "mhijiex verament teħid ta' deċiżjonijiet awtomatizzat"**: is-soll tal-istandard huwa influwenza sinifikanti fuq deċiżjoni dwar individwu, li ħafna mill-għodod tal-IA għall-abbozzar jew it-triage li jiffaċċjaw liċ-ċittadini jilħqu anki meta persuna teknikament tiffirma.
- **Li jiġi injorat l-impatt distributtiv tal-iżbalji**: ir-rata tal-iżbalji ta' sistema tal-IA mgħoddija bħala medja fost l-utenti kollha tista' taħbi rata ferm ogħla ta' żbalji jew preġudizzju għal gruppi speċifiċi; id-[distributional-weighting](../ponderazzjoni-distributtiva/) għandu jiġi applikat għat-terminu tad-dannu aġġustat għar-riskju, mhux biss għaċ-ċifra tal-preċiżjoni aggregata.

## Sorsi

- Central Digital and Data Office, Generative AI Framework for Government (2024). <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
- Algorithmic Transparency Recording Standard. <https://www.gov.uk/government/collections/algorithmic-transparency-recording-standard-hub>
- HM Treasury, Green Book: central government guidance on appraisal and evaluation. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-governent>
