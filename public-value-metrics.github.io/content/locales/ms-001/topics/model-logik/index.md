# Model Logik

Model logik ialah rajah linear yang menghubungkan input, aktiviti, output, hasil (outcome) dan impak bagi sesuatu
program, dibaca dari kiri ke kanan sebagai rantaian akauntabiliti: sumber dimasukkan, aktiviti dijalankan,
output dihasilkan, hasil berubah untuk benefisiari, dan impak terkumpul pada skala yang lebih luas atau lebih
panjang. Ia ialah struktur piawai yang dijangka oleh pembiaya dan juruaudit supaya sesuatu program boleh
dilaporkan, dan merupakan pasangan berpandangan ke hadapan kepada
[teori perubahan](../teori-perubahan/) yang dipetakan ke belakang.

## Mengapa ini penting

Magenta Book HM Treasury menetapkan model logik sebagai elemen wajib dalam reka bentuk penilaian program, dan
pembiaya seperti National Lottery Community Fund membina templat permohonan dan pelaporan mereka sekitar
rantaian lima lajur ini. Nilainya ialah ia memaksa sesuatu program menyatakan, dalam satu rajah, apa yang akan
dibelanjakan, apa yang akan dilakukan dengannya, apa yang akan dihasilkan, dan — yang paling kritikal — apa yang
sepatutnya berubah akibatnya, pada tahap kespesifikan yang cenderung dikaburkan oleh satu perenggan prosa. Model
logik yang lajur input dan aktivitinya terisi tetapi lajur hasilnya kosong atau kabur dapat dikesan sekali
pandang, dan itulah sebabnya pembiaya memintanya.

## Matematiknya

Model logik ialah rantaian struktur dan bukannya formula:

```
Input           Aktiviti          Output              Hasil                 Impak
(sumber         (apa yang         (produk langsung    (perubahan untuk      (perubahan jangka
 yang           dilakukan         yang boleh           benefisiari)          panjang, peringkat
 diperuntukkan)  dengannya)        dibilang)                                  populasi atau sistemik)
```

Setiap lajur hendaklah lebih spesifik daripada yang sebelumnya: input ialah apa yang anda belanjakan, aktiviti
ialah apa yang anda lakukan, output ialah apa yang disampaikan tanpa mengira kesannya, hasil ialah apa yang
berubah akibatnya — perbezaan yang dihuraikan sepenuhnya dalam
[hasil berbanding output](../hasil-berbanding-output/) — dan impak ialah perubahan jangka panjang yang berpanjangan,
yang kerap hanya sebahagiannya boleh dikaitkan dengan program.

## Contoh yang diselesaikan

**Pihak berkuasa tempatan (perkhidmatan nasihat hutang digital)**:

- Input: belanjawan tahunan £180,000, 4.0 FTE penasihat, sistem pengurusan kes.
- Aktiviti: sesi jangkauan, temu janji nasihat hutang secara individu.
- Output: 900 temu janji disampaikan; 750 pelan hutang dan faedah dikeluarkan.
- Hasil: daripada klien yang sampai ke susulan 6 bulan, 60% (450 daripada 750) melaporkan tunggakan berkurang,
  purata pengurangan £1,200 setiap klien — £540,000 jumlah pengurangan tunggakan.
- Impak: penurunan yang dapat diukur dalam permohonan kehilangan tempat tinggal daripada pangkalan klien
  perkhidmatan itu dalam tempoh dua tahun, hanya sebahagiannya boleh dikaitkan dengan perkhidmatan ini di samping
  intervensi lain (lihat [analisis kontrafaktual](../analisis-kontrafaktual/)).

**Badan amal (perkongsian rujukan bank makanan)**:

- Input: £45,000, 1.5 FTE penyelaras, perjanjian perkongsian dengan 12 agensi perujuk.
- Aktiviti: triaj rujukan, pembungkusan dan pengedaran bungkusan.
- Output: 5,000 bungkusan makanan diedarkan kepada 1,100 isi rumah.
- Hasil: 68% isi rumah yang ditinjau (748 daripada 1,100) melaporkan keselamatan makanan bertambah baik dalam
  panggilan susulan 4 minggu.
- Impak: sumbangan kepada pengurangan permintaan perkhidmatan krisis tempatan, yang dibuktikan hanya dalam
  statistik kawasan agregat, tidak boleh dikaitkan dengan badan amal ini semata-mata.

## Kaitan dengan kejuruteraan perisian

Model logik hampir menjadi model data harfiah bagi sistem hasil: input dan aktiviti ialah data operasi yang
sedia ada (perbelanjaan, kakitangan, log sesi); output mudah diinstrumentasikan kerana dibilang pada titik
penyampaian; hasil memerlukan pengumpulan data susulan yang direka dengan sengaja (tinjauan, pautan data
pentadbiran) yang tidak akan wujud melainkan ada yang membinanya; impak biasanya memerlukan data berpaut,
longitudinal atau peringkat populasi yang melangkaui sistem mana-mana satu program. Jurutera yang membina alat
pelaporan harus mendesak pihak pentauliah menentukan penunjuk hasil dan impak pada peringkat reka bentuk, dan
bukannya lalai kepada papan pemuka output sahaja kerana itulah yang disokong oleh data transaksi sedia ada.
Lihat [pulangan sosial atas pelaburan](../pulangan-sosial-atas-pelaburan/) untuk kaedah yang menilai lajur hasil
dan impak secara khusus, dan [realisasi manfaat](../realisasi-manfaat/) untuk menjejaki sama ada lajur
impak benar-benar tercapai.

## Perangkap

- **Berhenti pada output.** Papan pemuka yang melaporkan temu janji yang disampaikan atau bungkusan yang
  diedarkan dan membayangkan manfaat sedang melaporkan aktiviti, bukan keputusan — lihat
  [hasil berbanding output](../hasil-berbanding-output/).
- **Tiada hubungan kausal yang dinyatakan antara lajur.** Model logik menyatakan rantaian tetapi bukan sebab
  aktiviti patut menghasilkan output yang patut menghasilkan hasil; penaakulan itu terletak dalam
  [teori perubahan](../teori-perubahan/), dan model logik tanpa teori di belakangnya tidak diuji.
- **Menganggapnya sebagai dokumen bidaan sekali sahaja.** Model logik yang dihasilkan hanya untuk memenuhi
  permohonan pembiayaan dan tidak pernah dikemas kini tidak lagi mencerminkan apa yang sebenarnya dilakukan
  program.
- **Atribusi yang menjalar pada lajur impak.** Menuntut perubahan peringkat populasi sebagai disebabkan oleh
  satu program semata-mata, tanpa kontrafaktual, melebih-lebihkan apa yang disokong oleh bukti.

## Sumber

- HM Treasury, Magenta Book (2020), Chapter 3. <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, logic model guidance. <https://www.tnlcommunityfund.org.uk/>
- W.K. Kellogg Foundation, "Logic Model Development Guide" (2004). <https://www.wkkf.org/resource-directory/resources/2004/01/logic-model-development-guide>
