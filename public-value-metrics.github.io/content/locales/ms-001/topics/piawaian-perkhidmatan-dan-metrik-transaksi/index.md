# Piawaian Perkhidmatan dan Metrik Transaksi

GOV.UK Service Standard ialah senarai semak 14 titik kerajaan UK untuk membina dan mengendalikan perkhidmatan
digital awam, dan ia dipasangkan dengan set kecil metrik transaksi kuantitatif yang wajib — kos bagi setiap
transaksi, kadar penamatan, pengambilan digital dan kepuasan pengguna — yang mesti diterbitkan oleh pasukan bagi
setiap perkhidmatan kerajaan pusat yang aktif. Bersama-sama, piawaian dan metrik itu ialah pengkhususan operasi
harian bagi rangka kerja nilai awam dan KPI yang lebih luas dalam repositori ini, yang disasarkan terus kepada
pasukan penyampaian perisian.

## Mengapa ini penting

Service Standard, yang diselenggarakan dalam service manual GOV.UK, memerlukan setiap penilaian pada satu titik
masa (alpha, beta, live) bagi perkhidmatan digital kerajaan menunjukkan — antara 14 titiknya — bahawa pasukan
memahami keperluan pengguna, bekerja dalam pasukan berbilang disiplin, mengulang dan menambah baik dengan kerap,
dan *menilai alat, sistem dan cara kerja*. Dari segi sejarah ini bersama Performance Platform awam yang mana
setiap perkhidmatan aktif menerbitkan data transaksinya secara terbuka; platform itu sejak itu telah dihentikan,
tetapi kewajipan asas untuk mengukur dan menerbitkan empat metrik teras ini berterusan melalui panduan "measuring
success" service manual. Sebab ini berbeza daripada papan pemuka KPI perisian generik ialah metrik ini direka
secara jelas sebagai satu model ekonomi yang berkaitan, bukan empat skor bebas: keseluruhan kes penjimatan bagi
kerajaan digital — Digital Efficiency Report Government Digital Service mendapati transaksi digital kira-kira 20
kali lebih murah daripada telefon dan sekitar 50 kali lebih murah daripada bersemuka bagi perkhidmatan kerajaan
tempatan yang setanding — hanya terealisasi jika kadar penamatan kekal tinggi dan pengambilan digital benar-benar
meningkat, dan bukannya sekadar menambah saluran murah di samping saluran mahal yang tidak berubah.

## Matematiknya

```
Kos bagi setiap transaksi = jumlah kos operasi perkhidmatan / bilangan transaksi selesai
Kadar penamatan          = transaksi selesai / transaksi dimulakan × 100
Pengambilan digital      = transaksi saluran digital / transaksi semua saluran × 100
Kepuasan pengguna        = % berpuas hati + sangat berpuas hati, tinjauan 5 mata dalam perkhidmatan

Penjimatan anjakan saluran = isi padu transaksi × anjakan pengambilan × (kos bagi setiap transaksi
                        pada saluran lama − kos bagi setiap transaksi secara digital)

Kos permintaan kegagalan = (1 − kadar penamatan) × transaksi yang dicuba secara digital ×
                        kos saluran sandaran yang kemudian digunakan oleh pengguna itu
```

## Contoh yang diselesaikan

**Perkhidmatan pembaharuan lesen kerajaan pusat sebagai ilustrasi**, 2 juta transaksi/tahun, kini 65% telefon
(£3.00/transaksi) dan 35% digital (£0.30/transaksi), kadar penamatan 80%. Reka bentuk semula mengikut Service
Standard 14 titik meningkatkan pengambilan digital kepada 60% dan penamatan kepada 92%:

```
Penjimatan anjakan pengambilan = 2,000,000 × 0.25 × (3.00 − 0.30) = £1,350,000/tahun

Kos permintaan kegagalan, sebelum:
  2,000,000 × 0.35 × (1 − 0.80) × £3.00 = £420,000/tahun (mereka yang tinggalkan beralih ke telefon)

Kos permintaan kegagalan, selepas:
  2,000,000 × 0.60 × (1 − 0.92) × £3.00 = £288,000/tahun

Penjimatan bersih permintaan kegagalan = £420,000 − £288,000 = £132,000/tahun

Jumlah penjimatan tahunan ≈ £1,350,000 + £132,000 = £1,482,000/tahun
```

Aritmetik ini menjelaskan mengapa kadar penamatan bukan metrik sekunder: tanpa peningkatan daripada 80% kepada
92%, penjimatan anjakan pengambilan akan sebahagiannya ditarik semula oleh permintaan kegagalan yang
menghalakan pengguna digital yang kecewa terus kembali ke saluran telefon yang mahal.

## Kaitan dengan kejuruteraan perisian

Keempat-empat metrik ini ialah contoh berfungsi bagi papan pemuka kos-akibat: satu metrik kos dipisahkan
daripada tiga metrik hasil/kualiti, sengaja tidak pernah diruntuhkan menjadi satu skor — disiplin yang sama yang
dihujahkan dalam [KPI sektor awam](../kpi-sektor-awam/). Bagi jurutera ini terpecah kepada kerja konkrit yang
boleh dimiliki: kadar penamatan ialah masalah instrumentasi corong, dan setiap titik pengguna
meninggalkan perjalanan itu, pada dasarnya, boleh dikesan dan dibaiki; kos bagi setiap transaksi memerlukan
perakaunan kos seunit yang sebenar termasuk kos dibantu kakitangan dan saluran kertas, bukan sekadar perbelanjaan
pengehosan awan (lihat [kos bagi setiap transaksi](../kos-setiap-transaksi/) dan
[jumlah kos pemilikan dalam IT kerajaan](../jumlah-kos-pemilikan-dalam-it-kerajaan/)); dan pengambilan digital
ialah metrik ekuiti yang berpakaian kecekapan — rakyat yang tidak boleh atau tidak mahu beralih saluran
secara tidak seimbang terdiri daripada warga emas, orang kurang upaya atau yang terkecuali secara digital, jadi
penutupan saluran yang agresif menukar "penjimatan" menjadi mudarat akses (lihat
[keterangkuman digital](../inklusi-digital/) dan [penjimatan anjakan saluran](../penjimatan-peralihan-saluran/)).
Piawaian 14 titik itu sendiri ialah spesifikasi proses di sebalik nombor ini — lihat
[piawaian perkhidmatan digital](../standard-perkhidmatan-digital/) untuk piawaian penuh, dan
[metrik kepuasan rakyat](../metrik-kepuasan-warganegara/) untuk cara angka kepuasan di sini berkait dengan
pengukuran kepercayaan yang lebih luas.

## Perangkap

- **Pengambilan diperoleh dengan menutup saluran alternatif**: menutup talian telefon menaikkan peratusan
  pengambilan digital secara aritmetik sambil menimbunkan permintaan kegagalan ke atas apa-apa saluran yang
  tinggal (selalunya laluan digital dibantu atau bersemuka yang lebih mahal); sentiasa ukur kos keseluruhan
  sistem, bukan nisbah sahaja.
- **Mengukur kadar penamatan dari langkah kedua corong**: memulakan kiraan "dimulakan" selepas titik keciciran
  sebenar yang pertama menyedapkan kadar penamatan dan menyembunyikan kehilangan terbesar yang boleh dibaiki.
- **Kos bagi setiap transaksi tanpa sokongan digital dibantu**: kos unit digital sahaja yang mengabaikan masa
  kakitangan yang digunakan untuk membantu pengguna yang tidak boleh berdikari memperkecilkan kos sebenar saluran
  itu.
- **Menerbitkan metrik tanpa takrifan bersama merentas perkhidmatan**: "transaksi" dan "selesai" membawa makna
  berbeza merentas pasukan perkhidmatan yang berbeza melainkan takrifan diseragamkan dan diversi, menjadikan
  perbandingan merentas perkhidmatan tidak boleh dipercayai.

## Sumber

- GOV.UK Service Manual, "The Service Standard." <https://www.gov.uk/service-manual/service-standard>
- GOV.UK Service Manual, "Measuring Success — Data You Must Publish."
  <https://www.gov.uk/service-manual/measuring-success/data-you-must-publish>
- GOV.UK, "Digital Efficiency Report."
  <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
