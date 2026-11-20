# Analisis Keberkesanan Kos dalam Kerajaan

Analisis keberkesanan kos (cost-effectiveness analysis, CEA) membandingkan kos pelbagai cara untuk mencapai
hasil yang *sama*, dinyatakan dalam unit semula jadi — kos bagi setiap orang tidur di jalanan yang diberi
tempat tinggal, kos bagi setiap murid yang dibawa sehingga tahap yang dijangka, kos bagi setiap tan CO2 yang
dikurangkan — tanpa menukar hasil itu sendiri kepada wang.

## Mengapa ini penting

Green Book menganggap CEA sebagai kaedah sandaran apabila keperluan [analisis kos-manfaat sosial](../analisis-kos-manfaat-sosial/)
untuk memonetisasikan setiap manfaat menjadi bukan sahaja sukar tetapi tidak jujur — apabila meletakkan harga
yang boleh dipercayai pada hasil memerlukan andaian yang tiada sesiapa benar-benar pegang
(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>,
Chapter 5, mengenai penilaian pilihan apabila hasil tidak mudah dimonetisasikan). CEA ialah kaedah yang
dipinjam paling langsung daripada ekonomi kesihatan — ia secara struktur serupa dengan cara NICE membandingkan
rawatan menggunakan kos bagi setiap Quality-Adjusted Life Year — tetapi dikenakan pada program awam bukan
kesihatan: intervensi pendidikan bagi setiap mata hasil murid, program perumahan bagi setiap isi rumah yang
dicegah daripada kehilangan tempat tinggal, program pekerjaan bagi setiap hasil pekerjaan yang mampan.

Sebab CEA layak berada di samping SCBA dan bukan diserap olehnya ialah memaksakan nilai wang pada sesetengah
hasil menghasilkan angka yang cukup tepat untuk kelihatan berwibawa dan cukup dipertikaikan untuk tidak
bernilai dalam perbahasan awam — meletakkan harga pada "kanak-kanak yang membaca pada tahap yang dijangka"
mengundang cabaran yang tepat merosakkan kes perniagaan di jawatankuasa pilihan. CEA mengelak pertikaian itu
dengan enggan melayannya: ia meranking pilihan mengikut kos bagi setiap unit *hasil itu sendiri*, menyerahkan
pertimbangan politik yang berasingan tentang sama ada hasil itu patut dikejar langsung kepada kes strategik.

## Matematiknya

```
Nisbah keberkesanan kos (purata) = Jumlah kos / Jumlah unit hasil yang dicapai

Nisbah keberkesanan kos tokokan (ICER), membandingkan pilihan A dengan pilihan B:
ICER = (Kos_A − Kos_B) / (Hasil_A − Hasil_B)

Prosedur:
1. Tetapkan unit hasil dan kaedah pengukuran yang sama merentas semua pilihan yang dibandingkan.
2. Kosan setiap pilihan atas asas yang sama (lihat ../green-book-appraisal/, kes kewangan)
   dalam ufuk masa yang sama.
3. Buang pilihan yang didominasi: mana-mana pilihan yang berkos lebih setiap unit daripada
   alternatif yang lebih murah yang mencapai hasil yang sama atau lebih baik digugurkan.
4. Rankingkan pilihan yang tinggal mengikut nisbah keberkesanan kos tokokan, bukan purata.
```

CEA tidak boleh, dengan sendirinya, mengatakan sama ada sesuatu program wajar dibiayai langsung — hanya yang
mana satu daripada beberapa pendekatan kepada matlamat yang sama paling murah setiap unit. Memutuskan sama ada
matlamat itu sendiri bernilai perbelanjaan memerlukan sama ada penukaran kembali kepada SCBA (jika penilaian
yang boleh dipercayai wujud) atau pertimbangan politik/strategik di luar matematik. Apabila hasil benar-benar
tidak dapat dikurangkan kepada satu unit — kerana program menghasilkan beberapa hasil yang penting dengan cara
berbeza — gunakan [analisis keputusan pelbagai kriteria](../analisis-keputusan-berbilang-kriteria/) sebagai ganti.

## Contoh yang diselesaikan

**Pihak berkuasa tempatan**: sebuah majlis membandingkan tiga pendekatan untuk mengurangkan tidur di jalanan,
setiap satu dikosankan untuk satu tahun berbanding hasil "individu yang dipindahkan ke penginapan tetap selama 6+ bulan":

```
Pilihan                          Kos        Hasil dicapai   CER purata
Housing First (intensif)         £900,000   60              £15,000/hasil
Hostel + sokongan berpindah      £600,000   50              £12,000/hasil
Jangkauan + sektor sewa swasta   £350,000   20              £17,500/hasil

ICER, Hostel berbanding Jangkauan:  (600k−350k)/(50−20) = £8,333 bagi setiap hasil tambahan
ICER, Housing First berbanding Hostel: (900k−600k)/(60−50) = £30,000 bagi setiap hasil tambahan
```

Jangkauan didominasi pada kos purata oleh Hostel, tetapi langkah *tokokan* daripada Jangkauan kepada Hostel
hanya berharga £8,333 bagi setiap orang tambahan yang diberi tempat tinggal — murah berbanding langkah Housing First,
yang berharga £30,000 bagi setiap orang tambahan melebihi apa yang dicapai Hostel. Pihak berkuasa yang
dihadkan bajet dan sedang meluaskan skala harus mengutamakan pengembangan Hostel sebelum Housing First,
walaupun Housing First kelihatan lebih baik pada nisbah puratanya sendiri.

**Kerajaan nasional**: program mengejar ketinggalan literasi dibandingkan merentas tiga model penyampaian
berdasarkan "kos bagi setiap murid yang mencapai tahap bacaan sepadan umur": tunjuk ajar satu-ke-satu (£1,800/murid),
tunjuk ajar kumpulan kecil (£700/murid), dan intervensi digital sahaja (£150/murid, tetapi hanya 40% daripada
kadar hasil tunjuk ajar kumpulan kecil bagi setiap murid yang didaftarkan setelah dilaraskan untuk
keciciran penglibatan). Setelah dilaraskan untuk penyiapan sebenar, digital sahaja berharga £375 bagi setiap murid
yang mencapai tahap — masih yang paling murah, tetapi CEA tidak boleh mengatakan sama ada bilangan mutlak murid
yang lebih kecil yang dibantu oleh digital sahaja, jika disampaikan pada bajet yang sama dengan kumpulan kecil,
ialah pertukaran yang boleh diterima berbanding mencapai lebih sedikit murid dengan lebih mendalam; itu
pertimbangan pengagihan yang diserahkan kembali oleh CEA kepada pembuat keputusan.

## Kaitan dengan kejuruteraan perisian

CEA ialah rangka yang betul apabila pasukan kejuruteraan menilai pendekatan penyampaian untuk hasil
perkhidmatan yang *sama* — kos bagi setiap identiti yang berjaya disahkan merentas tiga vendor pengesahan
identiti, kos bagi setiap kes yang dihantar dengan betul merentas dua reka bentuk automasi pengendalian kes,
kos bagi setiap kecacatan kebolehaksesan yang diselesaikan merentas pemulihan dalaman berbanding berkontrak.
Disiplin yang diimportnya secara langsung: tentukan unit hasil sebelum membandingkan kos (bukan "tiket yang
ditutup" — output — tetapi "keperluan pengguna yang benar-benar diselesaikan"), dan sentiasa kira nisbah
tokokan antara sistem yang beroperasi dengan penggantian yang dicadangkan, bukan kos purata setiap sistem
secara terpencil. Lihat [hasil berbanding output](../hasil-berbanding-output/) dan [kos setiap hasil](../kos-setiap-hasil/).

## Perangkap

- **Membandingkan nisbah purata, bukan tokokan, apabila memutuskan pengembangan.** Seperti contoh tidur di
  jalanan menunjukkan, pilihan dengan nisbah purata terbaik tidak semestinya unit hasil seterusnya yang paling murah untuk dibeli.
- **Memilih unit hasil yang sebenarnya output.** "Rujukan dibuat" atau "sesi disampaikan"
  mengukur aktiviti, bukan hasil yang menjadi sebab program wujud; CEA pada output menghasilkan angka yang
  kelihatan yakin yang menjawab soalan yang salah.
- **Membandingkan merentas hasil yang benar-benar berbeza.** CEA hanya sah apabila setiap pilihan menyasarkan
  hasil yang sama diukur dengan cara yang sama; membandingkan "kos bagi setiap orang tidur di jalanan yang diberi tempat tinggal" dengan "kos
  bagi setiap penghuni selepas penjagaan dalam penyewaan stabil" memerlukan ukuran hasil generik atau
  [analisis keputusan pelbagai kriteria](../analisis-keputusan-berbilang-kriteria/), bukan CEA.
- **Mengabaikan ketahanan hasil.** Pilihan lebih murah yang menghasilkan hasil yang tidak kekal (murid
  yang merosot selepas intervensi tamat) sebenarnya tidak lebih berkesan kos apabila diukur dalam ufuk yang
  setanding; padankan tempoh susulan merentas pilihan yang dibandingkan.

## Sumber

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Chapter 5.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- National Institute for Health and Care Excellence. "Developing NICE guidelines: the manual" —
  kaedah keberkesanan kos yang diadaptasi oleh kerajaan ini.
  <https://www.nice.org.uk/process/pmg20>
- What Works Centre for Homelessness Impact. Cost-effectiveness evidence on homelessness
  interventions. <https://whatworks-homelessness.org.uk/>
