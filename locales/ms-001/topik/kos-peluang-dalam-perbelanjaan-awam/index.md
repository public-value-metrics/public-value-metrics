# Kos Peluang dalam Perbelanjaan Awam

Kos peluang ialah nilai alternatif terbaik yang dikorbankan apabila sesebuah badan awam memperuntukkan wang,
masa kakitangan atau modal politik kepada satu pilihan dan bukannya yang lain. Dalam sesebuah jabatan yang
mempunyai belanjawan tetap, setiap paun yang dibelanjakan untuk satu program ialah paun yang tidak boleh
dibelanjakan untuk program terbaik seterusnya — kos sebenar sesuatu keputusan bukanlah apa yang dibelanjakan,
tetapi apa yang digantikannya.

## Mengapa ini penting

Belanjawan awam dihadkan secara tunai dalam tempoh kajian perbelanjaan, jadi — tidak seperti firma swasta yang
berkembang — jabatan kerajaan tidak boleh sekadar "mencari wang tambahan" untuk idea yang baik; membiayainya
bermakna menghentikan pembiayaan sesuatu yang lain. Green Book HM Treasury menganggap ini asas: setiap penilaian
dikehendaki membandingkan sesuatu intervensi dengan garis dasar "do minimum" *dan* dengan penggunaan alternatif
sumber yang sama yang realistik, tepat kerana soalan sebenar yang ditanya oleh pasukan perbelanjaan Treasury
tidak pernah "adakah ini baik?" tetapi "adakah ini lebih baik daripada apa lagi yang boleh dibeli dengan wang
ini?" Prinsip penilaian teras Green Book — bahawa sumber awam harus mengalir kepada intervensi yang mempunyai
nilai sosial bersih tertinggi bagi setiap paun — ialah kos peluang yang dinyatakan sebagai dasar.

Ini mudah dinyatakan tetapi sukar diterapkan kerana "alternatif terbaik seterusnya" jarang kelihatan dalam satu
kes perniagaan. Program geran £2 juta untuk pekerjaan belia dibandingkan, dalam kes perniagaan, dengan tidak
melakukan apa-apa — tetapi pembanding yang jujur ialah intervensi pekerjaan belia terbaik seterusnya, atau
sememangnya penggunaan terbaik seterusnya bagi £2 juta di mana-mana dalam portfolio, termasuk perbelanjaan bukan
pekerjaan. Magenta Book (HM Treasury, 2020) memberi amaran jelas bahawa penilaian yang membandingkan "dengan
intervensi" kepada "tanpa intervensi" memperkecilkan halangan yang mesti dilepasi oleh sesuatu intervensi,
kerana "tanpa intervensi ini" tidak sama dengan "tanpa apa-apa langsung" — wang yang dibebaskan membiayai
sesuatu yang lain.

## Matematiknya

```
Kos peluang memilih A = nilai alternatif terbaik yang dikorbankan B

Nilai awam bersih bagi A = nilai(A) − nilai(B), bukan nilai(A) − 0
```

Tiada formula universal kerana alternatif yang dikorbankan bergantung pada konteks, tetapi disiplin itu boleh
diumumkan: kenal pasti penggunaan terbaik seterusnya yang realistik bagi baris belanjawan yang sama (bukan
"tidak buat apa-apa" yang ideal), nilaikannya atas asas yang sama (dimonetkan jika boleh, menurut
[analisis kos-faedah sosial](../analisis-kos-manfaat-sosial/)), dan tolakkan.

## Contoh yang diselesaikan

**Baris belanjawan jabatan**: dana transformasi digital £5 juta boleh membiayai tepat satu daripada dua
cadangan pada tahun kewangan ini.

- *Pilihan A*: platform pengurusan kes baharu, manfaat dimonetkan £7.2 juta dalam tempoh 5 tahun (penjimatan
  kecekapan serta penyelesaian kes yang lebih pantas).
- *Pilihan B*: perkhidmatan pengesahan identiti yang dikongsi merentas tiga jabatan, manfaat dimonetkan
  £6.4 juta dalam tempoh 5 tahun.

Kes perniagaan naif untuk A membandingkan manfaat £7.2 juta dengan kos £5 juta dan melaporkan nisbah
manfaat-kos 1.44:1 — kelihatan kukuh. Tetapi kerana A dan B bersaing untuk £5 juta yang sama, kos peluang
memilih A ialah manfaat £6.4 juta B yang dikorbankan. Kes *bersih* untuk A berbanding alternatif yang realistik
hanyalah £7.2j − £6.4j = £0.8 juta, bukan angka utama penuh £7.2 juta. Jika pilihan ketiga, C, menawarkan
manfaat £7.5 juta untuk £5 juta yang sama, membiayai A dan bukannya C akan memusnahkan £0.3 juta nilai awam
walaupun kes perniagaan A sendiri kelihatan sepenuhnya wajar secara berasingan.

**Masa kakitangan pihak berkuasa tempatan**: pasukan data tiga orang sebuah majlis boleh membina sama ada papan
pemuka senarai menunggu perumahan (dianggar menjimatkan 400 jam pegawai/tahun, dinilai pada £28/jam =
£11,200/tahun) atau alat triaj penipuan faedah (dianggar mencegah £85,000/tahun bayaran tidak betul). Membina
papan pemuka mempunyai kos peluang £85,000/tahun yang dikorbankan, bukan sekadar kos gaji pasukan data — kos
sebenar pembinaan dalaman yang "percuma" ialah manfaat yang jauh lebih besar yang boleh dihasilkan pasukan itu di
tempat lain.

## Kaitan dengan kejuruteraan perisian

Kapasiti kejuruteraan dalam sesebuah badan awam ialah belanjawan terhad — kapasiti sprint, bukan paun — dan
disiplin yang sama terpakai secara langsung:

- Sentiasa namakan pembanding: kes perniagaan sesuatu ciri harus menyatakan apa lagi yang boleh disampaikan oleh
  minggu-pasukan yang sama, bukan sekadar pulangannya sendiri.
- Anggap "kami mempunyai kapasiti kejuruteraan yang lapang" sebagai permulaan analisis kos peluang, bukan
  penghujungnya — kapasiti lapang masih mempunyai penggunaan alternatif terbaik, walaupun penggunaan itu ialah
  pembayaran hutang teknikal (lihat
  [hutang teknikal sebagai hakisan nilai awam](../hutang-teknikal-sebagai-hakisan-nilai-awam/)).
- Kaitkan ini secara langsung dengan [nilai untuk wang](../nilai-untuk-wang/): ujian "ekonomi" VFM tidak
  bermakna tanpa pembanding kos peluang yang jujur, dan dengan
  [kos kelewatan dalam program awam](../kos-kelewatan-dalam-program-awam/), yang meletakkan harga pada dimensi
  masa bagi logik alternatif yang dikorbankan yang sama.

## Perangkap

- **Membandingkan dengan "tidak buat apa-apa" dan bukannya alternatif terbaik seterusnya.** Green Book
  memerlukan garis dasar "do minimum" tepat kerana kos peluang sebenar jarang sifar; kes perniagaan yang hanya
  melepasi halangan "tidak buat apa-apa" belum menunjukkan ia mengatasi alternatif yang realistik.
- **Mengabaikan persaingan antara jabatan untuk kumpulan dana yang sama.** Baris belanjawan yang kelihatan
  diasingkan dalam satu direktorat selalunya bersaing pada peringkat yang lebih tinggi (kajian perbelanjaan,
  program modal) tempat kos peluang sebenar direalisasikan.
- **Menganggap masa kakitangan yang dibebaskan tidak mempunyai nilai selanjutnya.** Masa yang "dijimatkan" hanya
  mencipta nilai jika diagihkan semula kepada sesuatu yang bernilai; jika penggunaan alternatif tidak wujud,
  penjimatan itu hanyalah nominal.

## Sumber

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation" (2022).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020).
  <https://www.gov.uk/government/publications/the-magenta-book>
- Claxton K, et al. "Methods for the estimation of the NICE cost-effectiveness threshold." Health
  Technology Assessment, 2015;19(14) — demonstrasi empirikal kanonik kos peluang sebagai kekangan yang mengikat
  dalam belanjawan awam yang tetap. <https://www.journalslibrary.nihr.ac.uk/hta/hta19140/>
