# Akuntabilitas Adhedhasar Outcome (Outcomes-Based Accountability, OBA)

Outcomes-Based Accountability, uga diarani Results-Based Accountability (RBA), yaiku kerangka Mark Friedman kanggo misahake rong pitakonan sing biasane dicampur-adukake ing pelaporan sektor publik: "apa populasi iki lagi apik?" (akuntabilitas populasi) lan "apa program khusus iki lagi apik?" (akuntabilitas kinerja). Ngelirukake loro-lorone, miturut Friedman, minangka alasan paling umum program sing dikelola kanthi apik disalahake kanggo tren populasi sing ora tau duwe kekuwatan kanggo ngowahi.

## Kenapa penting

Friedman nyetel kerangka iki ing *Trying Hard Is Not Good Enough* (2005), kanthi argumen yen umume pelaporan publik utawa nenggelamake para pengambil keputusan ing statistik tingkat populasi sing ora dikendhalekake siji lembaga (tingkat kehamilan remaja, tingkat pengangguran, usia urip) utawa nenggelamake ing cacahan aktivitas tingkat program (klien sing dilayani, rujukan sing digawe) sing ora ngandhani apa urip sapa wae saya apik. Sumbangan RBA yaiku kosakata cilik lan disiplin sing njaga loro-lorone kapisah: asil populasi (kondisi kesejahteraan kanggo kabeh populasi, kaya "bocah lair sehat") ora duwe siji lembaga lan mbutuhake akeh mitra sing obah bareng; ukuran kinerja (sepira apik program khusus ngladeni klien khusus) duweke siji lembaga lan kudu dinilai mung adhedhasar apa sing bisa bener-bener dipengaruhi lembaga kuwi. "Telung pitakonan kinerja" Friedman (pira sing kita lakoni, sepira apik anggone nglakoni, lan apa ana sing luwih apik?) saiki tertanam ing kontrak layanan manungsa negara bagian lan kabupaten AS lan, liwat konsultasi lan toolkit Clear Impact sing selaras RBA, akeh dienggo ing komisioning pamarentah daerah Inggris lan Commonwealth. Taruhan praktise bersifat kontraktual: program omah ora kudu dipotong dana mung amarga tingkat tunawisma kutha munggah amarga sebab makroekonomi sing ngluwihi jangkauane, nanging mesthi kudu dipotong yen klien-klien dhewe ora diomahake.

## Petungan

```
Akuntabilitas populasi ("gambaran gedhe" sing dienggo bareng komunitas, wilayah, utawa bangsa):
  Hasil        — kondisi kesejahteraan (contone "warga aman sacara ekonomi")
  Indikator    — ukuran kondisi kuwi (contone tingkat pengangguran, penghasilan rumah tangga median)
  → ora ana siji program sing nduweni indikator; owah-owahan butuh akeh kontributor

Akuntabilitas kinerja (apa sing dadi tanggung jawab siji program):
  Pira sing kita lakoni?       — volume aktivitas (klien sing dilayani, unit sing dikirim)
  Sepira apik anggone nglakoni? — kualitas/efisiensi (% sing ngrampungake program, biaya saben klien)
  Apa ana sing luwih apik?     — outcome sing penting (% kerja 6 sasi sawise
                                  program, sadurunge/sawise utawa dibandhingake klompok pembanding)

Program dinilai ing pitakonan kinerja katelu, ora tau langsung ing indikator
populasi, kajaba skala lan desaine bisa wajar ngowahi iku piyambak.
```

## Conto petungan

**Program dhukungan pagaweyan sing didanai kutha**, 500 peserta/taun, dikontrak dening pamarentah daerah miturut kerangka kinerja gaya RBA:

```
Indikator populasi (konteks, dudu scorecard program):
  Tingkat pengangguran kutha: 6,2% (munggah saka 5,8% taun sadurunge, amarga penutupan pabrik
  ing njaba kendhali program)

Ukuran kinerja (akuntabilitas nyata program):
  Pira:       500 peserta kadaftar (target 480), kasembadan
  Sepira apik: tingkat rampung 78%; biaya saben sing rampung = £340.000 / 390 sing rampung ≈ £872
  Luwih apik: saka 390 sing rampung, 260 kerja lestari ing 6 sasi = 66,7%
              dibandhingake 41% klompok pembanding sing dicocokake (deleng counterfactual-analysis)
```

Miturut pamaos akuntabilitas populasi, program katon gagal; tingkat pengangguran kutha munggah nalika diawasi. Miturut pamaos akuntabilitas kinerja RBA, program sukses: wis nggayuh target volume, njaga kualitas stabil, lan ngasilake outcome pagaweyan 25,7 poin persentase ing ndhuwur klompok pembanding sing dicocokake, nalika indikator populasi obah amarga sebab (penutupan pabrik) sing babar blas ing njaba kendhali program.

## Gegayutan karo rekayasa piranti lunak

RBA kena langsung ing pambeda SRE sing wis dikenal: indikator populasi iku kaya metrik North Star tingkat bisnis sing ora diduweni siji tim rekayasa saka ujung menyang ujung (pendapatan perusahaan, pangsa pasar), dene ukuran kinerja iku kaya SLO tim dhewe, yaiku perkara sing bener-bener digerake dening keputusan desain tim kuwi. Dasbor sing nglaporake loro-lorone tanpa menehi label endi sing endi ngundang salah atribusi sing persis dirancang RBA kanggo dicegah: insinyur on-call disalahake kanggo metrik sing dikendhalekake tim dependensi. Nalika komisioning utawa mbangun piranti pelaporan kanggo kontrak outcome, bangun triad "pira / sepira apik / luwih apik" minangka kolom kelas siji sing bisa disaring kapisah tinimbang siji KPI campuran; iki disiplin sing padha karo misahake indikator leading lan lagging ing [KPI sektor publik](../kpi-sektor-publik/). RBA uga minangka logika akuntabilitas ing ngisor [pembayaran adhedhasar asil lan obligasi dampak sosial](../pembayaran-adhedhasar-asil-lan-obligasi-dampak-sosial/): kontrak PbR mung bisa adil mbayar ing ukuran kinerja "luwih apik", ora tau ing indikator populasi, kajaba intervensi iku bener-bener penggerak dominan.

## Jebakan

- **Mbayar utawa ngukum program adhedhasar indikator populasi sing ora bisa dikendhalekake.** Iki kesalahan tunggal sing ana RBA kanggo dicegah; tansah telusuri apa program minangka kontributor utama utawa cilik kanggo asil populasi sadurunge masang akibat.
- **Nglaporake "pira" kaya-kaya "luwih apik".** Cacahan aktivitas (klien sing dilayani) minangka data paling gampang dikumpulake lan paling ora informatif; tuntut pitakonan "apa ana sing luwih apik" dijawab nganggo data outcome nyata, ideale dibandhingake karo kontrafaktual (deleng [counterfactual-analysis](../analisis-kontrafaktual-ngira-ira-apa-sing-bakal-kedadéan-tanpa-intervensi/)).
- **Nganggep indikator RBA tetep ing salawase.** Metode Friedman kanthi eksplisit iteratif, siklus "data, crita, apa sing mlaku, rencana aksi", dudu latihan desain scorecard sepisan wae.
- **Ora ana klompok pembanding kanggo "luwih apik".** Owah-owahan sadurunge/sawise tanpa kontrafaktual ngelirukake efek program karo tren sing bakal ditampilake populasi uga.

## Sumber

- Mark Friedman, *Trying Hard Is Not Good Enough: How to Produce Measurable Improvements for
  Customers and Communities*, Trafford Publishing, 2005.
- Clear Impact, "What is Results-Based Accountability?"
  <https://clearimpact.com/results-based-accountability/>
