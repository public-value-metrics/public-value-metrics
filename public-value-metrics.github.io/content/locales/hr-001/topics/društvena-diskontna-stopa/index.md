# Društvena diskontna stopa

Društvena diskontna stopa pretvara buduće troškove i koristi u današnje vrijednosti kako bi se programi s učincima raspoređenima kroz desetljeća mogli uspoređivati na zajedničkoj osnovi. Green Book Ministarstva financija (HM Treasury) propisuje opadajući raspored usidren na 3,5 % za prvih 30 godina, a temelji se na Ramseyjevoj formuli: konkretan broj koji se može citirati i koji je postao živa politička i etička rasprava kad god se primjenjuje na dugoročne obveze poput klimatske politike ili infrastrukture.

## Zašto je važno

Funta koristi primljena za 30 godina ne vrijedi koliko funta koristi primljena danas, dijelom zbog čiste vremenske preferencije (ljudi i društva radije imaju dobre stvari prije), a dijelom zbog rasta (od budućeg se društva očekuje da će biti bogatije, pa mu je funta na margini manje važna). Annex 6 Green Booka izvodi standardnu britansku diskontnu stopu iz Ramseyjeve formule, kombinirajući stopu čiste vremenske preferencije s očekivanom stopom rasta potrošnje i elastičnošću granične korisnosti potrošnje, što daje objavljenu stopu od 3,5 % godišnje za godine 0 do 30, koja opada prema objavljenom rasporedu za godine od 31. nadalje (do 1 % za godine 301+). Taj raspored postoji upravo zato što bi stalnih 3,5 % složeno kroz stoljeće učinilo gotovo svaku dugoročnu korist (obranu od poplava koja spašava živote za 80 godina, smanjenje ugljika koje izbjegava štetu za 100 godina) zanemarivom u smislu sadašnje vrijednosti, što je Ministarstvo financija ocijenilo neuvjerljivim etičkim zaključkom za doista dugovječne infrastrukturne i okolišne odluke.

Diskontna stopa je osporena upravo zato što izbor nije neutralan tehnički parametar: ona kodira prosudbu o tome koliko bi se društvo trebalo odreći danas za ljude koji još nisu rođeni. Stern Review o ekonomiji klimatskih promjena (2006.) rabio je diskontnu stopu blizu nule (čista vremenska preferencija oko 0,1 %), tvrdeći da je diskontiranje dobrobiti budućih naraštaja po stopama nalik tržišnima etički neobranjivo kad je šteta (katastrofalna klimatska promjena) nepovratna. Kritičari, osobito William Nordhaus, tvrdili su da Sternova gotovo nulta stopa precjenjuje argument za hitnu potrošnju na klimu jer gotovo svaki današnji trošak čini opravdanim naspram jedva diskontirane buduće koristi. Neslaganje nije bilo oko matematike, nego oko toga čiji etički okvir treba određivati stopu, i ostaje standardni prikaz zašto je diskontna stopa političan izbor, a ne samo aktuarski ulazni podatak.

## Matematika

Ramseyjeva formula na kojoj počiva stopa Green Booka:

```
r = ρ + η·g

pri čemu je:
  r = društvena diskontna stopa
  ρ = stopa čiste vremenske preferencije (nestrpljenje + rizik katastrofe)
  η = elastičnost granične korisnosti potrošnje
  g = očekivana godišnja stopa rasta potrošnje po stanovniku
```

Opadajući raspored Green Booka (Annex 6, ilustrativno; točnu objavljenu tablicu provjerite u važećem izdanju):

```
Godine 0–30:    3,5 %
Godine 31–75:   3,0 %
Godine 76–125:  2,5 %
Godine 126–200: 2,0 %
Godine 201–300: 1,5 %
Godine 301+:    1,0 %
```

Sadašnja vrijednost buduće svote:

```
PV = FV / (1 + r)^t
```

## Primjer iz prakse

**Obrana od poplava**: projekt donosi 10 milijuna £ izbjegnute štete od poplave u 40. godini.

Uz fiksnu stopu od 3,5 %: PV = 10.000.000 / (1,035)^40 ≈ 2,52 milijuna £; korist izgleda mala.

Uz opadajući raspored Green Booka (3,5 % za godine 0 do 30, zatim 3,0 %), izračun se složeno kamati po 3,5 % prvih 30 godina i po 3,0 % u godinama 31 do 40:

```
PV = 10.000.000 / [(1,035)^30 × (1,03)^10]
   = 10.000.000 / [2,807 × 1,344]
   ≈ 10.000.000 / 3,773
   ≈ 2,65 milijuna £
```

Opadajući raspored umjereno povećava sadašnju vrijednost dugoročnih koristi u usporedbi s fiksnom visokom stopom, što je izričita svrha rasporeda, jer bi fiksnih 3,5 % kroz stoljeće diskontiralo korist od 100 milijuna £ u 100. godini na manje od 3,3 milijuna £.

**Digitalna infrastruktura**: migracija državnog oblaka koja sada košta 4 milijuna £ trebala bi izbjeći 500.000 £ godišnje troškova održavanja zastarjelih sustava tijekom 15 godina. Uz 3,5 %, sadašnja vrijednost tog anuiteta iznosi otprilike 500.000 £ × 11,52 (15-godišnji anuitetni faktor uz 3,5 %) ≈ 5,76 milijuna £, što uvjerljivo premašuje trošak od 4 milijuna £: slučaj pozitivne neto sadašnje vrijednosti koji bi izgledao znatno slabije uz naivno odabranu višu stopu (uz 7 % isti anuitetni faktor pada na oko 9,11, što daje 4,56 milijuna £, i dalje pozitivno, ali s mnogo tanjom maržom).

## Veza s programskim inženjerstvom

Većina poslovnih slučajeva za softver traje 3 do 5 godina, što je daleko unutar pojasa fiksnih 3,5 %, pa opadajući raspored rijetko izravno djeluje, ali temeljna disciplina važna je za svako državno tehnološko ulaganje s dugim vijekom imovine (nacionalna platforma, program podatkovne infrastrukture, višedesetljetni ugovor):

- Rabite objavljenu stopu Green Booka, a ne unutarnju „granicu isplativosti” posuđenu iz privatnih financija; revizori i recenzenti Ministarstva financija očekivat će standardni raspored.
- Za koristi koje se ostvaruju mnogo godina kasnije (dugoročne uštede održavanja platforme, rastuća vrijednost ekosustava otvorenih podataka, vidi [vrijednost otvorenih podataka](../vrijednost-otvorenih-podataka/)), izbor diskontiranja može preokrenuti poslovni slučaj iz pozitivnog u negativan; stopu i horizont učinite izričitim pretpostavkama, a ne zakopanim zadanim vrijednostima.
- To se izravno veže na [procjenu prema Green Booku](../procjena-prema-green-booku/), model pet slučajeva koji formalno traži diskontirani novčani tok, i na [vrednovanje dobrobiti](../vrednovanje-dobrobiti/), gdje se isto pitanje diskontiranja javlja za nenovčane koristi dobrobiti.
- Vidi i [međugeneracijsku pravednost i diskontiranje za održivost](../međugeneracijska-pravednost-i-diskontiranje-radi-održivosti/) za raspravu Stern naspram Nordhausa primijenjenu posebno na ulaganja u okolišnu i klimatsku tehnologiju.

## Zamke

- **Rabljenje fiksne stope za vrlo duge horizonte.** Opadajući raspored Green Booka postoji upravo zato što stalna stopa podcjenjuje doista dugovječne koristi; provjerite koji pojas vrijedi umjesto da svugdje zadano primijenite 3,5 %.
- **Tretiranje diskontne stope kao etički neutralne.** Spor Stern–Nordhaus pokazuje da stopa kodira vrijednosnu prosudbu o budućim naraštajima; njezina promjena mijenja koji programi izgledaju opravdano, pa je treba navesti i braniti, a ne skrivati u zadanoj vrijednosti proračunske tablice.
- **Brkanje društvene diskontne stope s privatnim troškom kapitala.** Troškovi državnog zaduživanja i granice isplativosti privatnog sektora drukčiji su pojmovi od društvene stope izvedene iz Ramseyja, a zamjena jednog drugim u javnoj procjeni obično iskrivljuje rezultat u smjeru favoriziranja kratkoročnih povrata.
- **Nedosljedno diskontiranje realnih i nominalnih novčanih tokova.** Stopa Green Booka realna je stopa (prilagođena inflaciji); diskontiranje nominalnih novčanih tokova njome znatno podcjenjuje sadašnje vrijednosti.

## Izvori

- HM Treasury, "The Green Book: Central Government Guidance on Appraisal and Evaluation", Annex 6
  (2022). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- Stern N. "The Economics of Climate Change: The Stern Review." HM Treasury, 2006.
- Nordhaus WD. "A Review of the Stern Review on the Economics of Climate Change." Journal of
  Economic Literature, 2007;45(3):686–702.
- Ramsey FP. "A Mathematical Theory of Saving." Economic Journal, 1928;38(152):543–559.
