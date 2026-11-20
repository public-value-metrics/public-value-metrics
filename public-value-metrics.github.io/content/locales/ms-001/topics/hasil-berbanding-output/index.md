# Hasil berbanding Output

Output ialah produk langsung yang boleh dibilang daripada sesuatu aktiviti — ia wujud sebaik sahaja penyampaian
berlaku, tanpa mengira apa kesannya. Hasil (outcome) ialah perubahan yang menyusul bagi orang, tempat atau sistem
yang terlibat. "500 orang menghadiri bengkel mencari kerja" ialah output: ia benar walaupun tiada seorang pun
daripada mereka mendapat kerja. "Prospek pekerjaan 500 orang bertambah baik" ialah tuntutan hasil, dan ia
memerlukan bukti perubahan, bukan sekadar bukti kehadiran — kekeliruan yang menghasilkan lebih banyak laporan
geran yang mengelirukan berbanding hampir mana-mana kesilapan pengukuran lain dalam sektor ini.

## Mengapa ini penting

Magenta Book HM Treasury dan pembiaya seperti National Lottery Community Fund kedua-duanya memerlukan pelaporan
hasil secara khusus kerana output ialah apa yang dilaporkan program secara lalai: ia murah untuk dibilang, sentiasa
ada, dan sentiasa kelihatan positif. Kiraan output sama sekali tidak pernah boleh menurun akibat program gagal —
lebih banyak sesi yang disampaikan sentiasa "lebih", sedangkan hasil boleh mendedahkan bahawa sesuatu program
tidak berfungsi. National Audit Office berulang kali mengkritik program kerajaan kerana melaporkan tahap aktiviti
seolah-olah ia bukti kejayaan; sistem perisian yang hanya memudahkan pelaporan output mengukuhkan perkara ini
secara lalai, kerana output tidak memerlukan pengumpulan data susulan manakala hasil memerlukannya.

## Matematiknya

Tiada formula, tetapi ada ujian yang boleh dipercayai untuk mengelaskan sesuatu metrik:

```
Ujian output: adakah ia boleh dibilang pada titik penyampaian, benar walaupun penerima tidak terjejas?
Ujian hasil:  adakah ia memerlukan perbandingan sebelum/selepas atau dengan/tanpa untuk bermakna?

Jika sesuatu nombor boleh benar tanpa sebarang manfaat kepada sesiapa, ia ialah output.
```

Ini berada dalam rantaian [model logik](../model-logik/) yang lebih luas dan bergantung pada hubungan hasil yang
ditakrifkan dalam [teori perubahan](../teori-perubahan/); menukar hasil kepada wang menggunakan kaedah dalam
[pulangan sosial atas pelaburan](../pulangan-sosial-atas-pelaburan/).

## Contoh yang diselesaikan

**Pihak berkuasa tempatan (sokongan pekerjaan)**: output — 500 orang menghadiri bengkel mencari kerja. Hasil —
pada susulan 12 bulan, 140 daripada 500 itu (28%) bekerja secara berterusan (6+ bulan). Kumpulan perbandingan
dengan ciri yang serupa tetapi tanpa akses kepada program mempunyai kadar pekerjaan garis dasar 15% dalam tempoh
yang sama. Peningkatan hasil bersih: 28% − 15% = 13 mata peratusan, jadi dianggar 500 × 0.13 = 65 orang tambahan
bekerja yang jika tidak tidak akan bekerja — hasil yang boleh dikaitkan, berbeza daripada angka kehadiran 500
mahupun kiraan pekerjaan mentah 140.

**Badan amal (badan amal literasi)**: output — 1,200 sesi bacaan disampaikan kepada 300 kanak-kanak. Hasil —
purata umur bacaan bertambah baik 8 bulan dalam tempoh 6 bulan, berbanding garis dasar perkembangan semula jadi
yang dijangka iaitu 6 bulan dalam tempoh 6 bulan. Perolehan hasil bersih: 8 − 6 = 2 bulan peningkatan umur bacaan
tambahan bagi setiap kanak-kanak yang boleh dikaitkan dengan program, bukan angka penuh 8 bulan.

## Kaitan dengan kejuruteraan perisian

Log peristiwa dan sistem transaksi menginstrumentasikan output hampir secara automatik — paparan halaman, sesi,
tiket ditutup, temu janji ditempah — kerana ia dijana oleh sistem yang menjalankan tugasnya. Hasil memerlukan
model data yang menangkap individu yang sama pada masa kemudian berbanding garis dasar atau perbandingan, yang
mesti direka dengan sengaja: tinjauan susulan, rekod pentadbiran berpaut atau kohort perbandingan. Alat pelaporan
yang hanya menyokong yang pertama secara senyap akan mengarahkan organisasi ke arah pelaporan output sahaja tanpa
mengira apa yang diminta oleh pembiaya. Lihat [model logik](../model-logik/) untuk kedudukan hasil dalam rantaian
akauntabiliti, [kos bagi setiap hasil](../kos-setiap-hasil/) untuk menukar perbezaan ini kepada metrik kos seunit,
dan [KPI sektor awam](../kpi-sektor-awam/) untuk corak pemilihan metrik yang lebih luas.

## Perangkap

- **Melaporkan output seolah-olah ia hasil.** "500 orang hadir" membayangkan manfaat tanpa menunjukkannya;
  labelkan kehadiran sebagai output secara jelas.
- **Tiada garis dasar atau kumpulan perbandingan.** Angka hasil tanpa kontrafaktual — lihat
  [analisis kontrafaktual](../analisis-kontrafaktual/) — tidak dapat memisahkan kesan program daripada apa yang
  akan berlaku juga.
- **Mengoptimumkan untuk metrik yang dibiayai.** Apabila pembiayaan dikaitkan dengan isi padu output, pasukan
  penyampaian secara rasional memaksimumkan kehadiran dan bukannya perubahan yang berkekalan, satu mod kegagalan
  hukum Goodhart.
- **Pembasuhan hasil.** Melabelkan semula metrik output dengan bahasa berbunyi hasil ("hasil penglibatan: 500
  hadirin") tanpa sebarang pengukuran susulan di belakangnya.

## Sumber

- HM Treasury, Magenta Book (2020). <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, outcomes reporting guidance. <https://www.tnlcommunityfund.org.uk/>
- National Audit Office, value-for-money report methodology. <https://www.nao.org.uk/>
