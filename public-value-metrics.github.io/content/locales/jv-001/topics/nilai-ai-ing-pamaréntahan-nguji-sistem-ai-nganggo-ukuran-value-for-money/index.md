# Nilai AI ing Pamaréntahan: Nguji Sistem AI Nganggo Ukuran Value for Money

Nilai AI ing pamaréntahan yaiku pranataning sistem AI sing dienggo ing layanan publik kudu lulus ambang value for money lan nilai publik sing padha karo kaputusan belanja liyané — ora luwih murah merga anyar, lan ora luwih dhuwur merga ditakuti. Iki pitakonan sing kudu bisa dijawab déning tim pangiriman sadurungé, dudu sawisé, fitur AI diluncuraké: apa iki ngasilaké nilai luwih akèh tinimbang biayané, yèn assurance, pangawasan lan risiko wis dihargai kanthi jujur?

## Kenapa penting

Central Digital and Data Office (CDDO) Britania Raya nerbitaké Generative AI Framework for Government ing 2024, adhedhasar pedoman interim sadurungé saka Juni 2023, lan nyusun watara sepuluh prinsip sing nyakup apa iku generative AI, implikasi étikané, kaamanan piranti, kontrol jaminan kualitas, manajemen siklus urip generative AI sakabèhé, nemtokaké kasus panganggoan sing asli, kolaborasi antar-pamaréntah, transparansi, katrampilan, lan tata kelola. Kerangka kuwi meksa "kontrol manungsa sing bermakna" lan manajemen siklus urip lengkap amarga business case proyek AI duwé mode kegagalan khusus sing ora ana ing belanja TI liyané: angka produktivitas utama saka pilot gampang digawé lan gampang digedhèkake, amarga diukur sadurungé beban verifikasi, koreksi lan pangawasan sing digawé piranti kuwi kaétung. Bebarengan karo kerangka kuwi, Algorithmic Transparency Recording Standard (ATRS) mrèntahaké lembaga publik nerbitaké cathetan standar — tujuan, data sing dienggo, kinerja, uji keadilan, pangaturan pangawasan manungsa — kanggo piranti algoritmik sing duwé pengaruh signifikan marang kaputusan bab individu, mula biaya assurance sistem AI dadi cathetan publik, dudu estimasi internal sing bisa dilewati tim kanthi meneng-meneng.

## Petungan

Adopsi AI dinilai minangka tambahan kanggo, dudu pengganti, penilaian (appraisal) standar [value for money](../value-for-money-ngukur-apa-belanja-publik-menehi-imbangan-biaya-lan-manfaat-sing-paling-apik/), kanthi istilah khusus AI digawé gamblang, ora dilebokaké dadi siji angka "keuntungan produktivitas":

```
Nilai net sistem AI =
    keuntungan produktivitas (wektu sing dihemat × biaya staf kebak)
  − biaya lisènsi/komputasi
  − biaya verifikasi lan pangawasan manungsa (mriksa output AI sadurungé
    ditindakaké — iki ora dadi nol senajan kanggo piranti sing wis mateng)
  − biaya dokumentasi ATRS lan pemantauan terus-terusan
  − biaya sing disesuaikan risiko saka cilaka merga kesalahan, bias, utawa halusinasi,
    ditimbang miturut sapa sing nanggung cilaka kuwi (distributional-weighting)

Angka produktivitas pilot sing ngilangi istilah pangawasan ora bisa
dibandhingaké karo dhasar biaya business-as-usual sing wis kalebu
tinjauan manungsa sing sepadan — deleng ai-productivity-in-the-public-sector
kanggo disiplin pangukuran produktivitas sing luwih lengkap sing dipinjam.
```

## Conto petungan

**Otoritas lokal nganggo piranti generative AI kanggo nyusun wangsulan kapisan marang pitakonan rutin bab pajak dewan**: 25.000 pitakonan/taun, sadurungé ditangani kabèh déning petugas kasus rata-rata 14 menit/pitakonan, biaya staf kebak £34/jam.

```
Biaya dhasar (tanpa AI):
  25.000 × (14/60) × £34 = £198.333/taun

Klaim utama pilot: AI nyusun wangsulan ing 90 detik,
petugas kasus "mung mriksa lan ngirim" — wektu anyar sing diklaim 3 menit
  25.000 × (3/60) × £34 = £42.500/taun
  → klaim penghematan £155.833/taun (kaya transformasional)

Angka kebak biaya, diukur sawisé 3 sasi urip nyata, dudu ing
kasus uji pilihan pilot:
  Wektu mriksa + koreksi nyata saben wangsulan: 6 menit (konsep
  perlu disunting temenan kanggo pitakonan sing rumit utawa sensitif emosional)
  25.000 × (6/60) × £34 = £85.000/taun
  Biaya lisènsi/komputasi: £38.000/taun
  Dokumentasi ATRS lan pemantauan bias/kualitas saben telung sasi: £14.000/taun
  Total biaya = 85.000 + 38.000 + 14.000 = £137.000/taun

Penghematan nyata = 198.333 − 137.000 = £61.333/taun — asli lan pantes
dijaga, nanging kurang saka separo klaim utama pilot, lan
kanggo nemokaké iku dibutuhaké pangukuran wektu pangawasan sing jujur,
dudu sing paling apik kaya ing pilot.
```

## Gegayutan karo rekayasa piranti lunak

Ing kéné [ai-productivity-in-the-public-sector](../produktivitas-ai-ing-sektor-publik-bukti-tenan-bab-asisten-koding-ai-ing-pamaréntahan/) lan topik iki ketemu: tim rékayasa sing nggawé fitur AI kanggo layanan publik nduwèni instrumentasi sing ndadèkaké angka "nyata" ing conto kasus bisa dipikolèh — nyathet wektu tinjauan sing sejatiné, jarak suntingan antara konsep lan wangsulan sing dikirim, lan tarif eskalasi, tinimbang percaya karo kahanan demo pilot. Fitur AI kudu dinilai nganggo titik 9 [digital-service-standard](../standar-layanan-digital/) (layanan aman, privasi pangguna) lan dirujuk silang karo [public-sector-cybersecurity-value](../nilai-keamanan-siber-sektor-publik/) yèn piranti kuwi nyentuh data warga, lan sistem AI apa waé sing duwé pengaruh signifikan marang kaputusan bab individu mbutuhaké cathetan ATRS sadurungé bisa dianggep siap dinilai, kaya layanan mbutuhaké assessment [digital-service-standard](../standar-layanan-digital/) sing lulus sadurungé tayang.

## Jebakan

- **AI-washing**: ngganti label otomatisasi adhedhasar aturan sing wis ana dadi "AI" kanggo olèh dana utawa perhatian sing disisihaké kanggo adopsi AI, tanpa risiko akurasi utawa bias sing sejatiné mbenerake pengawasan ekstra saka kerangka kuwi.
- **Ngukur produktivitas pilot, dudu produktivitas produksi**: pilot mlaku nganggo kasus uji pilihan karo para peninjau sing aktif lan waspada; produksi mlaku nganggo campuran kasus sing lengkap lan ruwet karo para peninjau sing, saya suwé, ngembangaké bias otomatisasi lan kurang mriksa output — kekarone nyimpangaké angka biaya pangawasan sing jujur.
- **Ngliwati registrasi ATRS merga piranti "dudu temenan pengambilan kaputusan otomatis"**: ambang standar iku pengaruh signifikan marang kaputusan bab individu, sing dituhoni déning umumé piranti nyusun utawa triase AI sing madhep warga senajan manungsa sacara teknis nandhatangani.
- **Ora nggatèkaké dampak distribusi saka kesalahan**: tarif kesalahan sistem AI sing dirata-rata kanggo kabèh pangguna bisa nutupi tarif kesalahan utawa bias sing luwih dhuwur kanggo klompok tartamtu; [pembobotan distribusi](../pembobotan-distribusional/) kudu ditrapaké ing istilah cilaka sing disesuaikan risiko, dudu mung angka akurasi agregat.

## Sumber

- Central Digital and Data Office, Generative AI Framework for Government (2024). <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
- Algorithmic Transparency Recording Standard. <https://www.gov.uk/government/collections/algorithmic-transparency-recording-standard-hub>
- HM Treasury, Green Book: central government guidance on appraisal and evaluation. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-governent>
