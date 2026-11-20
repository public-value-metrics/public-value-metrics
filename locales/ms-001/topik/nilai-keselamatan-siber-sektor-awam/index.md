# Nilai Keselamatan Siber Sektor Awam

Nilai keselamatan siber sektor awam ialah disiplin meletakkan harga pada pengurangan risiko: berapakah nilai
untuk menjadikan pelanggaran data rakyat kurang berkemungkinan, memandangkan perbelanjaan keselamatan tidak
menghasilkan output yang kelihatan apabila ia berfungsi dan output yang sangat kelihatan apabila ia gagal?
Bagi perkhidmatan yang menyimpan rekod faedah, data kesihatan atau rekod cukai, sifat "tidak kelihatan apabila
berfungsi" itulah sebabnya ia memerlukan hujah nilai yang jelas, bukan sekadar tanda semak pematuhan.

## Mengapa ini penting

Cyber Assessment Framework (CAF) National Cyber Security Centre UK memberi organisasi sektor awam cara berstruktur
untuk menjadikan keselamatan satu disiplin yang boleh dinilai dan berasaskan hasil dan bukannya senarai semak: ia
mentakrifkan empat objektif peringkat tinggi (mengurus risiko keselamatan, melindungi daripada serangan siber,
mengesan peristiwa keselamatan siber, dan meminimumkan impak insiden) yang dipecahkan kepada hasil penyumbang
yang boleh dinilai terhadap pemilik sistem, dalam semangat yang sama dengan titik 9 [digital-service-standard](../standard-perkhidmatan-digital/)
("create a secure service which protects users' privacy"). Apa yang dilindungi oleh penilaian CAF mempunyai
tanda harga yang didokumenkan: Cost of a Data Breach Report IBM menjejaki purata kos pelanggaran mengikut
sektor, dan secara konsisten mendapati sektor awam berada di hujung bawah julat berbanding kewangan atau
penjagaan kesihatan — edisi terkini meletakkan purata sektor awam sekitar $2.6–2.9 juta setiap pelanggaran —
tetapi "lebih rendah daripada kewangan" bukan "rendah", dan pelanggaran kerajaan membawa kos yang tidak
sepenuhnya ditangkap oleh angka laporan itu: kehilangan kepercayaan rakyat terhadap saluran digital, yang
menurunkan [pengambilan digital](../penjimatan-peralihan-saluran/) yang menjadi pergantungan kes perniagaan anjakan
saluran, serta kos politik dan undang-undang mendedahkan data yang negara paksa rakyat serahkan pada mulanya.

## Matematiknya

Pelaburan keselamatan dinilai sebagaimana mana-mana perbelanjaan pengurangan risiko dinilai: sebagai pengurangan
kerugian dijangka, menggunakan identiti pengurusan risiko klasik.

```
Jangkaan Kerugian Tahunan (ALE) = Jangkaan Kerugian Tunggal (SLE)
                                  × Kadar Berlaku Tahunan (ARO)

Nilai sesuatu kawalan keselamatan =
  ALE_sebelum_kawalan − ALE_selepas_kawalan − kos tahunan kawalan

Kawalan wajar dibiayai apabila:
  (ALE_sebelum − ALE_selepas) > kos tahunan kawalan

Penilaian CAF tidak secara langsung mengeluarkan kebarangkalian, tetapi profil
hasil CAF sesuatu perkhidmatan (hasil penyumbang mana yang "dicapai",
"dicapai sebahagiannya" atau "tidak dicapai") ialah input proksi yang munasabah
untuk menganggar ARO — sistem dengan akses istimewa yang tidak diurus atau tiada
pelan tindak balas insiden yang diuji mempunyai ARO realistik yang jauh lebih
tinggi berbanding yang mempunyai kedua-duanya.
```

## Contoh yang diselesaikan

**Sistem pengurusan kes majlis daerah yang menyimpan rekod penjagaan sosial untuk 40,000 penduduk**:

```
Jangkaan Kerugian Tunggal (kos pelanggaran), menggunakan purata sektor awam
daripada Cost of a Data Breach Report IBM terkini ≈ £2.1j
(ditukar, angka magnitud — sentiasa terbitkan semula daripada edisi
laporan semasa dan bukannya menggunakan semula nombor tetap)

ARO semasa (akses istimewa tidak diurus, tiada tindak balas insiden
yang diuji, menurut penilaian kendiri CAF dalaman yang menunjukkan
beberapa hasil "tidak dicapai") ≈ dianggar 8% setahun
  ALE_sebelum = £2.1j × 0.08 = £168,000/tahun

Kawalan yang dicadangkan: pengurusan akses istimewa + pelan tindak balas
insiden yang diuji, menggerakkan hasil CAF yang berkaitan kepada "dicapai",
dianggar mengurangkan ARO kepada 3%/tahun
  ALE_selepas = £2.1j × 0.03 = £63,000/tahun

Kos tahunan kawalan (perkakasan + proses + ujian) = £45,000

Nilai kawalan = (168,000 − 63,000) − 45,000 = £60,000/tahun
  positif bersih — biayai. Aritmetik ini juga menunjukkan kawalan itu
  masih wajar dibiayai pada hampir tiga kali ganda kos, iaitu jenis
  semakan kepekaan yang harus mengiringi mana-mana angka ALE yang dibina
  atas kebarangkalian yang dianggar.
```

## Kaitan dengan kejuruteraan perisian

Jurutera memiliki kebanyakan tuil dalam persamaan ALE: reka bentuk kawalan akses, kebersihan kebergantungan dan
tampalan, liputan pengelogan dan pengesanan, serta perkakasan tindak balas insiden semuanya menggerakkan sebutan
ARO secara langsung, itulah sebabnya penilaian CAF dibaca seperti kajian semula seni bina teknikal sama seperti
audit dasar. Ini ialah [technical-debt-as-public-value-erosion](../hutang-teknikal-sebagai-hakisan-nilai-awam/)
dalam bentuk paling akut — sistem yang tidak ditampal, tidak dipantau dan kawalan aksesnya lemah ialah hutang
yang bayaran faedahnya ialah risiko ekor, bukan seretan yang stabil — dan ia harus didamaikan dengan
[total-cost-of-ownership-in-government-it](../jumlah-kos-pemilikan-dalam-it-kerajaan/) supaya perbelanjaan
keselamatan tidak dianggap berasingan daripada kos operasi sebenar sistem. Ia juga input langsung kepada penilaian
[nilai untuk wang](../nilai-untuk-wang/) di bawah Green Book: kos terlaras risiko ialah sebahagian daripada sisi
"kos" mana-mana penilaian pilihan, bukan sesuatu yang ditambah di penghujung.

## Perangkap

- **Menganggap penilaian kendiri CAF sebagai keselamatan itu sendiri**: penilaian yang lengkap menggambarkan
  postur keselamatan; ia tidak mencipta postur itu — nilainya terletak pada hasil yang dicapai, bukan dokumen.
- **Menggunakan purata kos pelanggaran global sebagai anggaran tempatan tanpa pelarasan**: angka IBM ialah
  purata merentas sampel besar dan pelbagai; jangkaan kerugian tunggal yang realistik bagi pihak berkuasa
  tempatan kecil jarang sama dengan jabatan kerajaan kebangsaan.
- **Mengabaikan psikologi risiko ekor dalam keputusan pelaburan**: kebarangkalian tahunan yang rendah menjadikan
  perbelanjaan keselamatan mudah ditangguhkan selama-lamanya, sehingga tahun ia berlaku — menguji kepekaan
  pengiraan ALE terhadap julat ARO, seperti dalam contoh yang diselesaikan, menangkis perkara ini.
- **Hanya mengira kos pelanggaran gaya IBM, bukan kos kepercayaan**: pelanggaran yang menurunkan kesanggupan
  rakyat menggunakan saluran digital menghakis kes [channel-shift-savings](../penjimatan-peralihan-saluran/) selama
  bertahun-tahun selepas itu, kos yang jarang dimasukkan dalam anggaran kos pelanggaran.

## Sumber

- National Cyber Security Centre, Cyber Assessment Framework. <https://www.ncsc.gov.uk/collection/caf>
- IBM, Cost of a Data Breach Report. <https://www.ibm.com/reports/data-breach>
- GOV.UK Service Manual, service standard, point 9: create a secure service which protects users' privacy. <https://www.gov.uk/service-manual/service-standard/point-9-create-a-secure-service>
