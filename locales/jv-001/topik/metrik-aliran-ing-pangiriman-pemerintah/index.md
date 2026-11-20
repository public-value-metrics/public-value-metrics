# Metrik Aliran ing Pangiriman Pemerintah

Metrik aliran (flow metrics) — Hukum Little, watesan work-in-progress (WIP), lan efisiensi aliran — nggambarake kepriye cepet pagawean pindhah liwat sistem kanthi kapasitas winates. Papan sprint iku salah siji sistem kasebut; antrean klaim tunjangan, register permohonan perencanaan, utawa tumpukan kasus visa iku matematika sing persis padha nanging nganggo seragam beda.

## Kenapa penting

Beban kasus pemerintah iku sistem antrean, lan sistem antrean manut hukum antrean apa ana sing ngukur utawa ora. Periode penetapan statutori nggawe iki eksplisit: miturut rezim Town and Country Planning, umume permohonan perencanaan cilik nduwe target penetapan statutori 8 minggu lan permohonan gedhe 13 minggu — komitmen cycle-time sing langsung ditanem ing hukum. Tumpukan kasus suaka Home Office, sing bola-bali dipriksa National Audit Office lan Home Affairs Select Committee, yaiku kasus sing didokumentasi apik saka sistem publik ing ngendi work-in-progress tuwuh luwih cepet tinimbang throughput sajrone wektu sing suwe, nyurung cycle time adoh ngluwihi pangarep-arep statutori utawa layanan apa wae. Metrik aliran menehi insinyur lan manajer kasus kosakata kuantitatif bareng kanggo persis mode kegagalan iki, tinimbang ninggalake iku minangka "masalah tumpukan" kualitatif.

## Petungan

```
Hukum Little:  WIP = Throughput × Cycle Time
           →   Cycle Time = WIP / Throughput

Efisiensi aliran = wektu aktif (sentuh) / total cycle time   (Vacanti)

Efek watesan WIP: kanggo throughput tetep, ngurangi WIP separo kira-kira
ngurangi cycle time rata-rata separo (Hukum Little disusun ulang) — tuas
sing kasedhiya tanpa nambah jumlah karyawan.
```

Deleng [metrik DORA kanggo nilai publik](../metrik-dora-kanggo-nilai-publik/) kanggo matematika sepadan sing ditrapake ing pipeline deployment piranti lunak tinimbang penanganan kasus.

## Conto petungan

**Dinas perencanaan pemerintah daerah**: 400 permohonan mbukak ing sembarang wektu (WIP), tim ngrampungake 50 permohonan/minggu (throughput).

```
Cycle time = WIP / Throughput = 400 / 50 = 8 minggu
```

Iki tiba persis ing target statutori 8 minggu kanggo permohonan cilik — tanpa longgar, tegese variabilitas apa wae ing permintaan mlebu utawa wektu respon consultee nyurung penetapan ngluwihi tenggat legal.

**Efisiensi aliran**: saka 8 minggu kuwi (56 dina kalender), sawijining permohonan biasane nduwe watara 6 jam wektu pangolahan caseworker sing nyata.

```
Efisiensi aliran = 6 jam / (56 dina × 8 jam kerja/dina)
                 = 6 / 448 ≈ 1,3%
```

Tolok ukur Vacanti kanggo tim piranti lunak nempatake efisiensi aliran khas ing 15–20%; penanganan kasus pemerintah, kanthi pirang-pirang serah-terima consultee statutori lan jendhela konsultasi publik, asring mlaku siji tingkat besaran luwih endhek. 98,7% wektu "nunggu" iku panggonan ing ngendi wolung minggu kuwi bener-bener lunga — dudu ing kapasitas caseworker.

**Intervensi watesan WIP**: mbatesi permohonan mbukak saben caseworker dadi 15 tinimbang 25 tanpa wates (throughput tetep) nggeser WIP saka 400 dadi kira-kira 240 ing tim 16 wong:

```
Cycle time anyar = 240 / 50 = 4,8 minggu
```

Cycle time meh separo saka owah-owahan kabijakan, dudu tambahan staf — tuas sing padha sing ditarik tim pangiriman gaya DORA nalika mbatesi WIP sprint.

## Gegayutan karo rekayasa piranti lunak

Metrik aliran iku basa bareng antarane papan Kanban tim pangiriman lan lantai kasus sing diwangun piranti lunake: antrean caseworker lan antrean pull-request loro-lorone dikuwasani Hukum Little, lan loro-lorone ngelanggar target cycle-time kanthi cara sing padha — WIP kakehan relatif marang throughput. Iki langsung penting kanggo [cost of delay ing program publik](../biaya-tundha-ing-program-publik-nilai-publik-sing-ilang-saben-unit-wektu/): cycle time × CoD yaiku pound sing lagi nunggu ing antrean ing sembarang wektu, lan penting kanggo [service standards lan transaction metrics](../standar-layanan-lan-metrik-transaksi/), ing ngendi target wektu penyelesaian sing diterbitake iku komitmen cycle-time sing mung bisa didiagnosis metrik aliran nalika ora kecandhak. Piranti lunak sistem kasus kudu mbukak WIP lan cycle time minangka metrik operasional kelas siji, dudu dikubur ing sistem manajemen kasus sing ora ana sing nyuwun.

## Jebakan

- **Nambah watesan WIP tanpa ndandani bottleneck sing sejati**: yen watesane iku wektu respon consultee statutori eksternal, mbatesi WIP caseworker mung mindhahake antrean menyang hulu tinimbang nyepetake.
- **Nganggep efisiensi aliran minangka target kanggo dimanipulasi**: ngebut 1,3% wektu aktif meh ora ngowahi cycle time; tuas meh tansah ana ing kahanan nunggu, sing biasane tegese desain ulang proses, dudu kacepetan caseworker.
- **Ngabaikake variabilitas**: Hukum Little nggambarake rata-rata; beban kasus kanthi varians permintaan dhuwur mbutuhake kapasitas penyangga, dudu mung watesan WIP sing luwih ketat, yen ora tenggat statutori isih bakal ora kecandhak ing buntut sing molak-malik sanajan rata-rata nambah.
- **Ngukur WIP kanthi ora konsisten**: kasus sing "mbukak" ing sistem rekaman nanging sejatine macet nunggu pihak katelu isih dadi WIP; ngeculake iku nglipur angka tanpa ngowahi kasunyatan sing madhep warga.

## Sumber

- Vacanti D, *Actionable Agile Metrics for Predictability: An Introduction*, Actionable Agile Press, 2015.
- Reinertsen DG, *The Principles of Product Development Flow*, Celeritas Publishing, 2009.
- Ministry of Housing, Communities and Local Government, planning application statutory timescales. <https://www.gov.uk/guidance/making-an-application>
- National Audit Office, reports on Home Office asylum casework and accommodation. <https://www.nao.org.uk/>
