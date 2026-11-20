# Alternatif kepada KDNK

Alternatif kepada KDNK (Keluaran Dalam Negara Kasar, GDP) ialah metrik yang dibina untuk menangkap apa yang secara struktur diabaikan oleh Keluaran Dalam Negara Kasar: kerja penjagaan tanpa bayaran, pengurasan alam sekitar, pengagihan pendapatan, dan sama ada pertumbuhan benar-benar memperbaik kehidupan. Yang paling terkenal ialah Genuine Progress Indicator (GPI) dan Indeks Kebahagiaan Nasional Kasar (Gross National Happiness, GNH) Bhutan; hujah untuk mengambil serius alternatif ini paling berpengaruh dikemukakan oleh Suruhanjaya Stiglitz-Sen-Fitoussi 2009. Bagi jurutera yang membina papan pemuka kerajaan atau sistem KPI, "nombor mana yang dikira sebagai kemajuan" ialah keputusan reka bentuk dengan akibat sebenar terhadap apa yang dibiayai.

## Mengapa ini penting

Simon Kuznets, yang membina akaun kebangsaan AS pada 1930-an, memberi amaran kepada Kongres pada 1934 bahawa "kebajikan sesebuah negara hampir tidak boleh disimpulkan daripada ukuran pendapatan negara" — kaveat yang segera dilangkaui oleh angka itu. KDNK mengira pembersihan tumpahan minyak sebagai pertumbuhan dan penjagaan anak ibu bapa tanpa bayaran sebagai tiada apa-apa; ia tidak membezakan perbelanjaan yang membina kesejahteraan tahan lama daripada perbelanjaan yang sekadar mengimbangi mudarat yang sudah berlaku. Suruhanjaya Stiglitz-Sen-Fitoussi, yang dipanggil oleh Presiden Perancis Nicolas Sarkozy dan dipengerusikan oleh Joseph Stiglitz, Amartya Sen, dan Jean-Paul Fitoussi, melaporkan pada 2009 bahawa sistem statistik harus mengalihkan penekanan "daripada mengukur pengeluaran ekonomi kepada mengukur kesejahteraan manusia," dan bahawa kelestarian harus dijejaki secara berasingan daripada kesejahteraan semasa dan bukan dilipat ke dalam satu nombor. Alternatif kepada KDNK mengoperasikan saranan itu. GPI, yang dibangunkan oleh badan pemikir Redefining Progress pada 1990-an dan dibina atas Measure of Economic Welfare William Nordhaus dan James Tobin 1972, bermula daripada penggunaan peribadi (seperti KDNK) dan kemudian menambah manfaat bukan pasaran yang diabaikan KDNK (kerja isi rumah, kerja sukarela) sambil menolak kos defensif dan pengurasan (jenayah, pencemaran, ulang-alik, penyusutan sumber) yang dikira KDNK secara salah sebagai positif. Indeks GNH Bhutan, ditadbir oleh GNH Centre Bhutan (<https://www.gnhcentre.bt/>), melangkah lebih jauh, menggantikan pertumbuhan sebagai objektif perlembagaan yang dinyatakan negara itu: ia menggabungkan 33 penunjuk merentas 9 domain — kesejahteraan psikologi, kesihatan, pendidikan, penggunaan masa, kepelbagaian budaya, tadbir urus, daya hidup komuniti, kepelbagaian ekologi, dan taraf hidup — menjadi satu skor berasaskan kecukupan yang digunakan terus untuk menyaring cadangan dasar kerajaan.

## Matematiknya

```
GPI = perbelanjaan penggunaan peribadi
      + manfaat bukan pasaran (kerja isi rumah, kerja sukarela, pendidikan tinggi)
      − kos defensif dan sosial (jenayah, pencemaran, ulang-alik, keruntuhan keluarga)
      − pengurasan modal semula jadi dan sosial (penyusutan sumber, kehilangan tanah ladang)

Skor kecukupan GNH, bagi setiap domain:
  seseorang "mencukupi" dalam sesuatu domain apabila melepasi ambang pada setiap penunjuknya
  Indeks Kebahagiaan = (% penduduk yang mencukupi dalam ≥ 6 daripada 9 domain)
                       + (purata berpemberat kekurangan minoriti "belum bahagia")
```

## Contoh yang diselesaikan

**Wilayah, GPI**: penggunaan peribadi ialah $50bn. Tambah anggaran nilai kerja isi rumah dan sukarelawan $12bn (kadar upah kos penggantian — lihat [nilai masa sukarelawan](../nilai-masa-sukarelawan/)). Tolak anggaran kos tahunan kesesakan ulang-alik ($3bn), jenayah ($4bn), dan pengurasan sumber jangka panjang ($6bn):

```
GPI = 50 + 12 − 3 − 4 − 6 = 49 ($bn)
```

Jika KDNK meningkat daripada $50bn kepada $55bn pada tahun itu (+10%), tetapi kos defensif dan pengurasan meningkat lebih pantas daripada penggunaan, GPI boleh jatuh walaupun KDNK naik — "hipotesis ambang" yang dipetik penyelidik GPI bagi ekonomi berpendapatan tinggi sejak kira-kira 1970-an, apabila pertumbuhan terus mendaki sementara GPI mendatar.

**Rakyat, GNH**: responden melepasi ambang kecukupan dalam 7 daripada 9 domain (kesihatan, pendidikan, taraf hidup, daya hidup komuniti, kepelbagaian budaya, kepelbagaian ekologi, penggunaan masa) tetapi tidak mencapainya pada kesejahteraan psikologi dan tadbir urus. Oleh kerana 7 ≥ 6, mereka dikira "bahagia" dalam bilangan kepala; indeks menjejaki secara berasingan kedalaman dua kekurangan mereka supaya lulus tipis tidak sama dengan lulus selesa.

## Kaitan dengan kejuruteraan perisian

- Papan pemuka KPI yang dimodelkan hanya pada daya pemprosesan atau perbelanjaan (corak KDNK) akan secara sistematik terlepas mudarat yang dilakukan dalam menjana daya pemprosesan itu — volum tiket sokongan yang dianggap "penglibatan" dan bukan "kesusahan pengguna" ialah versi penyampaian perisian bagi mengira tumpahan minyak sebagai pertumbuhan.
- Perakaunan gaya GPI ialah corak audit yang berguna untuk mana-mana set [KPI sektor awam](../kpi-sektor-awam/): bagi setiap metrik output utama, tanya apakah kos defensif yang secara senyap ditanggungnya (kerja semula, tindak balas insiden, keletihan) dan tolaknya, sebagaimana GPI menolak perbelanjaan defensif daripada penggunaan.
- Kaedah kecukupan domain GNH — lulus/gagal bagi setiap dimensi, kemudian gabung — secara struktur teknik yang sama seperti [analisis keputusan berbilang kriteria](../analisis-keputusan-berbilang-kriteria/) dan wajar digunakan semula di mana-mana skor skalar tunggal akan menyembunyikan dimensi kritikal yang gagal.

## Perangkap

- **Menganggap GPI sebagai akaun kebangsaan yang tepat** — tidak seperti KDNK, GPI tiada metodologi piawai tunggal; kajian berbeza memberat kos ulang-alik, masa sukarelawan, atau pengurasan sumber secara berbeza, jadi perbandingan GPI merentas kajian jauh kurang boleh dipercayai daripada perbandingan KDNK merentas negara.
- **Mengimport GNH secara pukal ke dalam budaya dasar yang berbeza** — berat domain dan ambang kecukupannya ditetapkan melalui perundingan Bhutan; menyalin nombor tanpa proses perundingan yang mendasarinya menghasilkan metrik kosong yang tidak dipercayai sesiapa.
- **Menganggap alternatif KDNK menggantikan penilaian kos-faedah** — ini penunjuk diagnostik seluruh ekonomi, bukan alat keputusan untuk satu program; gunakan [analisis kos-faedah sosial](../analisis-kos-manfaat-sosial/) untuk itu.

## Sumber

- Stiglitz JE, Sen A, Fitoussi J-P. "Report by the Commission on the Measurement of Economic
  Performance and Social Progress." (2009) <https://ec.europa.eu/eurostat/documents/118025/118123/Fitoussi+Commission+report>
- GNH Centre Bhutan. <https://www.gnhcentre.bt/>
- Redefining Progress. "The Genuine Progress Indicator: A Tool for Sustainable Development."
- Nordhaus WD, Tobin J. "Is Growth Obsolete?" (1972), NBER.
