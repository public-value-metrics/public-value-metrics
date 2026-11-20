# Logički model

Logički model linearni je dijagram koji povezuje ulaze, aktivnosti, izlazne rezultate, ishode i učinak
programa, a čita se slijeva udesno kao lanac odgovornosti: resursi se ulažu, aktivnosti se provode,
proizvode se izlazni rezultati, ishodi se mijenjaju za korisnike, a učinak se nakuplja na široj ili
dužoj vremenskoj razini. To je standardna struktura prema kojoj financijeri i revizori očekuju da se o
programu može izvještavati, te prospektivni pandan unatrag mapiranoj
[teoriji promjene](../teorija-promjene/).

## Zašto je važno

Magenta Book britanskog Ministarstva financija (HM Treasury) navodi logički model kao obvezan element
dizajna evaluacije programa, a financijeri poput National Lottery Community Fund oko točno tog
peterostupčanog lanca grade svoje obrasce za prijavu i izvješćivanje. Njegova je vrijednost u tome što
prisiljava program da u jednom dijagramu iskaže što će potrošiti, što će s tim učiniti, što će
proizvesti i, što je presudno, što bi se trebalo promijeniti kao rezultat, i to s razinom
konkretnosti koju odlomak proze obično zamagljuje. Logički model s popunjenim stupcima ulaza i
aktivnosti, ali praznim ili nejasnim stupcem ishoda odmah se prepoznaje, a upravo zato financijeri
traže takav dijagram.

## Matematika

Logički model strukturni je lanac, a ne formula:

```
Ulazi           Aktivnosti        Izlazni rezultati   Ishodi                Učinak
(uloženi        (što se s njima   (izravni proizvodi  (promjena za          (dugoročna promjena
 resursi)        radi)             koje se može        korisnike)            na razini populacije
                                   izbrojiti)                                ili sustava)
```

Svaki bi stupac trebao biti konkretniji od prethodnog: ulazi su ono što trošite, aktivnosti su ono što
radite, izlazni rezultati su ono što se isporuči neovisno o učinku, ishodi su ono što se zbog toga
promijeni (razlika je u cijelosti opisana u temi
[ishodi naspram izlaznih rezultata](../ishodi-naspram-izlaznih-rezultata/)), a učinak je trajna, često samo
djelomično pripisiva dugoročna promjena.

## Primjer iz prakse

**Lokalna vlast (digitalna usluga savjetovanja o dugovima)**:

- Ulazi: godišnji proračun od 180.000 £, 4,0 ekvivalenta punog radnog vremena savjetnika, sustav za
  upravljanje slučajevima.
- Aktivnosti: terenske radionice, pojedinačni termini savjetovanja o dugovima.
- Izlazni rezultati: održano 900 termina; izdano 750 planova za dugove i naknade.
- Ishodi: od klijenata koji su došli na praćenje nakon 6 mjeseci, 60 % (450 od 750) izvještava o
  smanjenim zaostacima, u prosjeku za 1.200 £ po klijentu, odnosno 540.000 £ ukupnog smanjenja zaostataka.
- Učinak: mjerljiv pad broja zahtjeva za smještaj beskućnika među klijentima usluge tijekom dvije
  godine, koji se samo djelomično može pripisati ovoj usluzi uz druge intervencije (vidi
  [kontrafaktualnu analizu](../kontrafaktualna-analiza/)).

**Dobrotvorna organizacija (partnerstvo za upućivanje u banku hrane)**:

- Ulazi: 45.000 £, 1,5 ekvivalenta punog radnog vremena koordinatora, sporazumi o partnerstvu s 12
  agencija koje upućuju korisnike.
- Aktivnosti: trijaža upućenih korisnika, pakiranje i podjela paketa.
- Izlazni rezultati: 5.000 paketa hrane podijeljeno je 1.100 kućanstava.
- Ishodi: 68 % anketiranih kućanstava (748 od 1.100) izvještava o poboljšanoj prehrambenoj sigurnosti
  u telefonskom pozivu četiri tjedna kasnije.
- Učinak: doprinos smanjenju potražnje za lokalnim kriznim službama, dokaziv samo u agregiranoj
  statistici područja i ne pripisiv samo ovoj dobrotvornoj organizaciji.

## Veza s programskim inženjerstvom

Logički model gotovo je doslovan podatkovni model za sustav ishoda: ulazi i aktivnosti operativni su
podaci koje već imate (potrošnja, kadrovi, evidencije sesija); izlazne rezultate lako je instrumentirati
jer se broje na mjestu isporuke; ishodi zahtijevaju namjerno osmišljeno naknadno prikupljanje podataka
(ankete, povezivanje administrativnih podataka) koje neće postojati ako ga netko ne izgradi; a učinak
obično zahtijeva povezane, longitudinalne podatke ili podatke na razini populacije koji nadilaze
sustave pojedinog programa. Inženjeri koji grade alate za izvješćivanje trebali bi poticati naručitelje
da pokazatelje ishoda i učinka definiraju već pri dizajnu, umjesto da se zadano prikaže nadzorna ploča
samo s izlaznim rezultatima jer to podržavaju transakcijski podaci. Za metodu koja vrednuje upravo stupce
ishoda i učinka vidi [socijalni povrat ulaganja](../društveni-povrat-ulaganja/), a za praćenje je li
stupac učinka doista isporučen vidi [ostvarenje koristi](../ostvarenje-koristi/).

## Zamke

- **Zaustavljanje na izlaznim rezultatima.** Nadzorna ploča koja iskazuje održane termine ili podijeljene
  pakete i podrazumijeva korist izvještava o aktivnosti, a ne o rezultatima; vidi
  [ishode naspram izlaznih rezultata](../ishodi-naspram-izlaznih-rezultata/).
- **Nepostojanje navedene uzročne veze među stupcima.** Logički model navodi lanac, ali ne i zašto bi
  aktivnosti trebale proizvesti izlazne rezultate koji bi trebali proizvesti ishode; to obrazlaganje
  pripada [teoriji promjene](../teorija-promjene/), a logički model bez nje iza sebe nije provjeren.
- **Tretiranje modela kao jednokratnog dokumenta za prijavu.** Logički modeli izrađeni samo da zadovolje
  prijavu za financiranje i nikad ažurirani prestaju odražavati što program stvarno radi.
- **Puzanje pripisivanja u stupcu učinka.** Tvrdnja da je promjenu na razini populacije uzrokovao samo
  jedan program, bez kontrafaktualnog scenarija, precjenjuje ono što dokazi podržavaju.

## Izvori

- HM Treasury, Magenta Book (2020), Chapter 3. <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, logic model guidance. <https://www.tnlcommunityfund.org.uk/>
- W.K. Kellogg Foundation, "Logic Model Development Guide" (2004). <https://www.wkkf.org/resource-directory/resources/2004/01/logic-model-development-guide>
