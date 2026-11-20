# Indeks človekovega razvoja (HDI)

HDI je glavna alternativa Združenih narodov razvrščanju držav samo po dohodku: združuje pričakovano življenjsko dobo, izobrazbo in dohodek v eno številko med 0 in 1, na podlagi premise – ki jo je zagovarjal ekonomist Amartya Sen in jo za Združene narode razvil Mahbub ul Haq – da razvoj pomeni razširitev tega, kar ljudje lahko počnejo in kaj lahko so, ne le tega, kaj zaslužijo. Od leta 1990 ga vsako leto objavlja Poročilo o človekovem razvoju (Human Development Report) Razvojnega programa ZN (UNDP).

## Zakaj je pomembno

Pred HDI so »razvoj« merili skoraj izključno z BNP na prebivalca, kar ne pove ničesar o tem, ali rast doseže zdravje ali izobrazbo navadnih ljudi. Senov pristop zmožnosti (capability approach) je razvoj preoblikoval v razširitev resničnih svoboščin, ul Haq pa ga je spremenil v objavljiv indeks, po katerem je UNDP lahko razvrstil vse države, kar je vlade, ki so se obogatele samo z dohodkom, a zanemarile zdravje ali šolanje, prisililo, da se soočijo s slabšim mestom, kot ga je nakazoval njihov BDP (standardni primeri so naftne države Zaliva in nekatera ekstraktivna gospodarstva). Tridelna struktura HDI je tudi neposredni metodološki prednik [večdimenzionalnega indeksa revščine](../večdimenzionalni-indeks-revščine/): oba ne dovolita, da ena razsežnost odkupi primanjkljaj v drugi, in uporabljata geometrično, ne aritmetične sredine. UNDP objavlja polne tehnične opombe in osnovne podatke za vsako izdajo (<https://hdr.undp.org/data-center/human-development-index>), kar je kanonični vir za vsakogar, ki gradi na indeksu, namesto da bi ga ponovno izpeljal.

## Matematika

```
Indeks pričakovane življenjske dobe (LEI) = (LE − 20) / (85 − 20)

Indeks povprečnih let šolanja             = povprečna leta šolanja / 15
Indeks pričakovanih let šolanja           = pričakovana leta šolanja / 18
Indeks izobrazbe (EI)                     = (Indeks povprečnih let + Indeks pričakovanih let) / 2

Indeks dohodka (II)                       = (ln(BND na prebivalca) − ln(100)) / (ln(75000) − ln(100))

HDI = (LEI × EI × II) ^ (1/3)     [geometrična sredina treh podindeksov]
```

Geometrična sredina je namerna: ker množi in ne povprečuje, zelo visoka ocena v eni razsežnosti ne more v celoti izravnati zelo nizke ocene v drugi – zasnova, ki jo je UNDP sprejel leta 2010 prav za kaznovanje neravnovesja, ko je nadomestil prejšnjo formulo z aritmetično sredino.

## Praktični primer

**Država s srednjim dohodkom**: pričakovana življenjska doba 72 let, povprečna leta šolanja 8, pričakovana leta šolanja 13, BND na prebivalca $12 000.

```
LEI  = (72 − 20) / (85 − 20)             = 52 / 65   = 0,800
MYSI = 8 / 15                                        = 0,533
EYSI = 13 / 18                                       = 0,722
EI   = (0,533 + 0,722) / 2                           = 0,628
II   = (ln(12000) − ln(100)) / (ln(75000) − ln(100))
     = (9,393 − 4,605) / (11,225 − 4,605)
     = 4,788 / 6,620                                 = 0,723

HDI = (0,800 × 0,628 × 0,723) ^ (1/3)
    = (0,363) ^ (1/3)                                ≈ 0,713
```

HDI 0,713 spada v UNDP-jev razred »visok človekov razvoj« (0,700–0,799); »zelo visok« se začne pri 0,800. Opazite, kako občutljiv je rezultat na najšibkejši podindeks: če bi bila povprečna leta šolanja 4 namesto 8 (MYSI = 0,267, EI = 0,494), HDI pade na (0,800 × 0,494 × 0,723)^(1/3) ≈ 0,639 – padec za cel razred – čeprav se nič drugega ni spremenilo.

## Povezava s programskim inženirstvom

- Vzorec geometrične sredine je neposredno ponovno uporaben za vsako sestavljeno oceno storitve ali izdelka, pri kateri ne želite, da ena močna razsežnost prekrije kritično šibko – npr. združevanje ocen dostopnosti, zmogljivosti in zanesljivosti za javno digitalno storitev multiplikativno namesto s tehtanim povprečjem, tako da storitev, ki je hitra, a nedostopna, ne more dobiti ocene »dobro«.
- Logaritemska transformacija dohodka v HDI (padajoča mejna vrednost dodatnega funta) je ista logika kot [porazdelitveno ponderiranje](../porazdelitveno-ponderiranje/) pri ocenah: dodatnih $1 000 pomeni veliko več za revno kot za bogato gospodinjstvo, linearna obravnava obeh pa napačno vrednoti učinek.
- Vsaka nadzorna plošča, ki poroča eno združeno oceno »digitalne vključenosti« ali »izidov za državljane«, bi morala svojo formulo združevanja dokumentirati tako izrecno kot tehnične opombe UNDP – glej [KPI javnega sektorja](../ključni-kazalniki-uspešnosti-v-javnem-sektorju/) in [kazalniško kartico javne vrednosti](../kazalniška-kartica-javne-vrednosti/).

## Pasti

- **Povprečenje namesto geometrične sredine** – aritmetična sredina omogoča, da visok dohodek v celoti zakrije slabo zdravje ali izobrazbo; vsa poanta spremembe metodologije iz leta 2010 je bila preprečiti to nadomeščanje.
- **Primerjanje HDI iz leta v leto, kot da bi šlo za BDP, prilagojen inflaciji** – UNDP občasno preoblikuje indeks (nove spodnje/zgornje meje, popravljene zgornje meje šolanja), zato lahko sprememba mesta odraža posodobitev metodologije, ne resnične spremembe; vedno preverite, iz katere izdaje HDR številka izvira.
- **Obravnavanje HDI kot merila revščine** – je nacionalno povprečje in ne pove ničesar o porazdelitvi znotraj države; za to uporabite [večdimenzionalni indeks revščine](../večdimenzionalni-indeks-revščine/) ali ločeni z neenakostjo prilagojeni HDI UNDP.

## Viri

- UNDP. "Human Development Index (HDI)" technical notes and data.
  <https://hdr.undp.org/data-center/human-development-index>
- UNDP. Human Development Report 1990 (the index's introduction).
- Sen A. "Development as Freedom." Oxford University Press, 1999.
