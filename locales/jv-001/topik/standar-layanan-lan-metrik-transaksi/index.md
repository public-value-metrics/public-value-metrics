# Standar Layanan lan Metrik Transaksi (Service Standards and Transaction Metrics)

GOV.UK Service Standard yaiku daftar centhang 14 poin pamarentah Inggris kanggo mbangun lan nglakokake layanan digital publik, lan dipasangake karo set cilik metrik transaksi kuantitatif sing wajib (biaya saben transaksi, tingkat rampung, adopsi digital, lan kepuasan pangguna) sing kudu diterbitake tim kanggo saben layanan pamarentah pusat sing urip. Bebarengan, standar lan metrik iku spesialisasi operasional saben dinane saka kerangka nilai publik lan KPI sing luwih jembar ing repositori iki, sing kanthi langsung diarahake marang tim pangiriman piranti lunak.

## Kenapa penting

Service Standard, sing dijaga ing service manual GOV.UK, mbutuhake saben penilaian titik-wektu (alpha, beta, live) layanan digital pamarentah kanggo nuduhake, ing antarane 14 poine, yen tim ngerti kabutuhan pangguna, makarya ing tim multidisiplin, iterasi lan nambah apik kanthi kerep, lan *ngevaluasi piranti, sistem, lan cara kerja*. Sacara historis iki ana bebarengan karo Performance Platform publik ing ngendi saben layanan urip nerbitake data transaksine kanthi terbuka; platform kasebut wis dipensiunake, nanging kewajiban dhasar kanggo ngukur lan nerbitake papat metrik inti iki tetep liwat pedoman "measuring success" service manual. Alasan iki beda saka dasbor KPI piranti lunak generik yaiku metrik iki dirancang kanthi eksplisit minangka siji model ekonomi sing disambungake, dudu papat skor mandiri: kabeh kasus penghematan kanggo pamarentah digital (Digital Efficiency Report Government Digital Service nemokake transaksi digital kira-kira 20 kaping luwih murah tinimbang liwat telpon lan kira-kira 50 kaping luwih murah tinimbang tatap muka kanggo layanan pamarentah daerah sing padha) mung bakal kewujud yen tingkat rampung tetep dhuwur lan adopsi digital bener-bener munggah, dudu mung nambah saluran murah bebarengan karo saluran larang sing ora owah.

## Petungan

```
Biaya saben transaksi = total biaya operasional layanan / jumlah transaksi sing rampung
Tingkat rampung       = transaksi rampung / transaksi diwiwiti × 100
Adopsi digital        = transaksi saluran digital / transaksi kabeh saluran × 100
Kepuasan pangguna     = % puas + banget puas, survei 5-poin ing layanan

Penghematan pamindhahan saluran = volume transaksi × owah adopsi × (biaya saben transaksi
                                   ing saluran lawas − biaya saben transaksi kanthi digital)

Biaya failure-demand = (1 − tingkat rampung) × transaksi sing dicoba kanthi digital ×
                        biaya saluran cadangan sing banjur digunakake pangguna kuwi
```

## Conto petungan

**Layanan pembaharuan lisensi pamarentah pusat ilustratif**, 2 yuta transaksi/taun, saiki 65% telpon (£3,00/transaksi) lan 35% digital (£0,30/transaksi), tingkat rampung 80%. Desain ulang marang Service Standard 14-poin nambah adopsi digital dadi 60% lan rampung dadi 92%:

```
Penghematan owah adopsi = 2.000.000 × 0,25 × (3,00 − 0,30) = £1.350.000/taun

Biaya failure-demand, sadurunge:
  2.000.000 × 0,35 × (1 − 0,80) × £3,00 = £420.000/taun (sing mandheg bali menyang telpon)

Biaya failure-demand, sawise:
  2.000.000 × 0,60 × (1 − 0,92) × £3,00 = £288.000/taun

Penghematan failure-demand bersih = £420.000 − £288.000 = £132.000/taun

Total penghematan taunan ≈ £1.350.000 + £132.000 = £1.482.000/taun
```

Petungan iki njlentrehake kenapa tingkat rampung dudu metrik sekunder: tanpa peningkatan saka 80% dadi 92%, penghematan owah adopsi bakal sebagian dijupuk maneh dening failure demand sing ngarahake pangguna digital sing frustrasi langsung bali menyang saluran telpon sing larang.

## Gegayutan karo rekayasa piranti lunak

Papat metrik iki minangka conto kerja dasbor cost-consequence: siji metrik biaya sing dijaga kapisah saka telung metrik outcome/kualitas, kanthi sengaja ora tau diringkes dadi siji skor, disiplin sing padha sing didukung ing [KPI sektor publik](../kpi-sektor-publik/). Kanggo insinyur, iki pecah dadi pagaweyan konkret sing bisa diduweni: tingkat rampung iku masalah instrumentasi funnel, lan saben titik mandheg ing perjalanan, ing prinsip, bisa dilokasi lan didandani; biaya saben transaksi mbutuhake akuntansi biaya unit asli kalebu biaya bantuan staf lan saluran kertas, dudu mung belanja hosting cloud (deleng [biaya saben transaksi](../biaya-saben-transaksi-ékonomi-unit-layanan-digital-pamaréntah/) lan [total biaya kepemilikan ing TI pamarentah](../total-biaya-kepemilikan-ing-it-pamaréntah/)); lan adopsi digital iku metrik ekuitas sing nganggo kostum efisiensi: warga sing ora bisa utawa ora gelem pindhah saluran sacara ora proporsional luwih tuwa, disabilitas, utawa kegencet digital, mula penutupan saluran sing agresif ngowahi "penghematan" dadi cilaka akses (deleng [inklusi digital](../inklusi-digital-mesthekake-digital-by-default-ora-dadi-digital-waé/) lan [penghematan pamindhahan saluran](../penghematan-saka-pamindhahan-saluran-layanan-saka-telpon-lan-loket-menyang-layanan-digital/)). Standar 14-poin dhewe iku spesifikasi proses ing mburine angka-angka iki; deleng [standar layanan digital](../standar-layanan-digital/) kanggo standar kanthi lengkap, lan [metrik kepuasan warga](../metrik-kepuasan-warga-ngukur-pengalaman-langsung-warga-karo-layanan-publik/) kanggo carane angka kepuasan ing kene gegandhengan karo pangukuran kapercayan sing luwih jembar.

## Jebakan

- **Adopsi sing dientuk kanthi nutup saluran alternatif.** Nutup saluran telpon munggahake persentase adopsi digital sacara aritmetika nalika mbuwang failure demand menyang saluran apa wae sing isih ana (asring rute digital-dibantu utawa tatap muka sing luwih larang); tansah ukur biaya sistem total, dudu mung rasio.
- **Ngukur tingkat rampung saka langkah kaping loro funnel.** Miwiti cacahan "diwiwiti" sawise titik mandheg asli pisanan ngalembana tingkat rampung lan ndhelikake kerugian paling gedhe sing bisa didandani.
- **Biaya saben transaksi sing ora kalebu dhukungan digital-dibantu.** Biaya unit mung-digital sing ora nggatekake wektu staf kanggo mbantu pangguna sing ora bisa layanan dhewe ngremehake biaya nyata saluran.
- **Nerbitake metrik tanpa definisi bareng ing antarane layanan.** "Transaksi" lan "rampung" tegese beda ing tim layanan beda kajaba definisi distandarisasi lan diversi, sing nggawe pambandhingan lintas layanan ora bisa dipercaya.

## Sumber

- GOV.UK Service Manual, "The Service Standard." <https://www.gov.uk/service-manual/service-standard>
- GOV.UK Service Manual, "Measuring Success — Data You Must Publish."
  <https://www.gov.uk/service-manual/measuring-success/data-you-must-publish>
- GOV.UK, "Digital Efficiency Report."
  <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
