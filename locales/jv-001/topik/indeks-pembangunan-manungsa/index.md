# Indeks Pembangunan Manungsa

HDI iku alternatif utama PBB tinimbang ngurutake negara mung miturut penghasilan: nggabungake pangarep-arep urip, pendidikan, lan penghasilan dadi siji angka antarane 0 lan 1, kanthi premis — sing didhukung ekonom Amartya Sen lan dikembangake kanggo PBB dening Mahbub ul Haq — yen pembangunan iku bab ngluwihi apa sing bisa ditindakake lan dadi wong, dudu mung apa sing dipikolehi. Wis diterbitake saben taun ing Human Development Report United Nations Development Programme wiwit 1990.

## Kenapa penting

Sadurunge HDI, "pembangunan" diukur meh kabeh nganggo GNP per kapita, sing ora ngandhakake apa-apa babagan apa pertumbuhan tekan kesehatan utawa pendidikan wong biasa. Pendekatan kapabilitas Sen mbingkai ulang pembangunan minangka ngluwihi kebebasan sing nyata, lan ul Haq ngowahi iku dadi indeks sing bisa diterbitake UNDP kanggo ngurutake saben negara, meksa pemerintah sing sugih mung saka penghasilan nanging nglirwakake kesehatan utawa sekolah ngadhepi peringkat sing luwih ala tinimbang sing disaranake GDP-ne (negara minyak Teluk lan sawetara ekonomi ekstraktif iku conto standar). Struktur telung bagean HDI uga leluhur metodologis langsung saka [Multidimensional Poverty Index](../indeks-kemiskinan-multidimensi/): loro-lorone nolak ngidini siji dimensi nebus kekurangan ing dimensi liyane, nggunakake rata-rata geometris tinimbang aritmetis. UNDP nerbitake cathetan teknis lengkap lan data dhasar kanggo saben edisi (<https://hdr.undp.org/data-center/human-development-index>), sing dadi sumber kanonis kanggo sapa wae sing mbangun ing indeks iki tinimbang ngitung ulang.

## Petungan

```
Indeks Pangarep-arep Urip (LEI)  = (LE − 20) / (85 − 20)

Indeks Rata-rata Taun Sekolah    = rata-rata taun sekolah / 15
Indeks Pangarep-arep Taun Sekolah = pangarep-arep taun sekolah / 18
Indeks Pendidikan (EI)           = (Indeks Rata-rata + Indeks Pangarep-arep) / 2

Indeks Penghasilan (II)          = (ln(GNI per kapita) − ln(100)) / (ln(75.000) − ln(100))

HDI = (LEI × EI × II) ^ (1/3)     [rata-rata geometris saka telung sub-indeks]
```

Rata-rata geometris iku disengaja: amarga ngalikake tinimbang ngrata-rata, skor sing dhuwur banget ing siji dimensi ora bisa nutup kanthi kebak skor sing endhek banget ing dimensi liyane — desain sing diadopsi UNDP ing 2010 khusus kanggo ngukum ketidakseimbangan, ngganti rumus rata-rata aritmetis sadurunge.

## Conto petungan

**Negara berpenghasilan menengah**: pangarep-arep urip 72 taun, rata-rata taun sekolah 8, pangarep-arep taun sekolah 13, GNI per kapita $12.000.

```
LEI = (72 − 20) / (85 − 20)              = 52 / 65   = 0,800
MYSI = 8 / 15                                        = 0,533
EYSI = 13 / 18                                       = 0,722
EI = (0,533 + 0,722) / 2                             = 0,628
II = (ln(12.000) − ln(100)) / (ln(75.000) − ln(100))
   = (9,393 − 4,605) / (11,225 − 4,605)
   = 4,788 / 6,620                                   = 0,723

HDI = (0,800 × 0,628 × 0,723) ^ (1/3)
    = (0,363) ^ (1/3)                                ≈ 0,713
```

HDI 0,713 mlebu pita "pembangunan manungsa dhuwur" UNDP (0,700–0,799); "dhuwur banget" diwiwiti saka 0,800. Elinga kepriye sensitif asile marang sub-indeks paling lemah: yen rata-rata taun sekolah 4 tinimbang 8 (MYSI = 0,267, EI = 0,494), HDI mudhun dadi (0,800 × 0,494 × 0,723)^(1/3) ≈ 0,639 — mudhun siji pita kebak — sanajan ora ana liyane sing owah.

## Gegayutan karo rekayasa piranti lunak

- Pola rata-rata geometris bisa langsung dienggo maneh kanggo skor layanan utawa produk komposit apa wae sing ora pengin siji dimensi kuwat nutupi dimensi lemah sing kritis — contone nggabungake skor aksesibilitas, kinerja, lan keandalan kanggo layanan digital publik kanthi perkalian tinimbang rata-rata tertimbang, supaya layanan sing cepet nanging ora bisa diakses ora bisa entuk skor "apik".
- Transformasi log HDI marang penghasilan (nilai marjinal sing mudhun saka pound tambahan) iku logika sing padha ing mburi [pembobotan distribusional](../pembobotan-distribusional/) ing appraisal: $1.000 tambahan tegese luwih akeh kanggo kluwarga mlarat tinimbang sugih, lan nganggep loro-lorone linear salah ngregani dampak.
- Dashboard apa wae sing nglaporake skor campuran tunggal "inklusi digital" utawa "outcome warga" kudu ndokumentasi rumus agregasine sakeksplisit cathetan teknis UNDP — deleng [KPI sektor publik](../kpi-sektor-publik/) lan [public value scorecard](../scorecard-nilai-publik/).

## Jebakan

- **Ngrata-rata tinimbang nggunakake rata-rata geometris** — rata-rata aritmetis ngidini penghasilan dhuwur nutupi kesehatan utawa pendidikan sing ala babar pisan; kabeh tujuan owah-owahan metodologi 2010 yaiku mungkasi substitusi kuwi.
- **Mbandhingake HDI taun-taun kaya GDP sing disesuaikan inflasi** — UNDP sacara periodik ngowahi dhasar indeks (wates minimum/maksimum anyar, wates sekolah sing direvisi), mula owah-owahan peringkat bisa nggambarake pembaruan metodologi, dudu owah nyata; tansah priksa edisi HDR endi sing dadi asal angka.
- **Nganggep HDI minangka ukuran kemiskinan** — iku rata-rata nasional lan ora ngandhakake apa-apa babagan distribusi ing sajrone negara; kanggo iku, gunakake [Multidimensional Poverty Index](../indeks-kemiskinan-multidimensi/) utawa Inequality-adjusted HDI UNDP sing kapisah.

## Sumber

- UNDP. "Human Development Index (HDI)" technical notes and data.
  <https://hdr.undp.org/data-center/human-development-index>
- UNDP. Human Development Report 1990 (the index's introduction).
- Sen A. "Development as Freedom." Oxford University Press, 1999.
