# Metriky dôvery a legitimity

Legitimita a podpora je jednou z troch nôh „strategického trojuholníka“ Marka Moora v knihe *Creating Public Value* (1995) – popri samotnej verejnej hodnote a prevádzkovej kapacite – a je to noha, ktorá sa najčastejšie ostáva nezmeraná, pretože na rozdiel od rozpočtu alebo počtu výstupov nemá legitimita žiadne zjavné jediné číslo. Metriky dôvery a legitimity sú rodina zástupných ukazovateľov, ktorými vlády túto medzeru vypĺňajú: prieskumy inštitucionálnej dôvery, hodnotenia dôvery od kontrolných orgánov, údaje o sťažnostiach a odvolaniach a ukazovatele politickej a legislatívnej podpory.

## Prečo na tom záleží

Mooreov argument znie, že verejný manažér, ktorý dodáva skutočnú hodnotu, ale stratí politickú a verejnú legitimitu, nakoniec stratí autorizačné prostredie potrebné na to, aby v dodávke pokračoval – financovanie sa skráti, mandáty sa zúžia a služba sa vyhladuje bez ohľadu na to, aké dobré sú jej výsledky. Legitimita preto nie je dodatočná starostlivosť o vzťahy s verejnosťou pripojená k dodávkovej hodnotiacej karte; je to nosný vstup k tomu, či misia môže vôbec pokračovať, a preto má v [hodnotiacej karte verejnej hodnoty](../hodnotiaca-karta-verejnej-hodnoty/) rovnocenné postavenie ako samostatná perspektíva, nie poznámku pod čiarou. Program prieskumov „Trust in Government“ od OECD je popredným medzinárodným pokusom to kvantifikovať: sleduje podiel občanov v členských štátoch OECD, ktorí uvádzajú, že majú dôveru vo svoju národnú vládu, a jeho dlhodobé údaje ukazujú, že dôvera je veľmi citlivá na otrasy – finančná kríza z roku 2008 aj pandémia COVID-19 spôsobili prudké výkyvy na národnej úrovni, často nasledované len čiastočným zotavením – pričom analýza OECD dôsledne zisťuje, že vnímaná *kompetentnosť* (dodáva vláda to, čo sľubuje) a vnímaná *férovosť/integrita* (je vláda vnímaná tak, že koná bez korupcie a favorizovania) sú dva najsilnejšie hnacie faktory čísla dôvery, odlišné od spokojnosti s ktoroukoľvek jednotlivou transakciou. Vlády sa čoraz viac snažia operacionalizovať legitimitu aj na podrobnejšej úrovni – britské nezávislé regulátory a inšpektoráty (National Audit Office, Parliamentary and Health Service Ombudsman, sektorové regulátory ako Ofsted a Care Quality Commission) fungujú ako inštitucionalizované kontroly legitimity, ktoré menia otázku „dôveruje verejnosť tejto službe stále?“ na auditovateľné hodnotenia.

## Matematika

Dôvera a legitimita je téma formovaná rámcom, ktorej použiteľné kvantitatívne zástupné ukazovatele sú:

```
Index inštitucionálnej dôvery (v štýle OECD)
  = % respondentov prieskumu odpovedajúcich „áno“ na otázku o dôvere vo vládu,
    sledované v čase, rozčlenené podľa demografických skupín

Súbor zástupných ukazovateľov legitimity (žiadne jediné číslo konštrukt nenahradí):
  - Opodstatnené sťažnosti na 1 000 používateľov služby (údaje ombudsmana alebo interných sťažností)
  - Miera úspešnosti súdnych preskúmaní / odvolaní proti rozhodnutiam orgánu
  - Hodnotenie nezávislého regulátora/inšpektorátu (napr. pásma od „vynikajúce“ po „nedostatočné“)
  - Hlasovania o dôvere vo výboroch pre dohľad / legislatívnych orgánoch alebo frekvencia kritických správ
  - Objem žiadostí o informácie podľa zákona o slobodnom prístupe k informáciám a miera sprístupnenia/odmietnutia
    ako zástupný ukazovateľ vnímanej transparentnosti

Legitimita sa potvrdzuje, nepočíta: obhájiteľné posúdenie legitimity
kombinuje viacero z uvedených ukazovateľov a nespolieha sa na jediný zástupný ukazovateľ.
```

## Vypracovaný príklad

**Národný daňový úrad**: triangulácia legitimity pre ročnú správu o verejnej hodnote.

```
Zástupný ukazovateľ dôvery v štýle OECD (prieskum dôvery špecifický pre úrad):
  58 % respondentov uvádza, že úradu dôveruje, že „so mnou bude zaobchádzať férovo“
  (pokles z 64 % spred dvoch rokov)

Údaje o sťažnostiach:
  Opodstatnené sťažnosti: 4,2 na 1 000 interakcií s daňovníkmi (nárast z 3,1 na 1 000)

Postúpenia ombudsmanovi:
  Postúpenia nezávislému Adjudicator's Office: 1 850 za rok, z ktorých
  61 % bolo vyhodnotených ako opodstatnené plne alebo sčasti proti úradu (nárast z 48 % v predchádzajúcom roku)

Pri pohľade naprieč všetkými tromi: dôvera klesá, opodstatnené sťažnosti rastú
a nezávislé zistenia ombudsmana sa čoraz častejšie prikláňajú proti úradu –
tri nezávislé signály konvergujúce rovnakým smerom, čo z tohto zistenia robí
dôveryhodné zistenie o legitimite, nie šum v niektorom jednotlivom rade.
```

Pohyb jediného z týchto čísel by bol slabým dôkazom; tri nezávislé miery pohybujúce sa spolu v tom istom období sú vzorec, ktorý robí tvrdenie o legitimite obhájiteľným.

## Súvislosť so softvérovým inžinierstvom

Metriky legitimity zriedka vytvára dashboard jediného tímu, čo je samo o sebe dizajnovou lekciou: budujte reportovacie pipeline, ktoré dokážu prijímať a zosúlaďovať údaje z nezávislých externých zdrojov (systémy ombudsmana na spracovanie podaní, kanály hodnotení regulátorov, dodávatelia prieskumov), namiesto navrhovania reportovania legitimity ako výlučne internej metriky, pretože interne získané tvrdenia o legitimite („hodnotíme sa ako dôveryhodní“) majú malú dôkaznú váhu – rovnaký problém nezávislosti, aký sa uvádza pri perspektíve legitimity v [hodnotiacej karte verejnej hodnoty](../hodnotiaca-karta-verejnej-hodnoty/). Pipeline s údajmi o sťažnostiach a odvolaniach si zaslúžia rovnakú prísnosť v kvalite údajov ako každý výsledkový pipeline napájajúci zmluvy [platby podľa výsledkov](../platba-za-výsledky-a-sociálne-dlhopisy/), keďže nedostatočne vykazovaný alebo zle kategorizovaný súbor sťažností potichu podhodnocuje problém s legitimitou skôr, než sa o rok neskôr objaví v prieskume dôvery. Pozri [metriky spokojnosti občanov](../metriky-spokojnosti-občanov/) pre transakčný protipól tejto miery na úrovni inštitúcie a [verejnú hodnotu](../verejná-hodnota/) pre Mooreov úplný rámec strategického trojuholníka, ku ktorému táto noha patrí.

## Úskalia

- **Považovanie spokojnosti za zástupný ukazovateľ legitimity**: občan môže byť spokojný s rozhraním jednej transakcie a zároveň nedôverovať inštitúcii ako celku (alebo naopak) – pozri [metriky spokojnosti občanov](../metriky-spokojnosti-občanov/), prečo sa musia uvádzať oddelene.
- **Spoliehanie sa na jedinú sebavykazovanú metriku**: interne vedený prieskum dôvery bez nezávislého potvrdenia (údaje ombudsmana, hodnotenia regulátora) sa dá ľahko odmietnuť ako samohodnotenie; triangulujte.
- **Ignorovanie demografického rozčlenenia**: súhrnné národné údaje o dôvere môžu zakrývať prudko sa rozchádzajúcu legitimitu u konkrétnych skupín (podľa veku, etnicity, príjmu alebo regiónu) – vlastné publikácie OECD Trust in Government z tohto dôvodu údaje rozčleňujú.
- **Čítanie jediného poklesu spôsobeného otrasom ako trvalého trendu**: čísla dôvery sa okolo kríz (finančné krachy, pandémie, hlasité škandály) prudko menia a čiastočne sa zotavujú; jediný údaj po otrase by sa nemal extrapolovať na dlhodobý pokles bez ďalších údajov.

## Zdroje

- Mark H. Moore, *Creating Public Value: Strategic Management in Government*, Harvard University
  Press, 1995.
- OECD, "Trust in Government." <https://www.oecd.org/en/topics/trust-in-government.html>
- Parliamentary and Health Service Ombudsman, annual casework statistics.
  <https://www.ombudsman.org.uk/>
