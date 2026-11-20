# Kerajaan sebagai Platform (GaaP)

Kerajaan sebagai Platform (Government as a Platform) ialah strategi membina komponen kongsi yang boleh digunakan semula — perkhidmatan pemberitahuan, perkhidmatan pembayaran, perkhidmatan identiti — sekali sahaja, secara berpusat, supaya beratus-ratus perkhidmatan kerajaan individu menggunakannya dan bukan setiap satu membina sendiri. Ia membingkai semula infrastruktur digital awam sebagai masalah ekonomi platform: nilainya bukan pada mana-mana satu integrasi, tetapi pada kos marginal pasukan *seterusnya* yang menggunakannya menghampiri sifar.

## Mengapa ini penting

GDS menggariskan strategi ini secara rasmi dalam penerbitan "Government as a Platform" 2015, berhujah bahawa kerajaan telah membina keupayaan yang sama — penerimaan pembayaran, pemberitahuan pengguna, pengesahan identiti, carian alamat — secara berasingan dalam perkhidmatan demi perkhidmatan, masing-masing menanggung perolehan, penilaian keselamatan, dan beban sokongan berterusannya sendiri. Alternatifnya ialah sebilangan kecil platform kongsi, dibina mengikut standard tinggi sekali dan digunakan semula di mana-mana: GOV.UK Notify untuk menghantar e-mel, mesej teks dan surat, GOV.UK Pay untuk menerima pembayaran dalam talian, dan GOV.UK One Login (pengganti program identiti GOV.UK Verify yang terdahulu) untuk pengesahan identiti. Skala yang dicapai platform ini ialah bukti paling jelas strategi itu berjaya: GOV.UK Pay telah memproses lebih £10 bilion transaksi merentas sekitar 1,800 perkhidmatan individu — dan jika ia mengambil kira-kira empat tahun untuk memproses £1 bilion pertamanya, kini ia memproses jumlah itu dalam sekitar lima bulan — manakala GOV.UK Notify telah menghantar lebih 9 bilion mesej bagi pihak lebih 1,500 organisasi kerajaan. Setiap perkhidmatan yang menggunakannya mengelak daripada membina, mengamankan dan menyelenggara get bayaran atau saluran paip pemesejannya sendiri.

## Matematiknya

```
Kos bina setiap perkhidmatan (tanpa platform) = N perkhidmatan × kos membina,
  menilai keselamatan, dan menjalankan satu sistem pembayaran/pemberitahuan/identiti

Kos platform = kos bina platform tetap
             + kos marginal setiap perkhidmatan yang menggunakannya (integrasi,
               konfigurasi, sokongan berterusan pasukan platform)

Penggunaan semula pulang modal apabila:
  kos bina platform < N × (kos bina setiap perkhidmatan − kos
  integrasi marginal)

Bagi platform yang matang, kos marginal setiap pengguna tambahan menghampiri
yuran transaksi/mesej sahaja — kos tetap diamortisasi merentas seluruh
estet kerajaan, bukan bajet satu jabatan, itulah sebabnya komponen GaaP
biasanya dibiayai secara berpusat dan bukan dikenakan pemulihan kos penuh
kepada pengguna awal.
```

## Contoh yang diselesaikan

**Pihak berkuasa tempatan menggunakan GOV.UK Pay dan bukan membina get bayaran**:

```
Anggaran bina sendiri:
  Kerja pematuhan PCI-DSS + integrasi + penyelenggaraan berterusan
  ≈ £85,000 pembinaan + £22,000/tahun penyelenggaraan

Penggunaan GOV.UK Pay:
  Usaha integrasi ≈ £12,000 (masa pembangun)
  Yuran transaksi: pembayaran kad kerajaan-ke-rakyat lazimnya
  dikenakan peratusan kecil + yuran tetap setiap transaksi, tiada
  beban PCI-DSS berasingan yang ditanggung majlis
  ≈ £12,000 sekali sahaja, kos berterusan berubah mengikut volum, tidak tetap

Penjimatan tahun pertama ≈ £85,000 − £12,000 = £73,000, sebelum mengira
£22,000/tahun penyelenggaraan yang dielakkan dan risiko pematuhan yang
dielakkan kerana menyimpan data kad dalam sistem yang dikendalikan majlis —
kategori kedua ini ialah nilai keselamatan yang dibincangkan dalam
public-sector-cybersecurity-value.
```

Skalakan £73,000 itu merentas sekitar 1,800 perkhidmatan yang kini menggunakan GOV.UK Pay dan kos pembinaan yang dielakkan secara agregat merentas kerajaan mencecah ratusan juta — ekonomi platform, bukan mana-mana satu integrasi, ialah tempat nilai strategi itu sebenarnya terletak.

## Kaitan dengan kejuruteraan perisian

Kerajaan sebagai Platform ialah hujah langsung untuk [bina-vs-beli dalam kerajaan](../bina-atau-beli-dalam-kerajaan/): apabila komponen kongsi yang dinilai dan dikendalikan dengan baik wujud, membina setara yang dibuat khas jarang sekali pilihan [nilai untuk wang](../nilai-untuk-wang/) yang lebih baik, dan ia gagal pada perkara 13 [standard perkhidmatan digital](../standard-perkhidmatan-digital/) ("gunakan dan sumbang kepada standard terbuka, komponen dan corak biasa") hampir secara definisi. Ia juga mengubah bentuk [jumlah kos pemilikan dalam IT kerajaan](../jumlah-kos-pemilikan-dalam-it-kerajaan/): penggunaan platform menukar baris modal dan penyelenggaraan yang besar dengan kos operasi yang lebih kecil dan berkaitan penggunaan, yang lebih mudah diramal dan lebih mudah dihentikan pembiayaannya jika perkhidmatan dinyahtauliah. Penggunaan semula terbuka komponen mempunyai sepupu dalam [nilai data terbuka](../nilai-data-terbuka/) — kedua-duanya ialah strategi untuk menganggap sesuatu yang dihasilkan kerajaan sekali sebagai infrastruktur kongsi dan bukan aset jabatan.

## Perangkap

- **Pembinaan semula dalam bayang-bayang**: pasukan secara senyap membina integrasi pembayaran atau pemberitahuan sendiri kerana proses onboarding platform lebih perlahan daripada melakukannya sendiri — masalah geseran tadbir urus, bukan teknologi, dan ia secara senyap menghakis ekonomi penggunaan semula yang menjadi tunjang seluruh strategi.
- **Kekurangan pembiayaan pasukan platform berbanding nilai yang dicipta**: nilai terkumpul kepada jabatan pengguna manakala kos ditanggung pasukan platform, mewujudkan risiko pelaburan rendah kronik melainkan pembiayaan dipusatkan dan dilindungi — satu versi tragedi harta bersama.
- **Mengukur kejayaan platform dengan penggunaan semata-mata**: angka penerimaan (perkhidmatan yang di-onboard, mesej dihantar) ialah penunjuk awal, bukan bukti nilai; ujian sebenar ialah pengiraan kos bina yang dielakkan dan risiko yang dielakkan di atas.
- **Menganggap "platform" sinonim dengan "monolit"**: komponen GaaP berjaya kerana setiap satu melakukan satu perkara dengan baik dengan antara muka yang sempit dan stabil — menggabungkan keupayaan yang tidak berkaitan ke dalam satu "platform" mencipta semula masalah pembinaan khas pada skala berbeza.

## Sumber

- Government Digital Service, Government as a Platform. <https://www.gov.uk/government/publications/government-as-a-platform>
- GOV.UK Notify. <https://www.notifications.service.gov.uk/>
- Government Digital Service blog, "GOV.UK Pay at 10: how it started and how it's going". <https://gds.blog.gov.uk/2026/09/02/gov-uk-pay-at-10-how-it-started-and-how-its-going/>
