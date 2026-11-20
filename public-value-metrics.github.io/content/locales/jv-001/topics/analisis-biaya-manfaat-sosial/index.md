# Analisis Biaya-Manfaat Sosial (Social Cost-Benefit Analysis, SCBA)

Analisis biaya-manfaat sosial ngowahi saben biaya lan manfaat saka sawijining kabijakan utawa program — sing ana pasaré lan sing ora — dadi siji satuan moneter sing padha, ndiskonto aliran ing mangsa ngarep dadi nilai saiki, lan ngitung selisihé dadi siji angka: apa usulan iki ndadèkaké masyarakat luwih apik kahanané, lan sepiro?

## Kenapa penting

SCBA iku metode kuantitatif standar ing kasus ékonomi [appraisal Green Book](../appraisal-green-book/): pedoman HM Treasury mrèntahaké usulan nuduhaké nilai sosial saiki net (net present social value, NPSV) positif saben-saben manfaat bisa dimonetisasi kanthi bisa dipercaya, nganggo kesediaan mbayar (willingness-to-pay) minangka prinsip penilaian dhasar kanggo barang non-pasar (<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>, Chapter 5). Disiplin sing ditegakaké yaiku yèn analisis biaya-manfaat "sosial" ora padha karo appraisal investasi sektor swasta: kudu nyakup biaya lan manfaat sing tiba marang pihak katelu sing ora melu transaksi (eksternalitas), kudu nganggo [tingkat diskonto sosial](../tingkat-diskonto-sosial-ngowahi-biaya-lan-manfaat-mangsa-ngarep-dadi-nilai-saiki/) dudu biaya modal komersial, lan kudu nerapaké [pembobotan distribusional](../pembobotan-distribusional/) nalika sapoundhi luwih bobot kanggo kulawarga miskin tinimbang sing luwih sugih.

SCBA ambruk persis ing panggonan sing dikira para kritikusé: barang tanpa padanan pasar — hawa resik, kohési sosial, nilai nyawa sing disilihaké — kudu dimonetisasi nganggo metode [preferensi sing dinyatakaké](../penilaian-preferensi-sing-dinyatakaké-nakokaké-wong-sepira-gelem-mbayar/) utawa [preferensi sing kababar](../valuasi-preferensi-sing-kasingkap/), utawa kudu disusun [rega bayangan](../shadow-pricing-ngregani-barang-sing-ora-duwé-rega-pasar/). Nalika monetisasi dadi bahan pasulayan, dudu mung angel, Green Book dhéwé nyaranaké bali menyang [analisis efektivitas biaya](../analisis-efektivitas-biaya-ing-pamaréntahan-mbandhingaké-cara-nggayuh-outcome-sing-padha/) utawa [analisis keputusan multikriteria](../analisis-keputusan-multikriteria/) tinimbang meksa angka sing ora ana sing percaya.

## Petungan

```
NPSV = Σ [t=0 nganti T] (Manfaat_t − Biaya_t) / (1 + r)^t

ing ngendi:
  Manfaat_t = kabèh manfaat sing dimonetisasi ing taun t, kalebu barang
              non-pasar sing dinilai liwat preferensi stated/revealed utawa rega bayangan
  Biaya_t   = kabèh biaya sing dimonetisasi ing taun t, kalebu biaya kesempatan
              sumber daya (deleng ../opportunity-cost-in-public-spending/)
  r         = tingkat diskonto sosial (HM Treasury netepaké 3,5% mudhun
              menyang tingkat sing luwih endhek sakwisé taun 30, miturut Green Book Annex A)
  T         = periode appraisal

Rasio manfaat-biaya (BCR) = Σ PV(Manfaat) / Σ PV(Biaya)
```

BCR ing ndhuwur 1 (utawa NPSV ing ndhuwur nol) nuduhaké nilai sosial net. Kategori value-for-money Green Book (kaya sing dienggo ing appraisal transportasi lan infrastruktur) menehi label rentang BCR: ing ngisor 1,0 yaiku value for money kurang apik, 1,0–1,5 endhek, 1,5–2,0 sedheng, 2,0–4,0 dhuwur, lan ing ndhuwur 4,0 dhuwur banget. Analisis sensitivitas — ngulang NPSV ing asumsi pesimistis lan optimistis — wajib, dudu pilihan, amarga manfaat non-pasar sing dimonetisasi nggawa rentang ketidakpastian sing jembar.

## Conto petungan

**Otoritas lokal**: sawijining dewan nglakokaké appraisal investasi £3m kanggo jaringan sepéda lan mlaku anyar sajrone periode appraisal 20 taun ing tingkat diskonto 3,5%.

```
Biaya: £3m modal ing taun 0, £50.000/taun pangopènan (taun 1-20)
PV(pangopènan) ≈ £50.000 × 14,2 (faktor anuitas 20 taun ing 3,5%) ≈ £710.000
Total PV(biaya) ≈ £3,71m

Manfaat (kabèh dimonetisasi nganggo alat penilaian DfT/WHO sing diterbitaké):
  Manfaat kesehatan saka tambah aktivitas fisik: £180.000/taun
  Suda-ne absenteisme: £40.000/taun
  Dekongèstion (kurang lelampahan mobil): £60.000/taun
  Total aliran manfaat: £280.000/taun
PV(manfaat) ≈ £280.000 × 14,2 ≈ £3,98m

NPSV = £3,98m − £3,71m = +£0,27m
BCR = 3,98 / 3,71 = 1,07 → value for money "endhek"
```

Skéma kuwi nglewati ambang nanging mung tipis; ngulang petungan karo estimasi manfaat kesehatan 20% luwih endhek (nggambaraké ketidakpastian nyata ing penilaian aktivitas fisik) nggawé BCR mudhun ing ngisor 1,0, lan iku persis alesané Green Book mrèntahaké tabel sensitivitas diterbitaké bebarengan karo angka utama, dudu mung estimasi tengah.

**Lembaga amal**: program pencegahan kematian bayi sing biayané £500.000/taun dievaluasi nganggo nilai nyawa statistik (value of a statistical life, VSL) — rega bayangan, dudu rega pasar sing diamati — kira-kira £2,1m (angka sing dianyari HM Treasury ing 2023, sing dhéwé dijupuk saka studi preferensi sing dinyatakaké). Nyegah siji kematian bayi saben taun mungsuh biaya £500.000 ngasilaké BCR 4,2, jelas value for money "dhuwur banget" — nanging kabèh asil gumantung marang angka VSL, mula SCBA apa waé sing nganggo VSL kudu nyatakaké kuwi minangka asumsi, dudu fakta.

## Gegayutan karo rekayasa piranti lunak

SCBA iku kerangka alami kanggo kaputusan investasi platform lan infrastruktur ing piranti lunak pamaréntah — mbandhingaké platform identitas bersama karo solusi departemén dhéwé-dhéwé, contoné, mbutuhaké monetisasi manfaat kaya suda-ne biaya onboarding rangkep, suda-ne penipuan, lan wektu-menyang-layanan sing luwih cepet, sing ora duwé rega pasar dhéwé. Para insinyur sing mbangun layanan dhasar kudu ngarep-arep para pimpinan program bakal njaluk input kanggo analisis iki: biaya satuan transaksi (deleng [biaya saben transaksi](../biaya-saben-transaksi-ékonomi-unit-layanan-digital-pamaréntah/)), volume sing diprakirakaké, lan biaya degradasi/downtime. Disiplin sing paling penting dijupuk: diskonto manfaat ing mangsa ngarep, sebutaké baseline kontrafaktual kanthi gamblang (deleng [analisis kontrafaktual](../analisis-kontrafaktual-ngira-ira-apa-sing-bakal-kedadéan-tanpa-intervensi/)), lan aja nampilaké estimasi titik tunggal tanpa rentang sensitivitasé.

## Jebakan

- **Ngétung manfaat kaping pindho.** Ngétung "wektu sing diirit" lan "produktivitas sing dipikolèhi saka wektu kuwi" minangka baris manfaat sing kapisah nggedhèkaké kasus; wektu sing diirit yaiku manfaaté, panggunaan salanjuté dudu manfaat tambahan kajaba ana bukti mandiri.
- **Ngliwati biaya sing dipindhah.** Skéma sing mindhahaké kemacetan saka dalan siji menyang dalan liyané, utawa mindhahaké penipuan saka saluran siji menyang saluran liyané, durung nggawé manfaat net sing disirataké NPSV utamané — deleng [pamindhahan lan atribusi](../pamindhahan-lan-atribusi/).
- **Nganggo tingkat diskonto swasta.** Nerapaké biaya modal komersial (contoné 8–10%) tinimbang tingkat diskonto sosial sacara sistematis nyepelekaké manfaat publik horizon dawa kaya asil kesehatan lan lingkungan — deleng [tingkat diskonto sosial](../tingkat-diskonto-sosial-ngowahi-biaya-lan-manfaat-mangsa-ngarep-dadi-nilai-saiki/).
- **Nimbang monetisasi sing ora dipasulayaké lan nglirwakaké sing dipasulayaké.** Yèn rong pertiga manfaat usulan iku penghematan efisiensi sing dimonetisasi kanthi yakin lan sapratelon iku keuntungan kesejahteraan sing dimonetisasi kanthi goyah, NPSV utama meneng-meneng nyampur angka teguh karo angka lemes; laporna kanthi kapisah.

## Sumber

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Chapter 5.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury. "Green Book supplementary guidance: value of a statistical life." 2023.
  <https://www.gov.uk/government/publications/green-book-supplementary-guidance-value-of-a-statistical-life>
- Department for Transport. "TAG unit A1.1: cost-benefit analysis." Transport Analysis Guidance.
  <https://www.gov.uk/guidance/transport-analysis-guidance-tag>
