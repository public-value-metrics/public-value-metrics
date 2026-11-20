# Međugeneracijska pravednost i diskontiranje radi održivosti

Diskontiranje budućih troškova i koristi na sadašnju vrijednost standardna je praksa u javnoj procjeni (vidi [društvenu diskontnu stopu](../društvena-diskontna-stopa/)), ali svaka pozitivna diskontna stopa, složena tijekom desetljeća ili stoljeća, daleku budućnost u današnjim terminima smanjuje prema nuli. Za odluke s posljedicama stoljeće ili više unaprijed (klimatske promjene, nuklearni otpad, gubitak bioraznolikosti, održivost mirovina) ta matematička činjenica postaje etička: standardno diskontiranje može učiniti da katastrofalna šteta budućim generacijama u terminima sadašnje vrijednosti jedva vrijedi izbjegavanja.

## Zašto je važno

Ramseyjeva jednadžba, koju je izveo Frank Ramsey 1928., rastavlja diskontnu stopu na dvije komponente: čistu vremensku preferenciju (δ, koliko jednostavno više volimo sada nego kasnije, neovisno o bogatstvu) i učinak rasta bogatstva (η×g, koliko diskontiramo jer se očekuje da će buduće generacije biti bogatije, pa im dodatna funta znači manje). Standardna dugoročna diskontna stopa britanskog Green Booka izgrađena je na toj jednadžbi i slijedi *opadajući* raspored, a ne fiksnu stopu: dizajn ukorijenjen u radu Martina Weitzmana o „gama diskontiranju”, koji pokazuje da kada je sama buduća diskontna stopa nesigurna, ekvivalent sigurnosti stope koju treba primijeniti matematički opada s vremenom, jer scenariji s niskom stopom dominiraju što se dalje gleda. Stern Review o ekonomiji klimatskih promjena (2006.), koji je vodio Sir Nicholas Stern, odveo je etičku raspravu dalje: Stern je tvrdio da čistu vremensku preferenciju treba postaviti blizu nule (koristio je δ ≈ 0,1 %, odražavajući samo malu vjerojatnost katastrofe koja okončava civilizaciju, a ne stvarnu sklonost sadašnjosti nad budućnošću), što daje daleko nižu učinkovitu diskontnu stopu od uobičajene prakse Green Booka i, sukladno tome, daleko snažniji današnji argument za klimatsko djelovanje. Kritičari (osobito William Nordhaus) tvrdili su da je Sternova stopa blizu nule etički obranjiva, ali nespojiva sa stvarno opaženim ponašanjem pri štednji i ulaganju. Neslaganje nije tehnička fusnota: to je najveći pojedinačni razlog zašto dva jednako stroga ekonomista mogu doći do vrlo različitih zaključaka o tome koliko se sadašnja generacija treba žrtvovati za budućnost, i razlog zašto softver koji podržava procjenu dugoročnih javnih ulaganja mora izložiti svoje pretpostavke o diskontiranju, a ne zakopati ih u zadanu vrijednost proračunske tablice.

## Matematika

```
Ramsey equation:   r = δ + η × g

  r = social discount rate
  δ = pure time preference (rate of impatience, independent of wealth)
  η = elasticity of marginal utility of consumption (diminishing value of
      extra consumption as people get richer)
  g = expected growth rate of per-capita consumption

Green Book declining long-term schedule (approximate, current published bands):
  Years 0–30:    3,5%
  Years 31–75:   3,0%
  Years 76–125:  2,5%
  Years 126–200: 2,0%
  Years 201–300: 1,5%
  Years 301+:    1,0%

Stern Review parameters: δ ≈ 0,1%, η = 1, g ≈ 1,3%  → r ≈ 1,4%
```

## Primjer iz prakse

**Današnja vrijednost £1 izbjegnute štete za 100 godina**, prema tri režima diskontiranja:

```
Flat Green Book short-term rate (3,5%, held constant for 100 years):
  PV = 1 / (1,035)^100 ≈ 1 / 31,19 ≈ £0,032   (3,2 penija)

Green Book declining schedule (3,5% for yrs 1–30, 3,0% for yrs 31–75,
2,5% for yrs 76–100):
  factor(1–30)  = 1,035^30  ≈ 2,807
  factor(31–75) = 1,03^45   ≈ 3,782
  factor(76–100)= 1,025^25  ≈ 1,854
  total factor ≈ 2,807 × 3,782 × 1,854 ≈ 19,68
  PV = 1 / 19,68 ≈ £0,051   (5,1 penija)

Stern-style near-zero pure time preference (r ≈ 1,4% flat):
  PV = 1 / (1,014)^100 ≈ 1 / 3,997 ≈ £0,250   (25,0 penija)
```

Isti £1 izbjegnute štete stoljeće unaprijed danas vrijedi 3,2p, 5,1p ili 25p, ovisno isključivo o tome koja se konvencija diskontiranja koristi: raspon gotovo osam puta, koji određuje hoće li projekt ublažavanja klimatskih promjena s visokim početnim troškom i isplatom stoljeće kasnije uopće prijeći pozitivnu NPV letvicu. To je mehanizam iza središnjeg upozorenja ove teme: pri svakoj smisleno pozitivnoj fiksnoj stopi dovoljno daleka buduća šteta aritmetički se briše iz procjene, bez obzira na njezinu stvarnu težinu.

## Veza s programskim inženjerstvom

- Svaki alat za dugoročnu procjenu ili poslovni slučaj (infrastruktura, prilagodba klimi, modeliranje mirovina) treba implementirati *opadajući* raspored Green Booka, a ne jednu fiksnu stopu: zadana fiksna stopa tiho ugrađuje daleko jaču pristranost protiv budućnosti nego što propisuju trenutačne smjernice britanske vlade.
- Diskontnu stopu i horizont uvijek treba izložiti kao vidljive, provjerljive parametre u softveru za procjenu, uz izričit prikaz osjetljivosti izračuna na njih (kao u gornjem riješenom primjeru): zakopavanje stope u konfiguracijsku datoteku poziva upravo na „skriveni etički izbor” na koji upozorava rasprava Stern-Nordhaus; to se uparuje s točkom o transparentnosti iz [računovodstva prirodnog kapitala](../računovodstvo-prirodnog-kapitala/) i općenito je u osnovi teme [društvena diskontna stopa](../društvena-diskontna-stopa/).
- Gdje su koristi programa izričito međugeneracijske (zaštita od poplava, obnova prirodnog kapitala, dugoročna digitalna infrastruktura), [društvena analiza troškova i koristi](../društvena-analiza-troškova-i-koristi/) treba izvještavati rezultate prema barem dvije pretpostavke diskontiranja (standard Green Booka i slučaj osjetljivosti s niskom stopom), a ne jednu točkastu procjenu, tako da donositelji odluka vide kako sam izbor diskontne stope pomiče odgovor.

## Zamke

- **Prikazivanje jedne diskontirane NPV bez raspona osjetljivosti**: s obzirom na to koliko sama diskontna stopa mijenja odgovor za dugoročne projekte, NPV s jednom stopom bitno precjenjuje preciznost; uvijek prikažite raspon koji obuhvaća barem standard Green Booka i scenarij s niskom stopom.
- **Primjena kratkoročne fiksne stope (3,5 %) na procjenu kroz više stoljeća**: sam Green Book propisuje opadajući raspored upravo zato što je fiksna stopa ocijenjena neprimjerenom nakon otprilike 30 godina; njezino ipak korištenje podcjenjuje dugoročne troškove.
- **Tretiranje δ (čiste vremenske preferencije) kao čisto tehničkog parametra**: Sternova vrijednost blizu nule i viša implicitna vrijednost Green Booka obranjive su samo kao etički stavovi o tome koliko težine sadašnjost duguje budućnosti, a ne kao empirijski „točni” ili „netočni” brojevi; softver treba učiniti pretpostavku vidljivom, a ne prikazivati jednu brojku kao objektivno ispravnu.

## Izvori

- Stern N. "The Economics of Climate Change: The Stern Review." Cambridge University Press, 2006.
- Ramsey FP. "A Mathematical Theory of Saving." The Economic Journal, 1928.
- Weitzman ML. "Gamma Discounting." American Economic Review, 2001.
- HM Treasury. "The Green Book: Central Government Guidance on Appraisal and Evaluation" (Annex 6,
  discount rate schedule).
- Nordhaus WD. "A Review of the Stern Review on the Economics of Climate Change." Journal of
  Economic Literature, 2007.
