# Senčne cene

Senčna cena je ocenjena vrednost, ki se pripiše dobrini, viru ali zunanjemu učinku, za katerega ni opazne tržne cene ali pa je tržna cena popačena in ne odraža prave družbene vrednosti. Vladno vrednotenje projektov se opira na majhen nabor uradnih senčnih cen – ogljik, čas zunaj dela, brezposelna delovna sila – ki jih osrednje objavljajo, da vsa ministrstva uporabljajo isto število.

## Zakaj je pomembno

Senčne cene obstajajo, ker [družbena analiza stroškov in koristi](../družbena-analiza-stroškov-in-koristi/) ne more delovati brez denarne vrednosti vsakega stroška in vsake koristi, številni najpomembnejši – tona izpuščenega ogljika, ura potnikovega časa, ura sicer brezposelne delovne sile – pa nimajo nobene tržne cene ali pa tržna cena napačno prikazuje njihov pravi družbeni strošek. HM Treasury (britansko finančno ministrstvo) in Department for Energy Security and Net Zero (ministrstvo za energetsko varnost in neto ničelne emisije) skupaj objavljata senčno ceno ogljika, ki se uporablja pri vseh britanskih vladnih ocenah
(<https://www.gov.uk/government/publications/valuing-greenhouse-gas-emissions-in-policy-appraisal>).
Ta ni izpeljana iz nobene tržne cene ogljika, temveč iz pristopa, skladnega s cilji: vrednost ogljika je določena kot mejni strošek zmanjšanja emisij, potreben za dosego zakonsko določenih ogljičnih proračunov Združenega kraljestva, kar je bistveno drugačna logika od opazovanja, po čem se ogljik dejansko trguje v sistemu EU ali britanskem sistemu trgovanja z emisijami.

Senčna plača sledi podobni logiki na strani dela. Zaposlitev osebe, ki bi bila sicer brezposelna, družbe ne stane njene polne plače – del te plače je prenos iz opuščenih socialnih prejemkov ter izgubljenega prostega časa in časa iskanja zaposlitve in ne neto novo črpanje družbenih virov – zato smernice Green Book (britanski priročnik za vrednotenje) določajo za delovno silo iz brezposelnosti senčno ceno, nižjo od tržne plače, ki odraža pravi oportunitetni strošek tega dela (glej [oportunitetni strošek pri javni porabi](../oportunitetni-strošek-pri-javni-porabi/)) in ne njegove tržne cene.

## Matematika

```
Senčna cena ogljika (ilustrativna struktura, trenutne vrednosti so v
uradnem orodju BEIS/DESNZ za vrednosti ogljika – ne uporabljajte zastarelih številk):
  Vrednost za trgovalni sektor: izhaja iz gibanj cen dovolilnic ETS
  Vrednost za netrgovalni sektor (skladna s cilji): določena kot mejni
    strošek zmanjšanja emisij, potreben za izpolnitev zakonsko določenih
    ogljičnih proračunov; sčasoma raste, ko se lažje možnosti
    zmanjšanja izčrpajo
  Uporaba: £/tono CO2e × tone, ki jih možnost izpusti ali prepreči,
    diskontirano z družbeno diskontno stopnjo za prihodnja leta

Senčna plača (SWR):
  SWR = tržna plača − (vrednost prihranjenega prostega časa/časa iskanja
                        + vrednost socialnih prejemkov, ki se ne izplačujejo več)
  Običajno izražena kot delež tržne plače (npr. SWR = 0,6
    × tržna plača na območju z visoko brezposelnostjo, po smernicah
    Green Book, Priloga A, o trgih dela s prostimi zmogljivostmi)
```

Obe številki sta politični konvenciji, ki ju določa center, ne empirični tržni opazovanji – bistvo senčne cene je nadomestiti manjkajoči ali popačeni trg, zato mora ocena, ki jo uporablja, navesti trenutni uradni vir in ne izpeljati lastne številke, ravno zato, da so ocene vseh ministrstev primerljive.

## Praktični primer

**Državna uprava**: ocena načrta protipoplavne zaščite ugotavlja, da prepreči 400 ton izpustov CO2e na leto (zaradi manjše uporabe nujne mehanizacije in manjšega vgrajenega ogljika zaradi preprečene obnove) v 30-letni življenjski dobi ocene, v primerjavi z izhodiščem »storiti minimum«.

```
Ilustrativna senčna cena ogljika: £280/tono CO2e (1. leto, naraščajoča
  v obdobju ocene po uradnem razporedu vrednosti za netrgovalni ogljik)
Korist od ogljika v 1. letu = 400 × £280 = £112 000
```

Ker uradni razpored predvideva *naraščajočo* vrednost ogljika v obdobju ocene (zaradi strožjih ogljičnih proračunov), mora analitik za vsako leto 30-letnega toka uporabiti pravilno vrednost za to leto in ne enotne stopnje – uporaba vrednosti iz 1. leta za vsa leta bi podcenila koristi v poznejših letih in popačila razvrstitev glede na alternativne zasnove protipoplavne zaščite z drugačnimi ogljičnimi profili.

**Lokalna oblast**: občinski program podpore zaposlovanju za dolgotrajno brezposelne prebivalce zaposli 150 oseb z urno postavko £11. Vrednotenje s polno tržno plačo bi programu pripisalo £11 × opravljene ure kot družbeno korist, pristop senčne plače pa upošteva, da to niso bili delavci, privabljeni z drugih delovnih mest – pravi oportunitetni strošek njihovega dela pred programom je bil nizek.

```
Tržna plača: £11,00/uro
Senčna plača (ilustrativno, visoka lokalna brezposelnost): 0,6 × tržna plača = £6,60/uro
Neto družbena korist, pripisljiva uri dela ≈ £11,00 − £6,60 = £4,40/uro
  (»dodatna« vrednost, nastala s premikom resnično nedejavne delovne sile v
   proizvodnjo, za razliko od same plače, ki je večinoma prenos)
```

Zato lahko ocene programov zaposlovanja na območjih z visoko brezposelnostjo pokažejo pozitivno neto družbeno vrednost, tudi kadar je isti program, izveden na območju polne zaposlenosti, kjer bi se izrinjena delovna sila preprosto črpala z drugih delovnih mest, ne bi pokazal.

## Povezava s programskim inženirstvom

Senčno oblikovanje cen se le redko neposredno dotika razvoja programske opreme, vendar je pomembno, kadar poslovni primer navaja ogljično ali družbeno korist informacijske spremembe – konsolidacija podatkovnih centrov, ki navaja prihranke ogljika, ali brezpapirna storitev, ki navaja preprečeni ogljik pri tiskanju in pošiljanju – mora uporabiti trenutno uradno senčno ceno ogljika in ne izmišljene številke ter mora uporabiti pravilni razpored po letih in ne enotne stopnje, natanko kot pri vsakem drugem vhodnem podatku ocene po Green Book. Glej [skupne stroške lastništva pri vladni informacijski tehnologiji](../skupni-stroški-lastništva-pri-vladni-informacijski-tehnologiji/) in [vrednost kibernetske varnosti v javnem sektorju](../vrednost-kibernetske-varnosti-v-javnem-sektorju/), kjer sta pogosto poleg neposredno ovrednotenih postavk potrebni senčni ceni za težko denarno ovrednotljiv vložek (tveganje vdora, izpad).

## Pasti

- **Uporaba zastarele vrednosti ogljika ali plače.** Obe vrednosti osrednje smernice občasno revidirajo; ocena, zgrajena na preseženi številki, ne bo prestala pregleda Treasury.
- **Uporaba enotne senčne cene ogljika v večdesetletni oceni.** Uradni razpored sčasoma narašča; uporaba vrednosti iz 1. leta povsod napačno prikaže profil koristi ali stroškov.
- **Zamenjava senčne plače z znižanjem dejanskega plačila delavca.** Senčna plača prilagodi *oceni* vrednost delovnega vložka, ne plače, ki jo delavec dejansko prejme – njuna zamenjava vabi k (napačnemu) utemeljevanju plač pod tržno ravnjo.
- **Izpeljava lastne senčne cene namesto uporabe uradne.** Senčne cene so politične konvencije ravno zato, da so ocene med ministrstvi primerljive; lokalno izmišljena številka, četudi dobro utemeljena, to primerljivost uniči.

## Viri

- HM Treasury / Department for Energy Security and Net Zero. "Valuing greenhouse gas emissions in
  policy appraisal." <https://www.gov.uk/government/publications/valuing-greenhouse-gas-emissions-in-policy-appraisal>
- HM Treasury. "The Green Book: appraisal and evaluation in central government," Annex A (shadow
  price of labour, non-work time values).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Little IMD, Mirrlees JA. "Project Appraisal and Planning for Developing Countries." Heinemann,
  1974 (foundational shadow-pricing methodology).
