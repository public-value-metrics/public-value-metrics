# Indeks ljudskog razvoja (HDI)

HDI je glavna alternativa UN-a rangiranju zemalja samo prema dohotku: spaja očekivano trajanje života, obrazovanje i dohodak u jedan broj između 0 i 1, na pretpostavci koju je iznio ekonomist Amartya Sen, a za UN razvio Mahbub ul Haq, da se razvoj sastoji u proširivanju onoga što ljudi mogu činiti i biti, a ne samo onoga što zarađuju. Objavljuje se svake godine u Izvješću o ljudskom razvoju Razvojnog programa UN-a (UNDP) od 1990. godine.

## Zašto je važno

Prije HDI-ja „razvoj” se mjerio gotovo isključivo BND-om po stanovniku, koji ništa ne govori o tome dolazi li rast do zdravlja ili obrazovanja običnih ljudi. Senov pristup sposobnostima (capability approach) preoblikovao je razvoj kao proširivanje stvarnih sloboda, a ul Haq ga je pretvorio u objavljivi indeks prema kojem UNDP može rangirati svaku zemlju, prisiljavajući vlade koje su se obogatile samo dohotkom, a zanemarile zdravlje ili školovanje, da se suoče s lošijim rangom nego što sugerira njihov BDP (standardni primjeri su naftne zemlje Zaljeva i neka ekstraktivna gospodarstva). Trodijelna struktura HDI-ja ujedno je izravni metodološki predak [Višedimenzionalnog indeksa siromaštva](../višedimenzionalni-indeks-siromaštva/): oba odbijaju dopustiti da jedna dimenzija otkupi manjak u drugoj, koristeći geometrijsku, a ne aritmetičku sredinu. UNDP objavljuje pune tehničke bilješke i podležeće podatke za svako izdanje (<https://hdr.undp.org/data-center/human-development-index>), što je mjerodavan izvor za svakoga tko gradi na indeksu umjesto da ga ponovno izvodi.

## Matematika

```
Life Expectancy Index (LEI)     = (LE − 20) / (85 − 20)

Mean Years Schooling Index      = mean years of schooling / 15
Expected Years Schooling Index  = expected years of schooling / 18
Education Index (EI)            = (Mean Years Index + Expected Years Index) / 2

Income Index (II)               = (ln(GNI per capita) − ln(100)) / (ln(75.000) − ln(100))

HDI = (LEI × EI × II) ^ (1/3)     [geometric mean of the three sub-indices]
```

Geometrijska sredina je namjerna: budući da množi umjesto da usrednjava, vrlo visoka ocjena u jednoj dimenziji ne može u potpunosti nadoknaditi vrlo nisku u drugoj; UNDP je taj dizajn usvojio 2010. upravo da kazni neravnotežu, zamijenivši dotadašnju formulu s aritmetičkom sredinom.

## Primjer iz prakse

**Zemlja srednjeg dohotka**: očekivano trajanje života 72 godine, prosječan broj godina školovanja 8, očekivan broj godina školovanja 13, BND po stanovniku $12.000.

```
LEI = (72 − 20) / (85 − 20)              = 52 / 65   = 0,800
MYSI = 8 / 15                                        = 0,533
EYSI = 13 / 18                                       = 0,722
EI = (0,533 + 0,722) / 2                             = 0,628
II = (ln(12.000) − ln(100)) / (ln(75.000) − ln(100))
   = (9,393 − 4,605) / (11,225 − 4,605)
   = 4,788 / 6,620                                   = 0,723

HDI = (0,800 × 0,628 × 0,723) ^ (1/3)
    = (0,363) ^ (1/3)                                ≈ 0,713
```

HDI od 0,713 spada u UNDP-ov pojas „visokog ljudskog razvoja” (0,700 – 0,799); „vrlo visok” počinje na 0,800. Uočite koliko je rezultat osjetljiv na najslabiji podindeks: kada bi prosječan broj godina školovanja bio 4 umjesto 8 (MYSI = 0,267, EI = 0,494), HDI bi pao na (0,800 × 0,494 × 0,723)^(1/3) ≈ 0,639, cijeli pojas niže, iako se ništa drugo nije promijenilo.

## Veza s programskim inženjerstvom

- Obrazac geometrijske sredine izravno je ponovno upotrebljiv za svaku složenu ocjenu usluge ili proizvoda kod koje ne želite da jedna jaka dimenzija prekrije kritičnu slabu: npr. kombiniranje ocjena pristupačnosti, performansi i pouzdanosti javne digitalne usluge množenjem, a ne ponderiranim prosjekom, tako da usluga koja je brza, ali nepristupačna ne može dobiti ocjenu „dobro”.
- Logaritamska transformacija dohotka u HDI-ju (opadajuća granična vrijednost dodatne funte) ista je logika koja stoji iza [distribucijskog ponderiranja](../distribucijsko-ponderiranje/) u procjeni: dodatnih $1.000 znači daleko više siromašnom kućanstvu nego bogatom, a linearno tretiranje oboje pogrešno prosuđuje učinak.
- Svaka nadzorna ploča koja izvještava jedinstvenu, miješanu ocjenu „digitalne uključenosti” ili „ishoda za građane” treba dokumentirati svoju formulu agregacije jednako izričito kao UNDP-ove tehničke bilješke; vidi [KPI-jeve javnog sektora](../ključni-pokazatelji-uspješnosti-u-javnom-sektoru/) i [ocjenski karton javne vrijednosti](../kartica-rezultata-javne-vrijednosti/).

## Zamke

- **Usrednjavanje umjesto geometrijske sredine**: aritmetička sredina dopušta da visok dohodak potpuno prikrije loše zdravlje ili obrazovanje; cijela je svrha promjene metodologije 2010. bila zaustaviti tu zamjenu.
- **Usporedba HDI-ja iz godine u godinu kao da je BDP prilagođen inflaciji**: UNDP povremeno rebazira indeks (nove minimalne/maksimalne granice, revidirane gornje granice školovanja), pa promjena ranga može odražavati ažuriranje metodologije, a ne stvarni pomak; uvijek provjerite iz kojeg izdanja HDR-a brojka potječe.
- **Tretiranje HDI-ja kao mjere siromaštva**: to je nacionalni prosjek i ne govori ništa o raspodjeli unutar zemlje; za to koristite [Višedimenzionalni indeks siromaštva](../višedimenzionalni-indeks-siromaštva/) ili UNDP-ov zasebni HDI prilagođen nejednakosti.

## Izvori

- UNDP. "Human Development Index (HDI)" technical notes and data.
  <https://hdr.undp.org/data-center/human-development-index>
- UNDP. Human Development Report 1990 (the index's introduction).
- Sen A. "Development as Freedom." Oxford University Press, 1999.
