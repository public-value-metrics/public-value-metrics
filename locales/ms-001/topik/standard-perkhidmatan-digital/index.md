# Standard Perkhidmatan Digital

GOV.UK Service Standard (Standard Perkhidmatan GOV.UK) ialah get yang mesti dilepasi oleh setiap perkhidmatan digital kerajaan pusat sebelum ia boleh dilancarkan: 14 perkara yang diterbitkan, dinilai oleh panel bebas pada penghujung setiap fasa penyampaian. Ia ialah mekanisme yang menukar "bina perkhidmatan awam yang baik" daripada slogan kepada keputusan lulus/gagal dengan jejak dokumen — dan merupakan keturunan langsung mandat "digital secara lalai" (digital by default) dalam Government Digital Strategy 2012.

## Mengapa ini penting

Sebelum Service Standard wujud, kegagalan IT kerajaan jarang kelihatan sehingga pelancaran, dan jarang dapat dikaitkan dengan keputusan yang boleh ditunjuk oleh sesiapa. Government Digital Strategy 2012 mewajibkan jabatan mereka bentuk semula 25 perkhidmatan transaksi berhadapan orang awam yang paling tinggi volumnya sebagai "digital secara lalai", dan menyokong komitmen itu dengan mekanisme pematuhan: perkhidmatan tidak boleh dilancarkan di GOV.UK tanpa melepasi penilaian perkhidmatan berdasarkan standard yang ketika itu mempunyai 26 perkara (disatukan kepada 18 pada 2019, dan kini standard 14 perkara yang berkuat kuasa, merangkumi tiga kumpulan — memahami keperluan pengguna, menyediakan perkhidmatan yang baik, dan menggunakan teknologi yang betul). Penilaian perkhidmatan ialah acara yang sebenar: panel penilai GDS atau jabatan menyemak bukti, menyoal pasukan, dan mengeluarkan keputusan lulus, gagal atau "tidak dipenuhi" bagi setiap perkara, yang diterbitkan pada halaman penilaian perkhidmatan itu. Kegagalan dalam penilaian menghalang perkhidmatan daripada bergerak dari beta persendirian ke beta awam, atau dari beta ke langsung (live) — ia get yang sebenar, bukan sekadar semakan.

## Matematiknya

Service Standard ialah rangka kerja, bukan formula, tetapi ia berfungsi sebagai struktur keputusan berperingkat dengan get:

```
Discovery  → Penilaian Alpha  → Penilaian Beta  → Penilaian Live
             (tidak wajib untuk  (wajib sebelum    (wajib sebelum
              semua perkhidmatan,  pelancaran beta   menanggalkan tag "beta"
              tetapi disyorkan)    awam)             dan menutup saluran lama)

Setiap penilaian: bukti + temu bual pasukan → keputusan panel bagi setiap perkara
  Dipenuhi / Dipenuhi sebahagian / Tidak dipenuhi
Keputusan keseluruhan: Lulus / Lulus bersyarat / Gagal (penilaian semula diperlukan)

Kos kegagalan ≈ kos kitaran sprint seterusnya untuk pembetulan
              + kelewatan pada [channel-shift-savings](../penjimatan-peralihan-saluran/)
                yang menjadi tujuan perkhidmatan itu dibiayai
```

Perkara 10 ("tentukan rupa kejayaan, dan terbitkan data prestasi") ialah yang menyuap [cost-per-transaction](../kos-setiap-transaksi/) dan [service-standards-and-transaction-metrics](../piawaian-perkhidmatan-dan-metrik-transaksi/) — Standard ini mewajibkan pengukuran, bukan sekadar perkhidmatan.

## Contoh yang diselesaikan

**Perkhidmatan permohonan perumahan pihak berkuasa tempatan**: pasukan sebuah majlis mencapai penilaian beta dengan perkhidmatan yang memenuhi 11 daripada 14 perkara tetapi gagal pada perkara 5 ("pastikan semua orang boleh menggunakan perkhidmatan") kerana tiada laluan digital berbantu untuk pemohon tanpa akses internet, dan gagal pada perkara 9 kerana data peribadi dilog dalam teks biasa dalam jejak ralat permohonan.

```
Kos langsung kegagalan:
  Slot penilaian semula: menunggu 6–8 minggu untuk panel seterusnya yang ada
  Sprint pembetulan: 2 pembangun × 3 minggu × £550/hari ≈ £34,650
  Reka bentuk saluran digital berbantu: 1 penyelidik × 2 minggu ≈ £5,000

Kos kelewatan: perkhidmatan dijangka mengalihkan 40% daripada 18,000/tahun
pertanyaan perumahan daripada panggilan telefon £8.50 kepada transaksi digital £0.20
  = 7,200 × (£8.50 − £0.20) = £59,760/tahun terlepas, diagihkan secara
    pro rata untuk kelewatan ~2 bulan ≈ £9,960

Jumlah kos penilaian yang gagal ≈ £49,610
```

Tujuan pengiraan ini bukan ketepatannya — tetapi bahawa penilaian yang gagal mempunyai harga sebenar yang boleh dikira, dan itulah sebabnya get ini bergigi.

## Kaitan dengan kejuruteraan perisian

Bagi jurutera, Standard ini dibaca sebagai senarai semak seni bina dan penyampaian sebanyak dokumen dasar: perkara 11 ("pilih alat dan teknologi yang betul") dan perkara 12 ("jadikan kod sumber baharu terbuka") ialah keputusan kejuruteraan secara langsung, dan perkara 14 ("kendalikan perkhidmatan yang boleh dipercayai") memerlukan SLO dan proses insiden yang sama seperti sistem pengeluaran lain. Ia ialah rangka kerja payung bagi kumpulan topik ini — [cost-per-transaction](../kos-setiap-transaksi/) dan [channel-shift-savings](../penjimatan-peralihan-saluran/) ialah apa yang cuba dilindungi oleh Standard ini dari segi kewangan, [digital-inclusion](../inklusi-digital/) ialah apa yang dijamin oleh perkara 5, dan komponen [government-as-a-platform](../kerajaan-sebagai-platform/) (GOV.UK Notify, Pay, One Login) memenuhi perkara 13 ("gunakan dan sumbang kepada standard terbuka, komponen dan corak biasa") pada umumnya secara lalai. Lihat juga [build-vs-buy-in-government](../bina-atau-beli-dalam-kerajaan/) tentang bagaimana perkara "alat yang betul" berlaku dalam keputusan perolehan.

## Perangkap

- **Menganggap penilaian sebagai kotak semak pematuhan pada hari pelancaran**: pasukan yang hanya membaca 14 perkara itu seminggu sebelum penilaian beta mereka gagal secara boleh diramal; Standard ini bertujuan membentuk keputusan sejak discovery lagi, bukan mengauditnya secara retrospektif.
- **Menilai prototaip, bukan perkhidmatan**: demo yang licin boleh lulus semakan yang akan digagalkan oleh versi perkhidmatan yang langsung, inklusif digital berbantu dan diurus insiden — penilai sepatutnya menyelidik jurang ini, tetapi perkhidmatan kecil yang mengesahkan sendiri sering melangkaunya.
- **Tiada penilaian semula sebelum penskalaan**: perkhidmatan yang dinilai pada pelancaran 5% tidak secara automatik kekal patuh pada 100% — beban, permintaan kegagalan (failure demand), dan pengguna kes pinggir semuanya berubah.
- **Mengelirukan Service Standard dengan sistem reka bentuk**: komponen GOV.UK Design System memenuhi sesetengah perkara (konsistensi, kebolehcapaian) tetapi Standard ini juga merangkumi struktur pasukan, amalan agile, dan etika data — perkhidmatan yang bergaya cantik masih boleh gagal pada perkara 2, 6 atau 9.

## Sumber

- GOV.UK Service Manual, Service Standard. <https://www.gov.uk/service-manual/service-standard>
- GOV.UK Service Manual, point 14: operate a reliable service. <https://www.gov.uk/service-manual/service-standard/point-14-operate-a-reliable-service>
- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
- GOV.UK Service Manual, service assessments. <https://www.gov.uk/service-manual/service-assessments>
