# Vrednotenje učinkov in vrednotenje procesa

Vrednotenje učinkov sprašuje, ali je program povzročil nameravane izide. Vrednotenje procesa sprašuje, ali je bil program dejansko izveden, kot je bil zasnovan – komu, v kakšnem odmerku in s kakšnimi ovirami ali dejavniki, ki so olajšali izvedbo. To sta različni vprašanji, ki zahtevata različni metodi, Magenta Book britanskega zakladnega ministrstva (HM Treasury) pa skupno naročanje obeh obravnava kot standardno prakso, ker šibkega ali ničelnega rezultata učinka samega zase ni mogoče razlagati: ne more povedati, ali je bila osnovna teorija programa napačna ali pa dobra teorija nikoli ni bila pravilno izvedena.

## Zakaj je pomembno

Vladna vrednotenja so že večkrat ugotovila, da program nima merljivega učinka, brez vrednotenja procesa, ki bi pojasnilo zakaj – zaradi česar naročniki ne morejo ločiti »ta zamisel ne deluje« (odpoved teorije) od »ta zamisel nikoli ni bila pravilno preizkušena« (odpoved izvedbe). Navodilo Medical Research Council za vrednotenje procesa kompleksnih ukrepov, objavljeno v BMJ leta 2015 in široko navajano ob Magenta Book, je formaliziralo zvestobo (fidelity), odmerek (dose) in doseg (reach) kot osrednje stvari, ki jih mora vrednotenje procesa meriti. Naročanje vrednotenja učinkov brez vrednotenja procesa tvega opustitev resnično zdrave zasnove programa, ker je bil izveden za polovico predvidene populacije s tretjino predvidene intenzivnosti – napako, ki jo graditelj sistemov lahko dobro prepreči, ker je zvestoba izvedbe ravno tisto, kar operativni podatkovni sistemi lahko zajamejo skoraj v realnem času.

## Matematika

```
Vrednotenje procesa sprašuje:
 - Ali je bilo izvedeno za ciljno populacijo, v načrtovanem odmerku/intenzivnosti?
 - Ali je izvedba ustrezala zasnovi logičnega modela / teorije sprememb?
 - Kakšne ovire ali dejavniki so vplivali na izvedbo?
 Metode: preverjanja zvestobe glede na vnaprej določene pragove, študije primerov,
         intervjuji, upravni podatki o izvedbi.

Vrednotenje učinkov sprašuje:
 - Kaj se je spremenilo in koliko te spremembe je pripisljivo programu?
 Metode: RCT, DiD, PSM, RDD – glej impact-evaluation-methods – glede na kontrafaktični scenarij.

Skupna diagnoza:
 Ni učinka   + visoka zvestoba → odpoved teorije: sam model ni ustvaril izida
 Ni učinka   + nizka zvestoba  → odpoved izvedbe: model ni bil nikoli pravilno preizkušen
 Učinek najden + visoka zvestoba → ponovite z zaupanjem
 Učinek najden + nizka zvestoba  → raziščite dalje: učinek je lahko krhek ali odvisen od lokacije
```

## Praktični primer

**Lokalna oblast (program starševstva)**: vrednotenje učinkov z razliko razlik ugotovi spremembo +2 odstotni točki pri merilu blaginje otrok – statistično nepomembno. Vrednotenje procesa, izvedeno vzporedno, ugotovi, da je program dosegel le 210 od 500 ciljnih družin (42 % dosega), od teh pa je le 95 doseglo vnaprej določen prag zvestobe 75 %+ obiskanih srečanj – 19 % prvotno načrtovanega dosega. Sklep: šibek rezultat učinka je skladen z odpovedjo izvedbe, ne z dokazom, da model programa ne deluje; ustrezen odziv je popravilo napotitvene poti, ki je povzročila 58-odstotni osip, ne opustitev zasnove programa.

**Dobrodelna organizacija (program digitalne pismenosti)**: vrednotenje učinkov ugotovi močan učinek (+18 odstotnih točk na oceni digitalnega zaupanja), vzporedno vrednotenje procesa pa potrdi 92-odstotno zvestobo načrtovanemu učnemu načrtu na vseh 12 lokacijah izvedbe. Skupaj lahko financer program z zaupanjem razširi, ker je pokazano, da učinek drži dosledno, ne da bi bil produkt ene nenavadno dobre lokacije.

## Povezava s programskim inženirstvom

Podatki za vrednotenje procesa so točno to, kar izvedbeni sistemi lahko dobro zajamejo: prisotnost glede na načrt, odmerek srečanj in osip na vsaki stopnji lijaka napotitve ali vpisa – isti lijak analitike, ki jo inženirji že gradijo za funkcije izdelkov, uporabljen na izvedbenem cevovodu socialnega programa. Posredovanje metrik zvestobe in dosega vodjem programov skoraj v realnem času, namesto čakanja na vrednotenje ob koncu nepovratnih sredstev, omogoča, da se pokvarjena napotitvena pot popravi med programom, ne da se odkrije šele po koncu obdobja financiranja. Glej [metode vrednotenja učinkov](../metode-vrednotenja-učinkov/) za vzročne zasnove, s katerimi je vrednotenje procesa združeno, [teorijo sprememb](../teorija-spremembe/) in [logični model](../logični-model/) za zasnovo, glede na katero vrednotenje procesa preverja zvestobo, in [uresničevanje koristi](../uresničevanje-koristi/) za spremljanje izvedbe vse do obljubljenih izidov.

## Pasti

- **Naročanje samo vrednotenja učinkov.** Ničelnega ali šibkega rezultata potem ni mogoče razlagati kot odpoved teorije ali odpoved izvedbe, kar je ravno razlika, ki je pomembna pri odločanju, kaj storiti naprej.
- **Obravnavanje vrednotenja procesa kot mehkega dodatka.** Potrebuje enako strogost in vnaprej določena merila zvestobe kot zasnova učinkov, sicer ob prihodu rezultatov razpade v anekdoto.
- **Zamenjava »pravočasno in v okviru proračuna« z »izvedeno, kot je bilo zasnovano«.** Vrednotenje procesa preverja zvestobo modelu – odmerek, ciljno skupino, vsebino – ne statusa RAG projektnega vodenja.
- **Nepredregistrirani pragovi zvestobe.** Odločanje naknadno, kaj šteje za »zadosten odmerek«, naredi vsako razlago razočarljivega rezultata učinka videti kot naknadno izgovarjanje.

## Viri

- HM Treasury, Magenta Book (2020). <https://www.gov.uk/government/publications/the-magenta-book>
- Moore G, et al., "Process evaluation of complex interventions: Medical Research Council
  guidance." BMJ 2015;350:h1258. <https://www.bmj.com/content/350/bmj.h1258>
- National Audit Office, programme evaluation reports. <https://www.nao.org.uk/>
