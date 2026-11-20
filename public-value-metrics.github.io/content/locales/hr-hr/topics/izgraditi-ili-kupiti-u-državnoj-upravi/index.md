# Izgraditi ili kupiti u državnoj upravi

Odluka „izgraditi ili kupiti” (build vs buy) strukturirana je, rizikom prilagođena usporedba razvoja po mjeri s komercijalnom ili standardnom nabavom, uspoređena prema diskontiranom [ukupnom trošku vlasništva](../ukupni-trošak-vlasništva-u-državnom-it-u/), vremenu do vrijednosti i riziku. Državna uprava je strukturno sektor koji kupuje: Technology Code of Practice postavlja pretpostavku u korist standardnih i oblačnih rješenja, no inženjerski timovi unutar ministarstava ipak su skloni graditi, iz istih razloga kao i graditelji drugdje.

## Zašto je važno

Technology Code of Practice britanskog Government Digital Servicea (<https://www.gov.uk/guidance/the-technology-code-of-practice>) i prateće upute iz Service Manuala o odluci izgraditi ili kupiti navode ministarstva da razvoj po mjeri opravdaju spram pretpostavke da standardnu sposobnost treba kupiti, a ne graditi, te da samo doista nova sposobnost koja razlikuje misiju opravdava vlastiti kod. Dopunske smjernice Green Booka HM Treasuryja o pristranosti optimizma, izvedene iz pregleda velikih javnih nabava Mott MacDonalda iz 2002., IT projektima daju najširi raspon uvećanja od svih procijenjenih kategorija: procjene kapitalnih troškova preporučuje se uvećati za 10 % na donjem kraju i do 200 % na gornjem prije uporabe u procjeni, što odražava koliko su se izgradnje softvera u javnoj nabavi povijesno podcjenjivale. Analiza izgraditi-ili-kupiti postoji upravo da tu prilagodbu za rizik izvuče na stol prije odobrenja, umjesto da se pojavi kao zahtjev za prekoračenje usred godine.

## Matematika

```
Usporedba na istom horizontu od 3 do 5 godina, diskontirano po Green Bookovoj
društvenoj diskontnoj stopi (vidi social-discount-rate.md):

NPV_opcije = PV(koristi, pomaknute za vrijeme do vrijednosti) − PV(TCO)

Prilagodbe za rizik (obrazac pristranosti optimizma iz Green Booka):
  trošak izgradnje × 1,1–3,0        (raspon uvećanja za IT projekte, Mott MacDonald)
  vrijeme do vrijednosti izgradnje + 40–60 % (prethodno kašnjenje uvođenja)
  kupnja: umjesto toga dodati provjeru stvarnosti integracije i troškove izlaza iz ugovora

Pokretači odluke, redom kojim obično odlučuju:
  1. razlikovnost — je li ta sposobnost misija ili instalacije?
  2. vrijeme do vrijednosti × trošak odgode (vidi cost-of-delay-in-public-programmes.md)
  3. rizikom prilagođen ukupni trošak vlasništva
```

## Primjer iz prakse

Lokalnoj vlasti treba sustav za vođenje slučajeva u socijalnoj skrbi za odrasle. Kupnja: SaaS za 180.000 £ godišnje, u radu za 4 mjeseca. Izgradnja: procijenjenih 900.000 £ uz 150.000 £ godišnje održavanja, u radu za 14 mjeseci.

```
Rizikom prilagođen trošak izgradnje = 900.000 × 1,4 = 1.260.000 £
TCO za 5 godina:
  kupnja     = 180.000 × 5 = 900.000 £
  izgradnja  = 1.260.000 + 150.000 × 5 = 2.010.000 £

Član odgode: sustav izbjegava 40.000 £/mjesečno dupliciranih procjena;
izgradnja stiže 10 mjeseci kasnije od kupnje.
CoD = 10 × 40.000 = 400.000 £

Učinkovita usporedba: 900.000 £ (kupnja) naspram 2.010.000 £ + 400.000 £ = 2.410.000 £ (izgradnja)
```

Kupnja pobjeđuje za otprilike 1,5 milijun £ tijekom pet godina, a najveća pojedinačna stavka nakon same procjene izgradnje jest trošak odgode koji čista usporedba kapitalnih izdataka nikad ne bi otkrila.

## Veza s programskim inženjerstvom

Discipline koje se iz ove analize izravno prenose u praksu isporuke: **prilagodba rizika na temelju prethodnih podataka** — Mott MacDonaldovo uvećanje softverski je ekvivalent mehanički primijenjene pristranosti optimizma iz Green Booka, pa timovi trebaju argumentirati iznimke od njega umjesto pretpostavljati da je njihova procjena iznimka; **iskrenost komparatora** — alternativa izgradnji je najbolja dostupna opcija kupnje, a ne „ništa”, što se izravno veže uz [oportunitetni trošak u javnoj potrošnji](../oportunitetni-trošak-u-javnoj-potrošnji/); i **iskrena usporedba TCO-a** — svaki prijedlog izgradnje treba usporediti s punim [ukupnim troškom vlasništva](../ukupni-trošak-vlasništva-u-državnom-it-u/) opcije kupnje, a ne s njezinom cjenikom. Ondje gdje izgradnja doista pobjeđuje, [trošak odgode](../trošak-odgode-u-javnim-programima/) dodatnog vremena izgradnje treba izričito vrednovati u poslovnom slučaju, a ne ostaviti kao neizrečenu pretpostavku da vrijeme nije važno.

## Zamke

- **Usporedba cjenika dobavljača s izgradnjom neprilagođenom za rizik**: to dvostruko laska izgradnji, jednom na trošku i jednom na rasporedu.
- **Interni rad vrednovan nulom**: inženjersko vrijeme državnih službenika tretira se kao „besplatno” jer je već u proračunu ministarstva za zaposlenike, što skriva njegov pravi oportunitetni trošak spram drugog posla koji bi taj tim mogao raditi.
- **Neiskazana ovisnost u oba smjera**: troškovi izlaska od dobavljača i prenosivosti podataka stvarni su, ali je stvaran i bus-factor izgradnje po mjeri te njezina ovisnost o zadržavanju malog, teško zamjenjivog internog tima tijekom životnog vijeka.
- **Razlikovnost misije tvrdi se za instalacije**: „ovo je ključno za nas” kaže se o integracijskom posredničkom softveru ili pohrani dokumenata; provjerite bi li građanin ili referent ikad primijetio koje od rješenja radi ispod.

## Izvori

- Central Digital and Data Office, Technology Code of Practice. <https://www.gov.uk/guidance/the-technology-code-of-practice>
- GOV.UK Service Manual, deciding whether to build or buy technology. <https://www.gov.uk/service-manual>
- HM Treasury, Green Book supplementary guidance on optimism bias. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
