# Kazalniška kartica javne vrednosti

Kazalniška kartica javne vrednosti prilagaja uravnoteženo kazalniško kartico (balanced scorecard) Roberta Kaplana in Davida Nortona iz leta 1992 – zgrajeno za podjetja, ki optimizirajo dobiček v finančni, odjemalski, notranjeprocesni in učni ter razvojni perspektivi – organizacijam, katerih rezultat ni marža, ampak poslanstvo. Javni organ prisili, da poroča o uspešnosti hkrati po več nezvedljivih razsežnostih, namesto da bi vse strnil v eno številko, ki skrije kompromise.

## Zakaj je pomembno

Prvotni argument Kaplana in Nortona v reviji Harvard Business Review je bil, da je ena sama finančna metrika zaostajajoči kazalnik, ki ne pove nič o tem, *zakaj* se bo uspešnost spremenila v naslednjem četrtletju. V zasebnem sektorju je bila rešitev štiri povezane perspektive. V državni upravi enakovredno strukturo daje »strateški trikotnik« Marka Moora (iz *Creating Public Value*, 1995): storitev mora hkrati dostaviti **javno vrednost** (izid poslanstva), ohranjati **legitimnost in podporo** (politično in javno zaledje) ter biti **operativno izvedljiva** (dostavljiva z viri in zmogljivostjo, ki so dejansko na voljo). *Balanced Scorecard: Step-by-Step for Government and Nonprofit Agencies* (2003) Paula Nivena je praktični priročnik za prevod štirih okvirjev Kaplana in Nortona v ta trikotnik – običajno z novim poimenovanjem »finančno« v »skrbništvo nad viri«, s postavitvijo »poslanstva« na vrh namesto »vrednosti za delničarje« na dno in z obravnavo perspektiv odjemalcev in deležnikov kot enakovrednih, ne podrejenih dobičku. Razlog, da je to pomembno za izvedbeno ekipo, je, da bo javna digitalna storitev, presojana samo po finančni metriki ali metriki učinkovitosti (denimo strošku na transakcijo), sistematično premalo vlagala v razsežnosti legitimnosti in izidov, ki jih finančna metrika ne vidi.

## Matematika

Kazalniška kartica javne vrednosti je okvir, ne formula, a njena struktura je fiksna in jo je vredno natančno ponoviti:

```
Perspektiva           Vprašanje javnega sektorja                   Primer kazalnika
--------------------------------------------------------------------------------
Poslanstvo / izidi     Ali dosegamo javno vrednost, zaradi          Mera izida na ravni prebivalstva
                       katere obstajamo?                            (glej outcomes-vs-outputs)
Skrbništvo nad         Ali javni denar uporabljamo učinkovito       Strošek na izid, odstopanje
  viri                  in v okviru odobrenih meja?                  od proračuna
Odjemalec / uporabnik  Ali uporabniki in državljani lahko dostopajo  Stopnja dokončanja, zadovoljstvo
                        do storitve in imajo koristi od nje?
Legitimnost / podpora  Ali nas politični naročniki, nadzorni organi  Kazalniki zaupanja, ugotovitve
                        in javnost še vedno podpirajo?                revizij, utemeljene pritožbe
Notranji proces /      Ali imamo zmogljivost in proces, da se        Fluktuacija osebja, čas cikla,
  učenje                nenehno izboljšujemo?                         starost zaostankov

Zagovorljiva kazalniška kartica poroča o 3–5 kazalnikih na perspektivo,
izbranih tako, da nobene perspektive ni mogoče izigrati, ne da bi se
škoda pokazala v drugi.
```

## Praktični primer

**Oddelek za socialno oskrbo odraslih lokalne oblasti**: kazalniška kartica za storitev reablementa (kratkotrajna podpora za ponovno pridobitev samostojnosti po bolnišničnem bivanju) poroča:

```
Poslanstvo:    68 % uporabnikov storitve po 6 tednih ne potrebuje več stalne oskrbe (cilj 65 %)
Skrbništvo:    strošek na dokončano epizodo reablementa = £1.850 (proračunska predpostavka £2.000)
Odjemalec:     zadovoljstvo uporabnikov 82 %, povprečna čakalna doba za začetek storitve 4,1 dneva
Legitimnost:   3 utemeljene pritožbe na 1.000 epizod; odbor za zaščito odraslih oceni
               storitev kot »dobro«
Proces:        stopnja nezasedenih delovnih mest osebja 14 %, povprečna obremenitev 23 primerov (varna zgornja meja obremenitve: 25)
```

Samostojno gledano številki poslanstva in skrbništva izgledata kot preprosta zgodba o uspehu: pod proračunom in nad ciljem izida. Skupaj z vrstico procesa pa stopnja nezasedenosti 14 % ob zgornji meji obremenitve 25 pokaže, da se dober izid kupuje z delovanjem blizu nevarnih ravni kadrovanja – opozorilo, ki ga številka poslanstva sama nikoli ne bi razkrila, in natanko način neuspeha, ki ga vabi KPI z eno samo perspektivo (glej [KPI v javnem sektorju](../ključni-kazalniki-uspešnosti-v-javnem-sektorju/)).

## Povezava s programskim inženirstvom

Za ekipo, ki gradi notranjo ali javno nadzorno ploščo, je kazalniška kartica neposreden argument proti enemu samemu gradniku »ocene zdravja«: zgradite en panel na perspektivo in se uprite pritisku izdelka, da jih sintetizirate v semafor, ker se prav v koraku sinteze informacija o kompromisih uniči. Čisto se preslika tudi na strukture OKR izdelčnih ekip: OKR poslanstva brez parnega OKR skrbništva ali procesa ponavlja način neuspeha enojne metrike, zoper katerega sta Kaplan in Norton pisala leta 1992. Glej [javna vrednost](../javna-vrednost/) za Mooreovo osnovno teorijo o tem, kaj naj bi okvir »poslanstva« dejansko vseboval, in [kazalniki zaupanja in legitimnosti](../merila-zaupanja-in-legitimnosti/) za to, kako perspektivo legitimnosti napolniti z resničnimi kazalniki z viri, ne z nadomestkom, ki ga nihče ne more zagovarjati.

## Pasti

- **Strnitev kazalniške kartice v eno oceno**: povprečenje štirih perspektiv v eno številko znova uvede natanko problem – slaba ocena legitimnosti, prikrita z dobro oceno skrbništva – ki ga kazalniška kartica želi preprečiti.
- **Nespremenjeno kopiranje »finančne« perspektive zasebnega sektorja**: perspektiva skrbništva javnega organa govori o ostajanju v odobrenih, pogosto namenskih proračunih, ne o maksimiranju prihodkov – Nivenovo preimenovanje ni kozmetično.
- **Izbira kazalnikov, ki jih ekipa, lastnica kazalniške kartice, lahko enostransko premakne**: kazalnik legitimnosti iz iste ekipe, ki jo presoja (npr. samoporočano obravnavanje pritožb), ni neodvisen dokaz.
- **Enkratna izdelava kazalniške kartice brez ponovnega pregleda uteži ali kazalnikov**: Kaplan in Norton sta predvidela letni pregled strategije; kazalniška kartica, zamrznjena za leta, se oddalji od poslanstva, ki ga je bila zgrajena spremljati.

## Viri

- Robert S. Kaplan and David P. Norton, "The Balanced Scorecard: Measures That Drive Performance,"
  *Harvard Business Review*, January–February 1992.
- Paul R. Niven, *Balanced Scorecard: Step-by-Step for Government and Nonprofit Agencies*, Wiley,
  2003.
- Mark H. Moore, *Creating Public Value: Strategic Management in Government*, Harvard University
  Press, 1995.
