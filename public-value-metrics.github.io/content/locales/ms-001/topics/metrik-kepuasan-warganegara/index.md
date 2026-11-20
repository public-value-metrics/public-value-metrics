# Metrik Kepuasan Warganegara

Metrik kepuasan warganegara mengukur bagaimana orang menilai pengalaman langsung mereka terhadap perkhidmatan
awam — berbeza daripada kepercayaan terhadap institusi secara umum, dan berbeza daripada sama ada perkhidmatan
itu benar-benar mencapai hasil yang baik. Sesuatu perkhidmatan boleh disukai tetapi tidak berkesan, atau
berkesan tetapi tidak disukai; jurang antara keduanya sendiri ialah maklumat diagnostik yang patut dipantau
oleh pasukan penyampaian.

## Mengapa ini penting

Kepuasan diukur pada dua ketinggian berbeza yang lazim dikelirukan. Pada peringkat perkhidmatan, Performance
Platform UK yang kini telah ditamatkan dan service manual GOV.UK hari ini menghendaki tinjauan kepuasan bagi
setiap perkhidmatan (lazimnya skala lima mata "sangat berpuas hati" hingga "sangat tidak berpuas hati",
ditadbirkan pada titik transaksi) sebagai salah satu daripada empat KPI perkhidmatan wajib — lihat
[piawaian perkhidmatan dan metrik transaksi](../piawaian-perkhidmatan-dan-metrik-transaksi/). Pada peringkat
institusi, Civil Service People Survey UK mengukur penglibatan dan pengalaman pekerja merentas setiap jabatan
kerajaan pusat setiap tahun, dan secara berasingan program "Trust in Government" OECD meninjau kepercayaan awam
terhadap kerajaan nasional merentas negara anggota, menjejaki corak kemerosotan dan pemulihan jangka panjang yang
dibentuk dengan kuat oleh krisis (krisis kewangan 2008 dan pandemik COVID-19 kedua-duanya menghasilkan
pergerakan yang tajam dan ketara dalam angka kepercayaan OECD). Sebab jurutera yang membina perkhidmatan
berhadapan warganegara perlu memisahkan kepuasan dan hasil ialah mod kegagalan yang diketahui dalam reka
bentuk perkhidmatan: borang digital yang direka dengan cantik dan mudah digunakan untuk tuntutan faedah boleh
mencatat kepuasan yang sangat tinggi sementara dasar asasnya — peraturan kelayakan, tunggakan pemprosesan,
jumlah anugerah — tidak menjadikan pemohon lebih baik. Kepuasan mengukur antara muka; ia tidak mengukur nilai
yang disampaikan di belakangnya.

## Matematiknya

```
Kepuasan bersih = % berpuas hati (atau sangat berpuas hati) − % tidak berpuas hati (atau sangat tidak berpuas hati)
                    (respons neutral/tiada pendapat dikecualikan daripada kedua-dua sebutan, tetapi dikira
                    dalam asas respons untuk mengira setiap peratusan)

Jurang kepuasan-ke-hasil = skor kepuasan − skor pencapaian hasil
                    (kedua-duanya dinormalkan 0–100; jurang positif yang besar menandakan perkhidmatan
                    yang "rasa baik" tetapi kurang menyampaikan dari segi substansi)

Indeks kepercayaan (gaya OECD) = % responden tinjauan yang menjawab "ya" kepada
                    "adakah anda mempunyai keyakinan terhadap [kerajaan nasional]?"
                    dijejaki sebagai siri masa, lazimnya diasingkan mengikut
                    umur, pendapatan dan pendidikan
```

## Contoh yang diselesaikan

**Perkhidmatan e-pengebilan cukai majlis pihak berkuasa tempatan**: tinjauan kepuasan pada titik transaksi
yang berjaya menunjukkan 2,400 responden: 1,650 berpuas hati/sangat berpuas hati, 250 tidak berpuas hati/sangat
tidak berpuas hati, 500 neutral.

```
Kepuasan bersih = (1,650/2,400 × 100) − (250/2,400 × 100)
                  = 68.75% − 10.42%
                  = +58.3 kepuasan bersih
```

Ini nampak kukuh secara terpencil. Tetapi tinjauan itu hanya ditunjukkan kepada pengguna yang *berjaya*
melengkapkan transaksi — bias pengukuran yang diketahui (lihat perangkap di bawah). Memasangkannya dengan
metrik kadar penyiapan daripada [piawaian perkhidmatan dan metrik transaksi](../piawaian-perkhidmatan-dan-metrik-transaksi/)
menunjukkan penyiapan hanya 71%, bermakna:

```
Kepuasan populasi sebenar tidak diukur bagi 29% yang meninggalkan perjalanan itu —
berkemungkinan kohort yang paling tidak berpuas hati, kerana pengabaian itu sendiri ialah
isyarat negatif yang kuat yang tidak pernah ditangkap oleh tinjauan.
```

**Ilustrasi peringkat nasional (struktur siri kepercayaan gaya OECD)**: kepercayaan terhadap kerajaan nasional
dilaporkan 42% pada tahun 1, jatuh kepada 34% pada tahun 2 (tahun krisis) dan pulih kepada 39% pada tahun 3 —
trajektori yang tipikal bagi corak kejutan-dan-pemulihan-separa yang didokumenkan oleh OECD merentas
negara anggota selepas krisis besar.

## Kaitan dengan kejuruteraan perisian

Instrumentasikan tinjauan kepuasan pada setiap titik keluar yang bermakna dalam perjalanan pengguna, bukan
hanya pada penyiapan yang berjaya — kesilapan kejuruteraan yang paling lazim dalam bidang ini, dan yang secara
senyap menukar metrik kepuasan menjadi metrik kosong yang berat sebelah kerana survivorship. Jika boleh,
pasangkan skor kepuasan dengan metrik penyiapan atau hasil pada papan pemuka yang sama supaya pasukan tidak
boleh meraikan kepuasan yang meningkat sementara penyiapan jatuh secara senyap (lihat
[kos setiap transaksi](../kos-setiap-transaksi/) dan
[inklusi digital](../inklusi-digital/) untuk siapa yang disisihkan daripada pensampelan kepuasan digital
sejak awal lagi — pengguna bukan digital dan digital berbantu kurang diwakili secara sistematik dalam tinjauan
dalam perkhidmatan). Data kepuasan dan kepercayaan juga menyumbang terus kepada kaki legitimasi
[segi tiga strategik Moore](../nilai-awam/), dan tergolong dalam perspektif "pelanggan" dan "legitimasi" bagi
[kad skor nilai awam](../kad-skor-nilai-awam/) — lihat
[metrik kepercayaan dan legitimasi](../metrik-kepercayaan-dan-legitimasi/) untuk pasangan peringkat institusi bagi
metrik peringkat perkhidmatan ini.

## Perangkap

- **Bias survivorship dalam tinjauan pada titik penyiapan**: pengguna yang meninggalkan perjalanan tidak
  pernah melihat tinjauan, jadi skor kepuasan dalam perkhidmatan yang tinggi boleh wujud bersama kadar penyiapan
  yang rendah dan populasi tidak kelihatan yang besar bagi mereka yang tidak berpuas hati dan tidak menyiapkan.
- **Menganggap kepuasan sebagai proksi hasil**: antara muka yang direka dengan baik untuk dasar yang direka
  dengan buruk mencatat skor baik pada kepuasan dan buruk pada hasil — sentiasa laporkan kedua-duanya, jangan
  jadikan satu sebagai pengganti yang lain.
- **Sampel kecil dan tidak mewakili dilaporkan dengan ketepatan palsu**: skor kepuasan daripada beberapa
  ratus responden yang memilih sendiri dilaporkan sehingga satu tempat perpuluhan membayangkan keyakinan yang
  tidak dapat disokong oleh saiz sampel.
- **Mengabaikan pengasingan demografi**: angka kepercayaan dan kepuasan nasional yang tidak dipecahkan mengikut
  umur, pendapatan, kecacatan atau akses digital boleh menyembunyikan pengalaman yang berbeza dengan tajam
  merentas kumpulan — corak yang diasingkan secara jelas oleh keluaran Trust in Government OECD sendiri.

## Sumber

- OECD, "Trust in Government." <https://www.oecd.org/en/topics/trust-in-government.html>
- UK Cabinet Office, "Civil Service People Survey" results.
  <https://www.gov.uk/government/collections/civil-service-people-survey-results>
- GOV.UK Service Manual, "Measuring Success." <https://www.gov.uk/service-manual/measuring-success>
