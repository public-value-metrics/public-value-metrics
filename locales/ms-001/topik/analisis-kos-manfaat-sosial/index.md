# Analisis Kos-Manfaat Sosial

Analisis kos-manfaat sosial (SCBA) menukarkan setiap kos dan manfaat sesuatu dasar atau program — pasaran dan bukan pasaran — kepada unit kewangan yang sama, mendiskaunkan aliran masa depan kepada nilai kini, dan mengimbanginya untuk menghasilkan satu nombor: adakah cadangan ini menjadikan masyarakat lebih baik, dan sebanyak mana?

## Mengapa ini penting

SCBA ialah kaedah kuantitatif lalai dalam kes ekonomi [penilaian Green Book](../penilaian-green-book/): panduan HM Treasury menghendaki cadangan menunjukkan nilai sosial kini bersih (NPSV) yang positif di mana sahaja manfaat boleh dimonetisasi dengan boleh dipercayai, menggunakan kesanggupan membayar (willingness-to-pay) sebagai prinsip penilaian asas bagi barangan bukan pasaran (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>, Chapter 5). Disiplin yang dikuatkuasakannya ialah analisis kos-manfaat "sosial" bukan latihan yang sama dengan penilaian pelaburan sektor swasta: ia mesti merangkumi kos dan manfaat yang jatuh kepada pihak ketiga yang bukan pihak dalam transaksi (eksternaliti), ia mesti menggunakan [kadar diskaun sosial](../kadar-diskaun-sosial/) dan bukan kos modal komersial, dan ia harus menggunakan [pemberatan pengagihan](../pemberatan-pengagihan/) apabila satu paun lebih bermakna bagi isi rumah yang lebih miskin daripada isi rumah yang lebih kaya.

SCBA gagal tepat di tempat yang dijangka pengkritiknya: barangan tanpa analog pasaran — udara bersih, perpaduan sosial, nilai nyawa yang diselamatkan — mesti dimonetisasi menggunakan kaedah [keutamaan yang dinyatakan](../penilaian-keutamaan-yang-dinyatakan/) atau [keutamaan terzahir](../penilaian-keutamaan-terzahir/), atau [harga bayangan](../harga-bayangan/) perlu dibina. Apabila pemonetisasian dipertikaikan dan bukan sekadar sukar, Green Book sendiri mengesyorkan beralih kepada [analisis keberkesanan kos dalam kerajaan](../analisis-keberkesanan-kos-dalam-kerajaan/) atau [analisis keputusan berbilang kriteria](../analisis-keputusan-berbilang-kriteria/) dan bukannya memaksa satu nombor yang tiada siapa percaya.

## Matematiknya

```
NPSV = Σ [t=0 hingga T] (Manfaat_t − Kos_t) / (1 + r)^t

di mana:
  Manfaat_t = semua manfaat yang dimonetisasi pada tahun t, termasuk
              barangan bukan pasaran yang dinilai melalui keutamaan
              dinyatakan/didedahkan atau harga bayangan
  Kos_t     = semua kos yang dimonetisasi pada tahun t, termasuk kos
              peluang sumber (lihat ../opportunity-cost-in-public-spending/)
  r         = kadar diskaun sosial (HM Treasury menetapkan 3.5% menurun
              kepada kadar lebih rendah selepas tahun ke-30, mengikut
              Green Book Annex A)
  T         = tempoh penilaian

Nisbah manfaat-kos (BCR) = Σ PV(Manfaat) / Σ PV(Kos)
```

BCR melebihi 1 (atau NPSV melebihi sifar) menunjukkan nilai sosial bersih. Kategori nilai untuk wang Green Book (seperti yang digunakan dalam penilaian pengangkutan dan infrastruktur) melabelkan julat BCR: di bawah 1.0 ialah nilai untuk wang yang lemah, 1.0–1.5 rendah, 1.5–2.0 sederhana, 2.0–4.0 tinggi, dan melebihi 4.0 sangat tinggi. Analisis sensitiviti — menjalankan semula NPSV di bawah andaian pesimis dan optimis — adalah wajib, bukan pilihan, kerana manfaat bukan pasaran yang dimonetisasi mempunyai jalur ketidakpastian yang luas.

## Contoh yang diselesaikan

**Pihak berkuasa tempatan**: sebuah majlis menilai pelaburan £3 juta dalam rangkaian berbasikal dan berjalan kaki baharu sepanjang tempoh penilaian 20 tahun pada kadar diskaun 3.5%.

```
Kos: £3 juta modal pada tahun 0, £50,000/tahun penyelenggaraan (tahun 1-20)
PV(penyelenggaraan) ≈ £50,000 × 14.2 (faktor anuiti 20 tahun pada 3.5%) ≈ £710,000
Jumlah PV(kos) ≈ £3.71 juta

Manfaat (semuanya dimonetisasi melalui alat penilaian DfT/WHO yang diterbitkan):
  Manfaat kesihatan daripada peningkatan aktiviti fizikal: £180,000/tahun
  Pengurangan ketidakhadiran: £40,000/tahun
  Pengurangan kesesakan (kurang perjalanan kereta): £60,000/tahun
  Jumlah aliran manfaat: £280,000/tahun
PV(manfaat) ≈ £280,000 × 14.2 ≈ £3.98 juta

NPSV = £3.98 juta − £3.71 juta = +£0.27 juta
BCR = 3.98 / 3.71 = 1.07 → nilai untuk wang "rendah"
```

Skim ini melepasi ambang tetapi hanya tipis; larian sensitiviti pada anggaran manfaat kesihatan yang 20% lebih rendah (mencerminkan ketidakpastian sebenar dalam penilaian aktiviti fizikal) menjadikan BCR jatuh di bawah 1.0, dan inilah sebabnya Green Book menghendaki jadual sensitiviti diterbitkan bersama angka utama, bukan sekadar anggaran pusat.

**Badan amal**: program pencegahan kematian bayi dengan kos £500,000/tahun dinilai menggunakan nilai nyawa statistik (VSL) — harga bayangan, bukan harga pasaran yang diperhatikan — kira-kira £2.1 juta (angka HM Treasury yang dikemas kini pada 2023, yang sendiri diperoleh daripada kajian keutamaan dinyatakan). Mengelakkan satu kematian bayi setahun berbanding kos £500,000 memberikan BCR 4.2, nilai untuk wang "sangat tinggi" dengan selesa — tetapi keseluruhan keputusan bergantung pada angka VSL, dan itulah sebabnya mana-mana SCBA yang menggunakan VSL mesti mendedahkannya sebagai andaian, bukan fakta.

## Kaitan dengan kejuruteraan perisian

SCBA ialah kerangka semula jadi bagi keputusan pelaburan platform dan infrastruktur dalam perisian kerajaan — membandingkan platform identiti dikongsi dengan penyelesaian titik jabatan, misalnya, memerlukan pemonetisasian manfaat seperti pengurangan kos orientasi pendua, pengurangan penipuan dan masa-ke-perkhidmatan yang lebih pantas, yang tiada harga pasaran sendiri. Jurutera yang membina perkhidmatan asas harus menjangka ketua program meminta input kepada analisis ini: kos seunit transaksi (lihat [kos setiap transaksi](../kos-setiap-transaksi/)), volum jangkaan, serta kos degradasi/masa henti. Disiplin yang paling penting untuk diimport: diskaunkan manfaat masa depan, namakan garis dasar kontrafaktual secara jelas (lihat [analisis kontrafaktual](../analisis-kontrafaktual/)), dan jangan sekali-kali membentangkan satu anggaran titik tanpa julat sensitivitinya.

## Perangkap

- **Pengiraan berganda manfaat.** Mengira kedua-dua "masa dijimatkan" dan "produktiviti diperoleh daripada masa itu" sebagai baris manfaat berasingan melebih-lebihkan kes itu; masa dijimatkan ialah manfaatnya, penggunaan seterusnya bukan manfaat tambahan melainkan dibuktikan secara bebas.
- **Meninggalkan kos yang dianjakkan.** Skim yang memindahkan kesesakan dari satu jalan ke jalan lain, atau memindahkan penipuan dari satu saluran ke saluran lain, tidak mencipta manfaat bersih yang tersirat oleh NPSV utamanya — lihat [anjakan dan atribusi](../penyesaran-dan-atribusi/).
- **Menggunakan kadar diskaun swasta.** Menggunakan kos modal komersial (katakan 8–10%) dan bukannya kadar diskaun sosial secara sistematik memperkecilkan nilai manfaat awam jangka panjang seperti hasil kesihatan dan alam sekitar — lihat [kadar diskaun sosial](../kadar-diskaun-sosial/).
- **Memonetisasi yang tidak dipertikaikan dan mengelak yang dipertikaikan.** Jika dua pertiga manfaat sesuatu cadangan ialah penjimatan kecekapan yang dimonetisasi dengan yakin dan satu pertiga ialah peningkatan kesejahteraan yang dimonetisasi dengan goyah, NPSV utama secara senyap mencampurkan nombor keras dengan nombor lembut; laporkan keduanya secara berasingan.

## Sumber

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Chapter 5.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury. "Green Book supplementary guidance: value of a statistical life." 2023.
  <https://www.gov.uk/government/publications/green-book-supplementary-guidance-value-of-a-statistical-life>
- Department for Transport. "TAG unit A1.1: cost-benefit analysis." Transport Analysis Guidance.
  <https://www.gov.uk/guidance/transport-analysis-guidance-tag>
