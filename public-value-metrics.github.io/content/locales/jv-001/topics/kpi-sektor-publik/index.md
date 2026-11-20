# KPI Sektor Publik (Public Sector KPIs)

Key performance indicator (KPI) yaiku ukuran sing dipilih lan dilacak sing dadi wakil apa layanan publik nindakake tugase kanthi apik. Ing pamarentah, pilihan KPI ora tau netral: amarga KPI nempel ing anggaran, tabel peringkat, lan karir, tumindak milih siji mbentuk prilaku kabeh wong ing hilir, asring luwih saka kebijakan sing nggawe layanan kuwi.

## Kenapa penting

Pengamatan Charles Goodhart taun 1975 babagan kebijakan moneter, sing banjur dipopulerake Marilyn Strathern minangka "nalika ukuran dadi target, ora maneh dadi ukuran sing apik", yaiku label peringatan paling penting ing manajemen kinerja sektor publik. KPI sing dipilih kanggo *njlentrehake* sistem wiwit *ngrusak* sistem kuwi nalika sumber daya, gaji, utawa kaslametan politik disambungake karo iku. Ilustrasi kanonike yaiku wektu respons ambulans NHS: nalika target respons Kategori A wolung menit dadi ngiket, sawetara trust ditemokake "numpuk" ambulans persis ing njaba jam wektu respons, utawa nggolongake maneh panggilan, kanggo nggayuh angka tanpa ngowahi outcome pasien. Pedoman National Audit Office Inggris babagan milih lan nggunakake indikator kinerja, sing diwutuhake ing laporan value-for-money lan kerangka "Performance Measurement by Regulators" lan "Choosing the Right FABRIC" (Fit for purpose, Appropriate, Balanced, Robust, Integrated, Cost-effective), ana persis amarga departemen terus milih indikator sing gampang dilaporake tinimbang indikator sing angel dimanipulasi. Insinyur piranti lunak sing ngirim dasbor sing bakal dadi pangukuran menteri utawa direktur, disengaja utawa ora, lagi ngrancang struktur insentif lembaga publik.

## Petungan

Desain KPI minangka topik kerangka, nanging *evaluasi* KPI calon iku daftar centhang sing bisa diulang, dudu rumus:

```
Kanggo saben KPI calon, skor marang:
  Fit for purpose  — apa ngukur outcome, utawa proksi sing adoh pirang-pirang langkah?
  Appropriate      — apa duweke wong sing bener-bener bisa mengaruhi?
  Balanced         — apa dipasangake karo metrik tandhingan sing nangkep manipulasi?
  Robust           — apa bisa tahan audit, utawa dilaporake dhewe lan ora bisa diverifikasi?
  Integrated       — apa cocog karo set sing luwih jembar, utawa nubruk KPI liyane?
  Cost-effective   — apa ngumpulake iku luwih larang tinimbang keputusan sing diwenehi informasi?

Pamisahan leading vs lagging:
  Indikator leading  → ngramalake outcome mbesuk, nanging asring bisa dimanipulasi (contone panggilan dijawab <60 detik)
  Indikator lagging  → mastekake outcome wis kelakon, nanging teka telat kanggo ngarahake (contone survei
                        kepuasan taunan)
  Set KPI sing bisa dipertahanake nggandhengake paling ora siji saka saben jinis kanggo saben tujuan.
```

## Conto petungan

**Trust ambulans**: sawijining trust nglaporake KPI wektu respons Kategori A (ngancam nyawa) "75% panggilan direspons sajrone 8 menit." Ing sak kuartal, 6.000 panggilan Kategori A mlebu; 4.500 kasembadan sajrone 8 menit, ngasilake 75,0%, katon ing target.

```
KPI judhul = 4.500 / 6.000 × 100 = 75,0%  (nyukupi ambang 75%)
```

Nanging audit Goodhart nambahake metrik tandhingan: rata-rata wektu respons kanggo 10% panggilan paling alon.

```
Rata-rata respons desil paling alon = 34 menit (munggah saka 19 menit rong taun sadurunge)
```

Trust kena target nalika buntute, panggilan sing paling mungkin bener-bener ngancam nyawa nalika triase ora sampurna, saya awon banget, amarga kru diprioritasake menyang panggilan cedhak jurang 8 menit tinimbang menyang urgensi klinis. KPI tunggal nyritakake crita palsu; KPI sing dipasangake nyritakake sing bener.

## Gegayutan karo rekayasa piranti lunak

Insinyur sing mbangun dasbor kinerja kanggo pamarentah, sacara fungsional, ngrancang API insentif organisasi. Implikasi praktis: instrumentasi *penyebut* kanthi ketat kaya pembilang (KPI sing dilaporake minangka persentase gundhul ngundang manipulasi penyebut; deleng [biaya saben transaksi](../biaya-saben-transaksi-ékonomi-unit-layanan-digital-pamaréntah/) kanggo jebakan padha ing layanan digital); bangun metrik tandhingan ing dasbor sing padha tinimbang laporan kapisah sing ora diwaca sapa wae, supaya manipulasi katon ing titik keputusan; lan version definisi KPI, amarga redefinisi meneng-meneng (ngowahi apa sing diitung minangka "panggilan", "kasus", utawa "rampung") sacara fungsional padha karo ngowahi target tanpa woro-woro. [Scorecard nilai publik](../scorecard-nilai-publik/) minangka salah sijine cara terstruktur kanggo nyegah siji KPI diwaca piyambak, lan [akuntabilitas adhedhasar outcome](../akuntabilitas-adhedhasar-outcome/) yaiku disiplin milih KPI tingkat populasi sing ora bisa dirusak sepihak dening siji tim.

## Jebakan

- **Milih metrik sing gampang dikumpulake tinimbang sing bermakna.** Wektu jawaban panggilan gampang dicathet; apa panggilan ngrampungake masalah warga ora; nanging mung sing nomer loro iku outcome. Tahan godaan gampang nggunakake apa sing wis dipancarake sistem.
- **Ora ana metrik tandhingan.** KPI apa wae sing nempel ing dhuwit utawa reputasi bakal dimanipulasi ing pinggir; kirim bareng metrik sing dipasangake sing nangkep vektor manipulasi sing mungkin sadurunge diterbitake.
- **Ngowahi definisi metrik tanpa changelog.** Ngganti "panggilan ditampa" dadi "panggilan dijawab" kanggo ngalembana tren ngrusak kredibilitas seri wektu nalika ketemu; tansah terbitake changelog definisi bebarengan karo angka.
- **Ngelirukake aktivitas karo asil.** Ngitung inspeksi sing rampung yaiku output; ngitung properti sing dibenerake kepatuhane luwih cedhak karo outcome (deleng [outcome vs output](../outcome-vs-output-bedane-asil-langsung-lan-owah-owahan-nyata/)).

## Sumber

- National Audit Office, "Choosing the Right FABRIC: A Framework for Performance Information."
  <https://www.nao.org.uk/>
- Marilyn Strathern, "'Improving Ratings': Audit in the British University System," *Social
  Anthropology*, 1997 (formulation of Goodhart's law as commonly cited).
- National Audit Office, investigations into NHS ambulance service performance reporting.
  <https://www.nao.org.uk/>
