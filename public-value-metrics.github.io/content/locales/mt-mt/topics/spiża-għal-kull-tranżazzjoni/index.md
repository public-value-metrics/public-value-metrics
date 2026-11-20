# Spiża għal kull tranżazzjoni

L-ispiża għal kull tranżazzjoni hija l-metrika ewlenija tal-ekonomija tal-unità għal servizz diġitali tal-gvern: l-ispiża totali biex jitwassal kanal, maqsuma bl-għadd ta' tranżazzjonijiet lesti permezz tiegħu. Kienet iċ-ċifra ewlenija fuq il-Performance Platform l-antik tal-GOV.UK, u hija n-numru li ffinanzja għaxar snin ta' investiment "digital by default" — u għalhekk preċiżament hija wkoll il-metrika l-aktar suxxettibbli għall-manipulazzjoni.

## Għaliex hu importanti

Id-Digital Efficiency Report tal-Cabinet Office tal-2012 poġġa l-paragun tal-ispiża tal-kanali f'termini li baqgħu: it-tranżazzjonijiet diġitali nstabu li jiswew madwar 20 darba inqas milli bit-telefon u madwar 50 darba inqas minn wiċċ imb wiċċ, bi ċifri illustrattivi tal-gvern lokali ta' madwar £0.15 għal kull tranżazzjoni fuq il-web kontra £2.83 bit-telefon u £8.62 wiċċ imb wiċċ. Dak il-paragun uniku sar il-ġustifikazzjoni għad-disinn mill-ġdid tal-25 servizz eżemplari msemmija fil-Government Digital Strategy, u għal kull każ tan-negozju dipartimentali li minn dak iż-żmien ikkwota l-iffrankar mit-tibdil tal-kanali. Iċ-ċifra hija verament utli bħala sinjal ta' ordni ta' kobor, iżda l-proporzjon jiddependi għalkollox fuq dak li jiġi magħdud fuq kull naħa: spiża ġusta tal-kanal tat-telefon tinkludi l-persunal tal-call centre, il-kuntratt tat-telefonija, it-taħriġ u l-istat; spiża diġitali ġusta tinkludi l-hosting, is-salarji kontinwi tat-tim tal-prodott, il-ħin tad-desk tal-appoġġ għal vjaġġi li falla, u l-kanal ta' assisted-digital meħtieġ mill-punt 5 tal-[digital-service-standard](../l-istandard-tas-servizz-diġitali/). Neħħi biżżejjed minn dawn mill-ġenb diġitali u kull servizz jidher rħis.

## Il-matematika

```
Spiża għal kull tranżazzjoni = spiża totali allokata tal-kanal / tranżazzjonijiet lesti

L-ispiża totali allokata tal-kanal għandha tinkludi:
  + hosting u infrastruttura
  + spiża tat-tim tal-prodott/inġinerija/appoġġ (amortizzata)
  + spiża tal-kontenut u tad-disinn tas-servizz (amortizzata)
  + spiża tal-appoġġ assisted-digital / aċċessibbiltà
  + spiża tad-domanda tal-falliment (utenti li jfallu fid-diġitali u jirrikorru għat-telefon)
  − spiża tal-bini darba waħda hija amortizzata fuq il-ħajja mistennija tas-servizz,
    mhux mgħoddija kollha bħala spiża fl-ewwel sena

It-trick komuni tal-kontabilità:
  "Spiża marġinali għal kull tranżazzjoni" (hosting biss, ladarba mibni) hija kkwotata
  bħallikieku kienet "spiża medja għal kull tranżazzjoni" (spiża totali inkluż
  it-tim li jkompli jibni u jmexxih). It-tnejn jistgħu jvarjaw b'10x jew aktar
  għal servizz b'tim ta' forniment kbir u attiv.
```

## Eżempju prattiku

**Servizz ta' tiġdid tat-taxxa tal-vettura**: 4 miljun tranżazzjoni/sena.

```
Ċifra marġinali biss (it-trick):
  Hosting + ipproċessar tal-ħlas biss = £180,000/sena
  Spiża għal kull tranżazzjoni = 180,000 / 4,000,000 = £0.045
  → ċifra prinċipali kkwotata f'każ tan-negozju

Ċifra b'kull spiża inkluża (l-onesta):
  Hosting + ħlas                       £180,000
  Tim tal-prodott/inġinerija (8 FTE)   £720,000
  Desk tal-appoġġ (tranżazzjonijiet falluti/mistoqsija)   £310,000
  Linja telefonika assisted-digital    £140,000
  Total                                £1,350,000
  Spiża għal kull tranżazzjoni = 1,350,000 / 4,000,000 = £0.3375

Iċ-ċifra b'kull spiża inkluża hija xorta madwar 8x irħas mill-komparatur
tal-kanal tat-telefon ta' £2.83 mid-Digital Efficiency Report — iffrankar
reali u difiżibbli — iżda 7.5x ogħla miċ-ċifra marġinali biss
ikkwotata fil-verżjoni stenografika. It-tnejn huma "veri"; waħda biss
tista' titqabbel mal-ispiża tal-kanal tat-telefon li kontrha qed titqiegħed.
```

## Rabta mal-inġinerija tas-software

L-ispiża għal kull tranżazzjoni hija l-post fejn id-deċiżjonijiet tal-arkitettura jsiru numru finanzjarju: servizz li jagħmel auto-scale nadif u jeħtieġ ftit intervent manwali jbaxxi din iċ-ċifra maż-żmien; wieħed li jiġġenera volum għoli ta' biljetti ta' appoġġ minn stati ta' żball konfużi jgħollihha irrispettivament mill-effiċjenza tal-hosting. Hija l-metrika kumpanja naturali tal-punt 10 tal-[digital-service-standard](../l-istandard-tas-servizz-diġitali/) ("iddefinixxi kif jidher is-suċċess, u ppubblika d-dejta tal-prestazzjoni") u tal-[service-standards-and-transaction-metrics](../standards-tas-servizz-u-metriċi-tat-transazzjonijiet/), li jistabbilixxi s-sett aktar sħiħ ta' KPIs li fih tinsab din iċ-ċifra. Titma' wkoll direttament il-kalkoli tal-[channel-shift-savings](../iffrankar-mit-tibdil-tal-kanali/) u għandha tiġi rrikonċiljata mal-[total-cost-of-ownership-in-government-it](../spiża-totali-tas-sjieda-fl-it-governattiv/) biex l-ispejjeż ġenerali tal-pjattaforma u tas-servizzi kondiviżi ma jinqatgħux bil-kwiet.

## Żbalji komuni

- **Spiża marġinali mlibbsa bħala spiża medja**: li tiġi kkwotata spiża tal-hosting biss ladarba servizz ikun mibni, bl-omissjoni tat-tim kontinwu li jżommu, jiżviluppah u jappoġġjah — ara l-eżempju prattiku hawn fuq.
- **Esklużjoni tal-ispiża assisted-digital**: kanal mhuwiex konformi mad-"digital by default", u l-ispiża vera tiegħu ma tinqabadx, jekk il-fallback tat-telefon/tal-karta meħtieġ mill-[digital-inclusion](../inklużjoni-diġitali/) jiġi kkalkulat separatament jew injorat.
- **Li tiġi injorata d-domanda tal-falliment**: tranżazzjonijiet li jibdew diġitali u jfallu, u jiġġeneraw telefonata jew formola tal-karta xorta waħda, huma spiża tal-kanal diġitali, mhux tal-kanal li jaqbad il-falliment.
- **Li jitqabblu tranżazzjonijiet ta' kumplessità differenti bejn il-kanali**: it-telefonati jimmaniġġjaw b'mod sproporzjonat il-każijiet diffiċli (dipendenti multipli, korrezzjoni ta' żbalji, applikanti vulnerabbli); li titqabbel spiża medja tat-telefon ma' spiża medja diġitali jesaġera l-proporzjon sakemm it-taħlita tat-tranżazzjonijiet ma tiġix imqabbla.

## Sorsi

- Cabinet Office, Digital Efficiency Report (2012). <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- GOV.UK Service Manual, service standard, point 10: define what success looks like. <https://www.gov.uk/service-manual/service-standard/point-10-define-success-publish-performance-data>
- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
