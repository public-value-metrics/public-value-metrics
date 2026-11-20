# Penilaian Green Book (Model Lima Kes)

Green Book ialah panduan wajib HM Treasury untuk menilai dan menilai semula cadangan perbelanjaan kerajaan UK. Alat utamanya, model lima kes (five-case model), memaksa kes perniagaan menjawab lima soalan berasingan — adakah ia idea yang baik, adakah ia menyampaikan nilai, bolehkah ia diperoleh, bolehkah ia ditanggung, dan bolehkah ia disampaikan — dan bukan meruntuhkan segalanya menjadi satu nombor yang boleh diluluskan menteri dengan sekali lambaian.

## Mengapa ini penting

Setiap cadangan perbelanjaan kerajaan pusat UK yang melebihi had perwakilan jabatan mesti melalui penilaian Green Book sebelum pembiayaan dikeluarkan, dan Green Book Review 2020 HM Treasury (diterbitkan selepas kritikan bahawa proses itu berat sebelah terhadap wilayah yang lebih miskin, lihat <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>) memperketat keperluan bahawa pilihan dibandingkan dengan garis asas "buat minimum" (do minimum) yang tulen dan bahawa kesesuaian strategik ditunjukkan sebelum nilai untuk wang dinilai. Model lima kes itu sendiri mendahului Green Book — ia berasal daripada Office of Government Commerce sebagai struktur kes perniagaan piawai — tetapi edisi Green Book 2022 menanamkannya sebagai bentuk wajib bagi sebarang kes perniagaan yang mencari kelulusan Treasury: <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>.

Tujuan membahagikan kes kepada lima ialah cadangan boleh gagal pada mana-mana satu dimensi tanpa mengira yang lain. Penggantian platform IT yang kukuh dari segi strategik dan berkesan kos masih boleh gagal pada kes komersial jika hanya seorang pembekal yang boleh menyampaikannya (mewujudkan risiko tender tunggal), atau gagal pada kes pengurusan jika jabatan tiada rekod menyampaikan program bersaiz itu. Satu skor "nilai untuk wang" menyembunyikan tepat mod kegagalan sebegini.

## Matematiknya

Model lima kes ialah struktur, bukan formula, tetapi setiap kes mempunyai ujian kuantitatif atau bukti tersendiri:

```
1. Kes strategik
   Bukti objektif perbelanjaan yang dikaitkan dengan strategi organisasi.
   Ujian: adakah wujud kes untuk perubahan sama sekali? ("tidak buat apa-apa" sentiasa satu pilihan.)

2. Kes ekonomi
   Penilaian pilihan terhadap garis asas "buat minimum", menggunakan
   analisis kos-faedah sosial atau analisis keberkesanan kos.
   Ujian: pilihan mana memaksimumkan nilai awam bersih?
   Lihat ../social-cost-benefit-analysis/ dan ../cost-effectiveness-analysis-in-government/

3. Kes komersial
   Penglibatan pasaran, laluan perolehan, pengagihan risiko antara
   pembeli dan pembekal.
   Ujian: adakah pilihan pilihan boleh diperoleh dengan syarat yang boleh diterima?

4. Kes kewangan
   Kemampuan dalam had bajet jabatan, sumber pembiayaan,
   layanan kunci kira-kira.
   Ujian: mampukah kita menanggungnya, tahun ini dan setiap tahun selepasnya?

5. Kes pengurusan
   Tadbir urus, pelan projek, pelan realisasi manfaat, daftar risiko.
   Ujian: bolehkah organisasi ini benar-benar menyampaikannya?
   Lihat ../benefits-realization/
```

Kes ekonomi ialah tempat penilaian kuantitatif berada: pilihan dibandingkan atas asas nilai kini bersih yang dilaraskan [kadar diskaun sosial](../kadar-diskaun-sosial/), menggunakan kaedah [analisis kos-faedah sosial](../analisis-kos-manfaat-sosial/), atau, di mana manfaat tidak boleh dimonetisasi dengan jujur, melalui [analisis keberkesanan kos](../analisis-keberkesanan-kos-dalam-kerajaan/) atau [analisis keputusan berbilang kriteria](../analisis-keputusan-berbilang-kriteria/).

## Contoh yang diselesaikan

**Pihak berkuasa tempatan**: majlis yang menilai sistem IT pembaikan perumahan £12 juta menjalankan kelima-lima kes seperti berikut. Kes strategik: tunggakan pembaikan melanggar standard rumah layak berkanun dalam 18 bulan tanpa intervensi. Kes ekonomi: tiga pilihan dikos sepanjang tempoh penilaian 10 tahun pada kadar diskaun 3.5% (mengikut kadar keutamaan masa sosial standard Green Book 2022) — "buat minimum" (tampal sistem warisan, NPV −£4.1j), "beli" (platform COTS, NPV +£2.3j), "bina" (platform khas, NPV +£0.6j setelah bias optimisme 40% untuk pembangunan perisian dikenakan ke atas kos modal tanpa diskaun, mengikut Green Book Annex A). Beli memenangi kes ekonomi. Kes komersial: dua pembekal yang berdaya maju wujud, tender kompetitif boleh dilaksanakan — lulus. Kes kewangan: modal tersedia daripada Public Works Loan Board, kos hasil muat dalam pelan kewangan jangka sederhana — lulus. Kes pengurusan: majlis telah menyampaikan dua sistem setanding dalam lima tahun lepas — lulus. Cadangan diteruskan dengan "beli."

**Jabatan kerajaan pusat**: cadangan dengan kes ekonomi yang kukuh (NPV +£40j) tetapi di mana hanya seorang pembekal memegang akreditasi yang relevan gagal dalam ujian kes komersial untuk ketegangan kompetitif, memaksa sama ada pengecualian tender tunggal (dengan beban penelitiannya sendiri) atau reka bentuk semula spesifikasi untuk membuka pasaran — kes ekonomi sahaja tidak akan pernah mendedahkan perkara ini.

## Kaitan dengan kejuruteraan perisian

Pasukan kejuruteraan dalam kerajaan atau organisasi yang dibiayai geran biasanya hanya melihat kes ekonomi, kerana itulah bahagian yang kepimpinan produk dan kejuruteraan diminta justifikasikan ("apakah ROI migrasi ini?"). Tetapi kes perniagaan yang melepasi Treasury atau jawatankuasa geran memerlukan kesemua lima, dan jurutera selalunya orang yang paling sesuai menjawab kes komersial (bolehkah ini benar-benar diperoleh, atau adakah ia mengunci kita dalam format proprietari satu vendor?) dan kes pengurusan (adakah kita mempunyai keupayaan penyampaian, atau adakah ini bergantung pada tiga orang tertentu tidak berhenti?). Anggap permintaan "hanya nombor kes perniagaan" sebagai permintaan untuk satu perlima keputusan sebenar. Lihat [nilai untuk wang](../nilai-untuk-wang/) tentang bagaimana output kes ekonomi lazimnya diringkaskan, dan [jumlah kos pemilikan](../jumlah-kos-pemilikan-dalam-it-kerajaan/) untuk teras kuantitatif lazim kes kewangan.

## Perangkap

- **Menulis kes ekonomi dahulu dan kes strategik untuk dipadankan dengannya.** Green Book Review 2020 mendapati mod kegagalan tepat ini mendorong bias penilaian ke arah tempat dan sektor yang sudah dibuktikan dengan baik, mengukuhkan ketaksamaan wilayah; kes strategik harus menetapkan objektif sebelum pilihan dibandingkan.
- **Menganggap "buat minimum" sebagai "tidak buat apa-apa."** Garis asas yang betul ialah pilihan berkos terendah yang masih memenuhi obligasi undang-undang atau keselamatan minimum, bukan khayalan perbelanjaan sifar — membandingkan dengan sifar literal mengembungkan nilai nyata setiap pilihan.
- **Melangkau kes komersial dan pengurusan kerana kes ekonomi kukuh.** Cadangan NPV tinggi yang tidak boleh diperoleh secara kompetitif atau disampaikan oleh organisasi penaja bukan cadangan yang boleh dibiayai; penyemak Treasury kerap menolak atas alasan ini walaupun kes ekonomi menarik.
- **Menerapkan model lima kes sekali sahaja, pada permulaan.** Green Book memerlukan kes disemak semula pada setiap get kelulusan seterusnya (kes pelan strategik, kes perniagaan rangka, kes perniagaan penuh) apabila kos dan bukti menjadi mantap — kes yang dibekukan pada peringkat rangka terlepas kenaikan kos yang akan ditangkap oleh get kemudian.

## Sumber

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury. "Green Book Review 2020: findings and response." 2020.
  <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>
- HM Treasury / Infrastructure and Projects Authority. "Guide to developing the project business
  case." <https://www.gov.uk/government/publications/project-business-case-guide>
