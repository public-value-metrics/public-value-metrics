# Standardi storitev in transakcijske metrike

Standard storitev GOV.UK (GOV.UK Service Standard) je 14-točkovni kontrolni seznam britanske vlade za gradnjo in upravljanje javne digitalne storitve, ki ga spremlja majhen, obvezen nabor kvantitativnih transakcijskih metrik – strošek na transakcijo, stopnja dokončanja, digitalna sprejetost in zadovoljstvo uporabnikov – ki jih morajo ekipe objaviti za vsako delujočo storitev osrednje vlade. Skupaj sta standard in metrike operativna, vsakodnevna specializacija širših okvirov javne vrednosti in KPI v tem repozitoriju, namenjena neposredno ekipam za dostavo programske opreme.

## Zakaj je pomembno

Standard storitev, ki ga vzdržuje priročnik za storitve GOV.UK (service manual), zahteva, da vsaka ocena v določeni točki (alfa, beta, delujoče) državne digitalne storitve med svojimi 14 točkami dokaže, da ekipa razume potrebe uporabnikov, dela v multidisciplinarni ekipi, pogosto iterira in izboljšuje ter *ovrednoti orodja, sisteme in načine dela*. Zgodovinsko je to stalo ob javni Performance Platform, kjer je vsaka delujoča storitev odprto objavljala svoje transakcijske podatke; ta platforma je bila medtem ukinjena, vendar osnovna obveznost merjenja in objavljanja teh štirih temeljnih metrik ostaja prek smernic priročnika »measuring success«. Razlog, zakaj se to razlikuje od splošne nadzorne plošče KPI za programsko opremo, je, da so bile te metrike izrecno zasnovane kot en povezan ekonomski model, ne štiri neodvisne ocene: celoten primer prihrankov za digitalno državo – poročilo Digital Efficiency Report Government Digital Service je ugotovilo, da so digitalne transakcije približno 20-krat cenejše od telefonskih in približno 50-krat cenejše od osebnih pri primerljivih storitvah lokalne uprave – se uresniči le, če stopnja dokončanja ostane visoka in digitalna sprejetost resnično raste, ne pa da se le doda poceni kanal ob nespremenjenem dragem.

## Matematika

```
Strošek na transakcijo = skupni stroški delovanja storitve / število dokončanih transakcij
Stopnja dokončanja      = dokončane transakcije / začete transakcije × 100
Digitalna sprejetost    = transakcije v digitalnem kanalu / transakcije v vseh kanalih × 100
Zadovoljstvo uporabnikov = % zadovoljnih + zelo zadovoljnih, 5-stopenjska anketa med storitvijo

Prihranek zaradi prehoda na druge kanale = obseg transakcij × premik sprejetosti × (strošek
                        na transakcijo v starem kanalu − strošek na transakcijo digitalno)

Strošek povpraševanja zaradi neuspeha = (1 − stopnja dokončanja) × digitalno poskušene transakcije ×
                        strošek nadomestnega kanala, ki ga ti uporabniki nato uporabijo
```

## Praktični primer

**Ilustrativna storitev obnove dovoljenja osrednje vlade**, 2 milijona transakcij/leto, trenutno 65 % po telefonu (£3,00/transakcijo) in 35 % digitalno (£0,30/transakcijo), stopnja dokončanja 80 %. Prenova po 14-točkovnem standardu storitev dvigne digitalno sprejetost na 60 % in dokončanje na 92 %:

```
Prihranek zaradi premika sprejetosti = 2.000.000 × 0,25 × (3,00 − 0,30) = £1.350.000/leto

Strošek povpraševanja zaradi neuspeha, prej:
  2.000.000 × 0,35 × (1 − 0,80) × £3,00 = £420.000/leto (opustitelji se vrnejo na telefon)

Strošek povpraševanja zaradi neuspeha, potem:
  2.000.000 × 0,60 × (1 − 0,92) × £3,00 = £288.000/leto

Neto prihranek pri povpraševanju zaradi neuspeha = £420.000 − £288.000 = £132.000/leto

Skupni letni prihranek ≈ £1.350.000 + £132.000 = £1.482.000/leto
```

Izračun pokaže, zakaj stopnja dokončanja ni sekundarna metrika: brez izboljšanja z 80 % na 92 % bi povpraševanje zaradi neuspeha del prihranka zaradi premika sprejetosti izničilo, ker bi razočarane digitalne uporabnike usmerilo naravnost nazaj na drag telefonski kanal.

## Povezava s programskim inženirstvom

Te štiri metrike so delujoč primer nadzorne plošče stroškov in posledic: ena stroškovna metrika, ločena od treh metrik izidov/kakovosti, namenoma nikoli strnjena v eno oceno – ista disciplina, ki jo zagovarjajo [KPI v javnem sektorju](../ključni-kazalniki-uspešnosti-v-javnem-sektorju/). Za inženirje se to razčleni na konkretno, lastniško delo: stopnja dokončanja je problem instrumentacije lijaka in vsako mesto opustitve v poti je načeloma najti in popraviti; strošek na transakcijo zahteva pravo računovodstvo enotnih stroškov, vključno s stroški osebja in papirnatega kanala, ne le s stroški oblačnega gostovanja (glej [strošek na transakcijo](../strošek-na-transakcijo/) in [skupne stroške lastništva pri državni IT](../skupni-stroški-lastništva-pri-vladni-informacijski-tehnologiji/)); digitalna sprejetost pa je metrika enakosti v kostumu učinkovitosti – državljani, ki ne morejo ali nočejo zamenjati kanala, so nesorazmerno starejši, invalidni ali digitalno izključeni, zato agresivno zapiranje kanalov »prihranek« spremeni v škodo za dostop (glej [digitalna vključenost](../digitalna-vključenost/) in [prihranki zaradi prehoda na druge kanale](../prihranki-zaradi-preusmeritve-kanalov/)). 14-točkovni standard je sam procesna specifikacija za temi številkami – glej [standard digitalnih storitev](../standard-digitalnih-storitev/) za celoten standard in [kazalniki zadovoljstva državljanov](../metrike-zadovoljstva-državljanov/) za to, kako se številka zadovoljstva tu nanaša na širše merjenje zaupanja.

## Pasti

- **Sprejetost, pridobljena z zaprtjem alternativnega kanala**: zaprtje telefonske linije aritmetično dvigne odstotek digitalne sprejetosti, hkrati pa povpraševanje zaradi neuspeha odloži na kateri koli kanal, ki ostane (pogosto dražjo podprto digitalno ali osebno pot); vedno merite skupni strošek sistema, ne le razmerja.
- **Merjenje stopnje dokončanja od drugega koraka lijaka**: začetek štetja »začetih« po prvi resnični točki opustitve polepša stopnjo dokončanja in skrije največjo popravljivo izgubo.
- **Strošek na transakcijo brez podpore za podprto digitalno**: enotni strošek samo digitalnega kanala, ki ignorira čas osebja za pomoč uporabnikom, ki se ne morejo oskrbeti sami, podcenjuje resnični strošek kanala.
- **Objavljanje metrik brez skupne opredelitve med storitvami**: »transakcija« in »dokončano« pomenita različne stvari v različnih ekipah storitev, razen če so opredelitve standardizirane in verzionirane, zaradi česar je primerjava med storitvami nezanesljiva.

## Viri

- GOV.UK Service Manual, "The Service Standard." <https://www.gov.uk/service-manual/service-standard>
- GOV.UK Service Manual, "Measuring Success — Data You Must Publish."
  <https://www.gov.uk/service-manual/measuring-success/data-you-must-publish>
- GOV.UK, "Digital Efficiency Report."
  <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
