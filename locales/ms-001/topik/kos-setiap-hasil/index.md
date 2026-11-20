# Kos Setiap Hasil

Kos setiap hasil ialah jumlah perbelanjaan program dibahagikan dengan bilangan orang yang mencapai perubahan
yang ditakrifkan dan bermakna dalam keadaan mereka — bukan bilangan yang sekadar menerima perkhidmatan. Ia
ialah metrik kecekapan paling tajam yang boleh digunakan oleh pembiaya atau pasukan penyampaian, kerana ia
memaksa soalan awal yang dielakkan oleh kebanyakan badan amal: apakah, dengan tepat, yang dikira sebagai kejayaan?

## Mengapa ini penting

Bank makanan boleh melaporkan dua angka yang sangat berbeza daripada akaun tahun yang sama. Kos setiap
bungkusan makanan yang diagihkan mungkin £15. Kos setiap isi rumah yang seterusnya mencapai keterjaminan
makanan — tidak lagi memerlukan bantuan makanan kecemasan, disahkan pada titik susulan — mungkin £340. Kedua-duanya benar.
Hanya satu yang memberitahu pembiaya sama ada wang itu berkesan. Jurang antara keduanya ialah jurang antara
output dan hasil: bungkusan yang diserahkan ialah output; isi rumah yang tidak lagi dalam krisis ialah
hasil. Lihat [hasil berbanding output](../hasil-berbanding-output/).

Sektor ketiga UK telah menghabiskan dua dekad membina infrastruktur untuk memaksa perbezaan ini.
"Pendekatan empat tonggak" New Philanthropy Capital terhadap keberkesanan badan amal secara jelas meminta
organisasi menyatakan hasil mereka sebelum output mereka, dan Inspiring Impact — kolaboratif pengukuran
impak sokongan pembiaya UK — menerbitkan Outcomes Matrix yang kini dikehendaki dilengkapkan oleh badan amal
dalam banyak permohonan geran. Program penyelidikan tahunan "State of Hunger" Trussell Trust, yang dijalankan
bersama Heriot-Watt University, wujud tepat kerana bilangan bungkusan sahaja tidak mengatakan apa-apa tentang
sama ada orang terlepas daripada ketidakjaminan makanan.

Kos setiap hasil hanya bermakna setelah anda menetapkan kontrafaktual: hasil yang dicapai "juga" bukan
hasil yang dibeli oleh program. Lihat [analisis kontrafaktual](../analisis-kontrafaktual/)
dan [anjakan dan atribusi](../penyesaran-dan-atribusi/).

## Matematiknya

```
Kos setiap hasil = Jumlah kos program / Bilangan benefisiari yang mencapai hasil yang ditakrifkan

di mana:
  Jumlah kos program   = kos penyampaian langsung + bahagian saksama overhed
  Hasil yang ditakrifkan = perubahan keadaan yang ditentukan terlebih dahulu dan boleh diukur
                            (cth. "terjamin makanan pada susulan 6 bulan",
                            bukan "menerima bungkusan makanan")
```

Bandingkan dengan [pangkalan data kos unit](../pangkalan-data-kos-seunit/) (cth. penanda aras kos unit khusus
sektor) untuk menilai sama ada sesuatu kos setiap hasil itu baik, purata atau lemah berbanding
intervensi yang setanding.

## Contoh yang diselesaikan

**Bank makanan, satu tahun**:

- Jumlah kos program: £450,000
- Bungkusan diagihkan: 30,000
- Kos setiap bungkusan (metrik output): £450,000 / 30,000 = **£15**

Badan amal itu juga menjalankan tinjauan susulan enam bulan dengan sampel isi rumah, mendapati 35%
isi rumah yang menerima tiga atau lebih bungkusan melaporkan tidak lagi memerlukan bantuan makanan kecemasan
dan mencatat skor di atas ambang keterjaminan makanan pada modul tinjauan keterjaminan makanan piawai. Daripada 1,800
isi rumah yang menerima tiga bungkusan atau lebih pada tahun itu, 630 mencapai hasil tersebut.

```
Kos setiap hasil = £450,000 / 630 = £714 bagi setiap isi rumah yang mencapai keterjaminan makanan
```

Angka £714 itulah yang harus digunakan oleh pembiaya yang membandingkan badan amal ini dengan pilot pindahan
tunai atau perkhidmatan nasihat hutang — bukan £15. Jika program pindahan tunai yang setanding di rantau yang
sama mencapai keterjaminan makanan pada £500 setiap isi rumah, bank makanan itu bukan jelas laluan yang lebih
cekap kepada hasil yang sama, walaupun kos setiap bungkusannya kelihatan murah.

## Kaitan dengan kejuruteraan perisian

Kebanyakan sistem pengurusan kes dibina untuk merekod output, kerana output ialah apa yang berlaku dalam
transaksi (bungkusan diserahkan, borang dihantar). Hasil biasanya berlaku kemudian, selalunya di luar tetingkap
tangkapan biasa sistem, dan memerlukan keputusan reka bentuk yang disengajakan: bina mekanisme susulan
(pencetus tinjauan, aliran kerja hubungan semula, latihan pautan data) sebagai ciri kelas pertama, bukan
tambahan lewat yang ditampal untuk laporan tahunan. Jurutera yang membina platform pengurusan geran atau
pengurusan kes untuk sektor ini harus menganggap "apakah peristiwa hasil, dan bagaimana kita memerhatikannya"
sebagai soalan keperluan yang ditanya sebelum model data ditetapkan — jauh lebih sukar untuk memasang medan
hasil kemudian berbanding pembilang output. Lihat [hasil berbanding output](../hasil-berbanding-output/)
dan [model logik](../model-logik/) untuk cara menstrukturkan perbualan keperluan itu, dan
[kos setiap benefisiari](../kos-setiap-benefisiari/) untuk metrik yang lebih pantas dan kasar yang dicapai pasukan apabila
penjejakan hasil belum dibina.

## Perangkap

- **Melaporkan output yang disamarkan sebagai hasil.** "Orang yang dicapai" bukan "orang yang dibantu." Jika metrik
  itu boleh dihasilkan oleh log sistem tanpa hubungan susulan, ia hampir pasti output.
- **Permainan penyebut.** Menyempitkan populasi hasil kepada "mereka yang menamatkan program"
  secara senyap menggugurkan orang yang berhenti — selalunya kes paling sukar — dan menggembungkan kadar yang
  kelihatan. Nyatakan penyebut sebagai semua orang yang bermula, bukan semua orang yang selesai.
- **Tiada kontrafaktual.** Mengira sesiapa yang mencapai hasil, termasuk mereka yang akan mencapainya
  juga, melebih-lebihkan apa yang dibeli oleh program. Lihat [analisis kontrafaktual](../analisis-kontrafaktual/).
- **Membandingkan merentas takrifan hasil yang tidak serasi.** "Terjamin makanan" yang diukur oleh modul
  tinjauan yang disahkan tidak setanding dengan "terjamin makanan" yang dilaporkan sendiri dalam borang kepuasan; jadual liga
  kos setiap hasil hanya jujur apabila takrifan hasil sepadan.

## Sumber

- New Philanthropy Capital (NPC), "Four Pillar Approach" to charity effectiveness. <https://www.thinknpc.org/resource-hub/four-pillar-approach/>
- Inspiring Impact, Outcomes Matrix and impact measurement resources. <https://inspiringimpact.org/>
- Trussell Trust and Heriot-Watt University, "State of Hunger" research programme. <https://www.trusselltrust.org/state-of-hunger/>
- GiveWell, "Our criteria" (cost-effectiveness as the leading criterion for charity recommendation). <https://www.givewell.org/how-we-work/our-criteria>
