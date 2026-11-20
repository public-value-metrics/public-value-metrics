# Analisis Keputusan Berbilang Kriteria (MCDA)

MCDA menilai dan memberi pemberat kepada pilihan berdasarkan beberapa kriteria berpemberat yang berbeza sekali
gus, menghasilkan perbandingan berperingkat tanpa memaksa setiap kriteria masuk ke dalam satu skala kewangan atau
unit semula jadi. Ia ialah kaedah penilaian bagi keputusan yang hasilnya yang penting benar-benar tidak dapat
dikurangkan kepada satu nombor.

## Mengapa ini penting

Green Book secara jelas membenarkan MCDA (apendiks kajian kes Box 2 dan Annex A kedua-duanya membincangkannya
secara langsung) bagi penilaian yang manfaatnya "benar-benar tidak boleh dibandingkan" — apabila menukar
segala-galanya kepada wang melalui [analisis kos-faedah sosial](../analisis-kos-manfaat-sosial/), atau kepada
satu hasil melalui [analisis keberkesanan kos](../analisis-keberkesanan-kos-dalam-kerajaan/), akan
menyalahgambarkan keputusan itu dan bukannya menjelaskannya
(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>).
Pemilihan tapak untuk penjara baharu, sebagai contoh, mengimbangkan kos modal dengan impak komuniti, kesalinghubungan
pengangkutan, kesan alam sekitar dan kebolehupayaan merekrut kakitangan — kriteria yang tidak berkongsi unit
bersama dan apabila unit yang dikongsi (lazimnya wang) dipaksakan, ia menyelinapkan pertimbangan nilai tentang
kepentingan relatif, katakan, impak alam sekitar berbanding kos, yang dibungkus sebagai aritmetik objektif.

Kejujuran MCDA juga merupakan kelemahan utamanya: kerana pemberat ditetapkan oleh sesiapa yang menjalankan
penilaian (atau oleh sebuah panel), kaedah ini hanya sah setakat proses pemberatannya. Panduan Green Book jelas
bahawa kriteria dan pemberat mesti dipersetujui dan diterbitkan *sebelum* pilihan dinilai, tepat untuk
mengelakkan pengkaji bekerja ke belakang daripada pilihan yang diutamakan kepada pemberat yang
membenarkannya.

## Matematiknya

```
Bagi setiap pilihan i dan kriteria j:
  Skor_ij    = prestasi pilihan itu terhadap kriteria tersebut (selalunya 0-100
               atau 1-10, daripada bukti, pertimbangan pakar atau penskoran pihak berkepentingan)
  Pemberat_j = kepentingan relatif kriteria j, jumlah pemberat ialah 1 (atau 100)

Skor berpemberat bagi pilihan i = Σ_j (Skor_ij × Pemberat_j)

Prosedur:
1. Persetujui set kriteria dan pemberat SEBELUM menilai mana-mana pilihan
   (pemberatan swing atau perbandingan berpasangan, mis. AHP, ialah
   kaedah pengumpulan yang lazim).
2. Nilai setiap pilihan terhadap setiap kriteria pada skala yang sama,
   daripada bukti jika boleh.
3. Hitung jumlah berpemberat; susun pilihan mengikut peringkat.
4. Uji kepekaan pemberat: adakah kedudukan itu bertahan walaupun terdapat
   perbezaan pendapat yang munasabah tentang seberapa penting setiap kriteria?
```

MCDA tidak menghasilkan nilai mutlak yang boleh dipertahankan seperti nilai kini bersih SCBA — ia hanya
menghasilkan kedudukan yang bersyarat pada pemberat yang dipersetujui. Ini satu kelebihan apabila keputusan itu
benar-benar tentang menukar ganti barangan yang tidak dapat dibandingkan, dan satu liabiliti jika digunakan untuk
mengelak kerja pemonetan yang lebih sukar sedangkan pemonetan sebenarnya boleh dilakukan.

## Contoh yang diselesaikan

**Pihak berkuasa tempatan**: sebuah majlis yang memilih lokasi untuk pusat kitar semula sisa isi rumah baharu
menilai tiga tapak berdasarkan empat kriteria, diberi pemberat oleh panel merentas jabatan sebelum sebarang
lawatan tapak:

```
Kriteria (pemberat):      Kos modal (30%)  Akses pengangkutan (25%)
                           Impak komuniti (25%)  Impak alam sekitar (20%)

Skor tapak (0-100, lebih tinggi = lebih baik):
Tapak A: kos 80, akses 60, komuniti 40, alam sekitar 70
Tapak B: kos 60, akses 90, komuniti 70, alam sekitar 50
Tapak C: kos 90, akses 50, komuniti 80, alam sekitar 60

Jumlah berpemberat:
Tapak A = 80(.30) + 60(.25) + 40(.25) + 70(.20) = 24+15+10+14 = 63
Tapak B = 60(.30) + 90(.25) + 70(.25) + 50(.20) = 18+22.5+17.5+10 = 68
Tapak C = 90(.30) + 50(.25) + 80(.25) + 60(.20) = 27+12.5+20+12 = 71.5
```

Tapak C berada di tempat teratas. Larian kepekaan yang menukar pemberat impak komuniti daripada 25% kepada 35%
(mengambil 10 mata daripada kos modal) mengubah jumlah Tapak C kepada 71.5 − 3 + 8 = 76.5 dan Tapak B kepada
68 − 6 + 7 = 69 — Tapak C masih mendahului, jadi kedudukan itu kukuh terhadap perbezaan pendapat yang munasabah
tentang pemberatan, iaitu semakan yang dijangka dilaporkan oleh Green Book.

**Badan amal**: yayasan pemberi geran yang memilih antara membiayai perkhidmatan nasihat hutang, rangkaian bank
makanan dan program literasi kewangan menggunakan MCDA dan bukannya SROI (lihat
[pulangan sosial atas pelaburan](../pulangan-sosial-atas-pelaburan/)) tepat kerana para pemegang amanah tidak
bersetuju, dengan niat baik, sama ada bantuan krisis atau pencegahan harus diberi pemberat lebih besar — MCDA
membolehkan mereka bersetuju tentang *bentuk* perbezaan pendapat itu (julat pemberat) dan bukannya berpura-pura
bahawa satu nisbah SROI menyelesaikannya.

## Kaitan dengan kejuruteraan perisian

MCDA ialah alat yang sesuai untuk pemilihan vendor dan seni bina apabila kriteria benar-benar bercanggah —
memilih antara sistem pengurusan kes yang dihoskan di awan dengan yang di premis menukar ganti kos, risiko
kedaulatan data, kebolehcapaian dan kelajuan penyampaian dengan cara yang tidak boleh dikurangkan kepada satu
nombor. Ketua kejuruteraan harus berkeras supaya pemberatan dilakukan sebelum pilihan dinilai, seperti yang
dikehendaki oleh Green Book, kerana latihan pemberatan yang dijalankan selepas melihat senarai pendek pasti
condong ke arah pilihan yang sudah disukai oleh bilik mesyuarat. Lihat
[bina atau beli dalam kerajaan](../bina-atau-beli-dalam-kerajaan/) untuk aplikasi MCDA yang lazim, dan
[kad skor nilai awam](../kad-skor-nilai-awam/) untuk alat penskoran berstruktur berkaitan yang digunakan
selepas keputusan dan bukannya sebelum keputusan.

## Perangkap

- **Menetapkan pemberat selepas melihat pilihan.** Ini cara paling lazim MCDA dimanipulasi, sama ada dengan
  sengaja atau tidak; terbitkan pemberat sebelum penskoran, dan rekodkan siapa yang menetapkannya.
- **Menganggap jumlah berpemberat sebagai nombor mutlak.** Skor 71.5 berbanding 68 bukan jurang yang bermakna
  secara statistik melainkan analisis kepekaan mengesahkan kedudukan itu stabil; laporkan julat, bukan ketepatan
  palsu.
- **Menggunakan MCDA untuk mengelak pemonetan yang sebenarnya boleh dilakukan.** Jika kebanyakan kriteria boleh
  diberi harga secara boleh dipercayai, lalai kepada MCDA dan bukannya [SCBA](../analisis-kos-manfaat-sosial/)
  membuang maklumat yang boleh digunakan oleh penilaian.
- **Membiarkan satu pihak berkepentingan yang dominan menetapkan semua pemberat sendirian.** Amalan baik Green
  Book menjangkakan pemberat diperoleh daripada panel yang mewakili, bukan pengarah penaja, supaya penilaian tidak
  sekadar menerbitkan semula apa yang sudah dikehendaki oleh orang itu.

## Sumber

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Annex A
  (multi-criteria decision analysis) and Box 2 case studies.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Communities and Local Government. "Multi-criteria analysis: a manual." 2009.
  <https://www.gov.uk/government/publications/multi-criteria-analysis-a-manual>
- Belton V, Stewart TJ. "Multiple Criteria Decision Analysis: An Integrated Approach." Kluwer,
  2002.
