# Procjena prema Green Booku (model pet slučajeva)

Green Book je obvezujuće smjernica britanskog Ministarstva financija (HM Treasury) za procjenu i evaluaciju prijedloga državne potrošnje u UK-u. Njegov središnji alat, model pet slučajeva (five-case model), prisiljava poslovni slučaj da odgovori na pet zasebnih pitanja (je li to dobra ideja, donosi li vrijednost, može li se nabaviti, može li se financirati i može li se isporučiti), umjesto da se sve sažme u jedan broj koji ministar može odobriti jednim pokretom ruke.

## Zašto je važno

Svaki prijedlog potrošnje središnje vlade UK-a iznad ograničenja delegiranih ministarstvima mora proći procjenu prema Green Booku prije nego što se odobre sredstva, a pregled Green Booka Ministarstva financija iz 2020. (objavljen nakon kritika da je postupak pristran prema siromašnijim regijama, vidi <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>) pooštrio je zahtjev da se opcije uspoređuju s pravom osnovnom linijom „učiniti minimum” (do minimum) i da se strateška uklopljenost dokaže prije nego što se uopće ocjenjuje vrijednost za novac. Sam model pet slučajeva stariji je od Green Booka (potječe iz Office of Government Commerce kao standardna struktura poslovnog slučaja), ali ga izdanje Green Booka iz 2022. ugrađuje kao obvezan oblik svakog poslovnog slučaja koji traži odobrenje Ministarstva financija: <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>.

Smisao dijeljenja slučaja na pet dijelova je u tome što prijedlog može propasti na bilo kojoj dimenziji bez obzira na ostale. Strateški utemeljena, troškovno učinkovita zamjena IT platforme i dalje može pasti na komercijalnom slučaju ako je može isporučiti samo jedan dobavljač (rizik izravne pogodbe), ili pasti na slučaju upravljanja ako ministarstvo nema iskustva u isporuci programa te veličine. Jedinstvena ocjena „vrijednosti za novac” skriva upravo takav oblik neuspjeha.

## Matematika

Model pet slučajeva je struktura, a ne formula, ali svaki slučaj ima vlastiti kvantitativni ili dokazni test:

```
1. Strategic case
   Evidence of a spending objective linked to organisational strategy.
   Test: is there a case for change at all? ("do nothing" is always an option.)

2. Economic case
   Options appraisal against a "do minimum" baseline, using
   social cost-benefit analysis or cost-effectiveness analysis.
   Test: which option maximizes net public value?
   See ../social-cost-benefit-analysis/ and ../cost-effectiveness-analysis-in-government/

3. Commercial case
   Market engagement, procurement route, risk allocation between
   buyer and supplier.
   Test: is the preferred option procurable on acceptable terms?

4. Financial case
   Affordability within departmental budget limits, funding source,
   balance sheet treatment.
   Test: can we afford it, this year and every year after?

5. Management case
   Governance, project plan, benefits realization plan, risk register.
   Test: can this organization actually deliver it?
   See ../benefits-realization/
```

Ekonomski slučaj je mjesto gdje živi kvantitativna procjena: opcije se uspoređuju na osnovi neto sadašnje vrijednosti prilagođene [društvenoj diskontnoj stopi](../društvena-diskontna-stopa/), metodom [društvene analize troškova i koristi](../društvena-analiza-troškova-i-koristi/) ili, kada se koristi ne mogu pošteno novčano izraziti, putem [analize troškovne učinkovitosti](../analiza-troškovne-učinkovitosti-u-državnoj-upravi/) ili [višekriterijske analize odlučivanja](../višekriterijska-analiza-odlučivanja/).

## Primjer iz prakse

**Lokalna uprava**: vijeće koje procjenjuje IT sustav za popravke stanova vrijedan £12 milijuna provodi pet slučajeva ovako. Strateški slučaj: zaostatak popravaka krši zakonski standard pristojnog stanovanja unutar 18 mjeseci bez intervencije. Ekonomski slučaj: tri opcije s troškovima izračunatima u razdoblju procjene od 10 godina uz diskontnu stopu 3,5 % (prema standardnoj društvenoj stopi vremenske preferencije iz Green Booka 2022.): „učiniti minimum” (zakrpati stari sustav, NPV −£4,1 mil.), „kupiti” (COTS platforma, NPV +£2,3 mil.), „izgraditi” (platforma po mjeri, NPV +£0,6 mil. nakon primjene 40 % pristranosti optimizma (optimism bias) za razvoj softvera na nediskontirani kapitalni trošak, prema Green Book Annex A). Kupnja pobjeđuje u ekonomskom slučaju. Komercijalni slučaj: postoje dva sposobna dobavljača, natječaj je moguć: prolazi. Financijski slučaj: kapital je dostupan od Public Works Loan Board, prihodovni troškovi stanu u srednjoročni financijski plan: prolazi. Slučaj upravljanja: vijeće je u posljednjih pet godina isporučilo dva usporediva sustava: prolazi. Prijedlog ide dalje s opcijom „kupiti”.

**Ministarstvo središnje vlade**: prijedlog s jakim ekonomskim slučajem (NPV +£40 mil.), ali gdje samo jedan dobavljač ima potrebnu akreditaciju, pada na testu komercijalnog slučaja zbog tržišnog nadmetanja, što prisiljava na izuzeće za izravnu pogodbu (uz vlastiti teret nadzora) ili na redizajn specifikacije radi otvaranja tržišta; sam ekonomski slučaj to nikad ne bi otkrio.

## Veza s programskim inženjerstvom

Inženjerski timovi unutar državne uprave ili organizacija financiranih potporama obično vide samo ekonomski slučaj, jer je to dio koji se od vodstva proizvoda i inženjerstva traži da opravda („koliki je ROI ove migracije?”). No poslovni slučaj koji prolazi Ministarstvo financija ili odbor za potpore treba svih pet, a inženjeri su često najbolje postavljeni da odgovore na komercijalni slučaj (može li se to uopće nabaviti, ili nas veže uz vlasnički format jednog dobavljača?) i slučaj upravljanja (imamo li sposobnost isporuke, ili ovisi o tome da tri određene osobe ne odu?). Zahtjev za „samo brojke poslovnog slučaja” tretirajte kao zahtjev za jednu petinu stvarne odluke. Vidi [vrijednost za novac](../vrijednost-za-novac/) o tome kako se izlaz ekonomskog slučaja obično sažima te [ukupni trošak vlasništva](../ukupni-trošak-vlasništva-u-državnom-it-u/) za uobičajenu kvantitativnu jezgru financijskog slučaja.

## Zamke

- **Pisanje ekonomskog slučaja prvo, a strateškog da mu odgovara.** Pregled Green Booka 2020. utvrdio je da upravo taj oblik neuspjeha vodi pristranost procjene prema mjestima i sektorima koji su već dobro dokumentirani, učvršćujući regionalnu nejednakost; strateški slučaj treba utvrditi cilj prije nego što se opcije uspoređuju.
- **Tretiranje „učiniti minimum” kao „ne činiti ništa”.** Ispravna osnovna linija je opcija najnižeg troška koja i dalje zadovoljava minimalne zakonske ili sigurnosne obveze, a ne fantazija o nultoj potrošnji: usporedba s doslovnom nulom napuhuje prividnu vrijednost svake opcije.
- **Preskakanje komercijalnog slučaja i slučaja upravljanja jer je ekonomski slučaj jak.** Prijedlog s visokim NPV-om koji se ne može nabaviti natjecateljski ili ga organizacija sponzor ne može isporučiti nije prijedlog koji se može financirati; recenzenti Ministarstva financija redovito odbijaju na tim osnovama čak i uz uvjerljiv ekonomski slučaj.
- **Primjena modela pet slučajeva samo jednom, na početku.** Green Book traži da se slučaj ponovno razmotri na svakoj sljedećoj točki odobrenja (strateški okvirni slučaj, okvirni poslovni slučaj, cjeloviti poslovni slučaj) kako se troškovi i dokazi učvršćuju; slučaj zamrznut u okvirnoj fazi propušta eskalaciju troškova koju bi kasnija točka uhvatila.

## Izvori

- HM Treasury. "The Green Book: appraisal and evaluation in central government." 2022.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury. "Green Book Review 2020: findings and response." 2020.
  <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>
- HM Treasury / Infrastructure and Projects Authority. "Guide to developing the project business
  case." <https://www.gov.uk/government/publications/project-business-case-guide>
