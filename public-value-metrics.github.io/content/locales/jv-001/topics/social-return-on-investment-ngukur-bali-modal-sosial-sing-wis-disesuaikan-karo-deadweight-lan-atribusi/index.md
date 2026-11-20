# Social Return on Investment (SROI): Ngukur Bali Modal Sosial Sing Wis Disesuaikan Karo Deadweight lan Atribusi

Social return on investment (bali modal sosial) iku kerangka kanggo ngukur, nggawé nilai moneter, lan nyathet konsep nilai sing jembar — sosial, lingkungan, lan ékonomi — lan nyatakaké iku minangka rasio mungsuh sumber daya sing diinvestasiaké, contoné "£1,44 nilai sosial kanggo saben £1 sing diinvestasiaké". Kerangka iki dirancang kanggo nambahaké logika akuntansi keuangan menyang outcome sing ora dirègani pasar, tanpa kélangan disiplin akuntansi: saben angka ing SROI kudu bisa dilacak menyang outcome sing ditetepaké para pemangku kepentingan, basis bukti, lan panyesuaian gamblang kanggo apa sing bakal kedadéan senajan tanpa program.

## Kenapa penting

SROI dikelola déning Social Value UK lan Social Value International, lembaga panerus SROI Network, sing "A Guide to Social Return on Investment" (2012) isih dadi metodologi rujukan. Kerangka iki ngadeg ing pitu prinsip — libataké pemangku kepentingan, mangertèni apa sing owah, nilai sing penting, mung lebokna sing material, aja ngegedhèkaké klaim, transparan, lan verifikasi asil — lan prinsip kaping lima, "aja ngegedhèkaké klaim", sing paling akèh dilanggar laporan SROI ing lapangan. Rasio sing digawé kanthi ngliwati panyesuaian deadweight lan atribusi dudu SROI; iku angka pemasaran sing nganggo klambi SROI. Insinyur piranti lunak sing mbangun piranti laporan kanggo lembaga amal, usaha sosial, utawa komisioner kudu ngerti bédané, amarga piranti kuwi bakal ngetrapaké disiplin utawa nggampangaké ngliwati.

## Petungan

SROI gumantung marang [teori owah-owahan](../teori-owah-owahan-peta-sebab-akibat-saka-tujuan-dawa-mundur-menyang-kegiatan/) kanggo nemtokaké outcome endi sing mlebu ruang lingkup, lan nyatakaké iku nganggo rantai akuntabilitas sing padha karo [model logika](../model-logika-kanggo-program-layanan-publik/):

```
Rasio SROI = Nilai saiki outcome / Nilai input

Proses:
 1. Netepaké ruang lingkup lan ngenali pemangku kepentingan sing outcome-é bakal diukur
 2. Mapaké outcome (teori owah-owahan, dibuktèkaké karo pemangku kepentingan, dudu diasumsiaké)
 3. Nyedhiyakaké bukti outcome lan maringi nilai nganggo proksi keuangan
 4. Netepaké dampak: nilai kasar − deadweight − atribusi − displacement, banjur ngetrapaké drop-off
 5. Ngétung SROI: nilai saiki net dampak ÷ nilai input
 6. Nglaporaké, nggunakaké, lan nanemaké — rasio iku piranti komunikasi, dudu titik pungkasan
```

Deadweight, atribusi, lan displacement dibahas ing [additionality lan deadweight](../additionality-lan-deadweight-nyingkirake-asil-sing-bakal-kedadéan-senajan-tanpa-program/) lan [pamindhahan lan atribusi](../pamindhahan-lan-atribusi/); katelu-telune ana kanggo misahaké dampak [kontrafaktual](../analisis-kontrafaktual-ngira-ira-apa-sing-bakal-kedadéan-tanpa-intervensi/) sejati saka outcome kasar.

## Conto petungan

**Program ketenagakerjaan otoritas lokal**: biaya input taunan £250.000. Sewidak peserta pindhah menyang pagawéan sing lestari; proksi keuangan kanggo outcome kuwi (tambah kesejahteraan, kurang gumantung marang tunjangan, lan pendapatan pajak digabung) yaiku £8.500 saben wong kanggo taun kapisan — deleng [basis data biaya satuan](../basis-data-biaya-satuan-proksi-keuangan-sing-wis-diteliti-kanggo-outcome-sosial/) kanggo sumber proksi kaya ngono.

- Nilai outcome kasar: 60 × £8.500 = £510.000
- Dikurangi deadweight (40% kemungkinan bakal nemu pagawéan tanpa program): £510.000 × 0,60 = £306.000
- Dikurangi atribusi (30% owah-owahan sing isih ana amarga dhukungan lembaga liya): £306.000 × 0,70 = £214.200
- Outcome taun 2 kanthi drop-off 30%: £214.200 × 0,70 = £149.940, didiskonto 3,5%/taun (deleng [tingkat diskonto sosial](../tingkat-diskonto-sosial-ngowahi-biaya-lan-manfaat-mangsa-ngarep-dadi-nilai-saiki/)): £149.940 ÷ 1,035 = £144.870
- Total nilai saiki dampak: £214.200 + £144.870 = £359.070
- **Rasio SROI: £359.070 ÷ £250.000 = 1,44**, dilaporaké minangka "£1,44 nilai sosial kanggo saben £1 sing diinvestasiaké"

**Lembaga amal**: layanan pendampingan £60.000 nyuda kesepian kanggo 80 wong tuwa, dinilai nganggo proksi £1.100/wong/taun. Nilai kasar £88.000; sakwisé deadweight 35% lan atribusi 15%, dampak net yaiku £88.000 × 0,65 × 0,85 = £48.620, rasio SROI 0,81 — ing ngisor titik impas, sing minangka temuan sing sah lan migunani, dudu kegagalan sing ora pantes ditulis.

## Gegayutan karo rekayasa piranti lunak

Kalkulator SROI sing ngidini pangguna ngetik cacahé outcome lan nilai proksi nanging ora duwé kolom wajib kanggo deadweight, atribusi, utawa teori owah-owahan sing disambungaké bakal ngasilaké rasio sing digedhèkaké kanthi standar, amarga ngliwati panyesuaian iku dalan sing paling gampang. Tanemaké disiplin ing skéma: saben baris outcome kudu ngrujuk klompok pemangku kepentingan, kuantitas sing dibuktèkaké, proksi keuangan karo sumberé, lan kolom deadweight/atribusi sing ora opsional. Deleng [outcome lawan output](../outcome-vs-output-bedane-asil-langsung-lan-owah-owahan-nyata/) kanggo bédané sing dadi dhasar pemetaan outcome SROI, lan [model logika](../model-logika-kanggo-program-layanan-publik/) kanggo rantai sing kudu dicerminaké piranti ing model datané.

## Jebakan

- **Ngliwati deadweight lan atribusi.** Rasio utama tanpa panyesuaian iki iku angka kasar, dudu angka dampak net, lan prinsip Social Value UK kanthi gamblang mrèntahaké loro-lorone.
- **Mbandhingaké rasio antar organisasi.** Rasio SROI gumantung marang ruang lingkup lan pilihan proksi sing digawé kasus-per-kasus; nganggep rasio 4:1 saka siji laporan "luwih apik" tinimbang 2:1 saka laporan liyané ngabaikaké yèn asumsiné ora distandarisasi kaya rasio akuntansi keuangan.
- **Ngétung kaping pindho proksi sing tumpang tindih.** Numpuk proksi "kesepian suda" karo proksi "kesejahteraan mental apik" kanggo para penerima manfaat sing padha bisa ngregani sepisan owah-owahan dhasar kaping pindho.
- **Ngliwati kelibatan pemangku kepentingan.** Prinsip pisanan mrèntahaké outcome ditetepaké karo wong sing ngalami, dudu diasumsiaké déning analis sing mbangun model.

## Sumber

- Social Value UK / Social Value International. <https://socialvalueuk.org/>
- The SROI Network, "A Guide to Social Return on Investment" (2012).
- Social Value International, "The Principles of Social Value." <https://www.socialvalueint.org/principles>
