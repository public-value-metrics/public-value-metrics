# Metrik Kepuasan Warga: Ngukur Pengalaman Langsung Warga karo Layanan Publik

Metrik kepuasan warga ngukur kepriyé wong menehi nilai marang pengalaman langsungé karo layanan publik — béda saka kapercayan marang lembaga sacara umum, lan béda saka apa layanan kuwi tenan ngasilaké outcome sing apik. Layanan bisa disenengi nanging ora efektif, utawa efektif nanging ora disenengi; celah antarané loro iku dhéwé informasi diagnostik sing kudu dititeni tim pangiriman.

## Kenapa penting

Kepuasan diukur ing rong dhuwur sing béda sing rutin dicampur aduk. Ing tingkat layanan, Performance Platform Britania Raya sing saiki wis dipènsiunaké lan service manual GOV.UK saiki mrèntahaké survei kepuasan saben layanan (umumé skala lima poin saka "sanget puas" nganti "sanget ora puas", dilakokaké ing titik transaksi) minangka salah siji saka papat KPI layanan wajib — deleng [standar layanan lan metrik transaksi](../standar-layanan-lan-metrik-transaksi/). Ing tingkat institusi, Civil Service People Survey Britania Raya ngukur keterlibatan lan pengalaman pegawai ing saben departemen pamaréntah pusat saben taun, lan kapisah program "Trust in Government" OECD nyurvèi kapercayan publik marang pamaréntah nasional ing negara anggota, nglacak pola mudhun-lan-pulih jangka dawa sing dibentuk akèh déning krisis (krisis finansial 2008 lan pandemi COVID-19 loro-lorone ngasilaké gerakan tajam lan katon ing angka kapercayan OECD). Alesan insinyur sing mbangun layanan madhep warga kudu misahaké kepuasan lan outcome yaiku mode kegagalan sing dikenal ing rancangan layanan: formulir digital sing dirancang apik lan gampang dienggo kanggo klaim tunjangan bisa nampa skor kepuasan dhuwur banget nalika kabijakan ing ngisor — aturan kelayakan, tumpukan pangolahan, jumlah pènèhan — ora ndadèkaké pengeklaim luwih apik. Kepuasan ngukur antarmuka; ora ngukur nilai sing dikirim ing mburiné.

## Petungan

```
Kepuasan net = % puas (utawa sanget puas) − % ora puas (utawa sanget ora puas)
                    (wangsulan netral/ora duwé pendapat ora kalebu ing loro istilah, nanging dietung
                    ing dhasar wangsulan kanggo ngétung saben persentase)

Celah kepuasan-menyang-outcome = skor kepuasan − skor pencapaian outcome
                    (loro-lorone dinormalisasi 0–100; celah positif gedhé nandhakaké layanan
                    sing "kroso apik" nanging kurang ngirim ing isi)

Indeks kapercayan (gaya OECD) = % responden survei sing mangsuli "iya" kanggo
                    "apa sampeyan duwé kapercayan marang [pamaréntah nasional]?"
                    dilacak minangka seri wektu, umumé dipisah miturut
                    umur, penghasilan, lan pendhidhikan
```

## Conto petungan

**Layanan e-billing pajak dewan otoritas lokal**: survei kepuasan ing titik transaksi sing sukses nuduhaké 2.400 responden: 1.650 puas/sanget puas, 250 ora puas/sanget ora puas, 500 netral.

```
Kepuasan net = (1.650/2.400 × 100) − (250/2.400 × 100)
                  = 68,75% − 10,42%
                  = +58,3 kepuasan net
```

Iki katon kuwat dhéwéan. Nanging survei mung ditampilaké marang pangguna sing *kasil* ngrampungaké transaksi — bias pangukuran sing dikenal (deleng jebakan ing ngisor). Dipasangaké karo metrik tarif rampung saka [standar layanan lan metrik transaksi](../standar-layanan-lan-metrik-transaksi/) nuduhaké tarif rampung mung 71%, tegesé:

```
Kepuasan populasi sejati ora diukur kanggo 29% sing nilar perjalanan —
bisa uga klompok sing paling ora puas, amarga ninggalaké iku dhéwé sinyal
negatif kuwat sing ora tau ditangkep survei.
```

**Ilustrasi tingkat nasional (struktur seri kapercayan gaya OECD)**: kapercayan marang pamaréntah nasional dilaporaké 42% ing taun 1, mudhun dadi 34% ing taun 2 (taun krisis) lan pulih dadi 39% ing taun 3 — lintasan khas pola kejut-lan-pemulihan-sebagian sing dicathet OECD ing saindhenging negara anggota sawisé krisis gedhé.

## Gegayutan karo rekayasa piranti lunak

Pasangna survei kepuasan ing saben titik metu sing bermakna ing perjalanan pangguna, dudu mung ing penyelesaian sing sukses — kesalahan rékayasa paling umum ing bidang iki, lan sing meneng-meneng malih metrik kepuasan dadi metrik kesombongan sing bias-survivorship. Yèn bisa, pasangna skor kepuasan karo metrik penyelesaian utawa outcome ing dasbor sing padha supaya tim ora bisa ngrayakaké kepuasan munggah nalika penyelesaian meneng-meneng mudhun (deleng [biaya saben transaksi](../biaya-saben-transaksi-ékonomi-unit-layanan-digital-pamaréntah/) lan [inklusi digital](../inklusi-digital-mesthekake-digital-by-default-ora-dadi-digital-waé/) kanggo sapa sing disingkiraké saka sampling kepuasan digital ing wiwitan — pangguna non-digital lan digital-dibantu sacara sistematis kurang makili ing survei ing-layanan). Data kepuasan lan kapercayan uga langsung ngupakara sikil legitimasi saka [segitiga strategis Moore](../nilai-publik/), lan kalebu ing perspektif "pelanggan" lan "legitimasi" saka [scorecard nilai publik](../scorecard-nilai-publik/) — deleng [metrik kapercayan lan legitimasi](../metrik-kapercayan-lan-legitimasi-ngukur-dhukungan-publik-tumrap-lembaga-pamaréntah/) kanggo mitra tingkat institusi saka metrik tingkat layanan iki.

## Jebakan

- **Bias survivorship ing survei titik penyelesaian**: pangguna sing nilar perjalanan ora tau weruh survei, mula skor kepuasan ing-layanan sing dhuwur bisa urip bebarengan karo tarif penyelesaian sing murah lan populasi gedhé sing ora katon saka non-penyelesai sing ora puas.
- **Nganggep kepuasan minangka proksi outcome**: antarmuka sing dirancang apik kanggo kabijakan sing dirancang elek olèh skor apik ing kepuasan lan elek ing outcome — tansah laporna loro-lorone, aja siji minangka gantiné liyané.
- **Sampel cilik lan ora makili dilaporaké kanthi presisi palsu**: skor kepuasan saka sawetara atus responden sing milih dhéwé dilaporaké nganti siji desimal ngimplikasi keyakinan sing ora bisa didhukung ukuran sampel.
- **Ora nggatèkaké pemisahan demografis**: angka kapercayan lan kepuasan nasional sing ora dipecah miturut umur, penghasilan, disabilitas, utawa akses digital bisa nutupi pengalaman sing béda banget ing antarané klompok — pola sing rilis Trust in Government OECD dhéwé dipisah sacara gamblang.

## Sumber

- OECD, "Trust in Government." <https://www.oecd.org/en/topics/trust-in-government.html>
- UK Cabinet Office, "Civil Service People Survey" results.
  <https://www.gov.uk/government/collections/civil-service-people-survey-results>
- GOV.UK Service Manual, "Measuring Success." <https://www.gov.uk/service-manual/measuring-success>
