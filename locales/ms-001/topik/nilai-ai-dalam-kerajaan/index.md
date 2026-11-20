# Nilai AI dalam Kerajaan

Nilai AI dalam kerajaan ialah keperluan bahawa sistem AI yang digunakan dalam perkhidmatan awam mencapai
tahap nilai untuk wang dan nilai awam yang sama seperti mana-mana keputusan perbelanjaan lain — bukan lebih
rendah kerana ia baharu, dan bukan lebih tinggi kerana ia ditakuti. Ini ialah soalan yang mesti dapat dijawab
oleh pasukan penyampaian sebelum, bukan selepas, ciri AI dilancarkan: adakah ini menghasilkan lebih banyak
nilai daripada kosnya, setelah jaminan, pengawasan dan risiko dinilai dengan jujur?

## Mengapa ini penting

Central Digital and Data Office (CDDO) UK menerbitkan Generative AI Framework for Government pada 2024,
berdasarkan panduan interim terdahulu dari Jun 2023, dan menyusunnya sekitar sepuluh prinsip yang merangkumi
apa itu AI generatif, implikasi etikanya, keselamatan alat, kawalan jaminan kualiti, pengurusan seluruh
kitaran hayat AI generatif, mengenal pasti kes penggunaan yang sebenar, kerjasama merentas kerajaan,
ketelusan, kemahiran dan tadbir urus. Penegasan rangka kerja itu terhadap "kawalan manusia yang bermakna"
dan pengurusan kitaran hayat penuh wujud kerana kes perniagaan projek AI mempunyai mod kegagalan khusus yang
tidak ada pada perbelanjaan IT lain: angka produktiviti utama sesuatu pilot mudah dihasilkan dan mudah
dibesar-besarkan, kerana ia diukur sebelum beban pengesahan, pembetulan dan pengawasan yang diwujudkan oleh
alat itu diambil kira. Di samping rangka kerja itu, Algorithmic Transparency Recording Standard (ATRS)
menghendaki badan awam menerbitkan rekod piawai — tujuan, data yang digunakan, prestasi, ujian keadilan,
peraturan pengawasan manusia — bagi alat algoritma yang mempunyai pengaruh ketara terhadap keputusan
mengenai individu, yang menjadikan kos jaminan sistem AI sebagai rekod awam, bukan anggaran dalaman yang
boleh dilangkau oleh sesebuah pasukan secara senyap.

## Matematiknya

Penerimaan AI dinilai sebagai tambahan kepada, bukan pengganti, penilaian [nilai untuk wang](../nilai-untuk-wang/)
yang piawai, dengan sebutan khusus AI dinyatakan secara jelas dan bukannya dilebur ke dalam satu angka
"keuntungan produktiviti":

```
Nilai bersih sistem AI =
    keuntungan produktiviti (masa dijimatkan × kos kakitangan sepenuhnya)
  − kos lesen/pengkomputeran
  − kos pengesahan dan pengawasan manusia (menyemak output AI sebelum
    ia diambil tindakan — ini tidak menyusut kepada sifar walaupun bagi alat yang matang)
  − kos dokumentasi ATRS dan pemantauan berterusan
  − kos kemudaratan terlaras risiko akibat ralat, bias atau halusinasi,
    ditimbang mengikut siapa yang menanggung kemudaratan itu (distributional-weighting)

Angka produktiviti pilot yang meninggalkan sebutan pengawasan tidak
setanding dengan garis dasar kos operasi biasa yang sudah merangkumi
semakan manusia yang setara — lihat ai-productivity-in-the-public-sector
untuk disiplin pengukuran produktiviti yang lebih lengkap yang dipinjam di sini.
```

## Contoh yang diselesaikan

**Pihak berkuasa tempatan menggunakan alat AI generatif untuk mendraf jawapan pertama kepada pertanyaan cukai
majlis yang rutin**: 25,000 pertanyaan/tahun, sebelum ini dikendalikan sepenuhnya oleh pegawai kes pada purata
14 minit/pertanyaan, kos kakitangan sepenuhnya £34/jam.

```
Kos garis dasar (tanpa AI):
  25,000 × (14/60) × £34 = £198,333/tahun

Tuntutan utama pilot: AI mendraf jawapan dalam 90 saat,
pegawai kes "hanya menyemak dan menghantar" — masa baharu yang dituntut ialah 3 minit
  25,000 × (3/60) × £34 = £42,500/tahun
  → penjimatan yang dituntut £155,833/tahun (nampak transformatif)

Angka sepenuhnya, diukur selepas 3 bulan beroperasi dan bukannya dalam
kes ujian pilot yang dipilih sendiri:
  Masa semakan + pembetulan sebenar bagi setiap jawapan: 6 minit (draf
  memerlukan suntingan sebenar bagi pertanyaan yang kompleks atau sensitif dari segi emosi)
  25,000 × (6/60) × £34 = £85,000/tahun
  Kos lesen/pengkomputeran: £38,000/tahun
  Dokumentasi ATRS dan pemantauan bias/kualiti setiap suku tahun: £14,000/tahun
  Jumlah kos = 85,000 + 38,000 + 14,000 = £137,000/tahun

Penjimatan sebenar = 198,333 − 137,000 = £61,333/tahun — tulen dan wajar
dikekalkan, tetapi jauh di bawah separuh daripada tuntutan utama pilot, dan
ia memerlukan pengukuran masa pengawasan yang jujur, bukan yang terbaik
seperti dalam pilot, untuk menemuinya.
```

## Kaitan dengan kejuruteraan perisian

Di sinilah [produktiviti AI dalam sektor awam](../produktiviti-ai-dalam-sektor-awam/) dan topik ini
bertemu: pasukan kejuruteraan yang membina ciri AI ke dalam perkhidmatan awam memiliki instrumentasi yang
membolehkan angka "sebenar" dalam contoh yang diselesaikan — merekod masa semakan sebenar, jarak suntingan
antara draf dan jawapan yang dihantar, dan kadar peningkatan kes (escalation), dan bukannya mempercayai
keadaan demo pilot. Ciri AI harus dinilai berdasarkan titik 9 [digital-service-standard](../standard-perkhidmatan-digital/)
(perkhidmatan selamat, privasi pengguna) dan dirujuk silang dengan
[nilai keselamatan siber sektor awam](../nilai-keselamatan-siber-sektor-awam/) apabila alat itu menyentuh data
warganegara, dan mana-mana sistem AI yang mempunyai pengaruh ketara terhadap keputusan mengenai individu
memerlukan rekod ATRS sebelum ia boleh dianggap bersedia untuk penilaian, sama seperti sesuatu perkhidmatan
memerlukan penilaian [digital-service-standard](../standard-perkhidmatan-digital/) yang lulus sebelum beroperasi.

## Perangkap

- **AI-washing**: melabel semula automasi berasaskan peraturan sedia ada sebagai "AI" untuk mendapatkan
  pembiayaan atau perhatian yang diperuntukkan bagi penerimaan AI, tanpa risiko ketepatan atau bias yang
  sebenarnya mewajarkan penelitian tambahan rangka kerja itu.
- **Mengukur produktiviti pilot, bukan produktiviti pengeluaran**: pilot dijalankan pada kes ujian terpilih
  dengan penyemak yang terlibat dan peka; pengeluaran dijalankan pada campuran kes penuh yang bersepah
  dengan penyemak yang, lama-kelamaan, membangunkan bias automasi dan kurang menyemak output — kedua-duanya
  memesongkan angka kos pengawasan yang jujur.
- **Melangkau pendaftaran ATRS kerana alat itu "bukan benar-benar membuat keputusan secara automatik"**:
  ambang piawaian itu ialah pengaruh ketara terhadap keputusan mengenai individu, yang dipenuhi oleh
  kebanyakan alat draf atau triaj AI yang berhadapan dengan warganegara walaupun seorang manusia secara
  teknikal meluluskannya.
- **Mengabaikan impak pengagihan akibat ralat**: kadar ralat sistem AI yang dipuratakan merentas semua
  pengguna boleh menyembunyikan kadar ralat atau bias yang jauh lebih tinggi bagi kumpulan tertentu;
  [pemberat pengagihan](../pemberatan-pengagihan/) harus dikenakan pada sebutan kemudaratan terlaras
  risiko, bukan sekadar angka ketepatan agregat.

## Sumber

- Central Digital and Data Office, Generative AI Framework for Government (2024). <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
- Algorithmic Transparency Recording Standard. <https://www.gov.uk/government/collections/algorithmic-transparency-recording-standard-hub>
- HM Treasury, Green Book: central government guidance on appraisal and evaluation. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-governent>
