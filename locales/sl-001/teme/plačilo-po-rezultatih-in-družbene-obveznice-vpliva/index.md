# Plačilo po rezultatih in družbene obveznice vpliva (PbR/SIB)

Plačilo po rezultatih (payment by results, PbR) izvajalcu plača glede na preverjene dosežene izide, ne glede na opravljene dejavnosti. Družbena obveznica vpliva (social impact bond, SIB) je specifična finančna struktura PbR, v kateri zasebni ali filantropski vlagatelji vnaprej financirajo izvajanje storitev, državni naročnik pa jim povrne – z donosom – le, če neodvisno merjeni izidi dosežejo dogovorjene pragove, s čimer se tveganje izvedbe z davkoplačevalca prenese na vlagatelja.

## Zakaj je pomembno

Prva SIB na svetu je bila začeta v zaporu HMP Peterborough septembra 2010: Social Finance je zbral £5 milijonov od 17 vlagateljev za financiranje »One Service«, ki je delal z zaporniki s kratkimi kaznimi (do 12 mesecev), da bi zmanjšal povratništvo, pri čemer sta se ministrstvo za pravosodje (Ministry of Justice) in Big Lottery Fund dogovorila, da bosta vlagateljem povrnila le, če se bo število ponovnih obsodb zmanjšalo za vsaj 7,5 % v primerjavi z ujemajočo nacionalno primerjalno kohorto. Zadnja kohorta pilota v Peterboroughu je zabeležila 9,7-odstotno zmanjšanje ponovnih obsodb, udobno nad pragom, in vlagatelji so bili povrnjeni z donosom. Mehanizem je bil pomemben, ker je rešil specifičen problem naročanja: država je želela plačevati za izide in ne za vložke, vendar ni mogla prevzeti finančnega tveganja posega, ki morda ne bo deloval, zato je struktura SIB to tveganje prenesla na vlagatelje, pripravljene ga prevzeti. Government Outcomes Lab (GO Lab) na Blavatnik School of Government v Oxfordu danes vzdržuje najpopolnejšo javno bazo dokazov o uspešnosti PbR in SIB po svetu, spremlja precej več kot 200 obveznic vpliva po vsem svetu in objavlja raziskave o tem, katere oblikovne značilnosti so povezane z uspehom ali neuspehom. Lekcija, h kateri se baza dokazov nenehno vrača, je, da *izbrana metrika izida* in to, kdo nosi tveganje, da je ne doseže, določa skoraj vse drugo o tem, kako se pogodba PbR v praksi dejansko obnaša.

## Matematika

```
Plačilo PbR = osnovno plačilo (če obstaja) + Σ (dosežen izid × cena enote na izid)

Donos vlagatelja v družbeno obveznico vpliva:
  Vložek vlagatelja = vnaprejšnji kapital za financiranje izvajanja storitev
  Plačilo za izid   = naročnik plača le, če je izid ≥ prag, sorazmerno s tem,
                       koliko nad pragom pristane uspešnost
  Donos vlagatelja  = prejeta plačila za izide − vložek vlagatelja
                       (stopnja donosa, pogosto omejena, ki odraža prevzeto tveganje)

Ključni parametri zasnove, ki določajo obnašanje celotne pogodbe:
  Metrika izida         — mora biti izid, ne izložek (glej outcomes-vs-outputs)
  Primerjava/kontrafaktični scenarij — običajno ujemajoča kohorta (glej counterfactual-analysis)
  Prag plačila          — minimalno izboljšanje, preden se sproži kakršno koli plačilo
  Krivulja plačila      — linearna, stopničasta ali omejena nad pragom
  Popust za pripisovanje/mrtvo težo — glej additionality-and-deadweight
```

## Praktični primer

**Peterborough One Service** (ilustrativne številke iz objavljenih vrednotenj):

```
Zbrani kapital vlagateljev:      £5.000.000
Kohorta:                         ~3.000 moških zapornikov s kratkimi kaznimi v dveh kohortah
Prag:                            ≥ 7,5 % zmanjšanje ponovnih obsodb v primerjavi z ujemajočo
                                  nacionalno primerjalno skupino, sicer brez plačila
Rezultat kohorte 1:              8,4 % zmanjšanje — pod pogodbeno mejo za to
                                  kohorto samo po prvotnih pravilih
Skupni/končni rezultat kohorte:  9,7 % zmanjšanje — nad pragom
Plačilo za izid:                 država (Ministry of Justice / Big Lottery Fund)
                                  plača za vsako odstotno točko nad pragom in tako financira
                                  povračilo vlagateljem z donosom
```

**Pogodba PbR lokalne oblasti (ilustrativno)**: storitev družinskega posredovanja je naročena po £4.000 na napoteno družino (plačilo za dejavnost) plus £6.000 na družino brez nadaljnje napotitve zaradi zaščite otrok 12 mesecev po zaprtju (plačilo za izid). Napotenih je 200 družin, zaprtih 150 primerov, 96 jih ostane brez napotitev po 12 mesecih:

```
Plačilo za dejavnost = 200 × £4.000 = £800.000
Plačilo za izid      = 96 × £6.000  = £576.000
Skupni strošek pogodbe = £1.376.000 za 96 potrjenih trajnih izidov
Strošek na potrjen izid ≈ £14.333 (glej cost-per-outcome)
```

## Povezava s programskim inženirstvom

Plačilo po rezultatih je najprej problem usklajevanja spodbud in šele nato podatkovni problem, podatkovni sistem pa je mesto, kjer se to usklajevanje ohrani ali zlomi. Neodvisno, pred ponarejanjem zaščiteno preverjanje izidov je bistvo igre: naročnik in izvajalec imata nasprotni spodbudi glede tega, kako se dvoumen primer kodira, zato sistem, ki beleži izide, potrebuje revizijsko sled, sporazum o izmenjavi podatkov z neodvisnim preveriteljem (pogosto drugim organom kot izvajalec, včasih organom uradne statistike, ki primerja s policijskimi ali socialnimi evidencami) in nespremenljivo verzioniranje opredelitve izida – PbR-ov ekvivalent pasti »predefiniranja metrike« pri [KPI v javnem sektorju](../ključni-kazalniki-uspešnosti-v-javnem-sektorju/). Izračuni pripisovanja so odvisni od metod ujemajoče se kohorte iz [analize kontrafaktičnega scenarija](../kontrafaktična-analiza/), ki potrebujejo ponovljivo, revidirljivo kodo, ne enkratne preglednice. In sama metrika mora biti pravi izid, ne nadomestna dejavnost – glej [izidi in izložki](../izidi-in-izložki/) – ker pogodba PbR, ki plačuje izložek, le preimenuje običajno financiranje z dodatnimi transakcijskimi stroški. Kjer se družbeni donos SIB modelira vnaprej, tako vrednotenje običajno neposredno prevzame metodologijo [družbenega donosa naložbe](../družbeni-donos-naložbe/).

## Pasti

- **Plačilo za lahko izigran nadomestni izid**: »udeležba na srečanjih« je dejavnost, oblečena v izid; vztrajajte pri meri, ki odraža dejansko iskano spremembo (povratništvo, zaposlitev, stanovanjska stabilnost).
- **Brez verodostojnega kontrafaktičnega scenarija**: brez ujemajoče primerjalne skupine je izboljšanje lahko regresija k povprečju ali širši trend, ne učinek programa – glej [analiza kontrafaktičnega scenarija](../kontrafaktična-analiza/) in [dodatnost in mrtva teža](../dodatnost-in-mrtva-teža/).
- **Podcenjevanje transakcijskih stroškov in stroškov vrednotenja**: neodvisno preverjanje, povezovanje podatkov in administracija pogodbe pri shemah PbR/SIB običajno dosežejo dvomestne odstotke vrednosti pogodbe – baza dokazov GO Lab to dokumentira kot ponavljajoč se razlog za opustitev shem.
- **Izbiranje ali »parkiranje«**: izvajalci, plačani po izidu, imajo neposredno spodbudo, da dajo prednost strankam, ki bodo verjetno uspele tako ali tako, in zanemarijo najtežje primere – zasnujte stopnje plačil ali prilagoditev za sestavo primerov, da se to prepreči.

## Viri

- Government Outcomes Lab, University of Oxford, Blavatnik School of Government.
  <https://golab.bsg.ox.ac.uk/>
- Social Finance, "Peterborough Social Impact Bond" evaluation summaries.
  <https://golab.bsg.ox.ac.uk/case-studies/peterborough-social-impact-bond/>
- Ministry of Justice, "Peterborough Social Impact Bond HMP Doncaster: Final Reconviction Results
  for the Peterborough Social Impact Bond."
