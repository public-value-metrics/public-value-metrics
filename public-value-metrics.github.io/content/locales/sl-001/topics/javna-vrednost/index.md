# Javna vrednost

Javna vrednost je vrednost, ki jo država ali organizacija socialnega sektorja ustvari za državljane kolektivno – ne le izložki, ki jih proizvede, ali denar, ki ga porabi, ampak ali je družba boljša zaradi obstoja organizacije in njenega ravnanja. »Strateški trikotnik« Marka Moora iz leta 1995 je standardni test: javna pobuda je upravičena le, kadar je *legitimna in podprta*, *vsebinsko vredna* in *operativno izvedljiva*, vse troje hkrati.

## Zakaj je pomembno

Vrednost v zasebnem sektorju je razmeroma lahko ovrednotiti: prihodki minus stroški, o katerih razsojajo kupci, ki lahko odidejo. Javna vrednost nima enakovrednega tržnega signala. Zaporniška služba, davčna uprava in ekipa za zaščito otrok proizvajajo stvari, ki jih državljani ne morejo preprosto zavrniti, »kupec« (davkoplačevalec, storilec, otrok) pa pogosto ni ista oseba kot politični naročnik, ki odobri proračun. Mooreova knjiga *Creating Public Value: Strategic Management in Government* (Harvard University Press, 1995) prinaša manjkajočo disciplino: menedžer mora znati navesti (1) kakšno javno vrednost njegova pobuda ustvarja, (2) od kod izhajata njegova legitimnost in financiranje za to – minister, svet, mandat, nepovratna sredstva – in (3) ali lahko njegova organizacija to dejansko izvede z razpoložljivimi ljudmi, tehnologijo in procesi. Program, ki dobro izpade le na enem ali dveh krakih trikotnika, še ni upravičen, naj bo še tako dobronameren.

To je praktično pomembno, ker večina neuspehov programske opreme v javnem sektorju ni tehnoloških neuspehov. Sistem je lahko tehnično odličen in operativno izvedljiv, pa vseeno odpove, ker nihče v legitimizirajočem okolju – ministri, nadzorni odbori, javnost – ni dejansko želel tistega, kar optimizira. Digitalna storitev Universal Credit in britanski Nacionalni program za IT v NHS (NHS National Programme for IT) sta v britanski literaturi o javni upravi navedena kot primera, kjer sta bila operativni krak in krak legitimnosti neusklajena s krakom poslanstva.

## Matematika

Javna vrednost je okvir, ne formula, vendar sicer nejasne investicijske primere strukturira v tri preizkusljiva vprašanja:

```
Test strateškega trikotnika – nadaljujte le, če držijo vsi trije:

1. Legitimnost in podpora: Kdo je to odobril in ali ga odobravalno okolje
   (zakonodajalec, minister, svet, upravni odbor, javno mnenje) še vedno
   podpira, ko se sredstva zavežejo?

2. Javna vrednost: Kakšno specifično, opisljivo dobro to ustvari za
   državljane ali družbo – varnost, zdravje, priložnost, zaupanje,
   pravičnost – in za koga?

3. Operativna zmogljivost: Ali lahko organizacija to dejansko izvede s
   sedanjim osebjem, tehnologijo, partnerji in pravnimi pooblastili – ali
   z verodostojnim načrtom za njihovo pridobitev?
```

Šibka pobuda običajno odpove na vsaj enem kraku: tehnično izvedljiva, a brez mandata (pilot izmenjave podatkov, ki ga nihče ni potrdil); priljubljena, a neizvedljiva (obljubljena digitalna storitev brez inženirskih zmogljivosti); ali odobrena in izvedljiva, a brez vrednosti (nadzorna plošča, ki je nihče ne uporablja).

## Praktični primer

**Lokalna oblast**: občinska digitalna ekipa predlaga orodje umetne inteligence za triažo vlog za stanovanjski prejemek.

- *Legitimnost*: občinski kabinet je odobril strategijo »digitalno najprej«, vendar izvoljeni člani, odgovorni za socialno varnost, niso izrecno potrdili avtomatiziranega odločanja – vrzel, ne zelena luč.
- *Javna vrednost*: hitrejša obdelava (zatrjevana korist: z 10 dni na 2 dni) je prava vrednost le, če prosilci niso napačno zavrnjeni; trditev o vrednosti mora vključevati natančnost, ne le hitrosti.
- *Operativna zmogljivost*: občina ima enega podatkovnega znanstvenika in nobenega procesa spremljanja modela, zato zatrjevan 2-dnevni čas obdelave pri navedeni stopnji napak trenutno ni izvedljiv.

Dva od treh krakov odpovesta. Mooreov okvir pravi: ne nadaljujte v predlaganem obsegu – najprej pridobite izrecno odobritev za avtomatizirane odločitve in zgradite zmogljivost za spremljanje, sicer je »javna vrednost«, zatrjevana v poslovnem primeru, fiktivna.

**Osrednja vlada**: spletna storitev davčne uprave za oddajo napovedi ima močno legitimnost (zakonski mandat) in močno operativno zmogljivost (obstoječa ekipa dostavlja zanesljivo), a šibko javno vrednost, če je uporaba nizka, ker so digitalno izključeni – glej [digitalna vključenost](../digitalna-vključenost/) – potisnjeni v kanal, ki ga ne morejo uporabljati. Trikotnik razkrije to, kar bi nadzorna plošča samo za izvedbo skrila.

## Povezava s programskim inženirstvom

Javna vrednost je krovni pojem, pod katerim stoji celoten ta repozitorij: [vrednost za denar](../vrednost-za-denar/) daje test gospodarnosti/učinkovitosti/uspešnosti za to, ali so bila sredstva dobro uporabljena; [oportunitetni strošek pri javni porabi](../oportunitetni-strošek-pri-javni-porabi/) ovrednoti, kaj bi lahko denar še storil; [dodatnost in mrtva teža](../dodatnost-in-mrtva-teža/), [izpodrivanje in pripisovanje](../izpodrinjenje-in-pripisovanje-učinka/) ter [analiza kontrafaktičnega scenarija](../kontrafaktična-analiza/) skupaj preverjajo, ali je zatrjevana vrednost resnična in ne predpostavljena. Za inženirje je strateški trikotnik uporabna analiza pred porazom (pre-mortem) za vsako odločitev o izdelku v javnem sektorju:

- Preden opredelite obseg funkcionalnosti, vprašajte, kdo jo je odobril in ali ta odobritev še velja – funkcionalnost, zgrajena za ministra, ki je medtem odšel, je morda tiho izgubila krak legitimnosti.
- »Ali to lahko zgradimo« in »ali bi to morali zgraditi« obravnavajte kot resnično ločeni vprašanji; inženirska zmogljivost odgovarja le na tretji krak trikotnika.
- Dokumenti zahtev izdelka za javne storitve naj izrecno navedejo trditev o javni vrednosti, ne le uporabniške zgodbe, ker vrednost za uporabnika in javna vrednost nista vedno isto (glej [izidi in izložki](../izidi-in-izložki/)).

## Pasti

- **Obravnava operativne zmogljivosti kot zadostne utemeljitve.** »To lahko zgradimo« odgovarja le na en krak trikotnika; ekipe z močno zmogljivostjo izvedbe pogosto dostavijo stvari, ki jih nihče ni odobril in ki ne ustvarjajo opisljivega javnega dobrega.
- **Mešanje legitimnosti z zakonitostjo.** Program je lahko zakonit in vseeno nima političnega in javnega zaledja, potrebnega za vzdrževanje skozi težavno fazo izvedbe; pravno kritje ni isto kot mandat.
- **Predpostavka, da je javna vrednost to, kar pravi naročnik.** Mooreov model zahteva, da je trditev o vrednosti preizkusljiva glede na dejanske interese državljanov, ne le zatrjevana s strani financerja – sicer se okvir sesuje v samopotrjevanje.

## Viri

- Moore MH. *Creating Public Value: Strategic Management in Government*. Harvard University Press,
  1995.
- Moore MH. *Recognizing Public Value*. Harvard University Press, 2013.
- Benington J, Moore MH (eds). *Public Value: Theory and Practice*. Palgrave Macmillan, 2011.
- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation" (2022).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
