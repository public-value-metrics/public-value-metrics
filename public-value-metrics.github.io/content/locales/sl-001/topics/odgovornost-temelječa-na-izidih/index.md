# Odgovornost, temelječa na izidih (OBA)

Odgovornost, temelječa na izidih (Outcomes-Based Accountability), imenovana tudi odgovornost, temelječa na rezultatih (Results-Based Accountability, RBA), je okvir Marka Friedmana, ki loči dve vprašanji, ki ju poročanje v javnem sektorju običajno meša: »ali gre prebivalstvu dobro?« (odgovornost na ravni prebivalstva) in »ali gre temu določenemu programu dobro?« (odgovornost za uspešnost). Po Friedmanovem mnenju je mešanje obeh najpogostejši razlog, da dobro vodene programe krivijo za populacijske trende, ki jih nikoli niso imeli moči spremeniti.

## Zakaj je pomembno

Friedman je okvir predstavil v knjigi *Trying Hard Is Not Good Enough* (2005) z argumentom, da večina javnega poročanja odločevalce bodisi zaduši s populacijskimi statistikami, ki jih nobena posamezna agencija ne nadzoruje (stopnja najstniških nosečnosti, stopnja brezposelnosti, pričakovana življenjska doba), bodisi z (števili) dejavnosti na ravni programa (obravnavane stranke, opravljene napotitve), ki ne povedo nič o tem, ali se je komu življenje izboljšalo. Prispevek RBA je majhen, discipliniran besednjak, ki ju drži narazen: populacijski rezultati (pogoji blaginje za celotno populacijo, na primer »otroci se rodijo zdravi«) ne pripadajo nobeni posamezni agenciji in zahtevajo, da se več partnerjev premika skupaj; mere uspešnosti (kako dobro določen program streže svojim strankam) pripadajo eni agenciji in jih je treba presojati le glede na to, kar ta agencija dejansko lahko vpliva. Friedmanova »tri vprašanja o uspešnosti« – koliko smo naredili, kako dobro smo to naredili in ali je komu bolje? – so danes vgrajena v pogodbeništvo za človeške storitve v ameriških zveznih državah in okrajih ter prek svetovalnega podjetja in orodja Clear Impact, usklajenega z RBA, široko uporabljena pri naročanju storitev v lokalni upravi v Združenem kraljestvu in državah Commonwealtha. Praktični vložki so pogodbeni: stanovanjskemu programu ne bi smeli odvzeti financiranja, ker je stopnja brezdomstva v mestu zrasla zaradi makroekonomskih vzrokov zunaj njegovega dosega, mu ga pa vsekakor je treba odvzeti, če njegove lastne stranke niso nastanjene.

## Matematika

```
Odgovornost na ravni prebivalstva (»širša slika«, ki jo delijo skupnost, regija ali država):
  Rezultat     — pogoj blaginje (npr. »prebivalci so ekonomsko varni«)
  Kazalnik(i)  — mera tega pogoja (npr. stopnja brezposelnosti, mediani dohodek gospodinjstev)
  → noben posamezni program ni lastnik kazalnika; za premik je potrebnih več prispevajočih

Odgovornost za uspešnost (za kar je odgovoren en program):
  Koliko smo naredili?       — obseg dejavnosti (obravnavane stranke, dostavljene enote)
  Kako dobro smo to naredili? — kakovost/učinkovitost (% dokončanja programa, strošek na stranko)
  Ali je komu bolje?         — izid, ki šteje (% zaposlenih 6 mesecev po programu,
                                pred/po ali v primerjavi s primerjalno skupino)

Program se presoja po tretjem vprašanju o uspešnosti, nikoli neposredno po populacijskem
kazalniku, razen če bi ga njegov obseg in zasnova lahko verjetno sam premaknila.
```

## Praktični primer

**Program podpore zaposlovanju, ki ga financira mesto**, 500 udeležencev/leto, naročen pri lokalni oblasti v okviru uspešnosti v slogu RBA:

```
Populacijski kazalnik (kontekst, ne kazalniška kartica programa):
  Stopnja brezposelnosti v mestu: 6,2 % (navzgor s 5,8 % prejšnje leto, zaradi
  zaprtja tovarne zunaj nadzora programa)

Mere uspešnosti (dejanska odgovornost programa):
  Koliko:      vpisanih 500 udeležencev (cilj 480) — doseženo
  Kako dobro:  78-odstotna stopnja dokončanja; strošek na dokončalca = £340.000 / 390 dokončalcev ≈ £872
  Ali je bolje: od 390 dokončalcev jih je 260 trajno zaposlenih po 6 mesecih = 66,7 %
                v primerjavi s 41 % pri ujemajoči primerjalni skupini (glej counterfactual-analysis)
```

Po populacijski odgovornosti program izgleda neuspešen – stopnja brezposelnosti v mestu je med njegovim delovanjem zrasla. Po RBA-jevi odgovornosti za uspešnost je program uspešen: dosegel je ciljni obseg, kakovost je ohranil stalno in ustvaril izid zaposlitve, ki je 25,7 odstotne točke nad ujemajočo primerjalno skupino, medtem ko se je populacijski kazalnik premaknil zaradi razlogov (zaprtje tovarne), ki so popolnoma zunaj nadzora programa.

## Povezava s programskim inženirstvom

RBA se neposredno preslika na znano razlikovanje SRE: populacijski kazalniki so kot poslovne kazalniške »severnice« (North Star), ki jih nobena posamezna inženirska ekipa ne obvladuje od začetka do konca (prihodki podjetja, tržni delež), mere uspešnosti pa so kot lastni SLO-ji ekipe – stvari, ki jih odločitve zasnove te ekipe dejansko premaknejo. Nadzorna plošča, ki poroča o obojem, ne da bi označila, kaj je kaj, vabi prav tisto napačno pripisovanje, ki ga je RBA zgrajen preprečiti: dežurni inženir je obtožen za metriko, ki jo nadzoruje odvisna ekipa. Pri naročanju ali gradnji orodij za poročanje pri pogodbah o izidih zgradite trojico »koliko / kako dobro / ali je bolje« kot polnovredna, ločeno filtrirna polja, ne kot en pomešan KPI – to je ista disciplina kot ločevanje vodilnih in zaostajajočih kazalnikov pri [KPI v javnem sektorju](../ključni-kazalniki-uspešnosti-v-javnem-sektorju/). RBA je tudi logika odgovornosti pod [plačilom po rezultatih in družbenimi obveznicami vpliva](../plačilo-po-rezultatih-in-družbene-obveznice-vpliva/): pogodba PbR lahko pošteno plačuje le po meri uspešnosti »ali je bolje«, nikoli po populacijskem kazalniku, razen če je poseg res prevladujoči dejavnik zanj.

## Pasti

- **Plačilo ali kaznovanje programa glede na populacijski kazalnik, ki ga ne more nadzorovati**: to je ena sama napaka, ki jo RBA želi preprečiti; vedno preverite, ali je program večji ali manjši prispevajoči k populacijskemu rezultatu, preden nanj navežete posledice.
- **Poročanje »koliko« kot da bi bilo »ali je bolje«**: števila dejavnosti (obravnavane stranke) so najlažji podatek za zbiranje in najmanj informativni; vztrajajte, da se na vprašanje »ali je komu bolje« odgovori z resničnimi podatki o izidih, po možnosti glede na kontrafaktični scenarij (glej [analiza kontrafaktičnega scenarija](../kontrafaktična-analiza/)).
- **Obravnava kazalnikov RBA kot večno stalnih**: Friedmanova metoda je izrecno iterativna – cikel »podatki, zgodba, kaj deluje, akcijski načrt« – ne enkratna vaja oblikovanja kazalniške kartice.
- **Brez primerjalne skupine za »ali je bolje«**: sprememba pred/po brez kontrafaktičnega scenarija zamenjuje učinek programa s trendom, ki bi ga populacija vseeno pokazala.

## Viri

- Mark Friedman, *Trying Hard Is Not Good Enough: How to Produce Measurable Improvements for
  Customers and Communities*, Trafford Publishing, 2005.
- Clear Impact, "What is Results-Based Accountability?"
  <https://clearimpact.com/results-based-accountability/>
