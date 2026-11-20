# Metrik DORA untuk Nilai Awam

Metrik DORA (DevOps Research and Assessment) — kekerapan penempatan (deployment frequency), masa pendahuluan untuk perubahan (lead time for changes), kadar kegagalan perubahan (change failure rate), dan masa untuk memulihkan perkhidmatan (time to restore service), ditambah kebolehpercayaan (reliability) sebagai yang kelima — ialah penanda aras prestasi penyampaian yang paling disahkan dalam industri perisian. Apabila diterjemahkan kepada istilah akauntabiliti sektor awam, setiap satunya ialah proksi langsung bagi seberapa cepat, dan seberapa selamat, nilai awam sampai kepada rakyat.

## Mengapa ini penting

Penyelidikan DORA selama sedekad, diterbitkan setiap tahun sebagai *Accelerate State of DevOps Report* (metodologi Forsgren, Humble dan Kim, kini dikendalikan oleh Google Cloud), mengelompokkan pasukan kepada pelaksana elit, tinggi, sederhana dan rendah. Pasukan elit menempatkan atas permintaan, mengambil kurang sehari dari commit ke pengeluaran, gagal pada kira-kira 5% perubahan, dan pulih dalam kurang sejam; pelaksana rendah menempatkan sebulan sekali atau kurang, mengambil berbulan-bulan, gagal pada sekitar 40% perubahan, dan pulih dalam beberapa minggu. Dalam kerajaan ini bukan metrik kejuruteraan yang sia-sia: Service Standard Government Digital Service mewajibkan pasukan "mengulang dan memperbaik dengan kerap" dan dapat bertindak balas dengan pantas terhadap keperluan pengguna, dan jabatan yang tidak dapat menempatkan dengan selamat dan kerap secara struktur tidak mampu memenuhi standard itu, apa pun kata penyelidikan pengguna mereka. Kerja kecekapan digital Cabinet Office sendiri mendapati bahawa menolak rakyat dari transaksi digital yang gagal atau perlahan ke saluran telefon atau kertas adalah mahal — Digital Efficiency Report GDS 2012 menganggarkan sesetengah transaksi digital berkos serendah 20p berbanding hubungan telefon atau bersemuka yang berkos sehingga £8.62 — jadi kegagalan perubahan dalam perkhidmatan berhadapan orang awam bukan sekadar menelan masa kejuruteraan, ia menolak paun sebenar ke atas bajet pusat hubungan (lihat [penjimatan peralihan saluran](../penjimatan-peralihan-saluran/)).

## Matematiknya

```
Kekerapan penempatan   = penempatan pengeluaran / masa
Masa pendahuluan perubahan = t(penempatan) − t(commit), median
Kadar kegagalan perubahan  = perubahan gagal / jumlah perubahan × 100
Masa untuk memulihkan (MTTR) = t(dipulihkan) − t(kegagalan), median
Kebolehpercayaan           = pencapaian SLO (ketersediaan, latensi, ketepatan)
```

Terjemahan nilai awam:

```
Masa pendahuluan → minggu dalam saluran paip × CoD, lihat cost-of-delay-in-public-programmes
Kadar kegagalan  → kadar insiden berhadapan rakyat: CFR × kos setiap panggilan
                   pusat hubungan yang dialihkan (atau setiap transaksi berkanun yang gagal)
Masa pemulihan   → kemudaratan gangguan perkhidmatan: MTTR × (tuntutan/permohonan
                   yang tersekat setiap jam) × kos hiliran atau kehilangan kesejahteraan setiap unit
Kebolehpercayaan → diskaun manfaat: perkhidmatan dengan ketersediaan 99% menyampaikan
                   ≈ 0.99 daripada manfaat yang dimodelkan — analog penyampaian
                   bagi kekurangan pengambilan atau pematuhan
```

## Contoh yang diselesaikan

Pasukan portal tuntutan faedah sebuah pihak berkuasa tempatan, sebelum dan selepas pelaburan kejuruteraan penyampaian:

```
                    Sebelum     Selepas
Penempatan          bulanan     mingguan
Masa pendahuluan    8 minggu    5 hari
CFR                 30%         10%
MTTR                3 hari      4 jam
```

Pasukan itu menghantar sekitar 25 penambahbaikan/tahun, nilai purata £8,000/minggu ([kos kelewatan](../kos-kelewatan-dalam-program-awam/)). Memendekkan masa pendahuluan kira-kira 7.3 minggu menarik ke hadapan aliran manfaat setiap penambahbaikan: 25 × 7.3 × 8,000 ≈ **£1,460,000/tahun** nilai yang disampaikan lebih awal. Pada kadar kegagalan: 25 × (0.30 − 0.10) = 5 perubahan gagal kurang/tahun; setiap perubahan gagal pada portal awam lazimnya mengalihkan anggaran 2,000 rakyat ke saluran telefon pada £8.62 berbanding 20p, kos bersih kira-kira £8.42 × 2,000 ≈ £16,840 setiap insiden, jadi mengelakkan 5 insiden menjimatkan ≈ **£84,200/tahun**. Pelaburan kejuruteraan penyampaian dinilai dalam mata wang yang sama seperti mana-mana kes nilai awam lain.

## Contoh kerja bersambung: kebolehpercayaan

Jika portal beroperasi pada ketersediaan 97% dan bukan sasaran 99.5%, dan setiap mata peratusan masa henti dimodelkan sebagai 2% tuntutan hilang akibat pengabaian, perkhidmatan itu menyampaikan kira-kira 0.975 daripada manfaat £2 juta/tahun yang dimodelkan — diskaun manfaat £50,000/tahun yang tidak pernah dipaparkan oleh papan pemuka masa operasi semata-mata.

## Kaitan dengan kejuruteraan perisian

Metrik DORA ialah metrik operasi perkhidmatan awam dengan pakaian berbeza: masa pendahuluan dipetakan kepada [piawaian perkhidmatan dan metrik transaksi](../piawaian-perkhidmatan-dan-metrik-transaksi/); kadar kegagalan perubahan dipetakan kepada kadar kerja semula dan aduan; MTTR dipetakan kepada berapa lama perkhidmatan berkanun tidak tersedia kepada pihak yang menuntut. Teknik penambahbaikan dipindahkan dua hala kerana kedua-duanya ialah sistem giliran di bawah kekangan akauntabiliti — lihat [metrik aliran dalam penyampaian kerajaan](../metrik-aliran-dalam-penyampaian-kerajaan/) untuk matematik giliran yang mendasarinya. Perhatikan juga penemuan DORA 2025 bahawa penggunaan AI berkorelasi dengan daya pemprosesan lebih tinggi tetapi kestabilan yang *lebih buruk* — intervensi dengan kedua-dua keberkesanan dan kesan sampingan, yang tepat analisis manfaat bersih yang diselesaikan oleh topik [produktiviti AI](../produktiviti-ai-dalam-sektor-awam/) kumpulan ini.

## Perangkap

- **Permainan metrik**: mengembungkan bilangan penempatan dengan keluaran tanpa operasi, atau mengecualikan hotfix daripada kiraan kegagalan perubahan. Takrifkan peristiwa sepersis standard perkhidmatan berkanun mentakrifkan "transaksi yang berjaya".
- **Jadual liga antara jabatan**: kelompok DORA membandingkan amalan penyampaian, bukan perkhidmatan dengan profil risiko berbeza; sistem pembayaran cukai yang dinilai "tinggi" mungkin postur yang betul sedangkan "elit" akan melulu memandangkan keperluan jaminan.
- **Mengoptimumkan satu metrik sahaja**: kelajuan tanpa kadar kegagalan perubahan ialah tukar ganti klasik antara daya pemprosesan dan ketidakstabilan — laporkan keempat-empatnya bersama, bukan sebagai satu skor.

## Sumber

- DORA research and the annual *Accelerate State of DevOps Report*. <https://dora.dev/>
- Forsgren N, Humble J, Kim G, *Accelerate: The Science of Lean Software and DevOps*, IT Revolution Press, 2018.
- Cabinet Office, Digital Efficiency Report, 2012.
- DORA, 2025 State of AI-assisted Software Development report. <https://dora.dev/dora-report-2025/>
