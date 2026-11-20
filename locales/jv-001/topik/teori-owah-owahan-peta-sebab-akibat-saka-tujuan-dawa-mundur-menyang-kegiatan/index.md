# Teori Owah-owahan (Theory of Change): Peta Sebab-Akibat saka Tujuan Dawa Mundur menyang Kegiatan

Teori owah-owahan (theory of change) iku dalan sebab-akibat sing gamblang lan dipetakaké mundur saka tujuan jangka dawa menyang prasyarat lan kegiatan sing kudu ana supaya tujuan kuwi kegayuh, bebarengan karo asumsi sing nyambungaké saben tautan. Dibangun kanthi miwiti saka outcome sing dikarepaké lan takon "apa sing kudu bener sakdurungé iki, supaya iki bisa kedadéan?", bola-bali, nganti tekan kegiatan sing bener-bener bisa dikirim — sing arahé kosok baliné karo [model logika](../model-logika-kanggo-program-layanan-publik/), mula keduwé iku nglengkapi, dudu bisa gantèn-gantènan.

## Kenapa penting

Metode pemetaan mundur iki diformalisasiaké déning Center for Theory of Change lan ActKnowledge, ngembangaké karya evaluator Carol Weiss babagan nggawé asumsi program dadi gamblang supaya bisa diuji tinimbang dipercaya buta. Evaluasi hibah Britania Raya wis nyerep iki langsung: Magenta Book HM Treasury nganggep teori owah-owahan minangka titik wiwitan desain evaluasi apa waé, lan para pendana kaya National Lottery Community Fund mrèntahaké pamriksa ngarumusaké siji sadurungé gelem mbiayai usulan. Alesan iku penting kanggo insinyur piranti lunak yaiku teori owah-owahan minangka dokumen sing kudu nemtokaké apa sing perlu diukur sistemmu — yèn rantai sebab-akibat ngomong "pamakéan tunjangan gumantung marang pangaju olèh petungan sing dipersonalisasi", iku klaim sing bisa diuji sing bisa digawé produkmu kanggo mbuktèkaké, utawa mbantah.

## Petungan

Teori owah-owahan iku struktural, dudu numerik. Saben tautan kudu nggawa asumsi lan indikator sing bisa nuduhaké yèn asumsi kuwi salah:

```
Outcome jangka dawa (tujuan)
  ↑ prasyarat + asumsi + indikator
Outcome antara N
  ↑ prasyarat + asumsi + indikator
  ...
Outcome antara 1
  ↑ prasyarat + asumsi + indikator
Kegiatan / intervensi
  ↑ sumber daya sing dikomitmenaké
Input
```

Struktur iki langsung mlebu ing [metode evaluasi dampak](../metode-evaluasi-dampak/), sing ana kanggo nguji apa asumsi ing saben tautan bener-bener bener, lan ing [analisis kontrafaktual](../analisis-kontrafaktual-ngira-ira-apa-sing-bakal-kedadéan-tanpa-intervensi/), sing nguji apa outcome jangka dawa bakal kedadéan senajan tanpa program.

## Conto petungan

**Otoritas lokal (pencegahan tunawisma)**: outcome jangka dawa yaiku sewa lestari ing 12 sasi kanggo kulawarga sing resiko diusir.

- Prasyarat: kulawarga duwé rencana pelunasan tunggakan sing realistis lan kejangkau.
  Asumsi: rencana sing dirundingaké caseworker luwih lestari tinimbang sing diprentahaké pengadilan.
  Indikator: % rencana sing isih aktif ing 6 sasi.
- Prasyarat: kulawarga ngaku tunjangan sing dadi haké.
  Asumsi: kalkulator tunjangan digital nambah pengakuan sing bener dibandhingaké formulir kertas.
  Indikator: tingkat akurasi pengakuan, dibandhingaké sakdurungé/sakwisé peluncuran piranti.
- Kegiatan: triase caseworker, kalkulator tunjangan digital, rundingan tunggakan.

Ing kohort pilot 120 kulawarga, asumsi kalkulator tunjangan terbukti kanggo 102 kulawarga (85%) sing banjur ngaku kanthi bener, dibuktèkaké déning evaluasi proses sakbanjuré — menehi tim program bukti kanggo tautan tartamtu kuwi, dudu mung siji klaim ujung-nganti-ujung babagan tunawisma sing dicegah.

**Lembaga amal (pendampingan para nom)**: outcome jangka dawa yaiku suda-né pangusiran saka sekolah. Prasyarat sing dipetakaké mundur: regulasi emosi sing luwih apik → hubungan siji-lawan-siji sing dipercaya karo mentor → kontak mingguan konsisten sajrone rong semester. Teori iki nggawé gamblang yèn ora olèh prasyarat "kontak mingguan konsisten" (umpamané amarga mentor gonta-ganti) ngramalaké outcome ora bakal ngetutake, sing klaim sing bisa diuji lan dipalsukaké, dudu pangarep-arep.

## Gegayutan karo rekayasa piranti lunak

Teori owah-owahan kudu mbentuk model data produk sadurungé dasbor siji wae dibangun: ngenali tautan endi sing mbutuhaké indikator, lan instrumentasi kanggo iku khusus, tinimbang otomatis nganggo apa sing paling gampang dicathet. Iku uga nggawé disiplin ing obrolan roadmap — fitur sing ora dipetakaké menyang tautan apa waé ing rantai ora cetha pantes dibangun. Deleng [model logika](../model-logika-kanggo-program-layanan-publik/) kanggo rantai akuntabilitas madhep ngarep sing dibangun sakwisé teori disepakati, [social return on investment](../social-return-on-investment-ngukur-bali-modal-sosial-sing-wis-disesuaikan-karo-deadweight-lan-atribusi/) kanggo metode sing gumantung marang teori owah-owahan kanggo nemtokaké ruang lingkup outcome sing dinilai, lan [outcome lawan output](../outcome-vs-output-bedane-asil-langsung-lan-owah-owahan-nyata/) kanggo bédané sing dadi dhasar tautan outcome antara.

## Jebakan

- **Ngrancukaké karo model logika.** Teori owah-owahan iku kausal lan nerangaké (kenapa awaké dhéwé percaya iki bisa); model logika iku sekuensial lan deskriptif (apa sing kedadéan ing urutan apa). Gawé siji wae ninggalaké "kenapa" utawa jejak akuntabilitas sing ilang.
- **Ninggalaké asumsi implisit.** Kabèh nilai pemetaan mundur yaiku nongolaké asumsi sing bisa diuji; teori owah-owahan sing mung ndaftar kotak lan panah tanpa nyebutaké apa sing bisa ndadèkaké saben tautan salah iku mung hiasan.
- **Mbangun sepisan banjur disimpen.** Teori owah-owahan sing ditulis kanggo penawaran pendanaan lan ora tau ditinjau maneh ora migunani manèh nalika bukti miwiti mbantah sawijining tautan.
- **Ngliwati masukan pemangku kepentingan.** Teori owah-owahan sing dibangun kabèh déning komisioner tanpa masukan saka staf garis ngarep utawa penerima manfaat cenderung nyandhi asumsi sing ora ana sing ngirim layanan kuwi percaya.

## Sumber

- Center for Theory of Change. <https://www.theoryofchange.org/>
- ActKnowledge. <https://www.actknowledge.org/>
- HM Treasury, Magenta Book (2020), Chapter 3. <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, theory of change guidance. <https://www.tnlcommunityfund.org.uk/>
