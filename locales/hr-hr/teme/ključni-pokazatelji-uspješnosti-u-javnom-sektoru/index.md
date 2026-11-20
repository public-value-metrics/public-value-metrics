# Ključni pokazatelji uspješnosti u javnom sektoru

Ključni pokazatelj uspješnosti (KPI) odabrana je, praćena mjera koja zamjenjuje odgovor na pitanje obavlja li
javna usluga dobro svoj posao. U državnoj upravi izbor KPI-ja nikad nije neutralan: budući da se KPI-jevi
vežu uz proračune, ljestvice i karijere, sam čin odabira oblikuje ponašanje svih nizvodno od njega, često više
od politike koja je stvorila uslugu.

## Zašto je važno

Opažanje Charlesa Goodharta o monetarnoj politici iz 1975., koje je kasnije popularizirala Marilyn Strathern kao
„kada mjera postane cilj, prestaje biti dobra mjera”, najvažnija je pojedinačna upozoravajuća oznaka u upravljanju
uspješnošću javnog sektora. KPI odabran da *opisuje* sustav počinje *iskrivljavati* taj sustav onog trena kad se
za njega veže financiranje, plaća ili politički opstanak. Kanonski primjer su vremena odziva hitne pomoći
NHS-a: kad je osmominutni cilj odziva za kategoriju A postao obvezujući, pokazalo se da su neki trustovi
„slagali” vozila hitne pomoći tik izvan sata mjerenja vremena odziva ili preklasificirali pozive, kako bi
postigli broj bez promjene ishoda pacijenata. Smjernice britanskog Nacionalnog ureda za reviziju (National Audit
Office) o odabiru i korištenju pokazatelja uspješnosti, izložene u njegovim izvješćima o vrijednosti za novac te
okvirima „Performance Measurement by Regulators” i „Choosing the Right FABRIC” (Fit for purpose, Appropriate,
Balanced, Robust, Integrated, Cost-effective), postoje upravo zato što su ministarstva stalno birala pokazatelje
koje je lako iskazati, a ne pokazatelje koje je teško izigrati. Programski inženjer koji isporuči nadzornu ploču
prema kojoj će se suditi ministru ili ravnatelju, htio to ili ne, dizajnira poticajnu strukturu javne
institucije.

## Matematika

Dizajn KPI-ja tema je u obliku okvira, no *vrednovanje* kandidata za KPI ponovljiv je kontrolni popis, a ne
formula:

```
Za svaki kandidat KPI, ocijenite prema:
  Fit for purpose (svrsishodan)  — mjeri li ishod ili zamjenu udaljenu nekoliko koraka?
  Appropriate (primjeren)        — pripada li ljudima koji na njega doista mogu utjecati?
  Balanced (uravnotežen)         — je li uparen s protumjerom koja hvata izigravanje?
  Robust (otporan)               — može li izdržati reviziju ili se samo samoprijavljuje i ne može provjeriti?
  Integrated (integriran)        — uklapa li se u širi skup ili se sudara s drugim KPI-jem?
  Cost-effective (isplativ)      — košta li njegovo prikupljanje više od odluke koju informira?

Podjela na prethodne i zaostajuće pokazatelje:
  Prethodni pokazatelj   → predviđa budući ishod, ali se često može izigrati (npr. odgovoreni pozivi <60 s)
  Zaostajući pokazatelj  → potvrđuje da se ishod dogodio, ali stiže prekasno za upravljanje (npr. godišnja
                           anketa o zadovoljstvu)
  Obranjiv skup KPI-jeva uparuje barem po jedan od svakog za svaki cilj.
```

## Primjer iz prakse

**Trust hitne pomoći**: trust iskazuje KPI vremena odziva za kategoriju A (opasno po život) „75 % poziva
odgovoreno unutar 8 minuta”. U jednom tromjesečju stigne 6.000 poziva kategorije A; 4.500 ih je zadovoljilo
8 minuta, što daje 75,0 %, naizgled na cilju.

```
Naslovni KPI = 4.500 / 6.000 × 100 = 75,0 %  (zadovoljava prag od 75 %)
```

No Goodhartova revizija dodaje protumjeru: prosječno vrijeme odziva za najsporijih 10 % poziva.

```
Prosječni odziv u najsporijem decilu = 34 minute (porast s 19 minuta prije dvije godine)
```

Trust pogađa cilj dok je rep, pozivi koji su najvjerojatnije doista opasni po život kad je trijaža nesavršena,
postao mnogo gori, jer se ekipe prioritiziraju prema pozivima blizu osmominutne litice umjesto prema kliničkoj
hitnosti. Jedan KPI ispričao je lažnu priču; upareni KPI ispričao je pravu.

## Veza s programskim inženjerstvom

Inženjeri koji grade nadzorne ploče uspješnosti za državnu upravu funkcionalno dizajniraju poticajni API
organizacije. Praktične posljedice: instrumentirajte *nazivnik* jednako strogo kao brojnik (KPI iskazan kao goli
postotak poziva na izigravanje nazivnika; za istu zamku u digitalnim uslugama vidi
[trošak po transakciji](../trošak-po-transakciji/)); protumjere ugradite na istu nadzornu ploču, a ne u zasebno
izvješće koje nitko ne čita, tako da izigravanje bude vidljivo na mjestu odluke; te verzionirajte definiciju KPI-ja,
jer tiha redefinicija (promjena onoga što se računa kao „poziv”, „slučaj” ili „završetak”) funkcionalno je
jednaka promjeni cilja bez objave. [Kartica rezultata javne vrijednosti](../kartica-rezultata-javne-vrijednosti/) jedan je
strukturiran način da se spriječi da se jedan KPI čita izolirano, a
[odgovornost zasnovana na ishodima](../odgovornost-zasnovana-na-ishodima/) disciplina je odabira KPI-jeva na razini
populacije koje jedan tim ne može jednostrano iskriviti.

## Zamke

- **Odabir metrike koju je lako prikupiti umjesto smislene**: vrijeme odgovora na poziv trivijalno je zapisati;
  je li poziv riješio građaninov problem nije, ali samo je drugo ishod. Odupirite se zadanom posezanju za onim što
  sustav već emitira.
- **Nema protumjere**: svaki KPI vezan uz novac ili ugled bit će izigran na rubu; isporučite ga s uparenom
  metrikom koja hvata vjerojatni vektor izigravanja prije objave.
- **Redefiniranje metrike bez zapisnika promjena**: zamjena „primljenih poziva” s „odgovorenim pozivima” kako bi
  se laskalo trendu uništava vjerodostojnost vremenske serije čim se otkrije; uz brojke uvijek objavite zapisnik
  promjena definicija.
- **Brkanje aktivnosti i rezultata**: brojanje obavljenih inspekcija izlazni je rezultat; brojanje objekata
  dovedenih u sukladnost bliže je ishodu (vidi [ishode naspram izlaznih rezultata](../ishodi-naspram-izlaznih-rezultata/)).

## Izvori

- National Audit Office, "Choosing the Right FABRIC: A Framework for Performance Information."
  <https://www.nao.org.uk/>
- Marilyn Strathern, "'Improving Ratings': Audit in the British University System," *Social
  Anthropology*, 1997 (formulation of Goodhart's law as commonly cited).
- National Audit Office, investigations into NHS ambulance service performance reporting.
  <https://www.nao.org.uk/>
