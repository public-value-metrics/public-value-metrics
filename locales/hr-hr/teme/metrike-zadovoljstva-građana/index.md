# Metrike zadovoljstva građana

Metrike zadovoljstva građana mjere kako ljudi ocjenjuju svoje izravno iskustvo javne usluge, što je različito od povjerenja u institucije općenito i različito od toga je li usluga doista postigla dobar ishod. Usluga može biti omiljena, a neučinkovita, ili učinkovita, a nepopularna; jaz između to dvoje i sam je dijagnostička informacija koju bi isporučiteljski tim trebao pratiti.

## Zašto je važno

Zadovoljstvo se mjeri na dvije različite razine koje se rutinski miješaju. Na razini usluge, britanska danas ukinuta Performance Platform i današnji GOV.UK Service Manual zahtijevaju anketu zadovoljstva po usluzi (obično ljestvica od pet stupnjeva od „vrlo zadovoljan” do „vrlo nezadovoljan”, provedena u trenutku transakcije) kao jedan od četiri obvezna KPI-ja usluge; vidi [standarde usluga i metrike transakcija](../standardi-usluga-i-metrike-transakcija/). Na institucionalnoj razini, britanski Civil Service People Survey godišnje mjeri angažman i iskustvo zaposlenika u svakom središnjem ministarstvu, a zasebno OECD-ov program „Trust in Government” anketira povjerenje javnosti u nacionalnu vladu u državama članicama, prateći dugoročni obrazac pada i oporavka koji snažno oblikuju krize (financijska kriza 2008. i pandemija COVID-19 obje su proizvele oštra, vidljiva kretanja u OECD-ovim brojkama o povjerenju). Razlog zašto inženjeri koji grade usluge okrenute građanima moraju držati zadovoljstvo i ishod odvojeno poznat je način neuspjeha u dizajnu usluga: prekrasno dizajniran, jednostavan digitalni obrazac za zahtjev za naknadu može postići vrlo visoko zadovoljstvo, dok politika u pozadini, pravila prihvatljivosti, zaostaci u obradi i iznosi naknada, ostavlja podnositelja ništa boljim. Zadovoljstvo mjeri sučelje; ne mjeri vrijednost isporučenu iza njega.

## Matematika

```
Neto zadovoljstvo = % zadovoljnih (ili vrlo zadovoljnih) − % nezadovoljnih (ili vrlo nezadovoljnih)
                    (neutralni odgovori/bez mišljenja isključeni su iz oba člana, ali se
                    broje u bazi odgovora pri izračunu svakog postotka)

Jaz zadovoljstvo–ishod = ocjena zadovoljstva − ocjena ostvarenja ishoda
                    (oboje normalizirano 0–100; velik pozitivan jaz signalizira uslugu
                    koja „dobro izgleda”, ali ne isporučuje u biti)

Indeks povjerenja (u stilu OECD-a) = % ispitanika koji odgovaraju „da” na
                    „imate li povjerenja u [nacionalnu vladu]?”
                    prati se kao vremenski niz, obično raščlanjen po
                    dobi, prihodu i obrazovanju
```

## Primjer iz prakse

**Usluga e-naplate poreza na imovinu lokalne vlasti**: anketa zadovoljstva u trenutku uspješne transakcije pokazuje 2.400 ispitanika: 1.650 zadovoljnih/vrlo zadovoljnih, 250 nezadovoljnih/vrlo nezadovoljnih, 500 neutralnih.

```
Neto zadovoljstvo = (1.650/2.400 × 100) − (250/2.400 × 100)
                  = 68,75 % − 10,42 %
                  = +58,3 neto zadovoljstva
```

To izolirano izgleda snažno. No anketa se prikazuje samo korisnicima koji *uspješno* dovrše transakciju, što je poznata pristranost mjerenja (vidi zamke niže). Uparivanje s metrikom stope dovršetka iz [standarda usluga i metrika transakcija](../standardi-usluga-i-metrike-transakcija/) pokazuje da je dovršetak samo 71 %, što znači:

```
Pravo zadovoljstvo populacije nije izmjereno za 29 % koji su napustili put —
vjerojatno najnezadovoljniju skupinu, jer je napuštanje samo po sebi snažan negativan
signal koji anketa nikad ne bilježi.
```

**Ilustracija na nacionalnoj razini (struktura niza povjerenja u stilu OECD-a)**: povjerenje u nacionalnu vladu iskazano je kao 42 % u 1. godini, pada na 34 % u 2. godini (kriznoj) i oporavlja se na 39 % u 3. godini, što je putanja tipična za obrazac šoka i djelomičnog oporavka koji OECD dokumentira u državama članicama nakon velikih kriza.

## Veza s programskim inženjerstvom

Instrumentirajte ankete zadovoljstva na svakoj smislenoj izlaznoj točki korisničkog puta, a ne samo pri uspješnom dovršetku: to je najčešća inženjerska pogreška na tom području i ona tiho pretvara metriku zadovoljstva u taštu metriku pristranu preživljavanjem. Gdje je moguće, uparite ocjenu zadovoljstva s metrikom dovršetka ili ishoda na istoj nadzornoj ploči kako tim ne bi mogao slaviti rast zadovoljstva dok dovršetak tiho pada (vidi [trošak po transakciji](../trošak-po-transakciji/) i [digitalnu uključenost](../digitalna-uključenost/) za pitanje tko je uopće isključen iz digitalnog uzorkovanja zadovoljstva: nedigitalni i korisnici uz digitalnu pomoć sustavno su nedovoljno zastupljeni u anketama unutar usluge). Podaci o zadovoljstvu i povjerenju izravno hrane i krak legitimnosti [Mooreova strateškog trokuta](../javna-vrijednost/) te pripadaju perspektivama „korisnik” i „legitimnost” [pokazivača javne vrijednosti](../kartica-rezultata-javne-vrijednosti/); vidi [metrike povjerenja i legitimnosti](../metrike-povjerenja-i-legitimnosti/) za institucionalni pandan ovoj metrici na razini usluge.

## Zamke

- **Pristranost preživljavanja u anketama pri dovršetku**: korisnici koji napuste put nikad ne vide anketu, pa visoka ocjena zadovoljstva unutar usluge može supostojati s niskom stopom dovršetka i velikom nevidljivom populacijom nezadovoljnih koji nisu dovršili.
- **Tretiranje zadovoljstva kao zamjene za ishod**: dobro dizajnirano sučelje za loše dizajniranu politiku postiže dobar rezultat zadovoljstva i loš rezultat ishoda; uvijek iskažite oboje, nikad jedno kao zamjenu za drugo.
- **Mali, nereprezentativni uzorci iskazani lažnom preciznošću**: ocjena zadovoljstva iz nekoliko stotina samoodabranih ispitanika iskazana na jednu decimalu implicira sigurnost koju veličina uzorka ne može poduprijeti.
- **Ignoriranje demografskog raščlanjivanja**: nacionalne brojke povjerenja i zadovoljstva koje nisu raščlanjene po dobi, prihodu, invaliditetu ili digitalnom pristupu mogu prikriti oštro različita iskustva među skupinama, što OECD-ova izdanja Trust in Government izričito raščlanjuju.

## Izvori

- OECD, "Trust in Government." <https://www.oecd.org/en/topics/trust-in-government.html>
- UK Cabinet Office, "Civil Service People Survey" results.
  <https://www.gov.uk/government/collections/civil-service-people-survey-results>
- GOV.UK Service Manual, "Measuring Success." <https://www.gov.uk/service-manual/measuring-success>
