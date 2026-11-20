# Kontrafaktualna analiza

Kontrafaktual je procjena onoga što bi se dogodilo u odsutnosti intervencije. Bez njega se promjena opažena nakon pokretanja programa ne može razlikovati od promjene koja bi se dogodila u svakom slučaju: bez kontrafaktuala nema dokaza o učinku, koliko god uvjerljivo izgledali brojevi prije i poslije. Magenta Book britanskog Ministarstva financija (HM Treasury) izgradnju vjerodostojnog kontrafaktuala smatra središnjom metodološkom zadaćom evaluacije učinka, važnijom od bilo kojeg drugog pojedinačnog izbora dizajna.

## Zašto je važno

„Kriminal je pao 15 % u godini nakon uvođenja programa” nije dokaz da je program djelovao osim ako ne znate što bi se dogodilo s kriminalom bez njega: kriminal je mogao pasti 20 % i u svakom slučaju zbog nepovezanih gospodarskih ili demografskih trendova, što bi značilo da je program zapravo pogoršao stvari u odnosu na kontrafaktual, unatoč poboljšanju sirovog broja. To je najčešća pojedinačna analitička pogreška u tvrdnjama o učinku u javnom i društvenom sektoru: brkanje usporedbe prije/poslije s dokazom uzročnosti. Magenta Book izričito navodi da evaluacija učinka postoji da odgovori na kontrafaktualno pitanje, „kakvu je razliku intervencija napravila?”, te da odgovor na njega zahtijeva procjenu, a ne samo opis, svijeta koji se nije dogodio.

Različite metode grade kontrafaktual s različitim stupnjevima pouzdanosti, a smjernice za evaluaciju u državnoj upravi rangiraju ih u skladu s tim. Randomizirani kontrolirani pokusi (RCT), u kojima se pojedinci ili područja nasumično raspoređuju da prime intervenciju ili ne, daju najjači kontrafaktual jer randomizacija osigurava da se skupina koja prima tretman i kontrolna skupina u prosjeku razlikuju samo po primanju intervencije. Cabinet Office i What Works Network promiču RCT-ove u britanskoj javnoj politici od izvješća „Test, Learn, Adapt” Behavioural Insights Teama iz 2012., upravo zato što su slabiji dizajni podložni zbunjujućim čimbenicima: opažena razlika može odražavati tko je odlučio sudjelovati, a ne učinak programa. Ondje gdje je randomizacija nepraktična ili neetična (kao što često jest za programe sa zakonskim pravom ili za promjene politike na razini cijele populacije), Magenta Book iznosi izričitu hijerarhiju slabijih, ali i dalje korisnih alternativa: uparene usporedne skupine, dizajne razlike razlika (difference-in-differences), regresijski diskontinuitet oko pragova prihvatljivosti i, kao krajnje sredstvo, običnu usporedbu prije/poslije, jasno označenu kao najslabiji oblik dokaza, sklon brkanju učinka programa s učinkom svega ostalog što se istodobno promijenilo.

## Matematika

Kontrafaktualni okvir, primjenjiv na sve metode:

```
Procijenjeni učinak = Ishod(s intervencijom) − Ishod(kontrafaktual: bez intervencije)

NE:
Procijenjeni učinak ≠ Ishod(poslije) − Ishod(prije)   [brka vrijeme s tretmanom]
```

Razlika razlika, jedan od najčešćih kvazieksperimentalnih dizajna u evaluaciji u državnoj upravi, izolira učinak tretmana oduzimanjem vlastite promjene prije/poslije usporedne skupine:

```
DiD procjena = [Ishod(tretirani, poslije) − Ishod(tretirani, prije)]
             − [Ishod(usporedni, poslije) − Ishod(usporedni, prije)]
```

Time se uklanja svaki trend zajednički objema skupinama (npr. nacionalni gospodarski pomak koji pogađa sve), a ostaje samo diferencijalna promjena koja se može pripisati intervenciji.

## Primjer iz prakse

**Program zapošljavanja, prije/poslije (slab dizajn)**: shema potpore pri traženju posla izvješćuje da je zaposlenost sudionika porasla s 40 % na 55 % tijekom godine, što daje naivan zaključak „+15 postotnih bodova zbog programa”.

**Isti program, razlika razlika (jači dizajn)**: uparena usporedna skupina sličnih nesudionika, uzetih s istog lokalnog tržišta rada, pokazuje rast zaposlenosti s 38 % na 47 % u istoj godini (nacionalni gospodarski oporavak bio je u tijeku).

```
Promjena tretirane skupine:  55 % − 40 % = +15 postotnih bodova
Promjena usporedne skupine:  47 % − 38 % = +9 postotnih bodova

DiD procjena (pravi učinak programa) = 15 − 9 = +6 postotnih bodova
```

Pošteno pripisivi učinak je 6 postotnih bodova, a ne 15: više od polovice prividnog poboljšanja prije/poslije dogodilo bi se bez obzira na program, potaknuto istim gospodarskim oporavkom koji je podigao usporednu skupinu.

**Regresijski diskontinuitet, prag prihvatljivosti**: shema bespovratnih sredstava dostupna je samo poduzećima s manje od 50 zaposlenika. Usporedba ishoda poduzeća neposredno ispod praga (45–49 zaposlenika, prihvatljiva) s poduzećima neposredno iznad njega (50–54 zaposlenika, neprihvatljiva) daje vjerodostojan kontrafaktual jer su poduzeća s obje strane proizvoljne administrativne granice inače slična: prag, a ne neko temeljno obilježje poduzeća, određuje prihvatljivost. Prosječna razlika ishoda od 2.000 £ između dviju skupina, opažena samo na pragu, može se pripisati bespovratnim sredstvima s mnogo većom pouzdanošću nego jednostavna usporedba svih prihvatljivih naspram svih neprihvatljivih poduzeća (koja se sustavno razlikuju po veličini).

## Veza s programskim inženjerstvom

Kontrafaktualno razmišljanje trebalo bi oblikovati način na koji se dizajniraju sustavi za praćenje učinka i evaluacijski cjevovodi za državni i društveni softver:

- Ugradite bilježenje usporedne skupine u sustav od početka, što znači bilježenje tko je bio prihvatljiv, ali nije upisan, ili uparene skupine nesudionika, umjesto da se to naknadno dodaje nakon što je program već odrađen, a postoje samo podaci prije/poslije.
- Ondje gdje je randomizacija izvediva (postupno uvođenje, digitalna usluga omogućena nekim korisnicima prije drugih), instrumentirajte sustav da nasumičnu dodjelu sačuva kao polje koje se može upitom dohvatiti; postupno uvođenje slučajno uništava vlastitu evaluacijsku vrijednost ako se redoslijed dodjele ne bilježi.
- To je temeljna metoda iza [metoda evaluacije učinka](../metode-evaluacije-učinka/) i ono što je odvaja od [evaluacije učinka naspram evaluacije procesa](../evaluacija-učinka-naspram-evaluacije-procesa/), pri čemu potonja pita je li program isporučen kako je predviđeno, a ne je li uzrokovao učinak.
- [Dodatnost i mrtvi teret](../dodatnost-i-mrtvi-teret/) te [istiskivanje i pripisivanje](../istiskivanje-i-pripisivanje-učinka/) u korijenu su kontrafaktualna pitanja: mrtvi teret je „kakav bi bio ovaj konkretni ishod bez intervencije”, primijenjen na razini korekcije, a ne punog dizajna evaluacije.

## Zamke

- **Tretiranje prije/poslije kao dokaza uzročnosti.** To je najčešća i najposljedičnija pogreška u izvješćivanju o učinku u javnom i društvenom sektoru; promjena prije/poslije miješa učinak programa sa svime ostalim što se promijenilo u istom razdoblju.
- **Korištenje usporedne skupine koja se sustavno razlikuje od tretirane.** Uparena usporedna skupina mora biti doista slična po relevantnim obilježjima (vidi hijerarhiju metoda u Magenta Booku i [kontrafaktualnu analizu](../kontrafaktualna-analiza/)); usporedba sudionika programa (koji su se sami prijavili i često su motiviraniji) s nesudionicima (koji nisu) riskira da se pristranost odabira maskira kao učinak programa.
- **Uništavanje prilika za randomizaciju lošim dizajnom isporuke.** Postupno ili randomizirano uvođenje čuva evaluacijsku vrijednost samo ako je dodjela doista nasumična i zabilježena; prepuštanje lokalnim voditeljima da biraju tko ide prvi poništava svrhu.
- **Precjenjivanje preciznosti iz slabog dizajna.** Procjenu prije/poslije treba predstaviti kao indikativnu, a ne kao izmjerenu veličinu učinka; hijerarhija dokaza u Magenta Booku postoji kako bi snaga tvrdnje odgovarala snazi dizajna koji ju je proizveo.

## Izvori

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020), and its
  supplementary guide on quasi-experimental methods.
  <https://www.gov.uk/government/publications/the-magenta-book>
- Cabinet Office / Behavioural Insights Team, "Test, Learn, Adapt: Developing Public Policy with
  Randomized Controlled Trials" (2012).
- What Works Network, standards of evidence guidance. <https://www.gov.uk/guidance/what-works-network>
- Angrist JD, Pischke J-S. *Mostly Harmless Econometrics: An Empiricist's Companion*. Princeton
  University Press, 2009 (standard reference for difference-in-differences and regression
  discontinuity methods).
