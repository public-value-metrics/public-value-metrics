# Uresničevanje koristi

Upravljanje uresničevanja koristi je disciplina prepoznavanja, določanja izhodišč, spremljanja in *dokazovanja*, da so se koristi, obljubljene v poslovnem primeru, po zagonu dejansko uresničile. V britanskih javnih naložbah je del modela petih primerov (Five Case Model) v Green Book finančnega ministrstva HM Treasury in posebnih smernic za upravljanje koristi Infrastructure and Projects Authority. Brez njega ostane »sistem je referentom prihranil trideset minut na zahtevek« za vedno nerevidirana trditev.

## Zakaj je pomembno

Poslovni primeri so obljube, uresničevanje koristi pa je revizija. Green Book zahteva, da vsak primer porabe opravi pet preizkusov: strateškega, ekonomskega, komercialnega, finančnega in upravljavskega. Upravljavski primer mora *pred odobritvijo* opredeliti, kako se bodo koristi uresničile: imenovani lastniki, zajeta izhodišča in določeni datumi merjenja. Vodnik Infrastructure and Projects Authority (IPA), *Benefits Management: A Guide to Realizing Benefits for Government Major Projects* (<https://www.gov.uk/government/publications/benefits-management-a-guide-to-realizing-benefits-for-government-major-projects>), obstaja, ker je lastno poročanje IPA o portfelju Government Major Projects Portfolio večkrat ugotovilo, da sta zaupanje v izvedbo in uresničevanje koristi ponavljajoči se slabosti večjih programov. Projekt se lahko zaključi »pravočasno in v okviru proračuna« glede na izvedbene mejnike, a vseeno ne uresniči koristi, ki so sploh upravičile porabo denarja. IPA v svojih smernicah to razlikovanje šteje za bistvo discipline.

## Matematika

```
Stopnja uresničitve = uresničene koristi / napovedane koristi   (po koristi, po obdobju)

Mehanizmi, ki omogočajo izračun:
  izhodišče zajeto PRED zagonom (sicer razlike ni mogoče izmeriti)
  vsaka korist: imenovan lastnik, metrika, vir podatkov, razpored merjenja
  napoved prilagojena za optimistično pristranskost pri presoji (zahteva Green Book)
  koristi razvrščene na denarne / sprostitev zmogljivosti / kakovostne,
  spremljane in poročane ločeno
```

## Praktični primer

**Lokalna oblast**: poslovni primer digitalnega portala za vloge za gradbena dovoljenja je letno obljubljal 300.000 £ zmanjšanja stroškov tiskanja in poštnine (denarno), 4.500 sproščenih ur uradnikov (zmogljivost) in boljše zadovoljstvo vložnikov (kakovostno). Dvanajst mesecev po zagonu:

```
Korist            Napoved    Uresničeno  Stopnja  Dokaz
Denarni prihranki 300.000 £  210.000 £   70 %     finančna knjiga proti izhodiščnemu letu
Ure uradnikov     4.500      3.200       71 %     vzorec meritev časa in gibov
Zadovoljstvo      +8 o. t.   +11 o. t.   138 %    podatki ankete vložnikov

Ukrepi po pregledu (bistvo uresničevanja koristi):
primanjkljaj denarja izvira iz dveh področij storitev, ki še
izjemoma obdelujeta papirnate vloge → zapreti izjemno pot;
popravek optimistične pristranskosti v naslednjem poslovnem primeru
se dvigne z 10 % na 25 % na podlagi napake napovedi v tem primeru.
```

Stopnja uresničitve 70 % ni neuspeh, temveč znanje, ki omogoča bolje umerjeno naslednjo napoved. Primer brez merjenja bi za vedno trdil 100 %, finančna služba pa ne bi imela podlage za izpodbijanje.

## Povezava s programskim inženirstvom

Inženirske organizacije rutinsko odobravajo naložbe v platforme in orodja na podlagi napovedane koristi in jih skoraj nikoli ne revidirajo, in prav to patologijo odpravlja upravljanje uresničevanja koristi. Lahka različica: vsak predlog nad pragom pomembnosti imenuje lastnika koristi, izhodiščno metriko in določen datum pregleda (običajno šest mesecev po zagonu), stopnje uresničitve iz preteklih predlogov pa naj znižajo zaupanje organizacije v naslednjo napoved ekipe ali dobavitelja. S tem se zanka zapre nazaj k [presoji po Green Book](../ocena-po-green-booku/), ki določa napoved, ki jo ta disciplina revidira. Enaka logika stoji za široko poročano ugotovitvijo, da velika večina pilotov generativne umetne inteligence ne kaže merljivega donosa (glej [produktivnost umetne inteligence v javnem sektorju](../produktivnost-umetne-inteligence-v-javnem-sektorju/)), saj so piloti, ki so donos *dali*, skoraj brez izjeme imeli imenovano, sledljivo postavko koristi že od začetka. Odvisna je tudi od razlikovanja med tem, kar je bilo dejansko dostavljeno, in tem, kar je bilo dejansko uresničeno (glej [izidi in izložki](../izidi-in-izložki/)).

## Pasti

- **Brez izhodišča pred zagonom**: usodna, nepopravljiva opustitev. Brez njega stopnje uresničitve ni mogoče nikoli izračunati, temveč le trditi.
- **Osirotele koristi**: korist brez imenovanega lastnika nima nikogar, ki bi zbiral podatke, in vsak pregled portfelja jo privzeto poroča kot »v glavnem na poti«.
- **Dvojno štete koristi v portfelju programa**: dva projekta, ki kot svojo korist zahtevata isto sproščeno zmogljivost referentov. Za odkrivanje tega vodite en sam register koristi v celotnem portfelju.
- **Gledališče uresničevanja**: izpostavljeno merjenje in poročanje o lahkih kakovostnih uspehih, medtem ko denarne postavke in postavke zmogljivosti tiho ostanejo nepreverjene.
- **Zamenjevanje izvedbe z uresničitvijo**: projekt, ki zaključi mejnike »pravočasno in v okviru proračuna«, ne pove nič o tem, ali se je napovedana korist sploh zgodila. Smernice IPA to obravnavajo kot dve ločeni vprašanji z dvema ločenima dokaznima potema.

## Viri

- HM Treasury, Green Book and Five Case Model guidance. <https://www.gov.uk/government/collections/the-green-book-and-accompanying-guidance-and-documents>
- Infrastructure and Projects Authority, *Benefits Management: A Guide to Realizing Benefits for Government Major Projects*. <https://www.gov.uk/government/publications/benefits-management-a-guide-to-realizing-benefits-for-government-major-projects>
- Infrastructure and Projects Authority, Annual Report on the Government Major Projects Portfolio. <https://www.gov.uk/government/collections/infrastructure-and-projects-authority-annual-report>
