# Skupni stroški lastništva (TCO) pri vladni informacijski tehnologiji

Skupni stroški lastništva so polni stroški življenjskega cikla sistema – nabava plus vsako leto delovanja – diskontirani na skupni datum. V vladni IT je najzanesljivejša napaka pri napovedovanju primerjava dobaviteljev ali možnosti samo po nabavni ceni, medtem ko delovanje in vzdrževanje običajno predstavljata nekje od polovice do štirih petin celotnega računa za življenjsko dobo.

## Zakaj je pomembno

Green Book HM Treasury zahteva, da finančni primer v vsakem poslovnem primeru po modelu petih primerov zajame stroške celotne življenjske dobe, ne le kapitalskih izdatkov – a National Audit Office je večkrat ugotovil, da oddelki odobrijo IT-naložbe na podlagi nepopolne ali optimistične napovedi tekočih stroškov, nato pa pravi operativni strošek odkrijejo šele, ko je sistem v živo in je kapitalska proračunska vrstica že zaprta. Technology Code of Practice Government Digital Service in Central Digital and Data Office (<https://www.gov.uk/guidance/the-technology-code-of-practice>) oddelke potiska k oblaku in običajnemu gostovanju deloma zato, ker naredi tekoče stroške vidne in primerljive, namesto da so zakopani v eni kapitalski nabavni številki, ki je ob odobritvi privlačno nizka, tri leta pozneje pa drago napačna.

## Matematika

```
TCO = strošek nabave + Σ(t=1..N) letni operativni strošek_t / (1+r)^t
      − preostala vrednost (diskontirana)

r = standardna družbena diskontna stopnja Green Book HM Treasury, 3,5 %/leto
    (padajoči razpored stopenj za horizonte nad 30 let)

Sestavine operativnih stroškov: gostovanje/licence, podpora in vzdrževanje,
varnostno popravljanje in skladnost, čas osebja, načrtovana osvežitev/selitev
```

Glej [družbena diskontna stopnja](../družbena-diskontna-stopnja/) za razlago, zakaj je diskontni faktor pomemben v tipični 5–10-letni življenjski dobi sistema, in [izdelava ali nakup v vladi](../razvoj-ali-nakup-v-upravi/) za to, kako TCO napaja odločitev o izdelavi ali nakupu.

## Praktični primer

Oddelek primerja dva sistema za vodenje primerov na 5-letnem horizontu pri 3,5-odstotni diskontni stopnji Green Book.

```
Sistem A: capex £3 500 000, opex £250 000/leto
Sistem B: capex £1 800 000 (videti ceneje), opex £650 000/leto
          (težja podpora dobavitelja in breme integracije)

Naivna primerjava samo po capex: zmaga B, £1,8 M < £3,5 M.

Vsota diskontnih faktorjev, 5 let pri 3,5 %: 0,966+0,934+0,902+0,871+0,842 ≈ 4,515

TCO_A = 3 500 000 + 250 000 × 4,515 = 3 500 000 + 1 128 750 = £4 628 750
TCO_B = 1 800 000 + 650 000 × 4,515 = 1 800 000 + 2 934 750 = £4 734 750
```

TCO obrne naivno odločitev: sistem B je v petih letih nekoliko dražji, ko so operativni stroški diskontirani in sešteti, ker je delež opex v stroških življenjske dobe 62 % (2 934 750 / 4 734 750) proti 24 % pri sistemu A – konkreten primer ugotovitve, da je »vzdrževanje večina računa«, ki je popolnoma skrita pri primerjavi cenikov.

## Povezava s programskim inženirstvom

TCO je število, ki naj disciplinira vsako odločitev o [izdelavi ali nakupu](../razvoj-ali-nakup-v-upravi/) in vsak primer odplačila [tehničnega dolga](../tehnični-dolg-kot-erozija-javne-vrednosti/), ker so obresti dolga in odloženo vzdrževanje obe vrstici operativnih stroškov, ki sodita v isto diskontirano vsoto, ne glede na to, ali ju je kdo spremljal. Inženirji, ki predlagajo platformo ali izbiro dobavitelja, naj predstavijo celotno tabelo TCO, ne nabavne cene, ker je nabavna cena natanko število, na katero se oddelki po zasnovi finančnega primera Green Book ne smejo zanašati sami. TCO je tudi pošten imenovalec za presoje [vrednosti za denar](../vrednost-za-denar/) – VFM primerja korist s stroškom, premalo prešteta vrstica stroškov pa napihne vsako razmerje VFM v poslovnem primeru.

## Pasti

- **Primerjava samo po capex**: najpogostejša napaka pri javnem naročanju – primerjava cenikov dobaviteljev brez ujemajoče se napovedi operativnih stroškov za vsako možnost.
- **Izključitev stroškov izstopa in selitve**: izvoz podatkov ob koncu pogodbe, prenos na novo platformo in kazni zaradi vezanosti na dobavitelja so resnične vrstice TCO, ki se redko pojavijo v prvotnem poslovnem primeru.
- **Izključitev stroškov varnosti in skladnosti**: pogostost popravkov, obnova akreditacije in stroški revizije rastejo s starostjo in kompleksnostjo sistema – glej [vrednost kibernetske varnosti v javnem sektorju](../vrednost-kibernetske-varnosti-v-javnem-sektorju/) – in so običajno izpuščeni iz napovedi opex.
- **Nediskontirana primerjava možnosti z različnimi profili stroškov**: primerjava možnosti z velikim capex z možnostjo z velikim opex brez diskontiranja sistematično daje prednost tisti, ki več stroškov odloži v pozna leta.

## Viri

- HM Treasury, *The Green Book: Central Government Guidance on Appraisal and Evaluation*, 2022. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
- Central Digital and Data Office, Technology Code of Practice. <https://www.gov.uk/guidance/the-technology-code-of-practice>
- National Audit Office, *Digital Transformation in Government*. <https://www.nao.org.uk/>
