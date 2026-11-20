# Penilaian Keutamaan yang Dinyatakan

Kaedah keutamaan yang dinyatakan (stated preference) menganggar nilai barangan bukan pasaran dengan bertanya secara langsung kepada orang berapa yang sanggup mereka bayar untuknya, atau sanggup terima sebagai pampasan untuk melepaskannya, lazimnya melalui tinjauan berstruktur yang menerangkan senario hipotesis. Penilaian kontingen (contingent valuation) ialah teknik yang paling terkenal dalam keluarga ini.

## Mengapa ini penting

Annex 2 Green Book (panduan tambahan mengenai penilaian impak bukan pasaran) mengesahkan kaedah keutamaan yang dinyatakan bagi barangan yang langsung tiada transaksi pasaran yang boleh diperhatikan untuk menyimpulkan nilai — kualiti udara, kepelbagaian biologi, perlindungan banjir, nilai kewujudan sesuatu landskap yang mungkin tidak pernah dikunjungi seseorang (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>). Defra telah menerbitkan panduan keutamaan dinyatakannya sendiri untuk penilaian alam sekitar kerana begitu banyak nilai alam sekitar (pemeliharaan habitat, kualiti air) tiada pasaran proksi langsung, tidak seperti, katakan, bunyi bising, yang sekurang-kurangnya berkait dengan harga rumah yang boleh diperhatikan (lihat [penilaian keutamaan terzahir](../penilaian-keutamaan-terzahir/)).

Tarikan teras keutamaan yang dinyatakan — ia boleh menilai secara harfiah apa sahaja, termasuk barangan yang tidak pernah didagangkan — juga punca masalah kredibilitinya. Oleh sebab responden tidak benar-benar membelanjakan wang, tinjauan penilaian kontingen terdedah kepada bias hipotesis (orang melebih-lebihkan kesanggupan membayar apabila tiada kekangan bajet sebenar), kesan penyemaian (embedding; barangan yang sama dinilai secara berbeza bergantung pada apa lagi yang ada dalam tinjauan), dan bias titik permulaan dalam reka bentuk permainan bidaan. Panel NOAA 1993 mengenai penilaian kontingen, yang dipanggil selepas litigasi tumpahan minyak Exxon Valdez, menetapkan piawaian reka bentuk — format referendum binari "adakah anda akan membayar £X, ya/tidak" dan bukannya bidaan terbuka, serta peringatan wajib tentang kekangan bajet sebenar responden — yang kekal sebagai piawaian rujukan bagi tinjauan yang boleh dipertahankan.

## Matematiknya

```
Penilaian kontingen (format referendum):
  Kemukakan pilihan binari: "adakah anda akan membayar £X setahun untuk hasil Y? ya/tidak"
  Ubah X secara rawak merentas responden.
  Padankan kesanggupan membayar (WTP) sebagai fungsi kadar jawapan ya/tidak pada setiap X.

WTP purata = luas di bawah lengkung permintaan yang dianggarkan
Nilai agregat = WTP purata × populasi terjejas

Varian uji kaji pilihan (pemodelan pilihan diskret):
  Kemukakan kepada responden pilihan berulang antara himpunan atribut
  (termasuk atribut kos), anggarkan harga tersirat bagi setiap atribut
  bukan kos daripada pertukaran yang didedahkan responden.
```

Varian uji kaji pilihan lazimnya lebih diutamakan dalam amalan UK semasa berbanding penilaian kontingen satu soalan kerana memaksa responden menukar ganti beberapa atribut dengan kos secara berulang menghasilkan anggaran yang lebih konsisten secara dalaman dan lebih sukar dimanipulasi berbanding satu soalan ya/tidak.

## Contoh yang diselesaikan

**Kerajaan negara**: Defra mengomisen tinjauan penilaian kontingen untuk menilai program penambahbaikan kualiti air sungai. Tinjauan format referendum terhadap 2,000 isi rumah mendapati 62% akan membayar £40/tahun melalui tambahan bil air hipotesis, dan lengkung permintaan yang dianggarkan memberikan kesanggupan membayar purata £28/tahun bagi setiap isi rumah.

```
WTP purata = £28/isi rumah/tahun
Isi rumah dalam kawasan tadahan = 340,000
Nilai tahunan agregat = £28 × 340,000 = £9.52 juta/tahun

Sepanjang tempoh penilaian 20 tahun pada kadar diskaun 3.5% (faktor anuiti ≈ 14.2):
PV(manfaat) ≈ £9.52 juta × 14.2 ≈ £135 juta
```

Angka agregat ini kemudian dibandingkan dengan sisi kos [analisis kos-manfaat sosial](../analisis-kos-manfaat-sosial/) program itu. Green Book menghendaki bukti keutamaan dinyatakan seperti ini dilaporkan bersama selang keyakinan dan metodologi tinjauannya, bukan sebagai anggaran titik semata-mata, tepat kerana nombor asasnya lebih rapuh daripada harga pasaran.

**Badan amal**: sebuah amanah warisan meninjau pengunjung dan bukan pengunjung tentang kesanggupan membayar untuk mencegah penutupan bangunan bersejarah yang tidak semestinya dikunjungi oleh kedua-dua kumpulan (nilai kewujudannya). Oleh sebab bukan pengunjung yang tidak akan melihat bangunan itu tetap melaporkan WTP positif, tinjauan itu menangkap nilai kewujudan dan nilai warisan yang akan terlepas sepenuhnya oleh kiraan hasil yuran pengunjung yang mudah (proksi keutamaan terzahir) — menunjukkan kelebihan sebenar keutamaan yang dinyatakan apabila tiada sebarang transaksi pasaran untuk mendedahkan nilai.

## Kaitan dengan kejuruteraan perisian

Kaedah keutamaan yang dinyatakan jarang terpakai secara langsung pada kerja kejuruteraan perisian, tetapi jurutera yang membina platform perundingan warganegara, alat penyertaan bajet atau infrastruktur tinjauan awam sering membina instrumen yang menjadi sandaran ekonomi itu. Mendapatkan butiran reka bentuk tinjauan dengan betul — jumlah bidaan secara rawak, pembingkaian referendum binari berbanding soalan terbuka, peringatan kekangan bajet yang jelas — bukan kemewahan UX, tetapi yang menjadikan penilaian yang terhasil boleh dipertahankan di bawah penelitian; tinjauan dalam aplikasi yang direka dengan buruk boleh membatalkan berbulan-bulan analisis ekonomi berikutnya. Lihat [metrik kepuasan warganegara](../metrik-kepuasan-warganegara/) untuk disiplin lebih umum dalam mendapatkan data pendapat awam yang akan menanggung beban analisis.

## Perangkap

- **Soalan terbuka "berapa yang anda sanggup bayar?".** Ini jauh lebih mudah dipengaruhi bias strategik dan penambatan berbanding pembingkaian referendum binari; syor panel NOAA untuk menggunakan format referendum wujud tepat kerana pemerolehan terbuka berprestasi buruk.
- **Tiada peringatan tentang kekangan bajet sebenar responden.** Tanpanya, WTP yang dinyatakan lazimnya melebihi apa yang akan dibayar oleh orang yang sama apabila pertukaran bajet sebenar berlaku — bias hipotesis.
- **Kesan penyemaian diabaikan.** Barangan yang sama dinilai bersendirian berbanding dinilai sebagai sebahagian himpunan lebih besar menghasilkan anggaran WTP yang berbeza; laporkan apa lagi, jika ada, dalam bingkai tinjauan.
- **Menganggap anggaran titik satu tinjauan sebagai muktamad.** Amalan Green Book menjangka julat dan perbincangan tentang bias yang diketahui, bukan nombor semata-mata yang dibawa ke jadual kos-manfaat seolah-olah harga pasaran.

## Sumber

- HM Treasury. "The Green Book," Annex 2: valuing non-market impacts.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Defra. "Valuing environmental impacts: practical guidelines" (panduan penilaian kontingen dan uji kaji pilihan). <https://www.gov.uk/government/collections/valuing-environmental-impacts>
- Arrow K, et al. "Report of the NOAA Panel on Contingent Valuation." Federal Register, 1993.
- Mitchell RC, Carson RT. "Using Surveys to Value Public Goods: The Contingent Valuation Method."
  Resources for the Future, 1989.
