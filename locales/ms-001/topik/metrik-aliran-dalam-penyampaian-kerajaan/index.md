# Metrik Aliran dalam Penyampaian Kerajaan

Metrik aliran (flow metrics) — Hukum Little, had kerja dalam proses (WIP), dan kecekapan aliran — menerangkan seberapa cepat kerja bergerak melalui sistem berkapasiti terhad. Papan sprint ialah satu sistem sebegitu; giliran tuntutan faedah, daftar permohonan perancangan, atau tunggakan kes visa ialah matematik yang sama dengan pakaian seragam yang berbeza.

## Mengapa ini penting

Beban kes kerajaan ialah sistem giliran, dan sistem giliran mematuhi hukum giliran sama ada sesiapa mengukurnya atau tidak. Tempoh penentuan berkanun menjadikan ini eksplisit: di bawah rejim Town and Country Planning, kebanyakan permohonan perancangan kecil mempunyai sasaran penentuan berkanun 8 minggu dan permohonan besar 13 minggu — komitmen masa kitaran yang tertanam terus dalam undang-undang. Tunggakan kes suaka Home Office, yang diteliti berulang kali oleh National Audit Office dan Home Affairs Select Committee, ialah kes yang didokumenkan dengan baik tentang sistem awam di mana kerja dalam proses bertambah lebih pantas daripada daya pemprosesan untuk tempoh yang berpanjangan, menolak masa kitaran jauh melepasi mana-mana jangkaan berkanun atau perkhidmatan. Metrik aliran memberi jurutera dan pengurus kes perbendaharaan kata kuantitatif yang dikongsi untuk mod kegagalan yang tepat ini, dan bukan membiarkannya sebagai "masalah tunggakan" yang kualitatif.

## Matematiknya

```
Hukum Little:  WIP = Daya pemprosesan × Masa kitaran
           →   Masa kitaran = WIP / Daya pemprosesan

Kecekapan aliran = masa aktif (sentuhan) / jumlah masa kitaran   (Vacanti)

Kesan had WIP: bagi daya pemprosesan tetap, mengurangkan WIP separuh kira-kira
mengurangkan purata masa kitaran separuh (Hukum Little disusun semula) — tuas
yang tersedia tanpa menambah bilangan kakitangan.
```

Lihat [metrik DORA untuk nilai awam](../metrik-dora-untuk-nilai-awam/) untuk matematik setara yang diterapkan pada saluran paip penempatan perisian dan bukan kerja kes.

## Contoh yang diselesaikan

**Jabatan perancangan pihak berkuasa tempatan**: 400 permohonan terbuka pada bila-bila masa (WIP), pasukan menyelesaikan 50 permohonan/minggu (daya pemprosesan).

```
Masa kitaran = WIP / Daya pemprosesan = 400 / 50 = 8 minggu
```

Itu mendarat tepat pada sasaran berkanun 8 minggu untuk permohonan kecil — tanpa ruang longgar, bermakna sebarang kebolehubahan dalam permintaan masuk atau masa respons perunding mendorong penentuan melepasi tarikh akhir undang-undang.

**Kecekapan aliran**: daripada 8 minggu itu (56 hari kalendar), sesuatu permohonan lazimnya mempunyai sekitar 6 jam masa pemprosesan sebenar pegawai kes.

```
Kecekapan aliran = 6 jam / (56 hari × 8 jam bekerja/hari)
                 = 6 / 448 ≈ 1.3%
```

Penanda aras Vacanti untuk pasukan perisian meletakkan kecekapan aliran tipikal pada 15–20%; kerja kes kerajaan, dengan banyak serah tugas perunding berkanun dan tetingkap perundingan awam, kerap berjalan pada tahap satu urutan magnitud lebih rendah. 98.7% masa "menunggu" itulah tempat lapan minggu sebenarnya pergi — bukan dalam kapasiti pegawai kes.

**Intervensi had WIP**: menghadkan permohonan terbuka bagi setiap pegawai kes kepada 15 dan bukan 25 tanpa had (mengekalkan daya pemprosesan malar) mengalihkan WIP daripada 400 kepada kira-kira 240 merentas pasukan 16 orang:

```
Masa kitaran baharu = 240 / 50 = 4.8 minggu
```

Hampir separuh masa kitaran daripada perubahan dasar, bukan penambahan kakitangan — tuas yang sama yang ditarik pasukan penyampaian gaya DORA apabila mereka menghadkan WIP sprint.

## Kaitan dengan kejuruteraan perisian

Metrik aliran ialah bahasa sepunya antara papan Kanban pasukan penyampaian dan lantai kerja kes yang perisiannya dibina: giliran pegawai kes dan giliran pull-request kedua-duanya dikawal oleh Hukum Little, dan kedua-duanya melepasi sasaran masa kitaran dengan cara yang sama — terlalu banyak WIP berbanding daya pemprosesan. Ini penting secara langsung untuk [kos kelewatan dalam program awam](../kos-kelewatan-dalam-program-awam/): masa kitaran × CoD ialah paun yang berada dalam giliran pada bila-bila masa, dan ia penting untuk [piawaian perkhidmatan dan metrik transaksi](../piawaian-perkhidmatan-dan-metrik-transaksi/), di mana sasaran pusingan masa yang diterbitkan ialah komitmen masa kitaran yang hanya boleh didiagnosis oleh metrik aliran apabila ia terlepas. Perisian sistem kerja kes harus mendedahkan WIP dan masa kitaran sebagai metrik operasi kelas pertama, bukan menanamnya dalam sistem pengurusan kes yang tiada siapa query.

## Perangkap

- **Menambah had WIP tanpa membetulkan kesesakan sebenar**: jika kekangannya ialah masa respons perunding berkanun luaran, menghadkan WIP pegawai kes hanya memindahkan giliran ke hulu dan bukan memendekkannya.
- **Menganggap kecekapan aliran sebagai sasaran untuk dipermainkan**: mempercepat 1.3% masa aktif hampir tidak menggerakkan masa kitaran; tuasnya hampir selalu dalam keadaan menunggu, yang biasanya bermakna reka bentuk semula proses, bukan kelajuan pegawai kes.
- **Mengabaikan kebolehubahan**: Hukum Little menerangkan purata; beban kes dengan varians permintaan tinggi memerlukan kapasiti penampan, bukan sekadar had WIP yang lebih ketat, atau tarikh akhir berkanun masih akan terlepas pada ekor yang tidak menentu walaupun purata bertambah baik.
- **Mengukur WIP secara tidak konsisten**: kes yang "terbuka" dalam sistem rekod tetapi sebenarnya terhenti menunggu pihak ketiga masih WIP; mengecualikannya mengampu angka tanpa mengubah realiti berhadapan rakyat.

## Sumber

- Vacanti D, *Actionable Agile Metrics for Predictability: An Introduction*, Actionable Agile Press, 2015.
- Reinertsen DG, *The Principles of Product Development Flow*, Celeritas Publishing, 2009.
- Ministry of Housing, Communities and Local Government, planning application statutory timescales. <https://www.gov.uk/guidance/making-an-application>
- National Audit Office, reports on Home Office asylum casework and accommodation. <https://www.nao.org.uk/>
