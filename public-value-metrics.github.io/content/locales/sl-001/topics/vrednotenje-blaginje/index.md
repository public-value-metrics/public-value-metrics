# Vrednotenje blaginje (WELLBY)

Vrednotenje blaginje ovrednoti učinek politike neposredno v pojmih zadovoljstva z življenjem, z WELLBY (z blaginjo prilagojeno leto življenja) kot enoto – en WELLBY je enaka eni točki spremembe na 0–10 lestvici zadovoljstva z življenjem, ohranjeni eno leto. Je uradno potrjena alternativa HM Treasury denarnemu vrednotenju vsake koristi prek pripravljenosti plačati.

## Zakaj je pomembno

Dokument HM Treasury »Wellbeing guidance for appraisal: supplementary Green Book guidance« (2021,
<https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>)
je podatke o subjektivni blaginji formalno vnesel v oceno osrednje vlade in analitikom dal pot za vrednotenje izidov – družbena povezanost, duševno zdravje, varnost, državljanska udeležba – ki jih metode [izraženih preferenc](../vrednotenje-z-izraženimi-preferencami/) in [razkritih preferenc](../vrednotenje-po-razkritih-preferencah/) težko prepričljivo ovrednotijo, ker so ljudje pogosto slabi napovedovalci tega, koliko bo dobrina dejansko vplivala na njihovo zadovoljstvo z življenjem. Smernice, razvite skupaj z What Works Centre for Wellbeing, določajo priporočeno denarno vrednost na WELLBY – £13 000 (cene 2021, občasno revidirano) – izpeljano iz razmerja, opaženega v velikih anketah o blaginji (predvsem ONS Annual Population Survey, ki od 2011 postavlja štiri vprašanja ONS4 o blaginji), med dohodkom in zadovoljstvom z življenjem, kar analitikom daje pretvorbeno stopnjo nazaj v funte, kadar je potrebna denarno ovrednotena primerjava z drugimi ocenami po Green Book.

Metoda je pomembna, ker obrne običajno logiko vrednotenja: namesto da bi vprašala, koliko bi ljudje plačali za izid (izražene preference), ali sklepala vrednost iz sorodne tržne transakcije (razkrite preference), neposredno meri učinek izida na poročano zadovoljstvo z življenjem in se izogne vrzeli med tem, kaj ljudje pravijo, da želijo, in tem, kaj jih dejansko dela bolje. To je tudi njena osrednja omejitev – samoporočano zadovoljstvo z življenjem je pod vplivom prilagoditve in učinkov oblikovanja okvira, ki jih mora skrben praktik nadzorovati.

## Matematika

```
WELLBY = 1 točka zadovoljstva z življenjem (lestvica 0–10), ohranjena za 1 osebo za 1 leto

Skupni WELLBY-ji iz politike =
  Σ (sprememba ocene zadovoljstva z življenjem) × (število prizadetih ljudi)
    × (trajanje v letih, diskontirano z družbeno diskontno stopnjo)

Denarna vrednost = skupni WELLBY-ji × vrednost na WELLBY
  (priporočena vrednost HM Treasury: £13 000 na WELLBY, cene 2021,
   podvržena občasni reviziji – pred uporabo preverite trenutne smernice)
```

To se razlikuje od zdravstveno-ekonomskega [z blaginjo prilagojenega leta življenja](../z-blaginjo-prilagojena-leta-življenja/), ki je običajno zasidran na lestvicah z zdravjem povezane kakovosti življenja (EQ-5D in podobne) in ne na splošnem zadovoljstvu z življenjem; sta povezana, a ne zamenljiva, in ocene po Green Book morajo biti izrecne, katera lestvica in metoda izvabljanja je podlaga poročani številki WELLBY.

## Praktični primer

**Lokalna oblast**: občina izvaja skupnostno shemo druženja za osamljene starejše prebivalce, ki služi 400 ljudem. Anketa o blaginji pred/po z vprašanjem ONS4 o zadovoljstvu z življenjem pokaže, da se povprečna ocena udeležencev dvigne s 5,8 na 6,5 – pridobitev 0,7 točke – ohranjena med 2-letnim financiranim trajanjem programa.

```
Ustvarjeni WELLBY-ji = 400 ljudi × 0,7 točke × 2 leti = 560 WELLBY-jev
Denarna vrednost = 560 × £13 000 = £7,28 mio
Strošek programa = £450 000 v 2 letih

Razmerje med koristmi in stroški ≈ £7,28 mio / £0,45 mio ≈ 16:1
```

Tako visoko razmerje naj sproži pregled, ne proslavljanja – smernice Green Book o blaginji izrecno svarijo pred jemanjem samoporočanih pridobitev iz majhnih vzorcev za dobro, ne da bi preverili učinke izbire (ali so se shemi pridružili samo najbolj družabni prebivalci, ki jim je najverjetneje boljše?) in brez primerjalne skupine; dobro zasnovano vrednotenje bi odštelo protidejstveno spremembo, opaženo pri neudeležencih, glej [protidejstvena analiza](../kontrafaktična-analiza/).

**Državna uprava**: primerjava dveh programov zaposlovanja z WELLBY-ji namesto samih zaslužkov zajame, da brezposelnost nosi strošek blaginje onkraj izgubljenega dohodka – britanske raziskave blaginje dosledno ugotavljajo, da brezposelnost zmanjša zadovoljstvo z življenjem bolj, kot bi napovedala sama izguba dohodka, zaradi nedenarnih učinkov izgube strukture, smisla in družbenega stika. Program, vrednoten samo po povečanju zaslužka, bi podcenil svojo vrednost glede na program, vrednoten dodatno tudi po WELLBY-jih.

## Povezava s programskim inženirstvom

Vrednotenje blaginje redko neposredno doseže inženirske ekipe, a oblikuje, kaj se opredeli kot »uspeh« za izdelke socialnega sektorja in javnih storitev – digitalna platforma za druženje, orodje za triažo duševnega zdravja ali skupnostna platforma za osamljene prebivalce naj pričakuje, da bo njen učinek sčasoma izmerjen na ta način, kar pomeni, da mora produktna analitika zajemati, *koga* doseže in *kako dolgo*, ne le števil uporabe. Instrumentacijo anket o blaginji (ONS4 ali preverjeni ustreznik) vgradite v vrednotenje storitve od začetka, ne naknadno; naknadno dodajanje izhodišča blaginje po zagonu storitve popolnoma izgubi primerjavo pred/po. Glej [izidi proti izložkom](../izidi-in-izložki/) in [metode vrednotenja učinka](../metode-vrednotenja-učinkov/).

## Pasti

- **Brez protidejstvenega stanja ali primerjalne skupine.** Pridobitev blaginje pred/po brez nadzora tega, kaj bi se zgodilo tako ali tako, preceni učinek programa; glej [protidejstvena analiza](../kontrafaktična-analiza/) in [dodatnost in mrtva teža](../dodatnost-in-mrtva-teža/).
- **Majhni, samoizbrani vzorci.** Ankete o blaginji udeležencev programa, ki so se prijavili prostovoljno, so nagnjene k pristranskosti izbire – ljudje, ki so se pridružili in ostali, so verjetno že imeli naraščajoč trend.
- **Obravnavanje pretvorbe £ na WELLBY kot natančne.** Denarna vrednost je politična konvencija, izpeljana iz regresij dohodek–blaginja, ne tržna cena; uporabite jo za primerljivost med ocenami po Green Book, ne kot trditev o tem, »koliko je blaginja vredna«.
- **Zamenjava WELLBY-jev z zdravstvenimi QALY-ji.** Merita različna konstrukta na različnih lestvicah; glej [z blaginjo prilagojena leta življenja](../z-blaginjo-prilagojena-leta-življenja/) za zdravstveno-ekonomsko različico in ju ne povprečite skupaj.

## Viri

- HM Treasury. "Wellbeing guidance for appraisal: supplementary Green Book guidance." 2021.
  <https://www.gov.uk/government/publications/green-book-supplementary-guidance-wellbeing>
- What Works Centre for Wellbeing. <https://whatworkswellbeing.org/>
- Office for National Statistics. "Personal well-being in the UK" (ONS4 measures).
  <https://www.ons.gov.uk/peoplepopulationandcommunity/wellbeing>
- Fujiwara D, et al. "Wellbeing Valuation: A Nascent Field?" LSE / Simetrica research summaries.
