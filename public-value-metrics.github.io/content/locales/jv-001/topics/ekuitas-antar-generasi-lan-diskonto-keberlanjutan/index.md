# Ekuitas Antar Generasi lan Diskonto Keberlanjutan

Ngdiskonto biaya lan manfaat mbesuk menyang nilai saiki iku praktik standar ing appraisal publik — deleng [social discount rate](../tingkat-diskonto-sosial-ngowahi-biaya-lan-manfaat-mangsa-ngarep-dadi-nilai-saiki/) — nanging tingkat diskonto positif apa wae, yen dikompon sajrone puluhan utawa atusan taun, nyusutake masa depan sing adoh menyang nol miturut istilah saiki. Kanggo keputusan kanthi akibat satus taun utawa luwih ing ngarep — owah-owahan iklim, sampah nuklir, kekurangan keanekaragaman hayati, keberlanjutan pensiun — kasunyatan matematika kuwi dadi kasunyatan etis: diskonto standar bisa nggawe cilaka katastrofik marang generasi sabanjure katon, miturut istilah nilai saiki, meh ora pantes disingkiri.

## Kenapa penting

Persamaan Ramsey, sing diturunake Frank Ramsey ing 1928, ngurai tingkat diskonto dadi rong komponen: preferensi wektu murni (δ, pira kita mung luwih seneng saiki tinimbang mengko, ora gumantung kasugihan) lan efek pertumbuhan kasugihan (η×g, pira kita ngdiskonto amarga generasi mbesuk dikarepake luwih sugih, mula siji pound tambahan kurang penting kanggo dheweke). Tingkat diskonto jangka dawa standar Green Book Inggris dibangun ing persamaan iki lan ngetutake jadwal sing *mudhun* tinimbang tingkat tetep — desain sing ngakar ing karya Martin Weitzman babagan "gamma discounting," sing nuduhake yen tingkat diskonto mbesuk dhewe ora mesthi, tingkat certainty-equivalent sing kudu ditrapake sacara matematis mudhun sajrone wektu, amarga skenario tingkat endhek dadi dominan nalika luwih adoh ndeleng. Stern Review on the Economics of Climate Change (2006), dipimpin Sir Nicholas Stern, nggawa debat etis luwih adoh: Stern ngajokake yen preferensi wektu murni kudu disetel cedhak nol (dheweke nggunakake δ ≈ 0,1%, nggambarake mung kemungkinan cilik katastrofe sing mungkasi peradaban, dudu preferensi sejati kanggo saiki tinimbang mbesuk), ngasilake tingkat diskonto efektif sing luwih endhek banget tinimbang praktik Green Book konvensional lan, selaras, kasus saiki sing luwih gedhe banget kanggo tindakan iklim. Para kritikus (utamane William Nordhaus) mbantah yen tingkat cedhak-nol Stern bisa dipertahankan sacara etis nanging ora konsisten karo prilaku nabung lan investasi sing diamati nyata. Ora setuju iki dudu cathetan kaki teknis — iku alesan paling gedhe kenapa rong ekonom sing padha ketat bisa tekan kesimpulan sing beda banget babagan pira generasi saiki kudu ngorbanake kanggo mbesuk, lan iku alesan kenapa piranti lunak sing ndhukung appraisal investasi publik cakrawala dawa kudu mbukak asumsi diskonto-ne tinimbang ngubur ing standar spreadsheet.

## Petungan

```
Persamaan Ramsey:   r = δ + η × g

  r = social discount rate
  δ = preferensi wektu murni (tingkat ora sabar, ora gumantung kasugihan)
  η = elastisitas utilitas marjinal konsumsi (nilai konsumsi tambahan sing
      mudhun nalika wong saya sugih)
  g = tingkat pertumbuhan konsumsi per kapita sing dikarepake

Jadwal jangka dawa mudhun Green Book (kira-kira, pita sing diterbitake saiki):
  Taun 0–30:     3,5%
  Taun 31–75:    3,0%
  Taun 76–125:   2,5%
  Taun 126–200:  2,0%
  Taun 201–300:  1,5%
  Taun 301+:     1,0%

Parameter Stern Review: δ ≈ 0,1%, η = 1, g ≈ 1,3%  → r ≈ 1,4%
```

## Conto petungan

**Nilai saiki saka £1 cilaka sing disingkiri 100 taun mbesuk**, miturut telung rezim diskonto:

```
Tingkat jangka cendhak Green Book tetep (3,5%, ditahan konstan 100 taun):
  PV = 1 / (1,035)^100 ≈ 1 / 31,19 ≈ £0,032   (3,2 pence)

Jadwal mudhun Green Book (3,5% kanggo taun 1–30, 3,0% kanggo taun 31–75,
2,5% kanggo taun 76–100):
  faktor(1–30)   = 1,035^30  ≈ 2,807
  faktor(31–75)  = 1,03^45   ≈ 3,782
  faktor(76–100) = 1,025^25  ≈ 1,854
  total faktor ≈ 2,807 × 3,782 × 1,854 ≈ 19,68
  PV = 1 / 19,68 ≈ £0,051   (5,1 pence)

Preferensi wektu murni cedhak-nol gaya Stern (r ≈ 1,4% tetep):
  PV = 1 / (1,014)^100 ≈ 1 / 3,997 ≈ £0,250   (25,0 pence)
```

£1 cilaka sing disingkiri satus taun mbesuk regane 3,2p, 5,1p, utawa 25p saiki gumantung mung marang konvensi diskonto endi sing digunakake — kisaran meh wolung kali sing nemtokake apa proyek mitigasi iklim kanthi biaya awal dhuwur lan asil satus taun mbesuk bisa ngluwihi ambang NPV positif babar pisan. Iki mekanisme ing mburi peringatan utama topik iki: ing tingkat tetep sing positif kanthi bermakna apa wae, cilaka mbesuk sing cukup adoh dihapus sacara aritmetis saka appraisal, preduli keparahan nyatane.

## Gegayutan karo rekayasa piranti lunak

- Piranti appraisal utawa business case cakrawala dawa apa wae (infrastruktur, adaptasi iklim, pemodelan pensiun) kudu ngimplementasikake jadwal *mudhun* Green Book, dudu siji tingkat tetep — standar tingkat tetep meneng-menengan nanemake bias anti-masa-depan sing luwih kuwat tinimbang sing ditetepake pedoman pemerintah Inggris saiki.
- Tingkat diskonto lan cakrawala kudu tansah dibukak minangka parameter sing katon lan bisa diaudit ing piranti lunak appraisal, kanthi sensitivitas itungan marang iku ditampilake kanthi eksplisit (kaya ing conto petungan ing ndhuwur) — ngubur tingkat ing file konfigurasi ngundang persis "pilihan etis sing didhelikake" sing diperingatake debat Stern-Nordhaus; iki dipasangake karo titik transparansi ing [akuntansi modal alam](../akuntansi-modal-alam/) lan dadi dhasar topik [social discount rate](../tingkat-diskonto-sosial-ngowahi-biaya-lan-manfaat-mangsa-ngarep-dadi-nilai-saiki/) umume.
- Ing ngendi manfaat program sacara eksplisit antar generasi (pertahanan banjir, pemulihan modal alam, infrastruktur digital jangka dawa), [analisis biaya-manfaat sosial](../analisis-biaya-manfaat-sosial/) kudu nglaporake asil miturut paling ora rong asumsi diskonto (standar Green Book lan kasus sensitivitas tingkat endhek) tinimbang siji prakiraan titik, supaya pangambil keputusan weruh kepriye pilihan tingkat diskonto piyambak ngobahake wangsulan.

## Jebakan

- **Nampilake siji NPV sing didiskon tanpa kisaran sensitivitas** — amarga pira tingkat diskonto piyambak ngowahi wangsulan kanggo proyek cakrawala dawa, NPV siji tingkat ngluwihi presisi sacara material; tansah laporake kisaran sing nyakup paling ora standar Green Book lan skenario tingkat endhek.
- **Nerapake tingkat tetep jangka cendhak (3,5%) marang appraisal pirang-pirang abad** — pedoman Green Book dhewe nemtokake jadwal mudhun persis amarga tingkat tetep dianggep ora cocog ngluwihi kira-kira 30 taun; nggunakake iku apa wae nggawe biaya jangka dawa kurang diitung.
- **Nganggep δ (preferensi wektu murni) minangka parameter teknis murni** — nilai cedhak-nol Stern lan nilai implisit Green Book sing luwih dhuwur loro-lorone bisa dipertahankan mung minangka posisi etis babagan pira bobot sing diutang saiki marang mbesuk, dudu angka "bener" utawa "salah" sacara empiris; piranti lunak kudu nggawe asumsi katon tinimbang nampilake siji angka minangka bener sacara objektif.

## Sumber

- Stern N. "The Economics of Climate Change: The Stern Review." Cambridge University Press, 2006.
- Ramsey FP. "A Mathematical Theory of Saving." The Economic Journal, 1928.
- Weitzman ML. "Gamma Discounting." American Economic Review, 2001.
- HM Treasury. "The Green Book: Central Government Guidance on Appraisal and Evaluation" (Annex 6,
  discount rate schedule).
- Nordhaus WD. "A Review of the Stern Review on the Economics of Climate Change." Journal of
  Economic Literature, 2007.
