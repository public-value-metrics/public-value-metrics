# Vrijednost za novac (VFM)

Vrijednost za novac (engl. value for money) formalni je test javnog sektora Ujedinjenog Kraljevstva o tome postiže li potrošnja najbolju dostupnu ravnotežu troška i koristi. Green Book Ministarstva financija (HM Treasury) uokviruje je trima „E”: ekonomičnost (economy), učinkovitost (efficiency) i djelotvornost (effectiveness), a pravednost (equity) se sve više zagovara kao sporno četvrto. Svaki poslovni slučaj javnog sektora koji izdrži provjeru mora izričito odgovoriti na sva tri, a ne samo tvrditi da je potrošnja „vrijedna toga”.

## Zašto je važno

VFM nije sinonim za „jeftino”. Green Book (HM Treasury, izdanje iz 2022.) izričito navodi da je kupnja najjeftinije opcije (ekonomičnost) bez provjere donosi li namjeravane ishode (djelotvornost) čest i skup promašaj: nabava koja štedi 10 % na jediničnom trošku, a isporučuje 40 % manji učinak, lošija je vrijednost, a ne bolja. Okvir triju E prisiljava poslovni slučaj da razluči tri doista različita načina neuspjeha: preplaćivanje ulaznih resursa, rasipanje resursa u pretvorbi u izlazne rezultate i proizvodnju izlaznih rezultata koji se ne pretvaraju u ishode koje je itko želio. Britanske kontrole državne potrošnje (točke odobrenja Ministarstva financija, studije vrijednosti za novac National Audit Officea (NAO) i procjene računodavnih službenika ministarstava) izgrađene su oko tog trodijelnog testa, pa će inženjerski poslovni slučaj koji obrađuje samo trošak (ekonomičnost) pasti na provjeri čak i ako je tehnologija ispravna.

„Četvrto E”, pravednost, sporno je upravo zato što može biti u sukobu s ostalim trima: najučinkovitiji način isporuke usluge na nacionalnoj razini rijetko je i najpravedniji, jer koncentriranje isporuke ondje gdje je građane najjeftinije doseći često znači zanemarivanje onih do kojih je najteže doprijeti. Revizija Green Booka iz 2020. odgovorila je na kritike (uključujući Odbor za financije Donjeg doma 2020. i IPPR North) da omjeri troškova i koristi sustavno favoriziraju već prosperitetne regije, tako što je zatražila da procjene izričito obrađuju distribucijski učinak; vidi [distribucijsko ponderiranje](../distribucijsko-ponderiranje/).

## Matematika

VFM nije jedan omjer nego trodijelna (ili četverodijelna) dijagnostika, primijenjena redom:

```
Ekonomičnost:   Nabavljaju li se ulazni resursi po najnižem razumnom trošku
                za traženu kvalitetu?  (£ po jedinici ulaznog resursa)

Učinkovitost:   Koliko se dobro ulazni resursi pretvaraju u izlazne rezultate?
                (izlazni rezultati / ulazni resursi, npr. obrađeni predmeti po satu referenta)

Djelotvornost:  Proizvode li izlazni rezultati doista namjeravane ishode?
                (postignuti ishodi / namjeravani ishodi)

[Pravednost]:   Raspodjeljuju li se troškovi i koristi pošteno među
                stanovništvom ili se koncentriraju na one kojima je najmanje potrebno?
```

VFM neuspjeh može nastati u bilo kojoj fazi neovisno: ekonomična nabava uz neučinkovitu isporuku; učinkovita isporuka pogrešnog izlaznog rezultata; djelotvorni ishodi kupljeni po pretjeranom trošku. Vidi [KPI-jeve javnog sektora](../ključni-pokazatelji-uspješnosti-u-javnom-sektoru/) o tome kako se to prevodi u mjerljive pokazatelje i [analizu troškovne učinkovitosti u državnoj upravi](../analiza-troškovne-učinkovitosti-u-državnoj-upravi/) za formalnu metodu usporedbe.

## Primjer iz prakse

**Kontaktni centar lokalne vlasti**: općina uspoređuje dvije opcije za novi sustav upravljanja predmetima.

- *Opcija A*: licenca od 600.000 £ (najjeftinija dostupna), ali referenti i dalje u prosjeku troše 22 minute po predmetu jer tijek rada zahtijeva ručno ponovno unošenje među sustavima: učinkovitost je slaba.
- *Opcija B*: licenca od 900.000 £, integrirani tijek rada, referenti u prosjeku troše 9 minuta po predmetu.

Sama ekonomičnost favorizira A (300.000 £ jeftinije). No uz 40.000 predmeta godišnje A košta 40.000 × 22/60 = 14.667 radnih sati; B košta 40.000 × 9/60 = 6.000 radnih sati. Uz potpuno opterećen trošak osoblja od 28 £/sat A košta 410.667 £/godišnje u vremenu osoblja naspram 168.000 £/godišnje kod B: razlika u učinkovitosti od 242.667 £/godišnje koja za 14 mjeseci nadmašuje početnu razliku u ekonomičnosti od 300.000 £. VFM favorizira B čim se uračuna učinkovitost, a ne A.

**Bespovratna sredstva dobrotvorne organizacije**: financijer uspoređuje bespovratna sredstva od 50.000 £ koja postižu 200 uspješnih zapošljavanja (250 £/zapošljavanju: naizgled izvrsna ekonomičnost) s onima od 120.000 £ koja postižu 350 zapošljavanja koja traju dulje od 12 mjeseci, naspram prvih bespovratnih sredstava gdje polovica zapošljavanja prestane unutar 3 mjeseca. Djelotvornost, odnosno trajni ishodi, preokreće prividni VFM poredak: pravi trošak po *trajnom* zapošljavanju iznosi 250 £ ÷ 0,5 = 500 £ za prva bespovratna sredstva, naspram 120.000 £/350 ≈ 343 £ za druga.

## Veza s programskim inženjerstvom

VFM daje inženjerskim timovima disciplinu za uokvirivanje tehnoloških poslovnih slučajeva onako kako će ih financije i revizija doista čitati:

- Iskažite ekonomičnost, učinkovitost i djelotvornost kao zasebne stavke u poslovnom slučaju, a ne jedan pomiješan broj „vrijednosti”: recenzent obučen na Green Booku tražit će upravo tu raščlambu.
- Čuvajte se optimiziranja troška nabave (ekonomičnost) nauštrb integracije i učinkovitosti tijeka rada, vrlo česte lažne uštede u državnom IT-u (vidi
  [ukupni trošak vlasništva u državnom IT-u](../ukupni-trošak-vlasništva-u-državnom-it-u/) i
  [izgraditi ili kupiti u državnoj upravi](../izgraditi-ili-kupiti-u-državnoj-upravi/)).
- Djelotvornost zahtijeva podatke o ishodima, a ne samo brojeve izlaznih rezultata: povežite metrike isporuke s [ishodima naspram izlaznih rezultata](../ishodi-naspram-izlaznih-rezultata/) i sa stvarnom evaluacijom putem
  [kontrafaktualne analize](../kontrafaktualna-analiza/) umjesto da pretpostavljate da izlazni rezultati podrazumijevaju ishode.
- Kad sustav neravnomjerno služi regijama ili demografskim skupinama, pitanje pravednosti legitiman je VFM prigovor, a ne zaseban „ukras”, vidi [digitalnu uključenost](../digitalna-uključenost/).

## Zamke

- **Izjednačavanje VFM-a s najnižom cijenom.** Ekonomičnost je jedna trećina (ili jedna četvrtina) testa; Green Book izričito upozorava na pravila nabave po „najnižem trošku” koja zanemaruju učinkovitost i djelotvornost.
- **Mjerenje izlaznih rezultata i nazivanje ih ishodima.** Protočnost predmeta (učinkovitost) nije isto što i dobro riješeni predmeti (djelotvornost); vidi [ishode naspram izlaznih rezultata](../ishodi-naspram-izlaznih-rezultata/).
- **Tretiranje pravednosti kao neobvezne.** Od ažuriranja Green Booka 2020. distribucijski se učinak treba procjenjivati uz tradicionalna tri E, a ne naknadno dodati; naknadno ugrađivanje nakon odobrenja poslovnog slučaja daleko je teže nego uključivanje od početka.
- **Uspoređivanje opcija uz različite količine bez normalizacije.** Usporedba VFM-a po jedinici među opcijama koje služe različitim populacijama mora kontrolirati razmjer, inače je usporedba učinkovitosti besmislena.

## Izvori

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation" (2022
  edition). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- National Audit Office, "Framework to review programmes and projects" and VFM study methodology.
  <https://www.nao.org.uk/>
- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020).
  <https://www.gov.uk/government/publications/the-magenta-book>
- IPPR North, "Transport Infrastructure Investment: Determining Value for Money" (evidence to the
  Treasury Select Committee's 2020 review of the Green Book's regional bias).
