# Penilaian Preferensi sing Dinyatakaké (Stated Preference Valuation): Nakokaké Wong Sepira Gelem Mbayar

Metode preferensi sing dinyatakaké ngira nilai barang non-pasar kanthi langsung takon marang wong sepiro gelem mbayar kanggo iku, utawa sepiro gelem nampa minangka kompensasi kanggo nglepasaké, biasané liwat survei kanthi struktur sing nggambaraké skenario hipotetis. Contingent valuation (penilaian kontingen) iku teknik sing paling kondhang ing kulawarga iki.

## Kenapa penting

Green Book Annex 2 (pedoman tambahan babagan menilai dampak non-pasar) nyetujoni metode preferensi sing dinyatakaké kanggo barang sing ora duwé transaksi pasar sing bisa diamati babar pisan kanggo nyimpulaké nilai — kualitas hawa, kakayoné hayati, pangayoman banjir, nilai eksistensi lanskap sing mungkin ora bakal dikunjungi wong (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>). Defra wis nerbitaké pedoman preferensi sing dinyatakaké dhéwé kanggo appraisal lingkungan amarga akèh banget nilai lingkungan (pelestarian habitat, kualitas banyu) ora duwé pasar proksi babar pisan, bédané karo, umpamané, swara bising, sing paling ora selaras karo rega omah sing bisa diamati (deleng [penilaian preferensi sing kababar](../valuasi-preferensi-sing-kasingkap/)).

Daya tarik utama preferensi sing dinyatakaké — bisa nilai apa waé, kalebu barang sing ora tau ditransaksikaké — uga dadi sumber masalah kredibilitasé. Amarga responden ora bener-bener ngetokaké dhuwit, survei contingent valuation rentan marang bias hipotetis (wong nggedhèkaké kesediaan mbayar yèn ora ana kendala anggaran nyata), efek embedding (barang sing padha dinilai béda gumantung apa liyané ing survei), lan bias titik wiwitan ing desain bidding-game. Panel NOAA 1993 babagan contingent valuation, sing dibentuk sakwisé litigasi tumpahan minyak Exxon Valdez, nyetel standar desain — format referendum biner "apa sampeyan bakal mbayar £X, ya/ora" tinimbang bidding terbuka, lan pangéling-éling wajib babagan kendala anggaran nyata responden — sing isih dadi standar rujukan kanggo survei sing bisa dibélani.

## Petungan

```
Contingent valuation (format referendum):
  Aturaké pilihan biner: "apa sampeyan bakal mbayar £X saben taun kanggo outcome Y? ya/ora"
  Variasi X kanthi acak ing antarané responden.
  Cocogaké kesediaan mbayar minangka fungsi saka tingkat respon ya/ora ing saben X.

WTP rata-rata = wilayah ing ngisor kurva permintaan sing diprakirakaké
Nilai agregat = WTP rata-rata × populasi sing kena

Varian choice experiment (pemodelan pilihan diskrit):
  Aturaké responden pilihan bola-bali antarané paket atribut
  (kalebu atribut biaya), ngira rega implisit kanggo saben atribut
  non-biaya saka trade-off sing dituduhaké responden.
```

Varian choice experiment umumé luwih disenengi ing praktik Britania Raya saiki tinimbang contingent valuation siji pitakonan, amarga meksa responden trade-off pirang-pirang atribut mungsuh biaya bola-bali ngasilaké estimasi sing luwih konsisten sacara internal lan luwih angel dimanipulasi tinimbang siji pitakonan ya/ora.

## Conto petungan

**Pamaréntah nasional**: Defra mréntahaké survei contingent valuation kanggo nilai program perbaikan kualitas banyu kali. Survei format referendum marang 2.000 kulawarga nemokaké 62% bakal mbayar £40/taun liwat tambahan tagihan banyu hipotetis, lan kurva permintaan sing diprakirakaké menehi kesediaan mbayar rata-rata £28/taun saben kulawarga.

```
WTP rata-rata = £28/kulawarga/taun
Kulawarga ing daerah aliran = 340.000
Nilai taunan agregat = £28 × 340.000 = £9,52m/taun

Sajrone periode appraisal 20 taun ing tingkat diskonto 3,5% (faktor anuitas ≈ 14,2):
PV(manfaat) ≈ £9,52m × 14,2 ≈ £135m
```

Angka agregat iki banjur dibandhingaké karo sisih biaya program ing [analisis biaya-manfaat sosial](../analisis-biaya-manfaat-sosial/). Green Book mrèntahaké bukti preferensi sing dinyatakaké kaya iki dilaporaké bebarengan karo interval kepercayaan lan metodologi survei, dudu minangka estimasi titik wuda, persis amarga angka dhasaré luwih rapuh tinimbang rega pasar.

**Lembaga amal**: trust warisan budaya nglakokaké survei marang para pengunjung lan non-pengunjung babagan kesediaan mbayar kanggo nyegah penutupan bangunan bersejarah sing ora mesthi dikunjungi klompok loro-lorone (nilai eksistensiné). Amarga non-pengunjung sing ora bakal tau ndeleng bangunan kuwi isih nglaporaké WTP positif, survei nangkep nilai eksistensi lan warisan sing bakal ora kecekel babar pisan déning itungan pendapatan biaya pengunjung sederhana (proksi preferensi sing kababar) — nuduhaké kaluwihan preferensi sing dinyatakaké sing nyata ing panggonan sing ora ana transaksi pasar apa waé kanggo mbabaraké nilai.

## Gegayutan karo rekayasa piranti lunak

Metode preferensi sing dinyatakaké jarang langsung ditrapaké ing karya rekayasa piranti lunak, nanging insinyur sing mbangun platform konsultasi warga, piranti partisipasi anggaran, utawa infrastruktur survei publik kerep mbangun instrumen sing dadi dhasar ékonomi iku. Mbenerake rincian desain survei — jumlah tawaran diacak, pambingkai referendum biner tinimbang pitakonan terbuka, pangéling-éling kendala anggaran sing gamblang — dudu kaendahan UX, iku sing ndadèkaké penilaian sing dihasilaké bisa dibélani nalika diperiksa; survei in-app sing desainé elek bisa mbatalaké pirang-pirang sasi analisis ékonomi sakbanjuré. Deleng [metrik kepuasan warga](../metrik-kepuasan-warga-ngukur-pengalaman-langsung-warga-karo-layanan-publik/) kanggo disiplin sing luwih umum babagan njupuk data pendapat publik sing bakal dienggo kanthi bobot analitis.

## Jebakan

- **Pitakonan terbuka "sepira sampeyan gelem mbayar?"** Iki luwih gampang kena bias strategis lan anchoring tinimbang pambingkai referendum biner; rekomendasi panel NOAA kanggo nganggo format referendum ana persis amarga elisitasi terbuka kinerjané elek.
- **Ora ana pangéling-éling kendala anggaran nyata responden.** Tanpa iku, WTP sing dinyatakaké rutin ngluwihi apa sing bakal dibayar wong sing padha nalika trade-off anggaran nyata ana — bias hipotetis.
- **Efek embedding dilalèkaké.** Barang sing padha dinilai dhéwé lawan dinilai minangka bagéan paket sing luwih gedhé ngasilaké estimasi WTP sing béda; laporna apa liyané, yèn ana, ing pambingkai survei.
- **Nganggep estimasi titik saka siji survei wis mapan.** Praktik Green Book ngarep-arep rentang lan diskusi bias sing wis dikenal, dudu angka wuda sing dibawa menyang tabel biaya-manfaat kaya rega pasar.

## Sumber

- HM Treasury. "The Green Book," Annex 2: valuing non-market impacts.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Defra. "Valuing environmental impacts: practical guidelines" (contingent valuation and choice
  experiment guidance). <https://www.gov.uk/government/collections/valuing-environmental-impacts>
- Arrow K, et al. "Report of the NOAA Panel on Contingent Valuation." Federal Register, 1993.
- Mitchell RC, Carson RT. "Using Surveys to Value Public Goods: The Contingent Valuation Method."
  Resources for the Future, 1989.
