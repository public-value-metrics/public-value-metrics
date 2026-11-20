# Kartica rezultata javne vrijednosti

Kartica rezultata javne vrijednosti prilagođava uravnoteženu karticu rezultata (balanced scorecard) Roberta
Kaplana i Davida Nortona iz 1992., izrađenu za tvrtke koje optimiziraju dobit kroz financijsku perspektivu,
perspektivu kupca, perspektivu internih procesa te perspektivu učenja i rasta, organizacijama čija je
„donja crta” misija, a ne marža. Prisiljava javno tijelo da iskazuje uspješnost kroz nekoliko nesvodivih
dimenzija istodobno, umjesto da sve sažme u jedan broj koji skriva kompromise.

## Zašto je važno

Izvorni argument Kaplana i Nortona, u Harvard Business Review, bio je da je jedna financijska metrika zaostajući
pokazatelj koji ne govori ništa o tome *zašto* će se uspješnost promijeniti sljedeće tromjesečje. U privatnom
sektoru rješenje su bile četiri povezane perspektive. U državnoj upravi ekvivalentnu strukturu daje „strateški
trokut” Marka Moorea (iz knjige *Creating Public Value*, 1995.): usluga mora istodobno isporučivati **javnu
vrijednost** (ishod misije), održavati **legitimitet i podršku** (politička i javna potpora) i biti
**operativno izvediva** (isporučiva s resursima i sposobnošću koji su zaista dostupni). Knjiga Paula Nivena
*Balanced Scorecard: Step-by-Step for Government and Nonprofit Agencies* (2003.) praktičarski je priručnik za
prevođenje četiriju Kaplanovih i Nortonovih okvira u taj trokut: tipično se „financijska” perspektiva preimenuje u
„upravljanje resursima”, „misija” se stavlja na vrh umjesto „vrijednosti za dioničare” na dno, a perspektive
kupca i dionika tretiraju se ravnopravno, a ne podređeno dobiti. Zašto je to važno za tim za isporuku: javna
digitalna usluga ocjenjivana samo prema financijskoj metrici ili metrici učinkovitosti (recimo, trošak po
transakciji) sustavno će nedovoljno ulagati u dimenzije legitimiteta i ishoda koje financijska metrika ne vidi.

## Matematika

Kartica rezultata javne vrijednosti je okvir, a ne formula, ali je njezina struktura fiksna i vrijedi je
reproducirati točno:

```
Perspektiva          Pitanje javnog sektora                    Primjer pokazatelja
--------------------------------------------------------------------------------
Misija / ishodi       Ostvarujemo li javnu vrijednost koju      Mjera ishoda populacije
                       smo osnovani stvarati?                    (vidi outcomes-vs-outputs)
Upravljanje           Koristimo li javni novac učinkovito       Trošak po ishodu, odstupanje
  resursima            i unutar ovlaštenih granica?               od proračuna
Kupac / korisnik       Mogu li korisnici i građani pristupiti    Stopa dovršetka, zadovoljstvo
                        usluzi i imati koristi od nje?
Legitimitet / podrška   Podržavaju li nas još politički          Metrike povjerenja, revizijski
                        nalogodavci, nadzorna tijela i javnost?   nalazi, osnovane pritužbe
Interni proces /        Imamo li sposobnost i proces da se       Fluktuacija osoblja, trajanje
  učenje                 nastavimo poboljšavati?                   ciklusa, starost zaostataka

Obranjiva kartica rezultata iskazuje 3-5 pokazatelja po perspektivi, odabranih tako da
nijednu perspektivu nije moguće izigrati a da se šteta ne pokaže u drugoj.
```

## Primjer iz prakse

**Odjel za socijalnu skrb odraslih lokalne vlasti**: kartica rezultata za uslugu reablementa (kratkoročna
podrška za ponovno stjecanje samostalnosti nakon boravka u bolnici) iskazuje:

```
Misija:        68 % korisnika usluge više ne treba stalnu skrb nakon 6 tjedana (cilj 65 %)
Upravljanje:   trošak po dovršenoj epizodi reablementa = 1.850 £ (proračunska pretpostavka 2.000 £)
Korisnik:      zadovoljstvo korisnika 82 %, prosječno čekanje na početak usluge 4,1 dana
Legitimitet:   3 osnovane pritužbe na 1.000 epizoda; odbor za zaštitu odraslih ocjenjuje
               uslugu kao „dobru”
Proces:        stopa slobodnih radnih mjesta 14 %, prosječni opseg slučajeva 23 (sigurni gornji prag: 25)
```

Čitani izolirano, brojevi za misiju i upravljanje izgledaju kao jednostavna priča o uspjehu: ispod proračuna
i iznad cilja ishoda. Čitani zajedno s retkom procesa, stopa slobodnih radnih mjesta od 14 % uz gornji prag
opsega slučajeva od 25 pokazuje da se dobar ishod kupuje radom blizu nesigurnih razina osoblja: upozorenje
koje sam broj misije nikad ne bi otkrio, i upravo način neuspjeha koji poziva KPI jedne perspektive (vidi
[KPI-jeve javnog sektora](../ključni-pokazatelji-uspješnosti-u-javnom-sektoru/)).

## Veza s programskim inženjerstvom

Za tim koji gradi internu ili javnu nadzornu ploču kartica rezultata izravan je argument protiv jednog widgeta
„ocjene zdravlja”: izgradite jedan panel po perspektivi i odupirite se pritisku proizvoda da ih sintetizirate u
semafor, jer je upravo korak sinteze mjesto gdje se informacija o kompromisima uništava. Također se uredno
preslikava na strukture OKR-ova proizvodnih timova: OKR misije bez uparenog OKR-a upravljanja resursima ili
procesa ponavlja način neuspjeha jedne metrike protiv kojeg su 1992. pisali Kaplan i Norton. Vidi
[javnu vrijednost](../javna-vrijednost/) za Mooreovu temeljnu teoriju o tome što bi okvir „misije” zapravo trebao
sadržavati te [metrike povjerenja i legitimiteta](../metrike-povjerenja-i-legitimnosti/) za popunjavanje perspektive
legitimiteta stvarnim pokazateljima s izvorom, a ne zamjenom koju nitko ne može obraniti.

## Zamke

- **Sažimanje kartice rezultata u jedan rezultat**: usrednjavanje četiriju perspektiva u jedan broj ponovno uvodi
  upravo onaj problem, loš rezultat legitimiteta prikriven dobrim rezultatom upravljanja resursima, koji kartica
  postoji spriječiti.
- **Preuzimanje „financijske” perspektive iz privatnog sektora bez promjene**: perspektiva upravljanja resursima
  javnog tijela tiče se ostajanja unutar ovlaštenih, često namjenskih proračuna, a ne maksimiziranja prihoda;
  Nivenovo preimenovanje nije kozmetičko.
- **Odabir pokazatelja koje tim koji posjeduje karticu rezultata može jednostrano pomaknuti**: pokazatelj
  legitimiteta čiji izvor je isti tim koji se njime ocjenjuje (npr. samoprijavljeno rješavanje pritužbi) nije
  neovisan dokaz.
- **Jednokratna izrada kartice rezultata bez ponovnog razmatranja težina ili pokazatelja**: Kaplan i Norton
  zamišljali su godišnji pregled strategije; kartica zamrznuta godinama odmiče se od misije koju je trebala
  pratiti.

## Izvori

- Robert S. Kaplan and David P. Norton, "The Balanced Scorecard: Measures That Drive Performance,"
  *Harvard Business Review*, January–February 1992.
- Paul R. Niven, *Balanced Scorecard: Step-by-Step for Government and Nonprofit Agencies*, Wiley,
  2003.
- Mark H. Moore, *Creating Public Value: Strategic Management in Government*, Harvard University
  Press, 1995.
