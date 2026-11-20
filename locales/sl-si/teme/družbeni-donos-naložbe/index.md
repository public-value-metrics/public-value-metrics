# Družbeni donos naložbe (SROI)

Družbeni donos naložbe je okvir za merjenje, denarno ovrednotenje in obračunavanje široko pojmovane vrednosti – družbene, okoljske in ekonomske – ter njeno izražanje kot razmerja do vloženih virov, na primer »£1,44 družbene vrednosti za vsak vloženi £1«. Zasnovan je bil, da logiko finančnega računovodstva razširi na izide, ki jih trgi ne vrednotijo, brez izgube računovodske discipline: vsako število v SROI mora biti izsledljivo do izida, ki so ga opredelili deležniki, do dokazne podlage in do izrecne prilagoditve za to, kar bi se zgodilo tako ali tako.

## Zakaj je pomembno

SROI vzdržujeta Social Value UK in Social Value International, naslednici SROI Network, katere »A Guide to Social Return on Investment« (2012) je še vedno referenčna metodologija. Okvir temelji na sedmih načelih – vključi deležnike, razumi, kaj se spreminja, vrednoti stvari, ki so pomembne, vključi le tisto, kar je bistveno, ne pretiravaj s trditvami, bodi pregleden in preveri rezultat – in prav peto načelo, »ne pretiravaj s trditvami«, ne izpolnjuje večina poročil SROI v praksi. Razmerje, dobljeno z izpustitvijo prilagoditev za mrtvo težo in pripisovanje, ni SROI; je tržna številka v oblačilih SROI. Programski inženirji, ki gradijo orodja za poročanje za dobrodelne organizacije, socialna podjetja ali naročnike, morajo poznati razliko, ker bo orodje disciplino bodisi uveljavljalo bodisi omogočilo njeno preskočitev.

## Matematika

SROI je odvisen od [teorije spremembe](../teorija-spremembe/), ki določi, kateri izidi so v obsegu, in jih izraža z isto verigo odgovornosti kot [logični model](../logični-model/):

```
Razmerje SROI = sedanja vrednost izidov / vrednost vložkov

Postopek:
 1. Določite obseg in prepoznajte deležnike, katerih izidi se bodo merili
 2. Preslikajte izide (teorija spremembe, dokazana z deležniki, ne predpostavljena)
 3. Dokažite izide in jim dajte vrednost s finančnimi približki
 4. Določite učinek: bruto vrednost − mrtva teža − pripisovanje − izrinjanje, nato uporabite upadanje
 5. Izračunajte SROI: neto sedanja vrednost učinka ÷ vrednost vložkov
 6. Poročajte, uporabite in vgradite – razmerje je komunikacijsko sredstvo, ne cilj
```

Mrtva teža, pripisovanje in izrinjanje so obravnavani v [dodatnost in mrtva teža](../dodatnost-in-mrtva-teža/) ter [izrinjanje in pripisovanje](../izpodrinjenje-in-pripisovanje-učinka/); vsi trije obstajajo zato, da izolirajo resnični [protidejstveni](../kontrafaktična-analiza/) učinek od bruto izida.

## Praktični primer

**Program zaposlovanja lokalne oblasti**: letni stroški vložka £250 000. Šestdeset udeležencev preide v trajno zaposlitev; finančni približek za ta izid (povečanje blaginje, manjša odvisnost od prejemkov in davčni prihodek skupaj) je £8 500 na osebo za prvo leto – glej [zbirke enotnih stroškov](../zbirke-enotnih-stroškov/), od kod takšni približki izvirajo.

- Bruto vrednost izida: 60 × £8 500 = £510 000
- Minus mrtva teža (40 % bi verjetno našlo delo brez programa): £510 000 × 0,60 = £306 000
- Minus pripisovanje (30 % preostale spremembe gre na račun podpore drugih agencij): £306 000 × 0,70 = £214 200
- Izid 2. leta ob 30-odstotnem upadanju: £214 200 × 0,70 = £149 940, diskontirano s 3,5 %/leto (glej
  [družbena diskontna stopnja](../družbena-diskontna-stopnja/)): £149 940 ÷ 1,035 = £144 870
- Skupna sedanja vrednost učinka: £214 200 + £144 870 = £359 070
- **Razmerje SROI: £359 070 ÷ £250 000 = 1,44**, poročano kot »£1,44 družbene vrednosti za vsak vloženi £1«

**Dobrodelna organizacija**: storitev druženja za £60 000 zmanjša osamljenost 80 starejšim ljudem, ovrednoteno s približkom £1 100/osebo/leto. Bruto vrednost £88 000; po 35 % mrtve teže in 15 % pripisovanja je neto učinek £88 000 × 0,65 × 0,85 = £48 620, razmerje SROI 0,81 – pod pragom rentabilnosti, kar je legitimna in koristna ugotovitev, ne neuspeh pri poročanju.

## Povezava s programskim inženirstvom

Kalkulator SROI, ki uporabniku omogoča vnos števila izidov in vrednosti približkov, a nima obveznega polja za mrtvo težo, pripisovanje ali povezano teorijo spremembe, bo privzeto ustvarjal napihnjena razmerja, ker je izpustitev prilagoditev pot najmanjšega odpora. Disciplino vgradite v shemo: vsaka vrstica izida naj se sklicuje na skupino deležnikov, dokazano količino, finančni približek z virom in neizbirni polji za mrtvo težo/pripisovanje. Glej [izidi proti izložkom](../izidi-in-izložki/) za razlikovanje, od katerega je odvisno preslikovanje izidov v SROI, in [logični model](../logični-model/) za verigo, ki naj jo orodje zrcali v svojem podatkovnem modelu.

## Pasti

- **Izpustitev mrtve teže in pripisovanja.** Glavno razmerje brez teh prilagoditev je bruto številka, ne neto učinek, načela Social Value UK pa izrecno zahtevajo obe.
- **Primerjanje razmerij med organizacijami.** Razmerje SROI je odvisno od obsega in izbire približkov v posameznem primeru; obravnava razmerja 4:1 iz enega poročila kot »boljšega« od razmerja 2:1 iz drugega prezre, da predpostavke niso standardizirane kot pri računovodskem kazalniku.
- **Dvojno štetje prekrivajočih se približkov.** Zlaganje približka »zmanjšana osamljenost« s približkom »izboljšano duševno dobro počutje« za iste upravičence lahko dvakrat ovrednoti eno osnovno spremembo.
- **Preskok vključevanja deležnikov.** Prvo načelo zahteva, da se izidi opredelijo z ljudmi, ki jih doživljajo, ne da jih predpostavi analitik, ki gradi model.

## Viri

- Social Value UK / Social Value International. <https://socialvalueuk.org/>
- The SROI Network, "A Guide to Social Return on Investment" (2012).
- Social Value International, "The Principles of Social Value." <https://www.socialvalueint.org/principles>
