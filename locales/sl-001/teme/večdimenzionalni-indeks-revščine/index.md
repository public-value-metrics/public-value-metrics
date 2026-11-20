# Večdimenzionalni indeks revščine (MPI)

MPI meri revščino kot prekrivajoče se prikrajšanosti, ki jih oseba doživlja hkrati – pri zdravju, izobrazbi in življenjskem standardu – in ne le kot dohodek, ki pade pod mejo. Razvili so ga Oxford Poverty and Human Development Initiative (OPHI) s Sabino Alkire in Jamesom Fosterjem, od leta 2010 pa ga skupaj z UNDP objavljajo v vsakem Poročilu o človekovem razvoju, ob [indeksu človekovega razvoja](../indeks-človekovega-razvoja/).

## Zakaj je pomembno

Meje dohodkovne revščine spregledajo ljudi, ki imajo dovolj denarnega dohodka, a jim manjkajo čista voda, šolanje ali pa so preživeli smrt otroka – in spregledajo dejstvo, da se prikrajšanosti kopičijo: gospodinjstvo brez elektrike ima nesorazmerno večjo verjetnost, da nima tudi sanitarij in da ima podhranjenega otroka. Metoda Alkire-Foster, na kateri temelji MPI, šteje prikrajšanosti vsake osebe po desetih kazalnikih, razvrščenih v tri enako uteženo dimenzije – zdravje, izobrazba, življenjski standard – in nekoga uvrsti med »MPI revne« le, če njegova utežena ocena prikrajšanosti preseže fiksni prag, s čimer zajame prekrivanje, ki ga niz ločenih statistik po posameznih kazalnikih ne more. OPHI objavlja celotno metodologijo in podatke po državah na <https://ophi.org.uk/multidimensional-poverty-index/>; globalni MPI, ki ga vzdržuje skupaj z UNDP, zdaj zajema več kot 110 držav. Za programsko opremo, namenjeno programom proti revščini – denarnim transferjem, triaži v socialni oskrbi, ciljanju pomoči – je nabor kazalnikov MPI pogosto najbližje standardizirani shemi prikrajšanosti, ki je že potrjena v desetinah nacionalnih statističnih uradov.

## Matematika

```
10 kazalnikov, 3 dimenzije, vsaka dimenzija ima utež 1/3:

Zdravje (1/3):             prehrana (1/6), umrljivost otrok (1/6)
Izobrazba (1/3):           leta šolanja (1/6), šolska obiskanost (1/6)
Življenjski standard (1/3): gorivo za kuhanje, sanitarije, pitna voda,
                            elektrika, stanovanje, premoženje (po 1/18)

ocena prikrajšanosti (c) = vsota uteži kazalnikov, pri katerih je oseba prikrajšana

oseba je »MPI revna«, če je c ≥ 1/3 (meja revščine, k = 33 %)

H (delež revnih)    = število MPI revnih / skupno prebivalstvo
A (intenzivnost)    = povprečna ocena prikrajšanosti samo med MPI revnimi

MPI = H × A
```

Ker MPI pomnoži *delež* revnih s tem, *kako* revni so, imata lahko dve regiji z enakim deležem revnih zelo različna MPI, če so prikrajšanosti v eni hujše – enaka logika »brez nadomeščanja med dimenzijami« stoji za geometrijsko sredino pri HDI.

## Praktični primer

**Nacionalna raziskava med 1.000 ljudmi**: 350 jih je opredeljenih kot večdimenzionalno revnih (ocena prikrajšanosti ≥ 33 %). Med samo temi 350 revnimi je povprečna ocena prikrajšanosti 45 %.

```
H = 350 / 1000                = 0,350
A = 0,45
MPI = H × A = 0,350 × 0,45    = 0,1575
```

**Primerjava dveh okrožij z enakim deležem revnih**: okrožje A ima H = 0,30 in A = 0,40 (veliko revnih, zmerno prikrajšanih); okrožje B ima H = 0,30 in A = 0,60 (enako število revnih, a hujše prikrajšanih – hkrati jim primanjkuje elektrike *in* sanitarij *in* šolske obiskanosti).

```
MPI_A = 0,30 × 0,40 = 0,120
MPI_B = 0,30 × 0,60 = 0,180
```

Enak delež revnih, a 50 % višji MPI v okrožju B – sistem ciljanja, ki temelji samo na deležu revnih, bi obe okrožji razvrstil enako in spregledal, da okrožje B potrebuje globlji poseg.

## Povezava s programskim inženirstvom

- Sistemi za vodenje primerov in preverjanje upravičenosti pri socialnih programih pogosto že hranijo več od desetih kazalnikov (stanovanje, šolska obiskanost, zdravstveni označevalci) v ločenih silosih; metoda štetja Alkire-Foster je pripravljena shema za njihovo združitev v eno oceno prikrajšanosti, namesto da bi od začetka gradili poseben model ocenjevanja.
- Delitev na delež in intenzivnost (H × A) je splošno uporaben vzorec za vsako nadzorno ploščo, ki poroča o tem, »koliko jih je prizadetih«, skupaj s tem, »kako hudo«; združitev obojega v eno število, kot to počnejo surove statistike razširjenosti, skrije prav primer, ki potrebuje največ sredstev.
- Nadzorne plošče kazalnikov v slogu MPI se naravno dopolnjujejo s poročanjem o [stroških na upravičenca](../strošek-na-upravičenca/) pri programih proti revščini: strošek na točko zmanjšanja MPI je zagovorljiva enota za primerjavo zelo različnih posegov (denarni transfer v primerjavi s sanitarno infrastrukturo).

## Pasti

- **Obravnava desetih kazalnikov kot univerzalnih** – globalni kazalniki MPI organizacije OPHI so umerjeni za primerljivost med državami; nacionalni MPI (mnoge države, tudi več v južni Aziji in Afriki, objavljajo svoje) prilagodijo kazalnike in uteži lokalnemu okolju, zato nista neposredno primerljiva.
- **Poročanje samo o H** – delež revnih popolnoma zanemari intenzivnost; vedno poročajte ali izračunajte tudi A ali sam MPI.
- **Predpostavka, da sta MPI revni in dohodkovno revni isto prebivalstvo** – lastni državni povzetki OPHI običajno kažejo le delno prekrivanje obeh; program, ki cilja samo dohodkovno revne, bo sistematično spregledal pomemben delež večdimenzionalno revnih.

## Viri

- Oxford Poverty and Human Development Initiative. "Multidimensional Poverty Index."
  <https://ophi.org.uk/multidimensional-poverty-index/>
- Alkire S, Foster J. "Counting and Multidimensional Poverty Measurement." Journal of Public
  Economics, 2011.
- UNDP & OPHI. "Global Multidimensional Poverty Index" (annual report).
