# Produktivnost javnih usluga

Produktivnost javnih usluga mjeri koliko učinkovito javna potrošnja pretvara ulaze (osoblje, kapital, robu i
usluge) u izlazne rezultate prilagođene kvaliteti, za usluge (zdravstvo, obrazovanje, policija, socijalna
skrb) koje nemaju tržišnu cijenu pa nemaju ni iznos prihoda kojim bi se troškovi mogli podijeliti. Britanski
Ured za nacionalnu statistiku (ONS) objavljuje ovu seriju od sredine 2000-ih i ona ostaje metodološki
najrazvijeniji nacionalni pokušaj odgovora na pitanje „postaje li država bolja ili lošija u pretvaranju novca u
javne usluge?”

## Zašto je važno

Na tržištu je produktivnost (vrijednost izlaza) / (trošak ulaza), a vrijednost izlaza može se promatrati jer je
netko za nju plaća. Zamjena kuka, školsko mjesto i policijska ophodnja nemaju prodajnu cijenu, pa se naivno
mogu mjeriti samo *ulazi* (što je potrošeno), što komentatore navodi da rastuću javnu potrošnju smatraju
automatski lošom, jer više ulaza uz ravnu naslovnu aktivnost izgleda kao pad produktivnosti. Metodologija ONS-a,
izložena u publikacijama „Sources and Methods” za produktivnost javnih usluga, to rješava izgradnjom *izlaznog*
indeksa iz volumena aktivnosti (obavljene operacije, poučeni učenici, istražena kaznena djela), a zatim
*prilagodbom kvaliteti* tog izlaznog indeksa: za zdravstvo uključujući stope preživljavanja i vrijeme čekanja, za
obrazovanje postignuća, a za policiju ishode poput rješavanja slučajeva, tako da usluga koja obavi isti broj
operacija, ali postigne bolje stope preživljavanja, bude zabilježena kao produktivnija, a ne samo kao skuplja.
Naslovni nalaz koji se ponavlja kroz izdanja ONS-a otrežnjujući je za sektor: produktivnost javnih usluga UK-a
snažno je pala tijekom pandemije bolesti COVID-19, a prema ONS-ovim izdanjima iz sredine 2020-ih u nekoliko
podsektora, uključujući zdravstvo, još se nije oporavila na razinu iz 2019., iako je potrošnja rasla; taj jaz
„više financiranja” i „više produktivnosti” preoblikuje u dva posve odvojena pitanja.

## Matematika

```
Izlazni indeks (volumen) = Σ (aktivnost_i × težina relativnog jediničnog troška_i), ponderirano baznom
                          godinom preko svih aktivnosti usluge (npr. operacije kuka, operacije katarakte,
                          konzultacije kod liječnika opće prakse), analogno Laspeyresovu/Paascheovu
                          indeksu volumena

Prilagodba kvaliteti      = izlazni indeks × faktor prilagodbe kvaliteti
                          (npr. uključujući promjenu stopa preživljavanja, vremena čekanja,
                          postignuća ili ponovnog počinjenja djela kao množitelj sirovog volumena)

Indeks ulaza              = Σ (radni sati × težina troška rada) + (trošak robe/usluga,
                          deflacioniran) + (potrošnja kapitala)

Rast ukupne faktorske produktivnosti = % promjene indeksa izlaza prilagođenog kvaliteti
                                       − % promjene indeksa ulaza
```

## Primjer iz prakse

**Ilustrativni izračun produktivnosti akutnog sektora NHS-a** (struktura prati metodologiju ONS-a):

```
Godina 1: indeks volumena izlaza = 100,0 (bazna godina), indeks ulaza = 100,0
          → indeks produktivnosti = 100,0

Godina 2: volumen aktivnosti raste 3,0 % (više operacija, više pregleda)
          ali se prosječno vrijeme čekanja pogoršava, što primjenjuje
          diskont prilagodbe kvaliteti od −1,0 %
          Indeks izlaza prilagođen kvaliteti = 100 × 1,030 × 0,990 = 101,97

          Ulazi rastu: broj osoblja +4,0 %, ostali troškovi (deflacionirani) +1,5 %,
          ponderirani indeks ulaza = 100 × 1,032 = 103,2

Rast produktivnosti = (101,97 / 100 − 1) − (103,2 / 100 − 1)
                     = 1,97 % − 3,2 % = −1,23 postotna boda

Tumačenje: aktivnost je porasla, ali su ulazi rasli brže, a kvaliteta
je blago pala, pa je produktivnost, izlaz po jedinici ulaza, pala
iako je „pruženo više skrbi”.
```

To je točno obrazac koji su izdanja ONS-a opetovano iskazivala za dijelove NHS-a nakon pandemije: rastuća
potrošnja i rastuća sirova aktivnost koegzistiraju s padom izmjerene produktivnosti kad se uračunaju i
prilagodba kvaliteti i rast ulaza.

## Veza s programskim inženjerstvom

Produktivnost javnih usluga populacijski je analogon rasprava o inženjerskoj produktivnosti (isporučene story
točke naspram [DORA metrika](../dora-metrike-za-javnu-vrijednost/) naspram
[metrika toka](../metrike-toka-u-isporuci-državne-uprave/)): sirova propusnost bez prilagodbe kvaliteti jednako je
zavaravajuća u bolnici kao što su „isporučene linije koda” u softverskom timu. Timovi koji grade podatkovne
cjevovode uspješnosti za ministarstva trebali bi prilagodbu kvaliteti tretirati kao prvorazrednu, verzioniranu
fazu transformacije, a ne fusnotu, jer ONS-ova vjerodostojnost počiva na tome da je ta prilagodba transparentna,
ponovljiva i revidirana kako stižu bolji podaci o kvaliteti (ONS revidira procjene produktivnosti prošlih godina
kad se temeljni podaci o kvaliteti, npr. stope preživljavanja, finaliziraju, pa svaki nizvodni sustav koji
koristi te statistike mora podržavati unatrag datirane revizije, a ne samo dodavati nova razdoblja). Izravno se
križa i s [ukupnim troškom vlasništva](../ukupni-trošak-vlasništva-u-državnom-it-u/) te
[produktivnošću umjetne inteligencije u javnom sektoru](../produktivnost-umjetne-inteligencije-u-javnom-sektoru/): sustav koji
povećava sirovi volumen aktivnosti bez poboljšanja ili očuvanja kvalitete prema ONS-ovoj vlastitoj definiciji nije
poboljšanje produktivnosti.

## Zamke

- **Tretiranje rasta ulaza kao rasta produktivnosti**: više potrošnje koja financira više osoblja proizvodi više
  *aktivnosti*, a ne više *produktivnosti*, osim ako raste i izlaz po jedinici ulaza; to se rutinski miješa u
  političkim komentarima.
- **Potpuno zanemarivanje prilagodbe kvaliteti**: izlazni indeks izgrađen samo od sirovih brojeva aktivnosti
  pokazat će „dobitke produktivnosti” od obavljanja više nečega manje vrijednog ili niže kvalitete; ONS-ova
  prilagodba kvaliteti postoji upravo da to uhvati.
- **Usporedba indeksa produktivnosti među podsektorima bez usklađene starosti metodologije**: produktivnost u
  zdravstvu, obrazovanju i policiji izgrađena je iz različitih izvora podataka o aktivnosti i kvaliteti u
  različitim ciklusima revizije; naivna međusektorska usporedba uspoređuje nespojive instrumente.
- **Čitanje pada produktivnosti u jednoj godini kao trajnog trenda**: brojke produktivnosti iz razdoblja
  pandemije i nakon nje pokazale su znatnu godišnju volatilnost jer su se i sami podaci o kvaliteti (npr. liste
  čekanja, oporavak elektivnih zahvata) pomicali; ONS dosljedno upozorava na pretjerano tumačenje kretanja u
  jednoj godini.

## Izvori

- Office for National Statistics, "Public Service Productivity" series.
  <https://www.ons.gov.uk/economy/economicoutputandproductivity/publicservicesproductivity>
- Office for National Statistics, "Public Service Productivity: Total, UK — Sources and Methods."
  <https://www.ons.gov.uk/economy/economicoutputandproductivity/publicservicesproductivity>
