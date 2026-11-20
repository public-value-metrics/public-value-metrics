# Penjimatan Peralihan Saluran

Penjimatan peralihan saluran ialah pengurangan kos yang diunjurkan daripada memindahkan volum transaksi keluar daripada saluran yang mahal — telefon, kaunter bersemuka, pos kertas — ke layan diri digital yang murah. Ia ialah enjin kewangan di sebalik "digital secara lalai", dan juga butiran dalam kes perniagaan yang paling berkemungkinan salah, kerana andaian yang menjadi asasnya — bahawa saluran luar talian mengecil apabila penerimaan digital meningkat — hanya kadangkala benar.

## Mengapa ini penting

Aritmetiknya nampak tidak boleh dipertikaikan menggunakan angka [kos setiap transaksi](../kos-setiap-transaksi/) daripada Digital Efficiency Report: pindahkan sejuta transaksi daripada lawatan bersemuka £8.62 kepada transaksi digital £0.15 dan penjimatannya melebihi £8 juta. Tetapi penjimatan hanya menjadi tunai yang dibebaskan untuk diagihkan semula jika *kapasiti tetap* saluran yang mengecil itu benar-benar dihentikan — kerusi pusat panggilan, kakitangan kaunter, minit kontrak telefon — dan program digital kerajaan tempatan berulang kali mendapati bahawa jumlah volum hubungan tidak jatuh seiring dengan penerimaan digital. Penyelidikan daripada program transformasi digital pihak berkuasa tempatan dan badan seperti Socitm dan Local Government Association telah mendokumentasikan corak yang berulang: saluran digital menarik hubungan yang benar-benar baharu (warganegara yang tidak akan menelefon atau melawat kini berbuat demikian, kerana lebih mudah), dan sebahagian bermakna transaksi "digital" gagal di pertengahan jalan dan tetap menjana panggilan telefon — jadi volum telefon jatuh jauh kurang daripada peratusan penerimaan digital yang dicadangkan, kadangkala tidak jatuh langsung dalam angka mutlak walaupun *bahagiannya* daripada jumlah hubungan menurun.

## Matematiknya

```
Penjimatan kasar peralihan saluran = volum dialihkan × (kos_saluran_lama − kos_digital)

Penjimatan bersih (direalisasikan) = penjimatan kasar
                       − permintaan baharu/bayangan yang dicipta oleh saluran yang lebih mudah
                       − kos permintaan kegagalan (kegagalan digital yang
                         tetap menjana panggilan telefon atau lawatan kaunter)
                       − kos kapasiti tetap yang tidak dihentikan (pusat
                         panggilan hanya boleh mengurangkan kakitangan dalam unit diskret;
                         penurunan volum 15% jarang membolehkan anda memotong 15%
                         bilangan kakitangan)

Ambang realisasi: penjimatan hanya boleh disimpan setelah volum jatuh
di bawah tahap yang boleh dikendalikan oleh saluran lama pada langkah
kapasiti diskret seterusnya yang lebih kecil (cth. kehilangan satu syif penuh,
satu meja penuh, satu jalur bilangan kakitangan berkontrak)
```

## Contoh yang diselesaikan

**Perkhidmatan pembaharuan lencana biru majlis daerah**: 60,000 pembaharuan/tahun, sebelum ini 100% telefon/kertas pada £6.40 setiap transaksi. Perkhidmatan digital baharu dilancarkan dan mencapai 65% penerimaan digital dalam setahun, pada £0.30 setiap transaksi digital.

```
Pengiraan penjimatan naif (kasar):
  39,000 dialihkan × (£6.40 − £0.30) = £237,900/tahun

Apa yang sebenarnya berlaku, mengikut data pusat hubungan majlis:
  Volum telefon jatuh daripada 60,000/tahun kepada 46,000/tahun (−23%, bukan −65%)
  kerana: 9,000 perjalanan digital gagal dan menjana panggilan susulan
          (ketirisan permintaan kegagalan), dan 4,000 orang yang sebelum ini
          tidak memperbaharui langsung kini berbuat demikian, setelah mendapati
          ia mudah dalam talian (permintaan bayangan — peningkatan akses yang
          tulen, tetapi bukan penjimatan)

  Pusat hubungan telefon diberi kakitangan dalam jalur 8,000 panggilan/FTE;
  penurunan 14,000 panggilan (60,000 → 46,000) membebaskan 1.75 FTE, dibundarkan
  ke bawah dalam amalan kepada 1 FTE yang benar-benar diagihkan semula = £34,000/tahun

Penjimatan direalisasikan = £34,000/tahun ditambah kos binaan/operasi saluran digital
  yang dielakkan pada 39,000 transaksi ≈ £34,000 + (39,000 × £0.30
  kos digital yang sudah dikira) — sebahagian kecil daripada angka utama £237,900,
  walaupun perkhidmatan itu tetap jelas lebih baik untuk pengguna.
```

## Kaitan dengan kejuruteraan perisian

Pengajaran kejuruteraan ialah penjimatan peralihan saluran direalisasikan oleh keputusan *operasi* (penjadualan, penghentian, rundingan semula kontrak), bukan oleh perisian yang dihantar — sesebuah pasukan boleh memenuhi setiap titik [digital-service-standard](../standard-perkhidmatan-digital/) dan tetap menyampaikan penjimatan bersih sifar jika tiada sesiapa yang menghentikan kapasiti tetap saluran lama. Menginstrumentasikan permintaan kegagalan (di mana dalam perjalanan digital pengguna meninggalkan dan apa yang mereka lakukan seterusnya) ialah masalah analitik corong yang boleh diselesaikan dan perkara berimpak tertinggi yang boleh dilakukan oleh pasukan kejuruteraan untuk melindungi kes penjimatan; ia juga pautan langsung kepada [kos setiap transaksi](../kos-setiap-transaksi/), yang digembungkan secara senyap oleh permintaan kegagalan. Lihat [realisasi manfaat](../realisasi-manfaat/) untuk disiplin yang lebih luas dalam menyemak bahawa penjimatan kes perniagaan benar-benar tercapai, dan [inklusi digital](../inklusi-digital/) untuk sebab saluran luar talian biasanya tidak boleh, dan tidak sepatutnya, dihentikan sepenuhnya.

## Perangkap

- **Menganggap penggantian saluran 1:1**: memodelkan penerimaan digital sebagai penolakan langsung daripada volum telefon/kaunter, mengabaikan permintaan bayangan dan ketirisan permintaan kegagalan yang didokumenkan dalam penyelidikan peralihan saluran kerajaan tempatan.
- **Merekodkan penjimatan kasar sebelum penghentian**: mengira penjimatan dalam kes perniagaan pada tahun penerimaan meningkat, bukan tahun (jika pernah) kapasiti saluran lama benar-benar dipotong.
- **Mengabaikan sifat fungsi-anak-tangga kos pengambilan kakitangan**: penurunan volum 20% jarang bertukar menjadi penurunan kos 20%, kerana pusat hubungan dan kaunter diberi kakitangan dalam jalur diskret, bukan secara berterusan.
- **Menganggap permintaan bayangan sebagai pembaziran**: hubungan baharu daripada pengguna yang sebelum ini tersisih atau tercegah ialah peningkatan sebenar dalam [nilai awam](../nilai-awam/), bukan ralat pemodelan — ia harus dilaporkan sebagai hasil akses, bukan ditolak bersih sebagai hingar.

## Sumber

- Cabinet Office, Digital Efficiency Report (2012). <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- Local Government Association, digital transformation and channel shift resources. <https://www.local.gov.uk/our-support/efficiency-and-income-generation/digital-transformation>
- Socitm, local public services digital insight research. <https://www.socitm.net/>
