# Penilaian Kesejahteraan (Wellbeing Valuation): Ngregani Kabijakan Langsung ing Satuan Kepuasan Urip

Penilaian kesejahteraan (wellbeing valuation) ngregani efek kabijakan langsung ing istilah kepuasan urip, nganggo WELLBY (wellbeing-adjusted life year) minangka satuané — siji WELLBY padha karo owah-owahan siji poin ing skala kepuasan urip 0–10, sing tahan sajrone setaun. Iku alternatif HM Treasury sing disahaké sacara resmi tinimbang ngowahi saben manfaat dadi moneter liwat kesediaan mbayar.

## Kenapa penting

"Wellbeing guidance for appraisal: supplementary Green Book guidance" HM Treasury (2021, <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>) sacara resmi nggawa data kesejahteraan subjektif menyang appraisal pamaréntah pusat, menehi analis dalan kanggo ngregani outcome — sambungan sosial, kesehatan mental, keamanan, partisipasi warga — sing metode [preferensi sing dinyatakaké](../penilaian-preferensi-sing-dinyatakaké-nakokaké-wong-sepira-gelem-mbayar/) lan [preferensi sing kababar](../valuasi-preferensi-sing-kasingkap/) angel ngregani kanthi meyakinaké, amarga wong kerep ora apik ngramalaké sepira barang bakal ngaruhi kepuasan urip dhéwé. Pedoman, sing dikembangaké bareng karo What Works Centre for Wellbeing, nyetel nilai moneter sing disaranaké saben WELLBY — £13.000 (rega 2021, direvisi périodik) — sing dijupuk saka hubungan sing diamati ing survei kesejahteraan gedhé (utamané Annual Population Survey ONS, sing wis takon patang pitakonan kesejahteraan ONS4 wiwit 2011) antara penghasilan lan kepuasan urip, menehi analis kurs konversi bali menyang pound nalika perbandhingan moneter mungsuh appraisal Green Book liyané dibutuhaké.

Metode iki penting amarga mbalik logika penilaian lumrah: tinimbang takon sepira wong gelem mbayar kanggo outcome (preferensi sing dinyatakaké) utawa nyimpulaké nilai saka transaksi pasar sing gegayutan (preferensi sing kababar), iku ngukur efek outcome marang kepuasan urip sing dilaporaké langsung, nglewati jurang antara apa sing diomongaké wong dikarepaké lan apa sing bener-bener ndadèkaké luwih apik. Iki uga watesan utamané — kepuasan urip laporan dhéwé kena adaptasi lan efek framing sing kudu dikontrol praktisi sing ati-ati.

## Petungan

```
WELLBY = 1 poin kepuasan urip (skala 0-10) sing tahan kanggo 1 wong sajrone 1 taun

Total WELLBY saka kabijakan =
  Σ (owah-owahan skor kepuasan urip) × (cacahé wong sing kena)
    × (durasi ing taun, didiskonto ing tingkat diskonto sosial)

Nilai moneter = Total WELLBY × nilai saben WELLBY
  (nilai sing disaranaké HM Treasury: £13.000 saben WELLBY, rega 2021,
   bisa direvisi périodik — priksa pedoman mutakhir sadurungé nganggo)
```

Iki béda saka [taun urip sing disesuaikan kesejahteraan](../taun-urip-sing-disesuaikan-kesejahteraan-ukuran-standar-kepuasan-urip-kanggo-mbandhingaké-kabijakan/) ing ékonomi kesehatan, sing biasané dijangkarake ing skala kualitas urip sing gegayutan kesehatan (EQ-5D lan sing padha) tinimbang kepuasan urip umum; keduwé gegayutan nanging ora bisa ditukar, lan appraisal Green Book kudu gamblang skala lan metode elisitasi endi sing dadi dhasar angka WELLBY sing dilaporaké.

## Conto petungan

**Otoritas lokal**: sawijining dewan nglakokaké skéma pendampingan komunitas kanggo warga tuwa sing terisolasi, nglayani 400 wong. Survei kesejahteraan sakdurungé/sakwisé nganggo pitakonan kepuasan urip ONS4 nuduhaké rata-rata skor peserta munggah saka 5,8 dadi 6,5 — untung 0,7 poin — tahan sajrone durasi pendanaan program 2 taun.

```
WELLBY sing diasilaké = 400 wong × 0,7 poin × 2 taun = 560 WELLBY
Nilai moneter = 560 × £13.000 = £7,28m
Biaya program = £450.000 sajrone 2 taun

Rasio manfaat-biaya ≈ £7,28m / £0,45m ≈ 16:1
```

Rasio sing sepira dhuwur iki kudu nuntun pamriksan tinimbang perayaan — pedoman kesejahteraan Green Book kanthi gamblang ngélingaké supaya ora nampa untung laporan dhéwé sampel cilik kanthi dhasar tanpa mriksa efek seleksi (apa mung warga sing paling sosial, sing paling bisa dadi luwih apik sing melu skéma?) lan tanpa klompok pembanding; evaluasi sing dirancang apik bakal ngurangi owah-owahan kontrafaktual sing diamati ing non-peserta, deleng [analisis kontrafaktual](../analisis-kontrafaktual-ngira-ira-apa-sing-bakal-kedadéan-tanpa-intervensi/).

**Pamaréntah nasional**: mbandhingaké rong program ketenagakerjaan nganggo WELLBY tinimbang mung penghasilan nangkep yèn nganggur nggawa biaya kesejahteraan ngluwihi penghasilan sing ilang — riset kesejahteraan Britania Raya terus-terusan nemokaké yèn nganggur nyuda kepuasan urip luwih saka sing diramalaké mung saka kerugian penghasilan, amarga efek non-moneter saka kélangan struktur, tujuan, lan kontak sosial. Program sing dievaluasi mung adhedhasar untung penghasilan bakal nyepelekaké nilainé dibandhingaké sing dievaluasi uga adhedhasar WELLBY.

## Gegayutan karo rekayasa piranti lunak

Penilaian kesejahteraan arang tekan tim rekayasa langsung, nanging mbentuk apa sing ditetepaké minangka "sukses" kanggo produk sektor sosial lan layanan publik — platform pendampingan digital, piranti triase kesehatan mental, utawa platform komunitas kanggo warga terisolasi kudu ngarep-arep dampaké pungkasané bakal diukur kanthi cara iki, tegesé analitik produk kudu njupuk *sapa* sing dijangkau lan kanggo *pira suwé*, dudu mung cacahé panggunaan. Bangun instrumentasi survei kesejahteraan (ONS4 utawa padanan sing wis divalidasi) menyang evaluasi layanan wiwit wiwitan tinimbang ditempelaké retrospektif; nambahaké baseline kesejahteraan sakwisé layanan diluncuraké ngilangi perbandhingan sakdurungé/sakwisé babar pisan. Deleng [outcome lawan output](../outcome-vs-output-bedane-asil-langsung-lan-owah-owahan-nyata/) lan [metode evaluasi dampak](../metode-evaluasi-dampak/).

## Jebakan

- **Ora ana kontrafaktual utawa klompok pembanding.** Untung kesejahteraan sakdurungé/sakwisé tanpa kontrol kanggo apa sing bakal kedadéan senajan tanpa program nggedhèkaké efek program; deleng [analisis kontrafaktual](../analisis-kontrafaktual-ngira-ira-apa-sing-bakal-kedadéan-tanpa-intervensi/) lan [additionality lan deadweight](../additionality-lan-deadweight-nyingkirake-asil-sing-bakal-kedadéan-senajan-tanpa-program/).
- **Sampel cilik lan milih dhéwé.** Survei kesejahteraan peserta program sing milih melu rentan marang bias seleksi — wong sing melu lan tetep melu mungkin wis cenderung munggah.
- **Nganggep konversi £-saben-WELLBY presisi.** Nilai moneter iku konvensi kabijakan sing dijupuk saka regresi penghasilan-kesejahteraan, dudu rega pasar; enggonen kanggo bisa dibandhingaké ing appraisal Green Book, dudu minangka klaim babagan apa "regané" kesejahteraan.
- **Ngrancukaké WELLBY karo QALY sing gegayutan kesehatan.** Loro-lorone ngukur konstruk sing béda ing skala sing béda; deleng [taun urip sing disesuaikan kesejahteraan](../taun-urip-sing-disesuaikan-kesejahteraan-ukuran-standar-kepuasan-urip-kanggo-mbandhingaké-kabijakan/) kanggo varian ékonomi kesehatan lan aja nyampur rata-rata.

## Sumber

- HM Treasury. "Wellbeing guidance for appraisal: supplementary Green Book guidance." 2021.
  <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>
- What Works Centre for Wellbeing. <https://whatworkswellbeing.org/>
- Office for National Statistics. "Personal well-being in the UK" (ONS4 measures).
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing>
- Fujiwara D, et al. "Wellbeing Valuation: A Nascent Field?" LSE / Simetrica research summaries.
