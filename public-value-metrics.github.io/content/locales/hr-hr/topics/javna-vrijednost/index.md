# Javna vrijednost

Javna vrijednost je vrijednost koju državna ili organizacija društvenog sektora stvara za građane kao cjelinu:
ne samo izlazni rezultati koje proizvodi ili novac koji troši, nego je li društvo bolje jer ta organizacija
postoji i jer je djelovala onako kako jest. „Strateški trokut” Marka Moorea iz 1995. standardan je test: javna
inicijativa opravdana je samo kad je *legitimna i podržana*, *sadržajno vrijedna* i *operativno izvediva*, sve
troje istodobno.

## Zašto je važno

Vrijednost u privatnom sektoru razmjerno je lako izraziti cijenom: prihod minus trošak, o čemu presuđuju kupci
koji mogu otići. Javna vrijednost nema ekvivalentan tržišni signal. Zatvorski sustav, porezna uprava i tim za
zaštitu djece proizvode stvari koje građani ne mogu jednostavno odbiti kupiti, a „kupac” (porezni obveznik,
počinitelj, dijete) često nije ista osoba kao politički nalogodavac koji odobrava proračun. Mooreova knjiga
*Creating Public Value: Strategic Management in Government* (Harvard University Press, 1995.) daje disciplinu
koja je nedostajala: menadžer bi trebao moći navesti (1) koju javnu vrijednost njegova inicijativa stvara, (2)
odakle dolaze legitimitet i financiranje za to (ministar, vijeće, mandat, bespovratna sredstva) i (3) može li
njegova organizacija to doista isporučiti s ljudima, tehnologijom i procesima koje ima. Program koji dobro
prolazi samo na jednom ili dva kraka trokuta još nije opravdan, ma koliko dobronamjeran bio.

To je praktično važno jer većina neuspjeha softvera u javnom sektoru nisu tehnološki neuspjesi. Sustav može biti
tehnički izvrstan i operativno izvediv, a ipak propasti jer u okruženju koje ga legitimira (ministri, nadzorni
odbori, javnost) nitko zapravo nije želio ono za što se optimizira. Digitalna usluga Universal Credit i NHS-ov
National Programme for IT u britanskoj literaturi o javnoj upravi navode se kao slučajevi u kojima su
operativni i legitimacijski krak trokuta bili neusklađeni s krakom misije.

## Matematika

Javna vrijednost je okvir, a ne formula, ali neodređene investicijske slučajeve strukturira u tri provjerljiva
pitanja:

```
Test strateškog trokuta — nastavite samo ako vrijede sva tri:

1. Legitimitet i podrška: Tko je ovo odobrio i podržava li okruženje koje
   odobrava (zakonodavno tijelo, ministar, vijeće, odbor, javno mnijenje)
   to i dalje dok se resursi troše?

2. Javna vrijednost: Koje konkretno, opisivo dobro ovo proizvodi za
   građane ili društvo (sigurnost, zdravlje, prilike, povjerenje,
   pravednost) i za koga?

3. Operativni kapacitet: Može li organizacija to doista isporučiti s
   postojećim osobljem, tehnologijom, partnerima i pravnim ovlastima, ili
   uz vjerodostojan plan da ih stekne?
```

Slaba inicijativa obično zakaže na barem jednom kraku: tehnički izvediva, ali bez mandata (pilot dijeljenja
podataka koji nitko nije odobrio); popularna, ali neizvediva (obećana digitalna usluga bez inženjerskog
kapaciteta); ili odobrena i izvediva, ali bez vrijednosti (nadzorna ploča koju nitko ne koristi).

## Primjer iz prakse

**Lokalna vlast**: digitalni tim vijeća predlaže alat za trijažu zahtjeva za stambenu naknadu temeljen na
umjetnoj inteligenciji.

- *Legitimitet*: kabinet vijeća odobrio je strategiju „digitalno prvo”, ali izabrani članovi odgovorni za
  socijalno osiguranje nisu izričito odobrili automatizirano donošenje odluka: to je praznina, a ne zeleno
  svjetlo.
- *Javna vrijednost*: brža obrada (tvrdi se: s 10 dana na 2 dana) stvarna je vrijednost samo ako podnositelji
  zahtjeva nisu pogrešno odbijeni; tvrdnja o vrijednosti mora uključivati točnost, a ne samo brzinu.
- *Operativni kapacitet*: vijeće ima jednog znanstvenika za podatke i nema proces nadzora modela, pa tvrdnja o
  rješavanju u 2 dana trenutno nije izvediva uz navedenu stopu pogreške.

Dva od tri kraka ne drže. Mooreov okvir kaže: ne nastavljajte u zadanom opsegu, prvo ishodite izričito
odobrenje za automatizirane odluke i izgradite kapacitet nadzora, inače je „javna vrijednost” koju poslovni
slučaj tvrdi fiktivna.

**Središnja vlast**: usluga internetskog podnošenja prijava porezne uprave ima snažan legitimitet (zakonski
mandat) i snažan operativni kapacitet (postojeći tim pouzdano isporučuje), ali slabu javnu vrijednost ako je
korištenje nisko jer se digitalno isključene (vidi [digitalnu uključenost](../digitalna-uključenost/)) gura u kanal
koji ne mogu koristiti. Trokut otkriva ono što bi nadzorna ploča samo za isporuku sakrila.

## Veza s programskim inženjerstvom

Javna vrijednost krovni je pojam pod kojim stoji cijeli ovaj repozitorij: [vrijednost za novac](../vrijednost-za-novac/)
daje test ekonomičnosti, učinkovitosti i djelotvornosti za pitanje jesu li resursi dobro iskorišteni;
[oportunitetni trošak u javnoj potrošnji](../oportunitetni-trošak-u-javnoj-potrošnji/) cijeni što je još novac mogao
učiniti; a [dodatnost i mrtvi teret](../dodatnost-i-mrtvi-teret/),
[istiskivanje i pripisivanje](../istiskivanje-i-pripisivanje-učinka/) te
[kontrafaktualna analiza](../kontrafaktualna-analiza/) zajedno provjeravaju je li tvrđena vrijednost stvarna, a
ne pretpostavljena. Za inženjere je strateški trokut koristan pre-mortem za svaku odluku o proizvodu u javnom
sektoru:

- Prije određivanja opsega značajke pitajte tko ju je odobrio i vrijedi li to odobrenje još: značajka izgrađena
  za ministra koji je u međuvremenu otišao možda je tiho izgubila krak legitimiteta.
- „Možemo li to izgraditi” i „trebamo li to izgraditi” tretirajte kao doista odvojena pitanja; inženjerski
  kapacitet odgovara samo na treći krak trokuta.
- Dokumenti sa zahtjevima proizvoda za javne usluge trebali bi izričito navesti tvrdnju o javnoj vrijednosti, a ne
  samo korisničku priču, jer vrijednost za korisnika i javna vrijednost nisu uvijek isto (vidi
  [ishode naspram izlaznih rezultata](../ishodi-naspram-izlaznih-rezultata/)).

## Zamke

- **Tretiranje operativnog kapaciteta kao dovoljnog opravdanja.** „Možemo to izgraditi” odgovara samo na jedan
  krak trokuta; timovi sa snažnom sposobnošću isporuke rutinski isporučuju stvari koje nitko nije ovlastio i koje
  ne stvaraju opisivo javno dobro.
- **Miješanje legitimiteta sa zakonitošću.** Program može biti zakonit, a ipak mu može nedostajati politička i
  javna podrška potrebna da ga se održi kroz težu fazu isporuke; pravno pokriće nije isto što i mandat.
- **Pretpostavka da je javna vrijednost što god kaže ministarstvo naručitelj.** Mooreov model traži da se
  tvrdnja o vrijednosti može provjeriti prema stvarnim interesima građana, a ne da je samo tvrdi financijer;
  inače se okvir urušava u samocertifikaciju.

## Izvori

- Moore MH. *Creating Public Value: Strategic Management in Government*. Harvard University Press,
  1995.
- Moore MH. *Recognizing Public Value*. Harvard University Press, 2013.
- Benington J, Moore MH (eds). *Public Value: Theory and Practice*. Palgrave Macmillan, 2011.
- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation" (2022).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
