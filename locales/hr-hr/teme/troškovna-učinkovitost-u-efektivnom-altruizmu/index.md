# Troškovna učinkovitost u efektivnom altruizmu

Razmišljanje o troškovnoj učinkovitosti u efektivnom altruizmu (EA) rangira dobrotvorne intervencije prema količini učinjenog dobra, najčešće izraženog kao spašeni životi ili zadobiveno zdravlje po potrošenom dolaru, i usmjerava novac onoj intervenciji koja na margini kupuje najviše dobra. GiveWell je najutjecajniji praktičar na tom području: objavljuje izričite, ažurirane procjene troška po spašenom životu i troška po ishodu za kratak popis „vodećih organizacija” te preporučuje donatorima da daju onoj koja trenutačno ima prostora za dodatno financiranje uz najbolji omjer.

## Zašto je važno

GiveWell u svojoj objavljenoj metodologiji navodi troškovnu učinkovitost kao vodeći kriterij: traži intervencije utemeljene na dokazima, procjenjuje njihovu troškovnu učinkovitost u zajedničkoj jedinici i rangira posve nepovezane uzroke (mreže protiv malarije, dodatke vitamina A, novčane transfere, poticajna plaćanja za cijepljenje) na toj jedinoj osi. To je izravan uvoz razmišljanja u stilu QALY-ja/DALY-ja iz zdravstvene ekonomike u filantropiju: kao što zdravstveni sustav pita „koliko QALY-ja po funti na margini”, GiveWell pita „koliko života ili godina života po dolaru na margini” i uzroke smatra zamjenjivima kada se pretvore u tu zajedničku jedinicu. Za srodni okvir u javnom sektoru vidi [analizu troškovne učinkovitosti u državnoj upravi](../analiza-troškovne-učinkovitosti-u-državnoj-upravi/).

Najčešće citirana GiveWellova brojka odnosi se na Against Malaria Foundation (AMF), koja dijeli mreže za krevete tretirane insekticidom. U GiveWellovu objavljenom riješenom primjeru (na temelju podataka o financiranju iz 2020.) otprilike $4.500 financiralo je dovoljno mreža da se spriječi jedna smrt, nakon uzimanja u obzir nepotpunog korištenja mreža, osnovnog mortaliteta bez mreža i prilagodbe za funging, odnosno mogućnost da bi AMF dio tih sredstava dobio od drugih donatora u svakom slučaju. GiveWell izričito navodi da se ta brojka mijenja tijekom vremena i među zemljopisnim područjima kako se mijenjaju prevalencija malarije, troškovi mreža i financijske praznine, te da se općenito očekuje da će trošak spašavanja života s vremenom rasti jer se najjeftinije prilike iskorištavaju prve; to je riješena ilustracija metode, a ne fiksna cijena.

## Matematika

```
Cost-effectiveness = Cost of intervention / Units of good produced
                    (e.g. $ per life saved, $ per DALY averted, $ per QALY)

GiveWell's chain for a bednet programme, illustratively:
  $ per net purchased and delivered
    ÷ share of nets actually used
    ÷ people protected per net
    × baseline annual mortality without nets
    × reduction in mortality attributable to net use (from RCT evidence)
    × years of protection per net
    ÷ adjustment for funging (money displacing other donors' funding)
  = $ per life saved (net of counterfactual funding effects)
```

Ovaj lanac je važan jer je svaki korak mjesto na kojem procjene troškovne učinkovitosti obično griješe (vidi zamke u nastavku), i jer jasno pokazuje da „trošak po spašenom životu” nikada nije sirova uočena cijena, nego modelirana procjena izgrađena iz nekoliko zasebno nesigurnih ulaza.

## Primjer iz prakse

Dvije hipotetske intervencije, obje utemeljene na dokazima, natječu se za istih graničnih £100.000:

- **Mreže za krevete (u stilu AMF-a)**: otprilike $4.500 po spašenom životu prema GiveWellovu objavljenom riješenom primjeru na podacima iz 2020., tj. vrlo grubo 20 spašenih života na £100.000, ovisno o tečaju i korištenoj godini.
- **Program uklanjanja crijevnih parazita**: nikakva vjerojatna korist u mortalitetu, ali snažni dokazi o dugoročnim dobicima u dohotku od uklanjanja parazita u djetinjstvu; GiveWell ga vrednuje u dobicima dohotka, a ne u spašenim životima, zbog čega ga je teško izravno usporediti s mrežama bez zajedničke jedinice. GiveWell koristi izričit okvir „moralnih pondera” kako bi oboje pretvorio u jednu internu jedinicu za rangiranje.

Disciplina EA metode je u tome da tu usporedbu iznese na vidjelo umjesto da financira oboje jer oboje „zvuči dobro”. Za ekvivalentni mehanizam prisile kojim se koriste britanska socijalna poduzeća i lokalni naručitelji vidi [socijalni povrat na ulaganje](../društveni-povrat-ulaganja/), koji postavlja isto pitanje (koji je najbolji povrat po funti) u idiomu novčano izražene vrijednosti, a ne života/DALY-ja.

## Veza s programskim inženjerstvom

Inženjeri koji grade platforme za donatore, alate za uparivanje potpora ili nadzorne ploče učinka za financijere bliske EA-u (Open Philanthropy, sam GiveWell, platforme za učinkovito darivanje poput Giving What We Can) trebaju procjene troškovne učinkovitosti prikazivati kao raspone s navedenim pretpostavkama, a ne kao pojedinačne brojeve: temeljni model ima nekoliko množenih nesigurnih ulaza, a svođenje na jednu brojku na nadzornoj ploči pogrešno prikazuje pouzdanost koju sam GiveWell navodi. Verzionirajte svaku procjenu prema datumu objave; GiveWell revidira svoje brojke, ponekad znatno, kako stižu novi dokazi iz RCT-a ili podaci o financijskim prazninama, a platforma koja pohrani staru brojku tiho postaje netočna.

## Zamke

- **Tretiranje procjene troškovne učinkovitosti kao fiksne cijene.** To je izlaz modela s nekoliko nesigurnih množenih ulaza (stope korištenja, osnovni mortalitet, prilagodba za funging); navedite datum i verziju.
- **Zanemarivanje funginga/istiskivanja.** Financiranje organizacije koja bi novac svejedno dobila od drugog donatora kupuje manje kontrafaktualnog dobra nego što naslovna brojka sugerira, vidi [dodatnost i mrtvi teret](../dodatnost-i-mrtvi-teret/) i [istiskivanje i pripisivanje učinka](../istiskivanje-i-pripisivanje-učinka/).
- **Uspoređivanje nespojivih jedinica bez pretvorbe.** „Spašeni životi” i „zadobiveni dohodak” nisu izravno usporedivi bez izričitog okvira moralnih pondera; njihovo prikazivanje jedno uz drugo kao da jesu je kategorijska pogreška.
- **Tunelski pogled na područje uzroka.** Rangiranje samo unutar jednog područja (npr. samo organizacije za globalno zdravlje) i proglašavanje pobjednika „najisplativijom dobrotvornom organizacijom” precjenjuje tvrdnju; GiveWellovo rangiranje među uzrocima namjerno je usko (globalno zdravlje i blagostanje), a ne univerzalno.

## Izvori

- GiveWell, "Our criteria." <https://www.givewell.org/how-we-work/our-criteria>
- GiveWell, "How Much Does It Cost to Save a Life?" (February 2024 version). <https://www.givewell.org/how-much-does-it-cost-to-save-a-life/february-2024-version>
- GiveWell, Against Malaria Foundation review. <https://www.givewell.org/charities/amf>
- Giving What We Can, on cost-effectiveness across causes. <https://www.givingwhatwecan.org/>
