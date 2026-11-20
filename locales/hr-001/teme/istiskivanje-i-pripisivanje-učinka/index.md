# Istiskivanje i pripisivanje učinka

Istiskivanje (displacement) nastaje kada se prividna korist programa postiže oduzimanjem aktivnosti ili koristi s nekog drugog mjesta, umjesto stvaranjem nečeg novog: vaša pobjeda tuđi je gubitak. Pripisivanje učinka (attribution) srodno je pitanje koliki dio uočenog ishoda vaša intervencija doista može prisvojiti, kada su pridonijeli i drugi akteri i čimbenici. Obje su standardne korekcije u britanskim smjernicama za evaluaciju u javnom sektoru, uz mrtvi teret (deadweight) i curenje (leakage), a tvrdnje o učinku koje djeluju znatno snažnije nego što jesu redovito ih preskaču.

## Zašto je važno

Program potpora poduzećima koji lokalna uprava provodi i kojim se 50 trgovina seli u zonu regeneracije može izvijestiti „potpomognuto 50 poduzeća, otvoreno 200 radnih mjesta”. No ako su ta poduzeća samo preselila iz susjedne glavne ulice umjesto da se šire, radna mjesta su istisnuta, a ne stvorena, pa neto učinak na razini cijele općine (ili regije) može biti blizu nule. Magenta Book britanskog Ministarstva financija (HM Treasury) i dugogodišnji Additionality Guide istiskivanje smatraju obveznim odbitkom upravo zato što su lokalne priče o uspjehu česte i kada ne donose nikakvu neto korist na nacionalnoj ili regionalnoj razini: vrijednost se jednostavno premjestila, često na štetu područja ili aktera koji su je izgubili. Smjernice za evaluaciju strukturnih fondova (koristile su se za bivše programe Europskog fonda za regionalni razvoj i njihove domaće nasljednike, poput UK Shared Prosperity Fund) to formaliziraju na tri prostorne razine: lokalno istiskivanje (unutar grada), regionalno istiskivanje (unutar regije) i nacionalno istiskivanje (u cijelom UK-u), jer intervencija može biti dodatna na jednoj razini, a na široj biti čisto istiskivanje: program zapošljavanja koji privlači radnike iz susjednog grada nacionalno je neutralan, čak i ako izgleda kao lokalni uspjeh.

Pripisivanje je srodni problem u isporuci koja se uvelike oslanja na partnerstva, što je danas norma u socijalnom sektoru i u javnim uslugama koje uključuju više agencija. Kada tri organizacije zajednički pružaju uslugu sprječavanja beskućništva, godišnje izvješće svake od njih može zasebno prisvojiti zasluge za isto smanjenje broja ljudi koji spavaju na ulici: zbrojen po izvješćima, tvrdeni učinak može premašiti stvarno uočenu promjenu, ponekad višestruko. Smjernice Magenta Booka o analizi doprinosa (contribution analysis) postoje upravo zato što je nasumično pripisivanje jednom akteru u isporuci s više agencija često nemoguće, a pošten odgovor je često „pridonijeli smo ovom ishodu”, a ne „uzrokovali smo ovaj ishod”.

## Matematika

Istiskivanje kao dio standardnog niza za izračun neto učinka (cijeli lanac vidi u [dodatnost i mrtvi teret](../dodatnost-i-mrtvi-teret/)):

```
Net additional impact = Gross outcome − Deadweight − Displacement − Leakage, × Multiplier

Displacement rate = benefit/activity diverted from elsewhere
                     / total gross benefit/activity observed
```

Pripisivanje, kada više aktera pridonosi jednom ishodu, obično se izražava kao udio doprinosa, a ne kao točan postotak, jer se obično ne može izmjeriti jednako strogo kao istiskivanje:

```
Attributable share ≈ f(strength of causal contribution, other actors' contributions,
                        external/contextual factors)

Claimed impact should never exceed:
  Σ (each partner's attributable share) ≤ 100% of the total observed outcome
```

## Primjer iz prakse

**Potpora za regeneraciju**: program potpora za glavnu ulicu koji provodi vijeće izvješćuje o 200 novih radnih mjesta u maloprodaji u financiranoj zoni. Naknadno istraživanje anketom pokazuje da je 60 tih radnih mjesta došlo od poduzeća koja su se preselila iz susjedne, nefinancirane glavne ulice unutar iste općine, a daljnjih 30 od nacionalnih lanaca koji bi otvorili poslovnice negdje u regiji bez obzira na potporu.

```
Gross jobs claimed = 200
Local displacement = 60 (moved within the borough)
Regional displacement = 30 (would have opened regionally anyway)

Net additional jobs (borough level) = 200 − 60 = 140
Net additional jobs (regional level) = 200 − 60 − 30 = 110
```

Pošten naslov ovisi o zemljopisnoj razini koja zanima financijera: poslovni slučaj za Ministarstvo financija ocijenjen na nacionalnoj ili regionalnoj razini trebao bi koristiti 110, a ne 140 s razine općine, a svakako ne sirovih 200.

**Usluga za beskućnike s više agencija**: tri partnerske organizacije (vijeće, dobrotvorna organizacija za stanovanje i zdravstvena ustanova) zajednički pružaju uslugu smanjenja broja ljudi koji spavaju na ulici. Broj osoba koje spavaju na ulici u tom području pao je tijekom godine za 30. Godišnje izvješće svake organizacije tvrdi „smanjili smo broj ljudi koji spavaju na ulici za 30”: zbrojena, tri izvješća tvrde da je pomognuto 90 ljudi, tri puta više od stvarnog smanjenja. Analiza doprinosa koja svakom partneru dodjeljuje udio (recimo 40 % vijeće, 35 % dobrotvorna organizacija, 25 % zdravstvena ustanova, na temelju dokumentirane uloge i neovisne procjene) izvijestila bi 12, 10,5 odnosno 7,5, što se ispravno zbraja u uočenih 30.

## Veza s programskim inženjerstvom

Istiskivanje i pripisivanje određuju kako treba dizajnirati sustave za praćenje učinka i izvještavanje o ishodima kod isporuke na više lokacija ili s više partnera:

- Zemljopisni i organizacijski opseg trebaju biti izričita polja prvog reda u svakoj nadzornoj ploči učinka: podatak naveden „za općinu” i isti podatak naveden „za regiju” različiti su brojevi, a sustav koji ih miješa proizvodi brojke koje se ne mogu uskladiti na razini portfelja.
- Kada više partnera isporučuje zajednički, sustav za ishode trebao bi bilježiti udjele doprinosa (ili barem označiti zajedničko pripisivanje), umjesto da svaki partnerski modul za izvještavanje zasebno prisvaja 100 % zajedničkog ishoda; inače će zbirna izvješća na razini portfelja precijeniti ukupni učinak, ponekad jako.
- To se povezuje sa [socijalnim povratom na ulaganje](../društveni-povrat-ulaganja/) i [izvještavanjem o ishodima potpora](../izvještavanje-o-ishodima-potpora/): izračun SROI-ja ili IRIS+ koji zanemaruje istiskivanje ili prekomjerno pripisuje zajedničke ishode dat će napuhan omjer koji ne preživljava reviziju ni ponavljanje.

## Zamke

- **Izvještavanje o lokalnom uspjehu bez provjere šireg istiskivanja.** Program može izgledati vrlo uspješno na najmanjoj razini izvještavanja, a na široj biti neutralan ili čak negativan; uvijek navedite zemljopisnu razinu na koju se neto podatak odnosi.
- **Dopuštanje da svaki partner u zajedničkoj isporuci prisvoji puni zasluge.** Ako udjeli doprinosa nisu dogovoreni i dokumentirani, zbirno izvješćivanje po partnerima precijenit će ukupni učinak; provjerite da zbroj tvrdnji na razini partnera nije veći od uočenog ukupnog iznosa.
- **Tretiranje pripisivanja kao točnog postotka, iako je zapravo prosudba.** Analiza doprinosa, za razliku od nasumičnog kontrafaktualnog scenarija, daje obranjivu procjenu, a ne izmjerenu činjenicu; prikažite je uz odgovarajuću nesigurnost umjesto lažne preciznosti.
- **Zanemarivanje istiskivanja kod intervencija usmjerenih na tržište.** Potpora poduzećima, programi zapošljavanja i regeneracija vezana uz mjesto klasične su kategorije s visokim istiskivanjem; provjere istiskivanja za njih smatrajte obveznima, a ne neobveznima.

## Izvori

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020), including
  guidance on contribution analysis. <https://www.gov.uk/government/publications/the-magenta-book>
- HM Treasury / Department for Business, Innovation and Skills, "Additionality Guide: A Standard
  Approach to Assessing the Additional Impact of Interventions" (3rd edition).
- European Commission, "Evalsed: The Resource for the Evaluation of Socio-Economic Development" —
  guidance on local, regional, and national displacement scales.
- Mayne J. "Contribution Analysis: An Approach to Exploring Cause and Effect." ILAC Brief No. 16,
  2008.
