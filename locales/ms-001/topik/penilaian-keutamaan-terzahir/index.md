# Penilaian Keutamaan Terzahir

Kaedah keutamaan terzahir (revealed preference) menyimpulkan nilai barangan bukan pasaran daripada tingkah laku
yang boleh diperhatikan dalam pasaran yang berkaitan, dan bukannya bertanya terus kepada orang. Penetapan harga
hedonik dan kaedah kos perjalanan ialah dua teknik kuda kerja: kedua-duanya bermula daripada transaksi sebenar
dan mengeluarkan harga tersirat bagi sesuatu yang tidak pernah dijual secara langsung.

## Mengapa ini penting

Sedangkan kaedah [keutamaan dinyatakan](../penilaian-keutamaan-yang-dinyatakan/) bertanya soalan hipotetikal, kaedah
keutamaan terzahir memerhati apa yang sebenarnya dibayar oleh orang, yang oleh Green Book dianggap pada amnya
bukti yang lebih boleh dipercayai, jika semua yang lain sama, kerana ia tidak tertakluk kepada bias hipotetikal —
responden dalam kajian harga rumah hedonik benar-benar membayar premium atau diskaun yang diukur
(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>,
Annex 2). Penetapan harga hedonik menguraikan harga pasaran — lazimnya harga rumah — kepada harga tersirat bagi
setiap atribut barangan itu, membolehkan penganalisis mengasingkan, sebagai contoh, premium harga yang sebenarnya
dibayar isi rumah untuk tinggal di tempat yang lebih senyap atau berkualiti udara lebih baik, dengan mengawal
secara statistik setiap atribut lain yang turut mempengaruhi harga rumah (saiz, lokasi, kawasan tadahan sekolah).
Kaedah kos perjalanan melakukan perkara yang sama untuk tapak rekreasi tanpa yuran masuk: masa dan wang yang
dibelanjakan orang untuk bergerak ke tapak itu mendedahkan had bawah nilai tapak itu bagi mereka, kerana tiada
siapa menanggung kos melebihi nilai lawatan itu kepada mereka.

Kedua-dua kaedah berkongsi had struktur: ia hanya boleh menilai apa yang tertanam dalam transaksi pasaran yang
sedia ada. Bunyi bising berhampiran landasan muncul dalam harga rumah kerana orang yang mengambil berat tentang
bunyi bising memilih perumahan yang lebih senyap; nilai kewujudan spesies yang tiada siapa lawati atau tinggal
berhampirannya tidak muncul dalam sebarang transaksi, itulah jurang yang kaedah
[keutamaan dinyatakan](../penilaian-keutamaan-yang-dinyatakan/) wujud untuk mengisinya.

## Matematiknya

```
Penetapan harga hedonik:
  Harga rumah = f(atribut struktur, atribut lokasi,
                   atribut alam sekitar yang diminati, ...)
  Anggar melalui regresi; pekali pada atribut alam sekitar
  (dengan semua yang lain malar) ialah harga tersiratnya.

  Harga tersirat atribut X = ∂(Harga rumah) / ∂X

Kaedah kos perjalanan:
  Kadar lawatan (lawatan per kapita dari zon i) = f(kos perjalanan dari zon i,
                   tapak pengganti, kawalan sosioekonomi)
  Anggar lengkung permintaan bagi lawatan sebagai fungsi kos perjalanan.
  Lebihan pengguna = kawasan di bawah lengkung permintaan yang dianggarkan
                    = nilai tapak kepada pelawat
```

Kedua-dua kaedah memerlukan set kawalan yang kukuh secara statistik — meninggalkan atribut yang mengelirukan
(hedonik) atau tapak pengganti berdekatan (kos perjalanan) menyongsangkan harga tersirat ke arah yang tidak
selalu jelas lebih awal, itulah sebabnya Annex 2 Green Book memerlukan spesifikasi regresi dan kawalan
dilaporkan, bukan sekadar pekali utama.

## Contoh yang diselesaikan

**Kerajaan kebangsaan**: metodologi harga bayangan karbon Green Book sendiri sebahagiannya bersandarkan bukti
hedonik, tetapi kes ilustrasi yang lebih ringkas ialah bunyi bising pesawat. Kajian hedonik yang meregresikan harga
jualan rumah di kawasan laluan penerbangan terhadap pendedahan bunyi bising berpemberat jarak, dengan mengawal
saiz, umur dan kawasan tadahan sekolah, mendapati setiap peningkatan 1 desibel dalam purata pendedahan bunyi
bising dikaitkan dengan pengurangan 0.5% dalam harga rumah. Bagi rumah biasa £280,000 di kawasan yang terjejas:

```
Harga tersirat bagi setiap desibel = £280,000 × 0.5% = £1,400 setiap isi rumah
Isi rumah terjejas oleh peningkatan 3dB daripada landasan baharu = 18,000
Jumlah kos tersirat peningkatan bunyi bising = £1,400 × 3 × 18,000 = £75.6j
```

Ini ialah kos dikapitalkan sekali sahaja (tertanam dalam harga rumah), yang mesti dielakkan daripada dikira
berganda oleh penilaian terhadap aliran kos gangguan bunyi bising tahunan yang dianggarkan secara berasingan.

**Badan amal**: badan amal alam sekitar menggunakan kaedah kos perjalanan untuk menilai rizab semula jadi yang
percuma untuk dimasuki. Data tinjauan pada poskod pelawat memberikan purata kos perjalanan pergi balik (masa
dinilai pada nilai masa bukan kerja yang disyorkan Green Book, ditambah bahan api) £14 setiap lawatan, dengan
40,000 lawatan setahun. Lengkung permintaan yang dianggarkan — kadar lawatan jatuh apabila kos perjalanan dari
sesuatu zon meningkat — membayangkan lebihan pengguna bagi setiap lawatan, di atas £14 yang sebenarnya
dibelanjakan, sekitar £9.

```
Jumlah nilai tahunan = 40,000 lawatan × (£14 dibelanjakan + £9 lebihan pengguna)
                    = 40,000 × £23 ≈ £920,000/tahun
```

Ini jauh mengatasi hasil yuran masuk sifar rizab itu dan memberi pemegang amanah badan amal angka yang boleh
dipertahankan bagi nilai rekreasi tapak apabila mengemukakan kes kepada pembiaya.

## Kaitan dengan kejuruteraan perisian

Pemikiran keutamaan terzahir muncul dalam analitik produk sektor awam lebih kerap daripada yang disedari
pengamal: data penggunaan perkhidmatan digital kerajaan percuma itu sendiri ialah bukti keutamaan terzahir
tentang nilai (kekerapan, panjang sesi, dan — yang paling bermakna — corak penggunaan berulang berbanding sekali
sahaja boleh dianalisis sebagaimana model kos perjalanan menganggap kekerapan lawatan berbanding jarak). Apabila
perkhidmatan mempunyai pengganti sebenar (saluran kertas, talian telefon), "kos" yang ditanggung rakyat untuk
menggunakan saluran digital sebaliknya (masa, data, peranti) boleh dianggarkan dan dibandingkan dengan
penggunaan, mencerminkan logik kos perjalanan secara langsung. Lihat
[piawaian perkhidmatan digital](../standard-perkhidmatan-digital/) dan [nilai data terbuka](../nilai-data-terbuka/),
yang menghadapi masalah penilaian yang sama untuk barangan tanpa harga pasaran langsung.

## Perangkap

- **Bias pemboleh ubah tertinggal dalam model hedonik.** Meninggalkan atribut yang berkorelasi (kualiti sekolah
  berkorelasi dengan harga rumah dan pemboleh ubah alam sekitar yang diminati) menyongsangkan anggaran harga
  tersirat; spesifikasi perlu dilaporkan dan diteliti, bukan sekadar keputusan.
- **Mengabaikan tapak pengganti dalam kajian kos perjalanan.** Nilai terzahir pelawat bagi sesuatu tapak
  diperkecilkan jika pengganti yang lebih dekat wujud dan tidak dikawal — mereka mungkin melawat terutamanya
  kerana ia percuma, bukan kerana ia bernilai secara unik.
- **Menggunakan keutamaan terzahir untuk barangan yang tiada gema pasaran langsung.** Nilai kewujudan, nilai
  pilihan dan nilai wasiat tidak muncul dalam sebarang transaksi dan tidak boleh dipulihkan melalui kaedah hedonik
  atau kos perjalanan — jurang itu milik [penilaian keutamaan dinyatakan](../penilaian-keutamaan-yang-dinyatakan/).
- **Mengelirukan nilai dikapitalkan (sekali sahaja) dengan aliran tahunan.** Kesan harga rumah hedonik biasanya
  nilai dikapitalkan sekali sahaja; menganggapnya sebagai aliran manfaat tahunan menggembungkan penilaian.

## Sumber

- HM Treasury. "The Green Book," Annex 2: valuing non-market impacts.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Transport / Civil Aviation Authority. Aircraft noise valuation studies used in
  airport appraisal. <https://www.gov.uk/guidance/aviation-noise>
- Rosen S. "Hedonic Prices and Implicit Markets: Product Differentiation in Pure Competition."
  Journal of Political Economy, 1974.
- Clawson M, Knetsch JL. "Economics of Outdoor Recreation." Johns Hopkins University Press, 1966
  (origin of the travel-cost method).
