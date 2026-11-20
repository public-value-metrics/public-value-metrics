# Metode Evaluasi Dampak

Metode evaluasi dampak yaiku desain statistik lan eksperimental sing digunakake kanggo ngira apa sing bener-bener disebabake sawijining kabijakan utawa program, beda karo apa sing bakal kedadean tanpa iku — randomized controlled trial (RCT), difference-in-differences, propensity score matching, lan regression discontinuity design yaiku papat sing paling akeh digunakake ing kabijakan publik Inggris. Metode-metode iki ana amarga umume intervensi pemerintah ora bisa dites ing laboratorium: sampeyan ora bisa ngacak kutha endi sing entuk rute bis anyar kaya sampeyan bisa ngacak pasien endi sing nampa obat, mula metode-metode iki nyilih logika kausal sing padha tanpa tansah mbutuhake penugasan acak.

## Kenapa penting

Magenta Book HM Treasury, Annex A babagan metode kuasi-eksperimental, yaiku pedoman kanonis pemerintah Inggris kanggo milih antarane desain-desain iki, lan lembaga kaya Education Endowment Foundation lan What Works Centre for Local Economic Growth nglembagakake hierarki bukti sing dibangun ing sekitar iku — RCT ing ngendi pengacakan bisa dilakoni lan etis, desain kuasi-eksperimental ing ngendi ora. Pilihan metode dudu pikiran susulan teknis: nemtokake apa evaluasi bisa njawab "apa program nyebabake iki?" utawa mung "apa iki kedadean sawise program diwiwiti?", pitakonan sing padha sing dirancang [analisis kontrafaktual](../analisis-kontrafaktual-ngira-ira-apa-sing-bakal-kedadéan-tanpa-intervensi/) kanggo meksa praktisi takon sadurunge evaluasi apa wae dikomisi.

## Petungan

```
RCT:
  Dampak = rata-rata(outcome | klompok perlakuan) − rata-rata(outcome | klompok kontrol)
  (sah amarga penugasan menyang perlakuan iku acak)

Difference-in-differences (DiD):
  Dampak = [outcome_sawise(perlakuan) − outcome_sadurunge(perlakuan)]
         − [outcome_sawise(kontrol) − outcome_sadurunge(kontrol)]
  (mbutuhake asumsi "parallel trends": perlakuan lan kontrol bakal obah bareng
   tanpa intervensi)

Propensity score matching (PSM):
  1. Prakirakake P(perlakuan = 1 | kovariat X) kanggo saben unit → propensity score
  2. Cocogna unit perlakuan karo unit tanpa perlakuan sing propensity score-e meh padha
  3. Dampak = rata-rata(outcome | perlakuan) − rata-rata(outcome | kontrol sing dicocogake)

Regression discontinuity design (RDD):
  Dampak = lompatan outcome sing diamati ing ambang kelayakan,
           mbandhingake unit sing mung ing ndhuwur versus mung ing ngisor wates
```

## Conto petungan

**Pemerintah daerah (difference-in-differences kanggo program kluwarga bermasalah)**: outcome yaiku kehadiran sekolah. Wilayah sing nampa perlakuan pindhah saka kehadiran 84% dadi 89% (+5 poin persentase) sajrone periode program; wilayah sing sepadan nanging ora nampa perlakuan pindhah saka 85% dadi 87% (+2 poin persentase) ing periode sing padha. Prakiraan dampak DiD: 5 − 2 = +3 poin persentase sing bisa diatribusikake marang program. Ditrapake marang kohort 2.000 murid ing wilayah perlakuan, iki cocog karo kira-kira 60 murid tambahan (3% × 2.000) sing tekan kategori kehadiran luwih dhuwur, ekstrapolasi sing kudu dilaporake nganggo caveat parallel-trends, dudu minangka headcount sing tepat.

**Amal (propensity score matching kanggo amal employability)**: 300 peserta program dicocogake karo 300 individu saka dataset administratif sing luwih gedhe nganggo propensity score sing dibangun saka umur, riwayat pagawean sadurunge, lan tingkat kualifikasi. Tingkat pagawean rolas sasi: klompok perlakuan sing dicocogake 46%, klompok pembanding sing dicocogake 33%. Prakiraan dampak PSM: 46% − 33% = +13 poin persentase sing bisa diatribusikake marang program, kanthi syarat ora ana confounder sing ora diamati (kayata motivasi) sing nyurung partisipasi lan outcome sekaligus.

## Gegayutan karo rekayasa piranti lunak

Apa salah siji desain iki bisa dilakoni mengko gumantung banget marang keputusan rekayasa data sing digawe awal. RDD butuh running variable sing dicathet kanthi akurat lan ambang kelayakan sing bener-bener resik; DiD butuh data panel sing sepadan sajrone wektu kanggo wilayah perlakuan lan pembanding, tegese join sing konsisten antar sistem lan taun; PSM butuh data kovariat baseline sing sugih sing dijupuk sadurunge perlakuan, dudu direkonstruksi sawise. Model data sing dirancang bebarengan karo [theory of change](../teori-owah-owahan-peta-sebab-akibat-saka-tujuan-dawa-mundur-menyang-kegiatan/) lan [logic model](../model-logika-kanggo-program-layanan-publik/) wiwit awal — nangkep kovariat baseline, tanggal, lan rekaman sing layak klompok-pembanding — iku sing ndadekake evaluasi dampak sing ketat bisa mengko, tinimbang rebutan post-hoc sing larang. Deleng [evaluasi dampak vs evaluasi proses](../evaluasi-dampak-lan-evaluasi-proses/) kanggo pitakonan pelengkap sing ora dijawab metode-metode iki piyambak.

## Jebakan

- **Meksa RCT ing ngendi ora layak utawa ora etis**, utawa kosok balene ora tau nimbang desain kuasi-eksperimental nalika kesempatan asli kanggo iku — wates kabijakan, rollout bertahap — kasedhiya lan ora digunakake.
- **Ngabaikake asumsi parallel-trends ing DiD.** Yen wilayah pembanding wis nyimpang saka wilayah perlakuan sadurunge intervensi, perbandingan rong titik iku kecemaran; priksa pre-trends, dudu mung sadurunge/sawise.
- **Mung nyocogake kovariat sing diamati ing PSM.** Seleksi sing ora diamati, kayata motivasi peserta, bisa nggawe prakiraan bias sanajan kovariat sing diamati seimbang.
- **Manipulasi running variable ing RDD.** Yen wong bisa mengaruhi skore supaya mung mlebu ing ambang kelayakan, diskontinuitas ora maneh ngisolasi efek kausal.

## Sumber

- HM Treasury, Magenta Book (2020), Annex A: Quasi-Experimental Methods. <https://www.gov.uk/government/publications/the-magenta-book>
- What Works Centre for Local Economic Growth, evidence review methodology. <https://whatworksgrowth.org/>
- Education Endowment Foundation, evaluation guidance. <https://educationendowmentfoundation.org.uk/>
