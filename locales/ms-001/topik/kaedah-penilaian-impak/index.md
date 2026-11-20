# Kaedah Penilaian Impak

Kaedah penilaian impak ialah reka bentuk statistik dan eksperimen yang digunakan untuk menganggar apa yang sebenarnya disebabkan oleh sesuatu dasar atau program, berbeza daripada apa yang akan berlaku juga — ujian terkawal rawak (RCT), perbezaan-dalam-perbezaan (difference-in-differences), pemadanan skor kecenderungan (propensity score matching), dan reka bentuk diskontinuiti regresi (regression discontinuity) ialah empat yang paling lazim digunakan dalam dasar awam UK. Ia wujud kerana kebanyakan intervensi kerajaan tidak boleh diuji dalam makmal: anda tidak boleh merawakkan pekan mana mendapat laluan bas baharu sebagaimana anda boleh merawakkan pesakit mana mendapat ubat, jadi kaedah ini meminjam logik kausal yang sama tanpa sentiasa memerlukan penugasan rawak.

## Mengapa ini penting

Magenta Book HM Treasury, Annex A tentang kaedah kuasi-eksperimen, ialah panduan kanonik kerajaan UK untuk memilih antara reka bentuk ini, dan badan seperti Education Endowment Foundation dan What Works Centre for Local Economic Growth melembagakan hierarki bukti yang dibina di sekitarnya — RCT di mana perawakan boleh dilaksanakan dan beretika, reka bentuk kuasi-eksperimen di mana ia tidak. Pilihan kaedah bukan perkara teknikal yang difikirkan kemudian: ia menentukan sama ada penilaian boleh menjawab "adakah program menyebabkan ini?" atau hanya "adakah ini berlaku selepas program bermula?", iaitu soalan yang sama yang [analisis kontrafaktual](../analisis-kontrafaktual/) dibina untuk memaksa pengamal bertanya sebelum sebarang penilaian ditugaskan.

## Matematiknya

```
RCT:
  Impak = purata(hasil | kumpulan rawatan) − purata(hasil | kumpulan kawalan)
  (sah kerana penugasan kepada rawatan adalah rawak)

Perbezaan-dalam-perbezaan (DiD):
  Impak = [hasil_selepas(dirawat) − hasil_sebelum(dirawat)]
        − [hasil_selepas(kawalan) − hasil_sebelum(kawalan)]
  (memerlukan andaian "aliran selari": kumpulan dirawat dan kawalan akan bergerak
   bersama jika tiada intervensi)

Pemadanan skor kecenderungan (PSM):
  1. Anggar P(rawatan = 1 | kovariat X) bagi setiap unit → skor kecenderungan
  2. Padankan unit dirawat dengan unit tidak dirawat yang mempunyai skor kecenderungan serupa
  3. Impak = purata(hasil | dirawat) − purata(hasil | kawalan dipadankan)

Reka bentuk diskontinuiti regresi (RDD):
  Impak = lompatan dalam hasil yang diperhatikan pada ambang kelayakan,
          membandingkan unit sedikit di atas berbanding sedikit di bawah had
```

## Contoh yang diselesaikan

**Pihak berkuasa tempatan (perbezaan-dalam-perbezaan untuk program keluarga bermasalah)**: hasilnya ialah kehadiran sekolah. Kawasan dirawat bergerak daripada 84% kepada 89% kehadiran (+5 mata peratusan) sepanjang tempoh program; kawasan setanding tetapi tidak dirawat bergerak daripada 85% kepada 87% (+2 mata peratusan) dalam tempoh yang sama. Anggaran impak DiD: 5 − 2 = +3 mata peratusan yang boleh diatribusikan kepada program. Diterapkan pada kohort 2,000 murid di kawasan dirawat, ini selaras dengan kira-kira 60 murid tambahan (3% × 2,000) mencapai kategori kehadiran lebih tinggi, ekstrapolasi yang harus dilaporkan dengan kaveat aliran selarinya, bukan sebagai bilangan kepala yang tepat.

**Badan amal (pemadanan skor kecenderungan untuk badan amal kebolehkerjaan)**: 300 peserta program dipadankan dengan 300 individu daripada set data pentadbiran yang lebih besar menggunakan skor kecenderungan yang dibina daripada umur, sejarah pekerjaan terdahulu, dan tahap kelayakan. Kadar pekerjaan dua belas bulan: kumpulan dirawat dipadankan 46%, kumpulan perbandingan dipadankan 33%. Anggaran impak PSM: 46% − 33% = +13 mata peratusan yang boleh diatribusikan kepada program, bersyarat tiada pengelirau tidak diperhatikan (seperti motivasi) yang mendorong penyertaan dan hasil.

## Kaitan dengan kejuruteraan perisian

Sama ada mana-mana reka bentuk ini boleh dilaksanakan kemudian bergantung banyak pada keputusan kejuruteraan data yang dibuat awal. RDD memerlukan pemboleh ubah larian yang direkodkan dengan tepat dan ambang kelayakan yang benar-benar bersih; DiD memerlukan data panel setanding dari semasa ke semasa bagi kedua-dua kawasan dirawat dan perbandingan, bermakna cantuman konsisten merentas sistem dan tahun; PSM memerlukan data kovariat garis asas yang kaya yang ditangkap sebelum rawatan, bukan dibina semula selepas itu. Model data yang direka bersama [teori perubahan](../teori-perubahan/) dan [model logik](../model-logik/) sejak awal — menangkap kovariat garis asas, tarikh, dan rekod layak kumpulan perbandingan — ialah yang memungkinkan penilaian impak yang ketat kemudian, dan bukan kelam-kabut pasca-hoc yang mahal. Lihat [penilaian impak vs penilaian proses](../penilaian-impak-berbanding-penilaian-proses/) untuk soalan pelengkap yang tidak dijawab oleh kaedah ini sendiri.

## Perangkap

- **Memaksa RCT di mana tidak boleh dilaksanakan atau tidak beretika**, atau sebaliknya tidak pernah mempertimbangkan reka bentuk kuasi-eksperimen apabila peluang sebenar untuknya — had dasar, pelancaran berperingkat — tersedia dan tidak digunakan.
- **Mengabaikan andaian aliran selari dalam DiD.** Jika kawasan perbandingan sudah menyimpang daripada kawasan dirawat sebelum intervensi, perbandingan dua titik itu tercemar; semak pra-aliran, bukan sekadar sebelum/selepas.
- **Memadankan hanya pada kovariat yang diperhatikan dalam PSM.** Pemilihan yang tidak diperhatikan, seperti motivasi peserta, boleh membiaskan anggaran walaupun kovariat yang diperhatikan seimbang.
- **Manipulasi pemboleh ubah larian dalam RDD.** Jika orang boleh mempengaruhi skor mereka supaya jatuh sedikit dalam ambang kelayakan, diskontinuiti tidak lagi mengasingkan kesan kausal.

## Sumber

- HM Treasury, Magenta Book (2020), Annex A: Quasi-Experimental Methods. <https://www.gov.uk/government/publications/the-magenta-book>
- What Works Centre for Local Economic Growth, evidence review methodology. <https://whatworksgrowth.org/>
- Education Endowment Foundation, evaluation guidance. <https://educationendowmentfoundation.org.uk/>
