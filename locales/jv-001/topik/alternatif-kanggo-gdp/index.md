# Alternatif kanggo GDP

Alternatif GDP yaiku metrik sing dirancang kanggo nangkep apa sing sacara struktural diabaikan Produk Domestik Bruto: karya perawatan sing ora dibayar, kekurangan lingkungan, distribusi penghasilan, lan apa pertumbuhan bener-bener nambah urip. Sing paling kondhang yaiku Genuine Progress Indicator (GPI) lan Indeks Gross National Happiness (GNH) Bhutan; alasan kanggo nganggep serius iki dikandhakake kanthi paling berpengaruh dening Komisi Stiglitz-Sen-Fitoussi 2009. Kanggo insinyur sing mbangun dashboard pemerintah utawa sistem KPI, "angka endi sing dianggep kemajuan" yaiku keputusan desain kanthi akibat nyata marang apa sing didanai.

## Kenapa penting

Simon Kuznets, sing mbangun akun nasional AS ing taun 1930-an, ngelingake Kongres ing 1934 yen "kesejahteraan sawijining bangsa meh ora bisa disimpulake saka pangukuran penghasilan nasional" — peringatan sing cepet dilalekake dening angka kasebut. GDP ngitung resik-resik tumpahan minyak minangka pertumbuhan lan perawatan bocah sing ora dibayar dening wong tuwa minangka nol; ora mbedakake belanja sing mbangun kesejahteraan awet saka belanja sing mung ngimbangi cilaka sing wis kedadean. Komisi Stiglitz-Sen-Fitoussi, sing dikumpulake Presiden Prancis Nicolas Sarkozy lan dipimpin Joseph Stiglitz, Amartya Sen, lan Jean-Paul Fitoussi, nglaporake ing 2009 yen sistem statistik kudu ngalihake penekanan "saka ngukur produksi ekonomi menyang ngukur kesejahteraan wong," lan keberlanjutan kudu dilacak kapisah saka kesejahteraan saiki tinimbang digabung dadi siji angka. Alternatif GDP ngoperasionalake rekomendasi kuwi. GPI, sing dikembangake think tank Redefining Progress ing taun 1990-an lan adhedhasar Measure of Economic Welfare saka William Nordhaus lan James Tobin 1972, diwiwiti saka konsumsi pribadi (kaya GDP) banjur nambah manfaat non-pasar sing ditinggal GDP (karya kluwarga, sukarelawan) nalika nyuda biaya defensif lan kekurangan (kejahatan, polusi, perjalanan harian, panyusutan sumber daya) sing GDP salah itung minangka positif. Indeks GNH Bhutan, sing dikelola GNH Centre Bhutan (<https://www.gnhcentre.bt/>), luwih adoh maneh, ngganti pertumbuhan minangka tujuan konstitusional negara: nggabungake 33 indikator ing 9 domain — kesejahteraan psikologis, kesehatan, pendidikan, panggunaan wektu, keragaman budaya, tata kelola, vitalitas komunitas, keragaman ekologis, lan standar urip — dadi siji skor adhedhasar kecukupan sing digunakake langsung kanggo nyaring usulan kabijakan pemerintah.

## Petungan

```
GPI = belanja konsumsi pribadi
      + manfaat non-pasar (karya kluwarga, sukarelawan, pendidikan tinggi)
      − biaya defensif lan sosial (kejahatan, polusi, perjalanan harian, kluwarga pecah)
      − panyusutan modal alam lan sosial (panyusutan sumber daya, ilange lahan tani)

Skor kecukupan GNH, saben domain:
  wong "cukup" ing sawijining domain yen wis ngluwihi ambang ing saben indikator
  Indeks Kabagyan = (% populasi cukup ing ≥ 6 saka 9 domain)
                    + (rata-rata tertimbang kekurangan saka minoritas "durung-bagya")
```

## Conto petungan

**Wilayah, GPI**: konsumsi pribadi $50 milyar. Tambahake nilai kira-kira karya kluwarga lan sukarelawan $12 milyar (tarif upah biaya penggantian — deleng [nilai wektu sukarelawan](../nilai-wektu-sukarelawan-ngregani-tenaga-kerja-tanpa-bayaran/)). Kurangi prakiraan biaya taunan kemacetan perjalanan ($3 milyar), kejahatan ($4 milyar), lan panyusutan sumber daya jangka dawa ($6 milyar):

```
GPI = 50 + 12 − 3 − 4 − 6 = 49 ($ milyar)
```

Yen GDP tuwuh saka $50 milyar dadi $55 milyar ing taun kuwi (+10%), nanging biaya defensif lan panyusutan tuwuh luwih cepet tinimbang konsumsi, GPI bisa mudhun sanajan GDP munggah — "hipotesis ambang" sing dikutip peneliti GPI kanggo ekonomi berpenghasilan dhuwur wiwit kira-kira taun 1970-an, nalika pertumbuhan terus munggah nalika GPI mandheg.

**Warga, GNH**: sawijining responden ngluwihi ambang kecukupan ing 7 saka 9 domain (kesehatan, pendidikan, standar urip, vitalitas komunitas, keragaman budaya, keragaman ekologis, panggunaan wektu) nanging kurang ing kesejahteraan psikologis lan tata kelola. Amarga 7 ≥ 6, dheweke diitung "bagya" ing headcount; indeks ngelacak kapisah kedalaman rong kekurangan kasebut supaya lulus tipis ora padha karo lulus longgar.

## Gegayutan karo rekayasa piranti lunak

- Dashboard KPI sing mung dimodelake ing throughput utawa belanja (pola GDP) bakal sacara sistematis kecolongan cilaka sing ditimbulake nalika ngasilake throughput kuwi — volume tiket dhukungan sing dianggep "keterlibatan" tinimbang "kasusahan pangguna" iku versi pangiriman piranti lunak saka ngitung tumpahan minyak minangka pertumbuhan.
- Akuntansi gaya GPI iku pola audit sing migunani kanggo sembarang rangkaian [KPI sektor publik](../kpi-sektor-publik/): kanggo saben metrik output judhul, takon biaya defensif apa sing meneng-menengan ditanggung (rework, respon insiden, burnout) lan kurangi, kaya GPI nyuda belanja defensif saka konsumsi.
- Cara kecukupan domain GNH — lulus/ora lulus saben dimensi, banjur diagregasi — sacara struktural padha karo teknik [analisis keputusan multi-kriteria](../analisis-keputusan-multikriteria/) lan pantes dienggo maneh ing ngendi wae skor skalar tunggal bakal nutupi dimensi kegagalan kritis.

## Jebakan

- **Nganggep GPI minangka akun nasional sing tepat** — beda karo GDP, GPI ora nduwe metodologi standar tunggal; studi beda mbobot biaya perjalanan, wektu sukarelawan, utawa panyusutan sumber daya kanthi beda, mula perbandingan GPI antar-studi luwih ora bisa dipercaya tinimbang perbandingan GDP antar-negara.
- **Ngimpor GNH sacara borongan menyang budaya kabijakan sing beda** — bobot domain lan ambang kecukupane ditetepake liwat konsultasi Bhutan; nyalin angkane tanpa proses konsultasi dhasare ngasilake metrik kosong sing ora ana sing percaya.
- **Nganggep alternatif GDP ngganti appraisal biaya-manfaat** — iki indikator diagnostik skala ekonomi, dudu piranti keputusan kanggo siji program; gunakake [analisis biaya-manfaat sosial](../analisis-biaya-manfaat-sosial/) kanggo iku.

## Sumber

- Stiglitz JE, Sen A, Fitoussi J-P. "Report by the Commission on the Measurement of Economic
  Performance and Social Progress." (2009) <https://ec.europa.eu/eurostat/documents/118025/118123/Fitoussi+Commission+report>
- GNH Centre Bhutan. <https://www.gnhcentre.bt/>
- Redefining Progress. "The Genuine Progress Indicator: A Tool for Sustainable Development."
- Nordhaus WD, Tobin J. "Is Growth Obsolete?" (1972), NBER.
