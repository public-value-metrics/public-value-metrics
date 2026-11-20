# Pulangan Sosial atas Pelaburan

Pulangan sosial atas pelaburan (social return on investment, SROI) ialah kerangka untuk mengukur, memonetisasi dan mengakaunkan konsep nilai yang luas — sosial, alam sekitar dan ekonomi — serta menyatakannya sebagai nisbah terhadap sumber yang dilaburkan, contohnya "£1.44 nilai sosial bagi setiap £1 yang dilaburkan". Ia direka untuk melanjutkan logik perakaunan kewangan kepada hasil yang tidak dihargai oleh pasaran, tanpa kehilangan disiplin perakaunan: setiap nombor dalam SROI mesti dapat dikesan kepada hasil yang ditakrifkan oleh pihak berkepentingan, asas bukti, dan pelarasan yang jelas untuk apa yang akan berlaku juga.

## Mengapa ini penting

SROI diselenggarakan oleh Social Value UK dan Social Value International, badan pengganti kepada SROI Network, yang "A Guide to Social Return on Investment" (2012)nya masih menjadi metodologi rujukan. Kerangka ini bersandar pada tujuh prinsip — libatkan pihak berkepentingan, fahami apa yang berubah, nilai perkara yang penting, sertakan hanya yang material, jangan membuat tuntutan berlebihan, bersikap telus, dan sahkan keputusan — dan prinsip kelima, "jangan membuat tuntutan berlebihan", yang paling banyak gagal dipatuhi oleh kebanyakan laporan SROI di lapangan. Nisbah yang dihasilkan dengan melangkau pelarasan deadweight dan atribusi bukan SROI; ia angka pemasaran yang memakai pakaian SROI. Jurutera perisian yang membina alat pelaporan untuk badan amal, perusahaan sosial atau pihak pengomisen perlu tahu perbezaannya, kerana alat itu sama ada akan menguatkuasakan disiplin tersebut atau memudahkan ia dilangkau.

## Matematiknya

SROI bergantung pada [teori perubahan](../teori-perubahan/) untuk mengenal pasti hasil yang berada dalam skop, dan menyatakannya menggunakan rantaian akauntabiliti yang sama seperti [model logik](../model-logik/):

```
Nisbah SROI = Nilai kini hasil / Nilai input

Proses:
 1. Tetapkan skop dan kenal pasti pihak berkepentingan yang hasilnya akan diukur
 2. Petakan hasil (teori perubahan, dibuktikan bersama pihak berkepentingan, bukan andaian)
 3. Buktikan hasil dan beri nilai kepadanya menggunakan proksi kewangan
 4. Tetapkan impak: nilai kasar − deadweight − atribusi − anjakan, kemudian gunakan susut nilai (drop-off)
 5. Kira SROI: nilai kini bersih impak ÷ nilai input
 6. Laporkan, gunakan dan semaikan — nisbah ialah alat komunikasi, bukan titik akhir
```

Deadweight, atribusi dan anjakan dibincangkan dalam [additionality dan deadweight](../additionality-dan-deadweight/) dan [anjakan dan atribusi](../penyesaran-dan-atribusi/); ketiga-tiganya wujud untuk mengasingkan impak [kontrafaktual](../analisis-kontrafaktual/) yang sebenar daripada hasil kasar.

## Contoh yang diselesaikan

**Program pekerjaan pihak berkuasa tempatan**: kos input tahunan £250,000. Enam puluh peserta beralih kepada pekerjaan yang mampan; proksi kewangan bagi hasil itu (peningkatan kesejahteraan, pengurangan pergantungan faedah dan hasil cukai digabungkan) ialah £8,500 seorang bagi tahun pertama — lihat [pangkalan data kos seunit](../pangkalan-data-kos-seunit/) untuk punca proksi sedemikian.

- Nilai hasil kasar: 60 × £8,500 = £510,000
- Tolak deadweight (40% berkemungkinan menemui kerja tanpa program): £510,000 × 0.60 = £306,000
- Tolak atribusi (30% perubahan yang tinggal disebabkan oleh sokongan agensi lain): £306,000 × 0.70 = £214,200
- Hasil tahun 2 pada susut nilai 30%: £214,200 × 0.70 = £149,940, didiskaun pada 3.5%/tahun (lihat [kadar diskaun sosial](../kadar-diskaun-sosial/)): £149,940 ÷ 1.035 = £144,870
- Jumlah nilai kini impak: £214,200 + £144,870 = £359,070
- **Nisbah SROI: £359,070 ÷ £250,000 = 1.44**, dilaporkan sebagai "£1.44 nilai sosial bagi setiap £1 yang dilaburkan"

**Badan amal**: perkhidmatan persahabatan bernilai £60,000 mengurangkan kesunyian bagi 80 warga emas, dinilai pada proksi £1,100/orang/tahun. Nilai kasar £88,000; selepas deadweight 35% dan atribusi 15%, impak bersih ialah £88,000 × 0.65 × 0.85 = £48,620, nisbah SROI 0.81 — di bawah titik pulang modal, yang merupakan penemuan yang sah dan berguna, bukan kegagalan untuk dilaporkan.

## Kaitan dengan kejuruteraan perisian

Kalkulator SROI yang membenarkan pengguna memasukkan bilangan hasil dan nilai proksi tetapi tiada medan wajib untuk deadweight, atribusi atau teori perubahan yang dipautkan akan menghasilkan nisbah yang digembungkan secara lalai, kerana meninggalkan pelarasan ialah laluan paling mudah. Bina disiplin itu ke dalam skema: setiap baris hasil harus merujuk kumpulan pihak berkepentingan, kuantiti yang dibuktikan, proksi kewangan dengan sumbernya, dan medan deadweight/atribusi yang tidak pilihan. Lihat [hasil berbanding output](../hasil-berbanding-output/) untuk perbezaan yang menjadi sandaran pemetaan hasil SROI, dan [model logik](../model-logik/) untuk rantaian yang harus dicerminkan alat itu dalam model datanya.

## Perangkap

- **Melangkau deadweight dan atribusi.** Nisbah utama tanpa pelarasan ini ialah angka kasar, bukan angka impak bersih, dan prinsip Social Value UK jelas menghendaki kedua-duanya.
- **Membandingkan nisbah antara organisasi.** Nisbah SROI bergantung pada skop dan pilihan proksi yang dibuat kes demi kes; menganggap nisbah 4:1 daripada satu laporan "lebih baik" daripada nisbah 2:1 daripada laporan lain mengabaikan hakikat bahawa andaiannya tidak diseragamkan seperti nisbah perakaunan kewangan.
- **Pengiraan berganda proksi yang bertindih.** Menindih proksi "kesunyian berkurang" dengan proksi "kesejahteraan mental bertambah baik" bagi benefisiari yang sama boleh menilai satu perubahan asas dua kali.
- **Melangkau penglibatan pihak berkepentingan.** Prinsip pertama menghendaki hasil ditakrifkan bersama orang yang mengalaminya, bukan diandaikan oleh penganalisis yang membina model.

## Sumber

- Social Value UK / Social Value International. <https://socialvalueuk.org/>
- The SROI Network, "A Guide to Social Return on Investment" (2012).
- Social Value International, "The Principles of Social Value." <https://www.socialvalueint.org/principles>
