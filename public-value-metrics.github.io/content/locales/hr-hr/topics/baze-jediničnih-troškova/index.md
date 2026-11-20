# Baze jediničnih troškova

Baza jediničnih troškova knjižnica je unaprijed istraženih, dokazima potkrijepljenih financijskih zamjenskih mjera za društvene ishode (vrijednost prelaska iz nezaposlenosti u zaposlenje, smanjene usamljenosti, stabilnog najma) koje praktičaru omogućuju da novčano izrazi ishod bez naručivanja posebnog istraživanja vrednovanja svaki put. Postoje kako bi mala dobrotvorna organizacija koja piše zahtjev za financiranje mogla primijeniti istu strogost kao dobro opskrbljena savjetodavna tvrtka, ponovnom uporabom zamjenske mjere koju je netko drugi već izveo i objavio.

## Zašto je važno

HACT-ova UK Social Value Bank, razvijena s ekonomistom Danielom Fujiwarom metodama vrednovanja dobrobiti, i Global Value Exchange, otvorena baza financijskih zamjenskih mjera koju gradi zajednica, dvije su najšire rabljene u britanskom trećem i javnom sektoru. Obje postoje jer je temeljni rad vrednovanja ([vrednovanje dobrobiti](../vrednovanje-dobrobiti/) i [vrednovanje prema izjavljenim preferencijama](../vrednovanje-prema-izjavljenim-preferencijama/)) skup, metodološki zahtjevan i spor ako se pokreće od nule za svaki projekt. Zajednička, objavljena knjižnica zamjenskih mjera pretvara ono što bi bila višemjesečna istraživačka vježba u pretraživanje, što je upravo razlog zašto su važne i za izračune [društvenog povrata ulaganja](../društveni-povrat-ulaganja/) i za ocjenu ponuda prema [Zakonu o društvenoj vrijednosti](../zakon-o-društvenoj-vrijednosti/): bez njih bi stroga novčana procjena bila dostupna samo organizacijama dovoljno velikima da naruče vlastite studije.

## Matematika

Baza jediničnih troškova sama ništa ne izračunava; ona daje jedan ulazni podatak za izračun koji se provodi drugdje:

```
Vrijednost financijske zamjenske mjere = tržišna cijena, ILI sjenska cijena, ILI vrednovanje dobrobiti,
                         ILI vrijednost izjavljenih preferencija
                         za definiranu jedinicu promjene ishoda
                         (npr. „po osobi koja prelazi iz nezaposlenosti u zaposlenje, godišnje”)

Primijenjena vrijednost = broj postignutih ishoda × jedinična vrijednost zamjenske mjere
```

Vidi [sjenske cijene](../sjenske-cijene/) o tome kako se zamjenska mjera konstruira kad tržišne cijene nema i [društveni povrat ulaganja](../društveni-povrat-ulaganja/) o tome kako primijenjena vrijednost zatim ulazi u omjer nakon prilagodbi za mrtvi teret i pripisivanje.

## Primjer iz prakse

**Dobrotvorna organizacija (SROI usluge druženja)**: unos u bazi jediničnih troškova za „smanjenje usamljenosti” daje ilustrativnu zamjensku mjeru od 1.100 £ po osobi godišnje. Primijenjeno na 80 korisnika: 80 × 1.100 £ = 88.000 £ bruto vrijednosti. Ako ista baza ima i zamjensku mjeru za „bolje mentalno zdravlje” koja se oslanja na preklapajuću stavku ankete o dobrobiti, slaganje obiju zamjenskih mjera za istih 80 ljudi dvaput bi brojilo dio iste temeljne promjene: baza daje broj, ali izbjegavanje tog preklapanja odgovornost je analitičara.

**Lokalna vlast (SROI kluba za traženje posla)**: unos u bazi jediničnih troškova za „prelazak iz nezaposlenosti u trajno zaposlenje” primjenjuje se na 45 sudionika uz ilustrativnu zamjensku mjeru od 8.500 £ po osobi godišnje: 45 × 8.500 £ = 382.500 £ bruto vrijednosti, prije prilagodbi za mrtvi teret i pripisivanje prikazanih u [društvenom povratu ulaganja](../društveni-povrat-ulaganja/).

## Veza s programskim inženjerstvom

Timovi koji grade alate za izvještavanje za dobrotvorne organizacije ili naručitelje imaju koristi od internog „kataloga ishoda”, tablice koja svaki ishod koji proizvod ili usluga može uvjerljivo tvrditi preslikava na imenovanu zamjensku mjeru, njezinu izvornu bazu, datum objave i identifikator verzije, tako da različiti timovi u organizaciji ne biraju svaki malo drukčije vrijednosti za isti ishod. Omatanje otvorenih podataka Global Value Exchangea iza usluge pretraživanja, uz uvijek prikazan izvor i datum pokraj brojke, drži zamjensku mjeru revidibilnom, a ne čarobnim brojem zakopanim u proračunskoj tablici. Vidi [društveni povrat ulaganja](../društveni-povrat-ulaganja/) i [Zakon o društvenoj vrijednosti](../zakon-o-društvenoj-vrijednosti/) za dva glavna mjesta na kojima se te zamjenske mjere troše.

## Zamke

- **Tretiranje zamjenskih mjera kao preciznih.** Većina objavljenih zamjenskih mjera modelirani su prosjeci iz studija vrednovanja dobrobiti sa širokim intervalima pouzdanosti; navođenje jedne do na funtu precjenjuje preciznost koju temeljno istraživanje podupire.
- **Dvostruko brojenje preklapajućih zamjenskih mjera.** Kombiniranje zamjenskih mjera (npr. „smanjena usamljenost” i „bolje mentalno zdravlje”) izvedenih iz preklapajućih anketnih konstrukata dvaput vrednuje istu temeljnu promjenu.
- **Neprilagođena upotreba zamjenske mjere izvan konteksta.** Zamjenska mjera kalibrirana na jednom nacionalnom stanovništvu i godini, primijenjena drugdje bez prilagodbe inflaciji ili kontekstu, tiho krivo prikazuje vrijednost.
- **Neprovjera podrijetla.** Global Value Exchange je otvoren i izgrađen od zajednice, pa kvaliteta unosa varira ovisno o suradniku; provjerite temeljni izvor prije navođenja brojke u zahtjevu za financiranje ili nabavnoj prijavi.

## Izvori

- HACT, "UK Social Value Bank." <https://hact.org.uk/tools-and-services/uk-social-value-bank/>
- Global Value Exchange. <https://www.globalvaluexchange.org/>
- Fujiwara D., "The Social Impact of Housing Providers" (HACT, 2013) — methodological basis of the
  UK Social Value Bank.
- Social Value UK, "A Guide to Social Return on Investment," section on financial proxies.
