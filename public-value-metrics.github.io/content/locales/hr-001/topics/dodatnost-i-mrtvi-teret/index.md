# Dodatnost i mrtvi teret

Dodatnost postavlja pitanje je li intervencija uzrokovala ishod koji se inače ne bi dogodio. Mrtvi teret (engl. deadweight) njezin je zrcalni pojam: udio ishoda koji bi se dogodio i bez programa, bespovratnih sredstava ili subvencije. Gotovo svaka tvrdnja o učinku vladina programa ili dobrotvorne organizacije precjenjuje učinak sve dok se ne oduzme mrtvi teret, zbog čega ga britanske smjernice za evaluaciju smatraju prvom i najvažnijom korekcijom svakog naslovnog broja.

## Zašto je važno

„Poduprli smo rast 500 poduzeća” zvuči kao postignuće, no ako bi 300 tih poduzeća raslo i bez programa, jer se lokalno gospodarstvo oporavljalo, jer su imala druge izvore financiranja ili jer su već prije početka programa bila na putanji rasta, stvarni dodatni doprinos programa iznosi 200, a ne 500. Magenta Book britanskog Ministarstva financija (HM Treasury) i dugogodišnji „Additionality Guide” (Vodič o dodatnosti) HM Treasuryja i BIS-a, izvorno razvijen za programe regionalnog razvoja i regeneracije, a otad široko korišten u evaluaciji britanske vlade, formaliziraju mrtvi teret kao polaznu korekciju u standardnom slijedu neto učinka: bruto učinak minus mrtvi teret, minus istiskivanje, minus curenje, prilagođeno multiplikatorskim učincima, jednako je neto dodatnom učinku. Preskakanje tog koraka najčešći je pojedinačni način na koji se napuhuju tvrdnje o učinku u javnom i društvenom sektoru, namjerno ili ne: program dodjele sredstava koji mjeri samo bruto ishode sudionika, bez usporedne skupine, ne može razlikovati vlastiti učinak od onoga što bi se dogodilo u svakom slučaju.

Mrtvi teret nije fiksni postotak; u potpunosti ovisi o kontrafaktualnom scenariju za konkretnu populaciju i intervenciju (vidi [kontrafaktualnu analizu](../kontrafaktualna-analiza/)). Evaluacije regionalnog razvoja u Engleskoj za vrijeme nekadašnjih Regionalnih razvojnih agencija obično su nalazile stope mrtvog tereta u rasponu od 20 do 60 % ovisno o vrsti poslovne potpore, zbog čega vjerodostojne evaluacije programa iskazuju raspon prilagođen za mrtvi teret, a ne jednu pretpostavljenu vrijednost, i zbog čega financijeri poput National Lottery Community Fund i Big Society Capital od korisnika sredstava traže da u izvješćivanju o ishodima izričito obrade mrtvi teret umjesto da iskazuju bruto brojeve sudionika.

## Matematika

Standardni slijed korekcija za neto učinak, kako je izložen u britanskim smjernicama za evaluaciju (Magenta Book; HM Treasury/BIS Additionality Guide; smjernice za evaluaciju ESIF-a i strukturnih fondova):

```
Bruto ishod
  − Mrtvi teret      (što bi se dogodilo i u svakom slučaju)
  − Istiskivanje     (aktivnost/korist premještena odnekud drugdje, a ne stvorena — vidi
                       displacement-and-attribution)
  − Curenje          (korist koja pripada izvan ciljne skupine/područja)
  × Multiplikator    (dodatna neizravna/inducirana gospodarska aktivnost, ako je pozitivna)
  = Neto dodatni učinak
```

Stopa mrtvog tereta kao udio:

```
Stopa mrtvog tereta = ishodi koji bi se dogodili bez intervencije
                      / ukupni opaženi bruto ishodi

Neto dodatni ishodi = Bruto ishodi × (1 − stopa mrtvog tereta)
```

## Primjer iz prakse

**Program bespovratnih sredstava za poslovnu potporu**: regionalna shema izvješćuje da je 500 poduprtih poduzeća sljedeće godine povećalo zaposlenost, u prosjeku za 3 radna mjesta po poduzeću, što je bruto tvrdnja od 1.500 radnih mjesta.

Usporedna skupina sličnih nepoduprtih poduzeća (vidi [kontrafaktualnu analizu](../kontrafaktualna-analiza/)) pokazuje da bi se 40 % rasta zaposlenosti poduprtih poduzeća dogodilo i bez potpore, na temelju kretanja usporedne skupine u istom razdoblju.

```
Stopa mrtvog tereta = 40 %
Neto dodatna radna mjesta = 1.500 × (1 − 0,40) = 900 radnih mjesta
```

Postignuće koje programu pošteno možemo pripisati jest 900 radnih mjesta, a ne 1.500, dakle 40 % manje samo zbog korekcije za mrtvi teret, i to prije nego što se uopće uzmu u obzir istiskivanje ili curenje.

**Dobrotvorni program zapošljavanja**: dobrotvorna organizacija zapošljava 200 dugotrajno nezaposlenih osoba uz trošak od 600.000 £ (3.000 £ po zapošljavanju, bruto). Podaci o nacionalnom tržištu rada pokazuju da bi, bez ikakve intervencije, otprilike 15 % usporedive skupine dugotrajno nezaposlenih pronašlo posao u istom razdoblju zbog uobičajene fluktuacije na tržištu rada.

```
Stopa mrtvog tereta = 15 %
Neto dodatna zapošljavanja = 200 × (1 − 0,15) = 170
Stvarni trošak po dodatnom zapošljavanju = 600.000 £ / 170 ≈ 3.529 £
```

Bruto trošak po zapošljavanju (3.000 £) podcjenjuje stvarni trošak dodatnog doprinosa organizacije za otprilike 15 %.

## Veza s programskim inženjerstvom

Dodatnost i mrtvi teret izravno su važni svima koji grade softver za mjerenje učinka ili upravljanje bespovratnim sredstvima u javnom ili društvenom sektoru:

- Sustavi za izvješćivanje o ishodima trebaju već u dizajnu bilježiti usporednu ili polaznu skupinu, a ne samo ishode sudionika; naknadno uvođenje kontrafaktualnog scenarija nakon pokretanja sustava bez njega znatno je teže nego ugraditi prikupljanje podataka od početka (vidi [kontrafaktualnu analizu](../kontrafaktualna-analiza/)).
- Nadzorne ploče koje prikazuju samo bruto brojeve sudionika sustavno će precjenjivati učinak pred financijerima i nadzornim tijelima; ondje gdje postoje procjene mrtvog tereta (iz evaluacijske literature ili usporedne skupine), softver bi trebao prikazati iznos umanjen za mrtvi teret uz bruto iznos, a ne umjesto njega.
- To se izravno povezuje sa [socijalnim povratom ulaganja](../društveni-povrat-ulaganja/) (SROI), čiji je omjer vjerodostojan tek nakon što se od bruto navedenih ishoda oduzmu mrtvi teret (i istiskivanje); SROI kalkulator koji izostavlja taj korak daje napuhane omjere koji ne podnose ispitivanje.

## Zamke

- **Iskazivanje bruto ishoda kao da su svi dodatni.** To je najčešća pojedinačna pogreška u mjerenju učinka u izvješćivanju o bespovratnim sredstvima i programima; prije objave naslovnog broja uvijek se zapitajte „bi li se to dogodilo i u svakom slučaju?”
- **Pretpostavka da jedan postotak mrtvog tereta vrijedi posvuda.** Mrtvi teret uvelike varira prema sektoru, populaciji i lokalnim gospodarskim uvjetima; koristite usporednu skupinu ili dokaze specifične za sektor umjesto da preuzimate broj iz nepovezane evaluacije.
- **Brkanje mrtvog tereta i istiskivanja.** Mrtvi teret odnosi se na kontrafaktualne ishode istih sudionika; istiskivanje se odnosi na učinke na druge ljude ili mjesta, vidi [istiskivanje i pripisivanje](../istiskivanje-i-pripisivanje-učinka/). Njihovo miješanje dovodi do dvostrukog ili nedovoljnog obračuna korekcije.
- **Mrtvi teret koji procjenjuju sami sudionici.** Pitanje korisnicima „bi li se to dogodilo bez naše pomoći?” sustavno daje preniske procjene mrtvog tereta (sudionici skloni zaslugu pripisati programu); neovisna usporedna skupina znatno je pouzdanija.

## Izvori

- HM Treasury, „The Magenta Book: Central Government Guidance on Evaluation” (2020).
  <https://www.gov.uk/government/publications/the-magenta-book>
- HM Treasury / Department for Business, Innovation and Skills, „Additionality Guide: A Standard
  Approach to Assessing the Additional Impact of Interventions” (3. izdanje), izvorno razvijen
  s English Partnerships i Housing Corporation.
- European Commission, „Evalsed: The Resource for the Evaluation of Socio-Economic Development” —
  smjernice o mrtvom teretu, istiskivanju i curenju u evaluaciji strukturnih fondova.
- National Lottery Community Fund, „Guidance on Outcomes and Impact Reporting.” <https://www.tnlcommunityfund.org.uk/>
