# Produktivitas Layanan Publik (Public Service Productivity)

Produktivitas layanan publik ngukur sepira efisien belanja publik ngowahi input (staf, modal, barang lan layanan) dadi output sing wis disesuaikan kualitase, kanggo layanan (kesehatan, pendidikan, kepolisian, perawatan sosial) sing ora duwe rega pasar lan mula ora ana angka pendapatan kanggo mbagi biaya. Office for National Statistics Inggris wis nerbitake seri iki wiwit pertengahan 2000-an lan tetep dadi upaya nasional paling maju sacara metodologis kanggo njawab "apa pamarentah saya apik utawa saya awon anggone ngowahi dhuwit dadi layanan publik?"

## Kenapa penting

Ing pasar, produktivitas yaiku (nilai output) / (biaya input), lan nilai output bisa diamati amarga ana sing mbayar. Penggantian pinggul, kursi sekolah, lan patroli polisi ora duwe rega dol, mula kanthi naif sampeyan mung bisa ngukur *input* (apa sing dibelanjakake), sing nggodha para komentator nganggep belanja publik sing mundhak otomatis ala, amarga input luwih akeh kanthi aktivitas judhul sing flat katon kaya produktivitas sing mudhun. Metodologi ONS, sing diwutuhake ing publikasi "Sources and Methods" kanggo produktivitas layanan publik, ngatasi iki kanthi nggawe indeks *output* saka volume aktivitas (operasi sing ditindakake, murid sing diwulang, kejahatan sing diselidiki) lan banjur *nyesuaikake kualitas* indeks output kasebut: kanggo kesehatan, nglebokake tingkat kaslametan lan wektu tunggu; kanggo pendidikan, nglebokake pencapaian; kanggo kepolisian, nglebokake outcome kaya penyelesaian kasus, supaya layanan sing nindakake jumlah operasi padha nanging nggayuh tingkat kaslametan luwih apik kacathet minangka luwih produktif, dudu mung luwih larang. Temuan judhul sing bola-bali ing rilis ONS iku sing nggegirisi kanggo sektor: produktivitas layanan publik Inggris mudhun tajem nalika pandemi COVID-19 lan nganti rilis pertengahan 2020-an ONS dhewe isih durung pulih menyang tingkat 2019 ing sawetara sub-sektor kalebu perawatan kesehatan, sanajan belanja mundhak, jurang sing ngowahi "pendanaan luwih akeh" lan "produktivitas luwih akeh" dadi rong pitakonan sing babar blas kapisah.

## Petungan

```
Indeks output (volume) = Σ (aktivitas_i × bobot biaya unit relatif_i), dibobot taun dhasar
                          ing kabeh aktivitas layanan (contone operasi pinggul, operasi katarak,
                          konsultasi GP), analog karo indeks volume Laspeyres/Paasche

Penyesuaian kualitas   = indeks output × faktor penyesuaian kualitas
                          (contone nglebokake owah-owahan tingkat kaslametan, wektu tunggu,
                          pencapaian, utawa residivisme minangka pangali ing volume mentah)

Indeks input           = Σ (jam kerja × bobot biaya tenaga kerja) + (biaya barang/layanan,
                          dideflasi) + (konsumsi modal)

Pertumbuhan produktivitas faktor total = % owah indeks output sing disesuaikan kualitas
                                          − % owah indeks input
```

## Conto petungan

**Petungan produktivitas sektor akut NHS ilustratif** (struktur ngetutake metodologi ONS):

```
Taun 1: indeks volume output = 100,0 (taun dhasar), indeks input = 100,0
        → indeks produktivitas = 100,0

Taun 2: volume aktivitas munggah 3,0% (luwih akeh operasi, luwih akeh janji temu)
        nanging rata-rata wektu tunggu saya awon, nrapake diskon penyesuaian
        kualitas −1,0%
        Indeks output sing disesuaikan kualitas = 100 × 1,030 × 0,990 = 101,97

        Input munggah: jumlah staf +4,0%, biaya liyane (dideflasi) +1,5%,
        indeks input sing dibobot = 100 × 1,032 = 103,2

Pertumbuhan produktivitas = (101,97 / 100 − 1) − (103,2 / 100 − 1)
                           = 1,97% − 3,2% = −1,23 poin persentase

Interpretasi: aktivitas munggah, nanging input munggah luwih cepet lan kualitas
mudhun sithik, mula produktivitas, output saben unit input, mudhun sanajan
"luwih akeh perawatan sing diwenehake."
```

Iki pola persis sing bola-bali dilaporake rilis ONS kanggo bagean NHS sawise pandemi: belanja mundhak lan aktivitas mentah mundhak urip bebarengan karo produktivitas sing diukur mudhun sawise penyesuaian kualitas lan pertumbuhan input loro-lorone diitung.

## Gegayutan karo rekayasa piranti lunak

Produktivitas layanan publik iku analog tingkat populasi saka debat produktivitas rekayasa (story point sing dikirim versus [metrik DORA](../metrik-dora-kanggo-nilai-publik/) versus [metrik flow](../metrik-aliran-ing-pangiriman-pemerintah/)): throughput mentah tanpa penyesuaian kualitas persis nyasarake ing rumah sakit kaya "baris kode sing dikirim" ing tim piranti lunak. Tim sing mbangun pipeline data kinerja kanggo departemen kudu nganggep penyesuaian kualitas minangka tahap transformasi kelas siji lan diversi, dudu cathetan sikil; amarga kredibilitas ONS dhewe gumantung marang penyesuaian kasebut transparan, bisa direproduksi, lan direvisi nalika data kualitas sing luwih apik teka (ONS ngrevisi prakiraan produktivitas taun-taun kepungkur nalika data kualitas dhasar, contone tingkat kaslametan, dirampungake, mula sistem hilir apa wae sing nggunakake statistik kasebut kudu nangani revisi mundur, dudu mung nambah periode anyar). Iki uga langsung nyilang karo [total biaya kepemilikan](../total-biaya-kepemilikan-ing-it-pamaréntah/) lan [produktivitas AI ing sektor publik](../produktivitas-ai-ing-sektor-publik-bukti-tenan-bab-asisten-koding-ai-ing-pamaréntahan/): sistem sing nambah volume aktivitas mentah tanpa nambah utawa njaga kualitas dudu, miturut definisi ONS dhewe, peningkatan produktivitas.

## Jebakan

- **Nganggep pertumbuhan input minangka pertumbuhan produktivitas.** Belanja luwih akeh sing mbiayai staf luwih akeh ngasilake luwih akeh *aktivitas*, dudu luwih akeh *produktivitas*, kajaba output saben unit input uga munggah; loro-lorone rutin dicampur ing komentar politik.
- **Ora nggatekake penyesuaian kualitas babar blas.** Indeks output sing dibangun mung saka cacahan aktivitas mentah bakal nuduhake "keuntungan produktivitas" saka nindakake luwih akeh sing nilai utawa kualitase luwih endhek; penyesuaian kualitas ONS ana khusus kanggo nangkep iki.
- **Mbandhingake indeks produktivitas ing sub-sektor tanpa nyocokake vintage metodologi.** Produktivitas kesehatan, pendidikan, lan kepolisian saben dibangun saka sumber data aktivitas lan kualitas sing beda ing siklus revisi sing beda; pambandhingan lintas sektor sing naif mbandhingake instrumen sing ora cocog.
- **Maca penurunan produktivitas siji taun minangka tren permanen.** Angka produktivitas jaman pandemi lan pasca-pandemi nuduhake volatilitas taun-ke-taun sing signifikan amarga data kualitas (contone daftar tunggu, pemulihan elektif) dhewe owah; ONS terus-terusan ngelingake supaya ora nafsirake owah-owahan siji taun kanthi berlebihan.

## Sumber

- Office for National Statistics, "Public Service Productivity" series.
  <https://www.ons.gov.uk/economy/economicoutputandproductivity/publicservicesproductivity>
- Office for National Statistics, "Public Service Productivity: Total, UK — Sources and Methods."
  <https://www.ons.gov.uk/economy/economicoutputandproductivity/publicservicesproductivity>
