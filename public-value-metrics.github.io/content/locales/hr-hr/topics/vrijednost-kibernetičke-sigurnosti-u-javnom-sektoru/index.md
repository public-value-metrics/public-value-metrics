# Vrijednost kibernetičke sigurnosti u javnom sektoru

Vrijednost kibernetičke sigurnosti u javnom sektoru disciplina je cijene smanjenja rizika: koliko vrijedi
učiniti manje vjerojatnim proboj podataka o građanima, uzimajući u obzir da ulaganje u sigurnost kad djeluje
ne proizvodi vidljiv izlazni rezultat, a kad zakaže, proizvodi vrlo vidljiv? Za uslugu koja drži evidencije o
naknadama, zdravstvene podatke ili porezne evidencije upravo je to svojstvo „nevidljivo dok radi” razlog zašto joj
treba izričit argument o vrijednosti, a ne samo kvačica o usklađenosti.

## Zašto je važno

Okvir za procjenu kibernetičke sigurnosti (Cyber Assessment Framework, CAF) britanskog Nacionalnog centra za
kibernetičku sigurnost (NCSC) daje organizacijama javnog sektora strukturiran način da sigurnost postane
disciplina koja se može ocjenjivati i koja je zasnovana na ishodima, a ne kontrolni popis: definira četiri
ciljeva više razine (upravljanje sigurnosnim rizikom, zaštita od kibernetičkih napada, otkrivanje
kibernetičkih sigurnosnih događaja i smanjivanje utjecaja incidenata), podijeljena na doprinosne ishode prema
kojima se vlasnik sustava može ocjenjivati, u istom duhu kao točka 9 [standarda digitalnih usluga](../standard-digitalnih-usluga/)
(„stvorite sigurnu uslugu koja štiti privatnost korisnika”). Ono od čega CAF procjena štiti ima dokumentiranu cijenu:
IBM-ovo izvješće Cost of a Data Breach prati prosječni trošak proboja po sektorima i dosljedno nalazi da je javni
sektor pri nižem kraju raspona u usporedbi s financijama ili zdravstvom (nedavna izdanja stavljaju prosjek javnog
sektora na oko 2,6 do 2,9 milijuna dolara po proboju), no „niže nego u financijama” nije „nisko”, a državni
proboji nose troškove koje brojke izvješća ne obuhvaćaju u potpunosti: gubitak povjerenja građana u digitalne
kanale, što smanjuje [digitalno korištenje](../uštede-prelaskom-na-druge-kanale/) o kojem ovise poslovni slučajevi prelaska na
druge kanale, te politički i pravni trošak izlaganja podataka koje je država izvorno obvezala građane da
predaju.

## Matematika

Ulaganje u sigurnost vrednuje se kao i svaka potrošnja na smanjenje rizika: kao smanjenje očekivanog gubitka,
klasičnim identitetom upravljanja rizicima.

```
Godišnje očekivani gubitak (ALE) = očekivani gubitak po pojedinačnom događaju (SLE)
                                  × godišnja stopa pojavljivanja (ARO)

Vrijednost sigurnosne kontrole =
  ALE_prije_kontrole − ALE_nakon_kontrole − godišnji trošak kontrole

Kontrolu se isplati financirati kada je:
  (ALE_prije − ALE_nakon) > godišnji trošak kontrole

CAF procjena ne daje izravno vjerojatnost, ali profil CAF ishoda neke usluge
(koji su doprinosni ishodi „postignuti”, „djelomično postignuti” ili
„nisu postignuti”) razuman je zamjenski ulaz za procjenu ARO-a: sustav s
neupravljanim privilegiranim pristupom ili bez testiranog plana odgovora na
incidente ima bitno višu realnu vrijednost ARO-a od onog koji ima oboje.
```

## Primjer iz prakse

**Sustav za upravljanje slučajevima grofovijskog vijeća s evidencijama socijalne skrbi za 40.000 stanovnika**:

```
Očekivani gubitak po pojedinačnom događaju (trošak proboja), koristeći prosjek
javnog sektora iz nedavnog izdanja IBM-ova izvješća Cost of a Data Breach ≈ 2,1 mil. £
(preračunato, red veličine — uvijek ga ponovno izvedite iz aktualnog
izdanja izvješća umjesto ponovne uporabe fiksnog broja)

Trenutni ARO (neupravljani privilegirani pristup, nema testiranog odgovora
na incidente, prema internoj CAF samoprocjeni s više ishoda „nije postignuto”)
≈ procijenjenih 8 % godišnje
  ALE_prije = 2,1 mil. £ × 0,08 = 168.000 £/godišnje

Predložena kontrola: upravljanje privilegiranim pristupom + testirani plan
odgovora na incidente, čime relevantni CAF ishodi prelaze u „postignuto”,
procijenjeno da smanjuje ARO na 3 %/godišnje
  ALE_nakon = 2,1 mil. £ × 0,03 = 63.000 £/godišnje

Godišnji trošak kontrole (alati + proces + testiranje) = 45.000 £

Vrijednost kontrole = (168.000 − 63.000) − 45.000 = 60.000 £/godišnje
  neto pozitivno — financirajte je. Aritmetika također pokazuje da bi
  se kontrolu i dalje isplatilo financirati uz gotovo trostruko veći trošak,
  što je vrsta provjere osjetljivosti koja bi trebala pratiti svaku ALE
  brojku izgrađenu na procijenjenim vjerojatnostima.
```

## Veza s programskim inženjerstvom

Inženjeri posjeduju većinu poluga u ALE jednadžbi: dizajn kontrole pristupa, higijena ovisnosti i zakrpa,
pokrivenost zapisivanja i detekcije te alati za odgovor na incidente izravno pomiču član ARO, zbog čega CAF
procjena podjednako liči na pregled tehničke arhitekture kao i na reviziju politika. To je
[tehnički dug kao erozija javne vrijednosti](../tehnički-dug-kao-nagrizanje-javne-vrijednosti/) u najakutnijem obliku:
nezakrpani, nenadzirani sustavi s lošom kontrolom pristupa dug su čija je kamata repni rizik, a ne stalno
opterećenje, i treba ga uskladiti s [ukupnim troškom vlasništva u državnom IT-u](../ukupni-trošak-vlasništva-u-državnom-it-u/),
tako da se potrošnja na sigurnost ne tretira odvojeno od stvarnog troška rada sustava. Također je izravan ulaz u
procjene [vrijednosti za novac](../vrijednost-za-novac/) prema Green Booku: trošak prilagođen riziku dio je strane
„troška” svake procjene opcija, a ne naknadni dodatak na kraju.

## Zamke

- **Tretiranje CAF samoprocjene kao same sigurnosti**: dovršena procjena opisuje sigurnosni položaj, ali ga
  ne stvara: vrijednost je u postignutim ishodima, a ne u dokumentu.
- **Korištenje globalnih prosječnih troškova proboja kao lokalne procjene bez prilagodbe**: IBM-ove brojke
  prosjeci su preko velikih, raznolikih uzoraka; realan očekivani gubitak malog lokalnog tijela rijetko je jednak
  onome državnog ministarstva.
- **Zanemarivanje psihologije repnog rizika pri odlukama o ulaganju**: niska godišnja vjerojatnost olakšava
  neograničeno odgađanje sigurnosne potrošnje, sve do godine kada se dogodi; testiranje osjetljivosti ALE izračuna
  na raspon ARO-a, kao u primjeru, tome se suprotstavlja.
- **Brojanje samo troška proboja u IBM-ovu stilu, a ne troška povjerenja**: proboj koji smanji spremnost građana
  da koriste digitalne kanale godinama nagriza argument za [uštede prelaskom na druge kanale](../uštede-prelaskom-na-druge-kanale/),
  trošak koji se rijetko uključuje u procjene troška proboja.

## Izvori

- National Cyber Security Centre, Cyber Assessment Framework. <https://www.ncsc.gov.uk/collection/caf>
- IBM, Cost of a Data Breach Report. <https://www.ibm.com/reports/data-breach>
- GOV.UK Service Manual, service standard, point 9: create a secure service which protects users' privacy. <https://www.gov.uk/service-manual/service-standard/point-9-create-a-secure-service>
