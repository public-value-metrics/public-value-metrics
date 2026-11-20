# Kontrafaktična analiza

Kontrafaktični scenarij je ocena tega, kaj bi se zgodilo brez intervencije. Brez njega opažene spremembe po zagonu programa ni mogoče ločiti od spremembe, ki bi se zgodila tako ali tako: brez kontrafaktičnega scenarija ni dokazov o učinku, ne glede na to, kako prepričljive so številke pred in po. Magenta Book britanskega finančnega ministrstva (HM Treasury) obravnava gradnjo verodostojnega kontrafaktičnega scenarija kot osrednjo metodološko nalogo vrednotenja vpliva, pomembnejšo od vsake druge posamezne oblikovalske odločitve.

## Zakaj je pomembno

»Kriminal je upadel za 15 % v letu po uvedbi programa« ni dokaz, da je program deloval, razen če vemo, kaj bi se zgodilo s kriminalom brez njega. Kriminal bi lahko upadel za 20 % tako ali tako zaradi nepovezanih gospodarskih ali demografskih trendov, kar bi pomenilo, da je program v primerjavi s kontrafaktičnim scenarijem stanje dejansko poslabšal, čeprav se je surova številka izboljšala. To je najpogostejša analitična napaka pri trditvah o vplivu v javnem in socialnem sektorju: zamenjava primerjave pred in po z dokazom vzročnosti. Magenta Book je izrecna, da vrednotenje vpliva obstaja zato, da odgovori na kontrafaktično vprašanje, »kakšno razliko je naredila ta intervencija?«, in da odgovor zahteva oceno, ne le opis sveta, ki se ni zgodil.

Različne metode gradijo kontrafaktični scenarij z različno stopnjo zaupanja, smernice za vrednotenje v upravi pa jih ustrezno razvrščajo. Randomizirana kontrolirana preskušanja (RCT), kjer so posamezniki ali območja naključno dodeljeni prejemu intervencije ali ne, dajejo najmočnejši kontrafaktični scenarij, ker randomizacija zagotavlja, da se tretirana in kontrolna skupina v povprečju razlikujeta samo po prejemu intervencije. Cabinet Office in What Works Network spodbujata RCT v britanski javni politiki od poročila »Test, Learn, Adapt« ekipe Behavioural Insights Team iz leta 2012 prav zato, ker so šibkejše zasnove dovzetne za zmedene dejavnike: opažena razlika lahko odraža to, kdo se je odločil sodelovati, ne učinka programa. Kjer je randomizacija nepraktična ali neetična (kar pogosto velja za programe z zakonsko pravico ali spremembe politike za celotno populacijo), Magenta Book določa izrecno hierarhijo šibkejših, a še vedno uporabnih alternativ: usklajene primerjalne skupine, zasnove razlike razlik, regresijska diskontinuiteta okoli pragov upravičenosti in kot skrajna možnost preprosta primerjava pred in po, jasno označena kot najšibkejša oblika dokazov, nagnjena k mešanju učinka programa z učinkom vsega drugega, kar se je spremenilo ob istem času.

## Matematika

Kontrafaktični okvir, uporaben pri vseh metodah:

```
Ocenjeni vpliv = Izid(z intervencijo) − Izid(kontrafaktični scenarij: brez intervencije)

NE:
Ocenjeni vpliv ≠ Izid(po) − Izid(pred)   [meša čas z intervencijo]
```

Razlika razlik, ena najpogostejših kvazieksperimentalnih zasnov pri vrednotenju v upravi, izolira učinek intervencije z odštevanjem lastne spremembe pred in po pri primerjalni skupini:

```
Ocena DiD = [Izid(tretirani, po) − Izid(tretirani, pred)]
          − [Izid(primerjalni, po) − Izid(primerjalni, pred)]
```

To odstrani vsak trend, skupen obema skupinama (npr. nacionalni gospodarski premik, ki vpliva na vse), in pusti samo diferencialno spremembo, ki jo je mogoče pripisati intervenciji.

## Praktični primer

**Program zaposlovanja, pred/po (šibka zasnova)**: shema podpore pri iskanju dela poroča, da je zaposlenost udeležencev v letu porasla s 40 % na 55 %, kar vodi naivni sklep »+15 odstotnih točk zaradi programa«.

**Isti program, razlika razlik (močnejša zasnova)**: usklajena primerjalna skupina podobnih neudeležencev iz istega lokalnega trga dela kaže, da je zaposlenost v istem letu porasla s 38 % na 47 % (v teku je bilo nacionalno gospodarsko okrevanje).

```
Sprememba tretirane skupine:      55 % − 40 % = +15 odstotnih točk
Sprememba primerjalne skupine:    47 % − 38 % = +9 odstotnih točk

Ocena DiD (pravi učinek programa) = 15 − 9 = +6 odstotnih točk
```

Pošteno pripisljiv učinek je 6 odstotnih točk, ne 15: več kot polovica navidezne izboljšave pred/po bi se zgodila ne glede na program, poganjana z istim gospodarskim okrevanjem, ki je dvignilo primerjalno skupino.

**Regresijska diskontinuiteta, prag upravičenosti**: shema nepovratnih sredstev je na voljo samo podjetjem z manj kot 50 zaposlenimi. Primerjava izidov podjetij tik pod pragom (45–49 zaposlenih, upravičena) s podjetji tik nad njim (50–54 zaposlenih, neupravičena) daje verodostojen kontrafaktični scenarij, ker so si podjetja na obeh straneh poljubne upravne meje sicer podobna: upravičenost določa prag, ne kakšna osnovna lastnost podjetja. Povprečno razliko izidov med skupinama v višini 2.000 £, opaženo samo pri pragu, je mogoče pripisati nepovratnim sredstvom z veliko večjo zanesljivostjo kot preprosto primerjavo vseh upravičenih in vseh neupravičenih podjetij (ki se sistematično razlikujejo po velikosti).

## Povezava s programskim inženirstvom

Kontrafaktično razmišljanje naj oblikuje zasnovo sistemov za sledenje vplivu in cevovodov vrednotenja za programsko opremo v upravi in socialnem sektorju:

- Zajem primerjalne skupine vgradite v sistem od začetka (beleženje, kdo je bil upravičen, a ni bil vpisan, ali usklajena kohorta neudeležencev), namesto da ga dodajate naknadno, ko je program že tekel in obstajajo samo podatki pred/po.
- Kjer je randomizacija izvedljiva (postopna uvedba, digitalna storitev, omogočena nekaterim uporabnikom pred drugimi), sistem instrumentirajte tako, da ohrani naključno dodelitev kot polje, po katerem je mogoče poizvedovati; postopna uvedba po nesreči uniči lastno vrednost za vrednotenje, če vrstni red dodelitve ni zabeležen.
- To je temeljna metoda za [metode vrednotenja vpliva](../metode-vrednotenja-učinkov/) in tisto, kar jo ločuje od [vrednotenja vpliva proti vrednotenju procesa](../vrednotenje-učinkov-in-vrednotenje-procesa/), pri čemer se slednje sprašuje, ali je bil program izveden, kot je bilo predvideno, ne pa, ali je povzročil učinek.
- [Dodatnost in mrtva teža](../dodatnost-in-mrtva-teža/) ter [izpodrivanje in pripisovanje](../izpodrinjenje-in-pripisovanje-učinka/) sta v osnovi obe kontrafaktični vprašanji: mrtva teža je »kakšen bi bil ta posamezni izid brez intervencije«, uporabljena na ravni popravka in ne popolne zasnove vrednotenja.

## Pasti

- **Obravnavanje pred/po kot dokaza vzročnosti.** To je najpogostejša in najpomembnejša napaka pri poročanju o vplivu v javnem in socialnem sektorju; sprememba pred/po meša učinek programa z vsem drugim, kar se je spremenilo v istem obdobju.
- **Uporaba primerjalne skupine, ki se sistematično razlikuje od tretirane.** Usklajena primerjalna skupina mora biti resnično podobna po ustreznih lastnostih (glej hierarhijo metod [kontrafaktične analize](../kontrafaktična-analiza/) v Magenta Book); primerjava udeležencev programa (ki so se vpisali sami in so pogosto bolj motivirani) z neudeleženci (ki se niso) tvega pristranskost izbire, ki se maskira kot učinek programa.
- **Uničenje priložnosti za randomizacijo s slabo zasnovo izvedbe.** Postopna ali randomizirana uvedba ohrani svojo vrednost za vrednotenje le, če je dodelitev resnično naključna in zabeležena; če lokalni vodje izberejo, kdo gre prvi, je smisel izgubljen.
- **Preveč zatrjevana natančnost iz šibke zasnove.** Oceno pred/po je treba predstaviti kot okvirno, ne kot izmerjeno velikost učinka; hierarhija dokazov Magenta Book obstaja zato, da moč trditve ustreza moči zasnove, ki jo je ustvarila.

## Viri

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020), and its
  supplementary guide on quasi-experimental methods.
  <https://www.gov.uk/government/publications/the-magenta-book>
- Cabinet Office / Behavioural Insights Team, "Test, Learn, Adapt: Developing Public Policy with
  Randomized Controlled Trials" (2012).
- What Works Network, standards of evidence guidance. <https://www.gov.uk/guidance/what-works-network>
- Angrist JD, Pischke J-S. *Mostly Harmless Econometrics: An Empiricist's Companion*. Princeton
  University Press, 2009 (standardni vir za metode razlike razlik in regresijske diskontinuitete).
