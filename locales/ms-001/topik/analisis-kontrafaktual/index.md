# Analisis Kontrafaktual

Kontrafaktual ialah anggaran tentang apa yang akan berlaku jika tiada intervensi. Tanpanya, perubahan yang
diperhatikan selepas program dilancarkan tidak dapat dibezakan daripada perubahan yang akan berlaku juga —
tiada kontrafaktual, tiada bukti kesan, walau semeyakinkan mana angka sebelum-dan-selepas itu kelihatan.
Magenta Book HM Treasury menganggap pembinaan kontrafaktual yang boleh dipercayai sebagai tugas
metodologi pusat dalam penilaian impak, lebih penting daripada mana-mana pilihan reka bentuk tunggal yang lain.

## Mengapa ini penting

"Jenayah jatuh 15% pada tahun selepas kami memperkenalkan program" bukan bukti program itu berkesan melainkan
anda tahu apa yang akan berlaku kepada jenayah tanpanya — jenayah mungkin jatuh 20% juga kerana trend
ekonomi atau demografi yang tidak berkaitan, bermakna program itu sebenarnya menjadikan keadaan lebih buruk
berbanding kontrafaktual, walaupun angka mentah bertambah baik. Ini ialah kesilapan analisis yang paling lazim
dalam tuntutan impak sektor awam dan sektor sosial: mengelirukan perbandingan sebelum/selepas dengan bukti
sebab-akibat. Magenta Book jelas bahawa penilaian impak wujud untuk menjawab soalan kontrafaktual — "apakah
perbezaan yang dibuat oleh intervensi ini?" — dan bahawa menjawabnya memerlukan menganggarkan, bukan sekadar
menerangkan, dunia yang tidak berlaku.

Kaedah berbeza membina kontrafaktual dengan tahap keyakinan berbeza, dan panduan penilaian kerajaan
meranking mengikutnya. Ujian terkawal rawak (RCT), di mana individu atau kawasan ditugaskan secara rawak untuk
menerima intervensi atau tidak, menghasilkan kontrafaktual yang paling kukuh kerana pengrawakan memastikan
kumpulan rawatan dan kawalan berbeza, secara purata, hanya dalam menerima intervensi itu. Cabinet Office dan
What Works Network telah mempromosikan RCT merentas dasar awam UK sejak laporan 2012 "Test, Learn, Adapt" oleh
Behavioural Insights Team, tepat kerana reka bentuk yang lebih lemah terdedah kepada pengeliruan — perbezaan
yang diperhatikan mungkin mencerminkan siapa yang memilih untuk mengambil bahagian, bukan kesan program. Apabila
pengrawakan tidak praktikal atau tidak beretika (seperti yang sering berlaku bagi program dengan hak berkanun,
atau perubahan dasar seluruh populasi), Magenta Book menggariskan hierarki jelas alternatif yang lebih lemah
tetapi masih berguna: kumpulan perbandingan sepadan, reka bentuk perbezaan-dalam-perbezaan, diskontinuiti
regresi sekitar ambang kelayakan, dan, sebagai pilihan terakhir, perbandingan sebelum/selepas yang mudah —
ditandakan dengan jelas sebagai bentuk bukti paling lemah, mudah mengelirukan kesan program dengan kesan
segala-galanya yang berubah pada masa yang sama.

## Matematiknya

Rangka kontrafaktual, terpakai merentas semua kaedah:

```
Impak yang dianggarkan = Hasil(dengan intervensi) − Hasil(kontrafaktual: tanpa intervensi)

BUKAN:
Impak yang dianggarkan ≠ Hasil(selepas) − Hasil(sebelum)   [mengelirukan masa dengan rawatan]
```

Perbezaan-dalam-perbezaan, salah satu reka bentuk kuasi-eksperimen yang paling lazim dalam penilaian kerajaan,
mengasingkan kesan rawatan dengan menolak perubahan sebelum/selepas kumpulan perbandingan itu sendiri:

```
Anggaran DiD = [Hasil(dirawat, selepas) − Hasil(dirawat, sebelum)]
             − [Hasil(perbandingan, selepas) − Hasil(perbandingan, sebelum)]
```

Ini membuang sebarang trend yang sama kepada kedua-dua kumpulan (cth. anjakan ekonomi nasional yang
menjejaskan semua orang), meninggalkan hanya perubahan pembezaan yang boleh dikaitkan dengan intervensi.

## Contoh yang diselesaikan

**Program pekerjaan, sebelum/selepas (reka bentuk lemah)**: skim sokongan pekerjaan melaporkan bahawa pekerjaan
peserta meningkat daripada 40% kepada 55% dalam setahun — kesimpulan naif "+15 mata peratusan disebabkan oleh
program."

**Program yang sama, perbezaan-dalam-perbezaan (reka bentuk lebih kukuh)**: kumpulan perbandingan sepadan
yang terdiri daripada bukan peserta serupa, diambil daripada pasaran buruh tempatan yang sama, menunjukkan
pekerjaan meningkat daripada 38% kepada 47% dalam tahun yang sama (pemulihan ekonomi nasional sedang berlaku).

```
Perubahan kumpulan dirawat:       55% − 40% = +15 mata peratusan
Perubahan kumpulan perbandingan:  47% − 38% = +9 mata peratusan

Anggaran DiD (kesan sebenar program) = 15 − 9 = +6 mata peratusan
```

Kesan boleh-dikaitkan yang jujur ialah 6 mata peratusan, bukan 15 — lebih separuh daripada peningkatan
sebelum/selepas yang kelihatan akan berlaku walau apa pun program itu, didorong oleh pemulihan ekonomi yang sama
yang mengangkat kumpulan perbandingan.

**Diskontinuiti regresi, ambang kelayakan**: skim geran hanya tersedia untuk perniagaan dengan kurang
daripada 50 pekerja. Membandingkan hasil bagi perniagaan sedikit di bawah ambang (45–49 pekerja, layak)
dengan perniagaan sedikit di atasnya (50–54 pekerja, tidak layak) menyediakan kontrafaktual yang boleh
dipercayai kerana perniagaan di kedua-dua belah potongan pentadbiran yang sewenang-wenangnya itu selainnya
serupa — ambang itu, bukan sebarang ciri perniagaan yang mendasari, yang menentukan kelayakan.
Perbezaan hasil purata £2,000 antara kedua-dua kumpulan, yang diperhatikan hanya pada ambang, boleh
dikaitkan dengan geran dengan keyakinan jauh lebih tinggi daripada perbandingan mudah semua perniagaan layak
berbanding semua yang tidak layak (yang berbeza secara sistematik dari segi saiz).

## Kaitan dengan kejuruteraan perisian

Pemikiran kontrafaktual harus membentuk cara sistem penjejakan impak dan saluran paip penilaian untuk perisian
kerajaan dan sektor sosial direka:

- Bina penangkapan kumpulan perbandingan ke dalam sistem sejak awal — merekod siapa yang layak tetapi tidak
  didaftarkan, atau kohort bukan peserta yang sepadan — dan bukan memasangnya kemudian selepas program
  sudah dijalankan dan hanya data sebelum/selepas wujud.
- Di mana pengrawakan boleh dilaksanakan (pelancaran berfasa, perkhidmatan digital yang diaktifkan untuk
  sesetengah pengguna sebelum yang lain), instrumentasikan sistem untuk mengekalkan tugasan rawak sebagai medan
  yang boleh dikueri; pelancaran berfasa secara tidak sengaja memusnahkan nilai penilaiannya sendiri jika
  urutan tugasan tidak dilog.
- Ini ialah kaedah asas di sebalik [kaedah penilaian impak](../kaedah-penilaian-impak/)
  dan itulah yang membezakannya daripada [penilaian impak berbanding penilaian proses](../penilaian-impak-berbanding-penilaian-proses/),
  yang terakhir bertanya sama ada program disampaikan seperti yang dimaksudkan dan bukan sama ada ia
  menyebabkan kesan.
- [Additionality dan deadweight](../additionality-dan-deadweight/) dan
  [anjakan dan atribusi](../penyesaran-dan-atribusi/) kedua-duanya, pada asasnya, soalan kontrafaktual
  — deadweight ialah "apakah hasil khusus ini tanpa intervensi", dikenakan pada peringkat pelarasan dan bukan
  reka bentuk penilaian penuh.

## Perangkap

- **Menganggap sebelum/selepas sebagai bukti sebab-akibat.** Ini ialah kesilapan yang paling lazim dan paling
  berakibat dalam pelaporan impak sektor awam dan sosial; perubahan sebelum/selepas mengelirukan kesan program
  dengan setiap perkara lain yang berubah dalam tempoh yang sama.
- **Menggunakan kumpulan perbandingan yang berbeza secara sistematik daripada kumpulan dirawat.** Kumpulan
  perbandingan sepadan mestilah benar-benar serupa pada ciri yang relevan (lihat hierarki kaedah
  [analisis kontrafaktual](../analisis-kontrafaktual/) dalam Magenta Book);
  membandingkan peserta program (yang memilih masuk, dan selalunya lebih bermotivasi) dengan bukan
  peserta (yang tidak) berisiko bias pemilihan menyamar sebagai kesan program.
- **Memusnahkan peluang pengrawakan melalui reka bentuk penyampaian yang lemah.** Pelancaran berfasa atau
  rawak hanya mengekalkan nilai penilaiannya jika tugasan benar-benar rawak dan direkodkan — membiarkan
  pengurus tempatan memilih siapa yang pergi dahulu menggagalkan tujuannya.
- **Menuntut ketepatan berlebihan daripada reka bentuk lemah.** Anggaran sebelum/selepas harus dipersembahkan
  sebagai petunjuk, bukan saiz kesan yang diukur; hierarki bukti Magenta Book wujud supaya kekuatan
  tuntutan sepadan dengan kekuatan reka bentuk yang menghasilkannya.

## Sumber

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020), and its
  supplementary guide on quasi-experimental methods.
  <https://www.gov.uk/government/publications/the-magenta-book>
- Cabinet Office / Behavioural Insights Team, "Test, Learn, Adapt: Developing Public Policy with
  Randomized Controlled Trials" (2012).
- What Works Network, standards of evidence guidance. <https://www.gov.uk/guidance/what-works-network>
- Angrist JD, Pischke J-S. *Mostly Harmless Econometrics: An Empiricist's Companion*. Princeton
  University Press, 2009 (standard reference for difference-in-differences and regression
  discontinuity methods).
