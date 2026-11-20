# Kos Kelewatan dalam Program Awam (CoD)

Kos Kelewatan (Cost of Delay) ialah nilai awam yang hilang bagi setiap unit masa apabila sesuatu program, perkhidmatan atau perubahan sistem *belum* disampaikan. Ia ialah metrik jambatan induk bagi kumpulan topik ini: ia menukar "pelancaran tertangguh enam bulan" kepada paun seminggu, atau kepada WELLBY seminggu, supaya kelewatan boleh dibahaskan dalam mata wang yang sama dengan kes perniagaan itu sendiri.

## Mengapa ini penting

Peraturan Reinertsen — "jika anda hanya mengukur satu perkara, ukurlah Kos Kelewatan" — berpindah ke dalam kerajaan hampir tanpa perubahan, kerana program awam luar biasa terdedah kepadanya: kes perniagaan diluluskan berdasarkan aliran manfaat yang diramalkan, tetapi aliran itu hanya mula mengalir semasa pelancaran, dan setiap minggu kelewatan ialah satu minggu nilai yang dilepaskan yang tiada sesiapa letakkan harga dalam daftar risiko. Penelitian berulang National Audit Office terhadap pelancaran Universal Credit (lihat laporan "Rolling Out Universal Credit"nya, <https://www.nao.org.uk/>) menggambarkan corak ini: kelewatan jadual dijejaki dan dilaporkan, tetapi kos paun-seminggu bagi *belum lagi* menyampaikan sistem yang dirombak kepada tranche pemohon seterusnya jarang dinyatakan sebagai angka utama, walaupun itulah angka yang sepatutnya memacu pengutamaan dan peningkatan isu. Tanpa angka CoD, program yang tertangguh kelihatan seperti masalah jadual bagi lembaga penyampaian; dengannya, ia ialah masalah hakisan nilai bagi pegawai perakaunan.

## Matematiknya

```
CoD = manfaat bagi setiap unit masa yang dilepaskan selagi belum disampaikan   (£/minggu atau WELLBY/minggu)

Jumlah kerugian kelewatan = CoD × tempoh kelewatan

Aliran manfaat untuk dijumlahkan bagi program awam:
  penjimatan pelepasan tunai   (pengurangan fraud/ralat, kos sementara yang dielakkan)
+ kapasiti bukan tunai dibebaskan (jam pegawai kes/pegawai × kos sepenuhnya)
+ manfaat kesejahteraan          (WELLBY × £13,000/WELLBY, panduan tambahan
                                   kesejahteraan Green Book HMT, harga 2019)
```

Bagi perkhidmatan berhadapan warganegara, nyatakan dalam kesejahteraan serta wang — lihat [tahun hayat terlaras kesejahteraan](../tahun-hayat-terlaras-kesejahteraan/) untuk unit asasnya, dan [kos lepas dalam perbelanjaan awam](../kos-peluang-dalam-perbelanjaan-awam/) untuk apa yang boleh dibiayai oleh paun yang tertangguh itu.

## Contoh yang diselesaikan

**Pihak berkuasa tempatan**: peningkatan sistem faedah perumahan mengurangkan ralat bayaran lebih sebanyak £150/tuntutan/tahun merentas 20,000 tuntutan aktif.

```
Manfaat tahunan = 150 × 20,000 = £3,000,000/tahun
CoD = 3,000,000 / 52 ≈ £57,700/minggu
Kelewatan pelaksanaan 12 bulan berharga 52 × 57,700 ≈ £3,000,000 dalam ralat yang boleh dielakkan.
```

**Agensi kerajaan pusat**: perkhidmatan penilaian faedah kurang upaya, disampaikan enam bulan (26 minggu) lebih lewat daripada yang dirancang, bermakna 200,000 pemohon/tahun menunggu purata tiga minggu lebih lama untuk keputusan. Setiap minggu tambahan ketidakpastian kewangan dimodelkan sebagai kesan −0.0018 WELLBY (mata kepuasan hidup):

```
Kerugian WELLBY bagi setiap pemohon = 3 × 0.0018 = 0.0054
Kerugian WELLBY tahunan = 200,000 × 0.0054 = 1,080 WELLBY/tahun
CoD_kesejahteraan = 1,080 / 52 ≈ 20.8 WELLBY/minggu
CoD_wang = 20.8 × £13,000 ≈ £270,000/minggu nilai kesejahteraan
```

Kelewatan 26 minggu oleh itu "berharga" kira-kira 540 WELLBY — bernilai kira-kira £7 juta pada penilaian kesejahteraan Green Book — membingkai semula tarikh pelancaran yang terlepas sebagai peristiwa kebajikan warganegara, bukan nota kaki pengurusan projek.

## Kaitan dengan kejuruteraan perisian

CoD ialah apa yang menjadikan [metrik DORA](../metrik-dora-untuk-nilai-awam/) dan [metrik aliran](../metrik-aliran-dalam-penyampaian-kerajaan/) boleh difahami secara kewangan: masa pimpin dalam saluran paip × CoD ialah wang (atau kesejahteraan) yang terbakar dalam baris gilir sebelum ia sampai kepada warganegara. Secara konkrit:

- **Pengutamaan**: rankingkan tunggakan kerja mengikut CoD ÷ tempoh dan bukan mengikut kekananan pihak berkepentingan — setara kejuruteraan perisian bagi keperluan Green Book untuk menilai pilihan berdasarkan nilai, bukan siapa yang meminta.
- **Perolehan**: kitaran perolehan rangka kerja 12–18 bulan mempunyai CoD; memberinya harga mengubah kes kecemasan bagi laluan dipercepat, dan menyumbang terus kepada keputusan [bina atau beli](../bina-atau-beli-dalam-kerajaan/) di mana masa-ke-nilai ialah pemacu keputusan.
- **Kes manfaat**: setiap angka CoD yang disebut semasa kelulusan harus muncul semula pada [realisasi manfaat](../realisasi-manfaat/) — jika kos kelewatan itu nyata, manfaat yang dipercepat harus dapat diukur selepas pelancaran.

## Perangkap

- **Menganggap CoD linear**: sesetengah perkhidmatan awam mempunyai nilai berbentuk tarikh akhir (tarikh pematuhan berkanun — CoD melonjak ke tahap risiko penguatkuasaan selepas tarikh itu, hampir sifar sebelumnya) dan bukan kadar mingguan yang licin. Kelaskan profil kecemasan sebelum mendarab.
- **CoD pada output yang tiada sesiapa perlukan**: kelewatan hanya mempunyai kos jika perkara yang belum disampaikan itu bernilai; sistem yang tiada sesiapa akan guna mempunyai CoD sifar tidak kira betapa lewatnya.
- **Mengira berganda kelewatan dan pendiskaunan**: [kadar diskaun sosial](../kadar-diskaun-sosial/) sudah memberi harga pada masa dalam ufuk penilaian berbilang tahun; CoD ialah versi operasi dalam ufuk, untuk minggu dan bulan. Gunakan CoD untuk kelewatan jadual, anjakan NPV untuk penetapan semula fasa berbilang tahun.

## Sumber

- Reinertsen DG, *The Principles of Product Development Flow*, Celeritas Publishing, 2009.
- HM Treasury, Green Book supplementary guidance: wellbeing. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>
- National Audit Office, reports on Universal Credit rollout. <https://www.nao.org.uk/>
