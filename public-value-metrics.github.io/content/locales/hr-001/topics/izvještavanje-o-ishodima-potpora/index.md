# Izvještavanje o ishodima potpora (IRIS+)

Izvještavanje o ishodima potpora je praksa u kojoj korisnici potpora izvještavaju financijere standardiziranim, usporedivim metrikama ishoda, za razliku od toga da svaki financijer smisli vlastiti predložak izvještavanja. IRIS+, koji održava Global Impact Investing Network (GIIN), najšire je prihvaćen takav standard: katalog unaprijed definiranih društvenih, okolišnih i financijskih metrika učinka koje ulagatelji s učinkom, a sve češće i zaklade koje dodjeljuju potpore, traže ili preporučuju korisnicima.

## Zašto je važno

Prije standardiziranog izvještavanja svaka je zaklada od korisnika tražila drukčiji skup pokazatelja u drukčijem formatu, pa je srednje velika dobrotvorna organizacija s deset financijera mogla voditi deset paralelnih procesa izvještavanja za isti posao koji se preklapa: dobro dokumentiran uzrok opterećenja izvještavanjem koje standardizacija ishoda potpora treba smanjiti. IRIS+ to rješava tako što financijerima i korisnicima daje zajednički rječnik: Core Metrics Sets (osnovni skupovi metrika) grupirani po temama (npr. pristupačno stanovanje, pristup čistoj energiji, financijska uključenost), a svaka je metrika definirana dovoljno precizno da „stvorena radna mjesta” ili „opsluženi kućanstva” znače isto bez obzira tko izvještava, te usklađena s Ciljevima održivog razvoja UN-a (SDG) kako bi financijer mogao podatke s razine korisnika zbrojiti u narativ SDG-a na razini portfelja. GIIN izvještava da metrike IRIS-a koristi otprilike polovica ulagatelja s učinkom te velika većina upravitelja fondova, banaka i razvojnih financijskih institucija aktivnih na tom području.

Standardizacija je najvažnija tamo gdje se dodiruje s [ishodima naspram izlaznih rezultata](../ishodi-naspram-izlaznih-rezultata/): IRIS+ usmjerava izvještavanje prema definiranim metrikama ishoda i učinka, a ne prema onome što postojeći sustav vođenja predmeta korisnika slučajno bilježi, a upravo je to jaz koji opisuju [trošak po ishodu](../trošak-po-ishodu/) naspram [troška po korisniku](../trošak-po-korisniku/).

## Matematika

Izvještavanje o ishodima potpora je okvir i proces, a ne formula:

```
1. Funder selects a Core Metrics Set relevant to the grant's theme
   (e.g. IRIS+ "Financial Inclusion" or "Sustainable Agriculture")
2. Each metric has a fixed definition, unit, and calculation method
   published by GIIN — not invented per-funder
3. Grantee reports against the same metric definitions across all
   its funders using that standard, cutting duplicate reporting effort
4. Funder aggregates grantee-level metrics into portfolio-level reporting,
   comparable year over year and across grantees using the same metric
```

Dobitak u učinkovitosti je kombinatoran: standardizacija N financijera × M korisnika na jedan zajednički rječnik pretvara N×M posebnih odnosa izvještavanja u otprilike N+M preslikavanja prema jednom standardu.

## Primjer iz prakse

**Korisnik s tri financijera, prije standardizacije**: izvještava o „opsluženim osobama” Financijeru 1 prema definiciji broja osoba, o „dosegnutim korisnicima” Financijeru 2 prema definiciji kućanstva, a o „pogođenim pojedincima” Financijeru 3 prema definiciji epizode usluge (pa se osoba koja dođe dvaput broji dvaput). Tri izvješća, tri broja, nijedan usporediv, i nijedan usporediv s brojevima drugog korisnika čak ni unutar portfelja istog financijera.

**Isti korisnik prema IRIS+**: izvještava prema definiranoj IRIS+ metrici dosegnutih pojedinaca uz definiranu metriku ishoda iz odgovarajućeg osnovnog skupa metrika, koristeći za obje GIINovu objavljenu metodologiju izračuna. Sva tri financijera sada primaju isti broj, izračunan na isti način, i mogu usporediti trošak ovog korisnika po IRIS+ definiranoj jedinici s drugim korisnicima u svojem portfelju koristeći identičnu metriku: ekvivalent, na razini infrastrukture izvještavanja, zajedničke [baze jediničnih troškova](../baze-jediničnih-troškova/).

## Veza s programskim inženjerstvom

Platforme za upravljanje potporama trebaju identifikatore IRIS+ metrika tretirati kao strani ključ, a ne kao slobodan tekst: pohranjivanje objavljenog koda metrike uz vrijednost koju je korisnik prijavio (umjesto lokalno izmišljenog polja imenovanog „korisnici”) omogućuje kasnije agregiranje među financijerima i portfeljima bez projekta čišćenja podataka. Ondje gdje platforma mora podržavati financijere koji nisu usvojili IRIS+, pragmatično je rješenje dopustiti da se lokalna metrika preslika na najbližu IRIS+ definiciju umjesto da se svaki financijer odmah prisiljava na standard: usporedivost se postupno poboljšava kako se sve više grafa preslikava na zajedničke identifikatore. Vidi srodnu temu [trošak po ishodu](../trošak-po-ishodu/) o tome za što prikupljene brojke treba koristiti.

## Zamke

- **Izjednačavanje usvajanja IRIS+ s automatskom usporedivošću.** Dva korisnika mogu izvještavati prema istoj IRIS+ metrici i svejedno ne biti usporediva ako se razlikuju kvaliteta temeljnih podataka ili kontrafaktualne pretpostavke; standard utvrđuje definicije, a ne strogost mjerenja.
- **Metrike „usklađene s IRIS-om” koje je izmislio financijer.** Metrika koja je samo nadahnuta jezikom IRIS+, a nije stvarna objavljena definicija, ponovno uvodi fragmentaciju koju standard treba riješiti.
- **Zamor izvještavanjem zbog prevelikog odabira.** Zahtijevati od korisnika izvještavanje prema cijelom osnovnom skupu metrika kada su za odluku važne samo dvije-tri metrike ponovno stvara problem opterećenja u standardiziranom omotu.
- **Nema nijedne metrike ishoda.** IRIS+ uključuje mnoge čiste metrike izlaznih rezultata (npr. broj opsluženih osoba); odabir samo njih, bez ijedne metrike na razini ishoda, daje izvještavanje oblika [troška po korisniku](../trošak-po-korisniku/) pod oznakom izvještavanja o ishodima.

## Izvori

- GIIN, IRIS+ system. <https://iris.thegiin.org/>
- GIIN, IRIS+ Catalog of Metrics. <https://iris.thegiin.org/metrics/>
- GIIN, About IRIS+. <https://iris.thegiin.org/about/>
