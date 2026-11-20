# Poročanje o izidih nepovratnih sredstev (IRIS+)

Poročanje o izidih nepovratnih sredstev je praksa, pri kateri prejemniki financerjem poročajo standardizirane, primerljive metrike izidov – namesto da bi vsak financer izumil svojo predlogo poročila. IRIS+, ki ga vzdržuje Global Impact Investing Network (GIIN), je najbolj razširjen tak standard: katalog vnaprej opredeljenih družbenih, okoljskih in finančnih metrik uspešnosti, ki jih vlagatelji vplivnih naložb in vse pogosteje tudi fundacije, ki dodeljujejo nepovratna sredstva, zahtevajo ali priporočajo prejemnikom.

## Zakaj je pomembno

Pred standardiziranim poročanjem je vsaka fundacija od prejemnikov zahtevala drug nabor kazalnikov v drugi obliki, srednje velika dobrodelna organizacija z desetimi financerji pa je lahko izvajala deset vzporednih postopkov poročanja za prekrivajoče se delo – dobro dokumentiran vzrok bremena poročanja, ki ga standardizacija izidov nepovratnih sredstev želi zmanjšati. IRIS+ to rešuje tako, da financerjem in prejemnikom da skupen besednjak: Osnovni nizi metrik (Core Metrics Sets), razvrščeni po temah (npr. cenovno dostopna stanovanja, dostop do čiste energije, finančna vključenost), vsaka metrika je opredeljena dovolj natančno, da »ustvarjena delovna mesta« ali »oskrbovana gospodinjstva« pomenijo isto, ne glede na to, kdo poroča, in uskladi se s Cilji trajnostnega razvoja Združenih narodov (SDG), tako da lahko financer podatke na ravni prejemnika združi v pripoved SDG na ravni portfelja. GIIN poroča, da metrike IRIS uporablja približno polovica vlagateljev vplivnih naložb in velika večina upraviteljev skladov, bank in razvojnih finančnih institucij, dejavnih na tem področju.

Standardizacija je najpomembnejša tam, kjer se dotika [izidov v primerjavi z izložki](../izidi-in-izložki/): IRIS+ potiska poročanje k opredeljenim metrikam izidov in učinkov namesto česar koli, kar slučajno beleži obstoječi sistem za upravljanje primerov prejemnika, kar je ravno vrzel, ki jo opisujeta [strošek na izid](../strošek-na-izid/) v primerjavi s [stroškom na upravičenca](../strošek-na-upravičenca/).

## Matematika

Poročanje o izidih nepovratnih sredstev je okvir in proces, ne formula:

```
1. Financer izbere Osnovni niz metrik, ustrezen temi nepovratnih sredstev
   (npr. IRIS+ »Finančna vključenost« ali »Trajnostno kmetijstvo«)
2. Vsaka metrika ima fiksno opredelitev, enoto in metodo izračuna,
   ki jih objavi GIIN – ne izumi jih vsak financer posebej
3. Prejemnik poroča po istih opredelitvah metrik vsem svojim financerjem,
   ki uporabljajo ta standard, kar zmanjša podvojeno prizadevanje za poročanje
4. Financer združi metrike na ravni prejemnika v poročanje na ravni portfelja,
   primerljivo iz leta v leto in med prejemniki, ki uporabljajo isto metriko
```

Dobiček v učinkovitosti je kombinatoričen: standardizacija N financerjev × M prejemnikov na en skupen besednjak spremeni N×M posebnih poročevalskih razmerij v približno N+M preslikav na en standard.

## Praktični primer

**Prejemnik s tremi financerji, pred standardizacijo**: financerju 1 poroča »oskrbovane ljudi« z opredelitvijo števila oseb, financerju 2 »dosežene upravičence« z opredelitvijo gospodinjstev, financerju 3 »prizadete posameznike« z opredelitvijo epizod storitve (torej oseba, ki obišče dvakrat, šteje dvakrat). Tri poročila, tri številke, nobena primerljiva, in nobena primerljiva s številkami drugega prejemnika niti znotraj portfelja istega financerja.

**Isti prejemnik pod IRIS+**: poroča po opredeljeni metriki IRIS+ doseženih posameznikov skupaj z opredeljeno metriko izida iz ustreznega Osnovnega niza metrik, po objavljeni metodologiji izračuna GIIN za obe. Vsi trije financerji zdaj prejmejo isto številko, izračunano na isti način, in lahko strošek tega prejemnika na enoto, opredeljeno po IRIS+, primerjajo z drugimi prejemniki v svojem portfelju z enako metriko – kar je, na ravni infrastrukture poročanja, enakovredno skupni [zbirki stroškov na enoto](../zbirke-enotnih-stroškov/).

## Povezava s programskim inženirstvom

Platforme za upravljanje nepovratnih sredstev bi morale identifikatorje metrik IRIS+ obravnavati kot tuji ključ, ne prostega besedila: shranjevanje objavljene kode metrike ob poročani vrednosti prejemnika (namesto lokalno izumljenega polja z imenom »upravičenci«) omogoča kasnejše združevanje med financerji in portfelji brez projekta čiščenja podatkov. Kjer mora platforma podpirati financerje, ki IRIS+ niso sprejeli, je pragmatična zasnova, da se lokalna metrika preslika na najbližjo opredelitev IRIS+, namesto da bi vse financerje takoj prisilili na standard – primerljivost se izboljšuje postopno, ko se več grafa preslika na skupne identifikatorje. Glej sorodno temo [strošek na izid](../strošek-na-izid/), za kaj naj se poročane številke uporabijo po zbiranju.

## Pasti

- **Obravnavanje uvedbe IRIS+ kot samodejne primerljivosti.** Dva prejemnika lahko poročata po isti metriki IRIS+ in še vedno nista primerljiva, če se razlikujeta kakovost osnovnih podatkov ali kontrafaktične predpostavke; standard določa opredelitve, ne strogosti merjenja.
- **Metrike, »usklajene z IRIS«, ki jih izumi financer.** Metrika, ki jo samo navdihuje jezik IRIS+, ni pa dejanska objavljena opredelitev, ponovno uvede razdrobljenost, ki jo standard želi rešiti.
- **Utrujenost od poročanja zaradi prevelike izbire.** Zahtevati od prejemnika poročanje po celotnem Osnovnem nizu metrik, ko sta odločitveno pomembni le dve ali tri metrike, ponovno ustvari problem bremena v standardizirani embalaži.
- **Nobene metrike izida.** IRIS+ vključuje veliko čistih metrik izložka (npr. števila oskrbovanih ljudi); izbira samo teh in nobene metrike ravni izida ustvari poročanje v obliki [stroška na upravičenca](../strošek-na-upravičenca/) pod oznako poročanja o izidih.

## Viri

- GIIN, IRIS+ system. <https://iris.thegiin.org/>
- GIIN, IRIS+ Catalog of Metrics. <https://iris.thegiin.org/metrics/>
- GIIN, About IRIS+. <https://iris.thegiin.org/about/>
