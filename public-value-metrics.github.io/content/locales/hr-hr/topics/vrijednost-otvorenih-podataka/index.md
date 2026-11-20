# Vrijednost otvorenih podataka

Vrijednost otvorenih podataka problem je procjene što vrijede državni i javni podaci kada nemaju cijenu: ne
prodaju se, pa nema retka prihoda, a ipak njihovo objavljivanje (vremenski zapisi, redovi vožnje, granice
poštanskih brojeva, registri tvrtki) dokazivo stvara gospodarsku i društvenu aktivnost nizvodno. Dobro ih
vrednovati važno je jer su „objaviti je besplatno” i „bezvrijedno je” jednako netočni, a programski
inženjer koji odlučuje hoće li otvoriti API ili skup podataka treba bolji argument od oba.

## Zašto je važno

Najcitiranija procjena odozgo prema dolje potječe iz izvješća McKinsey Global Instituta iz 2013. „Open
data: Unlocking innovation and performance with liquid information”, koje je potencijalnu godišnju
vrijednost otvorenih podataka u sedam područja (obrazovanje, promet, potrošački proizvodi, električna
energija, nafta i plin, zdravstvo i potrošačke financije) procijenilo na 3 do 5 bilijuna dolara godišnje u
svijetu, kroz mehanizme poput veće transparentnosti, učinkovitijeg usklađivanja ponude i potražnje te
omogućivanja novih proizvoda i usluga izgrađenih na tim podacima. Ta je brojka scenarijska procjena, a ne
izmjereni ostvareni rezultat, i rutinski se krivo citira kao da je riječ o prihodu koji država može izravno
prisvojiti, a vrijednost uglavnom pripada trećim stranama (poduzećima, istraživačima, građanima) koje
koriste podatke, što je upravo smisao otvaranja umjesto prodaje. Britanski Open Data Institute, koji su
2012. suosnovali sir Tim Berners-Lee i sir Nigel Shadbolt, od tada je izgradio korpus detaljnijih studija
slučaja odozdo prema gore, sektor po sektor i skup podataka po skup podataka, koje su za stvarni poslovni
slučaj daleko korisnije od naslovne brojke McKinseyja jer pokazuju mehanizam stvaranja vrijednosti, a ne
samo njezinu ukupnu veličinu.

## Matematika

Otvoreni podaci nemaju tržišnu cijenu, pa je zamjenjuju metode vrednovanja; ponavljaju se tri pristupa i
nijedan sam nije dovoljan:

```
1. Metoda izbjegnutog troška / troška zamjene:
   vrijednost ≈ ono što bi korisnici platili da sami proizvedu ili
   licenciraju istovjetne podatke — donja granica, zanemaruje vrijednost
   koju stvaraju uporabe koje izvorni proizvođač nikad nije predvidio

2. Metoda tržišnog analoga / nizvodne aktivnosti:
   vrijednost ≈ prihod ili uštede koje ostvaruju poduzeća/usluge
   izgrađeni na podacima (npr. navigacijske aplikacije izgrađene na
   otvorenim kartografskim i prometnim podacima) — obuhvaća stvarnu
   gospodarsku aktivnost, ali ju je teško čisto pripisati samom
   objavljivanju podataka (vidi additionality-and-deadweight)

3. Metoda kontingentnog vrednovanja / izjavljenih preferencija:
   vrijednost ≈ ono što korisnici kažu da bi platili ili vrijeme
   koje kažu da im štedi — vidi stated-preference-valuation za opću
   metodu i njezine pristranosti

Nijedna od njih ne daje broj čist kao tržišna cijena; vjerodostojni
poslovni slučajevi za otvorene podatke triangulaciju provode kroz
dvije ili više metoda i izričito navode koji mehanizam nosi teret.
```

## Primjer iz prakse

**Ilustrativno objavljivanje nacionalnih kartografskih/adresnih podataka** (metodologija prema studijama
slučaja u stilu ODI-ja, brojke ilustriraju razmjer koji takve studije obično nalaze):

```
Procjena izbjegnutog troška:
  Poduzeća koja bi inače komercijalno licencirala istovjetne podatke
  za usklađivanje adresa, uz procijenjeni prosječni trošak licence od
  4.000 £/godišnje, kroz procijenjenih 15.000 malih i srednjih poduzeća
  koja sada koriste besplatni otvoreni skup podataka
  = 15.000 × 4.000 £ = 60.000.000 £/godišnje samo u izbjegnutom trošku licenciranja

Procjena nizvodne aktivnosti (spekulativnija, treba kontrafaktualni scenarij):
  Novi proizvodi za usmjeravanje dostave i logistiku izgrađeni na
  otvorenim podacima koji bez njih ne bi postojali ili bi bili
  bitno lošiji — zahtijeva usporedbu s kontrafaktualnim scenarijem
  u kojem podaci ostaju zatvoreni ili komercijalno licencirani
  (counterfactual-analysis), jer bi dio te aktivnosti ionako nastao na
  plaćenim podacima po višoj cijeni, što je mrtvi teret u smislu
  „vrijednosti stvorene otvaranjem”

Obranjiv poslovni slučaj iskazuje izbjegnuti trošak kao čvrstu donju
granicu, a nizvodnu aktivnost tretira kao scenarij gornje granice,
a ne kao činjenicu.
```

## Veza s programskim inženjerstvom

Za inženjere je praktično pitanje vrijednosti otvorenih podataka obično uže od nacionalnih naslovnih
brojki: povećava li otvaranje upravo ovog API-ja ili skupa podataka (umjesto držanja iza sporazuma s
partnerom) ponovnu uporabu dovoljno da opravda trajni trošak dokumentiranja, verzioniranja i podrške kao
javnom sučelju? Taj trošak održavanja stvaran je i protuteža je ekonomici „izgradi jednom, koristi često”
iz teme [država kao platforma](../državna-uprava-kao-platforma/): te su dvije teme bliski rođaci, jedna se tiče
zajedničkog koda i infrastrukture, a druga zajedničkih podataka. Svaku tvrdnju o vrijednosti otvorenih
podataka valja provjeriti u odnosu na [dodatnost i mrtvi teret](../dodatnost-i-mrtvi-teret/) prije
nego uđe u poslovni slučaj: aktivnost koja bi se ionako dogodila, na komercijalno licenciranim podacima,
nije vrijednost koju je stvorilo *otvaranje*.

## Zamke

- **Citiranje McKinseyjevih 3 do 5 bilijuna dolara kao brojke specifične za UK ili kao udjela ovog skupa
  podataka**: riječ je o globalnoj scenarijskoj procjeni za sedam sektora iz 2013.; korištenje kao
  preciznog množitelja za jedan nacionalni skup podataka krivo prikazuje što taj broj jest.
- **Nema kontrafaktualnog scenarija**: preuzimanje zasluge za svu nizvodnu gospodarsku aktivnost izgrađenu
  na otvorenim podacima, bez pitanja koliko bi je se ionako dogodilo na plaćenim ili licenciranim
  podacima po višoj cijeni (vidi [dodatnost i mrtvi teret](../dodatnost-i-mrtvi-teret/) i
  [kontrafaktualnu analizu](../kontrafaktualna-analiza/)).
- **Brkanje troška proizvodnje i stvorene vrijednosti**: skup podataka čije je prikupljanje bilo skupo nije
  automatski vrijedan za objavu, a jeftin nije automatski malo vrijedan; vrijednost prati nizvodnu
  uporabu, a ne uzvodni trošak.
- **Zanemarivanje trajnog troška održavanja „otvorenosti”**: objava jednokratnog CSV izvoda nije ista
  obveza kao vođenje dokumentiranog, verzioniranog API-ja uz podršku; nedovoljno financiranje potonjeg
  nakon objave lansiranja uobičajen je način neuspjeha.

## Izvori

- McKinsey Global Institute, "Open data: Unlocking innovation and performance with liquid information" (2013). <https://www.mckinsey.com/business-functions/mckinsey-digital/our-insights/open-data-unlocking-innovation-and-performance-with-liquid-information>
- Open Data Institute. <https://theodi.org/>
