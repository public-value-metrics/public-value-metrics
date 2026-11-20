# Z blaginjo prilagojena leta življenja (WELLBY)

WELLBY je ena dodatna točka zadovoljstva z življenjem na standardni 0–10 lestvici blaginje za eno osebo za eno leto. Je strukturni analog QALY iz zdravstvene ekonomike – ena enota, ki omogoča primerjavo posegov, katerih izidi nimajo nič skupnega – a zgrajena na subjektivni blaginji in ne na kliničnih zdravstvenih stanjih, in opredeljena v dokumentu HM Treasury »Wellbeing guidance for appraisal: supplementary Green Book guidance« (2021).

## Zakaj je pomembno

Analiza stroškov in koristi potrebuje skupno enoto za primerjavo nepovratnih sredstev za mladinski klub s shemo prometne varnosti in storitvijo duševnega zdravja, ki nimajo skupnega merila izida. Zdravstvena ekonomika je to za klinične posege rešila s QALY: kakovostno prilagojeno leto življenja, uteženo od 0 (mrtev) do 1 (polno zdravje). Smernice HM Treasury o blaginji razširjajo isto logiko na nezdravstveno javno porabo in kot lestvico izida namesto indeksa zdravstvenega stanja uporabljajo usklajeno vprašanje ONS o zadovoljstvu z življenjem (»Na splošno, kako zadovoljni ste danes z življenjem?«, odgovor 0–10). WELLBY 1 pomeni, da zadovoljstvo z življenjem ene osebe naraste za eno celo točko za eno leto (ali enakovredno, da zadovoljstvo desetih ljudi naraste za po 0,1 točke za leto – WELLBY-ji se seštevajo po prebivalstvu, kot se QALY-ji). Smernice HM Treasury določajo ilustrativno denarno vrednost na WELLBY (okoli £13 000, cene 2019/20), izpeljano z usklajevanjem podatkov o subjektivni blaginji z drugimi pristopi k vrednosti leta življenja, kar analitikom daje način za denarno vrednotenje izidov – zmanjšanje osamljenosti, skupnostna kohezija, dostop do zelenih površin – ki jih tehnike [vrednotenja blaginje](../vrednotenje-blaginje/) prej lahko le opisale, ne pa primerjale na skupni podlagi z zdravstveno ali varnostno porabo.

## Matematika

```
WELLBY = Δ zadovoljstva z življenjem (lestvica 0–10) × število let, ko sprememba traja
        (seštevek po vseh prizadetih ljudeh)

Denarno ovrednotena korist blaginje = ustvarjeni WELLBY-ji × vrednost na WELLBY (referenčna vrednost HMT)

prim. QALY = Δ koristnosti zdravstvenega stanja (lestvica 0–1) × leta, preživeta v tem stanju
```

Lestvica zadovoljstva 0–10 in lestvica koristnosti QALY 0–1 nista zamenljivi brez koraka pretvorbe; smernice HM Treasury obravnavajo njuno usklajevanje, tako da na primer zdravstveni poseg, ocenjen v QALY, in socialni poseg, ocenjen v WELLBY, nista tiho dvojno šteta ali neprimerljiva znotraj iste [ocene po Green Book](../ocena-po-green-booku/).

## Praktični primer

**Storitev lokalne oblasti za osamljenost**: shema druženja služi 400 osamljenim starejšim prebivalcem. Nadaljnje ankete kažejo, da povprečno zadovoljstvo z življenjem naraste s 5,2 na 6,0 (pridobitev 0,8 točke), učinek pa naj bi trajal 2 leti, preden zbledi.

```
WELLBY-ji = 400 ljudi × 0,8 točke × 2 leti = 640 WELLBY-jev

Denarna vrednost = 640 × £13 000 = £8 320 000
```

Ob letnem strošku programa £300 000 (£600 000 v 2 letih) je razmerje med koristmi in stroški približno 8 320 000 / 600 000 ≈ **13,9:1** – številka, ki zdaj lahko stoji v isti tabeli ocene kot strošek na preprečeni QALY zdravstvene sheme ali prihranki časa potovanja prometne sheme.

**Dobrodelna organizacija, manjši obseg**: skupnostni umetniški program doseže 50 udeležencev z izmerjenim povečanjem zadovoljstva za 0,3 točke, ki traja 1 leto.

```
WELLBY-ji = 50 × 0,3 × 1 = 15 WELLBY-jev
Denarna vrednost = 15 × £13 000 = £195 000
```

## Povezava s programskim inženirstvom

- Vsaka storitev za državljane, ki že zbira anketno postavko o zadovoljstvu z življenjem ali blaginji (mnoge platforme lokalnih oblasti ter zdravja in oskrbe to počnejo po štirih standardnih vprašanjih ONS o blaginji), lahko WELLBY-je izračuna neposredno iz obstoječih podatkovnih cevovodov, namesto da bi za vsako spremembo storitve naročila posebno ekonomsko vrednotenje.
- WELLBY-ji dajejo inženirskim ekipam, ki gradijo za poročanje po [zakonu o družbeni vrednosti](../zakon-o-družbeni-vrednosti/) ali [družbeni donos naložbe](../družbeni-donos-naložbe/), nacionalno standardiziran imenovalec, ki ga podpira HM Treasury, in se izognejo množenju posebnih »ocen učinka«, ki jih ni mogoče primerjati med pogodbami ali dobavitelji.
- Ker so WELLBY-ji aditivni po ljudeh in času, se čisto sestavljajo v spremljanje izidov na ravni prebivalstva, ki se uporablja v sistemih [odgovornosti, temelječe na izidih](../odgovornost-temelječa-na-izidih/) – nadzorna plošča storitve lahko poroča o kumulativno ustvarjenih WELLBY-jih na četrtletje, tako kot zdravstveni sistem poroča o pridobljenih QALY-jih.

## Pasti

- **Predpostavka, da so samoporočane pridobitve zadovoljstva v celoti pripisljive posegu** – brez protidejstvenega stanja (primerjalna skupina ali zasnova pred/po z nadzori) pridobitve WELLBY ni mogoče ločiti od splošnih trendov; glej [protidejstvena analiza](../kontrafaktična-analiza/).
- **Mešanje WELLBY-jev in QALY-jev v eno vsoto brez usklajevanja** – smernice HM Treasury izrecno navajajo, da uporabljata različni lestvici in različni osnovni teoriji vrednosti; naivno seštevanje dvojno šteje prekrivajočo se blaginjo.
- **Nekritična uporaba referenčne denarne vrednosti** – številka £ na WELLBY je ocena nacionalnega povprečja z resničnimi pasovi negotovosti; smernice HM Treasury priporočajo analizo občutljivosti, ne obravnavanja kot fiksnega menjalnega tečaja.

## Viri

- HM Treasury. "Wellbeing guidance for appraisal: supplementary Green Book guidance." (2021)
  <https://www.gov.uk/government/publications/wellbeing-guidance-for-appraisal-supplementary-green-book-guidance>
- ONS. "Personal well-being user guidance" (the four standard wellbeing questions).
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing>
- HM Treasury. "The Green Book: Central Government Guidance on Appraisal and Evaluation."
