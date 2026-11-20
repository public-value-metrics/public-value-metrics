# Penghematan saka Pamindhahan Saluran Layanan: Saka Telpon lan Loket menyang Layanan Digital

Penghematan channel shift (pamindhahan saluran) iku pengurangan biaya sing diproyèksiaké saka mindhahaké volume transaksi metu saka saluran larang — telpon, loket tatap muka, pos kertas — menyang layanan mandiri digital sing murah. Iki mesin finansial ing mburi "digital by default", lan uga baris ing business case sing paling kerep salah, amarga asumsi sing dadi dhasaré — yèn saluran offline nyusut nalika panampa digital munggah — mung kadhang-kadhang bener.

## Kenapa penting

Aritmetika katon ora bisa dibantah nganggo angka [biaya saben transaksi](../biaya-saben-transaksi-ékonomi-unit-layanan-digital-pamaréntah/) saka Digital Efficiency Report: pindhahna sayuta transaksi saka kunjungan tatap muka £8,62 menyang transaksi digital £0,15 lan penghematané ngluwihi £8 yuta. Nanging penghematan mung dadi kas sing bisa dialihaké yèn *kapasitas tetep* saluran sing nyusut tenan dibubaraké — kursi pusat panggilan, staf loket, menit kontrak telpon — lan program digital pamaréntah lokal bola-bali nemokaké yèn total volume kontak ora mudhun selaras karo panampa digital. Riset saka program transformasi digital otoritas lokal lan lembaga kaya Socitm lan Local Government Association wis nyathet pola sing bola-bali: saluran digital narik kontak anyar tenan (warga sing ora bakal nelpon utawa dhatengi saiki nindakaké, amarga luwih gampang), lan bagéan penting transaksi "digital" gagal ing tengah dalan lan ngasilaké telpon kuwi waé — mula volume telpon mudhun luwih sethithik tinimbang persentase panampa digital, kadhang ora mudhun babar blas ing angka mutlak senajan *pangsané* saka total kontak suda.

## Petungan

```
Penghematan channel-shift kasar = volume sing dipindhah × (biaya_saluran_lawas − biaya_digital)

Penghematan net (kawujud) = penghematan kasar
                       − panjaluk anyar/bayangan sing digawé saluran sing luwih gampang
                       − biaya failure-demand (kegagalan digital sing
                         isih ngasilaké telpon utawa kunjungan loket)
                       − biaya kapasitas tetep sing durung dipènsiunaké (pusat
                         panggilan mung bisa nyuda staf ing unit diskret;
                         penurunan volume 15% arang ngidinaké ngethok 15%
                         jumlah staf)

Ambang realisasi: penghematan mung bisa dikantongi yèn volume mudhun ing
ngisor tingkat sing bisa diwenèhi staf déning saluran lawas ing undhak
kapasitas diskret sabanjuré sing luwih cilik (contoné ilang siji shift
kebak, siji meja kebak, siji pita jumlah staf kontrak)
```

## Conto petungan

**Layanan pembaruan blue badge dewan kabupaten**: 60.000 pembaruan/taun, sadurungé 100% telpon/kertas ing £6,40 saben transaksi. Layanan digital anyar diluncuraké lan tekan panampa digital 65% ing setaun, ing £0,30 saben transaksi digital.

```
Etungan penghematan naif (kasar):
  39.000 dipindhah × (£6,40 − £0,30) = £237.900/taun

Apa sing tenan kedadéan, miturut data pusat kontak dewan:
  Volume telpon mudhun saka 60.000/taun dadi 46.000/taun (−23%, dudu −65%)
  amarga: 9.000 perjalanan digital gagal lan ngasilaké telpon tindak lanjut
           (bocor failure-demand), lan 4.000 wong sing sadurungé
           ora nganyari babar blas saiki nindakaké, amarga nemokaké gampang online
           (panjaluk bayangan — pangapikan akses sing asli, nanging dudu
           penghematan)

  Pusat kontak telpon diwenèhi staf ing pita 8.000 telpon/FTE;
  penurunan 14.000 telpon (60.000 → 46.000) ngeculaké 1,75 FTE, dibunderaké
  mudhun ing praktik dadi 1 FTE sing tenan dialihaké = £34.000/taun

Penghematan kawujud = £34.000/taun plus biaya bangun/operasi saluran
  digital sing dihindari ing 39.000 transaksi ≈ £34.000 + (39.000 × £0,30
  biaya digital sing wis kaétung) — mung sapérangan saka klaim utama £237.900,
  senajan layanan isih jelas luwih apik kanggo pangguna.
```

## Gegayutan karo rekayasa piranti lunak

Piwulang rékayasané yaiku penghematan channel shift kawujud déning kaputusan *operasional* (penjadwalan, pambubaran, renegosiasi kontrak), dudu déning piranti lunak sing dikirim — sawijining tim bisa nuhoni saben titik [digital-service-standard](../standar-layanan-digital/) lan isih ngasilaké penghematan net nol yèn ora ana sing nyèlèhaké kapasitas tetep saluran lawas. Ngukur failure demand (ing ngendi ing perjalanan digital pangguna nilar lan apa sing ditindakaké sabanjuré) iku masalah analitik funnel sing bisa dipecahaké lan hal sing paling gedhé pengungkit sing bisa ditindakaké tim rékayasa kanggo njaga kasus penghematan; iku uga sambungan langsung menyang [biaya saben transaksi](../biaya-saben-transaksi-ékonomi-unit-layanan-digital-pamaréntah/), sing sacara meneng-meneng digedhèkake déning failure demand. Deleng [realisasi manfaat](../realisasi-manfaat-mbuktèkaké-manawa-manfaat-ing-business-case-tenan-kawujud/) kanggo disiplin sing luwih amba mriksa apa penghematan business case tenan tekan, lan [inklusi digital](../inklusi-digital-mesthekake-digital-by-default-ora-dadi-digital-waé/) kanggo alesan kenapa saluran offline biasané ora bisa, lan ora kudu, dipènsiunaké sakabèhé.

## Jebakan

- **Nganggep substitusi saluran 1:1**: modhèl panampa digital minangka pangurangan langsung saka volume telpon/loket, ngabaikan panjaluk bayangan lan bocor failure-demand sing dicathet ing riset channel-shift pamaréntah lokal.
- **Nyathet penghematan kasar sadurungé pambubaran**: ngétung penghematan ing business case ing taun panampa munggah, dudu ing taun (yèn tau) kapasitas saluran lawas tenan dipotong.
- **Ora nggatèkaké sipat fungsi-undhak biaya staf**: penurunan volume 20% arang malih dadi penurunan biaya 20%, amarga pusat kontak lan loket diwenèhi staf ing pita diskret, dudu terus-terusan.
- **Nganggep panjaluk bayangan minangka sampah**: kontak anyar saka pangguna sing sadurungé dikecualiaké utawa ditakut-takuti iku kenaikan nyata ing [nilai publik](../nilai-publik/), dudu kesalahan modhèl — kudu dilaporaké minangka outcome akses, dudu dikurangi minangka gangguan.

## Sumber

- Cabinet Office, Digital Efficiency Report (2012). <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- Local Government Association, digital transformation and channel shift resources. <https://www.local.gov.uk/our-support/efficiency-and-income-generation/digital-transformation>
- Socitm, local public services digital insight research. <https://www.socitm.net/>
