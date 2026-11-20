# KPI Sektor Awam

Penunjuk prestasi utama (key performance indicator, KPI) ialah ukuran terpilih yang dijejaki yang mewakili sama
ada sesuatu perkhidmatan awam menjalankan tugasnya dengan baik. Dalam kerajaan, pilihan KPI tidak pernah neutral:
kerana KPI dikaitkan dengan belanjawan, jadual liga dan kerjaya, tindakan memilihnya membentuk tingkah laku
semua orang di hilirnya, selalunya lebih daripada dasar yang mewujudkan perkhidmatan itu.

## Mengapa ini penting

Pemerhatian Charles Goodhart pada 1975 tentang dasar monetari — kemudian dipopularkan oleh Marilyn Strathern
sebagai "apabila sesuatu ukuran menjadi sasaran, ia tidak lagi menjadi ukuran yang baik" — ialah label amaran
paling penting dalam pengurusan prestasi sektor awam. KPI yang dipilih untuk *menggambarkan* sesuatu sistem
mula *mengherotkan* sistem itu sebaik sahaja peruntukan sumber, gaji atau kelangsungan politik dikaitkan
dengannya. Ilustrasi kanonik ialah masa tindak balas ambulans NHS: apabila sasaran tindak balas lapan minit
Kategori A menjadi mengikat, sesetengah amanah ditunjukkan telah "menyusun" ambulans tepat di luar jam masa
tindak balas, atau mengklasifikasi semula panggilan, untuk mencapai nombor itu tanpa mengubah hasil pesakit.
Panduan National Audit Office UK tentang memilih dan menggunakan penunjuk prestasi — yang digariskan merentas
laporan nilai untuk wangnya dan rangka kerja "Performance Measurement by Regulators" dan "Choosing the Right
FABRIC" (Fit for purpose, Appropriate, Balanced, Robust, Integrated, Cost-effective) — wujud tepat kerana
jabatan terus memilih penunjuk yang mudah dilaporkan dan bukannya penunjuk yang sukar dimanipulasi. Jurutera
perisian yang menghantar papan pemuka yang akan digunakan untuk menilai seorang menteri atau pengarah, sama ada
disengajakan atau tidak, sedang mereka bentuk struktur insentif institusi awam.

## Matematiknya

Reka bentuk KPI ialah topik berbentuk rangka kerja, tetapi *penilaian* calon KPI ialah senarai semak yang boleh
diulang, bukan formula:

```
Bagi setiap calon KPI, nilai berdasarkan:
  Fit for purpose  — adakah ia mengukur hasil, atau proksi yang beberapa langkah jauhnya?
  Appropriate      — adakah ia milik orang yang benar-benar boleh mempengaruhinya?
  Balanced         — adakah ia dipasangkan dengan metrik balas yang menangkap manipulasi?
  Robust           — adakah ia tahan audit, atau dilaporkan sendiri dan tidak boleh disahkan?
  Integrated       — adakah ia sesuai dengan set yang lebih luas, atau menentang KPI lain?
  Cost-effective   — adakah mengumpulkannya lebih mahal daripada keputusan yang dimaklumkannya?

Pembahagian penunjuk utama vs penunjuk tertinggal:
  Penunjuk utama     → meramalkan hasil masa depan, tetapi selalunya boleh dimanipulasi (mis. panggilan dijawab <60s)
  Penunjuk tertinggal → mengesahkan hasil telah berlaku, tetapi tiba terlalu lewat untuk mengemudi (mis. tinjauan
                        kepuasan tahunan)
  Set KPI yang boleh dipertahankan memasangkan sekurang-kurangnya satu daripada setiap jenis bagi setiap objektif.
```

## Contoh yang diselesaikan

**Amanah ambulans**: sebuah amanah melaporkan KPI masa tindak balas Kategori A (mengancam nyawa) "75% panggilan
dijawab dalam 8 minit." Dalam satu suku tahun, 6,000 panggilan Kategori A masuk; 4,500 dipenuhi dalam 8 minit,
memberi 75.0% — kelihatan mencapai sasaran.

```
KPI utama = 4,500 / 6,000 × 100 = 75.0%  (memenuhi ambang 75%)
```

Tetapi audit Goodhart menambah metrik balas: purata masa tindak balas bagi 10% panggilan paling perlahan.

```
Purata tindak balas desil paling perlahan = 34 minit (naik daripada 19 minit dua tahun sebelumnya)
```

Amanah itu mencapai sasaran sementara ekornya — panggilan yang paling berkemungkinan benar-benar mengancam
nyawa apabila triaj tidak sempurna — menjadi jauh lebih teruk, kerana krew diutamakan ke arah panggilan yang
hampir pada tebing 8 minit dan bukannya ke arah kecemasan klinikal. KPI tunggal itu menceritakan kisah palsu;
KPI berpasangan menceritakan yang benar.

## Kaitan dengan kejuruteraan perisian

Jurutera yang membina papan pemuka prestasi untuk kerajaan, secara fungsian, sedang mereka bentuk API insentif
organisasi. Implikasi praktikal: instrumentasikan *penyebut* seketat pengangka (KPI yang dilaporkan sebagai
peratusan semata-mata mengundang manipulasi penyebut — lihat [kos bagi setiap transaksi](../kos-setiap-transaksi/)
untuk perangkap yang sama dalam perkhidmatan digital); bina metrik balas ke dalam papan pemuka yang sama dan bukannya
laporan berasingan yang tiada siapa baca, supaya manipulasi kelihatan pada titik keputusan; dan versikan takrifan
KPI, kerana pentakrifan semula secara senyap (mengubah apa yang dikira sebagai "panggilan," "kes," atau
"penamatan") secara fungsian setara dengan mengubah sasaran tanpa mengumumkannya.
[Kad skor nilai awam](../kad-skor-nilai-awam/) ialah satu cara berstruktur untuk menghentikan satu KPI daripada
dibaca secara berasingan, dan [akauntabiliti berasaskan hasil](../akauntabiliti-berasaskan-hasil/) ialah disiplin
memilih KPI peringkat populasi yang tidak boleh diherotkan secara unilateral oleh satu pasukan.

## Perangkap

- **Memilih metrik yang mudah dikumpul berbanding yang bermakna**: masa menjawab panggilan mudah dilog; sama ada
  panggilan itu menyelesaikan masalah rakyat tidak mudah — tetapi hanya yang kedua ialah hasil. Tahan
  daripada lalai kepada apa yang sudah dikeluarkan oleh sistem.
- **Tiada metrik balas**: mana-mana KPI yang dikaitkan dengan wang atau reputasi akan dimanipulasi di pinggir;
  hantar bersamanya metrik berpasangan yang menangkap vektor manipulasi yang berkemungkinan sebelum menerbitkannya.
- **Mentakrifkan semula metrik tanpa log perubahan**: menukar "panggilan diterima" kepada "panggilan dijawab" untuk
  menyedapkan arah aliran memusnahkan kredibiliti siri masa sebaik sahaja ia ditemui — sentiasa terbitkan log
  perubahan takrifan bersama nombor.
- **Mengelirukan aktiviti dengan keputusan**: mengira pemeriksaan yang selesai ialah output; mengira premis yang
  dibawa ke dalam pematuhan lebih hampir dengan hasil (lihat
  [hasil berbanding output](../hasil-berbanding-output/)).

## Sumber

- National Audit Office, "Choosing the Right FABRIC: A Framework for Performance Information."
  <https://www.nao.org.uk/>
- Marilyn Strathern, "'Improving Ratings': Audit in the British University System," *Social
  Anthropology*, 1997 (formulation of Goodhart's law as commonly cited).
- National Audit Office, investigations into NHS ambulance service performance reporting.
  <https://www.nao.org.uk/>
