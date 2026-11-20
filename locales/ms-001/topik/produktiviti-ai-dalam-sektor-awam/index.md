# Produktiviti AI dalam Sektor Awam

Metrik tentang apa yang sebenarnya dilakukan bantuan pengekodan AI terhadap output kejuruteraan — kadar
penerimaan cadangan, peningkatan kelajuan dalam kajian terkawal, daya pemprosesan PR dan pengekalan kod —
mempunyai asas bukti yang benar-benar bercanggah walaupun sebelum kekangan sektor awam ditambah: pengelasan
data menghadkan bahagian mana dalam estet legasi yang boleh disentuh oleh alat AI, kitaran perolehan bermakna
alat yang dinilai sering ketinggalan satu generasi model berbanding keupayaan semasa, dan keperluan
kelulusan keselamatan menentukan siapa yang boleh menggunakannya pada apa.

## Mengapa ini penting

Dua kajian terkawal yang paling kerap dipetik menunjuk ke arah bertentangan. RCT GitHub Copilot 2023 oleh
Peng et al. mendapati pembangun menyiapkan tugas pelayan HTTP greenfield 55.8% lebih pantas dengan Copilot
(1j11m berbanding 2j41m, n=95). RCT METR 2025 mendapati pembangun sumber terbuka yang berpengalaman dan
bekerja pada *repositori matang mereka sendiri* adalah 19% lebih perlahan dengan alat AI awal 2025, sambil
percaya mereka kira-kira 20% lebih pantas. Kedua-dua kajian adalah kukuh; percanggahan itulah dapatannya —
keberkesanan pada tugas greenfield tidak berpindah kepada keberkesanan pada pangkalan kod yang matang, dan
banyak kerja kejuruteraan kerajaan ialah kerja pangkalan kod matang pada estet yang lebih lama dan lebih
ganjil daripada repositori komersial median. Generative AI Framework for HMG (2024,
<https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>) oleh Central Digital and Data
Office menggariskan prinsip penerimaan yang bertanggungjawab justeru kerana asas bukti ini tidak boleh
sekadar diimport daripada demonstrasi vendor; jabatan dijangka menilai alat berdasarkan keperluan pengendalian
data dan keselamatan mereka sendiri sebelum pelancaran.

## Matematiknya

```
Kadar penerimaan   = cadangan diterima / cadangan dipaparkan
Kadar pengekalan   = kod AI yang kekal hingga digabung / kod AI yang diterima
Peningkatan kelajuan = (t_kawalan − t_AI) / t_kawalan  (daripada perbandingan terkawal SAHAJA)
Delta daya pemprosesan = Δ PR digabung/pembangun/minggu

Faktor liputan sektor awam:
  bahagian pangkalan kod yang layak = LOC pada sistem yang pengelasannya
    (OFFICIAL, OFFICIAL-SENSITIVE, SECRET) membenarkan alat itu sama sekali

Model nilai = pembangun × liputan layak × masa dijimatkan × kadar sepenuhnya × penggunaan
             — setiap sebutan memerlukan pengukuran tempatan, dan faktor liputan
             tiada setara dalam sektor swasta
```

## Contoh yang diselesaikan

Sebuah jabatan kerajaan menjalankan pilot pembantu pengekodan AI merentas 300 pembangun, tetapi hanya sistem
yang dikelaskan OFFICIAL layak menggunakan alat itu — 70% estet mengikut peruntukan bilangan kakitangan,
dengan baki 30% (sistem berpengelasan lebih tinggi) dikecualikan sepenuhnya.

```
Pembangun layak = 300 × 0.70 = 210

Keputusan pilot: masa dijimatkan yang dilaporkan sendiri 40 min/hari;
                 penjimatan peringkat tugas yang diukur 12 min/hari (0.2j)
                 — jurang persepsi METR, berulang di dunia sebenar

Nilaikan angka yang DIUKUR:
  210 × 0.2j × 220 hari × £55/j sepenuhnya × 0.6 penggunaan
  = 210 × 44 jam × £55 × 0.6
  = 9,240 jam × £55 × 0.6 ≈ £304,920/tahun kapasiti

Kos: 210 kerusi berlesen × £22/bulan × 12 ≈ £55,440/tahun

Nisbah kapasiti bersih ≈ 304,920 / 55,440 ≈ 5.5:1
```

Boleh dibiayai pada kira-kira satu pertiga daripada manfaat yang dilaporkan sendiri, dan hanya selepas
siling pengelasan dikenakan — melesenkan kesemua 300 pembangun atas kekuatan angka yang dilaporkan sendiri
akan melebih-lebihkan kedua-dua populasi yang layak dan penjimatan sebenar.

## Kaitan dengan kejuruteraan perisian

Disiplin yang terpakai secara langsung: jalankan **percubaan pragmatik** pada pangkalan kod dan tiket sebenar
jabatan sendiri, bukan tugas demonstrasi vendor, kerana keputusan METR secara khusus ialah dapatan pangkalan
kod matang; anggap **kadar penerimaan sebagai proksi, bukan hasil** — penerimaan tinggi dengan pengekalan
rendah ialah setara perisian bagi diagnosis berlebihan; pasangkan setiap tuntutan daya pemprosesan dengan
**semakan kestabilan**, kerana laporan DORA 2025 mendapati penerimaan AI meningkatkan daya pemprosesan tetapi
menjejaskan kestabilan perubahan, yang tepat sekali analisis manfaat bersih yang dibina untuk dijalankan oleh
[metrik DORA untuk nilai awam](../metrik-dora-untuk-nilai-awam/); dan jujurlah bahawa perkakasan AI boleh
melebarkan, bukan merapatkan, jurang pada estet legasi yang sarat dengan [hutang teknikal](../hutang-teknikal-sebagai-hakisan-nilai-awam/),
kerana data latihan kurang mewakili kod COBOL, 4GL dan mainframe tersuai yang lazim dalam kerajaan, jadi
kualiti cadangan pada sistem yang paling memerlukan bantuan sering kali paling lemah. Ini terletak
bersama soalan yang lebih luas tentang [nilai AI dalam kerajaan](../nilai-ai-dalam-kerajaan/) dan harus
ditadbir oleh kekangan [nilai keselamatan siber sektor awam](../nilai-keselamatan-siber-sektor-awam/) yang
sama, yang menghadkan di mana mana-mana alat pihak ketiga boleh melihat kod atau data.

## Perangkap

- **Pemindahan kajian vendor**: menggunakan peningkatan kelajuan RCT greenfield pada kerja integrasi legasi
  tepat sekali kesilapan yang didedahkan oleh kajian METR.
- **Laporan sendiri sebagai pengukuran**: jurang 20 mata peratus antara persepsi dengan yang diukur ialah bias
  terbesar yang diketahui dalam literatur ini, dan ia menggembungkan kes perniagaan yang bergantung pada
  tinjauan pembangun semata-mata.
- **Mengabaikan siling pengelasan**: model lesen dan nilai yang dibina atas jumlah bilangan kakitangan dan
  bukannya subset yang layak dan dibenarkan pengelasan secara sistematik melebih-lebihkan keberkesanan kos
  dan liputan yang boleh dicapai.
- **Kelewatan kitaran perolehan**: perolehan alat berasaskan rangka kerja boleh bermakna pilot menilai
  generasi model yang ketinggalan 12–18 bulan daripada apa yang tersedia secara umum pada masa pelancaran
  penuh, menjadikan andaian peningkatan kelajuan dalam kes perniagaan asal usang sebelum beroperasi.

## Sumber

- Peng S, et al., "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot", 2023. <https://arxiv.org/abs/2302.06590>
- METR, "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity", 2025. <https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/>
- DORA, 2025 State of AI-assisted Software Development report. <https://dora.dev/dora-report-2025/>
- Central Digital and Data Office, Generative AI Framework for HMG, 2024. <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
