# Merila zaupanja in legitimnosti

Legitimnost in podpora je ena od treh nog »strateškega trikotnika« Marka Moora v knjigi *Creating Public Value* (1995) – poleg same javne vrednosti in operativne zmogljivosti – in je noga, ki je najpogosteje nemerjena, ker za razliko od proračuna ali števila izložkov legitimnost nima očitne enotne številke. Merila zaupanja in legitimnosti so družina približnih meril, ki jih vlade uporabljajo za zapolnitev te vrzeli: ankete o zaupanju v ustanove, ocene zaupanja nadzornih organov, podatki o pritožbah in pritožbenih postopkih ter kazalniki politične/zakonodajne podpore.

## Zakaj je pomembno

Moorov argument je, da bo javni menedžer, ki zagotavlja resnično vrednost, a izgubi politično in javno legitimnost, sčasoma izgubil okolje pooblaščanja, potrebno za nadaljnje zagotavljanje – financiranje se zmanjša, mandati se zožijo in storitev je stradana, ne glede na to, kako dobri so njeni izidi. Legitimnost zato ni odnosi-z-javnostmi postranska misel, pritaknjena kazalniku izvedbe; je nosilni vložek za to, ali lahko poslanstvo sploh nadaljuje, zato je enakovreden vidik v [kazalniku javne vrednosti](../kazalniška-kartica-javne-vrednosti/), ne opomba pod črto. Program ankete »Trust in Government« organizacije OECD je vodilni medvladni poskus količinske opredelitve: spremlja delež državljanov v državah članicah OECD, ki izrazijo zaupanje v svojo nacionalno vlado, njeni dolgoročni podatki pa kažejo, da je zaupanje zelo občutljivo na šoke – tako finančna kriza 2008 kot pandemija COVID-19 sta povzročili izrazita nacionalna nihanja, pogosto s samo delnim okrevanjem, analize OECD pa dosledno ugotavljajo, da sta zaznana *kompetentnost* (ali vlada izpolni, kar obljubi) in zaznana *pravičnost/integriteta* (ali velja, da vlada deluje brez korupcije ali klientelizma) najmočnejša dejavnika zaupanja, ločena od zadovoljstva s posamezno transakcijo. Vlade vse pogosteje poskušajo legitimnost operacionalizirati tudi na bolj podrobni ravni – britanski neodvisni regulatorji in inšpektorati (National Audit Office, Parliamentary and Health Service Ombudsman, sektorski regulatorji, kot sta Ofsted in Care Quality Commission) delujejo kot institucionalizirana preverjanja legitimnosti, ki »ali javnost tej storitvi še zaupa« pretvorijo v revidirljive ocene.

## Matematika

Zaupanje in legitimnost je tema, oblikovana kot okvir, katere uporabna količinska približna merila so:

```
Indeks zaupanja v ustanove (v slogu OECD)
  = % anketirancev, ki odgovorijo »da« na vprašanje o zaupanju v vlado,
    spremljan skozi čas, razčlenjen po demografskih skupinah

Nabor približkov legitimnosti (nobena enotna številka ne nadomesti konstrukta):
  - Utemeljene pritožbe na 1 000 uporabnikov storitve (podatki varuha ali notranjih pritožb)
  - Stopnja uspešnosti sodnih pregledov / pritožb zoper odločitve organa
  - Ocena neodvisnega regulatorja/inšpektorata (npr. pasovi od »odlično« do »neustrezno«)
  - Glasovanja o zaupanju zakonodajnega/nadzornega odbora ali pogostost kritičnih poročil
  - Obseg zahtevkov po zakonu o prostem dostopu do informacij ter stopnja razkritja/zavrnitve,
    kot približek zaznane preglednosti

Legitimnost se potrjuje, ne izračunava: obranljiva ocena legitimnosti
triangulira več zgornjih meril in se ne zanaša na en sam približek.
```

## Praktični primer

**Nacionalni davčni organ**: triangulacija legitimnosti za letno poročilo o javni vrednosti.

```
Približek zaupanja v slogu OECD (anketa o zaupanju za posamezen oddelek):
  58 % anketirancev pravi, da organu zaupa, da jih »obravnava pravično« (padec s
  64 % pred dvema letoma)

Podatki o pritožbah:
  Utemeljene pritožbe: 4,2 na 1 000 interakcij davkoplačevalcev (porast s 3,1 na 1 000)

Napotitve k varuhu:
  Napotitve na neodvisni urad Adjudicator's Office: 1 850 v letu, od katerih je bilo
  61 % v celoti ali delno utemeljenih zoper organ (porast s 48 % prejšnje leto)

Branje čez vse tri: zaupanje pada, utemeljene pritožbe naraščajo in
ugotovitve neodvisnega varuha so vse pogosteje v škodo organa –
trije neodvisni signali, ki se zbližujejo v isto smer, zaradi česar je to
verodostojna ugotovitev o legitimnosti, ne šum v eni sami vrsti.
```

Gibanje ene same od teh številk bi bil šibak dokaz; tri neodvisna merila, ki se gibljejo skupaj v istem obdobju, so vzorec, ki naredi trditev o legitimnosti obranljivo.

## Povezava s programskim inženirstvom

Merila legitimnosti redko pripravi nadzorna plošča ene same ekipe, kar je samo po sebi oblikovalska lekcija: gradite poročevalske cevovode, ki lahko sprejmejo in uskladijo podatke iz neodvisnih zunanjih virov (sistemi za obravnavo primerov varuha, viri ocen regulatorjev, ponudniki anket), namesto da poročanje o legitimnosti zasnujete kot izključno notranje merilo, ker imajo notranje pridobljene trditve o legitimnosti (»sami se ocenjujemo kot vredne zaupanja«) majhno dokazno težo – isti problem neodvisnosti, omenjen pri vidiku legitimnosti v [kazalniku javne vrednosti](../kazalniška-kartica-javne-vrednosti/). Cevovodi podatkov o pritožbah in pritožbenih postopkih si zaslužijo isto podatkovno kakovostno strogost kot vsak cevovod izidov, ki napaja pogodbe [plačila po rezultatih](../plačilo-po-rezultatih-in-družbene-obveznice-vpliva/), saj premalo poročan ali slabo kategoriziran nabor podatkov o pritožbah tiho podceni problem legitimnosti, preden postane viden v anketi o zaupanju leto pozneje. Glej [merila zadovoljstva državljanov](../metrike-zadovoljstva-državljanov/) za transakcijsko ravni nasprotje tega merila na ravni ustanove in [javna vrednost](../javna-vrednost/) za Moorov celoten okvir strateškega trikotnika, kateremu ta noga pripada.

## Pasti

- **Obravnavanje zadovoljstva kot približka legitimnosti**: državljan je lahko zadovoljen z vmesnikom posamezne transakcije, hkrati pa ustanovi kot celoti ne zaupa (ali obratno) – glej [merila zadovoljstva državljanov](../metrike-zadovoljstva-državljanov/), zakaj ju je treba poročati ločeno.
- **Zanašanje na eno samo samoporočano merilo**: notranje izvedena anketa o zaupanju brez neodvisne potrditve (podatki varuha, ocene regulatorja) se zlahka zavrne kot samoocenjevanje; triangulirajte.
- **Prezrta demografska razčlenitev**: skupne nacionalne številke zaupanja lahko prikrijejo močno razhajajočo se legitimnost med posameznimi skupinami (po starosti, etnični pripadnosti, dohodku ali regiji) – lastne objave OECD Trust in Government razčlenjujejo prav zato.
- **Branje enega šokovnega padca kot trajnega trenda**: številke zaupanja se okoli kriz (finančnih zlomov, pandemij, odmevnih škandalov) močno gibljejo in delno okrevajo; ene same podatkovne točke po šoku ne bi smeli ekstrapolirati v dolgoročen upad brez več podatkov.

## Viri

- Mark H. Moore, *Creating Public Value: Strategic Management in Government*, Harvard University
  Press, 1995.
- OECD, "Trust in Government." <https://www.oecd.org/en/topics/trust-in-government.html>
- Parliamentary and Health Service Ombudsman, annual casework statistics.
  <https://www.ombudsman.org.uk/>
