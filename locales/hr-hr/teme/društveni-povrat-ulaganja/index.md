# Društveni povrat ulaganja (SROI)

Društveni povrat ulaganja (engl. social return on investment) okvir je za mjerenje, novčano izražavanje i računovodstveno iskazivanje široko shvaćene vrijednosti (društvene, okolišne i gospodarske) te njezino izražavanje kao omjera prema uloženim resursima, primjerice „1,44 £ društvene vrijednosti za svaku uloženu 1 £”. Osmišljen je da proširi logiku financijskog računovodstva na ishode koje tržišta ne cijene, bez gubitka računovodstvene discipline: svaki broj u SROI-ju mora se moći pratiti do ishoda koji su definirali dionici, do osnove dokaza i do izričite prilagodbe za ono što bi se dogodilo u svakom slučaju.

## Zašto je važno

SROI održavaju Social Value UK i Social Value International, tijela nasljednici SROI Networka, čiji je „A Guide to Social Return on Investment” (2012) i dalje referentna metodologija. Okvir počiva na sedam načela: uključiti dionike, razumjeti što se mijenja, vrednovati ono što je važno, uključiti samo ono što je bitno, ne precjenjivati, biti transparentan i provjeriti rezultat. Upravo peto načelo, „ne precjenjivati”, ne zadovoljava većina SROI izvješća u praksi. Omjer dobiven preskakanjem prilagodbi za mrtvi teret i pripisivanje učinka nije SROI nego marketinški broj odjeven u SROI. Softverski inženjeri koji grade alate za izvještavanje za dobrotvorne organizacije, društvena poduzeća ili naručitelje moraju znati razliku, jer će alat ili provoditi tu disciplinu ili olakšati njezino preskakanje.

## Matematika

SROI se oslanja na [teoriju promjene](../teorija-promjene/) da utvrdi koji su ishodi obuhvaćeni, a izražava ih istim lancem odgovornosti kao [logički model](../logički-model/):

```
SROI omjer = sadašnja vrijednost ishoda / vrijednost uloženih sredstava

Postupak:
 1. Utvrditi opseg i dionike čiji će se ishodi mjeriti
 2. Prikazati ishode (teorija promjene, potkrijepljena dokazima s dionicima, a ne pretpostavljena)
 3. Potkrijepiti ishode dokazima i dati im vrijednost pomoću financijskih zamjenskih mjera
 4. Utvrditi učinak: bruto vrijednost − mrtvi teret − pripisivanje − istiskivanje, zatim primijeniti opadanje
 5. Izračunati SROI: neto sadašnja vrijednost učinka ÷ vrijednost uloženih sredstava
 6. Izvijestiti, primijeniti i ugraditi, jer je omjer sredstvo komunikacije, a ne završna točka
```

Mrtvi teret, pripisivanje i istiskivanje obrađeni su u [dodatnosti i mrtvom teretu](../dodatnost-i-mrtvi-teret/) i [istiskivanju i pripisivanju učinka](../istiskivanje-i-pripisivanje-učinka/); sva tri služe izdvajanju stvarnog [kontrafaktualnog](../kontrafaktualna-analiza/) učinka iz bruto ishoda.

## Primjer iz prakse

**Program zapošljavanja lokalne vlasti**: godišnji trošak ulaganja 250.000 £. Šezdeset sudionika prelazi u trajno zaposlenje; financijska zamjenska mjera za taj ishod (povećanje dobrobiti, manje oslanjanja na naknade i porezni prihod zajedno) iznosi 8.500 £ po osobi za prvu godinu; vidi [baze jediničnih troškova](../baze-jediničnih-troškova/) za izvore takvih mjera.

- Bruto vrijednost ishoda: 60 × 8.500 £ = 510.000 £
- Minus mrtvi teret (40 % bi vjerojatno našlo posao i bez programa): 510.000 £ × 0,60 = 306.000 £
- Minus pripisivanje (30 % preostale promjene posljedica je potpore drugih agencija): 306.000 £ × 0,70 = 214.200 £
- Ishod u 2. godini uz opadanje od 30 %: 214.200 £ × 0,70 = 149.940 £, diskontirano po 3,5 %/godišnje (vidi
  [društvenu diskontnu stopu](../društvena-diskontna-stopa/)): 149.940 £ ÷ 1,035 = 144.870 £
- Ukupna sadašnja vrijednost učinka: 214.200 £ + 144.870 £ = 359.070 £
- **SROI omjer: 359.070 £ ÷ 250.000 £ = 1,44**, iskazan kao „1,44 £ društvene vrijednosti za svaku uloženu 1 £”

**Dobrotvorna organizacija**: usluga druženja vrijedna 60.000 £ smanjuje usamljenost za 80 starijih osoba, vrednovano zamjenskom mjerom od 1.100 £/osobi/godišnje. Bruto vrijednost 88.000 £; nakon 35 % mrtvog tereta i 15 % pripisivanja neto učinak iznosi 88.000 £ × 0,65 × 0,85 = 48.620 £, odnosno SROI omjer 0,81, ispod točke pokrića, što je legitiman i koristan nalaz, a ne neuspjeh koji ne treba objaviti.

## Veza s programskim inženjerstvom

SROI kalkulator koji korisniku dopušta unos brojeva ishoda i zamjenskih vrijednosti, ali nema obvezno polje za mrtvi teret, pripisivanje ili povezanu teoriju promjene, po zadanome će davati napuhane omjere, jer je izostavljanje prilagodbi put najmanjeg otpora. Ugradite disciplinu u shemu: svaki redak ishoda treba upućivati na skupinu dionika, dokazanu količinu, financijsku zamjensku mjeru s izvorom i neizostavna polja za mrtvi teret/pripisivanje. Vidi [ishode naspram izlaznih rezultata](../ishodi-naspram-izlaznih-rezultata/) za razliku o kojoj ovisi prikaz ishoda u SROI-ju i [logički model](../logički-model/) za lanac koji alat treba preslikati u svom podatkovnom modelu.

## Zamke

- **Preskakanje mrtvog tereta i pripisivanja.** Glavni omjer bez tih prilagodbi bruto je brojka, a ne neto učinak, a načela Social Value UK izričito traže oboje.
- **Uspoređivanje omjera među organizacijama.** SROI omjer ovisi o opsegu i izboru zamjenskih mjera u svakom pojedinom slučaju; tretiranje omjera 4:1 iz jednog izvješća kao „boljeg” od omjera 2:1 iz drugog zanemaruje da pretpostavke nisu standardizirane poput financijskog računovodstvenog omjera.
- **Dvostruko brojenje preklapajućih zamjenskih mjera.** Slaganje zamjenske mjere „smanjena usamljenost” sa zamjenskom mjerom „bolje mentalno zdravlje” za iste korisnike može dvaput vrednovati jednu temeljnu promjenu.
- **Preskakanje angažmana dionika.** Prvo načelo traži da ishode definiraju ljudi koji ih doživljavaju, a ne da ih pretpostavlja analitičar koji gradi model.

## Izvori

- Social Value UK / Social Value International. <https://socialvalueuk.org/>
- The SROI Network, "A Guide to Social Return on Investment" (2012).
- Social Value International, "The Principles of Social Value." <https://www.socialvalueint.org/principles>
