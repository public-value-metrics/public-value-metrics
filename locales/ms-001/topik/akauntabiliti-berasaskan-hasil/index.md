# Akauntabiliti Berasaskan Hasil (OBA)

Akauntabiliti Berasaskan Hasil (Outcomes-Based Accountability), juga dipanggil Results-Based Accountability (RBA),
ialah rangka kerja Mark Friedman untuk memisahkan dua soalan yang lazimnya dikaburkan bersama dalam pelaporan
sektor awam: "adakah populasi itu sejahtera?" (akauntabiliti populasi) dan "adakah program khusus ini
berprestasi baik?" (akauntabiliti prestasi). Mencampuradukkan kedua-duanya, menurut Friedman, ialah satu-satunya
sebab paling lazim program yang diurus dengan baik disalahkan kerana arah aliran populasi yang tidak pernah ada
kuasa untuk mengubahnya.

## Mengapa ini penting

Friedman menggariskan rangka kerja ini dalam *Trying Hard Is Not Good Enough* (2005), dengan berhujah bahawa
kebanyakan pelaporan awam sama ada menenggelamkan pembuat keputusan dalam statistik peringkat populasi yang tidak
dikawal oleh mana-mana agensi tunggal (kadar kehamilan remaja, kadar pengangguran, jangka hayat) atau
menenggelamkan mereka dalam kiraan aktiviti peringkat program (klien yang dilayan, rujukan yang dibuat) yang
tidak menyatakan apa-apa tentang sama ada kehidupan sesiapa bertambah baik. Sumbangan RBA ialah kosa kata kecil
yang berdisiplin yang memisahkan kedua-duanya: keputusan populasi (keadaan kesejahteraan bagi seluruh populasi,
seperti "kanak-kanak dilahirkan sihat") bukan milik mana-mana agensi tunggal dan memerlukan ramai rakan kongsi
bergerak bersama; ukuran prestasi (betapa baiknya sesuatu program khusus melayan kliennya yang khusus) milik satu
agensi dan harus dinilai hanya berdasarkan apa yang sebenarnya boleh dipengaruhi oleh agensi itu. "Tiga soalan
prestasi" Friedman — berapa banyak yang kita lakukan, betapa baik kita melakukannya, dan adakah sesiapa
bertambah baik? — kini tertanam dalam kontrak perkhidmatan manusia negeri dan daerah di AS dan, melalui
perundingan dan perkakasan Clear Impact yang sejajar dengan RBA, digunakan secara meluas dalam pentauliahan
kerajaan tempatan UK dan Komanwel. Taruhan praktikalnya bersifat kontrak: program perumahan tidak harus
dihentikan pembiayaannya kerana kadar gelandangan bandar naik akibat sebab makroekonomi di luar jangkauannya,
tetapi ia pasti harus dihentikan pembiayaannya jika kliennya sendiri tidak diberi perumahan.

## Matematiknya

```
Akauntabiliti populasi ("gambaran besar" yang dikongsi komuniti, wilayah atau negara):
  Keputusan    — keadaan kesejahteraan (mis. "penduduk selamat dari segi ekonomi")
  Penunjuk     — ukuran keadaan itu (mis. kadar pengangguran, pendapatan isi rumah median)
  → tiada program tunggal yang memiliki penunjuk itu; pergerakan memerlukan ramai penyumbang

Akauntabiliti prestasi (apa yang menjadi tanggungjawab satu program):
  Berapa banyak yang kita lakukan?     — jumlah aktiviti (klien dilayan, unit disampaikan)
  Betapa baik kita melakukannya?       — kualiti/kecekapan (% menamatkan program, kos bagi setiap klien)
  Adakah sesiapa bertambah baik?       — hasil yang penting (% bekerja 6 bulan selepas
                                          program, sebelum/selepas atau berbanding kumpulan perbandingan)

Sesuatu program dinilai berdasarkan soalan prestasi ketiga, tidak pernah berdasarkan
penunjuk populasi secara langsung, melainkan skala dan reka bentuknya
berkemungkinan boleh menggerakkannya seorang diri.
```

## Contoh yang diselesaikan

**Program sokongan pekerjaan dibiayai bandar**, 500 peserta/tahun, dikontrakkan oleh pihak berkuasa tempatan di
bawah rangka kerja prestasi gaya RBA:

```
Penunjuk populasi (konteks, bukan kad skor program):
  Kadar pengangguran bandar: 6.2% (naik daripada 5.8% tahun sebelumnya, didorong oleh penutupan
  kilang di luar kawalan program)

Ukuran prestasi (akauntabiliti sebenar program):
  Berapa banyak:  500 peserta didaftarkan (sasaran 480) — dicapai
  Betapa baik:    kadar penamatan 78%; kos bagi setiap penamat = £340,000 / 390 penamat ≈ £872
  Bertambah baik: daripada 390 penamat, 260 bekerja secara berterusan pada 6 bulan = 66.7%
                  berbanding 41% bagi kumpulan perbandingan yang dipadankan (lihat counterfactual-analysis)
```

Menurut bacaan akauntabiliti populasi, program itu seolah-olah gagal — kadar pengangguran bandar meningkat
semasa ia bertugas. Menurut bacaan akauntabiliti prestasi RBA, program itu berjaya: ia mencapai sasaran
isi padunya, mengekalkan kualiti, dan menghasilkan hasil pekerjaan 25.7 mata peratusan di atas kumpulan
perbandingan yang dipadankan, sementara penunjuk populasi bergerak kerana sebab (penutupan kilang) yang
sepenuhnya di luar kawalan program.

## Kaitan dengan kejuruteraan perisian

RBA dipetakan terus kepada perbezaan SRE yang biasa: penunjuk populasi seperti metrik North Star peringkat
perniagaan yang tidak dimiliki oleh mana-mana pasukan kejuruteraan secara hujung ke hujung (hasil syarikat, bahagian
pasaran), manakala ukuran prestasi seperti SLO milik pasukan sendiri — perkara yang benar-benar digerakkan oleh
keputusan reka bentuk pasukan itu. Papan pemuka yang melaporkan kedua-duanya tanpa melabelkan yang mana satu
mengundang salah atribusi yang tepat yang RBA dibina untuk mencegah: jurutera on-call disalahkan atas metrik yang
dikawal oleh pasukan pergantungan. Apabila mentauliah atau membina alat pelaporan untuk kontrak hasil, bina
triad "berapa banyak / betapa baik / bertambah baik" sebagai medan kelas pertama yang boleh ditapis secara
berasingan dan bukannya satu KPI gabungan — ini disiplin yang sama dengan memisahkan penunjuk utama dan
penunjuk tertinggal dalam [KPI sektor awam](../kpi-sektor-awam/). RBA juga logik akauntabiliti yang mendasari
[bayaran mengikut keputusan dan bon impak sosial](../bayaran-mengikut-keputusan-dan-bon-impak-sosial/): kontrak PbR
hanya boleh membayar dengan adil berdasarkan ukuran prestasi "bertambah baik", tidak pernah berdasarkan penunjuk
populasi, melainkan intervensi itu benar-benar pemacu dominannya.

## Perangkap

- **Memberi ganjaran atau menghukum program berdasarkan penunjuk populasi yang tidak dapat dikawalnya**: inilah
  satu-satunya kesilapan yang RBA wujud untuk mencegahnya; sentiasa jejak sama ada program itu penyumbang utama
  atau kecil kepada keputusan populasi sebelum melampirkan akibat kepadanya.
- **Melaporkan "berapa banyak" seolah-olah ia "bertambah baik"**: kiraan aktiviti (klien dilayan) ialah data
  paling mudah dikumpul dan paling kurang bermaklumat; tegaskan soalan "adakah sesiapa bertambah baik" dijawab
  dengan data hasil sebenar, sebaik-baiknya berbanding kontrafaktual (lihat
  [counterfactual-analysis](../analisis-kontrafaktual/)).
- **Menganggap penunjuk RBA tetap selama-lamanya**: kaedah Friedman jelas bersifat lelaran — kitaran "data,
  cerita, apa yang berkesan, pelan tindakan" — bukan latihan reka bentuk kad skor sekali sahaja.
- **Tiada kumpulan perbandingan untuk "bertambah baik"**: perubahan sebelum/selepas tanpa kontrafaktual
  mencampuradukkan kesan program dengan arah aliran yang akan ditunjukkan juga oleh populasi itu.

## Sumber

- Mark Friedman, *Trying Hard Is Not Good Enough: How to Produce Measurable Improvements for
  Customers and Communities*, Trafford Publishing, 2005.
- Clear Impact, "What is Results-Based Accountability?"
  <https://clearimpact.com/results-based-accountability/>
