# Višekriterijska analiza odlučivanja (MCDA)

MCDA ocjenjuje i važe opcije prema nekoliko različitih, ponderiranih kriterija istodobno i daje
rangiranu usporedbu, a da ne mora svaki kriterij svoditi na jednu novčanu ili prirodnu jedinicu. To je
metoda procjene za odluke u kojima se ono što je važno doista ne može svesti na jedan broj.

## Zašto je važno

Green Book izričito dopušta MCDA (izravno je razmatraju i njegov dodatak sa studijama slučaja u okviru 2 i
Aneks A) za procjene u kojima su koristi „doista nesumjerljive”, odnosno kada bi pretvaranje svega u novac
putem [socijalne analize troškova i koristi](../društvena-analiza-troškova-i-koristi/) ili u jedan ishod putem
[analize troškovne učinkovitosti](../analiza-troškovne-učinkovitosti-u-državnoj-upravi/) iskrivilo odluku umjesto da je razjasni
(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>).
Odabir lokacije za novi zatvor, primjerice, uravnotežuje kapitalni trošak, utjecaj na zajednicu, prometnu
povezanost, učinak na okoliš i mogućnost zapošljavanja osoblja: kriterije koji nemaju zajedničku jedinicu
i kod kojih bi nametanje zajedničke jedinice (obično novca) prokrijumčarilo vrijednosni sud o relativnoj
važnosti, recimo, utjecaja na okoliš naspram troška, prerušen u objektivnu aritmetiku.

Poštenje MCDA-a ujedno je njegova glavna slabost: budući da težine određuje onaj tko provodi procjenu
(ili panel), metoda je legitimna onoliko koliko je legitiman postupak ponderiranja. Smjernice Green Booka
izričite su da se kriteriji i težine moraju dogovoriti i objaviti *prije* ocjenjivanja opcija, upravo da
se spriječi da recenzent radi unatrag, od željene opcije prema težinama koje je opravdavaju.

## Matematika

```
Za svaku opciju i i kriterij j:
  Ocjena_ij  = učinak opcije prema tom kriteriju (često 0-100
               ili 1-10, na temelju dokaza, stručne procjene ili ocjena dionika)
  Težina_j   = relativna važnost kriterija j, težine zbrojem daju 1 (ili 100)

Ponderirana ocjena opcije i = Σ_j (Ocjena_ij × Težina_j)

Postupak:
1. Dogovorite skup kriterija i težine PRIJE ocjenjivanja bilo koje opcije
   (ponderiranje zamahom ili usporedba u parovima, npr. AHP, uobičajene su metode
   izvlačenja težina).
2. Ocijenite svaku opciju prema svakom kriteriju na zajedničkoj ljestvici, po
   mogućnosti na temelju dokaza.
3. Izračunajte ponderirane zbrojeve; rangirajte opcije.
4. Testirajte osjetljivost težina: preživljava li rang vjerojatno neslaganje
   o tome koliko bi svaki kriterij trebao vrijediti?
```

MCDA ne daje obranjivu apsolutnu vrijednost kao što je neto sadašnja vrijednost u SCBA-u: daje samo
rang uvjetovan dogovorenim težinama. To je prednost kada se odluka doista tiče kompromisa među
nesumjerljivim dobrima, a mana ako se koristi za izbjegavanje težeg posla monetizacije tamo gdje je
monetizacija bila moguća.

## Primjer iz prakse

**Lokalna vlast**: vijeće bira lokaciju za novi reciklažni centar za kućanski otpad. Tri lokacije
ocjenjuje prema četiri kriterija, čije težine određuje međuodjelni panel prije bilo kakvog obilaska
lokacija:

```
Kriteriji (težina):       Kapitalni trošak (30 %)  Prometna dostupnost (25 %)
                           Utjecaj na zajednicu (25 %)  Utjecaj na okoliš (20 %)

Ocjene lokacija (0-100, više = bolje):
Lokacija A: trošak 80, dostupnost 60, zajednica 40, okoliš 70
Lokacija B: trošak 60, dostupnost 90, zajednica 70, okoliš 50
Lokacija C: trošak 90, dostupnost 50, zajednica 80, okoliš 60

Ponderirani zbrojevi:
Lokacija A = 80(0,30) + 60(0,25) + 40(0,25) + 70(0,20) = 24+15+10+14 = 63
Lokacija B = 60(0,30) + 90(0,25) + 70(0,25) + 50(0,20) = 18+22,5+17,5+10 = 68
Lokacija C = 90(0,30) + 50(0,25) + 80(0,25) + 60(0,20) = 27+12,5+20+12 = 71,5
```

Lokacija C ima najviši rang. Analiza osjetljivosti koja težinu utjecaja na zajednicu povećava s 25 % na
35 % (uzimajući 10 postotnih bodova od kapitalnog troška) mijenja zbroj lokacije C u 71,5 − 3 + 8 = 76,5, a
lokacije B u 68 − 6 + 7 = 69. Lokacija C i dalje vodi, pa je rang robustan na to vjerojatno neslaganje
oko ponderiranja, što je upravo provjera koju Green Book očekuje vidjeti u izvješću.

**Dobrotvorna organizacija**: zaklada koja dodjeljuje bespovratna sredstva bira između financiranja
usluge savjetovanja o dugovima, mreže banaka hrane i programa financijske pismenosti. Koristi MCDA, a
ne SROI (vidi [socijalni povrat ulaganja](../društveni-povrat-ulaganja/)) upravo zato što se
povjerenici u dobroj vjeri ne slažu bi li pomoć u krizi ili prevencija trebale imati veću težinu; MCDA im
omogućuje da se dogovore o *obliku* neslaganja (rasponu težina) umjesto da se pretvaraju da ga rješava
jedan omjer SROI-ja.

## Veza s programskim inženjerstvom

MCDA je prirodan alat za odabir dobavljača i arhitekture kada su kriteriji doista u sukobu: izbor između
oblaka i lokalnog (on-premises) sustava za upravljanje slučajevima uravnotežuje trošak, rizik podatkovnog
suvereniteta, pristupačnost i brzinu isporuke na načine koji se ne svode na jedan broj. Voditelji
inženjerstva trebali bi inzistirati da se ponderiranje provede prije ocjenjivanja opcija, točno kako
zahtijeva Green Book, jer ponderiranje provedeno nakon što se vidi uži popis pouzdano zastranjuje prema
opciji koju je soba već favorizirala. Uobičajenu primjenu MCDA-a vidi u temi
[izgraditi ili kupiti u državnoj upravi](../izgraditi-ili-kupiti-u-državnoj-upravi/), a srodan alat strukturiranog
ocjenjivanja koji se koristi nakon odluke, a ne prije nje, u temi
[kartica rezultata javne vrijednosti](../kartica-rezultata-javne-vrijednosti/).

## Zamke

- **Određivanje težina nakon što se vide opcije.** To je najčešći pojedinačni način na koji se MCDA
  izigrava, namjerno ili ne; objavite težine prije ocjenjivanja i zabilježite tko ih je odredio.
- **Tretiranje ponderiranog zbroja kao čvrstog broja.** Ocjena 71,5 naspram 68 nije statistički
  značajan razmak ako analiza osjetljivosti ne potvrdi da je rang stabilan; iskazujte raspone, a ne
  lažnu preciznost.
- **Korištenje MCDA-a za izbjegavanje monetizacije koja je bila izvediva.** Ako se većina kriterija
  vjerodostojno može iskazati cijenom, zadano posezanje za MCDA-om umjesto za
  [SCBA-om](../društvena-analiza-troškova-i-koristi/) odbacuje informacije koje je procjena mogla iskoristiti.
- **Prepuštanje svih težina jednom dominantnom dionika.** Dobra praksa Green Booka očekuje da se težine
  izvuku od reprezentativnog panela, a ne od ravnatelja sponzora, kako procjena ne bi samo iznova izvela
  ono što ta osoba već želi.

## Izvori

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022, Annex A
  (multi-criteria decision analysis) and Box 2 case studies.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Communities and Local Government. "Multi-criteria analysis: a manual." 2009.
  <https://www.gov.uk/government/publications/multi-criteria-analysis-a-manual>
- Belton V, Stewart TJ. "Multiple Criteria Decision Analysis: An Integrated Approach." Kluwer,
  2002.
