# Prihranki zaradi preusmeritve kanalov

Prihranki zaradi preusmeritve kanalov (channel shift) so načrtovano zmanjšanje stroškov s selitvijo obsega transakcij iz dragih kanalov (telefon, osebni obisk na okencu, papirna pošta) v poceni digitalno samopostrežbo. To je finančni motor načela »digitalno privzeto« in hkrati postavka poslovnega primera, ki je najverjetneje napačna, saj predpostavka, na kateri sloni, da se kanali brez povezave krčijo z rastjo digitalne uporabe, drži le včasih.

## Zakaj je pomembno

Aritmetika se zdi neizpodbitna, če uporabimo številke [stroška na transakcijo](../strošek-na-transakcijo/) iz Digital Efficiency Report: če milijon transakcij preselimo z osebnega obiska za 8,62 £ na digitalno za 0,15 £, je prihranek več kot 8 milijonov. A prihranek postane denar, sproščen za prerazporeditev, šele ko se *stalna zmogljivost* krčečega se kanala dejansko ukine (sedeži klicnega centra, osebje na okencih, minute telefonske pogodbe), programi digitalne preobrazbe lokalnih oblasti pa so večkrat ugotovili, da skupni obseg stikov ne pada v skladu z digitalno uporabo. Raziskave programov digitalne preobrazbe lokalnih oblasti in organov, kot sta Socitm in Local Government Association, so dokumentirale ponavljajoč se vzorec: digitalni kanali pritegnejo resnično nove stike (državljani, ki ne bi telefonirali ali prišli, zdaj to storijo, ker je lažje), pomemben delež »digitalnih« transakcij pa se na pol poti ponesreči in vseeno ustvari telefonski klic. Zato obseg telefonskih klicev pade veliko manj, kot bi nakazoval odstotek digitalne uporabe, v absolutnem smislu včasih sploh ne pade, čeprav njegov *delež* v skupnih stikih upade.

## Matematika

```
Bruto prihranek preusmeritve = preusmerjeni obseg × (strošek_stari_kanal − strošek_digitalno)

Neto (uresničeni) prihranek = bruto prihranek
                       − novo/senčno povpraševanje, ki ga ustvari lažji kanal
                       − strošek povpraševanja zaradi neuspeha (digitalni
                         neuspehi, ki vseeno ustvarijo telefonski klic ali
                         obisk okenca)
                       − strošek neukinjene stalne zmogljivosti (klicni
                         center lahko zmanjša osebje le v diskretnih
                         enotah; 15 % padec obsega redko omogoča zmanjšanje
                         15 % zaposlenih)

Prag uresničitve: prihranki so unovčljivi šele, ko obseg pade pod raven,
ki jo stari kanal lahko zasede z naslednjo manjšo diskretno stopnjo
zmogljivosti (npr. izguba ene cele izmene, ene cele mize, enega
pogodbenega razreda zaposlenih)
```

## Praktični primer

**Storitev obnove parkirne kartice za invalide pri okrožnem svetu**: 60.000 obnovitev na leto, prej 100 % po telefonu/papirju po 6,40 £ na transakcijo. Nova digitalna storitev se zažene in v letu doseže 65 % digitalno uporabo po 0,30 £ na digitalno transakcijo.

```
Naivni (bruto) izračun prihranka:
  39.000 preusmerjenih × (6,40 £ − 0,30 £) = 237.900 £/leto

Kaj se je dejansko zgodilo, po podatkih klicnega centra sveta:
  Obseg telefonskih klicev je padel s 60.000/leto na 46.000/leto (−23 %, ne −65 %)
  ker: 9.000 digitalnih poti je spodletelo in ustvarilo naknadni klic
       (uhajanje povpraševanja zaradi neuspeha) in 4.000 ljudi, ki prej
       sploh niso obnavljali, zdaj obnavlja, ker so ugotovili, da je
       preprosto na spletu (senčno povpraševanje – resnična izboljšava
       dostopa, a ne prihranek)

  Telefonski klicni center ima osebje v razredih po 8.000 klicev/FTE;
  padec za 14.000 klicev (60.000 → 46.000) sprosti 1,75 FTE, v praksi
  zaokroženo navzdol na 1 FTE, ki je dejansko prerazporejen = 34.000 £/leto

Uresničeni prihranek = 34.000 £/leto plus preprečeni strošek gradnje/delovanja
  digitalnega kanala za 39.000 transakcij ≈ 34.000 £ + (39.000 × 0,30 £
  digitalni strošek že upoštevan) – delček glavne številke 237.900 £,
  čeprav je storitev za uporabnike nedvomno boljša.
```

## Povezava s programskim inženirstvom

Inženirska lekcija je, da prihranke zaradi preusmeritve kanalov uresničijo *operativne* odločitve (razporejanje, ukinjanje, ponovna pogajanja o pogodbah), ne dostava programske opreme. Ekipa lahko izpolni vsako točko [digital-service-standard](../standard-digitalnih-storitev/) in vseeno ne doseže nobenega neto prihranka, če nihče ne ukine stalne zmogljivosti starega kanala. Instrumentacija povpraševanja zaradi neuspeha (kje na digitalni poti uporabniki odnehajo in kaj storijo potem) je rešljiv problem analitike lijaka in najučinkovitejša stvar, ki jo lahko inženirska ekipa stori za zaščito primera prihrankov. To je tudi neposredna povezava s [stroškom na transakcijo](../strošek-na-transakcijo/), ki ga povpraševanje zaradi neuspeha tiho napihuje. Glej [uresničevanje koristi](../uresničevanje-koristi/) za širšo disciplino preverjanja, ali se prihranki poslovnega primera res uresničijo, in [digitalno vključenost](../digitalna-vključenost/) za razlog, zakaj kanala brez povezave običajno ni mogoče in ne bi smelo popolnoma ukiniti.

## Pasti

- **Predpostavka zamenjave kanalov 1:1**: modeliranje digitalne uporabe kot neposrednega odštevanja od obsega telefona/okenca, ob zanemarjanju senčnega povpraševanja in uhajanja povpraševanja zaradi neuspeha, dokumentiranih v raziskavah preusmeritve kanalov v lokalni upravi.
- **Knjiženje bruto prihrankov pred ukinitvijo**: štetje prihranka v poslovnem primeru v letu, ko se uporaba dvigne, ne v letu (če sploh kdaj), ko se zmogljivost starega kanala dejansko zmanjša.
- **Zanemarjanje stopničaste narave stroškov osebja**: 20 % padec obsega se redko pretvori v 20 % padec stroškov, ker imajo klicni centri in okenca osebje v diskretnih razredih, ne zvezno.
- **Obravnavanje senčnega povpraševanja kot odpadka**: novi stiki prej izključenih ali odvrnjenih uporabnikov so resnično povečanje [javne vrednosti](../javna-vrednost/), ne napaka modela, in ga je treba poročati kot izid dostopa, ne odšteti kot šum.

## Viri

- Cabinet Office, Digital Efficiency Report (2012). <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
- Local Government Association, digital transformation and channel shift resources. <https://www.local.gov.uk/our-support/efficiency-and-income-generation/digital-transformation>
- Socitm, local public services digital insight research. <https://www.socitm.net/>
