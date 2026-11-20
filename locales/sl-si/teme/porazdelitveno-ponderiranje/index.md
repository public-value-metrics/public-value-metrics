# Porazdelitveno ponderiranje

Porazdelitveno ponderiranje prilagodi denarno vrednost stroška ali koristi glede na to, kdo ju prejme, po načelu, da je dodaten funt vreden več za revno gospodinjstvo kot za bogato. Green Book britanskega zakladnega ministrstva (HM Treasury) podaja izrecno metodo za uporabo tega ponderiranja, ki temelji na padajoči mejni koristnosti dohodka, tako da ocene ne molče obravnavajo funta, ki ga prejme najbogatejši decil, kot enakovrednega funtu, ki ga prejme najrevnejši.

## Zakaj je pomembno

Standardna analiza stroškov in koristi sešteva funte, ne da bi spraševala, čigavi so, kar implicitno predpostavlja, da je funt za vsakogar vreden enako – predpostavko, za katero ekonomisti že dolgo vedo, da je napačna. Gospodinjstvo z dohodkom £15 000 na leto doživlja dobitek £1 000 povsem drugače kot gospodinjstvo z dohodkom £150 000 na leto, ker mejna korist dohodka pada z rastjo dohodka. Brez ponderiranja standardna ocena sistematično daje prednost ukrepom, ki koristijo premožnejšim, že dobro stoječim skupinam, ker njihova večja kupna moč napihne denarno vrednost koristi, ki jih dosežejo (posodobitev parka ob dragih stanovanjih »pokaže« večjo korist v vrednosti nepremičnin kot enaka posodobitev ob poceni stanovanjih, zgolj zato, ker so cene višje, ne zato, ker bi bil dobitek blaginje večji).

Dopolnilne smernice Green Booka o porazdelitveni analizi, okrepljene po pregledu Treasury iz leta 2020, ki je odgovoril na očitke, da je metodologija ocen sistematično dajala prednost Londonu in jugovzhodu, določajo formalen pristop ponderiranja, ki temelji na predpostavljeni elastičnosti mejne koristnosti dohodka okoli 1,3 – kar pomeni, da podvojitev dohodka približno razpolovi (natančneje, 2^-1,3 ≈ 0,41-krat) mejno vrednost dodatnega funta. To ni zaokroževalni popravek: uporaba lahko spremeni, kateri od dveh tekmujočih programov kaže višjo neto sedanjo vrednost, zlasti pri primerjavi ukrepa, osredotočenega na prikrajšano območje, z ukrepom, razpršenim po splošni populaciji.

## Matematika

Porazdelitvena utež Green Booka za funt koristi, ki pripade gospodinjstvu z ravnjo dohodka y, glede na funt pri nacionalnem povprečnem dohodku ȳ:

```
Utež(y) = (ȳ / y)^e

kjer je:
  y  = dohodek gospodinjstva (ali dohodek prizadete skupine)
  ȳ  = povprečni (referenčni) dohodek gospodinjstva
  e  = elastičnost mejne koristnosti dohodka (Green Book: približno 1,3)
```

Uporaba uteži na neto koristih:

```
Ponderirana korist = Σ [neponderirana korist za skupino i × Utež(y_i)]
```

Skupina z dohodkom, ki je polovica nacionalnega povprečja (y = 0,5ȳ), dobi utež (1/0,5)^1,3 = 2^1,3 ≈ 2,46 – vsak funt koristi za to skupino šteje približno 2,46-krat toliko kot funt za gospodinjstvo s povprečnim dohodkom.

## Praktični primer

**Dva tekmujoča lokalna programa**, vsak z neponderirano neto korist £2 milijona na leto, ki tekmujeta za isti regionalni sklad za rast:

- *Program A*: shema podpore podjetjem v premožnem mestu, povprečni dohodek gospodinjstva £45 000 (približno 1,3-kratnik predpostavljenega nacionalnega povprečja £35 000).
- *Program B*: program veščin v prikrajšanem okolišu, povprečni dohodek gospodinjstva £18 000 (približno 0,51-kratnik nacionalnega povprečja).

```
Utež(A) = (35 000 / 45 000)^1,3 = (0,778)^1,3 ≈ 0,72
Utež(B) = (35 000 / 18 000)^1,3 = (1,944)^1,3 ≈ 2,53

Ponderirana korist A = £2 000 000 × 0,72 = £1,44 milijona
Ponderirana korist B = £2 000 000 × 2,53 = £5,06 milijona
```

Neponderirana programa sta izenačena. S porazdelitvenim ponderiranjem je korist programa B več kot trikrat večja – rezultat, ki obrne priporočilo o financiranju in odraža izrecni namen Green Booka, ki zahteva, da se ponderiranje prikaže, ne le neponderirano razmerje med koristmi in stroški.

**Dodelitev dobrodelnih nepovratnih sredstev**: financer, ki primerja £500 000 nepovratnih sredstev, ki dosežejo 1 000 gospodinjstev z nizkimi dohodki (utež ≈ 2,0, ponderirana vrednost enakovredna £1 milijonu), z istimi £500 000, ki dosežejo 1 000 gospodinjstev s srednjimi dohodki (utež ≈ 1,0, ponderirana vrednost enakovredna £500 000), bi moral porazdelitveno utemeljitev izrecno prikazati v gradivu za upravni odbor, ne pa je prepustiti sklepanju.

## Povezava s programskim inženirstvom

Porazdelitveno ponderiranje se redko pojavi neposredno v metrikah izvedbe programske opreme, vendar bi moralo oblikovati, kako inženirske in podatkovne ekipe zasnujejo merjenje in ciljanje:

- Pri gradnji nadzorne plošče učinkov ali kalkulatorja koristi prikažite dohodkovni ali prikrajšanostni profil prizadetih, ne le skupne vsote koristi – skupne številke brez porazdelitvene razčlenitve skrijejo prav obrat, prikazan zgoraj.
- Logiko ciljanja v zasnovi storitve povežite z istimi podatki o prikrajšanosti, ki jih uporablja Green Book – glej [indeks večkratne prikrajšanosti](../indeks-večkratne-prikrajšanosti/) – da je mogoče doseg digitalne storitve oceniti glede pravičnosti, ne le učinkovitosti (sporni četrti E pri [vrednosti za denar](../vrednost-za-denar/)).
- Kadar algoritem dodeljuje redek vir (termine, čas svetovalcev, subvencijo), bo neponderirana ciljna funkcija »maksimiraj skupno korist« po konstrukciji ponovila isto pristranskost, ki jo ponderiranje Green Booka popravlja – pred optimizacijo to izrecno sporočite lastnikom politike.

## Pasti

- **Nedosledna uporaba porazdelitvenih uteži čez portfelj.** Ponderiranje koristi enega programa, ne pa tudi primerjalnega, ustvari pristransko, ne pravičnejšo primerjavo; Green Book zahteva enako obravnavo.
- **Uporaba vrednosti nepremičnin ali tržnih vrednosti kot približka blaginje brez popravka.** Tržne cene so same popačene zaradi obstoječe dohodkovne neenakosti, kar ravno popravlja porazdelitveno ponderiranje – uporaba nepopravljenih tržnih vrednosti lahko pristranskost šteje dvakrat.
- **Prezrta variacija znotraj skupine.** Ponderiranje po povprečnem dohodku območja (npr. decilu indeksa večkratne prikrajšanosti) lahko napačno predstavi posameznike, ki ne ustrezajo povprečju svojega območja; uporabite najfinejše dohodkovne podatke, ki so razumno na voljo.
- **Obravnavanje elastičnosti 1,3 kot splošne konstante.** Green Book sam navaja, da je to ocena z verjetnim razponom; pomembne odločitve preizkusite z analizo občutljivosti z drugimi elastičnostmi, namesto da 1,3 obravnavate kot natančno vrednost.

## Viri

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation", and
  supplementary guidance on distributional impacts (2022 edition).
  <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- HM Treasury, "Green Book Review 2020: Findings and Response" (addressing regional-bias criticism).
  <https://www.gov.uk/government/publications/green-book-review-2020-findings-and-response>
- Fujiwara D, Campbell R. "Valuation Techniques for Social Cost-Benefit Analysis." HM Treasury/DWP,
  2011 (background on marginal utility of income elasticity estimates).
