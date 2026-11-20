# Biaya saben Transaksi: Ékonomi Unit Layanan Digital Pamaréntah

Biaya saben transaksi (cost per transaction) iku metrik ékonomi unit utama kanggo layanan digital pamaréntah: total biaya kanggo ngirim sawijining saluran, dibagi jumlah transaksi sing rampung liwat saluran kuwi. Iku angka unggulan ing GOV.UK Performance Platform lawas, lan iku angka sing mbiayai sepuluh taun investasi "digital by default" — persis mula iku uga metrik sing paling gampang dioprèk.

## Kenapa penting

Digital Efficiency Report Cabinet Office 2012 nata pambandhingan biaya saluran kanthi istilah sing lengket: transaksi digital ditemokaké biayané kira-kira 20 kali luwih murah tinimbang telpon lan kira-kira 50 kali luwih murah tinimbang tatap muka, kanthi angka ilustratif pamaréntah lokal watara £0,15 saben transaksi web lawan £2,83 liwat telpon lan £8,62 tatap muka. Pambandhingan tunggal kuwi dadi pembenaran kanggo ngrancang ulang 25 layanan teladan sing disebut ing Government Digital Strategy, lan kanggo saben business case departemen sing nyebut penghematan channel-shift wiwit kuwi. Angka kuwi tenan migunani minangka sinyal urutan-besaran, nanging rasio gumantung sakabèhé marang apa sing dietung ing saben sisih: biaya saluran telpon sing adil kalebu staf pusat panggilan, kontrak telepon, latihan lan properti; biaya digital sing adil kalebu hosting, gaji tim produk sing terus-terusan, wektu meja dhukungan kanggo perjalanan gagal, lan saluran digital-dibantu sing dibutuhaké titik 5 [digital-service-standard](../standar-layanan-digital/). Buwangen cukup saka iku saka sisih digital lan layanan apa waé katon murah.

## Petungan

```
Biaya saben transaksi = total biaya saluran sing dialokasi / transaksi sing rampung

Total biaya saluran sing dialokasi kudu kalebu:
  + hosting lan infrastruktur
  + biaya tim produk/rékayasa/dhukungan (diamortisasi)
  + biaya desain konten lan layanan (diamortisasi)
  + biaya dhukungan digital-dibantu / aksesibilitas
  + biaya failure-demand (pangguna sing gagal ing digital lan mundur menyang telpon)
  − biaya bangun sapisan diamortisasi ing umur layanan sing dikarepaké, ora
    dibiayaké kabèh ing taun pisanan

Trik akuntansi sing umum:
  "Biaya marginal saben transaksi" (hosting waé, sawisé dibangun) dikutip
  kaya-kaya "biaya rata-rata saben transaksi" (total biaya kalebu
  tim sing terus mbangun lan ngoperasiaké). Loro-lorone bisa béda
  10x utawa luwih kanggo layanan sing duwé tim pangiriman gedhé lan aktif.
```

## Conto petungan

**Layanan pembaruan pajak kendaraan**: 4 yuta transaksi/taun.

```
Angka marginal-waé (trik):
  Hosting + pangolahan pembayaran waé = £180.000/taun
  Biaya saben transaksi = 180.000 / 4.000.000 = £0,045
  → angka utama sing dikutip ing business case

Angka kebak-biaya (sing jujur):
  Hosting + pembayaran                   £180.000
  Tim produk/rékayasa (8 FTE)            £720.000
  Meja dhukungan (transaksi gagal/ditakoni) £310.000
  Jalur telpon digital-dibantu           £140.000
  Total                                  £1.350.000
  Biaya saben transaksi = 1.350.000 / 4.000.000 = £0,3375

Angka kebak-biaya isih kira-kira 8x luwih murah tinimbang pembanding
saluran telpon £2,83 saka Digital Efficiency Report — penghematan nyata
lan bisa dipertahanaké — nanging 7,5x luwih dhuwur tinimbang angka
marginal-waé sing dikutip ing versi trabasan. Loro angka iku "bener"; mung siji sing
bisa dibandhingaké karo biaya saluran telpon sing dibandhingaké.
```

## Gegayutan karo rekayasa piranti lunak

Biaya saben transaksi iku panggonan ing ngendi kaputusan arsitektur dadi angka keuangan: layanan sing auto-scale kanthi bersih lan mbutuhaké intervensi manual sethithik nurunaké angka iki saya suwé; sing ngasilaké volume tiket dhukungan dhuwur saka kahanan kesalahan sing mbingungaké nggedhèkake iku ora preduli efisiensi hosting. Iku metrik pendamping alami kanggo titik 10 [digital-service-standard](../standar-layanan-digital/) ("tetepaké kepriyé sukses kuwi katon, lan terbitaké data kinerja") lan kanggo [standar layanan lan metrik transaksi](../standar-layanan-lan-metrik-transaksi/), sing nata set KPI sing luwih lengkap ing ngendi angka iki manggon. Iku uga langsung mlebu menyang étungan [penghematan channel shift](../penghematan-saka-pamindhahan-saluran-layanan-saka-telpon-lan-loket-menyang-layanan-digital/) lan kudu direkonsiliasi karo [total biaya kepemilikan TI pamaréntah](../total-biaya-kepemilikan-ing-it-pamaréntah/) supaya overhead platform lan layanan bareng ora kebuwang kanthi meneng-meneng.

## Jebakan

- **Biaya marginal disamar dadi biaya rata-rata**: nyebut biaya hosting waé sawisé layanan dibangun, ngilangi tim terus-terusan sing ngopèni, ngulang lan ndhukung — deleng conto kasus ing ndhuwur.
- **Ngecualiaké biaya digital-dibantu**: saluran ora patuh "digital by default," lan biaya sejatiné ora katangkep, yèn mundur menyang telpon/kertas sing dibutuhaké [inklusi digital](../inklusi-digital-mesthekake-digital-by-default-ora-dadi-digital-waé/) dihitung kapisah utawa digatèkaké.
- **Ora nggatèkaké failure demand**: transaksi sing wiwit digital lan gagal, ngasilaké telpon utawa formulir kertas waé, iku biaya saluran digital, dudu saluran sing nangkep kegagalan.
- **Mbandhingaké transaksi kerumitan beda ing antarané saluran**: telpon ora proporsional nangani kasus angel (pirang-pirang tanggungan, koreksi kesalahan, pelamar rentan); mbandhingaké biaya telpon rata-rata karo biaya digital rata-rata nggedhèkake rasio kajaba campuran transaksi dicocogaké.

## Sumber

- Cabinet Office, Digital Efficiency Report (2012). <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- GOV.UK Service Manual, service standard, point 10: define what success looks like. <https://www.gov.uk/service-manual/service-standard/point-10-define-success-publish-performance-data>
- Cabinet Office, Government Digital Strategy (2012). <https://www.gov.uk/government/publications/government-digital-strategy>
