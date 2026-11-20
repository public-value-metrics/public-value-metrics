# Ishodi naspram izlaznih rezultata

Izlazni rezultat izravan je proizvod aktivnosti koji se može izbrojiti: postoji čim se isporuka dogodi,
neovisno o tome kakav učinak ima. Ishod je promjena koja iz toga slijedi za uključene ljude, mjesto ili
sustav. „Na radionici o traženju posla sudjelovalo je 500 ljudi” izlazni je rezultat: istinit je čak i ako
nitko od njih ne nađe posao. „Poboljšale su se izglede za zapošljavanje 500 ljudi” tvrdnja je o ishodu i
traži dokaz promjene, a ne samo dokaz prisutnosti: to je zabuna koja proizvodi više zavaravajućih izvješća o
bespovratnim sredstvima nego gotovo ijedna druga pogreška u mjerenju u ovom sektoru.

## Zašto je važno

Magenta Book britanskog Ministarstva financija (HM Treasury) i financijeri poput National Lottery Community
Fund izričito traže izvješćivanje o ishodima jer su izlazni rezultati ono o čemu programi izvješćuju
zadano: jeftino ih je brojati, uvijek su dostupni i uvijek izgledaju pozitivno. Broj izlaznih rezultata doslovno
nikad ne može pasti zato što program ne uspijeva: više održanih sesija uvijek je „više”, dok ishod može
otkriti da program ne djeluje. National Audit Office opetovano je kritizirao državne programe jer razinu
aktivnosti iskazuju kao da je dokaz uspjeha; softverski sustav koji olakšava samo izvješćivanje o izlaznim
rezultatima to zadano pojačava, jer izlazni rezultati ne traže naknadno prikupljanje podataka, a ishodi traže.

## Matematika

Formule nema, ali postoji pouzdan test za klasifikaciju metrike:

```
Test izlaznog rezultata: može li se izbrojiti na mjestu isporuke, istinit je čak i ako primatelj nije pogođen?
Test ishoda: traži li usporedbu prije/poslije ili s/bez da bi imao smisla?

Ako broj može biti istinit uz nikakvu korist ni za koga, to je izlazni rezultat.
```

To se uklapa u širi lanac [logičkog modela](../logički-model/) i ovisi o poveznicama ishoda definiranima u
[teoriji promjene](../teorija-promjene/); pretvaranje ishoda u novac koristi metode iz teme
[socijalni povrat ulaganja](../društveni-povrat-ulaganja/).

## Primjer iz prakse

**Lokalna vlast (potpora zapošljavanju)**: izlazni rezultat: 500 ljudi sudjelovalo je na radionicama o
traženju posla. Ishod: pri praćenju nakon 12 mjeseci 140 od tih 500 (28 %) trajno je zaposleno (6+ mjeseci).
Usporedna skupina sličnih obilježja, ali bez pristupa programu, ima osnovnu stopu zaposlenosti od 15 % u istom
razdoblju. Neto povećanje ishoda: 28 % − 15 % = 13 postotnih bodova, pa je procijenjeno 500 × 0,13 = 65 ljudi
više zaposleno nego što bi inače bilo: to je pripisivi ishod, različit i od broja prisutnih (500) i od sirovog
broja zaposlenih (140).

**Dobrotvorna organizacija (organizacija za pismenost)**: izlazni rezultat: 1.200 sesija čitanja održano je za
300 djece. Ishod: prosječna čitalačka dob poboljšala se za 8 mjeseci u razdoblju od 6 mjeseci, naspram
očekivane osnovne prirodne progresije od 6 mjeseci u tih 6 mjeseci. Neto dobitak ishoda: 8 − 6 = 2 mjeseca
dodatnog poboljšanja čitalačke dobi po djetetu koji se mogu pripisati programu, a ne cijelih 8 mjeseci.

## Veza s programskim inženjerstvom

Zapisnici događaja i transakcijski sustavi instrumentiraju izlazne rezultate gotovo automatski (pregledi
stranica, sesije, zatvoreni tiketi, rezervirani termini) jer ih generira sustav dok radi svoj posao. Ishodi
traže podatkovni model koji bilježi istu osobu u kasnijoj točki u vremenu u odnosu na polazno stanje ili
usporedbu, što se mora namjerno dizajnirati: naknadne ankete, povezane administrativne evidencije ili
usporedna kohorta. Alat za izvješćivanje koji podržava samo prvo tiho će usmjeravati organizaciju prema
izvješćivanju samo o izlaznim rezultatima, bez obzira na to što je financijer tražio. Vidi
[logički model](../logički-model/) za mjesto ishoda u lancu odgovornosti,
[trošak po ishodu](../trošak-po-ishodu/) za pretvaranje ove razlike u metriku jediničnog troška i
[KPI-jeve javnog sektora](../ključni-pokazatelji-uspješnosti-u-javnom-sektoru/) za širi obrazac odabira metrika.

## Zamke

- **Iskazivanje izlaznih rezultata kao da su ishodi.** „Sudjelovalo je 500 ljudi” podrazumijeva korist
  bez da je dokazuje; prisutnost izričito označite kao izlazni rezultat.
- **Nema polazne vrijednosti ni usporedne skupine.** Broj ishoda bez kontrafaktualnog scenarija (vidi
  [kontrafaktualnu analizu](../kontrafaktualna-analiza/)) ne može razdvojiti učinak programa od onoga što bi
  se ionako dogodilo.
- **Optimiziranje za financiranu metriku.** Kad je financiranje vezano uz opseg izlaznih rezultata, timovi za
  isporuku racionalno maksimiziraju prisutnost umjesto trajne promjene, što je način neuspjeha opisan
  Goodhartovim zakonom.
- **Pranje ishoda.** Preimenovanje metrike izlaznog rezultata jezikom koji zvuči kao ishod („ishodi
  angažmana: 500 polaznika”) bez ikakvog naknadnog mjerenja iza toga.

## Izvori

- HM Treasury, Magenta Book (2020). <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, outcomes reporting guidance. <https://www.tnlcommunityfund.org.uk/>
- National Audit Office, value-for-money report methodology. <https://www.nao.org.uk/>
