# Razvoj ali nakup v upravi

Razvoj ali nakup (build vs buy) je strukturirana, tveganju prilagojena primerjava lastnega razvoja z nakupom komercialne ali standardne rešitve, ki se primerja po diskontiranih [skupnih stroških lastništva](../skupni-stroški-lastništva-pri-vladni-informacijski-tehnologiji/), času do vrednosti in tveganju. Uprava je strukturno kupec: Technology Code of Practice določa domnevo v prid standardnim in oblačnim rešitvam. Kljub temu se inženirske ekipe znotraj ministrstev še vedno privzeto odločajo za razvoj, iz istih razlogov kot graditelji povsod drugje.

## Zakaj je pomembno

Technology Code of Practice britanske Government Digital Service (<https://www.gov.uk/guidance/the-technology-code-of-practice>) in spremljajoče smernice Service Manual o odločanju med razvojem in nakupom ministrstva silijo, da lastni razvoj utemeljijo proti domnevi, da je standardno zmožnost treba kupiti, ne zgraditi, in da lastno kodo upravičuje le resnično novo zmožnost, ki razlikuje poslanstvo. Dopolnilne smernice HM Treasury o optimistični pristranskosti k Green Book, izpeljane iz pregleda Mott MacDonald iz leta 2002 o velikih javnih naročilih, dajejo projektom IT najširši razpon dvigov med vsemi ocenjenimi kategorijami: ocene kapitalskih stroškov se priporoča dvigniti za 10 % na spodnjem koncu in do 200 % na zgornjem, preden se uporabijo pri presoji, kar odraža, kako močno so bili programski razvoji v javnih naročilih zgodovinsko podcenjeni. Analiza razvoja ali nakupa obstaja prav zato, da to tveganju prilagoditev postavi na mizo pred odobritvijo, namesto da bi se pojavila kot zahteva za dodatna sredstva zaradi prekoračitve med letom.

## Matematika

```
Primerjava na istem 3–5-letnem horizontu, diskontirano po družbeni
diskontni stopnji Green Book (glej social-discount-rate.md):

NPV_možnost = PV(koristi, zamaknjene za čas do vrednosti) − PV(TCO)

Tveganju prilagoditve (vzorec optimistične pristranskosti Green Book):
  strošek razvoja × 1,1–3,0       (razpon dviga za projekte IT, Mott MacDonald)
  čas do vrednosti pri razvoju + 40–60 % (predhodna ocena zamude pri uvedbi)
  nakup: namesto tega dodati preverjanje realnosti integracije in stroške izstopa iz pogodbe

Dejavniki odločitve, v vrstnem redu, kot običajno odločajo:
  1. razlikovanje – ali je ta zmožnost poslanstvo ali vodovod?
  2. čas do vrednosti × strošek zamude (glej cost-of-delay-in-public-programmes.md)
  3. tveganju prilagojeni skupni stroški lastništva
```

## Praktični primer

Lokalna oblast potrebuje sistem za vodenje primerov za socialno varstvo odraslih. Nakup: SaaS za 180.000 £/leto, v živo čez 4 mesece. Razvoj: ocenjeno 900.000 £ plus 150.000 £/leto vzdrževanja, v živo čez 14 mesecev.

```
Tveganju prilagojen strošek razvoja = 900.000 × 1,4 = 1.260.000 £
5-letni TCO:
  nakup  = 180.000 × 5 = 900.000 £
  razvoj = 1.260.000 + 150.000 × 5 = 2.010.000 £

Člen zamude: sistem prepreči 40.000 £/mesec podvojenih ocenjevanj;
razvoj pride 10 mesecev pozneje kot nakup.
CoD = 10 × 40.000 = 400.000 £

Dejanska primerjava: 900.000 £ (nakup) proti 2.010.000 £ + 400.000 £ = 2.410.000 £ (razvoj)
```

Nakup zmaga za približno 1,5 milijona £ v petih letih, največja posamezna postavka za samo oceno razvoja pa je strošek zamude, ki ga čista primerjava kapitalskih izdatkov nikoli ne bi razkrila.

## Povezava s programskim inženirstvom

Discipline, ki se iz te analize neposredno prenesejo v prakso izvedbe: **prilagoditev tveganja na podlagi predhodnih podatkov**, saj je dvig Mott MacDonald programski ekvivalent mehanično uporabljene optimistične pristranskosti Green Book, zato naj ekipe zagovarjajo izjeme od njega, ne pa predpostavljajo, da je prav njihova ocena izjema. **Poštenost primerjave**: alternativa razvoju je najboljša razpoložljiva možnost nakupa, ne »nič«, kar se neposredno veže na [oportunitetni strošek v javni porabi](../oportunitetni-strošek-pri-javni-porabi/). In **pošteno primerjanje TCO**: vsak predlog razvoja je treba primerjati s polnimi [skupnimi stroški lastništva](../skupni-stroški-lastništva-pri-vladni-informacijski-tehnologiji/) možnosti nakupa, ne z njeno cenikovo ceno. Kjer razvoj resnično zmaga, je treba [strošek zamude](../strošek-zamude-v-javnih-programih/) dodatnega časa razvoja izrecno ovrednotiti v poslovnem primeru in ne pustiti kot neizrečeno predpostavko, da čas ni pomemben.

## Pasti

- **Primerjava cenikove cene dobavitelja z oceno razvoja brez prilagoditve tveganju**: to razvoju dvakrat laska, enkrat pri stroških in enkrat pri roku.
- **Notranje delo z ničelno ceno**: čas državnih inženirjev se obravnava kot »brezplačen«, ker je že v proračunu zaposlenih ministrstva, kar skrije njegov pravi oportunitetni strošek v primerjavi z drugim delom, ki bi ga ekipa lahko opravljala.
- **Neovrednotena zaklenitev v obe smeri**: stroški izstopa pri dobavitelju in prenosljivosti podatkov so resnični, prav tako pa so resnični faktor avtobusa (bus factor) lastnega razvoja in njegova odvisnost od ohranitve majhne, težko nadomestljive notranje ekipe skozi vse življenjsko obdobje.
- **Razlikovanje poslanstva, zatrjevano za vodovod**: »to je za nas ključno«, zatrjevano za integracijski vmesnik ali shrambo dokumentov. Preizkusite, ali bi državljan ali referent sploh opazil, kaj teče spodaj.

## Viri

- Central Digital and Data Office, Technology Code of Practice. <https://www.gov.uk/guidance/the-technology-code-of-practice>
- GOV.UK Service Manual, deciding whether to build or buy technology. <https://www.gov.uk/service-manual>
- HM Treasury, Green Book supplementary guidance on optimism bias. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
