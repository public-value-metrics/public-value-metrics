# Teorija promjene

Teorija promjene izričit je, unatrag ucrtan uzročni put od dugoročnog cilja do preduvjeta i aktivnosti koji moraju postojati da bi se cilj ostvario, zajedno s pretpostavkama koje povezuju svaku kariku. Gradi se tako da se krene od ishoda koji želite i više puta pita „što mora biti istina neposredno prije ovoga da bi se ovo dogodilo?”, sve dok se ne stigne do aktivnosti koje doista možete isporučiti, što je suprotan smjer od [logičkog modela](../logički-model/) i razlog zbog kojeg se oni nadopunjuju, a ne zamjenjuju.

## Zašto je važno

Metodu mapiranja unatrag formalizirali su Center for Theory of Change i ActKnowledge, nadovezujući se na rad evaluatorice Carol Weiss o izričitom iznošenju pretpostavki programa kako bi se mogle provjeriti, a ne prihvatiti na vjeru. Britansko vrednovanje bespovratnih sredstava to je izravno preuzelo: Magenta Book Ministarstva financija (HM Treasury) smatra teoriju promjene polazištem svakog dizajna evaluacije, a financijeri poput National Lottery Community Fund traže od podnositelja da je iznesu prije nego što će financirati prijedlog. Razlog zašto je to važno softverskom inženjeru jest da je teorija promjene dokument koji bi trebao odrediti što vaš sustav treba mjeriti: ako uzročni lanac kaže „korištenje naknada ovisi o tome da podnositelji dobiju personaliziran izračun”, to je provjerljiva tvrdnja za koju se vaš proizvod može instrumentirati da je potkrijepi ili opovrgne.

## Matematika

Teorija promjene strukturalna je, a ne brojčana. Svaka bi karika trebala nositi i pretpostavku i pokazatelj koji bi mogao pokazati da je pretpostavka lažna:

```
Dugoročni ishod (cilj)
  ↑ preduvjet + pretpostavka + pokazatelj
Međuishod N
  ↑ preduvjet + pretpostavka + pokazatelj
  ...
Međuishod 1
  ↑ preduvjet + pretpostavka + pokazatelj
Aktivnosti / intervencije
  ↑ preuzeti resursi
Ulazni resursi
```

Ta struktura izravno hrani [metode evaluacije učinka](../metode-evaluacije-učinka/), koje služe provjeri drže li pretpostavke na svakoj kariki doista, i [kontrafaktualnu analizu](../kontrafaktualna-analiza/), koja provjerava bi li se dugoročni ishod dogodio u svakom slučaju.

## Primjer iz prakse

**Lokalna vlast (sprječavanje beskućništva)**: dugoročni ishod su održivi najmovi nakon 12 mjeseci za kućanstva kojima prijeti deložacija.

- Preduvjet: kućanstva imaju realan, pristupačan plan otplate dugova.
  Pretpostavka: planovi koje je dogovorio socijalni radnik održiviji su od sudski određenih.
  Pokazatelj: % planova koji su još aktivni nakon 6 mjeseci.
- Preduvjet: kućanstva ostvaruju naknade na koje imaju pravo.
  Pretpostavka: digitalni kalkulator naknada povećava broj ispravnih zahtjeva u odnosu na papirnate obrasce.
  Pokazatelj: stopa točnosti zahtjeva, usporedba prije/poslije uvođenja alata.
- Aktivnosti: trijaža socijalnih radnika, digitalni kalkulator naknada, pregovaranje o dugovima.

U pilot-kohorti od 120 kućanstava pretpostavka o kalkulatoru naknada potvrdila se za 102 kućanstva (85 %) koja su potom ispravno podnijela zahtjev, što je potvrdila naknadna procesna evaluacija, pa programski tim ima dokaze za tu konkretnu kariku, a ne jednu tvrdnju od početka do kraja o sprječavanju beskućništva.

**Dobrotvorna organizacija (mentorstvo mladih)**: dugoročni ishod je smanjeno isključivanje iz škole. Preduvjeti ucrtani unatrag: bolja emocionalna regulacija → pouzdan odnos jedan na jedan s mentorom → dosljedan tjedni kontakt tijekom dva polugodišta. Teorija izričito navodi da izostanak preduvjeta „dosljedan tjedni kontakt” (recimo zbog fluktuacije mentora) predviđa da ishod neće uslijediti, što je provjerljiva, opovrgiva tvrdnja, a ne nada.

## Veza s programskim inženjerstvom

Teorija promjene trebala bi oblikovati podatkovni model proizvoda prije nego što se izgradi i jedna nadzorna ploča: utvrdite koje karike trebaju pokazatelj i instrumentirajte upravo njih, umjesto da zadano bilježite što je najlakše. Ona također disciplinira razgovore o planu razvoja: značajka koja se ne preslikava ni na jednu kariku lanca nije očito vrijedna izgradnje. Vidi [logički model](../logički-model/) za budućnosti okrenut lanac odgovornosti izgrađen kad se teorija dogovori, [društveni povrat ulaganja](../društveni-povrat-ulaganja/) za metodu koja ovisi o teoriji promjene da odredi koje ishode vrednovati i [ishode naspram izlaznih rezultata](../ishodi-naspram-izlaznih-rezultata/) za razliku o kojoj ovise karike međuishoda.

## Zamke

- **Brkanje s logičkim modelom.** Teorija promjene uzročna je i objašnjavajuća (zašto vjerujemo da ovo djeluje); logički model je slijedan i opisan (što se događa kojim redom). Izrada samo jednog ostavlja bez „zašto” ili bez traga odgovornosti.
- **Prešutne pretpostavke.** Sva vrijednost mapiranja unatrag leži u iznošenju provjerljivih pretpostavki; teorija promjene koja samo navodi okvire i strelice bez imenovanja onoga što bi svaku kariku moglo učiniti lažnom puki je ukras.
- **Izrada jednom pa odlaganje.** Teorija promjene napisana za zahtjev za financiranje i nikad ponovno razmatrana prestaje biti korisna čim dokazi počnu proturječiti nekoj karici.
- **Preskakanje doprinosa dionika.** Teorija promjene koju u potpunosti izgrade naručitelji bez doprinosa djelatnika s terena ili korisnika obično kodira pretpostavke u koje nitko tko isporučuje uslugu doista ne vjeruje.

## Izvori

- Center for Theory of Change. <https://www.theoryofchange.org/>
- ActKnowledge. <https://www.actknowledge.org/>
- HM Treasury, Magenta Book (2020), Chapter 3. <https://www.gov.uk/government/publications/the-magenta-book>
- National Lottery Community Fund, theory of change guidance. <https://www.tnlcommunityfund.org.uk/>
