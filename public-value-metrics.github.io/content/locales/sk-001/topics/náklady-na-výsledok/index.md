# Náklady na výsledok

Náklady na výsledok (cost per outcome) sú celkové výdavky programu vydelené počtom ľudí, ktorí dosiahnu definovanú, zmysluplnú zmenu svojich okolností, nie počtom tých, ktorí službu len dostali. Je to najostrejšia metrika efektívnosti, akú môže poskytovateľ financií alebo dodávateľský tím použiť, pretože vynucuje predchádzajúcu otázku, ktorej sa väčšina charít vyhýba: čo presne sa považuje za úspech?

## Prečo na tom záleží

Potravinová banka môže z účtovníctva za ten istý rok vykázať dve veľmi odlišné čísla. Náklady na rozdaný potravinový balík môžu byť £15. Náklady na domácnosť, ktorá následne dosiahne potravinovú bezpečnosť (už nepotrebuje núdzovú potravinovú pomoc, overené v následnom bode), môžu byť £340. Obe sú pravdivé. Len jedno hovorí poskytovateľovi, či peniaze fungujú. Rozdiel medzi nimi je rozdielom medzi výstupom a výsledkom: odovzdaný balík je výstup, domácnosť, ktorá už nie je v kríze, je výsledok. Pozri [výsledky a výstupy](../výsledky-a-výstupy/).

Britský tretí sektor strávil dve desaťročia budovaním infraštruktúry na vynútenie tohto rozlíšenia. „Four pillar approach“ organizácie New Philanthropy Capital k efektívnosti charít výslovne žiada organizácie, aby uviedli svoje výsledky pred výstupmi, a Inspiring Impact, britská kolaborácia na meranie dopadu podporovaná poskytovateľmi financií, publikuje Outcomes Matrix, ktorú dnes vyžaduje vyplniť mnoho žiadostí o granty. Ročný výskumný program „State of Hunger“ organizácie Trussell Trust, realizovaný s Heriot-Watt University, existuje práve preto, že samotné počty balíkov nehovoria nič o tom, či ľudia unikajú potravinovej neistote.

Náklady na výsledok majú zmysel, až keď je pevne stanovený kontrafaktuál: výsledok dosiahnutý „aj tak“ nie je výsledok, ktorý program kúpil. Pozri [kontrafaktuálnu analýzu](../kontrafaktuálna-analýza/) a [vytesnenie a pripisovanie](../vytesnenie-a-atribúcia/).

## Matematika

```
Náklady na výsledok = Celkové náklady programu / Počet prijímateľov dosahujúcich definovaný výsledok

kde:
  Celkové náklady programu = priame náklady poskytovania + spravodlivý podiel režijných nákladov
  Definovaný výsledok      = vopred stanovená, merateľná zmena stavu
                              (napr. „potravinovo bezpečný pri 6-mesačnom sledovaní“,
                              nie „dostal potravinový balík“)
```

Porovnajte s [databázami jednotkových nákladov](../databázy-jednotkových-nákladov/) (napr. sektorové referenčné jednotkové náklady), aby ste posúdili, či sú dané náklady na výsledok dobré, priemerné alebo slabé v porovnaní s porovnateľnými intervenciami.

## Vypracovaný príklad

**Potravinová banka, jeden rok**:

- Celkové náklady programu: £450 000
- Rozdané balíky: 30 000
- Náklady na balík (výstupová metrika): £450 000 / 30 000 = **£15**

Charita tiež robí šesťmesačný následný prieskum na vzorke domácností a zistí, že 35 % domácností, ktoré dostali tri alebo viac balíkov, uvádza, že už nepotrebujú núdzovú potravinovú pomoc, a v štandardnom module prieskumu potravinovej bezpečnosti dosahujú nad prahom potravinovej bezpečnosti. Z 1 800 domácností, ktoré v tom roku dostali tri a viac balíkov, tento výsledok dosiahlo 630.

```
Náklady na výsledok = £450 000 / 630 = £714 na domácnosť dosahujúcu potravinovú bezpečnosť
```

Práve £714 je číslo, ktoré by mal použiť poskytovateľ financií porovnávajúci túto charitu s pilotom peňažných transferov alebo službou poradenstva pri dlhoch, nie £15. Ak porovnateľný program peňažných transferov v tom istom regióne dosahuje potravinovú bezpečnosť za £500 na domácnosť, potravinová banka nie je zjavne efektívnejšou cestou k rovnakému výsledku, hoci jej náklady na balík vyzerajú lacno.

## Súvislosť so softvérovým inžinierstvom

Väčšina systémov správy prípadov je stavaná na zaznamenávanie výstupov, pretože výstupy sú to, čo sa deje vnútri transakcie (odovzdá sa balík, odošle sa formulár). Výsledky sa zvyčajne dejú neskôr, často mimo bežného okna zachytávania systému, a vyžadujú vedomé návrhové rozhodnutie: vybudovať mechanizmus následného sledovania (spúšťač prieskumu, pracovný postup opätovného kontaktu, prepojenie údajov) ako plnohodnotnú funkciu, nie dodatok pripojený kvôli výročnej správe. Inžinieri, ktorí budujú platformy na správu grantov alebo prípadov pre sektor, by mali otázku „čo je udalosť výsledku a ako ju pozorujeme“ brať ako požiadavku kladenú pred ustálením dátového modelu, pretože je omnoho ťažšie dodatočne doplniť pole výsledku než počítadlo výstupu. Ako štruktúrovať takýto rozhovor o požiadavkách, pozri [výsledky a výstupy](../výsledky-a-výstupy/) a [logický model](../logický-model/), a o rýchlejšej, hrubšej metrike, po ktorej tímy siahnu, keď sledovanie výsledkov ešte nie je vybudované, [náklady na prijímateľa](../náklady-na-prijímateľa/).

## Úskalia

- **Vykazovanie výstupov prezlečených za výsledky.** „Oslovení ľudia“ nie sú „ľudia, ktorým sa pomohlo“. Ak sa metrika dá vytvoriť zo systémového logu bez následného kontaktu, takmer určite je to výstup.
- **Manipulácia s menovateľom.** Zúženie populácie s výsledkom na „tých, ktorí program dokončili“ potichu vypustí ľudí, ktorí odpadli, často najťažšie prípady, a nafúkne zdanlivú mieru. Menovateľa uveďte ako všetkých, ktorí začali, nie všetkých, ktorí skončili.
- **Žiadny kontrafaktuál.** Počítanie každého, kto dosiahol výsledok, vrátane tých, ktorí by ho dosiahli aj tak, nadsadzuje to, čo program kúpil. Pozri [kontrafaktuálnu analýzu](../kontrafaktuálna-analýza/).
- **Porovnávanie naprieč nezlučiteľnými definíciami výsledku.** „Potravinovo bezpečný“ meraný validovaným modulom prieskumu nie je porovnateľný s „potravinovo bezpečným“ uvedeným sám v dotazníku spokojnosti. Rebríček nákladov na výsledok je poctivý, len keď sa definície výsledku zhodujú.

## Zdroje

- New Philanthropy Capital (NPC), "Four Pillar Approach" to charity effectiveness. <https://www.thinknpc.org/resource-hub/four-pillar-approach/>
- Inspiring Impact, Outcomes Matrix and impact measurement resources. <https://inspiringimpact.org/>
- Trussell Trust and Heriot-Watt University, "State of Hunger" research programme. <https://www.trusselltrust.org/state-of-hunger/>
- GiveWell, "Our criteria" (cost-effectiveness as the leading criterion for charity recommendation). <https://www.givewell.org/how-we-work/our-criteria>
