# Pulangan Pelaburan Penderma

Pulangan pelaburan penderma ialah apa yang sebenarnya dibeli oleh satu paun seorang penderma tertentu dalam bentuk hasil (outcome) — bukan nisbah operasi badan amal, dan bukan pulangan badan amal itu sendiri atas keseluruhan bajetnya. Ia menyusun semula ROI daripada perspektif organisasi (setakat mana cekap kami beroperasi) kepada perspektif penderma (apa yang diubah oleh sumbangan marginal saya), dan kedua-dua angka itu kerap, dan secara salah, dianggap sama.

## Mengapa ini penting

"ROI" sesebuah badan amal sendiri, setakat frasa itu digunakan, biasanya menggambarkan sesuatu seperti [kos setiap penerima manfaat](../kos-setiap-benefisiari/) atau [nisbah overhead badan amal](../nisbah-overhed-badan-amal/) — ukuran kecekapan organisasi. ROI penderma ialah soalan yang sama sekali berbeza: memandangkan badan amal ini sudah mempunyai pendapatan lain, apakah yang *wang penderma ini* tambah pada margin? Jika badan amal akan menyampaikan program yang sama dengan atau tanpa sumbangan £10,000 tertentu — kerana ia mempunyai rizab yang banyak, atau kerana pembiaya lain akan mengisi jurang itu — ROI penderma bagi sumbangan itu hampir sifar, sebaik mana pun nisbah overhead keseluruhan atau kos setiap hasil badan amal itu kelihatan.

Ini ialah persoalan additionality yang sama yang menjadi asas penilaian [nilai untuk wang](../nilai-untuk-wang/) dalam perbelanjaan awam UK dan [additionality dan deadweight](../additionality-dan-deadweight/) dalam penilaian program: nilai yang dicipta hanya boleh dikreditkan kepada pembiaya setakat ia tidak akan berlaku juga. Platform penderma utama dan organisasi pemberian berkesan (Giving What We Can, GiveWell) membina syor mereka secara eksplisit di sekitar perbezaan ini, bertanya bukan "adakah ini badan amal yang baik" tetapi "adakah badan amal ini mempunyai ruang untuk lebih banyak pembiayaan yang belum diisi supaya sumbangan saya bersifat additional."

## Matematiknya

```
ROI penderma ≠ Kecekapan operasi badan amal

ROI penderma ≈  (Hasil yang dicapai dengan sumbangan) − (Hasil yang akan
                 berlaku tanpanya, iaitu kontrafaktual)
               ─────────────────────────────────────────────────
                              Saiz sumbangan

Input utama:
  - Ruang untuk lebih banyak pembiayaan (adakah badan amal terkekang pembiayaan pada margin?)
  - Funging (adakah penderma lain akan mengisi jurang itu?)
  - Keberkesanan kos marginal pada tahap pembiayaan tertentu (kos sering
    meningkat apabila intervensi meluas melepasi populasi yang paling mudah dicapai)
```

Lihat [keberkesanan kos altruisme efektif](../keberkesanan-kos-altruisme-efektif/) tentang bagaimana GiveWell mengoperasikan soalan "ruang untuk lebih banyak pembiayaan", dan [analisis kontrafaktual](../analisis-kontrafaktual/) untuk kaedah umum.

## Contoh yang diselesaikan

Seorang penderma memilih antara dua sumbangan £5,000:

- **Badan amal C**: mempunyai program teras yang dibiayai sepenuhnya dengan rizab £2 juta dan senarai menunggu pembiaya; £5,000 marginal itu mungkin ditambah ke rizab atau aktiviti keutamaan lebih rendah. Anggaran hasil tambahan-penderma: minimum — wang itu jelas tidak mengubah apa yang berlaku.
- **Badan amal D**: program kecil berasaskan bukti yang telah menyatakan secara terbuka bahawa ia terpaksa menolak 200 orang suku tahun depan tanpa tambahan £50,000, dan telah mengumpul £42,000 daripadanya. £5,000 marginal itu sangat berkemungkinan membiayai penyampaian tambahan sebenar — katakan, 20 orang tambahan dilayani, pada kos setiap penerima manfaat yang dinyatakan badan amal itu sendiri iaitu £250.

Saiz sumbangan sama, penderma sama, ROI penderma jauh berbeza — bukan kerana Badan amal C organisasi yang lebih buruk (ia mungkin mempunyai angka kos setiap hasil keseluruhan yang lebih baik) tetapi kerana jurang pembiayaan marginalnya sudah tertutup.

## Kaitan dengan kejuruteraan perisian

Platform penderma dan alat syor pemberian terlalu kerap memaparkan hanya metrik kecekapan peringkat organisasi (nisbah overhead, kos setiap penerima manfaat) kerana itulah yang diterbitkan badan amal dalam laporan tahunan dan yang paling mudah ditarik ke dalam jadual perbandingan. Mewakili ROI penderma dengan betul memerlukan titik data yang berbeza dan lebih sukar diperoleh: jurang pembiayaan semasa yang dinyatakan badan amal atau "ruang untuk lebih banyak pembiayaan," yang berubah sepanjang tahun dan jarang merupakan data berstruktur. Platform yang mahu menyokong penaakulan ROI penderma yang sebenar memerlukan sama ada suapan langsung daripada pendedahan jurang pembiayaan (seperti yang dikekalkan GiveWell secara manual untuk badan amal yang disyorkannya) atau penafian eksplisit bahawa jadual perbandingan menunjukkan kecekapan organisasi, bukan additionality penderma. Lihat [nisbah overhead badan amal](../nisbah-overhed-badan-amal/) untuk metrik yang paling kerap, dan secara salah, dikelirukan dengan ROI penderma.

## Perangkap

- **Mengelirukan kecekapan badan amal dengan additionality penderma.** Badan amal yang diurus baik dan beroverhead rendah masih boleh mempunyai ROI penderma marginal hampir sifar jika ia tidak terkekang pembiayaan.
- **Mengabaikan funging.** Jika pembiaya institusi besar akan menampung jurang itu juga, sumbangan penderma individu menyesarkan wang pembiaya itu dan bukan menambah penyampaian baharu.
- **Menganggap keberkesanan kos linear pada skala besar.** Penerima manfaat yang paling murah dicapai selalunya dilayani dahulu; kos marginal setiap hasil kerap meningkat apabila program berkembang, jadi ROI pada paun seterusnya tidak sama dengan ROI pada paun purata yang sudah dibelanjakan.
- **Tiada jurang pembiayaan yang dinyatakan.** Badan amal atau platform yang tidak dapat menyatakan apa yang akan dibiayai oleh £X seterusnya tidak boleh menyokong dakwaan ROI penderma yang sebenar, hanya dakwaan kos purata.

## Sumber

- Giving What We Can, on funding gaps and cost-effectiveness in donation decisions. <https://www.givingwhatwecan.org/>
- GiveWell, "Our criteria" (room for more funding as an explicit criterion). <https://www.givewell.org/how-we-work/our-criteria>
- HM Treasury, the Green Book: appraisal and evaluation in central government. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-governent>
