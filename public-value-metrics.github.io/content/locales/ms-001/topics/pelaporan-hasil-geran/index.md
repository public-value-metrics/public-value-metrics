# Pelaporan Hasil Geran (IRIS+)

Pelaporan hasil geran ialah amalan penerima geran melaporkan metrik hasil (outcome) yang piawai dan setanding kepada pembiaya — berbanding setiap pembiaya mencipta templat pelaporan khasnya sendiri. IRIS+, yang diselenggara oleh Global Impact Investing Network (GIIN), ialah piawaian sedemikian yang paling meluas diguna pakai: katalog metrik prestasi sosial, alam sekitar dan kewangan yang telah ditakrifkan yang diwajibkan atau disyorkan oleh pelabur impak dan, semakin kerap, yayasan pemberi geran kepada penerima geran.

## Mengapa ini penting

Sebelum pelaporan piawai, setiap yayasan meminta penerima geran satu set penunjuk yang berbeza dalam format yang berbeza, dan badan amal bersaiz sederhana dengan sepuluh pembiaya boleh menjalankan sepuluh proses pelaporan selari untuk kerja yang bertindih — punca beban pelaporan yang didokumenkan dengan baik, yang cuba dikurangkan oleh pempiawaian hasil geran. IRIS+ menanganinya dengan memberi pembiaya dan penerima geran perbendaharaan kata bersama: Core Metrics Set dikelompokkan mengikut tema (cth. perumahan mampu milik, akses tenaga bersih, inklusi kewangan), setiap metrik ditakrifkan cukup tepat supaya "pekerjaan dicipta" atau "isi rumah dilayani" bermaksud perkara yang sama siapa pun yang melaporkan, dan diselaraskan dengan Matlamat Pembangunan Mampan PBB (SDG) supaya pembiaya boleh menggulung data peringkat penerima geran kepada naratif SDG peringkat portfolio. GIIN melaporkan bahawa metrik IRIS digunakan oleh kira-kira separuh pelabur impak dan majoriti besar pengurus dana, bank, dan institusi kewangan pembangunan yang aktif dalam bidang ini.

Pempiawaian paling penting di mana ia berinteraksi dengan [hasil vs output](../hasil-berbanding-output/): IRIS+ mendorong pelaporan ke arah metrik hasil dan impak yang ditakrifkan dan bukan apa sahaja yang kebetulan dilog oleh sistem pengurusan kes sedia ada penerima geran, yang tepat jurang yang diterangkan oleh [kos setiap hasil](../kos-setiap-hasil/) berbanding [kos setiap penerima manfaat](../kos-setiap-benefisiari/).

## Matematiknya

Pelaporan hasil geran ialah rangka kerja dan proses, bukan formula:

```
1. Pembiaya memilih Core Metrics Set yang relevan dengan tema geran
   (cth. IRIS+ "Inklusi Kewangan" atau "Pertanian Mampan")
2. Setiap metrik mempunyai takrifan, unit, dan kaedah pengiraan tetap
   yang diterbitkan oleh GIIN — tidak dicipta setiap pembiaya
3. Penerima geran melapor terhadap takrifan metrik yang sama merentas semua
   pembiayanya yang menggunakan piawaian itu, mengurangkan usaha pelaporan berganda
4. Pembiaya mengagregat metrik peringkat penerima geran menjadi pelaporan
   peringkat portfolio, setanding dari tahun ke tahun dan merentas penerima geran
   yang menggunakan metrik yang sama
```

Peningkatan kecekapan bersifat kombinatorial: mempiawaikan N pembiaya × M penerima geran kepada satu perbendaharaan kata bersama menukar N×M hubungan pelaporan khas kepada kira-kira N+M pemetaan terhadap satu piawaian.

## Contoh yang diselesaikan

**Penerima geran dengan tiga pembiaya, sebelum pempiawaian**: melaporkan "orang dilayani" kepada Pembiaya 1 menggunakan takrifan bilangan kepala, "penerima manfaat dicapai" kepada Pembiaya 2 menggunakan takrifan isi rumah, dan "individu terkesan" kepada Pembiaya 3 menggunakan takrifan episod perkhidmatan (jadi seorang yang melawat dua kali dikira dua kali). Tiga laporan, tiga nombor, tiada yang setanding, dan tiada yang setanding dengan nombor penerima geran lain walaupun dalam portfolio pembiaya yang sama.

**Penerima geran yang sama di bawah IRIS+**: melapor terhadap metrik individu-dicapai IRIS+ yang ditakrifkan bersama metrik hasil yang ditakrifkan daripada Core Metrics Set yang relevan, menggunakan metodologi pengiraan yang diterbitkan GIIN untuk kedua-duanya. Ketiga-tiga pembiaya kini menerima nombor yang sama, dikira dengan cara yang sama, dan boleh membandingkan kos setiap unit ditakrif IRIS+ penerima geran ini dengan penerima geran lain dalam portfolio mereka menggunakan metrik yang serupa — setara, pada skala infrastruktur pelaporan, dengan memiliki [pangkalan data kos seunit](../pangkalan-data-kos-seunit/) yang dikongsi.

## Kaitan dengan kejuruteraan perisian

Platform pengurusan geran harus menganggap pengecam metrik IRIS+ sebagai kunci asing, bukan teks bebas: menyimpan kod metrik yang diterbitkan bersama nilai yang dilaporkan penerima geran (dan bukan medan ciptaan tempatan bernama "penerima manfaat") ialah apa yang memungkinkan pengagregatan merentas pembiaya dan merentas portfolio kemudian tanpa projek pembersihan data. Di mana platform mesti menyokong pembiaya yang belum menggunakan IRIS+, reka bentuk pragmatik ialah membenarkan metrik tempatan dipetakan kepada takrifan IRIS+ terdekat dan bukan memaksa setiap pembiaya ke atas piawaian itu serta-merta — kebolehbandingan bertambah baik secara beransur-ansur apabila lebih banyak graf dipetakan kepada pengecam kongsi. Lihat topik saudara [kos setiap hasil](../kos-setiap-hasil/) untuk apa yang harus dikira menggunakan nombor yang dilaporkan setelah dikumpul.

## Perangkap

- **Menganggap penggunaan IRIS+ sebagai kebolehbandingan automatik.** Dua penerima geran boleh sama-sama melapor terhadap metrik IRIS+ yang sama dan masih tidak setanding jika kualiti data asas atau andaian kontrafaktual mereka berbeza; piawaian itu menetapkan takrifan, bukan ketegasan pengukuran.
- **Metrik "selaras IRIS" ciptaan pembiaya.** Metrik yang sekadar diilhamkan oleh bahasa IRIS+ tetapi bukan takrifan sebenar yang diterbitkan memperkenalkan semula pemecahan yang piawaian itu wujud untuk selesaikan.
- **Keletihan pelaporan akibat pemilihan berlebihan.** Mewajibkan penerima geran melapor terhadap keseluruhan Core Metrics Set apabila hanya dua atau tiga metrik relevan untuk keputusan mencipta semula masalah beban dalam bungkusan piawai.
- **Tiada metrik hasil langsung.** IRIS+ merangkumi banyak metrik output tulen (cth. bilangan orang dilayani); memilih hanya itu, dan tiada metrik peringkat hasil, menghasilkan pelaporan berbentuk [kos-setiap-penerima-manfaat](../kos-setiap-benefisiari/) di bawah label pelaporan hasil.

## Sumber

- GIIN, IRIS+ system. <https://iris.thegiin.org/>
- GIIN, IRIS+ Catalog of Metrics. <https://iris.thegiin.org/metrics/>
- GIIN, About IRIS+. <https://iris.thegiin.org/about/>
