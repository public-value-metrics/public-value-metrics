# Harga Bayangan

Harga bayangan (shadow price) ialah nilai anggaran yang diberikan kepada sesuatu barangan, sumber atau eksternaliti yang tiada harga pasaran yang boleh diperhatikan, atau yang harga pasarannya herot dan tidak mencerminkan nilai sosial sebenarnya. Penilaian projek kerajaan bergantung pada segelintir harga bayangan rasmi — karbon, masa bukan kerja, tenaga buruh yang menganggur — yang diterbitkan secara berpusat supaya setiap jabatan menggunakan angka yang sama.

## Mengapa ini penting

Harga bayangan wujud kerana [analisis kos-manfaat sosial](../analisis-kos-manfaat-sosial/) tidak dapat berfungsi tanpa nilai kewangan bagi setiap kos dan manfaat, sedangkan beberapa yang paling penting — satu tan karbon yang dilepaskan, satu jam masa penglaju, satu jam tenaga buruh yang sebaliknya menganggur — langsung tiada harga pasaran, atau mempunyai harga pasaran yang menggambarkan kos sosial sebenarnya secara salah. HM Treasury dan Department for Energy Security and Net Zero bersama-sama menerbitkan harga bayangan karbon yang digunakan dalam semua penilaian kerajaan UK (<https://www.gov.uk/government/publications/valuing-greenhouse-gas-emissions-in-policy-appraisal>), yang diterbitkan bukan daripada sebarang harga pasaran karbon, tetapi melalui pendekatan selaras sasaran: nilai karbon ditetapkan pada kos pengurangan pelepasan marginal yang diperlukan untuk mencapai bajet karbon yang digubal dalam undang-undang UK, iaitu logik yang sama sekali berbeza daripada memerhatikan harga sebenar karbon didagangkan di Skim Perdagangan Pelepasan (Emissions Trading Scheme) EU atau UK.

Kadar upah bayangan mengikut logik yang serupa di sisi buruh. Mengambil bekerja seseorang yang sebaliknya menganggur tidak memerlukan masyarakat menanggung seluruh upahnya — sebahagian daripada upah itu ialah pindahan daripada bayaran faedah yang tidak lagi dibayar dan masa lapang/mencari kerja yang hilang, bukan tarikan baharu bersih ke atas sumber masyarakat — maka panduan Green Book menetapkan harga bayangan yang lebih rendah daripada upah pasaran bagi tenaga buruh yang diambil daripada kalangan penganggur, bagi mencerminkan kos peluang sebenar tenaga buruh itu (lihat [kos peluang dalam perbelanjaan awam](../kos-peluang-dalam-perbelanjaan-awam/)) dan bukannya harga pasarannya.

## Matematiknya

```
Harga bayangan karbon (struktur ilustrasi, nilai semasa daripada alat nilai
karbon rasmi BEIS/DESNZ — jangan gunakan angka yang sudah lapuk):
  Nilai sektor didagangkan: dipandu oleh trajektori harga elaun ETS
  Nilai sektor tidak didagangkan (selaras sasaran): ditetapkan pada kos
    marginal pengurangan yang diperlukan untuk memenuhi bajet karbon yang
    digubal dalam undang-undang, meningkat dari semasa ke semasa apabila
    pilihan pengurangan yang lebih mudah telah habis digunakan
  Digunakan sebagai: £/tan CO2e × tan yang dilepaskan atau dikurangkan oleh
    pilihan itu, didiskaun pada kadar diskaun sosial bagi tahun-tahun akan datang

Kadar upah bayangan (SWR):
  SWR = Upah pasaran − (nilai masa lapang/mencari kerja yang dikorbankan
                         + nilai bayaran kebajikan yang tidak lagi dibayar)
  Lazimnya dinyatakan sebagai pecahan upah pasaran (cth. SWR = 0.6
    × upah pasaran di kawasan pengangguran tinggi, mengikut panduan
    Annex A Green Book mengenai pasaran buruh yang mempunyai kapasiti lebihan)
```

Kedua-dua angka ialah konvensyen dasar yang ditetapkan secara berpusat, bukan pemerhatian pasaran empirikal — inti harga bayangan ialah menggantikan pasaran yang tiada atau herot, maka penilaian yang menggunakannya mesti memetik sumber rasmi semasa dan bukan menerbitkan angkanya sendiri, supaya penilaian setiap jabatan boleh dibandingkan.

## Contoh yang diselesaikan

**Kerajaan negara**: penilaian skim pertahanan banjir menganggarkan ia mengelakkan 400 tan pelepasan CO2e setahun (melalui pengurangan penggunaan loji kecemasan dan pengurangan karbon terjelma daripada pembinaan semula yang dielakkan) sepanjang hayat penilaian 30 tahun, berbanding garis dasar "buat minimum".

```
Harga bayangan karbon ilustrasi: £280/tan CO2e (tahun 1, meningkat
  sepanjang tempoh penilaian mengikut jadual nilai karbon tidak didagangkan rasmi)
Manfaat karbon tahun 1 = 400 × £280 = £112,000
```

Oleh sebab jadual rasmi meletakkan nilai karbon *meningkat* sepanjang tempoh penilaian (mencerminkan bajet karbon yang semakin ketat), penganalisis mesti menggunakan nilai khusus tahun yang betul bagi setiap tahun dalam aliran 30 tahun itu, bukan kadar rata — menggunakan nilai tahun 1 sepanjang tempoh akan memperkecilkan manfaat tahun-tahun kemudian dan menyelewengkan kedudukan berbanding reka bentuk pertahanan banjir alternatif yang mempunyai profil karbon berbeza.

**Pihak berkuasa tempatan**: program sokongan pekerjaan sebuah majlis untuk penduduk yang menganggur jangka panjang menempatkan 150 orang ke dalam pekerjaan berupah £11/jam. Menilai ini menggunakan upah pasaran penuh akan mengkreditkan program itu dengan £11 × jam bekerja sebagai manfaat sosial, tetapi pendekatan kadar upah bayangan mengiktiraf bahawa mereka bukan pekerja yang ditarik daripada pekerjaan lain — kos peluang sebenar tenaga buruh mereka sebelum program itu adalah rendah.

```
Upah pasaran: £11.00/jam
Kadar upah bayangan (ilustrasi, pengangguran tempatan tinggi): 0.6 × upah pasaran = £6.60/jam
Manfaat sosial bersih yang boleh diatribusikan bagi setiap jam bekerja ≈ £11.00 − £6.60 = £4.40/jam
  (nilai "tambahan" yang dicipta dengan memindahkan tenaga buruh yang benar-benar
   menganggur ke dalam pengeluaran, berbeza daripada upah itu sendiri, yang
   sebahagian besarnya ialah pindahan)
```

Inilah sebabnya penilaian program pekerjaan di kawasan pengangguran tinggi boleh menunjukkan nilai sosial bersih yang positif, walaupun program yang sama, jika dijalankan di kawasan guna tenaga penuh yang tenaga buruh yang dianjakkan hanya ditarik daripada pekerjaan lain, tidak akan menunjukkannya.

## Kaitan dengan kejuruteraan perisian

Harga bayangan jarang menyentuh penyampaian perisian secara langsung, tetapi ia penting apabila kes perniagaan menuntut manfaat karbon atau sosial daripada perubahan IT — penyatuan pusat data yang menuntut penjimatan karbon, atau perkhidmatan tanpa kertas yang menuntut karbon percetakan dan pos yang dielakkan, mesti menggunakan harga bayangan karbon rasmi semasa dan bukan angka rekaan, serta mesti menggunakan jadual tahun demi tahun yang betul dan bukan kadar rata, sama seperti mana-mana input penilaian Green Book yang lain. Lihat [jumlah kos pemilikan dalam IT kerajaan](../jumlah-kos-pemilikan-dalam-it-kerajaan/) dan [nilai keselamatan siber sektor awam](../nilai-keselamatan-siber-sektor-awam/), kedua-duanya kerap memerlukan harga bayangan bagi input yang sukar dimonetisasi (risiko pelanggaran data, masa henti) di samping item yang dikosankan secara langsung.

## Perangkap

- **Menggunakan angka karbon atau upah yang sudah lapuk.** Kedua-dua nilai disemak semula secara berkala oleh panduan pusat; penilaian yang dibina atas angka yang telah digantikan tidak akan tahan penelitian Treasury.
- **Menggunakan harga bayangan karbon yang rata sepanjang penilaian berdekad-dekad.** Jadual rasmi meningkat dari semasa ke semasa; menggunakan nilai tahun 1 sepanjang tempoh menyalahnyatakan profil manfaat atau kos.
- **Mengelirukan upah bayangan dengan potongan ke atas gaji sebenar pekerja.** Kadar upah bayangan melaraskan nilai *penilaian* terhadap input buruh, bukan upah yang sebenarnya dibayar kepada pekerja — mencampuradukkan keduanya mengundang (secara tidak betul) pewajaran gaji di bawah paras pasaran.
- **Menerbitkan harga bayangan tersendiri dan bukannya menggunakan yang rasmi.** Harga bayangan ialah konvensyen dasar supaya penilaian antara jabatan boleh dibandingkan; angka ciptaan tempatan, sebaik mana pun hujahnya, memecahkan keboleh-bandingan itu.

## Sumber

- HM Treasury / Department for Energy Security and Net Zero. "Valuing greenhouse gas emissions in policy appraisal." <https://www.gov.uk/government/publications/valuing-greenhouse-gas-emissions-in-policy-appraisal>
- HM Treasury. "The Green Book: appraisal and evaluation in central government," Annex A (harga bayangan buruh, nilai masa bukan kerja).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Little IMD, Mirrlees JA. "Project Appraisal and Planning for Developing Countries." Heinemann, 1974 (metodologi asas penetapan harga bayangan).
