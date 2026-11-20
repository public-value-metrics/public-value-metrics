# Višedimenzionalni indeks siromaštva

MPI mjeri siromaštvo kao preklapajuće deprivacije koje osoba doživljava istodobno, u zdravlju,
obrazovanju i životnom standardu, a ne samo kao dohodak ispod crte siromaštva. Razvili su ga Oxford
Poverty and Human Development Initiative (OPHI) sa Sabinom Alkire i Jamesom Fosterom, a objavljuje se
zajedno s UNDP-om u svakom Izvješću o ljudskom razvoju od 2010., uz
[indeks ljudskog razvoja](../indeks-ljudskog-razvoja/).

## Zašto je važno

Crte dohodovnog siromaštva promašuju ljude koji imaju dovoljno gotovinskog dohotka, ali nemaju čistu
vodu, školovanje ili im je umrlo dijete, te propuštaju činjenicu da se deprivacije grupiraju: kućanstvo bez
električne energije nerazmjerno će vjerojatnije nemati ni sanitarije i imati pothranjeno dijete.
Metoda Alkire-Foster, na kojoj se MPI temelji, broji deprivacije svake osobe kroz deset pokazatelja
grupiranih u tri jednako ponderirane dimenzije (zdravlje, obrazovanje, životni standard) i osobu
svrstava među „MPI siromašne” tek ako njezin ponderirani rezultat deprivacije prijeđe fiksni prag, čime
hvata preklapanje koje skup zasebnih statistika s jednim pokazateljem ne može. OPHI objavljuje punu
metodologiju i podatke po zemljama na <https://ophi.org.uk/multidimensional-poverty-index/>; globalni
MPI koji održava zajedno s UNDP-om sada obuhvaća više od 110 zemalja. Za softver izrađen za programe
borbe protiv siromaštva (novčani transferi, trijaža socijalne skrbi, ciljanje pomoći) skup pokazatelja
MPI-ja često je najbliže što postoji standardiziranoj shemi deprivacije koju je već potvrdilo na desetke
nacionalnih statističkih ureda.

## Matematika

```
10 pokazatelja, 3 dimenzije, svaka dimenzija ima težinu 1/3:

Zdravlje (1/3):          prehrana (1/6), smrtnost djece (1/6)
Obrazovanje (1/3):       godine školovanja (1/6), pohađanje škole (1/6)
Životni standard (1/3):  gorivo za kuhanje, sanitarije, pitka voda,
                          električna energija, stanovanje, imovina (po 1/18)

rezultat deprivacije (c) = zbroj težina pokazatelja u kojima je osoba deprivirana

osoba je „MPI siromašna” ako je c ≥ 1/3 (granica siromaštva, k = 33 %)

H (stopa broja siromašnih) = broj MPI siromašnih / ukupno stanovništvo
A (intenzitet)            = prosječni rezultat deprivacije samo među MPI siromašnima

MPI = H × A
```

Budući da MPI množi *udio* siromašnih s tim *koliko* su siromašni, dvije regije s istom stopom broja
siromašnih mogu imati vrlo različite MPI vrijednosti ako su deprivacije teže u jednoj od njih: ista logika
„bez zamjenjivosti među dimenzijama” stoji iza geometrijske sredine u HDI-ju.

## Primjer iz prakse

**Nacionalna anketa od 1.000 ljudi**: 350 ih je identificirano kao višedimenzionalno siromašno (rezultat
deprivacije ≥ 33 %). Među samo tih 350 siromašnih pojedinaca prosječni rezultat deprivacije iznosi 45 %.

```
H = 350 / 1000                = 0,350
A = 0,45
MPI = H × A = 0,350 × 0,45    = 0,1575
```

**Usporedba dvaju okruga s jednakim brojem siromašnih**: okrug A ima H = 0,30 i A = 0,40 (mnogo siromašnih,
umjereno deprivirano); okrug B ima H = 0,30 i A = 0,60 (isti broj siromašnih, ali teže deprivirani:
istodobno nemaju električnu energiju *i* sanitarije *i* ne pohađaju školu).

```
MPI_A = 0,30 × 0,40 = 0,120
MPI_B = 0,30 × 0,60 = 0,180
```

Ista stopa broja siromašnih, 50 % viši MPI u okrugu B: sustav ciljanja zasnovan samo na broju
siromašnih rangirao bi ta dva okruga jednako i propustio bi da okrugu B treba dublja intervencija.

## Veza s programskim inženjerstvom

- Sustavi za upravljanje slučajevima i utvrđivanje prava na socijalne programe često već pohranjuju
  nekoliko od deset pokazatelja (stanovanje, pohađanje škole, zdravstvene pokazatelje) u zasebnim silosima;
  metoda brojanja Alkire-Foster gotova je shema za njihovo spajanje u jedan rezultat deprivacije umjesto
  izgradnje vlastitog modela bodovanja od nule.
- Podjela na broj siromašnih i intenzitet (H × A) općenito je koristan obrazac za svaku nadzornu ploču
  koja iskazuje „koliko ih je pogođeno” uz „koliko teško”: sažimanje oboje u jedan broj, kao što to rade
  sirove statistike prevalencije, skriva upravo slučaj kojem treba najviše resursa.
- Nadzorne ploče s pokazateljima u stilu MPI-ja prirodno se uparuju s izvješćivanjem o
  [trošku po korisniku](../trošak-po-korisniku/) za programe borbe protiv siromaštva: trošak po
  bodu smanjenja MPI-ja obranjiva je jedinica za usporedbu vrlo različitih intervencija (novčani
  transfer naspram sanitarne infrastrukture).

## Zamke

- **Tretiranje deset pokazatelja kao univerzalnih**: globalni pokazatelji OPHI-jeva MPI-ja kalibrirani
  su za međudržavnu usporedivost; nacionalni MPI-jevi (mnoge zemlje, uključujući nekoliko u južnoj Aziji i
  Africi, objavljuju vlastite) prilagođavaju pokazatelje i težine lokalnom kontekstu, pa dva nisu
  izravno usporediva.
- **Iskazivanje samo H-a**: stopa broja siromašnih posve zanemaruje intenzitet; uz nju uvijek iskažite
  ili izračunajte A, odnosno sam MPI.
- **Pretpostavka da su MPI siromašni i dohodovno siromašni ista populacija**: OPHI-jevi vlastiti
  pregledi po zemljama obično pokazuju samo djelomično preklapanje; program koji cilja samo dohodovno
  siromašne sustavno će propustiti znatan udio višedimenzionalno siromašnih.

## Izvori

- Oxford Poverty and Human Development Initiative. "Multidimensional Poverty Index."
  <https://ophi.org.uk/multidimensional-poverty-index/>
- Alkire S, Foster J. "Counting and Multidimensional Poverty Measurement." Journal of Public
  Economics, 2011.
- UNDP & OPHI. "Global Multidimensional Poverty Index" (annual report).
