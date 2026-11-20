# Sjenske cijene

Sjenska cijena (engl. shadow price) procijenjena je vrijednost dodijeljena dobru, resursu ili vanjskom učinku koji nema vidljivu tržišnu cijenu ili čija je tržišna cijena iskrivljena i ne odražava njegovu pravu društvenu vrijednost. Procjena u državnoj upravi oslanja se na malen skup službenih sjenskih cijena (ugljik, vrijeme izvan rada, nezaposlena radna snaga) koje se objavljuju središnje kako bi svako ministarstvo upotrebljavalo isti broj.

## Zašto je važno

Sjenske cijene postoje jer [društvena analiza troškova i koristi](../društvena-analiza-troškova-i-koristi/) ne može funkcionirati bez novčane vrijednosti svakog troška i svake koristi, a nekoliko najvažnijih među njima (tona ispuštenog ugljika, sat putnikova vremena, sat inače nezaposlenog rada) nema nikakvu tržišnu cijenu ili ima tržišnu cijenu koja krivo prikazuje njihov pravi društveni trošak. Ministarstvo financija (HM Treasury) i Ministarstvo energetske sigurnosti i neto nulte stope emisija (Department for Energy Security and Net Zero) zajednički objavljuju sjensku cijenu ugljika koja se rabi u svim procjenama britanske vlade
(<https://www.gov.uk/government/publications/valuing-greenhouse-gas-emissions-in-policy-appraisal>),
a ona se ne izvodi iz nijedne tržišne cijene ugljika nego iz pristupa usklađenog s ciljem: vrijednost ugljika postavlja se na granični trošak smanjenja emisija potreban za ispunjenje zakonom propisanih ugljičnih proračuna Ujedinjenog Kraljevstva, što je bitno drukčija logika od promatranja po čemu se ugljik doista trguje na europskom ili britanskom sustavu trgovanja emisijama.

Sjenska nadnica slijedi sličnu logiku na strani rada. Zapošljavanje nekoga tko bi inače bio nezaposlen ne košta društvo njegovu punu plaću: dio te plaće prijenos je izgubljenih naknada i izgubljenog slobodnog vremena odnosno vremena traženja posla, a ne novo neto opterećenje društvenih resursa. Zato Green Book određuje sjensku cijenu nižu od tržišne nadnice za radnu snagu koja dolazi iz nezaposlenosti, kako bi odražavala pravi oportunitetni trošak tog rada (vidi [oportunitetni trošak u javnoj potrošnji](../oportunitetni-trošak-u-javnoj-potrošnji/)), a ne njegovu tržišnu cijenu.

## Matematika

```
Sjenska cijena ugljika (ilustrativna struktura; važeće vrijednosti iz
službenog alata za vrijednosti ugljika BEIS/DESNZ, ne rabite zastarjele brojke):
  Vrijednost u sektoru s trgovanjem: temelji se na putanjama cijena
    emisijskih jedinica ETS-a
  Vrijednost u sektoru bez trgovanja (usklađena s ciljem): postavljena na
    granični trošak smanjenja emisija potreban za ispunjenje zakonom
    propisanih ugljičnih proračuna, raste s vremenom kako se lakše
    mogućnosti smanjenja iscrpljuju
  Primjena: £/tona CO2e × tona koje opcija ispusti ili izbjegne,
    diskontirano društvenom diskontnom stopom za buduće godine

Sjenska nadnica (SWR):
  SWR = tržišna nadnica − (vrijednost ušteđenog izgubljenog slobodnog
                           vremena/vremena traženja posla
                           + vrijednost naknada koje se više ne isplaćuju)
  Obično se izražava kao udio tržišne nadnice (npr. SWR = 0,6
    × tržišna nadnica na području s visokom nezaposlenošću, prema smjernicama
    Dodatka A Green Booka o tržištima rada s neiskorištenim kapacitetom)
```

Obje su brojke politička konvencija koja se određuje središnje, a ne empirijsko tržišno opažanje. Cijela je svrha sjenske cijene nadomjestiti tržište koje nedostaje ili je iskrivljeno, pa procjena koja je rabi mora navesti važeći službeni izvor umjesto da izvodi vlastitu brojku, upravo da bi procjene svih ministarstava bile usporedive.

## Primjer iz prakse

**Središnja država**: procjena sustava obrane od poplava procjenjuje da on izbjegava 400 tona CO2e emisija godišnje (smanjenom uporabom hitne opreme i manjom ugrađenom količinom ugljika zbog izbjegnute obnove) tijekom 30-godišnjeg razdoblja procjene, u usporedbi s polaznim scenarijem „minimalnog djelovanja”.

```
Ilustrativna sjenska cijena ugljika: 280 £/tona CO2e (1. godina, raste
  tijekom razdoblja procjene prema službenom rasporedu vrijednosti ugljika
  u sektoru bez trgovanja)
Korist od ugljika u 1. godini = 400 × 280 £ = 112.000 £
```

Budući da službeni raspored vrijednosti ugljika *raste* tijekom razdoblja procjene (što odražava sve strože ugljične proračune), analitičar mora primijeniti točnu vrijednost za svaku godinu 30-godišnjeg niza, a ne fiksnu stopu: primjena vrijednosti iz 1. godine na cijelo razdoblje podcijenila bi koristi kasnijih godina i iskrivila poredak u odnosu na alternativne izvedbe obrane od poplava s drukčijim profilom ugljika.

**Lokalna vlast**: program potpore zapošljavanju dugotrajno nezaposlenih stanovnika u nekoj općini zapošljava 150 ljudi na poslovima plaćenima 11 £ po satu. Vrednovanje prema punoj tržišnoj nadnici pripisalo bi programu 11 £ × odrađeni sati kao društvenu korist, no pristup sjenskom nadnicom prepoznaje da to nisu bili radnici privučeni s drugih poslova: pravi oportunitetni trošak njihova rada prije programa bio je nizak.

```
Tržišna nadnica: 11,00 £/sat
Sjenska nadnica (ilustrativno, visoka lokalna nezaposlenost): 0,6 × tržišna nadnica = 6,60 £/sat
Neto društvena korist pripisiva po odrađenom satu ≈ 11,00 £ − 6,60 £ = 4,40 £/sat
  („dodatna” vrijednost stvorena prebacivanjem doista neiskorištenog rada u proizvodnju,
   za razliku od same nadnice, koja je većim dijelom prijenos)
```

Zato procjene programa zapošljavanja na područjima s visokom nezaposlenošću mogu pokazati pozitivnu neto društvenu vrijednost čak i kada isti program, proveden na području pune zaposlenosti gdje bi se radna snaga jednostavno povlačila s drugih poslova, ne bi.

## Veza s programskim inženjerstvom

Sjenske cijene rijetko izravno dodiruju isporuku softvera, ali su važne kad god poslovni slučaj tvrdi da IT promjena donosi korist za ugljik ili društvo: konsolidacija podatkovnih centara koja tvrdi da štedi ugljik ili usluga bez papira koja tvrdi da izbjegava ugljik od ispisa i pošte mora rabiti važeću službenu sjensku cijenu ugljika umjesto izmišljene brojke i mora primijeniti točan godišnji raspored umjesto fiksne stope, baš kao i svaki drugi ulazni podatak procjene prema Green Booku. Vidi [ukupni trošak vlasništva u državnom IT-u](../ukupni-trošak-vlasništva-u-državnom-it-u/) i [vrijednost kibernetičke sigurnosti u javnom sektoru](../vrijednost-kibernetičke-sigurnosti-u-javnom-sektoru/); u oba je često potrebna sjenska cijena za ulaznu veličinu koju je teško novčano izraziti (rizik od proboja, zastoj) uz izravno troškovno iskazane stavke.

## Zamke

- **Rabljenje zastarjele brojke za ugljik ili nadnicu.** Središnje smjernice povremeno revidiraju obje vrijednosti; procjena izgrađena na zamijenjenoj brojci neće izdržati provjeru Ministarstva financija.
- **Primjena fiksne sjenske cijene ugljika na procjenu koja traje desetljećima.** Službeni raspored raste s vremenom; primjena vrijednosti iz 1. godine na cijelo razdoblje krivo prikazuje profil koristi ili troškova.
- **Brkanje sjenske nadnice s popustom na stvarnu plaću radnika.** Sjenska nadnica prilagođava *procjenin* vrednovanje ulaza rada, a ne plaću koju radnik doista prima; brkanje tih dvaju pojmova navodi na (pogrešno) opravdavanje plaća ispod tržišne razine.
- **Izvođenje vlastite sjenske cijene umjesto upotrebe službene.** Sjenske cijene su politička konvencija upravo zato da procjene budu usporedive među ministarstvima; lokalno izmišljena brojka, koliko god dobro obrazložena, narušava tu usporedivost.

## Izvori

- HM Treasury / Department for Energy Security and Net Zero. "Valuing greenhouse gas emissions in
  policy appraisal." <https://www.gov.uk/government/publications/valuing-greenhouse-gas-emissions-in-policy-appraisal>
- HM Treasury. "The Green Book: appraisal and evaluation in central government," Annex A (shadow
  price of labour, non-work time values).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Little IMD, Mirrlees JA. "Project Appraisal and Planning for Developing Countries." Heinemann,
  1974 (foundational shadow-pricing methodology).
