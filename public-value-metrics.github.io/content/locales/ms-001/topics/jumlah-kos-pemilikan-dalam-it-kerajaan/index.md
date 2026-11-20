# Jumlah Kos Pemilikan dalam IT Kerajaan

Jumlah kos pemilikan (total cost of ownership, TCO) ialah kos kitaran hayat penuh sesebuah sistem — perolehan ditambah setiap tahun menjalankannya — yang didiskaun kepada tarikh yang sama. Dalam IT kerajaan, ralat peramalan yang paling boleh dipercayai berlaku ialah membandingkan pembekal atau pilihan berdasarkan harga perolehan sahaja, sedangkan operasi dan penyelenggaraan lazimnya menyumbang antara separuh hingga empat perlima daripada bil sepanjang hayat.

## Mengapa ini penting

Green Book HM Treasury menghendaki kes kewangan dalam mana-mana kes perniagaan Five Case Model meliputi kos sepanjang hayat, bukan sekadar perbelanjaan modal — namun National Audit Office telah berulang kali mendapati jabatan meluluskan pelaburan IT berdasarkan ramalan kos operasi yang tidak lengkap atau terlalu optimis, hanya untuk menemui kos operasi sebenar setelah sistem beroperasi dan baris bajet modal telah ditutup. Technology Code of Practice Government Digital Service dan Central Digital and Data Office (<https://www.gov.uk/guidance/the-technology-code-of-practice>) mendorong jabatan ke arah hosting awan dan komoditi sebahagiannya kerana ia menjadikan kos berterusan kelihatan dan boleh dibandingkan, bukannya terkubur dalam satu angka perolehan modal yang kelihatan rendah menarik semasa kelulusan dan salah dengan mahal tiga tahun kemudian.

## Matematiknya

```
TCO = Kos perolehan + Σ(t=1..N) Kos operasi tahunan_t / (1+r)^t
      − nilai baki (didiskaun)

r = kadar diskaun sosial piawai Green Book HM Treasury, 3.5%/tahun
    (jadual kadar menurun bagi horizon melebihi 30 tahun)

Komponen kos operasi: hosting/pelesenan, sokongan dan penyelenggaraan,
tampalan keselamatan dan pematuhan, masa kakitangan, pembaharuan/migrasi terancang
```

Lihat [kadar diskaun sosial](../kadar-diskaun-sosial/) untuk sebab faktor diskaun penting sepanjang hayat sistem lazim 5–10 tahun, dan [bina atau beli dalam kerajaan](../bina-atau-beli-dalam-kerajaan/) untuk bagaimana TCO disalurkan ke keputusan bina/beli.

## Contoh yang diselesaikan

Sebuah jabatan membandingkan dua sistem pengurusan kes pada horizon 5 tahun pada kadar diskaun 3.5% Green Book.

```
Sistem A: capex £3,500,000, opex £250,000/tahun
Sistem B: capex £1,800,000 (kelihatan lebih murah), opex £650,000/tahun
          (sokongan vendor dan beban integrasi lebih berat)

Perbandingan naif berdasarkan capex sahaja: B menang, £1.8 juta < £3.5 juta.

Jumlah faktor diskaun, 5 tahun pada 3.5%: 0.966+0.934+0.902+0.871+0.842 ≈ 4.515

TCO_A = 3,500,000 + 250,000 × 4.515 = 3,500,000 + 1,128,750 = £4,628,750
TCO_B = 1,800,000 + 650,000 × 4.515 = 1,800,000 + 2,934,750 = £4,734,750
```

TCO membalikkan keputusan naif: Sistem B sedikit lebih mahal sepanjang lima tahun setelah kos operasi didiskaun dan dijumlahkan, kerana bahagian opexnya daripada kos sepanjang hayat ialah 62% (2,934,750 / 4,734,750) berbanding 24% bagi Sistem A — contoh konkrit penemuan "penyelenggaraan ialah majoriti bil", yang tersembunyi sepenuhnya apabila membandingkan harga tanda.

## Kaitan dengan kejuruteraan perisian

TCO ialah nombor yang harus mendisiplinkan setiap keputusan [bina atau beli](../bina-atau-beli-dalam-kerajaan/) dan setiap kes pembayaran balik [hutang teknikal](../hutang-teknikal-sebagai-hakisan-nilai-awam/), kerana faedah hutang dan penyelenggaraan yang ditangguhkan kedua-duanya ialah baris kos operasi yang tergolong dalam jumlah terdiskaun yang sama, sama ada sesiapa menjejakinya atau tidak. Jurutera yang mencadangkan pilihan platform atau vendor harus membentangkan jadual TCO penuh, bukan harga perolehan, kerana harga perolehan tepat nombor yang kes kewangan Green Book direka untuk menghentikan jabatan daripada bergantung padanya semata-mata. TCO juga penyebut yang jujur bagi pertimbangan [nilai untuk wang](../nilai-untuk-wang/) — VFM membandingkan manfaat dengan kos, dan baris kos yang dikira kurang menggembungkan setiap nisbah VFM dalam kes perniagaan.

## Perangkap

- **Perbandingan capex sahaja**: kesilapan perolehan yang paling lazim — membandingkan harga senarai pembekal tanpa ramalan kos operasi yang sepadan bagi setiap pilihan.
- **Mengecualikan kos keluar dan migrasi**: pengekstrakan data pada akhir kontrak, pemindahan platform dan penalti kekunci masuk vendor (vendor lock-in) ialah baris TCO sebenar yang jarang muncul dalam kes perniagaan asal.
- **Mengecualikan kos keselamatan dan pematuhan**: kekerapan tampalan, pembaharuan akreditasi dan kos audit meningkat dengan usia dan kerumitan sistem — lihat [nilai keselamatan siber sektor awam](../nilai-keselamatan-siber-sektor-awam/) — dan lazim ditinggalkan daripada ramalan opex.
- **Perbandingan tidak didiskaun merentas pilihan dengan profil kos berbeza**: membandingkan pilihan berat-capex dengan pilihan berat-opex tanpa pendiskaunan secara sistematik memihak kepada pilihan yang kebetulan menangguhkan lebih banyak kos ke tahun-tahun kemudian.

## Sumber

- HM Treasury, *The Green Book: Central Government Guidance on Appraisal and Evaluation*, 2022. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
- Central Digital and Data Office, Technology Code of Practice. <https://www.gov.uk/guidance/the-technology-code-of-practice>
- National Audit Office, *Digital Transformation in Government*. <https://www.nao.org.uk/>
