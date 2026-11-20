# Vytesnenie a atribúcia

K vytesneniu dochádza, keď sa zdanlivý prínos programu dosiahne tým, že sa činnosť alebo prínos odoberie niekomu inému, namiesto toho, aby vznikla nová hodnota: vaša výhra je cudzia prehra. Atribúcia je príbuzná otázka, koľko z pozorovaného výsledku si môže vaša intervencia skutočne pripísať, keď prispeli aj iní aktéri a iné faktory. Obe úpravy sú štandardnou súčasťou britských usmernení na hodnotenie vo verejnom sektore, popri mŕtvej váhe a úniku, a obe sa bežne vynechávajú v tvrdeniach o dopade, ktoré vyzerajú oveľa presvedčivejšie, než sú.

## Prečo na tom záleží

Program grantov pre podniky miestneho úradu, ktorý pomôže 50 obchodom presťahovať sa do regeneračnej zóny, môže vykázať „podporených 50 podnikov, vytvorených 200 pracovných miest“. Ak sa však tieto podniky len presunuli z neďalekej hlavnej ulice namiesto toho, aby expandovali, pracovné miesta boli vytesnené, nie vytvorené, a čistý efekt pre celý okres (alebo región) sa môže blížiť k nule. Magenta Book britského ministerstva financií (HM Treasury) a dlhodobo používaný Additionality Guide (príručka dodatočnosti) považujú vytesnenie za povinný odpočet práve preto, že miestne úspechy sú časté aj vtedy, keď neprinášajú žiadny čistý národný ani regionálny prínos: hodnota sa len presunula, často na úkor oblasti alebo aktérov, ktorí o ňu prišli. Usmernenia na hodnotenie štrukturálnych fondov (používané pre bývalé programy Európskeho fondu regionálneho rozvoja a ich domáce nástupcov, napríklad UK Shared Prosperity Fund) to formalizujú na troch priestorových úrovniach: miestne vytesnenie (v rámci mesta), regionálne vytesnenie (v rámci regiónu) a národné vytesnenie (v rámci celého Spojeného kráľovstva). Intervencia totiž môže byť na jednej úrovni dodatočná, a na širšej úrovni čisté vytesnenie: program zamestnanosti, ktorý priťahuje pracovníkov zo susedného mesta, je na národnej úrovni neutrálny, aj keď vyzerá ako miestny úspech.

Atribúcia je súrodenecký problém pri dodávke založenej na partnerstvách, ktorá je dnes v sociálnom sektore a v službách naprieč agentúrami normou. Keď tri organizácie spoločne poskytujú službu prevencie bezdomovectva, výročná správa každej z nich môže nezávisle tvrdiť, že jej patrí zásluha za ten istý pokles počtu ľudí spiacich na ulici; po sčítaní správ môže deklarovaný dopad prevýšiť pozorovanú zmenu v reálnom svete, niekedy aj niekoľkonásobne. Usmernenie Magenta Book o analýze príspevku (contribution analysis) existuje práve preto, že náhodné pripísanie jedinému aktérovi je pri viacagentúrnej dodávke často nemožné a čestná odpoveď znie často „prispeli sme k tomuto výsledku“, nie „spôsobili sme tento výsledok“.

## Matematika

Vytesnenie ako súčasť štandardnej postupnosti výpočtu čistého dopadu (celý reťazec pozri v [dodatočnosť a mŕtva váha](../adicionalita-a-mŕtva-váha/)):

```
Čistý dodatočný dopad = Hrubý výsledok − Mŕtva váha − Vytesnenie − Únik, × Multiplikátor

Miera vytesnenia = prínos/činnosť presunutá odinud
                   / celkový pozorovaný hrubý prínos/činnosť
```

Atribúcia, keď k jednému výsledku prispieva viacero aktérov, sa zvyčajne vyjadruje ako podiel príspevku, nie ako presné percento, pretože ju zvyčajne nemožno merať s rovnakou prísnosťou ako vytesnenie:

```
Pripísateľný podiel ≈ f(sila kauzálneho príspevku, príspevky ostatných aktérov,
                         vonkajšie/kontextové faktory)

Deklarovaný dopad nesmie nikdy presiahnuť:
  Σ (pripísateľný podiel každého partnera) ≤ 100 % celkového pozorovaného výsledku
```

## Vypracovaný príklad

**Regeneračný grant**: grantová schéma pre hlavnú ulicu v mestskej rade vykazuje 200 nových pracovných miest v maloobchode vo financovanej zóne. Následný prieskum zistí, že 60 z týchto miest pochádza z podnikov, ktoré sa presťahovali zo susednej, nefinancovanej hlavnej ulice v tom istom okrese, a ďalších 30 z národných reťazcov, ktoré by otvorili pobočky niekde v regióne bez ohľadu na grant.

```
Deklarované hrubé pracovné miesta = 200
Miestne vytesnenie = 60 (presun v rámci okresu)
Regionálne vytesnenie = 30 (aj tak by sa otvorili v regióne)

Čisté dodatočné pracovné miesta (úroveň okresu) = 200 − 60 = 140
Čisté dodatočné pracovné miesta (úroveň regiónu) = 200 − 60 − 30 = 110
```

Čestné vyjadrenie závisí od geografickej úrovne, na ktorej záleží financujúcemu subjektu: obchodný prípad hodnotený pre ministerstvo financií na národnej alebo regionálnej úrovni má použiť 110, nie okresných 140 a už vôbec nie surových 200.

**Viacagentúrna služba pre bezdomovcov**: tri partnerské organizácie (mestská rada, bytová charita a zdravotnícky trust) spoločne poskytujú službu na zníženie počtu ľudí spiacich na ulici. Počet ľudí spiacich na ulici v oblasti za rok klesol o 30. Výročná správa každej organizácie tvrdí „znížili sme počet ľudí na ulici o 30“; po sčítaní tri správy deklarujú pomoc 90 ľuďom, teda trojnásobok skutočného poklesu. Analýza príspevku, ktorá priradí každému partnerovi podiel (povedzme 40 % mestská rada, 35 % charita, 25 % zdravotnícky trust, na základe zdokumentovanej úlohy a nezávislého posúdenia), by vykázala 12, 10,5 a 7,5, čo sa správne sčíta na pozorovaných 30.

## Súvislosť so softvérovým inžinierstvom

Vytesnenie a atribúcia ovplyvňujú, ako majú byť navrhnuté systémy na sledovanie dopadu a vykazovanie výsledkov pri dodávke na viacerých miestach alebo s viacerými partnermi:

- Geografický a organizačný rozsah majú byť v každom dashboarde dopadu explicitné, plnohodnotné polia: číslo vykázané „za okres“ a rovnaké číslo vykázané „za región“ sú dve rôzne čísla a systém, ktorý ich zamieňa, vytvorí čísla, ktoré sa na úrovni portfólia nedajú zosúladiť.
- Keď partneri dodávajú spoločne, systém výsledkov má zaznamenávať podiely príspevku (alebo aspoň označiť spoločnú atribúciu), namiesto toho, aby modul vykazovania každého partnera nezávisle nárokoval 100 % spoločného výsledku; inak súhrny na úrovni portfólia nadhodnotia celkový dopad, niekedy výrazne.
- To súvisí s [sociálnou návratnosťou investícií](../sociálna-návratnosť-investície/) a [vykazovaním výsledkov grantov](../vykazovanie-výsledkov-grantov/): výpočet SROI alebo IRIS+, ktorý ignoruje vytesnenie alebo nadmerne pripisuje spoločné výsledky, vytvorí nafúknutý pomer, ktorý neobstojí pri audite ani pri replikácii.

## Úskalia

- **Vykazovanie miestneho úspechu bez kontroly širšieho vytesnenia.** Program môže na najmenšej úrovni vykazovania vyzerať veľmi úspešne, a na širšej úrovni byť neutrálny alebo dokonca záporný; vždy uveďte geografickú úroveň, na ktorú sa čistý údaj vzťahuje.
- **Dovoliť každému partnerovi spoločnej dodávky nárokovať si plnú zásluhu.** Ak podiely príspevku nie sú dohodnuté a zdokumentované, súhrnné vykazovanie za partnerov nadhodnotí celkový dopad; skontrolujte, že nároky jednotlivých partnerov dohromady nepresahujú pozorovaný súčet.
- **Považovať atribúciu za presné percento, hoci ide o úsudok.** Analýza príspevku, na rozdiel od náhodného kontrafaktuálu, prináša obhájiteľný odhad, nie nameraný fakt; prezentujte ju s primeranou neistotou namiesto falošnej presnosti.
- **Ignorovanie vytesnenia pri intervenciách zameraných na trh.** Podpora podnikov, programy zamestnanosti a regenerácia viazaná na miesto sú klasické kategórie s vysokým vytesnením; kontroly vytesnenia pri nich považujte za povinné, nie voliteľné.

## Zdroje

- HM Treasury, "The Magenta Book: Central Government Guidance on Evaluation" (2020), including
  guidance on contribution analysis. <https://www.gov.uk/government/publications/the-magenta-book>
- HM Treasury / Department for Business, Innovation and Skills, "Additionality Guide: A Standard
  Approach to Assessing the Additional Impact of Interventions" (3rd edition).
- European Commission, "Evalsed: The Resource for the Evaluation of Socio-Economic Development" —
  guidance on local, regional, and national displacement scales.
- Mayne J. "Contribution Analysis: An Approach to Exploring Cause and Effect." ILAC Brief No. 16,
  2008.
