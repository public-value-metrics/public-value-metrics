# Perakaunan Modal Semula Jadi

Perakaunan modal semula jadi meletakkan alam sekitar pada kedudukan yang sama seperti mana-mana aset negara atau
organisasi yang lain: ia mengukur stok sumber semula jadi (hutan, tanah, sungai, tanah lembap, atmosfera) dan
aliran perkhidmatan yang dihasilkannya (penyerapan karbon, perlindungan banjir, rekreasi, makanan), dalam
bentuk fizikal dan kewangan, supaya susut nilai alam sekitar muncul dalam pembuatan keputusan sebagaimana
susutnya modal kewangan. UK ialah salah satu kerajaan yang paling maju dalam melakukannya secara sistematik,
didorong oleh 25 Year Environment Plan (2018) dan dilaksanakan melalui akaun UK Natural Capital ONS dan panduan
tambahan Green Book HM Treasury.

## Mengapa ini penting

Perakaunan konvensional — korporat dan kerajaan — menganggap hutan tidak bernilai sehingga ditebang dan dijual
sebagai kayu balak, pada ketika itu ia menjadi KDNK. Perakaunan modal semula jadi wujud untuk merapatkan jurang
itu: 25 Year Environment Plan UK mewajibkan kerajaan menyemadikan pemikiran modal semula jadi merentas dasar,
dengan menyatakan secara jelas hasrat untuk menjadi "generasi pertama yang meninggalkan alam sekitar dalam
keadaan lebih baik daripada yang kita temui." ONS sejak itu menerbitkan akaun UK Natural Capital tahunan
(<https://www.ons.gov.uk/economy/environmentalaccounts/bulletins/uknaturalcapitalaccounts/latest>) yang
menganggarkan nilai kewangan perkhidmatan ekosistem — daripada rekreasi di hutan, manfaat kesihatan ruang hijau
bandar, hingga storan karbon tanah gambut — menggunakan rangka kerja Akaun Negara yang sama dengan modal
terhasil, supaya modal semula jadi akhirnya dapat berada dalam kunci kira-kira yang sama dengan jalan raya,
bangunan dan peralatan. Panduan Enabling a Natural Capital Approach (ENCA) HM Treasury, tambahan kepada Green Book
(<https://www.gov.uk/government/publications/enabling-a-natural-capital-approach-enca-guidance>), menggariskan
cara penilai harus menilai kos dan manfaat alam sekitar dalam kes perniagaan, supaya skim jalan raya yang
memusnahkan hutan purba atau skim banjir yang memulihkan tanah lembap dapat dibandingkan dengan terma kewangan
yang konsisten dan bukannya yang satu mempunyai nombor manakala yang satu lagi hanya sepenggal pengecualian.

## Matematiknya

```
Nilai aset perkhidmatan ekosistem = NPV aliran perkhidmatan yang disediakan oleh aset itu

Nilai aset = Σ (t = 1 hingga T) [nilai aliran perkhidmatan tahunan_t / (1 + r)^t]

dengan:
  nilai aliran perkhidmatan_t = kuantiti perkhidmatan pada tahun t × nilai seunit
                          (mis. lawatan rekreasi × nilai setiap lawatan;
                           tan karbon yang diserap × harga karbon)
  r = kadar diskaun (kadar diskaun sosial Green Book — lihat
      [kadar diskaun sosial](../kadar-diskaun-sosial/))
  T = ufuk masa yang dijangka aset itu menyediakan perkhidmatan tersebut
```

Ini ialah struktur nilai kini bersih yang sama seperti yang digunakan untuk menilai modal terhasil atau menilai
sebarang pelaburan awam di bawah [penilaian Green Book](../penilaian-green-book/) — sumbangan perakaunan modal
semula jadi ialah membekalkan kuantiti fizikal dan nilai seunit yang boleh dipercayai bagi perkhidmatan yang
sebelum ini diberi harga sifar.

## Contoh yang diselesaikan

**Hutan bandar, nilai rekreasi**: hutan seluas 50 hektar menerima anggaran 80,000 lawatan rekreasi setahun,
setiap satu dinilai (melalui kaedah kos perjalanan atau keutamaan dinyatakan — lihat
[penilaian keutamaan terzahir](../penilaian-keutamaan-terzahir/) dan
[penilaian keutamaan dinyatakan](../penilaian-keutamaan-yang-dinyatakan/)) pada £3 setiap lawatan. Hutan itu dijangka
terus menyediakan perkhidmatan ini selama 50 tahun, dinilai pada kadar diskaun 3.5%.

```
Nilai rekreasi tahunan = 80,000 × £3 = £240,000/tahun

NPV selama 50 tahun pada 3.5% ≈ £240,000 × faktor anuiti(3.5%, 50 tahun)
faktor anuiti(3.5%, 50) ≈ 21.4

Nilai aset ≈ £240,000 × 21.4 ≈ £5,136,000
```

**Menambah storan karbon**: hutan yang sama menyerap anggaran 400 tan CO2 setahun, dinilai pada harga karbon
tidak didagangkan kerajaan iaitu kira-kira £75/tan (sebagai ilustrasi — gunakan nilai karbon BEIS/DESNZ
terkini yang diterbitkan untuk penilaian sebenar).

```
Nilai karbon tahunan = 400 × £75 = £30,000/tahun
NPV selama 50 tahun pada 3.5% ≈ £30,000 × 21.4 ≈ £642,000

Jumlah nilai aset hutan (rekreasi + karbon) ≈ £5,136,000 + £642,000
                                                   ≈ £5,778,000
```

Ini sebelum menambah penyerapan banjir, biodiversiti atau perkhidmatan kualiti udara yang turut dikehendaki oleh
panduan ENCA untuk dipertimbangkan oleh penilai — jumlah itu sengaja ialah paras bawah, bukan paras atas.

## Kaitan dengan kejuruteraan perisian

- Sistem alam sekitar dan pengurusan aset bagi pihak berkuasa tempatan dan agensi (taman, lebuh raya, badan air)
  boleh melampirkan daftar modal semula jadi di samping daftar aset fizikal mereka, menggunakan corak aliran
  perkhidmatan darab nilai seunit yang sama seperti mana-mana [pangkalan data kos seunit](../pangkalan-data-kos-seunit/)
  yang diselenggarakan organisasi itu.
- Oleh sebab NPV modal semula jadi sensitif kepada kadar diskaun (lihat faktor anuiti dalam contoh yang
  diselesaikan), mana-mana alat yang mengiranya harus mendedahkan kadar dan ufuk sebagai input yang kelihatan,
  bukan menyembunyikannya — prinsip ketelusan yang sama yang dibincangkan di bawah
  [ekuiti antara generasi dan diskaun kemampanan](../ekuiti-antara-generasi-dan-diskaun-kelestarian/).
- Akaun modal semula jadi semakin menjadi input yang diperlukan untuk bahagian impak alam sekitar dalam kes
  perniagaan [green-book-appraisal](../penilaian-green-book/); pasukan penyampaian yang membina perkakasan kes
  perniagaan harus menganggap akaun ONS dan nilai seunit ENCA sebagai data rujukan untuk diintegrasikan, bukan
  sesuatu yang dikira semula oleh penilai dari awal setiap kali.

## Perangkap

- **Pengiraan berganda perkhidmatan ekosistem yang bertindih** — nilai rekreasi dan nilai biodiversiti bagi tapak
  yang sama boleh berkongsi data kesanggupan membayar yang mendasari; panduan ENCA memberi amaran jelas terhadap
  menjumlahkan penilaian yang diperoleh daripada instrumen tinjauan yang bertindih.
- **Menganggap nilai aset modal semula jadi sebagai statik** — aliran perkhidmatan berubah mengikut iklim,
  pengurusan dan tekanan guna tanah; nilai karbon dan penyerapan banjir sesebuah hutan dalam dekad ini bukan sifat
  kekal tapak itu.
- **Menggunakan nilai seunit purata kebangsaan untuk keputusan yang sangat tempatan** — sehektar hutan bandar
  yang mudah diakses dan sehektar tanah tinggi yang terpencil mempunyai nilai rekreasi yang sangat berbeza;
  panduan ENCA mengesyorkan nilai tempatan atau khusus tapak jika ada dan bukannya lalai kepada purata
  kebangsaan.

## Sumber

- ONS. "UK natural capital accounts."
  <https://www.ons.gov.uk/economy/environmentalaccounts/bulletins/uknaturalcapitalaccounts/latest>
- HM Government. "A Green Future: Our 25 Year Plan to Improve the Environment." (2018)
- HM Treasury / Defra. "Enabling a Natural Capital Approach (ENCA): guidance."
  <https://www.gov.uk/government/publications/enabling-a-natural-capital-approach-enca-guidance>
