# Zakon o društvenoj vrijednosti (Social Value Act)

Zakon o javnim uslugama (društvena vrijednost) iz 2012. (Public Services (Social Value) Act 2012) britanska je zakonska obveza kojom javna tijela u Engleskoj i Walesu moraju razmotriti kako bi ono što se nabavlja moglo poboljšati gospodarsku, društvenu i okolišnu dobrobit relevantnog područja te razmotriti savjetovanje o tome, prije početka postupka nabave ugovora o javnim uslugama. Stupio je na snagu u siječnju 2013. kao razmjerno blaga obveza „uzeti u obzir”, a znatno ga je ojačala Napomena o politici nabave (Procurement Policy Note, PPN) 06/20 iz siječnja 2021., koja traži da ugovori središnje države izričito *ocjenjuju*, a ne samo razmatraju, društvenu vrijednost, uz minimalnu težinu u kriterijima za dodjelu.

## Zašto je važno

Prije PPN-a 06/20 „razmatranje” društvene vrijednosti moglo se zadovoljiti time da naručitelj zabilježi kako je o tome razmislio, bez zahtjeva da to utječe na odluku o dodjeli: obvezu lako ispuniti na papiru, a u praksi zanemariti. PPN 06/20 zatvorio je tu prazninu za nabavu središnje države: nalaže da se društvena vrijednost boduje kao dio ocjene ponuda, organizirana oko pet nacionalnih prioritetnih tema (oporavak od COVID-a 19, suzbijanje gospodarske nejednakosti, borba protiv klimatskih promjena, jednake mogućnosti i dobrobit), a uobičajeno se mjeri okvirom National TOMs (Themes, Outcomes, Measures; teme, ishodi, mjere) koji održava Social Value Portal. Za softverskog inženjera koji gradi alate za nabavu, upravljanje ugovorima ili potporu ponuđačima u javnom sektoru, to je pravna osnova prema kojoj je vaš klijent dužan graditi, a ne neobvezan dodatak.

## Matematika

Društvena vrijednost tema je oblikovana okvirom; njezina „matematika” je struktura bodovanja koju rabi većina tijela:

```
Ukupni rezultat ponude = težina cijene/troška + težina kvalitete + težina društvene vrijednosti

PPN 06/20 (središnja država): težina društvene vrijednosti ≥ 10 % ukupnog rezultata

Teme društvene vrijednosti (PPN 06/20):
 1. Oporavak od COVID-a 19
 2. Suzbijanje gospodarske nejednakosti
 3. Borba protiv klimatskih promjena
 4. Jednake mogućnosti
 5. Dobrobit
```

Ponuditelji obično novčano izražavaju svoje obveze prema tim temama pomoću [baza jediničnih troškova](../baze-jediničnih-troškova/), a primjenjuje se ista logika novčanog izražavanja kao u [društvenom povratu ulaganja](../društveni-povrat-ulaganja/): obveza mora biti potkrijepljena dokazima, pripisiva ugovoru i ne smije se dvaput brojiti u odnosu na drugo financiranje.

## Primjer iz prakse

**IT ugovor lokalne vlasti**: ugovor vrijedan 2 milijuna £ na 3 godine boduje se 60 % kvaliteta, 30 % cijena, 10 % društvena vrijednost. Ponuditelj A obvezuje se na 2 naukovanja, 150.000 £ potrošnje na lokalne podizvođače i 200 sati besplatne obuke digitalnih vještina za lokalnu školu, što je pomoću zamjenskih mjera iz baze jediničnih troškova novčano izraženo ukupno 90.000 £ dodatne društvene vrijednosti. Ponuditelj B obvezuje se na manji paket izražen s 40.000 £. Ako tijelo boduje društvenu vrijednost razmjerno najjačoj ponudi, ponuditelj A dobiva svih 10 bodova; ponuditelj B dobiva 10 × (40.000 £ ÷ 90.000 £) = 4,4 boda, razliku od 5,6 bodova koja može odlučiti o ugovoru čak i kad su kvaliteta i cijena bliske.

**Ponuditelj iz dobrovoljnog sektora**: mala VCSE organizacija (voluntary, community and social enterprise; dobrovoljna, zajednička i društvena poduzeća) koja se natječe za ugovor o održavanju zelenih površina protiv komercijalnog konkurenta ne može se natjecati samo jediničnom cijenom, ali pomoću zamjenskih mjera Global Value Exchange novčano izražava svoje postojeće obveze zapošljavanja u zajednici i volontiranja te tako iznosi dokazanu tvrdnju o društvenoj vrijednosti koju vrijedi bodovati uz cijenu i kvalitetu.

## Veza s programskim inženjerstvom

Osvajanje ponude uz novčano izražene obveze društvene vrijednosti stvara obvezu da se isporuka dokaže upravljanjem ugovorom: alati koji bilježe početke naukovanja, lokalnu potrošnju i sate obuke prema konkretnim obvezama bodovanima na natječaju, a koji ulaze u sastanke o reviziji ugovora umjesto da se zaborave nakon potpisivanja. Unosi G-Cloud i Digital Marketplace sve češće traže izjave o društvenoj vrijednosti u trenutku unosa. Vidi [društveni povrat ulaganja](../društveni-povrat-ulaganja/) za metodu vrednovanja iza obveza, [baze jediničnih troškova](../baze-jediničnih-troškova/) za zamjenske mjere na koje se ponuditelji oslanjaju i [ishode naspram izlaznih rezultata](../ishodi-naspram-izlaznih-rezultata/) da bi se osiguralo da su isporučene obveze ishodi, a ne samo brojevi aktivnosti.

## Zamke

- **Društveno-pranje ponuda.** Nejasne obveze („podupiremo lokalnu zajednicu”) koje se ne mogu mjeriti niti im se može držati tijekom upravljanja ugovorom dobivaju dobre bodove, a ne isporučuju ništa provjerljivo.
- **Tretiranje društvene vrijednosti kao odlučujućeg kriterija za izjednačene ponude.** PPN 06/20 traži da se društvena vrijednost izričito ocjenjuje unutar kriterija za dodjelu, a ne neformalno rabi za razbijanje izjednačenja između inače jednakih ponuda.
- **Nema praćenja u upravljanju ugovorom.** Obveze bodovane na natječaju često se tijekom isporuke nikad ne prate, vidi [ostvarenje koristi](../ostvarenje-koristi/).
- **Nedosljedni okviri mjerenja među ugovorima.** Rabljenje različitih izvora zamjenskih mjera za slične obveze u različitim ugovorima čini usporedbu na razini portfelja besmislenom, zbog čega postoje zajednički okviri poput National TOMs i zajedničke baze jediničnih troškova.

## Izvori

- Public Services (Social Value) Act 2012. <https://www.legislation.gov.uk/ukpga/2012/3/contents>
- Cabinet Office, Procurement Policy Note 06/20, "Taking Account of Social Value in the Award of
  Central Government Contracts." <https://www.gov.uk/government/publications/procurement-policy-note-0620-taking-account-of-social-value-in-the-award-of-central-government-contracts>
- Social Value Portal, National TOMs Framework. <https://socialvalueportal.com/national-toms/>
