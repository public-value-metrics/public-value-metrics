# Hodnota umelej inteligencie vo verejnej správe

Hodnota umelej inteligencie vo verejnej správe je požiadavka, aby systém umelej inteligencie používaný vo verejnej službe prekonal rovnakú latku hodnoty za peniaze a verejnej hodnoty ako každé iné výdavkové rozhodnutie: nie nižšiu preto, že je novinkou, a nie vyššiu preto, že sa jej ľudia obávajú. Je to otázka, na ktorú musí vedieť odpovedať dodávateľský tím predtým, nie potom, čo sa funkcia s umelou inteligenciou spustí: prináša to viac hodnoty, než stojí, ak sa čestne ocenia aj zabezpečenie kvality, dohľad a riziko?

## Prečo na tom záleží

Britský Central Digital and Data Office (CDDO) zverejnil v roku 2024 Generative AI Framework for Government, nadväzujúci na predbežné usmernenie z júna 2023, a štruktúroval ho do desiatich zásad: čo generatívna umelá inteligencia je, jej etické dôsledky, bezpečnosť nástrojov, kontroly zabezpečenia kvality, riadenie celého životného cyklu generatívnej UI, identifikácia skutočných prípadov použitia, spolupráca naprieč vládou, transparentnosť, zručnosti a správa. Dôraz rámca na „zmysluplnú ľudskú kontrolu“ a riadenie celého životného cyklu existuje preto, že obchodné prípady projektov s umelou inteligenciou majú osobitný spôsob zlyhania, aký iné IT výdavky nemajú: hlavné číslo produktivity z pilotu sa ľahko vyrobí a ľahko nadsadí, pretože sa meria skôr, než sa zohľadní záťaž z overovania, opráv a dohľadu, ktorú nástroj vytvára. Popri rámci štandard Algorithmic Transparency Recording Standard (ATRS) ukladá verejným orgánom zverejniť štandardizovaný záznam (účel, použité údaje, výkonnosť, testovanie spravodlivosti, opatrenia ľudského dohľadu) pre algoritmické nástroje, ktoré významne ovplyvňujú rozhodnutia o jednotlivcoch. Náklady na zabezpečenie kvality systému s umelou inteligenciou sa tak stávajú verejným záznamom, nie interným odhadom, ktorý môže tím potichu vynechať.

## Matematika

Zavedenie umelej inteligencie sa posudzuje ako doplnok k štandardnému hodnoteniu [hodnoty za peniaze](../hodnota-za-peniaze/), nie ako jeho náhrada, pričom výrazy špecifické pre UI sa uvádzajú výslovne a nezlievajú sa do jediného čísla „zisk z produktivity“:

```
Čistá hodnota systému UI =
    zisk z produktivity (ušetrený čas × plné osobné náklady)
  − náklady na licenciu/výpočtový výkon
  − náklady na ľudské overovanie a dohľad (kontrola výstupu UI predtým,
    než sa podľa neho koná – ani pri vyspelých nástrojoch neklesnú na nulu)
  − náklady na dokumentáciu ATRS a priebežné monitorovanie
  − rizikovo upravené náklady škôd z chýb, skreslenia alebo halucinácií,
    vážené podľa toho, kto škodu nesie (distributional-weighting)

Číslo produktivity z pilotu, ktoré vynecháva člen dohľadu, nie je
porovnateľné so základným stavom nákladov, ktorý už obsahuje
rovnocennú ľudskú kontrolu – pozri ai-productivity-in-the-public-sector,
odkiaľ táto téma preberá podrobnejšiu disciplínu merania produktivity.
```

## Vypracovaný príklad

**Miestna samospráva používa nástroj generatívnej UI na návrhy prvých odpovedí na bežné otázky o dani z nehnuteľností**: 25 000 otázok ročne, doteraz celé vybavované referentmi s priemerom 14 minút na otázku, plné osobné náklady £34 za hodinu.

```
Základné náklady (bez UI):
  25 000 × (14/60) × £34 = £198 333 ročne

Tvrdenie z pilotu: UI vypracuje odpoveď za 90 sekúnd,
referent ju „iba skontroluje a odošle“ – tvrdený nový čas je 3 minúty
  25 000 × (3/60) × £34 = £42 500 ročne
  → tvrdená úspora £155 833 ročne (vyzerá to prevratne)

Plne zaťažený údaj, meraný po 3 mesiacoch ostrej prevádzky namiesto
ručne vybraných testovacích prípadov z pilotu:
  Skutočný čas kontroly a opráv na odpoveď: 6 minút (návrhy
  si pri zložitých alebo emočne citlivých otázkach vyžadujú skutočnú úpravu)
  25 000 × (6/60) × £34 = £85 000 ročne
  Náklady na licenciu/výpočtový výkon: £38 000 ročne
  Dokumentácia ATRS a štvrťročné monitorovanie skreslenia/kvality: £14 000 ročne
  Celkové náklady = 85 000 + 38 000 + 14 000 = £137 000 ročne

Skutočná úspora = 198 333 − 137 000 = £61 333 ročne – skutočná a stojí
za zachovanie, no výrazne pod polovicou tvrdenia z pilotu, a na jej
zistenie bolo potrebné čestné meranie času dohľadu, nie to najlepšie
možné z pilotu.
```

## Súvislosť so softvérovým inžinierstvom

Tu sa stretávajú [produktivita UI vo verejnom sektore](../produktivita-umelej-inteligencie-vo-verejnom-sektore/) a táto téma: inžinierske tímy, ktoré zabudovávajú funkcie UI do verejných služieb, vlastnia inštrumentáciu, vďaka ktorej je „skutočné“ číslo z vypracovaného príkladu možné. Zaznamenávajú skutočný čas kontroly, editačnú vzdialenosť medzi návrhom a odoslanou odpoveďou a mieru eskalácií, namiesto spoliehania sa na demonštračné podmienky pilotu. Funkcie UI by sa mali posudzovať podľa bodu 9 [štandardu digitálnych služieb](../štandard-digitálnych-služieb/) (zabezpečená služba, súkromie používateľa) a krížovo s [hodnotou kybernetickej bezpečnosti vo verejnom sektore](../hodnota-kybernetickej-bezpečnosti-vo-verejnom-sektore/), ak nástroj pracuje s údajmi občanov. Každý systém UI s významným vplyvom na rozhodnutia o jednotlivcoch potrebuje záznam ATRS, aby mohol byť považovaný za pripravený na posúdenie, rovnako ako služba potrebuje úspešné posúdenie podľa [štandardu digitálnych služieb](../štandard-digitálnych-služieb/), než sa spustí.

## Úskalia

- **AI-washing**: premenovanie existujúcej automatizácie založenej na pravidlách na „UI“, aby sa získalo financovanie alebo pozornosť vyhradená na zavádzanie UI, bez rizík presnosti či skreslenia, ktoré dodatočnú kontrolu rámca skutočne odôvodňujú.
- **Meranie produktivity z pilotu, nie z produkcie**: piloty bežia na vybraných testovacích prípadoch so zaujatými a pozornými kontrolórmi, produkcia na celej neusporiadanej zmesi prípadov s kontrolórmi, u ktorých sa časom vyvinie skreslenie z automatizácie a výstupy kontrolujú menej. Obe skresľujú čestný údaj o nákladoch na dohľad.
- **Vynechanie registrácie ATRS, lebo nástroj „nie je naozaj automatizované rozhodovanie“**: prahom štandardu je významný vplyv na rozhodnutie o jednotlivcovi, čo spĺňa väčšina nástrojov UI na návrhy alebo triedenie, ktoré komunikujú s občanmi, aj keď ich technicky schvaľuje človek.
- **Ignorovanie distribučného dopadu chýb**: miera chýb systému UI spriemerovaná cez všetkých používateľov môže skrývať oveľa vyššiu chybovosť alebo skreslenie pre určité skupiny. [Distribučné váženie](../distribučné-váženie/) treba použiť na rizikovo upravený člen škôd, nielen na súhrnný údaj o presnosti.

## Zdroje

- Central Digital and Data Office, Generative AI Framework for Government (2024). <https://www.gov.uk/government/publications/generative-ai-framework-for-hmg>
- Algorithmic Transparency Recording Standard. <https://www.gov.uk/government/collections/algorithmic-transparency-recording-standard-hub>
- HM Treasury, Green Book: central government guidance on appraisal and evaluation. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-governent>
