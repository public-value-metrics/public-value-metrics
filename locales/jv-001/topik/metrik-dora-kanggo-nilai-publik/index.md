# Metrik DORA kanggo Nilai Publik

Metrik DORA (DevOps Research and Assessment) — frekuensi deployment, lead time kanggo owah-owahan, tingkat kegagalan owah-owahan, lan wektu pamulihan layanan, ditambah keandalan minangka kaping lima — yaiku tolok ukur kinerja pangiriman paling kabukten ing industri piranti lunak. Yen diterjemahake menyang istilah akuntabilitas sektor publik, saben-saben dadi proksi langsung kanggo kepriye cepet, lan kepriye aman, nilai publik tekan warga.

## Kenapa penting

Riset DORA sak dasawarsa, diterbitake saben taun minangka *Accelerate State of DevOps Report* (metodologi Forsgren, Humble lan Kim, saiki dijalanake Google Cloud), ngelompokake tim dadi pelaku elit, dhuwur, menengah lan endhek. Tim elit nglakokake deployment miturut panjalukan, butuh kurang saka sedina saka commit menyang produksi, gagal kira-kira 5% saka owah-owahan, lan pulih ing sajrone kurang saka sejam; pelaku endhek nglakokake deployment sasi sepisan utawa luwih arang, butuh pirang-pirang sasi, gagal watara 40% owah-owahan, lan pulih ing pirang-pirang minggu. Ing pemerintahan, iki dudu metrik kesombongan rekayasa: Service Standard saka Government Digital Service mbutuhake tim "kanggo iterasi lan nambah kanthi kerep" lan bisa nanggapi kabutuhan pangguna kanthi cepet, lan departemen sing ora bisa deployment kanthi aman lan kerep sacara struktural ora bisa nyukupi standar kuwi, apa wae kandhane riset penggunane. Karya efisiensi digital Cabinet Office dhewe nemokake yen nyurung warga saka transaksi digital sing gagal utawa alon menyang saluran telpon utawa kertas iku larang — Digital Efficiency Report GDS 2012 ngira sawetara transaksi digital regane mung 20p dibandhingake kontak telpon utawa tatap muka sing regane nganti £8,62 — dadi kegagalan owah-owahan ing layanan sing madhep publik ora mung ngorbanake wektu rekayasa, nanging uga nyurung pound nyata menyang anggaran contact-centre (deleng [channel shift savings](../penghematan-saka-pamindhahan-saluran-layanan-saka-telpon-lan-loket-menyang-layanan-digital/)).

## Petungan

```
Frekuensi deployment   = deployment produksi / wektu
Lead time owah-owahan  = t(deploy) − t(commit), median
Tingkat kegagalan owah-owahan = owah-owahan gagal / total owah-owahan × 100
Wektu pamulihan (MTTR) = t(pulih) − t(gagal), median
Keandalan              = pencapaian SLO (ketersediaan, latensi, kebenaran)
```

Terjemahan menyang nilai publik:

```
Lead time      → minggu ing pipeline × CoD, deleng cost-of-delay-in-public-programmes
Tingkat gagal  → tingkat insiden sing madhep warga: CFR × biaya saben
                 telpon contact-centre sing dialihake (utawa saben transaksi statutori gagal)
Wektu pulih    → bilai gangguan layanan: MTTR × (klaim/permohonan sing
                 diblokir saben jam) × biaya hilir utawa kerugian kesejahteraan saben unit
Keandalan      → diskon manfaat: layanan kanthi ketersediaan 99% ngasilake
                 ≈ 0,99 saka manfaat sing dimodelake — analog pangiriman
                 saka kekurangan take-up utawa kepatuhan
```

## Conto petungan

Tim portal klaim tunjangan sawijining pemerintah daerah, sadurunge lan sawise investasi rekayasa pangiriman:

```
                    Sadurunge   Sawise
Deploy              saben sasi  saben minggu
Lead time           8 minggu    5 dina
CFR                 30%         10%
MTTR                3 dina      4 jam
```

Tim ngirim watara 25 peningkatan/taun, nilai rata-rata £8.000/minggu ([cost of delay](../biaya-tundha-ing-program-publik-nilai-publik-sing-ilang-saben-unit-wektu/)). Nyuda lead time kira-kira 7,3 minggu narik maju aliran manfaat saben peningkatan: 25 × 7,3 × 8.000 ≈ **£1.460.000/taun** nilai sing dikirim luwih awal. Ing tingkat kegagalan: 25 × (0,30 − 0,10) = 5 owah-owahan gagal luwih sithik/taun; saben owah-owahan gagal ing portal publik biasane ngalihake kira-kira 2.000 warga menyang saluran telpon kanthi £8,62 tinimbang 20p, biaya bersih kira-kira £8,42 × 2.000 ≈ £16.840 saben insiden, dadi nyingkiri 5 insiden ngirit ≈ **£84.200/taun**. Investasi rekayasa pangiriman dinilai nganggo mata uang sing padha karo kasus nilai publik liyane.

## Conto petungan lanjutan: keandalan

Yen portal mlaku kanthi ketersediaan 97% tinimbang target 99,5%, lan saben poin persentase downtime dimodelake minangka 2% klaim sing ilang amarga ditinggal, layanan ngasilake kira-kira 0,975 saka manfaat £2 yuta/taun sing dimodelake — diskon manfaat £50.000/taun sing ora tau dimunculake dening dashboard uptime murni.

## Gegayutan karo rekayasa piranti lunak

Metrik DORA iku metrik operasional layanan publik sing nganggo klambi beda: lead time cocog karo [service standards lan transaction metrics](../standar-layanan-lan-metrik-transaksi/); tingkat kegagalan owah-owahan cocog karo tingkat rework lan keluhan; MTTR cocog karo suwene layanan statutori ora kasedhiya kanggo pamohon. Teknik peningkatan bisa pindhah ing loro arah amarga loro-lorone iku sistem antrean sing tundhuk marang watesan akuntabilitas — deleng [flow metrics ing pangiriman pemerintah](../metrik-aliran-ing-pangiriman-pemerintah/) kanggo petungan antrean dhasare. Elinga uga temuan DORA 2025 yen adopsi AI gegandhengan karo throughput sing luwih dhuwur nanging stabilitas sing *luwih ala* — intervensi kanthi khasiat lan efek samping, persis analisis manfaat bersih sing ditindakake topik [produktivitas AI](../produktivitas-ai-ing-sektor-publik-bukti-tenan-bab-asisten-koding-ai-ing-pamaréntahan/) ing klompok iki.

## Jebakan

- **Manipulasi metrik**: nggelembungake jumlah deployment nganggo rilis kosong, utawa ngeculake hotfix saka itungan kegagalan owah-owahan. Tetepake kedadeyan kanthi tepat kaya standar layanan statutori nemtokake "transaksi sing sukses".
- **Tabel liga antar departemen**: klaster DORA mbandhingake praktik pangiriman, dudu layanan kanthi profil risiko beda; sistem pembayaran pajak sing dirating "dhuwur" bisa dadi sikap sing bener ing ngendi "elit" bakal ceroboh amarga syarat jaminan.
- **Ngoptimalake siji metrik wae**: kacepetan tanpa tingkat kegagalan owah-owahan iku trade-off klasik throughput-ketidakstabilan — laporake kaping papat bebarengan, dudu minangka siji skor.

## Sumber

- DORA research and the annual *Accelerate State of DevOps Report*. <https://dora.dev/>
- Forsgren N, Humble J, Kim G, *Accelerate: The Science of Lean Software and DevOps*, IT Revolution Press, 2018.
- Cabinet Office, Digital Efficiency Report, 2012.
- DORA, 2025 State of AI-assisted Software Development report. <https://dora.dev/dora-report-2025/>
