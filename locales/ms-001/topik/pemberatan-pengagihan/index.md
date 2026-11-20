# Pemberatan Pengagihan

Pemberatan pengagihan (distributional weighting) melaraskan nilai kewangan sesuatu kos atau manfaat mengikut siapa yang menerimanya, berdasarkan prinsip bahawa satu paun tambahan lebih bernilai kepada isi rumah miskin berbanding isi rumah kaya. Green Book HM Treasury menyediakan kaedah eksplisit untuk menerapkan pemberatan ini, dibina atas utiliti marginal yang menurun bagi pendapatan, supaya penilaian tidak secara senyap menganggap satu paun yang diperoleh desil terkaya bernilai sama dengan satu paun yang diperoleh desil termiskin.

## Mengapa ini penting

Analisis kos-faedah standard menjumlahkan paun tanpa bertanya paun siapa, yang secara tersirat mengandaikan satu paun bernilai sama kepada semua orang — andaian yang lama diketahui salah oleh ahli ekonomi. Isi rumah yang berpendapatan £15,000/tahun mengalami pertambahan £1,000 dengan cara yang sangat berbeza daripada isi rumah berpendapatan £150,000/tahun, kerana utiliti marginal pendapatan menurun apabila pendapatan meningkat. Jika tidak diberat, penilaian standard secara sistematik memihak kepada intervensi yang memanfaatkan kumpulan yang lebih kaya dan sudah berada, kerana kuasa perbelanjaan mereka yang lebih tinggi mengembungkan penilaian kewangan manfaat yang sampai kepada mereka (peningkatan taman berhampiran perumahan mahal "menunjukkan" manfaat nilai hartanah yang lebih besar daripada peningkatan yang sama berhampiran perumahan murah, semata-mata kerana harga lebih tinggi, bukan kerana pertambahan kebajikan lebih besar).

Panduan tambahan Green Book tentang analisis pengagihan, diperkukuh selepas semakan Treasury 2020 yang menjawab kritikan bahawa metodologi penilaian secara sistematik memihak kepada London dan Tenggara England, menetapkan pendekatan pemberatan formal berdasarkan anggapan keanjalan utiliti marginal pendapatan sekitar 1.3 — bermaksud pendapatan yang berganda kira-kira menjadikan nilai marginal satu paun tambahan separuh (khususnya, 2^-1.3 ≈ 0.41 kali). Ini bukan pelarasan pembundaran: menerapkannya boleh mengubah antara dua program yang bersaing mana yang menunjukkan nilai kini bersih lebih tinggi, terutamanya apabila membandingkan intervensi yang tertumpu di kawasan daif dengan yang tersebar merentas penduduk umum.

## Matematiknya

Berat pengagihan Green Book bagi satu paun manfaat yang diperoleh isi rumah pada tahap pendapatan y, relatif kepada satu paun pada tahap pendapatan purata kebangsaan ȳ:

```
Berat(y) = (ȳ / y)^e

di mana:
  y  = pendapatan isi rumah (atau pendapatan kumpulan yang terkesan)
  ȳ  = pendapatan isi rumah purata (rujukan)
  e  = keanjalan utiliti marginal pendapatan (Green Book: lebih kurang 1.3)
```

Menerapkan berat pada manfaat bersih:

```
Manfaat berat = Σ [manfaat tidak berat kepada kumpulan i × Berat(y_i)]
```

Kumpulan yang berpendapatan separuh daripada purata kebangsaan (y = 0.5ȳ) mendapat berat (1/0.5)^1.3 = 2^1.3 ≈ 2.46 — setiap paun manfaat kepada kumpulan itu dikira bernilai kira-kira 2.46 kali satu paun kepada isi rumah berpendapatan purata.

## Contoh yang diselesaikan

**Dua program tempatan yang bersaing**, masing-masing dengan manfaat bersih tidak berat £2 juta/tahun, bersaing untuk dana pertumbuhan wilayah yang sama:

- *Program A*: skim sokongan perniagaan di pekan makmur, pendapatan isi rumah purata £45,000 (kira-kira 1.3× purata kebangsaan yang diandaikan iaitu £35,000).
- *Program B*: program kemahiran di wad daif, pendapatan isi rumah purata £18,000 (kira-kira 0.51× purata kebangsaan).

```
Berat(A) = (35,000 / 45,000)^1.3 = (0.778)^1.3 ≈ 0.72
Berat(B) = (35,000 / 18,000)^1.3 = (1.944)^1.3 ≈ 2.53

Manfaat berat A = £2,000,000 × 0.72 = £1.44 juta
Manfaat berat B = £2,000,000 × 2.53 = £5.06 juta
```

Tanpa berat, kedua-dua program adalah seri. Dengan berat untuk impak pengagihan, manfaat Program B lebih daripada tiga kali ganda lebih besar — keputusan yang membalikkan syor pembiayaan dan mencerminkan tujuan eksplisit Green Book mewajibkan pemberatan ditunjukkan, bukan sekadar nisbah manfaat-kos tidak berat.

**Peruntukan geran badan amal**: pembiaya yang membandingkan geran £500,000 yang sampai kepada 1,000 isi rumah berpendapatan rendah (berat ≈ 2.0, nilai berat bersamaan £1 juta) dengan £500,000 yang sama sampai kepada 1,000 isi rumah berpendapatan sederhana (berat ≈ 1.0, nilai berat bersamaan £500,000) harus menunjukkan kes pengagihan secara eksplisit dalam kertas lembaganya, bukan membiarkannya disimpulkan.

## Kaitan dengan kejuruteraan perisian

Pemberatan pengagihan jarang muncul secara langsung dalam metrik penyampaian perisian, tetapi ia harus membentuk cara pasukan kejuruteraan dan data mereka bentuk pengukuran dan penyasaran:

- Apabila membina papan pemuka impak atau kalkulator manfaat, dedahkan profil pendapatan atau kekurangan (deprivation) mereka yang terkesan, bukan sekadar jumlah manfaat agregat — angka agregat tanpa pecahan pengagihan menyembunyikan tepat pembalikan yang ditunjukkan di atas.
- Pautkan logik penyasaran dalam reka bentuk perkhidmatan kepada data kekurangan yang sama yang digunakan Green Book — lihat [Index of Multiple Deprivation](../indeks-kekurangan-pelbagai/) — supaya capaian perkhidmatan digital boleh dinilai dari segi ekuiti, bukan sekadar kecekapan (E keempat yang dipertikaikan dalam [nilai untuk wang](../nilai-untuk-wang/)).
- Apabila algoritma memperuntukkan sumber yang terhad (slot temu janji, masa pekerja kes, subsidi), fungsi objektif "maksimumkan jumlah manfaat" yang tidak berat akan, secara reka bentuk, menghasilkan semula bias yang sama yang pemberatan Green Book wujud untuk membetulkannya — nyatakan ini secara eksplisit kepada pemilik dasar sebelum mengoptimumkan.

## Perangkap

- **Menerapkan berat pengagihan secara tidak konsisten merentas portfolio.** Memberat manfaat satu program tetapi tidak pembandingnya menghasilkan perbandingan yang berat sebelah, bukan lebih adil; Green Book memerlukan layanan setara.
- **Menggunakan nilai hartanah atau pasaran sebagai proksi kebajikan tanpa pelarasan.** Harga pasaran sendiri terherot oleh ketaksamaan pendapatan sedia ada, yang tepat dimaksudkan untuk dibetulkan oleh pemberatan pengagihan — menggunakan nilai pasaran tanpa pelarasan boleh mengira bias dua kali.
- **Mengabaikan variasi dalam kumpulan.** Pemberatan mengikut pendapatan purata kawasan (cth. desil Index of Multiple Deprivation) boleh tersalah wakil individu yang tidak sepadan dengan purata kawasan mereka; gunakan data pendapatan paling terperinci yang munasabah tersedia.
- **Menganggap keanjalan 1.3 sebagai pemalar sejagat.** Green Book sendiri menyatakan ini anggaran dengan julat yang munasabah; uji kepekaan keputusan utama terhadap keanjalan alternatif dan bukan menganggap 1.3 tepat.

## Sumber

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation", and
  supplementary guidance on distributional impacts (2022 edition).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury, "Green Book Review 2020: Findings and Response" (addressing regional-bias criticism).
  <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>
- Fujiwara D, Campbell R. "Valuation Techniques for Social Cost-Benefit Analysis." HM Treasury/DWP,
  2011 (background on marginal utility of income elasticity estimates).
