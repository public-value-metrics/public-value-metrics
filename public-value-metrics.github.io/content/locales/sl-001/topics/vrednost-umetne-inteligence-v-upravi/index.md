# Vrednost umetne inteligence v upravi

Vrednost umetne inteligence v upravi je zahteva, da mora sistem umetne inteligence v javni storitvi preseči isto mejo vrednosti za denar in javne vrednosti kot vsaka druga odločitev o porabi: ne nižje zato, ker je novost, in ne višje zato, ker vzbuja strah. To je vprašanje, na katerega mora izvajalska ekipa znati odgovoriti pred uvedbo funkcije umetne inteligence, ne po njej: ali ustvarja več vrednosti, kot stane, ko so zagotavljanje kakovosti, nadzor in tveganja pošteno vrednoteni?

## Zakaj je pomembno

Britanski Central Digital and Data Office (CDDO) je leta 2024 objavil Generative AI Framework for Government, ki gradi na prejšnjih začasnih smernicah iz junija 2023, in ga strukturiral okoli desetih načel: kaj generativna umetna inteligenca je, njene etične posledice, varnost orodij, kontrole zagotavljanja kakovosti, upravljanje celotnega življenjskega cikla generativne umetne inteligence, prepoznavanje resničnih primerov uporabe, sodelovanje med resorji, preglednost, veščine in upravljanje. Okvir vztraja pri »smiselnem človeškem nadzoru« in upravljanju celotnega življenjskega cikla, ker imajo poslovni primeri projektov umetne inteligence značilen način neuspeha, ki ga druga poraba za IT nima: glavno številko o produktivnosti iz pilota je lahko ustvariti in jo je lahko precenjevati, saj je izmerjena, preden se upošteva breme preverjanja, popravljanja in nadzora, ki ga orodje povzroča. Poleg okvira Algorithmic Transparency Recording Standard (ATRS) od javnih organov zahteva objavo standardiziranega zapisa (namen, uporabljeni podatki, uspešnost, preizkušanje pravičnosti, ureditev človeškega nadzora) za algoritemska orodja, ki pomembno vplivajo na odločitve o posameznikih. Strošek zagotavljanja kakovosti sistema umetne inteligence je tako javno zabeležen in ni notranja ocena, ki jo ekipa lahko mirno izpusti.

## Matematika

Uvedba umetne inteligence se presoja kot dodatek k standardnemu vrednotenju [vrednosti za denar](../vrednost-za-denar/), ne kot njegova zamenjava, pri čemer so členi, značilni za umetno inteligenco, izrecno navedeni in ne združeni v eno samo številko »povečanja produktivnosti«:

```
Neto vrednost sistema umetne inteligence =
    povečanje produktivnosti (prihranjeni čas × polni strošek zaposlenega)
  − strošek licence/računske moči
  − strošek človeškega preverjanja in nadzora (preverjanje izhoda umetne
    inteligence, preden se po njem ukrepa – ta tudi pri zrelih orodjih
    ne pade na nič)
  − strošek dokumentacije ATRS in stalnega spremljanja
  − tveganju prilagojen strošek škode zaradi napak, pristranskosti ali
    halucinacij, uteženo glede na to, kdo škodo nosi (distributional-weighting)

Številka o produktivnosti iz pilota, ki izpusti člen nadzora, ni
primerljiva z izhodiščnim stroškom običajnega poslovanja, ki že
vključuje enakovreden človeški pregled – glej ai-productivity-in-the-public-sector
za podrobnejšo disciplino merjenja produktivnosti, ki si jo ta izposoja.
```

## Praktični primer

**Lokalna oblast uporablja orodje generativne umetne inteligence za pripravo prvih odgovorov na rutinska vprašanja o občinskem davku**: 25.000 vprašanj na leto, ki so jih prej v celoti obravnavali referenti v povprečju 14 minut na vprašanje, polni strošek zaposlenega 34 £/uro.

```
Izhodiščni strošek (brez umetne inteligence):
  25.000 × (14/60) × 34 £ = 198.333 £/leto

Glavna trditev iz pilota: umetna inteligenca pripravi odgovor v 90 sekundah,
referent ga »samo pregleda in pošlje« – trdi se, da je nov čas 3 minute
  25.000 × (3/60) × 34 £ = 42.500 £/leto
  → trdi se prihranek 155.833 £/leto (videti je preobrazbeno)

Polno obremenjena številka, izmerjena po 3 mesecih delovanja in ne na
ročno izbranih testnih primerih pilota:
  Dejanski čas pregleda in popravljanja na odgovor: 6 minut (osnutki
  zahtevajo resnično urejanje pri zapletenih ali čustveno občutljivih vprašanjih)
  25.000 × (6/60) × 34 £ = 85.000 £/leto
  Strošek licence/računske moči: 38.000 £/leto
  Dokumentacija ATRS in četrtletno spremljanje pristranskosti/kakovosti: 14.000 £/leto
  Skupni strošek = 85.000 + 38.000 + 14.000 = 137.000 £/leto

Pravi prihranek = 198.333 − 137.000 = 61.333 £/leto – resničen in vreden
ohranitve, vendar precej manj kot polovica glavne trditve pilota, in za
njegovo ugotovitev je bilo treba pošteno izmeriti čas nadzora, ne
najboljšega scenarija iz pilota.
```

## Povezava s programskim inženirstvom

Tu se srečata [ai-productivity-in-the-public-sector](../produktivnost-umetne-inteligence-v-javnem-sektorju/) in ta tema: inženirske ekipe, ki v javne storitve vgrajujejo funkcije umetne inteligence, lastijo instrumentacijo, ki omogoča »pravo« številko iz izračunanega primera: beleženje dejanskega časa pregleda, razdalje urejanja med osnutkom in poslanim odgovorom ter stopnje stopnjevanja, namesto zaupanja v demonstracijske pogoje pilota. Funkcije umetne inteligence je treba presojati glede na točko 9 [digital-service-standard](../standard-digitalnih-storitev/) (varna storitev, zasebnost uporabnikov) in jih navzkrižno povezati s [public-sector-cybersecurity-value](../vrednost-kibernetske-varnosti-v-javnem-sektorju/), kjer orodje obdeluje podatke državljanov. Vsak sistem umetne inteligence, ki pomembno vpliva na odločitve o posameznikih, potrebuje zapis ATRS, preden ga je mogoče šteti za pripravljenega na presojo, tako kot storitev potrebuje opravljeno presojo [digital-service-standard](../standard-digitalnih-storitev/), preden gre v živo.

## Pasti

- **Pranje z umetno inteligenco (AI-washing)**: preimenovanje obstoječe avtomatizacije na podlagi pravil v »umetno inteligenco«, da se pridobi financiranje ali pozornost, namenjena uvajanju umetne inteligence, brez tveganj glede točnosti ali pristranskosti, ki dejansko upravičujejo dodatni nadzor po okviru.
- **Merjenje produktivnosti pilota, ne produkcije**: piloti tečejo na skrbno izbranih testnih primerih z angažiranimi, pozornimi pregledovalci, produkcija pa na celotni neurejeni mešanici primerov s pregledovalci, ki sčasoma razvijejo pristranskost avtomatizacije in izhode premalo preverjajo. Oboje popači pošteno številko stroška nadzora.
- **Izpustitev registracije ATRS, ker orodje »v resnici ni avtomatizirano odločanje«**: prag standarda je pomemben vpliv na odločitev o posamezniku, ki ga večina orodij umetne inteligence za pripravo osnutkov ali razvrščanje, usmerjenih v državljane, doseže, tudi ko človek formalno podpiše.
- **Zanemarjanje porazdelitvenega vpliva napak**: stopnja napak sistema umetne inteligence, povprečena čez vse uporabnike, lahko skrije precej višjo stopnjo napak ali pristranskosti za določene skupine. [distributional-weighting](../porazdelitveno-ponderiranje/) je treba uporabiti pri členu tveganju prilagojene škode, ne le pri skupni točnosti.

## Viri

- Central Digital and Data Office, Generative AI Framework for Government (2024). <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
- Algorithmic Transparency Recording Standard. <https://www.gov.uk/government/collections/algorithmic-transparency-recording-standard-hub>
- HM Treasury, Green Book: central government guidance on appraisal and evaluation. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-governent>
