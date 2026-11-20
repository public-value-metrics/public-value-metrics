# Vrijednost volonterskog vremena

Vrijednost volonterskog vremena novčana je procjena dodijeljena neplaćenom radu, najčešće rabljena za iskazivanje pravog gospodarskog otiska dobrotvorne organizacije (njezini računi plus rad koji nije morala platiti) ili za argument da je određena intervencija troškovno učinkovitija nego što sam gotovinski proračun sugerira. Dominiraju dvije nacionalne metodologije: procjena američkog Independent Sectora i pristup britanskog Office for National Statistics / NCVO-a, a oni isti sat rada vrednuju prilično različito.

## Zašto je važno

Independent Sector u suradnji s Do Good Institutom Sveučilišta Maryland svake godine objavljuje nacionalnu satnu vrijednost volonterskog vremena, izgrađenu na podacima o plaćama Bureau of Labor Statistics, točnije prosječnoj satnici proizvodnih i nenadzornih radnika na privatnim nepoljoprivrednim platnim listama, uz prilagodbu za dodatne naknade, i raščlanjenu po američkim saveznim državama. Najnovije izdanje navodi vrijednost od **36,14 $ po satu za 2025.**, što je 3,9 % više nego prethodne godine, s vrijednostima po državama od više od 50 $ u Washingtonu, DC do manje od 20 $ u Portoriku. U Ujedinjenom Kraljevstvu Office for National Statistics zasebno je procijenio zamjenski trošak formalnog volontiranja na **14,43 £ po satu** (procjena iz 2017.), a NCVO-ov UK Civil Society Almanac 2024 rabi podatke o sudjelovanju u volontiranju (oko 14,2 milijuna ljudi formalno volontira u 2021.–22.) da procijeni ukupni doprinos volontiranja sektoru na otprilike **18 milijardi £**, oko 0,8 % britanskog BDP-a.

Razlog zašto je to važno i izvan računovodstvene kozmetike: program koji se uvelike oslanja na volonterski rad može izgledati dramatično jeftinije na čisto gotovinskoj osnovi [troška po ishodu](../trošak-po-ishodu/) od onog koji se oslanja na plaćeno osoblje, čak i kad je pravi trošak resursa, odnosno trošak zamjene tog rada, sličan ili viši. Financijeri i evaluatori koji ignoriraju vrijednost volonterskog vremena sustavno podbrojavaju pravi trošak modela isporuke s mnogo volontera, što iskrivljuje usporedbe učinkovitosti s modelima plaćenog osoblja koji isporučuju isti ishod.

## Matematika

```
Vrijednost volonterskog vremena = odrađeni volonterski sati × satnica

Izbor satnice je važan i mijenja odgovor:
  - Pristup zamjenskog troška: nadnica plaćenog radnika koji bi obavio isti
    zadatak (npr. zamjenska satnica za kvalificiranog radnika s mladima,
    a ne opći prosjek nadnice), najobranjiviji za vrednovanje po zadatku
  - Pristup oportunitetnog troška: vlastita izgubljena nadnica volontera,
    najobranjiviji za vrednovanje onoga čega se volonter odrekao
  - Pristup nacionalnog prosjeka: jedinstvena mješovita stopa Independent Sectora
    ili ONS-a, najobranjiviji za glavnu, međusektorsku usporedivost
```

Ta se tri pristupa za isti sat mogu razlikovati višestruko (odvjetnik koji volontira kao član upravnog odbora ima vrlo različitu oportunitetnu satnicu od nacionalnog prosjeka), pa svaka iskazana brojka mora navesti koja ju je metoda proizvela.

## Primjer iz prakse

**Britanska dobrotvorna organizacija, pristup nacionalnog prosjeka**: 5.000 volonterskih sati u godini, vrednovano po 14,43 £/sat (ONS-ova procjena zamjenskog troška):

```
Vrijednost = 5.000 × 14,43 £ = 72.150 £
```

Ako je gotovinska potrošnja organizacije te godine bila 300.000 £, njezin pravi trošak resursa (gotovina plus volonterski rad) iznosi 372.150 £, otprilike 24 % više nego što sama gotovinska brojka sugerira. Izračun troška po ishodu koji rabi samo gotovinskih 300.000 £ podcjenjuje pravi trošak za istu maržu.

**Američka dobrotvorna organizacija, pristup nacionalnog prosjeka**: 2.000 volonterskih sati vrednovano po 36,14 $/sat (Independent Sector, izdanje 2025.):

```
Vrijednost = 2.000 × 36,14 $ = 72.280 $
```

**Ista američka organizacija, pristup oportunitetnog troška**: ako su volonteri nerazmjerno umirovljeni stručnjaci čija je prijašnja zarada u prosjeku iznosila 60 $/sat, vrednovanje prema oportunitetnom trošku iznosilo bi 120.000 $, dvije trećine više od brojke nacionalnog prosjeka, što pokazuje zašto se metoda mora navesti.

## Veza s programskim inženjerstvom

Sustavi koji bilježe volonterske sate (alati za raspored smjena, platforme za upravljanje volonterima) trebali bi bilježiti sate na razini zadatka ili uloge, a ne samo ukupno, kako bi se zamjenska satnica mogla primijeniti po ulozi, a ne jedna opća nacionalna prosječna stopa na mješovitu volontersku radnu snagu (sat člana upravnog odbora i sat redara ekonomski nisu jednaki). Pohranjivanje primijenjene satnice i metodologije uz izračunatu vrijednost, a ne samo završne novčane brojke, omogućuje daljnjem izvješćivanju (godišnji računi, izračuni [društvenog povrata ulaganja](../društveni-povrat-ulaganja/), izvješća financijerima) da kasnije reproducira ili ospori broj, umjesto da ga tretira kao neproziran konstantu. Vidi [trošak po ishodu](../trošak-po-ishodu/) o tome zašto izostavljanje vrijednosti volonterskog vremena sustavno podcjenjuje pravi trošak isporuke.

## Zamke

- **Jedna opća satnica za strukturno različite uloge.** Nacionalna prosječna stopa nadnice primijenjena na stručni besplatni sat (pravni, financijski, klinički) drastično ga podcjenjuje; uskladite stopu sa zamijenjenom ulogom kad god je zadatak stručan.
- **Dvostruko brojenje naspram troška plaćenog osoblja.** Ako volonteri zamjenjuju rad koji bi inače bio plaćen, osigurajte da je vrednovanje dodatak gotovinskoj potrošnji, a ne nadograđeno na već napuhanu procjenu osoblja.
- **Navođenje zastarjele stope bez datuma.** Stope Independent Sectora i ONS-a mijenjaju se godišnje (ili se, u slučaju ONS-a, samo povremeno ponovno procjenjuju); nedatirana brojka volonterskog vremena u izvješću gotovo je beskorisna za usporedbu.
- **Tretiranje vrijednosti volonterskog vremena kao imovine za prikupljanje sredstava.** To je prilagodba troškovnog računovodstva radi razumijevanja pravog troška resursa, a ne novi novac koji organizacija može potrošiti; brkanje ta dva pojma zavarava upravni odbor koji čita račune.

## Izvori

- Independent Sector and the Do Good Institute (University of Maryland), "Value of Volunteer Time." <https://www.independentsector.org/value-of-volunteer-time/>
- Independent Sector, Value of Volunteer Time methodology. <https://independentsector.org/research/value-of-volunteer-time-methodology/>
- NCVO, UK Civil Society Almanac 2024. <https://www.ncvo.org.uk/news-and-insights/news-index/uk-civil-society-almanac-2024/>
- Office for National Statistics, volunteering valuation estimate, as cited in NCVO analysis. <https://www.ncvo.org.uk/>
