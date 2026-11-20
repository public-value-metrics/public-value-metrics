# Distribucijsko ponderiranje

Distribucijsko ponderiranje prilagođava novčanu vrijednost troška ili koristi prema tome tko ih prima, na načelu da dodatna funta vrijedi više siromašnom kućanstvu nego bogatom. Green Book britanskog Ministarstva financija (HM Treasury) daje izričitu metodu za primjenu tog ponderiranja, utemeljenu na opadajućoj granične korisnosti dohotka, kako procjene ne bi prešutno tretirale funtu koju je dobio najbogatiji decil kao jednako vrijednu funti koju je dobio najsiromašniji.

## Zašto je važno

Standardna analiza troškova i koristi zbraja funte ne pitajući čije su, što implicitno pretpostavlja da funta vrijedi jednako svima, a ekonomisti odavno znaju da to nije točno. Kućanstvo koje zarađuje £15.000 godišnje dobitak od £1.000 doživljava posve drukčije od kućanstva koje zarađuje £150.000 godišnje, jer granična korisnost dohotka pada kako dohodak raste. Bez ponderiranja standardna procjena sustavno daje prednost intervencijama koje koriste bogatijim, već povlaštenim skupinama, jer njihova veća kupovna moć napuhuje novčano vrednovanje koristi koje do njih stižu (uređenje parka blizu skupih stanova „pokazuje” veću korist u vrijednosti nekretnina nego isto uređenje blizu jeftinih stanova, isključivo zato što su cijene više, a ne zato što je dobitak u blagostanju veći).

Dodatne smjernice Green Booka o distribucijskoj analizi, osnažene nakon što je pregled Ministarstva financija iz 2020. odgovorio na kritike da je metodologija procjene sustavno favorizirala London i jugoistok, utvrđuju formalan pristup ponderiranju temeljen na pretpostavljenoj elastičnosti granične korisnosti dohotka od oko 1,3, što znači da udvostručenje dohotka otprilike prepolovljuje (preciznije, 2^-1,3 ≈ 0,41 puta) graničnu vrijednost dodatne funte. To nije zaokruživanje: njegova primjena može promijeniti koji od dvaju konkurentnih programa pokazuje višu neto sadašnju vrijednost, osobito pri usporedbi intervencije koncentrirane u siromašnom području s onom raspoređenom na cijelo stanovništvo.

## Matematika

Distribucijski ponder Green Booka za funtu koristi koja pripada kućanstvu s razinom dohotka y, u odnosu na funtu pri nacionalnom prosječnom dohotku ȳ:

```
Weight(y) = (ȳ / y)^e

where:
  y  = household income (or income of the affected group)
  ȳ  = average (reference) household income
  e  = elasticity of marginal utility of income (Green Book: approximately 1,3)
```

Primjena pondera na neto koristi:

```
Weighted benefit = Σ [unweighted benefit to group i × Weight(y_i)]
```

Skupina koja zarađuje polovicu nacionalnog prosjeka (y = 0,5ȳ) dobiva ponder (1/0,5)^1,3 = 2^1,3 ≈ 2,46: svaka funta koristi toj skupini vrijedi otprilike 2,46 puta koliko funta kućanstvu s prosječnim dohotkom.

## Primjer iz prakse

**Dva konkurentna lokalna programa**, svaki s neponderiranom neto koristi od £2 milijuna godišnje, natječu se za isti regionalni fond rasta:

- *Program A*: shema potpore poduzećima u uspješnom gradu, prosječni dohodak kućanstva £45.000 (otprilike 1,3 puta pretpostavljeni nacionalni prosjek od £35.000).
- *Program B*: program vještina u siromašnoj četvrti, prosječni dohodak kućanstva £18.000 (otprilike 0,51 puta nacionalni prosjek).

```
Weight(A) = (35.000 / 45.000)^1,3 = (0,778)^1,3 ≈ 0,72
Weight(B) = (35.000 / 18.000)^1,3 = (1,944)^1,3 ≈ 2,53

Weighted benefit A = £2.000.000 × 0,72 = £1,44 million
Weighted benefit B = £2.000.000 × 2,53 = £5,06 million
```

Bez ponderiranja programi su izjednačeni. S distribucijskim ponderiranjem korist programa B više je nego tri puta veća, što preokreće preporuku o financiranju i odražava izričitu svrhu Green Booka da se traži prikaz ponderiranja, a ne samo neponderiranog omjera koristi i troškova.

**Raspodjela potpore dobrotvorne zaklade**: financijer koji uspoređuje potporu od £500.000 koja stiže do 1.000 kućanstava niskog dohotka (ponder ≈ 2,0, ponderirana vrijednost ekvivalentna £1 milijunu) s istom potporom od £500.000 koja stiže do 1.000 kućanstava srednjeg dohotka (ponder ≈ 1,0, ponderirana vrijednost ekvivalentna £500.000) trebao bi distribucijski argument izričito prikazati u dokumentu za upravu, a ne ostaviti da ga se zaključuje.

## Veza s programskim inženjerstvom

Distribucijsko ponderiranje rijetko se izravno pojavljuje u metrikama isporuke softvera, ali bi trebalo oblikovati način na koji inženjerski i podatkovni timovi osmišljavaju mjerenje i ciljanje:

- Pri izradi nadzorne ploče učinka ili kalkulatora koristi prikažite profil dohotka ili deprivacije onih na koje se odnosi, a ne samo zbroj koristi: agregatni brojevi bez distribucijske raščlambe skrivaju upravo preokret prikazan gore.
- Povežite logiku ciljanja u dizajnu usluge s istim podacima o deprivaciji koje koristi Green Book (vidi [Index of Multiple Deprivation](../indeks-višestruke-deprivacije/)), kako bi se doseg digitalne usluge mogao ocijeniti s gledišta pravednosti, a ne samo učinkovitosti (osporeni četvrti E, equity, u [vrijednosti za novac](../vrijednost-za-novac/)).
- Kada algoritam raspodjeljuje oskudan resurs (termine, vrijeme voditelja slučaja, subvenciju), neponderirana ciljna funkcija „maksimiziraj ukupnu korist” po konstrukciji će reproducirati istu pristranost koju ponderiranje Green Booka treba ispraviti. Na to izričito upozorite vlasnike politika prije optimizacije.

## Zamke

- **Nedosljedna primjena distribucijskih pondera u portfelju.** Ponderiranje koristi jednog programa, ali ne i njegova komparatora daje pristranu, a ne pravedniju usporedbu; Green Book traži jednak tretman.
- **Korištenje vrijednosti nekretnina ili tržišnih vrijednosti kao zamjene za blagostanje bez prilagodbe.** Tržišne cijene i same su iskrivljene postojećom nejednakošću dohotka, a upravo je to ono što distribucijsko ponderiranje treba ispraviti; neprilagođene tržišne vrijednosti mogu dvostruko brojati pristranost.
- **Zanemarivanje varijacija unutar skupine.** Ponderiranje prema prosječnom dohotku područja (npr. decilu Index of Multiple Deprivation) može pogrešno prikazati pojedince koji ne odgovaraju prosjeku svog područja; koristite najfinije podatke o dohotku koji su razumno dostupni.
- **Tretiranje elastičnosti 1,3 kao univerzalne konstante.** Sam Green Book napominje da je riječ o procjeni s vjerojatnim rasponom; velike odluke testirajte osjetljivošću na alternativne elastičnosti umjesto da 1,3 smatrate točnim.

## Izvori

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation", and
  supplementary guidance on distributional impacts (2022 edition).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury, "Green Book Review 2020: Findings and Response" (addressing regional-bias criticism).
  <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>
- Fujiwara D, Campbell R. "Valuation Techniques for Social Cost-Benefit Analysis." HM Treasury/DWP,
  2011 (background on marginal utility of income elasticity estimates).
