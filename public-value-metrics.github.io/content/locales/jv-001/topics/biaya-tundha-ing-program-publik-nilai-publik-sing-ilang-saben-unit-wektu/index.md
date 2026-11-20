# Biaya Tundha ing Program Publik (CoD): Nilai Publik sing Ilang Saben Unit Wektu

Cost of Delay (biaya tundha) iku nilai publik sing ilang saben unit wektu nalika program, layanan, utawa owah-owahan sistem *durung* dikirim. Iki metrik jembatan utama saka klompok topik iki: ngowahi "go-live mundur enem sasi" dadi pound saben minggu, utawa dadi WELLBY saben minggu, supaya tundha bisa dibahas ing mata uang sing padha karo business case dhéwé.

## Kenapa penting

Aturan Reinertsen — "yèn mung siji sing diétung, étungen Cost of Delay" — pindhah menyang pamaréntahan meh ora owah, amarga program publik utamané kena iku: business case disetujoni marang aliran manfaat ramalan, nanging aliran kuwi mung wiwit mili ing go-live, lan saben minggu mundur iku sak minggu nilai sing ilang sing ora ana sing nghargai ing register risiko. Pamriksan bola-bali National Audit Office marang peluncuran Universal Credit (deleng laporan "Rolling Out Universal Credit", <https://www.nao.org.uk/>) nggambaraké polané: mundur jadwal dilacak lan dilaporaké, nanging biaya pound-saben-minggu saka *durung* ngirim sistem sing direformasi marang gelombang pengeklaim sabanjuré arang dinyatakaké minangka angka utama, senajan iku angka sing kudu nyurung prioritas lan eskalasi. Tanpa angka CoD, program sing tertunda katon kaya masalah jadwal kanggo dewan pangiriman; karo angka iku, iku masalah erosi nilai kanggo pejabat akuntansi.

## Petungan

```
CoD = manfaat saben unit wektu sing ilang nalika durung dikirim   (£/minggu utawa WELLBY/minggu)

Total kerugian tundha = CoD × durasi tundha

Aliran manfaat sing dijumlahaké kanggo program publik:
  penghematan ngeculaké-kas   (nyuda penipuan/kesalahan, biaya sementara sing dihindari)
+ kapasitas non-kas dibébaské (jam petugas kasus/pejabat × biaya kebak)
+ manfaat kesejahteraan       (WELLBY × £13.000/WELLBY, pandhuan tambahan
                               kesejahteraan Green Book HMT, rega 2019)
```

Kanggo layanan madhep warga, denominasina ing kesejahteraan lan dhuwit — deleng [tahun urip sing disesuaikan kesejahteraan](../taun-urip-sing-disesuaikan-kesejahteraan-ukuran-standar-kepuasan-urip-kanggo-mbandhingaké-kabijakan/) kanggo unit dhasaré, lan [biaya kesempatan ing belanja publik](../biaya-kesempatan-ing-belanja-publik/) kanggo apa sing bisa dibiayai pound sing tertunda kuwi.

## Conto petungan

**Otoritas lokal**: upgrade sistem tunjangan omah nyuda kesalahan overpayment £150/klaim/taun ing 20.000 klaim aktif.

```
Manfaat taunan = 150 × 20.000 = £3.000.000/taun
CoD = 3.000.000 / 52 ≈ £57.700/minggu
Tundha implementasi 12 sasi biaya 52 × 57.700 ≈ £3.000.000 ing kesalahan sing bisa dihindari.
```

**Lembaga pamaréntah pusat**: layanan asesmen tunjangan disabilitas, dikirim enem sasi (26 minggu) luwih telat saka rencana, tegesé 200.000 pengeklaim/taun ngenteni rata-rata telung minggu luwih suwé kanggo keputusan. Saben minggu tambahan ketidakpastian finansial dimodhelaké minangka efek −0,0018 WELLBY (poin kepuasan urip):

```
Kerugian WELLBY saben pengeklaim = 3 × 0,0018 = 0,0054
Kerugian WELLBY taunan = 200.000 × 0,0054 = 1.080 WELLBY/taun
CoD_kesejahteraan = 1.080 / 52 ≈ 20,8 WELLBY/minggu
CoD_dhuwit = 20,8 × £13.000 ≈ £270.000/minggu nilai kesejahteraan
```

Tundha 26 minggu mula "biaya" kira-kira 540 WELLBY — regané watara £7 yuta miturut penilaian kesejahteraan Green Book — nggawé ulang tanggal go-live sing kelewatan minangka kedadéan kesejahteraan warga, dudu catetan kaki manajemen proyek.

## Gegayutan karo rekayasa piranti lunak

CoD iku sing ndadèkaké [metrik DORA](../metrik-dora-kanggo-nilai-publik/) lan [metrik aliran](../metrik-aliran-ing-pangiriman-pemerintah/) bisa diwaca sacara finansial: lead time ing pipeline × CoD iku dhuwit (utawa kesejahteraan) sing kobong ing antrian sadurungé tekan warga. Kanthi konkrit:

- **Prioritas**: urutna backlog miturut CoD ÷ durasi, dudu miturut senioritas pemangku kepentingan — padhané ing rékayasa piranti lunak saka syarat Green Book kanggo ngapraisal opsi miturut nilai, dudu miturut sapa sing njaluk.
- **Pengadaan**: siklus pengadaan kerangka 12–18 sasi duwé CoD; ngregani iku ngowahi kasus urgensi kanggo jalur dipercepat, lan langsung mlebu menyang kaputusan [bangun utawa tuku](../bangun-utawa-tuku-ing-pamaréntahan-mbandhingaké-pangembangan-khusus-karo-pengadaan-komersial/) ing ngendi wektu-menyang-nilai dadi panentu keputusan.
- **Kasus manfaat**: saben angka CoD sing dikutip nalika persetujuan kudu muncul maneh ing [realisasi manfaat](../realisasi-manfaat-mbuktèkaké-manawa-manfaat-ing-business-case-tenan-kawujud/) — yèn biaya tundha iku nyata, manfaat sing dipercepat kudu bisa diukur sawisé go-live.

## Jebakan

- **Nganggep CoD linear**: sawetara layanan publik duwé nilai bentuk-tenggat (tanggal kepatuhan statutori — CoD mlumpat menyang tingkat risiko penegakan sawisé tanggal, meh nol sadurungé) tinimbang tarif mingguan sing mulus. Golongna profil urgensi sadurungé ngalikan.
- **CoD ing output sing ora dibutuhaké sapa waé**: tundha mung duwé biaya yèn barang sing durung dikirim duwé nilai; sistem sing ora bakal dienggo sapa waé duwé CoD nol senajan sepira telaté.
- **Ngétung dobel tundha lan diskonto**: [tarif diskonto sosial](../tingkat-diskonto-sosial-ngowahi-biaya-lan-manfaat-mangsa-ngarep-dadi-nilai-saiki/) wis ngregani wektu ing cakrawala appraisal pirang taun; CoD iku versi operasional ing njero cakrawala kanggo minggu lan sasi. Enggoa CoD kanggo mundur jadwal, pergeseran NPV kanggo rephasing pirang taun.

## Sumber

- Reinertsen DG, *The Principles of Product Development Flow*, Celeritas Publishing, 2009.
- HM Treasury, Green Book supplementary guidance: wellbeing. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>
- National Audit Office, reports on Universal Credit rollout. <https://www.nao.org.uk/>
