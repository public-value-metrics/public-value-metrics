# Dejn tekniku bħala erożjoni tal-valur pubbliku

Id-dejn tekniku huwa l-metafora ta' Ward Cunningham tal-1992 għall-ispiża futura impliċita ta' deċiżjonijiet ta' kodifikazzjoni konvenjenti fl-imgħoddi: **kapital** (ix-xogħol ta' rimedju dovut) u **imgħax** (it-tfixkil kontinwu li jeżerċita fuq il-konsenja). F'proprjetà tal-IT governattiva legaċi, dak l-imgħax jitħallas direttament mill-valur pubbliku — konsenja aktar bil-mod ta' bidliet statutorji, rati ogħla ta' falliment fis-servizzi li jiffaċċjaw liċ-ċittadini, u grupp dejjem iżgħar ta' nies li jistgħu jmissu s-sistema b'mod sikur.

## Għaliex hu importanti

Sistemi mainframe u tal-era tal-COBOL fid-dipartimenti tal-gvern tar-Renju Unit — HMRC u DWP fost l-aktar imsemmijin — iġorru riskju mniżżel sew u dejjem akbar li l-National Audit Office innota ripetutament, inkluż fir-rapport tiegħu *Digital Transformation in Government* (<https://www.nao.org.uk/>): pjattaformi li qed jixjieħu li huma għaljin biex jinbidlu, dejjem aktar diffiċli biex jiġu mħarsa, u jiddependu minn forza tax-xogħol speċjalizzata li qed tirtira aktar malajr milli qed tiġi sostitwita. B'differenza minn backlog tas-settur privat, dan id-dejn jinsab direttament bejn iċ-ċittadini u d-drittijiet statutorji tagħhom — magna tal-kalkolu tal-benefiċċji li ma tistax tinbidel b'mod sikur hija restrizzjoni fuq il-konsenja tal-politika, mhux sempliċement inkonvenjent tal-inġinerija. Ir-restart tal-2013 tal-programm tal-IT tal-Universal Credit, meta l-National Audit Office sab li l-bini oriġinali ma kienx se jwassal valur għall-flus u parti sostanzjali mill-assi tas-software kellha titħassar, huwa eżempju kanoniku ta' dejn tekniku mhux ipprezzat li jilħaq programm pubbliku ħaj u viżibbli ministerjalment.

## Il-matematika

```
Kapital SQALE = Σ fuq ksur (ħin ta' rimedju) × rata tal-ispiża tal-iżviluppatur
Proporzjon tad-dejn tekniku (TDR) = spiża tar-rimedju / spiża tal-iżvilupp mill-ġdid × 100
                    (gradi ta' SonarQube: A ≤5%, B ≤10%, C ≤20%, D ≤50%)

Imgħax (in-numru li jiġġustifika t-tmiem tad-dejn):
  imgħax/sena = Δ veloċità tal-konsenja × valur għal kull unità ta' veloċità
              + Δ rata ta' inċidenti li jiffaċċjaw liċ-ċittadini × spiża għal kull inċident
              + primju tal-ħiliet speċjalizzati × għadd ta' impjegati affettwati
Każ ta' ħlas lura = PV(imgħax evitat matul l-orizzont) − spiża tar-rimedju
               (skontat bir-rata soċjali ta' skont tal-Green Book, ara
               social-discount-rate.md)
```

Il-kapital jiddikjara l-obbligu; l-imgħax huwa dak li jagħmel il-każ tal-investiment quddiem kumitat tal-kontijiet pubbliċi.

## Eżempju prattiku

Magna ta' ipproċessar ta' talbiet ta' 250 000 linja miktuba f'4GL legaċi. Bl-użu tal-benchmark CAST Appmarq ta' madwar $3,61 ta' kapital ta' dejn tekniku għal kull linja tal-kodiċi (≈£2,85 b'konverżjoni tipika):

```
Kapital ≈ 250 000 × £2,85 ≈ £712 500
TDR ≈ 16% (grad C)
```

Imgħax imkejjel: id-dipartiment iżomm tliet kuntrattar speċjalizzati b'primju ta' 40% fuq ir-rati ta' kuljum ta' inġiniera anzjani standard għax il-ħiliet interni ġew imnaqqsa — £180 000/sena żejda fuq tim ta' sitt persuni. Is-sistema tikkawża wkoll erba' waqfiet kbar tal-ipproċessar/sena, kull wieħed jissospendi d-deċiżjonijiet għal madwar 5 000 applikant u jirrimandahom lill-contact centre b'madwar £25/telefonata:

```
Imgħax ≈ £180 000 (primju tal-ħiliet)
       + 4 × 5 000 × £25 = £500 000 (spiża ta' kuntatti rrimandati)
       ≈ £680 000/sena
```

Rimedju immirat tal-moduli li jaħdmu l-agħar jiswa £1 200 000 u huwa mmudellat li jnaqqas l-imgħax b'70%:

```
Tnaqqis tal-imgħax = 0,70 × 680 000 = £476 000/sena
Ħlas lura ≈ 1 200 000 / 476 000 ≈ 2,5 snin
```

L-immirar jimporta: li jissewwa kodiċi li rari jinmess ma jixtri xejn, għax l-imgħax jikkonċentra fejn il-frekwenza tal-bidliet u d-densità tad-dejn it-tnejn jilħqu l-quċċata.

## Rabta mal-inġinerija tas-software

L-inkwadratura tal-valur pubbliku li ttella' każ ta' dejn tekniku 'l fuq minn "il-kodiċi huwa qadim": esprimi l-proprjetà legaċi bħala inventarju ta' fejn il-kapaċità ta' konsenja mitlufa hija kkonċentrata, u qabbad dan b'mod espliċitu mal-[ispiża totali tas-sjieda](../spiża-totali-tas-sjieda-fl-it-governattiv/), peress li l-imgħax huwa spiża operattiva li tappartjeni fil-linja tat-TCO kemm jekk il-finanzi qatt talbuha kemm jekk le. Sistemi mgħobbija bid-dejn iġorru wkoll espożizzjoni sproporzjonata tas-[sigurtà ċibernetika](../il-valur-taċ-ċibersigurtà-fis-settur-pubbliku/), għax il-kadenza tal-patching u d-densità tad-dejn huma kkorrelatati — sistema legaċi li ma tistax tiġi ppatchjata hija dejn tekniku li l-imgħax tiegħu jitħallas f'riskju ta' inċident u mhux f'liri. U kull kompromess bejn rimedju u feature huwa nnifsu deċiżjoni ta' [spiża tat-dewmien](../spiża-tad-dewmien-fil-programmi-pubbliċi/): li titħallas lura d-dejn idewwem il-bidla statutorja li jmiss, li għandha CoD tagħha li trid titqies kontra l-imgħax iffrankat.

## Żbalji komuni

- **Rapportar tal-kapital biss**: stima kbira u ta' biża' ta' rimedju mingħajr figura ta' imgħax ma tiġġustifika xejn quddiem min japprova n-nefqa.
- **Figuri tad-dejn ġġenerati mill-għodda meħuda litteralment**: l-iskanners ta' stil SQALE jgħoddu ksur tar-regoli; jaqbżu t-tip għali ta' dejn — deċiżjonijiet arkitetturali u regoli tan-negozju legaċi mhux dokumentati — filwaqt li jiffjaggjaw affarijiet żgħar.
- **"Il-kitba mill-ġdid tevita kollox"**: il-programmi ta' sostituzzjoni jridu jgħaddu mill-istess dixxiplina bħal kull każ ieħor ta' negozju — spiża kontrofattwali, probabbiltà ta' suċċess, u skont — mhux eżenzjoni minnha, kif uriet ir-restart tal-2013 tal-Universal Credit.
- **Utopiżmu ta' dejn żero**: il-livell ottimali ta' dejn mhuwiex żero; id-dejn huwa lieva li xtrat konsenja aktar kmieni. Il-mistoqsija ħajja hija dejjem ir-rata tal-imgħax, mhux jekk id-dejn jeżistix xejn.

## Sorsi

- Cunningham W, "The WyCash Portfolio Management System", OOPSLA experience report, 1992.
- CAST, technical debt estimation (Appmarq benchmark). <https://www.castsoftware.com/glossary/technical-debt-estimation>
- National Audit Office, *Digital Transformation in Government* and reports on Universal Credit. <https://www.nao.org.uk/>
