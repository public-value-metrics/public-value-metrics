# Stroškovna učinkovitost učinkovitega altruizma

Razmišljanje o stroškovni učinkovitosti v učinkovitem altruizmu (EA) razvršča dobrodelne ukrepe po količini dobrega – najpogosteje izraženega kot rešena življenja ali pridobljeno zdravje na porabljen dolar – in usmerja denar v tisti ukrep, ki na meji kupi največ dobrega. GiveWell je najvplivnejši izvajalec tega področja: objavlja izrecne, posodobljene ocene stroška na rešeno življenje in stroška na izid za kratek seznam »vrhunskih dobrodelnih organizacij« ter donatorjem priporoča, naj darujejo tisti, ki ima trenutno prostor za dodatno financiranje po najboljši stopnji.

## Zakaj je pomembno

GiveWell stroškovno učinkovitost navaja kot prvo merilo v svoji objavljeni metodologiji: išče z dokazi podprte ukrepe, ocenjuje njihovo stroškovno učinkovitost v skupni enoti in po tej ena osi razvršča popolnoma nepovezane vzroke – mreže proti komarjem proti malariji, dodatke vitamina A, denarne prenose, spodbudna plačila za cepljenje. To je neposreden uvoz razmišljanja v slogu QALY/DALY iz zdravstvene ekonomike v filantropijo: kakor zdravstveni sistem sprašuje »koliko QALY na funt na meji«, GiveWell sprašuje »koliko življenj ali let življenja na dolar na meji« in vzroke obravnava kot zamenljive, ko so pretvorjeni v to skupno enoto. Glej [analizo stroškovne učinkovitosti v vladi](../analiza-stroškovne-učinkovitosti-v-upravi/) za javnosektorskega bratranca tega okvira razmišljanja.

Najpogosteje navajana številka GiveWell zadeva Against Malaria Foundation (AMF), ki razdeljuje z insekticidi obdelane mreže proti komarjem. V objavljenem delovnem primeru GiveWell (iz podatkov o financiranju za leto 2020) je približno $4 500 financiralo dovolj mrež za preprečitev ene smrti, po upoštevanju nepopolne uporabe mrež, osnovne umrljivosti brez mrež in popravka za funging – možnost, da bi AMF del tega financiranja prejel od drugih donatorjev tako ali tako. GiveWell izrecno navaja, da se ta številka s časom in geografijo spreminja, ko se spreminjajo razširjenost malarije, stroški mrež in vrzeli v financiranju, ter da se strošek reševanja življenja na splošno pričakuje, da bo čez čas rasel, saj se najprej izkoristijo najcenejše priložnosti; gre za delovno ponazoritev metode, ne za fiksno ceno.

## Matematika

```
Stroškovna učinkovitost = Strošek ukrepa / Enote ustvarjenega dobrega
                         (npr. $ na rešeno življenje, $ na preprečeni DALY, $ na QALY)

Veriga GiveWell za program mrež, ponazoritveno:
  $ na kupljeno in dostavljeno mrežo
    ÷ delež dejansko uporabljenih mrež
    ÷ zaščitenih ljudi na mrežo
    × osnovna letna umrljivost brez mrež
    × zmanjšanje umrljivosti zaradi uporabe mrež (iz dokazov RCT)
    × let zaščite na mrežo
    ÷ popravek za funging (denar, ki izpodrine financiranje drugih donatorjev)
  = $ na rešeno življenje (neto kontrafaktičnih učinkov financiranja)
```

Ta veriga je pomembna, ker je vsak korak mesto, kjer ocene stroškovne učinkovitosti pogosto zataknejo – glej pasti spodaj – in ker pokaže, da »strošek na rešeno življenje« nikoli ni surova opažena cena; je modelirana ocena, zgrajena iz več posamično negotovih vložkov.

## Praktični primer

Dva hipotetična ukrepa, oba podprta z dokazi, ki tekmujeta za istih mejnih £100 000:

- **Mreže proti komarjem (v slogu AMF)**: približno $4 500 na rešeno življenje po objavljenem delovnem primeru GiveWell iz podatkov za leto 2020, tj. zelo približno 20 rešenih življenj na £100 000, odvisno od menjalnega tečaja in uporabljenega leta.
- **Program razglistenja**: nobene verjetne koristi za umrljivost, a trdni dokazi o dolgoročnih dohodkovnih dobitkih zaradi razglistenja v otroštvu; GiveWell ga vrednoti z dohodkovnimi dobitki, ne rešenimi življenji, zato ga je brez skupne enote težko neposredno primerjati z mrežami. GiveWell uporablja izrecen okvir »moralnih uteži« (moral weights), da oboje pretvori v eno notranjo enoto za razvrščanje.

Disciplina metode EA je v tem, da to primerjavo prisili na dan, namesto da bi financirali oboje, ker se obe »slišita dobro«. Glej [družbeni donos naložbe](../družbeni-donos-naložbe/) za enakovredno prisilno funkcijo, ki jo uporabljajo britanska socialna podjetja in lokalni naročniki in ki postavlja isto vprašanje – kakšen je najboljši donos na funt – v idiomu denarno izražene vrednosti, ne v idiomu življenj/DALY.

## Povezava s programskim inženirstvom

Inženirji, ki gradijo donatorske platforme, orodja za ujemanje nepovratnih sredstev ali nadzorne plošče učinkov za financerje, usklajene z EA (Open Philanthropy, sam GiveWell, platforme za učinkovito dajanje, kot je Giving What We Can), morajo ocene stroškovne učinkovitosti predstaviti kot razpone z navedenimi predpostavkami, ne kot posamezne številke – osnovni model ima več multiplikativnih negotovih vložkov in strnitev v eno številko na nadzorni plošči napačno predstavi zaupanje, ki ga navaja GiveWell sam. Vsako oceno označite z različico po datumu objave; GiveWell svoje številke, včasih bistveno, popravlja, ko prispejo novi dokazi RCT ali podatki o vrzelih v financiranju, platforma, ki hrani staro številko, pa tiho postane napačna.

## Pasti

- **Obravnavanje ocene stroškovne učinkovitosti kot fiksne cene.** Gre za izhod modela z več negotovimi multiplikativnimi vložki (stopnje uporabe, osnovna umrljivost, popravek za funging); navedite datum in različico.
- **Prezrt funging/izpodrinjenje.** Financiranje organizacije, ki bi denar prejela od drugega donatorja tako ali tako, kupi manj kontrafaktičnega dobrega, kot kaže naslov – glej [dodatnost in mrtva teža](../dodatnost-in-mrtva-teža/) ter [izpodrinjenje in pripisovanje učinka](../izpodrinjenje-in-pripisovanje-učinka/).
- **Primerjava med nezdružljivimi enotami brez pretvorbe.** »Rešena življenja« in »pridobljeni dohodek« nista neposredno primerljiva brez izrecnega okvira moralnih uteži; njuno predstavitev drugo ob drugem, kot da sta, je kategorialna napaka.
- **Tunelski vid znotraj področja vzrokov.** Razvrščanje le znotraj enega področja (npr. samo dobrodelne organizacije za globalno zdravje) in imenovanje zmagovalca »najbolj stroškovno učinkovita dobrodelna organizacija« trditev precenjuje; razvrščanje GiveWell med vzroki je namenoma ozko (globalno zdravje in blaginja), ne splošno.

## Viri

- GiveWell, "Our criteria." <https://www.givewell.org/how-we-work/our-criteria>
- GiveWell, "How Much Does It Cost to Save a Life?" (February 2024 version). <https://www.givewell.org/how-much-does-it-cost-to-save-a-life/february-2024-version>
- GiveWell, Against Malaria Foundation review. <https://www.givewell.org/charities/amf>
- Giving What We Can, on cost-effectiveness across causes. <https://www.givingwhatwecan.org/>
