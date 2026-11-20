# Cilvēka attīstības indekss (HDI)

HDI ir ANO galvenā alternatīva valstu rangošanai tikai pēc ienākumiem: tas apvieno dzīves ilgumu, izglītību un ienākumus vienā skaitlī no 0 līdz 1, pamatojoties uz premisu — ko argumentēja ekonomists Amartja Sens un ANO vajadzībām izstrādāja Mahbubs ul Hāks —, ka attīstība ir par to, lai paplašinātu to, ko cilvēki var darīt un kas viņi var būt, nevis tikai to, ko viņi pelna. To kopš 1990. gada katru gadu publicē ANO Attīstības programmas Cilvēka attīstības ziņojumā (Human Development Report).

## Kāpēc tas ir svarīgi

Pirms HDI “attīstību” gandrīz pilnībā mērīja ar NKP uz iedzīvotāju, kas neko neizsaka par to, vai izaugsme sasniedz parasto cilvēku veselību vai izglītību. Sena spēju pieeja (capability approach) pārformulēja attīstību kā reālu brīvību paplašināšanu, un ul Hāks to pārvērta publicējamā indeksā, pēc kura UNDP varēja sarindot katru valsti, piespiežot valdības, kas bagātinājās tikai ar ienākumiem, bet atstāja novārtā veselību vai skološanu, saskarties ar sliktāku vietu rangā, nekā liecināja to IKP (Persijas līča naftas valstis un dažas ieguves ekonomikas ir standarta piemēri). HDI trīsdaļīgā struktūra ir arī tiešs metodoloģiskais priekštecis [daudzdimensionālajam nabadzības indeksam](../daudzdimensionālais-nabadzības-indekss/): abi atsakās ļaut vienai dimensijai atpirkt iztrūkumu citā, izmantojot ģeometrisko, nevis aritmētisko vidējo. UNDP publicē pilnas tehniskās piezīmes un pamatā esošos datus katram izdevumam (<https://hdr.undp.org/data-center/human-development-index>), kas ir kanoniskais avots ikvienam, kas balstās uz indeksu, nevis atvasina to no jauna.

## Matemātika

```
Dzīves ilguma indekss (LEI)       = (LE − 20) / (85 − 20)

Vidējo skolas gadu indekss        = vidējie skolas gadi / 15
Gaidāmo skolas gadu indekss       = gaidāmie skolas gadi / 18
Izglītības indekss (EI)           = (Vidējo gadu indekss + Gaidāmo gadu indekss) / 2

Ienākumu indekss (II)             = (ln(NNI uz iedzīvotāju) − ln(100)) / (ln(75 000) − ln(100))

HDI = (LEI × EI × II) ^ (1/3)     [triju apakšindeksu ģeometriskais vidējais]
```

Ģeometriskais vidējais ir apzināts: tā kā tas reizina, nevis vidēji aprēķina, ļoti augsts vērtējums vienā dimensijā nevar pilnībā kompensēt ļoti zemu vērtējumu citā — dizains, ko UNDP pieņēma 2010. gadā tieši, lai sodītu nelīdzsvarotību, aizstājot iepriekšējo aritmētiskā vidējā formulu.

## Aprēķina piemērs

**Vidēju ienākumu valsts**: dzīves ilgums 72 gadi, vidējie skolas gadi 8, gaidāmie skolas gadi 13, NNI uz iedzīvotāju $12 000.

```
LEI = (72 − 20) / (85 − 20)              = 52 / 65   = 0,800
MYSI = 8 / 15                                        = 0,533
EYSI = 13 / 18                                       = 0,722
EI = (0,533 + 0,722) / 2                             = 0,628
II = (ln(12 000) − ln(100)) / (ln(75 000) − ln(100))
   = (9,393 − 4,605) / (11,225 − 4,605)
   = 4,788 / 6,620                                   = 0,723

HDI = (0,800 × 0,628 × 0,723) ^ (1/3)
    = (0,363) ^ (1/3)                                ≈ 0,713
```

HDI 0,713 iekrīt UNDP “augstas cilvēka attīstības” joslā (0,700–0,799); “ļoti augsta” sākas ar 0,800. Ievērojiet, cik jutīgs rezultāts ir pret vājāko apakšindeksu: ja vidējie skolas gadi būtu 4, nevis 8 (MYSI = 0,267, EI = 0,494), HDI krīt līdz (0,800 × 0,494 × 0,723)^(1/3) ≈ 0,639 — zaudējot veselu joslu —, kaut arī nekas cits nav mainījies.

## Saikne ar programmatūras inženieriju

- Ģeometriskā vidējā modeli var tieši izmantot atkārtoti jebkuram saliktam pakalpojuma vai produkta vērtējumam, kur nevēlaties, lai viena spēcīga dimensija pārklātu kritisku vāju — piem., apvienojot publiskā digitālā pakalpojuma pieejamības, veiktspējas un uzticamības vērtējumus reizinot, nevis ar svērto vidējo, lai ātrs, bet nepieejams pakalpojums nevarētu saņemt vērtējumu “labs”.
- HDI ienākumu logaritmiskā transformācija (papildu mārciņas dilstošā robežvērtība) ir tā pati loģika, kas ir [sadales svēršanas](../sadales-svēršana/) pamatā novērtēšanā: papildu $1 000 nabadzīgai mājsaimniecībai nozīmē daudz vairāk nekā bagātai, un abu uzskatīšana par lineāru nepareizi novērtē ietekmi.
- Jebkuram informācijas panelim, kas ziņo vienotu apvienotu “digitālās iekļautības” vai “iedzīvotāju iznākumu” vērtējumu, jādokumentē tā apkopošanas formula tikpat skaidri kā UNDP tehniskajās piezīmēs — skatiet [publiskā sektora KPI](../publiskā-sektora-kpi/) un [publiskās vērtības rezultātu karti](../sabiedriskās-vērtības-rezultātu-kartīte/).

## Biežākās kļūdas

- **Vidējošana, nevis ģeometriskā vidējā izmantošana** — aritmētiskais vidējais ļauj augstiem ienākumiem pilnībā maskēt sliktu veselību vai izglītību; visa 2010. gada metodoloģijas izmaiņu jēga bija apturēt šo aizstāšanu.
- **HDI salīdzināšana gadu no gada, it kā tas būtu inflācijai koriģēts IKP** — UNDP periodiski pārbāzē indeksu (jaunas minimālās/maksimālās robežas, pārskatīti skološanas griesti), tāpēc ranga izmaiņa var atspoguļot metodoloģijas atjauninājumu, nevis reālu nobīdi; vienmēr pārbaudiet, no kura HDR izdevuma skaitlis nāk.
- **HDI uztvere kā nabadzības mērs** — tas ir valsts vidējais un neko neizsaka par sadalījumu valsts iekšienē; tam izmantojiet [daudzdimensionālo nabadzības indeksu](../daudzdimensionālais-nabadzības-indekss/) vai UNDP atsevišķo nevienlīdzībai koriģēto HDI.

## Avoti

- UNDP. "Human Development Index (HDI)" technical notes and data.
  <https://hdr.undp.org/data-center/human-development-index>
- UNDP. Human Development Report 1990 (the index's introduction).
- Sen A. "Development as Freedom." Oxford University Press, 1999.
