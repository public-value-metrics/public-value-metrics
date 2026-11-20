# Vrednovanje na temelju otkrivenih preferencija

Metode otkrivenih preferencija zaključuju o vrijednosti netržišnog dobra iz uočljivog ponašanja na srodnom
tržištu, umjesto da ljude izravno pitaju. Hedonističko određivanje cijena i metoda putnih troškova dvije su
glavne tehnike: obje polaze od stvarne transakcije i iz nje izvode implicitnu cijenu za ono što se nikad nije
izravno prodavalo.

## Zašto je važno

Dok [metode izjavljenih preferencija](../vrednovanje-prema-izjavljenim-preferencijama/) postavljaju hipotetsko pitanje, metode
otkrivenih preferencija promatraju što su ljudi doista platili, što Green Book smatra općenito vjerodostojnijim
dokazom, uz ostale jednake uvjete, jer nije podložno hipotetskoj pristranosti: ispitanici u hedonističkoj studiji
cijena kuća doista su platili premiju ili popust koji se mjeri
(<https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>,
Annex 2). Hedonističko određivanje cijena razlaže tržišnu cijenu, tipično cijenu kuće, na implicitne cijene za
svako obilježje dobra, pa analitičari mogu izdvojiti, primjerice, premiju koju kućanstva doista plaćaju da bi
živjela negdje tiše ili s boljom kvalitetom zraka, statistički kontrolirajući svako drugo obilježje koje utječe
na cijenu kuće (veličina, lokacija, školski upisni krug). Metoda putnih troškova čini analognu stvar za
rekreacijske lokacije bez ulaznice: vrijeme i novac koje ljudi troše putujući do lokacije otkrivaju donju
granicu onoga što im lokacija vrijedi, jer nitko ne snosi trošak koji premašuje vrijednost posjeta za njega.

Obje metode dijele strukturno ograničenje: mogu vrednovati samo ono što je ugrađeno u postojeću tržišnu
transakciju. Buka blizu piste vidi se u cijenama kuća jer se ljudi kojima je buka važna razvrstavaju u tiše
stanovanje; egzistencijalna vrijednost vrste koju nitko ne posjećuje ni blizu koje nitko ne živi ne vidi se ni u
jednoj transakciji, a upravo tu prazninu popunjavaju [metode izjavljenih preferencija](../vrednovanje-prema-izjavljenim-preferencijama/).

## Matematika

```
Hedonističko određivanje cijena:
  Cijena kuće = f(strukturna obilježja, obilježja lokacije,
                   promatrano okolišno obilježje, ...)
  Procjenjuje se regresijom; koeficijent uz okolišno obilježje
  (uz sve ostalo konstantno) njegova je implicitna cijena.

  Implicitna cijena obilježja X = ∂(cijena kuće) / ∂X

Metoda putnih troškova:
  Stopa posjeta (posjeti po stanovniku iz zone i) = f(putni trošak iz zone i,
                   zamjenske lokacije, socioekonomske kontrole)
  Procijenite krivulju potražnje za posjetima kao funkciju putnog troška.
  Potrošačev višak = površina ispod procijenjene krivulje potražnje
                    = vrijednost lokacije za posjetitelje
```

Obje metode traže statistički valjan skup kontrola: izostavljanje zbunjujućeg obilježja (hedonističke) ili
obližnje zamjenske lokacije (putni trošak) pristrano pomiče implicitnu cijenu u smjeru koji nije uvijek unaprijed
očit, zbog čega Green Book Annex 2 traži da se iskažu specifikacija regresije i kontrole, a ne samo naslovni
koeficijent.

## Primjer iz prakse

**Nacionalna vlada**: Green Bookova metodologija sjenske cijene ugljika djelomično se oslanja na hedonističke
dokaze, ali jednostavniji ilustrativni slučaj je buka zrakoplova. Hedonistička studija koja regresira prodajne
cijene kuća u području koridora letenja na udaljenošću ponderiranu izloženost buci, uz kontrolu veličine,
starosti i školskog upisnog kruga, nalazi da je svako povećanje prosječne izloženosti buci od 1 decibela
povezano sa smanjenjem cijene kuće od 0,5 %. Za tipičnu kuću od 280.000 £ u zahvaćenom području:

```
Implicitna cijena po decibelu = 280.000 £ × 0,5 % = 1.400 £ po kućanstvu
Kućanstva pogođena povećanjem od 3 dB zbog nove piste = 18.000
Ukupni implicirani trošak povećanja buke = 1.400 £ × 3 × 18.000 = 75,6 mil. £
```

To je jednokratni kapitalizirani trošak (ugrađen u cijenu kuće), pa procjena mora paziti da ga ne računa dvaput
u odnosu na zasebno procijenjeni godišnji tok troška smetnje od buke.

**Dobrotvorna organizacija**: ekološka dobrotvorna organizacija koristi metodu putnih troškova za vrednovanje
prirodnog rezervata s besplatnim ulazom. Podaci iz ankete o poštanskim brojevima posjetitelja daju prosječan
putni trošak povratnog putovanja (vrijeme vrednovano prema Green Bookovoj preporučenoj vrijednosti vremena izvan
posla, plus gorivo) od 14 £ po posjetu, uz 40.000 posjeta godišnje. Procijenjena krivulja potražnje (stope
posjeta padaju kako raste putni trošak iz zone) implicira potrošačev višak po posjetu, povrh 14 £ koje je
stvarno potrošeno, od otprilike 9 £.

```
Ukupna godišnja vrijednost = 40.000 posjeta × (14 £ potrošeno + 9 £ potrošačev višak)
                            = 40.000 × 23 £ ≈ 920.000 £/godišnje
```

To višestruko nadmašuje nulti prihod rezervata od ulaznica i daje povjerenicima dobrotvorne organizacije
obranjiv iznos rekreacijske vrijednosti lokacije pri argumentiranju prema financijerima.

## Veza s programskim inženjerstvom

Razmišljanje o otkrivenim preferencijama pojavljuje se u analitici proizvoda javnog sektora češće nego što
praktičari shvaćaju: podaci o korištenju besplatne državne digitalne usluge sami su dokaz vrijednosti iz
otkrivenih preferencija (učestalost, trajanje sesije i, što je najrječitije, obrasci ponovljenog naspram
jednokratnog korištenja mogu se analizirati kao što model putnih troškova tretira učestalost posjeta u odnosu na
udaljenost). Kad usluga ima stvarne zamjene (papirnati kanal, telefonska linija), „trošak” koji građani snose
koristeći umjesto toga digitalni kanal (vrijeme, podaci, uređaj) može se procijeniti i usporediti s korištenjem,
izravno odražavajući logiku putnih troškova. Vidi [standard digitalnih usluga](../standard-digitalnih-usluga/) i
[vrijednost otvorenih podataka](../vrijednost-otvorenih-podataka/), koja se suočava upravo s ovim problemom vrednovanja za
dobro bez izravne tržišne cijene.

## Zamke

- **Pristranost izostavljene varijable u hedonističkim modelima.** Izostavljanje povezanog obilježja (kvaliteta
  škole koja korelira i s cijenom kuće i s promatranom okolišnom varijablom) pristrano pomiče procjenu
  implicitne cijene; specifikaciju treba iskazati i preispitati, a ne samo rezultat.
- **Zanemarivanje zamjenskih lokacija u studijama putnih troškova.** Otkrivena vrijednost lokacije za
  posjetitelja podcijenjena je ako postoji bliža zamjena koja nije kontrolirana: možda posjećuje uglavnom zato
  što je besplatna, a ne zato što je jedinstveno vrijedna.
- **Primjena otkrivenih preferencija na dobro bez ikakvog tržišnog odjeka.** Egzistencijalna vrijednost,
  vrijednost opcije i vrijednost ostavštine ne pojavljuju se ni u jednoj transakciji i ne mogu se dobiti
  hedonističkim metodama ni metodom putnih troškova; ta praznina pripada
  [vrednovanju na temelju izjavljenih preferencija](../vrednovanje-prema-izjavljenim-preferencijama/).
- **Brkanje kapitalizirane (jednokratne) vrijednosti s godišnjim tokom.** Hedonistički učinci na cijene kuća
  tipično su jednokratne kapitalizirane vrijednosti; njihovo tretiranje kao godišnjeg toka koristi napuhava
  procjenu.

## Izvori

- HM Treasury. "The Green Book," Annex 2: valuing non-market impacts.
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Department for Transport / Civil Aviation Authority. Aircraft noise valuation studies used in
  airport appraisal. <https://www.gov.uk/guidance/aviation-noise>
- Rosen S. "Hedonic Prices and Implicit Markets: Product Differentiation in Pure Competition."
  Journal of Political Economy, 1974.
- Clawson M, Knetsch JL. "Economics of Outdoor Recreation." Johns Hopkins University Press, 1966
  (origin of the travel-cost method).
