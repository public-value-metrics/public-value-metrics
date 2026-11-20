# Analisis Kontrafaktual: Ngira-ira Apa sing Bakal Kedadéan Tanpa Intervensi

Kontrafaktual (counterfactual) iku perkiraan apa sing bakal kedadéan yèn ora ana intervensi. Tanpa iku, owah-owahan sing diamati sawisé program diluncuraké ora bisa dibédakaké saka owah-owahan sing bakal kedadéan senajan tanpa program — ora ana kontrafaktual, ora ana bukti efek, senajan angka sadurungé-lan-sawisé katon sepira nyakinaké. Magenta Book HM Treasury nganggep nyusun kontrafaktual sing bisa dipercaya minangka tugas metodologis utama ing evaluasi dampak, luwih penting tinimbang pilihan rancangan tunggal liyané.

## Kenapa penting

"Kejahatan mudhun 15% ing taun sawisé kita ngenalaké program" dudu bukti program kuwi mujarab kajaba kowé ngerti apa sing bakal kedadéan marang kejahatan tanpa program — kejahatan bisa waé mudhun 20% senajan tanpa program amarga tren ékonomi utawa demografi sing ora gandhèng, tegesé program kuwi nyatané ndadèkaké kahanan luwih elek dibandhingaké kontrafaktual, senajan angka mentahé nambah apik. Iki kesalahan analitis paling umum ing klaim dampak sektor publik lan sosial: nganggep pambandhingan sadurungé/sawisé minangka bukti sebab-akibat. Magenta Book gamblang yèn evaluasi dampak ana kanggo mangsuli pitakonan kontrafaktual — "apa bédané sing digawé intervensi iki?" — lan mangsuli iku mbutuhaké ngira-ira, dudu mung njlentrehaké, jagad sing ora kedadéan.

Cara sing béda-béda nyusun kontrafaktual kanthi tingkat keyakinan sing béda, lan pedoman evaluasi pamaréntah ngurutaké miturut iku. Uji kontrol acak (randomized controlled trials, RCT), ing ngendi individu utawa wilayah ditugasaké kanthi acak kanggo nampa intervensi utawa ora, ngasilaké kontrafaktual paling kuwat amarga pengacakan njamin klompok perlakuan lan kontrol béda, rata-rata, mung ing nampa intervensi. Cabinet Office lan What Works Network wis ngajokaké RCT ing saindhenging kabijakan publik Britania Raya wiwit laporan "Test, Learn, Adapt" 2012 déning Behavioural Insights Team, persis amarga rancangan sing luwih lemah rentan marang confounding — beda sing diamati bisa nggambaraké sapa sing milih melu, dudu efek program. Yèn pengacakan ora praktis utawa ora etis (kaya sing asring kanggo program kanthi hak statutori, utawa kanggo owah-owahan kabijakan sak populasi), Magenta Book nata hirarki gamblang alternatif sing luwih lemah nanging isih migunani: klompok pembanding sing dicocogaké, rancangan difference-in-differences, regression discontinuity ing sakubenging ambang kelayakan, lan, minangka pilihan pungkasan, pambandhingan sadurungé/sawisé prasaja — kanthi jelas ditandhani minangka wujud bukti paling lemah, rentan mbingungaké efek program karo efek kabèh liyané sing owah ing wektu sing padha.

## Petungan

Pigura kontrafaktual, bisa ditrapaké ing kabèh cara:

```
Dampak sing dikira-kira = Outcome(kanthi intervensi) − Outcome(kontrafaktual: tanpa intervensi)

DUDU:
Dampak sing dikira-kira ≠ Outcome(sawisé) − Outcome(sadurungé)   [nyampurké wektu karo perlakuan]
```

Difference-in-differences, salah siji rancangan kuasi-eksperimental paling umum ing evaluasi pamaréntah, misahaké efek perlakuan kanthi ngurangi owah-owahan sadurungé/sawisé klompok pembanding dhéwé:

```
Estimasi DiD = [Outcome(dilakoni, sawisé) − Outcome(dilakoni, sadurungé)]
             − [Outcome(pembanding, sawisé) − Outcome(pembanding, sadurungé)]
```

Iki ngilangi tren apa waé sing umum kanggo loro klompok (contoné owah-owahan ékonomi nasional sing nrajang kabèh wong), ninggalaké mung owah-owahan diferensial sing bisa dikaitaké marang intervensi.

## Conto petungan

**Program ketenagakerjaan, sadurungé/sawisé (rancangan lemah)**: skema dhukungan kerja nglaporaké yèn pagawéan peserta munggah saka 40% dadi 55% ing setaun — kesimpulan naif "+15 poin persentase amarga program."

**Program padha, difference-in-differences (rancangan luwih kuwat)**: klompok pembanding sing dicocogaké saka wong-wong sing padha nanging ora melu, dijupuk saka pasar tenaga kerja lokal padha, nuduhaké pagawéan munggah saka 38% dadi 47% ing setaun padha (pemulihan ékonomi nasional lagi lumaku).

```
Owah-owahan klompok dilakoni:    55% − 40% = +15 poin persentase
Owah-owahan klompok pembanding:  47% − 38% = +9 poin persentase

Estimasi DiD (efek program sejati) = 15 − 9 = +6 poin persentase
```

Efek sing bisa dikaitaké kanthi jujur yaiku 6 poin persentase, dudu 15 — luwih saka separo pangapikan sadurungé/sawisé sing katon bakal kedadéan senajan tanpa program, didorong déning pemulihan ékonomi padha sing ngangkat klompok pembanding.

**Regression discontinuity, ambang kelayakan**: skema hibah mung kasedhiya kanggo usaha kanthi kurang saka 50 karyawan. Mbandhingaké outcome usaha sing mung ing ngisor ambang (45–49 karyawan, layak) karo usaha sing mung ing ndhuwuré (50–54 karyawan, ora layak) nyedhiyakaké kontrafaktual sing bisa dipercaya amarga usaha ing loro sisih watesan administratif sewenang-wenang liyané padha — ambang, dudu karakteristik usaha dhasar apa waé, sing nemtokaké kelayakan. Bédané outcome rata-rata £2.000 antarané loro klompok, sing diamati mung ing ambang, bisa dikaitaké marang hibah kanthi keyakinan luwih gedhé tinimbang pambandhingan prasaja kabèh sing layak lawan kabèh sing ora layak (sing béda sacara sistematis ing ukuran).

## Gegayutan karo rekayasa piranti lunak

Pamikiran kontrafaktual kudu mbentuk cara sistem pelacakan dampak lan pipa evaluasi kanggo piranti lunak pamaréntah lan sektor sosial dirancang:

- Pasangna panangkepan klompok pembanding ing sistem wiwit awal — nyathet sapa sing layak nanging ora kadaftar, utawa kohort non-peserta sing dicocogaké — tinimbang nambahaké sawisé program wis mlaku lan mung ana data sadurungé/sawisé.
- Yèn pengacakan bisa dilakokaké (peluncuran bertahap, layanan digital sing diaktifaké kanggo sawetara pangguna sadurungé liyané), instrumentasi sistem kanggo njaga penugasan acak minangka kolom sing bisa ditakon; peluncuran bertahap kanthi ora sengaja ngrusak nilai evaluasiné dhéwé yèn urutan penugasan ora dicathet.
- Iki cara dhasar ing mburi [cara evaluasi dampak](../metode-evaluasi-dampak/) lan sing mbédakaké saka [evaluasi dampak lawan evaluasi proses](../evaluasi-dampak-lan-evaluasi-proses/), sing terakhir takon apa program dikirim kaya sing dirancang, dudu apa nyebabaké efek.
- [Additionality lan deadweight](../additionality-lan-deadweight-nyingkirake-asil-sing-bakal-kedadéan-senajan-tanpa-program/) lan [displacement lan atribusi](../pamindhahan-lan-atribusi/) loro-lorone, ing dhasaré, pitakonan kontrafaktual — deadweight iku "apa outcome tartamtu iki bakal dadi tanpa intervensi", ditrapaké ing tingkat panyesuaian, dudu rancangan evaluasi lengkap.

## Jebakan

- **Nganggep sadurungé/sawisé minangka bukti sebab-akibat.** Iki kesalahan paling umum lan paling akibaté ing pelaporan dampak publik lan sektor sosial; owah-owahan sadurungé/sawisé nyampurké efek program karo saben hal liya sing owah ing periode padha.
- **Nganggo klompok pembanding sing béda sacara sistematis saka klompok sing dilakoni.** Klompok pembanding sing dicocogaké kudu bener-bener padha ing karakteristik sing relevan (deleng hirarki cara [analisis kontrafaktual](../analisis-kontrafaktual-ngira-ira-apa-sing-bakal-kedadéan-tanpa-intervensi/) ing Magenta Book); mbandhingaké peserta program (sing milih melu, lan asring luwih termotivasi) karo non-peserta (sing ora) ngrisikoaké bias seleksi nyamar minangka efek program.
- **Ngrusak kesempatan pengacakan liwat rancangan pangiriman sing elek.** Peluncuran bertahap utawa acak mung njaga nilai evaluasiné yèn penugasan bener-bener acak lan dicathet — ngidinaké manajer lokal milih sapa sing dhisik ngalahaké tujuan.
- **Ngaku presisi kakehan saka rancangan lemah.** Estimasi sadurungé/sawisé kudu dipratelakaké minangka indikatif, dudu ukuran efek sing diukur; hirarki bukti Magenta Book ana supaya kekuwatan klaim cocog karo kekuwatan rancangan sing ngasilaké.

## Sumber

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020), and its
  supplementary guide on quasi-experimental methods.
  <https://www.gov.uk/government/publications/the-magenta-book>
- Cabinet Office / Behavioural Insights Team, "Test, Learn, Adapt: Developing Public Policy with
  Randomized Controlled Trials" (2012).
- What Works Network, standards of evidence guidance. <https://www.gov.uk/guidance/what-works-network>
- Angrist JD, Pischke J-S. *Mostly Harmless Econometrics: An Empiricist's Companion*. Princeton
  University Press, 2009 (referensi standar kanggo cara difference-in-differences lan regression
  discontinuity).
