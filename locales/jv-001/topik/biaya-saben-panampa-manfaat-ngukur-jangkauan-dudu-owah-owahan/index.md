# Biaya saben Panampa Manfaat: Ngukur Jangkauan, Dudu Owah-owahan

Biaya saben panampa manfaat (cost per beneficiary) iku total biaya program dibagi jumlah wong unik sing nampa layanan — sapa waé sing kena, ora preduli apa kahanané tenan owah. Iki angka efisiensi paling cepet sing bisa dikasilaké sawijining organisasi, amarga "sapa sing dilayani" meh tansah wis ana ing sistem manajemen kasus, déné "sapa sing dibantu" biasané ora.

## Kenapa penting

Para pendana terus-terusan njaluk biaya saben panampa manfaat, kanthi alesan sing bisa dipertanggungjawabaké: kasedhiya langsung, bisa dibandhingaké ing portofolio program sing beda banget, lan jujur bab jangkauan kanthi cara sing ora diwenèhi klaim outcome — sing butuh luwih suwé diverifikasi lan luwih gampang digedhèkake. Charities SORP (Statement of Recommended Practice) Britania Raya, sing ngatur cara lembaga amal nglaporaké miturut FRS 102, mrèntahaké laporan taunan para wali amanah njlentrehaké prestasi marang tujuan, nanging akèh akuntansi manajemen lembaga amal cilik isih baku nganggo biaya unit adhedhasar jangkauan amarga murah digawé lan ramah audit.

Bebayané yaiku nganggep biaya saben panampa manfaat kaya-kaya mangsuli pitakonan sing ora bisa dijawab: apa dhuwit kuwi mujarab. Deleng [biaya saben outcome](../biaya-saben-outcome-ngukur-biaya-kanggo-owah-owahan-sing-tenan-kedadéan/) kanggo metrik sing tenan mangsuli iku, lan [outcome lawan output](../outcome-vs-output-bedane-asil-langsung-lan-owah-owahan-nyata/) kanggo pambédan dhasaré. Biaya saben panampa manfaat iku metrik triase lan jangkauan sing sah — ngandhani pendana sepira dhuwit bisa mulur — nanging biaya saben panampa manfaat sing murah bisa tegesé efisiensi sejati utawa layanan sing tipis nganti ora ngowahi apa-apa.

## Petungan

```
Biaya saben panampa manfaat = Total biaya program / Jumlah wong unik sing dilayani

Pambandhingan:
Biaya saben outcome      = Total biaya program / Jumlah wong sing nggayuh outcome sing ditemtokaké

Biaya saben panampa manfaat tansah ≤ biaya saben outcome, amarga populasi outcome iku subset
(asring cilik) saka populasi panampa manfaat.
```

## Conto petungan

**Bank pangan, taun padha karo conto biaya-saben-outcome**:

- Total biaya program: £450.000
- Kluwarga unik sing dilayani (telung paket utawa luwih): 1.800

```
Biaya saben panampa manfaat = £450.000 / 1.800 = £250 saben kluwarga sing dilayani
```

Bandhingna loro metrik kuwi sisih-sisih:

| Metrik | Penyebut | Asil |
|---|---|---|
| Biaya saben panampa manfaat | 1.800 kluwarga dilayani | £250 |
| Biaya saben outcome | 630 kluwarga nggayuh keamanan pangan | £714 |

Pendana sing mung weruh £250 bisa nyimpulaké iki lembaga amal sing efisien banget. Pendana sing weruh loro-lorone angka bisa takon pitakonan sing luwih migunani: apa celah antara jangkauan (1.800) lan outcome (630) iku celah pangumpulan data, celah rancangan, utawa pangrasa jujur bab sepira angel keamanan pangan digayuh nganggo bantuan pangan waé?

**Lembaga amal latihan kerja, ilustratif**: biaya saben panampa manfaat (kadaftar) = £2.000; biaya saben outcome (kerja lestari ing 6 sasi) = £11.000, amarga mung 18% peserta ngrampungaké program lan nemu kerja lestari. Loro angka kuwi bedané faktor lima iku umum ing ngendi waé tarif penyelesaian utawa daya tahan murah — lembaga amal latihan lan bank pangan sacara struktural padha ing kéné.

## Gegayutan karo rekayasa piranti lunak

Biaya saben panampa manfaat iku metrik baku ing piranti lunak nirlaba amarga iku metrik sing langsung metu saka rekaman panampa manfaat tanpa kerja tambahan: gawé kasus, cathet layanan, étung baris. Mbangun sistem sing uga ndhukung biaya saben outcome tegesé kanthi sengaja nambah entitas kelas siji kapindho — kedadéan outcome, kanthi tanggal lan ditemtokaké mandiri saka pangiriman layanan — lan nolak godaan supaya "kasus ditutup" dadi gantiné "outcome digayuh." Nalika nemtokaké ruang lingkup platform manajemen hibah utawa CRM, takonna endi saka loro metrik sing tenan ditampilaké saben dasbor, lan labelana kanthi cocog; nyampurké loro-lorone ing siji ubin "dampak" iku salah siji panyebab ing level piranti lunak sing paling umum saka jebakan ing ngisor. Deleng [basis data biaya unit](../basis-data-biaya-satuan-proksi-keuangan-sing-wis-diteliti-kanggo-outcome-sosial/) kanggo benchmark salah siji metrik sawisé dilabèli bener.

## Jebakan

- **Nampilaké biaya saben panampa manfaat minangka dampak.** Iku ngukur jangkauan, dudu owah-owahan. Labelana dasbor lan laporan "biaya saben wong sing dilayani," dudu "biaya saben wong sing dibantu."
- **Ngétung dobel ing antarané program.** Wong sing nampa paket pangan lan nasihat utang saka lembaga amal padha iku siji panampa manfaat, dudu loro, yèn penyebut dimaksudaké nggambaraké jangkauan unik; putusna lan dokumentasiné konvènsi endi sing dienggo.
- **Nganggep angka sing luwih murah tansah luwih apik.** Klub nedha awan drop-in bakal tansah ngalahaké layanan manajemen kasus intensif ing biaya saben panampa manfaat, amarga luwih murah nyentuh wong kanthi entheng. Iku ora ngandhani apa-apa bab endi sing ngasilaké owah-owahan luwih awèt saben pound.
- **Ngganti penyebut ing antarané laporan kanthi meneng-meneng.** Angka biaya-saben-panampa-manfaat sing dikutip ing siji laporan taunan marang "kadaftar" lan ing sabanjuré marang "rampung" ora bisa dibandhingaké taun-ing-taun; pratelakna penyebuté saben-saben.

## Sumber

- Charity Commission for England and Wales, guidance on charity reporting. <https://www.gov.uk/government/organizations/charity-commission>
- Charities SORP (FRS 102). <https://www.charitysorp.org/>
- New Philanthropy Capital (NPC), "Four Pillar Approach." <https://www.thinknpc.org/resource-hub/four-pillar-approach/>
