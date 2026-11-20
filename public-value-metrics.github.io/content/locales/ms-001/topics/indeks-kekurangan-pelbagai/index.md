# Indeks Kekurangan Pelbagai (IMD)

IMD ialah ukuran rasmi kekurangan relatif (relative deprivation) bagi kawasan kecil di England, menyusun setiap satu daripada 32,844 Lower-layer Super Output Area (LSOA, masing-masing kira-kira 1,500 penduduk) negara itu dari 1 (paling kekurangan) hingga 32,844 (paling kurang kekurangan). Ia diterbitkan oleh apa yang kini Ministry of Housing, Communities and Local Government (MHCLG, dahulu MHCLG/DCLG), yang terkini sebagai English Indices of Deprivation 2019, dan ia secara langsung mengarahkan pembiayaan kerajaan pusat, pengutamaan kesihatan awam, dan kelayakan untuk berpuluh-puluh skim tempatan.

## Mengapa ini penting

Kekurangan bukan satu perkara — sesuatu kejiranan boleh miskin pendapatan tetapi selamat, atau mencukupi pendapatan tetapi menderita hasil kesihatan yang lemah dan perumahan yang buruk. Indeks pendahulu IMD (bermula daripada penunjuk kekurangan Department of the Environment 1970-an) berkembang menjadi model tujuh domain hari ini justeru kerana penyasaran satu penunjuk (kadar pengangguran sahaja, umpamanya) kerap terlepas kawasan yang kekurangan dalam cara lain. IMD 2019 menggabungkan pendapatan, pekerjaan, pendidikan, kesihatan, jenayah, halangan kepada perumahan dan perkhidmatan, dan persekitaran hidup menjadi satu kedudukan komposit bagi setiap LSOA, setiap domain dibina daripada bakul penunjuknya sendiri dan diberat mengikut metodologi MHCLG. Kerana ia beroperasi pada peringkat kawasan kecil (LSOA) dan bukan pihak berkuasa tempatan, ia mendedahkan kantung kekurangan yang tersembunyi dalam daerah yang sebaliknya makmur — sebab mengapa IMD, bukan purata pendapatan pihak berkuasa tempatan, yang sebenarnya dirujuk oleh NHS England, pupil premium Department for Education, dan berpuluh-puluh formula pembiayaan pihak berkuasa tempatan. Perisian yang menentukan kelayakan, mengutamakan jangkauan, atau melaporkan impak mengikut kawasan di England harus menganggap desil atau kedudukan IMD sebagai input kelas pertama, bukan fikiran susulan — dan di mana program sengaja menyasar kawasan paling kekurangan, penilaiannya harus menerapkan [pemberatan pengagihan](../pemberatan-pengagihan/) yang selaras dengan penyasaran itu, dan bukan menilai satu paun manfaat sama sahaja tanpa mengira di mana ia jatuh.

## Matematiknya

```
7 domain, berpemberat:
  Pendapatan                              22.5%
  Pekerjaan                               22.5%
  Pendidikan, Kemahiran dan Latihan       13.5%
  Kekurangan Kesihatan dan Ketidakupayaan 13.5%
  Jenayah                                  9.3%
  Halangan kepada Perumahan dan Perkhidmatan 9.3%
  Persekitaran Hidup                       9.3%

Skor setiap domain: penunjuk dipiawaikan (disusun, kemudian diubah
ke arah taburan normal) dan digabungkan melalui transformasi eksponen
supaya kekurangan tinggi pada mana-mana satu penunjuk tidak boleh
dibatalkan sepenuhnya oleh kekurangan rendah pada yang lain dalam domain itu.

Skor komposit IMD (LSOA) = Σ (skor domain × berat domain)
Susun LSOA mengikut skor komposit → 1 (paling kekurangan) hingga 32,844 (paling kurang kekurangan)
Desil: kedudukan ÷ 3,284 (anggaran), desil 1 = 10% LSOA paling kekurangan
```

## Contoh yang diselesaikan

**Skor komposit LSOA**, menggunakan skor domain terpiawai ilustratif (0 = tiada isyarat kekurangan, lebih tinggi = lebih kekurangan):

```
Pendapatan           0.35 × 0.225 = 0.07875
Pekerjaan            0.30 × 0.225 = 0.06750
Pendidikan           0.20 × 0.135 = 0.02700
Kesihatan            0.15 × 0.135 = 0.02025
Jenayah              0.10 × 0.093 = 0.00930
Halangan Perumahan   0.05 × 0.093 = 0.00465
Persekitaran Hidup   0.08 × 0.093 = 0.00744

Skor komposit = 0.07875 + 0.06750 + 0.02700 + 0.02025
              + 0.00930 + 0.00465 + 0.00744  = 0.21489
```

Skor komposit itu kemudian disusun terhadap skor kesemua 32,844 LSOA. Jika ia meletakkan LSOA pada kedudukan 2,950, ia jatuh dalam desil 1 (2,950 ÷ 3,284 ≈ 0.9, iaitu dalam 10% kejiranan paling kekurangan di England) — yang bagi banyak formula pembiayaan ialah ambang yang membuka kelayakan, tanpa mengira bagaimana purata pihak berkuasa tempatan sekeliling mendapat skor.

## Kaitan dengan kejuruteraan perisian

- Mana-mana perkhidmatan yang menggeokod pengguna kepada poskod atau LSOA boleh mencantum jadual carian IMD yang diterbitkan (CSV berversi percuma daripada MHCLG) untuk menambah desil kekurangan sebagai kovariat — untuk menyasar jangkauan, mengutamakan beban kes, atau melaporkan hasil mengikut jalur kekurangan tanpa mengumpul data peribadi baharu.
- Desil IMD ialah semakan ekuiti piawai untuk perkhidmatan digital awam: menjadualkan silang pengambilan perkhidmatan, keciciran, atau kepuasan mengikut desil IMD mendedahkan jurang akses yang disembunyikan oleh metrik agregat — lihat [inklusi digital](../inklusi-digital/) dan [metrik kepuasan rakyat](../metrik-kepuasan-warganegara/).
- Kerana kedudukan IMD bersifat relatif (ia sentiasa berjumlah set kedudukan tetap merentas England), ia tidak dapat menunjukkan sama ada kekurangan di peringkat kebangsaan meningkat atau menurun dari semasa ke semasa — hanya kawasan mana berkedudukan di mana relatif antara satu sama lain dalam edisi itu; jangan bina papan pemuka aliran mutlak atas kedudukan IMD mentah sahaja.

## Perangkap

- **Membandingkan kedudukan IMD merentas edisi (2015 vs. 2019) sebagai aliran masa** — penunjuk asas, geografi, dan metodologi semuanya berubah antara edisi; MHCLG secara eksplisit menasihatkan supaya tidak menggunakan perubahan kedudukan sebagai bukti kawasan menjadi lebih atau kurang kekurangan.
- **Menerapkan IMD peringkat LSOA kepada individu** — LSOA dalam desil 1 masih mengandungi isi rumah yang tidak kekurangan, dan LSOA desil 10 masih mengandungi yang kekurangan; IMD menerangkan kawasan, bukan orang, dan menggunakannya sebagai proksi kelayakan individu salah mengklasifikasi dalam kedua-dua arah.
- **Mengabaikan perincian peringkat domain demi kedudukan komposit** — dua LSOA dengan skor komposit sama boleh mempunyai profil domain yang sama sekali berbeza (satu kekurangan kesihatan, satu kekurangan jenayah); skim penyasaran yang menyasar satu masalah harus menggunakan skor domain yang relevan, bukan komposit gabungan.

## Sumber

- Ministry of Housing, Communities and Local Government. "English Indices of Deprivation 2019."
  <https://www.gov.uk/government/statistics/english-indices-of-deprivation-2019>
- MHCLG. "The English Indices of Deprivation 2019: Technical Report."
