# Odgovornost zasnovana na ishodima

Odgovornost zasnovana na ishodima (Outcomes-Based Accountability, OBA), koja se naziva i odgovornost
zasnovana na rezultatima (Results-Based Accountability, RBA), okvir je Marka Friedmana kojim se razdvajaju
dva pitanja koja izvješćivanje u javnom sektoru uobičajeno miješa: „ide li populaciji dobro?” (odgovornost
na razini populacije) i „ide li ovom konkretnom programu dobro?” (odgovornost za izvedbu). Miješanje ta dva
pitanja, prema Friedmanu, najčešći je pojedinačni razlog zbog kojeg se dobro vođene programe okrivljuje za
populacijske trendove koje nikad nisu imali moć promijeniti.

## Zašto je važno

Friedman je okvir izložio u knjizi *Trying Hard Is Not Good Enough* (2005.), tvrdeći da većina javnog
izvješćivanja donositelje odluka ili zatrpava statistikama na razini populacije koje nijedna agencija ne
kontrolira (stopa trudnoće među tinejdžericama, stopa nezaposlenosti, očekivani životni vijek) ili ih
zatrpava brojanjem aktivnosti na razini programa (obrađeni klijenti, uputnice) koje ne govore ništa o tome je
li se ičiji život poboljšao. Doprinos RBA-a je malen, discipliniran rječnik koji ta dva razdvaja:
populacijski rezultati (uvjeti blagostanja cijele populacije, poput „djeca se rađaju zdrava”) ne pripadaju
nijednoj agenciji i traže da se mnogo partnera kreće zajedno; mjere izvedbe (koliko dobro određeni program
služi svojim konkretnim klijentima) pripadaju jednoj agenciji i trebaju se ocjenjivati samo prema onome na što
ta agencija doista može utjecati. Friedmanova „tri pitanja o izvedbi” (koliko smo napravili, koliko smo to
dobro napravili i je li nekome bolje?) danas su ugrađena u ugovaranje usluga socijalne skrbi u američkim
saveznim državama i okruzima te, preko savjetničke tvrtke i alata Clear Impact usklađenih s RBA-om, naširoko
korištena u naručivanju usluga u lokalnoj upravi u UK-u i zemljama Commonwealtha. Praktični ulozi su
ugovorni: stambeni program ne bi se smio ukinuti zato što je stopa beskućništva u gradu porasla iz
makroekonomskih razloga izvan njegova dosega, ali ga svakako treba ukinuti ako njegovi vlastiti klijenti nisu
zbrinuti.

## Matematika

```
Odgovornost na razini populacije („širi okvir” koji dijele zajednica, regija ili država):
  Rezultat     — uvjet blagostanja (npr. „stanovnici su ekonomski sigurni”)
  Pokazatelj(i) — mjera tog uvjeta (npr. stopa nezaposlenosti, medijan dohotka kućanstva)
  → nijedan program ne posjeduje pokazatelj; kretanje traži mnoge doprinositelje

Odgovornost za izvedbu (za što je odgovoran jedan program):
  Koliko smo napravili?        — opseg aktivnosti (obrađeni klijenti, isporučene jedinice)
  Koliko smo to dobro napravili? — kvaliteta/učinkovitost (% koji su završili program, trošak po klijentu)
  Je li nekome bolje?          — ishod koji je važan (% zaposlenih 6 mjeseci nakon
                                  programa, prije/poslije ili u odnosu na usporednu skupinu)

Program se ocjenjuje prema trećem pitanju o izvedbi, nikad izravno prema pokazatelju
na razini populacije, osim ako bi ga njegov opseg i dizajn vjerojatno mogli sami pomaknuti.
```

## Primjer iz prakse

**Program potpore zapošljavanju koji financira grad**, 500 sudionika godišnje, ugovoren s lokalnom
vlašću prema okviru izvedbe u stilu RBA-a:

```
Pokazatelj na razini populacije (kontekst, a ne rezultatska kartica programa):
  Stopa nezaposlenosti u gradu: 6,2 % (porast s 5,8 % prethodne godine, zbog zatvaranja
  tvornice izvan kontrole programa)

Mjere izvedbe (stvarna odgovornost programa):
  Koliko:  upisano 500 sudionika (cilj 480) — ispunjeno
  Koliko dobro: stopa završetka 78 %; trošak po osobi koja je završila = 340.000 £ / 390 ≈ 872 £
  Je li bolje: od 390 koji su završili, 260 je trajno zaposleno nakon 6 mjeseci = 66,7 %
               naspram 41 % u usklađenoj usporednoj skupini (vidi counterfactual-analysis)
```

Prema čitanju kroz odgovornost na razini populacije program izgleda kao da propada: stopa nezaposlenosti u
gradu porasla je za njegova mandata. Prema RBA-ovu čitanju kroz odgovornost za izvedbu program uspijeva:
dosegnuo je ciljni opseg, zadržao stabilnu kvalitetu i ostvario ishod zaposlenosti 25,7 postotnih bodova
iznad usklađene usporedne skupine, dok se pokazatelj na razini populacije kretao iz razloga (zatvaranje
tvornice) posve izvan kontrole programa.

## Veza s programskim inženjerstvom

RBA se izravno preslikava na poznatu SRE razliku: pokazatelji na razini populacije slični su poslovnim
„North Star” metrikama koje nijedan inženjerski tim ne posjeduje od početka do kraja (prihod tvrtke, tržišni
udio), dok su mjere izvedbe slične vlastitim SLO-ovima tima, onome što odluke tog tima o dizajnu doista
pomiču. Nadzorna ploča koja iskazuje oboje bez oznake što je što poziva upravo na pogrešno pripisivanje koje je
RBA trebao spriječiti: dežurni inženjer okrivljen za metriku koju kontrolira tim o kojem ovisi. Pri naručivanju
ili izgradnji alata za izvješćivanje u ugovorima o ishodima trojku „koliko / koliko dobro / je li bolje”
izgradite kao prvorazredna, zasebno filtrirana polja, a ne kao jedan pomiješani KPI: to je ista disciplina kao
razdvajanje prethodnih i zaostajućih pokazatelja u temi [KPI-jevi javnog sektora](../ključni-pokazatelji-uspješnosti-u-javnom-sektoru/). RBA je
i logika odgovornosti ispod [plaćanja prema rezultatima i društvenih obveznica učinka](../plaćanje-prema-rezultatima-i-društvene-obveznice-učinka/):
ugovor o plaćanju prema rezultatima može pošteno plaćati samo prema mjeri izvedbe „je li bolje”, nikad prema
pokazatelju na razini populacije, osim ako je intervencija doista dominantan pokretač tog pokazatelja.

## Zamke

- **Plaćanje ili kažnjavanje programa prema pokazatelju na razini populacije koji ne može kontrolirati**: to je
  jedina pogreška koju RBA postoji spriječiti; prije vezivanja posljedica uvijek provjerite je li program veliki
  ili mali doprinositelj populacijskom rezultatu.
- **Iskazivanje „koliko” kao da je „je li bolje”**: brojanje aktivnosti (obrađeni klijenti) najlakše je za
  prikupiti i najmanje informativno; inzistirajte da se na pitanje „je li nekome bolje” odgovori stvarnim
  podacima o ishodima, idealno u odnosu na kontrafaktualni scenarij (vidi
  [kontrafaktualnu analizu](../kontrafaktualna-analiza/)).
- **Tretiranje RBA pokazatelja kao zauvijek fiksnih**: Friedmanova je metoda izričito iterativna, ciklus
  „podaci, priča, što djeluje, akcijski plan”, a ne jednokratna vježba dizajna rezultatske kartice.
- **Nema usporedne skupine za „je li bolje”**: promjena prije/poslije bez kontrafaktualnog scenarija
  miješa učinak programa s trendom koji bi populacija ionako pokazala.

## Izvori

- Mark Friedman, *Trying Hard Is Not Good Enough: How to Produce Measurable Improvements for
  Customers and Communities*, Trafford Publishing, 2005.
- Clear Impact, "What is Results-Based Accountability?"
  <https://clearimpact.com/results-based-accountability/>
