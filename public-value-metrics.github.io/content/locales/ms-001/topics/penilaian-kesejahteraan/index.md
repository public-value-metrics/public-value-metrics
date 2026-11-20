# Penilaian Kesejahteraan (WELLBY)

Penilaian kesejahteraan menetapkan harga kesan sesuatu dasar secara langsung dari segi kepuasan hidup, menggunakan WELLBY (tahun hayat terlaras kesejahteraan) sebagai unitnya — satu WELLBY bersamaan perubahan satu mata pada skala kepuasan hidup 0–10, berterusan selama setahun. Ia alternatif yang disahkan secara rasmi oleh HM Treasury kepada memonetisasi setiap manfaat melalui kesanggupan membayar.

## Mengapa ini penting

"Wellbeing guidance for appraisal: supplementary Green Book guidance" HM Treasury (2021, <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>) secara rasmi membawa data kesejahteraan subjektif ke dalam penilaian kerajaan pusat, memberi penganalisis laluan untuk menilai hasil — hubungan sosial, kesihatan mental, keselamatan, penyertaan sivik — yang sukar dinilai secara meyakinkan oleh kaedah [keutamaan yang dinyatakan](../penilaian-keutamaan-yang-dinyatakan/) dan [keutamaan terzahir](../penilaian-keutamaan-terzahir/), kerana orang sering buruk dalam meramal sejauh mana sesuatu barangan sebenarnya akan menjejaskan kepuasan hidup mereka. Panduan itu, yang dibangunkan bersama What Works Centre for Wellbeing, menetapkan nilai kewangan yang disyorkan bagi setiap WELLBY — £13,000 (harga 2021, disemak semula secara berkala) — yang diperoleh daripada hubungan yang diperhatikan dalam tinjauan kesejahteraan besar (terutamanya Annual Population Survey ONS, yang bertanya empat soalan kesejahteraan ONS4 sejak 2011) antara pendapatan dan kepuasan hidup, memberi penganalisis kadar penukaran kembali kepada paun apabila perbandingan dimonetisasi dengan penilaian Green Book lain diperlukan.

Kaedah ini penting kerana ia membalikkan logik penilaian biasa: bukannya bertanya apa yang orang sanggup bayar untuk sesuatu hasil (keutamaan yang dinyatakan) atau menyimpulkan nilai daripada transaksi pasaran yang berkaitan (keutamaan terzahir), ia mengukur kesan hasil itu terhadap kepuasan hidup yang dilaporkan secara langsung, memintas jurang antara apa yang orang katakan mereka mahu dan apa yang sebenarnya menjadikan mereka lebih baik. Ini juga hadnya yang utama — kepuasan hidup yang dilaporkan sendiri dipengaruhi kesan penyesuaian dan pembingkaian yang mesti dikawal oleh pengamal yang berhati-hati.

## Matematiknya

```
WELLBY = 1 mata kepuasan hidup (skala 0-10) berterusan bagi 1 orang selama 1 tahun

Jumlah WELLBY daripada sesuatu dasar =
  Σ (perubahan skor kepuasan hidup) × (bilangan orang terjejas)
    × (tempoh dalam tahun, didiskaun pada kadar diskaun sosial)

Nilai dimonetisasi = Jumlah WELLBY × nilai bagi setiap WELLBY
  (nilai disyorkan HM Treasury: £13,000 bagi setiap WELLBY, harga 2021,
   tertakluk kepada semakan berkala — semak panduan semasa sebelum digunakan)
```

Ini berbeza daripada [tahun hayat terlaras kesejahteraan](../tahun-hayat-terlaras-kesejahteraan/) dalam ekonomi kesihatan, yang lazimnya berlabuh pada skala kualiti hidup berkaitan kesihatan (EQ-5D dan sebagainya) dan bukannya kepuasan hidup umum; keduanya berkait tetapi tidak boleh ditukar ganti, dan penilaian Green Book harus jelas tentang skala dan kaedah pemerolehan mana yang mendasari angka WELLBY yang dilaporkan.

## Contoh yang diselesaikan

**Pihak berkuasa tempatan**: sebuah majlis menjalankan skim persahabatan komuniti untuk penduduk warga emas yang terpencil, melayani 400 orang. Tinjauan kesejahteraan sebelum/selepas menggunakan soalan kepuasan hidup ONS4 menunjukkan purata skor peserta naik daripada 5.8 kepada 6.5 — peningkatan 0.7 mata — berterusan sepanjang tempoh pembiayaan program selama 2 tahun.

```
WELLBY dijana = 400 orang × 0.7 mata × 2 tahun = 560 WELLBY
Nilai dimonetisasi = 560 × £13,000 = £7.28 juta
Kos program = £450,000 sepanjang 2 tahun

Nisbah manfaat-kos ≈ £7.28 juta / £0.45 juta ≈ 16:1
```

Nisbah setinggi ini harus mencetuskan penelitian dan bukannya perayaan — panduan kesejahteraan Green Book memberi amaran secara jelas supaya tidak menerima peningkatan yang dilaporkan sendiri daripada sampel kecil sebagai muka nilai tanpa menyemak kesan pemilihan (adakah hanya penduduk yang paling mesra dan paling berkemungkinan bertambah baik menyertai skim itu?) dan tanpa kumpulan perbandingan; penilaian yang direka dengan baik akan menolak perubahan kontrafaktual yang diperhatikan dalam bukan peserta, lihat [analisis kontrafaktual](../analisis-kontrafaktual/).

**Kerajaan negara**: membandingkan dua program pekerjaan menggunakan WELLBY dan bukan pendapatan sahaja menangkap bahawa pengangguran membawa kos kesejahteraan melebihi pendapatan yang hilang — penyelidikan kesejahteraan UK secara konsisten mendapati pengangguran mengurangkan kepuasan hidup melebihi apa yang diramalkan oleh kehilangan pendapatan sahaja, kerana kesan bukan kewangan kehilangan struktur, tujuan dan hubungan sosial. Program yang dinilai berdasarkan peningkatan pendapatan sahaja akan memperkecilkan nilainya berbanding yang dinilai tambahan pada WELLBY.

## Kaitan dengan kejuruteraan perisian

Penilaian kesejahteraan jarang sampai kepada pasukan kejuruteraan secara langsung, tetapi ia membentuk apa yang ditakrifkan sebagai "kejayaan" bagi produk sektor sosial dan perkhidmatan awam — platform persahabatan digital, alat triaj kesihatan mental, atau platform komuniti untuk penduduk terpencil harus menjangka impaknya akhirnya akan diukur sedemikian, yang bermakna analitik produk perlu menangkap *siapa* yang dicapai dan *berapa lama*, bukan sekadar kiraan penggunaan. Bina instrumentasi tinjauan kesejahteraan (ONS4 atau yang setara yang disahkan) ke dalam penilaian perkhidmatan sejak awal dan bukannya menambahnya secara retrospektif; memasang garis dasar kesejahteraan selepas perkhidmatan dilancarkan menghilangkan perbandingan sebelum/selepas sepenuhnya. Lihat [hasil berbanding output](../hasil-berbanding-output/) dan [kaedah penilaian impak](../kaedah-penilaian-impak/).

## Perangkap

- **Tiada kontrafaktual atau kumpulan perbandingan.** Peningkatan kesejahteraan sebelum/selepas tanpa kawalan terhadap apa yang akan berlaku juga melebih-lebihkan kesan program; lihat [analisis kontrafaktual](../analisis-kontrafaktual/) dan [additionality dan deadweight](../additionality-dan-deadweight/).
- **Sampel kecil dan memilih sendiri.** Tinjauan kesejahteraan terhadap peserta program yang memilih untuk menyertai terdedah kepada bias pemilihan — mereka yang menyertai dan kekal mungkin sudah cenderung bertambah baik.
- **Menganggap penukaran £-bagi-setiap-WELLBY sebagai tepat.** Nilai dimonetisasi ialah konvensyen dasar yang diperoleh daripada regresi pendapatan-kesejahteraan, bukan harga pasaran; gunakannya untuk keboleh-bandingan merentas penilaian Green Book, bukan sebagai dakwaan tentang "nilai" kesejahteraan.
- **Mengelirukan WELLBY dengan QALY berkaitan kesihatan.** Keduanya mengukur konstruk berbeza pada skala berbeza; lihat [tahun hayat terlaras kesejahteraan](../tahun-hayat-terlaras-kesejahteraan/) untuk varian ekonomi kesihatan dan jangan purata keduanya bersama.

## Sumber

- HM Treasury. "Wellbeing guidance for appraisal: supplementary Green Book guidance." 2021.
  <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>
- What Works Centre for Wellbeing. <https://whatworkswellbeing.org/>
- Office for National Statistics. "Personal well-being in the UK" (ukuran ONS4).
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing>
- Fujiwara D, et al. "Wellbeing Valuation: A Nascent Field?" LSE / ringkasan penyelidikan Simetrica.
