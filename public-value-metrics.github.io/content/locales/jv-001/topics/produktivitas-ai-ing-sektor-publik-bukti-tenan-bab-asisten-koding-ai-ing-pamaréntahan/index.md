# Produktivitas AI ing Sektor Publik: Bukti Tenan bab Asisten Koding AI ing Pamaréntahan

Metrik bab apa sing tenan ditindakaké asisten koding AI marang output rékayasa — tarif panampa saran, percepatan ing panaliten kontrol, throughput PR, lan retensi kode — nduwèni basis bukti sing bener-bener kontradiktif sanajan durung ditambahi kendala sektor publik: klasifikasi data mbatesi bagéan endi saka warisan sistem lawas sing olèh disentuh piranti AI, siklus pengadaan tegesé piranti sing dievaluasi kerep telat satu generasi model saka kemampuan paling anyar, lan syarat izin keamanan ngatur sapa sing olèh nganggo ing endi.

## Kenapa penting

Rong panaliten kontrol sing paling akèh dikutip nuduhaké arah sing kosok balèn. RCT GitHub Copilot 2023 déning Peng et al. nemokaké yèn pangembang ngrampungaké tugas server HTTP greenfield 55,8% luwih cepet nganggo Copilot (1j11m lawan 2j41m, n=95). RCT METR 2025 nemokaké yèn pangembang open-source berpengalaman sing nggarap *repositori matang duwèké dhéwé* 19% luwih alon nganggo piranti AI awal 2025, nanging percaya yèn dhèwèké kira-kira 20% luwih cepet. Kekarone panaliten iku sah; kontradiksi iku dhéwé temuané — kemanjuran ing tugas greenfield ora pindhah menyang efektivitas ing basis kode matang, lan akèh kerja rékayasa pamaréntah iku kerja basis kode matang ing warisan sistem sing luwih tuwa lan luwih aneh tinimbang repositori komersial median. Generative AI Framework for HMG saka Central Digital and Data Office (2024, <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>) nata prinsip adopsi sing tanggung jawab persis amarga basis bukti iki ora bisa mung diimpor saka demonstrasi vendor; departemen diwajibaké ngevaluasi piranti adhedhasar syarat penanganan data lan keamanan dhéwé sadurungé diluncuraké.

## Petungan

```
Tarif panampa    = saran sing ditampa / saran sing ditampilaké
Tarif retensi    = kode AI sing tekan merge / kode AI sing ditampa
Percepatan       = (t_kontrol − t_AI) / t_kontrol  (saka bandingan kontrol WAÉ)
Delta throughput = Δ PR sing di-merge/pangembang/minggu

Faktor cakupan sektor publik:
  bagéan basis kode sing layak = LOC ing sistem sing klasifikasiné
    (OFFICIAL, OFFICIAL-SENSITIVE, SECRET) ngidinaké piranti kuwi

Model nilai = pangembang × cakupan-layak × wektu dihemat × tarif kebak × utilisasi
             — saben istilah mbutuhaké pangukuran lokal, lan faktor cakupan
             ora duwé padanan ing sektor swasta
```

## Conto petungan

Sawijining departemen pamaréntah nglakokaké pilot asisten koding AI ing 300 pangembang, nanging mung sistem klasifikasi OFFICIAL sing layak nganggo piranti — 70% saka warisan miturut alokasi jumlah staf, lan 30% sisané (sistem klasifikasi luwih dhuwur) dikecualiaké babar blas.

```
Pangembang layak = 300 × 0,70 = 210

Asil pilot: wektu dihemat miturut laporan dhéwé 40 menit/dina;
            penghematan diukur ing level tugas 12 menit/dina (0,2j)
            — celah persepsi METR, kaping pindho ing lapangan

Hargai angka SING DIUKUR:
  210 × 0,2j × 220 dina × £55/jam kebak × 0,6 utilisasi
  = 210 × 44 jam × £55 × 0,6
  = 9.240 jam × £55 × 0,6 ≈ £304.920/taun kapasitas

Biaya: 210 kursi lisènsi × £22/sasi × 12 ≈ £55.440/taun

Rasio kapasitas net ≈ 304.920 / 55.440 ≈ 5,5:1
```

Bisa didanai kanthi kira-kira sapratelon saka manfaat sing dilaporaké dhéwé, lan mung sawisé plafon klasifikasi ditrapaké — mènèhi lisènsi marang kabèh 300 pangembang adhedhasar angka laporan dhéwé bakal ngegedhèkake populasi layak lan penghematan sejati.

## Gegayutan karo rekayasa piranti lunak

Disiplin sing langsung bisa dienggo: jalanna **uji pragmatis** ing basis kode lan tiket nyata departemen dhéwé, dudu tugas demonstrasi vendor, amarga asil METR iku temuan khusus basis kode matang; anggepen **tarif panampa minangka proksi, dudu outcome** — panampa dhuwur karo retensi kurang iku padhané overdiagnosis ing piranti lunak; pasangna saben klaim throughput karo **cek stabilitas**, amarga laporan DORA 2025 nemokaké yèn adopsi AI ningkataké throughput nanging nyuda stabilitas owah-owahan, sing persis analisis manfaat net sing dirancang [metrik DORA kanggo nilai publik](../metrik-dora-kanggo-nilai-publik/) kanggo ditindakaké; lan jujura yèn piranti AI bisa nglebokaké, dudu nyepetaké, celah ing warisan sistem sing abot [utang teknis](../utang-teknis-minangka-pengikisan-nilai-publik/), amarga data latihan kurang makili kode COBOL, 4GL, lan mainframe pesenan sing umum ing pamaréntah, mula kualitas saran ing sistem sing paling butuh pitulung asring paling lemah. Iki ana ing jejere pitakonan sing luwih amba bab [nilai AI ing pamaréntahan](../nilai-ai-ing-pamaréntahan-nguji-sistem-ai-nganggo-ukuran-value-for-money/) lan kudu diatur déning kendala [nilai kaamanan siber sektor publik](../nilai-keamanan-siber-sektor-publik/) sing mbatesi ing ngendi piranti pihak katelu olèh ndeleng kode utawa data.

## Jebakan

- **Transplantasi panaliten vendor**: nrapaké percepatan RCT greenfield marang kerja integrasi warisan iku persis kesalahan sing dibukak panaliten METR.
- **Laporan dhéwé minangka pangukuran**: celah persepsi lawan diukur 20 poin persentase iku bias paling gedhé sing dikenal ing literatur iki, lan nggedhèkake business case sing mung gumantung marang survei pangembang.
- **Ora nggatèkaké plafon klasifikasi**: model lisènsi lan nilai sing dibangun saka total jumlah staf, dudu subset layak sing wis lulus klasifikasi, sacara sistematis ngegedhèkake kèhi efektivitas biaya lan cakupan sing bisa dicapai.
- **Telat siklus pengadaan**: pengadaan piranti adhedhasar kerangka bisa tegesé pilot ngevaluasi generasi model sing 12–18 sasi ketinggalan saka apa sing kasedhiya umum nalika peluncuran penuh, ndadèkaké asumsi percepatan business case wiwitan wis basi sadurungé tayang.

## Sumber

- Peng S, et al., "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot", 2023. <https://arxiv.org/abs/2302.06590>
- METR, "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity", 2025. <https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/>
- DORA, 2025 State of AI-assisted Software Development report. <https://dora.dev/dora-report-2025/>
- Central Digital and Data Office, Generative AI Framework for HMG, 2024. <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
