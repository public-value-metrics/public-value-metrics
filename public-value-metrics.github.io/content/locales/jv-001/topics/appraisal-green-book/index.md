# Appraisal Green Book (Model Lima Kasus)

Green Book yaiku pedoman wajib HM Treasury kanggo nilai (appraisal) lan evaluasi usulan belanja pemerintah Inggris. Piranti utamane, model lima kasus (five-case model), meksa business case njawab lima pitakonan sing kapisah — apa iki gagasan sing apik, apa ngasilake nilai, apa bisa diadakake (procured), apa bisa ditanggung, lan apa bisa dikirim — tinimbang nyuda kabeh dadi siji angka sing bisa dilewati menteri.

## Kenapa penting

Saben usulan belanja pemerintah pusat Inggris sing ngluwihi watesan delegasi departemen kudu liwat appraisal Green Book sadurunge dana dirilis, lan Green Book Review 2020 saka HM Treasury (diterbitake sawise kritik yen prosese bias marang wilayah sing luwih mlarat, deleng <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>) ngencengake syarat supaya opsi dibandhingake karo baseline "do minimum" sing asli lan supaya kesesuaian strategis dibuktekake sadurunge value for money dinilai. Model lima kasus dhewe luwih tuwa tinimbang Green Book — asale saka Office of Government Commerce minangka struktur business case standar — nanging edisi Green Book 2022 nancepake iku minangka wujud wajib kanggo business case apa wae sing njaluk persetujuan Treasury: <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>.

Gunane misahake kasus dadi lima yaiku usulan bisa gagal ing dimensi apa wae tanpa preduli liyane. Replatform IT sing sehat sacara strategis lan cost-effective isih bisa gagal ing commercial case yen mung siji supplier sing bisa ngirim (nggawe risiko single-tender), utawa gagal ing management case yen departemen ora nduwe rekam jejak ngirim program ukuran semono. Skor "value for money" tunggal nutupi persis jenis mode kegagalan iki.

## Petungan

Model lima kasus iku struktur, dudu rumus, nanging saben kasus nduwe tes kuantitatif utawa bukti dhewe:

```
1. Strategic case
   Bukti tujuan belanja sing gegandhengan karo strategi organisasi.
   Tes: apa ana alasan kanggo owah-owahan? ("ora nindakake apa-apa" tansah dadi opsi.)

2. Economic case
   Appraisal opsi marang baseline "do minimum", nggunakake
   analisis biaya-manfaat sosial utawa analisis cost-effectiveness.
   Tes: opsi endi sing ngoptimalake nilai publik bersih?
   Deleng ../social-cost-benefit-analysis/ lan ../cost-effectiveness-analysis-in-government/

3. Commercial case
   Keterlibatan pasar, jalur pengadaan, alokasi risiko antarane
   pembeli lan supplier.
   Tes: apa opsi sing disenengi bisa diadakake kanthi syarat sing bisa ditampa?

4. Financial case
   Keterjangkauan ing sajrone watesan anggaran departemen, sumber dana,
   perlakuan neraca.
   Tes: apa kita bisa nanggung, taun iki lan saben taun sabanjure?

5. Management case
   Tata kelola, rencana proyek, rencana benefits realization, register risiko.
   Tes: apa organisasi iki bener-bener bisa ngirim?
   Deleng ../benefits-realization/
```

Economic case iku panggonan appraisal kuantitatif: opsi dibandhingake adhedhasar nilai saiki bersih (net present value) sing disesuaikan [social discount rate](../tingkat-diskonto-sosial-ngowahi-biaya-lan-manfaat-mangsa-ngarep-dadi-nilai-saiki/), nggunakake cara [analisis biaya-manfaat sosial](../analisis-biaya-manfaat-sosial/), utawa, ing ngendi manfaat ora bisa dimoneterisasi kanthi jujur, liwat [analisis cost-effectiveness](../analisis-efektivitas-biaya-ing-pamaréntahan-mbandhingaké-cara-nggayuh-outcome-sing-padha/) utawa [analisis keputusan multi-kriteria](../analisis-keputusan-multikriteria/).

## Conto petungan

**Pemerintah daerah**: dewan sing nilai sistem IT perbaikan omah £12 yuta nglakokake lima kasus kaya iki. Strategic case: tumpukan perbaikan ngelanggar standar decent-homes statutori ing sajrone 18 sasi tanpa intervensi. Economic case: telung opsi dietung sajrone periode appraisal 10 taun kanthi tingkat diskonto 3,5% (miturut social time preference rate standar Green Book 2022) — "do minimum" (nambal sistem legacy, NPV −£4,1 yuta), "buy" (platform COTS, NPV +£2,3 yuta), "build" (platform khusus, NPV +£0,6 yuta sawise optimism bias 40% kanggo pangembangan piranti lunak ditrapake marang biaya modal sing ora didiskon, miturut Green Book Annex A). Buy menang ing economic case. Commercial case: ana rong supplier sing layak, tender kompetitif bisa dilakoni — lulus. Financial case: modal kasedhiya saka Public Works Loan Board, biaya pendapatan cocog karo rencana keuangan jangka menengah — lulus. Management case: dewan wis ngirim rong sistem sing sepadan ing limang taun pungkasan — lulus. Usulan diterusake nganggo "buy."

**Departemen pemerintah pusat**: usulan kanthi economic case kuwat (NPV +£40 yuta) nanging ing ngendi mung siji supplier sing nduwe akreditasi sing relevan gagal ing tes commercial case kanggo ketegangan kompetitif, meksa waiver single-tender (kanthi beban pengawasane dhewe) utawa desain ulang spesifikasi kanggo mbukak pasar — economic case piyambak ora bakal nemokake iki.

## Gegayutan karo rekayasa piranti lunak

Tim rekayasa ing sajrone pemerintah utawa organisasi sing didanai hibah biasane mung nate ndeleng economic case, amarga iku bagean sing dijaluk pimpinan produk lan rekayasa kanggo mbenerake ("apa ROI saka migrasi iki?"). Nanging business case sing lulus Treasury utawa panitia hibah butuh kabeh lima, lan insinyur asring wong sing paling pas kanggo njawab commercial case (apa iki bener-bener bisa diadakake, utawa ngunci kita ing format proprietary siji vendor?) lan management case (apa kita nduwe kapabilitas ngirim, utawa iki gumantung marang telung wong tartamtu ora lunga?). Anggep panjalukan "mung angka business case" minangka panjalukan siji saka limang bagean keputusan sing sejatine. Deleng [value for money](../value-for-money-ngukur-apa-belanja-publik-menehi-imbangan-biaya-lan-manfaat-sing-paling-apik/) kanggo kepriye output economic case biasane diringkes, lan [total cost of ownership](../total-biaya-kepemilikan-ing-it-pamaréntah/) kanggo inti kuantitatif financial case sing lumrah.

## Jebakan

- **Nulis economic case dhisik lan strategic case dicocogake.** Green Book Review 2020 nemokake mode kegagalan iki persis nyurung bias appraisal marang panggonan lan sektor sing wis dibuktekake apik, nancepake ketimpangan regional; strategic case kudu netepake tujuan sadurunge opsi dibandhingake.
- **Nganggep "do minimum" minangka "do nothing."** Baseline sing bener yaiku opsi biaya paling endhek sing isih nyukupi kewajiban legal utawa safety minimum, dudu fantasi belanja nol — mbandhingake karo nol harfiah nggelembungake nilai sing katon saka saben opsi.
- **Nglewati commercial lan management case amarga economic case kuwat.** Usulan NPV dhuwur sing ora bisa diadakake kanthi kompetitif utawa dikirim dening organisasi sponsor dudu usulan sing bisa didanai; reviewer Treasury rutin nolak amarga alasan iki sanajan economic case-e meyakinake.
- **Nerapake model lima kasus sepisan, ing wiwitan.** Green Book mbutuhake kasus ditinjau maneh ing saben gerbang persetujuan sabanjure (strategic outline case, outline business case, full business case) nalika biaya lan bukti saya mantep — kasus sing dibekukake ing tahap outline kecolongan eskalasi biaya sing bakal dicekel gerbang sing luwih mengko.

## Sumber

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury. "Green Book Review 2020: findings and response." 2020.
  <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>
- HM Treasury / Infrastructure and Projects Authority. "Guide to developing the project business
  case." <https://www.gov.uk/government/publications/project-business-case-guide>
