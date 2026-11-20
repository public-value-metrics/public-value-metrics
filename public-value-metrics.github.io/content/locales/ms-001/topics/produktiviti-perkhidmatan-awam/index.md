# Produktiviti Perkhidmatan Awam

Produktiviti perkhidmatan awam mengukur betapa cekap perbelanjaan awam menukar input (kakitangan, modal, barangan
dan perkhidmatan) kepada output terlaras kualiti, bagi perkhidmatan — kesihatan, pendidikan, kepolisan, penjagaan
sosial — yang tidak mempunyai harga pasaran dan oleh itu tiada angka hasil jualan untuk dibahagikan kos. Office
for National Statistics UK telah menerbitkan siri ini sejak pertengahan 2000-an dan ia kekal sebagai percubaan
kebangsaan yang paling maju dari segi metodologi untuk menjawab "adakah kerajaan menjadi lebih baik atau lebih
buruk dalam menukar wang kepada perkhidmatan awam?"

## Mengapa ini penting

Dalam pasaran, produktiviti ialah (nilai output) / (kos input), dan nilai output boleh dilihat kerana seseorang
membayar untuknya. Penggantian pinggul, tempat di sekolah dan rondaan polis tidak mempunyai harga jualan, jadi
secara naif anda hanya boleh mengukur *input* (apa yang dibelanjakan) — yang menggoda pengulas untuk menganggap
peningkatan perbelanjaan awam sebagai buruk secara automatik, kerana lebih banyak input dengan aktiviti utama
yang mendatar kelihatan seperti produktiviti jatuh. Metodologi ONS, yang digariskan dalam penerbitan "Sources
and Methods" untuk produktiviti perkhidmatan awam, menyelesaikan ini dengan membina indeks *output* daripada
isi padu aktiviti (pembedahan dilakukan, murid diajar, jenayah disiasat) dan kemudian *melaraskan kualiti* indeks
output itu — bagi kesihatan, memasukkan kadar kelangsungan hidup dan masa menunggu; bagi pendidikan, memasukkan
pencapaian; bagi kepolisian, memasukkan hasil seperti penyelesaian kes — supaya perkhidmatan yang melakukan
bilangan pembedahan yang sama tetapi mencapai kadar kelangsungan hidup yang lebih baik didaftarkan sebagai lebih
produktif, bukan sekadar lebih mahal. Penemuan utama yang berulang merentas keluaran ONS menyedihkan bagi
sektor ini: produktiviti perkhidmatan awam UK jatuh mendadak semasa pandemik COVID-19 dan menjelang keluaran
pertengahan 2020-an ONS sendiri masih belum pulih ke paras 2019 dalam beberapa subsektor termasuk penjagaan
kesihatan, walaupun perbelanjaan meningkat — jurang yang membingkaikan semula "lebih banyak pembiayaan" dan
"lebih banyak produktiviti" sebagai dua soalan yang sepenuhnya berasingan.

## Matematiknya

```
Indeks output (isi padu) = Σ (aktiviti_i × pemberat kos seunit relatif_i), berpemberat tahun asas
                          merentas semua aktiviti perkhidmatan (mis. pembedahan pinggul, pembedahan katarak,
                          konsultasi GP), analog dengan indeks isi padu Laspeyres/Paasche

Pelarasan kualiti      = indeks output × faktor pelarasan kualiti
                          (mis. memasukkan perubahan dalam kadar kelangsungan hidup, masa menunggu,
                          pencapaian atau pengulangan kesalahan sebagai pengganda kepada isi padu mentah)

Indeks input           = Σ (jam buruh × pemberat kos buruh) + (kos barangan/perkhidmatan,
                          dinyahkembungkan) + (penggunaan modal)

Pertumbuhan produktiviti faktor keseluruhan = % perubahan dalam indeks output terlaras kualiti
                                    − % perubahan dalam indeks input
```

## Contoh yang diselesaikan

**Pengiraan produktiviti sektor akut NHS sebagai ilustrasi** (struktur mengikut metodologi ONS):

```
Tahun 1: indeks isi padu output = 100.0 (tahun asas), indeks input = 100.0
         → indeks produktiviti = 100.0

Tahun 2: isi padu aktiviti naik 3.0% (lebih banyak pembedahan, lebih banyak temu janji)
         tetapi purata masa menunggu bertambah buruk, dengan menggunakan diskaun
         pelarasan kualiti −1.0%
         Indeks output terlaras kualiti = 100 × 1.030 × 0.990 = 101.97

         Input naik: bilangan kakitangan +4.0%, kos lain (dinyahkembungkan) +1.5%,
         indeks input berpemberat = 100 × 1.032 = 103.2

Pertumbuhan produktiviti = (101.97 / 100 − 1) − (103.2 / 100 − 1)
                         = 1.97% − 3.2% = −1.23 mata peratusan

Tafsiran: aktiviti meningkat, tetapi input meningkat lebih pantas dan kualiti jatuh
sedikit, jadi produktiviti — output bagi setiap unit input — merosot walaupun
"lebih banyak penjagaan disampaikan."
```

Inilah corak tepat yang berulang kali dilaporkan oleh keluaran ONS bagi sebahagian NHS selepas pandemik:
peningkatan perbelanjaan dan peningkatan aktiviti mentah wujud bersama produktiviti terukur yang jatuh
apabila pelarasan kualiti dan pertumbuhan input kedua-duanya diambil kira.

## Kaitan dengan kejuruteraan perisian

Produktiviti perkhidmatan awam ialah analog peringkat populasi kepada perdebatan produktiviti kejuruteraan
(mata cerita yang dihantar berbanding [metrik DORA](../metrik-dora-untuk-nilai-awam/) berbanding
[metrik aliran](../metrik-aliran-dalam-penyampaian-kerajaan/)): daya pemprosesan mentah tanpa pelarasan kualiti
mengelirukan di hospital seperti "baris kod yang dihantar" mengelirukan dalam pasukan perisian. Pasukan yang
membina saluran paip data prestasi untuk jabatan harus menganggap pelarasan kualiti sebagai peringkat
transformasi kelas pertama yang diversi, bukan nota kaki — kerana kredibiliti ONS sendiri bergantung pada
pelarasan itu telus, boleh diulang dan disemak semula apabila data kualiti yang lebih baik tiba (ONS menyemak
semula anggaran produktiviti tahun lepas apabila data kualiti asas — mis. kadar kelangsungan hidup —
dimuktamadkan, jadi mana-mana sistem hiliran yang menggunakan statistik ini mesti mengendalikan semakan semula
berlatar belakang, bukan sekadar menambah tempoh baharu). Ia juga bersilang secara langsung dengan
[jumlah kos pemilikan](../jumlah-kos-pemilikan-dalam-it-kerajaan/) dan
[produktiviti AI dalam sektor awam](../produktiviti-ai-dalam-sektor-awam/): sistem yang meningkatkan isi padu
aktiviti mentah tanpa memperbaiki atau mengekalkan kualiti bukan, menurut takrifan ONS sendiri, satu
penambahbaikan produktiviti.

## Perangkap

- **Menganggap pertumbuhan input sebagai pertumbuhan produktiviti**: lebih banyak perbelanjaan yang membiayai
  lebih ramai kakitangan menghasilkan lebih banyak *aktiviti*, bukan lebih banyak *produktiviti*, melainkan
  output bagi setiap unit input juga meningkat — keduanya lazim dikelirukan dalam ulasan politik.
- **Mengabaikan pelarasan kualiti sepenuhnya**: indeks output yang dibina hanya daripada kiraan aktiviti mentah
  akan menunjukkan "peningkatan produktiviti" daripada melakukan lebih banyak sesuatu yang bernilai atau
  berkualiti lebih rendah; pelarasan kualiti ONS wujud khusus untuk menangkap ini.
- **Membandingkan indeks produktiviti merentas subsektor tanpa memadankan vintaj metodologi**: produktiviti
  kesihatan, pendidikan dan kepolisan masing-masing dibina daripada sumber data aktiviti dan kualiti yang
  berbeza pada kitaran semakan semula yang berbeza — perbandingan merentas sektor yang naif membandingkan
  instrumen yang tidak serasi.
- **Membaca kejatuhan produktiviti satu tahun sebagai arah aliran kekal**: angka produktiviti era pandemik dan
  pasca pandemik menunjukkan ketidakmantapan tahun-ke-tahun yang ketara apabila data kualiti (mis. senarai
  menunggu, pemulihan pilihan) sendiri berubah; ONS secara konsisten memberi amaran terhadap tafsiran
  berlebihan pergerakan satu tahun.

## Sumber

- Office for National Statistics, "Public Service Productivity" series.
  <https://www.ons.gov.uk/economy/economicoutputandproductivity/publicservicesproductivity>
- Office for National Statistics, "Public Service Productivity: Total, UK — Sources and Methods."
  <https://www.ons.gov.uk/economy/economicoutputandproductivity/publicservicesproductivity>
