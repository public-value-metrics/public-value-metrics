# Kos Setiap Transaksi

Kos setiap transaksi ialah metrik ekonomi unit utama bagi perkhidmatan digital kerajaan: jumlah kos untuk menyampaikan sesuatu saluran, dibahagikan dengan bilangan transaksi yang selesai melaluinya. Ia ialah angka unggulan pada GOV.UK Performance Platform yang lama, dan ia ialah angka yang membiayai sedekad pelaburan "digital secara lalai" — itulah sebabnya ia juga metrik yang paling terdedah kepada manipulasi.

## Mengapa ini penting

Digital Efficiency Report Cabinet Office 2012 meletakkan perbandingan kos saluran dalam istilah yang melekat: transaksi digital didapati berharga kira-kira 20 kali lebih murah daripada melalui telefon dan kira-kira 50 kali lebih murah daripada bersemuka, dengan angka kerajaan tempatan ilustrasi kira-kira £0.15 bagi setiap transaksi web berbanding £2.83 melalui telefon dan £8.62 bersemuka. Perbandingan tunggal itu menjadi justifikasi untuk mereka bentuk semula 25 perkhidmatan contoh yang dinamakan dalam Government Digital Strategy, dan untuk setiap kes perniagaan jabatan yang telah memetik penjimatan peralihan saluran sejak itu. Angka itu benar-benar berguna sebagai isyarat tertib magnitud, tetapi nisbahnya bergantung sepenuhnya pada apa yang dikira di setiap sisi: kos saluran telefon yang saksama merangkumi kakitangan pusat panggilan, kontrak telefoni, latihan dan premis; kos digital yang saksama merangkumi pengehosan, gaji pasukan produk berterusan, masa meja sokongan untuk perjalanan yang gagal, dan saluran digital berbantu yang dikehendaki oleh titik 5 [digital-service-standard](../standard-perkhidmatan-digital/). Buang cukup banyak perkara ini daripada sisi digital dan mana-mana perkhidmatan kelihatan murah.

## Matematiknya

```
Kos setiap transaksi = jumlah kos saluran yang diperuntukkan / transaksi yang selesai

Jumlah kos saluran yang diperuntukkan harus merangkumi:
  + pengehosan dan infrastruktur
  + kos pasukan produk/kejuruteraan/sokongan (diamortisasi)
  + kos kandungan dan reka bentuk perkhidmatan (diamortisasi)
  + kos sokongan digital berbantu / kebolehaksesan
  + kos permintaan kegagalan (pengguna yang gagal secara digital dan kembali kepada telefon)
  − kos binaan sekali sahaja diamortisasi sepanjang hayat perkhidmatan yang dijangka,
    bukan dibelanjakan sepenuhnya ke dalam tahun pertama

Helah perakaunan yang lazim:
  "Kos marginal setiap transaksi" (pengehosan sahaja, setelah dibina) disebut
  seolah-olah ia "kos purata setiap transaksi" (jumlah kos termasuk
  pasukan yang terus membina dan menjalankannya). Kedua-duanya boleh
  berbeza 10x atau lebih bagi perkhidmatan dengan pasukan penyampaian yang besar dan aktif.
```

## Contoh yang diselesaikan

**Perkhidmatan pembaharuan cukai kenderaan**: 4 juta transaksi/tahun.

```
Angka marginal sahaja (helah itu):
  Pengehosan + pemprosesan pembayaran sahaja = £180,000/tahun
  Kos setiap transaksi = 180,000 / 4,000,000 = £0.045
  → angka utama yang disebut dalam kes perniagaan

Angka sepenuhnya (yang jujur):
  Pengehosan + pembayaran                   £180,000
  Pasukan produk/kejuruteraan (8 FTE)       £720,000
  Meja sokongan (transaksi gagal/dipersoal) £310,000
  Talian telefon digital berbantu           £140,000
  Jumlah                                    £1,350,000
  Kos setiap transaksi = 1,350,000 / 4,000,000 = £0.3375

Angka sepenuhnya masih kira-kira 8x lebih murah daripada pembanding
saluran telefon £2.83 daripada Digital Efficiency Report — penjimatan
yang nyata dan boleh dipertahankan — tetapi 7.5x lebih tinggi daripada angka
marginal sahaja yang disebut dalam versi pintasan. Kedua-dua angka "benar";
hanya satu yang setanding dengan kos saluran telefon yang dibandingkannya.
```

## Kaitan dengan kejuruteraan perisian

Kos setiap transaksi ialah tempat keputusan seni bina menjadi angka kewangan: perkhidmatan yang berskala automatik dengan bersih dan memerlukan sedikit campur tangan manual menurunkan angka ini dari semasa ke semasa; yang menjana volum tiket sokongan yang tinggi daripada keadaan ralat yang mengelirukan menaikkannya tanpa mengira kecekapan pengehosan. Ia ialah metrik pasangan semula jadi bagi titik 10 [digital-service-standard](../standard-perkhidmatan-digital/) ("tentukan rupa kejayaan, dan terbitkan data prestasi") dan bagi [piawaian perkhidmatan dan metrik transaksi](../piawaian-perkhidmatan-dan-metrik-transaksi/), yang menggariskan set KPI lebih lengkap di mana angka ini berada. Ia juga menyumbang terus kepada pengiraan [penjimatan peralihan saluran](../penjimatan-peralihan-saluran/) dan harus didamaikan dengan [jumlah kos pemilikan dalam IT kerajaan](../jumlah-kos-pemilikan-dalam-it-kerajaan/) supaya overhed platform dan perkhidmatan kongsi tidak digugurkan secara senyap.

## Perangkap

- **Kos marginal disamarkan sebagai kos purata**: menyebut kos pengehosan sahaja setelah perkhidmatan dibina, meninggalkan pasukan berterusan yang menyelenggara, mengulang dan menyokongnya — lihat contoh yang diselesaikan di atas.
- **Mengecualikan kos digital berbantu**: saluran tidak mematuhi "digital secara lalai", dan kos sebenarnya tidak ditangkap, jika sandaran telefon/kertas yang dikehendaki oleh [inklusi digital](../inklusi-digital/) dikosankan secara berasingan atau diabaikan.
- **Mengabaikan permintaan kegagalan**: transaksi yang bermula secara digital dan gagal, menjana panggilan telefon atau borang kertas juga, ialah kos saluran digital, bukan saluran yang menangkap kegagalan itu.
- **Membandingkan transaksi dengan kerumitan berbeza merentas saluran**: panggilan telefon mengendalikan kes sukar secara tidak seimbang (tanggungan berbilang, pembetulan ralat, pemohon yang terdedah); membandingkan kos telefon purata dengan kos digital purata melebih-lebihkan nisbah melainkan campuran transaksi dipadankan.

## Sumber

- Cabinet Office, Digital Efficiency Report (2012). <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- GOV.UK Service Manual, service standard, point 10: define what success looks like. <https://www.gov.uk/service-manual/service-standard/point-10-define-success-publish-performance-data>
- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
