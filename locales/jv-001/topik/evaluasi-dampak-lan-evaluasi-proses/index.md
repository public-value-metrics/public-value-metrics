# Evaluasi Dampak lan Evaluasi Proses

Evaluasi dampak takon apa program nyebabake outcome sing dikarepake. Evaluasi proses takon apa program bener-bener dikirim kaya sing dirancang — marang sapa, kanthi dosis pira, lan kanthi alangan utawa pendukung apa ing sadawane dalan. Iki pitakonan sing beda sing mbutuhake metode sing beda, lan Magenta Book HM Treasury nganggep nglakokake loro-lorone bareng minangka praktik standar, amarga asil dampak sing lemah utawa nol ora bisa ditafsirake piyambak: ora bisa ngandhani apa teori dhasar program salah, utawa apa teori sing apik mung ora tau bener-bener dikirim.

## Kenapa penting

Evaluasi pemerintah bola-bali nemokake ora ana efek sing bisa diukur saka sawijining program nalika ora ana evaluasi proses kanggo nerangake kenapa — ninggalake komisioner ora bisa mbedakake "gagasan iki ora jalan" (kegagalan teori) saka "gagasan iki ora tau bener-bener dicoba kanthi bener" (kegagalan implementasi). Pedoman Medical Research Council babagan evaluasi proses intervensi kompleks, diterbitake ing BMJ 2015 lan akeh dikutip bebarengan karo Magenta Book, ngresmikake fidelity, dosis, lan jangkauan minangka bab inti sing kudu diukur evaluasi proses. Nglakokake evaluasi dampak tanpa evaluasi proses nduweni risiko ninggalake desain program sing bener-bener sehat amarga dikirim marang separo populasi sing dikarepake kanthi sapérangan cilik intensitas sing dikarepake — kesalahan sing bisa dicegah wong sing mbangun sistem, amarga fidelity pangiriman persis apa sing bisa ditangkep sistem data operasional meh ing wektu nyata.

## Petungan

```
Evaluasi proses takon:
 - Apa dikirim marang populasi target, kanthi dosis/intensitas sing direncanakake?
 - Apa pangiriman cocog karo desain logic model / theory of change?
 - Alangan utawa pendukung apa sing mengaruhi pangiriman?
 Metode: pamriksan fidelity marang ambang sing wis ditetepake sadurunge, studi kasus,
         wawancara, data pangiriman administratif.

Evaluasi dampak takon:
 - Apa sing owah, lan pira saka owah-owahan kuwi bisa diatribusikake marang program?
 Metode: RCT, DiD, PSM, RDD — deleng impact-evaluation-methods — marang kontrafaktual.

Diagnosis gabungan:
 Ora ana efek     + fidelity dhuwur   → kegagalan teori: modele dhewe ora ngasilake outcome
 Ora ana efek     + fidelity endhek   → kegagalan implementasi: modele ora tau dites kanthi bener
 Efek ditemokake  + fidelity dhuwur   → replikasi kanthi yakin
 Efek ditemokake  + fidelity endhek   → selidiki luwih lanjut: efek bisa rapuh utawa spesifik lokasi
```

## Conto petungan

**Pemerintah daerah (program parenting)**: evaluasi dampak nggunakake difference-in-differences nemokake owah-owahan +2 poin persentase ing ukuran kesejahteraan bocah — ora signifikan sacara statistik. Evaluasi proses, sing dilakokake bareng, nemokake program mung tekan 210 saka 500 kluwarga target (jangkauan 42%), lan saka iku, mung 95 sing nuntasake ambang fidelity 75%+ sesi sing wis ditetepake sadurunge — 19% saka jangkauan asli sing direncanakake. Kesimpulan: asil dampak sing lemah cocog karo kegagalan implementasi, dudu bukti yen model program ora jalan; respon sing pas yaiku ndandani jalur rujukan sing nyebabake kerugian 58%, dudu ninggalake desain program.

**Amal (program literasi digital)**: evaluasi dampak nemokake efek kuwat (+18 poin persentase ing skor kapercayan digital), lan evaluasi proses paralel ngonfirmasi fidelity 92% marang kurikulum sing direncanakake ing kabeh 12 lokasi pangiriman. Gabungan, pendana bisa ngskalakake program kanthi yakin, amarga efek kasebut kabukten tetep konsisten, dudu produk saka siji lokasi sing luar biasa apik.

## Gegayutan karo rekayasa piranti lunak

Data evaluasi proses persis apa sing sistem pangiriman bisa nangkep kanthi apik: kehadiran marang rencana, dosis sesi, lan drop-off ing saben tahap corong rujukan utawa pendaftaran — corong analitik sing padha sing wis dibangun insinyur kanggo fitur produk, ditrapake ing pipeline pangiriman program sosial. Nyuplai metrik fidelity lan jangkauan marang manajer program meh ing wektu nyata, tinimbang ngenteni evaluasi pungkasan hibah, ngidini jalur rujukan sing rusak didandani ing tengah program tinimbang diwarahi mung sawise periode pendanaan rampung. Deleng [metode evaluasi dampak](../metode-evaluasi-dampak/) kanggo desain kausal sing dipasangake karo evaluasi proses, [theory of change](../teori-owah-owahan-peta-sebab-akibat-saka-tujuan-dawa-mundur-menyang-kegiatan/) lan [logic model](../model-logika-kanggo-program-layanan-publik/) kanggo desain sing dicek fidelity-ne dening evaluasi proses, lan [benefits realization](../realisasi-manfaat-mbuktèkaké-manawa-manfaat-ing-business-case-tenan-kawujud/) kanggo ngelacak pangiriman nganti outcome sing dijanjekake.

## Jebakan

- **Nglakokake evaluasi dampak piyambak.** Asil nol utawa lemah banjur ora bisa ditafsirake minangka kegagalan teori utawa kegagalan implementasi, persis pambeda sing penting kanggo mutusake apa sing ditindakake sabanjure.
- **Nganggep evaluasi proses minangka tambahan lunak.** Butuh ketegasan lan kriteria fidelity sing wis ditetepake sadurunge kaya desain dampak, utawa ambruk dadi anekdot nalika asil teka.
- **Nyampur "tepat wektu lan tepat anggaran" karo "dikirim kaya sing dirancang".** Evaluasi proses mriksa fidelity marang model — dosis, klompok target, isi — dudu status RAG manajemen proyek.
- **Ora nyathet ambang fidelity ing wiwitan.** Mutusake sawise kedadean apa sing dianggep "dosis cukup" nggawe panjelasan apa wae kanggo asil dampak sing nguciwani katon kaya alesan post-hoc.

## Sumber

- HM Treasury, Magenta Book (2020). <https://www.gov.uk/government/publications/the-magenta-book>
- Moore G, et al., "Process evaluation of complex interventions: Medical Research Council
  guidance." BMJ 2015;350:h1258. <https://www.bmj.com/content/350/bmj.h1258>
- National Audit Office, programme evaluation reports. <https://www.nao.org.uk/>
