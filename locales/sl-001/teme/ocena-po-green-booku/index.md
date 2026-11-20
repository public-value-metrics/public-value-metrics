# Ocena po Green Booku (model petih primerov)

Green Book je obvezno navodilo britanskega zakladnega ministrstva (HM Treasury) za ocenjevanje in vrednotenje predlogov vladne porabe v Združenem kraljestvu. Njegovo osrednje orodje, model petih primerov (five-case model), prisili poslovni primer, da odgovori na pet ločenih vprašanj – ali je dobra zamisel, ali prinaša vrednost, ali se lahko nabavi, ali si ga je mogoče privoščiti in ali ga je mogoče izvesti – namesto da bi vse strnil v eno številko, ki jo minister lahko odmahne.

## Zakaj je pomembno

Vsak predlog porabe osrednje britanske vlade nad pooblaščenimi mejami ministrstva mora pred sprostitvijo sredstev skozi oceno po Green Booku, pregled Green Book Review 2020 pri HM Treasury (objavljen po kritikah, da je bil postopek pristranski proti revnejšim regijam, glej <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>) pa je zaostril zahtevo, da se možnosti primerjajo z resnično osnovno možnostjo »narediti minimum« in da se strateška ustreznost dokaže, še preden se sploh oceni vrednost za denar. Model petih primerov sam je starejši od Green Booka – izvira iz Office of Government Commerce kot standardna struktura poslovnega primera – a izdaja Green Booka iz leta 2022 ga vgradi kot obvezno obliko vsakega poslovnega primera, ki išče odobritev Treasury: <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>.

Smisel delitve primera na pet delov je, da lahko predlog odpove na kateri koli razsežnosti, ne glede na druge. Strateško utemeljena, stroškovno učinkovita zamenjava informacijske platforme lahko vseeno ne prestane komercialnega primera, če jo lahko dostavi le en dobavitelj (kar ustvari tveganje enojnega razpisa), ali upravljavskega primera, če ministrstvo nima izkušenj z izvedbo programov take velikosti. Ena sama ocena »vrednosti za denar« skrije ravno tak način odpovedi.

## Matematika

Model petih primerov je struktura, ne formula, vendar ima vsak primer svoj količinski ali dokazni preizkus:

```
1. Strateški primer
   Dokaz o cilju porabe, povezanem s strategijo organizacije.
   Preizkus: ali sploh obstaja razlog za spremembo? (»ne storiti nič« je vedno možnost.)

2. Ekonomski primer
   Ocena možnosti glede na osnovno možnost »narediti minimum« z uporabo
   družbene analize stroškov in koristi ali analize stroškovne učinkovitosti.
   Preizkus: katera možnost maksimira neto javno vrednost?
   Glej ../social-cost-benefit-analysis/ in ../cost-effectiveness-analysis-in-government/

3. Komercialni primer
   Angažiranje trga, pot javnega naročanja, razdelitev tveganja med
   naročnika in dobavitelja.
   Preizkus: ali je prednostna možnost mogoče nabaviti pod sprejemljivimi pogoji?

4. Finančni primer
   Cenovna dostopnost znotraj proračunskih mej ministrstva, vir financiranja,
   obravnava v bilanci stanja.
   Preizkus: ali si ga lahko privoščimo, letos in vsako leto po tem?

5. Upravljavski primer
   Upravljanje, načrt projekta, načrt uresničevanja koristi, register tveganj.
   Preizkus: ali lahko ta organizacija to dejansko izvede?
   Glej ../benefits-realization/
```

Ekonomski primer je tam, kjer živi količinska ocena: možnosti se primerjajo na podlagi neto sedanje vrednosti, popravljene z [družbeno diskontno stopnjo](../družbena-diskontna-stopnja/), po metodi [družbene analize stroškov in koristi](../družbena-analiza-stroškov-in-koristi/) ali, kjer koristi ni mogoče pošteno denarno izraziti, z [analizo stroškovne učinkovitosti](../analiza-stroškovne-učinkovitosti-v-upravi/) ali [večkriterijsko analizo odločanja](../večkriterijska-odločitvena-analiza/).

## Praktični primer

**Lokalna oblast**: občina, ki ocenjuje informacijski sistem za stanovanjska popravila v vrednosti £12 milijonov, izvede pet primerov takole. Strateški primer: zaostanek popravil brez posega v 18 mesecih krši zakonski standard primernih domov (decent-homes standard). Ekonomski primer: tri možnosti, stroškovno ovrednotene v 10-letnem obdobju ocene pri 3,5-odstotni diskontni stopnji (po standardni družbeni stopnji časovne preference Green Booka iz leta 2022) – »narediti minimum« (popraviti stari sistem, NPV −£4,1 mio), »kupiti« (platforma COTS, NPV +£2,3 mio), »zgraditi« (platforma po meri, NPV +£0,6 mio, ko se na nediskontirani kapitalski strošek uporabi 40-odstotna optimistična pristranskost za razvoj programske opreme, po Prilogi A Green Booka). Kupiti zmaga v ekonomskem primeru. Komercialni primer: obstajata dva sposobna dobavitelja, konkurenčni razpis je izvedljiv – uspešno. Finančni primer: kapital je na voljo pri Public Works Loan Board, prihodkovni stroški se ujemajo s srednjeročnim finančnim načrtom – uspešno. Upravljavski primer: občina je v zadnjih petih letih izvedla dva primerljiva sistema – uspešno. Predlog se nadaljuje z možnostjo »kupiti«.

**Osrednje vladno ministrstvo**: predlog z močnim ekonomskim primerom (NPV +£40 mio), kjer ima ustrezno akreditacijo le en dobavitelj, ne prestane komercialnega preizkusa konkurenčne napetosti, kar prisili bodisi odstopanje od enojnega razpisa (z lastnim bremenom nadzora) bodisi preoblikovanje specifikacije za odprtje trga – ekonomski primer sam tega ne bi nikoli pokazal.

## Povezava s programskim inženirstvom

Inženirske ekipe znotraj vlade ali organizacij, financiranih z nepovratnimi sredstvi, običajno vidijo le ekonomski primer, ker je to del, ki ga morata produktno in inženirsko vodstvo utemeljiti (»kakšen je ROI te migracije?«). Toda poslovni primer, ki zadovolji Treasury ali odbor za nepovratna sredstva, potrebuje vseh pet, inženirji pa so pogosto najbolj usposobljeni za odgovor na komercialni primer (ali se to dejansko lahko nabavi ali nas veže na lastniško obliko enega dobavitelja?) in upravljavski primer (ali imamo zmogljivost izvedbe ali je odvisna od tega, da tri osebe ne odidejo?). Zahtevo po »samo številkah poslovnega primera« obravnavajte kot zahtevo po eni petini dejanske odločitve. Glej [vrednost za denar](../vrednost-za-denar/), kako se izhod ekonomskega primera običajno povzame, in [skupne stroške lastništva](../skupni-stroški-lastništva-pri-vladni-informacijski-tehnologiji/) za običajno količinsko jedro finančnega primera.

## Pasti

- **Pisanje ekonomskega primera najprej in strateškega primera, da se ujema z njim.** Green Book Review 2020 je ugotovil, da ravno ta način odpovedi vodi pristranskost ocen k krajem in sektorjem, ki so že dobro dokumentirani, kar utrjuje regionalno neenakost; strateški primer bi moral določiti cilj, preden se možnosti primerjajo.
- **Obravnavanje »narediti minimum« kot »ne storiti nič«.** Pravilna osnova je možnost z najnižjim stroškom, ki še vedno izpolnjuje minimalne pravne ali varnostne obveznosti, ne fantazija ničelne porabe – primerjava z dobesedno nič napihne navidezno vrednost vsake možnosti.
- **Preskakovanje komercialnega in upravljavskega primera, ker je ekonomski primer močan.** Predlog z visokim NPV, ki ga ni mogoče konkurenčno nabaviti ali ga naročnik ne more izvesti, ni predlog, vreden financiranja; pregledovalci Treasury pogosto zavrnejo na teh podlagah tudi ob prepričljivem ekonomskem primeru.
- **Enkratna uporaba modela petih primerov na začetku.** Green Book zahteva, da se primer ponovno pregleda ob vsaki naslednji odobritveni točki (strateški okvirni primer, okvirni poslovni primer, celoten poslovni primer), ko se stroški in dokazi utrdijo – primer, zamrznjen na okvirni stopnji, zgreši porast stroškov, ki bi ga ujela poznejša točka.

## Viri

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury. "Green Book Review 2020: findings and response." 2020.
  <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>
- HM Treasury / Infrastructure and Projects Authority. "Guide to developing the project business
  case." <https://www.gov.uk/government/publications/project-business-case-guide>
