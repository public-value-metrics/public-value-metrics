# Teorija spremembe

Teorija spremembe je izrecna, nazaj preslikana vzročna pot od dolgoročnega cilja do predpogojev in dejavnosti, ki morajo obstajati, da bi bil cilj dosežen, skupaj s predpostavkami, ki povezujejo vsak člen. Gradi se tako, da se začne pri izidu, ki ga želite, in se večkrat vpraša »kaj mora veljati neposredno pred tem, da se to zgodi?«, dokler ne pridete do dejavnosti, ki jih lahko dejansko izvedete – kar je nasprotna smer od [logičnega modela](../logični-model/) in zato sta dopolnilna, ne zamenljiva.

## Zakaj je pomembno

Metodo nazajšnjega preslikavanja sta formalizirala Center for Theory of Change in ActKnowledge, ki sta gradila na delu ocenjevalke Carol Weiss o izrecnem razkrivanju predpostavk programa, da bi jih lahko preizkusili, namesto da bi jim slepo verjeli. Britansko ocenjevanje nepovratnih sredstev je to neposredno prevzelo: Magenta Book HM Treasury obravnava teorijo spremembe kot izhodišče vsake zasnove vrednotenja, financerji, kot je National Lottery Community Fund, pa od prijaviteljev zahtevajo, da jo opredelijo, preden bodo financirali predlog. Za programskega inženirja je pomembna, ker je teorija spremembe dokument, ki naj določi, kaj mora njegov sistem meriti – če vzročna veriga pravi »sprejetje prejemkov je odvisno od tega, da upravičenci prejmejo prilagojen izračun«, je to preizkusljiva trditev, za katero lahko izdelek opremite z merjenjem, da jo dokaže ali ovrže.

## Matematika

Teorija spremembe je strukturna, ne številska. Vsak člen naj nosi tako predpostavko kot kazalnik, ki bi lahko pokazal, da je predpostavka napačna:

```
Dolgoročni izid (cilj)
  ↑ predpogoj + predpostavka + kazalnik
Vmesni izid N
  ↑ predpogoj + predpostavka + kazalnik
  ...
Vmesni izid 1
  ↑ predpogoj + predpostavka + kazalnik
Dejavnosti / posegi
  ↑ zavezani viri
Vložki
```

Ta struktura neposredno napaja [metode vrednotenja učinka](../metode-vrednotenja-učinkov/), ki obstajajo, da preizkusijo, ali predpostavke pri vsakem členu dejansko držijo, in [protidejstveno analizo](../kontrafaktična-analiza/), ki preizkuša, ali bi se dolgoročni izid zgodil tako ali tako.

## Praktični primer

**Lokalna oblast (preprečevanje brezdomstva)**: dolgoročni izid so trajni najemi po 12 mesecih za gospodinjstva, ki jim grozi izselitev.

- Predpogoj: gospodinjstva imajo realističen, dosegljiv načrt odplačila zaostankov.
  Predpostavka: načrti, dogovorjeni s socialnim delavcem, so bolj vzdržni od sodno naloženih.
  Kazalnik: % načrtov, ki so po 6 mesecih še aktivni.
- Predpogoj: gospodinjstva uveljavljajo prejemke, do katerih so upravičena.
  Predpostavka: digitalni kalkulator prejemkov poveča pravilne zahtevke v primerjavi s papirnatimi obrazci.
  Kazalnik: stopnja točnosti zahtevkov, primerjana pred/po uvedbi orodja.
- Dejavnosti: triaža socialnih delavcev, digitalni kalkulator prejemkov, pogajanja o zaostankih.

V pilotni kohorti 120 gospodinjstev je predpostavka o kalkulatorju prejemkov veljala za 102 gospodinjstvi (85 %), ki so nato pravilno uveljavljala prejemke, kar je dokazalo naknadno vrednotenje procesa – ekipa programa je tako dobila dokaze za ta konkretni člen namesto ene same trditve od začetka do konca o preprečenem brezdomstvu.

**Dobrodelna organizacija (mentorstvo mladih)**: dolgoročni izid je manj izključitev iz šole. Nazaj preslikani predpogoji: izboljšana čustvena regulacija → zaupen odnos z mentorjem ena na ena → dosleden tedenski stik skozi dva trimesečja. Teorija izrecno pove, da neizpolnitev predpogoja »dosleden tedenski stik« (recimo zaradi menjave mentorjev) napoveduje, da izid ne bo sledil, kar je preizkusljiva, ovrgljiva trditev, ne upanje.

## Povezava s programskim inženirstvom

Teorija spremembe naj oblikuje podatkovni model izdelka, še preden je zgrajena ena sama nadzorna plošča: ugotovite, kateri členi potrebujejo kazalnik, in merjenje vgradite posebej zanje, namesto da privzeto beležite to, kar je najlažje. Disciplinira tudi pogovore o načrtu razvoja – funkcija, ki ne ustreza nobenemu členu v verigi, ni očitno vredna gradnje. Glej [logični model](../logični-model/) za naprej usmerjeno verigo odgovornosti, zgrajeno, ko je teorija dogovorjena, [družbeni donos naložbe](../družbeni-donos-naložbe/) za metodo, ki je odvisna od teorije spremembe pri določanju obsega izidov za vrednotenje, in [izidi proti izložkom](../izidi-in-izložki/) za razlikovanje, od katerega so odvisni členi vmesnih izidov.

## Pasti

- **Zamenjava z logičnim modelom.** Teorija spremembe je vzročna in razlagalna (zakaj verjamemo, da deluje); logični model je zaporeden in opisen (kaj se zgodi v katerem vrstnem redu). Izdelava samo enega pusti manjkati bodisi »zakaj« bodisi sled odgovornosti.
- **Puščanje predpostavk implicitnih.** Vsa vrednost nazajšnjega preslikavanja je v razkrivanju preizkusljivih predpostavk; teorija spremembe, ki samo našteva okvirčke in puščice, ne da bi poimenovala, kaj bi lahko vsak člen naredilo napačnega, je okras.
- **Izdelava enkrat in odlaganje v predal.** Teorija spremembe, napisana za prijavo na financiranje in nikoli več pregledana, preneha biti koristna v trenutku, ko dokazi začnejo nasprotovati členu.
- **Preskok vložka deležnikov.** Teorija spremembe, ki jo v celoti zgradijo naročniki brez prispevka frontnih delavcev ali upravičencev, običajno zapiše predpostavke, ki jim nihče, ki izvaja storitev, ne verjame.

## Viri

- Center for Theory of Change. <https://www.theoryofchange.org/>
- ActKnowledge. <https://www.actknowledge.org/>
- HM Treasury, Magenta Book (2020), Chapter 3. <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, theory of change guidance. <https://www.tnlcommunityfund.org.uk/>
