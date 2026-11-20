# Trošak po ishodu

Trošak po ishodu jest ukupna potrošnja programa podijeljena s brojem osoba koje postignu definiranu, smislenu promjenu svojih okolnosti, a ne s brojem onih koji su samo primili uslugu. To je najoštrija metrika učinkovitosti koju financijer ili isporučiteljski tim može koristiti, jer nameće prethodno pitanje koje većina dobrotvornih organizacija izbjegava: što točno računamo kao uspjeh?

## Zašto je važno

Banka hrane iz računa iste godine može iskazati dva vrlo različita broja. Trošak po podijeljenom paketu hrane mogao bi biti 15 £. Trošak po kućanstvu koje potom postigne sigurnost opskrbe hranom, odnosno više ne treba hitnu pomoć u hrani, što je provjereno u naknadnoj točki, mogao bi biti 340 £. Oba su točna. Samo jedan govori financijeru djeluje li novac. Jaz između njih jest jaz između izlaznog rezultata i ishoda: predani paket je izlazni rezultat; kućanstvo koje više nije u krizi je ishod. Vidi [ishode naspram izlaznih rezultata](../ishodi-naspram-izlaznih-rezultata/).

Britanski treći sektor dva je desetljeća gradio infrastrukturu koja tu razliku nameće. „Pristup četiriju stupova” (four pillar approach) organizacije New Philanthropy Capital učinkovitosti dobrotvornih organizacija izričito traži od organizacija da navedu svoje ishode prije izlaznih rezultata, a Inspiring Impact, britansko udruženje za mjerenje učinka potpomognuto financijerima, objavljuje Outcomes Matrix koju sada mnoge prijave za bespovratna sredstva od organizacija traže da popune. Godišnji istraživački program „State of Hunger” organizacije Trussell Trust, provođen s Heriot-Watt University, postoji upravo zato što sami brojevi paketa ne govore ništa o tome izlaze li ljudi iz nesigurnosti opskrbe hranom.

Trošak po ishodu išta znači tek kad se utvrdi kontrafaktualni scenarij: ishod koji bi se postigao „u svakom slučaju” nije ishod koji je program kupio. Vidi [kontrafaktualnu analizu](../kontrafaktualna-analiza/) i [istiskivanje i pripisivanje](../istiskivanje-i-pripisivanje-učinka/).

## Matematika

```
Trošak po ishodu = ukupni trošak programa / broj korisnika koji postižu definirani ishod

gdje je:
  Ukupni trošak programa = izravni trošak isporuke + pošten udio režije
  Definirani ishod       = unaprijed određena, mjerljiva promjena stanja
                           (npr. „sigurna opskrba hranom pri praćenju nakon 6 mjeseci”,
                           a ne „primio paket hrane”)
```

Usporedite s [bazama jediničnih troškova](../baze-jediničnih-troškova/) (npr. sektorski specifični referentni jedinični troškovi) kako biste procijenili je li određeni trošak po ishodu dobar, prosječan ili loš u odnosu na usporedive intervencije.

## Primjer iz prakse

**Banka hrane, jedna godina**:

- Ukupni trošak programa: 450.000 £
- Podijeljeni paketi: 30.000
- Trošak po paketu (metrika izlaznog rezultata): 450.000 £ / 30.000 = **15 £**

Organizacija provodi i šestomjesečnu naknadnu anketu na uzorku kućanstava i utvrđuje da 35 % kućanstava koja su primila tri ili više paketa izvješćuje da više ne treba hitnu pomoć u hrani i postiže rezultat iznad praga sigurnosti opskrbe hranom na standardnom modulu ankete o sigurnosti opskrbe hranom. Od 1.800 kućanstava koja su te godine primila tri ili više paketa, 630 postiže taj ishod.

```
Trošak po ishodu = 450.000 £ / 630 = 714 £ po kućanstvu koje postiže sigurnost opskrbe hranom
```

Tih 714 £ je broj koji bi trebao koristiti financijer koji tu organizaciju uspoređuje s pilotom novčanih transfera ili uslugom savjetovanja o dugovima, a ne 15 £. Ako usporediv program novčanih transfera u istoj regiji postiže sigurnost opskrbe hranom po 500 £ po kućanstvu, banka hrane nije očito učinkovitiji put do istog ishoda, iako joj trošak po paketu izgleda jeftino.

## Veza s programskim inženjerstvom

Većina sustava za vođenje slučajeva izgrađena je da bilježi izlazne rezultate, jer se oni događaju unutar transakcije (paket se preda, obrazac se podnese). Ishodi se obično događaju kasnije, često izvan uobičajenog prozora bilježenja sustava, i traže namjernu odluku o dizajnu: izgradite mehanizam praćenja (okidač ankete, tijek ponovnog kontakta, povezivanje podataka) kao ravnopravnu značajku, a ne naknadnu dopunu za godišnje izvješće. Inženjeri koji grade platforme za upravljanje bespovratnim sredstvima ili vođenje slučajeva za sektor trebaju pitanje „što je događaj ishoda i kako ga opažamo” tretirati kao pitanje zahtjeva postavljeno prije nego što se model podataka učvrsti: znatno je teže naknadno ugraditi polje ishoda nego brojač izlaznih rezultata. Vidi [ishode naspram izlaznih rezultata](../ishodi-naspram-izlaznih-rezultata/) i [logički model](../logički-model/) za strukturiranje tog razgovora o zahtjevima te [trošak po korisniku](../trošak-po-korisniku/) za bržu, grublju metriku kojoj timovi posežu kad praćenje ishoda još nije izgrađeno.

## Zamke

- **Izvješćivanje izlaznih rezultata prerušenih u ishode.** „Dosegnuti ljudi” nije „ljudi kojima je pomognuto”. Ako se metrika može proizvesti iz zapisa sustava bez naknadnog kontakta, gotovo sigurno je izlazni rezultat.
- **Igranje nazivnikom.** Sužavanje populacije ishoda na „one koji su dovršili program” tiho izbacuje one koji su odustali, često najteže slučajeve, i napuhuje prividnu stopu. Nazivnik iskažite kao sve koji su započeli, a ne sve koji su završili.
- **Nema kontrafaktualnog scenarija.** Brojanje svakoga tko je postigao ishod, uključujući one koji bi ga postigli u svakom slučaju, precjenjuje što je program kupio. Vidi [kontrafaktualnu analizu](../kontrafaktualna-analiza/).
- **Usporedba različitih definicija ishoda.** „Sigurna opskrba hranom” izmjerena validiranim modulom ankete nije usporediva sa „sigurnom opskrbom hranom” samoprijavljenom u obrascu zadovoljstva; ljestvica troška po ishodu pošteno je samo kad se definicije ishoda podudaraju.

## Izvori

- New Philanthropy Capital (NPC), "Four Pillar Approach" to charity effectiveness. <https://www.thinknpc.org/resource-hub/four-pillar-approach/>
- Inspiring Impact, Outcomes Matrix and impact measurement resources. <https://inspiringimpact.org/>
- Trussell Trust and Heriot-Watt University, "State of Hunger" research programme. <https://www.trusselltrust.org/state-of-hunger/>
- GiveWell, "Our criteria" (cost-effectiveness as the leading criterion for charity recommendation). <https://www.givewell.org/how-we-work/our-criteria>
